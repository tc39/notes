# March 24, 2015 Meeting Notes
-----

Brian Terlson (BT), Allen Wirfs-Brock (AWB), John Neumann (JN), Jeff Morrison (JM), Sebastian Markbåge (SM), Yehuda Katz (YK), Dave Herman (DH), Alan Schmitt (AS), Lee Byron (LB), Domenic Denicola (DD), Kevin Smith (KS), Andreas Rossberg (ARB), Brendan Eich (BE), Erik Arvidsson (EA), Adam Klein (AK), Jordan Harband (JHD), Mark S. Miller (MM), István Sebestyén (IS), Jafar Husain (JH), Rick Waldron (RW)

-----

## 4 ECMA-262 6th Edition
(AWB)

AWB: (presents slides)

AWB: release candidates are intended to be complete subject to bugs so everyone could review them. RC1 was the review draft for the RF opt-out period.

AWB: bug count fluctuates toward zero and back up; minor technical or editorial issues. Waldemar found some small issues in the grammar (unnecessary parametrization, Unicode regexp grammar, ...). Bugs that come up between now and June will be fixed as practical, or deferred to ES7 if not.

AWB: any last minute issues!?

BE: what about the things that are backward-incompatible?

AWB: e.g. Brian has some issues around the function name property

BT: i.e., the assignment of names when assigning a function to a var declaration

AWB: EA has an issue around [[DefineOwnProperty]] on module namespace objects...

BE: built-in prototypes?

AWB: in RC1 it became pretty clear that at least making Array.prototype not-an-array would break at least some peoples' code. So for RC1 I reverted Array.prototype back to an Array exotic object. There was similar discussion about RegExp.prototype. For RC1 I did an experiment with some hacks that I thought would maybe give us a middle path. But that got reverted back.

BE: not sure there's any profit in trying to change it in the spec.

BT: that's what IE has: RegExp.prototype is an ordinary object; the only prototypes that are not ordinary objects are Function.prototype and Array.prototype.

BE: what about `Object.prototype.toString` on those prototypes? [Actually I was asking what RegExp.prototype.toString() returns. /be]

BT: it gives `[object Object]`. We haven't come across any code yet that breaks because of these changes, and to put that in perspective we have 3 or 4 sites that break due to the function name thing.

## Module Namespace Exotic Objects

DH: I think there was a minor issue with the module namespace objects...

EA: my concern here is that we're introducing a new exotic object.

DH: that has been my intention for fully six years. (For some value of six.)

DD: I think the wiki said "`Object.create(null)` with getters"...

DH: yeah you're right, the exoticness is not the higher-order bit.

AWB: let me run through the things you can do with a MNS exotic object. A get; no set; a get with a symbol; enumerate; has-own (name or symbol); and that's pretty much it. Everything else fails (false return or throw). So e.g. Object.getOwnPropertyDescriptor will throw on one of these.

EA: a solution is to simply return a data property descriptor. Then code that uses Object.getOwnPropertyDescriptor, e.g. for mixins, will work.

AWB: the reason I made it throw is that the MOP lets you define things that are neither data properties nor accessors, and this is one of those cases, and the MOP lets you throw in those cases, so we could.

DH: it is self-evidently possible to write the spec as it's written now, but the question is whether we should.

MM: I would find it more useful to not throw.

AWB: even though it's not really writable?

YK: it _is_ writable, but it's not writable by you.

AWB: I worry that we're establishing a precedent that we're going to make [[GetOwnProperty]] behave that way.

DH: there's a lot of code out there that has expectations about objects you give it, and if you build an object that breaks those expectations, then that particular class of object becomes rounded up and treated as toxic and people say to never use these objects, or alternately it starts to poison the well of these common operations, which is even worse. For example we did a similar thing with enumerate. Module objects ought to behave as close to normal objects as possible. It's a much narrower diversion to have an object which says it's writable but you can't write to it, than one that throws when you try to get a descriptor for its properties. On top of that, there is precedent for property writes quietly failing...

