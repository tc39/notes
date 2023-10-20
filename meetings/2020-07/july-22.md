# July 22, 2020 Meeting Notes

-----
Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Yulia Startsev       | YSV            | Mozilla            |
| Jack Works           | JWK            | Sujitech           |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Waldemar Horwat      | WH             | Google             |
| Marja Hölttä         | MHA            | Google             |
| Pieter Ouwerkerk     | POK            | Stripe/RunKit      |
| Chengzhong Wu        | CZW            | Alibaba            |
| Bradford C. Smith    | BSH            | Google             |
| Istvan Sebestyen     | IS             | Ecma               |
| Chip Morningstar     | CM             | Agoric             |
| Justin Ridgewell     | JRL            | Google             |
| John Hax             | JHX            |                    |
| SongYang Pu          | SYP            | Alibaba            |
| Leo Balter           | LEO            | Salesforce         |
| Daniel Ehrenberg     | DE             | Igalia             |
| Nicolò Ribaudo       | NRO            | Babel - Invited Expert |
| Hemanth HM           | HHM            | PayPal             |
| Ben Newman           | BN         | Meteor/Apollo      |
| Jordan Harband       | JHD            | Invited Expert     |
| Bradley Farias       | BFS            | GoDaddy            |
| Mattijs Hoitink      | MHK            | Apple              |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Shane F. Carr        | SFC            | Google             |
| Mary Marchini        | MAR            | Netflix            |
| Rob Palmer           | RPR            | Bloomberg          |

## Ergonomic brand checks for private fields for stage 3

(Jordan Harband, JHD)

* https://github.com/tc39/proposal-private-fields-in-in/issues/7

WH: I’m only “halfway” a reviewer for this one. I reviewed this proposal but couldn’t get a rendered version of pull request 1668 which this proposal depends on so I can’t check consistency of some of the grammar productions this uses. I asked for a rendered version of 1668 and was told that it wouldn’t be made available until other proposals get to stage 4. This makes it hard to review this proposal.

[JHD presents slides]

JHD: It would be great to get WH’s opinion on the record about whether this is appropriate for advancement.

DE: Apologies for the legibility of the class feature proposals—I’ll get that fixed up by next TC39 meeting. I was hoping it would get to Stage 4 first, but that didn’t happen yet. I’ve reviewed the spec text and JHD and I have discussed it, I didn’t sign up as a reviewer, but I’m happy with the way it’s organized. The set mechanics seem to land well with the current structure.

WH: I am comfortable with this going to Stage 3. I’d like to see the unified grammar for all the class proposals this depends on and am frustrated I couldn’t get a rendered one, but this is not the fault of this proposal. This proposal seems simple enough that I’m comfortable with its advancement.

KG: I’m also comfortable to sign off on this. I have editorial concerns with control flow here, relying on abrupt completions, which I’d like to see refactored. But the current text is sufficient for implementation.

JHX: What about the potential confusion with the current syntax and the concept models? If we will have first-class private proposal, I wish it could be advanced to a stable stage before this proposal would go to Stage 3. I think it has many relationships to other proposals and they will affect each other.

JHD: Certainly my proposal entirely rests on the class fields proposal, and it cannot advance beyond it. IF there will be changes in the class fields proposal, then this proposal would be impacted.
To the confusion point, and to your question in the queue which is about the private declaration proposal, the README explains that there are no conflicts. If #foo will be a first-class value instead of a syntax error, then the "in" operator will just work as it works with symbols and strings.

DE: I discussed with JHD the possible conflicts with other proposals, and I’m happy with the way the considerations this proposal has made. I don't see a risk of conflicts.

JHD: Given the support from DE and the question from Hax about interaction with private declarations, I want to ask if we have support for Stage 3. If the class fields proposal significantly changes, I would be happy to bring this back to Stage 2. Does anyone object to Stage 3?

JHX: I still don't think that my concern is solved. The confusion is about first-class private symbols: if there will be such thing, I think it should be advanced to Stage 1 or 2 before that this proposal moves to Stage 3.

JHD: Just to understand what you are saying: if that proposal advances, then you are comfortable with moving this to Stage 3 because they would play well together?

JHX: I don't have the confidence that the current syntax would work without it. The overloading of "in" is a little bit confusing because the lhs of in has always been a value. First-class private symbols will probably make it clear, but I don't know if they will be there. This is a blocking issue.

BT: We are overtime. Maybe you two can discuss this offline and then update the notes.

### Conclusion/Resolution

* Will be discussed offline

## Upsert (now renamed emplace) updates ~& for Stage 3~

Presenter: Bradley Farias (BFS)

BFS: (presents slides)

