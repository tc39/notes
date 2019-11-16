# January 23, 2018 Meeting Notes
-----

Sebastian Markbåge (SM), Lin Clark (LCK), Waldemar Horwat (WH), Dean Tribble (DT), Chip Morningstar (CM), Brian Warner (BWR), Mark S. Miller (MM), Till Schneidereit (TST), Michael Saboff (MLS), JF Bastien (JFB), Mattijs Hoitink (MHK), Kyle Verrier (KVR), Brian Terlson (BT), Shu-yu Guo (SYG), Ron Buckton (RBN), Michael Ficarra (MF), Rex Jaeschke (RJE), Yehuda Katz (YK), Andrew Paprocki (API), Tab Atkins-Bittner (TAB), Kevin Gibbons (KG), Domenic Denicola (DD), Mariko Kosaka (MKA), Myles Borins (MBS), Peter Hoddie (PHE), Jordan Harband (JHD), Justin Fagnani (JFI), Caridy Patiño (CP), Zibi Braniecki (ZB), Daniel Ehrenberg (DE), Keith Cirkel (KCL), Justin Ridgewell (JRL), Mathias Bynens (MB), Patrick Soquet (PST), Nathan Hammond (NHD), Stephen Murphy (SMY), Adam Klein (AK), Sathya Gunasekaran (SGN), Gabriel Isenberg (GI), John Lenz (JLZ), Diego Ferreiro Val (DFV), Maggie Pint (MPT), Thomas Nattestad (TND), Isabelle Valet-Harper (IVH), Peter Jensen (PJ), Brad Nelson (BNN), Godfrey Chan (GCN), Sri Pillalamarri (SPI), Eric Holk (EHK), Reefath Rajali (RRI), Rebecca Turner (RTR), Natalie Silvanovich (NSH), Sam Mussell (SML), Sebastian McKenzie (SMK), Daniel Rosenwasser (DRR), Joyee Cheung (JCG), Rob Palmer (RPR), Sean Larkin (SLN)

Remote: Bradley Farias (BFS), Thomas Wood (TWD), Ben Newman (BN), Rick Waldron (RW), Valerie Young (VYG), David Turissini (DTI)

-----

## Welcome

RJE: Welcome

SGN: New member get-together at 5 PM on Tuesday, dinner Wednesday at 6:30 PM

BT: Use the #tc39-delegates IRC channel on Freenode, ask me for help


## Adoption of Agenda

(Rex Jaeschke)

https://github.com/tc39/agendas/blob/master/2018/01.md

RJE: (agenda construction?)

#### Conclusion/Resolution

- Adopted


## 5. Report from the Ecma Secretariat

RJE: Report of the Secretariat - István has the flu, won't attend.

RJE: I've been working behind the scenes with ECMA for membership issues. She's coming to the dinner, and I'll be meeting with her Thursday night clarifying things for the not-for-profit membership, and see if projects like Babel can be included. Also, a non-voting membership, like distinguished membership or Fellow; discussion seems quite positive.

RJE: Officers positions: we'll take a formal vote, unusual in TCs. Need to ascertain the voting members, will discuss tomorrow. Unless I got objection, it's my intent to have one motion for all three positions as a slate; if not we'll take them one-by-one. Should be straightforward to do tomorrow.

YK: Can I request we attempt to approve through unanimous consent and avoid a formal vote?

RJE: Sounds good.


## 7. ECMA-262 status updates

(Brian Terlson)

BT: Most critical is royalty-free opt-out period. I'll talk about what proposals make the cut. Shooting to start this period the first week of Feb if possible. What that means for you is you need to get your lawyers to examine the doc, and tell TC39 if you want to exercise your patents over part of the spec. Hopefully not - we're not sure what would happen, hasn't happened yet - but I'm sure your lawyers will love reading the spec.

YK: Nothing to do if we have no patents?

BT: Yes.

BT: Two new things - regex dotall flag and template literal. Reviewing regex unicode property escapes and lookbehind. Also looking for Stage 4 is Promise.finally(). I've also review rest spread.

BT: Big thing is async iteration, that will probably take me a while. I'm comfortable with it from a tech perspective. Are you looking for it to reach Stage 4 this meeting?

DD: Yeah, but I'm fine if it slips to Stage 4, whatever.

BT: I'd like to get it in 2018 if possible. Anyone else have a proposal not mentioned that they want on the 2018 train?

no hands for additional proposals that want to get on the 2018 train

DE: Did you say all 4 regex proposals? Dotall, unicode property escape, lookbehind, and named capture groups.

BT: Didn't see named capture groups yet. We'll discuss named-captures groups during the meeting

MF: Named capture groups not in the agenda.

BT: Ah, miss the train then I guess. Weird since it does have implementations.

BT: So nothing else for 2018. My work going forward is going to be finishing the normative PRs, I have editorial work to do. Once the changes stop coming in, I'm gonna do the major change of autolinking for syntax-directed operations. Major source of merge-conflict pain, so I've been putting it off til we stabilize. Probably spending like 5 days to make a PDF.

BT: looking for ways to turn a website into a PDF

DD: We have a script we use for HTML, I can show it to you.

BT: Would love to try it.

BT: The royalty-free opt-out period I'm shooting for the beginning of Feb. I believe that's a 60-day period within which you can opt-out. I won't make any non-editorial changes from then. I'll also make a branch for this; that's what you'll want your lawyers to look at.

#### Conclusion/Resolution

- RF opt-out begins in Feb. (Brian Terlson to fill exact date)


## ECMA-402 status updates

(Caridy Patiño)

CP: We finally merged Intl.PluralRules, this is first time a new type of Intl object is added since 2013 (first edition). Aside from that, a bunch of editorial changes. Two things to notice - for two years we've been trying to remove usage of dynamic fields from objects in the editorial text, we finally removed it. Second, we're trying to specify things that were unspecified, we've covered a lot of ground here. Not much pending for the Feb cut. Getting some traction for another meeting in another month.

DE: We've been having ecma 402 meetings

ZB: Summary is we have good traction on a call, people not in this meeting. We didn't expect that much attendance, almost 20 people on the last 402 call a week ago. It's pretty useful for us, we were able to review the proposals for Stage 3/4, and we'll present in our timebox.

DE: This is the timebox for that.

