# 27 October, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
|                      |                |                    |
| Ashley Claymore      | ACE            | Bloomberg          |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Michael Saboff       | MLS            | Apple              |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Istvan Sebestyen     | IS             | Ecma International |
| Nicolò Ribaudo       | NRO            | Invited Expert     |
| Jack Works           | JWK            | Sujitech           |
| Philip Chimento      | PFC            | Igalia S.L.        |
| Yulia Startsev       | YSV            | Mozilla            |
| Jordan Harband       | JHD            | Coinbase           |
| J. S. Choi           | JSC            | Indiana University |

## Destructuring Private Fields

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/jridgewell/proposal-destructuring-private)
- [slides](https://docs.google.com/presentation/d/1DyQtp2Zm7Wp8VgQ1NraHtX1b4yaPPVXy4Rfy8Bqp6XU/edit#slide=id.gf8bf874a91_0_68)

JRL: So I'm presenting destructuring private Ffelds. This is such a small update and I'm not certain you need to go through the staging process. It could be a needs consensus PR. It's very, very minimal. But if there's any objection, I can just take through the normal staging process. So, essentially, the use case here is that destructuring itself is well motivated and used throughout the ecosystem. It's super common that if you were to have multiple properties, that you're currently destructuring from a single object that you just destructure all the properties at the same time. It's a saves you from having to write the object that you're destructuring from every single time.

JRL: But this doesn't work for private Fields. If you have a private field, you have to continue to use a normal membership access, `this.#priv`, in order to access the private fields. Even if you have a bunch of them that you're accessing, at the same time. This simply allows you to specify that you are destructuring a private Fields into a local variable. We actually have a linter that found code exactly like this if it sees that you're destructuring or if it sees multiple accesses to the same object and storing those properties into variables, it suggests that you should instead rewrite this as a destructure. And when the linter went to run over the code base, we were trying to integrate private fields into the code base. It suggested you should write the private field access as part of the destructured properties, and this is illegal JavaScript code. So the linter actually broke us. We had disable, we had the special case private fields that they couldn't be accessed like this. It just feels like a weird edge case that should have been handled but probably got lost in the fact that the class fields proposal was such a large PR to add to the specification.

JRL: Syntax is you have to specify the local variable. We're not creating a local variable called `#priv`. That's still going to be legal. So in this case, it's just gonna throw a syntax error. You have to specify local. The entire spec text is very short, there's only one more part. You need to know that you don't really need to know about, it just checks whether or not the field is a valid private field to reference, but it's essentially just adding a brand-new grammar production, five lines to handle that grammar production and then the if statement needs to be updated to handle new case, and that's it.

JRL: This is such a small change that we may not need to go through the stage process. And that's something I would like to hear about. But if there's any objection, I can take it through, like I said.

WH: Seems reasonable.

MM: I like it. I don't understand what the justification would be for skipping the staging process, but I'm certainly happy to see this. to Stage 1.

JRL: For skipping the staging process, essentially it’s going to be me, coming back three different times in order to present the exact same thing. I'm not going to change anything about the spec unless there's an outright error, nothing about the syntax will change. It’s just going to be the same presentation.

MM: Yeah, but at some point you get reviewers at another point you have test 262 tests. As we've seen simple proposals, simple non-controversial proposals can get through the staging process quickly. Sometimes can get through multiple stage steps in a single meeting, but all of the steps of the staging process. I don't see a justification to skipping there. But let's just do it quickly,

JRL: okay.

WH: This seems good. At the very least I would want this to go to Stage 2. I see no reason for exploring the problem space here.

AKI: All right. MM to clarify things, I’d like to rephrase to make sure I understand. Typically with the proposal process, we are finding a problem that we are agreeing to explore. And certainly there are scenarios where someone shows up with a solution outlined before they reach Stage 1. The distinction you're making is that this proposal represents a change that isn't necessarily a problem searching for a solution, but more like a polish on something we've already shipped. I'm not advocating for needs consensus PR versus staging process, but I think, I think that's the distinction that is being brought up here.

JRL: I'm happy to take it to Stage 2 and then come back two more times. That seems fine with me.

YSV: Yeah, private fields are a bit tricky. We have a couple of open issues on them. So I do support this going through the staging process just so that we can review and clarify any issues that might come up with the fact that we're touching a pretty complex implementation piece. I don't think that there's going to be any issues, but I don't mind taking our time here.

JRL: Okay

JRL: So I think I can ask about Stage 1 and Stage 2, since the spec and problem space have already been fleshed out.

AKI: I believe that is accurate. I think you can ask for Stage 2 right now.

JRL: Yeah, so Stage 2?

MM: I'm happy with Stage 2.

YSV: Yeah, that works.

WH: Me too.

??: Need reviewers

JRL: if there are any new beginners or any newbies to the committee, this is a super small proposal. It might be a good one for someone who's not comfortable yet.

RRD: Yeah, I would be interested in reviewing this one. This is Robin Ricard from Bloomberg.

SH: And this is Sarah. I would also review it. I would get some help from Igalia people to help me on it, but I'd be glad to review.

### Conclusion/Resolution

- Stage 2
- reviewers:
  - KG
  - RRD
  - WH
  - SHO
  - JHD
  - SRV

## Explicit Resource Management Update

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-explicit-resource-management)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkfl3NHqg7QcpUoJcnQ?e=E2FsjF
)

RBN: I'm going to briefly go over some of where we are with the explicit Resource Management proposal. That's been a little bit of time since the last time I've had a chance to present this. And I'm going to take some time to review our, what the motivations for the proposal are and what the current status of the Proposal is. So the motivations for the resource management proposal were primarily based around a number of common, but diverse patterns within in the ecosystem around managing resources, that have either native handles or need some type of semantics around closing, or ending a resource. And those include things such as iterators, which already have a return, but it's another similar case, whatwg string readers, node js file handles.

RBN: So again, there's a number of different existing APIs that have all different approaches and they have a number of footguns that are commonly associated with them. It's too easy to have a resource that's not closed and might leak, especially if it accesses some type of native handle, if you're working with something like node bindings. There's also issues around ensuring that resources are disposed in the correct order or closed in the correct order, and the current system for managing these types of resources if you do have multiple is extremely complex and verbose. The example I have here shows some of the boilerplate might have to use if you want to make sure that these resources are closed properly.

RBN: So, where we are with the current proposal, is that we're introducing two symbols, the dispose symbol and the asyncDispose global symbol. These are both on the Symbol constructor. One of the changes that we've made after several meetings, several plenary discussions and a number of discussions on the GitHub for the proposal is dropping the try-using block statement in favor of using const declarations that represent more of the "resource acquisition is initialization" style for declarations for acquiring resources and managing disposal. So this what this means is that we're introducing a special constant declaration form using const, that captures an expression into a local variable. And at the end of the whatever current block scope will dispose that resource. And "using constant void =" syntax, and I'll explain what that is here in a little bit. But it's replacing the Syntax for ‘using value’. and there's more on that later slides. In addition. We're introducing "using await const" and a similar binding list form that are primarily for working with resources that have asynchronous operations that are needed to manage disposal. And finally we're looking to introduce two Global container objects for managing synchronous dispose and asynchronous dispose, and I'll have more on that a little bit later in the presentation.

RBN: So to go over the basic design of the Syntax using const, using await const. A `using const` collaboration has a variable binding and a expression that it can receive after the expression is evaluated, The Binding is essentially captured at that point, we check for a `@@dispose` method and hold onto it. And then at the end of the block, we evaluate that this dispose method to perform any necessary resource cleanup. For asynchronous code and an asynchronous dispose. We have a system that's somewhat similar to the 408 of approach where you can specify a resource that has an asynchronous disposed operation. That will be evaluated at the end of the block and awaited.

RBN: So, the semantics we've discussed this several times over the years, the declarations must be constant. Allowing declarations to be mutable or the binding to be mutable would be possibly confusing for users if they reassign the value, what would their expectation be around what gets disposed? It also matches some of the examples in prior art, specifically `using` declarations in C#. And binding patterns are not permitted. We've discussed this several times in plenary and determined that The Binding pattern having binding patterns within the block can be also confusing. Are you disposing the resource that you are destructuring? Or are you disposing the individual destructured items as a result? We determined to limit the scope of the proposal to not allow binding patterns at this point or possibly never. To be more specific or more explicit about what is actually being disposed. The lifetime of the variable declared is scoped to the block scope just as it is because it is a block scope declaration: a const. This helps with reducing excess block nesting. One of the things that I found with the try using statement was that while you could have multiple declarations within the statement, You could very easily need to introduce. More nesting after several other small steps within your code evaluates and then need to introduce yet. yet. Another try using. Whereas, the using const the RAII style allows you to declare variables and just the runtime will just collect the things that need to be disposed, to be evaluated at the end of the block. And this helps to reduce the excess block nesting. We would, we would have had with try-using. In addition, using await is valid only within a certain context. So only where top level of a module or within an async function or async method, it is similar to async iterables and 408 will first look for an async disposed if its presence and if not will fall back to a synchronous disposed and there's some prior art that I've listed here. C++ stack variables C# `using` declarations. And there are some other ones that we previously referenced such as Java's try with resources when we were discussing the try using statement.

RBN: One of the things that we recently changed was removing the using value statements and using something that's a little bit more consistent. In that It's still, it's still an initializer form. So it kind of falls in line with existing initializers and variable bindings you might have had another using const statements. You could have multiple that are evaluated in order and then disposed in reverse order. And using a void declaration or a void keyword for the binding which isn't currently a legal binding in a binding identifier, we can actually indicate that this is a binding that has no actual value. We're not actually introducing a binding into the environments. All we're doing is capturing the receiver and the disposed method and then evaluating at the end of the block. It's unfortunately somewhat more verbose than the using value statement. But what I found was that having both `using const` and `using value` is a little bit more confusing for users. It's quite a bit more spec text involved to actually Implement. And actually allowing this declaration, which can be inlined into an existing use. Another, `using const` statement allows us to significantly reduce spec text. And it's a little bit more consistent as far as formatting even, when formatting multiple declarations across multiple lines.

RBN: So, this provides a binding free syntax that allows you to create declarations that are useful for bindings are where you don't need the bindings. And you don't want to have to name something that you're not going to reference within the block many linters, and even type Checkers. Like typescript have settings to provide errors whenever you try to create Bindings that are unused. And this would avoid needing to put lint disabled line rules on your code, just for declarations you're not going to use purely because they're you don't actually need to reference the binding. And it also kind of falls along with what we did with catch blocks, where we didn't need the catch binding. Although we can't have a consistent, simple approach for eliding the binding for a const declaration currently. Just with the normal using await const void similar to by using await - It's only valid in an async context and it uses the same mechanism for dispose. One of the interesting use cases for this when coupled with a disposable API that I'll talk about a little is that you can, although not quite as terse, you can emulate Go's `defer` to have to defer operations that are evaluated at the end of a block. It is a little bit more verbose, but it does give you flexibility for adapting APIs that might not be using this new syntax or these semantics.

RBN: One of the things I wanted to point out again, was the change between using value and using const void. It simplified this syntax and specification language. Everything then goes through the runtime, semantics for evaluation of lexical declarations. So there are a lot. There are far fewer places. I need to touch in the spec to make this, to make this work. The void keyword is something that already has a semantic meaning of: you don't care about this and generally the value it produces. We were having some discussions yesterday about class extends null and possible using class extends void as a mechanism of saying, we don't really need or to have the prototype for this object. So void has a semantic meaning that falls in line with what we're trying to use here. void is also not a legal binding identifier, and as a result this allows us to extend that ordered support for disposed for bindingless resources if you have multiple steps where you need to allocate disposal and make sure that the disposal happens in the correct reverse order as the resources are freed.

RBN: So, I'll talk a little bit here about the dispose semantics. So using const declarations are block scoped, This means that the value doesn't escape the block and because they value doesn't escape the block, it gives us a very clear location as to where disposal happens in that it happens at the end of the block, when the value leaves the scope. One of the things that we've discussed several times before, as well, is that the expression can be null or undefined and no error is thrown. This is because writing branching logic where you only use constant declaration if an expression exists is problematic. You essentially have to have an if statement around the entire chunk of code. You might want to execute that might conditionally use an expression, by allowing null or undefined to pass through without error this allows you to have conditional operations where this doesn't wear. You don't need to more complex, branching, strategies. If the result is not null or undefined. We attempt to read the dispose member of the result, if that value doesn't exist or is not callable, we will throw a type error. So you must have a dispose if you are not null or undefined. And we record the result of the expression and the disposed essentially, we record the reference for this disposed method in the current lexical environment, in a stack, so that we can release these resources in reverse order.

RBN: One of the things that we've also been looking into and investigating is how to deal with exceptions and aggregating exceptions from dispose and how to handle suppressing exceptions from dispose so that we're showing the expression for the exception rather raised by a user, and I say suppressed, but we're not actually suppressing them and I'll go into a little bit more detail about what that means. So in this example, we have a using const declaration that takes an expression at (a) [on the slide]. when we evaluate this. We record the reference to the dispose method within the lexical environment somewhere within the user code an exception is thrown this could be a user throw, an exception or something else, but it's around within the body of the code before any dispose is evaluated, then as we exit the block, we still always evaluate the dispose methods that are provided. So, at (c) we will attempt to dispose the resources recorded at (a). So, all calls to dispose in this example are going to complete without error. And if all the dispose complete without error, then since the completion for this block is a throw completion and no errors occurred. We just propagate that throw so the error that's thrown is the error that the user threw.

RBN: Now, a different example shows cases where we've got an expression that will throw in the dispose. And in this case, the user code will complete without error. And as we exit the block, since we're exiting with a normal completion or some other completion that is not a throw completion. We will evaluate the disposed resources. And in this example, one of them will throw. Any exceptions thrown during dispose are stored as the errors of an aggregate exception and then thrown. So this allows you to investigate, the exception is thrown and know that if an aggregate exception is thrown there were errors thrown from disposed.

RBN: I'll talk a little bit more about what happens in the combination, which is when you have an expression that throws both in dispose and you also have an exception thrown from user code. In that case, the errors from disposed are Stored in an aggregate exception as the errors and now with error caused, which just reached stage4. congratulations. The error that was thrown by the user is also stored in. The aggregateError error as the cause. There is an issue on the issue tracker to discuss whether we should consider a separate Error for this. For now we're still continuing to move forward with using aggregate error. We welcome feedback on the issue tracker. If anyone has a specific objection or reason we should change this.

RBN: And I briefly want to touch on the async dispose semantics. So as with the synchronous dispose we will do the same set of steps for (a), we will evaluate the expression. And then, in this case, we will look for the async disposed method and if that doesn't exist we will look for a dispose method and we store that reference again in a stack, on the lives in the environment this time with a hint that indicates that it was an async, uses the async dispose. And as we exit the block will attempt to dispose the resource that we recorded. So we just will invoke that method. And since that method was async, it was marked as async. Then we will check whether it's undefined. This is just a simple check to avoid an unnecessary await for the dispose case, but it's one that if it seems inconsistent, we might change between now and the Stage 3 advancement. But in this case, we will await the result. this does create an implicit async interleave point at (b) that is possibly non-obvious at the beginning. We discussed this in the February 2020 meeting. At the time it was deemed acceptable given that the using await constant declaration is fairly obvious within the block, unless you have a very long block. We had also discussed things like having using have an expression form and specifically abandon the idea of mixed. Expression form of the using statements so that we don't bury the decorations so that we can be very clear about where these interleaving points are. There has been discussion about having an explicit Syntax for the end of a block that has an async interleavee point. We're not moving forward with that approach because of the discussion and consensus we had in the 2020 meeting, the figuri 2020 meeting. is perfectly feasible. For a linter to have a lint rule that could require, you have some type of comment at the end of the block that indicates this much, like some lintersdo for implicit fallthrough in a switch case, but we are still open discussion if there are cases that people believe there's enough concern that we might need to have explicit, have the interleave point be more explicit. But in general, I tend to prefer reducing the syntactic burden, rather than increasing it and if I can avoid having that, I personally would prefer and I'll take any advice to committee has on whether we want to continue in that direction or otherwise.

