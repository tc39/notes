# 105th TC39 Meeting | 3rd December 2024

-----

**Attendees:**

| Name             | Abbreviation | Organization       |
|------------------|--------------|--------------------|
| Michael Saboff   | MLS          | Apple              |
| Dmitry Makhnev   | DJM          | JetBrains          |
| Nicolò Ribaudo   | NRO          | Igalia             |
| Jesse Alama      | JMN          | Igalia             |
| Luca Casonato    | LCA          | Deno               |
| Daniel Minor     | DLM          | Mozilla            |
| Waldemar Horwat  | WH           | Invited Expert     |
| Chengzhong Wu    | CZW          | Bloomberg          |
| Jirka Marsik     | JMK          | Oracle             |
| Jack Works       | JWK          | Sujitech           |
| Chip Morningstar | CM           | Consensys          |
| Ujjwal Sharma    | USA          | Igalia             |
| Andreu Botella   | ABO          | Igalia             |
| J. S. Choi       | JSC          | Invited Expert     |
| Ron Buckton      | RBN          | Microsoft          |
| Keith Miller     | KM           | Apple              |
| Chris de Almeida | CDA          | IBM                |
| Jan Olaf Martin  | JOM          | Google             |
| Jason Williams   | JWS          | Bloomberg          |
| James M Snell    | JLS          | Cloudflare         |
| Jordan Harband   | JHD          | HeroDevs           |
| Philip Chimento  | PFC          | Igalia             |
| Richard Gibson   | RGN          | Agoric             |
| Eemeli Aro       | EAO          | Mozilla            |
| Istvan Sebestyen | IS           | Ecma               |
| Sergey Rubanov   | SRV          | Invited Expert     |
| Devin Rousso     | DRO          | Invited Expert     |
| Samina Husain    | SHN          | Ecma International |

## Briefing on the formation and goals of TC55 (or, All About Moving the WinterCG into Ecma)

Presenter: James Snell (JSL)

