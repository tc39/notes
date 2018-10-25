# Summary for the 66th meeting of Ecma TC39

Ecma Technical Committee 39 held three day meeting hosted by Paypal in NYC on September 25th - September 27th, 2018. [Agenda can be found here](https://github.com/tc39/agendas/blob/master/2018/09.md).


## New Proposals
TC39 discussed 6 new proposals. 5 entered staging process to discuss towards specification, and 1 remains at Stage 0 for further investigation before consensus.  

### Advanced to Stage 1 
- [for-in mechanics](sept-25.md#for-in-mechanics)
- [Uniform parsing of quasi-standard Date.parse input](sept-26.md#uniform-parsing-of-quasi-standard-dateparse-input)
- [Promise.allSettled](sept-27.md#promiseallsettled-for-stage-1)
- [IDL for JavaScript](sept-27.md#idl-for-javascript)
- [JSON.parse source text access](sept-27.md#jsonparse-source-text-access)

### Needs more discussion (remains Stage 0) 
- [Consistent Behavior Delegation for Configurable Properties & Extensible Values](sept-25.md#consistent-behavior-delegation-for-configurable-properties--extensible-values)


## Existing Proposals

### Advanced to Stage 2 from Stage 1
- [Sequence properties in Unicode property escapes](sept-26.md#sequence-properties-in-unicode-property-escapes-for-stage-2)
- [Hashbang](sept-26.md#hashbang-for-stage-2)
- [Temporal](sept-27.md#temporal-for-stage-2)

### Advanced to Stage 3 from Stage 2
- [Well-formed JSON.stringify](sept-26.md#well-formed-jsonstringify-for-stage-3)

### Needs more discussion/information
These proposals were discussed but did not advance to next stage at the meeting. Please refer to "Conclusion / Resolution" section on the notes to see the outcome of discussion.
- [Array.prototype.flat{,Map}](sept-26.md#arrayprototypeflatmap-for-stage-4-)
- [Include static in static method toString](sept-26.md#include-static-in-static-method-tostring)
- [Revisiting Private Symbols](sept-26.md#revisiting-private-symbols)

### Updates
Status updates from proposals working towards stage advancement.
- [String.prototype.matchAll](sept-25.md#update-on-stringprototypematchall)
- [Decorators](sept-26.md#decorators-stage-2-update)
- [Class fields and private methods](sept-26.md#class-fields-and-private-methods-stage-3-update)

## Changes to existing specification

### Consensus Reached Pull Requests 
- [Normative: Reduce the number of ticks in async/await](sept-25.md#normative-reduce-the-number-of-ticks-in-asyncawait)
- [Normative: Use array indices instead of integer indices in OrdinaryOwnPropertyKeys](sept-25.md#normative-use-array-indices-instead-of-integer-indices-in-ordinaryownpropertykeys)
- [Normative: Add export * as ns from "mod"](sept-27.md#normative-add-export--as-ns-from-mod-contd)

### Rejected Pull Requests
- [Normative: allow ArraySpeciesCreate to create non-arrays](sept-25.md#normative-allow-arrayspeciescreate-to-create-non-arrays)

### Needs more discussion/information
- [Normative: Use GetMethod instead of GetV to get iterator next](sept-25.md#normative-use-getmethod-instead-of-getv-to-get-iterator-next)
- [Normative: GetExportedNames adjustments for Dynamic Modules](sept-27.md#normative-getexportednames-adjustments-for-dynamic-modules)

## Breakout Sessions
At this meeting, TC39 had break out sessions on following topics. Please see notes for each topic.
- [Future syntax space for other languages](sept-27.md#future-syntax-space-for-other-languages)
- [Export Decorator Ordering](sept-27.md#export-decorator-ordering)
- [Same-realm internal slots for specs](sept-27.md#same-realm-internal-slots-for-specs)
- [Matchall issue](sept-27.md#matchall-issue)
- [Modules](sept-27.md#modules)
- [Temporal](sept-27.md#temporal)

## General Discussions 
Topics related to ECMAScript specification activities that were presented at the meeting
- [Array.prototype.sort stability](sept-25.md#arrayprototypesort-stability)

## Updates from ECMA-262 Editors Group
- Starting to finalize ES2019. Proposals that make it to stage-4 by November meeting will be part of ES2019.  
- Brian Terlson will be stepping down from the Editor Group after ES2019 is finalized (around May 2019)

## Organizational update
- 2019 Chair Group was nominated
  - Will likely hold an uncontested election in November. Please see [slides](https://docs.google.com/presentation/d/1P5DdJBQrr5hj_x-SqQxk8HOTaipJUaxbH0icp1g9iMk/edit) for details.
- TC39 has nominated Brendan Eich and Allen Wirfs-Brock as ECMA Fellows (To be approved at ECMA General Assembly in December)
- Test 262 work group has been developing [Tests Reports Project](sept-25.md#announcing-a-tests-reports-project)
- Archival effort to document history of TC39 has started by ad-hoc TC39 History Group
- Few topics on Ecma policy were discussed
  - This is the change in Ecma policy to add “invited expert” status  
  - BFS, DE, and YSV will be talking to the Ecma ExeCom to discuss further.
  - No opposition to making TC39 itself royalty free in preparation to accepting invited experts
- [Groups Update](sept-26.md#groups-update)
- [Code of Conduct Committee Report](sept-25.md#8-updates-from-the-coc-committee-15m)
- [Report from the Ecma Secretariat](sept-25.md#9-report-from-the-ecma-secretariat)
- [ECMA 402 Updates](sept-25.md#7ii-ecma402-status-updates)
- [Test262 Status Updates](sept-25.md#7iv-test262-status-updates)