MM: you could write something with an accessor that has that behavior, but it's not normal... non-writable properties normally throw in strict, fail silently in sloppy.

AWB: being a data property means that if you get the descriptor you get the value of it. That means in [[GetOwnProperty]] I have to access the value, which could fail because of TDZ.

DH: this is the MOP. TDZ is part of the core semantics. How do we reflect TDZ in the MOP. We could throw, or we could have some special representation of TDZ state in the MOP (e.g. undefined). A throw seems better at this stage, in the case where you hit TDZ.

ARB: what happens when you do a [[Get]] in the TDZ?

DH: it throws

YK: why is it not just a getter

ARB/MM/AWB: then you have to reify the getter, and it's annoying to implement

#### Conclusion/Resolution

- Change module namespace exotic object [[GetOwnProperty]] to reflect as a writable data property.
- [[Set]] continues to throw in strict mode.

## Function Name Issue

BT: we found several sites that are broken by the new function.name algorithm. One site we found is using function objects as maps, and so doing e.g. `if (func[key]) { ... }`. Since ES6 defines new semantics for `func.name`, this breaks the site. We have enough information such that we're not going to ship this. We could perhaps only infer for assignments to `let` and `const`, not `var`.

AWB: we infer lots of places...

BT: we've only seen problems for assignments to `var`.

MM: so if we removed it from `var` everything would work?

BT: yes, but it seems a bit hasty to make that change without testing...

MM: at what point in the process can changes like this not go in.

JN/AWB: we're there now.

DD: it's not a big deal if we have a different function.name algorithm in ES7.

DH: no, really!? If we have something that pretty clearly needs to be fixed, we should be able to change right up until the GA votes.

AWB: the GA needs the time to review it...

DH: in a 1300-page spec, a small change like this is not going to change anyone's opinion about ES6.

AWB: it's a process thing. This is about a feature, and it's either in or not in.

DH: the feature is in. I'm saying this is at the level of bugfix.

ARB: in Chrome every function has a name property....

BT: the problem is that it switches from falsy to truthy when it becomes a non-empty string.

BE: why are we changing anonymous function names?

MM: we're not changing anonymous function names, we're changing which functions are anonymous :)

ARB: which is one of these webpages?

BT: cheezburger.com, the comments won't load.

BE: stop ship bug, then!

ARB: cheeseburger.com?

AK: no, cheezburger.com.

DH: we should at least have a GitHub errata page where we can enumerate these things...

DD: once the great tooling revolution arrives, there will be a live GitHub version of the spec that implementers consult.

DH: yeah, but until the Great Leap Forward arrives, we need something in place.

YK: let's put errata in tc39/ecma262.

MM: having this be an errata-managed issue seems fine to me.

BE: what about a new property, instead of .name?

AWB: on Twitter somebody suggested it should be a symbol

MM: we're standardizing the de-facto precedent. The reasonable backoff suggested by the data is to not infer the data from the var assignment.

DD: two options. Make the change now with no var; or, leave the spec as is, let Microsoft accumulate more data to see if no-var-assignment is sufficient; if so then use errata to officially recommend those.

MM: let the ES6 spec and Microsoft's implementation diverge, and use that to figure out exactly what the right fix is.

EA: we should either do full inferencing or revert to ES5 semantics.

MM: what about concise methods?

EA: that's fine; they're new syntax

AWB: removing name inference would be a big deal.

BT: there are going to be more issues like this; errata management seems like the way to go.

AWB: indeed, the nature of the process is that we don't get this level of information until we're at this point in the process, with implementations.

BT: honestly, this issue is small compared to sloppy mode const semantics, which we've found issues with as well.

(general consternation)

MM: did we have a resolution for the class bindings issue raised on list?

AWB: probably leave as status quo...

DD: what about making them const?

AWB: that was the other possibility...

