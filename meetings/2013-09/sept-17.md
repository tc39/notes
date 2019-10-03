# September 17, 2013 Meeting Notes
-----


John Neumann (JN), Dave Herman (DH), István Sebestyén (IS), Alex Russell (AR), Allen Wirfs-Brock (AWB), Erik Arvidsson (EA), Eric Ferraiuolo (EF), Doug Crockford (DC), Luke Hoban (LH), Anne van Kesteren (AVK), Brendan Eich (BE), Brian Terlson (BT), Rick Waldron (RW), Waldemar Horwat (WH), Rafeal Weinstein (RWN), Boris Zbarsky (BZ), Domenic Denicola (DD), Tim Disney (TD), Niko Matsakis (NM), Jeff Morrison (JM), Sebastian Markbåge (SM), Oliver Hunt (OH), Sam Tobin-Hochstadt (STH), Dmitry Lomov (DL), Andreas Rossberg (ARB), Reid Burke (RB)

-----

## Agenda

RW: (Logistics)

## Welcome

Promises to be discussed Thurs. PLH from W3C will be here on Wed/Thurs.

BE: won't be here thurs, and that suits me.

JN: objections to using this agenda?

(crickets)

JN: next issue is approving the agenda.

Approved.

JN: Minutes approval?

RW: (Confirms no changes since last review)

Approved.

JN: have a strong duty to surface the agenda to ECMA and right now we don't know how to do that. Want to publish something to ECMA 3 weeks before the meeting and one week before, a final version of the agenda.

AVK: how about we give them a URL?

IS: the issue is that we haven't had a fleshed-out agenda 3 weeks before the meeting. There hasn't been anything there.

AR: this seems like a mismatch between the historical timings of meetings and our accelerated cadence.

DH: We talked about this in last meeting, where we agreed that everything would be in the agenda one week prior. If we don't accept new items, the agenda is a dead letter.

AR: we can commit to having a skeleton that has stuff we will usually talk about, but not more.

RW: in the past, an email went out that helped remind people. If we sent out a reminder email at the halfway point, it might  help people remember to add agenda items then.

DH: Let's strategize which items are best to work on and which day.

- Modules: Wait for Andreas

- Typed Arrays: Wait for Dmitry, Oliver

- Symbols: wait for Andreas

- Proxies: wait for Tom VC


DH: Arrows, Math.hypot today

EA: Spec process

DH: We can do this out of order.
...Let's discuss Data parallelism while Niko Matsakis is present.


## 11. Status Report 262

AWB: I'd like feedback and comments on the new re-orderings.

