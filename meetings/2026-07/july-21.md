# 115th TC39 Meeting

Day Two—21 July 2026

**Attendees:**

| Name                | Abbreviation | Organization       |
|---------------------|--------------|--------------------|
| Chris de Almeida    | CDA          | IBM                |
| James Snell         | JSL          | Cloudflare         |
| Richard Gibson      | RGN          | Agoric             |
| Jordan Harband      | JHD          | Socket             |
| Ashley Claymore     | ACE          | Bloomberg          |
| Caio Lima           | CLA          | Igalia             |
| Waldemar Horwat     | WH           | Invited Expert     |
| Bradford C. Smith   | BSH          | Google             |
| Dmitry Makhnev      | DJM          | JetBrains          |
| Aki Rose Braun      | AKI          | Ecma International |
| Samina Husain       | SHN          | Ecma International |
| Linus Groh          | LGH          | Bloomberg          |
| Lea Verou           | LVU          | OpenJS             |
| Olivier Flückiger   | OFR          | Google             |
| Nikolaos Papaspyrou | NPU          | Google             |
| Guy Bedford         | GB           | Cloudflare         |
| Devin Rousso        | DRO          | Invited Expert     |
| Istvan Sebestyen    | IS           | Ecma               |
| Eemeli Aro          | EAO          | Mozilla            |
| Philip Chimento     | PFC          | Igalia             |
| Dan Minor           | DLM          | Mozilla            |
| Jordan Harband      | JHD          | HeroDevs           |
| Justin Ridgewell    | JRL          | Google             |
| Kevin Gibbons       | KG           | Invited Expert     |
| Matthew Gaudet      | MAG          | Mozilla            |
| Michael Ficarra     | MF           | F5                 |
| Mark S. Miller      | MM           | Agoric             |
| Stephen Hicks       | SHS          | Google             |

## Continuation: Map take for stage 1, 2, or 2.7

Presenter: Devin Rousso (DRO)

