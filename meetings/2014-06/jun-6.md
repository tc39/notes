# June 6, 2014 Meeting Notes
-----

Brian Terlson (BT), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Mark Honenberg (MH), Caridy Patiño (CP), Yehuda Katz (YK), Niko Matsakis (NM), Ben Newman (BN), Filip Pizlo (FP), Sebastian Markbåge (SM), Rafeal Weinstein (RWN), Jaswanth Sreeram (JS), Alex Russell (AR), István Sebestyén (IS), Simon Kaegi (SK), Arnaud Le Hors (ALH), Reid Burke (RB), Erik Arvidsson (EA), Brendan Eich (BE), Mark S. Miller (MM)

-----

## Follow up on deferring comprehensions

DH: IMHO Andy Wingo's email made my case stronger since it added another dimension that we need to take into account.

AWB: Let's leave it in until next meeting and try to resolve this before then.

DH: This is basically a go/no go question.

AWB: No spec changes will be done until after we have consensus.

DH: There is no rush to get it out of the spec.

## Conclusion/Resolution

- Resolve this online
- Make a go/no go at the next face to face meeting.


## Block scoping issues

BT: In sloppy mode

```js
foo();  // maybe?
if (test) function foo() {};
foo();  // yes
```

AWB: Wanted to hold the line and not cover this.

BT: One option is to treat the FunctionDeclaration in if as if there was a Block around it.

AWB: The changes in the grammar to support this would be nasty.

WH: Don't want to pollute strict or non-browser-compatibility mode with this stuff.

AWB: This won't affect strict mode.

WH: Then it shouldn't be in the main grammar. Leave it in Annex B.

BT: Can we hand wave this in Annex B? Can we just use prose to say that it behavase as if there was a block around it?

BE: Without grammar we cannot validate

WH: I'm not going to validate the grammar in Annex B. I already know there's ugliness there.

## Conclusion/Resolution

- Substatement function declarations will be added to Annex B unless we can convince ourselves it's safe to remove.
- Allen will investigate how to specify in Annex B (including whethe we need to specify the grammar or hand-wave).

## Initializer in for-in

AWB: Got feedback that there are 11 sites that use the code pattern.

WAB: https://bugzilla.mozilla.org/show_bug.cgi?id=748550

## Conclusion/Resolution

- Have an engine try to remove support and report back. Otherwise it will have to be added back to the spec.


## Rest properties and spread properties (Sebastian Markbåge)

Presentation notes: https://gist.github.com/sebmarkbage/aa849c7973cb4452c547

SM: Rest properties

```js
let {x, y, ...z} = {x: 1, y: 2, a: 3, b: 4};
x;  // 1
y;  // 2
z;  // {a: 2, b: 4}
```

SM: Spread properties

```js
let n = {x, y, ...z};
n;  // {x: 1, y: 2, a: 3, b: 4}
```

SM: The [[Prototype]] will be %ObjectPrototype%

MM: It should not use the original prototype since it does not have the same properties

WH: What about about non enumerable own properties

SM: Only enumerable are copied.

WH: What about accessors?

SM: Either snapshot the value or copy the accessor.

WH: How do accessors behave in existing destructuring?

AWB: They snapshot the value.

WH: So that's how accessors should behave here too.

SM: Precedence set by `Object.assign`. So that means that we would use a `Get` to get the value.

WH: Does destructuring look into prototypes? Concrete example:
    `let {x, y, ...z} = {y: 2, a: 3, b: 4}` where the RHS object inherits from a prototype whose x property is 7. What is the value assigned to the x variable?

SM: Yes, it'd assign 7 to x.

WH: Then it would be bizarre for x to snapshot properties from the prototype but for z to ignore them

MM: Can you do let {x, y, ...something-more-complex-than-an-identifier}?

SM: No.

MM: Properties must be added via defineProperty, not put.

AWB, BE: Yes, that's how object literals work. Don't want to accidentally run setters in the prototype.

MM: This extends possibilities for dynamic name clash errors in strict mode.

[Discussion about whether dynamic or static name clashes in object literals should be errors or rightmost-one-wins.]

WH: Whatever we do, let's be consistent. Don't want one rule for explicitly named properties, another confusing rule for dynamically generated properties.

WH: If the spread only uses own properties than it is inconsistent with destructuring.

