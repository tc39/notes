# Summary for the 59th meeting of Ecma TC39

- [Agenda](/master/2017/09.md)

## General

- The Code of Conduct Enforcement Committee [is being formed](sep-26.md#code-of-conduct-update). Maggie Pint should [lead the work from now on](sep-28.md#updates-on-the-code-of-conduct-enforcement-committee).
- Additions to the meetings agenda now have a [defined deadline](sep-28.md#process-for-adding-agenda-items).

### New Proposals
- [Pipeline Operator](sep-26.md#11iia-pipeline-operator) Stage 1
- [Extensible Literals](sep-26.md#11iic-extensible-literals) Stage 1
- [First Class Protocols](sep-26.md#11iva-first-class-protocols) Stage 1
- [Make EcmaScript a syntactic superset of JSON](sep-27.md#12ie-make-ecmascript-a-syntactic-superset-of-json-for-stage-1) Stage 1
- [Partial application](sep-28.md#13i-partial-application) to Stage 1
- [Nullary Coalescing Operator](sep-28.md#13iii-nullary-coalescing-operator) to Stage 1

### Moving Foward
- [Throw Expressions](sep-27.md#12iid-throw-expressions-for-stage-2) from Stage 1 to Stage 2
- [Private Methods and Accessors](sep-27.md#12iva-private-methods-and-accessors-for-stage-3) from Stage 2 to Stage 3
- [`import.meta`](sep-27.md#12iiic-importmeta-for-stage-3) from Stage 2 to Stage 3
- [`Atomics.waitAsync`](sep-26.md#12ig--atomicswaitasync-for-stage-2) to Stage 2
- [`Array.prototype.flatMap` and `Array.prototype.flatten`](sep-26.md#12if-flatmap-for-stage-2) from Stage 1 to [Stage 2](sep-28.md#15i-flatmap-for-stage-3)
- [`String.prototype.matchAll`](sep-27.md#12iiia-stringprototypematchall) to [Stage 2](sep-28.md#15iii-stringprototypematchall-for-stage-2)
- Intl:
  - [`Intl.NumberFormat.prototype.formatToParts`]() to Stage 4
  - [`Intl.PluralRules`](sep-26.md#12ig-intlpluralrules-for-stage-4) to Stage 4
  - [`Intl.Segmenter`](sep-26.md#12ib-intlsegmenter-for-stage-3) to Stage 3
  - [`Intl.RelativeTimeFormat`](sep-26.md#12ic-intlrelativetimeformat-for-stage-3) to Stage 3
  - [`Intl.Locale`](sep-26.md#12iia-introducing-intllocale-for-stage-2) to Stage 1

### Others

_Proposals not advancing to new a new stage. e.g.: development updates, needs work, no consensus, etc)._

- [Decorators: detailed discussion of proposed semantics](sep-28.md#12ivb-decorators-detailed-discussion-of-proposed-semantics-cont), reviewers identified
- [Optional Chaining Operator](sep-27.md#12iiib-optional-chaining-operator-for-stage-2)
- [Numeric Literal Separator](sep-28.md#numeric-literal-separator-to-stage-3)
- [Promise.prototype.finally status update](sep-28.md#promiseprototypefinally-status-update)
- [ArrayBuffer.transfer](sep-28.md#arraybuffertransfer)
- [Float16 TypedArrays](sep-28.md#float16-typed-arrays)
- [Object Shorthand Improvements](sep-28.md#13i-object-shorthand-improvements) not promoted to Stage 1
- [`Builtins.typeOf()` and `Builtins.is()`](sep-28.md#14ia-builtinstypeof-and-builtinsis) not promoted to Stage 1

### Pull Requests with normative changes

- [#778 Timezone Tweak](sep-26.md#12ij-timezone-tweak): Consensus Achieved
- [#984 Early errors for RegExp literals](sep-26.md#12ii-early-errors-for-regexp-literals): Consensus Achieved
- [#988 Iteration protocol change](sep-26.md#12im-iteration-protocol-change): Consensus Achieved
- [#888 Sloppy function hoisting web reality tweak](sep-26.md#12ik-sloppy-function-hoisting-web-reality-tweak): Consensus Achieved
- [#890 Template literal memory leak fix](sep-27.md#12iic-needs-consensus-pr-template-literal-memory-leak-fix): Achieved consensus for PR
- [#1005 export-ns-from](sep-26.md#12il-export-ns-from) Consensus Achieved, needs tests
