# September 27, 2016 Meeting Notes
-----

Brian Terlson (BT), Michael Ficarra (MF), Jordan Harband (JHD), Waldemar Horwat (WH), Tim Disney (TD), Michael Saboff (MLS), Eric Faust (EFT), Chip Morningstar (CM), Daniel Ehrenberg (DE), Leo Balter (LEO), Yehuda Katz (YK), Jafar Husain (JH), Domenic Denicola (DD), Rick Waldron (RW), John Buchanan (JB), Kevin Gibbons (KG), Peter Jensen (PJ), Tom Care (TC), Dave Herman (DH), Bradley Farias (BFS), Dean Tribble (DT), Jeff Morrison (JM), Sebastian Markbåge (SM), Saam Barati (SBI), Kris Gray (KGY), John-David Dalton (JDD), Daniel Rosenwasser (DRR), Mikeal Rogers (MRS), Jean-Francis Paradis (JFP), Sathya Gunasekasan (SGN), Juan Dopazo (JDO), Bert Belder (BBR), James Snell (JSL), Shu-yu Guo (SYG), Eric Ferraiuolo (EF), Caridy Patiño (CP), Allen Wirfs-Brock (AWB), Brendan Eich (BE)

-----

## Introduction



Template link: https://github.com/tc39/Reflector/issues/19#issuecomment-234276510



AWB: Will ne sitting in for John Neumann

RW: Notes at reflector

- Note taking TBD by subject

AWB: Agenda approval?

- https://github.com/tc39/agendas/blob/master/2016/09.md

- Approved

AWB: Previous meeting notes approval?

- Approved

AWB: ECMA414 acceptance?

- Feedback was: missing normative text
- Second edition written to address those issues

MM: (clarifying motivation?)

WH: I had the same feedback when this initially came up in TC39. A standard can't be just a bibliography; it needs to state what it's standardizing.
István SEBESTYEN: Waldemar, it is more than a bibliography. It is a compilation of normative and not-normative ECMAScript components, with normative and informative links. What is important that it is standard that will not change every year, and when fast-tracked is fine under the RAND IPR Regime of ISO/IEC. This solves the problem that Ecma will not have to fast-track its RF ECMASCript standards every year, which would not work...Too fast, for keeping the Ecma and ISO specs in synchronization.

AWB: Please look at linked pdf, review and have decision for Thursday

WH: Little bug in ECMA414: What's a "share conform"?

DH: Someone on my team can archive ecmascript.org in a way which is more maintainable. Are we OK with keeping a static snapshot of bugzilla as well as the wiki?

DE: preserve open/unaddressed items?

DH: Looking for approval of snap shot?

#### Conclusion/Resolution

- Agenda Approved
- July Notes Approved
- Snapshot of bugs.ecmascript.org approved
- Review ECMA414



## Contributor Agreement for Guests


AWB: Individuals who are not currently representing an ECMA member, please talk to Brian and make sure to sign the contributors' royalty free patent grant.

BT: https://github.com/tc39/ecma262/blob/master/CONTRIBUTING.md , please sign the document listed there



## Agenda scheduling

- Proxy integrity checks discussion first thing Wednesday morning
- Node module discussion 11-3 (at least)
- Saam is here for Tuesday, wants to present OrdinarySetPrototypeOf
- Rest/Spread property review not ready Tuesday
- Target 12:30 for lunch


## 7 ECMA-262 Status

(Brian Terlson)

BT: Tooling: Ecmarkup is now much faster, and written in TypeScript

YK: We are writing the Handlebars spec in Ecmarkup, and it is definitely helpful.

RW: We are using it to specify the IO Plugin standard for Nodebots

BT: TypeScript is using it and C# is considering using it as well. The question for me is, what kind of changes does it make sense to add, when there are feature requests that aren't used in ECMA-262? E.g., * and + for grammars. My feeling is to add things when they don't compromise 262. I would break out a separate notational conventions document, including * and +, which had all of the features of the tool. This potentially impacts the editorial conventions in 262, though I will work to not require those changes.

WH: I wouldn't want to use * and + in the ECMAScript grammar.

BT: Agree; these are meant only for other languages.

BT: With Domenic, I am working on integrating better with the spec authoring tools in HTML-land. This includes standardizing on a bibliography format so we can share symbols and cross-reference well.

BT: Spec fixes since the last meeting:

- Fix to GetOwnPropertyDescriptors (discussed at last meeting)
- Editorial fixes
- Async functions PR is out
  - Editorial flux
  - Please review PR


AWB: Any observable changes?

