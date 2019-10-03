# January 26, 2017 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Jordan Harband (JHD), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Chip Morningstar (CM), Dave Herman (DH), Kent C. Dodds (KCD), Kevin Gibbons (KG), Tim Disney (TD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), Michael Saboff (MLS), James Kyle (JK), Franziska Hinkelmann (FHN), Anna Henningsen (AHN), John Lenz (JLZ), Sebastian Markbåge (SM), Bradley Farias (BFS), Jeff Morrison (JM), Tyler Kellen (TKN), Gabriel Isenberg (GI), James Snell (JSL), Maggie Pint (MPT), Chris Hyle (CHE), Bert Belder (BBR), Zibi Braniecki (ZB), Jamund Ferguson (JXF), István Sebestyén (IS), Keith Miller (KM), Myles Borins (MBS)

-----

## Looking at the proposal list

(Dave Herman)

DH: Let's reexamine https://github.com/tc39/proposals . Can we think about what proposals are still possible for the future?

AWB: What things are likely to be there for 2018?

DH: Well, with the train model, we try to not pay too much attention to the annual release, and let things land when they're ready.

JHD: I'm maintaining this page. The status of the proposals should be visible from the proposal page, if you click on them. For my proposals, I have bugs open about 'the path to the next stage', etc

DH: Maybe we should put more links to specific per-project pages explaining status up.

JHD: If I put "when I expected my proposals to advance", that would be aspirational and possible to change

DH: What if we were "rigorous about being not rigorous", and explained that it

JHD: What if premature expectations of staging led people, e.g., browsers, to think that things are more stable than they are?

AWB: When writing the agenda, we could reference the aspirational advancement dates

DH: The biggest value might be putting pressure on champions to move things forward

DE: I'm a little hesitant to put down these goals; for example, I didn't have time to fix some Intl.Segmenter issues this time so I wasn't able to present, and other times, there may be issues where implementers give feedback or the committee has disagreement that takes longer than hoped to resolve.

DH: I don't think it is a good idea to talk about "what edition' something will land in. That goes against the idea of release trains. When am I hoping to propose stage advancement is useful though, if i twere a hard line, if there were anything in the process tied to it formally I would consider it a bad idea. If it's only a soft requirement will it just collapse in a few months anyway? It'll end up like the rocket ships, we don't actually stay on top of it and it doesn't bring value. I think it is a bad idea to make this  ahard requirement and as a soft requirement it doesn't have enough teeth to be maintained

JHD: There is more to it, you're talking about hard/soft requirement for the committee but people outside th ecomittee refernence this as their source of truth. Proposal champions receive the flack for that. I don't wan tto put something up there, front and center. I intended global to be stage 4 this meeting, but it isn't. I don't want people reading it and having perceptions in their minds.

AWB: We can make things private if you think that would be... a private and public version.

AK: What problem are we trying to solve?

DH: That doesn't solve he problem as I understood it. You wanted the public to get an accurate view

AWB: I want us to have a more accurate view as well, what we can expect to be happening

DH: I can say personally I don't feel that as a big problem. Those of us involved in the month to month work generally have a clear sense of what is going on. I don't remember ever feeling suprise that OMG there is an advancement I didn't see coming and he heavens are falling. I could see this as being a thing for a general audience wanting to see what is going on

DE: We have talked at this meeting about a few things we can do for visioning and communication outward yesterday

AWB: I don't think Dave was here for that

DE: We also have the possibility of writing up notes in a  more abbreviated form. Maybe these will solve the fundmanetla problem of communicating the vision and status of the committee. That would be better than tying chmapions down to specific dates

JHD: People follow the proposals GitHub closely. There are lots of ways to stay abreast, every time the meeting notes are posted, etc. There isn't one location to get an a real view of this but if anything I've seen it's almost too easy to find out what is going on. Not that I think we should restrict it...

AWB: I think that we have reached a scale where we need more formal structure. More project management if you want to call it that. Everything can't be independent and continue on some track.

AK: Can you say why?

AWB: Yes, because there is no predictability in where we are going and not a lot of coordination between proposals, we have things that are literally sitting for years in stage one

AK: I see a lot of coordination in things moving forward, none for things that aren't moving. At the beginning of this, I thought we were talking about how to take stuff off that isn't being worked on. I agree that should go away

JHD: Right now or anymore?

AK: Right now.

DH: Deferral rather than outright rejection. The idea is to simply cull things that aren't active, not kill them. Just remove them from the list of active things. Don't say this is now off-topic.

JHD: That's a 10 minute commit.

AK: That's one thing. I agree with Dave. People who are moving things forward are doing a good job collaborating. The champion column here makes it clear.

DH: The stages make a checkpoint, if we see cross-cutting concerns, we address them.

AWB: The other thing that might be useful to get more co-item tracking, like, should all regex items be moved along in parallel, perhaps merging or splitting items. These are all things we can do...

DH: What I feel like i could use guidance on as a champion. I'm unclear what the template is for a proposal repo. We have organically grown a template. Some stuff I've been working on, from the "olden days" Do we have an explainer.md? What does the README have? I don't want any more formal process than what is merited, but I do want to know what we're looking for in these things.

JHD: I'm happy to make a proposal template repo. Put your spec text here, create issues for stage advancement, etc. I'd be glad to write that up

AWB: It's almost an issue of... some curation is needed.

DH: Jordan is doing curation, I think there are some little things we can do

JHD: I'm aggressively curating and have been for awhile

DH: Jordan is doing really important work and I think we should acknowldge that

AWB: Can we put that in the minutes?

TKN: Getting it all

DH: Thanks Tyler

JLZ: So are we going to remove more things from the main proposals list?

DH: What I am hearing is an emerging consensus around proposals into some separate file that...

JHD: We already have withdrawn proposals, for things that are abandonded, rejected, etc. We can add something for things which are potentially still active. It's more likely that list will contain stage 0 or 1 proposals than 2 or 3. If that is the status of the simd spec, for example, okay

DH: I'm unclear how backburner SIMD is.

DE: It can be hard for champions to make statements about these thing sometimes

DH: Some people want it to be ambigious, they aren't ready to commit to not committing. Some stuff where it is like... the Date.parse legacy syntax standardization, she (Morgan) has since quit. I'm not sure she has any time or interest. She might not do it, we should ping and ask her.

MPT: I would adopt that. I have a high level of interest in dates parsing correctly

DH: That's awesome!

AWB: If you think about it as a deferred list, if you put it on there, we can say we'll review this, revisit this.

DH: I don't think we need to put a date on it. Is anyone going to champion it?

AWB: I was trying to make the distinction as deferred for the next year, but stay on the roadmap vs it's dead. IF something like this comes up again, it comes up again.

AK: Stage one items aren't on a roadmap

AWB: Well, it's on a roadmap where we decided it's worth exploration

AK: I don't know how you can get less.... any stage between 0 and 1. If a stage 2 item went dormant, a stage 3 item is even harder, even though we have that. This is why i explicitly withdrew Object.observe.

DH: If something is removed, we should remove it....

AK: I don't think we need to cull the deferred list.

TKN: It's the backlog

DH: I officially have no opinion anymore

AWB: I'm going to make a a motion that Jordan is now the official GitHub curator

JHD: I will make a proposal template repo over the next month or so

DE: Should the kind of project management that Allen mentioned be part of "curator's" job?

JHD: What I would say is the most efficient way to do this would be to file an issue on the repo for the proposal or go talk to them. The time between wondering what's going on with it and figuring it out should be short. The repo for the proposal should be a way to find out quickly.

DE: IS that the job of the curator?

JHD: If someone files an issue on the proposals repo to do that, I can follow up on it it seems indirect but I'm happy to do it

DE: This is what Allen was saying about general project management.

JHD: I think if we figure out the wording for a deferred list, every few months, I or someone else checks to see what should be moved

AWB: So right now with our agendsa we basically... Jordan you put it together and we kind of leave it up to the members to fill things in.

JHD: Yeah, the only thing I've ever done, or ever seen done is timebox/overflow items i put in a section where i ask the champion to move it to the timebox they want for the next meeting

AWB: At a minimum what might be an interesting thing to do, when we assemble the agenda for the next meeting, send an email for everyone who is on this list and ask them

JHD: A month before the meeting we could post an issue on the reflector and tag all the champions and ask for an update

AWB: Or just decide. You don't have to but...you know, part of this is just pushing people to think about what they, if there is something they need to do, giving them time to scurry around in the last week. Okay! So Dave, are you ready?


#### Resolution / Conclusion
  - JHD to be official curator of tc39 github
  - When assembling agenda, cutator to send email to all champions asking for stage status updates or make an issue on reflector doing the same
  - create an issue on proposals to make a template repo
  - touch base with all people who have proposal to get status to create a deferred list


## 13.ii.e Seeking Stage-1 for "do expressions"

(Dave Herman)

