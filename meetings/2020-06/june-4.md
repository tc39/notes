# June 04, 2020 Meeting Notes

-----

**In-person attendees:** (none)

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Yulia Startsev       | YSV            | Mozilla            |
| Jack Works           | JWK            | Sujitech           |
| Rick Waldron         | RW             | Bocoup             |
| Caridy Patiño     | CP             | Salesforce         |
| Ross Kirsling        | RKG            | Sony               |
| Sergey Rubanov       | SRV            |                    |
| Rick  Button         | RBU            | Bloomberg          |
| Sven Sauleau         | SSA            | Babel     |
| Istvan Sebestyen     | IS             | Ecma         |
| Keith Miller         | KM             | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Waldemar Horwat      | WH             | Google             |
| Pieter Ouwerkerk     | POK            | Stripe             |
| Bradford C. Smith    | BSH            | Google             |
| Mark Cohen           | MPC            | PayPal             |
| Chip Morningstar     | CM             | Agoric             |
| Jason Williams       | JWS            | Bloomberg       |
| Felienne Hermans     | FHS            | Leiden University  |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Ukyo Pu              | PSY            | Alibaba            |
| Philip Chimento      | PFC            | Igalia             |
| Mattijs Hoitink      | MHK            | Apple              |
| Marja Hölttä         | MHA            | Google             |
| Rob Palmer           | RPR            | Bloomberg          |
| Shane F. Carr        | SFC            | Google             |
| Mary Marchini        | MAR            | Netflix            |
| Jordan Harband       | JHD            | Invited Expert     |
| Kris Kowal           | KKL            | Agoric             |
| Kevin Gibbons        | KG             | F5 Networks        |
| Gus Caplan           | GCL            | Invited Expert     |
| Ron Buckton          | RBN            | Microsoft          |
| Shu-yu Guo           | SYG            | Google             |
| Daniel Ehrenberg     | DE             | Igalia             |
| Michael Ficarra      | MF             | F5 Networks        |
| Justin Ridgewell     | JRL            | Google             |

## Iterator helpers update

Presenter: Jason Orendorff (JTO)

JTO: Iterator helpers: want to make sure that the proposal champions/spec authors - compromised approach, want to briefly present that

