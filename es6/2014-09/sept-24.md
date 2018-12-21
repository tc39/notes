# September 24, 2014 Meeting Notes       
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Rick Waldron (RW), Eric Ferraiuolo (EF), Jeff Morrison (JM), Jonathan Turner (JT), Sebastian Markbåge (SM), Erik Arvidsson (EA), Brendan Eich (BE), Domenic Denicola (DD), Peter Jensen (PJ), Eric Toth (ET), Yehuda Katz (YK), Dave Herman (DH), Brendan Eich (BE), Simon Kaegi (SK), Boris Zbarsky (BZ), Andreas Rossberg (ARB), Caridy Patiño (CP), Niko Matsakis (NM), Mark S. Miller (MM), Matt Miller (MMR), Jaswanth Sreeram (JS)


Remote: 
István Sebestyén (IS)

-----

## Object Instantiation Redo
(Allen Wirfs-Brock)

[instantiation-reform-sept2014.pdf](./instantiation-reform-sept2014.pdf)

AWB: (introducing discussion from last meeting)

AWB: how many people here have read these gists? (hands are raised) OK, about half the people... The others are going to have a hard time.

Slide 1, 2

Introductory

Slide 3

Main Issues 
                                                                                                         
- @@create can expose uninitialized instances of built-in and host objects 
- Necessitates numerous dynamic "is it initialized" checks in order to guarantee the invariants of such objects 

AWB: The design long holding consensus was found to expose uninit instances. If it's an exotic or built-in with some invariant to maintain, instances may be produced that do not uphold the invariant. 
- Concerns about the complexity introduced into the specification
- DOM APIs suddenly required to track 
- Looking for a solution that doesn't expose the allocated but uninitialized instance.

Slide 4

Original Idea From Claude Pache  

```js 
class C extends B {
  constructor(...args) {
    /* 1: preliminary code that doesn't contain calls to a super-method */ 
    /* this in TDZ */     
    /* 2: call to a super-constructor */ super(...whatever);
    /* this defined */     
    /* 3: the rest of the code */   
  }  
}  
```

- Added "receiver" argument to [[Construct]] that passes the constructor that `new` was originally applied to.
- Instead of pre-allocating `this` before entering the constructor, a TDZ exists until the super call

Slide 5

Addtional Idea Presented at Last Meeting 

- `new*` token - Value is the "receiver" parameter from [[Construct]] or undefined if [[Call]] 
- Can be used to discriminate "called as constructor" and "called as function" 
- Provides access to original constructor for object intialization/intialization
   – `Object.create(new*.prototype);`  

`new*` has been replaced by `new^`

- Value of `new^` is the "receiver" argument to [[Construct]]. Undefined if called as a function otherwise.
- `new^` chosen as alternative to `new*` since `new*` doesn't align with other uses of *, and new^ seems more appropriate.


Slide 7

`new super()`

- Use `new super()` rather than `super()` to "invoke superclass" constructor
  - `new super()` is always a [[Construct]] invocation
  - `super()`     is always a [[Call]] invocation

- Didn't want to further confuse "called as a constructor" and "called as a function". 
  – <id>() -- always means "called as function"
  – new <id>() – always means "called as constructor" 
  – Even when <id> is `super` 


Slide 8

`this = new super()`

- Original proposal had `this` in TDZ until explicit `super()` call. (now `new super()`) 
  - Invisibly assigned to `this` 
- Update proposal eliminates the implicit assignment by `new super()`. 
- But allows an explicit assignment to `this`
  - Only in constructors
  - Only a single dynamic assignment
  - Subsequent assignments `throw ReferenceError`

MM: "Allows" explicit assignment to `this`, implies also allowed to call `new super()` without assigning to `this`?

AWB: Yes. Example is `Proxy(new super(), {...traps});`


Slide 9

`this = <expr>`

- RHS of `this` assignment in a constructor isn't limited to `new super();`
- May be any object valued expression: 
```js
this = new super();
this = {x;1, y:2};
this = Object.setPrototypeOf([ ], new^.prototype); 
this = new Proxy(new super(), handler); 
```


Slide 10
                                                                             

Works in both class constructors and function constructors 
                                                
```js
SubArray.__proto__=Array;
SubArray.prototype=Object.create([].prototype);
func,on SubArray(...args) {
	if (!this^) this = new SubArray(...args);
	else this = new super(...args);
} 
```

