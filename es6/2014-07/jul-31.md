# July 31, 2014 Meeting Notes    
-----


Brian Terlson (BT), Dmitry Lomov (DL), Waldemar Horwat (WH), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jafar Husain (JH), Jeff Morrison (JM), Mark Honenberg (MH), Caridy Patiño (CP), Sebastian Markbåge (SM), István Sebestyén (IS), Erik Arvidsson (EA), Brendan Eich (BE), Mark S. Miller (MM), Sam Tobin-Hochstadt (STH), Domenic Denicola (DD), Peter Jensen (PJ), John McCutchan (JMC), Paul Leathers (PL), Eric Toth (ET), Abhijith Chatra (AC), Jaswanth Sreeram (JS), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), Ben Newman (BN)

-----

## Notes from secretariat  

IS: ES6 delay accepted, but please don't delay this again. 

- TC52 working in a similar way and process to TC39's ES7 approach: Frequent releases of incremental versions of standards. They also use the same kind of RF policy.
- TC52 is looking at how TC39 is proceeding
- TC52 are more polite

IETF and Internet Architecture Board liaison. 
- JSON work and looking for liason. We published Ecma-404 and they are publishing their standard and have asked for review/comment. Need to nominate someone as liaison.

ITU liaison. 
- Using in JSON for communication standard

Meteor group has joined Ecma 


JN: Recommend putting out a call for liaisons, including the information you have. List roles and expectations, we'll put it on the next meeting agenda to establish appointment.

AWB: There has been a notification for these roles. 

JN: Is anyone here prepared to volunteer now? Or at the next meeting. Need someone to at least collect the communications out of those organizations.

#### Conclusion/Resolution

- John Neumann to stand in as liaison



## 9.1-8 Date and place of the next meeting(s)

JN: Need to fill in the venues. 

DH: January 27-29, 2015 at Mozilla (Downtown SF, CA)

EF: March 24-26 2015 at Yahoo (Sunnyvale, CA)

JM: May 27-29 2015 at Facebook (Menlo Park, CA)

ET: November 17-19 at PayPal (San Jose, CA)

RW/YK: Will decide on Sept. 2015

#### Conclusion/Resolution

- John Neumann will update the agenda and schedule. 



## 4.4 Follow up: Instantiation Reform (@@create)

JM: Found cases where we set up state before calling super. I'm convinced that there are sufficient workarounds (via calling <<SuperClass>>.call() in the legacy style).

https://gist.github.com/jeffmo/bf30e7154ab3c894b740 -- "#_Before.js" is an example of a pattern that exists now, "#_After.js" is an example of how one might fix this pattern

JM: (gives examples that amount to two step initialization)

WH: C++ doesn't allow this kind of bottom-up construction (can't initialize a subclass instance before the superclass instance is initialized), and use cases like this arise once in a while. The usual workaround is to pass through Options objects.

JM: (example of type ahead classes in FB code base -- see 2_Before.js and 3_Before.js in the above gist)

AWB: (draws model of two phase allocation)


YK: The problem is allocatuion vs. initialization, in your model mutates before calling super.
- Need to make sure the allocation has happened before you get into the constructor.
- It looks like the only way to fix this is to have "two constructors", which we can't do

SB: We don't want to support this pattern, but there is nothing to stop user code from doing this.

AWB: "Fragile Base Class Problem"
- Start at derived class
- super'ed up to base class
- Base class invokes method that's defined on the subclass
- The problem is that the object isn't set up yet.

This is a bug.

AWB/YK: (Further discussion of how to avoid this pattern)

JM: Special case refactoring in subclasses isn't trivial.
- Both direction have down side:
  - TDZ approach negates certain cases
  - Non-TDZ approach allows for decoupling of allocation/instantiation

YK: Lifting the TDZ doesn't solve the problem. It happens to work in this case because the base class doesn't allocate. 

AWB: There is way to do this in the new design, use the construct method

SM: Foresee a tooling solution (e.g. linting for properly placed calls to super())

AWB: Will always come to a place where a problem can't be solved with your existing inheritance model and you'll simply need to refactor. It's not that inheritance has failed, just that the class heirarchy needs to be refactored.

JM/SM: Refactoring is the correct approach, but it can be idealistic in some scenarios. Imagine a TypeaheadBase class that has been subclassed 100s of times. It's not until the 101th time that you realize you need to refactor the base class (and, thus, all pre-existing subclasses)

Discussion about subclasses that require two phase construction (with instance side initialization methods)

Mixed discussion about allocation phases.

MM: Do we have consensus on the instantiation reform we agreed to yesterday? 

yes.

