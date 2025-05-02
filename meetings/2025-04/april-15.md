# 107th TC39 Meeting

Day Two—15 April 2025

## Attendees

| Name                   | Abbreviation | Organization       |
|------------------------|--------------|--------------------|
| Waldemar Horwat        | WH           | Invited Expert     |
| Daniel Ehrenberg       | DE           | Bloomberg          |
| Samina Husain          | SHN          | Ecma International |
| Josh Goldberg          | JKG          | Invited Expert     |
| Daniel Minor           | DLM          | Mozilla            |
| Chris de Almeida       | CDA          | IBM                |
| Jesse Alama            | JMN          | Igalia             |
| Michael Saboff         | MLS          | Apple              |
| Aki Rose Braun         | AKI          | Ecma International |
| Dmitry Makhnev         | DJM          | JetBrains          |
| Bradford C. Smith      | BSH          | Google             |
| Ron Buckton            | RBN          | Microsoft          |
| Eemeli Aro             | EAO          | Mozilla            |
| J. S. Choi             | JSC          | Invited Expert     |
| Istvan Sebestyen       | IS           | Ecma International |
| Ben Lickly             | BLY          | Google             |
| Philip Chimento        | PFC          | Igalia             |
| Richard Gibson         | RGN          | Agoric             |
| Jonathan Kuperman      | JKP          | Bloomberg          |
| Mark Miller            | MM           | Agoric             |
| Gus Caplan             | GCL          | Deno Land Inc      |
| Zbigneiw Tenerowicz    | ZBV          | Consensys          |
| Mikhail Barash         | MBH          | Univ. of Bergen    |
| Ruben Bridgewater      |              | Invited Expert     |
| Ashley Claymore        | ACE          | Bloomberg          |
| Luca Forstner          | LFR          | Sentry.io          |
| Ulises Gascon          | UGN          | Open JS            |
| Matthew Gaudet         | MAG          | Mozilla            |
| Kevin Gibbons          | KG           | F5                 |
| Josh Goldberg          | JKG          | Invited Expert     |
| Shu-yu Guo             | SYG          | Google             |
| Jordan Harband         | JHD          | HeroDevs           |
| John Hax               | JHX          | Invited Expert     |
| Stephen Hicks          |              | Google             |
| Peter Hoddie           | PHE          | Moddable Inc       |
| Mathieu Hofman         | MAH          | Agoric             |
| Peter Klecha           | PKA          | Bloomberg          |
| Tom Kopp               | TKP          | Zalari GmbH        |
| Kris Kowal             | KKL          | Agoric             |
| Veniamin Krol          |              | JetBrains          |
| Rezvan Mahdavi Hezaveh | RMH          | Google             |
| Erik Marks             | REK          | Consensys          |
| Chip Morningstar       | CM           | Consensys          |
| Justin Ridgewell       | JRL          | Google             |
| Daniel Rosenwasser     | DRR          | Microsoft          |
| Ujjwal Sharma          | USA          | Igalia             |
| Jacob Smith            | JSH          | Open JS            |
| Jack Works             | JWK          | Sujitech           |
| Chengzhong Wu          | CZW          | Bloomberg          |
| Andreas Woess          | AWO          | Oracle             |
| Romulo Cintra          | RCA          | Igalia             |

## Don't Remember Panicking Stage 1 Update

Presenter: Mark Miller (MM)

