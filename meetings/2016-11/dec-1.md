# December 1, 2016 Meeting Notes
-----

Allen Wirfs-Brock (AWB), Waldemar Horwat (WH), Jordan Harband (JHD), Thomas Wood (TWD), Brian Terlson (BT), Michael Ficarra (MF), Adam Klein (AK), Jeff Morrison (JM), Chip Morningstar (CM), Dave Herman (DH), Yehuda Katz (YK), Leo Balter (LEO), Sebastian Markbåge (SM), Kent C. Dodds (KCD), Kevin Gibbons (KG), Tim Disney (TD), Peter Jensen (PJ), Juan Dopazo (JDO), Domenic Denicola (DD), Daniel Ehrenberg (DE), Shu-yu Guo (SYG), JF Bastien (JFB), Keith Miller (KM), Michael Saboff (MLS), Chris Hyle (CHE), Alex Russell (AR), Brendan Eich (BE), Caridy Patiño (CP), Diego Ferreiro Val (DFV), James Kyle (JK), Eric Ferraiuolo (EF), Mathias Bynens (MB), István Sebestyén (IS), Mark S. Miller (MM), Cristian Mattarei (CMI), Brad Nelson (BNN), Jafar Husain (JH)




-----

## 4 Approval minutes from last meeting

AWB: Approval of previous meeting minutes?

IS has distributed the minutes via TC39 Email Reflector and has also uploaded it on GitHub.

#### Conclusion/Resolution

- Approved


## 6.i Determine 2017 TC39 meeting dates, locations, and hosts.

IS: WE said that in 2017 there will be no European meeting. But if nothing else works Ecma and Switzerland are always a fall-back possibility for organization of TC39 meetings. Of course we need a few months lead-up time.
I will also bring up the issue of the TC39 at the GA next week. Maybe I can find some additional hosting help in the Bay Area. Last point (not said in the meeting): we may try to access some of our university members, Universities usually easily have sufficient large rooms, especially if we come during a time when there is no teaching.


AWB: January meeting at Salesforce.

DG: Yes

AWB: March, May, November still open.

DD: Looking into May in New York

IS: We could also have it in Europe, in Switzerland

AWB: We prevously decided not to have a Europe meeting, but we'll have two east-coast meetings. We should find the meeting place for March ahead of time

SYG: Moz can host, but don't have the space necessary for the size of this group now

AWB: Last meeting 40+

JHD: I'm looking into hosting, tentatively for November.

AWB: What about Google New York in March rather than May?

DD: Maybe

KCD: PayPal can host in March, tentatively. My manager supports it.

AWB: PayPal has hosted in the past.

#### Conclusion/Resolution

- January: Salesforce San Francisco, Jan 24-26
- March:  Paypal  San Jose, March 21-23
- May: Google New York, May 23-25
- July: Microsoft Redmond, July 25-27
- September: Bocoup Boston, Sept 26-28
- November: AirBnB Bay Area, Nov 28-30 (tentative)



## 12.ii.c Promise.prototype.finally

(Jordan Harband)


JHD: Looking at the spec, .catch() calls out to .then(), and .finally() should do the same thing. This removes the concern that I raised about how we should do this wrapping check--we'll just follow what .then() does.

Details in PR: https://github.com/tc39/proposal-promise-finally/pull/14#issue-192162240

Downside of finally calling into .then:

- another call added
- another place where spec created functions are exposed to user code.

AWB: Implementations can do lots of things to make the overhead of closures go away.

DE: Actually, it's hard to eliminate the allocations totally, in some cases, if it is bound to a particular thing.

AK: And we are seeing this with Promises; we are doing a lot of work to optimize, but we are still having a fight with Bluebird as they don't care about following the expensive parts of the spec.

JHD: Even if Promises call into methods, most parts of the spec call directly into internal algorithms.

AWB: We shouldn't permanently introduce inconsistencies because we are having trouble dealing with coming up with optimizations in the short term.

DD: We could further remove the way Promises call into internal methods, e.g., for catch. Maybe that would be web-compatible, even if it's a technically breaking change.

JHD: Seems like this comes down to, do we prefer the observability or the consistency?

MM: I prefer consistency. finally and catch should be consistent with each other.

AWB: This changes the requirements for subclasses, so they have to implement three methods instead of one.

YK: Let's come back at a future meeting to go for Stage 3. then doesn't seem like a good kernel method.

