# December 4, 2019 Meeting Notes
-----

Brian Terlson (BT), Aki Rose (AKI), Daniel Rosenwasser (DRR), Shelley Vohr (SVR), Michael Saboff (MLS), Yulia Startsev (YSV), Ross Kirsling (RKG), Waldemar Horwat (WH), Chip Morningstar (CM), Rob Palmer (RPR), Shane Carr (SFC), Jordan Harband (JHD), Kevin Gibbons (KG), Sebastian Markbage (SM), Tierney Cyren (TCN), Damien Engels (DES), Caio Lima (CLA), Alan Schmitt (AS), Tab Atkins (TAB), Shu-yu Guo (SYG), Justin Ridgewell (JRL), Till Schneidereit (TST), Michael Ficarra (MF), Pieter Ouwerkerk (POK), Zibi Braniecki (ZB), Hemanth HM (HHM), Dan Finlay (DJF), Benjamin Coe (BCE?), Kristen Hewell Garrett (KHG), Gabriel McAdams (GMS), Valerie Young (VYG), Tantek Çelik (TEK)


Remote: István Sebestyén (IS), Bradley Farias (BFS), John Hax (JHX), Caridy Patiño (CP), Daniel Ehrenberg (DE), Erica Pramer (EPR), Mike Samuel (MSL), Richard Gibson (RGN), Ron Buckton (RBN), Mathias Bynens (MB), d2g, Ujjwal Sharma, Jonathan Keslin (JKN), Ben Newman (BN), Sergey Rubanov (SRV), Mark S. Miller (MM)


## Intl.RelativeTimeFormat for stage 4

