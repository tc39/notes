# 14 July, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Istvan Sebestyen     | IS             | Ecma International |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Jack Works           | JWK            | Sujitech           |
| Josh Blaney          | JPB            | Apple              |
| Chengzhong Wu        | CZW            | Alibaba            |
| Devin Rousso         | DRO            | Apple              |
| Philip Chimento      | PFC            | Igalia             |
| Jamie Kyle           | JK             | Rome               |

## Ergonomic Brand Checks for Stage 4

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-private-fields-in-in/)
- [slides](https://github.com/tc39/proposal-private-fields-in-in/issues/7)

JHD: So, as a quick refresher, class fields is a stage 4 feature. However, if you would like to determine if an object has a private field, currently you have to use try-catch. This proposal gives you a straightforward boolean check of whether a private field is in an object and that includes fields, private methods, and private accessors. The proposal is stage 3, and I have all of these checkmarks here to measure progress toward stage 4. So, as of this morning, Firefox version 90 is available, and Chrome 91 has been available for a while, with this feature. The feature is also in Webkit Nightly and should be in the next Safari Technology Preview, which I believe will make it into the next full version of Safari. (But of course, Apple never discloses that before it's released). It's in node as of v16.4.0. It's been in Babel for a while; it will be on by default with the env preset as soon as someone releases the package and merges the pr, which will happen after this feature gets stage 4. The pull request to the spec exists and is approved. test262 tests also have been landed. And so based on all of that I believe it clearly meets the criteria for stage 4 and want to ask the committee for consensus for that.

BT: The queue is empty.

KG: I'm in favor of stage 4.

WH: I approve of this.

JHD: Awesome. Thank you, everybody.

### Conclusion/Resolution

Stage 4

## Accessible Object hasOwnProperty update

Presenter: Jamie Kyle (JK)

- [proposal](https://github.com/tc39/proposal-accessible-object-hasownproperty)
- [slides](https://docs.google.com/presentation/d/1UbbNOjNB6XpMGo1GGwl0b8lVsNoCPPPLBByPYc7i5IY/edit#slide=id.p)

JK: This is just a stage three update with the accessible Object.prototype.hasOwnProperty.call, Otherwise known as Object.hasOwn. A super-fast explainer: hasOwnProperty is not reliably accessible due to things like Object.create(null), so stuff like Object.prototype.hasOwnProperty.call is common, but also requires lots of understanding of what would the concepts all at once for new users. So with that in mind, there's a lot of libraries that popped up like, has and low has that make hasOwnProperty easier to use and they have billions of NPM downloads. Object.hasOwn with an object and a key mirrors hasOwnProperty.call with a key to make it accessible. and they are identical and besides one minor flip of the ordering of ToObject and ToPropertyKey steps fixing what was supported for legacy in hasOwnProperty.

JK: Status, there is a prepared PR, there is the 262 tests that's already been merged. In terms of applications, it is implemented in V8 behind a flag. SpiderMonkey has implemented, but only in nightly builds, and it seems like WebKit is implementing. It has been some notes in the public issue, tracker, not sure what the state of it is and it's also been shipped into other implementations of JavaScript in Serenity and engine262. There's also been a couple of community contributions. There's Object.hasOwn on npm, it's also shipped in core-js. So it's inside of the updated version of Babel polyfill. I also implemented this codemod that helps people migrate from the many different ways, the libraries that are used today and how they can refactor, I've been getting some community feedback from this channel. That was very successful. And yeah, in terms of the feedback that we received, there's a github issue tracking it. But no new problems that would block the proposal have come up, mostly just feedback on what has already been addressed. Overall there’s been a lot of excitement. People have been using the polyfill successfully and lots of people are on the latest version of coreJS shims. just check some dependabot updates and it seems to be working for people. So, in terms of the stage 4 requirements, the pr is ready, tests are ready. It's implemented in two browsers but feature flagged so still waiting on that for a check mark and we're getting more polyfills and the plan is to seek the stage for pending feedback from browsers. And before any questions, I just want to thank everyone who has been involved. This is my First TC39 proposal. So really thank you to people who are very helpful. So thank you, everyone.

SYG: V8 in Chrome has actually already shipped it. It's just riding the trains right now and will be in 93, which will be stable at the end of August.

BT: Any other questions or comments? `[silence]` All right, I guess we're all happy with the progress. Awesome.

### Conclusion/Resolution

No changes sought or made

## Import assertions update

Presenter: Dan Clark (DDC)

- [proposal](https://github.com/tc39/proposal-import-assertions/)
- [slides](https://docs.google.com/presentation/d/1GE5BeW0S4avaOikOB9XfXdE75rmt8MHOylIe3w4FPFA)

DDC: proposal is allows information aside from a module specifier to be passed in a module Imports via this new assert syntax and the purpose of these asserts are not really to affect the host interpretation of the module, but just for the host to decide whether or not to fail the import via some additional checks. And that's like the flagship use case for this is with JSON modules, where hosts like the web might import resources externally but they don't have control over the contents of the resource and they don't want any surprises where they think they're importing JSON content JS where that's sort of a privilege escalation. And so we want them to be allowed to allow them to assert the type of a module so that it doesn't change surprisingly.

DDC: and one question that has come up with this is what to do with unsupported module types, like a module type that the host doesn't know what to do with, like, note the typo ("jsonn") in this example. Hosts have free reign to decide what to do with this. Whether it's a fail, it to ignore it or something else. HTML, the web is always going to fail the module graph if there's an unknown type of solution present, basically, for security reasons, around aforementioned like Escalation of privilege type issues. And so there was a question of whether we should standardize that behavior of failing on unrecognized module types, because that would drive further alignment among hosts. For example, it might be nice if a typo, like the one in this example, would always fail rather than, like, being ignored in some hosts and not others. And so one suggestion of how this might be done is like we could just have hosts provide a static list of the types that they support and ecmascript on the ecmascript side will enforce failure if there's some type assertion present that isn't in like this list of types provided by the host that is supports. And so, this seems to work pretty well for the web because like the web is going to have a static list of types that like we might add to it over the time over time via spec changes but like there's no loader hooks where types can be added dynamically. So it seems pretty straightforward to just ban unknown types. However, the problem with this that came up last time, this was discussed, and during an intermediate SES call, is that this type of (?) restrictions are problematic for hosts like Node.js, for example that have lie loader hooks where a Node author can come in and Define, new module types, and define transformations, between module types. So the list of types supported by the host can change at runtime, kind of arbitrarily in such an environment. It's hard to really say, what an unrecognized type even means because like host might support some default set of types, but at the point where user authored JavaScript can change that. It's hard to have such a restriction on what types are supported and what aren't is kind of hard to be it be a limitation on what those hopes were capable of. And there were concerns about that limitation. And so it's not clear to me. I don't really see a path forward with introducing a restriction like this without breaking these kind of scenarios for these hosts. My preference is kind of just leave the proposal as it stands which is the hosts are just up to able to do whatever they like with module types that they don't support. There are some alternatives we could consider, which is like maybe we could try something in prose, that could be a strong enough statement to be useful, but doesn't force problematic restrictions on hosts like node. I've seen other suggestions in the thread along the lines of like environment specific types, where an import would have an additional key that specifies the environment, and there's a set of types that goes along with environment, but I feel like environment specific types kind of gets us further from that goal of having having code that works in multiple environments, to the extent possible, which I think was one of the original goals of introducing such a restriction, like this. And maybe there are - maybe others have ideas for other ways to restrict behavior of unknown types without placing undue limitations on environments with dynamic types of module type systems. But I don't really have anything to suggest there, so leaves me wanting to eventually ask for consensus that we leave, the proposal just as is currently but I suspect that like there may be concerns with that.

DDC: So I think I'd like to go to the queue at this point and get thoughts. Like are there other ideas for having some kind of useful limitation here or is this something that we're okay with? Just going to dropping after learning about these concerns from other hosts.

GCL: So from, from the requirements that node has, as long as the spec doesn't say something like an implementation must declaratively know what types it supports, you know, something like where you're like putting it at the limitation on the specific way that the implementation determining whether or not it understands what a type is, you could have something that says the host should throw. I don't know exactly what the text for that would look like, but I don't think this is inherently like something that node - like I think it's reasonable to say that within any like VM context you could add new types but also unknown types could still throw. I think we could get to text that does that, but I'm also fine with leaving the proposal as if I just wanted to mention that.

SYG: I just want to clarify, Gus has a point about "declarative". Do you mean, Declarative in the sense of the host of the new host hook where it would upfront get the static list of supported types that Dan was talking about. Is that what you mean by declarative?

GCL: yeah, I mean, in terms of like how those that that spec language translates to implementation, it's usually less restrictive anyway just because of the way that the engines are implemented but I'm just I'm you know as I think that this behavior I'm just saying I think this behavior could exist in a way that is more standardized and also allows, you know, nodes sort of dynamic thing that it does. When I would, I just wanted to say, I don't think that should be considered like a blocker. If we do want to approach this.

SYG: Well, what would you - how would you define "unrecognized" given what Dan has said about how it's not entirely clear what "unrecognized" means when it can be extended at runtime?

GCL: I mean, maybe you could have like, a "host Is type valid" that accepts the module and the string type and then returns true. If I haven't dug into it too much.

SYG: I'm not asking a spec question for how to write this in the spec. I'm just asking for intuition, I'm not a node expert, what does it mean to be an all recognize module type in node with this runtime extension? That's possible? if tensions were on, And it's still not handled, handled. Then it's unrecognized?

GCL: Yeah, in the current API, it's completely imperative, right? There's no - V8 doesn't check back on whether or not the type is recognized. So it's hard to say what it would look like in sort of a concrete implementation. But I think it would be a thing that we could do if we wanted to undertake that effort.

SYG: Okay. Well, given that it does sound like I agree with Dan in that.I think I'd rather just leave it with the status quo of deferring to hosts.

BT: Any other thoughts on the topic? `[silence]` Looks like no. All right. Feel free to continue.

DDC: Yeah, I know, there might be some others that aren't present here. That might also have thoughts on this end. Uncertain, whether this is the right time to like, ask for consensus on sticking with the status quo on that.

KG: I mean, you never need consensus to stick with the status quo; the status quo is what happens in the absence of calls for consensus.

DDC: Okay. In that case, I think. Yeah, I think I would also prefer to just leave it like that. I'm kind of also questioning the specifics of what it would look like to have to say, what an unrecognized type would look like. In this with without knowing more, like also not a node experts unless we have something very concrete there that we could that we could say, I'm not sure. I'm not really sure how to move forward. So yeah, I guess in the absence of that I think I think that would be it. I think we'd just leave it as is.

BT: There's a couple new queue entries here, I'll do MM first who doesn't need to talk. He says, deferring to host, is (?) so the status quo is fine. Thank you, Mark.

IID: I actually meant to get in earlier, but I just wasn't clicking fast enough. So one of the think there's kind of two different reasons that we would be interested in having some sort of restriction here. One is like the error catching reason where if you have a typo when you're trying to assert the wrong thing that we can warn you about that and the other is trying to maintain some level of compatibility between node code and web code. And I don't get the sense that there's a lot of appetite, and Mozilla is not interested in pushing on the idea that node just shouldn't be importing all of these different kinds of module types. But one thing that was brought up in internal Mozilla discussion, I think it's been mentioned in the issue, was the idea that there are we should identify certain words like "HTML" or "JS", like module types, that would be very confusing if anybody was ever trying to use them on the web and then just preemptively blocklist those as invalid words in the context of this spot, even within node, and we could figure out what those were, just to keep the potential weird, confusing compatibility constraints to minimum.

DDC: I would be open to something like this. I think we talked about something like this, Like you say, we talk about something like this before. I'm kind of just - like a suggestion here is basically just like a block list of banned strings. That is kind of agreed upon by people here like to reserve space for that, but then discussed before is like the slide, like should we ban like I'm trying to imply, could trying to assert JS, JavaScript that type of string just like instead of to prevent that sort of Working in some environments but not others or yeah or like reserving types of HTML. So yeah, kind of a weaker weaker version, a much weaker version of the HostGetSupportedTypes. I'd be on board for something like this, but I'm not sure if there's still some concern about like, what about if in node like I want to implement a loader to support some of these types? Like do we - I guess we could just say that would banned. I'm definitely not opposed to such a thing, like there's been like one issue that's come up in the (?) when this sort of thing has been discussed is just like how do we Define the set of banned strings? Like, should it be some kind of informal registry? Is that something that would be standardized? In this committee. I welcome thoughts on that. Probably the most straightforward thing just seems like whatever we could reach consensus on banning here in such a blacklist but that's kind of all I have to say to a moment.

GB: I just wanted to follow up on the previous topic. Because this is effectively a host invariant, I was just looking at the wording here. It says each time for host gets supported importance assertions each time this operation is called it must return the same list, instance, with the same contents. Does that mean effectively that this prohibits host, virtualization of this list, or variation of this list within the same host?

DDC: Yes. And I think that's a lot of the source of the original concern. So yes, it definitely does. And like that, I guess the natural follow-up question is like, what if we remove that last restriction, like could the host return a different answer when it's asked different times, Like, based on like what the loader, what custom loaders say, and I guess that kind of goes back the discussion between, I think exchange between Gus and Shu. think that it's kind of a question then is like how it goes, what does node in its implementation of such a hook like say for what hosts are currently supported like that? It's a question of like, do we go through all of the loaders? Like we go through all of the hosts hooks and like the custom author JavaScript and say, like, do support this, do you support this and then if it all falls through then we don't add it to the list. Like it's not kind of it's not really clear to me what that would look like.

GB: It almost feels like you'd want some kind of second argument, which is a realm, or compartment, or something, that kind contextualizes the load to allow some kind of virtualization, but perhaps, it could be possible to leave that door open somehow to be clear that the extensions for virtualization could be permitted in the future.

SYG: I apologize if this has been answered somewhere and I forgot the context here. So is the concrete proposal that you have on the screen right now basically to reserve - it seems like we'll come up with some set of types that could be reasonably construed to mean JavaScript. And we will ban importing modules as JavaScript modules with any of those types. And the only way to import a JavaScript module is without a type assertion, is that right?

DDC: Yes. Like there's just a list of strings that we consider that it just be like these would be an automatic fail the import if any of these strings that we come up with -wWe kind of brainstorm a list of strings that might be construed to be JavaScript and we would fail the import if any such string is present.

SYG: I just don't understand the use case for why we want to do that. It's to prevent confusion? Interop?

DDC: Basically. Yeah, like interop between hosts. Like to reduce instances where like some host might allow Imports of JavaScript with asserting the type of JavaScript and like, have it the same, or some host might treat that as basically there being no type assertion and then some other host might say this is an unrecognized type assertion so I'm failing it and so there just might be some minor confusion. But it with the fact that that like Works differently between those two different hosts like is less portable because of that. So maybe slightly increase the portability of some code, it's not some massive actually, like you use case, not some massive thing. We need by see this kind of a nice to have.

SYG: Has it been discussed that we reserve one for JavaScript? Because otherwise, it means you have to always use different syntax to import JS.

DDC: I mean that would be another alternative that I think could allow, like, it could be say allow asserts type equals JavaScript's. That that's basically the same thing as not having the type of solution and then the rest of the set of reserved strings is banned and causes a failure. I think that would also be reasonable. We'd also I think at some point has been discussed that like, like we discussed whether or not a "type JavaScript" assertion should be supported and I think we'd elected not to because it's better not have two ways to do the same thing, but I think it would be reasonable to allow one such assertion. It's just in any case not - I think that's almost a separate question like whether something like, like, this should be allowed is like one question of whether that's a type of solution that should work in say the web and then there's kind of a separate question of whether we should have a block list of all the types that aren't that, or like all the types including that.

SYG: Yeah, I think I agree that these are orthogonal concerns.

JHD: I don't think there's any way we can phrase this that won't be relatively trivial to bypass. If we have a list, then someone will come up with a new way to mean JavaScript, right? Like JS, JavaScript, jscript. I don't know. Someone will come up with something, but then like, if it's if we do the like prose option, I mean Source Text Module Records, I can make my own kind of module record as a host that is a source text module record but with some optional trivial difference, which means effectively, includes all sorts text module records and then I can bypass this assertion entirely and still be in compliance. So, like, I think that on some level, I don't think any host is likely to do this, and if they do they wouldn't be able to leverage almost all the code out there that's using no assertions to bring in JavaScript. So like it kind of seems - it seems very unlikely to me that without a restriction this would become an interop concern because I can't see enough people using such a host with that assertion. So it kind of seems like the way things are is ideal.

DDC: I think I followed you until the very end. The first part of that I kind of agree that a determined host could get around this if they wanted to. But then like you were saying in practice that they might probably not want to do that because that's going to be like, why? Because you're going to have those sorts of interop issues. Could you restate the conclusion?

JHD: So My personal intuition here, and obviously I could be wrong, is that if a host chose to make this JavaScript assertion required they would quickly find themselves unused by the population. And if a host decided to make it optional then authors of those modules who used it to import their transitive dependencies would quickly find their modules going unused by the larger population. My suspicion is that anyone attempting to allow this sort of thing is not going to gain enough popularity to then be an interop concern.

BT: All right, the queue is empty.

### Conclusion/Resolution

No changes sought or made, general agreement on the status quo

## Decorators update

Presenter: Kristen Hewell Garrett (KHG)

- [proposal](https://github.com/tc39/proposal-decorators)
- [slides](https://slides.com/pzuraq/decorators-update-2021-07)

KHG: So yeah, my name is Chris. I'm here with a quick update on decorators today. Basically, the tldr is, the spec has been written and the decorators champion group has achieved internal consensus on all of the details. In this presentation, I want to go over the proposal just as a broad overview, kind of the general design principles and the way that it works and then I wanted to talk about the current status.

KHG: So first off the proposal overview. So decorators in This proposal are plain JavaScript functions, so no, custom syntax, no new types of elements or anything. Like that, unlike the static decorators proposal that came before. And as in previous proposals, they can be applied to classes and class elements. They have three main capabilities, which is the way that we've kind of distilled them into some design principles that should make it pretty intuitive to understand what decorators are capable and what they should be in general. And those capabilities are Replacements, Metadata, and Access. In addition, there is a notion of modifiers syntax which is the ability to prepend a keyword on to the invocation of a decorator as seen here in the last decorator in this example on the right (`@init:`). Modifiers add additional capabilities to a decorator if the user chooses to opt into capability. But default decorators are not able to do what modifiers are able to do because it's basically like opt-in if you want that extra cost, that extra capability, otherwise don't incur it for every single user. And the only modifier that is included in this proposal is the `@init` modifier, which we will be going over in a bit. Also, this proposal includes a new type of class element, which is a Class Auto accessor, an auto accessor is very similar to a field, and it is defined using a new access or keyword which will go over as well, on.

KHG: Okay, so, so first off, let's look at the decorator function API, what it looks like generally. Generally decorators receive the value they are decorating as their first argument. So that's the input value, if they're decorating a method, it'll be a function, if they're decorating a class, it'll be the class constructor so on and forth. The second argument is a context object. This object provides just general context about the value that is being decorated. So what kind is it, is that a class, method, field Etc. What is its name? If it is class elements, the name of that class elements. If it's a private element, the spelling of the element for debugging purposes, but not for any access purposes. And so on. It also has information like whether or not the value is private, is it static, and then also the ability to get instead metadata and add initializers which we'll talk about later on. The return value of the decorator is the replacement value, the value that replaces the decorated value, and this is optional for all decorators, you can either return a new value or you can do nothing and that's completely fine. The types of the input and output values are dependent on what is being decorated. Of course, I'm using typescript here just to kind of show briefly what the API looks like in general.

DDC: Let's dig into the capabilities of decorators. The first one, as I mentioned before is Replacement so decorators may replace a value that they are applied to with another value. Of the same type. This is the primary capability of decorators, so class decorators return, into class method, decorators can return a new method. The one exception is in a somewhat of an exception is field decorators. You might expect that field decorators would for instance, receive the initializer of the field and return a new initializer, but the constraints for performance reasons on the proposal was that could not do this because capturing the initializer would allow too much dynamism. So instead they are pipelines, so when return a new initializer from a field decorator, that initializer will receive as its first argument the value of the previous initializer. So you can then transform it or add on to it for each field that is initialized. Crucially, in this proposal decorators cannot replace a value with a different type of value. So they cannot turn a method into a field, a field into an accessor, or so on. So that reduces dynamism and reduces the ability of decorators to change the shape of a class. And in addition they cannot add, remove, or replace any other values other than the decorated value. And this is both important from like a just static analysis and performance standpoint, but it's also important from a user/developer experience standpoint. Previously decorators could do all of this and you could potentially have a decorator that would affect every other element on a class except for the one that was decorating. Something that would be counterintuitive to the user. Now users can look at what a decorator is applied to and have a general understanding of what that decorator is capable doing whether or not It's replacing a value or so on. So that limitation really helps to inform users what that decorator is doing.

DDC: Next up, the second capability of decorators is the ability to add metadata that is used by generally other, like readers in libraries that are associated with the decorator. One example, case is a validation library where you might add a number of parameters, validation parameters to an element. Like if it is a string, if it is a number. And then later on a validation function, will read those that metadata and then perform the validations. So Meta data is accessed on the class Constructor via symbol that metadata and the instance depending on whether or not it is static or not and it must be namespaced under a symbol. So this helps us to prevent collisions, which is something that's very common in the ecosystem, if people are sharing the metadata system if they're using string Keys, it's very easy to accidentally use the same key as another library. So just requiring symbols here prevents that from happening. Finally, metadata is also inherited. So that dramatically simplifies a lot of use cases, and really makes it a lot easier for most of the cases where metadata is being used. One thing to note here is that metadata is inherited statically, meaning it is done once at the time that the class itself is defined. This means that if a user were to, for instance, set the prototype of that class to a different value later on they would have to update the [transcription dropped for ~20s]. And also it is overall simpler from a mental model perspective versus something that tries to do the inheritance dynamically.

WH: Re: the slide, you could run `validate` on an instance of `MyClass`?

DC: Yes, you could do that.

WH: And where does `​​obj[Symbol.metadata]` come from? Every object has a binding of metadata now?

DC: So if the object has a decorator that adds metadata via context.addMetadata, then that creates an object at the end of class, create a class definition and assigns it to the symbol table metadata property, property. So done So it's done at a specific time during Glass construction and only done. if, if the metadata was added in the first place, if no metadata was added during definition, this will just be an undefined property, it won't be defined at all.

WH: Does that live on the object or on the prototype?

DDC: it will live on the Prototype but it is inherited because it's on the Prototype, it's just standard object prototypical inheritance.

WH: Thank you.

DDC: So the final capability that decorators have is the ability to provide access. So access is just ability to access that value by any collaborative code, that works with the decorator. And this access is usually provided via metadata. With public fields and methods and so on, it's pretty easy to see how access is provided. You get the name of the field or element and you can then friend code of some kind can then access that value, but with private values and methods and so on that is much trickier, right? Because there generally isn't a way to do that. So on private elements receive a special access object. This access object contains a get an access function and those can be used to access the private slot that contains value to get it and set it. This is useful for cases, where you might want to expose a private value, for instance, for tests such as this one, another common use case is for dependency injection. So the ability to inject a dependency on a private field that class might depend on, but not want to expose to other code in general in the world.

DDC: So yeah, those are the three design principles, three capabilities that decorators in general provide.

SYG: I have a clarifying question on the previous slide is line 14. `let { private }` - is that supposed to be access?

DDC: Yeah, I think it needs to be (?). For every symbol that gets defined on the metadata object, there are private metadata and public metadata. And the difference is that public metadata is named, it has the name of the elements that it was defined on, because that's a meaningful thing with public elements and can work with inheritance for instance, but with private metadata, the name is not really meaningful in the same way. So the private metadata is stored in an array that you might have to do something like search through. In this case, you would just search through to find the spelling "name" which is set up here. I think I might have actually messed up the previous slide - nope. So, that's how you would access the public values. It is a little bit in depth if you want to check out the readme for the proposal, it goes into much more detail about how that system works. And talks about the various trade-offs there and what not.

DDC: So moving on, next up are decorator modifiers. So like I said before, modifiers are the ability to prepend a keyword to the Decorator itself in order to give an additional capability. And this was really the way that we figured out how to solve a common use case, which is the ability to add initializers to class elements and classes themselves. Actually initializers be at in a keyword adds the ability to add initializers to the elements and those initializers run for any.

I'm sorry to interrupted, I think Mark had a question about previous slide. And since you're taking questions in the middle, I might just do the queue now. I know Jordans on the queue as well.

DDC: That's fine. I'm okay with that answering questions.

MM: Yeah, so when you do the decorated private field, does the private field still provide the actual storage for the private field value, or do the get and set provide - I think I'm a little confused here. The definer of the decorator can provide a getter and setter for the private field that provides the storage instead of the private field?

DDC: So, the getter and setter can be called with an instance, you have to do (?) call and instance and they they are functions that can the private slot on the instance and set the private slot on the instance.

MM: Okay? So the privates, lot of the instance still exists and if it's still where the private value is stored,

DDC: yes, it does not to change the shape of the class in any way and it doesn't change the way the class works at all. If you don't use the access object or those functions, then nothing changes at all. It's like they were never there. Using them is just a way to access the values in a separate way.

MM: And if the getter and setter is applied to anything other than an instance, it throws?

DDC: it should. If that's not in the spec then I should definitely add it. Any other questions?

JHD: Yeah, it was a couple slides back where you're showing the decorator function interface. Yeah, here you go. I was just curious if the context access set function, can that ever fail, or it was that only there on a private field and so like it should never fail.

DDC: If it is called on an instance of the class, because the class should always have that, it should never fail.

JHD: It should never fail, but if it's called instead on something else, so it'll either throw because the field isn't on the receiver, or it will succeed. Is that correct?

DDC: Yes.

JHD: Thank you.

DDC: So, back to modifiers. So basically initializers run during class construction for class elements so they can do things like, for instance, in example, they bind the function to the instance. So this is a pretty common ask for decorators, the ability to kind of auto bind functions that you might want to use as a callback, for instance. So, this is how you would do that. And the other use case is to run for classes is to run after the class has been fully defined, meaning after static fields have been assigned. This is something that has been a topic of some debate on the decorators proposal, but essentially decorators themselves run before static fields have been assigned, meaning you can't actually use those them in the process of decoration. so, having class initializers, which run after everything has been defined, cannot change the class. They can't rebind the value. They can't return a new class Constructor solves that use case. So yeah, any questions on that one?

WH: Does a decorator need to be either one or the other? So an init decorator cannot do the normal decorator things — am I understanding this properly?

DDC: No, actually. So at in it prepending, at an it adds the capability of adding initializers but the decorator can still do anything that a normal decorator can do. It just gets this extra function on the context object and that function can be called to add this additional initializer. The reason for having this as so that we don't have to incur the cost of checking for initializers for every single decorated value.

WH: Okay.

IID: all right, so there's a common source of bugs in engines where we add the ability to run user code in between steps of an operation where it was previously Atomic, and then we have some optimization somewhere that implicitly assumed that it was Atomic and that intermediate State couldn't be observed. So, like one place where this bit us in the past was Getters and Setters. and I think the answer to this is no, but I just want to make sure that I'm correct. Does this proposal introduce the ability to execute user code at any new points or is it just more sugar over things that you could currently do by writing things yourself? Like the polyfill has the same behavior or are there places where we will now be able to execute user code where that was previously not the case.

DDC: I think there are places where user code would execute that it previously was not the case. So, for instance, In the bound decorator case, Let's say you were doing this to a class field the class field would be fully defined and then at defined on the instance and then the initializers would run immediately after that, which gives the user, the ability to do things for instance, like make the field change to readable, or rather, not writable or not configurable, stuff like that which they would not be able to do previously. So I think that would be a new place. Does that sound correct?

IID: That seems plausible. I'd have to look at a little more closely. Would it be possible for the proposal to sort of figure out what the list of places, where new things are happening, just so that it's possible for engines to - this isn't a pressing concern because it's not going to be particularly relevant until we implement. But yeah I think it's an important thing to think about.

DDC: Absolutely. It is I guess, implicitly there in the spec we can also add an explicit list and I also think it is - actually, if we have static blocks, I don't know if - no because static blocks only run during the class. Okay. Yeah. The short answer is yes. Yes, we can.

IID: Thanks.

DDC: Moving on, so that's modifiers. And then, I also mentioned previously that we have a new type of class elements, so auto-accessors are basically like a class field, but instead of being defined on the instance, they are sort of defined on the prototype, a getter, and Setter are defined on the Prototype and that backing, that getter and Setter just basically access backing storage on the instance, instance, which is a private slot. It is quite similar to this [slide] in the spec, like these are basically equivalent. The purpose of this, there are a few purposes. One is to provide some syntactic sugar to do something that users. Do occasionally asked to do these days which is making a field on the Prototype users might want to do this to make a field not enumerable, or for any other number reasons. But also its so that we can have a value that basically works like a field but can be decorated and allow the decorator to intercept access so intercepting getting and setting and that allows us to do things like provide reactivity to that field, to that value. And allows us to do things like validate the field when it is set, to run code when the value is being set, lazy dependency injection basically requires this well. The ability to look up the value lazily the first time it is accessed, you need to have a getter there and so either, you have to decorate an accessor or you have to decorate a field. And this kind of is in between for those two. The idea is also that this could potentially be extended in the future with a more general syntax which Ron Buckton has proposed. There's a link to the proposal here. I forget the exact name of the proposal, but I definitely am excited to see where that goes. But it's out of scope for this proposal.

DDC: Okay. So that's an overview of the proposal. Any questions about auto accessors?

BT: There are a few questions on the queue, but also just a quick time note. We're down about eight minutes in the time box, I believe. So try to be brief.

JHD: So two questions. The first was with the auto accessor feature that you described here, would this a viable standalone proposal, that could move independently as long as it was faster than independently of decorators and have value on its own, or do you think it only has value with decorators?

DDC: I think it could move independently on its own. I definitely think that there are a lot of existing decorator use cases that depend on the ability to intercept access on fields. So either this proposal would have to kind of really be concurrent or ideally land first, if it were to be a separate proposal.

JHD: Okay. And then the second question was with your "similar to". I was curious how faithful that sugar was. In other words, will the getter throw if it's called an object that isn't it? Like the didn't run through the constructor? You know like where as if it was a private field like your line 6 through 16 here will throw if the receiver lacks that private field. So I'm wondering if the auto accessors works the same. Then if so, how would I determine in advance without a try/catch if the accessor is going to throw or not?

DDC: That is a great question. The second one, rather. The first one is the answer is it will throw, I believe, because in the spec we back the field with a private slot, it uses all the same mechanisms as a private field. For the second question, I'm not too sure. I think you would have to use a try/catch. I'd have to think on that or what it means that like General concern,

JHD: there is the proposal I discussed recently that just got stage 4 is that I wanted to determine if something is going to throw or not with the `in` keyword, so that works for private fields now. But in this case because it's sugar for it, there isn't a special way to refer to it that would work within and tell you if it's going to throw or not. Because if did some value in an object, it'll just tell you if the accessors, you know, if the property is successful there, right?

DDC: I'll think about that a bit and also think about it if there's some way for us to have auto accessors work without using a private slot. I don't think there really is, but maybe, maybe there's something we could do that. I'll think about it. Any other questions?

RGN: Yeah, that slide about init. We had the init: prefix. Did I correctly understand that the justification for having that special syntax in order to add the addInitializer capability was performance?

DDC: Correct, the ability to add code that runs on an initialization was something that was considered blocking previously if any decorator could do that basically because that fundamentally changes the shape of the object, Initialization. So that was why we made this design?

RGN: Do we know that's still a concern? Because looking at it, I don't see the areas where this would deoptimize. and I'm just interested in, as the proposal has changed, has that assumption or constraint been reverified.

DDC: It is not been re-verified by anyone from the actual engines or maintainers there.

SYG: So I think so? without the add initializer function, you have things that don't - the decorators that are not in it, do not have access to the instance to do whatever it wants, right? That was kind of part of the, the Restriction

RGN: It looks to me Like it's just adding a function that could be used or not used. And I'm wondering about the alternative in which that function was always available. To be used or not used.

SYG: Oh, I see. Well. Okay. So the thing is, it's probably not as big a deal as before, but the nice thing about the current shape is that, because at in it is syntax, then you obviously know - do I need to It's a possible that I have initializers. Do I need to allocate space on instances or on the class itself to store initializes fields? without that, you would need to admit extra storage and like, you always need extra storage, I guess. And probably you would also need to check run time were any initializers added? If so we need to bail out of some stuff because you know the assumptions about what we thought, the declarative shaped the classes might not hold after any initializer runs.

RGN: If the only difference is, if add initializer was invoked, then you would need to have a spot to store user code for invocation. At the end of instance creation. But also adds the it also adds bailout points during initialization where you check, Are there initializers that we have to run? If it were in syntax, you could make that decision ahead of time.

DDC: During say parsing where you say at the end of the constructor, initializer functions are interleaved with the class elements themselves as if they were class field. So if you have a class field and then a method with an initializer and then a field, it'll run field, then initializer, then fields. And the reason for that is to just follow the, same kind of poor during that class elements like class field initializers have themselves. Although that is something we could consider rethinking. I don't know it's really necessary for initializers to be interleaved or if they could all run at the end of The Constructor potentially.

RGN: okay, I don't want to break it down too deeply but the general question is, does the potential savings of avoiding the cost of determining the presence of initializers outweigh the cost of introducing the syntax. I guess I misunderstood; if it ran on at the end I would be much more inclined to say it probably doesn't. But with interleaving, I can definitely see how that would get messy. So I'm just good to close the issue now.

BT: We are over the time box, but I can give four more minutes to close this off.

DDC: So as I was saying, the current status of the proposal is that the champion group has reached internal consensus on the details of the proposal. As it is, we have written the spec. It's has some comments and ongoing review but for the most part, the general shape of it is there and ready to be reviewed. We built an experimental transpiler which you can see at this website for you and you can just skip the proposal a shot. We're currently working on, On a babel plug-in and updating the current one. And that will allow us to add additional Community feedback with a larger audience. In addition to what we've already gathered. once the battle plug-in is released, and has had some time for people to test. Our plan is to propose for stage 3. And we are currently seeking reviewers for stage three, reviewers in general, and especially from the engines themselves. Definitely want to re-verify all those things, the constraints we added previously and make sure that we match them So so yeah cool. Any more questions?

RGN: Just want to say that I am willing to review.

DDC: Thank you.

SYG: Did you want to ask formally for reviewers or have you already gotten the list of the unit?

DDC: I would like to formally ask for them.

SYG: I will review and I would also bring this back to V8 for basically double checking that all the performance assumptions still are solved by the current iteration.

DDC: Awesome. That would be very helpful.

JHD: I'm happy to review as well.

DDC: Can everybody who's saying that they're happy to review comments on Github?

KG: It will be in the notes.

### Conclusion/Resolution

Stage 3 reviewers: Richard Gibson, Shu-yu Guo, Jordan Harband, Leo Balter

## Array find-from-last

Presenter: Wenlu Wang (KWL)

- [proposal](https://github.com/tc39/proposal-array-find-from-last)
- [slides](https://kingwl.github.io/proposal-array-find-from-last-looking-for-stage-3-sides)

KWL: quick recap, this allows you find some elements or a from end of list to the start. This proposal will be seeking stage 3. No major changes from last meeting. You can see the pr and they are not semantical. All around and behavior changes. The final spec text: [shows text].

KWL: we have completed the spec text, reviewers have signed off, and editors have signed off too. I have to say thanks to everyone. And we have a few implementations: coreJS has had already implemented, there are other polyfills that have implemented, and Chakra has been implemented behind a flag, even if Chakra may not related to the web Compact anymore. For web compat, we would appreciate it if someone could help with the investigation. Thanks, that's all. So this proposal is seeking for stage 3.

MM: support.

JRL: This question affects my proposal that will be presenting on the later today. In your spec text, could you show that on the slide? I just want to call attention to 6.B. We're essentially performing a direct get access without checking to see if the field exists on the array. From the discussion, that's on my proposal for (?) methods. Apparently, es6, methods decided to no longer do that “has” access although flatmap decided to do it. I don't know why. I don't know if we have precedent yet for, we're never doing "has" checks anymore or if we're doing "has" and then "get". I just want to ask if we have consensus on that topic.

JRL: So in have a proposal, which is going to be presenting Group by before, I do the get access at, check to see if the key is in the array. Essentially, I'm supporting holy erased. if the value is a hole in the array, we skip it and go to the next key, whereas, with your proposal, if the value is a hole, you will still call the predicate with an "undefined" value. In es6 methods like find, we are, we're not doing holy checks anymore, we're just getting it every single time and then passing Find to the predicate, however, with flatMap. We check to see if it's a hole and if so we skip.

KWL: I'm not familiar with your proposal, but this proposal the spec test text is basically the same as of existing find and findIndex. So I don't want to change the behavior here.

JRL: Yeah, I agree with your behavior actually. I'm asking for consensus on standardizing on get behavior and not doing has and then get.

SYG: I'm not sure, the queue is an appropriate place to ask consensus for a precedent.

BT: Yeah, like that sounds like something we could discuss the context of your other proposal Justin.

JRL: Sure, but they're both the same topic.

BT: Okay, I think in the interest of moving forward, since we have a short time box here, that seems like a separable topic.

BT: We can try and get that on the agenda if there's time.

KWL: should I...

BT: I think your proposal is good from this perspective. Hax was just pointing out that this is following the find and findIndex precedent.

MF: I probably won't feel comfortable with addressing this topic on that short of preparation.

BT: Justin I think maybe enough you can, you know, give people time to prepare and maybe like put a separate agenda item on the next meeting if that's okay.

LEO: Just want to add, as a spec reviewer I understood that one of the recommendations was to use consistency with find and findIndex, so the current spec is actually good and it's actually recommended this way. I don't want to extend to other discussions on how it is or not. But this consistency, I believe it's intentional and is a recommendation from previous meetings. This is my perception. I might be wrong.

BT: Okay, thank you very much. With that the queue is empty. KWL would like stage 3.

WH: There seems to be a type error on the slide. 1𝔽 should be 1.

KG: Yeah. The spec text is correct though, it's just a typo on the slide.

BT: Okay, are there any more comments for stage 3? Any objections to advancing to stage 3? [silence] I think that means stage 3 KWL, thank you very much.

MM: congratulations.

BT: Yeah, this is awesome. Excellent.

### Conclusion/Resolution

Proposal achieves stage 3

## Guidance for nested namespaces

Presenter: Philip Chimento (PFC)

- [slides](https://ptomato.github.io/talks/tc39-2021-07/index.html)

PFC: This is a short last-minute agenda item that SYG suggested that I add. Coincidentally enough from the context of the previous discussion, this is a request for plenary to give guidance and set a precedent for the situation that we have in a proposal, so that future proposals will be consistent with it. Namespace objects, I think nobody disagrees that they should start with a capital letter. We have Math with a capital M since 1995 probably; and Temporal with a T. In the plenary about a year ago we decided that namespace objects should have a @@toStringTag property at least for top level namespace objects, which are the only namespace objects that we have so far that I'm aware of. The Temporal proposal is going to add a nested namespace object, `Temporal.now`, which until now has been spelled with a lowercase n probably because nobody actually thought about it, and it started out life as a function. So we got a request to change this to a capital N. And you know, this also raises the question, should it have a @@toStringTag property and if so, what should that be? Should it be `"now"` or should it be `"Temporal.now"`? It seems like this is something that we should provide explicit guidance about so that we don't make an ad hoc decision that's done differently by different proposals. It seems from the thread that was started, that people think in general that nested namespaces should be capitalized. My proposal here that I'm going to ask for a consensus on is, is that, plus having a @@toStringTag property equal to the fully qualified name. So, in the case of `Temporal.Now`, it would be Now with a capital N, and the @@toStringTag property, would have a value of `"Temporal.Now"`. So, after whatever discussion we have, I'd like to ask for consensus on a guidance and consensus on making this change in any current proposals. Temporal is the only one that I'm aware of that is affected by this, but there may be others. So discuss away.

MM: I just have a clarifying question first. Last I looked it was just simple. What is currently in the namespace?

JHD: [link]

MM: Is it brief enough that you can just enumerate it?

RGN: It's a collection of functions that return information from the host about what time zone it's in, and what time it thinks it's in.

MM: How many functions?

JHD: I count nine.

PFC: I was gonna say about 10, so 9 sounds right.

MM: Wow.

BT: Does that satisfy, Mark?

GCL: I don't want to redefine the entire Temporal proposal because that would be horrible. I'm just curious. Why do these functions exist instead of default constructor output? Why is it `Temporal.now.instant()`, instead of `new Temporal.Instant()` with no args to get the current instant?

PFC: This is a requirement that has been in the proposal for quite a long time, and comes from the SES folks: that anything that gives you information about the host system should be virtualizable. So that's why these functions are in a namespace and not just that the default constructor gives you the current time.

GCL: Okay. Thank you.

JHD: The capital N — these are all very mild points — sort of suggests to me that it's a constructor. I would expect a top-level namespace to be capitalized, and then the second level one to only be capitalized when it's a constructor. But then the else just reads awkwardly to me, to be honest. It feels like it's a Java thing when I read it with the capital N. For me, I think that the lowercase is nicer and I prefer it. And I think that the initial T is more than sufficient capitalization.

PFC: Yeah, I definitely see what you mean. I originally preferred the lowercase n, but when I thought really hard about it, I couldn't think of any better reason than 'I'm used to what it was'. When we discussed it with the other Temporal champions, nobody felt strongly about it either way. So if the plenary decides that we should give the guidance that they should be lowercase, I'm also happy to do that.

LEO: I just had a general clarification question about this. If you have any links to any GitHub discussions you had about this, I would appreciate it to read more of the background context.

PFC: I can share it right now: https://github.com/tc39/proposal-temporal/issues/1583

SYG: I support the proposal as-is, as in the slide that you had open, which is fully qualified name in the @@toStringTag and then the capitalization. I may be wrong because I haven't done research here across a set of other languages, but the built-in names for things, my intuition across most programming languages, is that the conventions for how they are capitalized or spelled usually is derived from the kind of thing they are, or how they're meant to be used, and not really where they are put, like if they're nested or not. For that reason, I support that namespace objects, like constructors, remain capitalized, regardless of where they get installed by default.

JRL: `Date.now()` is a method that you call and having `Temporal.now` be lowercase makes me think it's supposed to be a callable function that's going to give me like date, time, or something in the Temporal object. Making it a capital namespace is going to prevent me from trying to just call it randomly.

JHD: This is a counter to my own constructor comment as well, but if you think it's a thing that it's not, and you try to use it that way, and then it immediately tells you it's not a function, you can't do something. If it's not a function, and you can't call it, you're not going to be confused anymore. So I don't know if the confusion argument really pushes in either direction very strongly.

SYG: If there's no initial confusion at all, even if it's quickly resolved, isn't that better?

JHD: Well yeah, but I shared one intuition, others have shared others, right? I think there's the chance of confusion either way, it's just about which kinds of confusion we prefer. In either case, I think someone will try it and immediately discover what's going on and the confusion will be gone. And so I think it's a moot point towards this proposal.

MM: If we decide that an object like this should have a lowercase name but that `now` is confusing because of `Date.now`, that doesn't mean that we have to instead go to capital `Now`, we could find a different lowercase name. But my question is really about, I'm very glad that you're raising this in terms of what general precedent that we want to set rather than just presenting this as a narrow question about this one object. I don't understand — for a top-level name, we called it a namespace when it's an object with properties and it's not a constructor because most of the top level names are constructors, Math is the odd one out. But aside from top level names, I don't understand what we mean when we distinguish namespace object versus an object that has methods on it and has properties on it. I code with objects-as-closures. I create zillions of objects that just have function properties, that act as methods and I don't think of them as namespace objects and I would never think to normally give them a capital name. I'll just say in conclusion, unless somebody does have a distinction here, I just wouldn't say that this is a namespace object. I would just say it's an object that has function properties, or an object that has whatever properties; just an object with properties. And that, in general, I normally give objects lowercase names. I suggest, I think you should do that here as well, and then we can separately debate whether the name should be `now` or something else.

KG: I do actually draw a distinction. If I am creating a bunch of instances of a given shape and passing them around, that's kind of a different thing than if I am creating a single object that there will only ever be one of, that exists only to hold a set of properties, only to provide scoped access to other values. That really is a different kind of thing than the majority of objects in my code. And at least in my code, I frequently do give such objects capital letter names.

MM: I don't. I don't know what to do about that. It would be interesting to see whether there's an adequately dominant, consensus, practice to help there. But this question, as a question to debate, hasn't even come up that I'm aware of; as something people have argued about, the things people have referred to as namespaces. It's always just been top level.

BT: Just to note that we are up against the time box, we did get some time back so we have maybe another five minutes maximum for this. Hopefully we finish up the discussion. It looks like there's a few more replies on this topic.

JHD: KG's answer may answer this, but to MM's point, what is a namespace object? The decorator API we just got a presentation about, where a decorator function gets an object argument that has an `access` property that contains two functions: that's lowercase `access`, right? But it's not a singleton, that’s true, but how would we even define this? Is it that it has to be a global singleton object containing stuff?

KG: Yeah.

SYG: Yes. So I think context is decidedly not a namespace object, even though it produces things because context, not whatever the thing is context, that access that get, that is a specific version of that get function, that only works for that private field, right? The identity of the context object matters. For namespace objects, the identity of the namespace object itself should never matter, it only exists because we don't have a non-object way to scope access to things. Does that make sense to you?

JHD: Yeah, I think so.

MM: What you said, I agree that it makes sense. I just — and I see from the title of your reply to your question to me, the only things where I give them capital names and think of them as namespace objects are at top level. Other than that, I just think of myself as handling records with properties. And some of them are singletons. And I don't strongly distinguish that; sometimes I refactor code from from a singleton to something that's multiply instantiated or vice versa. I don't think of the fact that an object is a singleton. If it's just immutable data or if it's just functions as being a completely different category of object, an object that's made by a factory that can create multiple instances. That's certainly different in some ways but not that different.

SYG: I guess I do. I'm somewhat surprised, being primarily a C++ programmer that has non-reified namespaces. I feel like any language that has a concept of the namespace thing where you scope things to group them together, also has a way to nest them, and then the way to name those namespaces are consistent, regardless of nesting. I'm both kind of surprised by the argument that nesting makes it qualitatively a different thing; and that namespaces you don't think of them, MM, as nestable.

MM: I'm glad you brought up the C++ example because that really helps understand what the question is. And I agree that when I nest them and think of them as namespace-like, then they're a different category subjectively than when I just happen to have a reified record that has properties. The problem is that, if we're going to talk about this as a precedent for something, in JavaScript there is no concept of namespaces, we're just overloading reified objects as records. Some of them are holders of data and function and is just a reified object and some of them are as if they were second-class namespaces. There's nothing to grab onto in JavaScript to make a crisp distinction such that we would set a precedent according to the distinction.

SYG: The concrete definition that I put towards this, as a refinement of KG's, is that you have an object, that you create, that has a collection of properties, that is not a constructor, where the identity of this namespace object does not matter for the semantics of anything. [bot mangled] that it has this concept exists at the top level. The salient bit to me, the namespace objects that we have, it's not that they're top level, but the thing I just said, and that's why I feel they already are nestable, that it's not a stretch to nest them. We already have this concept that we treat these objects differently.

### Conclusion/Resolution

No conclusion, will revisit later this meeting if there is time

## Restricting callables to only be able to return normal and throw completions

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/ecma262/pull/2448)
- [slides](https://docs.google.com/presentation/d/1BYX6iJqYJSNL0pR-De074hhQceXqNzGHTVyS9UesGZQ/edit?usp=sharing)

SYG: when doing a review of the resizable buffers proposal, Mike Pennisi noticed that we don't really strictly restrict the completion types that can be returned from host hooks. So as a quick recap of the completion types that we have. The completion records have this type field that describes how control should continue. If the type is normally it's just a value. If the type is throw. We start unwinding stack as with exceptions, if it's break, we're breaking out of the current Loop, with continue we're continuing to the next iteration of the loop, if it's return. We're doing return. We use completions to describe control. I think this is just true. They should only be able to return normal, or throw a complete It's like they should never be able to break you out of the loop. They should never return you from the call site. Basically, it's they should alter control. control they should be, they should act like functions. Does anyone have concerned with this? This is not normatively said right now, I propose that we add a normative restriction but also close tooks must return either normally, or with throw completion.

MM: I enthusiastically support this.

BT: the queue is empty.

WH: This seems like motherhood and apple pie. I support this.

SYG: And then the next thing is we apply the same thing to callables. All callable in the specification right now already have this property, so it just a property of the specification, the normative bit It of this is that we restrict implementation-defined callables, because on the global the host can add functions and stuff. We restrict those functions to also must only return normal or throw completions. I hope this also uncontroversial.

WH: Yes, please!

SYG: That's it for me. Okay, I'm just wondering, Yulia presented before about the desire for normative spec invariants, should this be phrased in terms of spec invariantsinvvariants, or should we just or should we just just state this here?

SYG: I don't quite remember what just what was meant by invariant in her proposal. Is it just a description of property or a normative restriction of the specification like what is meant by stating?

MM: It's normative in the sense that we want to make sure that further changes to the spec don't accidentally break it. That once it is written down as an invariant, then to break it requires a choice to break it, a consensus of this committee.

SYG: This PR says all callables defined in this specification have this property and if it does not, it is considered an editorial error.

MM: Yes, good. And once this is written down as normative any other proposal that would break this has to get consensus to break it. And it accidentally breaks it then, as you said, it's an editorial error. So this is exactly what Yulia and I meant when we're talking about a normative spec in variables.

SYG: Right. So until somebody proposes call/cc or delimited stuff, we're good to go. Good. All right, that's that.

WH: There are two things going on here. One is you want host callables to not be able to do return, break, or continue. That is a normative spec change. Once you've done that, you can then also write the invariant. But until you actually specify that host things cannot do this, you do not have an invariant.

SYG: I guess it depends on if you think the invariant is - you can have an invariant that is true of everything within ecma 262 and maybe also 402, if that's what you mean by invariant. We can't have the environment but if what you mean by invariant is both Ecma 402 and all upstream specs, then you are correct. Then we cannot have it as an invariant until the host also has this restriction.

BT: Queue is empty.

SYG: Let the record show that there's consensus to adopt these two normative PRs.

### Conclusion/Resolution

Consensus on both PRs

## Guidance for nested namespaces again

MM: The `now` thing is separate exactly because of the desire to virtualize. If you desire to have different compartments, have different settings of `now`. In order to do dependency injection of what the current time is, (??). So in that sense, there will be multiple `now` objects running around, and the replacement of `now` is the meaningful thing. So SYG, I want you to clarify given that from your definition of what it means to be a namespace object, that anticipated usage would make the `now` not be a namespace object. Is that correct?

SYG: Interesting point, let me think that through. When I said the identity of the namespace holder object matters, I was thinking of if — like a static method — if I'd reassign to somewhere else, if I pulled it out as a free function, and I called it, it would behave the same regardless of the receiver. In that sense, even if virtualized, that would still be true, right? Are you thinking of virtualizing with functions where its receiver matters?

MM: I would certainly prefer the all the functions not to be `this`-sensitive. When I program with the objects with closure pattern, which I do a lot, I also program with functions that are properties of objects that act like methods that close over instance state, but do it without being `this`-sensitive. So that by itself does not make it into a namespace.

SYG: I haven't thought through exactly what a namespace object is, but you can virtualize `Math.random` by virtualizing the Math object, and we don't seem to disagree that is a namespace object?

MM: That's a very good point. That's a valid point. So what I'm left with is — I don't see anything that's been stated that seems like a crisp definition that would correspond to distinguishing objects that satisfy the intuition of namespace objects versus just normal JavaScript objects. I'm just at a loss there.

SYG: I agree that we have different intuitions, and that it does resist a clean definition where it matches up to my intuition, despite the intuition existing.

MM: Okay.

LEO: There's a lot of things being discussed here. Most of these is because everyone cares, and everyone trying to avoid taking bad decisions, and this remains JavaScript. If we just take out all of the bad decisions from the past, that are now part of the language, we can throw them in the garbage fire. And that means this discussion can take forever. But this is an important thing for a proposal that is so important for the language, that we're developing here. I have many opinions, I'm trying to separate my opinions from this. I just want to ask everyone: I know we want to make the best decision, but we cannot make this a blocker for Temporal to move ahead or be implemented. My hopes are we don't get too much of too long just in this is something that should smaller. (??) I have my opinions on this, definitely the resolution here will affect `Intl` as well. I think we already have `Math` that is not a constructor. Everyone knows that. You can find precedents on both sides because this is JavaScript, and the whole ecosystem where JavaScript is in the web, you can find precedents on both sides. I just hope we find a resolution soon for this and we don't block Temporal for too long.

WH: This discussion is a little bit too abstract for me. If we're proposing a rule, I'd like to see a list of what the interesting cases are, what all the controversial cases are, to make this a little more concrete. I am not a fan of imposing rules in the abstract without understanding the consequences.

PFC: Just to respond to LEO, this is not going to block Temporal. The default if we don't decide what to do here is just keep things the way they were when the proposal advanced to stage 3. And that means leaving it with lower case. Before we break for lunch, is it possible to get consensus on the second point on this slide, the @@toStringTag property? That regardless of whether it's uppercase or lowercase, we use the fully qualified name as the @@toStringTag?

MM: By fully qualified you mean `"Temporal.now"`, rather than just `"now"`?

PFC: That's right.

JHD: Yes, I had a queue item to say plus 1 for the second part. I think that regardless of what the name is, the entire purpose of putting this on namespace objects is debugging. And it's most useful to know the fully qualified name of it. So I hope we go forward on that part of this.

MM, WH: Yeah, I'm fine with that as well.

BT: Are there any objections using the fully qualified name in the to string tag? `[silence]` Sounds like you can go forward with that.

### Conclusion/Resolution

Consensus to use fully qualified name in `@@toStringTag`
No outcome on capitalization, we may or may not revisit at this meeting, status quo holds unless revisited

## Renaming Strawperson to Concept or something better

Presenter: Hemanth HM (HHM)

- [slides](https://docs.google.com/presentation/d/11PBKeQOGVj3r3F9xBJIKpgftfyeW5lGHHAJrI7Misgc/edit?usp=sharing)

HHM: Hi, I'm Hemanth from Paypal, and today we'll be talking about renaming strawperson. We all know that stage 0, was called strawman and then it got renamed to strawperson. Then on Twitter someone suggested we could replace it because it's already tainted by its original version. We got support from delegates [some examples], e.g. Jordan said he never thought of stages by names but "concept" seems like much better description. so probably we should rename strawperson to concept or something better. I went through the history and some notes to find where, or where, where, how this was named strawperson. But sadly, I couldn't find the references for that. I just want to hear your thoughts and if everybody agrees on "concept", then I would like to be happy to make the pr changing the name of the stage.

SFC: I like the term "concept" but it almost sounds more like something at Stage 1. We currently use the word "proposal" for Stage 1, which is misleading, because a proposal is the thing that goes through all the stages. So I feel like that word is kind of overused. So I like the word "concept" but that sounds kind of more descriptive of Stage 1. Stage 0 is more like an "idea", maybe, like an "idea" at Stage 0 and a "concept" at Stage 1. Just thought I'd throw that out there.

HHM: Concept is basically an abstract idea, right?

SFC: So, maybe concept is 0 and idea is 1. If we're changing the names, I just feel like stage 1 being called "proposal" is kind of misleading. So, we may as well fix both? That's all; you can move on to the next discussion topic.

CM: I think while the proposal is well-intentioned, I think it kind of misses the point of the original terminology, the idea of a straw man or straw person was something which is kind of initially flimsy, which is what things often are at the beginning when they haven't been fleshed out. And the whole idea is something which is in a flimsy or weak state. And then as you work on it, you make it stronger and more sturdy and more sound. A “concept” is just an idea. The whole idea behind "straw person" or whatever word you use for it, is the idea that you're capturing there, is that it is quite possibly very flawed: it's very flimsy, it's not necessarily all the way thought through and should be regarded such, meaning it'll be easy to attack and therefore the thing to do is not just blindly attack it, because anybody can do that, but to have constructive contributions that can shore it up and make it stronger, make it more sound. And that sort of evolution from something, which starts as a sort of weak proto-notion to something which is more fleshed out is, I think, lost if you switch to some abstraction like "concept".

AKI: Thanks for that chip. That's a good point.

SYG: So maybe I misunderstand the actual intention of this proposal. Is the proposal to change the process document or to kind of get us on the same page to try to stop using the word straw person?

AKI: I think it's both.

SYG: I see. It seems like it would be clear for the process document to perhaps just drop any mnemonic just refer to Stage 0 through 4. As for getting us on the same page, that seems like a taller order but because I have nothing against "concept". Sorry, that was not very clear. I'm proposing that instead of spending time in plenary to debate whether "concept" is a good replacement for strawperson, we could just drop it from the process document.

AKI: All right. Thank you for that. I'm next on the Queue. I'm going to say honestly we have a lot of time this plenary. So I'm less concerned about utilizing the time to discuss the topic like this. Except I agree with Shu in that I think it could be as simple as - I think getting rid of strawperson a good idea. I think maybe just getting rid of English names for hard to grasp esoteric concepts is maybe the best idea.

GCL: I'm also in agreement that we should just remove this column and be done with it.

HHM: currently the the page, which talks about the process or the progression of proposals, has strawperson and proposal, and draft and likes. So, if you were to remove this, what would we call it? Are we happy with calling it concept or we just stick with stages like State 0 to stage four more? What are currently proposing?

SYG: I'm concretely proposing that we say stage 0, stage 1, stage 2, stage 3, stage 4. They mean specific things that goes beyond the English words that are in the process document right now. I mean, if - someone just said, I forgot who, but the proposal is often used as a thing as that the artifact that progresses through stages, 1 to 4. even though they know the process document, only stage 1 things are "proposals", which is not the common use. and I think, you know, we talked about proposals being in particular stages, we don't say candidate, we don't say finished, we use the word draft, certainly, a lot but not only for stage two things.

HHM: Stage zero feels more fundamental. It makes sense rather than having a English word which has a certain meaning.

AKI: I'm an agreement.

WH: I understand what "strawperson" means, I do not understand what "concept" means. So to the extent that this is asking for a global search & replace of one word with another with a completely different meaning I can't support that.

AKI:Okay, thank you very much.

USA: Yeah, I wanted to offer a counterpoint. We were discussing if there is any benefit of having these words there at all. And I wanted to say as somebody who's been explaining the whole TC39 process to people who are not involved in his the 39 at all, from time to time, I think these words are useful useful in the sense that they make way more sense, they make way more sense to normal JavaScript developers than "stage 3", which makes no sense unless you know what stages 0 through 2 are. So, yeah, I think it is not that bad of an idea to actually try and come up with better words. But yeah, I think these words are useful to give analogies to people who are not used to the stage process.

AKI: Yeah, I agree But Bradford your reply.

BSH: I just would like, as a Counterpoint to say that actually, it's misleading. I would think because people see these words from the outside and they make an assumption that they know what it means. If you say stage 0, they know they need to look up what the heck that means. And besides, I feel like since the past year I've been coming to this, everyone says State 0 proposal. stage 1 proposal, stage 2 proposal, stage 3... Nobody ever - I almost ever hear any of these other words so it would reflect what we actually do. If you just say they're all proposals with these stages.

SYG: As another data point, when I have taught the stages in giving talks and in panels and stuff - I mean, I guess we can actually look this up because the panel's we have done in the past, we have videos, right? I don't think we have ever used the actual English words. We say the stages and then we kind of say a little sentence about what it generally means for the proposal to be at that stage. So I feel like when we do the teaching, when we do the evangelizing of the process, that we actually don't use the English words. And I want to highlight something that Hax said in the Matrix, which is Chinese Community are not English speakers, they're not going to latch onto these words, they're going to say stage 1 to stage 4.

JHX: The English words like "proposal" (etc) are a problem, because if we use these words we need to translate them, and actually different people have very different ideas of what these words means. So we I think most of us are in China only use "stage 1" or 2, 3, just like that.

HHM: So the general observation here, as most of them are comfortable, calling it by State 0 to stage 4, or rather than names, and the contrasting opinion is we have names, then it would be easier for people to explain it to newcomers, or folks who don't have idea about stages. The other opinion is like, if we call it stage zero, then they will probably go and look look into what "stage 0" means. So, I think the majority of folks are comfortable calling it stage 0 through stage 4 rather than by names. So should we get rid of names?

SFC: I have two queue entries. First is, a Stage 0 proposal is not really formalized until it reaches Stage 1; it's not really even a proposal, it's almost more like a suggestion, because it's not really a proposal until it actually reaches Stage 1. So like if we were to keep the English names, I feel like Stage 1 being called "concept", Stage 0 being called something like "suggestion" or something like that.

JHD: It's a proposal when a TC39 delegate champions it and plans to present it, that's usually the bar we use and that has been useful for things that did not make it to stage 1, because they have come back again and they're still useful as reference points. So I think it's still useful to list stage 0.

AKI: Can I just repeat so I understand properly and in case other people are also not understanding? What you're saying is keeping stage zero on the process document is valuable because even though we're not committed to it, we can track that somebody did the work even if it never made it into the proper staging process. Is that what you're saying Jordan?

JHD: Yeah. I mean I'm saying that having a repo for a proposal that is still in stage 0 but that has or will get committee time is useful as a place to concentrate attention and track things, sure.

AKI: Yeah, okay. I think that's pretty uncontroversial.

SFC: My next topic is just that, you know, the most important difference in terms of wording is really between 1 & 2. So, I think that if we were to use English words "concept" in Stage one to "draft" in Stage 2, it really emphasizes the point that Stage 1 is no more than an abstract idea and Stage 2 is really where it becomes a Draft. And so I believe that would be appropriate.

HHM: So from what we heard, a few people voted and they were comfortable with having it to be called a stage zero to stage four rather than having names. So should we get rid of names? Or if we are sticking with names should we call stage 1 as concept and stage 0 is proposal?

KG: So that was two questions. Can we ask one question?

HHM: Yeah, the question is, should we have names or not?

[TCQ temperature check]

SYG: I want this to be narrowly about removing the name column from the process document, not about how we as delegates in engaging with the community.

AKI: Okay, so I'm seeing the strongest feelings about just getting rid of the column. There are some people who are unconvinced. There's some people who are indifferent. Those of you who are unconvinced, do you think that we should not get rid of that column and instead should spend some time bikeshedding what we call things, or - I would like to be done with this actually, I would like to know what people who are unconvinced, how strongly you feel. `[silence]` I think we have consensus to remove the column, that is what it sounds like to me. No one has spoken up to stop that. I will give everybody one brief opportunity to speak up and otherwise let's just get rid of it and move on and we can all use whatever phrasing we want when we're educating people because use the language that matches your audience.

LEO: I am sorry. I just got late to this topic because it was putting my kid to sleep. I totally just saw the slides already mentioned part of my point of view. I'm getting late to this train, just I have like there are many problematics with Straw Men, straw person or anything that derives from these terms, like my biggest pet peeve is any wording that derives from that. And also like the original one comes in from like very problematic . I just want to mention like for someone who does have English as a second language even like Straw Men was problematic so many perspectives, not only like by, there's one, there is a most of anyone but like, just a perspective, it doesn't mean anything else, like, for technical for a technical naming - In concept was actually like, dictionary based naming for that, but there's another discussion here that see on removing that column. Sorry. I just wanted to give this perspective as like, if I see a column, if there is anything that we call for stage zero, I'd rather have it with something that it's easier for me to translate. And it's also like legit to what it means. That's that's like the point of view why I support this. There are many other problematics that I also support this change as well but I'm just giving a perspective that that I don't believe everyone shares the same point view and I hope you understand that Thank you Leo for that perspective.

SFC: Yeah, I think the mental model is useful, but now that I've thought through this a little more, I think the column called "Acceptance Signifies" is actually more useful than like the single word stage names. That already forms a very good mental model, because, as others have said, trying to use a single word for this is problematic; there are lots of issues with that. So I'll withdraw my negative vote, and move it to a weak positive (for removing the single-word names altogether).

AKI: I think we just go ahead and remove the column and if we decide we want to go through a proposal to sort of - that's lower case p proposal - to rethink any aspects of the process document or perhaps for us to write some prose on how to teach the process document, that is something else entirely and it's potentially with a great thing, but unrelated, I think we have consensus. Okay. Thank you so much for bringing this up, I think it was an excellent thing to bring up. I'm glad we had this talk.

HHM: Thank you, everybody.

### Conclusion/Resolution

Remove "name" column from process document

## ArrayBuffer to/from Base64

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/bakkot/proposal-arraybuffer-base64)
- [slides](https://docs.google.com/presentation/d/1i7_ajP8J1EjILjBoYYkE2nmCT429-LuD7kJyhRUdXqY/)

KG: Basically, my thesis is that we should have a built-in mechanism for converting binary data to and from base64. As you probably all know we have `btoa`, but I claim that btoa doesn't count. btoa translates between strings and other strings. It does not, in fact, convert to or from binary data. We have in the language a first class representation of binary data which is ArrayBuffers and we should have a mechanism for converting ArrayBuffers to and from Base64. As evidence that I am not the only person who believes this I have a screenshot of a tweet from a cryptographer on the go team, who is porting a novel cryptographic project to JavaScript. And one of the hardest parts of porting this novel cryptographic project to JavaScript is converting a uint8array to base64, because there's nothing in the language that does this. So I'm not the only person who wants this.

KG: Here is a possible API. At this stage obviously nothing is fixed, but it could look like this. We can have a prototype method that converts a buffer to a base64 string and a static method that consumes a base64 string and gives you an array buffer of the appropriate length.

KG: Now, of course, there are a lot of details that need to be worked out here. For example, should it be asynchronous? My claim is no, it shouldn't. Userland solutions aren't and we should not be less convenient than userland solutions. If you are operating on very large data, for example if you are uploading a base64 version of a file or something, then you want to use a stream anyway, which is an HTML concept, and not really something that we currently deal with. Again, open to changing this - I should say, I am open to having different answers for all of the questions I am about to pose. I just want to raise them as questions, and to give my opinion so that if people strongly disagree, we can fight about it in the future.

KG: Should we also support hex, the other common method of encoding arbitrary, binary data as text? I think yes, probably. It comes up often enough. It's easy to do in userland but we might as well. It seems like we ought to support hex.

KG: If we are doing base64, of course there are different variants of base64. There is the URL safe alphabet rather than the default alphabet. I think that we should default to the regular alphabet and provide an options bag option to pick the base64url alphabet instead. And a bunch of others. Should we deal with shared array buffers? Probably. How should we handle padding? This proved to be unexpectedly controversial, so I will come back to it. Should we support just doing a part of the array buffer or a part of the base64 string? I think no. Should we support taking a base64 string and writing it to an existing array buffer? Again I think no. The last two are easy enough to do in user land. They might incur a copy but a copy is pretty fast so I'm not going to worry about it.

KG: Now padding is controversial. The RFC for base64 does not say that decoders are required to verify that the string that they are decoding is correctly padded, it gives them the option of doing so. Almost all base 64 decoders do not enforce that the string that they are given is correctly padded. Note here that I'm speaking of both kinds of padding, the equals signs on the end and the additional bits that might be in the last character. If you don't know what those are, don't worry about it. Just for those who are aware, I want to emphasize I'm talking about both kinds of padding. The fact that decoders don't typically verify means that you end up in the situation where base64 is not actually a canonical encoding. I think that this surprises many people, it surprised me when I learned about it. I have a nice collection of screenshots of it surprising other people. And because people are not aware of this, it is very easy to write code which is subtly incorrect, possibly in a way that causes a security vulnerability, that relies on the assumption that it is canonical. For example, you might be checking membership in a list of revoked keys by comparing the base64 encoding of some values and that simply does not work if your decoding is not canonical, meaning to say, if your decoding does not enforce that padding is correct and reject strings that are incorrectly padded. So it is my opinion that we should verify padding by default and have an option that allows you to not verify padding. However, there's disagreement about this point. I don't want to fight that out before stage 1, but do want to fight that out before stage 2. So I also would be interested in hearing opinions on that topic, if people think that the proposal as a whole is reasonable, so that I have something to be going with towards advancing this in the future. So let's go to the queue.

WH: What do you mean by canonical?

KG: What I mean is that there is only one string of characters which is accepted by the decoder which decodes to a given sequence of bytes.

WH: I'm confused because even the strict version is not canonical because you can have newlines anywhere.

KG: The RFC does not mandate that you accept characters outside of the alphabet, you are permitted to reject strings that contain characters outside of the alphabet. And I think we should. At which point I do believe it is canonical.

WH: Okay.

GCL: Yeah, I love this proposal. I think it's great. Something I'd like to express: I noticed for one thing that utf-8 is not mentioned at all here and I assume it is not an accident. That's not mentioned here but I feel like this is something that should be in scope for a proposal like this.

KG: I pretty strongly disagree. This proposal is about the serialization and deserialization of arbitrary binary data. It has nothing at all to do with text and utf-8 is strictly a way of encoding text. It's not particularly related to binary data.

GCL: I think maybe utf-8 was a poor way to say just like raw strings because I don't think we need to enforce the like well-formedness of Unicode data, but besides hex and base 64. I feel like that would be a very useful thing. That's a thing I run into all the time at least and I'm sure other people do.

KG: I agree that a mechanism for taking a string and getting the binary representation of it according to some particular choice of Unicode encoding is a useful thing. I just don't think that it has anything to do with this proposal. Also it already exists in the web platform so I don't care very much.

GCL: Okay. I would just say that doing it performantly, I guess is a task that is easier thought of than actually implemented, and doing it at the language level could facilitate that. But I guess this is something that can be discussed in the repository more in depth.

KG: I want to take a strong stance on this being out of scope for this proposal. I want to say that this proposal is strictly concerned with arbitrary data serialization and deserialization, which has absolutely nothing to do with text encoding, which is what you are asking for.

GCL: I'm not really asking for text encoding, the content of the string is kind of irrelevant. It could be random bytes.

KG: Let's move on. Please open an issue on the repository and we can continue this there.

JHX: I'm not sure. I mean maybe the question is whether it could be serialized and unserialized to a buffer directly? So you don't need to first has serialized the two string and dare you use text encoder to convert it to a buffer

KG: Sorry, who is that addressed to?

JHX: no, I mean, the questions about it were maybe a (?) you need to include that and convert it. So the people need two steps and maybe have some performance problem.

KG: My understanding was that Gus was talking about specifically going between strings and buffers. Gus, is that correct?

GCL: Yeah.

AKI: How are you doing on clarifying? Are we clarified? All right, Shu.

SYG: I'll fold my two items into one. I want to back Kevin up on the APIs on drawing a strong line. I am not interested in having the scope of this extend into bringing text encoder and text decoder into the JS spec. If that were your goal, I guess I would recommend engaging that as a separate proposal that I wouldn't think has a high chance of succeeding.

GCL: if I wanted to have a separate proposal, that would be, you know, something but I would just want it to not be like a desperate idea from whatever API happens here, which is the reason that I sort of see it as being related to this? so, at the very least, designing this proposal with the idea in mind that further “encodings” may be added in the future. Maybe it is a good way to phrase it.

SYG: If you want to phrase that is how I would still want to qualify that to have utf-8 and for text encoding and text decoding to be out of scope for future encodings because that exists.

GCL: you're saying you would want us to come to consensus that the language could never be extended in this specific manner. For this proposal. With it. Yeah, I mean just designing this proposal with the understanding that another future proposal somewhere could add on to it.

SYG: There's nothing productive I can say to -- like if you're going to phrase it as consensus to never do something, we cannot really say that.

GCL: But yeah that's what I thought. That's what I thought. That's what you said. I thought that's what you were saying and was confused by that.

SYG: No, I'm saying if you want this in scope for this proposal, I am saying, no, I strongly disagree and agree with Kevin that this is not going to be in scope for this proposal.

GCL: okay, I know, I was just saying, if that's the case, I would then say it would be in nice to have in scope for this proposal, not a specific encoding, not specifically like binary encoding but just the ability to... just keeping the design and in a way that allows future expansion nicely with whatever we may want to add in the future without saying what we want to add in the future because we haven't decided that yet.

SYG: That is too abstract of a thing for me to respond to. If you have a concrete thing how, how the API maybe doesn't find one way or another to to not preclude future extensions that you had in mind, then I can respond to that better.

AKI: I think it might be time to move on to the next topic.

SYG: Okay. So my next item is a suggestion. So this is on the arraybuffer types, right? Not TypedArrays?

KG: That is correct, yes.

SYG: If it were on - I agree it's kind of weird to have it only on Uint8Array, but if you were on, if it were only on uint8 arrays, you get the shared array buffer stuff for free, you get the slicing for free without copying. I don't know what you think about that.

KG: I don't think you get the shared array buffer stuff for free. For shared array buffers there's the question of whether the buffer is atomic, right?

SYG: The whole operation probably is not going to be atomic without actually locking because that's going to be pretty expensive, right? Whether each access is atomic, I think you can just decide when you iterate over to the device,

KG: I would want the whole access to get Atomic and SharedArrayBuffers, kind of weird not having that.

SYG: So we can't do that on the main thread, but yeah, we don't have to discuss this during stage one.

KG: Yeah, I don't know about doing this without locking. I don't mind also putting this uint8array. I do however think that it belongs on arraybuffer because arraybuffer is the sequence of bytes type in the language and uint8array is, in fact, a sequence of width-8 numbers that is backed by a sequence of bytes. But like I said, I'm okay with putting it on. uint8array as well. Please open an issue to that effect.

AKI: OK. Moving on to Philip.

PFC: I just wanted to say I support this proposal going to stage 1. I think this is a great tool to have in the toolbox of a language's standard library.

AKI: I love a little dash of positivity. Peter.

PHE: well, yeah, I might not be your dash of positivity. So by way of a little background, I have written way too many base64 encoder/decoders across my career and still actively use them all the time with the work that we're doing. So this is familiar to me. and, you know, listening to this, I think, I think Kevin you've given a good, a good summary of a lot of the options and complexity that come up, that kind of give me pause. I think there's so much here to work on just to kind of get it right. And even if we do get all of that right... I'm skipping over things like streaming, which I agree are difficult. But from another perspective, you know, streaming is actually pretty important if you're going to do this right? Because we don't have lots of space to be able to do this on large buffers for example. So it just I mean I agree with people who say like oh if we standardize this and it worked the same as node and it works the same on the web and it works the same on embedded, That would be nice. totally agree with that. But I'm not really not convinced that this is the right venue to do the work. Maybe that a small solution here isn't going to be all that useful and a big solution is going to take way too much of the committee's time for something. This is kind of specialized and I'm not even convinced, in terms of binary data, that it's close to the biggest issues that we have. So, I mean I think there's - I think you've summarized the problem well and kind of set up a good direction. I think the work is worthwhile and I'd love to see it and even contribute to it but I really don't feel like this rises to the level of something that that warrants the committee's time and effort in terms of complexity and kind of bang for the buck that we get out of it at the end of the day.

KG: So, I guess I don't understand that... you said you this is a thing you've needed to do many times. This is also a thing that I have needed to do many times. It's quite obnoxious to just keep copying this snippet everywhere but that's what I end up doing. I have shown that other people also have this experience that they need to do basic base64 encoding and decoding and that they find that it is a frustrating experience of the language that it's not built in. So while I agree there are a small handful of details that need to be worked out. I don't see that as like - it feels like this is very well motivated to me and I guess I don't see where you're coming from.

PHE: I mean I agree it's well-motivated. I think by the time you get through to a comprehensive solution that really does what everyone wants, It's very big and you end up with an API, which is more or less the text encoder-decoder API. But having just gone through implementation of a simple version of that. It's a lot to do the whole thing, right?

KG: I don't think that we have to say it has to solve every single use case, I think it's perfectly fine to say that like the 90% use case is an whole-buffer transform with one or two alphabets and with one or two options for how to handle padding and like we can just specify that and that will be extremely useful to a great many people and Like, it is true that this does not solve everyone's use case but I think that is okay.

AKI: Really quickly wanted to interject and let you all know that we are approximately at the five-minute warning. Peter, did you have anything else you need to say?

PHE: Kevin, I think I'm trying to understand where you're coming from. That sort of a partial solution will do a lot of good but from the language perspective, I mean, we tend towards things that are fairly comprehensive and general, and Even if we can, somehow peel off a feature set, which is Small. I feel like it's gonna take our time to kind of keep growing and dealing with details of that. again, I don't think it's a great use of the committee’s time. Like data encoding is a whole other like ball of wax. It's not something with the exception of JSON that we really do here And so I just, I think, I mean, what I said in the in the queue entry, I think it's, well intentioned and well-motivated. Well scoped, well described, but still out of scope for this group.

KG: I disagree quite strongly, but I don't know what else I can say.

PHE: We can leave it there for now. That's fine. Thank you.

AKI: Thank you Peter. Daniel.

DE: So, I have a response on this topic, I think the scope of this committee is kind of up to us. We're here to define the JavaScript language and we can decide collectively what's in scope and out of scope for the language. So this is a legitimate debate. I'm kind of curious what the general guidelines are for the standard Library. Temporal has a lot of complexity. Where, we could consider other things in the standard library that have complexity and make different decisions on them, What this is more of a rhetorical question and not one to answer comprehensively. Now, but what, what should the guidance be for standard library additions. My personal view is that we should be looking towards expanding the JavaScript standard Library, alongside not in competition with, you know, know, libraries that in host environments like TC 53 and the web platform. and inside, they do you like these kinds of efforts but obviously there's there's a lot of complexity to consider and trade-offs to make.

AKI: I appreciate that comment and I agree that it is a big question that maybe I'm not sure. I don't think we have the time for in this particular time box but I do think we should be thinking about it and maybe conversing about it. Justin, you’re up.

JRL: To discuss the padding issue, I'm not aware of the padding bits, I've never had to write base64 encoder. I am aware of the equals padding or the - padding and depending on which version you're using for encoding. I think it's reasonable to just always add those padding characters when encoding. They don't seem harmful in any way. For decoding I think it's required that we support both options, unpadded and padded, because we don't control the ecosystem of things that you can generate base64 strings. And we need to be able to consume the entire ecosystem. And I have real use cases that generate unpadded strings for reasons I don't know, but I can't change. Not being able to decode those strings back into the bytes would be unfortunate.

KG: To be clear, I definitely am in favor of having an option to accept incorrectly padded strings. I would not want to leave that use case out. The question is only what the default would be.

JWK: Okay, I'm speaking for septs. They think they prefer the Node style. It used a parameter to specify the encoding formats and that allows us to extend the formatting in the future. But Kevin previously said that this proposal will not extend to any other formats, is that right?

KG: my intention is for this proposal to cover base64 and hex, those two and no others. But not to rule out others in the future just for those to be the scope of this particular proposal.

WH: I just re-read the spec. The forgiving spec removes whitespace from the string before parsing. On GitHub KG wrote that the only differences between the forgiving and the strict versions are the padding and the overflow bits. So does this mean that the strict version will also ignore whitespace?

KG: My comment on GitHub was mistaken. I had missed the white space difference,

WH: Okay

KG: My preference is for ignoring white space to be an opt-in feature, like ignoring padding.

WH: So will there be two switches or just one?

KG: I am open to either. I would probably make two.

WH: Okay. I just wanted to understand the whitespace situation.

KG: I apologize for my mistake in comments on github. Thank you.

AKI: All right, we are at time. Shane had added one thing to the queue chain. Can you get through this real quick?

SFC: Yeah, I just wanted to say that I agree with what Hax said and I think having the encoding as a string argument looks a lot like how Node.js solves this problem. This way, it also would possibly be a way for us to support the URL friendly encoding by just making string encoding like "base64url".

KG: So let me respond to that very briefly. Personally, I strongly prefer methods rather than arguments to a method to differentiate the different kinds of encoding. Because, for example, the options for how to handle base64 encoding are very different from the options for how to handle hex encoding. And I don't think it makes sense to have a single method that takes both kinds of options bag. I also think that methods are much more discoverable than string arguments to methods and I don't really see any advantages at all to string arguments to methods, short of like you have one fewer object that you need to create which doesn't seem very valuable. Like one fewer intrinsic. So I strongly prefer having different methods but there is an open issue on GitHub so we can or at least I think it's open. If it's not, I will re-open it so we can continue discussion there.

KG: I would like to ask for stage 1. Definitely not stage 2 at this time. It sounded like Peter was not in favor of spending more time on this, but I still want to.

PHE: So you read me, right. I really don't think we should. In the interest of letting this work its natural way through, I'm okay with progressing to stage one, but I have a bunch of questions that I guess we should talk about at some point which I'm not confident we're going to be able to address, but I'd be thrilled if somehow we found a way to do it. So I'm okay with stage one, but strong reservations.

KG: I will make sure that is captured in the notes, and please do open issues on GitHub.

AKI: if you think will need to be addressed it's also a great reminder for everyone to make sure that you check the notes at the end of the meeting so that you can be sure that your feelings and intent are captured accurately. All right?

KG: So with Peter's reservations noted, can we ask for stage 1?

WH: I support stage 1.

### Conclusion/Resolution

- consensus on Stage 1 with stated reservations from PHE

## Module fragments

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39-transfer/proposal-module-fragments)
- [slides](https://docs.google.com/presentation/d/1t5i4bpQ1-Dh7-PaRDgkaZUjxeI5P7YyPsX_1Gy1RMEY/edit#slide=id.p)

DE: So I wanted to present on module fragments. We talked about this a few months ago and since the last we discussed it based on feedback especially from Gus and issue. Number five, I've made some changes to the proposal and I wanted to discuss those. So for a little review, module fragments are inline JavaScript modules, in another module, the idea is that they are named so that they can be targeted by either import statements, this makes them different from module fragments, which are anonymous and can only be used in Dynamic import and things that take module specifiers as a runtime value. Whereas module fragments exist as kind of keys in the module map - Not just as keys in module map but things that can be sort of statically named.

DE: So the motivation is that module fragments allow bundling multiple modules in a single file. At first, I thought that we could handle bundling just by general-purpose resource bundles that contain multiple different file types. I still think we should have general-purpose resource bundles, but my understanding is that resource bundles that operate at the network level are just going to be too slow for the huge number of Javascript modules that we have so we probably also want a complimentary JavaScript only bundling format and that's what module fragments can accomplish. So for this basic bundling example, if you declare these modules `countBlock` and uppercase block, then you could declare another module that imports from them and you can see that none of these have quotes around them. So this is kind of the difference. Another aspect of this proposal is that these module fragments are only exported if they have the `export` keyword, so you can import from this private local module fragment and that's possible in the same file and then if something else imports this, then it can also import that export here

MM: you're referring to "different" several times, different from what?

DE: Oh, from the previous draft to this proposal.

MM: Okay, thank you.

DE: So just in a self-contained way. if you have this module, priv then it's only accessible here in this same file. Where we have this multiple Pub declared, if you have export, then it can be imported from another file. And we have an example of those Imports in future slide, Module fragments can also be used to declare what's used at runtime in a module block. So here is an example from the actual module blocks explainer, where we have this worker block this module, that's going to be executed in a worker as a parameter to the worker constructor. What this does when it's referred to at runtime in an expression context, is it just evaluates to a module specifier, namely a module block that can be passed around like normal. And you can still use anonymous normal module blocks in the exact same context where you could use one of these. As an example for nested imports - Sorry, this should probably say `export module foo` instead of being on separate lines - but the idea is that you could have a module fragment that you export and then import from another one and then these import statements could still be applied. Or it could be used as a runtime module block value. But yeah, this should definitely be export multiple foo. So that it's statically analyzable or link-time analyzable that you're exporting module.

DE: A possible extension is, if we want module fragments to work with import mmaps, if we want an import map to be able to make it so that your logical module map onto where the modules are stored than we might want to have an extension to import Maps, which addresses them because these are not addressed by strings the way previously in the proposal we discussed before, you would have a URL with it with an actual fragment in it. Now, we need some other way to refer to it. Like maybe this kind of object better so, as I mentioned when with marks question in previous presentation, you would declare a module fragment with this `"#foo"`. Now, all that noise is gone and the reason is the idea of the new proposals that unifies a single mental model between module blocks and module fragments. so for a long time, basically everyone who looked at these proposals said, hey, these should be the same proposal and I said, “no, they can't. That's never going to work.” But the reason I thought this couldn't work is because we need the namespace of this to be statically analyzed. After thinking it through and and talking it over with the incubator group, I think this is fine, actually. Another big piece of motivation was to avoid stomping on the existing, specifier namespace. So hash foo already can be used as a suffix. in both node.js and the web and it has different semantics in these places. I thought it would be okay to shadow that but some of the feedback that I've gotten is that, that's actually not a good design. And finally, this new design exposes non exported module fragments, which was a common feature request.

DE: So the important semantic goal of this is that the runtime early namespaces match. So, critically when you import a module fragment, especially in this nested way, where a module exports and module fragments. And then another module Imports that export and then Imports that fragment, this has to all be visible at link time. It has to be visible actually, before link time at the fetch and parse Loop. So it has to be identifiable which module you are importing because that module fragment might contain other static imports that need to be fetched all together, so it's really critically important if we have this kind of compile time or early semantics for bindings that, We really don't want - I think we shouldn't introduce multiple namespaces that programmers have to follow. The way that, e.g. in some languages macros or, I mean, classically in common lisp macros being in like a separate namespace is a thing that's confusing for people. And sorry, that's maybe not the best example but the idea is that these namespaces just correspond with each other. So I think this can work out, just fine if module fragment bindings are const. I think if we say that this is a run-time variable binding, that that maps to this module block, as long as you're not able to overwrite that variable, I think everything matches up.

DE: So with module blocks, which as reminder those are in line anonymous modules that evaluate to a new kind of object that be used as a multiple specifier. we have a unified mental model because module fragments, when they referred to just as a variable evaluate to module blocks. So, module blocks are the base proposal. the module fragments proposal builds on module blocks. I'm still proposing them as separate proposals because module blocks are just a lot simpler and module fragments, by being named, add a lot of complexity on top of them. ModuleModule blocks are useful on their own. Maybe we could consider renaming them to capture this closer kind of unified relationship, like inline modules.

DE: So there is a small syntactic conflict with this proposal that Ron (?) raised which is that in typescript module is currently synonym for namespace. They're making ISM for declaring something like math or (?). Which he could do with. You know, with an object literal but you could also do with the namespace, this proposal, semantics do not correspond to typescript semantics and the new syntax without the quotes overlaps with the existing typescript syntax. So, there are a number of possible resolutions to the ambiguity. Maybe typescript could change, maybe this proposal could change, and I think that's something we could work out before stage 3.

DE: So far we've discussed this in the incubator group and the tools Outreach group. and I felt like the feedback was generally positive. You can check the notes, I'd previously asked for other Champions people to be involved and I didn't, I apologize for not getting back to people but I hope we can work together in the future here. There's still a lot to do. So, I want to ask the committee just a new design but being based on variables not strings seem like a reasonable path forward. If so, I think the next steps are to update the readme to be in line with this presentation to to write the initial spec text, maybe some tooling support or some playground or something that. And sorry, the slides said proposed for stage 3 but I meant proposed for stage 2,two, not jumping ahead that quickly. So yeah, right now it's in stage 1 would just be proposing for stage 2 and the future. so thanks, that's the presentation and he thank you.

LEO: I wanted voice support. I was just having a side chat with Daniel and we talked before I have one expressed, his strong support for this. I believe this is very, very useful for what we have at Salesforce today for the whole ecosystem, but not exclusively but But also to be used with Realms. I'm not talking about the Realms proposal, but we have a lot of heavy usage of Realms, even today. And I see this like not only very interesting on the bundling part, also known this idea of like for everything that we have, when we talk about using Realms have lie, we also have a lot of configuration and what is being proposed here is like such a natural to do this configuration in a better manner. I also I see this like when with, in parts but there is a connection that I see with a mental model, that was proposed the Chrome team for the Realms, where we use the module map. four modules that we report and that we reuse the central one, what is being proposed here by Daniel? When says, when the dimensions that the parsing, the static parsing, I also like somehow my mental model connects this to use the central part for the static parsing but also like the run time evaluation is being executed per realm and looking at this proposal. I am happy to see this and hope to see this Making progress. Thank you, Daniel for bringing this up. I know there is more to work on in this proposal but I am very excited.

JWK: +1 for this proposal

MM: Daniel, I do not understand this proposal. I'm probably in the same state you are when you thought this was impossible. As I understood things, module blocks were a completely static concept that corresponds to a static precompiled module. It's just the static information, it's the thing that makes it portable so you can send it somewhere else and it can be evaluated into module instance, somewhere else. Whereas module fragments, and use that you're making of module fragments in this presentation well, seem to be talking about linked initialised module instances, which is as different from the static module record as a closure, is from module expression. So I don't understand what I'm seeing here how, can we have any unify the concepts

JWK: It is still a static module record but being able to join the import resolution, because it's static analyzable.

DE: Yeah, yeah, so I think I agree with you. To maybe put it another way these declarations still do just declare the static part. Then when you import it, you get one of these instances.

MM: the static thing itself, the module block is a reification of the static thing. Is there a is the variable that's bound to The name, the static concept?

DE: Yes,

MM: I see. And the end the export and import is the thing that is referring to an in a linked initialized instance, rather than the static thing?

DE: well, when you export the module declaration itself, you're exporting the static thing, if you import a single one of - if you import a whole one of these declared modules, then you're getting the instance. But if you import in curly brackets, a single exported thing, you know, you're importing the static thing, okay?

MM: The static thing is not just not initialized, It's also not linked. Is that correct?

DE: Yeah. It's just parsed, it's not linked or evaluated or anything.

MM: Okay. So it has the same meaning here as it does if I send it elsewhere, which is why it's ???.

DE: I don't know if I understand that question.

MM: If it were locally linked but a unit of communicating code elsewhere that did not communicate is linkage graph, then it's local meaning and the meaning of it as something portable to express behavior let's say on the other side of a realm boundary, or for parameterizing worker creation or something, that the module itself does not carry its linkage graph, its linkage graph has to be provided from the context.

DE: Yes, that's right. I agree that that mismatch will be bad and I think we're avoiding that mismatch here.

MM: Okay, so I don't understand. So clearly, when I was listening to the whole proposal, I misunderstood what I was seeing very badly. I like the sound of everything I'm hearing now. So I will need to go over it again and re-understand it, but I do like the sound of everything I'm hearing now.

DE: Okay, I have to say the proposal materials are not in such great shape right now, so there won't be a lot of great stuff for you to go through offline until we go back and write those up based on the results of this discussion, but I'm glad you like the sound of this.

MM: And I would also be interested in having you present this again to the SES meeting. Specifically, to make sure that the static module record and the module block are still aligned Concepts where we can expect to unify those as well.

DE: Yeah, I'm happy to discuss it further with the SES group, their comments were really helpful so far. This proposal does not make any changes at all to module blocks. Okay. So everything from that discussion is still valid.

MM: great. Thank you.

JWK: so the current proposal can be statically analyzed and Linked. Can I still use it as a runtime value, Like an anonymous module block?

DE: Yeah. I mean that was in the slides also.

JWK: OK.

GCL: Yeah, just from the know, just from the Node perspective. At least we don't care so much about shoving things over the network. But uses that this provides in terms of, you know, worker APIs and stuff is fantastic. And just, you know, good strong support, this is a Great proposal.

DE: My understanding was that even in the node.js world there was still a relevant thing about startup performance and bundling has been catching on more and more there and for this reason. Especially because of Windows file IO cost, So I thought this would be an important proposal there too.

GCL: yeah, that's a fair point.

DRR: hey, so I think from the typescript perspective there's really two things that I just want to call out the first is what you've already mentioned, in your with the module and namespace sort of Collision there, right? We've really pushed the community to move off of the `module` keyword to proper namespaces just because that's general parlance what they represent. But we really have never pulled the rug out from underneath someone on this on syntax. That's something I think we'll have to speak a little bit more broadly as a team about, so I'll bring that back. The other thing there is something that I've raised in the inline modules proposal discussion, which is just whether or not the tooling can support the sort of scenarios that you have in mind. While bundling is a fine scenario, I don't know how well this can model something like a worker that is in another project context, for example. That has all to do with being able to nest multiple global environments within the same project. That's something that we're not exactly wired up to do. And we don't really have a good sense of how to capture that today. Well today. So that is technically an implementation concern but it's something that I need to be up front with you about now because it's still something that we're not really clear on how we would achieve that. So we don't want you to have a feature that has a crappy developer experience but it is something that will continue to investigate.

DE: Yeah. Thanks for bringing up that second point. I mean, we've been discussing that point pretty - kind of on and off, over the recent months, and understanding is that there's already lots of developer excitement about solving this pre-existing problem of getting a better developer experience for those cases. Because juggling multiple projects, even if there are multiple files, is not really fun for anybody. So so, you know, seems like the same opportunity for improving things.

DDR: Yeah, just being forthright with you.

JK: Oh, I just wanted to say that we would really strongly support this on Rome. I have wanted something like this in JavaScript for various build tools for a long time. I think there are many tools beyond even just bundling that make use of syntax transforms to replicate some of the sort of isolation of these module blocks provide and I think that this could replace lot of the syntax transforms, or what many people would call "magic" in those tools, so strong support all around.

MAH: Yeah, I really like this direction. However, I'm still unclear on how the static linkage information works. For example, on this slide if I was to send combined block to a worker, how would the worker know where to find `countBlock` or `uppercaseBlock` since those are now const they and like, like, or if I was put them in a import map, how would I be able to substitute them in an import map? And is that something that would be supported?

DE: I mean, the import map, I think I gave the example in a later slide, but for this one, for passing this kind of thing to a worker, well, it would kind of have to close over those things. And the set of module fragments that are closed over is totally statically analyzable at parse time or link time at least. But yeah, it is complicated and this is maybe one of the bigger details to work out because even as I say that, I haven't thought through the whole linking thing because, when you're that worker, then one of these dependent modules export something different than you’re kind of closing over different things. So that'll definitely take some more detailed design than what I've done so far so thanks a lot for bringing up that point. Maybe you could file an issue in the repository about that one. About import maps, My proposal was to make an extension to import Maps to cover exactly this case. That if you have an exported module, then you could use that as an import map value.

MAH: yeah, I suppose, I was thinking about how to replace a module reference by, by its name by its const name. And if that's something that should be possible. Knock knock.

DE: it would it help to understand the motivation for replacing

MAH: I haven't really thought it through is just moving away from string, that, that, that complicates things. That's why I was trying to understand how that worked on linking.

DE: Yeah. No those are. there's definitely two good questions and they're probably going to be other piece of complexity that we run into is we think through the details that come from moving away from strings, but I do want to say that moving away from strings was really kind of inspired by the feedback that I got on the previous version of this proposal where previously it was all strings and part of the feedback was, well, the host does own that whole string namespace, so it may be inappropriate to try to reinterpret parts of that.

MAH:: Thanks.

BSH: Yes. And I might just not really be fully understanding what people mean when they say “linking” but I'm thinking that I remember that with the module, previous module, block proposal, inside the module block cannot see things that are defined outside of it, but that explicitly reporting, right? And it can't import its parent, right?

DE: This comes back to the kind of static versus instance question that Mark was raising. so, I mean, they, you know, Gus also proposed that we have a Syntax for importing the parent and actually taking, think it's saying that is if the question

BSH: I thought the perhaps the question of it like the linkage business and whether this is can work or not was maybe assuming that you somehow needed to have access to the parent if you then take that little module. And you send it off somewhere, does it Need linkage back to the parent. I thought maybe that was the question and I just want to make sure that I understood it was supposed to be working.

DE: so honestly the question about when you have this set of module fragments refer to each other and then you send one of them off somewhere, that's case that I should have thought of before this presentation, but I just didn't think it through.

BSH: So, I don't know, mumore work is needed.

BSH: Maybe it's not an issue. I can't see their parent anyway. It's not, it's not like a normal close, you wear like instead of like a function pop or conceit that stuff to find outside of it. This can't so you don't have to worry about that. But anyway

DE: I mean that that logic made that logic made more sense back when everything was a string. Now that these things look like variables. We have to decide how that all works. And I think seeing the parent is just a totally separate thing.

MAH: Yeah, I would simply getting syntax for I was included in the slides where you could modules could reference their siblings,

AKI: We’re at time. Peter, 30 seconds.

PHE: I really like this direction. It solves a ton of problems We had about 18 months ago, added a feature that was a small subset of this to XS to support SES so that we could have inline modules to uses attenuators in the in the module map, when passing into compartments and it works incredibly well and it is so much more pleasant to code that way than lots of separate little files. So I think there's a lot of utility that's going to come out of this and really glad to see kind of all the pieces coming together.

DE: Oh, thank you.

DE: is there a possibility to extend the time box? Because we seem to be continuing to have interesting discussion.

AKI: We do, but we have 20 minutes left in the hour and a 30-minute agenda item up next. so, if anybody wants to join in the hallway track afterward, or we want to come back to discussing this tomorrow, we can but I think we need to. If you're going to ask for consensus, you should do so and we need to move on to Justin.

DE: I'm definitely not asking for consensus for everything. Can we have an overflow item to go through the rest of the queue tomorrow?

AKI: Yes. Thank you all.

### Conclusion/Resolution

- More discussion later

## Array filtering / grouping for stage 2

Presenter: ​​Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-array-filtering)
- [slides](https://docs.google.com/presentation/d/1fY_jsD8bVZ8P95Mr7cEr3WdCbhMLdEQ7OS5hhLCbfJ4/edit)

JRL: So I'm talking about array filtering and also grouping and I'll get to why that is in a minute. To begin with, let's just talk about array filtering. I brought a proposal a year ago about trying to solve the issues I have with the way I think about filtering. To recap, filter selects the items which we return true and it puts those items into the output array. And what I've come to understand is that a lot of people think about this as the way filtering works. This is their point of view on filtering. But I and a few others think about filter the opposite way. And to give you an example that was actually brought up before: think about a coffee filter. It's completely valid for you to look at a coffee filter and think the filter acts on the liquid, it allows the liquid to go through. But for people like me that think like I do, we see a coffee filter and think of it as acting on the grounds, it prevents the grounds from going through and this causes a lot of confusion whenever we're trying to use the filter method in JavaScript because it's the opposite. My proposal is to add a filtering out method, a method that operates the same way as I intuit that filter works, it would reject the items which return true the same way my coffee filter rejects the grounds when it's acting on them. The goal isn't primarily to make a negation easier as everything is currently possible with the filter method, you can just add a not in your predicate or you can negate it with a higher order function or something. So everything is already technically expressible. Instead I see the primary goal of this as helping with people who have the same mental model that I do. We can place our intuition onto the filtering out method and that helps us better understand both filtering out and filtering. To give you concrete terms, I'm proposing a filterReject method. This has changed from the previous time I talked about this because there was criticism about calling it filterOut. I think filterReject correctly describes what the method does so that everyone who's reading it can understand without confusion about what is being operated on and what the output will be. filterReject rejects items that return true. Giving it a name like filterReject, helps me put my intuition of filtering on to it. I can now think about rejection as my coffee filter does. And this also allows me to better understand the regular filter, because it'll be the opposite pairing. Having both helps people like me understand both methods better. And as long filterReject is named appropriately for people who think it the other way, the selection way, I don't think it's going to cause any confusion for people who think that way. So it should just help the people who are like me. To give you the code example, filter operates as the selection. filterReject operates as the rejection, and you get the arrays that you want.

JRL: The second part of this proposal is about array grouping. In the first time I presented array filtering, it was requested that I don't focus specifically on just the filterReject method but instead expand it into different forms of filtering and grouping/partitioning. One possibility here is a partition method, so if you call partition, it returns an array filled with two sub arrays, the first being the things that the predicate returns true for and the second being the things the predicate returns false for. This gives you a way of getting both the selections and the rejections. It's filtering except you get both things back. But there are a couple of issues with a partition that I can see. For instance, is the return value trues then falses or falses then trues? My initial guess is just assuming false is loosely equal to 0, so I kind of assumed falses should be the first subarray but that's not the way functional languages like Haskell work. All the functional languages that have partition always produce trues subarray first. I think it's a little confusing but it's not a huge issue. However, there's a better option that exists in lodash and underscore, there's a method called groupBy. groupBy is just a more generic form of partition, instead of having your keys be 0 & 1 for trues and falses, you return the key that you want to group into. So by calling groupBy, and then using the same true/false predicate, I can get back a key called false and a key called true and each will have an array populated with the items that returned that key. And it can be expanded out into really complex examples. This is actually something I had the code in Babel a couple of months ago because node 8 doesn't doesn't support stable sorting. So to go through the code quickly, just as an overview, I'm grouping each of the keys on an integer priority. I'm sorting the integer keys and then, concatting based on the output of that. And essentially, I have this giant chunk of before code.If we had a groupBy method I could have just written the latter code. Just bucket with groupBy on the priority and concatenate the priority buckets together to get the output. So this is to give you an example of where I have actually written this exact thing out, and I think it could be generically useful for everyone else.

JRL: There are a few open questions that we have about grouping. The first is what should be the return value. groupBy in the ecosystem, meaning primarily lodash or underscore that I'm familiar with, return just regular objects. But if we're returning an object, that means it could have weird prototype inheritance bugs. So if my callback function returned a toString key name, you could have a conflict. Especially if you didn't return a toString key in this particular input array, the toString would be the inherited one. We could avoid all the inheritance issues by creating a prototype-less object. And the third option that I can think of, is that instead of returning an object, we would return a Map. The keys would obviously whatever you returned. This would actually allow you to return things like complex objects for your keys and have a group on those. All of these are possible. I would prefer to follow the ecosystem here and just use a normal object. But I am willing to discuss all of them.

JRL: There's also a slight issue with python. Python has a standard library package called itertools. Itertools provides a groupby, except it has a subtle difference with the way JavaScript lodash and underscore work. In python groupby combines sequential running groups, and does not combine all groups of the same key. It's easier to just look at my code sample below. So taking 1 2 2 1 and keying on the value, it's giving me three groups here because the first group is 1, I then have 2 sequential 2s which are joined into a single group, and then I have another 1, which will form its own group. Notice that the two `1` groups are not joined together. Python will only group items together if they are sequentially, the exact key. This is different than the way that underscore or lodash work, with this exact same code example. Both will group the 1s together. I'll just have a single 1 group with those two items. I don't know what to do about this, besides renaming it, but there's such strong precedents from lodash and underscore that I'm not sure it's necessary.

JRL: Finally, we have the other thing that I was talking about with the findLast proposal. What do we do about holes in an array? ES6 methods were supposed to standardize on just ignoring holes, pretending they're just undefined and we don't do anything special about them. ES5 methods and strangely flat/flatMap skip holes, they see a hole and they continue on. What is the practical effect of this is shown in this code example, if you have a hole and you groupBy, should that value get turned into undefined in your output groups or should we just skip the item entirely and not call the predicate. Hoping to have discussion one on the array filtering into on the three points.

JHD: yeah, so this came up when you were joining the filter reject slide, I was curious. Why I named it that instead of just reject which is what like lodash and ruby called it.

JRL: the reason lodash and Ruby and underscore have both a select and they reject and those two make a pairing. Whereas if we have a filter and a reject, it's a little bit more difficult to associate them as pairs. If we named it as filter and filterReject, I feel like it becomes very obvious that these two things are the different ways of looking at the same operation. and so people who think like me can associate filterReject with filter and then learn better about filter and then people who think about selection can associate both the same way. They already had a filter that they intuit correctly. And then filterReject is descriptive enough that they don't have an issue when they read it.

JHD: The lack of a filterSelect doesn't change that at all?

JRL: Well, I initially brought up that we should have a select alias and a reject but I was told we are not going to add an alias. So I've dropped that one.

JHD: Okay.

WH: I’m weakly unconvinced about `filterReject`. I just don't see much of a use case for it, and if we do have it, we should call it `reject`.

WH: I'm much more interested in `groupBy`. It seems like a useful thing for grouping things. My concern is about making things which work 99 percent of the time and have weird edge cases like the inheritance problems you mentioned. People will want to use this for database-like things where you get a bunch of results and group them by some part of a key. When that happens, I don't want to have to look up what happens if somebody uses `__proto__` for that key. Or if somebody puts both the value `true` and the string `"true"` in there. So my preference would be to have Maps because that's the most well-behaved kind of output.

JRL: I could agree to that. I don't feel strongly enough about any of the three options to force anything here. I think all three options are valuable and the only reason prefer the regular object is just because of the ecosystem precedent.

WH: Yeah.

JRL: I think the ecosystem standardized back when we still had ES5, and we didn't have Maps at that point, it may be more appropriate to choose Map as our output now.

WH: Yeah, I definitely don't want regular objects. Objects with no prototype would be significantly better, but then we have to decide what the keys are — whether the keys are always strings or whether you can have symbols. Maps seem the safest approach.

JH: I would prefer null objects. It's very, very strongly over an app apps or simply not useful enough because they have like no helper methods or not enough. So I agree with the inheritance inference returning an `Object.prototype` would be unwise for groupBy.

BSH: I just want to say regarding the python thing reason, it has that behavior that python version of group by is because it acts on a potentially infinite iterable. So it can't group together. It's really different use case, if we're only doing, definitely finite arrays. I don't think we have to worry about that difference.

MF: I have a couple things to say and I like to echo what Bradford just said there. Haskell has the same behavior again because of infinite lists there. It's called groupBy. So, maybe the name we'll have to talk about. But as you mentioned in the JavaScript ecosystem, I think it's fairly common to call the operation you're proposing groupBy. So I don't think it should be an issue. I am pretty excited about groupBy. I think that it covers the original use case that you had with filtering fairly well and I'm excited to see the other things that it will solve because it has much more flexibility. As far as the proposal just to do a rejection method. I am not very supportive of that route, I am still not convinced that it would have the kind of discoverability that would help people make the decision about filtering in versus out. I don't really think it will help too much there.

JRL: I speak with experience. Whenever I try to write a filter method. I first think as if I could have written a filterReject. So it does help me even though it doesn't exist, but that doesn't help anyone else because it doesn't exist for anyone else to use. Google has an internal meeting before each tc39. also a strong supporter of a filter reject method because he also sees filtration the exact same way that I do. And so he screws up just like I did.

MF: I believe you, and on the original problem statement I believe what you said: that people do mistake the filtering in versus out. I don't know how further making that point is helping make the point about whether adding a "reject" would actually help those people, if they would even be aware of the existence of reject, or they would still reach for filter, and be confused about which direction it was.

MF: I remembered the last thing I had wanted to cover which was on the objects versus maps thing. I see Waldemar's point about Maps just being kind of the more technically appropriate data structure, but really objects are going to be much more ergonomic. So I would be supportive of the null prototype objects.

MM: groupBy is bringing us to the edge of a lot of power, something that mapReduce for example at Google, which although it's called mapReduce is really map, groupBy, and reduce, those things actually go surprisingly well together. The result of accumulating things into a group is to reduce it as you accumulated. I'm not suggesting that we try to package all of that together, but I think that we should keep in mind that there is this very powerful way of dealing with data that In a interesting data, parallel manner, that groupBy does naturally fit with. The particular implications that I'd like to bring here is, I want to strongly advocate first of all that we go with the Map as the result not an object. I'm glad we're all on board with rejecting an object that inherits from Object.prototype, even though an object without a prototype is often unpleasant to deal with because too many tools assume they can print something. And you try to print an object with no prototype and it throws or if you get very unlucky, then a groupBy key might happen to be toString - Well I suppose then the value would be an array rather than a function so it wouldn't try to print it. But altogether, one of the reasons we introduced Maps is because objects as maps - objects where the keys are computed rather than statically known, objects are just bad at that and Maps are good at that. And in addition Maps allow the keys to be something other than strings or symbols. And for these powerful uses of group by that's actually quite significant. And you think about the fact that we've got a active records and tuples proposal that enables records and tuples to be complex data that serves as indexes into Maps, records and tuples are never going to be names of properties of objects, but they will be useful data on which to group by.

MM: And finally, I have to bring up a procedural issue. Even though I'm a fan of the groupBy part of this proposal, which is the groupBy part of this proposal really is a distinct proposal, unless groupBy I had been in the stage one proposal. I think it's Stage jumping for group by to sneak into stage two, without having gone through stage one.

JRL: I added it because it was requested during the initial presentation that I gave about array filtering, but I can see that this is a separate proposal.

MM: Okay, thank you. Thank you,

KG: On the topic of objects versus Maps. I agree with everything Mark said, that you really do unlock a certain kind of utility with this method by having the return type be Map. On the other hand, for many common cases, you are just sorting into a fixed number of categories, and I expect that I will be destructuring the result in a lot of those cases. Like, I will be mapping to "a", "b", or "c" and destructuring { a, b, c } out of the result. And I can't do that with Map, and having to transform it into an object first so I can destructure is also super obnoxious. So, as I can't think of a way to be both ergonomic in the way that I want for common cases and powerful in the way that Mark describes, I would like to propose possibly just having both: having a method that returns a null prototype object, as well as a, for example, a groupByMap that returns a Map for the case where you need that more powerful thing and are willing to sacrifice the ergonomics for it.

JRL: Okay, that sounds reasonable to me.

WH: Yeah, I second Kevin's suggestion. I can see the use cases for both Maps and null prototype normal objects. I would not want to have objects with regular prototypes as well.

PFC: MM already said what I was going to say. I wasn't necessarily going to make the procedural argument, but I'm very excited about the partitioning functionality as a proposal and lukewarm about filterReject. So I think they would be good separate proposals.

JHX: About the filterReject hole problem. I think the filterReject should keep in line with the behavior of filter. So it it should skip the empty slots. I think it's too late to fix the problem so we only try to do is to keep an eye out with older methods. but I'm not sure about groupBy. We could treat the empty spots as undefined, but maybe it's also useful to treat empty slots as a special case and make it (?) inreturn results.

JRL: I heard two parts to that. One about filterReject, and I believe that filterReject ​​should skip holes because that's the behavior of filter. So the same reason that I agree that findLast should mirror the behavior of find, I think filterReject should mirror filter. For a groupby I kind of weakly prefer to treat as undefined but I'm willing to go either way on it. I don't don't feel super strong.

JHX: Yeah, I agree with you.

JHX: My next point is, naming is always a bikeshed issue. I want to point out that filterReject. may have some conflict with Promise.reject. There are other contexts where we use the same word, but it seems avoidable. But I really hope if we have other choices I would like to see other words, not reject.

JRL: Thank you. I actually had that same opinion brought up when I was calling it select/reejct. I was hoping that filterReject would avoid any confusion because it starts with filter. Because then I felt like it was more closely associated with filtering than with promise rejection.

???: ??

JRL: I don't think it's appropriate to ask for stage 2 on groupBy. So I'll ask for that separately. I am looking for stage two on filterReject.

MF: I would not support stage 2 on filterReject until we've done further research on whether groupBy solved the originally stated problem here because I feel that if we have grouped by and it is a solution to your originally stated problem that we do not need filterReject.

JRL: Okay.

IID:(?): Yeah, Mozilla agrees.

AKI: It is worth noting to the procedural problem that since stage one is all about, you know, defining a problem as opposed to really carefully defining the solution to that problem it is debatable whether or not there's a procedural issue at all because this is potentially a solution to the problem that was brought.

JRL: I'm okay with just asking for stage 1 for groupBy.

MM: Thank you. I would feel uncomfortable -I understand the argument Aki made, but I would feel uncomfortable with that. So, I'm glad you're happy to go to stage one with groupBy.

JRL: okay, so I think I'm with the resolution here. I'm definitely going to split groupBy into its own proposal, and then, I'm just asking stage 1 for `groupBy`.

WH: Sounds good. I support stage 1 for `groupBy`.

MF: Great. I don't want to be difficult here, but like Aki was saying earlier, stage one is about defining a problem. Stage two is about selecting a solution. "groupBy for stage 1", I don't think is a meaningful statement here. We can be trying to solve just your filtering problem or trying to solve the problems that group by solves. We're not trying to group by if that makes sense.

MM: Okay, groupBy solves a much bigger range of problems. So I would certainly. So maybe there's some writing that needs to happen before we can do this. But I would be willing to say that the problems that groupBy solves are well enough understood that I'm willing to say let's go to stage 1 on that set of problems with groupBy being the example approach for addressing those problems.

MF: I'm fine with that. Please Justin in your description in your repository, address the problem and not just the solution.

WH: I take a different procedural position and I would say that, in my opinion, the `groupBy` proposal is almost at stage 2. We already have spec text for it, with the only modulo being that I would want the prototype gone from the produced objects and possibly a Map version.

JRL: So, I think with agreement that the Prototype object has to be changed to use object.create(null), or we have to use a Map, or a solution that does both. I think that's an agreement. There's also holes, which I think we still need to discuss but we can do that at stage one, and naming, which I think we're in agreement that just normal "groupBy" is fine. I think that is what I'm proposing to go to the stage one, that agreement

JHD: I completely agree with the point making but I also think if we're going to consider both filterReject and groupBy separately, then they need to have two separate repositories for clarity and organization, and what we name those proposals and what stage we decide they are is a separate thing. But I think it's useful to have a specific repo that talks about groupBy, the problems it is solving or addresses, the prototype thing, and so on. So I think because of that, we need, it's prudent for us to separate it. Whether that goes at stage 1 or 2.

JRL: I agree.

AKI: Do we have a conclusion to record here?

JRL: I'm hoping the conclusion is groupBy reaches stage one.

JHD: Can we come up with a name for the problem that groupBy solves and perhaps grouping with its own repo. Okay. And then that addresses Michael's point and then filter rejected be discussed separately.

JRL: That seemed reasonable. So I'm asking for "array grouping" to go to Stage 1.

[general agreement]

JRL: Okay, then I'm being blocked from reaching stage 2 for filterReject pending progress on array grouping.

MM: I'm just un-enthused about `filterReject` period.

AKI: Is that the same thing as blocking consensus? I'm sorry. I'm a little bit unclear.

MM: So what am I agreeing to? If I were to agree to stage two, I'm sorry I keep having to for a refresher as almost What is the implication of advancing solution?

MF: I would not like `filterReject` to advance to stage 2 until `groupBy` has had further progress, so it should not advance to stage 2 today. I don't think we need to go into process discussion right now.

### Conclusion/Resolution

- array grouping gets stage 1
- filterReject does **not** get Stage 2
