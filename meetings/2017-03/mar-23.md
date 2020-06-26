# March 23, 2017 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Dave Herman (DH),  Kent C. Dodds (KCD), Tim Disney (TD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), Michael Saboff (MLS), Sebastian Markbåge (SM), Bradley Farias (BFS), Maggie Pint (MPT), Jamund Ferguson (JXF), Myles Borins (MBS), Logan Smyth (LSH), Sarah D'Onofrio (SDO), Alan Schmitt (AS), Dean Tribble (DT), Peter Jensen (PJ), Mark S. Miller (MM), Leo Balter (LEO), Zibi Braniecki (ZB), Rafael Xavier (RX), Yehuda Katz (YK), Caridy Patiño (CP), Diego Ferreiro Val (DFV), Brendan Eich (BE), Lyza Gardner (LGR), István Sebestyén (IS), Matt Johnson (MAJ)

-----

## General Discussion

AWB: RSVP now for the NodeJS CTC meeting on the evening before the May TC39 meeting.
Before the TC39 meeting, there will be a meetup with the NodeJS CTC.


## 10.ii.a Dynamic Module Reform for stage 2

(Caridy Patiño)

- https://github.com/tc39/proposal-dynamic-modules
- https://docs.google.com/presentation/d/1EYOysPhgjXtgmuNoZ_wUCMElZ8GKLxJmCLeF0EvUXkc/edit#slide=id.g1f19d52d1f_0_0

YK: Even if node doesn't want this feature.

MF: In a previous slide you said anything you can do in node modules you should be able to do in ECMAScript modules. Can you clarify what you meant by that?

YK: I didn't hear him say those words.

MF: To my knowledge that is exactly what was on his slide.

CP: There's an example in the README where you can see things you can do today in CommonJS modules; you'll be able to do the same in ESM but you will not be able to do the same when you combine them.

DH: I just wanted to clarify that you meant that in an absolute sense, because there are things you are prevented from doing in ES Modules like mutating the export bindings.

MF: And the module namespace object cannot be callable in ESM.

DH: Okay, this could turn into a philosophical discussion, because umm default export looks like a thing that lets you do whatever you want to do, but I don't think we need to litigate this forever.

MM: I think we can just back off from what sounds like an absolute statement.

CP: What I meant to say is you can do it in ESModules today and transpile that in CommonJS, you should be able to do that same thing. I can rephrase that. There's more detail in the README to describe what I was trying to say. The second piece of feedback was from Allen. The fact that there might be side effects for these bindings... ?? Accessing an importing binding cannot have side effects.

DH: It's not just from an implementor's standpoint. It's from a programmer's standpoint that being about to be sure that accessing a variable doesn't cause random things is good.

CP: So the actual solution that we're proposing (this is the second iteration), Dave came up with the idea that whenever you're trying to run the instantiation processes of modules, you could inspect what modules you're trying to ?? If any of these are dynamic modules that haven't been evaluated yet, you should be able to store information and enforce this connection between the modules. So in slide 12 you'll see that we're doing the regular instantiation order... {references slides}. We'll continue doing the same for ESModules, but if any module is just a dynamic reference, we don't want to evaluate it up front. What we're doing is just adding these bits to a new slot called [[PendingImportEntries]] where we can store information about this binding and where it comes from. Eventually during module evaluation, right before `main.js` we're going to walk the list of [[PendingImportEntries]] and create the bindings for them. At that point `x` and `y` are already evaluated and we're all ready to evaluate `main`.

AWB: In this example you are only using default exports. Can it have named exports?

CP: Yes, it's the same thing.

BFS: The current plan is to only support default exports. We're working on other things... Much like this, you ??

AWB: It's clear that it wouldn't be very hard to make default work, but it wasn't clear that you could make an open-ended set of names work.

BFS: Correct.

CP: It's the same, we do have the details of the binding. We have the local name for the binding, the import name for the one we're importing from. One more point is that this solution is not just for CommonJS modules, but for any other dynamic modules (like wasm)

MM: What are the other possible values for the internal slot named ImportName?

CP: Let's switch to the spec text. It will clarify. Step 12.d.3  If you go through the module instantiation and creation, we get these ImportEntrys. We walk all the table entries from parsing the source text. If the entry is pending, we put it there. This is the same entry when you parse.

AK: To answer your question, the name default comes from the syntax. If you say `import a from './wherever'` that's where the `default` comes from.

MM: What are the other possible values for that slot?

DH: If you use named exports it would be whatever you asked for.

MM: And the reason why `default` is not mistaken as a variable name is because it's a keyword?

YK: I just want to say, in general, I don't think we need to worry that much about what Node does here. We need to worry that the semantics are flexible enough to give Node options, and I believe these are flexible enough for other options as well. But we shouldn't be concerned about that.

AK: Given the motivation stated at the beginning is based on node, it's interesting that you say that. Until this morning, I had not heard this was meant to support dynamic modules cases other than node.

YK: I think AMD modules have always been a plausible story. I've been talking with Dave about whether this is actually true that there are other use cases and that's when we realized that the future transpiliation use case exists.

CP: To add to that. If you go to the rationale paragraph, one example is CommonJS, but this is about general dynamic modules, not specifically CommonJS.

AWB: I have a question. You're describing this in terms of module declaration instantiations. I'm interested in how this generalizes to what the actual JS programmer sees. So if you have something you've imported with either a default binding or even a named binding, but the module is in its pending state...??

CP: We do have an example in the slides..

AWB: I'm wondering when they're resolved and if it's possible to try to access in the JS code while it's still pending.

DH: I believe that the programming model is that the validation will occur before execution starts.

AWB: That means that the evaluation of the dynamic module (its body or whatever it needs)... In CJS, you need to evaluate the entire module... That will happen before evaluating any code of the importing module.

CP: We can go to module evaluation in the spec and you will see in step 7 right after we evaluate all the dependencies. then we are ready to evaluate the ES module that is importing the dynamic module. We eval the pending bindings, otherwise we throw an error. So before the source test but after the dependencies.

AWB: Ok, you described this as Create Pending Binding, you resolve all these bindings and their values are available.

CP: Yes.

AWB: Ok, any evaluation of import modules still takes place prior to any evaluation of the importing module?

CP: Yes.

DH: Assuming you have cycles. You have to pick one to go first. So you can witness uninitialized variables, but that's the same as in any system.

AWB: Ok.

DH: Do you want to say more Caridy?

CP: I think the last one is just an example. But, that's it.

AK: The last time we talked about this, there was a discussion of circularity and how you can make guarantees. You discussed this but I don't know what changed.

CP: Yeah, we were doing more work on the module evaluation? phase... We settled on the idea of simply making sure all these imports can be created during evaluation and if they're not ready we throw an error. In the previous proposal we were still evaluating the importer source text and then running an extra step to make sure everything was ready. The conclusion is in node today you cannot do those things. You cannot have circular dependencies in this way because the export update hasn't been created yet. We were trying to solve a problem that wasn't really a problem.

AK: Going back to the previous discussion, you basically cause the module to export all the things that anyone tried to get from it, and then if that fails you get an error.

MM: What is "tried to cause the module to export anything anyone tried to get from it"?

AK: For ES modules they export the things they declare as exporting. For dynamic modules their set of exports is defined by their importers. I could say `import atom from underscore` and atom will now be exported from underscore.

BFS: I don't think that's entirely true if we go back to module declaration and instantiation, I think it's statically checked.

CP: You can resolve to pending because you haven't evaluated the dynamic module.

BFS: So if the loader does not generate a pending, does that mean it's an error?

CP: If you know the shape of it without evaluating it, you don't need to return pending.

AK: If resolution is ambiguous or pending... throw a syntax error? I'm confused...In section 9b.

CP: {references 9b}. It's never declared or created, because of that we throw an error.

AK: Okay I need to read this new spec then, more closely I guess.

YK: I think it would help people to do that, maybe we can pause this.

AK: It's possible it's a waste of most people's time because it is very detailed.

AWB: I have what I think is a higher level question. A lot of this is about initialization order, so I want to verify my understanding. If I have a module and it has 3 imports: a, b, c using default imports. And let's assume their bodies is just a console.log and that a, b, c each don't depend on anything else. The expectation would be that when you load the root module, you would see on your console: a, b, then c and anything the importing module did. Now if b is changed to be dynamic, am I correct that we'd see: a, c, b?

DH: No, the whole point of this is to preserve the original behavior.

AWB: Ok, then my understanding of what the pending modules works..

DH: Caridy is the one deep in the spec. Pending is about these are the names that have been requested by some of the importing modules but we can't yet validate them because we haven't executed them yet.

CP: It's not evaluation, it's creation of the import binding. But yes, you are correct.

DH: And won't have created those until after we have finished evaluation of all the dependencies before evaluating the importing module.

CP: After evaluation of all the dependencies but before the execution of the module. The whole proposal is saying that during the instantiation we need to create the import bindings, but we cannot create some of them yet....

WH: What does the default indicate?

DH: That's about the whole default import syntax: `import a from 'a'`, that `a` is effectively sugar for: `import { default as a } from 'a'`.

WH: So, is it possible not to export a default?

DH: Yes it's possible not to export a default. That's in ECMAScript syntax. In a dynamic module, you can choose to name one of the imports "default".

AWB: I think I'm comfortable with what's happening here, whether the details of the spec are (perfect?) or not.

DH: I think Caridy did a good job talking about the goals. We can make sure the spec is flexible enough to preserve the order of the modules loaded whether they're ESModules or Dynamic modules. You don't want validation to happen at arbitrary times. We want to get, early in the programming model that we can evaluate modules in a consistent order regardless of what kind of module they are...