DE: One semantic bug reported

BT: But no major changes

BT: Grammar plumbing in spec, previously "hand waved", but now fully written

AWB: How many implementations are?

BT: At least two

EFT: We have full patches, I think that's implementation experience

AWB: If we found bugs, they should be reported

BT: A small bug was fixed

BT: Editorial fix: UniqueFormalParameters is the new StrictFormalParameters

BT: Normative bug fix: toPrecision

BT: new.target/super inside eval; needs consensus?

KG: The spec previously allowed super calls inside functions inside eval, even though they are prohibited by static semantics in the main function

AWB: I believe this is a hanging loose end from when we stripped out super from normal functions

BT: Yes, and it is actually disallowed within arrow functions. It's weird.

AWB: Now, with the PR, there are "static semantics" that apply to the eval that prohibit super in exactly the same situations where they would be prohibited not in eval.

BT: Sounds like we have consensus. Also, same deal with new.target? Good, I'll take those PRs then. There are some further needs-consensus PRs later in the agenda.

AWB: We have two more meetings before ES2017 is done. If there are things that are targeting that release, the clock is running. If there are things in Stage 3 waiting for two implementations, there's not a lot of time left--the champions of those features need to be championing getting things implemented.

SG: For SharedArrayBuffer, we have implementations well underway and fairly mature in multiple browsers, but the memory model is still under development. How should this apply?

AWB: The memory model is part of the spec, and you need this to verify that the implementations match the spec.

BT: From my async function experience, I can also suggest that you keep in mind that the PR to merge into the spec is a lot of work. We may want to put PR work as part of Stage 4 requirements, as the standalone spec often has some hand-waving.

RW: I agree; even for exponentiation, a much smaller proposal, it was a bunch of work to integrate everything and make it all concrete

YK: implementors hesitant when issues are left open, concerns that these maybe long term issues.

SYG: [For SharedArrayBuffer] Implementations will do what will work out for real chips; we have to capture a memory model that other people can reason about, but the implementation won't change since the hardware does something. I don't want to speak for everyone, but I think SpiderMonkey and V8 agree on this.

WH: The bug we ran into was that the memory model formalism was allowing synchronization without atomics; that's not something we want to allow but is hard to fix.

#### Conclusion/Resolution

- Please review async functions PR



## Stage 4 Process Update

BT: Include PR for Stage 4 approval?

"Editor has signed off on your PR"

#### Conclusion/Resolution

- Editor Sign Off on PR
- Done: https://github.com/tc39/process-document/commit/e0009705959360f35cf44468c5568e9d5bdbae0d



## 8 ECMA-402 Status


DE: formatToParts has been removed from draft due to missing implementation. The only implementation was Intl.js
- Would like to roll back to Stage 3
- Spec can easily accommodate reintroduction


#### Conclusion/Resolution

- Stage 3 downgrade


## 9 Test262 Status

(Leo Balter)

LEO: Small updates, harness, etc. I would like some help on reviewing Test262 patches and writing tests, as I don't have enough time for everything.

BT: If used node harness in the past and didn't like it, try it again!
- host specific stuff separated
-


LEO: Need to work on update for TR104

DE: Were we going to retract this document?

AWB: This document is informatively referenced by ECMA 414; István was suggesting to retitle as TR414? (since it also includes ECMA-402 tests)
István Sebestyén (sitting in CH...): No, that was a mistake on my side... Sorry... I wanted to keep the original TR number (but 2nd Edition), which I think it is TR/104? I do not have the Ecma TR list in front of me....


LEO: Need to arrange further Test262 work


(discussion, re: agenda ordering, etc)

(break)


## 11.2.f OrdinarySetPrototypeOf fix / Prototype loops and Proxy objects

(Michael Saboff)

https://docs.google.com/presentation/d/1kHuEtVc-GPp3rbddMVBATKYQ5qLz2o4LnNGUNg8cCz4/edit?usp=sharing

SBI: The cycle check in OrdinarySetPrototypeOf bails out on Proxies, which it has to, as it can run any code for the prototype. It's only possible to really validate in that case.

- bug: anything with setPrototypeOf

MM: Does this allow users to detect whether an object is a Proxy?

MLS: Let's discuss the feature first

SBI: Maybe, we'll have to think about this

SBI: The general motivation is to make Window or Location, which use the ordinary get/set prototype methods, but still make sense to have cycle checks for.

EFT: We ran into this in Firefox as well

SBI: Do we think it's a goal to prevent prototype loops? I'm thinking about cases that use [[Prototype]], which ordinary objects use, and host objects like Window and Location should have these checks as well