YK: there was a reason we didn't do that... I remember feeling strongly at the time.

DH: global?

YK: in the global space, people want to replace things that are global.

MM: I retreat...

AWB: OK, so, I don't think we should keep fishing on "is there anything else we should change"?

#### Conclusion/Resolution (for function.name issue)

- Leave the spec as-is
- Let Microsoft experiment with more web-compatible versions of the algorithm, e.g. not-for-`var`
- Have a public place to track and post errata regarding this issue, until the Great Tooling Revolution of 2015 arrives


## Let's Ship This Thing

JN: we need two votes; we vote to refer the spec to ourselves, then we vote to approve the spec.

(general confusion, slowly turning to incredulity and then acceptance)

AWB: (presents slide titled "A Motion")

DH: (joking) I filed a patent for the Window object. It is a very unique design.

MM: (joking) if you get it granted, _don't license it to anybody_.

AWB: we intend to approve the final draft here, but conditional upon completion of the RF opt-out period.

JN: (conducts a vote)

the TC39 RFTG has approved referring ES2015 to the TC39 TC (unanimous)

the TC39 TC has approved referring ES2015 to the Ecma GA (unanimous: Google, Microsoft, Mozilla, jQuery, Facebook, Inria)

JN: one last vote! should we recommend to the GA that they refer ES2015 to the GA for fast-track approval. During ES5, the Japanese national body of the ISO recommended a large number of changes which we incorporated as ES5.1. If we refer this document to ISO for fast-track, then we can assume Japan and others will make comments. Those comments will be approved.

AWB: this is the complication of this fast-track stuff. "Fast" means "about a year." If we start this down the fast-track, it will interfere with ES7; about the time we exit the fast-track process for ES6, we will also have ES7.

MM: we do need to figure out how to get this working, but the entire thing is worth it if for no other reason than the high-quality contributions of that one reviewer at the ISO. I don't know how else to engage him.

(discussion of new text vs. old text, will reviewers look at the deltas)

DD: there may be sections that are untouched, but they are very few.

AWB: there may be sentences that are untouched...

IS: it would be very unkind not to refer this to them. My suggestion would be that we should go ahead for the fast-track but it should be a conditional go-ahead on myself and John sitting down with ISO management and discussing a way to find a solution to integrate the different cycles. It would be ugly if there was a large delta between ISO's version (~ES5) and ours.

JN: it exacerbates the system right now. We have a four-year window between ES5 and ES6 and the plan is to have one-year windows. ISO may choose to wait until ES8 or ES9 to fast-track, bypassing ES7. They want to pick up the massive changes between ES5 and ES6. So I think it's important to do it this time and less important to do it next time.

DD: couldn't we just do this because it's good but not spend much time worrying about it?

AWB: unfortunately it's not that simple. The manpower to publish documents is not free; it would take away resources from feature work etc.

MM: Allen what's your opinion?

AWB: I think we need to do ISO. There is significance involved in that.

MM: so going forward with our new process do we do ISO every year?

AWB: I don't know, I only did it once and it took a year.

JN: it could take a longer this time, fast-track has changed.

AWB: should we do a partition standard?

JN: we don't want to go down that road...

AWB: maybe it would help make this maintainable over time?

JN: I'm not opposed, but it needs to be thought out...

AWB: maybe a partition standard could be moved through the ISO process independently...

IS: there should be minimal market confusion because most people download the Ecma version, not the ISO version...

DD: most people download the version on Jason Orendorff's personal web page...

IS: download counts support many more Ecma downloads than ISO downloads ("much much much much smaller")

AWB: that is probably why it is hard to get people in this room excited about ISO...

JN: so I think what we want to do is fast-track this year, but future fast-tracks would be questionable.

JN: so, let's vote (per company): do we approve submission to ISO for fast-track.

approve: Google, Microsoft, Mozilla, jQuery, Facebook, Inria, Netflix

opposed: (none)

abstain: jQuery

