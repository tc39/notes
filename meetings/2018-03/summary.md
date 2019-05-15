# Summary for the 63rd meeting of Ecma TC39

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/03.md)

## General

- [Open-ended discussion: How should we evolve the JavaScript standard library over time?](mar-20.md#9iv-open-ended-discussion-how-should-we-evolve-the-javascript-standard-library-over-time)
- [Update on Array.prototype.flatten web incompatibility](mar-20.md#10ig-update-on-arrayprototypeflatten-web-incompatibility)
  - [Follow up: Champions will pick a name and bring one or several to the committee](mar-22.md#10ig-update-on-arrayprototypeflatten-web-incompatibility)
- [Update on WASM ES modules](mar-20.md#10ih-update-on-wasm-es-modules)
- [Update on improved TC39 documentation efforts](mar-20.md#10ii-update-on-improved-tc39-documentation-efforts)
- [What does 1JS mean in a world of transpilers?](mar-21.md#12iiib-what-does-1js-mean-in-a-world-of-transpilers)
- [Test262 Status Updates](mar-22.md#7iv-Test262-status-updates-15m) with a short summary from the latest work.
- [Summarize classes](mar-22.md#summarize-classes)

### New Proposals

- [Debugger operands](mar-20.md#10id-debugger-operands-for-stage-1) on Stage 1, with requirements set before it advances to Stage 2.
- [Logical Assignment Operators](mar-20.md#10ie-logical-assignment-operators-for-stage-1) on Stage 1
  - [discussion follow up on Mar 22 reaching consensus](mar-22.md#10ie-logical-assignment-operators-for-stage-1-cont)
- [Object.fromEntries](mar-20.md#10if-objectfromentries-for-stage-1) on Stage 1
- [Richer Keys](mar-21.md#10iib-richer-keys-for-stage-1) on Stage 1
- [Slice notation](mar-22.md#slice-notation-for-stage-1) on Stage 1

### Moving Forward

- PRs:
  - [Add RegExp lookbehind to annex-B](mar-20.md#8ia-normative-add-regexp-lookbehind-to-annex-b) Approved PR
  - [Fix length property of TypedArrays, DataView, and ArrayBuffer constructors](mar-20.md#8ib-normative-fix-length-property-of-typedarrays-dataview-and-arraybuffer-constructors) Rejected PR, leaving `DataView.length === 1`.
  - [Strengthen Atomics.wait/wake synchronization](mar-20.md#8id-strengthen-atomicswaitwake-synchronization) Approved PR
  - [Array Buffer Detach layering improvement](mar-20.md#8ie-array-buffer-detach-layering-improvement) Approved PR
  - [Expand text included in "function code"](mar-22.md#8ic-expand-text-included-in-function-code) Approved PR through a specific change (SyntaxError for both cases).
- [Hashbang Grammar](mar-21.md#10iic-hashbang-grammar-for-stage-2) on Stage 2
- [Weak References](mar-22.md#weak-references-for-stage-2) on Stage 2

### Others

_Proposals not advancing to new a new stage. e.g.: development updates, needs work, no consensus, etc)._

- [Update on Frozen Realms in light of Meltdown and Spectre](mar-20.md#10ia-update-on-frozen-realms-in-light-of-meltdown-and-spectre)
- [Getting last item of Array](mar-20.md#10ic-getting-last-item-of-array-for-stage-2) not advancing to Stage 2 yet.
- [Await in parameter defaults for non-arrow async functions](mar-20.md#10ij-await-in-parameter-defaults-for-non-arrow-async-functions)
- [JavaScript Classes 1.1](mar-21.md#10ivb-javascript-classes-11), no consensus for the proposal as a whole but lots of thoughts for discussion. _The committee was critical of several aspects of the JS classes 1.1 proposal, but there was some support for a couple aspects_.
- [Static public fields](mar-21.md#10ivc-static-public-fields-for-stage-3) not advancing to Stage 3 yet.
- [Decorators towards](mar-21.md#decorators-towards-stage-3) not advancing to Stage 3 yet, still needs work over syntax and a follow up over private names semantics.
- [BigInt status update](mar-22.md#bigint-status-update) with follow ups for the semantics
- [Optional chaining](mar-22.md#optional-chaining-for-stage-2) not advancing to stage 2 yet.
- [Nullish coalescing](mar-22.md#10iif-nullish-coalescing-for-stage-2) not advancing to stage 2 yet, more discussion needed.
- [Seeking a new champion for function.sent](mar-22.md#functionsent-needs-a-champion)
- [Pipeline operator](mar-22.md#pipeline-operator): __no conclusion recorded__
