# July 26, 2017 Meeting Notes
-----

Adam Klein (AK), Allen Wirfs-Brock (AWB), Andrew Burgese (ABE), Andrew Paprocki (API), Ben Newman (BN), Benoit Girard (BGD), Bradley Farias (BFS), Brendan Eich (BE), Brian Terlson (BT), Caridy Patiño (CP), Chip Morningstar (CM), Chris Hyle (CHE), Claude Pache (CPE), Dave Herman (DH), David Teller (DTL), David Turissini (DTI), Dean Tribble (DT), Diego Ferreiro Val (DFV), Domenic Denicola (DD), Gabriel Isenberg (GI), István Sebestyén (IS), Jeff Morrison (JM), John-David Dalton (JDD), Jonathan Keslin (JKN), Jordan Harband (JHD), Jorge Lopez (JEL), Kent C. Dodds (KCD), Kevin Gibbons (KG), Kevin Venkiteswaran (KVN), Leo Balter (LEO), Maggie Pint (MPT), Mariko Kosaka (MKA), Mark S. Miller (MM), Michael Ficarra (MF), Michael Saboff (MLS), Nathan Hammond (NHD), Patrick Soquet (PST), Peter Hoddie (PHE), Pierre-Marie Dartus (PMD), Rex Jaeschke (RJE), Rob Palmer (RPR), Ron Buckton (RBN), Sam Goto (SGO), Sebastian Markbåge (SM), Shu-yu Guo (SYG), Vladan Djeric (VDC), Waldemar Horwat (WH), Yehuda Katz (YK),

-----

## 13.iii.c Binary AST

(Shu-yu Guo, SYG)

