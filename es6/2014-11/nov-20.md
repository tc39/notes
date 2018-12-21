# November 20, 2014 Meeting Notes
-----

Brian Terlson (BT), Taylor Woll (TW), Jordan Harband (JHD), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jeff Morrison (JM), Sebastian Markbåge (SM), Erik Arvidsson (EA), Peter Jensen (PJ), Eric Toth (ET), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), Ben Newman (BN), Forrest Norvell (FN), Waldemar Horwat (WH), Alan Schmitt (AS), Michael Ficarra (MF), Jafar Husain (JH), Lee Byron (LB), Dmitry Lomov (DL), Arnaud Le Hors (ALH), Chip Morningstar (CM), Caridy Patiño (CP), Domenic Denicola (DD), Mark S. Miller (MM), Yehuda Katz (YK), Dmitry Soshnikov (DS), Kevin Smith (KS), Rafeal Weinstein (RWN)

-----

## 5.5 Array.prototype.includes() proposal to move to Stage 2.
(Domenic Denicola)

DD: Has all of the requisite items complete. 
- Not ready for Step 3 because we need more patches landed.
- Ready for Allen to review specification text. 

AWB: Move stuff to TC39 github?

DD: Yes. 

AWB: For Ecma record, need PDF

#### Conclusion/Resolution 

- Stage 2 acceptance


## 5.6 Object.observe: proposal to move to Stage 3.
(Rafael Weinstein)

RWN: Move Object.observe to Stage 3?

RW: Can you list out the updates?

RWN: Conferred with Ember team, issues were theoretical

YK: Conceptual

RWN: Appears to be objections from YK and Ember, provided examples that should overcome

YK: Yes, but the actual solution does address the problem with the specification of the feature.
- There are process issues. I've repeatedly provided feedback and repeatedly dismissed. 
- Technical Issues: 
- As a result of async callback, the decision was "don't ever drop anything"
- All intermediate values are kept, of all properties in all states, even if these are completely unnecessary. 

EA: What if someone needs all the changes?

YK: There should be a mechanism explicitly say what you want

WH: What happens if you change a property repeatedly in a tight loop without switching microtasks?

YK: You will accumulate _every_ change

WH: And eventually run out of memory

DH: Similar concerns from Mozilla engineers

JM: Thoughts on a solution?

YK: Approach that's been discussed is an API mechanism that allows me to specify the properties I want. 

EA: I think you're making a bigger problem of this, it's inherently dangerous

RW: Waldemar just illustrated a danger

YK: (gives more examples of problems)

RWN: Restate: 
- Too many allocations, all of the change records.
- Retaining all of the changes

WH: Does it create a record for _every_ change, say a numeric property: 1, 2, 3, 4... One for each?

YK: Yes.

DH/YK: Overwhelming number of changes when properties you don't care about are also changed. 

BT: On the other side, there are a lot of developers waiting for this feature. It's the number one requested. 

YK: Not opposed to the feature, just want to get it right.

AWB: We need address issues that we've identified and gain consensus.

DH: Look at it in two parts:
- "I want an efficient way of being notified of changes that I care about"
- "I want a full change log"

Both are very useful, but the second is likely to give you more data than you ever need. The default should be minimal, but should allow for opting into the full change log. 

BT: I was operating under the assumption that V2 could add the less expensive path on top of the more expensive path.

DH: I would prefer the less expensive path to start with

DD: No, wouldn't you want all the data and then add mechanism to limit?

YK: Want use case

RWN: If you have a generic write barrier on the array, you'd have to hold onto the original array and compute the difference, which is expensive. Providing the intermediary values significantly reduces that expense. 

JM: Is there an objection to adding the configurability?

EA/YK: (discussion re: performance of configurability)

JM: But still no objection to configurability, which can be omitted and give you all the change records. 

RWN: (provides background of the design)

YK: Changes: 
1. List of properties that I want to observe
2. Don't hold onto all intermediaries, the change record has only the last value

AWB: Would you want multiple notifications if multiple changes occur before the record is processed?

YK: No, just the last 

AWB: How do you know when you need to start making notifications again?

YK: Same as now, when the changes are delivered, start over. 
- Recapping the concern and what's desired. 

RWN: Concerned that what you want will start to unravel the design. 

(Discussion of authoring responsibilities).

Agreement to work this out offline. 

AWB: More concerns: 
- I'd like the specification to be written in terms of ES6 mechanisms.
- Need to use the Job mechanisms, likely everything you need is there for you. 
- Need to define the interactions with Proxy's (alot of "[[...]]" stuff that doesn't correspond to MOP in ES6)

RWN: My understanding was that Proxy's wouldn't do anything automatic with regard to `Object.observe`

EA: Right now the spec is defined to tie into DefineOwnProperty. If Plain Object or Exotic Array, then it works. Some other Exotic? No.

AWB: If you wanted to?

EA: No text yet, but could add this
- Exotic Objects are Exotic. How much do we want to polish that turd?

DD: DOM updated with internal slots. Boris Zbarsky has identified issues with holding all the values as well. 

EA: Will add normative text for exotic objects. Will help update the DOM.

(discussion about notification handler changes and special cases that still need to be addressed)

#### Conclusion/Resolution 

- Draft revisions for filtering
- Spec terminology updates
- Normative section about exotic objects



## 402 Status Update

(Rick Waldron)

RW: Next version will coincide with ES6. Future versions will coincide with future versions of 262.

RW: After ES6 the Yahoo team (Eric Ferraiuolo, Caridy Patiño)  is taking over.

RW: Intl 1 provides ...

RW: Intl 2 provides `Array.prototype.toLocaleString`