[JM agrees on the grounds that there are at least legacy style workarounds for that 101th subclass and the rest of the patterns he found a la `<<SuperClass>>.call()`]

YK: will not be ok with this solution if it switches on the instantiation of the constructor


...Need help covering this...


WH: I insisted on having a syntactic switch for function-vs-generator rather than switching on the presence of a yield. The reason was that functions and generators are radically different and it makes sense for a trivial generator to have no yields. In this case I'd mildly prefer to have a syntactic switch as well, but it's not as crucial because I haven't seen any good examples of where apparently problem-free code would unexpectedly go wrong. If you don't call the superclass constructor, you'll miss out on superclass initialization, which would be a problem even if the presence of a super call didn't statically switch modes, so the mode switch hasn't created a problem where there wasn't one. Inserting or deleting an "if (false) super()" does change things, but I don't see why one would be likely to do that. [I suppose that you could stylistically mark inheriting constructors whose super() calls are deeply buried with an "if (false) super()" at the top :).]

MM: I agree there is a smell with super; would I adopt syntactic marking? I want to see them first.

WH: On the fence, suppose we do this, what if you call super in a method not marked? What does that do?

DH: It's ok for class body to have more syntactic distinctions than outside functions acting as constructor

AWB: You could imagine that I have a splat that indicates "I do not want allocation for this class"


#### Conclusion/Resolution

- Agreement to MM proposal: Allen to be the champion and work out the details remaining


## ES7 Items?


DH: We should focus on ES6 items, we have limited time in face to face.


DD: I don't think we should de-prioritize ES7, given the train model.

AWB: We have no choice but to prioritize ES6 

## 5.7 Array.prototype.contains 

(Domenic Denicola)

Follow up from RW's Stage 0 in 

DD: Presents: https://github.com/domenic/Array.prototype.contains/

DH/RW: Parity with String

RW: Most arguments were noise and Domenic's proposal addresses them all.

AWB: One of the previous objections: string.contains is looking for a substring, not an element. 

EA: Same thing with indexOf

JM: Can you give an example where this is a problem?

MM: Consistently inconsistent parity with indexOf

#### Conclusion/Resolution

- Stage 1 acceptance


DD: Would like to do Stage 2 and 3 asynchronously due to the simplicitly of this proposal. 

AWB: I'd like the process to be respected. 

MM: If Stage 2, 3, and 4 are complete by next meeting, then we can advance to Stage 4. 

Discussion re: the ES7 process. 

AWB: Concerns about lack of review that results in more work later in the game.

MM: We don't have a mechanism to come to consensus outside of these meetings. These meetings _are_ the time that we're able to work on these issues. This is my allocated time 




## 5.1 Math.TAU 

(Brendan Eich, Rick Waldron)

https://gist.github.com/rwaldron/233fd8f5aa440c94e6e9

BE: Math.TAU = 2PI

WH: OK, but only if it's called Math.τ :-)

MM: Opposed: one letter shorter, not well known, not well taught. PI is known, taught and ubiquitous. 

#### Conclusion/Resolution

- Rejected. 



## Exponentiation Operator

(Rick Waldron)

https://gist.github.com/rwaldron/ebe0f4d2d267370be882

RW: All other languages have it. Why can't we?

RW: Needs hihger precedence than multiplication

MM: Right associative?

RW: Yes, same as all other languages.

BE: **?

MM: Want to make sure that it does the same as the built in %MathPow% and not not any overload.

RW: Confirm

DH: Wants to point out that adding syntax does have a cost. But thinks it is fine and there is a lot of precedent.

#### Conclusion/Resolution

- Stage 0 acceptance (in 6 minutes)


## Precision of Math trig functions

(Dave Herman)

DH: V8 made the result less exact in the name of performance. Are we going to have a "race to the bottom"?

DH: People are now starting to implement these algorithms in js since they cannot depend on the built ins.

DL: Java lies. Implementations do not follow the Java rules.

WH: Looked at the posted data and found it pretty compelling that the status quo free-for-all is not good. Some functions that should be monotonic aren't. Some results are significantly off.

WH: fdlibm should be the lower bar for precision. It almost always gets things exact or within 1 ulp.

DH: Talked to an expert (Dan Gohman) and he offered to come to this meeting; I told him he could wait and see how the conversation goes and maybe come in the future.

WH, DL: We need to invite experts to get the right answer to this.

MM: When doing the sputnik tests we just looked at the results and based the precision on what browsers did when the tests were written.

AWB: We need a champion.

DL: V8 is planning to fix this and make the results more accurate.

#### Conclusion/Resolution

- Need to bring in experts.
