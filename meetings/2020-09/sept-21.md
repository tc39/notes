# September 21, 2020 Meeting Notes

-----

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Waldemar Horwat      | WH             | Google             |
| Ross Kirsling        | RKG            | Sony               |
| Bradford C. Smith    | BSH            | Google             |
| Philip Chimento      | PFC            | Igalia             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Michael Saboff       | MLS            | Apple              |
| Dave Poole           | DMP            | Apple              |
| Keith Miller         | KM             | Apple              |
| Jack Works           | JWK            | Sujitech           |
| Chip Morningstar     | CM             | Agoric             |
| Daniel Ehrenberg     | DE             | Igalia             |
| Myles Borins         | MBS            | GitHub / Microsoft |
| Jordan Harband       | JHD            | Invited Expert     |
| Leo Balter           | LEO            | Salesforce         |
| Ujjwal Sharma        | USA            | Igalia             |
| Justin Ridgewell     | JRL            | Google             |
| Shane F. Carr        | SFC            | Google             |
| SongYang Pu          | SYP            | Alibaba            |
| Chengzhong Wu        | CZW            | Alibaba            |
| Jason Orendorff      | JTO            | Mozilla            |
| Rob Palmer           | RPR            | Bloomberg          |
| Robin Ricard         | RRD            | BLoomberg          |
| Yulia Startsev       | YSV            | Mozilla            |
| Mary Marchini        | MAR            | Netflix            |
| Istvan Sebestyen     | IS             | Ecma International |
| Shu-yu Guo           | SYG            | Google             |

## Opening, welcome, housekeeping

Presenter: Aki Braun (AKI)

AKI: (presents slides)

## Secretary’s Report

Presenter: Istvan Sebestyen (IS)

