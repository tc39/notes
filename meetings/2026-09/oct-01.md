# 116th TC39 Meeting

Day Three—01 October 2026

**Attendees:**

| Name                | Abbreviation | Organization         |
|---------------------|--------------|----------------------|
| Waldemar Horwat     | WH           | Invited Expert       |
| Christian Ulbrich   | CHU          | Zalari               |
| Danilo F Tedeschi   | DFT          | Google               |
| Ross Kirsling       | RKG          | Sony                 |
| Yusuke Suzuki       | YSZ          | Apple                |
| Keith Miller        | KM           | Apple                |
| Istvan Sebestyen    | IS           | Ecma                 |
| Lea Verou           | LVU          | OpenJS Foundation    |
| Ruben Bridgewater   | RBR          | Invited Expert       |
| Ron Buckton         | RBN          | F5                   |
| Chris de Almeida    | CDA          | IBM                  |
| Samina Husain       | SHN          | Ecma                 |
| Nikolaos Papaspyrou | NPU          | Google               |
| Luna Pfeiffer       | LPR          | Invited Expert       |
| Jesse Alama         | JMN          | Igalia               |
| Ashley Claymore     | ACE          | Bloomberg LP         |
| Chip Morningstar    | CM           | Consensys            |
| Guy Bedford         | GB           | Cloudflare           |
| Jordan Harband      | JHD          | Socket, Inc          |
| Justin Ridgewell    | JRL          | Google               |
| Kevin Gibbons       | KG           | Invited Expert       |
| Mathieu Hofman      | MAH          | Agoric               |
| Mikhail Barash      | MBH          | University of Bergen |
| Michael Ficarra     | MF           | F5                   |
| Mark S. Miller      | MM           | Agoric               |
| Olivier Flückiger   | OFR          | Google               |
| Oliver Medhurst     | OMT          | Invited Expert       |
| Richard Gibson      | RGN          | Agoric               |
| Rob Palmer          | RPR          | Bloomberg LP         |
| Shane F Carr        | SFC          | Google               |

## ESM Phase Imports normative PRs for Module source identity and Non-injective source imports

Presenter: Guy Bedford (GB)