MM: You can do assignment to `this` when called as a function?

AWB: No


Slide 11

Default object allocation (Base Classes)

- Class constructors without an `extends` and basic (function) constructors...
- ...Assign a new oridinary object to `this` if body does not have an explicit `this = `.
- These continue to mean the same thing: 
```js
class Base {
  constructor(x) {
    this.x = x;    
  }
}

function Base(x) {
  this.x = x;    
}
```    


Slide 12

Unqualified super references 

- Until now ES6 has said that `super()` means the samething as `super.<method name>()`   
  - Implicit property access   
  - Requires setup using toMethod (implicit or explicit) 
- `super` in constructor needs to means "this constructor's [[Prototype]]", not "[[HomeObject]].prototype.constructor" 
- It would be confusing if `super()` means something completely different in a constructor from what it means in an non-constructor method 
  - Is this going to be used as a constructor or a method? function `f() {return super()};`


Slide 13

Eliminate unqualified `super` reference in non-constructor methods 

```js
class Sub extends Base {
  foo() {
    super();     // now a syntax error
    super.foo(); // must say this instead    
  }
}
```

- Unqualified `super` only allowed in class constructors and function definitions.
- Regular methods must qualify `super` references with a property access.




Slide 14

Default Value of `this` in derived constructors that don't assign to `this`

- Some alternatives
- `this = new super(); // super new with no arguments`
- `this = new super(...arguments); // siper new all args`
- `this = Object.create(new^.prototype); // oridinary obj`
- no value, `this` in TDZ at constructor start
- Most controversial part of design discussion

BE: Implicit object.create with new^ and subclassing a DOM base class, you end up with wrong thing

DD: Error better than not 

(Domenic just named `new^` "new-hat")

AWB: Most preferred is Alternative 4.


Slide 15

The Winner: No Default `this`

- Eliminates issues of what arguments` to pass to implicit `new super()` 
- Must assign to `this` in derived constructor before referencing it.


DH: In the constructor of a class that extends, no implicit this? Subclass would have to explicitly do something

AWB: Yes

Question about dead code removal, if `this = ` is in a dead code path

AWB: Tooling will have to be updated to understand new class semantics. 
- Assignment to `this` in a function defintion is meaningless, only works in a class body


MM: Any way to make derived constructor, base class and function rules?

```js
function f() {
  this = new super()
  this.x = 1;    
}
```

MM: What happens is `f()` is called as a function?

AWB: If it includes `this = new super()`: Runtime error

AWB: `this = new super()` does a TDZ check

Questions about multiple `this = ...`

JM: In terms of dead code, linters, minifiers (any tooling) will have to become aware.
 - Additionally, seems there could esily be incidental refactoring hazards (large constructors getting refactored into smaller ones, moving code around, accidentally breaking contextual auto-allocation).

AWB: Yes.


```js
// Throws because 
class C {
  constructor() {
    this = undefined;
    return 5;
  }
}
```


MM: In the absense of a valid return, what would be the problem of returning the `this` value at the end of the constructor, even if the return value is a non-object?

BE/AWB: Consistency. This would be new semantics

MM: Sufficiently different, maybe not worth taking a chance on.

BE: I wanted allow return override. Guaranteed to return an object

AWB: If don't explicitly return an object, the `this` value is returned.

SM: Difference between assigning to `this` and returning an override? 

AWB: None

YK: No TDZ?

BE: Invoke a function with new, the return is 5, not an error, just returns the original object

MM: comments about refactoring subclass constructor function to class constructor
```js
B.call(this) => this = new super();
```

(break)

Dave Herman and Yehuda Katz present counter proposal

[atat.pdf](./atat.pdf)

Slide 1

Introduction


Slide 2

Problem: Can create half baked objects.


Slide 3

(examples of Foo[@@create]())

Slide 4


Slide 5

- Uninitialized instances of builtin classes have to be implemented for every tupe in the entire web platform 
- Uninitialized state


Slide 7 


Solution: both allocator and constructor get arguments


Slide 8 

```js
new C(x,  y,  z) 

? 

do {    
  let obj = C[Symbol.create](x, y, z);    
  obj[[Construc]](x, y, z);   
}
```


Slide 9

- Builtins do all their work in the allocator. 
- Constructors are noops. 
- Impossible to observe uninitialized objects. 
- Abstractable by WebIDL to avoid spec boilerplate. 
- Abstractable by WebIDL implementations to avoid implementation boilerplate.


Slide 10

```js
Object[Symbol.create] = function() { 
  return Object.create(this.prototype); 
}; 
                                                