* [proposal](https://github.com/tc39/proposal-upsert)
* [slides](https://docs.google.com/presentation/d/16PtTpuvkTFycaaqkk5XGZRPLNwzUrzBuN9y7VSrGX9k/edit#slide=id.p)

WH: I find that the “emplace” name is very confusing, as well as the changes to turn this from using a couple parameters to an options bag. Both of those produce clashes: In C++ “emplace” is a lower-level functionality than “insert”, whereas this is higher-level functionality than you would get from insert or update.

BFS: I’d be open to another term.

WH: I just find the name “emplace” very confusing, coming from the C++ world, because it stands for a different concept.

BFS: I don't agree with that statement, but agree that it could be confusing.

WH: The other clash I see is that this proposal was changed to use an option bag, which seems overkill for something with only two parameters. Had we been using option bags for other methods like `slice`, where it’s useful to disambiguate between using the start-and-end or start-and-length, then this would be more consistent. But using an options bag in one method when similar methods do not use one seems like a clash.
For both of those reasons, I'm not in favor of this any more. I was earlier, but this is now too complicated and too confusing.

BFS: Can you explain what you meant by "clash on options bag"?

WH: The confusion is that you're now introducing a new style of invoking methods using options bags instead of parameters, so now you have to remember which things use options bags and which things use argument lists.

BFS: We have a blocking concern on using parameters.

WH: Yes, and this is a blocking concern on using options bags. It's overkill in this case.

BFS: Given any method in this language, we already need to know the type of it's parameters.

WH: If we were using options bags consistently, then things like .slice() should use options bags. Since it's not, we shouldn't use it there.

BFS: [interrupts]

WH: I don’t want to debate this here. We have a long queue; let’s let others speak.

MM: Generally with options bags, the choice to provide parameters with an options bag is driven by a certain expectation of supporting introduction of new options over time.
Code written for later versions that recognise new options would still work in older versions, where these options would just be ignored. I don't think that kind of evolution expectation is an issue with regard to this operation. I also want to draw a hard distinction between option bags and handles. Maybe proxy handlers should have been an option bag with eager sampling, but the key thing there is the `this` binding. The fact that it's always looked up on demand is (???) the handle object is an API. I think it's important to keep those psychologically very different from each other. So I agree with WH that the option bag in this case is overkill.

BFS: We have a comment in the repo about using what we call this param, let’s say a “handler”, as the "this" value in order to achieve a specific use case. We didn't initially put it in the spec text, and this is where we got the comment that people wanted it.

MM: If you have the `this` value, and you have much more static expectations evolving in the API over time, and if it's looked up in a normal method lookup method on each use, then it's a handler, not an options bag, and my previous comment doesn't apply. But an options bag would be overkill.

BFS: I think that this goes down to the need of writing it down in a "terminology" section somewhere. It's a terminology problem.

MM: Ok

TAB: I very much appreciate this feature. Just because updating when the values are already present is super useful, and annoying in expressions where you have long map names. But I don't like that you need to provide an insert. Sometimes I want to update myself without proving a `get`. Having to provide a dummy value for the insert doesn't seem an ergonomic thing to do. And that would tell the stitch type checker that the return type might be a string, and that's just as random and unwanted as assuming that `undefined` is part of the type signature. If I know personally that there is a value there, I can make my typechecker understand it. But I don't think we should be forcing everyone to put an insert handler just to satisfy type checkers.

BFS: In the readme, you'll see an example that doesn't have an insert() method in the handler. It's just called if the value is missing. If you are only trying to perform an update, .insert() will only be looked up lazily. You can omit it.

TAB: OK! That completely solves my concern. So it will throw if you have a missing value. That's great.

JRL: Can we just pass the options bag in the constructor? Many suggestions in the repo are about having a default value for missing elements in the map: if the key is not there, .get() will return the default value.

BFS: We did have this suggestion, but I have concerns about this: you can perform m.has() and get "false", but then m.get() would return something different from "undefined". There is code on the wild that relies on this contract, and adding the constructor parameter would change the contract when it's passed to other things.

JRL: OK.

BFS: It's not to say that other languages don't do that; it's just that we already have a contract with `.get()` that we have to satisfy.

TAB: Python has both of these. I use them both regularly, and they are not in conflict. I think we should still pursue default semantics via the constructor separately, but it should not fight with upsert. I want them both.

YSV: We are speaking about this feature in a specific situation. We don't have something like Python's getDefault, or setDefault, or DefaultDict. These are things missing in the language, but we are currently talking about introducing .emplace(). I think I would be more pliable to the idea of emplace (or a different name) if we had the others. With BFS we have been talking about examples in the wild about this type of code. I investigated the TS codebase or other places where the pattern of updating or inserting occurs, and I think that .getDefault() would better match these use cases. So, I feel that we should do getDefault(), and that getDefault() should take precedence over this proposal.

BFS: To be clear, .getDefault() is just not providing an .update() parameter to this.

YSV: I would find stretching .emplace() to do .getDefault() be very user-hostile.
You would be using this one thing to do those three things, whereas each of those things should be separate methods.

BFS: I am opposed to single responsibility, as documented previously.

YSV: We should have single responsibility for this.

BFS: Then we might be blocked.

JHD: Proxy-like handler pattern is bizarre and should not be propagated. A proxy around an object is often a stateful thing that it's trying to track things in an object, while in this case I don't understand that the argument would be for having a stateful handler. And similarly, by not using the handler pattern, we can do eager retrieval of the methods, which can allow for early validation.

BFS: We had a comment about why people wanted to use a stateful handler, and we have a comment about why people don't want to have eager lookups. So, I guess you consider not having the `this` value more important than those two? Is that correct?

JHD: Yes.

BFS: So if we move forward with this proposal, you want to require that `insert` exists?

JHD: No, if there is an object containing functions, I'd want "options bag" semantics and not "proxy handler" semantics. As far as whether it's present or not, that depends on the semantics of the methods. If `insert` is always needed, it should always throw if it's missing. If it's not always needed, it should be validated; for example, if you pass an array, it should throw. In every code path, the function that are passed in should be either "function" or "undefined", or they should throw an exception.

BFS: That's how it's specced.

YSV: The problem with the object was the cost of the object allocation. It isn't an objection, it’s an observation.

YSV: Proposal is very opinionated on how code should be written when this may be a matter of taste. For example, you can't insert an object that's then updated. You would have to do 2 calls. In the examples you provided me, they would have to insert a value that would then be updated. Additionally, the update() forces people to do everything inside the update function, but we've seen that things like `await` have been very popular in allowing people to do operations in line with the rest of their code.

BFS: In the FAQ we have some responses about that. You don't have to do 2 emplace calls. If you need to do it in both .insert() and .update(), you can just allocate the pattern eagerly.

YSV: That isn't always the pattern people want to follow in their code. It's an opinionated pattern of coding.

BFS: Update could call this.insert() if it needs the initial value, since the receiver is the handler.

YSV: I consider what we're doing here is, since we're not giving the other tools building blocks for this, we're tying peoples hands to code in a very specific way.

BFS: That's the intent of this proposal, to avoid the problems I'm describing.

YSV: I would say that those problems might be unique to the codebases you have worked on, and that they might not be shared globally.

BFS: That is understandable.

BFS: So we have a lot of conflicts about people wanting specific behaviors or not wanting the proposal, so I think we are going to consider this blocked for now. We can follow up on the repo. If you wanted a change, please open an issue.
We have to agree either to solve problems with different priorities, or just to abandon it.

### Conclusion/Resolution

Follow up on conflicts on the repo.

## Number.range for Stage 2

Presenter: Jack Works (JWK)

* [proposal](https://github.com/tc39/proposal-Number.range)
* [slides](https://docs.google.com/presentation/d/116FDDK2klJoEL8s2Q7UXiDApC681N-Q9SwpC0toAzTU/edit#slide=id.p)

JWK: (presents slides)

JHD: When we say "iterable", it's not really being used as a noun; it's an adjective. “An iterable” refers to the things that are participate in the iteratable protocol. A Map, Set, etc., are iterable; they have that protocol. For Number.range, the only way it could return an iterable is if it returns a new type of object and _then_ that object would be iterable. We have no precedent in the spec for returning a plain object just to have an iterable. It would be very strange to do that. For all the cases people have advocated for re-usability, stick `()=>` in front of it, and it becomes re-usable. It just seems really weird to me if this returns a plain object instead of adding a new kind of object.

JWK: If we make it a class, then is it okay for it to be iterable?

JHD: If we had a Range class with instances, it would make sense for Number.range to return that and then that object would be iterable. But I don't see the necessity to have a Range object.

MM: I use "iterable" as a noun. I find the idea of this operation to be counterintuitive and hazard-prone. An iterable seems to me to be exactly right, and I certainly agree English-grammar wise it’s an adjective, but in a programming language, it’s coherent. That said, the iterable in question here saying that the iterable is a range object is fine with me. It's still the case that the collection that the object is not mutated.

GCL: I think the issue is not returning an iterable to itself. The problem that I see is that we have a cohesive set of patterns that we have established in the standard library, and that we have tried to take advantage of the iterator helpers proposal to sort-of keep these patterns… it's about reusability, and that's the argument we had on whether it should be iterator helpers or iterable helpers. The question was whether it should be reusable or not.
So, like this slide shows, reusability should be sticking an arrow function in front of it. In terms of the pattern it creates here, you have a global constructor like NumberRange, or you have a constructor on Number.range that returns an iterator.

JWK: Yes; arrow functions solve the problem. But I think people might forget to do this.

GCL: We have a lot of evidence otherwise, from the iterator helpers proposal.

JWK: Can you share a link?

GCL: Yeah; I'll send it offline.

MPC: I'm in favor of `range(n) => range(0, n)`. There were several solutions proposed in the issue for this. I would be very strongly opposed to the single argument version implying "n to infinity". I would find it very confusing. I'm in favor of range(n) implying from 0 to n.

JWK: I didn't make the 0-to-n decision now. If everyone's okay with that, I'll make range(n) mean range(0,n).

MF: I strongly favor requiring both arguments. There are two very reasonable interpretations of the single argument. I see no reason why we should choose one over the other.

JWK: Is n-to-infinity more usable than 0-to-n?

MF: It's not based on the usefulness, my comment is based on what people might expect when reading it.

JWK: If people can't get a strong clue for this, maybe we require both arguments.

DE: I raised concerns about using an iterator in the issue tracker. I'm happy with the idea of omitting zero, but it doesn't seem essential.
Number.range as an API doesn't represent ranges in general. It would need to have .contains(), etc. This is just an API to get the iterator, and it seems ok that it returns an iterator. I think it's important that we move forward on this proposal, because it's an important part of the JavaScript ecosystem and it works well with other proposals like iterator helpers.

TAB: The many times I wrote range() for myself I just used a generator. These are the semantics that most people would expect, so I'm strongly in favor of just returning an iterator for that reason.

JWK: I see the view that only JavaScript experts will see this as a generator, because we implement it as a generator. But people new to JS may think that this might be re-usable. They don't think about how the range function should be made.

TAB: I think that range is one of the simplest possible generators you can write. So if you know what a generator is at all, you're probably already familiar with a range generator.

JHX: I strongly prefer iterable. JWK has also worked on a compat reasons document, which investigates many more programming languages. The table in the repo shows that only Rust is using iterator-like semantics, but Rust is very different from other languages because of the strong compiler that protects the programmer from not using the iterators incorrectly.
All the other languages in the list use the Iterable semantics: I don't see any strong reason why we should use something else for .range(). The motivation of range is so that you can do like in Python, for convenience. These experiences are signal that programmers will very likely expect it to be an Iterable, or they don't notice the difference between Iterable and Iterator, so in that case, Iterable is more secure for them. For the userlang, if we check for example lodash, it returns an array which is similar to what Python 2 did. In Python 2, range returned an array, and in Python 3, switched to an iterable.
Also ReactiveX/IxJS, which is mentioned in the iterator helpers repo as prior art, they use the iterable semantics. I think we can check more userland libraries to see what was meant by programmers, and what programmers want. Finally, I don't think the arrow function fixes the reuse problem, because the range has many arguments. If you want to reuse it, you need to create a function with all these arguments. It's likely that you need to add many arguments. So it's likely that they need to wrap a function with no arguments at all, or just to make an iterable object for it. I don't think arrow functions really solve the problem for reusing ranges.

BT: We are out of time.

SFC: Do we have consensus?

WH: No; we still have several items in the queue. There is a completely different issue no one has mentioned yet that I wanted to discuss.

### Conclusion/Resolution

* No consensus for Stage 2
* Needs more discussion that didn't fit the timebox.

## await operations for Stage 1

Presenter: Jack Works (JWK)

* [proposal](https://jack-works.github.io/proposal-await.ops/)
* [slides](https://docs.google.com/presentation/d/116FDDK2klJoEL8s2Q7UXiDApC681N-Q9SwpC0toAzTU/edit#slide=id.g89f56b0333_1_40)

SYG: I don't think new syntax is warranted here. What these new operators would do is let you avoid typing `Promise.` something. That doesn't seem like it justifies the extra syntax. If we were to add more complex or combinatorial behavior, it would justify something more sophisticated than just omitting `Promise.`.

JHD: In V8, await is different from calling .then() because the "await" syntax allows more optimizations and it's different with stack traces. It seems like we can make the DX much better here for folks that need to use promise combinators.

SYG: You said 2 things: the first is the stack trace; the other is the optimizations. The advantage of the optimizations is that it saves you the lookup of Promise. Maybe there's a little optimization advantage, but it doesn't seem compelling. For stack traces, the current combinators' stack traces are lacking and it won't be fixed by introducing new syntax. It seems to me that it's impossible to fix the stack traces, I could be persuaded, but I don't know that's the case.

JHD: I’m assuming that since stack traces are optimized for `await` but not for `.then`/`.catch`, that it is indeed impossible to fix the non-syntax cases.

YSV: +1 on SYG's position.

JHD: The original async/await proposal had `await*` for Promise.all, and i don't remember the exact reason for removing it but what I recall is that one of the objections was not being compatible with `Promise.race`, or possible future combinators (and we since added two). One of the advantages of this syntax to me is that it is cleanly forward-compatible if we were to add other combinators.

LEO: This is a very compelling proposal for me, and it deserves further investigations as Stage 1 requires. There are a lot of issues here; I don't like the current proposed syntax. I could think of some `await*` that would come from `Promise.all` that could fetch things better. There are a lot of things I would like to keep discussing about this, but we don't have enough time during these meetings, and I would love if we could set this to Stage 1 to discuss it more.

JKW: Yeah; we can discuss syntax later, of course.

DRR: I like the idea of this - it's cute. But we have to anticipate only unary operators. One thing we see on the TS side is that we have these unary operators that you prefix with some sort of syntax, and one of the questions that comes up often is "what if we had this other operator", but then it's different because it would accept two values.
You can just say "well, we won't create operators that take 2 args in the future". You would introduce some imbalance, but you really have to expect that these operators could come up in the future.

JKW: I added this because I think the matrix of the four combinators all have one argument, so I think it’s safe to do that.

DRR: You could make a reasonable argument like "even if in the future we'll have a binary operator, we don't have to (???)", and that's ok for me.

DE: I agree with others that this proposal improves ergonomics. It's hard to explain to beginners why you have to write `Promise.all` instead of awaiting each function as you call it, which serializes unnecessarily. This proposal might attract people to use more efficient code patterns.

DE: I'm wondering why the original values are used, rather than the current ones. The semantics proposed during this middle spec, where it uses Promise.all but uses internal Promise things. This means that it adds undeniables, but also is influenced by monkey-patching Promise.prototype.then, etc., so it doesn't seem like we gained much by making an undeniable.

DE: I support this proposal for Stage 1, because this kind of feature to await a sequence of promises is a request I have already seen frequently before.

JKW: I think SYG suggested to remove some subclassing in the language.

DE: Yeah; in the future, this could be observably equivalent to `await*`.

JHD: If we used `await*`, how do you do Promise.race semantics?

DE: I think the Promise.all semantics are just higher priority than the other three combinators, so I disagree with the previous objections for lack of generality. Really, I'd be OK either way on the various syntax forms. I don't have strong objections to the syntax proposed. I'm just not convinced by the arguments of one or the other proposal being unacceptable.

JHD: "original values" is how `await` already works, for `PromiseResolve` and `%PromisePrototypeThen%`

DE: Promise.all doesn't use the original values internally, it does various property accesses. That's not what you want if you need something reliable, e.g., top-level await does not use Promise.all for this reason.

BT: Any objections to Stage 1?

SYG: I would like, for Stage 2 and beyond, this ergonomics point of people accidentally doing serial await, an area where this proposal would concretely improve, I would like to understand that better before Stage 2. That seems to be an empirical claim, I would like to see some examples. Right now the motivation is just "it would be nice to be able to do it". I want to understand better the ergonomics improvement.

LEO: I suggest an incubator call for this.

BT: Stage 1?

[no objections]

### Conclusion/Resolution

* Approved for Stage 1
* Follow up in a possible incubator call

## Array.prototype.unique() proposal for Stage 1

Presenter: Jack Works (JWK)

* [proposal](https://github.com/TechQuery/array-unique-proposal)
* [slides](https://docs.google.com/presentation/d/116FDDK2klJoEL8s2Q7UXiDApC681N-Q9SwpC0toAzTU/edit#slide=id.g89f56b0333_1_150)

JWK: (presents slides)

WH: I looked at how it's specified, and I find the behavior confusing. Depending on how you call it, it sometimes canonicalizes -0 to 0 and sometimes not. I find that very confusing.

JWK: We can update it to a more consistent behavior

WH: I would very much like it. The current definition sometimes modifies the values instead of just uniquefying them.

LEO: It's not clear to me when we say that it's confusing. This is considering the whole set of options in this space, and that's fine for Stage 1. We would need to solve these questions before Stage 2, but it's not a problem we have now.

MF: In general, I'm in favor of adding something that accomplishes uniquing to the language. I wanted to point you toward a possible additional API, (https://es.discourse.group/t/array-prototype-uniqby/138). The one you've covered takes a function with one parameter, and the other option is that we have a function of two parameters that returns a boolean. We may want to consider that alternative or even both, as they each have their pros and cons.

JWK: Let's bring this to the issue tracker.

JRL: Please remove string/number/Symbol auto-function behavior. This is something that people liked when we added it to underscore/lodash, but we should add this call style to all methods at the same time, like map. Adding this only to unique is not a good idea.

JWK: I agree, I will remove this part or split it into another proposal.

KG: +1 to JRL, except that I don't think that this [referring to auto-function behaviour] should be added in general.

JHD: +1 also.

SFC: I have a meta-question about this subject: there are a number of proposals out there there are adding features, or syntax, that are already possible to accomplish with the existing constructs of the language. On one hand, we could do something like Ruby and add every function that might be needed. On the other hand, we can just add a basic set of utilities that people can compose. Where is the line between what fits into the language and what doesn't?

MF: This is something that people often need to implement.

KG: It doesn't always make sense to add operations that can be written based on the existing things (like .filterMap), but when the operation in question is a relatively primitive tool, like flatMap or unique, even if it's something you can implement in terms of existing operations it seems like something we should add.

SFC: I posted in the repository one line that solves the problem in ~20 characters.

KG: That doesn't make it trivial.

LEO: To answer the question from SFC, I don't see the problem with discussing new features that are composition or things we already have, especially when they are already common in other languages. I know that there is a ???, and that's why we discuss things here.

LEO: Potential web compat issue. e.g. https://mootools.net/more/docs/1.3.2.1/Types/Array.Extras#Array:unique. I anticipate that if we go with this feature, I strongly believe that we might find compat issues and we should think about an alternative name.

JWK: I did a quick check, Mootools are adding it the same way as flatten (enumerable) so we must choose another name.

BT: JWK is asking for Stage 1. Any objections?

[silence]

### Conclusion/Resolution

* Stage 1
* The name might not be web compatible

## Record and Tuple for Stage 2

(Robin Ricard (RRD) , Nicolò Ribaudo (NRO) and Rick Button (RBU) present)

* [proposal](https://github.com/tc39/proposal-record-tuple)
* [slides](https://button.dev/talks/record-and-tuple-tc39-july-2020.pdf)

SYG: Is Object.is checking for identity or simply conflating +/-0?
RRD: Not identity.

SYG: If there are two separate literals also Object.is, if they don't contain +/-0?
RRD: Yes

WH: Does `==` do exactly the same thing as `===` when applied to records and tuples?

RRD: Yes

WH: I like how you dealt with ±0. It’s very important to not silently alter values stored into records and tuples, and this proposal avoids that. The proposal diverges from existing practice by making a record containing `NaN` equal to itself. While different, I see the rationale for it and I don’t think it will cause significant problems.

WH: I see that element order is significant in the Record equality algorithm and you sort elements by their property names when creating the Record. As long as the property names are strings, you can always sort them, so that works. Do you have any plans for allowing record property names that are something other than strings, like symbols?

RRD: Good point. Two things. First, last meeting, it's not in the slides, but you can't use symbols as keys in records. Second thing is, the way records are created when we create those literals is that they're stored as a sorted list of keys. You can create them in any order, and in the spec, we sort the keys before creating the structure.

WH: OK, sounds good, thank you.

BFS: I would avoid comparing the record and tuple equality with maps, because maps normalize. You might want to note it somewhere.

RBU: Yeah; if you create a record with `-0` and then access the field, you get back `-0`; it's only equality that differs.

RRD: It is not exactly the same from what we expect it to be.

JWK: For the symbol prototype, it sounds like it's not possible to add it in the future? If you add a reference like the virtual DOM… ???

RBU: If we eventually decide to go with..that will prevent us from virtual DOM, the only thing that will be restricted is allowing them as keys themselves, it would still work.

KG: I am in favor of this, but it is not obvious to implement it in a performant way at all. I would like to hear it from implementors before advancing to stage 3.

RRD: We have started reaching out with the implementers.

YSV: We have some concerns and we have ideas before stage-3; We are in touch regarding the implementation difficulties but they have addressed the motivation concerns which we raised. At present we are satisfied, but the proposal will need to be proved in terms of implementability.

POK(?): I have been watching this proposal with little discomfort, if this can be implemented in our scope of small embedded devices, I am ok, or else I am concerned about what it justifies. I am huge proponent of immutability in JS, like deeply frozen object, supporting the lang for that is welcomed, but not everything that we bring here at the cost of that, I am not objecting to moving to stage-2 but we need more to answer before progressing.

DE: Possible developer expectation of sub linear comparison and structure sharing. I would be interested to learn more about the concerns.

YSV: I want to echo Moddable’s comment here. The implementation burden here is high, and this proposal should demonstrate its usefulness. Given the amount of work that this will take, this can be done in stage-2. I am sensitive to the need of the champions to have buy in from the committee to do this work.

JHD: Clarification on Jack’s topic, since keys are sorted, and there is no possible way to sort Symbols, does that mean Symbols could never be Record keys, even in a followon proposal?

RBN: Yeah; we would need a way to sort symbols in a side-channel.

JHD: So unless we solve that, the path is closed to symbols as record keys.

DE: I'm fine with this conclusion of not having symbols as record keys, but I'm not convinced about the sort order of symbols being a communication channel. I wouldn't be surprised if we found that it would be okay if we made a global increment counter to sort the symbols. I'm not convinced that it will always be a problem.

MM: I don’t feel I should do an example now, but there is a side channel, I will provide the example.

DE: You have provided the example, but the actual communication is missing. [We can discuss with offline as well]

MM: The example is communication. I agree this is a post-stage-2 concern.

DRR: Concerns with cognitive overhead of deciding between objects and records. I think as we've look at this, there is a little bit of potential decision fatigue if you have to decide if you're passing objects or records. Maybe that's not as much of a user concern. But if you are using a static type checker, then you need to be able to predict whether or not you're going to pass an object, record, or potentially both. Maybe from the type system perspective, that's not something where you'll have to find a good workaround. But it is something that might end up frustrating users quite a bit. I hope that we can find something there.

RBN: Your concern is valid, that Robin mentioned, but I am interested to know more about TypeScript. RRD said at the top of the presentation that records and tuples are intended to be parallel with objects and arrays in terms of prototypes, methods, etc. I would like more feedback from TypeScript about how this interacts with type systems.

RRD: I see a record as a subset of what an object could do (?). We can go over this at another moment.

DE: I think RRD and RBN are articulating an interesting hypothesis. We heard from FHS about doing research to investigate these hypotheses. I think that this is a mental model that jibes with people would be tested. I also think we need to investigate type systems. If some type system is interested.

DRR: If we aren’t shipping at stage-3. It is fine to wait to stage-3. We can also collaborate more with the proposal.

RRD: That's very good for us.

DRR: We would entertain a pull request, for example, and then discuss as we have implementation. Either way would work.

SYG: I'd like to say that we will review; V8 is neutral on the implementability of it. We need to do more research here. V8 will research and comment on the implementability before stage 3. I think getting implementer sign-off is important before going to Stage 3.

DRR: Yes, thank you, we will work with you.

LEO: Shu, for clarification, so you mean you're reviewing during stage-2, right?

SYG: During Stage 2 before advangement to Stage 3.

LEO: Thanks!

MM: As someone who advocated for different equality semantics, I'm happy with this proposal.

WH: I am also sensitive to equality concerns and I am very happy with this too. Please don't change it, which might reopen a Pandora's Box.

RBU: It would be during implementation phase feedback.

WH: Yes, I don’t know if we’ll run into implementation concerns. We will cross that bridge if we run into problems, but I’m hoping we won’t need to cross any further bridges.

RBU: Yes, we too.

### Conclusion/Resolution

* Approved for Stage 2!
* Reviewers: BN, SYG, ??

## Symbols as WeakMap keys for stage 2

Presenter: Daniel Ehrenberg (DE)

* [proposal](https://github.com/tc39/proposal-symbols-as-weakmap-keys)
* [slides](https://docs.google.com/presentation/d/1AofgrikRJp4vTc_tqlchDk4DU9p4eqZdyxnlrFEYsvc/edit#slide=id.p)

GCL: I like this proposal regardless of records and tuples, and want to see it more forward. But, I don't think this proposal solves the records and tuples use case. (1), when I want to store an object inside a record, that you have to set up a weak map with symbols. (2), it does not compose well when you have multiple records from different places. Basically, records and tuples, even with this proposal, doesn't seem feature-complete to me. I would hope that from my perspective that boxing gives challenges, but I would be interested to hear if that's a must-have thing or a nice-to-have thing. In terms of providing features to most of JavaScript, boxing seems to be a win. Maybe SES has to deal with another weird thing.

DE: One to the realm and one to the object that is pointing, about sharing things across, I have an idea, it is kina vague, if someone exposes an npm and everyone who uses and doesn’t care about isolation, it should be simple, but we need to investigate in practice.

GCL: I can say that I don't think the npm solution is good, because not all JS environments feed from npm. Second, I know there's been issues in the past about widely used modules having different versions, which creates its own set of problems.

DE: That’s a good point.

DE: I think a lot of these use cases will come up within a framework or library, and I think a framework or library can create its own map of symbols and objects.

GCL: I agree that the vast majority will be in a single code unit and the shared use case is also a thing and we should design for it.

DE: Yeah, I see that concern.

GCL: I'm curious about… can someone who works directly on SES answer whether or not the delete is a nice to have or a necessity?

MM: It is a necessity to keep hidden primordial state out of primordial prototypes and their methods. There is some hidden primordial state that we have found coping strategies for, like Date.now and Math.random, but these are on constructors and their methods (Date.now) or simple global namespace objects (Math). Within a realm, these can be per-compartment, but they must share realm-wide prototypes that must remain state-free. The primordial prototypes and their methods remain completely free of hidden state.

MM: Note that TC53 is standarding on SES as the base JavaScript for embedded devices. Moddable is building a specialized SES machine, compatible with TC53, for use in embedded devices. Google, Agoric, Salesforce, Node, and MetaMask all found that there is a tremendous amount of normal JavaScript code that runs compatibly under SES. If it becomes the case that common programming patterns no longer work in SES, then it will no longer be true that enormous quantities of normal JavaScript code are compatible with SES.

GCL: With the Mapping through Realm, if a Box was unable to unbox when called when the current realm is not the Realm the Box was created in.

MM: Moddable is a single-realm JS implementation (for memory overhead reasons). When the prototypes are frozen, you can isolate subgraphs within a realm very easily, with little memory overhead. But only if the objects they necessarily share are state-free.

BFS: Looking back at the composite keys proposal, there is a workflow you can use to store the data on objects rather than on the realm. Interested parties should follow up offline w/ me.

YSV: We're now accepting symbols through Symbol.for(). I know MM was a strong proponent for not having permanent entries in the weakmap. I would like to hear what the argument that convinced him on this is, beyond wanting to avoid having long-lived keys in a WeakMap.

MM: I don't like registered symbols being weakmap keys, initially against that. The usability of trying to distinguish what can be done w/ a symbol regarding being registered or not causes bad surprises. There is a fundamental cross-Realm memory leak problem here, with a primitive (the registered symbol) that is immune from GC while the weakmap exists. Tradeoff is eating the cost of the memory leak.

YSV: My understanding here is that this proposal is partly to address the issue in Record & Tuple about accessing objects from immutable structures. This would make that possible, but one thing that came out of our review of R&T is whether it needs to be a primitive, or whether we can some up with another way to address this. If R&T is not a primitive, we would be able to solve this issue in another way. I'm wondering if we can think about it more, given the concerns you just raised.

DE: Why this has to do with being a primitive: === is reliable, this isn't something we should overload with an object operation. Objects are compared by identity, everything is compared to only be equal to exactly what it is. If it is the same record and tuple contents it is the same identity. This is just like strings, JS programmers are familiar with it. In addition to equality, the distinction of deep immutability is important. Side-effects and defensive copying come up a lot in JavaScript. With deep immutability being important we need a quick way to check if something is deeply immutable, one way to tag this is the primitive/object split. Building on the concept of things like Strings being a comparable immutable value.

So I think it's possible that there are other options, and we should keep looking at other options in Stage 2, but this is the best one that we have that brings those qualities together.

YSV: My concern is that we will agree to this, find another solution to the problem space, and still push this forward without revisiting the change in motivation. What worries me is that many people have said that this would be useful outside of R&T. The current way that WeakMaps work is important, and I’m not convinced we should give that up lightly, since it’s different from using long-lived global objects. It’s much easier to make a mistake with a Symbol that you assume is going to be garbage collected especially given that there is no way for users to distinguish between registered and unregistered symbols. So I'm a bit uneasy for those two reasons. There's a lot of pull to look at use cases outside of R&T, which means we lose our focus and that would be problematic.

DE: I don’t think registered symbols are important for R&T. Registered symbols are supported in Records to maintain consistent support for symbols.

YSV: In general, I would like to spend more time with this.

JHD: This feels useful and motivated to me whether or not it is used by R&T. We have objects and primitives and we also have things that have identity. I have use cases for this. I want to put objects and symbols in a WeakMap and not just objects. I would like this regardless of if it is useful for Records and Tuples.

DE: It would be great to document those use cases better. We should make a list on the repo and integrate them into the explainer. I would appreciate if you could provide those examples.

JHD: Okay; I'll try to follow up.

WH: A tiny point of order: Link to this spec on the agenda is broken. It produces an error message.

DE: Yes. We’ve been having problems with diffs. [Gives alternate instructions on how to get to the spec.]

YSV: For me, what's important is _what_ we intend to get to Stage 2. Because stage 2 signifies we have a problem that we want to solve, it’s important to know what problem we’re solving here. Need more investigation into problems this would solve. But I don't feel super comfortable saying that this should go forward on its own merit yet. That's why I want to clarify what the motivation is exactly.

DE: Other delegates have said we shouldn’t let this advance past R&T. I'm in no rush for this proposal; I'm fine making it dependent on R&T. I believe the R&T proposal stands on its own merit but I am happy to keep these proposals in lock-step.

YSV: What I meant was, I am uncomfortable with this in relation to R&T, but I wasn't going to block on this as I understand the motivation and what would be agreed to in stage 2. However the current discussion around this proposal is that the technical solution has its own use cases and stands on its own merits, but I don't understand what those use cases are yet or what the motivation is as this wasn’t in the proposal. This means that the problem space we are agreeing to in stage 2 is different. I consider it an important invariant that Symbols are never in WeakMaps, one that we shouldn’t give up lightly, without specific motivation.

DE: I would be happy to keep this at stage 1 and learn what we can do to fix these concerns.

RGN: Records and Tuples definitely can move independently of symbols-in-weakmaps.

DE: Can you elaborate on why?

BT: No, because we are out of time.=

### Conclusion/Resolution

* No Stage 2 advancement
* Work to make the motivation more clear
* Follow up more on use cases / motivation on the proposal repository

## JSON.parse source text access for Stage 2

* [proposal](https://tc39.es/proposal-json-parse-with-source/)
* [slides](https://docs.google.com/presentation/d/1MGJhUvrWl4dE4otjUm8jXDrhaZLh9g7dnasnfK-VyZg/edit?usp=sharing)

RG: presents slides MM: I don't understand the motivation for the serialization slide, the enhanced replacer. If there is a reason to allow it to generate JSON. What is the motivation on the replacer side?

RG: Motivation hovers around BigInt , the JSON I received I would like to generate values of the same fidelity.

MM: I can see this applies to the leaves, I don't see why this would apply to Objects and Arrays. If it only applies to the leaves we could validate it easily.

RG: Ok with restricting to keys, but not a fundamental concern. We need an extension here to make it work because if I return a String from the replacer it will generate a string value in the JSON.

MM: I understand that. The motivation only applies to leaves. Trying to protect the validity of the string when we have a high speed JSON parser.

RG: Not clear on the concern. I'm comfortable limiting it to leaves, but I need to distinguish if the output of the replacer is raw.

MM: [rawTag] doesn't need to be a special symbol?

RG: right now we can return an object with arbitrary properties (by the existing mechanics), but we need a way to signal that the output is raw.

MM: Ok, now I understand the motivation of the rawTag symbol (an out-of-band mechanism to indicate the result is raw). Still going to take the result and validate it will a JSON parser, correct?

RG: Yes

MF: I'm unconvinced we need to be able to generate any valid JSON. If you do want to pursue this you should split the deserialization and the serialization. I am all for the deserialization improvements, but not for serialization.

YSV: Feels risky that we’re using JSON.parse to do non-JSON-y things.

RG: response to that, JSON has always been defined to mean something but not the particular limits of any particular language. For better/worse numbers in json are of arbitrary precision

CM: JSON is a language independent format, even though it has roots in JS. The current JSON API is a particular mapping between JSON and the JS data types that existed when the JSON API was defined; it doesn’t give us a good way to exploit the full expressive capability inherent in the JSON data format itself. It has bugged me that BigInt is not reconcilable with the current JSON API; ever since BigInts were added to the language I've been thinking about this problem. I believe the approach being taken in this proposal is the right one: the key is not to reconsider the JSON data format definition, since that is fixed, but to look at the process of serializing and deserializing. However, I'm not necessarily happy that this is the right API to do that. In particular, the mechanism it presents for identifying the context being used for interpreting data based upon where one is in some more complex data structure feels like something potentially awkward and error prone. I would like to talk with you further on strategies for doing this, as I’ve been noodling on this problem for some time.

RG: I would very much appreciate it.

SYG: JSON.parse is pretty performance sensitive. There is an argument that the most sensitive cases will not take a reviver. It would be good to verify that. It would be good to get benchmark/metrics on people that are using both JSON.parse and a reviver

RG: I am glad you brought that up. The explicit question was brought up and answered that as soon as you bring a reviver into the mix, you are already in the slow path. But any further data on that obviously wouldn’t hurt.

RG: The part that matters the most to me is the deserialization, so that part specifically is what I'm after. I'd like to get a sense of what other people feel about keeping serialization and deserialization in 1 proposal. Community feedback seems to be to keep them coupled, but there is no inherent reason why they have to be.

MM: Now that I understand what you were showing I'm in favor of keeping them together. I don't like the serialization API as was presented.

RG: I specifically am not married to the API. Stage 2 is a commitment to solving this problem space somehow. This feels like a stage 2 concern.

MM: I support stage 2

MF: I'm pretty uncomfortable saying we are solving a valid problem with the serialization proposal. If you want to keep them together we need to make a stronger argument for serialization.

RG: could we do that in stage 2

MF: I don't think that's appropriate for a stage 2 concern.

WH: Just like MM, I would very much prefer to keep the proposals together, since they address how we encode and decode JSON values of greater precision than IEEE double supports. You need both to be able to communicate such values.

JRL: I'm confused what serialization solves for this proposal. For stage 3, we need much better examples of what serialization is actually trying to do.

RG: In that example, we’re trying to preserve the precision of a BigInt being serialized. Without this facility, you would either see a 1 followed by a bunch of zeros, or a string with quotes inside it.

MF: This could be represented in other ways than a number in JSON. You can use a 2-layer approach where you describe the type of everything you're encoding using a wrapper.

RG: It sounds like you are assuming control over how the output of JSON.stringify is consumed. This is not always the case: scientific, 3rd party APIs, etc. The serializer often does not have control over the JSON schema.

MF: I understand.

JRL: not blocking stage 2 but need better examples before stage 3

### Conclusion/Resolution

Stage 2!

Reviewers for stage 3: MF, WH

## Arbitrary Module Namespace Identifiers

Presenter: Bradley Farias (BFS)

* [proposal](https://github.com/bmeck/proposal-arbitrary-module-namespace-identifiers)
* No slides, just showing spec text changes

MM: Curious about why you sometimes mention Unicode and sometimes mention UTF-8.

BFS: The spec text doesn't mention UTF-8. I mentioned it to ensure that it's compatible with WASM, which exports UTF-8 names.

RGN: The concept within Unicode that we’re looking for is “well-formed Unicode.” That covers all forms of Unicode (UTF-16, UTF-8, etc.). Also, I agree this proposal can manifest as a PR.

### Conclusion/Resolution

* This can be presented as a "Needs consensus" PR
* Will need to be approved in a future committee meeting

## Host hooks for Job callbacks (consensus-seeking continuation from day 1)

* [PR](https://github.com/tc39/ecma262/pull/2086)
* [slides](https://docs.google.com/presentation/d/19S97ZqhibJABqzeP5ZU6Flk6TVgWzXuvJWFbNTTfpWs/edit?usp=sharing)

SYG: Addressed concerns with concerned parties. The two new host hooks that I am proposing will be browser only. The prose now says that hosts that are not browser must follow the default behavior. I also added a note that any host cannot override behavior that ECMA262 specifies. The concern here was from mark that this would allow dynamic scoping. With that, I would like to ask consensus again for adding these two host hooks for adding callbacks that are passed by apis asynchronously. That is promises and finalization registry. Any objections?

### Conclusion/Resolution

* Host hooks for job callbacks has Consensus

## Function toString for builtins (consensus-seeking continuation from day 1)

Presenter: Gus Caplan (GCL)

* [PR](https://github.com/tc39/ecma262/pull/1948)

GCL: What was discussed last time was to explicitly allow the `get` and `set` in the syntax. That has been changed. This solves the issue that was raised. I am once again asking for consensus on this change.

WH: What would the output be?

GCL: the keyword `function` followed by the keyword `get` or `set`, followed by the usual output.

RGN: Having it specified like this results in the observable difference between user code and native code?

GCL: That is also my opinion but that wasn’t the goal here. The goal here is to align with implementations.

RGN: Does this do that?

GCL: yes

WH: I'm fine with this as an initial step. I'd like to see the syntax unified between user code and native code, but I understand that this would require research into web compatibility. Longer term I would prefer to get rid of the "function" keyword if we can and change `function get name …` to `get name …`.

JHD: I agree with WH. We should land this now, but it is important to do the follow up.

GCL: Does anybody object?

Robert: No objections, you actually have consensus this time.

GCL: Whoo!

[no objections]

### Conclusion/Resolution

* Consensus to merge the PR