MM: disagree, re: proxy

SBI: The proposal is: embedders like HTML should have the benefits of this cycle check

- get the benefit of the cycle trap


BT: objects that have exotic GetPrototypeOf should be allowed to have cycle trap?

AWB: You have to be more restrictive than simply an exotic SetPrototypeOf

SBI: Can you detect whether something is a Proxy by trying to induce a cycle check?

MM: The simplest stance would be to drop the cycle prohibition altogether, since it can't coherently be enforced

AWB: Spec has no cycle prohibition

SBI: Proxy not have [[Prototype]] ...

MM: If circularity requirement dropped...

DH:

1. OrdinarySetPrototypeOf does cycle check? Yes
2. Impossible to set prototypes with proxy without cycles? Seems wrong

MM: Last time we discussed this, one proposal was to use the [[Prototype]] of the target for the loop checks (going down the target chain as necessary). That's coherent because it proves there can't be an instant in time where there's a cycle.

SBI: I think this is not what I'm trying to argue. I'm saying, consider other objects, do we care about cycle checks? I am proposing

MM: w/o proxy no cycle checks agree. But we have proxy, so disagree

SBI: This spec proposal is just to keep Proxies with the same behavior, and bail out in that case as we do now, but allow embedder exotic objects to have the cycle check.

Proposal:

As was mentioned in the original bug (comments 9 & 11), a loop check could be performed through ordinary lookup of each object's [[Prototype]] without trapping to any handler. Specifically:
Eliminate step 8.c.1 from 9.1.2.1
Change 26.2.2 Properties of the Proxy Constructor to state that proxy exotic objects have an immutable [[Prototype]] property of null.
Remove the comment in section 6 of the possibility of prototype loops.

AWB: to host objects, ie. location. Anything else where host might create, but not using proxy, defining non-standard behavior—there is any easy out. Existing cases are doing checks.

- An exotic object that uses [[Prototype]], can override GetPrototypeOf, but has to be idempotent.

EFT:

DD: Doesn't work because document.domain, which allows to change whether window is same origin or cross origin. Window will change from prototype to null

AWB: If you can only change to null, can't create a circularity

SBI: Could give Proxy [[Prototype]] of null just for this case

AWB: How?

DD: This would blacklist proxy

SBI: some flag? A square-bracket whatever, my GetPrototypeOf should make me terminate the lookup

MM: Using the proxy target's prototype, follow the target's chain?

SBI: Would work

AWB: How relates to HTML problem?

EFT: Don't know

KG: Instead of whitelisting ordinary objects, we would change this loop for Proxy.

AWB: Decided that proxy isn't the problem.

- issue is non-Proxy

MLS: The catch is too broad and catches the wrong things

KG: (Kevin, you had a point here and I missed it, please fill in if you can)

MM: only w/r to the cycle check. Anyway, I see that my proposal does not add value. I withdraw the objections.

YK: I assume you don't want to be able to detect whether something is a Proxy.

AWB: You could detect whether something is a Proxy by <insert exact procedure, which would throw only if not a Proxy>

MM: A Proxy could throw to prevent it from being detected in this way.

DH: Is it sometimes poss if it's a proxy, or

DD: Glad we nailed that down; I think whatever we do here will work with that.

YK: reads are always exact same to Proxy.

- Presently stop you anytime you enter a cycle
- if restriction on the [[Get]] side, always have to do it


AWB: Have now is what we want. Overhead on a [[Set]], which almost never happens. Allows optimization on [[Get]].

MM: I think it's important to note that we have a "yes" for the ability for Proxies to be undetectable

SBI: This proposal, with respect to Proxies, is indistinguishable from current behavior

YK: if possible to demonstrate that a proxy can evade, then we need to be aware of that

MM: if proxy chooses to evade, then it always evades. Not all proxies evade, just those that already.

MLS: I agree that we don't want to change the observability of whether something is a Proxy. I don't want to go down the rabbit hole of whether we have that or not. We can just discuss whether we change that observability.

MM: Agree

AWB: host objects allowed to define GetPrototypeOf behavior, but doing it in SetPrototypeOf


MLS: Discussion is to change on the [[Set]] side

DD: Some mechanism to allow host objects to "opt-in" to this check

BT: an opt-in seems better
- Can blacklist proxy, but then implementations have to think about how that effects
- An additional flag?


AWB:
- Provide hooks in the spec?
  - Opt-in or Opt-out
- Problem for HTML spec? It can just say so: "this object must be included in ..."

