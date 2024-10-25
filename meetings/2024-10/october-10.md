# 104th TC39 Meeting | 10th October 2024

-----

**Attendees:**

| Name              | Abbreviation | Organization   |
|-------------------|--------------|----------------|
| Yusuke Suzuki     | YSZ          | Apple          |
| Keith Miller      | KM           | Apple          |
| Michael Saboff    | MLS          | Apple          |
| Waldemar Horwat   | WH           | Invited Expert |
| Jonathan KUperman | JKP          | Bloomberg      |
| Ujjwal Sharma     | USA          | Igalia         |
| Yulia Startsev    | YSV          | Mozilla        |
| Ross Kirsling     | RKG          | Sony           |
| Linus Groh        | LGH          | Bloomberg      |
| Chris de Almeida  | CDA          | IBM            |
| Andreu Botella    | ABO          | Igalia         |
| Richard Gibson    | RGN          | Agoric         |
| Chengzhong Wu     | CZW          | Bloomberg      |
| Marja Hölttä      | MHA          | Google         |
| Oliver Medhurst   | OMT          | IE (Porffor)   |
| Devin Rousso      | DRO          | Invited Expert |
| Chip Morningstar  | CM           | Consensys      |
| Daniel Minor      | DLM          | Mozilla        |
| Justin Ridgewel   | JRL          | Google         |
| Ashley Claymore   | ACE          | Bloomberg      |
| Ron Buckton       | RBN          | Microsoft      |
| Jordan Harband    | JHD          | HeroDevs       |
| Dmitry Makhnev    | DJM          | JetBrains      |
| Jesse Alama       | JMN          | Igalia         |
| Istvan Sebestyen  | IS           | Ecma           |
| Shane F Carr      | SFC          | Google         |
| Justin Grant      | JGT          | Invited Expert |
| Eli Grey          | EG           | Invited Expert |
| Jack Works        | JWK          | Sujitech       |
| Daniel Ehrenberg  | DE           | Bloomberg      |
|                   |              |                |

## Immutable ArrayBuffers for Stage 1

Presenter: Mark Miller (MM)