AWB: So if .. I think the only observable difference here is that if a dynamic module is involved, there are some situations where an unresolved import binding error, where in the current spec that would always be produced bfore any evaluations, there are now situations where some of those errors may occur after some eval has started, but only in the presence of dynamic modules.

CP: Correct.

DH: A way to make that more concrete. A dyn module, since it could have executed before a static module, could dynamically ask for the module and so observe whether it's been initialized, but there are no invariants violated in that scenario.

AK: When you say executing the modules in the body of the source function ??? This adds a strangeness to the lexical environment of modules. Meaning they have their lexical environment changed after it's created.

DH: In other words, is there a soundness hole here?  Where a cycle between a source text module and a dynamic module... where the dyn module can see the source text module before it has validated.

AK: Yeah, at the moment that just creates a reference error, but the way the spec is written is strange. The static module doesn't create a lexical binding. From an implementation perspective, it doesn't ??? This is interesting...

AWB: Ideally this all simply reduces to TDZ-like behavior. Certainly the root module that's exporting some things... Before it goes off and evaluates anything, if it's a source-text module it doesn't know the binding values it knows all the names...

AK: But that's not how the spec is written. It says we don't create the lexical binding until after that function has run.

WH: Do we have any idea as to which lexical binding when it gets created.

AK: It could be global.

```js
import {a} from 'a'
export function f() {
    console.log(a)
}
```

DH: Oh, the fact that the way the spec is written means it doesn't add it to the environment. That's just a bug in the spec.

MM: Ok, good.

AWB: Yeah.

DH: It should be changed to add the lexical binding. Our goal was to not have it be possible for import binding to ever trigger side effects, including dynamic reference errors whenever they are evaluated. Adam has found a case where before you have started eval of top level code, it's still possible to enter into a function, resolve a binding and get a dynamic error.
  We got close and "I'll take close".

YK: I think there is a different way that I would...(cut off)

CP: One thing that I want to clarify is that this is only possible if you have 3 modules, where 2 are ESModules and the 3rd is a dynamic module and there is circularity with the dynamic module. The problem doesn't matter because it doesn't exist.

MM: Now that Adam has identified the bug clearly, I don't understand why you are willing to live with it. Now that it's been identified, is there anything especially hard about closing the bug?

DH: Oh, its characterization is straightforward, but the solution is not obvious.

MM: Well if the solution is not obvious then I don't understand the problem.

DH: Well, what's the obvious solution?

MM: You want all the scopes and bindings to be populated (not initialized but populated) before anything can be observed.

DH: Of course, oh, there's a fix for the not setting up the lexical environment correctly. You just create it up front, you can never observe that that changes. However it's now pointing to an export that we can't yet validate if it exists. We can't yet validate if the thing we're importing is a real thing that's being the exported.

WH: So would you do a TDZ?

AWB: It has to be a TDZ.

DH: This is effectively a TDZ.

YK: Yes, it needs to be a TDZ.

MM: If the failure is a TDZ then I'm happy, but I thought the bug was other than a TDZ.

AK: I'm happy to explain why this is....it's not trivial to fix.

YK: So I think that Dave's characterization of the goal (no side-effects, but reference errors). Referring to a variable might create a reference error, there's an invariant there. It would be fatal if we were not able to avoid it with other assignments. I had never lumped those assignments together.

AK: My complaint wasn't this did an error, but that it did something very strange where it tried to access outside of the lexical environment.

YK: Your point last meeting was it had side effects.

DH: You pointed out 2 issues and we are conflating them.

MM: State the one that is egregious and easy to fix.

DH: The one that's easily fixed is we don't even add the binding to the lexical environment first, and we can witness that, then we add it later. We add the same variable reference before and after we can be looking up an entirely different environment. That's a bug and we can fix it.

CP: So I....

DH: We thought it was the case that there wasn't ever a case that you could .... ?

MM: So when you access...

DH: We may be able to fix that, we just found out about it, but we can investigate it. This only happens when you early call a bunch of functions several times. You have no hope of that doing reasonable things anyway.

WH: What would be subjected to the TDZ? Would the call of the function fail because you would get a TDZ error on invoking it, or would the function run and get TDZ errors inside it when it accesses variables?

CP: I created an example on slide #15. It shows the problem that Adam referenced.

AK: I want to explain why the previous version of the proposal tried to do the other way of doing this. Some new machinery must be invented. The other module doesn't have an environment record, so you can't set it up correctly because there is no exporting module thing yet. Where does that get created?  The node loader default only solution solves all this. If that's the only dynamic loader you must deal with, then it could never fail because you know what exports you have to deal with.

YK: That's only what they currently think they _might_ want to do.

DH: We heard Bradley say they're investigating ways to see how you could state what you're export set is. So let's say, from a user model perspective, there's something that node recognizes that allows you to specify upfront what your fixed shape is, what that could be built on top of is a reflective layer (nothing exists for this now), but you're opting into that where you state I'm playing by new rules that say I have a fixed state that I cannot change dynamically. If you do this, then we don't need to execute to discover what that shape is. In other words, either you have that thing and you don't need to execute, in which case you have to be a default export and again we know the shape of that as well...

YK: I would be happy to explore that.

BFS: We have prototyped out exactly that. You can model it with two ES modules right now.

DH: Sure, perfect. And we could make that API nicely. The going assumption we had is that the only way to discover the shape was to execute it. I'm suggesting that instead of that, we could say you have to declare before you execute what the static shape is.

WH: By static shape you mean "names and exports"?

DH: Yes, that's the thing you declare once and for all and never changes. You can state names before your execution.

WH: And that would be constant, it's not computed?

DH: It would be computed dynamically, but it is staged, in the sense that once you have told the system what it is, that's frozen and immutable and will never change.

WH: What does that computation have access to?  Does it have access to other modules or is it purely local?

BFS: Let me explain what we have right now. Basically when you get a list of exports for some sort of dynamic record, we're generating a static list of specifiers (like we saw earlier), and that needs to be available at or before module instantiation, by that time it is static and frozen. That's when observable effects come into play.

CP: Does that mean that you evaluate the module?

BFS: We have a couple of different shapes of modules but we know all their shapes prior to evaluating them currently.

AK: When you say node, this is in some thing outside the language, you aren't evaluating expression to figure it out right?

BFS: No, there are a few different approaches (Dave mentioned one: an out of band file), or some pragma at the top.

DH: I want to continue answering WH's question. If you are making it dynamic, that is exactly the right question to poke at when looking for soundness or initialization order problems. I believe that a staged system makes it possible to avoid that problem, but we need to investigate this further.

WH: I'm fine with poking at that problem later.

DH: It's the right kind of question, but now's not the time to answer it. But we should allow you to declare upfront what the shape is in a way where it doesn't have access to the modules before they've been evaluated. This means it now becomes easy to have a straightforward binding setup and evaluation setup...

WH: What does the shape consist of?  Just names?  Or does it matter what kind of thing?  e.g., getter/setter, proxy, etc.

AWB: They're just names.

DH: From the outside it doesn't change with those things. For pre-existing systems, they'll just have the static shape of one export called `default` which is a dynamic binding that can be anything. So unless the author opts-in, they'll get the single anonymous default export. That's pretty close to what Node has planned already. We're just hypothetically creating a flexible system they could build on top of.

AK: This is an interesting area of discussion. I'm starting to wonder though if these dyn modules are going to be modeled as providing a static set of exports. Does that reduce the amount of spec change needed to support them?

DH: Yes, this is what I'm saying is that we've identified a much simpler system here.

AK: Is any spec change required?

DH: Possibly not. There's almost nothing in the spec to support dynamic modules. The combination of the work on Caridy's part combined with the feedback from Adam, we've come up with a much simpler answer. And I'd like to take the learning and apply it to the next rounds in May. I don't want to discuss whether or not this is stage 2 because I know what the next steps are and they fold into what the API for dynamic module creation is. Sorry Caridy, I just said that without asking your opinion... What do you think?

CP: It is true that if we go that route it will be simpler. No changes in the spec are needed.

DH: I'm excited, I think this is a good place to wrap things up unless anyone has feedback or questions.

AWB: I'm going to pile on. I think that the fundamental thing here is that if you say `import foo.js` is there a way to determine the exported names from that module without having to evaluate code?

DH: The quickest way to explain is that Node discovered a key thing. We can make the default mode for the whole ecosystem to be `default` export and we can opt-into named export. That gives us strong backward compatibility. Once you have that it's easier to see your way to semantics that makes sense. Is that right Bradley?

BFS: Yes.

YK: One other closing the loop. There's also AMD modules. They don't trivially have a solution. I think that having them default to default export works fine. Because they are eval'd with an outer wrapper and an inner function, you can add to the outer wrapper pretty easily.

DH: Thanks for bringing that up because it's easy to forget about other dynamic modules systems.

YK: Yeah, we use AMD so... :)

AWB: At a pure reflection level, you can imagine that the reflection API that when you instantiate a dynamic module, you are required to specify what the export names are.

DH: Ok, I think this is a good place to end this discussion.

WH: I'd love for someone to go through the example on the screen to determine the sequence of events.

DH: It doesn't matter anymore because the new system means this will never happen.

WH: Why is that?

DH: Because we know the shape before any evaluation takes place.

WH: Does `y.js` have a default export or not?

CP: Yes.

WH: If it has a default export, then what's the problem? You're importing its default binding so already know its shape. Is it because it's not the right value?

CP: The `import x from 'x.js'` happens ....

DH: Can we discuss this offline? It's not important because we're not going to do this anyway. Let's take a break.

[Per discussion during the break it turned out that the example on the screen had other bugs.]


#### Conclusion/Resolution

- Remains on stage 1

_Awesome work, now simplified as a result of awesome feedback. A new version will be presented at next meeting._

## 10.ii.c Realms update