[gist](https://gist.github.com/dherman/1c97dfb25179fa34a41b5fff040f9879)

DH: There's a babel plugin for do expressions, I think it's pretty popular

SM: We don't use it, but it's pretty popular with JSX

BFS: It's pretty popular

DH: So, the basic idea here is to allow more expression forms in the language, a more expression based style of programming, a nice thing FP brough tot the world. I'm not trying to get folks to drink the koolaid about it, I myself have stopped drinking it. Expression are nice though, because they plug together well. Philospohically, that's why they are good. Do expressions contain statements in expression context and evaluate to the completion value of the enclosed statements. They let you have locally scoped lexical variables. Prettier ternary operator. For JSX, if you want to use more expressive control flow when having something that becomes an expression. Long-run, it would be nice to have more statement forms with expression analogues, but do expressions bridge the gap. We should avoid refactoring hazards. No spec written up, but it should just be, "return the value of evaluating |Body|".

(review of linked repo)

JFB: Out of this falls out something weird, like putting a return in there, it would be the same as doing an expression

DH: the philosphical justification is Tennants correspondence principal.

AWB: Out in the lobby a few of us were talking about this. One of the things this allows you do do a return in places where it is impossible currently. Most of the time that's okay but there are a few places where serious considerations are needed about the meaning (argument lists, initialzation expressions of a generator function for parameters and stuff). There is a need to do a semantic review of places this might occur and either decide what the semantics are or to decide in that context.... there are ways to syntactically handle this stuff.

DH: Great question to resolve for stage two, generator expressions especially. My goal is to be free of caveats as possible. There are places where teh existing smeantics of evaluation order is subtle

WH: This also comes up in for loops, e.g., `for (do {break;};; ) {}`

JHD: Your correspondence principal half answers my question... do statements, i like, they make a new form of implicit return, where the completion value is used in a way that isn't other wise like... so like in an arrow function with an implicit return, it's implicitly selection the completion of the thing, so it's an expression. It's a bit confusing since this is the first time in normal code to observe the completion value; people using eval don't usually think about it that way.

DH: This is the first place in the syntax that makes completion observerable

DH: There is an API, eval, that makes the completion visible. Most people don't realize that is what happening. There is a question if people now have to undersatnd what completion is.

JHD: Would it make sense to have some sort of keyword in the do statement return/yield/etc.

DH: I would argue against it. It feels a bit like Stroustrup's rule, when something is new people want it to be noisy so they can feel comfortable with it until they get use to it. In the short term it feels good, in the long term it doesn't. There is a usability concern. How do we teach this? I would argue that it is intuitive enough that it doesn't have to be explained by teaching people rigorous notions of what a completion is. Maybe it's more like, the value of this statement. Oh, what's that mean? It's worth testing that, the early user testing we have in the babel community at least indicates that some people find it appealing. That could be selection bias, though.

JHD: I'm not pushing one way or the other. If you type something into the console it's as if it's doing this already. Whatever you type into a console and pops out that's what happens. My concern is THAT it is teachable, i don't mind which way

DH: It would be nice to get to a point where, I don't think we'll get there or the complete route there should loc, but it would be nice aspirationally if people didn't have to think about statements much because more of them could be turned into expressions. There is grammar trickiness to get there, but it would be nice if people didn't have ot hink about this. Maybe that is too naive of me

AK: I have a concern that is not about the semantics, it has bad semantics. var declarations. what are your thoughts? I think it would be a mistake to allow var declarations here. I understand that doesn't fit

DH: I disagree; var declarations should be hoisted for the same reason that var already hoists up regular blocks. The thing that you're saying is weird, in my mind is the thing that has always been weird about var. To make var not weird in this case just because it's trying to put lipstick on a pig, it feels to me ... that it doesn't actually help anything. If you want to have understandable lexical block scoping, use let. Var is the thing that wherever you happen to declare it it's in the local function everywhere

AK: Var declarations in expressions in arrow function params happen to be relatively hard to get right (For us) we have an implementation of do expressions in V8. If you are open to arguments where it's hard to understand what the var declaration is...

DH: No question that's hard, that's already the case. Var and catch, var and let and var and eval and let and catch and all of these things in combination can be very confusing. I'm open to everything, right, open to discussion about anything but i think i'm wary of us adding special cases that make it confusing. In practice what people will have to then learn from that is don't use do expressions or don't use var. Not using var is a reasonable outcome, that would be my best case outcome. Maybe we'll look at the corner cases is there is no easy way we can handle is and just disallow var.

AWB: You have to drill down into nested blocks if that is a concern, it's just not just var in the statementlist of the do block, it's contained vars

AK: And var in sloppy eval in those contexts

DH: That's always true about var

AWB: the semantics would be strange. it's really clear, if it is easy to implement those is not clear

DH: Ease of implemention vs ease of understanding. Out the gate it's bad...

AK: I would challenge the ease of understanding

MF: I don't see a reason to allow break/continue/return in do expressions. Can you give me examples why that would be useful?

DH: Yes, The way you expect it to work is that it, has the same non-local control flow effect in a statement context. Inside a loop you have a do expression and you have a break it corresponds to the do, not the loop. The reason that this is powerful is that it, the kinds of... early return patterns that you can use become richer.

MF: I don't think that's true.

DH: You can do them locally and not hoisted them out. If you are in a nested expression, today you have to take the whole expression and refactor it into a bunch of statements. This takes what can be concise, i'm just composing a few expressions here, one particular control flow path wants to exit early. Suddenly the rest of those parts have to become much more verbose because they have to be hoisted into local vars and statements. it would be helpful for me post a efw examples

MF: That would be helpful. I think there might be a general transformation we could apply that would allow us to not require this breaking inside the do.

DH: There definitely is a general transformation but it's prickly to the outer statement. That's the key to the expressivity, it's not a local transformation, but you have to rewrite the whole expression. In practice your expression nesting might not be that deep.

WH: If you have a labeled const, then you could have a do expression in the initializer which jumps back to the label. What happens to the variable in that case? If it gets created, what happens when it gets reinitialized?

KG: You can't label a const. That's the point that I wanted to make, you can label var declarations but you can't label lexical ones. You can early exit from a var dec but not a const one. That's very strange.

AWB: That's kind of arbitrary, we didn't understand why you would want ot label any of the new declarations. That could be relatxed if we thought it was needed for consistently

KG: Sorry, I didn't mean to interrupt. I like this feature. I have a bunch of things to say about it. I kind of agree with MF that I'm not sure allowing non-exceptional control flow in an expression introduces a huge amount of complexity of the language. There are all these places where you couldn't have that control flow and now you can. You can have an expression which contains a do expression which conditionally returns from inside of it. You cant' determine that from the context of the return anymore. Sure, you could throw conditionally, but not return.

DH: I hate to well actually you, but that is true today. Return can be nested in a finally and it can do whatever it wants

KG: Yes i know, i've implemented try finally, i'm familiar. It's not sort of resuming right after the return, it's doing this other thing. The finally wrenches control away, control might resume after the return or the finally. That's all very strange. The return itself is conditional, it's conditional, but the conditionality is in finally rather than the statement, in the right hand instead of its context, that seems very strange

DH: This has always been a challenging topic, one of the real regrets I have from ES6 is that the lambda syntax we added didn't adhere to this principle. I want a way to finally have a way to nest expressions. I would actually not even want this feature without this aspect. What makes this challenging is that there is a blood principal. Coming from FP, i'm used to control flow operations being expressions. There is nothing unexpected about this... coming only from JS, that's not a familiar concept. Nonlocal control flow is only in statements. My goal is to get JS to a point to where you can do that, you don't have to think of statemnts as something special. If you add this new form that retains the diea that statements are special, it defeats the purpose. That's not.. proof of anything, it's just my goal here. That's what I WANT to acheive for JS

WH: It's a lot of work. A lot of sticky cases. The const case. When you jump out of a const initializer back to the const, does the variable get created or not? If it gets created...

AWB: It would have to be created but its TDZ is not satisfied

WH: ... if it gets created, what happens when you rerun the const statement?

DH: I'm willing to DO work to fill in these cases

WH: Okay then, you do what? There are all kinds of sticky cases. What about a switch statement if you break out of the switch expression?

DH: The goal here is to have something guided by the semantic transparency. That will help us answer each of thsee. Yes it is work, I'll do the work. There is also implemention work which I wont' do rfor every eimplemtnion. My claim here is that the user value of having more flexible expression in JS is worth the work. We have signals from particlarly the templating context, where, templating is all about expressions, you're putting values into other values. My claim is that it is worth doing the work.

WH: The other thing is you have in your proposal, we currently have that an ExpressionStatement cannot begin with an open brace; we'd have to also prohibit an ExpressionStatement from beginning with a do, to avoid ambiguity with do/while loops.

DH: It is premature to have this conversation. Let me explain. Disallowing do expression to be in statement context is one solution that works for sure. I think it is not dieal. I think we may be able to do better but more explaration is needed. All I put here is that there are interesting avenues to explore but I don't ave anythign to rpesent eyt. THat is why I say it is premature and this isn't needed for stage 1

AWB: A completely different semantic direction there for a moment, as youv'e said this is really the first way that we would broadly expose the completion value of a bock other than eval which most people ignore. What i have found from people asking me questions is that when people look at the sematnics of completion value through eval these days, the very few who look, one of the things they find confusing is the fact that declarations dont' produce new completion values, they just pass through. Msot of the people who come to me about that are very suprised and confused. I wonder if you've thought about jus like we werwe ablt o reform completions in ES6 whether we could consider changing declarations so they also have completion values.

DH: If you were asking me to put my life on the line I would bet that isn't web compat. The fact that you get undefined which is a value that you can test and do things with and you can use eval

AWB: you don't get undefined it propagates to the previous statement that might not have a value.

DH: If all you have is a statement or a sequence of statements. If that means you get a value and your program can call eval and it can do suff (epople use eval all over the  place) this is a strong hint that the internet probably depends on that being the case. It'll subtly break things. That's just my guess, though. I guess it isn't web compat

JHD: so this is getting the completion value of the block, what if i have a return in there?

DH: The reason why a single line.. why i believe this is sufficient, completions are more than just he normal value, they are an exception monad, they are a nonlocal signal that we need to propagate up the control flow, both expressions and statements use that, if your statement does a return, the completion value is a returning completion.

JHD: If I return three, that evaluates to 3

DH: no, it evaluates to "i am returning 3"

JHD: I can't capture that an an expression? I can interrupt in expression position i can interrupt the function progression that I can't currently do?

DH: That's right, that's what we were just talking aout

JHD: So the same thing happens when I throw, in the same way I can eval a throw, if i do a throw expression

AK: You already have may expressions that throw now

JHD: but the do doesn't catch it right?

DH: Correct, it just propagates them

TKN: So i think we are over our timebox. I think the original idea behind this was to get to stage 1. It seems clear it's worth taking the time since we're already doing that, maybe we should just move on.

KG: One more thing, async do is really interesting idea. It would be worth making sure there can be symmetry. Nonexceptional control flow makes no sense in an async do context. An await 0 and a continue the loop the do expression is in the loop has already exited. E.g.

`for (a of b) async do {if (await f()) continue; } // by the time the continue is reached, the loop has exited`

WH: Explain what you mean by async do.

KG: Equiv to IIFE modulo some concerns about nonexceptional control flow. AT least, that is the idea i have in my head

DH: That is the idea I have too but i fi go there it will expand in to more conversation. That's an important constrain for what needs to be considered before this could be considered a finished feature. It's an important crosscutting concern. Thank you. Any objections to moving to stage one?

#### Conclusion/Resolution

- Stage 1, champion DH
- Items to look into more:
    - Should non-exceptional control flow (break, continue, return) be allowed inside? What are all the edge cases?
    - Does the completion value make sense here, or are its semantics too unintuitive (e.g., for function declarations, which have no completion value)

## 13.ii.d Seeking Stage 1 for Realms

(Dave Herman, co-championing with Mark Miller and Caridy Patiño)

- [proposal](https://github.com/tc39/proposal-realms)
[presentation](https://gist.github.com/dherman/66627aac764a9795dc3875e270f55918)

DH: Realms was sitting at Stage 0; I've been looking at it with Dean, and Chip, and others. Previously worked on it through ES2015, just the core JavaScript builtins, nothing else fancy. If you create a new Realm and instantiate an Array, it's a different one. Alternatively considered, this is a reflective reification of the ECMAScript realm concept. (going over presentation linked above)

DH: It forms a sort of sandbox, or you could think of it as a worker with synchronous communication.

MM: That seems odd; Workers are tied to concurrency/processes

DH: Well, people actually use workers this way, and run into the lack of synchronous communication.

DH: Generally, this can provide security isolation, text editor plugins not affecting the state of the rest of the editor, or server-side rendering running in a fresh space that can be set up properly separately.

BFS: Another thing is using ServiceWorker to avoid redundant evaluation of module loading, and transpilation

DH: When you have a realm object, you have super privileges over the realm: you can get its global, evalScript

WH: What's on the realm's global object of a realm you created in your example via new Realm()?

DH: By default, what's on it is the standard library of ECMA-262--Array, parseInt, Function, not window, document--none of the web-specific stuff.

WH: What about Annex B libraries? In particular, things like the error stack introspection that we discussed earlier in this meeting?

DH: We can discuss; either could work.

AWB: You could also have Annex B realm

DH: You could create a subclass of Realm that's a truly vanilla global object. Anyway, new Reflect.getPrototype(Realm().evalScript("(function() {})")) is the inner realm's Function.prototype

BT: I think I have an implementation of this Realm API in eshost. I arrived at the same API! You can use eshost if you want to play around with this. One difference is that if you're making a Realm in a browser, it's an iframe, so it comes along with all of that stuff.

DH: This is deliberately not the point, so it can be a portable API. In the browser context, you shouldn't get a whole bunch of other stuff. It could be the DOM of the parent, but the goal is to be sandboxed and isolated.

BT: How is that different from saying you shouldn't have access to the DOM in any case, since it's not portable? Just trying to understand the argument.

CM: You could easily put the DOM in, but not take it out easily.

DH: We could actually easily go either way.

MM: If you go the other way, you have to have the expense of adding and removing it.

BT: DOM is a bit of a red herring. What about WebCrypto--shouldn't web programmers have access to it?

DH: You can make a subclass that manually adds the properties from the web platform that you want to add (or remove).

AK: Should init() be called somewhere in the code sample?

DH: init() is called by the constructor, in this design. About the global object, another option is to start with nothing and add each thing from the start. Let's go through the examples further. For subclasses, there's an init() method you can override, as part of the object creation protocol. init() populates with the standard globals. You can override it to prevent things from being added, or manipulate things before or after that. This is one way to do it; let's not go into too much detail about the exact details

WH: When does init() get called?

DH: From the base constructor.

WH: So init() user code runs before the user super() calls return in their constructors?

DH: Yes.

WH: What's the rationale for separating init() from the constructor?

DH: There needs to be some magic in the actual creation of the object, since globals in JS semantics are special. There has to be a separation between creating the object and setting state on it.

WH: To make the question more concrete, what happens between when init() finishes and when the super constructor finishes?

DH: Nothing. init() is the last thing it does.

WH: Why not just put the init() user code in the user constructor after it calls super()?

DH: That wouldn't let you do your own default initialization. Going further, symbols could be a nice way to add some more hooks, e.g., direct and indirect eval, for live transpilation. One powerful use case is language polyfilling. Could also be used for security restrictions disallowing some language forms--eval is a potential hole, and hooking into eval can address it. Then, hooking into module loading could be part, but I don't have a concrete proposal.

BFS: Should the job queue have hooks?

MM: This is per-agent, not per-realm

DE: There's a new V8 API for PromiseHooks

BFS: I want something from JavaScript

DH: This is a clear cross-cutting issue to look into

AK: V8 PromiseHooks are for agents

AWB: We could clarify in this document that Realms aren't agents, aren't workers, etc. Is the idea that the standard global object is *only* the standard, or could it include Section 16 embedder extensions?

DH: I believe either one is fine, neither is fatal; my preference is that it should not include extensions, and that it should only include those things, just in order to design with portability in mind. Maybe I'm missing something, open to changes.

AWB: In your DOM mocking example, it looks like you're setting up leaking of mutable objects; if you want to prevent that, you have to do things differently

DH: This is an advanced API

AWB: An expert feature

DH: If what you're trying to do is to build a carefully airtight sandbox, no amount of API design will make that a full-proof process. If you want to make a sandbox, this will be hard. Currently, today, you can only do it through various hacks, e.g., hidden iframes.

MM: To be positive, this API makes it much less hard than it could have been

DH: But the fact that you can share objects gives a lot of power. Realms plus Proxy gives you a lot of power to enforce boundaries, but you still have to be careful when setting it up.

AWB: You'd probably want to instantiate global.Proxy rather than Proxy/

BFS: is the global going to have Proxy hooks?

DH: You could set a handler to the global object, yes, that's part of the design.

BFS: The global object has a proxy

MM: the Window vs WindowProxy thing is actually orthogonal from EcmaScript Proxies. It is an unfortunate name coincidence. A so-called WindowProxy is not a Proxy.

BT: I'm curious what your thoughts are on what it would take to do on-the-fly transpilation. Would this be a combination of the Loader's translate hook plus

DH: I don't think the Loader API will be necessary on the web platform at all. I don't think I'm ready to announce that I'll stop work on the loader, but I think we can get all the benefits of the Loader with a radically simpler API. But today's not the day to talk it through.

MM: I am shocked; we'll take it offline.

BT: But you do think the Realm APi can be used to support the on-the-fly transpilation scenario? Which will be used when you run a top-level script?

MM: it has to be a different one, as the spec provides different rules for "eval code" compared to "script code".

DH: I don't want to talk through all the details, but agree that hooks are an important part of it, and that we should investigate the hooks as a way to look into module loading as well.

BT: This makes a lot of sense to me, that any source text is associated with just one realm--putting hooks here seems feasible

DE: Would it be reasonable to make an MVP Realm and pull off some of these features into a follow-on proposal?

DH: All of these features are necessary to fully virtualize an execution environment, which is the goal of this proposal. Does that seem reasonable?

DE: I don't understand what's required to virtualize an execution environment exactly.

AWB: It's important to think through the cross-cutting concerns first.

BFS: This ties into the global module registry; I am not sure it's needed.

DH: I think the registry could be in userspace

AWB: The Realm API was previously in the ES2015 spec, and it was pulled out due to exactly this issue, interactions between module loading and realm hooks.

#### Conclusion/Resolution
- Stage 1 acceptance


## Meeting Minutes

AWB: By now everyone should have had a chance to review the minutes of the last meeting. Approve the minutes?

WH: Yes, but we need to fix the deleted agenda lines.

AWB: Yes, we'll fix those.

#### Conclusion/Resolution

Minutes are approved.



## global

(Jordan Harband)

JHD: We faced a number of web-compatibility issues for `global`, including flikr and several enterprise JIRA intallations. So it seems like the name `global` is dead. What should we do? Abandon this? I'd like to find another name, with global in the name

MF: How about gl0bal?

MPT: globalThisPascal

JHD: `Global`, `$global`, `__global__`, anyway, I'll open a bug and we can come together and make a list of possibilities. This will take a while, since each time we try a name, we'll have to find a browser willing to try it, if it breaks, we'll have to roll it back, hope that trust hasn't been broken enough to try again. Both Safari and FF are willing to try again but I don't want to just try again every two months.

WH: What was the cause of the flickr breakage?

JHD: If a global variable named global was present moment would attach to the wrong thing.

AWB: Where I saw it was detecting what platform I am on.

JHD: No, they were all trying to find the global object to attach to. The JIRA breakage is moment being wrapped with a this value. This allows them to extract moment in a non-global way. Every other usage of conflicting code is looking for a global to attach to.

AWB: The real thing we'll get to is that I think we should realize that feature and platform testing is a particular hazard for any name we know exists in some platforms and not others.

JHD: I totally agree

AWB: In choosing names for anything, not just this, we should be really aware of it.

JHD: For example, the word "process" is forever going to be banned in the spec, it used to detect node. The word "window" is being used to detect browser. The same goes for a long list of other names. That was always a concern with the "global" but I was hopeful people would just find global faster that way

DE: On the other hand, web APIs are frequently adding new properties to the global object without any of the concern that we are having. WASM add one.

JHD: If the web platform groups, standard groups, don't already share something, when we all pick a name we should pick names that are meaningful but not upset generic to avoid collosion. As the language, there are some  names... it is likely, using a small english word is going to make more sense for the language than the web but maybe it goes the other way

DE: In the web tey haev to consider these things too. For example for web components we had to change the name of a bunch of stuff. Some code shipped was looking for a name that was an earlier name. These things happen, we don't have to conclude that it would be impossible to add this. If it is specific name added by a platform it's ...

JHD: I agree we'll find a permutation that works

AK: From experience of being a team wthat shipped names like "Entry" and "Fetch" the problem won't e findinga  short name, it'll be finding one we are happy with. I have less concern about any short nam ebeing compat.

WH: We will have the same problem with BigNum, trying to find a web-compatible name for it.

MM: You said there were three approaches, so far we've run two

JHD: I make a github issue, we bikeshed

AWB: We do have a long afternoon here with a number of interseted parties

JHD: I want to give Dan some time.

MF: I'd rather not have a public github issue on this

JHD: We can do it on reflector. If there is something we can achieve today and it doesn't conflict with Dan's later presentation is good. The last option was System.global. Which namespace does it go under? One of the primary objections voiced by Domenic who isn't here today. He didn't want this to create a namespace that doesn't exist yet and may never exist otherwise. If we aren't going to have System.import every, that's a good point. Because the error stacks proposal needs a namespace, it makes sense that this could be shared. That is our third option. My expectation of the web compat for that... I'm sure people are already creating System namespaces and attaching import to it. I'm guessing the way people wrote this code they check for it before they create it. If they have written that sensible code, it won't breakif we create a System object iwth a different property. I don't expect it to be problemantic, both this and the stack proposal would need to find something web compat anyway. Regardless it would be under a namespace. Once we have a web compatible namespace, any property we add is safe

DH: Can I just say, we don't need to have the discussion but I never felt convinced by the outcome of the discussion. Domenic felt really strongly and I kind of backed off. Oh wait, no, it was you that was concerned that Reflect coudln't include things that weren't Proxy traps. I was the one who came up accidentally when I created Reflect.parse in SpiderMonkey years ago. It got hijacked to mean the MOP operations.

JHD: When we removed the enumerate proxy trap we removed Reflect.enumerate, which was based on this similar idea.

MM: As co-other of the proxy proposal, i don't consider that to be a constraint. The privilege separation is a serious issue

JHD: That constraint is the reason wy we removed against my arguement the enumerate method very useful.

AK: We removed it because we didn't like what it did

JHD: No, we removed it because we removed the corresponding Proxy trap

AWB: Yeah, and it seemed like it was included for that. Anyway, is it short enough as System.global?

JHD: I think it is. You often have to do a whole bunch of checks to figure out which of several places to get the global object from. So it could be Reflect.global. Anyway, Reflect sometimes has a little
 privilege, right?

MM: Everything defined as the primordials in ES2017, zero of them have privilege.

AWB: Reflect is an object, it has a prototype, which is Object.protoytype (of some specific realm). If you give someone Reflect, in addition to the priv of the properties you pass to it, you also give them to the privs of Object.

MM: There is the immutability of primordials, JS makes all of the primordial states highly highly mutable. Everyone sharing access to those can mutate in ways others can see. The constraint we got right in ES6, we got almost right (with two exceptions) in ES5, if you use Object.freeze on all of the primordial objects it so happens that there is no mutable state left. Since we sort of backed into, that was not a necessary conclusion.

JHD: Are you saying that is true in ES6?

MM: There are two remaining exceptions that will remain forever: Date (both Date.now() and new Date()) and Math.random(). I'm talking about the primordials on the global object, not instances that are created later. There are no Map instances in the primordial state. So the fact that Date.prototype was a date and Rgexp.prototype was a regex, there was a bunch of stuff that you used to be able to mutate but were fixed and removed. Date is a read-only channel for finding out the current time. It's access to mutable state, but not the ability to mutate. There is also Math.random, if it were cryptographically strong pseudo-random number generator, wouldn't be a communication channel. Object.freeze is enough to prevent shared primordials from not being a communication channel.

MM: Well, it seems like a survivable mistake to put global as a property on the global object, but it seems like something that we'd always regret.

AK: I want to argue that we shouldn't be talking about this, I think that Mark was convinced a global object was special enough that we could put global as a property on the global object and it wouldn't cause an issue.

MM: Yes, it doesn't, Yehuda made an argument, he was right, that in terms of the hard requirement, we can survive not putting global on the System object. I always felt it was a mistake because when you do grant priv in a way that emulates the way hosts do, the global object will generally be an object that carries a lot of priv even though its a survivable state that would be something we will always regret. That is why I come back to this issue. It really would be good to have it on System. it IS a hard requirement NOT to put it on an existing primordial because then you mix. Yehuda was right that if you make your own separate global, his argumetn does not defend making it Reflect.global

AWB: The priv you're worried about putting it on Reflect would give access to the global object. If you didn't want to do that you could sensor global on reflect.

MM: If you censor or virtualize it, you have to create a different Reflect with a different identity, which means different code in the realm sees different reflect items. by doing the priv separation we enable all code sharing the same realm to all share the same identities for the primordials. There is no unsafety in the sharing. That means you don't have the identity discontinuity problem. My array is not an instance of your array among separate code in the realm

AWB: Why is it special?

MM: It isn't.

DH: This is a key thing that I missed in the past. Why is Reflect special? it's actualy true of almost everything. Reflect should not be specail and suddenly have power tools attached to it. There are none in the stadnard library at all

MM: There are zero in the standard library

AWB: Why wouldn't some new namespace object like a hypotehical system, why isn't that an isuse?

MM: The reason is because thats the purpose for it to exist. Its not unexpected, it's not a problem for it to be differently privileged.

BFS: I'm curious, we have spoken about this before, about importing a powertool on my side, curren tscript identifier. Would this suffer the same problems as an import you could never mutated?

JHD: If you want to lock down a realm oyu need to change waht the global this eappears to be. you can't do that if you import unless you can virtualize it or change what the import is.

MM: this goes back to the same issue we had with the stack thing. if we do have a way to have a way to have built-in imports such that it ... we can distinguish in an ergonomic way with priv imports and non-priv imports, global could go into a priv one.

JHD: As long as you can virtualize it (or anything that needs it)

DH: That requires not only that we have worked out all of our mechanisms for putting std libraries in or systematic changes to how imports work.

BFS: If there are well defined specifiers that shouldn't be true

DH: Currently the spec says nothing about the string you import. This is changing modules to indicate some are special

DE: There is an idea to make an object literal that is associated with the import, you could put a crypto hash of the file you're going to download, you can put other tokens there. if you want to put some more key values associated with an import there are other reasons why this would be good to have, e.g., for CORS or SRI

DH: As the champion of modules t would be nice to be looped into that

AK: We did

DH: not once

AK: We're looking for syntax for various things.

DH: so you're talking about CORS. It would be nice to be looped in here

AK: The reason we're looking for a thing that sounds reasonable to us before we try to make it reasonable to you..

DH: That's fine.

DH: I apolgize, that's legit. We should not block this on path dependence

BFS: Domenic is only not in favor of System, he did not say veto it.

JHD: He's opposed but won't die on a hill for it

BFS: He says it is minor and he can talk about it later

JHD: I am not seeking a stage change. I am looking for a direction from the committee with the hope in a meting or two we have two implementations that are web compat and we can move to stage 4.

AWB: I think whack-a-mole option is the best. This case, a simple global name that doesn't conflict with current use would be the right thing. this is a special thing which has essentially in all implementations already been given a simple name. We can come up with a non-conflicting global name, that is preferrable to a namespace that will never be used again.

DH: Afer I said let's use System, I changed my mind. Will we really create a namespace for something that will only have one thing?

MPT: Can i propose a technical solution to this problem? I think I have the infra, but has anyoneever craweld all the files on github and ...

JHD: I did that as a part of the initial search, where I looked through 20 pages of GitHub search results, that gave me the false confidence about global. Github doesn't search commit histories.

DH: There is an enormous amount of closed source too.

MPT: We can do this.

DH/JHD: that's just a smoke test

MPT: I was curious if it had been done because we have the resources to do it; we have better infrastructure than just looking through GitHub search directly in the web UI. It takes infrastructure.

DH: Mark has a rebuttal for the namepsace for one item

MM: The thing is, there are five existing proposals that would populate the system object
  - weak references
  - default loader
  - getStack getStackString
  - global

MM: The abstract point that this is an example of. Over time, these things have previously been held back, waiting to have a conventional place to put things that grant priv. Of things in this category one of them has to go first. Whichever one goes first, with the other ones not yet being accepted the natural criticism is that we'll end up with a namespace with one thing on it.

AWB: Doesn't this create a catchall place? it's not clear to me for the things you listed would have the same priv.

MM: it's not that they have the same priv it's that everything else has none. If you want to differentiate between the priv of things that are otherwise in the same realm, this is a reflection of things you need to virtualize or censor
AK: That is three that exist

DH: it's helpful to talk about what they are concretely. When you think about what they are, System doesn't make sense together concretely. The name System was about querying the system to find what modules are installed.

MM: Well, I don't care about the name

JHD: If we agreed that there's a privilege-granting namespace, we just need to choose a name.

DH: Mark has been arguing for this for a long time, so we should respect this and not reopen it. There's a lot of security-critical code on the web, and it would be helpful to have a way to segregate the things that you can and can't expose to those things. There's work in maintaining that constraint. Given that that's the constraint driving this, we should consider this as part of the name--the name should reflect that it's the power tools.

AWB: Ring 0

DH: Let's take a name that includes this.

DE: If the web is adding random properties to the global object that grant privilege, don't we need a whitelist rather than a blacklist, unless you depend on the Realm API?

MM: The Realm API is a core part of the plan

JHD: Should we start putting new Web APIs in a privileged namespace?

AK: I don't think it's likely that the web would do that.

DH: We have restricted privilege in JavaScript, so it makes sense to separate this.

JLZ: It seems like this privilege doesn't correspond to what users would think.

AWB: It seems strange to say SuperPrivilegedObject.global--who'd want to say that

MF: The global object isn't typically being used to say like, i for iterating over an array. It's a system level thing it is seen as a priority.

JHD: People access the global variable a lot because historically we had no module system.

DH: I think this is the right word: internals. It is in a way exposing some of the more internal... it has a hint of power, but not off the usual path of programming.

JHD: Sounds good.

DE: How about Util. No, joking.

AK: I don't think the global object is internals, it's right there

JHD: it's privileged enough to coordinate

BFS: Why can't I freeze it then?

AK: That's a separate question

JHD: It is somewhat internal, it gives you direct access to things...

AK: No, no, i can access everything on the global object without touching it

MM: I do want to correct a historical thing about what Dave said. 8 years ago when JS was ES3. The almost perfect separation of priv between JavaScript and Host defined things was an accident. After 8 years of defending and strengthening this separation, t is no longer an accident.

DH: Sorry, I meant an accident before you came to town.

JHD: Let's say we go tentatively with the name internals, with the understanding that we can sitll bikehed.

AK: I think we should find a name for this thing, not separate the discussions. I think the global should be a global name and we should put the discussion for the "thing" for stackTrace is a different discussion.

MM: I strongly want it there

MF: Why not put it there?

AK: First, we have to agree on the object. I want the global thing in sooner, the longer we don't ship it the less purpose there is.

MM: I think we should skip shipping it earlier vs putting it in the right place

JHD: I would wager to say if we can agree on the name for the object t will not slow this down

MF: It will speed it up, we won't have to be so careful

AK: I'm not talking about the spec text

DE: none of the proposals up there are anywhere as far along as Sytem.global

MM: something has to go first

DE: it's more than that if we have two proposals at stage there and they were both not moving because System wasn't there yet. the others ones are much, much less, they are stage 1.

AK: except the one that isn't going to be a sthing?

MM: I want to hold up global until the other ones got to stage 3

AK: That is exactly why we need to have this discussion. It happens that for whatever reason some of these discussions around privilege granting will hold up global, then we can hold up global.

MM: Even if none of these make it, this will not be the last thing that will need to grant privileges.

JHD: We can in a practical sense we can say in 5 years we will have this and we need to reify it.

AK: If that was true it would be in stage 2 now.

AWB: So we have been talking about System for more than 5 years, you can't just assume it won't happen.

JHD: Speaking as a champion for the stack proposal, I didn't ask for stage two, major semantics are not specified, it's not ready. I want it to be ready. I want Mark to take this up. My goal is to get that done quickly. In some number of years it will be finished and something we agreed upon will ship. it's already compat.

AK: It may not include the stack or getstack trace. We may expose the stack trace in other ways that don't include System. I'm partially making these arguments for Domenic.

JHD: I hear what you are saying. There is a slim change that getStack and getStack string will not need a priv granting object. The real question is, if we likely will have a privilege-granting object, let's assume its going to happen and some stuff will be on it. At that point will we regret not putting lgobal on it?

AWB: No, global doesn't need to be there, it would be perfectly fine

DH: A global is already always accessilble to you. The idea that we woudl take this thing that is already available and is the one major thing you need to blacklist to get attenuated power and pretend you were hiding it under a power tools namespace is silly

MF: Global is not always available to you, environments without eval don't have it.

AK: It is available to you there as window

JHD: Browsers without CSP there is always access to global, but there are browsers that restrict eval. AK is right, it is available as window.

DH: The top level this is available as window. The other point is that CSP is not the normal intuitive mode of JS. I'm not saying it's bad, though I have my issues with CSP. Naming is about what is the appropriate intuition for people. This makes sense in an environment where global has been censored but thats just not normal.

AWB: If you can write a script you can script  script that will access the global object without eval

DH: the idea that the power tool could have a reference to itself without needing to have a reference to a special power tools namespace to intermediate it seems natural.

MM: So this is Yehuda's argument. I think the argument does work in the sense that there is nothing fatal about that decision. it's survivable. it's one we will regret because it means when you are virtualizing you have two global names you have to start with instead of one?

DH: no, because you don't actually have to prevent access ot it, you just have to prevent that object from having power tools, you don't need to censor that name

JHD: you're saying you have to strip things off it

DH: you create a realm stripped of all power and giving reference to it doesn't grant power

MM: You want to create, when you have multiple degrees of priv in the same realm they are going to see different global objects and different "System" objects, if global hangs off System you start with System.

DH: You create a new realm and determine what's on the global object.

MM: I'm not talking about creating a new realm, I'm talking about creating a new privilege level, separation, within one realm. We want to avoid the my array is not your array problem. We want multiple priv levels in one realm is to avoid these identity discontinuity problems. The plugin scenario is the problem where you don't want that identity discontinuity if there is no other reason causing you to do it.

DH: In those situations how are you censoring it? Are you deleting things?

MM: No, you're creating an evaluation context for the separately trusted code such that what it sees different objects as the global object and the system object,

DH: You're doing this without a Realm API?

MM: This goes back to the discussion of separating the realm conversations from the scope conversation. You create the evaluators in the same realm that saw a different global object at the end of their scope chain

DH: In both cases, are you not giving them a restricted global object? The case where you have untrusted code is where you restrict global. global is no longer powerful in those cases. Why do you need to censor access to it at this point?

MM: You're making Yehuda's argument, I agree.

DH: I'm saying you're NOT doing. Your describing a use case where they do have access to it. The argument you made a minute ago was restricting TWO things. I claim that is false. You will not remove access to the .global object because it is a self reference ot this power restricted thing

MM: In the case of the namespace, you still have a self reference which would be System.global refers to global, it's two step self reference but it's still a self reference. The... by making th self reference a separate global variable from System it simply means that you have to, when you're making this new priv thing you have to hook up both self references directly rather  than uniformly replacing it.

DH: I'm saying that if you design these APIs to hook up the references. Let's talk about the Realm api and you can tell me why its not going to work. One realm proposal is that it initialized the global object with "all the usual things" for this new embedded realm, but not things that provide authority. One of the things that does is hook up a global.global object and you have a power attenuated thing now, it just by default does what you want. The only thing you have to remove is still access to "System" or whatever it is called.

MM: that's very interesting... I think you've changed my mind;

DH: That's awesome. I think I agree with Domenic's perpsective. It's nice to have a global

JHD: Does that then mean we have consensus and we'll bikeshed on the choice of names and once we find a webcompat on we'll use it?

MM: I don't want to say consensus on the approach yet. Dave having convinced me is less than a minute old. It took me weeks to think about Yehuda's argument. I want to live with this for awhile.

JHD: In the meantime, are you comfortable with a reflector issue.

#### Conclusion / Resolution
  - We will look for a web compat simple global name
  - We will make a reflector issue to bikeshed

## Public and Private Class Fields (Daniel Ehrenberg, Jeff Morrison and Kevin Gibbons)

- [slides](https://docs.google.com/presentation/d/1yXsRdAJO7OdxF0NmZs2N8ySSrQwKp3D77vZXbQOWbMs/edit)

DE: Kevin is joining the champion group for private state. There are a number of things we are approaching consenus on. I don't want to say we're at consensus but the public and private keyword, Allen you've expressed interest in this. At the last meeting we discussed if we should have this in addition to the sigil we have to have. A few arguments for this were that we don't have it for methods and you really want it when you're learning but after you learn you don't want it. The second one is the stronger argument. For the token we talked about different possibilities, it could be = or :=. It seemed like equals was pretty agreeable.

WH: By "token" here and on the slide I assume you don't mean the token that starts a private name.

DE: Correct. That would remain `#`.

MM: Mark laughing :)

DE: (Reviewing slides linked above)

AWB: One of the things here you're implicitly saying as you go down this path, when we designed classes we decided in tc39 about whether class bodys were statement list like or object literal like.

J: We went statement list like, but we do allow comma delimited to declare multiples

AWB: I undertsand, you have contacts where you have keywords where a comma separated list is very natural in the statement context. if you don't have a header on the statement context it looks like somethign else.

JM: I just wanted to point out also that I know the class bodies are originally designe around statementlists. They aren't that now though

AWB: They are statementlist like, in particular one of the things we wanted to allow for was the potential for future inculsion of declarative statements like let/const or even function. That could have useful meaning, particularly now that we're adding lexical contours to these things.

DE: This syntax wouldn't preclude any of those issues

AWB: It makes the syntax less....

DE: You have a bare thing but it isn't followed by a brace? What's the issue?

AWB: You have bare things that look like assignment statements;

JM: You're suggesting the alternative is a keyword prefix interspersed?

AWB: The alternative would be to follow the pattern we've used for essentially all other declarative forms except concise methods.

DE: This is really about the first point in the three (no public/private keyword)

AWB: They all tie together.

DE: How?

AWB: Common declarations would naturally follow, they already have comma separated lists, it would be surprising if you couldn't

DE: I don't know if I call public/private keywords are like var and let, they modify a declaration.

MM: Allen is a short summary of your position, no comma unless we also use the leading keyword?

AWB: I think that might be less confusing if that was the case. I like comma separated lists.

MM: I just want to understand. Are you only saying that we should have both the leading keyword and the comma or are you saying the two decisions are tied together we can have neither or both?

AWB: The decision space includes all possible options. A set of consistent decisiosn without even looking at something, making something good an intuitively guessed, i would say yes.

DE: You would be okay if you could do class x=1 and anew line and y=2.

AWB: I will always be sad that there isn't a keyword in front of those things but I would prefer if you're going to go that route that yes, it not include commas.

DE: I think we could defer commas. If you do put a comma it's... the real motivation is for the decorator proposal to have a more convenient syntax. Yeah, you could do this but I don't see it as being really important.

AWB: You've had public feedback on this, right? I believe the public feedback, my sense is there has been feedback on both sides.

DE: Most people said please stop the proposal, we can't stand the sigil

AWB: You have to have it

JM: To be clear, to drop the sigil is specific to private state.

AWB: The problem is wehther for example you have a declarator or public or for that matter "own", we've had quite an extensive conversation about why you might want that keyword.

DE: IS there an issue on the public repo about htat Jeff? I have feedback on the private state.

JM: I don't think there has been much discussion

DE: In the private state proposal there is a whole issue of having the private keyword and the sigil ... some people are kindof supportive but most people want the whole porposal dropped. Adding the private keyword would maybe help, but ther hasn't been a lot of constructive feedback.

AWB: I have seen people talking about this, the readability of it. Just readability

WH: *If* we have a keyword, it should not be public or private — it should just be something like `var`, `let`, or `own` — but I don't think we should have a keyword here.

JM: I think var/let will not fly. They imply variable bindings/lexical scoping/too much misguided familiarity.

WH: I'm just saying that if we're required to have one it should be one of those but I don't think we should have one.

J: I thinkw e have a consistent design without them

AWB: Final though, if you could go with own you could use it for both purposes as the sigil. It's private and otherwise a rpoperty.

BFS: I'm hesistate because we have all of these getOWn properties.

MM/AWB: It's the same meeting

BFS: it's not about privacy

DE: the own is not about private properties

AWB: `own` means it goes on the instance without the sigil it's a property, with it, it's a field.

MM: I did misspeak before. I was confusing the concept of being per-instance vs the concept of being an own property. Private state is literally not an own property but it is a per-instance property. I think the way people understand own is the major intuition is that it is directly on that instance as opposed to being something that is inherited. I still think own is plausible and it actually fits will with the story for why we introduced static. The keyword is distinguishing which object are you declaring something about. It also fits with the idea that static could be equally orthogonal. The idea that the sigil is orthogonal to the keyword, where the sigil indicates public vs private and the keyword indicates the place.

AWB: Things without it meaning normal concise methods are on the prototype.

DE: I have in the next slide, even more meaty issues that we haven't resoled. Maybe we're nowhere near consensus. Maybe I can go through the presentation and get to the even mor edifficult dquestions and we can come back to these afterwards.

AWB: One of the reasons I pushed you on this and making this explicit across the things is that it really comes down to a basic cross-cutting thing. How are we maing space in class bodies for other things we'll have in the future?

DE: About the crosscutting design, if you want to talk about that, having a function declaration inside a class, i think a nicer thing would be a private method.

AK: let's move forward with the presentation

DE: comma declarations could totally be dropped to deal with these issues.

DE: Fields would be added after super. We talked about maybe you should create the instance with all the fields in them up front already added regardless if they are public or private and then fill them in. IN this model whatever the upser constructor returns, that is what gets added as properties or as private state, it gets added to that thing.

DE: The last part of the semantics is that the scope is similar to the scope for a separate method except there is an early error if you include arguments. In a previous version, if you include arguments you get an empty arguments object, as you'd have for a method called with no arguments. The rationale for making it like a method is because we want stuff like `this` and super property access to be possible. Methods have all that stuff and this is good model. I was at some point I was thinking we would want a runtime error, but AK pointed out that an early error would be analogous to the errors for new.target.

AWB: For built-ins or host objects that want built-in like performance, it's still possible for all the really private fields to be allocated as part of the C struct with fixed offsets.

DE: Yes, that's how it should work for base classes. Only for derived classes is the position is more dynamic, and that was the result of this proposal's attempt to maintain the properties I was talking about. However, if you don't do anything strange like dynamically modify the prototype chain or use the super return trick, maps should be stable and ICs/dynamic compilation should do a good job on field access.

(Set vs. Define)

WH: It needs to be Define. Set cannot work for const and such.

JM: There are pros/cons both ways: Users might expect to be able to call a superclass's setter by putting a field declaration in a subclass.

WH: No, that's not what one would expect to happen. A declaration is a declaration.

JM: OTOH: Set is incompatible with supporting const in the future

AWB: There were exploits for object literals. We had to change them from set to define.

MM: The thing that was already widely deployed, Dan is right, as an exploit it was narrow. There is a different way of looking at it, at the time that all this was an issue. JSONP was already in common use. JSONP loads text that presumably is in a JSON format and does or does not pass it through validation and then evals it. The issue is not when the source of the JSONp is the attacker. The issue is as dan was saying is the asme origin privacy protection. Where the origin that is loading it is the attacker and the external source is the defender. What they want to do is provide data that the.... it can't be JSONP, i'm not able ot reconstruct it, i'm sorry.

DE: JSONP is already a huge sameorigin violation.

MM: The issue that Allen is raising, with regard to something can be labeled exploit or security hole, i think that the exploit revealed an immodularity, an anti-modular action at a distance that was surprising. this.foo = 9 is not suprising. a declarative initialization acting as an assignment is surprising. It causes a non-obvious coupling with two separate pieces of code. Being surprised that things are separated is less dangerous than being surprised that they are coupled.

WH: It's the same as the `with` problem. We banished `with`, it has a nasty property that things outside the scope could affect the meaning of assignments. Using set would unleash the same nastiness here.

AK: This particular issue has been discussed I can't count how many times in the last two years. Is there something new?

DE: That is a good point. I want to figure out how we come to aconclusion on it. I think the preference of th echampions would be define?

JHD: Unless we ask people to raise hands....

DH: I don't feel super comfortable trying to reach consensus with people missing

DE: I'm not looking for consensus today, i'm looking to the committee about the fact that we have a split committee

JM: I want to make sure that as we talk through this, the reasons we are proposing/objecting to these things are clear. If the need for define is clear and the need for set is clear we need to be careful not to rathole on either. I guess what I am saying is if there is clearly a tradeoff and neither is perfect lets lower the bar on how important it is

??: Has there been any discussion about making it an error to define a property in this way?

DE: We did talk about this at some point, we would check if the property already exists and make it an error to overwrite. It would have some performance costs, it would have to be dynamic. I

JHD: it would also mean every public field I added to my superclass was a breaking change

??: True already

DE: it would help for exactly that breaking case, you'd see the overlap. It's not a foolproof check, you could do a property check and defineOwnProperty, but proxys could interfere as well..

MM: I don't think if you are subclassing the superclass and it's attacking you, or going out of its way to be nonintuitive. You are facing a very difficult threat model one that I intend never to face. I think that subclasses should only subclass superclasses that they are willing to trust. If you can't trust a class, compose with it. If there is something above you on the prototype chain, trying to defend yourself down the chain is very difficult, i just avoid it.

DE: I wasn't talking about security

MM: That's actually the point I want to make. The coupling is the problem I want to point out. As an engineering concern, the fact that you get coupling through a proxy, i'm not concerned about that.

MLS: Just to follow up on the irreducible cost side of things. If its only an own field that we concern ourselves with, the object you get back from the super should have a fixed shape and you should be able to bypass.

DE: Sometimes... its an improvement over the status quo

MLS: not syaing you can always avoid them, but in the common case you can bypass the costs

AWB: how do you know that?

DE: We don't know that but we could have an inline cache that does a combination of verify that has this in class which doesn't include the property from before and then add the propertty. We could say in spec language if hasOwnProperty throw a type error, next define. That allows define but avoids the bad expectations about set being called.

MLS: if you can get additional safety from having the define behavior it seems worthwhile

DE: I don't know if that will make people who want set happy. Some web standard had in the explainer or example, it had an onMessage thing which was just using the method and expecting it would call the setter and work.

MM: I think there might be a surprising three way coupling of design issues that i haven't seen before. let me ask for the people who prefer set semantics. I want to raise this question. I want it in the notes. If we did use the own keyword, such that the syntax were own x = 8, would you agree if the meaning of that were set woul dbe confusing. because, if the meaning is set, the result might not be an ownProperty

JHD: I agree. I hadn't thought of that. Would the define folks feel comfortable with own foo = bar being define and ? being set.

WH: No, we should not have two of these

DE: We could have = for set and := for defined

JHD: the semantics I need are set, and I don't want a constructor

AK: The best advice I can give you Dan, choose one, go convince the people that want the other way

DE: I have tried to do that and I have failed so far.

AK: I'm not sure this is going to get us there, most of the opposers are not here

JHD: let me clarify my position. if the token is = it must be set, full stop if the only option is define, it's subpar but acceptable. if both are aailable, i'm also comfortable with that.

AK: its really best not to say things, i will not

JHD: I apologize, I meant full stop as end of statement, not that i wont entertain discussion

JM: Babel has had for about an equal amount of time both set and define because originally the propsoal was set. In neither case have we had any confusion. This is actually rarely a concern either way. WE should probably focus on concrete concerns given that we have tradeffs with pros and cons.

WH: I find these things analogous to lexical scoping. If you're inside a scope and you have `let x = 5`, I would be very surprised if in most cases you got x with a value five, but if there were a setter of x in an outer scope then the setter were called. That would be utterly bizarre to me. This is reason A why it needs to be define. Reason B is that const and types and such will not work with set at all, and there is no way I can see to make them work.

DE: As to the multiple options thing, :=, = or own =

WH: I'm willing to be flexible with the syntax to use for initializers to make it obvious that they are defines.

DE: Multiple versions is not sufficiently motivating, its' obscure.

DH: We would need a very strong justification to have the two. The bar is pretty high for that. You were looking for advice on how to break the log jam? I've often found that getting people back from the satement of their position to the constraints that lead ot the position, taking a pass at those can help. You have to collaborate well, but it might be worth another pass, really trying to get people to state why they hold their position. This isn't a thing that's going to go great on a github thread but i tmight be useful to get a clear.... if you feel we've reached a stalemate and you can find the criteria to resolve it. Maybe dig a little deeper to see what is leading peopel TO their opinion. Its' not surefire, it's a practice I use.

DE: Concretely here, I agree, what is the right way to dig deeper.

DH: Take people who have had opposing opinions and try to capture those opinions.

DE: I did this.

AK: For me Jordan didn't do a great job of articulating it, do you have a fully articulated version of his concerns? Is it just that = seems like assignment?

DH: That's worth engaging with. We have multiple uses of = in JS and they don't always make sense.

AK: In a param list in a function it doesn't mean that

MM: When I brought up the point of own with = I was proposing that the own be mandatory with the consequence tha tthe confusing expectations go away.

JHD: That falls into the other thing I said, if we get a define semantic that isn't confused with assignment, fine. It's not ideal, I want set, if I need it I have to do it in the constructor. That isn't an obstacle to the proposal.

DE: I thought if we only had := and not = it would be unacceptable to you.

JHD: I'm sorry if I phrased it that way, that is subpar but I don't find it unacceptable.

DH: The other part that might be helpful.

CM: This kind of ties with what Jeff said. I'm concerned about our awareness of what users think. We have an availabililty bias by talking on github. Are the typical JavaScript developers even aware of Set and Define.

TKN/MPT: No

CM: I would submit people think it is a Set and end of discussion

JM: Let's acknolwedge that we can go rounds on this speculative and subjective thing for a long time. The compelling thing for define isn't the tradeoffs that go away. There is a real future compatibility problem with const in presence of going with set, that was the convincer for me that define is the way to go. That seems like it should be stronger than these concerns that are hard to substantiate.

DH: Just to follow up, Set vs Define is a red herring. Nobody including half the time experts of the spec are thinking at that level. They are working in the conceptual space they are in. No matter what, they have no expectation that it will trigger something up the superclas chain. As I am writing my code am I thinking at all about the fact that a field Iv'e described could be triggering a setter?

AWB: We've seen this over and over again in writing spec text, people don't think about it.

WH: This is the `with` problem once again. Users may not know the difference between set and define but don't expect their variables to be stolen by outer scopes.

AK: If you're tyring to get Set behavior you'll have to go learn about it

MLS: A lot of the confusion goes away if there is an error.

DE: We actually had those semantics in a previous version of this proposal, where it was an error to add a field if it was there in the object. We ended up removing it as it seemed redundant, and creating an implementation burden (you need a different set of ICs, for one) but we could revisit adding it.

JHD: All of the existing compliant code with the spec will have this.foo = bar in the constructor. If I try to use public fields, if I am subclassing a library using a setter on the prototype chain, that will be confusing. Maybe i'll just move stuff into my constructor, but if I do this.foo = bar brings about the problem again. The mental model is that I think users will hold is that this is something I am taking out of the constructor and putting in the class body.

WH: That argument means you can never improve the safety of the language.

MM: I want to probe that intuition again.

JM: Refactoring expectation hazards do seem like a pretty compelling argument aginst define. However, do you really think that concern would be mitiagted by a := or a keyword?

JHD: Yes, that would mean I need to learn new information and this information can describe set and define? Looking at other code that is already doing it won't show me about those differences.

AWB: If you've said this.x = 5 in a constructor where you've inherited that class with a setter that isn't even creating an own field.

JHD: it could be.

AWB: the constructor is probably setting...

DE: Can we move to the next topic?

DH: Can we try to actually... along the lines of what Maggie is saying, take some examples and glean from them what you think the intended meaning is. I fear we too easily get into abstract intuitions.

DE: Not clear to me

DH: maybe the problem is that nobody ever uses setters

DE: We have them all over the place

JLZ: it doesn't come up in practice much

DH: What I mean is more, look at real code and see... put yourself in the position of the person writing the code and imagine refactoring scenarios. Put yourself directly in the drivers seat of the code.

DE: IT's not clear to me how to do a representative sample of code.

JHD: is this an example? (displayed a constructed code sample that showed the observable difference between Set and Define)

DH: no, this is not a real codebase, that is contrived. If you look at a real codebase you can see where the author's head was when they wrote it.... nevermind.

BT: Also want to say you could look through a bunch of typescript code to look for this pattern. I would not be surprised to find this, TypeScript does set. I wouldn't be surprised to find code that depends on that. That could be interesting data. Typescript has had set semantics for 5 years now and there has not been a single issue filed on it.

JM: I really do think set an defined are pretty equal tradeoffs.

MPT: Can someone in the room?

JM: If we start looking for examples, we'll look for examples that follow the semantics of the platforms they use. It's not going to give us a real sense. especially if we're worreid about refactoring. I don't think this will move us forward on this frankly subjective discussion

DE: Another thing that would be hard to me to figure out from there is that Jordan's intuition would have different refactoring issues

AK: Own is a nonstarter and := also is not because why is that there. In the future, have a narrow set of things, don't ask all the questions all the time. You have narrowed on what you like to do. Maybe you can figure out how to move that forward convincing those we are not in agreement.

WH: I don't think we should dismiss `own` as a non-starter. It could be a compromise solution.

MM: I'm leaning towards own

BT: I like own

MPT: All I was going to say, not that I don't know the difference, can someone write why the average developer would want define over set? Wouldn't people expect setters to run, based on the fact that most people don't really get the JS object model and the other operations that you might do?

BFS: I can speak for Node core, that we don't want lots of interception points for setters to be called in places like this

MPT: not for people who know a ton about JS

DH: I don't think it's about an understanding of th eoperations. Its about what I'm thinking about when I'm declaring a class or a field, i'm declaring something on this class, i'm not thinking about the inerhitance hierarchy. It would be really suprising if something someone else code changed what I was trying ot set.

MPT: That's all that matters to the average developer?

AK: this is what Jeff was saying...

BFS: We don't really know what the average developer expects. This is not something we should be stating. This isn't about intuition. This is really about what are the advantages of these things. I think it should be define bceause basically working on node core, people do things do their prototypes and it breaks internals because node hasn't fully harded them. It does things in very suprising ways either to the developer or people who are.

MPT: At the end of the day we're asking if people are worried about a setter climbing the inheritance chain.

DE: In this committee we have to make small decisions all the time about which semantics are better, as experts

MPT: Having heard about all of this, go ahead and let it be Define, you have good implementation details. I don't think this whole own := keyword helps the average developer does not care about the difference between those two things. They have to go figure out what that new = is in JS. Just let it go.

WH: You asked earlier how this would affect average developers: When we have const, it would be very strange if we either cannot add it or have to make it work in a different way from non-const.

JHD: If const foo = bar uses define and foo = bar uses set, I agree that would be confusing.

AWB: As was mentioned when you get private into this, it doesn't have the equivalent of set. It's always going to be like a define. Maggie is talking about consistency across the whole thing.

(Topic: reflection of private)

DE: Should private state be reflected? Our current view is "no", but you can define and use a decorator that will allow reflection. Brendan thinks perhaps we should swap them.

WH: No, we should not swap them. Hard private should be the default. I don't want to have to write `IReallyMeanPrivate #privateFoo` to get a hard private field.

BFS: Node wants hard private.

(Class initialization evaluation order)

DE: Next question, when should static initializers run--top-to-bottom, left-to-right, or afterwards as discussed in Munich?

DH: We need to deal with how this will affect decorators.

JM: we should be able to reference the class name in the initializer

DE: If you have a date class and you want to have a default date as a static property, you could have it be that the date class is visible in the scope where the intiailzers is executed, you'd be seeing an unfinished instance of the class.

AWB: There wasn't a lot of reason do this one way or the other in ES6. We did not want it to be visible during evaluation in the extends clause. Computed names, eventually, if I remember right, we removed all kinds of error checks because we also rmoved them from object literals. I suspect we could bind the name at class definition time before evaluating any computed name expressions.

DH: What you have prototyped in V8, makes it impossible to write `class Date { static epoch = new Date(0) }`? That's basically fatal as far as I can tell

AK: Correct

DE: This is not even fully checked in

DH: I'm just wondering if people are saying it's on the table to say that you can't reference the class in the initializer.

DE: If you can do this, you'd be observing an unfinished version of the class. Maybe for the restricted case of just the static things, since they are properties on a single object. Maybe that's okay? If we made them visible for all the computed property names, then that would allow the computed property names to observe a very unfinished class.

JM: We have talked about this in the past and agreed that the partial initialization is a little weird, but ok for static fields

AK: Is there anything else happening other than adding properties to the constructor?

AWB: If you refer to the class and you try to instantiate it that probably wouldn't be good

AK: To be clear, the function is done being created; the constructor is there syntactically, and it's other properties of the class that would be added later potentially

BT: You can instantiate it fine... it might not have all of the static factory methods on it

AWB: it might not have the methods populated on the prototype

BT: The method should be

JHD: The way we did it last year was the final step was static fields

BT: The Munich plan was you would see the class without all of its static fields, you could observe them getting added as the static initializers were evaluated. Everything else about the class was done, including decorators.

AWB: Computed names would evaluate as part of the instantiation.

BT: computed names was the first step, and evaluation of static initializers comes later.

BT: this is why the class finisher exists, so that static properties are evaluated after the class decorator (you don't get a totally unfinished class that you're using in the initializer) but before the finisher (so the finisher could, for example, freeze the constructor)

AWB: I'm sure you can come up with an ordering.

KG: I don't want to speak for other implementations, but having all of these passes.... reasoning about the code becomes much harder.

AWB: I raised... the intuition of users looking at a class definition that expression execute in order.

BT: That doesn't exist.

DH: I'm not sure how useful this conversation is going to be. We can start. We're about to do the same thing we did last time. In practice a lot of these expression are totaly side-effect free, like, look up this symbol. The order in which side effects appear willbe totally unobservable because there are none. If we go for the simpler evaluation, of things that in practice aren't going to have side effects (like names). The class is not in an appropriate sate to do common things you're trying to do. Many more programs will break as a result. I can't use a freeze decorator, for example, bceause I don't have access at the same time. The  multi-stage evaluation order, being the thing that allows you to do the most number of things, decorators, as well as being able to refer to the class in initializers, will let things people expect to work work. Yes you can do convoluted side effects in those expressions but I claim in practice that is going to be less common than I tried to write static epic = new Date, and something happens because it didn't get the decoration or it was in the TDZ. I was happy with the Munich plan, this allows the class to be in the right state at the right time.

AWB: As long as like thing happen in intuitive order, for example, the decorators in fact fire in order, or the own field initializers or if you have comma... as long as those things locally happen in order I think we're okay

DE: Do you have anything to add to this point?

KG: I don't have strong opinions. I don't know about decorators but if people are going to want to refer to the class.

WH: C++ has struggled with this a lot, creating multiple phases of evaluation. It's a very complex set of of problems. After a great deal of work, their solution still generates some really nasty consequences: you cannot take the sizeof of a class when defining a constexpr constant within the class, or you can't call a constexpr function defined within a class to define a constexpr constant within the same class.

AWB: It's why in earlier proposals I chose to exclude static fields, because they start to introduce many of these problems. It's really complicated and the staging..

DH: To be clear, I'm representing my best interpretation of the problems but we do need to take those requirements into account

KG: I'm not going to hold things up because I think left to right is better.

DE: You're the expert in the world right now

KG: Implementing it with several phases is obviously harder. I don't think it will be impossible.

DE: So, great, we are sticking with the Munich plan but I am glad to have talked this through, for a number of months this has been outstanding.

JHD can you restate the plan of record?

DE: The POR is to evaluate the static members afterwards

DE: As an alaternative: As we discussed during the break, one approach would be to use a keyword to distinguish the location of where the defined thing goes: none → prototype, `own` → instance, `static` → class object. To avoid mistakes caused by forgetting `own`, for variable definitions we'd allow `own x = 5` but not `x = 5`.

MM: Allen and I are planning to actually write up this proposal

DH: I believe it would be good to have a future face-to-face discussion about this

DE: What if it was a pull request?

AK: I have a random temperature taking that most developers don't know what own means.

DE: Will it be googable?

MPT: I think that 30% of developers know what own means.

MM: That is way higher than I would've expected, that's great!

MF: Did I miss it? Did we ever establish on the evaluation order is actually web compatible?

DE: That is a legit question.

BT: There was only one questionable issue.

DE: We have not shipped it, we don't know

BT: It only impacts if we can decorate object literals

KG: It also affects consistency

MF: We don't want object literals and class declaration orders to differ would we?

DE: We'd need a champion to propose the real spec text for something driving the change in object literal stuff

DH: Brian and I will look at getting spec text written with Yehuda. We'll do that as quickly as possible.

DE: Thanks for bearing with us on this difficult topic

DH: Thanks for driving it!

#### Conclusion/Resolution
  - Sticking with plan in Munich meeting for order of evaluation (static variable initializers run after computed property names)
  - BT to work on separate spec text proposal for the object literal ordering change (computed property names before values) to match Munich plan
  - Eagerly awaiting a proposal from Allen and Mark about the syntax issue. This might lead us to make Define acceptable semantics
  - Work is ongoing on the Babel implementation of private state
  - Proposals remain at Stage 2

AWB: That is the end of the Agenda.


## ECMA-404

CP: The Japanese raised a long list of objections. Allen wrote a diplimatic and brilliant reply. A bunch of editorially corrections need to be made to the document.

WH: Is the list of objections longer than the standard?

CP: Yes.

AWB: Close

CP: Some of the objections were minor editorial mistakes. Some where small changes requested that would break the world

AWB: One or two was like, the scope of this should be something much different

WH: In all the years I've been here the Japanese delegation has consistently been very diligent. I'm very impressed!

AWB: Yes, but not until the very end when you're done

MM: Yeah

AWB: Also with 404, there was a bunch of bickering in IETF that ECMA didn't normatively reference standards enough

BT: Wait, there are politics around normative references?

AWB: Oh yeah

BT: Should I be extracting... we normatively reference unicode. should I extract tit for that?

MF: At least some new emojis!

BT: we need a sigil seagull!

DH: We should have JS emoji

?: And a WASM one

SYG: TC39 hats!

## Conclusions / Resolutions
 - Normative references in spec text are apparently political across specification organizations (at least between IETF and ECMA)