- [slides](https://docs.google.com/presentation/d/1WnqF7y52QlPRw737ZOTC4rdmJ65-nT9BbOD05jr2sjE/edit?usp=sharing)

JSL: Hello everyone. It’s been a while since I’ve been to a TC39 meeting. Good to be here. I was previously here as an invited expert, now I’m representing Cloudflare. I’ll talk about WinterCG and about TC55 or about all moving winterCG to ECMA. And talk about what WinterCG is. We have 30 minutes scheduled for this. I will try to get through this relatively quickly so we have time for discussion and questions and that kind of thing. If I skip over some key detail, just go ahead and head it to the queue and we’ll address the questions afterwards. But what is WinterCG and started a couple years ago. We started getting more and more non-browser ECMAScript runtimes like Deno and Bun and porffor, Cloudflare Workers and others. Really started to emerge in the ecosystem. There was a risk of fragmentation in the ecosystem where you know node might have one set of globals, you know, web platform API and Deno had a different set and Bun and whatever and risk of adding the ecosystem in the individual run times. WinterCG started as, the original idea is let’s get all the run times together to at least agree on a common set of web platform APIs that we were going to agree to be interoperable to run. And call it the minimum common API. This is basically just an informal spec that basically just says if you’re going to do your out person use, if you use streams, use ReadableStream, writable stream. It’s a minimum set of APIs that we should expect to exist in all of the run times. We should expect them to be there and expect them to be consistent with each other.

JSL: Now, this is original set up as a w3c community group. If you’re not familiar with, you’re not allowed to publish normative specs and do notes and recommendations and informal recommendations. You can’t have anything it says normatively this is what you must do. But almost as soon as we WinterCG as soon as we put out this minimum common API draft, this document, we immediately had called from the ecosystem to say let’s have definition of compliance and had people making claims we are WinterCG compliant run time or this module is module is WinterCG compliant and had no definition of what compliance was and nothing we could enforce.

JSL: We had other discussions about hey what do we do with fetch since fetch on the server works differently than fetch on the browser? What do we do with some of the other APIs that we were being asked to look into? For instance, streaming crypto, adding streaming capabilities to WebCrypto and that kind of thing. We discovered we really didn’t have a good structure for actually talking about normative things. We couldn’t do normative definition of compliance. We can’t really have a real clear inaction. How do we relate to WHATWG and how to relate to some of the other standard efforts. We took a step back and wanted to formalize this and come up with a better approach to how we deal with all these different questions. That’s where we’re at now with moving WinterCG into ECMA as a technical committee not just TC55.

JSL: The charter, pretty straight forward. This is just copied directly from our draft charter right now. Define and standardize is the key part here a minimum common aPI service. Along with a verifiable definition of compliance. What is this going to mean? Minimum API is not advanced APIs. It is a list of other APIs that exist, all of them web platform APIs. So things like readable stream and URL and others in there. The intent of minimum common API is not following something new but a subset and compliance level if you are a compliant run time compliant with the spec, these are the APIs that you will have. They will pass these set of tests defined in either Test262 or the web platform tests. And this is how those things must be implemented. In order to give ecosystem a common base to write code on so we’re not fragmenting everything things don’t just work in Deno and Node, and Test262 doesn’t overlap with web APIs. We don't want to create a whole new version of fetch spec. What we might do is cover things that web platform is not like CLI APIs or anything that is needed like on a server platform. And of course all these things will be operating on the royalty free policy.

JSL: Program of work that minimum common API is the primary piece of work for the foreseeable future and defining what that is and compliance of that is. When I say compliance, what is the subset of the web platform tests that the run times must be able to pass? Are there variations in behavior from the web platform that needs to be standardized? For instance, fetch on the server is not necessarily going to have all of the core requirements in there. Subset of those that we need to define it as out of scope for these environments, that kind of thing. For anything that is—collect requirements of non-web-browsers with input feedback. If we have a change not the spec and go to WG and say here are the requirements we are discussed and here what we identified and work with the process to make the changes if we can. So we’re not trying to change anybody’s process. We’re not trying to go around it. We really want to have a form to work within that but still be able to discuss common requirements, that kind of thing. Should it be necessary, the committee will standardize new API capabilities relative to serve side runtimes. We identified a couple of these and some of these, the key focus is the minimum common aPI. And then we have the notion of standardize and maintain conformance level and standard that is one level. Another one may be if your runtime does CLI apps, here is another set of APIs that you need to be able to support. If you’re doing sockets, here is another set of APIs that you need to be able to support, that kind of thing. Each one of those is defined as a separate conformance level.

JSL: Working with others. We had a lot of questions how to interface with other groups? And again, we’re not going to fork anything. We are going to work within the process of those other groups, whether it’s TC39 or WHATWG or some other w3c working group. It doesn’t matter. We will use this TC55 as a form of discussing and collecting requirements and go off and do the contributions with the other specs as they are being discussed.

JSL: We already talked about conformance levels. We will have a number of these. First one and the primary one we will be focusing on initially is the minimum common.

JSL: And again we are keeping everything royalty free.

JSL: That’s the presentation. I wanted to go through that quickly. I wanted to make sure we have plenty of time with discussion questions if anyone has any concerns. I know there are a few folks here like LCA and ABO involved in this process. So happy if they have some comments or anything to add to this as well.

NRO: I’m happy to hear your plan to have normative references to what are asked for example for the common API. I tried in the source maps and we struggled a little bit with saying those things were normative. So next I was planning for the certain spec to work through ECMA rules to be able to actually have normative references to WHATWG and happy to hear we see this in TC55.

JSL: That is one of the key things that we will need to work through is how do we have those normative references for that and what are the requirements there. It’s one of the open questions and definitely something that is great to see.

SYG: I’m missing a step in the reasoning here. I heard in the beginning that you are a CG in w3c and you can’t publish stuff normatively. My understanding of the substitute is do it via a WG. An example is WASM, where the CG hands it off to WG to stamp. Your reasoning CG can’t do this and we’re moving to TC in ECMA. I’m missing some of the middle part there.

JSL: So we basically put it to a—not necessarily a vote, but just a consensus decision within the WinterCG members. Hey do we want to do this as a w3c working group or ECMA? And the majority folks came down on just saying, hey, they prefer the ECMA process, let’s pursue this. We could have gone either way. The ECMA committee is just the one we landed on that everyone is most comfortable working.

LCA: There’s another part to this which is that when we initially started trying to figure out how to publish standards, one of the options we also looked at is keeping the community group in the w3c but also having a technical committee within ECMA to actually normatively standardize things. which unfortunately due to various policy reasons from within ECMA and the w3c was not possible. But, yeah, we were really trying to get to the point where we could have something that would work similar to the WASM group where we can have an open—relatively open discussion with relatively little requirements from people that want to join and then have a place to standardize. I think we have figured something out with the ECMA secretariat where the invited expert policy is lenient enough for us to enable us to do that within ECMA.

AKI: I just want to add here in case it wasn’t clear, there’s not currently a working group in w3c to correspond to this community group. Regardless in order to publish something a new group needed to be chartered.

SYG: Right. Thanks for that. Can I respond to this? Can you say more. I heard a little bit—I heard thing about why the participants prefer the ECMA working mode which is the invited expert thing. Were there others that you can share?

LCA: We initially had—so we were initially also unclear about how exactly the WASM process actually works with the community group and working group because we got some conflicting information from folks at the w3c about like where standardization actually happens. And we did sort of more quickly get clarity from things within ECMA because we also had closer contact to folks within ECMA. Ultimately, it could have gone both ways. It just happened to work out such that we had more contacts with folks at ECMA and we within the group thought that this was the more convenient place for us to do this.

WH: Can you say more about how the conformance test would work?

JSL: For the minimum common API, the intent really is to just specify a subset of web platform tests. So basically just calling out which ones these run times are expected to pass, which ones are expected to fail, which ones—where variances and behavior may exist. So it really will just create a profile of the web platform tests to say here is the subset you have to be able to pass. That will be the conformance tests for the minimum common API. Other ones like if this committee does go off and produce a novel spec, then it would define a set of tests in the web platform test style whether or not it would be added to web platform tests or some other project. That remains to be seen and determined. We would define what those tests are for those particular new specs.

CM: I heard lots of references to W3C and WHATWG and things that are explicitly server platforms but I wanted to check (and I suspect I know the answer) that TC53 and the work they’re doing is on the radar. Because I think there will be considerable overlap with a few of the things that are in the APIs that they’re specifying.

LCA: I think we had a lot of discussion during the charging process also with you on figuring out how to like cleanly split between what TC55 and what TC53 does. For those unaware, TC53 is the technical committee that works on something very similar to TC55 but more focused on embedded devices and devices that may have more resource-constrained—more constrained resources. I think the overlap there is definitely exists, but I think there is a clear case to be made that sort of our devices are able to run full fledge web servers and things like that do not necessarily fit into TC53 scope whereas devices that have, for example, no asynchronous I/O don’t really fit into the scope of TC55. Surely going to be overlap, but I think they are sufficiently—like, the use case they’re sufficiently different.

CM: All of that seems entirely valid to me. I just wanted to make sure that this was a coordination point that was consciously part of your process. Sounds like the answer is yes. I’m happy with that.

JSL: We’ve been getting—part of the chartering process, we had the calls and reviewing the charter draft and went around and trying to figure out the right language in the charter to cover this. It’s like are they resource-constrained? Are the servers well resourced? We couldn’t figure out good wording. I would love if folks take a look at the charter draft and come up with better wording. We want to make sure a good clear line between 53 and 55. I also want to make sure there’s a really good open dialogue and collaboration going on between the two technical committees to make sure that we are at least driving towards consistency.

MS: I know that Deno is involved and are Bun and node involved in the discussion of coming up with APIs.

JSL: Deno for sure and node active contributors that are involved. Node as a project is too large and too diverse for any individual to speak on behalf of the project without getting the technical steering committee explicit listen on board. It’s the whole thing. But we have node contributors and core contributors who are involved. Bun folks have been involved in conversations. Probably not as much as I would have preferred. I’d like them to get more involved and more active in this. But we do have run times. I’m also representing workers and proffor developers there. We have quite a few.

MS: Thank you.

PFC: Another question where I suspect I might know the answer. But we talked yesterday about the annotation in web specs for exposing something in all environments, `Expose=*`. I’m wondering if you see the minimum common API as a superset of those things.

JSL: It can be. I think we need to go back and look at this rule about whether it’s purely computational or not. If you look at the stuff in the minimum common right now, there are things like set time apps. There are things that wouldn’t be purely computational. But I definitely think there is some area of overlap there that we need to seriously look at and consider. I do think that TC55 would be a great venue to answer those questions which API exist in the ShadowRealm? This is a venue to discuss that.

PFC: I’m hoping the overlap is the minimum common API is a pure superset. Of course setTimeout should be included in every server runtime even if they can’t be exposed in audio worklet or ShadowRealm or whatever. It’s the opposite that I would be wary of where –

JSL: Lost you. Definitely to the point that you’re making there, absolutely. I definitely think that given the spreadsheet, I want to look at minimum common API with the rule of set of computational things and on the list anything missing from the minimum common that should not be there?

ABO: I don’t think there are. I looked at this before like with the new update, I haven’t checked. But the intention is definitely that the minimum common API is a super set of `Exposed=*`. So I know there was some question about whether crypto should be part of the—web paper should be part of the set of the globally exposed set. And in terms of whether it should be exposed in AudioWorklets, because it’s supposed to be only in secured context or something like that. And it’s not clear how secure context works in the server side environments, but in any case, web crypto is I think an API that is it currently in the API? I’m not sure. I think it should be.

JSL: We have discussed it. This is a really good question that I think T C5 5 should look at first is your exact point. What does secure context mean in the server environment like node and Deno and that kind of thing? The entire environment is secure and realm and that’s how we operate and we have these available and we don’t restrict these things. It would be nice to have a formal definition of that. It’s easier for us to address these questions moving forward.

MAH: I should have put end of message. I had suggested the common API is a starting point when considering which APIs to include in shadow realm. I’m not surprised at all there’s significant overlap and they’re consistent.

CDA: That’s it for the queue.

JSL: So finish up a couple minutes early. Feel free to reach out. Definitely happy to get reviews on the charter as we go here. I don’t remember exactly when the meeting is for—when the charter will be looked at again. Next week or something like that. If you have any comments or feedback, let us know.

### Speaker's Summary of Key Points

JSL (summary): Just want to emphasize a desire to closely work with other groups like TC-39, TC-53, WHATWG, etc to work collaboratively as much as possible. In particular, I think we likely need to workshop some of the charter language that would differentiate more with TC-53's charter.

## Stabilize to stage 1

Presenter: Mark Miller (MM)

- [proposal](https://github.com/Agoric/proposal-stabilize)
- [slides](https://docs.google.com/presentation/d/1474EreKln5bErl-pMUUq2PnX5LRo2Z93jxxGBNbZmco/edit?usp=sharing)

MM: I’m going to present and I would like to record the slide show and and turn it off with the questions. This would be permission for recording for public posting. Does anybody object? Recording the presentation itself with audio with public posting fine.

DE: I support this. I want to ask to the anybody who is good with technical set ups that we offer this presenters in general. I think a lot of people put good work and I’m glad you’re setting this path.

MM: So I’m proposing stabilize and other integrity traits. We have existing set of integrity levels in JavaScript as background frozen, sealed, and non-extensible and the arrow of this diagram represents “implies” and if frozen is sealed and non-extensible and up the chart is the integrity levels and the levels were to support high integrity programming and served the function rather well but there’s still some weaknesses we would like to address. On this diagram by the way on the left we have the functions that bring about the integrity levels and on the right we have the predicates that test an integrity level and in the middle is the name of the integrity level’s states the object can be in. And the bulk of the presentation will focus on the states.

MM: So when considering introducing new features like the integrity levels, integrity traits I’m about to show, this raises the question about when should a new feature be considered an integrity trait? There’s several aspects of the existing integrity levels that we’re going to take to be defining of what it means for something to be an integrity level, which is that it’s a monotonic one-way switch, for example, once an object is frozen, it is always frozen. That it brings about stronger object invariants and better support higher integrity programming to make things more predictable, and that a proxy has an integrity level if and only if its target has the same integrity level. For example, a proxy is frozen if and only if its target is frozen and this if-and-only-if upholds the idea that the target is the entirety of the bookkeeping to keep track of whether the proxy should be considered to have that integrity level.

MM: There’s also a distinction between the existing integrity levels that we will be carrying forward that is some integrity levels are explicit and some are emergent. What I mean by that is that non-extensible is an explicit integrity level because it’s a fundamental part of the semantic state of the object that has to be represented explicitly both in the spec and in any implementation, whether an object is non-extensible or not. And an object only comes to be non-extensible if explicitly made non-extensible. And sealed and frozen are emergent integrity levels in that they are defined by conjunction of other conditions and if the conjunction holds, then the object is considered sealed or frozen independent of how that conjunction came to be. So, for example, if I have an object that is non-extensible but has a single own configurable property, it is not sealed or frozen, but if I delete that property, then the object becomes both sealed and frozen because a sealed object is just a non-extensible object in which all properties are nonconfigurable, nonproperties are nonconfigurable and sealed is non-data properties are also nonwritable. And a particular reason why this distinction is important is that there’s only proxy traps for the explicit integrity levels. There’s an event extension trap that is extensible trap because that’s the fundamental state change that the proxy needs to be able to intervene in. There are no proxy traps that correspond to sealed or frozen.

MM: So the way we got started on this journey is that we are doing hardened JavaScript and doing the shim for implementing hardened JavaScript and level has harden JavaScript directly, and hardened JavaScript is explicitly trying to support have harden for JavaScript and has an operation implemented as a library in the session, implementable as a library which is harden which is a transitive deep freeze, transitive by own property walk and inheritance walk. Walking up the inheritance chain and walking forward along all properties and applying the freeze operation to all objects that it encounters. We are not in this presentation proposing hardened as an integrity level or anything else. It’s just an example of the library that is proving to be useful. And the important point of it is that it tamperproofs an API surface by freezing each object at each step of the transitive walk. Hardened JS in addition hardens all the primordials. All the primordial objects, all of the built-in intrinsic objects that exist before any code starts running which is all hardened before code starts running, and the result is that these are the objects that are explicitly shared by all code running in the same realm, and by hardening them all before code starts running in the realm you’re in the position to isolate the effects of different portions of code from each other. And we’ve been doing that since eCMAScript 5 days under other names.

MM: But we found that there are three weaknesses that we would like to address. So our first try was to address all three weaknesses with one additional stronger integrity level, which we’re calling “stable”. And the idea would be that the harden operation I preferred to would be changed so that instead of freezing the object at each step of the transitive walk, it instead stabilizes each object at every step of the transitive walk. And by addressing all three of these weaknesses, the stable integrity level would be strong enough.

MM: However, in talking with SYG on a hallway conversation at the last plenary, we realized that a major motivating use for one of the changes that stable would introduce, one of the stronger invariants, would be extremely useful for the structs and Shared Structs proposal. I will get into the specifics of that. The key thing if the new feature is brought in only by the stable integrity level, and stable implies frozen, then it cannot be applied to structs cross realm not definite. It cannot be frozen. Unshared instructs can be frozen but they need to benefit from this feature even in their initial non-frozen state. They are generally objects that you for most purposes won’t want to freeze. Because they have properties that are mutable. But the key thing is that structs have a fixed shape implementation. In current JavaScript, there’s no way to do that compatibility with the language and the new feature that would have been introduced by stable would have enabled structs to have fixed shape, but only if the new feature could be applied to non-frozen objects.

MM: So Jim Barksdale of Netscape is famously said only two ways to in his case make money in business. One is to bundle and the other is to unbundle. Let’s examine a full unbundling of the features of all of our integrity levels into separate explicit orthogonal as possible integrity levels. And now because these are in a graph, not a fully ordered hierarchy, we’re going to shift away from the term “levels” for all of these and just refer in general to integrity traits from now on rather than integrity levels. So with these fully unbundled into separate explicit traits, this gives us a good framework for talking about what each of the separate features would be that address the different weaknesses.

MM: So fixed is the one that would enable structs to be fixed shape. Right now in JavaScript, there is this feature return override such that if, for example, a super class constructor ends by explicitly returning some value, then in the super call in the subclass constructor, following the super call, the this in the subclass is bound to the value that was returned by the superclass constructor. It is not bound to the object that was behind the scenes freshly made to be an instance of the class. And also at this point in the subclass constructor, takes control, the private fields pound value in this case are added to whatever object.return. That’s the case even if the object is frozen. So it’s possible to actually use this to build a WeakMap-like abstraction that this code example is extracted from. The proposal repo has a more complete code for an emulated weakMap that just used return override. And the key thing here is that if the subclass constructor is called with a struct object as the key and some value, then the language would obligate the implementation to add this private field to the struct. Now, the specification accounts for this semantics of how is it that these things can be added to frozen objects. It accounts for this by saying the private fields have a WeakMap-like semantics, but practically, all high-speed implementations we’re aware of, in particular all browser implementations we’re aware of, all actually add the private fields by a hidden shape change of the object. So in V8 are different shapes of objects have different hidden classes they call it, through the internal bookkeeping for keeping track of the shape. This would have to change the hidden class behind the struct. And this conflicts with a lot of the high performance goals that are motivating the structs proposal.

MM: So the idea is that if an object is fixed, then it cannot be extended using this return override, it cannot be extended to have new private fields. And in fact, there’s a precedent for this already in the language which is, by special dispensation, the browser global window proxy object is already exempt from having private fields added to it. And this is again motivated by a different implementation constraints, but again it’s motivated by enabling the implementation to avoid having to do something complex in order to implement the feature that nobody actually cares about for that case anyway. So “retcon”, retroactive consistency and continuity, is a fanfiction practice of trying to retroactively rationalize something that had been a special case. If we introduce fixed, we also get to retcon the dispensation of window proxy and say instead the window proxy simply carries the fix integrity trait. And this solves another problem with the special dispensation that that the special dispensation on the window proxy, which is it’s impossible for the library to do a fully faithful emulation on the window proxy on the non-browser window platform because of the inability for that emulation to prohibit the addition of the private field. The introduction of the fixed trait would make that same exemption available to an emulated window proxy.

MM: The next one is the overridable integrity trait, which would be an exemption from the assignment override mistake. So the assignment-override mistake is—I think the example explains it really well, ignoring the first object freeze line, the second two statements here. There’s a tremendous amount of legacy code on the web, particularly before the introduction of classes, that used this pattern in order to create class-like abstractions. So a function point that’s acting like a construction function, and then using this assignment to add a toString method to the `Point.prototype` that is inherit to object toString. What many projects have found is that in attempting to freeze the primordials in order to create a more defensible environment, for example, to inhibit prototype poisoning that they immediately break legacy code like this in that environment, because the assignment override mistake is that you cannot override by assignment a non-writable property that’s not inherited. So in particular, the object freeze makes the toString property on `Object.prototype` a nonwritable data property that therefore cannot be overridden on `Point.prototype` with assignment. The strict environment throws, and sloppy environment is worse and fails silently and the program proceeds to misbehave in weird ways. The idea here would be that if the object is made overridable, then in particular if the object prototype object in this case is made overridable, then its non-writable properties can be overridden by assignment in objects that inherit from the overridable object. So the parenthetical here is some people on the committee believe we might be able to fix the assignment override mistake globally for the language as a whole. I have no opinion one way or the other on this. I’d like to offline find about more of the evidence of pro and con. We’re just taking the position that if it could be fixed globally for the language as a whole rather than introduce an integrity trait, we would prefer that. And if that were to happen, we would remove the overridable trait from this proposal and just accept it as a global language fix. But if not, this is how we propose to fix it for objects that opt in to the fix by adopting this integrity trait.

MM: When writing defensive programs, in particular programs that are defensive against possible misbehavior of their arguments, possible surprising arguments, it’s very nice to be able to do some up-front validation early in the function to validate that the arguments are well-behaved in the ways that the body of the function will then proceed to count on, to rely on. And a particular pervasive need for this is that many functions that are responsible from maintaining an invariant have to also momentarily suspend the invariant, do something, and then restore the invariant. While the invariant is suspended they’re in a delicate state. For example, a function that splices a doubly linked list, that must go through a moment in time where the doubly linked list is ill-formed before the doubly linked list comes to be well-formed again. And why it’s in this delicate state with suspended invariants, it is quite often vulnerable to re-entrancy hazards. So if code that was brought in by the argument could interleave surprisingly during an operation that you do while the invariant is suspended, then that interleaved code might re-enter foo. So “recordLike” here is named and inspired by the records and tuples proposal. If for example the validated suspect argument is JavaScript primitive data then within the delicate region we can operate on primitive data without any worry because primitive data we know does not observably transfer control to any other code brought in by the primitive data. Records and tuples would create object-like records which are still primitive data and still have this guarantee of no interleaving and therefore no worry about interleaving hazards.

MM: What we’re proposing is that the one source of interleaving hazards that we cannot validate do not exist in the language as it is today is interleaving via proxy handler traps. And because even if recordLike to ensure that the object cannot interleave, checks the object is frozen and inherits only from something record-like and that it has no access or properties, all of that together does not give you safety if the object happens to be a proxy. So the idea is that if recordLike additionally checks that the object is non-trapping, then what that would mean is that if a non-trapping object is used as the target of a proxy, that no operation on the proxy traps to the handler, rather all operations on the proxy go directly to the target. To put it another way, the proxy acts exactly like the target in all ways except that the proxy and target continue to have separate object identity. And this simple way of specifying non-trapping, which is what we favor, is sensible if non-trapping implies frozen, so that the only objects you can make non-trapping are frozen objects, because the object invariance already enforce that if the target is frozen, that the only things the handlers can do is they can interleave other code during the access or they can throw, they cannot change the result of any of the proxy traps.

MM: So is because the handlers are already mostly useless, for frozen objects, but certainly too late too make proxies on frozen targets non-trapping, the idea would be that this additional opt-in would make proxies on non-trapping frozen objects non-trapping and, therefore, not able to cause interleaving. And it does this while still not providing an ability in the language to test whether an object is a proxy or not. So it does not break practical membrane transparency, while still turning off this interleaving feature of the non-trapping proxies, and thereby mitigating the proxy reentrancy hazard.

MM: As long as we are considering a full unbundling of integrity traits, we could additionally consider unbundling non-extensible into its two orthogonal components. And this would serve another retcon purpose. It’s already the case by special dispensation that the window proxy object, you cannot change what object it inherits from, and the `Object.prototype` object is born inherits from null and again by special dispensation, you cannot change what object it inherits from to something else, even when both objects are extensible, which they are certainly both born extensible. But nevertheless, they have this restriction. By making this an explicit integrity trait, then we can retcon window proxy and `Object.prototype` to account for this special behavior and again, we also enable higher fidelity emulations of the browser global window proxy object on non-browser platforms by making this selective prohibition on changing prototype available on objects that are otherwise extensible.

MM: And then, finally, if we unbundle non-extensible in the two features, this is the other, by separating into a separate integrity trait, would allow one to make an object in which new properties could not be added, but the object itself you can still change what object it inherits from.

MM: So this would be the maximally unbundled picture. The solid arrows are the implies. The question mark dotted arrows are maybe implied to be explored and discussed, it’s an open design issue. The only really compelling case for the dotted arrow is non-trapping implies frozen, it is actually possible to specify non-trapping if we relax that it implies frozen, but it is quite a complicated specification that probably is not worth the extra complexity and probably does not serve any actual purpose.

MM: So there’s a problem with this full unbundling, which is that it has five orthogonal traits. In general, we like orthogonality, it’s more expressive, it’s more future-proof, with regards to a picture that accommodates future additions, more exclusively, but is it really worth ten new proxy traps to support these five traits? And in our opinion, the current opinion of the champions of the proposal, it is not.

MM: So one way to solve this would be, instead of creating ten new traps, just create two new parameterized proxy traits that take an integrity trait name, protect, which brings about the integrity trait, and isProtected, which tests with the presence of the integrity trait. This raises a design question. It’s not necessarily fatal. It’s just an open design question for which we’ve have imagined answers, none of which we like, but all of which are coherent: as to how the new traps protect and isProtected could coexist with preventExtensions and isExtensible, since now, those would be existing traps that existing handler uses but now correspond to what is effectively a new emergent, a retroactively emergent integrity level. So when would an operation protect to trap extensions, versus when to have a trap(?) to protect non-extensible?

MM: The other approach to the cost of having so many different integrity traits, and so many different explicit integrity traits, is to rebundle to the minimal picture that still addresses the issues that we find strongly motivating. So this would simply not unbundle non-extensible, and leave it as an explicit integrity trait, forgo the retcon of the permanent inheritance property of `Object.prototype` and window proxy. And also, fold both overrideable and non-trapping back up into stable. So basically, this picture is very much like the picture of our first try, with the only difference being that fixed is broken out as a separate trait. And in this minimal picture, we choose not to have any implication arrow from fix to any other trait, so that fixed can be applied by itself, and then retconning that aspect of the window proxy, since that is extensible, and therefore if fixed implied even non-extensible, you could not apply it to the window proxy. Altogether, just speaking from myself as one of the champions, I will say that I find this minimal picture to be the most attractive, even though it’s foregoing some of the benefits of the further unbundling, but any intermediate between the fully bundled and unbundled pictures this is proposed for Stage 1. So exploring the design space is certainly the appropriate exploration in Stage 1, not settling on a particular preference, necessarily going in.

MM: And at this point, I will break for questions. But first, I will, as agreed, stop the recording.

SYG: So thanks, MM. I support Stage 1. I need it for—a fixed for structs obviously, as you have said. I discussed this after our chat with other V8 folks, and in the spirit of simplicity, if possible, I think V8’s preference would be, if we can retcon non-extensible to imply fixed. If it’s web-compatible. To that end, we have added a use counter to check how many times we have seen in the wild how many times people are adding to global this. We mentioned this one reason for being able to explain the window proxy. If we unbundle fixes. But I want to raise our preferences. And I am not sure how—for us, at least, the ability to explain window proxy and to virtually window proxy is not a motivating or a compelling reason for it to be unbundled. So this is Stage 1. This is not a Stage 1 concern obviously. But I would like to raise it and get your thoughts. How compelling a motivation do you think the explanation of window proxy is, to keep fixed unbundled?

MM: I think it’s not. I actually—this is the first I’ve heard of this particular suggestion, of having non-extensible imply fixed. By my immediate off the cuff reaction, you know, in ten seconds of thinking about it, I like it. The reason I refer to the return override mistake and assignment override mistake is, I consider both of those features of the language to largely be mistakes. And the assignment override case, very strongly so, because as far as I know, no one has ever seen production non-test code in the wild that purposely made use of the assignment override mistake. The return override mistake, to add private properties to preexisting objects, is certainly also very, very obscure. The use of it to create a WeakMap-like abstraction that I’m doing in the proposal repo is just there as a demonstration of the possibility. It’s not because I expect anybody to make use of that. So I don’t think I’ve seen a use of the return override mistake in production non-test code that was on purpose, where the object that was being extended was a preexisting object. It was one that was not created fresh during the class construction. If anybody does know such a counterexample, I would be very interested.

SYG: That’s also our hunch. And in a few months, whenever this use counter hits stable with the larger population, we will have a better idea of how much in the wild use there actually is

MM: I want to applaud you and applaud the V8 team and the Chrome team for deploying this use counter. This is an overinvoice to invest in doing the experiment.

KG: Yeah. I do like this exploration. I think that the object model in JavaScript is a little bit confusing. As you say, things are bundled that don’t necessarily make sense to be bundled. I am happy going to Stage 1 for this proposal to continue exploring this space. I want to raise a concern which is that, I think, changes to the object model are very, very conceptually expensive for developers. Having more states that things can be in is at least potentially very expensive in terms of reasoning about the possible behaviors of code. So I am not convinced that all, or possibly any of this, is going to be worth doing, in terms of the benefits it brings versus the additional complexity. Which isn’t to say I don’t see the benefits. I would certainly like to redo the whole language to have more reasonable behavior. But tacking it on is not necessarily an improvement. I am concerned about the complexity, happy to continue exploring in Stage 1

MM: Good. Thank you. I share your reluctance. Obviously, I come down on the other side altogether, but that’s due to a difference in weighting of the inputs, but I certainly agree that the costs are real. I am curious, from an explanatory point of view, do you prefer this picture, the minimal picture, or the fully unbundled picture?

KG: That’s a good question. I am not sure. I think I would have to sit with both of them for a while to have an opinion.

MM: Okay. And I encourage, you know, everybody to ruminate on that, I would be very curious as we continue the exploration. It’s much more subjective to get people’s sense of how much of an explanatory burden it is. It’s very much more something that I just need people’s feedback of what they expect.

KM: I also want to say that I think there’s a good chance this is—has a lot of implementation complexity in I guess the implementations just because I think a lot of the logic of frozen and stuff, there’s a long tail of security bugs, but I am not sure. We have to look more at implementation. Obviously not a Stage 1 blocker.

MM: Thank you. And obviously, in doing the exploration, we get as much feedback as we can from existing implementations, high-speed implementations, that with the new degrees of freedom, might be painful given some of the existing optimizations.

NRO: Yeah. Thanks, MM for already incorporating a lot of the feedback I gave. For context I was in a discussion with MM, where we discussed bundling and not bundling, and my recommendation is that unbundling, with slides with more things and arrows that look much more complex, is actually more simple to explain. With the reason being, if we bundle everything, you have to learn everything at the same time. And this is a very complex topic. And like, developers today struggle to know the difference between sealed and un-extensible, so there is just a label to learn the properties one by one, rather than having, like, understand three of them at the same time. So yeah. Like, I am happy to see both options are on the table. I hope that we can go ahead eventually with the unbundled version.

MM: Great. Thank you.

NRO: And my next point, which is very related to this. All of this work, and discussions can, very difficult to understand. And while we were reviewing proposals internally at Igalia, one suggestion we had was that even for terms that might seem obvious to us that participate in TG3, it could be great to have a glossary or explanation or pointers of what they mean in the proposal itself. Even terms like reentrancy, and things like that that don’t come up in most proposals.

MM: Good, would you care to contribute some of that glossary writing?

NRO: I guess I could start by giving a list of words that people can find complex and we can work from there.

MM: Okay, that would be wonderful. Thank you.

CDA: That’s it for the queue.

MM: Okay. Any support for—I think I saw support for Stage 1 go past. Anybody wishes to explicitly voice support for Stage 1 and of course are there any objections?

### Conclusion

MM: Okay. So I see on the TCQ explicit support from SYG. Thank you. Weak support from JWK. Okay. I think I have Stage 1.

CDA: Yeah. You also have support from Jordan.

MM: Okay. Thank you.

### Speaker's Summary of Key Points

MM: There are a number of ways in which existing JavaScript fails to support client integrity programming well. The existing integrity levels have served us well as supporting high-integrity programming, but there’s extensions to the system of integrity levels that might be able to rest of the soft shortfalls and I degrees three particular motivating shortfalls to be the focus of the investigation, which is suppressing the return override mistake to enable fixed shape implementations of particular structs, the suppressing of the assignment override mistake, making it painless to freeze prototypes, and the introduction of non-trap to mitigate proxy reentrancy hazards.

## Module Harmony: where we are

Presenter: Nicolò Ribaudo (NRO)

- [slides](https://docs.google.com/presentation/d/1V2-4Hj-HBVQwdphcJUsrbmbitOPBMSf3HhKSvhBk4d0/edit?usp=sharing)

NRO: So hi, everybody. This is a summary/reintroduction/update of where we are with all the various module proposals. There is no normative, any normative discussion, any concrete request for this—for any specific proposal as part of this presentation. It’s more of a way to like set some common understanding for then the next presentations we will have about the specific proposals.

NRO: So I presented this module harmony presentation, like, one year, one year and a half ago. And there have been some changes since then. Both about individual proposals, and how we generally see the area and how various proposals interact with each other.

NRO: This was what I presented last time. We had this kind of dependency tree between concepts. With ModuleSource and ModuleInstance. At the root of the tree and then there were many other concepts depending on them. And we had this division in proposals. So we had this, like, blue proposal on the left introducing ModuleSources and source imports. We had these purple proposals in the middle that was introducing the module constructor with the hooks and like was giving a way to link to create modules from ModuleSources. And we had these module instance phase import that would let you import the module and would like some modifying statement and get a linked module object out of it, being the phase after import source. And this was interpreting the module expressions, giving you some syntax to get to this module objects. And then there were like various other proposals, depending on those. On the bottom left, we have deferred import evaluation are which didn’t have any dependency—like, on the rest.

NRO: So our understanding of this has changed a little bit since last time. So, first of all, import attributes is Stage 4. So let’s say we don’t really need to worry about it anymore. The proposal is advanced, so we had the source phase proposal and this is stage 3. The semantics are finalized and implemented in browsers already.

NRO: We now have a proposal, the phase import proposal, Stage 2. It’s on the agenda to go to stage 2.7 at this meeting, which introduces ModuleSources specifically for JavaScript Modules. And also, deferred import evaluation is now at Stage 2.7 and we also have an update about this proposal later at this meeting.

NRO: We have a new concept, deferred/optional reexports. This was originally part of the deferred import proposal. However, roughly one year ailing, I think, we decided to, like, unbundle it from the proposal because they had like a larger like—add more semantics than the deferred import proposal. We wanted to focus on them one by one.

NRO: Also, thanks to the work that GB put into this ESM phase proposal, we realized it’s possible to have module expressions and iterations to not depend anymore on the concept of the Module Instances. And instead, to just be some syntax for JavaScript ModuleSources. The ESM phase imports proposal is introducing some machinery to let you import ModuleSources by flowing the necessary metadata in some ways. And module expression, module iterations could just use the same machinery. So they are actually unblocked by the ESM phase imports proposal.

NRO: Also, we used to think of module declarations, as expressions. Because there were like about a bunch of shared concepts that were defined as part of the model expression proposal and then module declarations could be built on top of that. But that’s not necessarily anymore because of the most shared proposals are already—had been introduced by the various import proposals.

NRO: Also, we discussed last meeting, I believe, about static analysis for modules. This was originally part of the ESM phase imports proposal. So this JS module sources and modules were part of the same proposal as per request from last time this proposal was presented, it has now been removed from it. So now, the modules source static analysis will probably actually go together with the proposal that would introduce module loader hooks. So I marked them as depending on each other because we will probably need them at the same time.

NRO: We are not discussing anymore about the ModuleInstance phase imports, mostly because the main case was to get the module to then create workers from it. And this is now solved by the ESM phase imports proposal. There are still some possible use cases for ModuleInstance imports, as part of module loader hooks and compartments. However, it’s not clear whether it’s needed or whether ModuleSources plus some, like, constructor to wrap them is enough.

NRO: And finally, we have a new potential proposal that’s on the bottom right of the slide, which is about sync dynamic imports. And GB will talk more about it later in this meeting.

NRO: So we can divide the area into three main, like, clusters. One is the one where everything is ready to module sources. So if you want to focus just on this proposals, they are self-contained and they contain all the concepts necessary to understand all the other proposals in this cluster. So we have the source phase import proposal at the root and ESM phase imports is already building on top of that, and that—not only defines what ModuleSource objects for JavaScript are, but also separate for importing the JavaScript sources. So to continue the import process where if it was posed at the source face and working with WHATWG as part of web integration to create workers from these sources. And then module decorations can be built on top of these.

NRO: Exactly what these are? Modules as defined today are composed of multiple parts. It has some source code. If it exists. For Modules, it doesn’t have this course sewed right now. It just has parts node. That is like a spec, the spec way of saying it.

NRO: A module also has some metadata used are, for example, to resolve its dependencies. On the web specifically, this metadata includes the URL, and then you resolve from, like, URL of the module so you know where to resolve all the imports from. But the metadata can vary depending on the platform that is embedding JavaScript. After you start using the module, you start loading its dependencies. Each module has a list of resolve and like created modus operandis it depends on. It has some of the evaluation state. Like a module to be new, it could be linked with its dependencies, it could be—it could be awaiting or evaluated, either successfully or with some error. And a module is also exposed to its namespace object, and once the module starts evaluating, it progressively starts exposing the various exports from the module.

NRO: The various model source proposals are cut into this list in two by saying, okay. We have some immutable data. And we call this the ModuleSource. And then there is some state. And the state is what is part of the full module. So the module source is the mutable subsection. Like, a subset of the information needed to create a module.

NRO: As the way to get ModuleSources is, well, through the import source syntax that introduced by this Stage 3 import source proposal. There are other ways to get sources. For example, the `WebAssembly.Module` object can be explained as being a source. So there can also be APIs to get or create sources of specific module types.

NRO: A source is a module lazy been loaded. It has—all of its dependencies have not been loaded yet. It’s been posed at one of its earliest spaces. With the ESM phase imports proposal, you can complete this evaluation to like actually load its dependencies and evaluate it to get it to the final state.

NRO: The module declarations and expressions proposal would now give us a way to create this ModuleSources. Other than importing this. We can import them or declare one in line. So this proposal would not be introducing almost any new concept other than giving you syntax for some object that the language, through the proposals currently in the pipeline, already provides. Again we can define a source like this. This source would inherit some meta data from its parent. Such as the URL to then resolve the dependencies. And then you can import these sources exactly as you can import sources obtained to import source. And the loader would read this metadata and know what to do with the metadata together with the source to then actually progress in the module lifetime.

NRO: This means also that maybe the module expressions and declarations proposal will change the keyword to say source instead of module. Module still I would say, looks nicer. But one of the blockers for this proposal was there conflict with TypeScript syntax. TypeScript was in the process of deprecating it, but it’s good to know we have a potential alternative in case it’s needed.

NRO: There is also a proposal that is not part of module harmony, but we have been talking about in the context of module harmony, which is the structs proposal for the shared structs part. One of the challenges that the structs proposal needs to overcome is that if it wants to have prototypes for shared structs, it needs a way to tell whether shared structs whose definition is in two different threads is actually the same. The shared structure object is to get a thread, then it gets to the right local product type. One way that the proposal can solve this problem is by saying, okay. We now have the concept of ModuleSources. ModuleSources are immutable. So they are sharable. And we can actually explain the same module evaluated into two places, as being the same evaluation in the same ModuleSource. To share structs, definitions would be the same, if they actually come from the same underlying shared ModuleSource.

NRO: And yeah. This is like a drawing of how different modules can point to the same struct. But we have been discussing this both in the initial structs, in the to see if this is actually a viable solution.

NRO: We don’t have a second cluster, which is let’s call it the optional/sync evaluation cluster. This is about proposals that do not really affect how loading works or what a module is. They are here, but they just help us potentially skip some evaluation or like defer it. In this cluster we have the import deferred proposal. The deferred/optional re-exports, born as a child of import defer. And the new dynamic imports idea

NRO: So to recap what the goal of the deferred import was, it was to evaluate as little as possible and only at the point where you need it. So that you don’t need to validate everything while it’s been loaded. But for code, you can evaluate later. While having less friction than what dynamic imports require. Export defer was born as a consequence of this. But we noticed that export defer can make the language support built-in tree-shaking, that is, if I re-export binding and my importer is not using the binding, I can avoid loading the module where that binding is exported from. This is something that is very common in tools. And this is one of the reasons why tools are better than just using browsers. Other than loading 100 separate files, they also remove a lot of that code. Different tools have different implementations of tree-shaking. There is no shared standard in how to do it. So having this tree-shaking in the language might help significantly.

NRO: And yeah, while the import deferred proposal was Stage 2, this was left behind and we just defer this so Stage 2.7.

NRO: Sync dynamic imports are in the same cluster because they are something in between them, I am import defer, in again, GB will talk more about this, but the general idea is that sometimes it’s actually possible to do a sync import in some sense, that allows to keep what more import defer does. It has little friction as import defer. But unfortunately it only works in some cases. There are similar concepts in other parts of the ecosystem, like in Node.js you can require ESM and synchronously load these files and evaluate them. And it’s now also exploring these on `import.meta` for convenience. Again we have more from GB about this

NRO: And lastly, we have the custom loaders and compartment cluster, which includes all the tools to virtualize a module system. So the tools that will let you define how resolution works, without using a Node.js specific hook or a browser-specific implementation, but having a standard way of doing standard work across all platforms. And it allows you, for example, to implement hot reloading of Modules at language level and anything that is currently just—these proposals allow you to find your own type of modules and create some separation between different module graphs. When Modules get implemented or not.

NRO: We’ve received some feedback on these proposals since when they were first presented at the plenar, I think three years ago. At the time, we presented a new module constructor that gets a module source parameter and a series of hooks. The most important of which was the import hook and this import hook was, as you were linking the module, this import hook was called for every dependency. Getting the specified as a parameter and returning the loaded module as the return value. And this very closely resembles the existing host API for embedder spec. Some feedback was this might require too much back and forth between the engine and user code. And so there have been some discussions about making it more—let’s say, upfront imperative, as in you could like with the static analysis features, you would like get list dependencies and then manually link it for each module.

NRO: But there has been not much progress in this overall, other than a few discussions. So yeah. If anybody wants to help with this, you are very welcome. I know there are some people that want to help in in. But the current module harmony time is not working well for them but we will try to fix this this the future.

NRO: And this is where we are right now. I would be happy to answer any question. If GB is here, he will also be happy to answer questions, specifically about how the various proposals work together, or about proposals that are not being presented at this meeting. If you don’t have any questions, I hope this presentation will help you follow the next discussions about the specific proposals.

NRO: If there are no questions, I have a question for the committee: I’ve been asked to give this presentation because it’s difficult to follow the whole model space. But I would love to have feedback on the format. Like, would have been better if this presentation was done in some other way? Should have been longer or shorter? Should it have been focussed on different proposals? If anybody has meta feedback like that, it’s welcome.

KKL: Yeah. I wanted to expand a little bit on another point that appears to be an intersection of interests between module harmony and shared structs. One of the ideas that NRO has, that satisfies a constraint that I think is important for module harmony, is that there’s this open question of how shared structs, which are primitives, as values, are associated with their corresponding prototype instances. And in hardened JavaScript it’s important for us to be able to ensure that these prototype instances which are born mutable, can be frozen and isolated to a particular—we call them compartments. I think there’s an emerging concept of a cohort of instances of modules, that comes out of the primitives, and should be sunk lower into module harmony. And that NRO is proposing that there be a property that outpick token of what cohort it belongs to. If a ModuleSource, which is so he should with a ModuleInstance pass from one cohort to another, that it ensures that it gets a different instance and different instances of the implied shared struct prototypes. And I think this mechanism is growing in importance, and that I wanted to share that with you today. So that you can be prepared to hear about more in the future, especially those of us from the hardened JavaScript perspective. Probably we haven’t talked about it much yet

NRO: Okay. Yeah. Just to understand what a cohort is, it’s equivalent to the module cache being different to get the source module imported twice from different methods. So the one to find the host and the idea is like we might need for instance to expose its identity in some way. And this would be part of this custom loaders cluster. Thanks, KKL.

CDA: Circling back to Nicolo’s request about the feedback about the presentation. Was this helpful? Could it be—people prefer an update in modified form in some way? I think he would appreciate any feedback.

NRO: I guess it’s also fine to send me a message in matrix if you have any feedback.

## ECMA402 Status Updates

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/ecma402)
- [slides](https://hackmd.io/@ryzokuken/r1qXw2hQkx#/)

USA: So yeah. Okay. Let me know, if there’s issues, but I will try to be quick with this, and these are quickly hacked together slides. Before I begin, I credit all the editorial work that I am talking to here is not on me, but on BAN. But BAN hasn’t been here. So okay.

USA: 402 updates. Not much happened since the last meeting. One of the editorial changes that we did was by ABL. Basically in Intl number more mat constructor. There was incorrect markup for the notation variable. So this is not a big deal at all. Just some formatting issue that was fixed. Thanks, Anba as always being on top of these editorial things

USA: And after that, there was a change by BAN to clarify CollapseNumberRange. So this is for some context an abstract operation that is used by NumberFormat for collapsing number ranges. Basically, let’s say that you had a small range, within some degree of error. That is closer to, it could be formatted from something, let’s say, in please don’t quote me on this, 1.99 to 2.01 to approximately 2 and things like that

USA: So anyhow, CollapseNumberRange. It was clarified, more specifically, it can now add spacing characters. Is the reality because this is how LDML does things as well as how ICU implements it. This is just updating NumberFormat to improve things editorially.

USA: And as you might know from the last meeting, `Intl.DurationFormat` is Stage 4. The editors will be working on making it part of the spec ASAP. And that’s it. Thank you.

USA: Is there something on the queue? I don’t think so. No?

CDA: Okay. Thank you, Ujjwal.

## Immutable ArrayBuffer to stage 2

Presenter: Mark Miller (MM)

- [proposal](https://github.com/tc39/proposal-immutable-arraybuffer)
- [slides](https://github.com/tc39/proposal-immutable-arraybuffer/blob/main/immu-arraybuffer-talks/immu-arrayBuffers-stage2.pdf)

MM: I will ask the committee again for permission to record the presentation itself, including the audio with the understanding that when we shift to QA at the end, I turn off recording. But any discussion during the presentation would be default be part of the audio recording for public posting. Any objections? Thank you.

MM: Last meeting, we got Immutable ArrayBuffer to Stage 1. So to recap, the gray here is the existing ArrayBuffer API and the proposal would add at least these two features to the existing API, a transfer to a mutable method that returns an ArrayBuffer that has the immutability flavor and then an immutable accessor that is true if exactly for those ArrayBuffers that have the immutable flavor and the immutable flavor would be with the detached and sizable flavors. The behavior of the mutable flavor of arrayBuffer is that it would—its immutable accessor would say true. It’s not detachable or not detached. It’s not detachable. It’s not resizable. It’s next length is the same as the byte length and as the methods, the slice method that is a query method would still work, would still be there, but the other methods which would cause a change including all the transfer methods would throw an error rather than do what is normally expected.

MM: Status update: at the last plenary, the public comments were all positive, but I additionally got many private positive comments. I don’t recall receiving any negative comments or objections. So if anybody here did give me some negative feedback, please remind me. As of the last plenary, the spec text was already what I consider to be Stage 2 quality thanks to RG for that. And since the last plenary, Moddable has done a full implementation of the proposal.

MM: As of last plenary there were some open questions. And I will now—which I will now go into and tell you what our preference is on the resolution of these open questions. But in each case ask for the feedback today from the committee. So the existing `transfer` and `transferToFixedLength` methods both have a length, an optional length parameter. The `transferToImmutable` as presented at the last plenary had no optional length parameter and the question is, should it have one? And there’s an argument from orthogonality in each direction.

MM: The argument from orthogonality to omit the length parameter is that the composition of slice and `transferToImmutable`—or the combination of an existing `transfer` followed by `transferToImmutable`—already composes orthogonal issues changing the length and making something immutable and because it transfers, it would not interfere with being zero copy. And it just kind of keeps separate jobs being done by separate methods.

MM: The argument from orthogonality for including the length parameter is that we have got three—we would have then three different transfer methods and each independently has a length parameter that can be present or absent and you would just have the orthogonal combination of whatever the method does and whatever you ask for in the parameter. And so I think orthogonality is a wash.

MM: I’m advocating now, I’m changing my mind on this. I’m advocating now that we include the length parameter because it minimizes the damage from surprise. What I mean by that is that either decision might surprise some programmers. A programmer that expects that there is no optional length parameter and doesn’t use it in a language in which there is an optional length parameter experiences no damaging surprise. A programmer who does expect there is an optional length parameter in a language that does not have one might provide an optional length argument and then they don’t even get an error, the language just proceeds to then do something that deviates from their expectation and solemn deviation from programmer expectation is very dangerous.

MM: On those grounds, I now favor the length parameter. Should we add a zero copy slice method? Right now, we have got slice and transfer to immutable and they can be composed to get an immutable slice. But in the example code down here, if we have an immutable buffer and want an immutable slice into the buffer, we can just take the slice and transfer to immutable on the slice. But this technique for getting the effect is very hard to make zero copy.

MM: So the proposal would be to add a new method sliced-to-immutable whose semantics is exactly the same as this line of code that you see down here but with the implementation expectation that the new ArrayBuffer is a zero copy window into the original ArrayBuffer. NRO, I think it was, raised the issue about whether the accessor property for determining the flavor of an ArrayBuffer should be named mutable or immutable. In general, there’s a principle that boolean should have positive names so that the negation of the bouillon does not read like a double negative. If we said the accessor was immutable, then in order to say if mutable, you would have to say if not immutable which just seems much more complicated than saying if mutable. The contrary argument for immutable is that there’s a general convention of booleans defaulting to `false` and in particular the really nice thing about that absence is false-y. So if buffer immutable is run on the system before immutable arrayBuffers on the language without the accessor would do the same thing. It would be false-y, indicating, correctly, that the buffer in question is mutable. Both are reasonable pros and cons.

MM: All together, I’ll just again speak for myself rather than champions but I favor immutable as the answer because of the compatibility with absence I find compelling. And then there’s this complex set of open questions, all of which are about what the precise order of operations should be in the specification. And in the happy path, when everything just does what it’s supposed to do, this doesn’t matter very much. The consequence of the end of the happy path is pretty much the same. where the order of operations matters and where some of those other questions also explicitly matter is when you’re not on the happy path, the most important issue is: Does the failure cause a throw, or does it fail silently, doing nothing?

MM: There’s an unpleasant precedent in the existing ArrayBuffer system standard that we need to live with as we resolve this issue, which is some of the things that you would expect to throw already in the language, such as reading a field of a detached ArrayBuffer or setting a field of a detached ArrayBuffer, instead fail silently. There’s a long history about why that is. ArrayBuffers are trying to get grandfathered-in language. Something that was a de facto standard that was that the de jure standard needed to be compatible. However we got there, we’re there. So we can’t change those cases.

MM: So all together, our position is that especially for other subtler issues of, you know, observable consequences of order operations, overall we want to drive the answer to all of these questions by implementer feedback. because if it’s easy for an implementation to implement something that follows one particular order of operations and not others, that probably is the dominant issue rather than any semantic issue. However, there is a semantic bias that I certainly want to inject in that exploration, which is: when in doubt, throw. So the moddable access implementation, if you assign to an in-range field, i.e., a field that is an indexed property of the ArrayBuffer, rather assign the fields to rather and assign to fields of TypedArrays—such that when you want two ArrayBuffers, that if you sign to an index field, then it throws if you assign outside of the index field, then it does what it does now.

MM: And the access implementation which is the only source of implementation feedback so far does do that, but moddable access implementation is not optimized for speed, it’s optimized for space and runability. So we still need feedback from the high speed engines. And that is it for the presentations and as agreed, I will stop recording. And throw it open for questions.

JLS: The question is pretty straight forward. Instead of like a sliced immutable in an attempt to get the zero copy transfer, could ArrayBuffer just have a subarray not what we have on typedArray right now where it always –

MM: Did it have a what?

JLS: If it could just have subarray? Like, TypedArray right now has the slice which is copied and subarray which does not copy. If we had that also on ArrayBuffer.

MM: I don’t know. It seems to be mixing just esthetically levels and seems less orthogonal to me. That’s just five seconds of thinking about it. I don’t have the strong reaction one way or the other.

MAH: I understand James’ question, it seems that subarray is just—it seemed like a different proposal entirely. So I’m unsure how it is related to this proposal about immutable arrayBuffers.

JLS: Well, the goal is just to get that zero-copy view of that. And where slice is created a copy subarray just gets you a view truncated. If you’re taking a subarray on it’s immutable and it will be affecting it more.

SYG: My gut reaction is, no, we can’t do that. Because the way things are architected today is that ArrayBuffers are never windows. They’re never views. And TypedArrays are. So the consequence of that is that if you make ArrayBuffers also sometimes use ArrayBuffer work for some and may not work for others. Because there’s no reason to indirect—just the language level, there’s no reason to indirect the backing store ArrayBuffers today. Some implementations may not have that direction and insignificant to also make them indirected.

JLS: That’s fair.

MM: Make sure I understand, you’re saying no, not just to the subarray, but also to slice to immutable itself?

JLS: That was going to be another question, but I’m after Mathieu in the queue.

MM: So I am in favor of having a length parameter to transfer to immutable as it would avoid some refactoring hazard if someone has transfer today and want to get it transferred to immutable, they expect it to be resized during the operation. All of a sudden, they would end up with an ArrayBuffer that hasn’t been resized if it is—if that method is likely a length parameter. So in order for that I would prefer the length parameter.

WH: I agree for the same reason.

MM: As I said, I also prefer the length parameter. Does anybody wish to express a preference for omitting the length parameter? Okay. Great. In that case, I will consider that decided in favor of the length parameter. The length parameter by the way is already implemented in modable access engine, it is not yet reflected in the draft spec or in the shim. Both of those would be repaired.

SYG: I was typing. I will just speak now. I have nothing against the length parameter. But I would like to point out if you have a length parameter using it, may perhaps break the expectation that transfer to immutable itself is zero copy. If you transfer it to a longer size, you would have to get that size somewhere.

MM: Okay. That’s a good point. That’s a very good point. So actually, let’s stay with that point for a moment. If the source ArrayBuffer that you’re doing the transfer to immutable on is itself a resizable ArrayBuffer and the length is still within the max length of the resizable one, that would still give you a length expansion and immutability with zero copy all at the same time; is that correct?

SYG: It depends. I would say like 95% of the case yes. If for whatever reason your language—not your language, your OS under the hood doesn’t have zero filled on demand pages, like, you might have—so the max length exists so that the OS can reserve virtual memory pages.

MM: I see.

SYG: Those are not backed by physical pages yet. When you get that, most of the OSs should support zero-filled on-demand and show up as zero. If it doesn’t for whatever reason, you might need to incur some costs to make sure that the new pages that get backed in actually show up as zero.

MM: Good. That’s an implementation cost for the length parameter that I had—was completely unaware of. That’s good to know.

SYG: Specifically my blind spot is windows. I really don’t understand the window VM subsystem. If someone does here, please speak up.

MM: So are you okay with us proceeding assuming the length parameter that explicitly stating because of these issues, we desire more feedback from implementations?

SYG: To be clear, I have no concern with the length parameter going forward. I’m just pointing out that if you care about the constraint that transfer to immutable would be always zero copy of performance expectation.

MM: I see. I don’t care that it’s always zero copy. Well, I mean I care, but I don’t care more than I care to—about the reasons for the length parameter. If you’re okay with it, in that case, let me say are there any objections to adding the length parameter? I’m just considering that to be as of Stage 2 that I’m asking for the decision for now. Okay. So I will revise the spec and the shim and as I mentioned the access implementation already have the length parameter.

RPR: I don’t think anyone disagrees. But let’s go to KG.

KG: Yeah, I think it’s fine that it’s not zero-copy if you pass a larger length. Presumably if you pass a larger length, it’s because you needed that for some reason. It’s pretty weird thing to need on immutable because the extension is length zero. If you do need it, it’s not like you have a better option by composing some other operations and it might end up being free if there happens to be space to resize it. So I still think it’s the best you can do. It’s fine.

RGN: In a similar vein, it’s also possible that newLength would be supported for truncation but throws for attempted expansion, making the restriction clear.

MM: That would be coherent and I can see the argument for it. If no objection, I would like to stick with the decision that the length parameter works in both directions at the possible cost of not being zero copy on expansion.

KG: Very mildly prefer to not throw.

MM: Okay, good.

RPR: Mark just to let you know, the time box is running out. You have about four minutes left.

MM: Oh, okay. With one minute left, I would like to ask for Stage 2.

SYG: I may have misunderstood. For slice to immutable I’m trying to understand two things. What is this a concrete use case? The use case I saw is nice to have this ability. I didn’t see the concrete use case. Two, what happens for slice to immutable from a mutable array? Like, it detaches the whole array and then gives you this one mutable window?

MM: So, no—so the piece of code at the bottom, we stick with that equivalent. It just wouldn’t be zero copy in that case. If the source ArrayBuffer on the left here was a mutable arrayBuffer then the lice would make a genuine new mutable ArrayBuffer that was a copy of those contents from the original as of that moment and then transfer to immutable would take that one and make it immutable.

SYG: But that’s a very different semantics because it detaches the copy. It doesn’t detach the original one. I can see use cases where you want –

MM: It detaches the—slice to immutable does not detach the original in any case.

SYG: But how can you make it zero copy if the original is mutable?

MM: Sorry. It’s only a zero copy if the original is immutable.

SYG: I see. Okay, I see.

MAH: I think what it means here is that the spec would guarantee that when you do a slice to immutable on the immutable—on the source immutable ArrayBuffer, you end up having a zero-copy subset of it.

MM: Exactly. And a use case for that is that right now a TypedArray or data view, you can ask it for the underlying ArrayBuffer and it gives you the whole thing. Well, maybe I want to create a TypedArray that does not reveal the entire contents of the original ArrayBuffer. This would enable me to let it reveal only a relevant subset by making it a TypedArray on the slice. And obviously that’s what would happen right now with just normal `slice`. But the normal `slice` does that at the cost of a copy. The only thing I’m focused on here is if the original is immutable but reveals too much, then you want one that reveals less without making the copy, this would let you do that.

SYG: I see. Okay. I think I’m on the fence about this inclusion barring a concrete motivation.

MM: Okay. Noted. Does anybody else have—does anybody have a strong opinion either way?

MAH: It may have been a performance. We keep hearing that engines cannot optimize and do copy on write and things like that for ArrayBuffer. Here we have a particular opportunity to create a copy—a zero copy of an ArrayBuffer that is clearly—that can clearly be zero copy. But without this API, we’re back into the let’s be hopeful that maybe some day engines can actually optimize this by doing copy on write.

MM: I have another motivating case for you. We want—you know, it’s not part of a TC39 ECMA script spec but in the larger ecosystem is immutable ArrayBuffers be transferred of structured clone and if you’re transferring it within the same agent cluster it’s a zero-copy copy. In in other words, the immutable ArrayBuffer exists in both locations without having copied the data. For that use, it’s certainly the case that one agent might want to transfer a subset of the data to another agent and not reveal the entire thing. And, again, it would be nice to be able to do that in a zero copy manner.

RPR: So to your question, mark, earlier won’t slice to immutable, WH is in favor.

SYG: I’m not asking who would like to slice to—I’m asking concrete use cases.

RPR: Just also reminder we are basically at time now.

MM: Okay. Can I have—it looks like the remaining—can I have a five minute extension?

RPR: Five minutes is okay, yeah.

MM: WH, can you answer SYG’s question, do you have a reason why you want slice to be immutable?

WH: Just to allow an implementation, if it wants, to make this zero copy. It’s too hard to optimize it if it’s rolled out into a combination of slice and transferToImmutable. But I wouldn’t *mandate* sliceToImmutable be zero copy.

MM: Okay, good. And that’s a good point about not mandating that it be zero copy, just allowing it. That’s a good point.

WH: If it’s too hard to do the optimization, just expand it to slice and transferToImmutable.

RPR: I’m not sure we have—I think WH was first in the queue with preferring no throwing.

WH: That was before the comment queue got reversed. My comment about not throwing was regarding transferToImmutable.

MM: I’m going to skip over this and go to JHD, then.

JHD: Just wanted to concurring in every API built into the language and platform or not absent boolean should be the same as providing false and making the name stuck and with the name come up with a better name that works with the default. I very much support that.

KG: I was a little bit too slow to get on the queue. The response to JHD, this wouldn’t be absent. This would be present ever. It is not present in older implementations.

JHD: Is the accessor not an option?

KG: Yeah.

JHD: My statement doesn’t apply to the accessor.

KG: Okay.

JHD: But in terms of feature detecting and things like that, like, it’s still nice if absent on the prototype and then next release present on the prototype the false is the same value.

MM: I’ll just take this as certainly at least not an objection to naming it immutable.

JHD: Correct.

SYG: This is about the throwing or no throwing behavior. I think the simplest thing for implementations, I can speak for myself but not for the other fast engines here, I have zero interest in working on this part of the code, because it’s like old and historical and all that stuff. And I think the simplest thing by far and there’s a lot of it. The simplest thing by far would be to align with whatever detached/out of bounds does for the particular case. And whatever that does, if it’s not possible to do that operation to an immutable ArrayBuffer, we just pretend it is detached/out of bounds.

MM: Okay. So good. That’s implementer feedback pushing us in the other direction. Let me just verify with the committee that we don’t have to emerge from the decision to go to Stage 2, have to emerge with the stated preference on the resolution of that that the details of order of operations and when it throws is something that we can investigate during Stage 2.

MM: So I would like to ask for Stage 2. First of all, anyone support Stage 2?

WH: I do.

MM: Thank you.

NRO: Reasonable questions to have during Stage 2.

MM: Great. Also support from JHD, thank you.

RPR: And JLS. And CM.

MM: Any objections? Great. I have Stage 2. Thank you.

RPR: Thank you, MM. And then next up today, we have Nicolo with an update on import defer. Chris, are you ready to chair this one?

## import defer updates

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-defer-import-eval/)
- [slides](https://docs.google.com/presentation/d/1yFbqn6px5rIwAVjBbXgrYgql1L90tKPTWZq2A5D6f5Q/)

NRO: This is a follow up from the presentation we had last plenary where we went through two problems with the proposal but unfortunately the time did not have a concrete solution yet. So thanks everybody for the feedback during the plenary and now I’m proposing an actual concrete solution.

NRO: The two problems we had, one is that significant aspect of the proposal is that we made all gets string keys on the trigger execution because that’s what tools can actually implement or at least easy to implement with a large group of tools. But that ended up not being enough. The second problem was that `import.defer` was the dynamic import that the proposal has was not actually deferring anything, but it was always triggering execution because it was internally the proper case from the object and triggering execution in the promise.

NRO: So the reason why we made get a strong property pace trigger because for many tools, it’s not actually possible or reasonable to know what are the modules and when they actually start importing it. Normally I would like still care about tools, but maybe not this much. The reason I’m considering tools as so important for this proposal is because unfortunately is most module get transpiled or bundled and the experience that many developers have is not through the implementation on browsers but implementation of tools.

NRO: There is still a need to the proposal to actually check the dependencies because you need to check that there is the weight or not. But this is just a binary piece of information that tools can more easily check at built time. For example, the the process would just fail. You can assume the deferred module has no—code in a different way to handle the delay. Again, at the time you can assume that the delay is already handled in the right way.

NRO: So how tools can implement the proposal is in the general case is to basically wrap the main.js process in the proxy and then in the proxy when it is necessary trigger of the module. In many cases they would be able to module away (?) because the use of module is it’s not that dynamic. So it’s actually not too difficult to build time and form a static analysis.

NRO: But in some cases when that’s not possible, the way to do it is through a proxy. This code here is in line and some sort of bundle. But tools for this code use a lot, for example, when transpiling in babel and targeting in the environments, it’s likely compiled to the synchronous import. So reading the key string trigger without it exports in this case foo or not. In string here because reading symbols does not trigger relation with the reason being you might want to check the `symbol.object` in a somewhat safe way. The key here is that this only depends, the way this works is whether it is triggered or not is only defending on the key itself. Before trigger evaluation the proxy and tool can check this type of string or not.

NRO: So property access always triggers but there are other ways you can observe the contents of the module. We have getOwnPropertyDescriptor and `object.keys` and sync text and so on. The change I’m proposing here to actually make it possible for tools to more closely implement the semantics is that query any info depends on the contents of the module trigger. So before only any syntax or any function that would internally call the get internal operates from the objects this includes any get with the proper syntax and object case and object emergency (?) or properties or object and get and property descriptor with the spring that is one of the name of the experts of the module. Here in the slide is known and unknown is that the module is not actually exporting.

NRO: The proposed change here to actually make it implementable with tools is that also anything that queries the list of keys exported by the module should trigger evaluation. So when we use the syntax with the string key, that should trigger and use get and property names should trigger evaluation and when you trigger property descriptor should trigger evaluation (?) sometimes. So it means spec-wise where efficiency specked it and get the list it will be if this is deferred. This is for symbol properties because we know that the module does not have an export with the symbol name even without including the contents of the module. So as I mentioned for tools, make it easier for the platform to nondeferred cases but still requires non-deferred analysis.

NRO: Not just tools, there are other platforms to have synchronous modules that simplify the implementation of the loading as long as the platforms have some preview for example when pushing to the server whether it is syntax server or TLA and not imposable but keep around the list of exports for each module that could potentially be imported. It’s just a little bit simpler.

NRO: The second problem that we had was that `import.defer` dynamic syntax always triggers that. It triggers evaluation. And the reason is `import.defer` is a promise resolved in the space and that’s how promises work. The then property. We never get the deferred module.

NRO: We discussed two main options. One was to defer `import.defer` from the proposal. We can for now get the part in discuss how to do it in the future or hide the then property from deferred name space objects so that getting them from a namespace object would also be defined and the deferred object will never have a property regardless of what the module exports. This will be similar to the named property where we know that accessing them will return even without knowing the contents of the module.

NRO: We want here to propose going ahead with the second option because if we remove `import.defer` now, it’s not like we can re-introduce it in the future. This is a problem about having promises with deferred space objects. It’s not specific to import.defer. And `import.defer` I would hope always one of these space objects that will not introduce the third type of object. It would not be possible to do this in the future.

NRO: There are some use cases for `import.defer` dynamic form. It’s not the main motivation for the proposal. One of it is that you might want to have conditional loading in some place where async is allowed while still deferring execution. You might have at the top of the module a way that have different dependency depending on the environment and pay the execution up front. And also even though I guess more or less it’s for symmetry how other imports work. We have import declaration with the dynamic form and we have import source with the dynamic form and then just continue this pattern. So this is where we propose hiding them. So what does it mean exactly to hide them? As I said before, this deferred name space objects never have a then property. So according to the principle of when do we evaluate, we evaluate when we need to query the module. And reading or checking whether the nodule the namespace object has a property would not meet trigger evaluation. Even if `import.defer` that is a promise that results to deferred space object and the promise constructor or the promise resolution step with the property from the object still does not trigger evaluation which is exactly how symbol-named properties behave.

NRO: So other things discussed last plenary and approaches to go forward with. But there has been other two minor changes suggested since the plenary that I would like to share with the committee. One is that with integration with logging utilities such as the built-in in console in logging JS and with the string object it’s common to look at the toString tag object. And while the deferred name space objects are meant to be drop in replacement for the name space objects, they have differences. Important that one triggers execution when used and other doesn’t. It was suggested a deferred module. The reason that the proposal uses module is mostly how it’s written. Not create a separate type of object in the spec. I just reused existing namespace objects by adding some conditions. The values of object internal methods. If I were to create a completely separate opposite spec I would have went with the separate toString at the beginning. This is some change I would actually like to see. I will see if there’s consensus for this.

NRO: There’s been another suggestion coming from people think about how to integrate this with various loggers implementations. You have to know how much you can log. So a good logger is a logger that gives you as much useful information as the user wants. But that’s in a nonobservable way and not triggering any sort of effect. In platforms like JS, I’m thinking of JS because Chrome—browsers have more Interactive UI and I’m assuming much going on. In a logger, you would probably want to see the exports of the module if you can. Like all the values that it is exporting. And you need to know if it has been evaluated. What we the suggestion is to have the symbol dot evaluated and tell you whether it’s safe with the module or not.

NRO: If this doesn’t happen, like, this is not strictly necessary assuming that the dev tools from the engine. This happens in the Node.js because they already have to check whether an object is a space object or not. And only JavaScript doesn’t run that. Node.JS uses the specific API. We can go to another one.

NRO: And we are close to Stage 3 as far as I am concerned. We already have tested for the major semantics of the proposals so for everything that was not still open for discussion as part of this presentation. I started working on tests for the changes but I i don't have anything concrete yet because I don’t know yet in which direction we will go. We have a working in progress implementation to validate that the tests are correct.

NRO: We are missing one thing that was Stage 2.7 was conditional on the spec editors reviewing the spec text. This would be a good time to do it. I will continue once all the changes caused by this presentations are merged. But yes, please, try to find some time for this. The idea is that I will come to the next meeting proposing Stage 3. To the queue now.

GB: I just wanted to bring this point up again and thank you for explaining it so clearly in the presentation, but just to bring up the point again that the semantics that we’re changing here are in order to polyfillability and support and bundlers and tools to date. So my question is, how important is it for polyfills to have perfect semantics with the specification when in fact what we are doing here is we are creating trade offs in the specification itself that are not justified. All the use cases of the specification beyond—so when the polyfill is no longer needed? And in particular, there’s two risks that are being opened up by these changes. The one is that because it’s no longer a requirement of implementations apart from it just being a specification node for hosts, that the named exports are validated early, there’s no reason hosts couldn’t implement by no longer making the keys—the key list available at all, the list of names before the namespace is evaluated, there’s no requirement on implementations to have even validated the list of named exports. And so how do we know that hosts like Node.JS won’t decide to fully do this lazily and not do early validations at all since the only requirement is a spec?

GB: And the other point is that we do lose a use case in this. Slide 7. So with the new evaluation triggers because you can’t check if a key is in the name space anymore, we lose the possible namespace where you could defer import something and still be able to do feature detections on the namespace and check if keys are available or not. And so that’s the context in which I’m asking the question about the importance of polyfillability as we expand these triggers.

NRO: Okay. Yeah. Thanks, GB. With the main part of the comment about the spec requirements, so the spec still normally requires that mismatched exports or syntax errors are validated eagerly and the way to require that is that the errors are reported either in module loading when it comes to syntax errors because the load hook expects the result of the expect the parse module that parses the module and checks for syntax errors or linking when it comes tooling errors. With this proposal, linking is still happening eagerly. So I guess there is a potential conclusion if somebody doesn’t read the spec because they see I need no info to expose eagerly and defer everything. But the spec requires that some things happen eagerly.

NRO: To the other point, I guess this is more about trade offs, what trade off we’re comfortable to make as a committee? I personally while I’m hoping and trying to work towards where we need less built tools especially—if we have built tools to make them as slight as possible and rely on the underlie engine as much as possible for example, with the proposal, tools don’t have to emulate semantics and just rely on the implementation. However, I don’t see where that is happening anytime soon. And there’s the reason why I’m pushing for trying to do what today’s tools can do. We’re talking about years here.

NRO: Regarding the use case, yes, this is losing a use case. It’s like losing something that you would be otherwise able to do. I don’t know how common it is to do feature detection without actually using the library so that the feature detection so that—if you do feature detection and may not be able to use the library, it doesn’t matter whether it’s validating the first or second branch. If you go to the full matter (?) of something. This is true. And I guess it’s about trade offs.

GB: Just to final point on the trade off question, you know, the question is there an alternative trade off space in which we accept some degree of polyfill semantic mismatch in in order to hold open future use cases and has there been any thought to that? This question took a lot of time. Maybe we can continue that discussion off line as well.

JHD: So as one of the major polyfill authors in the ecosystem, it’s certainly more convenient for me when proposals are polyfillable, or when they’re made more polyfillable. I don’t think that’s a good thing to guide language design. I think that it is perfectly fine if a polyfill can only do best effort in many cases and I also think it’s perfectly fine if the polyfill has to be slower or bigger or harder to make as a result. It’s just the lot of a polyfill maintainer.

JHD: There is often a correlation between something being more polyfillable and something being more consistent with the language or something being easier to implement and so on. And so it’s fine to use polyfillability as a test to surface those other possible issues, but I think it’s important that we use those other things as the motivation. And not polyfillability itself. And then, the—the second piece was about the host requirements. We have definitely already seen multiple examples of the spec saying something within an intention that is not mandated, and then we see implementations violating the spirit of the spec simply because the spec doesn’t prevent it. So it has been empirically valuable to tighten up wording in the spec and allow for use cases we like and do our best to disallow any use cases, you know, where like is tolerated proof of whatever. I am not trying to be paternalistic, but just… You know, we should restrict the things that we aren’t certain we need because we can loosen things more easily than tighten them. Yeah. That’s all.

NRO: It’s not like ignoring a requirement in some host tool. Not implementing the hook here removes moving the steps from the algorithms and placing them somewhere else. It’s actually like I am talking the algorithms and not just some words around them. Quickly, first SYG, you were talking about the bundler and polyfills. But let’s get to the question now, unless GB has something

JHD: Just to clarify, bundlers and transpilers are what we need to cover the syntax, but the things they transpile into would be a polyfill and that’s where the polyfillability would come into play.

ACE: Yes. They—I can completely see where you’re coming from, GB. I am not—I wouldn’t—if Bloomberg uses a code import defer as a way just like a set of keys to do a set of detection, it feels like the—well, it—while that worked, it feels like the wrong way to go about it. Import defer is loading, like the whole dependency tree, the top-level await thing. It seems more important—it doesn’t give you exported keys from a module. But it feels like a use case would be better served at that layer of the module thing, rather than people using `import.defer` and reflect on keys. But I do see where you are coming from.

GB: Thanks. Yeah. I just wanted to state those points. I understand the tradeoffs. I am just wondering how many exploration is done in the trade off spaces. But thanks for the responses.

NRO: SYG? Was there a question or did you want to speak?

SYG: You did answer it, but I would like to agree with you against GB here. I think—especially in the ESM space, because of the cost of the network, like, the—the dream of using ESMs outside of bundlers is a long ways off, if ever, from my perspective. So if there were any spaces currently that TC39 is looking at that really warrants favouring what the tools can do today, I think ESMs is it.

GB: That makes a lot of sense. I guess it is a new perspective to me, having—you know, previously found the other direction in arguments. But also, just to sort of, you know, touch on what NRO mentioned module declarations would provide a path for bundlers in the future to future natively to the semantics. So the polyfills semantics we are designing around, if module declarations are successful, would no longer be constraints in the module harmony effort, as achieved module declarations.

MAH: Yeah. I want to clarify that means the then export is never available, assuming—basically when you transform an import into an import.defer.

NRO: Yes, that is correct. It is generally already considered to be a fishy product to have a then export due to how to interacts with dynamic import. But, yes, it would not—it would never be available on a deferred namespace regardless how you get to it.

MAH: Yeah. I suspect a .then static import is never actually useful, so I—it’s strange that adding a defer would now be missing a namespace export.

NRO: I agree. It’s an ugly solution.

ACE: Missing then, we haven’t—I have assumed that tools like TypeScript would also reflect the missing .then in the type. Haven’t actually checked that with them, but it seems non-controversial to assume, and if someone wanted to get the then for some reason, the work around is creating another module that export * from everything to add a layer in direction and import defer that wrapper, so it’s—people could still do things in this space, but yeah. It is missing. So I hope the tools will catch on and if they do need it, they can put a work around it.

KG: Yeah. This is on a topic that we haven’t talked at all about, which is Symbol.evaluated. I really like the capability and really do not like the proposed solution. I really don’t want a new well known symbol for this. I would be happier with just a new top level global function, like isDeferredModuleEvaluated or something. Also, I think that can easily be in a follow-up. Anything in this space can be a follow-up. So I'm happy to see it go forward without this, but want to register support for having this capability at some point.

NRO: Okay. Thank you. MAH and then MM, which I guess will say something similar

MAH: Same. I really like the ability to detect if a module has been evaluated, but it’s something where maybe the—the stabilized proposal, the non-trapping trades might be able to reflect that the fact it has been evaluated or not, and I will let Mark expand on the integration of that proposal.

MM: Yeah. So I actually need to elaborate on one thing that I forgot to mention in the proposal. It is in the draft spec text, which is that for the non-trapping, it would not just be with regard to interleaving and reentrancy hazards, of proxies. But also with regard to exotic objects. That if an exotic object, on a data access, when access to a data property, exotic object is certainly allowed to observeably interleave user code during access to a data property, but that—to simply allow that creates the same reentrancy hazards, and this was also raised when import defer first happened. Which was the reentrancy hazards of data access causing inter leaving and possibly reentrancy. The non-trapping integrity trait in trying to prevent that would also need to say that if an exotic object does have that behavior, that it is not non-trapping. And then if you ask it—if you try to make it non-trapping, either it has to change its behavior, or to no longer to interleaving, or it has to refuse to become non-trapping, just like for other integrity traits that exotic objects don’t uphold. They have to either come to uphold it or have to refuse to acquire the integrity trait. For namespaces, the reason we were considering this new symbol or whatever the API is, is it really has to do with is there still a possibility of evaluation triggered by a property, a data property access, which is exactly the interleaving issue that non-trapping is about. It seems like the same two choices could apply: you could say that a defer—a deferred namespace, the namespace of the deferred module starts off without non-trapping. And if you ask it, if it’s not, if it’s non-trapping, it will say that it is not non-trapping. Sorry for the double negative again. But then if you try to make it non-trapping, it could either be refused or much more natural for import defer, is it could treat that as a trigger for evaluation. And then once evaluated, during that attempt to make it non-trapping, it would then return successfully from the request to make it non-trapping, and it will now be non-trapping because it is evaluated. So I was wondering what your reaction to that whole possible interaction between the proposals are?

NRO: It seems reasonable. It seems like all, especially given that KG say this is good, but not in this shape and here you are offering a different shape for that, we should probably explore working in that direction. See, there is still Mathieu in the queue. MAH, I would ask you not to go to this because we’re short on minutes. And—but thank you.

NRO: Okay. So okay. So we have had feedback in both directions. I would like to see consensus for some of the changes. This one seems to be the least controversial one about changing toStringTag on the deferred modules, say deferred modules—on the deferred namespaces to say the deferred module instead of just module. Do we have any concern with this? If not, I will go ahead and change it in the proposal.

JHD: Well, not on the queue. So if they—because they are different, they’re—typically when they have a different thing, we provide some way to brand check it and determine it’s that different kind of thing. ToString tag alone does not achieve that. That helps debuggability. So I have no objection to the change there. Is there a way to determine that the given object is a deferred module namespace object?

NRO: No. In general, there is no way to return whether an object is already a namespace object. It’s probably the only one missing a brand check. This proposal is not introducing that. As part of the proposals and the module harmony space, with new module constructor and that brand check will come, but it’s not been introduced for this proposal, especially given that normal namespace is already not brand checkable.

JHD: Normal namespaces, I think—yeah. So you’re right. There were multiple things introduced in ES6 that failed to include a way to brand check in module namespace and after error, is error is the last one. But the only behavior I can think of for module namespace objects that is different from a frozen object is the live binding behaviour if you are exporting a let or a var and then you change it.

NRO: They can also throw TDZ errors where you have some property access.

JHD: Okay. Fair. So I am certainly not asking to introduce that brand check for regular namespace module objects, but it may be coming for both in the future, but there is a way that we could handle it right now, by having—doing the thing I wish all toString tags have done in the first place. Instead of being string data properties, being brand checking accessors that return a string.

NRO: We have from some members of the committee, some requirement that all built-ins must be reachable, not just through syntax. So we would—the answer here is no. We need it exposed in some way as a property of some object in the global

CDA: We are past time.

NRO: Okay. But I will be happy to work with you on the brand check. It’s unfortunate so I am assuming we have consensus for this specific slide, even though nobody else voiced concerns? For the proposed change for adding hiding.then. Do we have consensus for this?

NRO: Okay. Thank you. I am assuming silence means yes. I don’t see objections in the queue.

WH: Are there any reasonable alternatives?

NRO: The alternative discussed last time was not to have—never have the dynamic syntax or one extra [AL]ive (?) discussed last time was to have import.defer, namespace object, but object in a property point in the third… so that the promise will be resolved with another object. Which does not trigger this evaluation. But like all solutions present time being considered ugly, this one seems to be the least ugly.

WH: Yup.

NRO: Okay. So I am not going to ask for consensus on the last slide given the feedback received. We have had very mixed feedback on this one [slide 7]. My preference is to do it, but Chris could we do a temp check in a follow-up discussion at the end of the meeting? Because we have 2 and 2.

CDA: We can add a continuation.

NRO: Okay. And probably just like five minutes

CDA: Sure.

NRO: Thank you.

CDA: All right. Thank you, Nicolo. Did you want to—well, I guess we have a continuation, so we can, I suppose, defer key points and summary to then.

### Speaker's Summary of Key Points

…

## Error Stacks Structure for Stage 2

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-error-stacks)

JHD: So a little history on this proposal. Since a long, long time ago, error stacks have been in implementations but not in the language. That’s unfortunate. A lot of folks want it specified in some way. And it’s currently not specified at all.

JHD: So the—as of 2019, I think, was the last time that I actually brought this to plenary, although I think we discussed it briefly—I don’t know in a previous one or not, but 2019, I came back and the state of it at that time was that error.prototype.stack would be a normative optional accessor, the the hardened JavaScript cohort can remove it. And then it would be static methods, which given our—at the time our `system.getStack` and `system.getStackString` and our new position reflect, no longer reflect, no longer match. The dot get stack function is a static method that enables shadow that provides the same string that the stack accessor does. That’s how you get in a normative, not required way. There’s a get set string. And a get stack function that returns what most people who work with stacks beyond just looking at them actually want, which is structured metadata that you can traverse and work with.

JHD: This is such a massive problem, so I was attempting only to do the structure and schema of the stack traces. And to not delve into the contents yet, the actual prose. That is. Larger to document and research and we don’t specify, you know, prose almost anywhere else, including error messages. It’s not entirely clear how we do it.

JHD: And about so in the interest of sort of doing things in an iterative way, the proposal basically only provides these methods. And the structure of the stack trace which then—then it sort of retcons it into you build the string from the structure. It’s just the contents of the pieces of the structure will be, you know, implementation-defined or whatever the correct term is for that. Everything everybody does is correct. Browsers, for example, would have to add two new functions. And move some of the stack code that already exists to the accessor. Some already have an accessor. And they could take their string and reverse engineer it back into the structure if they wanted to start with the string, although the likelihood, they have a structure they used to generate the string and then that would be clean.

JHD: So I presented this, you know, spec text, which I think I have updated to the modern approaches, but probably not all the way. It was up to date in 2019. And it has all the abstract operations that construct each of the little pieces and creates the stack frame objects. And, you know, provides—it doesn’t provide all the contents, but it certainly provides enough of the machinery that stack traces can’t get any worse in terms of structure and format. But the wording, it leaves the task of figuring out the wording to a follow-on proposal.

JHD: And I got surprise feedback in 2019 during the Stage 2 advancement, that my recollection of it was that the work required to do stuff with stack traces was large, and as such, if it wasn’t going to be fully specified, we shouldn’t do it at all. And so I left that meeting discouraged, but trying to see if I would have the time to come up with the text or if anyone—any volunteers would show up to help. And in all the intervening time, no one has done it. This is a boiled ocean request. Then we don’t have stack traces in the language probably ever. So I talked to a few delegates and it was suggested I come back with no change to the proposal. In the agenda, there were error stack structures to try to change the problem state so it more accurately reflects the limited scope of the proposal. And hopefully maybe we can continue and get this advanced so that the work required to do the rest of the stack standardization is not so unreasonable.

JHD: Yeah. So that’s essentially where I am at. I am hoping if there are additional constraints that I missed or misrepresented or unaware of, it would be great to hear about them. I would really prefer—because I have too much spec text and it matches to it to my upsing of the union of what engines do, I would love to go to Stage 2 with this and work ought any additional kinks and create the—create a smooth path for whatever wants to do a follow-up proposal for the actual prose, the text of the stack trace.

JHD: I think we can go to the queue.

MM: Okay. So as co-champion, I want to first apologize that I didn’t coordinate with you ahead of time, so that—I should have—the statement that reflects is a little bit problematic. Reflecting right now has only safe non-privileged things. Things that are completely safe to share among things which should have no privileged access or should not be able to communicate with each other. The reason why we made the accessor, error prototype stack optional is exactly is that it could be denied reflect—the reflect namespace object is not something that is in the category of things that we would want to be able to deny, rather in the category of things that we want to ensure that we never need to deny it.

MM: If it did go into reflect, we could cope, but we would have could cope by giving each department its own separate copy of the reflect object that shared non-dangerous methods –

JHD: Other. That’s already a consequence that I thought that we had accepted along with the getIntrinsic proposal, which is still at Stage 1 was planning to put that on. We discussed that last time. Yes, it adds the extra cost, but that’s like—like, tolerable.

MM: Okay.

JHD: Either way, I am happy to continue discussing that within Stage 2. The name of the global is perfectly fine to resolve in Stage 2.

MM: Okay. Good. Thanks for reminding me of that. I had forgotten about that. This is a consequence of my coming to this section unprepared. Yes. It would be the same issue with getIntrinsics and have the same resolution.

JHD: Right.

MM: And that resolution might very well be that each compartment hits own and that to be tolerable. Right now, my shim, a very, very stale shim, but my old stale shim does produce a get stack by scraping the string, but we—it’s important to, very clear, you cannot do a conformant implementation by scraping the string because of essentially the equivalent of the dejection syntax. Whatever punctuation you are lag for and open paren in it, and if it has it, you are never going to scrape the stack string to produce the structured stack, unless we specify completely reversible escaping rules for the string and that would still take us away from existing implementations. I think that people would be less willing to do that. In any case, it’s certainly fine for shim implementations to ease the transition. Altogether, I am very, very glad you are reviving this. I would like to see it go to Stage 2. Especially if these issues or something that were all agreed or see solvable in Stage 2, but yeah. Very eager to see this proceed.

WH: I am trying to understand the discussion about `Reflect`. I don’t see any mention of `Reflect` in the proposal. What did you mean by that?

JHD: We are talking about the location on which the two functions get stack and get stack string are made available. The proposal has them on `System`. But Reflect is another alternative location that the discussions aren’t the getIntrinsic proposal and another one or two, those results in no longer being reflected to only matching proxy traps, which means it becomes a viable location for it. And so I just offhand mentioned it as another possibility. You can stick them on anything that meets the hardened JavaScript constraints and that would be fine.

MM: I covered that one already.

SYG: First, I would like to clarify that—okay. You did say that this has no change from what was presented in 2019. So you are really coming back and asking if the opinions of the parties who gave concerns have changed?

JHD: Well, the—basically, yes. The two individuals who gave that feedback who believe were representing their own opinions have not prepared in plenary for four years. So I am hoping that if their concerns are not repeated by anyone else, given the additional time and the underlying value of an iterative approach to standardization, I am hoping we can decide it’s still worth advancing

SYG: I am happy to reiterate Adam's question here, what does this make better? Like, if we—I am reading the notes from back then and it gives the structure. But the rebuttal to that was that we would needly—like, down stream of the structure, everything else is implementation-defined. You are speccing something that you immediately require more kind of engine branching to do anything useful with. And like that structure is not as far as I understand, like—I think it says it’s not even in the top ten of the difficulties of looking at stacks. In terms of what problems this solved, if there’s no delta. —procedurally, there’s a few concerns going for Stage 2. You are iterating stack frames out of the error data internal slot. I don’t understand what that does.

JHD: Yeah. It’s certainly hand wavy. The error data slot in the spec is not used. And so I am putting stack frames in as a fictional concept. That is something I can –

SYG: I just don’t understand that.

JHD: Okay.

SYG: But the—like, I think the higher order is what does this better? The problem I heard, you want to spec it. That is not a problem, to me.

JHD: I will let Nicolo was on there for a minute with a use case. But in general –

NRO: The use case—okay. In some libraries currently using the V8 API for basically this, and the way I use them is that for reasons libraries offer stack traces by users, and I basically reverse the stack traces to be nicer in some ways so that users can see their code on both sides of the library. My library is called by users and it goes back. And then I have some functions with special names that mark the entrance and the exit of my library code. And I start, like,—I remove the frames between those two entrances and exit and replace them with some fake frame. I have not looked enough at the proposal to tell how easy this would make it to do so. But right now it’s annoying. I can do it in Chrome and Chrome-based browsers because in other environments, it’s just the string stack so it’s not worth it. Even if I had to do some, like, I guess engine branching because they might represent a function in some way, I don’t know how exactly this proposal is doing. But if I had to do paraming, it’s better than to parse the stream by myself too. Yeah. This is like my personal use case for this.

MAH: Yeah. In general, people have been wanting a consistent way to consume stack information that works across engines so you don't parse a stack string or implement custom engine approaches like V8s prepare stack string and so on. So I think this provides a basis for building that API for representing stack information, that people need and I think that also means, we’re going to need to specify some things that are currently not in the document specifically

SYG: This doesn’t solve that problem completely. It solves it, it pushes down the—the string trace, parsing to be, like, frame or something. Instead of this entire giant string. It doesn’t actually solve the problem. You can perhaps reasonably think that is the starting point of solving that. But I am not at all convinced it is solvable.

MM: So no, it doesn’t—there is no parsing of strings employed by this. An implementation of get stack—well, for example, my shim implementation of stack, because it’s on V8 because you have the internal structure stack objects, I use the structure tack trace object to produce the structure here, I am never parsing the string. So parsing a string, even within a frame is inherently unruly because because a function name might have an open paren in it, whatever punctuation you are using to do your part, a function can have that punctuation. So the only hope for getting accurate structured information is to not lose the structure in the first place.

SYG: What does this spec say the function name must be? Like what does it say about that?

MM: Well, it—I mean, I don’t—JHD, you can answer specifically, but –

JHD: Yeah. So this—this relates to the conceptual fictional error stack frames in the [[ErrorData]] slot, which I completely agree is wildly unspecified and that would be the implementation defined thing. I have created the error data like a list of—where is it? Yeah. A list of records, and the records have fields and I pulled the field out and put them in a certain way. But the contents of those fields by and large are entirely unspecified. Right? The ones that are numbers, like line and column counts are specified to be numbers. And name is specified to be a string. But, like, what your name is –

RPR: Can you show on the screen? This relates to the question of –

JHD: Yeah. Sure.

MM: Let me—this question about function names is a great example of this issue which is, in the language, functions have names. And perhaps there are two different things to reach for in the language to—with regard to the name of the function. But either one, the—is an arbitrary string that might have columns in and might have open parens in it in and the expectation certainly is that the function name appearing in this stack structure is a string we consider to be the string of—the—the string name of the function, that the consequence of not having to parse a stack trace string to recover the function name is that you are not going to confuse where is the function name stop and where does the source location URL begin? And that kind of safe parsing is a big deal. An avoidance of parse is gone a big deal. One of the ways which systems go very, very wrong is when they introduce little embedded text languages that need their own little embedded parsers, especially when they have no agreed escaping rules. And for punctuation and function names, there’s no agreed escaping rules so that punctuation is irreversible.

SYG: That is fine, but, like, … this solve that? Does this—if I implement this, and Safari implements, this ring with go to implement something that will help you

MM: If you implement this, then there is a get stack –

SYG: This specifically meaning this spec draft

MM: This spec draft provides a get stack operation, that provides the structured, you know, stack information, as big JSON structure

SYG: It doesn’t. It gets a thing that we don’t know what it means from error data, which is an—it doesn’t tell me what to do at all.

MM: Wait. Wait wait. I don’t understand it.

JHD: SYG, let me clarify. You’re correct that I don’t tell you exactly what is in the error data slot in the spec at the moment. But you do something to come up with the string that dot stack produces. And I am assuming that comes from a structured that you have inside your implementation.

SYG: That’s correct.

JHD: And the feedback was to do the legwork for the champions to look at the different implementations and the different structures to come up with something here. Okay. So I’m sorry. What you are looking for—what you see in the requirement is, as dig into the actual code of the implementations, and try and understand the structures they are already using. And relate that to the error data internal slots, let’s say, or which could filter down to the rest of it

SYG: No. You are having a detailed plan. It’s not my proposal. I am saying, if your—like, one, have a clear goal beyond I want structure. Like, structure—like the problem with the structure—trying to—the specific problem is that you have the stack strings that are hard to parse and people don’t want to parse it. It’s understandable. And structure to recover the structure without having to do the parsing

JHD: Yes

SYG: If that’s what you want, we have inter op problems that need to be designed so that, like, the thing that everyone implements, once this—Stage 2 and beyond is agreed to, you have something that you can ship a library that works beyond just V8, or just Safari or just Firefox, because –

JHD: This already works for that. In other words, this already describes—this already is –

SYG: It does not describe that because it doesn’t say what error data it’s –

RPR: SYG, okay. There is structure here. I think—maybe NRO, do you want to ask your question directly?

NRO: Yeah. So actually, I would have to see the spec, an object like some example. But I think you’re talking past each other. In the case of, for example, a function called var. And I throw an error in this function var, and I catch it and—as far as success, the name could just be full and not var. It’s through the structures that was specified. But nobody is guaranteeing the function name is going to be correct.

SYG: Is it guaranteeing it must have a frame at all? Like what –

MM: No. It’s not guaranteed. But the—I am wondering if I am misunderstanding your objection. Because it sounds like your objection is that the structure itself is—is unspecified and the structure itself essentially has a schema to it. Now, you know, there is—there is—you know, frames with function names, with line and column spans, with source—with, you know, source URLs, source, you know, indication strings. And, you know, then there’s an array of frames and it must—there’s a schema. And the—you know, the—it’s certainly unspecified what data it is that is used to populate the schema, but it is specified that the result of populating the schema is structured data that satisfies the schema. And that schema gives us for the first time an interoperable, it would give us for the first time, an interoperable accurate way to navigate the stack structure that’s produced in order to, you know, process it, to give feedback and all that. It does not mean that the contents of the schema will be interoperable from one thing to another. That’s underspecified. But, you know, this whole issue reminds me very much of iteration order for—for in loops. That we started with them being completely unspecified, we were never able to arrive at consensus to fully specify the order in which for in loops and array properties, but what we did is progressively narrowed the remaining degrees of freedom over time, over many years ever the committee, reconvening on this. But each step of reducing the remaining degrees of freedom led to greater interoperability and less danger of how it works on tests on some browsers and breaking on others.

MM: I think one way that I—I would recommend looking at this proposal is interoperability on an agreed schema is a hell of a lot better than nothing. Especially if it can avoid, you know, necessarily unreliable parsing to produce the schema, and then with that, agreed, we can iterate in committee over time, as we discover what else we can agree on between implementations. If we require complete over implementations just to agree on a schema, that it’s basically a—you know, a formula for paralysis. We just want to move forward

JHD: Empirically, that’s what happened. Here is an example where the content that this proposal does not specify are this part. Actually, this is the stack part. So this F, like obviously it comes from the function name. But that’s not in this proposal. The source here, that’s a URL for the place it comes from or something. That’s—that contents—those letters are not specified. But that string goes in that highlighted area. Then a colon and a number and a colon and a number. I have limited them to be positive integers and another line. The contents are specified here it doesn’t completely solve the problem, nor does the major of the proposal inside in plenary. What it does is it solve part of the problem and builds towards a better solution, where the amount of work that user-land has to do to solve problems is less or easier or faster or harder to mess up, et cetera. Or more secure, even.

JHD: So there is an—there is a benefit here, a concrete benefit. If you are doing anything with stack traces, without looking at them with eyes to do some of the work—to obviate some of the work by using this proposal.

SYG: So as it stands today, I always expose an empty array. Is that compliant?

MM: Yes.

SYG: Okay. Then how does this help you?

JHD: Because in practice, you are not going to do that because you wanted to help your users.

SYG: They are helped today with a non-standard thing unfortunately, but they are helped today. In other words, what you are –

JHD: What you are designing, it’s the fact that it’s standardized, that is the value. It is the fact that it’s doing the useful thing that people want, consistently across implementations. Which means, any implementation that just ships an empty array for it where there’s a stack array, it won’t maintain its credibility. It it will maintain the version of the stack string.

RPR: We have ten minutes left. I think we are spinning on the same point here. Could we move on the queue? There's a queue, a few more to go. All right. Thank you.

WH: Going by the example on the screen, you say things like `f` and the URL are just implementation provided strings?

JHD: Yeah

WH: Can those contain things like closing parentheses? Is there anything that prevents implementations from putting characters that makes the whole thing unable to be parsed in there?

JHD: Well, currently, there’s not, which is why we are actually… nobody has to do the string parsing. It doesn’t matter what characters are in those things. We certainly can and should in the future, lock this down to match what people are already doing or, you know, so that nobody can do crazy things. But currently, you can do whatever you want. And the –

MM: Wait. Sorry. An URL can have a closing — a function name especially can have a closing parenthesis —

JHD: It can

MM: So I think—so, you know, it’s not that we’re going to reduce the punctuation allowed in the string. It’s specifically that providing the structure so that these—the structure can be examined without the burden of unreliably parsing things that might contain punctuation.

JHD: We are not trying to make piercing easier, but eliminate the need to parse.

WH: Thank you.

NRO: Yeah. So we have recently discussed this proposal in relation to some other proposal in TG4. I quickly mentioned TG4 update, but there is a proposal that’s giving some ID to file and also storing in source map to actually connect files, like—like if you throw an error, you can report this so some logging service and somehow the currently have some—there’s a polyfill to get the idea of the error. Like, post hook, like record service, you can actually connect to the right source map. And the champions of the proposal, where we’re discussing how to expose these different errors, the idea was just as to have to through the non-standard error.captureStackTrace. Whatever no standard API V8 has for this, with the significant throw back that it would make it V8 only. In TG4 we got feedback. There’s a standardized way to getting to it. The ideas were to go threw some new globally new API in WHATWG, to get to the idea of a file. These are attached as a comment in the end. Or another idea, was that if this proposal has some movement, we could, then, other than the file income statement expose in the structured data which is the best way of exposing it.

NRO: So if this is to move forward, the champion of that source maps related proposal, would be build different on top of this.

MAG: Okay. So at the beginning, this was like, okay. This is going to be the union of real things. This should be the minimal capacity subset. But this spec is having at at the beginning of a stack frame. That’s not compatible. We don’t have that. Right? And like –

JHD: Did you five years ago?

MAG: I can tell, no, in the notes –

JHD: That’s a bug in the spec. We should make that optional.

MAG: Yeah. That’s fine. So, no. But like I think practically speaking, I see this being a very challenging thing to specify the contents of the string coming out of stack. Right? To the point that I actually think the better version of this would literally be to say, hey. Error stack exists. It has a string. That string has maybe a property or two. Maybe we can agree that everyone comes after a new line. Im not sure we can agree on that.

MAG: But, like, this current design is a lot. And I will just—like, bundle my next point, is that this is multiple proposals and like I have differing amounts of appeal on different parts of this. Specifying that stacks exist, I think it is a good thing. We should talk about that. The idea to get a string representation of the execution context, even if you ever say that it is an implementation defined representation of the execution context, good. We can do that. We can say that, you know, maybe it’s not NXG (?), you can say that. It’s a regular thing. But, you know, trying to specify the actual format, I think is bad. I don’t think we can do it and frankly, I don’t think ever will ship it. It’s a whole mess of web compat. And then the stack getter thing, I am super interested in it. it’s a really interesting idea. I totally agree with the pain points. Yeah, having to, you know, I can imagine people like, for example, Sentry, probably would leave if if there's an automatic way to get a programmatic stack. Great. I totally imagine the use cases. But this proposal conflates all of the different pieces, and as a result, we have got this whole mess of conversation here. Right? And so, I just—I think the current proposal, no. It will be split in proposals both pushing? I absolutely think so.

JHD: So just to make sure I am understanding correctly, you have see one of the proposals as this stack accessor itself, let’s say. And a different one to get the stack thing and the different one to get the structure?

MAG: So I mean, I am skeptical about things. I think string representation probably always—the best you are going to get is a normative note that says, it’s implementation defined. I might be able to see that, say, if you have access to a programmatic way to be like, here is a—like object representation of a stack frame, I can see tools making use of this. Now, I am also terrified because it’s a huge interrupt problem and about I would argue, it should be specced such that his, you know, implementations are free to drop random frames so people stop depending on it. But like there—there is a design space I would see exploring there. But yeah. Strings, no.

JHD: What you said about dropping and adding random frames, that’s allowable. If we ship this today, you can do that. This proposal isn’t attempting to close down that design space. And I think—I agree it could have an interop problem. But I am at Stage 1 looking for Stage 2. Like, that—that’s—it’s—but not fessly before Stage 2.

MAH: Right. I just don’t agree that this proposal as a exists today is well scoped and motivated and it instead at least two maybe three proposals in a trench coat (?) at the moment.

RPR: We have two minutes on the clock. There’s a bit more in the queue about this—whether to split into other proposals or not. I will point out, JHD, you are entitled to another 20 minutes.

JHD: We can do a continuation tomorrow.

RPR: But let’s try to close on time.

JHD: All right.

WH: I would be reluctant to split this into separate proposals simply because I want to understand the big picture of what is going on. The issue I have with separate proposals is, each of them would be missing the big picture. I want to know where we are going. I’m perfectly fine with not getting there, all the way, in one jump. But I want to see where we’re going, rather than considering things incrementally.

NRO: So given how difficult it might be to standardize the stack string, would—right now, the spec doesn’t say there’s a stack property in errors. Would anybody be happy if we say, well there, is a stack property. So now we recognize that web reality fact, and we just say, it returns a string that is completely implementation defined?

MM: Since you are asking if anybody would be unhappy, I will just say, yes. But because of limited time, I will postpone for when we resume.

RPR: Okay. We are at time. Let’s try and get DLM in because DLM is the last person on the queue. Maybe we can squeeze this in here

DLM: I will be brief. MM, you more or less raised and SYG too, I would have made the points basically, I see this as, you know, a source of potentially a huge amount of work, implementations to tie to converge our internal representations of error stacks, and I could see that as introducing web compatibility, interoperability problems and because of that, I am not convincing of that and from what is worth, that is like a blocking concern from SpiderMonkey. So feel free to request a continuation, but we’re not comfortable with advancing during continuation

CDA: Are you unconvinced in Stage 2 for the shape of the solution, or is it a broader unconvinced on the stage 1 problem statement in general?

DLM: I think we recognize there’s a problem here. We are and MAH, can say, this we are seeing web compatibility problems around errors and stacks. Yes we agree there’s a problem. We are not convinced of this particular solution.

CDA: But is it still worth spending committee time to explore a different shape of this.

DLM: Yeah. And I think we have heard opposition to it but MAH’s idea of splitting this up and prioritizing things that are causing us real web compatibility problems would be of interest at the moment.

RPR: Okay. Thank you, Jordan. I guess we will wrap up now and you will get a continuation.

DLM: Cool. Thank you.

### Speaker's Summary of Key Points

- List
- of
- things

### Conclusion

- planning to bring a new, smaller proposal with just the existing stack accessor
- as that advances, the existing proposal will "rebase" on top of that
