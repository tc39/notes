# 13 July, 2023 Meeting Notes

-----

**Remote and in person attendees:**

| Name                 | Abbreviation | Organization      |
| -------------------- | ------------ | ----------------- |
| Jesse Alama          | JMN          | Igalia            |
| Ashley Claymore      | ACE          | Bloomberg         |
| Michael Saboff       | MLS          | Apple             |
| Samina Husain        | SHN          | ECMA              |
| Istvan Sebestyen     | IS           | ECMA              |
| Waldemar Horwat      | WH           | Google            |
| Shane F. Carr        | SFC          | Google            |
| Linus Groh           | LGH          | Invited Expert    |
| Jonathan Kuperman    | JKP          | Bloomberg         |
| Nicolò Ribaudo       | NRO          | Igalia            |
| Chris de Almeida     | CDA          | IBM               |
| Daniel Minor         | DLM          | Mozilla           |
| Daniel Rosenwasser   | DRR          | Microsoft         |
| Mikhail Barash       | MBH          | Univ. of Bergen   |

## Using WebAssembly as a polyfill for ECMAScript proposals

Presenter: Shane F. Carr (SFC)

- [slides](https://docs.google.com/presentation/d/1MKceo1Pn1PvuMz1WkzGwIpbT5qRNZVZRxY3rgcPJOKI/)

SFC: Yes. Perfect. I will go ahead and get started then WASM models and as polyfill and libraries. I am SFC. Most of you know me, maybe not everyone. I work at Google on the engineer team and have been participating in TC39 for five years. Yeah. So I will give a presentation here about the – some of the problems that I saw as part of my work in this area.

SFC: This is a little flowchart regarding the current state of what my team is working toward with regards to portable I18N, I followed by 18 letters followed by N at the end. We have abbreviated this I18N. So I ICU4X is a library we have been working on. It’s written in rust. And one of the goals is that we can deploy to a large set of platforms or surfaces. The way we do this is, by using CFFI on languages that compile to native. Like the ones shown on the left. As well as Wasm to deploy to the web platform. As shown on the right. So with this system, we are able to deploy to a large set of languages. This is one of the ones we working with as an example, the native on both the left and right. JavaScript is on both sides. You know, so there’s a lot of opportunity here where we implement this once and deploy everywhere. It’s the type of algorithm if object you would like to implement just once because there are a lot of inconsistencies how the algorithms are performed. So we also have this through the web platform, the ECMA402 int object. So like why do we need if people can use it direct will? So one request we get a lot is that, for example, feature coverage needs to work across browser versions. Where if not all browsers are up to date with the latest version of the spec, you need a polyfill: the second is people want increased locale support.

SFC: So for example, they might have, you know, a certain browser might support 50 languages, but a certain application may want to support 70, 80 or 100 languages. You can do a polyfill for the languages not available in the platform. A third use case is that they want consistent behavior between web, server, and mobile. So, for example, in the case of other flutter, running on the dart run time, there is both a mobile version and a web version which used different in the behavior, but like would to have a consistent behavior. If you prerender on the server, once you deploy, you may want the same behaviour on both of those surfaces. The fourth is teams have lots of constraints, like testing, it might be you know, UX designers, we push people as much as we can toward using the browser and most people do. But there’s also use cases for int polyfill.

SFC: So this is what an web app using an intl polyfill looks like. Once you use ICU4X, on the left, WASM. And ECMA402 on the right. Now, the browser engine being implemented with ICU4X will, the web app is able to access that behaviour via the ECMA402 surface built into the browser which is great.

SFC: So I will prefix this next section of my presentation with same . . . this mostly works and it mostly gets the job done but the reason that I am giving this presentation here is because it’s not as – it’s not as easy to implement as it should be. This type of model that I am showing you here on the screen is the type of thing that I think should be, you know, very easy to deploy on the web platform, one the default ways to deploy a polyfill. The current state-of-the-art makes it so that there’s a few more bumps in the road than there should be. I am going to go over what the bumps in the road are and what to do as a group to improve and make this better for people building libraries with Wasm. One challenge is that – not really a challenge, but the observation I have made is that Wasm seems to be popular as an application frame work. When you build something in Wasm, I am doing it big monolithic application or large component of the application that is sort of self-contained. Where, you know, maybe it needs to render things to a canvas, but other than that, that is the extent of, you know, the interaction between the Wasm and the rest of the web platform. So like, for example, you might want to deploy an online Photoshop and it is built in Wasm and works and great. It’s a library for an application primarily written in TypeScript or JavaScript. So since Wasm is seen as an application frame work, it’s a library is not the focus, but a part of the web ecosystem.

SFC: Second is memory management. So JavaScript of course is garbage collected, but rust and C + + uses linear memory. But this never shrinks. The GC can go and run and try to reduce the size of the Wasm memory, but it’s never going to happen. So garbage collected languages if using Wasm-GC get around this problem but it doesn’t help us in rust and C++. I have a demo. I will move over here. It’s super simple. I can show you the code. I have got this Wasm module. It’s called bigbox.wasm and has a single function in it. It's the functions called `createBigBox()`. When I call this function, I pass in a length. And then the length goes and it allocates as buffer of that size, empty buffer of that size in linear memory. That’s all it Z another function of `freeBigBox()`, you call with the pointer, it frees if from the linear memory. So that all that WASM does is, it has the two functions on. I have a function called create big box that is, you know, takes into the length. Creates, calls the make big fucks function and put in his a finalization registry, and call it is and print us out a message we see that it actually got to lead it. Note that when I call `createBigBox()`, like I am dropping it right away. There is nothing retaining the memory here. So this is object that I put in the finalization registry is dropped at the end of the function. Nothing is retaining the object. We have to wait for the FinalizationRegistry to go. Let me go back to the demo. So I want to make – click this button. I called and show you with one megabyte of memory. We have time, I will do it again. Yeah. I can click this several times. Nothing is really happening. Go ahead and press here. It finally collected them all at once. In this case, I allocated about ten of those objects. And then they finally got collected which is great. Now I can get another ten. Clicking this button a few times. Allocating more, right. You can click this a few more times. It’s fun to click. I am going to try collecting memory. And I am glad it collected memory, but it’s not freeing up any memory that’s in the JavaScript space. If I open the web inspector it will show you the amount of memory being consumed by this application is still the same. Now, I can also hit this button. And like once I hit this button enough times it will collect the ArrayBuffers. Sometimes this runs better than others. It seems to not be clicking. There is goes. I created a bunch of ArrayBuffers and collected those. The difference; when the collects them it’s freeing the memory. With Wasm it’s not. So this is not a super great situation to be in. Let’s go back to the slides. The second – the third challenge – the first was application. The second management memory. The third challenge is binary size.

SFC: Wasm needs to ship its own standard library. Now, ICU4X reduces the binary size, which is very small. You know, it’s not going to be as small as JavaScript ever is because like if JavaScript, we have maps and arrays and free memory allocation and GCs and everything. With rust we shift all of that [loi] breathalizer(?) rooms ourself. We are very small. I want to be clear. We are poor demo is like – on the order of 15 kilobytes non-gzipped and less than 10 kilobytes gzipped. It’s small but not tiny small. We have done a good job as reducing the binary size for ICU4X. We are much smaller than IC compiled to WASM. I have a graph. But it’s like basically – it’s only 100 times smaller than ICU4X because of the focus we put on this. It’s not going to ever get down to zero. You know, as developers we like when things are O the standard libraries requirements want to be completely zero. So that is a challenge.

SFC: Challenge 4, I have talked about before to this committee is async loading and modules. So Wasm of course requires an async call to compile or instantiate a model. Everything is needs is also async. Normally with JavaScript, it depends on it, like if you write an item in the library in JavaScript only, like all the constructors, everything, they are regular JavaScript functions and sync. They don’t need to be async. But with Wasm everything is automatically like you have to use async. So there’s – you sort of – when building the application with the Wasm library you have to pick between the lesser several evils of how to deal with. One is to wrap the Wasm in async JS constructors. That’s like if you want to create an format or like Intl number but created in WASM that is an async [cet]er. You have to await the new number format. That’s one way to do it The second way is you can use async modules which are fine and great. They have problems that like many of the people this committee have talked about. They kind of work and great to work better. And they kind of solve the problem. But they are also like once you have an async module in your module graph and you have to start thinking about async modules everywhere. It’s an integration point. I want to use this, oh, but if I do, I have an async module. Maybe I don’t do it now. Because they are hard to integrate. That’s not a great situation to be in.

SFC: A third solution is that you can use the non-async WebAssembly constructors which have big, red warnings in the spec that says don’t these in order to get the sync behaviour. It’s not entirely clear to me. Like, whether like if – at least if you have the WebAssembly module and wanted an instance, like how bad is that actually? It’s not clear to me. Like, why we sort of recommend that as an async function. Maybe we can get some more clarity during the discussion on that. The fourth is like just how globally defer code execution until WASM is ready. A lot of applications already have a piece of code in the application which is wait until, you know, DOM ready. A lot of applications don’t execute JavaScript until the DOM ready event. So like you can instead I will wait on DOM ready, but on Wasm ready. You can do something sort of like that. And then sort of assume that the Wasm is already loaded. That is another way to get around this problem.

SFC: Yeah. So another challenge is ergonomics. So it’s no secret that Wasm JS interop is not as good as it could be. There are proposals in the pipeline to make this better. You know, the import reflection/source phase imports proposals we are considering in TC39 will help by making it to be to import a Wasm module like using a regular import statement. It gives it to – you is to instantiate, but it will be in your regular imports instead of like some other weird, you know, piece of code that you have to use.

SFC: Another on the WASM side, is interface types, which appears is renamed component model. This will allow WebAssembly and JS to basically share the type system there. Which will be really nice. And the one that I am really eager and waiting for is Wasm ESM, full ECMAScript Wasm integration. Once this happens, it will make these ergonomics a lot cleaner. It seems like, you know, this is still a few years out because like we have to agree on, you know, source phase imports first and things like that before we can get to the point of actually implementing Wasm ESM. I am looking forward to when that happens.

SFC: Another problem with – so with ergonomics, you can make tooling to like work around these ergonomics problems. But like right now you pretty much need to use tooling because like if you do try to interop with JS and Wasm directly like it’s very, very difficult to do it correctly. Which basically means you must use tooling in order to get around these interop problems. For example, you needed to use emscripten to generate binds for you. If you don’t use emscripten and you have a lot of work, you have to do it yourself. It’s not great, that it requires a lot of tooling and boilerplate to make it work correctly. It works but nice to work better.

SFC: So how ICU4X approaches this problem. How does it make the best of way the world the way it is to deploy rust code as a Wasm module for ECMAScript clients? We don’t use emscripten because we want this low-level control, and we have the time that like since this is such an important feature for us, we decided that we have the time to invest in what is the right way to solve this problem. We wrote our own tool called Diplomat. That generates binding code for us. That, you know, it generates binding code for how to do FFI calls and Python and dart and C++, etc. And it also generates the JavaScript bindings in WebAssembly.

SFC: I am going to reload this page. I now it’s cached, but that little spinner thing that comes up at the beginning is wait until the Wasm is instantiated and then let’s me use the page. I am using it like, just like block the page until the Wasm is ready. I have the Wasm open here now. As an example I can format a number. Right? And formatting for me. Using this all in Wasm client side, of course. I can change the locale. I can do didder make the number bigger and change its using the 3222 grouping separators. I can turn off the groups separators. Back to English. This has all the locales. Yeah. I can use like Hanidec numbering system here. Turn back on the grouping separator. Yes. Some cool things, formatting this number. Go to the next tab. I can do some date time more matting examples. I go this to yet an idea how this works. Yes, it does actually work most of the time. So I can format like dates in different styles here. This is the current date and time. I can change the calendar system. We have more calendar systems that are now implemented. We haven’t put them into the Wasm demo yet but I can do this in the Ethiopian calendar, in the Japanese calendar. Yeah. So I can do this. I can change the language. Japanese in the Japanese calendar is cool. The third demo is segmenter this is the popular feature right thousand. We actually have a full like, you know, 14 client segmenter that is implemented in a Wasm file. Which a lot of people want. So like, this is a string of Japanese text and then these little red dots are like the word boundaries. Some of the words are 180 ideographs and some are 2 and you can see how that segmentation work here.

SFC: I am going to check the inspector. Everything is happy. I just opened the web inspector. I don’t know why you can’t see it. It looks like everything is happy. Sometimes the Wasm file runs out of memory and then we get errors in the console. But today it’s happy. So that’s good

SFC: Let me switch back to the slides. I assume people are not afraid of code. I will show you some code about what – I just showed you with what the code looks like. So this is, for example, the decimal formatter. So it has – we have currently a module, and the module exports a called ICU4XFixedDecimalFormatter and WASM – it depends on the WASM instance which exports various systems. This class is fICU4XFixedDecimalFormatter. A constructor. Private. The main way to use the function called create. So you give it a date and a locale. So I will tell you about what this interface is. The maintaining thing that is interesting, it’s between the was I am and JavaScript. We call WASM.diploma_Alloc. It uses this to allocate a buffer of length and 5 alignment 4 I believe is what this means. And then this is basically a constructor. Which then gets a return. Then well call the WASM.ICU4X fixed did he see ICU4XFixedDecimalFormatter_create. And the this takes reference to the buffer we created which is the return value of that function. We can’t return values from Wasm unless integers. But right now we can only return integers. So like the function returns an integer which is like the pointer in is like the point never memory. In this case, we pass in this buffer. So then it puts all the return values into this buffer for us. And then, yeah. We also pass in pointers to the data provider and the locale which are required argument that is we pass in. This `.underlying` is the pointer within the memory of this object. You pass this two object pointers basically. The data provider and the locale. I can talk more about what those arguments are, if people are interested. They are pointer passed in So then we have `is_okay`. This looks into the return value and there’s a flag, the first field of the return value is like a bouillon, if it’s a successful return or if it was an incomplete return. So then if (`is_okay`) the other field of the diploma buffer is going to have the value of like the pointer that we need. So then we go ahead and wrap it into an ICU4X fixed did he see malformatter. Call the [cut] are constructor. Pass in the underlying pointer we pulled out of the return buffer. And then like I deleted the code using `edges`. They is how we about our other objects. I deleted because it was getting too long. I can show you the full code, if you want. Yeah If it’s an owned object, mostly – usually owned, it has `true`, I believe is what we pass in here. Then we register it into the FinalizationRegistry. Which is the destroy function. When the GC runs, it calls the destroy function for us. If it was not – either way, if it was successful or not, we free the return buffer. Which is the again value of the constructor.

SFC: So that’s most of the code. On the right is a format function which is imperatively simple T creates – so the format function is to return a string. We can’t – it only return integers. We have the writeable which is like a buffer that can be written to. And you know, I don’t have to bore you with the implementation details of the writeable, but then basically we sort of do this same sort of thing where we take the writeable, pass it into the function, the function writes to this output buffer. And then we get the values, if it’s okay or not and return the values from the function and this writeable abstraction is the magic thing. I can show you how it works if people are interested. Or talk to you later about it will write out to a buffer string to convert from UTF-8 to UTF-16. At love this code is code that if use emscripten or Wasm bindgen it’s generated for you. Especially like since we are like the library, we wanted to implement this ourselves and see if we can do this and what are the main points. This is code we implement ourself. We use our tool, Diplomat – the last slide here is about explicit resource management.

SFC: The last – close to the end of the slides. Explicit resource management. So ICU4X uses the the FinalizationRegistry, which is not the best solution for this because like, you know, Wasm memory grows in one direction. So one cool solution can use, thanks to Ron Buckton for explicit resource management, you know, it also – in addition to doing the stuff advertised for file handles, does a good job with Wasm objects because the idea that the memory model of like C++ and rust, is largely you have one owner for an object and once the owner is done using it, you free it right away. You don’t wait for a GC to do it. So like one thing we can do with explicit resource management is take that model and use it in JavaScript. When you have a using, using a variable instead of like assigning the variable to a `let`or a `const`. Then you can basically have this model where you create an object and then you destroy the object at the end of the enclosing scope. Which is sort of like the rust and C++ memory model. And we can now do that in JavaScript. So one thing that I would like to do with these objects is to implement the disposable interface. So the basically like when you create an ICU4X decimal formatter, it will implement the construct certify called and free the memory from the buffer right away. We don’t have to wait for the FinalizationRegistry to decide it’s a good time to do it. We do it right away which is consistent with how it works on the rust side which is cool.

SFC: Now, like if people don’t use using or forget to use using, they put it in the FinalizationRegistry, we also have a FinalizationRegistry like we did before. And then like we will check to make sure that the – when the FinalizationRegistry runs, we will check if `Symbol.dispose` was already invoked to avoid a double free. This solves problems, but not a perfect solution. One question I get a lot is like what if it gets enstance gets saved on a field of another type? I might have an object that is sort of owns several or Wasm objects? And then like they all want to get destroyed at the same time. Does that mean I need to implement disposable on the wrapper objects too? So it’s a little bit of a rough edge. So like it’s not a perfect solution. But yeah.

SFC: So these are some suggested discussion topics. One is like do we consider this a priority use case? I certainly hope so. It seems like it has been considered as a use case, but not been like in the – in the dialogue as much as I would like it to be. 2 is, shall we recommend it disposable pattern? About like, if you’re using a Wasm library with a – using a Wasm library with a compiled language like rust or C++, not GC, but a language that uses the linear memory like is this a good pattern? Should we recommend people use this pattern? And then the third is like, yeah. What are we thinking in terms of the short, medium and long-term plans for Wasm model loading? I have heard answers to this question about like, you know, what is the long-term vision for Wasm module loading? Async? Sync? Is it going to like what is going to be the situation with interface types? Like, you know, I feel like I have seen a lot of people with slightly different angles on this question. And like I think this would be a good time to sort of discuss what do we see as that 3-year vision or 5-year vision for what we want Wasm module loading to look like in the system. The reason I think this to the group is that this is something that I feel that we as TC39 should like consider when designing these types of proposals and take more seriously as a use case. And I wanted to bring it to the floor to sort of like, the things that we currently have implemented here make this not as clean as they really should be.

SFC: So I reserve 60 minutes. 30 minutes for the presentation. 30 minutes we have time for a discussion. So I would like to hear some thoughts from some more people besides just me here. So yeah. I can turn it over to the chairs to run the queue. Thank you.

USA: Thank you, SFC. First up in the queue we have DE.

DE: For Wasm ESM integration, you noted this idea that, in terms of what should be implemented in what order, that source phase imports should come first and then interface types and then Wasm ESM integration for instantiated modules. Earlier in the meeting, LCA and GB laid out another possible ordering where we go ahead with both kinds of Wasm ESM integration now, even though it means when you call a function, it’s exported by Wasm you have to do in a somewhat obscure way. I think it’s possible to make a directly usabel Wasm module for ESM usage by using reference types and such, along with importing certain utility functions implemented in a JS ESM module. This could then give you a Wasm module that can be used directly with a high-level JavaScript interface. Do you think that’s a reasonable approach? Should JS engines/web browsers enable Wasm/ESM integration for instantiated modules now or take this more cautious approach?

SFC: Yeah. It’s a good question. I think that, these 3 bullet points are not intended to necessarily be in order. These are sort of 3 sort of somewhat related, but separate work paths working toward solving this problem in a nice ergonomic way. I don’t think they necessarily need to be in the order or wait for interface types before, you know, be able to load an instantiated model that we facilitate wrapper code for. I showed on the other slide, you still have to generate that code, and it would be nice to – really nice to get a point where we don’t need to generate this wrapper code as much as we do currently. But like in terms of like steps, baby steps what we need to do to get to that end goal, like, source phase imports is definitely something we need first. And then if we can then solve the sort of async module like instantiation things that is also a good step in that direction. And I believe that’s what Wasm ESM is trying to do – yeah. In other words, yes. I believe the answer is yes

DE: This async module instantiation thing is interesting and also relates to what we were discussing with the deferred module imports. That is something we should consider iterating on with Wasm ESM integration. Also, I made this suggestion that maybe there’s a set of JavaScript functionality that done imported from WASM such that you don’t have to generate code. Based on your experience with Diplomat, is that possible?

SFC: Can you repeat that question?

DE: Rather than generating code, would it be possible to import a fixed set of functions that are implemented in JavaScript, for your binding logic? To pass parameters to rather than generating code?

SFC: We have some parts of this like diplomat runtime here. We have a JavaScript runtime. It’s like 500 lines of code. It does like some of the CT8 versions and those things. It interact was like this writable stuff, with reading the pointer off the return value of this function. We do have a JavaScript run time that helps us with like some of these low-level operations with interacting with Wasm. And like the amount of codegen do here is like not terribly much. It’s 55 lines for basically – I don’t really see how we could like – maybe there’s another couple pieces here and there to pull out into a shared library, but I don’t see how we can pull out more than that. I feel like we still need some amount of generated wrapper code.

RBN: Yeah. I wanted point out you had a question about whether the type should implement disposable and we are ownership semantics and that’s – part what have disposable stack provides is that idea of like ownership semantics over lifetimes, so it allows you to associate one or more disposable values that might be scoped to something, but then transfer that scope to another class by moving things out of a disposable. Out of a disposable stack into a new one that gets stored on the object zero, and that object, which would be the – this wrapper you are talking B would implement dispose to then used in another places and have its lifetime managed. That’s also an example that’s on the proposal repo in the README, if you are interested.

SFC: Thanks for that. I have looked at the disposable stack. I think that this – definitely a problem that has solutions which is great. You know, it requires that like – as you said, we still need to think about implementing disposable like on wrapper objects, but like, you know, that’s just a cost I think that people will have to do. But like the fact we have to disposable stack that got into the Stage 2 proposal I think is great and it definitely makes it possible and fairly ergonomic to solve this problem. Yeah. Thank you for that

RBN: If you have any questions about implementation, feel free to pinning me on matrix. And I would be happy to talk about.

SFC: Yeah. Thank you. I sure will.

USA: we have a reply to that Nicolo.

NRO: Yeah. When using classes with disposable, [inaudible] to eliminate like to manually link your disposable function to your in the resources. We just had at use the corrector for the content thing and a global to link everything together and like – it fights very nicely together.

SFC: That’s a good point. Decorators. That’s not one I have looked into. I will definitely look at that.

USA: Next up we have LCA.

LCA: Yeah. I wanted to comment more on the Wasm ESM integration. I think the goal for source imports was to make it possible to support both the use case where you need complicated instantiation of Wasm modules and the more – the currently less common use case of being able to natively integrate with JavaScript. If the Wasm is built specifically to be imported from JavaScript, thing I think the current Wasm ESM integration can provide a lot for you. Without source imports. And I think that it’s valuable to ship both of these because if we do not ship the non-source phase version of Wasm ESM integration there’s in reason for anybody to write Wasm modules that target JavaScript. No reason to innovate on how he we do bindings between Wasm and JavaScript and [anering no, ma’am]? effect way because there will have to be the wrapper. So what I would like to see from engines is, more support for this was em. SM proposal, happy it talk to you about this, how you can implement this, what order you would like to implement these things in, and obviously would love to see source phase imports but I would very much like to see the full integration shipping in engine soon too.

USA: All right. We have a supporting reply from DE for that

SFC: Actually, on it topic, I wonder if any of the implementers in the room sort of have thoughts on this? What I talked to – we do have SYG on the call, but he sort of said that like we want to implement source phase imports before Wasm ESM. Because there’s like a series of dependencies there. That’s what I was – heard from SYG in terms of implementation ordering. But if other engines sort of have a familiar perspective with other engines considering going straight to implement Wasm ESM?

DE: Igalia implemented Wasm ESM integration in an engine before source imports were invented – I can’t remember if it was SpiderMonkey or JSC. Instance imports have no dependency on source imports. Previously when considering Wasm ESM integration, there was a discussion whether it should be changed to the source imports all the time. And I think this is why JSC held back on shipping. MLS, any thoughts/updates on this?

MLS: No, we are obviously invested in Wasm but I need to catch up with that team.

DE: Okay. Great.

RPR: Just to check up on the status of the spec for Wasm ESM integration, I don’t think that’s a TC39 spec, that’s on the Wasm side. Is that considered to be the equivalent of Stage 3, meaning the only thing holding it back – sew, the only thing remaining to be done is implemented?

LCA: Yes. The spec was ready to be implemented a year ago. Due to not having clarity on whether this is a direction we want to take, enclosured in the spec is to update we had source phase imports. The Wasm integration specs fits both and the source phase is part of this and it is ready to ship.

DE: The only thing remaining is NRO’s patch on integration or like fetch integration generally about sending the right destination. This is in progress and I think probably that is a blocker for shipping, but it should be done pretty soon. From the design space point of view, we now have the full picture.

PFC: I am not too knowledgeable on this, but I noticed there was some discussion on the chat yesterday about whether Wasm modules are a power user feature. It would be good to come to an agreement on the committee whether we think that’s the case or not because it could affect prioritization. I think there’s one point of view that said, most JavaScript programmers are not going to use Wasm modules, programming in JavaScript. Then another point of view, it's true for JavaScript but if you want to have any other language interoperate with JavaScript you need WASM modules so it’s not a power feature, but a core feature for using other programming languages on the web. So I thought it might be good to surface that because it could affect how we make decisions in the committee.

DE: I want to hear LCA’s point of view on whether source phase imports are likely to be generated by tools or used directly as a power user feature. When using source phase imports directly, you have to instantiate the Wasm module with imports. That’s somewhat more set-up to do. Somewhat lower-level somehow. Ordinary [module instance] imports, on the other hand, are fully linked for you. Once we get the ecosystem ready–whether through a pattern like I described earlier, or ideally, eventually, through interfaced types or the WebAssembly component model which may come in the future–I think that should be the version of it that’s used for most developers. This is why I felt strongly that we don’t switch from instance to source import semantics for normal import statements. LCA how do you feel?

LCA: They have slightly different use cases. Maybe they both – they both be power user and nonpower user things statement, I think. Like it is zero obviously significantly easier to not do manually linking. But some modules do not require manual linking or linking at all. They are fully self-contained. In most cases, this is definitely less complicated and less work to understand. But yeah. It is also less feature-full. Tooling will generate sources import or phase imports for the time being. Just because a lot of existing tooling is built around – requiring specific imports. They are specific to the compile input. The support is generated together with the Wasm itself. And these are not generic. So there’s a lot – you see the specifically in go, in rust wasm-bindgen these these are heavy on support on the JavaScript side to make this work. And these will only work well with source phase imports for the time being. As we shift Wasm integration, hopefully these tools will have incentives to try to make the space better here.

DE: (from queue) “correct. I was talking about source imports being rare, easy and that’s all”

RPR: I want to say I think even if this is how a user is rare, this whole topic is about using WebAssembly as a library, which means somewhere many your NPM dependency tree there is a lower level using WebAssembly, and given the way it works this ends up getting used in a significant number – if we do our job right, significant number of apps but not used directly.

DE: You mentioned in the `FinalizationRegistry` callback accounting for whether the `Symbol.dispose` function had been called. I was hoping that it wouldn’t be necessary to store an extra bit, and instead the `Symbol.dispose` method could call `FinalizationRegistry.prototype.unregister`. Would that work?

SFC: Yeah. Very likely. I haven’t actually gone and implemented this disposable interface yet for these types. But when I do, I think absolutely, yeah. That’s sounds like a very clean way to solve for the double problem. Yeah. Thanks for the pointer.

RBN: This is my – somewhat related to the discussion yesterday about whether or not even considering recommendation for this type of cleanup for host Annes to do the type of FinalizationRegistry. Do the cleanup if you drop a disposable on the floor and if we had the recommendation, that was the example in the poll question I have on the resource management proposal for that recommend ago, you would unregister the disposable resource or whatever you track with the FinalizationRegistry on dispose so the finalizers isn’t even called.

DE: So yeah. I responded negatively to that recommendation. But that was in the context of external resources like file handles. When it's a thing like memory, this is exactly why we added FinalizationRegistry in the first place, despite the hazards for external resources, because it is valid to use when it’s just to clean up memory.

DE: You mentioned UAX14, which is Shocking⚡ because we, in Intl.Segmenter, stuck to UAX29. UAX29 is breaks like wrapping, sentences and words, and UAX14 is line breaking. We specifically decided to omit 14 from Intl.Segmenter in this committee because the idea was, there aren’t use valid cases for line breaking without more knowledge about the rest of, you know, text rendering ([past discussion](https://github.com/tc39/proposal-intl-segmenter/issues/49)). And at the same time we made that decision, there was hope around CSS Houdini, custom line breaking APIs. At this point, I think there’s more hope around the [canvas formatted text API](https://github.com/WICG/canvas-formatted-text/blob/main/README.md), which is proposed by Microsoft which would have text metrics with line breaking support for multiple line streaming rendering. I am interested in that API progressing. So your library does hook that things we decided on in TC39 before. What is your experience here?

SFC: Yeah. We implement both UAX29 and 14. So yeah. I should have been more clear about that during the presentation we implement both of them. And currently, if you want UAX14, you have to use that because it’s not in the web platform. Hopefully it will be at some point. Like, many of the uses are using it because they need UAX14. They need it because they’re doing text layout into canvas. So they ship 14 and also ship like bunch of tools. WASM files or to do this yren did hing. They ship the whole text layout suite in a Wasm file. That’s – you can go look up the time. It’s called canvaskit.wasm. It bundles all the features into one Wasm file. It’s great to take that and turn into canvas-formatted text or CSS Houdini. I have tried to reach out to the Champions of the proposals, and they haven’t been super responsive to me. They have gotten – when I have heard responses, it seems like, yes, we still are basically intending to do this, it seems like it’s one of the many things that’s like prioritization question, more than anything else.

DE: Do you think canvas formatted text would subsume the cases for UAX14?

SFC: So I think that, you know, if I go to the other slide, why do one is an Intl polyfill. It’s going to be a problem for a listening time. There’s also clients who like – again like I wear two hats. I am both like the convenor of TG2 and ECMA402 standards and the tech leads. And wear two hats. I want the clients get the problems solved. So like in the platform, hopefully many clients will use that directly. But will are also reasons why clients once you continue to use the Intl polyfill, one of use cases I have heard from clients is like, you know, we really want to have very specific behaviour how to do breaking around URLs and email address asks not happy with what the web platform is doing there. It’s inconsistent across the different engines and implementations. And like they want to basically have like behaviour that they can really predict and know what is going to happen. And then by shipping ICU4X implementation, you can get the consistency they are after. I definitely, you know, I think that it’s definitely a benefit for the web. To have the formatted text availability. It’s subsumes some of the ICU4X use cases, but certainly not all of them.

DE: Okay. Thanks for explaining. I am surprised by that email example. I thought CSS was pretty specific about how line breaking is supposed to work.

SFC: I can share more details offline

DE: You expressed a hope to get back to interface types or the component model, which I hope for too. This has had a complicated history. Previously, Google investigated interface types, in particular, for checking the efficiency of passing strings between WebAssembly and JavaScript or WebAssembly and the platform. And it didn’t make sense because you still had to do a copy. And now we have the Wasm stringref proposal which is a better solution. But, in addition to having an incomplete story for strings, interface types previously solved this problem of ergonomic interaction between JavaScript and WebAssembly. Current component model development has been trying to solve a broader problem, of interaction between lots of languages, which is great, but I haven’t seen progress from that world on concrete JavaScript/Wasm interaction improvements. What do you think about that whole space? And I am wondering from this committee, is there interest in establishing more of a connection and interaction between TC39 and Champions of the component model in Wasm CG?

SFC: Yeah. I can talk about that. One thing that, you know – specific type of problem that is nice to solve that eliminates a lot of the boilerplate here is if we have an actually well-defined way to talk about structs. Right now I have this sort of opaque return value which is like link 5, 11, 4. It’s filled in with stuff and read the stuff out of it. And the layout of the instruct is specifically to the compiler. So like, rust and the other compilers might not agree what the struct layout is. As opaque as far as Wasm is concerned. Hopefully the component model or interface types will help resolve is I can sort of express what a struct layout is what fields. Wasm GC sort of does this, can but it’s a GC integration. Yeah. I guess that’s sort of the types – the type of thing that I hope that one of the proposals works toward. And again one of the reasons I am sort – the purpose of this presentation is more to like illustrate the problem space. Rather than like propose specific solutions to the problem space. I highlighted this as a potential way that help clean this up, but it may or may not be the actual solution to the problem.

USA: thank you SFC and others for the discussion. We are slightly over time.

SFC: We also started a few minutes late.

USA: Yes. So if you can conclude in like 2 or 3 minutes.

SFC: Okay. Yeah. Did you have any more responses, DE?

DE: We can talk offline.

SFC: We can do it off-line. Cool. We got through the queue ending on time. I am glad I reserved 60 minutes for this. As I just said, the purpose of this presentation is to layout like you know, as sort of wearing a hat is like, you know, a user building of Wasm library. Like, you know, these are sort of the challenges and road blocks I hit along the way. And I sort of wanted to take a lot – I mentioned five or six or seven proposals in the slide deck. And I sort of – one of the purposes is to try to sort of draw this big picture for how these tie together to solve a real use case. We talked about all in isolation. It’s really good to see how they tie together to solve a real problem that has big implications of deploy libraries written in any language to the web platform. So thanks for all the discussion that everyone has given. And yeah.

USA: Thank you, Shane.

### Summary and conclusion

The purpose of this presentation is to layout a user building of Wasm library, and highlight the challenges and road blocks encountered. Various, five to seven, proposals are noted in the slide deck. One of the purpose is to draw a big picture for how these tie together to solve a real use case. We talked about all in isolation. It is good to see how they tie together to solve a real problem that has big implications of deploy libraries written in any language to the web platform. A detailed discussion was had by everyone.

## Optional chaining in assignment LHS for stage 1 or 2

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/nicolo-ribaudo/proposal-optional-chaining-assignment)
- [slides](https://docs.google.com/presentation/d/1KL9MRyxprgXDEsxT8Ddrdro074L3fQm88zXHsWL-Dwk)

NRO: Okay. This is a stage 0, I guess, proposal. About optional chaining on the left side of [inaudible]. We can’t and also, when deleting properties, but when the proposal was initially designed, there was not yet clear the need for optional chaining assignment. Now we have like a lot more real world experience with using optional chaining. AndI realize that the more using it, I more I find cases I wish I could use the assignment. I talked with people in the community, I realize it’s a shared feeling.

NRO: And like some examples are taken by some projects sometimes look at, like this is example for Babel. The option assign some properties. Null or undefined. There also exams from library – [inaudible] and like many places, find the pieces where there is some assignment from the objects only if they have defined. I have examples. The yren – even the stressing you can run to check if you would benefit from this somehow. Expressions are not perfect, but it helped me find all the places to use these in my next project.

NRO: Okay. How would this work? Well, the basic case, we have like an expression, property assign to value, we have that long expression. Basically, if expr1 is not null or undefined. Otherwise, the expression returns undefined. And the value on the right-hand side is not related if expression 1 is null. And this is similar to how it behave if you use statement instead of optional chaining or if you had like a set or function that you called on `expr1` using the question mark. We also have like operator assignment. Like less equal or - equal. And this is – works exactly the same way. But for mathematical, log carbonning operators like or equal.

NRO: However there are some other cases that we they would to consider. Such as what happens when the left-hand side expression is . . . right now, like parenthesis stop the short circuiting behaviour. So I think there’s some expectation that this would also have time with assignments. And it’s already valid to have optional chaining nested within a norm number expression on the left-hand side of assignments. Like in this example in the first bullet point, it would throw because if null because A = mark B is null so my proposal is that we just keep this behaviour and if we have an optional chain parenthesis and it’s nullish, we throw an error. The question when to throw? Because right now, they don’t have the same behaviour. If you have simple assignment, we have to evaluate the expression we’re assign and throw. If you have assignment with operator, we throw before evaluating the value on the right-hand side. What I think this proposal should do is that – well, if obviously the key is not this anymore when we use optional chaining because now it stops the proper chain. However we still keep the existing behaviour with regards to evaluates the C, the value on the right-hand side. It’s not terrible to make the syntax error and so we avoid the question. But like again, there are some cases in which it’s possible to have a nested optional chain, and so like only for one case and other cases already valid might cause some confusion.

NRO: So I mentioned assignment. But there are still other places in the language where it might be possible to support optional chained instantiation, but it doesn’t work. And I am not including those in the proposal. What are they? Well, for new, with a – we don’t support using new with optional chaining. But like this is not related to assignment. Then we have object . . . where you might want to assign to a property, instead of this expression. But like A, I have never seen real world cases in which this would be needed. And B, there are some hard to answer question regarding how short can Ier shutting works because there is like – you cannot short circuit the object, and get property access. But it’s weird that the property access is visually on the left of a A question mark B and short circuit. On the other hand, it’s in the weird to keep at optional chain. And also, we have assignment in ‘for of’ loop. Again, I have never seen a use case for those, using optional chain I am not including as part of the proposal.

NRO: And there is one last thing that might be included in the proposal. And I would like to have what you think about this. Which are the `++/ - -` operators. When using them in postfix position, the semantics are like of use after knowing how to works, how optional chaining assignment works. And like just this . . . However, when they are in prefix position, I find it weird that the `++` is short-circuit based on something happens after like visually after the `++` symbol. So the options are to either support both, to only support the prefix version even that version to just do `+= 1` or to support none of them. Yeah. This might prefer order, but I am happy to hear from others.

NRO: What do you think about this proposal going it Stage 1, and just like if we get to Stage 1, I also plan to ask if we have consensus for Stage 2 later.

USA: All right. So we have a queue. First up we have WH.

WH: I have a couple of concerns. One is somewhat small, and the other one is not so small. Let’s start with the small one first: parenthesization.

WH: `a = b.x` and `a = (b.x)` currently mean exactly the same thing.
`b.x = a` and `(b.x) = a` currently also mean exactly the same thing. Parentheses are used for syntactic grouping but do not change the semantics at all. We should keep that property. It would be weird if the same didn’t hold for the next four cases:

WH: `a = b?.x` and `a = (b?.x)` currently mean the same thing. The proposal makes `b?.x = a` mean something different from `(b?.x) = a` via a purely semantic rule.

WH: Finally, the semantics of `a = (b?.x).y` and `(b?.x).y = a` are existing behavior and don’t contain surprises.

WH: So the thing that bothers me is, the proposed semantics have a special case to see if an expression, which can be one of many different forms, is a parenthesized expression or not. And if something is parenthesized, then the value undefined is treated differently than if it weren’t parenthesized. This is a very dangerous thing to do because in the future there may be other things which can produce undefined.

NRO: We should ignore and make the parenthesized version to be exactly like the version without the parenthesis

WH: Yes. I understand why you did it. Initially I thought that, yeah, that made sense. But after I thought about it for a while, I found that special casing parentheses in the semantics doesn’t really add anything here.

RBN: Yeah. For – it’s true we don’t special case parenthesis for simple assignments. By we do special case parenthesis for destructuring there is a precedent in the language for special casing parenthesis on the left-hand side of an assignment

```javascript
a = { b: x };
a = ({ b: x });
( { b: x } = a );
( ({ b: x }) = a ); // does not work
```

WH: Isn’t it just to make the destructuring syntax work?

RBN: It’s not necessarily just for syntax. I think even KG noted this as well, we in chat, we specifically called out that you shouldn’t be able to use that on the left-hand side of an assignment for restuck structuring. We don’t [sfor] for object or array restructuring currently.

WH: Not having parentheses there is necessary to make the grammar behave. I see that as more of a syntax thing. Are you aware of any cases where we changed the semantics of an expression’s value based on whether that expression is parenthesized or not?

RBN: we care about how parenthesis – parenthesis around optional chaining changes the semantics of optional chaining. So we already have precedent for that on the optional chaining side as well.

WH: The parentheses themselves have no semantic behavior that affects the value. But they break the optional chain. They change the order of precedence, just like parentheses have no intrinsic behavior when you parenthesize an expression such as `a + b * c` into `(a + b) * c` but they choose what parse tree you get, thereby changing what the expression does.

RBN: I would disagree it has no semantic meaning when it comes to optional chains. Having and not having the parenthesis has no impact on the expression, but parenthesizing for an optional chain does. It is precedent-related but it is has a semantic meaning to that expression

WH: If we do it that way, then we should encode in the grammar, not in the semantics.

RBN: It’s encoded in the grammar, but it have a meaning on the end result of the expression. And I am stating that I believe if we already have special case for this within the grammar, that special case should apply as well

WH: I think we are talking past each other. Parentheses are just a grouping operator. So they choose which grammar production you go down. For assignments you go down the same production in either case. If we want to make them meaningful, we should have separate grammar productions for assignments to something that is parenthesized and assignments to something that is not.

NRO: I think I could – your position is clear now. And it’s hard to come to a conclusion now.

WH: Yeah. I understand why one would want to make `(a?.b) = c` illegal, but it’s not easy. This was the minor issue. Let’s get to the bigger issue I’d like to raise:

WH: `a = b.x = c?.y = d = e = 42;` contains multiple assignments. And the question is, which of these five destinations get the value 42, depending on whether `c` is or is not nullish.

NRO: So in this case, if c is an object, the behaviour will be identical to not having the question mark. While, if c is nullish, the whole assignment starting from the question mark is skipped, is short-circuited and this will assign undefined to a and b.x and leave d and e unchanged.

WH: That’s my understanding of the proposed spec as well. This is very concerning because now having a `?.` in the middle of a series of assignments changes the semantics of the whole thing, both retroactively and proactively. So if something in the middle of the series is nullish, none of the destinations get the value 42. I am not sure what to do about this. But I am really concerned that the assignment expression as a whole does not evaluate to the RHS value in this situation.

NRO: Yeah. I agree this is weird.

WH: I wonder what, if anything, we can do to avoid this kind of situation?

NRO: So one of the alternatives to always evaluate the right-hand side. However, like there is – it’s already null, that optional chaining expression produce undefined. These were not only applies to the right-hand value, and like people have to carry other this knowledge from the right-hand side to the left-hand side.

WH: Yeah. I know why you want to short-circuit it. But it doesn’t fit into the definition of assignment very well because assignment expressions also return the RHS. So I feel uneasy about the consequences of this proposal going through in its current form.

USA: There is a question from EAO

EAO: I wanted to check particularly, whether it makes sense to have it now or should we be considering issues about whether to accept this for Stage 1 in the first place

WH: This is proposed as a candidate for Stage 2 today (the agenda item name is “Optional chaining in assignment LHS for stage 1 or 2”).

DE: It is going for Stage 1.

NRO: Yes, it’s good to still know also this is a problem for Stage 2, which we are potentially trying to get today.

USA: Then we have KG.

KG: This problem, I agree with, the problem with what to do when you have an assignment expression where it’s one of the chains - the thing WH is pointing out. There is an easy fix, which is strange and it breaks compositionality, which is to say that this form of expression is only legal in statement position which is good 99.5% of uses of assignment. And – yeah. It’s annoying to break compositionality in that way. But it solves this problem. If we think this is useful most of the value for it comes from using it in statement position. So I would at least be fine with that.

USA: Let’s – you want to respond to that. Next up, we have DE.

DE: So I am big +1 on this feature for Stage 1. To go through the history of this, the decision to include only the three constructs of property access with that, property access with square brackets and call was largely informed by an analysis of CoffeeScript syntax and how it used optional chaining ([issue](https://github.com/tc39/proposal-optional-chaining/issues/17)). Because CoffeeScript supports optional chaining in many contexts, more than being proposed here. The omission of this particular case of assignment, was in the context of assignment being the next most popular thing among things omitted. It does feel normal to permit this case. When we added optional chaining we didn’t have any strong counterargument for this. It was minimalism, starting small, and we anticipated that gaps would be identified over time. So I think based on the evidence we have collected from the JavaScript ecosystem at this point, it seems great to continue here. I am pretty optimistic particular that we can work out this series of grammatical questions that WH and RBN are are raising

KG: Getting back to the – the left-hand side expression, being legal is like completely an accident of history. It is relatively straightforward to forbid. You add an error that says assignment expression is an error when the left-hand side is parenthesized expression and, you know, assignment target type is optional chain or whatever. We can make it illegal.

BSH: So it is currently exceptionion, thrown aside, the case that an equals a normal equal assignment be right-hand is always evaluated. And I know that the tool I work on, definitely assumes this. All over the place. I am sure I am not the only person who works on it, a tool that poses JavaScript that makes similar assumptions. And I also think it’s a problem for human readability. I am not terrible comfortable with changing it. Which this would do. If I guess I would feel more comfortable when the right-hand side always gets evaluated, but my not get assigned.

EAO: Yeah. What he said. The same concern.

NRO: Okay. So two things here. One was that like if you consider, for example, computer property access, before introduction chaining the value was always in optional chain changed this using an explicit visual indicator. Also, in this case, there is an explicit syntatic indicator where you have the equal in the same expression you have the assignment. So like any tool can easily do this happening, similar to how when you have a long optional chain with a question mark at the beginning and then like normal property access, you still have to go to the beginning of the chain to see that there was a question mark and so things might not be eliminated. So syntactically located in the same place.

BSH: Yeah. I don’t find that terribly convincing. Mainly we are now the left-hand side of an operation is changing what the operation does. That’s just really strange. So anyway . . . I would feel more comfortable you when a different assignment operator. But I will letualed more

WH: Yes. I agree with the concerns for the same reasons. And I would point out that without short-circuiting the parenthesis issue falls away also.

NRO: Short-circuiting follows like the existing patterns to contain similar beg your pardonior. Not having short circuiting would make this very dangerous refractor from new code to old code

WH: Perhaps it should have a different form. We might change the syntax to show the assignment could short circuit. Maybe introduce a different assignment operator or do something to indicate that the assignment might short circuit.

WH: I understand the short-circuiting is desirable. The current syntax is problematic for reasons that several of us stated.

NRO: I mean this is like already changing the syntax within the assignment. Like, with the assignment expression. The source code cover expression has a question mark. Like making it optional. Just not in the operator.

EAO: So when looking at the examples of existing code in various repositories that you linked, the sense when reading the current code is that I understand like right away what this code is doing. It’s an if statement followed by an assignment. And it’s really clear to read. This proposed syntax is not. It opens all sorts of questions like what is happening here? And it’s – at the most, it’s saving a few characters and possibly like 2 lines of code. So it seems like it’s optimizing towards code golf rather than legibility. My position is not to advance this.

MLS: Isn’t it true that in other languages with optional chaining assignment, they don’t evaluate the right-hand side specifically since optional chaining assign is particularly if X is an object, then do the then, if X is not, you don’t do it. That’s basically a rewrite of that?

NRO: Didn’t optional chaining had similar like – within the same algorithm, where it was mostly used to slightly reduce like to avoid some explicit checks. And also – I forgot the other point.

MLS: That’s my understanding, how it’s used in other languages. [inaudible] the if check before you do an assignment. I [w*i] means that the right-hand side is not evaluated.

NRO: My other point was that like this proposals reduce the mental complexity. Member expressions are only dubber you can add the question mark, and the expressions – in some cases but not in other cases. Through the proposal it doesn’t cover all the cases. The argument might seem weak but it covers most common of the missing cases. Like you had explicitly remember that optional chaining has been bound in this position.

USA: Okay. There is a slight bit of a queue. And you have approximately 2 minutes left on the timebox.

TKP: Yeah. I am just unsure about the ergonomics because if you eliminate the if, you eliminate the whole branch of your program. And normally you just want to do something with your assigned variable and not just assign it and return something. And if you want to doSomethingWith it, you have to check again and again and again. If this property of this object is assigned or not – if the object is even there.

NRO: Well, these proposals explicit for the cases where you are assigning and then not directly using it. And like those are already common. It doesn’t cover the like interface case, use case without using the value. But like assigning a property of an object optional, it’s not rare at all. How are we doing with time?

USA: We are almost on time. A minute or so. LCA?

LCA: Yeah. I want to respond to the point that [inaudible] this is all about protocol and using a statement. Yes, that is exactly the point. That is also exactly the point for optional chaining on the right-hand side. You have a listening [choin] with multiple question marks in it. This means you have to repeat the member expression multiple times within the if statement and then within the assignment the the whole point of optional chaining is to avoid this. The left-hand side, you have an object that could be null, containing another object that possibly be null containing another object null, you want to assign you will of these exist. Then you now have an if statement that has a member expression and that slightly averager and larger, where the smallest part of the member expression is repeated three times. And then you have the final member expression also present resident right-hand which is exactly the case that you’re trying to solve with the right-hand side of optimal chaining. I don’t see what your point is because if we don’t want this, then we shouldn’t have done optional chaining on the right-hand side either

EAO: So I am happy with optional chaining on the right-hand side. The sort of multiple level access that you were describing there, where a thing might be there or might be null happens relatively often on the right-hand side. I am not convinced this happens with any such regularity on the left-hand side, where if there is a null at some point, it is very rare that you might want to go a couple levels deep and possibly do an assignment and not have an alternative that you are doing if this is not the case. Such as creating an object, or otherwise going down a completely different branch in your code. I don’t see the multilevel optional chain on the left-hand being as common as on the right-hand side. There it’s increasing clarity, whereas on the left-hand side, it’s changing an invariant about assignment for not enough value in what it’s bringing as a benefit.

LCA: So maybe this is to – if we get to Stage 1, during Stage 1, find more examples of this occurring, of like real world code that does this multilevel optional chaining on the left-hand side or could benefit from multilevel optional chaining on the left-hand side

EAO: So what is the request that you are asking for, Stage 1, or still asking for –

NRO: Like, is Stage 1 because – do we want to do this proposal at all or not. Stage 2, at this point, I don’t plan to ask for it anymore and I didn’t schedule enough time for discussion. I am only going to ask for Stage 1 today. And Stage 1 concern or blocker or do Stage 1

EAO: What is the stage 1 question and motivation that you are asking for, is it this that you are presenting right now on the screen or is it something different?

NRO: Motivation is examples like on the screen. The two examples here. But like there are like just looking at a single [inaudible] easy [inaudible] I can find more examples. And I did not find many cases of nested question marks. Like the [inaudible] it would use a single or I found one of the cases with two question marks but not more than that.

USA: Okay. Before moving on with the queue, PKA do you mind to have time for this. Great. Next up we have DE.

DE: Yeah. We’re coming down to the empirical question on two sides. How frequently does this occur? Three examples were presented. That’s not the full picture. And on the other hand, how confusing is this to developers? So we have started down the path of consulting more developers through surveys and such, to understand this question of how confusing these things are. And I wonder if we can investigate both these things during Stage 1, meaning that it’s on the table for investigation. Those are the kinds of things you are raising. Also the more detailed syntax questions, but I think these two concerns are the higher priority ones to investigate. EAO, does this get the things you’re concerned about it?

EAO: I think so, yes. To clarify what I was asking for, what is the problem space that is being asked to advance to Stage 1? The presentation is clearly providing a specific solution as well for Stage 2, so what is specifically the problem space that is being requested for Stage 1?

DE: I think it can be good to present concrete solutions at Stage 1. It helps guide understanding what we are talking about. I don’t think it’s always useful to ask “what problem are you trying to solve?”, but it’s good to broaden the area we’re discussing.

EAO: I understand. Is the problem space being requested for Stage 1 allowing for optional chaining on the left-hand side of an assignment, or is it something else?

NRO: The Stage 1 problem statement is to simplify cases in code where you are assigning properties to objects at that might be null and doing that and nothing else in the assignment. And like, we have a clear precedent in the language for something like that. But like . . . Stage 1 statement is just like optional assigning to potentially objects.

EAO: And for that problem statement I have no blocking issues for Stage 1. It’s just this was not clarified up until now what is exactly asked for Stage 1.

USA: All right. Thank you. Next up we have BSH

BSH: Hello. So I know it was specifically called out earlier in here, that you were not – that you are saying you are not trying to make the – possible use optional chain in all of the various chain that you can use a left-hand side expression. I have doubts when you define the grammar because I am concerned that that is going to be complicated. And related to that, I would like to – this is frustrating for myself because I realize this isn’t satisfying to tell you, but when I was a year or so ago implementing the right-hand side optional chaining, I remember I came across times, I am glad I don’t have to do this on the left-hand because it would make X, Y, Z harder to do, much harder to get this right and what should be happening here. I don’t – I have not been able to go and dig up my – out of my brain what the cases were now. I remember it happened multiple times. Which is part of my concern here. I'm just not convinced this is a good idea to do. Given the way you just framed the problem statement of just trying to make things – make it easier to do the repetitive statements, I guess based on that, I don’t block for Stage 1. But if you want to – I want to use this optional chain left-hand side, I am going to take a lot more convincing, I’m sorry.

NRO: So for how to – disallow this, you can for example, change the grammar itself. With regard to implementation, other than optional chaining for read, we already have deleting properties which can change the value of the object. We didn’t have similar complexities. But yeah. I think we are out of time. I would like to ask if we have any like – anyone about object with the investigation of this space, which is again, providing similar – providing good ergonomics to assigning to properties of objects that might be undefined?

PKA: Explicit support

NRO: Do we have object to Stage 1. To be clear, I am not asking for Stage 2 today.

DE: Explicit support

CM: Explicit support

USA: It seems like you have stage 1. Congratulations.

### Summary

This new proposal explores syntax to optionally assign to properties of variables which might be null. The proposed syntax is a?.b = c, but given that it is an early proposal the syntax could still change.

There have been three different discussion topics:

- The proposal treats `a?.b = c` and `(a?.b) = c` differently, with the first one skipping the evaluation of c if a is nullish and the second one always trying to assign it and throwing if it's not possible. This is for symmetry with existing optional chains, such as `a?.b(c)` and `(a?.b)(c)`. However, currently wrapping the LHS of an assignment operator in parenthesis never alters its behavior. Is this something that we need to preserve?
- Should the evaluation of the RHS be short-circuited at all? i.e. should `a?.b = c` evaluate c when a is nullish? The proposal currently short-circuits for similarity with `a?.setB(c)` and `if (a != null) a.b = c`, but this might not be the behavior that users expect. This also affects the result value of `a?.b = c`, since if c is not evaluated `a?.b = c` cannot evaluate to c's value.
- Should the syntax be more explicit regarding the optionality of the assignment, potentially with a different operator?

### Conclusion

The proposal has consensus for Stage 1

## Stage 2 Proposals Meta Review

Presenter: Peter Klecha (PKA)

- [slides](https://docs.google.com/presentation/d/1YyDXM_u7U7c7O23CtR3SVQ0IY-swNHbtI_8HnAM9hXQ/)

PKA: Yesterday, we did a review of Stage 3 proposals. I think it was well received. So I am going to do it again for Stage 2. Just to give a little bit of preamble here, it was clear for Stage 3 proposals that it is important that champions and implementors be on the same page about where proposals are. The review yesterday was useful to that end, I hope. As for Stage 2 proposals there's maybe less urgency there. Two things I would say on why it would be good to do this review the Stage 2 proposals:

PKA: People do look at the lists of proposals on our repos. They may not be informed about TC39 and may draw erroneous conclusions on the basis of outdated proposals appearing on those lists. So that's a reason to potentially cull proposals that are inactive or where subsequent activity in the spec have rendered those proposals redundant.

PKA: The other thing is there may be proposals where members of the committee are really interested in them. But they are not members of the Champion group and not aware that there is something blocking the proposal from proceeding.

PKA: So here are several proposals we have heard from relatively recently. A larger window that we used yesterday. 12 months or so. Nothing to say about these proposals -- the committee is up to date on them.

PKA: Now going to go through some proposals that have not been presented recently, but where the Champions are, I think, present. And by the way, if any of these proposals are sort in the wrong column or have the wrong information, I apologize. I threw the slides together quickly.

PKA: One other thing, if a proposal is actively continuing, or work continues and nothing is blocking we can just say that and move on immediately. There’s no need to go into detail in the interest of getting through everything.

### `JSON.parseImmutable`

PKA: The first is `JSON.parseImmutable`. NRO and ACE are Champions for this. Is in anything – did anyone like to say anything about this proposal?

NRO: Yes. This proposal is dependent on records & tuples don’t expect any progress on this before records & tuples.

PKA: Makes sense. Thank you.

### Destructure Private Fields

PKA: Destructure private fields. I am not sure if JRL is here. On Zoom?

DE: I don’t know if JRL is on Zoom. But I was going to – I feel responsibility here. While I was on my break, between jobs, some months ago, Justin was going to present this in committee. I saw this and was a little bit uneasy about destructuring private fields being prioritized other than private field features. In particular, once we work out the details for private fields in object literals, we might end up with things looking different from the destructuring private fields proposal.

DE: So I asked him to hold on in advancing to Stage 3 to work together on that. Since then, we haven’t found time to look into the more general proposals, even as he’s also excited about these other extensions. I would say this is in a phase where we are seeking co-champions for looking into this problem space. There are different ways that a champion could go, pushing through this thing or investigating the broader space. Get in touch on matrix with me or JRL if you are interested.

PKA: Great. Thank you, DE.

### RegExp Buffer Boundaries

PKA: The next proposal is RegExp buffer boundaries, RBN do you want to share a brief update?

RBN: Same thing that I mentioned yesterday, regarding the reg ex modifiers; this is on my to-do list, but deprioritizing in favor of trying to wrap up the resource management proposal.

PKA: Great. Thank you for that.

### Pipeline Operator

PKA: Next we have pipeline operator. Which I believe has many Champions. RBN?

RBN: I don’t know if anyone from the proposal is here, this has been sitting fallow for a bit. I think the debate is still going on as to what should be the topic for the pack-style pipeline. I don’t have my finger on where that is right now. I know that discussion is still ongoing and has been no resolution to that.

PKA: Great. Thank you.

DE: How should the committee proceed with respect to the pipeline operator? Because this debate question was open years ago. We have changed the kind of candidates where the topics has replaced the previously smart pipeline operator, but it’s been stalled for a long time.

RBN: I ask that we don’t – maybe we try to bring this up at the next meeting. I would like to make sure the other champions are present to be part of that discussion.

DE: Sounds good.

### WeakRef `cleanupSome`

PKA: Next we have WeakRef `cleanupSome`. DE is champion -- DE would you like to say anything about this?

DE: I would like to propose withdrawing this. Maybe we should do this at the next meeting, since I didn’t put it on the agenda in advance. This API was motivated by the idea that, for some APIs that accept a callback, if we expect important callers from WebAssembly, we should be giving synchronous versions to be used from WebAssembly, which are restricted to workers.. This is still being done sometimes on the web platform. But there is also [Wasm promise integration](https://github.com/WebAssembly/js-promise-integration/blob/main/proposals/js-promise-integration/Overview.md) which could be a back towards not having to make asynchronous APIs. We omitted this synchronous API because of the hope that such integration or something with coroutines maybe would remove the need for this.

DE: Overall, I haven’t heard much developer demand for this feature. Has anyone else heard demand for this?

PFC: Not really demand. But someone did write test262 for it.

DE: Okay. So how do people feel to . . .

DE: We may want to wait for YSV to come back

RPR: I think we may not also have all of the dialed in audience as well.

DE: Yeah. We will return to this in the future.

### Function implementation hiding

PKA: Function implement hiding from MF. MF, are you able to say something briefly about this?

MF: Yeah. This one, last we presented, was blocked by Mozilla for reasons of incompatibility with a security model they had, and was partly the justification for the creation of TG3: to actually further define what security properties this committee cares about. So I would say that this proposal can’t really advance until TG3 can define that.

PKA: Okay. Great. Thank you for that.

### Throw expressions

PKA: Throw expressions from RBN. 2018. Are you able to share something about about this

RBN: I want to bring this back and I haven’t – it’s – I actually think I had a solution that would work to make this to alleviate some of the concerns that have been raised about it way back when. But the main sticking point was that why have throw expressions if we will have `do` expressions? So it’s essentially waiting it see what happens with `do` expressions. So once that direction is determined then I can move forward with throw expressions or withdraw. But until then, I can’t really make a decision.

KG: Just as the – I guess, technical Champion of `do` expressions at the moment, I am not planning on working on `do` expressions in the immediate future. I am also more okay with advancing throw expressions than I was when it was originally discussed. Mostly because my main concern was that there were some chance it might have been the throw expressions might have been part of a larger project to make all statements legal in expression position in some way other than `do` expressions. And I was concerned about if this was going to be a part of a larger vision, then we would want to worry about the larger vision. I think since then it’s been – my impression is that no one has been interested in legalizing all statements in expression position without some wrapper like `do` expression. If it is not intended to be part of a larger thing, I am not as worried about it. So if we can come to a happy resolution on the grammar thing, don’t worry about `do` expressions.

KG: I believe I was the only person who expressed that concern at the time

RBN: Yeah. I will say – so the gra – only allow to parenthesized expression. Which would give the right grammar for what would happen on the right-hand side. Because the concern was around I think it was around how comma worked in those cases.

DE: If I understood correctly, part of KG’s concern was that it would create two different precedences for throw. Baseline, it has to be permitted in statements with extremely low precedence, and then again as an expression with precedence at least higher than `,`. So the concern is that adds complexity to the grammar to have two different precedences. One in the parenthesized case and one in the statement case.

KG: If it’s in parenthesis, then there’s no precedence issues. You can have comma expression on the right-hand side

RBN: Towards the concern whether it was a broader goal, the original goal was just throws expressions, and several committee members requested we do an investigation into whether or not we wanted to have or could is a support for statement. And I did my investigation. And my take on the results of that investigation was that it wasn’t necessary. And it wasn’t really something I was interested in. The only thing this came out, was making debugger an expression because it could be, but that’s about it.

KG: Yeah. Well, we should move on. But I think that to the extent that I was the person who was holding this up in the past, using parenthesis sound like a fine thing to the grammar thing and I am not as worried about rectifying this with do expressions as I was previously, so . . .

RBN: I am happily bring this back once I have finished up with using.

DE: Would Kevin, would you be interested in co-champions for the do expression proposal?

KG: Why isn’t it on this list?

DE: Because it’s Stage 1

KG: I can speak to do expressions briefly. I am not currently actively pursuing it. Because mostly, there’s a ridiculous number of new syntax proposals. And I am less interested in having infinitely many new syntax things and I think there is more value to be had from me pursuing more standard library things. Right now I would prefer to focus my time on that rather than syntax. Do expressions are nice in some ways, but complicated in others. And like, if I had literally infinite time and we didn’t have a bunch of other syntax that we were also doing, I would be pursuing it. Since none of those hold I am not currently pursuing it.

DE: So I was really impressed by your previous work on do expressions and optimistic about it proceeding. Especially in the context of its value combined with JSX, for example. Would you be open to somebody else working on it, or do you think that you would be skeptical of anybody else pushing it forward and, you know, block that for this sort of syntax overload issue?

KG: I wouldn’t block it for the syntax overload issue. At the same time, I would caution anyone picking it up that like, I do think that a better use of all of our time would be to focus less on syntax for a while. I am not going to say you can’t spend your time however you want. But that is my opinion.

DE: Okay. So to summarize, it sounds like you are open to a different champion taking this over; you’re just not, you know, feeling like being a proponent of this.

KG: Yes, and I wish the committee as a whole would spend less time on syntax. I don’t think the cost benefit works out.

DE: All right.

PKA: Okay. Then thanks Ron and Kevin.

### Other proposals

PKA: I would like to highlight these 6 proposals. We – I'm personally not aware of – these having champions who are active in the committee. DE?

DE: Yeah. I proposed `Array.isTemplateObject`. . . I still think it’s a good idea. It’s a small proposal. If people are interested, please let me know. And then that will determine whether I pick this up again.

DE: For collection normalization, a lot of us are interested in this. Especially in the context of Records and Tuples because part of that is about keys in maps and normalization and about keys in maps. It’s something that ACE is investigating and I think we will be hearing about this soon in committee. Or maybe not soon, but at some point.

MLS: (from queue) “We could remove "Sequence properties in Unicode property escapes" as it was subsumed by the RegExp V Flag proposal <EOM>”

PKA: I'd just like to highlight that, for the remaining proposals we haven't mentioned, if anybody does want to see the proposals continue, it might behoove you to volunteer to step in and take them over . . . so cool. Thank you, everybody

USA: I would like to request Champions of all the proposals be talked about today, to take some time and add summary for each of the discussions in the notes. And yeah. Thank you, PKA for the short notice prep of this session. Thank you, PFC for pointing that out. Great.

### Conclusion

Ten (10) Stage 2 Proposals have been presented recently and did not need to be discussed:

- Async Contexts
- Async Iterator Helpers
- Deferred Module Evaluation
- Iterator.range
- Module Expressions
- Module Declarations
- Records & Tuples
- Source Phase Imports
- String Dedent
- Symbol Predicates

Two (3) proposals were identified as being fully active:

- RegExp Buffer Boundaries (on RBN's backlog)
- Pipeline Operators (subject to ongoing deliberation within champion group)
- Collection normalization (being worked on by ACE)

Two (2) proposals were identified as being candidates for withdrawal:

- WeakRef `cleanupSome`
- Sequence properties in Unicode property escapes

One (1) proposal was unblocked thanks to participant discussion

- throw expressions (RBN will continue work on this when he is able to)

Two (2) proposals were identified as blocked on other committee work

- JSON.parseImmutable (a dependant of Records & Tuples, which is also Stage 2)
- Function implementation hiding (blocked on work by TG3)

Two (2) proposals were identified as potentially needing new champion involvement:

- Destructure private fields
- Array.isTemplateObject

Three (3) proposals were not discussed in detail and do not appear to have champions who are active in committee; PKA invited anyone who is interested in these proposals to step forward and volunteer as champions:

- Map.prototype.emplace
- Dynamic Import Host Adjustment
- function.sent metaproperty

## Reducing wasted effort due to proposal churn

Presenter: Michael Ficarra (MF)

- [slides](https://docs.google.com/presentation/d/1V3Fg6HVC-VA41YCu0Yhqynvqhsu5kVj7tiWuVfp8S90/)

MF: So I am going to start with some background that probably almost everyone in the room is familiar with. But I wanted to go over it again in case and make sure we are on the same page. There may be some slight missing details, please don’t be pedantic about it – we are getting the idea of what the stage process communicates and what happens when. I am going through the whole thing.

MF: So the process of a proposal starts with somebody identifying a problem space. Stage 0 is an informal stage that we allow people to assign without committee consensus. This signifies somebody had such an idea. During stage 0, that champion researches the use cases related to the idea and creates a document so they can present it for Stage 1. When we accept a proposal for Stage 1, that means we have defined the problem.

MF: During Stage 1, we look for possible solutions, compare them and get feedback from the community. We eventually will choose one of those solutions to move forward with. And we will start writing spec text for it. When the committee advances that proposal to Stage 2, we are going forward with the solution, not every detail, but the general solution looks like the route we want to take. That signals to the champion to further invest in using this solution as the way to solve the problem. So they work out all those remaining details. Fully finalize the spec text. They’ve also been assigned reviewers when Stage 2 is granted. Those reviewers will give feedback on any technical aspects and the editors make sure it’s written in a way that can eventually integrate with the spec.

MF: Currently, the most important stage advancement Stage 3. What this signals from the committee is that the details of this proposal are as final as they can get without further feedback from implementations and tests. The committee is recommending at this time point that the proposal be implemented. So what happens during this stage is that the implementation begins. Test262 tests are written. It’s not prescribed who writes them. Just somebody does end up writing them. Once 2 or more implementations ship and the final spec text has been signed off by the editors, they go for Stage 4, which is mostly a formality, meaning that proposal can now go in the draft standard. So the editors are then tasked with merging it.

MF: So that’s our proposal process. The parts of that process I will be talking about are mostly what happens after Stage 2.

MF: This graph I have here shows some of the activities that delegates participate in. They are ordered in increasing level of effort. We have the proposal design process which is fairly easy and lightweight to change, as we are working through a proposal. Writing spec text requires a bit more effort, since we have to be precise. Test262 tests often require even more effort, since we need to consider all the combinations of values that need to interact with the proposal, consider all of the paths through all the algorithms in the spec that we're testing. And then when you consider all of the work that goes into all of the different implementations in aggregate, that’s even significantly more effort than testing.

MF: The thing I am trying to claim today is that if we delay the higher-effort activities until after we’ve completed those lower-effort activities, then we reduce the total effort expended, again in aggregate, among committee members. In other words, we should do these things in order.

MF: So why don’t we do things in order? I claim it is a process issue. The issue arises when a proposal is Stage 3, and somebody is writing the tests for that proposal, and the tests uncover issues that require changes. This feedback leads to the proposal needing to be changed. But there may be in-progress implementations that also need to change with that update. But we can’t just alter our process by requiring tests before Stage 3 because that leads to a different undesirable scenario, where pre-Stage 3, the committee has not committed to all of the details for the proposal, and if the committee is flip-flopping on the design choices, that requires some possibly-very-large amount of effort to be redone when the tests are updated.

MF: So my concrete proposal is this: a new stage, after Stage 2 and before Stage 3, where the committee has committed to this design of the proposal, agreeing not to make changes that are not based on feedback from either tests or implementation. Those would be the only reasons to make changes anymore after this point. This allows the implementer of the tests, whoever that is, to do that work without the risk of somebody just changing their mind about the design, and it also – because we don’t yet recommend it for implementation – protects implementers from redoing work, which is more work than updating the Test262 tests.

MF: So I have a bunch of questions that I predicted people might have about this. First one is: will this slow down the proposal process? Maybe. It doesn’t have to. If a proposal is small, it can still be fast by having tests written before advancing from Stage 2. If those tests are deemed sufficient, it could directly advance to Stage 3. The proposal author is taking on the risk of having to redo the work if further design changes are made. Also, we’re not introducing another point where the committee can, you know, relitigate the design. It’s not like an IETF last call. The advancement from this new stage to Stage 3 will be entirely based on whether the tests are adequate.

MF: Who writes the test? This is open for discussion. But the champions are already responsible for all of the other parts of the proposal process. You know, collecting data and use cases, interacting with the community. Writing spec text. They should write tests too. We can talk about that, and also people may be willing to help with writing the tests. Ideally, they would be blessed by the champion group to do that work.

MF: Do the tests need to be perfect? No. We will have fuzzy ideas of what is adequate. And that will be different for different proposals. So more complex, more risky proposals should probably have a higher bar. We also may have some objective measures. I am not proposing we design any of those today.

MF: What do we do about stage numbers? We have natural numbers right now for our stage process. And as I was saying in one of the earlier sessions, the internal process has leaked to the community and now has compatibility concerns. So I don’t know what to do. But for now, for the purpose of this discussion, if you need to call it something, call it Stage 2 and three-quarters.

MF: Another question: if we do this, should we apply this retroactively? There’s two possible options here, maybe more. We could reconsider all the current Stage 3 proposals that don’t have sufficient tests or no tests. We have a list of those. At the least, we could consider any proposals that have advanced to Stage 3 at this meeting with no tests to be at this new stage instead. Those are options. There’s probably more options. That’s my presentation.

DE: So I am a huge supporter of this proposal. MF and I have been chatting about this. I want to emphasize the polyfill and transpiler implementation, and also add engine262 implementation which is also more approachable. I think it’s really valuable to do these kinds of implementations earlier in the proposal process. I think Leo Balter earlier made a proposal that we move such implementation earlier in the stage process. I wouldn’t want to make it a hard requirement, but I am a little discouraged when people say, it doesn’t make sense to do an implementation in one of these, you know, compiled environments yet for testing because it’s not at Stage 3 yet. Some implementations take different amounts of effort.

DE: Overall the idea here is that we want to get to a point [at Stage 2.75] where the committee has decided on the design, and now we’re trying to satisfy the next objective next criterion [tests for Stage 3]. I think this [making decisions by consensus which are not just major stage advancement] is a direction that we have been moving as a committee in different ways. We have been talking sometimes about how the committee should be able to decide something by consensus, not just a stage advancement because otherwise, we end up kind of shoehorning everything we want to decide into stage advancement, which could lead things to – which might be appropriate in some situations and less than others. So, yes, + 1.

NRO: Yes so for the example tools, like, Babel often implement proposals before Stage 3. We used to have it in Stage 1 for some proposals. That is a mistake. And like we aware of the risk. We had all kind of flags, like, to switch between different proposal versions. It ended up being a lot of work. But that’s a risk we want to take, to let user test proposals, as soon as possible. And this would not change for us, even if there is this any suggestion about when things should be implemented.

PFC: I wanted to support this point. I'll point out that if there is an implementation, even an incomplete one, either in an actual JS engine or polyfill, it makes my task as a maintainer of Test262 easier to review a large test pull request for a new proposal. I would encourage – especially if we recommend engines not to start implementing until after the test are merged — that we lean all the more on recommending the proposal champions to implement a polyfill or a transpiler or engine262.

USA: Right. One thing that the . . . at the cost of repeating one thing come up multiple times, especially in the context of TG2, whenever we go to Stage 3, it’s awkward if there’s no test. With the expectation that people are supposed to implement, there is most implementations wouldn’t be comfortable implementing unless there are tests to test the implementation. So it sort of introduces this awkwardness and lock step that’s not ideal. Using the stage process to resolve this makes a lot of sense. So I strongly support this.

SYG: I am going to respond to USA here. It’s not true implementations are not willing to implement, if there are no tests. We are used to the default state being no Test262 tests and we write our own tests and that was a motivation for staging in Test262. Hopefully we can contribute to that. Not just our own test suite but the test that the implementers write are different than the ones who is going to get spec coverage will write. There are missing parts. So yeah. Maybe you were at thinking of Chrome’s policy that we don’t ship anything without Test262 tests. For both in the form and JS . . . but just a quick correction I think most implementers would implement without the Test262 tests. Going maintop I object, I support this proposal. The thesis that MF put forth, would in practice, save a lot of time. The – I think to anticipate some of the upcoming questions like, it’s true in the course of implementation sometimes relitigation happens things are discovered via testing or implementation that is a different kind of relitigation than what MF alluded to here in what is supposed to be frozen at Stage 3 and three-quarters, which is independently motivate design changes to the proposal that are not purely reactive based on like implementation difficult or impossibility or bugs that are discovered. It’s already the working mode today that freeze point is Stage 3. And then the change we make after that are supposed to be the reactive changes due to unforeseen things that we couldn’t have foreseen without doing the work of implementation. Michael is saying, and I agree, some of that class of things can be pulled up and discovered without implementation, if tests were written. You are in a different mode of thinking when you are not designing something, but taking something specifically written down and writing tests for it. When you engage at a line by line level, you see different things. And that I think will be strictly helpful. It could in theory add more work. In some pathological cases, for example, a lot of tests were written and all wrong. But you know, that risk exists today. And I trust the champions and the delegates here to make an effort to not do that. So all in all very supportive. Thanks for presenting.

MLS: I want to re-enforce what SYG said. Implementers do write tests and also correct existing tests and there’s a chicken-egg issue. If you are writing tests in the vacuum of no implementation including a polyfill, then it’s conjecture, I believe both test writers and implementers are looking at the spec many detail line by line and SYG says, when the implement either test or the implementation to make sure that you get things right. I will talk about that further down below.

USA: Yeah. I wanted to respond to one of the points regards slow down in the process due to this. I feel that if you – consider like one thing we can do is to make sure that the process could accommodate smaller proposals and make sure they pass through quickly. In the case of larger proposals, think about it practically because of the awkward back and forth that needs to happen and people sort of getting lobbed on different things, really, like is it actually making things faster? Because we’re making it sort of more streamlined rather than slowing things down?

DE: Michael, I don’t know if you want to reply first to that. But I like MLS comment and agree. The cyclical analysis makes sense. It can start with either tests or implementation. But one way to kind of bootstrap that would be to develop a polyfill or transpiler or engine262 in concert with tests maybe developed in in informal mode that. That is developed incrementally. Maybe by the same group. And I think if proposal champions had the bandwidth to do that, it could give a useful resource for implementers. There is a nice base.

PFC: Okay. I wanted to say that I – in general, I am really positive about this proposal. I like it. I think it probably works more effectively the smaller a proposal is. Having been involved for three years in Temporal now, which is a big proposal, I think the larger the proposal is, the more blur there is between these steps of writing tests, finalizing the design and hearing from implementations. My experience has been that if the proposal is so large, then feedback from the experience of writing the tests can also lead to going back and revising a design. And so can feedback from the implementation. I think in Temporal’s case, if we had this new stage scheme, the proposal would still be in Stage 2 and three-quarters now. And whereas it’s been valuable at this point to already add feedback from implementation. Frank have spotted a lot of things that why news to us in the champion group and wouldn’t have been uncovered necessarily by the test we were writing. So yeah. In general, I support this. But I think probably we should allow for a bit more blurring the larger the proposal is.

DLM: I agree with the points that SYG and MLS raised. Implementers will write their own tests and they are not the same that are written for Test262, but I still think having good Test262 tests is very helpful for an implementation and the SpiderMonkey team is in favor of this proposal. Or at least having more scrutiny of what test262 tests have been written prior to stage 3.

WH: So in this proposal, we’re adding a new stage. At which stage will we seek committee consensus to get the reviews from reviewers?

MF: So on the slides here, we have that right now, advancement from Stage 2 is when that happens, that remains the same.

WH: Okay. So the reviews will be done – you said at Stage 2? We have Stage 3 —

MF: When a proposal is Stage 2. These reviews are done in preparation for advancement to this new stage. Today, when a proposal is stage 2, these reviews are done in preparation for advancement to Stage 3.

MF: If you’re in favor of the new stage being the stage we call Stage 3, we can change the name from what I have here to something else

WH: Yes. Something we are doing all the time in the committee is advancing things to Stage 3. We seek reviewers for Stage 3. We should keep it that way and have a Stage 3¼ for when tests are done.

MF: Yeah. I recognized this as a possibility that I considered during the creation of this presentation. The reason why I chose this formulation instead of the formulation you’re suggesting was that I feel like people conceptualize Stage 3 as recommended for implementation widely, not just within the committee, and that was the one I felt would, if changed, cause a lot disruption

WH: Stage 3 is two things: A signal to implementation. And an approval from the committee that the spec is final. The thing I want to avoid is, when I ask for spec details at Stage 2, I’m commonly told that we will settle these by Stage 3, so I don’t want to end up at the approval meeting for Stage 3 and find out that it’s too late to fix technical problems because the committee is committed to a feature that hasn’t passed approval because things have been frozen at Stage 2¾.

SYG: Yeah. I recognize that there could be a period of if we adopt the new model, a period of disruption where – yeah. Accidents getting through because people are not used to be the new stage being the final, final Stage 2 stage. But I in general, think it’s easier for use the committee, the 50-odd people to change our mental model of what corresponds to final_final_v2. I agree with Michael in that the community at large, whether that’s Babel plugin, inside look for Stage 3, get ready for general availability. If Stage 3 and they are a lot more consumers of even experimental implementations of proposals by Babel and the engines, then us in this room, and I think if we adopt the new stage, it’s more in our interest to keep the external facing numbers the same. Unless there’s compelling evidence that in fact Stage 3 is not taken that way, but I feel like Stage 3 has taken as like get ready for general availability. It’s less risky to start depending on the Babel plug in and I would rather not be the – not have to try to teach the community at large that that is going to be different. The flags are going to be new, a new number. I am not sure what we gain from that. Eventually, I think us in the room will get used to the new number.

WH: In your models, the committee would not be advancing anything to Stage 3 during plenaries. Therefore, automatically —

SYG: I haven’t thought through that detail, whether automatic or not. I don’t think I have too much of a preference. My hope is that for the large number of proposals, you will ask for Stage 3 and this freeze stage at the same time, that it will become hopefully the form people will write the test for the next plenary and then ask for Stage 3. But that’s also a new thing. We don’t automatically grant new stages. So I am uncomfortable saying that should be automatic. But I see the new stage as the signoff stage for design.

WH: Okay. This muddles things up. What I want is a clear point where the committee signs off on the final design, not something that works just for some proposals.

SYG: That is the new stage, is my understanding. Other than the number be confusing, which I admit, may happen, I am not sure I understand. Is there another concern, other than the new number being confusing

DE: I think part of this may come from if Waldemar says, the design decision should be made after Stage 3, that muddles the situation. In my mind, we have been operating for a long time that all known design decisions should be discussed before Stage 3, concluded before Stage 3. And after Stage 3 what we do is go through issues that we discover later due to implementation work.

DE: So I think we should – I think that there’s a point where the committee makes this objective decision. And then Stage 4, although we advance to Stage 4 in the meeting, is basically based on these objective criteria. So here, we would base Stage 3 on these objectives criteria. And Stage 2 and three-quarters is where we make a judgment call.

DE: I think this should be clear cut. If anybody tells you “no, you should give your feedback after Stage 2 and three-quarters”, call them on it and say “no, it has to be handled now”. This is the decision point.

DE: As far as when exactly editor reviews happen, I would be okay either way, to precede Stage 2.75 or Stage 3. There’s going to be a Stage 4 editor review anyway, so it doesn’t make a big difference. I don’t think the editor review tends to affect the tests so much. I’d prefer requiring editor review for 2.75, but maybe we could require it for both transitions? Anyway, the idea is that Stage 3 stops being an important decision point. And instead, it’s the new stage that is the decision point.

WH: This muddles things up even more.

DE: How so?

WH: Well, because now I am not sure whether Daniel is saying reviews would happen at a new stage or at Stage 3 and I am hearing both variants.

DE: Oh. That’s the least important part of it –

WH: This is very important.

DE: So I agree with what Michael said, and I think this makes a coherent model altogether because Stage 2.75 is the part where do the reviews and drawing a conclusion

RPR: Okay. Dan, what you are saying to answer the question directly, is that the reviews happens as entrance criteria to 2.75.

DE: For greater integrity, an extra review before stage 3, if there are any intervening changes, then yes, a confirming review makes sense.

SYG: Let’s not talk about the – concretely, what this proposal is, is for nonimplementers and nontest writers, everything that you used to do for Stage 3 now happens before the new stage. If you do not write tests and are not an implementer, nothing champions except the number to care about. It’s changed from 3 to 2 and three-quarters.

DE: Yeah. So effectively, we are setting a higher bar for Stage 3 so that people can have greater confidence in Stage 3.

MLS: Stage 4 is when things are final. I want to make sure that we as a committee understand that. We have a lot of things – that have gone back to Stage 2 or some kind of – a lot of normative changes for Stage 3 proposals. Get ready, I agree, Stage 4 are when things are final.

NRO: Yes. I give it, like, moving requirements are like across different stages when like changing name and like moving like requirements in your name, can be confusing. And like MF said that our internal process ‘leaked’ the meaning for Stage 3. And the meaning that people gives you 3 is that the committee consider proposal to be in a good shape and unless some – some concern is brought up, like during Stage 3, during the implementation, it’s considered to be fine. Incompetent implementation or the test because that already happened. And what we are doing now is we are automatically saying we have a new stage which comes before Stage 3, for everyone outside of this committee, because like most of us implementations or tests . . . they will have to rename mental tally Stage 3 to a new stage. This is like – we are tying to improve our process, making things more clear. Like giving an order to Stage 3. And we are like leaking internal factoring to have we communicate with the rest of the community. And yeah.

DE: I think the community assigns an understanding of a certain amount of stability to Stage 3. The purpose of this process proposal is to encourage people to refrain from assigning that understanding of stability until tests are written. I think this could be a stabilizing step for the JavaScript ecosystem. So the goal is to encourage people to not renumber things. That’s the motivation for this numbering.

NRO: Okay. This like – we discussed about splitting Stage 3. And moving things around with respect to ship, even if it doesn’t change, doesn’t anything about our process. It was just like that as much as Stage 3 should be stable or changes could happen so we had like we discussed about giving this signal implementers, saying. Okay. This is now stable. Like, for real. And again, this is like splitting Stage 3 like again with this . . . is just like a game, giving a different point after we already consider proposal to be like close to be done. And like tests – writing tests doesn’t point to the proposal being significantly more safe from changes.

MF: I would argue that there’s empirical evidence that, after writing tests, proposals are more stable. I can point to many examples of that, if you would like.

SYG: Yeah. I want to + 1 MF here. It is true that things written after tests are more stable. There are small normative things that happen that, yeah. That they just happen and could happen ahead of time.

RPR: Okay. I will just say we have 4 minutes left on this topic. And we have got very big queue.

MLS: So I want to point out step serialization will slow things down. Except for the very smallest proposals, we’ll probably require another plenary meeting before Stage 3, the current Stage 3, to Stage 3. And as an implementer, I don’t think -- I think we would be less likely to implement something if we have -- if it’s not in the current Stage 3 where we rest or whatever. I think this -- there’s already kind of an implicit -- mostly implicit ordering that we have tests before we implement. Now, saying that, quite often, the test262 tests are quite inferior. I recently implemented something where there was about, I don’t know, I’ll just say there’s maybe ten syntax tests. When all is said and done, I had close to 200 syntax tests that I wrote before we shipped the feature. So we have to be very careful that we may be slowing things down not only because of process, but also slowing things down because the test that we’re now implicitly requiring -- there’s the test written stage that implementers may slow down their implementation.

EAO: So if you look at this from the point of view of Stage 3, the thing that has changed, if this is accepted, is that the test262 tests are written earlier. And everything else effectively stays the same after approval for Stage 3 has been reached. So I get that. That sounds like a good idea. What I’m not really getting is why do we need a new stage explicitly for these tests, which, as presented here, are primarily an action driven by the champions. And I see that you do cover this a little bit in the presentation, but the sense I get is that we’re doing this in order to make it easier for issues that arise from writing the tests to have an earlier impact on the spec text and on the implementation itself. So I get that part. But I don’t think that there’s necessarily enough of a reason to add a completely new stage in here rather than just moving the test262 coverage to be a requirement for Stage 3 advancement.

MF: So it is expensive to write tests. I recently wrote iterator helper tests. I wrote about 350 to 400 tests. It took me a couple of months, like two months of the time that I can spend on TC39 to write those tests. But iterator helpers was at Stage 3 at that point, so I had the confidence that the work I was doing was not going to have to be redone. For proposals of that size, I cannot make that kind of a commitment until the committee has committed to me that the design is what we want it to be. So that’s the need for this stage. Some people were calling it like the frozen stage. That might help you better understand why we need it.

RPR: So +1 from LCA

LCA: I want to comments on that real quick. Can you go back to the slide of -- yes, that one, exactly. The -- so I think this makes sense under the assumption that at -- when you reach this new stage, you already have signoff from the committee that things are final. And, like, if this is the case and I guess this goes back to the question of where do we do reviews. If reviews happen before this stage, this makes sense. If reviews happen later at Stage 3, then we’re not quite sure things are final yet, doing this test development. So, like, I don’t know. And then, like, do things that we uncover during writing these tests, would they have to be -- like, go through normative approval in the committee again prior to going to Stage 3 or is this something that can sort of be applied to the spec?

MF: My thoughts was that similar to how it works today, when we find issues in Stage 3 proposals through tests, we would bring them back as agenda items for committee approval each individually.

RPR: We are at time. The queue is quite large.

MF: Do we have time for an extension?

RPR: We’d be going into the break. The break must finish at 25 past, so we’ve got -- we’ve got 20 minutes between now and then. I think at most, we’ve got time for five more minutes, but that should include your summary.

MF: Okay. Let’s do two more minutes and I’ll try to summarize and do next steps.

SYG: I sense some confusion on what the proposal actually is. My understanding of the proposal, correct me if I’m wrong, Michael, to be -- I’ll try to be as concrete and explicit as I can, take the current model. The current model -- what’s proposed is that we take the current model as it is and in the current stage numbering, all this stuff, the reviews happen before Stage 3. Test262 happens some time between Stage 3 and 4. What is being asked is that the stages -- sorry, that the Stage 3 stuff, the reviews, that all still must happen, and then test262 happens, and then the implementation stuff happens, and then we rejigger the numbers. The reviews are not going to be delayed. Not till after the tests. That doesn’t make sense. It’s -- I understand this proposal to be just about separating the two signals that are conflated into Stage 3 right now, which is one implement, and two, design is finalized. That there is additional work that could help ease things if we give separately the signals, design is finalized and ready for implementation. The most -- most of the Stage 3 stuff is about the design is finalized for us, for people in committee, the thing we care about is design is finalized. So all that weight is shifted to the new stage. It’s not going to be happening after tests are written, because, yeah, that would be nonsensical.

CDA: All right, we are at time., I will capture the queue. Do you want to dictate a summary for the notes?

### Summary

Generally positive feedback from the committee that this will help reduce costs effectively, and should be continued to pursue. Naming and numbering still has not made any progress. More feedback is requested offline or online, between now and the next time we talk about this.

## DataView get/set Uint8Clamped methods for stage 1 or 2 or 3

Presenter: Jordan Harband (JHD)

- [proposal](https://ljharb.github.io/proposal-dataview-get-set-uint8c/)
- no slides presented

JHD: It would be great if someone was able to present. Just the link to the proposal repo would be great.

JHD: Thanks. Cool, and then also if you could pull up the proposal repo. Thank you.

JHD: All right. So I was writing some code. I was trying to accept all kinds of TypedArrays and to dynamically dispatch on which kind of TypedArray it was, and I wanted the ability to set little and BigInt and I reached for the DataView get and set methods and noticed that one of them was missing. I made a helpful little chart showing the inconsistency. If you can scroll down now, Chris. Yeah, so that’s it. So basically seems like these were just missing and it would be nice to add them. In particular -- in particular, the set method, because that includes the clamping behavior that -- so in the -- that in the absence of it, I have to manually reimplement. The get method is exactly the same as the one for Uint 8 array, so it could even be an alias to it or something, but just for consistency, it seems nice to have them all. `Uint8ClampedArray` is certainly weird and for canvas-based applications, but it’s certainly weird to have the omission. You can go to the spec part now. It’s very simple. It’s just these four lines of spec text could be condensed to two, if you wanted to be really concise. Just because of the -- you know, this is the way they’re all implemented, you just have to pass the spec internal type Uint 8 clamp. I’d like to close the inconsistency and add some methods and there you go. I see a queue topic from Michael.

MF: I think that the getter just isn’t motivated, and I understand the desire for consistency, but I don’t think that’s strong enough motivation. So I don’t think we should do the getter. If we find some motivation later, we could do it in the future, so there’s nothing preventing us from doing that. I’m okay with the setter going alone. I think that should be fine.

JHD: Yeah, I mean, I’m content -- well, I would say either -- even just adding the set method is still a consistency increase. I would like it, so if that’s the case, so be it. But if the -- yeah, I guess I’m wondering what the cost is of adding the get method. Especially if it’s an alias, so implementations wouldn’t even have to make a new function. JHD: Michael, did you have any thoughts about that?

MF: I don’t know if I’m qualified to answer that. I imagine implementers might consider it to be a cost. But --

JHD: What’s a cost for you, since you don’t think it’s sufficiently motivated, so I’m wondering, what’s the downside to having it, from your opinion?

MF: There would be a -- an additional method that, like, developers can see exists and not know why they might choose it over the alternative that should do the same thing, leading to confusion. Or just an additional entry in autocomplete for things that people don’t need, not just like some people need, no person, like, not one person. It doesn’t seem worth it.

JHD: I mean, okay, I just explained why I need it. I agree it may be very, very rare. Okay.

MF: Was your explanation for, like, programmatic access? That’s what you mean, computed property access?

JHD: Mm-hmm, yes. I don’t want to have a special case in my code for one TypedArray type.

MF: Yeah, I’m still unconvinced by that. Not that I’m opposed to adding it. I just don’t think that’s sufficient yet. If other people --

JHD: No, yeah, that’s fine. I’m just trying to understand your position. Thank you.

PFC: Is there anyone around from the time when DataView was originally added who knows why the inconsistency was left in the first place? That might be useful to know.

RPR: I don’t think anyone’s answering on the history question. So on to Dan Minor.

DLM: So we discussed this internally, and it doesn’t seem super useful to us, but if we do agree that it fixes an inconsistency, so we would be ok with stages 1 or 2 for this one.

RPR: Dan?

DE: About the history, I wasn’t there, but it wasn’t considered a kind of meaningful thing to have the clamped operation on. The -- I think the `Uint8ClampedArray` is kind of a hack and we shouldn’t really be building more things on it. So I agree with MF’s point. But I don’t understand the motivation for this yet.

RPR: And Michael Saboff?

MLS: Jordan, you have checked to see what current engines do when you create such a view and then try to get a value?

JHD: I’m not sure what you mean. Like, the -- they all -- they all work fine. It’s just that those two data view methods don’t exist, so they’re -- I can dynamically dispatch -- like, I can have a special case in my code, that’s what I have to do currently, that says if this is a
`Uint8ClampedArray` for a get, do a U8 get instead, and I have a similar condition in the set path, but in the set path, I say if this is `Uint8ClampedArray`, I have to manually clamp the value and then I set Uint 8, because the DataView methods are the only way you can set or get a value with an NDS that is different from the underlying system.

MLS: The reason I am ask, is because I’m looking at our code, I don’t know if it’s fully plumbed, but we have clamping functions in what we call our Uint8 clamped adapter that is used to make the view. We’re doing it internally.

JHD: Yeah, I mean, so because you can set a value directly into a `Uint8ClampedArray` with property, like, bracket zero equals, the clamping logic must already be in every engine to be compliant. It’s just that it’s not connected directly exposed as a DataView method and to ability to specify the NDNS.

MLS: I haven’t looked at the plumbing all the way through, but it shouldn’t be too difficult to add.

JHD: That’s my expectations, so I’m glad that’s yours as well. Dan, you had said something that you don’t understand my motivation. Is there more that I can explain to help you understand?

DE: My understanding is that the motivation is about fixing the inconsistency, about filling out the grid and that any utilities you expose for TypedArrays and DataViews, that, you know, kind of map and be fully expressive. I guess I would want to hear -- please correct me if I’m misunderstanding, I guess I’m wondering what the next step is. Why would somebody want to call your library in a way where these methods are used?

JHD: Yeah, I honestly don’t have an answer to that question.

DE: Okay.

JHD: I certainly don’t use Uint8ClampedArray directly myself. I’m simply wanting to make sure my utility supports all TypedArrays in its code path.

DE: So that -- that’s valid, I’m glad you’re being honest about this. I think this is the kind of things that we should have answered before going to Stage 2.

JHD: Okay. For both the get and the set?

DE: Honestly, one of them would be enough, for me.

JHD: Okay.

DE: Just clamps DataView stuff at all.

JHD: Okay. All right. The queue is empty. So it sounds like I have support for Stage 1.

KG: Well, you have heard that no one objects to Stage 1.

JHD: Right.

KG: We have a relatively new requirement that we said we were going to try to do that to advance any proposal needs at least one explicit second. So I would like at least one explicit second, that someone else is in favor of this advancing. I’m not opposed. But, like, if you are literally the only person who thinks this should -- who actively thinks this should advance, I think that is probably not enough.

RPR: Well, let’s check to -- let’s see what Chip says.

CM: Yeah, I support this. Just seeing those two red Xs in the big -- and green dots just makes me squirm.

MLS: And I support it because there’s a lot of graphic usages for something like this.

DE: Could you elaborate. What use do you see?

MLS: (inaudible) for image processing, so, yeah, there’s a lot of -- you know, there’s 4 bit and stuff like that. I don’t want to get into a SIMD discussion, but in clamp arithmetic, in clamp arrays makes sense.

WH: I also support this.

RPR: All right. Jordan, you have lots of support.

MF: MLS, can I get a clarification. So you’re supporting the setter, right? You have explicit support for setter, but not necessarily the getter? I don’t know if you heard me.

MF: It’s the same thing as the unclamped one.

MLS: Yeah, I don’t think we should, you know, leave that red check mark or X in there. It’s -- you know, a setter and getter on clamped -- clamped arrays, you know, I think both of them could be supported.

NRO: Yeah, I think it’s okay to serve this, but just to clarify that just already has arrays, and DataView methods are specifically when it comes to Uint8, it’s a single type, these methods are only used for when you have mixed type of data in a single array, and that doesn’t happen much when working with graphic stuff.

MLS: Agree.

RPR: All right, we’ve got one minute left, so, Jordan, it’s probably worth explicitly asking for stage advancement.

JHD: Okay. So I’d like to explicitly ask for Stage 1, firstly. I’ve heard some explicit support, so sounds like no one -- and no one said they want to block that.

DE: Yes, to be explicit, I am not blocking Stage 1.

JHD: Right. So I’ve heard that. And then it sounds like, just to consider this, like, the summary, so it sounds like I have Stage 1, and in order to get Stage 2, I was asked to provide explicit motivation for why somebody would be -- not why I need this in my utility code, but why somebody would be calling my utility code with a `Uint8ClampedArray` with this, and then the other thing, I need to provide is better motivation for the getter.

JHD: Does that sound like I’ve heard all the input?

DE: Yeah, that -- that sounds good. I think on summary, you can also include the ideas about use cases and the main points of the discussion there. It would be good.

JHD: Okay.

RPR: Okay, yeah, so, please review that summary in the notes, Jordan.

JHD: Okay.

RPR: Congratulations, you have Stage 1.

JHD: Thank you.

RPR: I’m all for the applause. Please do remind us if we forget. All right. Next up is Kevin Gibbons, who wants us to stop coercing things.

### Summary and conclusion

Detailed discussion were had and Stage 1 was achieved.

## Stop Coercing Things

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1m5R5J98W6adegghgkAlbSuFgAYJDT52yyFVdAqLjm00/edit)

KG: So I should say before we get started, this proposal -- well, it’s not a proposal per se. It wouldn’t affect -- it wouldn’t add anything into the language. I am just suggesting that we change the design principles that we have going forward. I’m going to enumerate a number of distinct things that I think we should change, all on the same theme. For the purposes of organizing the discussion, I’m hoping to first get buy in on the general project, and then discuss the specific proposals in turn. So I know that some of them will be more controversial than others, and I don’t want to spend all of our time on the controversial ones before we get time to talk through the earlier ones. So this might require some jumping around in the queue. Okay, that said, please contemplate this piece of code. I claim it is confusing and bad. If you don’t know, this gives you a, this gives you the first element of the array. This would of course also give you the first element of the array if you passed the string “end” or an object literal or any other number of ridiculous things. This is because the general philosophy in the language is to try to coerce arguments to the appropriate type and the type of the argument for at is integral number. So the coercion works by taking the argument, coercing it to a number, of course that gives you NaN, and then coercing that to an integral number. And if you coerce `NaN` to an integral number, you get zero. This is just a fancy way of doing `.at(0)`. I think this is bad. We don’t have to keep doing this. It is the precedent. It is how we have always done things. Precedent is extremely compelling, in general. But for sufficiently bad ideas, we can break with precedent, and I -- my position is that this is a sufficiently bad idea. In particular, passing something of the wrong type is almost always going to be a bug, like, almost always. When it’s not, it’s going to be confusing for readers. And bugs should be loud, not quiet. You should not get the wrong answer. You should get an error. Always, always you want this.

KG: So I will have a number of concrete suggestions for what I mean by stop coercing things. We don’t have to take any of them in particular. I know that certainly some of them will be more controversial than over others, and I want to make sure that I’m not proposing these be hard and fast rules just that they be the starting point for the design for anything new. And in particular, if you are making a new proposal and you want to deviate from something that we agree on in this presentation, that should be something that you come to the committee and you say here is why I think it makes sense to be different in that case. In the past, the default has been to do coercion. So someone would have need to come to the committee and say this is why I don’t think it makes sense to coerce, which has been the case, but I want the default to be not coercing, so when you want to do coercing, we should have to make that case explicitly to the committee. I have a bunch of concrete proposals. I think some of these are controversial, others are less. I’m going to run through these fairly quickly and then open it up for discussion first of the general principle and then of each of these specific topics. Hopefully in approximate order. So I’m just going to dive into these sort of particular cases that I would like us to change.

KG: The first is stop treating NaN as zero. This is, I think, ridiculous, and in particular, we have already started doing this. So in iterator helpers, in the take and drop methods, in temporals duration method, and in the Stage 2 iterator.range proposal, we have made the decision to treat NaN and anything that coerces to NaN as a rangeError rather than coercing to zero, as it does for other integer places in the specification. This slide has some examples of code in the language today that does do this coercion. Of course I am not proposing to change any of these. I just think that all of these are ridiculous and I would like new code to not have the behavior of the code on scene, despite the Inconsistency.

KG: Second, don’t coerce undefined to anything else. If there’s a required argument, and the type of that argument is not, like, something that you could reasonably pass undefined to, you should get a type error. You shouldn’t coerce undefined to a string. This is, like, 50% consistent with the web platform. Web IDL APIs throw if you pass them too few arguments. But if you explicitly pass an `undefined`, they will generally coerce that `undefined` to a string or whatever. So this isn’t 100% consistent with the web platform, we would be going stronger than the web platform, or at least stronger than existing APIs on the web platform. My hope would be to change web IDL so in the future they would be consistent with this full principle, so as much undefined is treated as missing and both of those are errors. Here are some examples of code today that, again, not proposing the change the behaviour of this code, but I think these are all silly. If you call something with too few arguments or you pass the property of an object and that property happens to be missing, maybe you made a typo, you shouldn’t, like, get an answer. If you call parseInt and you pass it undefined, it shouldn’t try to parse the string undefined as a number. This is silly.

KG: And a more general version of that is don’t coerce between primitive types in general. If the user wants to pass a number and they have a string, they can coerce the number to a string themselves. We shouldn’t do it for them. Of course, with the exception that when you have an optional parameter that what has a sensible default value, then `undefined` is a reasonable thing to pass there, to mean I want the default value for the parameter, but that’s different than coercing. Some examples today, if you call `parseInt()` and call a `null`, a literal null, it will attempt to pass that as a number in whatever base you specify.

KG: The `Math.max()` number is a little more subtle. It’s something that you might think is reasonable, but if you think about it a little more, getting a value out of math.max that is not the same as one of the values you put in is weird. Like, max is generally considered to be give me the -- one of these which is largest, but it doesn’t. It coerces them to numbers and then gives you the largest number after coercion, which is just never going to be the thing you want, or at least never the thing I want.

KG: Similarly, there’s APIs that take integral numbers and right now we round, or to be more precise, we truncate. So that’s not true universally, but it’s true almost universally. There are, to my knowledge, two places in the language right now that don’t do this, which is the array constructor and the magic length property on array instances. In both of those instance, if you pass a non-integral number, you will get a range error. But everywhere else, for example, all of these things, it will truncate. So `Float64Array(1.5)`, the `Float64Array()` constructor differs from the array constructor and that the float 64 array constructor will truncate. It will not give you, you know, a 12 byte array or whatever. And I think a range error would be more appropriate in these cases. The temporal duration constructor in Stage 3, also has this behavior of throwing on integral numbers, although in their case, it’s kind of necessary because 1.5 seconds is a totally reasonable unit and it should not give you a one second duration.

KG: Okay, and then the last two are perhaps the most controversial of all. We could just not coerce objects. We could just not invoke the toString or valueOf methods or the Symbol.toPrimitive methods. Just stop doing it. Like, if the user has, I don’t know, a URL object they want to pass to a string taking method, they can coerce it to a string. It’s not hard. It’s probably going to be clearer for readers. Just do the explicit coercion if you want the coercion. And then here's some examples I think are particularly silly. If you know, try to join an array by an object, you will join with the famed [object Object]. If you try to pad a string with a function, it will start padding the string with characters from the stringification of that function, which, like, this just -- it’s just very silly.

KG: And if we can’t do objects, at least we can do arrays. I think we can agree that while there are some objects that have reasonable toString behaviors, arrays are not like objects in general. They are, like, a very particular kind of object whose toString and valueOf are not generally supposed to be overridden and are not generally sensible things to use when passing to a string taking function.

KG: The `Math.max([])`/`Math.max([12])` example are my favorite. The first will give you zero, which you might think is reasonable, although the actual thing you would want is negative infinity. Similarly, you can pass an array containing a single element to `Math.max()` and it will give you that element. Of course, it breaks as soon as you pass an array containing two elements. But it’s kind of subtle what’s going on there. Similarly, like, if you try to construct an array buffer and you pass a single element array, it will create an array buffer, because it will pass that array to a number, which goes via casting toString and the stringification of that array is the string "12" and the numeric version of that is the number 12, and the array buffer expects the number, so now it’s making a length 12 array buffer. I think while there’s at least some case for coercing objects, there’s no case for coercing arrays.

KG: There’s my not even a little bit modest proposal. So I imagine, yes, we do have a bunch of stuff on the queue. So like I said, I’d like to start with more general topics about coercion in general before we get to any of these concrete things. So let’s get to it. I guess Jesse is first.

JMN: I was just wondering whether we have any data about these coercions in the wild. I mean, we sitting here in this room are more sensitive to these things, and I think they strike us as odd, but I wonder if these really show up out there.

KG: I have no data. I also don’t know what the value of that data would be. Like, what would be -- what would we be trying to learn from that?

JMN: Right, I also don’t know what the value of that would be directly. Just trying to make some kind of data driven decision here.

KG: The thing is that I can’t imagine an answer to that question that would actually inform a decision that I would make here. If it’s happening a lot, that suggests that a lot of people have errors, so we should forbid it. If it’s not happening a lot, that suggests that, like, it’s not a behavior that is worth relying on, so we should forbid it. There’s no answer to that question which would affect what I want to do here.

RPR: Shu?

SYG: I don’t have metrics. I think there’s anecdotes about some coercions being security issues. The object to primitives thing run user code, which is extremely surprising, and I don’t think anyone actively, like, legitimately uses that, but I have no data for that. But I’m pretty sure there are exploits that, you know, it’s a fruitful avenue of exploration usually to see if the engine forget to revalidate stuff after some point because, you know, they forgot to check -- the itch. Forgot that this can run arbitrary code because of value in a `toString`, and that’s a problem.

RPR: Chris?

CDA: Yeah, you have a lot of examples here of some pretty obviously silly coercion results, but the one that I think goes a little too far is on coercion of primitives. It seems heavy-handed if some primitives that satisfy loose equality we would throw. So, for example, in your `.at` example with `[‘a’, ‘b’, ‘c’].at(‘start’)`, but it sounds like if I’m passing a string, which is an integer, you would want that to throw as well, and I think that that’s a little bit too much for me.

KG: Can you say more about why. I just can’t imagine why you’d want that.

CDA: Usually I see this in serialization layer, so, for example, we’re getting back some JSON where somebody is sending a string instead of a number. Would be annoyed if I had to coerce that myself.

KG: But, like, if I were reviewing this code, and I was like, oh, but the thing that this API return, this string, and you’re passing it to an API which takes a number, I’m going to be confused by the code that you run, so like as a person reading the code, I want you to do that coercion explicitly.

CDA: Yeah, I mean, well, in -- I mean, in the example here - ['a','b','c'].at('2') - I’ve literally hard coded a string, but that would presumably be an object property. Maybe we don’t have control of some aspects of it. I don’t completely disagree with you, but I think it’s okay in this example to accept, you know, something that cleanly can be parsed as an integer I think should be okay.

KG:: How do you feel about true and false coercing to 1 and 0?

CDA: Oh, I think that’s always a fun one. We get in a lot of trouble with the truthiness coercion. So, I don’t want to paint with too wide of a brush here, because, again, I think a lot of these cases are -- I agree with stop coercing in many of these cases. But something a little more straightforward I think should be allowed.

KG: All right. Well, I see we have more things on the general topic, so let’s come back to the concrete primitives after getting through some more general stuff.

RPR: Nicolo?

NRO: Yes, Ken already asked this question, why would you want this to work, so let’s just skip it.

RPR: And Daniel?

DRR: Yeah. I mean, there was a point about like sometimes you want the primitive coercion to work, and I don’t think string to numbers typically the one that I want, but typically what you’ll have is something like oh, this takes a certain unit, but really it’s like round tripped back as a string, right? And so internally it becomes a string or something like that, but you might want to be able to just pass in a simple primitive and then just say, yeah, it turns into a string. That said, for most API, I would prefer not to do that sort of coercion.

RPR: Shane?

KG: Actually, can we come back to this particular one late, because it sounds like it’s talking specifically about 5 or 5A and not the general topic of coercion.

RPR: You mean topic 5?

KG: No, I mean Shane’s item is, yeah, number 5 rather than coercion in general.

RPR: Is that okay, Shane? Okay. Michael?

MLS: So if I was to design JavaScript from scratch, I would agree with every one of these rules that you have. Unfortunately, we have history and developers do a bunch of different things. I’m wondering if at some point some APIs don’t have autocoercion, if that would confuse developers, because they have a full expectation of, yes, you can use a string that coerces to a number to do stuff. And now, some of the examples you give, I totally agree, but others I could see that people would use it even if we in the room don’t think they would.

KG: Yeah, so I think this the strongest reason not to do this. My position is that, yes, some people would definitely be confused. Some fraction of developers have internalized that coercion is just going to happen for everything and will be surprised if they can no longer rely on it. I think that’s actually going to be outweighed by all of the develop dollars don’t know coercion is happening or don’t understand its rules, and so upon encountering code written by a developer who is relying on coercion are going to be confused. So I think that there is already confusion inherent in the current system. It’s just that the thing that the language does is confusing and people relying on it is confusing, and so if we can move to a world in which people don’t rely on it, then there will be no confusion. The developers who previously were relying on it will stop doing so. They will be confused, perhaps, and have to learn that they need to stop doing so, but then they do sdo stop doing it, and then no one ever has to know that there’s this inconsistency, because if you just never do it, you don’t run into the inconsistency.

MLS: I think you would agree that we can’t do this to existing primitives, or existing APIs?

KG: Yes, absolutely.

MLS: We have to grandfather a whole class of coercions that have been supported for eons and then we have new that don’t have it, and I think that that’s -- that will continue to be a confusing aspect of the language.

KG: I agree that that would continue to be confusing to the extent that people were learning that some things did coercion and then relying on it. My hope is that people just wouldn’t, that people would learn, oh, this takes a thing of a particular type, and the only way they would run into it is if they had an error such that there is something that ought to have given them an error, according to one of these rules, and they didn’t get an error, and then they will be surprised by it. But that’s already the case for developers who haven’t learned that everything does coercion, they are often surprised when they pass, you know, an object that has a missing property. Like, they typo a property and an object and then they don’t get an error. They are already surprised. So I think the surprise is inherent and the inconsistency that we would be introducing doesn’t make it particularly worse. Maybe it makes it a little worse, but makes it better in other ways that I consider to outweigh it.

MLS: Okay, and I think that’s a judgment thing that the committee would have to decide.

KG: Absolutely.

RPR: Shu?

SYG: I agree that this is -- that is a concern, speaking as a supporter of general coercion, our sphere of influence is just 262, so not only would we grandfathering in our own historical APIs, what are your thoughts on, you know, web API stuff and web IDL and Node APIs? Are we going to try to affect a larger change or are you content with if we can get this as a design principle for new 262 things that it will be enough impact that it’s worth the inconsistency, not just at a lock point in time for us, but also with possible future things for other standards bodies?

KG: Yeah, so I am -- I would be content if we just did it in the language, but certainly my hope would be we do this elsewhere. I know, for example, that DD said he would like web IDL to treat undefined and missing arguments identically. Right now there’s this inconsistency between the web and JavaScript in that JavaScript treats missing arguments as being undefined and coerces undefined and web IDL throws on missing arguments and coerce is undefined. So if we could -- my hope would be to move web IDL to also agree with these principles in general. But, you know, maybe we wouldn’t precisely agree since we already don’t precisely agree, I wouldn’t regard that as fatal.

SYG: Yeah, agreed. Happy to hear that it’s in scope for you. Someone’s got to start it somewhere, so TC39 is as good as any. I’d like to see that the scope be ambitious if we do this. So thanks for taking this.

KG: For sure.

RPR: Dan?

DE: MLS made a very good point that we have this tradeoff about both existing versus future developer mental models, developer mental model’s already been developing, and different APIs having different conventions. I think this will be the major thing for us to weigh, and that’s just going to be a process for us to make this judgment as we learn more about this space, so I’m glad that KG is bringing this as a specific topic rather than sort of making ad hoc Decisions on particular proposals, as he noted we’ve been doing so far.

RPR: Jordan?

JHD: And I think I’ve seen node make a lot of changes away from coercion basically following the spirit of Kevin’s presentation here. Yeah. I have actually been -- I’ve run into it in a hard way where I was depending on a tool that was relying on the coercion and node 20 broke it, and so I have to, you know, get that tool to upgrade to no longer pass a coercible object into the node API. And I think that although that’s annoying for me personally in this case, that’s spiritually the right move to make, because as Kevin indicates, I agree that coercion is almost always masking a bug.

RPR: Shane?

SFC: Just noting that, like, this is the type of thing that I certainly would hope that TypeScript can help find. Like, you get compile errors when you’re building your code. Any time there’s errors that happen in run time, it’s not really great. It’s not a great developer experience. It doesn’t, you know -- it requires having a code path or a test case, it actually evaluates that path in order to actually see the run time errors. So, you know, like, although we could, like, try to make some changes in this area, it’s not clear that, like, it’s going to really be the best way to solve it and actually teach and prevent these issues from happening.

KG: I guess I have precisely the opposite intuition about the effects of TypeScript here. To the extent that people are using TypeScript to catch errors at compile time, that’s great, and what that indicates is that the language ought to, like, not try to do something else in those cases that are, like, being explicitly excluded from the domain of valid programs by user TypeScript, the whole point is that this is supposed to be invalid if you are using TypeScript, and so I feel like for a TypeScript user, the thing that you would want would be for this to be invalid at run time as well as at compile time. Of course if you’re not using TypeScript, it’s not going to trip you up. I feel like in both these cases you want the run time error, not like there other cases.

NRO: Like, this is the opposite. TypeScript, like, thanks to TypeScript now the communities, like, ready for this change, because TypeScript -- like, static typing or just in general helped to change that. You should not coerce things, and that coercion should be explicit. Whether it’s like an actual coercion or just as number, pretend it’s number, you’re still explicit form of coercion happenings, and, like, nobody I believe ever complained that TypeScript doesn’t allow you to pass a string to function that expects a number even if that function internally could coerce.

DRR: So we have people complaining all the time about how, oh, TypeScript should allow me to pass in anything here because the spec just says that it gets coerced into a string anyway. And this is an example of where TypeScript tries to follow the spirit of the API or at least our interpretation of the spirit of the API, rather than what actually happens at run time, and so in cases where, you know, we believe, yeah, this probably shouldn’t have taken anything other than a string or a number or whatever, we’d refer to it that way just so that things don’t get, you know, litigated on our terms, on our types, so it makes it a little bit clearer what -- not just our intent is, but what the API intent is as well. What is the intent of the committee, and the platform. So that’s my two cents on that.

RPR: Hax says TypeScript at least can’t solve case 4, which is the one to stop rounding. end of message.

KG: Yeah, that’s an excellent point.

RPR: Shane?

SFC: Just to reply again to what Kevin said, like, if TypeScript helps at least in some cases, clearly not everywhere based from the comments that were just made, prevents these degenerate cases, what behavior we have in these degenerate cases, the important thing is it’s just a well defined behavior, and we can sort of, you know, argue over is it better to do coercion or is it better to throw errors? Maybe it is better to throw errors. I’m not saying it’s not. But, like, as long as those edge case behaviors are well defined, the best use of our time is to not spend a lot of time arguing over them.

KG: So my position is that not everyone uses TypeScript, and TypeScript is also explicitly not trying to be sound. So these definitely are things that do happen in real life, in real JavaScript programs, even TS programs. And that it is worth trying to provide a good experience for users, not just trying to provide some behavior.

DE: I agree with everything Kevin just said and further, isn’t the goal of this committee to discuss and focus on all the random edge cases and just argue about them for a long time?

RPR: Philip?

PFC: Okay. Yeah, I’d recommend that whatever conclusion we get out of this, either to stop coercing things or not coercing thing, we continue following the precedent of older APIs that we make an explicit recommendation about that for new proposal authors, otherwise we’re going to continue to get ad hoc behavior, and I think nobody will be happy with that. For example, when Temporal was in Stage 2, I think, like, all of the champions implicitly assumed that we ought to follow the precedent of older APIs, so we used `toInteger()` everywhere, and then it came up, you know, during Stage 3 with, you know, feedback from people trying out the proposal in the wild that, like, hey, here is a case where you passed a non-integral number in and it silently does the wrong thing, and this is really weird. I’m sure we look back over the temporal presentations that we brought to committee, you can see that we’ve spent a lot of champion time and a lot of committee time talking about these weird, cases and ultimately deciding that we wanted to prohibit them. So I think in order to save that time for other people working on other proposals, we need to have a very clear recommendation about whatever comes out of this discussion.

RPR: Michael?

MF: So my topic mainly, I think, concerns number 3 on your list. I think that there’s -- you know, in code that I see that’s not my code, it very commonly does, like, intentionally rely on some of those implicit coercions between primitives. Like, I would be surprised not to see a case like the at where you were passing a numeric string that you showed. That happens in code all the time where that value may be coming out of the DOM or something. It’s the value of an input element. And, you know, it would be -- it’s very, very uncommon for me to see that converted to a number explicitly. My question is do the developers who are writing this code know, like, best practices for how to do this? There’s a lot of ways to convert a string to a number currently. There’s parseFloat, parseInt, there is the number constructor and unary plus and others I’m forgetting. Will we have an education problem for different people learning how to do the conversion and their slight differences, and is there risk for what patterns do become popular? Maybe they have their own issues, the popular patterns have their own undesirable degenerate cases. I’m not sure.

KG: So in a world before TypeScript, I might have been worried about that. I think the modal JS developer now uses TypeScript, and as DRR was just saying, TypeScript doesn’t let you pass wrong typed things even if they’re going to get coerced, so I think people, to whatever extent this was a problem, people have had to learn how to do the coercion and I don’t think that has caused any problems. So like we are already living in the world in which people have had to learn how to coerce things so they can get their type checker to pass, and it’s just been totally fine. So I’m just not worried about that.

MF: Do you have data to support this claim about the modal --

KG: Yeah. I can pull up some surveys. But I don’t think it’s a good use time. I mean, you can Google them just as well as I can.

MF: Yeah, I think if that is the case, that would help me be more convinced. I wasn’t of that belief.

KG: I think it’s in excess of 50%, at least of people who answer surveys, which of course is not everyone. But certainly new developers are generally introduced to TypeScript pretty early these days.

MF: Okay, otherwise I want to express my support for the rest of this proposal for sure.

RPR: Shu?

SYG: So I support this proposal, like I said before, but mainly I support it -- or largely I support it for number 5, because I want to go more into depth for the security issues. Like, it is a problem for security, in the browser security sense, of violating assumptions in implementation of built-ins and tripping up assumptions in optimized JIT code that argument coercion calls arbitrary user code via a string of value of, most of the time. We can probably go pretty far even with just saying we should stop coercing things for anything related to TypedArrays and array buffers, because most of it is around detached stuff and now that I’ve added resizable buffers, I’m sure there will be -- security bugs around reusable buffers as well, because you can trick -- because you can not trick, but construct arguments that does very surprising resizes and detaches. And that is -- and that’s motivation itself, to me, to support this proposal. Especially for number 5. Some of the other ones are more judgment calls and could be decided less -- there’s less black and white there. I think it’s very black and white for me that this is a security problem for object coercion and we should do something about it. It would be nice if we stopped coercing. We could do other things like change the coercion order, but that is, though, strictly inferior to this proposal. And I wanted to close the comment with , you know, we should remember that this behavior exists probably because this -- the -- when JS was designed, the -- it was a good -- it was a better principle for user experience for your web browser and your scripting language to keep on trucking in case of errors. Websites were smaller, interactions were much more limited and novel. Now we are in the era of large, sophisticated web apps, and JS has clearly not -- like, we know that JS has not been up to the task to scale for those kind of -- for development of that kind of software and TypeScript has filled that niche because there was, you know, real, legitimate demand for scaling to that kind of software engineering, and we should own up to that instead of keep the keep on trucking motto, which I think no longer serves us.

KG: I completely agree.

RPR: Nicolo

NRO: We should try to clear some built-in as much as possible, for new methods -- for methods we introduced recently, unless it’s possible with compatibles on a case-by-case basis if we can change it, for example, if apps or the array changes in the last two years, like, people already relying on weird coercion in those cases.

KG: Yeah, I agree, that’s probably true. Although for the change by copy, I’m less interested just because they are direct copies of existing APIs, and I think when you are just adding a new thing in the place of something is that already existed, there’s a stronger argument for keeping with precedent. I don’t really want engines to risk shipping breaking changes. So I think for the Stage 3 things, definitely. For things that already shipped, you’re probably right that we could get away with it, but I’m not sure it’s worth the cost of doing investigation. But I’ll look at the things that are like brand new. Maybe the detached -- sorry, the resizable array buffers is a good candidate for that.

PFC: The queue item I just put on is a handy [reference link to what web IDL does](https://webidl.spec.whatwg.org/#abstract-opdef-converttoint) for their coercion algorithms, which we actually used as inspiration when making these changes in Temporal.

PFC: Number 5, coercing objects to primitives, that actually brings a lot of extra tests in test262 as I found out. Because it involves one or more calls into user code. So in order to test this observable behavior, for every proposal that does it, you have to test that it happens. You have to test if the function is called, you have to test if the function is called before or after some other user observable behavior. And all this for behavior that is, as KG put it, is almost certainly a bug and nobody should ever be relying on. So that seems like kind of a waste of money and time.

KG: Yeah. Definitely I have written lots of similar tests myself.

SFC: Yeah, I have a few items here. What PFC just said is actually somewhat compelling to me, because if the way to spend less time on this is to not test it, maybe that’s a good thing. I will say that the slides that were presented here, like, focus on degenerate cases. I think it’s also good to acknowledge that not all cases for coercion are good and it’s good to acknowledge that there can be in some cases good examples of coercion, and, like, we should look at them, like, sort of both, not just focus on the coercion is always bad. If we want to move on to my next topic --

KG: No. I’d like to comment on that. I agree with you that there are cases where the program that you are trying to write wants to rely on coercion. I am much less convinced that implicit coercion is actually desirable, even in cases where you want coercion, I think for the benefit of your future readers, you should do -- make the coercion explicit. And it’s not like it’s hard to make the coercion explicit. While I agree that there are cases where coercion is the thing that you want, I’m not at all convinced that implicit coercion is ever actually the thing you want. Okay, ever is too strong, but like 99.99%.

RPR: NRO?

NRO: Yeah, like, if there are some APIs, like, in which it makes sense to coerce, like, sure we can consider them on a case-by-case basis. I think this presentation is here to set -- like, to set -- like, to define a way, like, a default way to move forward. Some proposal by default don’t coerce, and then, sure, we can always make exceptions if it makes sense in very specific cases.

RPR: So there’s 15 minutes remaining. Back to Shane.

KG: Yeah, once we get to 10 minutes remaining and we’re -- I’ll ask to go through these explicitly really quickly. But, yeah, we’ve got time.

SFC: So, yeah, there are definitely other programming languages, not just JavaScript that do coercion. C++ is a really good example that comes to mind. I’m not saying it’s always the right things to did, but you know a lot of C++ developers who love writing (inaudible) because it makes the resulting code less verbose and ends up happening is there’s a lot of implicit cob conversions happening.

KG: I agree that's a thing people write.

SFC: But it’s definitely a style that a lot of people use and like to work with here.

KG: I take precisely the opposite conclusion from C++.

SYG: That is so opposite of what -- like, I cannot even process that statement. Every single C++ code base I have worked with have explicit rules, like, built into the commit queue, you can not commit code that has a single argument construct that is not marked explicit. The fact that C++ made this as the default is, like, I have seen it being treated universally as considered the wrong default.

SFC: I’m not trying to make an argument that it’s right to do it. I’m making an argument that there are developers out there who use JavaScript and other programming languages like C++ and this is how they learn to program and what they expect to write. We’re not -- yeah. I can also go on to my next topic.

KG: Granted, people do this. I agree this is a thing that happens. My position is they shouldn’t and we should stop letting them.

SFC: I agree they shouldn’t. I don’t know if I agree so far that we should stop letting them. And I think that’s maybe the heart of the issue here. But can go on to my next topic?

KG: Yeah, go ahead.

SFC: Yeah, so just an example of, like, where coercion has been somewhat helpful for us is in the number from my prototype format function, like, you know, has calls numeric on everything for ages, and this means if you pass in a string that has a number inside of it, like, we coerce that string to a number, which meant that we were sort of converting it down into, you know, floating point format. And we were able to make a very small change with a very small API surface that, like, now we accept the string and, you know, consume all the digits of the string in a very clean way that is basically backwards and forwards compatible, which is quite nice, and I were able to do that only because we were coercing, if we hadn’t been coercing, it’s much harder for developers to write code that works backwards and forwards on the same function. Another case in Intl from my proposal where we relied on similar behavior is in the used grouping setting, and you can go back and look at the slides on that. I believe we discussed that quite a bit, you and I, on exactly what the behavior should be there. So I’m just giving like at least some evidence of, like, coercion is not always bad.

KG: So, again, I take exactly the opposite conclusion from these examples. The -- you got away with changing the behavior of number format prototype toString -- sorry, number format prototype format to handle strings explicitly, but that meant that it was technically a breaking change. Like, you started treating strings that were previously legal as, like, having different behavior, and I would have preferred, if the method had previously only accepted numbers, and then we would have later had room to pass strings and have them change behavior from an error to being something new. Now, in that particular case it worked out and it was okay to change the behavior. But I think I don’t want to -- yeah, just in general, I think that the coercing makes those types of changes harder, not easier.

NRO: This is not just KG’s opinion, it often happens for me when we say, let’s make it turn now so in the future we can more easily extend its behavior, because, like, we in general consider a good thing to stop throwing if we have a user, and that has always been considered much harder, not impossible, in case there was some already existing maybe weird, but not visible behavior.

RPR: All right. Yeah, we’re coming up at the 10 minutes. Let’s go to (inaudible).

BSH: So I just wanted -- I feel like there’s some concern that SFC has that I’m not just quite getting. All that we’re suggesting here is that in future, APIs will not coerce unless there’s some strong reason to do so instead of defaulting. What is the bad thing that you’re afraid would happen if we made that change, SFC?

SFC: I think that’s a very loaded question. At no point did I say that I think bad things would happen if we made such a change.

BSH: Sorry, it wasn’t intended to be loaded. I feel like there’s some concern you have that I don’t understand.

SFC: I’m saying that -- well, if we get to my very last queue item, which was my first queue item which I was asked to delay to later, I think probably the most useful one is coercion to string, but that’s not the queue we’re on right now. I definitely think there are some cases where coercion is the right behavior. I’m not saying they’re always the case, and it’s probably perfectly reasonable to take a default behavior to not coerce in some of those cases. Also, it’s sort of hard to take the position which is, you know -- I think it’s important to express the opposite of the position of most of the people on the committee here, because I think it is important for us to take -- to get to the bottom of this. And I think that, yeah, we should continue going through the queue.

### asking for consensus

KG: Okay. I actually want to not continue going through queue. Shane, I know that means that we won’t get to your item - in fact I will briefly get to it. But since we’re short on time, I want to make sure we have a chance to go through the less controversial ones of these. So I just want to go through each of these in turn and ask for explicit consensus on them and in some of the cases that I won’t ask, because we’ve heard objections and there’s not going to be time to go through all of the discussion of that. But some of them we haven’t, so I want to hopefully get agreement on controversial ones. So in particular, I would like to ask for committee consensus on the statement that is on the screen here. It’s not a -- not as a universal rule, just as the default, that any in if you APIs that take integral numbers that take NaN and anything could treat NaN as a range error. We’ve had general support, and unless anyone objects to these, I will treat that on consensus is.

RPR: We’ve got explicit support from PFC, CDA, LCA, so, yeah, you have explicit support. And I’m not hearing any objections.

KG: Okay, thanks very much. Next, don’t coerce undefined to other things. RPR: Hang on. Sorry, Dan has a question.

DE: No, no, sorry, it’s unclear to me what the scope is. Are we making these hard decisions about all new APIs?

KG: No, very explicitly, these are just the defaults. If you are coming back with a proposal in the future, if you want to deviate from these rules, you should tell the committee why. If you’re designing something and there’s no particular reason to do it differently, you should do it this way.

DE: Thanks.

KG: Okay, next one. Same thing, but with coercing missing arguments and undefined to anything else, so if this is a JS function which takes a string, don’t treat undefined as the string "undefined", etc. I’d like to ask for explicit consensus on this. I see we have a question from Shu. Go ahead.

SYG: I have a question about this. So this is the direction -- so if you don’t pass anything where it defaults to undefined, we don’t coerce that, or if you explicitly pass undefined, we coerce to that. You’re not proposing anything in this case about the -- oh, okay, maybe I just misunderstood. This is to cover both explicit and error mismatches.

KG: Right now the language treats those the same and I want to continue treating them the same. The web platform doesn’t treat them the same, but JS does. So, yes, to cover both cases.

RPR: And NRO has a question.

NRO: Shu’s question answered, would this need to throw if there are more arguments than expected?

KG: Yeah. I am not proposing anything around that at this time. Only about missing required arguments.

SYG: And you’re also not proposing that if we’re -- if we’re -- if the proposal has a method with optional arguments to use, like, the not present language over the undefined language, just that by default, if you don’t do anything, it throws?

KG: Correct. So for things where there’s optional arguments, undefined and missing will be treated identically and will get the default. It’s only in the case of required arguments. Just don’t coerce undefined is the rule.

RPR: Shane?

SFC: If you pass a null where there’s an explicit argument required?

KG: Not talking about null on this slide at all, only undefined.

SFC: I see.

RPR: All right, so there remains two voices of support. Any objection to this? No objections.

KG: Okay. And then the more general one I’m not going to ask for consensus for, because we heard from Bradford that -- and other people, I think it was Bradford, anyway, we heard that there’s more use cases for this. I still think it’s warranted, but we’re not going to have time to come to consensus on other types of coercion, so I’m not going to ask for consensus on this. I will probably come back in a future meeting and continue this topic.

KG: Next, stop rounding on integral numbers, and this includes things that coerce to non-integral numbers. If you pass something which coerces to the number 1.5 and that gets truncated to 1, my proposal would be that would be a range error.

RPR: We have support from Dan, Nicolo, Philip, and Michael has made -- I’m sorry --

SFC: (from queue) needs more discussion.

KG: Okay. I’m happy to take that as not consensus, although for future discussion, Shane, could you say what you don’t like about this.

SFC: There Intl APIs that take these and I need more time to review what the impact would be.

KG: Sounds good. I’ll also plan on bringing this one back in the future.

KG: Stop coercing objects, we didn’t have a chance to get to Shane’s item about this, but, yes, granted it is occasionally useful. I still think that this change is warranted, but since we’re not going to have time to talk about it in sufficient detail, I will not ask for consensus for this one at this time. However, I would at least like to stop coercing arrays to primitives - actually, no, okay, I’m not going to ask for consensus at this time, because it would be subsumed by the other one, coercing objects to primitives, so at a future meeting we'll talk about coercing objects to primitives, and if we come to consensus we would like to continue to coerce objects to primitives in general, I will still ask about maybe making arrays an exception to that rule. Since we haven’t had time to discuss coercing objects, I’m not going to ask for consensus on arrays at this time.

### next steps and summary

KG: I do want to comment on the next steps. I will review existing Stage 3 proposals and come back with normative changes where appropriate to have them follow these rules. I’ll also glance at anything that’s Stage 4 that I think might be worth making these changes for. And suggest making changes to those as well if there’s appetite. I will also follow up with web IDL for the things we have just got consensus for and let them know of the ongoing discussions for other topics and propose clangs to web IDL, although it’s going to be like a massive pain just in terms of modifying all of the existing specifications.

RPR: One minute for the summary.

KG: Okay, great. To summarize, we have discussed the topic of reducing coercion in general and while acknowledging that this has potential for confusion for developers who have learned the expectation that things whether coercion, we as a whole think that doing less coercion is probably worth it. Despite the break with precedent. Concretely, we got consensus for no longer coercing NaN and things that coerce to NaN for integer taking APIs and got con sen fuss for not coercing up defined to any other thing, and this includes missing arguments, applies only to undefined, not to null or any other primitive, doesn’t apply to additional arguments or anything just when there’s an undefined or missing argument for a required argument that will no longer be coerced. We did not get consensus, although not explicit lack on consensus on coercing primitive types to other primitive types. We’ll continue that discussion later. We did get consensus for -- no, those the are the only things we got consensus for.

RPR: Sorry, Shane has a slight disagreement with --

SFC: So you said that we agree that we should not coerce despite developers sometimes expecting to be coerced. I don’t think we agreed on, like, that policy as a committee. We did agree that there’s definitely cases where it’s really bad.

KG: Okay, we agreed that the level of coercion that we are doing right now should be reduced. Can we say that?

SFC: Yes.

KG: Okay, good. So we didn’t get consensus on the other items discussed. In particular, we did not get consensus for refraining for primitive types or stopping truncation of numbers or stopping coercion of objects to primitives in general. But I will plan to come back to discuss those more later. So let’s all look forward to that, I guess. And again, these are not to be taken as hard and fast rules, just as the defaults to follow in the absence of compelling reasons to do otherwise.

RPR: Thank you, Kevin. And so, Kevin and Shane, please do review the summary of this. Thank you.

### Summary

Committee agrees that the level of coercion that we are doing right now should be reduced, despite concerns about developer confusion caused by new inconsistency, without universal agreement about which concrete cases. There were cases made for the utility of string<->number coercion and of coercing objects to strings, and SFC wanted more time to consider implications of no longer accepting non-integral numbers in integer-taking APIs. Consensus was reached that in new proposals we should default (in the absence of a particular reason to do otherwise) to not coercing NaN to 0 and to not coercing undefined (or missing arguments) to any other type (in the case of required arguments).

## Reducing wasted effort due to proposal churn (continuation)

Presenter: Michael Ficarra (MF)

- [slides](https://docs.google.com/presentation/d/1V3Fg6HVC-VA41YCu0Yhqynvqhsu5kVj7tiWuVfp8S90/)

RPR: Michael, do you want to -- okay, you’re already sharing? Do you want to do any intro or should we just go straight to Philip on the queue?

MF: Let’s go to the queue.

RPR: Philip?

PFC: My experience with having written 262 tests, not just for temporal, but also in the capacity of having worked on the Google funded efforts to write tests for Stage 3 proposals, it is -- it is really important to have a clear signal of stability to write the test effectively, because if you are writing the test at the same time that champions are going back and redesigning things, it’s quite a lot of extra work. And I guess actually, this was a response to Eemeli saying why do we need an extra stage for this. So my experience is that, yes, if we are going to require this then we should have an extra stage.

SFC: I’m just observing that educator feedback has also been normally one of the things that we accept as a sense of Stage 3, like, modification, and -- but it’s not listed here, it’s only listed implementer feedback. My understanding is we’ve long understood educator feedback to also be a Stage 3 type.

DE: We should be collecting educator feedback before Stage 3–collecting this feedback earlier is why I set up the educator outreach group in the first place. Educator-type feedback, feedback about the design, abstractly, we should do all the work that we can to collect that at this design stage, then we can feed that into what gets developed in tests and implementations. Frequently, educators don’t hear about things until thing are already Stage 3, and I think our efforts should be focused on outreach. I understand this type of outreach before Stage 3 can make some committee members nervous because it maybe makes things too hyped, but on the other hand, this would save everyone the work of changing something later. This is something I feel very strongly about.

SYG: What is this? Okay, I wrote this when the feedback was mostly positive. I’m not sure that’s my current read. I don’t remember. It might be more mixed. But I do have some ideas for concrete implementation details, namely, I’ve been a proponent of lowering the barrier of test writing for test262 to ease more correctors into it and to entice the implementers to write 262 tests instead of engine-specific test, and I think we also heard in chat from Ron Buckton on the that it’s not like a barrier to entry is curb currently that it’s not clear on windows or it’s hard on Windows to run the harness and test262. So concrete implementation here, I think a big part of this would be to do even possibly even more work to lower barrier of entry for writing test262. But at least not requiring anything more formal event staging, I think, for this new stage. I think since Stage 4 already requires the staging test to be graduated out of staging into the main trunk for this new stage to be as -- to introduce as little friction as possible, I think we should limit it to requiring no more formal event staging. I thought I had some other thoughts, but I don’t really remember. So I’ll leave it at that.

EAO: So regarding the mostly positive state of affairs, I think I agree with that. Particularly what SYG said earlier ended up convincing me a this sounds like a very good idea. I’d be happy for us to move on. I do have thoughts on bikeshedding about the name for this one, though.

DE: So I completely agree with SYG’s comment that, if we are requiring tests to get to Stage 3, the requirements on those early tests should be looser than for the final Stage 4 tests. In particular, there are lots of tests that are developed in the context implementing a feature in a JS engine, sometimes written in that engine’s test framework. I’m wondering what the appetite is from people working in tests in JavaScript implementations–there’s a lot of people in that group–in sharing those tests through the test262 staging directory. We could use web-platform-tests-style two way synchronization between each engine and the test262 staging directory, so all the JavaScript engines can share tests with each other. This is something that’s done in web platform tests, and we have the opportunity with a lot of work to potentially do it with JavaScript as well.

NRO: Yeah, I cannot -- like, I think we would be using this staging directly much less with this proposal. Because, like, staging directories mostly used, like, when agents have to write all of their new tests for proposals, and in these cases, they would still write their own tests, but, like, a very big part of tests for the future would be the variable before the implementation starts.

DE: I’m proposing radically greater use of the staging directly, and I’m interested in more feedback, but that’s not the current topic today. [Note from DE: sharing tests earlier might indeed result in fewer different versions being written which are testing the same thing, so I agree with NRO as well.]

SYG: I agree with DE. I’m proposing expanded use of staging for this new stage.

SFC: So I think one thing that happens a lot with these proposals that reach later stages is that, like implementers give feedback and then, like, as a result of the implementer feedback, the proses churn a lot and then the implementers are scared, I don’t want to test this proposal again. It’s changing too much. Right? And this how we get a lot of proposals that are in Stage 3 that are never implemented, because they get to Stage 3 and get to first round of feedback and then churn forever and never get implemented, right? I was wondering if maybe an approach we should consider take here when a prose poll reaches Stage 3 and gets implementer feedback it goes back to Stage 2 or 2 and three-quarters can and you resolve the feedback and atomically say here is my thing and implementers take a second look at it and maybe that happens three or four times. I think for small protestor poses it happens once or twice, for temporal three or four times and that could be a very year check points, and otherwise we get into the problem where there’s a proposal that shouldn’t be a Stage 3 proposal because now there’s bigger design questions.

SYG: What are line of proposals get stuck in Stage 3? I don’t think that’s an accurate description.

SFC: I’m looking at Intl Segmenter, Intl DurationFormat, and Temporal which have all had the problem of feedback from implementers that there are issues in Stage 3. That is a continuing concern which scares away implementers.

SYG: I would exclude temporal. The other two I can’t speak. But temporal is just, to me, a proposal that just does not work in the staging model. It is too big and too complex to ever fit into our staging model.

DE: I’m not sure I agree with SFC’s assessment of what makes Stage 3 proposals churn–those particular cases had some late design-level feedback from implementers. To keep things from getting stuck in Stage 3, I think more check points could be good, as PKA has on the agenda this meeting–asking, “hey, how is this proposal doing?”. I feel like this is pretty orthogonal from the staging changes or testing changes. What are you proposing that we do?

SFC: I’m proposing concretely, if some definition of a critical mass of feedback comes in from implementers or elsewhere, when a proposal reaches Stage 3, that we actually formally move the thing back to Stage 2 or Stage 2 3/4 or whatever we call it.

DE: Yeah, I think we’ve been establishing this practice more frequently of moving proposals back to earlier stages. And if we add this new stage, presumably that will be another target stage to be considering. Our practice is conservative–we require consensus whenever changing a proposal stage, whether up or down. Let’s keep reviewing proposals in committee, and reconsidering stages when appropriate.

MLS: So actually I’ll go ahead and speak. I agree with SYG. I don’t think that this back and forth is what’s stopping proposals from being implemented. I do -- I personally believe that the stage that a proposal is at is the signal to implementers. We have moved some proposals back to Stage 2 because there were some significant changes in syntax or naming or things like that. And we take that to heart with what we do. Often times we’ll just turn off the code if it’s already in and fix it. But I don’t think that -- I don’t agree, Shane, that there’s this back and forth is what’s slowing us down. And I’ll speak to Temporal. Temporal is a huge proposal. And there’s a lot of work to finish it to make that, you know, part of implementation. We’re working on it, we’re working on it slowly.

PFC: I have to agree with SYG about temporal not fitting the staging model.

SFC: So just thinking about DurationFormat as a sort of recent example of this, and to be clear, it’s not the only example of this. Is, like, you know, it might be useful to sort of formalize or as part of this discussion, since we’re talking about stage processes, like, what criteria we should use to say that a proposal should be downgraded from Stage 3 back to Stage 2, because I think, you know, we’ve been talking a lot about the whole ready to ship signal. And like I think what happens sometimes is that, you know, there’s a problem in Stage 3, for example, duration format, and I love that JSC is shipping duration format, but there’s still a couple normative changes we’re merging. In an ideal world, all developers would wait until they’re merged and we can go back to Stage 3 and we can ship it again. I feel like Stage 3 is a very good signal that this proposal is shippable. I guess another thing I’m trying to say is maybe in ready to ship is, like, something that we want to codify as stage 3 ¾ and Stage 3 is that thing, ready to thing, then, you know, that means if there’s a proposal that has normative changes of any substantial size, whatever that might be, whatever criteria that might be, then, like, we should be very explicit, okay, that’s red flagged by default it goes to Stage 2 and you have to reapply for Stage 3.

MLS: This is a worthy discussion. I’m not sure this is what MF had in mind when he prepared this. We’ve been using Stage 3 to Stage 2 demotion recently. I think we should maybe have some formal discussions about why we do that and what gets you back to Stage 3.

DE: Yeah, I think we’ve been saying Stage 3 is time to implement native engines and everybody makes their own policies about when they want to ship things. Anyway, I think we do have an emerging criterion here, which is that if the committee has consensus that we disagree with core parts of the design, then it’s not ready to implement in native engines and Stage 3 isn’t appropriate. I say ‘native engines’ because I really want to encourage polyfill and transpiler and engine262 implementations before Stage 3.

RPR: WH asks: how do you write tests for things like syntax without an implementation? We can not hear you, Waldemar, if you are speaking. And we’ve got two minutes left. Do you want -- I think really we should probably be summarizing.

MF: I don’t think the -- I think my previous summary applies. I’d rather use the time to hear about --

DE: Yeah. I mean, I think you write a test without an implementation the way you write an implementations without a test, which is in a way that is partly correct and also has some bugs. So the spiral comment from Michael applies–you go back and forth. This has been done repeatedly, like, ES6 tests before there were engines fully complete. We’ve been trying to do this with proposals like Temporal: developing tests and polyfills before Stage 3. Even if we don’t adopt a new stage, it’d still be good to do this kind of work before Stage 3 as a best practice–we’d get benefit. But I do think adopting a new stage would be the more solid way of saying you know, we’ve experimented with this good practice and we want to, you know, codify it.

RPR: Right. Shu, do you want to have the last word about spiraling?

SYG: What’s the next comment?

RPR: We are at time.

SYG: I would like to let Michael Ficarra decide on the queue which one he wants to do.

MF: Go ahead, Shu.

SYG: My spiel about spiraling is with -- since we talk about Temporal, I think something that’s become year to me over the years is that TC39’s working model in stark contrast with web incubation and how other features are developed in other languages and platforms is that we design up front that is explicitly how we work and that’s explicitly how we have worked, the design up front part is there’s friction there because that is in fact not how software in general is developed. Software in general is developed in a spiral. There is iteration, we find bugs, you ask users for feature, you come back and you iterate. But TC39 works by always designing up front and throwing it over the wall. And we are trying to make that -- we’re not trying to abandon that model because it a pluses for democratization and being on the same page, for more stability, et cetera, et cetera, but there’s down sides, and this is one of the down sides. And I think this proposal is a good intermediate, incremental improvement to still keep the design up front model. But at the same time, it’s pointed out that, you know, things like temporal -- I think the design up front model just doesn’t scale to the size of things like Temporal, that requires the usual software design model of iterating and spiraling and back and forth. And a spinoff conversation we could have is if we want to tackle those huge things, what should we do. Like, is something what uly proposed with ethics enough. Should we take industry best practices that we know how to use software and go to incubation. That’s a conversation I’d like to have in the future.

RPR: All right. We’re past time, so Michael, do you want to quickly summarize.

MF: No, same summary as before, I think.

DE: Michael Saboff had one pretty critical point. Can we get to that? Can we go over time.

RPR: Go ahead, MLS.

MLS: I have grave concerns that this will actually not resolve in improvements intended. I understand the desire of the reason we’re doing this, but I think if you add a new stage, you add new delay and my spiral discussion is more about that off times the implementation drives a test, and test drives implementations back and forth, I think that’s kind of the comment that WH wanted to make, is sometimes we start with tests and without implementation and vice versa. So I think our current staging actually works, we just need to be more diligent about what we do during Stage 3, writing tests for implementations first or writing together.

RPR: All right. Okay. So is there anything more you wanted to say, Michael?

### Summary

RE the "spiraling", the thing we need to keep in mind is that it's fine if we have *an* implementation during stage 2.75 (DE suggested polyfills/transpilers, but it can also be an engine), it's just the idea is to avoid recommending for general implementation, which is where that aggregate work is extremely high.

### Conclusion

No change to the stage process is made.

## Closing

RPR: Thank you very much. All right, then, so we are done with our agenda. I think we should have a round of applause for our hosts here at Bergen. Mikhail and your assistants. And, yeah, thank you to the observers and students that have participated. I hope this has been fun and interesting. And, good. So the --

RPR: Julie, thank you so much for your work. And everybody who helped us with notes. And the note takers. Obviously ACE has done a lot, as has JKP, CHU, I’m sure there’s more people in the room as well. So, yeah, thank you so much for that. I think this has been an excellent meeting.

SHN: I want to thank you all for taking the time to do the summaries. Much appreciated.

RPR: Yes. So obviously we’ll do the usual posting of the notes. Please do review the summaries and the transcripts. And then also hope to see any of you that can make it at the next meeting. That is in the end of September in Tokyo, being held at the Bloomberg offices, so all the details are on the reflector. And I think we should probably also have a conversation about whether to mandate masks at that event or not. So welcome to feedback on that. All Right.

RPR: We are done.
