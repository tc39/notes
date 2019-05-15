# May 23, 2012 Meeting Notes
-----

This pre-dates the recording of a complete attendees list. 

-----

## Override Mistake (Allen Wirfs-Brock, Mark Miller)

AWB:
- The correct people are not here for this discussion, defer to next meeting


## 4.14, Unicode (Norbert Lindenderg)

NL:
- Regular expressions
- Certain unclear, discuss with Unicode Consortium
see:
http://norbertlindenberg.com/2012/05/ecmascript-supplementary-characters/index.html

http://norbertlindenberg.com/2012/05/ecmascript-supplementary-characters/full-unicode-in-ecmascript.pdf

AWB:
- Concretely, should supplementary characters gain coverage in the currently developing draft.

MM:
- Mention of spec modularity

AWB:
- Implication for strings etc.

NL, LH, MM:
- Any objections? No.


AWB:
- Canonicalize everything to full unicode grammar
- Don't think this will change implementation rules

LH:
- Asks for confirmation

NL, AWB:
- Confirms no difference.

Resolution: Promoted unanimously to harmony status


## 4.11, Daylight Savings (Luke Hoban)

Move to remove/reword:

		15.9.1.8 "An implementation of ECMAScript is expected to determine the daylight saving time algorithm."


AWB:
- There needs to be a specification of some sort, as other aspects of the standard rely on this.

more discussion.

Some locales do change

LH:
- Operating systems and browser do have disagreements


AWB:
- Either NL or LH can draft replacement text for
			15.9.1.6 and 15.9.1.8

more discussion.

Resolution: Remove the spec text, new additions will be considered as new proposal

*Not* errata.

## 4.10 Object.observe (Rafeal Weinstein)

Rafeal Weinstein:
- Introduction to proposal

See: http://wiki.ecmascript.org/doku.php?id=strawman:observe

MM:
- In favor of spec'ing an event loop

Alex Russel:
- This doesn't actually change anything in the spec today

MM:
- Run program code to completion, etc.

LH:
- last execution context

AWB:
- Currently no concept of "last execution context"

YK:
- It's implicit

LH:
- Agrees, needs to be specified

OH:
- What happens if the object is mutated before the callback delivers?


Explanation of side-channel communication of objects.

YK:
- Explains the idea, needs of observing an entire object.

Discussion about object safety.

Discussion about frozen object safety.

Discussion about non-configurable, non-writable property change delivery.

MM:
- Will adding the text "Any non-frozen" change the operational behaviour?

YK:
- No, frozen objects should probably not deliver a property changes

Erik Arvidsson:
- Deferring to MM

MM:
- Observe proxy?

EA:
- Non-issue, the traps only the final property

LH:
- More explanation of Proxy property trap behaviour


AWB:
- There is too much going on at low level with this proposal

Discussion about importance

BE:
- Important does not mean "it's in"

RWeinstein:
- What if this didn't apply to Proxy?

BE:
- The DOM...

More discussion regarding security, naivety of proposal

BE:
- Let's have Tom Van-Cutsem take a look at this and iron out

RWeinstein:
- Asking for blessing to prototype in v8: approved.


Resolution: Needs more exploration



## Spec Issues 

(Allen Wirfs-Brock)

*Object.isObject*

Misses the mark on actual needs.

BE:
- Possibly, Object.typeOf()?

Doug Crockford:
- Need to re-address this for reality.

YK:
- Will write strawman for review at next meeting.


Resolution: Consensus to remove from draft


*super*

LH:
- This may be too confusing for the common user

AWB:
- Asserts that super is defined correctly for classes
(explanation)

Should super be allowed in all function forms or restricted to classes?

Resolution: Defer super outside of classes



*Concise Methods*

Resolution: In favor


*Concise Body*

Resolution: Only for ArrowFunction


*Property Assignment Shorthand*

eg.
function point(x, y) {
	return { x, y };
}

{ x: x, y: y }

This is too unclear
w/r to destructuring: both, or nothing.
Plenty of opposition based on clarity.

Resolution: Nothing, no change.


*Triangle*

Is capable of giving up private names

If people have __proto__ they will not use <|.

MM:
- From a security perspective, I'd like to move __proto__ out of annex B and into normative body

BE:
- If MS puts __proto__ in IE, then it becomes defacto standard and we might as well put it in the standard.

1. __proto__
2. grawlix


#### Conclusion/Resolution

- Indefinite postpone


## Moustache

o.{ p: v }

BE:
- Propose that moustache is kept, but still consider Object.extend

MM:
- Would like to consider both moustache and Object.extend


How about... both?
= assign
: define

ie.

o.{
  p1: "to define",
  p2 = "to assign"
};

Positions:

Just Define
Just Assign
Both Define and Assign
Alone
Applied to object literals


#### Conclusion/Resolution

- Return to strawman for revision, needs own wiki page.


## Computed Keys

Erik Arvidsson:
- Today, properties are static and knowable, computed keys are not knowable.

#### Conclusion/Resolution

- Deferred.


## SealedObjectLiteral

See: https://bugs.ecmascript.org/show_bug.cgi?id=362

#### Conclusion/Resolution

- Postponed until ES7.


## String.prototype.toArray

#### Conclusion/Resolution

- Removal from draft.



## Weak Refs

Yehuda Katz:
- Use case: observers


#### Conclusion/Resolution

- Continued, due to lack of time.



## Value Objects

Brendan demos, explanation of the implementation and operator overloading

#### Conclusion/Resolution

- none