- [proposal](https://github.com/Agoric/tc39-proposal-immutable-arraybuffer)
- [slides](https://github.com/Agoric/tc39-proposal-immutable-arraybuffer/blob/main/immu-arrayBuffers.pdf)

USA: Good morning everyone. Welcome to the third day and final day of the 104th TC39 meeting. The first topic of the immutable ArrayBuffers for Stage 1. We can see you screen. Take it away when you can.

MM: Before I get started, I would like ask everyone’s permission on line and in the room if I can record the presentation using keynote record that is the slide climbing plus the audio. I will turn the recording off when the discussion after the presentation. The discussion happens during the presentation would be by default be recorded although I will be happy to edit out anything that discussed during the presentation by request. So does anybody object to my recording during the presentation? Wonderful.

MM: Today I am presenting immutable ArrayBuffers for Stage 1. I’m Mark Miller of Agoric and the cochampions are Peter Hoddie of Moddable and richard Gibson of Agoric and Jack Works here at the meeting in general but not yet in the room. As a Stage 1 proposal, the focus should be on a problem to be solved rather than the specifics of how we plan to solve it although explaining the specifics as an example certainly good for illustration. So the problem statement is the need for immutable bulk binary data. And this has several motivations.

MM: Moddable, well, embedded JavaScript, JavaScript for devices such as standardized TC39 and implemented by moddable in the XS engine is in a situation where ROM is much cheaper and plentiful than RAM in many target embedded devices so there’s a big need for embedded devices if that you have a bunch of data like images, for example, a bunch of data that in fact is not going to change runtime, you would like to be able to place it in ROM without having to do crazy bookkeeping to pretend that it’s mutable. Right now, in fact, people doing JavaScript for embedded place data in ROM making it, in fact, immutable but they do it by cheating, by deviating from the spec. We want to heal that by enabling them to do that within the conformant spec language. We’ve heard from several people I believe including kevin Gibbons but heard from several people that on the web, there’s—we’ve observed various patterns of defensive copying that one API receives a bunch of data and because they need it to be stable and can’t count on the provider of the data not mutating it, that the receiver then makes their own copy. And especially when the data in question is bulk binary data, that can be a very expensive copy. It would be good to be able to get the same level of defensiveness without needing to do defensive copying.

MM: "Agent" is the JavaScript name for a separate unit of concurrency like worker. The general term is agent. And by normal agent here, I want to distinguish agents that are allowed to engage in shared memory multi-threading allowed to use shared ArrayBuffers to communicate through shared memory versus normal agents that are only able to do communicating loops and communicate through post message. On the web at least, we’re forcing an opt in for an agent to be able to engage in shared memory multi-threading so the common case will remain normal agents as I’m calling them here. We would like to enable them to share bulk binary data at zero copy without the expense of a copy and because it’s immutable, there’s no concurrency problem in sharing the data. And in fact, depending on how the JavaScript engine co-exists with the operating system, they might be able to use the MMU to get MMU protection for the actual data itself, they might be able to map the data into multiple agent address spaces if they’re in different address spaces. If they’re in the same address space, that goes away. Similarly agents within the machine, there’s communication of agents on different machines. Agoric is participating with Spritely and Cap'n Proto the standardization of the network protocol messaging protocol called OCapN and intended to be inter language standard and not JavaScript specific standard. That one contains both bulk strings as things passed by copy as well as bulk binary data that is a big array of bites passed by copy. The language biding, things that are passed by copy over the network, it’s very nice to have the local representation be immutable so that it doesn’t—so that the local copy does not diverge from copies that have been made remotely after the fact.

MM: For strings we have that perfectly in JavaScript with JavaScript strings. We would like to have something similar for bulk binary data. And the result would be something that looks very much like the previous case of sending bulk binary data that’s immutable of post message to share with agents within an agent cluster. And the surface form that we generally find that we want, we often find we want, this isn’t speaking for everyone, but speaking for the cases we have encountered in our own API taste is we generally find that we want at the end of the road to see this stuff through a frozen TypedArray. And because TypedArrays themselves don’t have their own data, but rather they’re windows on to ArrayBuffers, all the data is in the ArrayBuffer and currently there’s no way to create an immutable ArrayBuffer be this—has the implied restriction that there’s no way to create a frozen TypedArray. And there’s no way to shim it. There’s no practical way to shim it.

USA: On the queue we have a clarifying question by WH.

WH: I see a bunch of proposed ways to implement this on the slide, but don’t we already also have this functionality in the form of strings with just a thin shim to access strings as though they were immutable byte arrays?

MM: You can certainly store bulk binary data in strings and with the understanding that the strings underlying representation typical enI didn’t know is the array of 16 byte values. You can even arrange to do it and that those values are not constrained to represent characters. You can certainly do that. That’s a good point. I retract the statement that there’s no way to practically shim it. We would still like a more natural way to do this and like to be able to use genuine TypedArrays and freeze them. But you are correct.

WH: I was just wondering what am I missing here.

MM: No, that’s a good point. And since right now we actually have a need for shimming it, that’s actually a good practical suggestion for our immediate needs. We should think about that.

WH: Thank you.

MM: In any case, there’s various places to start. One is just the JavaScript normal arrays, this seems like an unsuitable place to start because of all of the object-like natures of normal arrays including things like holes and that any one of the properties might be an accessor property, et cetera, et cetera. That’s not where we chose to start, but as struct arrays and SYG presented them as part of the struct proposal and struct arrays mature maybe we could revisit whether struct arrays might be a good place to start. That’s not what we explored to date. TypedArrays itself is normally what we want as I mentioned, but not a suitable place to start, because the TypedArray has a backing buffer and the backing buffer, if it’s mutable, the TypedArray cannot be frozen. DataViews have the same problem. They don’t have the data but just view on an ArrayBuffer. Web array has extraction called the Blob. Right now it's just part of the web and not part of JavaScript. We can consider adopting it. However, it has extra features that are well motivated for the web and for the uses made of Blobs like mind types that are really besides the point for what we’re asking for. So JWK does have a previous proposal.

MM: There’s jack. JWK does have a previous—let me mention. I’m recording the presentation itself by permission. I’ll turn the recording off before the discussion at the end. But by default, discussion during the presentation will be recorded. But I can certainly edit things out by request.

MM: Okay. So JWK does have a previous proposal where he started where we’re starting which is ArrayBuffers in his proposal called limited ArrayBuffers. And that proposal for various reasons did not proceed beyond Stage 1 but it did get to Stage 1. And we believe that the current proposal that jack is a coach champion of avoids the impediments that cause the previous one not to proceed beyond Stage 1. So today, we’re again starting with ArrayBuffers as our place to start.

MM: This is a realistic piece of code authored by RGN of using the abstractions we’re proposing as part of doing realistic interaction with the protocol. In this case communicating binary data between processes. The important expression in this piece of code is just this one. This is the one that does all the interesting work. So this is kind of a preview of the API we’re proposing. `buf` is a normal TypedArray into which the data that we want to transmit has been placed. `transferToImmutable` does a transfer analogous to the existing transfer and transfer to fix size operations. Does the transfer to immutable creating a new immutable ArrayBuffer detaching the original and the only reason for that is so that we can create a TypedArray on it that we can freeze. And then the rest of this just makes use of the fact that now we have a stable frozen TypedArray.

MM: So until recently, this was the entirety of the ArrayBuffer API. And it has a slice method for extracting out a sub range by copy into a new mutable ArrayBuffer. And it has a getter only accessor for getting the length of the array. Since then, we’ve added these three methods. `transfer`, `transferToFixedLength`, and `resize`. And we’ve added these additional getter-only accessors. And what these transfer things do is they create other—well, the transfer we started with transfer, it just creates a new ArrayBuffer that’s like the original detaching the original and the reason it detaches the original is so that it can create the new one with the same data without having to copy it. So that’s a zero copy transfer-exclusive access to the data. Transfer toFixed length is similar but creates a flavour of a non-resizable ArrayBuffer which is one that is less mutable than the original if the original was resizable but contains all the same data. For a resizable one, the resize operation, and then these first two getters on the accessors detached and resizable lets you look at an ArrayBuffer and see what flavour you have got. I’ll step through the flavours. This API already enables three flavours of ArrayBuffer. There’s the resizable ArrayBuffer for which the interesting operation is `resize`. It’s identified with the resizable being true and it has—it’s interestingly has both a byte length and a max byte length that can be different in that the max byte length that you preallocate where the byte length can grow up to that limit. Transfer toFixed length creates something that is less mutable than a resizable ArrayBuffer in that the size is no longer mutable. And in this one, the resized method is useless. If you call it on a non-resizable ArrayBuffer, I believe it throws. And the getter only accessor identifies this case by the resizable accessor returning false. And then all of the transfer operations, what they leave behind is a detached ArrayBuffer in which the detached accessor returns true to identify it. And all of the other members, both methods and accessors are useless.

MM: The reason I went through the existing API is we’re very happy to have fit the functionality that we’re looking for very naturally as an extension of the API we already have so as to minimize conceptual cost, minimize—have it be a very natural additional API to learn giving that you’ve learned the existing API. So like transfer toFixed length reduces the mutability of—creates a new ArrayBuffer detaching the original where the new ArrayBuffer is less mutable. Transfer to immutable is similar, it detaches the original and creates a new ArrayBuffer with the same data zero copy, but the new ArrayBuffer is much more—has much more reduced mutability in particular all of the data is now immutable. And there’s a corresponding getter-only accessor immutable that identifies this. So this API enables the following additional flavour which is the immutable query for this one returns true and slice continues to work because that’s just a query. It doesn’t modify anything. But since the thing is immutable, you also cannot detach it. So none of the other operation, resize or any of the transfers work on this flavour. And an important thing to know, and this is a difference with the previous limited ArrayBuffers is with this API, an ArrayBuffer that’s immutable is born immutable and forever immutable. And ArrayBuffer that is not immutable is born not immutable and is forever not mutable. So there’s no making it an immutable in place. And that’s similar with not being non-resizable. You don’t make a resizable ArrayBuffer not resizable. You make a new one not resizable and born not resizable and stays not resizable forever or until it’s detached.

MM: To enable frozen TypedArrays as a consequence with immutable ArrayBuffers we’re proposing to modify the TypedArray specification in a way that fits very well with what SYG presented earlier as the prevent extensions modification of the TypedArray specification which is right now TypedArrays, all of the indexed properties of a TypedArray are dealt with by this block—by this special handling block in the specification, the special case for TypedArrays for indexed properties for anything other than indexed property just falls back to the normal get only. For index properties, what we have been doing until now is they always describe themselves as configurable writable. And they needed to do that because for both resizing and detaching purposes, they have to be configurable in order to account for the future changes that might happen and also because the data value can be changed. They have to be writable. What we did for prevent extensions is we allowed them for non-resizable ArrayBuffers but prohibited for resizable ArrayBuffers for a similar philosophy in order to account for what mutations are possible in the future or if those mutations are not possible to enable the TypedArray to visibly commit to stability that it will actually have. So with this particular specification does is it says if you make a TypedArray on an immutable ArrayBuffer, then all of the indexed properties of that TypedArray are born non-configurable, non-writable data properties and therefore forever that way and once again it’s important to point out a TypedArray made on an ArrayBuffer is forever a TypedArray on that ArrayBuffer. There’s also no ability anywhere in the language to change what the TypedArray is a window on.

MM: So to sum up that point, when you make a TypedArray on the various forms of buffer, if you make it on a resizable one you cannot prevent extensions, if you make it on non-resizable one you can. If you make TypedArray on the buffer or TypedArray detached then the TypedArray is useless. Finally a TypedArray on an immutable ArrayBuffer is TypedArray that you can freeze. There’s also the issue that’s outside the JavaScript specification that is increasingly part of JavaScript on more and more hosts including non-browser hosts and structure clone started as a creature as a browser in web APIs, but it’s in general a common way to account for the semantics of communicating between agents, for example, by post message. And structuredClone, the API lets you say which things you want to transfer and which things you want to copy. If you don’t say you want to transfer, then you’re implicitly copying. So on a resizable ArrayBuffer or a non-resizable ArrayBuffer, it would copy it with the overhead of copying because the original and new one are both mutable and they can—and they then mutate separately. Or you can do a zero copy transfer leaving behind a detached one. Doing structured clone on a detached ArrayBuffer is useless. Doing structured clone, here is the interesting part, doing structured clone on immutable ArrayBuffer can do zero copy sharing of the data. It will create a new ArrayBuffer as a new object with a new object identity but it can directly share the same underlying data if the implementation is able to share that data between the communicating parties. And because it can’t be detached, you can’t transfer it if we maintain the semantics, the implied semantics, the transfer means that the original party loses it.

MM: So the open questions in the proposal as we have written it down is transfer and transferToFixedLength both have a new length property—sorry, a new length argument, an optional new length argument. There’s two stances one can take with regard to the transferToImmutable. One is orthogonality. You can transfer to immutable if you’re about to detach any way, there’s no particular way to the no resize to the way you want orthogonality that the other two have the parameter and it would be pleased surprise to have the parameter here as well. That’s an open question.

MM: The slice operation because it creates a new mutable ArrayBuffer cannot be zero copy even if the original is an immutable ArrayBuffer and that seems like a missed opportunity or would be a missed opportunity particularly missed opportunity to do what jack works did in his earlier limited ArrayBuffer proposal which is to be able to create a window, narrow window on the ArrayBuffer and do it at zero copy cost and then you have TypedArrays that reveal only that window of data rather than revealing the entirety of the data. That’s especially relevant potentially in the case of where the underlying original thing is some large flat address space like you have in a wasm-like world. So sliceToImmutable could be like slice but producing an immutable flavour ArrayBuffer and original and new one are immutable then obviously you can do that at zero copy overhead.

MM: RGN’s presentation on order of operation on constructing ArrayBuffers and where you get the errors reported, there’s similar questions for the implied failures to mutate. And in particular, because of the history behind ArrayBuffers, if there are cases right now where a failure to mutate such as by assignment to an index property on a detached ArrayBuffer is silent which is quite annoying, but that’s what we have got, so there’s an issue going forward of now that we have new reasons for failing to mutate, whether we report them with an error and if so which error and what’s the order of operation that determines which error is reported if multiple things are wrong? Also, I had not mentioned SharedArrayBuffer or atomics in the talk so far, and we really haven’t thought about it much. Atomics, as I understand it, you can do all the operations on the normal ArrayBuffer, it just doesn’t mean very much. So being able to do them on an immutable ArrayBuffer in the query part seems to make sense. But in any case, as I said, we really haven’t examined that, so examining the relationship to shared ArrayBuffer in atomics is something to do. The status is that we’ve got spec text that talks about both the ArrayBuffers and the TypedArrays as I mentioned and also the DataViews. We have a partial shim. Partial because of the constraints on shims I mentioned. It shims the immutable TypedArray and does it securely in the sense that the virtual TypedArray, the emulated TypedArray that it presents is encapsulates a genuine TypedArray exclusively so that it really does prevent the underlying data from being mutated, but because the encapsulating wrapper is not a built in ArrayBuffer, there’s no practical way to create a TypedArray on the emulated immutable ArrayBuffer. And that is our status. And I would like to ask for Stage 1. And that leads to discussion for which by agreement, I will now turn off the recording.

USA: All right. Thank you MM. Going with the queue, first on the queue we have OMT.

OMT: I've used strings as array before and they can be used but this would be how for me at least.

MM: Sorry. I couldn’t quite hear that. Can you say that again?

OMT: I've used strings before as byte arrays and they are useful but they are not nice to use. This would be very nice.

MM: Okay. So that’s along the lines of WH’s suggestion and good suggestion. Since like I said, we currently have a practical need to shim it if we can, we should take a look at that. I didn’t think about it until WH suggested it.

JHD: If this achieves Stage 1, will the limited ArrayBuffer proposal be withdrawn as part of that, or would they coexist?

MM: I will turn that question over to JWK. Somebody hand—I took your microphone. I’m sorry.

JWK: This proposal solves half of the problem that the limited ArrayBuffer intended to work out as MM just mentioned, there is also a limited slice of an ArrayBuffer in case the ArrayBuffer provider want to let someone else to see only limited slice and cannot get extended to the whole ArrayBuffer, for example, when the ArrayBuffer is a wasm memory. If this proposal advances, I think I may change the old one to remove the frozen part and maybe represent to the committee in the future, and let’s see if the remaining part is still convincing to the committe.

CM: So my question is probably most easily visualized in the case of ROM but more general with JavaScript not having static data declaration (perhaps with the exception of strings): if you get one of these by invoking transferToImmutable on a regular ArrayBuffer, in the case of something like a ROM how do the bits get in there?

MM: Great question. So I won’t speak for TC53 because I’m more familiar with the specifics of XS than I am with the TC53 standard and I know it conforms to TC53 standard and it is represented somehow in TC53. In XS the execution model is basically two phases. There’s a first phase of execution that happens in development on the developer’s machine and then there’s a snapshot event that looks very similar to the hardened JavaScript lockdown that also XS has and I’m not sure I can speak to the relationship between snapshot and lockdowns. I won’t try to speak to that. But snapshot basically says take a snapshot of the state of the machine. Basically of the state of the heap. And turn it into something that in which all of the mutable parts are now in ROM and then you can continue execution from there on the device. It’s very clever and works very well.

CM: I’m familiar with the XS snapshot mechanism. So there would be some annotation that the engine itself would understand knowing this over here is immutable and the stuff over there has to be maintained in the mutable portion of memory.

MM: Right now what they do is before snapshotting is they make the tremendous number of objects transitively frozen and they have inside the engine a purity test. Are these things pure meaning there’s no hidden mutable state and no hidden I/O and for the things pure and frozen ArrayBuffer and frozen immutable ArrayBuffer and a frozen TypedArray, those things would in fact be pure, and if you make them pure before you snapshot then all of those things would just go into ROM and then would continue execution on the device as data in ROM.

CM: That satisfies the ROM case very well. It doesn’t solve more general question of how do I get a big blob of static immutable data into my code. That’s a separate problem, I guess.

MM: I mean, it’s what you already understand which is that the JavaScript initialization would need to be expressed as put a whole bunch of data into a normal ArrayBuffer and then do a transferToImmutable on it. So it would be, you know, module initialized time computation. And whether we want to introduce some more declarative form of just here is an immutable ArrayBuffer pre-populated with data, that’s something we can examine. Certainly not something we want to make as part of this.

CM: I imagine you could do something with typed imports or something like that. But that’s clearly out of the scope for this.

MM: Yeah, that’s an interesting one. The same thing we can import other flavours of module-like importing JSON. Importing just, you know, a bunch of bytes from a file into an immutable ArrayBuffer is something that one can imagine is another type of import. Once again, not something that I would like to see in the proposal but can be another follow-on proposals.

MM: Can someone project the queue?

KM: I will ask my question. And this isn’t block Stage 1 at all.

MM: I’m sorry. Your audio is muffled. I didn’t hear the beginning what you said.

KM: Sorry. This isn’t a block of Stage 1. I’m curious if you thought about instead of transfer to immutable just having an option on transfer toFixed that says I want immutable buffer back? It’s not one way or the other but…

MM: That one actually I never thought of that. I never heard anybody else mention that. That’s an interesting suggestion. Yeah, I’d like to—let’s consider that an open question. It certainly fits all the constraints. I would be curious what the feedback is from the room about which API feels more parsimonious. I did see the queue projected for a moment. And then it blanked out.

USA: Next on the queue we have SYG.

SYG: I have some clarifying questions on the freezing and the structured clone. For freezing, remind me again what did you propose to be freezable?

MM: TypedArrays.

SYG: TypedArrays that are backed by –

MM: Immutable.

SYG: I see, okay.

MM: Just to be very, very pedantic, a TypedArray that’s backed by a fixed size empty ArrayBuffer is already freezable. The reason why one that’s backed by nonempty ArrayBuffer is not freezable is because of the non-configurable indexed data properties. And if it’s backed by a mutable ArrayBuffer, then the specification change that enables the freezability is only that the properties, the indexed data properties are described as non-configurable and non-writable display properties and that combined with the change we agreed on to prevent extensions has the emergent effect that now you can freeze these.

SYG: Second clarifying question on structured clone your intended semantics for structured clone is if you structured clone an immutable ArrayBuffer, you get a new ArrayBuffer with the same backing store that is a new object but the old ArrayBuffer, the source is not detached because there’s no need to? Is that the extent of it?

MM: It’s both because there’s no need to and would violate immutability to detach it. And we’re saying immutable flavour cannot be detached and transfer are disabled.

SYG: And it would violate the immutability to detach? That’s the operation on the ArrayBuffer object itself not operation on the underlying bytes?

MM: That’s a good point. It depends on what we intend to mean by immutable. So we could consider that an open question during phase 1.

MAH: We cannot consider that an open question. That would violate the freezability of TypedArrays.

MM: Yeah. Exactly. Thank you MAH. If the underlying ArrayBuffer could be detached, than a TypedArray on the ArrayBuffer could not be frozen.

SYG: I see, okay. So it’s to make the invariants work. So I prefer your proposed semantics. I don’t think we should detach it. I’m trying to think through if there are any problems with that. Like, given that you still get a new ArrayBuffer object. You can freeze an immutable—like, okay when you create—when you get a new immutable ArrayBuffer back, is the ArrayBuffer object itself born frozen?

MM: It is born immutable and not resizable. The bytes are immutable and not resizable and not detachable. But it still as an object, it’s not a frozen object, it’s not even a non-extensible object but you can make it non-extensable and you can freeze it.

SYG: That answers my clarifying questions.

KM: Seems like there’s not really any value add to allowing a transfer any way in the sense that you can’t write the bytes. You don’t want the bytes on your old like worker or agent. You would just throw it away and let the garbage collector clean it up?

MM: I’m sorry. I don’t understand.

KM: I guess I’m agreeing with the current semantics. The proposed semantics because I don’t see any value add to allowing a transfer independent of that. Because if you don’t want your bytes anymore, you just let the object get garbage collected.

MM: Right. So good. Thank you. So if you want the bytes and a new agent and you simply know that the bytes are now irrelevant in the original agent, you could—the existing abstractions are perfectly good for that where you’re detaching it, or you could use this new immutable ArrayBuffer, share it and then drop it and let it get garbage collected. But, yeah, if it’s not needed in the original, then this proposal doesn’t add any value to what we have now, because detaching is already a zero copy transfer by detaching it in the original. It’s for some lightweight concurrency use cases among agents that are not authorized to use shared memory multi-threading, it’s very nice to be able to have the same underlying bulk data, for example, images, whatever, accessible simultaneously for multiple agents since you can do it by sharing without copying over it.

DE: I think we’ve partly started to discuss this. But I like this design. This seems like a very simple design and very in line with what we established with ArrayBuffer transfer. But because a lot of uses within a particular process might be in terms of a single ArrayBuffer going through different modes where it’s potentially read by multiple things in immutable way and then is written to and at that point immutable things have to be kind of invalidated, but that might be read potentially by multiple things again, a reader writer lock would be able to encapsulate that pattern? There’s an API design proposal by Jake from Shopify and I think this is an interesting thing to consider in this space.

MM: So let me make sure I’m understanding. The reader writer lock would be specifically in order to do concurrency control around SharedArrayBuffers.

DE: So I’m using the term reader writer lock potentially loosely. It’s not necessarily about concurrency as such. But you have a sort of holder for the ArrayBuffer and then from it you can either get out one, you know, writable thing or you can call it multiple times and get these, you know, read views to it.

MM: So this is interesting. So given that we’re not talking about SharedArrayBuffers in autonomous and just talking about the Rust-like ownership and borrowing model to do reader writer locks. You can do half of it, zero copy within this model. You cannot do the other half zero copy which is given a read write ArrayBuffer not SharedArrayBuffer is therefore necessarily exclusive to one agent, you can transfer it to an immutable ArrayBuffer zero copy that you can then share, but you can’t go the other way. You can’t go the other way zero copy. There’s no way to sort of collect all of the references to the immutable one, invalidate all of them and make a new exclusively held mutable one at zero copy. And I don’t see a way to accommodate that. I mean, if there is a way to accommodate that, if this is something that we should be trying to consider, we could consider it an open problem. But I don’t see a way to approach that from where we’re starting.

DE: Shouldn’t we make them all be detached? I feel like I’m missing something.

MM: I’m sorry. Say that again.

DE: Shouldn’t we make them all be detached?

MM: We could if we allowed them to be detached. So that goes back to SYG’s question. So let’s go ahead and continue to consider that an open question. But once again, if you allow an immutable ArrayBuffer to become detached, IE, if the non-detachment is not a permanent commitment, then you cannot within the object invariance freeze a TypedArray on that immutable ArrayBuffer. And we really do want to be able to create frozen TypedArrays.

DE: I see. That makes sense. Yeah, I agree that the reader writer lock doesn’t make sense if you never give up the reader privileges. Thanks.

MM: You’re welcome. That’s a good question. I haven’t thought about the reader writer issue in this context. I see a clarifying question from KM. Is this considered a cooperative multi-threading environment or adversarial? So that’s a great question. Actually I’m sorry before I answer the question, KM, did you have more to say on the question than the title of the question?

KM: Sorry. I’m not talking about the reader writer lock situation. You have a cooperative one, you can just agree on some SharedArrayBuffer and cooperatively have a lock on your thing. In an adversarial environment then obviously that doesn’t work.

MM: But even in a cooperative environment, because of the constraints here, there’s no zero copy way to make the transition back to a mutable ArrayBuffer within this proposal.

KM: I think there would be that you would wrap your ArrayBuffer in an abstraction that like, I don’t know, strong person proxy and try to write when it’s in the shared state is in the read-only mode, like, the reader lock is held, then it would trap.

MM: Putting a proxy in front of it and trapping is something that I think is—would be, you’re an engine guy, high performance engine guy and I’m not. So you’re the one who is more authoritative on this. I would think that would be from the performance perspective, just contradict the performance goals of dealing with bulk binary data. If you wanted to support that kind of thing, you have to move something like a copy on write support directly into the engine which Mathieu has suggested in other contexts, in other very closely related contexts. We’re not proposing that in this proposal. And I don’t think—I don’t see a way to do it practically within the performance goals of bulk binary data without something like that.

KM: Yeah, that’s a fair point. Not arguing as a performance thing. I was arguing that it was potential possible independent of the proposal.

MAH: So from what I understood from DE’s question is more to do with views than with the buffer itself. And I think that is what the proposal from JWK is more about being able to create limited views that are read only, that are on a subset of the data and things although that I can while being able to maintain a writer view to that ArrayBuffer. But the ArrayBuffer itself would remain mutable. So it’s possible that there is still a way to integrate both proposals, but I see this as oring thattal problem. How do you provide limited views on an ArrayBuffer that is mutable?

MM: Okay. So that makes sense to me. And I endorse what JWK said earlier which is given that this proposal advances to Stage 1, which we’ll see by the end of this, then he could rephrase the limited ArrayBuffer proposal to be the differential assuming this proposal and so I want to endorse that, there is that further functionality that can be explored. But I also want to endorse keeping it out of this proposal itself in order to keep this proposal really very limited and minimal.

MM: WH says you can do this in this proposal. I don’t know what this is.

WH: This is musing about DE's question. If you have some kind of a notion of copy-on-write, then you can use *slice* and *sliceToImmutable* to go both ways between mutable and immutable versions of an ArrayBuffer. I don’t like that very much because if you get it wrong and references don’t get GC’d quickly enough, you silently end up with multiple copies, which is not ideal.

MM: Okay. So WH, are you satisfied that the previous answer applies to this question as well, that I endorse the exploration of copy—what you could do with copy on write, but want to keep the things that would imply such an optimization out of this proposal itself to keep this proposal minimal?

WH: Yes, I agree. I want to keep these things out of this proposal. It would rapidly get complicated and brittle.

MM: Good. I see another reply from MAH.

MAH: Yeah, just clarifying that copy on write is an optimization that implementation could do today that doesn’t require any changes to the spec implementation as SYG mentions remains skeptical that it is doable safely. I remain skeptical that is actual case because I don’t find it different than detached. But I don’t know enough about implementations. But any way, I don’t think it relates much to this proposal in general. This is more about potentially views or ability to share—yeah, anyway.

MM: It’s true that the existing slice operation creates a new mutable one that starts on the same state as the original and then both of them can be mutated to diverge from there. So copy on write if it were—if some engine chooses to implement it as an optimization could optimize the existing slice method without any particular relevance to what is being proposed today. It would just be existing and optimization API we already have. That brings us to SYG’s skepticism that is his reply. SYG.

SYG: I don't really need to go into it, but we have talked about transparent copy on write optimization of ArrayBuffers when doing the size ArrayBuffer stuff and yes the language would admit transparent and copy on write and remains the case that V8 doesn’t want to do this for security risk reasons.

MM: Let me just confirm with you that the—what’s being proposed here by emitting anything that would imply a copy on write optimization does not raise any of those objections.

SYG: I haven’t checked with the security team. But as far as I can see, this is—I like this proposal very much. It doesn’t raise any security flags to me.

MM: Right.

SYG: The risk around copy on write is the on write part.

MM: Good.

USA: SYG again.

SYG: Certainly not a Stage 1 blocker. I don’t think—it might not be any stage blocker. I want to just note because Wasm linear memory is exposed as ArrayBuffers that are currently design space of memory control. They want more complex memory control than this and want to remap certain sub regions than that. They want more than what this is proposing. I checked with some of the Wasm team members on V8 and the feeling is maybe this is just orthogonal to anything that you ask them. Maybe it is just fine. In particular Wasm memory can’t be detached. You just can’t use this. So my concern is if they also come up with an independent immutability machinery, it would be a shame that we just have a second different thing that’s different but not really. But I just want to register that they are thinking about the space but I don’t think it really holds up anything here.

MM: Okay. Great. So thank you for that. We’ll keep an eye on that. But I’m glad that it seems unlikely. CA point of order, two minutes remaining. Is there a use case for slice? SYG again. Let’s see if we can cover that and I can ask for Stage 1 within the remaining two minutes. Is that possible?

SYG: Yeah. So quick question: The slice to immutable thing sounded like the motivation is ticking a box. We have slice and why not slice to immutable? We asked methods to aArrayBuffer and TypedArray and sort the bytes in the TypedArray. Slice on ArrayBuffers themselves is also like—if there is actual use case from moddable or whatever that seems find. If not, I don’t want to keep proliferating new methods that don’t have any use.

MM: Okay. I will just note that I included the slice to immutable in the open questions part of the presentation, which I think it sounds like it’s compatible to consider it an open question. With all of that, I would like to ask for Stage 1.

MM: I’m seeing a thumbs up from CM and support for JWK and DLM and WH. Do I have any objections? I didn’t hear any objections. I think I have Stage 1.

USA: Great, congratulations MM.

MM: Thank you everyone.

USA: Yeah, I guess I need to figure out how to calculate Waldemar’s point [Waldemar wrote –i²], but, yeah, thanks everyone for this topic. Before — oh, yes, so, MM, would you make any concluding remarks or give a summary of the discussion.

### Speaker's Summary of Key Points

MM: With the Stage 1 problem statement of finding good ways to support immutable bulk binary data and with the immutable ArrayBuffers as proposed with spec text as at least an example—an ill US active example of how we are currently thinking of addressing that problem statement, we have achieved Stage 1 with, I think it’s fair to say, with no objections to the proposal part of this and with open discussions and notes with regard to things considered open questions with some additional open questions that I trust have been capture in the notes. But the Stage 1 is just the Stage 1 for, you know, for this. That was very rambling and incoherent, but I hope it makes sense.

## DataView get/set Uint8Clamped methods for stage 2

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-dataview-get-set-uint8clamped)
- (no slides)

JHD: Okay. So I’ve presented this in the past. Basically, we have this nice little matrix with only two little ugly marks on them. `Uint8ClampedArray` does not have the `DataView` get or set method for it, and that’s the only kind of aberration in terms of consistency here. The contention that was talked about during the last discussion was that there may be, I think generally everyone’s okay with the idea of the setter, but some folks are not happy about the fact that the getter is identical to the one for Uint8Array. So it either does the exact same thing or it’s a literal `===` reference to the exact same function, and my argument is I think we should have that for consistency, and the counterargument is if it doesn’t do anything, why should we have it. It occurred to me this morning that Sets have keys, values, and entries, and why? The only point of that is consistency with the same triple of methods elsewhere. Empirically, we have decided that it is valuable to have consistent methods - API interfaces - even if they don’t actually have much use case. In this case, that’s what I would like to do, is I don’t personally care whether this is a distinct method here or whether it is just an alias to `getUint8` - I’m happy with either one. But I would like to advance to Stage 2 with both methods. Let’s discuss that.

KG: Sorry, I didn’t have time to get on the queue and I have to leave, like, five minutes ago,.

JHD: That’s okay.

KG: But there is utility in having map have keys and values and set also having keys and values, which is it lets you write code that it doesn’t care which of those two things you’re passing in.

JHD: That’s what I want these for.

KG: That works because those things have the same name, and here you are proposing APIs with different names. So, like, you’re not --

JHD: So I discovered this problem because I wrote code that was trying to do exactly that, not care which type of TypedArray I was dealing with, and dynamically dispatch to the appropriate `DataView` method based on the type of TypedArray. This is one special case I had to hard code in there. If we patch those methods, then in theory, I wouldn’t have to do that and my generic code would be nice and clean and elegant and just work, exactly as someone would want to do with maps and sets and treat them agnostically.

KG: I think that the sort of dynamic dispatch based on the names lining up is not a sufficiently good motivation to advance a proposal, but I’m not going to block, and I have to go, bye.

USA: All right, thank you, Kevin. First on the queue, we have MF.

MF: Yeah, I want to preface this with I am also not planning to block this, but, yeah, I am—I remain unconvinced about this motivation. The important thing I want to state, and I think I’ve stated this but I want to make it clear, I don’t want this to set any precedent for us to trying to fill in every square of a matrix. That is not something we should even attempt to do. It could maybe be used as a way to inspire us and say, oh, I found something useful now, but I don’t think we’ve done that in this case. But the reason I’m not opposed to this is because there are people who do say that it’s useful. I’ve not been convinced, but I think that’s fine. So I’ll let it proceed.

JHD: And I will say that I agree that none of us should be hunting out inconsistencies and fixing them on principle. I discovered this with an actual use case and I made the matrix to attempt to bolster my case. If I wasn’t actually using both the getter and the setter, I would probably not care so much about having the matrix fully filled in. It’s that I actually need both of these methods.

USA: Next on the queue, we have CM.

CM: Yeah, I support this. Weird non-orthogonalities are confusing to users, even if you can come up with rationalizations for why they’re OK. In this particular case, it’s just one more bit of confusing detail that people have to learn about or perhaps stub their toe on, even if it’s something minor like this. And I agree it’s probably not worth trying to go back and patch the vast horde of historical stuff like that. But when we have the opportunity to kind of pick up the trash, we should do it.

USA: Thank you, CM. Next we have PHE.

PHE: Hey, yeah, I mean—I don’t really feel like this is very strongly motivated. There’s plenty of inconsistencies in the language, and you don’t actually have to look very far from this proposal to find them. We have Uint8Clamped arrays, but we don’t have Uint 16 clamped arrays, for example, why not? We have had TypedArrays for almost the entire history of the language that were completely consistent, and as a committee, we decided that Uint8Array would no longer—would differ from that by adding the hex and Base64 methods only to the Uint8Array. So not only are we not fix all inconsistencies, but we are content to create them. And so given how unbelievably obscure Uint8Array camped cases in the first place, I don’t think it’s really necessary to fix this. I understand it’s a small change, but I think it—it sets the committee in the wrong direction. So I really don’t think the motivation works for me. Thank you.

USA: Next on the queue, we have SYG.

SYG: I wanted to understand more of the use case. So, JHD, your use case was you said you had some TypedArrays and you wanted to use the constructor name of the TypedArrays to dispatch on data view methods?

JHD: Not the constructor name. So this is—the use case specifically is I am adding in polyfills for some TypedArray methods. I understand that for performance reasons, most people wouldn’t want to use them, but I’m doing it anyway. And in the course of doing that, I had to implement some abstract operations in my library for that. And the spec is written in such a way that it dispatches based on the name slot or whatever of the TypedArray. So I’m reading that and I’m pivoting on that to be able to do those operations.

SYG: But what’s the use case for that polyfill? Like, what is the polyfill? The use case—the polyfill doesn’t seem like a use case to me, but if user of the polyfill would be a use case.

JHD: Yeah, yeah, so this was—so I’m happy to answer the question. But the more I do, like, this isn’t something that—I think everyone is aware that I have—that I like have compatibility farther back than I think most people care about. And that requires me to write polyfills for environments that are similarly old or niche or less used.

SYG: Sorry, okay, to cut down on that, I’ll ask it another way. The alternative without this is that you would branch on Uint8ClampedArrays,.

JHD: Yes.

SYG: And that- okay.

JHD: For the getter. I mean, so to be clear, I’m hoping that all this not strongly motivated stuff is talking about the getter only. Because the setter, that logic doesn’t exist anywhere else, so I had to manually guess at it and recruit it. So even if there are people blocking the getter, I would hope that I can proceed with just the setter. But for the getter, yeah, that’s what it’s doing. It’s branching on it and it’s just literally using the getUInt8 when it’s Uint8Clamped.

SYG: That clarifies. Thanks.

USA: All right. That was the entirety—oh, no, we have a reply by YSV.

YSV: Yeah, if it’s for polyfilling an old browser, adding this to current implementations, wouldn’t you still need to do the branching?

JHD: I would be able to use the polyfill in those old browsers.

YSV: But you’re writing the polyfill and you need this for the polyfill, right? So then you would still need --

JHD: Oh, yeah, I see what you’re saying, yeah. The branching code still will need to exist somewhere, but I’ll be able to move that complexity so that the consuming code can just pretend it’s already there. But, yeah, I mean, I hear you that, like, this is why I haven’t gone into detail about the polyfilling use case to motivate this, because I understand that that’s not going to be compelling for most of the people in the room. And as you’ve said, it doesn’t allow me to actually delete my hacky code. It just lets me put it in a cleaner place, which is not a compelling reason for this room. It was more that I have the use case where I’m trying to dynamically dispatch on TypedArrays and this was a gap here.

YSV: Okay, so it does make it quite—because I’m trying to think of when else you would want to do something like, when you would really want to dynamically dispatch on every type of TypedArray and this branch would be a problem. But actually polyfilling would be a case, but I don’t think this solves that case, introducing a new feature to the language won’t solve it for older browsers. Because it doesn't actually solve your use case, it really makes the motivation weak for me.

JHD: Okay.

USA: Next on the queue, we have Peter.

JHD: I see an EOM. He’s clarifying that he’s talking about the whole proposal, not just the getter.

PFC: So I’m not particularly opposed or in favor of this. I’m neutral. But I just want to point out that earlier this year, we heard that built-in functions are a big resource bottleneck for V8, and we removed a bunch of them from Temporal. I think some of them were genuinely convenient, but there was a slightly more inconvenient way do it that didn’t involve adding a built-in function. And I would say I find at least the withPlainDate methods more useful than get and setUint8Clamped. So, I don’t particularly have an opinion about this, but I’m kind of confused why it’s not too much to add these built-in functions?

JHD: If there’s any implementers who have thoughts on that.

USA: Yeah, there is new topic on the queue by YSV.

YSV: I don’t have a lot of thoughts about this as an implementer. It’s a pretty trivial proposal, but it kind do have comes down to what are we actually solving here. Several people have raised that we shouldn’t just be filling in a Matrix. But because the stated use case wouldn’t actually be solved by this proposal, I would need to see a use case that would be solved by this proposal in order for it to move to Stage 2, because at Stage 2, we accept that the problem statement is real, and that it’s solving a real world problem. And that’s what we’re missing here.

JHD: Okay.

USA: Next on the queue, we have OMT. They also have a statement that says, "are there any examples of people publicly wanting this"?

JHD: Not that I’m aware of.

JHD: And then own the queue, we have Shu.

SYG: To answer PFC’s question, I think it’s just, like, a slowly boiling pot kind of thing. Temporal is huge. It crossed the threshold by itself, so that’s the concerted effort to cut that down. If Temporal was, like, 500 proposals, this probably would not have happened until you crossed the threshold at that point, so, like, because this proposal is pretty trivial, I as the V8 delegate have decided to not really expend much effort in blocking it on, like, data size concerns. But, like, that’s just because it is very small in itself. If it were bigger, then—yeah, it’s a usual problem of, like, how do you draw the line for what is too much in aggregate for the language, and that’s difficult. But certainly huge proposals get that scrutiny. And I don’t think that’s a principled answer, but that is, I think, the real answer.

JHD: So what I’m hearing is in particular, the comments about needing use cases that will be completely solved by the proposal so it’s not just filling in a matrix, that’s a fair point. I will have to put more thought into that. If the harder problem that I had run into other than not being able to dynamically dispatch was reconstructing the clamping logic, so it would be helpful for me to have the setter or some separate method that took in a number and spit out a clamped version of it without having to actually make a TypedArray and run it through there. So depending on the other use cases I find, I may suggest as an alternative path just adding a single, like, helper somewhere that gives me that clamping logic. But based on YSV’s feedback, in either case I would need to have use cases that it would solve that are compelling for the room.

YSV: I don’t, I think everything looks reasonable. It’s small. I think what we’re just missing here is taking the approach of how are we solving real world problems, and once we have a clearly defined real world problem, then…

USA: We also have a topic by PHE.

PHE: Yeah, the topic is just a question, which JHD, you mentioned that clamping logic has to be reproduced. I haven’t reread the ex in a while. How complex is the clamping lodge snick.

JHD: In the spec it’s not described with algorithm steps in a way that was easy for me to intuit, so the logic itself ends up not being complex at all. It’s more that it’s hard to get right and I would love to not have to think about it.

PHE: Seems like a great project for editors to improve the spec on that, no? That would help a lot, right?

JHD: I mean, that would be—that would help me reimplement it more easily. That doesn’t solve me not having to think about it, it just makes the journey slightly easier.

SYG: There’s like a one-line for the delegates chat.

JHD: Cool. Confirm that it matches what I had already come up with.

USA: And that was it for the queue?

JHD: Okay, well, then I guess I will just call it there, not requesting advancement, and I’ll either bring it back with more evidence or at some point, I will withdraw it completely.

USA: All right. Thank you, JHD. Now, I believe we have some time to fill.

### Speaker's Summary of Key Points

In order to advance, champion needs to provide use cases that are completely solved by the proposal; polyfilling is not fully solved by it. Current proposal is get + set; based on future presented use cases, other alternatives may include “just set”, or “just a clamp helper”

### Conclusion

The proposal does not advance to Stage 2 and remains at Stage 1.

## Discard (void) Bindings: Request for Stage 3 reviewers

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-discard-binding)