AWB: I'd want to understand the benchmarks better; is this all microbenchmarks?

BT: ecmarkup improved build times by 25% by using Bluebird rather than V8 native promises.

YK: The gap is partly spec compliance and partly implementation quality. Ember does get faster

MM: What are the use cases for Promise subclassing?

JHD: Probably not much usage on the web at the moment.

DD: Because we have the duck type chaining assimilation system, we don't need subclassing.

MM: Would it be web-compatible to kill Promise subclassing?

AWB: What, are we going to introduce final classes?

DD: Just not call into the kernel methods, just call the internal algorithm. It would be more like map, rather than based on kernel methods.

YK: Maybe we should make a protocol for await, to override behavior, rather than the thenable assimilation protocol. I'll come up with a more concrete proposal in the future.

AWB: You can pursue a brand checking mechanism as well, and this may lend itself to advanced JIT optimizations

#### Conclusion/Resolution

- Remain at Stage 2
- Solicit reviews from both spec text versions by January


## 12.ii.e Variation on UnambiguousJavaScriptGrammar

(Dave Herman)

DH: Goal is to get to Stage 1 and discuss further with Node, whose represenatives weren't able to make it today.

AK: Thanks for articulating your goal clearly at the beginning!

DH: Script or module?

AWB: This isn't a new question. We had the same discrimination dilemma before between scripts and CommonJS scripts, which are actually function bodies.

DH: The goal is to allow your module source file to always be interpreted as a module; this is useful on the web as well.

WH: You can trivially do that today without needing any proposal. How is this a motivation?

DH: Node's proposal: Let's mandate that you have at least one import or export statement in the module grammar. Then, zero overlap, so tools can disambiguate.

AWB: A problem with that proposal is chapter 16. An implementation is allowed to extend semantics that would make import or export statements parse in scripts.

DH: Node's proposal: If there's out-of-band data indicating whether it's a script or a module, then early error for presence/absense mismatch. If there is no out-of-band data, then decide based on presence.

DH: This violates some important constraints.

WH: When deciding based on presence, you can completely change of meaning of an entire file at the end of the file.

DH: Also `export {}` is a weird magic incantation.

DH: Don't want to mandate a bogus export even if living in a world in which there are only modules.

DH: Alternate proposal: `"use module"` at the beginning of the file. Don't mandate it, but that's a way to switch into module mode. Not required for `<script type="module">`.

WH: (in regards to using the presence of an import statement to distinguish scripts from modules) A script can never import a module?

DH: That's true now. That might not be true in the future.

(Discussion about import statements in scripts: If we allowed that, then the Node proposal would break.)

DH: I don't want to force either `export {}` or `"use module"` in an all-module ecosystem where it is indicated out-of-band. Also, refactoring-wise, bad if removing an import changed semantics significantly.

DH: So, the proposal is instead, "use module", optional to force into that mode, basically the same as `export {}` would've been.

WH: Is this your proposal or Node's proposal?

DH: This is my variation to their proposal.

AWB: Why not have this happen on Node's part, now? Couldn't Node look for explicit imports or exports, and tell developers this, and implement "use module"?

DH: That's saying something about the meaning of content in JavaScript which deserves standardization.

DD: If it only means something in one embedding environment, then it can be done at their level.

JM: Maybe this should work across environments.

AK: Yes, that's why we need to discuss here, if it should work on the web too.

DH: So, the proposal is to allow the "use module" in addition to the import/export conditionality. "use module" would be an early error in a script on the web, permitted but not required in modules on the web, and in Node
it would be the conditionality. I wouldn't want "use module" to have to be sprinkled all over the top of all modules, though.

WH: This suffers from the same perils as you just listed as arguments against Node's proposal. If you use the presence of import statements, scripts will be misclassified as modules in the future when we add the ability to import into scripts. To make this work you'd need to either get rid of the import/export statement sniffing or define a "use script" in addition to "use module" to in-band force scripts to be interpreted as scripts.

AK/CP: What if we just did `"use module"` without the import/export conditionality?

