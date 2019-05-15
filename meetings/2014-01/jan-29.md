# January 29, 2014 Meeting Notes
-----

John Neumann (JN), Allen Wirfs-Brock (AWB), Yehuda Katz (YK), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Rick Hudson (RH), Matt Sweeney (MS), Dmitry Soshnikov (DS), Sebastian Markbåge (SM), Ben Newman (BN), Jeff Morrison (JM), Reid Burke (RB), Waldemar Horwat (WH), Doug Crockford (DC), Mark S. Miller (MM), Brian Terlson (BT), Luke Hoban (LH), Andreas Rossberg (ARB), István Sebestyén (IS), Niko Matsakis (NM), Brendan Eich (BE), Rick Waldron (RW), Sam Tobin-Hochstadt (STH), Rafeal Weinstein (RWN), Dmitry Lomov (DL), Niko Matsakis (NM), Simon Kaegi (SK), Kevin Reid (KR), Dave Herman (DH)

-----

## Function in Blocks in non strict mode.

(Ask Brian for slides)

BT: In ES6 draft in appendix B (since functions in block are not in ES5 but implemented)

BT: IE11 shipped with function in block in non strict mode.

BT: Hoists across let blocks

AWB: If you start using a let then you'll get an error. Since old code does not use `let`.

LH: If the code falls out of the known patterns you hit a rough edge and then it is better to get an error than undefined behavior.


WH:  Concerned about expanding past the minimal crazy intersection semantics we agreed  to in the past. The proposal expands the set of cases that produce surprise captures.

WH: [on whiteboard] This is not just about eliminating errors. It will silently change the meaning of working code:
```js
function foo() { ... 1 ... }
function bar() {
  if (...) {
    function foo() { ... 2 ... }
  }
  foo(); // Thought it would refer to the outer scope foo. Surprise!
}
```

```js
function foo() { ... 1 ... }
function bar() {
  if (...) {
    let foo =...;
    {
      function foo() { ... 2 ... }
    }
  }
  foo();
}
```

LH: Since 1.5% depend on the crazy behavior we have no real option.

WH: Let's limit the craziness to just the cases in the minimal intersection semantics.

BT: Allow hoisting past a let.

ARB: What was the motivation for this special case, i.e., why not drop all hoists that would normally be an error?

LH: Creates 2 bindings. The FunctionDeclaration itself mutates both the var binding and the let binding.

```js
(function() {
  {
    let foo;
    {
      function f() {}  // Why no error?
    }
    console.log(foo);  // undefined
  }
  console.log(foo); // funtion foo() {}
})();
```

DH: If you inject a let and it shadows a var it should be a static error.

LH: In strict mode it is legal so it cannot be an error in non strict.

DH: It is consistent with a var in a block.

ARB: What happens if you have two functions

LH: You conceptually get two var bindings.

WH: That's not part of the intersection semantics. Shouldn't get any if you have two foo's in inner blocks.

YK: Writing new ES6 code in non strict should still work.

WH: It will silently do different and surprising things, as per examples above.

DH: If there is any intervening let binding do not hoist past the let.

LH: If introducing would introduce a static error. Do not introduce the var binding.
[Discussion on the behavior of the new var bindings, along with whether assignment to foo updates one or both.]

WH: When are the crazy introduced var bindings initialized? At entry to outer function bar (just like ES5 inner functions in the top-level of an outer function), or at the time the inner function function foo definition is executed?
Various: Set to undefined on entry to outer function. Set when inner function definition foo is executed.
Various: Executing function definition updates both the let and the var bindings. Assignment updates only the let binding.

WH: [points out (and likes) warning on cases "for which the above steps are performed" in Annex B of the current draft]
[Long discussion about warnings, SHOULD, and their audience]

LH:  A SHOULD warning seems a reasonable addition to the proposal here.

#### Conclusion/resolution