CDA: I think Ron is looking for Stage 3 reviewers for discard void bind,.

RBN: I realize that in, it was June, I did not—I failed to ask for reviewers at that time. I did have it on my slides for the presentation I gave yesterday, but we did not get to that bullet point because of the overflow or time box expired, so I’d like to quickly ask if anyone would be willing to volunteer as Stage 3 reviewer for discards proposal.

USA: Let’s see. Let me know about any volunteers in the room. On the queue, we have ACE, who is happy to review. Can we get, please, one more person. Okay, OMT on the queue says it’s their first time, but they’d be happy to review. I can remind you, OMT, there’s a number of folks around who would be happy to help you out. But, yeah, great. And anybody else who would like to also volunteer can reach out to RBN.

RBN: Thank you very much.

USA: And that’s it. Would you put in a quick summary, Ron, in the notes.

### Speaker's Summary of Key Points

ACE and OMT will review discard bindings for Stage 3.

## Smart Units stage 1 update

Presenter: Ben Allen (BAN)

- [proposal](https://github.com/ben-allen/proposal-smart-unit-preferences)
- [slides](https://docs.google.com/presentation/d/1WIinmXmkOvMvOUi4zAnH8qVNXPSE67uQEP6ptBXZLZM/edit#slide=id.p1)

BAN: This is just a smart units update, though it’s—I don’t know, we’re at a point where we’re getting feedback where what to include is very, very valuable, so I’m very much looking forward to doing this presentation. All right. I’m having slight problems sharing my screen. Okay, here. Give me just one second. It doesn’t want to share the individual… You can do it. You can share the slide show. I’m largely talking to Teams here, but there we go. Will it actually share in slide show mode?

BAN: Yes, fantastic. Okay. So you may recall that the last time we talked talked about smart units was in Helsinki, that was two plenaries ago, and it’s been put on the back burner and I’m ridiculously excited about. I think the people I talked about it with in TC39 and out in the world, this is a proposal and it’s really fun to talk about for technical reasons, sort of, but also primarily for sort of social reasons, figuring out what sort of things are important for us to include here. So the idea behind this proposal is, well, often when you’re localizing content, localizing measurements is really important because, well, the sort of, like, first step that we’re going to go a lot deeper into this, the first step is that the sort of intuitive one, if someone from anywhere else in the world is looking at temperatures on a weather site in the United States, they’re faced with the annoying problem of converting from Fahrenheit to Celsius in their head. Additionally, like, metric versus imperial, well, we kind of think about in terms of, oh, well, the United States uses this weird imperial system and it’s used sometimes in Great Britain and then the rest of the world uses metric. But as we’re going to get into, it’s a little bit more nuanced than that. And this proposal addresses those, like, interesting, cool nuanced things.

BAN: Okay, I promise that every single time I present on smart units, let’s say until it gets to Stage 4, I will be including there flowchart. I enjoy it a great deal. Hopefully it—if not useful, at least entertaining and at least handy for all of you. I have heard from actual Canadians that this flowchart for how to measure things like a Canadian is in fact very simple, and if you want to properly be a Canadian, there’s many, many other thing us have to decide when considering whether or not to give a measurement in metric or imperial. So Canada is maybe sort of—it’s the poster child for this phenomenon, but it happens in a lot of places. A lot of places where there are differences in what measurement scale you use to represent a measurement. that go beyond just, like, oh, we use metric rather than imperial. My favourite line in this is "is it the pool’s temperature?".

BAN: Okay, so as discussed at previous time, preferred measurement system and scale in a given locale converted based on, well, the locale, but it can also vary based on the type of thing measured, so it’s common in many locales for—more typically use metric use centimeters and millimeters for the metric system for measurements to give the height of people, using feet and inches. So there’s that special case. And the special case can occur based on the type of thing that’s being measured. But also bracketing off the sort of, like, immediately apparent metric versus imperial thing, measurement—the measurement scale used to represent a measurement can vary based on the value of the measurement itself. And this sort of—the most intuitive—the sort of most obvious place that this shows up is if you’re giving the distance to something by a road, if you’re giving the distance to something, you will tend to use different units based on that distance. So in the United States, if I’m giving the distance of something that’s, let’s say, less than a third of a mile away, I will tip equally or it’s customary to give that measurement in feet rather than miles. In shows up in other contexts too. To steal the box from the how to measure like a Canadian flowchart, it is not rare to switch measurement scales in day-to-day life based on—for math based on the mass itself. There’s also the context in which the measurement is used. These are some of the funniest ones in the how to measure like a Canadian flow chart.

BAN: But so the things that we’re trying to support here are properly localizing measurements, to properly localize measurement values based on the type of thing that’s being measured, the value of the measurement itself, the -- in most cases, the context in which the measurement is used is note something we’re going to be concerned with here, as I’ll talk about at length. Basically, we don’t want a maximalist implementation of this. Sort of like more what’s the right word, parsimonious implementation is for reasons I’ll get into, is a very good idea. So we certainly aren’t concerned with—we have no particular interest in ore placing—in being able to do everything a Canadian can do. We’re not proposing that Intl support being a Canadian. That came out really weird. But in this case, we’re not going to be concerned with the more esoteric ones. The usages that we want to mark as localizable, as being localizable measurements, we’re going to use a very limited set. I’m going to the next slide.

BAN: So to give some context on how we plan to do this. CLDR has some pretty extensive data on context and value or thing measured and value dependent locale measurement customs. This is from the file units.xml in common/supplemental. This is a relatively small file. I think this is, like, the—we’re only adding 8KB in we were including everything. But, so, yeah, this data exists in CLDR, and it’s fairly extensive or at least it’s extensive enough for our purposes. And the thing I want to really call out here, the reason why I want to lead talking about category lane usage person height, this one really well illustrates that this isn’t about purely, like, localization in terms of converting between metric and imperial. It’s not about just oh, there’s one special way of doing things in one specific locale or one specific region, and everything else does it differently. If we’re talking about the proper culturally respective of culture way to give the height of a person, it is most common for that person to give their height in centimeters, but in the United States, great Britain and a couple of former commonwealth countries, it’s so much more typical to give feet and inches, giving height in centimeters would be incomprehensible. And although it wouldn’t be incomprehensible to give a height in centimeters in any of these regions, it wouldn’t seem idiomatic. It is sort of of a localization fail. It would seem like it something from somewhere else rather than something from a local. So even if imperial didn’t exist, even if we could, like, snap our fingers and have the United States get with the rest of the world, we would still be concerned with things like this because of those differing preferences in regions that both use the metric system for certain types of measurement.

BAN: Something I want to call out, and this is something that I’ll discuss at much greater length after the break, something you may notice is that, oh, yeah, often the cultural preferred way to give certain types of measurements is using mixed units. So not -- so if you’re giving the height of a person who is 3 feet tall, basically this is what is used for height of adults and this is what’s used for the length of infants and the height of small toddlers. You’re going to be using feet and inches instead of just inches. So in the measure proposal I’ll talk a lot about these units and I’m going to leave that.

BAN: I promise to use the how to measure like a Canadian flowchart in every single presentation about smart units. I don’t promise to use this cartoon in every single presentation about smart units, but I’m tempted to. But I might be able to resist it. This joke is clearly written in American for reasons I’ll get into. But it can illustrate how incomprehensible measurements can be if they’re given in the—in wrong units. And especially, like, this third panel, which is kind of—because it shows that even if we’re not dealing with, oh, well, this locale uses imperial and this locale uses metric, even just inside regions that use imperial for most things or regions that use metric for most things, there’s still a need to localize measurements because often—and often and kind of often with the most commonly used sorts of measurements, there’s going to be a desire to put them in mixed units.

BAN: The other thing that—the other reason I why like to use this cartoon when talking about the smart units proposal is, well, so far we’ve talked about properly localized—giving measurements in properly localized units and scales. But also precision is a key concern. The reason why I said oh, I’m pretty sure this was written by an American or at least someone from North America is that correct me if I’m wrong, it would be kind of weird in most places that give heights in centimeters to give two digits after the decimal point when giving your height. So in the case, I would argue that even though—I would argue that this is kind of not localized to anywhere, because even places that give heights in centimeters, well, typically don’t give heights with two digits after the decimal point. It’s far too precise. Okay, so what we want to do is we want to add to number format the ability to specify usage. I’ll get to the API, which is fairly simple, towards the end of this section—or this talk.

BAN: We want to support a small subset of these usages that are locale specific variations in measurement scale, measurement unit used. We want to support a small subset of them by adding a usage option to number format. There are many reasons why we want to use a small subset. But one key one that came up in discussion both during the actual plenary session and just private discussions, one issue with this is discoverability. We don’t—there are many, many reasons why we don’t want to implement every usage that’s given in CLDR’s said XML, but one sort of primary one is, well, okay, say that your locale doesn’t have special handling for this type of usage. You actually have no reason to suspect that it’s going to be worthwhile to mark that measurement as being that type of usage. You’re simply not aware that, oh, in some locales, this is going to be a localization problem, so hear trying to focus on is a small set of units, because, well, the small for set of units is, the easier it is to find it. But also, this small set of units should be stuff that is used sort of as universally as possible. So, yeah, I’m going to in the next slides propose a set of units to set of usages to include them in this proposal. I have been composing this list, I’ve tried to err on the side of including too many, actually. I’ve included in this presentation more usages than I would necessarily, if I were just, like, willing this into existence myself, include. So one of the reasons—one of the sort of types of feedback that I’m most interested in is actually, player which ones of these can be removed? Which ones can be safely cut away, which ones should be cut away. That said, obviously, if there’s good arguments to include other sorts of usages, I would love to hear them. And they’re not on the slides, but there’s some sort of, like, hmm, just barely on the bubble usages that we considered and dismissed. But if there are other usages where, oh, actually, there are serious localization needs related to localizing these particular measurement and we should, you know—even know, they might want to prefer a small subset of parsimonious implementation or a parsimonious definition, there may be things that oh, yeah, we should add it. But my sort of, like, leaning is towards removing usages rather than adding them.

BAN: Okay, so the units—the next few slides, and apologies for all of the pictures of text on this. The sort of first one that comes up, the first one we consider, the one that’s just, well, obviously in is something to include, is as in that cartoon, the heights of people. It’s a type of measurement. It’s a type of measurement that sort of comes up very frequently in people’s day-to-day lives, and it’s a type of measurement where it’s one of those ones where there’s variations other than just imperial versus metric. Most notably, most regions prefer to give heights in centimeters, but many regions prefer this mixed meters and centimeters unit. And, again, if you give—if you give someone from one of these regions content that gives people’s heights in centimeters, they’re going to understand it. But it’s going to be an annoyance, it’s going to seem not properly localized and seem that this content was not made with them in mind.

BAN: Another one that is sort of a type of measurement that in so far as anything in this world is across all humans, across all type time, it’s a type of measurement 245 all humans across all time have been concerned about, which is the distance from one thing to another. If you’re travelling from one place to another, how far is it. And this is one where properly localizing it can be fairly complex, because it varies not just on the region, not just on the usage, but on the value itself. So as I said at the start, if I’m giving—so this GEQ attribute, in the case of threshold, so the CLDR has this set up is, okay, well, if you’re above this threshold, if you’re above one-half of a mile, then you give it in miles. If you’re above 100 meet and under half of a mile, it should be given in feet. And this is, well, feet, if you’re in the United States. Also, there’s this precision increment. So if you’re giving the distances from one place to another, if the places are very, very close, you’re likely to give a more precise measurement. If they’re thousands of miles away, you’re not typically concerned with the ones unit. There’s also—I have give myself permission to mention this second time even though it’s an interesting unit. It is actually—there are reasons to sometimes give these measurements in this—in this scale. I’ve—what I’ve read is that in Sweden, sometimes it’s used on some tax forms, but the Scandinavian mile is equal to 10 kilometers. It’s roughly equivalent to the Roman mile. On the English speaking Internet, when the Scandinavian mile is mentioned, it’s most often mentioned by angry and confused highers who think that they’re going on a 1 mile hike and actually going on a 10-kilometer hike. That’s one case where you can see the importance of giving measurements in a properly located localized scale. And in properly localized units, because although there are many cases where you might want to use the Scandinavian mile, you don’t want to be giving a Scandinavian mile to people outside Sweden, generally.

BAN: Another type of measurement that we want to include or another usage that we want to include various speed measurements. CLDR’s fairly exhaustive, has fairly good data on how the measurement scale used for different types of speed varies from the one used for other sort of—other sort of speed. Most of them concern weather, which is something I’ll come back to. And, again, this is another one where it’s not just a matter of the United States or the United States and Great Britain versus the entire world. It is most common across regions to give one speed in kilometers per hour, but in many regions, including some very large regions with very large populations, it is more common the give it in meter per second, and unlike converts from measurements in centimeter to measurements in meters and centimeters, which is, you know, straightforward conversion that you can do in your head without thinking about it very much, converting from kilometres per hour to meters per second is a puzzle. If you’re given a value, if you’re looking up the wind speed if you go to a weather site, trying to figure out how windy it’s going to be, either because you’re flying a kite or you want to play a board game outside or you have a hurricane bearing down on you, you can get your—the wind speed in meters per second and expecting kilometres per hour, you’re not going to know what do with it. So this isn’t just a paper cut. This isn’t just a oh, this content seems like it’s not for they, it’s this content very much excludes me and I would very mump -- the thing I’d very much like to know about.

BAN: Another one, that seems like the very, very, very high priority one to include is the weights of people. This one, this one is, how do I put it? I consider—let me go back. I considered this particular example (wind speed) as one of the better ones. This one (person weight) kind of just breaks down to metric versus imperial. That said, there is the extremely charming stone unit used for giving the weights of people in Great Britain. But that said, even though this is a less interesting, so this is—there’s less cultural complexity in this measurement, it’s also a measurement that you do in your day-to-day. It’s very important regular measurement, and you’re going to want that measurement. You’re going to want users of your content to receive that measurement in a way that they can understand and a way that they find welcoming. And the mass in general. Again, this is another one where it’s sort of metric versus imperial. It’s less interesting topic of conversation, but despite being a less interesting topic of conversation in practical terms, localizing measurements of mass, measurements of weight is, like—it’s very important for making your content properly localized. And the last one is just temperature. This is kind of the most boring one. It’s the one that breaks down most clearly into United States versus rest of world.

BAN: So, yeah. Oh, yes, one more. CLDR also has a lot of information on volume. One of the ones where—this is one of the ones where it’s like, if I’m taking a hatchet to this and saying, we want two use a very, very small number of—allow for a very, very small number of usages to to be to be localized, then volume is one I would probably cut. But it’s also useful. I guess the reason why I feel like I’m biased against this is that even in the United States, for many uses, the old imperial system is falling out of favor.

BAN: And finally, area. This is another one where it’s fairly timeless and universal. Everyone everywhere throughout all time has wanted to talk about area in some way. CLDR has data on the customary scales, the customary units for area in land. So farmland or what have you. And in area for floor plans. So, yes. So this sort of breaks down all the categories, measurements related to people’s bodies, these ones are the most high priority. If we end up only supporting these, it would be a fairly major win. Measurements related to weather. It’s something that comes up on a regular basis and something that a lot of people want to—it’s content that a lot of people are interested in and it’s content that’s important to localize correctly. Measurements related to travelling on roads. Again, incredibly common. Incredibly useful to get this properly localized. And just general temperature, volume, area, mass, sort of the fundamentals.

BAN: Okay, so the proposed API is essentially unchanged from last time. As I said at the start, it’s fairly straightforward and fairly simple, and I realize I am leaving 7 minutes for questions so I’ll try to talk faster, so, yeah, it simply essentially we’re going to add a usage option to the options bag for number format indicating that, oh, this value I’m giving you isn’t just a bare value, it’s a measurement and more specifically the measurement of a person’s height. So drawing on that CLDR data, the person height will be represented in the appropriate units for that locale, be it centimeters, meters and centimetres, or feet and inches. The sort of intuitive names for the values of the usage option are, well, the ones from CLDR. If you look back, there’s another number of ones, those are the default is given and then the more specialized—the more specialized usages where that category are added. So for ones where the names are default, the value for usage should be the category. And when it’s not the default usage for that category, the name should be until there’s better names, the names should be value of the usage attribute from the CLDR data.

BAN: The output and rounding will be determined by the locale, the usage, the input unit and the input value, CLDR fortunately has the data on precision. So this is what it could look like in use.

BAN: Now, there is a big unanswered question, and that big unanswered question is one we’ll have to consider after lunch, so wait, a second, if we’re localizing measurements that means we’re going to convert values between measurement scales. Yeah. So fortunately, unit XML does contain the conversion constants for all of the relevant conversions. It is straightforward for our localization tool, for our thing that’s in 402, to draw on that data and do those conversions. However, and this is something that comes up very frequently with internationalization tools, if you have a tool that is for internationalization, but can be used as a pinch for things other than internationalization, users will do that, and there’s many horror stories of developers using internationalization tools to do things unrelated to internationalization, and finding that their sites, their applications work until they don’t. So the sort of—the big problem that’s blocked in is, oh, well, people are going to use it. So when we last presented it, one idea that came up was, well, what if we just provide outside of Intl, outside of 402, a measurement conversion tool that can do the things that the—specifically the things that internationalization, that smart units can so people can go use that instead of the internationalization tools.

BAN: Also, I didn’t put this on the slide, so also representing those mixed—the measured proposal, which I’ll talk to you about after lunch, is also needed to do those mixed unit representations. So the measured proposal, which we’re going to get to, it’s an object to represent a measurement that can support mixed units, that can support specific precisions, and that can do the unit conversions that the Intl tool can use. One reason that we’ve split this out into its own thing, as we’ll discuss, making measurements proposal is inherently worthwhile because there’s demanding for this outside of the relatively narrow demands of smart units. I realize, that as predicted my slides took more time to get through than anticipated, but I’d like to go over to questions for relatively short questions, and we will almost certainly run out of time, but fortunately when we come back from break, there’s going to be the talk about the measurement proposal, which is kind of the second part of this talk.

USA: All right. Let’s go to the quick—real quick. First we have a clarifying question by WH.

WH: Early on in the presentation there was a slide with length measurements related to persons. There were two different ones: length in context of a “person” and length in context of a “person-height”.

BAN: Yes.

WH: I know what the length of a “person-height” is, but what does the length of a “person” measure?

BAN: Thank you for catching that. Okay, so CLDR has data for person height that’s in the US, for example, feet and inches, and the second one for length—that’s person length. Person length is typically used—that’s, if I recall correctly, that is used to give the length of infants. So person height is, this is how we talk, this is the measurement scale we use for the height of this person you’re going to stand up, and just person length is the length of someone who is very small. And typically doesn’t stand up.

WH: But you have that logic already encoded in length of a “person-height”: if it’s less than 3 feet, then it produces the result in pure inches. So what’s the difference?

BAN: Oh, I’ll go look at it. Does somebody want to --

USA: Also there’s a response by SFC on the queue. If you’d like to go to that.

SFC: Yeah, so the person—the person-height is a way for a CLDR to specify, for users to specify that they’re interested in person’s height as opposed to other measurements of a person, as opposed to waist size or wingspan or other ways you can measure a person. Person height specifies a height of a fern. Well person is if you don’t have the additional context, liking, this is the best measurement you can get there. When CLDR adding an extra subtag in the usage, it makes it more specific.

BAN: SFC, thank you so much for that.

USA: WH is on the queue again.

WH: A question about the precedence of units on different lines. Is the first line that applies the one that’s chosen? Several of the presentation slides show examples, in the same countries, that you can measure mass in tons or kilograms or micrograms. How do you decide which line to use?

BAN: So that’s a very good question. I’ll have—I believe the way the data is organized is that the entries farther down are the ones that are less commonly used. I’m not certain about that, though. I do not know if there’s CLDR data about, specific data about what is most commonly used, though. Like, I don’t—I kind of have to defer to people from different locales, for example, I’m not sure how common it is for the weights of people to be given in stone in the UK. So, yeah, that’s a good question, though.

USA: All right. That was the entirety of the queue. I would say that we’re over time now. So unless you have to add something, let’s quickly summarize. And, yeah.

### Speaker's Summary of Key Points

I presented a list of usages that we’re considering having as part of smart units and received some very useful clarifying questions from WH on which units would be preferred for which usages in which regions when there’s multiple options.

## Measure object stage 0

Presenter: Ben Allen (BAN)

- [proposal](https://github.com/ben-allen/proposal-measure)
- [slides](https://docs.google.com/presentation/d/1yakKCsS3pR0T7eJcaJD2ZUzK6xG6FcoFnrmngkJUcEo)

BAN: I apologize, some of this is fairly sketchy just because based on feedback related to decimal and number position, I found the need to make some last-minute changes to the proposed API. So what’s presented in the slides is fairly sketchy, and what’s currently on the explainer is inadequate for reasons that I’ll get into. But what we’re doing here is asking for Stage 0 for exploration, so hopefully that’s not too disastrous.

BAN: Fantastic. Oh, before I get going, I have to apologize. I was confused by the questions at the end of the last session. So if you look at the specification for unit set XML, basically when provided with a unit, there’s an implicitly that GX attribute is one. Oh, how can I phrase this so that it’s clear? Basically, if someone has provided a value in stones, say, it would present it in stone. If there is no value given, it will be sort of like the previous one that’s in the specification. So, yeah, it’s not that they’re more common units or less common units. Those are the units used in that locale. And also for some units, there’s the GQ figure value that’s something other than one, so, for example, the road distance is the clearest one. If you’re given a value in miles, but that value is less than half a mile, the result will be in feet.

BAN: So, okay, without further ado, I’m going to talk about the measure proposal. Again, a lot of this is influx. It’s influx based on things that I’ve talked about with the decimal people. But, so, this proposal is inspired by smart units. It’s inspired by the need to do unit conversions and smart units. And the need to avoid in so far as is possible people misusing the conversion tools provided in smart units to do things other than internationalization related conversions. That said, the reason why we split this out into its own proposal is that there’s—it’s applicable to a number of other contexts. It’s actually—it’s—even aside from the conversion stuff, it’s kind of generally useful because it makes it much easier to keep together units with values—values with the units that they’re denominated in, which is a very common task, and sometimes, like, with the current state of Intl tools, it’s fairly clumsy do that. Ideally a fully flushed out version of this proposal would extend number format method the take a measurement so that you don’t have to always set a separate currency property, for example, when formatting currencies.

BAN: Okay, so as you may remember hearing from your introductory physics teacher when you were 13 or 14, measurements don’t make sense as value, it’s a value and a unit of measurement united, and as such, it’s relatively common the keep track of measurement units and objects, and we want to make this as easy as possible. This a fairly common problem, the value of a measurement and a measurement unit are fairly insufficient because you don’t want to imply that your measurement is more precise than it actually. So measurements will often need to come along with a precision. In most of Intl, the way that we handle precision is by using decimal strings. I don’t believe that’s done anywhere else in EMCAScript. So this would be sort of unit measurement, as I understand it, to use decimal strings to store values here, so this allows it being able to specify precision allows us to do that while still, like, storing values as just numbers. Okay, and, again, so this isn’t the most exciting need. I really like thinking about making it easier for users doing, I don’t know, physic simulations to keep together units and values. I like being able to more elegantly handle currency. And while I like it when people don’t abuse internationalization tools, I know that they will down the road get themselves in trouble if they do that. So there is a need to provide, if we’re going to have this smart units proposal go through, there will be a need to provide the conversion functionality that’s present in smart units outside of 402 so that people will use that instead of abusing the internationalization tools. I’m realizing I’m talking very negatively here, but also it is just objectively useful to be able do certain types of conversions.

BAN: Okay, so one of the really key reasons why we split this up from smart units is it can be useful in contexts like MessageFormat. There are a lot of—pardon, there are a lot of contexts involved in internationalization and also outside internationalization where you need to keep track of currencies and the denominations together. It can be error prone and kind of, like, hackie, some of the things you have to do to properly—I’m more aware of the internationalization context, so to properly format currencies. But it goes beyond display. It goes beyond formatting. Yeah. Okay. So I’ve got a link here in the slide to a discussion that sort of, I think this discussion was the proximate cause of having the separate measure discussion. But, yeah, it would be very nice to be able to pass a value or currency code value in currency code pair into number format and receive properly formatted output, and outside of the context of displaying localized text, it’s just generally useful to be able to keep those two pieces of data, which don’t make sense without each other, in the same place.

BAN: And as discussed at the end of the smart units proposal, it’s common for some measurements to be given in mixed units. And keeping track of mixed units is—it’s an imitation error, so we want to make this as easy as possible for users. As I said, I’ve been doing some last-minute revisions to the proposed API, so the proposed API, feel free to think of it as a placeholder. I’m not presenting this to advocate for a particular design. I’m presenting this to get a feeling of what design would be useful for people, and there’s a couple of decisions where it’s not immediately obvious what the right thing to do is, and that’s why I’m bringing this to plenary.

BAN: Okay, so given that there needs—that unit exists for having an object that bundles together with the values for the additional information to make sense, we need an object to measure this. It needs to have more to the subsequent sides. It needs to have the value, it needs to have the unit, so the value could be a number, it could be a BigInt, it could be a decimal string potentially. We need the unit, a string, indicating what unit this measurement is in. And an optional value, the precision of the measurement. In terms of design, the reasons we’ll get into, it’s—my first thought is having the value in the precision in an options bag, for reasons we’ll get to in a second. But it’s more complicated than that because we need to handle mixed units. And mixed units, it’s an obvious need in the context of smart units. It also exists in other contexts. Again, the currency context is the one that sort of springs to mind most immediately. But I am absolutely certain that keeping track of mixed units is useful outside of either the context of smart units or localizing measurements and outside of the context of handling currencies. So the version that I was frantically scrapping right before the meeting, apologies for that, is a version with the following properties, a value, an optional minor value, a unit, a minor value unit, which these names are not necessarily good, and an optional precision. One—the thing that makes the most sense in the context of smart units would be to have, if we have a mixed unit—if we have a mixed unit measurement, to use the name of that mixed unit as the unit property. So unit could be feet, it could be inches, it could be meters, it could be centimeters and hyphenated feet and inches or hyphenated feet and centimeters. That might not be the most elegant way to do it for other contexts. We’ll get back to it. And you’ll see this assumes one question that I have is this assumes that if we have mixed units, there’s only going to be two units involved in the mixed unit. So feet and inches and meters and centimeters, but not kilometers and meters and centimeters.

BAN: Measure would have a method `convert` that takes the unit and a precision and returns a new measure in that unit and at that precision. If for mixed units we were doing, say, an array of units, it would take in that array of units. And then for the original internationalization purpose, there would be additionally a locale convert method that takes a looks at how and usage. The usage could be optional and which returns a measure with the value converted to the locale appropriate usage appropriate scale. And the sort of secret that’s not a secret is that this method what are—like, this is from whence the entire proposal emerged.

BAN: So the current, very sketchy design, given in the current version of explainer presupposed there are two units involved in mixed unit representations. It does that, because, well, it’s not a great reason, it does it because it covers all the reasons required for smart units and covers almost all situations involving currency. But off the top of my head, the only semi hypothetically commonly use case where there would be mixed units with three components I would can think of is old style United Kingdom money was the LSD version before they decimalized their currency. There are likely other more relevant cases, and in this case, the sort of most intuitive thing would be for measure to store values and units into arrays. One entry for each of the units for—and lack of a better name, one hinge that came up in discussion is a method just called splat that will return those arrays.

BAN: A question beyond the API design question, question that gets to the more fundamental what should this thing be or what would it be appropriate for this thing to be, what conversions should we support? So my initial first impulse, but that impulse is sort of—that impulse is clearly coming from me thinking in the smart units context, is that, well, okay, this is a tool that we produce to avoid misuse of the internationalization tool. It’s something that makes sense in the language in the context of internationalization. JavaScript is kind of The lingua franca of the world, nearly as much as English is. And so internationalization is particularly important in the context of JavaScript. And being able to properly localize measurements is crucial for ensuring that content is localized in a way such that it is both comprehensible and sort of culturally appropriate for all users. But, okay, we will have to/get to add this measure object with conversion functionality for use outside of the context of internationalization. So if we’re thinking of this as, oh, okay, well, this is a thing that we’re sort of stingily adding because we know if we’re don’t, where we’re adding something else for people to use so they’re not tempted to use the internationalization thing for wrong purpose, well, then the conversions has to support precisely those conversions that are required for an internationalization tool. But there are other ways to approach it we can support all conversions that need to be made using CLDR, for example, so I’m looking forward to your feedback. The proposal as it stands is very, very Stage 0. We’re looking for the feedback from the committee on design decisions, but more than design decisions, I’m looking forward feedback on, well, what do people both in and outside of the internationalization context, what do people think something like this should be, what do they think something like this could be? So, yeah, I’m going to hand it over for questions now. I’ll also welcome questions about the earlier smart units proposal, earlier smart unit presentation, just because we were—we had a bit of a time crunch there.

BAN: This is a move that I’ve done while teaching sometimes - I reserve the right to say something wrong so that people will dive in to give the right answer. I believe there’s an XKCD about that being an effective way to get the right answer on the Internet, I’m perfectly fine with discussion evolving away from me answering questions. Essentially I’m here to ask questions for you, and I don’t want to get in the way of your questions.

SFC: Yeah, so I wanted to give some additional commentary on this proposal and the motivation and the high level roles for this proposal. So there’s been three different problems that we’ve seen that this proposal attempts to solve all three of those problems, so the first problem is the most concrete one and the one that BAN discussed in his presentation, which is the smart units proposal requires unit the conversion and by requiring—since it requires unit conversion, we would need to be able to, in order to prevent users—developers from, like, you know, basically abusing Intl API to get unit conversion behavior, we need give them a nicer way to do it so that they don’t abuse the Intl APIs. EAO talked about this principle multiple times before, and I talked about this principle before, so this general principle is if there’s any new type of functionality that is in an Intl API, it will be abused by web developers, and therefore, we need another way to let them do it. So that’s the first and most obvious one. But then there’s two more use cases here. One is, you know, working toward the message from my proposal. You know, which, you know, wants to be able to, you know, have a -- have a number with unit context in order to, you know, produce formatting for that unit. Now, you know, obviously the MessageFormat proposal is also still at Stage 1 and there’s still some open questions there, but just to get some context, that’s idea of how the fits in. And then I think the third and most important use case and why it’s I think for really important for us to discuss at this meeting and I would like to have additional time to—I would like to open this discussion with the group, I don’t think BAN was—BAN mentioned this a little bit in his presentation, I want to emphasize that, this is also a way for us to solve the, like -- what is the basically the input type to Intl formatter that carries a numeric value and precision that you’re formatting with and the currency. This is the like, canonical type for any numeric value with a dimension. One previous name we thought about this it’s a dimensioned value, right? I think YSV said yesterday something about maybe working more with HTML and see if there’s an HTML input to for this, and see if is that would be the foundational piece for that. This could be used to solve some of the use cases of the decimal proposal, right? Which is we want to be able to have a way to represent a currency value. If you want to represent, you know, $100.50 exactly, you could do that with this proposal that BAN is proposal right here for—he says it’s for Stage 0. I would kind of like it to be for Stage 1, but, yeah, this proposal that BAN is presenting here, so those are the three sort of big use cases. And I think all three of those are really important, and I think that, you know—this thing that makes me excited about this proposal is it sort of starts to lay is groundwork for how we look at numbers and numeric values in EMCAScript and perhaps more generally in the web platform. And, you know, I think this is a discussion that, you know, is really important for us to have and sort of have this big picture. I was talking with this yesterday with the decimal proposal. You know, we can take sort of narrow approaches here and there, but it’s an opportunity for us to have a big picture approach for us to solve this problem.

BAN: SFC, thank you so much for highlighting the—you know, I alluded very briefly to having the format method of number format take one—take a measure. A lot of—I don’t know, from someone who has spent too much time at it in respect, having a thing—having the measurement or a dimension unit would make things clearer from the spec, writer perspective. That’s not the most important perspective, right, and being clear from the spec writer perspective is because it’s clear from the user perspective rather than passing in a bunch of sort of disparate options for—that are associated with the value, just being able to pass in the value with everything required to make the value make sense, it makes for cleaner code.

WH: What is the story about measurement units which are not in base 10 such as small length measurements in the US? If I’m supposed to use a 7/32” drill and you give me that as the decimal fraction 0.21875”, it will be really weird.

SFC: I can reply to that one, which is CLDR—there’s CLDR issues open about this topic. And basically this would be a formatting layer concern, right? So, like, after you pass your measure into Intl number format, then Intl number format would be like, oh, look, this unit in this locale, it’s more conventional to represent this as fraction, right? That can possibly be, like, you know, a display preference. So—but that’s definitely more of a formatting problem, you know, a display problem, because the actual quantity is the same. And, you know, I’ve had this sort of distinction before between what’s the quantity and what’s the quantity layer versus what’s a formatting layer. And this is definitely a problem more in the formatting layer.

WH: Okay. We also have my next queued question, which is about the talk right before the break. The selection of units seemed fairly sparse. For example, for area units, you had hectares and such, but not square kilometers. In the US you had acres but not square miles.

BAN: That is an artifact of the presentation rather than the data. If I recall correctly, and others correct me if I’m wrong, in the slide set, the sparse—what you’re describing as, like, the sparse set of options, those are for specific usages. There’s also a default usage for area that contains what you’re talking about.

WH: What’s the threshold for switching from acres to square miles? Is it one square mile? Who gets to decide that?

BAN: Yeah --

SFC: I can answer that, if you want. So the—so terms of acres and square miles that’s what the GEQ equal to parameter is there for. If it’s not explicitly printed it’s one. And UTS35 declares a fallback algorithm for—or declares the algorithm for how you select which one based on the magnitude of the input.

WH: I understand how that works. My question is, who picks the thresholds?

SFC: CLDR does. Mark Davis, as well as all the translators who give input into the CLDR. If we think that the thresholds are wrong, then we can open a CLDR issue and discuss that in that body.

WH: My concern is not necessarily that the thresholds are wrong. It’s just that the thresholds might differ depending on your use case.

SFC: Yeah, so I mean, that’s what the usages are for. So the thresholds can and do differ between usages and between locales.

BAN: And correct me if I’m wrong, when they’re picking those thresholds, CLDR tends to privilege first-hand reports.

WH: Okay. I’m also curious if any of these things measure area in football fields?

BAN: They don’t measure in football fields and don’t measure in Rhode Islands and don’t measure in Luxembourgs either.

WH: That’s good!

YSV: Right. So SFC and I were talking about this earlier and also he just made the comment about that discussion where we were talking about the separation between data and view, and the discussion about this is in input, general input towards various types of formatters. I think that makes a lot of sense. I think something like that feels appropriate for something that lands into this sublibrary of the language, which is internationalization. A concern we’ve been having at Mozilla has been the amount of formatting and display work that’s been going on in Intl. So something like this makes a lot more sense to me, something that allows to do calculation or acting on values makes sense. And allowing to work with those values in a programmatic way really makes sense. This is part of a much big you are discussion we’re going to have directly with Intl, I want to say I do support this kind of direction about thinking about internationalization in the committee.

SFC: Yeah, I put up another queue item, which is, you know, I think it would—you know, I know that BAN put this on the agenda as Stage 0, but I was sort of hoping that, you know—I would like to have some discussion from delegates other than just myself and BAN and WH and YSV about, you know, what we agree—what I think is the use—the most useful problem space, if you agree with the problem statement that I made earlier in the queue here or, you know, some of the things that Ben has put on his slides. You know, I would like to see us, you know, continue the basically actively engage. I mean, that’s what Stage 1 is for. So I guess, you know, I’m, you know, hoping that maybe we could achieve stage one on the problem statement, the problem statement being that wasn’t to design a—or we want to explore the space of having a type that is able to encapsulate both the numeric value as well as attributes of that numeric value, such as the currency, the unit, and/or the precision of that value, and then have that be fed into—and have that integrate with Intl formatting APIs, so, like, if that type of problem statement is, like, something that we think we should continue to spend time exploring as a committee, which I certainly hope it is, that seems like something we should ask for Stage 1 for.

BAN: Yes. I’m regretting putting up for Stage 0 at this point just because I thought that there—like, I’m extremely pleased to find this that we’re hearing for having—having measure be something more than just internationalization.

YSV: I mean, SFC just said you didn’t want to hear from me, but so we are discussing it and usually what I see is Stage 1 is as the barrier for Stage 1 is this is a problem area we need to explore further. Has this been presented already for Stage 1 and been rejected for some reason?

BAN: It has not been. This has just been split off from smart units.

SFC: Yeah, this is a—so when Ben gave the presentation in Helsinki, there was feedback from a couple of delegates that we should think about having us put a proposal, and that’s what this is.

CDA: That’s it for the queue.

BAN: All right. I’m going to ask an embarrassing presenter question. This was put on the agenda for Stage 0. There’s a sense I’m hearing from SFC and YSV that this is actually something more appropriate for Stage 1. And I’m guessing at this point it’s not possible to pivot and ask for stage Stage 1, but I feel compelled.

CDA: It is possible. Somebody could block solely on missing the deadline, but if nobody wants to block on that, you can get stage one, you can ask for it.

BAN: In that case, I have tremendous respect for anyone who blocks and I’m tremendously excited for people who don’t. I would like to ask for Stage 1 on measure.

CDA: Do we have any support for Stage 1? Ross.

RKG: Sure, I’ll just say what I wrote, is which is we’re already talking about it, we’re going to talk about it again. Let’s call it Stage 1.

JHD: Yeah, echoing the same thing. If we’re ever going to hear about it again, it’s probably Stage 1. Let’s do that.

YSV: Yeah I don’t have any objections to this, the exploration and the problem space, and I think it’s appropriate to ask for Stage 1.

CDA: All right. Support for Stage 1. Are there any objections? Seeing nothing and nothing in the room, so congratulations, you have Stage 1.

BAN: And I just want to say, thank you all so much. This --

BAN: I was just going to say, smart units and then, like, this and smart units, all the things that I’ve worked on with this committee, they’re ones I’m most personally excited in, so this—this is extremely happy making. Thank you all so much.

CDA: Great. PHE is on the queue. Supports Stage 1. Interesting for embedded. Next we have Shane.

SFC: Yeah, so I would like to, you know, continue to—just to, you know, iterate and evolve on this proposal. You know, between meetings I would like to see this proposal, you know, like -- I feel like this is kind of a big problem space, so I want to, you know—I feel like there’s a lot of ground to cover, so I wanted to maybe get a list of delegates who are maybe interested in at least say staying in the loop on these things, if we could, you know, you know, set up some additional time to discuss this, you know, also relates to decimal and some of the other numeric related proposals. So I just heard PHE’s possibly interested. The four people who actually made comments today, I assume are going to be included in that. I heard JHD make a peep, so I would like to have JHD involved with this, because, you know, I think that YSV have a lot of, you know, well informed opinions on numerics and how numeric types are handled. So, yeah, it looks like JMN is raising his hand in the queue. If there’s anyone else that I’m—I haven’t listed, you know, I would definitely like to sort of make a numerics -- numeric representation working group, if—well, not really, but maybe we can call it that. I’m not exactly sure what to call it. But I would definitely like to see this continue to make a lot of progress over the next couple of quarters.

CDA: JMN, count me in. Did you want to speak? No. Okay. That’s it for the queue. And so that’s it for this topic. Thank you, BAN. Yes, thanks for the reminder, ACE. BAN, you can please dictate a summary for the notes. Key points.

### Speaker's Summary of Key Points

Plenary has decided to approve the measure proposal for Stage 1. We’ve also began to put together a numeric representation working group, which I think is a fine name, for making further motion on Measure.

## import defer updates regarding evaluation triggers

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/proposal-defer-import-eval/)
- [slides](https://docs.google.com/presentation/d/1yFbqn6px5rIwAVjBbXgrYgql1L90tKPTWZq2A5D6f5Q/edit)

NRO: Okay. Thank you. Okay, so this is our Stage 2.7 update for the deferred import evaluation. So we were running tests, and we’re in parallel working on experiment 8 implementation. But just to make sure that these steps are all correct. And spoiler, we found some bugs. So just to very quickly recap, I’m not going to go through how it works at this point, but, like, what’s important for this presentation is to remember when a deferred module is evaluated. It’s not deferred when you evaluate. That’s the whole point. It’s not evaluate when you reference the deferredness space. It’s only deferred when you rate it. Specifically, when you try to read a string property, it always triggers evaluation regardless of whether that string is an actual export of the module or not. And reason in modules when accessing unknown export names is that tools or platforms that can skip actually in the module list don’t need to pre-collect a list of exported names, and also so that the behavior evaluation—you can have a function that says with this property access to the relation and return. When you get a symbol, that never triggers evaluation, because modules cannot export symbol key properties, so we already know that the property will not exist anyway. This can be determined without PTM concept of modules, and this means, for example, you can get the symbol toStringTag, symbol is present on to object you have or not. For the other object operation, it depends on whether the internal can get or not. So by implementing this, we found that [[get]] is called less frequently than what is assumed when writing the spec text.

NRO: So, for example, [[GetOwnProperty]] we first check if it’s an unexplored name and then call get. So it behaves differently. And this means that actually only evaluating get, we don’t get the benefits because we can just use another of the object methods and we’ll assume it to nod list of expert names, so the processed solution here is always check deferred name of exported names. This means that also if, for example, trying to reflect on keys with the relation, object keys are already evaluation because it calls get internally, but there are other ways to get list of keys from an object that do not call get internally, so it would be to get it covered. So that the rules becomes whenever you try to query properties about the object, if this properties depend on the contents of the module, the module would be evaluated. The end second problem we found was that import.defer, which is the dynamic form proposal, does not truly work as we were expecting it to work. So if you have this example here, when would you expect evaluation to happen? Well, it happens there, in the import of defer call. And not when you actually write something await space, and this is, like, completely against the proposal. There’s not deferred execution going on here. And why is this happening? Well, if we try to just, like think of how import defer works and in the code, import defer, we create a promise, we load the module, load the premises and then resolve the premise with the deferred namespace object. And how does resolve work? Well, resolves check if the given value has a property and if it is thenable, otherwise it actually resolves the promise with the values it’s given. And it’s this check that’s causing problems. We’re performing of get of this `then` property on the namespace object, and this always triggering evaluation of the module before the promise to import the deferred is resolved.

NRO: What can we do about this? I’m going to list some solution here. And to be clear, I dislike all of them. But let’s go ahead and let’s see. So the first solution, like, that we could apply is that [[Get]] on the evaluation for known names, and these is probably good for some platforms, but it means that both tools and platforms that would like to skip actually a lot of the module will collect data, and so it makes implementation more difficult. And also there would be no way to trigger modules that have no exports. Maybe we could make import defer if a model is linking ever, but that will be—that was suggested in the past and was considered to be possibly surprising.

NRO: Okay. Then another solution is that [[Get]] specifically `then` the property on the trigger evaluation if there’s an export, which is the same, like, unknown as both. There is just moment that you collect the module. But it could be okay because you’re just bound to one property and not to however many exports the model has. A third solution is that [[Get]] and `then`
never triggers evaluation. So getting `then` from a namespace, from a deferred namespace would return undefined, but then if it triggers evaluation through some other way, like through some other property, then dot dev property would show the value of the then export.

NRO: Another solution considered, and that we was, like, add some sort of symbol dot thenable to the defer model namespace and the promise protocol would check the symbol of thenable before checking if there’s a then property. This was proposed in the past for non-deferred module namespaces. But it was rejected because it was not web compatible. And at the time, it was already shipping.

NRO: And there are other solution if there’s an object that has a property that points to the deferred namespace, so that the—so that even if the promise proposal tries to go, nothing happens. Or maybe we just don’t do `import.defer()` at all. This syntax that we went for with import defer was designed to be—to be compatible across this different, like, module loading layers, so it would actually stick with that and make sure there’s a symbol that the developers have to learn what the syntax is, if you have syntax error, like, per phase, and lastly, actually, this animation was as a result of that. We could also just special case defer to model namespaces in the promised protocol and just before checking them, check the protocol namespace, and in that case, just resolve the promise to the top.

NRO: So originally, well, until yesterday, my preferred solution was C. So accessing the `then` does not trigger evaluation, it goes up as defined and when the module is evaluated. And my second preference would be to not have `import.defer`. Keeping in mind that it’s not something we can then add later, like, as a way to have more time to solve this problem, because even if we remove `import.defer`, we have to decide how deferred namespaces work now. So this is—it’s not something we could then add back in the future. So as I mentioned, I like none of these.

NRO: And yesterday when I was talking with ACE, ACE suggested some ideas I actually liked. So this is an idea that was presented in the previous slides, but here I just added this yesterday. I understand if you need more time to decide whether you like it or not. So I—I will be also happy with just coming back for consensus next time. So ACE said was to just completely hide `then`
exports from module namespaces, from deferred module namespaces, so trying to read them always triggers undefined regardless of whether the module has a then export or not, regardless of whether deferred namespace has a trigger or. No it does not meet the trigger evaluation because the result is not the same as when accessing single keys. The object of keys would also never contain `then`, because there is just, like, completely hidden from the object, object appearing on the property scripter of `then` would always return `undefined`. This would be like an actual object with no `then` property regardless of the module exports. And, well, what if people have a module that has a `then` export? Well, exporting `then` is from a module is, in general, probably not what you want, because it interacts directly with dynamic import. But if you’re really doing it to import one of those models and you need the `then` export, then you could just wrap a module and export as analysis. So this together with exports is now my preferred solution. That I will be very happy if anybody had other great ideas to solve this problem. To the queue.

YSV: So just thinking about why you would want to use a deferred module. You’re trying to pay half of the cost of module ex-substantiation and evaluation up front. So you pay half and then you pay the second half later. It feels like using dynamic import for something like this, I’m wondering, like, I’m wondering how much you’re saving there, because already you’ve deferred the cost of loading and evaluation until a later point. You’re already in an asynchronous context, if I understand correctly, it’s still going to be async, so you’re not getting the synchronous behavior, which I know is something that’s been requested, back when we doing dynamic import to begin with, they were asking for a synchronous import. As far as I understand, we’re not getting that here either. So it feels like we’re not getting much of benefit from `import.defer` or maybe I’m missing the benefit here.

NRO: The use case is indeed much smaller than the static import. The only use case I could, like—I so mentioned using `import.defer` is to have, like, a conditional import of the top levels of module, so you could doing like `if(node)` and import this and import that and after the module, you—while still then deferring the relation of the module two later when needed in some other synchronous path. You still get the—some benefit from being able to do a synchronous relation, but, yes, it’s true that the use case is much smaller here.

YSV: Okay, so in this case, what makes me uncomfortable about, like, hiding `then` or shadowing it is then we are changing how users’ modules are going to potentially work. My preference in that case is actually to not do import defer. Unless there’s a really strong reason why we might want to have it.

NRO: Okay, thank you. SYG.

SYG: Yeah, I think I agree you’ll yeah. I would prefer removing the problematic API entirely rather than using one after huff censorship attempts, which if nothing else, I have trouble gaming out the effects of these one-off censorship idea versus disallowing dynamic import defer.

NRO: Okay, thank you. ACE.

ACE: So, yeah, we initially were looking at this. My go-to was let’s just remove this from proposal because the use cases aren’t so strong. My concern is while we don’t have loads of use case today, that doesn’t mean we won’t have use cases in the future. There’s lots of things we’re doing now that JavaScript developers weren’t doing in the past. And to a certain extent, we’re closing this off from doing it in the future, we can to it in the future, but we’re making it harder for us to do in the future, so it took me 24 hours to realize, that but I want to make sure that, like, maybe we do say no this, but we should be really—I don’t think we should just think no use cases today means no use case ever, if we’re closing the door for this.

ACE: The door isn’t completely closed, so I can still be convinced.

SYG: Say more about why it’s harder—why we close the door more than usual by not doing it right now?

NRO: I can answer that. So the reason is that we need to decide now how deferred import objects work, even if we do not give an `import.defer` API. So let’s say we do not do `import.defer` and do no special, like, hiding of `then`. Then today if you get a deferred module next case from a static import and you pass it to promise.resolve, that would trigger evaluation, and in that case, it’s perfectly fine to trigger evaluation, and it’s also how modules work. If we call them. However, this means that if the future we decide to actually let’s introduce import.defer, then behavior of the object returned to `import.defer` is already defined, and we cannot change it and so `import.defer` would already trigger evaluation. And the only way around this is to use option F on screen. Which is, like, not a very nice looking option, but, like, that’s what it means if we not doing `import.defer` now doesn’t mean that we are deferring the problem, just means we’re saying we’re not going to have import.defer.

YSV: okay, I have a response to this. Import—the dynamic import is already a deferred import, but it’s deferring all the work. So by—so imagine the use case where you—you want to save the up front work of loading the file, and then executing it. So you put—in this case, you would be branching in two ways. If you—okay, so the idea of static import is you’ve got a long running static defer on import, sorry, oh, you I got words. Static import with defer allows you to write long running application that has infrequently used libraries, loaded statically, but you pay the cost for those infrequently used libraries later on, and these infrequently used libraries are ubiquitous and difficult to refactor out of the code base. That’s the goal there. It’s a transparent hint about optimization to the compiler. But if you want to defer the loading of the file, then the right tool for that is dynamic import, because otherwise you are putting an if statement at the top level of your—of your file, and importing either A or B, but you are going to need to branch later in order to import that—in order to execute that code, because there’s going to be a fork—you’re going to have forking twice. So I don’t see why you wouldn’t in fact just prefer using the regular dynamic import in this case.

NRO: Okay. Yeah. Thank you. ACE.

ACE: Sorry. One thing we’re seeing at Bloomberg is you sometimes do have this halfway house. If we click on a button, we say for that case, we’ll go all the way completely to dynamic import, it’s okay, we can make that an async context it doesn’t have this whole refactoring version, that this static proposal is primarily motivated by the function calling, sometimes, though, it’s another important thing here is when someone clicks a button, how quickly do they get a response. There’s a lot of web metrics around that. If you delay too much to user interaction, you get fast app start-up, but now those user interactions can sometimes suffer. Because sometimes you want this halfway where it’s like, if you don’t want to do it immediately a app start-up statically, and you don’t want to completely defer it until the button click. So especially if that button click is going to be potentially going off to a network, doing something that could take a long time, so what we’ll do is we’ll just do the IO, load the files, do that the background, but still don’t do evaluation, so when a person clicks a button, we’ll do that last bit of work, which is deterministic and not IO. Again, this is in our primary use case, but I do think there can be use cases for this, which is why I’m nervous to completely close off the door. And I don’t think we are completely closing off the door. The solution would be in the future if do you a dynamic import defer, we have to introduce a third type of namespace, so we’d have three different types of namespace objects. So it’s in the completely closed off, it’s just that’s the kind of world we would head towards.

YSV: Okay, so if I understand correctly, the button is being dynamically generated in the code which is why you don’t know if you’ll have the button behavior needed up front? why are you branching to load dynamically? What decision are made?

ACE: I don’t follow.

YSV: You have a button and you wanted to take a certain action, right? Is the action the actual import?

ACE: So the—they click the button. When we click the button, that’s going to go and run some code to then decide how is that pop-up going to be displayed. So we have to fetch all the code for that, like, dialogue and all the things that dialogue is going to display, and the thing is going to display Monaco, so it’s a Monaco JavaScript and it’s going to go fetch Monaco.

YSV: the component that you dynamically import, can you not use a defer on the static imports of that file to achieve the same thing?

ACE: Yes, potentially.

YSV: Okay.

ACE: I’m saying, again, earlier, because I don’t have a completely concrete use case today, I think I can get close enough use case I can imagine these things coming up.

YSV: Okay.

ACE: In general, I don’t use dynamic imports a lot. But I’m saying I can imagine --

YSV: Sorry.

ACE: And they come up in surprises cases, like sometimes the thing you’re switching is big because you have an AB test and you’re like, the string—it was static, but now next week, we want to AB test and load, so now the specifier is not static and we want to load—these things come up. So I think it could come up in the future. But I’m not going to try and claim this is a very strong case.

YSV: The reason I was asking --

NRO: Sorry. Can I interrupt a second. Given that use case hypothetical, can I go through the queue and come back to this.

JRL: We have eight minutes left and four more items.
[ WRITER SWITCHOVER ]

WH: I’m trying to understand why people use thenable modules. Some do. Why?

NRO: It was to support last. And that was in the conversations when we were discussing this problem for the dynamic part before that existed. But then it only worked with the dynamic import and not the static import. But, yes, it’s generally considered to be bad practice.

WH: But some people do it. So if we hide `then` for them, that will break them?

NRO: No. Because deferred cases have separate from the mixed cases and we can hide it only from the deferred namespace objects and not for the old plastic space object. Not break existing code. It means that those people would be—those modules not expecting.

WH: If they did do dynamic import defer, they would get everything except the `then` method?

NRO: Yes.

WH: Okay, thank you.

MM: KKL cannot unmute. I will read for him. Folks at Agoric have a mild preference for lazy exports name space only evaluating for existing exports access. And the module exports then, it is consumed with import defer keeping both pieces.

NRO: Okay, thank you.

JRL: That was the end of the message. Next up is SFC.

SFC: Yeah, I will just note again that, you know, I think especially when we get to—when we talk about WebAssembly and, you know, getting to the point of being able to load WebAssembly modules, like, this having a dynamic defer seems like it would be potentially useful in that use case because like especially if the substantiation of the WebAssembly module is expensive might want to consider the loading of the source and then the substantiation to be two separate operations without having full dynamic import that makes the whole thing async. I think there is the use case there but I understand what this is proposing. It would be nice, I think, to be able to support this if possible if not now but not to completely box ourselves out of it.

NRO: Why Wasm is different from JavaScript in this case given that static import defer?

JRL: YSV has a response.

YSV: I understood that Wasm already splits the two phases and you do it manually but maybe I’m misunderstanding.

NRO: Two different ways with Wasm and let’s say always the final view that’s not necessary what is implemented today and either import source of the web module and then you can like substantiated or once the full static import of WebAssembly exists, so you can have import from the file, then at this point, you can use import for the module. I think. It’s like what SFC was saying here is—maybe you want to trail Wasm binary dynamically and substantiated later to import defer.

JRL: And the queue got a little screwed up here. I’m imagining SYG is trying to respond to the current Wasm discussion and not GB’s comment. You’re up.

SYG: I think evaluation phase of Wasm via Wasm imports with the machinery is still aways away. I wouldn’t consider that to be a very compelling use case right now. Source phase Wasm imports are coming but not evaluation phase.

GB: Thanks JRL. Yeah, I mean, if I can speak briefly to that. We definitely did consider integration with defer in the WebAssembly as integration to respond to the comment on the comment that actually get to my main point which is firstly I agree with what others have said in that dynamic preloading is useful with `import.defer` dynamically. My preference actually looking at it today, today it’s looking like C to me, actually, which is that the behavior for a deferred name space is that the then function is like in an undefined state, while the module is it in its deferred state, so that accessing the function performs execution seems wrong. And maybe this aligns with KKL comment as well. Maybe KKL can comment if this aligns with his thinking for C. So ideally we would want it that like the then access doesn’t trigger while inside the promise machinery and dot defer resolve then you have the machinery working again but C seems the best compromise and not trigger exec for the then name but still make it available and still be able to give it a value later on. So I like the way you presented that NRO. Interesting to hear if there’s any problems with that as well. I also like ACE’s idea for what is it is worth.

JRL: So I have a slightly different perspective on this than what GB just said. In the promise machinery the reason that when you `promise.resolve` with the thenable the reason that we have to do access to then and invoke the then is because we have to adopt the state of whatever it is. If we just skip that step of calling `promise.resolve` and fulfill the promise object directly without going into the nested adoption phase, we can avoid censoring then in module, you can export whatever you want. We won’t do the dynamic promised behavior for the namespaces. Something like that seems better than censoring and preventing a then export from even existing.

NRO: So that would be—I guess `.then` to the promise, it changes to trigger –

JRL: Somewhere in the module resolution there is a thing that wraps it in a promise and either calling promise resolve or choosing the promise capability and calling the resolve function on that. All that internally does the same stuff and tries to adopt the state of the internal thing. We have special promise handling of that thenables instead of trying to adopt the state of the value you’re resolving with just fulfill directly, turn the promise to the fulfilled state. Don’t try to adopt. We can skip this evaluation entirely.

JHD: I just wanted to add that I may have not thought that through JRL’s suggestion clearly. Shouldn’t be possible to have the resolve promise or fulfilled promise if you have a value with a `.then` on it. We shouldn’t change that.

NRO: I believe if you have a then that’s undefined, you’ll get an object with a then that’s undefined.

JHD: Okay. I guess what I meant is—like intended to mean I don’t think it should be possible to have something in a promise that if you return it can change into something else. But you’re right, I had forgotten about the horror of Proxies and they can already sort of do that.

JRL: We have three topics left on the queue and we’re now a minute over our time box. Okay to go on?

NRO: JRL was not suggesting that. JRL was suggesting special casing the first promise creation from import from that number import, the then property. Just the first axis. And, yes, so I see the rest in the queue. Deferred use case. Complete use case from SFC, but I believe that this case is perfectly solved because if you have a Wasm instance, you don’t need `import.defer` and import the source and then later go with the send substantiate. So I heard Agoric opinion for actually doing ACE’s. But given the general discussion, I would prefer to ask if anybody has any like call it trunk position to just dropping it for defer.

JWK: I support A but it does increase the difficulty for some implementations that needed to cross-file information to transform a file. The next choice is to drop `import.defer` and if we really have a need for that, we can add that in the future.

NRO: Thank you. I’m happy to—ACE is okay with dropping it. So let’s go ahead to option G. Let me just go back to—YSV said she would like to discuss offline. Clarify import defer or prefer waiting to say –

YSV: So I was pressing about the use case. I really want to understand what the worry is there. So maybe we can just sit down with a couple of examples and see if a regular dynamic import plus—a regular dynamic import importing a deferred module would fulfill the goals of import.defer. If not that, might actually help us understand what the use case is.

NRO: Okay. Sounds good. I can expect the same question again next time. Also go back to this. Is there consensus for also making the change there that is instead of just sometimes with the export names do it consistently? I heard that Agoric prefers not doing this. I see this as very useful for different implementations. So can we proceed with this before checking list of export names?

JRL: So can we get consensus on making this change? Is that what you’re asking for?

NRO: Yes.

JRL: Does anyone explicitly support this? Does anyone explicitly object to this?

SYG: I don’t think I fully understand what is being asked for.

JRL: This change on the slide.

NRO: So right now SYG, the evaluation happens either with perform [[get]] which means there are still ways to actually get proper defer modules without emulating it. It is just not to the standard path. Like getting property or reflect the keys. So the question is, the consensus for in the modules tried to query the modules from the object which means changing the export trigger from either calling get or the list of expert names?

SYG: Make sure that I understand, the change is what you have as steps 1 and 2 is the current thing. And the proposal is to not do Step 1 so that you always evaluate on
[[get]]; is that right?

NRO: No. The proposal is to add before Step 1 evaluate the module because we want to define and don’t want to create in the script or it is not there.

JRL: As a first step before the current steps right now, as zero step, perform evaluate deferred module? So on the slide insert a step zero and evaluates the deferred module?

SYG: Okay.

JRL: So is there any explicit objection to this change?

GB: Is there an effect here on observability if you’re trying to observe the deferred object that you inadvertently executed by mistake?

NRO: What do you mean?

GB: So like if you console log it, would that cause execution?

NRO: It depends on the implementation. It would not in browsers, it would in node because node performs on the properties. So it’s –

GB: Is there some kind of that we could have for log in tools or something like that?

NRO: If they are maintained just switch it to internals. So given the confusion in the queue, I will come back with this next time and talk to people offline. Because we are passed the time box.

JRL: Okay. So there’s no consensus on this today. Would you like to dictate a final comment? What do we call this conclusion? Can’t think words.

CDA: Did we get to KKL’s comment on the queue? Is that why you have the microphone.

MM: KKL says still not clear on the change. And on chat, I will just report that when JRL said we don’t have consensus, KKL gave a thumbs up that we don’t yet have consensus.

### Speaker's Summary of Key Points

NRO: So there have been two problems found with the proposal. One is that get behaves differently from the various other object methods and the other one is that the dynamic `import.defer` from does not work. We focused mostly on the second problem. There have been presented different use cases for going with different. It seems like the one with the most sport was `import.defer` and we’re removing `import.defer` and we need to follow up. We also need to follow up offline with solution to the first problem, because—well, we need to follow up offline with some people.

## Continuation: TG4: Source Map Specification, 2024 edition approval

Presenter: Jon Kuperman (JKP)

- [slides](https://docs.google.com/presentation/d/147UbvCUAoW07vkQjYKJrf8SqqmCnmicvVBwEu__lOu4/edit?usp=sharing)

JKP: So I had presented on the morning of the first day for TG4 source maps looking for approval on the branch of the 2024 work. I think I got a few approvals and then I also got some folks that wanted to talk more about it, especially MM. I’m pretty sure I met with everybody that wanted to talk about it. We had some really productive conversations. MM had time to look through the spec.

JKP: Just for context for those that haven’t, we have the magic source mapping URL comment that leads toilings that DevTools will source the map and we wanted to make the source say in order to get the comment you had to use the parser and parse the JavaScript and find an actual comment that linked to that and therefore you knew safely what you were fetching. We got feedback from a lot of IDEs that they need something faster than that and prefer somehow to use a regular expression or something quick to get the comment out. So MM had talked to us about potential security concerns especially with parsing and finding Temporal literal and thinking potentially it was a comment and fetching that source map. So we had talked JRL and MM and I and JRL come up with an idea for a solution which would say that we not only need to start at the bottom and look up for lines that start with the magic comment, the slash slash pound but we also if we ever encounter a back tick, we need to bail out. Therefore, we would not pick up anything inside of Temporal literal because on the final line of it we would just bail out. I would like to open up to discussion but I understand that JRL and MM are working together on this and feeling good about this discussion.

MM: Just to elaborate on the nature of the threat so people understand what is motivating this is—so the way the spec describes it is parser-based recognition and non parser-based recognition. If one party submits a program, then an intermediate party wanting to know that the program fed to DevTtools will not cause a URL to be dereferenced on to the network for any number of reasons that might want to be filtering and suppressing that. If it’s doing a parser based recognition and does not see such a URL directive, you want it to be the case that the resulting thing is therefore necessarily safe with regard to this criteria if it then goes into the DeTtool that does the non parser based recognition. The rule just outlined succeeds at nonrecognizing a source URL via a non parser-based recognition if the parse-based recognition does not see the URL.

JKP Thank you so much. I think that’s great. So I suppose what I would like to do is I would like to ask for consensus approval on the spec. We can go to the notes. What I’m currently asking for is conditional on updating on non-parser based rules to bail out when they detect a [???]

CDA: On the queue, kind of missing context myself but OMT says like that more than REGX and end of message.

JKP: Specifically bailing out early or the parser part? Sorry.

OMT: As opposed to parsing it or REGX I like to have the specifically designed thing at least I think that’s much more helpful.

JKP: Great, yeah, we did already have a little bit of this with the bottom-up approach but I think this hardens it and is a great vector we can prevent, so –

NRO: I don’t see from the parser perspective. So we should be clear on what the goal of this discussion of the spec. Because like when we—the original did not define exactly how to get this comments. So when it is—the first approach is say go to the list of topics and find what corresponds to the single line comment. And however, that did not find a consensus with the TG4 and the reason for that is that tools were just not—we link some tools and not willing to move to the parser-based approach. What we did is to say, well, let’s just include both behaviors that have been used in real world here so that if you, for example, want to check with what is happening like let’s say—let’s say for example it’s a security problem you want to check, the comments behind the spec and it means that the spec reflects permutations you can just—that was the goal of that heading spec. The goal is not prescribe changes. We did prescribe the changes if possible. Here we’re talking about asking changes to change and we kept that based approach. Process-wise I don’t think we can change that in this meeting. Like, we either this is as good as it is and we can iterate after publishing or we need to take a break here. We need to have the spec ready by the end of the day or by tomorrow. And we just cannot do this change without going back to TG4 and consulting all involved parties. I also have topic on the merits of the proposed solution.

JKP: Can we talk about the first thing. I guess I’m a little bit confused there because I don’t think this is a section of the specification where we’re discussing requirements. This is a section where we are providing potential implementers with methods for achieving these goals. Like, you know, if it were like in the section of the spec where we say, you know, what a source mapping URL comment is or isn’t, I would sort of understand that more. This is like saying basically here is a helpful program that would help you bind the source mapping URLs and making the helpful program more correct doesn’t seem to be changing anything about – making the program more correct wouldn’t invalidate what it is doing and it is a method that we are offering to extract these, right?

MM: I’m sorry. As I understand the point of the normative spec is that if what VS code is currently doing is vulnerable to this attack that the—that we would be defining the normative spec so that what VS code is doing is outside the normative spec. IE, not conforming. Okay.

JKP: So maybe this is just me not understanding the process here. NRO, if I understand what you’re saying is that like—are you saying that any change that would change the current following or not following, like, compliance level of any customer should not be made this late? Is that what you’re saying?

NRO: No. I’m saying that any change that’s—right, I’m saying any change that is not needs to be brought up to TG4.

NRO: Okay. So next topic. I don’t think the solution works. It make it weak because the language says only support multiline and support multiline string literals and put at the end of the line and check for quotes and you also need to check for closed multi-line comments because you have a multi-line comment that have a single line so it’s not pure comment.

MM: So I didn’t understand the thing about quote. Back quote allows multi-line strings.

JKP: Also that is—double quote back slash new line.

MM: Okay. Right. You’re right. All the quotes—I thought about the multi-line commenting and let me tell you why I thought it was not an issue. Maybe I’m missing something.

NRO: The case about multi-line comment is when you have a comment containing a source followed by a multi-line comment that inside contains something that looks like another comment that contain the source map URL.

MM: So if you—I was thinking that since it’s in a comment either way, if you accept the rule that even in a parse-based recognition, if you have within a multi-line comment a line that by itself looks like a single line comment, you can consider that a valid directive. In which case, you don’t have to distinguish whether the single line comment is also within or not a multi-line comment. But I should have made that explicit. I really hadn’t thought that through very deeply.

NRO: Yeah. Okay, no, that’s not the case. If you have a multi-line comment with some random words inside and then something that looks like a source map URL, that doesn’t count. The comment must also include the source map URL.

MM: You’re right, the multi-line comment is certainly irregular and the rule that I was kind of vaguely thinking about makes things—makes the parsing-based recognition complex and irregular. You’re right about all of the costs. Nevertheless, I think the danger here is real. And I think that adding up all of the closed delimiters of multi-line things that you identified, I think it’s still a reasonable set of prohibitions.

NRO: Can we go back a second to the nature of the security concern.

MM: Yeah. So a DevTool fed this thing is going to defense the URL and go out to the network. I think JHD in the discussion mentioned telemetry and someone wanting to know who is using their stuff. So obviously piece of code when executed can go out on to the network if it has the privilege to do so but several answers to that and I did see the thing about the dereferencing of URL uses the privileges that the code would have if it were trying to dereference a URL in the same context which is a nice alignment. I appreciated that. But tooling will often dereference those source mapping URLs in context where they’re not about to execute the program, and also in a hardened JavaScript context, for example, the code when executed might not have access to the network, so the threat is that somebody builds a parser-based recognizer as an intermediate filter that says, okay, is this thing a safe thing to feed to downstream tools such that downstream tools are not going to go out on to the network and reveal that we’re taking a look at this code or more narrowly maybe it only wants to allow a source map URL to a particular restrictive range of network and particular origin or whatever, so it’s filtering for that and what happens via these non-parser-based recognition rules is somebody sneaks in a URL that communicates to a different origin than the parser-based recognition tool is filtering for. So I mean, in general, this is one of the things about syntactic ambiguity and why the HTML-like comment in the JavaScript specification is such a disaster from a security point of view is because tools will look at things under assumptions about how to parse and then make inferences about what is and isn’t safe and pass it on assuming that the decisions they’ve made are compatible, are at least conservatively safe predictors of what the downstream things might do. I’ve been bitten by this repeatedly. I’ve been bitten by this on HTML-like comments and JavaScript specifically. This is just—you know, this triggers all of those same alarms with two different parsing rules and you don’t know which one some downstream rule is going to use. It’s just not realistic to expect every such tool to parse both ways to form a conservative estimate.

NRO: Thank you. That makes it clear. So I need a second to collect my thoughts.

JKP: I’m just wondering if it would help for other people if we presented something and we can talk more concretely. Let me have the mic back.

NRO: Slash slash at the beginning. Yes. So the concrete problem here is that if we do the next parsing, then—so for more context there are two ways of extracting comments from the spec. This is because some tools like Chrome DevTools parse it and look for tokens and the tools in this case would find source map. There are other tools such as VS Code or JS that instead take a different approach where they start from the bottom of the file and run on each line looking for things that look like comments and they bail out as soon as they find something that is not a comment. So in this case here, those tools would see line 6 is a comment and proceed to line 5 and see line 5 as a comment and do this source map and search the source map by notifying the server that this 5 has been debugged.

MM: To make a point I’m sure you would appreciate is you can write a REGEX that detects all of the closed bracket issues, you know, the back quote and the quote and the double quote, the closed multi-line comment that detects and rejects all of those. So it’s the requirement that this recognition happened by REGX does not prevent us from adopting the safer rule.

NRO: Yes, right. So my concern here is not with the solution itself, it’s with the process, just because I think if we decide to make this change before publishing the spec, then well it just means that we missed that and we have to meet again in six months, which maybe is acceptable, but I would like to offer—I would like to offer another solution here. And let’s see how you feel about it. So where I think we cannot normative changes today if we want to get this published, because we need to get that for, editorial changes are still with the editor discretion and hundred percent acceptable to that. So I would like to propose to do the following: We track this problem and we move the warning in the published spec say you need to check both ways because they might give different results and we are working towards that like linking to the issue.

MM: I missed the critical word. You’re working towards what?

NRO: Towards solving the problem.

MM: Solving the problem.

NRO: And then the draft—the published spec points to the living standard. Like, same as we do for this sentence saying limb stations should not implement what is written here but they should go out instead and check what is currently in the living standard and implement that. And that then will be published next year as a snapshot. And we made normative change in the living draft and not the published spec. In the published spec we have the warning saying we know that these map has this problem and then implementation would actually go to implement the living draft.

WH: You made the claim that a regexp can detect comments. How would you do that?

MM: Well, we’re talking about a regexp one line at a time. We’re talking about first of all rejecting the line that does not begin with a slash slash. IE, does not already look like a single-line comment. And then the only thing we’re trying to recognize, not trying to recognize comments on the line, we’re trying to recognize anything that might cause that line not to be a single line comment, IE, if it has in a program that parses, right? We’re not trying to—we don’t care about programs that don’t parse. So, you know, a program that parses something that scanning from the bottom to the top looks like a single line comment can only if I understand the grammar correctly, not be a single line comment if it has one of these cases, one of these four cases of a closing bracket. And in the case of a multi-line comment, the closing bracket would be star slash. What I’m saying seems—I mean, am I missing some subtlety about recognizing the close of a multi-line comment?

WH: The example on the screen is not a multi-line comment.

MM: No, the example on the screen is a backtick. I’m saying the thing that you would be recognizing is, you know, it’s basically saying that the line is acceptable if it begins with slash slash and then nowhere on the rest of that line does there appear a backtick, a quote, a double quote, or a star slash.

WH: I don’t understand your point. Like, the example on the screen is not a comment. The approach that you described would claim that the example on the screen is a comment. But it is not.

MM: No. The approach that I’m talking about would reject line 6 as not reliably being a comment. And if it’s not reliably a comment, then the process of looking for a source mapping URL stops there.

JRL: Line 6.

MM: We’re parsing backwards each line and process line 6. Line 6 we detect there is a quote and backtick and double quote that means it could possibly be a string and we stop execution at line 6. We’ll never get to line 5 to detect the source mapping URL.

WH: Okay. So you’re going backwards and if somebody happens to have a true source map comment followed by a template, the source map is not recognized?

MM: That’s correct.

MM: NRO, did you still want to clarify?

NRO: I think it was somewhat clarified. I was going to say that the doc here is not to detect comments in general, but just to make sure two different algorithms if they throw the result throw the same result.

MM: So NRO, let me restate your proposal back to you in other words to see if I understand the proposal, that this first version of the spec that will have normative status for now would be unsafe with regard to this issue but it would have a non-normative note in it stating both that it is unsafe in this regard and the stricter parsing rule that it recommends happened instead and it’s just state that other parsing rule non-normatively so that existing tools would at this moment continue to be normatively conformant and then further more would be a non-normative statement which is essentially a future-proofing warning that we expect to tighten the normative spec in a later version to solve this vulnerability, so warning the tools in question VS Code, et cetera, please upgrade to the narrower recognition rules so that in anticipation of a stricter future spec? Am I understanding correctly what you’re suggesting?

NRO: Yes, that is correct with the additional note that we will not have to wait for the next living
– the spec because the spec is referring to conditions to is the draft for Test262.

??: I am fine with that. I accept that. In terms of, you know, the co-existence with the ecosystem and bringing things to a safe state in some ways it’s better because it brings the existing audience along without slapping the wrists—you know, without making them bad guys but brings them along in a cooperative manner but still gets enforce had is and is not normative. I’m okay with that.

NRO: Okay. There is a topic from RGN.

RGN: Yeah, following up on the conversation about regular expression-based matching and rejection, I wanted to point out to everyone that valid contents of a URL include single quote, asterisk, and slash, so you can have URLs that themselves contain some of the very characters you’re looking for as delimiters, which would severely complicate any such effort—for example, this is a valid URL: https://evil.example.com/'.A*/

NRO: Yeah, so that’s a very good point. It means to consistently bound these three closing limiters from source map URLs. In practice, this is not a problem because it can just parse the code dot special characters. And remember that here we’re talking about the tools and we’re talking about source code that developers have access to and not unreasonable to ask people to parse URL if they include these characters. But, yes, that’s a very good point which means we also need to add this requirement for the regex approach and non-regex approach and have this result so it would reject that example?

JKP: I guess let me try to summarize. We presented the TG4 spec for approval. We heard back from MM about security concerns especially with the non parser-based approach and originally pitched to make a normative change today that NRO pointed out would not be acceptable without bringing it to TG4 and we came up with a compromised solution where we will today add I guess two warnings. One warning saying that we recommend the parser-based approach and why because there’s a security vulnerability and that the parser-based approach is better and another note saying we are actively working on fixing this problem in the non parser-based approach by coming one a normative change that would not have the security problem. And adding those two one note and one warning today would be helpful especially because the published spec would point to the living draft so as we fix it, implementers could see the new approach as they go. And one additional thing that RGN pointed out is that we need to be careful with making sure that we recommend to tooling authors that since we are checking for these characters, the URLs need to, you know, conform to this standard of not having those characters in it. Give it back to MM first.

MM: I think that missed one very important element, which is that part of what we’re saying non-normatively is alerting people, warning people of an expected future version that normatively requires the safe rule so that everybody has a chance to move to the safe rule before it becomes normative.

JKP: Yeah, that’s great. So I guess on that, we would be seeking conditional approval, the condition being the just outlined editorial changes and the, you know, promise of fixing this normatively in the draft.

MM: So I approve of that.

CDA: All right. I don’t think that changes the calculus from the group that we got earlier.

JKP: I would like to give everyone, though, if it does change anything.

CDA: Of course. Thumbs up from Justin, thumbs up from CM. Any concerns? Blocking? No, all right. Thank you very much.

JKP: Just a note, thank you all for working through this. This is very cool to see and I really appreciate all the different pieces of feedback and context.

CDA: Yes, absolutely.

NRO: Yes, thank you everybody.

### Conclusion

- Resolved MM’s issue by adding an editorial note to the specification
- Agreed to send the 2024 TG4 specification to Ecma GA

## Continuation: JSSugar/JS0

Presenter: Shu-yu Guo (SYG)

- [slides](https://docs.google.com/presentation/d/1ylROTu3N6MyHzNzWJXQAc7Bo1O0FHO3lNKfQMfPOA4o/edit)

SYG: I will read the queue. MAH’s queue item is dynamic JS requires shipping call compiler or ahead of time compilation of value added?. What does that mean?

MM: I believe I know what he means. So if the normative language is the language that’s input to the JSsugar phase, then the eval in JavaScript is an eval that parses, you know, that also accepts the string in the full normative language. But part of the goal of what you’re doing is to move the JSsugar to JS compilation out to built tools, how is that compatible with having an eval that’s running within the engine?

SYG: It isn’t. The eval would only support JS0 in this proposal, which is the same point, I guess, that it’s the smaller surface and if a particular application actually required dynamic evaluation of JSsugar features as well, it is up to that application to ship its own Transpiler.

MM: So that’s very interesting. That’s sort of the first break where the split of JS zero versus JS sugar is something that a normal programmer would need to be aware of.

SYG: Is it still true that the—like, I had assumed we did a pretty good job of dissuading people from using new function and using eval outside of, I don’t know, power use cases. So I wonder what the normal use case here is.

CDA: Reply from KM.

KM: Is it working? Sorry. I had it muted on the browser. Isn’t that also true for DEV tools and tried to type anything into the DEV tools you have a similar type of program in addition to eval.

SYG: It’s different for DEV tools because DEV tools already is a—at least in Chrome is JavaScript application and when you load it, it loads all this stuff. If DEV tools found it’s important for its UX to developers to support JSsugar there’s nothing really architectural stopping it from shipping its own transpiler as a product choice for DEV tools. I think for an engine, it is a little different than there is more observable—it’s important that there’s interop for eval and I don’t want engines to decide one by one whether they ship a transpiler or not. For DEV tools there isn’t the same interop expectation. I think DEV tools can do something similar. We have—let’s see. There’s very similar to the problem today for DEV tools and not eval some folks might want to copy paste TypeScript. You can’t do this obviously in the engine. DevTools could do that if they wanted to. They have their own trade off and whether they want to ship something that does typed script or tiers nothing prevents from that today. We have as a committee explicitly rejected in the past the attempts to try to spec REPL behavior and such that and recommended basically REPLs actively deviate from the spec as it makes sense for their UX.

KM: Sorry, I was trying to point it was a similar situation. I wasn’t saying there weren’t work arounds. I agree with everything that you said.

YSV: Just to say Firefox we also have transpiling on console input.

PFC: So transpilation is associated with JavaScript and I think it’s a browser centric concept. You don’t get people authoring their code in Python 3.12 and then downlevelling it to Python 3.10 and shipping that, right? I mean, this split into two JavaScripts it seems like it is beneficial for browsers but for people who write code that runs outside of the browser, it seems like we’re giving up all hope of ever going to a tool-less workflow. Or if you had one, you now have to give it up. For example, I’m involved with maintaining the JavaScript bindings for the GNOME platform that runs an embedded SpiderMonkey engine to do things like 'show your desktop', if you run a Linux distribution with GNOME. We are just sort of very awkwardly integrating a work flow with build tools in for people who want to author plugins in TypeScript. It’s a different environment than what you do in the browser. For example, SpiderMonkey provides an embedder API to get the current executing stack trace in a threadsafe way. So when the desktop crashes, which is a C program, we also grab the JavaScript trace in case it’s useful for the crash report. There’s no way that in the SIGSEGV handler we’re going to like try to load a source map library and provide a stack trace for the JSSugar code. That’s an illustration of the things that you run into when you try to apply a workflow with downleveling tools in an environment that is not really suited to it. So I guess my question is here like would there be any appetite for—like, would it be possible in the post-split world for non-browser runtimes to just implement the whole of JSsugar and JS0 as one language?

SYG: Technically possible. Or asking if it’s realistic?

PFC: Asking if it’s something that we as TC39, if we went down this road, would we consider that compliant or would it be a requirement to have the split into build-tool and non-build-tool JavaScript?

SYG: I have thoughts here but I see a reply from CM. I want to go on the queue before I say my Peace.

CM: Yeah, I’m having trouble understanding PFC’s model of the world and the idea that transpiling is browser-centric. Having a language defined as a core minimal language that is the target of higher level constructs being compiled to is a common language implementation pattern. And that’s a tool chain thing that people using those languages do this all the time. It’s definitely a shift in the operating pattern of some JavaScript developers, but I don’t see there’s anything fundamentally there that gets in the way of what people are doing when they’re targeting Node or some other non-browser environment. In fact, some environments like XS specifically need a tool chain in order to get there at all. So I’m just a little puzzled.

SYG: Yeah, my piece here is that the evidence that I see is that the tools independently of this idea, right, this idea was inspired by what I saw in the tooling space in the server runtime space that they’re already integrating tools for the DX of their developers DENO and run and runtypeScript and node merging a thing of TypeScript to take TypeScript input directly and that is a thing that their users had demand for. And I certainly agree with CM that most of the world of programming that I’m familiar with outside of JavaScript are for compiled languages where this is a problem that definitely then needs to be solved. Tool chain problems are very real and require real engineering to address the concrete example that you gave of stack traces in the C program crashes and you get a dump with the stack trace you have to symbolic the memory addresses back to some sensible stack trace format with file names and line numbers and stuff like that. That is a thing that tool chains would need to do. Probably don’t want to do that in the segfault handler and dump thing and symbolic it after the fact. There’s a lot prior here that there are many, many—in fact I would say that most language in the world are compiled ahead of time and there is a lot of priority how to solve these, you know, production Issues.

JGT: Yeah, I think one thing that would be helpful is I think I put an issue in the tracker too is just to define the various use cases, right? Because PFC is talking about one. I think the in-browser app is the obvious one that this sort of big reason for doing this I think node and REPLs are another one and DEV tools is another one and I think it would be helpful to enumerate and clarify what are those particular use cases are there for? Really only two with browser and nonbrowser? Sort of walk those through and I think to PFC’s point and others that integrating the transpiler, you know, essentially allowing node or DEV tools or whatever to JSsugar was a great idea. I find it hard to imagine this could succeed without doing that. That’s it.

RPR: So the presentation was split between describing the problem and then pitching a solution. One of the comments on the solution was that JSsugar features can be less stable. This was cited as a benefit. But I didn’t see anything in the problem domain saying there’s a problem to be solved in this. So I just wanted to confirm is it—are we saying this just as imagining the JSsugar features represent somewhere between Stage 3 and Stage 4 and, you know, much like today, when we have something in Stage 3, it has not yet shipped in any browser, there is leeway for fixing up edge cases? Is this comment on stability reflecting that or inspiring to have more flexibility than we ever had before?

SYG: What I had in mind is not really between Stage 3 and 4 thing but more like giving ourselves more flexibility to fix mistakes we wish we could fix post-Stage 4. Like, things we just didn’t anticipate ahead of time.

RPR: In which case, then, the JSSugar features are not on the same linear proposal?

SYG: They are. They’re still Stage 4.

RPR: You’re saying once the JSSugar feature hits Stage 4, the stability of the Stage 4 JSsugar one will be different to the stability of –

SYG: As a matter of fact but—de facto but not de jure and I think today there are proposals
– not proposals per se but maybe discussion topics that come to the committee where like that would be really nice to fix this thing VCs or whatever and we have agreement here and then it comes to the browsers to say do you have cycles, do you want to even try to see if this is compatible and I think for JSsugar feature when those kind of questions arise, it will be easier to try it for JSsugar features because if nothing else, tools are versioned. If we change it, the old tools compile to the old semantics, programs or apps that don’t update the tool chain remain with the old semantics and we change the new semantics, that’s a surprise to some set of app developers perhaps, but it’s a smaller subset of—it seems to be more like scoped problem that we can convince developers to update their tools to fix the thing we try to consider a mistake then the 2 billion aggregate of browsers to update and break the sites. That’s the stability that I think will be less stability in the way that is beneficial to us, not less stability in the sense of we want to change the design of this thing and we should do because it’s in JSsugar. That’s my intention.

RPR: Okay, that makes sense. And then, so we’re not talking about allowing things that Stage 4 JSSugar to have designed remit gated

SYG: Like beings the working norm of the committee

RPR: Yes. Thank you.

YSV: Can yeah. I think SYG did this really well, but from our side, I think we would be very cautious about any kind of idea about versioning because part of the benefit of standardizing something is that developers can expect stability from those APIs and they won’t change out from underneath them. We need to respect that. We still have a very careful review process. And it would be really for addressing mistakes that we have made. Rather than versioning.

CDA: KM?

KM: Sorry. Yeah. I guess one can view it a little bit like aggregate—I agree Yulia, just like C++ has different versions and comes out every few years, and it’s rare to have things break backwards but have some flexibility to do things they consider mistakes. Yes, I think the—update being pitched or whatever is that, you know, there’s the real cost to going back on anything you said you were going to do, or we said we are going to do. But it is at least like having a viable shot rather than being completely non-viable.

CDA: NRO?

NRO Yeah. Just I wanted to mention that I think getting useful results of home compatible changes in tools can be hard from browsers. The reason being that usually for tools, the person that—like, let’s say—let’s say what we do today is the browser ship something in the better version, and then somebody says like there are users that better user verses of browser to help browsers with finding bugs, and so just navigate the web .… and the browser says, so, we have found this upset so we can do that. When it comes to tools, the equivalent of that is either to also do reins for tools. Some tools do that or to introduce bugs to non-experiment in the future. And the problem is that people that like the developers that would use the better version of a built tool are that aware of that plug to try to experiment or are usually developers that are, like, following closely what is happening, how the language is changing. And just going to run the tool, their code, which follows things, it’s likely the code would probably not be affected by the edge case. They are not going around randomly with people. So less likely to find incompatabilities. Although it has much lower chances of widely breaking existing websites.

DE: Historically in TC39, we sometimes overestimated what could be done by engines. We have said, “this optimization should be able to make the semantics free or very cheap” but it doesn’t always work out that way in actual JavaScript engines. We shouldn’t make the same mistakes with tools. Tools also face limitations on what they can do in practice. In particular, although there are some optimizations that sometimes happen in tools, the basics of transpiling is really about very local transforms that don’t cross lots of boundaries and don’t do a lot of analysis. So I think overall, JSSugar doesn’t allow us to do different kinds of things in JavaScript that aren’t possible to implement interpreters because transpilers and interpreters are both limited, in practice, to the analysis they could do in a very limited local online way.

NRO: I fully agree with what DE said. And I want to bring up some counterexamples thought about tools that did try to do like to adjust this based on very powerful code analysis. One of them was just called tray pack, developed by FaceBook, five to ten years ago, I don’t know exactly when doing analysis to see how various could line—what values would variables have with types, like be sure about the types, but about then—let’s hope developers get the approach. And it didn’t go, not get to go something concrete. Because although they worked in a lot of, like, types of analysis, they just kept the steps and it was difficult to cover. There is another very powerful one that was again developed by FaceBook and released very frequently. That is the—I don’t remember the name. The react compiler, which actually is a proper compiler, that is hair own, does their loan optimization passes and everything. But the only way that they can do that is by not actually following the semantics. They have react its own subset of JavaScript saying you can only call functions at this time and you can only call these types of functions. And so that compiler has to assume that developers have been very good at following those rules, just working with generic semantics.

KM: Yeah. I think—I think there’s—my understanding and obviously SYG can correct me if I am wrong, the idea is not so much tools would remove these overheads. It’s that by existing in tools for incubating longer, that developers will start to see the potential, issues and performance from the APIs at a stage where we could actually revisit it. Rather than, like, after it’s too late. And so I don’t know. That’s just my two thoughts—two cents.

RPR: So yeah. On this topic of limiting analysis to the file level or smaller verses, called program analysis, I think in terms of categories of tools, it’s interesting because there are whole program tools out there at the moment. Bundlers, webpack and so on that look at everything. But if we imagine this was something that might go into a runtime, the way that runtimes have integrated tooling so far is usually referred to as loaders. Where it intercepts the file being loaded, processes it, before putting it into the runtime. And as far as I am aware, all the real life examples that have today are all at the file run and there’s no such thing as, like, Deno or bun or whatever, slurping up the entire file program compiling it before running any kind of code.

SYG: A quick response, do you think there’s no—unlikely that the whole program optimization is spaced? Unlikely to bundle? Not a bundle to happen. Like, bundlers do that because they’re, you know, they want to bundle, they are in a space to do that. The runtimes don’t do that because they have the same loading performance pressures that engines do. So of course the thing that comes out of that is, local transform per function step translation fast compilation because you want to get it running as quickly as possible. But the—and part of my thinking on why that is, is it’s obviously very biased. It feels like that the entire ecosystem for a long time incorrectly assumed that VMs are these magical go faster boxes. And part of this proposal would be to kind of shine a light on that. It would—like, it is—I mean, I agree with what Dan said, if you do it—if you look at local function transforms, then the limits on analysis between what the VMs do and what these local transforms do are very similar. But if that is the case, that is a cost that the user out to see explicitly in—association the developers out to see explicitly instead of saying, looking at—having it be hidden and hoping eventually, it will magazineally get faster because the VP gets getting better and better. Some of it is a psychological shift. If we make it more explicit, does that move the needle?

RPR: I am not saying it’s impossible to convert the runtimes to be a full program JSSugar. I am just saying that’s like a new category. It’s a leap. And –

SYG: I am not asking for that either. I think it’s probably the right choice for startup reasons that a server runtime does that—does like the perfect file transform without sophisticated optimization because presumably you are doing that, running a pipe file directly during development. When you minifier to prod on the web, you do that head of time compiler, whole program analysis when you are running the server workloads for reels. Why do not that work –

DE: If I could address that. I wasn't talking about incentives, but what is realistic to implement. And for various different detailed reasons for different things, whether that’s transpilers, build tools or server runtimes for developers, everybody has trouble reliably implementing complex analysis that are always going to get you. It’s something in general you should avoid expecting this optimization language-wide because everyone faces this kind of structural constraint. Your presentation Shu is very good because it did shine a light on this issue. And we should be thinking more about tools and shining a light on there. We actually come into this kind of fortunate situation where it turns out that the constraints are very similar. So we’re actually designing the same kind of thing. So there isn’t actually a reason for the language to diverge based on the implementation needs of tools and engines.

JMN: I realize this is all very much work in progress, but I just wanted to make sure that we don’t drop peer-review standards. I find this to be something that is very important for getting stuff out of TC39. We have a lot of people here and it’s a shame that tools took up the burden of evaluating whether these things were correct and whatnot. Maybe that’s not in scope. Spec it’s not my intention to move JSSugar outside of TC39.

SYG: It is also a fact today that we don’t have as good representation of tool maintainers and authors as we do browsers and I would like that to change.

DE: All right. I agree, we all like to have more tool representation and that’s why, you know, we go and I over the years have been recruiting more tools authors to come. The topic here is keeping JavaScript open for future .… I agree with JMN point. We need a strong review of proposals. Particular, browsers give strong review for TC39 proposals ensuring the rigor of everything we do. Thinking through a lot of these corner cases, I really, really hope that that continues. And I hope that we don’t start to see some TC39 proposals as kind of out of scope for browsers so they can let it go by. That’s a very important part of peer-review. For reunification, even for a while we accept a world where, you know, browsers are not implementing certain features that tools implement, if about change sometimes, then we have a language that is suitable for late implementation by browsers. We have been through different periods of development and disinvestment in the past, and we should continue to design something that if there is interest, then everything that we add to JavaScript could later be implemented in browsers. Even if it’s initially in some JS substance sublanguage.

JGT: One thing that occurred to me, it does seem like a lot of the proposals that go through the committee might seem to have some pieces that would need to be in JS0. And then some pieces that could be in JSSugar. I want to ask if you thought about examples that have and kind of how that would work. And maybe an example that came to mind is something like BigInt. Where there’s a BigInt implementation, API, that might make sense to put in JS 5 for performance and then there could be the BigInt primitive type, which is syntax that could be JSSugar. I have no idea if that’s a good idea. Probably not. That was the thing I was thinking of and is that something you see happening?

SYG: Yeah. I think that wouldn’t actually happen. Having a split—if you have—proposing something that is hard to do today, it needs a new syntax proponent and a new runtime proponent, it makes sense to have to be in JS0 and have that a minimum core that the engine support while the syntax part is in the JSSugar. Interesting thing that came up talking with Chip earlier, I hadn't considered before, it’s also, I suppose possible for there to be a small syntax core that is put into JS0 to support a complex syntax proposal we don’t otherwise want like extractors. With the feedback from yesterday, that destructuring is very—it’s difficult for tools to transform extractors inside the structuring without—without doing everything. I suppose one way forward could be to use a small syntax core that does something with destructuring to enable structuring to be purely implemented to transform better. I need to do more on that. Like I suppose that’s possible. I don’t want to be so absolute as, like, we will never add new syntax again. But the more manageable the problem is, the more we think about, like,—more confident, the engines can be more confident in scoping out the complexity, whether that is runtime or syntax.

JGT: Make sense. There’s one sort of—related to this is one thing I found hard reading through the slides was to think about how—how—like, what would this look like for an actual proposal? And I almost feel like it would be much easier to talk about concrete examples and the tradeoffs inherent in those than it might be to sort of think of it theoretically. So that would be sort of my I guess request for the next time this comes up is, to try to sort of layout maybe some proposals, volunteer to see how that could work. But that would be very interesting. I think, and very helpful. That’s it

CDA: I am a little bit nervous about this. Especially like moving to a new world overnight, we are in this new working mode. What is the feasibility of something like taking a low stakes proposal and one we like to see in the language itself? We want it in JS0, but could we try and do it in this way, as a proof of concept?

SYG: What is ‘this way’?

CDA: JSSugar

SYG: Like a syntax thing we agree to be in JS0, but to try—I don’t know what it means to trial in JS. That is the state of the world today. When something goes to Stage 3, the first thing ways—the initial ways that JavaScript develops is via transpilers, not direct execution. That is the world today. I want to know what the delta is what you are thinking of trialing.

SYG: Like Stage 3 decorators, I suspect a very long time until there’s direct execution in a way across the major browsers. TypeScript got that out quickly. And I imagine it’s getting used

CDA: The trial is polyfilling?

SYG: No. Transpiling. It is the world today. That people consume Staged 3 features via transpilers that have been implemented.

ACE: I almost completely agree we have been effectively trialing this for like a decade. Apart from the stability aspect. There are libraries using Stage 3 decorators. But I suspect they are groups of people not using decorators because many things in Stage 3, they have been in Stage 3 for a while and that adds a nervousness to things. The thing we could trial, I am not saying we should do this, but to add to—we could trial a one-time change to our process where we say that something is stable, even though it’s not in browsers. It’s one thing, we will try and see, does saying this thing is stable, does that change the way it’s treated and do more tools adopt it? So potentially there is a delta from where we are today to something else.

OMT: Yeah. I will say this is an example, but they have six different versions of the decorators proposals in the plug in. Because they say TC39 plenary where it’s discussed. Stability should be posh, even with transpilers.

CDA: DE, you had on the queue, How do tradeoffs for JavaScript compare to CSS and WebAssembly

DE: Yeah. So SYG’s proposal for JS0 and JSSugar singles out features and aren’t libraries as special sources of features that are especially unmotivated to be featured in browsers. Sometimes this happens in other web platform features, like CSS nesting. I am not sure if that has runtime applications or adds to more syntax sugar. Is there some difference between CSS and WebAssembly in terms of costing less to change or being seen as more useful?

SYG: I don’t want to speak too much about CSS. Because I am not familiar—I am not familiar with the working code of the CSS working group. How features get proposed, I don’t want to really just like out of ignorance, I don’t want to do comparison, me. If somebody else know .… but between JS and Wasm, I think JS is a much, much more mature language. Relatively speaking, it is pretty expressive already. There are a few missing capabilities in my opinion and I am working on exposing them, but outside of things—there aren’t that many things you can’t do for the purposes of general programming today. So I think from that point of view, a lot of JS features are about the quality of life improvements, dev, problems that a mature language has. Wasm, is in growth mode. It needs to attract more developers. But I think Wasm already works kind of closely, somewhat close to the JSSugar, they have tool chains in their process. People aren’t writing Wasm by hand. So big tool chain, Emscripten does this in the standardization process, and as I understand there is discussion when they proposes a feature ask what to go into Wasm core and handled by the tools and this is often a in-depth discussion and harder than the JSSugar problem because Wasm is a general purpose target, I process JSSugar to be a JS target. Wasm is a target for C++, Java, Kotlin, Swift, whatever else that people want to target Wasm for. And you can imagine that with many different programming paradigms, you can get into a pretty big design scope of what ought to be in core Wasm and what is solved by the tool chains. So I think Wasm already works in this way basically. They—and different people on the WasmCG have different opinions of course on how small the core should be. But I think they do generally have a constraint that they want to keep the core both language agnostic and small. We’ve butted heads with them as a JS community before. We wanted the strings to—and the response was, no. Because that seems to favor them for whatever reason, they said no. Because of not favoring any particular source language, out of minimalism and things like that. So I guess, I think the tradeoffs for Wasm definitely exist. But there are also—I don’t know. I am rambling at this appointment. Is there anything .… any more –

DE: Thanks for the explanation. Two parts to that. One part: JS is mature. That means we should be cautious about things to add, but a lot of value is created by taking the right things to JavaScript. The other thing is, you mentioned earlier, in your slides a bunch of CVEs and some of these were for syntax things but some of them were not for—anyway, do you see greater security risks to add features to JavaScript to WebAssembly? Or cost to users in the various dimensions you mentioned.

SYG: As a VM, I would have—I don’t think adding things to JS is any worse for security than adding things to WebAssembly. I feel they are the same. If you look at CVEs, which are, as I said in the slides, an undercount for V8, like probably in recent years, there’s more Wasm CVEs than JS. If it goes into a browser VM, it’s super targeted and attacked. And I think that at—it re-enforces the point that complexity = security. There’s more features are added to WebAssembly, big Wasm GC and JSPI and that is complexity and that = security bugs. So whatever gets more features and complexity tends to have more security bugs.

DE: Okay. Thanks.

KM: Yeah. I mean a lot of the WebAssembly—going—there is a lot of parts to get to on the WebAssembly side. In our side, WebAssembly, I have hard numbers, I didn’t look this up in advance, WebAssembly has dramatically less CVEs than JavaScript. And so—but Wasm GC is likely, you know, the next wonderful frontier of CVEs for us. But the—I think a lot of WebAssembly features have gone out, most of them were just smaller performance improvements or an—general performance improvements. So the use case to the users is pretty compelling, I guess, rather than features that we don’t think people will use and since we know people will use them, if they will use Wasm at all.

RPR: Yes. The original assertion we are going to do tools only would—mostly tools. I think the set of people that use tools overlap strongly with the member who use third party libraries and the supply chain of JavaScript. At the moment, NPM is the world’s largest place of JavaScript. And nearly all of that is directly executable. Even with, you know, the most popular compiled form of JavaScript at the moment, TypeScript, the vast majority of that gets compiled to JavaScript first. So we are distributing executable code. With the JSSugar proposal, what mode do we expect or what mode would we encourage? Still encourage people to convert to executable JavaScript or raise that?

SYG: I mean, I am not an expert here. I am not really—I don’t know very much, but the folks that I have talked to, in the meta framework sense, like Next and Nuxt, it raises questions from folks from FaceBook, it feels like it’s JS0 today. Keep publishing executable code. And maybe we need more innovation or support on how to recover the source. I imagine the problem exists today, maybe .d.ts files are good enough that you don’t need to recover the full source or something. But like when you publish something to NPM today as an executable source, don’t you also have to choose charge level, the verse—as ES5 or whatever? How is that dealt with today? I guess that is the question. I want to see what the status quo is and figure out how to get guidance.

DRO: Yeah. I was going to say that I feel like a lot of NPM packages I have seen, especially recently have both JavaScript and script type bundled into them already. The answer to that question is that, you know, if you want to to be something that is directly executable you can have it be that way, and also something that if the package author wants it to just only be JSSugar, they can make that decision. And ultimately, it’s up to them. There’s the minimum bar, if you want to be executable, you can do JS0. Or do both. Like, I feel there’s options for either.

RPR: Yes. I appreciate that it’s a free world. People can choose. I think we should go into this with a plan, as opposed to letting stuff happen.

SYG: I want to push back on that a little bit of stuff happened regardless. Where I am taking stock of the stuff that has happened. And trying to kind of meet that as going with the flow instead of saying we don’t like it and forcing something else to happen. Why should TC39 say something about NPM? We can give guidance, but how do we make them do stuff?

RPR: I am not saying we have to make anyone do something. But checking what we are doing is setting things up for success.

JWK: We also shouldn’t publish JSSugar on NPM directly. Today some library publishes as TypeScript directly and it brings many problems to their users because a classical transpiler configuration is to exclude everything in node_modules. If libraries transpile the code to JS0, then everything works well.

JGT: Yeah. Just a note on that, as I have spent a bunch of time in space to try to understand when TS code is included in published packages. It’s there for debugging purposes especially VSCode and it likes debugging in files a lot more than in source maps and you can do things like setting breakpoints is easier. A bunch of things are easier to debug when the fills are there. One of the challenges is that frustrated people run it, it won’t work, transpile, it won’t work because the T S config is different. This is a—this is a similar problem. Right? Where people are going to debug it, have a way to do it and the tools have to buy off on this is the way you debug all code, not just TypeScript. So you are essentially TypeScript-ification of the entire ecosystem inheriting some of the challenges

SYG: When I was talking with the meta frameworks another example they gave, I will pair it at face value, there’s some cases where people want the original source because they want everything to be in one bundle to go through one tool chain at the end for everything. If you publish JS0, that is difficult for that kind of work flow and maybe is another reason why you want this dual kind of original source and directly executable kind of code.

DE: There’s been a movement over the past several years of doing less transpilation before putting things into NPM. Actually, Chrome has been important in promoting this practice of doing `<script type=”module”>`. Overall, it’s found that transpiler output is less efficient than the native ES6 features. What we have so far is a sliding window, where overtime things get filled in and over time. We have worked to let the ecosystem use the new native features to this benefit. So the JSSugar proposal is changing that by saying, for some features we will stop that sliding window. Not going to later come back to that. Also for TypeScript in particular with node including TypeScript, it’s more practical for types to be included in NPM potentially. That is an open debate, but the ecosystem is moving in this direction of more original code in NPM. I think that’s good. And we should have a common idea of where we want things to go. It doesn’t have to be TC39 itself is telling NPM to do things or people to make packages to do something. Many of the participants here use NPM packages or create them. And so at least those—that subset maybe should have a shared idea.

RPR: In addition to things like bloat that come from transpilation, it will also make a lot of workflows more complex, like debugging. And the ability to just go and patch other people’s code. If you are staring at generator code, it’s harder to understand that. Now, obviously, the natural solution to this is to say, let’s ship both. The source and the generator. While some people do that, it really is not a standardized first-class workflow. And obviously, for this to work well, to be able to pull arbitrary packages down and edit their source and have a coherent flow, this needs to be a first-class part of the ecosystem. And maybe we can get there, I am just saying that's another set of work and culture change that needs to go on to make that work.

NRO: People ship to the surface, like more transpiler, and in all cases this causes problems. One example is—people ship both. And problems to separate copies. In other cases when you ship in the—then there’s a problem, you try to debug it, and not always, the compiler matches with what the source is. The common reason to be different is the code transpiled with a different compiler than what you are using. And so that may have some bugs or different areas in cases so you cannot produce what you are seeing.

RBN: All right. I will try to be brief. So when we discussed the extractors proposal yesterday, I brought up the concern about bundle size and I felt a bit like it was something—[swa] of dismissive attitude because browser cache. However, as a transpiler author, we often do get feedback from developers who are concerned about bundle size, which is obviously important because we have proposalless like import defer and discussions about profile guided optimization going on in various places where it is very important that many applications can defer some of the loading cost of their applications because bundle sizes big. In TypeScript, we have decorators to remember, based on the Stage 1 decorators proposal. When we shipped the Stage 3 decorators proposal, the emit necessary to maintain as close as we could get to the actual runtime semantics of a part of the proposal, required a significant increase in the emit output that couldn't be offset by emit helpers. We received feedback from the lit team that the size for—in one example, looking the material web repository. The experimental decorators, seeing some things—with the change from the experimental decorators to standard decorators, emit size and bunned size going up by 34% in G, over 20%. For things like just the material button implementation without styling information. They saw a 110% increase in size because of the decorator emit. And even 52%. This becomes a very big issue and it’s something we are still looking to continue to address to try to reduce the size of that. But any expectation that downlevel emit is going to—that developers aren’t going to bat an eyelash at these features because it’s going to be cached is I think , misplaced. I think it’s going to be an issue for any transpilation that is complex, it is something that we have actually been addressing doing transpilation for years and it’s something we have continually monitor. I think it is important to consider that any JSSugar syntax is something we have to pay for in down levelling and it’s likely that anyone who is very concerned about their bundle size, may end up not using these features because they will never be native. Many places will use the feature under the expectation that when this becomes native, they will be able to switch their down levelling or their compilation to no longer having to do the downlevel emit and have the smaller bundle size so I think that’s going to be important.

YSV: Okay. So I hear what you are saying. This is a large bundle size. And I want to put it out there, there was a different approach not with the same motivations that we have now, a similar effect to JS0, which SAT. That would address the bundle size concern if JS0 part of what JS0 was, was having a representation in AST this is a number of issues that have been raised by on or abouts, the NPM question and shipping, debugging et cetera. But just to respond directly to that point, it’s bad to force developers to ship larger bundler and the next touch I had in the queue, but Keith has brought it up, when you are hiding and making the developer invisible to the developer, makes a developer think something is cheap. But if we consider some of the syntax we shipped such as the 4 of syntax that made the end users' experience of the web less example performance. If using destructuring rather than other approaches, you are making the experience of your application slower. It’s a worse experience for the users. Having the bundle size indicates to users that something is too large about their application, it’s actually indicating to them they might be doing too much. That the mental model they are mapping their program to might be doing more work than is necessary. Having them be critical about how they are writing applications and shrinking the bundle size on their own is better for the end-user.

RBN: Even with that, native code will run faster and take up less—have less overhead than the downlevel transpilation. If you for example lack babble emit, babble has knobs and switches for controlling how close to the actual semantics you want to be. Because the closer you get, the slower the code runs. But the comparison often to the native code version, it will be faster because it doesn’t have all of the complex complexity you have to have in the downlevel emit even for some simple thing.

YSV: It will be faster relative to the bundle size, it will slower compared to what they could do if they didn’t use the feature.

RBN: Oftentimes, taking—pushing complex illustrations down the pipeline and using these useful abstractions does have a cost. And it can be difficult for some developers to recognize that cost if they don’t have the experience understanding and knowing that. But oftentimes, taking the abstractions, even something like the abstractions, and making that simpler more convenient, it does have a benefit for users because it allows them to push the complexity down, even though it’s doing the same thing.

KM: Yeah. Just I want to second what Yulia said there. Yeah. I think like—the point you are saying is that, like, the—what I am hearing when you say, like, we should move away from, like, this matching the semantics to get better performance tells me that maybe we should change the way we spec these things to be better for performance and care about performance from the get-go and not design APIs that are ergonomic, but like give up a lot of performance for ergonomics. Maybe we should spec them to be extremely performance from the get-go. Rather than trying to have I guess like a super complex but less API and then you know if you want the not foot API you wrap the code in some other thing that makes the ergonomic. That’s my thoughts.

YSV: Just to quickly pick up from Keith, I mentioned it in the delegates chat, but something to consider here that may restrict how we design syntax going forward, is the things that are JSSugar are things that can be expressed rewritten and they limit themselves in terms of how much complexity they hide. Having that as a requirement for syntax going forward may also address some of these concerns.

SYG: Yeah. Along the same lines as what Keith was saying, I think it is not a correct comparison to take something like current Stage 3 decorators and say that the emit size is bad. That’s true. It is bad. But the counterfact is that JSSugar would have made that better. The counterfact is that JSSugar existed as a mode of working within TC39, I hope we would have designed something completely different than what Stage 3 decorates is today. Because we didn’t have that mode of working, because we are not thinking about transpile and these things as—as a fact thought, a bridge, we design Stage 3 decorators and surprise, surprise, they are not great for transpilers because it is not part of the design constraint. If we –

RBN: I completely disagree with that. With Stage 1 decorators, it was simple. The types of things you could do with the decorates were bad for browser performance. When it was in Stage 2, changing to a purely syntactic. It was feedback about the complexity that that would have added and the current position of decorators is kind of what works for transpilers but also met the needs of implementers. So I don’t think it’s fair to state that the Stage 3 proposal was not—did not consider transpilation when that is part of the reason. We knew there was a cost, but it was feasible. Where we were at when looking at the pure syntactic, it exposed too much information, required side car files. It was a mess. We were part of that discussion. And every time I come to any one of these meetings and participate in the discussions about proposals syntax, proposals, how is the going to work for TypeScript it is a looking at how the syntactic transform works is a thing

SYG: Well I have a question for you, RBN. If we adopt this, would you be offering more feedback for syntax features to enable a simpler downloading?

RBN: That has sometimes been the case. I have said, for example, the type line proposal has a relatively simple downlevelling. But one of the reason that I was—heavily involved in for example the structs proposal is what does that syntax look like. It can be downlevelled. Because a lot of the position has and investigations have been to what can and can’t be down with down levelling and where can we try to draw the line, this is something we can’t support? There is no way this would happen.

NRO: Yeah. Just wanted to—I agree with—agree with everything that Ron is saying. Like, every single point. Especially like the examples about people not wanting to use the feature size. The greatest proposal was significantly improved because tools .… there was like the need for the version that was much worse. And will improve. More people are using the proposal through tools. People are starting to migrate from the old version that was implemented, but we still get feedback from many developers that the proposal is too big and is going to be implemented, to be in the output.

MLS: Aren’t many devs transpilinging recent feature to ES5, increasing bundle size?

RBN: I can’t speak to what percentage of folks are transpiling to ES5. I know that I think DE or RPR had mentioned something about the ecosystem trying to update or some involvement there. So I will let someone else speak to that

SYG: I can speak to some Google internal stuff. Part of the motivation for this proposal came from internal reports that they try to stop transpiling to ES5 and got performance regressions. So this is where the TDZ stuff came from. They couldn’t stop transpiling TDZ which is non-spec compliant because it doesn’t have TDZ. Class syntax. A lot of work is getting closer to parity with ES5, error non-class—non-class syntax-like function constructor For teams who have a performance culture and the work three to do regressions, and track performance, they look it up on net. Like, it might increase bundle size, but they improve other things deem worthwhile and decide what to do. I am seeing that they remain transpiling to ES5 for some reasons, while they would ideally like to stop doing that. But finds out they can. They want to stop doing that because of the promise of a smaller bundle size. But then it turns out, regress is runtime performance will need wire time. That’s the tradeoff I am seeing be made in practice.

RBN: I will say one thing. When TypeScript shipped the 5.0 release, we dropped support for ES3 output. I don’t know what specific timeline is, but at some point in the future, we may drop ES5 as a valid target. All engines we support are running ES2015. Down the line we like to also drop later transpilation targets as they age out. So hopefully we can do that. I don’t know when that would be. I do see that the transpile of let and const var, might be a way to preserve if we drop ES5. I don’t know if that’s something that might help drive that as well.

JRL: So on this topic of ES5 transpilation .… because E6 sucks for loading. The current state is module, no module. The module build is still slower than ES5. Some sites you can turn it on and only serve that, but not many. You do whatever the default is. There is a comment about the now stable decorator having an downlevel, the code emitted for that is bad. Even the experimental decorater proposal, if you look at the output, the transpile, it’s awful. Decorators has been a bad proposal for output size. All of the –

RBN: The TypeScript emit?

JRL: The Babel emit. The Stage 1 decorators before we changed it radically. Those are awful, compared to the class output, could you have done if you not used decorators.

RBN: The experimental decorator—it’s a reduced write. But we couldn’t rely on that because it didn’t exist in about ES3. It’s essentially just that a couple lines of code. But in comparison to what you do for the standard decorators it’s night and day between the complexity that is involved there.

NRO: Babel outputs ES5 unless you tell it not to. There is mostly—we started with that in the ES6 phase and kept with that. We are going to change these in the next major release. Like most you see, for example, are most actual examples are people changing this ES5 target to like something else. We use this to say I want to support browsers release in the last five years and figure out exactly what to transpile. We are going to this this. Also, we should not speak about things in terms of ES production. Saying transpile to ES5. Especially when you consider the performance for transpilers, that’s not how we should think about this. Let’s and var, not transpiled. But then you look at things like, for example, like some of the class features, they are much faster when not transpiled when they are. Just performance, more similar to like minifying something you do, in your final bundle to get better performance .…

YSV: So my knowledge is from a couple of years ago, I know the clojurescript can transpile to ES3. They allow to use the new built-ins, WeakMap and promise and new built-ins from ES6. But they compile down to ES3 syntax because it’s just faster.

DE: It is important that we continue to study what causes the overhead of using native features vs transpiler output. We should look at this feature by feature and it’s useful for us to learn together, what is the source of this overhead and what lessons we take for new features.

DE: People have been saying, “we could learn what to put in JS0 by the experience in JSSugar”. I like the idea of working for more experience and more trials. But as NRO pointed out before, tools also have a great need for stability. It’s expensive to maintain different versions of things. So I am wondering what sort of learning from experience we can be doing. Because in principle, browsers could have a script tag where you opt into an experimental language version. There isn’t a technical difference. It’s expensive to maintain that. But it is also expensive to maintain that for tools. How should we get this better benefit by experience and trials? I mean, how should we work with tools on this?

SYG: Sorry. Are you asking me directly or a question to the room?

DE: Well, to the room, but if nobody volunteers, it’s directed to you

SYG: For performance, I don’t really know. I haven’t thought that deeply on a good work flow. The environments are different. At the very, very least, adoption, is—can be proven out by tools.

DE: Right. So like what would the flow work? It doesn’t get adopted. Do we remove it from JSSugar?

SYG: You leave it in. But that makes it clear that is one of the things that we convinced yourself to be useful, use case didn’t materialize and the cost we live with, the tools have stuff that they need to maintain. But there is no pressure to do thinking about it and the engines don’t have to occur the cost

DE: What about the feedback loops that RBN was talking about? About how people might not use a feature because the tools implementation is not good enough and people are hoping for the native implementation?

SYG: How is it different today with browser implementations?

DE: Today we have a limited time window of features being tool-only, and then things do get implemented in windows. Everything in the standard is there because it’s implemented in browsers.

SYG: The sync feedback loop exists today with browsers, we want to spend two quarters optimizing things that don't get used. It’s not fast and how do we know it’s not adoption because it’s slow?

DE: Yeah. That sounds like a dilemma. But I am not sure maybe tools authors could speak more to ways they might participate in this? I would worry if some parts of the language are kind of lower stability, that they might not be really included in JavaScript. That it won’t get as much adoption, implementation by tools and won’t get as much uptake.

SYG: I guess my—let’s see. What I see is that there is enthusiastic adoption of non-standard extensions. So like those should have basically at least an amount of stability guarantee, yet they are widely adopted.

DE: Non-standard extensions have been decreasing significantly in popularity since 2015. We have been aligning toward the standards.

CDA: We have less than 5 minutes and it will be a hard stop. KM is next.

KM: Yeah. I don’t understand—I guess, sorry. You proposing you have a flag and then that would enable this feature and you have to say you want the feature but like—so then browsers can’t—like, the thing I worry is that a site would have give me a list of all features and I will put them on flags list, because I don’t want to remember turning them on

DE: I am not saying that is a good idea. The reason that’s a bad idea is because it’s very expensive for implementers to maintain multiple language versions. Tools experience the same cost.

KM: I agree with that point, yeah.

JHD: Yeah. Just—the feedback loop is if it’s not fast, and it doesn’t get adopted, how do we know that it’s not the performance holding it back? I also heard that part of the motivation for JSSugar is, it’s okay to have it be slower and not integrate into the engine. It sounds like if it’s slow, it's something that will harm adoption, JSSugar doesn’t solve that because the only way to get adopted, is to gamble and see if there’s adoption worth making it fast. I am not sure if that’s true. But if that was true, performance is necessary—adoption necessitates performance, then there’s no avoiding the sunk cost.

SYG: Right. I think that same feedback exists with JSSugar for some features. I don’t think it’s universal for every feature. But like—yeah.

JHD: For those features then that require, we think require performance in order to be adopted, if they could be implemented natively in a performance way, but not with sugar in a performance way, that eligible for 0?

SYG: No.

JHD: That would mean, therefore, we can’t do it?

SYG: Yes.

JHD: Okay.

CDA: AP?

AP: Just asking and—things in sugar, we have been talking it being slower. But what about memory? It is okay if it using significant member

SYG: I don’t know how syntax features usually have an effect on memory. Like I am not sure why the transpiled version would have significant memory use than a native version.

AP: Well, I guess it depends how it’s implemented, but you know like definitely with the polypolicy, it is script. That’s being executed. So there’s memory in use.

SYG: I have no idea. My hope here is that we actually switch a little bit of how we design sugar features we don’t design them without a transpiler—we design them first and foremost with transpilers in mind.

CDA: We are at time. Ron, we won’t be able to get to your topic. Please continue discussion in matrix. In the usually channels.

### Speaker's Summary of Key Points

- List
- of
- things

### Conclusion

- List
- of
- things

## Closing

CDA: Thanks, everyone. That brings us to completion. Riki?

[Riki]: All right. Closing remarks. Three things before my big speech. Three things. Number 1. So we want to have a photo session after the meeting formally closes. So please make sure to gather around in the area outside of the meeting room, back there. We want to take two photos at two locations. One, over there by the stands. And the other one with the forest area. Make sure to do that. Don’t run off. Thank you. That’s number 1. Number 2: access badges. We talked through this, don’t get me fired. We have a drop in visitor card return box at the first floor. Once you get out of the flapper gates, there is a box set, so please put your access badges into the boxes. Please make sure you keep the lanyards on, the red runs. You cannot take those home. If you do, that’s like a firing hazard. Me. All right. Number 3. So we—as a small token of appreciation we have PlayStation souvenirs on the table. Take one each. Clear file and a PlayStation sticker. With that, my big speech. So once again, thank you all so much for allowing Sony interactive entertainment to host this meeting. It was a pleasure. And really, a pleasure. Having everyone here, it provides a wonderful experience to our observers back there. To see how TC39 actually operates in person. We hope you felt SIE Japan’s spirit of .… which is hospitality. And playfulness. Which is something that we set as our primary goal in preparing to host. The reason why I want to do that is because we wanted to express how deeply we appreciate the invaluable work that TC39 does for us. So thank you all so much. Shout out to the SIE host team. As our tech host guy. All the catering work and handle various requests for us. And all the design work for us. All the branding. All the souvenirs we have to do. Thank you so much. And josh, for project management. Thank you all for that. And of course, Ross for getting us here in the first place. For handling SIE’s matters with ECMA. Thank you so. A big round of please. Thank you so much. Thank you. Thank you. For those of you who are—oh. Again, for those of you flying out today, safe travels. Saying in Japan a little longer. Enjoy the rest of your visit. We look forward to see TC39 flourish as an organization. Hopefully in person again in the future. Until then, thank you so much.

RPR: Great. Thank you, Riki. So I think this has been an unforgettable meeting here. I can’t really talk about Riki’s speech. The amazing slides and so on. Riki, thank you so much for everything you have done. It hasn’t been just this speak. A lot of organization leading up to this, behind the screens for all of crew that helped us. Ross had the idea, a year ago now, to kick this all off. And we got even more swag to come. This is a real treat. And it’s—the fact that you have gone further with all the design work, that’s a wonderful touch. Really beautiful artwork now we have our car pack, our fans. I see Justin has been using his for the whole meeting. That’s right. And so yes. Throughout the week, food has been wonderful. The AV. This was extra effort. This was not the normal AV set up. This was brought in for the needs of TC39. And yeah. I think it’s worked really well. So this is—this is an example of best effort TC39. And yeah. We definitely appreciate Sony’s commitment to standards work, to open source, it really comes through in all of this. So yeah. A round of applause for our hosts.

RKG: Super minor clarifying point, just so I don't take credit that isn’t mine. The idea of hosting this was Riki’s idea; Aki had said years ago that it would be cool if Sony hosted and I was like, "I don't know if I'm up to that challenge!" But Riki was interested in attending last time and enjoyed the three days so much that he walked right up to you and said, "SIE is hosting next year!"

RPR: Awesome. Awesome apologize for getting that wrong. That makes it even more impressive. Okay. To our note-taking, the meeting has ended.
