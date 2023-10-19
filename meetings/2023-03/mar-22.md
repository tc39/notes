# 22 March, 2023 Meeting Notes

---

**Remote and in person attendees:**

| Name                 | Abbreviation | Organization   |
| -------------------- | ------------ | -------------- |
| Chris de Almeida     | CDA          | IBM            |
| Ujjwal Sharma        | USA          | Igalia         |
| Istvan Sebestyen     | IS           | Ecma           |
| Waldemar Horwat      | WH           | Google         |
| Luca Casonato        | LCA          | Deno           |
| Ashley Claymore      | ACE          | Bloomberg      |
| Richard Gibson       | RGN          | Agoric         |
| Daniel Ehrenberg     | DE           | Bloomberg      |
| Guy Bedford          | GBD          | Fastly         |
| Daniel Minor         | DLM          | Mozilla        |
| Yulia Startsev       | YSV          | Mozilla        |
| Frank Yung-Fong Tang | FYT          | Google         |
| Willian Martins      | WMS          | Netflix        |
| Ben Newman           | BN           | Apollo         |
| Ben Allen            | BAN          | Igalia         |
| Michael Saboff       | MLS          | Apple          |
| Peter Klecha         | PKA          | Bloomberg      |
| Jordan Harband       | JHD          | Invited Expert |
| Justin Ridgewell     | JRL          | Vercel         |
| Linus Groh           | LGH          | SerenityOS     |
| Mark Cohen           | MPC          | Netflix        |
| Sergey Rubanov       | SRV          | Invited Expert |
| Ron Buckton          | RBN          | Microsoft      |
| Nicolò Ribaudo       | NRO          | Igalia         |
| Luis Fernando Pardo  | LFP          | Microsoft      |
| Philip Chimento      | PFC          | Igalia         |

## Election of the 2023 Chair Group

(no notes for this topic)

### Conclusion

- Chair group and facilitators group accepted by acclamation.
- New chairs are
  - Rob Palmer
  - Ujjwal Sharma
  - Chris de Almeida
- New facilitators are
  - Yulia Startsev (leave of absence from March)
  - Brian Terlson (leave of absence from March)
  - Justin Ridgewell

## Import reflection update

Presenter: Luca Casonato (LCA) & Guy Bedford (GBD)

