# July 21, 2020 Meeting Notes

-----

**In-person attendees:**
None :(

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Mathias Bynens       | MB             | Google             |
| Yulia Startsev       | YSV            | Mozilla            |
| Rick Waldron         | RW             | Bocoup             |
| Mark Cohen           | MPC            | PayPal             |
| Rick Button          | RBU            | Bloomberg          |
| Chip Morningstar     | CM             | Agoric             |
| Mark S. Miller       | MM             | Agoric             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Marja Hölttä         | MHA            | Google             |
| Waldemar Horwat      | WH             | Google             |
| Michael Saboff       | MLS            | Apple              |
| Philip Chimento      | PFC            | Igalia             |
| Chengzhong Wu        | CZW            | Alibaba            |
| Robin Ricard         | RRD            | Bloomberg          |
| Mattijs Hoitink      | MHK            | Apple              |
| Nicolò Ribaudo       | NRO            | Babel - Invited Expert |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Robert Pamely        | RPY            | Bloomberg          |
| SongYang Pu          | SYP            | Alibaba            |
| Jordan Harband       | JHD            | Invited Expert     |
| Bradford C. Smith    | BSH            | Google             |
| Justin Ridgewell     | JRL            | Google             |
| Zibi Braniecki       | ZBI            | Mozilla            |
| Sven Sauleau         | SSA            | Babel - Invited Expert |
| Istvan Sebestyen     | IS             | Ecma               |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Myles Borins         | MBS            | GitHub / MSFT      |
| Shane F. Carr        | SFC            | Google             |
| Mary Marchini        | MAR            | Netflix            |
| Rob Palmer           | RPR            | Bloomberg          |

## Promise.any & AggregateError for stage 4

Presenter: Mathias Bynens (MB)

- [proposal](https://github.com/tc39/proposal-promise-any)
- [slides](https://docs.google.com/presentation/d/1PcfPP5nLVG8w5OosQt5PWwOmFUPuD5pg1rgGaF1JVis)
- [PR](https://github.com/tc39/ecma262/pull/2040)

MB: (presents slides)

MB: Any objections to stage 4?

[silence]

RPR: You have consensus, congratulations.

### Conclusion/Resolution

- Stage 4!

## Strictness check for object's SetMutableBinding

Presenter: Leo Balter (LEO)

- [PR](https://github.com/tc39/ecma262/pull/2094)
- [slides](https://docs.google.com/presentation/d/1O_YdntfiZMTsxX_2FPk1YZypEy1vncL3X1NCg-vmC1E)

LEO: (presents slides)

WH: What should happen if the original binding was removed and then another binding was created and put back in its place?

LEO: For ???, we just would - if it does have this binding, if the object environment record will have this binding or not, anything after that will go through Set for the value. If it does have a new binding and say it’s a known configurable one or a known ??? one, then ??? it's not something we do today in ES but in my opinion it's a userland problem.
For me, in my personal opinion, it’s a userland problem. KG has raised that it’s an inconvenience …? People are using proxies and like tricking us, we can still be tricked by proxies where this binding is not present, it still might save a ReferenceError in strict mode. It’s still a userland concern in my opinion.

WH: If there is a property the first time you checked, before this code runs, then the property gets deleted and put back. Are the implementations expected to write to that property, or is it somehow bound to the first property?

KG: They're expected to write to the property.

WH: Is this observable in other ways than just getting the error? It looks like you added a HasProperty call so proxies can observe this.

LEO: We can observe this through Proxies.

KG: [example] If you do `with`, and then you have a new proxy to introduce the proxy into your scope, and you enter strict mode inside of the `with` - because this fix is for strict mode code - you would observably print the `has` check twice, once when you’re doing the initial lookup and the delete itself, and then once when you write… actually maybe it’s three times. There’s not currently agreement between the engines on what to do. I'm not worried about this case, because if you put a Proxy in your `with` handler then you should expect to see some checks happening and I don't expect anyone to be broken by those checks.

WH: That’s a fun example. I’m just curious how stable this fix is with respect to fixing implementations’ concerns. Are we going to be tweaking it for a while still? I am in favor of this, I just want to know how stable this fix is.

KG: I think it depends on how willing implementations are to change their behavior of `with` proxy, and I’m not sure. I observe that they’re all currently different today.

WH: Thank you.

KG: Certainly if you don’t have a proxy involved, this will match web behavior across implementations except 262 and one case in XS.

LEO: Yes, my goal is to match web reality. And also consistency with other parts of SetMutableBindings as well.

MM: The code in the real world that this most reminds me of is CP’s eight magic lines of code, which is the basis of the SES shim, where we use exactly a sloppy `with` on a proxy to emulate a global lookup, and then within there we use a strict function, and then further within that we do a direct `eval`, which isn’t relevant here. One problem that we ran into, and I'm wondering if this semantic change might fix it, is there's a peculiar exception in the semantics that we cannot faithfully emulate: if you look up an unbound variable, you get a ReferenceError, but if you do a typeof of an unbound variable, if the expression is just a variable expression, the expression evaluation doesn’t cause a reference error, but rather the typeof of that expression gives you back undefined. We’ve looked at what the traps are on the proxy for those cases, and there’s no way from the handler to emulate both behaviors faithfully. You have to emulate one and be inaccurate on the other. Does this change help in any way with detecting the difference in variable lookups for the purposes of normal expression evaluation vs for the purposes of `typeof`?

KG: No. This change is scoped strictly to when you are performing SetMutableBinding.

MM: Only for assignment. Ok. Ok. Ok, thank you.

SYG: I’m not sure if I missed this, what is the proposed behavior for your example?

KG: For my first proxy one, I’m honestly not sure. I don’t remember all of the places that the `has` trap is reached.

SYG: Ok. But in any case, what I’m trying to confirm is that because of proxies, all engines - all browser engines - do have work to do here?

KG: Safari might not.

SYG: Ok.

KG: But it would be - the `has` trap would be triggered at least twice, once in the initial lookup and once in the assignment. Yes. I should also point out that there are a lot of cases where the reference type, which is sort of what’s involved in this, doesn’t match engine behavior. It’s one of the oldest web reality issues on 262, and this fixes it in one particular case. So yes, engines would have work to do, but engines already have a bunch of work to do if they want to be correct about all the edge cases for references.

SYG: To confirm again, this is for the object environment records, which are only `with` scopes and not global scopes?

KG: It’s also global scopes, but in global scopes the `has` check is not observable.

SYG: OK. I don't care about the performance of `with` scopes and I don't imagine anyone else cares. If a naive implementation of extra `has` checks here regresses global property lookup, that would be bad, but we’ll see I guess.

KG: I don't think this change implies any required changes for global properties. Engines already do what this PR is asking for, for global variables.

SYG: Can’t you - if you install a proxy somewhere in your global environment chain, can it become observable then?

KG: Is that a thing you can do?

SYG: I mean, you can get the global object and then you can install a proxy in its prototype chain.

KG: Isn't it immutable? I thought the global object was an immutable prototype exotic object at least in the web platform.

SYG: Hm. Okay, well I’ll follow up on the thread if we get around to it and find issues, I guess.

LEO: SYG, do you want to follow up with tests and then we can nail down the expected behavior that way?

SYG: I'm in support of this PR, I'm just saying that it may have performance repercussions that we need to look at. Hopefully it doesn't.

LEO: You prefer to hold on on this PR for now?

SYG: No. I prefer that we agree and merge this PR. As the example shows, in the weird let's-make-things-observable-by-Proxies case, we don't have interop.

LEO: Does anyone have any objections to merging this PR?

WH: The audio broke up so I couldn’t tell what we’re supposed to be agreeing to, please repeat it.

LEO: For now, what we’re proposing is to agree with the current behavior, we will eventually have tests for this to catch up with how this is implied in proxies, but from my understanding of what SYG says, this is already better progress for interoperability.

WH: By current behavior do you mean current spec behavior or current implementation behavior?

KG: The proposal is to get consensus for this PR.

WH: I’m in favor, then.

LEO: Any objections? I am still asking for consensus.

[silence]

LEO: I believe this is consensus.

RPR: Yes, consensus on this PR.

### Conclusion/resolution

- Consensus on the PR.

## Intl.ListFormat for Stage 4

Presenter: Zibi Braniecki (ZB)

- [proposal](https://github.com/tc39/proposal-intl-list-format)
- [slides](https://docs.google.com/presentation/d/13gxxnt-JMuWXJhzwuU2jtBRZ8RGJgJ0Y8RsIvHEQU7k/edit#slide=id.p)

ZB: (presents slides)

ZB: Stage 4?

[silence]

RPR: You have stage 4.

### Conclusion/resolution

- Stage 4!

## Intl.DateTimeFormat dateStyle/timeStyle for Stage 4

Presenter: Zibi Braniecki (ZB)

- [proposal](https://github.com/tc39/proposal-intl-datetime-style)
- [slides](https://docs.google.com/presentation/d/1USMb1b_1zDMAlw3Aw5k9DpqZsZ3NS_q9gOyhRCQc-qg)

ZB: (presents slides)

ZB: Stage 4?

SFC: I’m really happy with this proposal, and what ZB has done to move this proposal forward. The open questions with Temporal now that we can get this to stage 4 - they’ll be able to work on that much more effectively. The one question I wanted to point out is that there’s some editorial issues - ZB has fixed all the normative issues, but there are a couple of editorial issues that were raised yesterday. I think we can fix the editorial issues separately from Stage 4. I very much support moving this proposal to Stage 4.

ZB: Yes, it is my intention to fix the editorial issues reported this week.

RPR: Given that, last call for any objections to stage 4?

WH: Can you describe the nature of the editorial issues?

ZB: There is one with several spelling issues, a missing `then` in a branch, one step has been moved to an `if-else` instead of kept before the loop, and there is some question about internal slots and how we store calendar-independent data in internal slots, because the PR was written before we merged a PR that shifts from using the gregorian calendar for internal slots to supporting many calendar systems. So I have to update the internal slot here. And the last one is that there is a question about how we should act when a user requests a field which we do not have data for. The common logic in 402 is that we throw a TypeError in initialized date-time format independent of whether the field is needed. And the PR does not follow that logic, so we agree that we’d just update the PR to be consistent.

WH: Is the last change editorial or is it user-visible?

ZB: If we merge it without fixing it, it would be user-visible, but all browsers implement it with the spirit and not the letter, so we have to just update the letter.

WH: Thank you.

RPR: Any objections to Stage 4?

[silence]

RPR: Congratulations, you have stage 4.

### Conclusion/resolution

- Stage 4!

## Fix Function.toString for builtins

Presenters: Gus Caplan (GCL), Jordan Harband: (JHD)

- [PR](https://github.com/tc39/ecma262/pull/1948)

GCL, JHD: (presents PR)

JHD: Note that this means the presence of items in the intrinsics table is normative. My interest in this PR is that it removes the coupling between the table and the toString output, and just says that toString of builtins always have to include the name. This seems to be what engines already do and I think is what users would expect.

GCL: This PR would make SM correct and JSC and V8 incorrect. They technically already are but it's just specified weirdly.

JHD: Although I want this change to land in some form, is there a reason to not include the `get` and `set`? Because that would seem to match user concerns.

GCL: I would like to include them but it seemed that there was previous consensus to not include them.

JHD: Was that from before the toString reform?

GCL: I’m not sure. Is MF here?

MF: I think you’re right, but I’d have to check the notes. Personally I’d prefer to not include them, I think users would expect something that could have been a portion of a valid source text there.

SYG: For non-builtins, for non-native functions, it does print `get set`? Or is it not supposed to print `get set`?

GCL: If you did a method definition?

SYG: Yeah like if I manually wrote an object definition that says `get foo`, I think SpiderMonkey also prints `get` in that case.

MF: I can answer what the specification says.

SYG: Please.

MF: The specification says that for a getter, the toString output is the source text matched by that getter. What we’re talking about here is just synthesizing Function.prototype.toString output for builtins. We have the function keyword always.

SYG: Don’t people think of getters as having `get`? Yes it’s true in the technical sense that ???, but since user code ???

MF: You said that a user might expect `get` to appear for built-in getters. My question for you was: instead of the `function` keyword or alongside the `function` keyword?

SYG: I was thinking "instead" but I guess that's not on the table.

MF: It may be possible. If we wanted to do that.

SYG: I guess ideally I would think it's most intuitive that it aligns with user getters and setters, but yes now that I’m reading #1941 more closely, the `function get`, that’s weird. That should not be there.

WH: I have the same concern as SYG. I would expect this to have the syntax of a getter except that inside the body it would have `[native code]` instead of user code.

GCL: I can’t comment on the web compatibility of this change, but I know that I have written code that assumes that the way it's done in SpiderMonkey is how it should look, so I'm not sure it's feasible.

WH: OK. It’s an interesting dilemma.

JHD: It seems like a builtin should - except for the native code part, which is going to make a syntax error, and has to - it seems like the code around that should roughly match what a user types in if they were implementing the builtin themselves. So I would expect a getter to match the source text - so "get name" because that's what a user would have typed. So it feels like it would be nice to me if we could make the spec do that, because that, to me, is the intuitive thing.

GCL: You could think of it as, you defined a function named size and then used it in a property descriptor.

JHD: Certainly. Yeah and in that case, it wouldn’t have the `get` keyword, it would just be the SpiderMonkey example, so I see the appeal there. But to me, the most common user pattern is not going to be Object.defineProperty, it's going to be typing it in a class or an object literal.

KM: How did the code assuming Firefox's behavior work in other browsers?

GCL: I assumed that all the outputs would begin with the keyword `function`.

KM: Would that work if you had user code with a getter? Because that wouldn’t have the `function` keyword.

GCL: I don't know. It was just an off-the-top-of-my-head example.

KM: Sounds like that code doesn’t work in JSC or V8, or that code wouldn’t work if you ever got a user getter.

GCL: I can't imagine it would have been the best. I can't comment on whether this would work, I can't collect feedback from browsers.

KM: there’s definitely a web compatibility risk, I agree. But it seems like that code might be problematic already, so it might be hard to have working code that does that.

GCL: I agree.

SYG: Relaying a point from a colleague: if we get rid of the get and set keywords now, the higher level question is - who are we trying to serve with "toString"? If it's round-tripping through an "eval" that's not possible anyway. If it's diagnostics, ??? If you get rid of `get` and `set`, I imagine it’s common for getters and setters to share the same name, so if you print it out and there's no `get` or `set` in the name, how do you know which is which? I think that’s an argument for whatever we do here should probably keep `get` or `set` in the name.

GCL: I’d be fine with consensus on removing `function` or even keeping `get` as it is right now, I just don’t know what the effects of that would be.

DRR: I don’t know if this is pre-empting, but basically knowing what we should have depends on knowing who the customer is, right? Is this user-facing? I don’t know that I would ever care to look at this and see that this is what’s happening. I don’t know if I would ever directly invoke the getter’s `toString`. To me this is more like an interface thing, so other code can interpret it if you really want that to happen.
Code can take a hard dependency on this in some way.

KM: The main place where I would see this coming up in a user-facing way is in a stack trace. There’s probably some web API that does this, probably pluginElement or something horrible. It seems like you would want to know if it's a getter or a setter. I guess you could look at the callsite, but it might not be totally obvious from looking at the trace itself.

DRR: I think that’s a fair point.

MF: I think there's a lot of webcompat issues. We don't have the data to make any decisions about representing native functions like user getter/setters. We did a lot to try to specify the native function grammar while the Function.prototype.toString proposal was in progress. There were a lot of calls to lock it down further, like with locking down whitespace. That couldn’t be done reasonably due to not having enough data. I think this is a fruitful discussion and we can try to improve this area of the spec, but I think we can also get what GCL is looking for today done without solving that issue.

GCL: You’re saying to move forward with this as it’s written, and deal with method definition syntax as a separate item?

MF: Yes. And possibly further specifying the spacing used as well. Those are ways we can improve it.

SYG: To clarify, what are you proposing we move forward with? We do not change anything about the name, just the intrinsic table thing?

GCL: We’re saying move forward with the PR as it’s currently written. So it removes the `get/set` to update it to what native `function` is supposed to say, and then a further PR could be to update that to use getter / setter syntax.

SYG: That's kind of weird, right?

KM: I feel like we're going to change it and then hope it's web compat? I would rather see what JSC prints than not have the get or set at all.

WH: I agree.

MF: This doesn’t affect stack traces.

GCL: Yeah, engines can do whatever they want with stack traces.

KM: I would rather have the name be the same as the name from the `toString` though, otherwise people might be confused.

GCL: The `name` property will still be "get size". The difference is what the toString output is. This basically decouples the `toString` output from the exact value of the `name` property.

SYG: It's still weird to say, let's merge this thing that explicitly is known to work in one browser and we're going to keep investigating if it's possible for other browsers to follow suit.
Not like we have already agreed that the other browsers are going to move towards either keeping or getting rid of the keyword, it seems like that’s what we should be going for.

GCL: If browsers are willing to say they're going to work with us to get the data needed to find if we can make these changes that's not unreasonable. From this point I'd like to figure out what we're going to do to fix the thing where the spec does not do the thing it's supposed to do. If that means merging this as-is, that’s fine, if that means gathering more data, that’s fine. But I don’t want to just say we’re not going to merge this and leave it at that.

SYG: I agree; concretely I see two problems: the first is that we have inadvertently made the well-known intrinsics table normative. Part of what this PR does is to fix that issue, but a side effect of the fix doesn't have consensus from the browsers in a compat point of view.
Is there a way to split out the part that makes the table no longer normative?

GCL: I am not sure. I mean the reason that this is something that the browsers have to worry about in the first place is because of this native function syntax. So JSC and V8 are already violating the syntax laid out here, regardless of the fact that the prose here tried to apply the value of the `name` property, which wasn’t correct. I don’t know how to make this change in a way that doesn’t have them still violating it, because the native `function` syntax isn’t that.

SYG: I guess one way would be to- so the point is that JSC and V8 currently do not follow that anyway? Or is there some wiggle room?

GCL: The problem is basically that the specification said to use the initial value of the `name` property, and that includes `get` and `set`, correct. But the native function syntax does not allow that. So the spec conflicted itself. But we had concretely agreed on the native function syntax, so it was more a misunderstanding I think.

SYG: Ok, then pending compat data, I’d be most comfortable with saying somehow that the string `get` or `set` may appear.

JHD: To clarify, you’re saying you’d like to leave both of those variants valid to get this PR merged, and then lock it down later?

SYG: Right. I don't want to lock it down in this way, which says that the "get" or "set" must not appear, especially given that the temperature of the room is that we don't have consensus to remove those.

KM: I agree with SYG. I think we should leave both valid until we can figure out something more locked down. I think it’s kind of a user regression to not have the `get` or `set`.

GCL: So, consensus on making this change but allowing the "get"/"set" to optionally appear after "function"?

MF: This change would be still inconsistent there though. Because we have the actual slot for initial name right now, that’s fully specified, and I believe what’s being asked is for it to be un-specified.

GCL: Right, I’d have to make changes to this PR again. I’m just saying from the observable perspective, we’d want this to be the initial name that optionally includes `get` or `set`.

SYG: Yes, I am asking for a relaxation of something that is fully specified but is in this particular case contradictory in some way.

MF: Yes the current spec is contradictory. The proposed spec is not contradictory but too strict, and so what we’re asking for is to relax it some amount to allow for freedom of implementation.

SYG: Right, and I think that would be a good starting point for us to then work together to gather compat data.

GCL: So do we have an agreement?

KG: I don’t want to say that there’s consensus on any particular thing without having a PR in front of us. It sounds like people are in general in favor of a change that relaxes the requirements on the `name` slot, and then locks it down further, but I don’t think we can say we have consensus on that without having it in front of us.

GCL: ???

JHD: Web reality…

SYG: Since KG wants to see these changes in front of him, would you be okay with us editing this and bringing it back with a short timebox on thursday?

RPR: Are you happy with that?

GCL: Yeah.

## WeakRefs for Stage 4 / CleanupSome for Stage 2/3

Presenters: Daniel Ehrenberg (DE), Yulia Startsev (YSV)

- [WeakRefs proposal](https://github.com/tc39/proposal-weakrefs/)
- [CleanupSome proposal](https://github.com/codehag/proposal-cleanup-some)
- [PR](https://github.com/tc39/ecma262/pull/2089)
- [slides](https://docs.google.com/presentation/d/1NYhEELzOnhJGU7inKz0r0TrEa0h33krr1nEb3X_ze5w)

DE/YSV: (presents slides)

KM: WeakRefs landed in JSC! There are just some bugs to fix.

DE/YSV: (presents slides)

MM: You’ve changed my mind. I originally was against splitting up cleanupSome because of the wasm use case. I like your rationale for why to postpone it. I'm wondering, with it postponed, we'll gain experience as to how well we can do without it. It may be one of those you-ain't-gonna-need-it (YAGNI) things, where we find that we don't need it in the end. So I would recommend bumping cleanupSome back to Stage 2, and even consider never advancing it if we consider that life is ok without it. I support advancing WeakRefs to Stage 4. Congratulations on changing my mind.

DE: Thank you MM. I want to point out that when we’re talking about the Wasm use case, the use case for cleanupSome is really particular to particular instances the Wasm long-jobs use case--not just where you are doing calculations and communication with SharedArrayBuffer, but also where you are synchronously calling out to JavaScript. So it is quite specific. It might be more valuable to invest in wasm long-jobs to yield to the event loop. I'm not a Wasm expert but I've heard some exciting ideas in this space.

MM: That would be great, I did not hear about new ideas of Wasm yielding to the event loop

DE: I don't know where the right pointer is.

YSV: I have a couple of details as well that I can find for you.

WH: I don’t understand MM’s point, under what scenario don’t we need cleanupSome when wasm never yields?

MM: Wasm would still yield to the event loop when the wasm stack goes empty. The concern is that you take old C code and port it to wasm and it runs as a big sequential program, because that's how C programs work. Even though that case remains just as bad, given that we're going to spend some time with wasm without cleanupSome, we'll see what people do to try to restructure their wasm computations to yield to the event loop more often. And it sounds like there are some ideas to help wasm do that that I’m not aware of that might be stronger. It's often the case that when you live with a constraint you find pleasant ways to adapt to the constraint. It's one of those things where I'd like to see what people come up with and how people adapt to the pain the long-running wasm computations still cause.

MM: WH, does that answer your question?

WH: [pause] That answers the question. I don’t like the answer because I don’t like causing people “pain”, but it answers the question.

YSV: I might also be able to help here. We've found that the way people have been writing wasm has been different from what I expected, which has also shifted our thinking about cleanupSome.
For example when they’re taking existing C++ libraries for use in wasm, they’re not splitting it up in a way that works for the web, and eventually it gets abandoned. So that was an interesting way to see how people are using wasm currently, and it’d be nice to get more time to observe those behaviors before committing to a design.

LEO: If we move cleanupSome to stage 2, I just want tc39 to signal what to do with test262.
We can keep them as they are today, not touched, but we can also work on handling removing the tests and re-adding them when it’s convenient.

MM: Having the tests continue to be publicly available but still on a branch or something - what is test262 policy with regards to tests being on the main branch versus the stage of the thing being tested?

LEO: Policy is that test262 is the place for tests for things which reach stage 3 and also PRs which are not merged but still have consensus.
We don’t have much of a policy yet, we’re building it organically, for when things move back from stage 3 to stage 2 or 1. So we need to make an understanding.

DE: I want to make a suggestion that test262 should use a feature flag.
There could be a list maintained of which features are not stage 3, so it would be easy for engines to mask out all features that are not yet stage 3, so then we could also merge tests in before stage 3.

AKI: You took the words right out of KM’s mouth! He had that reply on the queue.

LEO: if I’m not wrong as far as I know all of the browser engines have future or future flags at least for folders

SYG: I think DE is saying associating stages with feature flags, which we do not have today. I support that idea.

KM: Is that useful?

[inaudible]

KM: You’re just not going to run tests that you haven’t implemented. I’d want to make sure my implementation doesn’t spuriously break.

YSV: We haven’t yet decided if this will be stage 3 or stage 2. Test262 and the feature flag proposal are important but maybe it should be discussed separately from the proposal.

DE: I think we could follow up on this on the test262 issue tracker. I like MM's suggestion of Stage 2 for cleanup some and Stage 4 for WeakRefs + FinalizationRegistry without cleanupSome.

SYG: It sounds like you're asking for stage 2 for cleanupSome. Does that retain the normative optionality?

YSV: I would say it is unchanged from what we agreed to with WeakRefs so far, so cleanupSome would remain normative optional.

DE: The best thing if we go to stage 2 is to file issues about this sort of thing on the cleanupSome repo.

AKI: Does that answer the question enough to talk about consensus and move on?

DE: SYG, any thoughts on that answer?

SYG: I am all for stage 4 for WeakRefs without cleanupSome and stage 2 for cleanupSome

AKI: Consensus?

[silence]

AKI: I’m going to call that yes.

### Conclusion/Resolution

- Stage 2 for cleanupSome
- Stage 4 for WeakRefs + FinalizationRegistry

## Logical Assignment for Stage 4

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-logical-assignment)
- [slides](https://docs.google.com/presentation/d/1rq448C-mzxWzBs6RTInczGTjs4xv5gQenDJY1fGogX0)
- [PR](https://github.com/tc39/ecma262/pull/2030)

JRL: (presents slides)

JRL: Stage 4?

WH: Does named evaluation apply to all the operators or only some of them?

JRL: All the operators. So `&&=`, `||=`, and `??=` will all do proper named evaluation.

WH: What about the existing ones like `+=`? I’m not sure it makes sense for them though.

JRL: None of those do named evaluation because they coerce their argument to numbers.

WH: Thank you, that answers the question.

AKI: Consensus for stage 4?

[silence]

AKI: Congratulations! Another one! Yay!

### Conclusion/Resolution

- Stage 4!

## Decorators status update

Presenter: Kristen Hewell Garrett (KHG)

- [proposal](https://github.com/tc39/proposal-decorators/)
- [slides](https://slides.com/pzuraq/decorators-3cb407)

KHG: (presents slides)

WH: What does “downlevel” mean in this presentation? You used it several times and I couldn’t figure out what it was referring to.

KHG: It’s a term we coined within the decorator group. Every single decorator usage would have to be compiled to the polyfilled version, even if it potentially was using a native decorator, in other words "downlevelled."

WH: I'm still unclear as to what “downlevel” means here.

KHG: Basically if you were in a case where you had a mix of native and non-native decorators they had to apply, they would have to transpile all of the decorators - because there is presumably no easy way to un-transpile a decorator which has already been transpiled.

WH: Why can't the transpiler transpile only some of the decorators?

KHG: Because the syntax itself, when used, would not necessarily be compatible with the polyfill or transpiled version.

JHD: WH the first thing is that in your deps graph, you will have non dependency code using transpiled code. Before the feature is available to you on your platforms, you will be using Babel or something to transpile the decorators in native syntax.

WH: By “native” you mean decorator syntax or existing ECMAScript syntax?

JHD: At the point where the platform is able to change from transpiling the decorators to actually shipping the decorator syntax, the dependencies will contain a lot of decorators that are still transpiled. My constraint is that those need to interoperate. Separately, one potential path is to use those transpilation tools to convert third party tools to uplevel it.

WH: Another point on the first slide that I didn't quite understand. You talked about “byte size”. Did you mean byte size of objects?

KHG: It’s just the byte size of decorated values in general that are using decorator syntax

WH: So, you're concerned that if you decorate an object, then the object will require more bytes to store in memory?

KHG: I’m sorry those are the bytes for the output syntax actually

WH: You mean outputting the object via, for example, JSON?

KHG: One solution proposed is that decorators would be a reserved syntax that isn't actually implemented in JavaScript, and have build tools compile decorators into JavaScript, and let the ecosystem figure out what it should mean, and ship that over the wire. If that were the solution we're gonna go with and we’re always going to solve the byte size problem. It would result in much larger class definitions, because in a lot of cases, you're decorating a field, which turns a field into a getter and setter, and that getter and setter would have to be transferred over the wire. Even minimized, that will be 10 times the size. (gist: https://gist.github.com/pzuraq/6c2ff5594bf16f9693a7d9131855ee2d)

WH: Ah, I think you mean the byte size of the transpiled code, is that correct?

KHG: Yes. And one other proposal is that it is always transpiled, that we never standardize on a decorator syntax.

WH: From the slides and presentation I got the completely wrong idea of what you meant by “byte size”, so it was hard for me to follow the presentation. Thank you for clearing it up.

DE: A lot of people are talking about tooling solutions, as KHG mentioned in the byte size discussion, even in tooling a lot of these constraints still exist. I want to raise another one. Constraint #2 basically this gets at decorators being transpilable in a single-file mode. If you want to transpile decorators differently based on whether they add metadata, make fields into accessors, etc, you either need some cross-file communication, or you need to add runtime overhead conditionally. So, the constraints are still in conflict even in a pure tools mode. Personally, I'm optimistic that we can find some of these constraints that can be relaxed to find a solution. We’ll have to relax some of the constraints on whether we put this in tooling or in the language. My hope is that this presentation will illustrate the contradictions and get people thinking about which concerns do we really care about, which concerns can we relax. Then we can find more solutions.

KHG: DE summed it up very well and we’d like to continue in that direction and the group will continue to work that way

## NumericLiteralSeparator for Stage 4

Presenter: Rick Waldron (RW)

- [proposal](https://github.com/tc39/proposal-numeric-separator)
- [slides](https://docs.google.com/presentation/d/1rLT5m3d0yk2KMlka4KZKf2uz9oITdpfr6evAV_jaKcc)
- [PR](https://github.com/tc39/ecma262/pull/2043)

RW: (presents slides)

RW: Stage 4?

WH: You mentioned in the presentation something about underscores in unicode escape sequences in a failing test. Can you explain?

RW: That’s not my problem, that’s V8 failing a test.

WH: My understanding is that we are not allowing underscores in unicode escape sequences.

RW: That's correct.

[Background noises from somewhere drowning out the meeting. Notetakers can’t hear what’s being said and are asking for clarification.]

WH: I think I can summarize the situation. We’re not allowing underscores in unicode escape sequences. V8 is allowing them and therefore failing the test. V8 should fix this. Is that correct?

RW: Presumably that’s why it’s failing, correct. Everyone else is throwing the correct SyntaxError.

WH: Yes. Sounds good!

RW: Cool, thanks man. I can hear the enthusiasm in your voice.

WH: Yay!

RW: Mark it down, WH just said “yay”, I want that in the notes.

RW: So do I have stage 4?

[silence]

RPR: Congratulations, you have stage 4.

### Conclusion / Resolution

- Stage 4!

## Slice notation for Stage 2

Presenter: Sathya Gunasekaran (SGN)

- [proposal](https://github.com/tc39/proposal-slice-notation)
- [slides](https://docs.google.com/presentation/d/1EBpiGuYn2ChDvcd67fpz6gGY14kO8VCuAKOhFMxOqEQ)
- [spec](http://github.com/tc39/proposal-slice-notation)

SGN: (presents slides)

SGN: asking for stage 2, do we want it in the language or not especially the : symbol for that notation

JHD: I did file an issue a week or so ago. I think the strings, you have an example it’s like .slice so you would expect that to work on strings and it would be bizarre for it to not work on string. It is not going to block for stage 2 but it would make it less useful and would make me block in the future.

SGN: I don't have a strong opinion on this; I'm happy to discuss this more. We can discuss it in stage 2 and come to an agreement.

JHD: To be clear, I’m not blocking stage 2, but I want to reserve the right to block for stage 3 on that later, so it’s something we should get to quickly.

BFS: I just want to state a little counterpoint. I’m very concerned about slice notation for strings. It seems if we do slice notation, slice doesn’t match iterator, in particular you’re iterating over the code points rather than the characters really. I agree it can be done at stage 3 but I don’t want to commit to be done for string slices.

SGN: Again we haven’t discussed this at all, and there’s a lot of time to discuss it. I think we should discuss it, it’s an important point, I will update the issue to reflect your thoughts on this.

KM: My topic is a continuation - in no way am I blocking stage 2, but I’m wondering if it’s worth working with other HTML standards organizations for getting slicing on other DOM collections. Just something to look into.

SGN: definitely a good idea and follow on with an issue to track that down

GCL: About the `Number.range` example, I believe you could apply that to all iterators, or many- I think all iterators using methods that already exist on iterators like `drop` and `take`. So it would be interesting to think about it in that context rather than just number ranges.

SGN: ok, so are you imagining symbol.slice to be in the iterator prototype?

GCL: Maybe, I'm just throwing the idea out there.

SGN: For sure. I think we should definitely explore expanding the scope of this to be on different kinds of objects, and also the HTML collection stuff that KM mentioned. Very good points, thank you.

YSV: it’s not clear what problem we’re solving that isn’t solved by slice. I understand the development ergonomics point, but I'm not sure that it's enough. For example we’ll be introducing a new syntax that doesn’t exist in the language before.
And this will introduce a learning burden, and unless people are working with this frequently, they may not learn exactly what this notation means, so for example you have one example that’s `[number:]`, this may have a very similar problem as slice with one argument. So I’d like to see a stronger motivation, because at the moment I’m not convinced that this should go into the language based on its current motivation.

SGN: For me the main motivation is developer ergonomics. For someone that's used to it in other languages this is a known feature (?). If there’s a way for us to figure this out, I’d be happy to do that, I would like to do that, I want to understand is this paying(?) for the cost. I agree with you, that’s why I brought it up as a big issue in the proposal. I share this concern as an implementer, I don’t want to implement random crap no one will use. I definitely hear your concern and is my concern as well but I can’t find a quantitative way to define if this is useful. Lots of people are saying this is cool I would use this. But again, that’s not enough maybe? I don’t know. Maybe it is. But I also don’t know why it’s not good enough, we’ve had pretty simple proposals that add simple sigils that are shorthand for `&&` or `||`, or things like that. Why is this different?

YSV: I would say that the difference here is - with logical assignment, you’re referring to logical assignment, right? - logical assignment made a lot of sense because it was a common operation that was quite long to express, and it made that concise. I'm not convinced that this improves legibility beyond for slicing: we already have a well-known method named slice. Visually speaking, there’s noise that you could confuse the two of them if you’re reading quickly. But I wonder if those drawbacks aren’t ??? new syntax that is doing the same thing. To answer your question about what level of vetting we would need to see, I would be interested if this use case can be maybe if this takes us beyond slice or has overwhelming support for this.

SGN: The overwhelming support is- my intuition for that was coming from looking at other programming languages, and pretty much every other mainstream programming language has support for slicing.

YSV: Arguably we do have support for slicing, just in a different form.

SGN: No, I mean syntax. Most of the languages do have syntax for slicing. Maybe different syntax, but they have realized that this is something that programmers do often and that they need syntax for it.
That’s sort of my thinking approaching this- I think this was some feedback I got last time as well, which was is this something that’s actually useful, and all I could do in response was to look at the other programming languages that JavaScript developers use, and ask if they have support for slice syntax, and the majority of them do.

LEO: Should we have an incubator call about this very topic? I definitely have some of my own point of view where we have positive developer feedback and experience from other languages. And also how I see this with regard to other syntax features that we’ve introduced in other years. So I think this is a much more deterministic ???, and there is much more we can discuss in an incubator call.

SGN: I think that’s a good point.

KM: I have a personal preference towards not using a slice property name but probably because I have personal disliking against ???

WH: I have similar views to YSV, I feel like this is adding a bit of complexity into the language. In particular it’s adding syntax for something that can relatively easily be done without needing new syntax. A couple years ago we had some pushback to these little syntax proposals. It’s completely different from logical assignment, which simplified the language by making all of `+=`, `|=`, `||=`, etc. work, which improved orthogonality of the language.
On the other hand, with x[a:b] you have to remember which things allow the single argument in brackets x[a] and which things allow two arguments in brackets x[a:b].
And those are likely to be different sets. And then I see that we’re discussing that slicing a string should index by unicode characters, so if you apply s[a:b] to a string, you get indices by unicode characters, but if you apply s[a] to a string, you’d get indices by code points, which would be terribly confusing.

LEO: (queue reply: This improves Developer Experience)

DRR: To further WH’s point, the fact that slice already exists as a method and has the semantics I intend means that this is a nice-to-have for me. With this syntax, when I show it to people, they’re like “oh cool, I can get the last element of an array”, but then it was weird, because everyone would realize that, oh wait, I still have to re-index with 0 to get the last element. Maybe this leads into SYG’s topic, but the fact that you can’t do a negative index on these things makes it a little confusing. I know that there is a related proposal that we'll discuss about later, but I think that that is something to consider.

SGN: Can you repeat more concisely the problem?

DRR: I think the fact that you don’t have negated indices is a slice concern

SGN: But we do, though, because it behaves exactly like slice.

DRR: You have negated element index for slice, but not for element access. I’ll yield to SYG.

SYG: I don’t have a strong opinion on slice notation but I want to raise a concern. Regular indexing with brackets a[-1], for example, means a thing that we can't change. It doesn't mean, look up the relative index, which is why there's the .item() proposal. The issue with slice notation natively supporting negative indexing with a colon is that it no longer composes well with single-argument brackets, and we can never make it compose well. That may be related to YSV's learnability concern. If you learn slice notation, you might think that you can remove the : and it works, but it doesn't.

SGN: I kinda see that but again this is similar to trying to spread in an array or key lookup and I’m unsure where to draw the line. I guess one concern is that we’ve always done `toString` to whatever we’re looking up in a keyed lookup, and we’re going to change that now.

BT: We have to move on. Can you summarize your takeaways?

SGN: Heard YSV and WH that they’re not convinced, and positive feedback from others so I have hope so I will follow up with YSV and WH for more discussion.

WH: I and YSV were not the only people who expressed concerns. There were others as well.

SGN: I will talk with the others as well. If anyone else has strong opinions, please contact me.

### Conclusion / Resolution

- Remains at Stage 1
- SGN to follow up with people who have concerns

## Temporal stage 2 update

Presenter: Philip Chimento (PFC)

- [proposal](https://tc39.es/proposal-temporal/)
- [slides](https://pipobscure.dev/slides/temporal-2020-07/)

PFC: (presents slides)

YSV: Thanks, one thing I’d like to suggest is to translate the survey so that we get more feedback on other calendars. We do have a few delegates now from China, and they may have some hints about what to do there. It may also make sense to translate it into Japanese, as they use a different year system, to get more diversity in the kinds of responses you have.

PFC: That's a really great idea, thanks.

## Import Conditions for Stage 3

Presenters: Daniel Ehrenberg (DE), Sven Sauleau (SSA), Dan Clark (DDC), Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-import-conditions)
- [slides](https://docs.google.com/presentation/d/18THsm_ZAog70m0ZlEokRCfyrarMiA1yr6YDAvFXjVNU)
- [spec](https://tc39.es/proposal-import-conditions)

DE, SSA, DDC, SYG: (presents slides)

JHD: I wanted to put a +1 for assert, I originally said if because it made more sense just given the keywords and making a conditional.
There has been some confusion expressed in the repo, where folks thought that "if" means that the import wouldn't happen if the conditions aren't met.
Which is essentially the semantics that `assert` already has. So I’d prefer to see that change happen.

DE: I want to go back and say that we have two PRs open right now, that the champions are totally open to land. One changes the `if` keyword to `assert`, the other makes it so that when you have an object, when you have `type`, you can have single or double quotes around the type, so that it can be just similar to object literals. We’re interested in the committee’s feedback on these, and we are happy to conclude Stage 3 being conditional on landing one or both of those.

JHD: Thank you.

CM: Wanted to make sure I understood correctly that you’re talking about a mutable object consisting of some JSON data. That seems like an obvious pathway to interference between modules. It seems dangerous. I don’t like that. I think I understand your motivation, but I'm not sure that it overcomes the potential bug-proneness sitting there.

DE: I could see that. What do others on the committee think?

MM: I very much have the same concern as CM. I like the phrase is, “If it’s not fresh or frozen, it’s rotten.” If it was fresh so that every import site would get its own, then it wouldn’t cause interference. But there are worse problems with that so I’m not suggesting that. If you just make it transitively frozen, then this avoids the interference. It's not being read by JSON.parse, where each callsite of JSON.parse gets a fresh object that you can freeze. I don’t see any reason not to transitively freeze it and if it was something else I wouldn’t see why not to.

JHD: JSON modules in node for CJS always had this property, bringing in a mutable object, just like the default for every module. I think the vast majority of people do not bother to freeze them, and they haven’t run into these issues. That’s just the way JS works, things are mutable by default. The other option here is to freeze the object yourself if that’s a concern you have.

MM: You'd have to Object.freeze it before anybody else has the opportunity to get that object.

JHD: Your `Object.freeze` call would happen after all the import calls have happened, but since your `Object.freeze` call would run first, before any other user code, it would be indistinguishable to later code that it was ever mutable in the first place.

MM: How do you get your Object.freeze call to run first?

JHD: The same way you do any initial lockdown of the environment.

CM: Here it is data that has been interpreted and is given back as an object

JHD: For a known JSON module specifier, it’s trivial, and I’m happy to talk about it offline. But like you said CM, if it’s just a regular object literal, it would just be mutable unless you froze it.

CM: If I did that, then I could freeze it before sharing with someone. Here, I don't get the opportunity to freeze it before it gets shared. Modules can defend themselves, data can’t.

DE: I want to raise one possibility, which is to decouple JSON modules from the import conditions proposal. Initially, we were just proposing import conditions abstractly, and we added JSON modules to standardize as much behavior across environments as possible, to address concerns about divergence. We could bring import conditions to Stage 3 and leave JSON modules behind, maybe at Stage 2, while we continue to work on it. I think a stage 2 proposal would serve the same purpose of making it clear to the ecosystem that TC39 intends to develop JSON modules, avoiding divergent behavior. That would also unblock other module types like CSS and HTML modules from being developed.

RRD: I guess I have a small addition to this, about the syntax you put in the slides. By decoupling the JSON loading from syntax, ??? we could basically try to get into a situation where you could use import from something JSON, assert type being JSON, with importing it as Record & Tuple. All of that in a single instruction, so we can basically do what is being suggested so far. It's just something I wanted to put on the table, I don't know if it's necessary.

BFS: Currently, by default, JS modules and to some extent wasm modules don’t have this frozen-like behavior. I would agree with most of the desires being stated about JSON modules, but I think that freezing and doing other things like Records and Tuples it's a different issue than trying to be creative about how we handle JSON. JSON has very historic meanings, people expect it to act very specific ways, and it would be odd to me for us to not have this kind of special level of care for other kinds of modules we’re also talking about, potential things like HTML modules, which may or may not be considered data, and I just don’t think that we want to apply that on a per-data basis. ??? But I agree the issues are real.

SYG: want to strongly agree with DE here on the decoupling, json modules are an addon but not an impetus around modules.
And given that there are legitimate concerns around JSON modules, I strongly agree that we should decouple them instead of hold up the whole thing.

MM: I was preparing to make a passionate plea that JSON should return records and tuples instead of objects, but if we can postpone the discussion about JSON modules that's my preference. Let’s just leave JSON behind for this proposal.

JHD: Around the caching semantics stuff and the proposed HTML compromise, my concern has been primarily about making sure that various parts of the ecosystem correctly interpret our intent here even if it’s difficult to normatively specify it. I’ve had a lot of discussions with SYG, DDC, MBS, and some other folks, and the solution we seem to have come up with is that HTML doesn't have to potentially obey the restriction, but it still has to conceptually be the same module. So I want to thank everyone involved in those discussions because it seems like we’ve come up with a workable compromise that appropriately informs the ecosystem of the intended limits of this feature.

BFS: I just want to state that the wording of compromise no longer has guarantees about when you remove the condition. When we were talking about checks at the last plenary, we were also talking about a personal opinion of mine which is that we don’t really desire this in node. Effectively, the last plenary we talked about this, if you had `with type JSON` at the time, removing it essentially was a no-op if you did negotiation of the content type and checks without the import condition. This actually changed with this compromise, so that removing a check is effectful-

DE: This compromise permits hosts to omit support of a ???
It would follow this condition if hosts completely omit conditions from the cache key. Hosts _may_ take it as part of the cache key.

BFS: ??? have them take it as part of the cache key-

DE: this would have no particular effect on node because ??? and this is discussed in the HTML thread that just because it’s permitted doesn’t mean that an environment couldn’t do something like normalize the condition into some other state before forming the key or making conditions from the key. I think this would still permit node to have it's behavior, while aligning in practice with HTML.

BFS: I would agree but that seems a bit evasive

DE: How so?

BFS: It seems to be moving the statement that HTML simply won’t diverge, not that they can’t diverge. Which we don’t have guarantees about. I think we should just add a "should" clause to this. That they “should” do, effectively, what you said they won’t do. If we can’t enforce it that’s one thing and that is fine to me but we should make sure this is not the case

DE: What do you think of this note at the bottom, which says “???”. Is this distinction [crosstalk]

BFS: ??? I think the phrasing on the bottom is confusing, but as long as it's revised it should be ok.

DE: Okay, we can have a follow up to-

BFS: It is not a blocker but I think we need to have a call

SYG: To add to the normalization, the lack of a condition: maybe we would like to normalize something. This relaxation does not mean that the lack of a condition has to be recorded as a lack of a condition, the host can normalize it.

BFS: That is concerning to hear actually, but we can talk about that later, none of this is blocking, it’s just about phrasing.

SYG: Sounds good.

DE: It seems like the exact wording of a recommendation in a note vs a "should" normative text is something we could iterate on during stage 3.

BFS: I’d agree.

WH: A couple things. I don’t take a position on the desirability of whether or not this should or should not go into the language, but as was mentioned earlier in the presentation, it bothers me that you don’t have reviewers and are trying to go to stage 3 without reviews. Just in a few minutes during the discussion I was able to find bugs like that this proposal breaks existing code.

DE: Can you elaborate on that bug?

WH: For example:
`import "foo"
if (x) …`

DE: I don’t think it would because the `if` keyword has to be followed by a `{`.

WH: Do you understand when semicolon insertion inserts a semicolon? If you have `import "blablabla"`, line break, `if (`...

DE: Right, right! Would you be satisfied by the switch to `assert` because it would solve that by requiring no line break before the `assert`?

WH: Yes, it can be fixed with a [no LineTerminator here], but it bothers me that this proposal didn't have reviews.

AKI: We have SYG, who has reviewed this?

SYG: I guess I missed that bug in the syntax. But from the semantics side of HTML, I have reviewed it, and it’s sound.

WH: Okay.

SYG: Covers my point as well.

AKI: From an educational point of view, I like "assert" a lot.

DE: I’d like to propose the following resolution: we don’t have reviews yet as well as having a bunch of changes as well. There seems to be a lot of interest in splitting off JSON modules into a separate proposal so that we can think more about this mutability issue, and I say it would make sense for that to be a stage 2 proposal. And finally about the quotes around the properties, does anyone in the committee have opinions about this? Because we also have to decide about whether to land that PR. I want to propose that we land that PR and allow quotes, but continue to ban numeric literals in this context. And I’m wondering if people have concerns with stage 3 with those changes queued?

JHD: If we do split it, would they be re-merged before we would try to make the import conditions to stage 4? My hope would be that both advance together to signal to everyone in the ecosystem that these things go together, and to ensure that no hosts ship a key that would conflict with JSON modules in the meantime - my hope would be that they advance somewhat together.

DE: For the latter concern, I think that maintaining a stage 2 JSON module proposal would prevent this problem: it would be weird for hosts to do that while this proposal is ongoing. I don’t want to take a position on whether JSON modules or HTML modules or CSS modules are more important, I think they’re all important and I want to see them all happen. I disagree both with JHD’s and SYG’s statements about one or the other being the "real" goal. I'm not yet convinced that we need to tie JSON modules together with import conditions for Stage 4, but I agree that JSON modules should be supported the same way across environments, and to support that, that `type: json` is something that TC39 intends to work on. Maybe we could lay that out clearly in the import conditions README?

JHD: that seems fine, I was just asking to figure out a course of action

BFS: I feel quite strongly that you should allow quotes, in particular because for the dynamic import form you'll accept runtime objects.

DE: Yes.

BFS: And so the ability to provide properties that are only picked up in one form seems very problematic. I don’t feel the same way about symbols. This came up with module export names with people using unicode and non-identifier names. And so I feel very strongly you should allow strings in order to allow those specific values to exist as the key.

DE: That makes sense to me. Thanks for your feedback.

DE: Do we have stage 3 reviewers, we need at least two.

BFS: I'll do it.

WH: I’ll review the syntax aspect. Just ping me when things settle down.

DE: That’s two. Should we record SYG as well?

SYG: I’ll be happy to review but since I’m working on part of the proposal I don’t know if that counts.

DE: Let me recap what the potential conclusions are. One is that we switch `if` to `assert`. One is that we permit the quotes around the property keys, either single or double quotes, but not numeric or computed properties. One is that we decouple JSON modules, and will make a new Stage 2 proposal so that we can iterate on the immutability questions. And finally, that we merge this relaxation of the constraint on host caching, taking care to reword the language here, to emphasize that hosts should return "morally" the same module regardless of the import conditions. Does anybody have any concerns with this course of action, concerns that you would have for stage 3 given that?

[silence]

DE: Okay, thank you very much.

### Conclusion / Resolution

Land patches for s/if/assert/ and permitting quotes around condition keys Split JSON modules into a separate Stage 2 proposal Land weakening of the host constraint, iterating on the wording in cooperation with SYG and BFS SYG, BFS, and WH to review before Stage 3 Proposal remains at Stage 2

## Intl.Segmenter for Stage 3

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/proposal-intl-segmenter)
- [slides](https://docs.google.com/presentation/d/1LOOt4WPvQdOK3banHkz1V8sdl8Z-7Z9jXBRRS9Ek8-M)

RGN: (presents slides)

DE: You referred to the string getter as superpower, and I wanted to express reservations about that characterization. There was that previous exotic internal slot hazard discussion - we discussed this more in the SES strategy meeting. MM is here, so he can talk more, but what we arrived at is that internal slots with objects are not dangerous if accessed from `this`. https://github.com/tc39/proposal-intl-segmenter/issues/96#issuecomment-661008571

RGN: It would impose additional work for what have been referred to as “near membranes” in the SES call. But the change was primarily about ergonomics, avoiding the internal slot use wasn’t a motivating factor. I’m willing to back off on the characterization.

MM: I can clarify. I raised the near-membrane issue. Near-membranes are CP’s invention. He got on the call to clarify the constraints. The internal slots create extra work only if associated with undeniables (NB: objects accessible via syntax). Intl.Segmenter does not couple these to any undeniables. That said, my aesthetics is still to prefer to avoid them, but at this point that’s a mild aesthetics and not an objection.

DE: My aesthetic for me is to prefer internal slots, following the pattern established in ES6. I really like that this proposal improved a lot in ergonomics compared to how it was when I was championing it. So I’m really in support of stage 3 for this proposal.

SFC: With the segments objects being iterables rather than iterators, I agree with RGN, in favor of the current status. If the `Number.range` champions, or anyone else who has thoughts on iterators, it’d be good to hear thoughts on that. We've seen some of them on the issue tracker in https://github.com/tc39/proposal-intl-segmenter/issues/120, but right now the plan of action is to move forward with the Segments object. By approving stage 3, it means that as a committee we’re okay with moving this forward with the segments object. We can maybe change it later but if we don’t we’re still happy with it

AKI: Stage 3? Again?

[silence]

YSV: I’d like to explicitly say I support stage 3 and congratulations.

AKI: Congratulations!

### Conclusion/Resolution

- Stage 3!

## Iterator Helpers update

Presenter: Adam Vandolder (AVR)

- [proposal](https://github.com/tc39/proposal-iterator-helpers)
- [slides](https://docs.google.com/presentation/d/1YNLzi_ENRtxp5bjhXMUplQ0VIQBUFLyucbNFt_oaNgQ)

AVR: (presents slides)

AKI: Do we have any volunteers for stage 3 review?

RGN: I’m willing to review.

LEO: Are tests ready?

AVR: We have a set of tests we’ve written for the firefox implementation. They’re currently being cleaned up, and I’ll hopefully be able to open up a PR to get them merged into test262 especially when it goes to stage 3.

AKI: Any other stage 3 reviewers?

MPC: I’ll go for it.

JHD: I’m happy to review it if needed, but I have to review it anyways for editor stuff. I’d rather give the opportunity to someone else if they’d like.

AKI: Do we need a third stage 3 reviewer?

MF: I think two should be sufficient.

### Conclusion

- RGN and MPC are reviewers

## .item() for Stage 2

Presenters: Shu-yu Guo (SYG), Tab Atkins (TAB)

- [proposal](https://github.com/tabatkins/proposal-item-method)
- [slides](https://docs.google.com/presentation/d/1N-oXRRKDA7patBA4HIYkzN67j1pbyOxuDZoYRvPFmuA)

SYG: (presents slides)

SYG: Stage 2?

TAB: First, thanks so much for presenting this for me, for doing the useful committee work for me. One concern I had when reviewing the spec is that the clamping behavior for negative values prevents you from trying to access a non-existing index. And that does exactly match how `slice` resolves its negative indexes, but `slice` won’t actually give you the first element unless you have an interval between the two values. If you use `-1000, -1000` with slice, you’ll just get an empty array. So it seems to me we should clamp to -1, ??? eagerly return ???.

SYG: That's a good point, I missed it while copying the clamping from slice. We can’t make it -1 and probably have an explicit path to return undefined.
Also I see in the chat that TAB said that I misspoke, and that ObservableArray is a Proxy around arrays.

TAB: the alternate possibility is to allow to dispatch whatever value you want.
We could just let negative numbers go negative, and it’ll try to fetch the string value `-1000`, just like fetching index `1000` on a length 10 array.

SYG: Are folks ok with iterating over these concerns during Stage 2?

BFS: Yes, we can iterate in stage 3.

RGN: I’d like to express my support for this proposal. This looks good to me, I like iterating on the edge cases in the staging process, and I’m willing to review.

SYG: thank you, for the second reviewer, can I call you out KM since you seemed excited?

KM: I can do it, that’s fine, sure. [crosstalk] the price you pay.

LEO: I will review it no matter what. [crosstalk] From the test262 perspective this is a pretty easy one and I’d like to ??? everything.

SYG: Thank you very much.

JHD: To clarify for me and the notes, what are the things that are still open for stage 3? TAB you talked about the clamping stuff

TAB: Basically just the clamping stuff.

MLS: These corner cases are for stage 2 right? So before stage 3?

JHD: Correct.

### Conclusion/Resolution

- Stage 2!
- RGN, KM, LEO to review for stage 3