RW: Intl 2 will align subclassing semantics with ES6. Refactoring [[Construct]] and use [[CreateAction]]. Update to use new spec algorithms/abstract operations.

EA: There was previous talk about big action items for the next version of Intl.

RW: This spec only includes minor fixes and bringing the spec up to date. Will leave the big feature items for future versions of the Intl spec.

AWB: There will be an rf opt out for this at the same time as for the ES6 spec.

#### Conclusion/Resolution 

- See above.



## Break out sesssions

- Object.observe
- Async generators/iterators. Get your yield on
- Value Objects


## 5.4 I/O Streams as part of the ES standard library
(Domenic Denicola)

DD: Presents: https://streams.spec.whatwg.org/

- Some suggestion to move into ES
- Specified as platform agnostic (browser and node)
- Possibly too narrow

MM: Abstraction is not data specific?

DD: Correct. 

- Walk through back pressure

MM: Explain the "too narrow"

DD: Just that it might be a step too far

RW: agrees

MM: Is the specification bigger than it needs to be?

DD: No, it's as specified as it needs to be, but seems like a step too large 

JH: Don't see a conflict with async generators

Discussion on the merit of different io mechanisms

DD: With modules, do we want to extend to cover many different aspects? fetch, etc.

AWB: Programming languages need basic IO? Yes. Need to think about the ES standard built-in library. This could easily be an Ecma spec for a standard module. 

RW: Had this same conversation independently and propose this as a TC39 guided spec, not dependent on Ecma-262, but normatively referenced. 

WH: Any requirements for asynchrony, execution turns?

DD: No. Specifically designed away from such

AWB: Prefer that TC39 handle these things to avoid too much platform specific design. 

Discussion about appropriate groups to foster development. (Compare to Intl)

Discussion re: oversight?

DD: Joint deliverable?

RW: RFTG?

DD: 
    
BT: Honest: The best way you'll get good participation from MS is in TC39, because the legal processes and agreements are in place to protect work here. We can work in w3c for same reason. Whatwg is less clear, and therefore not easy for us to be involved. 

AWB: Very complex, legally. To be resolved for whatwg, they'd have to become a recognized standards organization. In the legal/governmental recognition sense.

MM: We've provided plenty of reason why TC39 would take this, can you explain why you'd rather work in whatwg?

DD: Personal preference. 
- Can provide snapshots for ecma if necessary

AWB: Not the issue, the issue is the legality of contributions/contributors.

DH: Hixie is also willing to work with companies on these things. 

Heated discussion about specification ownership

MM: If the proposal is to allow the editor unilateral control, vs. committee refinement, consensus, and agreement, then the proposal should be withdrawn.

DD: Then withdrawn.

#### Conclusion/Resolution 

- Withdrawn


## Async Generators
(Jafar Husain)

https://github.com/jhusain/asyncgenerator

JH: Propose to move to Stage 1

Major digression re: process. 

...

DH: Want to see a comparative survey of how other languages and systems have approached this problem space. What does it look like, how does it work. Would like to return to providing this sort of detail.
- Rust has RFC process that nicely tracks feature work history and development. 


Slides

```js
interface Iterable {
  Generator @@iterator(Generator);
}
 
interface Observable {
  Generator observer(Generator);
}
 
Array.prototype[@@observer] = function(generator) {
  var decoratedGenerator = Object.create(generator),
    done = false;
 
  ["throw","return"].forEach(method => {
    decoratedGenerator[method] = v => {
      var superMethod = generator[method];
      done = true;
      if (superMethod) {
        return superMethod.call(generator, v);
      }
    }
  });
 
  for (let x of this) {
    decoratedGenerator.next(x)
    if (done) {
      break;
    }
  }
  if (!done) {
    decoratedGenerator.return();
  }
 
  return decoratedGenerator;
}
 
[1,2,3][@@observer]({
  next: function(value) {
    console.log(value);
    if (value === 2) {
      this.return();
    }
  }
});
 
for (let x of [1,2,3]) {
  console.log(value);
  if (x === 2) {
    break;
  }
}
 
async function test() {
  for (let x on [1,2,3]) {
    console.log(value);
    if (x === 2) {
      break;
    }
  }
}
 
document.addEventListener("mousemove", function next(e) {
 
});
```

DH: Concerns about symmetry

JH: Any iterable can be an observable.

DH: (Clarifying gist) If I am a data source (collection), I call myself iterable if I want to some consumer to "pull" values. If I am a data source, I call myself "observable" if I want to "push" my values.


Examples of `for-on`, `@@observer`

BE: I wouldn't try for Stage 1 quite yet. Let's see more explanation in the form of examples (gists, etc).

DH: need to find more ways to discuss this stuff other than the output of a transpilation. 
- Need it to explain at a user level 

DS: Needs a real use case

MMj, WH: These help. 

DH: Need to look at this from a "what is the problem space", then try to solve that. There are two competing solutions (`async function *`) and this

KS: (explains his approach with async iterator)


```js
Interator<Promise> or Observable

asyc function * v() {
  let values = toAsycInterable(new Websocket(...));
  for (let promise of values) {
    let value = await promise;
    yield value + 1;
  }    
}
```

Discussion re: back pressure

WH: Does either approach do buffering by default? [Prefer to transfer/work on one item at a time unless buffering is explicitly requested to avoid blowing up if a turn takes a while.]

JH: (shows an example of `for-on` to illustrate support for back pressure)

More discussion about backpressure


#### Conclusion/Resolution 

- Comparison documentation 


Thanks to Paypal for the meeting accommodations. Thanks to Ecma.
