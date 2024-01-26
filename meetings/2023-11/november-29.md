# 29 Nov 2023 99th TC39 Meeting

---

Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**
| Name                   | Abbreviation | Organization      |
| ---------------------- | ------------ | ----------------- |
| Nicolò Ribaudo         | NRO          | Igalia            |
| Michael Saboff         | MLS          | Apple             |
| Linus Groh             | LGH          | Invited Expert    |
| Rob Palmer             | RPR          | Bloomberg         |
| Jesse Alama            | JMN          | Igalia            |
| Ron Buckton            | RBN          | Microsoft         |
| Daniel Minor           | DLM          | Mozilla           |
| Istvan Sebestyen       | IS           | Ecma International|
| Ujjwal Sharma          | USA          | Igalia            |
| Ashley Claymore        | ACE          | Bloomberg         |
| Chris de Almeida       | CDA          | IBM               |
| Jordan Harband         | JHD          | Invited Expert    |
| Kristen Hewell Garrett | KHG          | Invited Expert    |
| Rezvan Mahdavi Hezaveh | RMH          | Google            |
| Devin Rousso           | DRO          | Invited Expert    |
| Waldemar Horwat        | WH           | Google            |
| Philip Chimento        | PFC          | Igalia            |
| Chip Morningstar       | CM           | Agoric            |
| Samina Husain          | SHN          | Ecma International|
| Jack Works             | JWK          | Sujitech          |
| Daniel Ehrenberg       | DE           | Bloomberg         |
| Ethan Arrowood         | EAD          | Vercel            |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |
|                        |              |                   |

## Recruiting people interested in JSX to join the matrix room

Presenter: Jack Works (JWK)