* [proposal](https://github.com/dcrousso/proposal-Map-take)
* No slides presented

DRO: did have a large queue from yesterday. Do we want to just jump back into that queue? Or do you want me to redo this?

CDA: Let me restore the queue right now. Thank you for the reminder. Keith is first on the queue.

KM: Very exciting. Anyway, yeah. I think you had in your slides I'm trying to page this all back in. There was a concern about undefined being a return value if the thing is not in the set. I suppose one thing that I didn't see and maybe could work is passing in a third parameter or I guess maybe a second parameter in the set case. That is like what value to return if the element is missing from the set. And then you can have any value you want, and it would default to undefined. You could pass a special custom Symbol if you want to differentiate from anything else. Yeah.

DRO: Yeah. That seems like a potentially reasonable thing. I'm not opposed to adding some behavior like that.

KG: I 100% agree, but this is at least as serious of a problem with the existing dot get method, which is going to be called 1,000 times more often than this. If we are interested in solving the problem of "map lookups don't tell you when the thing you are looking up was missing", I am all about solving that problem. I don't think we should solve it only for this method. I think that would be kind of silly.

DRO: I also agree with that.

MF: Yeah. I think that conversation between KM and KG mostly is getting at what I'm looking for here. But you also mentioned for the undefined case, the possibility of returning an object. I think that is overkill and we should try to keep this lighter weight. I'd rather not see a bunch of small objects created all the time with this.

MF: And moving on to my next topic. On the naming, again, I agree with KG's position from earlier. `take` is just not going to work for us partially because of `Iterator.prototype.take`, but for other reasons as well. I think `getAndDelete` is a great name. Not that I want to bike shed names in this meeting.

CM: the existence of iterator take argue strongly against using that name for this.

JSL: plus one for stage one. The rest can be figured out.

KM: Yeah. I think this kind of has the same argument that we had, I guess, for get or insert. That it would be a performance when I don't think that's fundamentally true, since I think it's relatively straightforward for engines. To optimize this, even in not optimizing compilers by simply just like remembering the last hash bucket you looked up, and then when you look up again, you just check if it's the same one. If it were really that hot, and then certainly in the optimizing compilers, engines will identify that you looked at the same hash bucket twice, and in a row without anything that could change them in between, and do like a standard compiler optimization. It's like common subexpression elimination. To identify this exact same bucket, and then you can use the same bucket. That said, I'm not saying we shouldn't add this function. I'm just making the point that I don't think this is a performance win.

WH: I support this. Like MM, I would also want the analogous capability on sets.

MF: We heard a couple of people with support for adding this to Sets. I think that `set.delete` is already sufficient here. It returns a boolean. What more would this give you over that? And to be clear, the boolean tells you whether the key was in the Set.

PKA: Sorry. I was going to add on to that, especially if the name is get and delete. You know, there's no get on sets, so. Feels a bit odd.

CDA: All right. That is it for the queue.

DRO: Kevin, I guess in that case, well, I guess I can say that if I rename this to getAndDelete, I was originally proposing this just on map. So it seems like there's some people who want it also on set, and some people who think that that is unnecessary. I'm really fine to go either way on this because, like I mentioned, I don't think I would ever use it on set. But yeah, I would love to ask for a stage advancement, I guess, as far as I can go. Assuming that I rename this with the understanding that I rename this to get and delete.

CDA: I'm on the queue with I don't think we have to figure that out for stage one. We absolutely need to figure that out for stage two. But unless folks feel differently, I don't know that that distinction is critical to ask for advancement here. I see NRO and ACE are entering the queue.

NRO: Yeah. Could just the people that have already expressed support for the Set method restate the use case for like what would expect the API to do in sets?

CDA: I don't know. I'm trying to look back at the notes and folks who wanted it on set.

DRO: I want to say I think the two people that I can remember would be Mark and Waldemar.

NRO: Yeah. I'm looking at notes. It just said they would like to have it, but I cannot find in the notes or remember why I would want it.

DRO: My guess from what I remember is it would be nice to have for like what's the word I'm looking for? Similar API search.

KM: That was like symmetry.

DRO: Thank you. That's the word. Symmetry is the word I was looking for. Thank you, KM. And sort of the same way that we have keys and values for sets that don't entirely sort of somewhat make sense as well as entries, we could also have a similar API surface.

RGN: Not to advocate for or against it being on Set, but the behavior for it, I do know what MM at least would expect, which is that the input key if present is returned right back. And the application for that would be point-free programming where you don't actually have the key in a variable and you don't care about it unless it was actually removed from the set.

NRO: Yeah. Just for the symmetry thing, I want to point out that get doesn't exist on sets. So it's not symmetrical to add get or delete or get and delete.

ACE: Stage one sounds good.

CDA: And that is it for the queue right now.

DRO: I mean, I guess my question would be as far as the symmetry point on also wanting this on set, is that something that is necessary in order for this to advance? Because I would like to take this. I don't want to have to wait another couple of months to present this again for stage two if I'm all the only difference is going to be whether or not it exists on another prototype. So if possible, I'd love to just I mean, I'd love to ask for stage two or stage 2.7 with just on map and weak map if that's something that we are okay with.

WH: No, it's not necessary. Given that we don't have get, and delete already returns presence, it's not important.

CDA: I'm next on the queue with it's not a stage one blocker for me. I'm less enthusiastic about going to stage two right away. I'm not sure that I feel that strongly about it. Ashley is next on the queue.

ACE: In terms of I don't think even though it might be feel sad to only achieve stage one, I think in reality, because it doesn't stop people writing tests and implementations and spec. So those things can all be in line. We talk offline to agree. Naming and things. And then next meeting, go to 2.7. Maybe the test 262 PR has already opened. I think it's cool. I wouldn't see stage one as a sign this is going to be a super slow process.

MF: Yeah. I think the main open area of design exploration is when you pass undefined how you can tell whether it was present or not. And you know we talked about some possible solutions that I don't think we liked, but I would like you to take the time and actually explore what that solution space could look like there. There may be other things that we didn't think of in the 10-minute discussion that we've had here. So I don't think it's ready for stage two yet, but I also agree with ACE that once we have figured those things out and we all seem happy with the API name, it can go straight to 2.7 from one at the next meeting that's presented.

DLM: On the queue with support stage one.

CDA: I'm next on the queue and I just wanted to point out going directly to 2.7 in a single meeting has specific challenges, which are that we the committee has to assign reviewers at stage two. So we would have to assign reviewers at that meeting. Those reviewers would have to review and sign off at that meeting. And the editors group would also have to sign off all in the context of that meeting. There's precedence for that happening. I just want to be clear on what that would entail.

ACE: I pre-volunteer to be a spec reviewer.

CDA: All right. Well, let's remember that for stage two.

DRO: All right. So then I guess with all that in mind, I want to I'm pretty sure I've already gotten quite a lot of support, but I guess official request for stage one.

CDA: Yep. You definitely had several voices of support for stage one. Those folks feel free to express their support again. And other than that, you know we'd like to know if anybody objects to stage one. Michael's on the queue with support. Not seeing anybody entering the queue. ACE is now on the queue. With support. Did you want to speak? I will take the silence as a no. All right. Congratulations. You have stage one. Thank you, Devin.

CDA: All right. Now, we have to find a new note taker. Or two. Can we get somebody to help with the notes, please? We are losing Ashley. Or because Ashley is one.

### Speaker's Summary of Key Points

* Add new method for `Map` and `WeakMap` that allows for retrieving the value and deleting the entry for the given key in a single operation.

### Conclusion

* Accepted as Stage 1
* Rename to `getAndDelete`.
* Not added to `Set` or `WeakSet` since there’s no equivalent `get`.
* Explore more options for differentiating “key is present with `undefined` value” vs “key is not present”.

## JSON.parseImmutable

Presenter: Ashley Claymore (ACE) + Peter Klecha (PKA)

* [proposal](https://github.com/tc39/proposal-json-parseimmutable)
* No slides presented.

PKA: Sure, thanks. Yeah. So hello. I'm PKA from Bloomberg. With me is ACE. We don't have slides. This is an update on the stage two proposal `JSON.parseImmutable`. Just as a reminder, some background: This was originally a companion proposal to [Records & Tuples](https://github.com/tc39/proposal-record-tuple). The idea being that this was a utility function that would parse JSON and return a Record/Tuple version of JSON. Records & Tuples has been withdrawn. However, this proposal lives on. It is living on with the idea that maybe it's still useful to have a function which parses JSON and returns a deeply immutable object. We discussed this two plenaries ago and the committee seemed generally warm towards the idea of continuing this proposal in particular under the guise of a function that returns frozen objects using the existing concept of “frozen”. Since then, we've opened some issues and my purpose here today is just to go over the resolutions or lack thereof for those issues.

PKA: So we will just dive right in. First of all, [there was a naming question](https://github.com/tc39/proposal-json-parseimmutable/issues/2). Especially in light of the change of scope, immutable is maybe not necessarily the best term. Given that this is returning a deeply frozen object, we the champions feel it makes a lot of sense to go with `JSON.parseFrozen`, as the name for this. So I will just pause a moment if anyone wants to cry out against that choice. I see EAO's on the queue.

PKA: Does this concern the naming question or is this a separate matter?

EAO: I'm not sure if these are the same question or if they're going to be separate, but frozen sounds better than immutable. And I would have a strong preference for `JSON.parse` with an options bag where you then say “frozen: true” rather than `JSON.parseFrozen`. I don't know if this actually relates to something you're going to say later.

PKA: It's not something that I intended to bring up today. It does logically relate to the question of the name since your proposal would obviate the need for a name. It’s an interesting question. I don't know if we had thought about that. Adding an extra option and keeping `JSON.parse`. I think that maybe it did come up.

EAO: I think there's an issue for this, specifically. Or at least it's covered in one of your issues.

PKA: Okay. Noted. I don't have an immediate response to that. I don't know, Ashley, if you want to jump in.

ACE: I think one of the reasons is like you could imagine a TypeScript interface for this. We didn't like a parameter so drastically changing the semantics of the return types. Because that type of overloading isn't really easy to express, and, I think, makes it slightly harder to reason about that. Personally, I'd rather two well-named methods than one method that takes a boolean just as a general design.

EAO: So yeah, just noting that TypeScript can entirely well differentiate the type of the output based on something like “frozen: true” in the options bag provided that it's a literal. Given the changes here, where the intent is, as I understand it, to return objects and arrays that are frozen, their type is not really very different, as was the case with Records & Tuples, from where this story here started.

PKA: So there certainly is a TypeScript annotation for a read-only object. And it is definitely one of our goals at Bloomberg; something that we really want out of this is static analyzability of this function, that it is returning specifically read-only data.

KG: Just continuing the name bikeshed: “parseFrozen” seems a little weird because it sounds like it is parsing a frozen thing rather than parsing to a frozen thing. So I wanted to throw “parseToFrozen” in the ring. That said, option also sounds good to me.

PKA: Yeah. I don't know if “parseToFrozen” came up. I do think that that is a perfectly good choice.

LGH: I think I've mentioned this in the past, but I would like if we could—whatever the solution is—also have this for JSON modules via an import attribute. At Bloomberg internally, we do this by default. So when we import JSON modules, we return them frozen. Against the spec. So it would be nice to have a way to sort of choose which way to go. No strong preference for the standalone API, but it would be nice if it could be mirrored.

CDA: That's it for the queue.

PKA: Okay. So maybe a little more discussion to be had about the name as well as the question of single function versus multiple functions. Next open issue, [should the return objects have a null prototype?](https://github.com/tc39/proposal-json-parseimmutable/issues/6). This was brought up at the last meeting as well. Our preference is to have a null prototype. Makes the object just a little more frozen. And we didn't really see any pushback on that in the issue. So once again, pause to allow the multitudes to cry out.

KG: Oh, I hit the wrong button on the queue. Sorry. Yes. No prototype sounds great. There are, as I'm sure we all know, so many bugs—many of them security issues caused by people being able to walk to the function constructor from a parse to JSON object. I think if this existed everyone would immediately suggest doing this as the default for all JSON parsing. Just to avoid that specific problem. That said, I'm not totally sure about whether it should only exist for frozen. If the way this works is that we just have like a second parsing method that gives us nice things and then we just use the one that gives us nice things everywhere we can, I'm okay with that world. But it seems a little more natural to just have a separate option for the existing parsing method that says null prototype and maybe a separate and totally orthogonal option to the existing parsing method that says give you frozen objects. It seems a little weird to conflate them. That said, I'm okay with that if that's like the only way we can feasibly do this.

MF: Strong preference for null prototype.

ACE: Maybe no one's thinking this, but just because—technically obviously—arrays are objects and just in case anyone was thinking we're saying that parsing a JSON array would also return an array but without a prototype—that's not what we're saying. This is only for JSON objects not JSON arrays.

ACE: Having two options, I kind of like the idea of yes you could separate out having a null prototype from frozen. Though I do feel like maybe that is just us cheffing thing rather than it being widely useful. I can't imagine someone caring about one and not the other. I feel like in reality we would always see people choose both. But maybe I'm wrong about that. It's just my gut feeling.

KG: I agree that the majority of cases will not need to separate them but it's not that unusual to mutate the result of your JSON parse. Like I do this a lot in cases where I care about allocations. And I would still like to avoid handling things with non-null prototypes that might come from user input. So I don't know. I think it is pretty reasonable to be mutating things and even in the world where you're mutating things a defensive null prototype is still valuable.

ACE: I guess—that's good to know. And yes, I do see that. It would be a shame that the majority case would have like to say I'd almost want somewhere you'd opt out rather than opt in if we think the majority are going to say true to both. I'd rather that was like the easiest thing to type and the more niche option of null prototypes not frozen was the more verbose one to type. I can't think of an actual design. I mean, I guess we could have any num as opposed to boolean flags where we just have some well-defined strings for the flavor that maybe that's terrible in a different way.

EAO: You might have just said this, but effectively I think that it is a highly unlikely that somebody would want to have frozen and not to have a null prototype on the object. But the other slots in the grid kind of do make sense.

CDA: That is it for the queue.

PKA: So, much to consider there as well.

PKA: [Our final issue is about the reviver](https://github.com/tc39/proposal-json-parseimmutable/issues/7) and this is a situation where we have maybe more to discuss. There are a lot of logical possibilities about how we could imagine the reviver would behave here. As I mentioned before, we at Bloomberg care a lot about static analyzability here. So one option that we want to reject is the possibility that you could have a reviver where user code returns non-frozen objects and that's just accepted. We want this function to statically always return frozen things. Within that, there are still various options. The one that we sort of weakly declared in this issue is for `JSON.parseToFrozen` to throw if the reviver returns anything other than a primitive or an object that it was not passed. The idea being we know primitives are immutable and if you return the object you are passed as the reviver, then we know you are frozen because you were frozen by the engine and passed into the function already frozen. That achieves our goals. And it's a very simple thing to spec.

PKA: Two other options that we have are to simply not have a reviver at all. Obviously we do know there are use cases for a reviver. So that would rule them out. Like for example, handling bigints. It would also not take advantage of the recent source text proposal for revivers that landed here a little while ago. On the other hand, we could have a reviver which does allow you to return any object you like, for example if you have some custom scheme for serializing circular objects and you want to hydrate certain strings into objects. We could allow that where the engine validates that the object you return is deeply frozen—for some definition of “deeply frozen”. This would be definitely more complex to spec. We would have to agree on first of all what “deeply frozen” means. And add a procedure for determining deep frozenness to the spec. But it would give the greater functionality. There was some discussion in the issue here and something a point that ACE made is that if we have this more limited capability for the reviver or no reviver at all, it's not like that removes any expressiveness from the language as it is you can already JSON parse and create something that is deeply frozen by doing the freezing yourself in a reviver. We're just trying to create a happy path; creating a clearer, possibly optimized way of doing that. So it's not as though we're removing any functionality. By not having a reviver or by having a limited reviver. But it's kind of a judgment call about how much capability do we want to provide and how messy with the spec are we willing to get. So I'll pause for further input.

KG: Yeah. I don't know how I feel about the general topic of the revivers yet. But just a quick comment. So the way that the reviver works right now is that it's the second argument to JSON parse and it must be callable. If you pass something non-callable I forget if it's an error or if it's just ignored. If we did go with the options approach rather than the separate method name approach the obvious way to do options would be to pass an options bag as the second argument and then it would just take the place of the reviver. And if we think that you don't really need a reviver for this because it doesn't add any expressivity—another way of thinking of that is that this is a shorthand for a particular kind of reviver which is basically just a reviver that freezes all of the objects it returns. So you could say that you are just passing an object here in place of passing a reviver, that is sort of specifying the reviving behavior that you want. And then you very naturally cannot also provide a reviver because the options bag is literally taking the place that the reviver would have.

ACE: I love it.

PKA: I'll just add it would also be pretty easy to tack on a reviver field to that options bag if we wanted to.

KG: Well, yes. But I mean it would—

PKA: Like if you want a null prototype but not frozen for example. Might you then also want a reviver? It seems like you might.

KG: Well, I mean the thing that I am imagining is that you have an options bag that has say two options one of which is “null proto” and one of which is “frozen”. And you just specify those in the options bag.

PKA: For sure. Yeah. Yeah. I mean what you're saying is coherent.

KG: Yes. I agree that we could additionally have a reviver option in the options bag.

PKA: Yeah.

EAO: I support object as reviver.

ACE: I said I love it. To expend on that. So one other thing I was thinking about in this design space was one of the motivations for this is the performance gain. Like right now passing a reviver takes you off the fast path. I was imagining another design we could have is like we have some built-in revivers with some semantics and you know engines could—the spec wouldn't say this but engines could see "oh you're passing in one of these well-known functions I know exactly what it's going to do so I don't actually literally need to call it". But the options bag is a way better way I think of expressing that especially because I couldn't think of a nice way you could compose these like static functions in a way that would work because of just their shape of key value to value. They don't necessarily chain. So yeah. An options bag in place of the reviver sounds good. I could also imagine a proposal that builds in some other of the common patterns we're starting to see such as like the bigint instead of people over and over again writing the reviver that looks at the source text that does the BigInt thing. If we see that pattern become super common we could maybe say that's one of these built-in reviver flags so you can still hit a fast path when you want that logic. I'm not proposing that right now but yeah. I think that's a much better design. So I thank you KG for bringing that. I can see why you're winning awards in this committee.

EAO: If we are approaching this as providing a way to define a reviver through an options bag it would probably make sense for the defaults of that option bag to be the preferred behavior and therefore rather than considering names like “frozen” or “immutable” it would I think make more sense in this approach to have the option there be “mutable” that you would need to set to true rather than the default false in the options bag in order to not opt in to getting frozen behavior out of this approach.

PKA: So does that mean that passing an empty object would produce a frozen result but passing no second argument at all would give you a not frozen result?

EAO: If we make it so. I mean I could also buy the argument that we would require that options bag to have at least something in there because we also have this other approach of having the wanting to get the null prototype so you would need to opt into something in the options bag but this is details and I don't really have a strong opinion on where those go.

PKA: Yeah. I feel like given that the default is already to produce something mutable it feels like we can't escape having the default option also be mutable. I mean if we just made a whole new function `JSON.parseConfigurable` or something. That's not the right word.

EAO: JSON.parse2

PKA: Yeah. And you know then we could then we could you know decide new defaults for things but I'm not sure that's on the table.

KG: Pretty much just seconding what PKA said. I think that the defaults have to be the current behavior. This is also a more general web platform design principle for options bags like omitting an options bag has to be equivalent to passing an empty object for the options bag and you know specifying any option with false in the options bag is supposed to be equivalent to omitting that option from the options bag and so forth. So I think that is what users expect. It's written down as a web platform design principle which doesn't necessarily constrain us but I do think it's generally good to follow the design principles that other parts of the JavaScript ecosystem follow, and this is a pretty widely followed principle. So as much as I like opting people into better behavior I don't think it's reasonable to have the defaults be anything other than the current behavior.

EAO: Alas.

SHS: Yeah. It may not be great but if it's not actually an empty object as an argument but some sort of a you know going through a function I don't know if this ruins the just in time optimization or anything but that would allow you to have good defaults.

PKA: You're suggesting sorry. Can you…

SHS: Sorry. If instead of just passing an empty options bag you pass in a function call. Do you give it the options bag for what kind of reviver you want and it gives you a reviver function that has those properties. And now you can have good defaults for it.

KG: Just one last quick comment. Someone, LGH or someone was mentioning that it would be nice to have support for JSON modules for this as well. The options bag approach plays nicely with JSON modules. You could just have an "options" field in the import attributes and then pass it an object, or it isn't literally an object. It's a special syntactic form or whatever. Or maybe it is an object. I forget. Anyway whatever. You can support basically the same options that you would here as long as it's not like a function. If it's just an object then you can write basically the same thing in an import attribute.

PKA: Yep. Great point.

CDA: Nothing more in the queue.

PKA: Cool. Well yeah you'll hear more from us on this topic much to ponder. Thanks everybody.

### Speaker's Summary of Key Points

* Discussed naming, `JSON.parseImmutable` vs `JSON.parseFrozen`
* Discussed returning objects with a `null` prototype
* Discussed how to handle the reviver property
* Discussed how an options bag approach could solve all 3 of the above
* Discussed possible relation to JSON imports with import attributes

### Conclusion

* No consensus was formally obtained but there was general positive reaction to moving to an options-bag API
* Work on the proposal will continue and brought back to the committee

## Error code property for Stage 2 or 2.7

Presenter: James Snell (JSL)

* [proposal](https://github.com/tc39/proposal-error-code-property)
* No slides presented.

JSL: Okay. All right. So this is error code property asking for stage two. Stage two seven if we can get it. Just as a refresher here what this is doing is just adding this a code property along the same lines as cause was added previously. It would be installed as a non-enumerable own property just like cause. In fact the spec text just modifies the way that the own properties are installed instead of installing just the cause property. We changed this to install error own properties that cover both cause and code. The value space for code is any value any type. Typical case is going to be a string. We do have the spec text here. The editor group has already started the reviews for this. No objections if not there. The one discussion that is still that we've had some pushback on is potential conflict with DOMException that's been raised by AVK. And this just goes back to the fact that DOMException has had this code property forever as a number. It's set up as a prototype property. There is no—it's not passed anywhere through the constructor through an options bag or anything like that. Looking at that discussion kind of where I know I've landed and I know where JHD appears to have landed is that we don't really see that there is a conflict but this is one point I think we just need to make sure that if if anyone here you know feels that there is a conflict here that we need to work out before we can advance please speak up.

JSL: But at this point we have a prototype—or not prototype but a draft set of test262 tests implemented for this. I have a draft implementation for v8 ready to go.

\[interruption by dogs 🐶]

JSL: Okay. So yeah for the error code property we have the spec text. All it's doing is modifying the way that that cause and code are being added. Like you know right now we have the one that just handles cause this one modifies it so it does both. We have test262 tests drafted up. The editor committees already started the editor review. No objections have been raised there. The one open question that we have really is whether there actually is a conflict with DOMException or not. This was raised by AVK. Looking at it, myself and JHD landed on that there's no actual conflict there. Given the way that the property is installed. And just opening it up for discussion.

MM: Yeah. So just what about SuppressedError? The current SuppressedError constructor does not have an options bag.

JSL: Yeah. This adds it. It would mean that causes there also although I wouldn't expect cause to actually ever be used for anything with suppressed error but this does add the options bag to suppressed error. So that we can add code there.

MM: Okay. So it is the case that if cause is used in this option bag it does get added to the SuppressedError instance. Is that correct?

JSL: Yep. SuppressedError and AggregateError are basically all database(?).

MM: Okay. Very good. Thank you. That's all. I'm in support.

KM: I haven't had a chance to talk to AVK about it because I saw this was on the agenda after he went on vacation and he's still on vacation for a while. It doesn't strike me as outstandingly problematic given that yeah it's an optional parameter. And it's a little unclear from Honor's position what if that solves his concern or not. That said I think I'm worried if this goes to stage two now and AVK’s concerns are still there and valid that it will be harder to make further changes as needed to satisfy him. Is it possible to do I guess I have a question for the chairs. Is it possible to do a conditional advancement on waiting for AVK to come back from vacation and then have me have a chat with him about it?

CDA: Is AVK technically a delegate here?

KM: I know he has been.

CDA: What I'm getting at there is I would be hesitant to make externality—AVK is currently listed as delegate. Yeah. So that seems fine.

CDA: I was on the queue so I'll just say my reply, which is I'm not convinced that it should be a stage two blocker anyway. I don't know. It sounds like we might have a difference of opinion there. I don't find churn at stage two as a result of this to be like a big problem if we were already at stage two. But I'll keep an open mind if folks feel differently.

KM: I mean I suppose the issue could be that AVK's opinions could be irreconcilable, that it could have to be a number or like it's reserved for these DOM things and they can't conflict with that. I don't know if that's his position. It seems more like his concern is that it will be confusing that there will be two different meanings of ".code". But I think it seemed more like his concern that this wouldn't be exposed everywhere. But I think that might be misunderstanding the proposal. Because this is provided by users and being attached. Am I correct in that we're not expecting web APIs to provide new codes and this would only be for userland adding their own error codes to the exceptions?

JSL: There I mean there's always a possibility that web API could define codes. Like you know you can imagine there's you know in the fetch spec there's various conditions where codes might make sense. But no cases with that are currently throwing a DOMException. Would be expected to. Right. In fetch there's places that throw TypeError or RangeError or whatever. Like those cases could use code. I don't imagine any case and this is true for like you know in user code also that's already using DOMException. I would expect any of those to ever conflict. Nobody's going to be adding new codes to DOMException.

KM: You mean that users are not going to add their own special codes?

JSL: Yeah.

KM: I guess the other question is whether DOMException propagates this flag. I guess it might. I don't know. I don't remember the web spec well enough to know, I guess I should have checked that. But I don't know if DOMException propagates options bags through the web through the TC39. Like how it's specified. I guess it would be odd then also if the JS code there could not provide their own code.

JSL: DOMException currently does not have an options bag at all. It doesn't even have “cause” right now.

KM: I see. Okay. I mean I guess how often users create their own DOM exceptions that also feels like it would be odd to me. But I could imagine having the pieces not connecting being confusing. I do think that that particular problem is a concern for sure. I think my concern with going to stage two—if we go to stage two and AVK feels like the whole thing is invalidating code that's still something we can negotiate at stage two. I guess CDA?

CDA: Negotiate what precisely?

KM: If the feeling is that code would cause too much that the name code causes too much confusion with DOMExceptions code and these are different things relitigating that.

CDA: I mean if it's just the naming that doesn't seem a huge deal to me. But I mean conditional advancement really ideally it has quite a narrow scope and it's not really you know I'm I'm just giving one opinion here. It's really a committee decision. That doesn't but that doesn't seem out of the question to me. We have some other items on the queue though.

MM: So this is a minor point but this is in response to the comment of the code really being just a user land. I do just want to remind that I want to leave the option open for in a future JS standard for the engine itself to, for some error conditions, throw errors with specified codes. That's that's all. That doesn't affect the current proposal at all.

JSL: Yeah. I think the door for that is definitely still open. It's very intentionally not addressed in the current spec. You know so we don't accidentally rule that out at any point. And I do want to make one other point on the DOMException. This idea that you know that the codes are two different things. Actually in practice they serve the same purpose the value space you know maybe different or how they get installed may be different. But they actually serve the same role. So calling it something else I think would actually be a problem. You know especially since you know the ecosystem's already landed on code that property code as being a very common convention.

JHD: Yeah. I was discussing this on this issue as well and I may have missed something because I was dual wielding meetings. But I still don't see a conflict here. Like if the point of this feature is to allow you to construct an error that has a code and to create the expectation that any error might have a code an expectation which kind of already exists, DOMExceptions will already have code. And any custom error type can choose to honor the user's requested code or not. And DOMException can make the same thing. So like it's just going to be fine if you try to make a DOMException with a code the web can decide to throw or it can decide to use it or it can you know only allow it if it's the same value or that it's trying to put or whatever. And then like either way you'll be able to do a `.code` on those exceptions and get a meaningful value out. So like what's the conflict here?

KM: I think what AVK is describing here is that the pattern for DOMExceptions is to use the name field that said I don't know the details of this because this is not my area of expertise in working with the DOM. So I mean I don't have a great answer for you probably because I just didn't have a chance to talk to AVK about it.

JSL: Yeah. I think that that's true only for DOMException. And if you look at general practice for any other error using the name is not common at all. It's only the practice when using DOMException.

JHD: Yeah. DOMException is the weird one there.

KG: I agree that DOMException is weird. That said, if we think that we are going to start adding this to web platform stuff, and it sounds like JSL wants to add this to web platform stuff, then we need to have a story for what we're doing with DOMException. And I would be unhappy if the story is that we spell this “.name” on DOMException but not in other places. So I don't want this to advance past stage two, I'm okay with it going to stage two but I don't want this to advance past stage two without a coherent story for what we are doing with DOMexception.

KM: That sounds reasonable to me. I think basically the answer is that we have to have some story of how this works with DOMException. I think I'm okay with going to stage two. But have it be understood that it's not going to go past stage two without a cohesive story.

LVU: I would agree with everybody else. This is basically the same purpose even if it's a different value space. I think there's value in the property being flexible enough to support different ways of specifying an error code anyway. So that would support the way it's being used in DOMException. DOMException could add an options bag to sort of bridge the gap. I seem to recall there's also some weirdness around how DOMException inherits from error. Like it doesn't properly inherit from error. It's just a special case of some sort. If we end up changing the name I think “name” is fine too that DOMException uses. I'm hoping we don't have to because “code” is the existing precedent in most of the ecosystem. And I would support stage two or personally I would even support stage 2.7. I think this is sorely needed.

CDA: I'm next on the queue. So I agree with KG on the position of stage 2 but not 2.7. I do think we need to figure these things out. I don't think we have to figure them out before stage 2. But I do think we need to figure them out before 2.7. And I think that also ideally get these questions sorted out the answers to these questions sorted out before editors and assigned reviewers are looking at it. That's not to say that they can't but you know part of the 2.7 criteria is that spec text is reviewed and I would want that churn to be taken care of ideally before reviewers are asked to look at it.

MM: Plus one for stage two. Hate 'name'. And I think that the resolution for DOMExceptions really should be that code is code. I mean that we just use we just say that the DOMException code field is consistent enough with the code that we're proposing and if you overwrite it if we if they add a options bag to DOMExceptions which is their choice not ours then it should have a code option and if it's provided it should override the code that was built in. I do that does raise a question that I'm not that because I'm not that familiar with DOMException is the existing code property either configurable or writable?

KG: Even worse, MM. The way that code works on DOMExceptions is that there is essentially a private field on instances with the value and there is a getter on the prototype that reads the private field from instances. It's not literally that but it's effectively that.

MM: Okay. In that case the the my recommendation about what happens I suspend that because I'm so confused.

JSL: And it's worth pointing out that WHATWG is still figuring out what they want to do with cause. And the spec says cause needs to be an own property where WHATWG discussion has been leaning is that cause in DOMException becomes a prototype property. So even in that case they're looking at making it different than what we've specced. So I am appreciative of those of you that feel like you know we need to figure out what to do with DOMException. But at this point I don't know what that is so my ask would be if those of you that feel we need to come up with something please open an issue with a proposal on what we do with it. So I've looked at this for a while and it's just not clear what that resolution is other than allowing DOMException to continue to be its own weird thing. I do notice that we are over time though I believe.

CDA: We are over time. We have a little bit of capacity so actually we have a fair amount of capacity. So we can continue this topic until for a while. So we're good.

CDA: KG you're good on the WHATWG code legacy right?

KG: Oh. No. I do want to mention this.

CDA: Oh. Okay. Sorry.

KG: One of the things that makes DOMException tricky, this is mostly a reply to MM, is that WHATWG considers this property to be legacy and doesn't want to use it for new things.

MM: Oh.

KG: If we are encouraging it then that would require a change in WHATWG policy.

MM: I see. I was not aware of that. Are they suggesting that there's something non-legacy that plays the same role?

KG: Yeah. So they have a `.name` property which is a string. Basically the way it works is that there was a `.code` property which was numeric constants, which they thought was bad but they couldn't really get rid of. So they added an additional `.name` property which is string values and the `.code` property—every code that previously existed was assigned a name and all errors that have a non-zero code have a name that is equivalent to that code. But new things just have a name and have a code of 0.

MM: So okay. So JavaScript errors do have an inherited name. They're inherited from they're a class of errors so the value of the name property that's inherited is always an error class name obviously DOM exceptions don't have a zillion well not obviously but I assume DOM exceptions don't have a zillion subclasses that the name is taxonomy to be used but it's not reflected it's in a class hierarchy. Are the values of the name properties you know identifiers like they would be if they were names of error subclasses?

KG: Yes they are. They are like NamespaceError or, I don't know, SecurityError.

JSL: Or AbortError.

MM: Okay. That's interesting.

JSL: Yeah. And unfortunately where the ecosystem has evolved it is at odds with this. When user code knows it's working with DOMException it knows to look at this. Every other error doesn't do this. And in trying to make where I create a new TypeError where you know where I change the name to something else it's actually going to break existing code because there's a lot of code out there that checks is name TypeError. To determine whether that's the type. It doesn't do an instance of check for a variety of reasons. So it's actually for us to use ".name" for this purpose of code would actually be quite breaking in the ecosystem. So it's the one thing it's kind of the one hard stop that I would have on this.

KM: For what it's worth I mean I think the fact that the code is a prototype getter versus an owned property is probably my assumption is that it would not be a compatibility thing mostly because it's not writable anyway. So you wouldn't be able to tell that it switched from one to the other. So in theory we could maybe change that to be consistent with whatever we choose here I think you know as I said repeatedly I do think whatever we do here has to be consistent with DOM error DOMException and I think we should make sure.

JSL: Yeah. Given the fact that we only install it as an own property when it's passed in through the options bag on the constructor and the fact that DOMException does not take an options bag right now mean you know I think sets us up that this isn't it this doesn't break web compatibility on on on the surface. If we chose to add an options bag to DOMException then that would need to be a decision made at that point similar to what they're doing with cause right now. They would have the exact same problem where "cause" doesn't currently exist but they're looking at defining it as a prototype property rather than an owned property. Which means its definitions can be different either way. So I don't think that's all to say I don't think that's a decision we have to make. I think that's a decision that WHATWG has to make in terms of how they want to evolve the DOMException type.

KM: I mean I think that we need to work with them to come to a cohesive design. I don't want to have two completely different exception things going around on the web. I mean to the extent I don't want to make that problem worse than it already is.

JSL: Yeah. I mean it just needs to be acknowledged that we already do. Right. That you know in fact that's what's web compatible right now is that we already do changing that might actually be might actually break things.

JHD: Cause already exists so if they make a prototype getter aren't they introducing a problem?

KM: I'm not talking about "cause". I'm talking about "code". I agree with you on "cause" that that would be an unfortunate choice if that's what happened.

LVU: (on the queue) what I was talking about regarding inheritance, there is a link to WebIDL with DOMException's specialness: https://WebIDL.spec.whatwg.org/#js-DOMException-specialnessqueue here?

JSL: So it sounds like we have I'm just going to check. It sounds like we have consensus for at least stage two? Is that correct?

MM: I support stage 2 not 2.7 until DOMException is settled.

CDA: I believe you had a good amount of support for stage two. Folks can feel free to re-express that support.

DLM: supports stage two.

CDA: I support stage two. Does anyone object to stage two? Seeing no objections. You have stage two.

JSL: Thank you very much. And just to close it out. Again, those of you that see a need for us to reconcile with DOMException, I would love an issue opened up with some ideas on how we can do that.

### Speaker's Summary of Key Points

* We have spec text, test262 tests, and implementation for v8 prepared.
* Possible conflict with [DOMException](https://github.com/tc39/proposal-error-code-property/issues/2) is only unresolved discussion

### Conclusion

* Stage 2
* Further advancement blocked on reconciling with DOMException
* Request for those who want DOMException alignment to propose a path forward

## Declarations in Conditionals for Stage 2 or 2.7

Presenter: Devin Rousso (DRO)

* [proposal](https://github.com/tc39/proposal-Declarations-in-Conditionals)
* Slides presented. Link TODO

DRO: I have no presenter notes but I'll give it my best shot.

DRO: I'm here to try to present from declarations in conditionals for stage two. Basically as a quick recap because I imagine that most of the discussion is going to be the you know time box. Basically the idea behind this proposal is, let's pretend that we have some very expensive operation on a getter for example. We have an object. We have a get for bar that does some expensive operation creating a giant array and sometimes does something else. In the current state of things if you wanted to sort of use a getter as a regular property access and you don't necessarily know any better you may try to fetch this twice. But to avoid this, if you use this multiple times, you now have to create multiple variables, and they live beyond the immediate scope of using that if. And they're more exposed, and you have to add 1 and 2 and all these other sorts of things, and it just gets more complicated.

DRO: So my proposal was basically to allow you to create variables inside the condition of an if. This is a pretty popular thing in a lot of other languages. It's something that I've wanted to do and find myself wanting to do all the time. In addition to that, we— you know, it allows for you to declare basically as many times as you want, the variables don't clash outside of the if, and in addition to that, you can also add additional conditions. So not only scoping the variable to the conditional, but also allowing you to control the exact nature of what it is that you're trying to check, whether it be for a particular length property, whether you're declaring multiple variables and doing something specific with that, sort of like a `for` or, or even doing just destructuring inside the if as well. Note that in these second two cases, where multiple identifiers are created, the second expression is required. So only in the scenario where you're not doing any destructuring, a very basic single identifier will implicitly allow you to check it for truthiness. Whereas in all of the other scenarios where multiple identifiers are created, you must provide a second condition to actually specify what it is that you're checking.

DRO: The big point of contention that has been for a little while now, for any of those who were at the TC39 meeting in Tokyo last fall, the big point of contention is whether or not the bindings are visible inside of the `else`. The argument for this is that it allows you to understand what exactly, so to speak, went wrong. You know, why was the check not valid? Maybe in this, for example, A was not valid, or B was not valid, or potentially both of them. It lets you sort of introspect a little bit of what went wrong. The arguments for keeping it only in the if are that it lets you reuse variables a little bit more cleanly, it preserves the lifetimes, and also makes things like using a little bit faster, in that you don't keep things alive longer than, you might potentially want to. So I would personally argue, based off of that, that no, we should not expose things in the else. That has been my preference. And that has been something that I've seen from a number of other folks, though there are some who do believe it should be in the if. And I do believe that the using example is one that particularly strongly supports the idea of keeping it as minimally scoped and minimal lifetime, as possible. There is also one thing that was pointed out from the editors, in that I have changed since November, in that now bindings are TDZ in the else, meaning that if you try to use it, you'll get a ReferenceError. Even if there is a variable outside of the if with the same name, you'll still get a ReferenceError. So you will either have to redeclare it, either using the same syntax, or inside of the else, in order to be able to use it. So with that all being said, last time, when I presented this in TC39, in Tokyo, I made the mistake of not really properly understanding what spec text meant, so now I actually have proper spec text and proper, semantics and all of those rules. So I am once again asking for stage two. And the queue is already getting big.

KG: I will present my note just a second, but before I do, I want to make sure RBN had an opinion that he put in the delegates chat yesterday. And, he's not able to attend because of a family emergency. I'm just going to, I want to make sure that his opinion is presented. I'm not a co-delegate of his anymore. I just want to make sure we don't forget about that.

JHD: Feel free to do so, KG, but I had told him I would do it for him.

KG: Great, okay. Just wanted to make sure that wasn't lost. I will have my own opinions. So, I think that the `using` example that you went by quickly motivates the whole proposal on its own for me. With regular declarations, this is just like a nice little bit of syntax sugar. But actually, assuming that the `using` is disposed before the `else`, the thing that you would have to do to get those same semantics without the declaration in conditional is actually quite complicated. It is not trivial sugar. So for me, that the ability to put `using` there actually motivates the proposal. Without that, I don't feel strongly about the proposal, but, assuming that the binding is not visible in the else and the using is disposed before the else, that motivates the proposal for me.

MF: Yeah, DRO, can you go back to the explanation for the `else`, the binding not being available in the else? Yeah, I just think these are not the most compelling reasons. I think the main reason for the binding not being visible in the else is because you can just create a block around the if, and you can put the binding there, and then this proposal would have no value on top of that. And if the binding was visible there, I would be against this proposal. So I think that the major reason for the binding not being available in the else is so that this proposal actually gives you something new.

MF: Moving on to my next topic, the TDZ opinion. I just wanted to make it clear, you said that it was an opinion from the editor group. This was not an opinion from the editor group. I did, and probably unfortunately, when giving you feedback, gave my editorial feedback and also gave my own personal normative feedback. I thought I made the difference clear between them, but I just wanted to clarify that that opinion was my own and not coming from the group. Not that they necessarily wouldn't support it. Maybe they would. But that's not the purpose of the editor group.

DRO: That's my bad on the mistaken understanding, then. And I apologize for attributing it as such.

MF: And, on that topic, you know, I wanted to explain my reasoning for that. The other languages that have this feature, I think either entirely or almost entirely, all make the binding available in the else. I think somebody who is used to that behavior might try to reference the binding that was introduced in the if in the else. Why is that a problem in JavaScript? Well, the reference will just read through. And it'll read through all the way to the global object. And often, we have bindings like "name", for example, or other things that on the web are just very, very common words that it will end up actually resolving to. So it's not like there would be a ReferenceError. It's not like there would be an undefined value. It would actually just get a thing that is the wrong thing. And that is like a really big hazard that I want to avoid. So, having it TDZ there would mean like they definitely get a ReferenceError, like it tells them you should not have written this name here.

KM: Along the same note there, I agree that if we're going to get rid of the thing, it shouldn't it makes sense that you might not want to do that. I would prefer a syntax error over TDZ error. With some caveat that you can, define a new let and it will unpoison the value in the else. The advantage of that is that, yeah, if you're coming from a language like C or C++ or whatever, any of those other languages that have it in the else, that you'll know immediately that it's not there, and something went wrong. And you need to restructure the code somehow.

OFR: Yeah, I just want to mention a really, really strong preference for the binding being available in the else case. I think everything else is very surprising given no other language does this. And there are plenty of use cases where you actually want to be able to use the binding in the else case. So yeah, there's I mean, it's basically on this slide, but I don't think it's a particularly good example here. There are other examples where you assign something and then I don't know, test. Like, you can for example, read out the property of an object and then test its type and then do something either or, and in both cases you will want to use that name actually. So I think there are many cases where actually the binding being available in both cases is useful. And everything else is super surprising. And yeah, so I would be strongly against removing the binding from the else case.

KG: Extremely strongly disagree. Also, you said that it makes it different from other languages. I believe you're just mistaken. As far as I'm aware, C++ is the only language where it's visible in the else, and in all of the other languages I'm aware of that support this construct, including at least Swift and Rust, it is not visible in the else. So I think we should do the normal thing, which is for it to not be visible. Also, I agree that there are cases where it's useful, but it is trivial to just put the binding in front of the, like, in the surrounding block, whereas it is not at all trivial to do the thing that is on the bottom right of the slide here with `using`.

MF: 100% object to it being available in else, declare it in a containing block instead.

NPU: What I wanted to say, further to what OFR said before is that, there are other languages that do one thing or the other, but I think that what distinguishes the behavior of these languages is whether we are talking about a declaration or some kind of pattern matching. Somebody, I think it was MF, before mentioned Rust and the behavior of Rust. So, in Rust, they don't have a declaration there. They have a pattern matching there. And it makes absolute sense to disallow these variables in the else case because when the pattern does not match, it's obvious that you don't have a declaration for the else case. On the other hand, languages like C++ or, in this case, the syntax that we are trying to introduce, which is, exactly the same as C++ is, this tends to, point to the direction of having a declaration there, not a pattern matching. It's, the declaration and the condition are clearly separated. So I think it would make it would make it very confusing for programmers if, the declared variables did not exist in the else case.

CM: I find MF's point about using a containing block completely compelling.

LVU: The way I see it, making it a I don't have a strong opinion either way about whether it should be available in else. The way I see it, making it available in else helps common cases, but not making it available in else is internally consistent with how block scoping already works with the rest of the in the rest of the language. So the main thing is that it seems to me that making it TDZ in else or even worse an error that seems to me like it's the worst of both worlds. It neither caters to common use cases that have to do additional user effort to work around it, nor is it consistent with how block scoping works in the rest of the language, or at least I cannot think of any relevant precedent. So to me, I think that violates the principle of least surprise. I can see how it helps prevent footguns, but to me, it seems that that's the job of linters. It shouldn't be part of the design of the language.

KG: Oh, yes. So this is in regards to the point about Rust having pattern matching rather than declarations. Rust's pattern matching looks like declarations. Like, as a Rust user, I don't super strongly distinguish between the sort of pattern matching that you get in an if and a declaration. Like, you're just declaring a variable. Also, we didn't spend very much time on it, but I want to keep going back to it. The, this syntax allows you to do something which is very hard to do, which the thing that is in the bottom right, where you want to do a using declaration and you want to do one thing in the case that the, the thing is, well, I guess it's not quite the thing in the bottom right. It's the, I wish we had an example on the slides. So this proposal includes a second form, which is where you have a semicolon after the declaration, and then you have an expression. So you might say, `using file = getFile(); file.needsUpdate`. The thing that that does, assuming the binding is not available in the else is very useful and very hard to do if the binding is available in the else. And I think that that is basically for me, the main reason to have this proposal in the first place. And that just doesn't work if the binding is available in the else. I don't think that there is a strong reason to put it in the else except for symmetry with C++. And I've given that C++ basically stands alone in having the binding visible in the else. I don't think precedent from C++ should be compelling.

KM: Yeah. I mean, I agree that I think the using is the case where it's particularly useful. In particular, yeah, it closes your resource in the case that, the resource failed to load or something else went wrong. Or sorry, you had some other piece of code in there that you want to, bail out of. And it disposes of it much sooner. I think I used to be on the form that it should be available in the else. But I think that the using case motivates it enough that it should be consistent between all of them. We should probably be consistent here.

OFR: Yeah, I'm not entirely sure about this, about this argument with the using. I mean, especially the example that you just provided before, like, file needs updates. I don't know. Like, I might need to do something with the file also if it doesn't need an update. To me, it doesn't seem clear at all, to be honest. Like, that one or the other is useful.

KG: Well, the point is that you can already do that just by putting the declaration outside of the if. Like, if you want to use the value in the else, you can just put the declaration outside of the if. That's completely trivial. Whereas the thing that this lets you do, in the case that you want to dispose before the else is actually quite hard to write. I put an example in the delegates chat.

OFR: Is this a common thing that you want to do, that you would not need to do anything with the resource in the else case then?

KG: It's pretty common.

OFR: And also the other thing would be that you would actually benefit from the shorter lifetime. I mean, the example that you also gave there, I guess, .

KG: Yes. This came up in Rust. Rust had basically exactly this. You acquire a lock and you do something if a condition passes and otherwise you release the lock and do something else. And, they actually used to have the semantics that the lock was released after the else. And this was a famous source of deadlocks; many, many people ran into this. And they actually changed the semantics, which they don't really like to do, but they changed the semantics of when the disposal happened, just to avoid these deadlocks. So this came up a lot. I agree that you don't use locks as much in JavaScript as you would in Rust, although that might someday change, I'm really hoping we can revisit the structs proposal someday. But, I think it does come up, yes.

JHD: Yeah, so I'm here representing RBN's position, since he's unable to make it today. Or this week. So, essentially, in November, he asked that we postpone this proposal's advancement until we discuss cross-cutting concerns with pattern matching and possibly extractors as well. And he doesn't believe that was ever addressed. If declarations and conditionals advances to stage 2 or 2.7, it will likely force pattern matching into a direction that many of the champions have expressed opposition to. It may mean yeah, there's some more details he's got in the pattern matching champions, matrix channel, but essentially, he wants to block stage 2 as well as 2.7 because 2 means a chosen solution, and he's not yet convinced this is the correct solution. And wants those cross-cutting concerns discussed more in depth.

KM: I don't see how this would impact like, a lot of decisions here, especially in the else case, would presumably equally apply to pattern matching.

JHD: Yeah, that's not—the else case isn't the issue. It's the grammar of doing the pattern match itself, which in the past feedback from delegates has moved the pattern matching syntax to use declaration syntax for consistency. And so this is basically overlapping the syntax space that the pattern matching proposal has that previous feedback has moved the pattern matching proposal into.

KM: What pattern matching I guess I don't know the exact syntax we're talking about here, but wouldn't that same problem exist for loops and the syntax already exists in for loops? So like, you'd still have the same problem you'd have to solve? I think. But anyway, all other people go.

JHD: I don't think pattern matching has any intention of doing a pattern match in a for loop header.

KM: You wouldn't want to, it feels like you might want to do that, but okay. Anyway, I'll let you go.

JHD: You might want to have a pattern match expression be the terminating condition, but I don't think there's any conflict there.

DRO: Yeah, I mean, I talked with RBN about this on matrix and also there was an issue opened on this proposal talking about the overlap. And I sort of agree with Keith, and I believe there was one or two other folks who mentioned that, I don't see where there is a syntax overlap. And sorry, there is an overlap, and I also feel like there is a pretty big syntax difference between the two proposals. And if there's different syntax, there can be slightly different behaviors. I mean, if that is really that big of a problem, certainly I'm happy to talk with him. But I just don't see where there is an overlap. And, I'm not entirely sure what to do in the same like, the proposal that I have is a very specific thing, and I'm not entirely sure how like, I don't really want to bring parts of pattern matching into this proposal because I feel like that changes the nature of this proposal. And I also feel like.

JHD: Yeah, I don't think that's a problem.

DRO: Well, I'm okay. That's not the sense that I got. But I would also say that if, and I apologize if it sounds like I'm cherry-picking your words because that's not my intention, but the phrasing and the understanding that I sort of the feeling that I got from talking to RBN was that my this proposal would sort of set a precedent that would force the pattern matching proposal to go into a direction that the pattern matching champions didn't like. And some part of me finds concern with the fact that this proposal has been sort of guided in a direction based off of feedback from delegates. So if that direction is not the direction that the pattern matching champions like, then the pattern matching champions are at odds with what the delegates are indicating. And I'm not really sure how to reconcile that.

JHD: The pattern matching direction that we're that we don't want to go in is something that surprise blocked our stage 2 advancement for pattern matching a couple of years ago. So it's previous delegate feedback. We cannot go in that direction. Our preference was the original direction, and we got delegate feedback to move away from that. And we would have to, like, I hear what you're saying, that delegate feedback has guided this proposal. But if this proposal cuts off the pattern matching direction that delegates will tolerate, then there's no other direction for pattern matching to go.

DRO: Sure, but by that same token, if this proposal has to change course to not conflict with pattern matching and in doing so conflicts with what delegates have said that this proposal should do.

JHD: Yeah, then that.

DRO: How exactly do you make that work?

JHD: And I agree. That's yeah, that's I mean, I think that's the discussion Ron would like to have at length. I can't you know, I can't speak fully for his position. I can only represent it. The best to the best of my ability. But, yeah. He has a lot more details in his head about the syntax and the overlap and the direction and stuff. So I think, it's worth at least hopping on a call, I think, with you and he and figuring out what like, getting on the same page about where the conflicts are, or that there are not any. And, and see if a solution can be hammered out.

USA: We're running closer to the end of the time box, but not quite yet. Anyhow, MF, is next?

MF: Yeah, so I am sympathetic to wanting to make sure we get alignment between this proposal and pattern matching. I have no dog in this fight about whether it's actually appropriate or not, but I do think it's appropriate to give both champion groups an opportunity to try to get alignment here or at least time to do so. I think that a reasonable amount of time is just one meeting. And any further delay would not be appropriate. So I encourage these groups to work with each other before the next meeting because I would not be so willing to delay any further if this is brought up again.

MM: Yeah, so pretty much agree with MF. I don't want RBN's objection to lead to an infinite delay. I'd really like to get this resolved by next meeting. But the reason why I find RBN's objection compelling might be different than RBN's reasons or the pattern matching folks' reasons. With regards to the procedural model, before I state my reasons, let me just state, I am a delegate, of course, and I'm a delegate that has not been involved with pattern matching. I'm actually not a fan of the pattern matching proposals I've seen, but I am very much a fan of extractors, which need some pattern matching framework around it. The reason why I think it should block advancement of this to stage 2 until we resolve is that, if we could say that it's just pattern matching in the head, that is the extension, and not declarations in the head, then we're switching on, patterns are refutable. Whereas declarations are currently irrefutable. And the, switching in the if in the if with the variables not being available in the else, which I agree I don't want the variables available in the else, just is much more natural if the thing that's in the head of the if is refutable and we're in the `else` if it gets refuted and we're in the then part if it does not get refuted. And then obviously you can you can you know, your pattern matching syntax can include a, you know, something around a Boolean expression if you really want to turn it back into doing a test on Boolean. So I want to not approve stage 2 currently on that basis, but I really would like to get this resolved. That's all.

USA: Thanks, Mark. We have a reply by Keith.

KM: Yeah, I mean, I guess, I'm concerned about stalling this I mean, one meeting might be fine, but I'm concerned about stalling it generally because I mean, pattern matching has been a proposal for, I think, roughly 10 years. It's still stage 1. I think I have I think there's a lot of concerns on the committee generally about pattern matching. I didn't think about extractors. I know talked about extractors as possibly related, but the it does feel like I'm not totally convinced that pattern matching will ever end up being a complete feature. I mean, I think there's too many conflicting interests. And I may be I'm wrong. I'm not saying that I, you know. I don't know. But it feels like there's a lot of competing interests in pattern matching and how it should work. And the it would be a shame to completely block something like this that I think has real use in particular for the using case, as we talked about. On forever. On a proposal that may or may not happen.

DLM: Sure. I'll be quick. I just want to express that I agree with Keith on this one. I really like this proposal, and I think it's solving a, fairly obvious and immediate need. And I would not like to see it stalled indefinitely based upon pattern matching because I share the concern that that might not ever make it into the language.

PKA: I just wanted to ask, is it possible nobody needs to answer, but just raise the question, is it possible to do `using` with pattern matching, at least as currently constructed, because I agree with Kevin that using is, kind of the killer app for this feature, and that, that should be the main motivator here.

MM: I just wanted to ask about all of the other control structures, whether it makes sense to extend this proposal to them. I listed `while`, `try`, and `switch`. I think it does not make sense for `try`, but wanted to get your opinion. While, it could make sense of, but the counterargument could be, well, it's so similar to what four or, the four semicolon form already does. And `switch`, I often find myself declaring variable right before a switch, that I then switch on so that the variable is available inside the body of the switch. And for that, since there is no else, default is not else, the, having just a block around the whole switch as in the Michael's answer for why not else, seems like a good counterargument, but like I said, I want to get your opinion on, extending this to other control structures.

MM: And I'll also just, while I've got the microphone, mention the other thing, which is, TDZ implies that the error doesn't happen unless the `else` is executed. Whereas SyntaxError, like KM suggested, means that you get a static rejection. This seems like there's no reason for this to be a dynamic issue. The error should be early, not late. That's all.

USA: Quick point of order. Less than five minutes remain, and it is a long queue. But we can get through it. First, we have MF, who says, while support is already in the spec text, then we have a reply by DRO.

DRO: Yeah. I apologize. I could have given more in these slides. I was trying to keep it as brief as possible because I imagine there would be a long discussion, as there has been. So yes, it is supported for `while`. And as you point out, there is no else. It's not in `try` because, I'm no pun intended, *trying* not to do a huge amount of syntax or behavioral or whatnot changes. And it's not in switch primarily because many delegates expressed a strong dislike for it the last time this was presented in Tokyo. And I feel like the semantics of that in that scenario are a lot more weird than something like a while or an if. I don't know that I've ever needed that kind of production. Whereas I probably daily wish that I could put a declaration in an if or a while. At least an if, while is very frequent as well, almost daily.

MM: Okay. So I'm happy with that answer.

JHD: Yeah, I don't want any improvements to switch statements. They're terrible and need to die. That was my comment.

MM: With the TDZ thing, I just want to ask, is does anybody favor a dynamic error that happens only if the else is executed as opposed to a static error? Is there any reason to not have a static error?

EAO: I mean, having a time-traveling TDZ would be kind of funny. But that's the only reason I can think of.

MM: What is a time-traveling TDZ? I think I don't understand the time-traveling TDZ, but it sounds like I don't need to.

EAO: You don't need to. You don't want this. I don't want this.

DRO: im fine switching to static/early error (EOM)

MM: Okay. So in the, in the written responses, I'm seeing no support for, for TDZ for the runtime. so the first reply from Devin has an EOM on it, so we can go past that. Waldemar, yeah.

WH: I think it should just be a syntax error.

KG: This would be the only place in the language where we do this kind of syntax error for a reference to a binding. Like, just because the binding is unbound or otherwise unavailable. I guess I'm okay with it. I don't see anything wrong with it. But it is kind of weird.

MM: Okay. So I take that not to be an objection.

MF: static error is fine by me (EOM)

KM: TDZ has runtime cost too (EOM)

MM: and then Michael, about reference error. That's an interesting point. Go ahead, MF.

MF: Just WH mentioned a syntax error. I had assumed that we would make it an early reference error and it's not really important, most people don't distinguish between them, but that seems like the right thing to do for me.

MM: Wooow

MM: Okay. I do not object. It's we don't have any cases right now of an early reference error. Interesting. Okay.

MF: I'm not 100% sure if that's correct. I need to look.

NRO: Aren't all early errors syntax errors?

KM: Whether it's a reference error or syntax error is something that could be solved at stage two. That seems like it would be not a super significant semantic change. Assuming that we're all agreement that it should be an early error.

MM: Yeah. I would agree with that. So Nicholas, did you have more to say on that?

NRO: We can figure it out offline.

KG: LVU spoke earlier, in defense of not making this an error, I don't know if she's on the call.

JRL: I mean, I'll take that because that's my topic exactly. Behind all of these current replies, the one I've had is, "Why is this an error at all?" Can you go back to the slide before this where you showed the TDZ or what we called the TDZ, but it's now probably a reference error? So if we like, the reason I dislike this proposal is because we don't want it in the else condition. And the reason I dislike that is because it means the else condition, which is a child of the if condition, cannot see the binding in the if. Okay. Let's assume we have to have the dispose happen in the if condition. Why can't we the else refer to the outer data here? Make the if only contain the lexical binding in the else is outside of that lexical binding.

DRO: I mean, personally, I would say that I tend to agree with LVU that this would be something that codebases could decide for themselves for linter rules as to whether or not this is something that they would allow. I mean, it definitely seems like a bit of a footgun, but I also could see a scenario where a developer might actually want to do this. And ultimately, it seems to me like this is something that could be decided as a preference of whether or not this is something that is disallowed by linting. Or it's something that is allowed and usable. I mistakenly thought that this was editor feedback as opposed to an opinion. And so that was my blunder in terms of just sort of blindly going ahead with this. I apologize. This is the first proposal I've ever worked on, so I'm still learning the process.

JRL: All right. So we have a point of order. We're now two minutes over. We're getting into our lunch break. Here we have technical difficulties with CDA trying to do the sharing. So I'm taking over. We're two minutes over. We have a bunch of replies that we've kind of gone through, so I'm just going to mark all those as being responded to. We've gotten to my topic, and then OFR is next: "in Rust, if-else is an expression". We do not have time to go through this further. If you can talk about this over lunch or on the GitHub repo, that would be preferable. Barring any other point of orders, I think we need to call it now for lunch, and we will be back in 56 minutes. All right. See everyone then.

### Speaker's Summary of Key Points

* Proposal now has actual proper spec text.
* Bindings are not exposed to the `else`.

### Conclusion

* Need to meet with champion of Pattern Matching proposal.
* Decide whether to make referencing bindings in the `else` an early error or allow it.

## Async iterator helpers open questions

Presenter: Kevin Gibbons (KG)

* [proposal](https://github.com/tc39/proposal-async-iterator-helpers)
* [slides](https://docs.google.com/presentation/d/17_mL3guxupbKWKr1EbDdML9K9kPTqElbf9xgoZZDBh0)

KG: Okay. I am hopefully sharing my entire window and not just the presentation for reasons we'll get to in a moment. But hello, everyone. Welcome back to Concurrent async iterators for the 7th or 8th time. I have presented this. I have finally actually made some progress. Which we'll be getting to in a second. I am not at this time asking for advancement, but I have a handful of open questions to come to the committee with in case people have opinions on them, which I think once resolved are the only remaining open questions such that I can then write down the spec text and come back for a stage 2.7. So brief recap. What are we talking about? Oh, sorry. We'll get to this slide in a second. Brief recap. What are we talking about? We are talking about dot map, dot filter, dot flat map, on async `iterator.prototype`. They don't currently exist because we realized in the process of specifying them that actually they can support concurrency in this kind of magical way where the user can just do multiple pulls from the resulting iterator and have that do things in parallel. Or sorry, do things concurrently. And in this example, we would potentially do two potentially be doing two fetches concurrently or a fetch concurrently with a pull from the underlying iterator. There is also a helper that I think is worth including although it doesn't necessarily need to go in the MVP called dot buffered, which like the name suggests, just buffers results internally. So it will do these pulls it will do two pulls concurrently so that if you are iterating over it sequentially, you still get potentially some degree of concurrency. I think this is a useful helper to have in the proposal because it allows you to get this concurrency without manually driving anything at any point.

KG: So handful of design principles that I've been trying to follow. And again, we'll get to implications of these in a second. It should be order-preserving. This actually gives up a lot of concurrency. But is unavoidable. It is impossible to avoid giving up concurrency. If you want to be order-preserving, and not have unbounded buffers, and I do think that the basic async iterator prototype map and filter and flat map need to be order-preserving. Another principle is that the helper owns its underlying iterator where ownership means that the helper assumes that it is the only one pulling from it and more crucially, closes the underlying iterator at the appropriate time. So that's if the helper is closed or the helper throws an exception itself that doesn't come from the underlying iterator, then the underlying iterator would get closed. Also, we want to avoid losing values. This, I think, is a little bit subtle, but you can have this weird case where you do, say, two pulls from a map. Sorry, two pulls from an underlying iterator that you are mapping over, and then the mapper function throws for the first value. Well, the second value is sort of hanging out in limbo now. So I am trying to ensure that it is still possible to recover that value or rather, you pass that value to the mapper function and then recover the result of that. And finally, we do need to have some limits on the sorts of iterators that we are able to handle. And this is the primary one. Which is that we assume that an underlying iterator will never give us a done false which is sequentially following not temporarily, but sequentially following a done true in the sequence of values. The question of how do you handle this incoherence is open and again, we'll get to that.

KG: Okay. So that's the background. Before we get into the open questions, I have [a live demo](https://bakkot.github.io/async-iterator-helpers-implementation/). I am very excited about this demo. I spent a slightly unreasonable amount of time on this. But this is showing this demo is actually hooked up to an actual implementation of my current best choice of semantics for map, filter, and flat map. There's an interactive thing that you can do. But I do want to spend at least a few minutes playing around with some of the scenarios that I have in this demo because I think that they are important to understand what we're getting into. So I guess, yeah, I'm going to spend the next at least 5 or 10 minutes just going through well, maybe not 10 minutes, but a few minutes at least just going through the demo.

KG: So pause here if anyone has things you want to bring up before I do that. Nothing in the queue, though, so I will just proceed.

KG: Okay. So map. How does map work? So this is actually more of a how does this demo work? You see there's this dot which has appeared on the screen. Hopefully, you can see. That dot is where the next external to the machinery thing is going to happen. So a dot next to the result iterator means someone is pulling from the result iterator. So someone does a pull and now they have this unsettled Promise which is what this box indicates. The next thing that happens just immediately as a consequence of the machinery, this will do a pull from the underlying iterator. All right. Let's suppose we are not trying to do any concurrency here. So the user isn't pulling multiple times. They're just going to wait for their result to settle. So the next thing that happens is the underlying iterator will at some point give us a value. So dot indicates something external to the machinery is happening specifically what's happening is that this Promise is settling. Okay. So it settles. It goes into some internal buffer which is calling the mapper function. At some point later, that mapper function which can be asynchronous settles. And sorry, the Promise from that mapper function settles. And we get a value. And that value immediately goes into the result. All right. This is just how map works. There is nothing interesting here. Slightly more interesting example concurrency. So in this case, we do a pull. And again, it pulls from the underlying iterator. But now, the next external to the machinery thing that happens is that we do another pull. Sorry. No, I guess in this example, the next thing that happens is the underlying settles. And then while we are waiting for the mapper to run, the next thing that happens is we do another pull. So here, we do another pull from the underlying. And so now you can see we have two things happening concurrently. There is the mapper function and the pull from the underlying. So great. We got concurrency. Supposing that the underlying settles, now we might have two mapper functions running concurrently. And it is possible for those to settle out of order in the sense that we could have the sequentially second one settle before the sequentially first one. And in that case, for map specifically, that allows us to deliver a value to the result Promise. We can't do that for filter or for flat map. And we'll get into why in a second. But for map, we can. One of my open questions is, should we? And we'll get back to that when we get back to the slides. Anyway, let's just play this out. The only thing that can happen after this is the internal Promise for the mapper function can settle and go into our result and we're done. So great. That wasn't too complicated.

KG: I am going to go do the equivalent demos for filter and flat map just so we have an idea of the basic semantics for all three of these helpers. So filter. Running through the non-concurrent example much faster. Do a pull from the result. Pulls from the underlying. Underlying settles. Now we are invoking a predicate on that. Again, the predicate function can be asynchronous. It doesn't have to be. And there's an open question around that. But it could be asynchronous. And the result is, let's say, true. Okay. We just get our value in the result. Then we do another pull. Same thing happens. But let's say in this case, the predicate returns false. Then immediately, this will sort of throw away that value because this is a filter. And we will issue another pull from the underlying iterator. Which let's suppose that returns true. Then that can go into the result. Again, nothing particularly interesting here. This is how filter has to work. There's no nothing about this would be different in a world where we didn't care about concurrency. But let's make it a little more complicated and do a little bit of concurrency. So we are now going to issue two pulls from the result iterator. Which will cause two pulls on the underlying iterator because we know that we are going to need at least two values. And those can settle in whatever order. We might suppose that the second one settles first. And let's say it settles with false. Then we'll immediately do another pull on the underlying because we still know that we're going to need at least two more values from the underlying. So we do another pull. Let's say that settles immediately. And we invoke our predicate. And that settles immediately. And settles with true. So now we are in an interesting state with map. We when we got this later sequentially later value, we could just put it into the result Promise immediately. With filter, we can't do that. So this just has to hang out in this internal buffer. And the reason why is, well, let's suppose that our predicate well, yeah. Let's suppose that this predicate returns true. Then the value will go into the second slot. But if it returns sorry, then the value from the second buffer slot will go into the second result slot. But if it had returned false, which I think is this demo, yes. And this is same scenario as previously, but now the predicate returns false. Then this value would have gone into the first result slot which is a necessary consequence of our intention to preserve ordering. And we do another pull from the underlying just so we can fill our outstanding value. And that might go there. So this filter is different from map in that we cannot ever eagerly fulfill a value in filter. With one exception, which is if we get a done true from the underlying iterator, which I've indicated with this done true and this cross-hatch, which I don't know if that's coming across on the slides. But from the underlying iterator, we can get a done true at any point. And now, because we are assuming that we're never going to get a done false after a done true, we know that there are at most two values that we could ever get out of the sorry. There is at most one value that we could ever get out of the result iterator because we know that at least one of the values from the underlying iterator did not pass the predicate. And that there are at most two values from the underlying iterator total, which means there is at most one value from the underlying iterator that passes the predicate, which means we can settle the second Promise from the result with done true immediately. And I have with these little tombstones marked those as now being closed, which is only relevant when we get into calling dot return, which we'll get to later. But we could still get that value from the earlier pull. And it could by hypothesis pass the predicate and result in true. So there's nothing I think there's nothing surprising here. Hopefully. But it's just an illustration of some of the bookkeeping that we have to do and some of this oddity where you can have a done true specifically settles before a done false. And let's actually replay that scenario, except let's suppose that when we get our value from the first pull of the underlying iterator, our predicate returns false. At that point, we know that there are no values from the underlying iterator, which pass the predicate, which means that we settle the first Promise with done true. So we have this kind of odd situation where we are marching back from the end of the result iterator and resolving things with done true as things fail to pass the predicate. Again, I think hopefully not surprising. This is really, I think, the only way it could possibly work.

KG: Okay. Let's do `flatMap`. The big complicated one. Flat map is fun and difficult to represent visually because we have several iterators in play. So we'll see how that's going to look. But again, let's start with no concurrency. So we just do one pull from the result. That does one pull from the underlying. That resolves the value. And then we invoke our flat map function on it. Which is potentially asynchronous. But at some point, resolves with a async iterator itself. So now we have even more boxes on the screen and we do because we need a value. We immediately do a pull from that. And at some point, that value will settle. And that value just goes in the result right away. So nothing particularly fancy. And if we do another pull, because we haven't opened we haven't opened iterator to pull from that is not the underlying iterator, we just do a pull from that. And if we get a value, then it goes into the result. We might at some point do yet another one. And then if that one gives us a done true from the inner iterator, then we know that we have exhausted the inner iterator and we need to pull from the underlying one again. And call our mapper again. And get yet another async iterator and pull from that. Which finally gives us our value that goes into the third slot. And we keep pulling maybe the second iterator only had one value. So we do another pull from the underlying. And that one maybe gives us done true. So now, finally, we know that we're actually out of values. That was all of the values we had. Again, no concurrency at all involved in this. This is just like how flat map has to work, I think. Gets a little more complicated with concurrency. Let's suppose that we did two pulls while we were still waiting for that first pull from the underlying one to settle. With filter and with map, we would have done two pulls from the underlying iterator because both filter and map, we know that we need at least one pull from the underlying per value in the result. Not so for flat map. In this case, we might get two values out of the first pull from the underlying iterator. So we do not do a second pull from the underlying iterator at this point. We just sort of keep a count of, well, we're going to need to do two pulls from the first inner result. So let's proceed until we actually get that one. So now we haven't inner async iterator. And we immediately issue two pulls on it. So the quirk of this implementation is that we are never doing any concurrency for the underlying iterator. Concurrency only happens on results of the flat map function. But I think that's really the only sensible behavior. Anyway, let's just play it out. Those values can resolve. Maybe we do another pull. We get done true. We do another pull. I think nothing terribly surprising here. It's just a lot more complicated. Okay. That is the basic behavior for all of map, filter, and flat map. The basic way concurrency works. Flat map has a dozen edge cases. I want to go through another one really quick because we already talked about the difference between map and filter in terms of where when we can do delivery. Flat map is more like filter than map in this regard, which is that we can't generally speaking do delivery as values come in. In this example, we pulled from the internal, but one sorry, we've pulled from the result three times. That ultimately leads us pulling from the first inner iterator three times. And those can settle out of order. We might get a done true, for example, and this tells us that there are only two values from the first inner iterator. So we do need to pull from the underlying again because we know we will need at least one more inner iterator. And maybe that one is faster. And it gives us a value right away. So now we are in this state where we have a value. We have this B1. It is going to end up in one of those three slots in the result. But we don't yet know which one. Because it is always possible that one of those earlier two Promises from the first iterator might settle with done true. And I believe yes. No, I guess I didn't have that in this example. But we can deliver results from the first inner iterator as they come in. But we can't deliver the result from the second until we know the length of the first one, which we don't know until it actually finish settling. And I guess this was the scenario where that happens. So let's play it out. Exactly the same as before. We have our value from the second inner iterator. And but in this case, the inner the first inner iterator only ends up being of length one. So in this case, the B1 ends up in the second rather than the third slot of the result. And so we might need to do another pull from the second inner iterator. So again, lots of bookkeeping.

KG: Okay. I want to get to my open questions. I do want to show one more thing that we have to think or I guess two more things that we have to think about. Before we get to the open questions, I would love to go through all of these scenarios I spent a lot of time on them. We just can't possibly go through all of them. But this demo is online and I would really like people to play with it. But one more thing that we have to think about. Which is that iterators don't just have next. They have a return. So let's play out a scenario where we're doing some basic concurrency in map like we were before. And maybe we're getting some values. But suddenly, something else happens. Suddenly, while we are waiting for our previous Promises to settle, the user calls dot return on the result. All right. The thing that I have chosen to implement is that this will immediately call dot return on the underlying iterator. We could choose to instead queue up that result. And wait until the underlying iterator has no more outstanding Promises. I don't think we should do that. The underlying iterator can, of course, implement this queueing itself if it wants to. But the calls to dot return are themselves Promises and can be happening concurrently with calls to dot next. That said, once we have called dot return, even if the underlying hasn't settled yet, we are considering the results to be closed. So we have this tombstone here. Which means that any subsequent pulls from the result will just immediately settle with done true rather than issuing additional pulls to the underlying iterator. Okay. Yes. I'm not going to play this out. But I just wanted to illustrate that you do, in fact, have to think about calls to dot return as well as calls to dot next. And the last thing that you have to think about is errors, which I'm indicating with these boxes. An error from the underlying iterator in map can just be sent immediately to the corresponding slot in the result. Things get more complicated in that scenarios. But yeah, you do also have to think about errors. One thing about errors is that errors from the underlying iterator do not cause us to close the underlying iterator. It is assumed that the underlying iterator knows that once an error occurs, it is considered to be closed. That is not so if the error arises from the mapper function because then it is that error wasn't in the underlying iterator. So in this case, we do need to call underlying dot return. And because underlying dot return is a Promise, and we don't want to call this Promise but then just never wait for it, I think it's important that we always wait for our Promises. So in this case, we can't actually resolve deliver the error right away because we are still doing this other asynchronous operation. You might think of it as an await inside of a finally. Where the finally is triggered by a throw in the try. We need to actually wait for that to happen before the error is delivered. So only once the underlying return call settles can we deliver the error from the mapper. So I think these are all pretty much how everything has to work. I just want to talk about some of that complexity. Okay. And I think that's all of the underlying mechanisms I wanted to talk about. Last thing before we move back from the demo is if you have a question about how something works, I have an interactive demo where these buttons are wired up to an actual implementation of map doing lots of Promise with resolvers stuff. And you can just be like, well, what happens if I call next four times and then the third one gives us done true? Well, there's a question of what happens to this value? Can we get values out of order? That is, in fact, one of my open questions. So we'll be getting to that later. But if you just want to play around with what I think the semantics ought to be, there is and your question is not covered by the slides or one of these scenarios. You can play with the interactive demo. I spent kind of an unreasonable amount of time making this. But it turns out to be very hard to think through these scenarios for me without something that I can actually stare at.

KG: Okay. Let us get to the queue before I get to open questions.

MM: Yeah. So the early binding that map that only map can do, the given that there might be an earlier done true that you haven't observed yet, I don't see how you can bind a later thing. That might come after done true.

KG: Ah. This is why we are saying we consider that scenario to be incoherent. So on one of my slides, one of my assumptions was that you don't do that.

MM: So the who doesn't do what?

KG: One of my assumptions all right. Sorry. My let me think how to phrase this. I have designed this such that I think we get the best results that are available assuming that no underlying iterator ever produces a done false prior to a done sorry. Subsequent to a done true.

MM: Okay.

KG: So the question of what to do in the case that the underlying iterator does do that is open. But all of my design decisions about what should happen in other cases assume that that does not happen.

MM: Okay. So I don't think there's an independence there. I think that if the resolution to the open question is that the map results stops when the underlying gives a done true, then you can't bind the map results that come after the underlying gave a done true. And that would be fine with me because that would be consistent with the other (flatMap and the filter).

KG: Maybe I'm not understanding. So let's use our interactive demo. So let's say we get three pulls. And you are saying we get a done true, followed by a done false.

MM: Well, not temporarily followed, sequence followed. But we got C after I'm sorry. We got C temporarily earlier. Right.

KG: Okay. Yes. And then let's say the mapper settled as well. And you are saying that because of this possibility, you do not want to have `fC` here.

MM: Correct.

KG: Okay. That is an option. I think that that's kind of unfortunate because it means that it delays this delivery. Only because we are trying to be defensive against a scenario we consider incoherent.

MM: I agree. But the delay is consistent with the delay that you have anyway for `filter` and `flatMap`. So it just means that map is no longer a special case.

KG: Okay. That's a valid answer. And yeah, that was one of my open questions.

MM: Okay. That's good.

KG: Continue going through the queue.

MM: Yeah. So I like the buffered operation. I think that this proposal should include that because having to pull manually just really takes you out of the flow of the sense of the proposal. I'm wondering if there's some place to hang an option to say, "Just give me the results in the order in which they became ready." i.e., the temporal order rather than the sequence order. So as to get things earlier and optimize the concurrency. That I do understand that conflicts with what I just advised with regard to `done: true`. And I'm wondering if a variation of buffered is the place to hang that.

KG: Yes. Excellent question. In fact, an earlier version of this proposal did include a `bufferUnordered`. Which, if I understand correctly, is exactly what you're proposing.

MM: Yes.

KG: I took it out, partially, in response to feedback from MF, who really didn't like that further option further operations on the chain would reintroduce the ordering. So Michael's preference is that we have some way of indicating that we don't care about ordering for any operation because presumably, if we don't care about it at one point, we don't care about it. If I do a dot map on the result of dot buffered, I presumably don't care about the ordering for `.map`. But the call to `.map` has no idea that the underlying thing is actually producing values in no particular order. So Michael's preference was to have a different set of helpers. And he, in fact, has an entire proposal for this, which is unordered, async iterator helpers. Where you have some way of.

MM: Oh my God.

KG: Switching the entire chain here. Maybe I can pull that up.

MM: Oh my God.

KG: Yeah. He has a proposal for switching the entire chain so that you get unordered stuff.

MM: Okay. Interesting.

KG: Yeah.

MM: And then my final question is, I understand that AsyncContext is still fairly early. But assuming that both of these advance what are your thoughts about whether the context of async context follows the pull chain?

KG: Going to be honest, I haven't thought about async context at all.

MM: Okay. That's it for me.

KG: Yeah. But NRO has opinions.

NRO: Yeah. So assuming that that follows the pull chain, you mean it propagates the context from the `.next` callback into the previous callbacks. That is how sync iterator helpers work, just because they do nothing special with `AsyncContext`. So the context that all the callbacks use is the one that was active when you called `.next`. So I would expect it to behave the same way here.

MM: Okay. I love that. The consistency with sync iteration seems like the right anchor for answering this. Thanks.

RGN: Yeah. The slide covering your design principles I very much appreciate. Even in this discussion, you’re framing what to do for `map` as a question of consistency, rather than as a question of defensiveness. And I'd like to praise you for doing this and encourage others to do so as well when we get into similar scenarios. As a side point, I agree with all of these principles and think we should just take them as stipulated for the remainder of the discussion.

AKI: Everyone thinks this demo is super cool!

WH: I disagree with MM about trying to defend against the incoherent iterator scenario. What I observe here is that, even if the underlying iterator is incoherent, this is trying to make the result iterator be coherent. I don't think that's particularly useful to do. I would observe that if, instead of mapping, you're directly calling the underlying incoherent iterator, then you’ll have to deal with an incoherent iterator anyway. So trying to make it coherent does not make sense.

MF: 👍 (EOM)

WH: The other question I have is: what does buffered do? Is it a sliding buffer or is it a buffer that picks disjoint pairs?

KG: Sliding.

WH: Okay.

KG: Yeah. So iterating over the buffered thing gives you the same values in the same order as iterating over the non-buffered thing. It's just that some of the values are being produced temporally before you would normally start producing them.

WH: Okay.

KG: But the sequence is the same.

OFR: I want to second that notion that design principle slide is great to have. Can you pull it up again? Because I think I have a question.

KG: Yes.

OFR: Am I correct that there is a contention between the third and the fourth point here, basically? Basically, never lose value would basically imply that we cannot ignore the done true? That we cannot throw away the value after the done falls, right?

KG: Yes-ish. I guess it depends on whether the third point extends to incoherent underlying iterators or not.

OFR: Okay. So maybe we should have a preference to which one of these two is more important. Maybe that would be an interesting way to look at it.

KG: Yeah. Personally, I think I am not super worried about trying to achieve anything except non-deadlocking for people who give me an underlying iterator that is incoherent.

OFR: Yeah. I'm not even sure if I have a preference. I was just trying to figure out if there actually is a tension here or not.

KG: Okay. And then MM is next on the queue. And I believe I have a sample which illustrates this. Sorry, MM, do you want to read your question?

MM: Yeah. So do you so done true is not the only way to terminate an iterator. There's also the error case. Do you consider error to in a coherent iterator to terminate the iterator? In which case, do you consider a `done: false` after an error to constitute an incoherent iterator?

KG: That is an excellent question. And this is a case where the answer is forced by this third principle. So let's consider the case where we do three pulls from `map`. The second one resolves. And then for the second one the mapper, not the underlying iterator but the mapper, throws an exception. So now we close the underlying iterator because the mapper threw an exception. That error doesn't necessarily need to go right here. But regardless of where this error ultimately is going to go, we have done three pulls from the underlying iterator. And the third pull from the underlying iterator can give us a value. Because again, the underlying iterator hasn't seen an error. And the mapper function when invoked on that value might well not give us an error. So we are left with this value, this `fC`. And in order to maintain the principle that we do not lose values, the only thing in my opinion that we could reasonably do with this `fC` is put it in the third spot. Now, it doesn't necessarily need to happen right away, but I think this is the only place we could reasonably put it. We certainly couldn't put it in the second slot. So I think the second slot has to be where we put that error. And this means that I think this is the only sequence that we could reasonably get from this scenario. And I think that this scenario is a reasonable thing to happen. Mapper function throwing an exception, totally normal thing to happen. And the underlying iterator was fully well-behaved. Which means I think we have to consider this to be coherent. So the answer to your question is no. I do not think that getting a `done: false` after an error is something we consider incoherent. I think that we should handle those cases reasonably.

MM: ..Okay. A `async for of` loop will stop at the will terminate at the error. And it will never see the `fC`, correct?

KG: Yes. That is absolutely true. So I guess I should elaborate on my "don't lose values". That's more about if you are driving the iterator yourself and you are being really careful with where those Promises end up, then you don't lose values. But yes, of course, if you just iterate with a for-of over this, you will never see the `fC`. I consider that fine. I mean, it's the same sense in which if you do a for-of over `buffered`, and then early return from the first iteration of the loop, you'll never see that second buffered value. There are lots of ways to consume a thing where you are going to end up ignoring some of the Promises that you previously produced. I don't think that's a problem. I'm trying to maintain the principle that if you want to be careful to ensure that all of the values are handled, you can do so.

MM: Okay. I'll just register that I'm disturbed by this answer, but it still might be the best among only bad choices.

KG: Yeah. I also want to say that whether we consider something incoherent, in these design principles, really only affects whether we are trying to be delivering good semantics in those scenarios. It's not like we can't ignore those cases, whether or not we consider them incoherent. So I mean. Even if we did choose to consider this incoherent, I don't think that would necessarily affect much. It is my opinion that because I think that we basically have to produce this scenario in this case where we didn't have an incoherent underlying iterator, because we produce this scenario ourselves, we should not consider it incoherent.

RGN: Good. That's actually exactly the question I had. So this was the case where the error came from the callback provided from outside. It's also possible that the `next` itself throws.

KG: Right. So my point is that from the consumer of the result, the result is the same kind of thing as the underlying iterator. So for the consumer of the result, you get a next from the underlying that throws. Which means that we produce things where the next throws. What produces a projector Promise.

RGN: So question to MM, does that match up with what you were asking about?

MM: I'm just going to stick with I am uncomfortable with this answer, but I might be more uncomfortable with any other answer.

KG: Okay. Okay. Thank you for indulging me in this demo. Let's get to the part of this I want to get to, which is open questions. I have a bunch of these. They're not super related to each other. I am going to try to get through them pretty quick. But some of them are complicated, so won't necessarily be that quick. All right. One question. I mentioned that the functions, the predicate or mapper functions could potentially be asynchronous. Which means that we are basically always awaiting their result. I think especially for filter, it's going to be quite common to pass it a synchronous function. Sorry, to pass it a function which is synchronous. Like a predicate function for filter that just returns true or false right away. The question is, we know that primitives can't be Promises. So we could choose to skip the microtask tick in that case. It's not like this is, as it were, [unleashing Zalgo](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/). There was these things always happen in response to some other Promise settling. So we are always basically in our own turn of a microtask anyway. So the question is, do we want to pay the additional microtask tick even given that we have already paid at least one? And my opinion is we should not pay that, which is to say, I think we should have a fast path when the result is a primitive. No one will ever notice this except that their programs will be faster. But before we move on, anyone have an opinion?

DLM: NRO on the queue.

NRO: Yeah. I have a question. What does currently happen if I install string.project.10?

KG: It is not awaited. It is not invoked. The await logic checks for an object before the lookup of .10.

NRO: Okay. Then I personally think it would be fine to have the fast path.

JHD: fast path: Yes

KG: All right. Hearing no further opinions, I am glad we agree. Next question. Right. So there's this question of what do we actually do? If the underlying iterator is incoherent. So let's do our map example again. That wasn't the incoherence. There we go. Our map example again. What do we actually do if this comes up? There's and there's two possible sequential orderings that this could happen. We could have a done true and then sequentially the thing which is sequentially following also temporarily follows with a done false. But we could also have the other ordering. We could have this thing which sequentially follows the temporarily resolving previously to the done true. What do we do? The let's see. It's maybe played out with filter. What do we do with this value? That I've indicated with a purple box here. My preference is that in the case that the `{done: true}` occurs temporarily second, we translate that `{done: true}` to an error. So it's not what I actually have implemented here because this was an open question. But in this case, we can see that we got a `{done: false}`. And then we get a `{done: true}`. We could say we know there is incoherence here. And we are going to instead of resolving the corresponding thought with `{done: true}`, we could put an error here that says you've done something wrong. We cannot do that when it is well, we can't necessarily do that when the ordering is the other way around. If we get a sorry, get a non the other way around. If we get something like this, we really do want to get the `{done: true}` right away. We don't want to have to wait for the other things to settle. So what do we do with this value? A reasonable thing to do is to say that in this incoherent case, we are going to get an unhandled Promise projection event. Which is sort of the you were doing something in some logic that no one is paying attention to anymore. And that's true. That is what unhandled Promise rejection is for. We don't necessarily have to do anything. We could just drop it on the floor. Filter is maybe a cleaner example of dropping it on the floor. Yeah. What do we do? Open question.

MM: Yeah. So I'm still in favor of defensive. So disagreeing with WH's stated position. I think that the producing coherent output, however we define coherent, even against incoherent input, is the preferred solution certainly it's possible in this case at the cost of some concurrency. But as.

KG: No, no. It's not just at the cost of concurrency. This is at the cost of delaying things arbitrarily, possibly infinitely.

MM: I don't understand.

KG: So here. Here's an example. We're doing a filter. We've done yeah. We've done our tuples. One of them rejected, whatever. We do a third pull. And then this value from the underlying iterator settles with `{done: true}`. What do we do here? If to be defensive, we would need to not resolve either of these two Promises. Until this fourth one settles. Even though we know that there is at most one value we could get from the underlying.

MM: I'm sorry. Are we talking about map?

KG: This example is filter.

MM: Filter. Okay. So I see. So the first one, the filter, the predicate gave false is what you're trying to show here.

KG: Yeah. Sorry. It's not actually important that the predicate gave false. I can do an example where it doesn't.

MM: Well, I mean, I just want to understand a relevant scenario. The first one returning false is a fine relevant scenario.

KG: Yeah. Okay. Let's do that one then. Yes. It returns false. We do another pull. Yeah. We do a total of three pulls from the result, which results in an ultimately four pulls from the underlying. And then the third pull from the underlying settles with `{done: true}`. Which means that because we have rejected one of the values from the underlying, and we've settled with `{done: true}`, at the third position, there is at most one value that we can ever get from the underlying assuming that underlying is coherent. So the thing that I have chosen to do is say, we don't need to wait for that fourth value. We know that we get at most one value from the underlying. We can settle the latter two Promises from the result immediately. But if you want to be defensive, we can't do that.

MM: So I don't understand why you need to settle the on the output, the second `{done: true}`. Why I mean, once you know you only have one output, then just settling the first or settling or reserving the first for that output, and then the second is a done true. And then there is nothing. I don't understand why that's not a viable answer.

KG: What do you mean there is no third? We've done three pulls from the result.

MM: I see. I see. I see. Okay. Done three pulls. Okay. Right. So right. So any oh, right. A coherent iterator after it's done a `{done: true}`, all further pulls would still be done true. So what you're showing I now understand this. What you're showing is correct. And why is it a problem?

KG: Well, because we can't be defensive anymore.

MM: Why can't you be defensive anymore?

KG: We've got this Promise that's sitting here, unresolved. And let's say it resolves with something that's not done true. What do we do? There's no Promises anymore. There's zero outstanding Promises.

MM: Oh, sorry. I thought when you said that we know we're only going to get one result, I thought that that meant that the predicate had already returned false for one of the first two inputs.

KG: It had. Yes.

MM: Okay. I don't understand why if the predicate had already returned false for one of the underlying inputs, is the open question that you're asking is the fact that we don't know whether the other underlying input before the `{done: true}` is true or false? And that's the yeah. I'm not getting why there's a predicate.

KG: Okay. Let's do a simpler scenario. Let's do a simpler scenario. We do two pulls. The first one immediately settles and this is dot filter. The first one immediately settles with `{done: true}`. This means there were no values from the underlying iterator.

MM: Yeah.

KG: The behavior that I have implemented in filter is that we then settle both of the results, both of the pulls that we've done with `{done: true}`.

MM: Yeah.

KG: But you want us to be defensive, which means I assume well, the open question is, what do we do if the underlying iterator gives us a value which is not `{done: true}`? There is nowhere to put that value. We've obtained two Promises. Those have both settled. There's nowhere to put this value.

MM: Yeah. I think coherence dominates don't lose values.

KG: This isn't just about don't lose values. What is your question about where this what is your answer to where this goes?

MM: We drop it.

KG: We drop it. Okay. Because we could say it's an unhandled Promise rejection.

MM: Yeah. I think we drop it.

KG: And not fire an unhandled Promise rejection.

MM: Yeah.

KG: Okay. So perfectly valid answer.

MM: Okay. Good.

DLM: WH next. And we only have about five minutes left.

WH: Yes, we should drop it. And the other cases as well.

???: In the other cases, meaning that if you get the.

WH: Like in the map example.

KG: Ah, okay. Yes. That was oh, I forget which. In this example, you think we should drop the third value?

WH: Yes.

KG: But if they what if they had settled out of order? If this one had settled first?

WH: Well, okay. So I'm fine with either dropping it or passing it through if that happened first.

KG: I mean, it's perfectly reasonable to say that you have different answers depending on the order in which these events occur. You could say that if the `{done: true}` happens first, then something which sequentially follows is dropped. But if the `{done: true}` happens temporarily second, then you might have already gotten a value. But you can't drop it in this case. You've already gotten the value.

WH: Yes.

KG: So your options are either say it's fine, and this is just incoherent. You are passing along the incoherence. But you could also say that you put in you emit an error in this case. Either is reasonable.

WH: Yes. They're both reasonable. Propagating incoherence is fine. Dropping values in incoherent cases is also fine. Do whatever is cleanest for the implementation.

KG: Okay. Great.

RGN: I guess I'm left largely agreeing then as well. I think that having different results based on the temporal sequence is fine. We can eagerly settle Promises based on an assumption of coherence. And if that assumption is subsequently violated, then propagating the violation is fine. And is likely the most reasonable course of action in that case. Meaning it's the simplest thing that the implementation can do.

KG: Okay.

MM: Okay. So I continue to think so an answer to your question, I prefer a temporal order independent defensiveness, which means that you don't produce `fC` until you know whether the earlier ones were if there were any `{done: true}`s earlier. And if there were, then you never produce `fC`. Earlier sequence earlier. If there's a `{done: true}` if there's a `{done: true}` sequence earlier, then that third pull has to also be `{done: true}`.

KG: I'm also fine with that. I think it's a little unfortunate not to get results as fast as we possibly can. I'm a little bit annoyed with any scenario where we are paying a cost for well-behaved things because of something about ill-behaved things. But we could choose to do so.

MM: The case only comes up for map, correct? In filter or flatMap, you have to wait anyway.

KG: Things are complicated in flat map. For filter, that's true. For a flatMap, oh boy. Let's play out a scenario. Let's do people's.

MM: So let me just first respond to filter. For filter, that's true. Which is the consequence of not doing the early binding is that map acts in a way that's more expected given the necessary behavior of filter.

KG: Okay. Oh, okay.

DLM: Point of order about time. So I don't know, KG, what do you want to do? And the next agenda item, I believe, is an hour as well. So perhaps we could.

KG: Yeah. I would love to go through the rest of my questions. But I should have put a two-hour time box on this. We are not getting through the rest of my questions. Let's try to play out this specific question, which might be another hopefully not more than three to five minutes.

ACE: I'm happy to yield some of my topic's time.

DLM: Okay. Thank you, ACE. Okay. So I was finishing this last topic, and then we'll move on to ACE.

KG: Okay. Mark was saying he thinks that we should not do eager delivery for a map because that's more consistent with filter. All right. Waldemar.

MM: Thank you. Because it's more consistent with filter and produces a defensively coherent output.

KG: Okay. Yes.

WH: I disagree. Suppose you have a case of an identity map in which the map takes the identity function, and you optimize it out to do nothing at all. So then you will get the incoherent result.

MM: I don't understand.

KG: Oh, WH is pointing out that if you use the identity function as an argument to dot map normally makes that whole operation, the identity. And with your proposed change, that would no longer be the case. You are no longer getting the same results that the underlying iterator produced.

MM: Yes. So I would be in favor of if the function is the identity function, that we're still defensive against incoherence. And that means that the overall output is not identical to let's put it another way. The output is identical to the input if the input is coherent. And if the input is incoherent, then the output is still coherent. So it's only deviating from identity output in the input incoherent case, which I think is fine.

WH: I don't think that's fine.

SHS: agree with WH, garbage in garbage out.

KG: I am personally also more inclined to agree with WH; I don't like to make people who are holding it right pay a price because of people who are doing something bad.

KG: Okay. I'm going to wrap it up there. I had several additional questions. I guess eager delivery for map was one of the open questions, but I had several additional open questions beyond that. And if we find ourselves with an extra block of time tomorrow, I would love to come back with this. But obviously, I'm not going to make us come back for a fourth day with this. So probably you will just have to remind yourselves of all of this at the next meeting. Okay. Thanks.

DLM: All right. Thanks, KG.

### Speaker's Summary of Key Points

* There is now a draft userland implementation and corresponding demo, with a bunch of interesting scenarios preloaded plus an interactive option for exploring yourself, at <https://bakkot.github.io/async-iterator-helpers-implementation/>
* The following principles guide the design:
  * order-preserving
  * helper owns its underlying iterator(s)
  * don't lose values
  * getting { done: false } later in the sequence than a { done: true } is considered incoherent
* There remain a variety of open questions
* MM is inclined to be defensive against incoherent underlying iterators (i.e., to delay resolution of other values as necessary to ensure the result iterator is never incoherent even if the underlying ultimately appears to be); WH and KG disagree

### Conclusion

* the committee supports skipping `await` for primitive values returned by the mapper/predicate functions
* other questions remain open
* we definitely need a lot more time to discuss this

## Composites update

Presenter: Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-composites)
* [slides](https://docs.google.com/presentation/d/1vTRHdRzIZQF69Q5Nx_VDkCkm2mn1rJK-CTtDiSqA9x0/)

ACE: Excellent. So a quick recap. So we last talked about composites in plenary back in November. Last year. And then also in April last year. And it's a follow on this kind of topic is a follow-on from records and tuples. So in a way, we've been talking about this space for, I don't know, at least five years. Maybe getting up to 10. Somewhere around that space. So I do want to recap things to get people up to speed. And definitely happy to answer general questions. But on the flip side, I do also want to make progress. So let's see how we do. But I do want to make sure everyone can follow along.

\[small break to adjust slides]

ACE: So this is the example I've shown before just to kind of motivate some of the conversation. So right now, if you create objects, even if they're frozen and would ignore the fact they don't have a null prototype, if you put them in a Map or a Set, then actually, I've gone ahead. If you put them in a Map or a Set, then they are treated as two different things because set just recognizes object equality, which is pointer equality. So this is sad. The most common way we see people fix this is using JSON string of thigh because it's just their built-in to the language. And in this particular case, this it kind of works. And so now I set has just size one. But now the sad thing here is that JSON stringify of thigh is risky because it only works like the order that you inserted the properties into the object will impact the JSON stringify of thigh order. So you can get different strings accidentally. Not everything can be turned into a JSON string like big ints. Some things just change like `NaN` becomes null. And flattening everything into just one big string can allocate a lot of memory.

ACE(slide #5): And then at the end of the day, you have a set filled with strings or a map where all the keys are strings. Rather than a richer object. So if you're then going to iterate over it, you might have to pause or have a lookup table to get back to your actual original richer data.

ACE(slide #6): So what this proposal does is say, how about we have some API? It's for composite here. The name could be something else. But some API, some data type, where you can construct these objects. And then inside, sets and then map keys they are treated as equal. And it's not shown here, but these objects would still be good, useful objects where you can still access `.x` and `.y`` on them.

ACE: So the big design question that we've talked about before is exactly how do we achieve this desemantics? Because there's two different core ways you can implement it. And depending which one you pick, really impacts basically everything else about the other design decisions. You can't really talk about these other design decisions without getting past this first design question.

ACE (slide #8): And that question is whether or not to use interning? So not interning. And the way that I initially had talked about this proposal and the current thing in the proposal repo is that every time you create a composite, maybe you use new and you always get back a fresh object. So they are not pointer equal. But when you use them in particular APIs, those APIs will detect that you're passing in a composite. And do the equality. So there could be an actual just a direct way of asking if they're equal. And yeah, sets and map. And then also array includes. Because that's the kind of three places where we use the same value zero at the moment.

ACE (slide #9): So the way you would do that is the actual constructor doesn't really do much apart from create the object. But then when you have these APIs, those APIs need to add new branches. That detects what you're passing in. And then do something different.

ACE (slide #10): The alternative approach is you intern and effectively move all of the logic, all of the implementation, just everything into the construction site. So when you construct the when you say, I want a composite where x is one and y is four, it creates an object. The second time I call this, it's looking up in a secret internal cache saying, we already have an object or we already have a composite that is exactly that construction. So it returns literally that object. So these are equal because they are literally the exact same pointer. And then just everywhere else in the language, they will be equal because it's impossible to not say they're equal.

ACE (slide #11): So that would roughly look something like this. There's some secret cache that has weak semantics. So that it doesn't just leak forever. And all of the work is in the constructor kind of looking up, do we already have a composite based on what the caller is asking for? If we do, we just return that voice we create it. And you probably will need some extra logic in your GC to ensure that cache doesn't just grow forever.

ACE (slide #12): So I had wanted a look at the performance implications of these because if you do some just back of the napkin calculations, it's kind of it's hard to think about you could kind of argue either way which one would actually work out faster. So I was just wanted to implement it to see actually how would it behave depending on how it's implemented.

ACE (slide #13): And I presented this before back in November. So this isn't on its own isn't necessarily new. So it's just a very simple benchmark where we create a composite that has x, y, and z. And then it just kind of fill a 3D cube of this kind of creating all the numbers. Constantly creating a key and putting them into the set. And then loop doing that multiple times.

ACE(slide #14): So this `makeKey` here is how are we going to make the key? Do we just call JSON stringify? Do we create a new composite every time? Or do we do an interning implementation approach? And what we can see here is that to begin with, the non-interned composite key was the cheapest to create. Doing the interning approach has a higher overhead, which is kind of what you'd expect because it has to do more work. But then when you then keep kind of doing that loop, creating those same composites again and again, the interning one gradually because it's now just being able to return the existing composites that it's already made, that kind of initial overhead starts to be slightly amortized. And then it ends up eventually kind of after the iteration becomes about the same speed. And then it ends up being faster. But they're very, very similar. And both were faster than JSON string of thigh, which was nice.

ACE(slide #15): So that's what I represented before. But one of the questions that came up was this is a really, really simple benchmark actually. It just has three numbers. So since then, I've now done a new benchmark where the composite has those three numbers, but then also 97 other just static string keys that it's still having to take into account.

ACE(slide #16): So this is a new graph, which looks very similar to the one I just showed. You can only really tell them apart if you see the before the numbers were even after the 10th iteration where I'm creating this is like 10 iterations of creating I think 125,000 keys. We're still only at less than half a second. Now that the keys have 100 components to them, it's now taking two and a half seconds to create those, create all those keys 10 times. But the kind of shape remains pretty much the same, which was nice to see.

ACE(slide #17): But then I pushed it even further. And then was like, okay, well, now let's create a key that has 1,000 components to it. So again, it just has those three x, y, z numbers changing. And then all the other 1,000 and 21 keys are just these static strings. In this one, things actually switch over. And the interning case the slope of it just doesn't quite help enough. And it never becomes the. Interning approach always wins. Though they're still very, very close. And it still remains in this particular bench case, in this particular implementation, better than the JSON stringify. Which is, I think, good because if one of the intentions of this proposal is this could replace some of the use cases for JSON stringify, we'd hope that that would actually be a good thing we can recommend and it doesn't come with this caveat that actually it's might be slightly more ergonomic to use, but a lot slower.

ACE (slide #19): The main thing I should point out is that the first time I implemented this, they were not faster than JSON stringify. They were slower than JSON stringify. So we see this one here. This is if I have three keys, 16 keys or 250 keys, but the patterns most visible in this one so the orange and then the second column and then this third column which we people can see colors is orange and then a darker orange. And then a green and a darker green. The to the right darker column is the same approach, but without a key sorting optimization applied. So the main thing I noticed is that as you have more and more keys, you basically just you're spending all your time. Sorting the keys. And JSON stringify doesn't have to sort the keys. So it doesn't have that overhead. We have to sort the keys to have consistent equality. So what I did is as long as you're passing in an object that actually has an internal hidden class shape, then I cache the sort for that shape. Similar to optimizations that are already there for object or keys already pre-knowing the enumerable strings of an object shape. And so that optimization was the biggest win. There were other little things I did, but nothing had as big an impact as doing that. So just something to be aware of. But the optimization was applied both to interning and non-interning.

ACE: I see MM read his things in the queue. So before I continue, MM.

MM: Okay. So when you're showing these benchmarks, does that include GC overhead?

ACE: Yes and no. There are small pauses for GC happening. But because I don't think it ever triggers a full GC. So I did want to try and do some more examples to see if there was a big GC difference. The amount of GC time in all of them was relatively not a major aspect of the time. But yeah, it's good I don't think this fully captures the GC cost. It's the most accurate answer.

MM: Okay. And does the implementation for interning GC when there's no references to the interned item, does it collect the interned item? Which would require something like weak tables. I mean, weak tables.

ACE: Yeah. So for the interning table, it's storing them in weak refs. It's not actually weak refs. It's something lower level than that. But weak refs so that yeah, if the interned key is no longer held by anything, it can be collected.

MM: Okay. Good. And my other question is, I don't understand the combination of intern and no cache. The interning table itself, is that not the cache that you're referring to when you say caching?

ACE: So yeah, yeah, this is poorly worded. No sorting cache. So this is purely the difference of if you have an additional cache which lets you kind of not have to keep sorting the keys every single time you ask for a composite. It will see like, oh, I've already seen the shape of the object. I already know exactly what the sorted keys are for that.

MM: Okay. And I'll go ahead and ask my question. I think we can probably take care of it quickly. Which is, the interning option must not create a communications channel for registered Symbols. We were very careful to specify registered Symbols so it did not create a communication channel. And part of that is that you can't tell whether the registered Symbol was already registered or whether this is the first registration. And the other thing is that a registered Symbol is completely immutable. So there's no ability to mutate it and communicate to someone else with the same registered Symbol. Is it the case for the composites that they do not that they inherit from null, or i.e., they don't inherit from something pre-existing? That they are fully immutable, and that there's no way to tell whether this is the first registration or a registration that's reusing something that was already registered?

ACE: Yes. So beyond timing attacks of so yeah, assuming yeah, ignoring timing attacks, yes, it wouldn't expose a way of being able to sell the difference.

MM: Okay. Excellent. That was all I had. I'm in favor of interning.

KM: Yeah, I guess it'd be good to see a more robust workload. I don't know. It's kind of interesting, but it's still pretty micro benchmarky. And that has all kinds of consequences and various ways in different engines. I don't know of a great workload off the top of my head. I mean, I do know that sets and maps are used in a bunch of for example, the Jetstream benchmark. I don't know if they would apply in a way where you have to keep looking up the same key or they do anything like JSON stringify. I don't believe they do. But it would be good to see something more robust, I guess.

ACE: Yes. I agree that it would be good. I also am not there's things I'm personally interested in testing, but I am primarily interested in what the committee would feel if they're unsure of which approach they would take and they can't decide unless they see a particular benchmark, I kind of I don't want to second-guess which benchmark people would find convincing because I'm personally convinced I can create a benchmark that makes any of these different approaches win depending on how I tune things. I think if you're if a composite is a more deeply nested, then the interning approach will do way, way better because of the kind of repeated lookup cost and also if I can tweak the kind of hashing to prefer different inputs so it's I have a personal preference, which I'll be able to invite which I want to win so I'm also trying to avoid that bias leaking into me designing a benchmark knowing which one I think it will show most favorably. But yeah, I'm certainly happy to put the time in, but I'd really yeah, I'd like other people to say, "Hey, here's a really interesting thing. Using a different approach for keying, could you re-implement it with composites? Different approaches and let us know how it goes." That would be much appreciated.

MM: Yeah. I just want to emphasize I strongly prefer interning and not for performance reasons, although I like your nested example as a strong performance reason to prefer interning. The reason I prefer interning is we don't have to then revise the specification of maps and sets and includes. And I find that very, very appealing about the interning case.

ACE: Yeah. Yeah. My largest takeaway from these is that the performance to me, it's not whichever is the fastest one wins. To me, they're both acceptably fast. Looking at the numbers I was able to achieve, this is creating millions of them. And the fact that people so I'm convinced either one is good from a performance perspective. But the additional advantage that you've just stated. Would not introduce a new I think fourth or fifth equality into the language. To me, it makes the sub way easier semantics to explain to developers for them to understand. And also from the thing I showed back in November was if the interning approach being completely scoped to the constructor makes it much better for the polyfill case. For the polyfill case, if you have to patch `map.prototype.set` and `set.prototype.add`, it's really, really bad for if you use a land versions of those methods so it's yeah, the fact that interning makes it easier for polyfills not having to patch all the rest of the parts of the language for the actual native implementation, it's much more scoped. And for developers, the equality kind of equality is already complex in the language and this has the simplest equality to explain.

MM: Yeah. Perhaps if we go with the interning semantics, the name of the function should just be intern?

ACE: Yeah. Yeah, yeah. I'm certainly not tied to the word composite.

MM: Okay.

DLM: Steven's on the queue with plus 100 about not revisiting map set spec end of message.

ACE (slide #21): Great. So yeah, so weakness so assuming you do go with interning then I think we talked about again before is kind of what happens if you put these things in a weak position. Right now, anything that's type of object and the proposal is these would have a type of object and not a new type because that was one of the issues with records and tuples. What happens? So we say you can't put the number 42 in a weak set because you can always create the number 42 in the language it's like it has an internal lifetime. So by the same kind of logic, a composite that only contains a key where the value is 42, it also has nothing that kind of limits who can create this identical composite. Ignoring the fact you could delete the constructor and then no one could create any more composites ever. People can always just grab the number 42 out of thin air. They can always create an object with the key value a prop answer is 42. So someone can always create this composite. So it kind of has to just leak if you put it in a weak set. There's absolutely nothing we can really do here. Because at any point in the future, someone could come along and ask that weak set do you have that? So we spoke before and we did a temperature check and the committee was overwhelmingly in favor of we should just throw in this case because it's there's no it's just a guaranteed leak. People can just put this in a regular set and get the exact same semantics.

ACE(slide #22): The more maybe perhaps more interesting cases so if you create a composite that does contain something that has a finite lifetime, then that now limits once that object goes out of scope, then we know for a fact no one can ever create a composite containing that object. So in this case, technically you can kind of imagine that this is more of an okay case. You could put this composite in the weak set and it could theoretically be removed from the weak set in the future and it's kind of unobservable you've done that optimization because no one could ever ask if anyone could ever ask you if that weak set has this composite, then by definition, they kind of have a reference to this object. So we could technically allow this. I'm kind of happy either way because if we on one side, we could just disallow this. So that we say for simplicity, you can't put any composites in a weak set. And if people do want these semantics, you can rebuild this use case out in user land, which is how exactly how these types of things are built in user land today. It's how the records and tuples proposal was built in the polyfill where you create a weak map try of all the weak things so that you can kind of deconstruct your key into the parts of it that are weak but those in weak maps and then hold on. So this doesn't add necessarily a new capability to language, but it probably would be more efficient for the engine to do it than to do it for a series of weak maps. But it also this isn't trivial to do natively either. You don't just get this for free in V8. You'd have to or any engine you would have to do work to implement this. So I'd be curious if people have strong feelings either way because I think kind of I think either side can be justified, but obviously would need to make a choice. We can't just have a global setting that says whether or not we do one or the other. Mark?

MM: So rate shared Symbols are again, I think the closest precedent. Right now, what is the specified behavior for maps and sets for either an unregistered Symbol used as a key or a registered Symbol used as a key?

ACE: I presume you're talking about weak maps and sets.

MM: I'm sorry. That's what I meant. Yes.

ACE: Yeah. So you can't put a registered Symbol in a weak set. You can only put unique Symbols and then, unfortunately, also the built-in Symbols like `Symbol.iterator` and but you can't put yeah. You can't put registered Symbols in because we treat them as equivalent to strings.

MM: Okay. So I think that that's the right precedent and that the last question on your slide is this allowed? I think the answer should be no. And then we can just skip all the implementation complexity of trying to react to the garbage collection of inner objects. We can still decide the engine can decide whether or not to internally garbage collect that entry in the interning table based on that. But we wouldn't obligate the engine to do that. And by not by disallowing that last case, we don't make the engine's decision about whether to do that or not observable.

RGN: Well, yeah. What would actually be disallowed in this case? What references sort the composite into a different identity? Because I assume that objects appearing as inline literals rather than variable references would be allowed. So I'm curious about what the proposed semantics are there.

ACE: Yeah. I mean, so yeah, my weak preference is we say this isn't allowed. No composite is allowed. But if we were to make it the distinction, the distinction would be that at least one member of the composite can itself be put in a weak set.

RGN: So you're saying if it's anything other than entries where every value is primitive? There could be no nested structure?

ACE: So you could nest as long as you are nesting composite. So it would be like a recursive rule. So a composite can be put in a weak set if at least one of its members could be put in a weak set, including if that member was itself a composite that was allowed to be put in a weak set because it has a member. So if you had a composite of a composite of a composite of a composite that eventually resolved, so just an object, a regular object that can be put in a weak set, then that property would transitively apply all the way up the chain because of the recursive definition of the rule.

RGN: Right. But made explicitly so. You'd have to actually spell out composite for every value that was not primitive.

ACE: Exactly. Yeah. So the composite kind of constructor or factory is not a deep thing. It is just taking a flat key value. It's not it doesn't deeply traverse the object you pass in and compass it a thigh everything within it.

RGN: Right. And that holds for arrays as well, correct?

ACE: Correct. Yeah.

RGN: Like an array is just as invalid as an object?

ACE: I mean, I don't understand the question.

RGN: Okay. So if the values must be primitive or composite, then that rules out plain objects as indicated with braces for syntax. But it also rules out arrays with brackets for syntax.

ACE: I mean, to be clear, the thing that's so you can create a composite of any values. You could create a composite that contained objects and arrays and functions that thing that's being asked is like, what happens if you pass that into a weak set? So yeah.

RGN: Yeah. With that scope in mind, that arrays and objects are not differentiated.

ACE: Yeah. So yeah. So if you had a composite where one of the values was an array because you can put an array and array inside a weak set, then technically we could say, well, that composite can go in the weak set because it can inherit a lifetime from that array. But again, I think the simplest answer is we say all composites not allowed.

RGN: Yeah.

ACE: Regardless. Yeah.

ACE: MM?

MM: Yeah. So clearly, if you're disallowing composites there, you enable the observation about whether something is a composite. And you also enable that observation because with the interning, because if you just create it again, you compare them, you can see that it's the same as something that you just created. So would there be a also a predicate to just make the testing convenient since it's not enabling something that was otherwise unobservable?

ACE: Yeah. Personally, yeah. Hopefully, there'll be no objections to having a composite is composite or a interned is interned. I would I think that would be a nice thing to include.

MM: Okay. Good. I agree.

ACE(slide #24): Great. So another design thing that comes up thinking about this is what do we do about this case? If I create a composite where I say I want to composite where the key A is equal to 1, and then I pass in an object where now I'm saying I have A is 1 and B is undefined, are these the same key or a different key? From one side of kind of the thought is there's no distinguishing between a key being absent and a key being present but set to undefined. Can be a bit of a foot gun because it's very easy to create this, especially even if you have if you're using things like TypeScript if you say that I have some interface where B is optional, then I can depending on your TypeScript config settings, I can say I'm going to create B in explicitly set it to undefined. Or I'm just going to emit it. So personally, it feels like the thing that will do the most good is we drop this and we treat them as equal rather than trying to actually treat these as two different keys. This is similar to what already happens if people are using JSON stringify, JSON stringify will just drop undefined values. And as I said, I think in this particular case, telling people that there is a semantic a very, very important obviously, there is a semantic difference between a key being missing and being there but being undefined. But the implications of that and how significant it is, I prefer not. If people do want to distinguish these cases, I think a better pattern would be having part of your key be a discriminator that's saying type person or type manager where rather than just using the kind of a collection of keys themselves as the shape, I think that would be a better way if someone does want to treat these differently. I imagine those use cases would be better served by something kind of more concrete but yeah, very, very happy to hear people's opinions because I do think this is a reasonably interesting part of the design space.

WH: Just a clarifying question: When you create a composite like in the examples here, does the composite only look at its own properties or does it also look at properties inherited from the prototype chain?

ACE: Only own properties.

WH: Okay.

MM: So it's weird that you can't composite or intern an array what you could do is just not notice that it's an array and just do the own properties. Specifically, the index own properties plus length. And just do it as just do it as if you're interning an object with those own properties.

ACE: Yeah. I mean, I could also I think at one point, maybe this was not during plenary, but just during a lunch break. I think we did talk about potentially you could have composite could see that you're passing in an array and then return interned arrays to me, the biggest the two yeah. I don't like it because you now need a prototype and it now makes other conversations about realm, cross-realm interning kind of it forces that.

MM: Yeah. Exactly. I think that it can't the result of interning an array cannot be an array for that reason. But it could be an object that had the same own properties as the array.

ACE: Yeah. Exactly. And I also think in general, because the performance of these things kind of scales with their length that encouraging people to create interned arrays clever people doing the right things, I think, will do will use that wisely. But I think it could also be a bit of a foot gun if people are thinking all this is like a functional design pattern and I can just keep pushing the end of an array and interning it and it'll under the hood use some persistent data structure or linked list and it's like, no, no, no, it's interning the entire array from scratch every time. So yes, I think for a variety of reasons, yeah, not supporting arrays but letting people create array-like structures is the right choice.

MM: Good.

MF: Okay. Maybe I missed this part in your explanation here, but I mean, it seems obviously true to me that these should be different, that undefined is like a value and V would be a key of this composite. What is the case for dropping them?

ACE: The case is mostly, as I think this will so in this literal case when the code is written like this, yes, it feels like these should be different. But I don't necessarily think this is going to be how people are always creating these things. They might be creating these two things at two different call sites based on an argument that's passed in where I think it could be really easy to say if you have a type interface where you say something is optional that sometimes someone is just omitting a property and sometimes they're doing it. If people are always creating composites literally like this, so that they can really clearly see the exact keys and then not passing in just a foreign object, yeah, maybe it's less of a foot gun. But I feel like this would be a foot gun if we don't drop them.

MF: Okay. I think I understand now. So this would be like you want a value that explicitly indicates absence. I think that this is an existing issue already with people constructing objects with object initializers through parameterized inputs. I don't think that that's a problem we should try to solve in this proposal. And if we want to explore that, we should explore how objects handle it as well. For this case, I certainly don't think that we can use undefined to be that indicator. Just because undefined is a value like any other value.

ACE: Okay. Yeah. Yeah. Yeah. I'm certainly happy to keep talking about this. I mean, I'd be curious on the actual use cases because if someone does want to create keys where they differentiate, then null is sitting right there and wouldn't be dropped. And I am the reason undefined is special here is because as we all know, that is the value you would get if you try and get a missing property and it's not on the prototype chain. So there is undefined isn't just like a randomly chosen value to be the sentinel. It's the most obvious value to drop because it is the same one you get when it's missing. But yeah, I'm happy to keep talking about this offline, definitely. Want us to make sure we make the right choice here. EAO?

EAO: I think I'm with you in that undefined should be dropped because we should handle it the same way as we're handling already undefined in places like options bags or JSON serialization. Where undefined values are dropped, that is the reasonable thing to do here.

ACE: Thanks. And KG?

KG: Just the opposite opinion, basically. My understanding here is you put an array, let's say an array of length two, and let's say the first value in the array is undefined. I think that the resulting composite should have key zero with value undefined, key one with value whatever that was, and length with value two. If the resulting composite doesn't have key zero, that's very strange. That's like a holey array, basically. And I would be uncomfortable with that.

ACE: Yeah. Yeah. Understood. As I said, I don't love people using this for interning arrays just because of the performance implications, but it certainly is something I'm sure people will do. And you're right that creating a holy array is something I do not love either. EAO?

EAO: Yeah. I'd say for this one, we should do whatever JSON stringify does for arrays with undefined values in them. I think those are cast to null, but I could be wrong. But that seems to me like the closest existing analogy we have in the language and which is probably used quite often for the same sorts of purposes that composites would want to be used for where you create the thing that represents an object. Without actually being the object itself.

ACE: Yeah. And you're right. It tends to null for a JSON array. MF?

MF: I understand the desire to refer to `JSON.stringify` here just because that is a crutch that people use today to try to do the same thing. It's not like an inherently related topic. It just happens to be something that has some of the properties that we want. But I would not use that as an analogy. I would not use that to base any of our decisions on.

ACE: JSL?

JSL: Yeah. I'm just it's possible I just misheard, but in terms of how we treat the undefined in options bags, we don't treat undefined as missing. It's the same as missing in option bags. Cause is a good example on error. If cause is missing, if cause is missing, then it's not installed. Oh, okay. But it's still an existing case. So we can't we can't say that we're treating it the same.

ACE: RGN?

RGN: I'm hearing people's intuition being built up from things like `JSON.stringify`, and we just had a mention of holey arrays also. And I'm wondering if that intuition is dependent upon the output from calling Composite being itself an object with properties… if we imagine a similar model where the output from Composite is just an opaque value that has identity but nothing else, do those intuitions carry over or instead does it seem more reasonable, for instance, to treat present-as-undefined distinctly from absent?

ACE: For me personally, I am purely thinking about this from the equality semantics. So even if these were opaque the footgun I'm concerned with is someone these things not being treated equal when they hoped that they would have been. But and that's regardless of whether they're opaque or not.

RGN: Right. It just sounded like that might not have been true for everyone in the discussion.

ACE: Oh, yeah, yeah. And it thinks it's good. I think what's most likely to happen is I think I'm hearing more people say we should respect the undefined and not try and be smart and drop it, which I can certainly be convinced for. I will highly likely do like a temperature check in a future plenary when I present just to kind of cast a net wider to kind of make sure that yeah, I'm going to move on from this particular bit just because.

\[Teams just turned off suddenly]

ACE: Great. Thanks. So yeah, there's definitely more things to discuss. I can see there's some things on the queue. With the testing I've done so far, I'm going to change the proposal to focus on using an interning approach. So if people are really, really against that, I'd like them to please get in touch, raise an issue or matrix me. Because that's going to be the change in direction. Also with not allowing them in weak maps. Then there is still the discussing about the undefined. And I think there's also conversation about cross realm. That came up from the SpiderMonkey case that we haven't talked about that some more. So yeah, I'll bring this back before asking for stage two. But that's the direction I want to go in. So please let me know. If you have issues or questions, further designs, love to talk about this.

USA: Okay. Great. Thank you, ACE. Well, that's the end of our content for today.

### Speaker's Summary of Key Points

* A reminder of the proposal's primary motivation: having compound Map and Set keys
* Benchmark results of an experimental implementation in v8 were shown
* Both Non-interning or interning were the fastest depending on key size and iteration count
* The implementation needing an internal object key sort cache was required to be faster than JSON.stringify
* Also discussed allowing composites in WeakMaps, and if an 'undefined' value should key differently from an absent property

### Conclusion

* Proposal will pivot to an interning based approach, and not allow Composites to be held weakly
* Will continue discussing handling 'undefined' values
* The proposal will be brought back to committee before asking for stage 2