Array[Symbol.create] = function(...args) { 
  let a = %CreateArray%(...args); 
  Object.setPrototypeOf(a, this.prototype); return a; 
}; 
```

Slide 11

```js
class Stack extends Array { 
  top() { 
    if (this.length === 0) {
      throw new Error("empty stack"); 
    } 
    return this[this.length - 1]; 
  } 
} 

class Substack extends Stack { 
  meep() { 
    return "moop"; 
  } 
} 
```


Slide 12

```js
let PointType = new StructType({ 
  x: uint32,
  y: uint32 
}); 
                                                
let ColorPointType = new StructType({ 
  x: uint32,
  y: uint32,
  color: string 
}); 
```


Slide 13, 14

TODO: Copy slide


Slide 15



MM: Difference between the proposals: 
    
- In new hat, case splitting on "if of new hat"
- Whereas, in ES6 and DH present, case splitting on @@create vs. constructor

BE/AWB/YK/DH: Agree. 

BE: Clarify: this pertains to cases where you have split initialization and allocation, such as exotic objects, built-ins.

Discussion re: do not want to expose uninitialized stuff. 



DH: issues with previous proposal, aka "new-hat"

1. new-hat syntax is there to distinguish call and construct 
  - Agree that this is an issue to address in itself
  - There are ways to get this distinction without syntax
  - No way to wrap call and construct path because we're in declarative code
  - Too late for new syntax and specifically `new^` itself is not good enough to deliver to community.
2. Making `this` appear "mutable" (disagreements)
  - This is a bizarre change to the mental model of JavaScript 
  - Appeared that all classes would _require_ assignment to `this`
3. Removal of unqualified super 
4. In OO, it's considered an anti-pattern to use explicit conditions over method dispatch
5. Hijacking of the call path
  - It's reserved for subclasses
6. Have to do ALL of this to participate in subclassing  


AWB: how does #5 differ from current? It's the same.

DH: Any reason why it can't call the construct behavior?

AWB: Construct allocates

DH: Not in this proposal

AWB: Haven't addressed what happens in constructor?

DH: (goes back to slide 8)

need more here...
AWB: Are you proposing that all initialization and allocation happen in @@create?

DH: no.

MM: When D inherits from B and you `new Derived()` that construct trap of Derived gets called. When Derived constructor calls `super()` does it invoke Base's call trap or construct trap?

DH: Need a way to distinguish new and call, but super or direct?

YK/BE: have to write another `if` if you want to define subclassable classes

DD: overriding the allocator is not part of creating a robust super class

YK: argues otherwise.

DD: enabling overriding the allocator of the subclass hasn't been a goal

BZ: in user code, needed in DOM

...continue.

DH: (explaning future friendly-ness of distinguished initialization and allocation)

Slide 16, 17

AWB: This is speculation of new forms?

YK: For illustration only. Speculate that you will have to build a constructor that defines all aspects of allocation and initialization, forced to figure out how the condition (or whatever userland pattern is)
- If we say the constructor is also the allocator, then we're boxed in and will have to deal with that.

DH: These speculated forms only illustrate goals.
- End up having to bless some protocol that distinguishes allocation and initialization.
- (wrap up, summarizing)



MM: Options?

1. Implement new-hat
2. Implement alternative @@create
3. Slip schedule?

3 => NO.


BZ: Want to see how these prevent uninitialized instances

AWB: (restating goals)

1. Self hosting
2. Subclassable built-ins and exotic object 
3. 


DH: Can prevent uninitialized instances from being observed with either proposal



RW: For exotic, built-ins and DOM, @@create produces the fully baked instance and constructor is just a no-op. For user code, that's uncommon.
...

BZ: I am trying to understand how you can guarantee initialization without exposing half-baked objects

DH: The answer is that you move the *strict invariant* initialization into `@@create`. To avoid repetition, you use trusted functions that are allowed access to partially initialized objects and encapsulation, and you only pass the `this` value from `@@create` to those trusted functions.

    
DH: 
    

MM: Base class, derived class. The Derived clas is a client of the base class, and it's the responsibility of the Base class. It's often the case of the base class locking down property and that's OK.

BZ: Want to see some class that uses "magic". 
- How does ColorPointType know how to 

BZ: Does ColorPointType get to see an uninitialized PointType instance?

RW: No, because it overrode the one on Point

BZ: Wait so where does the initialization of ColorPointType and so forth take place?

DH: That's how struct types are defined.

RW: What about the examples we worked through last night. 

YK: I think what's getting lost is that the normal way for people to use this is to ignore @@create.

BZ: The normal way is fine, I'm not worried about that.

YK: To be clear, what you're saying is fine, but I think it's important for everyone else in the room to know that the normal mode of operation has not changed.

AW: You're right but they also won't pass new^?

YK: But they will have created a non-subclassable object

ARB: I have a question. In the other design, there was a discussion about implicit calls to the superconstructor and whether we should pass the arguments. Both Marc and I made the strong argument that this was not a good idea. As far as I can see, it is doing the exact same thing, but even in a weirder sense, because you're passing the arguments through to the allocator even.

DH: That's true. Allocator signatures have to track constructor signatures. This means that if you are passing extra arguments that may be ignored --

?: Or used in a completely different way --

DH: right -- it means that you have to override @@create if you want there to be a difference

ARB: isn't that very common? in all cases where derived constructor changes what is passed to the base cosntructor

YK: not my experience at all. I think the common case is that you don't really change the arguments that much or just append arguments -- whcih happens to work ok thanks to JS semantics.

DD: I think what will happen is that people will say constructor is an anti-pattern, use @@create so that you only need to do one.

ARB: I've not used ES6 classes naturally but I find "transform" is the common case by far in other languages

DD: isn't that why you subclass -- to modify constructor?

<lots of people talking over each other>

MM: you have to have each level of @@create mirror the transform that occurs inside the constructor

YK: right

MM: do you have a pattern for that which is less onerous than the new^ pattern?

YK: I think that this will happen sometime but is less bad than the `if (new^)` pattern

AWB: No

YK: I guess we have to discuss whether we agree that people should design for 

RW interjects: Here is the whiteboard example:
    
```
Function.prototype[@@create] = function() { return O.c(this.prototype); };