DH: (Experimental implementation at https://github.com/dherman/esprit)

DH: Usually the mode is known upfront, but the deferred check will have some cost in the cases where it runs. Maybe the import/export conditionality will only come up in a few of the Node corner cases.

AK: So you think it's uncommon is because Node folks were receptive to the idea that it could only come up in certain circumstances? (NB: Background is that the import/export check may require parsing multiple times.)

DH: We should aim for out-of-band signalling most of the time, and in-band only for a couple remaining edge cases, and for defensive programming.

DD: The node leadership is already happy with .mjs

AWB: From Node, this isn't a problem between discriminating between modules and scripts, but modules and CommonJS modules. This is Node's problem: Node doesn't handle Scripts, only CommonJS modules. So, given a source file, Node needs to determine if this should be processed as ES or CJS, it can do its heuristics. Differences in semantics? Mostly strict mode. Does that matter much?

KG: Annex B 3.3 being excluded is big

MM: Strict arguments are very different

AWB: I think anything that Node might be confused if they take a script-like module and treat it as a CJS module.

YK: They don't think that's true empirically.

JM: We are far over timebox, let's move to another agenda item.

WH: I object to Stage 1. It would be a waste of the committee's time as it is strictly worse than the previous proposal, and it suffers from the same issues as the Node detection solution, and it doesn't solve the problem of import statements in scripts in the future.

DH: It would be great if this could reach Stage 1, as this relates to JDD&Bradley's proposal.

WH: We have to wait to see that proposal

AWB: One of the criteria for Stage 1 is that we think it's worth spending time

AK: Actually it says we "expect" to spend time on it. I would expect to spend time on it!

BT: This is a feature request from an important user of JavaScript and we shouldn't just dismiss it.

#### Conclusion/Resolution

- Stage 1 acceptance
- The committee has deep doubts about this proposal




## 14.ii import() open issues and stage 3 discussion

DD: For Node, JHD reached out to Bradley Farias of Node and confirmed that we can start the import of the module asynchronously, as he had suspected. Therefore, the hook can be clarified to always be asynchronous, not synchronous or asynchronous as previously.

DD: For MM's membrane penetration concern, the plan is that we will be working towards hooking of agent hooks ("the loader spec"), though we aren't blocking on it. Current embedding environments do support hooking.

DD: (walking through https://github.com/tc39/proposal-dynamic-import/issues/26)

MM: We're expecting that we'll work towards a standardized loader spec for generalized hooking, and be happy with how embedding environments (e.g., Web and Node) do provide an API.

AWB: If need API, then say you need in spec.

MM: minimal requirement, have a standardized API now. Minimal requirement that there exists a way for this to be implemented on all runtimes, there must be a spec hook to

AWB: We can also require host environments to provide a way to expose these hooks, rather than just expect it, writing out in the spec what is required for it to be sufficient.

DD: This is novel, and I'd rather not tie my proposal to that. But it seems like a possible path. I'm expecting to get a PR from Mark to formalize whatever is required.

MM: I'd like to look at what hosts expose more closely. Is there great urgency?

DD: We'd like to implement this.

AWB: And you won'd do it if it's not Stage 3?

DD: Right

AWB: Stage 3 is about getting usage and implementation feedback, and adjusting if necessary. We are anticipating feedback from Mark

MM: In this delecate agreement, I'd like to take a look at some details before giving a final signoff.

AWB: But we're not talking about changing the normal public surface area of the feature. So there's no particular reason why it should block Stage 3.

MM: I am not expecting it to block Stage 3, but I'd like more time to look at it. But I can do that at Stage 3.

DD: Final obstacle was run-to-completion semantics, from AWB. Talking with BT, we were thinking of working this out spec mechanics during Stage 3. I have a note indicating the need for run-to-completion.

AWB: Should be a normative requirement!

DD: Done.

WH: Any remaining syntax issues from Tuesday? For the record, what was the decision?

DD: Result is that it looks like a function call.

AK: With some static restrictions.

DE: Stage 3 is good because it indicates some stability that helps implementations know they're not wasting their effort.

MM: Will this ship before the next meeting, prohibiting future changes?

AK: We'll initially develop it behind a flag, and it will go through normal Chrome shipping processes, which take some time.

#### Conclusion/Resolution

- Stage 3 acceptance





## 13.ii.b Private State

(Daniel Ehrenberg)

- [proposal](https://github.com/tc39/proposal-private-fields )
- [slides](https://docs.google.com/presentation/d/1QBK8GsTYmQHJQJm_P0HuELNN4uGkm9gB7Df9g4tRK-o/edit#slide=id.g1994dec4f4_0_35)


DE: Private state to stage 2

- Syntax is same
- Follows Kevin Smith's proposal
- Class private state, not instance private

```js
class Foo {
    #x;
    #y = z;
    foo() {
        #x++;
        return this.#x;
    }
}
```

DE: Questions remain for both private state and public fields, but public fields still at stage 2

AWB/WH: They're in fact the same questions. Apply to both.

DE: (semantics)

- Only accessible from methods inside class body ("hard-private")
- Internal slots mapping objects to field values
- Add field after `super()` returns, or at beginning in base class
- Intersperse initializer evaluation with field addition
- Throw on redundant property definition
- Scope of initializers as in property declarations


The intention is to match public fields, need to be interleaved, specifically the ordering of steps e.g. adding fields.

AWB: Concerns about separate proposal for public fields. Merge the proposals.

DE: The plan is to merge the specs for Stage 3
-

DE: If feedback reveals that the # syntax for private state is fatally unworkable, we wouldn't want to kill public state because of it


MM: if integration reveals issues for one and not the other? THen we can address?

AWB: Or drop entirely?

YK/AWB/DE: (discussion of the merging concerns, but only w/ regard to Stage 3?)

AWB: Concerns about separate proposals modifying the same spec algorithms. They need to be merged when we get to that level of detail.

- in stage 2, merge must be addressed

DH: I love the smell of consensus in the afternoon ;)

DE: Should there be a way, through reflection, to access private state outside of the class? No.

- Previously, formalism based on weakmaps
- New formalism is same, but without the GC semantics

DE: Add field after `super()` returns, or at beginning in base class—no matter where `super()` is called

AWB: May be issue? Reflect.construct call is intended to be an alternative `super()`. Possible to move this in the construct, doesn't have to relate to token
- construct is where belongs


WH: Concerns that one shouldn't be able to use this to stick a class's private fields onto arbitrary unrelated objects

...

DE:

Interaction with other features


- Decorators -- reify a PrivateFieldIdentifier() object (https://github.com/tc39/proposal-private-fields/blob/master/DECORATORS.md )
- A decorator can provide soft-private state
- Private methods -- a clean extension with the syntax you expect (https://github.com/tc39/proposal-private-fields/blob/master/METHODS.md )
- Static private -- ditto (https://github.com/tc39/proposal-private-fields/blob/master/STATIC.md )
- Friends -- may be lexically exposed via static block (https://github.com/littledan/proposal-class-static-block )

```js
let barGetter;
class Foo {
  #bar;
  static { barGetter = instance => instance.#bar }
}
```


MM: could via decorator, declare a private field to be effectively const, initialized, not further modifiable?

DE: Not presently

YK: Not yet

(back to syntax)

MM/DE: (discussion about the dot in `o.#p`, ultimately they came around to the dot.)

DE: Why hard private? (https://docs.google.com/presentation/d/1QBK8GsTYmQHJQJm_P0HuELNN4uGkm9gB7Df9g4tRK-o/edit#slide=id.g1994dec4f4_0_20 )

WH: This relies on not being able to create fake instances of the class that has the private property. That's the concern I raised earlier.

AWB/WH: We need to explore that.

DH: possibly making a mistake by using the concise syntax for the air-tight private state?
- The question is: what do people want in the real world? Afraid we're missing that

JM: Have you seen the decorator opt-out?

DH: yes, but concerned we're making wrong decision.

DE: the developer field is split evenly, some for hard and some for soft private.

JM: The concern of hard private is that its very hard to debug
- if debugging in a debugger, you can see the hard private, but your tests cannot

WH: Same argument could be made about the other hard private facility of the language, namely locals in functions. Although some might want non-air-tight functions (for example for testing), it's not worth it to add another kind of functions to the language. Just like with private fields, a debugger will show you the values of locals in functions.

YK: Some know how to use underscore (prefix), some symbols; might use underscore as example that we did it wrong

(Discussion about all the problems of using underscore, ie. not soft-private/soft-protected)

MM: It's important for me that hard-private be ergonomic.

AWB: The key elements of the proposal are hard private and lexical scoping of private declarations. If either of those were reversed, this would turn into a radically different proposal. If we're advancing this to stage 2, it's with the understanding that these will be in the proposal.

DE/DH: (further discussion of hard private).

- Want real usability feedback


YK: (point about developer ergonomics compared to similar cases re: decorators)

AWB: Proxy issue?

DE: Resolution was: can add private state to proxy

MM: WEakMap semantics: proxy has identity and can key on proxy

MM, WH: No proxy issue.

MM: Intended to be observationally equivalent to weak maps. If there is a place that isn't, it's a bug.

DE: Can add text that explains the equivalence to weakmaps; semantics of this proposal, etc.


Internal slot-based specification mechanics

- Private State Identifier specification type
- [[PrivateStateValues]] is a List with pairs mapping Private State Identifiers to their values
- Difference from WeakMaps unobservable except for implied GC semantics


DE: Q. is this just too unergonomic? Some wanted @, not #—and very opposed to #. Some Wanted `private`.

WH: Need a sigil or equivalent. We've spent years working through attempts to define private state without any distinguishing sigils on use. None of them worked. They work fine in statically typed languages, but in dynamically typed ECMAScript were hopelessly mired in the same class of namespace shadowing problems that plagued the with statement. Consider what happens if a class defines a private field called "length" and also wants to access a length field of an unrelated object.

AWB: 6-7 years ago worked through extensive ways of doing this and all had problems.

AWB: Extensively documented in old wiki

DE: static private, methods included? Or wait?

AWB: Do the full package here.

KG: why? (as opposed to a later proposal, if confident that this will allow for a later proposal?)

AWB: cross cutting concerns, if not pinned down together, and proceed with only confidence, then discovery later will be problematic or impossible to fix.

DE: Open issue: require a "private" keyword on declarations? (i.e. `private #x;` instead of `#x;`)

DE: Pro: useful for learning the language

WH: Any syntactic reason for needing a keyword?

DE: No.

AWB: had to chose: follow separator of block or object literal, went `;`

YK: important to support commas to enumerate a list of fields:

```js
class A {
  #x, #y, #z
}
```

Annoying to write:

```js
class A {
  private x;
  private y;
  private z;
}
```

Bad: private and decorators and no comma list

WH: Whether or not we allow commas is orthogonal to this proposal.

DE: could make private keyword optional, but is weirder

YK: `private @protected foo` is something to keep in mind?

DD: Does anyone like the `private` keyword?

AWB: the sigil alone is hard to read, `public` and `private` are clear

WH: Can't mandate `public` and `private` keywords. Public methods don't use a keyword, so that ship has sailed assuming that we'll want private methods at some point. My preference is no keywords — sigil only.

KG: opposed to `private`, but those who are opposed to `#` are less opposed to `private #x`.


(discussion re: `=` or `:`)

CM: why is this even a question?

JM: There is a question on public fields, `=` is assign/set, `:` is define—still not sure which will be correct?

KG: only relevant for public fields, evaluation order

YK: TypeScript and Babel transpile as:

```js
class A {
  x = 1;
}
```

to

```js
var A = function A() {
  _classCallCheck(this, A);

  this.x = 1;
};
```

JK: It does this by default, however when you enable "spec" mode it will switch to using a defineProp to set configurable to false

KG: concern that if not addressed now, Babel will proceed and like the "sigil swap", it will become hard to change later.

AK: valid concern, but `public` is much more widely used

DE: much more open to `private` with comma list

JK: This is a slightly different situation from the sigil swap, there is a better migration path available

WH: keyword ship has sailed, problems when we do private methods with `private` but public without `public`

AWB: This is why I proposed `own` and not

AWB: Change to IdentifierName, not IdentifierPart

WH: Yes, I raised that the last time we discussed this proposal.

JM: Why?

AWB: Don't want properties called #1, #2, #3

JM: Why?

AWB: We use IdentifierName in the grammar

WH: It seems odd to have a PrivateName be a single token. The more natural way to express it would be as two tokens, `#` followed by an IdentifierName.

KG: Won't that allow whitespace between `#` and IdentifierName?
- The hash is intended to be thought of as part of the property name, ie:

```js
this.
  #foo.
  #bar;
```

(RW, LEO: Weird)


AWB: No whitespace between `#` and `foo` in `#foo`, but also `foo` not IdentifierPart

WH: Want whitespace allowable on either side of #

DE: Should private state be accessible within eval?



#### Conclusion/Resolution

- Stage 2 acceptance
- hard private, lexical scoping



## 13.vi Process proposal: require an implementation to land a normative PR to the spec

(Daniel Ehrenberg)

- [proposal](https://gist.github.com/littledan/f85d2d1f4cff44927a75afd5d30bbe2e )


WH: What are the majority of the spec pull requests?

BT: Editorial. Among the remainder, the majority are consensus items.

DE: proposes that PRs for normative changes should also have an implementation before being merged.

AWB: case by case?

MM: We can adopt this process and apply it on a case-by-case basis

AWB: what if it's a bug?

DE: Want a high bar to making normative changes to the spec to avoid bugs.

WH: It also makes a high bar to fixing bugs.

AWB: Caution against adding too much burden to the process.

BT: Don't want to inject a lot of process into simple things. Don't think adopting this proposal would change anything in practice.

YK: But it would cause more process lawyering.



#### Conclusion/Resolution

- Raised the issue, pay attention.



## 13.vii Open-ended: How can we promote diversity and inclusion in TC39

 (Daniel Ehrenberg and others)


DE: How can we improve this?

AWB: member companies need to send more diverse language implementors

(general discussion wrt adopting a Code of Conduct that applies to diversity based on demographics background)

WH: Code of Conduct and meeting participation changes must be handled at the ECMA General Assembly level. Also, ECMA has a code regulating conduct.

RW: We should talk to István to have ECMA adopting this Code of Conduct

(general agreement)

RW: The next step is we as delegates communicate to our companies that we should sponsor and support diversity, affecting who we bring to the meetings as well. This might be done via scholarship or otherwise.

MM: We lack geographical diversity.

WH: We've never had a meeting in the midwest. In the US we've only had meetings near ocean coasts.

RW: (explanation of counter to geographic claim, w/r to specific demographics and personal safety)

MM: Geographical location is one of the few things that this committee has direct control over

(discussion about different working and debate styles)

WH: The biggest indictment of our committee is what happened to Kevin Smith in Munich.

JK: There are groups unwilling to come, due to the nature of TC39

WH: Are they members?

JK: Certainly within member companies, but also people who don't push their companies to become members       There ertainly within member companies and without

JK: w/r to certain places being unwelcoming to disenfranchised groups. I'd ask that the committee never hold meetings in places where anyone's personal safety isn't guaranteed, eg. countries where gay people are killed for being gay.

DE: Mark makes a good point about geographic diversity; globally, many of our companies are focused on the next billion users, and we don't have much representation from developers who are targeting that, who may have different mental models. It's not just diversity of people who we bring here, but also inclusion of the people that are in the room. Our culture here can be intimidating--it is hard to give a presentation when committee members will interrupt from very early on, and this works for some cultural styles of presenters but not for others.

BT: Sounds like we are all in agreement that diversity is an important issue that we want to work on

MLS: It is important for us to work on making this a less intimidating place which is more welcoming to new members.

MM: re: Kevin Smith hostile environment issues:we missed the opportunity to improve ourselves as a group after the incident in Germany

BT: Let's continue this discussion, including developing a statement from the committee that would help companies like mine and Rick's find funding to allow the participation of diverse members.

DFV: It feels like there is unnecessary tension, tension about more than technical things, and it makes me hesitant to speak much. We saw some of that today, where it was uncomfortable to speak. It feels like there is sometimes too much confrontation here.

JK: We can also work to create more resources for people to learn how to get involved.

DE: Maybe we should be fixing our culture to be more respectful and inclusive as the first step; I wouldn't want to bring a lot of new people into a hostile situation. The code of conduct could help here.

SYG: Can we really expect people to follow this?

MLS: We are getting better at enforcing timeboxes, but we should consider being even more strict in enforcement--if members don't grant an extension, it should be done.

LEO: Some companies may have trouble/refuse participating because they see the lack of diversity and a code of conduct on a company. I have had discouragement from colleagues personally as English is my second language--this made me feel like running away. Fortunately, my employer, Bocoup, on hearing this, put me on the Test262 project and eventually sent me to the committee. I have many people from my country (Brazil) who contact me and want to get in touch about reading the spec, etc. I am just a normal person--I needed to find that, regardless of where I come from, I was able to attend. It would be very useful to have an official document from ECMA saying that ECMA and TC39 commit to social responsibility, where people can feel respected in any sort of background. Everyone should feel encouraged. I am here, I am the proof of it. I feel responsible to bring that forward to the new people.



#### Conclusion/Resolution

- Consensus that diversity is important and something we'd like to address and improve
- Take initial steps to adopt a Code of Conduct and determine how to enforce
- Rick Waldron will contact István
- Rick to review with Kevin Smith
- Representatives should work with their member organizations to promote more diverse representatives, via scholarship/sponsorship or diversification of member team
- Extend our charter to include social commitment to committee representative diversity.
