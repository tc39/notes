# 108th TC39 Meeting

Day Two—29 May 2025

**Attendees:**

| Name                | Abbreviation | Organization   |
|---------------------|--------------|----------------|
| Ujjwal Sharma       | USA          | Igalia         |
| Waldemar Horwat     | WH           | Invited Expert |
| Tooru Fujisawa      | TFA          | Mozilla        |
| Tab Atkins-Bittner  | TAB          | Google         |
| Daniel Minor        | DLM          | Mozilla        |
| Daniel Rosenwasser  | DRR          | Microsoft      |
| Jesse Alama         | JMN          | Igalia         |
| Duncan MacGregor    | DMM          | ServiceNow Inc |
| Richard Gibson      | RGN          | Agoric         |
| Ross Kirsling       | RKG          | Sony           |
| Chengzhong Wu       | CWU          | Bloomberg      |
| Zbigniew Tenerowicz | ZBT          | MetaMask       |
| Nicolò Ribaudo      | NRO          | Igalia         |
| Chip Morningstar    | CM           | MetaMask       |
| Dmitry Makhnev      | DJM          | JetBrains      |
| Samina Husain       | SHN          | Ecma           |
| Christian Ulbrich   | CHU          | Zalari         |
| Yulia Startsev      | YSV          | Mozilla        |
| Steve Hicks         | SHS          | Google         |
| Eemeli Aro          | EAO          | Mozilla        |
| Yusuke Suzuki       | YSZ          | Apple          |
| Samine Husain       | SHN          | ECMA           |
| Michael Ficarra     | MF           | ??             |
| Rob Palmer          | RPR          | Bloomberg      |
| Jonathan Kuperman   | JKP          | Bloomberg      |
| Andreu Botella      | ABO          | Igalia         |
| Oliver Medhurst     | OMT          | IE (Porffor)   |
| Philip Chimento     | PFC          | Igalia         |
| Linus Groh          | LGH          | Bloomberg      |
| Istvan Sebestyen    | IS           | Ecma           |
| Romulo Cintra       | RCA          | Igalia         |
| Jacob Smith         | JSH          | OpenJS         |
| Tom Kopp            | TKP          | Zalari         |

## IDL for ECMAScript with WebIDL

Presenter: Arai (TFA)