YK, DH: No, the problem is to figure out the key names for ... and after that we do a Get

MM: Are methods enumerable? (Yes) Then I think this is fatal

DH: We have to look at existing code and all existing code uses for-in+hasOwnProperty

WH: I want substitutability, so that I can pick of properties one by one.

BE:

```js
z = Object.create({w: 42});
obj = {x, y, ...z};
```

WH: Wants w to show up in obj.

JM, BN: If you want to pick up objects from the proto you can use `__proto__`, as in `{ x, y, ...z.__proto__, ...z }`. The other way does not hold (if we include non own by default).

MM: Very confortable with Yehuda's rational that we use own properties to find the property names and then use Get to get the value.

YK: Destructuring is sugar for Get.

WH: Wants destructuring to be sugar for HasOwn+Get as in:

```js
var {x} = obj;
=>
var x;
x = obj.hasOwnProperty('x') ? (THROW?) : obj.x;
```

WH: What is the compelling use case for having ... in patterns?

DH: Consistency with ... in spread.

WH: Doesn't necessarily follow. ... in spread constructs objects. The proposed ... in patterns deletes properties in a rather arbitrary way. As an analogy, we have + to concatenate strings but no equivalent operator to undo the effects of +.

SM: [example of passing function arguments to a wrapper]

MM: In this case one could make a use case for either removing explicitly named properties in the wrapper or leaving them in the object before passing them on.

WH: I can see a weak use case for ... in patterns, but not a strong one yet.

RW: (Arguing for not reaching into prototype in destructuring) The final agreement was that built-ins will always create non-enumerable properties, to stay consistent with the spec. User created object and class properties will remain enumerable and it will be left up to user code to decide how to handle these.

MM: (re: decorators proposal)

YK: my decorators can make individual methods or all methods on a class non-enumerable


MM: I am ok with removing the constraint that duplicate dynamic object properties throw (in strict mode) with the caveat that we also remove the same constraint for duplicate static properties.

## Conclusion/Resolution

- For both strict and sloppy object literals, both computed and static properties no longer have any duplicate name checking.
- Instead, the semantics are strictly left-to-right (i.e. rightmost instance of the duplicate name wins over previous properties of the same name).


## Async Generator Functions (Jafar presenting)
(Jafar to send slides)

DH, YK: Consider the cost of having two semi-compatible but different APIs, Streams and Observables.

DH Might be worth having a layered API in order to let people drop to low level for perf reasons.
YK: We should get more clarity on this.
:: Jafar explains slides ::

** Discussing .observe() / Object.observe() **

YK: Object.observe() takes a callback now, but it doesn't return anything. Could return an observable in the future.

DH: We need to resolve this soon -- having Object.observe() and Observable.prototype.observe is too confusing.

JH: I really prefer the analogy between iterators and observers (observers are inverted iterators). Very hard to think of a new term that fits better than Observable/Observe

YK: JS community has established that .observe() does one thing, and observable/observe doesn't quite fit that pre-existing convention

** discussion about naming of "Observer/Observe" and whether there are alternatives **

BE: Could do -- Iterable : iterator :: Observable : "observer"

YK: Why not subscribable/subscribe

JH: Want to get away from thinking about things in terms of pub/sub. IME with training devs, decoupling brains from pre-existing notions of pub/sub is important

JH: By pub/sub I'm referring to observable minus .return() and .throw(). "pub/sub" pre-existing notions cause ppl to have difficulty with conceptualizing how they can compose with map/filter

DH: 3 competitors: Object.observe, streams, and ?
Need to rationalize
Need Domenic, Raf, and Jafar together to work it out.

WH: What does this do inside an async function*?

```js
while (...) {
  yield line1;
  await yield line2;
}
```

Is it just a backpressure issue, or can the first yield (without the await) surprise the observer in some kind of an unexpected state?

YK: I think it's important that the first value in an observable can be published synchronously. Importantly, there are well-motivated use-cases for Observables whose initial value is ALWAYS synchronously available (like Object.observe), but there are no well-motivated use-cases for APIs that consume promises whose values are ALWAYS synchronously available.

## Conclusion/Resolution

- Async generators proposal is now in stage 0, for consideration as part of ES7.
- Need to consider more deeply how average programmers are going to make sense of this syntax without understanding it completely.