(Dave Herman)

- [slides](https://github.com/tc39/agendas/raw/master/2017/tc39-2017-003-realms-update.pdf)

DH: This is a recap of the work I've done on the realms API.

DH: Working with Caridy, MarkM, Dean, and others.

DH: Realms are similar to an iframe on the web. Effectively you can have 2 different copies of the JS world that can talk to each other. Historically this didn't exist in the spec, but it was a reality.

MM: Up to ES5, there was this fiction that all JS computation and execution happened in one realm, but with iframes this wasn't true.

DH: On top of that, node has the VM object with similar functionality. That's now (ES6) codified in the spec, but there isn't a formal way to interact with them. You can create a new iframe, but it comes with all this DOM crap. The goal is the Realm API is to just create multiple realms with nothing else by default. This is useful for building frameworks and structures on top of it. It's a pretty low-level (and complicated) API. This is something you do when you're implementing a transpiler or security framework. So it's ok if the surface API is a little advanced. Goals for today are to present progress and get feedback. I'm not looking for stage 2 at this point. I presented my current thinking in January and mentioned I believe we can get to a place where we don't need a registry API or loader API. We had thought we needed those. I think there are a couple of tiny hooks we want in the browser space, but most of the functionality can be done in user-land. I have some sample code. Please don't nerd-snipe me too hard. I have a plausibility argument and it's looking more and more plausible to me. The first example is the smallest I could come up with.

DE: Example: a tiny, fixed registry.

DE: They have one big switch at the top of the code that said. If the module is jquery, give them a simple version of jquery, if it was underscore, etc. And that was their entire registry. So maybe you can build a tiny fixed registry this way (using realms).

CP: Another point around this is today people use Rollup which is effectively a ???? for client-side.

DH: By calling super I'm subclassing the builtin realm API. It is just a demo here.

WH: You are missing a declaration of #registry.

DH: OK I just got the details of the private field wrong. Imagine there is a declaration. At any given time a "registry" might want you to load new modules. So I'm taking jquery as an example of that. So you have a jquery loaded in one realm, and you want to explicitly share it to another realm. You may want to allow modules to be realm-specific.

KCD: When I worked at Domo people could build little graphs on their own. And a big problem we had was that every single one of these were loading their own angular. This would be a perfect solution for that.

DH: Perfect, yes, I use jquery as an example, but there may be other big things. In order to have total reflective control over the whole realm, you need total reflective control over the import. I'm not confident I have everything nailed down, but the basic idea is that you can specify a hook and by doing that you can tell the system how to resolve a name and how to provide it with a module. So here, I have a fixed set of modules in my registry, if it's not one of those, then throw a reference error, otherwise....

WH: What does `this.#registry.graph().then(graph => graph[name])` do? What's in `this.#registry` hasn't been explained yet.

DH: {explains slide}. This is asynchronous, allowing you to use `import()` as well as top level import.

WH: Who gets to call the [Realm.import] method? Only the system, or can adversarial user code call it and cause trouble?

DH: One way to think about the entire realm API is that it is a privileged API. There's never direct access to that API. There are documented ways in which e.g., the import semantics triggers these hooks, but there's no direct access given to the realm object to code within the realm. The creator of the realm has access to it, but they control whether it's made available to anyone else.

DH: So top level usage of this, we create a realm, we use eval, use `import()` and that produces a promise and that gives us the module.


KCD: So what you normally get, is that going to be whatever is exported from that module?

BFS: The completion value?

DH: The result of `eval()` is going to be the completion value of eval. I'm forgetting the details of the import-parens syntax.

BFS: It needs to be in an expression position.

DH: So I'd have to put parens around the eval here (in the example)?

KCD: I basically want to know what's returned from a call to `eval`, is it a completion value or is there some mechanism to export something specific?

DH: I'll get to how to dynamically create modules in a realm, which is a key feature, but that's separate ... There's a semantic surface we need to be able to cover in an API. But basically, the code evaluated in `eval` is a script, not a module.

AWB: So you've chosen to expose an eval() method that evaluates ???. You could also choose to expose an `import` method.

DH: I think it's important to expose the minimal API you need first and not mix them in with conveniences. What's the minimum set of stuff that I need? This is an EWM kind of API. It's a low-level API to begin with and people can build abstractions on top of it.

AWB: If you look at it from the point of view of modeling what the language lets you do syntactically, we have two types of top level.

DH: Agreed, but allow me to proceed because there's more.

MM: Of the Script start symbol, those strings that satisfy that grammar can be evaluated as scripts or as eval-code.

DH: Oh we talked about that before, yes.

CP: We have github issues for those.

DH: [continuing demo] This is the registry class. Imagine I have a @memoize decorator... This is not the module namespace, it's a reflective API that we need to have to do all the things you could reflect on for modules. So I'm positing a parseModule operation. It difffers from eval. I want to take some source code and get a module record that has been parsed by an engine so that, e.g., I can ask what names it depends on. I need the ability to go meta on code to setup the environment for running it. So this helper method is just basically to fetch all things in my graph, for this tiny demo I can just fetch them all upfront.

DH: Continuing on.....by the way Caridy did you find the PDF for this?

CP: Yes.

DH: The `graph` method is the one we actually saw the first class using. How do we do the linking? We have to go and fetch them asynchronously. The result of this is going to be a promise. For the module record A it basically has this not-yet-satisfied set of dependencies. Where it asked for the name `./b.js` I'm telling `b` is the thing that satisfies the dependency. For `b` I'm doing it imperatively. This is also at the level that's teetering toward bike shedding, so I don't want to spend that much...

DT: What does `link()` do?

DH: Link is the thing that says .... now what we're doing here is wiring together a graph. As a recovering functional programmer. One of the things I discovered is that functional programming is especially (good|bad)? at graphs. Imperative programming can be very helpful here.

AWB: So link can produce an error?

DH: Yes, that's right. Now I'm not convinced that I've nailed a connection here. Sorry about that. I think it's getting close to a way to tie this all into the semantic operations of the module link and evaluation process.

AK: Feel free to defer this. It seems like you're presenting a bunch of examples and maybe you'll cover the concepts later? Is it a non-goal to allow this to apply to existing realms?

DH: For the time being, it's a non-goal. I think it's a much thornier space because you have all kinds of questions about what the existing environment is depending on...

MM: I think a way to rationalize, to imagine how one would extend this to hook into those existing host frameworks (iframe, etc) is to imagine that this had come first and that the host frameworks were built on top of that.

DH: Should people have the power to modify the environment they're running in? That said, there are critical pieces to configuring my environment that will matter a lot. A lot of the loader API in the space of what you're talking about (configuring the environment in which my core API is running) is satisfied by Service Worker which can do this. Like how do we lookup module names when they're imported. I think it doesn't satisfy all of the use cases. For one, the first-run semantics (the things you can't do when you first run your app). Also what you can't...

YK: You mean illegal URL?

BFS: The specifiers are different.

YK: ServiceWorker intercepts network requests, and it's unclear ??

DH: It has restrictions which should be a URL and you ...??

AK: That's a syntax error.

DH: That's something you want to do and you can't right now. That can be solved with some fixes to Service Worker, and ??

AK: So you're not suggesting this is the way to solve this.

DH: That seems like an obvious reaction to have, sorry. I'm considering these separate.

BFS: Your comment on being a recovering functional programmer. We have this already implemented and we're moving to a functional approach for reasons we can discuss.

DH: I'd be happy to discuss that.

MM: To elaborate on my response to Adam's question. I think there are two very clear examples. Really one example... That motivates a lot of the separation and the rationalized re-layering. One of the things you'd like to be able to do with this is in user-land create a library that would run on node, creates a multi-framed browser environment. Likewise you'd like to run a multi-vm environment in the browser. This is possible with Realm because of the required isolation.

YK: There's a thing Dave just said is that a big part of what happened here is the original loader API had a lot to do with networky considerations. Service Worker took care of that. So now if we tried to do that it would have composability issues with Service Worker, so now we can defer to that instead of standardize it in the JavaScript layer.

DH: Yeah, in some sense, this is about getting the layering right. The original attempts were eating into the network layer. This really is about hooking into the core syntactic elements of JavaScript and then allowing the hooking code to hook into those other layers as appropriate.

WH: Trivial question... Where did `this.#jquery` come from?

DH: From the constructor. That came from when the registry was instantiated. But the point is that's coming from the outer realm and sharing that explicitly to the child realm. You never get implicit sharing. Ok, concepts: parseModule, import hook, a way to satisfy modules independently, and a way to link those modules.

BFS: Is there a reason we used a computed property instead of just a name?

DH: (new slide) Example: a dynamic loader. Here's another TinyLittleRealm class. Uses a TinlyLittleLoader class which is sharing jQuery from the outer realm to the inner realm. Referrer is used to deal with de-relativization. The loader is going to produce a custom type relative to this program. The final stage of loading this module is it's fully linked and here's the finally linked module. So `linked` is a promise of the fully linked module. `module.ensureEvaluated()` ensures that if it hasn't been evaluated so far it will be evaluated now.

WH: Is `[Realm.import]` always async?

DH: Yes.

BFS: We can have this discussion, but with async functions...?? I don't want to talk about this now. It looks fine to me :)

DH: Same top-level usage.

BFS: I do have a question on `ensureEvaluated` here, in the previous slide I thought `realm.import` returned an unevaluated dependency and this one looks like it ensures it's evaluated. If it's coming from something that's not evaluated, you're hoisting evaluation.

DH: It's a bug in the first demo. You should just call `ensureEvaluated`.

MM: Can module be a regular object?

DH: No I would expect that to be some kind of brand check. I don't want to add a bunch of conversation and other conveniences that confuse the underlying model. {explains slides}. The register helper method will do the work of fetching this thing. Effectively we have a userland implementation of the core semantics of default module loading in ECMAScript. We'll fetch the specify, parse the module, then get all the requested names (specifiers), then do a recursive load on all of those specifiers, once that's completed, then we'll add them to the dependency graph and then call link on the module and set the three promise steps as the entry in the registry so you can track the progress of the whole thing.

WH: Interesting that you didn't write these using `async` functions.

DH: Went back and forth on that.

MM: Is this a case where...

DH: Part of the value of being able to implement loaders in user-land is there's so much value in doing this. There's sort of no end to the different ways you want to do it. There are tons of different things that you might want to do. What's exciting to me about what we're doing is how simple it is. Effectively hooking into `import` is the whole story.

DT: If that was a for loop with async/await instead of `Promise.all`, it would serialize it. So this is a good example of where the lower level tools are very useful. This example may also be a good foil for working out fancier support for async/await without full serialization.

MM: Can you point out explicitly where you're gaining information from the API that you would be otherwise required to parse yourself without it?

DH: `requestedNames` tell me all the import strings that appeared in the source code.

WH: So the registry defined on the last line of the example combines `name` with three promises.

DH: Right, and that's something specific about this demo. So I'm trying to demonstrate that userland registries and loaders are going to be possible. We have those hooks. Caridy's been working on a polyfill.

CP: Yes.

DH: That work continues. Other than that I'm just looking for more feedback.

AWB: At least in the spec, names and bindings might be mixed up. Let's be more specific. (basically)

DH: Name is a pretty overloaded term...

BFS: I think there's still a little more API work to be done here (I guess we're at stage 1 so that's expected). I don't think you should expose as much of the low level hooks as you have here.

DH: Oh, interesting.

BFS: We should always make sure that ??? is a promise.

CP: We do have an issue in the loader spec, so we will not utilize the name here.

YK: If your opinion is it's fine that the ??? module returns a promise. If you want to access the promise, we disallow you to do that.

MM: Yep.

MM: I just want to mention that people don't read too much into the specificity here.... We are discussing some radical refactorings to this, so this may be very different in the future.

AWB: For your jquery example, you're essentially showing sharing jquery across multiple realms you might want to create here. The footgun aspect of that is it would seem on the surface is that that instance of jquery you're sharing itself is going to be compiled in a different realm than the realm that you're sharing it in.

CP: I don't think that will be a problem. I think you are abstracting the normal jquery object. I don't think it will really matter much, you can evaluate jquery in the new realm, extract the global jquery object and use it as in the example. This jquery will somehow have to become a dynamic module.

DH: I want to call that by design. (Scott Isaac told me JS causing general protection faults was by design.) Here's what realms are. By default everything is separated, for security, etc. B) so you know every time you're incurring sharing. If you choose to share a library that you know was designed to only be used in 1 realm, you face the consequences. OR maybe you design a library that works across realms. It gives you the control as a module writer to do whatever you want.

MM: The frozen realm work is specifically targetting to deal with the issue Allen's raising (it's called an identity discontinuity). Most existing JS code and legacy libraries are not built to work smoothly between realms. And that will remain the case because it's conceptually difficult. Frozen realm is a way to use a single realm where you have multiple protection domains and global scopes all sharing the single realm. Frozen realms is an extension of the realms work which solves this problem.

AWB: So that sounds like one way to do it. Part of what I'm wondering is that you are almost there and people are going to trip over that, and maybe some minor tweaks might address that. e.g., If jquery is shared at the parsed module level, then you get most of the sharing efficiency without the complexity.

DH: I definitely believe there's a lot we can do at parseModule to share the work you do.

YK: I want to reiterate what Dave says about this being a low level API. But the discontinuity problem has an inverse problem is some modules....such as Ember's server-side rendering library works, which is there is a realm which emulates some portion of the browser. Let's call it the Ember Realm. We want it to render some stuff then take the results and serve it over http. In order to make that work, the host realm needs to give Ember a way to get it back. That thing would have a discontinity if you copied it, because that thing's internals expected to be in the other realm.

MM: If both of those were operating under a single frozen realm...

YK: If you think the solution to that problem could be solved at the parseModule by making copies.

MM: So you're not arguing that you cannot solve that problem with a single frozen realm?

YK: No I was simply arguing that you could also solve that with the parseModule API.

DH: Do you mind if I do a quick synthesis. What we're all taking about is sort of the classic problems of sharing and mutation. And there are sort of classic solutions which include mutability and copying. And so I think this is the first trip around the block to explore, and we'll keep exploring that and not trying to solve more than we need at this point. I think making it inexpensive so that you can instantiate a module across realms is (very good).... Frozen realms. I like immutable data structure. I think frozen realms have a lot of promise as well.

BFS: I agree with everything you just said, so that's good. Has any thought been given to the behavior of the window.proxy object?

DH: Domenic has been asking useful questions about this on one of the issues. We have some discussion here.

BFS: In node, we don't have a proxy object for example so we just need to make sure..

MM: Just need to head off the term confusion. The `WindowProxy` object cannot be modeled with an ES6 Proxy.

BFS: Has there been any consideration of job queues?  e.g., the promise realm is shared across realms?

MM: Yeah, they're pro-worker per agent. Not per-realm.

BFS: I didn't see anything about controlling promises here. Is that separate?

MM: Yes, once Dave revives the old wiki.ecmascript.org pages. I can point you at a bare start at an API to try to re-ify agent.

DH: Even though they belong in separate layers we want to make sure that they are....similar.

MM: They're largely orthogonal. If you wanted job queues and enqueue things on specific job queues. None of that is written down on the agent API, but if we wanted to address them reflexively they'd go in ??

AWB: Mark, the wayback machine has a pretty good archive of wiki.ecmascript.org.

DH: Ok, thanks everyone.

#### Conclusion/Resolution

- Stage remains at stage 1. This was just an update.

## 10.iv.a Arbitrary precision integer type for stage 2

- [slides](https://docs.google.com/presentation/d/1lKscD8d_i1mz1w_puWJKW4LCyQLgrb0CySHVukohkLE/edit#slide=id.g1c4f05590f_0_115)

### Slide: _Why Integer rather than Int64?_

DE: Basically the strange wrap-around semantics in C is almost always a bug. Anyone who actually wants that can apply it straightforwardly.

### Slide: _How?_

DE: New primitive type `Integer`.

MF: I wanted to point out because I didn't originally realise it myself: the `n` suffix is chosen because it's orthogonal to the base representation. You could represent binary, octal, decimal, and hex notation integers.

BE: The suffix "n" is a good choice because it is the second letter in "Integer" and "I" would not be a good choice.

```js
// Takes a Integer as an argument and returns a Integer
function nthPrime(nth) {
  function isPrime(p) {
    for (let i = 2n; i < p; i++) {
      if (p % i === 0n) return false;
    }
    return true;
  }
  for (let i = 2n; ; i++) {
    if (isPrime(i)) {
      if (--nth === 0n) return i;
    }
  }
}
```

### Slide: _Code sample: asm.js (?)_

```js
function Add64Module(stdlib, foreign, buffer) {
  "use asm";
  var cast = stdlib.Integer.asUintN;
  var values = new stdlib.Uint64Array(buffer);
  function add64(aIndex, bIndex) {
    aIndex = aIndex|0;
    bIndex = bIndex|0;
    var aValue = values[aIndex>>3];
    var bValue = values[bIndex>>3];
    return cast(64, aValue + bValue);
  }
  return { add64: add64 };
}
```

DE: It's not clear if we want to add support for asm.js.

BE: It's hard to remove asm.js as it's just a subset. It's not like WebAssembly is the only way people will...

DE: If we did want Integer to work with asm validation. It can work, but it's unclear if we want to make it work.

BE: Let's talk about that later.

### Slide: _Library Features_

DE: For library features there's Int64Array and Uint64Array. And functions to get these from array bufers.

- Uint64Array, Int64Array
- Integer static methods
  - Integer.parseInt
  - Integer.asUintN, Integer.asIntN

### Slide: _No Implicit Coercion_

MM: _questions about n..._

DE: The current proposal is acually to use "N". Bikeshedding.

BE: I don't think it's the name so much as the variability of the "n".

MM: I was thinking you would say Integer.asInt64, rather than Integer.asIntN(64,...)

BE: If you look at the ASM.js example, you can see that it's cast `asUintN` and then ...

DE: Maybe we should have asInt64 as a spcific thing.

MM: Now that I see that the number was a parameter, I have no objection.

DE: This is identical to the Integer64 proposal but there's no implicit conversion. This is because there is no type that subsumes the other. Also, if you have a bare 1, it has to stay a Number for web-compatibility. Therefore we require an explicit cast such as calling the Number constructor.

DE: If you do `+ Integer` the current proposal would throw (?)

AK: I don't think it's only asm.js that uses this. People have used addition elsewhere to cast things to numbers.

YK: Yeah, I've done it.

SYG: If plus Integer returned an Integer?

BE: It's not truly backward compatible. If you mix old and new code (and we changed the semantics of `+`) then we can't change that.

AWB: This is always an issue with ...

WH: It's only a matter of degree. Unary + is commonly used to coerce to Numbers in existing practice. However, unary - can also be used to coerce to Numbers, but prohibiting unary - on Integers to produce Integers wouldn't fly.

BE: Possibly an open issue: what to do with +

DE: It's on the bug tracker (Shu filed it).

MF: Dan do you mind going into some of the issues with comparison operators now?

DE: The current semantics are that `Number === Integer` will return `false`.

### Slide 14: Comparison semantics: current proposal

- `1 === 1n` `false`
- `1 == 1n` is TypeError
- `1 < 1n` is TypeError

MM: I like this. With `==` I'm concerned:  what does `1n == null` do?

DE: It coerces null into a Number, do the compare, and then get a TypeError. We could discard future-proofing so we could make the comparison operators work for this case.

### Slide 15: Comparison semantics: Allow semantic comparison

- `1 === 1n` is `false`
- `1 == 1n` is `true`
- `1 < 1n` is `true`

MM: I like the prior slide better. It's not worth the special case. The one defensible use of `==` that people have defended is to say `== null` as shorthand for `=== null || === undefined`.

WH: What does that mean with regard to that slide?

MM: The answer should be `false` instead of throwing. Users expect that for any value x, x == null will not throw and is equivalent to x === null || x === undefined.

YK: Does `==` ever `throw` right now?

WH: Yes, that's an argument for defining the values of mixed comparisons such as `anInteger < anNumber` and `anInteger == aNumber` to their exact mathematical results instead of throwing.

YK: There's a specific invariant that `== null` never throws, but `==` in other cases does  not neccessarily follow that same rule.

AWB: Both `==` and `===` are defined by type enumeration of the two arguments. Two of those types are the type null and undefined. Those could be special.

MM: What I'm saying is that they should be special with regard to `null` and `undefined` not with regard to other Integers.

DE: I think that for comparing with `undefined` and `null` the expectation is that it would return `false` and not `throw`.

DE: Continuing the semantics explanation. + would not lose precision.

BE: Can you explain the plus issue again?

DE: The plus issue is that IEEE754 arithmetic is well defined. When you try to combine them you will get outside of the domain of both. There are two reasons why mixed operations are bad. The first is you will confuse users. The second is that you will run into bugs.

### Slide 10: Optimization potential

- Use Smi (small integer) infrastructure to optimize as Int64 (sometimes)
- Could work with asm.js
- Multiple browsers expressed optimism about implementing with good performance

DE: For optimization potential currently across JavaScript engines there are  .... Could also be used to optimize Integer as Int64 (?). We could make it work with asm.js.

MM: What's Smi?

BE: Small integer.

YK: Fixnum.

YK: I believe the optimizers are optimistic about optimizations. Do we expect that implementors will implement these optimizations?

AK: They will be as good as if we implemented 64-bit integers. The main implementation feedback is that it won't be any worse than 64-bit integers.

BT: I don't think that's what I heard exactly. Conversations from 2 months ago. In order to optimize Integer, we need profile data to show that this value is always in the 64bit range, then we can do the optimal thing there. That's what lets us do the optimization. We would not need to teach our engines to get that data, so I don't think it's difficult.

YK: Is the assumption that once things warm up it's the same? Or are you saying (Adam) that u64? would have the equivalent performance problems to making it fast in cold state.

AK: For v8, to be really fast, you want to fit inside a Smi.

MM: As long as you have any tagging at all, as long as you use nanboxing? or not to do it ...

YK: I understand why ?? comes up. Are there no internal paths that never expose the values to user code that could take advantage of the known representation..

AK: Our runtime code also uses the GC Heap so....you can have it on the stack sure, but if you pass it to some other runtime thing.

YK: I guess that's what I'm talking about. If you know it's u64, then you can optimize it.

AK: But if it's a typed array you know that already.

BE: V8 boxes still right?

AK: Yep.

YK: Do bignums require that you heap-alloc pretty liberally?

AK: No, for 64 bits you have to heap allocate.

DE: Until you know the types that are flowing through the program. I think a lot of implementations will be heap allocating, even 64-bit integers. Because if you have a pointer? on the stack that's a 64-bit pointer, you have to keep that separate in some way from the 64-bit integer.

SYG: We are confusing two optimizations. Int64 and BigInts are going to be the same because we need to allocate stuff. For V8 that's about the same amount of work. For SpiderMonkey, I think it will be more work, but only a little bit more.

BT: That's the general message I heard as well. Slightly harder, but it's not worse enough that our first implementation will be pretty much on par with what Int64 would have been.

BE: E.g., 1.x for some fraction. Where the various cast operations are used in asm.js etc, you could imagine have it compile to unboxed, etc. implementation. Is any implementor looking at that?

SYG: Since our asm.js is kind of ahead-of-time. Any engine that optimizes for asm.js has to kind of have that stuff anyway. The cast operator and the with operator...you realize it may not always be a constant, but it's not going to be a ?? big deal.

DH: If you ask me to write down the type optimizations that I need for primitize types, I don't know if I could do that. But how hard is it to characterize that?

WH: There are really two obvious choices. There are only two I can think of that do reductions of an Integer x modulo 2⁶⁴: `asUintN(64, x)` and `x & 0xFFFFFFFFFFFFFFFFn`.

DH: Those get you into the type. You also have to know what operations you can do to keep you in the type.

WH: It's the same ones.

DH: Right, but in order to do arithmetic with the type, you have to understand how to compose this.

WH: Integers form a mathematical ring. Uint64's form a finite ring. The ring of mathematical integers maps nicely to the ring of integers modulo 2⁶⁴ in the obvious way. So you can do as many of the ring computations (+, -, \*) as you want using mathematical integers and do one reduction modulo 2⁶⁴ at the end, and you'll always get the same result as if you had been using Uint64 modulo arithmetic throughout.

DH: That's great, I enjoyed abstract algebra in college.

BE: It's shown in the example Dan gave for asm.js.

DH: We're getting there. I'm asking how hard would it be to write down the list that these are the sets of operations that we can do that would a) inject you into the Int64 value space and b) eject you from the Int64 value space (??)

