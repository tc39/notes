# Summary for the 65th meeting of Ecma TC39

Ecma Technical Committee 39 held three day meeting at Microsoft in Bellevue on July 24th - July 26th, 2018. [Agenda can be found here](https://github.com/tc39/agendas/blob/master/2018/07.md).


## New Proposals
TC39 discussed 6 new proposals. 3 entered staging process to discuss towards specification, and 1 remains at Stage 0 for further investigation before consensus.  

### Advanced to Stage 1 
- [Explicit Resource Management](july-24.md#explicit-resource-management)
- [Dynamic Modules](july-25.md#dynamic-modules)
- [JavaScript Standard Library](july-26.md#javascript-standard-library)

### Advanced to Stage 2 
- [`ArrayBuffer.prototype.transfer()`](https://github.com/rwaldron/tc39-notes/blob/master/es9/2018-07/july-24.md#arraybufferprototypetransfer)
- [`Intl.DateTimeFormat.prototype.formatRange`](july-24.md#intldatetimeformatprototypeformatrange)


### Needs more discussion (remains Stage 0) 
- [Secondary Proposal for `ArrayBuffer.prototype.transfer()`](july-24.md#secondary-proposal-for-arraybufferprototypetransfer)
  - committee suggestion is to split into separate proposals.


## Existing Proposals

### Advanced to Stage 2 from Stage 1
- [RegExp Match Offsets](july-25.md#regexp-match-offsets)
- [`Intl.NumberFormat` Unified Feature](july-26.md#intlnumberformat-unified-feature-proposal-for-stage-2)

### Advanced to Stage 3 from Stage 2
- [`Object.fromEntries`](july-24.md#objectfromentries-to-stage-3)


### Needs more discussion/information
These proposals were discussed but did not advance to next stage at the meeting. Please refer to "Conclusion / Resolution" section on the notes to see the outcome of discussion.
- [Reduce the number of ticks in async/await](july-25.md#reduce-the-number-of-ticks-in-asyncawait)

### Updates
Status updates from proposals working towards stage advancement.
- [Update on `do`-expressions](july-24.md#update-on-do-expressions)
- [New name for global](july-24.md#new-name-for-global)([revisited discussion](july-25.md#revisit-global-name))
- [Decorators](july-25.md#decorators-towards-stage-3)
- [Cancellation](july-25.md#cancellation-update)
- [Partial Application](july-25.md#partial-application)
- [First-class Protocols](july-25.md#updates-on-first-class-protocols)
- [Temporal](july-26.md#temporal-proposal-update)


## Changes to existing specification

### Consensus Reached Pull Requests 
- [Rename `Atomics.wake` to `Atomics.notify`](july-24.md#atomicsnotify) ([Pull Request](https://github.com/tc39/ecma262/pull/1220))

## General Discussions 
Topics related to ECMAScript specification activities. 
- [Report on Realms shim Security Review](july-24.md#report-on-realms-shim-security-review)
- [TC53 introduction for TC39](july-24.md#tc53-introduction-for-tc39)
- [User testing (e.g. usability or learnability): call for resources](july-24.md#user-testing-eg-usability-or-learnability-call-for-resources)
- [Website and Documentation project update](july-25.md#website-and-documentation-project-update)
- [Groups](july-25.md#groups)
- [Abstractions for membranes](2018-07/july-26.md#abstractions-for-membranes)
- [Reviewing the future JS syntax throughout the current proposals](july-26.md#reviewing-the-future-js-syntax-throughout-the-current-proposals-overflow)
- [Package name maps](july-26.md#package-name-maps)
- [Layered APIs](2018-07/july-26.md#layered-apis)
- [Get Originals](july-26.md#get-originals)


## Updates from ECMA-262 Editors Group
ES2019 now includes:
1. ECMAScript is now a superset of JSON.
2. The catch binding is now optional. 
3. bugfixes and few needs-consensus PRs.


## Organizational update
- TC39 welcomed 4 new voting members, Agoric Systems (SPC), npm (SME), Stripe (OM), and Igalia (SME).
- TC39 Chairperson or Chair Group for 2019 will be nominated for September meeting and planned to have vote at November meeting. 
- ECMA has approved “Ecma Fellow" to accomodate individuals with extraordinary, contribution to participate in TCs. TC39 can nominate such members to be approved at December 2018 General Assembly
- [Management/infrastructure tasks; invited expert policy; meeting planning](july-24.md#managementinfrastructure-tasks-invited-expert-policy-meeting-planning) ([slides](https://docs.google.com/presentation/d/1eTBTMZzylhZR4v7Hgfd3UJYwLBgQZgX8q8fGvsvcNDE/edit#slide=id.p))
- [September 2019 Meeting Locations](july-26.md#september-2019-meeting-location)