AKI: You're only 15 minutes in, but I just wanted to let you know that there are five items on the queue. So if at some point in the middle you choose to stop to take questions. They have begun to pile up.

[some discussion of when to take questions]

MAH: Since we're on this slide, I figured I'll keep it short, but I just want to point out that hidden interleaving points here compared to what was agreed in 2020. Back then it was using the previous syntax where the marker would have been at the beginning of the block. My concern with the interleaving point now is that you have to look in the middle of the block to see if there isn't a `using await`, which is not an interleaving point itself (it should be more like an `async`), but would be indicator that there is an interleaving point somewhere else, at the end of the block. I'm really concerned about this hidden interleaving.

RBN: When we had the discussion at the Feb 2020 meeting and we were discussing the in early points. This was also at the time that we were discussing the using const declaration form as opposed to the try using declaration form and the discussion at that time. I know it was talking with Mark Miller and others on the committee about the concerns about the hidden interleaving points and some of the possible changes to syntax. Because at this point we were considering dropping the try using approach specifically for the RAII style using const declarations. So this point did come up in reference to the using await const, not specifically the try using statement. My rationale at the time for this not being or being a kind of a sunk cost within the language is that if your concern is a is a very large block, a for-await block can just be large and the await happens at the end of the block, essentially happens in between the end of the block, and the beginning of the block again in the next iteration of the loop, because it both awaits the next iterate, a result, but also awaits the value. So, there are two hidden in early points that are in a for-await block and both of those are addressed there by the existence of the await keyword. We also have a couple other hidden interleave points in generators that we don't really talk about that much. The fact that return actually has implicit in a Isn't generator rather has an implicit await as well, and yield does as well, even though both of those are control flow statements, so they're a little bit less problematic, but there is no explicit statement case and it's actually been, in some cases, a foot gun for users because you can return a promise, but if you do that and try catch, you won't throw because you didn't actually await it. So the behavior can be surprising because it's not clear. The difference here might be that this is an implicit interleave point hat doesn't Effect control flow in that because you've declared it a declared it as a using the weight const, you've explicitly, declared that there is async operation that's going to happen at the end of the block for this and that can't be avoided unless you're in a generator and you've just stopped iterating that generator. So in these, in this case, if control flow returns, they can't accidentally forget to await and then forget to release resources, so It doesn't have that foot gun that return in a generator or in or any an async function. Might if you're not actually awaiting something, that might be a promise. So again my position is that the await keyword on the const is primarily what you need, and that if you are concerned within a specific project about clarity, then there's still room for linters to address this if necessary. An editor could theoretically provide additional context in a block that has a using await const statements. There are a number of inline hints and other features and various editors that provide capabilities for addressing this that don't necessarily require us to add syntax for syntax.

MAH: I think I just want to emphasize one thing. Currently all interleaving points are tied to either control flow statements or explicit await and with this proposal it would no longer be the case. And, in my opinion, comments are not code. We don't need to go much further right now. I just want to point out that this is novel and it does concern me.

RBN: There's also a reply in the queue from Mark Miller. But or to go into clarifying question from Yulia first, I think.

YSV: Yeah, this is a quick one just to be completely clear. We are already in an async context, either a module or an async function, right?

RBN: Yeah, and that's what I mentioned in an earlier. Slide it on using await constant. It is only a value valid within a async context. So top level of a module or an async function or method.

YSV: OK, so there's an implicit, async interleaving point of (b), which is we exit the function. Okay, Okay, I understand. Thank you.

MM: Yeah, so I wanted to clarify the history here on Ron's point and also in search of new information from recent conversations with MAH. So I had been attempting to ensure that all interleaving points in control flow are marked with either await or yield. And was almost and were almost successful a committee in ensuring that we caught many things that would have introduced hidden interleaving points and fixed them. And the one that Ron had raised that he also just mentioned that convinced me that I had missed one and therefore we were no longer in a state where we had an absolute invariant in the syntax was the return or the early exit from an async Loop, a for-await loop, specifically calling return the iterator and then you have this implicit await on the inner, on the return, to the promise from the call. The code to complete. And Ron is correct, that one's surprised me, but in talking this over with MAH, MAH raised a very important point, which is when you're reading a loop. You're very aware that you're in a looping context and you're very aware that when you, you know, at the end at the end of the body of the loop, you go back through the head. So there's this, this understanding that there is a back through the head nature of reading code in the loop and understanding what happens when you fall off the bottom. I think that means that the await in the for loop is much more - it's much easier to stay aware of the await in the for loop and not forget it and not miss it. The using await has two problems compared to that. One is that it's in the context of control flow, that might be nothing than simply an open, curly and closed, curly for which there's nothing else about it that draws your eye back up to what happened earlier or what happened on introduction. And the other thing was issue that Matthew raised, which is the earlier form of this proposal did have a syntactic marker at the beginning of the block, which is much easier to think to look for when you're when you're trying to understand the meaning of the end of a block. So for all of these reasons, I am no longer of the position that the case that we missed is an adequate precedent to justify the hidden interleaving point in the current state of this proposal.

RBN: one thing that I have considered and I am willing to consider again is introducing a Keyword syntax, that would have to be on the same line at the end of the block to indicate that there is an interleaving point. Something like `await using` for example, there are certain problems. We have to make sure there's no line terminator in between so that we don't end up parsing this as a trying to parse something as multiple statements like a block followed by a new line, using await new line or the new line or await new line using could be three different statements. So if it's something that's necessary we could consider adding it again. I have been trying to avoid it by erring on the side of reducing some syntax burden as opposed to being more explicit about those interleaving points. Again. I'm not seeking stage advancement today. This is primarily an update so we can again address this on the issue tracker. And if we determine that if the committee generally determines that we do need to have this, or if it's they're strong enough opinion within those in the committee that this needs to be present for it to consider before it can be advanced to Stage 3.

MM: Okay. Thank you..

AKI: With that we are at about 15 minutes of questions if you would like to continue.

RBN: I'll move ahead and we can come back and address some of the additional questions at the end of the slides. I also wanted to bring up something. YSV was mentioning in the Matrix that the difference between the terminology for implicit Resource Management versus explicit. This is something I think I mentioned several years ago when I first Proposed this. But generally within the at least the C# language specification most implicit managed resource management. Is those things in destructors where you can declare a variable and then it might have up code that it runs at any point when it's garbage collected Etc, where you don't have the caller doesn't have control over the lifetime or scope, whereas, whereas the semantics the syntax and semantics here, proposer to give the caller or the person that's consuming the resource explicit control over lifetime that is blocked-scoped. So it has well defined in clear semantics that allow the control from the caller's perspective, which basically declares explicit intent for this resource to be released at the end of the block as opposed to waiting at some point in the future, for the GC to collect it. And many examples in the C# language where disposed exists have both the explicit disposed that's used. That's the value to be of the using statement and an implicit disposed via a finalizer that could run or a Destructor that can run the at some point during garbage collection, to make sure that one way or another. it's released but the resources are released as you have written them.

RBN: So I'll continue on with my slides. Let's see. So one of the things I want to bring up, it's an open issue. So part of this, I recently, as part of this change I recently merged a PR that I'd written that completes the full specification text for the `using const` declaration, which is where I reached, the thought of switching to a using const void as opposed to using value in that significantly reduce the amount of spec change that was necessary and seem to work more consistent. But one thing that I did find was that there is a possible issue with a using constant Liberation. That's the top level of a script versus a module. Within a module, the scope of the module is essentially the module body itself. So at the end of a module, we know that we can release the resource, that the resource essentially can't escape. In the case of a script however, at the level of a script we would have to choose. At the end of the script evaluation. The bindings are still reachable. So from external code without a closure. so, it doesn't really match. The, the lifetime guarantees that we’re trying to make about how long a variable lives, it lives until the end of its block, even you close over it, that won't affect things. As soon as the end of the block has evaluated. That's when dispose happens. However, because valuation makes these bindings ritual because they are added to the global environment. They're still reachable outside of script evaluation. If this is the end of all script evaluation, resources are far too long live for the goals that we have for this proposal. There was a suggestion from JHD to consider at the end of script evaluation and not introducing the binding into the globals. But that doesn't really that require a lot of re-architecture of how script evaluation works, which I'm not sure I want to and how the proposal itself Works. To make sure that work, that would align. And I'm not sure that's something that I want to support. The current solution would be what I have in the proposal and specification for it is to ban using const at the top level of the script. So this is an open issue that I need to get some additional feedback on to determine what we want to do in the Long term before this advances to Stage 3 regarding this.

RBN: so, that kind of wraps the syntax side of things and I want to discuss the API designs for what we're looking to introduce as well as part of this proposal. The first one is a disposable container class. The purpose of the `Disposable` container class is to provide a very simple API for wrapping multiple disposable objects and for adapting existing code that does not use these semantics to be usable with a using const declaration. This is essentially a very simple object. It has a static from method that takes an iterable of disposables similar to array from It returns a disposable container, that ensures that the disposed method is called properly on each of these intervals when the block ends for throws error during from, if any of the Disposable aren't any values aren't disposable or null or and Define The Constructor version takes a callback that can be used to, it basically becomes the method, that's where the function is evaluated. When you call symbol dot disposed and it can be used to provide a building block for cleanup of resources that don't again match the dispose syntax from third-party libraries or npm Packages Etc and the result object has just a single dispose method. Similar to this pose method, which performs the necessary operations for disposal. The prior art for this, there's a couple different cases. A similar container with a different name exists in the .NET framework. The VS code editor uses a similar model for their disposal implementation. That's used both within the vs code code base, And any extensions that, anybody writes. So there's a fair amount of existing code that is very similar to this approach. An additional proposed API is the async Disposable and this is very similar to the Disposable method in the previous slide, but is designed around working with async disposables and an async iterator in this case and performs the same functions. but again with asynchronous code

RBN:I have a couple examples here. I brought this up so that as we have more discussion, I can kind of point out some ways that certain some of these things are used. One example that I've referenced that is also present on the explainer is for example, transactional consistency. If you're working with distributed transaction across multiple sources or a single SQL database, or any other source that you could theoretically have a transaction across multiple services. Perform an operation asynchronously in this case, and I'm using the await const with the expectation that whatever you're going to do will most likely rely on an service operation as the transaction is distributed amongst all of the peers and then committed. And then if the entire block of code succeeds, you'll hit the last statements of the block which allows you to mark the transaction is successful. And then when it's disposed, if it was successful, it will commit. And if it was never it, succeeded equals true, then it will roll back the transaction. Another example, that is a motivating reason why I'm trying to get this proposal up to date and ready to eventually reach Stage 3. Was our respects three have been discussions around shared data, the shared structs. little in that we will eventually need to have a way of managing synchronous access to shared data and there are different forms of could take. But one of the ways that I've been considering this is something similar to the locks and mutexes that are available in something like C++ using the RAII style. And in this case, we could take a lock. We don't necessarily need to use the variable for the lock. There's not much that we would use it for in this specific or simpler case. There might be more complex cases where you might want to access the lock to manually release States etcetera. But in case, we could use it for locking and allow shared State mutations, and then release the lock at the end of the block. And this very much is designed to match how the same operations could have would occur in something like C++. Another use case that is on the explainer is something like logging and tracing where you want to log the entry and exit of a method or for performance counters, their various other mechanisms that the disposed mechanism has been used in other languages as well. So this is a case of we might start an activity that logs the entry of the method and then as soon as you function, as soon as you exit, function would log the exit of the function. So this is another possible use case for this.

RBN: And then finally the status of the current proposal. I'm continuing as champion on this proposal. We currently have to Stage 2 reviewers, WH and YK. I haven't heard from YK in a while on this, so I'm not sure if I need to look for an additional or replacement reviewer. There is an explainer that explains the current state of the proposal and has examples possible. You should review for the proposal, Etc and full specification text is, which is under review. So I'll open this up to comments then at the end of the comments, I can help again, bring up that I'm looking for reviewers. So we can go back to the queue.

WH: I've done an extensive review of this. This has some interesting and surprising interactions with things like block refactoring, tail calls, and so on. It's probably best to illustrate some of these with some examples. So I will paste some comments into the chat here:

WH: The program behavior of these two differs at runtime. Can anybody guess how?

```js
{
 using const x = ...;
 using const y = ...;
 z();
}
```

vs.

```js
{
 using const x = ...;
 {
  using const y = ...;
  z();
 }
}
```

CM: The relative ordering of the invocation of `z()` vs. the disposal of `x`?

RBN: No, those should be semantically the same. Well, there is a difference in how aggregate errors will have.

WH: Yes. So trailing blocks are no longer transparent because if both `x` and `y` throw in the disposal methods, in the second case you'll get a nested aggregate error, while in the first case you'll get an aggregate error with two errors in it.

RBN: Yeah, so there is something that I've been discussing. on the issue tracker as well on this was in the issue related to the Stage 2 reviews. One of the things that we were discussing or that I was discussing, was the fact that in the .net framework. There is an aggregate exception that similar to what we have with aggregate error and it has a flattened method on it that can be used to take a jagged aggregate error. That might contain other aggregate errors and essentially flattens it down into a single aggregate error with one error. That's anything that's not an aggregate essentially, which is something we might want to consider as an additional proposal. The points that we're trying to make with the - the whole purpose of using aggregate error is so that you don't lose fidelity in the exceptions that you can access any exceptions that were thrown. In something like the dotnet framework the a using declaration a using statements, any exception that is thrown during disposed will shadow and completely suppress. The errors from user code. So there's no way to get back to that. In Java they have suppressed exceptions that you can access on the exception object itself. So you can get the exception and then look what it suppressed that doesn't necessarily work for because you can throw anything not just error. So it would be hard to a suppressed exception to a string. So we use aggregate errors. In this, but proposal. We don't make an explicit case for why a or the nesting or behavior of aggregate exceptions because Z could also throw an aggregate error there is no way that we can know. I do agree that there is a difference between the between the two statements of the two examples because the fact that one will nest and throw a nested aggregate are, it's something we might want to consider. As we do these resources resource cleanup is looking at an aggregate error in determining that if it's just an aggregate error, that only has an errors array that we might consider aggregating it. If it doesn't have a cause if it doesn't have a custom message, there's lots of things that we would have to consider if we wanted to make that so done.

WH: I don't want to spend too much time on this. I like differentiating the errors from disposers from errors from mainline code, but what I don't like is frustrating any attempts at refactoring by having the block structure change the meaning of a program in undesirable ways.

WH: Let's go to the next one, which discusses interesting interactions with the tail calls:

```js
switch (...) {
  case 1:
    return foo(1);
  case 2:
    using const x = ...;
    return foo(2);
  case 3:
    return foo(3);
} 
```

WH: Assuming that the switch is in a tail position, which foo calls are in the tail position? The answer is that `foo(1)` is in tail position, but `foo(2)` and `foo(3)` are not.

RBN, well, in the current proposal spec text, none of food, one, two or three are in tail position because there is a using constant in the switch-case block.

WH: When I read it, unless the spec changed very recently, it would only affect things afterwards, so `foo(1)` is in tail position, but `foo(2)` and `foo(3)` are not.

RBN: No, when we were discussing, it's at the Block Level. So it's not at the case level. And I put this specific rationale or is this essentially this example in that comment as a response as that? We're not supporting, we're bailing out of it, being a tail call. if there's using const anywhere in the case block. Just because the fact that switching between, or determining, whether I'm in case 2 or case 3, is not something that we can do syntactically. It's something requires run time evaluation occurs. So we if we could maybe know that your as well, call for one. But yeah, we could possibly do a tail call for one, but it can be confusing to have part of this be a tail call and part of it not be a tail call in. I think it's a better in general just state that because the using const in a case, block that none of this is a tail call if you want any these to be tail calls, then you need to put the using constant in a nested case, but nested Block in the switch case. And if you were

WH: I don't want to spend too much time on this. Let's go on to the next one.

