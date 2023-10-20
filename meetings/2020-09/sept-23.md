# September 23, 2020 Meeting Notes

-----

**In-person attendees:**

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Ross Kirsling        | RKG            | Sony               |
| Dave Poole           | DMP            | Apple              |
| Devin Rousso         | DRO            | Apple              |
| Keith Miller         | KM             | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Waldemar Horwat      | WH             | Google             |
| Bradford C. Smith    | BSH            | Google             |
| Chip Morningstar     | CM             | Agoric             |
| Mark Miller          | MM             | Agoric             |
| Kris Kowal           | KKL            | Agoric             |
| Justin Ridgewell     | JRL            | Google             |
| Shruti Kapoor        | SRK            | PayPal             |
| Jordan Harband       | JHD            | Invited Expert     |
| Frank Yung-Fong Tang | FYT            | Google             |
| Jack Works           | JWK            | Sujitech           |
| Mary Marchini        | MAR            | Netflix            |
| Istvan Sebestyen     | IS             | Ecma               |
| Jason Orendorff      | JTO            | Mozilla            |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| SongYang Pu          | SYP            | Alibaba            |
| Chengzhong Wu        | CZW            | Alibaba            |
| Robin Ricard         | RRD            | Bloomberg          |
| Robin Ricard         | RRD            | Bloomberg          |
| Yulia Startsev       | YSV            | Mozilla            |
| Ujjwal Sharma        | USA            | Igalia             |
| Philip Chimento      | PFC            | Igalia             |
| Pieter Ouwerkerk     | POK            | RunKit             |
| Shu-yu Guo           | SYG            | Google             |
| Hemanth HM           | HHM            | PayPal             |

