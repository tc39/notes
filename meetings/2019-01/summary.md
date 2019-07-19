# Summary for the 68th meeting of Ecma TC39

Ecma Technical Committee 39 held three day meeting hosted by GoDaddy in Scottsdale, AZ on January 29th - January 31st, 2019. [Agenda can be found here](https://github.com/tc39/agendas/blob/master/2019/01.md).

## New Proposals
TC39 discussed 5 new proposals and 4 of them advanced to stage 1
### Advanced to Stage 1
- [Freezing prototypes for stage 1](jan-31.md#freezing-prototypes-for-stage-1) 
- [Intl.DisplayNames for stage 1](jan-31.md#intldisplaynames-for-stage-1)
- [new.initialize for stage 1](jan-31.md#newinitialize-for-stage-1)
- [Iterator helpers for stage 1](jan-31.md#iterator-helpers-for-stage-1)
### Proposal withdrawn
Upon discussion at the committee, following proposal will not seek stage advancement.
- [Private Symbols for stage 1](jan-31.md#private-symbols-for-stage-1)
## Existing Proposals
TC39 discussed 8 proposals for stage advancement and had updates presentation on 3 proposals
### Advanced to Stage 2 from Stage 1
- [Promise.allSettled](jan-30.md#promiseallsettled)
- [Richer keys for stage 2](jan-30.md#richer-keys-for-stage-2)
### Advanced to Stage 4 from Stage 3
- [Object.fromEntries for stage 4](jan-29.md#objectfromentries-for-stage-4)
- [Well-formed JSON.stringify for stage 4](jan-29.md#well-formed-jsonstringify-for-stage-4)
- [String.prototype.{trimStart,trimEnd} for stage 4](jan-29.md#stringprototypetrimstarttrimend-for-stage-4)
- [Array.prototype.{flat,flatMap} for stage 4](jan-29.md#arrayprototypeflatflatmap-for-stage-4)

### Needs more discussion/information
Following proposals did not reach consensus for stage advancement.

- [Decorators for Stage 3](jan-30.md#decorators-for-stage-3)
- [Extended numeric literals status update, and consider restoring numeric separators to stage 3](jan-30.md#extended-numeric-literals-status-update-and-consider-restoring-numeric-separators-to-stage-3)

### Updates
Updates on proposals that are not seeking stage advancement
- [Update on Set methods](jan-29.md#update-on-set-methods)
- [Private fields and methods](jan-30.md#private-fields-and-methods-refresher) remains with Stage 3 consensus, with renewed understanding of motivation
- [Update on sequence properties in Unicode property escapes](jan-31.md#update-on-sequence-properties-in-unicode-property-escapes)

## Changes to existing specification
TC39 discussed 4 Pull Requests to existing specification
### Consensus Reached Pull Requests 
- [Normative: Treat IterationStatements uniformly in Annex B.3.5](jan-29.md#normative-treat-iterationstatements-uniformly-in-annex-b35)
- [Add "name" property for classes as part of ClassDefinitionEvaluation](jan-29.md#add-name-property-for-classes-as-part-of-classdefinitionevaluation)
- [%TypedArray%.prototype.sort stability](jan-29.md#typedarrayprototypesort-stability)

### Needs more discussion/information
- [Dynamic Modules Layering](jan-30.md#dynamic-modules-layering)

## Open Discussions 
Topics related to ECMAScript specification activities that were presented at the meeting.

- [Amending the memory model to support ARMv8 LDA/STL codegen](jan-30.md#amending-the-memory-model-to-support-armv8-ldastl-codegen)
- [Security Implications of Error.prototype.stack](jan-29.md#security-implications-of-errorprototypestack)
- [Community feedback over globalThis, advocating for Global](jana-29.md#community-developers-and-educators-feedback-over-globalthis-advocating-for-global)
  - [globalThis follow up](jan-31.md#globalthis-follow-up)
- [Private declarations](jan-31.md#private-declarations)
- [Overloading method parameters between BigInt and Number](jan-31.md#overloading-method-parameters-between-bigint-and-number-just-say-no)
- [Simplifying Set constructor](jan-31.md#simplifying-set-constructor)
- [Module Specifier for builtins](jan-31.md#module-specifier-for-builtins)

- [Edge/Chakra Q&A from Microsoft](jan-29.md#edgechakra-qa-from-microsoft-brian-terlson--kevin-smith)
- [Publishing the website](jan-29.md#publishing-the-website)
- [The Community and Us](jan-29.md#the-community-and-us)
  - [Communications: Discourse Strategy](jan-30#discourse-strategy)

- [TC39 rationale - a proposed starting point](jan-31.md#tc39-rationale---a-proposed-starting-point)

## Updates from ECMA-262 Editors Group
- ES2019 was finalized at this meeting
- We will begin the Royalty-Free opt-out period in February
- ES2019 adds following features to EcmaScript
  - Array#{flat,flatMap}
  - Object.fromEntries
  - String#{trimStart,trimEnd}
  - Symbol#description
  - try { } catch {} optional binding
  - EcmaScript as a syntactic superset of JSON
  - well-formed JSON.stringify
  - stable Array#sort
  - revised Function#toString


## Organizational updates
- TC39 welcomed 2019 Chair Group (Yulia Startsev, Aki Rose, Brian Terlson)
- [TC39 to transition from RFTG to RFTC](jan-29.md#tc39-to-transition-from-rftg-to-rftc)
- [Report from the Ecma Secretariat](jan-29.md#report-from-the-ecma-secretariat)
- [ECMA-402 Status Update](jan-29.md#ecma-402-status-update)
- [ECMA-404 Status Update](jan-29.md#ecma-404-status-update)
- [Test262 Status Update](jan-29.md#test262-status-update)
- [Updates from the CoC Committee](jan-29.md#updates-from-the-coc-committee)