- [proposal](https://github.com/tc39/proposal-idl)
- [document](https://docs.google.com/document/d/1kj7VQ-LOfg-rq59vPEaJFmL6EJsKBwJ52AZzIGfdc_0/edit?tab=t.0)
- [slides](https://docs.google.com/presentation/d/10MXBbI994Go9XNNVvWHGeGHlck0TfZLjKNisE5xF5aE)

TFA: Sorry. I am Arai from Mozilla. I am going to talk about WebIDL and ECMAScript language specification. This proposal, WebIDL for ECMAScript. First, I would like the represent the ECMAScript built-ins with WebIDL. And auto generating such as implementation and extracting annotation and also extracting types and signatures for toolings. We’re using the existing infrastructure as other WebAPIs.

TFA: So currently, most of the WebAPIs are defined as WebIDL here. In browser implementation with ID to winding code and only the actual implementation part is handwritten. Then on the other hand, the ECMAScript built-in current or handwritten. Here, if we have WebIDL defines for ECMAScript built-ins we can outgenerate the binding and this allows reducing the hard written code and allows optimization to our APIs at once.

TFA: So here, this is the reason why we choose WebIDL using the same language as other WebAPIs allows reusing the existing infrastructure, sharing maintenance cost and more cross-collaboration. And also this allows automation and optimization and specifies. Also, once the JavaScript engine becomes capable of handling WebIDLs, this allows third party embedders to use WebIDL such as using WebAPI in the implementation with and also, representing API, so that—opt into optimization and also web binding code generation.

TFA: Here, out of the ECMAScript built-ins, WebAPI and embedder API can use the same code for binding and also, they can share more tooling such as types and notation and other implementation such as strings and so on. In our prototype the WebIDL definition for the ECMA built-ins are all generated from the specification HTML file with the script.

TFA: Introducing WebIDL for ECMAScript has come up several time in the past. One in the proposal like IDL for ECMAScript. This one. This is for the use of WebIDL in EcmaScript. This also it compared between IDLs. We view our work as a continuation of this proposal.

TFA: Now, also, they have JS IDL. This is another proposal for defining a JavaScript-specific IDL which we've not chosen to take, it's introduced unnecessary with much benefit. And also there’s discussion to modify WebIDL syntax more similar to JavaScript such as using class instead of interface. We—adopted this into the proposal in order to achieve the modification as minimally as possible.

TFA: Proposed method. So during categories, WebIDL as a representation of the current spec, so all the specification changes by this proposal shall be purely editorial. No normative changes. Also, the ECMAScript abstract operation will be used by other specifications. Such as HTML and also the WebIDL itself uses abstract operations such as ToNumber. They should be modified. Then the built-in functions can be slightly modified by moving the origin in the spec text.

TFA: WebIDL is optimized for WebAPI. Some can directly represent ECMAScript built-ins. The other case is we use the WebIDL as-is and if there are slight differences we can introduce annotation to modify the behavior of the syntax to match the ECMAScript built-ins. If they are large differences we introduce new syntax to represent it or we introduce new annotation to replace the behavior of existing syntax.

TFA: Then also, in most case we propose two methods for the modification. One is with new syntax that directly represents the new concept. This improves the readability, but more requires modification to the existing tooling such as—processes. Then the other is new extended attributes. This allows using existing tooling with more modification. We can discuss further about which one to use or maybe looking to other options or maybe slightly modify the details.

TFA: Here is a list of some WebIDL directly applicable to ECMAScript. For example, the WebIDL interface will represent a pair of constructor function and prototype object. We can use this for, like, object Boolean classes.

TFA: Let’s look into the ECMAScript built-in that represents the current WebIDL. And required modification for them. The main difference here is the plain DataProperty. WebIDL cannot represent a plain DataProperty, except for constant. The constant define both to the constructor and prototype function. This cannot be applied where property is defined only to the prototype object. Here we want to propose a new syntax “property” that represent that ECMAScript writable, immutable and configurable property.

TFA: Also, with the IDL attribute, we DataProperty apply to the attribute. So the mark the property DataProperty, instead of an accessor. So similarly, the other major difference is the writeability immutability and configureability. Most Web IDL properties are enumerable. ECMAScript built-ins properties are non-enumerable. This is a new extended attribute. Here the—we apply the non-enumerable syntax. Or using the data attribute. So we can do similarly for the writeability and configureability if necessary.

TFA: The next one the WebIDL syntax doesn’t have a token for symbols. It defines symbol if necessary, for example, like toStringTag and also the iterator and something. ECMAScript spec needs more control over what is defined there. It can be represented with a new @@syntax that was been used for several places. Or we can introduce a new extended attribute name to have the property name with different one.

TFA: Another option here is the properties style. This is most conflict thing with the extended attribute syntax because the bracket block this is using in both. Actually, given that the extended attribute can appear after or before the property name, this has conflict with existing syntax, but this is still confusing. So we haven’t chosen this.

TFA: The next one, there are some ECMAScript built-in prototypes object which doesn’t have corresponding constructor functions such as Iterator prototypes. They can be represented with the existing namespace syntax object, but adding new syntax is helpful for representing the inheritance. So WebIDL interface syntax to represent –...—internally the inheritance with a colon, corresponds to the PrototypeSlot. For the new prototype syntax we use the same syntax here to represent the prototype of object.

TFA: But with the extended attribute, we have the dedicated—sorry. Extended attribute that directly represent the prototype.

TFA: The way the prototype objects have predefined list of internal slots, the ECMAScript built-in prototype object have—can be a class instance. And also, it can be an exotic object. So we can define an extended attribute that have the prototype of the constructor and the list of prototype object characteristic list that is defined in the current spec to the object creation steps. The Number.prototypes is the number—Ordinary object with slot that can be converted to the steps like MakeBasicObject and the interface

TFA: Now, some ECMAScript built-in instances have their own properties. Define them also in the WebIDL allows more automation such as adding annotation and extracting types and also extracting strings. So we like to introduce that instance syntax. This is applied to the interface members to mark the member as a part of the instance. This works in the same way as the static that is for constructor properties.

TFA: Then let’s look into function length. The function length is basically represented as, like, optional parameters and basic don’t contribute to the lengths and other parameters count as lengths. Some ECMAScript built-in has special function length property which is not represented with the list. For example, like this one, array.prototype.unshift, it has one single variadic parameter items but its function length is one, we can add new extended attribute to set all the function lengths.

TFA: Then, looking into operation. The WebIDL operation and attributes have additional steps before performing the operation steps. For example, brand check is done here, and the type conversion is done after that. Some ECMAScript built-in are more generic and they don’t need the brandbrand check. And some other ECMAScript built-in perform a brand check on their own. We can introduce the attribute, NoBrandCheck here. This skips the steps. There are some more modification that is listed in the document and we have a slide in the Appendix so we can look into it later, if necessary.

TFA: Let’s look into the example. So with the extended attribute way. The function object can be represented like this. The function is represented through interface.

TFA: It has the extended attribute to opt out of unnecessary operation. And also, the extended attribute to prototype of the creation. The constructor is defined here and the prototype properties are defined here. Non-enumerable extended attributes. So those properties here are non-inspectable. And similar symbol name. Has the name extended attribute ID. And DataProperty is defined like this with an also instance property line this.

TFA: The same can be represented in new syntax like this. So this is more readable I think, it uses property syntax and instance syntax to represent things. And also the symbol used @@syntax.

TFA: Until now applying types—any type has been used for all operation attributes. Here any, any, and everything any.

TFA: This is because ECMAscript doesn’t have a concept of a fixed type for parameters or properties. Then for operation, the parameters are cast to the specific type by abstract operation. So such as toIndex here. This can be considered as a type that is also to mention in the idea. So we can use abstract operation names as a type here or make it—maybe we can add a dedicated syntax notation for abstract operation base type. Like this.

TFA: So this allows moving the parameter version out of the spec text. For BigInt.asIntN, the step is and 2 are for parameter coercion. This can be moved to parameter types and remaining steps performs operation on already coerced variables. The BigInt can use the WebIDL itself within the type.

TFA: Then look into the execution order. Some built-in perform. Here, for example, the String.prototype.slice, this perform the parameter coercion for the stop parameter at Step 4. So there are some other operations on this value under Step 1 to 3. This can be considered a kind of brand check but this is not always true. So just moving the Step 4 parameter coercion to the parameter type modifies execution order, but we don’t want to modify the execution order. We want the proposal to be purely editorial

TFA: Here, we can introduce a notation of lazy coercion. The type is defined in parameter, but the coercion is not performed immediately. With the lazy type, the coercion steps can be moved to the parameter type, and the first use of the parameter performs coercion lazily. We can say, for example, the delazyify to the happens here

TFA: The last one, the ECMAScript built-in has enum types, for example, the string.prototype.normalize enum parameter for the Unicode as a string. Then it throws RangeError if unknown passed. But with the WebIDLs, it throws TypeError for this case.

TFA: So in order to observe the difference, we can introduce extended attributes to modify the behavior of enum to throw RangeError instead. Let’s look into the integration. There are three integration plans. This can be treated as a stand alone or as \[inaudible\] integration. One is to keep auto generated WebIDL from the spec separated from the spec itself and provide it as Appendix.

TFA: The second one is provide an alternative view with WebIDL to the specs so we have two specs without WebIDL and spec with IDL.

TFA: The last one is to fully integrate WebIDL to the spec so the WebIDL is part of the spec, maybe we can start writing the WebIDL itself.

TFA: Then here is an integration example. So the array object. It can have the WebIDL definition of the array interface at the top of the section. In the same way, as other WebAPI. The interface is defined, the constructor and the spec property and the prototype is defined like this.

TFA: Some steps from the WebIDL can be added to the corresponding section. For example, it has CustomPrototype that means the corresponding steps to create the prototype object. It can be added to the corresponding section. Like this.

TFA: So maybe it can replace the existing step, existing section with the steps. Similarly, the array iterator object—can have its own IDL definition with the prototype syntax at its section. Thank you for listening. Any questions?

USA: All right. Starting with the queue, first we have a clarifying question by Steve Hicks

SHS: Hi. I was a little bit confused. Are you proposing that we would have both options available for the new syntax and the extended attribute or the idea to pick one up front and use that only?

TFA: Yeah. Originally, with like to choose either one. But so we can discuss which one is better—sorry. We'd like to discuss which one is better, or maybe we need to look for other option that is more simple. So I am going to propose having two, choose one of them or something similar thing. Does it make sense?

SHS: I think so.

TFA: Thank you.

TAB: Yeah. I really like this idea in general. I really appreciate the benefits that we get from WebIDL specs and WHATNOT. Getting out a boiler plate and making things consistent. My only concern is, I know that a lot of the existing APIs need these custom annotations and a bunch of extended attributes to make them work well. I want to make sure that the plan is hopefully that for future APIs, as we design them, we move to a model that uses the WebIDL with less and ideally none extended attributes as much as possible. If we have it use a bunch of extended attributes to set the behavior of JS things, in some consistent way, that’s different from what the WebIDL does, I don’t see as much benefit using WebIDL. Instead, switching to a related custom IDL Language. If the plan is indeed to reduce and hopefully eliminate all or extended attributes usage in future APIs, that sounds great to me.

TFA: Thank you for this.

TFA: I have considered reducing the custom things. So I’ve been thinking that we continue keeping the current behavior, current—characteristics for the upcoming API. But if we—sorry. If we would like to the upcoming new API similar to the existing way, I think we can focus on that.

TFA: I have slide for… So as you said, there are so many things added to the WebIDL. So this is the current WebIDL. And we have adding several modifications. So then—so things used by ECMAScript would be (...) with the current WebIDLs, so prototype, web current and also the new things. So the other things are not going to be used. So if we want to keep this path, we can have validator that reject those things, not going—should be used in ECMAScript. If we wanted to reuse, we can have—slightly different validator that operate differently, all the interface and the new interfaces.

TAB: Yeah. This is the one of the reasons why I lean to the new syntax approaches rather than the extended attribute approaches. I think that reads a lot better. Yeah.

TFA: Thank you.

USA: We have a reply to this by YSV.

YSV: Yeah. I want to just clarify with TAB. When you say you don’t want to see extended attributes being used, I understand that as you don’t want to see us overusing extend the attributes to, but you are okay with the new syntax. The second question that follows on to that, this comment you made that you want to reduce the custom syntax—the custom behavior going forward in JavaScript specification. Do you mean that we want to reduce the use of extended attributes specifically, or also the new syntax?

TAB: Really just the extended attribute. If we have a new syntax we use consistently and how we define JS things I am okay with that.

YSV: Okay. So in this case, this could be a vote for—I think the—I also agree that the easier readability is the better way to go. This is yet another argument in favor of that. And I think that we’re not necessarily restricting how we design the language by defining our own custom syntax. We are just adding what we need to WebIDL to make the language design decisions we need to make. Does that follow with what you are thinking?

TAB: It does. Yes.

NRO: I already got an answer, but I wanted to highlight it. We should not change how we define new built-ins, just to make them look better. Like, to keep the behavior, we need some ugly WebIDL syntax, we should keep using those. Make is nice good. But not by changing future semantics.

MF: I want to say something similar to NRO. Not just that we should, like, you know, have consistency within the language regardless of IDL, but we often do weird things intentionally for, like, web compat reasons or whatever. We recently added iterator constructor as this weird setter that rewrites itself. I see in your document that it has its own accommodation, but, like, we should not be encouraged to avoid having to add new extended attributes to WebIDL. This should not affect our language design principles in any way.

WH: I would like to understand the “possible integration plans” slide. Can you display it? I understand items 1 and 2. What would item 3 mean?

TFA: Sorry. So is the question about the—clarification of the 3 items?

WH: I understand items 1 and 2. What does “fully integrate WebIDL definition into the spec” mean in practice?

TFA: Yeah. So to two spec, one is the current one. And one is the current one plus WebIDL embedded into each section. So the spec with the IDL keeps remaining as one main. And the third one mean that the spec with WebIDL becomes the main one, so we won’t have the spec with that WebIDL. So the—sorry. How should I say? We will—we will have one single spec with the WebIDL definition embedded into the spec. In the same way as other WebAPI. Does it make sense?

WH: Okay. That brings up some interesting questions. My preference is to have a single set of sources which generate either the ECMAScript standard more or less how ECMAScript specs are formatted today, or it could automatically generate WebIDL with extensions like what we are talking about here. If we are going to put WebIDL directly into the ECMAScript standard, we’d acquire a dependency on WebIDL. And I am worried about possible circular dependencies if WebIDL depends on ECMAScript. I would like to ground such recursion.

YSV: May I provide a little bit of additional clarification here? So you can also make a look at these 3 possibly integration plans as a—in how happy we are with the WebIDL integration. The least cost version is number 1. We just have an Appendix and it’s not—not doing a double generation of the spec in two different views. But you just have it as an Appendix and for implementation choose to use WebIDL that get that generated WebIDL. There’s one drawback to this approach that is very low—I am looking for a word like interference, but basically, there’s very low engagement from proposal authors for this path. And the limitation here is the potential of automatically generating WebIDL that doesn’t fully conform to the spec. But it’s lowest bar, that number 1 is the lowest bar. Number 2, this is a greater investment from TC39, where we were generating the alternate view, sort of, as part of the generation of the ECmarkup spec into HTML. You also have the WebIDLl view to validate, does it look correct to you as a proposal author.

YSV: I think this might be the best ground to get to for the time being. And this would allow people to see both versions automatically.

YSV: The third one is if we have really high confidence that WebIDL is the right way to go. Now, I actually don’t think we should go for fully integrated WebIDL from the spec in the beginning. Rather, we should start with the earlier paths and validate whether or not this is working and as expected. Maybe, five ten years down the line, then talk about a fully integrated way into the spec. They can be taken as stand alone paths or incremental paths.

WH: Okay. Sounds like we are roughly on the same page. My preference is also for item 2 here: have some set of sources which can generate either the existing spec format or WebIDL.

YSV: Yeah. I think this would be the best world. It would require some agreement on TC39 to actually, you know, validate the WebIDL and if we get the agreement, this is the best possible starting point to validate that this works. If anyone is objecting to that, I would love to hear what concerns you have.

DMM: Okay. Yeah, I think the new syntax is much more readable. And I think that’s good. I think it’s inevitable if we start writing WebIDL or any sort of spec or type specification and we start putting that in the spec or closely associating it, it will affect some of our language decisions. But I don’t think that’s a bad thing. I think regularity within the language, within the way we specify things is useful to programmers. Every corner, every odd corner case is a thing that people have to remember and think about. And we should be aware of that. And I think forcing ourselves to be more regular, in general, and to really think about those exceptional cases is extremely good.

MF: We spend a lot of time looking at proposals when we are moving them through the stage process, especially the editor group, looking for consistency with other similar methods. Yes, we make mistakes and I could see how maybe doing this same process through a different view of, like, WebIDL and some attributes could turn those up. I don’t think this would raise awareness of these corner cases any more. I think the value of this effort was in this initial awareness of what corner cases exist today. But not necessarily going forward, trying to achieve consistency. We can already successfully do that without WebIDL.

WH: I don’t necessarily agree with the point that WebIDL is the operation order that we should strive for. There is no single WebIDL order—it depends on whether coercions are explicit or implicit via WebIDL types, and you will get different orderings and different behaviors based on the stylistic choices of how something is expressed in WebIDL. Some examples of this have been covered in the presentation already.

TAB: Yeah. I want to restate my point from earlier, YSV understood it well but to respond to some of the subsequent responses. If we use WebIDL, but if for ever in the future, any ECMAscript API defined using it has to be extensively annotated with extended attributes, that’s a failure of the project. I don’t think that makes our lives easier as spec authors. I already have to copy-paste extensively to know how to write anything in ecmarkup, versus writing a new DOM API using WebIDL is relatively easy to learn to do and I can just do it off the top of my head.

TAB: If that is the end point that we end up trying to reach, I think that is a failure and we should be pursuing a JS IDL. But if we are able to get to a decent world where there’s minimal annotations, possibly because we have new syntax that just lives alongside the more standard DOM WebIDL syntaxes, then we are okay. I don’t want to live in a world where I still have to sprinkle a ton of custom annotations to write spec because we are no better than the current unreadable by normal humans spec text that we have today.

SFC: Yeah. Hi. I just wanted to comment about one aspect of WebIDL that had come up a bit when working on the Temporal implementation is that, the option read ordering can sometimes end up being different because my understanding is that in WebIDL, for example, you would read like if you are having, like, an object with multiple fields in it, you would read all the fields first and then process them later. Whereas, it’s more common in 262 and 402 as well in Temporal specification, read the option and it’s in range? and this would involve, like, a reordering of those operations. And I wanted to highlight that as like a potential difference between the two models that this group would need to figure out and resolve.

YSV: Yeah. I want to speak a little bit about why WebIDL and why not JS IDL. So we have considered—the reason why we began the work on WebIDL because we were looking to achieve a couple of goals. One was we wanted to be able to reuse the existing infrastructure is that we had WebIDL for generating bindings and the optimization. Another reason we choose WebIDL, we have certain embedders external to the Firefox host that want to make use of our engine and they want to make use of components from our HTML integration directly. And this is quite difficult. Right now they write everything by hand. However, one of the conversations we were having with them was, if the JS engine supported WebIDL, then we would be able to just take those pieces directly from the DOM, from the Gecko implementation and reuse in the embeddings this has implications for WinterTC. This defines things and how JavaScript interacts with it much better. There’s benefit with working with those and not JS IDL and that requires us to redefine and actually approach many of the problems that we currently have with WebIDL, even though we have full control of a JS IDL. For example, the issue brought up by MF that there needs to be ways to address special exceptions. Such as AsyncIterator case we need to do that even if we had full control of the JS IDL. My understanding is that WebIDL is open to having additional syntax introduced. And I think that partnering would not be a negative thing here. And I don’t think it would be block us from doing much work we need to do. That’s one part.

YSV: The other part is, we don’t have to use WebIDL for absolutely everything. If something is really exceptional, then the choice to not use WebIDL is also a valid choice. And that might be a way to reduce the amount of complex syntax that we need to introduce to WebIDL. So I would take this as, you know, we don’t have to approach this completely holistically, we can say that the places where it makes sense to apply an IDL that is consistent, that’s where we apply. It makes life easier for many projects, potentially tooling. When we make something exceptional, people will know to pay attention. And likely that comes with a note. That makes the spec even better for implementers because it highlights areas to be cautious about.

ABO: Yeah. I guess LCA was bringing up more or less the same topic and I think we might have opposing views as co-chairs of WinterTC. So a number of runtimes are implementing the WebAPIs in JavaScript and basically are doing WebIDL. And like so it would definitely be easier if WebIDL was implemented in the JS engine for the browser to hook up there. Would it be easier in terms—like it depends on what API the engine provides. And whether it’s easier than—like, there are hooks or something for hooking to some of the internals of some engines for performance, in particular, that are not currently being used as much as they could because like in part also because they are hard to work with WebIDL. This could be useful, if—I mean, having this as a use case would depend on engines wanting to provide usable and like a way that can be used by runtimes to easily use the WebIDL parser and hook into that. Yeah.

YSV: Yeah. I will just follow up on that. Absolutely. This is a decision made by implementations and implementations may choose not to make that decision. But it opens up the possibility to make this decision. Right now this is something that is hosted by Mozilla, we are the only implementation that allows that kind of work. But bringing this to the standards body, enables that to be opened up to a broader audience and that’s our goal here.

LCA: Yeah. So I have a pretty similar topic here. I agree with your point Yulia, that moving or having WebIDL in the engines would make integrating WebAPIs into non-browser runtime much easier. But I don’t think that’s why we put it into a spec. What an engine does or does not implement doesn’t have to do with the ECMA262 specification. WebAssembly is implemented in SpiderMonkey and JSC and V8, but it is not in the spec here. So I think if SpiderMonkey wanted to have first class support for WebIDL in SpiderMonkey, that’s great. But I think you can do that without that—having any bearing on like whether this should be in the spec here. I just don’t think that’s a reason for us to do this in the spec here.

YSV: I believe the motivation for this actually doesn’t come from us. This comes from an existing proposal called IDL in JS. We are bringing evidence of why to choose one option over the other. There were two options presented in proposal for IDL an existing TC39 proposal. The first is WebIDL and the second one is a type of JS IDL. And the committee can decide whether or not they want to adopt this. The example I brought of winter TC is one of several examples. This are other reasons why we might want to do IDL and that’s for the committee to discuss.

LCA: I just want to respond with, I agree with that. But I just don’t think that like web—like specifically the thing you said of—okay. I think we are in alignment. I agree with you.

MF: Yeah. It seems like most of the participants in this conversation have been agreeing that we are not going to be getting away from having a lot of exceptional things in here because we are describing things that are very exceptional. So given that, the description of it is going to be complicated. I like the thing that YSV mentioned, take this and apply it to things that are not quite so exceptional. You know, just take the properties/descriptors stuff and like function length and stuff that happens, you know, quite a bit, and things that are one-off cases we don’t need to describe in the WebIDL. Omit it. Implementations maintain that themselves, if they want a full WebIDL description, but we don’t necessarily need to include that as part of our distributable.

TAB: Just to provide a slightly different justification for this, my read on the value of this, for me personally, is that writing ECMarkup is an active blocker for doing new library stuff. It’s dense, difficult to read, requires heavy copy-paste and analysis of the existing spec, and knowing exactly what weird corners of algorithms are weird legacy stuff and are okay to reproduce. WebIDL is an enormous help to the spec ecosystem, to actually write specs or at least to approach specs that can be fixed up by people later. To the extent the working group is to go to more library APIs in the future, things that don’t require a bunch of weird exceptional cases but here is a function. We are providing it for you because it’s useful. That sort of thing is going to be massively easier to design and to get people to help with, if we have WebIDL or something like it to remove most of the boiler plate that you currently have to write when defining a new function.

USA: LCA says + 1. Also, DMM says also + 1. Also really useful when reading the spec, and then we move on to the next topic by Luca.

LCA: Yeah. So I wanted to bring up real quick that WebIDL is obviously something that is maintained at WHATWG and not ECMA. We had problems in the past. In WinterTC, we want a normative reference to WHATWG spec inside of a ECMA specification and this is not yet cleared up. I think TG4 in the source map groups has the same problem inside the source map spec also not figured out. And I think if we want to go down this path further we should have clarification from ECMA. So Samina and Aki, primarily on whether this is even something we can do, whether we can have a reference to WebIDL inside of the ECMAScript specification. And also, that is not the case, if there’s even willingness from WHATWG to move ECMA or WebIDL into ECMAScript and that’s something the committee wants. So I think—yeah. That’s my topic.

TAB: Yeah. There was a lot of similar worry in the W3C years ago about having to reference WHATWG specs. We figured it out. And now, we freely reference WHATWG specs across the entire W3C without worry. It’s shouldn't be difficult for ECMA to do the same.

LCA: It’s possible, but it is currently a problem, and it is currently a problem for us right now and we haven’t figured it out. It has to be part of the discussion, figuring this out.

DRR: So I wonder if the boilerplate of the current spec language is a feature for implementers because it forces—not forces, but it’s a little bit easier to look at something and say, am I actually implementing all of the behaviors one by one by one, each step of a given method needs to be implemented. Not necessarily trying to force this point, but I am curious because while there is necessity in syntactic sugar and all that, in some of the cases, there’s a lot of implicitness from maybe some of the—from a new way of annotating these things and I am curious to hear from implementers if that’s true or like, no. This is really annoying for everybody.

TAB: A bunch of that implicitness stuff is handled by binding generation which is from the WebIDL. It’s a plus to implementers for DOM APIs. And all like your argument coercion and type checks, et cetera, have been more or less automatically for you without having to do custom code.

DRR: Right. Are most implementations generated from IDL

TAB: From DOM APIs, yes, everyone uses binding generation

DRR: Most implementers use that for JS APIs?

TAB: Leave that for the other people to talk about.

CZW: I think I have a reply to—if most implementations are generated from the WebIDL, I am speaking for [node.js](http://node.js). It implements some of the WebAPIs and [node.js](http://node.js) does not generate from WebIDL. They are all manually written. And it’s already hard for us to reference to WebIDL for the details that hidden behind the WebIDL syntax. So I think it’s relevant for us that it’s easier to reference to ECMA262 because most of this steps are explicitly listed out in the spec—in each steps. So there’s no implicit behind the syntax—the interface syntax. So I would say that it’s not all the case. Especially for [node.js](http://node.js). That implements WebAPIs

YSV: I'm assuming we go with integration path 2. You'll have both views available to you side by side. You can use both WebIDL and existing ECMAScript view. I think this project in particular would benefit a project like [node.js](http://node.js). Where at the moment, this is the same problem we are having with our embedders. They have to implement all of the WebIDL by hand and it’s really time intensive and labour intensive. By having the ability to just have that as part of the entire ecosystem, as a boiler plate, it’s going to make their lives easier. It’s one of the reasons why we were doing this. In your case, where you have to write the stuff by hand, potentially you wouldn’t have to do that anymore, if V8 decided to adopt it as well.

USA: And that was it for the queue.

USA: And it’s mostly at time as well. So do you have any more statements? Any conclusions?

TFA: Yeah. Thank you, everyone, for the comments and positions. We are looking to those comments again and looking into the solution for each problem you all—sorry. Into the problem.

USA: Yeah. Thank you.

TFA: Thank you. Thank you for listening.

USA: I would request you do—go to the notes when you can and record a summary of key points that were raised.

YSV: Could I briefly summarize just to make sure we have understanding of the work remaining to do. Could I briefly summarize what the key points are.

YSV: At the moment, there are concerns about the additional overrides that are being introduced in order to make a number of things in JavaScript work. So that I would say is—there’s a concern around the mismatch between JS and WebIDL. That’s one concern. And I would propose that we continue to work on that inside of the IDL for JS repository. The second concern that was brought up was legal. This is something to work with Aki and Samina. If I got that right.

YSV: I feel like I am missing an additional concern. Was there anything else?

YSV: Okay, so we can go on the basis of those two concerns as being the concerns. And our goal is here basically to present WebIDL as a potential solution to the IDL proposal for JS. So the next step, I would say, is let’s see if we can resolve those and WebIDL is a really good fit for WebIDL and JS.

MF: Sorry. I mean, you talk about it not being a good fit and trying to address that. Is that—are you still considering trying to address the whole language by defining an IDL for everything? Or are you considering reducing the scope to reduce the exceptionality and try to make it, like, seem like a better fit for that reduced scope?

YSV: So the—I am raising that as a question that was posed by committee. There’s a feeling there’s a mismatch. We want to address that question and there’s ways to do that. Like we could look at the entire scope. Reduce scope or consider some other options. Maybe there’s a third path here. In terms of addressing that committee concern, we would be investigating the different paths and seeing how that impacts ultimate solution

### Speaker's Summary of Key Points

- New syntax is better than extended attributes
- clarify the difference between ECMAScript vs other Web API
- Readability
- less boilerplate to write when adding new features
- Look into reducing the customization, including
- Summarize all the differences, including the property-access order on the options object for function parameters (pre-req for other things)
- Modify the existing ECMAScript built-ins and/or WebIDL/WebAPI behavior to match the behavior between them (maybe for rarely-used cases (from document's comment, not from meeting itself))
- TODO: file issues for each edge case
- Make upcoming ECMAScript built-ins follow WebIDL behavior (less-prefered)
- Apply WebIDL only to simple cases, excluding one-off things (more-preferred)
- Check for more minimal version fit rather than making exceptions for everything ([issue](https://github.com/tc39/proposal-idl/issues/9))
- Look into the difficulties of the current spec writing, such as ecmarkup, and figure out what/how WebIDL can help here
- Referring documents maintained at WHATWG has legal issue. This is not limited to WebIDL's case
- Check legal requirements ([issue](https://github.com/tc39/proposal-idl/issues/8))
- Preference for integration path 2 (dual view)

## ECMAScript Framework

Presenter: Samina Husain (SHN)

- [slides](https://github.com/tc39/agendas/blob/main/2025/Framework_Ecma_TC39_2025.pdf)

SHN: I wanted to take this time to present about ECMA. In our last plenary there were a number of discussions that were happening on matrix that I tried to follow. And there were a number of questions that were asked in the plenary and this followed a discussion regarding consensus.

SHN: My presentation is not about consensus. My presentation id to talk about the issues that came up in the discussion, regarding consensus. And that was about voting, membership, and invited expert, and it was led from the discussion of consensus. So I have tried to put some slides together. It was not uploaded. It will be uploaded. For just reasons of my own timelines, not to stop you from having any preview. Of course, any questions today that aren’t answered, I will always answer also at the next meeting or as needed.

SHN: Some of the comments I read on the matrix were, understanding who the members are, who pays who doesn’t pay. I am going to talk about that. I am also going to talk about ECMA and the processes. TC39 is an important technical committee in ECMA. We also have 12 others. There are different activities but I want to make sure that you understand the framework in which TC39 fits. What ECMA does. That’s why I talk about the structure and the governance.

SHN: First membership. Many of you will see your organizations on this page. Some of you won’t because some of you in this room may be part of a not-for-profit. The members that are listed here on this slide are ordinary, some small, medium and private companies, all are paying customers. ECMA is an member-driven organization and it is a paid membership.

SHN: There are different levels of membership that have different fees. And out of the list here, about 40 of them, 50% of our members are fee based.

SHN: The not-for-profit are universities, research organizations and small organizations like AboutCode. Open JS. But active members in different committees, with TC56.

SHN: Despite the fact that these members are not-for-profit, they are quite active, all not in TC39, in others TCs.

SHN: Membership, I think this starts to take the conversation towards a discussion of voting. And what voting means in ECMA.

SHN: I have tried to break it down here a little bit. The voting is only done in the general assembly and it is done by the ordinary members. Those 6 members that you saw on the slide previously. They have the highest authority over ECMA. They can participate, as an ordinary member, can participate and vote and be active in all levels of ECMA and ECMA governance. It becomes less when you are an associate member and a little bit less when other members and not-for-profit. It’s not that it’s only limited, but clearly voting on final decisions only at the general assembly and members. Voting in technical committees as you do here in TC39, rarely happens. In TC39 you do temperature checks, do things in consensus, that is very important. That is how all the other committees work. But there are technical committees that do voting. So again, the topic of consensus starts to creep into the conversation. To give you a feeling how the membership is broken down and where voting rights reside.

SHN: Our process. It’s just a picture that shows you, you already very active technical committee. You always work through your very structured meetings which are extremely well working, every year you come out with a new edition and that edition, you are adopting and provide to the disconnect committee on consensus that you agree that’s the next one you want to have. It gets voted on in the GA. And for a specific TC39, every five years, through the suite we have to take to JCT1, giving it a channel to international standard and that is ISO JCT1. Consensus amongst yourselves in the TG, is that you are agreeable and ready to go to the final vote in the GA.

SHN: Again, it is GA that votes to see it goes into the JCT1.

SHN: The structure of ECMA is relatively flat. It’s not complicated. We are not large. There’s a GA that drives and makes the decisions. There’s an executive committee, many of you have been voted into the committee. The technical committees are all under the GA. The work of the technical committee comes into the management, the executive committee can make recommendations and propose to the GA.

SHN: The secretariat is here to support you on what you need. So, for example, running meetings, for example, transcriptionist and other things. What we need to do as a secretariat to be a valid standards organization, in the space that we work in.

SHN: The GA, again, is the highest authority and they only vote and that’s the ordinary members. The executive committee is where you take your discussions, new TCs are formed. Where inputs from the technical chairs, the TC chairs come in, and we can move forward.

SHN: The decisions. Again, a reminder on the voting. Two kinds. There's administration done in the GA only with ordinary members. But there is a technical committee which is the technical voting which is rare. And somebody has to remind me when you last voted in this TC because you work on consensus. Voting means that one vote per ordinary member on the GA side. On the technical committee, one vote per member. So you have members here that have multiple representatives, but you only get one vote.

SHN: So there are about 22 different voting members in this committee. Despite the fact there may be over 50 people participating. That’s important to note when you actually vote. In the sense of an ECMA rules and structure voting. Which I don’t think you do. TC39 does a temperature check.And when in consensus you don’t have a resolution in that way and then it escalates to the ECMA rules. It’s a simple majority. 51%.

RPR: When did we last vote? I don’t know the precise date. But I think maybe three years ago, four years ago, we used to do an explicit vote for approving the spec going toward. In the past, I think we have done it by electing chairs. We found that because it’s very rare, to have a no, we can often avoid doing the vote by first asking, do we have any objections on consensus? And that just purely from a logistic, administrative POV, we don’t need to go as for, because we know we have unanimity.

SHN: This is a rare situation but it can happen. There are other technical committees that use the vote every time when they do their standards they bring to approval for the GA. You as the committee chair, the way you work has been very successful, so that’s good. These are actually excerpts from our rules. In the previous slide, those were—that I showed earlier, these are from the bylaws. 4 or 5 pages each. It’s not long. You’re welcome to look at them, if you want. I have extracted what I thought was important. You can see what the structure is.

SHN: I bring this up specifically because in the dialogue on matrix, from the past plenary there’s questions on who votes, why they vote, who pays, who doesn’t pay. I want to bring clarity to that. Coming back to the rules of, again, the vote. It’s again, one vote per ECMA member. Not one vote for an individual sitting in TC. In the event you ever have a vote, the one-time visitors and we have had observers and it’s always welcome, they do not contribute, they do not vote.

SHN: This leads me to our invited experts. The invited experts came into I think ECMA as a discussion in 2018, 2017. I think it’s a very good thing we have. I think there are other organizations that also have it. I looked at W3C and others. This is important because there’s changes in industry experts involved in the standard for a very long time. But due to whatever reason, are in an organization that may not be a member or thinking about becoming a member or simply don’t work in an organization. But their input and history is valued and important. It is actually—your technical committee chair that invites an invited expert. The secretariat, myself, is the one that does the final approval. But it’s really—it comes from your direction. So that’s 7.26. Which I thought about the invited expert.

SHN: In the scheme of ECMA voting, invited experts do not have the privilege to vote. It does not mean they’re a second-class citizen or they do not have value. But they do not vote in the final sense of ECMA rules. Invited experts can influence, advocate, work with any member to talk about the decision that is being made to bring the value of that decision, and to convince, but the final vote does lie in the hands of the members.

SHN: And your chairs, you have three chairs here. And the chairs do work on the committees and run the committees based on the ECMA rules. So I do know you follow that well. There are a couple of things that we continue to do. You want to make a comment.

RPR: Which is, it’s to minor clarification what you said there. Which is, when the request for an uninvited expert goes to the ECMA secretary general, really that’s coming from the committee? The chairs physically send this email, but it's not the chairs deciding because we have the open process where people can object to that. And like chairs make a final call on that, but really it’s the committee that is pushing towards the request.

SHN: That’s correct. I apologize if I didn’t say that correctly. How you run the committee and meet deadlines. We don’t always meet them. ECMA is a recognized standards body. We work under certain rules and conditions within Swiss laws, within how the world of standards, official standards work and there’s some deadline. Like, the three weeks for the agenda. You try hard to build an agenda, bring in the topics. But topics that come in later than three weeks. It can happen. We do the same in the ExeCom and the GA. I have to be strict. We do absolutely follow the 3 weeks. There are minutes that need to be prepared. These are minutes that the ECMA secretariat has. I have to do them 3 weeks after meeting. That is very important, specifically GA and ExeCom. It has happened to me that it will take maybe 4 weeks because they’re long meetings with the GA and the ExeCom. Nevertheless, I have to adhere to the rules and I do my best and hope to do that with the TCs.

SHN: It’s important when you have topics that bring up different levels of stages and ones that become more relevant that you give your attendees, all the participants, enough time to review them. Bringing in a topic that requires a change in the spec, a new stage that is harder, it’s important to give everybody time to reflect upon them to make the best decisions.

SHN: And I think you mostly do that. But I know that is also hard. It’s just important in order to highlight the three weeks that are looming over us.

SHN: The invited expert. Came in 2013. The invite expert came in 2013. This was a GA document. It was voted on and agreed upon. There’s contributions that invited experts can bring in and sign the royalty free. They work exactly as a member contribution. They are—they have one limitation. They don’t vote. But again, they can do your temperature checks. They’re involved in your consensus. They can advocate. They can really bring in their views which I think continues to have happened. And again, in that rare sense where you may have to fall into the point where you are voting in an ECMA rule, they do not carry a vote.

SHN: I do my best to review the list of invited experts we have not only for TC39 but all the TCs. We are members-driven, fee-oriented organization. It’s not our intention to introduce a non-paying individual that is just not the way ECMA will work. We will need to continue to have members, so we do our best to invite invited experts, get their organizations to join, and if not with an organization, and the committee sees their value, we keep on continuing their invited expert status.

SHN: When we do the reviews, we of course try to align with the chairs and make sure we don’t remove anybody without agreement.

SHN: My last two slides are about consensus. I am not telling you how to do consensus. I am bringing you best practices. I also want to point out that this is a very important aspect of ECMA and how we adhere to WTO, the world trade organization. This is a principle that is a value that we carry in ECMA. It’s important I bring this up. There’s a lot of conversation going on, which I am involved in, with the European commission, with the multistakeholder platform, looking at standards. ECMA in Europe is considered a fora. It’s not one of the official harmonized standards body. Nevertheless, there are conversations that are very active right now on how open source software, how open source tools and participation can also be part of a standards organization.

SHN: ECMA has, I think, one of the best references with TC39, and I have been speaking about this and involved in panels over the last months on this topic. As these rules and regulations in Europe become standards, ECMA could be an opportunity,to be the platform, there may be others OASIS or W3C, but I think ECMA has a strong position in Europe.

SHN: This is food for thought. As you think about the work that I believe you may have agreed to do from the last plenary, and I think JSL is involved to bring some discussion in to talk about consensus and how you have consensus. I mentioned CEN-CENELEC and ETSI, the two bodies that do the harmonized standard inside Europe. If ECMA has ever an opportunity to be in that space, it is also important that we adhear. I have put the definition of how those two bodies, how they practice consensus, which is a general agreement, characterized by the absence of sustained opposition to substantial issues. But that there is an agreement that you will agree to move forward, you may agree on the disagreement, but you agree to move forward.

SHN: This is food for thought. It’s something that needs to be just there as you think about how you do consensus. And again, you do not—you have rare occasions where you have had a lone blocker like this before. This is some food for thought and these are the practices out there. Practices we should think about because we don’t want to lose the relevance the ECMA international has in the European body, within ITU, also within the JTC 1 ISO. We have a category A liaison which is the highest position.

SHN: I wanted to bring you information about ECMA, to address the comments I heard at the last meeting. That generated from conversation towards voting and invited experts, the chatter on matrix. Let me know what questions there may be.

MF: Do you mind if I do my second topic first? Well, I will do it anyway. So thank you for that presentation with the explanation and clarifications for us.

MF: So this committee operates—you were pointing out a number of ways, not just things we need clarification on, but ways we might operate in violation of ECMA policies. Should we as a committee be trying to enact change within ECMA? To align better with the policies? Do we as a committee, are we okay to continue with the status quo until some more forcible action is taken? Like, should we be basically trying to address anything as part of this?

SHN: So my first question back to you before I answer that, what is that that you see I presented in which TC39 does not align to?

MF: I would rather not get into those details.

SHN: No. It’s important. Because actually, I don’t see you disaligning to many things. I mean, as a committee, you are working together. You are coming to consensus. Are you talking about the three weeks?

MF: We can use that as an example. That is my next topic. We have this policy for our agenda that proposals looking to advance are added to the agenda ten days ahead of time. Actually, it permits that proposals looking to advance could be added after ten days, but at that point, the timing becomes a consideration for its ability to advance.

MF: This works well for us. We meet every two months, three weeks ahead is quite a bit in that time span. And you know, we—we need to find a good balance of enough time ahead of the meeting to review, but enough time between meetings to do the work to be prepared to add it to the agenda. So like ten days works well for us. If other TCs are meeting less frequently, maybe three weeks works better for them. Certainly for the GA 3 weeks makes sense. Could we make an allowance for the ten days we use? That seems really important for our committee.

SHN: Thank you. If you are working well and if the committee doesn’t have an issue within the ten days, don’t change it. You are working well. This is how you get the cogs going. If people complain, I didn’t have time to review the stage, I am not going to vote or discuss it, it’s a decision you make in the committee. You don’t have to come to the three weeks. It’s something we have structured. Obviously if you do it three days before, maybe that's a problem. You have got a good working system. I am highlighting. It’s not here to highlight that you are not aligned. I am just saying these are things that I need to do to take your draft agenda and prepare it. Because I have to have an archive that shows all the work that’s being done. It’s important legally. I did the minutes three weeks before. We may do a revision, one of the minutes later, when I get up to date. So if the committee is working well on the ten days, leave at that. I need to make sure I do the three weeks.

MF: So on this particular topic it seems like you're advising us to continue willfully violating. Should we apply that in other ways?

RPR: So I am on the queue. On the same topic. This is really important area because the spirit of what the three weeks is meant to achieve is that no member gets bypassed. Something gets through and they were out of the room and never had the opportunity. And I think this is, in particular, very relevant in meetings such as this, where I am not even sure that all people are on the call right now. If we were to make a decision right now, even though as you say, Michael, we have a—like, what would be referred to as weasel wording in our process. I think it’s the last line, where it says, the committee can override the process by consensus. Which if we define consensus to be who was on the call, and in the room at the time with zero notice, it would be risky. Because we don’t have—you know, key people here. So the spirit of getting everything on the record up front whether that's three weeks or ten days is very important. And yeah. The—sometimes I think this even comes up in risky ways to the chair group, where the room is ready to make a decision, and then in the past, there’s been cases, where, for example, one time Chip stood up, because we were proposing an advancement, but it wasn’t already on the record. And Chip stood up and shouted, we are moving too fast. That was enough to cause caution. The current state of rules and things that we have already—they are working well in 99% of cases. There’s a little bit of room for tweaking things so that we could avoid some of these cases.

SHN: I am not saying break rules. I am not condoning breaking rules. We have boundary conditions and this is not a shell. These are really good recommendations and guidance. I as ECMA, must do certain things because I try to make sure I do it within three weeks. I do revisions when I have it. As a committee, it’s important that you all are happy with it. And if you make a decision today and somebody's not on the call, they will yell at you, and probably it won’t pass. I think balance is important and that flexibility is important. It doesn’t help me or you, saying you must do three weeks. I don’t want you to revolt. Is it good for all of you? Are the decisions you make the right thing for the standards and the product?

YSV: I think we have a mix of working modes we use the staging process for. And part of what we are doing often in these discussions is we’re involved in the, like, active work of design. And to know what that active work of design is going to be three weeks ahead of time is potentially going to be not conducive to making progress. Because then you have to pause your design work for three weeks until you get the approval and then continue the work. This is the thing that people would react to most. These are things I see as normative changes to specifications that are currently in flight, where we need to make a decision as the committee.

YSV: But then we have another kind of decision-making mode which is not this design work mode. Where we need to come to a consensus on something. I think the really classic one we have to be very careful about is the Stage 3 entry criteria. Everybody has to completely sign off on going to Stage 3.

YSV: I am not going to speak to the exact deadlines because I am not happy with the ten day requirement. If you have to review all of the proposals, it’s actually quite hard to get through everything. Sometimes the committee is really overloaded in terms of work on some occasions. But I think there’s multiple ways that we can solve the problem. One might acknowledge the difference of mode in which we work on design work versus consensus mode, where we need there are disparate positions and need to choose one.

YSV: Versus—it left my mind what I was going to say. And still make forward decisions.

SHN: That is very much a committee decision on how you do that. When you have topics coming in that require major decisions, you have to make sure the topics have enough time for your work and review.

DLM: I want to talk about the ten days item. We have an item to talk about the deadline. Ten days sounds like a lot of time. It’s only five working days and I believe the organizations as well, we try to review every item on the agenda as a group. Anything that shows up right around the deadline, I have to do a bunch of work by Monday, because we meet on a Tuesday or Wednesday and that is to provide enough time to reach out to other people, within Mozilla, from point people outside the SpiderMonkey team itself. That’s my point. Ten days work well for some. But I think it should be noted, it costs for other groups that need to go through every item in detail.

SHN: Maybe you need to have consensus on the three-week versus ten days. I am going to leave this to the committee. You have to find that balance.

RPR: So then my topic, so Samina you showed the WTO consensus definition. Given that that is such a global definition, and has presumably been inherited and respected by all sorts of committees around the world, do we have—can we learn from that? Do we know if any materials or positions that might help?

SHN: Good question. I will look into that. I brought this in as food for thought because the objective today was to just bring you the information. And I know that the topic of consensus is being discussed separately. Let me look into that and at the next plenary I will bring information that brings further guidance. I think generally—99% of the time, it works the way you are working. But it’s good to know what it is. I wanted to highlight the relevance where consensus fits in, in the bigger picture, not just with TC39. But ECMA, but the world in which we are trying to work.

RPR: Yeah. I think—and that’s helpful, particularly as figuring out our definition of consensus. There’s an active topic.

JKP: Thanks for this. This was really nice. I think one I think I really like that I have seen, I don’t know in is contissues or not, over the past few years, adding more and more folks to TC39 has been great. Whether that’s a lot more invited experts from open source projects or whether that’s opening the doors to much smaller companies and get—I really getting this diverse set of voices. Do you have thoughts? TC39 grows faster than a lot of the other TCs in ECMA. Did you have thoughts on how to—it feels like it’s the only downside is we are consensus-driven org and it can get messy sometimes. I was wondering if you had any thoughts on how to not lose—I will have the consensus and I love adding tons and new people and belongs that. How to keep a healthy organization while opening the doors for as many groups as possible.

SHN: We are opening the door to many groups, many members, and of course when a member signs on, they sign on just like an invited expert on code of conduct and ECMA. I will make an assumption, which is dangerous, but individuals or organizations or the participants of those organizations that join TC39 have an objective, to ensure that the standard, this foundation that is being worked on stays relevant. So they are ready and interested to be working unanimously together. I don’t imagine that somebody joins just to be disruptive. And I think—by nature of the work and the interest, of this very relevant standard, which I mean I think is—we can say, maybe the most used standard worldwide. Billions of units of—are involved and have to work with ECMAScript and have to adhere to those. So I think by nature of that, you always have a congenial collaborative.

SHN: With other committees that are not royalty free, they want to ensure that the standard enables the interoperability to have that business and in the end make the money they need to make. There’s already that interest to stay aligned. I hope that helps answer a little bit, JKP.

DLM: Yeah. I forget to say this earlier. Thank you. I thought that was a very helpful presentation and clarified some things for me.

SHN: Very good. Thank you. I had not done this in the past, and I apologize that I didn’t. I’m sorry I waited so long to do. The discussion on consensus raised so many different topics and many players. I am happy to do this for whatever topic you need. As I mentioned the bylaws and rules are five pages each. I have given you bullets. I don’t want to go through all of it. If you have other questions and other areas you think that we need to work on, that would be good, I don’t believe that we are breaking rules. TC39 is not breaking all the rules. We talked for just about three weeks. The point is that you are able to work together and do it in a way that meets the needs of all of the members. There are areas you have to discuss like maybe is ten days, maybe the 3 weeks. That’s up to you to discuss. I wanted to also make sure you understood that invited experts are valued despite the fact they don’t vote at the ECMA level. But within the committee, within your temperature checks, within your—the stronger voices to advocate they are absolutely valued and relevant. Thank you.

SFC: I can just chime in on the duration of—on the duration of agenda topics since people have commented on that. I know for—as convenor of the TG2, we used the deadline, the TC39 TG1 agenda deadline to drive our schedules and our work. And the ten-day rule has typically meant we are able to have a TG2 meeting where we approve proposals to then come to the TG1 meeting two weeks before the TG1 meeting. And if that deadline were extended, like I could potentially see us doing it 3 weeks before. But that is starting to get into the point of it being a bit challenging for us to schedule the meetings and to have those peer-reviews. I think that you know, I think that it would be—if we did think that ten days wasn’t enough time, from my perspective, also, you know, engaging with other delegates from Google, ten days have been enough, maybe do is a, which gives 2 full work weeks before the TG1 meeting is a good first step. I wouldn’t want to jump to 3 weeks.

RPR: Given we are talking about now like the details, of the deadlines, there is actually a dedicated agenda topic on this coming up tomorrow. And know there’s people not on the call, but we will keep out of that. This a good way of kick-starting that.

SHN: What I take away is that you found this reasonably interesting and I will do this for other topics that you need. What I will prepare for this next plenary is some further information on consensus. To give you more food for thought, to see how you want to work together. Also, I would recommend that if you have other topics, you give me a heads up and I can prepare it in advance for the next plenary. I may take already the action to maybe do something on the royalty free and IPR as it came up with the previous discussion with WHATWG and the challenges WinterTC is having regarding some IP issues that may, Luca mentioned. You can talk about that and I can add that to the agenda next time, to give an overview where we fit in there.

### Speaker's Summary of Key Points

- TC39 operates effectively within Ecma structural and procedural framework
- While Ecma recommends a 3-week lead time for official documents (agendas, minutes), flexibility is allowed—e.g., TC39’s 10-day agenda rule is acceptable if all stakeholders are treated fairly and inclusively.
- Some participants voiced concern about procedural alignment. The general consensus supported maintaining the current efficient processes, with openness to longer review periods when necessary
- Only Ecma ordinary members hold formal voting rights. Invited experts may participate actively in discussions but do not vote at the GA level or TC level. Invited experts are considered vital contributors due to their technical knowledge and historical continuity. They are highly valued.
- Future plenary discussions may include clarification on IPR and royalty-free policies, based on ongoing member interest or concerns.
- Participants expressed interest in additional guidance and documentation on consensus models and global procedural standards; this will be addressed in a future plenary.

Samina will provide additional material on best practices for achieving consensus.

WH: I would like to make the observation that, for the "proposed change to the agenda deadline" topic, I can’t actually tell what the proposed change is. So… it’s one of those things for which no materials have been presented ten days in advance.

RPR: I think you are accurate on this, which is this: it’s on the schedule in the overrun. Is it on the—let’s just check if it’s on the agenda.

?: I see a proposed change to the agenda deadline. Those 6 words is about the extent that I can tell what it is.

RPR: That is fair. It was on the agenda, but the materials have not been supplied. The usual rule, when any—when the agenda deadline has been missed, people can block things on the fact that the materials weren’t there. I am sure that Chris will be fine with whatever outcome, you know, es more the discussion.

WH: That assumes that people interested in the thing knew what is being proposed and attended that part of the meeting based on that.

RPR: Yes. And people—people have already expressed schedule constraints they wish to be there for that. I think this stems from a discussion in TC39 delegates. So I don’t want to speak on behalf of Chris.

RPR: Thank you, Samina. We are at—14 minutes before lunch. I don’t think we have got any topics that can fit into that. Wait on the call in case anyone thinks differently.

RPR: Okay. I think then we should—wind up and call lunch. At 1 p.m. in Spain we shall resume with—let’s have a look at the agenda—we shall resume with Christian talking about moving TC39 forwards. Then the decimal continuation and math.clamp. Thank you, everyone.

## Moving TCQ forward

Presenter: Christian Ulbrich (CHU)

- [proposal](https://github.com/zalari/tcq/tree/reloaded)
- [slides](https://cloud.zalari.de/s/g4HNCjSWJHcKz4Q)

CHU: Okay. So let’s go. Hold on, that’s the right presentation. So I’m talking about TCQ reloaded. I have been doing so before and before, but right now, so—here we are. Yeah. What does it look like? It looks like that. So, that’s just—ages ago. It started and then 11 months ago it was less than I talked about. And yeah. But we’re still on. So 18 hours ago.

CHU: And TCQ, well it lives. Have a look at https://tcq-reloaded.com/—well, you can zoom in I guess. So I meant to deploy this to get it running locally and to get it deployed. It fully works. It worked last year as well. Chris has already tested it. And if you want me to demo it, I can demo it at the end, but so we have fully working TCQ deployed separately. And what did it take to rewrite TCQ? Well, it actually showed me how much the ecosystem has changed during the last eight years. Because it was built with Node 10 and TypeScript 2.8 and getting this to run on contemporary systems is quite difficult. Because you cannot run Node 10 on Apple Silicon Macs easily and it uses archaic node-sass. And it is tightly coupled to Azure as well. We are not able to run this easily locally. And yeah. I have solved all of that. I solved this with a Docker-based reproducible build environment. And I decoupled the abstraction layer and I deployed it automatically.

CHU: So coming back, what were the problems of TCQ? Well, I think there are two quite big classes of problems. One is the operational side of problems. So, the old TCQ runs under Brian’s desk as I have been told. Whenever there’s a problem, we cannot easily restart it. And if there’s lack of performance—we cannot say, oh, I don’t know, just throw some more RAM at it. Something like that. There are also functional problems. The development has stalled. Which might have to do with the fact that it cannot easily run locally. There are some feature requests, and it is a love-hate relationship. We are using it right now, heavily relying on it.

CHU: So what to do? They, we have a plan! Let’s tackle both problem complexes. So, tackling the operational problems. I think it is quite easy. We can use the reloaded TCQ right now. It gets automatically deploy via GitHub actions to https://tcq-reloaded.com/. Because we have automatic deployments not, we can easily fix any critical bugs now and they get deployed automatically as well. We could easily add a restart action. So we—anybody on TC39 can restart TCQ. Okay, this is concerning the operational side of TCQ.

CHU: And then there is the functional class of problems. I think the current code base is basically dead. So—so what every good programmer says, we need to rewrite it. But the idea is that we rewrite it, having the act same initial functionality, having the exact look, having the exact same, same way of utilizing GitHub for authentication, stuff like that. And yeah, also having the same concept. But until then, we can use TCQ reloaded. So—I think this is the way forward using the old reloaded one and working on the rewrite.

CHU: So how soon is now? Well, I think we can use TCQ reloaded now. So I don't see any problems. I need, of course, we need to figure out where to deploy to. It can stay where it is deployed right now on AWS and [https://tcq-reloaded.com/](https://tcq-reloaded.com/), I don’t mind (the current costs). I will finish all the needed GitHub Actions until the end of the week. We also need to figure out where to transfer the repo to, because right now it is at my company’s organization on GitHub.

CHU: Concerning the rewrite, yeah, the idea is that we rewrite it as a modern app. So, we already did some work on that. So the old TCQ is a pretty, not pretty in a sense of actually being pretty, it’s a rather messy monolith. So it is mixing all kinds of things. Yeah. We want to do better next time. The plan is to have this ready maybe next, or next-next plenary. So I’m open for questions/discussion.

MF: Sorry. I just wanted to express, I generally support all of this. Especially I appreciate the work you have done in the operational side to make this like, as like a first step to getting started. We definitely can’t stop there. I strongly support doing the rewrite. We need to get it into a place where we can iterate on it. That means using modern technologies with documentation that I can follow. And develop from the beginning with an eye towards maintainability. Unlike this, which was Developed as kind of a toy project for a single developer. We need to be able to have many different people contribute to it. So I support the first step and we should not stop there and actually go through with the full process of making it maintainable by all of us.

RPR: Shane?

SFC: Yeah. We’ve got, we’ve been, in my role with Unicode, we have been doing a lot of, of work over the last couple of years of modernized Unicode’s technology stuff, and a lot of that is taking services that were run on people’s computers under their desk and on the cloud and so on and so forth. One of the issues that came up in the efforts is well, moving thing to the cloud is great and all, but where do we get the resources for that? And prior to approximately 2022, basically like you know, Microsoft and Google both were basically just like gave open source organizations all of the compute they wanted. It was very easy to like get that. Like, after 2022, both companies have sort of locked that down and both Azure and GCP is hard to get free resources than it used to be. It is still possible, but—my, my experience with working with unicode is that many of these similar types of services we have running for things like Unicode tools and so on and so forth are like—get the amount of traffic that is low enough that like, you know, it’s basically just a few, a few dollars a month even in some cases to like host these. You know, if, if that’s backed by ECMA that could be cleaner for TCQ. I just wanted to, you know, raise this question about like, you know, putting things on GitHub Actions is fine, but then you don’t have a database and things like that. So, you know, thinking about who is hosting the tech stack and what is the ownership and the prevalence of that is an important thing to consider here.

CHU: Yeah. I’m absolutely with you. Although, as you have said, it’s running in my AWS account, but the monthly costs are pretty low. So I mean, that shouldn’t be a problem. So if ECMA is not willing to sponsor it, I can sponsor it myself. But yeah.

SFC: Yeah. I mean, in Unicode, like, we basically said that we, like—especially since the point of this effort is to like put things into a more long-term sustainable state than like we don’t necessarily want to depend on a single point of failure. Like one delegate, as well being as you might, you know, your credit card might expire and then, you know, AWS like shuts down your services and then we don’t have TCQ. So things like this. We want to have a more robust solution, even a few more dollars a month it is much more healthy if we are an ECMA body, for ECMA to be involved with the hosting expenses. Again we’re talking about a few dollars a month, not that much, but even a few dollars a month it is important to have structure around.

CHU: Yeah. I think the best bet is bring this forward to ECMA and concerning the, what you were alluding to, I don’t know, AWS retiring, something like that, I also made sure that the, the old one, so I—decoupled it, so right now it can be adapted to any provider. But I’m with you, I’m, I’m with you that we need a solution that is easily deployable and not in any way tied tightly to any specific member.

RPR: Yeah. I think this is a good topic. When it comes to requests from the committee to ECMA, any kind of service, the natural process that we’ve used in the past and continue to use is to put it on the agenda for an ExeCom, that is where it is discussed beforehand, that and result in a request that comes up to the GA. So we definitely have—the—ExeCom to do it, especially if you would be willing to help with authoring that request.

CHU: Yeah. I can do that.

RPR: And just so we’re clear. The money terms that have been talked about is a few dollars. Are we talking in the order of say $10 a month?

CHU: Roughly. More like 20, 30, something like that, I haven’t given an exact look.

RPR: All right. We’re talking less than $100 a month.

CHU: Yes. Definitely.

SHN: Sorry, I’m not in the queue. Typically the requested with come to the TC chairs and we see it on your report. It would be great if you just describe what it is in the financial requirements. Thank you.

RPR: Yeah. This is an action that the chairs will take forward.

CHU: Yeah, and part of that, I mean, we don’t have—so I think—so, someone asked me if I’m the owner of TCQ or something like that, no, I’m not. So I want to transfer it (the repo) to TC39. And then I don’t know if we have any big process about it. But once we have automatic deployment in place for future features and stuff like that—I think we can self-govern this easily. But I think this is something the chairs might have to think about. How to, how to, who is the one to, to—make feature requests and who is the one to decide whether this is deemed worthy or something like that. I think once we have this in place, it is—I have the feeling that we can self-regulate this.

RPR: Yeah. So I guess I’m, are you—are you looking for any volunteers? Because it seems like, like maybe a small working group, we don’t need to make anything official in the meetings and so on. But maybe interested parties can get together on this.

CHU: Yeah, of course, later on I will link the slides and it is open on GitHub so have a look at it. And—I think the most important thing would be to, whether we really want to give https://tcq-reloaded.com/ a try first. I don’t see why there should be any problems, because I didn’t change any of the code at all, I just made it to run. So I think we could give this a go at the next plenary. Probably tomorrow. But – \[ Laughter \] But, it is also doable in the next plenary.

RPR: If we prepare like a test run just so we can try it. I guess in all cases, we will be able to fall back to the older system. We’re not going to tear that one down. So this seems quite a safe move.

CHU: Yeah. So I think we just figure this out in-person, and what the exact schedule would be. But I really think we should do this for the next plenary. Because otherwise, we never put TCQ development forward. Using [https://tcq-reloaded.com/](https://tcq-reloaded.com/) gives us all the time we need to get the rewrite ready. So then we have the rewrite. If the rewrite fails we can fall back to the reloaded one. So that’s the whole idea basically. Move this finally forward.

RPR: Okay. So, I think—I think we have heard general agreement here. You know, this is not a consensus seeking thing, but I’m certainly plus one on this. Does anyone have any concerns? All right! Oh, hearing my mic is quiet, so I’m turning my head to get closer. All right. This is amazing. Our infrastructure moving forward. So thank you, Christian. I think that’s a round of applause.

\[ Applause \]

CHU: Thanks.

### Speaker's Summary of Key Points

- Old development of TCQ has stalled, we want to have a new TCQ
- The old one, has been made provider-agnostic at https://github.com/zalari/tcq and is deployed at [https://tcq-reloaded.com/](https://tcq-reloaded.com/)
- It is to be deemed to be used for the next plenary
- Old-one can be easily restarted by a GitHub action, its reloaded branch is automatically deployed
- New TCQ development is to be done using the exact same concepts, but still a rewrite
- CHU will co-ordinate development for the time being at [https://github.com/zalari/tcq](https://github.com/zalari/tcq)
- Near future:
- Reloaded TCQ used until rewrite is ready
- Fall-back to old TCQ if nothing works
- Minor features can be implemented for TCQ reloaded as well and should be requested at [https://github.com/zalari/tcq/issues](https://github.com/zalari/tcq/issues)
- There is a matrix channel for TCQ development: https://matrix.to/\#/!FnKBZWyZXEOJHuOtWy:igalia.com?via=igalia.com&via=matrix.org

## Continuation: `Decimal` Stage 1 Update

Presenter: Jesse Alama (JMN)

- [proposal](https://github.com/tc39/proposal-decimal/)
- [slides](https://notes.igalia.com/p/tc39-2025-05-decimal-update)

RPR: Excellent. All right. So up next we’re moving to a continuation of the decimal discussion from yesterday. So, do we have Jesse? Yes. We do.

JMN: Perhaps we could repopulate the queue from yesterday. Or should I just manually go through that. I do have a screen shot here. I can work through it.

RPR: Well, if you send me the text, I know that—I know that Chris did capture the queue. But I—he—he put it in the notes, I guess. That’s what he would normally do with it.

JMN: I could also just readout topics.

RPR: Well—if you read them out, I’ll put them into TCQ.

JMN: Item number one from WH was pi with 72 significant digits. Item two from Shane, revisit `Decimal.Amount` prototype equals. Item three was again from WH, exponential notation. And item four was from WH also, what if rounded amount is halfway between two odd values? At least that was the queue when I saved it.

JMN: So I guess, if you are there you can step up. Waldemar?

WH: Yes. This thing is using Decimal as a backing store, which means we get 34 digits of precision. I’m wondering whether that shows through the API. What happens if you provide it with a string with more than 34 digits of precision—for a concrete example, let’s say you give it a string with π to 72 decimal digits and request rounding to 52 digits. What happens?

JMN: Well, I guess, the thinking here is we would construct a `Decimal` value-based on that string first. So you’re right that would have 34 significant digits. Possibly rounding to find out what the 34th digit would be. And then you would call something like with, with precision 70 or some big number. And then it would just be a bunch of zeros at the end there. Similar to how, the case with Number.toPrecision. Am I getting you right? So in other words, there is some rounding going on. Possibly at the time of construction. And then if we try to go beyond the limits of, of decimal, then we get a string back with some kind of imputed precision. Which it wasn’t really there in the input. So the—the round guarantees would only hold for values that can be represented in Decimal 128.

WH: Okay. This is mainly a clarifying question so I understand the requirements. How does exponential notation work in this thing?

JMN: I guess that is just derived from how Decimal128 handles exponential notation. So I think the thinking there with exponential notation we get the significant digits, we is just read those off. There’s going to be a check if that is within range of Decimal 128. I think that should be fairly straightforward. But maybe there is something you have in mind. You can elaborate.

WH: So when you do you output this thing, when does it switch to exponential notation, or do you have to make specific requests for exponential notation?

JMN: Now I see. Good point, we don’t have any method at the moment for forcing exponential notation. Or, and I guess the thinking of two string is that it would switch in the same way that `Decimal` switches. But I think you raise a valid point about whether we want to have methods that always return Decimal format or always return exponential format or whether we should switch back and forth depending on how many digits are present? I think we don’t have an answer to that. We’re open to any feedback. I think one of the things that we would like to preserve, as far as possible, is round tripping. But that may require some thinking about—method that will always like keep track of the original notation or whether we need to weaken the round tripping claim to some extent.

WH: Okay. I see that you have round two nearest, break ties to even as a rounding mode. Do you have other rounding modes available here?

JMN: Yeah. That’s right. We were thinking, again it is just building on Decimal 128. So it takes the five that are available in IEEE 754 and makes it available.

WH: When it does the rounding and you then ask for the internal value, you get the rounded one, right?

JMN: That is correct.

WH: Okay. It is one more question about rounding. What happens if you use the round-ties-to-even rounding mode, but both choices are odd?

SFC: My point of order, we are not progressing through the queue. I hear VM going through the items, but the queue is not moving. I would like if we use the queue.

RPR: So, I can pull WH’s up. Sorry.

SFC: I mean, well, while we’re fixing the queue, Jesse, if you want to answer that last question.

JMN: Yeah. Sure. I think this is a probably something that, again, will just be inherited from what Decimal128 is doing. If I remember correctly, this is also something that came up when we were discussing maybe more than a year ago with the round ties to even. Can you remind me what the example would be with two odd values and we have to pick one.

WH: Okay. Your value is 0.95, you want to round it to one significant digit.

JMN: I see what you’re doing there. Right. Good. I actually don’t remember the details of that. But there is an answer given by Decimal 128. That would be the answer that we would have in mind.

JMN: I mean, unless, unless –

WH: I don’t think Decimal128 gives you an operation to round to one significant digit.

JMN: Oh, I see what you mean. So you’re kind of pushing the limits of what we could do there. Yeah, good. I think at the moment I don’t know what to do there. But we can continue this offline, if you would like.

WH: Okay.

SFC: Yeah. So on that case that we were just describing of, yeah, Steven, why don’t you go ahead, that’s what I was going to say.

SHS: Yeah. At one digit 1.0, the, one digit and the zero, so that’s the even digit.

WH: No, if you round .95 to one significant digit, your equidistant choices are either 0.9 or 1, both of which have odd least significant digits.

SHS: I see what you’re saying, it’s not decimal places, it’s digits.

WH: Yes.

JMN: I think it is something inherently ambiguous. We need to look at the spec. If there is no answer in the spec. Perhaps we need to seek guidance from IEEE about that.

NRO: Yeah, thanks WH for the example. I think it maybe came up before in our discussions, even when we think about run to even we never realized this case, for example, the .0 and then one would be odd. So it was just never talked about before. Like, I sure it will be discussed. So thanks for bringing this up.

SFC: Yeah. I can look more on GitHub for this. But this has definitely come up with ICU. And when we implement this rounding. There is a well-defined behavior. I just need to re, remind myself what it is. But yeah. I agree that like, this seems like a thing we should just work out on a GitHub issue.

SFC: Yeah. My next topic was, I think, we should—revisit `Decimal` on prototype weakness, that is not what the topic is, equals.

JMN: Equals. Sorry.

SFC: Not weakness. Yeah. So—so WH made a comment yesterday about that, about `Decimal.amount.prototype.equals`, he said he doesn’t think it should have that function on it. My initial response here is well a Decimal.Amount is a, it is a value type. Right? And when you have any value type it’s completely reasonable to do basic things like you want to put it into a HashMap or a HashSet. And you want to like, you want to use it like a key in a cache or something like this. There is like a whole bunch. You know, you want to basically see if two values are deserialized or equal to each other. I mean, there is just like, I feel, like kind of silly trying to like explain why you want an equals function on a value type, that seems very fundamental. If you can clarify why you thought having equals function was problematic on Decimal.Amount? That was a question for WH.

WH: I don’t necessarily think it is problematic. I see Shane’s point about it. I just want to avoid confusion between that and arithmetic equality. There is the potential for confusion here where you have values which are mathematically equal, but not equal according to this notion, but on the other hand, I do see how it might be useful for sets and maps.

SFC: I see. So, do you feel that having `Decimal` and `Decimal.Amount` amount be separate types where one, like, has a precision specifically like part of its data model helps to clarify this concern about numerically equal values? Like I, I totally understand and agree with where you’re coming from. Like with the October version of this proposal in which there was one type that had precision. But now that we have two types, one has precision and one is normalized, it seems to me like this addresses that problem of confusion.

WH: I would not say that it fixes the problem of confusion all the way, but it reduces it. People will inadvertently compare `Decimal.Amount`s when they meant to compare Decimals. And sometimes the code will work. Sometimes it won’t.

SHS: I just was saying it reminds me of Records and Tuples. Nothing beyond that. Composite key or whatever.

EAO: When discussing amount, an argument is being made that the limits of what can we expressed with Amount should be the Decimal precision limits. However, I would posit that a valid use case for an Amount in JavaScript is to include supporting the representations of numbers we already have in JavaScript. So this includes BigInt and numerical strings with the supported precision range of `Intl.NumberFormat`. And I just wanted to explicitly say that I think these qualify as valid use cases, given that they exist and not just because the limits of about 34 digits do cover most of the use cases that have been identified.

RPR: Shane.

SFC: Well, the last comment kind of addressed the question that I added. But I think it is good to, good here to be looking at like on the one hand spec consistency. Like we have the several different numeric types. But on the other hand, like—does `Decimal` cover all of the use cases of `Decimal.Amount` specifically? And I think that’s an interesting question to, to be looking at here. Because as I said yesterday, I think, you know, choosing a numeric type as the backing for the amount is going to give us a better result. It is going to be easier to use and understand. I think that if we, want to support more than Decimal, like we should have that discussion. But I think it should be centered around, like what are use cases and fall back modes. More than just we have a time and we must use it in amount.

EAO: So yes, we should have that discussion. Another aspect that I want to point out is that there is a bad failure mode that’s introduced by a limit that is otherwise arbitrary of having 34 digits as the maximal supported limit here. We could instead follow the `Intl.NumberFormat` precedent of using the `Math.MAX_VALUE` as the limit for the integer digits and 100 for the fraction digits. Doing so, I think the worst thing that could happen is that we introduce a marginal performance penalty for Decimal.Amount which I think ought to be perfectly fine especially as I—as I recall it, the use cases for Decimal that have been presented have explicitly ruled out performance as a reason to adopt Decimal. So I find it surprising to introduce any such limit in Decimal.Amount for anything like performance reasons.

MM: With regard to equality, there is this, you know, somebody just already mentioned the composite keys proposal. Which I’m very much in favor of. The—I would given the composite keys, you know, hypothetically, if composite keys were already part of language and we were trying to advance `Decimal` and `Decimal.Amount`, would we advance them so the values themselves were composites? If so then, then the giving them their own equals method seems wasteful. Now, I know the hypothetical, if pursued, creates a coupling between proposals that are still going through the staging process. But we should certainly try to look ahead and avoid adding complexity to the language only because of the relative timing of different proposals.

JMN: So, Mark, if I may rephrase that. Is this an argument against having an equals method in the Amount? Under discussion?

MM: So if, if Amounts could themselves be composite keys then yes. There’s a general composite key equality, which provides much, much stronger guarantees than a method on one of the operands could ever provide.

JMN: Okay. That, that’s worth thinking about. I think I don’t have an answer for that off of the top of my head.

MM: Okay. Since this proposal isn’t stage one, just explore, I mean this is across coupling concern, which I’m very glad on the previous process discussion for the cross-coupling concerns that have been called out. This is a cross-coupling concern between the proposals that seems like a great thing to be part of the stage one exploration.

JMN: Yep. Agree. Stay tuned. We’ll investigate that and come back with some kind of Response.

MM: Okay. Great. Thanks.

RPR: Shane has a reply.

SFC: Yeah. My reply here is that the concept of how we check for equality between like two decimal amounts still applies whether or not we have an an equals function or use composite keys and composite keys will still need to be able to check for that.

MM: Composite keys. There is a static composite equal that takes two, two values and if they’re both composites, then does the composite equality that has strong guarantees to it. And so how does that not subsume the needs for equality? Are you imagining that—I’m sorry. Are you imagining that two `Decimal`s or `Decimal.Amount` that will be dot equal for your method might not be composite equal assuming that Decimal and Decimal.Amounts were themselves composites? Because if the equality of the method should always be the same answer as composite equals, when the operands are Decimal or Decimal.Amounts, then I don’t understand the question.

SFC: Yeah, that was kind of my question there. Which is like the concept of equality, like if we have an equals function and the concept of equality if we use the composite function should be the same. So I think those two questions follow from each other.

MM: Okay. So, so would the equal method just then be, I mean, in this hypothetical, would it just then be like a trivial wrapper around composite equal maybe with the restriction that the operands are Decimal or Decimal.Amounts?

SFC: That would align with my expectation for how an equals prototype function would behave in that world.

MM: Okay. So it would just be convenience. Oh, my god, I just saw WH say NaN on the queue, I will yield to WH.

WH: Yeah, Decimal has a NaN. I don’t want to digress into how Composites deal with NaN. But we will need to figure that out.

MM: But, but just so—I’m sorry. Just, the—particular question that it raises is what does the, the equal method do if the operands are NaN, because clearly the composite on two NaN operands would say yes, they are equal.

WH: Depends on whether you use the Composite notion of equal or the Decimal notion of equal, where NaN is not equal to itself.

MM: Right. That’s exactly why the question is interesting. For composite clear it is the has to use structural equality Decimal, not Decimal.Amount, Decimal is part of the proposal, should be, I could expect to be inline with all of the other arithmetic operators, I.E. follow IEEE. So it would be like our IEEE versus our Object.is.

WH: Yes. That we will have to discuss when we discuss Composites and may present difficulties around what the `.equals` method does. I don’t want to digress into that topic.

MM: Okay. Okay.

EAO: Completely independently of what type we are going to use to represent the value in Amount, an Amount with a NaN value should not be valid and we should probably throw in its constructor.

NRO: Yeah. And just to be confused, but the comparison with composites. The way call Bazetts work, they contain values, and we have the values unless composite. But for Decimal, if we have two Decimal object physical they are not composites, they have different entities, if they are composites, there is nothing inside of them we can apply IEEE to, they don’t have—a value contained.

MM: I see. I see. Okay. The explorer, but I, I understand your point.

SHS: I was just going to bring back that NaN is still relevant not talking about composite. We are talking about specifying an amount that equals, we should be clear what exactly that does with NaN.

SFC: Yeah. Another topic that we are sort of doing at the very end of yesterday that I think I would like to get resolved during this continuation. Is this question about Decimal.Amount being a superset of Number.Amount. We had a little bit more discussion via email on this. I wanted to pick up to see if there’s any other points where, we’re not in complete alignment on this. Because, you know, I, I think from part of, you know, part of the reasoning for why we think Decimal.Amount is a suitable type to use is because if you ever have a Number.Amount, you can represent it as a Decimal.Amount. And I think that Mark had some concerns about that.

MM: Yeah. So—it, if the subset relationship is actually much closer than I expected, and that means that my case for, you know, that specific case, I was making for polymorphism or orthogonality is weaker. So I may just acknowledge that. The, Nicolò and I had a private email on the side in which he, he gave me an example of a, of a number, I.E., I’m going to say float 64, because numbering this conversation without code quotes is too ambiguous. Gave me an example of a float 64 that designates a real number that is not a representable real number in Decimal 128. So as far as—so, so here’s sort of my remaining problem which, you know, I acknowledge is narrower. But if Amounts only support Decimal and not Float, and then you’re trying to introduce it in a code base where you’re doing lots and lots of stuff with Floats and there’s certainly a tremendous amount of code that does that and is not going to change. Then if I understand the degree of subsetting that we, that we actually have, which is not at the denotation level, or the mathematical value level, that, that the idea is that well, if you have floating point numbers and you want to apply an amount to them, we just convert them to Decimal where you want to make the amount, and then if you want to pull the actual number back out, in a way that works with your other numbers, just convert it back to a number then and they’ll be—you know, some loss of convenience and some awkwardness. But it, the, as, as an amount because amounts don’t do arithmetic, there’s no real loss of semantics. There is just a loss of convenience. Which I think it is still, you know—I don’t like the—to, to accidentally impose the inconvenience by making Amounts nonorthogonal. But because Amounts don’t have arithmetic, I acknowledge it is only doing this.

WH: MM, you raise an excellent point. Arithmetic that rounds using just Numbers to *k* significant digits will round observably differently than arithmetic that rounds first to Decimal and then to *k* significant digits. And this will happen for even simple examples.

MM: Okay. So that actually makes the call for orthogonality stronger.

WH: The issue is double rounding. Double rounding will change the result that you get.

MM: Okay.

NRO: Yeah. So first, WH can you share an example? Not now, maybe offline about a number like, if you have a float64 and round it to a given number of fractional digits?

WH: I will come up with one in a couple minutes.

NRO: Okay. Yeah. Okay. What we are here the only operation involved is rounding. Right? Okay.

WH: Yes, the only operation involved is rounding.

NRO: Okay. Thank you. And my, I just want to share with the rest of the committee the example MM and I were talking about, that I also did together with Shane. You get any number that is not exactly representable as a Float, like 1.1, ask that 1.1 is actually 1.1 and then many zeros and a bunch of numbers at the end. And if you cast this to a decimal, that bunch of digits at the end does not fit in Decimal. So you lose them. However, when you converting back this Decimal to a number, this Decimal is not representable as a number. And it gets converted to the closest, well—when I say number, I keep meaning Float 64, it converts to the closest float 64, which is again the one with the extra lilt couple digits at the end. So, while there is not exactly an identify relationship between the float 64 and Decimal 128, like each float 64 can be like round tripped when converted to a number Decimal 128.

EAO: The previous might have answered my question. Because I think just need to clarify for myself and say it out loud. My understanding is that we have a well-defined string representation for all number values. Where you can go from a number to a string and then back again and you’re going to get a value that is triple equals the number that you started with. So the question I—just wanted to verify here is that when going from a number to a Decimal, if you go directly from a number to a Decimal, do you always get the same thing as if you were going from a number to a string to a Decimal? While recognizing that there may be a special case for negative zero, and I don’t really care about that. But about the rounding and other issues. Will that equality always hold?

SFC: That is what is in the specification text.

SHS: Yeah. My point is just that, I mean, as far as floats are concerned these are the same number. I think the real question is do they round trip. As long as you can round trip from a float to a Decimal back to the same float, if you have that guarantee, I’m not concerned with the fact that you have extra digits at the end of the true number that this thing represents.

NRO: Just follow-up from previous WH’s question about .95. In Intl asking that to round with one fractional digit you get 1.0, that is what Intl does already.

WH: The discussion so far has soured me on having equality methods for Amounts. And just like we have with object equality on Decimals, what exactly would go wrong if we only had object equality on Decimal.Amounts?

JMN: I’m not sure I understand. We don’t propose that Decimal.Amount be a primitive. So equality would be just object equality.

WH: Yes, just like it would be on Decimal values.

JMN: Right. So then—a little bit more about why you’re feeling a bit uncertain about equality then? Because I think we have given a number of examples and clarified a bit about how we are trying to stay in some kind of safe space where we have round tripping guarantees here, but it sounds like you have something else in mind?

WH: Well, frequently you are interested in the equality of the underlying Decimal values. But the use case for equality of Decimal.Amounts is a bit more tenuous.

JMN: Okay. Let’s maybe just keep that conversation going. We can dig in.

WH: I have an example about the double rounding requested earlier. Consider the IEEE Number 0.15. If you convert it to a Decimal and then round to one significant digit, you get 0.2. If you directly round the Number 0.15 to one significant digit, you get 0.1.

DMM: No! On the half rounding rules. 0.15 precisely should round to 0.2 and always will. It is—you’re thinking of rounding towards the nearest even integer, but you should be thinking about rounding towards the nearest even digit at precision which you are rounding. This is consistent in IEEE 754, it is consistent in Java decimal formatter, in Java’s big Decimal. I’m worried that we’re getting stuck on a thing that is actually well specified and generally well-understood. I understand the desire for, for clarification. But these rounding rules are well-defined and are implemented in many other places.

WH: Rounding the Number 0.15 to one significant digit gets you 0.1 in IEEE arithmetic: `0.15.toPrecision(1)` gives you “0.1” in today’s ECMAScript. This is a response to MM’s question about how rounding of Numbers differs from first converting a Number to a Decimal and then rounding the Decimal. I’m just answering NRO’s request for an example.

DMM: I think if you’re seeing that behavior, that is generally a—bug.

WH: It is not a bug.

DMM: So you’re saying that 0.15, when interpreted as a Floating-point number —

WH: yes —

DMM:—has produced a floating point number fractionally below 0.15.

WH: Yes.

DMM: To you is it rounding. That is generally considered a bug. You should be rounding on the decimal representation and you should be going for the number that is closest with minimal length to your floating point representation. So if you’re talking about rounding your inherently in the decimal domain and you should have already worked out your minimum—like, the shortest number to which you have a minimum distance.

RPR: We’re actually at time now. And I think we should wrap this up because we’re a little bit over, actually. But Nicolò says thank you for the—

NRO: Yeah, that 0.15 was an example from a question for an example of when a Number rounds differently. And Waldemar was not asking Decimal or Number to do something different, just providing the example.

RPR: I’ll also just point out, to continue this whole area that we are planning to do a breakout session tomorrow, I think 90 minutes on numerics as a whole, so there will be opportunity to continue this if anyone wants to capture the queue. I think Dan Minor’s topic we won’t get to.

JMN: I captured the queue. Thanks, everyone.

RPR: Jesse, did you want to summarize today?

JMN: I can add a summary offline right now.

RPR: Okay, thank you.

### Speaker's Summary of Key Points

- We discussed some outstanding uncertainties and unclear points about Decimal.Amount:
  1. how rounding is handled (edge cases with round-ties-to-even),
  2. the notion of equality in Decimal.Amount and its relation to that provided by the Composites proposal, and
  3. whether Decimal.Amount is effectively a superset of a hypothetical Number.Amount.

## Math.clamp for stage 2

Presenter: Oliver Medhurst (OMT)

- [proposal](https://github.com/tc39/proposal-math-clamp)
- [slides](https://docs.google.com/presentation/d/16_9rFqG9Dz8IF339VNExe4rGzMA3ZVXhahng_nT3RnY)

OMT: I’m presenting Math.clamp for 2 or 2.7, as a preface. So I presented this in Seattle for Stage 1, and it passed. But the main blocker for Stage 2 is should it be Math.clamp or Number.prototype.clamp. And here is my summary of the pros and cons of each.

OMT: So Math.clamp matches the convention of having a math function in the Math namespace. The prototype obviously is kind of unprecedented, it just has the string methods, but that helps because the order is obvious, because you have the decimal.\[INAUDIBLE\] as your context and. It should help BigInt support because you can add it to the prototype of BigInt. And it also—because it breaks that convention, most polyfills and libraries just add it to math or expose it as a function.

OMT: So let’s decide. The main two blockers for Stage 2 is do we do the prototype or the `Math` function, how should BigInt support work for this proposal. You can either do it in this proposal or defer it to a different proposal, but let’s not care about it right now. My kind of preference is towards prototype. Initially I was in the `Math.clamp` camp, but I see the appeal of the prototype, because it makes it much less confusing even though it’s unusual. And also to keep BigInt support out of this proposal for now, just to kind of maintain the simplicity of it. So I’m happy for any discussion to try and resolve these issues synchronously.

WH: Math.clamp takes a value, a minimum limit, and a maximum limit. Math.clamp shouldn’t throw when the minimum limit is less than or equal to the maximum limit. Currently there’s a case in which it does.

OMT: Yeah, there is an issue filed for that. I think it’s a valid issue, but I don’t think it’s a Stage 2 blocker. It’s definitely something worth discussing. I just think it’s --

WH: It’s crucial for its behavior to respect ordinary IEEE arithmetic. Unfortunately this seems to be fairly controversial.

OMT: Yeah, I definitely think it’s worth discussing.

WH: A possible resolution suggested on the issue is that, if *min* is greater than *max*, then it just returns *min*. That would also resolve the issue of what to do when *min* ≤ *max*.

OMT: Yeah, I’m kind of open to either option. I don’t really have a preference of—I think whatever just makes the most sense for someone who hasn’t read the spec would be nice.

WH: Even if we don’t do that, then it should not throw if you give +0 and -0 as the *min* and *max*.

OMT: Does anyone else have thoughts on this issue?

TAB: As I said in the issue, I think we should be matching CSS’s behavior here—just where if they’re out of order, we just return the *min*, and would resolve Waldemar’s issue, but that’s my only input here.

MF: This might have been resolved by TAB's comment here, but I’m just wondering if people had any precedent for this or if we would just have to figure something out. I’m happy to follow precedent if there's precedent for how to handle min and max being out of order. I agree with what WH said, this is just going for Stage 2, that’s a very minor detail that can be figured out in Stage 2 before 2.7.

NRO: Yeah, so we’re looking at this proposal, like, in our internal meeting, like, last Monday, I believe, and it was not clear at all which behavior you are going to propose between looking at prototype or not. Our preference was prototype method, which is fine, but it would have been great if it was clear by the agenda deadline, especially when you’re asking already for Stage 2.7.

OMT: I do regret not having the slides linked earlier.

OMT: I guess all of the opinions on Math.clamp, versus the prototype method.

RPR: One thing we could do, if this is something that multiple people have opinions on, is do a temperature check. I’m not pushing that, but I think it’s possible.

MF: I think we should voice opinions, if anybody has one, before we do the temperature check. I strongly support prototype. I think I made this clear in the original presentation for Stage 1. I think that that’s really the only way that we can make it obvious what the parameter order is. Whenever we have a method that takes three parameters of the same type, it is basically—and in this particular one, if the order is not the expected order of the numeric values, then I think that it can be unintuitive. Even if there is precedent within other libraries and stuff for a particular order. I also love that it paves the path for, like, doing the same for BigInt in the future, because I would love to just, you know, treat BigInts the same in how I invoke the method on them.

DLM: I agree with MF. I think it will be much more readable on a prototype than the existing math.clamp.

RPR: WH is also plus one on the number prototype and so is John. All right. So lots of support for number prototype.

OMT: Yeah, I think it’s safe to say there’s consensus on that issue? So, yeah, and I guess the main other blocker is should we have BigInt support in this proposal itself or defer it to another proposal? Personally, I’m happy to defer it because I think it just makes—it just makes this less complex, because there really isn’t a precedent for BigInt math functions yet, so who knows what trouble it might uncover, and there is already a separate proposal for it, so I think I could add a BigInt prototype.clamp or something.

RPR: Michael?

MF: Yeah, I don’t mind either way, but I would prefer to have consulted with JS Choi on that because you do rightly point out that it has some interaction with the BigInt math proposal, which I believe is Stage 1, is that correct?

OMT: Yes.

MF: Yeah, so I think it also wouldn’t be the end of the world if, like, later we would modify this proposal in Stage 2 to add the support for BigInt. All of those paths are acceptable, in my opinion.

RPR: Waldemar?

WH: When thinking about the BigInt version of it, the question comes up of what happens if you want to clamp it only one way and have an infinity as the other limit. BigInts don’t natively have infinities, but this comes up time and again where you want to have something like a BigInt infinity for clamping.

TAB: Note that we do have the same problem over the iterator.range discussion, and they were just reusing the Number infinity and allowing that one specific value plus negative infinity to mix with BigInts.

WH: Yes, that would be a fine solution here as well. But that’s something that we should discuss.

OMT: Yeah, I think it’s worth discussing, and I think there’s kind of separate issues, so I think it’s worth deferring to a separate proposal the have deeper, more involved discussion on that, rather than just kind of tagging it along with this.

RPR: Okay, so I think on your open questions, it’s clear we have—we favor the number prototype, and on question number 1. And for number 2, it’s sounding like people want to defer and separate out BigInt for now. It could be added back later.

OMT: Yeah, so I guess is there consensus on this going to Stage 2 with these decisions?

RPR: And we should also highlight Nicolo’s point earlier, which is because the materials for this weren’t provided in advance, if someone did want to block purely on the basis that the deadline not being hit, that would be permissible.

MF: I support this proposal advancing to Stage 2.

JKP: (via queue) +1 for Stage 2, but best not to go for 2.7.

RPR: Yes, we agree that is purely an ask for Stage 2.

WH: Whether I support it depends on whether it throws in the common case where *min* ≤ *max*. If there are any cases where it throws on numeric inputs when *min* ≤ *max*, then I don’t think we should advance to Stage 2.

OMT: And I’m happy to get a consensus on whether we should change that now and require that with Stage 2, since we have spare time, I believe.

NRO: Yeah, can you clarify, just you don’t want to it to throw when min is less than max or max is less than min?

WH: When *min* ≤ *max* it would be very surprising if it throws, and that’s what it currently does.

TAB: Just to be really clear about the case that Waldemar is talking about, it’s when you’re mixing negative zero and positive zero in a way that is equal per our normal operations, but, like, with a min of positive zero and a max of negative zero. That’s the case he’s worried about.

NRO: Okay, thank you, I think.

MF: Additional clarification on WH’s comment. I want to ask, are you talking about, like, after coercions have been done so that it is, like, a numeric value, then you’re doing the comparison, or you’re saying if you literally wrote out that comparison operation and they were doing ToNumber operations or something?

WH: I don’t understand your question.

MF: I’m asking, like, the throwing, are you talking about also throwing because of our lack of doing coercions there?

WH: No, no, this has nothing to do with coercions. I just read the spec text, and that’s what the spec text does. It has other bugs with issues raised for them, but this is the main one.

MF: Okay, so, yeah, okay, you’re just talking about the cases where they are Numbers already?

WH: Yes.

RPR: Let’s just check, do we have Jordan on the call? He did want to be present, and unfortunately we couldn’t meet his schedule constraint, because just looking at the issue, it looks like he’s arguing the other way, and that he does want throwing. Is that—then let’s just check.

TAB: Yeah, he is indeed arguing for the opposite and isn’t in right now. He won’t be here for at least 45 minutes, I think.

MF: That’s also still, like, a post Stage 2 concern, in my opinion, this --

RPR: I think Waldemar is trying to say that it is gating Stage 2.

MF: It’s about as minor a design feature as I can imagine for such a proposal. I don’t see how that can be gating Stage 2. Is that the case, WH, you think this should gate Stage 2?

WH: I consider throwing when given valid input not to be a minor design feature.

RPR: To be a minor design. Therefore, it could be—oh, to not—it could be considered a major feature.

WH: Yeah, it’s a major problem if it throws on mathematically valid input.

RPR: So it sounds like we have a disagreement about whether this is a major or minor feature. Can we hear any more views on that. Mark is saying let’s defer and revisit once Jordan is here. Jon, go ahead.

JKP: I don’t know if this is just a—I’m just a little bit confused because we’re not saying that it will throw. We’re moving to Stage 2, and we can—like, I guess I’m confused with the difference between moving forward- we’re not saying we’re moving forward guaranteeing it will throw. We’re saying we’re moving to Stage 2 to have this discussion. I guess my understanding would something like this would be an appropriate discussion to have after moving this, like, either way. Like, we’re not saying—we’re not saying we’re moving to Stage 2 and it’s throwing. We’re saying we’re moving to Stage 2—we’re saying can we move to Stage 2 where we can decide this behavior? I think maybe I’m getting confused here.

RPR: That’s a reasonable view, so then I would check with Waldemar. Do you agree with that basis?

WH: If it’s a minor part of a complicated proposal, then yes. But here we’re defining a simple math function and its behavior is the major semantics of the proposal.

RPR: Okay, Mark is suggesting we return to this one once Jordan is back.

WH: Unfortunately I’m not going to be here for the rest of today.

RPR: All right.

MM: Is there a—is there a time during the plenary that we expect both Jordan and Waldemar to be present, because, you know, I can’t imagine that we can resolve this unless both of them are present at the same time.

RPR: So Jordan is available for the last two hours tomorrow, which is only one hour, so basically the final hour. Waldemar does not have any schedule constraints listed. So he could return to this—we could return to this in the final hour of tomorrow, but that’s also precious time because there are other things that everyone wants to be in that slot.

MF: I think there’s a possible way to move forward here. The thing that WH is requesting about this not throwing, nobody has objected to the not throwing behavior. Could we go to Stage 2 with the assumption that that is the behavior?

MM: Jordan’s objection is specifically an objection to that behavior.

UNKNOWN: Jordan’s not necessarily—sorry, it depends on the—yeah, on the basis of what we see here, it doesn’t prefer it, but it’s not as strong as an objection.

RPR: If we do as MF proposes, we should at least wait for Jordan to confirm when he’s available. It would be great to ask Jordan if he is fine—and getting the behavior that Waldemar proposes, and --

UNKNOWN: We default and say we’re going to Stage 2 with the no throwing behavior and check that Jordan is okay with that as well?

MF: I’m also confident that Jordan would feel that that is something that could be litigated during Stage 2.

UNKNOWN: Exactly.

UNKNOWN: It would meet everyone’s constraints.

UNKNOWN: Because then it’s—yeah.

UNKNOWN: I’m happy with that.

WH: I’m happy with that.

UNKNOWN: All right.

UNKNOWN: I’m happy with that.

RPR: Well, all right, so it sounds like we should just—we should immediately come back to this when Jordan is available in about 30 to 40 minutes, and that we could then quickly resolve this. All right, thank you.

SFC: I was wondering if the would be possible for Oliver to update the spec in those 30 to 40 minutes so we know we’re actually approving for Stage 2. Now there’s two diffs—the throwing behavior and where the function lives. Given there’s only like 20 lines in the spec, it would be good --

OMT: I’m happy to edit as soon as there’s consensus, basically.

RPR: I think we do have the plan. Let’s create the slide during the break.

OMT: Okay, I can edit it now.

RPR: Okay, great. Thank you, everyone. Oliver, could you perhaps summarize where we’re at.

OMT: Yes, I think everyone has agreement and consensus on we should do number.prototype.clamp instead of math.clamp, and at least for now, we should not have `BigInt` support. I’m deferring it until after Stage 2 or a different proposal. And it remains to be seen whether we should throw if min and max have that behavior positive and negatives where it can trigger the clause where min is less than max.

RPR It remains to be seen, but for Stage 2, we are defaulting to no throw.

OMT: Yeah.

RPR: Thank you very much. Okay, we have 5 minutes remaining until the break. I don’t think anything else will—sorry?

### Summary

- When `Math.clamp` reached stage 1, the biggest concerns expressed by the committee were how it would be accessed and how it would work with `BigInt`.
- This presentation was intended to propose stage 2 or 2.7 advancement, with preferences to the above blockers expressed by the proposal's champion

### Conclusion

- Discussion continued later in the day.

## SeededPRNG for Stage 2

Presenter: Tab Atkins-Bittner (TAB)

- [proposal](https://github.com/tc39/proposal-seeded-random)
- [slides](https://docs.google.com/presentation/d/1wCKZx60SxFkhLHPrOHhzTWDrtr-OiE8p7oZWjGtSdmY/edit?usp=sharing)

TAB: Hi everybody. You might remember when I presented seeded PRNG and got to Stage 1 and then I left it alone. Quick restatement of the problem. There’s a lot of reasons to want a reproducible random generator to do for testing and games that want to avoid safe scumming and stability for random stuff. Doing a reproducible item generator on your own can Be easy if you write a linear congruent generator, it’s four lines of JavaScript if you do it exactly right. Or it can be hard to generate good randomness. So hopefully we can provide a better source of this built in. Note that I am very intentionally not targeting a cryptographically strong PRNG. The crypto APIs have their own use cases and generally don’t want reproducible items. They have their own thing going on that I’m not trying to touch right now.

TAB: So after a good bit of discussion in the last few years in the repository, I think we’ve come up with the more or less final API design. So here is a quick demonstration of it. New class `SeededPRNG`. It contains the internal state value and constructor and static function to generate a random one. I have a `random` method and `randomSeed` and then `state` getter and setter. I will go over these individually and then talk about the details.

TAB: Constructor is simple and takes a `Uint8Array` for the state that is 112 bytes given the proposed algorithm or `Uint8Array` for the seed that is 32 bytes. Any other length, we throw. Or it can take a number for convenience, integer restricted to 1 byte to generate a seed; I won't get into the details of that. We’re limiting to integers in the byte range 0 to 255 and generates the seed for you. Alongside this is the static method `fromRandomSeed` that generates a random seed for you and returns the seeded PRNG initialized appropriately. A lot of cases where you want to pause and resume or transfer your PRNG status but don’t care about how it starts. So this helps you do that and gives you a proper spread across the set of possible seeds, all 32 bytes of seed entropy. Whereas doing it yourself using `Math.random` gives you 53ish bytes and you don't have good entropy and we can avoid that.

TAB: Once we have an object, we should offer right now the same API that you have existing in the JS stuff. So `.random()` gives you a uniform float between zero and one. Very specific Implementation here borrowed from Rust and 64 bits off the generator and to 53 bits and divided by 1 over 2^53 and get a uniform float. Random seed exists for the same reason as the fromRandomSeed() business. Sometimes you want to generate child sequences of random numbers without having to manually carefully sequence things yourself. This gives you a random seed pulled off of the PRNG so that you can initialize separate PRNGs from those. Again, doing it directly in here lets us give you the full 32 bytes of seed entropy rather than whatever you get from random().

TAB: `state` and `setState`. This is pause and resuming. If you ask for `.state` we give you a copy of the bytes used for the state, so you can store in a database or whatever. Then you can `.setState()` to restore a prng to the given state, overriding whatever state is currently in there.

TAB: So going over the open issues we have. Open-ish issue 0: which algorithm, what is specified? We want reproducible across run times. The current proposal is that we go with ChaCha12 and this is a variant of the ChaCha20 that uses 12 rounds rather than the 20. This is the exact algorithm by Rust and numpy and suggested by bakkot. Go uses ChaCha8, a little smaller and faster with less proven entropy characteristics. Unless we’re presented with strong objections I think we can go with ChaCha12 as the definite one. It’s a very nice balance of a lot of qualities between performance, size, and entropy characteristics that I think works very well. If we need to provide more types of PRNG algorithms, that’s always available, we can always add a constructor argument to the constructor, but this is a good default that should be fine for many years.

TAB: Open issue 1 which is Issue [\#33](https://github.com/tc39/proposal-seeded-random/issues/33) in the repository. What is the name? I’m currently going with `SeededPRNG`. This was suggested by a couple of people in the committee. I wouldn’t mind using `SeededRandom` instead because it’s less capital letters to type. But I don’t have a strong opinion. If somebody does have a strong opinion one way or the other, feel free to comment either here or in the issue thread what the name could be. We’ll come up with something reasonable.

TAB: Open issue 2—this one will require discussion—is what type of value to take in the constructor. The way I described it is `UInt8Array`, it takes bytes and describes it in the most straightforward way possible. All of the DOM accepts all of the `TypedArray` types, tho. When they are doing byte level manipulations they iterate the bytes in order. This has some potential issues, the big one being that it exposes platform-endianness if you’re big-endian or little you’ll operate in opposite orders which is potentially confusing. Another behavior is that if you pass a larger `TypedArray` to a Uint8Array constructor, it walks the indexes and truncates the values to the range of `Uint8Array` rather than taking the bytes directly. It’s unclear what behavior the author intends in this case. It would give us consistency with DOM to follow just what they’re doing with all of the network communication APIs.

TAB: My current preference is to just hit kind of in the middle and just allow all of the types that are byte-sized, so `Uint8array` and signed int and clamped or whatever. But I find any of these possibilities acceptable if the committee has opinions. Notably this is the first time that we are having an API outside of the `TypedArray` family that accepts `TypedArray`s. Whatever we do here is going to be a precedent set for EcmaScript in the future and we should make sure we are happy with that.

TAB: What is not an open issue intentionally is other random methods. The only stuff I’m offering that gives randomness is `.random()`, matches `Math.random` and random seed that has a specific use case for the API. Any other random methods or integers or anything like that will be held for the second proposal that I will be doing in the next half hour. Anything that we do decide on over there if and when that proposal goes forward we’ll mirror them over here. If, you know, that just never progresses, we’ll figure something out. But not part of the base proposal here.

TAB: So that’s it basically. What questions do people have? What concerns do people have? Let’s discuss it out.

MM: So the first question is, what is the approximate performance difference, just ballpark, Between ChaCha or ChaCha20 specifically versus a cryptographically strong seeded algorithm?

TAB: I don’t know numbers. I know it is certainly better perf-wise and bakkot might have an Idea. He spent time thinking about this.

MM: I would like somebody who has a sense of the ballpark to state it.

KG: I just joined. Missed all things preceding MM’s questions. ChaCha12 is a CSPRNG so I don't understand the question.

MM: Awesome.

KG: ChaCha is almost exclusively used as a cryptographic algorithm; here we are using it as a PRNG. Normally when doing crypto with it you use ChaCha20, but it has been convincingly argued that 20 is too many and 12 should be fine. Otherwise it's literally the same algorithm with encryption.

MM: Thank you very much. I certainly have no objection to ChaCha12. I’ll just go to my next question. Just want to clarify the API that you’re proposing, there’s a static method `fromRandomSeed` and there’s an instance method `randomSeed`. `fromRandomSeed` is drawing on genuine entropy. The random seed is deterministic.

TAB: Correct.

MM: `randomSeed` is really pseudo random seed. I’m not suggesting that you change the name. I want to make sure that I understand.

TAB: You’re correct.

MM: So I’m a little surprised at the presence of `fromRandomSeed` and I'll explain why it makes me uncomfortable—not a blocking issue but I want to talk it out. In use cases where we’re trying to run JavaScript deterministically—in particular running hardened JavaScript. One of the points of hardened JavaScript is that, in hardened JavaScript all the implicitly shared primordials is free of mutable state or ability to cause effects. And two of the exceptions to that in JavaScript are `Date` constructor and `Math.random` and `Date.now`. And those are not fatal for us because we basically censor those. Censoring is a last resort and what we prefer is to virtualize them. So a methodology we are using is to keep mutable state in instances, and when there’s mutable state attached to a proposal in TC39, to make sure that it’s easily separated from the rest of the functionality. So we can avoid the strange things we have to do with `Date` and `Math.random` where we have to completely recreate the entire abstraction just to leave out one feature that’s essentially a minor feature for most uses.

MM: So with Temporal, the Temporal folks did a great job that all of the mutability—all of the observability of side effects is in `Temporal.now` and the entire rest of the temporal proposal is deterministic and state-free. So over here as this grows, this conversation will bleed into the next presentation. As this API grows, I want to make sure that it’s straightforward and simple to quarantine or virtualize the access to entropy, and everything that extends from there does not have to be completely reproduced in order to quarantine the entropy.

TAB: Right now in the context of API, it is just `fromRandomSeed` that uses external entropy. In the next proposal, I would love to have some discussions in there how to make it more reasonable to do without you having to manually censor every method in there. It is helped by the fact that I will see in the proposal later, hopefully we’re able to get them running on the same underlying mechanism. So essentially the browser-provided random functions will all just be running a random-seeded PRNG underneath the covers, and that could hopefully lead us to a place where we can more easily allow this sort of a swap-out or censoring. But it’s a design discussion I probably want to save for another time there. I am very sensitive to the concern that you have, though. At least for some of these like, say in the README, that using one of these you could replace the existing `Math.random` with a well-known seeded one in one of the tools And still retain the correct behavior, just with a well-known sequence instead, eliminating the communication channel possibility.

TAB: So I don’t know exactly what the right direction would be to allow the browser randomness to be provided or overridden or something, but I would like to discuss that.

MM: Thank you. Also by the way, let me say now that we know that ChaCha12 is a cryptographically strong pseudo-random number generator, the communications channel concern I think which certainly applies to `Math.random`, does not apply because part of the definition of a cryptographically strong pseudo-random number generator, because any number of observed generated numbers gives you no information about what the next number is.

TAB: We might be able to avoid it.

KG: Caveat if you know the seed, you can predict the outputs. If you know the seed, you can give it to two people. The two people can communicate by advancing it.

MM: And with regard to the API itself, I was forgetting that it does not encapsulate the rseudo-random state and makes it available.

KG: That’s right.

MM: Everything I said about it not being a communication channel is wrong.

KG: Of course, it’s only instances. You make an instance and then the instance has state. But the API itself has no state.

MM: Right.

RPR: Ten minutes remaining.

MM: Okay. I’m done.

DLM: I’d like to hear a little bit more about argument of including it in the language Rather than just having it as a user library. Curious about performance and Coordination point and evidence of widespread user or developer demand for this.

TAB: Yes. Basically yes on a few of those. First putting together writing a good random generator is very, very difficult to do. To do it correctly requires very careful design. Not something that we want the average person to do. Even doing a linear congruential generator, the simplest thing that looks like a decent random number generator, requires you to copy carefully chosen constants from Wikipedia. You can’t write it by hand unless you’re copying it from somewhere. That sucks. Something that is reasonably likely to be needed.

TAB: For example, an example I give in the README is the CSS custom paint API lets you alter how things draw on the page, and wanting to do some degree of randomness there to create rough borders or something is a use case that we have already seen people design with. But because they only have access to `Math.random` and don’t have access to store any information, there’s no way to keep it steady for the box when it resizes and repaints again. Having a reliable generator to generate the known sequence using one input value to feed into the state is a useful developer facing tool here that again we don’t want to force people to have to go and write a PRNG themselves for.

TAB: And I don’t want to get into the philosophy of us offering included API versus new capabilities, but I’m definitely on the side of “we should be providing more libraries for people”.

DLM: To summarize, this is difficult to write correctly and there would be a risk of people doing it incorrectly if they try it themselves or finding a library with poor Implementation.

TAB: Yes.

DLM: Thank you. Next on the queue, I ran this by some other people, some security people at Mozilla and they have feedback that I would like to share, though this is outside of my area of expertise. The first one is around algorithm choice. There were thoughts that perhaps the algorithm chosen here is overkill with the amount of entropy that’s available and something like ChaCha8 might be more suitable. And I raise that more because if ChaCha12 is more costly and we’re not getting any benefit from it, we should be using ChaCha8. And then a more general concern there is that over time as computers are faster maybe a better algorithm would be more suitable. I know you addressed this a little bit in the slides where you say maybe in the future we add an algorithm choice as a constructor option, I just wanted to raise that.

TAB: That partially argues why we should be sticking with ChaCha12 even if it’s a little overkill right now and gives us more padding unless there’s a fundamental mistake found in ChaCha. If it’s purely a matter of compute, 8 is weaker than 12 in that regard. The other argument for 12 over 8 or anything else is just that it’s already the one chosen explicitly by Rust and NumPy and they put good thought into this. As somebody says in the thread, if I were given zero details about what else is going on and just told hey there’s this numeric thing and Rust and NumPy made one I would trust that with zero details and why I’m going with it.

DLM: The only thing—and this is outside of my expertise—is getting enough entropy for ChaCha12 to work And that’s worth investigating.

TAB: The only thing is the entropy necessary to generate the seed, 32 bytes worth. Once you have 32 bytes of entropy, you’re off to the races.

DLM: Fair enough.

DLM: I think I’m still in the queue and the other feedback internally is that 32 bytes is not a large enough seed to be cryptographically secure. And notice you called it out in the slides. I wanted to raise the concern that developers may not understand this and may misuse the API.

TAB: There’s unfortunately not like a ton we can do besides make sure that the API isn’t well-shaped for cryptographic uses. Hopefully the Crypto API is well shaped for that and has good name recognition. I think that’s about the best we can do unfortunately. We have some extent to try to make it harder to misuse—at least in particular the easy to use version of the constructor that takes a number and currently limiting it to just integers 0 to 255, that gives you enough space to play around for testing purposes, but makes it clear by observation there’s only 256 possible sequences to generate in this way. This is not good for production and use it for random seed argument and get 32 bytes of entropy out of it. We put work into encouraging better usage there, but ultimately there’s only so much we can do to put out good usage.

DLM: That’s fair enough. Thank you.

RPR: Do you want to ask for advancement?

TAB: Yes. I think it sounds like there’s no major objections. So if everybody is happy with the design as I have sketched it here, we can ask for Stage 2 and continue to have more precise detailed conversations in the issue thread while we get ready for everything else. I would like to ask for advancement.

RPR: You have explicit support from three people: CDA, MM, and MF. Any objections To Stage 2? No objections? Congratulations, TAB, you have Stage 2.

TAB: Thank you.

### Speaker's Summary of Key Points

- New design is a SeededPRNG class, with `.random()`, `.randomSeed()`, the ability to get/set state directly, and generate an instance from a random seed.
- Choosing the ChaCha12 PRNG for the specified algorithm.
- Discussion topics:
- What's the perf difference between ChaCha12 and a proper cryptographically-strong PRNG? (ChaCha12 is a CSPRNG.)
- fromRandomSeed() draws on platform entropy, want to make sure that's not a communication channel. (Discussion in the next topic leads me to think that we're safe here, but it'll be discussed in the repo.)
- Why include this in the language rather than letting it be a userland library? (Randomness is common, and very difficult to get right.)
- Is ChaCha12 overkill for these purposes? (ChaCha8 isn't proven quite as well, and is closer to the bleeding edge of crackability. Better to be further away from that edge for a default algorithm.)
- Is it hard to get enough entropy for ChaCha12 to work correctly? (Only need 32 bytes of entropy, not that difficult.)
- 32 bytes might not be large enough to count as cryptographically secure. (Yeah, we're not trying to replace the Crypto APIs. We'll try to make sure the design doesn't overlap too much, so people are led to use the right APIs.)

### Conclusion

- Approved for Stage 2.
- Stage 2.7 reviewers are KG, JMN, MM
- Based on discussion in the next topic, the class is moved to being `Random.Seeded` (rather than a new global name).

## More Random Functions for Stage 1

Presenter: Tab Atkins-Bittner (TAB)

- [proposal](https://github.com/tc39-transfer/proposal-random-functions/)
- [slides](https://docs.google.com/presentation/d/1HXjj3VNjNIvb-LBNLFiepVHZiuSNmtoTqGObuBVGXBQ/edit?usp=sharing)

TAB: Yes. So this is the companion piece to what I just did. So we talked about `Math.random`, and it sucks for multiple reasons: it’s been poisoned by the race to the bottom, accidentally caught by a benchmark. So making it fast and shitty and barely good enough for the random generator was a competitive advantage at some point and we stuck like that. Also it’s not very functional. A random number between 0 and 1 does the job for some things, but there’s a ton of places where people want to use other types of values.

TAB: Random integer is the big elephant in the room. Writing a function with `Math.random` is not hard. I do it any time I do anything with random. I’m never 100% certain I do it right. Every time I do a quick 10k trials of D6 and see if it gives me 3.5 like I expect. If you do anything more complicated, forget about it. A lot of really useful random generator stuff like random sampling and whatnot is surprisingly hard to get right. A lot of code you find out in the wild that does array shuffling does it wrong. Try to do anything with non-uniform distributions like a normal distribution, that’s very nontrivial to do, and there are well-known algorithms for it but it’s hard to write. There’s a ton to do.

TAB: Four pieces to the proposal, they’re more or less independent and talk about all of Them and as we move forward in stages, some or all of them might not precede. I will run Into it.

TAB: First, putting the random function on `Math` made sense back in the day. It was a numeric-y function and needed to live somewhere and might as well. This proposal adds more functions, and they'll need a random prefix on their names, effectively name spacing them. Also, a bunch of them aren’t actually numeric in their nature. They’re doing things like shuffling arrays or something. So it doesn’t seem right for those to live over in `Math`. But it also doesn’t seem right for the different random methods to live in completely different places. They have a unified theme and should live in a unified space. Part 1 of the proposal is create a new namespace object `Random` and put all the new random functions over there. In particular, that means that `Math.random` stays where it is and we have a `Random.random` that duplicates functionality and any new things stay in `Random`. As before, we don’t touch the crypto API functions, and they have their own use cases. We don’t want to mix them with the use cases and make sure that people doing crypto are well led to the cryptographic library and not messing around with the lesser random stuff.

TAB: Part 2 is all the random methods. This will be a quick run by a bunch of possibilities. I have no idea what space we end up on. I’m starting with casting a wide net. Not at all disappointed if we cut a lot of these. Many are necessary but many are optional. Different languages made a lot of different choices on what to include in the random libraries. Python in particular has a fairly large set of stuff. A lot of languages limit things a little bit more. But exactly how far we want to go is just going to be a choice that the committee will make in the future. Not really concerned about exactly what we’re doing right now, but here is the rough set of things that I think might be useful.

TAB: First, simple random numbers. We have `.random()` reproducing the current signature and no argument, returns a value 0 to 1. Two is more generic random number, with min and max and step and A and B. And Int and BigInt. Random Ints are a super common thing we need to produce. And BigInt to do the same thing and return a BigInt. That takes all BigInts as arguments as well. We can have a discussion about more BigInt math and exactly what we want this sort of thing to look like, so if this doesn’t end up in the first version of the proposal, that’s again completely fine.

TAB: There are a lot of open design questions here. So I don’t want to get into too much weeds there. A lot of things to be potentially compatible with, and interesting discussions with inconclusive points. I think these are something we need to resolve but not necessarily for Stage 1.

TAB: Second step is a bunch of collection methods. Array shuffling is super common. Everyone does it wrong. The most obvious way to do it is wrong, even when doing it the right way with fresh array, it’s easy to screw it up and get bad ordering. We offer the shuffle that does it in-place and random shuffling that returns a new array. Also methods for grabbing one item or multiple items because grabbing one item is sufficiently common that you don’t want to necessarily return a length-1 Array wrapper to unwrap manually.

TAB: Taking notes from Python, the `take` ones also allow you to specify multiplicities and weights to do weighted randomly. Doing it yourself is not difficult but not trivial either, and being able to specify if you take it with replacement or not is a big thing that a lot of APIs offer as separate functions. I think we can save design discussions for later.

TAB: Part C any of the non-uniform distributions. Everything we discussed is from the uniform distribution. There’s a lot of things to potentially offer. Normal distribution is the big one to offer. But log-normal is very common, a normal distribution over the circle, and binomial and hypergeometric are useful to use. The geometric distribution is even used for generating the random number things. Exponential distribution is great and I have an example on a later slide of using it. There’s a bunch. No idea what set we end up on. This set is what Python supports. And it’s a good starting point, I think.

TAB: Fourth one is bytes. There’s a number of cases here we want simple bytes out of. These might be something that we prefer to save for doing with the crypto API so we don’t have the possibility of misuse. But hopefully there’s a sufficiently useful use case here with the simple version on the Random side: just getting a random Uint8Array, or taking a buffer and filling it with bytes. One thing this is doing the fill bytes one we want it to be just byte-based and not value-based. Because, for example, defining a uniform distribution over a `Float32Array` is impossible. There’s no useful uniform distribution over floats. You have to define the very specific distribution that matters for your use case. So we shouldn’t worry about it and just go for a pure byte-based—you give us `Float32Array` and we fill it with bytes and you get something out of there.

TAB: Finally—this is the least likely thing I think—is there’s other types we can offer for randomness. Just getting a random boolean is useful in coin-flipping. It’s easy to do yourself, you compare random value against your threshold. It might be useful to throw in a super trivial thing. Random strings are commonly used for testing purposes. Exactly what that means is tricky. It probably depends a lot on the use cases. Might be too specific to individual testing use cases for us to be reasonable to offer it ourselves. It would look something like this, an exponential distribution.

TAB: Part 3, we should specify the PRNG and want to avoid the race to the bottom with `Math.random.` The proposal is go ahead and match seeded PRNG and all of the random methods including `Random.random` (distinguished from Math.random) use ChaCha12 for the underlying prng. This means specific implementations mandated in the spec that I'll have to go research and write, so that'll be a lot of fun. Means implementation with both of the proposals should be pretty simple and basically the `Random` namespace object will have a browser-internal SeededPRNG object that gets randomly seeded on page start and drawn from. You don’t have to implement any of these things twice when they exist across the APIs.

TAB: Part 4 is the sync with `SeededPRNG`. Simple proposal that we talked about that we expect. Anything on the Random namespace object should exist on the `SeededPRNG` object because whether it exists from the browser or from a known sequence is an orthogonal concern.

TAB: That’s it there basically. So that was a bit whirlwind and very happy to answer any questions that people have about this. Like I said, it’s an early discussion, and I’m sure we will be fighting over exactly what set of things to do. But do people have objections to adding more random methods? Let’s talk.

MF: Just a clarifying question to start off, you had I think your first slide with actual functions on it, you had `Random.number`, and I wanted to know like what the distribution is. Is it that you choose a point in the real space within those bounds and then choose the closest Number to that, or is this randomly choosing from the floats in the space between those bounds?

TAB: The answer to that is I’m not certain yet. It’s uniform in some manner. The answer is probably for many of the questions about precise details “look and see what Rust has done and copy them when possible”, because their implementation is already openly available for this sort of thing. And if we can, it’s not a strict requirement, but it’s been brought up if we can get actual reproducible sequences and whatnot between different languages here—between JS and Rust and NumPy—would be nice to have. Not *strictly* required. Whatever Rust does is probably the right answer.

MF: And I agree with that. I don’t exactly love the answer, because now it sounds more like a solution looking for a problem than a problem trying to be solved and this is the best solution. Even though I agree with you that if we were solving the problem where `Random.number` was our chosen solution, going with what Rust does is probably a good at least indicator. But I guess that kind of leads to my next topic if I can proceed to that.

MF: So this seems a bit of an omnibus proposal to me. I understand that all of these are related conceptually in that you are getting random kinds of values or doing things with randomness. But they’re not like solving a single problem. Just because we would put them all in a single namespace doesn’t mean they are a related proposal. I would prefer that this was broken up into—it appeared to me maybe three or four separate proposals that are solving different problems. The first problem seems to be “within a range, choose a random value”, and over a bunch of different domains. That seems like a great proposal. and I would just split it up that way. I think it’s likely they will advance at different rates because some will be more straightforward than others. I would rather allow for that by having them be separate proposals. I think it’s to your advantage.

TAB: I completely agree. One of the big reasons I wanted to make this omnibus in the initial presentation is to set up the right mind set for the idea of grouping. I was somewhat afraid if I went with this slide as the proposal, it’s too easy to say “why don’t we just add that to `Math`”. But there’s like a broader context that I wanted to make sure we design against it. If the decision is that we just basically take slide by slide completely separate proposals and trim everything beyond this slide right now, I’m completely happy with that.

MF: That is fair. So I would say if you’re looking for a stage advancement today to Stage 1, maybe you could try to summarize categories of proposals, and see if we would grant Stage 1 for a number of topics, and then actually do the splitting out of band.

MM: I realize one question I need to understand first, this `Random` name space, obviously that would be a new global. The `SeededPRNG` is itself a new global class. Having two new global names, especially given that one of them is a namespace, seems like a lot. But with that clarify, let me make a suggestion on how to refactor these two proposals together, which is that you have your class—whatever it’s named, I have no problem with `SeededPRNG`—that all of these methods as you’re saying are added to that class’s `.prototype`. But they’re added only there. There’s not a separate `Random` namespace object to which they are redundantly added. But in place of your `fromRandomSeed` static method on the constructor, you rather have still two global names in the proposed refactor, but the second global name is—I don’t have a concrete name to suggest. But what its value is an instance of `SeededPRNG`, an instance of it that was made from genuine randomness, and since it’s an instance, all of these methods can be accessed from that instance—just like they can be accessed from any other instance. And if you access it from that instance, then you’re going from an instance that you assume is seeded from genuine entropy, and now the issue of how did entropy enter into the JavaScript context, becomes easy to censor or virtualize, especially with virtualize that is you just—the thing that created the context made from the seed that it knows. So that seems to have all of the advantages of what you’re showing here without many of the disadvantages. All of the methods accessed off the instance are just as easy as accessing them off of the new namespace that you’re proposing.

TAB: Yeah. I think that’s a very interesting idea. The only reason I didn’t do that is purely that I think that’s a new shape of things to do versus we have several instances of a namespace object. I went for the lower-hanging fruit in terms of design space. It’s also easier to spec, but that’s not a really relevant thing for later design purposes. If that sounds good to other people, I’m happy to talk about it that way than the `Random` namespace object is a global `SeededPRNG`. That would certainly answer the Part 3 and 4 questions very easily. And I agree would make it easier to segregate off the Randomness.

MM: The other one is Stage 2, congrats on that. I think that it is fine as part of the joint exploration with that one being in Stage 2, to consider removing the `fromRandomSeed` in favor of just a global name for a randomly seeded instance. Because that gives you the entropy.

TAB: The only reason that it exists right now is because I wasn’t relying on this one having the `randomSeed` method, but if it’s just a `SeededPRNG` method object, it would. Yes, you could just call `Random.randomSeed` and pass that to the constructor and that would work just fine. Yeah, I agree.

MM: Great. So I would strongly prefer that. And, again, I think we need to not get hung up on the order of proposals, and just jointly consider this thing in terms of figuring out where we want to end up.

TAB: Yeah.

MM: Great.

GCL: So I like everything MM just said, but for the purpose specifically of Stage 1, my only curiosity is whether up is all of these –I wanted to unpack what I thought were two sort of—unless explicitly mentioned and I missed it, seemed like this proposal was suggesting using existing browser PRNG and mark seemed to be suggesting this would use the stuff in the stuff PRNG and I wanted to clarify. What is happening there?

TAB: Part 3 on the screen is that I would prefer we match what `SeededRandom` is doing, and just use the ChaCha12 method as the underlying PRNG for all of the new things. The only browser-provided randomness would be in initializing the initial state when you load up the page of where the generator is. Other than that, it should be ideally in my opinion identical to what `SeededPRNG` is doing.

GCL: Sounds good to me. Thank you.

KG: MM, there’s two serious problems with the design that you proposed, at least two. The first one is that the random instances, like instances of the `SeededPRNG` class have state, they have exposed state. Surely we don’t want that on the global instance.

MM: You’re right. I missed that.

KG: And the second thing is the `fromRandomSeed`, like one of the major use cases as a user is you want one of these that is not shared with anyone else, so that you can replay it. Like the thing that TAB was talking about with –

MM: Hold on. You can’t replay it if it’s made from genuine randomness.

KG: You can replay it because you can extract the seed out of it.

MM: Oh, because you can extract it! Yeah. Both of these I missed for exactly the same reason, which is my model—I’m not suggesting that it get changed in this regard, but the model with which I approach such things is instance that encapsulated its state, and all you can observe from the instance is the successive output. Having a level that you can easily build such a thing makes sense. So I’m not objecting on those grounds. But it does mean that my suggested refactor does fail on those grounds. I still object to this proposal without the refactor because of the difficulty of gain teen (?) but I no longer have a concrete suggestion about what to do instead.

KG: You could definitely model the random class that is being proposed in this proposal as being an instance of `SeededPRNG` with random seed that happens to not expose its state. But while that is a reasonable theoretical model, I’m not sure that is what we want to actually write down.

MM: I agree. I’m not currently comfortable with suggesting that, but I don’t have an alternate suggestion in my head right now. So obviously we need to continue the conversation.

DLM: We have about eight minutes left.

EAO: I don’t understand why together with the `SeededPRNG` proposal, we need two new namespaces. Is there a reason why all of this could not exist under a single `Random` namespace? Why does `SeededRandomPRNG` need its own namespace?

TAB: `SeededPRNG` needed instances to have multiple generators. That’s the big thing there. Whereas if anything, the other way is potentially workable like only offering `SeededPRNG`. The only problem there is simple ergonomics, having to manually construct a `SeededPRNG` from the random seed just to call `.random` or set one up in the global of your script so you can use it is a bit annoying when `Math.random` is right there. We know people will reach for worse things that are easier to spell and want to make sure they get good APIs that are easy to spell rather than force them to do something hard. Does that answer your question?

EAO: Kind of, yeah. But I mean, from the user point of view, I would presume it would be much easier for Random.whatever to work as proposed here and for `new Random` to give me an instance in the constructor give it the seed and then the instance to have the same methods that are statically available on `Random`. So I just alternatively for the random namespace to contain something like `Random.seeded` that I can construct as `new Random.Seeded` that gives me the something that has the same methods. Yeah, I think `SeededPRNG` is clumsy. Under the `Random` namespace in one way or the other is much more ergonomics for users to discover the use.

TAB: I understand what you’re saying now. I don’t object to that and am happy to take that as a design issue to talk about.

SFC: Just to sort of echo what EAO was saying, we have a break out session in Seattle talking about when we add new things to the standard library, like, should we keep putting things in the global namespace, or try to categorize things into namespaces? At least for the people who attended that, organizing things into namespace is generally tended to be like something that we would really like to be moving towards. I think Temporal is a really good example of this, how we have taken 7 different types and put them into the Temporal namespace. Here we’re looking at one or two or three of the types, and if you put them into the name space called `Random` or something, I think that would be very natural and stands to benefit for discoverability and all of the other things that were listed.

TAB: Due to the ordering of things and these are running in separate proposals, I couldn't easily link them. I’m happy to take an issue about putting `SeededPRNG` under the `Random` namespace as `new Random.Seeded` sounds totally fine to me.

SFC: I’ll always just note one other thing here one reason that we don’t put things in the same namespace is because in this committee we tend to lean towards having small proposals. And having small proposals means, well, I could add `Random.Seeded` but then like if there’s never anything else that goes in `Random`, it should have been called `SeededPRNG` in the global namespace. That’s sort of hinders us from having a better end result. So I think that we should tend towards putting things in namespaces just initially, even if it’s the only thing in the namespace for now, I think that’s okay. And as a committee, I think we should sort of consider that to be the desired outcome.

TAB: I think that’s very good feedback.

DLM: Next up we have LCA, but I would like to point out we have about three minutes left in the time box and should leave some room to ask for stage advancement.

LCA: Very short point. I agree with EOA and putting the seeded into the `Random` namespace Would be great and I wasn’t going to suggest `Random.int` for example with `Random.Seeded` to construct with the Int method on it and also is exactly what DRR was saying in the next point.

DRR: The same thing, right? Basically common is I use some random stuff, great. I have a proof-of-concept working. Now I want it to be testable. I want some uniformity between the functions exposed in the namespace and the methods. They don’t necessarily have to be the same instance. Later stage concern. But I think overall people here are kind of converging on what seems to be the API that we are all into. So, yeah.

TAB: Strong agree that the methods should be exactly the same name and signature between the two. So it should just be a swap to switch from the browser `Random` to a particular `SeededRandom`.

MM: With us being out of time, I wanted to register I support Stage 1, you know, I already stated my concerns. I have them all sympathy for concerns for TAB. I think all of those are perfectly fine to explore in Stage 1. And also noting that the Stage 2 proposal might get revised as we proceed with the Stage 1 exploration.

DLM: Okay. In the queue we have explicit support from CDA, DRR, LCA. Does anyone Object to Stage 1 for this?

MF: I would ask for us to run through separate conceptual approvals.

TAB: I was just about to bring that up. It sounds like the easiest way to handle this is to say I’m advancing Stage 1 this page (.number, .int, .bigint) and part 1, 3, and 4 but the rest of the method proposals I will split to separate proposals now that we have a good idea of the space we’re playing with.

DLM: Just like to double check that everyone was clear about what they were giving consensus for.

TAB: So number 1, 3, and 4 and then just the number and Int slide for Number 2.

KG: I’m not totally clear on point 3. I don’t know what it would mean exactly, since this PRNG wouldn’t be observable. It’s not clear to me how we could specify it. That’s something that we can talk more about later. Just wanted to bring that up.

DLM: If there’s no objections, I think you have Stage 1.

TAB: Thank you.

LCA: Can I just ask another question real quick. The second point on this slide, the new random functions is specifically for the different types of random functions, is that—?

TAB: Yeah, it’s all these pages here. Like, random number int, shuffle, blah blah, like, all the new methods.

LCA: Got it, okay.

TAB: But, yeah, like I said, only seeking, at the moment, stage 1 for this page of that.

LCA: Okay.

### Speaker's Summary of Key Points

- Lots of common random use-cases that people keep reinventing, and are often tricky to get right.
- These should be organized into a Random namespace object.
- Wide net of possibly random methods:
- Random numbers, ints, bigints from a range.
- Array shuffling, random selection from an array.
- Non-uniform distributions, there's so many possibilities.
- Random bytes.
- Discussion topics:
- What exact distribution will be used for the uniform numbers? (TBD)
- Again, want to make sure this doesn't introduce a communication channel, or that such a communication channel is easy to censor away. (Conclusion seems to be that since this is a *good* PRNG, it's safe from being a comms channel.)
- Do we want to introduce new globals both for this and the previous proposal? (Conclusion is to move SeededPRNG under this namespace object, as Random.Seeded.)
- Proposal is pretty big, should probably be split into chunks to make each easier to advance. (Conclusion was to move the array/etc methods, and the non-uniform distributions, to new proposals.)

### Conclusion

- Stage 1 for a new Random namespace object with *some* of the new methods—the more complicated design questions (array stuff, non-uniform stuff) should be pushed to a new proposal.
- All methods defined here will also live on the Random.Seeded class.

## Immutable `ArrayBuffer` for Stage 3

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/proposal-immutable-arraybuffer)

RGN: All right. So what we put on the schedule, optimistically, a while back, was a request to advance to stage 3. I’m going to go over the current state of things, and we’ll see how realistic that actually looks. Starting with our issue number 1, tracking progress.

RGN: So for stage 3, as we know, we need to resolve all normative issues, we need to have testing ready, and we need to have committee approval and signoff. As of just before this meeting, we had one ticket left with normative issues, and then the testing itself, which I will visit later in this topic.

RGN: So as far as the open issues go, we’re really looking only fine details for what happens with unexpected inputs and edge cases. And if we do reject input, at what order in the algorithms. And these have kind of been pulled forward from earlier iterations of the proposal, and they’re implicitly answered now by the spec text. Actually, they have been for a while. I think we’re ready to explicitly resolve them.

RGN: So briefly, we’ve got a question around `sliceToImmutable`, what should it do with the start and end reversed? It was decided to follow `slice`, so that’s exactly what we’re doing now. It just clamps to a zero length and proceeds, just like `slice` does.

RGN: Likewise, there was a question about trying to write into an immutable `ArrayBuffer` via a `TypedArray` over it. Should that throw—well, should that non-change be directly observable or should it silently fail? We want the former, so the `TypedArray` Set operation returns false, and in strict mode, you’ll get an exception, or if you’re using `Reflect.set`, you’ll get back `false`. Array buffers that are immutable are visibly so. The `TypedArray` methods that do writes, like sort, reverse, copyWithin, fill, all visibly fail with an immutable `ArrayBuffer`. Similarly for `DataView` now, we want to reject it in the same way. When do we do it? Immediately after validating the receiver, before inspecting arguments. If you try to do a set into an immutable `ArrayBuffer`, we’ll let you know that that’s a problem.

RGN: So `ArrayBufferCopyAndDetach` is another one of those cases, and we handle it similarly, except this one is a little bit awkward. So for `transfer`, `transferToFixedLength`, and `transferToImmutable`, we already have some weirdness in that there’s a check to reject `SharedArrayBuffer`, and then processing of the arguments converting to an index, and then a check for detachment. Now, the reason for this is that calling user code in order to coerce the input argument can run arbitrary code, including code that detaches the previously attached `ArrayBuffer`. But nonetheless, that’s first time it’s checked, and we’ve got to check for detachment, look at the receiver, and that raises the question for us here of where do we look at the receiver to see if it’s immutable. Immutability is not a characteristic that can change, but for consistency with the other algorithms, we wanted to check for it after detachment. So when you try and do a transfer of an immutable `ArrayBuffer`, that fails, but it fails *after* coercing the length argument. At least in the current state of the spec.

RGN: And then finally, we go on to `Atomics`, which are kind of similar here as well. If the first—well, the very first throwable step of this AtomicReadModifyWrite operation that’s behind things like `Atomics.add` and `Atomics.or` is to validate the `TypedArray` receiver, where we want to detect and reject an immutable `ArrayBuffer`, so that happens basically as soon as possible. Really, the only exception to that “check the receiver first, and if it’s immutable, then reject it” is the case associated with the transfer methods.

RGN: So we’ll probably get into more of that again in Stage 3, but for now, the relevance of all this coming up really has to do with testing. There’s a current test262 pull request out, which covers a lot of the basic cases. I don’t think I’m going to pull that up in this presentation. What I am going to pull up is the testing plan, because this is, as far as I know, the best conformance to what we want to see in test262 of any proposal since introduction of this concept, and it’s actually what turned up the weird ordering issues that I just talked about. I’m not going to go through it in excruciating detail, but I do want to present an overview so that everyone has a sense of what’s to come, including the other test262 maintainers who are going to be validating the tests associated with this plan.

RGN: So we break it down into basically big categories. First category is the existing properties on `ArrayBuffer.prototype`. So `resize` needs to throw a `TypeError` specifically before touching any argument when it encounters an immutable ArrayBuffer. `slice`, same thing. `transfer`, same thing, with a call-out for the unusual receiver-after-argument behavior that I just discussed. And `transferToFixedLength`, again, same thing.

RGN: We also introduce some new properties on `ArrayBuffer.prototype`. There is an `immutable` getter-only accessor, which has the default properties of `enumerable: false, configurable: true`. The name associated with it, we definitely want that in test262. This is all standard practice. I’m just calling it out explicitly here so we have nice boxes to check. It’s brand checking, if the receiver is not an `ArrayBuffer` or if it’s a `SharedArrayBuffer, then you’ll get a`TypeError`. And so on and so on.

RGN: Another new method, `sliceToImmutable`, this is the snippet that I’m expecting to literally see in the test262, we want to verify that `ArrayBuffer.prototype` has a `sliceToImmutable` callable property with the default `name` and a `length` of 2. And then more things, like brand checking. Resolve bounds after the preceding checks but before rechecking to see if it was detached by bound resolution. I will also be introducing in the actual test262 pull request some more patterns so we can conveniently verify these spec-conformant sequencing of steps, taking advantage of the fact that exceptions abort the algorithm. So basically you can see how much progress you make through any given algorithm, which tends to have such bailouts, by checking for exceptions thrown from user code or the spec itself.

RGN: Anyway, moving on, `transferToImmutable` is a new method, but it looks very much like `transfer`, so all of this is going to track the testing of `transfer`. And then we have a couple of existing static properties on `TypedArray` which are affected by this proposal. `TypedArray.from` has buried inside of it “construct the new `TypedArray` and then fill it in”. If this new `TypedArray` is backed by an immutable `ArrayBuffer`, we’re going to expect a `TypeError`, after determining the length, but before checking if it is too short or calling mapper.

RGN: `TypedArray.prototype` has a bunch of properties, the ones we talked about previously that perform mutations of their receiver. So if that receiver is backed by an immutable `ArrayBuffer`, before we touch an argument, we need to see a `TypeError`. And even if it is of length zero.

RGN: Then we have a handful of methods that are constructing new instances of `TypedArray`s, so just like `from` and `of`, if those new instances are backed by an immutable buffer, we expect to see errors. A whole lot of this is obviously error checking. That’s the testable surface area of this proposal. The happy path is actually quite narrow.

RGN: Now on to the instance operations on `TypedArray`, things like `[[Get]]` own property, `[[Define]]` own property, and `[[Set]]`, which have new conditions and behaviors associated with immutable `ArrayBuffer`s. Here we’re calling out for `[[Set]]` the treatment of canonical numeric strings and how it is affected by this proposal.

RGN: And `DataView` and `Atomics`, we pretty much already discussed in the outstanding issues. This is just the consequences for testing. Basically we end up with these big categories, and an ability to have a sequence of narrowly scoped pull requests which are hopefully going to be easy to review by test262 maintainers. A lot of this is already covered by the existing pull requests, but because I hadn’t done the translation of spec text into testing, a lot of the edge cases are currently not covered, and those will be coming over the short term, but probably not before the end of this meeting.

RGN: So that’s the state of things. We’re ready to go. The proposal is quite mature, but all of these tests will be consumed by implementations in order to have what I hope will be the most well-tested part of the standard library that we’ve seen thus far, and certainly the one most reliably attested to by test262.

RGN: I guess I’m ready for the queue now, if anyone specifically wants to talk on the test plan or on the resolution of those remaining technical issues.

DRR: The queue is currently empty. Do we have any questions, entries, RGN? I see nothing on the queue.

RGN: Okay.

RGN: I really want to have this in a basically unassailable position, so despite the name of the topic, expect a request for Stage 3 in the *next* meeting.

DRR: We have an entry from NRO.

NRO: Given than this proposal did not test history based on tests, I’m very happy with this testing plan. It’s probably one of the best I’ve seen, and I appreciate you, like, waiting until when the tests have actually been written.

RGN: Thanks. Yeah, it was an interesting exercise to put this together. Probably more than half of the work for testing is now just captured in this issue, and the remainder is now translating it into JavaScript.

DRR: All right. RGN, it sounds like you are intending for advancing at a subsequent meeting.

RGN: Correct.

NRO: I’m going to hijack this presentation to ask if anybody has more questions for RGN on how to write these testing plans properly, because it would be great if we all learned how to do this.

RGN: Yeah, I think that’s—that’s probably going to be an interesting presentation of its own. The summary here was basically, it started with MM’s high-level view of what if we broke it down by the affected, I guess I want to say types, classes, whatever. You know, we can do `ArrayBuffer` and `DataView` and `TypedArray`, and those are the big categories—which when you chase that down and flesh it out, you get to the relevant parts of the spec and you see that in fact it is fairly clean, so underneath that, you’re going to have subcategories by operation, which a lot of these operations directly correspond to properties. Some of them are the things like `DefineOwnProperty`, so those apply. And then inside of them, every step of those algorithms is either commentary or set-up, or it’s doing something testable, and the most interesting ones that do testable things are the fallible operations. So that’s pretty much what maps into these checkpoints.

PFC: I just wanted to mention that we recently landed some documentation into the test262 repo with an explainer on how to write these testing plans. And you can always join the test262 Matrix channel and ask more questions.

MM: I want to make an observation as to a little bit of a process surprise to me, if that makes perfect sense. Which is, on the order of operations issue, we originally took the strategy of not pinning it down until we got implementer feedback, and then last time we presented this, or maybe it was the previous time, I think last time, one of the pieces of feedback that we got from the browser makes is we’re not going to start implementing this until it’s at Stage 3, and therefore, we’re not going to get feedback on the order of operations based on implementation until Stage 3. So what RGN did here is just exactly the right way to cope with that, which is having picked order of operations that we believed are what would follow naturally from the semantic consistency perspective. We just make sure to test the hell out of it, so that when implementers go to implement, if their implemented order of operations deviates from the spec, where there it’s likely as possible to catch it during their testing so that we’re not blindsided by a deviation between what implementations do and the order of operations that is written down.

### Speaker's Summary of Key Points

Immutable `ArrayBuffer`s has a robust testing plan, broken out by spec section (`ArrayBuffer`/`TypedArray`/`DataView`/`Atomics`) and subsection, which will be translated into a series of test262 pull requests to cover the entirety of the spec changes.

### Conclusion

- test262 pull requests completing the testing plan should satisfy requirements for Stage 3 advancement in the next meeting.

## Iterator Chunking for Stage 2.7

Presenter: Michael Ficarra (MF)

- [proposal](https://github.com/tc39/proposal-iterator-chunking)
- [slides](https://docs.google.com/presentation/d/1Mse7PDM0vcMg4Ag_SK1_OGwVwrJuVxKz-qaWj2RyX8o)

MF: I’m looking to advance iterator chunking to Stage 2.7. I promise this will be a lot easier than the iterator sequencing proposal from the other day. There’s no complicated iterator stuff going on here.

MF: As a reminder of what this proposal does, we want to be able to consume an iterator as overlapping subsequences of some size or non-overlapping subsequences of some size. So the non-overlapping subsequences looks like this. It’s provided by `Iterator.prototype.chunks`. You pass a number that’s the size of the arrays that it returns, and when you apply it to an iterator that yields these nine digits from 0 to 8, the result iterator yields these three arrays, like you can see in this illustration.

MF: The overlapping subsequences problem is solved using `Iterator.prototype.windows`. You also pass it a size, that’s the size of the window, and when applied to an iterator that would yield these eight digits, it would produce an iterator that yields arrays of length 4 as in this Illustration.

MF: So there has been one last-minute change here, which was just to match what we have done to the other `Iterator.prototype` methods to close the this value, the receiver, when the argument is invalid in some way and we throw. So that was a change proposed by KG two meetings ago, something like that, and we applied it to all of the iterator helper methods that are in 262 today, but we didn’t apply the same thing to some of the active proposals that were ongoing. So we just applied that same thing. That should be incredibly non-controversial.

MF: So there is one remaining open design question that I wanted to run by committee. I have some available solutions, and I think we can choose one and proceed with stage advancement today, based on the choice. So KG pointed out that it might be surprising the way `.windows` behaves when you apply it to an iterator that does not yield enough items to fill a single window. So if you see here in this illustration, you have an iterator that yields three values, and you’re looking for windows of size 4, so you cannot yield any windows.

MF: So we have a couple of options for how to do this. The way that it’s currently specified is that you just don’t yield any windows. You were never able to fill a window in order to yield it. That makes sense to me. We’ll do a comparison of these options later. Another thing we can do is as soon as you try to ask for a window, the `.next()` operation will throw. This is implemented in [pull request \#14](https://github.com/tc39/proposal-iterator-chunking/pull/14). Another thing we can do is we can yield a window that is not the size you requested. It is some smaller size. This is implemented in pull request #15. And the last thing that we can do is yield a window of the correct size, but where some padding element has been used to fill in the remainder of the window. That is implemented in pull request #16.

MF: So we could do any of those. We could also do multiple of those by introducing new methods. We could also do multiple of those by introducing a parameter to switch between the behaviors. That would be something more substantial, and we probably would not advance that proposal today if we went that route. But if we choose any of 1 through 4 right here, it should be prepared to advance.

MF: So necessary context for us to make this decision is that `chunks` today, the other half of this proposal, currently yields an undersized final chunk. That is not happenstance. We did this intentionally. We discussed this at the previous presentation of this proposal. The reasoning behind this being that if you care to be able to handle all of the chunks properly, you can always do a length check, the length of the chunk matches the requested length, and then if it’s ever shorter, you know that it’s the final chunk and you can handle it differently, so you can pretty easily do like a piecewise definition for your behavior that you’re applying to chunks. So that seems quite clearly the right choice to me for `chunks`. But that might inform us for how we want `windows` to behave.

MF: Further context, this is the behavior that I was able to observe in other languages that have similar functionality. For the most part, they implement what we do today, number 1, don’t yield any windows. You can see that Elm has two different functions. It allows you to choose either number 1 or number 3. Java’s Stream has only option number 3. Kotlin’s Iterable has options number 1 or 3, but using a parameter instead of as two separate functions like Elm, and Python does something different in more-itertools with option number 4. Oh, and Scala’s Seq also does option number 3.

MF: I also looked at JavaScript libraries that provide this functionality. They are kind of all over the place. You can see that the iterables library provides two different functions. One for option 1 and one for option 4. And like this iterable-TS library takes the parameter approach, choosing between option 3 and 1. So there’s basically precedent for any of these options, but it seems like option number 1 is the most common by far, and option number 3 has more precedent than the remaining ones.

MF: So I want to run through what I would prefer to do in this situation. I would go with what we are currently doing. I think it is fine. The objection to that is that you lose values that were in the underlying iterator. So does `drop`, though—it’s not a sin to lose those values, it’s just, like, behavior that we can choose that is reasonable. It is also okay with me to change to option number 3 to match `chunks`. You can do the same kind of thing, with, like, testing the size, so it’s reasonable that you’d be able to switch between two behaviors, one for an undersized window and one for your normal expected sized windows.

MF: I don’t think we should throw on `next`. There’s no precedent for it. I didn’t see it in any of the reviews I did of other languages or of libraries. I also think it’s kind of an abuse of exceptions. In this case, I would think that maybe somebody would expect that when you apply the `windows` function, that you would receive an exception and be installing a handler for that with try-catch, but I don’t think people will expect that once they start nexting, they will receive an exception, unless the iterator is broken. Having too few items doesn’t mean it’s broken. So I really don’t think that throwing is appropriate.

MF: Padding is not appropriate if we don’t pass a pad value. If we just use `undefined`, there’s no way to do this behavior switching between what the undersized window is and what the regular-sized window is. So if you were to pass a pad value, like, some sort of value that you can test its identity, that is not in the domain of values that the underlying iterator is yielding, then that would be reasonable. But padding without passing such a value is unreasonable, and we definitely should not do that. But I don’t think I would do padding at all. It just seems worse than the other options.

MF: A parameter gives us flexibility, but then, like, we have to pick a default probably, and then we’re in the same situation. Also, it seems a little messy to pass a parameter here. I would also be fine with the separate methods. I think that possibly if I was thinking through all of the use cases for this that we went over, we would probably be able to make arguments for both 1 and 3. So separate methods is also okay if we want to go that route.

MF: Oh I did that. I did this exercise. And so these are some of the use cases that were provided as a justification for `windows` in the first place at the stage 1 presentation. And these are things you might want to do in those cases, and notice how in some cases, you will want number 1, in some cases you will want number 3. And if you’re into throwing, you could always throw in these cases. That’s always a way to solve things.

MF: So given this, that we’re reconsidering the behavior of `windows`, would we want to reconsider the behavior of `chunks` as well? I think that’s not likely. I would probably argue against it. But once we have our chosen solution for `windows`, we should think about does this make us reconsider `chunks`?

MF: So I do have reviews from three assigned reviewers. They reviewed not only the proposal in its current state, but also all three of the pull requests I have open for each of the possible solutions I have proposed. Thank you to all of those reviewers for doing that extra work. And assuming we come to a simple solution here, I would like to ask for Stage 2.7. With that, we can go to the queue.

NRO: I also have a preference for option 1, and it’s perfectly okay that `chunks` and `windows` behave differently because you use them for different reasons. You use `chunks` when you want to process all of your values a little bit at a time, and you use `windows` when you’re processing requests to—probably the most common use of windows is pairs. Like, you’re processing and required to go through all the pairs of numbers to see something. And whatever analysis is to work on pairs, and there’s nothing you can do with just one value.

NRO: And also I have a question, when it comes to options 3 and 4, what do we do with an empty iterator? If the input is an empty iterator, would you like yield nothing, or yield, for example, nothing for a chunk with all undefined values inside?

MF: So you were asking about both 3 and 4. So for 3, when your underlying iterator yields no values, the question is would the resulting iterator yield a single empty window? I think we can match what the libraries do, and I actually don’t know in that case what they do.

KG: It just has to be, you get an empty iterator out. You don’t get any windows. If your input is empty, there are no windows for any of these. I don’t think this affects the empty case at all.

MF: And, actually, it is of course reflected in the pull request. We answered this already.

KG: That’s what we implemented. We talked about this in the pull request.

MF: I’m sure we did.

NRO: I think I find it a little bit weird, but I also would find weird the opposite, and just, yeah, okay, thank you.

JHD: We talked about this in a recent TG3 meeting, and an idea that someone else came up with was, what if we go with option 1, but also the `done: true` iterator result has the remaining values in it? So that they’re not dropped, it may take a little bit of poking to find them. But they’re there if you want them, and you know, I’d have to refer to the original, which may not be reusable. That gives you all the benefits of option 1 and the flexibility of option 3, and the only part it maybe doesn’t address is the footgun case of maybe not realizing that you dropped values from the iterated result. What are folks’ thoughts on that?

MF: That gives us the benefits only when you’re doing the iteration yourself, right? If you’re collecting to an array or you chain other iterator helpers off of this.

JHD: Yeah.

MF: Then it’s lost, right?

JHD: That’s right.

MF: Yeah, so if you’re actually trying—like, if we think it’s worthwhile to get the benefits of 1 and 3, it seems like it’s superior to provide two different helpers rather than shoehorn it into this way, where you’re going to lose that info most of the time.

JHD: I mean, we do already—like, this already exists in, I think, one other part of the language. I think returning from a generator, but it’s, you know, because of what you just said, it’s like not super discoverable. You have to, like, be manually nexting an iterator to get it. So that’s fine going with the two options. I just wanted to air that out in plenary.

MF: Yeah, I could see myself somehow coming around to this if it didn’t mean, that like you couldn’t then just use other iterator helpers, like, chaining. That’s the expected usage of iterator helpers, and if that ends up losing the information you think is important to preserve, I don’t think that’s a possible solution.

JHD: Well, then in that case, for the record, my preference is option 1 by default, then parameterized to give you option 3.

JSH: Question about yielding no windows. Does it instead just yield itself?

MF: What does it yield itself mean? Like, you just get the original iterator.

JSH: No. You would—like, if you could not fill a single window, you should yield nothing. You’re asking about option number 1, right?

MF: Yeah, it never yields, so it is done as soon as you ask for a next, it returns `{ done: true, value: undefined }`, and it exhausts the underlying iterator.

JSH: Oh, okay. Then I change my mind. I think that does make more sense. Oh, sorry, then I do change my mind. I think that does make the most sense. Regarding the padding option, what if you stuck a symbol in there? I’m not saying you should do this, but potential option.

MF: Yeah, that’s what I meant with providing a pad value. So saying if we choose the padding option without providing a pad value, that is a bad choice because, you know, if it’s like `undefined`, `undefined` could be in the domain of thing that are already yielded by the underlying iterator. But if you pass one, you can ensure that by creating a fresh object or a symbol that it is not in the domain of those values yielded and then you can do the test, like the test we’re doing with the chunk size or window size in the undersized option. So it is possible and possibly reasonable to choose that option, only if you pass the padding value.

JSH: Okay. Cool.

DRR: Okay. And just as a note, we have about 11 minutes left in the queue.

PFC: I also have a preference for option 1, or at least any option that doesn’t yield an undersized or padded window. I wanted to point out beyond what others have already said, that particularly option 3 seems inconvenient for developers using TypeScript, because you have to know at compile-time that the iterator is long enough to yield a full window or you have to expect that the types of the elements in the output iterator are all optional. And I think it’s fine that `windows` and `chunks` have different behavior here.

DMM: I don’t think I’m comfortable with this dropping values. I mean, if the underlying iterator has been exhausted, so there’s no other way to get those values. And that seems like a source of future bugs for people. I understand the concerns about returning an undersized chunk, which does make the TypeScript case harder. But I mean, the Java Streams case went for an undersized thing for good reason, because the feeling was you will cause more bugs by dropping things on the floor than you will by having an undersized array in this case. So I err towards option 3, I think.

MF: I don’t think I understand this opinion. KG has also voiced this opinion to me about dropping things on the floor here. We have a method that does exactly that, it’s called `drop`, and, you know, nobody ever consumes those values. We have, like, `filter`, when you filter them out, the resulting iterator does not yield those values anymore. Like, that is part of the behavior you’re opting into with it.

MM: So I feel very comfortable that `chunks` is well-motivated, widely enough motivated that it pays for itself in terms of added complexity to the language. I certainly see that there are use cases for `windows`. What I am just ignorant of is how widespread are those use cases, and if they’re not widespread, does the extra complexity pay for itself, is it worth adding to the language? We’re not trying to create a zero code environment where nothing is written by user code, and if these cases for `windows` are obscure enough, I would just prefer to leave it out of the language, and people who want it to use a library.

MF: Well, so if the use cases that I have given were not compelling enough, would the existence in all of these other languages and these JavaScript libraries not also help convince you?

MM: I think I missed the fact that it’s in a bunch of JavaScript libraries.

MF: It’s in these ones.

MM: Okay. Can I just ask, has anybody here in the room ever used this window functionality in any language? Okay.

DRR: NRO had an example in chat.

NRO: Yeah, I tried to get my example, but I couldn’t find it. I personally tend to not use this library when it comes to JavaScript, just because the cost of adding one more dependency is not worth manually writing, like, two nested for loops.

MM: Okay, so having voiced my discomfort, I’ll just leave it at that, because it’s certainly not a blocking concern.

RGN: I think there is something to it, though. I personally am not convinced by the presence of this function in libraries. It’s the kind of thing where if you’re already doing iteration tools, you might include it, but if it’s also possible that no one is actually using it. Like, what real code is calling `windows`?

MF: I mean, so when you’re operating on values with context, doing, like, look-around, those are the kinds of algorithms that use windows.

RGN: We can definitely speculate and we can gesture at algorithms that benefit from context. They certainly exist. But what I haven’t seen and what I would really like to see is an actual example where someone is calling `windows` on an iterable so that we might be informed about which of these possible ways to handle an edge case makes more sense. I think in practice, it’s more likely that the needs are varied enough that people are approximately always just writing their own, that they’re not actually using a `windows` helper, even though they are using algorithms with context. And if that’s the case, this is not a blocking concern for me either, but I would feel more comfortable if `windows` is only included after such discovery. `chunks` is good, but `windows` seems more like filling out a grid than actually serving a real need.

DRR: We have three minutes left, so let’s try to get through the queue.

SFC: I posted a link in Matrix to about 15 different call sites where we use the dot windows function . You can see what the different use cases are. Very often it’s using over a sorted list where you need to check variants, but you can see the full list there.

KG: Just an example of a case that I have used this functionality or equivalent functionality by using the index parameter for arrays is when you’re doing people optimizations. You’re looking for a specific pattern of, like, you know, you can combine these two operations into one other operation or something in a stream of flight code, so you need a little additional context and you just want to scan the whole thing looking at each pair of operations, not, like—not in the way chunks does, but in the way windows does. This comes up pretty often. That’s just an example of a use case I’ve run into, but basically there’s many examples of that. Any time you need context, you need this function.

LCA: Yeah, this is not a very exhaustive bit of data, but I just did a quick search of GitHub and Rust for the chunks and windows function in the standard library, and chunks is used 90,000 times in public repositories and windows is used 41,000 times in windows repositories, so they’re both in the same magnitude of order of use. I—yeah.

CM: Not exactly a JavaScript application, but just in terms of general usefulness, this kind of thing comes up a lot in certain image processing applications, where you literally need to scan through imagery, a lot of image sources are serial data sources. Sufficiently useful that in my own history, I’ve been involved with projects which actually had to implement exactly this API in hardware. So I know it’s useful.

DRR: I guess my input is that I just have a preference for 1 or possibly 2, but recognize that, you know, opting into the I want a smaller chunk behavior is not always possible if you don’t have a collection or an iterator that can actually get its length.

MF: It sounds like we’re leaning in the direction that I thought that we were going to go, which is probably we should provide both number 1 and number 3 here as two separate methods. So given that, I do not have prepared pull requests for every combination of options that we had, so that means that I will go back and revise this proposal to have both of those. I will be happy to take, like, naming suggestions and I’ll be inspired by what exists out there in the libraries and languages that I reviewed.

MF: If anybody would oppose such a direction, I would like to hear it now. It’s not a commitment to going that direction, of course, but I would like to hear now so I don’t waste my time doing that work.

JHD: So I just threw an item on the queue. I don’t actually have a strong preference between separate methods or as a parameter. But, like, I can—every two minutes, I can go back and forth on which one I lean towards, so I was wondering about the committee’s thoughts on those two options. Obviously you could make pull requests for both options, MF, and we could talk about it at the next meeting. With you if we have a sense there’s a direction we should go in that way, we can skip the rigamarole.

MF: I would prefer not to do double work again, and I have a preference personally for the separate methods over the parameter, just because it eliminates that “what was that parameter name or what was the possible parameter?” They’re two different methods and they’ll auto complete in the text editor.

JHD: The argument is auto complete as well. Like, it pops up that, like, the description of what the parameters are and stuff.

JHD: Well, maybe we can do some offline discussion versus the methods versus parameter,

### Speaker's Summary of Key Points

- The iterator chunking proposal has had several open design questions which are holding back further development
- In particular, distinguishing between

### Conclusions

- Option 1 (yielding no windows) and Option 3 (yielding undersized windows) are both useful for different use cases that we care about
- The justification for a windowing operation was confirmed again by various delegates
- MF will adjust the proposal to split `.windows()` into two methods
- Feedback on method names can be given on the proposal's issue tracker

## Continuation: `Math.clamp` for Stage 2

Presenter: Oliver Medhurst (OMT)

- [proposal](https://github.com/tc39/proposal-math-clamp)
- [slides](https://docs.google.com/presentation/d/16_9rFqG9Dz8IF339VNExe4rGzMA3ZVXhahng_nT3RnY)

JHD: So my general feeling about minus zero is that the way JavaScript treats it per IEEE is confusing and bad, and it sucks that we’re still constraining ourselves to something whose impact and importance I think we’ve long since surpassed. But I recognize that that is probably not a popular opinion and that if WH for sure and others perhaps apparently are not going to allow the concept of -0 being less than positive 0 to stand, so I must, like—like there’s no point in continuing that one.

JHD: The min less than max thing, I definitely think that that can be resolved within Stage 2. I’m told that everyone agrees with that, or that can be altered within Stage 2, so I don’t care whether we keep that throw or get rid of it for Stage 2. I might care for 2.7, and we can talk about that another time.

JHD: But I think that the whole spirit of the let’s stop coercing thing, in my opinion, is when people do thing that are nonsense, we should throw errors. We shouldn’t try and do a best guess as to what they want. And if you pass—like, the string `substring` method does something completely insane. It sorts its arguments. 7th if you pass them in the wrong order, it just tries to fix it for you. And, like, I think that if somebody calls clamp with a min that is not less than the max, it does not make sense at all. Like, and I think C. C’s behavior, we should always completely ignore because the argument order is bonkers and so on. So, like, I just—I don’t—I would be very interested within Stage 2 of trying to restore that min/max behavior, the second stub—you know, chunk of items here. But I reluctantly must accept the first one, and that’s my piece.

MM: So given that answer, I think we all agree that `clamp` has reached Stage 2.

JHD: Sounds good.

MM: Okay. Thank you.

JHD: Thanks, everyone, for giving me the chance to speak my piece.

OMT: Did we officially get advancement this meeting?

RPR: Yes. I think we should do a last final check, but JHD’s made it clear that he’s—oh, sorry, I think you’re in favor of advancing?

JHD: Yes.

RPR: And as has MM. We didn’t actually officially call for Stage 2 before, so just want to check now if we have any other messages of support or opposition? I’m not hearing any opposition, so congratulations, OMT, you have Stage 2.

OMT: Thanks.

### Conclusion

- Stage 2
- `Number.prototype.clamp`
- min of +0 and max of -0 should not throw
- need to work out handling of NaNs with WH and JHD
