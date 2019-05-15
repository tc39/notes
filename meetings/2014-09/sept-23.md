# September 23, 2014 Meeting Notes       
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jeff Morrison (JM), Jonathan Turner (JT), Sebastian Markbåge (SM), Erik Arvidsson (EA), Brendan Eich (BE), Domenic Denicola (DD), Peter Jensen (PJ), Eric Toth (ET), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), Simon Kaegi (SK), Boris Zbarsky (BZ), Andreas Rossberg (ARB), Caridy Patiño (CP), Niko Matsakis (NM), Mark S. Miller (MM), Matt Miller (MMR), Jaswanth Sreeram (JS)

Remote: 
István Sebestyén (IS)

-----

## Welcome

RW: (explanation of evening meetup)

TC39 expresses its appreciate to Bocoup for hosting and ECMA for dinner.


JN: Adoption of agenda?

Approved: https://github.com/tc39/agendas/blob/master/2014/09.md


JN: Approval of minutes (July 2014)


#### Conclusion/Resolution

- Agenda approved
- Previous Minutes approved.`



## 4.1 Spec status report

(Allen Wirfs-Brock)

[Rev27meeting_review.pdf](./Rev27meeting_review.pdf)

AWB: 
    
- Added %IteratorPrototype% that all built-in iterators inherit from.

Issue: 
    
Should %IteratorPrototype% define an @@iterator method?

- Definition: return this value
- Currently defined in %GeneratorPrototype% and in the prototype for all built-in iterators.
- https://bugs.ecmascript.org/show_bug.cgi?id=3104


DD: This supports the established convention 

YK: There was objection from Jafar
DH: but that was to iterator as self-iterable in whole, not this Iterator.prototype which we want

AWB: (summary in slides)

- Destructuring performs ToObject
- Array and generator comprehensions removed
- Realm removed
- Revised @@unscopable
- Object.assign ignores null and undefined sources
- An error to reentrantly enter generator via next/throw/return
- String(sym) now returns the symbol's description. Does not change ToString(symbol) throwing 
- `sym === Object(sym)` is now true
- Tighten specification for when `Array.prototype.sort` is undefined


AWB: Things being removed should be added to https://github.com/tc39/ecma262


EA: @@unscopables shipping in v8 (needed for Array.prototype.values)


AWB: 
    
- Added 16.1 that lists forbidden extensions
- [Discussion](https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/jul-29.md#49-argumentscaller-poisoning-on-new-syntactic-forms---arrows-generators)
- Removed all explicit poison pill methods on functions (except Function.prototype)


[16.1 Forbidden Extensions](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-forbidden-extensions)

AWB: Mark's concern was stack walking capabilities

DH: At odds with proper tail calls

AWB: In ES5 we added things to spec PTC 


YK: Of note: the new JDK's JavaScript engine is claiming to be "spec compliant", but implements racy threads.

DH: Most of the algorithms will fall down because they're not designed for threaded environments

Should Ecma-262 section 16 say something about cases like this?


AWB: We can express the "intent", that these are meant to be run atomically

DH: Memory models are hard.
    
ARB: Just say something informally to the effect that all algorithms in this spec are assumed to be executed atomically, i.e., are never observably interleaved with, or concurrent with, any other mutation of the programs state.

ARB: What specifically does "Extensions" refer to?

AWB: Specifically the definition in [16](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-error-handling-and-language-extensions), bullet 2.

AWB: w/r to Mark's concerns, we may want to specifically say that we don't want implementors to implement stack walking outside of devtools.


AWB: Open work items: 
    
- Update Introduction (BE)
- Update Language Overview (RW)
- RegExp normative and Annex B issues
- Lexical Grammar may need work
- Annex B spec for HTML style `<!-- -->` comments
- Module spec work closing in
- Instantiation reform, language + built-ins


AWB: Is anyone interesting in analysing the changes in ES5 to determine things that may have been wrong and need to be rolled back?

RW: Should reach out to Mathias Bynens

AWB: Ideally someone willing to become fully aware of the issues and propose/execute on solutions (if necessary)

AWB: Outline of final spec review process from January through June.

JN: Confirm RFTG opt-out 

RW: https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-07/jul-30.md#rftg-admin-es6-opt-out-period



#### Conclusion/Resolution

- Add `Symbol.iterator` on the %IteratorPrototype% that returns `this`.
- Due for November meeting
- Language Overview draft (RW)
- Introduction (BE)



## 4.3 Legacy Decimal Integer Literals starting with 0 and containing 8 or 9. 
(Allen Wirfs-Brock, Jason Orendorff, Boris Zbarsky)


http://esdiscuss.org/topic/early-error-on-0-followed-by-8-or-9-in-numeric-literals-does-not-seem-to-be-web-compatible

AWB: Octals beginning with `0` are restricted in strict mode

BZ: Credit card and telephone numbers

AWB: Dates

AWB: In non-strict, where `0` normally means an octal, unless it contains an 8 or 9.

MM: Any program that relies on this will break

```js
> 055 
45 
> 089 
89 
> 051082 
51082 
> (051082).toString() 
"51082" 
> (051078).toString() 
"51078" 
> (051077).toString() 
"21055"
```

(Discussion about use of broken features)

MM: Want to preserve the restriction as currently written in strict mode. Strict mode program, testing during August, evals `08` will pass, in January it will not.

AWB: Any browser incompatibilities?

BZ: Anyone writing strict mode code won't be writing code like this. For strict mode there is no hazard.

AWB: For Annex B?

BZ: Pull

MM: All strict mode behaviour is normative

AWB: + Annex B

Discussion re: _EscapeCharacter_

https://bugs.ecmascript.org/show_bug.cgi?id=3212

BE: It was changed in ES3 to use DecimalDigit (from ES1's OctalDigit), would need to ask Waldemar


#### Conclusion/Resolution

- Leave strict mode as-is
- Disallow leading zeroes, except for the constant 0 (and 0.1234 etc)
- Annex B non-strict: explicitly define the current interoperable behavior  
- `\8` and `\9` are equivalent to literal 8 and 9
- '\08' is NUL char and then '8', '\08'.length is 2


## 4.4 Number('0b0101'). NaN or not? 
(Erik Arvidsson)

EA: Previous discussion: https://github.com/rwaldron/tc39-notes/blob/c61f48cea5f2339a1ec65ca89827c8cff170779b/es6/2014-04/apr-9.md#46-updates-to-parseint

Should `Number` be able to parse the string "0b0" or "0o1"

(Discussion of people (ab)using Number for converting user input and whether this should affect things.)

Yes.

#### Conclusion/Resolution

- Use spec-internal `ToNumber` via userland `Number` called as a function will convert (ie `Number('0b101') === 5)`.
- Upholding previous consensus on `parseInt`
- Note in Annex C that this extension is a potentially breaking change


## 4.5 More Function-in-Block 
(Brian Terlson)


BT: (covers current spec)
    
AWB: Exactly the strict modes semantics of functions in blocks

BT: Don't hoist past/up-to nearest function

New issue: 
    
```js
if (cond) {
  function F() {}
  function G() { F() }
}