* [proposal](https://github.com/tc39/proposal-oom-fails-fast/tree/master)
* [slides](https://github.com/tc39/proposal-oom-fails-fast/blob/master/panic-talks/dont-remember-panicking.pdf)

MM: So last time we brought this to the committee, it was called must fail fast, and it got stage 1, and then it got blocked from advancing from there for reasons I will explain. And this is a Stage 1 update. Since then, the proposal—we renamed the proposal “Don’t Remember Panicking.” So I’m going to linger on this slide for a little bit because this is the code example I’m going to use throughout the entire talk, so it’s worth all of us getting oriented in this code example. This is a simple money system. Don’t worry if you stop bugs, it’s purposefully a little bit buggy, which is—in order to illustrate some of the points.

MM: At the top here, this is just a validity check or it’s a Nat that takes a number and this number is a natural number, i.e. non-negative, and otherwise it returns it. Instances of class Purse each represent a holder of money such that money can be moved from one Purse to another. This money system has exchange rate conversion built into it, so for each Purse, there’s a number of units of some currency, which is the variable field, and then there’s a unit value, which is how much is each unit of that currency worth in some quantum unit of currency, some fine grain quantum unit of currency. And then we use that on construction to ensure that both of these are not negative. And all of the action, everything interesting is in the deposit method, because the deposit method is there to implement transactional totality. All the effects happen or none. The effects are that removing myDelta units into this purse, the destination purse, withdrawing the worth of those units from the source purse, and we’re trying to keep the total worth approximately conserved.

MM: So this is implementing the transactional totality using the prepare-commit pattern, which I do recommend, and the prepare commit pattern has a prepare phase that provides the “none” of the “all or none”, which is it’s doing all the input validation, all the precondition checking such that all possible throws or early returns happen here, and in particular, no effects happen here. So if you throw an early return, no damage has been done. And this particular prepare phrase checks that that is an instance with this dot sharp here, that this is an instance of the Purse class that, source is an instance of the Purse class, that myDelta, the units—the number of units we’re transferring into this Purse, the destination purse, is now negative, and this outer Nat is checking that `src` would not be overdrawn. So if any of those are reasons to bail out early, we bail out early, not doing any damage, and otherwise, we go past the commit point into the fragile phase. The fragile phase is a thing that implements the “all” of the all or none, which is that once you start into it, you’re performing effects, and the correctness of the system depends on all of these effects happening, that there is no bailout in the middle here after you started to perform some effects.

MM: Okay. So in JavaScript, the JavaScript spec does not admit the possibility of out-of-memory or out-of-stack, but if, for example, the numbers we’re computing with here are BigInts and even a multiply allocates and depends how it is implemented, even with what numbers multiply, it might allocate, it also might need a new C stack frame, and any time there’s an allocation, there’s always the possibility that there’s no more memory to allocate or that you’re out of budget for the total stack space or total number of stack frames, and because this can happen anywhere and the possibility is not part of the acknowledged semantics of JavaScript, it’s just unreasonable for the programmer writing something like this to have to be—think to be defensive against errors like this. And if they happen, then in this case, if it happens, then the destination Purse, this Purse, it’s incremented, but the source Purse, the one that its units were not decremented because of this failure.

MM: So you could think that, well, maybe the programmer should just be defensive in general in the fragile phase by putting it into a try/catch, which makes a lot of sense, except that in the programmer has no idea why this block might have failed, maybe it failed in the plus equal here rather than the multiply, if they don’t know why it failed and without an extraordinary amount of bookkeeping to consulted, know what to do to repair the damage. We have unknown corrupted state, and to proceed with execution with unknown corrupted state is to compute forward with corrupted state and continue to do damage, and since we don’t know what’s corrupted, we don’t know what further damage will happen. So this is not a tenable situation.

MM: So what the first version of this proposal was exclusively about was out of memory or out of stack policies, and what we were advocating is that when such an exception—such a problem state happens, a default happens, that the agent exits immediately, and the agent immediately terminates because any further execution of JavaScript code after this point is just too dangerous. However, when we presented this, we ran into the objection that, from browser makers in particular, that browser makers currently do throw on the out-of-memory and they were unwilling to change that as the default policy, because there’s too much code out there that counts on being able to continue after such things happen.

MM: And in slides coming up I’ll explain why that’s actually quite a sensible policy, especially given the view of JavaScript when the browsers arrived at that policy. So instead of proposing that it be a part of the JavaScript spec, that we immediately terminate, we’re instead proposing that the decision, the policy decision, is delegated to a host hook, and the host hook, we’re generalizing it from just out-of-memory and out of stack to a bunch of different faults where you—we provide the host with a fault type and an argument that can provide additional information per fault type. So in order to make sense of this, we need a taxonomy of fault types. Oh, wrong taxonomy. Those are earthquake faults. Let’s go to software faults.

MM: After unrepairable corruption has happened, the most important part of our taxonomy is that it’s not possible to continue with both availability and integrity. You can’t compute forward from unrepairable corruption preserving both availability and integrity. So one possibility, one possible choice for the host fail stop, which is to sacrifice availability for integrity. That’s certainly what you want for some—you want transaction totality like money system, where user assets are at stake, but the—with the browsers expressed as their desire for the default policy is what we would instead call best efforts, which is to sacrifice integrity for availability, to remain responsive.

MM: And so remember that the browsers arrived at this behavior during the ECMAScript 3 days or earlier, I arrived at ECMAScript 3, which and the entire language was what we are now calling sloppy mode, and even in a failed assignment, you just continue to pass the failed assignment silently, going on to the next instruction, and the reason for that was the engineering goal review of JavaScript and browser behavior at the time is the most important thing those two preserve availability of the page, to preserve that the page stays interacting, even if the price of that was to compute forward with corrupt state.

MM: So the next part of our taxonomy is these four levels of severity of a software fault. So the first level of severity is that, and I’m—and now I’m being a little sloppy with the word “host”. I mean, “host or JavaScript engine, but not JavaScript code”. This is the code that implements what JavaScript code sees. It detects that its internal state is corrupted, for example, an internal assert is violated. I’m just guessing here that the browsers have something like an internal assert as well. I’ve only studied the internal faults for XS, and I’m guessing that the browsers, but if the internal state of the host or JavaScript engine is corrupt, then I’m assuming that we all agree that those cases do call for fail-stop. And in browser receive the blue tabs of death; for XS, which is meant primarily for devices, there’s the quite sensible policy of just rebooting the device, not computing forward with corrupted state, and they’ve found that to be a much more robust way to continue. And for XS, the out-of-memory, out-of-stack, are in this severity category, because the excess machine is not built to guard its own integrity against these conditions.

MM: The browser engines, we’re guessing based on the objection previously raised, that they are built so that following out-of-memory and out-of-stack, that the JavaScript engine and host have not lost their internal consistency. That their internal invariants still hold, but they’re now in a position that they cannot continue executing JavaScript while upholding the semantics of the JavaScript spec. The error that they throw is outside of the JavaScript spec, and because it’s outside of the JavaScript spec, it’s outside of what the JavaScript programmer thought they could count on, and therefore, we should assume that the JavaScript code is now continuing to compute with its state corrupted, even though the C state, so to speak, is uncorrupted.

MM: So at this point, so for this severity level, it makes sense for the host to decide between best effort and fail stop depending on whether integrity or availability is the overriding goal. But if a host chooses fail stop, we think that it should provide some API, we’re not proposing what the concrete API for this would be, but if the default policy is best efforts, we’re advocating that the host provide some API such that the JavaScript code can opt into fail stop to protect itself, such as for such banking examples, and in fact, we would propose that, whatever this API for opt into fail stop is, become standardized as part of JavaScript.

MM: Okay. The next level of severity is the host is fine, the JavaScript—the host can proceed within the JavaScript spec, but something happened such that we can think of the JavaScript code itself as likely being in trouble, where some symptom that we know about that the host can react to based on the assumption that it indicates that the JavaScript code might be in trouble, so unhandled exception, unhandled rejection are the well-known ones, there’s also for XS has metering built in such that it can be out of time. The browsers, in order to cope with an infinite loop happening within JavaScript code, might time that out and then have some strategy for continuing execution if that times out. And then the next lower level of severity I will come back to. But let’s at this point, to motivate that remaining level of severity, let’s go back to our example.

MM: So now that we’re familiar enough with this code as a whole, let’s just scroll further to where we see both the deposit method and some code for testing it. So there is an obscure bug in this code, or maybe not so obscure to some of you, but the nature of this bug is such that it can survive zillions of test cases like this. It might survive during development and review and test cases because it requires a weird data coincidence in order to reach the bug. So the result is that the data coincidence might happen first in deployment at a customer site, having survived development and testing. And the data coincidence is shown over here, where it happens if we’re providing it BigInts rather than numbers, and that there’s a zero here on the unit value of the source Purse, which is not something that might—that the developer might have thought to try, and a zero in the amount in the destination Purse of the amount we’re trying to increment the destination Purse by. If there’s a zero in both of these positions, then this divide operation will throw a range error, and if we continue computing past that throw, then because we never noticed the possibility of this bug during development, we now, again, have corrupted state in deployment in a user code, in a customer site, which really bad. And we might, again, try to do thing about this by put a try/catch around it, but, again, if we don’t know what the problem is, we don’t know what to do to repair the state without extraordinary amount of extra bookkeeping, so the most we can do is log it or try to do some kind of diagnostic that ultimately makes it back to the developers so that at least we know why Zalgo is laughing at that point.

MM: Now, surprisingly, there actually is a way in JavaScript today for this code to defend its own integrity and, you know, to sacrifice availability to do—to preserve integrity, at least as far as the spec is concerned. Which is it can go into on an infinite loop at that point, and as far as the spec is concerned, that blocks all further execution in this agent. Zalgo never gets to observe the corrupted state, never gets to do damage because of continued computing with the corrupted state, and we’re safe.

MM: But there’s two problems with this.

MM: One is the price of the safety is very expensive, and it’s expensive for the customer since this happens first at a customer site, and the other one is that if the host already has a policy that it engages in some remedial action like a throw or boarding the current turn, if it times out, like we believe the browsers do, and then continues execution, then that leaves what the semantics of the JavaScript spec and continues commuting anyway with corrupted state, so what we’re proposing instead is that the JavaScript code have some way to say, somebody stop me! Which is this `Reflect.panic` operation, which is a new API that we are proposing, so that it can become a practice when engaging in the prepare commit pattern to do a try catch and then to stop the agent, to abort the agent, you know, as soon as possible, as soon as the assumption with the front of the block is that no early exits happen here, if an early exit does happen here, that’s enough of a symptom to say, okay, we violated our basic assumption of fragile block, we don’t know how to repair the damage, just terminate immediately.

MM: Another thing to do with the `Reflect.panic` is that the JavaScript code itself can now just do an assert-like operation where the current asserts might throw an exception, throw an error, when the assert—when the assert condition is violated, a more severe JavaScript code might say that, well, in assert gets violated, I have no idea how to continue, so just panic at that point.

MM: So that brings us to the remaining—the next lower integrity level, which is the JavaScript code notices some corruption through a failed JavaScript level assert or an exit for—from fragile block, calling the `reflect.panic` , which in turn calls the host fault handler with the fault type, user panic, provide—and then whatever arg is provided here becomes the extra data provided there.

MM: Now, throughout this talk to this point, I’ve been saying repeatedly abort the agent, but there’s been a conversation on this WHATWG thread in the HTML repo going back to 2017 on three different bug threads, including the new bug thread as of a few days ago of what the actual unit of computation is that needs to be aborted when we need to abort this, what we’re calling in this talk the minimal abortable unit of computation, and what these are discussing is, do we have to abort an entire agent cluster?

MM: So a way to visualize the dilemma is: agents, before the introduction of SharedArrayBuffers, the agent was indeed the minimal abortable unit of computation because objects within an agent were indeed synchronously coupled to each other and in general, computation from an agent is synchronously coupled to each other, so you would have to abort worth at least the agent, but back then, agents were only asynchronously coupled to other agent, so I could abort an agent and then other agents were in a position to react to the sudden absence of an agent they had been talking to.

MM: With the introduction of SharedArrayBuffers, agents could be coupled, asynchronously coupled to other agents, so the agent cluster, which is what those HTML threads are about, is—what we’re in this talk calling the static agent cluster, which is all of the agents that might be synchronously coupled to each other because they might share a shared ArrayBuffer. So that is certainly a sound unit for jointly aborting, but it’s not really satisfying as the minimal unit, because it’s—there can be a tremendous number of agents within the agent cluster, and sacrificing all of them to preserve consistency seems unfortunate.

MM: So fortunately, there is a smaller unit to abort, which is what we’re calling here the dynamic agent cluster, which is at the moment the fault happens, let’s say the fault happens within this agent, if the fault happened within the agent, then at the moment of the fault, the—first of all, the processing of the fault is clearly something that can be the on the slow path. Nobody cares how long it takes a kill a bunch of tabs. The—what we can do is if the fault happens in that agent, you can say, at that moment, what is the transitive closures of—closure of agents synchronously coupled to the agent in which the fault happens at that moment? And then tell the transitive closure of those agents, the ones in that agent cluster, and this one would be killed and this one would not be killed, even though it’s in the same static agent cluster.

MM: So the assumption that we’re making in providing this host hook that can choose to abort this minimal abortable unit is that it is allowed for this new host hook to not return a control to JavaScript. However, the actual text of the spec says something that in fact JavaScript engines generally violate, which is that the host hook must return either with a normal completion or a throw completion. Instead, execution today, depending on what goes wrong, might core dump or produce some other kind of diagnostic snapshot, depending on the host, on Node.js `process.exit`, which granted is not actually a host hook, but just a host provided built-in, is a, you know, process is the host object, does not return control to JavaScript. And of course, the browser blue tabs of death.

MM: So we want to acknowledge that by allowing, in particular, the host fault handler not to resume JavaScript execution. Hold on. But there’s actually another way to not resume other than simply death before confusion. It’s certain three case that you can’t resume by simply allowing computation to proceed forward, but one of the reasons why the browsers to the blue tab of death preserving the URL in the URL bar is to give the user the choice to just refresh the page, the host hook could conceivably just decide to have refreshed the page on its own, although I don’t recommend it. I think giving the choice to the user is more sensible. But in this case, the reason why refreshing the page, after repressuring by the user choice or browser choice makes sense, is you’re to falling back to a previous consistent state. You’reimmediately forgetting—you’re abandoning all of the corrupted data state. You’re abandoning it immediately, no further damage happens, and you’re falling back to a previous consistent state. XS in rebooting the device does exactly that. The previous consistent state is the state in RAM.

MM: A friend of mine who is doing an extremely reliable operating system one day was talking to somebody who does software for pacemakers, which clearly need to be extremely reliable, and asked them, okay, how do you deal with various kinds of fault that might happen in your own, you know, pacemaker software? And he said, you know, the heart is an extremely fault tolerant device. It can miss a beat or two without much worry, so we just reboot the pacemaker, and that works. And by rebooting, we restart from exactly this previous consistent state that’s in one. But if it took ten beats to reboot the pacemaker, that would be a very different story. At that point, you might prefer best efforts. And then Agoric does a full transactional abort, which is between transactions, Agoric has stored enough snapshot and log information that we can completely abandon the corrupted state, the state of the aborted transaction, and restore from a previous consistent state and continue to compute forward from there.

MM: So this kind of amnesia before confusion is a way to preserve both availability and integrity, so this policy of providing this kind of abort of this minimal abortable unit supports hosts that want to have some kind of fallback to a previous consistent state.

MM: So this brings up—that brings us to the larger question of how one builds fault-tolerant systems, and what faults fault-tolerant systems are trying to survive. So there is the conventional dichotomy of building fault-tolerant systems out of Byzantine components and out of fault-fail stop components, and usually this is discussed in the context of hardware faults, with with the hardware faults are assumed to be non-replicated so that you can have multiple replicas running the system that—where the fault occurs in a minority of the replicas, so with Byzantine faults, the—it’s assumed not to fail stop. It’s assumed to continue forward computing with corrupted state, and, therefore, be unpredictable, and furthermore, more generally, Byzantine fault means that the individual, that piece of hardware may indeed be malicious, which is the assumption behind Byzantine fault tolerance and blockchain, and, you know, this is hard, but there’s zillions of systems now that to exactly there, and that copes with the supply chain risk where some of the hardware running the computation might indeed be malicious.

MM: And then there’s just the more common hardware assumption that you can build the hardware to act in a fail-stop manner, and then all you need is simple redundancy and voting that—so that is represented by systems like the tandem non-stop, where the replica that loses the vote just drops out. Also various failover schemes are essentially in the same category. But there’s the more interesting category of failable applications, what if there’s a bug in the code or what if there’s a fault in the interaction of the user code, the application code, and the software that the application code is running on where all of the replicas are running the same software, in which case, any of those faults are replicated. And if they’re replicated, the hardware redundancy is of no help at all. You have to—we have to engage in other coping mechanisms.

MM: So what Agoric has certainly been focused on mostly is replicated faults that are Byzantine faults, which are, for example, library supply chain risks, where a library itself is linked into your software might be malicious, and now we’re trying to—we can’t mask those errors, but we can reduce the severity of those faults with principle of least authority providing the library with no more ability to cause effects to do their job, which is often tiny compared to the—to the status quo of what’s provided to libraries today, object capabilities, defensive consistency, where individual components are programmed to maintain their own consistency in the face of malicious callers and compartmentalization, which is the what the compartments proposal was about.

MM: But today, what we’re raising is this other category of application faults, which are—where the faults are not malicious, and we would like to make the faults into fail-stop faults so that we can do fault containment, and which is what Erlang philosophy is about, it uses the philosophy, fail-only programming meaning the process, which is very much like our agent, that on the—if something goes wrong, it terminates immediately, and it leaves it to other agents, including an agent serving as the supervisor of the agent that fails, but in general, other agents interacting with the failed agent, to react to the sudden absence of the failed agent. And that fits with the postmortem fails philosophy that we followed when we introduced weak references and postmortem finalization, which is as opposed to the Java finalize method, which is a method on the object being garbage collected, which is if you’re being torn down or if you’re confused, you’re the last one that the system should ask to cope with the consequences that you’re about to go away, because you’re confused, you’re the least capable of being able to cope exactly with your own corruption. Rather, we should just kill you immediately without consulting you, and then let other code elsewhere deal with your sudden absence, and that’s—so we’re doing that for garbage collection with postmortem finalization within an agent and we’re proposing with these panic and fault handling to be able to apply that to the agent as a whole with other agents reacting.

MM: And that brings me to the end of this Stage 1 update, and now I will take questions after turning recording off.

DE: Hi. Interesting presentation. So `Reflect.panic`, you make interesting arguments for it, but overall, it seems like a pretty strong capability to be giving everyone to make it extremely easy to halt the program. Given points that you’ve raised before about how people compose programs without thinking so much about, you know, giving those components less privilege, it makes me worry that uses in the software ecosystem could let libraries call `Reflect.panic` when that isn’t want users of those libraries expect or intend to enable that. What do you think?

MM: I think that’s really the crucial question, and we went back and forth over this. And in fact, if you take a look at the Agoric software today, it’s all built on the opposite assumption. The Agoric operating system gives to—gives to the start compartment the compartment that’s able to hold privileges, five gives it a capability to terminate the agent immediately, and then we go through all the trouble of threading that exactly and only to that code that should be able to exercise that capability. And, yeah, that’s a lot of trouble, but we did it and it’s okay. And the thing that got us thinking the other way is that any code has the ability to go into an infinite loop anyway. So the infinite loop is the [INAUDIBLE] that says we can’t stop code from going into an infinite loop, so why are we treating the ability to—specifically to stop the agent with—or the dynamic agent cluster, stop the minimal abortable unit, to stop it indicating a fault. And the—and specifically indicating a fault. The Agoric operating system in providing capabilities actually provides two capabilities. There’s stop indicating that something was wrong, and there’s stop indicating a normal termination. And for the second one, stop indicating a normal termination, we still treat that as a protected capability. And we intend to keep treating that as a protected capability. Because exiting indicating that you’re done is not equivalent to an infinite loop. So this is basically just a sort of cheaper form of the infinite loop that also provides diagnostic information.

MM: And then I’ve got a PR that I will link to from the proposal repo, that I should have—but I’ve got a PR on the Agoric software where I’ve unthreaded the panic thing and provided panic as an ambient thing, as ambient as `Reflect.panic`, and in our case, it’s importable for module right now, but if this proposal makes it to Stage 3, then wherever that API ends up, we’ll move it there. But it was very pleasant making it ambient because we’ve got a lot of these fragile blocks of prepare commit patterns. We’ve got over a dozen of them, I think, and the internal assert that says, if this assert fails, I have no idea what the problem is. Just kill me now. That seems—it was certainly very convenient. It got rid of a lot of lines of code, and because of the equivalents with infinite loops, it didn’t actually create any danger that we did not already have.

DLM: I’ll just be quick since we have limited time. I also have some concerns about `Reflect.panic`.

PFC: I think there’s going to be a popular understanding of what `Reflect.panic` is for, if it becomes available, that I think will be pretty harmful for the web. I could just see it happening that somebody ships an assert library that panics when an assertion fails—which, as you pointed out in your presentation, has real use cases, there are times when you would want to use such a thing. But, you know, the library’s going to be available and the narrative that people will take away from it is 'oh, that’s more secure.' I can just see that panicking assert library being used in all sort of situations where it’s not necessary, which I think would really degrade the experience for users of the web.

MM: I agree with you. That’s a real danger. But the availability of the panic and the need to kill the minimal abortable unit, if certain asserts do fail, is an actual need. You know, the other thing that such an assert library could do today, besides the infinite loop, is if they know enough about the host to know what causes the host to panic, how to induce blue tabs of death, then they could do that.

MM: But I agree with you that this is why we went back and forth over this issue. One possibility going forward, and I’ll go ahead and ask for the committee’s reaction to right now—one possibility going forward is that we separate the user panic into a separate follow-on proposal, that the rest of this proposal is explicitly making room for. And this proposal, everything else that you heard today, which is generalizing it there just out of memory to a fault handling taxonomy with the severity levels, and the host policy and the ability of JavaScript code to opt into fail stop if the host defaults to best efforts, I think that all of that holds up well in the face of this criticism, so that we could keep that with room for panic and then have panic itself be a follow-on proposal. What does the committee think on that?

SYG: I don’t think `Reflect.panic` is a good idea. I think the UX is going to be different from an infinite loop. An infinite loop is your page hangs for a bit, things don’t work, and a thing pops up that says this page is not responsive, do you want to stop it? You are now, a `Reflect.panic` , the only realistic way I can imagine implementing it, if you want to kill the entire agent cluster, is an actual process crash, and there is no world where a browser vendor is going to ship an API that user code can call that makes it look like the browser’s render process crashed. There’s no world where that is going to happen. There are other ways to implement it, I suppose. But those are very invasive. We’re talking about a way to kind of communicate to all the running other threads, like workers and stuff like that, to basically stop at the next point, right? Like, if you don’t want to kill they right then there, have to communicate that says check this, interrupt and stop. I’m not sure if that’s what you want anyway, because, you know, if you have SharedArrayBuffers, you have shared memory, and you don’t kill if process right there and then whatever thread killed the bug, you don’t know how long the other workers are going to keep running until they receive that necessary message. Maybe that’s that you don’t want, and that’s a very invasive implementation technique that is likely to fly either. I don’t see how we can ever have a `Reflect.panic`. It comes down to we’re not going to ship something that makes user code make it look like there’s a bug in our product, right? That’s not something we’re going to ship.

MM: Okay. Noted. Thank you. I understand the nature of the objection.

MAH: Really quick, and I think this is reply not just to panic, but to others. We seem to focus a lot on what the behavior of the browser would be for the main thread. But this can also be called in any other agent, part of that cluster, for example, a worker, and where the main thread could survive and act as the supervisor, in which case the application itself can still programmatically handle this.

SYG: Sorry, was that a question or a comment?

MAH: Yeah, the question is there a world where `Reflect.panic`, for example, would be acceptable in an agent that is not the main thread?

SYG: I have no idea what the question is. I’m sorry.

MAH: Is it reasonable to imagine that `reflect.panic` would be—like—

SYG: It doesn’t kill the agent cluster, it only kills the agent?

MAH: `Reflect.panic` only kills the—would only kill the dynamic agent cluster that the agent they are sharing SharedArrayBuffers, so it’s entirely possible that the maybe thread would not be affected and only workers would be affected, if they’re not sharing a shared ArrayBuffer?

SYG: I see. Yeah, it sounds possible on paper. It still seems highly unlikely to be implemented.

DE: Yeah, you were suggesting we have a host hook, and we’ve also discussed however behavior from browsers is kind of complicated and varying. So how would you want that host hook to be defined in HTML?

MM: So let’s start with that we just take what browsers are doing right now, which violates the JavaScript spec, and instead, with this proposal, explain what browsers are doing right now as a host policy expressed by the behavior of the host hook, as we all understand, there doesn’t have to be a piece of software which is the host hook. The host hook is an explanatory device for dividing responsibility between JavaScript and the host, essentially the different hosts can express different policies, different hosts in fact have different policies with regard to host handling. Let’s bring the possibility of those different policies into the language by attributing them to the behavior of the host hook.

MM: Was my answer clear?

DE: No, because I don’t think there’s, like, a common enough or well defined enough behavior. Like, I still don’t know what you would want to actually write. I guess you described a general approach.

SYG: Yeah. Let me interrupt you there, Mark. We don’t have interop among the browsers for what happens for what kinds of out of memory.

MM: Ah.

SYG: There is no universal behavior and I think it is inaccurate to say, that we violate the spec because this is extra spec. It is just not a spec behavior.

MM: Well, JavaScript code continues outside of the semantics of JavaScript that the spec promised the JavaScript programmer they could count on.

DE: Well, sure. So the spec doesn’t say that there are any resource limitations, and by not being an infinite unbounded machine, it’s violating the spec. Is that what you mean, Mark?

MM: That’s what I mean. Is that in the—the previous time I gave—I brought this to the committee, my first thought was, you know, mostly there are two kinds of languages in the world: languages that cannot be implemented correctly, and there are languages in which it’s impossible to write a correct program. JavaScript is a language that cannot be implemented but on a infinite memory machine. Java, because of the machine error is one that can be correctly implemented but impossible to write a correct program because of the virtual machine error might happen at any time.

MM: So the—so for those particular hosts, so I mean now maybe I am using the term host, but since it’s not universal across browsers, each browser expresses, you know, its way of coping without a memory, we attribute it to that browse are’s behave and make it something that is acknowledged by the language as something that is according to the host’s choice. Just make it explicit so the JavaScript programmer knows it’s out-of-memory happens, we ask the host what to do. That doesn’t seem like a big ask to me. Let’s go on with the queue

DLM: Sure. I will be quick. It’s not clear to me even with SharedArrayBuffer, to guarantee the computation continues on another worker in a corrupted state. Just from scheduling point of view. And other—I don’t expect an answer. But it sounds like this is a building block for transactions, so why not just consider bringing a transaction proposal? That’s it for me. Thanks.

MM: So do you think a transaction proposal—You’re exactly right. This is a low-level proposal that facilities JavaScript code creating transactions and such things at a higher level. And there are, you know, many possible transactional semantics. If we did bring transactions directly to the committee, first of all, there are… I don’t see that the—I mean, the kinds of things you need to support genuine transactions, including falling back to a previous consistent state, I just don’t see engines being willing to implement that in general. Or hosting being willing to provide that in general. So I don’t see that that would be better able to advance. This is a much lower level mechanism that enables a much wider variety of coping strategies.

DLM: Yeah. That’s fair. I agree, it doesn’t—the transactions seems like problematic like in a JavaScript future. But I wanted to see if you considered that, given there are some concerns about this—especially with `reflect.panic` .

MM: Altogether, my sense is that this proposal without the user-level panic is still plausible, and that the user-level panic could be a follow-up proposal, because of these objections, it might not advance. Okay. Let’s go on.

[out of timebox]

### Summary

See topic continuation for summary.

### Conclusion

No conclusion; we’ll discuss further in a continuation topic, including a temperature check on the viability of this proposal without the panic API.

## Enums for Stage 1

Presenter: Ron Buckton (RBN)

* [proposal](https://github.com/rbuckton/proposal-enum)
* [slides](https://1drv.ms/p/c/934f1675ed4c1638/EYypvengQohMlG52w1qseW8BCwCkSG0Y-2ip8Zq7pxoOFw?e=Aklyqu)

RBN: Today I want to discuss enum declarations. I am Ron Buckton, I work on the TypeScript team. Enum declarations are essentially enumerated types. Provide a finite domain of constant values that are obvious to indicate choices, discriminants and bitwise flags. And a staple from C-style languages, VB .NET. C#, Java, PHP, Rust, Python, the list goes on and on. The reasons we are discussing this are several. One, the ecosystem is rife with enumerated values. ECMAScript is `typeof`--String based. The DOM has `Node.type`, which has its enumerated values on the Node constructor, this is the same. Buffer encodings are string based, or a string based enumerated type essentially. And Node.js has constants that are enumerated type or value-like functionality. But there’s no grouping. For users there is really no standardized mechanism to define enumerated type, ones that can be used reliably by static type. We talked about ObjectLiterals. But there’s a reason why that’s not really the best choice for this. I will go into that in a moment.

RBN: Another reason to bring this up. Node.js shipped a feature that allows for type stripping in TS files to allow both user code and third party packages to potentially run just TS files within their program. And in those cases, type visit types are stripped off. However, enums are a TypeScript feature that are not an erasable type functionality. They have run-type behavior. So if Node.js developers wanted to use enum, they are forced to use something else that doesn’t work well with TypeScript because it’s not something that is supported by type stripping and we had developers as well as members of the Node.js committee reach out the team to consider bringing this proposal to ECMAScript to have some form of TypeScript enums potentially standardized.

RBN: So I mentioned why we might not want to use an ObjectLiteral. Enum declaration has a number of advantages over a plain old ObjectLiteral. It has—the goal is to have a closed domain by default. So enum members would be non-configurable and non-writable. Enum declaration would be non-extensible and have a null prototype. Null prototype is to avoid collisions, and non-extensibility to avoid somebody making changes to an enum value later to get a runtime optimization. Another advantage of enum declaration is that it is restricted to a specific domain of values. Limited to a subset of primitives. Number and string are what is supported in TypeScript, we have also been considering BigInt and Boolean as well as symbol-based values.

RBN: One other capability of enum declaration at least TypeScript enums that’s not able to do with ObjectLiterals, is self-reference during the definition. In ObjectLiterals you can’t reach out to other members of the ObjectLiteral while defining it, itself because it doesn’t exist yet. However, it’s fairly common within a declaration, one that works with numbers like bit flags and bitmasks, to use bitwise combinators to create bitmaps, by referencing numbers, within the definition of that enum.

RBN: And again one of the other major advantages for enum declarations is that they are something that can be especially recognized by tooling such as a static type system like TypeScript, not only is this something in value space, in a JavaScript runtime value that can be accessed—but also a type that can be restricted in a static type system, used to discriminate in a union, provide documentation in hovers, et cetera.

So other really interesting advantages of an actual enum declaration like ObjectLiteral we have things to extend enum declarations that a normal ObjectLiteral it wouldn’t make sense to do. One of the big areas we have investigated is something like introducing algebraic data type or ADT-style enums. Creating a structured object using a very concise syntax. These are often like option or result types. They are frequently used in languages like Rust. But also in even Python, it may not have an ADT enums, but it uses something like Option.

RBN: Some other areas we want to investigate might be decorators, if you use ADT enums to specify data used as a wire format and translate to something that is more usable. If you are using like prototype, or doing a WASM interop, you want to say, I want these values to be stored in memory in this way, but serialize or deserialize them. So decorators is a way that could be accomplished. I will go into more in later slides. Another area is opt-in auto initializers. I will explain why that’s important later.

RBN: And the potential for shared enums. They have further restrictions to be used with shared memory multithreading and shared structs.

RBN: This is a Stage 1 proposal. However in many cases we have some leeway in what we are considering as far as both the syntax we’re supporting and the runtime semantics. Since one of the goals is to allow TypeScript developers to have some form of enum in native JavaScript code, there are some restrictions to what we’re looking for as far as syntax. In many cases, there are things that TypeScript looked at, and said there are behaviors of enum that are not desirable that we might be able to change or that we might be able to build on top of the same functionality, but built on top of a more restricted or MPV approach to a deliciousing the syntax we are proposing is—enum have identifier base name. They have a name, an identifier or a StringLiteral or initializer. StringLiterals are not as used as identifier names, but they are used, it is something that we don’t have a strong preference on and we may consider to drop the support because it has some complications that arise when it comes to do self-references.

RBN: I will say as we start—continue a brief Github search, showing among public projects on Github, 250,000 cases of enum declarations across numerous projects. It’s a popular and heavily used feature. And that’s why again the goal is to be for the syntax to be compatible with TypeScript. If we can co-evolve the syntax, as long as we avoid conflicts. So one area that we are considering not supporting because of discussions I have had with various committee members over the years has been TypeScript default for auto-numbering, and we might have more specific or opt-in mechanisms for that. We will go into that more later as well.

RBN: As far as the proposed runtime semantics, so enum declarations—currently we’re looking at producing an ordinary object with a null prototype. That’s not what we do in TypeScript today, because in general in TypeScript we tend to lean on the type system to tell you when you’re doing something wrong, when you are accessing something that isn’t like—for example, access valueOf, or—which is a inherited property from an object—that is not a member of the enum domain. We don’t let you use that. But JavaScript doesn’t have a type system, it’s likely more reliable to introduce some of these additional restrictions and semantics to avoid having to depend on a type system for that kind of behavior.

RBN: Another thing to consider is enum declarations have a `symbol.iterator` method. That pairs the enum elements. The reason why—but also, some of the directions considering for ADT enums as a potential future capability, would have the potential to introduce new static members to an enum that aren’t necessarily part of the enum domain. We don’t believe `Object.entry` would be reliable long-term for something like that, and it’d be better to have a more specific capability for yielding key values like this. This Is a feature that is present in Python enums. You can loop over the enum members of a Python enum.

RBN: Enum members are properties of the object for enum declaration and they are configurable: false or writable: false. This isn’t a behavior that TypeScript implements. So for actual native runtime enum, it would be reliable to make sure the members are fixed and unchangeable.

RBN: Next is the enum members that have identifier or StringLiteral names. For one, we again are considering the potential for removing the ability to have StringLiteral names. There are very few cases where that occurs at runtime. It’s likely that enum values might have complex values that don’t really match a potential StringLiteral. We only see things like dashes in the StringLiteral names from the Github searches we have done. Generally we want to avoid things like NumericLiteral names or computed property names. TypeScript currently uses a reverse mapping for numeric enums that, while in and of itself is problematic, iit means that having NumericLiteral names increases the potential for collisions with those types of reverse mappings, which is why we don’t support them. But I could have one that strings is an integer, for example, but that’s again not something we really run into that often but it’s been a concern. The reverse mapping thing is something that we are rethinking due to limitations that it has. I will discuss that more in the later slide.

RBN: As mentioned before, enum initial values are limited to String, Number, BigInt and Boolean and Symbol. We don’t allow all of these JavaScript types for various reasons. For example, function, we want to for bid as we consider a potential future of ADT enums, which are structured, those would be enum members that are constructor functions, and we want to avoid confusion when it comes to the actual enum domain for values that is a constructor function for ADT value, or is this just some function value that doesn’t make sense? So in general we try to limit it to a subset of primitive types that would be allowed in those places.

RBN: And the other interesting semantics would be that enum initializers may refer to the enum by name, or prior enum members. The most important thing is it's used commonly for bit masks, or if I need to alias a name with a different name, or enum member to a different name so that I can do refactoring without breaking old code, it’s useful to reference those values. Referencing the enum declaration itself is useful for things like enum members that can be referenced because they are not an identifier or they are a reserved word. If you tried to create a enum member name `default`, whatever its value is, then member referenced that member as `default`, that doesn’t work because “default’ is a reserved word. There’s some cases where we would need to reference the enum declaration itself which is why we would want to support that.

RBN: The desugaring is not final. We are considering is simple as a desugaring. If you can consider this, the ObjectLiteral approach, where you just define enum members A and B as 1 and 2 and freeze the result. That’s one possibility. But you cannot do something like enum member C, which references those in a bit mask.

RBN: So instead, what we do is, define these one at a time. It’s helpful when you look to a future where support decorators, and need to handle that evaluation independently.

RBN: One other way to consider doing this desugaring would be to predefine all of the properties with a value of undefined, but still configurable: true, and after evaluating each enum value, assign it, and at the end, mark those as or just freeze the object essentially. One to roughly emulate some of the behavior we want to emulate for the structs proposal, where the shape is fixed. The early layout is fixed, would allows for runtime optimization in engines, the type of things looking at the structs proposal, we might want to leverage here to avoid costly lookups. We know these objects are unchangeable, that the members themselves can’t change. Therefore, it’s potential that the engine can do inlining. We are not depending on the behavior, but some of these things are the advantages we are looking at with the structs proposal with having a fixed layout.

RBN: Some other considerations, they’re not currently in the proposal, but we’re willing to consider these, and what the value might be right now. TypeScript don’t support enum expressions, and it’s fairly common in JavaScript for a declaration form to have an expression form. In something like the structs proposal, specifically for shared structs, it’s not possible to have an expression form for shared structs, with the type of correlation mechanisms we are considering.

RBN: And since TypeScript doesn’t support this, we are not that strongly motivated to add support for it. Enums are generally evaluate—one-type operations. Finding constants that are application-wide. Or at the very least, are frequently used within a single file. Therefore, enum expressions aren’t that important. And if you do need them, you could still define enum declaration and return or ache is its enum object as the expression. But if there’s support motivation, we could consider rolling that into the proposal.

RBN: TypeScript does support export for enums, it doesn’t support `export default`. We consider adding support for export default like it is for class today.

RBN: Shared structs. Primitives like number and string can be passed to a shared structs. However, we have had discussions in the past about what should be the—if there was a default behavior for enum members that don’t have initializers, what should the value be? TypeScript’s support for enums currently is to use numeric enums, and does auto-incrementing of the enum values for the simplest approach to uniqueness. We had discussions potentially about whether we used Symbol. Symbol is not reliable when working with shared structs, as evaluating the declaration twice, once in the main thread and once in a worker thread, would result in different values for those enum members, when the Symbol is evaluated. So you would have to use things like `Symbol.for` or some mechanism. We generally discourage using symbol as enum values. But we are not opposed to having symbol values themselves.

RBN: There’s some differences to the proposal from what we have today in TypeScript. These differences are accepted, and we’ve been discussing it with the team, and we’re even willing to consider further differences. And eventually, adapt TypeScript to support that and make changes in deprecate certain functionality if necessary. But one thing that is very heavily used in Typescript are auto-initializers. TypeScript, if you supply you enum members that don’t have an initializer, we choose a number. And those values then are auto incremented. We do this because that’s generally the case in practice that is used by every language that does enums. With few exceptions, C# enums produce a value that does something like this auto numbering capability, even though the enum type information is stored along with the value. So if you—at least when you box an enum value, the enum type information is stored within it, so it’s more complex than just numbers. But it’s generally the practice that numbers are used in these cases, and it’s fairly common for applications to use auto numbering—I shouldn’t say common. It’s common for users to not want to put values for the initializers because those values obviously aren't a consequence when you are writing high-performance code, like a compiler, like in TypeScript. Having numeric values is extremely useful to be able to write high performance conditions to filter out certain values. So the approaches discussed, if we don’t have numeric auto initializers, using string or symbol based, Manning (?) through function to get the number, but that—that is not efficient or performant. It’s likely that a native implementation might not support auto initializing, as some delegates expressed concern that it's a footgun they don’t want to make easy to reach for. TypeScript would likely continue to support auto initializers on enums written in TypeScript and would down-level them to a native enum that has explicit initializers.

RBN: Another TypeScript feature considering deeply indicating for the 6.0 release later this year would be to prevent declaration merging. TypeScript lets you declare the same enum twice, and the new members are merged into the old declaration. This is not a desirable feature. And it’s something we are considering deprecating. We have looked at our almost top 1,000 projects in TypeScript projects that have sources available on Github, and we have run into I think one major case and it was the declaration file that was the result of a bug in how the declaration was produced. So really this is not a practice that is commonly used in applications today. So it’s not really a concern.

RBN: So another thing that TypeScript has that we are considering deprecating is reverse mapping. However, reverse mapping is actually very valuable. Reverse mapping is when you map a enum number to a numeric value, that you can then have a mapping back from that numeric value to the enum member. This is used for debugging, diagnostics, serialization and formatting. It’s unreliable because it works for number-based enums. In other cases, that reverse mapping could produce a collision, so we don’t support it in those cases. Since it’s unreliable, we are looking like `Symbol.iterator` to produce the entire domain of the enum. And you can use your own functions to then filter through that to find the reverse mapping and do filtering, formatting, for diagnostics and the like. And we have considered, and an early version of this proposal had a global enum object that would produce—use or could have used this—this data to provide simple mechanisms to get this information. We have removed that from the proposal to have a more MVP approach. So it’s something we can consider, but not considering at the moment.

RBN: Another major difference from TypeScript enum, TypeScript has `const enum`. Something we added to do inlining of enum values using whole program optimization and program knowledge. We don’t intend to bring that to TC39 as it’s not really necessary. Any type of optimization that could be done with `const enum` could be done by the runtimes themselves. `const enum` is more of a mechanism TypeScript would use to do this type of inlining for performance reasons, but a caveat is that you change the dependency without rebuilding, then the values are not updated because they are inlined at compile-time. If engines are able to, or have the interest in optimizing enum members in a way that can do this inlining, such a feature would not be necessary.

RBN: And as mentioned, TypeScript doesn’t support Symbol, BigInt and Boolean values. Symbols have been discussed off-line with a number of delegates as a potential option, Boolean is something that has been discussed within the TypeScript team. BigInt is one that is useful because it’s very—it has been the case where working with bitmasks, you can run out of space in a 32-bit integer. BigInt is an option, but it has pretty poor performance because of how it’s implemented. Plus it’s a variable length integer, you are not fixed to something like a 64-bit int. So these are areas where we’re considering potentially adding this support, but we are again considering what the specific motivations are if these are things we want to bring to TypeScript or enums/

RBN: There’s areas for future enhancement. Opt-in for auto initializers. ADT enums, how it interacts with pattern matching and decorators.

RBN: Opt-in auto-initializers, It’s been argued as I’ve been talking about this proposal with various delegates over the years, that such behavior could be a footgun, by default. It can cause issues with package versioning. This is like TypeScript enums, if someone wants to inline the value for performance reasons, because they knew what the value was in version 1 of a package, and upgrade to version 2, it might not no longer match. If they introduce it in the middle of existing members.

RBN: However, even with that footgun, this is still a highly desirable feature for users. A large number of the enums I looked at in public enums on Github were using this auto-initializer capability. One way we have considered to bring that capability back would be to, instead of having an implicit behavior, to have an explicit syntax. This is a function or an object with a built in symbol that could map things from—based on the current position and information.

RBN: So enum of number would auto number with values of 1, 2 and 3 and continues, enum of string would auto initialize each of these to the name of the enum member itself. The other way we might consider doing this would be an `auto` keyword as an opt-in. It's a fairly small opt-in, or small hurdle to get over to get back to the TypeScript style enum approach. But in that case it’s numbers only, since if you are trying to add more complexity to specify what type of auto-initializer you get, you should consider things like number of, of string, et cetera.

RBN: One of the reasons we don’t have this in the core proposal is there’s been some discussion about things like the of clause. If it is dynamic, then it can’t really be optimized by a native implementation. If it is to be optimized by native implementation and not dynamic, you don’t need the symbol for it, but it still runs into things like aliases and shadowing, where something could be declared number and it’s not really—not still necessarily statically analyzable.

RBN: But again these are—a lot of these things are capabilities we might consider for Stage 1 version of the proposal, as we continue to discuss what feature we want to see and advance to Stage 2.

RBN: Another big area of interest, especially amongst a number of JavaScript developers that I have talked to in various forums, especially Twitter, has been things like ADT enums, the ability to specify something like an Option type. So enums of Option with value and None with no value. A result type of okay with a value or success with the value and error error with a reason. This is something that came up recently with off-line discussion about a possible try expression. And then to but with the result be? (?) If we had something like ADT enums, we want to use something like a result type is a way to define those values.

RBN: But in addition, these types of behaviors would fit in nicely with extractors and pattern matching. This example in things like the extractors proposal in slides before, where you could match on the enum members and extract values using extractors. So it’s definitely an area we have been investigating, on the extractors and pattern matching for a while.

RBN: One of the reasons ADT enums aren't part of the proposal, we want them to interact with structs and shared structs. There’s dependency and tie-ins to consider and we want to pursue this as a follow on proposal to this proposal.

RBN: As mentioned, there’s some strong ties in to future pattern matching, but tied in things like normal enums, or normal enum members as well. Where we might specify a `Symbol.customMatcher` as part of enum declaration itself that would lo allow us to use a is or whatever we might look at as in fix to say, is this part of the domain of `Color`? It’s only 0, 1 or 2. There are some additional advancements of pattern matching as we consider that approach

RBN: Decorators, I don’t want to spend too much time on this. Once we get decorators in the ecosystem, beyond their use in TypeScript code or Babel, then there’s other avenues to consider in the future for using decorators and other declarations. For example, having decorators on enum members, and having the distinction is this an enum or a field, so it knows what metadata to look at. For example, things like control serialization/deserialization, formatting, marshalling, etcetera. When defining the declarations. This is a featured used in C# when doing JSON serialization as well as serializing to other wire formats. It’s a fairly commonly used feature in those cases. But it’s not a critical path capability we are looking for now. And again this is something we might consider once we see implementations of decorators in runtimes, and have some time to see, like, what is the user taking up with the capability?

RBN: So in conclusion, again one of the main things we are looking at here is to eventually standardize some form of TypeScript enum, so that developers using their JS with type stripping could use enums today. To have some of those advantages in the enum syntax or something like an ObjectLiteral. And to have some of the flexibility we have going forward for introducing ADT enums.

RBN: We are looking today is the potential stage advancement for Stage 1 to investigate enumerated types to determine which of these semantics we might want to adopt. What we want to consider. If this still feels like a good fit for ECMAScript. And what type of direction we need to go and the type of changes we might need to make to TypeScript to make these things possible.

MM: Could you go back to the slide with the desugaring. I understand you are not committed to this desugaring. In this desugaring, there is several things that I think are problematic. One is that if, for example, you initialized—if you swapped the line where you’re initializing B and initializing C, just swap the order of them, then C would be doing a property get on E.B, and with this desugaring, that would not produce a TDZ error. That would produce undefined. And then `A | undefined`, whatever that evaluates to, that becomes the value that C gets initialized to. Along the same lines, if, for example, the right-hand side of that was calling a function, providing E as a value, `F(E).B`, then it would be making E available to other code while it is in an initialized state. These are both the same problem. Which is the visibility of E before it is fully initialized.

MM: Now, with all that said, could you now bring up issue #25? Which some of you have already looked at.

RBN: I am not currently set up to bring that up, because I am sharing just the presentation.

MM: Okay.

RBN: But I would like to talk with you more about this off-line on this issue. We have been discussing—one of the main reasons you want to support the—we currently support in TypeScript referencing the enum declaration by name is so that you can reference values that aren’t identifiers. If you have a StringLiteral enum member that is something like—hold on a second. You can have been again looking at it, one of the examples I found on a simple code search… I was looking at a code search of enums with dashes in the name. Mostly because the enum was referencing the same thing. You can’t reference those by as identifiers. One thing we considered in TypeScript is deprecating support for StringLiteral names, but there are still reserved words that couldn’t be used on the right-hand side. So if you said, “return” or “default”, lower case, in your enum number name, you couldn’t reference it in the enum value. That’s why we were considering it. This is something we want to look into more as we go

MM: You agree that the desugaring you are showing doesn’t deal with enum names that are not available names as well.

RBN: Yes. The desugaring doesn’t handle that case and you could call a function passing in the enum declaration. One way we could address this which, at least in part, is that we could predeclare the shape of the enum so it has a fixed shape, even if the members themselves are not marked as configurable: false. As you initialize them, then we mark them as configurable: false. So there’s potential something—you can like will to get the error during declaration time as opposed to getting an error later on when using the enum. So these are things to consider. Also, we have been talking about the same thing with the structs proposal around being able to pass a shared struct to something that might be uninitialized, as discussing how if it’s—if there’s a possibility of having read-only fields inside a shared struct. We will continue to discuss.

MM: Because all of the issues I am raising, you are acknowledging are open and to be revisited, altogether, let me say, I like this proposal, I like this direction. In particular, I appreciate that you are not trying to reproduce exactly the existing TypeScript semantics, that you are willing to propose here a more principled semantics, or a better-behaved semantics. And that for TypeScript code that stays within the semantics that works in both ways, that works with this proposal, and works with existing TypeScript, that that code would also be in erasable TypeScript, once given that this proposal is accepted into JavaScript. And I am very excited about erasable Typescript. And enums were the biggest hole in the valuable things that had to be removed from TypeScript and that would erase that. I will leave this there.

SYG: So RBN, could you walk me through how you would adopt new enums, if they don’t have the exact semantics as the TS enums of today in the erasable mode?

RBN: In most cases, where the syntax—the syntax or semantics differ from TypeScript we are considering making changes to TypeScript. The one case we are not is in how auto numbering works. That is too much of a breaking change. Since TypeScript has this mode called erasableSyntaxOnly, designed to only allow the syntax in your TypeScript code that is also allowed with type stripping in Node.js. If we were to support native enums, because they are now standardized and then available in node.js applications, then we would instead only restrict the parts of enums declaration that are still TypeScript only, which would be the default auto-initialization behavior. If we introduce an opt-in auto auto-initialization capability, we would guide, including an error, a quick fix that allows you to do that. We have a story going forward how to adopt the these changes, some of the other changes to runtime semantics, such as enum declaration merging, or things we were already considering deprecating for TypeScript 6.0 later this year, and also looking into other potential changes we might want the semantics to later forbid. Then that gives people time to transition to new things like not using the old reverse mapping approach to using `Symbol.iterator` if we decide to advance. We have leeway there. To make some of the changes. The number of people that use things like reverse mapping is relatively small, but an important capability in those use cases. But in general, like we are going to match syntax and semantics as much as possible and preserve auto numbering

SYG: Two follow-up questions. One, is it then a fair characterization to say there is a constraint that if we standardize a piece of syntax that exactly is the same as a piece of TypeScript syntax, that the semantics we standardize must also be exactly the same as what TS currently exposes? Like, is is the auto numbering versus non-auto numbering semantics currently syntactically distinguished

RBN: It is not by not—in TypeScript by not having an initializer on the enum number. We that’s how it’s been for a decade.

SYG: Does that mean then if we standardize—just as hypothetical, no value judgment here—if we standardize a JS enum without auto numbering, that must be syntactically distinguished from the default auto numbering enum that TS has today?

RBN: If you are saying that it has no auto initialization at all, then no. Because you can write a—you can write a native enum with no auto initialization in TypeScript today by putting an initializer. So that is the syntactic distinction there. If the concern was we chose to the auto-initialization using a different default, which was discussed several years ago, as like say symbol was the default for those, that is something we would have to say as something we explicitly don’t support, since we want to maintain backward compatibility with TypeScript. There are a lot of declaration files that exist across numerous applications and right now if a declaration file is handwritten and uses enum, we have an assumption of what the results are. We wouldn’t want to break that. Which is why we instead say, it would be better if we wanted to change the auto initialization behavior is that doesn’t match TypeScript, do it through an opt-in approach that is syntactically distinct such as the—let me jump to… to something like having auto or of and of clause to be syntactically distinct to the auto initialization behavior. That’s the approach we would recommend.

SYG: So then the adoption story is, if we need to make changes, we will add new syntactic ways to distinguish the changes, but that will obviously require the TypeScript libraries and apps, preventing them from being erased to also update their code. That’s an accurate assessment, right?

RBN: That would be an accurate assessment, yes. Isn’t a concern when it comes to referencing an enum that someone else is publishing as part of the declarations. We assume that’s a property access on an import. The only case where it differs is a `const enum`, and that doesn’t make sense in plain JavaScript. But, yes, if we want to do something that differs, then we would want to use a syntactic mechanism and then developers would have to adopt that mechanism to support it. Yes.

SYG: Okay. Thanks

PFC: Hi. I think this is a great proposal and I would like to see it advance. Did you have any thoughts on whether enum declarations should be able to be decorated? Not the individual members, but the whole declaration?

RBN: Yes. Yes. They would be. That’s not clear. I don’t show an example of a decorator on the declaration here, but in the second bullet point, I say we would want to distinguish between kind enum and kind class and decorating itself. Yes, that’s something to consider. Again, if most likely if decorators are a feature we add to enums, it would be a follow proposal that comes after decorators reach Stage 4, and we consider some of the other decorator proposals. And there’s hesitation to advance other proposals, until the log jam around decorators support and runtimes is addressed, and get some feedback on implementations in the wild and people starting to use it. It’s likely the decorators wouldn’t come to enums and depend on decorators existing, but definitely support it. Yes.

PFC: Yes. Sorry. I missed the second bullet point here. Thanks.

DE: Hi. So I am wondering about the pros and cons of this feature versus the purely TypeScript-level feature, where we focus on making sure that you can have the ObjectLiteral kind of like as it comes with a types declared. You mentioned a few advantages such as being able to do self-references, the way it could be frozen afterwards, the way it could be a host for other possible features. And I guess there’s obviously the aesthetics of sticking with what developers have found to be intuitive. So yeah. Could you speak to this?

RBN: Yeah. So the approach that’s outlined in the pull request you mention is the `as enum`

DE: Yeah. Now it’s called … (?)

RBN: So for all the reasons I have listed on this slide, generally we were less than enthusiastic of ObjectLiteral enums on the TypeScript team. There’s a number of limitations that make it not usable for a lot of cases for enums today. It doesn’t give us that avenue for advancing potential future dresses liar ADT enums which is a very popular capability that I’ve been discussing with a number of folks. It doesn’t give us that able to to—unless you are using a static type system, it doesn’t give you that ablility to to do self-referencing, which is extremely useful and necessary for anything that works around bit flags and bitmasks—which, if Node.js were to adopt this for specifying flags for the file nodes for open, those are all bitmasks. You’d want something that works in those cases, easy to define. And you really want to—ObjectLiterals don’t give you that capability. ObjectLiterals would need additional work after the fact, like freezing the object, it wouldn’t give you the opportunity to potential things like inlining and runtime capabilities where runtime might be able to look at the object shape and if all the things—if it knows this variable can’t change, because it’s an import, and it knows this property member can’t change because it’s frozen, you might be able to inline in native code. We are not depending on, but we want to see in the future. `const enums` have shown they can be significantly faster when you can do that inlining. And there are some performance enhancements that runtimes are looking at as we have been looking at the structs the proposal, and we won’t get that with ObjectLiterals, I don’t think.

DE: So the restricted domain of values part is what I am having trouble understanding. Why is that a benefit?

RBN: So I mentioned before that, if we eventually do want to eventually support things like ADTs, which I think we may really want to investigate—I think they’re an alternative to the things like records and tuples, they slot in well with things like the extractor, and pattern matching and the like, as well as other proposals that we have been considering or have been discussing for a little while now. Having those Option, Result types and the stronger capabilities mean that if we don’t limit it now, then if tooling is built up, that says, I am going to do something with enum members and I know—and the enum value could be anything. Then it makes it really hard to say, now we support ADT enums. Is this an ADT enum member because it has type of function or some other function? It makes it harder for runtime tools to make those types of distinctions because there’s no way to indicate. Just like other than looking at toString, there’s no way to indicate the difference between a function and a class, other than trying to construct it. This is simplifying this from earlier versions, but limiting the surface area of enums to gives flexibility for advancing in the future, and the more surface area we leave open, the more we paint ourselves into a corner with other capabilities later.

DE: My other question was about the transition from TypeScript’s current enums to this. What we saw with the set -> define transition was the fact there wasn’t a syntactic difference. But there was a semantic difference. It made it pretty difficult, because locally, you couldn’t switch between the two. It had to be a global flag. Are we falling into the same issue here?

RBN: I don’t think we will be. One—so there are two problems that came up when it came to set versus define. How we did the downlevelling to be compliant. Because there are certain things like if you tried to override a method with a field, how that works versus how set semantics works. It had to to deal with inheritance. And the other one was around producing those types of error messages, how do you know it’s doing the right thing. We have to have ways of knowing that you are trying to override a getter-setter and we did introduce syntactic differences to help with that. Which was, previously when we had declaration files we would emit a get/set as a field in the declaration file. Whereas we introduce ambient getters and setters to distinguish them and produce results.

RBN: The difference there also, we needed the flag to control emit behavior. Because people had a dependency on how these fields were declared. It’s still an issue today. Because people are using, like, legacy decorators that have expectations on how fields are handled. You could put access modifier on a constructor parameter and it becomes a field of the object and avoid having the boilerplate of doing the assignment and adding the field declaration. All those things ran into issues when it comes to sets versus define semantics. None are issues with enums. People don’t look at things whether an enum is configurable in TypeScript because we don’t allow you to overwrite them when using the type system. When it comes to the break between when we support this and when we don’t, right now if you wanted to use enums with erasable syntax only, it fails. It will continue to fail until there is a version of TypeScript that has support for emitting native enums, which won’t be until the proposal has advanced to Stage 2.7 or 3. In which case, we would be using a version of the compiler that knows how to emit that. In general, when referencing an enum from another file, you care about that it’s a `identifier.propertyName` . There’s no different semantics particulars to emit for access. It’s always going to be self-contained within your own code. No subclassing or concerns there. So I think all of those concerns we had for set versus define are not relevant to enums. Any of those behaviors that need to change within TypeScript for runtime semantics are things we have a deprecation plan for. We release changes over iterates so folks have time to make the changes. If they say, I need a way to emit old enums, we would provide a flag giving them the capability and modifying their code and what it emits because consumers use property `name.member` name to access those enum members. We don’t think there’s going to be a concern there.

DE: So I didn’t quite get it. Are you saying nobody uses enum introspection from the outside of the module where the enum is defined?

RBN: The only times we seen that happen was really around reverse mapping. And reverse mapping again is not fully reliable because it only works for number enums and not StringLiteral enums. We are willing to change that behaviour. And give some time for developers to address that.

RBN: And that’s again why we introduce things like the `Symbol.iterator` as a way to give you the guaranteed set of the domain of the enum, regardless to static methods we use or capabilities with ADT enums. So you always have the fixed set of elements we support. And if this is something we decide to advance, we’ll get that into TypeScript as early as we can so people can start transitioning.

DLM: You’re at time. Shu is on the queue. If you could be quick, we could do a call for consensus before we stop here, general support for Stage 1.

SYG: A reminder to RBN and other folks in the committee. This is not a Stage 1 blocker, but as I have talked about before, I will be certainly assessing from the browser point of view any new proposals on how much is a pure DX thing that can be desugared, versus whether there are concrete benefits for the browser during runtime. So just keep that in mind. You have alluded to some run-time benefits, such as the fixed layout thing that can be taken advantage of. That is definitely I am looking at closely

RBN: Fixed layout and the other one is type stripping. Node type stripping right now—

SYG: That’s not a runtime benefit

RBN: It is in that Node.js is not going to do a downlevelling of enums. So this is a feature that cannot come to node.js type stripping support unless there is a runtime capability. Even if it is a desugaring–

SYG: We can take this offline.

RBN: I would like to ask the committee for Stage 1

DLM: Support from MM, PFC, JHX, CDA., NRO.

DLM: Okay. I think that’s it then. Thank you very much. And yes. Congratulations on Stage 1, RBN.

RBN: If anyone has any other feedback, add to the enum proposal. I will have that migrated over shortly. Thank you.

### Summary

Proposed adoption of enums to ECMAScript roughly based on TypeScript’s `enum` declaration. Like TypeScript’s `enum`, a native `enum` would support enum members with initializers limited to a subset of primitive types. Unlike a TypeScript `enum`, a native `enum` would not support auto-numbering by default. So long as backwards compatibility is not affected with respect to auto-numbering, TypeScript has expressed a willingness to adopt a number of semantic changes to align with native support. Some concerns were raised regarding some of the proposed self-referencing behavior, which will be further explored during Stage 1.

### Conclusion

Advanced to Stage 1

## `Object.propertyCount` for stage 1 or 2

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/ljharb/object-property-count)
* [slides](https://github.com/tc39/agendas/blob/main/2025/2025.04%20-%20Object.propertyCount%20slides.pdf)

JHD: Hi, everyone. RBR just became an Invited Expert. He and I are co-championing this proposal. `Object.propertyCount` is solving this problem that RBR is going to talk about is something I run into frequently, and so I was very excited to walk-through this when he approached me with the idea. RBR is a [Node TSC Technical Steering Committee](https://github.com/nodejs/TSC) and core collaborator. And I will hand it over to him to present better than I would have been able to do. Go for it.

RBR: Thank you very much also for having me here. It’s the first time for me to be on the call. So very nice to—I am able to present. So like JavaScript I am pretty certain, every one of you has multiple times heard that JavaScript is a slow language. And thanks to JITs this is mostly no longer true, in most situations, and one thing is, however, that has bothered me, and because the language doesn’t provide any way to implement a lot of algorithms in a very performant way. And one is relating to counting the properties of an object in different ways. So it’s a very common JavaScript performance bottleneck I have run into.

RBR: And the motivation is pretty much that any library or framework that you will look at is going to use at least `objects.keys` , some object and then the length directly. So what we are doing is we allocate an array for all the different properties on it, even like if it’s an array, for example—and yes that is also passed to `Object.keys()` for multiple reasons—an array can also contain additional string keys that are just not index and as such, you want to know if they exist or not and then you have to do that.

RBR: So that is something very frequently called. We allocate that array, we—then need the garage collector to remove to get the number of the properties on it. Something similar is done with `object.getOwnSymbols` and object get own property names, especially with the symbols, mostly what algorithms are doing that I looked at is, filtering out new ones. So that is something very frequently happening. And it could be a Fath path, depending on the data structure these implications are using to check if there are if I non-enumerable symbols on or enumerable ones And so generally, it’s mostly use. As a fast path for things. And now let’s think about performance exist in total length. What do we actually have to do when wanting to call such API? Or when we do something as `object.keys` . The array create performance measurement is hard because we have a just in time compiler, a garbage collector. We have C++ and JavaScript boundaries to cross, maybe it’s not C plus plus, but across platforms. And all of these different aspects and different runtimes can have a huge impact on the actual performance.

RBR: And still we can say, like there are a couple of things we can determine as that as this part in this runtime. So we have an initial API call cost. Which is mostly CPU time and not be able to overcome that cost with a new API. There is going to just be the new API call call os. One interesting thing is object get own symbols is, for example, in V8 currently, if I am not mistaken in C++ and not cross-platform assembler. What happens there is the initial call is actually very expensive in itself already. It would definitely be able to optimize that further. That is a reason for me to also just so similar API which I will come to later on again, instead of multiple. Because then we overcome any of these implementation difficulties. And so then the cost of traversing the keys is again mostly CPU bound. And with that, in this case, it could actually theoretically be improved if the compiler, for example, determines we want to track how many keys added since creation. And then just returns that number instead of actually iterating over all keys. That is the theoretical optimization inside the compiler. There are other things like proxy methods and so on. And it would have to be checked against these things and I am curious about discussions around the second point, with implementers for potential ways of dealing with that. What we can be pretty certain that is possible to optimize is the cost of allocating the area, which is both CPU and memory bound. And that is like something that is completely gone afterwards. We don’t need that. The garage collector won’t be necessary for it anymore, and the—depending on the concrete implementation and the runtime, there might also be cost involving, for example, index keys that are theoretically just the length. You now optimize something internally as I have index keys starting from 0 to 100. And now, there is, like, not a concrete key anymore. And instead, each time it has to actually create the string of that specific number. So that’s an additional cost, depending on implementation details in this case.

RBR: Yeah. Effective performance. I thought about showing numbers or not. And I decided against it. Because this is so dependent on how the algorithm that is used really looks like. And also, the concrete implementation in the runtime. So like—from what I have seen, mostly, this is starting from, like, 2 digit percentages in average to, like, it can become very, very costly, depending on the algorithms and the object or array that is the problem.

RBR: What use cases do we have? And definitely, something like input validation, I want to know if an object has a specific number of keys. To even continue looking into it. This is a common thing that it could have for a lot of APIs and, let’s say, on the back end side, for example, for HTTP calls and I want to know if mandatory number of properties is there, I don’t have to check. I can go immediately there and done. Which is great. In general, guarding against two input in many APIs is something we could have. Object comparison is a very, very frequently used case. And a lot of different algorithms that do object comparison, and in this case, we always have to do the comparison from both sides. So one side we could have to get the keys out of it. But from the other side, that is actually not necessary. You just have to compare the lengths and that can be optimized afterwards.

RBR: Sparse array detection. It’s something I would definitely like to be able to do in the language. And that is is one option that I am going to propose because I want to determine if something is an index key and non-index string key or a symbol key, as a length. Like right now, and this is mostly APIs just are use cases, don’t do that. Because it is very costly to determine this. Or they just accept they might have a performance overhead for sparse arrays and by iterating over all the holes, or and they just return something like undefined, for the whole, so really it depends on the concrete implementation and what guarantees they want to give for that API.

RBR: It’s a good detecting extra properties on array like object. So to know if, for example, an array, there could be additional property and now it’s easy to determine if that exists or not. Telemetry data and could be something because you want to get it fast again, testing utilities and just general a lot of fast paths are where it should be used.

RBR: Property count the name it servings determined it should be relatively open. And it does not contain own, for example, for a reason. And the reason is that, in this case, theoretically, it would be possible to add another option at a later point to potentially add it. I don’t believe that’s a common use case, but it would at least keep it open. And otherwise, it is pretty clear about what it is doing. It’s accounting the properties on any kind of object. We have the target where we apply it to. In case it is not there—not on object. In that case, type array would be there. Something similar with the optional options object. If that is passed through, it is possible to it’s possible to differentiate in between a couple of different things. First of all, the key types. So I know three different key types: there are index keys, which are different in arrays and typed arrays. So that’s like a specialty that we would still have to look into. And also, non-index string keys and symbol keys. Most are—at least, for example, V8 does already differentiate exactly these three different types of keys internally. At least to my knowledge, I worked on this part a few years back, I believe it didn’t change since then. The default should align with object keys, so in this case it would be a combination of index and non-index string. To really reflect the most common use case, without providing any options. And then an additional option to check for enumerable properties. In this case, there’s three different values: `true`, `false` and `'all'`. From what I have seen in the wild, true is common. All is used also sometimes. False, I didn’t find. Which is an interesting aspect. That’s something we might look into. The default, is true. In this case, to reflect the same behavior as object keys as was the target, if any of is invalid, the typed array should be thrown. It doesn’t matter if as a wrong property key or value.

RBR: I also considered alternatives in this case. For example, if—it shouldn’t have an array as key types. And we could instead have a flat object that has index keys, non-index keys and symbol keys as direct properties which each boolean to do something before. Not with the nested array in there. And otherwise, it’s identical to the former. So I am continuing.

RBR: I already spoken briefly about options—did I? I am not sure. Options versus multiple methods as an implementation and it’s something I thought about. And the API is very important for me personally, I want anyone to use the API without having to think about the default use cases. That would be object keys. Right? So this is very simple and straightforward to use. And any expert could then provide additional options to it, to gain even more benefit in a couple more complex algorithms.

RBR: It is also my experience in speaking from V8 in this case that the implementation for the fast APIs is actually slower in case we have multiple APIs because there is an additional overhead of the implementation to provide for all of these, and for having something like cross-platform assembler as an example, having a single one and in that case it is way less implementation overhead because it has been done once as soon as we overcome the difficulty between the JavaScript and C++ boundary crossing, that is something positive for performance.

RBR: Why only own properties? I couldn’t think about any inherited properties use cases so far. I did not check for these. But I—I saw maybe if someone believes there is something necessary, at some point, we could still be implemented in the way this proposal is there. And if this API would be implemented in that fashion, that was mainly my thought. So I kept out `own` from the name for that purpose.

RBR: In the repository actually provided a lot of different examples. And in this case, and Daniel (Ehrenberg?) asked for the different variations of the algorithms or the options being based. Angular uses the regular object keys one. But they also do object get own property symbols and filter out Number numerable ones. React has an implementation for object keys. They also do object get own property names as it is. And they use get own property symbols and filter. And also have something where they don’t filter out. As far as I seen those are the different use cases for React. Doe dash has it. And Next.js, all these different use cases provide all possibly combinations besides enumerable false. Node, for example, also has specifically index check. And in this case, it’s similar to object keys and filtering. We actually have a C++ API from V8 that we use instead because it allows a couple of APIs would be significantly faster, skipping non-index string in those cases. Or the other way around, actually, also.

RBR: And index and non-index string as before, I believe node has like the biggest variety of different options that I found, and I also know about because I mainly work on node. And I knew most of these use cases before.

RBR: Also, I believe that—yeah. So all these example and we are only taking from production code, and I tried to exclude any code where it would be test because I believe that’s actually, like, tests are also important to run fast, but would not be as crucial as other situations. So this is actually all production code. The real world examples that are values, as a set false, I don’t know if that exists or not. I cannot tell. Index property, I believe—I am certain that would be used as soon as it exists. The reason for not being found so far by me is probably just, if you have to determine how much overhead do I have to do something like that, in an algorithm, it’s so expensive, people decide they are not going to support that case. Then it is possible in the future.

RBR: A couple of edge cases: Index properties. Which are difficult to determine because, like, the array indices versus typed array indexes, they are a different limitation. And I didn’t check again on indexes on any other object. I believe they also have specific behavior, I am I am not sure about this one. For example, lab prototypes is something that might have to be looked into it. In this case, I believe it’s relatively natural to just work as with any other object. So only like a property that is there is going to be counted.

RBR: The API suggestion is meant to be backwards compatible and performant. Simple to use, flexible to use and someone brought up, it couldn’t be implemented with maps, but instead using object. So, first of all, maps normally address a different need than objects. For example, when you have just like one configuration, you normally don’t want to use a map in this case. You want to use something as an object. So this is something where the fast path would benefit from this API. On top of that, for a map, you always have to do the hash value which is a little bit more difficult to calculate, if I am not about mistaken, for a map than for object keys because object keys are actually only strings. And symbols. And so the algorithm behind it may be simpler, I don’t say it is, I say it may be simpler than for maps because you have to also differentiate between other types to accept those. For objects it would all just be coerced to a string.

RBR: Next steps would be pretty much like getting your feedback, getting the input, addressing the comments and deciding if this could become a Stage 1 or 2 proposal. All steps for Stage 2 are as far as I know, already addressed. So I am thankful for your input now.

JHD: Point of order in the queue. Just to jump in. We only have 5 minutes left in the timebox and based on some of the discussion in matrix, it would be great if we could first focus on queue items that might block Stage 1. And save the Stage 2 stuff for later or another time.

CDA: Just a quick note on that, we do have some time on this afternoon session available. So we can go over to hopefully get through the entire queue.

USA: Yeah. So based on this suggestion, I am going to go through the queue one by one and ask if there’s any Stage 1 concerns. KG, is yours—okay. So, MF, what about yours?

MF: I think mine might be a Stage 1 concern. So I am coming at this from a viewpoint that this proposal was entirely performance motivated. It doesn’t seem to be the case that there’s additional power here. So with that in mind, like 20 years ago, we used to write JavaScript. And it was common among a large number of JavaScript developers that when you wanted to loop over an array, because that was the only way to enumerate, there was no for-of or forEach, we write a for loop and have a variable that increments until it reaches like `array.length` . Right? And people would—it was common for a lot of developers to take that `array.length` and cache it ahead of the loop so that it could hint to the engine or guarantee to the engine, the number of iterations of the for loop is not going to change, you are not modifying the array during this loop. That was a commonly known and used optimization. But there were a lot of JavaScript developers and a lot of people weren’t doing that. And they were still just like looping until `array.length` . And engines ended up just detecting the array wasn't modified in the loop and optimizing it. And it’s no longer the case, if you write a for loop and don’t use the modern facilities, that you would need to do this length caching. I think it’s the same case with this. I think this is a fairly simple pattern to detect where you don’t have to actually realize these intermediate data instructions and the engine can provide the result efficiently. And if it’s performance motivated, I would rather put my eggs in that basket, having the engine optimize that if it’s truly common in the ecosystem and common to be doing in places where performance matters a lot. If engines would like to speak up to, like, the difficulty of that, I would love to hear about that. But I have confidence there. If we hear negative feedback, I don’t think it’s worth pursuing this proposal at all.

RBR: So since I’m not an engine implementor. I’m not the best person to answer it.

SYG: I will just jump in. So your particular example, MF, is something that sounded like a hot loop. It’s a loop. And the opportunity is open to hot loops like that is pretty different because the intuition there it will eventually hit the optimizing tier. These examples, for this proposal, seem to be kind of all over the place. Not necessarily in hot code. And the optimizing opportunities for not hot code is a lot fewer. This is something that is I don’t think it’s basically possible or worth it to ever optimize in the non-optimizing tiers. And I think it’s worth—I am convinced by this proposal’s data for performance based on the intuition that this is a popular thing that people do all over the place, and you—the cost kind of adds up in aggregate. If it were only ever used in hot loops or hot code, I would agree with your argument, Michael, we can lean on the optimizing tiers to do the fancy optimization to get rid of the allocation, but that’s not the sense I am getting where this pattern is being used.

RBR: One additional part to that, a couple of the algorithms are not doing `object.keys` , the object and then lengths. Sometimes they have in between calls or they just have a different algorithm implementation because nothing like that exists so far. So that is definitely also something that could never be addressed by any engine because it would just not be detected.

USA: Okay. Let’s move on with the queue. If there’s no more after that… next is MM. MM is your topic—

MM: My topic is not a Stage 1 blocker. It is a Stage 2 blocker.

USA: Okay. Shu, what about your topic later?

SYG: Similar. Stage 2, not Stage 1

USA: I think this is at for Stage 1 discussions. What do you folks propose?

JHD: DLM, was your point something that needed to be addressed? I think you wanted to hear you.

USA: DLM’s point is no longer on the queue

JHD: If it’s not relevant for Stage 1, at this point—

DLM: I will just jump in. We do optimize for this, as Shu pointed out, but only in hot code. So the optimization in the engine won’t apply in non-hot paths. Shu provided a good answer as to why my point wasn’t really relevant for this proposal.

JHD: Thank you, DLM.

JHD: So then I think based on the time, we should—let’s ask for Stage 1 and we will defer to a later time or future meeting to discuss the rest of the queue items and potential Stage 2.

USA: All right. The champions are requesting Stage 1. We have one statement of support by DE, support for Stage 1.

KG: I also support.

DE [on queue]: +1 for stage 1 <EOM>

CDA [on queue]: +1 stage 1 </end>

DJM [on queue]: +1 for Stage 1

USA: Sounds like congratulations. You have Stage 1.

RBR: Thank you.

JHD: Thank you very much.

JSH [on queue]: +1 for Stage 1

[returning to non-stage 1 blockers]

KG: I was skeptical of the proposal, but I was convinced the basic use case comes up frequently enough that it makes sense to be in the language. I also searched our own codebases and got, you know, more than a dozen hits, so it’s not something that is just like random amateurs doing. This is a—it’s a common thing, even among people who are familiar with the language. So I am very happy to support the basic use case. I am extremely skeptical of everything that is not the basic use case. The key looking at index versus non-index versus, that’s an explosion in complexity in the API and it’s nowhere near as motivated. I couldn’t find any cases where I have needed any of those patterns or like my codebases have needed any of those patterns. You had a couple of examples on the slides, but I think they are much, much more obscure. And in particular, some of the things you mentioned I would like to actively discourage: having a fast path for sparse arrays. I specifically don’t want people doing that. Looking for non-index keys on arrays, I specifically don’t want people doing that. I think code should—with very, very few exceptions—be agnostic about spare arrays and should not put non-integer keys on random arrays. That this is something added to support those use cases, that makes me want it less and not more.

RBR: May I address that part directly? So actually, I am 100% aligned with what you were saying about this should never be a use case. There is no doubt about it. The motivation, it’s actually to guard against the usage. So and like for most APIs, you want to detect them as outliers and want to—probably just reject them during input validation, for example.

KG: Well, no. What I want is for you to not do that. I want you to—I want your code to not be aware that anyone might do such a thing. If they do it, that’s on them. Libraries should generally be written so that if someone passes in a sparse array, they treat it like a non-spare array. If the library is slower, this is the problem of the person using the API.

USA: On the queue we have JHD.

JHD: Yeah. That about the expando properties on arrays. RegExp match and stuff makes one of those. We do it. I am in complete agreement that good code doesn’t ever have sparse arrays in it. And it doesn’t ever—doesn’t create sparse arrays or make arrays sparse and doesn’t attach named properties on arrays and treats arrays differently than objects. It lists are different than property bags. I think we are actually largely aligned on what people should do. The use cases here are for any code that actually cares about the real world instead of just the idealized world that we all want needs the to do the checks and often makes things slower even for the good people who are not doing the bad thing, because we still have to check for the bad thing. And making those checks faster, allows code to be faster for the good thing people. It’s still going to be slow for the bad people because we have to do the slow thing if they have doing the bad thing

KG: I disagree. I don’t think you need to accommodate people who are doing weird things. You can just not. It’s fine.

SYG: (Index vs non-index) I don’t know about that. That does not seem like a good idea to me, to distinguish, to have a mode to count index versus non-index properties. It is true there are optimization within V8 that distinguish the use of index properties versus non-index property, but the only concept we align on, if we have a language feature is the spec notion and the spec notion is not how we these are represented in the runtime, but here are is string that happens to round trip to, like, an integer value within this range. If that’s a filter you want to built in that has complexity and I am convinced by the use cases we ought to add it, concretely, you may have seen there’s a field called is integer index on our name object. And if so, we have parsed the name already into an integer. A size T, it’s 32-bits. Integer index concept in the spec is 2 to the 53 - 1. So that is not going to work. There’s going to be more code that that—that will require if you support that mode and I don’t think that particular code is well-motivated.

RBR: I mean, in this case, it’s more of, like, currently when we compare objects, like Kevin you said it’s ??? which is not detected. Some algorithms do check for extra property on an array. For printing them, for object validation for equality checks and similar, and this is where I know them from. And that’s why the index versus non-index one is an optimization for these cases. I do understand that it’s something probably not as frequently used. That’s completely understandable. And it’s theoretically, I mean, what could be done is to also like remove the specific one and initially something like that and consider a different mode at a later point as another proposal potentially, if there are more use cases together. Or look into it further to see where more uses in the wild exit for this particular…

SYG: To KG’s point because this is an optimization proposal, because it is not an new capability proposal, if you choose to not handle a use case, that does not mean the use case is impossible. It remains slower. On net, like how much of a problem is it to have that one use case remain slower. My hunch is that the index versus non-index case is not going to be that big a harm to the proposal given the relative popularity of the base use case.

KG: And to be clear, I am open to being convinced that this comes up enough in cases where the performance matters. But I think the printing use case is not motivating to me.

RBR: So printing, why is that—like, in this case, on the browser, it’s not as crucial. And however, in node, for example, anything that is locked is super crucial to have and like the lowest probable CPU overhead possible because a lot of users actually logging a ton, and to inspect these objects, it’s going to block the event loop. And that is something that may not happen in any server application. So it is there the most important part to not do the CPU.

KG: Right. I am not convinced by cases which are only relevant to node. Like, I think that those cases matter. But they are not sufficient on their own to warrant an addition to the language.

MM: Defensive code that is trying to defend against any possible input that JavaScript code could send it is a very important use case and that kind of input validation for our code certainly needs to be much more faster than it is. This proposal would take some things that for us are performance critical and change from O(n) to O(1). We appreciate it. The main concern is around the distinction of index properties versus not. The distinction is crucial for us, for you are input validation and what is performance critical. Without that, I would find—I would have much less motivation to see this move forward at all. However, not all JavaScript objects have the same notion of index. And that raises an issue with regard to how this works across proxies.

RBR: I am aware of those issues. Myself, I also don’t have a solution for that. On that we briefly discussed in an issue around it was that—we would, depending on the target, determine the limit automatically because there are normally specific limits towards those targets that would be one possible way of handling it. I am certainly we could make it more explicit as well. I am very open for input for this.

MM: So let me ask a specific question here which just might settle it: if the distinction, if the target base distinction is only normal arrays versus everything else, which I think Mathieu told me it is, then since there is array that is array which punches through proxies, then there might not be a problem here. Except for the cost of doing this all over proxy.

SYG: Yeah. Mark, I don’t think counting index versus non-index properties in the spec sense, if you include both array and typed array notion, of index, it will not be O(1). It’s cheaper than the current way, but it won’t be 0(1)

MM: If it’s not 0(1), the—then if there is—then the question remains: what practical speedup would this proposal give us in general, and if the answer is not much, then again I don’t find the proposal very motivating.

SYG: Are you talking about just the index case or the normal case of, like, just counting properties?

MM: I am speaking specifically about the index case. Specifically—the case that we find frustrating performance wise, here is an array-like. Here is something that looks like an array. Does it have any non-index properties? That’s the check that we need to be fast, not proportional to the number of index properties in the array, which might be enormous

SYG: You don’t care about the number of properties. Do you just care that it has non-index properties?

MM: That’s correct.

MAH: Yeah. We only care about that for array and typed array objects.

SYG: I am going to say that sounds to me like a different problem statement than the problem statement presented.

RBR: That’s fair. Actually, that is also how it is used in node, so to speak. In a very similar way. And I believe that is pretty much the common use case for the differentiation, like that is the main one. The second one would be determining and it’s a sparse array and to have a fast path for that. Which is less crucial. Like, that is not as big of an impact. But counting, or generating the index properties is very costly. Now, I know in V8, at least because I know—the other implementations are a little bit different– I don’t know how any other would look like. In V8 and this specific question would be answered in a O(1) for—does it have any non-index string properties?

RBR: All right. Thank you very much. And also, thank you very much for the input. Like I am going to check for the begin comments and would like to then just follow up with everyone to see—

SYG: I have a concern now. That corresponds to—that relates to Stage 1. Because what has been teased out in conversation with Mark and the mode use case, there is a different problem statement particularly about arrays that is not actually about counting properties. What is the thing we got Stage 1 on?

RBR: I thought all of the API?

JHD: Exploring the problem space of all of these things. That does—that allows for disregarding some of these things during Stage 1.

SYG: Please enumerate all of these things

JHD: So, for example, the—so if you want them enumerated, I had to defer to RBR. But my example would be trying to have a fast path for non-sparse arrays is one of the problem states and it would be fine if we decided during Stage 1 that is not a problem we’re trying to solve. While we continue to solve the other ones. I will pass it to Ruben.

RBR: Yeah. So I proposed the three different values. Right? Like, index, non-index string, and symbol. What I have—like and there are—I know of four relatively frequently use cases. The most frequent one—

CDA: We are five minutes over at this point. Is this something we can do by bringing this back in the meeting later?

RBR: Yeah. Sorry. Like, understand there are other things. So I—I guess we should continue that.

DE: Yeah. Maybe you could write that enumeration in the notes.

RBR: Mm-hmm.

MM: SYG, are you okay with this continuing with Stage 1?

SYG: Let me talk to you later. I think so, but let’s talk later.

DE: Yeah. We—maybe you should record in the conclusion that not everyone in committee was convinced of some of the aspect of the broader scope and some people wanted the scope to be narrower. That would reflect the state of discussion at Stage 1.

### Speaker's Summary of Key Points

Summary to be provided on continuation topic.

### Conclusion

Not everyone in committee was convinced of some of the aspect of the broader scope and some people wanted the scope to be narrower.

## Explicit Resource Management

Presenter: Daniel Minor (DLM)

* [proposal](https://github.com/tc39/proposal-explicit-resource-management)
* [slides](https://docs.google.com/presentation/d/1F4kLwEUvBmyyTWq06HQgiJypcCWm3uwOzVDzFQ0xauE/edit#slide=id.p)

DLM: Sure. Tough. I would like to present some feedback about the explicit resource management proposal. Quick reminder about what a specific resource management is. Basic idea the idea is to add a `using` keyword, along with a `Symbol.dispose` and the concept of `DisposableStack`. And generally the idea allows for automatic disposal of resources when the use—when using variable leaves scope. For example this simple little thing here. Where are we in SpiderMonkey. It’s fully implemented. It’s currently shipped in Nightly, but disabled behind a prop and the current implementation follows the spec. In particular, it’s currently maintaining an explicit list of resources to dispose at runtime.

DLM: So a while back, SYG opened this issue. There’s a lot of conversation there. And it basically evolved into this. We would like to disallow `using` in bare `case` statements. So the example on the left, where you have fallthrough from case 1 to case 2, is what we would like to no longer allow. And you can insert braces and do your thing. In this case, it’s clear that the `using` is in a blocked scope that corresponds to that one case.

DLM: My colleague IID provided a nice example of how this could desugar. So with case fallthrough, as you can see, things get a little bit weird. We would argue this isn’t implementation weirdness, but it’s actually a weirdness in how things are specified. And on the right-hand side we have the desugaring without fallthrough, which makes everything fairly clean and straightforward.

DLM: So why make this change? Basically, this would mean that we would be able to know the scope of the `using` statically. So in our implementation, we could get rid of the runtime dispose that we are currently maintaining, and just synthesize try-finally blocks. This is more efficient and simpler. We believe it’s dubious at best that people want to have this kind of C-style fallback behavior when using. And we are willing to rewrite our implementation if this change is made. And we heard support from V8 who said they are willing to rewrite the implementation for this implementation

DLM: Alternatively, why not just create a scope outside of a switch? We are doing our best to be efficient when handling switch statements. We currently have two at one much [#457BD]ling fall through would require adding a second pass or maybe making a new scope and removing if not needed. Doing time travel. This is possible. But it’s definitely extra work in complexity for code that ist most likely written by mistake, not on purpose.

DLM: Concently, RBN was kind enough to put a pull request with these changes. Yeah. I would like to ask for consensus. On making this change, about pull request #14.

MM [on queue]: Strong support of prohibition. Thanks! EOM

USA: All right. We have MM on the queue says, strong support. That was all. Let’s give a minute or two, to see if folks have more thoughts.

DLM: Yeah. There are comments with implicit support in the full request as well. I will share that NRO was positive with regards to this change about the Babel point of view.

JHD [on queue]: switch is bad and it's ok if people can't use a new feature in it, +1 <EOM> .

PFC: I support this.

USA: We have a lot of for support them, and no negative comments. So, DLM, you have consensus.

DLM: Okay. Great! Thank you very much.

### Summary

Allowing the `using` statement in a switch statement with fallthrough complicates implementations. If we disallow this use case, implementations can desugar to try/finally blocks which is simpler and more efficient. The proposal champion put together a pull request for this change: [rbuckton/ecma262#4](https://github.com/rbuckton/ecma262/pull/14).

### Conclusion

Consensus to merge [rbuckton/ecma262#14](https://github.com/rbuckton/ecma262/pull/14).

## Non-extensible applies to Private for stage 1, 2, 2.7

Presenter: Mark Miller (MM)

* [proposal](https://github.com/syg/proposal-nonextensible-applies-to-private)
* [keynote slides](https://github.com/syg/proposal-nonextensible-applies-to-private/blob/main/no-stamping-talks/non-extensible-applies-to-private.key)
* [pdf slides](https://github.com/syg/proposal-nonextensible-applies-to-private/blob/main/no-stamping-talks/non-extensible-applies-to-private.pdf)

MM: So, normal request for being able to record during presentation, including QA during presentation, and then recording off afterwards. Okay!

MM: This is primarily by SYG and I. The actual proposal text was written by SYG. And this is—something that, and, and—this particular proposal has several motivations, but first, for its history, it is extracted from the stabilized proposal. So to just, from a very, very quick recap. Stabilize was proposing new integrity traits and broke it into these five or five element integrity traits to consider. And in the last meeting when we talked about stabilize, we explained our hopes and dreams, which is that the fixed integrity trait, which is the one that we’re talking about today, be bundled into the existing non-extensible integrity trait. It would not be a new integrity trait, but new behavior associated with the existing non-extensible.

MM: And what this new behavior is about, is illustrated by the following code, the contrast between the subclass on the left and the subclass on the right. In this case, as an expository example, they are both from the same super class, `FrozenBase`, and the superclass constructor for whatever reason just freezes this. And on the left, the `AddsProperty` subclass, adds a public named property to `this`, but it is doing it, of course, after the `super` returns, before `super` returns there is no this that’s in scope and once super returns, this will, as you expect, throw a `TypeError`.

MM: On the right, we have what is essentially the same code, expect that instead of adding a public property, we’re adding a private field. And today, this does not throw. This actually adds the private field, even though the object is already frozen, and because it is already frozen it is already non-extensible. The reason we get the `TypeError` here is not because it is frozen per se, but specifically because it is non-extensible. We think this is counterintuitive, that is one motivation.

MM: So what we’re proposing is that non-extensible be—that the meaning of it be extended in a way that the claim is already intuitive, it is the thing that would be the least surprise. Such that attempting to add a private property to an object that is already non-extensible would throw a `TypeError`.

MM: That is a nice motivation, it probably wouldn’t have motivated us doing something as dangerous as this. It’s dangerous in that what we’re proposing is noncompatible, we will come back to it. One motivation for this is that the struct implementation, the struct proposal, is proceeding as a separate proposal; a lot of the rationale for it is that structs are essentially better classes, and better in particular in ways that enable them to have a high-speed implementation. And the problem with the current semantics is that this extensibility of private properties, combined with the return override, can be composed to force the engine to add a private field to an already constructed struct instance. And given the way private fields are implemented by, as far as I know, all of the high-speed engines, they would then have a choice, which is give up on structs necessarily having a fixed shape, which would hurt the performance promise—or have a completely different path through the engine for adding private fields to structs that are completely different then they are for adding private fields to objects. Neither of which we like.

MM: So with this proposal, this attempt to change the shape of structs, which is the only thing right now in the language that would imply that structs’ shape can change runtime—this would instead throw a `TypeError`. Instead, as far as we can tell, we can tell that structs can faithfully to the spec have a fixed shape high-speed implementation.

MM: The other motivation is mostly hinted at by this piece of code. Which is that the ability to add private properties via return override to existing objects, essentially gives the language something that is very much like a WeakMap, but it makes it accessible by syntax. And therefore, also fairly global.

MM: So over here, when we’re trying to reason about communication channels, this weak map reachable by syntax is a problem. Because you might freeze the class and freeze the prototypes and all of the methods, so it all looks like it has no hidden state here. And in the you take two other objects that you know not to have hidden state for the normal meaning of state, and thereby not represent a communications channel. And then one party might use this hidden map functionality to create a mutation of surprising state that the other party might not expect. And this hints at, you know, larger problems with virtualization that I can get into if there are questions. Let’s just say there are several different motivations that are quite crucial for both parties that all have the same simple solution.

MM: And the solution is indeed quite simple. It is so simple that SYG initially raised the possibility of doing this just as a needs-consensus PR, which I will agree is reasonable. I prefer that anything that has semantic observable effect, especially when there is a danger of incompatibility, just go through the discipline of a proposal, but still one that we can hope to advance fairly quickly. These two changes is the entirety of the proposal.

MM: These are the two operations in the spec that can cause a private field to be added to an object. And we’re just proposing that both of these do a precondition check, an input validation check, to verify that the object is extensible, and otherwise throw a `TypeError`.

MM: Now, with regard to the potential danger of incompatibility, would this break the web? Google has generously already deployed usage counters to find out. And the bad news is that over time this has still been growing. It has not been asymptoting. But the numbers here are like 0.000015%. So, they’re tiny. And a little bit more, by the way, with desktop than mobile, I think the 0% here is showing on both is just rounding errors on the display. But these are the six websites all in Germany where a problem was detected. And for all of these six sites, there are only two cases.

MM: One case is this weird piece of code that we don’t quite know why it’s—oh. The class is named `_`. So over here, it’s looping through the fields of under bar in order to initialize a private field of the `_`. Sorry, enumerating the public enumerating fields of `_`. And add a private field of `_`. But during the enumeration it is freezing `_` itself. The disturbing thing about the proposal is this code, for whatever weird reason might exist, is currently correct. And the price of accepting this proposal is that this code would start misbehaving despite the fact that today this is correct code.

MM: And likewise, with the other case, which is perhaps more understandable. Which resembles our first counterexample. Which is a superclass constructor that freezes `this` and then adds private properties in the subclass. So given that in both of these cases we would be breaking correct code, which exists out there on this very small portion of the web, it is conceivable that browsers would not be willing to go forward on this. Google, as a cosponsor of this proposal, looking at these numbers, have decided that they themselves are willing to go forward. And it is also conceivable that non-browser implementations might object to the non-backwards-compatible change as well. That’s the question we have for the committee today.

MM: And what we’re, we would like to ask for is first stage one, but since this was something that was reasonable as a needs consensus PR, we, we would, if we did a stage one, we’re going to ask for more. Which we may or may not get.

MM: So first of all, may we have stage 1. This is the actual, official statement of stage 1. So first of all, any objections to stage 1?

MM: Okay. Any support for stage 1?

[on queue] - support for stage 1 from DLM, DE, and DJM

DLM: SpiderMonkey team is favorable about this change.

MM: Great. Thank you. So, at this point, I think we can say we have stage one. The stage two checklist we made for ourselves derived from the official statement is also committee approved and spec reviewers selected. This is the actual official statement of stage two. Can we have two non-champion volunteers to review?

MF: I’m—I’m confused. We didn’t reach stage two, right?

MM: Right. I’m asking do we need this to prove, so what I wrote down over here is to get to stage two, we need reviewers selected. Am I just wrong about that?

MF: When we grant stage two, we assign reviewers.

MM: Ah. Excellent. Excellent. So can we—first of all, are there any objections to stage two?

SYG: I just wanted to give some more color on the data that was shown. So—

MM: Great.

SYG: MM is certainly accurate that Chrome is willing to try to ship this, by our suggestion. But that said, while the absolute percentage does seem small, due keep in mind this is sampling from page loads, and page loads are on the order of many, many billions. So, like even very tiny percentages can end up causing concentrated pain for a small percentage of folks who keep hitting the same error over and over, which might be bad. But in this case, the plan is that we already did reach out to this German GIS software, Cadenza, we have thought heard back, I will try to ping and follow-up with them, but the hope that since this is looking like an officially sold and supported product, that they would be responsive to changing that one piece of code to a static Initializing, which would be a very easy work around for their code.

SYG: The other two websites that were broken that used the same Axial framework, which I cannot find any references to; if anybody is familiar with the German web design scene and firms that do that service, if they have any clues there, it would be much appreciated. But I don’t know how to do any outreach for that at all. But given it is just two, and one of them is a music festival website, traffic for which I expect will die down after the music festival is passed. It really just comes to this one other site. And I think that is not sufficient cause to consider it a breakage to not try to ship. So really right now, it comes down to trying to reach out to this dissy company that does the mapping software.

SYG: I welcome any help that anyone wants to volunteer to also do the reach out if they are interested in also seeing this change happen.

MM: Any objections to stage two? Great. Is there any support for stage two?

CDA: Do we have any explicit support for stage two? So there’s nobody explicitly expressing aberrations.

[on queue] support for stage 2 from DJM

JHD: Yeah, I mean, it’s—I think it should be fine to, like I understand all of the rationales here and all of the cross-proposal, crosscutting concerns as to why this is valuable. And I see worse consequences if we don’t do this. So I like, but it is unfortunate because I really liked the simplicity of the weak map analogy for private fields. But like this does explain it, you know, somewhat cleanly. So as long as it is web compatible, like, go for it.

MM: Okay. So I take it, I kind of take that as support?

JHD: Yeah. Yeah. Yeah. It’s—support plus I wanted to grumble a little bit.

MM: Oh, yeah. Okay. I had the same discomfort when the idea first arose in stabilize. Okay. So, good. Now, so now—

CDA: Now, you need reviewers. Given there were no objections earlier, not seeing objections now and multiple voices have explicit support, you now have stage two. Which means now you need stage two reviewers.

CDA: JHD has volunteered.

MM: Great. Thank you.

CDA: Do you think you need one more? Typically? We like to have—

MM: Yeah. I don’t know what the requirement is, but certainly two is traditional.

CDA: I think two is the minimum.

DE: I’m happy to review.

CDA: And Daniel will review.

MM: Excellent! Excellent! Thank you. And now, could we possibly in the same meeting with, with two reviewers, do we need the reviews to happen before we ask for stage 2.7. If so, obviously, key can’t get stage 2.7 this instance.

CDA: Acceptance criteria for 2.7 is reviewers sign off on the spec. This is required for 2.7.

DE: Yeah. I did review the spec before the meeting. And I would sign-off on it. But it would need those other sign-offs, too.

MM: Okay. Can we get those other—so the other people that would need to sign off, JHD, you said you’re a reviewer, would you sign-off on the spec text you saw? It is really the entirety of the spec text.

JHD: I would have to go back and look at it. But I’m comfortable with conditional approval and I will check in the next 20 minutes. But the editors are the ones that definitely need to sign-off. Yeah. So yeah, I approve that spec. That’s fine.

MM: Okay. Great. And—are there editors who could weigh-in in realtime?

KG: Yes. Seems good.

MM: I’m sorry, who was that?

CDA: That was KG.

MM: KG, hi. So, do you approve?

KG: Yes.

MM: Great. Is that sufficient? Do we need another editor?

MF: I mean, I would personally prefer to have until tomorrow. I hadn’t looked at the spec yet. But I’m also comfortable deferring to KG. So that’s fine.

MM: Okay. That’s great. That means that there is still a chance we can get it this plenary. So which is really the only thing I care about. It doesn’t have to happen in real time. And—all right.

CDA: Okay. For the record, are we saying we are granting conditional advancement to 2.7, predicated on the editor’s sign-off? Now, KG just said he approved. MF was a little bit more ambivalent, haven’t heard from SYG.

SYG: I wrote the text.

CDA: I forgot you are cochampion on this. Your sign-off is implied.

MM: Okay. And, and once we have all of the sign-offs, does anyone in the committee object to 2.7?

MM: Great. And does anybody on the committee support 2.7?

CDA: Nothing on the queue so far. JHD supports 2.7.

JHD [on queue]: same support <EOM>

MM: Great, that means we do have conditional 2.7. Waiting on MF, correct.

CDA: I believe you need two explicit supports.

DE: I also explicitly support 2.7.

MM: Okay. Great. Thank you. Okay! Great. So MF, I look forward to hearing more from you later.

MF: Yep.

CDA: All right. I believe, if I’m not mistaken, that concludes your topic.

MM: Okay. Great.

### Speaker’s Summary

* MM presented a new proposal, broken off from [proposal-stabilize](https://github.com/syg/proposal-nonextensible-applies-to-private), co-championed by SYG and others. It proposes to make private fields respect `Object.preventExtensions` .
* This proposal would patch up the current counterintuitive behavior of private fields not obeying non-extensibility, prevent hidden state creation via private fields, and improve performance so that nonextensible objects can have fixed memory layouts.
* The proposal is not backwards compatible and might rarely break existing correct code.
* Google has deployed usage counters and found minimal impact, but some websites in Germany (some which use a German GIS framework called Cadenza) might be affected. One website has minimal likely impact; it is for a temporary music festival. Google is trying to reach out to the affected German websites and Cadenza, but further help with outreach was requested by SYG.

### Conclusion

* The proposal reached Stage 1.
* And it reached Stage 2 (reviewers JHD and DE, who already have signed off).
* And it reached conditional Stage 2.7 (conditional on pending editor approval from MF; editor approval from KG and SYG already were given).
* And it reached stage 2.7 later in the meeting when it got that approval from MF.

## Continuation of Object.propertyCount for stage 1 or 2

Presenter: Ruben Bridgewater (RBR)

* [proposal](https://github.com/ljharb/object-property-count)
* [slides](https://github.com/tc39/agendas/blob/main/2025/2025.04%20-%20Object.propertyCount%20slides.pdf)

JHD: We have been discussing it in Matrix. So for the notes I can just say that it seems like what we need to do is potentially come up with a proposal for arrays that are sparse and then remove the index stuff from the property count and then come back—and try to address the concerns that folks have indicated. Like there is so much—the—the potential API surface or the potential solution for the property count proposal is large enough and there has been enough varied kinds of pushback, I’m not sure if is productive in plenary to go back and further right now. But we have a lot of people to talk to in the interim, I’m sure it would be a lively discussion at a future plenary.

RBR: My suggestion for now would be just to remove the differentiation between the index and nonindex string and keys. I assume that would address the concerns in the room, but I could be wrong. I would go for that for now.

SYG: I think we’re running ahead a bit. While a few of us did express specific concern of the API shape you presented, I’m very supportive of one problem statement I heard, performance issue of counting properties. You showed a bunch of examples that motivated it, the problem in the wild. During the discussion, another problem, which sounded like a different, very different problem to me, came up, which was around slow paths with arrays. Whether that is sparse arrays or native arrays with non-indexed properties on them. That is a different problem to me than counting properties. Perhaps the best way to solve is to count properties, but the problem that you’re trying to solve in the arrays case is not actually counting properties. Right? That is what I would like clarity on. The stage one that we got agreement on, is that for counting properties or counting properties plus whatever problem with arrays? My personal preference is, because they sound like very different problems to me, that they be treated as different proposals. But that’s my personal opinion. It is up to you all to decide how to frame the problem statement.

JHD: My, my interpretation here is that—we phrase this as `Object.propertyCount`, counting properties, because that seemed like the only solution to all of these use cases at once. I would say that a more broader statement of what I was originally hoping to solve, is generally comparing and describing objects and arrays, and avoiding performance cliffs whenever possible. And it’s totally reasonable if—so that’s how I would, and Rubin can talk to this as well, that’s how I would personally describe the problem statement. Maybe workshop it, and try to come up with a shorter version. And I think it is completely reasonable to say, well, why don’t we narrow that, within stage one, into two separate problem statements, one about array and one about non-arrays and then have two separate proposals. Where, one about arrays might, for example, do like an `isSparse`, because it doesn’t need the necessary count them, it just needs to determine if there are any. Things like that. Does that broader problem statement of avoiding performance cliffs when comparing and describing objects work for you, SYG?

SYG: I would like it more scoped than that. The general problem of avoiding performance cliffs I think extends to a lot of implementation details that may be undesirable to expose. In particular, you might care if an object is in dictionary mode, that is usually much slower than in fast mode. That is not anything we would ever want to expose to the web, but it evidently affects fast pass and slow pass, and I would categorically reject out of scope. And if it was broad enough just to avoid fast pass, the shape and object it is currently in, that sounds like it would be in scope. That broader statement, why I would encompass the array issue and property counting issue is to too broad for me to really figure out what is in scope that you’re thinking of.

RBR: Yeah. So I agree to what you were just saying. And like exposing if something is in dictionary mode or not, I wouldn’t be interested in. I don’t believe that is useful because that’s something I believe is really up for the engine.

SYG: Right. So that’s why I was, earlier I was saying I would like an enumeration of what you consider to be in scope. It could be that the problem statement— I’m totally happy with the broad problem statement “we want to avoid performance cliffs”, in particular, these performance cliffs. But all performance cliffs, that is pretty hard for me to think about.

RBR: Yeah. So I believe there are already a couple mentioned. The question is, like—and if we want to address them all with the one API, and mention ones or if a couple should be separated?

CDA: That is it for the queue.

JHD: I mean, I think—I understand we want a specific problem statement that everyone is happy with for stage one. We should have this before the end of this plenary. SYG, it sounds like in spirit you’re okay with it, but we haven’t come up with a wording that avoids including things like dictionary mode and all of that stuff. Right? Does it make sense to you that if we—like, does that resonate? That we just haven’t come up with the phrasing we’re probably on the same page as to what we sound to describe?

SYG: It sounds like you care about property counting and something to do with arrays, concretely and nothing else. Yeah, that sounds.

JHD: Yes.

SYG: So, I am very enthusiastic about property counting, solving that performance issue with the allocations. I’m very skeptical about how we can solve that at all. I still don’t think that is a stage one blocker. But if you choose to just glom together those two problem statements into one for the proposal, then just be clear that, you know, it’s, I’m very skeptical of the second part.

JHD: Right. I would say for the time being we do. But based on all of the discussions it is highly likely that we would want to come back with a narrower problem scope in the future for this proposal, and perhaps a new proposal to account for the part that was removed.

SYG: Yeah.

RBR: Good? And like, I do have one question. That is like the differentiation of an array and an object. Because in the end, for me, as a user, an array is always an object. So I personally try to prevent it, but I have seen a lot of code just accepting any input which could be an array or an object and they just use, for example, `Object.keys()` on it. That's very, very expensive to do. So, that’s where I’m not certain about the array versus `Object.keys()`, how to differentiate them?

SYG: Sorry, was that a question for me?

RBR: Yeah.

SYG: I mean, you differentiate them by—I see, okay. So, if the problem statement were improving the performance of counting properties, because you think in your experience, the performance of counting properties of arrays versus non-array objects is very different, that falls under that, that beginning, for that distinction falls under the problem statement of counting properties?

SYG: Like, your problem statement, I want to solve performance of counting properties. Now you’re saying I went to solve distinguishing arrays and objects. Is the distinguishing thing like a necessary step to solve the counting of properties performance?

RBR: No. They are just different kind of algorithms and for input validation, for example, you want to probably make sure that the array does not contain any additional properties on it. Yeah?

SYG: Let’s take a step back. Now, I heard a third problem which is input validation.

RBR: Yeah, that is something that I mentioned.

SYG: Is the goal that you want one API? You have a list of use cases and want one API that fits all of them? Is that the actual goal?

RBR: And the API just fits in different aspects. It is used as a fast pass. And that was like, I believe, also in a first, or second slide in this case. For many algorithms and from the use cases, I believe I mentioned seven. And there’s like a fast path in general is a very big one for a lot of things. For example, input validation as well.

JHD: I guess to answer your question as well, SYG. It doesn’t matter how many APIs solve these problems, the more of them they solve the better. This specific solution happens to be one API that addresses all of them. If that API seems too complex for the subset of use cases that you or any other delegate finds compelling, then it’s fine, we can split that up into multiple separate proposals and APIs. You know, it is not a binary thing. Right? As RBR said, there are seven use cases, solving one is better than zero. And solving six is better than zero. Right? So, it is more that we looked at these problems and this API seems to address them all. And especially given recent engine concerns about the number of methods being added, it seems desirable to come up with one somewhat related method that covered all of the use cases. It is fine if that isn’t palatable.

SYG: Okay. So the problem statement is here are these use cases. Which is the problem statement is just like, here’s a burn down list, we want to fix these. Is that the most accurate thing?

JHD: Yes.

RBR: Yeah.

SYG: Okay. Okay. I see. Yeah, I don’t have an issue with, I personally don’t have an issue with stage one for that problem statement.

RBR: Thank you.

### Speaker’s Summary

* The proposed problem space: Developers need a performant way to count properties on an object, without allocating intermediate arrays.
  * `Object.keys(obj).length` is very common in real-world JavaScript code.
  * Other use cases presented included input validation, object comparison, sparse-array detection, and telemetry, especially in hot paths.
* A proposed API solution: an Object.propertyCount function that takes an options object allowing filtering by key type (`'index'`, `'nonIndexString'`, `'symbol'`) and enumerability (`true`, `false`, or `'all'`).
* There was broad support for the core use case, counting enumerable “own” properties.
* There was pushback about various proposed features, especially about those dealing with sparse arrays, as well as distinguishing between index keys and non-index string keys.

### Conclusion

* Consensus to progress to Stage 1.

## Continuation: Don't Remember Panicking

Presenter: Mark Miller (MM)

* [proposal](https://github.com/tc39/proposal-oom-fails-fast/tree/master)
* [slides](https://github.com/tc39/proposal-oom-fails-fast/blob/master/panic-talks/dont-remember-panicking.pdf)

SYG: I wanted to understand, since it is a host hook, it does not callback into JS, which I’m not at all sure of, I think that would be disastrous. But just a host hook I’m not quite sure how this would help Agoric’s code.

MM: So, right now, Agoric runs our critical code on XS. XS does immediately stop executing on out of memory, out of stack, internal cert violation. And XS is willing to give us an explicit panic built-in, but it would prefer to do it if the committee agrees on it, which is not an answer to your question. Because we are already talking about postponing the panic built-in until later. So, altogether, the host, the host hook by itself doesn’t directly help Agoric, it helps the language, the helps programmers writing in the language, it helps the committee, and I would argue it helps the website of standardization, because it gives the, all of those standards processes a place to talk about realities like out of memory that right now the spec is in denial of. You made a claim, when we were, you know, previously, that I have continued to not understand, maybe you can clarify. The claim was that the host continuing execution after an out of memory, continuing to execute JavaScript code is not a violation of the spec. I certainly agree that it is reality that memory does exhaust, but I don’t see how it cannot be a violation of the spec. And I would also ask you, if a particular host continued not by throwing an exception, but by simply having the place where the fault occurred return 7, would you also consider that to be not a violation of the spec in something that programmers should know to be prepared for?

SYG: So, I do retract my statement that it is not a violation of the spec. I agree with you that it is a violation of the spec. What I was driving at was that it is not a violation of the spec that is useful or can be acted upon in anyway, that is impossible to conform to the spec as you have previously pointed out for that particular violation. So, while it is pedantically speaking a violation. I don’t think it of as—

MM: So, since it is reality, and since we are a standards committee that has basically two primary audiences: people writing JavaScript code and people implementing JavaScript engines, and since whatever the hosts do, the people writing JavaScript code need to know about this, this gives the hosts an opportunity to explain the behavior of their fault handler so that JavaScript programmers can consult that if the host documents it—we’re not insisting that the host documents it. But for example, on the website of standards, the, the purpose of all of these standards committees in the first place is to reduce the gratuitous behavior differences between browsers. That was sort of one of the core initial motivations for both web standards and TC39 originally. This would explicitly make it discussable in web standards without web standards having to stay: This is how we violate the spec. It can say, it could, it could, within the JavaScript standard, the web standard could say, here is the behavior of our default handler. We are not demanding that they do that it provides the opportunity.

MM: And for those who are formalizing JavaScript, like the case folk in South Korea, you know, are doing heroic job of turning JavaScript into something with a formal semantics such that you can do proofs about JavaScript code, right now, the path of least resistance is, that I believe all, everyone has done formal semantics in JavaScript is following is the spec text. To assume that actually covers the contract with JavaScript code and even leaving what the host is doing in the fault handlers unspecified to simply say that these conditions delegate to the host handler would be a very good hint to those formal semantics that they should include the possibility that—that possibility is part of the semantics, so that proofs of correctness of JavaScript code do not prove correct to code that does not work in reality.

CDA: MAH?

MAH: Yeah. So I think host by itself, as MM said, that doesn’t achieve much. But it gives us a place to discuss what happens when the situation occurs. And in particular, the hope is to also have a mechanism to configure the behavior of the host. So if we encounter an out of memory condition, or a user panic or something like that, that the creator of the agent or the first run script is saying “if I encounter these conditions, please kill me instead of continuing”. This is, in particular really useful for workers that have been spawned out of the main thread, as it may not always be possible to reliably notify the main thread that such a condition occurred. For User memory, could do it. But a worker, I would prefer for the supervisor, the main thread to let known that has happened, for the work to be killed then for the main thread to let it know that it has happened so it can take further actions.

ABO: Yeah. The HTML standard has a section about aborting a running script, which is in the case of HTML is sometimes needed for killing the current document. It also discusses things like memory limits and so on. Or like, if an API blocks the main thread, such as `window.alert`, that the user can block script execution. Or in particular, if the script execution is disabled in the middle of an infinite loop, the HTML spec describes like the running script should be killed. So, maybe this should be moved into Ecma-262. I don’t know. But yeah. This currently isn’t in the Ecma-262 spec. But it is not like it is not spec’d for web browsers. [MM shows slide 28, with HTML issue] This is not related to the three HTML issues that MM is currently showing in the current slide. This is something that has been a part of the spec for a while, but I guess it is kind of related.

[https://html.spec.whatwg.org/multipage/webappapis.html#killing-scripts](https://html.spec.whatwg.org/multipage/webappapis.html#killing-scripts)

MM: Yeah. So if all are other places in webstandards that I should know about that discusses this issue, please let me know offline. These were the three that I found. But these three are specifically talking about what the minimum abortable unit it, they are talking about I’m here calling the static agent cluster, which is just, in my opinion, unfortunately large. But once, but—once again, the fundamental ask here is the host hook. And if the host hook wants to terminate the behavior and wants to terminate something larger, than the minimum abortable unit, I wouldn’t, I would just like to give it the opportunity to document that’s what it is doing.

ABO: I was mentioning this in response in particular to the concern about having the host hook not respond.

MM: Oh, oh.

ABO: So I think that would be allowed by this section of the spec that allows aborting a running script.

MM: Right. Okay. So yeah. So right now, the actual text in the ECMAscript spec that the host hook must return a normal completion or throw completion. So you’re saying the HTML description of browser behavior, exactly that the host, whether it is the host hook or not, there are conditions that the host neither returns a normal completion or a throw completion, it doesn’t proceed into JavaScript at all. I would like the JavaScript spec to acknowledge that might happen. Otherwise the HTML spec and the JavaScript spec are simply logically incompatible..

MAH: I’m not sure if that is quite true. If there is no further execution in that environment, it is not observable that, it is basically equivalent to the host having never returned.

MM: Well, yeah. But this says that the host hook must return. I’m being picky on language here. Maybe it is not what it meant to say. That is what the actual text in the JavaScript spec says.

MAH: Yeah, I’m not sure how that would be observable anyway. If it doesn’t return. Yeah—I’m done.

MF: Yeah. I don’t—think I have the same hang up as you do about the phrasing here with the host hook. We say *what* it must return. We don’t say *when* it must return.

[Laughter]

MF: It could take until—just before the heat death of the universe and then return. Like is that the same for you? I don’t think it is as strong a requirement as you’re reading it.

MM: That’s, that’s—okay. The spec is trying to not simply be, you know, be denotationly correct, but it’s trying to be explanatory. But anyway, I’m not terribly hung up with the particular text here. What I do, what I am, what I do feel strongly about is that the spec itself should somewhere, whether it is here or not, should somewhere be clear that, that—following—you know, going back to the original motivation, following in particular the out of memory, which is still the most problematic case, that that is part of reality and that some hosts, you know, different hosts might choose different policies. But somebody doing a semantics in JavaScript and other people trying to prove correctness of their programs with reference to the mechanized semantics in JavaScript. Any such semantics of JavaScript needs to take into account the possibility that hosts might resume JavaScript execution if they indeed might. Otherwise, you approve correct programs that then misbehave without their being a bug anywhere.

CDA: All right. MF, you’re also next on the queue

MF: Yeah. I just wanted to kind of get an understanding of the relationship between what browsers do today when there’s an unresponsive main thread and they kill that versus like what your proposed minimum abortable unit is. Have you looked into what the various browsers kill? What that unit is when it is unresponsive?

MM: I don’t know. From the three—the three HTML discussions I take it that, that there are at least considering standardizing the standard agent cluster. Which is sound. But it just seems unfortunately large compared to the minimum that they could do instead. But I don’t know.

MF: But they are considering in theory, right? Have they discussed at all what is done today?

MM: Okay. So—so—enough browser makers in the room. Could some browser makers comment on what they think they do today?

SYG: Got, authoritative, I think it kills the process. There is no notion of a dynamic agent cluster. I think that would be pretty much unimplementable and nondeterministic. Like we’re talking about figure out what portion may be live and reachable from which thread and find the minimum set of such threads with somehow just join those threads. So I don’t think that happens. So it is just a process.

MM: Okay. So Chrome likely static agent, well, I’m sorry. Is static agent cluster and process the same thing?

SYG: I—don’t know. Like I think so. There may be some origin stuff in play if you want, like same origin agent clusters and stuff like that. Outside of those details it is pretty much a process, I’m sure.

MLS: I believe it is the same thing with Safari it kills the web content stuff that is running the pain.

MM: Oh, the other place with the correctness issue in absence of the spec omitting various faults that came up in my talk is the infinite loop. Code might actually engage in an infinite loop in order to prevent further progress from that point. Engines might in violation of the spec continue process in that agent past that point anywhere. And the code trying to protect itself now does damage with corrupted state. State that observers definitely outside of the program should not have been able to expect.

CDA: SYG?

SYG: I’m supportive of figuring out how to better talk about real world resources in our specification. I’m not supportive of the goal of adding a host hook to the hopes of eventually exposing it as a configurable toggle.

MM: Okay. Can we divide that line even into separate questions? I certainly want to expose it as, as one way you can opt into something other than the default behavior. But let’s separate out that question. Since your supportive in general of the JavaScript spec, being more explicit with regard to these problematic conditions, specifically, resource exhaustion. Would simply the host hook as an explanatory mechanism, as some place where, for example, the HTML spec could explain what browsers agree on, Or individual browsers could explain what they do. Does that by itself do you—is there anything about that by itself that you would object to?

SYG: As an editorial explanatory device. Sorry, I see MLS is on the queue.

MM: But, but, yeah, I would like to get your response.

SYG: As an editorial explanatory device I would prefer that we reflect reality through other editorial ways. Because a host hook here suggests two things. One, that is somehow configurable by the host and programmable by the host. Whereas I think the whole way to reflect reality, is to say this implementation is fine.

MLS: Yeah. Yeah, just a quick comment. We've actually written tests to make sure that we can recover from an out of memory exception when there's a proper try catch that would pop off the frames that are responsible for that. So, it's kind of tricky to code that in a reliable way, but we can recover from that. the engine itself doesn't die when the user creates an out of memory exception due to what they're

CDA: All we are past time, but Matthew is on the queue.

MHN: Yeah, really quick. I didn't quite understand SYG's reply at the end. Because a host already has a choice today of either raising an error when an out of memory error or it can take the choice of panicking the agent. So it is already a reality that the host is free to decide this

SYG: Yeah, a host loosely speaking is a collection of implementations, HTML is a host of the JavaScript spec. There is nothing we can write in HTML that would be beyond it if it is just implementation defined.

MM: I think we can adjourn at this point.

MM: I think we received a lot of good feedback. and clearly SYG and the champions can continue a lot of this conversation offline as well.

CDA: Okay, thanks. That brings us to the end of day two. See everyone tomorrow.

CDA: Big thanks to everyone and especially our notetakers for the day. Really appreciate it.

### Speaker's Summary of Key Points

* MM presented the “Don’t Remember Panicking” proposal, renamed from the Stage 1 proposal “OOM Must Fail Fast”.
* The presented problem is that robust transactional code (e.g., financial applications or medical devices that need integrity more than availability) need to be able to explicitly request termination when unrecoverable runtime faults occur, yet JavaScript hosts today handle these fault conditions inconsistently.
* The new proposed solution:
  * A HostFaultHandler hook to deal with internal faults within the current “minimal abortable unit of computation”.
  * A built-in Reflect.panic function for developers to explicitly invoke the HostFaultHandler hook.
* There was pushback against Reflect.panic and giving web developers the capability to excessively halt programs, particularly webpages. It was proposed to split Reflect.panic into its own proposal to allow the rest of the host-handling mechanism to be considered separately.
* It was pointed out that there is no current common interoperable behavior defined for when browsers run out of memory. There was extensive discussion over the extent to which real-world resource management and fault conditions are already currently specified by Ecma262 and HTML, and whether they should be developer configurable.
* There was general agreement that Ecma262 should more robustly specify the current reality of how memory and other real-world resources should be handled.

### Conclusion

* Extensive discussion.
* Still in Stage 1.