- Presenter: Zibi Braniecki (ZB)
- [Explainer](https://github.com/tc39/proposal-intl-relative-time)
- [Slides](https://docs.google.com/presentation/d/1ka5vgIawqOHdvr4gMRl1an_R3s6Swo1iemU5LKBPteM)

ZB: (presents slides)

ZB: Caio (CLA) is going to be helping with proposal, as Daniel (DE) is quite busy.

ZB: Asking for advancement to Stage 4.

SFC: This proposal has been shipped for quite a long time, probably the oldest Stage 3 proposal that we’ve had. The reason we kept it at stage 3 for so long was that there was a bug in ICU preventing formatToParts implementation. Now that that last part has been shipped, this is already a reality in the web; I feel this is solid stage 4 material.

ZB: Our spec is not bound to ICU but all major implementations use ICU data. Our spec says we expect implementers to provide CLDR-like data, and in practice we use ICU, microsoft used something other than ICU and it was difficult but we try our hardest to stay data-source-agnostic.

### Conclusion/Resolution

- advance to stage 4

## For-in order for stage 4

Kevin Gibbons

- PR: https://github.com/tc39/ecma262/pull/1791
- [proposal](https://github.com/tc39/proposal-for-in-order/)
- [slides](https://docs.google.com/presentation/d/1vHsM52ox4fV7q6YmLnPVM2qNp_AXaZblKubZhRWKMbs/edit?usp=sharing)

KG: (Presents slides)

There is a pull request in test262 and it is implemented, I’m asking for Stage 4.

WH: What happens if you change the prototype chain?

KG: Then, this new spec text does not apply and you have to go back to interpreting the 3 paragraphs of prose that are not being removed from this proposal. That say some requirements about this

WH: Why doesn't this spec text apply?

KG: Because the iterator must behave as specified, except the first bullet point says that it doesn't apply if `[[Prototype]]` changes.

### Conclusion

Approved for Stage 4

## Atomics.waitAsync for Stage 3

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tc39/proposal-atomics-wait-async)
- [slides](https://docs.google.com/presentation/d/1q6mxR0g4VY9mzWQkjj-ENboiDsB3aflxHWM9eayhOWU/edit?usp=sharing)

SYG: quick recap, this is what we have right now: there’s no way to coordinate waiting on the main thread and worker thread, because you can’t block.

AKI: There was a question in the chat about what is SAB

SYG: Shared Array Buffer

SYG: Asking for advancement to stage 3.

KM: Reviewed and approved single FIFO changes

YSV: Reviewed and approved single FIFO changes

### Conclusion/Resolution

- Approved for Stage 3

## Array.isTemplateObject update

Presenter: Mike Samuel (MSL)

- [proposal](https://github.com/tc39/proposal-array-is-template-object)
- [slides](https://docs.google.com/presentation/d/e/2PACX-1vR75h1lHCUCuqkAvo0cOAh6GPEu-wdXep2mpk3vlvw9d6Bj2FipwmM_8f1PjXgXhAKCYWNfX5ugH5Tk/pub?start=false&loop=false&delayms=3000)

MSL: (presents slides)

WH: [Referring to slide showing a value that happens to be a string literal passed to a template marked as “trusted”] Are simple strings trusted? Why is “foo” trusted?

MSL: “Foo” came from a trusted developer by appearing directly in the source code. Trusting simple strings is a non-goal. (see next slide)

KG: The isTemplateObject property of Array is still a configurable property, right?

MSL: Yes

KG: So the trusted code needs to be run before this is used, right?

MSL: isTemplateObject is brand-checky, but we're not trying to make it impossible to do other things with it.

WH: How does this interact with proxies?

MSL: I don’t remember the issue number but it has been discussed. Arrray.isArray has some language around proxy. The proxy whose underlying value is an array…?? We do not want to recreate that.

WH: More generally, this looks like something that tries to prevent confused deputy problems.  Unfortunately whether something is used as an argument to a template is not sufficient for security decisions because you might have several kinds of templates in your code.  You might have templates that generate HTML, math, etc.  isTemplateObject will not tell you which kind of template it came from.  I'm worried that this provides a false sense of security.

MSL: It is true that if there was a cat picture tag, either JS was taking funny quotations and putting them in a cat picture. If an attacker could convince coe to leak it’s template object, you might get unnecessary cat pictures blessed as trusted HTML. If the cat picture looked like a payload, that might be a vector of attack. (Didn’t quite catch this story??). An attacker has to choose a string that is meant for one purpose, do deputy confusing, to get that string somewhere where it wasn’t intended. Which, you know, that might happen, and it's hard to prove it won't happen in a language like JavaScript.  But the tools the attacker has available are not I get to compose a string. They need strings that appear in literal text. But there is not a concatenation for multiple template objects, it does not produce a template object. It doesn’t seem like a significant attack vector.

WH: From a point of view of the larger ecosystem, I see this as being harmful.  If the fact that something is a template marks it with a “secure” bit, it will discourage the use of templates for plain strings, because those could be used to attack HTML templates.

MSL: I don’t see how anyone would conclude that. What you are proposing is plain text.

WH: The things that are safe for plain text are not safe for HTML.

MSL: I don't see how providing (indecipherable) prevents people from using them for plain text.

WH: This is marking anything in a tag as secure.

MSL: A programmer can call Array.isTemplateObject for the HTML use case.

WH: But that information is useless. I don’t think you understand my point.

MSL: Let’s follow up in an issue.

BFS: I'd like to agree with WH.  If we're using this to grant privilege to certain APIs.  That means that if you don't want your code to have the ability to use or be used by an API, you would have to avoid using template objects.  And I agree with that.  And about plain text construction being an attack path, I think that's misleading.  Anybody writing code who doesn't want to grant access would have to avoid template objects.

MSL: I’m happy to follow up off line. Right now, people do use tags to create privileged strings. I don’t think if we provide this people will make sub-ideal distinctions, they already are, and they don’t have the tools to effectively distinguish from inputs that appear in source code form inputs that appear from outside.

JHD: We haven’t come to an agreement between mark and I yet. The current mechanism that mimics template objects seems strange to me.  It seems that should be an internal slot.  I don't feel strongly enough to object to that change, but I wanted to make sure that if anyone has an opinion on that has an opportunity to speak up.

BT: Can you sketch the contours of your disagreement?

JHD: I find same-realm stuff kinda weird.  There's kinda 2 buckets: same-realm and cross-realm.  Same-realm deals with the identity of builtins.  But there's a bunch of stuff that does brand checks across realms.

BT: isArray is an example.

JHD: isArray goes through proxies, but Function.prototype.toString also works, throwing on things that aren't functions even if they are in another realm.  So to me this feels like a property of an object.  If you pass a template object around between realms, that feels like what an internal slot is used for.  But that's syntax which can only exist in a single realm.

MSL: I agree that it seems more like a property of the object to me, and thanks for expanding on that distinction on the conventions on cross vs non-cross realm. It seems that discussions are bogged down and kinda going in circles because of equating, you know, internal slots cause problems for parts of the realms APIs.  It seems that if there were a way for the spec to define not necessarily in terms of the internal slot but in terms of the brand, if we had a standard way of specing how a brand check happens, property of Object, for example.

JHD: We do.

MSL: Then we might be able to disentangle this and other proposals from the realms proposal, because then the realms proposal could dictate how brand checks happen.  Perhaps this proposal could hook into that.

JHD: There is a standard way to do this. Creation of a single instance, it is not exposed to users directly.

MSL: My concern is that I wonder whether separating brand check out as a concept might simplify the kind of plumbing that the Realms proposal can do.

MM: I wanted to reiterate what JHD mentioned; that I'm on the other side of the position JHD stated.  (1) to avoid further erosion of membrane transparency. (2) that as MSL already explained, this check from a security perspective is useless in a context where eval is not suppressed.  Whether eval is suppressed or not is on a per-realm basis. Regarding Mike’s security scenario, reviewed code loaded into a realm where eval is suppressed, using this check on it’s own code in order to recognize that templates came from its own code. If that realm is in contact with a realm where eval is not suppressed, then the existence of any realm where eval is not suppressed will make the test exploitable in the realm Mike is trying to secure. This can occur, for example in the browser, with same origin iframes, where CSP suppresses eval in one and not the other. Argue that this should be per realm.

On to my question. We're about to separate in upcoming proposals, the concept of Realm and Compartment, where a Compartment is an evaluation concept, and a Realm defines a set of non-evaluator primordials.  A realm can have multiple compartments.  Putting isTemplateObject on Array locks it into per-realm, since there is one Array constructor per realm. We discussed instead putting isTemplateObject on eval because there is an evaluator per compartment. The template cache can be equally well thought of as being a data structure associated with either a compartment or a realm because each evaluation creates a separate template object.  For these reasons I feel this is better as a property on the eval function rather than a property on the Array constructor.

MSL: If I had a realm agonistic version of array. It is trivial to build realm-nostic on realm-agnostic. Why is template object a property of eval? That seems odd from an API design point of view/discoverability by developers. But, when the compartment stuff comes up, are you planning on having a base for container-specific stuff.  You said that eval is per-compartment.  And most of the other places where we hang API elements from are per-realm.  Does the movement toward compartments include any other APi elements or namespaces that are per-compartment?

MM: Yeah.  There is a global object per compartment.  Since there is a global scope per compartment, that follows. There's also a module registry, essentially a loader per compartment. The Realm and Compartment hooks are to enable some JavaScript code to act as host to other JavaScript code. We’ve been going through the hooks in the Realm api, moving those that are about evaluation to the Compartment api. Things about evaluation are for Compartments, whereas things that are about the non-evaluator primordials are for Realms.

MSL: I am very interested in seeing that, but I would like to tackle the larger issue, how can we do grant checks in a way that is acceptable to this kind of movement. Can I invite you and JHD and anyone else to a discussion on grant checks to reach out to me so I can set up a meeting? It seems to me that we don’t have a way to do grant check that meets everyone's needs.

YK: I'm not sure I understand the two options.  What are the two options we're discussing, if you had to summarize?

MSL: The two options from JDH and MM: (1) realm-gnosticism and realm-agnosticism. Whatever this API is called, is it given a template object from another realm, does it return true or false? (2) how to present this as an API is complicated, because Array is per realm, but Array.isArray is realm agonistic.

YK: To clarify, MM was advocating a property on eval, because that would match his desire to make it per-realm?

MM: Per-compartment.  The distinction is, a compartment is about evaluation context.  Different Compartments can have different evaluation context but share the same primordials. Where global variable foo is looked up is a compartment-determined global scope.  The sharing of Array.prototype is per-realm.  Global lookup is per-compartment. There are multiple compartments per realm.

YK: So it should do what eval does?

MM: Since Array.isArray is not per-realm, it also punching through proxies. The normal way to operate on a date (an instance of Date) is to “date.getFullYear()”, which works identically between realms whether across a membrane or not. The expression “Date.prototype.getFullYear.call(date)” is not transparent. It works between realms, but not across a membrane. The current breaks of membrane transparency are similarly obscure. Membranes are practically transparent today. The problem with Array.isArray is that it is a usual form that works between realms. So we ensured that Array.isArray works through membranes, preserving practical transparency. This required a special case in proxies for Array.isArray. I don’t want to keep having to introduce new special cases for punching through membranes.

WH: MM, I can’t tell the polarity of what you’re advocating for. Are you arguing for punching through proxies or not?

MM: I’m advocating that we don’t punch through proxy. To maintain membrane transparency, we do not operate across realms. Right now, membrane transparency is almost perfect except for Bla.prototype.bla.call. Practically, you can put a membrane between realms and not break anything.  Furthermore, I would like it to be per compartment and not per realm, but that is a second stage of the argument.

CP: Question we can take offline. Same question as discussed.

MSL: I will file an issue to capture WH concerns about attack surface. And hopefully also continue a discussion about brands.

### Conclusion/Resolution

Discussions will continue offline.

## Optional Chaining for Stage 4

Presenter: Daniel Rosenwasser (DRR)

- [proposal](https://github.com/tc39/proposal-optional-chaining)
- [slides](https://1drv.ms/p/s!AltPy8G9ZDJdqUSysSl6-8KxZiNX?e=td7t0S)

DRR: (presents slides)

WH: Any changes since Stage 3? I didn’t notice any, but I’d like to make sure.

DRR: Semantic changes?  At the very least, everything I remember is editorial.  There should not be anything that is behaviorally impactful.

DRR: Thank you to everyone who has helped out with this proposal over all of the stages!

### Conclusion/Resolution

Approved for Stage 4!


## UUID Updates

Presenter: Benjamin Coe (BCE?)

- [proposal](https://github.com/tc39/proposal-uuid)
- [slides](https://drive.google.com/file/d/1jfTvf2XNE1yHO7ojBKDFMzpwtOybuBc9/view)

BCE: Went to stage 1 last time. This is just an update. (presents slides)

BCE: There are three routes we could take: (1) random numbers should not be the responsibility of 262.  If we don't want to define a source of randomness in 262, maybe it should be left to Node.js or W3C to define UUID.  (2) in spec, we expose an API for UUIDs, and we recommend that you bring your own randomness source, which could be crypto, and you can still mock that via the platform APIs.  (3) we want to define a secure source of randomness in 262.  We don't have to specify exactly how.  We could bring in even more of the crypto API.  That depends on what standard library looks like.

BCE: Where are folks sitting on the topic of should we have a method for randomness in 262?

YK: This is an important feature that matters practically, and the status quo of the browser and Node.js implementing it is weird. People implementing libraries have to think really hard about creating UUIDs.  Maybe someone could write a library in 40 bytes.

KG: Yep.

YK: But, my case is that fixing the problem of people can’t use UUIDs in libraries right now is a problem.

BCE: I agree with having UUID in the language.  It's not just a browser problem, it's a node problem, it's an IoT problem.  My concern is that if require people supply the randomness (Math.getRandomValues, etc) we create confusion.  We create decisiveness on the API surface available to people.

YK: We need to decide the issue of randomness before coming to stage 2.

BCE: One recommendation KG put forward is to port Math.randomValues from the Crypto.randomValues. But this might confuse people with Math.random, seems like a bad API design.

MM: I do think the issue of standardizing a good source of randomness in an easily mockable way is in scope.  A good standard crypto library for JavaScript is in scope.  It should be part of JavaScript.  It makes sense regardless of the host.  So it belongs in TC39.  The full crypto proposal will take a good while. The randomness should come first. We should get that settled, then come back to UUID.

BCE: Do you think we should make a second proposal for randomness?

MM: I am in favor of that. The future UUID proposal and future Crypto proposal will build on the randomness proposal.

BCE: Crypto namespace? Or global name?

MM: This is a hard question which I won’t express an opinion on today.

YK: I think it makes sense for us to solve randomness.  I don't think we should delay UUID because of it. I think we can work on them in parallel.  I wonder if we assume that we’re doing both could we make solving the randomness thing a stage 3 entrance criteria?

MM: I have not thought very deeply about the process issues for proposals that have dependencies. They will go through stages together/in a pipeline.

YK: The API surface of the UUID function, which is what Stage 2 is about, does not really depend on (the API surface for randomness).

MM: Yes it does. If you’ve got access to the UUID API then you have access to randomness. That access has to mockable and virtualizable. The unit at which you can virtualize is relevant.

TAB: I have a seeded random proposal that is going on right now.  It's not secure random, but it is about randomness and the

SFC: Have you explored or reached out to W3C to move the definition of crypto to 262?

BCE: They are supportive but I haven’t talk to the current editors of web security in w3c. The current implementation throws a DOM exception, for example, so there are some web flavor-y things in it. In javascript, would it through a type or range error? We don’t know. But completely reproducing the work also seems silly.

API: There is room to normatively reference the other spec, saying “if the host provides crypto, it provides this”

BCE: This could be an attractive approach.  In a Node.js environment, it could bring its own implementation to the table, W3C could bring one to the table, etc.  We do reference other specs in our spec, but it's more about implementing algorithms.

API: If you provide a crypto API, you must provide this API.

SYG: I think that's a reasonable path.  Talk to the Web Crypto folks.  I don't think we should branch out and define our own crypto when other people have already thought a lot about this space.  We should look at what's above us and bring it down to our layer.  That's an attractive approach.  I agree that we should have a secure source of randomness to build future proposals on, and we use the current art. (I want to clarify that I am **not** proposing a venue change for WebCrypto. I strongly want TC39 to explicitly use WebCrypto and not spec our own crypto. -SYG)

MM: I have not studied web crypto yet. I would study it before we propose an API. I have also not yet articulated a list of what I consider to be requirements.

SYG: That seems reasonable, and given BCE's contact with the crypto folks, and how open they are, if they don't meet our requirements, given that we're more low-level, …

MM: I think if that proceeds in a way that satisfies all parties, then that’d be optimal.

### Conclusion

BCE will take this feedback.  Will have a meeting with the W3C Web Crypto folks.
Many people in the room thought randomness should come before randomUUID

## Nullish Coalescing for Stage 4

Presenter: Daniel Rosenwasser (Microsoft) (DRR)

- [proposal](https://github.com/tc39/proposal-nullish-coalescing)
- [slides](https://1drv.ms/u/s!AltPy8G9ZDJdqUhwN2_Ih4zl72O0?e=I6Gea9)

DRR: (presents slides)

MM: If can't mix with &&, how can it be observed that it's lower precedence?

DRR: I believe that is correct, they should not be observable in any way. The precedence is lower, and then we throw an error message. They are non-associative, so you should not observe this.

MM: if the precedence had been reversed, it would have been identical

DRR: exactly

RKG: Non-normatively, if we were bothered by needing parens in the future, at that point the precedent would become observable, so having it in the spec would be useful then.

DRR: We can change our minds later on precedence.

YK: there's a hard design decision between undefined and null/undefined; we came down upon null/undefined. This means that it differs from parameter defaults; it's tempting to think they're the same. In Ember, we have getWithDefault that matches param defaults and we can't tell them to use ?? in the deprecation warning. Keep an eye out for people thinking they're the same thing. Nulls from DOM and parameter defaults don't work well together.

DRR: Right, we should try to make sure this is clear.

JRL: When we brought this up with nullish coalescing, we discussed strict logical operations, like `???`, `&&&`, and `|||`.  So we have a path forward for handling the strict undefined use case.  But for now, nullish makes sense.

JRL: (reiterates JHX's comment from GitHub.) One possibility is to ban mixing binary operators with nullish, since the operators can never return a nullish value. So `a OP b ?? c`, which is the same as `(a OP b) ?? c`, can never do a nullish default. It's just dead code.

JHX: (presents slides)

JHX: What is the committee's position on operator precedence?  There's a spectrum from "precedence is evil" to "we should allow it and leave it up to the programmer".  There are examples of precedent: yield vs await, pipeline operators.  It seems like we chose low-precedence for `??` to make it easy to migrate from `||`.  But, this doesn't always work (shows some examples).  My conclusion is that we should not indefinitely forbid mixing `||` and `&&` with `??`.  To be clear, I like this feature.  I would like to postpone the decision on the issue about forcing parens, and wait for tools to mature.  I apologize that I'm bringing this up at Stage 3.  One of the reasons is that I only got feedback after our programmers started implementing it.

MM: This isn’t arguing for or against any position here, but I wanted to bring up the assumption that operators will never return null or undefined. At this meeting, we’re bringing up operator overloading, which could make operators return null/undefined.

WH: Some of the points in the slides are either incorrect or irrelevant. It doesn’t matter that some binary operators don’t produce null or undefined. For instance, in `a ?? b * c` it doesn't matter that `b * c` doesn’t produce nullish because the LHS still can.
And I’m unhappy that we're relitigating this at such a late stage.

DRR: I agree with that sentiment, but sometimes these issues come up at a late stage.

WH: We shouldn't relitigate these things whenever a new member joins the committee. We have new members joining all the time.

DRR: Some folks pointed out that refactoring from `||` to `??` is not safe, but it also may be a bugfix in many cases (since it is used for defaulting, and users commonly forget that falsy, non-nullish values can be passed in). I think it’s a bit late to make changes like this now.

RKG: We do realize things at different stages, and sometimes there are things that were truly unexpected. But we do have a very clear understanding of what a stage 3 issue is, in the document, and it’s those deemed “critical” from implementation experience.

BT: Let’s avoid process discussion for now.

YK: I want to second what RKG is saying, once something enters stage 3 we’re really asking everyone to invest as if a feature is real. We need to protect the investments of users who’ve adopted.

YSV: To introduce this not having the same behavior as `||` and `&&` seems like it would be confusing/distracting, especially mixing operators. I would prefer if we relied on tooling to solve issues of precedence rather than building it into the feature.

API: We’re looking for tooling to adopt this, and they are looking for a stage 4 signal to land it.

SYG: Procedurally, I strongly agree with WH.  The objection presented feels like coddling the programmer too much.  I have not programmed with nullish coalescing, in principle, I would be surprised if we were enforcing something else that feels like a readability choice that could and should be enforced feels out of scope for the proposal itself.

JHD: Not in favor of enforcing tooling in the ecosystem. We made (a choice about something related) and it was a great choice, it simplified things quite a bit. Perhaps many of you have only have only used languages where the precedence were always the same, but in PHP it’s quite confusing. Beyond PEMDAS (which is only intuitive because it has been drilled into users) it’s never intuitive. I would prefer if we always enforced a style/precedence in the future.

WH: This is arguing against a strawman. I don’t see anyone advocating for forcing tooling here.

JHD: The de facto effect is that it will force tooling, in order to have consistency in a project and reduce bike shedding. We should not be unaware of the follow-on effects that will apply to most users. [lists some examples of tooling]

WH: That’s an argument for tooling in general, but I don’t see any consensus that tooling is required for `??`.

JHD: Most JS developers don’t understand precedence, in my experience. So usually, tooling is added.

WH: That claim is stated without evidence.

YK: Are we talking about doing no parens, or expanding parens?

DRR: We forced parens with mixing `??` with `||` and `&&`. We’re talking about whether that’s necessary, and also potentially the precedence.

YSV: I think this should be in the realm of the developer to choose. I don’t think we should be choosing the style.

RKG: I think it makes sense for `||` in isolation, since they’re very similar in semantics, and then I think it follows that it applies to `&&` because it’s another logical operator. Don’t think it applies any further outside of this isolated case.

YK: Generally agree with RKG given the footguns.

JRL: We need to think about the fact that all implementations have already adopted this, and tooling is already adopting and we have ecosystem buy-in and documentation and explainers. If we change anything now, there is an extremely high cost.

### Conclusion

No objections, advanced to stage 4


## Update on Function Implementation Hiding

Michael Ficarra


- [proposal] (https://github.com/tc39/proposal-function-implementation-hiding)
- [slides] (https://docs.google.com/presentation/d/1onxhGdNw0_5Q_iJAJRbKTVlkgb3wlC7q5MXQwrX9udE/edit)

MF: (presenting slides)

YK: I reviewed and I’m fine with the PR

MF: I’d like to steer the discussion to these particular points. (Points to “Discussion Points” slide). I’m willing to reconsider whether name/length properties should be auto-populated.
(Showing example on slides)

WH: I reviewed this and found a bug in propagating down to inner scopes. If you have a function A with “hide source” that contained an unannotated function B that contained an unannotated function C, then A’s and B’s sources would be hidden but C’s wouldn’t.

This bug (which was fixed after I reported it) stemmed from the spec using runtime semantics to specify lexical scoping semantics. It happens to work but it seems brittle; this is mine and Allen's concern. I'm OK with the semantics but we'd like it to be specified differently, to be less brittle against future changes.

What you had in the “Sample Code 1” slide [where `'hide source'` is used inside of a function which is itself in a function which does not have that directive] was an interesting case. We should ask the room what this sample should do.

MF:

WH: This can create issues in the future if we provide ways to list sources of scopes such as entire modules and classes. You’re assuming that you cannot list the source of a class.

JHD: The toString method of a class’s constructor is already defined to do this.

WH: Then there is no way to hide a source within a class.

MF: It doesn’t propagate in that way. When DD was presenting with me, we talked about the syntactic issue.

WH: Put a class inside a function and the directive in that enclosing function?

KM: If you’re going to evaluate that code more than once, this has serious downsides.

MF: But you wouldn’t really want to run it more than once, right?

MM: I'm in favor of the current spec, which is to behave like "use strict", only propogating downward. If you access the source of the outer function, you can see the source of both. The idea of using either of these to guard secrets seems like very bad practice which we should not encourage. The motivating use cases are similar to secrecy wrt what you are hiding but are not motivated by secrecy per se. I would avoid terms which suggest this is useful for security; "hide source" is fine but "sensitive" and "confidential" bug me.

MM: Why not make them orthogonal, so the other directive is "hide frame", and have "hide frame" only hide the frame, and if you want to hide both you use both?

MF: This is a part of the design I didn't recap here. PHE suggested that for any security-related use case there should be only a single option, "make this as secure as possible", because users may not be qualified to make individual decisions about each security feature.
I think it is important that whatever implies to security case, should go to ??.

MM: PHE is going to be here tomorrow, so hopefully we could discuss this then.

MM: I don't mind if they are combined in this way; I would prefer them orthogonal but I am OK with it. I would still preserve other names, so as not to encourage people to treat source code as a place to put secrets.

MF: Ok.

YK: I have a hunch that forcing this to be a stepwise would end up creating ??.  This are like powe rtools  and we probably will be stepping in places that we don’t want to..

MF: I don't think I would be interested in having a combined directive not available. I might be OK with having a third directive for people who want just one of the behaviors.

YK: The use case I thought about that was test frameworks. Debuggers get magic access to source code but test frameworks do not.

YSV: We find it much easier to give a positive response to something that gives developers and library authors the ability to make their implementation details behave like native code. As such, of the two directives we are particularly inclined to "hide source"; that's a very clear user story for us. For "sensitive", it looks similar to "hide source": it allows a stronger protection of information about an implementation detail. However "sensitive" feels like it's also answering a second question: do we want to allow user sandboxing at a sub-frame granularity? That's a bigger question which makes us less comfortable with that directive. So maybe we could split them, but they're related, so we want to bring it up to the room.

One proposal I’d make is to split this into two? But the overlap between the two proposals makes that difficult.

MF: Yeah, “sandboxing” is a very general term.


JHD: If someone was trying to hide secrets already they could do that with `.bind` or closing over the function and not leaking it. The currently-named "sensitive" directive isn't hiding secrets, it's just affecting stack frames and so on. It doesn't let you hide source where you couldn't before, it's just a better way to do it.

MM: I agree that people can use bind to reveal secrets from the source code.

JHD: Algorithms can also be secret. You can obviously look at the source, craft an attack and use it, but this goes beyond that.

MM: That argues for hiding stack frames, but not sources. The algorithm's ability to compute in secret might rely on nobody else being able to see the stack frames growing and shrinking but should not depend on the attacker not being able to read source. Hiding algorithms is a terrible way to hide secrets.

MM: Like I said I'm OK with the semantics, I just don't want a name which implies this is a way to hide secrets. Terms like sensitive and confidential imply that this is a good place to put secrets.

JHD: Agreed, I’m not a fan of the “sensitive” name.

YK: There's a convenience use case for this, which is that there's a lot of tools which find it hard to make stack traces look reasonable. I really see a use case to use these directives to control what debug information gets generated in this use case. It's easy to underestimate how hard it is for test frameworks to hide information about internals and it would be very useful for them to be able to do so.

JHD: [New topic] These are called directives, they should direct something: a verb with a target. "Use strict", "hide source" - I'm OK with these. I would prefer the stack frame hiding one be named in this pattern too. I am also interested in making these quasi-structural, "hide source, stack frame" or something. This proposal has no use case for hiding stack frames but not source, but there are a few folks who have said they do or might want that, and a structural style for directives would make it easy to add that later.

MF: I don't mind leaving the door open, but i hate encoding structured information in strings like that.

JHD: Not suggesting specifying it that way, just from a human-intuitive perspective.

MF: Sure, but it's still a list. If anybody has a specific to that, I would appreciate to hear.

[Guilherme (Netflix)?]: How much security does this actually get you? Someone can just look at the source. I agree with MM that calling it "sensitive" would lead people to think they can actually hide sensitive things. I would suggest renaming and splitting it to make it clear it just hide stack frames.

MF: On the confidentiality of the source text question: there’s a distinction between the code that’s marked as sensitive and the source of the sensitive content. For example, file system reads and network requests.

MF: Code running alongside other code doesn't inherently get access to the network or similar tools which let them get source text by other means. MM previously said we shouldn't make source text a place for secrets. I agree we can't do it perfectly but we can still try to make it better: people shouldn't be able see the secrets in the source.

Guilherme: Can't you just download the code?

MF: The adversary is adjacent code (running along-side your code), not the user.

YK: It is more about signalling to users of the library to get the message what should be hidden from them.

YK: I agree in general source can only be a good place for secrets if it's authenticated in some way. Under normal circumstances if the source is available to the public internet people can get it, so generally speaking people should not be advised to put secrets in their source code. The only way it could plausibly be right is by authentication, but that's hard to get right. Either we can try to make it possible under some circumstances or we can say "don't do that", and I think we should say "don't do that".

JHD: I think the default behavior for "name" and "length" is critical. They are configurable already, I think that should remain fine.

MF: Defaulting intentionally means that you want this to be part of the API.

JHD: If I want to hide, but don't want to hardcode a name inference algorithm or count the arguments, the only way to get those is for them to be populated by default.

MF: I think that is a very good argument that they should not be overridden by default.

RBN: There is an interesting scenario where we want to hide stack frames but not function source code. If we are stepping through a helper during an iteration, we don’t want to show that on stack.

RBN: .net has attributes kind of like decorators which are suggestions for how the debugger should interact with them. There's some interesting compelling cases for hiding frames for debugging, though that's maybe less of a concern for adding to the language itself.

MF: I mention in the readme that the debugger may use the directive as a hint to skip those frames by default. It wouldn't actually prevent the debugger from doing so.

RBN: My point is that this is a place where hiding frames without hiding source would be useful.

YK: I think a lot of the time the name is in the public API and it's hard to make the inference algorithm do the right thing: I agree with JHD that we should populate them by default. It's not the biggest encapsulation leak and people can already hide them if they really want to.

YSV: Firefox already has the ability to black-box functions in the UI. I think a separate proposal might expand what the debugger keyword can do.

RBN: I know that engines can do this, but most of them are black-boxing entire files. Being able to do it on a function level would be useful. I do see that's a slightly orthogonal use from what the intended use is.

YK: I think using browser tooling is not sufficient, and we should consider user space tooling.

YK: user-space tooling is ubiquitous and it's important to think about how it works. I also worked with browsers on the black-boxing feature and it proved tricky to work with, and this does more than that. I think it's useful. On the one hand it's not what this is for, but it's still useful.

YSV: I think that would be a different proposal.

YK: I think it's very close to this one and very small tweaks might be enough.

CP: We are thinking in use this information on devtools to help developers inspect their programs.


JZY: Could we re-work the README? The comments and issues may be addressed in other forums, but it’s not in the issue itself.

MF: There’s a section “How does this affect devtools or other methods of inspecting a function’s implementation details” which sort of addresses this, but I appreciate the comment and we can improve the README.
### Conclusion/Resolution

- Won't touch name and length
- Look into specifying differently for Waldemar/Allen
- Look into more differentiated user story for library vs security case. If we see these are  separable, then we should split the proposal into two addressing each of these use cases.
- Look into readme improvements
  - go through issues and make sure all content is reflected on README
  - mention distinction between privileged/unprivileged code earlier in document
- Possibly choose new directive names depending on discussion in GitHub issue
## Standard Library Task Group for TC39

Presenter:Shu-yu Guo (SYG)

To scale library proposal work via faster feedback loop.

- [proposal](https://github.com/syg/standard-library-task-group)
- [slides](https://docs.google.com/presentation/d/1PJJbKdgwiSjy42jFvcODhPxJ0LEJ3_iMswdApTSyLK8/edit)

SYG: (presents slides)

GMS: In one issue there was discussion about restructuring plenary and doing remote calls.  It’s less than clear about what goes into this call and what does not.  Most things would need this.  Would more frequent meetings address this?

SYG: I would like to address this question after the presentation.

SYG: If I set up the call, who will come? Are there folks who are interested in more rapidly iterating their proposals in this call?
To Gabriel, 1 what kind of proposal should be in here?  I said proposals that don’t obviously have cross-cutting concerns across the language.
UUID stands out as something that can be iterated upon here, adding new array methods, what I presented earlier about adding waitSync maybe done here.  Optional Chaining could not be - cannot be shipped as a polyfillable package.
Hoping it’s one of those “you know it when you see it”—if you believe as a champion that your proposal is very cross-cutting, probably not.

GMS: I thought you needed more discussion more rapidly?

SYG: Right, but with a subset of people

SYG: It’s good to rapidly iterate with everyone.  An hour every two weeks of full plenary would be fine, but has not been asked and would significantly change how we work. As we get bigger, in a world where we’re all meeting all the time—ideally for me, we wouldn’t need everyone to meet all the time— If in future we all agree everyone meets all the time we would not need this.

MF: Can you give some examples of recent proposals that would/wouldn’t be done this way?

SYG: UUID yes. Nullish coalescing would not be.

MF: How about BigInt?

SYG: No, BigInt is too cross-cutting.  I don't have specific requirements, but generally something more specific.

JHD: Not just syntax vs. API?

SYG: Temporal would make sense [for a call]. It’s not that every domain-specific thing that’s complex enough would need its own call...
Means that people don’t need to spin up their own calls.

MF: I don’t have a good idea of what the separation is here.

SYG: That’s good feedback.  It’s not clear whether I should do this - whether I should take my own proposals to this group.

MF: thinking through my own proposals, I can’t tell what [would be a good candidate]

SYG: Function implementation hiding probably not, Iterator helpers perhaps is.  In the repo, one responsibility of the chair group is to guide and mentor people who want to bring their proposal to this group.

MF: This feedback would be helpful.

SYG: That’s what I planned. I’m hearing that it’d be helpful to have some guidelines and examples.

HHM: Built-ins are a good fit here? Things like KV storage be appropriate?

SYG: That’s an existing thing. You mean things of that nature? If we have built-in modules, things like that are a good candidate for this call. But this is not just for built-in modules.

WH: I’m a bit concerned that you mentioned that `async await` would be categorized as library functionality. It’s a change to the built-in language concurrency model. I’m concerned the scope is bigger than what I thought you were saying. (I only realized this misunderstanding after reading the notes. I thought WH said `waitAsync` meaning `Atomics.waitAsync`, while he apparently meant `async await`. I definitely don’t think `async await` is library functionality. --SYG)

SYG: The model is that if a subset of delegates are the ones engaged in a particular proposal, for example, you’re tuned into the concurrency model and understand that stuff; if you were willing to come to this call, it’s fine to discuss it in there. The relevant stakeholders aren’t the whole room. Yes it’s cross-cutting in that it involves the concurrency model.

WH: I like the calls we've been having about specific items, because they were focused on those items.  What is the expectation of people attending those calls?  Is the expectation that people attend almost all of them?

SYG: What subset of people do I expect to attend this call?

WH: Is it expected that the participants will attend almost all the calls?

SYG: I would prefer that.  But it is not a requirement. That’s why we publish the agenda in advance.  It’s asking for people’s time.  It’s fine to skip some. The agendas will be publicised, if there are things that interest you, I’d encourage you to join. These happen frequently enough that delaying a call is faster than delaying 2 months for a plenary meeting.

WH: There are practical problems with that agendas published only a short time in advance. Folks on vacation might miss this.

SYG: I hope we’re not treating our collaborators and stakeholders as we throw something over the wall and hope they see it; if we’re collaborating on something I’ll make an effort to make sure you’re available for the next call. Yes there will be scheduling concerns.

WH: There will be practical concerns with those calls.  I worry we create a new biweekly meeting which is hard to attend because some of us have other regular meetings that will conflict with this.  Posted agendas have gotten fuzzy. I don’t want this to become a meeting you have to join just in case something interesting happens.
I’d rather have well-defined focused subgroups that concentrate on specific subjects like Intl, concurrency, etc., not a general library-related thing; that’s too broad of a subject.

SYG:  Is the same concern or different one? One concern is it’s potentially difficult to find time to join the call?

WH: Those are related, but yes.

SYG: I’m receptive for having domain specific task groups like C++. This makes collaboration faster. I chose standard library as a starting point as a path of least resistance to spinning up faster iteration, to discuss things every two weeks instead of every two months.

WH: Does the group have decision making power?

SYG: No, it produces recommendations.

CM: Are we talking about what the scope of the Standard LIbrary Task Group's mission is or about a general pattern for more parallelism in TC39 overall?

WH: So the group won’t spend time discussing before introducing a Stage 0 proposal?

SYG: What does that mean?

WH: If somebody has an idea, will it get iterated for several meetings in this group before being presented as a stage 0 proposal?

Keith : Stage advancement still happens here. It is just a way to get faster feedback.

CM: Based on WH’s question, are we talking about the std library task group and how it works or are we talking about a general pattern for TC39?

WH: I was under the impression we’re talking about standard library task group.

SYG: Yes, we’re talking about standard library task group

CM: Everything you presented seemed very generalized.

BT: It may establish a pattern.

MB: You mentioned concerns about availability. Over in node we have a tool where people put their availability on a spreadsheet and we generate times for meetings based on it. With tight agendas, there are tools we can use to find times. I’m not saying that this is perfect, but it can help and may work for people. There are tools we can use. We rotate through 3 different times for TSC to hit different time zones. I think that there are ways to utilize some tooling and data to ensure we’re fair to everyone.

WH: Which happens first - meeting agenda or scheduling that meeting? If I’m not interested in a meeting’s agenda, I don’t want to enter my constraints for that meeting’s schedule.

MB: We schedule the meeting first, then post an agenda for it. We have 20 members on our TSC, and we find times where everyone can attend two out of three meetings. It generally works; I don’t attend every meeting, and I request topics I care about to be pushed if I can’t attend. I skip meetings that are inconvenient or have agenda items that are not important for me.

AKI: You have a feeling that you have to be there just in case.

WH: It’s been an issue in TC39 plenary where it’s unclear what’s going to be discussed.

AKI: I think we can make a commitment to keep a narrow focus. We can commit to the agenda and be thoughtful and considerate of everyone’s needs.  If things come up where people cannot attend, they come up with a solution. We don’t have to codify that we should be considerate of other people’s concerns. That’s why we exist. I’m unconvinced that will be a problem long-term. Even if conversation comes up that wasn’t expected, no decisions are being made and there’s always a way to get involved in that conversation.


There’s always a way to get involved in that conversation.

BT: AKI said it.  It’s important this group follow regular order.  Advance agendas. Regular cadence. Following typical committee process.  Take minutes. Approve agenda.
As long as that happens, we should be in a good place. If this plenary fails at doing that, it’s a problem. Not our intention to randomly introduce things into the agenda. It should be well-known in advance.

WH: It’s not that things are randomly introduced, but it’s unclear what’s being proposed. Like surprise Annex B changes. I had no idea from the agenda that’s what was being proposed.

BT: I agree that’s bad.

DE: On that annex  case, we had a discussion in plenary and came up with ideas.  We followed up in an issue and decided to talk about it.  Then you raised concerns and we didn’t go ahead with it.

DE: should we cut off the discussion when ideas are brought up?

WH: [Responding to comments not recorded here about Annex B] I don’t want to relitigate that.

YK: The way I look into this proposal is that people already create ad-hoc groups.  The most rigorous in Intl which more of less is a sub-committee.  We’ve had groups like the class group that was put together ad-hoc and you have to know what’s happening but I thought it was valuable and solved those issues. Those things are happening already; this proposal is just to reify things that are already happening.

If changes make people feel left out, then something has gone wrong.

WH: How is this an ad-hoc group?

YK: The intent is to create clarity. There are situations where an ad-hoc group is created and it would have been better if everyone were aware of it. I think this proposal is...

SYG: Correct, more or less. It has the advantage that smaller scope proposals, that do not need dedicated calls, if this exists, it’s a way for those champions to get faster feedback.

YK: If someone was upset about not knowing about a meeting, it would be an easy objection if someone felt snubbed.

SFC: Status updates and design discussions - my experience in Intl and other groups, in unicode for instance, there are two things: status updates (getting people unblocked).
And the other is in-depth design discussions. What’s your intention for this meeting? In-depth design discussion or more project managing?

SYG: I envision most of the time to be spent on design questions.

SFC: Both of the calls are design suggestions.
Bandwidth on status update takes up too much of the call.  Your proposal is a limited bandwidth time. One hour a week seems very limited for design discussions.  Think about the split of status updates vs design discussions.

SYG: That's good feedback. It all hinges on the willingness of people to do some of the design work in a remote work. If people are open to it, willing to do 2 hours every week for in-depth design discussions, that’s great.

DE: I agree in substance, but for one, I don’t think a call like this is about decisions, more about discussions. I understand why that would make people nervous. This is important to people to speak other than plenary. Some people are more comfortable talking in plenary than others. We were able to have deep design discussions [in Intl group] because we had this additional setting. We have different communication styles, e.g. github. We have not seen a decline in plenary.  Plenary gets to see things where issues are already worked out and reviewed. We’ve seen details about Intl being [call garbled?]

For Intl, it started informally. I contacted the committee briefly.  It didn’t need formal status. It was hard to convince people it would be worth it, because bringing people together didn’t require that buy in. One thing we learned in Intl was you can’t work everything about the calls out ahead of time. Shu has lots of great ideas about this. In Intl we haven’t had to refer to any concept like that. Things went pretty smoothly just by sharing project goals. A lot depends on the culture of the people who participate. Shane made a good point about status updates and design discussion.  There was another point about libraries not being a solid area of specialization. I disagree. There’s a lot about building the library, there’s a lot of technical work. Counterintuitive performance issues, a lot of design work to unify.

Library is not seen as an area of specialization or concrete area.
There’s a lot of conventions to enforce.  We saw counter intuitive performance concerns like Shu showed.
Related: outreach groups - proposal champions can go to them for review.
We can think of it as a meta champion group.  There is overhead in creating a call. So we can overcome the deadweight loss.

SFC: I think Myles comments...
A key concept is that in Intl for example, we have an expectation that core members will come every month but we also publish an agenda ahead of time so people who don’t go every time can go when they’re interested. We have a GH project board with a list of topics anyone can submit to, there’s some prioritization; we use that as an agenda for the design discussion part of the meeting.

The framework I would propose as model would be to set the expectations for this group should be set ahead of time.
We have enough experience that says “we should just meet up every two weeks” is not the right way.

If we were to put a solid framework down ahead of time that this is how the meetings are conducted, it’d be more successful. A framework where members can submit agenda items or discussion topics ahead of time, then asynchronously interested parties can say which topics they’re interested in and schedule accordingly. It’s hard to schedule meetings because of time zones. Mornings in CA are congested for people. If you have slots at different times of day, you can slot the topics into those. No more than 2 topics per period.

SYG: Thank you. Are you positive on the general sentiment, but it’s not concrete enough to participate yet?

SFC: Generally yes, but I think that a way to have this higher iteration speed. The expectation that everyone is going to attend the meeting is challenging.

AKI: I have a question as to the broader goal. Are you talking about spinning up something that starts loosely organised and then gets formalized into a task group.  Or are you saying we could take specific things out of plenary.

SYG: If I formalize it as a task group, not sure what that buys me, but formalizing the structure of the call is what’s important. I thought the way to do that was a task group. But whether it’s a task group or something else officially sanctioned doesn’t matter to me.

AKI: I’m wondering if the only difference of this and champion of proposals talking to each other is process?

SYG: Also setting norms.  Today nothing stops champions and stakeholders working out the details between plenary but in practice it does not happen.

AKI: That sounds amazing.

SYG: I hope by having a regular thing people participate in, we can develop a norm.

SFC: The difference between this and a champion group is in the latter, they reach a collective understanding, then in committee, some person not in the champion group has a problem with it. This is an attempt as a TC39-wide thing to find those problems earlier and iterate faster.

AKI: As one of the persons who asks people to read slides and agenda before the meeting, I’m a fan of this.

WH: Task groups: from the point of view of ECMA formalities, it makes no sense to form this as an ECMA task group. Task groups are fairly separate from each other — in the past TC39 had task groups for ECMAScript, C#, .NET, etc.; this is not one of those.

WH: Examples of conference calls working well, like Intl, classes, decorators, all were focused. What I don’t yet see is what is the focus of this. The expectation that most people attend almost every meeting works in focused projects. If we have a lot of disparate libraries here, it makes more sense for you to attend only the ones that you’re interested in on the agenda.

SYG: That’s true. Having a core set of folks interested in evolving the standard library - we discussed that. A formal regular time set aside, if you are interested you come, if not you don’t. I did not come here with a full framework. I’d like to work with Shane and folks that want a specific framework. If your proposal is not discussed, you don’t have to come.

YK: I thought that was good feedback. We talked about less consistent attendees—there’s some value in people that show up less often. If it’s a free for all and people don’t always come, having some people that are always there can provide some continuity for others.

SYG: I don’t want there to be FOMO. But there needs to be a core group for continuity.

AKI: Great idea to have a way to collaborate outside of plenary.

MLS: If it involves more than a third or more of plenary, probably doesn’t make sense to do it.

SYG: I do not intend this to be a mini TC39.  If people want that, let’s just do remote plenaries.  Whether or not that makes sense realistically, it’s just not going to happen.  Ping me on IRC if you want to participate.

**audience applauds Shu using 59 mins of a 60 min timebox**
### Conclusion/Resolution

SYG: Actions items for me after the feedback I’ll draft with other people that would like to collaborate to come up with a framework like Shane proposed. And I will go through inflight proposals and will reach out for the ones I think are good for this call. Next meeting I will return with a formal structure and formal call to participation.


## Array select/reject for Stage 1

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/jridgewell/proposal-array-select-reject)
- [slides](https://docs.google.com/presentation/d/1MyeGeh8c5EIXfVDzGpAPydsDVqK3qEFSTqXVCrCyj5Y/edit#slide=id.gc6f73a04f_0_0)

JRL: (presents slides)


RKG: Seems like it would suffice for these to just be in Underscore / Lodash, but regardless, to address what “filter” means: I don't think either of “filter in” or “filter out” are the right way to look at it; the intended meaning is more like “filter on”. When we say numbers.filter(isEven), we're filtering “on” even numbers and leaving out everything else. And in the general case, it might not even be easy to write a predicate that specifies “everything else”.

MM: I am sympathetic to the proposal even though I reject it. If we were adding new functionality fresh to the language, I agree these names are better. But we’re not adding new functionality, we’re doing redundant naming of existing functionality.
Does it pay for its weight? My opinion is no. Is there a story you can tell such that when people think “filter” it has the right meaning? What does a blue filter do? It lets in blue light. We need to optimize for reading code, not writing.  We are not relieving the burden of needing to understand “filter”. Now they need to know two names instead of one.

JRL: There is definitely a cost to adding alias to an existing function, but I’d like to visit that after the queue is empty.

JRL: I have an alternative proposal. A blue filter is letting the blue light in by removing everything else.
[room momentarily disagrees about what an optical blue filter is]

Tierney: On the blue filter, you’re arguing different sides of the same perspective. It’s a 50/50. Some people will see it the way you think, and others will see it the opposite of what you think.

MM: If we teach it using the metaphor of the blue filter, does that solve it?
Tierney: No.

MM: Justin: is your expectation that if people used the metaphor of the blue filter that they would have the correct intuition?

JRL: I am still of the opposite opinion. We’d have to ask someone who did not know.

[too fast back-and-forth still about what a blue filter is]

HMM: Filtering coffee: what remains and what do you get?
...
HMM: It differs across [spoken] languages.

JRL: If we standardized on two names for filter, would make sense to lodash alias select again.

Jordan: Ruby used ECMAScript as precedent

AKI: My mental model of filter has changed over the years. In E-commerce you use filter to remove things when you’re shopping for something. When you choose to filter, you are choosing to remove those.

WH: In e-commerce when you filter results, you keep the things for which the filter expression returns true.

[back to optical filters, red this time]

[discussion of in and out]

YK: Feels like this is good if we’re a linguistics comittee but we should only discuss it if we have evidence that a lot of people are confused by this. When I came to JS from Ruby I learned the word filter and didn’t have a problem.

JRL: In the last meeting I raised that on IRC and I got some agreement.

YSV: To bring up Felin’s presentation from Berlin, what if we told people to pronounce filter as “filter by”?

JRL: That relates to my alternate proposal. We can forget about select and reject and just have Array.prototype.filterOut [as opposite of filter]
We can bikeshed the naming.

YK: What if the name was just reject? Do the people who object to `select` object to `reject`?

DR: Did lodash remove the alias because...

JRL: They removed all aliases, not just select.

RBN: I’m not generally opposed to having an alias for filter and an opposite, I can’t agree to “select” because there are languages where it means “map”.  I would find it extremely confusing. I do think it would be valuable to have an opposite of filter because if you have a reusable callback, you have to wrap it to negate it. But `select` is too much confusion. And `reject` is overloaded with Promise rejection. Generally in favor, but not with the names. And in .NET, `SelectMany` is synonymous with `flatMap`.

AS: In Haskell, Ocaml, filter is used that way.

JRL: Yes, I think that’s why we chose filter originally. I disagree with all those but I understand the precedence decision.

MF: A more realistic way of approaching this is to add a partition function. It’s common in functional languages; lodash and underscore have it. It takes a predicate and returns both.  It’s in Lodash.  This is new functionality.  So you would be more successful by advocating for that.

JRL: Downside is that you have to create/use two arrays at the same time.

MF: We could make it lazy.

JRL: (laughs) That would be a big change.

YK: I think “reject” is… Someone talked about Promise.reject but I don’t really care; we are crossing a lot of namespaces.  Two things Ruby does.  We should not copy lots of aliases.  We might want to copy negative names.  In this case it’s plausible.

JRL: Lodash has reject and people are using this. Whatever name we have, there is users using that.

DRR: One of the things I will urge as caution - we have Extract/Exclude.  Even the creator doesn’t remember what they do. It’s cute when these things have some sort of phonetic similarity, but...

SCC: Names for these functions predicates are weird. I’ve learned them and I just want them to stay the same. No one can agree on `reduce`. It’s basically bikeshedding and my preference is to stay consistent.

MM: There are other APIs I think are worse that I despair we can’t fix. Maps will have a `map` method, Maps have a `set` method. Sets will have a `map` method...

???: and `slice` vs. `splice`, `substr` vs. `substring`; I just have to Google for it every time.

YK: shift and unshift have this problem.

WH: I’m not confused by `filter`. I would be confused by `reject` because of Promises. If you want a name for the inverse of `filter`, Common Lisp uses `remove-if`, which sounds like a good unambiguous name.

TAB: Reading the room, some people want no change, keeping filter is good, adding an anti-filter would be good in future.  Can we agree to find a name for the anti-filter?

JRL: I can agree to not have an alias for filter.  How about we approve only the inverse operation?

CM: This is a waste of committee time.

JRL: But 700k downloads per week.

CM: It’s not worth it.

YK: Jordan has shepherded many small proposals like this.  We could have rejected them for the same reason.

JRL: Why have `map`/`flatMap`/`forEach`/etc if we have `reduce`?

GMS: But `reject` doesn’t do anything new, it just hard-codes something the user should have written.

JRL: The same for `reduce`. It's all just a reduce.

BT: We don’t really reject stage 1 for waste-of-time reasons.

WH: Yes we do.

YSV: We were primed to respond in a particular way because of the order of presentation.

JRL: I am seeking consensus for Stage 1 for the inverse filter. We can wait till tomorrow.