// sometime later
if (cond) {
  function F() {}   
}

G();
```

In today's semantics, when `G();` is called, it calls the second `F();`. In the new design, it would be the first, which is a breaking change. This code actually exists in some ad code somewhere. 

BT: No one else has implemented this yet, need to know if IE will be out there alone, or will other browsers stand with IE and break that unusual ad code?


DH: If v8 and spidermonkey post bugs that indicate the intention to implement, then it shows support among implementors and is valuable. 


#### Conclusion/Resolution

- No spec change
- Implementors will file intention commitment bugs
  [V8 bug](https://code.google.com/p/v8/issues/detail?id=3594)
  [SpiderMonkey bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1071646)


## Intro to Matt Miller from IETF (Liaison manager)

MMR: (Role as liaison from IETF, to establish a productive relationship, specifically w/r to JSON)

AWB: IETF Documents, eg. JavaScript mimetype references to ES3. Far behind considering ES5 and soon ES6

MMR: The RFCs are stable documents. When a document receives a number, it's set. If it needs to be updated, it can be replaced.

Discussion about interoperability and incompatibility breaks.


#### Conclusion/Resolution

- Improved communication 


## Revisiting 16.1, Forbidden Extensions


MM: SpiderMonkey removed own caller and own arguments from all function forms
... Needs to be clear: if the this binding is strict or built-in. 

AWB: interpret: If it isn't a non-strict function, it behaves exactly as spec'ed.

Discussion of strict/non-strict w/r to built-ins

MM: Applied to anything other than a non-strict function?

(10 minute back and forth about the definitions of "strict function" and "ECMAScript function")

MM's overall concern is to make sure the behavior is nailed down for built-ins as well as for strict functions.

## Somehow we started talking about Test262

Discussion of Test262's (lack of) coverage.

BT: We didn't have coverage in Test262 of a non-enumerable property shadowing an enumerable property.

JM: it would be good to have a place to list the open coverage holes.

SK/DD: while reviewing sections of the spec, people should write down a list of test cases that should be written (e.g. https://github.com/domenic/Array.prototype.contains/issues/1 )

AWB: Perhaps we should try to get a rough statement of what our coverage areas are. Some areas are covered because they were in ES3 tests; Microsoft contributed a lot of standard library tests; there are probably lots of gaps.

(Discussion of running Test262 tests against implementations, especially given their optimizations.)

YK: ideally we should not run the tests in interpreted mode.

AR: there is no hot code in Test262, so right now we only run in interpreted mode.

YK: could we use switches to turn up optimizations?

AR: there are complications that in V8 at least make that unlikely to be useful.

(Back to topic of a statement of coverage)

AWB: I'm mostly interested in whether there is a useful set of tests for most areas of the spec

BT: was this the Test262 agenda item?

BE: this was the "depress the room" agenda item

DD/BT: (discussion of poisoning built-ins before running tests)

YK: Value of poisioning?

BT: Implementations have to take care to not rely on user modifiable built-ins.

- Test262 attempts to walk a balance, if there are known examples that break runtime, there will be tests, but we don't go looking for them.



#### Conclusion/Resolution

- It's impossible to test ECMAScript
- Testing is hard


## Test262 Update

(Brian Terlson)

BT: A number of PRs remain open from the Test The Web Forward event: people haven't signed CLA despite request, haven't updated patch according to review feedback. These will be closed. 

- Browser will currently hang on 2**32 ToLength tests; these are initializing and iterating
- Previous consensus was to not update Test262 on ecmascript.org. Any objections to creating a preview of ES6 Test262?
- extracted test runner harness, wip.
- Suggest transferring test harness to ecma


DD: Have two official runners?

DD/BT: Deprecating the python runner?

ARB: Have to check with testing infrastructure

DD: But can we "deprecate", in the 


- Repository organization?

BT: Move all tests from present locations to new homes in new directory heirarchy
- someone, or something, needs to move 11,500 tests from their current location to their new location
- Leave all ES5 where they are?
- Create new tests under named feature.

AWB: As tests are updated, they could be moved?

BT: confirm

BT: who moved the ES3 tests to ES5 organization?

MM: that was me

BT: that was fun?

MM: I have experienced traumas in my life that were less fun

(Discussion of whether we should move the ES5 stuff piecemeal, e.g. as they get fixed.)

BT: It might be OK to move by feature, e.g. all the Array.prototype.forEach tests could move at once. 

(Discussion of how to incorporate post-ES6 tests into the repo, as they are written, but before ES6 tests are finalized.)

AWB: when running "the ES6 test suite," it should only be things that are officially in ES6. But the JS community cares about what they can use in a browser. We should not create impressions that things are done or stable until they have worked through the process.

AR: so we should put experimental things into a separate directory

YK: no. You don't do that in Chrome; you use feature flags.

(Discussion of folder vs. feature flags for new Test262 tests for post-ES6 experimental features.)

AWB: ok with stage 3 being in the repo

DD: needs to be stage 1 and onward

AWB: At stage 1, it's just the champion 

BT: Prerequisite to stage 3: have a PR open with your test

DD: Just need a way to flag something as experimental 

BT: Accept Allen's proposal?

DD/YK: nooooo

ARB: Fine to have early stage features, as long as they're not intermingled. 

BT: The file system isn't ideal.

(Discussion of whether to accept stage 1 onward into Test262.)

DD: Want to make Test262 writing easy, so will be adding helpers.

#### Conclusion/Resolution

- Create a subdomain to host Test262's ES6 tests
- Deprecation plan for Python harness: contact
- Domenic or Andreas for V8
- Dave for SpiderMonkey
- Overturn previous consensus, leave ES5 tests where they are.
- Let Brian decide which features to pull in
- Stage 3 features (and onward) shows up on the experimental public site
- Add helpers, that's good.


## 5.1 Trailing Commas in Function Call Expressions and Declarations

(Jeff Morrison)


JM: Useful for diffs in version control systems, especially Git blame. In other languages they often do a comma at the end of each line. We do for commas too.

BE: arrays aren't parameter lists. What other languages allow this?

JM: Python, D, Hack, probably others

JM: you don't have to do this if you don't want to; it's easy to lint for...

MM: just use comma-first style?

JM: doesn't work well for the first argument

AWB: What about rest parameter position? Should it be a syntax error after a rest param?

JM: Hadn't thought about it. No strong feelings. Makes sense to me to be invalid after a trailing rest param

```js
function f(
a, 
b, 
...c
    ) {
return 1;        
}
```

MM: what's the argument against this?

JM: if people use this, old engines won't be able to run that code.

AWB: it's the "no new syntax" argument.

BE: the funny thing is in C you can't have enums with trailing commas but you can have them in array and struct initializers. That was a botch.


#### Conclusion/Resolution

BE: let's sleep on it

- No decision yet, revisit tomorrow.


## ?.? Process

AWB: When something reaches stage 1 we should create a repo at TC39. And use that issue tracker for discussion instead of es-discuss or bugs.ecmascript.org or other ad-hoc locations.

## 5.2 Flush denorm to zero 
(Allen Wirfs-Brock)

http://esdiscuss.org/topic/float-denormal-issue-in-javascript-processor-node-in-web-audio-api
https://bugzilla.mozilla.org/show_bug.cgi?id=1027624#c30

AWB/BE: Explanation of "flush to denorm"

https://en.wikipedia.org/wiki/Denormal_number

Denorm values appear in audio algorithms. Modes exist to prevent producing denorms.

MM: Not just wasted precision:

```    
|-|-|-|-------|-------|-|-|-|
      ^       0       ^