- [proposal](https://github.com/tc39/proposal-import-reflection)
- [slides](https://docs.google.com/presentation/d/1F62Jia5erIm6m6nqkm_2pFIlNLOVF0E4ewrVRytSJEs/)

LCA: Hi everyone. This is the import reflection update for this meeting. We’re currently Stage 2 and Guy will be presenting. So I’m going to split the presentation into two parts. The first is the general concept of import reflection and import phases. We have sort of figured this out during the module meetings and the second half is going to be Guy explaining the scope of our proposal and how are we scoping and what the plans are for the future. So a quick recap on module loading. Module loading can be thought of as happening in approximately five stages. These are the resolve, fetch and compile and attach evaluation context and link and eval stages. Some consider may be more stages in-between or may combine some of these stages. But I think this is a good overall representation of module loading. This is what we will be going with for the rest of the slides here. Let’s go through each of these stages. The first stage is the resolve stage. In this stage, we take the import specifiers from the refer module and combine them with the referral module to create the new import specifier or whatever the resolve asset for that module is. For example, this would be doing import map reds legislation and URL resolution in the browser or in node. The next is fetch and compile. This is where the asset that is resolved is fetched from the network or disk or loaded from some internal bundle in the application. And is compiled, for example, JavaScript is compiled to – is parsed and things like that. On the web is network fetch where CSP is enforced and content security policy on the web would be enforced here at the web stage. At this point, your module is still completely stateless. It can be instantiated multiple times. This is the source code and there’s nothing to it. Next is attached an evaluation context. The source code loaded is turned into module instance that has the identity. At this point the module link space is attached and under various things like the module graph are at this point. However, nothing is linked yet at this point. The next stage is linking. This is where all the module instance is static imports are linked by means of doing the module loading steps for all dependencies and linking them together. And the final stage is evaluation. This is where the module source is executed and link bindings is accessed and used. If there is wait, at this point we wait. And once that completes the module is considered to be Completely evaluated. The current state of imports is that imports currently unconditionally execute all of these five stages. So if you call import foo from “foo.js” and compile it and take it into account EXP and evaluation context and create the name space and link the dependencies of the module and evaluate the module. At that point can be used from the module. There’s however many scenarios where it makes sense to choose to target different loading phase when importing. For example, you may not want to be evaluating immediately but want to defer evaluation until the actual use of the module. This is deferred evaluation. You may want to only fetch the module but do the instantiating yourself to multi instantiating a given choice and instantiate and not link it and manually link it for other modules for mocking or timing or testing. These are different loading phases. If you want to target the phase, this is asset references. And this is sent to committee in the past and statically analyzed with URL and permitted URL and support import maps and portable. Another phase that can be targeted is the fetch/compile face and targeting the import source. This would be resolving and fetching the source. If this was implemented the full host resolver could be used and full host loader and CSP is for all other imports. The source is used for multiple instantiation and talk more about this later. The next step is targeting instance imports so this is where you’re targeting a specific instance. This is an instance that represents a module record object in the spec. This can be met with linked to – it is evaluated the first time the module on the name space is accessed. The final stage is targeted eval phase. This is the regular imports we’re already familiar with. So to be able to target all of these different phases, we considered multiple ways to express this in the language. And we ultimately came to the conclusion that this should be represented using syntax in the import statement. The reason for this is the loading phase that you’re targeting can influence the valid syntax the rest of the import statement. For asset references and source import only defeat binding can be defaulted. And no module space can be affected. Only one possible valid syntax in this case which is the default binding syntax. For deferred eval imports only start at name space is imported and here the phase is influencing the valid syntax. Because of this, using something like import assertions or attributes would be confusing because the valid syntax at the start of the import statement would be influenced by a completely customizable option at the end of the import statement. The import attributes and import assertions are modify module loading. We will talk more about this in the next presentation. And import loading phase exit from the module loader at the predetermined loading phase. I’ll explain more about this in a little bit. And we will cover it later in a later presentation. The syntax that we have come up with is this one. It is import phase keyword and then a binding and the binding could be a default binding and could be a structure and could be a star as namespace. It could also not exist at all, the binding, if there’s no phase specified or regular import. From specifier, this is the specifier, you’re importing and with or assert attributes. This is the import assertion/import attributes proposal that will be the next presentation. The phase informs syntactically bindings. At the beginning of the import statement. This is designed to make it easier for syntax highlighters and to be able to unambiguously binding depending on phase. The syntax was designed in coordination with other proposals that are covering the space. And with import assertions and with deferred evaluation on the modules call that we have every two weeks. Then dynamic import form mirrors the static form. The difference is that phase is an option in the options bag where it is passed as a string. This is the same. With again here maybe asserts or with depending on what the import assertions proposal is. And this phase syntax is a convention, not a specification. We don’t want to – this is exactly how all imports must look for future proposals but right now this is a convention that we have come up with that covers the cases that are presented so far very well. So one thing did I want to mention here?

GBD: So we’ve really tried to simplify the scope of the proposal by considering it as existing within these different type of phase modifiers that can also exist. For this proposal itself, we are only currently now specifying a source phase for the module import. It’s module source imports and specifically the initial use case that we’re looking at is for web assembly source imports. And so to explain as we have mentioned many times before, what these web assembly use cases are. Next slide. The motivation for the source imports is that currently on the web when you load web assembly, you need to be using the fetch function or using run time that doesn’t have fetch or same features. You will not have a portable way of loading web assembly modules. It’s not statically analyzable and you end up having to use all of these complex loading mechanisms and new URL and meta URL and try to understand all of that. And even with the web assembly integration you still need to get access to the web assembly.module source objects that not source objects that are able to be much instances instantiated with different memories and substantiated with different import and resolution rules that weren’t necessarily exist within the host resolution. There’s some quite specific use cases around that. What does that look like for web assembly if you consider importing ES build we’re using the source phase and loading the web assembly module in the source phase. What we get back is already what is the specified in the web assembly JSI on the web that is the web assembly module object that represents fully compiled but uninstantiated and you can pass the imports to the instantiated method and do that with what you specified and spaces and you finally get back the executed module. The benefits with the new syntax is build force can understand with the web assembly modules and optimize that and understand that and make sure bundling process. Ergonomic to develop this. It’s clear how you load web assembly to look up the multi line process used today and it’s really the tooling and benefit that it’s integrate into the tooling in a way that all types of different tools can understand and work with this as a standardized way of loading web assembly in the instance uninstantiated form and we have the security benefit that is source is able to be tied to the original location in the web and integrated with policies currently today when you do compilation and policy that a lot of people don’t want to have. That’s the kind of motivating use case we have. The source import. Future we have this for the modules and we don’t have this. And the motivating case is the one that we’re currently pushing forward as the source reflection and the JS module source reflection would have to be basically what is the currently called the compartment layer 0 and that would be a module source JS object able to represent the same corresponding concept for JavaScript modules where it is fetched and compiled but not yet actually evaluated or associated with the evaluation and can still be linked against any module. So that concept is what we would need to build against if we want to – when we want to expose the source import or JavaScript modules. The specification is ready for review. We have built it on top of the modules refractory work working on and able to expose this as a custom object on the module record that represents the module source and allows any types of modules to have their own source representations. And so it’s this module source object slot on the module record and this is able to be populated during the host load imported module and integrate the web assembly module and all the sources as necessary. So what do we do for JS right now? At the moment, if you import a JS module at source, the plan is basically just to throw and add the function as soon as we have the source available for JavaScript. We expect to have module source available for JavaScript. That involves some degree of alignment with the other specifications that are happening. But once you get that for JavaScript you will be able to have some very convenient work flows for being able to re-instantiate – and allow module virtualization for JavaScript in a very easy way and getting those same static analyzability benefits and you know what models are virtualizing. There’s is one question with spec point of view with ordering where we have these source phase modifiers imports next to other imports how is that going to affect load ordering? Strictly speaking we don’t specify load ordering although we do trigger loads through the host. If we want to maintain a clear ordering in which those load module host calls are being made. Next slide. So here is an example if you import two modules A and B are the first two modules you import them as source in their source phases but then you have other modules that are being imported in the ground for the same time, the source phase won’t load dependencies. It isn’t assuming the linkage of the dependencies. It will load the single load and then stop. And if you import the module it will import the dependencies. The order in which the load hook to the underlying environment is being called will still match the order of the import statement. We had to do a bit of work to ensure that that will be maintained so that at least there’s a relatively understandable way in which these loads get fired up so we’re not doing something as a separate process. And then also to mention again as Luca mentioned with regards to the phasing and now it represents an earlier phase of the same module. So this item property of imports is fully maintained where if you import a module and whenever you have the same module, you have the same source. The source is part of the subset of the idempotence of the module load itself. There’s no reinterpretation going on and no multiple source objects that exist for the same module. There is one source object and then all instances of the module will be based off of that source and you can share the compilation and you can share all of that loading process for the module and not going to be dealing with repeated work unnecessarily and this is also what distinguishes these phases from other things like import assertions (inaudible) where it can change what you get. This is the distinguish between the left-hand side and the right-hand side in the specifier. So we are looking for Stage 3 reviews. We already have a bunch and ready to get that review going and really appreciate some help with review. Hopefully to be able to work towards stage progression in the subsequent meeting. Thank you everyone. Any questions?

JHD: So the slide that you showed where you had import source and produced a `WebAssembly.Module` - it seems really strange to me that syntax would produce an object that doesn’t come from user code or from 262. Like, I understand there’s going to be differences in the properties and attributes of the source based on the module type and whether it’s WASM or JavaScript or something else. It seems strange that a complete object and inheritance structure could just be kind of magically snuck into the syntax this way. I wonder if there’s those that care about deniability and whether an object is not deniable because it can be produced to syntax this seems like it really opens up the floodgates of allowing any object that a host sticks in there becomes undeniable.What sort of design consideration has been put into – is there a way to have that produced, the kind of object specified in 262 that still enables the capabilities specific to the module type?

GBD: So if we had a source object for JavaScript that we could also reflect for web assembly, that could be an option. Right now we do not. So that’s not an option for us right now. If there was alignment on that and it could be done in a way that were to be compatible with web assembly, without sacrificing the use case and without sacrificing the ease of use, that could be an option. But short of the fact there’s no current proposal for that or past proposal for that that is clear right now or that is currently being proposed at this same stage, it’s difficult for us to rely on that kind of requirement for our specification process.

JHD: I guess I’m sort of thinking it could be an opaque object that you put into what you want, and it spits that out.

LCA: The module, I don’t think we covered this, you want to reflect the bindings on the source in code. Here you want to know what imports this module is requesting and what exports it is requesting. In this case web assembly.module this opaque module would have to specify that and represent all possible types.

JHD: To clarify what I was suggesting is that the opaque object you use with another API to get the object that has that stuff. 262 wouldn’t have to specify any of that stuff. It would hand you the equivalent of a symbol. It doesn’t have to be a symbol, and another API can use that as a key.

GBD: That would actually be a little bit more similar to how we imagined the asset references proposal behaving and that would be a different phase reflection and a different proposal and a different approach. The benefit of this is that because you are getting it at the source phase, it means you know what you’re getting back is an object that’s a compiled module and it’s being fetched and ready to be executed and linked in. That’s an important distinction with the source phasing, you know what you’re getting back is the module that’s in the actual module system of the engine, it knows it’s a web assembly module and knows at what stage it is at.

JHD: I get the phasing guarantees you’re looking for. You can use the same sort of API and handing a token to get the thing you want. This is not the only way to solve it. It’s the only way to address the concern I’m bringing up.

DE: I’m a little thrown off by the deniability thing. If you import web assembly module you may get web assembly.memory objects and such. If we supported web assembly integration, I think if we’re interested in deniability, the right approach is with the compartment later zero thing where we have the import hook and that can be used to deny access to such phase. Aside from deniability of the web assembly module constructor, do we have other reasons why this is strange?

JHD: Yeah, I mean, that’s just – that was just when I was surprised that hadn’t come up from the folks from whom that is important. I think that is strange. That’s just not the way that our syntax works. We don’t have syntax in 262 that produces DOM objects, for example, or anything like that. The objects produced out of 262 are all things that are defined in 262 that may be extended by hosts.

DE: So, for example, with CSS module imports which was kind of explicit goal of the import assertions, import attributes proposal, those produced, you know, CSS object and module things during the import statement. That is HTML providing this thing where the import statement default export is created by HTML. This would be similar. It wouldn’t be the JavaScript specification providing the source, it would just be the Wasm providing it. It’s completely analogous.

JHD: This is different from host code producing things, it’s reflection.

DE: I’m having trouble understanding why import source should be different. For source is only one export instead of multiple. There’s only the default source export.

USA: We have two minutes left for this and a huge queue. I don’t think we can get through it.

DE: Thanks.

LCA: Do we have overflow time?

RPR: We do. We should move to the next one and do it Thursday.

KG: Are we capturing the queue and then moving on to the next agenda item or overflowing?

USA: If that’s okay, Luca, and guy.

LCA: If we have two minutes we could finish up.

USA: Sure.

KG: JHD, I agree with you in general that most syntax should not produce things that are not defined in 262. But I’m fine with it for import specifically. Because imports are necessarily wiring the rest of the world. I can sort of see a distinction between import source ES build than import specific names. But I don’t think that difference is important in practice. I’m imagining a reason to care about that distinction. And I think when you are wiring up imports, you have to care about the rest of the world and it’s fine for reflection, import reflection in particular to be a host define stuff.

NRO: DE already said what I wanted. This is already how CSS modules work.

USA: There’s two more things on this topic, if you can go through them real quick. Next up we have SYG.

SYG: I think I agree with KG here. I think import – specifically the whole module machinery is special. It is the thing that we decided that we would use to coordinate with different assets and different kinds of code in an app. And given like that is its nature, it seems hard to work around the fact that you want the embedder and the host to give you different things via module syntax around imports.

YSV: Would the overflow time be in the mornings or the afternoons?

RPR: Based on people’s constraints and requests. I have the comment here and I won’t be able to attend in the afternoon. So depending on if my point is at all important for the two people who are before me, might make sense to check on that.

LCA: We also have 30 minutes after YSV’s topic currently allocated.

YSV: Perfect.

LCA: That can be overflow there.

USA: Okay for the chairs.

RPR: At the moment, yeah. Not to violate any constraints.

DE: To YSV’s comment to be safe and then continue in that slot?

### Conclusion

Topic will be resumed in an overflow slot

## Import assertions/attributes for Stage 3

Presenter: Nicolo Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-import-assertions/)
- [slides](https://docs.google.com/presentation/d/1Abdr54Iflz_4sah2_yX2qS3K09qDJGV84qIZ6pHAqIk/)
- [PR](https://github.com/tc39/proposal-import-assertions/pull/131)

NRO: Import assertions that being demoted to Stage 2 the last meeting in January. The reason is we integrate in the proposal with HTML, we found that import assertions was not well and HTML needed and use them to affect how a model was – the purpose of a model. And there is potential solution to that, just delay some constraints that import assertion proposal had. The first one is that – the second one, the last bullet point is import assertion must not influence the interpretation of the module and need to remove it.

NRO: And follows that import assertions should be able to be part of the cache because that affect how the model is working. And unfortunately the solution is not easy. When you remove these restrictions, some of the parts of the proposal start falling apart. There are two main consequences. The first one is should the assertion list still be extensible? This is a question that came up multiple times when discussing removing the restrictions. Second is ignoring unsupported assertions still a sensible choice? Right now import assertion proposal cost only the assertion that the host support. There is some – there is a list of known assertions to be able to fit. And the unsupported assertions are just. And can we still call them assertions or should we call them something different? To the first point. There are two different access in which we can divide how these modifiers for imports with the host would work. One is that if they can affect or not affect module loading. And whether we want a full object that can be potentially extended in the future by hosts by adding new assertions here or if you want to restrict these to a single string or the final set of assertions and I’m bringing these up because the – if you remove the restriction on affect model loading, the proposal become potentially more powerful so we might want to restrict it now. However this question is already being discussed many times in the past during the proposal so the group doing the plan to change our answer to this. So the proposal will still keep having the options. And because there are different potential use cases that could come up in the future and we don’t want to affect it. There is not only time. For example, that was considering a resolution mode assertion. Only import and some request for this. Have some ideas for how they could proportion assertions in the future. Not necessarily specific but some ideas coming from them could make sense with the HTML, for example, importing some specific layer of the module. We had many cases being in the import reflection proposal since it was not clear in the past and fitting import reflection and what is for import assertions. We decided to keep the proposal at the same level of accessibility as it already has. There are some concerns about these because this would be full object whose case and values are up to the host and these might cause code not to believe portable. And with the layer with the imports wouldn’t work in JS but however there are already examples of objects that are complete host. And there are many and import methods and object we provide only for the host. And can be problems with this. There are venues to ensure cross host compatibility for example WINTERCG and browsers. And the current situation where, for example, custom import specifiers to understand how they want to modify the imports. These would for sure not be a step back. And also we can impose minimum level of portability such as restricting what should happen when it is defined. This is the proposal by saying if there is a type attribute, that is JSON the host is – and define their own attributes and can be convention to make sure the users are aware when they’re using something that is standard and when they’re using something that is like custom to extension that was not – such as code in the name and matchable. For this question our answer is not change current proposal. Second question. What should happen with the import assertions? We thought right now unsupported assertions where unsupported means unsupported by the host. And this is because it’s generally okay to ignore unsupported the assertion since the general expectation is the assertion will pass – if it’s unsupported you get maybe less security but the code will not support it. And that’s the motivation for the new changes. Not really. Because now assertions could affect what the model is. The assertion could give you a completely different – could give a completely different model. For example, if we have import type – an import with the type just an assertion, HTML could send to the server and accept HTTP header telling the server to expect the model. If the type attribute was not supported, it would send such header and the server could decide to serve a JSON model. The proposed solution is throw on unsupported assertions. It might make it stronger. We believe to do it when there is a problem and let the user see some strange errors. And finally are they still assertions? Well, no. I know that in English assertion has a more general meaning than what it means in most other languages. But come from earlier, those kind of assertions, some should be true. If it’s not true, the execution of the current program or function should just terminate. And these attributes are not just about actually affecting how modules interpret it. And that’s why we’re now referring to the proposal as import attributes than assertions. We want to propose changing the keyword from assert to with to actually reflect the assertion. And while that would ideally give us solution, there’s the potential that compatibility risk. And import assertions have shipping limitations. You can see it’s been more than one year, it’s been two years for Chrome. So we still think that supporting the keyword is the best choice we have. And that the compatibility risk while there here, might be smaller. For example, yes, Chrome supports import assertions. Does not support it in any other browser. At least on the web, there is some reduced risk because usually support in only one browser have less usage than the support with the browser. Node.JS has support for import assertion. Waiting for a signal. Given the changes of the proposal, they are waiting to flag them again or start working when used to see if it’s actually possible to move away from the certain keyword. And mostly waiting for us – they’re waiting for the meeting to decide to flag import assertions or not. They will have the next – and the third Deno seems much harder to integrate at the moment because Deno doesn’t have changes and it’s a server plot form that is specific and they can fully use import assertions. So how do we deal with all of that? We propose to have a very slow migration path here to start shipping with the with keyword and still existing implementation to also keep the old syntax. This would probably mark normative option in this and legacy so it’s clear that only have for network compatibility and not what the proposal is. Not something that we can remove right now and maybe we will be able to remove it in the future if existing usage goes down enough. If it is possible, that will be probably years, maybe after the proposal has reached Stage 4. And with this path, we must also be okay with the possibility that we never get rid of the assert keyword. And we think that the choice even if it is two different ways to express the same thing because this proposal is not about assertions anymore. So those were the changes we made to the proposal since the last plenary. And this is how we would like to go to ask consensus to go back to Stage 3. I have a few bonus slides. I prepared them before knowing about Luca’s presentation about the import phases. I will go through them because they explain different with the import assertion proposals and how and why these modifiers should be something else and not something at this part of the import assertion. So import attributes. This is before seeing the presentations and again we think they should be two separate parts in the same text. And as you already saw, we have all of these phases that go from resolve up to evaluate. And they’re covered by different proposals. Maybe we’ll not have them. It’s all the phases we are thinking about. And how are import phases different from attributes? First of all they don’t stack. You usually can make sense of different import attributes for the same import. It doesn’t make sense for different phases. You can’t have import the first source from – as Luca mentioned before the effect of the syntax. It would be quite surprising if the syntax was affected by something that looks like some options. Again, as mentioned before, this import phase has keyword modifiers don’t modify what the module is. They modify the phase they’re exposing. Also they can always be advance to the final phase using different ways depending on which phase in the process. For import attributes, they completely change what it is. As mentioned before, the model will give you a completely object is completely unknown of ECMA-262 object. And there is no way to then reconcile imports with different import attributes. They’re just completely different. Potentially are just completely different modules. And also if we think about the cache key that is in ECMA-262 and the final HTML, like, when we have both import phases and attributes the cache key would clearly only convey and specify the attributes and import phase will not be part of that. We want different phases of the same import so actually reflect the same line model. And that is – so just to recap, we think we should not change how much the proposal is probably means hosts that have different needs to support assertions in the future. However, we think it’s better when using assertion that is not known to the host. And not assertions anymore, so we are proposing low integration and changing the keyword. Lastly we plan to keep all the other import phases separate from this. And that’s all. I think we are ready for Stage 3. There is only one potential problem which is during the last meeting when going back from Stage 3 to Stage 2 we forgot to ask for Stage 3 reviewers. I’m not sure how the process works when there were already Stage 3 reviewers for reviews for the previous Stage 3. And asking for Stage 3 again.

YSV: Before we get to the Stage 3 discussion, would you like to address the queue? You have a couple of questions there.

NRO: Yes.This is my last slide. I had another slide that is the proposal still import assertions since not assertions anymore, we plan to rename import attributes. Yet to minimize the amount of changes that we have. And let’s go to the queue.

YSV: First up we have MM.

MM: So first of all, from what you stated about the current situation with regard to assert versus with, it doesn’t seem like we’re stuck to where we need to pay all the costs for a slow transition. You said that the node is willing to reflag and waiting for us. First of all want to say yes, please, the signal from us should be please reflag. Chrome is certainly a substantial portion of the web, but one browser out of N is not the part of the web that’s compatible with only one browser. Never been the mandate of this committee to not break a single browser specific portion of the web. It’s the cross browser web that we’re man dated not to break. Now, you know, Google ship that in good faith. I would also like – you know, like a signal of their willingness to not make a slow transition. That was the first thing I want to say. The next thing I want to say although I’m very friendly to this proposal and want to see it proceed to Stage 3, I’m not willing to agree to let it go to Stage 3 today. I’m not sure if that was being asked for, to go to Stage 3 today. But I’m not willing to do that largely because of the same issue that was postponed from the previous topic which is there’s a whole lot of activity around modules and imports and phasings and different languages and this whole multi-dimensional set of considerations. Very much reminds me of the early days of trying to figure out what classes were in the committee and there were all sorts of ideas and there were lots of monoorthagonnallites and we talked about this in committee and talked about having a modules epic. I think one of the things we need to do to the extent we can and it looks like we can here is until we understand better what kind of process we want to have to coordinate the overall module space, that we should hold things back from Stage 3, having things go to Stage 2 while we’re figuring out the process is fine. But I think all of these should be held back from Stage 3 until we have an overall sense. I’m enthusiastic to see this go forward, I don’t want to agree today to let it do so.

NRO: So with integration, like, yes, it’s possible that we will be able to integrate and make sense not to flag and yes Chrome in the single browser and still like to be – I hope this will be able to (inaudible) careful with that. It’s mostly how it will come I believe from implementers that we tell us if we are able to integrate or not. Regarding the process point, import assertions has never – when we started discussing about how do we coordinate all the models’ proposals and make sure that the proposal fit for us and design around single proposals and group proposals and import assertions never part of the discussion because this is a proposal that just defy itself quite well and that can be easily detached from all the other proposals. Additionally here, we have some urgency with this. We agreed that we had these – like, we discussed about this urgency during the last meeting. This is already shipping in the browser and the other two browsers are ready to ship the proposal. We’re just waiting for us because we had these last minute changes that we wanted to propose after hearing back from HTML. So while I agree with you that for the other people, we should make sure to have some proper coordination. I think this proposal should be able to move forward by itself. Like, we have this regular meetings where we coordinate the changes and make sure that even if we’re trying to work with this process, it doesn't really fit what we're doing, just to make sure all the proposals are properly considered like how they integrate together and to make sure that they are not like creating possible problem in the language.

YSV: Thank you, NRO, I will keep us moving through the queue because it's long and people should look at the time. We have 20 minutes left. Next up, we have DE, please go ahead.

DE: I would really be interested in hearing your response YSV, whenever you're ready to give it. I don't see it in the queue. I was hoping that the regular model calls would be serving as this process. People working on each of the module proposals are engaged in this. We didn't discuss the plan for this proposal and the other proposal. There’s no lack of coordination. If there’s more to explain to the Committee about this, then that's important to do so. But that would be possible with a more concrete question. I disagree that we should only consider cross-browser compatibility issues. So we talked about chrome as well as Deno and Node and I just because a cross-browser is clearly very important. Doesn’t mean that we can take out of consideration other things that are not that. So yeah I agree with the point about urgency. If we do not progress here, then we risk things being in an unstable state. If you can make your requirements for the process more clear, then it would be actionable, but what do you think should be done beyond what’s going on in the regular module calls. Thank you.

MM: Just let me briefly respond to that. Because I know NRO in particular is really – has a lot of expertise about the overall module design space and taking that – interpreting his comments in the context of my knowledge of his expertise, I am willing to go ahead and agree to the stage 3 on that basis. But in general, I’m reluctant to see things in this space go forward until the overall integration and some better sense of the process is understood. Regarding the assertion and breaking – certainly it’s a trade-off, like I said, before deciding not to go on the slow path of retiring assert, I want to get google – I see a reply from SYG, who I see is on the list. I want to get a reply from Google about whether they're – with regard to chrome users to agree on not taking the slow path, and but Deno if I understood the slide correctly is already not shipping assert. There’s no breakage there –

LCA: That’s incorrect. We are unable to ship at this time

MM: I’m sorry, I misunderstood, that does change things. So the wait towards the slow path given Deno already shipping is different than I thought. I’m willing to reconsider that as well.

DE: I want to say, although I agree with your characterization, I don't think we're making the structural error of relying on just a single person. There's at least four or five people in the calls who have a similar cross-cutting understanding.

NRO: I agree with you MM, should get priority for us. Maybe not for the whole Committee but at least for the people working on the proposals to figure out what the process for us should look like.

GBD: Just to mention very specifically for Node.js, there is that need for intent for Tc39 and stage 3 or not, if we can capture in the notes that the existing syntax will be sticking around or how it will be sticking around. We will categorize that in some way for projects to understand how they can move forward because that needs to be clearly communicated at this point.

NRO: Was my representation clear and we need to summarize it or do you need me to clarify that

GBD: If we can just include that in the summary, I think that would help a lot.

YSV: We have one response from SYG.

SYG: So to MM’s question, the lack of cross-browser support is one signal on shipping anything. It’s not sufficient to unship stuff in chrome just because they lack cross-browser interoperability. It has shipped for basically almost two years, given the amount of time we don't have a choice. We're doing a disservice to chrome users if we do not do the slow path transition. We need to start collecting use counters for how much use of import assertions there is in the while. Those use counters need to hit staple release, which I think chrome releases are every six weeks. It takes a week for them to hit the largest population to give us a real picture of how widespread it is and are we – do we have to live with the assert syntax in the near future. Do we have a choice there? Because of how long it has shipped unflagged, there is no way we can just rip the Band-Aid off.

MM: Thank you for that clarification. I remove my objection to the slow path.

SYG: There is – going to the next topic as well, because it's basically asking about the unshipping stuff. There’s – as I understood from the presentation there was a semantics change for the throwing of unknown assertions. So what is your proposal for the slow path of – when you use the assert syntax, does it retain the old semantics.

NRO: Right now the only use import assertion is type, so changing that to throw, separate key would very likely be 100% compatible and we don't believe there would be any compatibility problems with this. So the proposal as of right now uses the new semantics for the old syntax because that's not where we see the risks.

SYG: Also, don't we currently throw on unsupported keys

NRO: No, supported keys in the current limitations are just –

SYG: I’m being slow, explain again why you think the compatp risk is low to change to use the new behaviour.

NRO: The only effectively used assertion everywhere is only type and like there is no code using other assertions just because they don't work in any host.

SYG: Wait, so the hypothesis is that “type” is the only thing that's used, so there is no breaking change to the behaviour, and throwing would not break code in the wild because we can’t foresee a reason why somebody would have even shipped that code.

NRO: Exactly.

SYG: Okay. Okay. So all right. I think Chrome’s position is we can live with the `with` keyword. Think I would like to impress on the rest of the Committee it may be possible that we are just going to be assert for a while because it has shipped like forever even in perpetuity because it's ship for two years. My personal position still stands as like I will be fine with not changing the key word. The semantics I understand. But, yeah, I am willing to squint and just like think of assert as the broader English word assert. But I might be in the minority here. But otherwise I can live with stage 3 with the slow path – with the slow migration path, but I think it's an actual open question whether we can get rid of the assert key.

YSV: All right, thank you, SYG. Do we have responses or questions for SYG?

DE: Yeah, the next item and – so I think this hypothesis that NRO mentioned about how people probably will not be using assertions in ways that would break here is testable and see if we find evidence to the contrary, then this proposal could be changed to include a little bit more complexity in that case. I mean, I would – would be open to adding counters to this to see whether that kind of thing is encountered completely.

SYG: If I may interject. Just now on the unshipping topic or the migration topic, let's say.

DE: Yeah, this was specifically about the error thing. I am not talking about the assert keyword.

SYG: Okay. Okay. Maybe I will add it to the queue. I’ll add it to the queue.

DE: Going back to GBD earlier, I definitely liked the idea about being explicit in the notes about what the idea for the slow migration path is, are you happy with the way that the proposed explainer would handle this?

GBD: Seems like that would satisfy the questions from Node.js, as far as I'm aware. It would be worth investigating if the new semantics will affect Node.js, we have already exposed assertions to Deno, we don't know what the usage of that is so I don't know if having some new key throwing behaviour is going to affect some of that existing usage and how that will play out. But at the very least, having in this intent that the assertions is going to stick around is what Node asked for.

JHD: node has already gotten that signal from V8, the assert syntax will remain for a while no matter what we do in this room.

GBD: Right, but they want it from TC39.

DE: Makes sense.

YSV: Okay, SYG has your topic been covered the one that's currently on the queue regarding existing semantics, has it.

SYG: Yes, it has. For the notes from NRO was the assert key word will have the new throwing semantics, not the existing.

YSV: Okay. The next speaker then is DLM from Mozilla

DLM: Thank you, we have discussed this as a team and happy with the direction that this is taking. I think represents sensible decisions, design compromises, happen we the with key word and definitely support this for stage 3 if that’s up for today.

YSV: Thank you. So I have my topic. I think this is better covered in the overflow for the next segment. I did post my slides that were intended for Committee to the chat, if anybody wants to take a look at them, please go ahead. They’re of course missing context. There is not much new in terms of layer proposal work that KKL has done if anyone is unfamiliar. Rather it was trying to put into better context what he was trying to do and not so overwhelming, so trying to simplify and name and build a couple of rules around it. I can of course take folks through the high level of what that looks like. I presented to the small conference about some of the thinking around layering that had been going on because it was something that was discussed in Committee and was discussed at length in the module meetings. But I also have some of my own thoughts about how this should be organized and what the guiding principles should be, which I think are quite strong, and whether or not Committee will adopt them, I will probably be writing a blog post, taking the example of continuations integrations in scheme and how the design decisions done there can influence the future evolution of a language and comparing various ways, for example, tail calls, continuations, delimited continuations and throwing exceptions have been implemented having different maps for each one of those. If you look at the slides you’ll get an idea of what the maps look like and how they are organized. So the blog post would be partially for my interest but also maybe inform the work of the Committee. It doesn’t have to. This aspect was not something I presented at the talk. So I don’t want to take up any more time and I'll move on to the next topic. Go ahead, DE.

DE: So, okay, about the topic of Node flagging, I think the policy that chrome and Deno have decided to apply sounds good, and I take it that there was – although node wanted to have compatibility, they also wanted to get a signal for us on whether to reflag the assert keyword. They’re saying in the chat they already flagged it, okay, but I do not think it should have been ever on the table to like even try to listen to us. If we say it should be reflagged the compatibility even with the not multiple browser state is important thing that we shouldn’t be casting doubt.

NRO: Flag was – came up from Node.js and not from us. Reaching out to us saying hey we are discussing – to flag, we are waiting for the outcome for the next meeting to be able to make a decision.

DE: So as long as we're including in the conclusion what –

GBD: There could be another clarification if we have more time, which is how long we expect this legacy deeper indication process to exist. For Node.js compatibility on the Deeper indication cost. So that will just be something that’s in annex B where it will sit around potentially forever or is this going to be a slow deprecation. Because the flagging decision depends on how long the assert syntax is going to remain available.

DE: So I would say that this is a – at least a year-long likely multiple year-long path. I think the presentation was a little unspecific about that.

DE: But that’s how I’ve been picturing it.

GBD: In that case, we would still need to be flagged for node 20 because that would be too little a time.

DE: Years –

GBD: Yeah, multiple years and ideally indefinitely for node ^inaudible ç.

DE: Yeah, I would kind of expect it to be multiple years for –

YSV: I would like to jump in here because we only have a couple of minutes left and a few more things in the queue. Would you folks be able to continue this off-line.

DE: It’s relevant to the conclusion, but we can stop this discussion now.

YSV: If it is relevant to the conclusion, I’m happy to allow it to continue, I wonder if the other topics on the queue might need a little bit of air time for discussion.

DE: Let’s go on to the other topics, but we will kind of –

NRO: I think the flagging we don’t have a conclusion but not necessarily relevant to the stage 3 request. So might be okay to defer that.

DE: Let’s continue down the queue.

YSV: This was SYG’s topic on hearing from tooling people and I will possibly skip Shu reply and go to JRL saying the tooling concerns with removing assert.

JRL: Hi. So my personal opinion is that we should stick with the `assert` keyword. I’m fine if we switch to `with` keyword given the slow path. It’s not just browsers, and not just node. The tooling ecosystem added `assert` parsing support. If we were to immediately change `assert` to `with` in tooling, it would cause all kinds of headaches for users of bundlers, linters, and transforms. The ecosystem adopted this syntax. If we take the slow path here where the current `assert` syntax is still valid, all the tools parse can still use it and all the transformers can still access it, that’s fine. If we have some form of deeper indication, a warning telling people to switch to the `with` keyword, also fine. My big concern is just that we continue to support `assert` for some indeterminate amount of time into the future.

YSV: Okay. Thank you. And we have two – sorry. JHD, is your response to this topic?

JHD: JRL, yeah.

YSV: Please go ahead.

JHD: Yeah, I just – I mean, when you talk about the slow path or fast path, it’s not something I think TC39 has the ability to dictate. Implementations do whatever they decide to do and I would imagine that if I maintained any implementation that supported the assert syntax, I would definitely have a time where I supported both assert and with, I would provide code mods and deprecation warnings and at some point I drop the assert syntax when I felt like everyone moved over. I hope that’s what most of the folk will choose to do, but that is up to them. I don’t think we need the assert syntax in the spec in order to make that happen or allow that to happen. I think it is inevitable that any ecosystem or smaller chunk of an ecosystem that depends on the assert syntax will continue to support it in the tooling until they feel like everyone migrated.

SYG: Wait, you’re saying –

JHD: I am saying it’s time that we message – suggest that folks try to migrate them to the new syntax, but I don't think the spec needs to specifically talk about the assert syntax to do that.

SYG: The spec doesn’t need to talk about duration, but it needs to talk about the assert syntax because the spec should reflect reality. Like, if you’re saying that we should all just for this space that we should just be non-compliant, that is a take and I have grave concerns with that take. But I thought that was not on the table.

DE: Yeah, I agree with SYG, that we can and should coordinate expectations here. That is a valid function of the Committee. The role of the Committee is to have this shared standard language. I think it’s totally within scope to have in the conclusion these suggestions which obviously we can't enforce for the migration path and are have in the spec the legacy syntax, that we have a clear unambiguous thing to parse for the subset and would be explicit this is an optional legacy – subset that wants to support that.

JHD: I don’t think we would want new implementations to normatively add support for the legacy syntax.

DE: This is why the request has a special text in it that explains this is legacy and that we're not encouraging it. It is useful to document these things. In the past when we tried leaving things out of the spec, this happened in ES2015 it led to confusion. It is important –

JHD: The assert syntax isn’t in the spec now and yet a number of implementations have implemented it. So surely we can point them to something outside the spec that tells me –

DE: Historically we know that doesn’t work as well. We have had discussions in TC39 in hope that implementers see those and as an adjunct to the spec and that did not work well as a communication tool.

GBD: I agree that making run times non-conforming with the spec would be a bad idea.

DE: Okay. So I wanted to discuss something different, which is we have many other tools out there in addition to JRL here, I’m glad to hear that JRL is here for this path, even if it is not the preferred option. For example, NRO in Babel capacity what do you think about this.

NRO: I would not want the fast path. We would start implementing the proposal at the same time and let our ^inaudible ç. For the way it works, we don't care about this. This proposal. Because we do not allow the proposal, we provide parsing separate for that. However, we also talked with Parcel, Vite, and generally been happy with the direction of the proposal is moving because they – it is something that they said in the past that we as a Committee were not placing into the ecosystem.

DE: And we have other tools here like TypeScript.

DRR: We’ve started a direction where we have tried to introduce deprecation saying within five versions you will have the opportunity to suppress these and then they're just never after that. That seems like it is in sync with the slow migration path. We're interested in trying to see how reasonable that is. So we can try to take that probably by type 5.5. That is definitely slow enough as a migration path for people and eventually it would kind of fade out. Whether or not it’s in the spec in some editorial fashion I think the preference that we have is just explain this so that people know where this thing came from and doesn’t only exist on a random MDN page or something like that. That seems like one of the major discussion points right now. I cannot get much more clear than that.

DE: But in general are you up for the current direction overall of everything?

DRR: I think so. I think we would prefer to go with the better design over time. Or the – conceptually better design had we had all the context from the first step. Assert keyword – sorry, the with key word. Sorry.

DE: We’ll eventually get it right.

YSV: So just to be clear, we're currently over the time box and I've spoken with the other facilitators and we've chosen to prioritize this topic for now. There's an additional 15 minutes left to this morning and we can return to the topic that I interrupted earlier if this one is complete.

NRO: I would like to ask this if there is support for stage 3. I’ve heard most of support and the objections have results. Discussion like some like minor charts or something mostly – well, one is about work with ?? but that doesn't really impact what is written the spec or not. And I would still want to ask if we have consensus for stage 3.

YSV: We had objections but I believe we were retracted. Does anyone have an objection they would like to raise at this point.

DE: Do we want to ask for support and non-blocking objections.

YSV: Yep, this would be the appropriate time to give explicit support. We have had explicit support from Mozilla and a couple of other groups, and additionally we’ve had some concerns raised if anyone wants to voice those now for the conclusion.

MLS: So I’ve heard some concerns that people want to keep the existing key word. I do not think we resolved how we put assert in documentation. I think that JHD’s idea is in some way good. The documentation can be quick to deprecate it even though it’s slower. Certainly I would imagine with all of them, fairly quickly. I have concerns that SYG hasn’t spoken to it, but says it has the possibility of perpetuity. I would like to hear what his comments are. I’m just concerned that – I don’t want to bifurcate implementations by having the old way and the new way and the old way is acceptable is my concern.

DE: MLS, what do you –

SYG: Do you want me to reply about the perpetuity thing?

MLS: Yes, please.

SYG: I just meant that – so I think the conversation has gotten more complicated. I think it would be a disservice to the web and JavaScript if we don't have this in the spec, that is my starting point. With that stipulate, I think we need to own up to the possibility that we cannot unship this because in the – personally I believe it’s not likely at this point, but in the unlikely event that there is widespread use today and then maybe we can – okay, perpetuity is shorthand here for many, many, many years. I’m not saying actually in perpetuity, but more than like two years. And we own up to that possibility. But I don't think we need to talk about duration in the spec anyway. But basically that's all I meant.

MLS: So the concern I have is that if we have perpetuity, which to you is – okay, longer than two years – we now – the spec is to make – is there so that we have compliant implementations so that we allow broad compatibility between implementations. And if we have assert in this non-normative legacy or whatever it was put in on the slide, doesn’t that effectively mean that other implementations need to add assert as well as with?

SYG: Hopefully no.

MLS: Because if we do not, then we’re not compatible with this broad number of changes on the web or in the case of note or other things, the broad code base that supposedly may use assert instead of with.

SYG: Right, two thoughts there. One is if it is true that there’s a large corpus on the web that uses that keyword, that is a fact of the world and it is a product decision on each other implementation to want to be compatible with it, whether – regardless of how much they dislike the keyword. That is first remover risk, that is the world we are in. That is a fact of the world. The second response is hopefully the combination discourages new implementations from doing that. If we don’t think the combination of normative option but legacy serve that is purpose, maybe we need to have stronger editorial nudging there. But that is the point of why it’s normative optional and legacy.

DE: MLS do you think of the normative optional legacy marking in this document?

MLS: I would call it ‘deprecated’ myself.

DE: Sounds good to me.

MLS: The thing about normative optional basically means that, okay, all the other implementations should ship with and the normative optional, because it's going to be supported by other implementations that we need to be compatible with for an unknown but not a small period of time.

SYG: But I mean, okay, I want to take a step back here. I feel like it’s easy to scapegoat V8 and chrome here. The important thing is that – why are we interoperable? We’re interoperable for a better set of web programs, right.

MLS: Yes.

SYG: It’s so support the world and the reason – if the reason you want to be interoperable with chrome must be because that it becomes clear that it’s a fact of the world that there is widespread use of the existing syntax. We simply do not know if that’s a fact of the world today and I was saying earlier because of the time it takes for use counters to roll into stable, it takes a while for us to find out. But like, our decision making follows from whether we believe it is a fact of the world that there is widespread use and if there is, then it behooves other implementations to be interoperable. It’s a better state than just saying we don't like the English word assert. I say this not as – like, there’s no personal opinion here, there’s just an empirical thing which is to find out is this true If it is, we do one thing, if it’s not we do the other thing.

MLS: I think you’re implying then that it’s your – you said it’s your preference that we keep assert and that other implementations should probably also ship assert, irrespective whether they ship with.

SYG: Probably – okay, the second part doesn't follow. The first part is still true. The first part is still true, but that is not what chrome is doing. What I propose chrome to do is to find out whether this fact of the world is true or not and because we are all agreed in this Committee that ideally we would like to only ship `with`, we are tentatively optimistic that it is not widely in use and that chrome can unship it in the future as well. So I don’t think we would recommend other engines to also ship assert today, if they have not already shipped.

MLS: How long would it take you to find out the use –

SYG: Confidently the time line I think is three releases. Let me pull up the schedule here. So the current schedule is that we are on 114. It will take about I guess four – like, two to three months to hit stable we add a use counter for the syntax, we wait two to three months for it to hit stable, then we get our first data point on what the incident rate is in the wild, with the stable population, if it looks sufficiently low, then we will intent to unship there. Start deprecating and if it looks not sufficiently low, then we need to have a new conversation on like next steps.

MLS: Good information to have. I don’t think the Committee can ask you to do that, but I think it would be a good information to have.

SYG: I am volunteering to do this because it is clear to me from this conversation that the Committee would like to have only `with`, despite my and folks like justin's personal preference. If that’s the ideal end state, I want to see how likely we can – how likely it is we can get there, but I want to go into it with eyes open that we might not be able to get there because it’s already shipped.

YSV: So as next steps for this part, SYG, you’re volunteering to add a counter to see what the current web usage is.
Yes. think that’s a good conclusion for that for now.

MLS: I appreciate that, Shu.

YSV: We have six minutes. I see that Luka has a plus one for stage 3 with slow migration. If you want to speak, please go ahead.

LCA: Yeah,explicit support.

YSV: Justin, would you like to speak about this topic of supporting both

JRL: Yeah. I do have a response for MLS here. The – if we get to the end state where we can’t unship `assert` and we are in support of changing to the `with` keyword, is it so bad that we have both in your parser? Like, the semantics should be the same, it’s just the keyword to parse and you can have both of them. Is that a significant enough burden that you think we should not change the `with` keyword or are you okay with having both and adding support for `assert` so we can add the larger ecosystem if there’s a significant amount of people already using assert?

MLS: It’s not the parser that’s the issue, it's that the standard has two ways to do the same thing and how we got here, the history dictates that they both exist so on and so forth. And I think we want to be clear as to what the future is and as JHD said, `assert` is not the standard now. Effectively we're going to add it to the standard, but also going to add `with` to the standard. Seems like – interesting way to run a standard.

YSV: I believe we also have a response to this topic from DE.

DE: Yeah. The hope is that we all transition, I think the text tries to achieve this, but I think we can also make edits to it, like changing ‘legacy’ for ‘deprecated’. I agree with MLS that it’s important that we give a clear signal and I think this text expresses what we know now.

NRO: Like, I’m happy to change the wording to something different from “normative optional legacy” to “deprecated”. We hope that the “deprecated” shows this is syntax we don’t want and we want implementations to not add support for the syntax and like we can then relax that if we find out that like 50% of the web use import assertion, old browser that is we want to implement the old syntax. Like for now I’m happy to come up with a stronger – stronger wording than just legacy normative optional.

YSV: JHD has a +1 to DE and a message. DE, you have new topic comparison with web specs which had early shipping.

DE: Yes, I think although this situation is new standard it’s not new for web standards. It’s very common that one browser ships something earlier and then other browsers and they collaborate on figuring out what the standard is, which then ends up differing. In those cases the standard does usually just reflect the final good version, but then there’s often this sometimes very long and gradual transition that sometimes requires other browsers implement this legacy version and sometimes not. I think it’s great that we’ve been able to avoid this state because we do kind of a lot of thought ahead of time and a lot of coordination ahead of time and we should continue this. When we find ourselves in this state, it’s not especially unusual and it doesn’t imply that the transition is not possible. So custom element zero, initially shipped by Chrome, but then with collaboration with Firefox and Safari, significant improvements were made. We should see this in the same kind of light as that. It is not globally speaking for browsers, it is not unprecedented. Transitions happen. It is different from their tendency in those cases to only have the standard include the kind of final good version, but given the the various different parties that have to be involved in this transition, I think it's good for us at least for now where this transition is completed to document both versions. Yeah. So it is slightly different strategy, but overall globally in terms of what is shipping, totally normal.

YSV: I will move us along. Because I believe that the champion still wants to get a result here. JHD, do you want to speak or –

JHD: Yeah, I will be brief. I support stage 3, I have a non-blocking preference that we omit `assert` from the spec, I’m fine if we come up with a stronger category and even better if it indicates that this section will be removed in a future version of the spec if possible. Because then it’s clear that once it’s unshipped from everywhere, if it can be, we would hopefully be able to delete it from the spec entirely. If we made that clear in the document, that would be a nice thing to have.

YSV: Thank you. So NRO, I want to give the floor back to you with a quick summary. There have been a number of expressions of support for stage 3 from various parties. There has been a con cern – Michael correct me if I'm wrong, this is a non-blocking concern with regards to shipping both assert and with due to the fact that we have – we don’t have assert currently in the ECMA-262 spec and preferably we wouldn't have it. Chrome offered to include a usage counter to see what the burden would be to do a transition there, however, expressed doubt that it would be not possible to ship both. There have been comment that is people would be okay with shipping both, although shipping with alone would be preferable, is that a correct summary of what we’ve had so far?

MLS Yeah, it would be my – as JHD said earlier, we would not include assert in the spec, but that other documentation by implementations would be used for that. I’m not going to block on that. I do appreciate NRO wanting to use something like Deprecated.

YSV: Thank you. NRO, would you like to ask for stage 3 again or ask for a conditional stage 3 based off the information you've gotten here.

NRO: I would like to ask stage 3, like I – like, with the agreement that we like – like update the wording to be like more strong than just normative legacy.

YSV: This would be a conditional stage 3 on updating the wording to a stronger – to ‘deprecated’ for example?

NRO: Yes.

YSV: Are there any objections to this?

RPR: Conditional due to lack of reviewers

YSV: Do we have available reviewers who would be able to take a look at this?

NRO: I could not find the reviewers from the previous advancement; I checked the notes and nothing was captured. So I would like to ask for stage 3 reviewers.

JHD: I’ll be happy to review, but I’ll want more reviewers to review the grammar parts.

NRO: Thank you.
YSV: We have one volunteer. Anyone else who can do it?

JRL: I can also review it.

YSV: “” That was JRL and JHD , I believe we usually have three, but two has been okay in the past. Do we have a third? Then I believe we are going with two reviewers for now, is that fine. Okay, I’m going to assume that’s fine since no one said it wasn’t. In this case we’ve had no objections to conditional stage 2 and we have two reviewers. The advancement is conditional on the reviewer's reviews and additionally the changes that were discussed earlier. And I believe – sorry

DE: Just being specifically on changing legacy to ‘deprecated’ with something stronger implying future removal. We discussed many possibilities but that's the conclusion.

JHD: Yes, and the reviewers are JRL and myself and also the editors will review it.

YSV: Yes. Then we are done this topic. Thank you very much. I believe we're moving to lunch.

RPR: Thank you for staying longer than originally anticipated Yulia. That was very helpful. Please can someone share the notes? I think it's important that we write down this conclusion. Just do that. I think not everyone needs to stay for that. There are tacos in the next room. Please enjoy. And we will resume on the hour at 1 p.m. scroll up in the notes.

### Summary

Import attributes are the path forward for the standard, having re-achieved Stage 3.
The keyword is `with`
As previously, there is an options bag following it The options can form part of the interpretation of the module and "cache key"
Unknown attributes in the import statement cause an error.
Although a couple delegates would prefer sticking with the keyword `assert`, the majority preferred switching to the long-term optimal solution of being more semantically well-aligned using `with`
Significant debate focused around how to communicate the deprecation.

### Conclusion

`assert` will remain in the specification, marked somehow as "deprecated", with the intention to remove it eventually, though with an anticipated timespan of at least multiple years before final removal.
JS environments which currently ship `assert` are _not_ encouraged to remove it, but environments which do not yet ship `assert` are discouraged from shipping it.
Chrome will gather data on usage of `assert` on the web, which can inform the deprecation path.
Conditional consensus for Stage 3 on this proposal, with the conditions:
Reviews are still needed from the reviewers who volunteered – JRL and JHD, as well as the editors The wording for normative optional+legacy needs to be updated to something stronger, probably "deprecated", and explaining the goal to remove it from the specification.

## Async Explicit Resource Management

Presenter: Ron Buckton (RBN)
[Proposal](https://github.com/tc39/proposal-async-explicit-resource-management/)
[PR](https://github.com/tc39/proposal-async-explicit-resource-management/pull/15)

RPR: There is one thing we should announce at the start from RBN, because on async explicit resource management, he may potentially be able to bring that back for an overflow tomorrow, maybe Stage 3, but in order to do that, he’s looking for an editor review on the PRs that he posted earlier in the delegates channel. Ron, did you want to clarify this any more?

RBN: Yeah, I can, and also repost them as well. I put together a set of two requests against the spec in the async procedural. One is for cover grammar for-await using and one is for cover grammar for async using so we can investigate the – any potential syntax complexity and see how that sorts out. So if anyone is able to spend some time looking at that, provide feedback on the cover grammar if we can get something we think is satisfactory and meets the same normative semantics that we were expecting with using the weights and matches with the syntactic change for a weight using, we’ll try to see if we can bring that back tomorrow, then

### Conclusion

SYG, WH and editors to review new grammar for `await using` syntax, to be proposed for consensus tomorrow

## Iterator.range for Stage 2

Presenter: Jack Works (JWK)

- [proposal](https://github.com/tc39/proposal-iterator.range/)
- [slides](https://docs.google.com/presentation/d/1ecfsO-KyLs5UFxbFQ9RWXIDp8kycul6NZXQPZr71BCo/)

JWK: Let’s have a quick recap of this proposal. As you can see on the slide, it’s a simple proposal that’s return an iterator and designed to be used with the iterator helper proposal. One of the big problems in this proposal, should it return iterator or iterable. This is an endless discuss – we have discussed this about three years, and my final solution is to rename the API to Iterator.range to make it less likely to be misused. Previous: Number.range and BigInt.range, Now: Iterator.range where Iterator global object is bring by the iterator helper proposal.
I hope we can get to Stage 2 this meeting since iterator helper has been Stage 3 in November. Also, we have another issue recently raised from JHX that should we allow floating point numbers? Mostly the reason to ban floating point number is the precision problem. The developer might write code that accidentally and finally hit bug for some numbers. I am okay with both option. I wonder how the committee thinks?

RPR: The screen share has stopped.

WH: Your connection is breaking up. We did not hear the last few sentences you said.

JWK: Sorry. I said I am okay with both options that allow or disallowing floating point numbers. And I wonder how the people in the committee think of, and that’s the updates with `Number.range` proposal. Is there any questions?

CDA: Are you able to put the slides back up?

JWK: Yes.

CDA: Thank you.

KG: I see Mark is on the queue for talking about those

MM: Yeah. So I just want to recount a bit of a back and forth on the issue list between myself and if I remember correctly TAB. Is TAB in the room by the way?

KG: No.

MM: I think we should – if we allow floats, which I’m okay with as well, then I think we should in the explanation of how to use this explain that the preferred – recommend that the way to express things like the example that was shown is still to use integer numbers and then to use a `.map` in order to divide the integer numbers by the right denominator to get the floating point outputs. Usually you can get the effect you want reliably by using a map and doing the divide just the floats that you desire on the outputs. TAB raised some examples where – that don’t really fall into that where the natural thing really is to have float inputs. I don’t dispute that. So my only request is that if floats are allowed, that additional explanation of how to use it robustly be included.

JWK: Yes, we’re using multiplication instead of addition in the spec to make things easier, but there are still some precision problems.

MM: Right. There’s the issue about what the iterator does, and using multiplication internally rather than addition is fine, but it doesn’t solve the precision problem. My statement was simply that to recommend patterns of use that actually completely avoid the precision problem by doing the floating point normalization on the outputs rather than the inputs

JWK: That will be strange if the input is already a very, very small floating point number. And that might be surprising.

MM: No, but the recommended pattern of use is one where the inputs would only be safe integers. And it’s just a recommendation because I’m not saying that – I’m not recommending that we prohibit floating point inputs. Just recommending that we explicitly recommend that people don’t use floating point inputs unless it’s really compelling for their case

JWK: Yeah.

CDA: Next in the queue we have WH

WH: MM, how would your approach solve the example given in the presentation?

MM: Simple. Instead of 0.39. It would be `input.map(x => x / 10)`

WH: The example that was on the screen was range(0, 1, 0.3) producing 0, 0.3, 0.6, 0.8999999999999999.

MM: So multiply the inputs by 10 and divide them by 10 on the outside

WH: The example in the presentation had 0.3.

MM: So it would be 0, 10, 3 and then map –

WH: Where did you come up with 0, 10, 3 here? That’s not the example.

MM: So humor me. I’m probably misunderstanding something basic. If you wrote `range(0, 10, 3).map(x => x/10)`, what would that yield? Okay. Go ahead.

WH: There’s also a 6 in there.

MM: So for the – I think the problem with the first line is that the – we imagine that the output that was intended was something more like the actual output of the second line, so if you rewrote it as the second line, you would get the outputs that you were probably intending. Am I not understanding something?

WH: Sure, you can write something differently, but you were talking about floating point accuracy and doing this approach, and I don’t see how it solves the first example.

MM: I’m not suggesting that the first example output be different. I’m suggesting that we have explanatory text recommending that if you thought you wanted to write the first line here, that you should actually write the second line here because it will probably give you what you are actually looking for

WH: You’re just asking for an informative note in the spec?

MM: That’s right. That’s right

CDA: Okay. Next up, I think we have JHX in the queue.

JHX: Okay. JWK, could you go back to the top. This issue, because I realize that was the discussion of this proposal, I realize that there’s no robust usage of floating range. There are three problems here. I list here three problems. The first problem is what we already see that the people who want to use – who write the range 0 to 0.9 and with a step of 0.3, what the people expect to get, I think most developers do not expect there will be – they expect 0.9, not 0.8999. So okay, I understand that this is the point of – this is the issue of the floating point. But the point here is what developers expect. So this is the first problem. The second problem is I think it’s much more serious that the rangej 0, 0.9 and 0.3, it actually gives you four numbers, but people actually expect three numbers, because the range should be inclusive. So it shouldn’t have the 0.9. But because there is 0.8999, so we have extra number here. So this is a much serious problem. And the third problem is actually, it’s very easy to write a workable program, but if you change arguments or if the argument is calculated, so it’s very easy to – the behaviour is hard to predict.
So I think this is the problem that we face. Yes, we can provide the – support the floats, but it’s hard to say there is any robust usage of floating points. So I think it’s – once again, the problem is – so would we really like to provide such API to the developers if the most usage of it will not meet the expectations of average programmers. So that’s my point.

CDA: Okay. I think next we have Shu.

SYG: I think this – so I was trying to understand why we don’t disallow floats. Like, who is – asked the other way, I was wondering who is advocating for allowing floats given the footgun we have discussed. I heard TAB. So I guess my two questions is who is advocating for floats and what are the use cases for floats?

JWK: Floating point numbers, it comes with this proposal on the first day. I didn’t really think of this too much.

SYG: Okay. And to say a little bit about what’s been happening on the Matrix chat, KG found that one, python range does not support floats. It seems like it does the hard end coercion such that if you pass 0.1, the step is actually 0. And two, the main counter argument in the issue came from TAB, which basically can be summed to – summarized as including floating point steps is fine and reasonable and people want to do it, and if we don’t allow floats, people will be angry and then they will just write their own. My reading of the overflow question about the python range - and TAB’s reading as well - is that people aren’t angry and they get told of this footgun when they find out that floats don’t work, which seems fine to me and makes me lean towards disallowing floats.

JWK: Okay. It looks like we don’t like floating points in this proposal, so I will update the spec to disallow floating

SYG: Hold on. I’m not sure if we have consensus on that we should disallow floats. I was asking – I was not calling for consensus. I was asking if there are advocates from the other side.

CDA: Next on the queue we have JHX.

JHX: About use cases, actually, I tried to find some use case of float and range. And, actually, I can’t find many. Because first in many cases it seems people actually want not floating, but fixed point numbers, or they might want decimal. And there might be some cases in – JWK, please go to the top. I wrote about a use case about when you have – yeah. When you have charts, you may want to calculate the x and the y and you don’t care about whether it’s very precise. But in this case it seems some other HI, like, Lin space, like that is much suitable. So myself can’t find solid use case of floats in range.

CDA: Just a quick time check. We’re just under 10 minutes left. Try and keep that in mind. Next is WH.

MM: No, next we have me. Quick point. I’m okay either way, but if we decide to disallow floats, then we should also decide to disallow unsafe integers. If we –

??: Yes

MM: Okay. Good.

WH: I’m not okay with disallowing floats. It seems gratuitous here. There are many examples for which floats will work just fine. Truncating them or banning them will lead to worse confusion.

JWK: What if we use .map(x => x / 10). That will also produce a iterator with floating numbers but with less surprise

WH: What do you mean, divide by 10?

JWK: Divide by 10, this one, the latter one. This will be less surprising

WH: Yes, you can write that, but if users write the first one, then that’s what they will get, and that’s fine. We should not try to fix that.

MM: Why not?

WH: Because fixing it would be incorrect. What looks like 0.3 is not exactly 0.3.

MM: Fixing it by disallowing float inputs. Why doesn’t that fix it?

WH: Sometimes you want to use floating point numbers. That’s fine.

SYG: But can I get an example? I don’t even need a very comprehensive set of – just like one example

WH: A range from 0 to π in steps of 1. There’s nothing wrong with that.

SYG: Yeah, but what do you use it for if you want a non-integral floating point step?

WH: I didn’t use a nonintegral floating point step. It’s a perfectly sensible thing to do.

SYG: I’m really confused. I don’t think anybody is saying that shouldn’t be allowed.

WH: What I’m hearing is that people are saying that shouldn’t be allowed.

MM: That’s what I took both your and my preferred positions to be, is that it shouldn’t be allowed. Now, I could imagine that we don’t allow it for the base or the step, but we do for the limit. That would be a little bit weird, but it wouldn’t hurt the reliability

SYG: Yes, I guess my main issue is with the step. Thanks for teasing that apart

JWK: Or can we disallow at first, and if we find developer really needs it in the future we can add it back?

WH: No, we should not do that.

PDL: Is there reason why we have to do the mathematics in floats? As in, the input can be floats with all three fields allowing float. The addition can be done in mathematical realm and then cast back to a float on the result. If you go to the double in the meantime

KG: That is what happens. When you write 0.1, that doesn’t mean the real number is 0.1

PDL: I realize that, but only in a float

KG: You’ve written 0.1 as the argument, and the computer has not received 0.1, it received the closest floating point approximation of 0.1

PDL: And if you cast that to a double, now you have cast, then you do your math and you recast it back to the float.

WH: If you do what?

KG: Right, and then you get output on the first line. That is what happens. The thing you’re describing is how it works. The computer doesn’t ever work on real numbers. But, like, the problem –

PDL: I’m saying we should be working on real numbers. Can we do the math in between on real numbers. Is way it works is when you type 0.1 –

KG, JHD: No.

CDA: Quick point of order, can we avoid speaking over each other so I and others can understand who is speaking and what’s being said. Please utilize the queue as well. Next we have EAO

EAO: No need to speak, just what’s on there: Not allowings, for example, division in map which produces better final results for the user, end of message.

USA: I have to first admit, I mean, I understand that there might not be very strong use cases for the floating point case, but I agree with Waldemar in that, you know, this is nothing specific to range and this behaviour sort of exists everywhere you use any numbers in JavaScript. So I’m not sure why we’re trying to protect developers from what is well-known behaviour. That’s how doubles work. I mean, if it is unexpected, it can be unexpected in all sorts of places.

CDA: All right. Next we have JHX: “Not specific to range. Range does have no specific foot gun.” We only have a couple of minutes left for this and I think there is an ask for consensus, so you can try and be quick. I do see end of message marked there.

WMS: I want to save us time. I’m just the same stance as UJiwall value and Waldemar. We don’t have so much use case, but I think that’s not a problem the range proposal. That is a problem on the floating point on JavaScript engine in general. And I think if we disallow floats, are we considering doing the same for decimals or allowing decimals

JWK: Yeah, if decimal is in the language, we will definitely support decimals

CDA: Next we have JHD

JHD: Yeah. I think echoing the same thoughts, I think the developers will expect the same thing as when they try and do the range manually, and that’s how JavaScript and numbers work. It seems weird to me to add a protection to protect them from a footgun that is universal and omnipresent. It’s of course certainly a thing we can choose to do.

SYG: I might try to summarize what I’ve considered the compelling arguments from both sides. Compelling argument for disallowing non integral number values is to protect users against the foot gun and lack of use cases and data point from python’s decision as a language despite having nonintegral floating points generally, disallowing them in its range. The other side is to allow all number values, because that is a simpler mental model. It is, like, it’s easily understood. There’s no additional complexity around anything. It does what you would write it out to do and you get the same behaviour, including the foot gun. Is that – does that – is that a fair characterization for folks who feel aligned to one of these, if you care at all?

JWK: I believe so.

MM: Sounds fair to me.

SYG: Then I think given that – so I started this saying that I was leaning towards prohibiting non-integral floating point. I think that one conclusion we can draw from the python data point is that it is relatively rare. So I can certainly live with both, and I am somewhat convinced by the appeal to simplicity with the rest of the language. If most folks can live with both, I think I am happier with having – allowing non-integral floating point at this time. That’s it for me.

JWK: I’m okay with both.

CDA: Okay. We are out of time. Are you seeking consensus for Stage 2?

JWK: I want to seek for Stage 2, but maybe a conditional advance since we haven’t have consensus on the floating point issue.

MM: I think we do have consensus in that I’ve heard an objection to the restriction and I’ve heard everybody who wants the restriction being willing to live without the restriction.

JWK: Sorry. Can you rephrase that.

MM: Yes. What I believe I heard in the discussion is that WH and perhaps others do not want the restriction. Several of us would prefer the restriction, but what I believe I heard is that everyone who wants the restriction is willing to not have the restriction. So I think we can achieve consensus immediately on not having the restriction.

SYG: Yes. JWK, please ask for consensus for without the restriction.

JWK: Okay. Can we go to Stage 2 with the status quo, which means we are allowing numbers to use –

JHX: Sorry. Before you ask for consensus, could I still have an item on the queue.

CDA: Can you be brief, because we’re past time already

JHX: Yeah. Essentially, I think in many cases even foot guns, I’m okay about them, but in this case, in the iterator range case, such footguns – in many cases, you can use the tools to avoid the foot guns. For example, the TypeScript or the linter. In this case TypeScript or linter cannot help you. This is many case why I think it’s really bad foot gun, and I really hope we should not allow floating. Thank you.

CDA: I do see DE in the queue, but again, we’re already a few minutes past time.

JWK: Daniel means the same thing as I want, which means conditional advancement

DE: So to be clear, I don’t think this is conditional advancement. I think this is advancement of the current proposal, knowing that it’s possible to it rate on this issue during Stage 2, until Stage 3. So I would encourage you to just ask for consensus for Stage 2, not conditional, as see if there are objections.

JWK: Okay. So can we have unconditional advancement to Stage 2?

WH: I support this for Stage 2 in its current form.

CDA: Okay. We also have explicit support from MM, JHD, DE, and CDA. And WMS. Thank you. I’m not seeing any objections. Going once, going twice. You have consensus for Stage 2.

JWK: Thank you.

KG: Ask for reviewers.

CDA: Yes. If somebody can kindly pull the notes up for the quick conclusion summary before we proceed to the next item

WH: I will review.

JHD: I’ll review it as well.

ACE: Need to end the screen share.

CDA: That’s right: Thank you. Someone can kindly flash up the notes. Thank you, Ashley.

ACE: Anything in particular we want to – part of the summary? It sounded like where the foot gun, it’s more in keeping with the language to accept it? In the summary we note that people made arguments on both sides. On one side people argued that this is a foot gun. On the other side people argued that it’s more in keeping with the language.

### Summary

DE: There were arguments on both sides. On one side there is a footgun. On the other side people argued that it is more in keeping with the language. We decided to proceed to Stage 2 as it is now. Does anybody disagree with the conclusion, including plan to it rate during Stage 2 on the floating point restriction? Maybe instead of iterate, continue to consider.

### Conclusion

Consensus for stage 2 Plan to iterate during stage 2 on floating point restriction WH & JHD to review

## Float16Array for Stage 2 & 3

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-float16array)
- [slides](https://docs.google.com/presentation/d/1dwAZG2TFK4GiXIk5nir5m7JkB4_VVUWmd4QWxpRgrn4)
- [spec](https://tc39.es/proposal-float16array/)

KG: Yes. Float16Array for Stage 2 and possibly 3. So Float16Array. This would be a new type of TypedArray. There’s a link to the complete proposal here. This proposal was last presented in 2017. So I’m sure many of you were not aware that this proposal already exists and is at Stage 1. Thank you LEO for getting it to Stage 1. He’s kindly agreed to continue to champion it since he has not had time lately. Yeah, let’s just get into it.

KG: So the contents of the proposal are a new TypedArray float 16 array, which is exactly like float 32 array in every respect except that it uses IEEE float 16 rather than IEEE float 32. This is also sometimes called half precision floats by contrast to double precision floats. There would also be two additional methods on DataView, getFloat16 and setFloat16. Vary I having the float 32 and float 32 (???). And as the proposal is currently written, I do not include anything else, the float 16 array and the two new methods on data view, but I’m open to additionally including a method probably called hfround, something like that that would be Math.fround. As a reminder that gives you the nearest number value which is precisely representable as a float32 value and Math.hfround would give you the nearest value that is precisely representable as a float16 value. I’m not sure of any cases for it. If there are I’m happy to include it. I just left it out because I wasn’t aware of any reason to want it. So the place will be left in this proposal last time was that people wanted to hear more about motivations. I think the motivations in the intervening five or six years have been quite firmly established. The reason I’m bringing this back right now in particular is that the ColorWeb CG CG, the group which works on the HTML canvas API is intending to add a new type of canvas that is backed by floats or in particular that is backed by a higher precision data type. Currently HTML canvases are backed by bytes by you entypes and 8 bits are not enough to represent colours. As I am sure you are aware, you need at least 10 to have reasonable cough vag of the human colour scale. There’s just sharp edges between colours, if you are only able to use 8 bits to represent each channel. So this entirely out of our purview. The canvas group is intending to add a canvas type that is backed by a higher precision data type and in the conversations about that, they – you have to expose the data from the canvas and they had originally said we would do float 16, but there is no float16. So we got to do float32 array. That’s a waste. That’s silly. You don’t actually need 32 bits for colours. 16 is plenty. And they would want to do float 16 array to back it if it existed. It just doesn’t. So that’s the reason I’m bringing this back right now, the reason this has most recently come up. But of course it is not the only motivation. I also wanted to point out that this is not WebGL – this is WebGPU is not shipping anywhere, but is, I believe in Chrome canary unflagged and Firefox also has an implementation shipping flagged. Although Firefox is behind. The web GPU specification includes as its first extension the ability to operate on 16 bit floats. And this is a screenshot of the specification. I also do ask explicitly the web GPU working group if they thought Float16Array would be useful and got explicit confirmation that they thought it will. It is useful to write 16 bit shareholders (???) when the – you really want to include Float16Array to do that correctly. Also just there are was some skepticism that float16 would be useful in the future the last time this came up, so I want to give drawing from current events. I’m sure most of you have heard about stable diffusion and in many cases those models are very, very large and often they are 7 billion 32 bit floats and I don’t know about you. I can’t fit 7 billion, 32 bit floats into my VRAM on my graphics card, but I can fit 7 billion 16 bit floats and this is the case for many people, that you will be able to use half the memory at the cost of some precision by representing your – float 16 is not going away. It will continue to be useful for this sort of thing basically for, because there is no upper bound on the limit on the size of these models. This is a screenshot of an issue that was opened or a thread on the three.js, which is a rendering library, very popular learning library and screenshot that they’re discussing having float 16 array would be awesome. And it is possible to do in user land. There is a polyfill of this proposal on NPM. It has been for some years. It gets hundreds of thousands of downloads everybody week, but it is inherently limited. It can’t integrate with the web platform. You can’t clone one of these things. You can’t post it to a web worker. You can’t transfer it, any of that stuff, so it’s not integrated with the web platform, which is really a same for something that is supposed to be low level. And of course it has quite slow reads and writes. So I don’t think there’s any design space here. Like, this is – that’s why I’m asking for Stage 3 as well as Stage 2. I don’t think Stage 2 actually would have any conversations. So I have complete spec text. The spec text is entirely trivial. You say there’s a new global. You say that it holds two bytes per element. You define the conversions to and from JavaScript to number values. I guess this is to and from JavaScript number values, yes, and you add the two new methods on DataView, and that’s it. You have just seen the entire spec text. These reference IEEE binary 16 format. So we don’t have to specify any of those details ourselves. Of course the implementations are not trivial. (???) If you prefer something simpler, it should be easy because compilers generally have support for the under score under score FP extension, which is – let’s you have 16 bit floats and convert those to and from regular floats or doubles which are JavaScript numbers, but optimizing things is always more work. Anyway, that is the proposal. That is the full semantics and motivation. I would like to ask for Stage 3.

CDA: We have a number of items in the queue. First we have Waldemar

WH: I have two items. One is you’re introducing a new numeric data type, so you should have a conversion to that type. Conversion from that type is trivial — just identity conversion. But you should have a conversion to that type, so yes, there should be some kind of a round method. For example, if you’re doing a search, reading float values that you’ve stored into one of those arrays and comparing them against a float, when you do that comparison, you should round the other float to a half float before doing an equality comparison, otherwise it will not do what you want.

KG: I’m happy to include that. It so happens I’ve already written the spec text for it. So I’m happy to add that to the proposal.

WH: Great. That’s item 1. Item 2 is more controversial. There are two float16 standards. Both are widely used. They are incompatible with each other. There is IEEE float16 which has 10 bits of mantissa. There’s also bfloat16 which has 7 bits of mantissa. The latter one is used for machine learning quite a bit.

KG: Yes. I am familiar with it. But if we go through the motivations, polar web CG is proposing to use IEE16. three.js – sorry, some machine learning, as you point out uses Google's bfloat16, but not everything. This stable diffusion is using IEEE float 16. User land is using IEEE float 16. I agree that adding bfloat16 might be something to add in the future. I don’t think this should preclude having bfloat16 at some point in the future, but IEEE float 16 is well motivated and deserves the name float 16 because that’s how everyone differentiates, there’s float 16 and there’s bfloat16. I agree the standards both exist, but I’m only proposing the IEEE one right now

CDA: Next we have SYG.

SYG: I also have two back to back. Yeah, okay. I think the first one is about the multiple competing standards, which you did address. I think because of that and because of some ML is motivated by this, I’m happy with Stage 2, but I don’t think we should move to Stage 3, rush it through Stage 3 right now. Because I think the design space is not completely rigid because of the competing standards. There are – like, I understand that part of the motivation here is you sensed some urgency about the canvas spokes about that. My reading of the this thread which I’ve been roped into is I don’t think the sense of urgency is shared by all browser renders there. I’m not saying float 16 is ill motivated. I do think float 16 are useful, but my read of this is neither Chrome or Firefox believe that float 16 is the right answer. It’s only matcha (???) who believed IEEE is the right answer. I also have implementation concerns, but I image Dan minor will speak to that.

KG: I do want to emphasize that Canvas is only one of the many motivations for this. WebGPU also exists. Like, WebGPU is not going away and it has IEEE float 16s. It is well motivated even in the absence of canvas

SYG: I think it is well motivated. I think the urgency for Stage 3 at this meeting is not well motivated

KG: Oh sure, I didn’t intend urgency, I just didn’t say any design space. So I can come back again for Stage 3 but I’m just going to say the same thing. I think I have said everything there is to say, as far as I’m aware.

SYG: But, I mean, given that there are competing standards and that we probably want `hfround`, like, I think there is some thinking to do on our float 16 versus bfloat16 and the – there is some WASM alignment to do. In that if we have float 16, what is the – what do we want to happen on the WASM side for this. I don’t think it’s just straight to Stage 3.

KG: I mean, okay. I’m happy to only ask to Stage 2

CDA: We have several more items in the queue, and we’ve got just around 15 minutes left. Next up we have DE.

DE: SYG, are there particular action items you’d recommend for champion or are these things the rest of the community might look into

SYG: For the champion, if KG wants to do more work on the WASM alignment, that might be interesting. I guess a rough sketch of – an argument for why bfloat16 and float 16 and a future with float 16 operations - like, currently all this does is specify the storage and interchange format with an `hfround` maybe. So in the future if we also want float 16 arithmetic on math or something and given they’re competing standards, is it completely orthogonal. I want to be convinced of that

KG: I’m happy to put together slides on that, but also – we have float 32 arrays, but we didn’t think about that question, because no one was ever going to propose arithmetic on float 32, as far as I’m aware. I wasn’t intending to design this for a world in which we have arithmetic on these, they’re just a storage format.

CDA: Next on the queue we have DLM.

DLM: Thank you. In general, agree with SYG’s assessment that this is fine for Stage 2, but we wouldn’t want to see it go to Stage 3. Stage 3 usually means we’re ready to implement. From our perspective, we’d like to study how it is implemented before we’re ready for Stage 3. Doing a quick bit of research, I get the sense there’s no support in the C plus plus right now. That might be coming in the following year. Not clearly supported across all CPUs that we might want to target. And so I mean, I guess general concern would be maybe we don’t actually end up that much faster in the library because we’re simulating float 16s on top of F16, which user library is using. In general, yes, we think it’s fine for Stage 2, but we’d like to have more time for researching implementation before we support Stage 3. I don’t think there’s much more work for you to do in terms of spec text, but this needs longer for us for the implementation

KG: Sounds good

CDA: Next we have SFC

SFC: I think WH and SYG already covered this, but I’d like to see the document explaining more explicitly about how we see bfloat16 fitting into this picture. I think that would be helpful

KG: Sure. I will put a slide up on that next time. But the answer is that some ML systems do use bfloat16, but a number of them do not. IEEE floats are also widely used for ML and in particular, WebGPU, which is a standard which exists and will have support for IEEE float 16s for doing computation on the GPU, which is computation on the GPU is not quite entirely but largely entirely synonymous with ML and is only going to have IEEE floats. While there is use of bfloa16 for ML, there is also widespread use of IEEE float16.

SFC: I still think Float16 is motivated. I just think it would be better to be explicit about the full picture.

KG: Sure

CDA: Next on the queue we have PHE

PHE: So looking at this from the perspective of embedded devices and Ecma 419, I’m happy to see this proposal come back to life. I think there are potentially some interesting uses of float 16 on the devices that we do where especially ram storage is limited. So being able to store data more compactly is desirable. It’s great. Looking at it from the perspective of the XS engine, I think I share some of the concerns that both SYG and DLM raised about implement abilities as we look across all the different types of CPUs we have to handle and compilers that exist, I can’t say with confidence that we can do this. And I’m not prepared yet to say what we learn in the process of studying that won’t have some impact on the design space. So I think echoing SYG, I’m perfectly happy to see this move to Stage 2, but not yet ready to say Stage 3

KG: Okay.

CDA Next we have SFC.

SFC: Yeah. I just wanted to say that float 16 is useful as an interchange format. You often don’t need to carry 32 bits of floating point stuff in your – in data files. I know I’ve been dealing with this a lot the last couple weeks and I’ve been trying to reduce the size of internationalization data. So just wanted to point that out as another motivating this case possibly is for data interchange. You don’t really need all 32 bits for a floating point number.

CDA: Okay. Next up we have SFC again.

SFC: Yeah, my next question was maybe this is out of scope for the spec and this is something for implementations, but there are various hardwares that have special support for float 16 operations, in particular, for example, F16 to F32 hardware level conversion, things like that. Is that something that we should say in the spec or is that something that you envision that implementations would leverage, if possible. This stuff can also be done in the CPU, it’s not that hard. F16 to F32 is like, shift some bits around and you’re done. But you can probably save, you know, a couple cycles if you use the hardware instructions. So I was wondering how you see that fitting in with the proposal

KG: Float32, I think is an instructive example, also in the specification already, also has widespread although not universal hardware support. Specification has absolutely nothing to say on the topic of arithmetic on float 32 types. I think implementations are of course welcome to implement optimizations to use hardware. But that’s available for doing arithmetic on float 16 when they can see that values are within that range and if computation starts happening on float 16’s lot, then they might well want to, but it’s certainly not something I would expect to require. It’s not something that happens that much that you have hot code that is operating on float 16. Like, just the ways I have seen people wanting this, it’s like I’m defining a shader. It’s nice for that not to be very slow. It’s important that I will able to pass this shader a web worker, but the actual process of defining the shader, it’s okay if it uses float 32 arithmetic and then does conversions and that’s not going to be a significant effect on the performance of my application. So yeah. I think hardware support when available is something that implementations are certainly welcome to use, but the spec is not going to have anything to say about it.

WH: Regarding this last point, the IEEE floating point standards are cleverly designed so that they have interesting identities which always hold. For example, if you do float32 operations – a single float32 operation — it’s equivalent to doing the same operation with float64 arithmetic followed immediately by rounding to a float32. That’s useful because it means that if you have code which uses double arithmetic and follows every operation by rounding to float32, then it’s valid for a compiler to compile it into float32 operations. The same thing is true for float16 and IEEE doubles, which means emitting float16 addition, multiplication and such is just a quality of implementation issue. Now, that’s true only if you round after every operation. If you do a bunch of additions and then round after all of them, that doesn’t work. You need to round after every operation.

WH: The other thing I’d like to mention is regarding the possible implementation concerns. I don’t think there is much of an implementation concern. The core of this is taking a double and turning it into a float16, which is just a bit of bit-banging. You could fit the entire code that’s needed to implement rounding from 64 to 16 bits on a single slide of a presentation.

KG: Yes. I think implementations have tried to optimize things and the optimizations are the parts that I have heard concerns about

WH: It’s just a bunch of bit shifts.

KG: I hope that will be the case. I’m not going to ask for Stage 3, but hopefully implementations will go and check and everything will be simple

CDA: We have a few minutes left. Next we have MM on the queue

MM: Just a quick bikeshed, the name `hfround` I find – I don’t know what the H is. I’m guessing half, but I’m guessing half only because I know that 64 bit which JavaScript just calls Number is also referred to as double. Since JavaScript just sees Number as normal, the HF round is just obscure. I think if we called it `f16round`, anybody seeing it in code would immediately guess correctly what it means

KG: That sounds good to me. hfround is what it was called when I came to this proposal. But f16round sounds good to me.

MM: Thank you

CDA: All right. JHD, you’re next on the queue. Did you want to speak?

JHD: I support Stage 2 and even though it’s not happening today, I would have supported Stage 3 and with the rounding function, whatever it’s named

KG: I would like to formally ask for Stage 2, including a rounding method probably to be named f16round, and I will come back at Stage 3 as soon as I have put together some more slides and given implementations time to check on implementability. But only asking for Stage 2 at this time. We just got an explicit bit of support for JHD, but I’d like to ask for consensus for Stage 2

WH: I support that. And I sign up as a reviewer.

JHD: I’ll review as well.

KG: Thank you.

CDA: As we mentioned from JHD. We have WH and CDA (IBM) does support this for Stage 2. We also have support from MLS and SYG.

SYG: Kevin, are you willing to reach out to the WASM CG and if we have 16, any interest in their adding IEEE half

KG: Yes, I will reach out to them

CDA: Can you stop the screen share and somebody can kindly pull up the notes to review the conclusion and summary

### Speaker's Summary of Key Points

Implementations were not comfortable with stage 3 because they need time to determine implementability interest in ‘bfloat16’ to be explored interest in wasm interop to be explored should include a rounding method

### Conclusion

- Stage 2. Explicit support from JHD, CDA (on behalf of IBM), MLS and SYG
- Rename ‘hfround’ to ‘f16round’
- Reviewers: WH, JHD

## Decimal Stage 1 Update

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal/)
- [slides](https://docs.google.com/presentation/d/10a7dcAPPgIYaHOFjYlltmvQUOgJXI7pDo8dZ1DkKTkI/).

JMN: My name is Jesse Alama. From Igalia, working in partnership with Bloomberg. Glad we had a couple of mathematics talks. I’m hoping most of you have your mathematics hats on. This is another one about that. This is a Stage 1 update. What I’m looking for is to get some input and feedback. Sketch some of the use cases for decimal. I’ll give you a bit of a sketch from the design space and dig into one of the dimensions from design space and sketch a path forward. Again, no requests for permission to do anything, just to warm you up and get some feedback.

JMN: So it looks like we’ve already seen a bit of motivation in earlier talks about why Decimals might be interesting. Add that to my ever growing list of use cases. Just to remind you to nail down the terminology. Decimal numbers are supposed to be an exact real noninteger numbers in base 10. Meant for human creation and consumption. In this setting 0.1 and 0.2 is 0.3 without any rounding. JHD made the point earlier that when you type 0.1 in JavaScript it’s actually 0.1. You’re very, very close, but not exactly 0.1. –.
There are all sorts of use cases. Some of these focusing on the front end. Some on the browser in the back end. Some kind of node JS powered app. As you might imagine the main use cases have to do with finance and business, where exact representations of things like prices, tax rates, currency conversion are not just nice to have but must have. Your application needs this. There may be legal requirement to have exact representation of numbers. For instance, the EU mandates that currency conversions are done with six decimal places, always. So there's a legal requirement there. If something in the front end might be charting or graphics, you might imagine having graphics in a browser where the points or numbers labeled there have to be exactly correct.

JMN: How many decimal places do we have to represent? Well, in most of us in this room, typically two if we're dealing with prices. But sometimes we need to do more, in the case I just mentioned, with currency conversion, you might have to do four or six decimal places. If you’re dealing with cryptocurrencies, maybe you need nine digits or more. These are contexts in which you might need a lot of support for these exact representations. In science, this is another case where human-generated numbers and numbers for human consumption are needed. Measurements are intended to be human readable. Think about unit conversions and think about scale. Think about, for instance, a smart scale that does some kind of unit conversion for you. As an American living in Europe, this is an issue for me. I don’t know how many times I have to pull out my calculator and try to do some kind of conversion. Sometimes I need it to be exactly correct.

JMN: Another interesting use case is in a database. This could be either frontend or backend. The point is, your JavaScript engine is consuming some kind of data coming from a source that already supports exact decimals. Many exact databases already support these and have for many years. But if you just turn these kinds of numbers into JavaScript numbers naively then you’re almost allways going to be losing something, and possibly getting something wrong.

JMN: That’s why many developers often work with such numbers as JavaScript strings and then try to jump through hoops and do some kind of tricks to get this to work appropriately.

JMN: A while ago, at Igalia, there was a survey we sent around. DE was involved in this. We were trying to solicit some feedback from the JS developer community to whether there were use cases for decimals. The previous slide was just me spinning my own wheels about what I think use cases might be. But if we try to get out of my own head and go into the world and get some data about use cases, there’s all sorts of things that you can imagine here. These are quotes from developers. So things like representing and manipulating currency. Calculating fees on top of a base price. Performing operations on precise decimal constants. Imagine some kind of scientific context where you need to work with high precision numbers. I like this one: "we are a bank and we want to make sure we show correct numbers to our customers, mistakes lead to confusion and decrease customer’s trust in us as an institution". Next time you look at our bank statement, ask you’re whether there might be binary floating point errors.

JMN: So this is something on the front end. “Including custom steppers. We talked about stepping a couple of talks ago, the range. We use big.js, that’s a package for handling exact decimals to do some kind of decimal conversion.” Here’s another one: “Right now users are supposed to do a big decimal library if they use a decimal SQL type, but the reality is that a lot of devs think their value being returned as a string is a bug. 0.3 is not exactly what you think. 0.9 is actually kind of 0.8999, et cetera.” And a lot of developers, understandably or not, this is their world and mistakes can happen when you’re working with numbers out-of-the-box in JavaScript.

JMN: Charts! Just imagine you go to your bank or you have some kind of financial institution where you produce some kind of fancy graphics and maybe a requirement of your application is that the numbers that you display here are exactly correct, not some kind of close enough approximation, but exactly correct. This [on slide] is perhaps not the best screenshot in the world, but if you zoom in there, there’s a number displayed. I put my mouse over one of these fictitious charts, I got this courtesy of chart.js. We could go on for hours talking about all sorts of charts, and banks and so on, and again one of the motivations might be: it’s not okay that these numbers are merely close, but they have to be exactly right.

JMN: How many of you have a home or some kind of property, then perhaps you’ve seen charts like this where you try to find out how much can I pay for my property or for my home, how much money do I need? How long do I want to pay this off and so on. You get some kind of table like. This you might imagine that you get some kind of table of say expected monthly fees from some kind of bank or mortgage institution, this might – the institution might be on the line for correctness of this data. You don’t want any errors. This might be a serious mistake if you use regular floats for these kinds of numbers.

JMN: Just to really nail down this point, because I think a lot of developers just don’t deal with – aren’t up to date, their state of knowledge about numbers isn’t what we in this room think it is. I love this example. Imagine you have a 70 cent phone call and you have to charge 5% tax on it. This isn’t rocket science. You find out that this is exactly 0.735 cents. That’s simple math. And your business logic, you might round that up to 74 cents because you can’t charge a customer 73.5 cents. This [example on slide] is one way you can get 73. I think, again, a programmer is maybe a bit misguided to do it precisely this way, but it’s understandable what they’re trying to do. They might not know that the decimal that they’re working with is not exactly up to the task.

JMN: So, again, [looking at slide] if you played the board game Monopoly, there’s an aspect of the game where you might get money or you have to pay fees, unexpectedly, just like in life. Community chest “there was a bank error in your favor” where you just get money for doing nothing. And the question is this can happen if you’re using floats, but the thing is, it could be a bank error in your favor or in favor of the bank. Maybe you’re paying too much. I’m trying to nail down the idea that they feel right, they look right, but they give us different semantics.

JMN: So that is the motivation for having decimals to JavaScript. The design space for decimals is very interesting. There’s a whole series of questions we can ask and give different answers to different questions. Do we want to have new syntax for these—literals? There’s a couple of data models, or more than two, that you could think of. I’ll talk about those in just a moment. Whether you want arbitrary-precision decimals or some kind of restricted range? Do we want to overload existing arithmetic operators like plus and times? And are decimals going to be objects or primitives? All sorts of things we can talk about there. We could spend all day talking about these things. I don’t want to bore you.

JMN: I just want to mention some of the key questions here about the semantics. Because at least two – maybe I should update the slide. At least two valid approaches for representing decimals, arbitrary precision and limited precision. I think as a starting point it’s fine to think of decimals as arbitrary precision things. We’re in the world of mathematics and if we have decimas, then we can have as many as we want on the right-hand side. Arbitrary precision has no limits. Limited precision puts some kind of a cap. There are good reasons why limits might be needed and why arbitrary precision might be not as great as it initially appears. But an interesting question is: if we do put some kind of limits on there, what are the right limits? We want to support the use cases that we talked about before and use cases similar to those. We don’t want something that restricts us from expressing kinds of things that we want to express. Arbitrary precision. If I use the word “big decimal”, this is what I mean: some kind of arbitration-precision semantics for decimals. The semantics is, well, it’s basically just math. I mean, you can do whatever you want. There’s no limits. There are essentially strings of digits or two big integers, something like that, left-hand side and right-hand side.

JMN: But when one thinks about this a little bit more you realize that you get into a little bit of trouble, because dividing two finite decimal numbers rarely gives us another finite decimal number. Sometimes you get lucky and you get something that is exactly representable as a decimal number, but usually you don’t. It needs to be truncated. Or maybe there needs to be some kind of rule for how many digits we get.

JMN: There’s a limited precision approach to decimals. And here is one in particular. IEEE-754. We heard about that in the previous talk. There’s another part of that standard called decimal128, which is a specification of floating-point numbers. Decimal floating point numbers, that is. In this universe every decimal number uses 128 bits. We can get up to 34 significant digits and the exponent can be plus or minus about 6,000. So that’s a lot of space. That gives us a lot of room for writing down numbers. I mean, have you to ask yourself how many times have you needed more than 30 numbers? Again, for a human-readable number. I’m not talking about arbitrary numbers. I’m not talking about use cases where I need 100 digits. If we're talking about money, we haven’t yet reached the stage where we need 34 digits to represent someone’s salary or wealth or something like that. Not yet.

JMN: There are interestingly in the standard IEEE 754, some things like Decimal64 and Decimal32. I think one difficulty there is that these models offer us too few digits. So, one gives us 16 digits total and the other gives us only 7, which is probably not enough. You want to represent numbers that are a bit larger than say 7 and 16 digits. So therefore Decimal128 would be the reasonable thing to look at.

JMN: There’s an interesting thing that has to do with normalization. The IEEE-754 spec, the semantics they use involves the semantics where they deliberately do not normalize. Normalization: you eliminate any trailing zeros. If you have 1.20, that’s actually 1.2. We don’t try to work hard to represent 1.20 somehow as different from 1.2. In IEEE-754 those are different numbers, although they compare as equal. One of the issues that I believe was discussed and settled here [in TC39] is that if we were to go forward with decimals, then we would try not to expose this to the JavaScript developer. So you wouldn’t really see any difference between 1.20 and 1.2. By the way, this is not just Decimal128. Even BigDecimal would require facing this issue as well.

JMN: So here is a kind of pro and con of comparing the semantics of these two approaches. If you think about Decimal128, there are some pros. There’s support in C++ libraries. Bloomberg has a library, IBM has a library. There are probably more. Some compilers support this out-of-the-box, probably by just sneaking in some kind of library there. If I think about the ergonomics of Decimal128, I think it’s a little bit better, because the operations with Decimal128 arguments always produce Decimal128 values without any extra context having to be given or additional arguments having to be passed. So I can multiply these two things together and I always get a value that’s in that same space.
Also, especially if you start doing more calculations, I know at the end of the day 128 bits are used to store my values. This is something that is not true for BigDecimal. If we think about some downsides to this Decimal128, well, if you put some kind of limit on the space of numbers, then, yeah, some things are going to be left out, by definition. The question is: if we think about the intended use cases—and again, our original motivation that these are supposed to be human-readable and human-consumable numbers, how often is this [space limitations, that is] going to be an issue? There might be a complaint that in some cases we don’t need all this space. Think about the number 0.1. Do we really need 128 bits for that? The answer is, in a sense, no, right, but the counterargument to that is well, we’re already using 64 bits when you write 0.1. That’s already heavy in some sense. Underflow and overflow are still issues in the Decimal128 world. True. But I would argue that really happens only in rather extreme cases. Again, keeping in mind the intended use cases. You have to get some extremely big or extremely precise numbers for overflow or underflow to affect anything, although it is admittedly possible.

JMN: BigDecimal, pro: unlimited precision! That means that all use cases are going to be supported, right. Dig decimal is basically just math. So, yeah, of course this is going to be the right solution for pretty much anything that you want to do. It’s easy to polyfill and the issues of overflow and underflow are kind of not really there, not in the same way as they were with Decimal128. Some downsides of BigDecimal, in my view, is that some operations require specifying the number of digits [of the result of an operation]. So you say 1 divided by 3. Well, in the Decimal128 universe, that just works. That’s fine. That’s a simple answer. You’re done. But here you have to give some kind of extra argument or some context to say after how many digits do I cut off this calculation. Of course I don’t have a finite answer to these [that is, ⅓]. So the ergonomics might be bulkier.

JMN: Complex calculations! In a world where you’re doing more than, say, the 70 cent phone call example, BigDecimal has the downside that the number of digits that can involve, especially when you’re doing multiplication and—even worse—division, the number of digits can be very big. To the programmer might program something that’s fancy and complicated, he wants to show off to his boss and it takes up a lot of memory and these big big numbers can generated along the way. It will be slow and memory intensive. That’s not so optimal.

JMN: My understanding in preparing for this presentation and doing some research on discussions about decimal, is that there’s a question about whether it’s worth doing this [Decimal, that is] at all, whether they might be too heavy, whether this might slow down an engine in an unacceptable way. And here is one modest proposal that I think would satisfy developers and implementers. I think not everyone is going to like every detail here. But that’s the nature of compromise, right.

JMN: One path going forward is that the underlying data model can be Decimal128, with values always normalized. This keeps if ergonomics really clean and we don’t have to make our programs dirtier by specifying the number of digits all the time. There’s a new Decimal class. It had the operations for addition, subtraction, multiplication and division, and that’s it. We can’t do the trigonometric functions or all that stuff. This is a good match for the use cases coming mainly from science and business. We can have the new literals, that’s probably not too complicated, but I would propose not doing is overloading arithmetic operators. My understanding is this is a very difficult thing for the engines to do. We don’t have a good story about overloading, so in the absence of that story, we won’t do it [for Decimal]. And don’t add new primitives. So these would be new objects, not new primitives. The motivation is to keep implementers happy. Adding primitives can be a costly and invasive change.

JMN: That’s all I wanted to say. This is something on my mind: Do we want to do decimal in any form at all? And if so, what form should that be? I sketched one kind of modest proposal here, I think something that many people can accept, perhaps as suboptimal. At least the data would be there, these decimal numbers. Maybe it doesn’t give us everything we need. So that’s everything I’ve got.

SFC: I just wanted to raise a third data model, one that we’ve used in CLDR for representing unit conversions, we use rational numbers, bigint over bigint. You didn’t mention that in the slides, but it might be a thirty data model to consider. There’s big decimal and decimal128 and also rational, I think has some merit in maybe worth listing as an alternative. That’s all.

JMN: Thank you. That’s right. This is an interesting topic. There’s an issue where we discussed this whole idea of rationals as an alternative to decimal. Not just a new data model, an alternative to it. Would be kind of an appendix to the idea of rationals. I think one of the concerns there maybe you have real-world data that shows this is not true, but one concern I would have would be the cost of normalization of these things, ultimately serializing these things for human consumption. Intermediate calculations involving repeated GCDs. That’s a theoretical concern. But if you have data that shows we can be clever about that or that’s not as much of an issue as we might think, I’d be happy to –

SFC: I'll respond to that before DE, is that they are very useful especially for unit conversion, which is a big case here where you can basically chain several rational calculations all together and then you basically at the very end realize it as a normalized thing. So when you’re doing calculations, you don’t necessarily normalize it every step. Normalization is a last step that you can get.

CDA: So we only have a few minutes left for this item, and the queue is quite full. Jesse do you want to take a look at the queue and see if there’s any particular item there that you want to address with the few minutes we have left

JMN: Sure. Just a moment. Wait a second. I lost my queue. Or somebody can flash it up

SFC: I can go through them quickly.

DE: Maybe we should give each person on the queue a time to talk and then go into – maybe you could freeze this for potential further discussion tomorrow also possibly

CDA: DE, do you want to go ahead?

DE: Skip me

CDA: Back to SFC

SFC: I just want to say I’m quite concerned about the assertion that normalization is something you want because one of the biggest problems with floating point and internationalization is that trailing 00s are quite important. "1 star" and "1.0 stars" produce different localized strings. And that's one of the compelling reasons for decimals – which is a capability we don’t get with floating point. In Stage 1, I would hope that we could explore that space, whether that’s something we can support.

JMN: Sounds good.

WH: I’m on the opposite side of this. I want 100 to be the same number as 100. If you allow significant trailing 0s, then 100 can be different from 100, even though they look identical. That can be a huge hassle. If you want to represent precision for internationalization then a precision argument is the way to go. The other couple things I have is I would want equal decimal numbers to be `===` to each other. And also I see you don’t want to do any of the common functions such as trig, but things like exponentials, logarithms are used a fair bit in finance, so omitting those would be an issue for finance applications.

DE: Which operations?

WH: Exponentials and logarithms.

DE: Can you –

WH: We don’t have much time, so let’s go on to the next person.

DLM: Okay. I just wanted to point out that the use cases here seem rather specialized and we have a large design space, so I guess I’d like to see when maybe this comes up for advancement an argument as to why this can’t be done in user libraries and give users a choice of precision rather than in the language.

SFC: Yeah, given that we don’t have much time, I’ll just point out that regarding that, you might look at Intl NumberFormat V3 for how we were thinking a bit about arbitrary precision decimals. I talked to you a little bit about that yesterday.

CDA: All right. We are out of time and already running behind schedule. So we are going to have to move on.

### Speaker's Summary of Key Points

We sketched some use cases for decimal and investigated some competing semantics for them, offered a middle path, so to speak, between some controversial design space points.

## Next steps for RegExp escaping

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-regex-escaping)
- no slides

JHD: I don’t really have any slides because this is sort of a free discussion. The last time I brought regex escaping to the committee we agreed it should be brought back at Stage 1 for further discussion. My position as a champion and as a developer is that the thing that I want in the language is the thing that every library that provides this functionality pretty much does, and which everyone has been using for well over a decade, which is a function that takes in a string and spits out an escaped version of the string. There has been pushback in the past for a template tag approach that creates the entire regular expression at once so it has the full context and can do better escaping, and I believe there is a library that exists since this proposal was first brought, I believe, on npm (I forget the name of it). I can look it up later. It offers this approach. It’s a template tag function and will construct a regular expression.
So one direction that could be pursued here is to withdraw the proposal; another direction would be to pursue just the template tag approach. Another would be to pursue just the prior art approach and then a fourth could be pursuing both approaches. I want to kind of get a sense of the room and what people think are viable directions to explore before I commit time to it.

CDA: We’ve got KG in the queue.

KG: Yes. I very strongly support having regex escape method. It’s gotten trickier with v-mode regexes, because v-mode introduces a handful of punctuators that need to be escaped. And u mode does not allow unescaped characters – so we would need to modify those so that they allow those escaped characters as identity escapes. But with that change, it is perfectly possible to have a regex.escape that escapes a thing in such a way it can be used in any context within a regex except in the repetition context. Of course it will mean different things in different contexts, like things will be escaped properly. And, like, that is a thing that people have wanted forever and we have been telling people for a long time, we’ll work on it, and we can’t just continue not doing it and saying we will work on it. It is possible for us to say we are never going to do this and I would not be in favour of that, but that would be a better outcome than the current state where we say we’re going to keep working on it. Because if we say we’re never going to do it, then node is just going to ship the thing that everyone wants and probably browsers will as well and everyone will have the thing that everyone wants, it’s just that we won’t have specified it. That’s silly. We should just do the thing people want. We got to deal with the extra complexity from V mode, but we should just do the thing people want

JHD: My reply is just what he said, the function form will be shipped if we don’t decide to do something because that’s what everyone wants.

MM: Composing code by appending strings together is inherently dangerous. It is something that led to the early appeal of HTML followed by decades of misery of where injection attacks and such things, various kinds of coding confusion was just the bane of everyone’s existence. In exchange for a little bit of convenience up front. We should never make that mistake again. The template tags were explicitly motivated and put into the language to solve context-safe escaping. This is a perfect use of it. MSL and I were the ones who put the template tag proposal into the language in the first place. MSL put together a high quality template library for regular escaping. I’m glad to see there’s another one in use in NPM. From the beginning I did not say we should not do anything. I from the beginning said we should do the template tag the safe regex. I continue to have that position. And I hope that’s what we do. With regard to the other one, yes, the committee should say explicitly we will never do the other one, because it’s bad software engineering and to take context sensitive languages and append code together by string append

KG: So I have a reply to that, MM. I agree with you in general. And in fact the community agrees with you in general. For example, there are a number of very popular libraries for – There are a number of very popular libraries for using template tags to compose SQL expressions. And those are a prime example of a place that need to you do that. And it works well. So the community is not opposed to using template tags where appropriate to compose strings that will be interpreted as code. But for regexps it’s just not necessary. You can just escape everything and it works great.

CDA: Next we have EAO.

EAO: Every time I’ve gone looking for this function on MDN, at least possibly two, three times because I presume it exists. I’ve been looking for the `Regex.escape` version of this one, because the input that I’m dealing with is something that is untrusted input that I want to escape. And needing to go through a template tag in order to get at what I actually want out of it seems clumsy. Strong preference, personal for the regex.escape form.

MF: How is a template tag clumsy? I didn’t understand that comment.

EAO: So if you look, for instance, at the proposal itself, it ends up needing to have you use regex.tag/then dollar, curly braces and then actual thing you’re operating on close the curly brace, close the slash. This is three levels of wrapping around the thing that I’m trying to escape. That just feels really, really clumsy when you’re actually writing it

MF: So you’re saying that the untrusted input that you are trying to escape, you’re not embedding that within a regex. You just want the escaped result of that thing and then later you’re going to use it as a regex?

EAO: Or that I want to use this one in particular, for example, in a template tag that I’m using to construct a regex expression as a whole. I don’t want to escape the whole of it or I want to escape this variable that’s coming in, but not that one

MF: I think you don’t understand how the template tag works then. The parts that are not interpolated are not escaped. They can be control characters. The parts that are interpolated are untrusted and can be escaped. So if you’re saying you can escape this thing and put it into a regex where you’ve written trusted content, you’re using it improperly. You didn’t understand how the tag works

EAO: How with the template tag format can I construct a regex that takes two different variables, one of which I do want to escape and the other one I do not want to escape?

MF: So you’re already at a point where you’re mashing strings together, then. You’re saying that the variable you do not want to escape is a trusted input that you want to treat as a regex.

MM: Can I jump in and answer that. Now that you clarified that. MSL’s template library is an elegant solution. If the substitution value itself is a regex object, then the RegExp object is already a well formed pattern matching and it goes ahead and treats that as composing pattern matching. So it’s very nice and powerful that it both does in a way that’s intuitive for both cases. The composition of regex to (?) registerer as well as the escaping of untrusted input

JHD: Feel free to say this is not something we should talk about, but I don’t know how that works with flags and anchors and other things. Is it extracting the source out?

MM: I don’t know either, but I know that it’s the kind of thing that MSL would have thought deeply about, and it’s been years since I’ve looked at his library, but we did go over it together. We wrote extensive test cases for lots and lots of odd corners. So I’m happy to – if we can agree to go forward with the template approach to this, then I’m happy to take a look at that together, to bring Mike Samuel back into the conversation and to explore that

EAO: Related point here is that effectively with at least as proposed interface with the template tag, it makes the escaping implicit and magically hidden inside. Whereas when I’m dealing with user created I want to be clear that this is absolutely escaping. This is sounding like we’re making a really complicated thing around just – by trying to work around the ability to then possibly combine two strings later on. It’s just – the template tag approach seems just way too complex for what’s needed here.

RBN: This is actually a follow-up to the discussion about the template tags discussion that Mark Miller was just talking about. We’ve talked a couple times in the past about when we had the proposal for modifiers which I’m still working there, one of the things that was in that proposal at the outset was this concept of prefix modifiers, and I’ve posted in the chat as well this I think there is a potential to kind of blend all of these things together, regex escaping using a template tag, using prefix modifiers to supply tags that only works at the beginnings of the string and allows it to specify V mode or X mode to handle spacing would, I think, be a wonderful combination of these various capabilities, because I think that if we wanted X mode and I’ve had a lot of comments in the past few weeks about X mode and folks wanting to have some form of multiline regular expression that a template tag might be the solution for that and the solution that combines these two approaches might be viable.

MM: So for me, as long as it’s safe against the dangers of string append, which it sounds like what you’re considering would be, I’m certainly happy to consider it.

DE: I just want to say generally I’m glad you’re raising this JHD. This is an important topic. I think either approach or both escaping or the template tag are reasonable. And we should do at least one of them.

JHD: Can I ask, MM, if this proposal included both options, would that be acceptable to you?

MM: Well, when you say the proposal includes both options, it is not acceptable to me that something that has the string append dangers becomes part of the language. It is simply disqualified. So for a Stage 1 proposal, for the Stage 1 proposal to include both things as an option is not very much of a commitment. I think as a Stage 2 proposal, absolutely not

KG: Yeah, Mark, like I said, I get where you’re coming from with string composition being dangerous. But it is just not applicable to regular expression escaping. You can escape every punctuator that is meaningful and define those to be the identity escape. And then there is no danger from string append.

MF: The thing I want to say is similar to what KG just said in that in spirit I agree with MM. The general solution is to use a template tag. The more complex the language, the more important it is to do that. The language being the language of RegExp. Regex are simple enough that our escaping function can successfully escape for any context we care about and it provides an equivalent level of safety. That’s the rationale I use to bring myself around to being okay with an escaping function, so I hope maybe that would work for you too.

JRL: I’m trying to reason through my head. I think most things are representable, however, the tag template builder can’t represent all regular expressions. For instance, you can’t match a back tick in your regular expression because it’s a special character inside of a tag template and you can’t have a back tick without preceding it with a backslash and then that backslash will also be represented in the output. So it’s impossible to match on a lone backtick. Similarly, it’s impossible to match on a lone backslash if it’s the final character of your regular expression, just because of the oddity around tag template expression parsing. So I don’t think it's a 100% foolproof solution here.

MF: I think you’re thinking about the raw template value and not the computed template value

JRL: The template tag has to use the raw value or else you need a dozen levels of escaping

KG: As a template tag that does not have the raw value is unacceptable. And if we use the raw value, then these two cases become impossible.

MF: I don’t think that’s true

KG: If I put a backslash between my backticks, that backslash has to mean I’m escaping what a thing within the regex - we shouldn’t talk about this live though.

MF: I’d like to talk to you more about that offline when I’ve figured that out, though.

CDA: We do have a little bit of time left. JHD?

JHD: My takeaway here is what I’m hearing is a lot of support for the function form, and minimal opposition to the template tag form. However, there’s some strong concerns from MM about safety with the function form and there’s some – what I hear is ergonomics concerns if the template tag is the only form. So it sounds to me like we could ship both if we could address the issue JRL brought up and the safety concern that MM has about the function form. And I think I’m going to then proceed with that hope that when – by the time I seek Stage 2 advancement, I would have resolved those questions

KG: If MM is never going to be okay with a regex escape function, I would like to know that. If he is – like, if it is possible we might get regex escape, I would like to go forward with that and not try to design the much more complicated template tag first. I would just like to know if regex escape is possible in any world

MM: So impossible is a very high bar. I can’t predict what – how I might change my mind in the future with certainty, but let me just say today I find it unlikely, very unlikely I do not find it to be – certainly I would reject today any such proposal and it’s hard to imagine that I would be changing my mind on this one.

KG: Why?

MM: Why?

DE: I can’t understand the reason given what KG explained about how escaping doesn’t have this issue

MM: Let me double check some things that I’ve heard about this conversation. That this fully escaped form that Kevin is talking about, it’s meaning is not stable across different contexts; correct?

KG: I mean, if you put a thing within a character class, then if you have two A’s that doesn’t match an A followed by an A. It’s just that you have repeated yourself within a character class. But back slash left bracket will mean left bracket within a character class or outside of one. So it is stable in the latter sense. It is not stable in the sense that character classes are [dirft] from the rest of things. But every thing that is escaped means interpret that – like, the interpretation of the escape sequence is the same everywhere.

MM: I’m willing to take another look at this offline. So I will not say now that I’m – okay. I withdraw that I’m almost certain not to change my mind. I’ll approach this with more of an open mind. But I also think that the sense that there’s an awkwardness to using the tag template form, I think, is mostly based on misunderstandings of how to use it. If you think it’s awkward, you’re probably not holding it right.

JHD: Okay. So what I now understand my forward direction to be is with KG’s assistance, we will attempt to convince MM that the safety concerns are addressed. Assuming that that is successful, then we can proceed with for now just doing the function form and leaving open the option for a follow on proposal to do the template tag form

MM: No. I would really not like a consequence of my agreeing to consider the function form to be that we de-prioritize the template tag form. The template tag form is just better. And it’s the right precedent for considering all other embedded languages as well. And that part we seem to have agreement on: If it’s good for all other embedded languages, and I don’t think we can describe the regex language as simple. Kleene’s regex language was simple but programming languages are not simple. And the general way in which people should approach putting untrusted input into embedded languages should be template tags. So I think that should remain the priority of what to investigate going forward.

JHD: And with that understanding, it sounds like assuming that you can be convinced of the safety of the function form, your preference would be that we go forward with both choices at the same time

MM: Go forward in the sense of neither one is yet disqualified. We have a choice to make, and I would still, even if I’m convinced of the safety of the escape form, I think the template tag form is much superior and I would like to convince everybody of that

JHD: Bearing in mind that node at least - that the only reason they haven’t shipped the function form before is because of this proposal. I can’t speak for browsers, but I suspect they might do the same. And then that functionality would still exist. It’s just we wouldn’t have defined it. Okay. Sounds like this is – I have clarity on what needs to be explored moving forward. Thanks, everyone, for your time

### Speaker's Summary of Key Points

MM is concerned about composing embedded languages by string mashing MM expressed an opinion that the tagged template form is the superior solution Everyone else who expressed an opinion is happy with the escape function KG agrees with the string mashing concern in general but thinks that in this case in particular can be made fully safe

### Conclusion

MM to revisit whether a single Escape function can be made safe, but still thinks that the template tag is unambiguously better and would not like it deprioritized even if Escape advances

## Type Annotations Proposal Update

Presenter: Asumu Takikawa (ATA)

[proposal](https://github.com/tc39/proposal-type-annotations/)
[slides](https://docs.google.com/presentation/d/1OraKn6TUdmtug-lkgijq-43Xou_1lB1_DJ54x6ssnRY/edit)

ATA: Thanks. Yeah, so my name is Asumu. I work at Igalia and I am presenting with DRR and other people who have helped out with this presentation that’s listed below. We’re here to give an update on the proposal, not asking for stage advancement. The primary topic will be addressing feedback that was brought up before. First I’ll go over the proposal context and history. The type annotations proposal got to stage 1 in March of 2022. And just to recap, the motivations for the proposal are static types are widely used in the JavaScript community these days and most can’t be directly run by web engines. So we’d like to improve the ergonomics of using types by allowing engines to process typed JavaScript code. So we can summarize this with main goal of unifying JavaScript with typed scripts. This is another slide showing static types is still popular. This is from state of JS survey a couple months ago that shows that static types is still one of the top requested features. The last time this was brought up to committee, there was this initial presentation focusing on erased semantics for the types so the type would be ignored by engines, just parsed. We heard some feedback that we should also investigate run-time type checking, so the types would have run-time checking. So this will be main topic of the presentation after we give updates. I want to emphasize that we would like to focus the discussion on this topic. So if people with keep that in mind for the discussion, that would be great.

ATA: And so that’s the brief history and summary. We’ll talk a little bit about things we’ve been working on for the initial proposal. There was a tentative grammar for the types and text that was included in the proposal repo and you can see a link for that below. I’ve put a screenshot in that. You’re not expected to be able to read that, just to show it’s a thing. The goal was to accommodate existing type syntaxes and in existing types in TypeScript, Flow, etc. while leaving room for forward compatibility. I just want to go through some examples to show a bit about this. Before the examples, recently we’ve been also working on refining this proposal, so we’re identifying how to extend the tentative grammar to meet the types that are in the tentative systems that are listed there. We’ve been putting forward a syntax comparison table that we plan to add and that’s linked at the bottom there. Some tentative conclusions we reached are that the current grammar supports a lot of the constructs we looked at actually but there are a few cases where we would need to expand the syntax and I’ll give some examples.

ATA: But first in terms of forward compatibility is designed in a way that it supports things that are not explicitly encoded in the grammar. There are angle brackets or square brackets or curly braces, the tentative grammar will ignore tokens between these brackets so that lets you to support exact type, which is curly brace and vertical bar sytax that’s there or flows read-only properties that’s the plus modifier on the key. Or things like typed parameter variance annotations, which is the bottom example.
So that’s supported in definitive grammar, things that aren’t yet supports or things that would be needed, one is type application. So you need type application for supporting generic terms and it turns out the syntax is exact same in Hegel with the F and the angle brackets, so that’s probably not supportable in JavaScript currently because of how the less than operator is parsed. So there’s probably a need for a new kind of operator like maybe a double colon with angle brackets. So this is a change that is very likely needed and would be needed for a lot of these existing tools.
And then there’s some examples where we would need more discussion to figure out if we could put them in syntax or not, prefix types or Flow cast is a little more complicated. It has parentheses or colon operator. There are also recent operators in TypeScript that need more discussion.

ATA: So the bottom line here is that we’re evolving the syntax based on the needs of multiple type systems that we’re looking at. We want to ease any migration to whatever system we come up with and the overall goal is in service of trying to unify JavaScript.
So this is the early stages and the focus of the presentation is going to be mostly on the semantics of the types. So that’s the bulk of this talk.

ATA: So on to the semantics, so there are two paths to adding type to JavaScript in terms of what the types mean. One is what the initial proposal that we bought last year is proposing, where types are erased and engines don’t use them for anything. And the alternative is that types are enforced at run-time, and they are interpreted as some kind of run-time check by the web engine. And this is what we heard feedback about last time that people wanted us to investigate whether this was something that could be done in this proposal. So let’s consider if this is feasible or desirable. And just to be clear, I’m going to spoil the ending here. We the people who are working on this proposal don’t consider this feasible, but we want to explain our reasoning in detail and why we think that’s the case. Let me propose a rubric for trying to evaluate whether run time checks would match with this broader unifying JavaScript goal. So we can break that into sub items. We want it to be easily migratable in the ecosystem. Many people already use types as mentioned earlier so we want them to migrate to whatever system. We want this to be extensible to support different systems people use. And this should also be practical for use. So these all fall into the "unifying JS" goal.

ATA: And the big question is are these goals in conflict with doing run time type checking as part of the annotations proposal. We argue they may be in conflict with these goals. If we consider run time check insertion may be surprising to existing users. And as to whether this supports different tools in the ecosystem, having these run time checks will require us to fix a particular type system semantics that we use to create these checks. Finally the question of whether it’s practical. Turns out these checks can have high overheads in many cases. I think the examples will mostly focus on the last bullet, how practical it is in the performance overhead. So that be the topic, about the challenges of run time type checking.

ATA: So before I go into examples, let’s set some assumptions on how these run-time checks would work so we have a shared understanding on how the examples work. The first assumption is compiler would insert run time checks. The second assumption I think maybe not everyone would agree with, but I have a slide for that later in the presentation. Let’s assume that the inserted checks will do their best to uphold the guarantees. I’m not going to talk about soundness for the rest of this talk for clarity, but that’s what it corresponds to if you care about that.

ATA: Here is a simple example. Let’s say we have function F and it has functions and we annotate the parameter X as having type number and Y having string. What would happen in this run time check scenario is that the compiler would insert a check for the number type on the X parameter, so when you call F it will do this type check. In this case it will produce an error because foo is not a number. For these first order types, the checks are very straightforward, there’s nothing complicated going on. But it’s well known that for in general, run-time type checks, they can introduce performance penalties and require better compilers and language design in order to accommodate them in a practical way. So there’s a bunch of literature on this. One of the most relevant things is "Safe TypeScript" which designs such a system for TypeScript and they did see performance overheads on examples. I can provide more details. There’s also a bunch of academic work on run-time checks for this type of language that show that performance overheads can be quite high and depends on the details of how your system works, but it’s especially hard for structural types, e.g., function types, object types, etc. One question that comes up a lot in this context is why can’t we use these types to make the code faster in a way using optimizations. They would somehow offset whatever performance penalties we might get for run time checks. It’s unclear if engines can actually take advantage of these TypeScript or Flow-style checks and do optimizations that would compensates for the checks. We definitely welcome implementer feedback on this topic and generally on the topic of performance overheads.

ATA: Let me go into examples of why type checks can be difficult. Here’s a function `F`. This time instead of taking number parameters. `O` has type object where there’s a field `X` with type number. And so the compiler needs to insert some kind of check to check the structural type. So you might think, well, we can just put in a check that whatever object is passed for `O` has a field that’s `X` and has a number, sure. But the problem is that it’s more complicated than that. Imagine if `F` in turn calls `G` and passes `O` to it, , and the function tries to mutate that. This initial check that you do on function entry is no longer valid and so you actually could still get a type error. So with this kind of thing you need to do checks in a lot more places, you need to rework the program in general to insert checks that either writes or reads some combination of those in order to make sure that mutation, for example, can’t go unchecked in a way that will violate the type in variance in your program.

ATA: And so one thing you might say is “I don’t care about mutation”, you just want that simple check that it’s an object with this field and that’s fine. Well, that doesn’t work when it come to things like function type. Here function F takes a function parameter G instead and this has a function type that’s number → number. And the issue here is that this type can’t be trivially checked on entry to F like in this previous example where you could check some properties, not the object type. You can’t check anything here on entry to F. You really do need to do some rewriting of the program in order to insert checks to verify that G will return, you know, the right type. And there are other implementation strategies you could take. Perhaps you do some tagging scheme, so ensure that functions are tagged with the right type, as Safe TypeScript did. So you might be able to do some type of check. But in general there are more run-time dynamics that you need to introduce.

ATA: It continues to get more complicated once you introduce more advanced features, whether it’s control features and so on. So going back to this rubric that I was talking about, these examples are shows that there’s a bunch of challenges here with this kind of approach. First of all, you saw in all these examples that we were translating the run-time checks from the types and the type haves a specific meaning that we have in mind. It’s unclear how we could allow flexibility for difference meanings of types to exist. For example, if you have Flow versus TypeScript, maybe there are different types that have same syntax, but different meaning. It’s unclear how you could cope with that meaning, but the other issue is people will use in practice have high overheads of checking, and it’s a significant amount of work for implementers to make this practical.

ATA: So one thing that you might push back on is that you might say that, well, a lot of this problem comes from one of the assumptions that we’ve made, that these checks will do their best to uphold the guarantees of a static type checker.

ATA: So if you do care about this, you really do want to uphold the type guarantees, then you’ll need the structural types that were shown in the previous slides, and that comes with all these performance overheads. Let’s suppose that you don’t care about this aspect. You just want the simple checks. You only care about the simple number or string checks that I mentioned in one of the earlier examples. We think that if that’s what you really care about, that’s the kind of annotation that you really want, this would be handled by an entirely different kind of proposal that I’ll talk a little bit about in the next section.

ATA: So I think no matter which path you take on this assumption, either you’ll run nto these performance issues and that’s the reason for not wanting to do it in in the type annotation type proposal, or we should do it in other type of proposal that’s not type annotations. I’ll talk more about the alternative for run time checking for these simple checks that don’ts try to uphold all the type guarantees that I was talking about.

ATA: The key question here is: Why do want to couple run time checks with the type annotations proposal? Is that the best way forward? So stepping back a bit, let’s think about why would developers want these run time checks any way. We want convenience syntax for writing down checked program type behavior. But this doesn’t have to be the exact same syntax as static types, because static types already have an established meaning in systems like TypeScript or Flow and developers already depend on these meanings and care about them, it could be really confusing if you wrote down things that are similar to TypeScript or Flow syntax but you got checks that have nothing to do with what those tools enforce.

ATA: Instead we think it would be more attractive to have extensions of existing proposals that could provide syntax that is pretty close to what you’d want from run time checking. I have a concrete example here of a lightweight syntax for checks. Instead of writing down type annotations with colons, here we have this number call with – it’s not a call, but a number thing with a primary X and then similarly string for Y. And what these are are actually extractor objects. So this is basically what the extrator proposal and the pattern-matching proposal, both of these are at Stage 1, would together provide. And this is effectively doing that simple lightweight check that I was talking about. This inserts a check for X being a number, no complex compilation involved.

ATA: And so I want to go through a bit about how the extrator’s proposal works and how it provides protocol for doing this. Pattern matching specifies a custom matcher API and then defines a bunch of custom matchers for all the primitive class keys. In particular the number of primitive class gets a new property with the key symbol matcher that the proposal defines, which is a special custom matcher that matches and destructs numbers. And these custom matchers are used by both extractors and pattern matching to define distractor values. So if you have a custom matcher you can use them with the extrator proposal with special binding forms to match and distract values. In this first example you have `const number` and then name equals some expression. This is using an extractor object, that’s the number thing to first match on whatever result is produced by this function producing numbers expression, checks that it’s a number and then binds it to bound name. So you can – this is using it for a variable declaration, but you can use it in parameter function. You can also define your own extractor objects using this custom matcher protocol to implement arbitrary type texts. You can define this const MyType object with its matcher defined in the "..." in the code sample. And then can you use this my type name in function parameter position to basically act like a type.

ATA: And so the whole point here is that there are a bunch of advantages of this kind of approach. It lets developers express type like checks without being constrained by the meaning of static types. It also leverages existing proposals that are already in the pipeline, despite being at Stage 1.

ATA: And this is just one example of how to build on existing proposals. The key point is that it’s possible and that it has these other advantages like not being explicitly tied to static types in a confusing way. And it may make sense also in the future to bring in other proposals such as decorators for more complicated things, for example if you want to annotate function returns or you want to specify a more complex types or have different combinations of types.

ATA: And so the big takeaway from this section is that we really think run-time type checking can be done better in a better way with a different syntax, without coupling it to the type annotations proposal and that that would be the least confusing thing for everyone.

ATA: So let me summarize the discussion, sorry, the presentation so far. The big takeaways from the presentation are that we the people who are working on the Type Annotations proposal have taken this committee feedback and investigated the advantages of erased types versus run-time types and especially looked into the feasibility of doing run-time type checking. And in our opinion it’s really hard to meet the proposals goes to unify JavaScript with its typed variants while also having run-time types. And we think that run-time type checking can be done better in a more intuitive way by a combination of other proposals. So we are also working on iterating on the syntax as well and we had a very quick presentation on that in this talk. It will be presenting more details on that or we plan to present more details on that in future presentations. I’d be happy to take feedback or Q&A at this point and would especially appreciate discussion on erased versus run time typed portions of it

MAH: I think I’m first on the queue. So I also believe that run time type checks are better served by other proposals. I think decorators are a good fit for most cases. However, I don’t think it’s an either/or answer here. One possibility is that the typing information that was added there could be made available, for example, to decorators, which could decide to use that information to do run time enforcements.

DRR: Well, I see we have a reply. I think that I’d like to let DE make his point eventually because it’s part of that, but I will put out that that we’ve been in touch with the CPython implementers and one of the sort of pregrets they had was by default types were reified all the time in that every single time you need to reference a type, that actually has to be a run-time operation of some sort. It has to be in memory. It has to be retrievable. So there’s a bit of caution there. If you do that by default, you can’t put the genie back in the bottle, which is the situation they found themselves in Python where they tried to say what we did this on-demand or you had to opt into it, and they had to roll that back. So now you have to opt out when you don’t want that. Or you have this import from the future or something like that. So there’s a little bit of caution. I’m not saying that there’s not something that we could do down the line. But I would say that primarily what we’re trying to do with type annotations is have them erased, have them not contribute to the runtime behavior and find other capabilities where maybe some other solution like that could reflect – the wrong word, could have a symmetry what you would write in type space and what you would write in value space, run time space.

DE: There’s several things here, what briefly, I guess to make concrete what DRR was saying, a minifier should strip away all the types, but if it’s reflectable, it can’t unless it does some complicated analysis. Also, this is an important question that Matthew is raising, because the textured mode to emit decorator metadata which emits types, but reflects metadata and stuff on classes, this is a very popular flag. So even as introduces efficiency issues, it’s a clear demand from developers. But it’s really unclear what they should emit. If we wanted to keep this as a language thing which has to be, like, universal, we can’t make any decisions that might kind of be ad hoc. I don’t want to be too critical here because it’s a useful feature. But the only thing I could think of that could be there is the string of what the type is. How do you resolve any variables? Type systems use a different namespace. If we could think of a way to do this feature, I would like it. But those are my concerns.

DRR: Right. And quickly adding to that, you may think that you’re just trying to get one type, and yet the underlying types that that thing has to be refined as is this whole monstrosity that you don’t realize you’re bringing into run time until what bundle you interest to produce. That’s a tough tradeoff for people they don’t realize they’re making

SYG: Hi. So what did I say? Oh, yes. The presentation may have suggested that perhaps implementations would be okay with simple nonstructural type checks. I think the bar is much much higher than that. We have concerns with the type eraser proposal with just the parsing cost of the things to throw away and parse. It could be structured. It’s not just a line comment or something. We have performance concerns about just that. Like, we are not okay with any kind of run time type checking, even if it’s simple. That’s all

DLM: +1 to what SYG said, we also share concerns about performance about the type eraser and parser and I don’t think we’d ever support a proposal for run time checking

MLS: Yeah. The only thing I would add is that even if it’s true run-time type checking, I imagine that all the browser-based engines at least, I don’t know about XS, we have typing system in our higher tiers. That’s how we get the performance, because we know this is a number or a string or it could be a string or a number, blah, blah, blah. This provides us no benefit even if we do type checking. It just adds an overhead. And what’s the semantic if we fail type check? What do you do?

JRL: Okay. Unless there’s anything else on this topic, next up is MM.

MM: Okay, yes. So I was really struck by the idea of using extractors to express dynamic type-like checking. I know that I was very negative when extractors were first proposed, but they’ve grown in appeal in my head since then. In general, one of the criteria for anything that extends the language is that it should have very wide reach, it should solve a very wide range of problems. And this use of extractors in this mode suggests that if extractors would generally enable sound static inference because the things that you’re inferring start with something that was checked, then a language with integrated extractors designed to enable good sound static inference might be one that’s just better than a language with type annotations.

DE: I don’t see why this is an either/or thing. Extractors can definitely check at the mesothelioma [?] they’re executed that its argument has that type. That would be sound. If you mean soundness in a more nonlocal way –

MM: In a more nonlocal way that the bindings are of known type that they were extracted and that you know that if execution continued on success path, that the input did pass the extractor check.

DE: Making a mutable binding, which has checks when it’s written to is a much narrower thing than I think people often want with type system soundness checks. You want to check tricky nonlocal properties and structural properties like the one that ATA explained. I think it would be a way to do a check at a particular moment in time. I think that would be useful, especially at API boundaries, the kinds of things where you want to use private fields and methods. This would be analogously useful to make a high integrity boundary. Play well with each other. But I think this serves a different need from type systems.

DE: So if you had the use of an extractor, I think it would be possible for type systems to easily infer, okay, you mean this argument is this type. That when YK and I were thinking about this area about guards a few years ago, he made an example program that would use TypeScript’s way of asserting types to build a guard system that TypeScript was able to execute run-time and such. I don’t see any reason why this wouldn’t map over to extractors.

DRR: And to add on to the point that they’re really complimentary. There’s a feature where people often ask us to be able to more specifically type the variable of a catch clause. It’s a very common complaint. Most people want to be able to say that the thing that you’re catching is always an error. That’s not in practice always enforceable. So often you would want to be able to say, yeah, I really don’t know what this is, because provided that it doesn’t pass this check, now do something there. So an extractor would be able to validate, yes, I have an error. Yes, I have another object or there’s cases where you sort of seek a blend where your public API really wants to enforce those run time checks, but internally, for all intents and purposes, you consider yourself sufficiently consistent.

DRR: And so they are really nice in that way and you can actually build tooling to say, yeah, my public API always needs to do those sorts of run time checks. You really are committed to that as well, but have you the option and can compose

DE: Mark, does this answer your question?

MM: I’m not sure. It’s all intriguing. I see Ron is on the reply thread here. I do want to invite RBN to take this as an opportunity to revise the extractor proposal. Like I said it’s been growing in my head on other grounds anyway. If it can elegantly solve some of these problems, that would be great.

JRL: Want to go through the queue items here. We have a couple replies about extractors. MAH, if you’ve not spoken yet.

MAH: So it’s more clarification, because I’m not familiar enough with extractors, but would that approach work with bindings that are reassignable?

RBN: The answer is no. That go to the comment I was going to make about extractor limitations. I think extractors are a very interesting potential avenue for type checking of a run time checking at the parameter level where you’re only having to check the inputs once and that’s that transition from the call site to the callee, but they don’t perform any type of action on where you’ve defined them. They are essentially just a form of destructuring. So they can provide a run time check at those boundaries, but they don’t have any impact on any type of reassignable bindings. You might say that X is a string, but then you can assign it to a number in the body because that’s all unchecked.

RBN: In the case of extractors in those cases, a type system might be able to infer the type of parameter to say you used this thing hand the only valid input will be a string, and I also apologize if any dog is making noise here. But we don’t – we wouldn’t be able to use that at run-time to perform any checks in the body. Extractors also have limitations in that they don’t provide any type of information visible or externally reflectable information about those parameters, you can’t use them on class fields. For one, there’s a conflict with method declaration because they would look the same and separate from that, again, it’s a type of destructuring, so even if they were feasible, all you would be doing is checking that on the initial assignment. But, again, not if you mutate that property later on. Also about your point for decorators to solve those. Decorator is interesting for providing rich metadata at run-time that could potentially be used for run-time type checking, but even a decorator on a field can’t do a run-time check on mutable assignments, there’s no potential for that unless you mark that as an accessory if field which allows to represent reads and writes. So there are limitations on what you can do with decorators, but they do give you the ability to provide toze type checks at a boundary.

MM: That’s definitely clarifying. Thank you all for the clarifications.

ATA: I was going say most of what I was going to say was covered by DRR and DE.

EAO: Okay. So the sense I get overall of this whole proposal, that it’s more of a – it’s a solution looking for a problem that it’s trying to solve a year ago when this got accepted for Stage 1, the problem statement that was in fact considered then was only effective we made up or made concrete during the meeting itself, and then – so what it looks like now is that since then, that problem statement has evolved to this current form of unifying or unforking JavaScript and somehow then presenting type annotations as a way of achieving this result. However, I’ve not been able to find any conversation anywhere or description of how in practice this unification is supposed to happen as a consequence of accepting type annotations.

EAO: Now, I filed an issue about this specifically, but I think in general, I’d like to give a little bit of feedback here in that I would presume that we are supposed to actually solve the problem that has been identified here, rather than looking at the technical specifications of a particular possible solution for that.

DE: So I think I have to say I have a little bit of trouble taking it seriously when people say do you know what problem you’re solving? You can say you haven’t proven your motivation. But this came up with records and tuple as well. Anyway. The way that things are explained sometimes evolves over time. Anyway. For this unification goal, which I personally consider very important and I’ve considered important through the whole life of the proposal, we’re almost there to have all the language features that people have been using in the tooling space in JavaScript, and this has been kind of a unifying theme of what this committee has been doing since ES6. It was unifying JavaScript by making built in classes and subsequently built in fields and these sorts of things. We’re filling in the gaps where the ecosystem has been solving language problems, things that are logically language problems with language extensions. Type syntax that doesn’t have to be in a comment block is one of these popular language extensions. It would unify the ecosystem to have a built in form of grammar for this. You can see similar dynamics taking place in the CSS working group, things like variables and nesting that CSS is adding solve deep problems that have been solved by tools. Although tools are not going away, neither in CSSs or JavaScript, I think built in JavaScript gives a unified base for everyone to work off of. I think in language, it’s useful in many case to have this comment base

DRR: I very much want people to take to heart on what DE just said and I want to kind of frame this idea of where this proposal is going over time. I want everyone to take the five year view or the ten year view even, where is JavaScript going to be in ten years. There is this extremely popular, there’s several popular fortunates for annotations around JavaScript. People found it extremely useful. I’d say almost everybody here, maybe in some pocket of code has used TypeScript in some flavor. Maybe not everybody, but maybe the majority of the committee at this point I would say. So there’s this clear utility, and there’s a question of can we make the use of that less friction-y, can we make it easier for people to use, can we make it this low configuration thing at the very least. And part of answering that is actually discussing it here in committee over time, trying to understand, trying to come up with a shared vision. Can we find agreement on those things? Over time we might have to come to different shared understandings from what we originally came to. These ideas took a while in, you know, little laboratories to try to see if people actually like the ideas and see what worked and what different work. Some of the features are not used very much anymore and could probably be dropped a little bit. And some of them are extremely useful and are shared between different type systems and things like that too. How much can we explore here? So today we came with an update to ask can we even agree on no run time type behavior, right. No run time checking. Because if we can’t come to a shared understanding there, it’s very hard to go somewhere in the future. But it seems like we’re not seeing a ton of pushback on that point. Maybe this are other directions that we can explore. Maybe we find other place [?] the language can find the same facilities people are looking for. But even by moving to Stage 1 here, we had an avenue to discuss that, and that with was the biggest thing that we really were seeking last year. I think this conversation has been extremely helpful in building some shared context.

DRR: So when we talk about unifying JavaScript in ten years is this going to be a viable thing, can we come to a shared understanding, can we have those conversations, and we will try to do that tastefully, because it will have to satisfy the criteria that we outlined in the presentation. It had to agree with the existing type systems, but it also have to agree with everybody in here. You have to build consensus and feel good about where we’re going with this. It has to be tasteful. If we end up on the XKCD with 14 standards, now it makes it harder for people, that’s not a place where we want to be, where it feels bad and there’s more frictioning and the tooling is not helping with any of the problems at all. I don’t know if that answers your question, but I hope it gives some outline on how to frame it, how to frame the ideas here.

JRL: We have one minute remaining. If the champions want to ask for any consensus. I don’t think you’re going for advancement; but you want to ask for run time. JHD, I believe we shortly discussed your topic. If you want to say anything last before we wrap up

JHD: Yeah. I mean, I think to what you were saying, DRR, is that if you think there is a timeline, whether that’s one, five, ten years, whatever, at which TypeScript et cetera would no longer need to do any downleveling at all and would be a type checking tool, I think that is an important vision to convince the room of. Because without that vision, the proposal with or without runtime type checks is a very large surface syntax change to the language. And if we never were to get to that point, then how much have we really unified?

DRR: You’re asking about if – I think down leveling behaviour can be viewed as independent of –

JHD: TypeScript or Babel or whatever. And I think this is somewhat different in that usually we ship small proposals that are independently motivated that add up to large pictures as well. This is not a small proposal. It’s primarily motivated by the wide vision

DRR: It is a long term vision. I do not expect us to rush this in the next month, year, several years. We will have to build consensus

JRL: We are at time now. I encourage you all to continue talking about this after, after the meeting today, but we’re still packed for the rest of the schedule. Do the champions want to ask for any consensus before we move on?

DE: The question was does anybody have any concerns about to the extent that this might happen, using the erased semantics rather than the run time type semantics, this isn’t to express endorsement or strong resolution. That would be out of place for Stage 1, but it would be great to hear these briefly. Nobody wants to advocate for non-erased types?

JRL: I think beyond that there was strong pushback from browsers that runtime types are very difficult. Let’s wrap here. We can add anything else into the notes for the topic.

### Speaker's Summary of Key Points

- The type annotations proposal has continued to evolve on syntax, and a detailed presentation explained why the approach of the champion group is for the semantics being based around type erasure, rather than runtime type checking.
- There were significant questions from the committee about the motivation for the proposal.
- The three browsers expressed that runtime type checking in type annotations would be unacceptable.
- No one advocated for semantics other than type erasure.

### Conclusion

The proposal remains at Stage 1; no consensus was requested of the committee.

## Type Annotations Delimiting Concerns

Presenter: Waldemar Horwat (WH)

- [slides](https://docs.google.com/presentation/d/1TLGdvGfOn2wl-_i_HfrfpgFkdffrhCnisowdkOiebB8)

WH: Since this proposal is mostly syntax, I wanted to raise some issues about syntax. Let’s start with an illustrative example. Here you have a function which does a bunch of things. Is this a valid function? What does this do? Well, at first glance it seems to be okay. Looking closer there is this little syntax error, so you might think that this whole thing would be syntax error. But in fact, with something like TypeScript-style type annotations being proposed, this can parse as something completely unexpected, and this has to do with “token soups”. At a high level, a token soup is something that starts with a delimiter, consumes a bunch of tokens, and ends with a matching delimiter. And this has rather surprising consequences in a program like this. If you’re looking carefully, you might spot a couple other surprises, which I’ll discuss later. But this presentation is mostly about the consequences of having token soups in the parser. So, again, token soups just skip arbitrary sequences of tokens, only matching parentheses, square, and curly brackets.

WH: It’s unknown how lexing slash as division versus regular expression would be handled in a token soup, which is a problem. Token soups are used liberally in the proposal to skip past various kinds of type expressions. Here I outlined a bunch of them. All the ones in orange are token soups. And the question is: can you tell that something starts a token soup before the token soup starts? And that’s a crucial question. Without a correct answer to this question, the consequences fatal. There’s a couple possible answers you can give.

WH: Option A is: it’s unambiguous to the parser whether it’s starting a token soup based on whatever precedes its opening delimiter. Option B is: the parser might not know whether something is a token soup until it sees what follows it.

WH: Let’s explore option B first. So here we have `… {a:b} => …`. Whether the `{a:b}` is a type token soup or something else depends on the `=>` after it. But what happens if you have a token soup which contains `{yield / 3}; a = “4/}`? Well, it depends on whether you treat the slash as a division symbol. Here the token soup ends in one place or you treat the slash as starting a regular expression. It ends someplace else if you treat the slash as a division operator. So you can’t really skip past the token. Now, you could say that you will always decide one way or the other or ban slash inside token soups. All three of those have other fatal consequences. So those are not good options either.

WH: So let’s go with option A: It’s unambiguous that the parser sees a token soup from what precedes its opening delimiter. Here I already gave a counterexample to that at the beginning of the presentation where, from a cover grammar, you cannot tell whether something is an async function with some type parameters or whether it’s a less than operator. And, in fact, because it’s a cover grammar, the identifier doesn’t even need to be `async`. It happens with any identifier like `foo`.

WH: Here’s another example, `a: (type) => (foo())`. You could interpret the arrow type as token soup, because it could be an arrow function with a type followed by a function body. Or this could be a label `a:` followed by an arrow function with an argument. So here you can’t tell either.

WH: It gets worse. The arrow is used for both arrow functions and for types of functions. So depending on whether there’s another arrow following this thing, this `(foo())` could be a function expression body or it could be a token soup. And there’s no possible cover grammar you could write that accepts both.

WH: So if we have anything similar to TypeScript syntax, then option A is also infeasible. So both options are ruled out. This seems like a fatal flaw.

WH: The other problem you have is you can’t embed constant arithmetic inside token soups because of the division problem. The problem also extends to `<`. Let’s say you want to have a constant expression whose value is `a < b ? a : b`. The token soup will misparse that because it will think that < is a delimiter, which it isn’t. These issues were filed a year ago. There has been no substantial activity in the last year.

WH: There’s a bit more. Since this so closely follows TypeScript syntax, it also introduces additional operators which are not reserved words. I don’t know how this works in TypeScript — I have not been able to find a TypeScript spec that’s recent. It’s possible that it has some conditionally reserved words in some context, but without a spec, I just can’t tell. One common context is `as` followed by parentheses, square brackets, or curlies, which are interpreted and skipped as token soups. Okay. So far so good. So let’s say we adopt this syntax. And then the proposal gets accepted and somebody writes `module as {…`. Now is that a token soup or is that a module body?

WH: So this will introduce a lot of conflicts with other future proposals leading to a death of a thousand cuts. And the result is if we try to adopt a syntax which is very close to TypeScript, we find that we just can’t. It’s like we’re trying to square a circle. So we must adopt something different. And if we adopt something different, then we’re introducing yet another incompatible type standard when there are already a bunch of perfectly good ones. And that’s the end of my presentation.

JRL: We have five minutes left. I screwed up the queue, so I don’t know how to fix it. But RBN is up first. The queue is already fixed.

RBN: So you had an example that shows a parsing ambiguity with `async` arrow and as I understand it, that’s still an issue that’s being worked out. I would like to point out that you also had an example, this one here of `Foo` angle bracket as being a potential source. And I did want to point out that this was already addressed in the slides in the previous topic in that they were looking into – we’ve been discussing something like the Rust’s turbofish operator, the double colon angle bracket operator for anything that would look like a tip argument that’s passed to a call. So this, I think, is under discussion as not being valid syntax within the type annotations proposal, although I think it is true that we need to look at the previous example regarding `async`. That’s being looked at

WH: I think you misunderstood the example. The example does not have type parameters of function calls. This example is just the async cover grammar `CoverCallExpressionAndAsyncArrowHead`.

RBN: I see. So the issue is that it’s using member expression and then looking at type parameters. Thank you. That’s fair.

DRR: So I do appreciate the name for this, “token soup”. It is kind of funny. So I think when we put together the grammar, the tentative one, the one that is really supposed to be a starter for ideas, it was not something we were necessarily committed to as-is. It was an idea. The biggest thing we were trying to do is accommodate the existing languages, basically make room for TypeScript syntax, Flow syntax, things like that. Over time, there’s a question of how much language stability there is across these checkers. And there’s definitely been this question: Could we make that more concrete over time? And in some cases, like, we could add things to TypeScript where you would need to use a more unambiguous syntax in some cases like a double colon operator when you’re doing type arguments for a function call.

DRR: Now, I appreciate example 1. I mean, it’s not something that I’ve not given a chance to give much thought to at this point, to be honest. Partially because until we got a sense of habit type appetites [?] on other things, for example, the run time checking today, it’s a lot of work to resolve the grammatical issues if we didn’t see forward progress on other fundamentals. So I think that’s why you didn’t see much response there. We can start thinking about it a little more deeply and understand what we need to do going forward. I’m curious to get a sense of other people’s thoughts here though. Dan, you have an item in the queue

DE: I really like the token soup concept. I understand DRR is willing to compromise on it. But I think it’s really important for the extensibility of the type system. If we tried to give productions for all the types of things for what we consider a reasonable set for the various type systems to have, then that would seriously limit extensibility. It’s helpful, WH, to have this set of grammar issues set out, and I think we can use this to iterate on the proposal. It’s hard to see it as a fatal flaw. Definitely for the proposal overall, but even with the specific concepts of token soup, I don’t yet understand why this can’t be made to work out.

WH: Yeah. I tried to explain why this is a fatal flaw, and one of the problems is that a token soup cannot contain an arithmetic expression as a part of it. Which means you cannot ever have a type system which uses constant expressions.

DE: Yeah. Because this wasn’t put on the agenda beforehand, the slides, I haven’t really been able to look at this closely enough to understand. And I had trouble understanding it online.

WH: The basic issues have been filed a year ago. There has been no motion. In this presentation I’m purely focusing on the grammar. I do have opinions, which I did not cover, on all the other issues from RBN’s presentation about whether we should be doing this at all. Here I just wanted to give a short presentation, just illustrating some of the grammar issues.

JRL: I think this is still Stage 1, so there’s time to work through this and hopefully we’ll be able to solve the fatal flaws here in the grammar, so this is acceptable. We are now one minute over. Shu, your topic is the only thing left. Do you want to quickly state it?

SYG: Sure. I also confess to not appreciating the full details of the grammar problem here. But my takeaway from WH’s presentation was that at the end this has to divergence point that, like, regardless of the fatality of the current thing that’s tentatively on the menu with token soup, because of type application is a thing in TypeScript and because less than is a thing in JavaScript, it seems like there has to be a divergence point and RBN floated the idea of the turbo fish operator. Because you necessarily have to diverge the syntax, then have you this N plus one standard problem. That can’t be just worked around. I would like to hear that more seriously addressed than from the champions than just TypeScript will try its darndest to get people to move to new syntax

### Speaker's Summary of Key Points

- The type annotations proposal has continued to evolve on syntax, and a detailed presentation explained why the approach of the champion group is for the semantics being based around type erasure, rather than runtime type checking.
- There were significant questions from the committee about the motivation for the proposal.
- The three browsers expressed that runtime type checking in type annotations would be unacceptable.
- No one advocated for semantics other than type erasure.

### Conclusion

The proposal remains at Stage 1; no consensus was requested of the committee.

## Await Dictionary for stage 1

Presenter: Ashley Claymore (ACE)

- [proposal](https://github.com/tc39/proposal-await-dictionary)

ACE: So this is a new proposal in that it’s Stage 0, but not new in that it has been around for a while. I recently took over ownership of it. I don’t believe this is the person being presented at a plenary. Kind of the problem that this proposal is looking at is seeing if there’s a problem here. Can we do something in this situation? The code starts out great. It has something needs to get async on nously. It gets it, awaits it. Code needs a second thing, so it gets it, awaits it. We used a waterfall because we could have done these things in parallel, but we didn’t. This doesn’t get merged. Whoa whoa whoa, there’s a waterfall, do those two things in parallel. This is great. Then we need a third thing. The code is using promise all, so the person [?] doesn’t introduce a water fall. They keep expanding the existing fork join that we’ve now started. Time passes, requirements change, more and more things come along. Application becomes more complex and we end up in a situation where we’re now at a point where for me personally the code has now become harder to read. Complexity of reading this over time is worse than linear. One of the problems here is similar to a function call where you just have ordinal parameters, you have to make sure everything still lines up. So here when I’m looking at the code and if I’m looking at feature flags, and I want to be sure that a feature flag is coming from the right place, I have to count one, two, three, one two, three. Ideally I want to be able to control-click in my editor and jump to where that’s coming from. But I really can’t. I have to start counting, and then this problem gets harder, the harder it is to do that counting.

ACE: So the problem isn’t a technical one. It’s a human one of reading this code and being competent at this code or navigating this code. So what would you do today? Maybe someone that is confident with promises would rewrite it like this. So they would launch all of the tasks, holding onto the promises and then await them. Or instead of awaiting them individually, await them as a promise.all. I think this is fine. This is what I’ve done in this situation. It can be a little bit annoying to rewrite code, to switch over to this. I also find for me personally, I find it annoying that I have to introduce so many more variables into scope. This becomes annoying, this is a larger function when I start typing session and it doesn’t auto pleat [?] session P. I really don’t want these promise to be in scope anymore. I effectively want them to be treated as something you shouldn’t have to think about at all. It’s not clear in the code that these are no longer used and these are all sharing this one big bag of scope.

ACE: So a potential way that we could solve this is having an API like promise.all that is like a nominal version. So you pass in a bag, a named bag of promises, and it waits each promise and gives you back a promise that resolves to an object that you can then destructure. So this way, you’d use it just like you use promise.all, but you don’t have to worry about keeping these things in the right order. It’s all based upon length. An alternative like possible approach and maybe there are other ones. Like this is mainly asking for Stage 1, so I want to focus on the problem. I’m not saying these are the only two solutions, but these are the solutions that jump to mind, is an alternative is focusing on something where you say I want promise from entries, kind of the motivation for this is avoiding the can of worms of what does it mean to kind of get all the things from an object. Are we talking about all the enumerable properties, just the string properties, prototype chain. It is a whole design space change, change of what the user expects. Design space ignores all those things, because it uses a more well understood protocol. The downside of being more verbose.

ACE: So what are people doing in the ecosystem? Blue bird had a .promise, which can also source graph. Also npm libraries for this API, combine promises and props and together they have about 180,000 downloads a month. So it’s like the first of the two. There seem to be APIs that naturally emerge into the ecosystem. So there’s also the waitbox proposal. And I don’t think – I’m kind of only mentioning this to say I don’t think that proposal precludes this or vice versa. So if that proposal went ahead, then potentially it would also have that method added to it. One of the questions that comes up is why only looking at a nominal version of promise.all. Is this actually adding a new dimension that all of the things would add. I think the answer to this would be no, but again, I think that maybe that’s something that would be kind of looked at in Stage 1, if we went to Stage 1, just to be sure what’s better here, being consistent adding more things or going for a much slimmer API. I think it’s a natural question to ask. As I said, I think the answer to this is probably, no, we don’t want lots and lots of new methods.

ACE: One other question is can’t people just write this in userland? And, of course, yes, they can. Potentially this is like maybe the shortest way of writing it. Probably not the most performant, but probably shortest for lines of code. It’s not very long. I don’t think people – I think to write this not a lot of code, I think you have to be very comfortable with promises to quickly write this out. If you’re writing the code and felt like you wanted this, didn’t want to use a library, just wanted to do it yourself, I’d be surprised if a lot of developers would just immediately know how to write it. I think a lot would, but not the majority of people would spit this out. I think it requires a certain level of comfortability with promises, which I think we’ve discussed before not all developers feel super comfortable with promises.

ACE: So that’s the presentation. It would be great to get people’s thoughts, feedback on if this is a problem, and if it is should we try and see if there’s a way we can solve it

JRL: 12 minutes remaining, so I think we should have enough time. First up is SFC

SFC: There’s a lot of other great topics as well, so I’ll be quick. I definitely think it’s a problem and I think we shouldn’t limit ourselves to just an API solution. I think we should explore a syntactical solution as well. There’s a couple other entries on the queue with ideas for that, so I’ll yield my time.

KG: I support this proposal in the same that it’s in. And particularly, own props form, not the entries form. The entries form is too awkward to use. I also want to speak to why I think this is worth doing. Promise.call is kind of different from most things in the language in that there’s these sort of two lists that you are keeping in sync with each other. There’s the bit you get out that you’re destructuring 90% of the time and the bit that you put in. Array.map: So the values are not necessarily particularly related to each other. So it doesn’t really make sense as a list. The only reason that it’s a list is because that’s the structure that we have. But it’s the structure of this function is different from most functions because in addition to putting things in, you’re getting things out that correspond to the things that you put in in a way that’s these are like two collections of heterogenous objects. You have to keep these collections in sink. And that’s a nune eke thing. What I’m interested in exploring syntax, I think the syntax is a thing we’re exploring in other proposals and is best explored in other proposals because it is sort of more cross cutting. Since we already have `promise.all`, even if we did have syntax for this, I would want to have a library form for this as well. So I think it makes sense to pursue the library form of it prior to pursuing any additional syntax, which can happen later.

SYG: This may be just my naivety as a non-JS programmer who doesn’t program that much JS, but when I was reading the proposal on the slides, is the basic problem that positional things are hard to keep track of? Like, if so, why is it worth solving here for `promise.all`? Is it because `promise.all` is special in the way KG said? Why aren’t provisional function parameters super confusing.

ACE: So I think yes you’re right that I’m posting that the primary problem is the tracking of all the things. Personally I feel like in some ways it is a solved problem for JavaScript in that we have a solution, which is, instead of having a function that takes many arguments, it takes one, which is an object that’s destructured, but to use that, you have to be the author of that function to use it. It’s a breaking change to just change to that. So I guess it’s like we’re in a position to write that function in the language, and we’re in a position where we can make a named function argument using the kind of existing pattern that the language allows. And, yes, I think – is it solving it specifically promise.all, I think it is an API language that’s prop you lar [?] where it’s collection in, collection out, where the person who is calling it kind of cares way more that it’s named than the person receiving it.

JBD: So I think my response also builds on what KG is saying. When the list of a function’s arguments usually are related to each other. They have a semantic that attaches to each other and they mean something. But while you can pass a list of similarly related things to `promise.all`, also often one is passing unrelated things that simply one wants to parallellize and not make block each other. And it just doesn’t – at that point yes, it is hard to count them, because there's’ no inherent meaning in the code. It’s literally just like I want to `await` all these things together and then get them back in variable names and it’s just hard to keep track of that. I’ve got lots of places in code where I have these two lists that I keep in sync, an it’s just annoying boilerplate that’s easy to get wrong

KG: And there’s no inherent order. If you switch two arguments to a function, that’s a different thing. If you switch the order of these things, they are ordered because you have to put them in in some particular way, but they’re not –

JBD: All is ordered in the sense that the first one fails, but usually when I’m doing this, I expect them to succeed. If I cared about the order.

SFC: I have two replies. One is when I am wearing the hat as a JS user or programmer, I find myself when I’m writing complicated code, I use the library that gives me the ability to name promises or name callbacks. I find that to be very important when organizing my code. Being able to do this in the syntax would be finally the last thing I can be before I can drop my library and use native JS promises to do everything I need.

SFC: My other topic is regarding arguments. There is some precedent already at Intel for using a promises bag, which is your named promises. And it makes code much more readable. I don’t need to go on more about that, but yeah. Not everything needs to be positional, and there’s – we already have precedent from things get unwieldy positional, we turn them into an object.

HAX: I support Stage 1, because I think it’s worth to explore the problem. But I hope we don’t limit it to await dictionary as the only solution. For example, Swift, which also has async/await, but does not use promise. It has the underlying mechanism TaskGroup which have the similar API like promise, but most of the time, developers do not need to use that. It has a syntax like `async let session = getSession, user = getUser();`. It can be used to solve most use cases of `Promise.all` or this proposal trying to solve. I don’t mean the Swift solution is better, but I think we could explore different solution for this problem. Thank you.

WH: This seems like a solution to a subset of what I think the problem is, and I view the problem as having dynamic dataflow graph, wherein these things can be doing an operation and then feeding the results to the next operation and so on. So I would hate for us to spec this library and then have to do yet another library to solve the data flow graph problem. As part of exploration I’d like to see if we can do a more generic solution.

ACE: Off the top of your head of any other languages that could be inspiration for me to look at? Just if you have any off the top of your head

WH: Data flow languages. And there are languages which do that by default. Haskell and such. But that’s inherent in the language.

JFI: I had a comment related, if my microphone is working. Yeah, I noticed it in other places. I think DE had expressed interest in is there something around signals that the language could look into. The scale to depend on the result of the other one and whether that breaks down. So with Waldemar’s question of is there a data flow library for promises that might go in parallel or sequence, does that relate to signals at all? Nothing concrete. Just pointing that out.

DM: So when we discussed this week, we were all skeptical about the motivation behind that. I think Shu’s point around that resolved it. I see this focus on the API first and then look at syntax as a separate portion of that

JRL: Okay. We are right at time now. Would you like to ask for consensus

ACE: I would like to ask for consensus for Stage 1 to explore this. Yeah. My preference is to explore this as an API.

JRL: Do we have consensus – I think we’re at Stage 1, so we’re not tied to a particular solution yet. But consensus to explore this at least as an API solution. Explicit support, please?

KG: I explicitly support this.

RBN: I also support this.

JRL: Okay. And does anyone object?

MM: I do not object, but I want to – I do support it as a Stage 1 investigation, but I want to register my reluctance. I think that the feature in any of its forms doesn’t pay for itself, that the inconvenience that it’s overcoming, once you pull the launching off into separate variable declarations is minor, and it’s a specialized solution that then gets multiplied by four once you take into the oring that nalty to the promise.call

KG: Only two. Race doesn’t make sense here. It’s only the things that return lists. That’s all in all settled

MM: Okay. That helps.

ACE: Thanks, Mark, your reluctance is registered and won’t be ignored during Stage 1

JRL: I think you have several explicit supports and no one objecting. I think you have Stage 1

ACE: Thank you very much

### Speaker's Summary of Key Points

- The ordinal aspect of `Promise.all` can make the code harder to follow
- An API that allows a named variant could potentially still encourage parallel data requests while remaining readable
- There were some suggestions to also explore a syntactic solution, however there were also points raised that a syntax based solution would not be favourable
- It was raised that there could be a wider space that should be explored, citing dataflow languages and ‘signals’.
- MM raised a reluctance that this problem justifies new additions to the language; the existing solutions seem reasonable.

### Conclusion

- Stage 1
- Explicit support from RBN, KG, CDA on behalf of IBM