RBN: Yeah, but this was a specific scenario that I covered with the proposed changes to ‘has call in tail position’.

WH: Here is an example of how you can execute `z()` either with or without a disposer without nesting it inside a function.

```js
​​switch (flag) {
  case true:
    using const x = ...;
  case false:
    z();
} 
```

RBN: Yeah, but I wouldn't want to depend on writing code like this. It seems unfortunate. And again the a lot of the prior art that I've referenced allows null and undefined without having to do anything complicated. It's just if it's not null or undefined, it has to have a dispose and most of these cases where we would have this. I would instead rewrite, as `using const x = flag ? ... : null`. Which is much more condensed and easier to read.

WH: example from chat:

```js
for (using const x in ...)
```

vs.

```js
for (using const x of ...)
```

RBN: And there is one thing that's not in the slides. I'm sorry about that, but I did add or allow using constant in a, in a for of Declaration because you might be iterating over async iterables that are disposable. And if not, if you don't have this, then you would have to say for context of something. And then using Constable A2 equals x just to enlist in that thing a dispose, but it doesn't make sense to do it for in because in can only be string. as strings, Can't be disposable.

WH: I would prefer to keep the syntax orthogonal.

YSV: Hi, so I read through your slides and also looked through the explainer. One thing that I've been a little struggling with understanding is how this will integrate with HTML APIs and which HTML APIs. There are several that have lifetimes that would benefit from, you know, this kind of a proposal, but I'm wondering how this interacts with them at how it ensures that the differences between those APIs are covered and whether or not that requires changes in the HTML spec.

RBN: So, this proposal doesn't require any specification change. Primarily because if we have something like the Disposable container, then it's possible for users to adapt them if necessary. Each thing that might want to make disposable would be essentially on a case-by-case basis. So if you wanted to, for example, make WHATWG streams disposable that would align with the - So I showed this, example, an explainer is if you had something like See, I think I have more in the explain around things like WHATWG. So here's a streamreader. You want to call release lock, this might for example, a disposed and dispose would just basically a wrapper for release lock to opt into this API.

YSV: Could you maybe at a couple of examples - the only HTML API that we have there is the streams API you just showed it would be really useful to understand a little more about how this is working out because I'm having a hard time picturing exactly how it'll work without needing a intervention on HTML spec. So, if you could add examples to the readme, that would be really helpful, so I can just get a better sense.

RBN: I can do that.

YSV: Great, just more detail. Like I imagine that there's a wrapper but we don't have any information about how that wrapper is working.

YSV: So the other question I've got is, has the way this will interact with proxies been fully fleshed out?

RBN: Right now there's no specific call-outs for proxy interaction. It just uses get method to get @@dispose or @@asyncdispose, so it would go through regular proxy traps to grab these. These things into the value isn't around to find the best have this dispose method like through pulling get method. Then it will throw.

YSV: Okay. Thanks.

SYG: Oh, I should have deleted this. Ron answered it with a slide. I just want to +1 on the design decision to disallow using const on global lexical scope. That is the right choice.

DRR: Just remind me if a closure captures one of these using variables. How does that get disposed? Is it on GC, Is it at end of scope and then it can still be witnessed in a disposed state?

RBN: It can be witnessed in a disposed state. So the block is the control for whether or not something is disposed. If you create a closure over the resource that resource is still accessible from within that closure. So you're passing a closure over a disposable resource that's been allocated using or declared using the using const statement the resource while, it's still alive, will be accessible. From within the closure, and then disposed can And if the Callback is that closure is still accessible outside of the outside of the block. They could witness the object in a disposed state. We don't do anything to explicitly forbid that and none of the platforms that we use as reference for prior art do anything either in those cases, at least as far as I know. So we don't do anything to explicitly first explicitly forbid that because there's more than of cases where you'd want to be able to do that.

DRR: Okay, I think that's probably fine. It's probably a little bit easier to capture in JS. But yeah. Agreed.

MAH: So when I started looking at this late last week, it struck me that there is already a mechanism in the syntax that allows doing a disposed pattern and that's through iterators and the for-of loops. I actually spent the weekend writing a user land library that does pretty much replicate the style here of using resources. Acquisition is initialization with a using helper as an iterator, and you can get pretty much to this form of expression by using an explicit block, a for-of statement. So I am wondering, do we need to pay the cost of adding new syntax to the language to accomplish this? Or can we get away with a pure API addition and in some helpers do this style of resource management through for-of loops.

RBN: So this was also mentioned in the chat as well. But MF did bring this up on the proposal repository at the time and this proposal has so far made it to Stage 2 as a syntax feature. Stage 2 is kind of indicated that we've already made the decision. We want to with this, even though we might make changes. There are differences in the approach. While yes, you can do some of the same things with, for of you're using that's essentially abusing a Syntax for something. not designed for or not to represent something. That's not the same as what you're actually doing. So, yes, you can abuse for of to do something similar. There's nothing that would prevent you from doing that, but that doesn't necessarily mean that it's the best solution. We could have also said that. Why do we need to add async/await if we have generators and yield, we just Implement a library coroutine and let people use that instead. And we still made the decision to forward with async and await, because the fact that it makes the intent of the user much clearer. So if you're using a for of to iterator over something emulate disposed, it's kind of like trying to use a hammer to screw in a screw. We're using the wrong tool for the job. Even if it could theoretically, you could theoretically Hammer, the screw into the wall. It doesn't mean that the result is going to be what you're looking for. That said, every language that we've used as prior art as a reference for this, that a similar concept, as the using constant declaration also has iteration in some form and in every one of those languages they have made that decision to have both of these cases because they are have very specific use cases and trying to use one for the other while possibly feasible, doesn't necessarily make, make it easier on the end user. So if you we've had this discussion, we were talking about partial application on Monday that the user is reading the code, do they know what this does? And if a user is reading code that has a for of over a using thing that that emulates what this does are they really going to know what's actually happening here? Whereas having a specific declaration that specifies the intent of what you're trying to do I think is much clearer and will make it much easier to read the code in the long term than using or abusing the for of statement for something similar.

YSV: So actually there's a lot to say there. First of all, I want to say that I actually do agree with MAH. I don't know if a new syntax is warranted here. I very strongly take issue with how Stage 2 has been characterized here as something that cannot be questioned, that we've agreed that this is the direction that we're going to go and we can't change our minds. I don't think that characterizes the stage correctly. Stage 2 is not a protected stage. Only Stage 3 is protected.

RBN: So I apologize if that was the, if that was how I came across my point was that the we moved to Stage 2 and had essentially already discussed these issues by the time we moved to Stage 2. I was speaking specifically speaking to the use of for-of a kind of shows my impression that we had already this and that, and at the point we move to Stage 2 for this, we made the decision that syntax was warranted. And this syntax has undergone significant changes since its reached Stage 2. So I definitely don't think that Stage 2 is unchangeable. That's certainly not my intent. My intent is was specifically to address that one concern.

YSV: I would say that entry into Stage 2 is an acknowledgement that the problem is worth solving. The solution has a lot of space for change, which is what's been happening with this proposal and just because we've decided not to take certain paths, doesn't mean that they can't be reconsidered. I do note that: Yes, it was discussed before. I also want to point out that I consider how we approached async/await to be one of the mistakes that we made in the language. There have since been a few usability issues which may or may not have been solved if we had reconsidered aspects of the design or tested usability in depth. I am getting async/await vibes from this proposal. async/await is a very popular user feature, there is no denying that. However, it can be responsible for bugs that are difficult to track down. I do see you mentioned that this is an explicit resource usage. But although you do free things, that the end of the block you cannot, if I understood the read me correctly, then you can also use this within a generator in which case it will be interleaved and utilized through the generator at multiple points in the code, which may make it a lot less clear to programmers when the resources is being freed. You don't have to think about managing the resource yourself, which is good, but this implicitness has certain drawbacks. I am afraid that we're going to get into a situation like C++, iterator hell. So I'm currently of the opinion - this is just an update, and this is also probably the first time that I've looked at this feature in depth, but I do have my reservations here.

MM: YSV covered all of my concerns about the way Stage 2 is characterized. Let me just say on Ron's usability. I think that is accurate with regard to MF's example, but with MF's conceptual breakthrough there. If you take look at the library that MAH created, I think the library that MAH created actually solves, that gets us over the usability issue. It's very usable. It's very readable, the names chosen are clear what's going on? And I think that the Remaining utility of the syntax over MAH's library does not pay for new syntax.

RBN: Is there a link to MAH's libraries? I'm going to put into Matrix because I'm not aware of. I don't have a link to it.

