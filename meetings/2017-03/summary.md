# Summary for the 57th meeting of Ecma TC39

- [Agenda](https://github.com/tc39/agendas/blob/master/2017/03.md)
- ES2017 was officially approved by the committee to be sent to the ECMA General Assembly for approval. [notes](mar-21.md#6ii-vote-to-accept-ecma-262-2017-final-draft-and-forward-it-to-ecma-ga-approval-subject-to-completion-of-rf-opt-out-period-with-no-opt-outs)
- A [Code of Conduct][] was presented, based on an open process of feedback over the previous two months. The committee shares the goal of being open and welcoming to diversity and is working through issues of scope and enforcement. The current draft will be sent to the ECMA Executive Committee for
review and approval.
- Several RegExp feature enhancements reached Stage 3; these and [more may be in store for ES2018](mar-21.md#any-items-for-the-2018-edition)
  - Lookbehind Assertions: [notes][lookbehind-notes], [proposal][lookbehind]
  - Unicode property escapes: [notes][property-escapes-notes], [proposal][property-escapes]
  - Named Capture Groups: [notes][named-groups-notes], [proposal][named-groups]
  - `s` (dotAll) flag: [notes][dotall-flag-notes], [proposal][dotall-flag]
- [Arbitrary-precision Integers][] were introduced and reached Stage 2. [notes](mar-23.md#10iva-arbitrary-precision-integer-type-for-stage-2)
- A [proposal](https://github.com/tc39/proposal-template-literal-revision) allowing what would otherwise be invalid escape sequences in tagged template literals reached stage 4.
- A [new built-in Date replacement][date] reached Stage 1. [notes](mar-23.md#12iia-date-proposal---nodatime-as-a-built-in-module-for-stage-1)
- The Stage 1 [Realms][] proposal has been solidifying, with hooks for the module loading pipeline. [notes](mar-23.md#10iic-realms-update)
- Several Intl proposals were presented [notes](mar-21.md#7-ecma-402-status-update-1)
  - [Intl.ListFormat][] reached Stage 2.
  - [dateStyle/timeStyle][] reached Stage 1.
  - Identified reviewers for [Intl.Segmenter][]. [notes](mar-21.md#10ih-intlsegmenter-requesting-stage-3)
- There is an [alternative proposed unifying syntax][Orthogonal-Classes] for class features. [notes][Orthogonal-Classes-notes]
- [WeakRefs][] is seeking implementations to work with and develop feedback. [notes](mar-21.md#weak-references-status-update)
- Browsers are no longer pursuing SIMD.js, in favor of SIMD exposed by WASM. [notes](mar-21.md#10if-simdjs-status-update)
- The role of Annex B (normative-optional, web required) specification text came up in a few topics. There's disagreement about the current role and appropriateness, to be revisited in a future meeting. [notes](mar-21.md#any-items-for-the-2018-edition)
- Several needs-consensus pull requests reached consensus, tightening up semantics in edge cases. [notes](mar-22.md#12-i-needs-consensus-prs)
  - [#856](https://github.com/tc39/ecma262/pull/856) ([notes](mar-22.md#856-avoid-duplicate-tafill-value-coercions)), [#854](https://github.com/tc39/ecma262/pull/854) ([notes](mar-22.md#854-remove-implementation-defined-behavior-for-number-methods)), [#785](https://github.com/tc39/ecma262/pull/785) ([notes](mar-22.md#785-arrayprototoypesort-checks-for-comparefn-being-valid)), [#833](https://github.com/tc39/ecma262/pull/833) ([notes](mar-22.md#833-remove-duplicate-keys-from-proxies)), [#852](https://github.com/tc39/ecma262/pull/852) ([notes](mar-22.md#852-move-side-effecty-toindex-in-ta-constructor-to-before-detached-check)), [#853](https://github.com/tc39/ecma262/pull/853) ([notes](mar-22.md#853-stringprototypereplace-edge-case-alignment))

[Code of Conduct]: https://tc39.es/code-of-conduct-proposal/
[Orthogonal-Classes]: https://github.com/erights/Orthogonal-Classes
[Orthogonal-Classes-notes]: mar-22.md#10iiia-orthogonal-classes
[lookbehind]: https://github.com/tc39/proposal-regexp-lookbehind
[lookbehind-notes]: mar-21.md#10ib-regexp-lookbehind-assertions
[property-escapes]: https://github.com/tc39/proposal-regexp-unicode-property-escapes
[property-escapes-notes]: mar-21.md#10ic-regexp-unicode-property-escapes-for-stage-3
[named-groups]: https://github.com/tc39/proposal-regexp-named-groups
[named-groups-notes]: mar-21.md#10iib-regexp-named-groups-for-stage-3
[dotall-flag]: https://github.com/mathiasbynens/es-regexp-dotall-flag
[dotall-flag-notes]: mar-21.md#10id-regexp-dotall-flag-for-stage-2
[legacy-features]: https://github.com/tc39/proposal-regexp-legacy-features
[legacy-features-notes]: mar-21.md#10ie-regexp-legacy-features-for-stage-3
[matchAll]: https://github.com/tc39/String.prototype.matchAll
[Arbitrary-precision Integers]: https://github.com/tc39/proposal-integer
[date]: https://github.com/maggiepint/proposal-temporal
[Realms]: https://github.com/tc39/proposal-realms/
[Intl.Segmenter]: https://github.com/tc39/proposal-intl-segmenter
[WeakRefs]: https://github.com/tc39/proposal-weakrefs
[Intl.ListFormat]: https://github.com/zbraniecki/intl-list-format-spec
[dateStyle/timeStyle]: https://github.com/zbraniecki/proposal-ecma402-datetime-style
