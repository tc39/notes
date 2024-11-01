# 104th meeting of Ecma TC39 Summary

## Proposals

| Advanced to | Proposal                           |
| ----------- | ---------------------------------- |
| Stage 4     | RegExp modifiers                   |
| Stage 4     | JSON modules and import attributes |
| Stage 4     | Iterator helpers                   |
| Stage 4     | `Promise.try`                      |
| Stage 3     | `Math.sumPrecise`                  |
| Stage 3     | `Atomics.pause`                    |
| Stage 2.7   | `Error.isError`                    |
| Stage 2.7   | Iterator sequencing                |
| Stage 2     | Iterator chunking                  |
| Stage 2     | Structs and shared structs         |
| Stage 2     | Extractors                         |
| Stage 1     | `Array.zip`                        |
| Stage 1     | Immutable ArrayBuffers             |
| Stage 1     | Measure object                     |

- Temporal: The proposal is as close to frozen as anything can be in Stage 3. Implementations should complete work on the proposal and ship it, and let the champions know ASAP if anything is blocking or complicating that. Firefox is close to shipping Temporal in Nightly builds, after some work is done in ICU4X.
- Decimal: Support for IEEE 754 quantum/precision has been removed

## Task groups

- TG4: TC39 will refer the source map specification to the Ecma GA for standardization, beginning the 60-day opt-out period
- TG5: introduction of Proposal Management and Technical Arbitration Tool

## Other

- Big thanks to our meeting host Sony
- Porffor JS engine was introduced
- Explicit compile hints: MHA presented a planned Chromium feature where we enable web developers to attach directions about which functions should be eager-compiled by the JavaScript engine
- JSSugar / JS0
  - Champions requested delegates take problem statement to heart
  - No consensus on JSSugar/JS0 (there was no plan with concrete specifics anyhow)
