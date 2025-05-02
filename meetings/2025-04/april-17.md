# 107th TC39 Meeting

Day Four—17 April 2025

## Attendees

| Name                   | Abbreviation | Organization       |
|------------------------|--------------|--------------------|
| Chris de Almeida       | CDA          | IBM                |
| Waldemar Horwat        | WH           | Invited Expert     |
| Michael Saboff         | MLS          | Apple              |
| Nicolò Ribaudo         | NRO          | Igalia             |
| Luca Casonato          | LCA          | Deno               |
| Dmitry Makhnev         | DJM          | JetBrains          |
| Bradford C. Smith      | BSH          | Google             |
| Samina Husain          | SHN          | Ecma International |
| Ron Buckton            | RBN          | Microsoft          |
| Istvan Sebestyen       | IS           | Ecma International |
| Daniel Minor           | DLM          | Mozilla            |
| Jesse Alama            | JMN          | Igalia             |
| J. S. Choi             | JSC          | Invited Expert     |
| Ashley Claymore        | ACE          | Bloomberg          |
| Gus Caplan             | GCL          | Deno Land Inc      |
| Zbigneiw Tenerowicz    | ZBV          | Consensys          |
| Eemeli Aro             | EAO          | Mozilla            |
| Mikhail Barash         | MBH          | Univ. of Bergen    |
| Ruben Bridgewater      |              | Invited Expert     |
| Shane F Carr           | SFC          | Google             |
| Daniel Ehrenberg       | DE           | Bloomberg          |
| Dominic Farolino       | DMF          | Google             |
| Michael Ficarra        | MF           | F5                 |
| Luca Forstner          | LFR          | Sentry.io          |
| Kevin Gibbons          | KG           | F5                 |
| Josh Goldberg          | JKG          | Invited Expert     |
| Shu-yu Guo             | SYG          | Google             |
| Jordan Harband         | JHD          | HeroDevs           |
| Stephen Hicks          |              | Google             |
| Mathieu Hofman         | MAH          | Agoric             |
| Artem Kobzar           | AKR          | JetBrains          |
| Tom Kopp               | TKP          | Zalari GmbH        |
| Kris Kowal             | KKL          | Agoric             |
| Ben Lickly             | BLY          | Google             |
| Rezvan Mahdavi Hezaveh | RMH          | Google             |
| Erik Marks             | REK          | Consensys          |
| Keith Miller           | KM           | Apple              |
| Mark S. Miller         | MM           | Agoric             |
| Chip Morningstar       | CM           | Consensys          |
| Justin Ridgewell       | JRL          | Google             |
| Daniel Rosenwasser     | DRR          | Microsoft          |
| Ujjwal Sharma          | USA          | Igalia             |
| Chengzhong Wu          | CZW          | Bloomberg          |
| Andreu Botella         | ABO          | Igalia             |
| Andreas Woess          | AWO          | Oracle             |
| John Hax               | JHX          | Invited Expert     |
| Jon Kuperman           | JKP          | Bloomberg          |
| Philip Chimento        | PPC          | Igalia             |
| Richard Gibson         | RGN          | Agoric             |
| Romulo Cintra          | RCA          | Igalia             |

## Disposable AsyncContext for Stage 1

Presenters: Chengzhong Wu (CZW), Luca Casonato (LCA), snek (GCL)