JTO: (Presenting issue: https://github.com/tc39/proposal-iterator-helpers/issues/97)

JTO: ask for JHD and KG for agreement.

JHD/KG: ok

KM: Why have one function object? Answered in IRC please report here

## Realms, Stage 2 update

Presenter: Caridy Patiño (CP)

- [proposal](https://github.com/tc39/proposal-realms)
- [slides](https://docs.google.com/presentation/d/1TfVtfolisUrxAPflzm8wIhBBv_7ij3KLeqkfpdvpFiQ/edit?ts=5ed5d3e7#slide=id.p)

CP: (presents slides)

GCL: Clarifying question: import() on realm vs compartment -

CP: I think that they are analogous. When you import inside a realm, you are running the realm itself with the intrinsics of the realm and the module graph of the realm, versus in a compartment, when you run import, you are importing in the existing module graph, where you incubate the compartment, does that answer your question?

GCL: The distinction is that they are a separate module map?

[slide 12](https://docs.google.com/presentation/d/1TfVtfolisUrxAPflzm8wIhBBv_7ij3KLeqkfpdvpFiQ/edit?ts=5ed5d3e7#slide=id.g86384024ee_2_29)

CP: Yes. If you create a compartment like this, and you try to do an import out of this compartment, the compartment will import the code in the current realm, which is the realm that created the compartment. While if you do import here it is going to import into the map associated to your realm

GCL: Oh, right, so I meant if you create a compartment in a new realm.

CP: Yes, if you create a compartment in the new realm, it will import into this realm.

GCL: So, I meant, if that's the only distinction, that's fine. I was just wondering what's the advantage of creating a compartment in your new realm. If it's just an ease-of-use thing, then that's fine.

CP: I don’t know if MM is in the call, but I think we settled on the idea that since these two things are composable, the compartment itself doesn’t have a brand new module graph but I feel that someone who is working on compartments - maybe BFS can talk about that.

KKL: I can speak to the compartment. I believe that the compartment API does have an independent module map. But a compartment constructed from the compartment constructor within the realm would use the intrinsics of that realm.

GCL: That makes sense, yeah.

JWK: If you change the host hooks of the compartment, then the compartment shared model graph of the hosting realm, I think that might break the code; For example, I’m writing the rewriting the _fetch source text hook_ to provide source text from another position other than the host hook, then if it accidentally reuses the already-imported module, the program breaks. So I think compartments should have an isolated module graph.

CP: I think that’s what KKL is saying, a compartment has its own module graph, and you have the option to decide per-module which one you want to use, whether you want to use a module you already have in-memory from a realm or the one in the module graph you have from the compartment.

CP: (continues presenting slides)

DE: As CP says, in the web platform, all global objects are associated with "environment settings objects" [and Realms' environment settings objects forward up to the window or worker where they were created]. There are some places where the web platform tries to get stuff directly from the global object, and to make this work mechanically we would need to funnel everything through this settings object and then up to the enclosing window or worker, because each realm is created within a window or worker. Thanks to Domenic Denicola (DD) for pointing those out. But so far I don't know if this [mechanical point] is a significant question. I think the next question is more significant.

CP (continues presenting slides)

SYG: Thank you for taking feedback to heart, I heard you were getting a TAG review as well.
I think speaking purely as an engine implementer, I think realms are not very problematic, the concern here is more integration with the web platform, and it seems like there is a path forward there maybe, given the use cases you have presented which I found very useful, I was missing that from the explainer. There is one thing from the template use case - it seems like you have some performance expectations around how realms are implemented. I don’t use lodash tpls, don’t know how they work, And you are saying that with realms, for each template, it would create a new realm? Or it would create a new realm - I can’t imagine it would create a new realm given that the point is to not reuse globals.

CP: we have JDD in the call, he created Lodash so he can provide some feedback I think the point is that you want this generated code to run in an environment that is as clean as possible, and that way the code that you’re running there, which in this case is a template which is compiling to a function, ???
You could set the `_.template` to reuse the same Realm as you can freeze the Global object from it, so you don't need a new Realm for each usage.

You could do this in an iframe today, you’d need to keep it connected, which leaks access into the iframe’s global object, plus the iframe is a lot heavier.

SYG: So there could be different expectations around how lightweight realms are. V8 in particular - this is not a blocker or even really a concern - but currently V8 does not lazily load any globals, including the intrinsics, it has made the tradeoff that instead of lazy-loading stuff it would eagerly do everything to save on latency later. So if we have realms as a way that folks think are a lighter weight solution to creating this stuff (because iframes are currently very heavy-weight), that might force changes I guess, it's a implementation concern but its not really a problem with the design, it could force architecture changes and that might be a bigger ask then than what it seems like right now. I just wanted to put that out there, it’s not really an issue for stage 2. I’m happy with this for stage 3 in the future, I’d like to see acceptance from the web platform with the HTML folks and the TAG review.

JWK: [slide 15](https://docs.google.com/presentation/d/1TfVtfolisUrxAPflzm8wIhBBv_7ij3KLeqkfpdvpFiQ/edit?ts=5ed5d3e7#slide=id.g86384024ee_3_0) In this slide, it imports the plugin API from the main realm, and expose it to the subrealm, so it’s possible to get the main realm’s Object constructor from the subrealm. Is this another concern of the realms API? or another of the SES proposal?

CP: As I mentioned when I stopped by this particular example, if you really want to have a clear separation between the two sides you could use a membrane, at Salesforce we do use a membrane there, that way the identity of the objects coming through the membrane are fixed, so that you don't leak constructors as a way to access globals from the other sides. At this point we have very advanced membranes. We think a membrane there would work just fine. This hazard is not something new, this hazard exists today when you go to load the VM module in node, when you go to create a new Context to evaluate code. By piping new globals into the new realm. And in many cases you don’t really care because the code that you’re going to evaluate there, you’re not worried about it doing its own thing, because it’s not about security it’s about boundaries, but if you really want to have the separation you can still do it with some fancy code, like a membrane in this case will just do the job.

JWK: So is the membrane included in the SES proposal?

CP: No, membranes is not a proposal at this point, we have implementations of membranes in various ways becoming more and more popular these days especially with ??? membranes and things that framework do to detect updates in object graphs.
But we’re not proposing a membrane, we’re not proposing any of that, my personal opinion is that membranes can be done in user land, and if we really do need something for membranes we can do in committee.
This is the same as if you think about functions, when you pass arguments to a function, you might be leaking things from a different realm, because you might be calling it from a different realm.

JWK: So, the membrane is implemented in userland. It’s easy to make mistakes and leak the constructor accidentally.

CP: yea proxies are complex things and you have to be careful, But again we’re not proposing a security boundary, we’re proposing an encapsulation boundary, and this hazard exists today. Think about it, ??? and somehow you call it from an iframe or another realm, you’re leaking that, and we do not expect that to be prevented. So it’s a hazard that exists today in the language when it comes to having multiple realms interacting with each other in a synchronous way.

LEO: Just wanted to mention that we’re also getting a lot of back and forth with the SES group, and we've been discussing these concepts at large. So I invite everyone interested in membranes and ses-related things to come to the meeting.

CP: Yeah. We have a weekly meeting, so you can come and we can answer any questions you have there.

Is there anything that you foresee that we would need to get to Stage 3 from this committee other than what SYG said, getting a thumbs-up from the TAG review? Is there anything you’d like to see before stage 3?

(silence)

RPR: ok, nothing on the queue

CP: Thank you.

LEO: I actually have a question for the group, just want to make sure, I’m going to say in the notes that I believe the next topics would be getting the thumbs up from the HTML group and the TAG group. After we get that as positive intent, to bring that back for stage advancement. If there’s anything else I’d like to bring that back for stage advancement.

YSV: mention that we agree a lot with what SYG mentioned, there is skepticism on our side regarding how this fits in with the broader web architecture and we have some concerns there, but we’ve been in touch with the champion group and will continue to do so.

### Conclusion/Resolution

- Capture thumbs up reviews from the HTML and W3C TAG groups before Stage 3 advancement

## Smart Unit Preferences in Intl.NumberFormat for Stage 1

Presenter: Younies Mahmoud (YMD)

- [proposal](https://github.com/younies/proposal-intl-number-format-usage)
- [slides](https://bit.ly/intl-number-format-usage)

YMD: (presents slides)

WH: Where is this list of various usages coming from?

YMD: The CLDR committee published the unit preferences themselves. The links are going to be added to the proposal. If you look at cldr section of common data units, you’ll find that info.

WH: You mentioned usage settings for things like baby heights and so on, so how deep does this rabbit hole go? How many usages are there?

YMD: There is already some standardized usage, for example baby heights, for example in the US the use of only inches rather than feet and inches for baby heights, and also for person height feet and inches. If they found more usages for interesting things, then we can add it.

WH: How many usages are we talking about? Tens? Tens of thousands?

YMD: I don’t think it’s tens of thousands, but I’m not sure right now how many usages are in the CLDR.

SFC: Here’s a link to the CLDR data (https://github.com/unicode-org/cldr/blob/master/common/supplemental/units.xml#L255), it’s on the order of 10 to 20 right now and it could grow, I think the thing we should do here is what we did with the original units proposal, which is that we pick the usages that are the most important to the web platform and pick a whitelist.

WH: How does somebody override units? For example I am in the US but I prefer heights in meters, how would I change that as a user?

SFC: I can take that. User preferences is another proposal that is currently at stage 0, but I would like to start pushing through the staging process. Preferences for units is one of the things in the user preferences proposal. The short answer is that the locale identifier has ways to expand the user preferences, and that’s encapsulated in the user preferences proposal. And this is one of the first questions we always get when we talk about smart unit preferences, and the answer is that we’re hoping to piggyback on the UTS-35 unicode locale identifiers in order to be a vehicle to specify user-specific overrides.

RRD: I’m wondering if that couldn’t be some new way to fingerprint users? Did you open a review with the TAG group about this proposal?

YMD: TAG group? I don’t think so…

RRD: My concern is that you could actually try to print some strings using a bunch of different units and use that for fingerprinting users. So maybe that’s something that should be reviewed.

YMD: Do you mean like for knowing where the user is or what is their preference and everything.

RRD: Yes. Using all of that preference system to actually uniquely identify that user.

SFC: What I was just talking about in terms of user preferences, that’s specific to the user preferences proposal, and fingerprinting is going to be one of the top things to discuss. When it comes to the proposals that are only dependent on CLDR data for reasons i've mentioned before…ss This CLDR data is based only on the browser version. The browser chooses which version of CLDR to ship, so we’re not exposing a new fingerprinting vector.

RRD: that absolutely answered my question

DE: I just wanted to clarify the role of the TAG here. I just wanted to clarify that, initially, we have asked for TAG reviews when proposals are approaching stage 3, so that we don’t waste their time too much. Now they’re open to open both early proposals and later spec reviews. So at the same time we should not treat them as the only group to ask whenever we have any concern about the web platform. We can reach out to more and more platform experts as things get closer to finished. Let me know if you want help filing for TAG reviews.

MPC: back to RRD question, not sure SFC answered, idk if the individual preferences are usable to detect the unique preferences to identify the user

the attack I'm envisioning is you check for edge cases to find a combination of preferences that uniquely identify the user.

SFC: I think DE can speak a bit to this as well. I think there’s 2 places where user preferences can originate from. The one source is CLDR data which is deterministic based on the browser version, the other source is the user preferences, which is currently not available on the web platform. Currently in the web platform, the only available locale information are language, region, and scripts. There's no other way to access the user preferences. That vector simply doesn't exist. Supporting additional preferences, such as preferred units or first day of week, is what the user preferences proposal is hoping to add. We want to champion that proposal because this is one of the top feature requests that we get. It's a separate proposal - currently the scope of that proposal is to add a new property called navigator.locales, and navigator.locales would fully encompass all user preferences. So in terms of crawling the API for edge cases in user preferences, those would only come from two sources, CLDR or navigator.locales, the latter of which does not exist yet but will be proposed.

MPC: It sounds like this proposal doesn't add any fingerprinting possibilities, but the user preferences proposal might.

SFC: The attack is potentially relevant to the user preferences proposal. On the one hand user preferences is a feature request that we get over and over again, but on the other hand it's a fingerprinting vector. We want to support user preferences while balancing the new fingerprinting vector. So, not for this proposal.

DE: This proposal exposes non-preferenced locale user data. These are separate things that are both valuable. If you pick through a server environment, it would never make sense to expose user preferences to a server environment. Instead, you'd thread through preferences from some other source, such as saved user preferences or, maybe in the future, HTTP headers.

YMD: If we got accepted for Stage 1 we should clarify this point more before Stage 2.
And also reach TAG before Stage 3.

WH: The only reason that the user preferences proposal would exist is because of this proposal. So this proposal has user preferences as a consequence.

SFC: The two proposals are tied. User preferences are not only for units but also for things like the first day of week, calendar system, collation, etc. So it’s a feature request that’s been around for a while. Unit preferences is likely to be one of the more common use cases for user preferences, and I think it perfectly reasonable for the committee to say that the unit preferences should not progress to stage 2 until user preferences advance. Like DE said I think unit preferences are useful even without user preferences, but for sure the two are related.

WH: There is a difference in how fine-grained things are. In a UI you could have a preference for metric vs. imperial. But this thing extends to adding preferences for things like baby heights, which is getting quite more fine-grained than I’m comfortable with.

SFC: UTS-35 right now only lets you pick imperial or metric. But there's also a feature request to allow UTS-35 to specify specific units for specific usages. But that’s a decision that we’re hoping to leave up to UTS-35 and we’re just hoping to leave that up to them, while sharing what’s important to the web platform.

WH: Even within metric you’d have prefs for wind speeds which can be either in km/h or m/s, etc...

SFC: I’ll make sure to mention you, MPC, and RRD in discussions when we have them in TG2.

DE: I want to note that the unicode consortium which has CLDR is also a standards committee with experts focused on i18n. I like the idea SFC has on working with them and doing things at that level if things are wrong, and there’s already been this discussion about subsetting, so if you have feedback for CLDR, then we have a liaison relationship (or if we don’t we can establish them) between Ecma and the unicode consortium, but I don’t think this should be the body where we make those decisions.

RPR: The queue is empty. Would you like to ask for stage 1?

YMD: Stage 1?

(silence)

RPR: Congratulations, you have stage 1.

YMD: Thanks to my colleague Hugo as well.

### Conclusion/Resolution

- Stage 1

## Intl.Segmenter for Stage 3

Presenter: Richard Gibson (RGN)

- [proposal](https://github.com/tc39/proposal-intl-segmenter)
- [slides](https://docs.google.com/presentation/d/1Pe9eVhgK93cgB3KCufTQvzqCjIYj3RRxJaOeNIbWN_A)
- [spec text](https://tc39.es/proposal-intl-segmenter/)

RGN: (presents slides)

WH: [Referring to Open issues slide] What problem are you trying to solve here? That’s unclear from the presentation.

RGN: I’m going to switch out of the presentation, to show this comment from MM (https://github.com/tc39/proposal-promise-any/issues/38#issuecomment-606963685) it’s a hazard for SES and other things because it creates a covert communications channel. You want to be able to pass the segments argument so you’ve hardened it, but that hardening is trivial to bypass.

WH: What is the threat model here? What is communicating with what?

RGN: Imagine one side of a membrane supplies a segments object to the other...
You should be able to iterate over the string, you should not be able to interact with the surface area other than what’s been blessed.

WH: Still unclear as why this is a useful scenario to worry about? What are you protecting from?

DE: WH, I have my doubts about this as well, but I wonder if we can discuss the internal slot issue at the end?

RGN: Okay, we’re close to the end. (continues presenting slides)

RGN: (the comment from MM) Do we want to walk through this? Does everyone understand the risk here?

WH: I do not understand why this is a risk for an application of iterating through segments.

RGN: The risk is not specific to segments. The risk is a general one of internal slots exposed by getters containing objects rather than primitives.

WH: Wouldn’t that apply to all internal slots? Like all private slots anywhere?

RGN: It does, and as commented here, today, all of the internal slots contain only data. And we’ve avoided for the sake of aggregate errors putting an object in an internal slot.

WH: So why do we have closures in the language? Closures have internal slots. If this thing breaks with any internal slots then it will break with closures.

JRL: To explain this concretely, what we mean here by exotic objects are things that are in the global object by default. So by default you have access to the prototype and the getter object on that prototype. When you create a new realm and you’re using a membrane to pass a segmenter object from one side to the other side, I can now get the global segmenter prototype with the get function that’s defined on it, and then invoke on that getter the Membrane-wrapped segmenter that I passed through (`myOwnRealmsGetter.call(wrappedSegmenter)`).
Now because it’s a proxy and not the segmenter, the proxy is gonna throw but there's no way we can capture that correctly, or fix that correctly, because that's how internal slots work. The risk here isn’t huge and it’s possible to overcome if you were to patch every getter that accesses an internal slot that holds an object, but it’s extremely expensive to do it that way, it basically means you have to go through the entire prototype and wrap every getter, and then every time we introduce a new getter it's potentially a new thing we have to fix.It just becomes easier if they are all defined as data properties.
Then there's no way to invoke the getter function on the proxy directly.

DE: This sounds like a reason to not have anything that uses internal slots, because anything that has internal slots could be proxied across. This seems absurd

RGN: Internal slots aren’t the risk; it’s the getters that are the risk.

DE: Why are getters different from other things that access internal slots?

RGN: Because if you're accessing an internal slot directly as an own-data property, the proxy gets to intercept that. The getter bypasses the proxy. There’s no handler that’s invoked when I call the getter and pass the proxy as the receiver.

DE: But that's what a membrane is the membrane wraps the object and proxies it what it gets,
I still don’t understand what’s different between getters and other methods that access internal slots. Just because getters have a way of getting around it, doesn't mean that you have to have a different membrane unwrapping.

RGN: There is no opportunity to intercept anything if I invoke the getter with the proxy as a receiver.

DE: That's true about other non-getter methods as well unless you wrap it inside a membrane.

RGN: What kind of method are you referring to? For an own-data property, there isn’t one.

DE: Whenever you’re passing the getter from one side of the membrane to the other, that’s when it should get wrapped.

RGN: But you're not passing it at all in this case. I've received segments from the other side of the membrane, and I’m invoking the getter from my side.

DE: why is that different from invoking another method that's not a getter.

RGN: What method do we have that looks up an internal slot on the object?

JHD: Function.prototype.toString is one such method.

SYG: (asking about exotic object terminology in TCQ)

DE: Why are we suddenly talking about internal slots being exotic?

RGN: That is vocabulary from MM, I’m also a little concerned as to why it’s being called exotic, but it doesn’t change the nature of the issue

JRL(KM?): I thought that was what we just called objects that have internal slots per the spec.

SYG: Exotic objects are not those with internal slots. Any object can have those.
Exotic means the object has special behavior.
If it’s proxies, if it has weird stuff around index properties, those are exotic objects. Just because you have an internal slot doesn’t mean you’re an exotic object.

RGN: One thing I want to hit before that, is that the bypasses we have thus far at least as observed here, expose data not objects. It’s primitives so the concern with the bypass here is having an object, which is more powerful and dangerous.

DE: I think this deserves a dedicated presentation, this is a major constraint in a language evolution, it comes up in other cases like Temporal, and it doesn't make sense to me.
You mentioned this precedent from AggregateError. I mentioned in that discussion that I was only agreeing to it because there were other concerns not related to the internal slot issue, namely argument order. So if this is coming from MM, then it would be good to have MM in the discussion, and have a dedicated presentation to decide whether to adopt this constraint.

RGN: I think that is a good idea and I am willing to table that in pursuit of; in order to not make a regrettable mistake here.

So there are 4 options for ways to sidestep the issue:
Change from accessor properties to own data properties, the same as we did for AggregateError;
Change from an accessor property to a method that returns a fresh segmenter;
Strip off the segmenter property altogether; or Strip off all properties (“segmenter” and “string”)

DE: My current feeling is that we do none of these, and I’d like to discuss this more in the context of the internal slot hazard.

RGN: I am not comfortable advancing Segmenter if it's going to present a new security risk.

DE: I’m not asking you to advance it in light of that. If you think it runs into this - I’d be okay with moving (removing?) the segmenter property. This property seems pretty important.

RGN: Why do you think it is acceptable to leave string but remove segmenter?

DE: I think it’s more important to be able to go back to the string than back to the segmenter. That’s just a value judgment - maybe that’s because that was the earlier state of evolution of this particular proposal, that I think that.

WH: I am also very skeptical about removing exotic internal slots. If this is a security hazard, then so is Array.prototype.sort, because it calls a function, and functions have hidden internal slots which can contain anything. So if we can do Array.prototype.sort correctly, we should be able to segment a string correctly whether the output contains a closure or not.

RGN: You keep bringing up closures. Why?

WH: A closure contains internal slots that can contain anything.

RGN: But a closure is not reified.

WH: What do you mean by “not reified”?

RGN: ECMAScript code can never have a reference to a closure.

WH: Every closure is reified.

RGN: How do I get a variable that contains a closure?

WH: `let x = …; return function foo() {return x;}` returns a closure that can refer to state in the environment.

RGN: But that’s not reification. I never have access to an object that is a closure. I only have access to language values, and closure isn’t a language value.

KM: Do you mean scope? You can’t get access to lexical environment things.

WH: I’m talking about closures, not lexical environment records.

RGN: There's no code like that, I can never pass a closure as an argument.

WH: I don’t think you understand what a closure is.

JHD: First of all, to clarify terminology, the issue is not objects in internal slots. Tons of internal slots already hold objects. The issue is things that expose objects held in internal slots Closures do not do this because the code that is in the function already has all that access, it’s just preserving that access. What this means is that if I’m holding a closure I cannot get access to the variables it can see unless it returns them, and that can be wrapped by membrane-like patterns. The separate thing is, the fact that most, but not all, internal slots that are exposed to users are primitives, does not change the fact that… there actually is an internal slot, [TypedArray.prototype.buffer](https://tc39.es/ecma262/#sec-get-%typedarray%.prototype.buffer).
The other question is, there was some conversation earlier about the throwing behavior, everything except Array and Error methods have prototype ???

So that is a decision or flaw in the design of Proxy that is not relevant at all, and I think we should leave it to MM or maybe KKL to present arguments about communication channels around that.
There was a lot of back and forth with closures and what it means. So I hope it clarifies that.

RGN: There are two kinds of issues, but both are concerns. One is that a getter that looks up internal slots will throw when it receives a proxy. The other is that such a getter will return values that have escaped deep freeze, which is acceptable when they are primitive but not when they are objects.

SYG: In general, I’m not comfortable with folks trying to represent MM point of view as best as they can as I don’t hear consensus for satisfying his constraint.
Whereas the disagreement seems to be that I don’t hear consensus to satisfy his constraint at all. MM raised a point about an SES security thing, and there is not agreement, certainly not from me, on whether they are even security issues.
So I think we should just table this until either MM can present and then we come to some specific conclusion - we cannot speculate on every single issue that MM brings up, whether it is a security issue, and then ???.

RGN: This is an issue from my perspective, I went to update the proposal and had to hold off because of the concern.

RPR: On the subject of tabling, we’re at the end of the timebox. RGN do you want to state any final conclusion?

RGN: Obviously we need to bring this up as a distinct issue for conversation at the next meeting. In the meantime, I would appreciate input on the preferred means of bypassing it for Intl.Segmenter. https://github.com/tc39/proposal-intl-segmenter/issues/96

KKL: If I may, I can volunteer MM to give a presentation on this at the next meeting.

### Remaining items in the queue

1. New Topic: Presentation on hazard (KKL)
2. New Topic: Please move the SES discussion offline, and we can discuss API changes in TG2 (SFC)

## Announcements

YSV: I intended to announce a research call that is happening. If you have questions about collecting data or the psychology of the programmer feel free to join. The first one is going to be June 25th at 5:45pm CEST.

JHD: Istvan posted on the Reflector that the opt out period for ES2020 is over. That will then be going to the Ecma GA to be the final version of ES2020. So just a heads up for the group.

MLS: Did we vote on this contingent on the opt-out period?

JHD: Yes, at the last meeting.

## Generic Comparison

Presenter: Hemanth HM (HHM)

- [proposal](https://github.com/hemanth/generic-comparison)
- [slides](https://docs.google.com/presentation/d/1OO3QwtP4S0SOXGW9m4pdgG_CHo2eCz0sA6u3NXAgb9M)

HHM: (presents slides)

WH: What are you proposing? You talked about Array.prototype.equals / Array.prototype.compare as well as <=>. What is the proposal?

JHD: Given that we’re going for stage 1, we’re proposing that we continue to explore the problem of comparing two values specifically and more generically comparing values. Those three solutions we pointed out are potential, but we’re not proposing any of them in particular until we go for stage 2.

WH: “Exploring the problem of generically comparing values” is too vague.

JHD: I phrased it that way because stage 1 is about addressign a problem. spaceship operator is what I would like as a solution. The point of stage 1 is to address a problem. If we showed up with a problem and no idea for a solution, I agree that would be too vagueThat’s what we hope we can all explore during stage one

WH: Okay. I’m still not satisfied with that answer because Array.prototype.compare and the spaceship operator are two very different things with two very different use cases.

JHD: the intention would be that if we had the op object.compare could still exist and would delegate to the operator.
It would take 1 arg and return this spaceship argument and delegate to the protocol for the operator That’s what we have in mind but no spec text is written or whatnot.

WH: Okay, so you want to explore adding the spaceship operator to the language?

JHD: Yes. The intention for the slide show was to discuss the process that HHM and I went through in terms of solving a particular problem and then this bigger problem came up, and how can we make the problem generic and solve it in the most robust way. But at stage 1 I think it would be inappropriate for champions to say this is the only solution, so we’re not saying that, but I think HHM and I agree that the spaceship operator and the protocol is the solution we want.

WH: Is the intention of the proposal that <=> be consistent with <, <=, >, >=, ==, and !=?

JHD: that question came up in the hallway track it would be weird if they didn't agree I'm nervous about suggesting that we change the way < > work 1 one is allow them to disagree 2 change the way < > work 3 if return result doesn't agree, then throw

Very personally nervous of changing how the less-than and greater-than operators work.

There's even a third option, and possibly many more, that if the result returned doesn’t agree with < or > then it throws. Just throwing that out there, it’s something to explore, I think it would be totally reasonable to (not?) have a decided answer to that before going for stage 2.

WH: In other languages the <=> operator can return one of four possible results: less-than, equal, greater-than, or incomparable. You get incomparable if the order is a partial order or if one of the operands is a NaN. How would <=> behave on incomparable values?

JHD: Those are the edge cases we would have to address.

WH: Supporting incomparable is not an edge case.

JHD: Sorry, let me rephrase. All the cases with -0, NaN, infinities, and so on, we would have to answer those (before stage 2?)

If the result does not agree with less and greater it should fail

all of the core cases around special values (nan etc) we would address but aren't prepared to do that now.

WH: What would the result be for `3 <=> NaN`?

JHD: I don't know. We would think about that and come back to the community with an answer. Unless the discussion is that you think it’s impossible for us to come up an answer to that, which would tank the whole proposal, in which case let’s discuss it now.

WH: Yes I do. For other languages four possible <=> results (less-than, equal, greater-than, or incomparable) are sufficient to match the behavior of <, <=, >, >=, ==, and !=. In ECMAScript they’re not. There are cases that don’t fall into any of the {less-than, equal, greater-than, or incomparable} buckets.

JHD: Given that ???. perhaps when <=> used with NaN it would return NaN

In js you can’t take the result of ???

WH: In ECMAScript that’s not sufficient. In addition to NaN, there are comparisons among primitives for which there is nothing sensible the spaceship operator can give.

JHD: It would be really helpful if you could provide some of those cases in an issue on the repo.

WH: An example is comparing `false <=> null`. Here <, ==, ===, > all return false. But <= and >= return true.

JHD: There’s already a solution, you put things in an array and call .sort on

WH: That's not the case because sort requires a consistent comparison function.

JHD: You don’t need any comparison function, because the sort function has default behavior, and if you put false and null in an array and sort it, there’s already an answer that the language has.

RPR: Could you continue this on an online issue?

MF: The proposal concerns me quite a bit, I’m not interested in introducing a new notion of equality, especially a fixed one, for built-ins. We either have simple desugaring using the existing semantics of less-than/greater-than or we defer to a protocol, and we do not define the protocol for the builtins ourselves. I don’t really see that we could make a decision for how those should be implemented without any context to how it’s going to be used.

JHD: To clarify, MF, you’re talking about the decision about complex builtins like array and deep structures -

MF: I think the way set.compare behaves is going to be application dependent.

SYG: I am missing the motivation chain between array eq and object eq to comparison issues.
That seems to be a very big jump to me.

JHD: Arrays can contain all language values, so in order to compare arrays by contents, you need to be able to compare all language values.

SYG: I mean yes, you could supply a comparator, that would be a more scoped solution. What is the motivation from wanting to compare arrays, to this capability, to not only a new capability but a new syntax?

JHD: If we only - the primary use case is arrays, like you said, if we had a ??? that took an optional comparator function, certainly that would work. The user has to handle recursion in there a little bit. And separately there is no way for userland types to generically participate in comparison. You’d have to, as the author of the comparator function, know how to compare every kind of value, and you may not have an opinion on everything, and if you don’t, it’s nice to delegate to the implementation.

SYG: to be more concrete, the can of worms of all languages is not worth the time right now when array comparison is what we’re looking for right now, I’m ok to explore that then that seems fine to me. If the stage 1 is “let’s figure out how to generically compare anything in JavaScript”, I’m not comfortable with that.

RBN: I’m going to focus more on the symbol than the operator. I’m not convinced on the operator at the moment, but I have for some time now been discussing interest in investigating equality in certain other cases. We've talked about things like wanting to provide Map keys that allow using a complex object as a key but allow you to have another complex object that uses that key but has a different reference identity. They are very different ???
one thing I'm interested in is adding symbols for equals and comparison not related to the operators. That are not related to the operators, but merely a means of defining a protocol for a common API that library authors and developers could use to say, if you want to determine if I am equal to something else that is not necessarily satisfied by ===, then you could use these symbols, and it would be useful in cases in a map or a set for determining equality.
So I have some interest in exploring the space of equality at least on the protocol level, it aligns with my experience in C# and .net which has the ability to define equality comparisons that can be passed into maps & sets. Values themselves can also be defined as equatable and comparable. So I am very interested in this space. I'm not convinced in the operator, especially with operator overloading on the horizon. I am very interested in this space and I am not convinced about the operator as a possible tie in.
I do want to mark my interest in at least the protocol which was mentioned in the slides.

CM: Without immediately taking a position on whether I think this proposal is a good idea or not, I wanted to make sure that this issue is on your radar: Is the semantics of this intended to be the result of this operator -1, 1, 0 or is it <0, 0, or >0? The reason I raise that question is because the classic comparator that you’d use for sort to compare two integers is just to subtract them. And that’s very convenient & easy but if you have this operator in the language and one implementation / engine implemented comparison by doing subtraction and another one implemented comparison by returning +1 or -1, you now have a potential source of undefined behavior across implementations if this is not nailed down in the spec. On the other hand, anchoring how the result is to be encoded also introduces potential implementation problems. So I just wanted to make sure that this potential source of nondeterminism and undefined behavior is addressed in whatever you come up with going forward.

KKL: CM anticipated half of what I was going to say. My position is similar to RBN. I find it interesting to come up with protocol for comparison, starting with Array, which is the only sensible anchor among primitives.
Which is I think the only sensible anchor among the primitives, but as for a spaceship operator I don’t see the necessity, because for sensible comparisons like number-to-number, like CM mentioned, subtraction is a sufficient implementation.

JHD: there is no way that I couldn’t see the spaceship operator to not work on numbers via subtraction. And we were very careful to show in the examples that it’s not -1, 0, or +1, it’s a negative number, 0, or a positive number, for exactly this reason.

WH: Subtraction doesn’t work, it doesn’t always give you the correct result when comparing Numbers.

JHD: for finite numbers perhaps

WH: For finite numbers it works but if you include infinities it doesn’t. For finite numbers, you might get an overflow. However, `+Infinity == +Infinity` is true, but `+Infinity - +Infinity` gives you a NaN.

JHD: So yeah, we’d have to handle the infinities and the NaNs, just like all the Math operations in the spec, but the rest of it would be mostly subtraction and that’s the sort of thing we’d have to handle in stage 2.

RPR: Queue is empty

JHD: Sounds like there is pretty strong opposition to spend committee time exploring generic comparison, but people are roughly okay with addressing the problem of comparing arrays. I am unclear how we can compare arrays without requiring a comparator without also addressing generic comparison of values. But either way it seems like this problem space has even more to talk about even though we’ve been given strong feedback on which parts to focus on and which parts to avoid. So it seems worthy of exploring further in stage 1. Can we have stage 1 for the proposal given that all the strong feedback we’ve received would be weighted highly?

TLY: The original pb was how do you compare equality of arrays rather than comparing any value. I think it’s a lot easier to talk about a new way of determining equality than it is to try to give a total ordering to all values in JavaScript, or even a partial ordering.

JHD: Okay. So you’re just saying that the spaceship operator doesn’t give an ordering (?) but if we’re trying to - you’re talking about the first problem we focused on, ordering arrays, which would recurse into arrays, but then not knowing which is bigger than the other Would they spaceship to zero or not is that you want to explore right?

TLY: I wouldn’t phrase it that way but yes.

JHD: That seems like good feedback to explore further. It seems like we’d have to come back again before stage 2 with the spaceship operator, or even come back and give a status update.

SYG: not comfortable to go to stage 1 with “we will take your feedback strongly”. I would be more comfortable with a reframing of what this proposal is. Perhaps it’s just a new protocol for userland comparison, I don’t feel the slide deck particularly well motivated that problem either. ??? Or a new syntax for generic comparison. So for stage 1 if you can reframe now I can make a judgement. If you just want to explore the generic comparison space, I’m not comfortable with that, as I don’t think that’s a good use of committee time.

WH: I find the framing of defining array equality by invoking <=> on the elements and checking if it returns 0 or not to be very strange. In other languages the concept of equality generally does not depend on the existence of any ordering defined between unequal elements. Array equality should depend only on element equality.

KKL: Briefly echoing WHs point, take care not to consider equality equivalent to <=> returning zero, because zero has the meaning of incomparability so it’s not a bijection

HHM: So to confirm again are we going to pause the 3 way comparison operator for now? Or rephrase the proposal And probably if there is support for three-way we can take it as a different proposal in the future.

JHD: But we are very aware that in order to bring it back to the future we have to take in account all of that feedback. Would not want to waste committee time until we can persuade all people that have given feedback.

DE: Can I ask that before this is moved into the tc39 org that there’s an explainer written that this is about array equality and a name to reflect that?

JHD: What we will likely do is call this proposal withdrawn or rejected, and make a brand new one with array equality pieces of this one and say that is stage 1. And then there’s no confusion about what you just talked about. We'll put a note on this one to point to the new one. Does that seem like an ok approach?

DE: Yeah that sounds like a great way to clarify publicly, glad you’re being careful about that.

JHD: I think the title of proposals, particularly early proposals, should reflect the problem space. So if we’re agreeing on array equality, then that’s what we should title it.

DE: In general I’m happy with an early proposal proposing a concrete straw-person solution.

JHD: Do we have consensus for stage 1 for array equality, and we will consider this other thing withdrawn?

### Conclusion/Resolution

- Stage 1 with reframing to array equality

## .item() for Stage 1

Presenter: Shu-yu Guo (SYG)

- [proposal](https://github.com/tabatkins/proposal-item-method)
- [slides](https://docs.google.com/presentation/d/1vRjhR1Vl9GeOeXno-s8DkQppeZFE3xx59Od91HG6db4/edit)

SYG: (presents slides)

Just to make note taking easier please use the queue for everything & please not to talk over each other. Harder to capture cross talk in a remote format.

MF: Prefacing this, I am totally on board with this proposal. Are you considering arguments exotic objects to be indexable, and do they ... ?

SYG: Damn fine question. What is the argument exotic object's prototype?

MF: It doesn't have one.

SYG: It seems like probably not, I don’t have a good answer for you.

MF: I’d love for them to be able to get it but I don’t see a technical way for how to do it.

SYG: I’m not sure we want to start saying like all remote exotic objects get their own copy of an item method? That seems to be undesirable if they don’t have a prototype right now. It seems okay to me right now that you’d have to cast it to an array to get that, but -

MF: We could put an own-property on arguments exotic objects with the value of a shared intrinsic.

SYG: That’s kinda weird and magical, thanks for raising it, I hadn’t thought about it.

RBN: I noticed you mentioned WebIdl for concern. But ActiveX/COM has similar concerns, it exposes collection indexers as `item` to javascript and it also exposes it as `.Item` with a capital `I` to languages that are not javascript.

I think most of the times when it works with JS, it expects the 'i' in item to be lowercase.
I don't think it would be an issue with Array.prototype, though there might be some possibly issues with activeX objects using the DOM But then I haven’t looked at how or whether there are any differences in how Chakra handles ActiveX anymore, but I think that applied to IE/old Edge, so I’m not sure if that still applies with Chromium Edge.

SYG: Fortunately, I know nothing about exposing ActiveX and COM to JS.

RBN: they get a - in old IE you would get an ActiveX object that looks like a JS object. the API was complicated it's hard to explain.
[...?] with methods that were exposed from the ActiveX or COM object And it’s hard to explain how that works, the APi was somewhat complicated and it was treated as an object, but it’s also where we’ve run into issues in the past with things like Document.all, and things like that.

SYG: Ok, thanks for the heads up.

DE: So I think it’s great that this proposal is coming along, indexing from end of the array comes up all the time & you have to type `length`
And also simplifying something with the web is good. I want to raise a related proposal that could be potentially taken on which is to get the last element of the array, if we just add this `item` we’re going to have a lot of code that uses item(-1) & I think that’s ugly just to use this sentinel to get the last item And I think it would be nice to have a method just to get the last element. We’ve had investigations in having a method getter for the last element, but that’s kind of poisoned by ???.
If someone wanted to champion an array.prototype.lastElement that would be good.
That could be a nice thing that could be more ergonomic than item(-1). Or maybe we do just want people to do .item(-1). I don't want to expand the scope of this proposal, but it comes up because item(-1) idiom would result from this. This could set that idiom, that’s what raises it mentally for me.

SYG: I see, I think for that I would like to… Technically I don’t see having it in addition to .item()
I am not sure if list[-1] in the python ecosystem is considered a usability issue

DE: don’t think it is an issue there but I don’t think it is a javascript idiom though Bringing that in where we didn’t previously have it, I don’t think that’s bad I don’t think that should slow down this proposal but I would like if someone made progress on the last element proposal cause I think it could be independently valuable.

RBN: I was interested in the proposal for last() when it came up before.
more interested in changing the name at the time. library issues prevented "last"
I was interested in "peek" as a parallel to "push" and "pop".
having "item" and "peek" or "lastitem" might make sense. we have methods that can index from the front of the array and from the end of the array.
peek/pop/shift/unshift

JHD: in response to DE, passing -1 in arrays or slices is a very common idiom. The workaround that people are already using for `.last()` is `.slice(-1)[0]`.
I pasted a link in irc Rails has a .forty_two method on arrays as a joke. The cheekiness aside it raises the question about why one of those methods is special. There's a slippery slope argument: if we have "last' do we need "first", "second" etc. We could still add a last but it seems like an improvement to have it.(?)

TLY: JHD covered my question

CM: I don’t know that this is material, but it seemed weird to me on slide 11 regarding web compat risk. We’re talking about `.item(-1)` as indexing, or negative numbers indexing backwards, but you’re talking about dealing with negative indices pretty much the way they’re dealt with now. Am I just misunderstanding something or is there a little bit of a glitch in the web compat analysis?

SYG: I can try to re-explain the hazard here real quick. In web APIs currently there could be code where ?? depends on item mod 2^32 ??
It might be just a bug but there might be code that depends on that

CM: What does "N left as is" mean in this context?

SYG: It means that the proposed APi, since we’re proposing relative indexing, to leave -1 or any negative number as the negative number, and not apply `mod 2^32` as WebIDL does.
the proposed API will not do modulo. N is the item it will be left as a number larger/smaller than +-2^32.

Which is the web IDL semantics

CM: A misunderstanding on my part. Very good, carry on.

SYG: Again, asking stage 1

(silence)

RPR: Okay, no objections to stage 1. Congratulations on stage 1.

### Conclusion/Resolution

- Stage 1

## Incubation call chartering

Presenter: Shu-yu Guo (SYG)

SYG: introducing incubation calls again

Every 2 week hourly call there is an every 2 week hour call in which we call out proposals that could benefit from video call feedback. in order to come back to committee with a better understanding of what probable issues may be.

With the champions and other stakeholders, so as to come back to committee with a more polished picture or a better understanding of what possible issues may be. So the chartering process here is that I’m going to ask for participation for the earlier proposals here at this plenary and proposals that may have gone stagnant for a while. And see if the stakeholders and the champions are willing to be on the lookout for a schedule for the incubator call where we discuss these in between plenaries. Does that all make sense?

There is a "how the incubation call works" to explain how it works. in the reflector there is a list of previous calls. I will link it in the in the IRC channel afterwords

For the previous set of proposals, check the Reflector. Previously, we talked about realms, we talked about the this reflection proposal, and then we talked about module attributes as well. And I think largely other than some scheduling mishaps, it was a net benefit and it was hopefully useful especially to the realms folks to get more time to hear the feedback.

So this time I’m calling out the following 3 proposals:
UUID some concerns there around webcrypto BC has agreed to participate in an incubation call about the UUID proposal, so if you are interested in that space, be on the lookout for that.

.item I was going to put `.item` on it, but given that it didn’t seem very controversial, it doesn’t seem like there’s a need for high-bandwidth feedback from delegates, so I will strike that one.
Generic Comparison The other was generic comparison, given there is contention around the problem space to be explored. Especially for the champions who still are interested in generic comparison. Are the champions of UUID and generic comparison open to incubation call participation?

JHD: For comparison, certainly.

SYG: Thank you. For UUID, I already got blessings from BCE, so please look out for that one. Are there other suggestions for proposals in incubation calls?

YSV: I would like to see UUID topic moved to WebCrypto.

SYG: Perhaps it would be a short call then, but I recommend you come to that call and tell the champions your stance.

YSV: maybe it makes more sense for me to do this as an email but it may cut out another topic from the incubation call.

SYG: there may be other folks who feel strongly in the opposite direction. I think it would be good to spend at least half an hour to go through it.

YSV: OK I would like to offer one other thing, we discussed our approach to security in the chat as something we should nail down.
not as a proposal, but I think it’s worth discussing.

In parallel to that discussed to people in mozilla and there have been eyes on UUID It would be really cool to have a holistic view on that, so that’s another option.

SYG: for UUID item it could be expended in scope Because there is a desire to move it to another venue, but to talk about the crypto space in general, which I think BCE would be very open to discussing as well, plus perhaps another item discussing our approach to security in general. Given the light list of proposals I would accept both for folks who have an interest in the security model of js for which we as a committee want to design our language around. I could see that being very contentious, so it would be good to have a lot of high-bandwidth discussion before coming to committee.

YSV: We might want to limit it more but that’s all I’ll say.

SYG: since not proposal I will work with you and scope the aspect about security for that call

RBN: I did want to mention, I think YSV you mentioned moving UUID to webcrypto, the main issues I’d see with that is when here is no longer a WebCrypto working group. it has finished its charter. I’m looking into the CSPRG

That group has officially finished its charter

SYG: bring that to the actual meeting

RBN: I just wanted to say it might be difficult to do that but I am open to joining all those things.

YSV: Aware of that, will respond in chat

RBU: we would want to bring up deep path properties and specifically how it interacts with objects

SYG: Ah yes, of course. Thank you for bringing that up, I completely forgot, in fact I talked to some folks and that was on the original list. So to recap:

- UUID
(cut off)

DE: How about Temporal to be on the review queue for this group?

SYG: Are you joking? I thought Temporal had its own giant call?

DE: Just to get more review from more people the committee.

SYG: Sure? I don’t have anything against that. The original intent of the call was to give a sanctioned time and space to discuss things that didn’t already have their own high-bandwidth calls. But I can also see how it would also be useful to get folks who don’t participate in the regular Temporal calls to get in on a single call to give some feedback. So I’m happy to add that but prioritized lower.

DE: I agree with that prioritization.

LEO: As SYG said, it applies for any discussion if anything already have a regular meeting then it is not needed to go in incubator calls since they can’t really benefit from the incubation more than smaller proposals. **Note: I made this horrible choice of calling "smaller proposals". I don't mean smaller, but any proposals without frequent meetings that need to solve specific challenges before stage advancement.**

### Conclusion / Resolution

SYG: Thanks. To sum up, the five topics we have identified are UUID, security at large, generic comparison, deep path properties, and Temporal. If you are a stakeholder in any of these topics, please look out for Reflector threads for these issues including the scheduling and video calls. The scheduling is done ad-hoc, because constraints vary proposal to proposal, and we want to accommodate timezone needs of champions and stakeholders.

## (Continuation) Module attributes for Stage 2

Presenter: Daniel Ehrenberg (DE); Sven Sauleau, Myles Borins, Dan Clark

- [proposal](https://github.com/tc39/proposal-module-attributes)
- [slides](https://docs.google.com/presentation/d/1MOVBh0gw7-tqEx-maEvS2HsgwXd5X5pcwL80V67xCIg/edit#slide=id.g8634fc5940_28_0)
[PR](https://github.com/tc39/proposal-module-attributes/pull/66)

DE: (presents slides)

AKI: Queue is empty.

DE: Call for consensus for stage 2?

JHD: Just to be clear with these compromises this is sufficient for Stage 2. I’ve already indicated to the champions what needs to be iterated on in stage 2.

AKI: That seems like consensus to me. Congratulations on stage 2 and on compromising and working together!

DE: Thank you.

### Conclusion/Resolution

- Reached consensus for Stage 2.

## Editorial Direction

Presenter: Shu-yu Guo (SYG)

- [slides](https://docs.google.com/presentation/d/14NsIoRhr-z7HvRG0laq_F2c4iNPHF-Ld17-Yibshdo0/edit?usp=sharing)

SYG: (presents slides up to “Normatively, they all mean the same thing” slide and asks if this is contentious)

WH: I see a qualitative difference between implementation-defined and implementation-dependent. For things like `Math.cbrt`, we know what the goal is: to produce the cube root of the number. An implementation can do this perfectly; for `cbrt` it probably can nowadays, but for the other math functions it may be impractical to define perfect algos that give you the correctly rounded exact answer, so we give implementations a bit of slop, but it would not be ok for an impl to say `Math.cbrt` of 8 is 2.1.

SYG: Right. I agree with the sentiment.

WH: Implementation-defined means the implementation gets to pick and it has much wider latitude in what it does.

SYG: I do agree it is a question of line drawing. For other things that are implementation defined we lay out requirements that the normative behavior must obey. For example the host hooks around job scheduling. Some invariants are much more restrictive than others like the ones around Math compared to the ones around host hooks. I think it is a question of degree in how tightly we restrict the deferred behavior, not that behavior is deferred.

WH: I think we’re getting into hair-splitting here. As the answer to the question posed at the bottom of the slide, this is contentious.

SYG: So - By normatively, I don’t mean they all mean to the same degree. I mean that normatively they all mean they defer additional behavior to an external source.

Which may be further constrained by whatever we say in the spec, which can be much more restrictive like providing an estimate of a result, or less restrictive like the job scheduling stuff.

WH: You asked whether normatively they all mean the same thing, and my position is no.

SYG: then perhaps I chose the wrong wording here, would you agree with normatively they all defer to the same external source with possible external constraints.

WH: I think that is hair splitting. Let’s move on. I do not accept the premise that they all mean the same thing or that they should not be distinguished.

SYG: OK that’s useful because I think you also disagree with this slide (shows “Editorially don’t distinguish…” slide). With a general understanding of the dependent thing, you give it a little bit of latitude, but you should still provide an estimate. Where as defined means you get more latitude. I think we should explicitly spell out the latitude given to the source. I’m proposing that we always use defined, and explicitly spell out what the latitude is. Is that contentious?

WH: Yes, but please move on and finish the presentation.

SYG: (presents slides from “Editorially, do distinguish host and implementation” and asks if the proposal should be accepted)

WH: What exactly are you proposing here?

SYG: Number 1: that the phrasing in ecma262 itself we only use implementation-defined or host-defined. They normatively mean the same thing, but editorially a host is an external source that interacts with ECMA262 via the subset of a “public API” via host hooks and fields with Hook in the name. Making ECMA262’s use of host and implementation to mean “this". And then capturing “this” in a non-normative note in the spec.

WH: When you were discussing `Math.cbrt`, what should be done with a host that wants you to correctly round math functions? Would that fall under host-defined or implementation-defined?

SYG: Currently that would remain implementation defined until such a point that there such a specification that wants to interact with it in a more specific way such as implementing a host hook. Basically I am saying, is that I want hosts to be a hint to readers of the spec that there is another spec that refines the definitions.

WH: There are math libraries that specify what the precision of what all the math functions should be. Would one of those be part of the host? I think host-vs-implementation isn’t a useful distinction.

SYG: It is useful to the readers of the spec to see, for example, job scheduling is host defined, and I know the host I’m working in has additional behaviour that I should be aware of. Instead of, I know I am working in node, where node documentation is important. This is a point of contention that comes up with HTML folks.

We conflate what is a host and what is an implementation. A host to the HTML folks is what is specified by HTML whereas an implementation is a particular browser. It would be good to record that intention.

WH: I am concerned about recording that implementation-defined is too much of a catch-all.

Implementation-defined means that it has a number of options that are equally good.

Implementation-dependent means that there is a clear and unique definition of what the result ought to be, but an impl might not be able to achieve it.

If you reduce all of those use cases to implementation-defined, everything becomes implementation-defined. Concatenating two strings becomes implementation-defined.

SYG: I’m not sure I know the point. Is string concat impl dependent?

WH: It is, in that under your new scheme it would be implementation-defined because an implementation might run out of memory.

SYG: I’m not really talking about the ontology of impl defined vs impl independent.

I'm talking about that currently there are places in the spec that use the words "implementation-dependent", and we are changing those to "implementation-defined". I’m not going to be inserting a new thing that says it’s implementation-defined when it’s not currently defined as implementation-independent.

WH: According to your new taxonomy concatenating two strings would be implementation-defined.

SYG: According to observable behaviour it has a choice? Because memory behaviours are observable.

WH: Yes.

SYG: I take your point is that OOMs are observable, therefore would all points be implementation-defined?

WH: Yes, if implementation-defined were the only choice of wording.

SYG: Currently we say nothing.

SYG: Some impl defined things have strict requirements. One of the import meta hooks you can basically not do much, but the other is you can do whatever.

KG: The spec does not use implementation defined and dependent consistently with that definition. For example toLocaleString, it is implementation dependent, but there isn’t something it is approximating.

This is just like “err do something”. It’s not clear to me that everything clearly falls into these two buckets of toLocaleString.

It isn’t clear to me that they fall into the buckets. My preference is that if we want to provide additional requirements, we should say that distinctly, not rely on the phrasing we use.

SYG: Completely agree.

DE: I think this is a great clarification. I think it is useful for layering with HTML, which benefits us because it is a part of many TC39 proposals, how it makes it to many JS users. The idea of host hooks makes things clearer both for the web and for other places where JavaScript is used, engines often have APIs that don’t correspond exactly to host hooks, but there is often some kind of layering that relies on the spec. We have a coherent thing we are looking at. Separating host hooks from implementation-defined things solidifies that a bit. It’s a net positive for our definition of the language. Even though this is editorial it is a significant clarification. I want to thank the editorial group.

CM: I think the distinction you are calling out is useful in clarifying, simply saying we are going to be more explicit is a good thing. You gave the example of the embedded people hypothetically wanting to nail down something that would cause something to change from being impl defined to host defined. I want to make sure that it is not regarded as purely an editorial choice, it would be a normative change that should run through TC39.

SYG: My question to you, CM, is to say that it’s a normative change, my understanding of a normative change is that it does not change the behaviour. I’m not sure how changing something from implementation-defined to host-defined would change the behaviour.

CM: That is a good point. The fact that we are making this distinction and the fact that you might want to change which side of that distinction a piece of spec text is referencing, implies that there is some intent behind why you would want to do that, that there is motivation that is not merely clarifying the language of the spec but reflecting some expectation for the spec and the outside world, and that is the sense in which is it normative. If the distinction is that it is at all meaningful, then it is meaningful, and we should be making shifts from one category to the other carefully.

SYG: I see. That’s a different sense of normative than I’m used to. The thing I am struggling with, editorial PRs, many of them change the intent with which something can be read. I think it’s fine here to call out that specific implementations that change the behaviour enough that we take it to committee. In general I don’t know how to work under the assumption that things that [...]?

CM: This is a case where the committee as a whole is deferring to the judgement of the editors. It strikes me that we don’t arbitrarily move something from one category to the other. There has to be motivation behind it. It seems like if we are making a shift, changing the relationship between the spec and an outside body with which the spec interacts.

SYG: OK, noted.

KM: What qualifies as a host here? If I have like “Keith’s dope spec” and I come to TC39 and I want it to be host defined, is that sufficient?

SYG: At least CM feels strongly that calling something host vs. implementation-defined changes the intent enough that it should be brought to committee deliberation anyway.

SYG: A host is just a thing that interacts with ecma262 with a blessed set of things

SYG: If whatever your upstream thing is, only touches those points, you are called a host.

KM: Can you repeat?

SYG: Whatever your upstream thing is, a C++ program or whatever, If the only points that interact to 262 are host hooks & fields as part of the host API, then you’re a host.

KM: I see. Is there plan or record for when something requests such a change, I want to add such a requirement or any new “sweet sorting” spec what is the bar to convert something from implementation defined to host defined?

SYG: I wanted to leave that to the editor group to make a judgement, and that is a case by case basis. It doesn't sound like we have agreement for that, though. I guess you’re asking what is required to add a host hook [??] to a place that is currently implementation defined

YSV: make sure that I understand fully where we’re going here.

The goal here will be to make it clear what parts will be further detailed by ECMA 262 spec and which ones are going to be sort of static, I understood from the issue. Like the things that are implementation-defined would eventually change from the TC39-defined implementation. Did I understand that correctly?

SYG: I don’t understand the question. Both host & impl defined stuff will both be deliberated upon within TC39.

YSV: Yes we would still decide which parts are going to be host defined and impl defined, but if I understood impl defined specifically means if someone from HTML sees the spec and they see “host” defined they would be able to say this is something that I can understand as “our” area and things that are specific might change like array.sort

SYG: That’s the intention, yes.

DE: We’ve been changing host hooks over time and I expect that to continue, to improve clarity and certain types of features. Both things will change with TC39. Agreed that layering changes don’t have to go through committee unless they are controversial.

WH: I wanted to clarify what I see as the difference between implementation-defined and other things like impl dependent. Implementation-defined means that impl is a range of choices and has latitude with it. The implementation still has a choice with the spec & there is no clear best choice. It should not be used for things like taking the cube root of a number or concatenating two strings. For those there is a clear best answer that can be universally agreed on. When you concatenate two strings you get the concatenated two strings.
So applying implementation-defined to those things I see us being… not sure the right word is… applying implementation defined to those I see as an error — using the wrong term.

JHD: It sounds like WH, that you’re not concerned about differentiating between host defined and impl defined. It sounds like the math stuff being lumped in with impl defined is your main concern?

WH: I also have the same concerns about implementation-defined vs. host-defined that were stated by other people, so I am not going to repeat those. The implementation-defined vs. host-defined distinction is unclear for some cases. My main point here is there’s a big difference between implementation-defined and implementation-dependent.

JHD: So could we call a third answer “implementation-approximated”?

WH: We could. I’m also not saying all existing usages of implementation-dependent are correct. A lot of international stuff falls into that category for example, which may be better written as implementation-defined or host-defined.

SYG: So to wrap up I believe WH objection is to this slide. We think it is not editorially useful to define “editorially independent” (??), whereas he disagrees.

I want to make sure WH that you do agree that observable behavior can be ???

WH: Depends what you mean by that.

SYG: OK

WH: For implementation-dependent there is a clear best choice that implementation should strive to do. Implementation-defined is no value judgement on how it can be done among a number of choices.

SYG: By kind I mean editorial vs normative. I don’t consider that normative to judge the degree to which that somebody has strived.

WH: I think this discussion is playing unproductive word games.

SYG: I respectfully disagree. In any case you want to keep the defined and independent distinction. It sounds like that you want to keep defined and the distinction

WH: This discussion has digressed into unproductive tangents.

SYG: Ok, we can talk about this offline. Are you comfortable with editors defining that or do you want a plenary discussion whenever this comes up?

WH: That depends on whether the editors are taking into account the distinction which I drew between the terms. I have not heard from the editors on what they will do.

SYG: We told you the thing we were going to do, and you said no to what we said.

WH: “Thing we were going to do” is not taking into account the distinction between implementation-defined and implementation-dependent?

KG: Can I make a proposal? The main thing the Editors want is clarity about when each of the terms are used and the list of the terms to use. I would be happy enough to write down the definition WH used, that

- “Implementation-defined” means that the spec does not have a notion of the objectively best behavior and implementations are free to choose within whatever constraints the spec puts on them without preference between them.
- “Implementation-dependent” means there is a best possible behaviour that implementations should strive for as best they can, but there's no normative requirement on how much they should strive.
- “Host-defined” is what Shu has in the slides and would, to Chip's point, only change with discussion in plenary.

Editors would fix up the spec to ensure the terms are used consistent with those definitions. I would be happy with that outcome since that gives us a way to proceed on this kind of question.

WH: Excellent summary, I’d be delighted with that outcome.

SYG: That is acceptable to me. Will flag WH and CM on definitions.

AKI: We’re at about time. SFC, do you want to talk about your topic for the last minute?

SFC: Is Intl locale data impl-defined or impl-dependent? We use that language a lot in intl, and suggest that intl editors talk with SYG and KG.

### Conclusion/Resolution

We will define "implementation-defined" to mean that there is a range of possible behaviors and the spec does not express a preference between them, "implementation-dependent" to mean that there is a best possible behavior which implementations should strive to implement (but without implying a normative requirement on how hard they must strive), and "host-defined" to mean the points where upstream specifications are expected to integrate. Editors will add these definitions and audit existing usages to ensure they conform with these. Changing whether something is implementation-defined or host-defined would be an issue for plenary, not editorial discretion.