- [matrix](https://matrix.to/#/#jsx:matrix.org)

JWK: If you’re interested in JSX, if you want to see it standardized please click the link in the agenda so we can make it happen. And that’s all. We have no proposal now. Then let’s go to the next topic.

RPR: Okay. So there’s a matrix room that everyone with join if they are interested in talking about the possibility of a proposal for JSX.

## JSON.tryParse

Presenter: Jack Works (JWK)

- [proposal](https://github.com/Jack-Works/proposal-json-tryParse)
- No slides

JWK: As you can see, it’s very simple. The problem to solve is this one. Try it to parse something and the proposal – the spec is the same as this one. So are there any questions?

RPR: There’s no one in the queue.

KG: Can you say more clearly what the point is? Like, why you want to try this instead of writing try catch?

JWK: Because this is a statement and usually you have to write code like this.

```javascript
try {
  return JSON.parse(v):
} catch {
   return default;
}
```

JWK: For example. So because this is a statement, it’s breaking to the statement world, and it interrupts your expression. It might be annoying. So if we are going to have this, this will be easier to handle JSON, possibly JSON strings. As you can see, it’s the same as URL.canparse. Btw I don’t know why they don’t make tryParse but canParse.

CDA: RMH?

RMH: I think the same as the question that he already answered. I don’t know if you want to add anything or what. I feel like it’s the same.

RPR: Yeah. It’s shorter and an expression. All right. Mark Miller?

MM: So in general, a function call in JavaScript might throw, the motivation behind this would seem to apply to everything. So what’s unique about JSON.parse that distinguishes it from pretty much every other expression in the language that might throw?

JWK: This is because `JSON.parse` is handling unknown input, although every else expression might handle unknown input, but this is a clear signal.

MM: Okay.

NRO: Yes. Like, I agree to having to write the statement, it’s annoying. I wonder if you think that `do` expressions would also be a possible solution to this problem, instead of having a special case for JSON.parse?

JWK: Do expressions will solve this problem, but it looks like it hasn't had activity for a long time. And also, I saw a new idea in the Discourse that’s called try expressions that can also solve this problem. But is it a proposal now? Do expressions or something like try expression can solve this, but we don’t have that yet.

NRO: Okay. I wonder if the champions of do expressions would say if there is any update coming in the near future of the proposal?

KG: Sure. I haven’t been working on do expressions mostly because there’s a lot of syntax proposals in flight and I don’t think it makes sense to have all of them. And I think my time and probably the committee’s time as a whole would be better spent on standard library things rather than new syntax. So I haven’t been working on `do` and I am not planning to work on it in the immediate future. Someone else is welcome to pick it up, although like I said I think standard library stuff is probably more valuable.

RPR: And there’s 4 minutes left. Two people in the queue.

RBN:This is partially a response to something I think Mark was asking about, whether there might be some generalized solution and why we would need a `tryParse` specifically for this. Having a `tryParse` method is more useful as it can be used as a callback, since it would be a function, versus a generalized “`try` but don’t throw” syntax. While I’m not opposed to the addition of that kind of syntax, `tryParse` and `canParse` are generalized mechanisms that are employed for methods on things that have a representation that could potentially fail to parse, but you wouldn’t want to throw. So it’s not necessarily something new.

RPR: All right. That’s the end of the queue. A couple of minutes to go. Do you want to ask for Stage 1, Jack?

JWK: Yes. Do we think this is a problem to solve and we should have this one?

KG: I will speak in support. I think that this is worth trying to solve. But mostly because I think that it is quite cheap to add stuff like this, and it’s convenient. So I am in favour of us having more cheap convenient things.

MM: I am not. Every cheap convenient thing that you add is more complexity in the language and has to pay for itself. And in this case, the specialness of this to adjacent parse, solving, you know, solving an issue that does come up pervasively in the language for which the language already has adequate support, which is you define a wrapping function that does a try catch, if you want to – if you want to do something that is conditional on the catch, rather than propagate the throw. I mean, that’s why we have try catch in the language. So I think this is solving a nonproblem. And it’s adding special case complexity in the language for something that is just a pervasive language issue, because the language is already working as intended.

JWK: All right. So maybe – maybe we should go this way, or by the do expression?

MM: Do expressions has some real reach. It’s a fairly simple mechanism that solves many problems. So I am receptive to ‘do expressions’. ‘try expressions’ are in the middle. And altogether, I think I would still object to them, but more weakly than I object to special casing `JSON.parse`. It’s solving a narrower problem than ‘do expressions’, but solving a problem that comes up a lot. I am just not convinced that if the problem is the try catch takes you out of expression into statement world, then that’s the motivation for do expressions. And do expressions is no more complicated than any of these other proposals while solving many more problems.

KG: Definitely disagree with that claim. I think this proposal is much, much simpler than do expressions.

RPR: All right. From DLM we have support for MM. End of message. Meaning, DLM is saying that he does not support Stage 1.

RPR: We are basically at time now. We have got a couple of people on the queue. Nicola, can you be quick?

NRO: Yes. Just if – given Stage 1, you also considering scope of potentially of, for example, test to like to check if strings or not than already deciding this option is like a return object or undefined . . .

JWK: Yes. It was `canParse`. JHD raised that when you do canParse, the next step is to parse it. So `canParse` isn’t meaningful in this case because you always want to parse it after you test it.

NRO: All right. I was asking, the example I saw, was wrong. You had if not JSON result and also false or null. Setting up Boolean can we parse or not would be useful. Like, I am also open to exploring like this solution. Is it possible to include –

JWK: Yes. If it’s `tryParse` you can do optional chainning on it. It would be more useful than `canParse`.

RPR: All right. I think we should move on. Ron, did you want to speak?

RBN: Yeah. I would say that I somewhat disagree with Mark. If the ecosystem, if you’re a third party library with a custom DSL or syntax, it’s often convenient for you or for the libraries to include a mechanism to allow them to parse these things. I have written similar things many times. In the ECMAScript specification in the library, there are very few things that we parse on behalf of the user. Basically, dates new regular expression, and functions and in many of those cases, they throw, in some cases for dates they return NaN. So it’s – or something that has a value of NaN. So we don’t have at that many places in the language that we need to do parsing, and this would be valuable. So it doesn’t seem, to me, that it’s worth the expense of adding a new syntactic feature to try to evaluate an expression as opposed to simply adding a method convenient that works with optional chaining, things like that. So I am not really – I don’t think I agree with the idea of increasing syntactic complexity. And I agree with Kevin, that do-expressions overcomplicates the solution. It doesn’t solve the issue of having to use try catch and write this complicated set of statements. All it does it put the complicated set of statements in something that returns an expression, what you could do with an – inline immediately executed arrow function and don’t have do-expressions. It’s still not convenient. I don’t really see why that this should be considered for Stage 1

RPR: I think we have to stop there now. Yeah. So I think the conclusion is that this has been blocked.

### Speaker's Summary of Key Points

- List
- of
- things

### Conclusion

- Not going to stage 1. Listed in the rejected proposals.

## Module sync assert for stage 1

Presenter: Jack Works (JWK)

- [proposal](https://github.com/Jack-Works/proposal-module-sync-assert)
- no slides

JWK: Yeah. So the problem here is if some module in the dependency graph becomes async, the importing module becomes async too, then the evaluation time is deferred, and it might cause some bugs in the real world. This is a real bug that we have encountered in our products. We register an ‘onInstalled’ event that opens the welcome page to new users. Then there is a new top-level await module in the graph. So this whole module becomes async. But this event handler only gets invoked at the end of the first event loop, so when this module – when the call runs, it’s already missed events. And the welcome page no longer opens. This is very hard to find because when you debug the app, it is already not the first time opened. Here is a possible solution. We can solve it at the bundler level, but every bundler needs to invent their convention and this does not fit for projects that do not use a bundler or linter. This (import attributes) is not an option because it’s already renamed, the keyword to with it does not assert anymore. And also, the attributes, are not an option because when you attach this one, you always want to attach every import and export in the current file. But if you are using import attributes, it allows you to write some imports with the assert sync assert and some others without, which you never want. I think the best is to add a new directive. If a module appears with this directive, then it is an early error, if there is an async module in the graph or this module itself is async, so you will fail early to find the bug earlier. That’s all.

NRO: Yes. I wanted to share one use case. There is one JavaScript platform [i.e. bun], that supports both CommonJS and ESM, and to make it easy to use them together, they decided to allow using require of ESM. But obviously, that only works when ESM does not use await because otherwise it can be asynchronous. Having a way to ensure that they do not accidentally introduce await in the dependency graph and so making sure that their module keeps being synchronously required would be helpful.

DLM: Yeah. This is solving a real problem. This is something that has come up internally at Mozilla as well with the loading module mechanism. We are in favour at Stage 1 for this. This is good. Thanks.

NRO: Yeah. Something – another reason why this is how to compose with the deferred imports in the deferred imports proposal right now, async models need to be eagerly. When you import with defer, you have to traverse the whole graph it look for asynchronous leaves. Like, this proposal would allow engines to like stop traversing the graphic at specific points, so it helps making that feature – make the developers the other language more performing

JWK: This idea also jump out when I was implementing deferred imports in webpack.

MM: I don’t need to speak, but just enthusiastic support. The problem is real and you explained it well. It’s worth a Stage 1 investigation. For the record, the directive approach is plausible and I am glad you stated several plausible approaches.

MAH: Yeah. There can be observable effects from – of showing up in the dependency graph. I am confused by the example provided here for basically workers or anything like that. That feels to me like a bug in the environment that, where the environment would very well only trigger it once it realized the top-level module has fully – the module providing the end point has fully loaded. I am confused how to basically – this specific case is not a platform bug.

JWK: Yes. In this case, maybe Chrome can fix it. But you also mentioned service workers. In the service worker, you also need to register all listeners during the first run and if the module gets async, it might cost a several event loops to register the event listeners and that becomes problematic.

MAH: I mean, even for the service worker, I don’t understand why service workers do not consider this service worker as an incompleted, its load, once the main module has loaded.

JWK: Have no idea, but that’s what Web currently does.

MAH: Yeah. Anyway, but I support the use case in general because I know it has – it can be observed. It can have observable effects. I encourage to file platform tickets for these specific case.

EAO: I like this just as a quick question on the syntax: my preference would be to go with something like assert sync true, which is in the middle of the first two ones. I understand this requires repetition. Is there a reason why you kept that specific form out

JWK: Yes. I have already explained why this is not ideal, but maybe I should reexplain it. When you write assert sync, what you want is the current model to be sync. If you write code like this (`import 'a' with { assertSync: true}; import 'b';`), "a" must be sync and "b" does not have to be sync. This case does not make sense. The general intention of writing sync assert is to assert the current module itself is sync, and you will need to write the sync assert in the every import/export in this file, if we take this approach. This will be annoying.

EAO: Okay.

GB: Sorry, I'm just trying to follow the discussion here, so I don't want to rehash the same point again, but while we're on the topic, is the intention that the assertion form asserts that the direct import is a synchronous module that does not have any await, or does it assert that the entire graph, all the way to the bottom leaves, does not have await?

JWK: Yes. The whole graph.

GB: Thanks for clarifying.

ACE: To reiterate what NRO said, I can see the issue where if you’re using this feature because of the bug you described, then yes it’s wrong to only put it on one of the imports, you would want it on all of them. However, as NRO said, there’s also use cases for wanting to use this on an individual import basis, which the directive then wouldn't let you, like the combination of this with deferred imports saying I want to defer this import and there should be no asynchronous pre-loading. So you can still achieve the fixing of this bug by wrapping all of the modules, by only having one import, you know, move all of your imports into a module, and then just having one import that one module that contains everything is sync. So maybe that gives you the best of both worlds, whereas the directive only really handles this one use case.

JWK: Okay. That’s – that’s a way, but we need an extra file for this. I’ll add that after the meeting.

RMH: Yeah. In our meeting, before TC39, we got the feedback that it seems like a Chrome extension API issue. And we were not convinced why we need a new language level feature for that. But we are fine to explore more this proposal.

JWK: Yeah. We have already raised some other use cases. I can update this after the meeting. E.g. to assert my library always being sync, otherwise it might break customer’s code.

RMH: Yeah. Thank you.

GCL: Hello. The same thing that was said. For one thing, I don’t find this particular example to be super motivating because I feel like it’s just a bad API that is not – like, it’s basically a race condition. I understand there are other use cases, but I am kind of concerned that we’re like making the ecosystem, a world where it’s not possible to use async module at all in any dependency ever because somebody somewhere is going to put a sync assertion on it and then your module is a problem module because you used async.

JWK: If you write this, you will have some reason that the module should be sync. So if an async module comes up, you know it will cause problem and you will have to rearrange how you import those modules so they don’t break the intention that’s letting you add this sync assert in the first place.

GCL: I mean, I could see that. I am also seeing places where already stuff is being changed to not be async anymore. Like the WebAssembly ESM integration, which was not done specifically because of the use cases presented in this proposal. But somebody had a reason that an async module wrote what they were trying to do. So they changed the ESM integration to longer use async modules. I am just sort of a bit concerned that’s a thing that we will see more and more. Especially if we add more places where we are excluding async module. I am not sure if this is enough to block Stage 1, but I want to investigate what the ecosystem direction will start to be here.

JWK: Yeah. Because if you are like writing a library and your module becomes async, it will be a breaking change. So adding this one can be a promise in your library that we currently –

GCL: I would not consider that to be a breaking change. I am sure you can write code at that makes that a breaking change. But I would generally consider that to be buggy code. I guess that’s where we are running into this problem.

GB: Since it came up on the last topic, I can clarify briefly the reason that web say assembly as an integration switched to no longer using top-level await was for support for deferred – the deferred import proposal because there is benefit in being able to defer the start initialization in a similar way that deferred modules work. And so definitely the interaction with deferred is an interesting point to consider for this proposal. And I think expanding the use cases beyond those which are currently listed would be very beneficial as well. So the deferred interaction and then there is also potential benefit for no JS, which is that no JS, you cannot require an ECMAScript module because it is – it might have top-level await and it might be asynchronous. And the loader pipeline has a way to be specified. But having some kind of implicit endorsed behavior for asserting a synchronous graph and needed for no JS to implement the semantics. This has come up, so that might be something that is a tangential use case, but would set a precedent to enable no JS as well. So it’s worth mentioning.

EAO: Yeah. Just I thought I would highlight that Jack said previously, that what this is – this directive syntax is allowing, I think, slightly earlier determination when traversing the graph, whether the directive itself is valid. Because if it hits a node that says this is async, it doesn’t need to look further, but it can trust that. Otherwise it needs to check all of the imports of that one module and with the style of using something like with assert sync true, for instance, it will feel clumsy to include that in all of the place that is one knows already sync. Effectively, the – I think the directive syntax will be quicker to work with. I don’t think that’s going to have any real world effect, but I realized that I actually do like it more than the import assertion one. I thought I would highlight that

JWK: Sorry. But the engines do need to analyze the whole graph because they need to raise an early error for async module used in the subgraph. So I don’t understand how it can be faster.

RPR: Yeah. Normally, earlier, with the engine doing more work . . . Nicolo, do you have a clarifying question

NRO: Yeah. Clarifying comment. This is an initial discussion about how to handle this. I have not checked yet, the status of that, but it’s still like open. So let’s not do this too much, to decide.

NRO: Yes. I want to share another use case I have for this that is when writing polyfills, you need to make sure that the polyfill installs itself before running any other code because usually you import the polyfill into the libraries and other models using will assume that polyfill will be globally available. And so like any polyfill returns as ESM would make use to directive to make sure the this – make the polyfill install, the module versus been executed.

ACE: I think I am right in saying, if I have multi imports, at the top of the file, the module itself isn’t going to be executed into all of those. The third import can execute before the first one. But it’s only like you were just saying, you would import the polyfills and import the rest of the code, and thinking that because I havecy certificated the first polyfill, it will evaluate before I evaluate the second import. I imagine that’s the way it works. It forces it and only a subgraph (?) if it’s synchronous, it’s guaranteed to be executed before other imports –

ACE: This isn’t saying, everything is synchronous. The evaluation is synchronous. Like, if we were using this code in a browser, every import is async now. It can evaluate before the first one

NRO: The way ordering works is that first everything is load. And then after . . . So loading async nows does not effect order, it’s only effected by the orders that import statements are in your code. And by whether those models used await or not.

ACE: Great. This is me being negatively influenced by how the Bloomberg module loader doesn’t work that way. Okay. That’s great. That makes a lot more sense. So the assertion does imply evaluation order then.

RPR: Do we have any more questions? Or can we have Stage 1?

JWK: All right. An explicit request for Stage 1.

RPR: We have support from NRO. Any other support? From Eemeli. And Daniel Minor.

MM: Reiterating the support statement I already made.

RPR: All right. Would you like to just summarize the key points.

### Speaker's Summary of Key Points

JWK: I don’t think we have something to summarize. But I will update the README about the motivation. Thank you.

RPR: Okay. It sound like there was another point to clarify early errors as well. Okay. Thank you, Jack.

### Conclusion

- Achieved Stage 1

## Decorators normative update re: extra initializers

Presenter: Kristen Hewell Garrett (KHG)

- [proposal](https://github.com/tc39/proposal-decorators)
- [PR](https://github.com/pzuraq/ecma262/pull/12)
- (no slides)

KHG: So the update here to the decorator spec, basically something somebody pointed out as we were working through it, that we initially didn’t have initializers, like the add initializer, extra initializers that decorators can add for class fields and accessors. The logic being they could just use the accessor or the initializer that actually initializes the valueOf the field. In discussion, in committee, we decided to keep – to add the add initialize method to those decorators because that way, it would just be simpler and we would have, like, uniform API everywhere. So that was the state of things. And then somebody pointed out that all of these initializers currently run prior to class field assignment. And right after super. Which is what we agreed on in committee for methods. And getters and setters. Which makes sense because those are the prototype values. For fields and accessors it doesn’t make sense. The logic was that fields, accessors code in general should not observe a period where a value has been not fully initialized, until that code runs. And for methods, that means that all of the methods need to be initialized before the field runs. And initializes itself. But the initializers for the field are currently running before the field. The extra initializers. So this change would rectify, it would have them run immediately after each field is defined. Which would kind of bring that in line conceptually. There is an additional benefit to this, which is that currently, with the ordering of initializers, the values of the initializers are – they are run in reverse order. This was discussed at a previous meeting, the last change we made.

KHG: And overall, as we discussed in the last meeting, that makes sense, that, you knower, valuable for setting initial values and whatnot. You can’t define a method using decorators and then write using the same method using decorators to allow them to work on a field assigned to like an arrow function and have the output be the same. Because they are decorated in opposite orders. Methods are decorated, I believe, inside out. Like, baz, bar, foo. And the field decorators, the initializes would run foo, bar, baz. As if the value is getting set from the outside in when it is being initialized. So yeah. This would basically allow two stages for fields. So there would be the initial stage of outside in, foobar BAZ and the the next – and bar run extra initializer and foo extra run initializer. And that would allow you to write a decorator that would have the same decorators behavior for a method or a field that is assigned to a method, to a function, and that would eliminate a refactoring hazard because as the user, you might expect, that you could just, you know, refactor this to be an arrow method, if you wanted it bound or something. And yeah. Currently you would not necessarily be able to do that. Any questions? That’s the change.

RPR: All right. So any questions about this? At the moment, there are none.

KG: I have no questions, but that makes sense to me.

KHG: Okay.

RPR: Thank you for the positive statement, Kevin.

KHG: I thought there might be more discussion. I put too much time in the queue.

RPR: It would be nice to have other messages of support. Question from Daniel Minor

DLM: Sorry I was hoping to dig up the specification before this, but I didn’t manage to. So do the extra initializers that are added by field and accessor have access to the value of the field?

KHG: Yeah. So the extra initializers added via add initializer run after the field has been defined and are given the value, like, they run with the context of the class, I believe, that this – the class – the `this` of the method is the class instance. So using that, and using the access API, which is an API to use to access the value of the field, either public or private, you can get the initial value at the field and set the initial value of the field to an updated value.

DLM: Okay. Yes. That makes sense. In general, I support this change. And this is actually the way I thought things were working. I missed the old behavior. I think this makes a lot of sense

KHG: I think I have thought it was working this way too and I looked at the spec and I was like oops. Yeah.

RPR: Happy accident.

KHG: Yeah. Cool. So can I ask for – I guess, are there any other questions?

RPR: No questions in the queue.

KHG: Cool. Can I ask for consensus to merge this normative change?

RPR: DLM has explicit support. We have already heard support from KG. CDA has a + 1 as well.

KHG: Excellent. Cool. I think that’s – we just need to write –

RPR: Yeah. And MAH as well. This has consensus.

KGH: Perfect.

### Speaker's Summary of Key Points

I guess the key points are, the previous behavior of the – the current behavior in the spec of extra initializers with regards to fields and accessors was not in line with conceptually what the values did. They were not running after the fields were defined. They were running before. So creating this weird timing, kind of unintuitive timing. You know, concern, issue. And then also, the ordering of the standard initializers, the field – I wish we come up with a better way to distinguish those two. But the fields value initializers led to potential refactoring hazards. If you were wanting to, for instance, convert a method into a field. And with this change, the initializers will conceptually align with what they are supposed to do for methods and getters and why they were initially added in the first place. It will no longer be a refactoring hazard.

### Conclusion

- Achieved consensus for changing the order

## Deferred import evaluation: deferred re-exports

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-defer-import-eval/)
- [slides](https://docs.google.com/presentation/d/1l-H2ntEDZGAWvtuOup1TJdylZsV1epKVSejVM-GwHLU/edit#slide=id.g29b94779710_0_0)

NRO: So this presentation is looking for feedback from the committee on a possible feature of the deferred imports proposal. And specifically what we can do about `export … from` statements.

NRO: So let’s just remind everybody the goal of the deferred import proposal. It’s the transapparently avoid as much initial work as possible, to like improve start up time. We don’t require any big change. So an example for the proposal is that we might have some function using import. But this function is not immediately used. In this example, the JS file is executed immediately after that. So you need to go in JS library and parse the styles. But this is only used once MyButton function is actually used. So this proposal, gives us a way to like mark the import so that the module will not only be executed when we actually need it.

NRO: Okay. So deferred models – modules import with a deferred import, evaluated synchronously and on first use. And there are some restrictions that is that it only supports namespace imports. Because we want set of facts to only happen and not on binding axis. And they still need to be part of module graph because we don’t want to sync blocking fetch in the browser.

NRO: And also, some of the deferred, of the deferred models still need to be executed, because if they use top-level await, you can’t execute them later.

NRO: Okay. So that was the recap of what the proposal currently is. So what can you do about `export from` statements? Well, the reason I started to think about `export from` is because they are basically an import statement without an export statement. They still load external code, they're still somehow related to imports.. And do we give us another student to skip unnecessarily initial work that might affect start up time? Let’s look at an example. We have our – on the right, the components library that is some library that maybe. That is using the export from syntax. This file might have some code other than exports or might not. And then we, in other application on the left, import something from this library and use one of the export utilities.

NRO: And like all this components library will be executed at start up and add an execution that will slow our upstart. So one possible solution for the like developer would be to stick to the deferred key word in import statement so the library is loaded but not executed until when it’s actually necessary. These might work in some cases when the library is not used for the initial render. It doesn’t work every time, but sometimes gives benefits.

NRO: However, there is still a bunch of unnecessary work going on. Specifically, we have – we are not using all the exports on this file. Like firm, components. But we still need to eagerly load them just in case we will need to later execute them, the developers know that that will not happen actually So let’s not focus on when the code is need, but the whether the code is needed or not – in this case, we have an example here. Well, I will – I am now presenting with this a clear idea of what the solution would look like exactly. So let’s just say that we have a key word to mark export statement saying, hey, when importing this module, only import this like re-export statement if it’s actually necessary. In common JS this would put a bunch of the getters on of the export object and using object destructuring to require your library so that only the things that you use are actually required and like, for example, tooltip.JS is not loaded at all

NRO: So how is this export some-keyword syntax different from import error. As I said, it’s not about the work, it’s more about the -- like, if some code is needed at all. So it doesn’t need to have the model synchronous available, because if some code is not used, we will never need to synchronize it later. This means it does not need to eagerly wait. So can we avoid loading altogether that code? Well, this would be possible only for with not reporting early errors for this expert keyword from modules. This is also why, like, it’s, as I mentioned before, this is still an open question for the import deferred proposal. So in our example, the tool JS and the form syntax JS file would never be executed. This is very similar to what we already know as reshaping. It has the same goals as the import proposal, that is to shave as much work as possible and to make it, like, upstart faster. But it has some different semia ticks and is loading delay. This is why I’m calling it a keyword. Maybe it should be deferred because the reason it’s been used the very similar, but given the semantics are different, maybe it should be something else, and there’s an education which is deferred. If you have export the first star, as a name space, you are creating a deferred name space or using only this load to syntax. These are all cases that would be gone through and so somehow even if you’re not using the same keyboard. So we have this keyword -- well, I was thinking about this expert syntax and how it didn’t track with the third imports. While this is more about just the current deferred imports proposal, but let’s take a look at this example for a second, because now it shows different variations with the deferred keyword in different places. So we have objects file that imports a model JS and later uses the -- one of the values exported from this model, and model.JS reexports to different dependencies. If we just use import defer and the module export from statements in the old files will be loaded, and in the initial execution, we would execute up to JS. We would not execute mode of JS because it’s deferred, but we need to execute the asynchronous dependencies of model JS, and later when we -- when this later callback fires, we need to read a value export from model JS, so we need to evaluate the remaining models of JS and all of its dependencies.

NRO: If we have a normal named import with this expert keyword potential, what happens in this example is there is no more later distinction, but simply we never load and never execute that bar because we’re only using the full export of model JS. And if we’re using an import star instead of named import, we would still need to load everything because we need to populate this name space object. But maybe we could avoid -- we could -- if a keyword would be deferred, so the same keyword for deferred, we could avoid executing for the bar until when they’re actually needed, except obviously for the asynchronous transitive dependencies. And if we stick deferred on the import and also some keyword that could be deferred, well, in this case it would be deferring model execution of JS itself, because it’s marked as deferred in import statement.

NRO: So this is mostly an idea of how we could extend the benefits -- extend, like -- tackle the goals of -- better address the goals of the import deferred proposal. I’ve been looking for feedback, A, if this is something that we want to do at all, we should explore. And if so, how old it be as part of this proposal, given that some of the same goals, or how old should it be something else given it’s not exactly the same thing. And then maybe related to it, whether this should be just the same keyword and have different semantics and the keyword can be changed to be something that describes both and they have different semantics or should we use a different keyword. And this is it. Is there anything on the queue yet?

JWK: Yes, I like this because the previous proposal, the previous deferred is -- solves this problem on the consumer side, and this also provides a mechanism to slow the defer problem in the library provider side, and if the library provider used this feature, then the consumer does not need to have to change anything in their code. That would become much easier to get this feature widely adopted, and I think first, yes, we need to explore this, and I think we can have this in this proposal because as you said, it shares the same goal, and I think that the defer keyword is okay, but if we have other options, it might also be valuable to investigate. And I also have another feedback about the current deferred proposal, because we are already widely using it in our products. And I found you still need to do a lot of refactoring to make -- to make some dependency deffered becomes -- because we usually use named imports, and if you want to defer it, you need to write it into name space import, which is annoying, and I really think it is unnecessarily restriction, and we -- I think we should slow it by doing it in the spec instead of letting everyone rewrite it into name space.

NRO: Thank you for the feedback.

ACE: Expressing explicit support for Bloomberg. This is great for us where we have large libraries, as Rob said many the chat, dynamically linked in, so people will always get the latest version of things rather than statically bundling ahead of time the whole app. So this is kind of -- this kind of run time dynamic tree shaking is something we internally implemented and rely on and it would be so much better if this was something built in the ESM, because it prevents us from using ESM in certain places, which is a real shame. And I could also see a lot of people using this on the web again where they’re pulling in large libraries on the fly rather than building everything once ahead of time. So, yeah, big support..

JHD: Yeah, the importing side always made me nervous in a way I’m still struggling to vocalize, but the keyword on exports seems really nice. As I was talking about in the Matrix chat, tree shaking is not a good thing. It doesn’t work completely. The stat that I continue to cite is Coinbase started prohibiting barrel files and doing deep imports and their React Native app size dropped by 71% just by that change alone. I basically don’t believe any claims that tree shaking is a reliable tool, and however, this seems like a way we could turn it into a reliable tool in a very syntactically reliable way. It seems great. So I really like that direction.

MM: So we -- we’ve -- previously we’ve gone through the import defer, the whole, you know, deferred imports before this additional feature, and understand how it plays with the overall model harmony. From internal discussions right now at Agoric, this one’s taking all of us by surprise, although, we’re getting it, and I think we see the value in it. But could you explain how or whether this fits into module harmony and if it’s adding an additional complexity in how it fits over import deferred without this feature.

NRO: So, yeah, the way this interacts with the rest of the mods proposals is different from how the existing import defer -- import defer does. For import defer, basically all the other proposals don’t really need to worry about it because the import defer happens after linking, and that’s, like, after linking, that’s something you can, for example, virtualize anymore. For these, for this export defer feature, so one of the -- one of the things we’re exploring with harmony is which metadata to expose, for example, model source or which meta data virtual model source needs to expose themselves, and one of these would be a list of exports and imports. And these defer -- like, the fact that I’ve given an export from is deferred needs to be represented in that metadata because the way you would then, like manually link -- load and link this is that executing the model with the export deferred statement itself would not load these dependencies, but these dependencies would be loaded -- would need to be loaded while looking for dependencies on the importer module.

MM: Okay, I’m somewhat getting that and somewhat it’s too much information to absorb in real time. Let me invite you to present this as well to the SES meetings.

NRO: Yeah, I will be happy to come.

CDA: Nothing else on the queue at this moment.

NRO: If the queue is empty, I want to propose that we should explore this as part of the expert defer proposal, and I would leave open the question whether it’s a different keyword or the same. And it ends up being a different keyword and semantics end up being too different, we can then consider splitting it into a separate proposal at some point.

KKL: I explicitly support investigating this direction. I like that it shifts the responsibility of this concern to the provider of the module.

NRO: Okay. Then thanks to everybody that gave feedback on this.

### Speaker's Summary of Key Points

- List
- of
- things

### Conclusion

- List
- of
- things
.

>> Would you like to dictate a key points summary for the notes.
.
>> Can I maybe do asynchronously.
.

## TG4 Sourcemaps update

Presenter: Nicolò Ribaudo (NRO)

- [RFCs](https://github.com/tc39/source-map-rfc)
- [slides](https://docs.google.com/presentation/d/18DtsUGrXPOY1Hp6aLqGlaOGYColCUzBa7Y5BRzGBYN4/edit)

NRO: So TG4 report. For those who don’t know what TG4 it’s the test group where we’re working on source maps on standardizing -- properly standardizing source maps. This is the status update of what happened since the last TC39 meeting. So there has been two main normative changes to the spec. Reminder that the spec is still, like, a draft spec. It’s not published yet. One of them is that we had X Google released field, which was originally added in Chrome, then other browsers started prototyping it, so we added to address spec, but now it’s been renamed to ignore list given that it’s -- well, it’s becoming a standard. And this field has the source maps to mark some pieces of code as, like, generated by tools, and so that they should be skipped while the bug is in the code. And then the other major normative change is that we defined how WebAssembly files should link to source maps. And, like, which was -- this was already what was happening while the source mapping URL custom section, but we just explicitly put things back. Then there’s been great progress on the -- on a proposal for new source map features. We call it scopes. It -- well, it unloads uncoding scope information in source maps, and this is the information that’s not possible to rebuild with the -- with the existing information that’s in source maps. It’s a list of bandings that have maybe been removed and renamed, like the type of scope, what visibility has bindings. For example, if you’re compiling some rust for the family. Rust functions do not get binding from other scopes. This will basically reconstruct the original variables when using step by step developers. And lastly we defined process on how to work on proposals for new source map features. And I was going to highlight a separate presentation for this, but I -- it’s right after this one, so unless there is something in the queue, I could probably just go directly to that.

CDA: Nothing in the queue.

## TG4 Proposals Process

Presenter: Nicolò Ribaudo (NRO)

NRO: Okay, then let me get those slides. Okay, so TG4 process, so what does TG4 exactly does with source maps? We had too many working work streams. First of all, we are completing the existing specification, the existing spec. There are many not specified yet and there are many ambiguities. It’s not possible to implement this spec because it’s not clear what it means, and also we’re making sure what the spec says matches what the implementation do, because especially given all the specific areas and all these am biggities, implementation starts aligning in different ways, so we have to make sure the spec is aligned. And also aside from this, we’re working to introduce smart features just as you mentioned with scopes source. The code source features have been stale for the past many years. There have been all sort of different experiments in the companies, and I think when introducing the capabilities to source maps, and now we’re trying to coordinate in this test group rather than everybody going in their own direction. So the way our process work in TG4 is different depending on which two work streams we’re talking about. For fixes to the existing spec, clarifications are, like, aligning with neutrality, and we basically handle them the same ways we handle normative PRs for ecma262. And most discussion is in GitHub, and we basically have consensus in the TG4 meetings for merging these pull requests to the spectre. And for new features, we just introduced TG4 internal stage process, which is heavily inspired by how TG1 works, so we have four number stages representing from, like, just an idea to something complete. We should probably start adding names to those like we’re doing for TG1. So those stages are not the same as TG1, because the source maps, there are different requirements, different ways implementations are used to experiment the proposals, and there are, like, different types of implementations, so we had to adopt the process or needs.

NRO: What we have at Stage 1 is that we need to have an explainer we’re trying to solve. And in practice, with all the proposals we had, they were already introduced with some idea of a solution, so, like we just encoded there might be some solution, but we don’t need to have consensus on the solution yet. It will be completely rewritten. So we have a problem statement for Stage 1. Then we have Stage 2, that’s when without more concrete details, they’re not final and further iteration is expected. And in Stage 2, we have already encouraged implementations. And the reason is that source maps are, like, mostly meant to be mapped, like, communication from machines, so it’s not the user -- like, user experience of -- that matters, but it’s the -- like, how, like, is this in this form actually usable for various tools. And, like, we need to start implementations early, so we encourage experimental implementations at this point. These implementations will not be shipped, because there’s there’s still a high risk of breakin’ because it’s just Stage 2. And then Stage 3, we have a complete description of the solution. We have at least one implementation. It’s important to know that we basically had three different categories of tools, Source map generators, such as bundlers or minifiers. We have stack-by-stack debuggers, like your browser tools or many editors. And then we have stack trace decoders, such as [...] I guess the source maps to give the traces or, like, there are tools like (indiscernable) that get production and the code gets a place to help developers understand where the problem is. So we need to be able to generate source maps to actually implement the tools. And obviously it hasn’t been started. We are still figure out exactly how to write, share the tests for source maps. So once a proposal satisfies these requirements, it reaches Stage 3, and we expect that further improvements are possible by actually implementing these tools and testing the synapses. And finally, we have stage four when something is complete, which is that we have two tools, two implementations per category, and a complete suite. And at this point, the proposal can land in the spec draft.

NRO: So this is an internal TG4 process, and how does this interact with what TG1 does. First of all, everybody from this group is joining -- very welcome to join the meetings if you think you have useful expertise or just interested in it. We meet monthly online, and one hour long. It’s important to notice that differently from how other test groups in TC39 work, source maps don’t actually affect the run time behavior of the language. And this is why we’re keeping most of this process only TG4 internal. We still need to go to TG1 because TG1 represents a certain level, so we need consensus to publish -- like, to publish the final draft, and then to publish new versions, to publish updates to the published spec. And we hope to have this similar to how TG1 approves the 262 spec snapshots, so there is like the staging process where we discuss proposals, and then, like, the matters for actual publishing from my perspective is that is represented by TG1 must have consensus on the final spec version. So we plan to do is to keep -- process this internal in TG4 and have TG1
(indiscernable) and the final source maps. And once -- like, once the spec will be published, we will come to TG1 to further update to the spec once we reach Stage 4 in the TG4 process. And this is it.

NRO: How -- is there anybody on the queue with questions or clarifications how this process would work?

CDA: Nothing just yet.

NRO: Okay, so just, like, to be clear, we would not come to TG1 for stage advancements of source map features within this TG4 process. Thank you very much, everybody.

DE: Does anybody have concerns about this process? Does anybody disagree with the decisions made here?

KG: I have no concerns. This seems good to me. In particular, source maps are pretty different from, like, Intl, where I think it makes sense that Intl proposals sort of go through a process where TG1 gets oversight and I think source maps are sufficiently different that it makes sense to follow a different process with TG4. So this sounds good to me.

CDA: Nothing else on the queue right now. Yeah, I support this as well. It makes sense.

NRO: Okay, then thank you, everybody. Again, I will get you a summary asynchronously.

### Speaker's Summary of Key Points

The new TG4 process was presented. The source map specs will have two types of changes:
"Normative PRs", focusing on correctness of the current spec and that require one-shot consensus Proposals, that will go through 4 TG4-specific stages The proposed relationship between TG4 and TG1 is that TG1 will ratify/approve the documents prepared by TG4 once they are ready, without TG4 coming for consensus at every step of the TG4-internal process

### Conclusion

There is support for the proposed process and relation between TG1 and TG4

## Provide source text to HostEnsureCanCompileStrings PR [continuation]

Presenter: Nicolò Ribaudo (NRO)

- [slides](https://docs.google.com/presentation/d/1MRItYS_b1hwKstlqlfoD8mgbecS2OkTSiPFVWHs3Y_8/edit?usp=sharing)

NRO: Okay, great. Let me share those other slides. Okay. So after updating the normative test to match what was consensus that we got on Monday, we noticed that actually there is one case where we didn’t clearly -- that we didn’t clearly go through, so we need the come here again to understand what we want to do in that case.

RPR: Nicolo, your audio is occasionally going fuzzy. I think we can understand you 80 to 90%.

NRO: Okay. Let’s see if it starts working better, because there’s nothing that changed from before, so I don’t know how to fix it. Okay, so it’s specifically about behavior of new function with one argument when this argument is not a string. So the old version of new function -- well, the current version is that first it calls the host to, like, verify CSB. Then it stringifies the parameters and the body and then it concatenates everything to get the functions and finally evaluates the function. And from the discussion that we had on Monday, this is what the new version would look like, that is if there are no parameters, we pass the source stack to the host hook, however, the host book is before stringifying the body, so we don’t have the source body to pass yet to the host to. Further, like, currently there are a ways that this could be solved. One is that we only pass the body if it is a string, which means that CSB would only be able to, like, chat or hash a string and not for objects that cast to strings, and this is probably okay like this, because, like, hash is -- like, CSP hashes are meant to be first, so not like for dynamic. And another option is to first stringifying parameters of body, and then (indiscernable), and this is an ostensible change in which you change the parameters, but it might be okay since it just slightly affects the (indiscernable). Yeah, and then we would also have the option of only making the change normally for eval and keep the old function behavior, given that all the use cases for new function can also be solved by building one function string. If anybody has preference, please speak up. Otherwise, we want to go with option 1, just because it’s the -- like, the one -- the simplest one.

MM: So the -- why not simply pass all of the arguments to function without stringification, just pass it without any coercion, just pass it all to the host so the host has the actual arguments that were passed?

NRO: Because the motivation for this is to let the host compute the hash of the -- of the code so that you could -- like, in your CSP header, you specify the hashes of the code, and they possibly know whether they can be executed or not. So you need to have access to the string.

MM: Maybe I'm remembering something that we ended up not doing, but with eval, I know Mike Samuel had been proposing that we pass the uncoerced argument to the host so that we could -- so that you can basically brand the argument, you know, Trusted Types and all that kind of stuff. And so for, you know -- that would be a non--- you know, not for a CSP use. But for other possible host behaviors. Are we doing that with eval, and if we are doing that with eval, why doesn’t that apply equally to function?

NRO: So the change ended up never happening. There has been requests and something we’re thinking about for the future. It’s just not something that there is yet. Eval-- what eval does is if the argument is not a string, it just doesn’t call the pursuit, it doesn’t stringify the argument, and it just (indiscernable) as now.

MM: I’m sorry, the audio is fuzzy. If the argument is not a string, it just what?

NRO: If the argument is not a string, eval returns immediately the argument without calling the host hooks or without stringifying it.

MM: Oh, right. Okay. Okay. Thank you. I’m -- I don’t know what I prefer with regard to this issue. And I would like to spend more time talking about it, and I think this is also a good one for you to bring to the SES meeting. Because obviously this is security relevant.

NRO: I probably will at some point in the future.

PFC: I wanted to agree with MM, especially if we need the host hook to be able to accommodate Trusted Types, this will be something we need to change in the future. You will have to pass the uncovered argument to the host hook as well. But it looks like there’s not yet a concrete use case on the host side for that.

KG: Yeah, I’m fine with anything here. And if, like, we can see the future and tell which of these options will be more easily adopted to trusted types in the future, that would be my inclination, choose whatever would make trusted types easier. In the absence of any other reason to prefer one or the other, option 2 seems a little bit more natural. But option 1 is fine as well since it’s simpler. To be clear, what option 1 would mean is that you could -- the only way that you could evaluate something with a function constructor is if unsafe eval was allowed, right?

NRO: Yes. Well, if it was an object constructor, you would develop it, yes.

KG: Yeah, option 2 seems a little nicer, but, you know, if you think option 1 is sufficiently simpler, I’m fine with that too.

PFC: I think, Kevin, what you’re talking about is option 3, where evaluating anything with the `new Function()` constructor would not work unless you had unsafe eval enabled. With option 1, if you did `new Function()` with a static string --

KG: Sorry, I did mean specifically the case in which you’re passing an object.

PFC: Oh, okay, if you’re passing an object, that would not be -- if you wanted to do that with option 1, you’d have to have unsafe eval enabled.

NRO: To be clear, we’re perfectly fine with option 2. We’re proposing option 1 mostly to pick something, given, like, it’s easiest one, because it doesn’t require moving line around, but if there is only weak support for option 2, then we’re very happy to go with it.

DE: Could the function constructor pass both the value before and after stringification to the host hook? I know that requires moving the line around, and I know that for eval that doesn’t work.

NRO: Yeah, if we go with option 2, then as soon as we need to also pass the original object for trusted types, well, like -- we could just add the objects to the values we are passing to the hook. There is just no need for it right now for this CSP change.

DE: Does this CSP change here have implementor support?

NRO: It has support from -- or at least interest from whoever did editors, I think, of CSPR, but they were for at least two different browser companies.

JHD: I don;t like option 2, prefer 1 or 2.

KG: So I do want to give a concrete reason to prefer option 2, which is that the whole point of this change to CSP is to make it easier to adopt CSP in the case that you have some use of `new Function` in your code base, and you’re okay with it because you statically know what it is. And with option 2, I could imagine - I hope it is not the case, but I could imagine - someone is passing an object that will be stringified to Function right now, and such a person would not be able to adopt the stricter CSP with option 1, and they would with option 2. And since that’s the goal of the proposal, it seems like option 2 better serves that goal.

NRO: Okay. Then, well, let’s ask, do we have consensus for option 2, which is the one that’s being projected on screen right now? Okay, Mark?

MM; Yeah, I don’t want to agree to consensus on any option until I understand all of this better. So I would like to not decide this meeting. That said, I’m not -- beyond that, I’m not resistant to option 2. I just want to understand it better.

NRO: Okay, then given that nobody else had concerns with either option 1 or 2, other than Kevin preferring option 2, would it be okay for the rest of the committee if we resolve this on GitHub with Mark, the choice between these two options and if we can agree on one of them, just go with whatever it will be?

MM: That sounds fine to me.

KG: I’m fine with that.

PFC: +1 (from chat)

JHD: +1

RPR: All right, I think we’ve heard support for allowing Nicolo and Mark to figure out the choice between 1 and 2 offline. Are you happy with that as a resolution, Nicolo?

NRO: Yes.

### Speaker's Summary of Key Points

Following up from the discussion on Monday on extending the HostEnsureCanCompileStrings arguments, we found an edge case that is when you call new Function with an object. We discussed two ways of solving this. One is to only pass the body to the host hook if it’s a string, so if it will not need to be coerced, and the other possible solution is to call the host hook after coercing the parameters and body to a string. And we will work offline to pick one of these two options.

### Conclusion

HostEnsureCanCompileStrings will be updated following either opinion 1 (preferred) or, if not possible, option 2. This will be discussed offline.

[Lunch]

## Slice notation stage 1 update and `[^a]`

Presenter: HE Shi-Jun (JHX)

- [proposal](https://github.com/tc39/proposal-slice-notation)
- TODO: get link to slides

JHX: Okay. Yeah. Okay, good afternoon and good evening and a good morning. It’s my 5 a.m. I’m not sure I am very clear, but anyway, let’s start. I have two topics today, which are highly related, so I will discuss them together. My total time is one hour, and I hope I won’t need that much time.

JHX: First let’s recap the slice notation proposal. This is the link to the proposal repo in the last presenting slides. And during the TC39 meeting on March 22nd, 2018, the slice notation proposal was presented by Sathya. The proposal aimed to introduce more explicit in a consistent way to extract subarrays by using a notation with square brackets and a colon. You can see the example here, and where the N index is inclusive, it should maintain similar semantics with the slice method, at least in the -- at that time, in the first draft.

JHX: After discussion and consideration of various points, the committee agreed to move the slice proposal to Stage 1. And during the meeting on July 21st, 2020, the committee discussed the proposal also presented by Sathya with the aim of advancing it to Stage 2. Several concerns were raised by the delegates, and as a result, the proposal remained at Stage 1. Here is the main concerns. JHD raised the concerns about the proposal not addressing string support. He did not block the proposal at Stage 2, but indicated potential future opposition if string support isn’t resolved. GB expressed worries for implication for slicing, specifically the mismatch between Unicode and code points, versus code units. And YSV requested the motivation behind the proposal, whether the ergonomic benefits are sufficient to justify syntax. WH shared concerns regarding the necessity of new syntax for an operation that's already achievable, and emphasized the importance of language orthogonality. And SYG brought up the issue of inactive indexes and the inconsistency with current bracket index. The current bracket, it doesn’t support the inactive index. So the committee conclude that -- further discussion and the consideration was necessary before the proposal could move to next stage.

JHX: So this status so far in the. Let’s also recap the index-from-end proposal. Here is the link, and the last presented slides. Just during the meeting on January 2021, I introduced a proposal to add a new syntax data allows referencing the last element of reusing character syntax. This syntax is inspired by C#, but aims to be minimalistic. In such syntax, the A character 1 will return the last element of an array. Just the same as array.length minus 1. The motivation behind this proposal, it will solve the block issue SYG raised for slice notation. The syntax solution also offers better ergonomics, especially in mutation cases, and otherwise the active zero edge case. The proposal didn’t advance because several delegates, including SYG, suggest that the proposal should potentially be merged with slice notation proposal to address unified syntax. There are some other discussions, but as I understand, none of them are Stage 1 block Issues.

JHX: Afterward, I communicated with Sathya (code??) and she agreed that adopting the syntax in the slice notation is a good direction to push forward. I have been co-champion of slice notation starting from July 2022. Today I will restate these two proposals. My main goal is to restate the space of these proposals and the potential follow-up proposals explained to the committee. The advantage of the syntax solution addressing these issues, and I hope the committee will agree to move in this direction and allow the index to move on from Stage 1. But, yeah, that’s it.

JHX: By the way, the potential for the proposal mentioned here to use the slice notation syntax to replace part of an array. This is mentioning the FAQ of the slice notation. So, for example, here is the slice notation, the current slice notation supposed to get the -- from the index from 1 to 3 exclusively, and the possible future follow-up proposal would also allow to replace the slice, so it just become, yeah, 100, 20 and 4, yeah. Let’s talk about the problems. A collection of elements accessed by integer index is probably one of the most commonly use structures used by programmers, and the slice is one of the most commonly used array operations. Here is a simple -- I’m not sure.

JHX: Yeah, it’s very simple search, and it shows that the usage of the slice is very common. Yeah, I don’t list all the methods. These methods are here because they represent some kind of operation, so we can see that. And these statistics also indicate that we see the slice here. The `splice` is -- seems to be used more than we thought.

JHX: So these usage, the slice and the splice is very common operations, and so the problems of them also scale. So the first problem actually SGN has already introduced them in the previous presentations. First it’s not clear whether the parameters of slice index or length, in particular, the semantics of the second parameter are inconsistent between slice and a splice. With the former being an index and the latter being a length, these two methods are very similar names and corresponding use. Slice is for obtaining a part of the array and a splice is for removing and inserting, so that’s just replacing a part of a -- that the parameters are inconsistent.

JHX: So considering that both splice and slice are very commonly used in the symmetry code operations, having a more consistent and clear syntax in a semantics will be more clear to developers, especially beginners. Another important issue is negative index. Slice/splice and some other methods support negative slice. We have also recently added the `at` method, whose only motivation is to support a negative index. However, there are some problems -- there are some problems with negative index. First, only method support negative index while the subscript syntax, the square bracket does not support it. This contradiction has become apparent of introducing -- the introduction of the `at` method. Actually, it’s consistent with other methods, but it creates a semantic difference from the basic array syntax square bracket, with negative index being one of the most significant. And although many support negative method, not all methods do. In particular, methods on strings such as slice, `at` and `str` support negative index, but many other methods do not. Especially `lastIndexOf`, `indexOf`, `at` includes these methods on the string do not support negative, but these -- the same name, the methods array supports. Insert, I think very importantly, we have two very important sets of APIs, index of lasting and indexOf, lastIndexOf, written index and use negative one to indicate not found, which conflicts with the range of variables of -- for negative index and can easily lead to bugs. It’s -- you can search the code base. It’s very easy to find it, code like that. This is a piece of code in VSCode, and here we use slice and here index of subcomma amount plus one. Yeah, this code even have a comment, but the -- its writing is definitely not very correct. To be honest, I’m not sure if there is a bug, if there is really a bug. If it’s just -- if it just so happens that it’s written as negative one, maybe not need to be considered. But obviously, you know, if it don’t cause an actual bug, such uncertainty is not a good thing for the person writing the code and the person reviewing the code.

JHX: And there is also the negative zero edge case. Actually, I already present in the last -- the last presentation for the index find, and so here is a very simple example. The people actually expect empty, written “empty”, but actually got the -- all elements. This is because of the edge case of the negative zero. So actually, developers might be acustomized to using the slice and the negative M to express dropping the first and last items and the last M items, but if you consider the M might be zero, so the truly correct way to write it should be like this. It’s a little bit complex, and maybe you should write code like that. But however, in practice, I feel people just ignore these case and the result is leaving the hidden risk and bugs.

JHX: And in addition, methods like `slice`, `splice`, `at`, et cetera, also have a series of strange behaviors caused by coercing. KG have already demonstrate this in a series of discussions, so I won’t repeat it here. What I want to add is that in comparison to the coercing behavior of methods, although the subscript operator, it also has coercing, but it basically doesn’t have unexpected behaviors such as illegal index not turning into zero and the BigInt can work without throwing an error. By the way, these edge behaviors of method are, even incorrect documents on MDN (Mozilla Developer Network). Here it said if index omitted undefined or can be converted to number, if extract to the end of string, but actually it’s wrong because if it converts to number, it actually gives you zero.

JHX: So the problems that I have summarized this time, the clarity and the consistency of the semantics of parameters conflict between the value range of negative index and the written variables of index and find index APIs. The edge case of negative zero and the very strange coercing behavior...these problems -- actually, these problems have been mentioned to some extent in previous presentations, and actually, it’s already in many discussions of various proposals. For example, when I was recently reorganizing slice notation issues, I found out the problem of negative index had already been mentioned, been mentioned by these people. I think he explained it well, and it tell us that Python already have these problems and -- yeah. Okay, of course, I must honestly say that even with these problems, it’s not the end of the world. Developers have always tolerance of such bad design and continue to develop. However, I think if possible, we should try to solve some of these issues.

JHX: So the solution, the solutions, I think these -- as the proposals, the solution is simple, we would just extend the square bracket syntax and follow semantics. So we add an index from N and add a slice notation and we might add future support for modifier arrays with slice notation, and these very simple examples, and I think I do not need to explain them. I think most developers can get them, you know, in one minute. And I also have some interesting experience. I use ChatGPT, it actually recognize them, and it even add some comments, even such syntax not exist in this.

JHX: So the previous list of problems have corresponding solutions. The syntax -- the syntax use square brackets, so clear -- it’s very clear it’s about the index. And in accordance, it’s symmetry on both sides. So you need to see that both index. And the negative index, in the syntax of these proposals, they just follow the original square brackets. So it’s consistent with them. So there’s no problems of negative zero and the negative one. And also the coercing behaviors. In addition of this, we also getting two extra benefits. The first one is we could support the syntax to replace the save to splice API, and in all examples, there is relatively better ergonomics, in some cases. For example, in this case, there is a significant improvement.

JHX: There are two concerns that were raised in previous meetings, which were not block issues for Stage 1 or even Stage 2. The main purpose of my update is to restate the more fundamental motivation issues. So just briefly I’ll talk about my source here without going into detailed discussion. First, the issue of string slicing. This is a somewhat tricky issue. On one hand, most existing methods for strings are based on code units, and on the other hand, allowing cutting from the middle of the surrogate pairs is very bad from an internationalization perspective. In the past, in some proposal, including the draft of slice notation, there was a hope to avoid this problem by not including strings, which was rejected by some members of the committee. I understand the position of these delegates. In fact, I also hope to include string slicing to provide developers with a prop right (?) default behavior. But I must state that given this issue involves some inherent constraints and conflicts, tradeoffs are inevitable. If no tradeoffs are allowed, I can only give up on the proposal.

JHX: Second, as many of you may already know, the caret syntax is borrowed from C#. However, in C#, caret will return a value. While in the current proposal, it’s just a syntax structure similar to three dots, rest of the spread syntax. If it were to be a written value -- if it were to re-evaluate in the current language, and I do not intend to introduce such a change. But we’ll try to keep this possibility open in the design. If some some context, please tell me, but I think it’s very hard, it’s very hard to include that, at least in current status. So maybe I just need to give up the whole proposal. Okay, so that’s it.

RBN: This goes with what JHX was just talking about with the caret syntax in C# being an actual value, and I posted this both on the slice notation syntax and another comment on the index syntax proposals that, for one, I don’t think that it necessarily needs to exist in the core proposal. I think the syntax itself is extremely valuable and useful. I do think that potentially as a follow on, the ability to actually have a reified representation of a slice and index-from-end is extremely useful. This has been shown in languages like Python, where being able to have reified slices is very useful because you can pass slices around, construct them, and have an actual data representation for a slice into something that is profoundly useful in the programs that need it. It’s a good data representation and having syntax and semantics that actually makes that work correctly without having to implement it yourself is very useful. Also, producing a reified value from the index-from-end syntax exists in C#, as you mentioned, and it’s useful to be able to pass around an object that represents a relative index from the end of a list that isn’t tied to Array or String, so that you could use it with custom collections. But it does add complexity to specify something like this that I don’t think should be a blocker. I do have thoughts about how this can work with other values outside of just a Reified slice and “index-from-end” as well.

WH: Yeah, with reification, this might be okay. Without reification, I think this proposal is harmful because it impedes abstractions. This would be yet another way to index into arrays, one which cannot be abstracted over. That is if you have `a[x]`, people will want to pass `^something` as x, and you can only do it directly `a[^something]`. You cannot create a function which does that. To use this for a position inside an array, if you’re writing the code directly in your function, you can do `a[^0]`, but you cannot abstract the `^0` into a variable x and then have somebody pass in `^0` to your function as x. And adding syntax to produce yet another way which cannot be abstracted over, I think is harmful. With reification, it would be okay.

JHX: I think it’s actually -- actually, I think even without reification, it’s just very like the three dots. Yeah, we -- you can’t `...` something to a variable. So it’s -- it’s just the same. And I don’t intend to include, at least in this stage, because as my observation, in most code, if they use negative index, they just use negative in stack way. That means it’s very impossible they write -- pass in something that sometimes is negative, sometimes is not. So at least in practice, I think it’s not a big problem, because people -- it’s very clear that when they -- when they use the index, it’s very clear it’s index or it’s index from end.

WH: I disagree with the argument. Sometimes people don’t use abstractions, but that doesn’t mean that people should not be allowed to define abstractions.

JHX: Okay. I guess we -- do you think it’s a Stage 1 blocker?

WH: Yeah, for me it is.

JHX: Okay.

MF: Okay. Yeah, this is kind of awkward because my queue item was a response to RBN's. But if you remember what RBN was talking about, about reified ranges, I just want to point people to the iterator range proposal where we have discussed reified ranges. I think if we are considering something like that in the future, those proposals need to align on whether or not we actually want something like that.

MM: I don’t understand how reification plus abstraction could possibly work in JavaScript given the non-reified syntax, the reification with abstraction syntax would almost necessarily simply be X bar, open square bracket, X bar close square bracket, which has a meaning across the language, which is not just for arrays, which is either X is a symbol or anything else gets stringified, and then looked up. The -- if you reify the range into an object and you don’t treat object in the square brackets and -- you’ve changed something very pervasive in the language. I think reification plus abstraction, were it to happen at all, would have to start with the different syntax so so that the abstracted syntax would not collide with something that already has a meaning in the language. And that is a response to WH.

WH: MM, that’s an excellent point, which is why we should not be adding syntax without reification because if it turns out that the problem you raised, MM, is insurmountable, then we would design ourselves into a corner.

MM: I agree with that.

MF: Yeah, just speaking about the slicing portion of this kind of combined proposal here. I definitely do support having the slicing syntax. There are other languages at a similar level of expressibility that have this kind of syntax, and I think developers that are moving between those languages and JavaScript would be looking specifically for that and be surprised to find that there is no slicing done via syntax, but it’s an API. Is it like a deal breaker? No. But I do think that there’s probably a large number of developers who expect to find that and would go looking specifically for that and not find it, have a hard time finding what they actually want. So for that reason, I think that slicing syntax is worth exploring for sure, as we have already agreed with it being Stage 1.

JHX: Thank you for support.

DLM: I apologize if I missed this earlier, but I’m just wondering what happens if slice notation is used on a non-array?

JHX: As the current draft, it only defines slice notation on array, on a TypedArray. But, yeah, I think it -- it might be okay to apply to all array-like, but I still need some investigation whether it will cause any unexpected results. Of course, the strings need to be considered separate, because the -- as I mentioned, the current code unit base behavior is maybe not the people want, yeah.

DLM: Thank you. On a related question, I’m not sure if this has been said yet, but I’m just wondering for how this would be specified? Is this going to be syntactic sugar around the existing slice method or is this going to be a new set of operations?

JHX: The current -- the current draft has a symbol, so it can delegate to the method, but as my -- today’s update, I’m not -- I’m not -- I still need to investigate. But I tend to drop the symbol, because now if we -- the semantics should be consistent with the original square bracket, then directed (?) to the current slice method is not good. So, yeah, if it’s not have -- if -- so I think the simple solution is make it just like syntax sugar, yeah.

DLM: Okay, thank you.

KG: In working through this in chat, and I think that I am still in support of exploring this area, but I think there are some other possibilities that we haven’t gotten to. For example, I could see support for a more general, the caret syntax is just a symbol protocol that allows the container to do whatever it wants with the argument, and I think that might be something useful there. I am also not super inclined to change the normal bracket access. I think that if we sort of expand the scope to more general property access or more general container access or something using some new syntax, I think we might come up with something that’s really quite broadly useful, without affecting the normal property accesses at all.

JHX: Yes. I think this is -- it’s a hard problem. I’m not sure -- yeah. Okay.

RBN: In the issue on the Slice Notation proposal where I originally discussed the potential for reification, I’d also discussed the potential for making this customizable so that you could have classes that could understand these objects that aren’t just Array or String. That part of that suggestion was implemented into the proposal, so there is a
`Symbol.slice` method that you can put on any object and the slice syntax would redirect to that. The reification side of the discussion took things one step further by saying that, if you had a reified Slice object that could be passed around as a variable and then used as an element of an array, then the reified Slice would essentially be an indirection to call whatever argument it gets when calling the `Symbol.slice` method on that, so that it can pass that argument through, so it would kind of be a duality of Symbol-based protocols: one that says “here’s how I get sliced”, and another one that says “I am a slice, here is how I apply to an Object”.

JHX: Okay, yeah, I -- personally, I’m not a fan to let it be a dedicated to some symbol, but, yeah it seems as the -- so if people really like that, could I ask to -- you all to -- others who interested in this area, can co-champion this proposal.

MF: Yeah, so I’m not volunteering at the moment to co-champion the proposal, but, you know, possibly something I would consider down the line. My reply here was to KG. I like the idea KG suggested of trying to -- or at least as I understand it, maybe I'm putting words in his mouth -- trying to change what we have as this like slice from end feature you're proposing to be more general, something that can just derive an index in any configurable way via a protocol. So I think that would be a much more valuable use of that syntax space because it's more general. So I definitely support exploring that.

MF: And, since there's nobody following me on the queue, I want to kind of continue this into a follow on topic of, now that I appreciate you've explored the relationship between these two proposals as you were asked to do, and having done that, I feel pretty good that Slice could move forward without being impeded by this additional work we've asked now for the other, the Slice from end proposal or what comes of that. So I would like, if anybody thinks otherwise, I would like them to speak up and hopefully we've, I want to hear from you, Hax, if we've answered enough questions about that proposal to unblock it and allow you to continue moving forward. I know you had some questions about whether it should apply to strings. Personally, if I was to answer that for you, I would say it should apply to strings just the way that slice already works today with code units. Have all of your questions being answered, or is there anything that we've not covered that you need to make progress to stage 2?

JHX: Yeah, thank you. I think I need some help because if we -- if we -- so my original intention is just to have a minimal proposal. But, okay, I will try, yeah.

CDA: So we are almost out of time, less than a minute left on scheduled time. KG, did you want to reply?

JHX: I think I have one hour, because these two topics are -- I just merged them into one.

CDA: Yeah, yeah, I mean, that’s totally fine as well. We can continue to consider your two as one. So, yeah, KG?

KG: I reply to MF. I think that the slice proposal could well be a subset of a more general indexing proposal. So I don’t think it can really move independently.

WH: SYG couldn’t make it today, but channeling SYG, he is also disinterested in the caret syntax proposal.

RBN: I’m sorry, I apologize for not going on the queue, but is this based on a conversation with Shu or you’re just anticipating his --

WH: Based on a conversation with SYG from last week.

RBN: Thank you.

JHD: Yeah, just trying to understand, like, to summarize what I’ve been hearing, so it sounds like there’s some interest for a more general access mechanism and symbol protocol that could subsume some of these problems and apply to a lot more data types. But it also kind of sounds like the existing proposals being discussed are dead in the water without the major changes I just referred to. Am I missing something, or is that an accurate inference from this discussion?

JHD: Oh, yeah, sorry, and I see Waldemar on the queue asking me to clarify. So I’m combining --

WH: No, I want to clarify.

JHD: Please, go ahead.

WH: I suspect that however many people there are in this conversation are all talking about slightly different things in subtle but important ways. I can state my position. I suspect there are many different positions here.

WH: I have no particular issue with the slice notation as it is. The caret notation will cause problems unless we reify it, and Mark raised a point that if we do it without reification first, we are likely to block our ability to reify it. So I don’t want to introduce syntax into the language where you can use `^0` syntax directly on array or slice access, but you cannot pass `^0` to a function.

WH: At the moment, I’m taking no position on whether the slice notation should be reified or not. But I am taking a position on the caret notation.

EAO: Agree completely with WH.

JHX: All right, I’m not sure what I should do. It seems, as I understand WH will not support the index from end syntax without reification, but it -- I’m not sure whether I can solve this issue, so maybe I will not ask for Stage 1, and I have to be clear that my intention to make a minimal proposal, and I don’t think I have the ability to solve -- I think it’s a very complex problem. You know, I like it to be happen, but I don’t think I’m the right one to solve that issue. So it seems that I -- so I -- so I can’t advance both proposals, and maybe I -- if someone still interested in this direction, please tell me and let me -- let us check if there are any other possible ways. Though I’m not sure, yeah, thank you.

### Speaker's Summary of Key Points

- List
- of
- things

### Conclusion

- List
- of
- things

## Stop Coercing Things (pt 3)

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1AFzFeVtbUCpPcMXTER0Zzb5l5c5oPdXCF4Yi_9B1EEM/edit)

KG: Let’s go. Okay. So stop coercing things. I’ve been bringing this for a while. It’s the third time I’m presenting it, so a recap. I am suggesting that we should change our philosophy about how we design APIs in the future to align with principle on the screen here: if you pass something of the wrong type, that’s probably a bug, and bugs should be loud. The example that I am keeping in mind throughout all of this is this snippet of code on here, which does indeed access the first item of the array. And I wish it didn’t. Of course, there’s very strong precedent for working this way, but precedent doesn’t have to bind us in cases where it’s sufficiently bad and I think a lot of the coercing that we’re currently doing is sufficiently bad that it’s worth breaking with precedent.

KG: And I want to emphasize, I’m not proposing any hard and fast rules, just defaults. So we have talked about this before. And I already got consensus for a few principles, one is we shouldn’t have a coerced NaN to zero in APIs unless there’s some particular reason it makes sense to do so. An API that expects a particular -- like a number, an actual number, if it gets NaN, it should treat that as a range error or a type error, not as zero. Zero is in fact not a reasonable thing to have -- sorry, it is not reasonable to interpret NaN as meaning zero in general. Also, we got consensus that when there’s an argument that doesn’t have a default value, and the argument is required, we shouldn’t coerce undefined to match the type of that argument, for example, if you have a did the that takes a string and the user fails to pass an argument at all, that should not behave equivalently to passing the string undefined, like that's silly. And the last one we have consensus if you for is to stop ruining non-integral numbers in general, APIs that expect integral numbers should in general throw if they are give a non-integral number. Now, for that last one, there are some APIs, especially in Intl, for example, where there is only behavior that is particularly strongly defined for integral numbers, but if you pass an integral number, there is some reasonable behavior, which is usually rounding, again, not required to be a hard and fast rule, just a general default. For example, if you’re indexing a string, it doesn’t make sense to index by a non-integral number, so if we added a new, you know, string indexing, I would hope that if the user passes a non-integral number, that would throw instead of as currently rounding or truncating to zero or whatever we do. And the request we have ones we have consensus on so far.

KG: I’m going to talk about it some more. In particular, I’m going to ask that we stop coercing objects to primitives except coercing to Boolean, which is probably fine, and then if we have time, I might get to stop coercing between some primitive types, but I’ll leave that for later. So this is the one that I most want to talk about. I’d like us to stop coercing objects from primitives. If you do have a new API that takes a string or literally any primitive that’s not a Boolean, I would like us to throw a type error immediately. Not invoke `valueOf`, not invoke
`toString`, not invoke `primitive`, not in fact invoke any user code whatsoever. Just throw if the user passes an object or a function. If they want typed coercion, they can do it before passing the argument. This would remove one of the major sources of side effects in the language in places that you wouldn’t necessarily expect side effects. And in fact, in places where implementations often dealt and often notice that side effects are possible, which is a fairly large class of engine bugs. It is very easy to write an implementation which assumes that user code is not going to run between two points, which I’m noticing that in fact it. Is there are, like, at least a half dozen examples, real world examples of cases where there’s been a security issue on one of the major engines because of stuff like this.

KG: I do -- don’t I think there’s as much of a problem with coercing to Boolean. Coercing to a Boolean never invokes to user code and it’s a fairly common pattern. People are used to writing if, you know, object or whatever and this sort of coercion is -- is sometimes more natural. So I’m not proposing to reduce use of (?) to Boolean. So if as a parameter that accepts Boolean and the user passes an object, well, it’s probably fine to treat that as being true in the same way that if would treat that as being truthy. I do want to note explicitly that there are some ways in which this would be giving up flexibility. These examples are from Shane, so thank you to SFC. The example on screen, we have the new typed pattern or one way to write the new type pattern in JavaScript where you have a class that constraints or otherwise validates some primitive, but the instances of that class still act like the primitive when passed to APIs which do coercion. You know, if the whole number class defines the value of method which returns the primitive that it was constructed with, then you can use -- instances of this whole number class anywhere that accepts a number. And if the, you know, Intl number format did not coerce, the maximum fraction digits argument would not work in the place.

KG: So that you get values that are more useful than a primitive but be used in place of a primitive because it is coercing to the relevant primitive. Again, this would be giving up the flexibility to write rounding mode or whole number and expect them to work with language APIs in the future. The users would need to do coersion themselves. That’s worth it. I want to make it clear what we would giving up by making the choice. I have examples on the screen of cases I consider them particularly silly. The – ending up with object, object in the output of one’s methods is almost a meme at this point because so many people run into it. You join an array, this gives you bracket space bracket B. You didn’t want that. That wasn’t what you wanted and it would have been better for you to get an error. Similarly, in cases where there’s some reasonable behavior you want with math.max, I would want a date and that’s not how it works, if you do that, the date is coerced to a number. Then you get a number out of it and not your date. If you pad a string with function, you get a string if I – of the function. That’s not what you wanted.

KG: So I would like new APIs, of course, I am not proposing to change the existing one, but new APIs, in general, to not do this sort of thing, to throw, if they have an argument, expect a primitive I would like to discuss this topic moving on. Specifically, consensus for not coercing functions to non-Boolean primitives.

WH: My question on the queue is about something further down in the proposal which contradicts something further up. But I also have a clarifying question: go back a slide. I don’t understand the polarity of this example. Would that be or not be allowed?

KG: I am saying that if the second line gives you an `instanceof` the rounding mode class, then the third line would throw. Because these – would be getting an object rather than a string.

WH: Okay. From the example, it’s not clear, the rounding mode –

KG: Sorry. I had to align some of it to fit on the screen. I apologize. The idea is in the second case, it’s in an instance of the rounding mode class.

WH: Okay. Thank you.

SFC: Yeah. The example on the screen, rounding mode class implements to primitive symbol dot to primitive when coercing to a string, it returns the string expected in that position. And rounding mode that seal is basically a – a static – example of enum, static, that an instance of the class rounding mode that has the symbol did it to primitive. The full code is in the request that KG linked.

MM: I was very much struck by one of the things that you said with regard to stop coercing objects to primitives, which is exactly the potential side effect in places you would not expect side effects. So this more generally is the issue of surprising hazards. And if I understand the set of rules that you’re proposing, together, they would eliminate surprising re-entracney hazards when the argument is a proxy. When the object argument is a proxy or exotic, the hard cases to test whether you avoided re-entrancy hazards. If it does – it is consistent with what you’re trying to achieve here, which I think it is, I would suggest making it explicit as part of the proposal since all of the proposal is advisory and allows exceptions to any one rule in particular cases where it’s – where it’s needed to make an exception. So I would make this explicit as an additional rule that, you know, certainly could still have an exception. But it would be an additional rule to consult, even if you made an exception to one of the rules that apply – that currently imply it.

KG: Sorry what additional rule?

MM: The additional rule of avoid surprising reentrancy, avoiding coercions that turn control over to code determined by the argument object, even in those cases where the argument object is a proxy or exotic. I believe that’s consistent with your other recommendations, but I would like to see it explicitly.

KG: Yes and no. So in the case that you are receiving an object, which is pretty common, and perhaps getting more so as we have more cases where we think that the appropriate design is an options bag . . . It is not feasible to avoid re-entrantcy, if the – you know, if you have –

MM: If you are destructuring an options bag, it’s not surprising re-entrancy. You are with the contents of the object.

KG: Okay. Sure. I guess if that’s not intended to be covered by your rule, I don’t understand how this is different from the rule. I am happy to say something like this is consistent with a general principle of avoiding unnecessary re-entrantcy.

MM: That completely deals with my concerns. Simply making that explicit as part of the rationale of the – the set of advice to be taken into account with this as an advisory proposal.

KG: yeah. Okay.

EAO: Yeah. Could you clarify if I understood right, effectively, what you are asking for is for us to deprecate `Symbol.toPrimitive`

KG: It will continue to be used in all of the places it is currently used. Yes, I am proposing in new places, we would not be evoking it or valueOf toString.

JHD: I am popping on the queue to reply to that. It would still be important to invoke it in explicit user invoked coercion. Built in methods wouldn’t be the one invoking it.

KG: Yes. Of course, this applies to things that are just dealing with values in general, rather than things which are explicitly intended for coercion.

EAO: Okay. So would it be possible to consider something like, when we have something like the whole number example you showed, we have a class that is kind of intended in certain ways to be able to be used as a primitive, and it provides its own symbol.toprimitive based method. Would it be possible to enter that in cases where the object that we are dealing with actually has a custom symbol.to primitive method, then we do – okay with that. But that we would not end up calling the sort of the object’s symbol.to primitive in the new interfaces.

KG: No. That’s like explicitly what I wanted to stop doing. I really want us to not invoke user-defined symbol.toprimitive. That’s the whole point of this.

KG: Like this thing on the screen, I want to us to stop having . . . Like, it is potentially some of us likely to be a bug, if you are passing something that has a symbol to primitive method, as a user, but I think it’s still frequently going to be a bug and of course it’s trivial to do the coerce yourself and not rely on the method to invoke the user code for you. We don’t have the method invoke the user code, if it doesn’t need to.

EAO: I am not sure how I feel about this, but I don’t really have a strong opinion here either.

SFC: Yeah. I mean, if – so okay. First, thanks, Kevin, for putting the additional examples in the slides. I understand more about the hazards when it comes to, you know, reentering into code and that’s definitely something important that we should be thinking about when designing a robust language that is easy to build robust engines for. I was wondering about this idea of, you know, in general, the principle of having interfaces, where the – basically, the definition of how we interpret a particular option or argument is to call a function on that interface. I am going to pull up the third queue item about messageformat. During the `MessageFormat` incubator call last month, we were discussing, you know, well – it provides better ergonomics to the user if for example we used valueOf or some other interface function when passing arguments into place holders in a `MessageFormat` string. And it’s the same concept here, where we were calling symbol.toprimitive. So I was wondering if we sort of – if we establish that pattern, it’s sort avoids a lot of the – you know, if – I guess it’s – I guess it’s still technically re-entrantcy, but if the re-entrantcy is the explicit behavior expected that time, we could avoid this and make it narrowly – the coercion operation is, is this thing the correct type? Fine. If not, that’s it. Not any of the other special case that we currently have with coercion. Like, you know, number – this is object. Objects, so we don’t really do I guess the number toString and all the things in the specifics. If we made it this and none of the other things, would that help address some of the concerns we have about re-entrantcy hazards when writing engines

KG: No, not at all. The concern is addressed, if and only if there is no possibility of invoking any user-defined code. It maybe helps with program correctness for the user, but it doesn’t do anything for the reentrancy, unless there’s no possibility of invoking user code. I didn’t fully understand what you were saying about message format? Can you elaborate on that?

SFC: Maybe EAO or JHD can help me

EAO: The specific case we were considering and are considering for message format is to have cases, for example, a number with a currency is sort of this – a compound object-type thing. Other cases where the value that we would be expecting for a – for example, a number formatter within messageformat would, in most cases, be a primitive number, but there are cases where the exact same message with the same internal number formatter could or would externally be called sometimes with a primitive number and sometimes with an object that contains this number and some basket of formatting options. So effectively, this is why the proposal has and we discussed last month, using the valueOf method to get the value and having a separate options value on that object for the options basket that might be there as well. So effectively, we would need to be able to call the valueOf method in that case, to be able to support this compound value at the same point we are supporting primitive numbers or other primitive values.

KG: Okay. I think that not having seen that API, but from the description, that sounds like a place where it might be reasonable to have an exception to this rule because there are some kinds of objects specific kinds of objects you are expecting to receive there. So that seems like a fine place to have an exception.

EAO: Yes. That was in fact my understanding from earlier as well, that in this case, for the specific needs that we have for this interface, no matter the default, we have a decent story for why we need to do the specific thing we need to do.

SFC: Okay. My next queue item is sort of a general – a general sort of possible middle ground position we could have, which is, what – after, you know, looking more closely at the different types of use cases, we have these two that are in the slides, the whole number example, a new type wrapper and the enum. I do feel that the enum example is a more compelling example because JavaScript does not have enums. The only way to do a type enum in JavaScript is to have a class with a bunch of fields that says, you know, how sort of – you know, enums are modeled in other languages that don’t have them and JavaScript coerces them to strings. Like all APIs in the JavaScripts, you know, standard library, you know, that take enum, take strings. There’s many others and Intl. There’s a couple in the standard libraries, but a lot in Intl of this type. And it seems very useful, you know, because these are things are not actually strings, they’re enums. There’s no types, therefore it’s a string. It’s seems nice from the userland to specify an enum class. So between these two use cases, I propose, I do feel that this particular one here, you know, does seem somewhat compelling with a pity to lose the ability for library authors to design type-safe enums to coerce to strings when passed into a string enum APIs. So I wanted to hear what other members of the committee thought about this type of use case? And whether it’s something we want to either support or to explicitly reject in the future, or if there is a type of case where we can sort of look at it on a case-by-case basis and not be bound by the hard-and-fast rule.

KG: Can you say more about why you can’t just have `RoundMode.ceil` just be a strong?

JHD: I have a reply on the queue that elaborates that as well. So Shane, I run into this a lot - when you say “type safe” (I am sure I am saying this wrong, so please, room full of pedants, jump on it) TypeScript is a typing system and my personal philosophy prefers nominal typing. The way I usually do this is, I would type the primitive with an `as unique`, something. I forget the syntax. There’s a way to type it so that it’s a primitive, but other primitives that are the same value won’t be recognized. It has to be that specific value and so then in this case, the `RoundingMode.ceil` would be one of these tagged strings. If you pass that same string, the type system wouldn’t allow it. And in that way, you don’t have to construct an extra object for no reason and you still get the type safety. I don’t know if that – to me that feels like a better approach than trying to support some sort of object-oriented, “let’s create a class instance” approach. It’s definitely not the most ergonomic thing to do in TypeScript, but it works well in my experience.

DRR: Yeah. I think that that is a valid approach. We see some sort of mixed reception to that. So but because they are viewed as a standard feature within JavaScript, people take the view they should avoid them. And as a result, they end up trying to resort to these sort of hacks, where you have a primitive type, but it is tagged in a special way, to get those semantics, there are pretty difficult for a lot of people. It’s cumbersome. We have tried to find a design space within typed – for the best solutions still end up enum for a lot of people. So they have been brought up and they go into this Catch-22 of, it’s better to focus on people don’t want to use them in the static type checkers because they are not part of the standard. So there’s a little bit of this – truly an ergonomics mismatch there. It’s nice to fix that, in just typed script. I don’t have a solution there yet.

KG: I want to hear from Shane about where this example on the screen RoundingMode.ceil can’t be a string

SFC: The enum could be branded. You would have additional functions, and other things on it. And if there’s other APIs, rounding mode, you want a method, convert that turns – You know, I feel like it’s a pretty – it’s a fairly common sense that branded objects are generally like, you know, more advantageous ergonomic to use than nonergonomic flat strings for things. But if that’s not the sentiment and if we are okay saying, we are not going to support type-safe enums, via this model, to primitive in JavaScript and rely on some higher-level abstraction like typed script, either of the approaches mentioned, JHD and DRR said, you know, you can’t have it in JavaScript. You have to go one level above. If we are okay with that, making that type of statement, then that’s the way it is. So that’s fine. You know, I would sort of just . . . I do think that this is the type of thing where like in a particularly strong compelling case, maybe we want to consider exceptions to this rule for this particular case, but otherwise I think – that was mainly the key item was to discuss this case.

KG: Yeah. I think if RoundingMode were something in the language, and number format were explicitly aware of that thing, that would be totally reasonable, although the way that I would expect number format to interact with the RoundingMode class, or rather to instances of the RoundingMode class, would be to directly read an internal slot out of it rather than by coercing. So even in that case, I would not expect coercion.

CM: I was wondering about whether this larger discussion has prospects for converging at some point. I think Kevin framed this explicitly at the beginning as a proposal to shift our default mode, as to what happens when we have not otherwise thought about it explicitly. It accepts the idea that there will be exceptions on a case-by-case basis, as makes sense based on the circumstances at hand. And I’ve been hearing a lot of discussion of “what about possible exception X or possible exception Y”? And all of the exceptions are definitely topics for discussion on their own merits, but I don’t see how they connect up to the fundamental essence of this proposal, as I understand KG was trying to make it.

KG: Yeah. The way I put it is, if we agree to the fundamental essence of my proposal, and – like in general, stop doing coercion and making exceptions for things like Intl format number, that means we give up the ability to have a fully generic rounding mode class, where the instances could be used anywhere the corresponding string could be used. So if we're okay with giving that up, and perhaps some new APIs could be aware of rounding mode styles, we go with that.

EAO: I was starting to wonder here: do we need something to call the default behavior or this or determine that whether or not coercion to primitives happens is something that needs to be explicitly explained from new where when it comes up

KG: We could do that, but I would prefer to have a default and only make exceptions where the champion thinks there’s a reason where it’s unusual.

CDA: Nothing on the queue.

KG: Okay. So I would like to ask for consensus for this thing on the slides: A general guideline that default for new API that are not close cousins of existing APIs, taking a non-Boolean primitives, throw a TypeError when passed on an object or function. MM says, “+ 1,000 end-of-message.” Thanks.

CDA: Do we have any more voices of explicit support for stop coercing objects to primitives? We have support from SFC, I think.

SFC: Yeah. My position here, you know, I like what we did with the integer rounding thing, we had the specific case and Intl listed out as a possible explicit exception. You know, if we have – an exception like that in the case of the enums or new typed classes, within cases where it makes sense, that’s nice. But, you know, giving that it’s only a default and a proposal champion can make a case to deviate from the default and also because there are well-documented examples of how the re-entrantcy causes security issues, real world security issues in major engines, there’s motivation to say this is a reasonable default for – in the general case.

JHD: Yeah. I typed in there, I support it. But we should add wherever we document it, add a line saying something such as, case by case exceptions may be permitted or something. So it’s clear, it’s not like an absolute law. It’s just default. But otherwise, it sounds great.

KG: Definitely I am saying this is only a guideline. I am happy to try to work something like that in, if you want to help me wordsmith it on the thing, on the pull request. I am not aware where we have something like rounding mode in the language. So it’s a little hard to document. If there is one, I am happy to use that as an example. We can work on that in the pull request.

CDA: Okay. You have support from PFC as well and from CM.

CDA: Quick question: where is this being documented?

KG: in ‘how we work’. This is something new. I would be adding a normative-conventions.md. Okay. I will take that as consensus on this specific topic of stop coercing objects to nonBoolean primitives as a guideline. The remainder half-hour is mine?

CDA: You have the rest of the day.

KG: Excellent. That means we can get into the many, many kinds of coercing among primitive types. So originally, I had something between not coercing in general, and I am convinced we need to be granular than that. We got consensus to not coerce `undefined` to things like string. We didn’t talk about coercing to Boolean and perhaps we will revisit this to Boolean when we talk about `null`.

KG: I have some – the following specific cases that I want to us to consider and I have slides for all of them. They can be considered independently, but I am going to talk about them all at once before I go back to the queue. Because I think it might make sense to consider their collective effect they’re an individual effect.

KG: So the first thing is don’t coerce `null` to anything. If you get null, and you pass it where there’s a string expected, I don’t think you should get the string “null”. A number is expected. You shouldn’t get zero. Although you wouldn’t anymore. I would hope that we can agree if you have pass `null`, where a number is expected, you shouldn’t get any particular number value. That should be an error. The third is more controversial. It is a place where there is a Boolean argument, and doesn’t make sense to allow coercing null to the Boolean false. Maybe it does. On the other hand if we allow `undefined` to also coerce to boolean false, those being similar in general. Right. I guess that’s what I just said.

KG: Another case, converting Boolean to number. This is straightforward. True is not one. Those are different things. And if there is an API that expects a number and you pass true, that shouldn’t be treated as one. It just shouldn’t. Similarly, the value false and the string “false” are fundamentally different. If you have an API that takes a string and you get to Boolean false, you have messed up. The program shouldn’t continue and throw an exception. Is that really all of my cases? Yes. Converting between strings and numbers and strings and BigInts is okay. There are cases where that might be okay. I am not proposing to do anything about them now, but others may feel differently

KG: I have at the end a summary which again – so undefined is a special case because a lot of places that has default values for things, and so when you get undefined that actually means give me the default value, and particularly for Boolean arguments, the default is almost always false. So it makes sense for undefined. I am only talking about required arguments when talking about undefined.

KG: Okay. So summary. If we kept the proposals for number-taking inputs, accept a number or a string. With some caveats on number. In particular, if you are an integer-taking API, you should reject nonintegral numbers and strings which coerce to nonincidental numbers and if you are an API which takes a non-NaN value, for which NaN is not a sensible argument, it should throw if it gets NaN or string to NaN. And then reject every other type. BigInt, objects, functions, undefined, null and Boolean.

KG: String taking inputs accept strings and BigInt which is stratified and others rejected. Boolean taking inputs, the it depends how you want to handle null and [n] defined. This slide is silly. But every other value is accepted. And I expect we will talk about undefined and null in the queue. BigInt taking inputs would take BigInt strings. They reject numbers, symbols, start rejecting objects and functions. Boolean, all these things.

KG: Symbol taking inputs would accept symbol. The only difference, they can take objects and functions. Object taking inputtings take objects and functions reject primitives. If you have an options bag and pass a string that’s a TypeError. That’s what we are doing already. But just for completeness, listing out that case as well. Again, these are only guidelines. When there is a case you think another behavior makes sense, make a case for it.

KG: All right. Let’s get to the queue.

SFC: Yeah. So in this specific case of string to number, I will point out that there is a longstanding bug that like people thought it was a bug, that they passed strings to the Intl number API and the strings round to the nearest float instead of respecting all digits. This converts to a mathematical value instead. I don’t necessarily – I don’t necessarily know if string to number, like, if there are cases of string to number, something like Intl mathematical value should be something to be considered as an option there for accepting a string and I think that’s a compelling case. If an API accepting a number acceptance a string number, then it should use Intl mathematical value for that purpose.

SFC: For BigInt, it seems fine because they don’t lose precision accidentally.

KG: Yeah. That’s a particularly interesting case. I think I might regard that as a reason for number-taking inputs to reject strings. Since NumberFormat at least was giving the wrong behavior by coercing. But I do think accepting strings in general is the right case for number-taking inputs. I think that is the right case – yeah. I think that in cases where you want full precision for a number, it might make sense.

WH: I am really surprised that you want Number- and BigInt-taking inputs to accept strings by default. I can imagine there are special cases where you would want to do that, but I am really surprised that you want all or nearly all Number-taking inputs to accept and coerce strings as well.

KG: Yeah.

WH: Why is that?

KG: That’s a good question. I went back and forth on that. My main concern is that I think it’s something that people are pretty used to and most of the case that is we have talked about, it’s usually a bug. You have done something wrong if you are passing a Boolean to a number-taking input. It’s obvious not a bug if you are passing a string to a number taking input. So that was the distinction in my head.

WH: How is the string interpreted?

KG: ToNumber. And I should say, I guess another relevant point is here, it does ToNumber and if the string is a random string as oppose to a string of digits, it will be NaN and we have consensus for rejecting things that coerce to NaN for APIs for which NaN is not a sensible argument. So for most cases, it actually – the strings that you end up accepting are only specifically digit strings, which I like. Almost certainly not a bug.

WH: Well, all kinds of things will be accepted, like `0x52`.

KG: Yeah. Yes, that’s true.

WH: Yes. And I have concerns about this. But my biggest concerns are about treatment of Booleans, both to and from Booleans. If I have an API which takes a Boolean, it should accept anything and just call `ToBoolean` on it. No special cases for null and undefined.

KG: That sounds reasonable to me.

WH: Also, in the reverse direction, for things which accept strings, we should accept Booleans get the strings “true” and “false”.

KG: Why?

WH: Because you accept numbers there and convert them to strings.

KG: So I think the . . . Okay. Sorry, you're talking about specifically string-taking inputs?

WH: Specifically string-taking inputs. If these accepted only strings, I’d be fine with that. But if these accept strings, numbers, BigInts, they should accept Booleans too.

KG: That does make sense. I guess –

WH: You could present a couple of alternatives, depending on the type of API, either accept only strings or strings plus things which can be converted to strings.

KG: Yeah. Okay. I guess . . . So accepting – changing the slide so everything is on the left and nothing on the right. I am quite happy with. Moving Boolean from right to the left column, I am fine with. I think it’s a fair point that there’s nothing special about number and BigInt versus Boolean here. So I would be fine with making that change as well. I guess I would like to hear if anyone else has opinions.

MM: I do but I am already on the queue.

KG: Okay. Michael has a reply.

MF: Yeah. And maybe KG you should live-update the slides as we go so we can do a review at the end and everybody can be on the same page. So as a reply to WH’s first point, about numeric APIs accepting strings, I think the DOM is probably a huge use case here, in that numeric strings are pervasive and people expect those to work with numbers. There’s a big clash to try to reject strings there. On the points of – the other two points, I agree. So we should – and KG, you might want to phrase – because of the point about NaNs, it’s numeric strings or digits strings. That’s all that is accepted. The other two points, I agree with WH there.

CDA: EAO has a reply, Boolean toString should be okay.

MM: I disagree with a lot of what has been said and with the results changes. I don’t think it’s justified for advice going forward to include these coercions toString or coercions ToNumber. I think that there might be exceptional cases, and I want to introduce principle for the exceptional cases . . . Which is, we already have the existing bad behavior for coercing things to a target type that’s elsewhere in the language when we do coerce. So I would recommend not just that the default is – that string only accepts strings and numbers only accept numbers. But in addition, I think we should be explicit as a, you know, as a recommendation, again it’s just a recommendation, that if you make an exception and coercion other things toString, you should use the existing toString that also coerces objects toString. Because otherwise, we have got too many cases in the language. Finally, I wanted to ask a question about to Boolean. I like this outcome, this is what I was going to suggest . . . Because the notion of truthy and falsey is kind of pervasive to JavaScript and the programs in JavaScript learns what values are truthy and falsey. The question; as far as I am aware, the existing to Boolean behavior presents no possibility of reentrancy because objects and functions are necessarily truthy. Sorry. KG that was correct, you said?

KG: Yes.

WH: Is it correct for a DOM falsey thing?

KG: Yes. `document.all` is special-cased, but doesn’t invoke user code, only a special path.

MM: The more general thing is, for exotic objects in general, at the limit of what the behavior of an exotic object can be, given the object in variance, I think to Boolean is also doesn’t the possibility of a reentrancy hazard.

KG: That’s correct. There is no interaction with the MOP (meta-object-protocol). The only special case is `document.all` and that’s a slot check.

MM: my recommendation is nothing else coerced by default. Furthermore, for exceptions that do coerce, the default should be use to existing coerce log issuing, not to introduce yet for cases for the programmer to think about.

KG: I will have to think about that.

KG: Well, I guess, okay. Exceptions that do coerce yes, you probably do want to use the existing coercion. That doesn’t say whether, you know, if – what we should do about string taking inputs which receive a number. Because perhaps we will have two rules, either you coerce or do the – where it makes sense or don’t coerce, accept this is what coerce means. You have a specific types that you accept

MM: What I am suggesting is – let me be explicit. It’s not what you just said.

KG: No. I know it’s not what you just said.

MM: okay.

KG: To be clear, what I am saying is that if we do what I am presenting on the screen, there would still only be two kinds of behavior to learn: the legacy toString which coerces everything aggressively, and this. There would not be a third thing where it's string especially. So in either way, there would only be two kinds of things to learn.

MM: Okay. I understand.

WH: Yeah. I’m partial to MM’s position. So okay. What you have in the slide deck currently is okay. But another alternative, which I’d also be okay with, would be for the table currently on screen to accept only strings, unless it’s an API that prefers legacy behavior in which case, `ToString` of anything. And BigInts should accept only BigInts and not strings unless they fall into the legacy category. And I imagine a lot of DOM would fall into the legacy category.

KG: So part of the problem with a DOM, sometimes it vends strings that are numbers. Numeric strings. And if you want to pass those into other things, the other things need to be able to deal with them. But these can always coerce. That is viable.

CDA: Just a quick note. We are just under 10 minutes left. RBN?

RBN: Yeah. I wanted to say that while I kind of agree in principle with what MM is presenting, I do have a concern with falling back to toString as the – if not only accepting string behavior. One of the values of this, these slides where we stop coercing things, is that it gives us more room to expand an API in ways that are web compatible. Such as if we want to add a new argument or replace an argument to an existing API with something that might – instead taking an options bag, and if we design the – if we say that the general principle, you only accept strings and nothing else, or you fall back to legacy behavior, then when only string number BigInt and Boolean makes sense, then by saying we just fall back to legacy behavior, that brings in object which then prevents us from having the benefit of potentially overload an API to add new functionality, by adding an extra arm. So I am – I mildly disagree with falling back to toString specifically there because if we have this implicit coercion, we couldn’t overload whatever that API might be in the future.

MM: I’m sorry. You can skip me. I just understood the full implications of what Ron was saying.

SFC: If we moved Boolean from the reject column to the accept column, I don’t immediately see why we are doing the same with null. I know that it’s a fairly – it’s fairly common in JavaScript for things to be undefined when you didn’t know they were going to be undefined and get undefined printed and things like getters and logs and things like that and that’s how JavaScript has worked for a very long time. And if we are doing this with Boolean, like I think – I don’t see why undefined and null are in a separate case here. I agree with the general sentiment that like if things are going to be accepting strings and we are taking this approach of being more strict with coercion, then we should just take strings or we should take everything. I don’t know why we are putting number BigInt and Boolean in a different class than undefined and null. Those are primitives like the other things are primitives. Now, one exception here is that if you have an API that takes number-like strings, then maybe it makes sense to put number and BigInt in the left column. Then I don’t know why Boolean would be there.

KG: Yeah. So undefined – well, and null . . . I think are much more likely to be a bug is the main reason. If you are passing the number 42 to a message formatting API, it’s because you meant the string 42 to a probably. Whereas if you were passing undefined, it’s probably because you like were missing a property and didn’t realize it. So the practical reason to distinguish undefined is that it’s much more likely to be a bug. That said, I am okay with the outcome of moving everything to the right-hand column here. At least – sorry, everything except string of course. That’s a little more radical than I was originally proposing, but I am fine with that outcome. It’s not like it’s hard to coerce a number or BigInt or Boolean to a string. And perhaps it is useful discipline for the programmer to do that explicitly. Yeah. I see MF is suggesting maybe we don’t talk about – leave on strings a little longer. Yeah. That sounds good.

KG: If we were going to change strings, I will also change numbers and BigInts. Probably. Although, frankly, numbers and BigInts because they are so much more restrictive about the kinds of string, these are palatable. You know, the – if you are passing a digit string to a BigInt input, there’s only one thing that you meant. Even if we do change the string column, we might change – leave the BigInt and number columns alone. Because they are already restrictive. But since we are short on time, I am not going to ask for consensus on any of the primitive things, except that we should not coerce null toString or – well, no. String – no. I am not going to ask for consensus. I will come back next time and present the hard coerce primitive type except the only primitive type of this proposal.

WH: Did we get consensus on the changes we made to the slide on converting to Boolean? I didn’t hear anybody objecting.

KG: I am not proposing any changes to converting to boolean.

WH: The slide – yeah. Converting things – yeah, this one.

KG: I am not asking for consensus because I am not proposing any changes. This is the existing world we live in.

WH: Okay.

MM: When you do make an exception and coerce more things, the default choice to use the existing coercion behavior why are to be – to avoid introducing more cases into the language.

WH: Yeah. That sounds good to me.

KG: RBN, I believe, spoke against that.

MM: No. RBN spoke against just the choice between strings accepting nothing versus the full toString. So there’s an open question – and so that does conflict with the combination of my preferences. But if you’re coercing more things toString, by default, then it would only conflict with the exceptional case.

KG: Yeah.

MM: But I agree. Ron’s point is a valid point and it is in conflict with the totality of my preferences.

KG: I think I am going to not try to give guidance on what to do in exceptional cases and we can talk about them as they arise. I think I agree with you, we should fall back to coercing. But it’s hard to think about exceptional cases, in general, by definition. So . . .

CDA: We are just about out of time. KG, I think you dictated a good summary a couple moments ago. Is there anything you want to add at this point . . . ?

KG: Look for part 4 at your next meeting.

KG: All right. Thanks, everyone. We will see you tomorrow.

### Speaker's Summary of Key Points

We got consensus on the first item, that new APIs which take non-boolean primitives should throw when passed an object or function. And the second half we need to ruminate more.

(end of day 3)