MAH: I created [an​​ issue](https://github.com/tc39/proposal-explicit-resource-management/issues/76#issue-1034723632) that has a link.

RBN: Okay? Yeah. I mean, I've looked at this as well and consider the the for agai my concern has been that, it's essentially abusing iterators to manage in many cases a single resource, and it also doesn't give you the kind of flexibility you get with being able to chain multiple resources and deal with their Cleanup in the correct order. Instead. You have to create multiple blocks.

MM: MAH's library addresses that specifically.

RBN: Yeah, so I'll take a look at that well, but I'm still very much in favor of syntax for this because it's theirs. It's just too valuable feature, especially as we start looking into the possibility of shared structs and and any possible future concurrent JavaScript being able to do things managing Locks and More Than Just something like simple mutexes, but things like semaphores, reader/writer locks. There's asynchronous coordination that could be leveraged for this for dealing with asynchronous operations using async await that have to manage isolate. A single resource, even if it's not cross thread and there are too many languages that have a similar functionality such as python context-managers being able to manage entering and exiting a scope and having behavior that's associated with that and hoisting all of this onto the back of ‘for of’ feels like an incorrect place. It's going to be hard to explain what happens with these with a lot of these cases in my opinion, and it feels like we're like we're kind of trying. NG to shove things into something around peg into a square hole.

AKI: I have to cut you off, we've gone quite a few minutes over.

RBN: I'm still looking for reviewers. So if anyone is still interested in reviewing spec as we consider you try to see if we can advance this two Stage 3, I'd appreciate if someone for that. Thank you.

WH: I will continue to review it.

AKI: Thank you, Ron. Thank you everyone And this was just an update, right?

RBN: Yes. This is just an update.

### Conclusion/Resolution

- just an update
- WH to continue to review
- SYG new reviewer

## Change Array by Copy

Presenter: Ashley Claymore (ACE)

- [proposal](https://github.com/tc39/proposal-change-array-by-copy)
- [slides](https://www.dropbox.com/s/3tn34t6lyn2r12a/change_array_by_copy_tc39_cct_2021_update.pdf?dl=0)

ACE: So, my name is ACE. I'm a Bloomberg delegate and I'm one of the champions for the change array by copy proposal along with RRD. So this is just an update if people have serious things then please feel free to raise an issue on the GitHub issues. So hopefully this won't take more than about 10 minutes.

ACE: So, the high-level summary of this that people have seen from the past. This is looking at, can we take some of the non-mutating methods, The non-mutating methods that have been inspired by the work in records and tuples, and see how they work out if we also have them on arrays and typed arrays. So we kind of increase this shared surface area. when dealing with these lists like collections in a non-mutating way

ACE: So, it's been pulled out of records and tuple proposal, but it does stand on its own. But the idea is that whatever is decided through this, if it all goes through, then that is what the records and tuple proposal will adopt as the methods that are on the tuple prototype.

ACE: So, a reminder of what we talked about in August, there were no objections to us kind of taking on this new style of not supporting Symbol.species. There were concerns with the previous thing we presented. We were adding 10 new methods, or 20 across array and typed array, but we did get Stage 2 under the understanding that we would reduce that API.

ACE: So repeating this slide again from last time. So the thing we're focusing on is here. We've got arrays and typed arrays on the left and right Venn diagram loops and then up and down: the top set are all the things that mutate. So if you've got a non mutating list, a tuple or some other library in user land you can't really have any of these methods. So if you have like a read-only array in typescript, all of these methods are hidden from you. So this would kind of restrict things, like tuple to only have things in the bottom half. so, previously we kind of took everything that was a mutating method and we created an almost identical, non mutating version of it.

ACE: Instead, what we're doing to kind of reduce having such a large API addition is to just introduce 4 new methods, the rationale here being that a lot these things you can already do if you know the API well enough. Things like pop, you can do slice 0 to minus one, .push is `.concat` with the value in an array to avoid is concat spreadable. Shift is slice after the first index. Though we do want to have a non-mutating version of splice because there's no real equivalent way of doing this directly without creating a copy of the array and then calling splice on the copy, which you can't do for something like a tuple because it can't create a mutating form to temporarily do a splice unless you go into an array, then back into the Tuple. Unshift, there isn't a method form of doing unshift, like you can with the other kind of queue/stack things, but if you have the non mutating version of splice, then you can do an unshift using that we say, I'm from zero, from the beginning of the array, I'm not going to delete anything but I will add something in.

ACE: for copyWithin and fill, we see that these methods have really, really low usage. So we didn't feel like there would be much value in having non mutating forms of these. Fill you can almost get with map if you just ignore holes and copyWithin it seems to be all the documentation around copyWithin suggests use cases for like high-performance copying things around. It seems counter to, if you're creating copies of the entire array every time. So it felt okay to not have a non-mutating form of that. Reverse and sort. Sort gets a lot more use than reverse. ANd these are already linear operations. That's very common to want to sort an array without mutating the original. So we feel like things like sort, we would really miss not being able to sort a tuple. There is .set for typed arrays. This sets multiple things at once. We don't have a version of that. We do have this extra kind of odd, one out ‘withAt’, which isn't actually a kind of non-mutating form for method. I’ll explain that easier on the next slide. The withAt is that kind of the non-mutating form of direct index assignment. So if the array here was immutable, you can't just assign to an index.

ACE: So the big piece of work, we still think there is to do on this proposal is coming up with names. There is [an issue](https://github.com/tc39/proposal-change-array-by-copy/issues/10) to talk about these names and there's three suggestions that seem to be kind of talked about the most ["with", "copy", and "to"]. Though it's not like we're saying it's limited to these three. These just seem to be the kind of the frontrunners and `with` definitely being the least popular. ‘with’ is what the current proposal has, but we're not saying it's what we want. We're just waiting. We're not going to update the spec and update everything until we've made a decision, the fact that the current proposal uses ‘with’ is just a placeholder. That's not signaling a desired preferred naming. So, if anyone has strong opinions on the naming please do get involved. I'll post a link to the issue.

ACE: Tim at Igalia has worked on an implementation. I don't think it's merged. I think it's just a patch or a PR, but has implemented these methods for array and typed array and did spot a tiny typo in the spec text doing this. That was helpful.

ACE: We've got the spec text. There's a polyfill. They're the kind of help us test this and income to ensure this can be implemented in user land. And please do get involved in the issues if you're excited by this proposal.

ACE: Lastly, when we got to Stage 2 last time, we didn't have time to ask for reviewers. I know JHD has already reached out and said he's interested, but it'd be great to get some more reviewers. Thank you.

AKI: Do we have reviewers? The queue is empty. Could I hear some volunteers? SRV would like to be a reviewer. Do we have another reviewer?

ACE: And similar to what Michael said earlier, it's got, this is fairly small because it doesn't add any new syntax. Just a few new methods that have, it's just the four methods. Eight, I guess you've got. You have to write them slightly differently for whether it's on array or on typedArray.

JRL: Okay, I can review.

ACE: Great. Thanks. Yeah, Thanks Justin.

### Conclusion/Resolution

- JHD, SRV and JRL to review

## RegExp modifiers for Stage 1

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-regexp-modifiers)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkfl7c6yR-2P8T4gn0w?e=cvaUL2)

RBN: Alright, so at the last meeting, I presented this overarching concept around some additional regex features that I was interested in investigating for adoption into the language. At the time it was kind of presented as feature parity to reach the number of features in other languages and my intent is rather that There's a lot of useful features in other languages that are fairly common in regular Expressions that have a lot of value that I'd like to see if we could eventually consider adopting. And I was asked by the committee to break this down into a number of different proposals, more focused on specific features rather than trying to have a design goal of feature parity since that's a little bit too broad of a goal. So, I've taken this and have broken down most of these into individual proposals although, there are some cross-cutting concerns between the proposals, which I'll discuss as they come up.

RBN: The first one I wanted to talk about is regular expression modifiers. For anyone not familiar with this. Okay. Let's get this. This was a slide from the previous slide deck, talking about some of the features we have added some of the new features that we've considered and some Places that we're behind on, at least as far as what features we support and I put together a site that has kind of a list of comparisons of various features and various engines. And what the level of support is this specifically modifiers, there motivated by trying to improve support within regular Expressions to to support scenarios that are used by web-based editors textmate grammars, or Fairly common or used in the u.s. Code, They're used. Even in Visual Studio. In cases. They're used in Eclipse. They're used in textmate. They're used in Adam. They're used on various websites, but there are limitations to our regular expression, grammar. That doesn't allow us to use these or parse these parse syntax that uses these types of grammars with in the JavaScript, regular Expressions and said we're often these environments will have to Shell out to a or will have to use native bindings for something like Oniguruma. And one of the most frequently used features within these texts, make grammars are modifiers and modifiers are very valuable in that they allow you to enable or disable a subset of the regular expression Flags within the pattern itself, things that you can't necessarily put into a regex string in a grammar file because it's a string, not a regular expression, which has context of the regex it self. Another motivating example is JSON configuration files that use regular Expressions stored as strings. This happens for things like electron Forge, webpack. configuration, often has fixed regular expression, stored as strings within a JSON file and no capability for augmenting that outside in the street itself.

RBN: What a modifier is. It's a special pattern within a regular expression, that enables or disables flags for either the entire expression, as in the first case, or within a sub expression, essentially inserting the modifiers to add or the modifiers to remove between the question and colon in a non capturing group. The syntax here shows kind of all the flags, but you might say `(?i)` to indicate that you're using ignore case throughout the rest of the pattern up until the end of the current alternative or the end of the pattern itself, or you might want to enable Unicode or disable Unicode mode matching within a sub Expressions, Etc. One of the values from modifiers. We could implement it today and not change any of our it wouldn't break any existing syntax. There are no collisions with existing syntax with this because both the syntax options described are currently illegal within a ecmascript regular expression. Some Flags can't be modified such so you couldn't change flags that affect specific matching Behavior such as the global sticky and has indices Flags. Cuz those are primarily designed around controlling where indexes occur. and how advancing works. And that's outside the scope of what you might use for handling things like multi-line single-spaced ignore case Unicode or X mode, which is another proposal. I'll discuss more later. And this is one of the most frequent most supported features that are outside of what's currently supported by ecmascript, Perl pcre. Boost reg ex, dotnet, Oniguruma, hyper scan, the ICU regular Expressions, which is what we're trying to emulate in other proposals around, unicode set notation Etc. So, there's a number of prior art references for this with, in multiple languages and all pretty much do the same thing. The main difference is What the flags themselves mean.

RBN: so, here's some examples. In a pattern you might be able to have a regular expression pattern that has a chunk that is case sensitive. And then using a modifier could then have the remainder of that pattern be case-insensitive matching. So you can see the examples here, the other one that I mentioned again was in a regular Expressions, within a stored within string to JSON file, or file or within a text make grammar. ER, or any other source, you would have the ability to specify that a pattern is either ignore case or explicitly, not ignore Case by adding to the string for the pattern itself. So this is again, really simple proposal. The semantics for the actual spec text when it comes will probably be fairly somewhat more complex, because it changes, how flag capturing works. We may have flags that we want to add in the future to this or flags that we can't currently support such. There's I personally am not sure whether or not will able to be able to support changing the Unicode flag from within a pattern which is fine. Some engines that do have support for this allow you to control that, that is something that will probably fall out as we look to advancing the Stage 2, but I'm interested in getting feedback on whether or not. We should accept this for Stage 1.

WH: For some of these, it makes sense, like it's turning on and off case sensitivity or some of the simple flags. For overarching flags like “u”, iit really scares me since the very notion of a character differs between u mode and non-u mode. And if you share back references between those it's really frightening.

RBN: again, support for Unicode mode is something that many the engines that do support Unicode mode. they do support this as well. actually supporting it with the syntax is outside of back references, which is something to look at. But in general, it's generally straightforward because we'd be able to, by saying that something is in Unicode mode, with, with that sub expression as we parse, and we encounter this, we can actually affect how the parsing behavior for the rest of the expression works. So it's something we could actually use this for? So again, Unicode mode, something. I'm not sure about it's one that will probably take a little bit more consideration. But many of the other modifiers such as ignore case, dot-all, and multi-line. And the x mode that I mentioned are valuable and I think even having the code mode would be a valuable thing to have specifically for cases. Like if I wanted to, if I was using a regular expression that's here and it's just being passed through new regexp. I might want to be able to actually say I need to use Unicode matching for matching files and file system because I'm working with a file system that has non-ascii characters and might need to actually do matching in that way. So there's very useful reasons for being able to support Unicode mode, aside from supporting modifiers in general. Yeah, so that's something I'd like to make sure that we can solve rather than possibly abandoning.

WH: Yeah, I disagree on the grammar being easy since you need to parse in order to find whether you're in unicode mode, and you need to know whether you're in Unicode mode in order to parse. So, as I said, I'm okay with some of the flags, but “u” probably not.

AKI: There is nobody else on the queue.

RBN: Should we support taking this for Stage 1?

WH: I suppose this for Stage 1.

MF: I guess I would like to ask that we explore options for just having this capability with a subset of the flags. Waldemar expressed reservations around the Unicode flag in particular. I would like to see a path forward where we address each flag individually and justify them each individually. Instead of saying we're starting with all flags and reducing ones that we don't think we can make make sense.

RBN: I think that's a perfectly viable option. My intent here was showing the global sticky has-indices, flags are ones. I've already looked at and considered there's something that - controlling them won't be very useful. A, it doesn't affect the actual, how we would parse and evaluate a match. And the global and sticky flags at least are primarily based around how advancing within a regular expression works. The Unicode one is one that I would like to be able to support because if we can't support it. There's certain cases where we'd like to be able to see it, but I do agree that we need to look at these on a case-by-case basis.

MF: Yeah, so in particular my specific request, is that when you do come back that we have motivating examples for each individual flag we would want to support with a feature like this.

MS: I'm not on the queue, but I agree with MF. Unicode I think is problematic because of the way that the grammar is written in the standard, that the unicode flag is basically passed down to the full syntax when we do the parsing. Multi-line also seems to be little bit dubious to me since it seems funny that you're going to have a string that let's say you start with not multi-line, but even put some multi-line stuff in it, and then you go back to multi-line. I'm thinking of beginning of line and end of line assertions become kind of weird in there. I mean, it's doable, but it seems like it's kind of a foot gun.

RBN: I'm actually trying to recall from the slides. I think in one of the presentations that I have this this week. I might actually be using an example of you that uses the modifiers to handle specific cases such as multi-line mode or at least how dot-all mode works. And I think it's mostly multiply Multiplies is one of these is not passed. yeah, but multi-line mode is one of the ones that is supported again across Pretty much every engine that supports multi line mode. Every single one of the items in the prior art I believe supports it. And the m flag specifically affects how a match works for caret and dollar. That wouldn't affect how parse works so that the It's not something that's perfectly viable. And again, it's supported and I've seen regexs that have used in the past as well. But again, yeah, we'll look at these on a case by case basis. This right now is just presenting an example of the syntax.

RBN: it sounded like we have support for Stage 1.

AKI: I would agree that it sounded like we have support for Stage 1. The queue is empty and you are just shy of time.

### Conclusion/Resolution

- Stage 1

## RegExp Conditionals for Stage 1

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-regexp-conditionals)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkfl9fQQBfWQjIgf1QQ?e=jFynF5)

RBN: All right, so conditionals are another feature in many regular expression engines. That's also commonly used in some textmate grammars. Its primary goal is to improve your ability for doing more complex pattern matching in a regular expression pattern. That has Alternatives. It reduces a lot of complexity that might have in a regular expression today where you need to, if If you don't have this, then you need to do a positive look ahead for the condition in one alternative and a negative look at negative look ahead for the condition in the other direction. So it reduces repetition and also in the long term can add a lot of additional flexibility with other proposals.

RBN: The basic idea between a conditional expression. is that you have a group that has a condition head. So, the question open paren, and then some condition close paren if the condition evaluates to true, and I can all go a little bit more into what that means in a moment, then it will match then it will attempt to match the yes pattern if it evaluates to false, then it will match the note pattern. You can't have more than one alternative in a condition. So you had a yes pattern or do pattern or something else, that would be a syntax error Alternatives. Would instead need to be grouped within a capturing or non capturing group inside that pattern. You can elide the no pattern if you don't want to mention anything for false and it's essentially as if you had an empty that matches nothing. This again, doesn't conflict with any existing syntax. This can be added to the regular expression syntax regardless of whether you're in Unicode mode or the new proposed mode for it's being discussed around the rig set, notation proposal. Because again, this is illegal syntax within any regular expression that conscripted a So a condition is one of the specific set of patterns so you can have a look ahead condition. So it's essentially true. If the positive look at matches, a look behind condition that is true. If a positive look behind matches it has the same restrictions for for look behind the here within the pattern that you would in a normal look behind in that, it has to be a fixed-length pattern, it can't have quantifiers like Star Plus quantifiers where you have could have an end Look Backwards, Backwards, look Then we have the a negative, look ahead pattern and a negative look behind for testing. You also have a way to test whether or not a specific back reference was matched. So you can check if you previously matched something you can check whether that match was successful or not, and you can also do back reference conditions by name. Many of the other engines, we've looked at have some additional features. Is that we might be considering for future proposals that I discussed in the last meeting. They're currently out of scope for this proposal because we're restricting the syntax of what a condition is. We have some room to move ahead in the future. So for the example of like a condition that uses a capturing group name because we're explicitly requiring you have the less than and greater than on the either side to match the syntax. We use for capturing groups, then that allows us to not conflict with possibly having defined for subroutines or are for recursion Etc. Etc. But again, these are currently out of scope for what I'm trying to propose in this, in this case.

RBN: Here some examples. Here's a case, where I might want to perform a conditional match that matches the first alternative, but only if it starts with two digits and a `-` and then matches the second alternative. Otherwise where to do this without this feature requires. Repeating this condition in both branches, one being positive, one being negative. This would be a lot of repetition without this. So again, this is intended to be a fairly small proposal, but it adds a lot of additional and very powerful capabilities to a regular expression. There's the explainer as listed and then again seeking Stage 1. So with that we can go to the queue and see if there's any feedback.

AKI: So the queue is not empty. Kevin?

KG: Yeah, so this is one of those funny proposals where I would definitely use it if it were in the language, but I'm not a hundred percent convinced it makes sense to put it in the language. Regexes are already extremely complicated and I have found that breaking up my regexs so that I express more of the logic with the normal code, like if statements or whatever, makes my code more readable. I am aware that there is prior art in other languages for this sort of thing, but my experience of those other languages is that people really really struggle to read them and like I am one of the people who's best at regexes in like a lot of the code bases I review and I am still struggling to read them. So, I don't know. I don't object to Stage 1. I am hesitant about this proposal though because it makes it possible to write regexes which are much, much more complicated. And while that is sometimes useful, I'm not sure it's something that we actually want.

RBN: So I wanted I did mention before that. It's possible to emulate part of what I'm trying to provide here with conditional, with a conditional expression today using two Alternatives one with a say A positive look ahead the other with a negative look ahead and specifically the the look ahead case. Yeah, but like so it's possible possible to write that but then, that regular expression becomes significantly harder to read because you then having to know that you're looking at two Alternatives that are that are distinct from each other. That one is not possible versus the other Expressions, which again is common. In many other languages, makes it much easier to read the to read the expression. Know what's going on.

KG: I agree that a conditional expression is easier to read than having both the positive and negative look ahead. The question is the extent to which people would be using that trick versus expressing the thing they want to express in some other clearer way. In my experience almost no one uses the trick of having both the positive and negative look ahead. And instead they have an if statement and I can read the if statement and if there was this then maybe they would be using this and then people would not be able to read it. So yes, I agree it's possible to emulate this. I don't think that means that we should add it.

RBN: my Counterpoint to that though, is that one of the motivating use cases for this are cases where we're bringing in a regular expression from a JSON configuration file or something. That doesn't allow you to represent a full regular expression, only a string that are very commonly used within the ecosystem today. textmate grammars. jest, configurations, Etc, where I might need a more complex pattern than what is currently viable. And I can't write an if statement because all I have is Strings numbers and brackets.

KG: I strongly objected to that motivation. I really don't think that configuration languages that have chosen to limit themselves in what they are capable of expressing to regular expressions should mean that we should make regular expressions more complicated. I very strongly disagree with that motivation.

RBN: My interest, or the reason I bring up that motivation, motivation is it's a case of going where the users are, but I can understand your concern. The other thing I did want to mention with that too was that one of the other proposals I have helps or is designed to talk about the legibility of regular expressions and make them easier to comment understand what's going on for some of these cases and again a lot of the other points that I'm making are around the fact that there are existing regular Expressions that could use this. An example might be parsing ISO 8601 dates with correct, separators, and all the various parsing conditions that are part of the iso 8601 standard, that mean that you're either using not using a regular expression and writing all The Code by hand, or you are using regular Expressions. That can be extremely complex and hard to read. So, one of my motivating use cases was specifically tinkering with writing 8601 date and time parsing. And The complexities therein.

KG: My response to that is that if you try to write your 8601 parsing as a single regular expression, I think your code is going to be a lot less readable than if you don't do that. And so I would like to encourage people to not do that.

AKI: I just look at the time and realize we have five minutes to get through there the whole queue. Is this tension resolved?

RBN: Is this a reason not to advance to Stage 1?

KG: No, I don't mean to block advance in Stage 1. I think that I appreciate the motivation for this and it's fine to continue exploring it.

AKI: I had added to the queue a plus one that I had a concrete thought that went through it and it's just shy of 4:00 in the morning. I forgot what the thought is. So I'm just going to say I'm concerned about overly complex regular Expressions, because it that's certainly what it was based in and then move on to Waldemar.

WH: I am concerned about overly complex regular expressions. One thing that really scared me is that your description of how lookbehinds work here is incompatible with the way that lookbehinds currently work in the language.

RBN: my intent is to match the existing lookbehind Behavior.

WH: The existing look behind behavior allows arbitrary patterns of variable length.

RBN: I would have to check that my last time I looked at it, it. We at least this, I'm not sure if this is per engine, but when I tried writing look behind certain look behind patterns in V8, I would get errors if I had anything that had arbitrary length.

WH: It should work.

RBN: Well, my intent is to match though. either way the idea of the goal would be to match nothing change.

WH: Yeah, the ones you have on this slide that are syntactic sugar for lookaheads or lookbehinds seem unproblematic. I’m less excited about those that reference numbers or names of capture groups. I’m really unexcited about subroutines and recursive regexes.

RBN: The capture group is one that we can't actually emulate using look behind or look ahead and the alternative because it would require basically looking behind the entire match before you to find some point where that was matched.

WH: Not being able to emulate it is why I'm not excited about it.

MF: So I feel like you've explained the feature, but Stage 1 is about understanding the problem or basically, what we're trying to solve. And I haven't heard any really strong motivating cases. I would like to see a good number of examples where this feature really helps and compare it to what is possible today. And see that it really does produce more readable code that somebody would prefer to write and somebody would prefer to read. I don't feel I've been convinced of that today. And for that reason, I don't think it's appropriate to move to Stage 1 yet. Not that I would never want to see this proposal come back for Stage 1. I just want to see a more in-depth presentation on the problem space. Instead of the particular solution.