BT: Let's have a separate discussion about whether we should have either no affordances for HTML, whether we should have prose allowances, or whether we should be completely formal. This should be a separate agenda item.

AWB: Do we need affordance for _this_ particular case?

BT: This case: reasonable for impl to want to have a custom SetPrototypeOf trap for the purpose of stability

EFT: We have hit the end of the timebox

BT: Should be possible for impl to impl HTML and ES and conform to the spec. Arguably, Normative prose: an impl "might" say "do circ check..."

DE: Let's put smallcaps MIGHT all over the place in the spec!

AWB: Spec language that checks "has OrdinarySetPrototypeOf", do...

AWB/BT: agree to find some language to resolve? For example, some prose indicating whether a [[GetPrototypeOf]] internal method is suitable for these circularity checks

BT: Or, add an additional slot to all objects that's called [[GetPrototypeOfForCircularityCheck]], which has sane defaults, opts in or out. Allows host objects to set as necessary

BT: Or, Domenic's proposal, give a host callback which you pass the object to to do this sort of check (like the loader hook)

#### Conclusion/Resolution

- Allow host objects to participate in circuluarity checks
- Need a way to allow opt in/opt out. Editor discretion and review required
- Mark Miller is a reviewer

## 11.i.a ArrayBuffer.transfer retraction

(Shu-yu Guo)

SYG: There was a proposal to transfer one ArrayBuffer to another, and detach the source. This was implemented in Firefox, and removed. I think no browser currently ships it. I talked with the original champion, Luke Wagner, and he is happy with this.

AWB: The actual design was proposed by Google initially, this was about resizing ArrayBuffers. One use case was drop the size to 0, and the transfer was a kind of realloc. The transfer was proposed as a cleaner semantics

SYG: Originally, this was for asm.js. The particular need for this is reduced by WebAssembly. Given all of these considerations, I am retracting the proposal, in case anyone feels strongly about not retracting the proposal. There is a particular use case for transferring regular ArrayBuffers into SharedArrayBuffers, but I think that should be handled by a separate proposal.

YK: So no one implemented it?

DE: This feature work is continuing under ChangeHeap in WASM, which does this in an instruction, with implementation underway in V8. Also, I think Chakra has some version of this.

DD: Some more context, transferring ArrayBuffers is something we do all the time, e.g., in Streams, which also does resizing

AWB: original motivation was resizing without copying