IS: ECMA-402 can be an ECMA-only standard according to Patrick. ECMA-only standards can be used as normative standards, so it's up to us whether we want to fast-track. Doesn't seem critical. ECMA-404 is the more interesting one.

AWB: Rick isn't here - are we also going to approve 402 right now?

YK: Is 402 aligned with ES6?

AWB: I hope so, ES6 normatively references it.

YK: Will ECMA be upset if we normatively reference a non-normative spec?

AWB: Yes.

AWB: István, do we need a opt-out period for ECMA-402.

IS: Yes.

AWB: My understanding is that Rick has created the final draft and it has been available for a month for people to review.

IS: It would be nice if we could approve at this meeting, as far as I know this was the intention of the editor. So seems like we have a small problem.

AWB: Check with Rick. If people here take the time to look at the draft, by the end of the week we could vote to refer 402 to GA.

IS: We can't reference 402 edition 1 from ES6?

AWB: No.

#### Conclusion/Resolution

- Everyone to review or do what is necessary to vote to pass along 402 on Thursday.



## What to do with compact profile (ECMA-327) and E4X (ECMA-357)

AWB: These are still active standards. E4X still gets downloads. We can withdraw the standards.

BE: ActionScript 3 in Flash implements E4X.

IS: We had this on the agenda when we did ES5. At that time the point was that even if it was out of date, if implementers wanted to implement the old one they could. Adobe may have wanted this. 357 is often downloaded. But I don't know how serious this is.

AWB: E4X is not aligned with ES6 so it seems misleading for it to be out there.

IS: Some people may have used it with edition 3.

AWB: We had this conversation 5 years ago. Things have evolved. Maybe adobe still cares, or maybe they don't.

BE: It can be withdrawn without breaking other standards.

IS: We approved ECMA-404 before we had the RF agreement. Should we start an opt-out period for ECMA-404?


#### Conclusion/Resolution

- István to follow up with Adobe and the CC to see if they would object to withdrawing E4X


## ECMA-404 RF?

IS: We approved ECMA-404 before we had the RF agreement. Should we start an opt-out period for ECMA-404?

AWB: Can we retroactively make ECMA-404 Royalty Free?

IS: Yes

AWB: We should have an opt-out period then.

#### Conclusion/Resolution

- Start an opt-out period.

### Compact profile

DH: People who are interested in this can start doing work. Once there is actual demand work will happen. We shouldn't just make standards because someone might use it.

AWB: I think there is consensus to kill 327.

#### Conclusion/Resolution

- István to follow up with Adobe and the CC to see if they would object to withdrawing the compact profile.


## Fast track ECMA-404

IS: The actual standard document is not ready, maybe ready for this afternooon. Then we can publish it for fast track.

#### Conclusion/Resolution

- Revisit tomorrow.


## 6.1 ES6 Class Properties
(Jeff Morrison)

https://gist.github.com/jeffmo/054df782c05639da2adb

```js
class Counter extends ReactComponent {
  constructor(props) {
    super(props);
    state = {count: this.props.initialCount};
  }
}
Counter.propTypes = {initialCount: React.PropTypes.numer};
```

JM: React ends up with some boiler plate code because it wants to add an own instance property.


```js
class Counter extends ReactComponent {
  static propTypes = {initialCount: React.PropTypes.numer};
  state = {count: this.props.initialCount};
```

JM: Issues with storing instance values on the prototype. Reference types shared between instances.

JM: Transpose initializer into the constructor has issues with the scope.

JM: Wrap each initializer in its own closure from within the class-body environment.

JM: Store the closure as an 'initializer' value in a property descriptor on the prototype.

MM: Hold on. Adding another field in a property descriptor is very heavy handed and has to go through the whole proxy design.

YK: This is needed by other proposals. Not in the MOP though. Opposed to add new features that are not reflected.

AWB: Need to define when this happens. End of `super()`?

JM: Wants to move passed where the initializer is stored.

