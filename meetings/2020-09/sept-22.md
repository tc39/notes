# September 22, 2020 Meeting Notes

-----

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Frank Yung-Fong Tang | FYT            | Google             |
| Shane F. Carr        | SFC            | Google             |
| Devin Rousso         | DRO            | Apple              |
| Caio Lima            | CLA            | Igalia             |
| Kris Kowal           | KKL            | Agoric             |
| Mark S. Miller       | MM             | Agoric             |
| Chip Morningstar     | CM             | Agoric             |
| Mark Cohen           | MPC            | PayPal             |
| Jason Orendorff      | JTO            | Mozilla            |
| Shruti Kapoor        | SRK            | PayPal             |
| SongYang Pu          | SYP            | Alibaba            |
| Chengzhong Wu        | CZW            | Alibaba            |
| Ross Kirsling        | RKG            | Sony               |
| Sven Sauleau         | SSA            | Babel              |
| Jordan Harband       | JHD            | Invited Expert     |
| Istvan Sebestyen     | IS             | Ecma International |
| Dave Poole           | DMP            | Apple              |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Keith Miller         | KM             | Apple              |
| Bradford C. Smith    | BSH            | Google             |
| Jem Young         | JZY            | Netflix            |
| Philip Chimento      | PFC            | Igalia             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Robin Ricard         | RRD            | Bloomberg          |
| Jack Works           | JWK            | Sujitech           |
| Mary Marchini        | MAR            | Netflix            |
| Justin Ridgewell     | JRL            | Google             |
| Yulia Startsev       | YSV            | Mozilla            |
| Pieter Ouwerkerk     | POK            | RunKit             |
| Shu-yu Guo           | SYG            | Google             |