- [proposal](https://github.com/syg/ecmascript-binary-ast/)
- [slides](https://docs.google.com/presentation/d/10mEfgEUmazFJks_NwXSTBK9-g-W7vljvRB0JA2spU38/edit#slide=id.p)

SYG: Parsing JavaScript is slow, for one, because we have to calculate where variable declarations are, and declarations may come after usages, which requires parsing up to the whole file. The semantics of JavaScript require reading the whole file for triggering syntax errors as well.

SYG: One workaround optimization in JS engines is preparsing/lazy parsing. Parse all JS code but only allocate ASTs for some of it. This is a bet--preparsing can make things slower because it parses twice, if the code does end up being called.

YK: "Lazy parsing is slow" has become a meme because developers perceive it to be slow; they think that avoiding it all the time is better, though that's not really true either--it could make their library faster locally, but then if it's used everywhere, including on dead code, it can make loading slower.

SYG: There's just no perfect solution; the problem is especially bad on mobile.

AWB: These are multiple JS files, right? And not all have to be compiled at the same time

??: The big sites typically only load the code they need (DE: I don't think this is always the case.)

DT: According to my experiments, 102 files are loaded between the time you load the page adn when you get started. Even though it's split, it's needed by the time the application becomes interactive.

??: Files are split for caching

SYG: Sites are getting bigger, I assume they'll keep getting bigger, and this proposal attempts to address that. Some say, ship bytecode. But bytecode is bad because it's actually more expressive than the AST. It would bifurcate the language, and it is too ambitious politically

BE: As with Java, you don't just get bifurcation by shipping bytecode; you get dependencies between source code and bytecode, so you can't change one without worrying about the other.

SYG: This is just an over-the-wire format, to be output by build tools, and decoded by implementations (browsers). It should just be an alternate encoding of syntax. It's not supposed to express any semantic changes, just give monotonically better performance.

WH: Is the intent that all ES programs have the same semantics?

SYG: I am proposing a few small behavioral changes, but otherwise it should be the same; I will go into more details soon.

MM: A goal is that any JS will be translatable into this, and vice-versa (any binary AST can be turned into JS code).

SYG: Though comments, whitespace are not represented. We did an early prototype in SpiderMonkey which replaces AST generation but not bytecode generation

DT: The result was 5% smaller gzipped

SYG: Parsing+AST construction was 3x faster on the entire file, and 8x faster skipping inner functions

MLS: So the binary AST isn't saving much network time.

MLS: Why generate AST nodes for unused code?

BE: Can't solve halting problem, but binary AST might enable some slightly better dead code elimination.

DH: Short answer: lazy parsing doesn't generate an AST. So if you're doing lazy parsing to skip functions, you won't be generating a binary AST either.

SYG: This is just a baseline benchmark, showing a significant (3x) improvement in parsing plus AST construction, and a modest improvement in gzip'd code size.

AWB: The performance slide is unconvincing; it's unknown what fraction of the running time was sped up by 3x.

MLS: Trust me.

AK: 3x is exciting enough to warrant our attention. A 10% improvement would not.

YK: Agree that these parsing perf improvements are exciting.

VD: This would be a huge win for Facebook.

MP: Is there precedent for this in any other scripting language?

SYG: Not that I know of. JS may be in a unique position because no other scripting language sends so much data over the wire.

DH: Other languages don't tend to have multiple implementations, so they don't have to standardize something like a binary AST. They either use source code or bytecode.

MP: Will most developers need to know about binary ASTs?

SYG: No, it will be an optimization for tools like minifiers.

SYG: Not looking to implement any new concepts to the language itself.

SYG: ...continuing presentation... ("What Tree Grammar?" slide)

BN: These ASTs seem like a better starting point than the formal grammar

MF: There is an implicit structure in the grammar

AWB: But the grammar was not defined with that in mind

BN: These parsing projects have already had to make things more concrete, which has been non-trivial

BE: There is some research in procedurally generating ASTs from data; it would really be nice to procedurally generate the grammar from the other grammar, rather than having two.

- http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.12.151
- https://www.microsoft.com/en-us/research/publication/jszap-compressing-javascript-code/

SYG: It's unclear to me whether we could really specify such a *transform* practically; it sounds hard to specify and hard to maintain.

BFS: We're just talking about the structure, right?

SYG: Right

WH:

- How would you deal with cover grammars?
- There is a lot of churn in the grammar, with lots of proposals that change the language syntax; how do you deal with that?

SYG: I don't think we'll need to represent the cover grammar; we'll represent the result instead.

WH: Yeah, that's the right approach, but the cover grammar makes it harder to use the grammar from the spec. So, if you use another grammar, how do you keep up with the churn?

SYG: Well, the cover grammar churn would go away. But with other changes, I don't have a good answer with that.

DD: In new proposals, include both sections.

SYG: It's extra work; we don't put the onus on proposal authors to prove equivalence to something

KG: You had something in the proposal about exemplars, right? For example, we're introducing a proposal to make a binding in a catch node which makes the binding optional. That's a change. Expressing that would be handled by exemplars, right?

SYG: There is a slide about this later.

BFS: The burden is on the tools to produce valid ASTs.

SYG: The Shape folks have worked to ensure that there are fewer invalid ASTs expressible in their type, compared to Babylon. OTOH, Babel is based on a de-facto AST standard which is widely used by JS code, but it's not as much thought out.

MM: Have you thought about representing source maps?

SYG: That's a can of worms that I don't want to include in this proposal.

CM: Is ease of AST transformation a design goal for binary ASTs?

KG: No, Comments are important for AST transformation, but are discarded from the binary AST.

CM: OK, but it would be nice if there wasn't a huge impedance mismatch between the binary AST and an AST for transforms.

WH: (Asking about "Encoding AST is insufficient to speed up frontends" slide): Why is it insufficient? What performance gain do you get if you just do encoding ASTs?

SYG: 3x, but we'd like to do better by going beyond encoding ASTs.

YK: Is it possible to encode a syntax error in the binary AST?

SYG: I'll get into errors later.

BFS: It's possible to have an AST format that forbids certain early errors / well-formedness errors by construction.

AWB: Many well-formedness checks are not specified at the level of the exact errors you'll get (if there are multiple early errors in a file, the spec doesn't say which one you'll get), just that there will be early well-formedness errors.

BFS: You could have a binary AST with a `with` statement in it, which is not an error according to the AST format, but it's an early (parsing) error in strict mode.

YK: The binary AST should say what the root parsing goal is (Script or Module).

SYG: If the spec says you can defer throwing well-formedness errors, that enables lazy parsing. That's why we're talking about deferring those errors.

DH: Example:

```js
function foo() {
    function bar() {
        break WAT:
    }
}
foo();
```

This kind of error (break to nonexistent label) will not necessarily be forbidden by all build tools, so the binary AST must accept the possibility of receiving a program with errors like this, and the error won't be raised until the offending code is actually parsed.

SYG: Imagine wrapping the body of every function with a direct eval (in sloppy mode). That would be roughly equivalent in terms of deferring early parsing errors.

AWB: This new format introduces a new attack surface and opportunities for divergence.

MP: As a library maintainer, this proposal gives me some fear, because errors from the binary AST are less debuggable than errors from source code.

AK: Transpilers and faulty compilers have similar consequences for debuggability.

MP: And that's a bad experience for programmers too.

BFS: ASTs can have a reduced number of early errors compared to source code.

SYG: ...continuing presentation... ("How to Encode Set of Binding Names?" slide)

WH: What if you're inside a `with` statement? Then you may not know which `x` you're referring to.

SYG: I'm hoping to make easier-to-statically-analyze usages fast, and tolerate `with` with fewer performance benefits. Also, you always know as you're parsing whether you're inside a `with`, so `with` can never be in the future of your token stream (unlike a `var` declaration).

MF: given we have the information about presence of direct call to eval and with statement, why would we preserve identifier names?

SYG: Going to keep encoding identifiers, since not sure if variable reference analysis will be perfect.

MF: I will fight against that at a later stage.

AWB: Isn't this tree analysis orthogonal to this proposal?

SYG: I think the analysis needs to land in tandem to give the performance benefits of binary ASTs.

AK: Encoding these analysis results gives a lot of the win of this proposal, so the results don't have to be calculated later.

AWB: It would be nice to use your binary-AST-encoded information to guide the parse.

SYG: The dream vision is to generate code in a single forward pass, though this may not be possible.

DT: You could go even further with the binary AST representation so that it's very easy to generate or execute code efficiently (at the expense of human readability).

SYG: So, the annotations are just assertions about what will come later. They just be verified, and they are inherently redundant, rather than either hints or, on the other hand, sources of truth. Deferred just like well-formedness checks.

WH: Does the grammar represent the components of regular expression literals as parsed AST nodes, or just preserve them as strings?

SYG: These are early errors now, so the tree grammar should represent them as well.

??: Does the binary AST encode whitespace, comments, etc?

SYG: You'll lose information that's not semantically relevant. So it will not give you a complete source round-trip.

YK: You'll have a sourcemap-like thing.

SYG: Like a more advanced minifier.

DH: We'll need a format for annotating a sourcemap, at some point, right?

BFS: There are out-of-band ways to do that (YK: such as HTTP headers).

YK: There may be benefits to thinking about the source map format at the same time as the AST format. Traditional source maps are text-to-text mappings (and the binary AST isn't text with lines and columns).

MLS: Concerned about effort to validate the AST, to protect the engine against malformed AST data. How much work is needed to validate the AST?

SYG: I'm going to work with all the engines to design the binary AST format. Details have not been designed yet.

SYG: ...continuing presentation... ("Versioning" slide)

JHD: Would there be any possibility of providing an AST fallback? Different ASTs for browsers that understand different formats?

SYG: Seems like that would require browser/HTML integration.

DTL: You could possibly use the Accept HTTP header, though that's outside ECMAScript.

WH: Clarifying that `Function.prototype.toString` returns `function (parameters) { [sourceless code] }` instead of `[sourceless code]`.

SYG: Yes, though probably not with parameters, since `[native code]` function strings don't include that.

YK: I agree it's good for tools to be allowed to produce sourceless code, but ....

DH: Did you talk about constant pools as a format?

SYG: Naively, we could put constant pools on top of the tree format

DH: The offline tooling could decide to put the original source code in the constant pools; this would not affect the parse time since it would be easy to jump over, just parse if you want it. This way, you'd have as a few differences between what you could express as possible. It would be optional.

SYG: It runs the risk of making the over-the-wire size large

DH: But it's optional.

MM: I don't want Function.prototype.toString producing the right source to be *optional*. I'm OK with it producing different, decompiled source, but [sourceless code] seems insufficient. Some programs depend on the preservation of behavior.

SYG: From a spec's point of view, I don't want to specify a specific decompiler output.

MM: I'd prefer the toString output so that implementations would decompile, and follow the original Function.prototype.toString semantics.

MF: It gets really hairy to mention "evaluation"; better to say, matched by the same production.

MM: It's enough if you can convert source code back into the same binary AST format.

SYG: Same up to an isomorphism?

MM: Sure, for some definition of isomorphism.

WH: I'm concerned that this proposal collides badly with the `Function.prototype.toString` proposal from yesterday. Tightening it down to the same source representation (from the `Function.prototype.toString` proposal) is the opposite of what's proposed here. With this loosening (which I like better!); we should rescind the `Function.prototype.toString` proposal.

SYG: Looking for Stage 1 today. I invite all the implementors and tooling folks to collaborate on the details.

WH: I would like to see better qualification of whether this is a performance win. This increases the attack surface, etc., so decoding it is nontrivial. How fast is it to validate the AST vs. validate the source ECMAScript?

SYG: We'll build it, use normal security practices, fuzzers, etc. It sounds like you want to see a prototype decoder, some evidence that we've done significant fuzzing, etc.

WH: Yes

AWB: I don't have a problem with this at Stage 1, but not obvious that it's ECMA-262 standards-track stuff.

BE: A wire format has to be standardized

AWB: Maybe not part of ECMA-262. It really needs to be built and proven, not prematurely standardized.

DH: There's actually a remarkable amount of homework done, which is reasonable with this big scope. I think this is the right amount of work for Stage 1, but it's not Stage 2

SYG: I think it would be very bad if this was not standards track, and somebody just did it.

MP: You could put it in a different standard; Sourcemaps and HTML are different

SYG: This calls for some semantic changes to handling of early errors in ECMA-262 (for example).

DD: The fact that new proposals need to provice integration into the binary grammar is a big reason for pursuing in this committee.

MLS: The speed comparison was in Firefox, right? I'd like to see performance on other browsers. In terms of, where we are at today in parsing performance--we can see in one browser that there's a 3-8x improvement on one browser. This is a short-term solution--it'll give us 3 years in Moore's law, but what do you do next? This is just a short-term solution. I imagine it will take significant implementation effort

YK: Developers are sincerely trying to save time, not waste resources opened up by new optimizations.

AK: We've gotten feedback, e.g., from Facebook, that they want to ship a lot of code, only some of which will run, and for that to be fast. Unused code is a thing that happens.

SM: The reason we're moving to shipping more code is because we want to make running things later faster, without an extra round-trip to the server.

SYG: There are these programmable cache APIs. These can help with warm load times. This proposal is oriented to cold load time.

MLS: How much of the top 100 websites need this? Will they go through the work to set up the tooling?

VD: I looked at a top sampling from Alexa. Web developers are building less rich applications on the web because of the performance comparison with native.

SGO: We should be asking how many *users* would benefit, not (just) how many developers or websites.

DH: When tooling like Webpack and Babel begins to explore binary ASTs, the benefits will reach many more users.

MP: This is going to explode out through tooling in a way that may be difficult for debugging. Reading a binary AST may be much more difficult than reading Babel-compiled code.

DFV: We should have a strategic plan for where this lands us in ~3 years. Is there any alternative strategic plan that could prevent this proposal from being necessary?

DT: Whenever something like this becomes available, we gain time that would otherwise have had to wait for Moore's Law.

MLS: This proposal is not "compartmentalized" in the sense of CM's vision talk. Web servers will need to support both source and AST versions of everything, so it increases complexity. In the slide about compatibility: we don't do features in lockstep. There will be a difficult time for web applications because they will not have a common platform, and will have to use a lowest common denominator, taking into account older browsers for a while. You can ship polyfills, but shipping an AST presupposes features on certain browsers. So, we're creating a world which will be difficult for web applications and browsers to support on the web.

DTL: Lots of websites have things like Facebook like buttons; even if just large applications like that upgraded, that would benefit all users. The part of this proposal that's about standardizing the AST will definitely benefit developers. About browsers working in lockstep, this is a problem we already have: if a browser doesn't support generators, it doesn't support generators. AST vs text file doesn't change anything to this problem.

MLS: You can provide a polyfill for source; you can't do that in AST. By contrast, you could send transpiled source code normally.

DTL: It's not clear what you mean; are you talking about shipping Babel output? Why would this not be possible for ASTs?

JHD: If I want my code to detect if generators are natively supported, I have to load additional code later. Maybe browsers could use headers to specify which AST nodes / binary AST capabilities they support. I think this concern is very important, but I think it's both a later stage concern and also largely outside of ECMAScript.

DTL: Yes, I think this can be solved outside of ECMAScript.

BFS: From the non-webbrowser side, Webpack has people looking at this on their performance team. Getting binary formats would be great. JSON parsing is a big source of overhead, as well.
This proposal would benefit tools, too; not purely for the web.

WH: With modules, would you just parse it, or would you also try to bind imported with exported identifiers across files?

SYG: It would continue to be literals, strings, etc. No extra semantic information.

WH: How much of the performance gain would you get from not doing this, and just caching the ASTs locally?

BE: This is about cold load.

WH: I know, but the question is still relevant, since you can factor code into modules, some of which rarely change.

DTL: We have recently implemented AST caching in Firefox, and right now the average parsing time improvement  for Firefox is 22ms across all participating websites in a recent survey.

LEO: We are just looking for Stage 1; these questions are great for exploration in reaching Stage 2

YK: Many people have raised feature detection; it seems like this actually makes feature detection *easier*


#### Conclusion/Resolution

- Stage 1: keep exploring the design space.


## 10.iv JavaScript - Composition and Compliance

(Dean Tribble)

TODO: insert slides


## 5. Report from the Ecma Secretariat

(István Sebestyén)

The report has been uploaded to the GitHub under Reflector as 2017 July Ecma Secretariat Report
It will be published also as a Ecma TC39 document.

IS: Approved TC39 standards at the last General Assembly

- ECMA-262 8th Edition: 9 for, none against
- ECMA-402  4th Edition... (went by too fast; see slides)


IS: Discussed TC39 Code of Conduct at the ExeComm and GA (General Assembly) meetings

IS: ECMAScript-related standards are the most popular on the ECMA web site.
- 12595 downloads of ECMA-262 PDF Jan 1 - May 31, 2017
- 6th Edition is about 3x more popular than the 7th Edition for HTML accesses

IS: ISO fast-track of standards from December:
- ECMA-404 JSON was fast-tracked to JTC1. Received one "no" vote, from Japan. Thus a FDIS ballot is necessary. TC39 prepared a Disposition of Comments and submitted to the JTC1 Secretariat. Voting is underway. 2/3 "yes" votes will be needed to pass.
- ECMA-414 ECMAScript Specification Suite was fast-tracked to JTC1. Received one "no" vote, from Japan. Thus a FDIS ballot is necessary. TC39 has to prepare a Disposition of Comments and submit it to the JTC1 Secretariat. Comments were editorial.

BE: is this just a process problem or did they have substantive technical objections?

IS: just process

RJE: spoke with them in Japan three weeks ago, explained yearly cadence and late comments going into next year bucket. Japanese rep agreeable but still group voted no.

WH: In the past the Japanese delegation has provided wonderful technical comments on past editions of ECMAScript.

BT: Need to figure out how to involve them in our new yearly release process so they can comment on our new versions.

IS: Even now they provided excellent editorial comments.

IS: ECMA-402 Ed 1 has been "identified" by the European Community in April 2014. ECMA-262, also being an ISO standard, did n't need identification. Identification is important for EC public procurement rules. Now the situation has changed, as ECMA-262 will not be an ISO standard anymore. So maintenance is needed. This process (which is politically motivated) will be more and more important in the future, as "identification" elevates an Ecma standard to the level of accepted international standards. This is today already important for "public procurements" but in the future probably for many other fields (e.g. recognized cybersecurity standards).

IS: A  group of universities,  research institutions, Ecma is working on a wearbles related study where we plan to bring in a chapter / section about about implementation of ECMAScript in wearables.

Various: (debate about profiles, which has been deleted from the slides)

IS: GA and ExeCom support a Code of Conduct policy, but it should be in line with other ECMA policies such as the By-Laws and Rules. They modified the policy and fed it back to TC39 for further discussions. Some TC39 members objected to some of the proposed changes. The next step is that TC39 volunteered to prepare a new Code of Conduct.

IS: ECMA GA approved formal policy templates for liaisons, one for technical relationships, and one for a general relationships. Some of these may affect TC39 in the future.


## 9.iv.b. Module/script pragma, for stage 2

(Dave Herman, Yehuda Katz)

- [proposal](https://github.com/tc39/proposal-modules-pragma)
- [slides](https://github.com/tc39/agendas/raw/master/2017/tc39-2017-05-use-module.pdf)

DH: Looking for Stage 2.

DH: Not proposing a definitive design for Node to decide how to parse module files. This "use module" pragma is a tool that Node could choose to use.

JHD: This creates a potential future back-compat concern, where code that has "use module" might function (quietly and incorrectly) in older browsers, but would suddenly be an early error in newer browsers (that supported "use module"). Have there been any consideration of `use module` or some other syntax error, so that code with that instruction would *never* run in a non-Module parse goal?

YK: You always have to comment `export {}` when you use it in TypeScript. Feels inexpressive by itself.

??: Works but not ideal.

API: Could you statically query feature support? Like C++ has preprocessor checks?

DH: In this case you know you're writing a module, and you just want to assert that the runtime is respecting that.

WH: I asked previously if "use module" would be allowed wherever "use strict" and other directives can be used inside functions, generators, arrow functions. Is that your intent?

DH: That's related to my "Open Issue" slide. I don't think it's important to allow these pragmas in nested contexts.

WH: The spec mandates those.

DH: Ignore the proposed spec. It should be deleted.

WH: The spec draft is incoherent and in major conflict with the presentation. Given the incoherence and conflict between the proposed spec and presentation, I am not comfortable with the spec meeting stage 2 entry requirements.

BFS: This is additive to and compatible with Node's plans.

DD: Chrome is not comfortable moving this to stage 2, as we believe it's a strength of the language that this determination is left up to the host to decide. Mandating something in ECMA-262 is not the right path here.

BE: can you explain why it's a strength that this information is not in-band?

DD: It provides a simpler mental model and less potential conflicts of meaning if there is one source of truth and no pragmas.

BE: How can I share code between Node and the browser?

DD: You might need to use a Node-specific mechanism like .mjs.

YK: Is that the position of everyone on the Chrome team?

AK: It is the position of those present here; not everyone on the Chrome team has an opinion on this.

DH: The idea that this problem can be solved in individual ecosystems doesn't address the concern of writing code that works across ecosystems.

DH: Ecosystems that only use modules (e.g. Ember) will not want to put "use module" at the top of all their modules.

DD: We don't believe "use module" is useful because `export {}` exists for the "assert I never end up in the wrong mode" case, and the web has out-of-band mechanisms like `<script type=module>`. We should not be adding new modes.

DH: This is not adding a new mode, just an assertion about the current mode.

BFS: The "use nomodule" pragma would be useful for bundlers that rely on Script semantics. Similarly, I would like `import "./common.js"` to fail if "use module" is present.

DD: Data about accidental script/module inclusion could persuade us that this is useful across environments. E.g., data on how often people ship code using `<script>` (without `type=module`) but used `export`/`import`, causing an error. Or vice-versa.

WH: All of the possible decisions about where to place the directives are wrong here. Should the directives be interpreted in function, arrow function, and generator headers (as "use strict" ones are) or not? We can't say we're going to decide later. If we ignore the directives, the function nesting of "use module" is a real problem because it's legal syntax (a string-valued expression statement) that will simply be ignored, leading to surprises. On the other hand, if we interpret the directives inside functions, then extracting and evaluating the source will misbehave.

MM: What happens with "use asm"?

DH: It was only allowed in functions.

??: It has no observable semantics.

AWB: Could make it an early error to put "use module" in a nested context, in environments that respect "use module" at the top level.

DH: The point of "use nomodule" is mainly to mark a function body as not having the Script parsing goal, as in Node where CJS modules are wrapped as a function body. Nobody in the Node community thinks of them as function bodies, just as CJS modules, so "use functionbody" is not a good solution; "use nomodule" is better.

AK: Don't want to have to tell different runtimes that you're writing a module in different ways. Also don't want to add something to the language that won't be used in 5 years.

DD: the fact that we're contemplating such a strange solution ("use nomodule"), to fit with Node's mental model, is a sign that this should be host-specific, not part of the JS spec.

YK: The `export {}` solution has been a fatal error, in terms of learnability and explainability.

DD: If the problem of accidentally loading a module as script is a problem that's not going away in 5 years, that would support this proposal.

JHD: What about unambiguous parsing? I remember an objection from DD that there might be a use case for modules that don't have any `import` or `export` declarations.

YK: You can tell that's true because, in Node today, there is no such thing as a Script, there is just CJS.

DH: Every new file you ever create starts out with no `import` or `export` declarations.

YK: The mental model you want to be in when writing modules is that you're always writing modules.

JHD: Is the objection to adding anything to the language that would be equivalent to `export {}`.

DH: I'm trying to offer a strictly better version of `export {}`. I would rather have a best practice that actually says what it means. I'm talking about the use case of writing portable code, which is not satisfied by each ecosystem solving the problem in a different way.

DD: I think `export {}` is fine for the purposes of asserting that you're in a module, because (absent data) I don't believe that is a high-priority use case. (Whereas, distinguishing between module and script is a high-priority use case, but should be solved in a host-dependent way, not using in-band information specified in Ecma-262.)

YK: You can make a tool that converts "use module" to `export {}`.

??: This also affects editors that need to know whether to interpret files as modules.

BFS: Node is not going to diverge from the browser on this topic. If "use module" is not supported by browsers, Node is not going to use "use module" either.

??: As soon as you say this is going to be host-specific behavior, hosts are going to shy away from it.

DD: I don't think this committee should make decisions by having hosts say "we won't do anything unless you standardize it across all hosts".

YK: The question is, "What is the disambiguation strategy?" Node and TypeScript could agree on this, and they need to.

BT: We want this committee to arrive at a happy interoperable place, which includes getting stakeholders to agree with each other.

??: TypeScript would be wary about using a mechanism that isn't specified by TC39.

YK: Note that package.json cannot be specified by TC39.



#### Conclusion/Resolution

- No change in stage of "use module"
- If this proposal is to advance, someone should collect data on how often on the web modules are loaded as scripts and vice-versa, and report back.


## 10.i Extremely Modular Distributed JavaScript

(Mark Miller)

TODO: insert slides



## 11.iii.a. BigInt for Stage 3

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-bigint)
- [slides](https://docs.google.com/presentation/d/1nhiT8QHrM0qt5cDtomAGPLEUfLhUYvHCVZMta1N1IcU/edit#slide=id.p)

JHD: What's the feeling about a more generic Integer type?

BE: That's not why we renamed it to BigInt.

DE: We considered an integrated type (Axel R's proposal) with a tower of numeric types.

BE: The real killer is implicitly losing precision.

DE: Regarding renaming Integer to BigInt: Number is serving its purpose well, and BigInt is purely additive.

JHD: Makes sense, as long as we've fully considered a more general Integer type.

BE: My hair was a different color when BigInt was first proposed for ECMAScript.

WH: We've fully considered a general numeric type over many years. No such thing is possible while remaining compatible. This is about the fourth time BigInt was studied in detail.

JHD: I missed the last two meetings. Give me intuition as to why.

WH: The crux of the problem is, what do you get when you add a double and an integer. None of the options works sensibly and compatibly.

CM: Is BigInt64Array a BigInt array or a big Int64Array?

DE: Elements are Int64, and when you read one out, you get a BigInt.

WH: I precipitated that change. It's so that you can later define a BigInt32Array, etc. without getting a name collision if you happen to like BigInts and want to settle on always using BigInts when talking to typed arrays in your application.

MM: What does `BigInt.prototype.toJSON.call(bigInt)` return?

DE: You can add a toJSON method if you want. Not required. `JSON.stringify` needs to check whether the `.toJSON` property exists and is callable.

CM: We can't just change JSON, since the API isn't versioned in the wild.

DE: This proposal leave the default in place, which is compatible with the JSON ecosystem. Adding a custom `.toJSON` method means opting into your own system, where you control both encoding and decoding.

MM: If you do override the `.toJSON` method, there is nothing you can have `.toJSON` return that will cause `JSON.toStringify` simply to output the digits of the number.

YK: (someone please fill this in who heard YK's comment about Ruby handling)

CM: It's weird that JSON syntax already supports arbitrary precision integers, and we can't serialize BitInt that way.

AWB: What if, when the value returned from `.toJSON` is a BigInt, `JSON.stringify` outputs the digits?

MM: Nice because that leaves your defaults in place, but still lets you output the digits without quotes if you want.

DD: Let's make a separate agenda item for modifications to toJSON.

DE: I will tweak the spec so that it throws if `.toJSON` returns a `BigInt`.

AWB: How thoroughly has the complete API been reviewed? Is there any complete API description?

DE: A complete API explainer description is linked from the agenda item: https://github.com/tc39/proposal-bigint

WH: I have reviewed the spec. I can't guarantee that there aren't small bugs in there, but it looked good to me. All of my concerns have been addressed.

MLS: It does look good, and I submitted a lot of feedback. WH and I reviewed it before the previous New York meeting.

WH, LEO: Can we advance this to Stage 3?


#### Conclusion/Resolution

- Stage 3 acceptance
- Reviewers: ??



## 13.ii.b. Consider changing Number.parseInt and Number.parseFloat

(Brendan Eich)

=> Consider changing `Number.parseInt` and `Number.parseFloat` to avoid converting `undefined`, `null`, and `NaN` to string, returning `NaN` for those three input values.

BE: Recall that `parseInt` contains an optional radix second parameter [2..36] (inclusive), such that `parseInt(x, r)` for any `x` ∈ {`null`, `undefined`, `NaN`} and `r > 23` will produce a number created by interpreting the characters of "null", etc. as digits! For example, `parseInt(null, 26) === 23` because `(23).toString(26) === "n"`.

KG: You might break shims that are testing for this behavior.

MM: If it's something we can get away with, let's do it.

WH: I agree.

JHD: In es6-shim, if `global.parseInt !== Number.parseInt`, replace it with `Number.parseInt`.

MM: So that shouldn't be broken by this change.


#### Conclusion/Resolution

- BE will prepare Stage 1 proposal to return `NaN` instead for `null`, `undefined`, and `NaN`.