DE: TurboFan has a great ??? for modeling those kind of ranges here. I would recommend people who really want to stay within the range to apply the cast operator after each operation. If we were going to stay into ASM.js we would require that.

WH: That's overkill. All you need is to do the reduction to Uint64's of inputs. You can do as much multiplication, addition, substraction, and shifting left as you want, as long as you do one reduction at the end, before you store it into a variable that escapes. You must also do the reduction before any comparisons or divide-like operations, including shifting right.

DH: Let's say I'm writing some crypto code in JS and I want it to be fast. A) How hard is it to write that code? What do I need to do to get that code to work? I'm not arguing against big ints here. I like big ints. Dan you made the claim, most of the time you don't want big ints, but it's good to look at the cases where they do and understand how hard it is to use their goals. People in node have been asking for this for years. So if we optimize for that, how hard is it (for implementors) to optimize for? And then how hard is it for the ...

DE: I did talk to some people in the node community about this. Some people expressed a preference for Int64 over Integer, however the maining worry was about possibly falling into a bad performance path if they left out the cast operator. On the other hand there were positive arguments in favor of interger over Int64 in some of these use cases. ... something about hashes... With Integers we can definitely build integer math faster than we could directly in javascript. We could use SIMD or similar things.

YK: One of my sad Rust experiences is opening the great int debate in Rust. You want 3 things: wrapping (Crypto), an exception if you overthrow, or you might want a bigNum. This proposal targets where you might want a bignum case (and there are a lot of cases where that's true). If you're writing crypto.

BE: I talked to Fedor Induttny and others about this and they want ...

YK: My point is a bit broader than the specifics. This proposal also says we don't want u32. We don't want many types. BigNum is the right thing. But if you look at those types there are use cases outside of BigNum. TL;DR there are cases where u64 is the thing you are actually talking about.

BE: I agree, sometimes the type is different. Sometimes when you want the wrap-around or other things, the type is the most ergonomic solution. That is the trade-off that we are giving up now in favor of other benefits.

YK: I don't think we need to give up those other benefits (or options for alternative types).

WH: Yes, we decided this at the last meeting.

(...)

WH: Last meeting's consensus was more than that, that we should pick one or the other. And that the one we should pick is Integers. Everyone that supported Uint64 decided we should go over to the side of Integers in January.

YK: I'm saying I don't want to object to that consensus. However, I am concerned about a discussion that happened in January, that may not mean consensus (about foreclosing ever adding machine-size types in JS would be a mistake).

MPT: We're doing this for node, let's get this done (paraphrased).

BE: I want to make progress. I view Integer as progress. I don't agree that we should foreclose machine types in the future, but I think that can and should be deferred.

DH: Trying to foreclose is a perfect way to make things run around in circles. It makes it harder to think that we need to try to close the door to other options in the  future.

DE: We will work with people to make it futureproof.

YK: Does anyone believe that if they support this proposal they are not allowed to support any other types of numbers in JavaScript in the future?

WH: That's not my position. I was on the side of Uint64 in January. At that meeting I said I'm fine with Integer for now and we achieved consensus on specifying that as the solution for now. I have no particular objections to doing Int64 in the future if it's still needed.

AK: There was a discussion about should we do Integer, should we do Uint64. And it seemed like Integer was a way forward for that and met with some significant positivity at that meeting.

BE: We achieved consensus on moving forward with Integer first and making sure it had the cast functions and other things to make sure it had efficient math using Integers.

AK: And that is the spirit why Dan is presenting the proposal in this way.

DH: If there is confusion about what people are saying it's very good if we get that down. There are many discussions where we have multiple alternatives and we pick one of them and sometimes people take away (incorrectly) that we can't do any of the other ones as well. **It's important to get down in the minutes that we are still open to pursuing other paths (with numeric types)**. I want to make sure that's in the minutes.

BE: The only time the committee salted the earth and said "never will something be added" was named spaces from ES4. oh and:  RING HOMORPHISM!!!

DE: In the discussion with people that had libraries, I got a sense that Integer would indeed be a significant help.

DT: Does this help any users that were interested in decimal and things like financial users?

BE: I did talk with FinTech people. Crypto people not use Uint because it's the best they have access to. FinTech people want BigInts. (?)

DE: I've heard interest from FinTech client of Egalia, but don't know details.

### Slide 11: Specification status

- Detailed [spec text](https://littledan.github.io/proposal-integer/) based on Brendan's Int64 spec
- [Open issues](https://github.com/littledan/proposal-integer/issues)
  - [Editorial: How to deal with the various spec numeric values](https://github.com/littledan/proposal-integer/issues/10)
  - [Should mixed-type comparison be allowed?](https://github.com/littledan/proposal-integer/issues/2)
  - [Should ToString include the literal suffix?](https://github.com/littledan/proposal-integer/issues/5)
  - [Bikeshedding](https://github.com/littledan/proposal-integer/issues/1)
  - [Bigger](https://github.com/littledan/proposal-integer/issues/20) [standard](https://github.com/littledan/proposal-integer/issues/18) library, or save more for v2?
- And many more! Please come on GitHub and tell me what's wrong with the proposal​

DE: There is detailed spectext. It has some color issues that I will address. It has open issues.

DE: Currently in the spec there appears to be some implicit coercion between Numbers and mathematical values. Once we have multiple numeric types, we have to be more explicit about how this is accomplished.

DE: *Should mixed-type comparision be allowed?* - We could allow it. It wouldn't extend to user-defined types as well.

WH: I believe I and Mark would be in favor that in order to get `null` to work.

MM: I'm in the opposite position. I want comparison to `undefined` and `null` to work for all types, but do not think that mixed type comparison between different numeric types to work. That's weird but with the spec'd behavior, then there's no inconsistency with how comparison would work for user-defined types. That consistency is good.

BE: You handled that in the `null` and `undefined` special cases. I agree with Mark and I got the committee to first say they liked Uint64 and then this proposal, I think we'll do better if we keep firm on that requirement. It may be a bit tricky, but I'd rather avoid that.

MF: Do you consider mixed type comparison, implicit conversion?

BE: In general yes.

WH: Allowing `5n ==  null` and not allowing `5n == 0` is untenable.

DE: I have gotten feedback form potential users about the comparison. A lot of users are unhappy about throwing exceptions on mixed operations. This one seems solvable, but some similar ones are not solvable.

WH: The reason I support mixed comparisons is precisely because they do NOT consider implicit conversions, they consider exact values.

DE: I want to leave it as an open issue for now, It would be resolved for stage 3.

BE: I think this issue has to stay open, because in the terms you just raised there may be some conversions unless we hard-code some cases for Integer.

MM: And how do user-defined value types participate in these comparsions?

BE: We don't like these problems any more than anyone else does, but to make progress we decided to defer a lot of these discussions. We said no explicit conversions, no ??? and we'll wait on the other stuff. That has worked in the committee before. But I admit it can do short-term violence.

MPT: I would think the community would rather see no impicit conversions vs. implicit conversions that don't make any sense.

MF: What is an example?

MPT: Dates conversions can end up really weird. `00` vs `000` dates.

DE: Next issue. Should toString include the literal suffix "N". The current spec doesn't put the N.

WH: It's analogous to asking whether string.toString() should put the quotes around it or not.

MM: `toString()` should not be thought of as something to recover the source string for a programming language. What it should be doing is represent using characters something that indicates what the value is.

WH: So `toString()` of Integer 5 should return what?

Everyone: `5`!

DE: I agree too and that's what the spec currently says.

DE: The last question is the standard library. There are a lot of things that could belong in a standard. Should these be in v1 or should we add them later.

BE: What issue number is this?

DE: [#20](https://github.com/tc39/proposal-integer/issues/20).

DT: Is Number 0 truthy?

DE: No, that's an open question.

WH: The current proposal is that 0 is falsy and all other numbers are truthy.

BE: There's precedence in the committee going back to decimal.

MM: How do you imagine 0 falsy extending to user-defined types?

BE: Value types would have an examplar 0 value.

YK: I have a question about what else we might do here. There is a place in the current standard library with JSON. Which is that the JSON number format technically allows you to express things that are not Numbers. Perhaps it would be interesting to pursue a JSON.parse that gives you arbitrary precision integers.

DE: I think that's a good idea to think about. There's an open bug to think about JSON Integer.

DE: Is this ready for stage 2?

WH: I am happy with it. I did a good review of it with DE. The remaining question for me is how this will work with Array buffers. There are some interesting questions there.

DE: There is an issue on that: [issue #23](https://github.com/tc39/proposal-integer/issues/23).

#### Conclusion/Resolution

- Stage 2 approved
- Reviewers:
  - Waldemar
  - Leo
  - Brendan
  - Michael Saboff

## [PR #778: Make LocalTZA take 't' and 'isUTC' and drop DSTA(t)](https://github.com/tc39/ecma262/pull/778)

(Maggie Pint and Matt Johnson)

Matt on the phone ?? (M)

MPT: Describing a slide about issues with daylight savings time in JavaScript....

MPT: What we've done is said, always pick the first one. The reason is because of a scheduling context. If you have something needing to happen at 1AM and you are told the second 1AM then you're going to be mad. You get a similar thing with the spring forward transition. You get a set of local times that do not exist. Spec says move the ambiguous time by the direction. That's not predictable for the user so we define the spec to always move it forward. Because time never randomly jumps backward in real life.

WH: What do you mean by moving forward?

MPT: So in the United States during this time, 2:30 AM doesn't exist. So it's going forward by the amount of the transition now.

WH: We always have outages when people schedule cron-jobs at 2:45AM.

MPT: It's going forward on the global timeline, not backward. 2:30 is becoming 3:30.

MF: Why do want this to be valid?

BT: We don't.

MPT: We don't, but this already has a lot of implications, but it's better than going randomly in some direction.

BT: The current semantics are that you get a timeout, you don't get a .....

MF: ??

MPT: ??

MAJ: The cron job example is a good example of not wanting to throw, because then you'd get no cron jobs at all for that day.

BT: My feeling is to not get into the business of fixing the existing date object and keep things as similar to the existing implementations as possible and create a new one that's better.

MF: On the non-existing date, if you ask for a date and it cannot give you a valid response, then ...??

MPT: You are going to break if you do that, for example with the cron-job example michel stated.

WH: What does it do if you ask for March 32nd?

MPT: It wraps to April...

WH: That's precedent.

BT: Yeah I think in general this date object is designed not to tell you and just do *something*.

YK: Is the intent here that we're always moving forward, or always moving backward?

MPT: Forward, so this is what it _may_ currently do, this is what it was doing two years ago (slides).

BT: That's just the spring forward case, for the spring backward case it makes more sense to... ??

YK: If you always go forward, but if you compare the date with the date that comes before it seems like it will always be a positive number. If you're adding a number it should never be a smaller number than you.

MPT: When would that happen?

YK: I don't know.

MPT: Do you mean the "Fall" case when it'll bring back ??? in UTC?

YK: I think this whole thing is trying to make things incrementally better.

WH: The proposal does not satisfy the property you (YK) requested.

MPT: If you take fall forward on the global timeline then things will trigger an hour later.

MAJ: So one thing I'll add is Java8 and its standard and pretty much all the platforms that have this bug have been trying to solidify around the best way to handle this and *this* is the same set of expectations that they have standardized around.

BT: But to answer Yehuda's question, I'm not sure that this would come up because when you get a date that's in the context of a timezone in JavaScript... So once you have the date for where you are on that timezone, your time is disambiguated.

MPT: Ok, so we have consensus on this?

BT: I don't think we're trying to make this incrementally better, we're trying to define behavior.

MPT: This is a "needs consensus" pull request.

DE: That does a little bit more than this. I've seen the other bug multiple times. I can explain that if people are interested. I'm happy for this to be merged.

MPT: If you want to take that, go for it.

DE: Sure, the definition of the shift for localtime is based on a daylight savings shift. Moscow times shifted historically by an hour. This patch also makes that local timezone offset a function of the time you're passing in, just like the daylight savings offset.

MAJ: I thought that was correct in ES6.

DE: Some things were corrected in ES6, but this part wasn't.

AWB: I believe the reason this wasn't changed then was to do what you're describing requires having the historic data available. There was reluctance to imagine having implementations (keeping the historic timezone data around).

MPT: Matt, I think what you're thinking of is the soft language that says you should prefer the IANA database when possible.

MAJ: Correct, I thought it was already formalized in the spec.

DE: I think this pull request adds it. I'm happy for it to be added. I looked for how JS engines implement local date-time transforms and they seem to all do it by calling out to these system calls to get the local time based on unix UTC time and then for engines that implement the spec you get the localTime of now and find its .... time based on that.

MPT: If I remember correctly, what happened is that it used to say you should follow the current daylight savings rules but it never codified that you should follow the IANA database when possible.

MAJ: The other thing I was recalling was that ECMA-402 ??? So this has already been implemented based on 402.

DE: Really? Wait? Which article?

MAJ: 12.3.2 in [ECMA-402](https://www.ecma-international.org/ecma-402/1.0/)

WH: So which way does 402 resolve this?

MAJ: To take history into account, and modern operating systems can do that.

MPT: That would only cover formatting, that would not cover date.

MAJ: Correct, it needs to be merged back into 262.

BFS: Is this timeboxed?

_Everyone: No..._

MPT: Is everyone clear on the use case?

BT: I think this is more of an implementation question here.

BE: In May we'll have guest speaker from ?? talking about an ES6 implementation excluding eval...??

BT: That's like 95% Intl data.

BE: I don't know how small that database can get, but we should not decide this without talking to people doing very small JS engines that have to embedded in (very small hardware)?

DE: If you look at the timezone file, for a particular timezone it's pretty small.

BE: But for the whole world it's really large.

DE: But the date functions only let you use your current timezone.

MAJ: It only says use the best thing available to the system.

MPT: The offset of the local timezone in UTC measure in ms. To me ??

BE: That 48k of RAM is running a JS engine. They're very cheap systems that run for a week or more. They're IoT...

MPT: I'm sympathetic to this IoT issue, so we could change the wording to say: "if it's available otherwise fall back to current."

BE: The problem with the web is you tend to get a de-facto standard even if you don't specify it.

AWB: That's ok.

BE: It'd be ok.

MF: Didn't we have similar concerns when talking about Unicode support? What's the resolution to that?

BT: Yep, we're requiring everything.

AWB: It came up specifically about case mapping.

BT: toUpperCase and toLowerCase require the full case mapping.

MF: So we should probably do the same thing here as well.

BT: Yeah..I'd like to see.

AWB: That's one of the things you'd have to evaluate on each case.

DE: If you're an embedded system you only have to implement a single timezone.

BT: But we require it for Unicode case mapping.

DE: It doesn't take up that much space.

BE: It might be that they'll also show up for the appliances, and nobody wants to make appliances for each region that has the specific dates for that region.

DE: Don't you actually want to have accurate dates?

MPT: You won't find anyone that wants accurate dates more than me. But I don't think we can ignore that we're asking them to take on a lot of data.

AWB: Seems like one of those cases where a strategic "should" is the right answer.

BT: We can't use "should".

AWB: Sometimes we do, it's ok.

MAJ: (reading from ECMA-262). The PR removes some of that wording and replacing it with some examples and solidifies the ambiguity. It doesn't say you must use the full implementation.

MPT: Nobody is arguing for the ambguity, but what we're at is.

BT: I was just curious. In light of your concerns around IoT and requirement of data tables. Are we going to be able to move forward with a new date proposal that would require this kind of data to be available in order to have a good system?

BE: I don't know. I think it's an open issue. We should hear from the ??? folks. As usual, people innovating on certain areas don't come to this meeting, they're too busy.

AK: How much do they care about conforming exactly to the ECMAScript standard?

BE: It's big enough. They can't use npm, they don't want to. But they do have a standard library. We'll hear from them in May. I think it'll be interesting to talk with them about this topic then.

MAJ: All I'm saying is the PR in question does not state that you must carry the entire timezone database. It tells you to use the best available, which can be different.

AWB: And that can vary among implementations.

BE: Does that achieve the goals that you have?

MPT: The main thing to me is to resolve the ambiguity issue.

BT: We all do it anyway, so it's not like there's a pressing issue here.

DE: This is an important issue for Chrome, and this bug keeps getting filed on Chrome. It'll be great to get this codified.

BE: You mean allowed but not required.

AWB: Is there something that does not allow historically?

MAJ: In 6 it is not allowed.

DE: In 6 it is allowed for ??? and disallowed for ???. This is why ?? started working on it and it's now disambiguated.???

BT: So I guess the base question here is: Do we want to say that everyone, all implementations of this, it's OK or do you want to say we're wrong and we should do something else instead.

AWB: We want to allow what you're doing, whether we want to require what we're doing.....

BT: So this does not require, but to allow.

MPT: If we all agree that the proposal does not require, then it's sufficient.

AWB: Or let's make the proposal so that it doesn't require.

BT: We can make sure that it doesn't require. Because I'm fully supportive of Dan and Chrome folks closing bugs.

MPT: Ok, so we have consensus on this to be merged.

BT: Any objections? We definitely want to make it optional to use historic timezone data. Using the best information on the timezones.

AWB: That language of "best available" is...

BT: It's handwavy....

MAJ: We should say the best available on the operating system.

BT: But what's an operating system? ;-) Some systems don't have one.

MPT: The more restrictive the phrasing gets the worse it gets given the situation...

BT: Why don't we just use "may" instead.

MAJ: I think it's a "should".

BT: I really don't want "should".

DH: I don't want to go down the road of "magic feathers".

AK: I don't think so.

DH: Shoulds and mays are not good...

YK: Isn't this what notes are for?

BT: Umm... No. Notes cannot include normative content.

BE: Dan says you want to allow it.

BT: But "may" is you can if it's available.

AWB: "should" if it's available and "no" if it's not.

BT: We have consensus % this question of the specific wording...


#### Conclusion/Resolution

- Consensus modulo improving the language


## 12.ii.a Date Proposal - NodaTime as a built-in Module for stage 1

- https://github.com/maggiepint/proposal-temporal
- https://docs.google.com/presentation/d/1b6gTBphc-QEYE6rqYZ6VkFDRLE8K-EDx464tGfZ-Q6Q/edit?usp=sharing

(Maggie Pint)

MPT: I have this proposal seeking stage 1. Sometimes we like to take stage 1 proposals to stage 2 criticism. This is a replacement for date as it exists today and would be built on top of the date module system that I believe Brian is the champion of. In order to drill on this topic which is huge... I actually pulled one of my conference talk decks... The fundamental problem you have in datetime is perspective. In order to make it work, we assume that we have this global timeline that isn't ambiguous and it doesn't go backward and forward. {continues to give her talk... see the slides}

### Slide: Coordinate UTC

MPT: - We assume we have this global timeline.

MPT: Coordinate UTC (not the time in London), basically the same as GMT, but the scientific community prefers GMT.

### Slide: Local Time

MPT: On the flipside of this you have local time. It does not exist on the global timeline. It usually not contiguous (with daylight savings, etc).

### Slide: UTC Time

MPT: When you have a time in UTC, you know where you sit on the global timeline and you know if this point in time is before or AFTER some other UTC time.

WH: How accurate of time-keeping is this proposal intended for?

MPT: Like how accurate should the API be? I'm hoping for nano-second precision, but that depends on the timeframe.

WH: Super accurate time keeping runs into issues with relativity, etc. It becomes very tricky to keep track of "absolute" time beyond millisecond precision.

MAJ: There are plenty of scientific applications that care about nanoseconds in the data itself.

### Slide: Local Time: Saturday, April 9, 2016, 9:11 AM

MPT: When you have local time, you don't know where you are on the timeline. And you don't know whether it's before or after another time in a different locality. You limit comparison operations.

### Slide: Timezone Basics

MPT: In short, time zones are a region that agrees on an offset from UTC. These change. Egypt, Russia, others recently changed this.

### Slide: Time Zone: America/Chicago

MPT: _Referring to a graph of all time zones_

BE: I work with someone who thinks we should all just use UTC.

MAJ: No.

MPT: When is the sun out? That's a timezone.

_laughter_

### Slide: code examples (timeline math vs. calendar math)

```js
moment('2016-01-01').add(1.5, ' hours').format('LLL') // " January 1, 2016 1:30AM"
 moment('2016-01-01').add(1.5, ' days').format('LLL') // " January 3, 2016 12:00AM"
```

MPT: More explanation of slides.

WH: What's the difference between the two times?

MPT: One is calendar math, and the other is timeline math. You can only make computations in whole numbers with calendar math.

WH: Why is it January 3rd and not January 2nd? I.e. why does it round up?

MPT: Because you can't have half a day. It rounds up. And that's because you can't define that. It's important that you make it clear that you can only work in integer units and you can't convert between calendar math and timeline math. One day is not a fixed number of milliseconds or minutes. Fundamentally in a datetime API, you're moving along the global timeline. But when you're doing calendar math, you're moving along the calendar. You can only have your finger on one day at a time.

BT: Are not minutes variable length as well?

MPT: So, most datetime APIs ignore leap-seconds which is what I think you're getting at and they do that because from the business-domain of datetime, they don't matter. They do in scientific timelines and durations. For our purposes, we're going to ignore leap-seconds in the date API because they belong in a different domain.

AWB/MPT: Are there any minor programming languages that have a leap-second API?

MAJ: The biggest problem you get into is internationalization. You have to consult a table to know whether that is valid. Usually if someone passes a leap-second timestamp, it just gets absorbed and rounded down to 59.

### Slide: JodaTime/NodaTime Types

MPT: Steven Colburn created the JodaTime proposal. It models the problem domain really well. He's also involved in this proposal.

MPT: If you think about time as an "instant" is a point on a timeline.

MPT: The only thing you get from an instant type is a point, a point in life. From there, you have a typeflow for zoned date type. A composition of a point on the global timeline and a timezone. And a calendar system if you want to get fancy. So now what you have is a datetime in a timezone (that's sort of the god type). Once you have all of that, then you know everything you need to know about that time. In that case a `ZonedDatetime`.

WH: Does the localtime include the current offset or not? I'm asking in the context of ambiguous local times on the fall back day which can be disambiguated by including the current UTC offset.

MPT: The way the ... timeline represents that is an offset from now.

BT: You're talking about the zone datetime?

WH: When you convert an instant to in zone, does the result include the current offset from UTC?

MAJ: There's a little bit of variation between some of the implementations that have come about. JodaTime variates due to this. ZonedDatetime based on the instant means there's no ambiguity. It's an implementation detail. If you're starting with local values... ??? We have an open thread on one of these issues. This doesn't have to be resolved right now.

MPT: So... ?? It's pretty common to have LocalDateTime. Another really common is LocalDate, like "July 25th, 1926" there's no time or timezone information with that. The tendency is to zero-fill the time which creates a lot of ambiguity. You don't know whether it was midnight or zero-filled. In that same vein, you can have time only, where you have a day, but you don't know whether it was really January 1st, or they were year-start filling?? So these types should remove that ambiguity. If you have a LocalDate and a LocalTime, the only place you can land is a LocalDateTime, so it forces developer safety. It models the set of concerns.

MF: Is any of this proposal going to contain time and date arithmetic? Or representations of duration?

MPT: Yes. I felt like I needed to get you to here.

BT: There's also more of a text-based introduction, the NodaTime docs have a great primer on the types.

WH: Are dates in Gregorian calendar only?

MPT: That's a debate that's going on in the proposal right now.

MAJ: On that, Noda and Joda both said yes, and then Steven corrected it in Java 8 and said no. We want something that works well for ECMA-402 and ECMAScript.

MPT: So Steven's argument is when you make non-Gregorian ....?

RX: Can I ask a basic question. I would like to understand about LocalDateTime, when you're talking about LocalTime, you say "it's usually not a contiguous timeline (DST)". On LocalDateTime, in which timezone, do you assume to make those jumps?

MPT: It assumes no timezone because of that the API will force you to do certain conversions. Say you have a LocalDateTime and it doesn't exist and you try to convert it to a LocalDateTime, you'll have to specify a resolver to say which instant you pick if you have an ambiguous time.

RX: It's confusing for me to understand if it's not going to have a timezone attached to it, otherwise it should be contiguous.

MAJ: `LocalDateTime` as a type, is contiguous without a timezone reference at all. If I add an hour, I add an hour, if a day, it's one contiguous day. There's no relation to a timezone.

RX: Just like UTC?

MAJ: Correct, except UTC is relatable back to a date in time, whereas here I just have an amount of time, no way to relate it back to a specific point in time.

MPT: Matt, Is it the case... I feel like John makes it you have to do conversion....??

MAJ: That's the difference between period and duration in the Noda API.

MPT: So what we're saying to breaking things down... If you have a LocalDateTime type, the author made the decision that you could only do calendar computation, day or bigger. This means you circumvent this ambiguous time problem. If you want to move to hours or minutes, you'd have to convert into a ZonedDateTime.

MAJ: The real distinction to keep in mind is that `LocalDateTime` doesn't have a time zone reference.

RX: Ok, thank you, I understand.

MPT: I've presented a large number of types. I haven't even touched the offsite datetime type which belongs in this as well. I didn't even touch the `OffsetDateTime` spec.....Everyone is probably familiar with the ISO time formatting specification, which can help you understand local and global time, but it doesn't tell you what time it will be in an hour from now, because we don't have a time zone.

MPT: So, what we're proposing for now is that this particular API, fully models the DateTime domain that's correct and helpful to the user. As you have noticed, it is very large. Other types we can hit on, we discussed on Tuesday a Duration Type, a period type, which is calendar intervals, and all of those types together make up the complete domain.

MPT: The first thing I'm looking for from this committee. Is this a road that we want to go down?

BE: We want to do the more minimal approach of the extensible web manifesto and see if we can keep the standards out of big APIs.

MF: You have precedent. ??

MPT: Yes, lots of precedent.

DH: One thing I'm not clear on is how much of this depends on surfacing stuff the OS knows and how much of this is pure library that could be written in JavaScript?

MPT: Umm, most of it is pure library that can be written in JavaScript and the only thing that's being surfaced is the time zone data and the point on the timeline. I'm not completely attached to this proposal. There are other options.

BT: Another option, and maybe this goes to Brendan's point, add an API to expose timezone data and then let libraries...

DH: That's where I was going with my question...

MPT: I think you want an immutable data type for Date. I think the fact that the current Date object is mutable is destructive to users.

AWB: The existing Date object is always and forever going to be the existing Date object.

MPT: The immutable value type has direct user value. The rest of it has great value as well. But to not have people messing around with dates...

AWB: A library could do that...

BT: It could but ... ?? value type...??

MPT: A date is a value type...

BT: This is the biggest reason why I support this proposal over just exposing time zone data.

MPT: ??

AWB: If what you're saying is...

BE: It's not a value type in the sense of n64.

MPT: It's an object.

DH: That was my first question. We were talking about an immutable object, but its `typeof` is object.

MPT: Right! Yes, sorry.
We fight the fight on Stack Overflow about "you can use a library that works or you can do the thing you're doing." There's this set of people who are going to use the language primitives. Those people aren't making good code. It goes beyond just mutability vs immutability. Date doesn't have add methods, you have to get/set them, they bubble, and you don't have safety when you overflow a Uint.

MF: Does everyone agree that using date arithmetic is a common thing. If so, I think we can agree with providing a standard library to solve this common problem.

YK: I disagree with some aspects of what you said. Cloning an existing popular thing is not correct.

BFS: Pretty early on we talked about how it didn't make sense to combine types. Are we thinking we will try to prevent people from trying to add them together.

MPT: You can combine LocalDate and LocalTime, but you can't put it on the timeline because you don't have timezone information.

MAJ: So you can't do something like LocalDate and then say at 3:00, what is that exact value in UTC. You can't say that because then you involve a timezone.

BFS: So we couldn't for example compare with an instant.

MPT: Correct, you can't compare `LocalDateTime` with an instant, because you can't compare two instances that aren't on the global timeline.

BFS: This is what is concerning to me, having people do ambiguous things like what we talked about in the previous discussion (about time zone problems with the current `Date` API)

MAJ: Another clear example of why this is neccessary. One of the biggest things that comes up on S.O. is why do I have a disconect between HTML5 dateTime types and the ES6 Date types. Someone will take something from an `<input type='date'>` and throw it into a `Date` constructor.

WH: Is the month number for December 11 or 12?

MPT: Let's index from 1. So it's 12.

CP: My only feedback is that we should create an API???? There's a little overlap with the 402 proposal, I'm not sure it's connected. Either way, we plan to expose some pieces of the timezone. Maybe that's an area we can collaborate on...??

MPT: Sure, there are actually quite a few overlaps with this proposal and 402. If we were to replace the date object no matter how it works, there are overlaps in the form of parsing. Locale Based parsing or formatting should go into 402.

CP: No 402 doesn't do *any* parsing.

MPT: Locale-specific date format, you need CLDR data for that.

AWB: I'm not sure what your ask is at this point.

MPT: My ask is "do we want to move forward with this API module or do we want to simplify it?"

BT: I think in light of Brendan's concern, we should decide whether we should be in the business of making more big APIs.

YK: I don't think Brendan would say there shouldn't be *some* new APIs here.

BE: Remember the min-max classes? If you can find the min-max BetterDate, I suspect there will be more winning all around.

AWB: So I think exploring the date spec here, The date API is something there's a clear need for me. It's not clear to me how it should be packaged up. I'm not sure it belongs in either.

MPT: laughing....

AWB: How are new APIs packaged? We've talked about built-in modules. There may be a difference between built-in and standard modules. You may be able to define a built-in module that's not part of 262 but you could import.

MPT: That's interesting.

BT: And that's kind of a separate... I mean, we should move forward.

MPT: I was not expecting to get a consensus. Could I get a read on people's thoughts?

BT: I want to point out we are doing some max/min here. This proposal include the most useful types of the system but it does _not_ include _everything_ from Noda or Joda time. It's a small subset of that.

WH: For me this hinges on a few things, Yes it is adding things to the language that are in the language already, though it's doing it much better. The questions for me are: how big is it, how stable is it? And should we provide the full functionality or should we just provide the building blocks so someone can build on top of this?

WH: External libraries can evolve relatively easily and can deprecate mistakes or blind alleys. On the other hand, it's extremely difficult for us to deprecate functionality we add that we regret later. So, how much has the proposed library changed over the last 5 years?

MPT: Not much. Stephen made a few simplifications in Java8, but the APIs have been relatively stable in long time.

BT: The base types have not changed.

MAJ: We have some quotes from Brendan about copying dates from Java :)

Everyone: laughing

BT: The committee is not moved by Java.

Everyone: laughing

MPT: We cannot rev-versions. We cannot just get rid of it. Once it's in Ecma spec we cannot change in "Java 8".

BE: The web is so big, you cannot control or deprecate things. I'd love to deprecate the Date object. It can be deprecated by the community and linting tools. There's no "flag day" for the web.

MAJ: If you go the module route, can you rev modules?

BE: Modules you load from the server, so of course. But in the browser environment, no.

AWB: That's the point he's trying to make. We should be able to standardize modules. ...

BE: If you say it can be a module that can be hot-fixed, that's fine. If you say it's standardized, it's very hard to change.

MPT: The minute it's in a browser, it lives forever. Here's what I'm feeling. People agree we should do work here. I don't think that people agree on the API.

BT: I'm not sure that's true, I haven't heard a reasonable alternative to this API. We agree that Date is broken. There is general agreement that JavaScipt should have some built-in affordance for doing date operations without shooting yourself in the foot. I think that there is a desire to trying to create giant APIs, but I have not seen an alternative that is reasonable.

YK: I'm trying to avoid injecting random work that I did in the past into this conversation. I would not agree that JodaTime is a de-facto standard.

MPT: I would not say it's a de-facto standard.

YK: I made a strong claim. Let me jump to the punch-line. There are specific details we can extract from JodaTime. I agree that we could make it in some senses like that... stage 1 seems fine is what I'm saying...

BT: The point that I want to make more clear is that we would all like there to be a small `Date` object that would function as the kernel of date-innovation, but I'm not convinced that's possible.

MPT: To the contrary, the developer community in JavaScript has been living with moment.js for 5 years. Moment.js is a ZonedDateTime. You can do everything you need to do with it, it just isn't pretty.

YK: Are you saying there may be consensus that something like this may ??

BT: I'm encouraged by what you said that is totally independent of this effort for Rust that this model is a useful thing.

YK: I found the operations that JodaTime and Java 8 have some footguns that I would like to avoid.

BT: Sure, but it seems like there's a lot of alignment. Seems like this is a good path. We're not just copying everything. We'll be intentionally copying just some semantics.

YK: I don't think tie-breaking without some thought is good.

MPT: Nobody's suggesting that.

MF: These are well-past stage 1 concerns.

DH: This is obvious stage 1.

WH: Yeah, let's do stage 1.

MPT: Let's start with that. Thanks!


#### Conclusion/Resolution

- Stage 1 acceptance