- [proposal](https://github.com/legendecas/proposal-async-context-disposable)
- [slides](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit#slide=id.gc6f73a04f_0_0)

CZW: This is CZW from Bloomberg, with LCA and GCL from Deno, and we are going to present disposable `AsyncContext.Variable` today, and what do we have with `AsyncContext.Variable` is we already have `AsyncContext.Variable`, and it is good to fit—to provide a strong encapsulation to both users and frameworks that their mutations on a single `AsyncContext.Variable` cannot be leaked out of the function scope they provided to the— as a variable to the variable that run, and so this provide a—provides a strong guarantee that and a mental model that their notation can only be seen by a subtask inside of the function scope. And this API and pattern also fits in well in manual web APIs and frame works, given that they can use if `AsyncContext.variable` to run as a job repolice station to code ex. So the code can just replace what they have as a listener to wrap the listener, and there’s no change to the function, shape or function parameters. However, if a user wants to modify the `AsyncContext.Variable`’s value, that encounters an issue that they cannot use this planned pattern in their arbitrary context generator like constructor, given that we cannot—we cannot replace the super or break or continue, like, key words like this in the new menu function scope with a very naive replacement.

CZW: So let’s have a look at a recap of how the `variable.run` works. So in a short overview, an `AsyncVariable.run` can be seen as equivalent to a try/catch scope that replaces the `AsyncContext` mapping with a cloned new mapping with the new `AsyncContext.variable`’s value being swapped, and when the function is being evaluated, if there is not any interruptions, we will swap back the `AsyncContext` mapping to the previous mapping, so we might find it kind of similar to what we have with the using decorations, so can we enter variables without creating a new function scope to address the problem that we presented.

CZW: So we would like to present that. Can we introduce the `using` declaration support to the `AsyncContext.variable`, given that they are semantically similar and it can also adjust the prevalence that we just raised and fix existing functions context well without requiring users to refactoring their function in order to use yield or any kind of these key words. And the question is can we do something similar to what we have when we introduced the using declaration support to the `AsyncContext.variable`? We still want to preserve the encapsulation that the `AsyncContext.Variable.run` supports, and we want the usability improvements that it can be done with the use integrations, so we will visit the problems that we might face with user integrations on an `AsyncContext.variable` later, but let’s see what we can do with this support.

CZW: So the primary use case that we have is that what—if we want users to use, to create their performance tracing spans on the web, so we have said that `variable.prototype.run` fits good in what frame works where these frameworks takes a user function and sets up the context for users, but if a user wants to perform mutations on the `AsyncContext.variable`, they need to refactor the code in order to use the run pattern, but in the tracings case, users don’t want to refactor the code just to add tracing spans to record how their operations perform, so this `.run` pattern is kind of harder for users to adopt in the existing functions context. So what we want is not just to add declaration support for `AsyncContext.variable`, but all the library wrappers that could wrap under the `AsyncContext.variable` . So library wrappers can extend the functionality of an `AsyncContext.variable` and provide additional support for a tracing library, they can wrap their span around the `AsyncContext.variable` and provide methods like setAttribute for users to conveniently access this functionality without refactoring their code heavily.

CZW: So comparing to the `AsyncContext.variable` proposal, which is at Stage 2, this new proposal builds on top of the existing `AsyncContext.variable`, but we want to introduce syntax integration to improve usability, just like how we did with promise and async/await. Like, we have promise and we have `promise.then` , and it’s kind of an improvement to introduce async/await syntax support on top of promise, but we still need promises functionality inside the language. So given this similar idea, we want to improve the `AsyncContext.variable` with the `using` declaration to help you observe to reduce—avoid refactoring the code in order to mutate a single `AsyncContext.variable`.

CZW: Before we go to detailed solutions, I would like to go to the queue to see if there are any questions regarding the moderations of the proposal.

SHS: In some cases it’s impossible to adopt run, such as in test cases like jasmine and others.

CZW: Yeah, I think, yeah, that’s kind of an observation that we found in the test frameworks, and they provide before and test and after test, so all of these functions are separated into, like, different function scopes, so in this case, the `AsyncContext.variable` to run pattern does not fit in, but to be honest, we—like, in real world use cases like tracing, the tracing library can provide all the alternatives to address the testing facilities, so even though it’s not the primary concern that we raised this new proposal, but I think this new proposal can also help to improve that use case.

SHS: Yeah, I think it’s more general just in terms of being able to-any `AsyncContext.variable`, not having to do a special thing for every context async variable, and it’s just an automatic variable to be done with this. A much more general solution, I guess, is what I’m trying to say.

MM: Yeah, so I just want to see if I can rephrase what’s been said so far in terms that I more strongly relate to, just to make sure I’m oriented. The current `AsyncContext` run, you have to give it a function, and then the new temporal scope, the new binding of the variable applies over the execution of that function, and that the—and that the—sorry, that the variable, you know, thinking of the nested scoping as scoping, the variable’s only shadowed within that function, there’s no equivalent of assigning to the variable. The variable does not change within the prior scope. Now, there’s several constructs in the language that can be understood in terms of transforming to continuation’s passing style. Not that it could literally be implemented that way, necessarily, but yield within generators, await within async functions, and the using for disposables all can be understood as doing something to the continuation of the execution. Dispose is different from the others because the continuation is only within the block.

MM: Now, the question is, the—are you proposing something that would change the using mechanism itself or is the change to async function just writing on the using mechanism as it exists, and if so, I don’t understand how the using would introduce the new shadowing scope, because once again, it’s important for `AsyncContext` that it only be shadowing, not assignment. For one thing, if it was an assignment, then a snapshot of the context could change its meaning when the snapshot was revised after an assignment. So that’s it.

CZW: Yeah, in the coming slide, we will explore different solutions. Definitely, if it is possible, we want only add the using, like, the `symbol.dispose` or `symbol.enter` on the `AsyncContext.variable` and reduce all the functionality with using decoration. And we will also explore how to avoid, like, the concepts of being able to leaking out the encapsulation of the current scope, so maybe we can revisit this question when we go through all the slides later points.

MM: Okay, that sounds good. On this slide in particular, `AsyncContext` swap, that’s something new that’s coming in with this proposal. Is there anything existing?

CZW: It’s the abstract operations in the `AsyncContext` proposal specification. They are not exposed to users. It’s written here as an illustration of how the current run works.

MM: Okay, could you remind me what the—I don’t remember an `AsyncContext` swap, and the name certainly sounds imperative rather than, like, you know, like an assignment more than a shadowing. Could you explain what `AsyncContext` swap is.

CZW: It is not an operation exposed to users, so it’s an underlying abstract operations to replace the mappings on the agent that contains the variable value slots. And what is exposed to users is that when the run finishes, the evaluating—evaluating the given function, it will swap back to the map—previous mapping that when the run was invoked.

MM: Okay, I’m not sure I understand, but I think I’ll postpone further questions about it.

GCL: `AsyncContext` swap just takes the current `AsyncContext`, returns it, and then sets the new value to whatever you pass to the AO. So the way it’s used in the specification text is to build a stack, basically, where you, you know, push a new value to the stack by assigning it to the global `AsyncContext`, and then later pop that value by assigning the previous value that was returned.

DE: And it effectively is enforced because only the two run methods only ever call `AsyncContextSwap`.

MM: Okay. So it’s always stacking, it’s always balanced, and the snapshot is when you do a snapshot, it’s always of the current bindings—I think I’ll postpone until I have more context. But thank you.

USA: That was the queue.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3483f5889db_0_22#slide=id.g3483f5889db_0_22)

CZW: Okay. Cool. Maybe I can go with the slides. So let’s explore solutions that we could have. Right now we have three possible solutions. The first solution, A, it reuses the current using decorations mechanism and potentially we would like to also use the Stage 1 "enforced using declaration" proposal, which is the `Symbol.enter`, and the solution B and C enhances the using decoration to be a—to allow the `AsyncContext.variables` being used with user integration still being enforced in the current scope.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g34c9fd99034_11_14#slide=id.g34c9fd99034_11_14)

CZW: And we would like to enforce the scoping with the using decoration `AsyncContext.Variable` on all three solutions, and not just possible. The proposal for solution A, it could be seen as transformed to this code [slide "Proposal A"] that when the `symbol.enter` is invoked, it will swap the mapping with the value being snapshotted, and it will reset the value or a variable when the `symbol.dispose` is being—method is being invoked. So in short, the `Symbol.enter` captures the variables current value, and then enters the async variable with the new value so user can observe the new value after the using decoration, and when the dispose method is being invoked by the user integration, it checks that if the current `AsyncContext.Variables` is the last one that was entered, or if not, it should throw and enforce this scope and it's not reset. So if the user invokes the dispose correctly with the user integration, we expect that this `AsyncContext.variable` using disposables are correctly stacked, just like how we used with `AsyncContext.variable.run`.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3494191011f_1_25#slide=id.g3494191011f_1_25)

CZW: And so what are the context leaks that we mentioned? It’s not memory leaks, it’s only if user, when a variable value is not encapsulated within a synchronous function co-boundary, so it is only possible when user invokes the `Symbol.enters` manually without using a using declaration. So this is only possible in synchronous function calls. It’s not possible in async function calls, because async function calls-- async functions are wrapped by promise, and promise will continue to behave like `AsyncContext.variable.run`, and properly encapsulate it. And so, what if a synchronous user function really leaks, and the user manually invoked the `Symbol.enter` without invoking the `Symbol.dispose`? The issue is that if we introduce such capability, we may assume that any function code can leak, but in use cases like Stephen mentioned earlier, like in test frame works, this test frameworks may want the leaks to happen, because they have this, like, before end test and being split into three function scopes, so this could be their intention, and we—even though it’s in the our intention to allow users to do this, so it might be someone’s—it might be someone’s use cases to do it, like, in test frameworks. And in the equivalent `AsyncLocalStorage.enterWith`, leaks are possible, because proposal A does not enforce using of the `using` declaration, and we recognize that synchronous leaks can cause expected behaviors, and we would like to call for general use cases for such behavior. And we also would like to highlight that this is not unsafe as that this value leaks are only visible on the observable if you have access to the `AsyncContext.Variable` instance, so you can not observe any synchronous leaks if you don’t have the access to the `AsyncContext.variable` instance, the `AsyncContext.Variable` object itself. And we will propose solution that cannot leak synchronously, and we will continue to explore and allow you to look at.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3483f5889db_0_39#slide=id.g3483f5889db_0_39)

LCA: Thank you, yes, so as CZW said, the synchronous leak problem with A is that they expose a function to user code that can enter interview a context without it being forcibly exited, which means that a user can enter a context and possibly leak it out of a synchronous function scope, and proposal B and C both try to prevent this by two different mechanisms, tying the enter and exit of the `AsyncContext.variable` value directly to the using declaration syntax, so making the enter and dispose method behave in sort of a special way when called from the using syntax and not behaving in a way that would let you synchronously leak out a value when manually called by user.

LCA: So the way that proposal B does this is by still having the `AsyncContext.Variable.prototype.withValue` method that returns an object with an enter and a dispose method, but calls to this enter method do not actually enter immediately, so if you look at the value of the `AsyncContext.Variable` directly after calling `Symbol.enter` manually, no value will have been entered. You will still see the previous value. Instead the `Symbol.enter` method records using some internal state whether it was called or not. And then the `using` machinery, when it is done calling the `Symbol.enter` method on the object that was passed to it will actually perform the entering, so that the entering happens within the using machinery and not within the synchronous function call. And then the `Symbol.dispose` method—sorry, the `symbol.dispose` method doesn’t actually do anything, and instead the `AsyncContext` restoration method happens entirely within the using machinery. Can you go to the next slide?

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3494191011f_1_1#slide=id.g3494191011f_1_1)

LCA: And I’m sorry for the small code here, but the way that this would work is essentially as described here. So there would be some changes to the actual behavior of using tech alation to be aware of AsyncContext and as you can see here there, sort of a stack of snapshots that the `AsyncContext.Variable` with value `Symbol.enter` method can use to record values to be entered at the end of the `Symbol.enter` call. And then in the dispose part of the using declaration year, we dispose, and then reset the AsyncContext variables to the previous value. And then forces that the values can be set to the sin tactical binding them to the lexical scope where you’re calling `using` declaration. You can not manually leak out an AsyncContext Variable from a function scope or any other scope because it will always be reset by the `using` declaration.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3483f5889db_0_47#slide=id.g3483f5889db_0_47)

LCA: Proposal C does something very similar, but with a slightly different approach. Where instead of there being sort of a behavioral change insider using, we instead add a new internal enter and exit—or and dispose slot to the `AsyncContext.Scopable` object, which is the object that would be returned from `AsyncContext.variable.with` value. That using would call instead of a `Symbol.enter` or `Symbol.dispose` method if they’re present. And these are internal method that cannot be called by user code. They’ve only callable by using syntax, so the user cannot manually enter and exit. And this has exactly the same implications as proposal B. It just works through a slightly different mechanism where instead of it sort of being a side effect to call `symbol.enter` and the using machinery sets, that it’s a using slot on this method. And that has implications for ShadowRealm boundaries, which I’ll get to in just a second.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3483f5889db_0_59#slide=id.g3483f5889db_0_59)

LCA: Yeah, so let’s start with the cons of each of these. Proposal A can leak, as we’ve discussed. Because of the fact that we do not want two to allow interleaving of variables, which means enter and exit must always be balanced, there has to be some slightly more complicated logic in the enter and exit functions to ensure that you cannot—yeah, that, like, you cannot call enter and exit in an unbalanced fashion. But, yeah, you can not prevent the actual scope leak. You can just prevent the exit happens in an interleaving fashion.

LCA: Proposal B adds this sort of new global mutable state into the using declaration, but it’s not really problematic. It has exactly the same user observable semantics as using `AsyncContext.Variable` right now. Like, you can only use see the mutability for your own variables, which is not different from giving somebody the ability to enter an `AsyncContext.variable` using `AsyncContext.variable.prototype.run` context run.

LCA: And proposal C as unforgettable internal slots that probably cannot work through a ShadowRealm callable boundary because they cannot proxy pierce. So this is the main drawback of proposal C. And as proposed, you can only set one variable per scopable, but this is something you could change if there was use cases for this.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3483f5889db_0_54#slide=id.g3483f5889db_0_54)

LCA: And then pros, proposal A requires no special handling of the using syntax. It is just three methods. One method with value method is in context vary constable the object that is returned would just work with using syntax assuming there’s a `Symbol.enter`. And it works well with proxies with no special logic anywhere. But, yeah, it has the ability the leak, which some also consider a use case maybe for, for example, this test use case. We’ll have to see about that.

LCA: And proposal B, you cannot scope leak and it has—and proposal C cannot scope leak and asynchronous calls and it’s simpler to explain than proposal B because these are go internal slots, which we already have behavior like that elsewhere. But, yeah, we discussed the cons already.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g34833c460bf_0_34#slide=id.g34833c460bf_0_34)

LCA: so I do want to quickly cover the thing from earlier where we don’t just want this to happen for the `AsyncContext.Variable` itself, but also for objects that wrap `AsyncContext.Variables` , and we think that this is something that done through composition of `symbol.dispose` , and it’s slightly different for proposal C, but it’s still possible, where you could have an object that internally contains an AsyncContext variable and you call with value and `Symbol.enter` and manually a call to `Symbol.dispose` inside of `symbol.dispose` of the object you’re actually passing to using. You can see that illustrated here on the code on the left. Next slide.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g34833c460bf_0_47#slide=id.g34833c460bf_0_47)

CZW: Yeah, so `Symbol.enter` is optional for proposal A and C, but we would like to say that it’s favourable because we can enforce that an `AsyncContext.variable` integration with unit integration are enforced: it must be invoked with a `using` declaration, and we can—it’s not expected to be invoked without dispose, and it also allows library integration, like the previous slide showed that with convenient extension.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3483f5889db_0_68#slide=id.g3483f5889db_0_68)

LCA: Sorry for that. I just—my Internet stopped. Okay, so then, yeah, disclaimer, this proposal only works with async `contest.variable` and there’s no using integration for `AsyncContext.snapshot.` This is something we can talk about. We can talk about that offline.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3494191011f_1_49#slide=id.g3494191011f_1_49)

LCA: Yeah, so the summary is the `AsyncContext.Variable` prototype.run provides new behavior that is very useful for developers in frameworks especially, so when you’re not directory dealing with this but wrapping existing callbacks to a framework, that run requires a new function scope, which means widely using it in a code base that is not already using callbacks heavily often requires heavy refactoring, especially when using constructs like break or return. And we do expect there to be wide use of `AsyncContext.Variable` specifically for tracing, which is helped by a lot of instrumentation all across the user’s code base, so it would be good to make it as easy as possible for user to adopt this without requiring heavy repack or thing. And AsyncContext integration does support this the same way async await made it easier to adopt promises. And we’re specifically not looking to introduce new syntax and use the existing syntax because it does already lexical binding, which is what we’re after. And there’s currently three possible solutions we’re exploring, each with different tradeoffs and we’d be very interested to hear from you all what your thoughts are on these different solutions and also obviously on everything else on the proposal.

LCA: So let’s go to the queue.

RBN: I know I’ve discussed this with champions for AsyncContext proposal in the past, but my biggest concern with options B and C is they will break intuition with the disposal stack and how composition is intended to work with using declarations. Mainly, I've talked with a number of delegates in the past who when they talk about using the declaration proposal they generally think of the actual semantic behavior of using declaration syntax is that it’s essentially a syntactic sugar over just working with disposable stack. But this would—these two options, B and C, grant specific capability to `AsyncContext.Variable` and specific interactions with using that prevent these `AsyncContext.Variables` being used with the dispose stack or async disposable stack, which means they can’t be used in composition. So I’m really—that’s one of my biggest concerns, is that this is introducing a break in intuition with how any other disposable works.

GCL: So, sorry, I think C, I would agree with you that C is not immediately composable with a disposable stack, but I believe the other two are.

SHS: B doesn’t work either because with the using exits before you pass the enter or the variable itself to the stack.

RBN: Yeah, can you go back to the example of the desugaring of option B. Yeah, this is—yeah, so here you’re—there’s two issues that I see with this. One is you’re introducing a syntactic transformation over a run time value. There’s no way that you can know when doing any type of static analysis and parsing without, like, a full, like, strong type system and reliable type system that the thing that you are passing in is an `AsyncContext.Variable.` This would require run time evaluation to know that it needs to do something special, unless you’re doing this for everything, and then you’re adding every single dispose. And then this AsyncContext enter/exit restoration functionality, it’s not, again, tied into, like, if I hook `AsyncContext.variable` and stuffed it into a disposable stack and I did it using around, that then it’s not necessarily going—if it’s in runtime detection is not going the detect that that’s actually part of that disposable context or disposable stack.

GCL: You’re referring to the implementation wanted to optimize this to not always take a snapshot around using syntax?

RBN: Your position is that with this approach is it will always snapshot at every using?

GCL: I’m not entirely sure—I’m trying to clarify what you’re trying to claim.

RBN: Let me go back for a second and say I’m trying to understand this slide. Is this asserting that every single using declaration would introduce an AsyncContext snapshot?

GCL: It is asserting the observable semantics of the—this proposal. Whether the—like, are you asking about whether an implementation could optimize it to not do that?

RBN: I’m asking what's—no, I’m not asking about optimizations or anything. I’m asking about if line 1 was not new `AsyncContext.variable` or line 4 was not calling with value, would this be doing the same thing for any other value?

LCA: Within the spec, yes.

RBN: So this will add to the belief to every single person using tech—

LCA: No, no, within the spec. I’m not saying this is not—this cannot be optimized away.

CZW: Yes, within the specification, this would just always perform the AsyncContext machine machinery.

LCA: Yes, the same way we do for async functions, for example.

RBN: Async functions I kind of understand overhead, because we’re working with async await, you’re not necessarily expecting the highest performance, because there’s always—there’s going to be some context switching and overhead from continuations, everything else that’s associated with that. But having, like, one of the interests—or one of the goals we have, or I have at least when it comes to shared structs proposal and shared memory multithreading is high performance applications that need to be able to work with locks will be using declarations to lock and unlock, and they do not want overhead.

RBN: The—the other point to my topic is that in both B and C, there’s discussion about `symbol.enter`, and the proposal for `symbol.enter` that’s currently at Stage 1 is specifically about `Symbol.enter` being a more complex extra step to enforcing that you’re actually using a declaration with using that if you really, really, really want to or immediate to or have a very specific reason that you can call out to that method the invoke it, which, yes, could result in the potential context leaks you’re discussing, but the point it being a built-in symbol that 99.9% of people won’t have to look at because nail be typing using whatever equals and that value, means that people aren’t going to be reaching for this unless they really need, to people who really need will most likely be taking extra care about stack discipline. I’m not really certain that B and C are necessary in that context.

NRO: Yeah, all times mentioned that this requirement is not all the time. Like, part of this context proposal design was that AsyncContext snapshots will be very cheap to get, they’re just copying a point, and you don’t actually need to, like, iterate through a structure to copy its values, which is why it’s okay to do it, for example, at every single await. So I wouldn’t worry about that too much. It’s just literally copying a point to somewhere else.

SHS: Yeah, gist warranted to point out the overhead question, and there’s the issue of the order it happens. If the finishing the using is where we’re making mutation happen, that does break disposable stack, because you use using to enter the stack, and then you event kind of put more disposables on the stack without using syntax. And so that would not trigger the mutation mutation and that does break the intuition and the composability.

DE: Yeah, I’m surprised by this suggestion of using AsyncContext Snapshot. I thought we were going to solve this by using general solution to making `Symbol.enter` more reliable in general, like RBN had proposed previously. I also want to say I think such a reliable `Symbol.enter` mechanism can work with DisposableStack, though it can be pretty complicated. It would mean that a lot of things that would previously be just a function call now would return a Scopable that could only be used with `using` again. The composition still makes sense, it just changes the interface, if the stack ever includes anything that has an enter that must be called.

SYG: This is originally clarifying question and it has been clarified that proposal B is using hard coding to be aware when the right-hand side is an `AsyncContext.variable` ? Like, hard coding in the sense that no matter what the right-hand side of the using—sorry, not the right—yeah, the right-hand side. No matter what the right-hand side is, there’s this AsyncContext machinery that now happens both on the using—at the using site itself and in the finally block that they dispose of. I want to triple check that. That is what you’re proposing for proposal B?

LCA: That is correct, yes.

SYG: Okay. That is very unpalatable to me for a lot of the same reasons that Ron has said. But also it feels like taking a step back, it certainly feels like we’re running ahead of the solution space here. Like, there’s AsyncContext has been designed for while, with you there’s zero baking time. Using is barely shipped, only in Chrome, I think, I don’t think it’s shipped anywhere else. There’s not enough baking time. This feels—however I personally feel about this design, it just feels like given the maturity of the proposal dependency chain here, there’s—AsyncContext does not rise to the level of needing special casing in syntax that is itself very new yet. There’s a too much risk here that I don’t think something that ties `AsyncContext.variable` into a piece of syntax I think that is warranted.

LCA: I do want to respond to this before we move on to your topic, Dan. Like, we have—there has been a—essentially equivalent proposal to AsyncContext as we have experienced through AsyncLocalStorage there for a long time, which is already being used for tracing. And we’re seeing a lot of the problems discussed in this presentation there right now. Particularly the very heavy need to use callbacks, and the very difficult refactoring hazard when you’re using some of these syntactic constructs like break and return. So this is, like, not coming out of nowhere with no practical experience. Like, in is based on the practical experience from using async local storage. Without having sort of—

SYG: I think you misunderstood my position. I find proposals B and C deeply unpalatable because they basically hard couple AsyncContext variables to using syntax. Proposal A is palatable. I hear your problem statement. Proposal B and C is what I’m saying, is—yeah.

LCA: Got it.

USA: Less than ten minutes remain, so I would suggest everyone to be quick.

DLM: Yeah, I just wanted to second SYG’s point. It came up in a genre view that this might be moving quickly. We have no concerns about this going to Stage 1 and we do kind of feel that more experience is warranted with both AsyncContext and using.

CZW: Yeah, I think I can clarify that. This is the reason that we don’t want to couple this proposal with the Stage 2 AsyncContext proposal, and I don’t think we will proceed with this any time faster, because we really see the benefits that this proposal can be benefited from the .run enforced by using declarations with the `symbol.enter` . So, yeah, this is the reason that we want to propose a new proposal to advance to Stage 1, ask to advance to Stage 1.

DE: I want to expand on what Luca was explaining about the motivation for this. First, I don’t think this proposal is essential for AsyncContext. I think `AsyncContext.Variable.run` is completely good enough and already corresponds to the, you know, common best practices for using AsyncLocalStorage. There are some uses of `AsyncLocalStorage.prototype.enterWith`, which is a different method that ends up letting you set a variable without entering the scope, breaking the stack discipline. So this proposal is an effort to get back some of those ergonomics, which I really do think are essential for AsyncContext. There are several—mine, not several, there are a few people in the no JS community who were especially interested in maintaining this ergonomics, so bringing this proposal to committee helps to get feedback on that as a possible future direction. That doesn’t mean we need to do it now. But it will be helpful to see this actually considered by the committee. That will be helpful to bring back to the Node.js community and talk through what that means. So it’s helpful whether or not we adopt the proposal.

SHS: I agree that B and C are unpalatable. We should focus on A. And I think one of the main issues with A is that dispose can throw. Are we okay with that? Is that something that is acceptable?

USA: Okay. Reminder that we have close to 5 minutes remaining. Item three items on the queue

LCA: We want to ask for Stage 1. Do we have enough to go through the queue and then ask for Stage 1 or ask for that and—

USA: I think so. I mean, if… you know, the items—depending how much time they take basically. You could ask for Stage 1. And go through the queue later.

DE: Let’s go through the first queue. We are almost done.

RBN: Yeah. I had a reply to SHS’s comment that dispose could throw if the stack broke. There is not really anything wrong per se with the disposed throwing. You shouldn’t if you can avoid it it. But the spec is designed to capture error and having dispose throw because you broke stack discipline is way to inform the user that they broke stack discipline and resolve that by adjusting their source code. So it seems like that’s a good thing. Rather than a bad thing. So I don’t—I don’t have an issue with dispose throwing in that case.

SHS: Excellent.

RBN: So LCA mentioned during the presentation that about composition. You said composition was feasible both with proposal A and B. I was trying to—I was trying to ask how it was feasible because it didn’t seem like it was. I think I might better understand that now when it’s—with the explanation that the snapshots are always happening around using. I do have some concern around the complexity of how that works with the—how that works with enter, but not that concerned about this topic anymore.

LCA: Okay. Yeah. I think the way it’s possible is because using call `symbol.enter` on the outer object and the outer object can cause that on the inner object that has the side effect of mutating this snapshot that is set at the end of the original enter call. It’s possible with B or with C. If you do some prototype shenanigans on the return type of enter. But I don’t have—

RBN: I am not sure—C does not seem reliable. It adds a lot of flexible to of the you are forcing the user to use a super type and class to do this, which really doesn’t—it might not work well can compositional cases

LCA: Yeah. I tend to agree.

DE: How are we preserving this stack discipline with generator? If you yield in the middle of a `using` block, if you never resume that generator, does this break stack discipline? Or does something about the generators work to restore the previous AsyncContextSnapshot at that point?

CZW: The current Stage 2 proposal ensures that the generators are also preserving the encapsulation of the AsyncContext generators. So in the Stage 2 proposal, before and after the yield statement, `AsyncContext.variable` observe the same value. Regardless of what the caller will change the context async generator.

DE: Yeah. That’s inside of the generator, but outside of it, if you call `.next()` and then that puts it inside of a using block, does it—how do you prevent not being an unbalanced thing?

GCL: I would expect that we will specify all suspends for generators and async functions, and async generators to restore the AsyncContext. But we haven’t, you know, discussed the exact details there. I think not doing that, as you say, would kind of be, you know, it would sort of bring the same problem back. But yes, that’s what I would expect.

LCA: Okay. Shane in the queue. Do you want to go to the final slide, Chengzhong.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g34833c460bf_0_52#slide=id.g34833c460bf_0_52)

LCA: Yeah. Yeah. Ask for Stage 1 first.

USA: Let’s see if we have any comments from the queue. Also feel free to support. Okay. We have support from CDA on the queue.

RBN: Just briefly. I do support the idea of disposable `AsyncContext.variables.` I have concerns about options B and C. And I am still a little iffy on `symbol.enter` on its own. When you are doing UsingDeclaration, the idea you do the initialization when you do the acquisition. So calling with variables is essentially what the—would be a good place to actually change the context and do that. So I am still a little bit—even up in the air that option A is necessary, as long as you have a `symbol.dispose` . But considering it’s it is a proposal, we are still investigating it and looking at it, I don’t have an issue to continue to look at option A in that case.

CZW: Thank you.

SYG: I am going to clarify the reason this is a separate proposal and not folded into the existing AsyncContext proposal is because the champions think that this is not integral to AsyncContext. I would say that this improvement to the AsyncContext Stage 2 proposal. And Stage 2 proposal can work on its own and provides the functionality that we need to context. And this new proposal is essentially to improve the usability.

CZW: This doesn’t answer why it needs to be a separate proposal. For it to be a separate proposal, I think it is mentioned, we would like it to—it depends on the `symbol.enter` which is also Stage 1 and we don’t want to—we don’t think it’s necessary to block the Stage 2 proposal.

USA: There are responses, but I believe you have already answered, yes. They have gone away. That’s the queue. We are 2 minutes over. Let’s give a few more seconds to see if somebody has thoughts on Stage 1.

DE: Do we have a definition of this scope or problem statement? Does it differ based on the different options? We have heard some opposition to some of them.

[Slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3494191011f_1_18#slide=id.g3494191011f_1_18)

CZW: Well, I think the—this page of the slides explains the iteration. Ultimate goal is to allow AsyncContext integration and we are—we could explore that, like, we said with `symbol.enter` or `symbol.dispose` that I think—even with solution B and C, I think this is—this page shows that we want to include the feasibility and the solutions.

LCA: I think a more written out version of this is on the third to last-page, Chengzhong, the [summary slide](https://docs.google.com/presentation/d/1p_rQ5UagJ3Bgwbds0NL-nBaR3ovJLmyHmKuRMJejs_Y/edit?slide=id.g3494191011f_1_49#slide=id.g3494191011f_1_49)

USA: I’m sorry. We are past time. Can we focus on Stage 1 for now?

ABO: + 1 by ABO. Stage 1 as well.

USA: We have not heard any negative comments. Please let it be known if you have any.

MM: To be clear, you heard negative comments. You have not heard objections to Stage 1. I will put myself in that category. I am very concerned about this and doubtful there’s actually a feasible solution, but I am not objecting to Stage 1.

CZW: Thank you, MM. I think we can bring this up to SES meeting and thank you

USA: All right. I guess with that, we can conclude stage 1. And I hope you folks have a good chat async afterwards and try to find some of these things

LCA: Thank you

### Speaker's Summary of Key Points

- There are concerns with solution B and C as they change the semantics of the using syntax.
- Solution A allows compositions in libraries and integration with the syntax.

### Conclusion

- Proposal advances to stage 1

## WHATWG Observables

Presenter: Dominic Farolino (DMF)

- [proposal](https://github.com/WICG/observable)
- [slides](https://docs.google.com/presentation/d/1i5_zneksrU7i7ZHcl5EQRzUHGkmXRIQKd-bLfrPRNXY/)

DMF: Okay. Perfect. All right. So my name is Domenic Farolino. I work on Google Chrome. And I am working on the observable API. Which is currently a WICG standard—or, specification. Before we go into the slides, I want to give some context. This is a pretty informal presentation. We are not—this is not incubated or proposed in TC39. We are not asking for specific Stage feedback or anything like that. But because we are pursuing this API which used to be pursued in the TC39, and we moved it over to WICG with upstreaming into a WHATWG DOM specification, we—myself and other browser vendors felt it was important to run the proposal and the design by folks in TC39. And try and just, you know, keep everything on the platform updates and ask for opinions on that perspective. That’s what I am doing here.

DMF: I will start with the history of Observables. So like I mentioned, in 2015, it was a Stage 1 TC39 proposal, I believe championed by Ben Lesh—he’s the author of the RxJS userland Observables implementation. In 2017, it was proposed to instead move to the WHATWG DOM standard and incubated there. A lot of platform editors agreed with this approach and felt it was the right place for it. And that would be the best way to get it into developer hands faster. And some many years later, I sort of retook this proposal and formally moved it to WICG and created a specification out of it. And writing the implementation in Chromium. That’s the context for what we are here today. I just want to start by discussing what an Observable is. Before we cover some of the design details of the specifics of the proposal.

DMF: So the best way to think about an Observable is that it’s like a promise. But for multiple values. Like promises, they are synchronously available, handles that represent async work. Which means, that you can act on them, write when you create them and call methods and operators on them. Even before the underlying source starts emitting values for their consumption. The main thrust of the Observable proposal is—the main way it integrates with the web platform is through the EventTarget interface. A big part of the specification is this new method on EventTarget called `when`, which creates an Observable that represents asynchronous stream of web platform events fired at the EventTarget. It’s like a better addEventListener, but integrating with the Observable API instead of just callbacks.

DMF: So what I want is: this will enable you to write code like this. This should be `element.on('click')`. You can get an Observable by calling. This represents all the click events being fired on the element. And then you can start calling all of the operators on Observable like`filter`, like take all the click events, filter them, map the event to the data inside the event that you really care about, and then you can subscribe and add a handler. This is the linear pipeline that they offer, more convenient than clunky addEventListener callbacks and addEventListener callbacks. We think it helps you get out of the callback hell that promises help you get out of. But they work for async streams of values instead of one shot values that promises work on.

DMF: So where do `filter` and `map` and so forth come from? There’s a list in our spec of all the operators. Some of them worked on observables and some made more sense to return promises. You can check out the spec for the list of them and the specs for them I want to cover some design details and talk about the internals of how this proposal actually works. So promises have two components to them. There’s a producer, which is the callback that the promise consumes, and this produces values and then the consumer, which consumes the value, in red, the thing in .then. Observables are similar. They construct very similarly, take a callback. And instead of, you know, just calling the resolve function or something, you get access to the subscriber object and .next() values to it. And the consumer subscribes and passes in various handlers. Not just `next` to get them. You can do `next` for signal completion because whenever you have multiple values, you need to signal that you can complete. And you can also `error` as well and signal that there’s an error to the consumer that way. So the consumer has the ability to respond to each of the events bypassing different callbacks that represent them.

DMF: Some key components of observable that are different from promises shallings the first one is they have synchronous delivery. So back to this example. When you .next() a value on the right there, on the producer, it synchronously goes to the consumer and triggers the next handler. There’s no asynchronous microtask delay like promises have.

DMF: The second one is that it’s lazy. This is a deviation from how promises work. So when you construct a promise, and you give it a callback, that producer callback runs immediately. With observables, the producer callback which produces values, actually gets saved as private state inside the observer. And it runs later when the consumer actually subscribes. In that case, they’re lazy compared to promises.

DMF: Here’s an example of how that works with the observable produced by the method for EventTarget. You have this observable and it listens to an event. What that translates to is, this constructs an observable with the internal callback and whenever that callback runs eventually, you get—under the hood adds an add listener and forwards the value to the listener. The benefit being, you can call the observables immediately.

[Slide](https://docs.google.com/presentation/d/1i5_zneksrU7i7ZHcl5EQRzUHGkmXRIQKd-bLfrPRNXY/edit#slide=id.g30a04a42395_0_278)

DMF: One interesting design detail with our observable proposal is that the producer is essentially multicast. So this is a little complicated, but what this means is, you can see up top, the producer, the callback it takes, and everything 500 milliseconds will produce an incremented value. The first time the—the first consumer comes along, and subscribes, it’s `source.subscribe` on the left, it will fire the callback internally and run it. But because the producer is multicast, all subsequent consumers. They just listen in on the existing created producer that has values.

[Slide](https://docs.google.com/presentation/d/1i5_zneksrU7i7ZHcl5EQRzUHGkmXRIQKd-bLfrPRNXY/edit#slide=id.g30a04a42395_0_261)

DMF: We will talk about what happens when the consumers register the fact that they are uninterested in values and how that—how this listening mechanism works. But that’s part of the next section, cancellation and teardown. An Observable producer can stop producing values and be told to stop doing that. And basically, the way an Observable shuts down is through two different ways, the producer-initiated teardown, this is the producer callback under some conditions calling `subscriber.complete` or `subscriber.error`, and signaling to the consumer it’s done producing values. You are not going to hear from me. There’s `done` or `error`. A consumer would start a subscription then ask to end the subscription by aborting its subscription with an AbortController. Here’s an example of that.

[Slide](https://docs.google.com/presentation/d/1i5_zneksrU7i7ZHcl5EQRzUHGkmXRIQKd-bLfrPRNXY/edit#slide=id.g30a04a42395_0_193)

DMF: On the right, a producer, which is going to register a teardown to shut it down and ensure that it knows how to shop producing values. And on the left, we—the consumer passes in an AbortSignal associated with its subscription and at any time it can abort the controller for that signal and that triggers all the teardowns in the producer to run so that the producer knows to stop producing values for the consumer.

[Slide](https://docs.google.com/presentation/d/1i5_zneksrU7i7ZHcl5EQRzUHGkmXRIQKd-bLfrPRNXY/edit#slide=id.g30a04a42395_0_118)

DMF: Now this is tricky when we have multiple consumers because we can’t just stop producing values if not every consumer has aborted their subscription. The producer is ref counted for this reason. So we have observables to re-iterate, and they can have multiple consumers. They can have multiple consumers for that single individual producer. And once the refcount hits zero, that is finally when the producer will tear itself down. It can’t do that earlier than that because there could be other consumers that are still interested in getting the values from the producer.

[Slide](https://docs.google.com/presentation/d/1i5_zneksrU7i7ZHcl5EQRzUHGkmXRIQKd-bLfrPRNXY/edit#slide=id.g30a04a42395_0_238)

DMF: Once it’s torn down, resubscription—the observable is not dead. It can be reignited. Here’s a concrete example of that. Kind of playing on to the last example we saw. If we have three consumers interested in the values of this observable, this producer, then the ref count of the producer function is basically three. And when the first consumer at the bottom left aborts its subscription, we mark the ref count down to two. Same thing in the middle. One to down [?]. And finally, when the last one, aborts its subscription, the ref count is 0 and then we tell the producer that it’s safe to teardown. It tears down and stops producing values.

DMF: This was a design change we made after TPAC discussion last year and after some developer feedback in shop around at different venues. It was seen as one of the bigger footguns in userland observables that they did not do this. And so it made sense to consider that feedback and deviate from community precedent in a way and it’s been received well so far.

DMF: The current status of this proposal, I will just—this is a little out of date. But basically, yeah. We would like input. It’s the number-one reacted-to web standards issue on Github. Given the [?] spec reaction tool. People are interested in it. There’s a lot of developer hype at conferences and on Twitter and so on. So we felt it was important to prioritize this proposal and bring it to developers. We are gathering feedback from Node and from WinterCG and no negative feedback so far. Either neutral or positive.

DMF: And so with that, I would like to thank some of the folks in TC39, JHD and KG, in particular, who have been active on the repository in giving us some feedback and helping us shape some of the nuance points of the proposal into what it’s become. At this point, it’s pretty much done. And like I said, myself and other browser vendors felt it was important to run this by and formally update TC39 folks as to the proposal and see if there’s any interesting discussion points that will come out of this. And just to basically keep everything updated and see if there’s anything major red flags that people spot. So with that, I think I am pretty much done with the presentation. We can open up for discussion or just end with a call for any feedback to be registered on the GitHub repository there.

DMF: And yeah. With that, I think I am done with the slides.

CDA: Great. Thanks for coming to the committee to talk about the proposal. We have a number of folks on the queue with some questions. First, we have MM.

MM: So could you go back to the history where this started in TC39.

DMF: Yes. Yeah. [This slide?](https://docs.google.com/presentation/d/1i5_zneksrU7i7ZHcl5EQRzUHGkmXRIQKd-bLfrPRNXY/edit#slide=id.g30a04a42395_0_27)

MM: Yeah. The—what I remember is that there was an observable proposal in TC39 and I don’t remember the time frame. Does it say Jafar (JH)? It does say that. Good. Good. Good. That history is correct. I thought I had heard a different name. I wanted to make sure this was cochampion by Jafar Husain (JH) and I. When he left the committee, I didn’t have the energy to keep going with it, which I would assume is part of why it went over outside of TC39. I do want to express that although I didn’t have the energy for it, I wish that once the energy arose to pursue it somehow, that it had been pursued in TC39. I do not understand why the right venue is outside of TC39.

DMF: I think—so this was discussed a little bit. We have a section on this specifically, this topic. Venue choice in the explainer. WICG explainer. The gist is basically the proposal’s primary integration point with the platform was EventTarget. And it made sense to have a dependency also on AbortController and AbortSignal as a cancellation mechanism to unregister one's subscription. And I believe the Cancelable Token proposal in TC39 was contentious and given some of the layering how we expected this to be integrated with the platform, I think that motivated this—this change here and felt it was more appropriate as a what working group. It wasn’t necessarily a new language primitive.

MM: I understand.

DE: I think there are multiple ways that layering can work for both Observable and AbortController. I hope we can work together between TC39 and WHATWG in the future, rather than kind of in both directions trying to claim territory. In particular, this could have been done with EventTarget being the HTML integration on top [designed together, but not necessarily determining the venue of the core of Observable, similar to many other TC39 proposals]. With AbortController, I think there’s a possibility that we could make an API that’s even improved in terms of usability, as you and I have discussed that could be done in potentially either venue. So I hope we can keep working together on these things.

DMF: Yeah. I would love that. I think that this was very much our intention of starting this up in discussion and trying to shop it around here and yeah. I very much second the—such vendor.

MAH: Could you maybe go back to the example slide where you showed the subscriber?

DMF: Let me see. Which subscriber?

[Subscription slide with consumer and producer examples]

MAH: So this surprised me a little bit. I was expecting—when I think observable, I think basically as a mechanism that could be built on top of iterators with basically some sugar to make them multicast. But I didn’t expect the subscriber to look completely different from or somewhat different from iterators. It seems like, for example, here, the complete and the error are very equivalent to the return and throw that an iterator could and user understood to have. And so I am wondering like in the design space, like, has there been consideration for observable as some sugar around iterators for producers and consuming

DMF: The closest thing related to this, we have the observable from method and that takes in—I wish I had a slide on it. Maybe. I don’t think so. But that takes a promise observable, iterator or AsyncIterator and converts them to observables. So there's a lot of adaptation and conversion mechanisms between those. But if—is it the naming of the function that you are commenting on or…

MAH: Yeah. I mean, I am wondering what is different about the observables that you—in their behavior that they’re not—they don’t have th—they wouldn’t follow the iterator shape and protocol?

DE: This is something that was discussed by Jafar when he was explaining observable to TC39. Iterators are pull-based. You get them by calling next on them. Whereas observables are push-based. The event is sent. So iterators can only work for things that are buffered, whereas Observables, for Events, you often don’t want to buffer them.

MAH: I don’t—I don’t know the production—so okay. What is the behavior when you’re producing a value, is the producer expected to block until all the consumers have consumed the value?

DE: It doesn’t block. It just calls synchronously. Right.

MAH: I see. So the consumption is not iterator-based. It’s callback based. Got it.

JSC: This is an exciting proposal. Thank you for presenting it to TC39. I want to bring up interoperability, conversions, and dataflow between DOM Observables and ES Signals. ES Signals are another proposal we have, I think, at Stage 1 right now. They’re similar, but they’re different. I wanted to ask, have there been explorations on how an Observable could feed a Signal? Or vice versa, a Signal feeding an Observable. Said conversion API would need to live in WHATWG DOM, not ECMAScript, since Observables are coupled to the DOM. The situation is somewhat analogous to WHATWG streams and ECMAScript async iterables. I understand that Observables are closer to shipping than Signals are, so interoperability APIs could be deferred to a future DOM proposal. But this kind of interoperability and interchange should be explored early on.

DMF: Yeah. I know DE and Ben Lesh have the most comments about the interoperability between Signals and Observables. I unfortunately remain mostly ignorant of the specifics of the Signals proposal. So I mostly let them speak on it. Maybe Daniel has thoughts on it, but I don’t know about Signals and I defer to other folks helping me design this.

DE: Signals represent a current value, whereas Observables represent more like a stream of events. When you have an Observable, which represents “the value changed to this new value”, then you can make a Signal which represents the current value which was the last one. So Signals are not about making sure the callback gets called on every iteration. But instead, they enable you to have a calculation that’s dependent on the current value and that you can refresh that calculation when you want it. So based on the Signal proposal API, in particular based on the `Signal.subtle.watched` and `Signal.subtle.unwatched` callbacks that you have in the `Signal.Computed` constructor, you can make in just a couple of lines of code conversion function which take an Observable and expose it as a Signal. It would be subscribing to the Observable when the install is watched by a Watcher. And conversely, the conversion could go in the other direction. You could install a Watcher on a Signal that fires an event to the Observable whenever the value changes. So I think the conversion makes sense in both directions.

DE: It’s important not to confuse them in terms of use cases, in particular. Observables have been misused for reactive rendering and that doesn’t work well in practice because it causes glitches. I really hope the way Observables are explained to developers makes clear that it’s not the core reactivity approach for the web. For certain cases, it does make sense to translate like that.

JSC: Yeah. I understand that these two concepts, Observables and Signals, are complementary. I think that coordination by both standards’ champions will be really important in developer messaging, to make their use cases clear to developers on MDN, on Web.dev, other developer blogs, and whatever—so that developers know what Observables’ and Signals’ respective roles should be.

JSC: With that said, I know DE mentioned that feeding an Observable into a Signal or vice versa takes only a couple lines of code. I am hoping in the future, in DOM, there will be one-line ergonomic APIs that make such conversion/interchange from one into the other very easy.

DE: So, DMF, you mentioned that Chrome shipped this already. (It’s not a standard because WICG things are not standards-track inside principle.) I am wondering what the feedback has been from other browsers.

DMF: We’ve had some—some neutral or positive feedback from Mozilla folks in person at standards conferences but [?] on the repository that have taken a lot of time to analyze it directly, and that’s relatively common… WebKit almost flipped their position bit [to positive] but really wanted it to be shopped to TC39 first, before feeling comfortable to do so. I expect a positive response from them, providing there’s no red flags or concerns. And there's an almost complete implementation of observables in WebKit as well. So it wouldn’t be hard to get them to ship in. They have been reviewing it pretty promptly. So yeah. You know, informally, positive and zero negativity.

DE: Are you interested in input from TC39? You said it’s done. How would you like to work together from here?

DMF: Yeah. For context, the intent was to give this a while ago for logistical reasons, this was not got to in one of the last meetings. It is being given a little late. I guess like you know an informal kind of check would be useful to go back to the report to the other browsers that there’s no major concerns about this to folks. If that is true. I think we’re close to that point because we have gotten good feedback from TC39 folks informally, JHD and KG particularly. Just a quick temperature check to make sure this doesn’t jump out as a completely horrible idea or like—these things need to change. And there’s no fire lit under people’s feet to like fundamental issues against the repository. Just to keep folks updated and it’s updated. I don’t think we need a formal thing and think that would be sufficient.

DE: I am somewhat worried that people are going to use Observables for situations where they really mean to use Signals. And I think that was a big ecosystem problem when Observables were discussed in the past: That people thought they were confusing, and a lot of the confusion comes from this category misuse. It’s good for us to be adding it. But I hope that the educational materials about Observables avoid misdirecting people in that particular way.

DMF: Yeah. I think that’s a good point. Ben Lesh, the creator of RxJS, seems to strongly agree with that. And I think all of the messaging he has been doing continually about how they interact with the platform and how they compare to Signals is pretty aligned with that. It’s possible to do more messaging to hammer down that point. But for what it’s worth, everyone discussing it externally, I believe, from the platform perspective is on the same page.

DMF: What is that thing you mentioned, the temperature check tool? I don’t know anything about that but…

DE: Like we have this thing where we could give emoji reactions. I don’t know if that’s what you want, but we use that for informal polls sometimes that are supposed to be non-binding.

CDA: I don’t know if we need to have a check, but…Usually we have something more concrete that we’re trying to get a temperature check on rather than just “how do we feel about that proposal”? But let’s keep moving through the queue.

JRL: Can you show me the slides where you call—this is perfect. The `observable.subscribe` here. As far as I can see, there isn’t any slide that uses the return value from this. Maybe it doesn’t return anything. We also have other slides where we were shown passing in an AbortSignal separately during the `subscribe`. The `subscribe` could return a subscription and the subscription could have the thing to cancel at that point. We have discussed the integration with iterables, the subscription, the return value here is the thing that could hold the asyncIterable method,that lets you get an AsyncIterable back to convert it back and forth. Like, it seems like `subscribe` should return something is my point.

DMF: So I think you mentioned subscribe like you expect subscribe to return a—I think you said a subscription that you can cancel based on that. That’s not the case because the reason is that if you are the first subscriber, we run the producer function synchronously. And if it happens to produce an unlimited amount of values synchronously, until the consumer aborts the subscription, you never get a chance to abort, because `subscribe` would in the start. You pass the signal into the `subscribe`, that’s now `abort`, and abort the subscription if you need to with the controller inside any of the subscription handlers. There’s some discussion, an open issue about possibly because that’s such an obscure case, there’s discussion about actually having `subscribe` return something that’s cancelable and limited in that case. It doesn’t run anything and you do pass in a signal as a second dictionary to `subscribe`.

JRL: The case you are describing is that subscription itself immediately calls the producer, the producer could start pushing an infinite loop and you would want to cancel at that point. Doesn’t that mean the producer is an infinite loop and we never do code anyway.

DMF: No because if the producer is in an infinite loop and it’s like—you could imagine an example where it—the call stack, I call subscribe. That calls, and infinite loop. A for loop would be calling `subscriber.next` .

JRL: Why would the producer on this side ever yield so that the consumer could get values like, if we are in an infinite loop, it doesn’t seem like a valid use case.

DMF: If it’s calling that next synchronously in an infinite loop, the next handler would run and the next handler would abort the subscription after it receives a certain number of values it wants. It could be waiting for one of the values and then once it finally receives it, it aborts the subscription and the user can constantly check this gives the way to tell the producer to stop producing values even if it produces it synchronously.

JRL: The subscription’s `next` callback is being invoked immediately during the `subscriber.next` () callback.

DMF: Yes.

JRL: Okay. If we were to yield the task thread one tick, before calling the producer’s producing function, does that solve the same case without forcing us to have the AbortSignal separately?

DMF: It does, but then it produces—we discussed this a bit. It produces a tricky situation where like sometimes the producers—like, yeah. You are saying, we don’t call the producer callback synchronously during `subscribe`? You are saying there’s a microtask gap or something.

JRL: Right.

DMF: We discussed that and we rejected it for reasons that are not inside my head right now. There’s discussion about this, though. On one of the issues. I can try and pull it up and put it in some notes or something. But this was discussed in part of the ref producer discussion. And yeah. So I think maybe… yeah. I don’t have all the context in my head, but we did discuss this and decided not to go that path.

DE: We in TC39 had trouble working with the web platform in the past on ergonomics. For example, with Temporal, we designed Temporal to work well with having types that model different things in the DOM. And the principle that so far that we have gotten feedback from WHATWG, we could add things to the DOM later, post initially shipping, if that makes sense, if Temporal proves itself out. Betting against each other. I am wondering how this will work when applied to, for example, we add more iterator helper methods, then we add them at the same time to Observables? Or would we just kind of see if it works out shipping one and adding to the other? When we make changes at the TC39 level, we try to make them coordinated at the same time. But even for older features like Promises: when promises were created, there was the idea to have a `.loaded` accessor that would return a Promise, and that never happened. I am wondering how we should work together across the venues on these ergonomic issues, now that DOM is getting into those?

DMF: I mean, it would be my intention to keep the set of like Iterator/AsyncIterator helpers up to date and with the Observable operators. I don’t have a particular reason or appetite to hold off on one that makes sense. Just to see if it kind of goes well in TC39 land. So I would like to keep these pretty up to date and pretty synchronized when possible. Which is kind of why we started with that initial list right off the bat and really didn’t deviate from it. Because you know, there’s some operators that you could do without [?] observables, but we felt the consistency between the helpers was important. So yeah. It would be my intention to keep them up to date and have enough cross-talk between the orgs to kind of synchronize the introduction of those changes. Does that answer the question at all?

DE: Yeah. That sounds perfect.

DMF: Cool.

CDA: MF?

MF: Yeah. This is a—I generally, I am in favor of doing this work across venues. When developing iterator helpers, we might not be taking into account the needs of observables and in our design there, I think that we may fail to account for something that is important. So I do hope that even if it is being developed in a separate venue that we keep in communication on those topics in particular. So that we don’t forget to be involved and be involved in the process early and don’t forget to take into account your needs.

DMF: That’s perfect. I am glad we are on the same page on that.

DE: So you described the proposal as done. How does TC39 could make itself a more attractive venue for discussing proposals even across venues before they are done?

DMF: So I think—for all web APIs or things that have started incubation in TC39?

DE: We wouldn’t be interested in bringing every web API here. Only ones that have clear overlap. This one had a particular history; people here were interested in it.

DMF: I think yeah. I think your question applies to the ones that you mentioned have some significant overlap or some history in TC39. I think I probably should have just like—we were—we got the feedback to shop this around to TC39 a little later than I would have liked. And I tried to do this, I think it was December or October and it didn’t work out last minute. So I am presenting this rather late. How to make TC39 an attractive venue? The rare proposal that has this larger overlap, should be probably earlier. I don't think there’s anything about TC39 that was off-putting or unwelcoming. I feel like we didn’t consider it early enough probably. And the fact it was moving—I don’t have much experience with TC39, the process and it was moving out of the TC39 was, in my head, you know, we discussed with SYG and okay. Do it and do it over here. I think some earlier cross-talk would have been better. I mean, yeah. I don’t know. Maybe just informing editors in both groups that we should talk more is the best thing. But that’s the lesson I learned from this, at least.

DE: That makes sense. Even if nothing comes to mind now, if there’s something offputting about the group or anything in the organization you can think of later, I want to figure out how to address it at the TC39 level.

SYG: Let me jump in a little bit here. I think reputationally TC39 could improve and I see proposals that tried to move in that direction, though there was strong disagreement from both sides from MLS procedural for consensus processing improvement yesterday. Those are the proposals that would move TC39’s reputation for its process and deliberation to be more welcoming for web proposals.

CDA: And on that note, we are at time. So thank you, Dominic. Thanks, everyone. Great discussion.

DMF: Thank you so much. Appreciated.

### Speaker's Summary of Key Points

- DMF presented WHATWG Observables for general feedback to the TC39 plenary.
- DMF outlined the major design decisions made over the past 6 months or so, and asked if there are any general thoughts or big concerns.
- The proposal was originally a TC39 Stage 1 proposal in 2015, Observables moved to WICG/WHATWG to integrate more closely with DOM Events.
- There was some discussion about the history behind the original authors of the TC39 Observables proposal.
- It has been implemented in Chrome and partially implemented in [WebKit but wished first for feedback from TC39](https://github.com/WebKit/standards-positions/issues/292#issuecomment-2682983190).
- The Committee raised questions on cancellation design, observable/iterator/Signal interoperability, and possible developer confusion between observables and Signals, but Committee reception was largely positive.
- Feedback emphasized the need to have good developer messaging, to help the community understand the complementary and distinct use cases for Signals and Observables, and for ergonomic APIs that allow easy conversion/interoperation of data from Signals to Observables and vice versa.
- There was discussion about:
- How to maintain a positive relationship between WHATWG and TC39.
- How to encourage more cross-venue discussion for future relevant APIs earlier in the process.
- How to improve TC39’s reputation and make it more welcoming for relevant web proposals.

### Conclusion

- Positive overall feedback.
- Discussion about how to increase early collaboration between WHATWG and TC39.

## Continuation: Normative: Mark sync module evaluation promise as handled (#3535)

Presenter: Nicolò Ribaudo (NRO)

- [proposal](https://github.com/tc39/ecma262/pull/3535)
- [slides](https://docs.google.com/presentation/d/1kheOg1AZDj-T9n0O-0sbd5IBwvnjiODyJcK1Ez6Q0JU)

NRO: So this was presented on Monday, I believe, it was blocked because there was some confusion. The problem specifically was this HostPromiseRejectionTracker hook exposes some promises to the host that are not exposed to JavaScript code and the promises were internal and the host hook would expose them. I went through the various promises that got rejected in the stack (spec?) and there are a bunch of internal promises that get exposed to the host hook. Like, the ones from missing from—these are internal and bunch of promises in the module stuff that—but this is one way to expose. And I don’t—I talked with MAH and I solved this, but it seemed to be fine. There’s not an issue but it does not make it worse. Is that correct, MAH?

MAH: Yeah. I think from what I understood, this doesn’t make it worse. It actually makes it better. In the sense that, like, most hosts will not synchronously notify—give user-land the ability to interact with an unhandled rejection. They will usually queue that up until the promise queue drains and then fire events or callbacks or whatever mechanism the host has. And what I understand about this change, is that it basically makes the promise handled before draining the queue in this case, and so this guarantees effectively that the host would not—if the host has that behavior, it would not expose that internal promise to the—to any user callback.

MAH: There might be other places in the spec where we’re creating promises that are assumed to only appear internally and that may end up being exposed to user code through the rejection mechanism. However, as NRO mentioned, that’s probably something we should more holistically review and see if there’s anything we want or should do about it.

MAH: My main concern and the reason I raised in the first place, when you expose the promise object that is meant to be internal, to userland, userland can go and modify the promise object, and given the way promise works and I am not convinced that couldn’t interfere with the host or spec implementation later trying to observe the result, resolution of the promise, and somehow cause some synchronous reentrancy. We have talked about this before in committee. And we need to be more careful with how we handle promises. And until we have a way for spec or host code to safely handle promises without—while guarding itself from potential user code interference and causing reentrancy, we don’t want to create these situations in the first place.

NRO: Yeah. All of that matches my understanding. So yeah. I would like us to—I want to know we are work zeroing in on that. We should only tell the host the promise it was handled if it was wasn’t handled before. But yeah. We will review this again. So do we have consensus now for this normative change?

MAH: I am definitely—I think MM held consensus for me.

MM: Yeah. I was convinced, I held consensus specifically for MAH so you have support from Agoric.

NRO: Thank you. We have consensus now.

### Speaker's Summary of Key Points

- NRO and MAH discussed MAH’s concern about spec-internal promises being exposed to user code through host hooks.
- In fact, the proposed change would reduce the risk of spec-internal promises being exposed to developers.
- There might be other places in the specification that creates promises that are assumed to only be used internally and could potentially be exposed to user code through the rejection mechanism. This will need to be reviewed holistically further in the future.
- MAH and MM are no longer concerned about the proposal.

### Conclusion

- Positive consensus for the pull request.

## Continuation: Reviewers for Export Defer

NRO: I still need reviewers for expert defer—

CDA: The next topic, who would like to review export defer Stage 2?

USA: I can offer to help out.

NRO: you are a colleague of mine

USA: Yeah. To help out with the technical stuff, doing the review.

CDA: Looking for two stage 2 reviewers for export defer.

CZW: I can help with reviewing.

CDA: Chengzhong. Yes. Looking for one more.

NRO: I will review one of the proposals back.

CDA: You got quid pro quo offer from Nicolo reviewing. Can we get one individual to help review export defer spec?

ACE: I will review it.

CDA: All right. Thank you, Ashley.

CDA: MM asks to confirm that non-extensible got 2.7. I believe that is true.

CDA: It was conditionally approved pending that review and then you got that. So it officially is 2.7.

MM: Thank you

### Speaker's Summary of Key Points

- Stage 2 specification reviewers are required for the export defer proposal

### Conclusion

- CZW and ACE will review. USA will also help.

## Plenary conclusion

CDA: All right. With that, our next topic and technically lunch, but we have nothing else scheduled for the afternoon. This brings the 107th meeting of TC39 to a close. Thank you, everyone. And we will see you in the—the next one is coming up quick, in May. Yes

USA: Yes, and please sign up for it.

CDA: Are we still looking for people to volunteer to—for talks at the community event?

USA: At the community event as well. Like, if you are even somewhat motivated to do this, please let me know, I will be happy to help out. Basically having an idea who would be available to do this or for a panel, for that matter, would be really helpful because it would help us set an agenda, start inviting people, put it up somewhere, so that people can sign up basically. Yes.

MM: What about people who are attending only remotely?

USA: I don’t believe we need to register, then. Like we can accommodate you

MM: Is the nature of the community event such that someone who is attending only remotely, still appear at a community event

USA: That’s a great point. Thank you. I hadn’t considered this, but I think it should be possible. I confirm this to you in person—or I mean, on DM.

MM: Thank you.

CDA: And another huge thanks to all the people that volunteered to help with the notes at this meeting. That would be ACE, ABO, BLY, CDA, DLM, EAO, JMN, JSC. CZW, DE, NRO, and SFC. Thank you so much.

USA: Thanks, everyone. And thanks also to our transcriptionist.