RBN: I'm not clear on whether that's something that should be a reason to block Stage 1 stage. is that we want to consider it. If you're saying that we might want to consider in the future. That doesn't seem like a reason to block and I'm more than happy to look for additional real world examples of this. I know I've used it significantly in the past in dot.net and other languages, which is again, one of the reasons why I want to bring it to ecmascript is, it's a, it's a, it's been a thorn in many cases of regular sessions that I've had to write to write in JavaScript.

MF: I'm not saying that this feature is not motivated. I'm just saying that from what I've seen of it, I've not been convinced yet. Like I haven't been able to convince myself that it is well motivated. In particular, I would like to see comparisons to how we would do something today as an alternative, or if it's not possible today, it would be even stronger motivation.

RBN: The cases that I had on the list of conditions such as only advancing. If a specific capture group has matched is something you can't do in a regular expression today. It's just not available at all. within the regular expression itself,

MF: The entire language is available to us. Any code that would be possible as an alternative would be a good example.

AKI: We are at time. I would say and I would really like to get MLS to be able to say his piece real quick and then go to bed. Can we make me maybe move to MLS and to and then talk Advanced little more?

MLS: Yeah, so I'm also looking for motivating examples. The example you use here, if you got rid of the condition you just make this an alternation. It's actually more efficient. What you have here. We'll look at the first characters. And then the dash twice whereas if you eliminate that the alternation is actually quicker way of doing this. this. So, this is not a motivating example, in case, in my eyes. We don't need to make regular expressions turing-complete in my mind. I'm not going to stop Stage 1, but I have concerns about complexity.

RBN: I've made this comment before. Is that in other Repose and proposals. Contrived examples where I'm trying to showcase a feature often don't go well, to providing complete examples of motivation. So when you're talking about like if I remove the condition, this case, yes, the Alternatives would work but the first alternative would be first. I have to pair, whether it has two digits, a dash and then seven digits. So I'm having to go some length. So a much more if a regular expression was more complex than this. I'm having to go some level of depth in of scanning where I could have bailed after the first three characters, for example,

MLS: you'll fail at the dash - if it's a second,

RBN: if yes, for this case, but for other cases, that might not be true. It might be that I have 15 characters. I have to match before I see a difference. And no I need to backtrack and try and try the alternative which then matches the In 15 characters, but has a different branch that I could have made a headache condition earlier on. That said, you know, if the first two characters are something slightly different or I could have a look ahead that scans, ahead to find something that I need to make the decision whether through certain types of matching and capture groups. So if you had captured groups that matches well, so again, this is a somewhat contrived example to show how the feature works much less than to show a degenerate case, that would require it. So I can think of plenty of cases that where this would be more efficient than doing just the initial scan. so, I'm happy to as has been mentioned before, look for additional motivating examples to add to the explainer to bring back should we consider to advancing this to Stage 2?

AKI: Okay. That's the end of queue. Do you want to request Stage 1?

RBN: Yeah, so at this point, is there anyone that would or would there be any concerns with advancing to Stage 1?

MF: I don't feel it's appropriate to advance to Stage 1. Not that it should never come back for Stage 1. Just that, I've not been convinced today that it should advance to Stage 1, and I would love to see you bring this back with stronger motivation so that we can advance to Stage 1.

RBN: I do want to make one additional point that we've made comments about how in some cases it would be easier to bail out of the regular expression and go back to JavaScript code to do certain things. And a lot of the cases where I've seen that, that happens the code becomes harder to read because you have more complicated logic, because now you're having to take the regular expression that you just matched, then advance your string, your position within the string to match the new location, based on what you found. When all of this context was already available in the regular expression. So you're having to break out of one. Can switch to another in certain cases? And, yes, the it means that the regular expression itself might get more complicated, but I contend that the logic in some of these cases, at least, when expanded up to full JavaScript can be significantly harder to read, but I'm perfectly happy with looking for additional motivating examples.

RBN: So, one thing I did want to go back to is and based on the comments that were just made was looking at the Stage 1 acceptance. What acceptance signifies is that we've expecting to vote time and examine the problem space and it sounds like what you're wanting me to do is not Advanced to Stage 1 so that I can devote time to examine the problem space, but that so I'm wondering if this still should be Stage 1, because it all it means is that we want to continue looking at it. I'm not sure blocking Stage 1 advancement so that I can go and do the things we're going to do in Stage 1 1 makes sense.

MF: Yeah. Yeah, I think that's fair. The way you describe it. I typically consider Stage 1 to be where we agreed that there exists a problem. Yeah, if that's the exact wording of the process document.

RBN: Yeah, there'll be a dress, that I would say the only time we wouldn't Advance something stage. One is where we agree as a committee. It's something we definitely don't consider.

MF: Fine, that is a fair argument, and I would not object to Stage 1 on those grounds, but would like to possibly revisit this process issue at some point.

WH: It's more than just that a problem exists — it’s that a problem exists that we want to solve.

MF: Yeah, that's how we typically do interpret Stage 1

RBN: my point. Well, there was that your your intention for blocking Stage 1 advancement was so that I can go and create more examples of how this specific syntax should? For reasons for this, existing text to exist, which does feel like it's further examining the problem space. And if there are alternative Solutions or and to bring it back, which means that we're wanting to can still consider it.

AKI: Does that not mean that we are that we are agreed that this is not going to be blocked from Stage 1. Am I understanding it correctly?

MF: I'll leave it to the chairs to figure that out. I've expressed my opinion.

RBN: Sorry Aki.

AK: Great. I mean, I am always down to make snap decisions is just, but somebody always disagrees with them. And then I realized I probably shouldn't them in a snap decision. No, I think I'm actually pretty closely aligned with MF. Most about That. It's a problem that about not entirely convinced we should be solving, but also that you kind of brought me around in saying that, that Stage 1 is when we explore whether or not it's a problem. We want to solve the specific writing your specific wording.

BSH: Stage 1. If we say you have Stage 1, that means we have agreed this is a problem we want to solve, right?

RBN: Yeah, I'm not trying to like game the system or litigate into Stage 1 on a technicality. It's the big thing about this problem space is that it's a solved problem space. It exists in multiple languages that have already gone through how the feature should work. How so there's what we're really. The key thing that we to address is whether or not this is something you want to consider the semantics and the syntax are unlikely to change because I wouldn't want to deviate from what other languages implement because then it feels like we're we're doing that purely to do something different and then we run into inconsistencies in possible interop scenarios that I would like to try to avoid. So are primarily if, you know, if we wanted want to consider and

AKI: We are now at 11 minutes into lunch without having had a conclusion. I think we're going to have to come back to this. I think we should come back to it like this meeting, I don't think we should abandon it, but I think I think we should come back and discuss this a little more.

RBN: That's fine. We can hold off on the stage advancement discussion till after the break or later on.

AKI: All right, sounds good. Thank you for your flexibility. Ron. You have several more proposals at this meeting still. So we will certainly have time with you to talk it through.

### Conclusion/Resolution

not advancing right now, will plan to revisit later this meeting

## String.cooked

Presenter: Hemanth HM (HHM)