## Status update for class fields, private methods, static class features

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-class-fields)
- [proposal](https://github.com/tc39/proposal-private-methods)
- [proposal](https://github.com/tc39/proposal-static-class-features/)
- [slides](https://docs.google.com/presentation/d/14ynZtqqlB9mCfK7iYdpwtO6hMV7dv9fVW0Z67PEwGzI/edit?usp=sharing)

USA: (presents slides)

WH: Can I get a clarification on the SpiderMonkey status?

JTO: It’s implemented, private fields and private methods are all implemented, but it is inefficient, we want to tune it before shipping it. Later this year.

WH: Thank you.

LZJ: We have some concerns about class fields. I think that the define property semantics conflict with the traditional construction of classes, it is not compatible with the traditional constructor phase, and this issue must be resolved before entering stage 4.

AKI: I’m not totally sure if I understand, this is just an update, this is not the time to address the finer details.

USA: Maybe we can address this in the chat, or in issues.

LZJ: Ok no problem.

## Ergonomic brand checks for private fields for stage 3

Presenter: Jordan Harband (JHD)

- [proposal](https://github.com/tc39/proposal-private-fields-in-in)
- [slides](XXX)

JHD: (presents slides)

BFS: I don’t think that those are the only two mental models we can have, they aren’t mutually exclusive. Having the ability to use a convenient operator like in is useful to me. Can we have the sugar of “in” and a collection API?

JHD: Good question, personally my answer to that question is nothing prevents it. If a follow up proposal wants to do that, that's great.

Should this proposal be blocked on exploring that. Sounds like you are implying it would be, I’m kind of neutral. That is a fair point, if having both isn’t automatic a non-starter, then it seems totally fine to pursue that second approach.

BFS: That’s it.

MM: I like almost all of this. I do think that the reified path is sufficiently separate that it shouldn’t be part of this proposal, the in syntax should advance, I am not interested in re-litigating the mental model which in a way ???
Sort of property like, consistent with the syntax we have in the proposal, and consistent with the 2xx, things that are ???
The reified form is really a much more specialized kind of use and very rare, for reflective purposes. That is the one where the mental model has to be the WeakMap model, and I think that it doesn’t need to be bundled into this proposal. The one disagreement I have with the WeakMap proposal is that I think the reified form should not simply be #x, the reason is another least surprise issue, for people in other class based languages, seeing #x they will expect it to be bound to this.#x. Reifying the name is weird, and doesn’t have precedence in other languages. I won’t mention concrete suggestions there but it is OK if that syntax has more ceremony to it, and is less easy to stumble on accidentally.

JHD: One thing I forgot to mention, the inconsistency between string symbol and private fields, are intentional. We explicitly designed this over years of debate and perhaps considering perhaps too many alternative options, and this is kind of what we agreed upon. To me, suggesting consistency between private fields and strings and ignoring the fact that ??? was intentional is not a constraint that I agree with. Thank you for your thoughts on reifications and I’m not planning to bring forth a proposal for reification.

WH: My position is almost identical to MM’s. I do not want to see reification using just `#x` because of what happens if you forget the `this.` — which a lot of people will do. If you meant to write `this.#x.get(…)`, and instead write `#x.get(…)`, it will work but do something you don’t want. I would suggest this kind of reification would be confusing. I support the proposal as is, without attaching or exploring reification.

JHX: It is important to figure out what the reification syntax is. Whether it is #x or in #x, I really hope that the syntax could match so it will not introduce confusion even further. I understand that it may be reification could be a different level, but I really worry about that if we add some different syntax in the future, it will cause much confusion. I really think we do not need to rush, we should first figure out what the reification will be. Then we can finally decide the syntax of this proposal.

JHD: One option is that there is no reification at all.

JHX: If there is no reification at all, we need to first decide that. If there is no reification at all, we could reconsider the whole problem, whether the syntax is OK. All I want to say, the future of reification for me is very undecided.

JHD: Can you help me understand why -- I agree the future of reification is uncertain, it is not worth our time to speculate. Why will it make a difference? Private fields already have a special syntactic form. There is no -- it is already entirely different from property access, the in syntax would be a special form. I would love to understand why reification syntax interactions such as adding another syntax in addition to the existing one will constrain the design space.

JHX: I think I still hope that there will be -- should be -- as simple as it can. For example I think DE proposed another possible syntax of reification. It seems if we have two different syntaxes it seems worse.

JHD: There are a few comments on the queue that may help with the discussion.

DE: I was hoping that by writing out this concrete alternative, we would be investigating the space. What we found there proves out what MM said before in Feb, if we reify this, it will be different from the syntax in JHD’s proposal. It would also have fewer capabilities than full reification of the name. It becomes an alternative way to get at the semantics. It is unintuitive and verbose, but in my mind it is the most coherent design [for reification]. In my mind these are complimentary. I still think we can leave it as an open question whether we want to add this feature, because we know that if we do add this feature, it won’t interact poorly. I think that it is important to consider, and we have thought it through.

WH: By “this feature”, do you mean `in` or reification?

DE: Reification.

DE: I am not suggesting that JHD's feature takes a dependency on adding the reification feature. I think the dependency is on us thinking through the design space and I think we have done that.

JRL: I think what JHX is saying, if we have `#x in foo`, that implies that `#x` can be keyed in computed property access like `foo[#x]`. My problem with that is that we already have `foo.#x` syntax, and we think of that as `WeakMap.p.get` in the map-like API. If we already have `foo.#x`, I don’t see how `#x in foo` matching a map-like API for `WeakMap.p.has` is that different. It is not a huge jump in logic for both of these syntaxes even if we were to reify into a WeakMap API.

JHD: I certainly agree with that.

AK?: How are we on clarity right now? Silence cool.

YK: I just want to say positive things. JHD did a good job of presenting the mental model, and that he did a good job stating why the syntax is. In general reification interacts with ??? Obviously that proposal is not going to proceed as-is.
We will want to see how reification interacts with other proposals anyway, and there is no reason for us to wait on this for that to shake out.

MM: The reified thing is a separate reflective level which is a much more specialized use, and we don’t know what the demand is. For the same rationale I don’t want to add syntax for other features. If there isn’t special syntax for it, how hard is it to do it yourselves? I pasted code in chat, that is a few lines of code that does this. If you have to do this all the time it will be a pain, but if you need to do it rarely you can roll it yourself. If we find that people end up doing this a lot even if it is 3 lines, then we have established a need.

```js
({
  has: obj => #x in obj,
  get: obj => obj.#x,
  set: (obj, v) => obj.#x = v
})
```

My suggestion is to not do any reified syntax until the needed is much greater than we currently expect.

SYG: Throwing in my support for the in syntax with the #x in the LHS. On JRL’s point, if #x is on the LHS it implies that #x is a general expression, but because #x isn’t one it isn’t a problem.

DE: One last point about reification, I agree with what others said about how this should only be added if there is motivation. It doesn’t add power, because you can do this with arrow functions. The decorators proposal (the new one) Is about having , when you decorate private fields the decorator is called with getter and setter functions to access with private fields. So this ended up falling out this??? Arrow functions that ???
This all points to this being a rather well understood space, one where we already see different correspondences, in particular it doesn’t end up shaking out that we reify the whole private name to accomplish this.

JHD: (continues to present slides, starting at “Open Questions”)

JHD: Any thoughts on that point? That a syntax error is sufficient?

MM: Syntax errors are sufficient, and the `a[#x]` syntax must produce a syntax error.

WH: Same position as MM.

JHD: Before I continue I want to give JHX a chance to respond again.

JHX: Is it damning that everyone in the room thinks that reification will not use the #x form?

MM: That is my position. That if we do introduce syntax for it, that it can’t be #x because they will expect it to be the value of the field.

JHD: I am personally ok with #x being a property key of some kind, but I think that it perfectly meshes with the syntax. In the event that the syntax does not happen, because there is no syntax confusion.

JRL: Are you asking us whether we are committing that #x will never be an expression form?

JHX: My question is if any reficiation syntax — I guess it should be an expression. In the previous meeting, JHD said that if there is reification it could use [] syntax to access the private field.

JHD: What I mean by that, is that we could — in the same way that object.#x is a special form. It is technically viable. Whether it would be acceptable to the rest of the committee is another question.

JHX: I understand, it also makes sense to me if it work like that, that means that we overload all 3 operator, . in and brackets, and at least it have some consistency. It seems like if we do not go this path, we will only have .#x, and #x in, we only overload two operators.

JHD: My response to that is, if they do something, they should have a relationship. If it is a syntax error, then it is clear there is no relationship.

YK: I think this is related to what MM said, back when we first did private fields, we did #x as a property shorthand, we decided not to do that, part of the status quo, is that we are still deciding that in the future. I am fine if we decide to do it. I think that we punted because WH pointed out that it can have two meanings in static position.

DE: Historically, how we made the decision around shorthand, we got past WH’s concern and were going to add it, but when people talked about the proposal, it sounded lexical. I was personally concerned that this would lead to mismatching expectations, if you had a function inside a class as a callback, it wouldn’t work that way. #x won’t make sense as the syntax for the reification -- in that reification each time you evaluate, you get a new function identity that closes over the private name, if you thought of #x as the name, if would refer to the whole private name, and would maybe come with extra powers like the ability to add a name to an object. There are reasons which MM articulated why such extra powers would be undesirable. For that reason separate from the shorthand concern, that we wouldn’t use #x for the name. The private fields and methods proposal is based around this concept of ordinary properties except a subset that throws exceptions when they are missing. The computed property case is always one of those, there is no way to differentiate the computed property from inside vs outside the class. The design of in is consistent with the subset.

DRW: If you use a bare # private name, there is a concern with autocomplete. If you use a property name that is declared, we can provide autocomplete so that you write `#foo`, it will autocomplete to `this.#foo`, the `in` check is relatively rare, so you would need to allow it to rewrite it back to `#foo` if it sees the `in`, or let the autocomplete happen and rewrite it manually. Just a tooling concern.

JHD: Hopefully I’ve explained the mental models and possible alternatives. Assuming I have achieved that, I would like to ask for Stage 3 for this proposal.

WH: I support for Stage 3.

MM: I support for Stage 3.

JHX: Can I have some time to read notes that will help me understand some opinions? Can I ask for a half hour?

JHD: Can we squeeze in a couple of minutes later?

AKI: Before or after lunch.

### Conclusion/Resolution

Decision deferred until JHX can review notes.

## Decorators: A new proposal iteration

Presenter: Kristen Hewell Garrett (KHG)

- [proposal](https://github.com/tc39/proposal-decorators/)
- [slides](https://slides.com/pzuraq/decorators-a-new-proposal-2020-09)

KHG: (presents slides)

WH: I'm confused by the explanation of init decorators.

KM: Also confused.

YK: Let’s continue and skip this for now, it is a minor part.

DE: (presents slides)

MM: How do the new decorators compare with guards? There are a lot of similarities.

DE: I would rather discuss that in terms of a coherent guards proposal. I want to defer it to a future meeting when we have a thing to discuss more. Guards are a thing from MM and WH from 2014, where you can use guards to test that something meets a certain property. I just want to revisit later.

MM: The motivating use case of guards is the ability to check the value on initialization or assignment. A guard would let you specify a function that possibly modified the assigned value or rejected it by throwing an exception. A guard is a type checker as well as a coercer. The idea of a function that just transforms the value that would be bound, seems in common with decorators. One important difference between guards and decorators is that for a decorated field you are intercepting the get and set actions via getters and setters, whereas guards only intercept writing — assignment to the field would go through the guard, but reading the field would be at full speed. Likewise with variables.

DE: Yeah, so I agree with that analysis. I want to say more but i don’t want to lose people. I will very be interested in discussing guards in the lunch.

YK: For MM, part of what is going on ,we have been looking -- I think a breakout and further discussion is important but I think you will be happy with what we are thinking. The other two things are I want to thank the committee in general what was sometimes frustrating but generally useful engagement. It took a while -- the other thing I want to say more concretely, the way this deals with values and possibly mutations, the way that decorators are either intercepting values or values + mutations, it feels like something has a lot more legs than something that was hard to extend. One thing that I like about it that is reactive, we can decide what to do in what order, we can do `let` decorators, it makes it pretty easy to see how we can do it. The flow chart for figuring out what it can mean is tiny, which is a nice property. Basically thank you everybody for dealing with us.

DE: You can find that extension in the repo in EXTENSIONS.md. In this follow-on proposal, let declarations can be decorated to intercept accesses. We would be happy to hear your feedback on that. The current proposal is that fields/classes/accessors/methods would be included.

DRO: It's more powerful. I have a question about decorating local vars and methods. I’m concerned about how that will work with subclassing and the performance implications of something like that. If you have a parent class with an instance foo, the decorator would create a getter/setter on the class. If a subclass also creates instance field foo, how would that work?

DE: This is just about how class fields work in general. This is what typescript version is based on.

The pattern of having a superclass and subclass that both decorate the same named field just doesn’t make sense in this proposal. If you have a field with no initializer, it sets that field to undefined.d The thing that would make sense is if we had something like in TypeScript, there is an option to upgrade to ES class field semantics (define instead of set), with a flag (--useDefineForClassFields), there’s a syntax to declare a field, based on erasure. If we wanted to allow you to subclass a class and decorate a field defined by a superclass, it would be decorated declate field, which doesn’t have the standard field semantics. I think that would be a coherent proposal to make. It would only act by setting metadata, but something you can make use of.

DRO: Might have been my not understanding. But what about the local variable case? If you decorate a `let`, does that create an invisible getter and setter somehow?

DE: Yeah, that’s how it would work. People have raised concerns about that. It’s not part of the MVP.

DRO: I see, OK, I mean everything I have seen is the decorator is limiting the functionality to simply wrap function on the syntax level.

DE: based on our use case analysis, it would be too limiting to not have field decorators. They come up in a lot of different contexts, that is why they are included in the MVP we are proposing.

YK: Quick follow on, in the usage of Stage 1/2 decorators, public field decorators and class decorators are the most popular, it’s not that no one uses method decorators, but field decorators are up there. Writing the boilerplate for a getter/setter is noisy and pretty abstractable.

KM: I totally see the value in getter/setter, the variable decorators in a class. The local variables semantics seem confusing, I would like to see it put off until it is more concrete.

DE: Good! That’s what we are doing.

SYG: I'm not sure I'm following your explanation on what actually happens?

DE: There are two differences between the stage 3 class fields proposal and the Typescript class fields that they have, one difference is that if you have a field with no initializer it is set to undefined, and it uses define as opposed to set. In this case, they’re both relevant. The pattern that DRO mentioned of having both a superclass and subclass decorating the same field, I think only makes sense if field decorations are based on erasure rather than defineProperty undefined.

SYG: Erasure?

DE: The declaration itself doesn’t do anything, and the decorator does a side effect on the class, reading what the getter/setter is from the prototype, and writing a different getter/setter pair, or something like that. This is not a pattern that makes sense when the subclass defines a field that shadows a super class’s field.

SYG: So in the new proposal, DRO’s use case will result in what exactly?

DE: I’d have to look more at the details in what he is interested in. I bet there is a way we could rephrase it, I would have to know more about the goals.

SYG: Fine, I don’t think it’s very important.
Are the champions open to doing this piecemeal? For each specific decorator to be its own proposal—once we agree on the general architecture, it seems very clean to have different proposals with different decorators.
I would like to know what the core set of what you are doing, field decorators are far most important. Some of it seems almost like a mystification of a function call. If those cases can be resolved ???

DE: I want to understand more about this pushback on things that are function calls. I think it is generally useful to add function calls where there weren’t any before. This is a piecemeal proposal, by only adding field/class/getter/setter decorators we are not adding the full set. We’re flexible about adding or removing certain element from this. But I’m skeptical that just fields would cover the use cases in the ecosystem that we’re trying to cover here.

SYG: That’s fine.

YK: Yes absolutely, I agree that the nice thing is that you can get a picture in your head and decide which ones that you want. There is a tradeoff of something that you want done, it might make two ways to do the same thing. There is two way. There is wide use in the ecosystem (the Stage 1 proposal).

Another way to think is that fields and methods can’t have functions around them, same with getters/setters. I think the thing I want to say about classes, they are more complicated than you think, the exact timing that the class becomes bound to the name of the declaration matters a lot. It is still an open issue, if you wrap a function around a class, you have the inner class and outer class, the inside class might see a different version of the class than the outside. It resulted in this becoming popular in the ecosystem.

DE: KG asked this on IRC, how is a function call not already possible in a class declaration? If you used a function call, the inner class binding wouldn’t be updated. If you said after the class declaration Element = Function(Element), a class decorator can affect the inner binding.

YK: If you want to use instanceof on youself it better be the same thing.

SYG: That doesn’t answer my question. I don’t consider that a slam dunk as much as field/method decorators. I am very happy about that state of things.

DE: We’ve talked before about deferring class decorators, it would make me sad but not completely ruled out.

SYG: I want to thank the champions to take implementation feedback very seriously and redesign it.

LEO: I’ve never heard of the term piecemeal. If I understand you mean fragmenting the proposal into many proposals?

SYG: Specifically, I find some of the decorators more must have than others, and if the champions were interested in splitting them out.

LEO: Ok, I understand you are trying to get an MVP, but I might be a little afraid because of class fields being too complex, I’m kind of afraid of that adding too much complexity. I feel this proposal looks a little bit small and enough for us to go ahead. I’d like to ask for my preference of going for this in a single proposal.

SYG: I think I don’t agree that the current proposal will have the same entanglement issues than the previous proposals.

DE: I share SYG’s sentiment. You can think of classes as a 2x2x2 grid, filling in entries, but this is more like you can use the same concept in different ways. Not a testing matrix.

LEO: Thanks for the clarification. I’m trying to understand better. We can work this out.

RBN: There is a small issue with breaking it down, if we were to advance fields but not methods, a transpiler like babel or TS would have issues transpiling some but not others, and troubles with users moving between versions, because they want to mix and match. If full decorators comes out it would be problematic. I would like to look at getting parameters included as well, but it is a separate topic. Piecemeal would be difficult for the transpiler world.

WH: I’d like to understand the design of how all of the various decorator kinds work before advancing any of them. The pitfall we’ve fallen into several times is that when designing some kinds of decorators we find issues that make us reconsider design decisions on other kinds of decorators. If we were to approve decorators piecemeal, the danger is that we’d that we’re locked into a design that doesn’t cleanly extend to other kinds of decorators we want to add. So I’d prefer to understand the entire design first.

DE: Yep. We are proposing doing this together, I share the reasons that RBN raised. It was a pragmatic case for including parameters. Even though they aren’t part of the Stage 2 proposal, they are in the ecosystem. I want to point out that this is friendly for upgrades. You can have a decorator library work for both legacy/experimental decorators and this proposal: it can check the type of the second parameter to see which style it is being invoked in. If the second parameter is undefined or a property key, it's a old style decorator. If it receives an object—the context parameter—it is the new version of decorator.

YK: I agree that RBN’s point is good. Parameter decorators are not in babel, but trying to move together things that exist in the ecosystem is a pragmatic point.

WH: I’d like to understand what init and metadata decorators do, I did not understand that from the presentation.

DE: I’m going to defer that because I can’t answer that in the 3 minute timebox left.

WH: Can you write an explanation?

DE: It is in the README.

BSH: What are the intentions that are built into decorators, for example if you decorate a method, does it ensure that it takes the same number of arguments?

DE: For that particular one, that is something you can do with a type system, but there are a lot of other things that it by construction preserves. There were all kinds of shape changes, in this proposal you don’t end up changing the class. A lot of variability is reduced, but we are not adding checks to check arguments.

BSH: For class decorators it does decorators a class and return a class, ?? was given.

DE: The answer to the question is no. We can discuss this more in the decorators call, I want to learn more about these invariants.

I want lean more about what you want . thats not awared by previous decorators.
DE: Do people have concerns on the high level, thanks for feedback.

(ends)

## String.dedent for Stage 1

Presenter: Hemanth HM (HHM)

- [proposal](https://github.com/mmkal/proposal-multi-backtick-templates)
- [slides](https://docs.google.com/presentation/d/1OihdYij2Nwox1i-XgdAyTBZCatHXxpGvXiQsK0Qmvnc/edit#slide=id.p)

HHM: (presents slides)

DRR: (asks on queue: I understand `````` is not necessarily the syntax, but that code is valid today)

DRR: Weirdly enough, ``` followed by ``` is 2 tagged lit invocation, it is a runtime error, it has no problem with static syntax, it can be a syntax error. I don’t know if it’s worth changing in parser. Just wanted to mention that.

HMM: we were kind of expecting that as a con, thanks for the mention

KG: Express a preference just having the API, not having the syntax, at the very least for a first go, if the API is not sufficiently ergonomic or if there is still a need to add the syntax, we can do it at a later date. For now I don’t see why we should do the syntax, we should probably try the API

JRL: The engine itself is maintaining a strings array, the Syntax form can never expose an underlying strings array - there’s only the dedented one. The engine only maintains the dedented form.

JRL: If we `String.dedent` at the tag we can maintain semantics with syntax, and the dev using wrapper can only receive a dedented strings array. This is just a case if it's intended to return an underlying strings array or only a dedented one at the tag site.

SYG: it seems there should be an opportunity for optimization?

JRL: In syntax, yes. But the API form will not be able to do that, since the engine will maintain the underlying strings array and dedent will have to maintain its own cached version of that.

SYG: That answered my question and if that is the main con I also prefer the function over syntax here.

DRR: I'm still confused.

JRL: There's an un-dedented strings array, which will contain four spaces. That's one template strings array. If you were to pass in a `String.dedent` tag, you would get back a template strings array that does not have the leading four spaces. So there's two instances of a template strings array, one maintained by the parsing engine and one maintained by `String.dedent`.

DRR: I see. OK, and because of that there's a potential optimization loss. For this to be efficient it needs to be cached, though maybe that's not so bad in the grand scheme of things. I don’t have a good handle on this.

JRL: The dedented strings array absolutely has to be cached, it will break a lot of tag functions libraries otherwise. But there is a cost, because the engine will parse an underlying strings array, and string dedent will need to process that underlying array and maintain its own cached dedented copy, so there is a runtime cost to this.

SYG: I must have missed something basic. The proposed API function returns an array, not a string?

JRL: Yes, an Array of… There are multiple different ways you can use `String.dedent`. One is as a template tag wrapper. In this case, we’re invoking `String.dedent(html)`, so `html` will be invoked with a dedented strings array, because we’re using the wrapper form of String.dedent. If instead, you were to invoke String.dedent without a wrapped function, this would return a string to you.

SYG: I see; I will read the explainer; I am confused myself.

JRL: I recommend the REPL, where you can experience the API form.

HHM: if you pass a string it returns a string, if you pass a function, you get a tag function which will invoke the function with an array.

RPM: A reminder that this about getting this proposal to Stage 1.

WH: Is there consensus on how dedent measures the amount of whitespace? Let’s say one line starts with 10 spaces and another with a tab, what’s the “common” whitespace?

JRL: There’s differences based on which npm API you use. Each one of the current npm modules does a different thing here. The API I’d like to propose is that if a tab were encountered and a space were encountered, these would count as “different” and neither would be removed. Any kind of mixing would not remove anything.

WH: And what’s the definition of whitespace? Is it the same as in the lexical grammar?

JRL: Yes, it’s defined as Unicode whitespace.

MM: Just historical note the JS template literal comes from the E quasi-literal. It had a dedent that people liked it. Are millions of people used it not for the template but for dedenting strings?

HMM: From the module dependency, we saw a number of cases. A few are trying to generate code (e.g., SQL) and a few are trying to generate templates.

MM: ok, personally having written a lot of template literals and seeing it starts on the left column, I found out using it directly without a dedent was pleasant

(next queue item: Does this work when content is included on the first line?)
DRR: It seems like that for lack of a better word, the algorithm you’re using means if the developer includes content on the first line after the triple backticks, then none of this would work. Is that correct, or is the “algorithm” more sophisticated?

JRL: What I believe you’re saying, if the dev would include any content on the same line as the opening triple tick? That first line would count as the line with significant content in it and we would use that in the calculation of common whitespace. It could be that we forbid any content on that same line, so you are forced to go to the next line. That’s not a decision we’ve made yet.

BFS: There is already a non-error triple backtick syntax, if there is a tag in front of them, they could produce a value but I believe that no such code actually exists though

```js
const a = () => a
a ``` ``` // not an error
```

DRR: I feel relatively neutral. I have a few expectations around that dedent thing and how it computes. My biggest concern is this tag that takes a tag and checks if it's a function to determine its behavior. We spent a while trying to understand that. I'd strongly urge not doing the composable tag thing.

DE: Decorators are often used in this way [of a factory pattern with a function returning something that can be applied as a decorator], if you apply params to decorators, those will be taken and will be taken next. You could use a similar approach to decorators, here the behavior is clear so I don’t see the problem here.

DRR: It’s certainly possible, but I find it confusing. There are certain decorators that I would not encourage users to write as well.

JHD: it kind of seems like composing template tags looks like a different problem to solve and maybe we should differently explore that and the template should always return a string and then we can figure out the composition case.

MM: I would object to this proposal if it did not take a tag and return a transformed tag because the use case that this entire proposal is about is writing large templates where you want to indent a template as a whole, and not be part of the literal data that goes to the tag.

MM: If you omit the composed form, then all you’re doing is dedenting a tagless template. And this use case is just a small motivation of the whole template literal.

MM: The typical IDE will truncate the whitespace in the empty line, does your algorithm ignore blank lines?

JRL: another open question: we could ignore empty lines, or whitespace -only lines, or ignore nothing (every line is used in common indentation). The current repl ignores only empty lines.

MM: I think ignoring whitespace-only lines makes sense, I'd advocate we stick with that.

HHM: Made notes of the open questions. Asking for Stage 1.

SYG: I support stage 1 and want to ask which direction the champion group is going: function or syntax.

HHM: We will lean more towards the function form.

JRL: There are fewer issues with the function form, but I personally prefer the syntax form. There is a risk with web compat here with syntax, but the API form has those memory issues. Would be happy with either.

SYG: Now that I understand the actual con there I do have semi-significant impl concerns, but they're certainly not Stage 1 concerns.

### Conclusion/Resolution

Stage 1

## Temporal Stage 2 Update

Presenter: Ujjwal Sharma (USA)

- [proposal](https://github.com/tc39/proposal-temporal/)
- [slides](https://docs.google.com/presentation/d/1wkufbATeIxKvYZmd_hlM80x9zJC-C6pTHVwDFtUSqfM/edit?usp=sharing)

USA: (presents slides)

JHD: Luckily you answered my question in the slides. It was suggested in July that the spec would be ready for this meeting because it will take more than 2 months. Please make sure the spec is frozen modulo naming concerns, so it won’t be overwhelming to review it and keep track of changes that are happening. That way you can ask in January. Second request is a document that explains the current mental model without the history and that document would be useful for the review. To reiterate, I love this proposal and I’d like it to advance.

USA: I understand where you're coming from, and we’ll do exactly that. We have some rationale documents, if you can look around in them and tell us things that you are missing in there.

JHD: I will certainly try to do that. But not everyone has the time.

USA: The docs and the polyfill are important to understand the proposal.

JHD: Personally I’d like to be able to review solely based on the spec and prose, and not look at the polyfill at all.

USA: That’s great that you will review it that way, but some people may want to try out the polyfill when reviewing the proposal.

PDL: We’d like to ask for reviewers later and review later because we don’t have those docs ready. In that spirit I’d like to ask people that want to look at it to make yourself known so we can give you more notice once the docs are ready.

PFC: RGN might have more to say on this topic. We wanted advice from the plenary about whether to treat Temporal objects as "spreadable," namely whether they should be enumerable own properties or accessors on the object's prototype. RGN has stronger opinions on this topic than I do, so I'd like to invite him to start the discussion.

RGN: The goal is to get feedback from the whole committee on this issue. Trying to capture the rationale for deviating or deviation is needed to put access and spread properties. I know the feedback about Temporal has been around verbosity. Also it works well with the pattern of library of treating a change that way. Do you have an example to pull up? https://github.com/tc39/proposal-temporal/issues/917

MM: This is the first time I heard about this. I had previously been indifferent between own and accessor properties. I like it, the spreadable issue gives me a preference for own properties. It has to be own and enumerable in order to be spreadable.

WH: When asking about spreadability, the choice presented seems to be either having hidden state in internal slots and accessors on the prototype or having own properties. If you use own properties, would those contain the entire state or would you still need some state in internal slots?

RGN: Enumerable owned properties are the subset of owned properties that can construct the object with spread syntax.

WH: Would the entire state be in own properties, or would there still be some hidden state?

PDL: The data we store is actually from the ISO calendar representation. So, there is a hidden state in the sense that the actual version is the year, month, and day in the ISO calendar, yet the year, month, and day properties give you the calendar-dependent value. We want those properties to be spreadable while those internal slots hold the ISO representation.

WH: I’m asking because I’m wondering if own fields and hidden slots could get out of sync with each other.

PDL: No because they are computed directly from the calendar. Temporal objects are immutable, in that sense they are more like a record than a mutable object.

JHD: The own properties are only immutable if Temporal makes them immutable, and that would be rare, since we typically use mutable properties. Accessor properties help ensure immutability. I think the problem that this tries to solve is an important problem—I have had an npm library for 9 years that allows you to combine a date with a time, it is a problem that needs solving, but I think object spread is very messy and might not work. For example if we have two different calendars in two different objects being spread, I expect an exception to be thrown, but it will not be, because the second calendar property overrides the first. If this problem doesn't have to be solved with object spreading, then there is no motivation to use an own property.

DE: What people have been saying about time for reviews is true, but a misunderstanding about the time to do that. I like the idea of a call to go over the tutorial with reviewers, the polyfill can help people trying, I also want reviews from web developers and we’ll be accepting feedback. People should raise issues if there are issues with the 3 months review.

PDL: On a side note, there will be a workshop at NodeConf.EU this year to gather some feedback.

## Intl.DisplayNames V2 for Stage 1

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/FrankYFTang/intl-displaynames-v2/)
- [slides](https://docs.google.com/presentation/d/11Ch4Y9yYzMJjznX478Y0QbbCGiOAXbOzLjpYnMH9eck/edit#slide=id.g98718d9573_0_37)

FYT: (presents slides) Asks for Stage 1

SFC: Supportive of this proposal as it solves very complex problems. Especially in date/times so I support Stage 1.

RPR: The queue is empty.

JHX: In the slides it mentions leap months in chinese calendar, does it solve leap years?

FYT: There are two different things, how do you format dates, not part of this proposal, in there suppose a gregorian calendar, and the formatter will output the leap month. This problem, given this API without any math in it, I ask for the first or last month here without math. But the problem is how do I account for leap months? How do I accept input the right way. For instance jewish calendar doesn’t have leap months but a 13th month. So we need to address that issue between Stage 1 and 2.

JHX: Really like this, good direction.

PDL: Strong support for this.

RPR: The queue is empty.

FYT: Asking for Stage 1.

### Conclusion/Resolution

Stage 1

## Intl Locale Info for stage 1

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/FrankYFTang/proposal-intl-locale-info)
- [slides](https://docs.google.com/presentation/d/1NwYFb6jm5aQOiL9urMM-GaEFMhll5sYcZJYQ1WZhTZ8/edit)

FYT: (presents slides)

RPR: The queue is empty.

SFC: +1. I think this proposal solves another important need, like the unit stage 1 proposal to figure out the measurement system and this proposal is solving that so I;’m happy FYT is championing this and should go to stage 1.

PDL: +1. This is really important, I am responsible for some of those hacky libraries myself.

RPR: The queue is clear.

FYT: Asking for stage 1.

### Conclusion/Resolution

Stage 1

## Conformance for enumerable options in 262 and 402

Presenter: Shane F. Carr (SFC)

- [ecma402 PR](https://github.com/tc39/ecma402/issues/467)
- [slides](https://docs.google.com/presentation/d/19rOwwfESiPhlv63deeBPt_RwfmOJNQq2Qc-PJngE770/edit?usp=sharing)

SFC: (presents slides)

MM: I want to mention 2 issues related without good answers for. There is no way to feature test what is supported on the platform. It should be very easy to feature test for something in transition. Providing options in a bag: should it ignore unknown bag properties or error? Neither of those works. Errors will break and ignoring will entrench bad options. Throwing is bad on platforms that doesn’t support but it is not a problem if we can start to feature test. Those option bags are really important so we should fix that.

WH: MM, I'm not sure I understand your conclusion… are you saying that it's best to throw on unknown enums of a known option, or are you talking about unknown kinds of options?

MM: I’m referring to unknown kinds of options, unknown options property. With regard to enums specifically, if there's an enum value you don't understand, there should be an error.

WH: MM, that completely flipped the meaning of your comment for me; SFC’s presentation is about unknown enum values of known options rather than unknown kinds of options.

MM: I see.

SFC: The question of unknown kinds of options is different.

MM: Sorry, I misunderstood the presentation.

WH: How would you do a conformance test that an implementation accepts only the allowed enum values?

SFC: Good question. The way we do it is that we give it an example unit value that exists in CLDR but not Intl as a litmus value. That is a very good question though.

WH: My answer to the question you asked at the end of the presentation: I agree with you, we should choose case-by case how to proceed.

JHD: In an options bag in the community, you could view it as a workaround for not having keyword args. Each option in an option bag is like a named argument. We don't make APIs that throw on extra arguments. The same should apply to options bags. We shouldn't throw when you add a new property. We should consider adding one of those things for things considered free to do. As a general policy, throwing when you pass an unknown value.

JHD: If you pass a known option with an unknown value, you can throw.

JHD: It's potentially a breaking change… people are more likely to pass an object with unknown properties than pass unknown arguments.

JHD: With the latest timeStyle/dateStyle change, I had 3 or 4 reports of users passing date value in their option bags because the new version of chrome throws when passing on an unknown but did not before. Every time we decide to start throwing we potentially break people’s code.

SFC: I just wanted to be clear that I agree about “unknown properties” in options bags. We ignore them, which is the same approach we take in 402 and Temporal. The specific question I mentioned here is the case of unknown values to known arguments. Should we allow Chrome to accept “fortnight” as a unit and format it instead of throwing?

JHD: if there is a way to feature detect then it becomes easier to deal with throws which is better than to deal with try/catch.

PDL: One pattern I’ve seen before that instead of adding a bunch of parameters for a mix of libraries, one could pass in an options bag instead.

The scenario that can therefore come up is that, in my combination of two libraries, I have an option that is supported by HTTPS but not HTTP interfaces, for example. There should not be an exception in that case. But if you throw on unknown options, you break the web.

SFC: PDL, how do you suggest once introducing new values to the enums, or should the enums be forever fixed?

PDL: you ignore it, because anything else would break.

SFC: In case of the unknown unit fortnight, if the browser doesn’t have that data it, what is the fallback behavior? What do you do if you just ignore unknown string options?

PDL: right. This is a big reason why options bags have a lot of issues (despite of the pros). An unknown value needs to be ignored.
If it’s unknown and requires something, it is actually the new implementation that needs to deal with that Throwing is breaking the web essentially.

MM: We've been leaning toward ignoring unknowns rather than throwing. The dilemma between the two is addressable. You can feature test. However, it's difficult to feature test for what options a given procedure supports, and what enum options it supports, but good for calling code to detect and address the problem.

WH: For unknown enum values of known options, I think throwing is the best approach. For example, if you wrote `unit: "metre"` on the currently displayed slide [the slide has a `{unit: "meter"}` option], throwing on that is better than silently ignoring `"metre"`.

SFC: We’re at time, to summarize: do option 3 on a case-by-case basis, to think about cases so we can support wildcard strings/enums. If we don’t have a reasonable fallback mechanism we should throw, and in all cases we should introduce a feature detection mechanism.

FYT: Feature detection is actually solved in the Intl Enumeration API that went to stage 2 last night.

SFC: For feature detection, you can also check if `resolvedOptions` has the same value as you passed in.

PDL: That is the best rebuttal to WH because otherwise I can’t do feature detection if it starts throwing.

WH: PDL do you agree with me or disagree with me?

PDL: Disagree with you because we’re too late to do feature detection, we need to do it with what we have now.

WH: I never said anything about feature detection. I’m very confused about rebutting something involving that.

PDL: Will take that offline.