* [proposal](https://github.com/tc39/proposal-esm-phase-imports)
* [slides](https://docs.google.com/presentation/d/1vxa-GBXmsm0B4TjQMks05i1632gsXgJpVSFQeJeaV2Q/)

GB: 2 PRs were presented in May, one was approved and one wasn’t. Sure. And the reason was that RBN brought up concerns about, the ability to have a cross-agent module identity which is something that shared structs, potentially could be interested in. So what I am bringing to this meeting is a PR 63, which is a normative alternative to the previous identity model presented, which introduces a refined concept of a global module identity. As well as an additional PR, which has not previously been discussed, allowing a form of weak source imports. So just to give the full refresher on the identity semantics, I'm not going through all the aspects of the proposal. But specifically honing in on these identity semantics that we're talking about. So these are JavaScript source phases which is the same object type that is expected for module declarations.

GB: The source phase just gives us a way to have this object without the module declaration syntax, in a sense, for non-module declaration modules. And if you post the same module twice, across to a worker, you're going to get two separate module object identities. So we've got this module source object; it's underlying module source record, and then the kind of identity of that record. So they're two separate things. In this case, we have two separate modules that both have the same underlying module source. On a worker. And then the question is, what happens when you dynamically import this module source? And we designed early on that we wanted to have instance equality so that we could have a concept of cross-agent module identity. So if you transfer the same source multiple times, and you import it, you get the same module even though it's not in the URL registry. This is a source registry. So the way we did this in the specification was we defined a concept of source text equality. And we said, when you serialize the module record, you serialize the source text itself. As well as the URL and the host defined data. And then we defined this ModuleSourcesEqual operation. And then we said if there's already a module that has the same equality as this module, then that registry can be used. Sorry, then that instance can be used instead.

GB: So it forms a sort of a module source registry alongside the usual URL keyed registry. So you can think of the registry as containing two separate maps. You've got the import URL registry, where you have these strong string keys. And in the source registry, where you have source keys. So and as I mentioned before, the same identity model applies for module declarations. So if you have a module declaration and post it across into a worker thread, and do the same thing, the same thing applies. Everything we're talking about here on the source phase also applies to module declarations.

GB: So with module declarations, though, if you create two module declarations that both have exactly the same source text, and they come from exactly the same URL, there's this question of, well, are they going to just because their module source is equal according to the definition that we defined is true? Because they have the same source text down to whitespace, et cetera. And you end up in a situation here where we don't have a comprehensive identity model, right? So there's clearly what we talked about before when we discussed these cases with something like some kind of extra ID that gets associated with a module and the host does this. But it wasn't formally defined. And so this kind of gets messy without having a formal definition of the identity model.

GB: But then just going back to the premise, why did we do this whole source text equality thing in the first place? Well, it was the only way we knew how to define a module identity across agents. And the use case in mind was the structs proposal when we did this. So when I presented it before, I said the structs proposal is has no interest in this. So we shouldn't be defining a semantic without a clear use case. And so we proposed in May to simplify equality and entirely remove this whole concept of cross-agent source equality. Replacing it just with the module identity of the thread local ModuleSource object. And that was PR 58. So a complete simplification, avoiding all of the complexity and if we did that, we would get these imports no longer equal. And the same would apply for module declarations.

GB: So since RBN brought up that there is still interest in cross-agent equivalence relations of sources and structs derived from sources, we-- I'm presenting a new normative PR 63 to define a new concept of global module source identity. And so just to go through the identity models, we've talked about cross-agent source text and URL equality. Per-agent ModuleSource object identity. And then this is the third one, cross-agent opaque globally unique ModuleIdentity. And the way this works is we define a new opaque type as a ModuleIdentity which has a unique constructor. So you can recreate you can only uniquely create a ModuleIdentity. And it can only it's defined that it can only be set on modules that have the source text equality property.

GB: So during transfer, you basically can only construct modules that have this property. And from an implementation perspective, you can think of it as either an atomic counter or a UUID, basically, associated with the ModuleSource. And when importing a ModuleSource, if a module with the same module identity already exists in the thread local or the dynamic import module registry, then that same shared instance is used. So with this, we can retain cross-agent identity. We have the ability to do this. And it solves for the module declaration case that was previously not possible. That was previously ill-defined. So two module declarations with unique with exactly the same source text and exactly the same URL, but now we can actually give them a separate identity because they both get a freshly minted identity. And they don't match incorrectly. So you have two separate modules. But if you transfer the same exact module, you get the same identity.

GB: Briefly, talking about module GC. So what this actually does is right now in module, in the module system, every module that is imported, sits in rooted in a registry under a string that can never be GC'd because that's a strong reference. But with these module source imports, they are theoretically GC-able. Because the key is a ModuleSource, or ModuleIdentity, instead of a string. So you could say that if the ModuleSource is GC'd, it's no longer going to be available. And you could GC the instance. But now that we have ModuleIdentity, you could in theory have the ability to be able to dispose these instances. So how are we going to do that without resulting in cross-agent GC is the question. And so this is done by making the ModuleSource registry weak. So the expectations on the ModuleIdentity registry are weak expectations so the idea here is that if the agent itself has no own so just like we had in the other PR where the ModuleSource itself is the key, when we move the key to become the ModuleIdentity, we can say that a ModuleIdentity is only live in a given thread or agent when there are ModuleSource objects with references to that ModuleIdentity because that's the only way to semantically handle a ModuleIdentity. And so then if there's no module sources with references to that module identity, that source import can be GC'd from the module registry without it being a cross-agent GC situation. Obviously, import URL remains non-GC-able as we have today. Pending some way to pin that registry to a compartment or a registry store. But that now, under this change, makes import source well-defined in terms of its GC ability and in a way that supports thread local weak registries while having global module identity. And this is what is defined in PR 63.

GB: Under this model, you could have a module posted to another thread wait a very long time and then post it again. And when you first import it, you would get a side effect. Later, if you don't have any references to anything, it could be GC'd. And if someone later transfers another module in with the same identity, the side effect would rerun. And that is the consequence of this concept of weak GC ability of the source registry. That you can have local clean-up. But that is basically the sort of the only implication that's worth being aware of in this model. So that cross-agent GC does not need to be defined.

GB: So I'd like to stop there and invite discussion. If we're ready, for that in the notes. Because that was a lot of content. And yeah, it would be good to work through the queue briefly on that.

RPR: Yeah. Thank you, Guy. So yeah, Kevin managed to get the bot up very early. So we are good for discussion. First is MM.

MM: So I'm not sure I followed all that, but the thing I wanted to confirm is a module identity is unforgeable. That if you don't have the module, you can't synthesize something that tests as having the same identity as the module. Okay.

GB: Correct.

MM: And then the is there any precedent in post message in structured clone for transmitting an unforgeable identity between agents?

GB: Not that I'm aware of.

MM: Okay. All right. Me neither. So I think this is good. I'm I would just want the to alert the implementers that preserving unforgeable identity over post message is a new case that you might want to think about whether your implementations are ready for it.

GB: And it is restricted to the agent cluster as well to caveat the identity.

MM: Oh. Oh, that's interesting. Why is it restricted to the agent cluster?

GB: The thinking is that if you're using something like so you would want it to be within the same security context of the application. And if you're implementing it something like with a-- I guess there's milestone implementation strategies. But restricting it to an agent cluster seemed to be the simplest way. Of ensuring that. But we could consider relaxing that if that seemed too strict.

MM: Okay. I would like to relax that because the agent cluster semantically is about is very specifically about SharedArrayBuffers.

GB: I see.

MM: But if the implementers have a problem with relaxing that, then it's not something I insist on. But I certainly I don't think that the defining characteristic of agent cluster, which is SharedArrayBuffers, is relevant to this.

GB: Interesting. I can post a follow-up issue on that. I think it doesn't affect the direct current normative change. But it is an important refinement that we should track.

MM: Okay. Good. Thank you.

RPR: KM.

KM: When you talk about the GCing part, does it actually need to be a GC? Can these source modules can they refer to each other in a way that makes a cycle? Like what could it not just be a thread safe reference counted?

GB: It could be.

KM: They are like many wrappers that point to it or something in each worker or the main page.

GB: Yeah. At the end of the day, they are straightforward references. They don't have, I guess a module source, it's fully serializable in itself. With module declarations, we do potentially have cycles between module sources. In transfer and things like that. So that maybe gets a little bit more complicated. I guess the cross-thread cases would kind of come up from a more of a perspective of just you would have to for the first time have cross-thread reference tracking. But it doesn't need to be cyclic necessarily.

KM: I mean, without cycles, I don't think it's any worse than like SharedArrayBuffer, right? Because SharedArrayBuffer also needs something of like you have many wrappers and these different agents and they need to point to the same underlying data store. And you want to free that data when they all go away. For cycles, I guess I don't know. It might be solvable. I mean, I think for even like we at least for web assembly runtime types, those can be cyclic. And they're still reference counted today. And we just kind of do a cycle collection because they don't go away very often. So it's not like a huge deal to do that cycle collection. And I would expect probably a similar thing here might be okay. But I'm curious what other implementers think if that's something they would do or what their strategy is even for RTTs in Wasm.

GB: It was OFR who originally raised this GC question as well. And yeah.

OFR: Maybe I think you're right actually. So I think a reference count works here as well. But the weakness might have another advantage. Because actually, if we don't have the weakness, then if you like basically if you have one worker keeping the source and the module life and then or like basically if I send you a if I send you a source module and then you import it and then you don't need it anymore, but I still keep the source reference alive, then you also need to keep your module alive. Because I can still send it to you and then you have to import it and you're not allowed to run the code a second time. So basically one worker still using the module source will cause all the other workers to not be able to collect the module. So I think the weakness still has advantages.

KM: All right. I guess on that, I suppose yeah, I see what you're saying kind of I have to think about it a little bit more. And I'm very “jet-lagged”. So I'm sure I'm not going to go over the very good solution. But it seems like there might be a solution in the form of like some sort of weak map from the source to the module in each record. And then the weak map record of the like the module source tracks it, if that makes sense, right? But like each agent has a weak map of the module source. To a module run. And so the actual module underlying backing modules can only die when the actual source dies. In your agent.

GB: That's what's currently specified.

KM: Okay. So I think that does that solve your problem then? I don't know if I explained that very well. Sorry.

GB: So yeah.

OFR: Sorry. So basically the thing that can happen is that we have that we have four objects, right? We have two workers. Each of them have a source module and the module. So it's four modules. And four objects in total. And then one worker stops using it. The other worker still keeps using the module. And that in turn keeps alive the source, right? Or just the worker keeps using this or keeps the source alive. And that causes the other worker to keep to have to keep its source alive because it could always be that it gets back the same source and then it has to instantiate the same module. And so if we make it weak per worker, then in that case, they can still individually decide, okay, I don't need it anymore. I can collect my module. That's the difference.

RPR: I see.

MAH: I don't actually understand why we keep talking about the module source here. Didn't we say that the only thing that matters is actually that module identity object? For the source, you don't need to keep the whole source around. Like you just need to keep the identity around to know if you've if that worker has seen it or not.

GB: So the current.

GB: There's no and that's what the presentation was saying, right? The module source object the one visible to user code is not is different no matter what. So even if you transfer it multiple times.

GB: So the module source object is I guess the only way you get a handle to identity. And so if there's no module source objects in the local thread referencing the identity and you can clear it. But I guess the question there and maybe this is a question for implementers is whether the module source would be kept alive while there are artefacts of the module still executing. And how we define that reference to the module identity. That's something that might have to come from some level of implementation experience. As well.

MAH: Yeah. So the reason I raised that is probably also related to RGN's point that's coming up. So I don't want to encroach too much on it. But I don't see why we need to collect module identity at all ever. It doesn't seem like an expensive as you mentioned, it can just be a UID. It's just like something you can keep around and in the storage of the worker.

GB: We're talking about specifically the collection of the map from the module to the source. The instance for that source modules import, which is a distinct map from the URL map. And that's the one that is defined to be weak on the ID.

MAH: I see. I see. Okay. Understood.

GB: Unfortunately, I'm going to have to cut the queue short here. Can we just put this current queue on ice and I will just work through the second PR? And then we can continue discussion at the end and maybe it'll give some time to digest some of these concepts as well. All right.

GB: Just quickly moving on to the second PR. And this is also a prerequisite to the weak identity. Which is non-injective source imports. I haven't presented this before because in previous discussions, it felt a little bit off-topic, but now it is very relevant in this discussion. So this was this is also kind of a little bit of a strange semantic that as I'm faced imports currently specifies. Which was the idea that when you transfer something to the worker and then you import it's you kind of expect that if you import the URL, you should still get that same module. And so the only way that we knew how to define this originally was via basically an injection from the source registry to the URL registry. Which obviously removes the weak aspect. And but it just seemed like…

MM: What do you mean by what do you mean by injection?

GB: I think I'm going to go into it in more detail. Let me finish the slides, and then I will-- we can do questions again after this one. So but if you do it in the reverse order, so if inside of the worker you first import that URL, you're going to initiate the loading pipeline. Sending out to the network to fetch the module. And you're going to get a module. Instance for that URL. But then if the same module was posted from a different thread, after you'd already imported it would not coalesce in the instance registry. So you would not have the same module. And this is kind of a strange situation because depending on the order, if you import first the one that's transferred and then the URL, it's defined itself under the URL that it came with because it carried its URL in its serialized data. But if you do it the other way around, it's not injected. And so you just had what was already loaded.

GB: So there's kind of some non-determinism here or rather ordering so the reason for this is that we wanted to draw the equivalence of transferring a module that it should also be available at that URL. But and we did this by injecting into the URL a registry when there was not a URL already defined in the registry for that import. But it's order dependent. It only works for the top level import and not dependency. And it turns off the ability to do the GC stuff we just discussed.

GB: And so the second PR that I have up is removing this URL injection behaviour. It's currently defined as a host requirement. And we just remove that host requirement. And that turns the source registry back into just being the straight weak registry. Under this, if you transfer a module and then after importing it, you import it from its URL, you're not going to get that same source coalescing across agents. But actually, with the current identity machinery, we actually now have a way to express that this could be made to work. So I've posted an issue for this. Formally speaking, this would be part of the HTML semantics and not TC39 semantics. Because of the nature of the division between what's in HTML and what's in ECMA 262.

GB: But basically, you can say that with even without transferring a module identity, you could allow module identity to be treated as shared state again, I've said here within the agent cluster, but that I'll add the refinement for that. And you could upfront associate if you're able to communicate module identity earlier in the loading pipeline, it would be possible actually to have full coalescence of identity in this way. Because we formally have now defined identity and defined what it means to share identity. And this could be another way that identity could be associated. And as I say, this is for the HTML spec, not ECMA 262. But it's a really important design aspect that deeply affects module declarations as well. Because what it would mean is also so basically, with both of the two PRs that I presented today, this would be something that could be done in HTML. We're not deciding either way today, but it would be possible under this module identity model.

GB: And with that model, you could actually just say that if you import the URL, you're going to get the same underlying module because you have we can know that they have the same underlying source identity based on sharing the source identity information in the background between these two, between these two separate agents. And that is then not order dependent. So you can import the source first and then the URL, you could import the URL and then the source and we would know that it's the same underlying identity. And the same would work for module declarations and also dependencies of module declarations. So for module declarations importing from a URL, you post the module declaration, you import the module declaration, and then you import the URL of the dependency of the module declaration, you're going to get full identity sharing, which is something we originally in the very early discussions it seemed very difficult to specify. But it's something that could fall out of this identity model.

GB: Further, but it would need more work on the HTML side. So the next discussion there, that's the normative topics and then it'll be the actual seeking consensus on the normative items. So that's the main bit.

RPR: So we only have 13 minutes. Would you like to resume the old queue or take new questions? There has not been any additions.

GB: Yeah, let's pick up from the old queue with the extra context. Yeah.

RPR: So I think that's KM next.

KM: I don't know. Just didn't answer my question or not. But I think the fact that there is the actual source instantiation and that instantiation can refer to these creating possible cycles amongst itself, that might because the source I don't know if this is the source also then have to keep the module alive. I think that would then create backlinks to the instance yeah, to the instance from the shared ref counted source. So I think you would need a GC to actually collect these and I was wrong. That you could do with reference counting. I mean, you might be able to do it with a reference counted check cycles.

KM: Still, which I mean, it's just basically a GC in and of itself. But I think it effectively requires a GC. Not necessarily a blocker, but yeah.

GB: Formally under the weak registry semantic, so I guess there's two things that we're talking about from a GC perspective. The actual module source itself, as well as the instance and so just to clarify, are you talking about the GC of the source or the GC of the instance?

KM: The GC of the source, which I mean, I guess, is now tied to the GC of the instance, right? Because I think we're saying that they're tied together. So because they're tied together, specifically from the source to the instance, then I think that entails that you can now have to handle cycles, right? Because your instances can point to each other and your instances can only and your sources maybe I'm wrong, but it seems like there's cycles. I don't know. I haven't thought hard enough about it. But I think for now, we should maybe just assume it's a GC. I don't know if we should we're not talking about it.

GB: I appreciate you thinking about it. This is exactly the sort of contribution that's great. But just to caveat that from the original discussion, with the weak registry model, the source instancing is a local instancing model entirely. The new injective behaviour is talking about the URL registry where once you've imported a URL, it's always rooted in that URL key. And we're just allowing coalescence of the URL registry with the weak source registry. So we're sidestepping all of the GC stuff by just saying it's the weakness is thread local weakness.

RPR: OFR? Ollie?

OFR: I don't know. What this was referring to. But I think there was a question why would we ah, yeah, Matthew said why would we ever want to collect this identity? But I think you already mentioned that. Basically, as long as the identity is here, you can recreate the module without running the module code. So it's observable. So basically, having the identity reachable is what keeps the module itself alive. Yeah.

RPR: Back to Keith.

KM: Yeah. Also, even if it were just is that feedback from us or someone unmuted? Anyway, I think even if it were just the UUIDs, I think it's probably a poor form on our part to create non-lexical leaks of data. At least with modules themselves, the data is constrained by lexically what you have in your program. But I think it will probably be able to you can I mean, I guess you can eval more modules or something potentially actually, maybe you can't until this is the only way you can actually create modules dynamically at runtime. And so you might be able to dynamically leak.

GB: Yeah, the path. And I think we would like to avoid that as a language design. Sorry. Eval of a module expression, if we supported module expressions, would be a path to constructing a structured clone is another way to create copies of source modules. Module source. Although they would share identity and do this. Is that just to try and understand your point further, Keith, are you saying that you have concerns with the global identity model so far as there is this yeah, maybe you can just clarify that. Maybe I didn't follow it all correctly.

KM: Ah, sorry. I was replying to the… this is an outdated reply with OFR was also replying to MAH of saying leaking the identities is maybe okay because leaking a UUID. But I think it's one thing to leak something lexically effectively where it's a lexical thing in your program and you can't keep recreating them dynamically. It's probably worse that it's substantially worse to have that for something that is dynamic.

GB: Got it. Thank you.

RPR: RGN?

RGN: Yeah. I'm thinking about the non-determinism inherent to GC and wondering whether you're intending the internal weak map to be subject to that because it seems like it's going to be a much worse experience if sometimes a collectible module source has been collected and sometimes it has not been. And wondering instead if we're wanting weak semantics that we might actually go farther than we usually go and _require_ collection, which obviously is easier if we're doing reference counting, but that way at least we get predictable behaviour.

GB: Yeah, I'm hesitant to require collection, but I hear your concern. I think for implementations, most modules are not weak. So especially if we can do the URL coalescing stuff, the URL is still a way to root a module. And then you would avoid that case. But yeah, I don't know. I think the URL registry is the place where well-defined teardown could be defined. But yeah, I'd be hesitant to state that there should be deterministic properties here. I think just not relying on the fact that because there's only applies across transfer, right? So within a specific agent, you're only going to see this from the perspective of new transfers. And so whoever's orchestrating the transfer can make sure that they're holding within each agent what needs to be held.

RGN: But the hazard I'm talking about is genuine in what's being proposed here, right?

GB: That there's observable GC non-determinism. Yes. You're correct.

RPR: Okay. Less than five minutes remaining. Three people on the queue. Matthew?

MAH: Yeah, I think that answered my question. I wasn't sure I understood the weak semantics, but that's why I wanted to reseat that slide. But my concern is exactly the same as RGN's. If this is basically allowing user code to observe GC without the explicit weak ref and finalization registry power, that seems very dangerous.

RPR: MM?

MM: I pass. I don't need to ask this in real time.

RPR: And KM?

KM: I guess there's two parts of this. One is yeah, I'm very hesitant to mandate reference counting for things. I think that is just limits implementations in ways that I don't know that we really want to. And I also think that you're kind of stuck with GC anyway because the module itself, the fact that the instance is itself a GC object, and then it has the thing and it points to the reference counted data. And so you're not guaranteed the instance has the GC behaviour. And so therefore, the source has to have the GC behaviour. I think also a good example of this scenario kind of already exists with WebAssembly not instances modules, but `WebAssembly.compile`, you can post message those to other threads. And they have a GC wrapper on them in both threads. And I don't think it's been overwhelmingly problematic that those get garbage collected. In terms of determinism or anything. I've never seen anybody complain about it anyway.

RGN: Okay. Well, setting aside the WebAssembly, which I'm not sure is subject to the same hazard. Being stuck with GC is not the concern. Being stuck with GC where sometimes you get one behaviour and sometimes you get another, based on the same source code, is the hazard that I'm concerned with.

GB: I appreciate that.

RPR: Two minutes left.

GB: Yeah.

GB: In the name of time, I'd like to just suggest a path forward from here. What I'm hearing is that there I haven't heard any major concerns with this concept of a global identity. And I think so Niccolo has reviewed the PR and we would like to be able to move forward with the identity model. But the concern that I'm hearing is the non-determinism from a GC perspective. And I agree that that is something that we should talk more about, but I don't want to rush that today. So what I would like to suggest is that we bring forward the module source identity PR for approval, but leave out the non-injective source imports one because if we retain source import injection they would always be rooted and they would be no non-deterministic GC behaviour. So we could get consensus on the global identity without the non-determinism. I believe. So if that sounds like a viable path to be able to at least make incremental progress today, unless anyone has any concerns about that.

RPR: So MM says, "Please bring back to TG3." OFR?

OFR: Yeah. I have a bit of a worry that down the line, the weakness will be a-- really will be a required thing. Where. Commented otherwise. So I'm a bit worried by this idea. I would have hoped that we can kind of agree that this is the goal. Especially also because the injection thing itself is actually also something that worries me for various reasons. So I was actually happy that it's being removed. So yeah.

RPR: And then KM then asked 30 seconds.

KM: Okay. I'll be quick. Yeah, I think there's already discussions, I think, around having global GCs in implementations for limited census for WASM. But none of that has finalized in any way. So I don't know that engines can certainly, if this proposal actually does require a global GC, I don't know that implement I guess we always speak for myself. JC can't, but I will I'm sorry. I think many other my understanding is other engines also would have not yet concluded fully that they want a global GC yet. And so if it requires that, then that might be a blocker. Going forward.

RPR: Okay. So we're at the end of the time box. GB, would you like to just say a closing statement on where we've got to?

GB: Sure. Yeah. I would like to see if I could seek consensus for the module source record global identity. If anyone wants to make an objection to this based on the GC non-determinism and the weak registry still being worked out, I will immediately accept that. But I will do all the follow-up discussions. So if one person wants to chime with an objection or otherwise, I will move straight to the summary.

RPR: Okay. You've got a OFR, you've got plus one on this. End of message. And MAH, is this an objection? Okay. MAH says, "I like the identity concerned about weak non-determinism." And then from KM, is this an objection?

KM: No objection. I just if I'm correct that it requires a global GC, I think that there's a chance that that may stall you in some ways. But I certainly think that this is the right way, assuming we have it. And it requires it, I suppose.

GB: Okay. I will skip the other item assuming there are no objections. I will note that we are agreed with the overall direction of a global module identity. With the caveat that we still need to further work through the story around weak source registries and cross-agent GC or local non-determinism of the GC. And I will follow up on those topics appropriately. And I've noted Mark, Keith, and Ali's feedback. Thanks for the extra time. And I will end it there.

RPR: Thank you, GB. Please do write the stand because I think this has been a nuanced conclusion.

GB: Okay. I'll check that out. Thanks.

### Speaker's Summary of Key Points

* Presented normative PRs 63 and 62
* PR 63 introduces global module identity to allow cross-agent source equivalence relations
* PR 62 stops module source imports defining their URL key into the module registry on import, which is non-deterministic

### Conclusion

* In discussion on global GC, it was determined that while it isn’t fully ruled out, it also can’t be assumed, aligning with the assumptions of the PRs as presented.
* Concerns were brought up though about the non-determinism of having local GC being observable via instance side effects due to module source transfer
* Approval was obtained for PR 63 defining global module identity, but without enabling the weak source registry for now. Further discussion will be followed-up separately with respect to these cross-agent GC semantics.

## Reworking Cover and Supplemental Grammars

Presenter: Mikhail Barash (MBH)

* [proposal](https://mikbar-uib.github.io/ecma262/spec/cover-grammar/)
* [slides](https://docs.google.com/presentation/d/1cB-HL6pob5tHBJu4BCEv57d4BdJDP1oXO62Eb-ALVHo/edit?usp=sharing)

RPR: Thank you. Okay. So we're running a little bit behind. We'll go to MBH with introducing the reworking cover and supplemental grammars.

MBH: Okay. I would like to start with a recap of what cover grammars are. I would do it using this example. When we have an expression of this form, do we know whether this is a parenthesized expression or a parameter list of an arrow function? And we cannot know this unless we look at the token that will appear after the closing parenthesis. So if we use naive rules, this will mean that it's impossible for us to choose which rule to apply with only finite look-ahead. So for as a solution currently, the spec has cover grammars where for the two cases, which we are to disambiguate, we will introduce this cover nonterminal. That would accept both of the possible cases and potentially even more. And then later, when certain conditions are met, whatever this means, we will be able to reinterpret the cover non-terminal as either a parenthesized expression or an or as an arrow formal parameters. So this phrase here, “if certain conditions are met”, apparently this is not explicit what those conditions are in the specification, but an analysis of the rest of the grammar would give us an understanding that in this case, a certain token should not follow the closing parenthesis and in this case, a certain token should follow the closing parenthesis. And again, this is just an example of one cover grammar that the spec has. The spec has more than this. But I hope this is enough of a recap of what we are talking about. So the problem that the cover grammars are trying to solve is this one: how to select a correct rule to parse. And as we established, one approach is to use cover grammars, and one other possible approach is to use grammars with unbounded look-ahead. And that is what I will be talking about in today's presentation.

MBH: I would like to mention that the first two items here are on specification-level. And implementations are free to implement the specification any way they want. The specification does not need to prescribe an implementation strategy. I will be talking more about this later. This is a summary of cover and supplemental grammars currently in the specification. So the first three here, I would call them explicit cover non-terminals. And then we have three implicit ones that are only serving as cover grammar in certain cases.

MBH: I would also like to mention that this one, the third one from top, is a part of the living document, not yet of the specification document. So it's supposed to appear in the next release. And as we can see, the relevant sections in the specification where the cover grammars appear, those relevant sections are spread all across the document. I tried to map how this actually works in the spec. And what's essentially we can see from this informal graph is that the non-terminals and the rules of the cover grammar, they tie together different and sometimes even unrelated parts of the core grammar. And they do so in an entangled manner. I'm not going to try to explain every detail of this graph, though. But you can have an impression that it's not easy to understand what is going on with the cover grammars.

MBH: We can identify issues with cover grammars. Mainly, it's reduced readability and writability of the specification. Reduced readability requires to basically read all of the mentions of a cover non-terminal to understand which cases it actually disambiguates. And there is no explicit explanation of how exactly it disambiguates those cases. Supplemental syntax appears arbitrarily far from the grammar rules that it affects. And the spec has vague formulations like under certain circumstances and so on. So similarly, this leads to reduced writability of the specification. And maybe one point I would like to particularly highlight here is that any modification of the grammar may introduce conflicts with the existing cover grammar.

MBH: The goals of reworking the cover grammars are to improve readability and writability of the specification, and to enable a succinct specification of the grammar. We want to remove the supplemental syntax clauses. We want to reduce the amount of early errors clauses. And we also would like the grammar specification to be sort of self-contained or self-containable. In addition, we want to have some mechanized processing of a grammar which will enable us to establish correctness of the grammar and other properties of interest.

MBH: Before explaining the approach that I have in mind, I just want to show you the before and after diagram. This is just a graph from before, the same topology, but just with removed non-terminal names. You can see that there are these edges across multiple different nodes. And what I want to have is something like this where thing is isolated. So each non-terminal can be read in isolation from the rest of the grammar. Let me show you an example of what I have in mind. So this is the current specification. We have this arrow parameters that can cover parenthesized expression and arrow parameter list. Okay. So this is a cover non-terminal and then somewhere else we have to sort of scroll to see that when processing an instance of this production, the interpretation of the cover non-terminal is refined using a different rule. And then in addition, we have the early errors which also says that this cover non-terminal must cover the really desired non-terminal.

MBH: So this is a suggestion of how this would look like. Again, this is just a mathematical notation which I in a couple of slides will be reworked into a spec-friendly notation. So when we have here is that arrow parameters now can be arrow formal parameters, but only under the assumption that the look ahead can be parsed as arrow formal parameters. And an ensurer, which basically is the original cover non-terminal. And then we have this explicit disambiguator symbol that will tell us that this arrow formal parameters is actually the rule that we want here.

MBH: The highlighted parts starting with this restriction here and this one and this one, they are of the same nature. These are some sort of restrictions on grammar rules. So if I read this rule again, ArrowParameters I want it to be ArrowFormalParameters, which is directly coming from the cover grammar from the supplemental syntax. And then I have this assumption, which is comprised of the original cover non-terminal and the disambiguator. And this now is explicit in the specification. This is how it would look like with the complete example. And just modifying this notation I would use a restriction of the form “assume” in front of the non-terminal that I want to have this non-terminal to be parsed as. So combining the two cases for this particular cover grammar non-terminal, in the original specification, this is now like that.

MBH: We have primary expression which can be this cover non-terminal or arrow parameters which can be this cover non-terminal. And then supplemental syntax and early errors elsewhere in the specification. And if we use the suggested approach, then we have primary expression which is a parenthesized expression assuming that we have this primary assuming we have the parenthesized expression. And sure, and arrow parameters is arrow formal parameters assuming we have arrow formal parameters. And this ensures the same with the only difference of the disambiguator that this is not arrow and this is an arrow.

MBH: I have reworked all the specification using this suggested approach. All of the supplemental syntax clauses, of which there are seven, they have been reworked. And also all the “must cover” phrases have been reworked. And current work in progress is reworking all the “covered by” phrases and fixing static semantics related to the rules which will be removed as a result of such a reworking. Let me briefly show the draft of the specification. So just as an example, let me just maybe show this one. Primary expression is now parenthesized expression which comes directly from the supplemental syntax. And then we have this assumption of applicability of this rule, which essentially is the look-ahead that we require here to be positive. And the look ahead itself is comprised, as I mentioned, of the original cover non-terminal and the disambiguator. As I mentioned, I've just only shown one example, but this has been done for all of the relevant cases in the specification.

MBH: Now we have a detangled grammar where we can read a particular part of the specification without having to analyse where that cover non-terminal actually appears in other cases to fully understand what the disambiguators in the cases would be. I have presented this to the editor group in the beginning of September. And there were two questions that I asked. The first one: “is there a problem worth solving with respect to cover grammars and their readability and writability”, and the editor's position was “yes”. And the second question was: “is the suggested approach a feasible improvement for the described problem”? And the editor's position was also “yes”.

MBH: The suggested specification changes are surgical. From the perspective of a specification reader or specification author, the underlying core grammar formalism remains the same. And we can establish the equivalence of the cover grammar approach and the suggested approach. Here is an outline of that equivalence argument. So whenever I have two cases, which I want to disambiguate, and the first one uses some X and the second one uses Y, then I would introduce this cover X and Y, and supplemental syntax and “must cover” phrases and “covered by” phrases. And in the suggested approach, I would still keep the X and Y in those two cases that I want to disambiguate. And I would add here assume XEnsurer and assume YEnsurer. And the XEnsurer and the YEnsurer, they would have this cover the original cover non-terminal and then the disambiguator for the X case and disambiguator for the Y case, respectively. The envelope here is essentially the original cover non-terminal. So to compare the cover grammars and the suggested approach, disambiguators are now explicit, cover non-terminal is required in both cases, but it probably could be a bit relaxed in the suggested approach. Importantly, the prose in the specification now is not required. The specification becomes completely declarative. And the last one is an argument about improved readability of the specification.

RPR: So sorry, just point of order. Did the fuzziness on the is there any way to improve teams presentation quality? Okay. Please carry on.

MBH: Yeah. Right. So if you think about how this could be incorporated into the current specification, then this could be either just syntactic sugar over the cover grammars, so this would be a specification level operation that results in cover non-terminals. Or, this could be an approach where a new grammar formalism would be defined and the spec would be free of any mention of the cover non-terminals. Even though these two approaches look distinct, they are both a notational change, because we can transform any of this to the original cover grammars as we have them now. So there are questions here about the existing implementations and how they implement cover grammars. I'll have a couple of slides about that later. And also a question about spec tooling compatibility if there are some tools that use the current approach of cover grammars in the specification to mechanically process the grammar, how this would affect them. We could think about the notation of the suggested formalism. I'm probably not going to go now through all of the points here, I just want to summarize the discussion from the editor call that a notation which is similar to what the spec already uses would be preferred. And something that is easily typable for grammarkdown. So this is the notation that I have currently been using.

MBH: So we have this “assume” restriction in front of the rule. And if we have multiple restrictions, this is also possible. Even though currently this only appears in one case in the entire reworked grammar. This could be called as grammar assumptions. Talking about the implementations, I had a look into how the major engines and some others implement cover grammars. But I'm more sure about the engines that I presented here on the slide, in terms of how they handle cover non-terminals. So for this one, cover parentheses expression and error parameter list. And for the second one, call expression and async arrow head. There are basically two approaches roughly: either do re-parsing as the specification prescribes or parse the cover and then reuse the already obtained abstract syntax tree to transform it into a particular case depending on certain conditions.

MBH: Well, there are certain conditions, I am essentially picking what is the next symbol in the input. For the third non-terminal here, an AwaitExpression and an AwaitUsingDeclarationHead, none of the engines presented on the slide essentially uses cover grammars. They just use lookaheads instead. And then for this, as I call it, implicit cover non-terminal LeftHandSideExpression, some of the engines use the approach that is similar to what I suggest. Meaning that they have some kind of unbounded lookahead if the left hand side is of a certain form and if there is this symbol that follows then perform that and that parsing. So if I were to summarize the findings from the previous two slides, then the implementations do use disambiguators which are currently implicit in the specification and I would like to suggest to have them explicit. This cover non-terminal is implemented by a lookahead. So essentially there is no cover grammar in the implementations. And for the left hand side expression, some of the engines use some sort of unbounded lookahead. So all of these are similar to how the suggested approach models these cases. Again, this is a summary. So for the first two: if the cover is followed by an arrow vs. if the cover is not followed by an arrow. The implementation essentially is directly the same. And then we have a similar specification in the suggested approach where we can explicitly see whether some disambiguator follows or not follows. For this one, this is almost the same. We need to have a look ahead. And then check whether we have an identifier after the keywords await using. And that's very similar to the suggested approach. And finally, for LeftHandSideExpression, there are many cases. I just give one example in some implementations. There is this: if the left hand side is of a certain shape, then select a particular rule. And that's exactly what again happens in the suggested approach.

MBH: This is just some relevant discussions about cover grammars from previous meetings and other sources. I'm not going to go into them now. And I would like to summarize the suggested approach. Essentially, it is the same as the current approach. One can think about it as just another notation for the cover and supplemental grammars with improved readability and writability. Because we have the cover and the supplemental syntax now written together. And we have explicitly the disambiguator in each of the cases. The last point on this slide basically says that this is a sound grammar formalism with parsing algorithms, but this is irrelevant for our goal of reworking the spec as of now. So there is some more work to do here, to make sure that all of the “covered by” phrases can be safely removed and all of the static semantics can be modified and I'm currently working on those.

MBH: So I would like to ask the committee the first question: “is there a problem worth solving with respect to cover grammars and their readability and writability”? I'm not sure what's the best way to do it.

RPR: Do you like a poll? Or should we first of all start with some discussion? Maybe we could start some discussion. So you've built up quite a queue. WH has several questions to go into. Just having a look at that queue, do you want to go into that or should we try and shift?

MBH: Well, maybe first question we could try to handle right now because it's independent on the solution.

RPR: Please go ahead, WH.

WH: Are you talking about the first question (Q1) on the slide or are you talking about my first queue item?

MBH: I'm talking about the first question on the slide. Okay, sorry. I misinterpreted. So basically maybe we could ask if anyone objects to the fact that there is a problem worth solving.

RPR: Looks like CM is going on the queue. MF says, I support this. End of message. Several people are typing. RGN says, plus one to improving cover grammars. And WH says, WH, would you like to talk about yours?

WH: This question is too vague. Yes, cover grammars are annoying. But whether it's worth replacing them depends on what you're replacing them with. So I don't know how to answer Q1 in the abstract.

RPR: Wait, it sounds like you're allowing the possibility that there might be something improved.

WH: Yes, I'm definitely open to the possibility that there might be something better.

RPR: MF?

MF: Maybe we can just instead ask for an acknowledgement that there are usability issues from both the spec reader's perspectives and from delegates who author proposals when it comes to cover grammars. Can we ask for feedback on that statement?

RPR: Should we start this with a poll then? Because I think you've rephrased the ask.

MF: Well, I understand what WH is saying about this particular thing on the slide is it implies a particular solution—that you can't really answer it without a solution. But I think the thing that I just stated does not imply a solution. It's just acknowledging that we think cover grammars are not a great solution for our consumers.

RPR: Okay, so can we acknowledge that cover grammars are not a great solution to our?

MF: I don't want to step on MBH toes, but that was my suggestion.

RPR: So you're happy with that, MBH? Okay, and RGN also agrees with MF wordings? I think WH you want to go into more details before answering that question?

WH: Yes, the things I'm going to present might affect what folks’ positions on this question are.

RPR: Okay. Well, just before we go into that, let's just read out the quick replies from other people. So CM says, without taking a position on the particulars, I want to applaud the effort to remove hair from the spec.

RPR: And RKG says, agree that there is a problem worth solving. All right, are you happy to go through WH's details?

RPR: All right. Please go ahead, WH.

WH: Okay. I looked through this proposal quite carefully. As background for those of you who don't know, I originally came up with a lot of the formalisms that we use in the grammar. I'm the most familiar with why they are there and what they do. Before we introduced cover grammars and parameterized productions, I machine-validated how they would behave and what they're there for. And cover grammars are there for a specific reason, which was not in this presentation. So that's the background.

WH: My first item is that, as a spec, we have a choice of either specifying the behaviour or specifying a particular parsing implement parsing strategy to get that behaviour. It's not a really strong feeling, but my preference is to keep the spec in the form of specifying the behaviour, not which parsing algorithm you should use to get to it. For grammars, there are a variety of parsing algorithms. This proposal mixes the two concerns. For disambiguation, it has both disambiguators in the grammar and as the explicit disambiguators. And those actually disagree with each other. This is a source of bugs—having two things in the spec which can get out of sync with each other. It's not a big deal, but I'm not really a fan of that. Next as I'm talking, can you go to the proposed spec and scroll to the AssignmentExpression rule?

WH: My remaining four points are big ones. They are crucial.

WH: For the 30 plus years that we've been doing this, we've had grammar invariants, which are there for readability. There are specific things which we choose not to do because they would be extremely damaging to readability. One of those things, which has occasionally come up before, is having negative rules: either negative parsing rules or ordered parsing rules, which are a form of negative parsing rules. The grammar as we have it now, with one exception which I will get into in a moment, has only positive rules. That is wonderful for readability and maintainability. If you only have positive rules, then when you extend a rule to cover something which is currently invalid syntax, when you add more options to a rule, then if the grammar still compiles, then you know that what you have is a purely additive change. As soon as you introduce negative rules, all of that breaks. To give a simple example, if you have a production which expands either to non-terminal A or, if A didn’t parse, to non-terminal B, that might seem like a nice shortcut, but it's toxic in the future to anybody who comes after you and tries to maintain it. If somebody later wants to extend A to cover something else, they might silently change the behaviour of something completely different in the spec. In fact, it's possible to even add new productions which take things which were valid parses before and turn them into SyntaxError. This is so toxic to maintainability and readability that over the 30 years we've resisted any attempts to have negative rules except for one.

WH: The one negative rule we have is for optional semicolons. This has caused endless problems over the years. We have to support it because that's web reality. But everywhere in the grammar where you see \[no LineTerminator here], that's someone disambiguating something which broke because of that one negative rule we have in the grammar. Now, the optional semicolons we have can only happen at line breaks. So you can fix breakages caused by that one negative rule by adding no \[no LineTerminator here] constraints. But the proposed negative rule formalism would not apply only at line breaks, so it's not fixable that way. I see that as a dealbreaker.

WH: The next item is behaviour changes. This proposal is not an editorial change. At the moment it makes significant changes to how ECMAScript behaves. I tried comparing this with the existing grammar and there are all kinds of places where this will just behave differently from our existing behaviour. So, as it is now, this is not an editorial change. And it completely neglects things such as \[no LineTerminator here]. There are other places I can't figure out what it’s trying to do.

WH: The next item is: the presentation asserted that the new formalism is equivalent to the prior formalism, but I do not see how that’s true. I can see how to map cover grammars to the new formalism. I do not see how to map the new formalism to cover grammars. For example \[referring to the proposed new AssignmentExpression rule], here we have an AssignmentExpression where the first constraint is \[ assume not ArrowParameters => ]. I don't know how to map that to a cover grammar. That part of it just does not make sense. Maybe I'm missing something, but the claim was made of equivalence, and I don’t see how in the formalism as it's presented.

WH: The final item is the biggest one and deals with what a spec is. A grammar spec must, at a minimum, regardless of what sequence of characters you provide as the input, either tell you a parse or say that that’s a syntax error. Furthermore, there must be a way to machine-prove that it does one of those two things for every possible input.

WH: The way I've done this when I created the formalisms is as follows. The main syntactic grammar is an LR(1) grammar, a deterministic context-free grammar, which drives the choice of whether / is interpreted as a start of a regular expression or as a division symbol. You can only do this lookahead one token at a time. You cannot lex the following token until you’ve parsed the previous one. This behaviour of / is the reason that we have cover grammars in the language, and it's fundamental. I can feed the main syntactic grammar into a deterministic context free grammar generator. If there are no bugs in the spec, it will generate a state machine. Once you have such a state machine, you can verify that for each possible grammar state (there will be a few thousand of them), that you never have a state in which you have both a regular expression and a division as possible sequels. If you ever do, that is a spec bug. This is the formalism that we've been using for close to three decades and I’ve done the validations when we created the formalisms. Also, to make the spec valid you must have additional constraints as to how \[no LineTerminator here] behaves, which I won’t get into because they are technical, but the new formalism does not recognize them. You must also ensure that anything that a cover grammar elaborates into is a subset of that cover grammar. If it's not, it's also a spec bug.

WH: To summarize. 1: You can generate an LR(1) grammar for the entire language. 2: That grammar is unambiguous—it compiles. 3: For every state in that grammar, you can never have both division and a regular expression as successor states. 4: Every elaborated cover grammar is a subset of the cover grammar it elaborates. Those form the formalism of the language; you use the top-level LR(1) grammar to drive the lexer. For what's being proposed none of that works. This is not even a spec at this point because I cannot get to step 1. I cannot generate an LR(1) grammar or any deterministic context-free grammar for the entire language in the formalism as presented. In fact, you can see in the production here that it wouldn't work because \[ assume not ArrowParameters => ] allows both division and regular expression. So this is just inherently broken. There is no way for a lexer to get going. This also contains intersections of deterministic context-free grammar. Per computer science theory, deterministic context-free grammars are not closed under intersection. So you can't do that to get something which is a top-level deterministic context-free grammar for the purpose of disambiguating division versus regular expression.

WH: So those are my concerns. There may be ways to resolve some of them, but they are crucial.

RPR: RGN has a reply.

RGN: I might have been misunderstanding what Waldemar claimed, but I don't believe that the full language is LR(1). In |ForInOfStatement| we have at least two-token lookahead: `for` `(` negative-lookahead `let` `[`. Similarly, for checking async of: `for` `(` negative-lookahead `let` or `async` `of`.

WH: Yes. I'm aware of those. However, there is a theorem which says that an LR(2) grammar is LR(1).

RGN: If we're going to say that it's LR(k), then fine. The significance of the number is indicating the need for look ahead. If we want to say it's just LR, that's also fine. But I think claiming LR(1) is misleading given the grammar that we have defined.

WH: Those are all deterministic context-free grammars. You can say “deterministic context-free grammar” instead of “LR(1)” if you want—they’re equivalent.

RGN: All right. Understood.

WH: On the other hand, the intersection of two deterministic context-free grammars, which is what the new formalism uses, is not a deterministic context-free grammar.

MBH: Yeah. That is absolutely correct. And I have this slide now that very briefly talks about the parsing algorithms for these formalism. Of course, it defines languages beyond context free and I yeah, you have made many good points. I have to read the notes carefully to go through them. And if possible, I would love to talk to you about this and you know offline and because I have some other ideas and yeah, I would appreciate your feedback on those.

WH: Sure, I'd love to chat more about this.

RPR: Yeah. So in the matrix, MF has written up his reframed question.

MF: I mean, again, just a suggestion. I don't want to step on MBH’s toes, but like that's my point of view of like where I see the value of this. And it's a suggestion.

RPR: I don't see the reformulation. Yeah. Should I-- I'll read it as so this is just MF's suggestion when we haven't decided if we're going with it, but it's: is our current usage of cover grammars causing readability, writeability, implementability difficulties worth investigation and potential churn? In particular, consider the lack of explicit disambiguators, shown to be needed by all implementers, the non-locality of the grammar and its dependence on early error prose rather than being self-contained. WH has thoughts. Please go ahead, WH.

WH: Yes, I share the pain. I hate cover grammars. They're kind of a necessary evil. Some of these, I think, could be done well using spec tooling. And one of the things which I'm thinking of doing is reworking my dusty grammar validator into something that can be run by folks. It will take me a while to do that, but that would definitely help.

WH: On the other hand, cover grammars also indicate that you're doing something which you really ought to think twice about whether you should be doing. They signal places in the language where, if you choose to proceed, you’re creating serious technical debt and will have issues with evolving or adding syntax in the future. So I think the difficulty of creating new cover grammars from scratch is not necessarily a bad thing because I don't want to see more of them.

RPR: MF.

MF: I don't know if I fully understood that. Are you suggesting the formalism that MBH is proposing is the formalism that could appear in the spec as long as the way that we author it is using cover grammars? So that we are using a restricted formalism in our authorship so that we don't use the full power of this new one. And then we allow readers and implementers to consume the preferred formalism?

RPR: WH.

WH: Yes, that would be wonderful. The thing I care about is that we have an unambiguous spec that's evolvable and maintainable. Any reading aids which make the grammar easier to read would be great.

MBH: So do I understand correctly that you, WH, are fine with this approach that is on the left? Where this would be just a syntactic sugar that will produce cover grammars?

WH: I would rather go the other way where cover grammars produce this since that's much easier to reason about. What I don't want to do is to make it too easy to create new cover grammars because that causes maintainability problems down the line.

MF: Sorry. I do feel that a solution like this would only be solving half of the problem, albeit the more important half in my opinion. It's better than nothing. I mean, we'll still have to fully discover the ramifications of it as we try to implement this. But my view of it now is that it will be better than not doing it. I'd rather solve half the problem than not do it at all.

WH: What is the other half of the problem that this would not be solving?

MF: Authorship would still be challenging. Really anything that touches the grammar for most champions requires a lot of assistance.

WH: Yeah. I'm thinking of doing tooling in the long term which might help with that.

MBH: But so WH, could you please summarize what you would be fine with? So how would that look like?

WH: I don't understand the question.

MBH: Well, you mentioned—

WH: We have a huge space of possibilities.

MBH: Well, when I mentioned this box on the left, that it would be a spec level operation that would produce cover grammars. And you mentioned that you would rather prefer the other way around. Could you elaborate how this spec text would look like? Would it still use cover grammars? And then we'll produce this formalism with like there will be like two formalisms or I'm not sure. I'm confused.

WH: I feel like we'd be trying to design a formalism live in this meeting which I don't think would be a great use of our plenary time here.

MBH: Well, I would like to repeat that I would like to talk to you about this. And see where we can go. Yeah. Thank you.

RPR: MF.

MF: Yeah. I think that it would seem like we now really understand the stakeholders in this and this would benefit from having out-of-plenary discussion where we can nail down the details. So WH, if you can, reach out to us and we can set something up. I think that'd be great. Possibly with the whole editor group, but at least between you and MBH to get things started. And then including the editor group.

WH: Sure; I can do that in November.

MF: Okay. Thank you.

RPR: Thank you. Okay. Great. Thank you, Waldemar. So the action is with you to set up the meeting with Michael and maybe afterwards with the editor group.

WH: Yes. I'm looking forward to this.

RPR: Thank you. MBH, is there more you would like to get from this session?

MBH: I guess that's it.

### Speaker's Summary of Key Points

* Presented an approach to rework cover and supplemental grammars that is based on grammars with unbounded look-ahead, with the goal of improving readability and writability of the spec.
* The approach was presented during the editor call on 2026-09-03, and the editors' positions are: (1) “Is there a problem worth solving with respect to cover grammars and their readability / writability?” Editors’ position: “Yes.” (2) “Is the suggested approach a feasible improvement for the described problem?” Editors’ position: “Yes.”

### Conclusion

* During the plenary presentation today, several delegates expressed support for the suggested approach, and there were some objections from one of the delegates. We will work together to try to refine/modify the suggested approach, in order to be able to present it at a later plenary meeting.

## Continuation: structured TC39 data status update

Presenter: Michael Ficarra (MF)

* [slides](https://docs.google.com/presentation/d/1Qr0soLiTxn6od612KAnkDttMDhyS1BBRmFjmd9ken8Q)

RPR: Yeah. Thank you. Okay. Thank you. All right. So that's been a deep dive. We only now have 10 minutes before lunch. CDA, did you want to do the agenda deadline during that time or should we try and go for a continuation?

RPR: Continuation. Okay. So continuation is possible. MF, did you want to try and do the data one, the TC9 data status? You have 10 minutes or rather than the 15 requested. Okay. You've got 10 minutes then. Yeah.

MF: Okay. So I think we had a fairly productive discussion when we talked about this last time. And I think we're just nearing the end of it. So on the first point, I believe we did reach consensus for recognizing those four inactive stages and possibly following up later with actually getting to our ideal. On the second point, I don't think there was any feedback. On the third point, I have some action items to connect with current, active delegates about any name changes that affect them. On the fourth point, we need to wait until we have some chair support for our new processes. So I think we only had to talk about this fifth point right now, which is something that CDA had requested at the last presentation at the July plenary. In the original presentation, I had suggested that we would have potentially better interfaces to all of our data. And CDA said that there might be some concerns from some delegates about exposing their affiliation information. So this is just that your name and your company are listed next to each other, while you are assigned as a delegate for that company. I wanted to get any feedback if anybody does have such a concern. And we can go to the queue.

RPR: Hi. Okay. Let's go to the queue then. So KM. You're sorry. KM, you're on the queue with isn't the question about if anyone would be uncomfortable or.

KM: Oh, okay. Yeah. I just made it back in. Sorry.

KM: <struck> … But I think there was a question before yesterday about asking in the room if anybody would be uncomfortable. Like, with this answer. But I mean, in theory, we're answering the question for future delegates, which we can't answer accurately. But I think if it's being published anyway, maybe that's kind of a moot point. So I don't know.

MF: The distinction there would be that for future delegates, we could make this notice clear at the time that they're onboarded. Whereas for current delegates, that was not already done.

CDA: <struck>

CDA: I don't have concerns because JHD is—very sorry to mention you, but JHD is very publicly available on the Internet. As am I. So I don't have concerns for me personally. I have concerns on behalf of those who are not so public. And so this isn't like a blocker by any stretch of the imagination. I just want to make sure that we're doing it very deliberately and I would sympathize with concerns of individuals that are a little bit more uncomfortable with that. In the same breath, I don't want to speculate that, an imagine that there's concerns that don't exist. But I just wanted to raise the point.

JHD: Yeah. And to clarify, I'm not saying the question shouldn't be asked. I'm saying that I would be very interested to hear why like, as you said, you talked about discoverability. I think (the data) will be surfaced. I don't think that it's not I think it's 100 percent discoverable already in the age of AI. So I would love to understand someone's concerns about this, if they have them. Like, in other words, I would love to hear about some data that this would actually newly make available.

CDA: Right. I agree with your perspective. And I don't think it's helpful for us to imagine things that might not be there. But it is helpful to consider things that may be there and raise them in case delegates do have those types of concerns. MF.

MF: For some reason, actually, the reply button isn't there for me. So maybe this is a TCQ bug. Or maybe the chairs haven't advanced things properly. We'll find that out. But to JHD's point on "you can use AI to find them", part of the original delegate cleaning process, I was trying to find somebody's full name or something like that. I was trying to do that and I used a number of techniques, which were not successful, including many AI tools. And then I remembered (where to look). And it was there. So, I think, CDA does have a point that it really is just not discoverable today. But I'm still personally of the opinion that all the work we do is very public and it's hard to square that circle for me.

RPR: Okay. We only really have about one minute left. So could we have some quick replies? You're not looking for a consensus here. This is.

MF: I do eventually want to get to the point where we can do something like this, but that is not an urgent thing. So we can revisit this in future meetings.

RPR: Okay. JHD. You're you're you're your topic is I think you may have already said it. Note that if your GitHub TC39 org membership is made public, you get PR previews on spec PRs automatically.

JHD: Oh, yeah. That was from last time. Yeah. So the that was just saying there's a benefit to making your GitHub org membership public. Yeah. But the other thought I just had, which doesn't have to be answered right now, is we had a big thing about how all of our technical content has to be public as a result of export controls and stuff. Does that not also require the national affiliation and thus no human identity of all of us to be public? No? Okay. Yes. So it's-- I'm saying it's worth having a lawyer answer that question because that might be relevant here.

RPR: So Samina, could answer that?

SHN: I don't 100 percent know the answer, but I mean, sorry that I don't have the answer. But the question was repeat the question again. Sorry. Just tell me just say that question.

JHD: Just so as a result of some countries being on lists where we can't work with them, then the exceptions are as I understand it, are that this sort of interoperable technical work, as long as everything's public, is fine. So is the question that does our identities and national affiliations have to be public as well?

SHN: Definitely affiliations, because I know that you don't want anybody bilateral conversation. You need to have it in a group for certain affiliations, certain organizations. From certain regions. That's definitely a legal practice that I see in many SDOs. We have never had a hardcore statement in ECMA. We just follow that as best practice. But I think I want to take this away and try to get some clarity from some legal advice on this. So make sure we're in the right way.

RPR: Thank you. All right. Final 30 seconds for RBR.

RBR: I would like to have a different topic than what we've spoken so far about, which was more of the personality's perspective on if they want to be represented in public. Like, being committee representing the language I believe it is also very positive in fact to have a transparency of who represents that. Because it is a public thing that and, this represents the language, in a way. And I believe it is very helpful for people, external people, to have easy access to know who is moving this forward or not. Okay. And sorry, I yeah, I skipped CDA. So CDA.

CDA: I know we're eating into lunchtime. No pun intended. I just wanted to express that any substantive change to a name in the delegates file and what I mean by substantive is not changing Dan to Daniel or Chris to Christopher or adding F. to Shane Carr. But substantive change to names in delegates the text felt I say should, but I feel more strongly I think it must be accompanied by a scrub of references in TC39 repositories. I do not want to see a change in delegates of a significant name change where we are preserving their dead name in repositories that that doesn't mean that it must happen at the same time, but certainly that needs to be recorded as a follow-up action maybe not an issues because that might be a little bit too visible. But yeah. We should make sure we're doing our due diligence for those sorts of changes before committing.

RPR: All right. So we'll wrap up there. Apologies for going slightly into to lunch. We will resume at one 1:00 PM. And just before you go, I'll remind everyone that we in the room, at least, we have the opportunity to attend the Sony tour I'm told it's very good. People come from far and wide to go on this tour. That's at 4:00 PM. So we'll be we'll be leaving really on time for that. And if you want to register for that, because there's still places available in our Tokyo Matrix room, you can find the pinned post is a poll. And you just you do your emoji poll there. To secure your slot. We're at the moment we're up to roughly 16 15 or 16 people. We've got 20 slots. All right. Please enjoy lunch.

MM: Can I just ask a quick question with regard to that very last point?

RPR: I think we are on lunch, but. Oh, yeah. Go ahead, Mark.

MM: Okay. So I very much sympathize with the desire to scrub dead names, but so much of our work is in Git. And. Right. The whole so I don't even understand technically how that would work.

CDA: Sorry. What you don't understand how technically how what would work? No, I heard him. I want him to elaborate. Sorry. Go ahead.

MM: To remove dead names from the existing public material. I mean, the public material is in Git.

CDA: Right.

MM: As far as I how would you change the history?

CDA: We do a find and replace and create a pull request and ask the individual to approve it. We've done it before.

MM: In other words, you wouldn't erase the history.

CDA: Yeah. Yeah. Yeah. We're not rewriting the Git history. Reference.

MM: Yeah. We don't rewrite history. If somebody wanted to go to Okay. Commit hash from 10 years ago, they would see the dead name.

JHD: if it's very important for somebody to keep their previous name and new names connection secret, then I assume that what they would do is the old name would leave the committee and the new name would join the committee and we would just not acknowledge the connection.

MM: Okay. I understand.

JHD: I haven't seen that being typical a typical ask.

MM: Okay. I misunderstood. I thought we were applying it to history. Okay. I understand.

CDA: No, we're not yeah. But what Jordan had just mentioned is unprecedented. But if we did have a situation like that, maybe we would do that. Maybe we would do something else. I don't know. We would work with the individual to come to a solution that is amenable for for for them.

MM: Okay. Great.

CDA: All right. See you. Oh, we're seven minutes past. All right. See everybody here in 52 minutes.

### Speaker's Summary of Key Points

* Earlier discussion reached agreement on recognizing four inactive proposal stages, with further refinement possible later.
* Follow-up with active delegates about name changes remains outstanding, and new processes await chair support.
* Feedback was sought on making delegates' names and company affiliations easier to access through improved interfaces to TC39 data.

### Conclusion

* Improved access to delegate affiliations remains open for future discussion; no decision was taken.
* SHN will seek legal advice on whether export-control rules require delegates' identities and affiliations to be public.
* Substantive delegate name changes should include follow-up updates to references across TC39 repositories, with the affected individual's approval and discreet tracking.

## Async iterators: the whole proposal + open questions

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-async-iterator-helpers)
* [slides-1](https://docs.google.com/presentation/d/19xEFe4rHPDxpX_ai7dXrYY3wNtgwcsaKV25PwZiml54/edit?usp=sharing), [slides-2](https://docs.google.com/presentation/d/1FfYbAJ2pElLQPqn32ZvgtuTQzEWU_79ZjKMs--k1CMY/edit?usp=sharing)

KG: Hello all. I have been trying to work on having my time boxes be adequately sized and based on how this conversation went last time we are signed up for two hours. No guarantees that we will actually require the whole two hours. On the other hand, if that's how the conversation goes, that's how it's going to go. So last time I presented this, I talked about a bunch of open issues, a couple of which we've resolved then or since. I will have more open issues in a separate presentation, which I'll get to after this one. But because it is my hope that we can resolve the outstanding major open questions during this meeting, the next thing that will happen after that is I will very painfully write some spec text and ask for people to review that spec text and come back for stage 2.7. Probably not by the next meeting, just based on the amount of work that it's going to require, but that's my hope. And given the scope of the proposal and the number of different individual decisions that have gone into all of the various parts, I wanted to make sure that the committee knows what you are going to be signing up for, knows what you'll be agreeing to, when this does come for advancement. And I want to make sure we're all on board with it before I go to all of the effort to write all of the spec text and come back for advancement. So before I get to the larger list of open questions, I wanted to just go through the entire proposal. Everything that's in it and all of—not all of, but some of the fiddly little details in the various parts of it to make sure that we're all on board with it.

KG: Okay. Without further ado, there it is. That's the whole proposal. End of slides. No, of course not.

KG: So I'm not going to read off this list, but I'll be going through all of the parts of it. Basically, it's the helper methods that were originally in iterator helpers as well as `Iterator.prototype.toAsync` and `AsyncIterator.prototype.buffered`. Each of which I'll be talking about in a minute. I am in particular not proposing to include stuff like zip or chunks or windows or concat or join, the follow-up things that we've added to `Iterator.prototype` since this proposal began. Just because I don't want the scope of the proposal to creep. So it's just the things that basically have been in here from the beginning. It's roughly speaking the array methods that make sense, except with take and drop in place of splice. And no `at` and no `findLast` or those sorts of things that don't make sense. So I'm not including the other things we've done since then. I do intend to come back with a follow-up, or a variety of follow-ups for things like zip, some of those are actually a little bit non-trivial in terms of making the implementation support concurrency, but I'm just not going to think too hard about those problems right now. Because I don't think they affect anything that's actually in the proposal. And I think that they all have basically one or a small number of possible semantics that will make sense. We just have to work through what those should be and, again, I'm not doing so now. Okay. So let's get into the meat of the proposal. I'm just going to go through everything that's in it and talk about what it is and if I think there's anything that's a decision that I have made that someone could disagree with.

KG: So AsyncIterator is a new global. Not really anything to it. This only exists so you can do `class extends AsyncIterator` and so you can do `AsyncIterator.from`. It's technically constructable so that it can be used as a superclass, but you can't construct it directly. Only via `super` or something like `super`. It's basically exactly the same as Iterator.

KG: So AsyncIterator, pretty straightforward. `AsyncIterator.from` is a static method for converting three different things—or arguably four—to valid async iterators, valid meaning inheriting from `AsyncIterator.prototype`. So it can take a sync or an async iterable or an iterator. If the thing that it is given already inherits from `AsyncIterator.prototype`, then it just returns that. If it is given something that is an async iterable, then it invokes `Symbol.asyncIterator` and if the result inherits from `AsyncIterator.prototype`, then it just returns that. Otherwise, it wraps it. The wrapper is on the next slide. For synchronous iterables, we need to lift Iterator<Promise> to an async iterator. So basically, a Promise of an iterator result. This is the same way that `for await` over a synchronous iterable works. It's a little bit non-trivial to figure out how you want to do that with a bare iterator. If you just are given an object with a next method, you don't actually know if that's supposed to be async or not. That's one of the open questions.

KG: We also have this not exposed new global, which I know people are sometimes worried about not exposed new globals, but this is just exactly the same as for iterator helpers. It's just the place that all of the `next` and `return` methods live or rather, there is just one next and return method for all of the helpers and there's just one class and they dispatched all of them. So instead of having a separate map iterator, async map iterator helper, and async filter iterator helper, and so on, we just have one set of methods that just checks an internal slot and then dispatches to the appropriate implementation. Again, this is just pretty much exactly like iterator helpers. And just like iterator helpers, we also have this wrapper that I talked about with `.from`. When it needs to wrap something to ensure that it has the right prototype, there's this not directly exposed new intrinsic that handles that. And again, open question exactly how this should work, which we'll get to in a second. Okay. Then we have the sort of boilerplate we always have, `.constructor` and Symbol ToStringTag. No real questions about those. Also, `AsyncIterator.prototype`. `Symbol.asyncDispose` already exists. And just invokes `.return` if it's present. So we're not adding that, but it is something that already exists.

KG: Okay. Then we have the core three methods, the things that have been taking all of the time, which is map, filter, and flatMap. And they constitute almost all of the complexity of the proposal. We've talked about these a lot. We're going to talk about them a little more in the open questions. So I'm not going to talk about them more. Because I've done them to death.

KG: There is a caveat on flatMap, which I haven't emphasized previously, but flatMap supports concurrency, but the concurrency being driven by the consumer just invoking dot next repeatedly is only able to get concurrency from the most recent inner iterator. It is not able to get concurrency from the underlying iterator. It's a little bit unfortunate, but there's no good way to avoid that problem without making the API shape more complex in a way I really don't want to do. Anyway, you can sort of fake it if you do this slightly awkward idiom here, because the `buffered` helper drives the underlying iterator concurrently, if you want to have concurrency in underlying iterator, you can just map over it and then do buffered and then do a flatMap to flatten the results. And then you get concurrency both with the underlying iterator and the inner iterators.

KG: Okay. Then we have the obvious consuming methods. `some`, `every`, `find`, `forEach`, `toArray`. These consume the whole thing, return a Promise, take an asynchronous function, in the case of `some` `every` `find` and `forEach`. They don't have any built-in concurrency. There is a follow-on. The concurrency control proposal would allow passing a second argument to these, which would allow specifying a degree of concurrency or some more complex way of getting concurrency in these. An open question is whether we should reserve that second parameter or not. If we do the thing that we normally do, we just ignore any additional argument and assume that no one will be passing anything. And then at some later time, if people start passing the concurrency argument, if they are on an older implementation, they just don't get concurrency, which depending on your perspective, is either very bad because the program is silently slower or totally fine because the program has exactly the same behaviour that it otherwise does. So the open question is, do we throw if someone provides a second argument to these things? Or a first argument in the case of `toArray`? I see MF is on the queue, so since we've got a lot more things and I don't want to lose the context for this, MF, do you want to say your topic now?

MF: I haven't thought about this any more than during the time that you were presenting it, but yeah, it seems to me that it is a good idea to reserve this spot. I know that's not a typical thing we do, but at least I feel pretty confident that if we're going to go forward with concurrency control, we're going to want to be able to pass that concurrency parameter there. And I also know that concurrency control is an earlier stage proposal at the moment, but that's only really because it's been sitting behind this one. I think it would have proceeded further if it was not blocked in that way. So because of those reasons, I think it makes sense to reserve this position.

KG: What do you think about the argument that if we simply don't reserve it, then new code will work on old runtimes just fine? It'll just not get the concurrency? And so it's kind of unfortunate to make the new code throw on old runtimes if it doesn't have to.

MF: Again, I hadn't thought about this topic any more than during the time that you were presenting it. So consider it a weakly held opinion and I could be swayed by things like that. I'm not sure. I'd have to think about it more.

KG: Okay. Well, I will pick an answer to this by the next time I come back.

KG: Okay. Moving on. `reduce`. It's also a consumer. Unlike the methods in the last slide, there's not really any obvious way to add concurrency. Reduce is ordered and each invocation depends on the result of the previous invocation. So it's sort of inherently sequential. So I don't think there's any open question here. We just simply are not going to have concurrency. I do want to call out that like with iterator helpers, this differs from the array prototype `reduce` in that it is not passed to the collection. So it will only be passed to the accumulator the value and the index. For arrays, the callback is passed a fourth argument, which is the array itself. That's not really useful for iterators because you can't index the iterator. So it's only passed to those three things.

KG: `take` and `drop`. These are iterator-specific methods. They match the iterator version in that they don't actually do anything when invoked. They just give you immediately a wrapped result and so for drop, when you call `next` the very first time, it immediately does the dropping. There's an open question. Which is for drop, we could in principle invoke `next` many times or the number of times that the method calls for. So if you do `.drop(5)`, and then you call `next`, we could immediately do five invocations of `next`, or rather six invocations, because five of them are going to be dropped and then one of them will be the result, without waiting for the previous Promises to settle. I have this listed as an open question. I feel moderately strongly that the right answer is that we shouldn't do that. We should wait for each Promise to settle before invoking `next` again. This follows a loosely held feeling or principle that we should not cause there to be concurrency unless the user does something which asks for concurrency, such as invoking the `buffered` method. That said, 99% of the time that I invoke this, I'm going to want to have the immediate behaviour—well, not 99% of the time, but much of the time. So perhaps it would make sense to have a Boolean parameter for opting into this more aggressive concurrent dropping. Anyway, I have it listed as an open question, but unless someone feels strongly my intention is to just do it in the boring sequential way. Where we wait for each Promise before invoking the next one.

KG: Okay. `buffered`. This one is the thing that is unique to async iterators. This one takes an argument that is the size of the buffer and it keeps an internal buffer of that many Promises pulled concurrently from the underlying iterator. So when you first iterate over the iterator produced by `buffered`, when you first invoke `next`, it will pull n + 1 Promises from the underlying thing concurrently. The whole point of this—well, not the whole point, but the main use of this is it does that concurrently so that it can drive concurrency in things like `map` and `filter`. And then it just holds them in the internal buffer and runs them in the original in the order in which they were produced from the underlying thing, regardless of whether later ones have settled or anything like that. There is a point where this could have been done in a different way, which is that as I've done this, invoking `buffered` doesn't do anything immediately. It only does the calls to the underlying `next` method on the first call to the result iterator. So you can construct your whole pipeline and it won't actually start buffering until you consume from the pipeline. I think that's definitely the right default behaviour. It is moderately annoying that you can't start buffering before you start consuming the pipeline. Often, when you are buffering, the whole point is that you want to be getting the work ready so that when you actually get around to consuming it's already available. And that doesn't work if you don't have eager buffering. So maybe there should be an option to opt into it. It's moderately annoying to implement this yourself. I'm not really sure if I'm going to add that as a Boolean parameter or not. Leading weekly towards yes, just because of how annoying it is to do without support in the language. And it doesn't add very much complexity.

KG: Right. So this is the only way that will be built into the proposal to get concurrency from things like `map`. We spent all this time talking about how it's nice to make map concurrent or support concurrency. The concurrency has to be driven by the consumer. There's not very many things that consume async iterators in the language. And none of the existing ones and none of the things like `some` and `every` will be concurrent by default. So if you want to have concurrency, what you have to do is put buffered on the end. And then do one of the non-concurrent things and then you will get the concurrency from the buffered method. This also allows you to be concurrent between the async iterator and the thing that is consuming the async iterator. The most obvious example is just if you're doing a `for await` over an async iterator. Without the buffered method, then the order goes that you pull from the async iterator, you wait for that to settle, then you enter the body of the loop, you wait for all of the work in the body of the loop to complete, and then you do another pull from the async iterator. So the loop is never running concurrently with a pull from the async iterator. With `buffered`, even a buffer size of one, you can be doing the pull from the underlying iterator at the same time that you're doing the body of the loop. So it's a very useful convenience method. But in addition it is the only way that you get concurrency right now.

KG: Okay. `toAsync`, is on `Iterator.prototype`, it's the only thing added to `Iterator.prototype`, and it's basically just a convenient way to get from a synchronous iterator to an asynchronous iterator. You could generally just do `AsyncIterator.from` and pass the iterator. That would work as well. I think it's nice to have the `toAsync` method. Something that is true of all of these things that turn a synchronous iterator or iterable into an async iterator is that they do actually have some special handling for synchronous underlying iterators, which is that if the iterator gives you a `done: true` result, then that can resolve immediately even if you are blocked, even if earlier calls to `.next` are still waiting for a Promise rendered by the iterator to settle. So in this example here, you have an array with two Promises which haven't yet settled. You get an iterator of the array and call toAsync. And then pull from that three times. The third one can resolve immediately with `done: true` because you know at that point that the underlying iterator has only two values, even though the values themselves are not yet observable to the consumer of the async iterator because the consumer of the async iterator needs to wait for the Promises to settle. This is especially useful if you're doing flatMap for reasons I'm not going to get into. But it's not a completely trivial wrapper. In particular, this isn't how the spec native wrap-sync-for-async-iterator thing works. But we are not going to use that built-in because that is only intended for use with `for await of` and is not user exposed and we really don't want to make it user exposed because then users can mess with it and that can break a `for await` loop. So `toAsync` is going to be its own thing. All right.

KG: So what's left to do. There's open questions, which we'll get to in the next presentation. And spec text, which is going to be a lot. I apologize. I think flatMap is going to be the most complicated algorithm in the spec by a factor of three approximately at least. There's nothing that even comes close to this. Sorry. When you start doing things with concurrency, they get complicated. But that is why this has been taking so long. The spec text is going to take me quite a while to write, which is why I can't promise that I'm going to come back with it at the next meeting. Also, after that, of course, we'll have to do tests. There will be hundreds of these. I already have hundreds of these. But of course, that doesn't have to happen before stage 2.7. And then I will eventually be asking for consensus.

KG: For stage 2.7, I will need reviewers. So I would like to invite people to sign up to be reviewers. There are technically people listed as reviewers, but I don't think they signed up for the proposal in its current form. So I don't think I'm going to subject the people who previously signed up to this. But I'd love it if we could have people sign up to review some moderately annoying concurrency code. I will make it as easy for you as I can. I’m going to give a minute in case people want to volunteer. Otherwise, I'll circle back to this. But I want to wait at least a little to see if, for example, MF wants to volunteer.

JHD: I can be a reviewer as well.

RBR: I can also be a reviewer.

KG: Excellent. All right. Thank you both. Okay. So I do want to talk briefly about future work that I am not going to put in this proposal, that I want to do in later proposals. Or I want other people to do, in some cases. This is mostly just because I think it is useful to have a sense of what the world will look like when we are done with this particular questline. So concurrency control, which I mentioned before. This is a proposal that will provide ways of limiting concurrency or driving things like `AsyncIterator.prototype.something` concurrently. I think it'll be very useful. That also is kind of gated on the AbortController work because some of the concurrency control mechanisms in there really need cancellation. So we have to get cancellation in the language before we can proceed with that proposal. Also, unordered iterator helpers. One of the design principles for this proposal, which again I'll bring up in the next presentation, is that you always get the same results in the same order that you would have originally, with some quibbles; that's not necessarily true if the underlying thing is incoherent in a particular way or if there's races. But apart from that situation, you get the same results in the same order if you pull concurrently or not. I think that is necessary and makes the results easier to reason about. But in a lot of cases, you simply don't care. If you are going to be mapping your results into a set or something afterwards, you don't care about order. Then you can get strictly faster pipelines if you allow results to come in out of order. So the unordered helpers are just a way of doing an unordered map that gives you results as they settle instead of always giving you the first one in line. Also I want to add the other iterator helper methods, zip and so on. And then there's two more, I will have slides about: I think we need to have some mechanism for registering clean-up, and I'd really like to have some way of getting an iterator of Promises to an async iterator by racing. So I'll talk about those very briefly.

KG: So for clean-up, we have this longstanding problem that async generators have a single queue for calls to `.next` and `.return`. What this means is that if you're iterating over an async generator that is using something like buffered, and you decide that you're done with the async iterator, then you break out of the loop. This invokes `.return`. But the `.return` method doesn't actually run until the current unit of work that you're blocked on in the async generator finishes. So in this example, it needs to complete whatever fetch it's doing before it can call `.return`. This means that you might have hoped that you could just have an AbortController that would cancel the fetch in a finally block and that `.return` when invoked would enter the `finally` block. But it doesn't because of this shared queue. So you have this very longstanding and very annoying problem that you are not really able to exit out of an async generator when it is doing work. So I think the solution to this is to have a way to register behaviour to run on `.return`, behaviour that runs before the underlying `.return` is invoked. In this example, you could have an AbortController that is aborting any work that the async generator or whatever, `asyncIterator.map` or whatever, is doing. So I do think we need this pretty urgently. It comes up a lot as soon as you start doing anything with async iterators. But again, not going to be in v1.

KG: And then the second thing, this is a little bit orthogonal, but it comes up a lot. If you have a bunch of Promises and you want to do something with all of them, it's really nice to be able to do them to write a `for await` over the Promises. But right now, there's not an easy way to consume all of the Promises as they come in. You can `Promise.race`, but that just gives you the first one. And I have a utility on the slide that is what you would do if you wanted to be able to do `for await` over all of the Promises in the order they come in. This is actually a pretty common thing in other languages. Python has this. C#, Swift. They all have a way to say, I have a collection of futures or Promises or whatever, not an asynchronous collection, a synchronous collection of Promises. And I want to do an async iteration over the results as the results become available. I think this would be really useful, but it isn't necessarily entangled with any of the other things. But I can only champion so many things at once. Okay. That's the whole proposal. Pausing for a minute. Are we all happy with that? If I go forward, assuming we get resolutions to all of the open questions, everyone is excited to approve this and put this in the language. Yes?

CDA: CHU says yes.

CDA: ACE also says yes. In a distributed fashion. It's almost too clever. JHD says, not fully convinced of some of the follow-ups, this one seems great. MM and MF support this. And ACE.

KG: Yes. Unhandled rejections we’ll be getting to in a moment.

*Switching to [second set of slides](https://docs.google.com/presentation/d/1FfYbAJ2pElLQPqn32ZvgtuTQzEWU_79ZjKMs--k1CMY/)*

KG: Okay. Great. Thanks very much. That was my first of two presentations. So I hope you are not sick of my voice yet. Now let's get to the open questions. Always the more fun part. Many of these we talked about last time, and came to resolutions or partial resolutions on some of them. I've removed some of the things and also added a couple more. Also, I do want to remind people that I have a demo that is useful for checking out a bunch of these things. So that you can sort of visualize what's happening, which we’ll be doing a couple of times during this presentation.

KG: Design principles. I have slightly updated the slides since last time. So I'll go through it again. These are things that I'm intending to achieve. We want the result to be order preserving, which is to say it doesn't matter if you are doing things concurrently. You still get the same results in the same order unless the concurrency itself has races. If the things that you are doing concurrently have shared state or something, obviously we can't guarantee order. But assuming that everything is well-behaved, you should get the same results in the same order, no matter what order Promises are settling in. Also, the helper owns its underlying iterator. This mostly just means that it's responsible for invoking `.return()` at the appropriate time. In the case of flatMap, you can own multiple iterators. You have to close all of them. Also, we want to not lose values. I'll get to that a little more on the next slide. And since we do need to be able to reason about the underlying iterator somewhat, we have a constraint on the underlying iterator, which is that if you have a sequence that gives you a `done: true` and then later in that sequence, not necessarily in the sense of the order that Promises settle, but the order in which they were originally vended, if you get a `done: true` and then later in the sequence you get a `done: false`, that's considered incoherent. We have to have some behaviour, but we are not going to try to achieve any particular good behaviour in the sense of not losing values or anything. This only applies to specifically `done: true`. Errors are allowed to precede `done: false` and we're still going to ensure values are not lost in that case.

KG: So what do I mean by "don't lose values"? Just that if you are managing all of the calls to `.next` yourself, in that case you are guaranteed to see every value produced by the underlying iterator, either as an argument to one of the callbacks or as the result of one of the Promises. In the case of something like `.map`, values are guaranteed to get passed to the mapper function and then the result of the mapper function is guaranteed to be given back to you. Only if you are consuming the calls to `.next` yourself. Obviously if you're doing something like a `for of` over something with a buffer, things that were in that buffer, if you early exit from the loop, are just lost. Including any rejections, if you have a rejected Promise later in the buffer, that's dropped. It's not considered an unhandled Promise rejection in that case. The “don't lose values” principle only applies if you are managing all of the calls to dot next yourself. That said, we don't try to achieve this when the underlying iterator is incoherent. One of the main reasons that we need this incoherency definition is to allow us to not have to try to achieve this principle in that case. Mostly because it would make certain cases much slower than necessary. And I think basically we shouldn't care about this case. Okay. Before I move on, are we happy with these things? Oh, I see MM is on the queue.

MM: So first of all, I appreciate the definition of coherence and that it's a nice thing to define and expect all of the iterators produced by specified mechanisms to be coherent. What I don't understand is why we need to require the iterators fit into all of this mechanism to be coherent or to put another way, why our guarantees are somehow reduced if they're not coherent. What I would have thought the invariant was is that once an underlying iterator reports done we stop asking. And if we stop asking, as soon as it reports done once, then the fact that it might stop reporting done if we asked again is a non-issue.

KG: Yes. We talked about this last time. Hopefully, we can illustrate this with a demo. \[summons [demo](https://bakkot.github.io/async-iterator-helpers-implementation/#filter-exhaustion-3)] Okay. So here we're calling `.filter`. Hopefully, we all remember what the demo looks like, but just to recap, we have the underlying iterator that we're pulling from. There's some internal machinery, which is exposed to users, and there's results. So the dot is going to indicate next actions. So let's say we pull from the result. That returns a Promise. It, of course, immediately pulls from the underlying. Then we pull from the result again before the underlying has settled. So now we have two outstanding result Promises. That means we have two outstanding underlying Promises. Proceed a little bit. Let's say the second one happens to settle first. Settles and gets passed to the predicate function. The predicate settles with false. Because that means that value is not going to go into the result, we know that we need to do at least one more pull from the underlying iterator. We immediately do that pull. Okay. Let's say that—so now we have these two outstanding Promises from the underlying iterator. Let's say we then do another pull from the result, which of course triggers another pull from the underlying. So now we have three outstanding Promises from the underlying iterator. Let's say that this box on the third line, that Promise settles with `done: true`. Okay. In this case, what I would like to be able to do is settle these two results on the right-hand side with `done: true`, because we have seen a `done: true` and assuming coherence from the underlying iterator, that means that the underlying iterator contains at most one value that will pass the predicate. We've seen two earlier values. One of them has not passed the predicate. So I would like to say, in this case, there is at most one value that will pass the predicate. And let's say that that one then settles and the predicate settles and we get true. Okay. The problem is we still have this outstanding Promise from the underlying iterator. So what happens? Let's say that this settles with a value. Where does that value go?

MM: I would say that just drop the value.

KG: Okay. Great. I agree. That is the answer to your question, though. Because I had a design principle of don't lose values. But you just said, drop the value. My point is that I don't want to try to achieve that when the underlying iterator is incoherent.

MM: Okay. But that seems like something that you can specify as just what you do when the underlying iterator is incoherent. As opposed to the way you were phrasing it sounded like there was some kind of requirement on the underlying iterator being coherent or something weird would happen. And just dropping values after a done is not that weird. I think that's very easy to explain. So I don't know that introducing the concept of coherence for this purpose is really necessary. It's just the values that you pay attention to are only those up to the first done.

KG: Sure. You can. I broadly agree. Let's run through [this other case](https://bakkot.github.io/async-iterator-helpers-implementation/#filter-exhaustion-4) and see if that still makes sense to you. So it's basically the same as in the previous one, but now the last two values are going to settle in the opposite order. We get a non-`done: true` value, which passes its predicate. And then subsequently to that, we do want to give this to the predicate function as soon as we can. Subsequently to that, an earlier Promise in the chain settles with done true.

MM: So the price of this is that you've called the predicate with a value that you don't want to propagate. So even though the predicate says true, I would say as far as the result is concerned, D never happened.

KG: Okay. Yeah. I agree with that. Okay. There's [one similar example](https://bakkot.github.io/async-iterator-helpers-implementation/#map-exhaustion-2) for map. We could get a `done: true`, which we want to propagate to the result immediately. For filter, the value was just hanging out in the internal machinery. We couldn't do anything with the value until earlier things finished anyway. But for map, in principle, we could. So consider this case. Similarly to filter, we're doing three pulls. Third one settles. Goes into the mapper function. Mapper function settles. I would like to be able to put this value in the result right away. Problem is, what if the earlier pull then gives you `done: true`?

MM: If you put the value in the result right away, that means that you're producing an incoherent iterator. Are you saying you want to be allowed to produce an incoherent iterator if the underlying iterator is incoherent?

KG: Yes. I very much want that. Or I would put it a different way. What I want to be able to do is settle this Promise right away. And the cost of that is that if the underlying iterator is incoherent, the result is as well.

MM: I see. I see. Okay. I understand the motivation. How bad is the penalty if we say that the result iterator must be coherent even if the underlying is incoherent?

KG: Well, it's pretty bad…

MM: I see. Okay. Okay. I kind of get it. I mean, no, go ahead. Talk it out. How bad is it?

KG: So for map, it's maybe not a huge deal because if you're consuming the results of map in order, then you don't super care when this third Promise settles. But consider something like `some`. For `some`, if the third one settles with true, you really want to be able to resolve the whole chain with true. You don't want to have to wait for all of the earlier things to settle. Because you know that you got a result. It's very unfortunate if you have to wait for every earlier Promise in the chain to settle.

MM: Oh. Oh. Oh, that's very interesting. Ooh.

JRL: Okay. So I think the open question here is, essentially, what happens when we're incoherent? I have a couple of questions that I really want to answer about this. And one of this is about the first example you showed, but it's no longer presented. So we can just kind of skip it. But it really is the second one. It seems like if we have an incoherent source, then we have an incoherent output. And that seems like the source shouldn't have been incoherent in the first place. That's their fault and not ours.

KG: That's my opinion.

JRL: If we have a coherent source, so like a good source, does every async iterator guarantee a coherent output?

KG: Yes.

JRL: Okay. Then I'm completely satisfied with that. Just blame it on the input source and they shouldn't have done whatever they did.

MM: So depending on how bad these cases are, I'm certainly willing to agree to that. But I'm not satisfied yet that that's a forced position. Let's take the case of `some` again. The output of `some` in this case is true. It's not an incoherent output iterator. It's the reason why it's true is due to something that we would have wished to have ignored, but we output the true before we could know we could ignore it. But we're still not outputting incoherence. Map was the only case where we were outputting incoherence, and you already conceded that the cost is not high.

KG: The cost if you are just iterating over the result of `.map` without concurrency is not high. But consider the case that you do—let's say you `map` with a predicate function. And then you just do a `some` with the identity function. And let's say you do the `some` with a concurrency of 3. In that case, for the thing that is currently on the slide, if we are not allowed to do this, then `some` doesn't get to see this result because none of the Promises returned by `map` can settle.

MM: So first of all, let me verify. All the cases we were talking to up till now did not involve concurrency in the sense of buffered, correct?

KG: They all involve concurrency in the sense of you are doing three pulls from the result. If you never have multiple outstanding Promises from the underlying thing, this just doesn't come up.

MM: You're right. All the cases are concurrency. Okay. Work through this one again. The last example, where it was a composition of multiple things that created a problem, where the individual thing was a map and a some together is, if I recall. Whereas map and some considered individually, neither one of those force us to produce incoherence.

KG: Yes. So let's consider the case where you are doing a `.map` of a predicate function. And then you are doing a `.some` with the identity function. And concurrency of 3. Okay? Does that make sense? I wish I could write that out.

MM: That makes sense. I understand that. Good.

KG: Okay. In that case, if we are forcing `map`’s output to be coherent, then for this thing on the slide right here, we would not be allowed to settle this third Promise. Because we need to wait for the earlier ones to settle. So if this happens to be the value `true`, then what we would like is that `some` settles immediately with `true`. But it can't because it can't see any of these results until all of them are available, basically. If we are forcing coherency.

MM: Right. But okay. But still, we already granted we were looking at some individually. Oh, I see. Right. The problem isn't that we're producing something incoherent because some just produces a Boolean, which is necessarily not incoherent. The problem is that if map is constrained to only produce coherence, then we're delaying some… what some is producing is, in some sense, wrong, but it's not incoherent. And we're delaying some from producing something wrong early and forcing it to produce something correct later because the intermediate map was coherifying things.

KG: Well, the result is not necessarily even incorrect, but yes. We are.

MM: It's potentially incorrect, whereas…

KG: Potentially incorrect. That's right. Or, well, I honestly don't know. I honestly don't know if I would say that that result is incorrect.

MM: Okay. If we consider the semantic values of an iterator to only be those that are produced up till the first done, then anything that pays attention to subsequent values are paying attention to values that ideally don't exist.

MM: So if some is reporting true based on one of those values, then it's true is potentially incorrect. I mean, it's correct according to the spec, but it's incorrect according to the meaning of some.

RBR: For me? I believe another problem is it's non-deterministic in that case. On one run, it could be true and another case, it could be false.

RBR: And that's definitely an issue from my perspective. But isn't it about ordered versus unordered iteration kind of how we handle it? And we could give guarantees for ordered iteration. And that's always going to be correct as such because we have to wait. Versus if we say it's unordered, then we don't give this guarantee for this edge case.

KG: Well, so my preference is to say I don't think we should be forcing anyone to pay a cost. So my problem is not "what do we do in the case of incoherence". My problem is I want to be able to settle this Promise right away. And I don't want to have to pay a cost for this, just to be defensive against this edge case. What I want is—because almost everyone is going to be coherent, I want to be able to assume that they are going to be coherent and produce results under that assumption. And not delay things just in case they were incoherent. Because I think in practice, everything is going to be coherent. And it doesn't make sense to be delaying things just so that we can be coherent even if the underlying thing isn't.

RBR: So for which operations does this matter? That's `some`, that's `find`, that's anything that produces a single result kind of. Right? But even find does not yet… would also be impacted.

KG: It also comes up with `find`, yes. It's not just those. It's also pretty much anytime you compose things. So if you compose two `map`s and you pull three times from the result of the thing, the second map, you would like to be able to start doing the work for this value as soon as possible. But you can only do that if the first map is allowed to settle this Promise even while these first two Promises have not settled.

MM: Okay. Chained map is a very good example.

RBR: When we look at map, I'm not too sure about it because actually, when we look at just array map, and then you always have the right order. In which it is operated. And as a receiver, I would normally expect to receive the elements in the order of which we received it through a network or whatever it is, right? Even though in theory, it could be received differently. So.

KG: You'll get the same results in the same order. These are order-preserving.

RBR: Yeah, but you have a method normally that you call or something like that, right? You do something in between with that value. And you might have a state by yourself that expects it to be in that order or maybe I missed something there.

KG: Sorry. I haven't understood.

RBR: So when we receive the value as soon as it's there, to do something with it. Or wait. Let me take this through again. Sorry.

ACE: The map function itself isn't called ordered, but the resulting iterator will still be ordered. That's what Kevin's showing here. So the resulting iterator preserves the order. But the map, we don't because the map function doesn't rely on the previous one reduce does. We call map eagerly. So here, we're calling map on the third result because that was the third Promise that resolved. And then it's being put into that Promise is now resolved. So.

RBR: Yeah, exactly. But that's what I would say we should delay kind of until the former ones are there.

KG: No, no. The whole point of the concurrency model for async iterators if you want that, just don't call `.next` multiple times concurrently.

MM: Okay. KG, you've talked me into it. Reluctantly.

KG: Great.

JRL: Yeah. To reiterate what KG just said at the very end there. If you're using `for await of` or you're doing a normal iterator, then you don't have to worry about any of this. This is literally if you are hand-rolling an async iterator and you do it badly, and then the consumer of that async iterator then calls `.next` manually and they do it multiple times, synchronously. Then we have multiple pulls from that same badly written iterator. And in that case, you can write an incoherent iterator. But I think that's on you and you've made your code bad. If you are pulling from an actual iterator source or an actual async iterator from one of our proposals, you will always have a coherent output. We may optimize and call the mapping function or the some function, the predicate function, early on a case where some later value is early. But it's still going to be a coherent output. And whatever `.next` call that you did or `for await` that you did will be in the exact order that you expect.

KG: Well, you can get a race for `.some` in this case. The result that you get from `.some` will depend on the order in which things settle if you are feeding it one of these handwritten incoherent iterators. But you are totally correct. The only way to do this is to handwrite it. Nothing in the language and no use of these things will ever give you something incoherent.

JRL: But from a good source, we will have a consistent deterministic output. And from a good source, we will have optimized results. And if you're consuming even from an incoherent one in a with a `for await`, you'll still get the answer that you expect depending on which one… actually, sorry, I should rephrase that. If you're pulling from a good source with `for await`, you'll get the answer that you expect. And if you're pulling with `for await` from an incoherent source from something that you handwrote and did badly, then you might get a bad result. That seems fine to me. I don't want to hamper the overall performance of this proposal because someone might write bad code.

KG: Okay. Sounds like we're on board with this.

JHD: Okay. So first thing is I was under the impression that in sync iterators, if I do map and then filter, that it maps and filters each value as opposed to mapping each value and then filtering each value. Is that incorrect? Is that correct or not?

KG: You are correct. For sync iterators, you'll generally be doing map and then filter on a value and then map and then filter on the next value.

JHD: So I'm confused why we can't do that here. Why does some have to wait for all the maps to be done?

KG: So we can do that. That is what we do if you aren't doing things concurrently. If you are not doing things concurrently. If you just pull one value at a time, and then wait for that Promise to settle, which is how `.some` will work by default, then yeah, that's exactly what happens.

JHD: So it would short-circuit if the first one returned true.

KG: Yes.

JHD: For the `some` condition.

KG: Yes.

JHD: Okay.

KG: The thing that happens, though, is that you want to be able to do things concurrently when you're working with async functions. So you want to be able to pull two values. And in that case, because your mapper functions might be asynchronous, you might have two mapper functions running concurrently before the filter function has been invoked for either. That's kind of the point, is you want to be able to do that.

JHD: Right. So I hear that. But in the case of some, as soon as any of the pending values would result in a true, then you can… the point of some is to drop all the values and give you a Boolean. So why not do that immediately?

KG: We would. That's my intent.

JHD: Even with concurrency.

KG: Yes. Yes. That's very much how it should work. I agree. The problem is it can only do that if the values are available to it. And if we were not able to resolve this third Promise in that case, then it wouldn't be able to see any of the values. So we wouldn't be able to do that. Which is why I think it's important that we should and everyone seems to now be on board with that. So I want to get to my other questions.

RBR: Still related. So when we use some, and we receive something that is true, and therefore we settle immediately, do we still look at the former values at all, or do we stop immediately? Because theoretically, what I could also imagine is to have at least a kind of reporting mechanism for misbehaving iterators.

KG: Right. So I think the only thing we could reasonably do is fire an unhandled rejection event. And we could do that. I kind of don't want to.

RBR: Yeah. Exactly. Because unhandled rejections, the question is that even really necessary? I believe that would be quite harsh on developers because even the application itself could… yeah, I don't believe most applications would suffer from a misbehaving iterator, really. So I would rather have something else than an unhandled rejection because thinking in Node, for example, this tier is down your application.

KG: Yeah. There isn't any other channel, though. I don't want to add a new global channel that you can listen to. And there isn't any other one. Once the Promise from `.some` has settled, there's nowhere else to put something.

CDA: Nothing remains on the queue.

KG: Okay. Great. Well, I'm glad we resolved that question. Technically, I hadn't even gotten to its slide, but it was an important one to talk about. That was all theoretically a long-winded answer to MM’s question of why I have this notion of incoherence. And that is why I have this notion of incoherence. Okay.

KG: Let's get to open questions. Another open question. Last time, I talked about the fact that for `filter`, you want to be able to support an async predicate so you want to await the result of the predicate. But most of the time, your predicate function is going to be synchronously returning true or false. So it's kind of unfortunate to pay the cost of an await in that case. And we agreed that we should not pay the cost of an await in that case. That is, we agreed that for `map` and `filter`, if the result is not an object, we should not do an await. This doesn't unleash Zalgo because there's always at least one await in the system. It's just about whether you're doing two or one, basically. Another question is, I realized after that conversation that we could generalize this to non-thenable values. We're going to be looking up the `.then` property to do the await. And we could say, if we don't get a `.then` method, then we don't do the await. I think we should. I think that in general, it's nice to not pay extra in cases that we know we can determine that there's no reason to. This means that the precise number of ticks things will take is a little bit hard to predict. But who cares? There's actually already a bunch of places that diverge in the precise number of ticks things take when you're working with async iterators. And it doesn't matter at all to anyone ever. Yeah. We have a queue. Excellent.

CDA: RBR says, plus one for fast path for non-thenables. ACE says, plus one reducing unnecessary micro tasks is good. JRL says, support. MF says, support. WH says, plus one.

MM: I want to understand the Zalgo issue because I think I agree, but I want to make sure. First. In general, anytime the issue has come up of if it's a non-thenable, can we just do it synchronously? We've always answered no, on Zalgo grounds, and the reason and the distinction that you're making is that over here, we're always already protected by a turn boundary. So we're already in a new turn. Whereas in all of the cases where we rejected it, the issue was being in the same turn that has already done other things and for which there's already a call stack above us. In this case, it's a brand-new turn. There's no call stack above us. So there's and that's why there's none of the Zalgo concerns. Is that correct?

KG: All of that is true. I would phrase it a different way. The thing that is important to me here is that what happens afterwards is only the settling of a Promise. So it is just a question of, do we settle this Promise after waiting an additional tick, or do we settle it right away? But because it's only settling a Promise, that cannot synchronously cause anything else to run. So there is always going to be a pause after this. It's just a question of whether we delay before settling the Promise. I don't think there's ever an issue with settling a Promise sooner than we otherwise would have.

MM: But this is a thenable. You'll be invoking `then` on a thenable.

KG: Yes. I'll be invoking `then` on a thenable or not. What we are producing as a result of that is an iterator result, a Promise for an iterator result.

MM: I think I'm satisfied that there's no problem here. I am satisfied that there's no problem here.

CDA: LEK is on the queue with support. Sorry, JRL, were you going to say something more?

JRL: Yeah. I was just going to say we're not vulnerable to Zalgo, but if Mark's satisfied with KG’s answer, then perfect. I'm satisfied.

CDA: All right. MM is on the queue with support.

KG: Great. Okay. Let's keep going through this. We just talked about this question of what do we do with incoherence. And I think we all were happy with the answer that we just throw away anything that happens after a `done: true`. And if we can't, then we just have an incoherent result and we don't worry about it.

KG: Let's get to some of the trickier ones. So we just talked about `map`. For `map`, we are delivering values as fast as we can. This is super useful for a lot of things. We cannot deliver values that quickly for `filter`, because the order matters for `filter`. We can't know where to put this value until all of the earlier things have settled. So we can't do this eager delivery for `filter` no matter what.

KG: `flatMap` has a more complicated diagram because we have inner iterators. So let me talk through [this example](https://bakkot.github.io/async-iterator-helpers-implementation/#flatmap-delayed-delivery), actually. Let's say we are pulling from the result of flatMap. That will immediately pull from the underlying iterator. Let's say while we are still blocked on that pull, we pull from the result of flatMap again. So you have two outstanding things. This does not trigger another pull from the underlying iterator because each unit of the underlying iterator can give us potentially unboundedly many values in the result. So we just keep a counter internally that says we want two values from the underlying thing, we want two values in the result. Then the underlying thing settles. The thing that we do is invoke the mapper function. But again, just once, and we wait for it to settle. Eventually, it settles. It gives us an async iterator by hypothesis. This is flatMap, so it needs to give us an iterator or an async iterator. Let's say it gives us an async iterator. At that point, we ask for two values from that inner async iterator because we need two values for the result. Let's say the second Promise settles in the result. That value is guaranteed to go into this second slot, assuming coherence, and throughout the rest of this talk I'm going to be assuming coherence. This value is guaranteed to go in the second slot because we can't discard the first value. For flatMap, all of the results go into the output. So the question is, should this immediately settle this result? And it's an amount of bookkeeping to do this. But we totally could.

KG: There is another case that is slightly more complicated that I want to talk about before we answer that first one because it's even more bookkeeping and potentially you might want your answers to both of these questions to be the same. So let's talk about [the second more complicated case](https://bakkot.github.io/async-iterator-helpers-implementation/#flatmap-delayed-delivery-2). All right. As before, except this time, we're going to pull three times from the result while the underlying one is still waiting. All right, we get the first value from the underlying, we invoke the mapper. Mapper settles. We pull from that mapper three times. Now let us say that the third one settles with `done: true`. So the first mapper result has at most two values. We now know it might have one, it might have two, it might have zero, but it has at most two. In this case, we know we need another value. So we pull from the underlying again. Let's say it settles. It invokes the mapper. That mapper settles. We pull from that. Let's say that gives us a value. In this case, we can't yet deliver this b0 value, because it might be the case that we get an earlier `done: true` from the first underlying iterator. Does that make sense, why we can't deliver this value? Okay. But let's say that we get the second value from this first underlying iterator settled. Now, again, assuming coherence, we know that the first iterator is of length exactly two. We don't have all of the values from it. One of the Promises is still outstanding. But assuming coherence, we know that this thing is of length exactly two. In this case, we could deliver not just a1 as in the previous example, but also b0. So we could deliver both of those to the second and third result boxes while we're still waiting for the very first one to settle. So this is an even-more-bookkeeping version of the question from the one just a second ago. So the question is, should we?

KG: I did this in my implementation. It adds an amount of work. It's like 50 or 100 lines of JavaScript or something. I forget exactly. I think closer to 50 than 100. It's totally doable. But flatMap is already very complicated. This is making it even more complicated. On the other hand, in some sense, this is the best version of the function, and it seems a shame to put something in the standard library that''s not the best version of itself. What do we think?

WH: In answer to your question, I think that I like this. My question was slightly different, also regarding flatMap. Let's say that you have a flatMap, and you pull the first 10,000 results.

KG: OK. You pull many times.

WH: Yes, you pull 10,000 results. And they all wait for the underlying iterator to generate a nested map. It does. And now the question is, do you immediately pull 10,000 results out of the inner one? Because if the inner one actually has 10,000 things, that's fine. But if the inner one has a length of 1, then you end up turning a linear algorithm into a quadratic one.

KG: Yes. The answer is yes. You do. You do pull 10,000 times. I agree it has that problem.

WH: This is kind of annoying.

KG: Yeah. I think in practice, I expect the degree of concurrency to be small. So even with degree 10, yeah, it's quadratic. But if you end up with 55 or whatever it is. It's just not a big deal.

KG: You're right to call that out, though. Yes. This does make it quadratic. But quadratic in the degree of concurrency, which I think is in practice small.

CDA: RBR says plus one on having the optimization.

MM: So I'm trying to understand the downside is of the optimization. Given that there is a piece of code written by you that you've carefully thought through that everyone else can refer to. So just sort of by rote imitating more lines of code rather than fewer lines of code, I mean, obviously, there's a downside that you had to do the work, but you already did that. And then the other downside, the only other downside that I can see, is less confidence that you got it correct because it's more complicated. And that's kind of through the whole thing. I mean, this stuff is complicated. And in the age of AI and languages like Lean and such, and in the presence of groups like KAIST and the South Korea group that works with us, I would hope that we can formally model and verify enough to get over the lack of confidence caused by the complexity of these algorithms and if we anticipate doing that, I don't see any remaining downsides.

KG: The downside is just the bookkeeping, as you say. The bookkeeping and the confidence in getting it correct. But I'm pretty sure it's correct. I have spent a truly unreasonable amount of hours staring at this.

MM: Okay. So yeah. So I'm in favour of the optimization.

ACE: Just to check my understanding. The amount of bookkeeping, is this just effectively like one thing in an iterator of where in the resulting iterator it can start filling in from? So that's the amount of memory overhead?

KG: Yes. It's one integer per open inner iterator. Yeah, where you are keeping track of its length, basically, or whether you have established a maximum for its length. Maybe it's a maximum and a minimum. I think you need a minimum. I forget why. Maybe it's just the maximum. Anyway, yes. At most, 2 integers per open inner iterator.

ACE: Thank you.

CDA: All right. We still have 35 minutes.

JRL: So map is able to deliver eagerly, I think we should make the same optimization. And I'll save the rest. So I agree. Yes. Let's do the optimization.

KG: Okay.

KM: I don't know if I'm correct here, but maybe you can help me out. It seems like this optimization could be worse in some circumstances. As in, if you're drawing from the original iterator were somehow incredibly expensive, run an LLM request that costs $1,000, then eagerly doing pulling from the source iterator, the underlying iterator, might not be what the user is that accurate, or is there?

KG: You are thinking of a thing I was not considering to be an open question. I am pretty set on pulling from the iterator as many times as the degree of concurrency you've asked for. You should get the concurrency. The optimization that we're discussing is only about how eagerly we can settle Promises in the result. That's all it is.

KM: I see. Yeah. I misunderstood. Okay. Yeah. I think that's fair.

CDA: MF says: "we are in the unfortunate position of absorbing this kind of complexity so that all of our users don't have to. The extra bookkeeping isn't an extraordinary burden or overhead that likely wouldn't pay for itself, so let's do it."

JRL: I'm sorry. I might have a similar topic to what KM just brought up. How does this interact with a concurrency limit? If I pull 50 times, and that's 50 open things, and we open iterator, and that iterator pulls 50 times, I'm assuming that inner iterator is the thing consuming my concurrency limit, correct?

KG: There is no concurrency limit on these.

JRL: Sorry. I know that's a different proposal I guess. Okay. So it's not part of this. And so we shouldn't talk about it.

KG: It won't even be in the other proposal. `map`, `filter`, and `flatMap` don't have a concurrency limit built in. Even with the other proposal, the concurrency that you get is you asked four or five things. So that is the concurrency that you get. You get degree five concurrency.

JRL: Okay. And then so it's still me. In WH's case that he was describing where we have an n-squared behaviour, essentially, I pulled 50 times, and then the iterator resolves done true, and then all this other stuff. Assuming a proper iterator, I can assume the remaining three Promises here in A1 are going to resolve to done rather quickly. So it shouldn't remain open Promises forever, right?

KG: Yes. That will be the case for pretty much everything unless you specifically go out of your way to make it not the case. Also, we're just going to ignore those values even if they do settle. So it's not like they'll affect any other part of the system.

JRL: Yeah. I don't want to treat these as incoherent or anything. Just assume it's a good operating iterator. I think what will happen is we'll allocate a bunch of Promises, and all those Promises will just resolve to done and then we'll garbage collect those at some point in the future. But eventually, we'll get the 50 things that I actually want out of this flatMap.

KG: Yes. But at the cost of having done 50 times 49 over two calls, I'm not going to do that in my head. 1200 whatever. Yeah. You've done a bunch of function calls. You've done a quadratic in the degree of concurrency number of function calls. For something that didn't need to be quadratic. But yeah, probably they're all quite cheap. So assuming your degree of concurrency is not very large, the actual overhead is in practice going to be small.

WH: Could you go back to the [three-element example](https://bakkot.github.io/async-iterator-helpers-implementation/#flatmap-delayed-delivery-2) of A and B? Here you would deliver a1 into the second slot and b0 into the third slot. What happens if the unresolved first A slot then returns done=true?

KG: Great question. My answer—I guess I should have actually talked about this more. My answer is that we get `done: true` in the first slot. So we just get incoherence in the result. I think we could reasonably put an error there. But I'm choosing not to, basically for the reason that I don't want people to rely on getting errors in the case of incoherence. Because the fact that you got that error is just, you got lucky with the timing.

WH: Okay. Yeah, that's perfectly reasonable.

KG: Okay. We're making excellent progress. This is why we had a very long time box. So it sounds like we want to do this optimization. Okay.

KG: So I brought up this next open question on the slide in the previous presentation. Should we reserve an additional parameter for things like `forEach` and `some`? And by reserve, I mean throw if someone passes a second argument to them, because we think we might want to use that for something else. Michael had a weak preference for yes. I have conflicted feelings about this. So I'm willing to just go along with MF’s opinion if no one else has an opinion. My expectation is that this won't affect anyone before concurrency control ships because you shouldn't be passing a second argument to any of these anyway. Yeah. Does anyone have an opinion about whether we should defensively reserve this second argument?

JHD: So I'm going to start with the question. You'd mentioned that if we do not reserve the argument, that new code will simply just run quietly on older engines without concurrency, right?

KG: Correct.

JHD: Is concurrency the type of feature where it is necessary or is it one where it's fine if you don't get the concurrency you asked for?

KG: Great question. Depends on the program. You will get the same answer, assuming everything is well-behaved. You'll get the same answer. It's just a matter of, how quickly do you get the answer. So if you were asking for degree four concurrency, and you get no concurrency, your answer is potentially four times slower. But you still get the answer.

JHD: But given that your answer is “depends on the program”, I assume there may be some programs where failing to include the concurrency would be particularly bad, maybe it might get you rate limited on an API or would crash the program or fill the disk or something. So assuming…

KG: Those things are very unlikely. It is generally just going to be that your program is slower. The consequence, except in very unusual circumstances, is only going to be that your program is slower.

JHD: Okay. So I guess that's what I'd say is if there are non-zero programs, where running without the requested concurrency is harmful, then we should throw now. But if, in fact, it's not harmful because I would argue that correct-but-slower on older engines is not a harm, then I think we shouldn't throw now. But I mean, I don't have enough confidence as to whether it's non-zero programs where it would be harmful. But if you're saying that it's never harmful, then I think we shouldn't throw.

KG: It is certainly possible to construct a case where you will get bad behaviour. Not merely slow programs. I think you kind of have to go out of your way to contrive those cases. But it is possible to contrive a case where you get bad behaviour.

JHD: Okay. I mean, there's a judgment call, I guess, between how likely we think it is versus how contrived we think that would be. Because I would rather… I would not want to have a world where it silently runs without concurrency and causes harm. That's all.

ACE: I'm pro not throwing; I also think that concurrency is best-effort at some layer of the tech stack, right? Even if I try and call a million-fetch requests at some layer, either the browser or the network, at some layer, I'm going to be put in a queue. At some point. So I think programs relying on concurrency are kind of asking for problems in general. So I think I agree with what KG is saying.

MF: On the topic of this potentially causing issues if you request concurrency and don't get it. Wouldn't users be able to get themselves in situations where they have a deadlock? They expect an operation to have a certain level of concurrency and they acquire some limited resource. And then there's no other process that is available to also get—

KG: It's possible. Yes. I think given how these helpers are, you kind of have to specifically contrive for that to happen. I don't think that will happen in practice.

MF: Yeah. But ACE was saying that concurrency is a best-effort. And I don't think that it's quite that weak. I think it is stronger in that if we have a task it will be gotten to. We're not allowed to have those tasks forever… I think you know what I'm saying.

MM: I understand the deadlock case. I certainly understand the slowdown case. But there are a bunch of things said before deadlock came up that I didn't catch, at least. That this no-throw behaviour has potentially bad consequences other than slowdown or deadlock? What are those?

KG: It’s just if you are designing your program in such a way that it requires this function to be called concurrently with itself. There's a variety of ways that you could construct that if you specifically wanted that to happen.

MM: Okay. So let's say that that was the case and you have a program that you constructed that way. Obviously, that program can only run correctly on a machine that's up to date with the spec. And if you run it on an earlier machine, then you run it on a machine in which that program cannot run correctly. And the trade-off you're making or the trade-off we're talking about I just want to make sure I understand. The trade-off we're talking about is do you get a clear error signal that your program is not able to run correctly so it's a nice fail stop. You have a diagnostic so you didn't expect it to run correctly. Or do you allow it to run incorrectly? That's the trade-off we're talking about.

KG: Yes. Well, that is one half of the trade-off. The other half is, all of the programs that don't have this requirement will still run correctly.

MM: Okay. Okay. Good. So in general, I am on the side of stoppage with diagnostic is better than running incorrectly. I don't find that compelling in this case. In this case, I think not throwing and running with the sequential slowdown is what I would prefer.

CDA: MF is plus one to MM's comments.

KG: MF, you've changed your mind?

MF: Yeah. I think that the arguments here are just not compelling enough for us to diverge from our typical approach.

JHD: This is not relevant until the concurrency control proposal. But it seems also useful to make sure there's a way to feature detect the existence of the concurrency feature. So that if you do have one of those programs, you can just use that check to make sure it will not run incorrectly. Yeah.

KG: It might be the case that you can only detect that asynchronously.

MM: Wait, can't you just feature detect on `buffered`?

JHD: Well, I don't know what the exact shape would look like. I'm just saying please prepare for me to ask for a synchronous way to detect it in that proposal.

ACE: I initially also worried this would be like an async feature detection. But it feels like if you have a getter on the `then` I feel like there would be something it wouldn't be like it'd probably be more lines of code than you'd normally do for a feature detection. But maybe like 10 lines of code.

KG: Yeah. You're totally right. Getters on `.then` would synchronously detect it.

RBR: Async throwing is not a good idea. However, what I am worried about is developers are often writing code without knowing the consequences in their test sets. They often have very minor sets and they would expect this is totally fine to run. And then they have in production, something where they are starting now a million things at the same time. And causing a big problem on the machine. So what about having a safe default concurrency level which is not ideal for everyone obviously. It's a default. Of, let's say, I don't know, just random number, 100. It's probably too high for somehow ever too low for others. And then the user could overwrite that value as soon as we have the other proposal for defining the concurrency level. Where you could go higher or lower. Because that way, at least in average, I believe we would have bound the problem. And not overwhelmed the machine automatically with a huge concurrency.

KG: I feel strongly that the only acceptable default concurrency is one.

RBR: Acceptable!

KG: Yeah. I don't think we should be providing a default concurrency for any of these. You should only get concurrency if you specifically ask for it.

MM: Yeah. I'm suddenly confused about the whole question. Given that there's a first proposal that's all of async iteration, all of these helpers, but without concurrency, without concurrency, has no buffered. And makes use of no second parameter on for each. Then there's…

KG: It does have `buffered`. That’s in the proposal.

MM: What does `buffered` mean before concurrency?

KG: Concurrency is in the proposal.

KG: The thing that is in the proposal is the support for concurrency in map, filter, and flatMap. If you actively drive them concurrently, then they go out of their way to allow you to do so. And `buffered` exists so that you can actively drive those and any other existing async iterators concurrently.

MM: I'm sorry. So the question that we're examining is only an issue if the version that introduces `buffered`, i.e. the version that's currently in front of us, does not make use of the second parameter.

KG: Correct.

MM: What if rather than reserving the second parameter for `forEach`, we just go ahead and make use of it in the way that…

KG: MM, I've been doing this for like three years. I don't want to make the proposal bigger. I'm sorry.

MM: Well, but I mean, okay. Okay. So that's fine. I probably agree to that. But let me just make sure I understand. The reason why this reservation is an issue is because we're not proposing it all at once.

KG: Correct.

MM: Okay. Okay. Okay. I'm still in favour of not throwing and just letting this slow down happen as the way to cope with the version issue. But this explains to me why the feature test does not testing for the existence of buffered. Okay. Good. Thank you.

ACE: Technically, even though we split these up, I guess it's still very much in our control how big a window there is between when these things are actually out on the web in a way that people think it's stable enough they can depend on it. I don't know, KG, if that matches or is this follow-on thing actually like years of work? To me, it feels like maybe…

KG: The follow-on is significantly non-trivial. It's not just about passing a number for these, or at least, we could have a version that only allows passing a number for these, but the thing that MF has been working on is about having more control. And that being able to define things that have concurrency that depends on other parts of the system. And actively varies and stuff. So I think the follow-on is actually pretty large if it's not just the basics.

ACE: Yeah. Actually, if anything, it being a big period of time, if anything, I think helps people understand that there was a version of this that had some set of features. And then there's a new version of it that has more and will maybe be more aware of being cautious of the not relying on it. So I think everything's fine. I think this is already good.

KG: Okay. Two hours is not a big enough time box. All right. No, this is great. We've been resolving questions left and right. I am going to try to get through the remaining ones. Okay. I'm going to skip this one because I think the others are somewhat smaller and/or basically already resolved. And I can take my last 10 minutes for this one depending on how those go. Okay. So last time I presented as an open question, how do we interpret `return` on the result? In particular, the question is, do we consider that to mean only that the consumer is not expecting to call `next` again? Or also, that they don't care about pulls that have already been made? This comes up in the context of `filter`. So let's just switch to [this example](https://bakkot.github.io/async-iterator-helpers-implementation/#filter-closing-2).

KG: Okay. So filter. Let's say we pull a couple of times from `filter`'s result. And then while that's still happening, either the predicate or the underlying iterator or both are still unsettled, the consumer calls `.return` on the result of `filter`. At this point, we're done. We have closed the result iterator. And of course, we also call `.return` on the underlying iterator. The question is, if the second result settles with false, we now only have one value from the underlying iterator that we could possibly vend, or that we have vended. And we had two outstanding Promises. So we could attempt to go to great lengths to fulfill this earlier Promise by pulling from the underlying iterator again, even though we've already closed the result iterator. I originally had this as an open question. I now feel pretty strongly that we should not pull from the underlying iterator again in this case. We should just say, you said you were done. I'm not going to go to great lengths to try to fulfill things that you asked for earlier because you said you were done. And in particular, the reason I think this is that the place I expect this to come up is if you are buffering the result of `filter`, for example you're doing a `for await` over a buffered filter. In this case, if you early-exit from the loop, you really do not care about the things that are being produced to fill in the buffer. So we should not be doing additional work to try to fill in the buffer. So because of this example in particular, I really think that we should sort of optimize for this case and say, once you call `.return`, you should not expect earlier values to fulfill, even if they in principle could have. Yeah.

KG: Oh, RGN, do you want to just go ahead and ask—“so the Promise never settles?”. No, it settles with `done: true`. It only settles with `done: true` once the predicate actually settles, though. Because if the predicate had settled with true, then in order to maintain our principle of not losing values, we would need to not lose this value, and the only place to put it is this Promise. So the second Promise doesn't settle until the predicate settles. But it will either fulfill with the value from this slot if the predicate passes it, or it will fulfill with `done: true` if it doesn't. The thing that we don't do is go back to the underlying iterator and try to find a new value that could pass the predicate. Okay. RGN says “plus one, end of message” on the queue. Great. Sounds like we agreed on that. WH is getting on the queue, also “+1”. Excellent. Okay.

KG: Another thing that I had presented as open last time is how do we handle `.return` on flatMap? So for flatMap, we can potentially have two open iterators at a time. The underlying iterator is open and this inner iterator is open. At that time, if `.return` is called, we have to close both of them. The question is, in what order and concurrently or not? I am now convinced—last time we said that the order should be inner first, underlying second. We left it open whether we should wait for the inner return to settle before calling the underlying. I am now convinced that we should wait for the first one to settle before calling the second one. The reason for this is maintaining the principle, which I guess I ought to have written down as a principle, that **you only get concurrency if you explicitly ask for it**. So in this case, in this most basic case, you have not asked for concurrency at all. Except insofar as you called `.return` while blocked on a `.next`. But I think because you haven't asked for concurrency, you shouldn't get concurrency, which means we should wait for the inner return before calling the underlying return. I have this as no longer open because I'm happy with this answer. But people can fight me about it if they want. No one's getting on the queue, so I assume we all agree. Okay, great.

KG: I had one more open question that we are probably not going to get to. I am going to try to explain it in the remaining time. So that if people have opinions, you can put them on a GitHub issue or on Matrix or something. Okay. The question is, if you have `AsyncIterator.from` and you pass it an iterator, so an object that has a `next` method, there is nothing which tells you whether this iterator is synchronous or not. You could look at the prototype and see if it has `Iterator.prototype` in its chain somewhere. I think that's a little weird. So the question is, in this case, you're just handed an iterator and you call `.next`. Should we await the result of `.next`? There's two things that you could in principle await. You could await the result of `.next` or you could look up the `.value` property and await that. If you knew it to be synchronous, you would eagerly look up the value of the `.value` property and await that. Because that is how—in general, how `for await` over a sync iterator works is you assume that the `next` doesn't give you a Promise, but you might have a Promise in the `.value`.

KG: Or you could await the result from `next`. And in that case, you assume that you're working with an async iterator and async iterators are not supposed to have Promises in the `.next`. So you shouldn't await it. The question is, what do we do? Given the answer to the earlier question where we said we want to fast path non-thenables, my inclination is to say that we check to see if the result of the `next` call is a thenable. If the result is a thenable, we assume that we're working with an async iterator. If the result is not a thenable, we assume we're working with a synchronous iterator. I wasn't sure about this earlier because I wasn't sure how receptive the committee would be to the check-if-we're-thenable thing. But since we're doing that, that's what I would do here, that is, branch on thenable-ness of the `next` result. For things that are sync iterators, this costs an extra property lookup. But I don't really care. I guess we could, in theory, only do it for the very first value and then stash that. Say because you gave us something that wasn't a Promise, we are assuming nothing else is going to be a Promise. I'll have to think about that a little bit more.

KG: Anyway, that’s the last major open question. There's some minor things about timing. Thank you for bearing with me. I'm glad our time box was almost big enough. Happy to take opinions on any of these things, but your time to have opinions is running out because I'm going to come back with a full proposal. And I will ping the reviewers when I have spec text written.

CDA: MF is on the queue with support. Yeah.

KG: I don't know exactly what you're supporting, MF, but message me on matrix.

CDA: He just wants to be supportive of you, okay? Jeez. All right. Thank you, KG.

KG: Thanks for your time.

### Speaker's Summary of Key Points

* The “Async Iterators” proposal is relatively complete, most outstanding questions have been resolved.
* It will not contain all the methods on `Iterator.prototype`, but they will likely be in followup proposals

### Conclusion

* JHD and RBR to review
* Incoherent underlying iterators: we will not try to be defensive, and no extra errors or warnings
* We will have a fast-path for non-thenable objects, not just primitives
* flatMap will deliver all results ASAP, accepting the cost of internal bookkeeping
* We will not reserve addition parameters in methods like `.some()`
* `.return()` indicates we should not make additional effort to fulfill outstanding prior calls to `.next()`
* For flatMap, `.return()` will be called sequentially, not concurrently, on the underlying iterators.

## It's about the agenda deadline

Presenter: Chris de Almeida (CDA)

* [slides](https://docs.google.com/presentation/d/1uA690pDEj3NplfGnACwKAhek3bcECChVcQELcu_nF_Q/edit)

CDA: All right. Let's talk about the agenda deadline. I was not going to introduce it this way, but it would be really cool if we could breeze through this really quickly so that we could get to some of the continuation topics, if possible, because we're already in overflow. So hopefully, we can just make it happen. All right. So the agenda deadline today is 10 days before the start of plenary. And it's subject to wherever the local time is. So we have to calculate 10 days before from 10:00 AM, whatever Tokyo time or whatever. So yeah, meeting starts Tuesday at 10:00 AM. Deadline's 10 days earlier at 10:00 AM local time. Delegates outside of Japan must convert that to their own time zone. So this produces different deadlines depending on where we meet. Which it creates unnecessary cognitive load. Not going to read all the words on my slide. You can see them. And there's not really any benefit to doing it this way.

CDA: The point is to have a period of review time for delegations to review the agenda. Meetings either begin on Monday or Tuesday depending on if we're doing virtual only or hybrid. And so under the rule, when it starts on a Monday, the deadline's on Friday. If it starts on a Tuesday, the deadline's on Saturday. Saturday is not great. Friday is also not great. So I am proposing that we change from a host local time deadline with anywhere on Earth deadline so it's the same deadline globally. We don't depend on the meeting location. We don't have to worry about time zone conversion. And this is familiar convention that many folks are probably aware of for standards work in general. And so the agenda can simply show the date plus anywhere on Earth. So I'm also proposing we're not using exactly 10 days. So this is not just 10 days before plenary anywhere on Earth time zone because that doesn't really solve what I'm trying to solve for. Because it would still require accounting backwards from the meeting. You have a different deadline for Monday versus Tuesday. And you have potential Saturday deadlines.

CDA: So my proposal is that the agenda deadline should be 23:59 anywhere on Earth on the second Thursday before plenary. This gives us one simple predictable rule—it doesn't matter if plenary starts on a Monday or Tuesday or wherever it is in the world, it's always the second Thursday before that week. So you have the resulting lead time of if it's a Monday meeting, you have approximately 11 days. If you have a Tuesday meeting, it's approximately 12 days. And it's very close to the 10-day window that we currently have. So why Thursday? So Thursday is the best balance between avoiding the weekend, as I mentioned before, it's approximately the same amount of prep time or review time as the current 10-day window. It gives delegates a predictable weekday. You have a full working week before plenary. And that small increase from 10 days to 11 or 12 days I would suggest is negligible. And the rule becomes easier to understand and easier to remember. Just a reminder, this does not shorten the time between plenary meetings. It's the exact same amount of calendar time between meetings and between deadlines. The only thing that changes is where the deadline falls within that existing window.

CDA: So this is primarily an ergonomics and predictability improvement. It's not a substantive change to the agenda process. So before, we have meeting location, local time, subtract 10 days, convert time zone. My proposal is you have a meeting date second Thursday before anywhere on Earth. One predictable deadline regardless of where we are meeting. Currently, agenda items must be submitted at least 10 days before the start of plenary. My proposal is that agenda items must be submitted by 23:59 anywhere on Earth on the second Thursday before plenary. Discuss.

SFC: I support this, but I would rather have it be second Friday because we have our TG2 calls on Thursdays. And while this anywhere on Earth on Thursday does allow us to technically get things submitted onto the agenda, it would be really nice to have that extra day. If you're in Japan, this is basically means that's a deadline is on Friday afternoon. In Europe, it's like Friday midday. So I would so this I would rather just have the-- basically at the end of the week, end of the work week, have your agenda item submitted anywhere on Earth rather than on Thursday if you're in the Americas or on Friday if you're in Asia or on Friday morning if you're in Europe. I'd rather it just be end of week for everyone, which means Friday. 23:59. I would prefer it. Thank you.

CDA: But that's not accurate. And that's the entire point of doing Thursday is to meet that goal because if you change it to Friday, now you've pushed the deadline into the weekend for some parts of the world.

SFC: Which is still after the end of the work week. Which is fine.

CDA: I'm suggesting that it's not fine. I'm suggesting I deliberately do not want the deadline to fall on a weekend for anybody.

SFC: Currently, the earliest the deadline is practically is when there is a Tokyo meeting, that puts the deadline at approximately end of the day at workday on Friday. I'm not comfortable moving it earlier than it currently is.

KM: I guess independent of any choice that we make here, should we put the deadline as a calendar event in the decision calendar? I don't know if it is already. I don't think so. But just to have I mean, it would be you just place it as an event and then people can see it.

CDA: I think that's a good idea regardless of whether we do this change or not. Yeah.

JHD: That's totally something we can do. There's already a diagram on the agenda. So it's visible, but there's nothing wrong with making it visible in another place.

MF: So the reason why we have an agenda deadline is because before we had an agenda deadline, people would put things on the agenda right before the meeting. And a lot of people would complain that we were talking about a subject that they didn't have sufficient time to review or talk about with their colleagues and form an opinion. So a typical work week is Monday through Friday for most of us, I think. Putting it any time before Monday only serves to reduce the amount of days that we have to work on the proposal without benefiting us with the number of days we have to review the proposal. So I don't see why we would aim for the end of Friday generally across the globe rather than aiming for before Monday in the first location that would experience it. Additionally, on this topic, not all of us get to work on this stuff during our work time. Some of us only have time during our free time. And that's how we enjoy spending our free time. And this would, again, take away our ability to do that.

CDA: So there is a small, as I suggested earlier, negligible in my view, shift in that. But the gain is that you technically were exchanging a little bit of prep time for a little bit of review time. So it's not like a net loss entirely.

KM: I guess it's kind of a question, but maybe it should have actually been a topic. Sorry. But I mean, are there delegates that use the weekends with emphasis on S to do review for the meeting, right? If you're coming on your own time, then you might want more than just one weekend in advance to review if you can't do it during the weekdays. So I could imagine that moving it into the weekend, then takes away theoretically from their ability to review, have the four days of review because you get two weekends before. Yeah. I mean, I don't know about that, but I'm just asking if anybody else has.

JHD: So I don't actually understand what's the problem with a weekend deadline. I assume that most of the people that must review and must and need the time for it are the ones that are doing it as part of their job, which means they're not going to review until Monday anyway. And if the deadline-- if you don't want to submit on the weekend, you don't have to wait till the deadline to submit. You can submit on Friday or Thursday or Monday. You can submit whenever you want. I like the anywhere on Earth part. I'm not I think that's that makes sense to me. But I do not understand at all what the problem is with a weekend deadline. Who does that hurt?

CDA: It doesn't hurt anyone.

JHD: But I mean, you said you do not want that. So presumably, there's a reason for that. What is it?

CDA: I just think people shouldn't have deadlines on weekends or working into the weekends. If the committee wants to say it's Friday anywhere on Earth, now it's Saturday. Yeah. I think Thursday is better. Because that avoids the weekend entirely.

JHD: Right. But that sounds like a value judgment that people shouldn't be working on the weekends. And that's not anyone's place to make. There's nothing wrong with working on the weekends if you want to. So why is it important that it not be on a weekend? You can simply choose not to work on the weekend.

CDA: Okay. Fair enough.

KM: I think I mean, I guess my question hopefully should indicate possibly why someone would feel that. In advance are important, right? If you're contributing your if you're spending if you're contributing your own personal time for this committee, you may not have those you want those weekends to review the changes. So this extra the five-week days prior to the meeting are effectively meaningless time because they're lost. That certainly could be a reason. But that wasn't Chris's motivations. That's what I was asking about. And separately, I haven't heard anyone yet or seen anyone yet jump on the queue to indicate that that's important to them.

OMT: I am on the queue.

JHD: Oh, cool. Well, then I'll comment before I head to you then. But I'll say is that I have at many times not been able to use work time for TC39 things. And if I don't have time to review, I just don't review it in advance. The requests for review time have always in my recollection come from the browser companies who need to review it as a team, and figure it out with OKRs and stuff. I can review everything on the plane to plenary typically, because I don't need to get formal permission from anyone for my position. So I just don't know if weekend review time is actually important.

OMT: So I think it's a great idea to put it on Thursday. I think it's the right incentives. If anything like the earlier deadline, the better. I think the discussions are more informed. If people are prepared, so we should always if in doubt, we should fall to the side of giving more review time in my opinion. Also, I don't think it's a value judgment. It's basically just saying for example, it's giving people the option of using that deadline as a justification to make room in their calendar to do it during the week and not push it to the weekend. And so that is a nice tool that we can provide to people. It doesn't cost us anything. Almost nothing. I really don't understand the discussion. It seems like the most natural idea to do here. So I strongly support Thursday. I also support the proposal. Overall, yeah.

SFC: Yeah. So the Friday deadline would still allow for weekend review. I think that largely addresses that concern. At least for me, my Mondays through Thursdays are very busy with non-TC39 stuff. And I often don't have time after we have our TG2 meetings on Thursdays to actually go and make sure that pull requests have been open to the agenda doc and so forth. And I don't really like how anywhere on Earth sounds great, but the actual impact of it is that anywhere on Earth is UTC minus 12. So the actual impact of this is that you're saying that Americans need to get them turned in on Thursday, but Japanese turn them in on Friday. And so do Europeans. This is I don't think this is a very equitable choice, I think, that choosing a deadline that's after the work week is more equitable.

ACE: Also, plus one for prioritizing review time over prep time. You have infinite prep time because you just don't put your thing on the agenda until you're ready. I could right now be preparing my slides for 9 plenaries time. My 2028 proposals. However, the people reviewing as soon as you add the thing and we've got a plenary and you're asking a stage advance then the clock is ticking. So in that game, you have to give the advantage to the reviewer because they're on the back foot.

CDA: Sorry, just real quick response to SFC. I hear your point, but I actually think the point that you're making is actually more support for why the status quo is worse.

RPR: So on the queue, we have lots of voices of support from OMT, CM, RKG, Peter, me, `JMN`, and `LVU`. We'll then go to SHN next.

SHN: Thank you. Irrelevant of whether you choose a weekday or Saturday or weekend. We do have a rule in ECMA that is three weeks. And we have discussed this actually in the plenary in I think it was in May when they was at Igalia. And we had a lot of discussion on it. And I do recall some of the individuals said that they need more time to review as a team. I think Mozilla was one of the ones that made some of the comments. So I understand that it's a very tight schedule. Everybody's very busy in this travel. And you want to give enough time. But if you can consider whatever day you choose to try to make it that three week to give that amount of time to really be well-prepared would be highly recommended.

CDA: Yeah. But it's an excellent point. And I had originally planned to have more slides if I could get traction on this, to move the deadline actually earlier. But we're not going to be talking about that today.

SFC: I posted this before people were saying that weekend review time is important. But if weekend review time is less valuable than syncing the deadline to the beginning of week on the following week seems also like a good option.

CM: Yeah. I think either SFC or I and maybe some others are confused about what anywhere on Earth means. My interpretation was if it's midnight on Thursday, it's just midnight on Thursday. And no time zone convergence involved. And yet Shane was saying something about 8:00 AM on Sydney or something.

CDA: Yeah. So the point, yes. So technically, yes, it is. There is a point in time. And yes, that time is different depending on where you are in the world. But the point of using it is to just say it doesn't matter where you are. The deadline is Thursday, end of day.

CM: Right. So you just go according to Thursday, the end of day, where the hell you are. And you just it's local time. For you.

CDA: Yeah.

MM: I thought it was you can if it's before the deadline, anywhere on Earth, it doesn't matter where you are. You just pretend that you're in the most favourable time zone. And that's the deadline.

?: If you yeah, yeah. If you want to if you want to use a VPN so that the timestamp on your GitHub post or whatever.

MM: Right. But I thought that's I thought that's what anywhere on Earth means is that you don't need to use a VPN. You don't have to pretend you're in you just use the you just everybody use the most favourable time zone.

CDA: Yeah. I think my understanding was: we don't think about time zones.

MM: Yes.

CDA: Yeah. Okay.

SFC: Anywhere on Earth has a definition. The definition is UTC minus 12. So when we say 23:59 anywhere on Earth, it's the equivalence of saying 11:59 AM in the GMT. That is the exact equivalence statement.

MM: Okay. Thank you. That's what I was hoping. And that's different than what CM was saying.

CDA: No, I don't think you're confused. I think you have the right mental model. The point is to not have to think about where exactly—it's just Thursday. Your deadline's Thursday. You're good to go. Just make sure your stuff is on the agenda by Thursday.

JMN: Without knowing the definition of AoE, I can tell you that my experience with that in academic world was I'll get to it tomorrow. Something like I take the most generous interpretation of what the date time zone is, and I say, well, if it's Friday, AoE, then it means any time on Saturday that I do it is fine. In my local time. However, Sunday is definitely past the deadline. Right. But it sounds like this may be in conflict with the other people's understanding of AoE.

SFC: I thought MF was before me. But yeah, JMN is right. And that's my but he's making my point. We're like the thing about I'll get to it tomorrow only works in some parts of the world, but not the rest. That's why I think weekend deadline is safer. Or end of work week, rather. Not weekend deadline, but end of work week.

RPR: MF says plus one to JMN.

ACE: I feel like the only way people can misinterpret this is that they will give themselves accidentally less hours than they technically had, which is not going to make a big it's like if they go, oh, 23:59 in my time zone, they're just reducing those number of hours, which is obviously going to be less than 24. And maybe less even worst-case scenario, the person adding the item has lost some hours because they misinterpreted it. You can't misinterpret this in a way unless you really, really not reading the sentence. You can't misinterpret it in a way that other people are going to suffer and you're going to post after deadline.

RPR: Google says “Anywhere on Earth” is a calendar designation, meaning a deadline expires only after the date has completely passed across the entire globe. Isn't it equivalent? Okay. Ruben.

RBR: I personally feel we are overcomplicating this a little bit.

(various people): Yes. We are.

RBR: And the question from me is just like, what are we optimized for? It's just either we want to have people to put things early on the agenda. That's one target. Another is like. And that's probably like to have people giving more review time. Or like to have people do it until the very last minute. I believe the proposal is probably about making people put things on their gender TED earlier. It's my and I believe that's actually positive because it is like incentivizing ourselves to do things earlier and I am part of that. So yeah, I think it doesn't really matter all that much if it's like one day earlier or later and all these details. Just if someone feels like they need more review time, we should probably focus on that. Ollie. Ollie says.

It was just asked this meeting shows the optimization target should be to have fewer items on the agenda.

ACE: I think we're massively as usual, yeah, over we're over and we do not police this in any strict people have been adding slides during the last week. Definition of being on the agenda and actually having the material. And it's very if the thing is really complicated and you add it late, that's worse than if it's a trivial thing and you add it late. And I think it's all is this like it's really much guidelines. We don't send each other to jail for this. It's silly how we hold ourselves to we pretend we work in a way that we clearly don't. It makes me laugh.

JHD: I actually disagree. The deadline is only for advancement items. Non-advancement items, you can add slides two seconds before you talk if you want, even though you're requested to add slides. We definitely have procedurally blocked consensus for advancement because materials weren't available early enough.

ACE: Sure. And in my opinion, that's just rude when we do that. Again, if it's a-- even if you're not asking for advancement, if you put a massive topic like if we'd never heard about using iterators and KG was like, "Oh, by the way, tomorrow I want two hours." I feel that's not respectful of our time as a committee, even if it's like yes, no one can block us doing that. As we've all rules, it's about finding what is an effective way of us working together. And guidelines helping nudge people in the right direction.

MF: I still think that having a very precisely defined line is important, not for the purposes of calling this out like, "Oh, you didn't add your thing in enough time. I'm going to say that it was not ready." But more in the other direction of, I'm the champion, I add my thing to the agenda before the time, and I say, "I know I can successfully defend from that kind criticism." And if somebody says, "I didn't have enough time to review. I didn't think about this." I say, "Well, we have a precisely defined line and it was before that. So that's not a valid criticism of this proposal."

ACE: I didn't mean to suggest we shouldn't have a definite line. I'm just laughing about how much we're quibbling over exactly where that line is in such a because CDA has proposed a definite line and it's in half an hour like it's like yeah, we should just agree on the definite line that's been proposed. And we can always change this if it doesn't work. This is not set in stone forever.

SFC: I am actually happy that \[observer] Florian brought up the thing about weekends are not a universally well-defined concept. So trying to align or disalign with them is kind of not necessarily a goal, I think we should be having. But I was just giving some example my latest comment is Google Summer of Code is like one example of that I've worked with of like an organization that has to have deadlines that work across the world, and they set they picked 1800 UTC as their deadline for things. The equivalent here would be if we would do Friday 1800 UTC is basically six hours later than Chris's proposal.

RPR: And YSZ points out that Brunei's weekend is non-contiguous. Amazing.

RPR: All right. I would like to ask the committee for consensus to make this change.

RPR: So ACE is supportive. Yes, let's try it. See how it goes. Peter is supportive. SFC objects, saying no, I don't want to regress the deadline relative to where it is currently. Leo yes, we have so MF you wanted to ask?

MF: I mean, it sounds like we already have blocking concerns, but I would be willing to try this once and require us to reaffirm that we want to continue with that rather than the default of going back to the way it is now.

RPR: So SFC, can I ask what do you think of that compromise? The try it once?

SFC: I just posted: it's fine.

JHD: Yeah.

RPR: Once is fine. Okay. All right. A breakthrough. And JHD also says once is a good compromise. YSZ is positive. Leo is positive. KM is positive. OMT's still positive. RBR, Leo, okay. There's people still typing even though I think we've got a conclusion. KM says, "Can has calendar event pls." Okay. And JHD has said that he will do it. All right. I think given that we've only got three minutes left on the agenda because we are finishing it at 3:55, we don't have any more time for regular slots. But I'll say thank you to CDA for bringing this. We have an action and a next step. Did you want to summarize anything?

CDA: No.

### Speaker's Summary of Key Points

The speaker did not provide a summary.

### Conclusion

No conclusion recorded for the minutes, please refer to transcript for more details.