JM: Last step of construct. Immediately after calling super()

AWB: Inconsistent. In a non derived you cannot access the own instance field.

JM: That is by design. Sorry, it is the other way around. The initializer is executed in the base class before the constructor body is entered.

AWB: It is important to create properties up front (with an unitialized state or undefined).

YK: It is important to put these on the prototype because it allows reflection.

AWB: By putting these on the prototype they are visible to the application. If these have privileges then those privileges will leak.

DH: Not convinced that this is important. The important part is that we need to store the initializer behavior somewhere.

MM: Is it configurable?

DH: Not fundamental. JS assignment creates the configurable writable enumerable.

DH: With decorators one can create non writable etc.

MM: I would think that non configurable would be good so that the shape is guaranteed.

DH: For backwards compat we should stick with the old behavior.

AWB: This is about creating the instance shape. What new thing is this getting into. It provides, prior to construction, information about the shape.

DH: When we provide new syntax it is tempting to alter the semantics instead of following the patterns used today.

AWB: It is possible that the shape is all about private state and this is all about classic prototype oop.

MM: Using a descriptor is very heavy handed.

YK: I want it to be pervasive so a descriptor is good.

MM: If you put it in the descriptor.

FM: You can use any object as a prototype.

YK: And if a class constructor uses that as a prototype then you can get own instance properties.

AWB: What are the implications if every descriptor needs to have this new property?

AWB: Are you assuming that the current design with property descriptor is a good model to extend for reflection mechanism.

MM: The concern I have is that there is a property with the same name on the prototype but its purpose is not the same.

MM: What you want is something whose value is the initializer function.

DH: What you want is some association with the name and the initializer function

MM: What you want is that your initializer function returns a descriptor. Then the decorator can operate on that descriptor.

DH: Some way to associate the initializer. You can use a symbol.

DD: The decorators already act differently. prototype or on the constructor.

YK: Wants to operator on more than the value. Same way for methods as for inst props.

DH: API like method decorators.

```js
sidetable.myinstprop = {value: func () {}, configurable: ..., ...};
```

YK: It is important to distinguish these from value properties. For example there migh be a use for creating own instance methods. Therefore using initializer instead of value is important.

AWB: When I create lots of objects I don't want to have to pay for all these internal MOP.

YK: The reified methods only come into play if you use reflection and decorators.

AWB: What if someone modifies these descriptors.

EA: It is important that the descriptor of these own instance properties is immutable, or at that you cannot change these afterwards because then the constructor function has to change its behavior after the fact.


#### Conclusion/Resolution

- Stage 0 acceptance
- Do not use descriptors for initializer state.


## 6.2 Decorators

```js
class {
    @readonly name() { }
}

function readonly(prototype, name, desc) {    
     desc.writable = false;     
     return desc; 
}  
Object.defineProperty(Person.prototype, 'name', 
  readonly(Person.prototype, 'name', {
    enumerable: false,
    configurable: true,    
    writable: true,     
    value: <closure>   
})); 
```

MM: When defineProperty runs, does Person.prototype have an undecorated name property?  

YK: No. The thing that you pass to the decorator looks like a descriptor, but is just an object. 

AWB: We need to think about what the built in ones should be. 

YK: Things that update descriptors seem like good candidates. 

http://bit.ly/ember-js-classes  

Examples of things that Ember might do with decorators. 

YK:  Shows example of more complex decorator usage:  

```js 
class Person {   
    firstName = "...";   
    lastName = "...";   
    @concat('firstName', 'lastName', ' ') fullName;   
    @concat('lastName', 'firstName', ', ') formalName; } 
```  

MM:  Can create a read-only getter from a declared property  

AWB:  Do you have a more plausible use case for more complex decorators  

YK:  (Shows ember gist. Shows @service which does dependency injection.)  

AWB:  Why would I use a decorator instead of a property initializer?  

YK:  More complex  

