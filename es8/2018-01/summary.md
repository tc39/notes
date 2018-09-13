# Summary for the 62nd meeting of Ecma TC39

- [Agenda](https://github.com/tc39/agendas/blob/master/2018/01.md)

## General

- [Code of Conduct updates](jan-23.md#13iie-code-of-conduct-committee-update-prs-call-for-participants) properly forming a list of members for its enforcement team.
- ECMA404 is an [ISO standard (ISO-21778)](jan-23.md#9-ecma404-status-updates)
- TC39 [adopted](jan-23.md#13ia-tc39-logo) an [official logo](https://github.com/tc39/logo)
- Mathias Bynens introduced jsvu to provide [an easier use of eshost workflow](jan-23.md#13iia-making-eshost-workflow-more-accessible-with-jsvu)
- A [new form for contributions is adopted](jan-23.md#13iig-invited-expertspecification-contributor-forms). It's already applied for the [Test262 CLA sign up](http://tc39.github.io/Test262-cla/).
- The Chair group (Rex, Dan, Leo) was [unanimously reelected for 2018](jan-24.md#6i-chair-group-in-2018).
- TC39 has now an Editor Group with Brian Terlson, Jordan Harbard, and Bradley Farias [to present in March, tentatively planning for the three of them to be joint editors](jan-24.md#6ii-editor-group).
- Status updates on Test262 with [contribution reports and lists of recent coverages, improvements, a non-browsers community users](jan-23.md#11-Test262-status-updates).

### New Proposals

- [{BigInt,Number}.fromString](jan-23.md#13iic-bigintnumberfromstring-for-stage-1) Stage 1
- [Math.seededRandoms()](jan-23.md#13iif-mathseededrandoms-for-stage-1) Stage 1
- [Function.prototype.toString() censorship](jan-23.md#functionprototypetostring-censorship-for-stage-1) Stage 1
- [Top-level await](jan-24.md#13iiil-top-level-await-for-stage-0) to Stage 1
- [Maximally minimal mixins proposal](jan-23.md#13iiie-maximally-minimal-mixins-proposal) to [Stage 1](jan-24.md#revisiting-mixins-vs-protocols-proposal).
- [Getting last item from Array](jan-24.md#13iiim-getting-last-item-from-array-for-stage-2) to Stage 1 with plans for further work.

### Moving Forward

- [ECMAScript as a syntatic superset of JSON](jan-23.md#13iib-make-ecmascript-a-syntactic-superset-of-json-for-stage-3) to Stage 3
- [String.prototype.{trimStart,trimEnd}](jan-23.md#13iid-stringprototypetrimstarttrimend-for-stage-3) to Stage 3
- Several advancements for new RegExp features.
    - [dotAll](jan-23.md#13iij-regexp-lookbehind-assertions-for-stage-4) to Stage 4
    - [named capture groups](jan-23.md#13iij-regexp-lookbehind-assertions-for-stage-4) to Stage 4
    - [lookbehind](jan-24.md#13iij-regexp-lookbehind-assertions-for-stage-4) to Stage 4
    - [Unicode property escapes](jan-24.md#13iik-regexp-unicode-property-escapes-for-stage-4) to Stage 4
- [String.prototype.matchAll](jan-23.md#13iiib-stringprototypematchall-for-stage-3) to Stage 3
- [Symbol.prototype.description](jan-23.md#13iiid-symbolprototypedescription) to Stage 2
- [Rest/Spread properties](jan-23.md#restspread-properties-for-stage-4) to Stage 4
- [Promise.prototype.finally](jan-24.md#13iiia-promiseprototypefinally-for-stage-4) to Stage 4
- [Intl.ListFormat, Intl.RelativeTimeFormat](jan-24.md#13iiio-intl-proposals-for-stage-3-intllistformat-intlrelativetimeformat) to Stage 3
- [Async Iteration](jan-25.md#13iih-async-iteration-for-stage-4) to Stage 4
- [Intl.RelativeTimeFormat, Intl.Locale](jan-25.md#13iiio-intlrelativetimeformat-intllocale-for-stage-3) to Stage 3

### Others

_Proposals not advancing to new a new stage. e.g.: development updates, needs work, no consensus, etc)._

- [Function.prototype.toString](jan-23.md#13iiic-functionprototypetostring-pr-for-stage-4) still on Stage 3 with plans for a follow up work.
- [Making nullish values iterable, or at least array-spreadable](jan-23.md#13iiif-pr-making-nullish-values-iterable-or-at-least-array-spreadable) discussion to follow up on the respective [PR](https://github.com/tc39/ecma262/pull/1069).
- [new Set builtin methods](jan-23.md#13iiik-new-set-builtin-methods-for-stage-2) for further discussion before advancing to Stage 2.
- [Optional Chaining updates](jan-24.md#13iiin-optional-chaining-update).
- Discussion on [operator overloading](jan-24.md#13vd-operator-overloading-for-stage-1), not advancing to Stage 1 for now to collect requirements.
- [TC39 should endorse use of a (one-of-several, not one specific recommended) parsing linter or actual compiler, not any particular semicolon style](jan-24.md#15iiia-tc39-should-endorse-use-of-a-one-of-several-not-one-specific-recommended-parsing-linter-or-actual-compiler-not-any-particular-semicolon-style).
- Discussion on [use cases of Decorators](jan-24.md#13iiij-decorators-use-cases).
- Updates on [Decorators](jan-25.md#13vc-decorators-towards-stage-3) to further advancement to Stage 3.
- Updates on [Static Class features](jan-25.md#13vb-static-class-features-proposal), no advancement.
- Updates on [BigInt](jan-25.md#13va-bigint-status-update-significant-recent-change) status.
- [Open-ended discussion: Exploring Statements as Expressions.](jan-25.md#open-ended-discussion-exploring-statements-as-expressions), not advancing yet, some concerns to be addressed first.
- [issue about process, coordinating with other standards bodies](jan-25.md#issue-about-process-coordinating-with-other-standards-bodies).
