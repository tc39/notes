# Summary for the 59th meeting of Ecma TC39

- [Agenda](https://github.com/tc39/agendas/blob/master/2017/07.md)

## General

- The __Code of Conduct__ is now accepted and it is now effective. The enforcement subcommittee will now be formed and the respective proposal should have a proper presentation.
- A new chair group with [Rex Jaeschke](http://rexjaeschke.com/) as the new chair, and Daniel Ehrenberg and Leo Balter as vice chairs.

## New Proposals

- [Cancellation](jul-25.md#9iva-cancellation): advanced to Stage 1 with six champions to investigate API that is compatible across platforms
- [Symbol.prototype.description](jul-25.md#11iib-symbolprototypedescription): advanced to Stage 1 for further discussion.
- [Binary AST](jul-26.md#13iiic-binary-ast): advanced to Stage 1 to keep exploring the design space
- [Number.parseInt and Number.parseFloat changes](jul-26.md#13iib-consider-changing-numberparseint-and-numberparsefloat): Brendan Eich will prepare a Stage 1 proposal to return `NaN` instead for `null`, `undefined`, and `NaN`.
- [Optional Catch Binding `try {} catch {} `](jul-27.md#11iva-optional-catch-binding): advanced straight to Stage 3
- [Array.prototype.flat{ten, Map}](jul-27.md#11iiib-arrayprototypeflatten-map): Stage 1, willing to explore alternatives to isConcatSpreadable
- [Throw Expressions `throw new Error('')`](jul-27.md#13iiif-throw-expressions): Stage 1, to explore the space of turning statements into expressions.

## Moving Forward

- [Promise.prototype.finally](jul-25.md#11iic-promiseprototypefinally-seeking-stage-3): advanced to Stage 3
- [Intl.RelativeTimeFormat](jul-25.md#11iid-intlrelativetimeformat-for-stage-2): advanced to Stage 2, with specific terminology to be discussed
- [BigInt `10n`](jul-26.md#11iiia-bigint-for-stage-3): advanced to Stage 3
- [Numeric Separators `1_000`](jul-27.md#11iig-numeric-separators-for-stage-2): advanced to Stage 2
- [export-ns-from `export * as ns from 'mod'`](jul-27.md#11iie-export-ns-from-and-export-default-from-for-stage-2): advanced as a "needs consensus PR" to be presented in a further meetings for final approval.
- [Temporal Proposal](jul-27.md#11iif-temporal-proposal-updates): remained on Stage 1, but addressed important questions for futher advancing.
- [Class Fields](jul-27.md#11ivc-class-fields-for-stage-3): advanced to Stage 3
- [Private methods and accessors](jul-27.md#11ivd-private-methods-and-accessors-for-stage-2): advanced to Stage 2

## Needs work

- [Intl.Segmenter](jul-25.md#11ia-intlsegmenter-for-stage-3): remains on Stage 2. It needs more discussion on implementing/adopting ICU before advancing to Stage 3.
- [Function.prototype.toString](jul-25.md#11iia-functionprototypetostring-looking-for-stage-4): remains on Stage 3, waiting for implementation feedback.
- [Module/script pragma, "use module";](jul-26.md#9ivb-modulescript-pragma-for-stage-2): remains on Stage 1, to advance, "_someone should collect data on how often on the web modules are loaded as scripts and vice-versa, and report back_".
- [export-default-from `export default from 'mod'`](jul-27.md#11iie-export-ns-from-and-export-default-from-for-stage-2): remains on Stage 1 for refining and further discussions.
- [Decorators](jul-27.md#11ive-interaction-of-privacy-fields-and-decorators): remains on Stage 2, but got an important revamp.
- [Optional Chaining Operators](jul-27.md#13iia-optional-chaining-operator): remains on Stage 1, will come back later with clearer definitions for various options and answers to feedback