DH: I know that Jason Orendorff has some issues (es-discuss: https://mail.mozilla.org/pipermail/es-discuss/2013-September/033314.html (starting with Olliver Hunt))

AWB: New sections...

- Runtime Abstractions
- Group Of Chapters that define the language
- Lexical Grammars
- Syntactic Grammars

AWB: There was some recent discussion about how you track down semantics when you have so many named semantic algorighms that are associated with productions. I've done work subsequent to r18 that adds a "see also" section at the top of each segment so you can

BE: what do people think of the new organization?

(general approval>

WH: The latest version sent to the ECMA document repository is from May. Why aren't new versions being sent to the ECMA repository?

(group directs WH to the latest version not in the ECMA document repository>

(googlers + facebookers arrive>

BE: wait there's more Googlers? We have to bring more Mozillans now... (I kid, I kid.)

AWB: At the last meeting we sucessfuly deluded ourselves into thinking we didn't need NoIn productions. We've been unconvinced, so I reintroduced them.

WH: I've been looking into this NoIn business

AWB: OK, well if you come up with a solution for it!

WH: I got my grammar verifier up and running again.

DH: Ollie spent a long time looking at them and didn't come up with a solution.

AWB: naked yield is supported. The assignment part is optional.

EA: for yeild*, the expression is needed.

DH: agreed
- yield * wouldn't make sense without

AWB: WH brought up that you can't have a conditional reserved word, so what I did is ensure that yield is always a reserved word which, in contexts where it can be an identifier is treated as such.

DH: contextual reserved would would be another instance of feedback from parser back to lexer (a la slash); Allen's approach is more elegant.

BE: yes, it's the right tradeoff.

AWB: overall status: thanks to Dave, in the current working draft we're starting to bring in module grammar productions and semantics.
- module grammar productions
- module semantics
- Confident in the progress

BE: we have a separate agenda item on this, yes?

(yes>

AWB: still hanging out there and need work

- no work done on unicode regexp
- no work done on updating regexp to web reality


LH: Last consensus on "web reality" was that it would be in an annex ...

LH: there's text (http://wiki.ecmascript.org/doku.php?id=strawman:match_web_reality_spec) that patches some rules.

LH: the reason we got hung up is we thought there might be some grander unification with the regexp unicode flag, and I don't know what the status is on that.

LH: we should integrate the web reality piece into the spec.

AWB: do we want to defer the Unicode part

BE: did we have someone identified to work on it?

 (norbert>

AVK: I thought there was discussion that agreed what was in and what was out?

BE: If Norbert doesn't do it, it's not going to happen for ES6

WH: (Q about the yield)
- Will allow yield as an identifier?

AWB: Yes

WH: This will break

(whiteboard)
```js
yield * 1;
```

is that a multiplication or `yield *`?

AWB:
(whiteboard)

YieldExpression := [inside a generator] yield aaugh this keeps getting erased


AWB: inside a generator function, "yield" is a keyword that introduces a generator expression.

WH: inside a generator, this ("/") will be a RE, outside it will be a division symbol?


WH:
```js
yield /a/g;
```

is this yield divided by a? or yield a regexp?

BE: so this is like the regular expression delimiter, it's going to need to have feedback from the parser to the lexer.

?: If you're inside a generator, it's lexed as a regexp. If not, it's lexed as division.

DH: I think that isn't affected here, the lexer is always fed the parsing context; it's not an ambiguity because it's determined by context.

WH: What's "inside a generator"? What if you're inside, say, an arrow function inside a generator?

?: Then you're not actually inside a generator.

WH: But you need to lex the thing to parse the thing to find out that you're inside something nested inside a generator, so that's begging the question.

BE: split grammar at higher level, InGenerator, NotInGenerator, something something something.

BE & DH: use new tricks, e.g. parametric productions. Even NoIn, back in the day, we would have preferred to use those.

AWB: Yeah, if we have to do this for yield, I'd be happy to switch to parametric productions, since it avoids having four forms of the expression grammar.

BE: alternatives is to make generator bodies strict.

DH: We shouldn't make the users life worse just to make the spec easier.

WH: well we are prioritizing the user, think of syntax-coloring editors, they also now need to know these complicated rules, too complicated and they'll get them wrong.

DH: in practice editors get things wrong

BE: and then you can pull request against them so it's all good.

DH: new implicit modes will bite more often

BE: let and yield are reserved in strict mode since ES5

DH: Parameterized productions are the cleanest solution

BE: Much better to parameterize then to duplicate productions.

BE & AWB: let's do a smaller group on parametrizing the productions.

...

AWB: Is there a point on binary data?
- Don't think we're going to get them in


BE: related to spec process, getting things done painless and in a rapid-release fashion. let's talk separately.


AWB: Status wise: no progress on Binary data Typed Objects proposal with regard to the spec.

RW: (clarified binary data vs "typed objects")

DH: binary data name is bad, "typed objects" better. Because typed objects as specced are not actually good for binary data.

Typed Objects (formerly known as binary data)

AWB: typed arrays and dataviews are in ES6 spec, "structs" are not.

DH: Dmitry *is* working on this, it's not 2014 yet, we shouldn't definitively say it's not going in.

AWB: well, I'm trying to manage expectations.

BE: Let's revisit after we get a little further with the other items.


## 4.1 Arrow Functions


BE: When I proposed Arrow Functions, the empty parameter list was made optional. The omission

LH: C# requires formal parameters?

DC: Who is asking for this?

BE: Community feedback, Domenic has mentioned it as well.

DD: Possibly due to CoffeeScript, but is nice to omit the parens where they aren't necessary.

BE: For this proposal, there is no issue in leaving the param list out

```js

let foo = => ...;

x = (y) // note missing semilicon
=> z

```


BE: but nobody does this.

DC: A concern, `x = y`, as written without the parens...

```js
x = y
=> z
```

(This is a valid Arrow Function: http://traceur-compiler.googlecode.com/git/demo/repl.html#let%20x%20%3D%20y%0A%20%20%20%20%3D%3E%20z )

AWB: No parameters: no LineTerminator here?

BE: If someone began with an arrow,

WH: I'm fine with this being an arrow function, but don't want this to depend on line breaking. I consider the following to be legitimate:

```js
    x = averylongid
       => foo
```

DH: This would introduce a new sigil that you'd have to worry about

BE: npm style is a thing. People actually put semicolons at the beginning of lines starting with + - / { [ (, this would introduce => to that list.

```js
var i = "1"
;+i
```

WH: (laughter)

BE: you laugh, but people do this

WH: I thought I'd seen it all...

BE: Do we extend the short list of characters that can begin an ExpressionStatement

DH: It's not worth it

EA: I think it's worth it

BE: Writing "()" is too hard?

DD: It's ugly.

```js
it("should do something", => {
    // ...
});

vs.

it("should do something", () => {
    // ...
});
```


DH: I'd prefer not to have the hazard.

AR, DC: Agree with DH

#### Consensus/Resolution

- No consensus on removing the empty param list



## 4.3 Math.hypot

DH: The idea is that it returns the square root of the sum of its arguments, but we have 2 and 3 argument special casing.

http://wiki.ecmascript.org/doku.php?id=harmony:more_math_functions


It's an offense to mathematics if it's not: "The square root of the sum of the squares of all the arguments"


Defend the pristine purity of math. If it's only a 2-argument function, that's OK, but having it a 2- and 3-argument function is not good, just make it an n-argument function.

BE: Jason Orendorff outlined these problematic cases... (see es-discuss)

DH: this is no good man.

LH: Should be variadic

DC: Programming in general is an insult to mathematics. Because what we call functions are not what they call functions. One convention we have in JS is that calling a function with three parameters is the same as calling it with two plus undefined.

DH: but not for variadic functions. Since we want it for arity 2 and arity 3, cleanest way is to make it variadic. If you have 2 cases, yo have n cases.

#### Consensus/Resolution

- variadic
- call ToNumber on all actual arguments
- if one is NaN, no special behaviour, allow to fall out.




## 4.7 JSON.stringify and unpaired surrogates

https://mail.mozilla.org/pipermail/es-discuss/2013-September/033293.html


AWB: The concern is that JSON.stringify, as specified in ES5, if there is an unpaired surrugate

AVK: There's a bug in V8 where lone surrogates passed to the utf-8 encoder turn into CESU-8 byte sequences.

- What is the defined failure space

DC: The new spec is code points, so it could be unpaired surrogates

AVK: So it's 16-bit code units

DC: Yes
- JSON currently passes unpaired surrogates right through
- Suggest escaping them

AWB: Only for unpaired surrogates

DC: Will get through a UTF 8 Encoder, but will blow up

AVK: If you want the surrogates to make a round trip, then escape them

LH: Seems like it's saying, in practice, JSON will only admit into a JSON document UTF8

DC: (Question about range of affected)

AVK: only surrogates are affected

LH: were people running into this problem in practice?

AVK: Right now, roundtripping unpaired surrogates does not work. We could fix this by escaping them.

AWB: But this is an incompatible change from ES5, since the length of the string would change to include \uXXXX (or \uXXXX\uYYYY) instead of the surrogate itself.

AVK: (whiteboard)

```js
JSON.stringiyf("\uD800")
```

AVK: \uD800 is a single sixteen-bit code unit that is also a surrogate.

BE: this seems incompatible, so I say no

LH: this just seems like a single case...not sure why we'd patch just this case

AWB: this is about unicode/UTF-8 which is very common

LH: any time I serialize any JS string, I have this issue, JSON isn't necessarily what's in question

AVK: this is also about JSON as it's a network format

DC: why are people doing this anyway

AWB: e.g. because they're passing binary data as strings

BE: murphy was an optimist

WH: Note the CESU-8 spec, which is a mutant of UTF-8 that encodes individual surrogates individually (even if they're paired).

AR: if CESU-8 is bad, why isn't this fix bad?

AVK: you get subtle security bugs and it's incompatible with UTF-8. I don't really mind that we lose surrogates as I don't care about them

BZ: if you pass unparied surrogtates, you'll just get bytes. If people are trying to use the high bits to store binary data, there are going to be problems.

DC: the problem is that you're trying to pass 16-bit data through to UTF-8.

(binary data through UTF-8 requires separate escaping)

AVK: is a network format, it has strings

BE: JSON is more then a network format

?: If you want to pass binary data, just escape unpaired surrogates before serializing them as JSON.

WH: Won't work. JSON will escape the backslashes in the escape sequences and you'll get double backslashes.

#### Consensus/Resolution

- No Change. If you want to use lone surrogates you'll have to escape them after JSON.stringify().



## 5.1 splice, cross-realm Arrays and subclassing
http://esdiscuss.org/topic/array-prototype-slice-web-compat-issue


AWB: (whiteboard)

```js
let newA = a.slice();
```

AWB: it turns out people use this to make a copy of an array

In the general case, assume you have:


```js
class SA extends Array {}

let sa = new SA(10);

sa.slice(1, 5);

// What does this return?
// - a new SA?
// - a new Array?
```

It seems to make sense that when you slice a `SA`, you should get a new instance of `SA`

WH: (recalling Mark's points about Caja(?) use of slice) Array.prototype.slice.call(a)

AWB: This all makes sense, but the problem came up: what if "a" came from a different realm? Under ES5, slice() always gives you an array from the realm from which the slice function itself was defined.

EA: the expecation that you'll get an array is flawed since you are just calling "slice" on an unknown object. "slice" could return 42.

WH: Not what I asked. I was asking about the common existing idiom of calling Array.prototype.slice.call on an unknown object to coerce it into something known to be the built-in array. This breaks that.

```js

[].slice.call(a);

// This result will be an array from the [].slice.call realm
```

AWB: I've tweaked the spec to say:

 - If the constructor I'm using to make the new instance is in fact a built-in Array constructor (not a subclass) from any realm, it then creates an instance of the Array constructor of the slice function.
 - So it essentially does what ES5 does, but if it's a subclass it doesn't do what ES5 does, but ES5 does

RW: my concern was if NodeList was eventually to become a subclass of Array, what happens to existing code that does...

```js
[].slice.call(nodelist);
```

RW: it may solve itself? (the returned thing has the expected "shape")

(returned thing IS a realm-local Array instance)

AVK: we're not going to change NodeList (we're still trying to maybe put Array in its prototype chain), we're creating a new thing, Elements, which will work great.

RW: A new thing avoid breaking the old things.

BZ: well note that HTMLCollection can *never* get fixed in any way.

AR: just to clarify, if I have subclassInstance.slice(...), I get back what?

AWB: a subclass instance

(yay)

WH: If we adopt this, what would be the new blessed way to coerce something to an actual Array?

AWB: ES6 has *numerous* ways to force things to be an actual Array (not a subclass) from a given realm. Anyone who wants to force it can do that.

BE: yes, Array.from, or spread, i.e. `[...otherArray]`.

DC/LH: you're proposing a breaking change?

AWB: no, I'm actually removing a breaking change. For all existing cases, the behavior will be exactly the ES5 behavior.

WH: It is a change for the uses that expect Array.prototype.slice.call to coerce to an actual Array. They will need to change if they interact with any ES6 code.

(General concern to ensure the behaviour remains the same)

BZ: In the subclassing world, and I add method to Array.prototype, if I had an actual array, I will get an array from this realm.

BE: If the first arg to `[].slice.call(a)` (a) is an instance of a subclass of an Array in this realm, `a`s constructor will be used, otherwise, use

BZ: if the realm of the thisObj and the method do not match, create it in the realm of the method using the stardard Array constructor there.

AWB: Agree

WH: How do you find the realm of a Proxy?

DH: really don't want to go in the direction of relying to heavily on the realm

BE: What are you using to construct?

AWB: it's constructor property

AR: Mark counts on this behaviour to ensure that he'll always get "clean arrays" from something that may or may not be "dirty". He could accomplish this by using a frozen version of the method?

AR: Concerned about the Array "redirection", different prototype depending on what you call slice with

BZ: If you're doing "a.slice()", there is no problem, the result is a new instance of the thing you called slice

RW: Right, the issue arises when doing [].slice.call(arguments), nodelist, etc.

AWB: And these aren't arrays

(arguing the meaning of subclassing in ES5)

AWB: BZ's proposal of matching the realm of the function with the realm of the constructor is probably the right way.

DH: Seems like creating a patch for a scenario

DD: But this is what user code would do, using this.constructor

AWB: none of these are guaranteed, where you can wack the prototype...

<strike>
#### Consensus/Resolution

- When slice is call, what is the realm of the slice method and the realm of the constructor of the thisObj (since objects don't have realms, only functions do, we have to look up constructor).
- If they do not match, create it in the realm of the method using the stardard Array constructor there.
</strike>

DH: why not actually find out what realm an object was created in, instead of trying to infer it from this.constructor.


AWB: Is there any other way of creating an instance of this object without knowing what this.constructor is?

BE: In ES6, `class B extends A {}`

AWB: Need to know two things:
1. How to query what the constructor object is
2. What the protocol is for invoking that constructor

DH: So for slice, we have a default

AWB: Yes. Considering adding to collection constructors, a factory for creating

DD: Sounds like an unforgeable symbol that effectively is the same as .constructor, but can't be messed up like .constructor can.

DH: Object to something that is an approximation to what we want

BE: It's a reflective approximation
- Implementations do not want


AWB: What I am proposing and BZ:

    What is the realm of the object I would create?

    Is the object going to create an Array?



BZ: Seperate the concerns, two conversations about creation:
1. "How?"
2. "What?"


WH: Are you expecting to construct or call

(back to "how")

AWB: In my proposal you check if it's a constructor

BE: Opposed to that

DH: Have you audited these cases, how does it work for them all? Does it work for them all, except this case?

AWB: Yes. (The fix for splice is the fix for all of them)

BE: You've added a new reflection on the constructor
- Let's take this back and make it completely backward compatible

BE: I can write code that sets constructor, and now it works differently in ES5 and ES6.

AR: (mumbled something relevant)

BE: Don't think Mark  would want the constructor check

AR: The dot operator is the root of all evil in JavaScript.

BE: I thought it was the NaNs...

AR: We've got a lot of evil.

DH: How much breakage are we talking about? Given the semantics Allen originally wanted?

AWB: under what situations does getting an array instance from a different realm break something? Well, if you've tweaked Array.prototype across your realms, that will make a difference.


BE: The odds are non-trivial that we'll break something

WH: If you're looking at the prototype of things, Caja will break. If you're looking at the constructor property, ES5 code will break for anything that has a custom constructor

AWB: Ignoring the Realm, unless we add some new operation on instances that reveal what Realm they are originally from.


BE/DH: need to go back and work on this.


#### Consensus/Resolution

- Needs revision of proposal.





## 5.2 Evaluation Order and The [[Invoke]] Operation

DH: Yehuda was interested in this.


## 5.3 @@unscopeable


AWB: Inheritance?

ARB: Wrong to apply this across inheritance

AWB: Changed in r18

ARB: How was this changed?

AWB: Own property

The remaining question, do we lookup on entry of with block or for every access?

WH: which one is slower?

AWB: every access

WH: OK, let's do the slower one.

(general laughter and applause)

ARB: (question about lookups that occur _up_ a prototype chain that might encounter an @@unscopeable)

DH: The semantics of with:
- There is an object that we'll do all lookups on

We're adding to that:
- Check the black list first


BZ: Consider you have two objects in your prototype chain, with two different @@unscopeable black lists

AWB: The first

ARB: What if you've put a "values" property directly on the instance?

RW: This was meant to fix that problem.

ARB/BZ: On the prototype, but what about an own property on the instance

(acknowledged)

ARB/DH: Discussion about predicted breakage.

BZ: Possibly as a descriptor?

RW: That was also considered

ARB: But if you [[Set]] it won't go away

```js
var a = [];
a.values = 1; <--
```

DH: (Recalling the issue that created this problem)

```js
function f(values) {
            ^-------------------------+
  with(values) {                      |
    values = 1;                       |
      ^--"values" here is pointing to-+
  }
}
```

But, if the parameter bound `values` object has a property called `values`, the `values` access INSIDE `with(){}` is accessed.

RW: The case that hits @@unscopeable in its current form is far on the edge. Ext.js is generally an outlier in their use of with(){} (in a world that's continuing to progress towards strict mode). Future versions of Ext.js won't have the offending with(){} code, so it won't break on @@unscopeable. Ext.js has also committed to evangelising and getting the patched code out to clients, it was just a matter of needing time to do so.

AWB: Someone could have created his own Array instance with names that @@unscopeable would hide. This would be also not be compatible.

BE: This is why I find find/fill kind of short, you might get collisions. ??

AVK/EA: But but but DOM

BE: Don't rush!

BE: Gecko did ship Array.prototype.values and backed out which is why we added @@unscopeable.

BZ: In the DOM we want Element.prototype.remove and friends which are problematic due to event handlers, which use with semantics.

BZ: You could have a proxy that does the same thing.

AVK: Ouch.

ARB: When an access occurs in with(){}, and a property is found, look at the @@unscopeable on THAT object

DH: Do we want to blacklist names or name-object pairs.
- Distinguish between allowing instance properties

BE: How does this change for MOP?

AWB: Changes from Get to GetOwn, etc.

BZ: DOM Proxies are nicely behaved.

...

AWB: Is anyone actually going to implement?

DH: This is easy for SpiderMonkey

ARB: This is easier then the previous.

BE: Concerns about changing the Identifier resolution for Proxy

AWB: Only for `with`

DH: If you want to not bypass the proxy mechanisms, you have have to give them a new trap to define how they behave when [[Get]] in `with(){}`

BZ: Have to give Proxy a way to know that it's happening in `with(){}`

(working through issues with document.forms)


hasOwn on @@unscopeable

DH:

- Walk the prototype chain
- foreach one,
- check if it hasOwn @@unscopeable
- hit a proxy, does the same

...This prohibits Proxy from participating in the object operation.



WH: Summarize?

BE: We have a problem adding names to mature the API. Let's move forward with @@unscopeable

AWB: For the @@unscopeable arrays I specify in the specification, should they be frozen?

DH: No, need to be able to polyfill feature additions.

AWB: You could always replace the array object.

BE: When in doubt, don't freeze. Why isn't it a Set?

DH: put down the freeze gun. Put it down.

EA: Set is the right answer, semantically.

AWB: Yeah.

DH: I don't really care.

AWB: You asked for a Set no, I think it should be a Set.

#### Consensus/Resolution

- Continueing with @@unscopeable, with changes w/r to lookup to be defined.
- Noted change:
    - When a property is found, look at the @@unscopeable on THAT object


- @@unscopeable
- a Set



## 5.5 Math.roundFloat32

AWB/DH: Offline discussion to rename to something more Math object familiar

Suggestions:

1. Math.fround()
2. Math.f32round()
3. Math.roundF32()

DC: This isn't a round operation

DH: It is, according to IEE 754

BE: fround. f means float, i means integer

AWB: What this effectively does, is "round" (observably)



#### Consensus/Resolution

- Math.fround



## 5.6 Backwards compatability, Unicode UTR31, and ES identifiers (U2e2f)

http://esdiscuss.org/topic/backwards-compatibility-and-u-2e2f-in-identifier-s


AWB: Traditionally, ES has said that Identifier are composed of unicode characters. There are changes to Unicode that rescind it's ability to be an Identifier.

AVK: According to Norbert, the character in question was not part of Unicode 3.0 and therefore not a change

(group testing identifier creation with U2e2f)



#### Consensus/Resolution

- No change
- SpiderMonkey: https://bugzilla.mozilla.org/show_bug.cgi?id=917436
- V8: https://code.google.com/p/v8/issues/detail?id=2892



## 5.7 note in 11.6 WRT Unicode versions, update to Unicode 5.1

http://people.mozilla.org/~jorendorff/es6-draft.html#sec-11.6

AWB: (Norbert proposal)

#### Consensus/Resolution

- Remove: "NOTE 2 If maximal portability is a concern, programmers should only employ the identifier characters that were defined in Unicode 3.0."




## 5.8 line terminators in template strings. Should they be normalized?

(discussion re line terminators)

AVK: HTML parser does normalization, but e.g. DOM setters do not

BE: not normalizing would introduce more interop hazards than we want.

AWB: just to be clear, this is both cooked and raw form.

BE: yes. Add \r\n to the list of special things, alongside closing backtick and ${

- Propose: CR and CR+LF are canonicalized

AR: why isn't this just part of the data? Why canonicalize?

BE: it's not a byte string, it's a string.

BE: but raw should be raw

DD: no but then you have an interop hazard, because people will write code that works great on Unix, then some poor Windows user ends up with \r's in his strings that the Unix-using author did not anticipate.

BE: but you should be using cooked

DD: but a lot of the examples, e.g. on the wiki, use raw

BE: ah right, like the regex one, because you need all those slashes. Hmm.

BE: Python normalizes, Ruby normalizes



#### Consensus/Resolution

- Normalize CR, LF, and CRLF to LF

[WH: Is this consensus recorded correctly? I understood the consensus to be normalizing all lexical grammar LineTerminatorSequences to LF.]

**EDIT**
RW: Yes, and was re-stated for confirmation.



## 5.9 12.2.4 note says we decided (Jan 2012) tail calls only in strict mode. Is this still correct?

http://wiki.ecmascript.org/doku.php?id=harmony:proper_tail_calls

DH: function.arguments is poisoned in strict mode. This opened up doing tail calls.

LH: Are the tail call locations on the wiki still up to date?

DH, AWB: yes, to the best of our knowledge; let us know ASAP if there's something wrong with them.

- Discussion about tail call location opportunities

AWB: getting close to the point of getting tail call stuff into the spec (depending on how busy Dave keeps me); any comments appreciated sooner rather than later.

AWB: Implicit calls to accessor properties in tail positions, e.g. `return x.y`, and `x.y` turns out to be a getter, do we want this to be a tail call.

```js
return x.y;
```

If `x.y` turns out to be a getter, is that a tail call?

AWB: also consider `return x.y()` where `x` turns out to be a proxy; then it's not just a simple call, it goes through the proxy handler.

DH: More generally, if anything, syntactically not a call, turns out to be a call, do we include that as a tail call?

DH: basically, is the spec mandating something that makes too much work for implementations. The definition of tail position is not in question; it's the semantics of what things in tail position become tail calls.

LH: Function calls?

AWB/DH: and method calls

AWB: Calls in general

WH: new?

DH: no, `new` doesn't really work, because of the IsObject check afterward.

AWB: OK, what about the proxy case.

DH: I think it works fine; the semantics is just tail-calling the call trap.

STH: I agree with Dave; we're just making a tail call to some arbitrary code. The code we're worried about is in the call-*ing* function, not in the MOP operation/trap handler.


#### Consensus/Resolution

- Yes, the list is still correct.
- function.arguments in non-strict makes tail call effectively impossible.


(increasing insistence on break time)

AWB: but let's do point 5.11.


## 5.11 Disallow? let undefined; const undefined; class undefined {}; module undefined from "foo";

No one thinks that disallowing this is a good idea.

#### Consensus/Resolution

- Allow



BE: Let's make it a keyword inside generators! Just kidding.


## 4.2 Reconsider decision to make Typed Arrays non-extensible

http://esdiscuss.org/topic/non-extensibility-of-typed-arrays

AWB: Last f2f we decided to make typed arrays non extensible.

ARB: Chrome makes them extensible but I'm in favor of making them non extensible.

AWB: the most significant thing I saw is that if you create a subclass of a typed array, the reason for doing so might include adding some additional state, and so the only direct way to do that is by adding own properties to the instance of the subclass, and if typed array instances are created non-extensible, then subclasses couldn't do this.

DD: You cannot add indexed properties to typed array. It would be surprising if you could add identifier name properties.

DL: There are no objects in JavaScript that have this behavior right now.

OH: Certain restrictions exist for numeric properties. There is no other object that doesn't allow you to add an expando.

OH: Neutering is a performance issue as well. If we should make decision based on performance we should kill neutering.

BE: the real issue is not performance (although the thread may have misdirected in that direction).

AWB: we could go back to having numeric expandos, if you want...

BE: No no no no, there was a performance counterargument there, unlike for named expandos.

DL: (clarifying


```js
A = new ArrayType(uint8, 10);
s = new StructType({a: A, ...});
a = new A();
a.foo = 5;
s.a = a; // ??
b = s.a
```


DH: A "Typed Object" is effectively a pointer to a shared backing store. If those objects can carry addition state

OH: If

DL: With typed objects we can do

```js
Uint8Array = new ArrayType(uint8);
```

AWB: There may differences between TypedArray types


...

DH: There's an example, wherein two views on the same backing store will not be === or ==, but there are implementation strategies that could make it possible.

STH: It's easy to use getters where writing to one


I'm behind....


OH: Structs aren't expandable so therefore Typed Arrays shouldn't be expandable

BE: Do we need extensible array types

DL: All variable length array types to be extensible?

AWB: We'd have to have a form of class, whose instance properties are defined by a Typed Object

DH: Foresee a mechanism

WH: Prefix properties?

DH: Yes, if you have super type, its subtype is

OH: Index properties are seen first in ForIn

DH: Recalls discussion to allow index names to diverge, object model reform, etc.


DH: most beginner references establish that all properties are strings

RW: There is a lot of attention paid, in learning resources, to establish Array and Object as two different things, based on their property name "type". It's not until much later that realization is made that they are the not different, aside from special length property behaviour.

ARB: not allowing them is more conservative for now. We can always relax them later.

BE: that conservative argument seems strictly stronger than consistency arguments which always pick their preferred dimension of consistency.

WH: I haven't seem any good arguments for allowing expandos in arrays but not structs.

BE: the arguments are: it's useful; it works on arrays.

AWB: as currently specified, you can create a subclass of Uint32Array.

(Discussion of how buffer semantics work in subclasses. Decided it's not really relevant.)

AWB: the subclass wants to add new properties

DD: but it's OK to add prototype properties...

AWB: yes, but, most people represent per-instance state with own properties. Yes, you could use a weak map, that's the universal answer, but that's not what people do currently in JavaScript.

WH: composition over inheritance

AWB: but then you don't get any inherited behavior

AWB: Here's what I would advise. Use composition when you're composing base abstractions into a new abstraction. But if your new thing is a specialized kind of array, which may need some extra state, then that's not a composition type of situation, it's an inheritance type of situation.

DH/AWB: we could not make @@create create a non-extensible object, instead we would make the typed array constructor call `Object.preventExtensions` on `this`.

WH: extensibility breaks compositionality.

AR: this is a strange argument; you serialize and deserialize the object, losing expandos seems fine.

BE: serialization/deserialization is not the model.

DD&DH: so if you don't call `super`, or wait until the end of the constructor to call `super`, the constructor can extend with per-instance properties

OH: Have @@create produce an extensible object and have the constructor call `Object.preventExtensions`

DH: Yes

DH/AWB: What order does super get called?

DH: Seems like a solution, but not one that everyone is fully in support of.

DH: Points are not about speed of accessing properties of objects and more about layout of objects

BE: Most users of typed arrays are not naive. We should not be promoting these overal normal arrays.

AWB: Not even numeric?

BE: Define numeric. Unless you actually know what you're doing, you shouldn't be using these and we shouldn't be promoting them for these.

BE: Typed arrays are power tools.

(Float-containing normal array is almost equal in perf to float64 typed array in JavaScriptCore.)

OH: Agreed.

OH: Transfering large amounts of data to a worker.

??: Better not have any expandos.

BE: How do we make progress? Stand-off!

DH, WH: to be clear, it would be sad if typed objects and typed arrays were inconsistent. so if we say typed arrays should allow expandos, then so should typed objects.

DH: You can't put a variable-sized array in a struct.

OH: Do we have a ToArrayIndexedProperty somewhere? Might have been internal to JavaScriptCore.

AWB: The problem here is what array index meant when there was only the built-in array type doesn't fit with the typed array usage we have now.

BE: I don't see it.

Straw poll: 8 non-extensible, 8 mu (abstain), 1 (Ollie) extensible (I think it was moo, way more of a cow sound.) ( https://en.wikipedia.org/wiki/Mu_%28negative%29 )






OH: We don't see any reason to remove extensibility, you can always make them non-extensible

OH: The view of the JavaScriptCore team is that making them non-extensible removes what developers can do, whereas making them extensible does not have to cost and provides more freedom.


OH: examples of behaviour equivalent to TypeArrays with expandos:

```js
array = [1,2,3]
Object.defineProperty(array, "length", {writable:false})
array[3] = 0;
array[3] => undefined
```

Various DOM lists allow non integer expandos, but don't allow integer expandos


BE: The conservative argument is that if we're unsure we should make it non-extensible so we can make it extensible later.

AR: You can interpret it both ways.

DH: Non-extensible is conservative because you can change it later. It being extensible cannot.

DH: Extensible is probably my preference at this point, but we can't leave it unspecified.


BE: Due to duplicate bug of https://bugzilla.mozilla.org/show_bug.cgi?id=695438 -- namely https://bugzilla.mozilla.org/show_bug.cgi?id=828599 with its adding .stride to WebGL vertex typed arrays -- I am now in the extensible camp.

Straw poll:

Extensible: 10
Non-extensible: 6


STH: (points about the mental model of operating on the backing store)

DC: (points about the hazard of user code that abuses Array and creating a new hazard)


#### Consensus/Resolution

- Consensus deferred.