- 2 bindings.
- Hoist a var binding for the FunctionDeclaration, unless it would introduce a static error (ie. hoisting past a let will not cause an error but also not create the var binding).
- Also create a let binding as per pure (strict mode) ES6 semantics. (Change from IE11 semantics). Within the scope of the let binding, assignment will only touch the let binding (ie. normal semantics).
- The var binding is only initialized at dynamic evaluation of function declaration.
- A SHOULD warning if there is a reference to any such var binding of a function


## Object.observe Status Report

RWN: Suggest moving OO to the second stage.
:: Approved

RWN: Wants to move OO to the third stage, which requires a spec text review.

YK: Has reviewed it already.

AWB: Might have time to review.

RWN: The plan is to ship OO in Chrome sometime around April.

AWB: Should not be a problem to advance without scrutizing the proposal. Willing to rubber stamp at this point. Since we are in a state where we are. (?)

YK: Once we are at stage 3 we are committed to not revisit.

RWS/YK to talk about task scheduling.

#### Conclusion/resolution

???


## Post ES6 process

AWB: First step is to post the process somewhere public

AWB: Second, need a place to track the progress

AWB: Thinking we should do this on GitHub. Project TC39/meta. Master table. Or maybe 2 tables?

WH: Are we abandoning the wiki?
Various: yes

WH: How do I view HTML instead of the HTML source on GitHub?

EA: We should also move the meeting notes from rwaldron/* to TC39/*

YK: We should use the GitHub API to extract the comments for keeping the paper-trail.

RWN: Agenda changes since last time
    1. Add a designated reviewer.
    2. At step 3 and 4 there is a requirement to get an approval from the spec editor.

RWN: Also managing spec in flight

YK: I'm going to work in that.


## Do Expression

(Ask for slides from ARB)

MM: An engine can statically detect an IIFE and treat it as a do expression.

DS: Important to scope var declarations to the enclosing function rather than the do block because that's what happens in a do-while loop, and it's hard to tell if you're looking at a do block or a do-while loop.


```js
do {
  ...
}

while(true);
```

WH, DH: Expression statements cannot start with `do` to avoid syntactic conflicts.

BE: Just like `function` for FunctionExression which cannot start ExpressionStatement.

DH: Just use a parentheses if you really need to start ExpressionStatement with `do`.

AWB: What step is this in the new process? Step 0?

ARB: Can write spec

DH: Primary reviewer.

#### Conclusion/resolution

- do-expressions as generailsation of block statements
- Progresses do-expressions to the next state in the new process.

## Security Review for Loaders/Realms

MM: We have considered a security review for Loaders & Realms

YK: Talked about this earlier, seemed positive

STH: Concerned about definition/scope
KR Gave vague definition

MM: We'd like to do the same things we did in ES5
KR Considering porting SES to ES6.
DH/
STH: this is an excellent goal

MM: What's the implementation status of Loaders/Realms

DH: Unpolyfillable, YK + DH tried some things w/ iframes, didn't work

DH: That's part of why we think it's a fundamental new primitive

#### Conclusion/Resolution

- MM et al to port SES to ES6, contact module champions w/ results

## Typed Objects

Dmitry Lomov + Niko Matsakis

NM: Not objects

WH: Likes that === compares identities, but would prefer that == compare values.

NM: THat would be dangerous since structs are mutable.

WH: In that case, how do you compare values? That's a really common thing that users will want to be able to do.

ARB: Accessing a sub struct of a struct does not allocate any object.

NM: You can stack allocate

```
Line = new StructType({from: Point, ...})
line = Line(...)
while ( ... ) {
  foo(line.from)
}
```

DH: If `line.from` heap allocates it would be suprising.

WH: How does stack allocation work if the reference to the allocated object escapes the scope?

WH: Important to be able to mark StructTypes to always generate opaque fat pointers even if they don't have any 'any' field.

WH: This helps with optimization. Knowing that all instances of a StructType are opaque lets NaN-boxing implementations optimize out protection against NaN-injection on reads.

## Value Objects

http://www.slideshare.net/BrendanEich/value-objects2
