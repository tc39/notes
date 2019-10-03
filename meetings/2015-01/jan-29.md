# January 29, 2015 Meeting Notes
-----


Brian Terlson (BT), Jonathan Turner (JT), Allen Wirfs-Brock (AWB), John Neumann (JN), Jeff Morrison (JM), Erik Arvidsson (EA), Dave Herman (DH), Waldemar Horwat (WH), Domenic Denicola (DD), Kevin Smith (KS), Michael Ficarra (MF), Jordan Harband (JHD), Chip Morningstar (CM), Adam Klein (AK), Igor Minar (IMR), Miško Hevery (MHY), István Sebestyén (IS), Rick Waldron (RW), Ben Newman (BN), Yehuda Katz (YK)

-----

## ES6 Introduction text

(Allen Wirfs-Brock)

[Ask for slides]

AWB: The spec has an introduction text. We need to write what ES6 is adding to the picture. Right now it is empty.

AWB: Asked for volunteers and no one has done that yet.

Possible new text

ECMAScript is now one of the world's most widely used programming languages; it has been adopted not just by browsers but also for servers and embedded applications, and has become a compilation target for other languages.
The 6th edition provides the most extensive set of enhancements to ECMAScript since the 1st edition.

It is now a comprehensive general purpose programming language.

Some of the major enhancements provided by the 6th edition include modules, class declarations, lexical block scoped declarations, iterators and generators, promises for asynchronous programming, destructuring patterns, and proper tail calls.

The ECMAScript library of built-ins has been expanded to support additional data abstractions including maps, sets, and arrays of binary numeric values as well as additional support for the Unicode supplemental characters in strings and regular expressions. The built-in library is now extensible via subclassing.

New uses and requirements for ECMAScript continue to emerge. The sixth edition provides the foundation for regular, incremental language and library enhancements.


## List of contributors?
(Allen Wirfs-Brock)

AWB: In ES5 there is a list of people who contributed to the spec. For ES6 the list is really large and I'm afraid of leaving someone out. Suggests not having a list of contributors.

IS: Non normative. Non mandatory. ECMA leaves it entire to TC39 if they want to have a personal and/or organizational recognition of those who have significatntly contributed to the standard. This can be from case to case different. E.g. in ECMA-402 (ECMASCript Internationalization) all contributors and those who even commented were acknowledged, but of course that standard has a much more focused scope. So it is up to TC39. If there is a risk of forgetting someone who has significantly contributed to the work on ES6 maybe it is better to leave it out.

BT: Is anyone asking for this?

JM: Does anyone oppose to leave this out?

DD: It feels nice to get acknowledged, and we should consider doing it in the future. Especially for e.g. ES2016 when we're on GitHub and can just look at the contributors list. But it's just not feasible for ES2015.

AWB: Suggests not having the list of contributors.

BT: Seconded.

JN: Would it make sense to list the companies that contributed.

WH: That would be worse.

EA: Agreed.

IS: He noted that in the past in Ecma we even had a few cases when companies have been acknowledged, or persones (with their companies in bracket). Up to the TCs how they want to handle this, because this part goes into an informational part of standard anyway.

#### Conclusion/resolution

- ES6 will not have a list of contributors.


## March meeting
(John Newman)

JN: Next meeting is in Paris. Today is the last chance to object.

WH: Objecting, but will not veto it.

#### Conclusion/resolution

- The Paris meeting has been confirmed

IS: note after the meeting: We have to take into account that like in the SF meeting there will be members who will want to attend remotely via conferencing facilities.
Therefore the host should be prepared for that and should provide a well functioning remote conferencing facilities. In the SF TC39 meeting the video part and the remote audio participation worked well, but the audio from the conference room could only be understood if one person alone close to the mic spoke.


## const in sloppy mode
(Brian Terlson)

BT: Found one site that depends on the legacy const semantics.

YK: One site?

BT: It is also a demo site.

BT: While it is true that a site might serve different code to IE and Chrome.

DH: Let me talk to Jason Orendorff (SpiderMonkey engineer) and see what he thinks.

AK: At the moment you cannot use let in sloppy mode.

BT: It is worrying that Google thinks that this is not web compatible and that it has not been brought up before.

BT: We could change the semantics and make const in sloppy mode scoped like vars.

AWB: I would be opposed to that. I'd rather drop it.

DH: Opera used to treat const exactly like var.