- [slides](https://github.com/tc39/Reflector/files/5246401/tc39-2020-041.pdf)

IS: (presents slides). The usual information, about TC39 standards access and download, status of meeting planning and news in Ecma, etc. The only relevant news are that formal liaison with CalConnect not dot done yet due to the incompatibility of the two patent policies (Ecma TC39 = RF and CalConnect = RAND). Suggestion was discussed with CalConnect that CalConnect should establish an “experimental RF patent policy” (takes of course some time), until then CalConnect experts should participate in TC39 work as invited experts in personal capacity accepting the TC39 RF patent policy.

## ECMA262 Status Updates

Presenter: Jordan Harband (JHD), Kevin Gibbons (KG)

- [slides](https://j.mp/262editor202009)

JHD: (presents slides)

(Re. normative PR slide)

KG: Re. 2094, this is something that we discussed last time where if you do `x = delete x, 1` then you can get into a situation where the implementation's concept of references don't match the spec's concept of references. There are still a lot more of those that we will need to sort out eventually.

SYG: This is the slide that implementers should take note of, to see which normative changes have landed. The PR may get slipped through the cracks. This is a good time to pay attention to it. Once it has been merged, it would be good to prioritize fixes.

JHD: (continues to present slides)

KG: (presents slides)

WH: Thank you for following up on the math contradictions and inconsistencies I raised. Watching the new PRs, I’m still seeing a bit of inconsistent usage of arithmetic and comparisons on real numbers vs IEEE doubles.

KG: PRs or commits?

WH: PRs.

KG: That is true, I am keeping PR 2007 rebased on commits which made it into master but I haven't been worrying about PRs. When it lands, I will rebase the rest of the PRs to update the style to match 2007.

WH: Great! I’ll hold off on pointing out inconsistencies in other PRs until PR 2007 lands. I really appreciate you doing this cleanup!

KG: Thank you for pointing it out! This uncovered a number of places where implementations have diverged.

MF: (presents slides, “GitHub Project: Major Editorial Work”)

## ECMA402 Status Updates

Presenter: Shane F. Carr (SFC)

- [slides](https://docs.google.com/presentation/d/1FeyW-QdZqAQ0xvrPacI347gYRuBtZ8NR6lV6n0bca4M/edit?usp=sharing)

SFC: (presents slides)

## ECMA404 Status Updates

Presenter: CM

CM: ECMA404 sleeps happily, let’s try not to wake it up.

## ECMA TC53 Liaison Report

Presenter: Peter Hoddie (PHE)

- [slides](https://www.icloud.com/keynote/0_6IXVVSlbeV1Dm2OdEJt-5kQ#tc53_liaison_tc39_-_september_2020)

PHE: (presents slides)

## Updates from the CoC Committee

Presenter: Jordan Harband (JHD)

JHD: (presents CoC updates)

## The last 5 years of Test262, a brief review

Presenter: LEO

LEO: (presents slides)

RKG: Bravo. Let’s give applause.

(many people give virtual applause over webcam)

## Explicitly specify order of operations in MakeTime

Presenter: Kevin Gibbons (KG)

- [pull request](https://github.com/tc39/ecma262/pull/2120)

KG: (presents PR)

KG: Questions? Consensus?

(silence)

KG: I will take that as consensus.

### Conclusion/Resolution

Consensus Reached.

## Move `__proto__` out of Annex B

Presenter: Gus Caplan (GCL)

- [pull request](https://github.com/tc39/ecma262/pull/2125)

GCL: (presents PR)

JHD: Annex B represents two things. 1 is web browsers need to do this thing, but others not. that are required for some JS to run. The other thing is things that are “icky”. Something's presence in Annex B is often cited as a reason to pick one approach over another, and that's something we want to preserve. Just marking something as normative optional doesn't do that. It says "this is fine, but it may not be there." I would love to include some way to include this discouragement. I think it would be a loss if the spec implied that these things would be good to use.

GCL: To clarify, your concern is about the spec sending a message to non-implementers, people who use JavaScript?

JHD: Yes, not to implementers, but to practitioners.

GCL: I don’t know if we care about that, but it is interesting.

JHD: If I had to write an engine and discovered later that i had to implement these optional things anyways, I would be annoyed. Hopefully we can fix that without losing the signalling to users.

GCL: I think the spec is not the appropriate place to be putting our direction to end users. It seems like that's the wrong layering.

JHD: To me it is less about what we should do, but that users do take lessons from the spec.
In the same way as a lot of these things in Annex B refer to de-facto reality, a lot of people take de-facto direction from the spec and I don't think we should ignore that.

WH: I agree with JHD about “icky”. The spec is used in surprising ways. Did you know that the C++ ISO standard references the ECMAScript spec for its regular expressions? Moving things out of Annex B has the ability to change how C++ regexes work.

BT: Did C++ intend not to adopt Annex B?

GCL: It does reference ES3, so it won’t affect forward momentum.

WH: It would if the C++ committee ever rebases their links.

WH: I'm fine with moving `__proto__` out of Annex B but I do want to point out that moving things out of Annex B in general is much more perilous than some may realize.

MM: We did discuss the “icky” issue at the time when we were laying out the elements of Annex B and put things into different categories. We reached consensus on removing a bunch of things from the main spec. Having a strong enough editorial signal in the main spec to convey the "icky" issue is the right solution there, and consistent with what we've already achieved consensus on. The reason why it is the more appropriate solution, if we leave it in Annex B, there is implementation variation that is allowed. Sometimes you want to allow that. If your only intent is to have all the implementations do an agreed thing, and try to deter the users from using something "icky", then you want to phrase the spec in such a way that implementers can only implement one thing, that is not the Annex B way. I think we can do appropriate signalling in the spec, DE at one point did a style thing for a non-normative note that was sufficiently attention-grabbing. I would not mind seeing words like "Deprecated" in non-normative language in the spec.

GCL: To address this, if we split it into “someone needs to figure out the styling of how to move these into the body,” then this would be the logical normative part of that.

MM: Yes. Normatively it should go into the main spec. There should not be implementor freedom unless we want implementors to have freedom. We should have a strong signal, the evolution of that signal does not need to go through the editorial process.

BFS: There was something interesting I noted, we discussed if it is something required to build a usable JS engine, when we discuss whether it should be normative optional. XS actually ships these methods, I just double-checked. They implemented these for practical compatibility with the existing user code bases. Even if we are to say something is "icky" or deprecated, the reality that we face is that they are not optional. Not widely used, maybe true, but they have enough usage today to cause it to be implemented in at least one engine that doesn't want to implement it. I think these are actually not normative optional, if the ecosystem relies upon them being shipped for compatibility.

BT: PHE wants to clarify on this topic, if no objections I’d like to let him skip.

PHE: On the specific point raised by BFS, he is absolutely correct that XS does implement these functions. The reason why is important. We never needed them until we wanted to pass certain tests in test262. There is an unexpected dependency in test262 on Annex B. We would be thrilled to take it out.

GCL: You actively want them to be optional?

PHE: Yes. I have no problem with them being normative optional, but I don’t think that devices should be required to carry them around.

JWK: Why do you need to implement in engine if you can manually define in userland? Deno does not implement this, and if we are using a library and it’s broken, I manually define `__proto__` to fix the lib.

BFS: Deno does ship with `__proto__`, but they delete it on purpose.

GCL: For what it's worth, that's the normative optional part here. I don't think that conflicts with anything. It's very clear you do not need to implement `__proto__` to be a ??? engine.

SYG: For `__proto__`, it is uncontroversial, everyone thinks it ought to be discouraged. I know we had a lot of discussion about ASI, and remain neutral in the spec language. If we're to set a precedent here, if we go with an "icky" note, this would be the first thing in ECMA-262 that we say is deprecated and discouraged. I’m trying to clarify what we would be agreeing to. It sounds like case-by-case, we would discourage things in the main body, we would need to get consensus that it is a thing that we want to discourage?

JHD: That matches what I'm asking for.

MM: I would certainly that the “icky” designation should require consensus. ASI did not acheive consensus.

GCL: Can we skip past the ickyness and switch directly to the `__proto__` business?

BT: 15 minutes left, up to you GCL.

KG: Which `__proto__`?

GCL: All the methods and syntax.

KG: All the methods and syntax being moved into the main spec but remaining normative optional?

MM: I thought the syntax was already mandatory?

GCL: The syntax is also moved. It is not normative optional.

KG: The only normative change is making syntax mandatory?

GCL: `__proto__` is normative optional. `__defineGetter__` etc is not optional. The syntax is moved into the main body, it is not optional.

MM: That seems right to me.

JHD: My topic isn’t ickyness, but I can skip the ickyness part.

BT: Take it away.

JHD: BFS made the point that "icky" and "optional" are different things. Should we make everything required except what we can't? Or should we make everything optional except what we have to make required? `__proto__` has to be required, but the _defineGetter__ stuff, I’m asking the general question.

MM: I think it’s complicated. My original presentation on moving things out of Annex B goes into some of the tradeoffs. I don’t think there is a single answer; it depends on why we think something may be optional.

GCL My goal is to have as much as possible be required. The only reason `__proto__` is not required is because implementations actively get rid of it. Node has an option. deno gets rid of it. I think we should aim for one JS as much as possible.

WH: I don’t think we have consensus on that. That (make as much as possible be required) is an opinion and we have different opinions on that in the committee.

GCL: We still need to review each item on its own merit. I'm not saying we should move the regex stuff in right now, but in general we should be trying to get to a one JS.

MM: The Test262 point, what PHE said was because not implementing them, test262 fails, that is a bug, that needs to be fixed in test262. Normative optional is specific in that it is either clearly absent, or implemented correctly. And therefore being clearly absent should be a passing situation.

LEO: For what it’s worth, everything in Annex B is in a separate folder.

MM: You agree that having something be absent should be a passing condition?

LEO: There is a separate folder in each test for Annex B relating to each feature. Leaving out those tests is the responsibility of the test runner.

MM: The test itself, in testing conformance, if it is normative optional, if it is absent, it should report success.

BT: Can you file a bug on test262?

MM: Yes.

PHE: I want to make sure where we landed. I don’t want to summarize, I don’t know if we have agreed to anything yet.

KG: We have not agreed to anything yet.

MM: Somebody said that `__proto__` should be normative optional because of a security concern. That one is surprising to me because we do have Object.setPrototypeOf and Reflect.setPrototypeOf, both of which are required, which provide all the capabilities of `__proto__` through other means. I don’t see what security concern `__proto__` would raise.

GCL Its not setting the prototype, it’s that it is a property of objects. Lodash had a bug, an interaction with JSON.parse, it would overwrite the prototype if you weren’t careful. It isn’t setting the prototype itself but a domain problem.

MM: Could you put a pointer to that in the notes?

BFS: You can look up papers on prototype pollution.

MM: This is not prototype pollution.

BFS: The easiest way is what GCL said. The difference is between method call and assignment, when you do a JSON.parse, and has a `__proto__` property, people will do that as a dynamic access using that as a key. Deep cloing libraries will naively use that `__proto__` key and assign something to an object. This replaces the object’s prototype. For example, Node introduced a flag to disable the proto getter and setter, because there are so many notifications of these bugs, because there are so many find, that they are prohibitive to actually fixing the bug.

MM: Thank you, I have a sense of it now.

BFS: As a personal preference, we should move the syntax for `__proto__` that is in Annex B into the main body regardless of the methods. You can have two JS source texts that execute differently based on their environments. Because there is wide enough usage it is problematic that we maintain this divergence. There are inconsistencies with JSON.parse. I think that’s fine. I like moving the syntax into the main spec.

KG: Agree on not marking “icky”.

GCL: I wouldn’t even bother marking it as icky, it is just something people use.

BFS: Sounds good that’s all.

KG: Can you list all of the things that we are asking for consensus on?

GCL: The `__proto__` accessor, to be normative optional.

KG: Is it also being marked as icky?

GCL: Do we need consensus on that here?

MM: We need consensus on anything in the main spec that is marked as “icky”. We should not assume in migrating things from Annex B into the main spec that Annex B assumes that it is "icky". It does not.

GCL: I’m just gonna list this off. `__proto__` accessor will be normative optional and icky, the __define and__lookup {Getter/Setter} methods will be non-optional and “icky”. Do we have consensus on them being optional?

JWK: I agree.

JHD: Is there anyone that wants the define/lookup methods to be required?

GCL: That's what I'm asking. (silence) Seems like no.

GCL: the syntax for `__proto__` will be required and will not be icky.

MM: All of that sounds exactly right to me.

DE: I prefer things to be required. I don’t object to leaving it optional, because it already is optional. But it do think things in general should be required. It's good to unify JavaScript and provide more interoperability. I think our role as a standards body is to provide this interoperability. I don’t object to this landing as-is.

GCL: I agree, I could ask the reverse, to see if anyone objects to them being required, but since we already asked for the other one, that seems — I don’t know.

WH: I prefer optional, although it's not a strong preference.

GCL: Seems like we have consensus for optional. Let’s move forward with that?

KG: Can I recap? To make sure we all know what we agree to?

- The `__proto__` syntax will be required and not marked as discouraged
- The `__proto__` accessor will be optional and marked as discouraged.
- The `__defineGetter__`, `__defineSetter__`, `__lookupGetter__`, and `__lookupSetter__` will be optional and discouraged.

Note: icky means discouraged

SYG: Given that this is the first time that we are marking these things as “icky”, I would like some acknowledgement that the editor group be given some independence over ???
Vs. if you are bootstrapping a greenfield ecosystem you are discouraged from implementing this.

JHD: SYG, this is not the first time we’re marking things as “icky”. There is precedence for that, for example Annex B itself (quotes the beginning of Annex B on the definition of "discouraged") That said, I agree with your request for editorial leeway. I just wanted to clarify.

MM: Being in Annex B, it can be there for a variety of reasons, not everything in there is undesirable, it has to be on a case-by-case basis as we move it.

JHD: I’m not trying to imply that we should mark everything as “icky”.

WH: MM, read the beginning of Annex B. It currently states that everything in there has undesirable characteristics. We can change our minds on some of that, as we move items, but the “icky” designation is there now.

MM: Ok.

### Conclusion/Resolution

- The `__proto__` syntax will be required and not marked as discouraged
- The `__proto__` accessor will be optional and marked as discouraged.
- The `__defineGetter__`, `__defineSetter__`, `__lookupGetter__`, and `__lookupSetter__` will be optional and discouraged.

## Align detached buffer semantics with web reality

Presenter: Ross Kirsling (RKG)

- [pull request](https://github.com/tc39/ecma262/pull/2164)

RKG: (presents PR)

PHE: I don't have a strong position. I remember the GitHub issue. There are 2 issues that pass this: Two implementations, Moddable and ???, both get this right, conforming to the spec. I completely agree that the spec should address web reality. I appreciate the work you and others have done to pin that down. A different way to look at this is that this web reality is another Annex B behavior. The web is looser with enforcing some of the requirements in the spec than the language would prefer. These differences could be put into Annex B as required for web browsers. It would maintain the intent of the specification better.

RKG: That makes sense. My understanding (which may be imperfect) is this has been pretty consistent in browser-hosted implementations all along; that TC39 inherited the spec’ing out of ArrayBuffer et al. from Khronos during the ES6 era and wanted to make these cases more stringent, but the ship had already sailed in engines. It's just taken this long to be an official web compat issue.

GCN: This should not be in Annex B especially for node because there is ton of code to handle it. It would be more appropriate to do the “icky thing” but I think it should not be added to Annex B.

SYG: I don't disagree with PHE that you can call it out… if you are more interested in interoperating with the existing corpus of code, that's where you might have the option to break. But I also don't think there's a principled reason to prefer the current throwing behavior other than that we wrote it in the spec and that some implementations are following it. So I wouldn’t necessarily even starting with the default position it is icky.

DE: I think it's really great work that RKG did to bring this to the standard. I hope we get consensus on it. I think it's a real improvement. I think building interop should be a core goal of standards. I would be hesitant to create multiple paths. I don't know what "icky" would mean here. This is a code path that's just part of the object operations for this. So I'm not really how marking it would work. If I were able to declare parts of JavaScript icky, I would mark a whole bunch of things, which might be what other people might not agree on. I don't see that as our role.

JHD: from your PR, I definitely see why the delete needs to be changed if they are configurable, … Can you elaborate on why to satisfy those invariants we must make integer indices configurablnone?

RKG: This was brought up by @anba and SYG; it’s needed to avoid breaking an EIM invariant for [[HasProperty]].

JHD: Can you explain the hasProperty change? I'm trying to get my head around the logic.

KG: If a property is not configurable, it must never go away. These go away, so they have to be configurable.

JHD: Go away as in reporting a different value?

RKG: Yeah.

SYG: A question at JSC, in my testing, correct me if I’m wrong, JSC throws and this pr would make it return undefined and false, and be a no-op in sloppy mode?

MM: The set operation returning false is only a no-op in sloppy mode. In strict mode, it causes an assignment to throw.

SYG: So the question to JSC is are you interested in aligning with V8 and SpiderMonkey behavior?

RKG: I will say that I’ve already been planning on correcting JSC’s behavior but am waiting for the result of this presentation; I can’t speak on behalf of Apple though.

KM: I don't think it would be a problem.

SYG: I think it the issue that turning an error to a non-error has minimal compat risk.
I am willing to add Chrome to be the first do that change.

KM: Compat risk is always a problem.

RPR: At time, conclusion?

RKG: Seems like everyone is onboard?

(silence)

### Conclusion

PR Approved.

## Specify order of name and length for built-in functions

Presenter: Kevin Gibbons (KG)

- [pull request](https://github.com/tc39/ecma262/pull/2116)

KG: (presents PR with code example)

KG: I'm asking for consensus that 'length' come before 'name'.

RPR: No-one on the queue, thumbs up.

MM: Bravo for bringing this inconsistency to our attention and resolving it!

GCL: The prototype property was in different order, is that out of scope now?

KG: I'm not specifying the order in which the prototype property would need to be enumerated.

GCL: Ok

MM: Why not?

KG: Because there is no agreement among engines.

RGN: Strongly in favor of this and love the increased consistency.

KG: I might come back with a prototype in a future meeting.

### Conclusion

Consensus.

## Arbitrary Strings as export/import names

Presenter: Bradley Farias (BFS)

- [pull request](https://github.com/tc39/ecma262/pull/2154)

BFS: (presents slides)

WH: Is this the first place in the spec where you check for “valid unicode”?

BFS: To my knowledge, yes, but there is iteration of code points for a specific operation. The spec doesn't check for isValidUnicode anywhere, but it does iterate code points.

GCL: It does that in string iterators and regular expressions

WH: The notion of valid Unicode is quite fuzzy. Suppose your string begins with a byte-reversed byte order mark. Is that valid Unicode?

BFS: I don’t think byte order mark is a lone surrogate concern...

WH: It's a different "valid unicode" concern. There are things you can do in Unicode strings that are “invalid Unicode” that are not related to surrogates.

BFS: can you do that in a JS string literal?

WH: Yes

BFS: Ok, so they are valid UTF-8

WH: They are their own thing.

BFS: Wasm only supports UTF-8. We could change the operation to be, "isValidUTF8". Seems like what your concern is outside the attempt to get compatibility with Wasm, I have no strong opinion so any option is good.

WH: IsValidUTF8 sounds good to me. It makes explicit what you are checking for. IsStringValidUnicode is too vague.

BFS: Sure, we can rename it.

KG: The sequence does not contain unpaired surrogates

WH: A 16-bit code point sequence contains no unpaired surrogates if and only if it can be represented as UTF-8.

MM: UTF-8 is not a concept that appears anywhere else in JS, JS mostly refers to UTF-16, there is no problem with UTF-8 but is the operational implication of that with regard to UTF-16 the same as saying valid UTF-8?

WH: Yes.

MM: So, I would state it in terms of no unpaired surrogate pairs.

BFS: more nuanced than that, it is about how Wasm represent things

MM: I understand the motivation. Is the implication of being able to translate to valid utf-8, is the implication on a utf-16 encoding “no unpaired surrogates”. If so, it should be “no unpaired surrogates”.

JHD: MM, there are plenty of references to the UTF-8 concept in the spec: valid utf8 codepoints, JSON stringify, etc ...

MM: I didn’t know that; thanks!

BFS: We can also change it in some way that we - I don’t like the idea of phrasing it, that it doesn’t contain any lone surrogates explicitly, although to the most technical letter what it is doing. If we name it specifically that, it won’t get updated to valid problems in the future,
If there is a problem found with this method, that basically asserts that it does return code points that are complete, then we wouldn't get that if it states "doesn't contain lone surrogates".

MM: I have no objection to either way of phrasing it, I prefer the lone surrogate but if you prefer UTF-8, I am ok with this.

YSV: There is no objection from our side, but to JHD’s point, We’d like to prefer UTF-16 wherever possible unless there is a conscious decision. In this case UTF-8 does make sense due to the WASM case.

DE: I think we’ve been talking about UTF8/16 for a while, we should focus on editorial issues on the PR. I don’t think we should focus on UTF8/16, I like the feature and it makes sense. I'm the champion on the WebAssembly side of the ESM integration. I think it's good that we have this field in. It makes sense that we only import or export valid Unicode code point strings, as this does.

AKI: Queue empty. BFS?

BFS: I would like to ask for consensus, remaining editorial issues to be discussed with people on it.

DE: I want to make a suggestion with the consensus. I would like that we wait for Test262 as well as 1-2 implementations to prove out the concepts. This is something I've been meaning to make a process document PR for a while. I think it's important to do something similar to the Stage 4 requirements. Would people have problems with adding this to this PR and array buffer detached semantics and have a follow up with the process?

BFS: Does that mean I would come back for consensus to land it?

DE: It would be handled only on the issue tracker.

MM: +1

SFC: +1

JHD: DE has already asked in the past for a general process for this, and we agreed we’d apply it case by case. This makes sense in the case of that PR, so I think this is a good idea.

DE: When I proposed that in general, we adopted the rule that normative PRs need Test262 tests. An implementation would help us iron out this PR better.

GCL: Engine262 has this implemented already.

### Conclusion

Approved, pending the Test262 and implementations.

## Numeric literal suffixes update: separate namespace version

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-extended-numeric-literals)
- [slides](https://docs.google.com/presentation/d/1lD2NN0I3HFhTqFCtz7WTXEsbbxno4VqfUOUwZgrGHRs/edit#slide=id.p)

DE: (presents slides)

WH: There are other letters you should exclude like `p`; ieee doubles can use them for exponents.

DE: I thought it was `e`.

WH: `e` is used for decimal exponents; `p` is used for binary exponents.

DE: Is it part of JS syntax?

WH: Not right now, but we could add it in the future.

DE: Is there anything else we need to add besides `p`?

WH: The exclude list is getting rather large. `a` through `f`, …

JHX: This is a simple question, whether we follow 0x, or just like that, will `cm` work grammatically?

DE: Yeah; `1cm` doesn't work. The CSS units will simply not all work.

JHX: That seems like a problem. There are many CSS units; not only `cm`, but also `deg` and some others. I think it doesn't match all the use cases.

DE: I guess for those use cases, they need to put something before them suc as $ or another letter. I agree it is a limitation.

GCL: The parsing optimization you mentioned sounds interesting but not applicable in some cases because of, like, if you used a suffix inside of a function, and then below the function you used the suffix, the order might not line up.

DE: To be clear, the opt I’m talking about are for built-in suffixes, the user-defined ones are evaluated when they are first encountered.

GCL: Okay, yeah, that makes sense.

GCL: I really dislike using a different namespace. You mentioned that it might class with loop variables, but I actively do not want to read or write code where some of the "i"s are variables and others are numeric functions. We really should use the same namespace here. I’ll even throw out the `@` symbol because this is decorating a number.

DE: I proposed the `@` symbol previously and people told me not to mix decorators with this. If we make them the same namespace, we need the underscore. Part of it is overlap, part of it is optimization cases where we can partially evaluate the for built in suffixes, they would have to first resolve the namespace to check if they are shadowed locally.

GCL: Yeah, but those all deoptimize code anyway. It's not a new thing.

DE: `with` and `eval` don't globally “deoptimize”. They cause localized problems. We shouldn’t make the optimization of numeric literals be fragile and context-dependent.

MM: You're not solving that with a separate NS, you can still have shadowing in a separate namespace.

DE: I didn't explain the invariable clearly. Neither `eval` nor `with` would leak an entry in this new suffix namespace.

MM: It wouldn't publish it externally, though.

DE: For `with`, there is no way it can participate in the suffix name space. If a suffix is declared in an `eval`, it is scoped the inside of that eval, like a `let` declaration, not like sloppy mode `var`.

MM: The var and the stopping mode leaking out is what I meant by "publish". On the shadowing issue, it would still shadow across a direct eval.

DE: if you have an eval with a literal suffix in a direct eval then it can only shadow within that eval, not leak/publish outside of it.

WH: MM, what do you mean by "shadow"? If I direct-eval inside a block and suffix `m` is defined in that block, then the eval would pick up the numeric suffix?

MM: that is what I meant. The shadowing that I had in mind, is not the problem, the eval leak/publish, that doesn’t seem to be a problem in that case.

WH: So we’re concerned about things leaking inward into eval?

MM: The leaking inward is what I was initially concerned about, but there's no problem there.

GCL: I don't find the `with` and `eval` cases compelling or motivating enough. I don't think we should be optimizing for "make code fast in sloppy constructs".

DE: more about engines to be able to keep their structures. Literals should also be predictable, for developers, that you can’t shadow.

MM: Any developer who wants to understand their code should stick to strict mode.

DE: I see two options: (1) making a separate namespace, with no prefix, or (2) making the underscore an explicit separation. I don’t think we can make it so that it only refers to the lexical scope with no prefix like `_`. I was laying motivations for why those were the two options.

MM: I very much prefer the polyfillable principle: that whatever new suffixes for built-in types going forward, the things you can do at the user level can look like that. It's a good design principle that the mechanisms available to language designers, as much as that power can be given to the user can be good, that doesn’t mean bare m can’t be the suffix could be ??? instead of _m. So, as this discussion has proceeded, I'm leaning toward the underbar, even though I wasn't used to. That way, we solve the need for the separate namespace without creating a separate namespace mechanism. I'd say that new builtins after BigInt all have the same preceding underbar.

DE: I’m OK with that possibility as well.

CM: orthogonal to that discussion: simply have the lexical analysis scan a literal until it encounters a non-numeric character, then treat whatever follows as the suffix; some use cases might not care about hexadecimal so they could have suffixes beginning with A-F with no problem.

DE: It sounds like you're proposing the thing I was discussing before, which is that the "m" would be looked at in a lexical scope. That would make it such that BigInt can't use the optimization where the compiler can map it.

CM: this is unrelated to the scoping question, we are talking about lexical analysis of numbers.

DE: So, I would be fine with that alternative. I'm worried it would be harder for people to parse. Maybe we could ban "e" just in decimal literals. This is the first time I've heard of "p", so I don't know in which situations it is used.

CM: I don’t know that I agree that the complexity of this proposal carries its own weight, but the question of lexical analysis of a broader range of suffixes seems like a problem we can solve.

MF: I don't think this is worth it, especially with all the caveats and given tagged templates exist for exactly this sort of thing. I don't think it brings much additional value, besides static checks you can do on it. Tagged templates solve polyfillability, since it is all in userspace. If people want analyzability on it they could have their editor check for tagged templates or something like this or trying to use different namespaces for naming of the suffix, I just don't think it's worth it, especially given how expensive I see syntax being.

DE: Do you recommend for bigdecimal, we use a tagged template literal? That would be different from BigInt

MF: Yes.

DE: What do others think?

KG: I agree with MF.

WH: I wouldn't want to use tagged template literals for that.

MF: can you explain?

WH: You asked what others think. Let’s not dwell on that and continue with the queue first — we only have a couple minutes left.

YSV: How significant is the user need for this level of configurability and generality? It's clear that there are a couple forms it can take. If you could hypothetically use any character, how frequently can this be used? I see that this solves a problem with decimal literals, but I can see how this wouldn't have much uptick, and then we end up specifying something that doesn't end up being used much. How frequently would this be used? I see the advantage for decimal, but I have a hard time justifying the user level customization. I can see for react or the dollar sign as a use case.

DE: I don’t have to add any further as you seem to understand the use case here. The dollar sign is about a literal of the decimal type. You can do that with a tagged template literal, etc. WH's proposal from a while ago used a suffix I believe. MM challenged me to find something that generalizes to the whole language so that is the exercise I’m doing here. There are 4 things we could do: one is to switch to tagged template literals; one is to not add decimal; one is to do one of the proposals I presented on; and one is to special-case the "d" suffix to build in decimal only, like we did for BigInt. I think the decimal itself would be very very useful

WH: A couple quick observations: Excluding a bunch of different letters `a`, `b`, `c`, `d`, `e`, `f`, `o`, `p`, `x` bothers me because it makes prefixes irregular. Earlier in this discussion folks stated that using a `_` can fix it. How?

DE: I don’t know who made the claim. There would be problems even with an underscore.

WH: Second observation: I do very much like the separate namespace. For example, a good use case of this would be representing complex numbers, `3+4i` shouldn't conflict with an index variable `i`. I think of the `i` in the number more as syntax than a variable name, just like I don’t think of the `e` in `3e-4` as a variable.

## Need another stage 3 reviewer for iterator helpers

Presenter: Michael Ficarra (MF)

No slides

MF: Need another review for iterator helpers, so we can be prepared for advancement at the next meeting. Would anyone like to volunteer for review? RGN is the one existing reviewer.

GCL: The proposal is on the larger side right now, but it might get smaller.

YSV: We’ve been pretty involved in the proposal, but if that wouldn’t be a problem, I can propose JTO or myself for review.

MF: If I had RGN and either you or JTO, that would be good for me.

MM: Why would that be a problem?

YSV: Because we've been heavily involved in writing the spec text.

MM: I don't think that's a problem.

JHD: in general authors reviewing what they wrote can be a problem but here it is fine.

### Conclusion/Resolution

YSV/JTO will review

## Withdrawing TypedArray stride

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-typedarray-stride)

SYG: The feedback from engines is that this would slow down the index operator, and for the more complex use cases, the proposal was not expressive enough, in particular things doing with graphics programming. Beyond just reading RGBA channels, this itself wasn’t good enough for other graphics use cases like reading more complex structs. So, with all of that, I would like to withdraw this proposal. That's not to close off future research, but it seems that the general space needs something more expressive, like struct overlays.

AKI: You already answered my question, is this still a problem to be solved? The answer seems to be yes.

SYG: Archive the proposal repo?

AKI: Archive and remove it from the proposals listing.

JHD: Already got that.

### Conclusion/Resolution

Proposal will be withdrawn

## F.p.bind with infinite-length functions

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/issues/2170)

KG: (presents PR)

JRL: I’m not an implementer but I should caution with it, objects have a hidden class (?). I'm curious if, if we set length to be Infinity, which is a float, if this will have ramifications.

KG: I have no idea! Do any implementers have any concerns about this?

GCL: I see an optimization if you're accessing the length property.

SYG: Checking, but can’t answer in 5mins

YSV: I will check for SpiderMonkey

KM: For JSC, with high probability, since this is a named index property, we don't do any int32 optimizations here. You might get arithmetic optimizations here. I don’t think anybody is using length for anything here. THis is all based on the lexical code, length is nice for users but has no real meaning for engine.

MM: I saw the spec text again, I withdraw that question. I'm in favor of the correct answer being Infinity.

KG: This does not in fact require a change in JSC, because they changed this recently, apparently. Someone from JSC expressed a slight preference to clamp to Number.MAX_SAFE_INTEGER. I don't like that though, mostly because SM/V8 use infinity.

MM: What would the spec text say, what happens for other problematic values besides infinity

KG: Other problematic values are wrapped up by toInteger. That's a fascinating operation that given anything anything that coerces to a number (ToInteger) without side effects; it returns 0 for NaN and -0 (?); the nearest integral number rounding toward 0 for any finite number; and returns the respective infinity for infinities. So the other weird values are already handled by toInteger.
That is the only case you need to deal with here (showing up spec patch).

MM: I have mild distaste for adding another branch to the spec. I was hoping that you had phrasing in mind that would not add a separate condition.

KG: Unfortunately no; everywhere toInteger is used, it must check for infinity. I have renamed it to ToIntegerOrInfinity to take up on that case.

MM: Ok, yes

KG: For what it's worth, it's not going to lead to a branch in most implementations.

AKI: Nothing left on the queue.

KG: I would like to ask for a consensus for infinity as a correct answer to this case.

### Conclusion

Consensus. We will use Infinity.

## Date arithmetic

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1gePsNmlP2u0pYXm0LWO3d7eM4Q_y5Ozx0qXN1zWOv58/)

KG: (presents slides)

SYG: Yes

WH: What do implementations do?

KG: Implementations implement this operation using floating point, with the exception of small engines like QuickJS.

WH: You mentioned that they do in this particular date computation. Do they do that for all of the affected date computations?

KG: I glanced through the code, and I think yes but I don’t know

YSV: I know we use IEEE arithmetic, I don’t know for others, for SM, we use ieee everywhere.

SFC: What was the engine that uses int64 math?

KG: QuickJS. Fabrice did his date arithmetic on 64-bits integer

PFC: If you had to pick an option for Temporal, without regard to existing implementations, would you settle on using IEEE arithmetic? Or use BigInt?

KG: I would say Int64. That way you can be precise without paying a cost. Aesthetically Int64 won’t give you errors for the things you care about.

PFC: OK, thanks!

KG: So that's consensus on floating-point semantics.

KG: Bonus round: NaN. If people want to reject because we need more time for review, they can. It is kind of important as it holds off the PR with Date arithmetic in the spec.

KG: (presents slides, starting “Bonus round: NaN”) Asking for SM semantics.

JHD: +1 for either "check none" or "check all", preference for "check all".
V8 seems to do something bizarre to me. Either JSC or SM behavior seems fine.

WH: +1

DE: I don't think we should get consensus on things that were added the same day.

JHD: Our policy is that anything can be added at any time, but proposals can be prevented from advancement.

DE: I'm invoking that.

KG: The spec text is incoherent.

DE: The incoherency situation, you are making a normative change.

KG: That is true.

JHD 10 days deadline doesn’t apply to normative changes...

DE: I know that our deadline says case-by-case, so I’m invoking the clause that says it should be there.

### Conclusion

Consensus on part 1: IEEE arithmetic in Dates

No consensus on part 2 on grounds of late addition to the agenda.

## Move outreach groups to the TC39 org, like incubator calls?

Presenter: Daniel Ehrenberg (DE)

- [outreach groups](https://github.com/js-outreach/js-outreach-groups/)
- [slides](https://docs.google.com/presentation/d/1Gqz6Y7ymNhWzKAn09R96xx1nYV6HwiaJVMl5ral0sK0/edit)

DE: (presents slide)

WH: What is the IP policy for these?

DE: These don't produce IP. People talk about ideas, but if people produce IP, they do so in the context of normal proposals. Somebody making a PR on GitHub against the proposal and that would be when they contribute IP, it goes through our normal GitHub process. At that point, you sign the non-contributor IP agreement.

JHD: part of the concern around these when brought up. Incubator calls in general, there might be binding decisions that might be done, we know it’s not the case with outreach groups, how would we resolve that?

DE: It’s hard for me to understand how this would happen. Even if a delegate raises a concern, there is no timing constraint to make a decision. If you have a champion group meeting or 8 people talking out of committee, they wouldn’t have any weight there. In incubator group meetings, attendees don’t have any right to make decisions; champion groups as well.

JHD: What I am lightly concerned about is the folks who chose to participate, having their expectations set correctly. The audiences of these people, some of whom have large audiences, not getting a mistaken impression of the effect the outreach groups have.

DE: For the outreach groups, I've written a doc that sets the ground rules, at https://github.com/tc39/js-outreach-groups/blob/master/README.md

JHD: that seems like a good answer for the participants, I have seen people in these groups put something in their twitter or linkedin bios etc. claiming authority linked to TC39 because they are in outreach groups. I have also seen uninformed people assume that these people have status. People have asked questions in IRC about outreach groups and how to obtain this “power”. Obviously it's easy to correct cases that are brought up, but there is even already an overinflated sense of power that participation in these groups does not concur. There is already a mistaken/overinflated sense of power for participation in these groups. I’m not saying we shouldn’t transfer them in, just bringing it up.

DE: I made it clear in the outreach group readme that anyone can write an email to be included in this. Ultimately, I think there are lots of misunderstandings that people have. Even members of TC39 talking informally can create the wrong impression. Members of TC39 already say harmful things such as saying that a decision has been made when it hasn’t been. It’s not unique to outreach groups, it is already an issue.

AKI: I love this idea. I'm a supporter of the outreach groups. I support bringing them into TC39 since they are part of what we do. People on the internet trumpeting they have power that they don't have is a non-issue. Yes there is a possibility someone is going to make our job harder because they said they represent TC39 but actually do not. But this is not a huge issue and it is manageable as it does not happen often. I think that getting the information we get from educators and framework authors, and disseminating authors, and asking what you want, is so valuable, and I'm a huge supporter of bringing these into the TC39 org. I don't think there's an issue with the appearance of decision-making or authority where there is none.

LEO: I have one followup with DE after it. On IP: use LICENSE file on any new repos in the org. It's been a consistent and simple solution among Open Source projects on github. Add-in to license file. It is simple, I’ll follow up.

DE: I don't think a LICENSE file is sufficient for TC39's work. That covers copyright of notes. But it doesn't cover patent claims. That is why they should sign the non-contributor form that should be mandatory. If the person uploading the notes to the repo would be implicitly contributing those notes according to the license--I don’t think this makes sense for this repo, since they didn’t even have copyright over the utterances in the meeting in the first place.

LEO: Ok, I can follow up.

YSV: Let's wrap up. DE wants to move these calls into the TC39 org. What is the committee's feeling on that?

MM(?): Positive.

### Conclusion

The outreach calls will be moved into the TC39 org.