(This is an updated link to the original gist: https://gist.github.com/lukewagner/2735af7eea411e18cf20 )

#### Conclusion/Resolution

- Retracted


## 10.2.a Legacy RegExp Features

(Claude Pache, Mark Miller)

https://github.com/claudepache/es-regexp-legacy-static-properties

MM: All credit goes to Claude Pache, I am championing this proposal as he does not sit on TC39. I'd like to ask for Stage 1.

MM: The RegExp constructor has always had these bizarre properties like RegExp.$0. These are spooky action-at-a-distance global communication channels. The last RegExp match by any RegExp instance in that realm, the result of the match results in all of this extra information on the static properties. The good news, historically, has been that we never made it official, but unfortunately all browsers implement it, and so cross-browser JavaScript counts on it. At this point, we're better off codifying it so we're all in agreement on the precise semantics. We went through the same reasoning with `__proto__`, and it was great that we did that, as previously there was cross-browser disagreement. Like `__proto__`, this would specified as normative-optional, Annex B, so that environments which remove it (e.g., SES) can claim to be compliant without this feature. The properties are specified as configurable and actually deletable. Because a realm is not in a position to police other realms, this only updates from changes made in the same realm, and it also doesn't apply to subclasses. We are only providing this weird, non-local behavior in the narrowest box that we can, which accounts for what is needed to accommodate web reality.

DE: Big fan of documenting web reality in specs like this, so that people can implement a real web browser just based on specs. seems implementable. realm check not trivial, but possible. Does change things, but worth trying. Will try in canary and assess what happens.

YK: Recently bitten by statefulness of RegExp, lastIndex

DD: (question about matchAll)

MM: Orthogonal to this

YK: Can we make a new RegExp that doesn't have these things?
- Used `const r = /.../g` and had state changes :(

MM: No relationship between these issues and the proposal

YK: Agree, was asking if there was a way to downplay existing problems if there is a way to do that?

AWB: Can we also apply this to `/u`?

MM: Don't believe that use of that feature cuts off spooky action-at-a-distance behavior

DE: Impls shipping unicode regexp, don't want to break web

JHD: This is a refactoring hazard, in case someone adds /u to an existing RegExp

MM: I'm proposing that we leave these on for Unicode RegExps, as per Claude's proposal, which just cuts things off for subclassing

DE: Claude's proposal stashes the Realm on the RegExp in RegExpAlloc, and checks it from RegExpBuiltinExec

MM: We should revisit this mechanism after Stage 1

MLS: How should we discourage people from using it?

EF: How about we put that language on MDN?

JHD: Annex B says that programmers should not use the features

YK: In some ways, Annex B is necessary, actually.

DE: We can discuss this proposal without discussing the nature of Annex B

YK: Can we discourage?

JHD: Yes, we already do

WH: The proposed spec has headings such as "get RegExp.$+". I assume that this means that the RegExp object has a property named "$+", but "get RegExp.$+" doesn't really parse as spec text because + is an operator. What formalism should the spec use for referring to these?


MLS: is this list the intersection or the union of what browsers already ship?

JHD: based on my previous testing, the intersection

AWB/MM/MLS all agree that with verification, intersection is best

#### Conclusion/Resolution

- Stage 1 acceptance
- Stage 2 acceptance
- More work needed to come to clarity on the realm issue, namely when realms are saved and checked against what

- Move repo to tc39

Reviewers:
- DD or DE
- AWB
- BT will review as editor


## 11.i.d ULEO, Undefined-Like Exotic Object

(Brian Terlson)

BT: Let's discuss intent first: Layering of HTML and ECMAScript. In some cases, HTML hand-waves some prose to do things differently for the ECMAScript spec, or actually has some spec text to replace ECMAScript spec text. Currently, you cannot be conformant with both HTML and ECMAScript at the same time, so browsers choose HTML compliance and are not fully ECMAScript-conformant. There are several issues here, probably dozens.

WH: Clarify?

BT: From a spec perspective, it's not possible to be spec compliant in a browser. Several issues

- `document.all`: an object that appears to be undefined for ToBoolean, typeof, abstract equality, however it's actually an object, and if you array index it, you get properties.
- This was born of code written to detect not-IE with `typeof document.all === "undefined"`, but still used `document.all` directly, eg. `document.all[0]`

(Does someone want to put some examples?)

HTML has some sort of legacy constraints, and to the extent that we want web browsers to have ECMAScript-compliant implementations, those legacy constraints apply to us as well.

AWB: Doesn't bother me that the implementation is a "dialect". What bothers me is introduction of features that specify host implementations, eg. HTML

YK: I think what you're saying is overly broad.

- legacy constraints can be addressed through some other -

DD: We should not be making a spec which is bullet-proof against bad actors in other specs.

BE: Not proposing a general purpose escape hatch for all actors

MM: Can you show the details of your proposal?

BT: believe that it's valuable to have the spec reflect reality of today, ie. HTML in browsers, even if it adds complexity.

- ULEO: do not want to give random host permission to have these and call it conformant
- Link to a specific HTML clause, "if you are implementing this specific spec text, then you can use this, but otherwise cannot"

YK: That would be a cycle in the spec text

DH: We could say, we don't want to add ULEOs in Node, and this upreference would prohibit that. How would that be for JSDOM?

YK: If we give people general-purpose hooks, people may end up getting boxed-in and abuse it.

MM: Do you create a JavaScript platform where users are able to write everything in JS?

BT: I am proposing that JSDOM would not be able to have a ULEO. It would be a spec violation for Node to expose an API for this.

DD: I think that's fine that JSDOM doesn't emulate document.all

BFS: I think that's fine; I don't think Node cares

DH: Either nobody wants this, in which case why write it in the spec, or it is wanted, in which case we need to expose it more generally.

BT: No, there's a middle ground

YK/DH: (discussing reality of prohibiting hosts from implementing)

DD: What if we identify this as a mechanism for "legacy host"...

DH: Why do anything at all?

BT: Should be possible for an ES implementer to read this spec and know how the platform works. `document.all` cannot be described by the spec.

YK: You can use the V8 API for this from any native Node module?

DD: Yes, unfortunately

BT: Practically speaking, we do not want ULEO to be encouraged to use this feature.

DH: `document.all` is not something that real code in browsers are having problems with

AWB: Happy to have the HTML spec handle this, replace `ToBoolean`

BT: That's what this does

DH: As soon as there is a thing in the spec, it's very hard to stop people from using it. This requirement comes from building a web browser, and it's platonically a real case for when monkey-patching makes sense.

- There is a delta to JS semantics that is the browser semantics

Discussion re: Annex B reality.


- The uplink won't prevent anyone from using it

YK: If we make this restriction and there are other use cases, we can loosen it later

BT: But I don't think there are other use cases

DH:



CM: All for implementors to break the rules if they need?

DD: Where does that stop?

AWB: Annex B is exclusively about things that are already in the language

RW: We added the dunders to Annex B, which were host extensions but reflected reality

EFT: Agrees

AWB: But those pertain to Object

RW: Are you keying on `document` as an entity specified elsewhere?

AWB: Yes, or any

(missed discussion due to etherpad fail, but here's the thing: you don't want to know what was said.)

DH: it's important that we make people feel bad about using these features

Repeated discussion about ownership of this behavior

KG: (attempting to bring it back together)

BT: Nice to normatively "uplink" to HTML spec

BE: So ECMA-262 is going to depend on HTML?

BT: Just trying to explain the requirements.

BE: (describes concerns about falsey objects b/c value objects) (eg throwing the baby out with the bathwater)

DE: This is OK, they are both editing some of the same abstract operations, but one is horrible and scoped, and the other is general and clean; no contradiction.

BT: The baby is safe


BT: So, we are in grudging agreement that we do want to make such allowances, with appropriate scoping. Some changes are needed for the uplink to scope it.
(recaps changes, will offer for review)

AWB: Let's call it something referring to HTML, rather than ULEO.

#### Conclusion/Resolution

- Review feedback
- HTMLDocumentDotAllObject
- Annex B
  - Revising the introductory text to Annex B



## HostObjectDefinePropertyReturnFalse

DD: HTML has `WindowProxy`, when you navigate: things change. Configurable properties disappear. Thought we had a fix, Firefox implemented it, had a signfiicant number of websites that it broke, though it was implementable.

From proposed PR:

> This allows host environments which need to override the Object.defineProperty behavior, for legacy compatibility, to preserve invariants while avoiding breaking web applications that depend on not-throwing when defining non-configurable, non-writable properties on WindowProxy. This does not alter the behavior of Reflect.defineProperty or [[DefineOwnProperty]].


It was not web compatible.

For web compatibility, either:

- HTML could monkey-patch JavaScript, or
- We could modify the essential object invariants


MM: This approach takes the least weakening we came up with to be web-compatible.

DD: The invariants said Object.defineProperty would throw on failure, but in this proposal:

- Allow certain objects to define properties where the operation returns false after failure, but does not throw. https://github.com/tc39/ecma262/pull/688/files#diff-3540caefa502006d8a33cb1385720803R22682


AWB: Why can't we add something Annex B, as we just did? To specifically address this one case?

YK: Why don't we just say that, if a Proxy fails, then it also returns false?

DD: Why?

YK: We used to have a rock-solid guarantee that Object.defineProperty throws on failure, and this is reliable. However, we are now deviating from that.

MM: If we could enforce that, then we would. Firefox tried this, and we didn't achieve web compatibility. I am nervous about this issue too, but it seems necessary.

YK: Then let's make it always return false.

DE: That's probably not web-compatible either

AWB: If you want a reliable check that returns false, use Reflect.defineProperty. Object.defineProperty has been there since ES5. The normal return for defineProperty is the receiver, so it's a big distinguishable value (as false is not an object). It hasn't thrown since the very beginning because of the WindowProxy behavior.

MM: It didn't throw, not because it failed silently, but because it succeeded in a way that broke the invariants, which is worse.

YK: So, this is the best we can do?

MM: This is the best we can do.

BT: The intention is that HTML would define this method, which would...

MM: It can just call the internal define property and then make a decision?

DD: Yes, but pass along all three arguments, because it needs to forward them

DD: I was hoping for a general hook, but OK, we can scope it like this.

MM: only care if the object is WindowProxy and the underlying define failed

DD: Want to check for many cases

AWB: Impl. do this now?

DD: No, they just violate the spec

BT: agrees overly complex. will have to do it as you've asked, but with very specific case rules.

#### Conclusion/Resolution

- Add the new definition of Object.defineProperty in Annex B, scoped with an upreference to what HTML needs


## global (Jordan Harband)

(Jordan Harband)

http://tc39.github.io/proposal-global/

JHD: Last remaining issue was Mark's concern, which is no longer present.
- renamed `System.global` => `global`

JHD: The spec text is based on calling ResolveThisValue

DE: Should work with whtaever the spec calls the global?

DD: No, need to return the global `this`

DE: timing wise, problematic to call ResolveThisValue (when is this executed?). The WindowProxy/Window/global object issue is separate, and needs to be resolved with a separate spec change.

DD: Disagree, but confident in Jordan's intent, will not block consensus

YK: For the user perspective: returns

- `window` in browser?
- `global` in node?

JHD: Yes

JHD: Node semantics are a little different, since it's enumerable and writable.

BFS: It doesn't seem like this should be a problem, to make it non-enumerable and configurable and non-writable.

MF: Wasn't this supposed to be reliable? Making it configurable makes it unreliable.

JHD: On first run, needs to be reliable as first run. Can be locked down via SES

KG: if we make it non-writable and there is existing code that does `global = 1`, that will break.

DD/RW: `writable: true`, can still be locked down by SES

DE: We should require browser-based web-compatibility evidence before bringing something like this to Stage 4

AWB: This is going to be web-incompatible

(General agreement that we should make it writable)


RW: w/r to enumerability: https://github.com/search?p=2&q=Object.keys%28global%29&type=Code&utf8=%E2%9C%93
(Note: this was a misapplication of enumerable, configurable, writable. Specifically: was not thinking about `global` the property _itself_, but the contents of that object. - Rick)

DE: This should have browser web compatibility evidence before reaching Stage 4.

#### Conclusion/Resolution

- Change to writable, non-enumerable, configurable
- Will revisit after changes; seems on track for Stage 3

## 11.i.b Mixins or class extends plain object

(Rick Waldron)

RW: In our Maxmin class semantics, we came to the intermediate conclusion that you can't subclass something that's not constructible. However, should we reconsider inheriting from objects?

MM: We did this because we realized that we could make a function that returns a constructor for this object. This was a nice aha moment.

Discussion, re: mechanisms that can be written in userland code today.

RW: But this creates a bunch of extra lifting that they have to do; why can't they have this in class syntax? Do we want to try to solve this problem?

WH: This is like asking, why can't you subtract two strings? What does that mean?

YK: It would be nice to the community to come to a more crisp answer.

RW: I did present these things to the community about how to do things, but got feedback that that seemed like it was a hack.

YK: Our crisp story: Our class syntax is for subclassing a class.

RW: The alternative I proposed was actually even smaller than the example that they gave, where the mixin would be based on a superclass with methods.

EF: I recognize that there are no proposed semantics at the moment. Is this supposed to actually be syntactic sugar for synthesizing the constructor, getting super semantics, etc

AWB: super semantics work out just fine with a parameterized class [function that evaluates to a class]

DD: There are a lot of notions of mixins; let's scope this discussion to 'classes extending objects'

YK: Actually, extending objects reintroduces all of the ambiguity of ES5

BFS: Let's take a step back from the syntax, and from making this on classes. People want mixins. People want to set the prototype of something. They have a big grab bag of objects, and a big grab bag of things they want to attach with a prototype. They see that class is a way of setting the prototype syntactically, in a manner. I'm asking, do they really want it on a class, or do they really want this syntactic prototype delegation? __proto__ feels like a second-class citizen.

RW: My question to this room is, should we put time into the syntax like class-mixin-basic.js?

YK: Can already synthesize this today by using ```class A extends obj(O) {...}```

YK: Seems like there should be a really compelling reason, since it would just be a few lines of code to make a function which synthesizes this constructor, instead of being built-in.

MF: Is this proposal dependent on this particular syntax, or would you be open to using a distinct syntax for using this?

RW: I just want to raise the general discussion. Would the committee be interested in pursuing this concept of inheriting from an object?

BFS: I'm not in favor of this current proposal, with a runtime check

DE: Can we discuss mixins generally?

DD: In a separate topic

WH: I'm pretty convinced by Yehuda's example that this feature is not needed.

DD: However, we are generally interested in mixins

SM: You might want to have static methods on your mixins. You may also want to have super calls in mixins. React has to interact with whole ecosystems, like Scala.js, which doesn't have the ability to inherit from super. I would not want to encourage these patterns proliferating.

#### Conclusion/Resolution

- Committee is interested in mixins, but this particular proposal is not a direction we want to go in

## 11.i.c Generator arrow functions

(Brendan Eich)

BE: We passed on generator arrow functions after looking through a few alternatives. The only one that seemed feasible was =*>. We passed, and said "revisit for ES7". But actually, people are writing code which uses function*() {}.bind(this)--once you're in class world, you want instance-bound this.

(General confusion about the example shown)

DH: call it back to order, this is too distracting because too much going on \
- refocus on generator arrows

DH: Here's a case where you have a generator which closes over this: tree traversal

YK: closing over `this` in the generator is more prone to leaks

BE: It's not closing over in the generator, it's closing over in the constructor

BT: Maybe we want an auto-binding declaration form

MR: Don't all these arguments apply against arrow functions in general?

BE: We had ASI issues with some things, but the version that works (in the middle)

- `x => x + x`
- `x =*> yield x + x // missing (obvious?) combination`
- `async x => await x + x`

RW: There is also:

- `* (x) => yield x;`

... But has ASI

JM: problematic with multiplication: `var a = foo * (x) => yield x;`

DH: Adding syntax is serious business. We're not taking the union, but the intersection, of these use cases. How often do you need a callback that's a generator function? Each feature needs to pay for itself.

DD: This composes nicely for async generator arrows: async x =*> yield await x

JH: This kind of pattern shows up in observables, so it could have more utility

DH: syntactic sugar should map to strong idiomatic programming concepts, not just for the sake of having all combinations.

DE: Jafar made the case that this is a nice pattern

Too much disagreement?

BE: The case for arrows was strong; this comes up less frequently, since it's for callbacks which bind a generator function.

AWB: In the context of the method pattern like
```js
class C {
    method = (args) => {
        ...
    }
}
```
The generator arrow makes sense as being analogous

WH: Don't like =*>. At the very least, we should use =>* instead.

BE: No, that syntax doesn't work; See the notes from the Nov 2013 meeting

WH: [after looking at notes] The rationale from those notes no longer applies since we're not using ! for async arrow function syntax. We can use =>*

BE: Now agree. We can now use =>*

DE: Doesn't this prohibit * as a prefix operator for the future?

MF, WH: Already taken by yield*

DD: Path foward: Write out this case, with all the justifications, and explaining why the alternatives are not true; find existing user libraries where it'd be helpful to have a generator arrow function, etc.

JM: This case comes up not just for Redux Saga but rather whenever you have a callback which is a generator

DR: You need to create some kind of closure for these sort of situation

#### Conclusion/Resolution

- There is some interest from the committee, but concern that the feature does not pull its weight for adding a new piece of syntax
- Plan to revisit on Day 3 to see if we can get =>* to stage 0 at least, as part of DD's async iteration proposal


## 11.2.a Named Capture Groups

(Daniel Ehrenberg)

Slides: https://docs.google.com/presentation/d/1b3CigDqepiupv7jQbHyKVkRG72t2qIxeN_DnX75jTY8/edit

https://github.com/littledan/es-regexp-named-groups

DE: (presents from slides)

DH: IdentifierName, not Identifier

WH: Named back-references have nothing to do with Unicode; would be much happier if they were usable in any regular expression. The question we don't have enough data on is whether this would be web-compatible.

Discussion of syntax, there are alternatives


Discussing

```js
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
let result = '2015-01-02'.replace(re, '$<day>/$<month>/$<year>');
```

KG: A web-compatible option would be to make `\k` be `k` in legacy regexps unless there is a `(?<` in the regexp.

WH: Yes! That would be web-compatible for non-Unicode regexps.

BT: Any data collection on `\k`, also collect data on all escape sequences

`\k<`?

BT: valid today?

Yes


DE:

- \k not available in non-Unicode RegExps (backwards compatibility)
- Option: Python-style backreference syntax (?P=name)
- Option: Revisit (with data) whether it's possible to add this new escape


DE: group names overlap with of match object

- Early Error
- Put names in separate inconvenient "groups" object.

DE: Can develop as early error that can be revisited

JHD: Can we prefix with `$`?


Properties:

- length
- input
- index

https://github.com/littledan/es-regexp-named-groups#overlapping-group-names


#### Conclusion/Resolution

- Stage 1 acceptance
- Property Smashing


## 11.ii.e Unicode property escapes in regular expressions

(Daniel Ehrenberg, Mathias Bynens)

https://docs.google.com/presentation/d/1o31S9RqDdkoWW2zfPMNIZdPDIp25Rr0-XW0gro_cskk/edit#slide=id.p


DE: Why `\P`

- The Unicode Consortium's UTS 18 recommends it
- All other programming languages surveyed follow UTS 18 here
- According to Mark Davis, there are many overlaps between property values and keys, so clever abbreviations are not recommended

DE:

- Disallow extending Unicode property support for optimal interoperability https://github.com/mathiasbynens/es-regexp-unicode-property-escapes/commit/4a5f49d19eb5651467e04d84c660a6230dad8334


#### Conclusion/Resolution

- Stage 2 acceptance
- Reviewers:
    - Bradley Farias
    - Waldemar Horwat
    - Allen Wirfs-Brock