WH: What is the issue?

EA: In legacy Chrome and Firefox (sloppy mode) const has the same scoping rules as var.

AWB: If we run into a brick wall we can revise the spec in the future.

BT: Time is of the essence. The longer you hold out the higher the risk is that IE would fall back to the legacy behavior.

BT: IE11 shipped the correct ES6 semantics for over a year and only encountered one problem report.

BT: Want to see plan to turn on proper sloppy mode semantics from Chrome and Firefox within the next few months.

EA: We'll make a plan on how to get to standards compliant const in sloppy mode.

#### Conclusion/resolution

- Google and Mozilla will move towards a standards compliant const in sloppy mode.


## Object.observe
(Erik Arvidsson)

(Presents slides)
https://docs.google.com/presentation/d/1VHdL37sZSLBZuizzSfiiSd9zSy9zNYXiNEjDJeTjOSA/edit?usp=sharing

AWB: Is "types" the right word in "acceptTypes"? These are actions, not types.

EA: These correspond to the "type" field, but agree that, if we're adding types to the language, also using the term "type" in this way would be not so good.

[...discussion of skipRecords: what should be passed to the observer callback in that case? undefined or null?...] (Domenic to file a bug)

YK: Advance to stage 3?

EA: Not just yet.

YK: I would decouple Array.observe from Object.observe

YK: I would like to get more implementation feedback (which would help prioritize it in libraries), but don't necessarily think that should block Stage 3 forever.

EA: Still details to be worked out over scheduling of observer callbacks

DD: ECMAScript-wise, just creating a job and enqueuing it should be sufficient

YK: That doesn't seem like enough, because the callbacks still need to run at end-of-microtask

DH: This sounds like maybe a seperable work-item

DD: Not clear whose court this is in, between Web specs and ES

YK: It seems like a small, self-contained note somewhere explaining the interaction of ES Jobs and HTML/DOM event queues

DH: It sounds like a WebIDL thing

AWB: 2 things:
    1) Relative ordering of observe notification jobs.

Arv: The ordering is well-defined.

AWB: 2) Any ordering dependencies between your spec and promises. In ES6, promises have a well-defined ordering but other job queues can interleave between promises. So if you expect to have a defined ordering between observe and promise then you probably need to use the same queue.

YK: Needs a user-facing API for managing job queues.

AWB: Yes, quite useful.

MM: Why is Array.observe a separate API? Shouldn't the default be to observe splices when arrays are Object.observed?

AWB: Then you have to define what the extensibility story for other types.

MM: Understood.

Discussion of decoupling Object.observe and Array.observe

MM: You wouldn't want to ship Object.observe without Array.observe, though having two waves of specs is a separate issue

#### Conclusions

- null is preferred over undefined, more explicitly representing an absence of records
- No stage 3


BT: I have no idea what is going on, for the record.



## ecmarkup
(Brian Terlson)

BT: https://github.com/bterlson/ecmarkup

AWB: what is the difference between ecmarkup and ecmarkdown?

BT: Ecmarkup is HTML markup, such as `<emu-clause>`, `<emu-alg>` etc

BT: Ecmarkdown is a markdown syntax for specifying algorithms steps. Ecmarkup uses ecmarkdown inside `<emu-alg>` and a few other elements.

BT: http://bterlson.github.io/ecmarkup/

BT: abstract operations from external specifications may be referenced

EA: There currently is no way to write BNF. We should add that.

WH: I have built tools for validating grammars

BT: I believe Allen would like to continue using Word

DH: No, we want to get away from that

AWB: ISO requires the document to be submitted in Word

DH: Jason has a tool for converting some spec sources to Word

DH: it is important to me that we work in markdown on github for the next version of the spec

DH: we may be able to leverage academics that want to represent semantics of JS in a similar way to the spec

BT: html imports are used, so a document may be split up into pieces


## Interfacing with the Loader Spec
(David Herman)

[Link to slides]

AWB: How do you get a module record from a different realm unless you are using imperative APIs?

DH: I expect this to be pretty nitty gritty code. It is not going to be common to get cross realm modules.

DH: The basic idea is that every loader belongs to a realm and that when it process modules it uses that realms policies.

AWB: Why can't the records have all the fields but the fields are not filled in yet?

DH: Some of these fields make no sense for reflective modules.

DH: Reflective/dynamic modules are always leaves. Makes things a