largest               smallest 
negative              positive
normal                normal
```

AWB: Specifically desirable from people writing audio algorithms in JavaScript.

BE: 
    
```js
Math.denormz(x);
Math.fdenormz(x);
```

```js
Math.fdenormz(x) === Math.denormz(Math.fround(x));
```


PJ: Another suggestion to have an FPU mode-setting function?

BE/AWB: That's the big red switch.

BE: Leads to all black-box/other-module functions needing save/restore advice around calls from your module

#### Conclusion/Resolution

- Stage 1 acceptance


## 5.3 ArrayBuffer.transfer 
(Brendan Eich, Allen Wirfs-Brock for Luke Wagner)

https://gist.github.com/andhow/95fb9e49996615764eff

AWB: (summarizes rationale)

(Discussion re detaching, immutability, freezing, and how they may or may not be related)

BE: ArrayBuffer.transfer seems safe, considering.

Discussion of whether it should be static on ArrayBuffer or a method on the prototype - it's an alternative constructor

Suggestion that ArrayBuffer.transfer(b1, 0) return a zero-length b2, not null. Consensus favors.

AWB: Subclass of `ArrayBuffer`? What is the class of the object returned by `transfer(...)`?

#### Conclusion/Resolution

- Stage 1 acceptance


## 5.6 NoSuchProperty built-in proxy 
(Brendan Eich for Nicholas C. Zakas)

BE: Want to be able to throw if a property access occurs for something that doesn't exist.

```js
var NoSuchProperty = Proxy({}, {   
  has(target, name) {     
   return true;   
  },   
  get(target, name, receiver) {      
    if (name in Object.prototype) {        
      return Object.prototype[name];     
    }     
    throw new TypeError(name + " is not a defined property");   
  } 
});
```



BE: JS1 was a rush, didn't have time for try/catch, so I was very shy about errors. This should be something that can be made an error. Too much fail-soft where things should've error'ed.

MM: If it's doable in library code, then we should wait until we see more activity. 

YK/DD/RW: There are more Proxy related patterns that would more valuable to address before NoSuchProperty, considering it's possible in library code. 

DH: (comments on likelihood of actual use)

BE: This will be slow

BZ: It will be fine until you hit the Proxy, based on real engine DOM (nodelist etc.) experience.

#### Conclusion/Resolution

- Keep in library code which others should develop and user-test at scale


## 5.8 Exponentiation Operator Update 

(Rick Waldron)

RW: Presenting updates to feature proposal: 
    
- Stage 1: https://github.com/rwaldron/exponentiation-operator/issues/1
- Stage 2: https://github.com/rwaldron/exponentiation-operator/issues/2

Progress to Stage 2?

Confirm.

#### Conclusion/Resolution

- Stage 2 acceptance


## 5.5 Math.iaddh, etc. polyfillable 64-bit int helpers 

(Brendan Eich for Fabrice Bellard) 

http://esdiscuss.org/topic/efficient-64-bit-arithmetic
https://gist.github.com/BrendanEich/4294d5c212a6d2254703

MM: Recognizes "bigit" as good for bignum big decimal etc. digit, not just for int64 emu

(http://hackage.haskell.org/package/double-conversion-0.2.0.6/src/double-conversion/src/bignum.cc, http://code.ohloh.net/file?fid=J9lbBTlP__EhaF2Zrwq6Sk38lZE&cid=891oM4GeZTE&s=&fp=282835&mp&projSelected=true#L0 )

Concrete proposal: 
    
```js
Math.imulh();
Math.imuluh();
Math.iaddh();
Math.isubh();
```


#### Conclusion/Resolution

- Rename imuluh to umulh
- Stage 0 acceptance