## Intl.DisplayNames for Stage 4

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-displaynames)
- [slides](https://docs.google.com/presentation/d/1SicCmt1bo4jyMTvAUiumCBW2ZqUh_-a18xrTO9nqG7U)
- [pr](https://github.com/tc39/ecma402/pull/502)

FYT: (presents slides)

SFC: I just wanted to acknowledge all the work that FYT has put into this proposal over the last four years, all the way to stage 4, including the tests, to fulfill this very important user needs. I hope we can advance to stage 4.

MBS: The queue is empty.

FYT: Can we reach consensus?

[silence]

MBS: I’m not hearing any objections, so congratulations on stage 4!

### Conclusion/Resolution

- Stage 4!

## .item() for Stage 3

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-item-method)
- [slides](https://docs.google.com/presentation/d/1Jk5AE1OEkuvN-pYlKsdppB199VdWL1nCZCOC0JJ8a0c)

SYG: (presents slides)

KG: We should not have String.prototype.item. SYG has already gone over the reasons why, but I want to characterize the risks of each path. The bad thing that happens if you leave `String.prototype.item` out of the language, a programmer reaches for it, finds out it’s not there, and then works around it, perhaps reaching for `slice`. It might also be that there is a reason it is left out, which leads them to do the thing they want to do, which is by code point. The risk to putting it in with code unit semantics, The risk is people will write something that works for them, because they’re an English speaker, and then they won’t write tests for other unicode characters (ex. Chinese). It’s very easy to ship a bug to production that harms people who don’t share your native language. That is a much more serious harm, than the harm that comes from having to reach for a different method.

BFS: I’m curious if you feel that this problem is already kind of a lost cause due to existing methods operating on code units. Is this a hill that’s worth making a stand for?

SYG: Are you asking me or KG?

BFS: KG, and why?

KG: I agree that this is a problem in the language. Adding new methods, which are things that people want to reach for but isn’t there -- I am opposed to adding things for code units. If we didn’t think that this was going to help anyone, if we didn’t think anyone was going to reach for this, then we wouldn’t be adding it. But we are adding it, which is because people will reach for it, but it does the wrong thing, it doesn't actually do the thing that people want, it does something slightly different.

BFS: If it did have the behavior that it currently, as SYG presented, does not have - if it actually did grab a full code point always, would you still say no?

KG: I don’t think item would be the correct name for that method. I don’t think that there should be anything called item. The fact is that there are different notions of index in a string. I am more in favor of adding a separate method that does code points than I am any method that does code units.

BFS: Ok. That's all.

JTO: slice has a lot of use cases that are correct regardless of the code unit distinction. If you do a regex search ,and do offsets off of that, and do a slice, it will be correct because you will get a range that corresponds to characters.

JRL: I’m disagreeing with what KG says and agreeing with what SYG says. We should just add it. To what KG says about we’d be adding the ability for them to ship a bug, they’re already shipping a bug. ???

JHD: I think that item is important, I think the concerns KG is describing - not everything in strings is prose. Strings are used for enums, bitmasks where code units are what you want. On top of that, code points aren’t what you want most of the time; sometimes you want grapheme clusters. If you grab by code points, you’re going to be wrong sometimes. The user wanted a rainbow flag and you gave them a white flag with a rainbow after it.I think that the consistency between indexable strings and arrays is important. Using slice creates an entirely new string -- I have no idea if that has performance implications but certainly seems wasteful. Without this inconsistency I think it is important to have them all, in the same way that they have slice.

WH: I would like us to adopt the simplest solution which is to include `.item`. I find the arguments that we shouldn’t include it completely unpersuasive because iterating by code points is not particularly useful either. It gets lots of things like country flag emojis wrong, which are composed of multiple code points with an ISO encoding of the country’s name abbreviation. The key thing is that I don’t want to have to remember which things have slice vs item vs indexing. Those should all come together. Iteration by code units is the best iteration that we have, let’s make it work.

KG: To be clear I am not proposing that it should have code point semantics. I am saying that code unit semantics is sufficiently bad that we shouldn’t add it.

WH: I disagree with that. I think that code unit semantics are the best semantics we have, and we should make that work.

KG: Even if they are best, that doesn’t mean they’re good enough.

WH: But, there has to be a way to index over strings.

KG: That’s the iteration that strings have, they are by code points.

JTO: The committee already addressed this: the iteration on strings is by code point, not code unit. I was actually persuaded to not to String.p.item by SYG’s slide. The team consensus was that everyone would be confused by what we do. But the benefit - I don’t understand what the benefit is of doing this. We should not be in the business of facilitating bugs because users already don’t understand.

SYG: In the interest of time, can we drop the code point vs code unit thing? I am presenting either code units or no String.prototype.item.

JHX: Let’s split String.p.item to another proposal.

SYG: I am ok with that. Let’s talk about blocking concerns. I heard JHD say that he would block if String.p.item was left out?

JHD: I implied that; I did not commit to it.

WH: I share your concern.

SYG: If KG and the folks that think code unit indexing would similarly block if it were there, It seems to be that it’s not a thing I can design around to satisfy both camps. It seems to be a pretty hard choice. Is it true that KG, would you block if it were included to use code unit indexing?

KG: Not if I am the only one with this opinion.

MPC: I share your opinion KG.

SYG: What I will do is ask for Stage 3 for the original plan, which is that String.prototype.item would be included to have UTF-16 code unit indexing. Then if that were blocked, I would like some actionable feedback from either camp as to how I could move to stage 3 for the thing I actually care about, which is Array.prototype.item. Can I get Stage 3 for all the indexables having prototype.item? The editors have signed off for editorial reviews.

RGN: I just did it just before the discussion and signed off on non-blocking commentary on String.

WH: I approve.

KG: Not gonna block, but I think this is a bad idea. I think this is a harm to users of the web.

MF: Is there a better way to get the feeling of the whole room? I don’t want it to cause the whole proposal to fail, but I also really don’t want to have String.prototype.item.

MM: I’m in favor of the proposal as stated because it’s more consistent. I think with the indexing badly issue - I think Strings are already so deep into that, that denying `.item` isn’t going to accomplish anything.

SYG: For what it is worth, I don’t disagree with your concern. I think it is a fine rope to walk.

MBS: Time is up.

SYG: It isn’t a unanimous glowing consensus, but it sounds like we have consensus.

MBS: I’m not hearing any blocks so I think we can call this stage 3.

### Conclusion/Resolution

- Stage 3 including String.prototype.item with code unit indexing.

## Numeric literal suffixes - continued

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-extended-numeric-literals)
- [slides](https://docs.google.com/presentation/d/1lD2NN0I3HFhTqFCtz7WTXEsbbxno4VqfUOUwZgrGHRs/edit#slide=id.p)

DE: (presents last slide, “Summary of feedback”)

Should we have this syntax at all?
Waldemar: Yes, a requirement for Decimal Michael F: Better to use template strings Should we use a separate namespace, or lexical scope with _?
Waldemar: Separate namespace seems fine Mark: Lexical scope with_ preferred, but the separate namespace is well-formed Some others: Separate namespace is not acceptable Is it important to have this feature generalized for user definition?
Mark: Yes, a requirement for Decimal Yulia: Asking if the value is sufficient Is it acceptable to omit so many identifier start characters?
Waldemar: This might be too restrictive and bad for future-proofing Chip: Permit more identifiers if you're not in a hex literal?
My feeling: Decimal is sufficiently important for JS developers that we should work through these issues one way or the other

WH: This is a tough design area. You recorded my position as “being fine” with a separate namespace, but it’s actually stronger than that. I think that a separate namespace is pretty much essential, otherwise you get too many conflicts with accidentally captured variable names, especially if you want to use commonly-used index names like `i`, `n`, or `in` which is a keyword. Consistency with existing names of units and such also makes it bothersome to forbid various identifier start characters. I feel that a separate namespace is pretty much essential here.

DE: Is it fair to say that we have these conflicting requirements from TC39 members?

WH: Yes. And the slide you’re showing is a great summary of them.

DE: Thank you everybody for giving this consideration and extra time.

## Import Assertions for Stage 3

Presenters: Sven Sauleau (SSA), Dan Clark (DDC)

- [proposal](https://github.com/tc39/proposal-import-assertions)
- [slides](https://docs.google.com/presentation/d/1RuWMkNAatIZ6lhcdslD8cUD-zntioptqH1-hTbVlhzg)

SSA, DDC: (presents slides)

JHD: The risk of relaxed constraints -- in node, in the modules working group, this is referred to as the “dual module hazard”. Having two instances of a module doesn’t matter if it’s something pure or immutable. But if it’s something stateful, or something where its identity matters, like React, ember, all those frameworks, or a caching module, then you can actually get production bugs from having two copies of the module. I prefer alternative 1, there have been a lot of conversations around this constraint. Effectively, the only time a relaxed constraint would be useful on the web, is when you have “server hijinks” where the server returns different response for the same “URL”. And then separately, when you have some sort of race condition where two of them come in at the same time. It’s circumstances like that which I find edge-case-y. The web is not intending to violate the spirit of this constraint, they will maximally reuse the same instance. I’m content with alternative 1 or 2, either way with the strongly worded editorial note.

MBS: I’m not sure that this is really equivalent to the dual-specifier hazard that we’re having in node. They’re referring to two different instances in the cache, which I don’t see as being entirely equivalent to what we’re talking about here. These would be different cache keys based on the assertion - you might have two instances, but that’s not too different from what we already allow. So I just wanted to clarify that for me, I don’t see this as equivalent.

GCL: I might have missed this, but I’m curious why HTML needs to use the assertions as part of the cache entry?

DDC: The main thing is that they have this set of properties that they want, and their existing cache machinery is the least risky way to satisfy those properties. For example, the big one that made sense to me was if I import foo with type bar and that type is wrong, it shouldn’t block a different import statement from importing with the correct type and having that succeed. There are other ways that you could make that happen - one alternative that we tried was having—when a module was fetched and it came back with a valid mime type, you keep that in the module map but you don’t interpret it until you get a mime time and an assertion type match. There were some corner cases around that, and we made something work but there was pushback—there have been bugs in the past, and they were just wary of solving it in a new way when they have what they already see as a ???.

GCL: One of the design goals of ESM, as I understand it, is that invalid module graphs should not complete, they are invalid. That sounds like to me that they want to work around that? This sounds like something we don’t want.

DDC: I think this was — when you have two different graphs in the same domain, like two root script type=modules in the same domain, I might have one of them contain bad imports, and the other contains bad imports. You want the good one to execute.

GCL: I guess that could - if they’re separate, I’m not an expert on how HTML works, but I would imagine that script type=module would behave similarly to two dynamic import expressions? One could resolve and the other could reject? Maybe I’m just missing something.

DDC: I’m still trying to think. If anyone remembers this scenario better please jump in.

BFS: I can try to explain it. In HTML they have the module map data structure that’s shared across domains (on the settings object) but within a single frame. When you specify two specifiers, the resulting response URL can be the same but they have different cache keys in the module map. An example of this is if you do an HTTP redirect, you can have an initial cache key, and it will be the ???. That could be A, and it points to B, and you could have a separate instance that directly imports B. And if you do that, you would end up with two entries in your module map. In the same case here, they’re trying to reuse the same edge cases with ??? by instead of adding infrastructure outside the module map via the assertions, they would just want to keep it in the same place. There is a computed index in one place, instead of a computed index, it is effectively two indexes into the module map structure. An alternative change would be much more comprehensive. Having a two tiered index means that there is the possibility of having two types of a single URL, so you can have ? effectively as part of the cache.

GCL: If these are separate module graphs, the web has its own higher-up cache, within the context of the specification, the only concern I have is the actual module graphs that we create. So if that’s not what is being offended, then I don’t have a problem.

DE: I think it would meet that constraint, but to give another part of the flavor for why the tighter constraint is hard to meet, we had earlier versions of the HTML integration PR that were attempting to meet the stronger constraint, where it would fetch the module, and if the assertion failed, the module map just wouldn’t store anything at all. That violated a different constraint where we avoided redundant fetches. There was worry that by trying to meet this really high bar, it would create extra complexity in the module map.
A separate case that’s kind of analogous to import assertions would be, if you have a URL with a fragment (e.g., “https://foo.com#bar”), that also forms a separate module map entry (compared to “https://foo.com#baz or https://foo.com). That’s an even simpler case than the redirect case Bradley mentioned.
So it is already not the case that HTML will logically resolve things. It isn’t a big leap from there to use assertions as part of the key. My personal preference is still Alternative #2, but I see the arguments the HTML maintainers are making. HTML is still an open standard, welcoming of participation. We could decide to go for the weaker constraint but then over time find that all hosts we’re tracking are actually meeting this tighter constraint, if HTML decides to change this, and we could make a needs-consensus normative change to tighten the constraint. That’s another evolutionary path.

GCL: I guess I was trying to clarify, given a module source text, with two import statements with the same specifier but different assertions -- what constraints are applied to that?

BFS: I believe in my last reading of the HTML integration, there is the potential for a parallel fetch to occur. I don’t think you’re guaranteed to be able to encounter that scenario.

DE: HTML is single-threaded, just like JavaScript, for the main thread that’s driving these fetches. The imports will not be racing.

GCL: I meant on the JavaScript side, what’s the constraints?

DE: In all JavaScript environments, you can count on the fact that if you have the same module specifier and the same assertions, you get the same module identity. But even stronger on the JS side, you know the module is not interpreted by the import assertions.

This came up in a recent framework outreach call. Someone said that they want to make a webpack plugin to replace loaders with import assertions. And my response is that’s great, but let’s work together on a new TC39 proposal that we talked about before, where we decided to separate out import assertions from things that reinterpret the module. I hope we come back to TC39 with another proposal to take off some of this ecosystem pressure. But that’s entirely unrelated to HTML’s need, which is definitely not about re-interpreting the module, which is banned in all environments.

GCL: Sure, I’m not trying to solve HTML, I’m just trying to expand my understanding. So within the same source text, the same module with two different assertions, can lead to two different modules?

DE: If you use an assertion that is not recognized, that is what it would do. [Note: after revisiting the PR, it is clear that the HTML PR does _not_ do this. The debate is between ignoring unrecognized assertions (not keying off of them) and erroring on them. Unrecognized attributes will not cause duplication in HTML.]

GCL: Ok, thank you.

SYG: When JHD and I discussed offline about alternative #1, the salient division for JHD’s concern wasn’t necessarily web vs non-web, but ahead-of-time tools vs. servers. I’m happy to help wordsmith the alternative to actually be reflective of the division that makes more sense here than web vs. non-web.

JHD: Thank you SYG.

BFS: I think we could take alternative #1 if we reframed it a bit to not just be purely for the web. I could go into more edge cases offline if anyone cares where we can observe a similar thing in node, which will use a similar behavior even if we’re reading off of a filesystem. There are other hooks we use in node, and in some other working groups such as tooling, where people are looking for cache-busting for development purposes. We don’t want to state that node is not a valid JS environment.

DE: I’m a little skeptical of differentiating Node from offline tools. We’re seeing more and more different environments and tools that try to emulate the web to some extent or another. I don’t understand how you would carve out an extension for Node that would not apply to tools.

BFS: In particular, in the call me, SYG, and JHD had, we’re talking about tools that have full dependency analysis capabilities, so they have access to the whole module graph at that time. Node doesn’t have that, we don’t read everything off disk when we boot up.

SYG: DE, I was not thinking of saying something like “Tools, you are not allowed to do this” but to come up with a constraint like what BFS was talking about: if you are a host that made the decision to load everything at once, then you should follow this constraint, otherwise you don’t have to follow that constraint.

DE: The thing is that the tools cases that I’ve heard about are violating the other constraint that we haven’t talked about, which is reinterpreting the module. I’m not aware of any tools that have pressure to do this [clone the module without reinterpreting] one way or the other. So I don’t know why we would add this special bit of spec text to address that one maybe nonexistent case.

MBS: I think maybe perhaps to BFS’s point, consistency seems to be important here, if the web needs a carve-out, it seems a little odd to call out that the carve-out for one specific environment. When we can’t really know what every environment and runtime is going to need. And I don’t want to get into the pedantry of what the definition of the web is. If we want to say browsers, that’s one thing. But I like the current text, which relaxes constraints on hosts and lets hosts make that decision. It’s harder to tighten later. I like the idea of either keeping it relaxed for all hosts, or tighten for all hosts. If we are going to move forward I would like us to be consistent. I do have a preference for giving more flexibility to hosts than not.

JHD: MBS, you addressed my point, in general I’m saying that if a host comes to us and says that they want to do something, and it’s legitimate, we can get consensus to change the spec to allow it. I just want to make sure the spec is signaling the intended use, much like the text on Atomics about the memory model.

BFS: We actually can’t loosen it later because there’s a forward compatibility breakage, because the numbers of instances of modules changes. So we do actually need to decide this. Because of the forward compatibility breakage, I would view that node use these kinds of assertions or ??? as part of the cache key. We get into cases where people are doing things that are weird like manipulating modules on disk, ???. We don’t want to get in the case where we produce a singleton, and then we loosen it, and get more instances, or vice versa. That’s breakage.
I think just because the web needs this, node in all practical terms must have this same edge case allowed for it.

AKI: Dans (DE, DDC), we are at time, status?

DDC: Ask for stage 3 with the status quo of the proposal?

SYG: I feel somewhat strongly that I like the current status quo of the spec text the best.

[silence]

AKI: Alright, let’s call that stage 3! Congratulations!

### Conclusion/Resolution

- Stage 3 for the status quo spec.

## JSON Modules update

Presenter: Daniel Clark (DDC)

- [proposal](https://github.com/tc39/proposal-json-modules)
- [slides](https://docs.google.com/presentation/d/1_dgRPueD2dwSIsVOXVexYOncCRrDPcm_CPnswq9zOe4)

DDC: (presents slides)

GCL: I know that the assertions that are being proposed here mirror what HTML will do, but it’s weird to me that they would also be a part of JavaScript itself. ??? that we would mess with their contents, that’s weird to me.

DDC: One clarification - hosts can have JSON modules without having the assertion. So a host that doesn’t have the kind of MIME type security issue that the web has run into could have an import something from foo.json and not require the assertion. This proposal says that if the assertion is present, it must be treated as a JSON module.

DDC: The second thing -- a design goal of import attributes, we leave it open for hosts to introduce assertions that are relevant to them, we saw JSON as tied enough to the language itself, Same kind of level of parsing JSON - it’s central enough to the language as opposed to something like CSS, that wouldn’t make sense to specify here.

GCL: I don’t disagree that it’s a common thing, I just don’t like that we would be sort of claiming the type value there. I doubt anyone’s going to make their JavaScript engine interpret `type: json` as something else. It just seems like an unclean integration point there.

SYG: I think it’s the reality of not just the web, but internet things have already locked down the meaning of JSON.

GCL: I don’t have a problem with the name JSON, I have a problem with it being part of the host’s assertion area there, with the type name and stuff.

SYG: I don’t understand the point. It seems harmful to give hosts that extensibility point, they would only harm themselves. Presumably if you want to leave it open, there should be some host for which it would be legitimate for `json` to mean something else in the future.

GCL: I doubt anyone would want to do it. I just don’t want us to have a precedence of putting anything in here.

SYG: So you’re worried about precedents for other types?

GCL: I don’t want there to be any assertions built into the specification.

SYG: I’ve heard that you don’t like it.

GCL: Right because it could collide with hosts doing things. Maybe in this specific instance it doesn’t. ??? The general domain is already not available???

CM: I was just a little confused about the discussion about changing the meaning of JSON. The meaning is fixed.

SYG: GCL was worried that as a general principle, it seems like a bad idea for us to restrict hosts from interpreting assertions however they want, even if it’s JSON. My response is precisely because it is JSON, and that the internet at large has a very specific meaning of JSON.

CM: I see. So the concern is that well you said JSON, but we know better than you and we’re going to give you some other thing.

GCL: Maybe an example -- it’s not the JSON part, it’s using the name type in the domain of a host boundary, maybe the host wants to use the type And now all of the sudden we are taking up a string value from them. It’s not about the JSON part, it’s -

CM: It’s like having a reserved word.

GCL: Just like we created Symbols to have a new namespace, it seems like we’re breaking namespaces here.

DE: I think the idea of this - obviously we’re not talking about changing what JSON means, but import assertions have been proposed - during the whole discussion, there was interest in standardizing as much meaning as possible. At first we left it host-defined. But there was a lot of interest in sharing standard semantics across hosts.
I think it’s really important that you be able to import JSON modules in the same way. We could require ??? syntax in different environments, but it wouldn’t allow those things to be ??? in practice.
I think this is a path we could take with future features, either through assertions or evaluator attributes, and this is called out in the Import Assertions explainer, that we could define these in the future, just like we declare globals, and we would just have to pragmatically deal with this potential namespace collision. I think that’s what’s going on here and it’s reasonable.

GCL: So maybe the problem there was my understanding of how hosts should ??? something would be bad form of doing that.

DE: No, space is definitely free for hosts to use. It’s like globals, where hosts and JavaScript share the namespace and we work through the compatibility issues pragmatically as we need to.

GCL: Well this is just an update and I think I’ve said my point so we can move on.

MM: Previously, I think I was the strongest advocate for immutability. I want to just clarify that I no longer have strong feelings that these things should be immutable. The reason why they’re no longer strong feelings is that the main objection to mutability was that there was this thing where there was no good place to stand in which to freeze it first - harden it first, transitively freeze it before anyone else gets it. But that’s not true with compartments. With Compartments, we can interpose an attenuator. In a TC53-style scenario, where the underlying machine already has Compartments, and where there’s a premium on putting things into ROM, that combination should enable a smooth expression of JSON modules that turn into ROM’ed objects that result from the JSON module in a smooth fashion that works with the way programs express themselves. The only incompatibility, if we did this by remapping the import namespace, would be if programs count on the mutability. But that’s just par for the course with moving to a more locked-down environment.

JTO: I think the issue is that JSON.parse is a function; you call it once, it returns once, and it gives you your own copy you can do whatever you want with, and it makes sense for that to be mutable. When you import something, you’re getting something other people may also import and be able to get, so it is consistent to have different behavior here. I want to make sure that spectators have that in mind. It’s not as obvious as “this is what JSON.parse does, and so we should do that”.

RBU: Slight favor of immutability. While JSON.parse does return a mutable object, the string that you put into JSON.parse is immutable. When you import a JSON module, you have no way of getting the equivalent of the input string to recreate that mutable(?) structure, so I don’t think this is quite the same as a simple JSON.parse.

MBS: I want to remind folks about the history of where this proposal came from, and its relationship to Import Assertions. Many moons ago/about a year ago, some folks including DE worked on standardizing JSON modules. And part of the philosophy behind it was that there are a number of different module types that we’d like to see, including but not limited to JSON, CSS, HTML, and WASM, but that behavior was concerned as far as scope. And JSON was one of the ones that was rather straightforward. We have differing opinions with mutability, but there were at least a limited number of walls of the bikeshed to paint. After last TPAC(?), there was a security concern and we reversed it [TODO: what’s “it”?]. But we still need to allow JSON modules in the language. In node, you’re able to require JSON. Many people use this as a way to bootstrap applications. Configuration files, metadata, tiny replacement for databases -- there are so many uses for JSON in an application. And there’s value in asynchronously parsing jSON, which we don’t have right now.
Which is a whole other thing to get into. I will stop proselytizing for a second. But the thing is that when we look into import assertions and all the generic ways to use it, that proposal grew out of this one need to enable JSON modules. We’re getting to a point where we can have more consistency—but I think it’s just really good for us to step back and realize why we got here, what we’re trying to build, and maybe step back from some of the specifics. One thing I think about is enabling programming patterns that people are using today, and making it more consistent across the ecosystem.

JRL: The mutable vs immutable discussion: first I want to say that I’m not going to block over this. Immutability isn’t in the language - nothing is immutable by default. If we had records already, maybe we can have this discussion. If you import something from node, it will be mutable. If you import from a module, it will be mutable. Surprising behavior should not be the default, and I think immutability would be surprising.

MM: JRL’s point is valid, I just want to point out that there’s a surprise issue on both sides. To have the JSON that you’re importing be corrupted by something that’s unrelated also causes a surprise. So in any case, as I said, I’m not trying to force immutability. I’m backing off from that. I just want to make sure we understand that there are surprises on both sides of this.

DDC: Thanks everyone for the discussion. I’d like to continue discussion in the proposal repo. Would this be the wrong time to ask for reviewers for stage 3?

AKI: I don’t think so.

MBS: I think it’s a great time.

DDC: Any volunteers?

[silence]

AKI: Stage 3 reviewers?

RGN: Sign me up.

AKI: Thank you, so giving of you. Anyone else?

[silence]

AKI: Come on, there are so many opinions on this. Who wants to review it?

JRL: I can review it.

AKI: Thanks JRL. Well that’s two reviewers, more are welcome but two is the minimum.

### Conclusion / resolution

- Further discussion on immutability vs mutability to occur on proposal repo
- RGN and JRL to review for stage 3

## GetOption in ECMA-262

Presenter: Philip Chimento (PFC)

- [issue](https://github.com/tc39/ecma402/issues/480)
- [PR](https://github.com/tc39/ecma402/pull/493)
- [explanatory code sample](https://gist.github.com/ptomato/7f13d17f092ab30872f5b5fe663ca507)

PFC: (presents explanatory code sample)

WH: I haven’t thought through all the implications of this but offhand this seems quite reasonable.

SYG: I like the restriction here. Since you say the plan is to move the abstract operation to 262, would it have any use in 262?

PFC: Not in the current spec. But if Temporal becomes part of 262, then it would.

SYG: We can talk about it when the PR comes around, but we usually don’t want to include things without having any users. We want it to be bundled with the first user.

PFC: Yes, that’s what I intended, I wouldn’t want this to go to 262 by itself.

MM: The upcoming compartment proposal, and the realms proposal, and the lockdown proposal, all have option object parameters. Whether we adopt this would be something to discuss, but those are all proposals that are advancing that have options arguments, and maybe we could use this there.

PFC: I would like to hear if the abstract operation we are currently proposing would be suitable for the proposals you mentioned. If it's not, then we should change it so they are coordinated.

DE: I'm wondering if this would be a good chance to align with WebIDL and have the same semantics between undefined and null. That’s how WebIDL interprets its dictionaries which are the same as our options bags. And otherwise it’s the same, it’s just a bunch of property accesses.

PFC: I don't think there was any particular reason why `null` was disallowed other than that it was already done that way in 402.

JHD: My understanding of the motivation of the design for default properties where they trigger on undefined but not on null, was that null is like, I am intentionally supplying nothing here; whereas undefined is like, I don't care what goes here. On an options object, you might want the null to throw. For example, if you do an HTTP request that you expect to return an object, but it gives you null instead.

DE: I’d be happy to consider this to be a separate decoupled change. I think we’d be considering null to be an empty options bag.

MM: I think null should be taken as an intentional null and not as a default.

## Intl Enumeration API for Stage 2

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-enumeration)
- [slides](https://docs.google.com/presentation/d/1IWOHZVkXL_qbjz4T76bXmtLh7VOrWkT-HJIH2ZwY6NU/edit#slide=id.g96c285a300_1_78)

FYT: (presents slides)

FYT: Asking for Stage 2 advancement.

RPR: The queue is empty.

SFC: I just wanted to ask the question about the privacy concern that was brought out. If we achieve Stage 2 today, is this the understanding of the committee that the proposal is safe from the privacy point of view, or is this the understanding that FYT will continue to investigate the privacy concern?

DE: I see it as the latter. I think this is good to advance to Stage 2. I appreciate the work FYT has done. But I think we need external expertise for stage 2. By getting to stage 2, this shows to external reviewers there is enough buy-in for reviews. I support this going to Stage 2 with future privacy reviews before Stage 3.

YSV: Ditto on DE's point, we should get an external review in stage 2 but we need that privacy review.

SFC: Thanks for clarifying.

JHD: Is it possible that future review would lead to the proposal being withdrawn?

DE: I wanna say, I think we should be open to both possibilities. We could see the proposal adjusted but also the proposal rejected, we’ve seen some stage 2 proposals never go to stage 3. I think it's okay to go to Stage 2, even if the feature gets dropped.

JHD: If we can foresee that being a problem, then maybe we shouldn't promote it to Stage 2. Because the expectation at stage 2 is this should end up shipping

DE: Our expectation is that this will be successful. This is like Records & Tuples; there are concerns outstanding that could cause significant doubt on the proposal, but we can resolve those in Stage 2.

JHD: it is a fuzzy subjective criteria, so it needs a bit more clarification

FYT: Stage 1 says to identify cross-cutting concerns. Stage 2 does not yet say that you have to solve all of the concerns. For Stage 2 entrance it is not one of things listed in the requirements.

SYG: In this case, I think Stage 2 is both warranted and important, because for the champions to do the extra work and seek an external review for privacy, we need to send a signal that it is a thing we expect, modulo the things that need reviewing. I think Stage 2 is a good signal to give the champions that we want them to do the extra work.

RPR: Queue is empty.

AKI: Gonna mention to everyone, if you want a tie-breaker opinion, all the chairs agree this is very standard to go to stage 2 in this situation.

RPR: OK, queue’s empty.

FYT: I want to request TC39 to advance to stage 2, any objections?

(silence)

### Conclusion

Consensus on Stage 2!

## Records & Tuples

Presenter: Rick Button (RBU)

- [proposal](https://github.com/tc39/proposal-record-tuple/)
- [slides](https://button.dev/talks/record-and-tuple-tc39-sept-2020.pdf)

RBU: (presents slides)

WH: The difference between primitives and identity-less objects is subtle. Is the idea that if you go for the object approach, that these things would be objects, but that you're trying to avoid exposing any way of comparing their identities?

RBU: Yes, the current invariant around identity would maintain ???

WH: How would you specify something like that? We had a problem like that with NaN. How would you spec that these objects would have separate identities but there is no way to compare them? That's a negative assertion — you’re trying to assert that something is impossible in the spec.

RBU: Deferring to DE for spec questions.

DE: I don't think there's a lot different in the spec between primitives and objects in mechanics of identity. In terms of actual spec text there just isn't a lot there. I think it would be possible in theory to insert a spec bug that leaks the identity of a primitive. I like MM's reply below.

MM: We've repeatedly talked about putting more invariants into the spec with the object invariants being the precedent. If the spec has something that violates the object invariants, that would put the spec into an inconsistent state that must be resolved. And likewise we have asserts that have the same meaning ?? Having negative assertions in the spec about what must not be possible is an example of something we should be doing a lot more of.

WH: Why the need for boxing instead of just directly storing arbitrary values inside records and tuples?

RBU: That’s a great question. We should address this in the context of this proposal. The main reason we wanted to add boxes is ergonomics. The driving force behind immutable data structures is that they're deeply immutable. There's no way to silently escape the immutable world. We talked about things like integrity domains. An integrity domain is a space over which we want to hold an invariant. For example, we think of Records as having an integrity domain of “string properties”, in that you can trust the string properties of the record to lead to immutable things. The trick with Box is that it forces you to verify the box on the way in and the way out. In order to put an object into a record, you need to box it. In order to use the object in a record, you need to unbox it. There's no chance that you accidentally escape immutability. That ergonomic idea is the main reason.

RRD: You can assert whether there is a box or not in the R&T structure. If it doesn’t contains a box you can tell it’s immutable. If you see that there is no box in there, you know that you don't need to do a deep copy of the R&T. That could be done whenever someone passes an R&T to a function.

WH: Does a box have to contain an object or can it contain a primitive?

RBU: It's an open question. Do you have an opinion?

WH: I do, but we now have a long queue, so let’s move on to the next person.

KM: Would this just work off the document.all machinery? Like, would to object Tuple give you back the identity operation? If we did use the object it would use the same machinery as document.all?

RBU: I have no idea.

KM: document.all looks like undefined. If one side is true, the other side is false.

MM: ???

JHD: ???

JWK: I don’t like the idea of identity-less objects. I agree with Jordan in the issue. If it was an object, I think it should work with Proxy.

RBU: On the first point, I think we should dive in to whether the axiom is useful, whether the bifurcation between primitive and objects works, ??? We should continue discussion on the issue.

JWK: Proxy?

RBU: We had some initial work on proxies. We have to figure out something for proxies but the actual mechanics I don’t remember. If someone from SES can explain?

MM: The key thing about this proposal is that it is not deep immutability it's about shallow immutability. The immutability ends when you reach something like a box. The extension of the Proxy mechanism is that if the target of a proxy is a function, or an array, etc., if the target of a proxy is an identityless object, two proxies that have the same identityless object and the same handler, where the handler is immutable, the proxy itself can still be shallowly immutable. So the proxy still acquires the immutability status from its target. The proxy itself can still be shallowly-immutable. And when we use the shadow target, the target can use what is ??? The key important thing is this predicate that allows you to say is this deeply immutable. And deep ?? can go through a membrane ?? and anything that is not deeply immutable needs to be considered on either one side or the other of the membrane and be transformed.

DE: more issues about proxies and R&T, a proxy over R&T would have little latitude to do anything because R&T is like frozen objects. [Namely, the Proxy invariants guarantee that preventExtensions Proxies have a target which is preventExtensions, and non-configurable properties are backed by the target as well.] So all it could really do is some other side-effect. On the shadow target technique, we would need some way to have a proxy handler to close over the shadow target while still having the same identity.

MM: The handler would need to be part of the comparison, but if the target ???
Same target being ???

DE: For the same handler comparison to pass, we'd need a way to make the third part of the proxy a tuple for the shadow target. Overall I feel like Proxies for records and tuples would be a post mvp thing even if we go with object semantics.
If you make a membrane over R&T it would more likely transform the R&T eagerly like what you would do with Object.freeze. Let’s close this topic and move down the queue.

GCL: I really like what has been presented here, especially the boxes. I'm glad we were able to get that solved.

JHD: Identityless object. One of the things with prototypes is that the R&T would have the appropriate prototype value from the realm, so that I don't see the prototypes across realms. How would this work with identititless objects? Would it be frozen?

RBU: The prototype is part of the comparison.

JWK: You are introducing identity discontinuity. Then the things are not equal across realms.

JHD: If the core motivation for record and tuples ?? then the content should not matter ??

RBU: We need to think more about cross-realm concerns.

YSV: I wanted to express our support for this path of investigation. We've been reviewing the patches and thinking about how to implement this. One of the things that came up in discussion is that this concept could be applied in the terms of an “object without identity” instead of a primitive. For example, in places like Temporal, where we want objects that are effectively immutable. It may be simpler to write things out in the spec. When implementing, we could tag the objects with a hash-based equality. So the equality would be using this tag. I'm not too sure about the realms issue, but it seems like a good question to research, and I'm glad the Temporal champions are taking their time to look into this.

RBU: You said “Temporal”, do you mean R&T champions?

YSV: I did mean “Temporal” as a place where you can use objects without identity to simplify the spec.

RBU: Yes, that’s something we talked about, but have not brought up yet and haven’t talked with Temporal folks about.

BSH: If we go with these identity-less objects we can’t use those as map keys and sets.

RBU: Only the Weak variants.

BSH: OK, sorry I didn't catch that, sounds good!

JHD: So the concept of identity is already confusing. Before ES6, it was objects. Now it's objects and symbols. This was already hard to explain and teach. One of the primary differences between symbols and objects is that objects have identity and symbols(?) do not.

RRD: I share your concerns about explaining the proposal we would have the same semantics we have so far it's mainly on how we explain things to people. We could even continue to explain things in terms of primitives or at least as a similar concept. I agree this is a step back in terms of explainability though so we have work to do here.

RBU: I think we should continue this discussion offline

JHD: A primitive could have typeof object.

JWK: You get a different “value” of symbol each time. You can’t say because 1!==2 so numbers have “identities”. This also applies for symbols.

RBU: We overload the word "identity" to mean ???

JWK: So I think symbols don't have identities, but objects have.

SYG: We talked about some performance stuff internally in V8: how we might implement internalization. We lack concrete use cases where internalization needs this technique. Pseudo-equality checking doesn't really work. The cases where it would help are in repeated equalities to the ??same object??. Otherwise, you're wasting time crawling the objects to compare them. We're not sure where the use cases are where you are checking large immutable state. A corollary example after you do a ?? But that's a very different kind of internalization that means you recursively internalize every subtree.

RRD: That would be very very interesting to have this type of optimization. Happy to discuss that later. (additional notes after conversation: by that I meant the optimization is important and is worth it, we can assist finding a good way to do it)

PDL: SYG, get in touch because I have an example.

## Class static initialization block for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-class-static-block)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkehkMWh3eO58Dz2Izw?e=2JXhGZ)

RBN: (presents slides)

WH: I support this.

DE: I support this, too! I think it's really great to have this as a follow-up to private fields and methods for the reason RBN explained, as well as class-based programming for grouping code. Banning arguments makes sense like they are banned for field initializers. The super calls, I don’t see any way those can possibly work, the proposal is great in its current form.

YSV: No objection from our end.

JHD: I like that proposal

RBN: Stage 2?

(silence)

RBN: Any reviewers for Stage 3?

DE: Me!

PFC: Me!

### Conclusion/Resolution

Stage 2

Reviewers:
DE PFC

## Process document clarifications

Presenter: Yulia Startsev (YSV)

- [pull-request](https://github.com/tc39/process-document/pull/29)

YSV: (presents pull-request)

WH: Thank you very much for converting this to positive framing! I like this version much better than the prior emphasis on individuals blocking consensus. One comment I can make is this assumes the only reasons something doesn’t advance are a constraint or a block.
There is a third reason: a proposal simply does not have enough support. Nobody wants to block it, but nobody but the champion cares about it. It doesn’t fit neatly in this process document. I’d like to see this situation addressed.

YSV: I agree that we don't have a good way of taking the temperature of the room. We usually go to silence. Silence could hide dissent. I would be very interested in a mechanism to gauge enthusiastic support for a proposal. I don’t think we have that right now, if we have a proposal I’d be happy to integrate it into the proposal.

WH: People can find it intimidating or challenging to stick their head out to block something.

SFC: I don’t necessarily agree that proposals should need enthusiastic support. There are a bunch of important proposals that don’t get people excited, such as ones in Intl, even though they are important proposals.

WH: I think the intl proposals have more support than you realize, I think you don’t have to worry about that. An example of what I’m concerned about, to pick a silly example, if someone wanted to push for EBCDIC regular expressions, no one else wanted to push for it, most people were negative but not enough to dare blocking it, I don't think that's good enough for it to advance.

SYG: The current PR adds quite a bit to the process document. I haven’t read the latest iteration, what’s your take on having it a bit terser without losing the meaning moving forward?

YSV: I think I can get it done by November, the two long sections can be much smaller.

JHD: Thank you YSV. Our committee has a long history of undocumented norms and everyone was OK-ish with it. I think that there is a long history of types of objections being appropriate for certain stages. Not in the sense that you can't object to a Stage 1 proposal due to a later stage concern, but more in the sense that Stage 3 means things are shipping. The types of concerns are different at each stage, and the kind of concerns that can be raised is limited. It’s really hard to read the room, do you agree? It’s also really hard to ask, 'do you object?' People will be quiet. Only the people with strong opinions for or against are going to speak up. And people with different personality types might not speak up. Is the default that everything advances with silence? Or is the default that things need support in order to advance? There might not be consensus on what the default is but I appreciate the positive framing. What I think is particularly useful out of this whole process, is what are some good incentives that we can document, like things that we haven't realized that are good on our process, and what are things that we haven’t be documenting that are bad and we can avoid. For example, DE suggested in IRC that, what if we had multiple people required to say, I enthusiastically support this proposal? More than one person would have to not be silent. I hope this can land and I’m thankful for people that provided feedback and to you YSV for this work.

YSV: I’m really glad to hear your support and everyone else who helped. I want to touch on what you mentioned about introducing a way to more easily measure support, or sense minor negative feelings that aren't a block, to sense the temperature of the room. We need more experimentation. I wonder if we can experiment about this over the next year. Maybe it’s something added to tcq where delegate can put thumbs up and we can record thumbs up in the notes. Maybe it takes a form of what DE suggested. I'll take a look at IRC. I would like to see this change land independently from that time because the period to add engagement measurement. I think there has been some work here that is valuable that we can land ahead of time.

JHD: I just want to add that some engineering cultures have difference between +1 and +2. Node.js has the custom of +1/-1 and +0/-0.

SFC: The +1/-1/+0/-0 is known as the [Apache Voting Scale](https://www.apache.org/foundation/voting.html#expressing-votes-1-0-1-and-fractions), from the Apache Foundation. So we can take a look at it to get some ideas.

YSV: I want a quick sense on what is supposed to happen next, should we continue async? Should we land this now and iterate or should we come back to it in November?

MM: I prefer the November option. When this is about to land I want to give it a thorough read.

WH: I agree with MM.

?? (other people in quick succession): Ditto.

YSV: I'll bring it back in November then.

## Class Access Expressions for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-class-access-expressions)
- [slides](https://docs.google.com/presentation/d/1ATxFyZUYv9WvmLMFPDIuJ5QSpoVTIdqM0ThH2JPpzFw/edit?usp=sharing)
- [spec](https://tc39.es/proposal-class-access-expressions/)

RBN: (presents slides)

MM: When is this different than using the name of the class? In all the cases where it is useful, everywhere you use the `class` keyword, what happens if you use the name of the class instead?

RBN: There is no difference in the semantics, it should behave as if there was the name of the class name but without the class name which is useful for long class names.

MM: So, there's a problematic case that arises by using a keyword to refer to the closest enclosing class. The problem is nested classes. If you refactor something into a nesting class lets say yo put ?? now the occurrence of class refers to the inner function instead of the outer function, Whereas, if you always refer to things by name, you can always shadow, but you don't make shadowing accidents. So I really question whether this proposal pays for itself. If the price of not having this proposal is using the class name, and if the class names are usually short I’m not inclined to add such syntax to the language for such a small problem

RBN: The shadowing problem is one I am aware of. We discussed it a few years ago when I first proposed it. It's a known caveat of the proposal. But the main goal is to provide a way of avoiding repetition, and don’t use `this` in static instead of `class`. (?)

MM: I think that in the absence of the proposal, don’t tell people to use anonymous class and tell them to use a name.

RBN: ???

MM: And I think that's a minor cost relative to introducing the syntax.

JHD: If you have nested arrow functions you need to have to store this in a lexical scope

MM: This is known to be a hazard.

JHD: If you actually needed to refer to both at the same time in the nested class, you'd need to cache `this` in a variable anyways, and you wouldn’t run into this hazard.

GCL: Curious if you would extend this to an equivalent with function like `function.xyz` in an anonymous function.

RBN: I can’t see that being the case. The main case was to differentiate static methods and instance methods with some syntax sugar around it. The use case for that I think would be fairly limited. There has been a suggestion on the issue tracker to use a new keyword like `static` instead of `class`, which has its own set of issues.

GCL: I have no real use cases, just a mirroring sort of thing.

RBN: Right now there is no plan for any type of equivalence.

JHD: I'm very much in support of this proposal. One of the benefits of object destructuring is avoiding repeating a property name. There are tons of bugs that have been avoided by not saying "object.foo" because you only defined "foo" once. Simply avoiding repetition, is a good reason to do this. It's DRY to not have to repeat the class name. In snippets, you have to tell people that they have to go out of their way to match the class name. Similarly some classes are not named, in class factories you don’t name it directly. I think there is a huge advantage here, and the fact there are some cases where you wouldn’t be able to use it is not really a reason. in the same way that nested arrow functions in practice don't create confusion. People understand that `this` inside of arrow functions is lexical. There are a lot of options. Simply avoiding repetition is entirely sufficient for the extra syntax.

RBN: I'd like to point out that a lot of my prior experience is with C#, which doesn't let you override a static method (you need to shadow), but it also doesn't allow class name dot for fields. It’s one thing we were discussing for ?? There is no common form or dotless form that you can use to access these fields. ???

YSV: Feels like a papercut. Does it need a solution? I agree with MM's comments that this doesn't seem to carry its own weight. I've only seen this pattern once while programming. The factory class was named "Foo" and it was hard for someone reading the code to figure out what the class did -- this was a place where this could have been used. But if there had been no name there, it would have been even more for comprehension of the code base. In this case, giving a name may make the code more clear than using a keyword. So I'm pretty -1 on this on the Apache Scale.

SYG: I argued for private static being not so bad -- naming your classes is indeed a small cost IMO, agree with MM. Agree with this sentiment. Previously I was arguing private static to be not so bad. I don’t think the C# comparison to be that valid. In C# there is no way to refer to the instance of the class isn’t it?

RBN: What do you mean by instance of the class?

SYG: Is the instance of the class a first-class value in C#?

RBN: Yes and no. You can use method to access properties, static fields, etc. on the class.

SYG: Is it itself a value you can pass around?

RBN: it’s been a long time since I spent time in C#

SYG: Java doesn't have that. It doesn't make sense to compare to those classes, because there is no class object there is no compile time thing to refer to it?

RBN: It's not as straightforward as with a class object. But there are ways like with reflection whereby you can access the properties as values.

SYG: The comparison is not apples-to-apples. I think naming the class is a small cost.

RBN: for readability, I agree, you can name your classes but I don’t think this is necessarily an issue to add this.

PDL: I'm not aware of anything else in ECMAScript that allows accessing a keyword with a dot syntax. Syntactically, this seems like an outlier.

RBN: we do that today with `import meta`, `new.target`. We already have metaproperties.

PDL: It feels like we're introducing something where it is of questionable benefit given that there are other solutions out there already. Accessing from the keyword feels strange.

WH: I’m impressed you made the syntax work — there are a lot of syntax icebergs in this space and you managed to get close but avoid them. But I also share the sentiment of MM and others. I don’t see that this additional syntax warrants the complexity and I am unsure if we should do this at all. So put me in the slightly reluctant camp.

RBN: Many of the committee are fairly lukewarm on the idea and I was unsure what to do with the proposal, so I thought about bringing it up to either advance it or reject it.

SFC: I’m not super enthusiastic, thinking about other languages, Python etc, this is exactly the behavior I would expect to see. Being able to self reference static functions is something I would like to see, at +0.3, but not strongly positive.

JHX: I think the original motivation includes to solve static private field footgun, at this part has been removed; so I think the motivation is not very strong. There are issues with the decorator use cases that uses a dot form.For metadata. I think it's also like function.sent. function.sent is not a property on the function directly. The class part, maybe we should not use class dot to point to something directly. Maybe it shouldn't point to something on the class.

DE: I’m having trouble understading JHX’s point. Decorator metadata is kinda like RBN’s Reflect.decorator module.

RBN: He’s not talking about decorator metadata, how would you reference the decorated vs undecorated class. You could imagine a class.per, or something else.

DE: So I mean, even that you need to access the metadata of the class. So a construction which is only available inside the class is not likely to be helpful.

RBN: I’m not certain, even if, what about all the possible in-between classes, that result from decorators? JHX is basically saying that carving it out for property access enables it to be used for meta properties like import.meta or new.target.

DE: I can understand how there may be other good use cases of the class keyword, but I don't understand how it would be used for metadata.

JHX: I think the decorator usage we can discuss in the decorator proposal. What I expect is I feel the current motivation of class access is not enough after removing the static private field case. And I think it could based on the metadata it could have many use cases.

SFC: Shout out for Yulia’s research calls. Most of the objections are on the basis of “what’s best for developers, what’s clear when reading/writing code”. It seems like the type of question that the research call would handle.

YSV: The call is on Thursday this week.

RBN: I'm not withdrawing the proposal, but I think ???

MM: I am strongly objecting. Giving the question you are posing, I would retract the proposal.

RBN: there was discussion about using static instead of the class keyword, this could be possible in strict mode

MM: I don’t see that using `static` rather than `class` does anything at all to address my objections.

RBN: I’d like to take some time before retracting the proposal. I still think there are some valuable use cases so I will not withdraw.

WH: If you're going to do this feature, you should use the `class` keyword, but I'm not saying this feature should be done at all. I’m in the slightly reluctant camp.