- [slides](https://docs.google.com/presentation/d/1JlVOkn21jyF4YlsxBeisfvyYKzf5AZYNUzrUeZD12CQ/edit#slide=id.g2e1d914bb7_0_47)

ZB: Started a 2-hour meeting, open to invited experts, got more attendees than expected, awesome. First meeting in Dec, did current workings of 402, in this meeting we reviewed proposals going to Stage 3/4. If you want to join, contact Ben and he'll put you on the list.

ZB: Minor additions like hourCycle to the option bag.

ZB: Reviewing Stage 4 features, we had reps from all major browser engines, was useful to verify that we have no reason to worry about non-impl. There has been convos with Edge about timing, they're locked on stable features in ICU than we are, but that's all a 3-4 month period we think.

ZB: So pluralRules, hourCycle, and formatToParts are all good to go.

ZB: Stage 3, Segmenter, Locale, RelativeTimeFormat, Listformat, we got support from all attendees on the call to promote them to next stage.

#### Conclusion/Resolution

- WG will propose Intl.Locale, Intl.RelativeTimeFormat and Intl.ListFormat for Stage 3 later at this meeting


## 9. ECMA-404 status updates

(Chip Morningstar)

CM: Summary - no news is good news. What they call "fast track" thru ISO has happened, 404 is now ISO-21778, that's it.

#### Conclusion/Resolution

- ECMA-404 is an ISO standard (ISO-21778)

## 10. ECMA414 status updates

(Brian Terlson)

BT: No updates. The suite is ready.

RJE: Seems like we don't need this for future updates

#### Conclusion/Resolution

- No updates


## 11. Test262 status updates

BT: am I really on the hook for this?

BT: 262 is going excellently. Vague improvements since the last meeting - I don't know if I can actually update this meeting. I'll get some info, present tomorrow.

RW: (added post meeting)

- Actively maintained, has good Ecma member organization support
- Some stats...
  - 29765 test files
  - Contributors
    - 2014: 16
    - 2015: 22
    - 2016: 35
    - 2017: 47
  - Contributors with more than 1 commit...
    - 2014: 8
    - 2015: 13
    - 2016: 19
    - 2017: 31
  - Commits
    - 2014: 78
    - 2015: 415
    - 2016: 439
    - 2017: 726
  - Additions/Deletions:
    - 2014: 676,247 ++ 2,986,311 --
    - 2015: 146,134 ++ 102,655 --
    - 2016: 496,517 ++ 43,504 --
    - 2017: 654,330 ++ 244,488 --

- Coverage for...
  - SharedArrayBuffer and Atomics
  - BigInt
  - Improvements for Type Coercion
  - String.prototype.trimEnd, trimStart
  - Promise.prototype.finally
  - Array.prototype.flatten & flatMap
  - async generators and async iteration
    - async function *
    - for await of
  - class fields (private and public)
  - new RegExp features
  - Unicode test maintenance
  - new Intl feature
  - Object Rest & Spread

- Improvements for parsers:
  - support negative tests that are more explicit about where and when they occur:
    - parse: occurs while parsing the source text.
    - early: occurs prior to evaluation.
    - resolution: occurs during module resolution.
    - runtime: occurs during evaluation.
  - previously this was just "early" and "runtime"
- test-harness code is now also tested

- Community users, non-browser JS engines and tools:
  - Acorn
  - Babel
  - Babylon
  - Brackets
  - Caja
  - cherow
  - Code.org JS interpreter
  - DMDScript
  - duktape
  - Esprima
  - Flow
  - JerryScript
  - Jint
  - JSHint
  - Moddable
  - Open SE Bench
  - PhantomJS
  - Prepack
  - rjs (JavaScript on Rust)
  - SES
  - Shift
  - spdy web compiler
  - TypeScript
  - Three.js
  - UglifyJS
  - zeparser
  (are testing against Test262 or some part of Test262)

- New tools to make test consumption easier:
  - Test262-stream
    - Produces a stream of "compiled" test sources, with both strict and non-strict
      versions (as needed) of each test; ready to be executed in a given runtime or engine
      - bootstrapped with harness, assert and helper code (as needed)
  - Test262-features
    - In progress!
    - Detect and validate features tag
    - autofix features tag lists
    - automate upkeep of features tag

- In 2018
  - Continue growing coverage for old and new features
  - Experiment with "upstream sync" and "2-way sync" of
    engine implementor's feature tests
    - implementor contributed...
      - feature implementation tests
      - stress tests
      - regression tests

#### Conclusion/Resolution

- Cruising right along!


## 13.i.a. TC39 Logo

(Shu-yu Guo)

- [repo](https://github.com/tc39/tc39-logo)

SGO: Has everyone seen the logo on the repo? That's the ECMA orange (it looks like JS yellow on the projector). Is there any objection to using this in communications/repo/etc?

(No Objections)

SGO: If people want to use it, Illustrator, PDF, SVG, all there.

DD: License?

SGO: Public domain?

BT: Better as CC0

YK: Are we okay with it being public domain? If people use this to impersonate us...

BT: That's Trademark, not copyright.

YK: People generally intend CC0 to also mean they won't enforce the trademark.

DD: Don't make that assumption...

BT: ECMA will enforce the trademark.

DD: I support putting logo contents as CC0

#### Conclusion/Resolution

- Consensus on logo: yes! will adopt.
- Trademark/license to decide later, RJE to take as action item


## 13.ii.a. Making eshost workflow more accessible with jsvu

(Mathias Bynens)

 - [eshost-cli](https://github.com/bterlson/eshost-cli)
 - [jsvu](https://github.com/GoogleChromeLabs/jsvu)

MB: (Presenting)

MB: Wanted to start with something small and talk about ESHost... talking about command-line utilities. Useful for people on the community. Makes it really easy to run a piece of JS code in various engines from the command line. On a system with Node and npm, you just install ESHost-CLI (demonstrates). It runs a given code snippet in all the engines it knows about. For it to know about these engines you have to tell it "I have a V8 binary here, Chakra there...". You do have to set up build systems, compile from source, repeat every few weeks to get up-to-date engine builds. This was painful unless you're already working on these. So now I want to talk about a new tool to set these up locally rather than doing the whole compile dance. It's called JSVU (version updater) and it's also a command-line utility. On a system with Node and npm, you just install jsvu globally, and then run it (demonstrates). The first time it asks for confirmation on which engines + arch, then it does its thing, figures out the latest version of each engine, downloads and installs the binaries, and that's it. So you only have to remember a single command, jsvu, and run it whenever you want to auto-update all those engines to the latest version. Then you can directly use the JS engines from the command line.

MB: Specifically for eshost-cli, you just need to install eshost and tell it where the engines are, which for jsvu is all in the same directory, and that's it. Immensely useful for compat testing. Any time you find yourself in need of a JS engine binary you can use jsvu to easily automate the install and get a recent version. I'm interested in other use-cases, too, like web assembly waterfall — in that project, a lot of engineering time is spent maintaining the build infrastructure for all JS engines. This can be avoided by just using jsvu instead of building it all from source. If you use this, let me know what you use it for. And shoutout to eshost, it's a very nice tool.

YK: At minimum, a use-case in my space is having JS code that you expect to not need browser code (I write a library like this), this is a quick way to ensure it runs on all the engines.

MB: Note that there's still some difference in what REPLs offer, e.g. most of them include a non-standard print() function. But yes, you're closer to the metal — Node is a wrapper around V8, while this lets you test directly in V8.

MM: This is awesome. With regard to what it takes to extend jsvu to know about a new engine, for example how would the Moddable team add their engine (XS)?

MB: There's a support statement in the README — JSC on Linux isn't maintained. I'd love to add Moddable support. We first need precompiled binaries at a predictable URL, then some way to programmatically determine which is the latest version. After that it's an easy PR to add it, look at the existing scripts in the `engines` folder: they codify how to detect the version number, what the checksum is, what the URL format is, and how to test whether the binary works.

MB: The thing about browser JS engines is that they were already compiling these binaries for their testing infra anyway — they just weren't uploading them anywhere afterwards. The biggest part of working on this project was convincing browser vendors to host the binaries publicly, rather than discarding them after every test run.

BT: I'd love to add Moddable's XS support to eshost as well — eshost needs to know how to print to the console, how to create a new realm, etc. Happy to do that work if you can give me pointers to your docs.

PST: Shouldn't be too complicated. We support all the architectures jsvu mentions in its README.

MB: You don't even have to, to have it added to jsvu!

BT: Let's get it figured out.

TST: Another thing for easier use-cases within the shell itself.

MB: To make it easier to publish in jsvu, you can host a `LATEST` file somewhere with the URL/checksums/etc. Right now I have to do terrible things like parsing HTML with regex just to get the version number. For one of the engines I have to look at the GitHub Releases page for the official mirror of the project; at some point GH changed their HTML and my regex broke. :(

BT: (To TST) I've got a couple bugs open on your bug tracker, requests for SpiderMonkey. One I know of is SM is the only engine that doesn't let you eval some text as a module without passing a root module on the command line. If you don't have a module file to start with... There's another I can't remember.

TST: I'll look into those, ping me.

DE: Igalia is maintaining JSC on Linux and working on exposing the binaries in a URL that's more friendly to jsvu.

BT: How about a way to run JSC on Windows without having to install iTunes? ;)

JFB: There's no official JSC maintainer for Windows, but someone can volunteer on the WebKit mailing list.

CP: Only Chakra is missing `Intl` here, is there any particular reason?

MB: I'm just using the binaries the Chakra team provides; not sure why they're missing `Intl`. BT?

BT: The Windows binaries have it disabled on `Intl` right now because it's not done, but you can flag to turn it on and experiment. I'm actually a little surprised it's not on by default.

KCL: Re scraping GitHub HTML, there is a REST (https://developer.github.com/v3/repos/releases/) and GraphQL (https://developer.github.com/v4/object/release/) API for that...

MB: Ok, maybe part of the problem is that I'm lazy, kinda. ^_^ Best solution would be if each engine hosted an official `LATEST` file with metadata for each engine.

#### Conclusion/Resolution

- Issue already opened


## 13.ii.b. Make ECMAScript a syntactic superset of JSON for Stage 3

- [proposal](https://github.com/tc39/proposal-json-superset)
- [slides](https://docs.google.com/presentation/d/1eDW_u6dI8iFUx77m8rjRbF6C0grLZuVFJmJq620qD-I/edit)

MB: Back onto ECMAScript being a syntactic superset of JSON, a proposal by Richard Gibson.

MB: Simple idea, make ES a superset of JSON. It's not right now, because JS strings can't contain two unescaped characters (U+2028, U+2029), while JSON can. This proposal aims to fix that. We can't fix JSON, it's set in stone, but we can change ES. So this proposal changes ES to extend double and single-quoted strings to accept these two chars. Can't imagine anyone depending on this not working. (demonstrates the spec edit) This is a rare proposal that actually simplifies the current spec — ECMAScript benefits from the similarity in its definition of JSON.parse, so we can drop some of the extra code specializing this. Jordan and Michael Ficarra were Stage 3 reviewers and gave their blessing, so I'm asking for Stage 3. Any objections?

(No Objections)

WH: I also have reviewed this and I approve it

#### Conclusion/Resolution

- Stage 3 acceptance


## 13.ii.c. {BigInt,Number}.fromString for Stage 1

(Mathias Bynens)

- [proposal]( https://github.com/mathiasbynens/proposal-number-fromstring )
- [slides](https://docs.google.com/presentation/d/1Cs3FcclB_Vsb3YqU7dLRbsBqLmn7Bb4qEYs7bX8lOsQ/edit)

MB: BigInt used to have .parseInt(), but it was removed because parseInt behavior is weird. So conclusion was to remove it and come up with something more sensible. This is that proposal.

... discussion about the pronunciation of "radix"; loosely settled on "radd-ix" ...

MB: Suggestion is {BigInt, Number}.fromString(). Symmetric with toString. We want something to BigInt that fulfills this functionality and we can add the same thing to Number. Main problem that motivates this is there's no way to do the inverse — go from string back to number — but Number can through parseInt, although in a surprising way.

MB: Reasons parseInt is weird: gives NaN when string is bad, gives NaN when radix is bad, accepts radix 0 and pretends it's 10, accepts hex literal prefixes but not the octal and binary prefixes. Can't go back and add support, might be backwards-incompatible. It also ignores leading whitespace and trailing non-digits. And having some support for integer literal prefixes means it's not the inverse of toString - it accepts some things that toString can't produce.

MM: one more way - case sensitive.

MB: Ah yes, we'll talk about this as we move along.

WH: I have some concerns on this proposal

MB: Note this is stage 0, trying to hit 1 today. Let's not get too hung up on the exact shape of the current proposal.

DD: It'd be good to get the committee's opinion on case sensitivity.

WH: There are some real fundamental problems.

DD: We'll get there.

MB: The idea is that anything that can be produced by toString with some radix is accepted by fromString with that radix. Easy to say, hard to spec, but here are some examples.

MLS: Do you expect BigInt.fromString to accept the trailing `n`?

MB: I have a slide on that later, and the answer is no.

(slides)

MB: We can avoid all these problems in fromString by throwing an error for anything that can't be produced by toString.

WH: You don't want to throw an error for everything that can't be produced by toString, e.g., "1" or "1.5" can be produced by toString, but "1.0" or "1.50" will never be produced.

TAB: that would imply that anything which can't be expressed as a dyadic fraction would have to throw.

WH: Another problem: Number toString will never produce the output "9999999999999999999999" because there is no such exact IEEE double, but rejecting it would be weird.

MB: Depends on what we want to limit ourselves to.

MM: I think we absolutely want to accept this. Narrowly perceived as "what toString accepts, exactly" is too narrow. The useful use-case is that we have a string we want to produce a number from. If you don't accept everything that's valid as floating point and produce a number close to that, you've thrown away too much.

DD: I was first firmly on the side of this should be symmetric, I'm looking for some guiding principle to spec this that excludes the prefixes, but the 1.0 example is very compelling. I'd urge us to find some principle accepting 1.0 but not 0x0, maybe we won't find it in 6 minutes.

JRL: To reiterate. Imagine coming from a backend with a different language that doesn't follow toString's api.

MB: How does parseInt not solve that?

JRL: It does but it's bad.

YK: It's a problem in the sense that the person writing the backend code has to understand ..

DE: Mathias wrote a bunch of slides, can we move through them?

MB: Doesn't the backend always have to know the rules either way?

YK: you have to know what the rules are, but the more complicated they are, the more likely you are to mess up, this was hard for Rails

MM: I'd like to propose a guiding principle — the number syntax that this accepts should be a superset of "standard number interchange" defined by JSON. (Amusing similarity to previous item on being a superset of JSON.)

WH: Another issue is "1e20", in base 10 that's `10 ** 20`. If you set radix to 16 what do you get?

WH: If you do toString with radix 36, you can get "infinity" in a couple different ways: either supplying an actual ∞ or an integer that's spelled "infinity" in base 36.

MB: The infinity example - we can fix by not allowing case-insensitivity. This slide shows some hex digits - `C0FFEE` is uppercase, should that throw, and work only with `c0ffee`? Latter is what toString produces.

MB: We use parseInt, if something isn't a number it produces NaN. With fromString we can throw for anything that toString can't produce. For nonsensical radix values, the new proposal can also be strict and throw RangeErrors. Legacy octal integers, we can choose to be strict and not support these. No need to support numeric separators either. The n suffix for BigInt, we wouldn't support; symmetry principle says no, and also "1n" is a valid digit with a radix of e.g. 32, so it would be ambiguous.

MB: So does the committee want to advance to stage 1 and investigate this further, or should we not pursue this further and just say that using parseInt is fine?

MM: I'm in favor of advancing to stage 1; I want to see what solutions emerge from this discussion

WH: Agree. I support stage 1 as well. I'm also curious about the solutions to some of these problems. I was concerned I was getting dismissed bringing them up on GH.

MB: Sorry for making you feel that way - didn't want us to focus too much on the current spec text. It's intentionally vague right now - I wasn't intending to go straight to Stage 4 in this form.

DD: I'm also very happy that this will presumably clarify parseInt spec text. I'm hopeful in the course of defining this spec algo it'll be natural to define one for parseInt. It currently says "the mathematical number value corresponding to this string".

MM: Is parseInt not clarified?

WH: Presumably BigInt.fromString works on integers, but Number.fromString would work on decimals, including "decimals" representing non-integral numbers in bases other than 10.

MB: Any suggestions on what the guiding principle should be, let us know. [The link to the proposal repo is in the agenda.](https://github.com/mathiasbynens/proposal-number-fromstring)


#### Conclusion/Resolution

- Stage1 acceptance


## 13.ii.d. String.prototype.{trimStart,trimEnd} for stage 3

(Sebastian Markbåge)

- [proposal](https://github.com/tc39/proposal-string-left-right-trim/)

SM: We're also adding a new property to string.prototype with ..

DT: what happened to the old one?

DT: is it aliased, or does old code break?

SM: it's aliased. So Stage 3?

MB: Did you mention [the V8 implementation](https://bugs.chromium.org/p/v8/issues/detail?id=6530)?

SM: There's a V8 implementation

DE: JHD and I were stage 3 reviewers. Seems good to me

MB: I had one comment on the Test262 tests: the README mentions that e.g. `String.prototype.trimLeft.name === 'trimStart'` but the Test262 tests expect `'trimLeft'` instead. This should be made explicit in the spec text.

SM: this is a confusion in the spec, depending on how we do this aliasing, since they have the same name as the original, and in this case they get reversed, we need to find a better way to spec that

MB: Stage 3 *thumbs up*

#### Conclusion/Resolution

- Stage 3 acceptance


## 13.ii.e Code of Conduct Committee update (PRs, call for participants)

(Jordan Harband, Jory Burson)

 - [PRs](https://github.com/tc39/code-of-conduct/pulls)
 - [call for participants](https://github.com/tc39/Reflector/issues/86)

JHD: status update, thanks to Jory and Dan for helping with slides. 3 meetings so far, every two weeks, lots of good discussions, what our role and obligations are, reporting mechanisms. learning from Node's approach to online discussions, they have a good model.

JHD: there were three open PRs: member list, confidentiality guarantees, clarification role of chair group. created a separate moderation repo, exploring how to use it, e.g. in the node community, when anything that is published in a public venue needs attention ,t it is called out in the moderation repo, all delegates (and maybe invited experts) have access, if any

JHD: proposed list of membership of CoC committee. Anyone on this list can leave the room so everyone else can discuss them privately. If anyone wants to be added to this list, let Jordan/John/Dan know. They'll leave the room after the slides.

JHD: PR about confidentiality: original idea was to have reports go to an email list, but what if the issue involves someone on the list? This PR says you can email anyone individually and will be guaranteed confidentiality unless you explicitly opt-in to sharing with others, including rest of CoC

WH: very uncomfortable with this change, this is creating opportunities for a hostile environment. I've been in an organization with rules like this and it's turned out very badly. What this allows is somebody to email complaints to one person on the CoC and they're not allowed to share the substance of the complaint with anyone else, so one person on the CoC has absolute power over decision making, and aren't allowed to share the complaint with the person being accused. In the case I'm familiar with, the wrong person got ejected from the group, and didn't get to learn why, later turned out to be a case of mistaken identity. This is such a radical change, I understand the desire for sensitivity, but we already have a clause that says if anyone on the CoC has a conflict of interest (for example, is accused or the accuser), they are recused from discussions. We need to have the CoC committee discuss complaints as a whole, except for the cases where they are the accuser or accused. We must also guarantee that the person being accused of something is told what they're being accused of before making any decisions. This change doesn't allow that.

JHD: base on that , that's a very valid concern, that's not the intent of this change. we need further discussion on this

WH: I'm also concerned about already having made a non-editorial change to Code of Conduct without consulting those covered by it.

JHD: We'll revert it. Sounds like we need a new PR, we'll post it on the Reflector. The scenario you're describing is not one we mean to create

WH: I'm all in favor of improving this

DE: to be clear, in the CoC we discussed whether to merge this before or after presenting it to the group, we can discuss this in the github issue

JHD: further thoughts let's discuss in the Reflector. thanks.

JHD: next PR is about chair participation. Not everyone in the chair group will be in the CoC committee, this PR removes the requirement that chairs participate. They're still allowed to, but it isn't automatic. The CoC is meant to be a living document, we're not going to evolve it unilaterally

JHD: next ideas: communication and Action "playbooks": document how CoC members should address things, will evolve over time, taking inspiration from Node for a lot of things

JHD: engagement, need enough people on the committee to have "quorum"

JHD: (Presenting)

JHD: next steps: publish list of committee members, iterate on moderation repo and find out what works for us, identify patterns: lay the ground work so if you're faced with a situation, you know how to address it

YK: is this list supposed to be in perpetutilty? is there a normal "re-upping" process?

JHD: no, we want to re-validate everybody periodically, maybe after a year. CoC says tc39 will periodically review the membership list.

JHD: Proposed members of CoC please walk out of the room now (or disconnect from call)

(notes suspended while they're out)

RJE: Would anyone else like to join this list?

KCL: I would like to join the list

RJE: We will revisit this later in the meeting then.

Proposed members:

- Brian Terlson (brian.terlson@microsoft.com)
- Jory Burson (jory@bocoup.com)
- Aki Rose (hi@akibraun.com) (on leave)
- Jordan Harband (ljharb@gmail.com)
- Leo Balter (leo@bocoup.com) (on leave until February)
- Myles Borins (mborins@google.com)
- Daniel Ehrenberg (littledan@igalia.com)
- Keith Cirkel (keithamus@github.com)


#### Conclusion/Resolution

- Committee members should privately email RJE before end of meeting if they have objections to CoC committee member list
- Keith Cirkel added to the committee member list


## 13.ii.f Math.seededRandoms() for Stage 1

(Tab Atkins)

- [proposal](https://github.com/tabatkins/js-seeded-random)
- [slides](https://lab.iamvdo.me/houdini/rough-boxes/)

TAB: (Presenting)

TAB: code that generates rough borders,they jiggle randomly as you repaint or scale the page, because the random values change each time they're called

"LCG" is a linear congruential generator, simplest form of thing that looks random. Not good randomness, but good enough for graphic layout stuff. Similar use cases in gaming, want reproducible "random" numbers.

Add something to JS that allows seeded random numbers

TAB: proposal is `Math.seededRandoms(seed)`, produces a generator function

TAB: based on feedback in the issues: important to specify exactly what random function we're using, should be predictable across versions and engines. No opinion on what the generator ought to be, but there should be exactly one. Should specify what the range of possible seeds are, also to maximize the possible entropy of the output.

TAB: not sure what the output ought to be, a lot of generators return numbers from 0 to 1, or integers. If you want to resume a sequence from later, if the output is between 0 and 1 it's not sure whta you would feed in a seed to make that happen again

WH: I'm confused. Normally in a RNG the last number you generate is not its current seed, what's going on here?

TAB: that's a relevant question: how do you resume a value? you could just be outputting the state, which makes it easy to resume

TAB: a lot of other languages have their normal RNG function take a seed to make "seeded test runs". But most use cases don't want just a single predictable RNG, they want multiple ones. Ok, questions.

YK: seeded test run case is important, most of the use cases I see are for test runs, cross-user-agent is important for the reasons you described, also for CI environments to locally reproduce a failure seen on remote CI

MF: feeding the output of the RNG back in as a seed really limits the set of algorithms we could use. But resumption is really valuable. First we need to decide what are the kinds of use cases we need to support, which way to we lean there.

TAB: the use cases we know about now are the Houdini APIs (would prefer to be predictable), games, test runs. I don't know which are relevant for our decisions, not sure.

MM: first, terminology clarification: never use the phrase "Random Number Generator" for this, always use Pseudo-random number generator. I'm very glad to see the mutable state in this proposal is only instance state, not global.

TAB: that was intentional

MM: there's an inherent tradeoff between speed and good randomness, the right way to approach that question is not "we choose one point in that space", but "here's an API into which other RNGs ".. nothing here is incompatible with that stance. I like having the particular function chosen being part of the spec, not left to the implementation. There's good work on "Splittable Pseudorandom generators" to look at. The seed is not revealed by the output, but .. that raises the interesting question of how to save/resume the input. I'll point you at some references.

JFB: don't need to answer this question, but: is it in scope to deal with distributions or not (uniform vs normal, etc)

TAB: can't just modulo to safely get the right range:

WH: what is the C++ problem you mentioned exactly?

JFB: C++ has a ton of detail, but then just shrugs about how to get particular distributions out of the generator, and so impls aren't interoperable.

TAB: that's probably related to MM's third point, good separable discussion

DD: Michael was talking about use cases, Mark about algorithms, I think we should be clear in the spec that like Math.random, this is not a cryptographically-secure RNG, so that should not constrain our choice of algorithm

MM: but itr should constrain our choice of API to one that could be safely built with a secure RNG

WH: my feeling is there should be two interfaces, one to get random numbers, one to get the current seed. The seed could be large.

TAB: every reasonable RNG these days have more than 53 bits of state, so the state will have to be returned as a typedarray or bigint

WH: And of course the RNG needs to accept one of those large states as the initial seed.

TAB: agreed we should give a way to explicitly get the seed out, in addition/instead of the value. So maybe not use a generator, but a seededRandom object, with a generator hanging off of it

DD: or a generator with additional properties

MM: it needs to be possible to naturally give out the ability to ask for more random numbers, without giving the ability to ask for the seed

YK: the save/resume use case is important for the testing use case, you should be able to pick up after a failure without needing to repeat what you already did

KG: the API should accept an options bag, not just a single number as seed, maybe a simple case that just takes a number, but with complex state we want an options bag

```js
Math.seededRandoms({ ... })
```

TAB: usual thought is that things which are required are positional? But fine with either using solely an options bag, or unioning the types for simplicity.

KG: maybe the options bag just contains all of the state

KG: the current design is a generator, rather than a function you call repeatedly, for my use cases I want a function to call repeatedly. For test cases, I'd just swap out Math.random with this deterministic thing. Harder to do with a generator

TAB: the non-determinancy of the call is exactly what I'm worried about, which is why I want instance-based

KG: I wouldn't want this on a web page

TAB: To replace Math.random, you can just sub in `Math.seededRandoms().next`.

DD: are you ever going to iterate over this?

TAB: In the rough-borders example I led with, yeah, you just want to do some simple iteration.

KG: ok this is a later-stage concern

SM: one use case, one source of non-determinism in their ? is to hard-code a seed, but current Math.random is used in both the use case of ?? (ed: didn't understand, sorry)

#### Conclusion/Resolution

- Stage 1 acceptance


## 13.ii.g. Invited expert/specification contributor forms

(Daniel Ehrenberg)

- [Issue](https://github.com/tc39/Reflector/issues/104)
- [old form](http://tc39.github.io/Test262-cla/)
- [new form](https://tc39.es/agreements/contributor/)

DE: Since 2015 we've been using GitHub for development, accepting contributions on GitHub. Have occasional non-members attending meetings. We need confirmation that contributions can be legal (patent/IPR). We ask them to sign a web form. There are technical issues with this form. To fix those, we made a second form, with different text about the agreements/licensing, for non-members to sign when making contributions. Thomas Wood of Imperial College London has promised to help with automating.

DE: Proposal is to retire the old form and switch to the new form. Proposal: for each contribution for normative changes, check that the contributor is of a member company, or has signed form. For new attendees, declare whether they're an observer (and not make contributions), or a prospective Ecma members can attend as guests or invited experts and sign the form (and talk and contribute, with contributions licensed to ecma).

DE: This plan has been developed with Allen Wirfs-Brock and István Sebastyen. See Reflector thread for discussion about text.

DE: if there are no objections, I'll move the new form to tc39, will start enforcing it for patches/PRs

DE: i hear no objections. Is there anything I should do beyond the reflector thread and updating the contributor.md?

(No Objections)

#### Conclusion/Resolution

- Consensus on using new form


## 13.ii.h Async iteration for stage 4

(Domenic Denicola)

- [proposal](https://github.com/tc39/ecma262/pull/1066)

DD: been pretty stable since changes in stage 3, shipping in at least two browsers, I've submitted PR, BT is reviewing notes

BT: I reviewed at Stage 3. Do I need to sign off again for stage 4?

DD: editor has signed off on PR

BT: Can we defer?

#### Conclusion/Resolution

- Defer to tomorrow


## 13.ii.i Followup to discussion from previous meeting: identifying risk areas

(Jordan Harband)

 - [PR](https://github.com/tc39/process-document/pull/18)

JHD: trying to be more precise about the requirement, to reduce need for debate. "significant experience with deployment in the field", specifically two VMs

JHD: different proposals have different risk areas: interoperability, ergonomic, etc. Things with a web-compatibility risk, it's not controversial to require two implementations (to minimize that risk). But committee sometimes interpreted requirements differently: flagged, canary, nightly or a babel implementation might qualify.

JHD: explicitly mention possible risk areas ("this proposal may create compatibility risk") in proposals, stage 4 requirement would mean the committee would agree that the risk areas identified had in fact been met before reaching stage 4. E.g. web-compatibility may require two non-flagged non-nightly browsers have the feature.

JHD: that was my take on the conversation, wanted to get the comittee thoughts on if that would be useful/palatable, to reduce debate in the cases where two unflagged browers aren't really necessary, without allowing some risky changes to squeak through. Wanted to open the floor for thoughts.

BT: this doesn't imply any change to the process, right?

JHD: the only change would be that, as part of going to stage 2, is to identify the risk areas. And then as part of the discussion about "significant in-the-field experience" that we already have for going to stage 4, we use those risk areas to refine that conversation. The PR has explicit language to continue to allow the committee to do whatever it wants, so the intent isn't to constrain the committee, but to debate more efficiently.

MF: Can we make sure this doesn't go into effect for this meeting, but for some later one

JHD: sure. No rush, don't have to merge before March, but maybe the meeting after that, after we've gotten comfortable with the language. Maybe a year from now, we can have a lot less debates.

YK: I'm fine to update the process document but it should not affect the process per se. It doesn't seem problematic for someone today to say these things.

JHD: the hope is that it adds extra information to the process, to let things go through the process quicker when appropriate, and slower when appropriate

AK: I'd like this better if it was non-normative, sounds like good advice for champions, to identify risk areas and show that they've been addressed. Kinda the champion's job already. Adding new things to entrance criteria opens the door to long discussions: have we identified all the risk areas for stage 2? Having the same "what risks are there" conversation multiple times

JHD: not expected to be an exhaustive list at stage 2 time, committee at any time can add/remove risk areas

MLS: if there are risk areas that can be identified, they should be tracked. Stage 2 and stage 4 are very far apart. These should be implementation risk areas, not other kinds of risk. Maybe during stage 3 more risks are added.

JHD: making it a stage-2 entrance criteria means to me that it's being tracked. Making it clear that these are implementation risks sounds good to me.

YK: most of my concerns have to do with usability, so e.g. "I'd like to see more feedback from Babel users", doesn't sound like an implementation risk, but I'd like to see it get tracked. General desire to see more concerns raised earlier in the process, so folks don't get blindsided by it later.

JHD: specific debate is whether it must be in two unflagged web browsers, we have this debate a lot. For some issues this is unnecessary.

PST: overall this is great, one small point: when two unflagged browsers aren't necessary, then what *is* necessary? Text talks about other browsers, polyfills, etc. Let's remove ? from the "etc" category and be listed as a non-browser web engine.

AK:  text changes, "how do I champion a spec" rather than entrance/exit criteria

JHD: i can make all the editorial suggestions that have been made, but maybe I should remove it from the stage2 criteria

YK: my recollection was that we were trying to give people a way to add things to the exit criteria at the time when we enter stage2, so people will remember it before it finally exits. Github issues might be a way to do this, but there are a lot of issues, maybe we could flag them as important or "exit criteria", but I thought the goal was to make sure somebody tracks this issue.

DE: maybe this could go into a new "how to champion a proposal" document instead of the criteria

JHD: ok but my specific goal was to clarify the "significant in-the-field experience" clause to make our discussions more efficient. I added the stage-2 criteria because that seemed like a sensible place to do it, but if removing that will remove the contention, then great.

JHD: let's discuss further in the PR

#### Conclusion/Resolution

- will talk more at the break, and will revisit in future meetings


## 13.ii.j RegExp lookbehind assertions for Stage 4?

(Mathias Bynens)

- [proposal](https://github.com/tc39/proposal-regexp-lookbehind)

MB: I want to give a status update on the RegExp proposals. I'll present the first half today, but I'd like to defer the rest until tomorrow. You'll see why in a minute.

MB: dotAll mode (s flag): advanced to stage 4 at the November meeting, then merged PR (#1028). This feature will be part of ES2018!

MB: named capture groups: advanced to stage 4 at the November meeting; the PR got merged just recently (#1027). Moddable/XS engine now has an implementation too, by the way (brand new RegExp engine)

MB: lookbehind assertions: I didn't nominate it for stage 4 at the last meeting because there was only one implementation (Chrome/V8), but now it's in XS too. And we've had Test262 tests for a while. Any objections to moving to stage 4?

WH: I was told in private communication prior to this meeting that this wouldn't be proposed for stage 4, so I haven't reviewed it thoroughly yet. I shall do so within the next day and report back to Mathias.

MB: the XS impl is really recent, so I hadn't been planning to go for stage 4 at this meeting. Let's give you a chance to review it more thoroughly and revisit this on Wed/Thu.

MB: Unicode property escapes: Waldemar has some new feedback that I want to address first, so I'm deferring this item.

WH: there are enough bugs in the proposed Unicode property escape spec that I don't understand what parts of the proposed spec are supposed to do. I've been filing GitHub comments.

MB: Let's revisit Wed/Thu for maybe moving to stage 4.

AK: It'd be nice if these managed to move to stage 4; there are lots of RegExp things going into ES2018.

BT: Keep in mind the deadline: changes need to be made before the first week of February.

MB: Noted. I'll work with Waldemar to fix the spec issues and bring this up again on Wednesday/Thursday.

#### Conclusion/Resolution

 - dotAll mode advanced to Stage 4 (PR merged)
 - named capture groups advanced to Stage 4 (PR merged)
 - lookbehind assertions to revisit later in meeting, otherwise still Stage 3
 - revisit Unicode property escapes later in meeting, otherwise still Stage 3


## 13.iii.a Promise.prototype.finally for stage 4

(Jordan Harband)

- [proposal](https://github.com/tc39/proposal-promise-finally/)

JHD: Promise.prototype.finally is stage 3, shipped in Firefox and chrome and Webkit nightly, two polyfill implementations. Hoping to get committee approval for stage 4 (pending approval of PR). There are already Test262 tests written and merged.

AK: we had another thing like this, do you want to defer this?

JHD: didn't want to rush the PR if there were other objections

BT: I don't think I'll have time to get to approving this before async iteration.

JHD: sounds like no objections, except it might not fit into BT's schedule. Will write PR, bring back up thursday, else bring up in a future meeting.

#### Conclusion/Resolution

- Deferred to later if BT has time to review, or else still Stage 3


## 13.iii.b String.prototype.matchAll for stage 3?

(Jordan Harband)

- [proposal](https://github.com/tc39/proposal-string-matchall)

JHD: was originally hoping to ask for stage 3, but issues raised. when you pass a string argument, the orig semantics was to convert it into a regexp like the way match does. I was discussing with Dan about making that regexp automatically have the Global flag, but two other questions came up. Should that regexp be in full unicode mode? Bigger question is the replaceAll proposal from the last meeting was looking for ways to do exact string searches in the absence of a regexp.escape function, if you pass a string into matchall, instead of a regexp lookup, could it do a substring search. My initial reaction was that solving that one API method at a time wasn't great, doubles spec complexity, need a different well-known symbol to handle exact string searches. Wanted the committee's thoughts on how to pass an exact string in here. Committee rejected my original proposal to throw exception. Not asking for stage 3.

DE: example of distinction: x.matchall(".") : original semantics is to throw because that's not a regexp. Current semantics return one match. Half of existing regexp functions have special behavior for passing in strings. WH? do you remember why they have this divergent behavior?

WH: nope

JHD: if we felt it should have the regexp coercing behavior of .match(), we could ask for stage 3 now. If not, I'll write different spec text and some back later.

DE: why do we need a second symbol?

JHD: maybe it doesn't, maybe the mechanism doesn't need to be exposed, we can review that in the PR that adds the spec text. But it adds a lot of algorithm text to the spec, branches for the different types. It's an iterator, do we can't just re-use the algorithm in split(), which is fine but we'd like to hear about the intuitiveness of one vs the other

Dan?: the second issue subsumes the first one

?: didn't we say last time that matchall would be just like match, and we were going to add a replaceAll?

JHD: stage1 for replaceAll was, given a string, do the exact match

WH: for ergonomics we want matchAll and match to be similar

JHD: does anyone want to argue for anything but exact string matching? current behavior when given a string is to call new RegExp(string) with "undefined" as the flags argument

WH: it's unfortunate, but match and matchAll should probably match. It'd be very confusing to remember which has which behavior on strings if they diverge

?: I don't want it to require the unicode flag. matchAll makes it hard to say what the "global" flag means

JHD: if we say that consistency with match() is most important, so coerce into regexp, with no global flag, then you get an iterator which can only fire once

MLS: implicitly adding the global flag seems like a reasonable way to handle this

JHD: if we agree to coerce to regexp and add global flag, then I *am* comfortable asking for stage-3 now, since the rest of the spec text has been reviewed.

YK: I thought there was more momentum behind using a new name last time. If we call it matchAll then it should be like match, but we could use a new name to avoid that

JHD: committee had talked about that

YK: ok

JHD: any objections to moving this to stage 3?

(No Objections)

#### Conclusion/Resolution

- Stage 3 acceptance
- with semantics: coerce to regexp, add global flag


## 13.iii.c Function.prototype.toString (PR) for stage 4

(Michael Ficarra)

- [proposal](https://github.com/tc39/Function-prototype-toString-revision)

MF: has been sitting in stage 3 for a while, spec text hasn't changed for a year. Now have multiple implementations..

AK: Chrome implementation went to canary (unflagged) just a week ago, not in beta yet

MF: ok, didn't realize it wasn't out yet, will remove this item

BT: can we discuss an implementation that does not provide the original source code?

MF: after making this well defined, we can declare this to be conditional upon having access to the original source. Annex B?

WH: toString is currently fairly loose, allows implementations to avoid retaining source. Creating a proposal which prohibits that for a short time, followed by a second proposal to allow it again; don't like that flip-flopping. I understand how that's useful from the committee side of things, but from an external point of view it seems odd.

MF: do you think we should fold this into the proposal?

WH: I'm not too concerned about the exact process. Just concerned about disallowing then allowing implementations that don't want to save the source text.

BT: this is stage-3 feedback. Effectively restoring a bullet point in the original text saying if you can't do this, you can't eval

MF: ok, thanks for feedback

#### Conclusion/Resolution

- Stage 3 holds
- include as part of this proposal a way for engines which cannot produce function source text to provide some alternative (involve Moddable reps + DD)


## 13.iii.d Symbol.prototype.description

(Michael Ficarra)

- [proposal](https://github.com/tc39/proposal-Symbol-description)

MF: currently stage 1, looking for stage 2 and reviewers. Has full spec text, general idea is that you can give a symbol ..

MF: getter on Symbol.prototype, currently too hard to get the name out of the object

JHD: I'll be a reviewer

DE: should we add this to .. private name to use in a decorator??

MF: sounds related, but not something I know enough to champion

KG: currently a corner case where you don't provide any string to the Symbol function, then use toString, can't tell the difference between an empty string and this other undefined thing

MM: this is serialization for humans? or for deserialization?

MF: was intended to be for deserialization, but ..

MM: I think the possible name collisions make this a bad mechanism for this purpose

MF: I'm retaining the identity too

MM: ok

YK: main use case is debugging, but serializing for emitting debugging information is helpful, maybe it gets sent to an external server, you want to include as much human-readable information as possible. Not just about the browser doing the debugging.

MM: for symbols created by the platform, does the spec say what description they carry?

yes

MF: but some don't have a description?

JHD: well-known symbols like Symbol.iterator have a description such as `Symbol(Symbol.iterator)`

MF: any objections to move to stage 2?

(No Objections)

MM: I'll be a reviewer
JHD: I'll be a reviewer
KCL: me too

#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
  - Mark Miller
  - Jordan Harband
  - Keith Cirkel


## 13.iii.e Maximally minimal mixins proposal

(Justin Fagnani)

- [proposal](https://gist.github.com/justinfagnani/9502b5f46599f474a67a5fce2f7af910)

JFI: I'm going to propose a mixin idea. This my first time ,here, not sure of the process, wanted to spark a discussion. I'm at google, use mixins a lot. Want to inspire a champion or find a mentor for this. Maybe this is stage 0. Non goal: get agreement on any specifics. Not as important. Goals: pave existing cowpaths for mixins, improve their ergonomics, improve static analysis, leverage classes, be compatible with existing APIs.

JFI: currently lots of patterns in use (pre-Classes), variations of Object.assign(MyClsas.prototype, mxin). I claim ES2015 already added mixins. Subclass Factory Mixins. Takes advantange of the fact that extends accepts an arbitrary expression. Works today, with built-in classes like Array and Map. USed by Polymer, others. Example. (see slides).

JFI: this pattern avoids difficult problems: by creating a fresh prototype for each mixin application, it avoids multiple prototypes, no changes to property lookup.

JFI: proposal is to add syntax for this kind of mixin. e.g. `class C extends S with M`, desugars to.. . Or declarative form.

WH: does this allow multiple mixins? In what order?

JFI: yes, maybe `class C extends S with M1, M2`. S is innermost, M1 is next, M2 is outermost.

JFI: nice feature is backwards/forwards compatibility with the desugaring.

JFI: Why do this? It's strictly less powerful than what's already there. Allows static analysis, improves ergonomics, encourages class-compatible mixins. Static analysis: TypeScript has a (cumbersome) syntax to teach the compiler about what is a mixin, can't refer to the type defined by the mixin without a duplicate definition.

YK: one other gotcha, TS can't have abstract members for other reasons, whenever the encoding of the function gets to complicated, typescript fails

JFI: Closure is even worse, more code. Flow has a very similar syntax to this proposal. JSDoc is even simpler.

BT: clarifying question: we've heard a similar proposal, First Class Protocols, how does this differ?

JFI: will explain later

RBN: what happens when you mix in two mixins that share the same base, do you override something?

JFI: will explain later, but one advantage of mixins is that you don't have the diamond problem

MM: in the mixin form, can you write a constructor? yes, so I will have many questions about constructor chaining

JFI: difficulty with static analysis: recognizing a function is a mixin, etc

JFI: what kind of future evolution this would enable: mixins can evolve independently from classes. Class features are inherited by mixins: member visibility, namespacing, requirements/interface checking.

JFI: Member namespacing: declare and use a symbol in a single place. Gets you close to the namespacing in First Class Protocols proposal. Need a new scheme for defining it.

YK: could use private

JFI: most trait implementations can require that your mixin requires a member. Not critical to proposal, but nice to have.

JFI: (Presenting)

JFI: reserving MyMixin.prototype for future use, by adding a non-configurable non-readable(?) property under that name

WH: What would you want to put onto a mixin's prototype? I don't understand how the inheritance would work were that to exist.

MM: more coherent without adding .prototype. Desugaring into an arrow function is good, no prototype, not callable as a constructor.

JFI: ok

YK: I like it. Very similar to the ruby mixin system, which more or less copied gillad(?)'s paper, and the things people think will break don't actually break. Linearization is underappreciated. Mixins and Classes have a natural correspondence, nice to have that. "why is this better than protocols"> we don't have a complete proposal, hard to compare. Broadly, I like this direction. Two ways to think about this: there are existing cowpaths that people use (typescript special-cases this), and we should just go with the flow (like how ES2015 went with classes). Other way is: we could do better, the cowpath is broken, let's avoid it.. reasonable perspective (but I don't have it). Protocol proposal is trying to build something new.

JFI: this seems compatible, maybe we can layer them.

DT: I currently use mixins in ruby and suffer from them every day :). Lots of work is being done with classes, but haven't seen mixins as much (except in React). Is this prevalent enough to justify new syntax? And it will complicate further discussion of classes: when we add something to a class, do we also have to add it to mixins?

JFI: there are hundreds of pacakges on npm that do some bespoke mixin mechanism, so the concept seems heavily used. Lots of pendulum swinging about whether it's actually a good idea. Having syntax makes tools better: typescript can jump to definition of a mixin. Polymer and WebComponents use pieces like this.

YK: basically every web framework has mixins of some sort. Ember in ES5 tried to copy this, but with changes. When we migrate ES5 to ES6, we'll tell people who need mixins to move to this kind of pattern.

DT: great

DE: lots of things happen when you evaluate a class expression, some make sense to run each time you inherit, others could be run less (e.g. evaluating computed property names?). Might want some things to be evaluated once per mixin declaration. YK, MM

KCL: why is this different than Protocols? doesn't that cover everything this does?

JFI: Protocols don't focus on interface checking. Mixins are required to override existing APIs, Protocols don't allow those collisions(?).

KCL: latest Protocols spec lets you depend upon string-based property names, but not provide new ones, to avoid collisions

MF: The Protocol spec allows you to rely on string based methods that exist in the class, but you cannot provide string based method names.

JFI: depends upon whether a feature to avoid collisions must be tightly coupled or not

KCL: So when do I use a mixin, when do I use a protocol? We could enable string-based names for protocols, or move away from protocols and move to mixins. But having a big bag of class features to enable this feels like a step too far.

JFI: so, does anyone want to champion/mentor? What stage is this?

YK: I will help, stage-0 is fine.

MM: I see no reason not to go for stage-1 already, given the quality of the presentation

BT: we approved Protocols for stage-1 because of a lot of existing usage. I don't see a future with both Protocols and Mixins, so I think you should talk to people doing Protocols and come to some kind of consensus

?: next step is talking, maybe we will come to the committee with two proposals and must decide which direction to go

YK: my agreement to stage-1 of Protocols was largely because I was waiting for something like these Mixins to come along, so I could back it

BT: reasonable to ask anyone working in this space to work together to define their direction, maybe report back with "we can't agree"

MM: does anyone object to stage 1?

YK: there's definitely a problem space to explore

MM: does YK object to this proposal going to stage 1 (separate from Protocols) with the understanding that they'll talk it out

KG: object, we should not have two proposals in the same space

MM: I object to restricting ourselves to multiple stage-1 proposals for a single area. But limiting to a single stage-3 proposal per area is good.

RJE: let's think about it over the break

(Break)

RJE: allocate 10min to close this

JFI: obvious opportunity to collaborate with the Protocols folks, to at least identify the different problems we're trying to solve. To best reflect reality: two line items, both at stage 1, or one item with two links.

BT: having two repos for this would be hard for people to track. Other proposals have had multiple alternatives in the same, repo, this seems similar, would be nice to have a single place for this discussion. What's the benefit for having two separate repos?

MB: what if we have two repos, let both advance to stage 1, but require that they converge before moving to stage 2 or 3?

YK: seems fine

BT: which repo should host that discussion?

JFI: I don't even have a repo yet, just this gist

AK: you could file an issue on the Protocols repo with your gist, seems expedient

JFI: a single issue tracker seems like a big advantage

KG: README of Protocols proposal should be updated. Maybe it should be renamed Protixins

(Laughter)

JFI: So how about a new README with two sub-READMEs. Top level README being something like "Mixins, Protocols, yada yada"

MM: if the champion is fine with attaching these, that's ok. I want to make it explicit that accepting that is not a precedent for the proposal process. At what point during advancement does overlap between proposals need to be resolved? I'm strongly against requiring that before stage 1.

JFI: it'd be nice if the committee made it clear that these things are of equal weight

MM: anyone else want to say something?

WH: in favor of this being stage 1

?: having these combined seems confusing

MM: Protocols-vs-Mixins have a lot of overlap, but the problem statement looks very different depending upon which one you start from. We say that stage 1 is about a problem statement. But there are good reasons why the artifact we examine in stage 1 is a rough proposal for how to solve the problem. Often, such a sketch of an approach to a solution is the clearest initial expression of what the problem is that is being solved. The proposal expresses a philosophical approach for solving a problem which it understands from the perspective of that philosophical approach. Different approaches will have different ways of categorizing the world. To make progress, we need to come to better understanding of these problems, arriving at common terms so we can see how they overlap. But this takes discussion and discovery --- precisely the kind of effort that often only starts once a proposal is at stage 1.

(Note: AWB apparently was not here for this topic, but it worth noting the following text from his paper on standards participation:

> A majority of the delegates may approach a problem in a manner that you believe won't work but you cannot convince them that they are going down the wrong path. Instead of wasting additional time trying to convince them, work on developing an alternative solution. If you are right, the majority will eventually recognize their mistake and your solution will be available to take its place.
)


RJE: let's talk about this offline and revisit it later

#### Conclusion/Resolution

- talk to Protocols people
- talk more offline, revisit it later with a plan for the next step


## 13.iii.f PR: Making nullish values iterable, or at least array-spreadable

(Mathias Bynens)

 - [PR](https://github.com/tc39/ecma262/pull/1069)
- [slides](https://docs.google.com/presentation/d/1SWf5ZN2C-CFTde0SBdo01eZKwcYPAJUfPTCZf54VCB8/edit)

MB: array spread and object spread aren't consistent, should we fix it? Option 1: leave it alone, live with the inconsistency. 2: make object spread match array spread: throw when spreading null or undefined (explicit and helps find bugs, but still not consistent with Object.assign and similar userland utilities)

MB: option 3: null/undefined spread to nothing. seems like smallest possible non-breaking change, and consistent with object spread, but hides bugs (accidental undefined), and not consistent with iteration

MF: do you have a survey of cases, where how they differ?, to know the current status of each. Would be nice to know how consistent/inconsistent the rest of the API is

MB: nope, would be nice to build that list. grep the spec for GetIterator?

MB: option 4: make null/undefined iterable, but producing no values. Would fix this behavior in general (not just for array spread), but hides bugs like accidental undefined

YK: um, how do you do that?

MB: The current PR checks for null/undefined and exits early within array spread. We can just move that check to GetIterator to return an empty iterator.

YK: But it won't have [Symbol.iterator]

MB: No

MB: [Did a Twitter poll](https://twitter.com/mathias/status/954455439101562881) with ~1300 responses, got 52% wanting exception, 42% wanting silent spread-to-nothing. Not scientific.

SM: rational for object spread was consistency with for..in and Object.assign, but let's not force a decision for legacy reasons. Very common to have types that are null | undefined for a lack of value, e.g. `null | undefined| Point3D`, but less common to have empty objects in that place, e.g. `{} | Point3D`. We generally don't recommend using `{ ...obj || {} }`

WH: the `{ ...obj || {} }` pattern also catches e.g. 0

SM: examples of usage

BFS: for option 4, making these things iterable, what's the result of `yield *`?

YK: Its the same as `done: true` as the first return value.

TAB: old use cases that needed this are mostly not needed any more: default arguments, for..in (?). Wants object spread to be defined on iterator protocol like array spread

SM: we've discussed having a metaprotocol for spread, might address that concern, parallel protocol to iteration

JHD: when talking about object spread, we talked about reserving a symbol to allow objects to opt-in to being iterable (?)

SM: but then a class can't add it later, as it would break child objects which depends upon iteration behavior

TAB: seems bad that so many spreadable/iteratable cases are inconsistent. destructuring assignment.

YK: for better or worse we decided to cowpath-pave this behavior multiple times before, but this specific case is new. surprised we're willing to make things iterable without having an iteratable symbol, doesn't think we should change that

YK: no objection to keeping the current behavior, it's a false symmetry to keep the object and array versions behave the same way. That ship has sailed. Wouldn't object to throwing, but fine with current behavior.

WH: for object spread I was surprised to learn the semantics convert primitives to an object before spreading, if you spread a number `...3` then you get the own-properties of the wrapper — that's odd. In the stricter alternative `...null` would throw which would be inconsistent with how primitives are treated, so the way it is now is good. But why did we decide to allow object `...` to spread primitives in the first place?

YK: probably because object.assign did it

MB: John-David Dalton [advocated](https://github.com/tc39/tc39-notes/blob/master/es6/2014-07/jul-29.md#revisit-objectassign) to match existing userland library behavior. There is precedent outside of the language itself.

SM: array spread also works on strings

MB: yes because strings are iterable

MB: what should be do next? WH says he doesn't want to change object spread, do we want to change array spread?

MF: I don't think we can make a decision without knowing a list of what it will impact

AK: I'd oppose changing iteration at this point, I don't see the value. are there programming patterns that would be opened up by allowing you to pass null wher ean iterator is expected?

MB: so you want to see more use cases before we make a change?

AK: any change needs pretty strong use cases, not just consistency

MB: we could revisit this later

#### Conclusion/Resolution

- shrug emoji, continue to discuss on PR


## Rest/Spread properties for stage 4

- [pull](https://github.com/tc39/ecma262/pull/1048)

(Sebastian Markbåge)

SM: making objects spreadable. All the implementations are there, we have spec tests approved by Brian, looking for stage 4.

MM: approves

(No Objections)

#### Conclusion/Resolution

- Stage 4 acceptance


## Function.prototype.toString() censorship for stage 1

(Domenic Denicola)

DD: let's censor Function.prototype.toString(). Might be unnecessary if Michael's proposal allows implemenations to just return "native code". Arguments for not returning original source: 1 someone (Angular) could parse your code and wind up depending upon what toString returns, makes it hard to refactor your code. 2 reveals how function was created: bound, generator, native/not. Makes faithful polyfills difficult, leads to things like adding an own-property of "[native code]" to make it look native when it's not. Also problematic for refactoring between classes or not.

DD: but carrying around the entire source text of your program in memory, just in case, it not great for performance/memory on low-end devices, pretty significant fraction in some cases.

DD: want to provide an option to censor this. Things to discuss: how much to censor (whole realm? one source file? one function?). How to indicate this: external-to-JS flag, source-level parseable annotation, runtime dynamic switch on the function object. For dynamic switch, must be one-way, so you can't uncensor later.

DD: what is the new censored output? Don't want something newly unparseable.

DD: most folks I've talked to want to do this at the file level, or file-before-bundling. Important to be able to censor third-party libraries. If done by modifying their source text, must be an easy modification.

DD: some proposals, want opinions before writing up specs. 1: new pragma, e.g.`"use no function.prototype.toString"`. Works downwards (censors nearest enclosing function plus later internal functions).

YK: use strict had the parsing problem, does this have the same?

MM: no difference in the treatment of the text that appears before the directive

AK: so you have to hold on to the source text until you finish parsing

DD: strengths of this are similar to those of use strict: can bundle together censored/non-censored code, makes it easy to censor a whole file. cons: can't opt out from within a censored scope, not immediately obvious why a given function is censored (like use strict). Would need to introduce pramgas into class bodies. Not trivial to censor third-party libraries (must preprocess their source files)

DD: proposal 2: external-to-JS flag, let implementations return a censored string under host-defined conditions. E.g. `node --no-fn-tostring myapp.js`. Makes it trivial to censor third-party libraries. But now code is less portable, libraries can't depend upon themselves being censored.

DD: rejected alternatives: one-time censorship `f.censor()`, permanently censors that one function. Hard to censor third-party libraries (lots of inserted calls), must be done at runtime (so source must be retained until runtime).

DD: `delete Function.prototype.toString`: blunt, doesn't work with multiple realms

DD: should this censor the function name itself? What about a meta-API with a well-known symbol? (but enables uncensoring later, messy)

DD: pragma variant is opt-in by author of the library, external version is opt-in by host or by user of the library. Pragma doesn't break existing code. Lots of ways to modify behavior of code included in the app that don't edit your source text, this would add another one, apps are already making choices about whether to depend upon such things.

DD: requires only minimal preprocessing

DD: precedent for out-of-band controls :CSP disallows eval(), proposed realms API is controlled externally, Node.js enables/disables i18n features with flags

DD: please give me feedback

YK: seems fine, agree with your arguments. Test environments want toString, so maybe this API would be enabled in production environments but not during development. Any kind of self-hosting probably needs this behavior. The inline pragma probably works better with existing bundling tools, people today are still taking source code and assembling them into a single script. If it couldn't be used in existing bundling strategies, it wouldn't be used as much. Testing tools could un-insert the pragma.

KCL: testing is important, it's hard enough to just get the name of a function. I can imagine folks cargo-culting the pragma in their libraries which will coincide with a lack of introspection in testing environments like Chai. I can imagine us getting tons of issues about this. I prefer option 2.

BFS: binary AST would also lose the source code, we haven't yet objected to that

MM: I think breaking old code is the central topic. The switch option is not worse (than the pragma option) because the build tools can insert it. But of course then the pragma is not worse either. What is the disadvantage of the pragma if the build tools are managing everything?

DD: neither seems to have an advantage

MM: Then I believe the global switch has a strong disadvantage, the author of the code cannot make predictions about the behavior of their code. I prefer the pragma. We'd like to encourage separation of concerns, and the pragma does that well

DD: why is that not an argument against the realms API?

MM has an answer. let's intervene at the finest-grain that we can

MF: the pragma route would make functions inside the censored function to also be censored, right?

DD: yes, main goal is to make it easy to censor a whole hierarchy

MF: would you want an uncensor pragma to turn it off inside?

DD: we could, if necessary. wants to see a more compelling use case.

MF: might be where we pass a function object to something that we know needs the source

TST: for memory usage concerns: we need it to apply to all contained functions, and to not be turn-offable, so we can discard the source as quickly as possible

DT: for censored code, it's hard to debug. could we add a hash of the source into the censored representation, so debug tools can trace back to the original source?

DD: interesting. sounds complicated, but maybe useful.

MF: there's telemetry, and then there's a debugger, and without source that's hard, is that the intent?

DD: not the intent to prevent debugging in a trusted environment. Devtools should fetch source code from disk, instead of from memory. Engine could save source to disk as it arrives. If you care about saving memory, don't open devtools. Not intention to impact stack traces, but might affect it. Don't want to censor function names, but that does that change offsets in stack frames or line offsets?

KCL: With the option 2 proposal - a meta tag could be toggled off with a staff cookie, reload to see code with .toString() working

JHD: my proposal doesn't yet have a way to censor function names for specific stack frames, must address this before stage-2. Should we censor entire stack frames? Kinda requires per-function pragma control. Hiding internal helper functions. Pragma approach seems likely to handle this. Seems like there's some overlap between these proposals. Call it a potential cross-cutting concern to be addressed in stage 1.

TST: We added support for essentially this in spidermonkey based on memory concerns in FxOS, could have disabled it in more places if we could have done it in a more granular level, there were extensions that depended upon toSource that we didn't want to break. This was before lazy parsing of functions and "relazification" (unparse a function and discard bytecode after it hasn't been used for a while).

DD: I was talking to Adam and he said it wouldn't be a quick change because of similar issues. But given how much memory it involves, this is worth pursuing.

MLS?: maybe pass a function *into* some feature to ask for its source code (?)

DD: seems isomorphic. Hard to mass-censor a lot of functions if you use a runtime `f.censor()`.

Andrew: we globally enable CSP, so there is no eval(), the only reason we don't censor functions is because we get it for free with spidermonkey's disassembler (we don't need the original source), we'd like a global switch since we don't need/want it

BFS (via ?): node should be fine with a per-package switch

CP: how will people know that their code will actually work or not, it doesn't throw an error when you call .toString, hard to discover revealed problems. Maybe throw an exception?

DD: like any other change to the global environment, use the test suite to discover problems. Haven't considered throwing exception, seemed needlessly painful given how many functions already return "[native code]".

CP: we usually create a bundle, during that process we can discover which functions we never call .toString, we could add the pragma on those functions just like we do tree shaking.

DD: that's an argument for the pragma form, right?

CP: yes, but for tools to mark it, rather than people

MM: regarding exceptions vs "native code" string. The "[native code]" string was chosen specifically to *not* evaluate to anything (eval will throw with a syntax error).

SGO: are these mutually exclusive? two separate problems: author tries to protect their own code from leaking, vs consumer trying to reduce their memory usage. pragma is good for the former, switch is better for the latter, neither address both.

DD: yeah, they both sound useful. with enough preprocessing either one could be used, but maybe we should provide both.

DD: will work with michael to add the .toString flag, and also work separately on a pragma proposal.

DD: propose stage-1 with that plan (both). Who would I need to talk to to do both?

MM: I'm up for stage-1 but not for doing both.

#### Conclusion/Resolution

- Stage 1 acceptance


## 13.iii.k new Set builtin methods for stage 2

(Sathya Gunasekaran)

- [slides](https://docs.google.com/presentation/d/e/2PACX-1vR3U78vWdnSujZoGKR1EZOvhrIDJMcypwq3T0FY4bz-lG8LncSD_x89N2eS8anu5adviz1mhSrnf9lG/pub?start=false&loop=false&delayms=3000)

SGN: I'm championing a proposal by michael wadas, add Set.prototype.union(iterable), returns new Set with the intersection. Also Set.prototype.difference, symmetricDifference. Also all the other Array methods: filter, map, find, etc

SGN: omits some that don't make sense: fill, findIndex, includes (already has `has`), shift/unshift/pop/push, reduceRight, sort (sets are unordered, no indexes)

SGN: questions: include these on Map too? Or make two separate proposals (one for Map, one for Set). Also should we use the existing naming convention, or Set-specific names? addAll/union, removeAll/subtract

JFI: I'd like to see the array-like methods for any iterable, not just Set/Map

MM: addAll/removeAll sounds like it should be imperative (modify existing array), union/subtract return new object.

TAB: Python has both, with different (maybe bad) names

TAB: "difference" doesn't suggest which side is which (A-B vs B-A), docs are opposite of what python does. "subtract"/"minus" is more clear. "symmetricDifference" is a very complicated spelling, "xor" would be better.

SGN: major programming languages use "symmetricDifference". Please comment on the issue

RBN: would like methods to test sets: is A a proper subset of B? etc. I like the proposal, would like to see more operations

SGN: sounds good, I have an issue up with extra methods (isDisjoint, etc), please comment on that

JHD: want an is-it-the-same-set method, sounds like shallowEqual, sounds like Sebastien's proposal from several meetings ago, which wasn't received with warmth

MM: that was because it doesn't generalize. With a set, "shallow compare" is clear, but in other areas it doesn't make as much sense. There is no general abstraction-independent meaning to "shallow".

JHD: I wouldn't want to see these useful Set methods blocked because we're waiting to figure out the Map methods. But, looking to the future, being able to say "collections of things have a unified way to deal with them" would be important. Might want to consider carefully before breaking naming consistency with e.g. Array, the naming choices might be subpar, but consistency is good, so maybe avoid shipping some methods now if that breaks consistency in the future.

DD: methods on iterator.prototype isn't sufficiently ergonomic, you need an extra set at the end to re-convert it into a map or set, which is silly. you should be able to map over a set and get another set.

AK: the Set-specific operations are useful and independent enough that maybe they should be in a separate proposal, unblocked by deciding the other method names

WH: what happens when the set behaves like a multiset?

SGN: no current way to write equality. haven't looked into multisets

WH: You can encounter altered equality in the proposal. The operations like union, difference, symmetricDifference, etc. are generic; they call generic operations to test, insert, and delete elements. I was asking what happens when those latter operations behave in a multiset manner.

KVR: sets plus equality provides non-intuitive properties

SM: it should be clear from the naming convention which methods return a new set and which modify the target

SGN: It sounds like we want to split this into two proposals: Array-like methods, and Set-specific methods. Shall I split these up? Can I go to Stage 2 for Set-specific methods?

MF: I think you should look at Ron's suggestions before you go to Stage 2.

SGN: So.. Stage 1?

MM: I support both at stage 1

#### Conclusion/Resolution

- Stage1 for Set-specific methods
- Stage1 for the more generic methods Array-like methods (for both Set and Map)