- [proposal](https://github.com/bathos/proposal-string-cooked)
- [slides](https://docs.google.com/presentation/d/1Au8FP1xTuXb52d6kG1fxX5Cxl3J-02h3FAaq8tMEtn8/edit?usp=sharing)

HHM: Here's an example. we're, we're passing the and a string, which has escaped any escape sequence. And we are just converting that to upper case. It would be could probably see such implementation in view of the open source code and probably folks would start switch to string dot raw. We implement same. And that would result in something like this. Probably they didn't didn't pay attention that this had the escape sequence. To fix that. We probably do string.raw and then have this object with attribute raw whose values are strings, and then do an upper case. And that I think, most of the developers would probably never think of having two raws to cook the string. So why just have string.cooked, but you could pass in those strings which might also have this escape sequence and it would work perfectly. And that's the proposal.

HHM: And it could be a default Behavior. It could be just a tag. You could have it here and it will work just like an untagged or it would also it would also give the same results if it were to be hosting. Not cope with escape sequence. The string like just like the untag templates.

HHM: And it makes sense to have the same signature as raw for cooked. So, it could be either named string.cooked string.Identity, string.interoplate, string.interleave or maybe even zip.

HHM: so, for the signature it makes sense to have the tag signature or (?) signatures.

HHM: In and what should, what should we do in case of invalid escapes should be a syntax error or a type error? We should we should align with untagged literals, but will also prevent it from receiving undefined.

HHM: Maybe we could use itertools tools and then have the leave values.

HHM: And then this is the the energy of spec draft, what we have, which is nearly identical to String.raw, and it can be refactored to use shared steps. and so we have agreed on the motivation, explain are examples and we are exploring a few of the issues in the repo.

HHM: So, Asking string.cooked for Stage 1, and if there are no questions or concerns, and if we could identify reviewers, it could also be Stage 2.

BT: All right. Got a couple items on the queue. Mark, you want to go first?

MM: Yep. So first of all, I support this. First of all I want to point out that the language that template literals come from, the e language, where they are called quasi literals, did have an explicit template tag called quasi parser that exactly corresponded to the default Behavior. What you got without it. So I think that having it have the same signature as raw is good because it lets you use it directly as a template literal tag, and I think calling it cooked as good because of the contrast with raw. Maybe we can regret having called it raw but having called it raw cooked is the natural dual.

SHO: Hi everybody. So we just wanted to mention that on the Igalia side. There was some concern actually about cooked as a name since it falls basically into the case of being an English pun, which is, you know, great, when you speak English, but maybe there would be a name that is not as much dependent on that. So, we just wanted to raise that. That and then also Philip from Igalia Philip jamendo, his would like to be a reviewer, and he asked me to mention that. So, I'll do both of them at once.

MM: wants to know how its upon if you could explain how it's a pun.

SHO: Well, so it implies on thinking in English that if something is raw then the other thing cooked. I write. it's like you're getting further into the metaphor. Maybe I shouldn't have used the word pun, but there were concerns expressed in our Creed discussion. About that is the name. Instead of using something that felt more descriptive from not thinking into the metaphor. I don't know what that would be. I see JHD also has a note about bikeshedding the name. so he might have suggestions, but we think it's worth discussing.

MM: Okay. The metaphor doesn't doesn't bother me. English puns are very local, but the metaphor of processing, but the characters of the string processing the escape sequences versus taking them as is, it's not a terrible metaphor. Maybe there could have been a better one, but we've already bought into the metaphor with the term `raw`.

SHO: Yeah, I can understand that argument. I think it's probably worth discussing for the, it's pretty early on. I just wanted to mention that it's also not actually my deepest concern, so I don't want to speak for that person. I just wanted to mention it in general. Igalia would like to discuss it further. And I think their space in the issues to do that. Other than that. It's a great proposal.

JHD: Yeah, so, I mean I definitely think this is ready for Stage 1. I'm not opposed to the name cooked like I'm a fan of whimsy in names. The descriptive names are often, over time, just as hard to figure out the original intention as whimsical once. But I definitely, I probably would have preferred Rod not be the original name, chosen, but given that is cooked might make sense at any rate. These are things that we should discuss and probably on github, not taking a ton of plenary time for it. That would so, I wouldn't support it going on stage to just yet. But once the name is figured out all the rest of the semantic seem straightforward to him, so he brought work.

WH: Yeah, the name “cooked” confused me. We have no notion of cooking. “processed”, or something more descriptive would be better here.

BT: All right. Thank you.

RGN: I support Stage 1 for this and I'm willing to be a reviewer.

BT: All right. Thank you with that. The queue is empty.

HHM: So, we have Stage 1.

### Conclusion/Resolution

- Stage 1
- bikeshedding for the name to continue

## Bind-this operator for Stage 1

Presenter: J. S. Choi (JSC)

- [proposal](https://github.com/js-choi/proposal-bind-this)
- [slides](https://docs.google.com/presentation/d/1gVvYE1TwXN0C5R88meeFv2wNSROH9vWSwFmGbcaHsdM/edit?usp=sharing)

JSC: I'm JSC, Indiana University. Thanks for listening. This is the bind-this operator. I'm going to go through this fairly quickly. Most of the stuff that's in the slides is also on the explainer. There's also a spec available. I am presenting this for Stage 1: whether it's worth investigating. This proposal is a simplified resurrection of an old Stage-0 bind operator. It's also an alternative to a Stage-1 proposal called extensions that was presented in November last year. So this is a rival to that and it's a resurrection of the old bind operator. For what it's worth at least one champion of the old bind operator proposal said just make a new proposal because of the baggage of the old proposal.

JSC: My point is twofold. Bind and call and especially call are common and clunky. So there are two slides here, common and clunky. Call is actually really common and I'm excluding transpilation. The dynamic `this` binding is a fundamental part of JavaScript design, its practice, and its semantics. It's really fundamental to the language and that means programmers need to change the `this` binding all the time, the receiver of a function. And they do this for a variety of reasons. We did a fairly thorough review of this, especially with `.call`. We manually went through a lot of results from the Gzemnid dataset, and found that people use `.call` for a lot of reasons and they use it a lot. They sometimes use the receiver as a context object, sometimes they want to protect methods from prototype pollution, sometimes they want to swap between two methods depending on some conditional. People use `.call` a lot. Actually, it surprised me: It's maybe one of the most commonly used methods in the entire language. I think that, of course, we all use console.log, maybe more often in one off-code. It's not going to show in Git-committed code as much. But like, seriously, it occurs more often than that. And this is excluding transpiled code. We did a pretty thorough review, at least for `.call`. We did a pretty thorough job. And by that I mean there was a volunteer who went through the first 10,000 lines of results from the Gzemnid dataset. (Thanks go to Scotty Jamison.) And where you can see [our methodology](https://github.com/tc39/proposal-bind-this#bind-and-call-are-very-common). You can reproduce it. We are excluding transpiled code emitted by Babel, Webpack, CoffeeScript, etc. Even with all that, people still use `.call` a lot.

JSC: So we think might this be worth lubricating because the second half is: it's clunky. They're really frequent. They're also pretty clunky. As you know, we're used to writing methods and noun verb noun court order English is subject–verb–object language. We're used to writing `receiver.verb(arg)`. `.bind` and `.call` flip this natural word order around and that makes it pretty clunky. Now you'd have `verb.call(receiver, arg)` instead of `receiver.verb(arg)`. So a bind-this operator would restore the word order back to the noun–verb–noun order. We've got a couple examples here. These are all real-world examples. The word order is just so much less clunky when you put the receiver first. It's a lot less clunky. So, like again, we've done a pretty thorough job of checking for real-world cases. You can reproduce all of this. You can look at the data set yourself. You can look at the [issue that Scotty Jamison made](https://github.com/js-choi/proposal-bind-this/issues/12). He put a lot of the manual review results there. I think this is all pretty robust.

JSC: This is a really simple proposal. It's simpler than the older proposals and I'll get into more detailed comparisons in a bit. I call it the this-bind operator because by itself it binds and then if you put parentheses after it, like any function call, it turns into a call because it's indistinguishable from using `.call`. The left-side precedence can be bikeshedded, and then the right side matches decorator syntax. We can bikeshed that too, but right now we're using decorator-like syntax. So it's an identifier or chain identifiers or a parenthesized expression and, hopefully, they'll make sense to people who also use decorators. Anyways, the big point is that when you put parentheses after it, it's indistinguishable from calling directly on the receiver. You don't have to allocate a bound function. It's literally indistinguishable. Also you can't mix it with `new`, at least without parentheses. You've got to be explicit about that. Also there's also a little thing where you can't mix on the right-hand side of optional chaining because it'd be weird if it switches grouping [when you change a `.` to `?.`].

JSC: Let's see, just comparing and contrasting. Like I said, I'm going to go through this fairly quickly. It's basically the same as the old bind operator proposal, except there's no unary form. There's no prefix form. We're not trying to solve method extraction here. We're assuming that any method you're using is already extracted somehow or you could just put it on the right hand side. Yes, that means that you would have to repeat the receiver if that receiver already contains that function, which is already what you have to do with `.bind`. We could always add more syntax later to solve that. RBN's partial function application proposal would also do that, but we'll get into any overlap with that in a bit, but it's basically the same. Otherwise we're trying to keep this really simple. I personally don't consider the repetition to be that big of a deal.

JSC: The extensions proposal deserves a little more because extensions is a fairly ambitious proposal. So it's got a lot of stuff going on. I'll go through this quickly. Extensions use a special variable namespace; bind-this uses the ordinary namespace. The concern that extensions are trying to address is name collisions, but the tack that bind-this takes is that we're already solving this using ordinary naming conventions. Extensions has special semantics for accessors, that is, for property descriptors that have get and set methods. Bind-this does not try to solve that. Its point of view is that this isn't that very common and even when you do it's clearer to extract to functions rather than using property descriptors directly. Extensions have a polymorphic extraction syntax. Its application syntax is also polymorphic. It depends on whether the thing you're extracting from is a constructor or not. So it actually resembles the `import` syntax a bit. And if it's a constructor it extracts from the prototype; if it's not, then it's a static method and so it actually also applies the left-hand side as the first argument rather than `this` receiver. Bind-this doesn't have any special extraction syntax. It tells you to just use ordinary destructuring as usual, trying to be explicit about that. There's a corresponding polymorphic ternary syntax which also may support metaprogramming with a new symbol. Bind-this doesn't do that either. It would just have you insert into the right-hand side or or just use a variable or whatever. And it's not polymorphic, again.

JSC: Bind-this isn't redundant with the pipe operator, or it’s redundant with it insofar as member access is redundant with the pipe operator. The pipe operator is for generic un-nesting and linearization, and that includes function application as well as lots of other stuff. The scope of bind-this is small. The fact that bind-this and member access happen to linearize expressions is a side effect – a happy side effect – but their purposes are tightly coupled to the concepts of object membership and `this` binding and the concept of function receivers. And there is code that would arguably be more readable if you use both pipe and bind-this, like this example, from Chalk.

JSC: I would also argue that it's not redundant with partial function application either, that's RBN’s proposal. They are complementary; they are orthogonal and handle different use cases. They overlap in one small way, and that's the case that I mentioned earlier: when you're trying to bind a function that is specifically owned by the same object that's going to be the receiver. And in that case, you can with bind-this, you would have to repeat the receiver like with `.bind`, and you would have to repeat the receiver – versus how with partial function application you do not have to. That is I think the only overlap. In contrast, partial function application does not address changing the receiver of an unbound function. That's bind-this's purpose. Partial function application and bind-this can also work together in the case when people are using `.bind` and more than one argument there. They're partially applying other arguments in case. They could theoretically be mixed, also.

JSC: If the committee does not block Stage 1, then we can bikeshed a lot with regards to what we want the operator to look like. There's at least one person who doesn't like the `->` option. There's lots of options. We can even go use a bracket notation now, though I think JHD doesn't like that and probably others too. We can bikeshed it later. That's for Stage 1 and even Stage 2. That is it.

JSC: The point is that bind and call are really common, especially call, and they are clunky. I know that someone said analogies to natural language are not that compelling. I can understand that. At the same time, how we read matters. There is an analogy to natural language here. And more importantly, there's an analogy to method calling here. There's a reason why we like putting the subject of something first, the focus of something first. So, you know, that's why we do. That's why we have dot notation for object-oriented, programming languages. And I think that there would be a big improvement for the readability of something, when we had to switch the word order like that to be verb–call–noun–noun versus noun–verb–noun. I'm inserting the “call” there, because it's boilerplate. And this is a very common operation. May be one of the most common operations. That's it. I'm seeking Stage 1 that it's worth investigating. We can bikeshed in stages one and two. This is about whether anyone is going to block that. It's worth investigating enough for Stage 1.

MM: Yeah, so could you put just the Bluebird example, go to that slide? Okay, so on the bluebird example, there's two points you're making here. One is the word order and the other one is the brevity. The pipe operator combined with `.call` does give you the word order. It would be `this.target() |> isPending.call(^)` or whatever it is. So the pipe operator combined with `.call`, does give you the word order rearrangement. And the brevity, I don't find compelling. So I do think that with regard to what's what's, what's important about your proposal is, in fact, redundant with pipe, and that if we end that and that it should not be the case that both of these could advance.

JHD: Yeah, All right, so I had a quick reply to that as well.

MM: And let me say I'm not blocking. I'm *reluctantly* not blocking – but not blocking. It certainly qualifies for Stage 1.

JHD: What's exciting about this proposal for me is that I can rely on `.call` not having to be present, and since most code does not run in a lockdown realm. So people can delete `.call` off functions and most code doesn't protect against because it's not ergonomic to do, but using the syntax would make it much more ergonomic to do. Pipeline and `.call` would not be sufficient for my use cases.

MM: No, I just wanted to acknowledge JHD. I understand the idea that there's that, that normal code can successfully defend itself against prototype pollution and long lockdown realm is unrealistic, the kind of code that you kind of shim code that you're talking about that we write as well is really very, very specialized.

JHD: That is true, and as KG has pointed out in Matrix, there are probably a single-digit number of people on the planet that explicitly and consistently write this robust code. With this in mind, the number of people who actually are intransitively using this code is quite large.

JSC: And I would add up what I want to add onto that is just returning to the point that whether or not we're talking about prototype pollution or whatever. I take your point that word order is solved by pipeline, but if you actually write a pipeline version, it's actually, it's actually a lot longer than either old version.

JSC: And I also would return to the fact that `.call` is quite common, and it is not just for a prototype pollution. Now, there is actually a lot of prototype-pollution protection happening. If you run the dataset, search through it, and look at the results, you would see that people are doing this a lot actually: people are calling intrinsic prototype methods on their own, using `.call` to do that a lot. There's also what I mentioned: swapping conditionally between methods. There's using the receiver as a context object. All of that is more common than that `.slice`, it’s more common than even `.push` occurrences. And this is excluding transpiled code. I didn't bother excluding transpiled code for `.slice` or `.push` or whatever.

JSC: So the pipe operator would worsen the brevity a lot. It would worsen it from baseline. Word order is important. And the biggest thing of all is the sheer frequency of this. I think that it's worth looking at this, whether it's worth optimizing in terms of just how often people are using `.call`. And, again, you can reproduce these findings yourself. MM, do you want to talk more about that topic or can we move on to the next on the queue?

MM: We can move on.

BT: Note that you have about eight minutes left.

JSC: Okay, I'm going to speed it up a bit.

JHX: I'm JHX and I'm the champion of the extensions proposal and I want to make it clear that in my opinion the essential difference between these two proposals – there are some differences but the only essential difference here is that extensions use accessor semantics. And this proposal uses bind semantics. This is the key difference. And the other parts…For example, extensions designed a special variable namespace. But that is not essential. It can be removed, although, as I have talked with you, I think it would be useful. But anyway, [the special namespace] is inessential. But I just want to point out that, if we want to choose between these two proposals, the key differences are accessor and bind semantics.

JHX: Could you go back to the data page?. Yeah, I really appreciate that. This is if we can see the data because that can say – and actually as I said that `.call` is what extensions and bind-this share, the same part of it of that. But the difference here is the bind and call in this data, we could notice that the `.bind` also has relatively large usage, but it may have some problems here because it [repeats the receiver]. Oh actually this should be the most of use cases and this is the actual is the part which in the olds by the by the operator that the prefix operator, it has been removed here. So for the data here I think. There are subtle problems here. If the proposal is about the bind operator, but the actual use case is for call - for bind I can't say that there are no use cases but it is very rare. Could you open the readme, because they have some more examples about bind?

JSC: I have only five minutes left so I want to move on to the next thing. What I would say would just be: First, I think that repeating the receiver is not that big of a deal. And in that sense that I would say, this operator does address it. It just addresses it a little more wordily, but still less wordily and with a better word order. And then the current dot binding situation and also, as I think you might be hinting, the explainer does have some examples where people are dot binding, something to a function that is not already contained in the receipt here. I would like to move on to the next one, since we've got four minutes left. WH, go ahead.

WH: I couldn't figure out the precedence of the proposal either from the description or the spec. The example I gave is `a?.b::c.d`. That's ambiguous in the spec.

JSC: What I would expect is that the `a?.b` would be the left hand side, but we can bikeshed that in a bit. Please do open an issue about that.

JSC: JHX [posted another precedence question], same thing, if I could just gloss over that I think that precedence can be a bikeshedding thing. If this nobody blocks Stage 1, we could just move straight onto SYG.

SYG: I do have a use case for `.call`. Not so much for `.bind`. I kind of agree with what has been said in the chat about the robust-code motivation being a pretty niche use case for bind. But for `.call`, I have a speculative future use case for code sharing, if we were to share code across threads. The problem is hard to solve because of closures, but top-level functions that don't close over anything are very nice. Seems a much more reasonable opportunity to share. What that means is you can't really ergonomically call them, syntactically with a custom receiver with this, it becomes very easy.

SYG: That said, this is a speculative future use case. Just wanted to note that I guess I don't think we should figure very heavily into whether we accept this now, but I also certainly have no concern with Stage 1.

JSC: All right. Thank you very much. Next up is YSV.

YSV: I'll try to make this quick. So I want to push back a bit on folks who have been saying that word order is not important because we have an entire proposal dedicated to this: pipeline operator. In addition, there are a few folks here who are, perhaps, not following the research in this space, but there is research that word order programming assists learners and adopting a language quickly and also helps reduce misconceptions about what a piece of code does.

YSV: I also wanted to say that I very much appreciate the corpus analysis that you've done here. That's really, really great. I was impressed by it. And additionally, I want to echo a little bit of what MM said. I know that you've done a lot of work here to try and not step on any of the other proposals, but I do feel like we have four proposals tending in the same direction without a concrete problem statement. However, I think the problem statement in this proposal comes very close to something that might be productive. All of them are quite disparate but the things that they're trying to do are similar: we're talking about pipeline, the extensions proposal, this proposal, and partial function application. So I'm curious about what will happen next. I do think that this deserves Stage 1. That's all.

JSC: Thank you, YSV. We've got one minute left, CZW, if you can be quick and then I will ask for consensus and I think RGB is echoing the last part of what YSV said.

CZW: So I'm just wondering. How do we handle them? Two proposals, have similar motivations.

JSC: So this is a good question. It's kind of procedural. To be frank, I'm not sure. I think that if either rivalry proposal goes to Stage 2, then that is saying that the other one can remain at Stage 1, but that saying that the committee is preparing Stage 2. We already had a situation kind of like this with the pipe proposal, with a bunch of competing rival proposals, with different styles. Yeah, so anyways, JHD, if you could be really quick and then I will ask for consensus.

JHD: We're not bound by any precedent, but typically have competing Stage-1 proposals a lot and usually at the time that something moves to Stage 2 is when we withdraw all the things that proposal obviates.

JSC: I think it would be cool if the process document made that formal. But yeah, I think that stuff like this has already happened.

JSC: I'm going to ask if anyone's blocking Stage 1. That's the time. All right, is that long enough? Because I'm out of time? If this proposal not blocking the extensions one, I guess, it's okay to move to Stage 1. Yeah, Stage 2 would block the other proposals moving to Stage 2, but Stage 1. Neither one is blocking the other. So is anyone blocking Stage 1. I'll give it twenty more seconds. Yeah, JHD on the queue with explicit support. Any other explicit support, feel free to put on the queue or bring up as well.

RGN: I'm not blocking Stage 1, but I did want to echo MM and WH and YSV and specifically point out that, in this space with the proposals that are trending in the same direction, each one has at least a quadratic increase in complexity when we think about interactions like precedence. So I would very much like to see coordination to coalesce them all into a single hopefully minimal cohesive approach for addressing these issues. I'm willing to work with the respective champions as necessary.

JSC: Please open an issue. I would say that the scope of this is fairly narrow. I mean, it's very frequent, but it's also narrow. It can cooperate at least with the pipe operator. With other stuff, maybe it can be more arguable. But I do appreciate your point. Do we have any blockers for Stage 1. If not, I guess it's Stage 1.

BT: Yeah. I'm not hearing any blockers.

### Conclusion/Resolution

- Stage 1

## Array Grouping for Stage 2

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-array-grouping)
- [slides](https://docs.google.com/presentation/d/1fP2D8hAnUJBLI4gr7YxfYS_I8vTSuugbhN2K_0YmJow/edit#slide=id.gc6f73a04f_0_0)

JRL: I am bringing back array grouping. Just motivating use case. I actually had to do so in Babel because old v8 didn't support stable sorting. Essentially allows you to bucket everything into little groups and then process the groups. The exact code here doesn't really matter. It's an actual code that I wrote. With the discussion from last time, we have settled on the default method returning a prototype-lessobject. This is to avoid collisions for things that exist on the `Object.prototype` like if for some reason you named your group `hasOwnProperty`, then you won't have any issue here. It'll just be a blank object for you. And there'd be a second method called `groupByMap`. That would return a Map to you so that you could use complex objects as your keys for any reason that you have.

JRL: One of the topics of discussion I want to bring up is whether this is actually useful for typed arrays? Every time I tried to use a typed array personally, I'm really only caring about uint8 and the bytes that it packs into if I were to write it to a file system or something like that. So I don't have a use case at the moment for trying to group things in a typed array. There might be one, but I don't have it. Whereas, when I'm using an array, I'm generally dealing with higher level concepts, I'm dealing with complex objects that could have properties that need to be sorted, etc. All kinds of weird things. I think there's a huge motivation for this to have to exist on array, but I'm not certain about type arrays yet.

JRL: Second point of discussion is, how do we treat holes in the arrays. Currently it treats holes as the undefined value. So you're going to get out an undefined and it'll call the callback with undefined. We could change it to option b, where it checks presents before trying to get the value, but I think we just need some kind of justification for why it should change. And I think the other es6+ methods are slowly moving towards treating holes as just undefined generally, so I think the current way is the correct way.

JRL: The last point of discussion is `Symbol.species`. Do we want to make the individual subgroups inside of the returned object into a subspecies of whatever your class that you're operating on is? So for example if I have a `groupBy` on `MyArray` class and I do `myArray.groupBy(...)`, should individual groups also be instances of `MyArray`, or should we just turn them into normal arrays? This is a bit loaded because we're also discussing whether or not we should support species generally or possibly reduce support in the language. So maybe this can be the first proposal that doesn't offer species.

WH: For holes, does it look through to the prototype or is it unconditionally undefined if there is no own property?

JRL: It currently does a regular get, so it'll do a prototype lookup

JHD: Yes, I was just agreeing that we should skip on typed arrays just like we did for `Array.fromAsync`. I think that like that, it's an important principle to try to make things that are similar have similar methods, but we shouldn't be bound by that in every case.

SYG: Yes, I agree with that.

MM: Don't do the species support. I think that the output of this is sufficiently unlike the input that even though `.map` uses species I don't think people will be surprised that this one does not use species. And as you said, we would like to reduce the use of species. I also wanted to say I support this. This looks really good. I'm glad to see this advancing

YSV: We have one plus one to no species from Shu. and also one from me.

JRL: okay, so I think we can remove species then, and I can remove that from the current spec text. We can skip the typed array which also helps. I actually have a basic implementation for typed array, but I didn't want to add in the groupByMap stuff because having four methods seemed like a lot. So this reduces it down to just array groupBy and groupByMap, which is nice. The only other topic of discussion then is what do we do for holes? And we could take it as silence is, let's continue doing the thing that's already there, which is a normal get treated as an undefined value.

MM: I support undefined.

JRL: Okay. So, unless there's more topic items in there, I think we can ask for Stage 2 for groupBy.

MM: I support.

YSV: I also support.

JRL: Okay. I was actually expecting a lot more debate. So this is really nice.

BT: OK, that sounds like we have consensus for Stage 2. Thank you.

### Conclusion/Resolution

- Stage 2
- will have groupBy and groupByMap
- will not use species
- will not be present on TAs
- will do an unconditional `get` for holes (= undefined, unless someone has put a numeric index on the prototype)

- Reviewers: MF JHD SRV

## Normative PRs for Temporal

Presenters: Justin Grant (JGT) and Philip Chimento (PFC)

- [proposal](https://github.com/tc39/proposal-temporal)
- [slides](https://ptomato.name/talks/tc39-2021-10/)

PFC: JGT and I are going to present a quick status update and normative changes on Temporal. This presentation will be similar to the one that we had in the previous plenary, and we will be asking for consensus on a bunch of minor normative changes. Some of these are changes in how the proposal works. Most of them are suggested by implementers, which we'll call 'adjustments,' and some of them are just to correct mistakes that we made when writing the algorithms in the spec text, which we'll call 'bugs.' Then we have a discussion item at the end because there's an adjustment that's going to require a bit more discussion and is not as straightforward as the rest. JGT will lead the discussion on that, after the simple ones.

PFC: Alright, to start off with the adjustments. The first one up is one that I already mentioned last time would be coming up, which is that we are removing sub-minute UTC offsets from ISO strings. Sub-minute UTC offsets are still possible with Temporal, and in fact in the time zone database there's still time zones that have UTC offsets that are not whole minutes. But they are no longer expressible in ISO strings. This was this was a request from the IETF working group that's working on standardizing our calendar extension. USA mentioned this in the August plenary, but the the change to the spec text wasn't ready at that point. It's ready now. So here's exactly what it does. We output timezone offsets in strings, only with the rounded minutes. And then when parsing strings, we accept precisions for the UTC offset in minutes. And here's a bunch of long strings with a lot of zeros, but if you're interested, this is an overview of exactly what's changing.

PFC: Another change that we'd like to make from strings, this one exceptionally originated from within the champions group when we found out that there databases that sometimes attached local timezone semantics to ISO strings. And so, if you If you are deserializing a plain type from a string with a Z UTC designator in it, and you're coming from one of these databases, you may find yourself with a nasty off-by-one-day bug. So what we're proposing is that strings with a Z in them only specify exact time and not wall time as expressed by the Plain types. You can still do what you could previously do, just with a little bit more explicit work around.

PFC: We'd like to bring the constructor of Temporal.Duration in line with the other ways to create a duration. Because it's possible to create it from a string with say, 1.1 hours. We already disallowed this when creating it from a property bag because non-integer numbers are potentially not exact. Before, the Duration constructor would silently drop the fractional part of numbers that were not integers. We'd like to change that to be in line with the other ways to create a Duration using Temporal.Duration.from(). So, passing a non-integer number to the constructor should throw.

PFC: This next one was a request from from FYT, who is implementing the proposal in V8, to simplify things slightly. Several operations have a relativeTo option which previously could be a Temporal.PlainDateTime or Temporal.ZonedDateTime. But if it was a PlainDateTime, the time component was never used, and this led to the potential observable creation of extra objects, because a Temporal.PlainDate was needed to pass to some calendar operations. So this is a small optimization. Here's an example of what might change observably.

PFC: We have another fix for an inconsistency in the order of observable operations, when calling Temporal.ZonedDateTime.prototype.with(). This is another small optimization that helps implementers. Here's a code example of what would observably change. It gets rid of some observable method calls on calendar methods.

PFC: Those were the adjustments where we actually change the way that the proposal works in some way. Now, there are a couple of bugs to run through. So, here was a mistake where we had unintentionally written the spec text such that property bags used to represent a Temporal.PlainTime unintentionally had to have all six properties: hour, minute, second, millisecond, microsecond, and nanosecond. So that code like the above actually wouldn't work if it was implemented exactly according to the spec text. Obviously we'd like to fix that. (next slide) We had an off-by-one string indexing error in the spec text with parsing Duration strings with fractional parts in them. (next slide) We made another off-by-one string indexing error when parsing time zone UTC offsets with fractional parts in them. (next slide) Another thing while we're on the subject of time zone offsets is this: yeah, we forgot an `abs()`. So things got an extra minus sign in the string when they weren't supposed to. (next slide) We have another bug in Duration string serialization, where we didn't account for zero decimal digits being requested. So this changes the algorithm to output what was intended here. (next slide) We had an accidental repeated line in one of the spec text algorithms that sadly had a large effect. (next slide) At one point in the history of the proposal, we had some fallbacks like this where you would fall back to a built-in method if you set a property shadowing a prototype method, that was undefined. We removed those a long time ago, but this remained unintentionally. It's kind of harmless, but we got the feedback that it wastes memory in implementations, so we'd like to remove it. (next slide) There is a mistake in the formal grammar for ISO strings: an ambiguity, which we're correcting. (next slide) There is another typo that turned out to be normative if you implement it the way it was typo'd.

PFC: And then, we have a couple of bugs we discovered in the run-up to the plenary after the advancement deadline. I know this is not stage advancement, but as a courtesy we'd like to note that the following three slides are four things that were added to this presentation after the advancement deadline. So if you feel like you need more time to study it because it wasn't available 10 days in advance, then no hard feelings. That said, this one was caused by two arguments reversed in the order in the spec text, and so the since() method of Temporal.PlainDateTime and Temporal.PlainTime would produce the wrong answer if you had a certain setting of largestUnit. This one was not intended, because we wrote the polyfill and the docs and the tests to assume the other way, but these arguments were flipped in the spec text. (next slide) Another bug that I think came out of that, somebody spotted it while looking at the previous bug, was that you'll get the wrong sign in some cases out of PlainTime.prototype.since() and until(), because we need to multiply something by the sign. (next slide) And then from last time you might remember, there was an item where we changed things to use the remainder operation instead of modulo. There's confusion because modulo in the spec text is not defined the same as the `%` operator in the language. Anyway, those were mostly fixed but there is one straggler which we discovered at the last minute. So, I'd like to ask for consensus on those normative pull requests. Hopefully, with the three that we added later, but if necessary without. If people have questions about any of these items, I'm happy to answer those first. I can't see the queue while I'm sharing my slides, though.

BT: The queue is presently empty, but we'll give it a few seconds here for folks to put in their input. the benefit of sleeping or of speaking so late is that everybody's tired.

YSV: I'm a little late on this because I was thinking about something else, but I believe you discussed options bags, the work that you were doing around options bags?

PFC: Yeah, that'll be after this. That's going to be the discussion item that JGT will present.

YSV: Okay, then I'll wait for that.

BT: All right. Right, Any other? Okay. That's otherwise, I think those normative PRS are good to go as far as we're concerned.

PFC: All right. Thank you very much. I'll turn it over to JGT.

JGT: That sounds great. Thanks PFC. And thanks everybody for hanging in after a long day and a long week and also thanks to the implementers that I know. This is a really long spec and I just want to express gratitude to FYT and the other folks that are working to implement this because it's a long thing to get through and you guys have put in a lot of lot of great feedback that's really made it better, thanks again.

JGT: So we're going to talk about options bags right now. And the context here is we thought we had a PR that was ready to go. And as is sometimes the case, it turns out, it wasn't ready to go. So first, before I get into the PR itself, let me provide some context. So, the use case that we're concerned about here is when you have an interconnected set of methods in the larger API set like Temporal. It's highly likely that you're going to see options where there are options that are optional in some context, but in other context, they're going to be required. This is not unique to Temporal, right? You imagine a hypothetical file API, where you create the file with no metadata is required. But if you have a setMetadata method, then course you're going to require some metadata. Because what's the point of calling a setMetadata method without metadata? And so that's another kind of example of this problem of where you have the same shape of arguments of positional arguments, which in ECMAScript is done via options bag where one is required in one place and optional in another. So in the Temporal case, here's one example, where you can call until() and since() to measure the duration between one PlainDateTime or whatnot and another, and you can call it with no arguments, right? Which essentially means don't round the result at all, or you can call it with some arguments that do change the units that come back in the results. Let's say the unrounded version gives me the PlainDateTime, the commute, the duration, and the duration would come back would be (because it's October 27th) it would be 10 months and 27 days and 6 hours and 13 minutes all the way down to nanoseconds. Or you could decide, you know what, I don't really care about that. Nanoseconds, or seconds, or hours. So I'm going to call this with the `smallestUnit: "day"` option or I could add other options on that, right? I can control the largest unit. So let's say, I want to know the number of hours since New Year's I can call that as well. And so in almost all cases in these, these options are used in a variety of places around Temporal. And in almost all of those, the options, as you'd expect from the name, are optional, right? But there are a few cases, like specifically the round() method, where that's not the case. And so the reasoning for that is sort of obvious, that if you're calling PlainDateTime.since() the default is clear, which is don't do any rounding. But if you're calling a round() method, then it doesn't make sense to call the round() method with no parameters, because it doesn't do anything, right? You need to tell it what to round to. And so therefore the parameter is required in that case. And so the same shape of these objects is shared across these methods. The only difference between them is which ones are required and which ones aren't.

JGT: That's the context. And we've been going back and forth on this with JHD for a few months now to try to figure out, is there something that (??)? Because JHD's concern is fairly reasonable, which optional arguments should be optional and required options should have a different shape to distinguish them from optional ones. And so there's an inherent trade-off here between that that line of thinking and trying to be consistent across different different methods of the same set. Through that back and forth and, you know, thanks again to JHD for persisting with us as we try to work out a compromise, that would work for what works well, and I think we've actually found that compromise and we thought it would be good enough. It wasn't quite there yet, but we did want to share what we've come up with that I think meets everybody's needs as far as from the Temporal champions' standpoint it maintains the ability to use options in different places. But from JHD's standpoint, it makes it less. It does vary the shape between the required and the optional case to clarify that. So we could go to the next slide. I'll show you what we came up with. This pattern should be familiar to folks if you're if you used Webpack config or jQuery or any any one of many userland libraries, that tend to have strings stand in for more complicated objects. And so that's what we're doing here. The idea is we would extend the API here in the required argument case to allow a literal string to stand in for a property bag. And so, in this case, I could call duration.round() and I could call it with a literal string of `"seconds"`, which means round this duration to the second, or I could call `.round({ smallestUnit: "seconds" })`, which does the same thing. Or I could also reuse the same options bag that I would have used in until() and since() and use that in duration.round(). And so this pattern, I think kind of addresses those needs as I mentioned before, what's nice is it's a non-breaking change, so it doesn't interfere with how tests or other folks are going along. And it allows this and it actually makes the API more ergonomic which is why when I showed this to Temporal champions, they were like, yes. Yes, let's do this. This looks better. So we're pretty happy this at this point. There is one open issue that I wanted to discuss that we haven't yet reached a consensus opinion, but, you know, so why don't we go to the next actually?

JGT: So the open issue is of all the methods where this property would be applied in Temporal and just like six or seven of them. There's one method that works differently that has this issue. So context around the method is when you have a duration. Durations do rounding in a slightly different way from from the way other round method works, and the reasoning for that is, let's say you have a duration that is three years, two hours and 26 seconds. And so what you want to do is first of all, get rid of anything smaller than hours, so you can say `duration.round({ smallestUnit: "days" })` and it takes off the time. But you can also do it on the top end. You could say well I have a duration of two years and I really want months in my results. So you can say `duration.round({ largestUnit: "months" })` and you end up with a 24 month duration as the output and so those two use cases exist that don't exist in a PlainDateTime, because there's no such thing as a PlainDateTime with no years in it. It's not a PlainDateTime anymore. And so, we chose to make the shape as either you could provide a smallestUnit or a largestUnit or both, but you can't provide neither of them because that's a no-op and it doesn't make sense. It's clearly a programmer bug. So we chose to throw in that case. So the question is, if we move to add the literal string as a synonym for the smallestUnit property, is the smallestUnit property always required when we provide the object form of this, for this method? And so the two ways of looking at it is, first of all, yes, it must. It always must be required, because if it's a required property, it should be required everywhere. And the other point of view is, well, there are going to be some cases where that might not be the best decision. So in the Temporal case, where you could do one or the other or both, but not zero. You can have an example of mutually exclusive properties, where you can either have one or both, but not all those who have one or the other but not both. You can have a case where a primitive an aggregate multiple properties. So like in internationalisation cases, you could have a Locale string that contains the calendar. So, you have a little The (??) corresponds to two properties when you move that out into a into and they object form (??). So the way I look at this is there's two mental models you could use to to think about what the the literal string means, right? One mental model is with a literal string a one-to-one projection of the string into a property. And so, of course, because it's one to one if you have the literal and you have the property that they both need to have the same semantics as far as whether they are required. The other mental model, is that, well, the literal string is an ergonomic shortcut for a prefilled checked (??). And that ergonomic shortcut could correspond to one property, could correspond to multiple properties or there could be other valid shapes of that object. That wouldn't be what the literal string projects at all. And so I think it's safe to say that JHD's point of view is that must is the right answer here. The Temporal champions are favorable to the should option because we see the flexibility being helpful in in some cases, but but honestly, this is one method and kind of a corner of the API. I don't think anybody would say don't ship the whole Temporal proposal because we can't, you know, can't have a perfect version of this method. I think that the Temporal champions are pretty flexible, that our goal is, we want to ship this thing. And so we've been working on it for a long time and we really would love to get some feedback from the committee. Is there a consensus opinion? Both about this, this open issue, as well as the the pattern overall. That way, when we come back in December, we're more confident that there's not going to be objections we haven't heard already. So with that thanks again for your attention. I know it's a long day and I'll open it up.

JHD: I just wanted to clarify my point of view, which is same as my topic: when there's method where it makes sense that there is one required thing, I actually really, really like this compromise. It is very common in the ecosystem. eslint rules often will take a string as config or you can replace that with an object that the string is default for. Node's new “exports” feature in package.json, you specify a string in any place. You can put a string, you can put a more complex object if you like, the string is always an equivalent for a default more-complex object. So I think that makes perfect sense. My point of view is not that all of the Temporal methods here should have one required thing. For this `duration.round()` method in particular, I accept the logic of why it makes sense that one of the things is required at a minimum and I don't think that we should force one of them to always be required and reduce the intuitiveness of the use cases of the method just for some principle. But given that one or the other is required it seems really weird to me to have an options bag only where, you know, one or the other is required. That's a complex mental model to reason about. And it also seems weird to me to just arbitrarily pick one of them as the string value and I don't don't have a solution there.

JGT: And just to quickly respond, the main reason why we chose that one to be the default is because the other round() methods and Temporal use that as the default. And so we felt and also it's from what we understand it's most likely to be the most common use of this. So the largestUnit is kind of an uncommon case that we weren't as concerned about.

JHD: That reasoning also makes sense. It still results in something that I think is weird.

WH: I am very uncomfortable with the `round` example. If you don't specify a unit of rounding, then the clear thing to do is to not alter the value. It's like the notion of the number zero. If you sum up the elements of an array of integers — it's not a bug to pass an empty array to a function which gives you a total of the elements of the array. It just gives you the additive identity element. So for an option bag which doesn't have a smallest unit, you should just get the identity for rounding, which is to return the value unchanged. That will solve a lot of problems here. I'm fine with retaining the string API variant for convenience. That should allow option bags, which do not have a `smallestUnit` to be passed to `duration.round`, and `duration.round` can still do interesting things when it gets a `largestUnit`.

JGT: And so, just a quick response of why we chose to make this required. As there are some platforms that do have similar round methods, where unit is assumed. And oftentimes, it's assumed to be a second, and so we were concerned that people who are coming from this platform and coming to ECMAScript would call the round method expected to round to the nearest second and then be dismayed or or in some cases not even discover that that wasn't it exactly. So that was our logic. You know that's certainly valid, I think, your point and it sounds like CM's point next in the queue is similar to that. So we're not vehemently opposed to to allowing it to be a no-op, but that sort of other platform was why we made the decision.

WH: Yeah, I'm not comfortable with making the experience in ECMAScript worse because of some other platforms.

JGT: Yes. Thanks for the feedback.

CM: WH said most of what I was going to say. You were contrasting `round` with `since`, which generates a value and then have the option of rounding it, and round kind of starts with the value that you give it and so if you don't give it any rounding options it doesn't do anything, and that seems perfectly consistent. It's not very useful, but it seemed perfectly consistent and I like the principle that the parameter always has the same shape. So, if the options bag is optional then the options bag should always be optional. Just gives a single simple consistent rule that developers can just learn.

MAH: Yeah, so I realize there's a lot of precedent for having primitives and option bags getting overloaded like that. But it feels like it's something we have been moving away from and the examples are usually from older libraries or for backwards compatibility reasons where there used to be only one value that could be customized and then you need to introduce multiple. So you choose an option bag. For a new API I'm a little confused as to why we're looking into overloading a primitive with an options bag from the beginning. What is the problem with requiring an option bag? Is it the verbosity?

JGT: Just from why the champions were so excited by this possibility, when we came up with it, that it kind of makes grammatical sense, you know, just as far as reading and writing it, it felt really natural. Because you say well, I round to the day, or I take the total of a certain unit and that a lot of it had to do with how clear and how natural it was for Duration, we were doing where there was one property that was clearly more important than everything else. And so that was really the justification. It wasn't like trying to fit the pattern into a summing use case, that were kind of didn't sense, but it was more about this is the primary usage of this API and so it made sense to use that short form. I think JHD you have a reply.

JHD: I've seen no evidence that the community has moved away from this pattern. Every new eslint rule, which has no backward compatibility constraints, may or may not use this pattern if it makes sense. Node's ESM support and the “exports” field in package.json was added a year or two ago, and there were no constraints forcing the string and option pattern, it was done because it's an ergonomic and more usable thing - precisely because it's more concise than the object form.

MAH: So it's more like overloading is more common when there is typing involved. I mean, package.json is JSON. It's not typed.

JHD: Neither is JavaScript.

MAH: Well, you know what I mean.

JHD: package.json has a schema and “expected types”. So it is typed in the same way that most JavaScript is typed: there's expected things, and even in that case, the overload is often chosen because it is ergonomic. I'm sure it's not universal. And sure, there are some people that, you know, some sections of the ecosystem have moved away from it, but like I don't think that it's accurate to say that the community has moved away from it. It's just not something I've seen.

SYG: Could you recap for me why we arrived here again? Like what was the actual issue with requiring the object bags?

JHD: I raised the original concern because an options bag is usually optional and it happens infrequently, but it is always weird when I find an options bag and some items in it are required. It's harder to reason about what I'm supposed to pass in. Typically I can omit an object argument at the end of an API call, and something still happens. So, it just seemed weird. And I brought that up and thought that, I think that if there's a required argument, it should be positional because that's the way most APIs are offering.

SYG: Is the confusion that the entirety of the object cannot be omitted in all functions that take an options bag, or is the confusion that there are properties within an options? Well, I guess it's a sub case.

JHD: Those are the same thing.

SYG: Yeah. Okay. All right. Thanks for clarifying. I can add another queue item.

YSV: In many ways, what I had to say is actually aligned with what you had to say. In the other APIs for this where I could actually understand putting the default, but for round, you know, I really think round works best with the options bag. I don't think that options bags need to be optional. We have many APIs where this isn't the case. Also, of course, this is JavaScript, but also within the context of HTML, this is a pretty common pattern. So I don't think that this would be unusual. Plus the fact that the options bag can be reused across multiple APIs, which all have to do with the approximation of time. So we have until() and I think there was one other I forget, but I liked this sharability. I think it makes sense for round(). And I think the best option here is what we call an options bag, but I think it should really be thought of as a configuration object because that would be clear about what it is.

JGT: So, it looks like the queue is empty. Let me see if I can try to summarize the feedback I've heard, because I want to see if we can maybe come up with what the consensus is. So I'll give that a shot. It does feel like I've heard a lot of consensus that people like the idea of using a literal string stand in for an options bag. I think Reversal feedback. I wasn't quite I've heard pretty. sure you live. (??) if your feedback was supportive of that, but I don't think I've heard any other objections besides that So can we get sort of consensus on that portion of it, that allowing a string to stand in for more complicated object is okay? Any objections to that?

WH: As I mentioned, that seemed fine to me. The case I was concerned about was passing an options bag without a `smallestUnit` member — that should do no rounding. I take no position on missing options bags.

JGT: So are you objecting to being able to substitute a string in that case?

WH: No, I'm supporting the ability to use a string as a shortcut unless it causes some other problems which I'm not aware of.

JGT: Makes sense. So I'm hearing full consensus for using a string as a shortcut, so that's great. I also heard several comments around supporting empty empty options bags in this case, or no smallestUnit parameter, and I don't think I heard objections to that. That's certainly counter from the decision that we made as a champions group, but honestly, I don't think anybody cares that much about supporting this empty case. So is do we have consensus that if we change this to support the the the empty case would that be something that the committee would have consensus on any objections to it?

PFC: I'm not in the queue because I'm showing the slides, but just some context on that, is that we originally felt that empty options bags shouldn't just do nothing. If you're calling the round() method with an empty options bag, then having it do nothing is probably not what you meant. This was in the interest of preventing bugs. That's the flip side of this.

CM: I think there were some objections to strings. Just a general overloading, a parameter to sometimes be a string and sometimes be an object seems sketchy. I'm not opposed to them because as I said, there are cases where it happens. I think if we go that way, it should be used sparingly. And here with what I've seen, I am not sure it really cuts for the use cases, but, I think others expressed the same thing that for round(), for example, always requiring a bag.

JGT: Maybe I'd ask the question, would anybody, you know — because I have heard a lot of — it seems that there's a fairly enthusiastic thumbs up and fairly less enthusiastic, maybe even mild thumbs down on that one. It does seem to be kind of a personal preference thing depending on maybe what people are used to and what they're used to seeing, but is this something where there are objections? If we decide to put in the string alternative would there be a blocking objection to do so? Because we do feel like it actually improves the ergonomics, the API we played around with.

SYG: For which? I already know. I'm around her for the other. (??) The other ones seem problematic

JGT: Right there, was there to clear, its type (??) that there's two APIs in this: round() and total(). So it's round to the day and total of days.

SYG: And for total(), there is no either/or, but not nothing.

JGT: Yeah, it's only one. Even in round(), all the other types don't have this either/or. It's literally only Duration that has this issue.

SYG: So where there is a clear projection, that seems fine for convenience. It just seems like a completely different motivation to me which, so I'm fine with the string convenience overload, where there is a clear projection. What I have issue is I guess that decision saying something about the precedent of optionality of options bags, which I don't want to set. I don't really see any compelling argument for not requiring options bags. I mean, they're not optional bags. They're just bags of options.

JGT: Yeah, I think my hope is, I want to see if I can segment the, you know - and I agree that that's the next thing I wanted to discuss. But before we get there, I want to, I'm hearing a rough consensus around this string substitution. So sorry, I'm unfamiliar enough with the committee. How do we know whether a decision has been made?

SYG: Sorry. I still need to clarify. You are trying to get consensus on the string overloads for all the methods? Or excluding round() because round() is problematic.

JGT: So round() and total() are the two methods we're looking at, and then of all of the round() methods of which, there's, like, six or seven because there's a lot of different Temporal types. It's only the Duration round() that that has this either/or issue. And so there's a little bit of a consistency issue if we were to have it on all the others but not on Duration. I think that would be a little weird. I think the consistency is helpful enough to save it. Will you have a method called round()? Usually means round the bottom right across numeric rounding across all of their types and Temporal so that would be the logic using round in the same sense here because it's more consistent and more familiar, but that's actually what I'm asking for here is. Do we have consensus on being able to use the the string shortcut for round() and total()? And then, we can move on to, well, do these things have to be optional in the first place? It sounds like there's a few related issues there, but I'd love to see if we could agree on the string part and then move on to the rest. That's awesome. We are coming up at the end of the time box. I have about two and a half minutes left.

SYG(??): So, let me ask another question before we go, I guess given that the Temporal champions are excited about the ergonomics improvement here, regardless of how you arrived because of the disagreement about API shape of options bags, regardless of that. Would you think that the ergonomics independently motivate you adding string shortcuts anyway?

JGT: We think so. I mean we think it helps the other issue and it's just good on its own merits. Okay. All right, we're running low on time. What's the normal process around knowing whether we made a decision?

WH: You could ask for consensus about having a string shortcuts and having it always means the smallest element.

JGT: Okay. I'd like to ask for consensus on the string shortcut that always means the smallest unit. Any objections? [silence] Okay!

JGT: So then there are two other issues here. One is whether we should support no arguments at all. And whether that can mean a no-op and I've only heard suggestions that we should do that. I know PFC and the champions, you know, we're not huge fans of that. But I think that's something we could discuss as the champions group if there's strong consensus on the committee, that that's something that we should allow. And SYG, thank you. I almost feel like you and JHD should have a conversation about the optional options bags — I'm not sure we really have a dog in that hunt, but I'd love for Temporal not to be on the hook to make that decision.

JHD: I think it's always fine to say let's not set a precedent. Let's just argue about it again if it comes up, like if SYG is not comfortable setting a precedent it should not be taken as one.

BT: Okay, I think we'll probably want to return to this item and overflow time if we can get time since the time box elapsed. That would be great. Well, I moved this to potential overflow and we can hopefully come back to it at the end of tomorrow.

### Conclusion/Resolution

- Consensus for adding a string overload to the `round` and `total` methods, which will mean the smallest unit
- not setting a precedent about whether options bags are optional

## RegExp extended mode and comments

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/rbuckton/proposal-regexp-x-mode)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkfl_R_GWK0hIILFQDg?e=FjB377)

RBN: So again, at the last TC39 meeting I presented on a number of different reg ex features that I was looking to have the committee consider adoption of. One of those is what's known as the extended mode in many languages and part and parcel with that is inline comments, in regular expressions. So motivations behind this, I felt that at the last meeting that we kind of showed some of these fairly. Well was that and we've even discussed it a little bit in this one. Is that regular Expressions? Can often be complicated for more than just the simplest use cases or the simplest patterns, They can sometimes become hard to read especially given the terse syntax of the regular expression language. so, one of the values of what I'm trying to propose today is the ability to actually introduce documentation within a regular expression. This helps to improve readability, especially with multi line patterns, if you're using the regex Constructor as opposed to a regular literal and also helps with the introduction of insignificant insignificant white space so that Nord allowing that excess white space characters can be you to split a more complex pattern over multiple lines. Addington indentation, Etc. so, what I am looking to propose today is a x-mode. This is many other languages that have regular expression supports have something like an X mode. Relax really has to in thats their initial x-mode did not treat white space within character classes as insignificant. And as a result, they added a XX mode, which is a further extended mode, which primarily was designed to add that capability within a regular expression. That is an extended mode. Any unescape whitespace characters are considered as insignificant so you can add excess base to a regular expression pattern even a reg literal and any of that white space is considered to be ignored the purpose of a pattern when used in a regular expression, created via the regex regex Constructor. You can also introduce line comments, which treats the rest of the line as again as if it didn't exist within the pattern, adding the mode does not allow label. Sorry does not enable multi line regular expression. Literals. It only enables insignificant white space within a reg ex literal, but if again, you're using the regular expression Constructor and a string literal or a string.raw tag template literal, which In some of the examples, then you would be able to use multi-line comments.

RBN: So, another feature I wanted to discuss is inline comments. So there's basically two comments syntaxes that are used in many other engines. The inline comment is essentially a group that doesn't actually capture anything and doesn't actually become evaluated. This is usually delineate it as or denoted via a group expression that has questioned plus hash and any content within that comment is essentially removed from pattern with several restrictions. The text, the comment may not contain open or closed parenthesis characters, unless they are escaped. And if you're using this with a regular expression, literal, you would have to escape any forward slash. Other characters so that you aren't exiting the regular expression rule. Aside from that, there is no other conflicts with existing syntax and regular Expressions. So a inline comment could be used. An inline comment could be used in a reg ex without requiring any other flags doesn't require x-mode. It doesn't require Unicode mode or anything else that would like to opt into more specific syntax because this current syntax is currently a syntax error within regular expressions. So, here's an example of inline comments, so you can see. In this case. I have a regular expression literal that has an inline comment, that contains a forward slash character. In this case. It's required to be escaped for the syntactic prefer that regexp parsed. The second example shows a regex that's using a template string. It uses string.raw, in this case, so that we can use Escape characters without having to double Escape them. But it also shows that the pattern does support multiple lines and is supported with insignificant white space when in X mode. the other feature that X mode supports in addition, ignoring, or lighting whitespace characters is the single-line, comments. The single line comment is a hash character. followed by any number of characters and ending with a line Terminator or the end of the pattern. and that comment is removed. It's not something that we would support within the regular expression literal syntax. It does require use of the X mode. So that the hash character is Treated specifically by treated in a certain way by the pattern. Inside of a x-mode, the hash character must be escaped. When it's outside of a character class. So if you're going to use a hash character in as part of your pattern, you would have to then Escape it when you're in x mode. Here's another example of a pattern that uses multi-line or use a a single line comments to support commenting Expressions, so that you can provide more context and improve your documentation.

RBN: And that's basically all I wanted to present with this. I'm interested in seeking Stage 1 and want to see what they have to say in the queue.

JSC: I would use white space padding and comments with every regex.

KG: Yeah, I definitely support this, I think it's a good idea and you have done a good job of figuring out how to make it workable. The only thing I wanted to bring up is that I'm a bit worried about brackets in inline comments because Ron, as I'm sure you know, but just for everyone else: regexes have this thing where they're parsed twice, first with this very permissive grammar, and then parsed the second time using this much more precise Pattern grammar, and I don't think we can realistically modify the permissive grammar, and it has this character classes have to balance thing. And I think this would mean that your brackets would have to balance inside of comments, which, like, fine, that's not the end of the world. And it's possible I'm wrong about that and there's some workarounds. I just wanted to bring it up as one small gotcha, that I don't think there's a way to avoid.

RBN: It would be useful to have that on the issue tracker as something to investigate. I wouldn't be opposed to requiring you also escaped brackets, if that's the case, but I'd also need to check and make sure there's nothing else that we'd have to worry about as a gotcha such as - well, parentheses are already required to be escaped in inline comments, but the question remains, how would that be treated within a single line comment or etcetera. So I'd be interested in investing in a little bit more. So it'd be useful to have that.

KG: Yeah, I'll open an issue.

NRO: Is there any syntax ambiguity with allowing line comments within regexp literal? Because I think this is not ambiguous with existing syntax.

RBN: I would have to investigate currently. We don't allow new line in regular expression literals because that kind of breaks the syntax, so I'm not sure that whether there's an issue.

KG: There are ambiguities. I just put one in the Matrix.

```js
​​let value = /regex#/
a+b/x
```

NRO: Okay. Thank you.

RBN: Yeah, so this is why -- and this was something that was brought up by Waldemar at the last meeting as well regarding this -- which is why I added the restriction between the last meeting and now to block forward slash characters without escaping.

WH: I wanted to echo the point that was just raised about various characters inside comments causing trouble: square brackets, slashes, backslashes, for example `/(?#[/)/`. It would be undesirable for a variety of reasons, which MM can explain some of, to have to modify the lexer grammar — the permissive grammar which finds the end of a regular expression. Also, having the lexer’s permissive grammar diverge from the grammar used to parse the contents of regular expressions will also cause serious problems.

RBN: So, Yeah, yeah, as I was saying if it becomes necessary, I think it's completely reasonable to require escaping anything that we would find to be invalid inside comments.

WH: Inside comments too? Okay.

PFC: I just want to say I strongly support this. I think having seen it in other languages' regular expression engines. I think it really is a big win for learnability of the language, because people can look at a code example containing a complicated expression and there can be, you know, an inline description of it. I think that's just like almost an inexpressibly huge win.

BT: Thank you, Philip. With that, the queue is empty.

RBN: In that case, I am seeking Stage 1. Are there any objections?

BT: Put any objections that you have into the queue. Give it another minute. Few seconds anyway. [no objections] Right. I think that's Stage 1. Thank you very much. And JHD just put an explicit +1 on the queue.

### Conclusion/Resolution

- Stage 1