class A { }

class B extends A {
    [@@create]() {
    }
    constructor() {
    }
}

class G extends B {
    constructor() {
        ...
    }
}

var g = new G();
// because G has no @@create, we execute the @@create from B
// it all works out ok
```

RW: Follow: 

```js
g -> new G() -> (no G[@@create]) -> B[@@create]() // done.
```

If B had no @@create

```js
g -> new G() -> (no G[@@create]) -> (now B[@@create]) -> (no A[@@create]) -> default //  done
```

DH: What Rick is trying to say is that for non-exotic objects, none of this matters

DH: Another way of putting this is that exotic objects are a bifurcation inherent to the space we're in, it's part of JS, and it becomes important to know whether there may be exotic objects involved

RW: Point I'm trying to make is that in the *most common case*, userland classes, we don't have to do anything different

JM: I can't just stay quiet anymore. I feel like we're overstating how common it is to subclass these kinds of "exotics"/built-ins

DH: I want to double down on this. Your prediction is wrong Domenic because I don't see people deciding that they should use the syntactically onerous pattern instead of just using constructor.

DD: I'm saying that based on Yehuda's argument, where he says to be robust you must be prepared for exotic objects, this design is superior, it doesn't seem like this design helps. Instead you just move things to @@create.

YK: That seems ok to me. To people who want to use exotic object subtyping, we can either say "here are a bunch of tools you can use to create a protocool", or we can tell them "here is something that works fine, but you have to use @@create"

DD: In that case, why constructor at all?

AWB: I'd like to explain why I walked away from this design. Fundamentally BZ's issue is about data-based invariants that must be established as part of the constructor, there will be a tendency to push those things into @@create. Besides being ugly, @@create has other downsides. Here's the real issue -- establishing these invariants, what does it mean? initialized private state. Let's think about the future. That method, the @@create method is a method on the constructor itself. That means to initialize the private state of the instacnce you have a function or method that is not attached to that instance that has ability to reach inside and get private state. So over here in the @@create method, however we might define it in the future, in the @@create method you can't say "this.@foo".

(people talk over each other)

MM: Not a capability leak -- if the @@create method is in the same class, it's fine.

YK: I agree but I think that's something we have to figure out generally for private state.

AWB: I'm saying that the model of putting private state into @@create, a foreign method and not the method of the instance, seems wrong.

DH: Here's the thing. @@create is not given an object to produce.

MM: I am confused about something Rick made. If you create a class G, just writing a constructor that calls super constructor, this is a broken class, because it didn't provide a parallel @@create that provided the same transform.

JM: In case where this is not extending an exotic class, it's ok. In the case of something native, like Date, it becomes important. My overall point is that I think it far less common to subclass Date than to subclass userland/non-native classes.

MM: But it's non-compositional.

DD: What's attractive about this = new super() is that it works regardless of whether it's a exotic class or not. Otherwise you have to know.

JM: I think you're right but we're taking what I perceive as an uncommon case and adding burden to the common case.

DD: People want to subclass Array a lot.

BE: Not common, not common.

JM: Let me avoid word "common" for time being. If we're talking about subclassing an ember view, that is not a builtin. It happens a lot.

DD interjects: But what if ember views want to upgrade to typed objects?

YK: It makes 'magic class' a part of the public API.

DH: Every class has two contracts. Contract to consumer and contract to subclasser. Magicness and exoticness is a thing subtypers have to care about regardless.

AWB: Dave, array is an exotic object. I can create a subclass of array today and not care whether it's an exotic object. So one step further. In ES6 as currently spec'd, I want to create a subclass of array, in the constructor I want to do something extra. I just want to log a message or something. I have to do something. In current ES6 design, I have to say super(), decide what arguments to pass, and do my extra code. But again I didn't have to think about whether Array was exotic not. It's only if I'm doing something that somehow interacts with the exoticness that I have to think about it.

BE: Domenic made a good point. I do think we have to argue about what's common though. Obviously there are piles of code building class hierarchy from plain objects -- but what if we want to go from an emberview to something using typed objects. Does one proposal require more changes than the other?

DD: No

NM: I disagree

...

YK: Answer with Ember subclassing proxies is that it is a semver incompatible change. I worked through this last night and I think it's ok.

DH: It's a drop-in replacement for *clients* but not subclassers.

YK: In the new proposal, it requires subtypers to type `this = new super()`, which they may not have had to do.

DD: I really like `this= new super()`, it's explicit, it makes more sense to me.

BE: But that's not the argument. 

YK: I don't think we can call it a semver compatible change.

NM: Extensibility is a factor.

ARB: Generally true, right?

NM: Yes.

MM: I'm confused -- when I bring up the transforms of the arguments, response I got is that subclassing of exotics is relatively rare, which I agree, form of the argument is that it's rare enough that we shouldn't make regular code have to pay a price for the common case. Let's stipulate this is true -- under that argument, than the `if (new^)` goes away?

BE: But you still need `this = new super`, and other changes.

YK: But if you remove `if(new^)` you're making decision on behalf of others?

MM: If we apply the same counterargument, it doesn't need the `if (new^)`, all it needs more is `super()` becomes `this = new super()`

YK: I think you misunderstood the argument. I'm not saying you always have to write `if (new^)`. I'm saying that it is SOMETIMES true that you have to do it.

MM: I want to split the argument. In world 1, we are saying we don't want to burden normal code with worrying about subclassing builtins. For code that does not subclass builtins, it shouldn't need to worry about possibility that it might get reused as a subclass of a builtin. We should not need to pay the price.

MM: In that world, let's compare new^ to the proposal on the board. In new^, in world 1, if this is normal code, super() becomes `this = new super()`

YK: Yes but what this was saying is that IF YOU AKI subclasing something exotic, you need to do idiomatic things to get plausible results.

MM: But only on the hypothesized small amount of code that needs to subclass builtins.

YK: In the revived @@create, the burden falls on people are subclassing objects, and want to do a transform on the constructor.

BZ: And people who don't know if they want to subclass an exotic.

BE: I think they are lost anyway.

AWB: People who want to subclass to add methods, extend or override some behavior. You're not actually *changing* the exotic type, hence the constructor signature you want is basically the same as the normal class. So you have to define a custom @@create simply to transform the arguments.

ARV: I think that subclassing builtins will happen relatively frequently but it is VERY rare to then change it later.

YK: For this reason, I think people will forget to use the proper pattern, and thus screw their subtypes.

AWB: There is another approach. What we've done with @@create is split things into two halves. The way to solve this problem, doesn't have to be done at the spec level, one way is that you simply split out the initialization logic into a distinct method. 

BE: I want to revisit. We are late in the game. I'm concerned we're hanging too much onto classes. I want to maybe push builtins into syntax or something else. Inventing all this stuff in the new^ proposal is a lot of new stuff, it's too late in schedule, ahead of implementation. DH's proposal hoists new object creation out of [[Construct]] which is also a change. Can we stick with ES6 and do what we want later?

DD: I see we have a few choices. Make implementors swallow @@create is designed, but implementors are very unhappy. 

BE: Can we do things in the spec that do not create language level lock in?

MM: If we just do what's in draft ES6 there are too many observables because @@create is called by [[Construct]]?

MM: Lock in is that @@create makes uninit objects observable?

AWB: Nothing says an exotic object can't override it's construct internal method to not call @@create

YK: I think the thing to keep in mind that we want HTML Element to be subclassabe...

AWB: ...they can just keep overriding.

MM: What does Date do presently?

AWB: It invokes @@create and returns an uninitialized slot and blows up if you try to use its methods

MM: That is an observable state that user code can come to count on so it precludes future design that breaks such user code

DD: I think moving @@create into dom might work if you want to avoid locking it down at the language level

AWB: DOM objects can define a new create internal method. Their method can call @@create passing all the arguments. 

BE: Marc's point about Date is interesting, though I believe Date can be done at user level. But since it throws, haven't we reserved right to say that we can change that in the future.

MM: I haven't had enough time to think this through. I really don't want to see us get locked in to what's in Draft ES6. What i'm trying to illustrate is that even to evaluate how bad lock in IS is something we can't do with confidence during this meeting. 

AWB: Biggest lock-in that I see is that we lock in `super()` in a constructor. That's the path.

MM: Here are the 4 choices I see. Draft ES6. New^. Dave's proposal. Slip the schedule.

AWB: Or my @@create original design. Draft ES6 plus pass arguments to @@create.

MM: That has same issue with transform of cosntructor arguments, but it lacks having to rethink [[Construct]] path.

DD: I'd like to advocate for new^. I'd like to go through the objections and state why I don't those objections are good and I want to know the temperature of the room.

- `new^` as syntax: weird but rarely used
- `this = new super(...)` I think is great, it makes clear how JS works and how it's different from other languages
- hijacking call path -- I don't see a significant difference between writing two methods and writing an if statement
  - YK: There is no way to differentiate super call by subclass from client
  - DD: I don't see that as a big problem
  - YK: We're recasting it as "call constructor without allocation"
- requiring protocol creation between super/subclass types
- super.draw() -- 

BE: We should take a break. But we should not slip schedule. We can talk about the rest, but I want to emphasize that *we should be risk averse* and avoid locking ourselves into a bad path.

DH: the `this =` and the `new^` has a lot of machinery -- static analysis, if you say it is one thing and another. My point is not that it's absolutely wrong but it's a lot of risk.

BE: I think we're out of time for 6.

MM: I believe that if slipping is off the table, all the remaining choices are dangerous -- given that we have to make a decision, only one I would be willing is new^ or remove classes.

(general surprise)


BE: paths: 
    
1. Drop classes (generally no)
2. Stay the course with draft ES6
3. new^
4. Dave & Yehuda proposal 
5. DOM Overrides [[Construct]] to do its thing as necessary. Ugly. This is #2++
6. Remove @@create, built-ins do what ES5 did: Array subclass constructor was return override
- Cannot subclass built-ins
7. Pass args to @@create. This is #2++


MM: If doesn't find #2 acceptable, that includes #5, #7

NM: #2 should note that it exposes uninitialized state.

YK: Subclassing DOM, @@create returns dummy object, return new super

BT: least risk: punt on all this discussion and let people come up with subclassing protocols that meet needs

\#6 results in syntactic lock-in. Devs will write `super()` and then we can't do `this = new super()` later.

MM: If we do #6 does it preclude having a future proposal with TDZ, unfulfilled this

DD/AWB: It would work if we do the "Domenic variation" in the future, with a default `this = Object.create(new^.prototype)` if there is no `this =`.

RW: #6 is a failure, we've told developers for years now that classes meant subclassing built-ins and we're taking it away.

DH: Unfortunately, implementors brought issues at the last minute.

BE: So we're talking about #5 then
- #3 is too dangerous this late in the game

AWB: Agree.
- #2, 5, 7 are minimal spec impact
- #6 big spec impact
- Crazy to do anything but variations of #2


BE: Motion... w/o judging `new^`, #3 is too much and risks the slip anyway

RW: Seconded.

MM: By same rule, #4
- User visible, uninitialized instances are too problematic, remove #2 & #5

BE: #6 remains, the developers suffer

AWB: Too much work

BE: #6 is out

YK: It's not clear that #2 is definitively broken, recall. 

AWB: It's up to @@create to return a safe object

BE: BZ pointed out that there are places in the DOM where you want to alloc memory of a specific size. You don't want to alloc and re-alloc.

YK: There are already checks that exist.

BE: If you want to allocate the right size, you need the arguments.

AWB: All the types that are in ES6, that have size constraints are actually being dealt with in the spec.

BE: Mark also disliked #2 because you can call `B[@@create]()` and get back some blank object.

MM: A defensive class doesn't leak `this` during the construction process and a client can't get access and therefore no data dependent access

YK: Still have extra cost in addition checks

MM: Two brands per object

BE: Not going to work, will lose on performance

DD/YK/DH: (discussion of IDL)

EA: Most of the time DOM bindings don't have constructors

BE: What about the size constraints?

EA: Can work around it

AWB: The most common case is an oridinary object

MM: The zero brand and two brand cases...
- Constructor needs check the initialization brand

AWB: There is already logic in the spec that handles multiple stage initializations

ARB: Not convinced that #6 is off.
- Can we agree that #6 keeps all the other options open?

MM: I understand the workload issue, but what are the 

ARB: `new^` is easier than @@create, could come sooner

RW: Can you explain?

ARB:
    
- all allocation codepaths have to change and do "virtual" calls
- adding plenty of checks for unitialized objects
- @@create is mutable, so every allocation gets deoptimized as soon as someone changes some @@create.
- can't easily be inlined

YK: I think they have to change for new^ also

ARB: no, allocation code path is neither decoupled nor exposed nor mutable under that proposal.

DH: Alternative design idea: treat the allocation as a proxy trap, with special hooks in to allow you to override it, e.g. in class syntax.

MM: 8. @@create -> [[Create]], no Symbol.create.

AWB: Instead of @@create method, have create slot on function objects and construct method calls it if it's there.

https://gist.github.com/bterlson/95ab741efa0bbd57f19d 

MM/AWB: you could prevent it from being overriden in ES6

AWB: it's not a trap, it's private---perhaps private-inheritable---state of the function.

BE: 
8. Constructor [[create]] slot
- own _not_ inherited 
- no exposed to user code
- DEFER Reflect API called with args


ARB: Can mutate the the prototype after the fact, so NOT inherited


DH: would implementers say that any time you subclass Array you get a deopt?

```js
Array[[Create]] = function (...args) {
    return %ArrayCreate%(this.prototype, ...args);
};
```

MM: I'm finding this quite attractive. Let's go back to the risk issue. If this turns out to work, how can we at this meeting gain enough confidence in it?

DH: biggest issue is any syntax for a custom allocator

AWB/BE: we should defer

DH: but note that there is no way we could do this without syntax in the meantime.

(Discussion of why 7 sucks and this new 8 is not bad.)

Key point: [[Create]] is NOT exposed or expressed in user ES6 code (*for now*).

DD: what about the observable uninitialized object via subclasses?

BE: [[Create]] is called before subclass constructor ever happens so you cannot in fact see the unobservable thing.

DH: Oh i see; we don't even need a minimal reflective API.

AWB: Note that, if you wanted to just define a function that was useable as a constructor but inherited/copied its create behavior from someone else, you could just do `class MyFuncWithCopiedCreate extends OrigFuncWithCreate {}`

MM: Does anyone object to #8

DH: Making sure, #8 is similar to #4 and more similar to #7. The only diff between 4 vs 7 is in 7: construct calls @@create internally; but in 4: it's hoisted out into @@create func.

ARB: Do uninitiliazed objects become unobservable?

AWB: ...since these things are closely coupled, it's not observable where you do it

ARB: Could remove init checks then

AWB: Checks aren't observable

MM: Or turn them into assertions

BE: Want design by contract in the spec

DH: Because you have no way to define own create slot, can't deal with arg transfers (up the create chain)

AWB: You're doing subclassing because you want the allocation from the builtin. So the way its defined is subclass constructor will have, as its create slot, the value of the create slot of Array (copied down)
AWB: When you say `new SubArray()`, you'll get Array create

DH: Yes, but you can't transform the constructor args passed from SubArray to Array

YK: Note that this only matters for args that affect the allocations

AWB: For ex: @@create for arrays don't care what the size of the arrays is

ARB: Problem: Now design of constructor signature is tied by internals of super class

BE: Yes, for ES6 that's true

DH: This is an inherent part of JS. Distinction between exotic types/normal types. When subclassing exotic types, you must participate in the parent's protocol. You have to know more things in these case (constructor signatures, create sigs, etc)

DD: Dislike that...

BE: Can you get it later [post ES6]? Probably

: Can you do super.apply?

BE: Depends. 

: Do it in the TDZ

DH: Any new syntax is too high risk for ES6. #8 while most conservative, it introduces the transform problem without a solution

MM: Can someone clarify that we can get out of the scenario in the future

DH: As long as we have a way in the future of doing something like:
    
```js
class Stack extends Array {   
  new() { // overrides the create -- strawman syntax only!!     
    return [];   
  }      
  constructor() { ... } 
} 
```
    
DH: Gives a way to transform the args

MM: If transforming args up construct chain, need a parallel transformation up the 'new' chain?

DH: Yes

MM: The burden of doing the transformation twice is too awkward.

DH: No question there's a cost. Seems livable to me, but...

BE: What's alternative?

AWB: There's kind of a workaround: Proxy. Proxy overrides construct. Could filter args in construct method of a proxy.

DH: Imagine mixin that you extend from

MM: Satisfied it's possible

AWB: I'm satisfied it's *probably* possible -- not sure yet though

DD: Should talk about promises. Specifically about subclassing: I think if we moved everything into @@create, Promise methods would call this.@@create instead of this.constructor, then could have own custom subclass constructors

BT: No because .then() ...?? base class blocks all subclasses

BE: There are circumstances where you walk the subclass heirarchy to base class

[discussion about promise implications]

DD: I haven't thought about it enough to really say. I don't like the proxy thing, but...

YK: Could imagine a thing that works like a proxy, but isn't actually a proxy

BE: A mixin seems good

DD: Shame that we, by default, need this heirarchy.

MM: Let me try out a scenario that DD and I will find attractive: If we start with #8, then after ES6 want to get to new^, if syntactic occurrance of "new super" then we don't call our local create, and therefore there's no prob with args transform
MM: I think that just works

YK: All I would say is that #8 seems future proof to that

MM: Yes.

DD: That's good, I still like new^ and would be good option for ES7

AWB: Would be helpful if proponents of new^, as we update the spec, looked at the spec and made sure it works (for the future)

DD: In the world of #8, user code that wants to call super class just does super()?

AWB: Yes

MM: With that issue resolved, anyone object to declaring concensus on #8?

ARB: Should we sleep on it?

RW: Lets record it, then immediately decide on it in the morning first thing.

[lots of head nods and agreement mumbles]

BE: Gotta revisit trailing commas from yest. I don't think there are any grammar problems, right?
BE: I don't know, I don't care.

AWB: I guess they're ok, but they have a smell

DH: One clarification, is there already a create trap? Are we talking about adding one?

AWB: No. There's a construct only. Not going to add one

DH: I don't understand the use-a-proxy idea as a solution

AWB: Construct trap gets the args, it transforms

DH: Obviously sub-optimal, but at least expressable and we can work on it
DH: [repeats] Would be nice to have good syntax eventually, but good for now.


#### Conclusion/Resolution

- #8 
- https://gist.github.com/bterlson/1fe0b0dc0ef3e71ff6e3



## 5.1 Trailing Commas in Function Call Expressions and Declarations

(Jeff Morrison)

[trailing_comma_proposal.pdf](./trailing_comma_proposal.pdf)

JM: Review...

ARB: Supported for consistency

RW: If people dont want them: use JSHint. No objections otherwise

#### Conclusion/Resolution

- Stage 1 acceptance


## RegExp Globals

DD: RegExp globals reform recap.

MM: Can we test on deleted properties?
    
BE: What about a flag?

- Per instance
- Flag to be determined
- Specified in Annex B


#### Conclusion/Resolution

- Stage 0 acceptance
