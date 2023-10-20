# Summary for the 77th meeting of Ecma TC39

Ecma Technical Committee 39 held a four day meeting hosted remotely on July 20th - July 23rd, 2020. [Agenda can be found here](https://github.com/tc39/agendas/blob/master/2020/07.md).

## Broad presentations

- [Cognitive Dimensions of Notation: a framework for reflecting on language design](https://docs.google.com/presentation/d/1OpKfS5UYgcwmBuejoSOBpbgsYXXzO0gG7GJHo65UXPE) by Yulia Startsev and Dr. Felienne Hermans
- Examining Structural Racism in TC39: [issue](https://github.com/tc39/Reflector/issues/305), [slides](https://docs.google.com/presentation/d/1i9-VCNi4KZNisntn9TTCFaZhrPwMQr4XuYEqHBg7pAE)
- Documenting invariants (Yulia Startsev): [repo](https://github.com/codehag/documenting-invariants), [slides](https://docs.google.com/presentation/d/1a9-E87grtSbFGTHMfEJJoVjbHbSTe2PH_ed8StssZ_w)
- Many specific invariants to consider (Mark S. Miller): [slides](https://github.com/tc39/agendas/raw/master/2020/07-slides-some-invariants.pdf)

## Updates

- [ECMA-262 Editors Update](https://docs.google.com/presentation/d/1O8wGWehzMhqb_Jz2JfmyUxyUepxanc8sEVMlTRUVnfo)
- [TC39/TG2 - ECMA-402](https://docs.google.com/presentation/d/1C54jVjcuE27wq658CbMi0KEfa5ded_WIWvdq1JP8QDI)
- [Test262](https://docs.google.com/presentation/d/1tsqTUZioHi8YxRF_CapxcZTjZQYDClEgXOFUm0W4gHg)
- Decorators status update: [proposal](https://github.com/tc39/proposal-decorators/), [slides](https://slides.com/pzuraq/decorators-3cb407)
- Iterator Helpers update: [proposal](https://github.com/tc39/proposal-iterator-helpers), [slides](https://docs.google.com/presentation/d/1YNLzi_ENRtxp5bjhXMUplQ0VIQBUFLyucbNFt_oaNgQ)
- Upsert (now renamed emplace) updates: [proposal](https://github.com/tc39/proposal-upsert), [slides](https://docs.google.com/presentation/d/16PtTpuvkTFycaaqkk5XGZRPLNwzUrzBuN9y7VSrGX9k/edit#slide=id.p)
- Flex Incubator Calls to weekly meetings: TC39 decided to continue incubator calls bi-weekly by default, and might extend to weekly meetings on demand.

## Advancing Proposals

### No Stage

- Arbitrary Module Namespace Identifiers: [proposal](https://github.com/bmeck/proposal-arbitrary-module-namespace-identifiers). Consensus, but this is becoming an immediate PR to ECMA-262 without full proposal process due to its size.

### Stage 4

- Promise.any & AggregateError: [proposal](https://github.com/tc39/proposal-promise-any), [slides](https://docs.google.com/presentation/d/1PcfPP5nLVG8w5OosQt5PWwOmFUPuD5pg1rgGaF1JVis), [tc39/ecma262#2040](https://github.com/tc39/ecma262/pull/2040)
- Intl.ListFormat: [proposal](https://github.com/tc39/proposal-intl-list-format), [slides](https://docs.google.com/presentation/d/13gxxnt-JMuWXJhzwuU2jtBRZ8RGJgJ0Y8RsIvHEQU7k/edit#slide=id.p)
- Intl.DateTimeFormat dateStyle/timeStyle: [proposal](https://github.com/tc39/proposal-intl-datetime-style), [slides](https://docs.google.com/presentation/d/1USMb1b_1zDMAlw3Aw5k9DpqZsZ3NS_q9gOyhRCQc-qg)
- WeakRefs + FinalizationRegistry (but cleanupSome demoted to Stage 2): [WeakRefs proposal](https://github.com/tc39/proposal-weakrefs/), [CleanupSome proposal](https://github.com/codehag/proposal-cleanup-some), [tc39/ecma262#2089](https://github.com/tc39/ecma262/pull/2089), [slides](https://docs.google.com/presentation/d/1NYhEELzOnhJGU7inKz0r0TrEa0h33krr1nEb3X_ze5w)
- Logical Assignment (`x ||= y`, `x ??= y`, `x &&= y`): [proposal](https://github.com/tc39/proposal-logical-assignment), [slides](https://docs.google.com/presentation/d/1rq448C-mzxWzBs6RTInczGTjs4xv5gQenDJY1fGogX0), [tc39/ecma262#2030](https://github.com/tc39/ecma262/pull/2030)
- NumericLiteralSeparator: [proposal](https://github.com/tc39/proposal-numeric-separator), [slides](https://docs.google.com/presentation/d/1rLT5m3d0yk2KMlka4KZKf2uz9oITdpfr6evAV_jaKcc), [tc39/ecma262#2043](https://github.com/tc39/ecma262/pull/2043)

### Stage 3

- Intl.Segmenter: [proposal](https://github.com/tc39/proposal-intl-segmenter), [slides](https://docs.google.com/presentation/d/1LOOt4WPvQdOK3banHkz1V8sdl8Z-7Z9jXBRRS9Ek8-M)

### Stage 2

- String/Array/TypedArrays `.item()` for Stage 2: [proposal](https://github.com/tabatkins/proposal-item-method), [slides](https://docs.google.com/presentation/d/1N-oXRRKDA7patBA4HIYkzN67j1pbyOxuDZoYRvPFmuA)
- Record and Tuple: [proposal](https://github.com/tc39/proposal-record-tuple), [slides](https://button.dev/talks/record-and-tuple-tc39-july-2020.pdf)
- JSON.parse source text access: [proposal](https://tc39.es/proposal-json-parse-with-source/), [slides](https://docs.google.com/presentation/d/1MGJhUvrWl4dE4otjUm8jXDrhaZLh9g7dnasnfK-VyZg/edit?usp=sharing)

### Stage 1

- await operations: [proposal](https://jack-works.github.io/proposal-await.ops/), [slides](https://docs.google.com/presentation/d/116FDDK2klJoEL8s2Q7UXiDApC681N-Q9SwpC0toAzTU/edit#slide=id.g89f56b0333_1_40)
- `Array.prototype.unique()`, [proposal](https://github.com/TechQuery/array-unique-proposal), [slides](https://docs.google.com/presentation/d/116FDDK2klJoEL8s2Q7UXiDApC681N-Q9SwpC0toAzTU/edit#slide=id.g89f56b0333_1_150)
- ResizableArrayBuffer and GrowableSharedArrayBuffer: [proposal](https://github.com/syg/proposal-resizablearraybuffer), [slides](https://docs.google.com/presentation/d/17QwbVQEYClzfCDGgWyZg0V_zTC1DWsNwPWvJPuXIqRg)

## Non Advancing proposals

- Class static blocks for Stage 2: [proposal](https://tc39.es/proposal-class-static-block/), [slides](https://onedrive.live.com/view.aspx?resid=934F1675ED4C1638!291940&ithint=file%2cpptx&authkey=!ADFod3jufA89iM8)
- `cleanupSome` detached from the WeakRefs proposal and demoted to Stage 2: [proposal](https://github.com/codehag/proposal-cleanup-some), [slides](https://docs.google.com/presentation/d/1NYhEELzOnhJGU7inKz0r0TrEa0h33krr1nEb3X_ze5w)
- Slice notation for Stage 2 (`arr[1: 4]`): [proposal](https://github.com/tc39/proposal-slice-notation), [slides](https://docs.google.com/presentation/d/1EBpiGuYn2ChDvcd67fpz6gGY14kO8VCuAKOhFMxOqEQ)
- Import Conditions for Stage 3: [proposal](https://github.com/tc39/proposal-import-conditions), [slides](https://docs.google.com/presentation/d/18THsm_ZAog70m0ZlEokRCfyrarMiA1yr6YDAvFXjVNU)
- `Number.range` for Stage 2: [proposal](https://github.com/tc39/proposal-Number.range), [slides](https://docs.google.com/presentation/d/116FDDK2klJoEL8s2Q7UXiDApC681N-Q9SwpC0toAzTU/edit#slide=id.p)
- Symbols as WeakMap keys for stage 2: [proposal](https://github.com/tc39/proposal-symbols-as-weakmap-keys), [slides](https://docs.google.com/presentation/d/1AofgrikRJp4vTc_tqlchDk4DU9p4eqZdyxnlrFEYsvc/edit#slide=id.p)
- Ergonomic brand checks for private fields for stage 3 (continuation from day 2): tc39/proposal-private-fields-in-in#7: https://gist.github.com/hax/5e94c7959703ea95d4ff9c9deac12988
- Async Context for Stage 1: [proposal](https://github.com/legendecas/proposal-async-context), [slides](https://docs.google.com/presentation/d/1Ef2JI4ntkWd-M8fDqOGZGGh7CiPD05L39CZRSv1II_0/edit?usp=sharing)

## PRs w/ consensus

- Retroactive consensus on Unicode 13 property names and aliases: tc39/ecma262#1896, tc39/ecma262#1939
- Specify \8 and \9 in sloppy (non-template) strings: tc39/ecma262#2054
- Adding `Reflect[Symbol.toStringTag]`: tc39/ecma262#2057
- ECMA-402: Allow Collator to get collation from option: tc39/ecma402#459
- ECMA-402: Handle awkward rounding behaviour: tc39/ecma402#471 ([slides](https://docs.google.com/presentation/d/1QGUTz61o-X_HEgYrkTUXtScoRpu_KhXsoKxGyMQJthc))
- Strictness check for object's SetMutableBinding: tc39/ecma262#2094, [slides](https://docs.google.com/presentation/d/1O_YdntfiZMTsxX_2FPk1YZypEy1vncL3X1NCg-vmC1E)
- Fix Function.toString for builtins: tc39/ecma262#1948
- Host hooks for Job callbacks: tc39/ecma262#2086, [slides](https://docs.google.com/presentation/d/19S97ZqhibJABqzeP5ZU6Flk6TVgWzXuvJWFbNTTfpWs/edit?usp=sharing)

## PRs rejected or without consensus

### Should `eval?.()` be direct `eval`?

Links: tc39/ecma262#2062, tc39/ecma262#2063

Mainstream browsers were shipping `eval?.(str)` as a direct eval, using the function scope similarly to `eval(str)` but spec says it is indirect, and code evaluates using the global scope, similarly to `(0, eval)(str)`. TC39 decided it continues to be _indirect eval_, without changes to the specs.

### Forbid Numeric Separators in NonOctalDecimalIntegerLiteral fractional / exponent parts

Link: tc39/ecma262#2090

The numeric separators are forbidden in legacy (_Annex B_) number notations, like non-octals `081`. Although, TC39 will not disallow separators in the exponential parts and fraction parts of these legacy numbers due to current implementations support and excessive tailoring of the spec text. This means `08.1_0` and `08e1_0` are allowed and will remain allowed by the specs. Non octals are only possible in non-strict mode anyway.