JM:  Decorators run once per class  

AWB:  This is an own property?  

YK:  The decorator would attach a more complex getter. @service does a lazy lookup. 

DD:  When you return a descriptor does it return an own property?  

YK:  ?  

MM:  Since this is integrated into TypeScript, how does TypeScript type the decorator method?  

YK:  Another way to ask question is I would prefer a more immutable API so that I know what the type is. Decorators themselves are typed, 
but they can mutate. 

MM:  It's a functional transformation of a descriptor. There's nothing being mutated on. 

ARB:  This is reified as a first class value. How can you track that without a full blown dependent type system?  

YK:  (Shows examples of decorators with no mutating effect). 

DH:  ARB is saying that the set of properties that end of being in the class ends up depending on what happens with these decorators. 
Mutation is a red herring. The issue is computably determining the class type. You're saying that there is an expressive subset of this 
system for which this is not a problem. 

ARB:  To know what to reject you'd have to know the returned value at type-check time. 

JM:  ARB is saying that the value is dependent on runtime. Enumerable true and enumerable false produce very different things. 

ARB:  Hard to forsee the implications, because annotations will want to spread. 

YK:  We should consider them on a case-by-case basis, but I am conservative. I'm not proposing targeting general declarations. 
Use case is that with class syntax we aren't able to do things we could with object literals. 

MM:  Are you proposing that you can decorate fields in an object literal?  

YK:  I don't consider it fundamental but there is a symmetry concern. 

ARB:  Still missing the big picture. Don't you ever want to decorate parameters and other things?  

YK:  These are things we might want to consider. 

ARB:  Take modules, it seems like people will want to do some metaprogramming by annotating imports. 

YK:  Proposal is addressing an expressive hole introduced by ES6. There is not a way  to do higher order things with methods. 

DH:  We're targeting the class syntax but we need to focus on the whole and not the part. The broad category is metaprogramming. What is our model?  
In Scheme, it's static. In Ruby, it's dynamic. We should do a zoom out and look at what metaprogramming might mean for the language. 

ARB:  (Objects to saying that JS implies dynamic metaprogramming.)  

DH:  (Mentions objection to staging.)  With a first class class system, a lot of meta- programming stuff you just do at runtime. If 
you've gone down the path of dynamic  metaprogramming, then it's probably best to keep going that way. ARB:  I think class expressions are a 
red herring. 

DH:  I just don't believe that we should do staging. 

BE: staging not seriously proposed but noted as possible accidental outcome of generalizing decorators across first- and second-class parts of ES6.
We want a principled approach that's not just for classes.

AWB:  Say you had a decorator that was enumerable or non-enumerable... 

YK:  Users will want to apply descriptor decorators to object literals as well.

YK: Don't see why we should restrict class features to static

DH: Javascript is fundamentally a dynamic language and we shouldn't try to make it static

ARB:  The dynamic stuff will remain, but we'll have these conflicts.

ARB:  Original question was what problem are we solving?

DH: Need a more general system for "twiddling" knobs.

ARB:  My question is how does this generalize?

DH: Current instinct is that first class things (classes, object literals) are easy to apply this to, but for second class things
we'll fall off a complexity cliff. Agree that we should look at the bigger picture.

ARB:  readonly is an example that we might want to have a more direct way.

YK:  If readonly were built-in and you imported it, then the engine could do smarter things.

DH: Suggests stage 1, but audit the space which may lead to changes.

#### Conclusion/Resolution

- Stage 1 acceptance
  - YK will audit the space.


## 6.3 ReverseIterable interface
(Lee Byron)

Proposal: https://github.com/leebyron/ecmascript-reverse-iterator

LB: [presents slides](https://github.com/leebyron/ecmascript-reverse-iterable/blob/master/TC39-March2015.pdf)

[lots of discussion about how to extend iterators/iterables]

#### Conclusion/Resolution

- More work to be done in breakouts to figure out path forward for iteration.
