# 109th TC39 Meeting

Day Three—30 July 2025

**Attendees:**

| Name                   | Abbreviation | Organization       |
|------------------------|--------------|--------------------|
| Dmitry Makhnev         | DJM          | JetBrains          |
| Waldemar Horwat        | WH           | Invited Expert     |
| Jesse Alama            | JMN          | Igalia             |
| Daniel Minor           | DLM          | Mozilla            |
| Samina Husain          | SHN          | Ecma International |
| Aki Rose Braun         | AKI          | Ecma International |
| Shane F Carr           | SFC          | Google             |
| Olivier Flückiger      | OFR          | Google             |
| Jordan Harband         | JHD          | HeroDevs           |
| Zbyszek Tenerowicz     | ZTZ          | Consensys          |
| Eemeli Aro             | EAO          | Mozilla            |
| Tab Atkins-Bittner     | TAB          | Google             |
| J. S. Choi             | JSC          | Invited Expert     |
| Istvan Sebestyen       | IS           | Ecma International |
| Daniel Rosenwasser     | DRR          | Microsoft          |
| Rezvan Mahdavi Hezaveh | RMH          | Google             |
| Kris Kowal             | KKL          | Agoric             |
| Andreu Botella         | ABO          | Igalia             |
| Chris de Almeida       | CDA          | IBM                |
| Gus Caplan             | GCL          | Deno               |
| Justin Ridgewell       | JRL          | Google             |
| James Snell            | JSL          | Cloudflare         |
| Kevin Gibbons          | KG           | F5                 |
| Keith Miller           | KM           | Apple Inc.         |
| Matthew Gaudet         | MAG          | Mozilla            |
| Mathieu Hofman         | MAH          | Agoric             |
| Michael Ficarra        | MF           | F5                 |
| Mark S. Miller         | MM           | Agoric             |
| Nicolò Ribaudo         | NRO          | Igalia             |
| Richard Gibson         | RGN          | Agoric             |
| Steven Salat           | STY          | Vercel             |

## Opening & Welcome

Presenter: Ujjwal Sharma (USA)

USA: Hello. And welcome. While we wait for our facilitator for today to start with the session, I think it is time we kick things off with asking for notetakers for today. I did confirm that Carrie is here, hi, Carrie. So I’m assuming that we have the notes. Who will help me out with fixing them? We need two volunteers for this session. Is that someone volunteering to help out?

DLM: I’m sorry, I just joined, I’m sure if we called for notetakers yet.

USA: I just did, Dan, but no luck yet finding one.

DLM: I guess I can then ask for voluntary notetakers. Is anyone interested in helping us out today?

NRO: I can take notes for the first topic, but I need someone else to do it for the next one.

DLM: Okay. Thank you, NRO. We would probably get, ideally, oh, definitely one more person. And ideally a third person to take over when NRO has to stop taking notes.

RGN: I can take over for NRO in the next session, but not this one.

DLM: Okay. Thank you. I think I have to reload my TCQ as well. Call for notetakers. Okay. Perfect. So one more notetaker would be very much appreciated to make sure that we have enough coverage.

NRO: Maybe we can start and just interrupt me.

DLM: Sure. Thank you, NRO. So straight over to you.

## Intl Era and month code

Presenter: Ujjwal Sharma (USA)

* [proposal](https://github.com/tc39/proposal-intl-era-monthcode)
* [slides](https://docs.google.com/presentation/d/1dAbacNvhPL_iUJKZNPDbQVyfg8a6-OHUuh2OiftMu1A/edit?slide=id.p#slide=id.p)

USA: Thank you, NRO and RGN. All right. Let’s start with Intl Era and month code for stage 2.7. This is by me and Philip, but Philip cannot be here today. Both from Igalia. And thanks to Google. So first of all let’s talk a little bit about the proposal. Where it is. Why is it there in the first place? If you forgot that. So, there is a number of non-ISO8601CLDRs that are used in JavaScript. This primarily started being used in Intl format where you are allowed to format any given date object. More specifically at the beginning now, any temporal object as well. Into a non- ISO8601 calendar. That means the Gregorian calendar, the calendar that we’re all familiar with with a few tweaks that make it suitable for computational use cases. Every other calendar is real human calendar that is used not by computers, but by people in their day-to-day lives, sometimes for traditional or religion purposes. So, the behavior of these calendars has already, has always been effected outside of JavaScript, it is beyond the scope of the ECMAScript programming language itself. In practice it means the details are defined by CLDR, by unicode, and one of the implementations of CLDR that is used by the Ecma script implementations ICU4C or ICU4X. And Ecma 402 that is doing in… APIs should not be in the arithmetic for specifying for it every calendar. It is not what it does, and the details have always been referred to places like ISO or C DR. However, now the Temporal has added the capability of doing arithmetic on dates in any of these calendars, it does—like—give us some responsibility in terms of providing some guardrails to make sure that developers can utilize the APIs without varies of break-in, without implementation divergence. Basically do whatever we can sort of limit the behavior or to define like what the correct behavior looks like without overspecifying. So that’s the premise for this proposal.

USA: Talking about the scope. Ecma-262 is only requires the ISO 8601 calendar that is completely specified in the temporal spec to be merged into the 262 spec that is the only required calendar, but may support other calendars if they would like to. This doesn’t change. This has been the understanding from the temporal proposal and this sort of has been something that we carried over to this one. Ecma-402 conformant and implementations however are required to support the set of calendars that are specified or that are defined by CLDR. This was the common understanding. This is more or less the entire motivation behind the proposal. These calendars needed to be implemented by implementations but didn’t actually have sufficient depression and this common understanding is now formalized. So this is, why, the core sort of reason for these existence of this proposal.

USA: What precisely does this proposal add to ECMA-402 to go over a non-exhaustive list. The description of each supported calendar and remember, these are the international calendars barring the existing sort of ISO8601 calendar. So it is clear what is the calendar under question when your implementing something? To clarify there is some ambiguity sometimes when it pertains to certain calendars and the way that we specify and describe calendars while we haven’t defined exactly every single tiny detail it does help you to tell which sort of version of the calendar you’re supposed to implement. Also, lists down the valid era codes. So, these are era codes that are going to come from the users and therefore, you know, more strict behavior is required to sort of work around these and not only did we define these era codes we actually went back to CLDR and upstreamed sort of the results of our discussions over there. Thanks, SFC for that, and referred to CDLR where they are, actually standardized instead of being the source of truth by ourselves. We also include valid ranges for era years for calendar. Like in the Japanese calendar, the Shobha era, for instance, might have an upper cap as well as a lower cap. So all of these are included. List of epoch years for calendar for temporal plain date for type year. So if you take a temporal PlainDate instance in a different calendar and get a year getter, you might need the epoch year, because it is always relative to that sort of epoch year instead of, you know, being relative to year zero in ISO, every calendar has their own starting point. We list down the starting point so it is easy to sort of compute. It agreed upon between implementations. Specifics about which calendar support eras and weak numbers. Specifics how to make the methods for eras which can start mid-month or mid-year even. Constraints for adding years. So, for example, we have an open issue that you may see in the, in the repo where is unclear within even the academic or sort of circles which sort of define these, this kind of behavior. What is the result of adding one year to a date in month 05L in this year 5784? because the following year is not a leap year, so therefore it won’t have this month. So this kind of difficult problems we are trying to sort of basically figure out what’s the best way to approach for this and to provide a consistent behavior to the users. And all of this is currently written down in prose. So while it is understandable for any implementer what the general direction is supposed to be, 69PR is going to change it to spec step so that it’s probably easier to annotate in the implementation code or, you know, to follow.

USA: The algorithm for taking the difference between two dates regardless of the calendar as well as the handling of Hijri calendars, some of them can be more reliable than the others. So, all of these different things.

USA: Then, basically, I was going to summarize this has been sort of the answers of different difficult questions that we have discussing in PG2 and sometimes beyond just PG2 in unicode and elsewhere and get the answers. So temporal has been sort of the forcing function to help us get consensus on a lot of these details and to translate to either spec text or sort of upstream sources that we can point to in the spec. So yeah, this proposal’s basic goal of defining a lot of the behavior for non-ISO8601 calendars for implementation in JavaScript has been successful. We think that this is a good balance. If you have gone through the spec you can see that it might feel like we’re threading a line here. We’re not overspecifying stuff that ECMAScript is clearly not the authority on and it is unclear who the authority is, we’re trying to sort of give guidance as to what the correct behavior is and still minimize the opportunities for implementation divergence while keeping the door open for either future improvements or, you know, as in like more correct implementations or improvements in the calendars themselves as well as, you know, implementations with reasonable divergent sort of different approaches.

USA: First of all, I would like to open the floor for questions. Any discussion regarding this proposal or anything that is presented so far?

DLM: There is nobody on the queue right now.

USA: Fine. Let’s maybe give it a minute. Let’s just see if—somebody has something. Perhaps not. Then I can move onto the next slide and that could be what attracts people’s attention. Going through the stage 2.7 requirements we have the syntax and APIs are completely describe. That has been the case. As I mentioned, these PR69 does convert some of these spec texts from pros, which explains what the direction should be into actual algorithm steps. However, the intent, the semantics and, well, there is no syntax or APIs for the most part, that will be introduced per se with this proposal. So yeah, like that, that is something that we have agreement on. The current reviewers have signed off on the current spec. So EAO and SFC. Thank you for your review. They have indeed submitted issues and given us a lot of great suggestions for improving the proposal. I left their status as pending, I will let them answer to what their final verdict is. I also added Monish, I’m unsure if he is a delegate at this point. But to give credit where it is due. And it also went through the whole spec and being an expert in these areas as well. Gives me confidence. Then finally, we have the relevant editors group. I’m one of them, and BAN is on leave. So I think RGN is our sort of best shot at taking a look at the spec and letting us know if what he thinks. And yeah. These are sort of the requirements. We can go through, well, let’s see if we have—okay. EAO?

EAO: Yeah just figured I would voice my agreement that I agree with this spec. And I think this should advance to stage 2.7. One small callout that was added as a result from my review and as a follow-up from the discussions in TG2 was adding a statement that an implementation should emit a warning if it’s capable of doing so if the user uses the “islamic” or “islamic-rgsa” calendar identifiers for which we do fallback. I believe this is the first time we’re adding a recommendation to emit a warning to 402. A couple of these already exist in 262.

USA: Thank you, EAO. Seeing in the queue. There is nothing else. Perhaps I can also then call out the other SFC, would you like to voice any thoughts on this proposal?

SFC: Yeah. I think that the, the work that PFC has put into getting the spec into shape is very good. I gave the update the last update in plenary for this proposal, I think, maybe two cycles ago. And basically the, most of the changes from then to now, now, we have spec texts to codify the things that I had presented on when I gave this, when I gave the update two cycles ago. I did my stage 2.7 review. I’m quite happy with the spec. I do have an open pull request with some suggestions from my review that basically what it does it converts some of the prose that PFC had written into actual lines of spec text and then does some refactoring in order to make that work. So I approve 2.7, I guess, conditional on the edits that I made in my pull request. If that’s a thing that is possible within the, within the process. And thank you RGN and USA and make for doing it as well.

USA: Great. Thanks. RGN, if you are around by any chance, I would finally love to hear any thoughts that you have.

RGN: Overall, mostly positive. But as noted, my review is still pending. So I don’t have much to contribute right now.

USA: Right. With that, I believe, we’re still missing an explicit editor’s signing off. So I think we should sort of keep that in mind. Obviously, so change my request to conditional stage advancement, it sounds okay. So I would like to do a call for consensus for stage 2.7 conditional on approval from one of the editors from Ecma-402.

DLM: Are there any explicit voices of support? With my SpiderMonkey at on, I can say we would support this for additional advancement to 2.7.

USA: Thank you, DLM.

SFC: Is the conditional advancement conditional on PR69 being merged?

USA: I—didn’t explicitly ask for that. I think do you feel strongly that the advancement should be conditional on that PR being merged or.

SFC: Well if the advancement is not conditional on the PR being merged the PR would need to come back, I mean, it’s—it’s—like—I’m not sure if it is editorial or not because it is taking like—pros and converting it to spec steps. Like, technically if it is 2.7 without this PR then the PR probably wants to come back next meetings a like a stage 2.7 normative PR or something just to be safe. It would make me more confident to make the 2.7 advancement conditional on 69 as well as RGN’s final sign-off.

USA: I—to sort of answer to one of the points that you made. I do feel like the PR or at least the intent for the most part of the PR is editorial. So I feel like not only is it my perfectly fine to do it after stage 2.7 because it is basically taking what it already described in a different format and describing it in the algorithmic format, but also I don’t understand like what would be the implication of that if we, for instance, had, you know, some changes to the PR like that would still also be editorial. Right? So can we have like conditional stage advancement or something that might further change editorially? I’m not sure. But I’m also not opposed to that. So.

SFC: All right. I’m happy with 2.7 conditional on editor review and understand that 69 is editorial in spirit.

USA: Yeah, I do mention it in the next presentation where, yeah. The next steps for us would be to take the semantics defined in this and write up test262 tests for this as well as do the editorial polishing. Sort of alignment with Temporal which would imply PR69.

DLM: Okay. Let’s hear voices of support. Is anyone opposed to this? Okay. Congratulations. Conditional 2.7.

USA: Good. Thank you so much, DLM, and others for contributing. I’ll see you later.

### Speaker's Summary of Key Points

* The intl-era-monthCode proposal was presented for stage 2.7
* Prior to the presentation, a number of months were spent by TG2 to discuss some of the details of this proposal in detail and the spec text had been updated to reflect those changes as well as their results upstream in CLDR
* The champions presented the changes briefly and explained the scope as well as the limitations in terms of avoiding overspecifying certain details

### Conclusion

* The champions requested stage advancement and consensus was reached after a brief discussion around the last remaining editorial change

## Module Import Hook and new Global for Stage 1

Presenter: Zbyszek Tenerowicz (ZTZ), Kris Kowal (KKL)

* [Module Import Hook proposal](https://github.com/endojs/proposal-import-hook)
* [new Global proposal](https://github.com/endojs/proposal-new-global)
* [slides](https://github.com/endojs/proposal-new-global/blob/main/slides/slides.pdf)

DLM: Okay. Perfect. So we do have another notetaker. If you’re comfortable working alone we can continue. Okay. I will take that as we can continue.

KKL: All right, I’m KKL. And the presenter for the presentation is ZTZ. I think we all know that some categories of proposal are harder to pitch here, the easiest is to add an API, and slightly harder than that the evidence suggests to add a little bit of syntax to the language. I like to think the hardest proposal to pitch to TC39 is this specific proposal. What we wish to convey here is that we’re very sensitive to the history of proposals that have necessitated new categories of global object and the introduction of hooks for host behaviors of which this proposal does both. We strived, though, to find ways to both make the risks less and the motivation greater. And this is the resulting proposal.

KKL: Our central motivating use case, we are profoundly aware is not germane to the bulk of the modern web, but it is increasingly important as it gives users and platforms a way to stand to defend against supply-chain attacks and the sandbox to the growing industry of AI. To that end, we isolated what we believe is the most broadly useful core that enables us to implement what remains of the Compartment proposal from which we carved off evaluators and now just this import hook and a new Global proposal. There is a case to be made for bringing that proposal forth later in terms of providing a higher level API that is more straightforward and easy to use. We don’t want to get bogged up into the details of that given it is not germane to the broadest category of web applications. Nevertheless, our core motivating use case, New Global, is part of a complete sandboxes-within-sandboxes breakfast, which is to say that the confinement properties of that proposal are contingent on doing additional work in user space that we know is tricky.

KKL: With that, I would like to introduce you to ZTZ. Also known as Naugtur, to show you the new Global proposal. Lest we are accused of bringing a freshman delegate in hopes you go easy on him, please, by all means do your worst. He can definitely take it. And a word on pronunciation. I have made many mistakes in the past, ZTZ is not particular about his pronunciation, but grace is indistinguishable with pride. So, ZTZ’s true name can only be uttered by a 56-K baud modem. He is known by Zbigniew (mispronounced) to his mother and country. He is called Zbyszek (mispronounced) by his neighbors. His pseudonym is pronounced according to the Elvish Quenya language—which is to say that only our Finnish delegates are likely to pronounce it correctly. So ZB (pronounced “zee-bee”) will suffice. So ZTZ, please.

ZTZ: Thank you. Yes. Let’s try throwing beginner’s luck on the problem. I’m going to introduce you to the New Global proposal. Let’s start with the problem statement. I hear that’s something the committee likes. We want to offer a minimum addition to the spec that we believe is sufficient for implementing various ideas about isolation that are more light-weight in comparison than other proposals we want to compare this to. And also sufficient for implementing Compartments in user code.

ZTZ: I’m making more pauses by the way, which I know might seem unusual, for the sake of notetaking. I’m trying to make this a practice. All right. Motivation. We have a bunch of motivating use cases. They are not ordered in any way particular. The top two are domain specific languages and test runners, which go to together for the sake of having the about to create the `describe`, `before` and `after` and so on. Specific functions or any shapes of a domain-specific language for testing. And test runners themselves are not only using that but are using isolations for different other reasons which I will discuss further in one of the slides coming up. We also consider a motivating use case being able to shim built-in modules. So running in an environment that’s not Node.JS and also letting the code that runs for the sake of everything or system use built in modules, node JS built in modules is becoming increasingly common as a use case. Our oldest use case is the overall principle of least authority which is the compartment implementation and adjacent solutions including LavaMoat, which is a project I’m coming from. We also consider emulating another host. An interesting motivation. There has been prior art for doing that, although it always relies on building new realms and sometimes more than that. And last, but definitely not least, on this list is isolating unreliable code, which nowadays means letting people generate source code and push it to production without reading. Which is becoming increasingly common no matter what we think about it.

ZTZ: Now a quick look at the design of the proposal. What we want to do in most broad terms is to introduce a level of the direction between execution context and realm. We call it global. It intercepts or relieves the realm of its properties that are `[[GlobalObject]]`, `[[TemplateMap]]`, and `[[LoadedModules]]`. And I’m realizing I said properties, which is incorrect wording. Apologies. The idea is there could be multiple globals within one realm containing those three. And most of the intrinsics remain the same. I need to say most of, because there’s a very small distinct set of intrinsics that will need to change between globals. We will get to that. This is the only remaining language mechanism that we need to introduce to be able to isolate scripts and EcmaScript modules equally, with assistance of the user code being enough for creating complete within-realm sandboxes.

ZTZ: Okay. Now, this slide I wish to start by thanking MAG who started asking questions around this topic of how it compares to other proposals, mainly ShadowRealm. I’m also aware that some of the hosts are now exploring making isolate factories available which is kind of adjacent and it is worth mentioning for this comparison. This proposal, compared to ShadowRealm or isolate factories, is intended to be smaller. We want to minimize intersection with the web standards and spoiler alert, I will ask multiple times for feedback and help on driving this in the direction of still minimizing this intersection because we are aware that there might still be some. This also enables isolation that doesn’t undermine synchronous communication and shared prototypes. And in this point, I need to mention identity discontinuity as something we want to avoid. It also avoids introducing new kinds of global objects, and instead it enables creation of shallow copies into a new global object within the same realm. It aims at not introducing new concepts into the global scope for representing the primitives for isolation. And while use cases may be similar, this proposal being same realm and avoiding duplicating large objects should allow finer grained isolation at the same or lower cost in terms of specifically memory usage. Eventually more.

ZTZ: Now, back to the examples. There’s the first example of test runners and their DSL. This example is way too short, a complete example how a global would be useful for this use case would not fit on the slide. This is just to surface that defining a specific functionality for the DSL within one global and orchestrating the set up of the test runner, so that the test code runs under that global and then the application code being tested runs under a different global. Which would require some fiddling with the import hooks, that we will demonstrate later hopefully. Would solve a lot of issues that test runners are facing. Some of the test runners are using the Node’s `vm` module for partially working through this use case. Some do not. And as a result, a dependency of the application from Node modules could describe the `before` and `after` of the test runner to add tests to your test suite, of which we generally think about on a daily basis.

ZTZ: Now, let’s look at the isolation and AI. And here is where I want to specifically call out KG, we did get feedback from KG early about this. That various levels of sandboxing might not be necessary. Oh, I can see that this feedback is also on the queue right now. I want to still go through why I believe it would be useful. So AI agents generating code are a thing that only increases in popularity. And actors producing code within one code base are supposed to align on intentions, which in my case, is always a myth. Even people in various teams on the same organization were hard to get fully aligned on the intentions of what the application is going to do. Now, with AI coming into the picture, code generated by AI is immune to many ways in which humans align themselves on common intentions. Which is why introducing the New Global and freezing some of the intrinsics would create the most basic level of isolation that would allow us to encapsulate AI code to avoid some very simple and, I’m afraid, common issues where it could come up with names for global variables that happen to collide with code generated elsewhere by the same AI. And some of the freezing of intrinsics or other intrinsics treatment that new Global would allow would also help present misguided attempts of polyfilling JavaScript inline and affecting the rest of the application. I believe it doesn’t have to be the isolation on the level of providing full security like a compartment would to contain the impact of faulty generated code. The AI does not need to be aware of the context in which it is running. And the intention with new Global, and the possibility with new Global, is to create an environment in which generated code would be allowed to work and behave just as it would without any isolation, because we don’t have identity discontinuity, because everything can communicate with the outside world within one realm as if the code was running normally. So that’s the intention of partial isolation which I deliberately did not call sandboxing.

ZTZ: A visual overview of what this would mean. The application sources are in one bubble. We have to be intentional about polyfills that we desire to include. And do it before we freeze everything, for example. And then every other bit of code that comes into the application can be isolated on various levels. So multiple autonomous AIs building pieces of the application could work in various levels of isolation. We can isolate npm dependencies, and even fulfill the use case of LavaMoat to isolate every npm dependency and orchestrate how they import each other. And so on.

ZTZ: To another use case. Emulating another host. I’m aware this use case was brought up unsuccessfully before. But since then we had a bunch of progress in that area. We now have webcontainers.io, which I think it is now two years old maybe, which is a place where you can run Node.JS in the browser. That’s much further than a new Global could go. But we can offer a much more lightweight and sufficient emulation of other hosts within the browser and vice-versa. Which is useful for web IDEs. It is also useful for using Node.JS build and seamlessly run code people can pull from NPM. We can also have it work the other way around for DOM emulation in test runners.

ZTZ: Now to the more detailed design. The interface of the global constructor accepts three optional configuration properties on an options bag. First one is `keys` which is an optional list of the properties that will be available on the new Global created by this constructor. By default, we intend to shallow copy everything including items that are keyed with symbols, etc. But to avoid, and I will elaborate on that later, inserting opinions on minimal sets of globals into this proposal, we want the opt-in to limit which globals are going to be available to be all-or-nothing. So we can get everything or we can get nothing plus only the things that are listed as keys. And there’s `importHook` and `importMetaHook` which we will discuss later in part of this presentation. The things that are different are the unique properties of the resulting global, which is another global constructor that lets you construct new Globals copying from the global that was created before. `eval`, obviously. The `Function` constructor, which does share the `Function.prototype`, but the constructor itself needs to be separate for the sake of having the internals pointing to the new Global. The same for other types of function constructors. Yeah. And the way you pick which global this inherits from is by choosing which global constructor to take from which existing globalThis.

ZTZ: No basic properties of the design. It is a minimal change for implementing user code. We look at the old evaluators proposal and had a realization that an object that conveniently contains all of the evaluators already exists. It is the `globalThis`. So creating a constructor for that would simplify the change. We are avoiding adding new concepts and we are reusing the existing concept of a global. There is also no new categories of global objects. They don’t vary in any way. They are just replicas of the original global. The host still is the one creating the global objects. Which I know at least in some implementations is critical. It would be very difficult to implement taking a specific object reference and turning that into the global. Because in, for example, in how Node.JS interacts with V8. I have seen that part of code and I’m very aware that whatever is passed as a new Global to the `vm` module it will always get wrapped in a blessed object of the host itself. And which I hinted at before. We are not opinionated on the minimal set of properties that need to show up on a new Global.

ZTZ: Yes. We believe that everything after this slide is post stage one concerns. We want to share more details to get better feedback and to socialize the detailed ideas further to maybe explain away some of the issues people might be rightfully pointing out.

ZTZ: So allow me to continue into details of the proposal. First off, when we create a new Global nothing gets automatically evaluated in that global. So it gives the user code a chance to modify it according to its needs. Which serves a bunch of our desired use cases. By default, we copy all properties from the `globalThis` of which it is a global constructor. And some new properties like `global` and the functions and `eval` are going to be included there. And as you can see, the `AsyncFunction`, which here we demonstrate via `getIntrinsic` from JHD’s proposal, it would necessarily be a different reference because it has to internally point to a different global. But the constructor, the prototype behind the `AsyncFunction` or any kind of function would be the same reference on a clean new Global.

ZTZ: More details. The prototype itself. By default, it would necessarily be the same prototype as the “parent”. The parent must immediately be settable on a New Global. This is crucial for a bunch of use cases. Mostly for the reason of wanting to have sandboxing where especially in the browser, the prototype of a global could be removed so that we can disconnect it from the window events if we so desire. For example, for emulation of other hosts.

ZTZ: Yeah. So all properties get grafted by default. So if we define a property on a `globalThis` and create a new Global, the property is going to be there and everything will be there and so on. If we use `keys` and specify a single key, this means nothing is copied unless it is on the list. So `y` is going to exist on a new Global, but capital-O `Object` is not. We don’t want to go into figuring out what undeniables exist and how actually undeniable are there to the site of minimal set. If they are undeniable someone’s going to get them. If they are somewhat undeniable, and modify prototypes and constructors, we can block their ability and put them with something else. This gives opinions on any other globals being treated differently except for any other evaluators. So a global gets other than unique evaluators. Although the functions share a global prototype. I feel like I might have said this for the fourth time now. And other unique intrinsic evaluators share the same rule. As far as we can tell, nobody is using these unnamed constructors to construct functions, but they are going to have to be there and be consistent.

ZTZ: Yeah. Now, we’re going towards importing and the import hook. So by default a new Global will inherit the import hook and module map, which means importing something in the original top level global and in a new Global that was not configured to behave otherwise is going to share instances. Which brings me to an intersection with Content Security Policy that I do care about. The good news is this proposal does not have intersection with Content Security Policy necessary because the intersection was already established by ESM source phase imports, which is currently stage 2.7, which controls how the host can deny evaluation of module sources. So a distinction between evaluating and importing already exists and we don’t need to introduce that. What would be helpful to introduce is to expose a first-class `import` on the global object itself. So if we create a new Global, we do not need to use `eval` to evaluate the import statement to bring in a new module source, instead we can break the rules of a content security policy that forbids eval. And still run manual sources that are not forbidden by that policy.

ZTZ: More on intersections between New Global and module harmony. They go together very well and the new Global use cases would not be fully realized without the import hook. So new Global has an `importHook`, and the import hook can decide whether it wants to reveal the same instance of a module based on the specifier that is being used in the parent global, or it can create a different one even for the same sources. Yep. And then `importHook` also needs to show up on the `ModuleSource` constructor for the behavior to be complete. This code demonstrates the three options that we have for returning from `importHook` thanks to the integration with `ModuleSource`.

ZTZ: And this even longer bit is the final explanation, which I believe might be going too far on stage one really. But this is the final interaction between ModuleSource and a new Global. We can have a ModuleSource that uses local static imports and direct eval to import things, and in that case the import hook of the module source is going to catch these. And then using evaluators within that module source will reach for evaluators from the global that we created with the import hook and so it will reach the import hook of the new Global.

ZTZ: And with that I’m reaching the summary slide finally. You can see that the queue is very long. I will now dictate the summary.

* We’re proposing to introduce a `Global` constructor with minimal functionality necessary to decouple the concept of global from realm. The proposal is the minimum change sufficient to implement isolation including compartment in the user code. It replaces the Evaluators (Stage 1) proposal, that was earlier extracted from the umbrella Compartment proposal.
* We are requesting feedback, especially on minimizing intersections with web standards.
* We are requesting stage 1 for `new Global`.

ZTZ: Thank you, over to KKL.

KKL: And over to the queue.

CDA: Okay. First up we have KG.

KG: Okay. I have a bunch of things to say. First off, thank you for the presentation. I think I understand a lot better what the proposal is trying to be than I did just looking at the repository before. And also a small bit of meta feedback. This is a very detailed proposal. I would caution against doing this level of detail at this stage, because we haven’t even, as a committee, agreed this is a problem worth solving. And you’ve spent a lot of effort going into details on a particular solution to the problem. Which like, you are welcome to spend your time on that. But I think that this is probably an excessive level of detail for a proposal at this stage. That said, I have bunch more concrete stuff to talk about. Can you go back to the motivations slide? Because I think that is the core of anything going to stage one.

KG: Okay. So I think that the broad idea of having a new way of doing evaluation that isn’t in the current global scope, but is otherwise like the same realm as evaluating something, like—running code, so it is not in a separate realm, is an interesting idea. I feel positively about that idea if it is feasible to implement in engines. Although, I guess we have something on the queue later that suggests that that might not even be feasible to implement. But I am very skeptical of basing that on the assumption that people are going to be using `eval`. I do not think anyone should be using `eval` or anything like `eval` like the new `Function` constructor, so I do not like this particular design for solving that problem insofar as this design assumes that you’re going to be using `eval` or something like that. It would be interested in exploring ideas around, for example, evaluating a module source in a different global, but I don’t want the basis of this to be the use of `eval`. Because I don’t like `eval`. And I don’t think anyone else should be using it. With regards to the point here about isolation—

ZTZ: Could I respond to the first part before I forget? Thank you. So yes, the most desired way to use a new Global would be through `ModuleSource`. And further, we are in the process, I don’t remember what the stage is, of standardizing inline module definitions, which is very exciting to me because it would allow building a bundler that doesn’t use any quirks or tricks or heavy processing of the sources but only wraps them and puts them in one file, and still allows isolating by module source however we want with any number of globals we desire. And that would be the main way of using this, and `eval` is necessary to exist in there. And the good way to give short examples to this committee and it has some minor use cases. But I—

KG: Sorry, why it is necessary? Why does eval have to exist in there at all, I don’t understand.

ZTZ: It is somewhat undeniable—but yeah. I’ll take that as feedback. And we will think about making eval optional if possible. That’s an interesting point. Let’s move to the next thing you wanted to bring up.

MM: Sorry. I want to reply more on the eval point. ZTZ I think you already showed the crucial issue which is on your slide about CSP is proposing a position of a capital `Global` by import. The we’re not saying that you have to use import in order to get the benefits of the new Global. We’re saying that the new Global is compatible even with CSP `no-unsafe-eval` environments where you’re only going through module importing selection. However, the reason why I still believe we need to include the new evaluators per global, is that a tremendous amount of existing code in the world uses evaluators. Mostly `eval`, some `Function`. And for that code itself to execute within the scope of a new Global, the evaluators it has access to, must itself evaluate the code it is evaluating in the scope of that same global.

KG: I think I’m more optimistic then you are about the possibility of successfully running most of the code in the world without providing use of `eval`. Like a lot of the code in the world runs under a `no-unsafe-eval` context.

KKL: I will say if we can find a way to avoid, and—if we can find a way that new Globals would be unable to reach eval at all, and instead added to the design for at a later stage the necessity of having an import objects on global objects to kick off the evaluation of trusted sources essentially, that I believe would satisfy the bulk of our requirements.

KG: Yeah, I guess, the—point that I want to make here is less it is important to me that `eval` not exist, and more that I had understood that the design of the proposal was such that it is only useful if you are doing `eval`. And that’s true unless you’re doing these other things. So I don’t want the proposal to go forward if it is only useful if you’re doing eval. If there are other things that are happening, that make the proposal useful without doing eval, then I’m much happier about it. I don’t want the design being based on the assumption of the use of eval.

MM: I think that we satisfy that criteria already.

KKL: Mechanically, taking your feedback into account, this proposal must entrain the addition of a first-class `import` method on global objects so that it could have the possibility of omitting eval on new Globals and thereby not have more paths to eval. I actually kind of really like that gives us a place in user code to deny access to eval to client programs. And we’ll, we’ll integrate that feedback.

KG: Yeah. To be clear, I don’t want to say that it must include this specific feature. That global import method. I’m not sure that’s the design that I would choose for having a way of evaluation. For example, you might have a `.execute` method on `ModuleSource`s. There are a bunch of different ways you might go about doing this.

KKL: Right. Our understanding is that many of the questions are settled by previous proposals. The ESM source phase import uses the dynamic impact to kick off execution of module sources and doesn’t need another one. The reason why this proposal has in this example eval to use dynamic import, is because the eval associates is the only way to reach dynamic import at the moment for the new Global. And thereby, yes, introduce some other mechanism to kick off import would suffice. I agree it is too early to say that is the one and only, but there is already one.

KG: Yeah.

ZTZ: I’m always happy to talk about other options. If you have any suggestions, reach out to me. I’ll try to work them into this proposal. And compare and contrast.

KG: Great. All right. That was my first point. I have several other things to say. I apologize to everyone on the queue. Can we go back to the motivation slide?

ZTZ: All right. I should have learned which one it was. All right. This one.

KG: So the isolation of unreliable code, I would like to explicitly remove as a motivation. This doesn’t do that. We shouldn’t be pretending it can do that. AI can and will reach for sandbox escapes even if you don’t turn it in a sandbox. Like if we are trying to design something that is actually useful for running AI-generated code, it can’t look like this. AI cannot be trusted to not try to escape a sandbox. So either we need to actually make it safe for running code written by essentially the adversary, or that needs to not be a motivation.

ZTZ: Okay. I have two responses to that. One of them is very clearly addressing this. So I’ll start with that. New Global with the import hook is sufficient to implement Compartment, which would provide a complete sandbox in which AI code would not be able to escape that sandbox unless, of course, it can come up with a V8 zero-day, for example. But other than that, it won’t be able to escape a Compartment. So that’s point number one. So if that helps, let’s consider isolation of unreliable code a subset of the principle of least authority point in the motivations. Although, this is coming from me personally, I think some people in our wider group might disagree, but I believe giving people a tool that provides partial isolation is also going to be useful. Similarly to how tools that do AST syntax analysis like linters are useful for detecting misbehavior in AI-generated or even untrained human-generated code. And these are helpful. So there are two different motivations. One of them is to eliminate risks with unreliable code coming from AI. The other one is to minimize the impact of unreliable code coming from AI. We can serve both separately. I’m also happy to skip mentioning the other use case in the future if that would be necessary. But the main use case of fully isolating through implementing a compartment on top of new Global is still on the table.

KG: I think that giving people something that looks like a sandbox but isn’t one is worse than not giving them one because they will trust it when they shouldn’t. Yeah. I’m also a little bit skeptical that this is sufficient to build compartments. But you certainly thought about that more than I have. We can talk about that offline.

KG: Anyway, I do want to move on to the last thing I wanted to talk about, which is that you have two points here about shimming built-in modules and emulating other hosts. There is already a mechanism for that in the platform, and soon in Node and Deno and Bun, or some subset of those, which is import maps. And I think that generally we should try to avoid redoing things that already exist. So I would like to see this sort of take more from the existing solution or worry more about integration with the existing solution. For example, you know, maybe have some mechanism for instantiating a ModuleSource with an import map or something like that. Rather than to design a separate feature with the same motivation.

ZTZ: Okay. I believe it is a different way of controlling the situation of wanting to emulate a host or shim built-ins. It lets you do on a different scale and from a different point. So, this motivation is for doing these things at runtime, as opposed to doing them effectively at build time. Because you do need to generate the import map before anything starts. You need to put things in place. There’s no good way to do it dynamically as the program is progressing or do it dynamically in multiple instances within the same realm. I could elaborate. But I can see on the queue we have a point from GCL that this would be useful for Deno’s implementation of node globals. So I would defer to that part of the conversation as soon as we get to it.

DLM: We have 17 minutes left in the time box. So I guess there are two replies I can just read into the record from JSL plus one not giving something that looks like a sandbox that isn’t. We had this problem for years and Node.JS modules. And from KM plus one also agrees that we should not make things look like sandboxes but aren’t really. And NRO is next.

NRO: Since a couple of months ago, import maps are dynamic, you can say when resolving this specifier from this file go there. And you can just inject new import map rules like after code release is executing. So not trivial, but it might be possible to do import maps at runtime.

RGN: Nor generally my point here, import maps are existing mechanisms for shimming built-in modules and emulating or others. And not serving your needs, they are quite limited, I would rather see further development of import maps or making import matches from dual source objects rather than completely designing a mechanism.

KKL: I think even pursuing that will ultimately bottom out. It is something more complicated than this rather then something similar than this. Import maps entrain I/O. And they entrain the assumption of a URL-based backend which is fetchable over HTTPS. All of them are assumptions that go beyond the pale that we would like to make this expressive of, for example, being able to package an application as a zip file, for example, if that zip file is an asset of the application it doesn’t need to fall through to I/O. And can thereby be more portable between environments with different types of I/O backing their mapping systems. So straitalling with those concerns will end on a hook that is IO agnostic that we proposal.

KG: I don’t think import maps necessarily imply the use of IO. It does right now, but there are a few pretty straightforward ways it can be refined so it doesn’t assume the existence of IO. Especially if we get things like module expressions. But will cede this point, we have other things to talk about.

DLM: A reply from MAH.

MAH: Yeah, we should not design something that looks like a sandbox but isn’t a sandbox. I’m curious to understand better why people think this actually could be interpreted by users as being a sandbox.

KG: Points on this slide say sandbox to me.

MAH: I think the motivation is to build sandboxes, I don’t see this providing a sandbox on its own.

KG: I mean, the reason that I look at this proposal and think this is something that looks like a sandbox is, it explicitly says this is something that’s used for sandboxing. This doesn’t claim to be a complete sandbox on its own, but when that’s the motivation that’s the assumption.

MAH: Does the `with` keyword, you consider that as being a sandbox?

KG: No one has ever told me the point of the `with` keyword was to isolate unreliable code.

MAH: Yet you can build sandboxes out of it. That’s what I’m trying to say here. This is a mechanism to introduce a new evaluation context really, a top-level evaluation context. And you can build sandboxes out of it. This is definitely a goal to be able to more cleanly build sandboxes out of it. I don’t think this proposal tries to pretend this is a sandbox on its own. That’s all I’m saying. I sure would want that this would be made clear for so that users do not understand they can use this just as a sandbox.

KKL: I would like to frame this as a module system feature primarily.

ZTZ: It is only a sandbox because we are talking about sandboxing built on top of it. But I believe outside of this meeting, it would not appear as a sandbox to others. Happy to iterate on that. Although, there’s a bunch of distinct topics that we could get to. So if we could do that in a different meeting, maybe within module harmony, maybe an ad hoc one, that would be preferable.

DLM: Yeah. I think that is fair enough, we are only have 12 minutes left.

JSL (on queue): we are telling people the `vm` module is not a sandbox for years and people try to use it as such.

DLM: KG do you want to speak briefly on your topic as well or move on?

KM: Yeah, if I saw this thing and created a global object isolated from the other thing, I would assume it is mostly designed to be a sandbox or at least it would work as one relatively well. 90% of the time it does and the is the edge cases that both you. That’s what I would expect.

DLM: Okay. I think we should move on to GCL.

GCL: Hello. I’m also skeptical of this as an isolation thing, but it peaks my interest in the functionality in Deno, where we currently run isolated modules in a “separate” global to make it appear they are running with the Node variance of certain globals such as like `setTimeout()` being different in Node versus browsers. And so, being able to introduce new Globals as a language feature would make that functionality far more efficient to implement, I would imagine. So it’s, you know, seems interesting from that perspective at least. Just wanted to possibly throw out some other use cases.

ZTZ: Thank you.

DLM: Okay. NRO.

NRO: Yeah, can you go back to the slide where you were showing `Reflect`? Because I was very confused by that. I.

ZTZ: Almost there. Wait. No, not this.

NRO: Yes. Yes. No. 11.

ZTZ: 11.

NRO: No, not 11. It was maybe 13. Yes, this one. When you say properties are copied, does it mean that the original global `Reflect` is the same as this `Reflect` on a new Global, like the same object entity? Or is it copied in the sense there was a `Reflect` in the original global and it recreates it?

ZTZ: Yeah. We had more context on how this potentially interacts with `getIntrinsic`, but this is the only one that’s left in the presentation. If both new Global and `getIntrinsic` end up in the spec, we would likely need to figure out a way to have `getIntrinsic` be related to the global in which it is being called so that it gets the right values. This is something to explore beyond stage one. It is on our radar. But this is the only item on the slides left mentioning this. I think we have a small section in the readme of the proposal repository on this. But this is something to explore. Yes. The assumption was `getIntrinsic` would get the right one when you ask for evaluators. I don’t have the details.

MM: Yeah, I would like to just put in a bit of history here. When `getIntrinsics` was proposed, it was originally proposed as a global, in which case in this proposal, it would be a per-`Global` global in the same way that `eval` is a per-`Global` global. Then when JHD wanted to move it to reflect, we explicitly discussed in committee several times that the implication of putting `getIntrinsic` on `Reflect` is that `Reflect` itself would have to be a per-global so that the `getIntrinsics` of that `Reflect` object could be about the global that was on. The other possibility that I would find more pleasant is to remove `getIntrinsic` from `Reflect`. But I did agree to allow `getIntrinsic` on `Reflect` under the assumption that we’re using here. That there’s a `Reflect` per-global.

NRO: Okay. Thank you.

DLM: I think we should move on to MAG.

MAG: Hello. Basically my comment is, is that—well, so first of all the HTML spec is actually written assuming that realm and global are one-to-one. So if you go through and you’re like, what is the entry settings object? It says, ah, check the realm and from the realm get to the global. What’s the incumbent global? check the realm and get the global. They are assumed to be one-to-one. And I do worry quite a bit that like there’s a lot of unintended consequences if you suddenly now introduce the ability to have multiple globals. And then there’s the implementation challenge, which is that we flat out inside of SpiderMonkey assume that a global and a realm are the same, like have a one-to-one relationship. And there’s lot of places where we use shorthand and we say, for example, “enter the realm of this global object”. It goes, “(sings a jingle), I will check the global”. Or give me the global of this realm. And it says I know what that is, I have a one-to-one relationship. Anywhere we have ask a realm for the global object that kind of gets wonky now. So I do worry, even aside from all of the complaints, I just want to give you forewarning, I think this is actually like a really big lift to actually implement. And that concerns me. So that’s pretty much my comment.

ZTZ: Thank you for the feedback. Before I yield to MM for more details, I wanted to say that I’m anticipating that the intersection with HTML spec would be, for anything that HTML is doing, it refers through realm to the top-level `globalThis` and that’s the correct behavior. And whichever other global has been created along the way if it has visibility into document and other globals that existed at the top of copying, it will work seamlessly. If we’re talking about a new item showing up in the DOM with an ID that shows up as a global variable, that would not be reflected in a nested global, if I may call it that. And I believe that to be a correct behavior, and I would expect that behavior. I’m open to other opinions on that topic. But I’m more on the hopeful side that yes, some untangling of the relationship between realm and global is going to be necessary for nested globals to behave correctly and their evaluators to behave correctly. But I believe we can reach a specification for the new Global that would disconnect it from all of the web HTML spec concerns. And I’m really grateful for your feedback to date. I’m hoping you will be available to explore further. Now, onto—

DLM: Just a second, I would like to interject. We have three minutes left in the time box. I want you to be aware of that, if you would like to continue to going through the queue, or ask for stage one, or ask for continuation.

ZTZ: If we could get an extra 10 minutes I think it would suffice.

DLM: It would not be today, we have 30 minutes before lunch. And the rest of the topics this afternoon are first. So I believe—

MM: If no one objects, I think asking for stage one. I mean it is only stage one criteria, they are asking for stage one. I propose we do that.

KG: Can we be clear what we’re asking stage one for?

ZTZ: New Global.

KG: No.

KKL: The problem statement is what we’re asking for stage one.

KG: Okay. I don’t love this problem statement either. There’s like various ideas, it’s really not very specific. I guess I’m okay with going to stage one with this problem statement, on the assumption that it means something a little bit more concrete around to specifically, the about to evaluate code in a way that the doesn’t share the current view of the global.

ZTZ: Great.

KG: And then you also have the module hooks, the import hook thing, which I didn’t consider it to be the same proposal and I don’t know when they were combined.

ZTZ: The import hook remains a separate proposal. Although the details of this proposal necessarily overlap with the import hook. So we might consider merging them in the future. We went with splitting into smaller proposals, which is what’s been going on for pretty long time in the compartment world. So we are asking for this specifically.

KKL: I think that this problem statement closes over both of the designs and that compels us to merge the proposal.

DLM: So we’re at time right now. There is a point of order. I suggest tabling this for now, and hopefully, we will find time later in this plenary to come back to this.

MM: Can we just ask if there are any objections to stage one?

DLM: Fair enough. Any objections to stage one?

JSL: Not a strong objection, but I would like to see isolation(?) around the wording of the problem a bit more. It just troubling me that is too kind of open-ended.

KKL: I agree. Let’s refine that out of band to specifically mean the module map, the specific things we wish to isolate that are not intrinsics.

JSL: I just want to be clear, I’m not wording it as an objection for stage one, but if we can get that cleared during the plenary.

DLM: Yeah, why don't we come back with a problem statement? We need to move on with the next topic. We will bring the problem statement back and have a discussion later on. I will capture the queue and we can move onto the next topic.

### Speaker's Summary of Key Points

* We're proposing to introduce a `Global` constructor with minimal functionality necessary to decouple the concept of global from realm. The proposal is the minimum change sufficient to implement isolation, including Compartment, in the user code. It replaces the Evaluators (Stage 1) proposal, which was earlier extracted from the umbrella Compartment proposal.
* We are requesting feedback, especially on minimizing intersections with web standards.

### Conclusion

* After debating the proposal on various levels of details we’ve reached our time limit, along with a conclusion that we need to refine our problem statement to better represent what we are trying to achieve and omit prescribing specific solutions too early.

(conversation continues)

## Import Buffer for Stage 1

Presenter: Steven Salat (STY)

* [proposal](https://github.com/styfle/proposal-import-buffer)
* [slides](https://proposal-import-buffer.vercel.app/)

STY: Okay. Hello world. My name is Steven. I work at Vercel. And on the internet I go by styfle. Today I’m going to be proposing import buffer. I should also mention that GB is one of the authors as of yesterday, so the slides are outdated. Sorry about that. Also, I should mention that I was told that we could go for stage two, originally for stage one and thought we might actually be able to go for stage two. I guess we can talk about that at the end. I do want to call that out.

STY: So this proposal is built on top of import attributes. We have import `type: “json”`. This is adding a way to import arbitrary bytes. So in this case, immutable `ArrayBuffer` with `type: “buffer”`. You can see there is static usage or dynamic usage here. And this provides us a common way.

STY: So, the motivation similar to, you know, being able to import JSON, importing raw bytes lets you extend the same behavior to all files and have an isomorphic way to read the file regardless of the environment. One particular case we run into the case a lot, isomorphic tools like Satori, this is a JavaScript library that lets you render HTML to an image and it works in Node.js and other JavaScript environments, but it also works in the browser. You need to pass it, you know, PNG files and WOFF and font files and things like that. So the problem, if you want to use a tool like this, is you have to write code that is specific to different JavaScript environments. Right?

STY: So you might write something like this. You might check to see, you know, are we in Deno and read a file and go from there, but in Bun we might use the Bun global to get that file. Similarly for Node, we might use `fs/promises` to do a `readFile`. And of course, from the browser, we’re going to do something like a fetch and convert that to an `ArrayBuffer`. And I should mention that a lot of these runtimes are supporting Node’s API because there isn’t a JavaScript standard to do this. So they use an FS read file. But I do think this is still an important JavaScript language feature because we don’t really have a way to do it that works isomorphically with browser and backend or even embedded environments.

STY: Okay. So, the solution, pretty simple. We can say `type: “buffer”` and with our import we get the buffer back. Now, one of the cool things is once we have this in the language, we can have bundlers optimize this behavior. So you know, bundlers will take a lot of JavaScript input files and convert it into a single file. It might be something like this where it comes across an import for a PNG and convert it into base64 and inline that. And now, you can distribute a single file.

STY: So yeah. I mean, similar to JSON imports we have an attribute, sorry, the key is `type` and the value `”buffer”` instead of `”json”`. The host must either fail the import or treat it as an importable `ArrayBuffer`. For environments this would be similar to a fetch, if fetch header would be empty and regardless of the content type that the server might return, you can ignore that. We’re just getting the response body with those bytes. And for local environments with like Node.js, etc., this would be similar to `fileRead`. And the file extension would not impact it. It would be ignored. Again, we just care about those bytes.

STY: Prior art and see, how, how are people doing this today? Right? So we have, Deno just shipped `type: “bytes”` and it looks pretty similar. There is `Uint8Array`. They expressed, I believe there is interest in changing to `ArrayBuffer`. Webpack, as an asset loader and, this is commonly used for like importing PNG and inlining it, Moddable SDK, I guess is an embedded JavaScript runtime. They use this resource class to grab an image and have that embedded into ROM. And then, you know, parcel also has a similar feature using data URL. I believe Bun even has, I believe they use `type: “text”`. I don’t know if they have a general import yet. But they might be interested as well.

STY: Okay. So, why are we suggesting immutable instead of mutable? Or rather why not mutable? You may need multiple copies of the buffer in memory to avoid conflicts between different import types. If you have multiple modules importing the same buffer this can cause detachment issues. So, for example, `postMessage`. So there is detachment issues if it is immutable and you want to do a `postMessage` or `transferToImmutable`, you might have two different modules that are importing the same module specifier. So immutable solves that. And then similarly, I mentioned Moddable SDK and embedded systems if we use immutable they can rely on ROM instead of RAM so it is beneficial for those environments as well.

STY: This proposal started out with `Uint8Array`. We got feedback that has kind of been mentioned we want to go back to this. But the reason why it is—`Uint8Array` for now, is that UInt8Array is just one type of underlying `ArrayBuffer`s there. Is many types of arrays. So, `ArrayBuffer` seems like a primitive that you can, you know, add whatever view you want on top of it. And then why not Blob? Well, Blob is part of WC3. It is not part of JavaScript. It doesn’t seem appropriate for a TC39 proposal. Similarly, something like `ReadableStream` wouldn’t seem appropriate either. And also just adds more complexity if you wanted to read a stream rather than just having the buffer already in memory.

STY: So in summary, we get isomorphic file reads across all JavaScript environments. Its going to make this a language feature. Reduce our boilerplate code. We get bundler optimization opportunities, so bundlers can inline it. And we get to take advantage of memory constrained environments and put it in ROM. Yep. That’s it for me. Thank you so much.

DLM: Okay. Let’s go to the queue. First off we have, it looks like a clarifying statement.

GCL: Yeah. Hello. I just wanted to clarify Deno did not ship that. It is still an unstable feature because it is not specified anywhere. So.

STY: Yep. It makes sense.

DLM: Next, NRO.

NRO: Yes. First, thanks for this proposal. I like it. Yeah, thank you for it. About `UInt8Array` versus `ArrayBuffer`, I would prefer if we used Uint8Array here. The original proposal had immutable array. It was determined that this should be immutable. I think it is perfectly fine to have Unit8Array baked by a buffer. But there are a few reasons for me to prefer a Unit8Array, one is working binary data in practice most common cases working with bytes and Unit8Array is the representation for bytes. If you need any other type of TypedArray, you will need to basically do a conversion step from Unit8Array to the other type of array. But you need to conversion step anyway, you need to start with an `ArrayBuffer`. And also, at least on the web, like the web has W3C guidelines for new APIs. And web recommendation is that every API that exposes generic binary data should do it as Unit8Array, so for the common case there is one less conversion needed. And exposing `ArrayBuffer` is considered like a common case.

STY: That makes sense, I would be curious to hear other thoughts as well. I did have this as a UInt8Array. And there did seem to be pushback. So I’m curious if anyone else has thoughts on Unit8Array versus `ArrayBuffer`.

JSL: I’m in the queue if you don’t mind me jumping. It relates to this. In Cloudflare Workers we had this ability to import data module for a while now. It does import it as an `ArrayBuffer` and it is mutable. Ideally, like if I could go back in time to do that from the start, it would have been immutable if that were available and we would have done it as a `UInt8Array`. So definitely think that leaning towards that is the better option.

DLM: Okay. Anyone else, KG with support from Unit8Array and a message. KM, do you want to speak.

KM: Sorry, no, I prefer the Uint8Array.

DLM: Sure. Also from KM then, and next up is MM.

MM: So I think I was one of the people that objected to Unit8Array. I retract my objection. I’m happy with that.

DLM: Yeah. MF.

MF: Thank you for this proposal. I really like the motivation here. I think this is good. And I also really appreciate that we’ve seen that there’s precedent for this already in experimental implementations, which is very compelling. I do want to question, though, the conceptualization here, which includes like the placement and how it is being done. I know that, you know, there’s already this precedent that is probably a good idea to follow. But you know, I feel like this isn’t really a module system feature. You know, we are not importing a thing that would be eventually used as a module and loaded as a module. And the example you had is a resource loaded as a bitmap. And other things that are not JavaScript. And you know, the feature is like using module specifiers, assuming they are, you know, allowed to be any resource identifier which is commonly the case in many implementations. But it just seems like a little bit shoehorned in. Is the thing we’re looking for more generic IO capabilities? And it seems like it is. It seems like that’s what we want. Does that make the module system the appropriate place to put it? Probably this is not going to change anything, but I did want to bring that up and see what people thought about it.

DLM: NRO?

NRO: Hi. Yeah, I mean, we already have JSON modules that are the same thing. There is a lot of use in having data that definitely replicates to be defined as the model system it makes the match easier to static, and it makes it easier to more easily fetch the things, you don’t have to wait for the module graph to start loading the resource. You can just upload it at the same time. But yeah, this is exactly the same mode, it is just modules. And JSON modules on the web, they are not part of the module graph, they are just loaded basically and then you can inject in the page.

KKL: I think where this defers from a generalizability from AI. It is a figure and allows us to package boundaries in a way a generic IO feature would not be able to. In particular, if we did, having a generic IO capability would allow us to solve the simplest case of an application package being able to refer to its own assets or library package being able to refer to its own assets, but we would lack an ability to specify—specify assets that transit package boundaries or scope boundaries in the parlance of import maps. And this being a module system feature allows us to express that in a way that is both AI agnostic and also packaging agnostic. It makes it possible to express an application that depends on assets that cross packaging boundaries in a single way that is portable across a bundling step without modification of original sources. This is obviously going to be, this is obviously already useful for JSON, it will be useful for other kinds. It is explicitly my hope that the prohibition of using import directives within imported CSS modules gives us an opening so in the future CSS could participate in module resolution as well.

DLM: Okay. GCL?

GCL: Yes, I also feel this sort of instinctual hesitation towards things that sort of look like IO capabilities in the module system. But I sort of approach it from the perspective of like we don’t really have, you know, the alternative methods that other languages, especially compiled languages, have, you know, include bytes in ROS. So having the similar sort of analyzable way to do things sort of makes sense to me. Even if it is kind of like—yeah, not, not like—the most esthetically pleasing at first glance.

DLM: ABO?

ABO: Yeah. So as has been mentioned previously, the HTML spec adds CSS modules and although JSON modules are defined halfway in, like—across both HTML and TC39, it is possible, but if we do not want to define this here we could define this in HTML and then say that WinterTC-compatible runtimes should also support it. So it would still hopefully achieve the goal of being available in most places that matter, like—the goal for WinterTC is all server-side runtimes should implement the common API. And although, we explicitly do not cover things like embedded runtimes, there is a conversation to be had there that could be useful as well.

DLM: Okay. KG?

KG: I think a way this is importantly different from the general I/O capability is that if two different modules which don’t know anything about each other import the same resource there is only one fetch. That is a property that is true of modules and not generally true of I/O, so it does make sense to consider this part of the module system, just because it has that property and the property is important for people to be able to rely on. It is a bit of a kludge, but eh, it seems good.

DLM: Okay. KKL.

KKL: Briefly, I forgot to mention, I untroubled by the fact this would allow you to use the host as an I/O mechanism, specifically because we address that with global and import separation.

DLM: Okay. JSL? Oh, a message. Okay. Plus one, I don’t think it has to be done here. WinterTC is a good option for standardizing buffer. JSL did you want to speak more on the Workers or was that covered by your earlier comment?

JSL: I think it is covered. But a little bit of background on the I/O point. The reason we added it, this predates having any I/O mechanism at all in Workers, we added it because we didn’t have that option. I’m actually implementing a virtual file system in Workers now, that we might have been able to do it that way. But at this point, given the two options I actually like this better for the use cases that we have. So—yes. I can, I get that it does kind of bleed that line a little bit. But I think the use cases and, I think the simplicity of this kind of outweighs it. That’s it.

DLM: Thank you. EAO.

EAO: I like this, with the observation that I think so far in my entire history of using JavaScript, whenever I needed to do something like this from code, I have been importing text rather than bytes. So if or as this kind of makes sense, I think we should also be adding `type: “text”` or something similar to import text assets into JavaScript with the same sort of idea as this proposal, with the obvious type for that would be a string, I strongly feel like we really ought to support only UTF-8-encoded text with that. With type: buffer you would, of course, be able to decode the string value out of that. But we should make the UTF-8 text import less clunky.

DLM: Reply from KG.

KG: I believe that wanting text is very common, but I think this is proposal is well-motivated on its own, there are a lot of good examples and a lot of examples I have from my own experience, and I think text would be a different proposal. I would be supportive of such a proposal. But I think it is a separate thing.

DLM: We have a plus one from KKL and the same from MF. And then, next up is KKL.

KKL: Yeah, I have a mild preference and gratefully hopeful we can prefer on type bytes with a Uint8Array backed by an immutable ArrayBuffer I think that is the least controversial selling point.

DLM: Thanks, KKL. JHD.

JHD: Yeah. I think the use case is great. I like it being an U8 backed by an immutable ArrayBuffer. I think we will be spending a lot of fun time bikeshedding the value of the time. Buffer, however that is spelled. But I think that is something solidly and should be done in stage two.

DLM: Okay. Plus one I love it, from MM. And next we have KM.

KM: `type: "bytes"` makes more sense. But stage one on it.

DLM: Great. So we already heard a number of people that specifically supported stage one. I think it makes sense to call for consensus on stage one. Is anyone opposed? Okay. Great. Congratulations, Steven, you have stage one. And then we have NRO with a topic after the consensus call.

NRO: Yeah, maybe first STY wanted to see if he can get stage two, I think.

STY: Yeah. Admittedly I didn’t even realize it was a possibility until a couple of days ago. So I didn’t look up the prerequisites to stage two. But yeah, I think it is worth bringing up.

DLM: Cool. Okay. In this case, what do people feel about stage two? Plus one to stage two, but not strongly from James. Be nice to hear at least one other person that explicitly supports stage two. Okay. JHD is also behind stage two. NRO also is good with stage two is anyone opposed to stage two. MM also strongly supports stage two. And DJM.

CDA: I did not check. Do we have spec text with all of the major design flushed out and syntax.

NRO: There is a bug in the spec text. It is almost an editorial bug. Everything is good there.

CDA: Everything major is there in the spec?

NRO: Yep.

DLM: MM, did you want to speak? No. Okay. New topic from EAO.

EAO: I figured I’d try my luck. So can we have stage one for this proposal but replacing `”buffer”` with `”text”` and returning a string, presuming that is UTF-8?

DLM: Okay. MF.

MF: No, I’m not comfortable with going to stage one on a proposal I have not seen. I’m sorry, in my head I have an idea of what we want for `type: “text”` and I’m supportive of that generally, but I would like to see that written down.

EAO: But if you are supportive of that generally, doesn't that kind of mean stage one?

MF: The word “that” right there is doing a lot of work.

EAO: Got it. I will bring this back later.

KG: I think you can reasonably try to go to stage 2 or 2.7 if you have it spec'd. We don’t need to go incrementally.

EAO: Especially if we can copy/paste this one. Or as we can. Yeah.

DLM: I think I mentioned the plus one from DJM for stage two. NRO did you want to talk.

NRO: I have a quick request. This proposal, the text for this proposal is very minimal, and most of the semantics would be in HTML, how the fetching of the bytes actually works, how it interacts with HTTPS headers. So before going to stage 2.7, I think we need to have a complete request for HTML that the browsers sign-off. Like basically, we could ship the HTML while getting to 2.7 and then like finishing it on our side.

DLM: Okay. I guess at that on my end, we can break exactly one hour for lunch. Thank you, everyone.

### Speaker's Summary of Key Points

* Change imported type from ArrayBuffer to Uint8Array (still backed by immutable ArrayBuffer)
* Change { type: “buffer” } to { type: “bytes” }

### Conclusion

* Import Bytes has Stage 2

## Continuation: How to make thenables safer?

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/tc39/proposal-thenable-curtailment)
* [slides](https://docs.google.com/presentation/d/1_RCnI7dzyA1COgi_Ib7GkmHioV1nVSEMmZvy0bvJ8Kk/edit?slide=id.p#slide=id.p)

MAG: So the first one was a reply from KM about “wouldn’t it be a cache in the shape of an object?”

KM: Sorry. I think I have forgotten the context.

MAG: Basically the question is whether or not we would actually be okay with storing the internal slot, you know, “internal proto” and whether or not that would be okay? And you were like, yeah, it is probably just cashed in the shape of the object so I think it is fine, I suspect what you were going to say.

KM: Yeah, maybe, I have kind of forgotten the context a little bit. Sorry. This was about—oh, oh. Sorry. Yeah, that slot. Yeah. Like whether it was a built in or what was the—I forgot what was the reply was to.

JRL: So, how do engines feel about the extra bit on every object.

KM: Yeah. It seems like that would sit inside of your internal VM shape and then you would just, that bit wouldn’t be, like actually on the object itself. But—on the other hand, these objects are all basically singletons already, I’m not sure it buys you that much shape with singleton in the object.

KG: I guess I was worried about if this is something that would increase the memory for unrelated objects?

KM: I don’t think so. I think you would probably put it in either some static data that like lives, I mean, for us, it would probably be in what we call the class info that like lives in like text. In your binary. So it wouldn’t actually make the object bigger, but, there would be perf issues because of that maybe, but I doubt it.

KG: People were proposing that user with be able to create more of these objects. So it couldn’t be completely static.

KM: Then it would have to live in the shape probably.

CDA: I’m not seeing it on the queue which is fine. There is a replay from MAH, `Symbol.unthenable`.

JRL: No. It was deleted yesterday. I have it removed.

CDA: Oh, I’m sorry.

NRO: Yeah. Maybe KG also just mentioned it, but it is important userland objects is able to abstain in this, the reason is, yes, there are built in objects like objects defined by whatwg spec that are implemented in JavaScript. It would be great to make it possible for those objects that are like, yes, they are not like actually user objects, but still user objects from the point of view of the engine to obtain properly. Personally I think it would be nice if it was possible to obtain objects even if they were Defined with the class syntax, which means for the object and then the obtain. But maybe it is fine to say, well, no, you must do it in class syntax so you can adjust it to `traded objects for this stream.

CDA: All right. There was just a note from MM asking to bring this to TG3 for further discussion before presumably before the next plenary. It says between plenaries. As, go ahead, I’m sorry.

MAG: I’m sorry, I’m fine with trying to make a TG3 and see what we can hammer out there. I did, I guess my big question here is from yesterday’s discussion, or, goodness, was it yesterday? Yes, yesterday. From yesterday’s discussion, it kind of sounds like while people appreciate the idea of the extra ticks for certain, you know, nice properties, basically, the performance impact rules it out and those who prefer the extra ticks would rather have something that works and so probably I should continue pushing on the internal slot idea. And I just wanted to like make sure that the internal slot actually has a hope of making forward progress before I go off and start actually pushing on it.

MAH: Yeah, I was, sorry, I’m not on the queue, but I’m also wondering if it is worth keeping exploring your second option, which is a mechanism for hosts to explicitly be more robust for this class of issue.

MAG: I’ll review my own slides.

MAH: So, again, whether, do we need operations like a get—like a safe promise resolve or a get—safe promise capability?

MAG: Right. And then the idea would be that embeddings who care about this, or people who care about this, would deploy that instead. Yeah. I think that is worth having a longer discussion at TG3. And I’m willing to spend a little bit more time on that. But my gut still says that the `[[InternalProto]]` flag will be the most successful on this direction. But—I like solving problems with more generality if possible. And then my one concern about the flag one is then we have to name it. And—yeah. I hate the idea of trying to name this.

OFR: Yeah, unfortunately, I don’t have the presentation really paged in. But you were discussing this needing more memory, I would be concerned about it making lookups slower, because we would have to check in multiple places if a property is defined, would that be the case or am I remembering this wrongly.

MAG: So the hypothesis here basically it would be a new abstract operation used only during promise resolution where it requires doing look up, up to a point. So you will walk the prototype chain, but if a prototype has a certain property, AKA has an `[[InternalProto]]` slot or flag or however it is represented in the engine then you stop. And you say, nope. No property. The rest of the promise algorithms continue. So I actually don’t think it should be any slower and if it is slower it is slower by a very small amount and only for promise property look up. So it is a very targeted fix.

OFR: Right. It would only affect the property with the name `then`, or in general any kind of look up.

MAG: We would write the abstract operation it could use any property. But in practice the only deployed version of it would be for `then`. Yes.

OFR: Okay.

MAG: Potentially `constructor`. There is a different conversation thread I opened for an issue that is slightly germane, but slightly off topic for this conversation here.

OFR: Okay.

CDA: JRL?

JRL: So from discussion yesterday it seems there’s, the core CVE issue, which we should be actually trying to fix. The core CVE is because we’re treating spec created structures and trying to resolve the promise capability with those structures and sometimes they have a then and we actually don’t want to treat those `then`s. I don’t think that requires a slot in order to fix. It just requires us to rewrite the way that we define these algorithms. There is also the discussion making thenables safer for user end objects which also does not require an internal slot in order to define. It just requires us to define the way we access the `.then` property in a way that doesn’t make every object slower. That was my point yesterday. So I think, I don’t think doing a flag is not the right approach for this. There are two things that we need here. There is making the small sites that require this in the spec safer. And then there’s the separate argument for making thenables safer from userland.

KG: How do you do this without the flag?

JRL: It just requires a different wrapper. So much capability, the one I remember off of the top of my head is doing module resolution and the `Object.prototype.then` is defined because of HTML tag. We don’t define any, it resolves to the thing we know exactly what it is. It doesn’t try to adopt the state of the thenables.

MAH: That’s exactly what I said, safe operations to have a safe promise capability and a safe promise resolve so the specks can use what it uses and not supposed to have those objects.

KG: Yeah. Those are kind of different suggestions. The safe promise resolve we were talking about it would still adopt the state of the thing but in a later tick. And what JRL is suggesting is the proposal to make certain algorithms not respect thenables. Is that right?

JRL: Yes.

KG: Okay. I don’t think there was much appetite for making certain things not respect thenables the last time we talked about this. But maybe there is.

MAG: Like my one concern with that, I’m particularly interested in taking this and then I have to extend it onto, you know, WebIDL as a spec. Because a number of the cases I’m thinking of, the actual problem is not an EcmaScript-defined spec object that gets resolved, it is a WebIDL object. So WebIDL takes a value and converts it to a JavaScript when you resolve it. The definition it as object prototype as the prototype, or on its proto chain and it is exposed and can actually be a thenables. Why I’m slightly more interested in the flag direction because I think it layers better into into WebIDL. I haven’t thought that deeply about the actual mechanism of doing, like an algorithmic change though, so I’m open to being convinced here that I’m wrong.

CDA: MAH.

MAH: I just spoke. Basically I want to reiterate, I think JRL and my suggestion is very similar it is just how we handle the values that is a slight different. But in general, they are both based on fixing the specs and how the specs handle these resolutions instead of, changing the base objects on which these resolutions may work against.

CDA: JRL?

JRL: The WebIDL example here, WebIDL, I think, either calls promise capability directly or it uses promise resolve which is essentially we just need to change those two definitions that the WebIDL is calling to use a safe variant instead. Like we define the abstract op that they call and we can just define a safe abstract op for them to call, instead of them using the old thing that is unsafe in the example they call the new thing that is safe. But it still doesn’t require us to add a hidden slot to every single object that exists in JavaScript.

MAG: So right now it basically is just new promise capability and then calls `PromiseCapability.resolve`, you’re saying it would be like new promise safe capability, and then call SafePromiseCapability.resolve.

JRL: Yeah.

MAG: Okay. That sounds plausible. This is not a stage two or anything proposal. Like we should just talk more about it and if you want to open an issue that we can concretes it a little bit, I’m totally fine with that.

KG: JRL, would we expose this capability to userland so it could be polyfilled?

JRL: With userland here is you would…

KG: No, right now you cannot have a promise that holds an object that holds a then property. You cannot do that. (edit: turns out to be false, see [tc39/proposal-thenable-curtailment#5](https://github.com/tc39/proposal-thenable-curtailment/issues/5#issuecomment-3145520373)) This would make it possible to create such promises, but only from certain spec items.

JRL: I need to think about this more.

KG: I’m not opposed to having this capability exist in userland. I’m just wondering.

MAH: For userland, I think the minimum scope there. But I think maybe we should have it, as a proposal—and the minimum scope might be a simple promise that is promise check that doesn’t do anything else so you can use whatever userland wants to do in that case.

KG: That doesn’t let you do the thing that this proposal lets you do. Like, you could not implement—just having `Promise.isPromise` does not let you create promise that has a then property, and this thing that we’re proposing does that.

MAH: To be clear, I would be opposed to a promise that resolves into a thenable.

KG: Well, that’s what JRL was suggesting.

MAH: Internally maybe, but I would not want that for userland. I would never want a native promise that results to a thenable in userland.

KG: Okay. Well the thing that JRL is suggesting would make the spec impossible to polyfill.

JRL: The other approach here with the internal slot that says don’t respect this object's `.then` and I define `Object.prototype.then`, whatever is calling the API resolves it with the object, I have still done the same thing, that holds a promise that holds a thenable. I don’t think there is any solution here that avoids the problem of a promise holding a thenable.

KG: Yeah, that sounds right to me.

CDA: MAH.

MAH: Yeah, no, I’m thinking through this. No, I spoke already to my point, but I don’t know how to answer, JRL, you’re right. That seems to point towards more MAG’s solution, most, first proposed solution to make prototype exotic and prevent it from ever becoming a thenable in the first place.

CDA: NRO.

NRO: Yeah. I like in principle JRL’s approach to have like a different AO that we are calling to. But could we be like instead of AO being done in a way that just returns to the user the promise that contains the thenable, could it either be, like a spec internal promises and then the, and then like—when we actually expose the promise to the user at the end of the spec algorithm add one tick to actually resolve the thenable. So that there is one extra microtick in those cases for web APIs, not general for the temp. Only for web API that use this special safe call and only one extra microtick when the algorithm resolves and one extra tick.

CDA: KG?

KG: Yeah. Just with regards to making `Object.prototype` exotic. I do kind of like that idea, but I want to note that not all of the CVEs would be fixed by it. Sometimes you are resolving with a spec-created object that doesn’t inherit directly from `Object.prototype`, it inherits from animation or something, which is why it is nice to be able to do this with more than one thing, other than just Object.prototype.

CDA: The queue has been drained.

MAG: All right. My conclusion that I’m going to write down is basically design continues in pace. People should bring some issues to the repo. I would like to have some longer form conversations about these particularly written, because I’m bad at thinking on my feet like this. And then I will try to bring this back at a later date. And hopefully, come back with something maybe a little bit firmer. Maybe something with spec text and some suggestions and depending how much time I have, maybe even a prototype, we’ll see. Sound good?

CDA: Great. Thank you, MAG.

### Speaker's Summary of Key Points

* Resolved a conversation about whether or not engines would support the `[[InternalProto]]` design; seems unlikely to be too challenging for engines to implement. Discussed a bit of performance impact, suspect it to be low.
* Reiterated the desire, if we were to follow `[[InternalProto]]` that there’s a userland mechanism for this—Deno and other hosts implement Web specifications in JS in a way that would likely desire the internal slot to be set.
* It does seem worth considering other resolve algorithms to be deployed at various points.
* Some discussion of the definition of thenable and if we’re willing to change; some post-discussion discovery that you can have a a promise hold a ‘then’ property with some finagling right now.

### Conclusion

* I think we’ve eliminated the most general form of extra ticks approach from the running. Still some possible designs to explore: Justin proposes that we could explore something akin to `NewSafePromiseCapability` and `safePromiseCapability.[[Resolve]]` which handles this. There is some concern about making sure we don’t leave behind promises with `then` as the contents of a promise which is a danger.
* I would encourage issues to make sure we can follow up on this, and I’ll see if I can’t attend a TG3 meeting to keep pushing this forward.

## Continuation: [Keep trailing zeros in `Intl.NumberFormat` and Intl.PluralRules](https://github.com/tc39/proposal-intl-keep-trailing-zeros) for Stage 2 or 2.7

Presenter: Eemeli Aro (EAO)

* [proposal](https://github.com/tc39/proposal-intl-keep-trailing-zeros)
* [slides](https://docs.google.com/presentation/d/1hKJFrDfiGeqPWm51fQFQb4M4CeYm3ultB7Opef1BVuE/edit?usp=sharing)

EAO: Here. So, this is where I left off yesterday at nearly reaching 2.7. WH mentioned a blocking concern that he wanted to discuss during the Amount presentation. And then after we assigned the stage 2.7 reviewers to be RGN and SFC, Shane completed his review of this. So I think—

JRL: Did you freeze?

CDA: I can’t tell if EAO froze. He looks frozen. You are being frozen or you are very still and very concerned. And we lost him. All right.

JRL: Is sounded like he was saying SFC has approved. Oh, here he is back.

EAO: Sorry. I lost my network, I had to switch to my hotspot. Sorry about that. Yes. I was saying SFC has completed his review of the spec. So I think we might be ready to ask for 2.7. Before I do that, I think the right thing to do is check with WH, who I hope is still on this call, whether I’m correct in asserting that we can address the issue within *ToIntlMathematicalValue* that you identified separately. That is specifically about the behavior of what’s around step 12 where we use the `RoundMVResult`—result to then assign specific values that are too big or too small to positive or negative infinities or to zero. WH, is this the case or is there still something that we ought to address within this keep-trailing-zeros proposal?

WH: You can do this as a separate change, I’m fine with that. My main concern is that we fix this bug quickly.

EAO: Yes. SFC has opened an issue on Ecma 402 for us to track, revisiting the limits on the *ToIntlMathematicalValue*. We aim to do so separately and in parallel with any of the other work that happens to touch *ToIntlMathematicalValue*. But as you might note here, the line here, that is causing the issue is not being touched by this proposal at all. The behavior on that path is unchanged here.

EAO: There is a new topic, SFC?

SFC: Well, you already presented the issues. So that is all I needed to say.

EAO: Excellent. If there’s nothing else on the queue, I would like to ask for stage 2.7.

WH: Sounds good to me.

CDA: Okay. WH supports stage 2.7. And NRO on the queue.

SFC: I support.

CDA: SFC as well. Have any objections to advancing to 2.7? All right. You have stage 2.7.

EAO: Excellent! I think that is it for me unless there was something else procedural I should be asking here for next. In case there isn’t, thank you and good-bye.

CDA: All of the reviews are complete. Right?

EAO: Yep.

SFC: Yep.

CDA: Good. Nothing else.

### Speaker's Summary of Key Points

The reviewers (RGN and SFC) have completed their reviews, and WH’s previously blocking concern regarding *ToIntlMathematicalValue* was moved to a separate discussion.

### Conclusion

The proposal reached Stage 2.7.

## Continuation: Module Import Hook and new Global for Stage 1

Presenter: Zbyszek Tenerowicz (ZTZ), Kris Kowal (KKL)

* [Module Import Hook proposal](https://github.com/endojs/proposal-import-hook)
* [new Global proposal](https://github.com/endojs/proposal-new-global)
* [slides](https://github.com/endojs/proposal-new-global/blob/main/slides/stage1.pdf)

ZTZ: All right. So, yeah, we’re going back to the continuation of what I discussed around globals and the revised version of the problem statement is:

* A way to evaluate a module and its dependency in the context of a new Global scope within the same realm.

And we’re also declaring for stage one that we’re tentatively updating the proposal name to proposal-module-global. With that, I would like to ask for stage one.

CDA: OFR?

OFR: Yeah, I was just wondering. There was a discussion before also about considering whether the stated goal is also achievable with existing mechanisms in the standard. And so, I was wondering if that maybe could also be reflected somehow in the problem statement?

ZTZ: I believe the problem statement reflects the proposal being different from ShadowRealm. If you were referring to import maps, they do not solve the entirety of problem statement because it says context of a new global scope. They could be interpreted as an optional component in achieving its dependencies part, although, this is post-stage1 concern.

CDA: JHD?

JHD: Yeah. So stage one sounds great. But the implication of this problem statement is that there’s more than one global scope in the same realm. There was actually discussion on different topics to suggest it may not be at all viable to have a realm and a global not be one-to-one. So it might be helpful to tweak the problem statement and say stage one, but like with the condition that the problem statement is tweaked so as to not imply that. In other words, if that’s a viable path forward, great. But if that is not a viable path forward, then it is not clear this has gare to go.

KG: I mean, I think the proposal just dies in that case.

KKL: I agree, if this problem statement cannot be achieved on the reality, on the underlying reality of the web platform in particular, then the proposal would die. We do have, we are optimistic that, that can be addressed though. And look forward to speaking With implementers, and investigating ourselves.

JHD: That’s fine, I just want to make sure that like eventuality was called out.

CDA: NRO?

NRO: Yeah, I’m happy with the updated problem statement. Just a question, it is okay for you to focus on the modules because with an eval it also covers scripts, right?

ZTZ: Yes.

KKL: Yes, that is expressly why we’re bringing the proposal. We are doing global of for scripts because we have a mechanism of with and direct eval and proxy, which is able to do most of what we would be able to achieve with this, except for the fidelity of our module system and that we have to do, and we have to entrain Babel to link, in order to support ESM. Yes.

MM: Yeah, just to further clarify in response to NRO’s question. There’s various infidelities, various ways in which we cannot do it for scripts. To a point of performance with the normal language. Such as import expressions, such as if there is a subset defined as the top level and invoked as a function what does it see for its value. There are weird things where we just can’t get it write by building our script evaluations using proxies it all of the rest of the things we’re doing.

CDA: Sorry, MM, you were kind of trailing off at the end there.

MM: Having said all that, I think it doesn’t bear on what we’re asking the committee for, I just wanted to clarify that we can’t quite do it for scripts with existing mechanisms.

MAH: But it is also something we don’t need to explore in this proposal. It would be interesting to do it in this proposal, but it is not a requirement.

MM: Agreed.

ZTZ: Okay.

CDA: All right. We have a few replies in the queue I will read. First one

JSL: I have strong doubts on the proposal as is. Stage one is fine. Expect a higher bar for stage two. MAG is also echoing JSL. While concerns I think we can explore for stage one. KM is plus one on echoing stage two concerns. Okay. All that being said, I’m kind of—to do this, but I apologize I didn’t know we had a queue saved from earlier. I’ll just briefly readout the comments and if folks want to hop on the queue to talk about these more than you can. MM had a comment.

MM: I’m sorry, before we do that, do we have stage one?

CDA: Let’s, if we want to formally do that before we go back to the previous queue, that’s fine. Do we have support for stage one? I believe.

MM: Many people expressed support on TCQ.

CDA: That’s right. Sorry, I was just looking for the notes to conform. Yeah, there were definitely three or four people. I don’t believe that we have an objections to stage one. Wait a moment for anyone to chime in. Lots of concerns expressed about stage two. But I believe you have stage one.

MM: Great.

ZTZ: Thank you.

CDA: I just wanted to quickly scroll up to the screen capture. There’s some replies from MM and KM on something, MM’s comment is about—policy. And—

ZTZ: I remember this is in the context of overlap with globals in the browser and the HTML spec defining certain globals and their behavior in the context of global being a single thing on the realm. And—

CDA: Yep.

ZTZ: This was definitely a stage two concern, which we concluded during the lunch break is that we don’t really want any other global then the one top realm global to be concerned with any of those overlaps. And we will proceed with looking for a solution to that.

CDA: That sounds good. Yeah, a couple of the other comments I think we’re already covered. About stage two concerns. NRO has a comment about different problem statement, I assume this satisfies these concerns from NRO.

NRO: Yes.

CDA: And the last one, I don’t know if we covered this one, KG had importHook cannot be on ModuleSource if it is to its job.

KG: Yeah. I have an open issue about this, but ModuleSources need to be able to be instantiated in workers, that is a different thread, you can’t have them carry things on the main realm that is in a different thread, that just can’t work. But this is a design question for some later time.

KKL: And we anticipate that and our expectation is that the hook would be left behind when transferred.

KG: Okay. My preference would be to do something other than that, like to have a new type or something, I don’t know, but we can worry about it later.

CDA: All right. Just so I’m clear, potentially updating the proposal name, this is renaming what is currently new Global to module global.

ZTZ: Yes. That’s the intention.

CDA: Yep. All right. I believe we have stage one.

ZTZ: Thank you.

CDA: No other comments in the queue. Next up, we have, oh! All right. So, I got a couple of requests here that I haven’t had the opportunity to get into the schedule or to PCQ, which I will do in a second. One is a continuation on non-extensive applies to private in other, why don’t we stop there.

### Speaker's Summary of Key Points

* Presented an updated problem statement: “A way to evaluate a module and its dependencies in the context of a new global scope within the same Realm“

### Conclusion

* With the new problem statement and clarification to the proposal scope the proposal was approved for Stage 1
* Tentatively updating the proposal name: proposal-module-global

## Continuation: Non-extensible applies to private

Presenter: Olivier Flückiger (OFR)

* [proposal](https://github.com/tc39/proposal-nonextensible-applies-to-private)
* [slides](https://github.com/tc39/proposal-nonextensible-applies-to-private/blob/main/no-stamping-talks/non-extensible-applies-to-private-update.pdf)

OFR: Yes, this will be a quick thing. Let me share this page (https://chromestatus.com/metrics/feature/timeline/popularity/5209). There was some worry about this uptick here [in June]. I looked into how is this graph generated? And I think this is more of a presentation issue of the data here. So basically what is going on here is that this is counting incidences where the property occurred in a, in a dump over at httparchive.org. So this shows relative occurrence per month. This uptick has more to do with how many sites are actually indexed in that particular month. So it’s not really comparable months to month. Especially with these low frequencies. So I looked at the absolute numbers and there are something between six and 10 URLs in the whole of httparchive where this counter actually triggers. That is just the update, that I think this uptick here is really to be ignored. Because it is essentially noise.

MAH: Thanks so much for clarifying that.

OFR: Yeah, now, I’m not exactly sure about the process. Can we still try to advance the proposal? Or where are we at exactly?

MM: So we can’t advance the proposal all of the way to stage three because of my not having put together tests in time. However, if there’s anything to be gained by doing so, we could ask for conditional advancement, but I don’t see what is be gained by doing so. I will just wait until the next meeting with tests in hand, OFR, thank you very, very much, between OFR’s contribution on this, and NRO’s contribution on the Babel side, the only remaining issue I’m aware of is tests. So if there are any other concerns that people have here before we ask for advancement to stage three, I would very much appreciate hearing about them.

CDA: JRL?

JRL: In the slides yesterday you were presenting various transforms, but I don’t think in the original issue, I don’t think the code that we identified was actually produced by Babel, it was subtly different, I’m curious if we went through the work to find out what bundler did it and we update that generator and make sure it is not going to fail once we change this.

NRO: I’m not 100% sure now what we have tried, but we had something that looked something like that, Babel it could have been something else. The reason it was tried because it private field was not, because there was something weird there, like Babel was in a position like that. And also to produce the output by chaining to other tools.

JRL: Yeah. My point is maybe this was produced by a different bundler, it is entirely possible it is Babel and fed through another tool. But if there is another bundler producing class static instantiation the same way, we should update that bundler as well.

NRO: There’s swc, but we copied the issue one-to-one in the repo. I checked all of the other main tools and none of them does the same. Most of the tools compile static blocks and static fields at the same time.

JRL: Okay.

CDA: I’m sorry. I’m inputting stuff in TCQ and can’t see the queue right now. Forgot who was next.

NRO: It is empty.

CDA: It is empty. Okay.

MM: All right. I think this topic is done. Thank you, OFR.

CDA: Yes. Thank you.

### Speaker's Summary of Key Points

The June uptick at [V8ExtendingNonExtensibleWithPrivate](https://chromestatus.com/metrics/feature/timeline/popularity/5209) is noise, since the graph shows month by month relative occurrence of a low-count event (6-10 in absolute numbers).

### Conclusion

No more blockers. Modulo test262 integration the proposal should be able to advance at the next occasion.

## Continuation: [~~Measure~~Amount](https://github.com/tc39/proposal-measure) for Stage 2

Presenter: Jesse Alama (JMN)

* [proposal](https://github.com/tc39/proposal-measure)
* [slides](https://docs.google.com/presentation/d/1my6X1ODDckzJmtcWcFI9hRF_I06Z4RQwrq81lbo8wPM/edit?usp=sharing)

JMN: Yeah, I think there were a few issues that came up in our lively discussion yesterday. I didn’t want to ask for a big continuation. There was something we wanted to focus on here in this group in plenary where I think we could get some valuable feedback. That is on this discussion of Intl and the limits that it imposes on mathematical values and now we should think about that with amount or decimal or maybe this is an Intl issue. I think there is a lot of stuff we could discuss there. I think there is an issue that SFC wanted to discus, would you like to pull that up?

SFC: Sure. I can share my screen. Basically what I wanted to do here is, is—gather some input on the direction to take with regards to `IntlMathematicalValue` feedback that we got yesterday from WH so we can, I—I think we had, had a discussion about how like this is technically a separate issue, but also it is somewhat related because, you know, one of the other open issues on the amount proposal is this idea of limits. And I think that, you know, thinking about how we can get good limit for `IntlMathematicalValue` could feedback in on what we choose to do for amount. It would be very helpful to get a little bit more of a concrete next steps regarding the `IntlMathematicalValue` limits which is the thing that we discussed yesterday with WH. So I guess, one thing is if I go to the, sorry, TC3, what is it, yeah, if I go in here and I go to To`IntlMathematicalValue`, this is the current spec text in Ecma-402. I believe this section is the problematic section. Basically what it is currently doing is it takes the mathematical value that is parsed out at the string and it calls RoundMVResult, which is basically casted to a number. And then if the number is either zero or infinity, then instead of propagating the IntlMathematicalValue out and instead basically clamps it, if you will, to either zero or infinity. And this means that, for example, a string mathematical value that is in excess of 10 to the 308th power is not representable in an IntlMathematicalValue. I believe that decimal goes up to about 6,000 as its maximum exponent.

SFC: And, EAO also second here what are the underlying limits on the fraction implementation. I can say there that the limit is on the order of about two to the 15 as the maximum exponent which is still greater than the decimal limit. But I wanted to clarify from WH as well as anyone else who has feedback here what we think a reasonable limit should be and how that limit should be enforced.

CDA: WH.

WH: This is a method which produces a mathematical value. It is not its job the enforce implementation limits. I would delete that step altogether and just return the mathematical value. Depending on what you do with it later, you can impose implementation limits then. I filed issues 52 and 54 which are related to this. Issue 52 also discusses what to do with large or small exponents. So—

SFC: That’s this one here, issue 52?

WH: Yes, that’s the one. So what do we do if we get some ridiculously large values? Like 1.234e1446 is well within the range of Decimal128. Converting it to infinity is not okay, but what should we do with such things if we’re using them for amounts? Choices are throwing, outputting very long strings or outputting in exponential notation. I think throwing is a very bad choice, because it creates a land mine—these things are usually controlled by user input and you don’t want users inputting valid values that crash your site. What about outputting very long strings? Decimal128 alone can generate strings up to 6-7 thousand characters. It won’t crash your implementation, but it is still not very nice. Or we can output them in exponential notation. If we output them in exponential notation, there is no reason to enforce a mathematical limit there at all. Then we should have the discussion of, if we do exponential notation, and then people might want exponential notation, at which point do you switch from normal to exponential notation?

CDA: SFC?

SFC: Yeah. I mean in terms of what we do for these large numbers I think that exponential notation is probably the right approach. Just because we don’t want to get into a situation where it’s very easy as it currently is to have like a one-line of code that causes the browser to allocate like a megabyte or more of string. This is an issue that has been raised before and exponential notation limits the length of the output to the length of the input, which I think it is a beneficial property to have.

WH: I agree.

SFC: Do you want me to also pull up issue 54? I also have another topic on the queue.

WH: Your choice.

SFC: Let me go to my next topic on the queue. Which is actually, no, it is not the next topic. The second topic.

CDA: I moved OFR’s up because it looked to be a reply to that topic.

SFC: That is fine.

OFR: It is sort of related. If I put my implementer’s hat on, I’m trying to wrap my head around what is actually the type of this value. It also seems like the idea is that you can do operations on the value like rounding or also addition in certain cases, I’m not entirely sure. And so, in my mind it would make sense if the value is like some sort of numerical object that we already have in the system and not something completely new that has like a new different set of semantics. So the question is basically, isn’t this, isn’t this is basically decimal? What the value is?

CDA: JMN.

JMN: It is perfectly reasonable to put the implementer hat on. We need that kind of feedback here. To emphasize one thing that amount doesn’t do, which is arithmetic. So at the moment, amount is just a kind of a data holder. If you want to think about it as like a string, that’s fine. From an implementation point of view. Or maybe it could be like a BigInt coefficient and some kind of number exponent. Would be another reasonable approach. But again, so, the thinking is that there’s no arithmetic here. And at most, you would be doing is some rounding. So I mean, if that counts as arithmetic, you can say there is some arithmetic there, but there is a very narrow range of operations involved.

CDA: EAO?

EAO: For the general case, the values represented within an Amount can be greater than the range of values that can be accommodated by a Decimal. The expectation is that by far vast majority of uses of Amount are going to have numerical values that can be represented even by a Number. But the general case, the specific issue under consideration here is what are the maximum and minimum precision limits here. And at the moment, those are arbitrary, which means it is the same as with BigInt where the limits of precision are defined by the implementation. So it could be that an implementation would end up choosing it to limit to the Decimal128 range, but honestly that seems unlikely because that is not able to represent our BigInts for instance. So likely, it would be close to what ever you happen to be using currently in your implementation to hold an `IntlMathematicalValue`.

SFC: I think I’m next on the queue.

CDA: Yep, go ahead.

SFC: Okay. I wanted to circle back to this, something that WH had suggested which is an implementation defined limit. If I go into, for example, the Decimal128 which is based on issue 98. I’ll let you look at this. You can click the links to get there. But the topic of is it better to have implementation defined limit versus spec defined limit definitely came up there. I think this is a question that is good for plenary, because, you know, having well-defined behavior seems to be beneficial here. It’s kind of odd if, you know, one engine decides to have one limit and another engine decides to have another limit especially if the limits is fairly small, EAO, for example, says an implantation can have decimal as the limit for an amount and another one chooses to have a much different limit this could cause code to be incompatible across the two engines, that seems to be a not good outcome. So I was hoping to get some feedback there on like whether it should be defined or not. Definitely when we discussed this in the context of IntlMathematicalValue initially, this issue 98, we discussed this in 2022. There seems to be agreement that there would be like a spec limit. And—yeah. This is, this is, for example, me discussing in the TG2 meeting and we also discussed in a TG1 meeting, that a spec defined limit is superior. This is different than BigInt, because I also found the BigInt discussion, in which case it is implementation-defined was the outcome. That was five years before we added `IntlMathematicalValue`. Is there a queue to discuss this. Yes, there is, let’s go ahead and go through the queue.

CDA: WH.

WH: This has come up periodically. More than 20 years ago we had the same discussion about numerical literals: if you type a numerical literal into EcmaScript and enter the ridiculous number of digits, is an implantation required to consider all of them when converting that thing to a Number or give up at some point and consider only a limited set of leading digits? And we decided to not nail it down completely. So—there is some latitude for implementations as to how many digits they want to consider of precision. Now, for this specific case of Amount, I would be very sad if any implementation chose a limit that’s less than the 34 digits that Decimal128 gives you. I think something like 100 significant digits is reasonable. This comes up for both the number of digits you might provide in your string as well as the maximum exponent.

CDA: EAO?

EAO: So, as I understand it, by far the closest recent historical analogy to one way of answering this question is the way we ended up with a BigInt that does not have a spec mandated maximum limit, but the implementation upper limits for those. So I don’t know if anyone can comment offhand here, but getting feedback within this context for Amount in particular, but also to some extent the `Intl.NumberFormat` limits on whether there are any concerns that are not necessarily obvious from implementer point of view that ought to be taken into account with, for example, removing the limits in `Intl.NumberFormat` and not adding limits to Amount in the spec.

CDA: NRO?

NRO: Yeah. This, should we talk about limits on mathematical or number of significant digits? Because if I have, let’s say I started things as a BigInt and exponent, if I have like 1e(one trillion), that is like it is represents 1e(one trillion), it is a huge number, but it doesn’t require that much memory to represent it. It is very likely someone starts writing down a number with hundreds of digits, because you need to have the string with hundreds of digits there. WH?

WH: The answer to your question is both. We need to consider both. The reason I want to have exponential notation is that we don’t want amplification. If someone types in “1E1000000000000”, we don’t want to generate a string with a trillion digits, it is better to output that in exponential notation. So, as long as number of characters of the output is not significantly bigger than the number of characters in the input I’m happy. But I am also okay with implementations defining some limits on both the exponent range and on the number of digits in the mantissa as long as those limits are at least as high as the range provided by Decimal128 for both of them.

CDA: SFC.

SFC: Yeah, to respond to NRO’s question. Once difference here is every implementation that I’m aware of, that stores these large numbers, the exponent is typically stored as an integer. Like as a small integer. And then the mantissa is stored like on the heap somewhere. Right? Which means that the limit for the exponent is necessary much smaller because it doesn’t have, it doesn’t have the ability to overflow to the heap. And the limit on the mantissa is more of like how, like how much memory do you want to have to allocate to store all of those digits?

CDA: All right.

SFC: Is there anyone else in the queue?

CDA: Nope.

SFC: So, I guess my, my conclusion here, or the next steps rather, not, not a conclusion, but more of next steps I think we should, you know, go back and look again at what the more reasonable limits would be. I think WH gave us good goalposts there, which is useful. I think this discussion about implementation-defined versus spec-defined is not a question that has been completely resolved. But I think in terms of giving like almost, you know, a reasonable at least minimal supported range is something that I think we should all be able to hopefully agree on. I plan to follow-up with maybe a pull request in the next meeting or in a future meeting, I’ll try to target for, you know, a meeting later this year to address this question so that we can continue iterating. We have a number of issues now, the one that I filed and the ones that WH’s created to continue this discussion on GitHub.

CDA: Great.

WH: Sounds good.

CDA: So SFC, am I correct in assuming that we bundled your request to discuss revisiting limits issue into this one?

SFC: Yes. That’s my understanding. Unless JMN am anything else to discuss in the decimal continuation.

JMN: Yeah. That’s right. I was stepping on SFC’s toes with the continuation. There is a number of other issues, because as SFC positive said we can iterate on these in the champion group. We don’t need to hash those out in plenary right now.

### Speaker's Summary of Key Points

* List
* of
* things

### Conclusion

* List
* of
* things

## Import Buffer—reviewers

* [proposal](https://github.com/styfle/proposal-import-buffer)

CDA: All right. Last order of business for the day, stage two reviewers for import buffer. I think that STY champion is no longer here. But we need to do this anyway, we can do it without him. NRO has volunteered to review. We need at least two.

NRO: We need a reviewer that is not active in the—

CDA: I don’t think that I caught that.

NRO: It would be great to have a reviewer that was not active in the module harmony group.

JSL: I can as well.

CDA: JSL—EAO?

EAO: I opened my mouth about the type: text thing, so maybe it’s fair to review this for 2.7.

CDA: Okay. Designated reviewers, NRO, EAO, and JSL. Perfect.

### Conclusion

Designated reviewers: NRO, EAO, and JSL

## "write your own comments" continuation

Presenter: Kevin Gibbons (KG)

KG: Yes, I just wanted to say that I opened a draft PR to the how we work repository adding my proposed policy for use of LLMs and authoring your comments. I tried to interpret the feedback about explicitly allowing the use of LLMs for proofreading, but open to others there, anyone who is interested in that topic, please take a look at how we work repository. Thanks.

CDA: I just have a comment on that. I think it is fine to work on it there, there is a separate question of people want it in the code of conduct or not. Assuming it is not going in the code of conduct, is how we work where it would go otherwise? My understanding the how we work repo contents were like the committee explicitly decided that we didn’t need plenary consensus for what is in that repository. And if this is something that’s going to be enforceable via the code of conduct, how we work may not be the best place for it. It is probably fine if we all agreed to it, but just, if it didn’t go there, where else might it go? Like could it go in the contributing guide for 262?

KG: I have definitely put normative conventions in there. And those are things that we do have consensus for. So I don’t think it is true that repository is only things that that don’t require consensus. Some of the things, certainly, but not all of them.

JHD: Additionally, once the document exists, wherever it lives, we should be linking to it from multiple places, including the 262 contribution guide and so on.

CDA: Okay. Great, thanks for doing that, KG. MF?

MF: Yeah, I think that we want this to come up—like this is about posting content, would we also want the issue template and request template to include the links to it and like if, does it have to be anywhere other than that place? I don’t actually know where those live. They’re in some shared repo. Right?

CDA: PR templates.

MF: Yeah, issue templates and PR templates, they are in the repo. Right?

CDA: No, I don’t believe they are, I think they are specific to the repositories they live in.

MF: Okay. Is it not handled like security? Security is in the shared repo. All of the repos get the same security. I’ll get off the queue.

AKI: It is the .github repo at the org level. Yeah. Yeah.

MF: Thank you.

CDA: Yes, the CONTRIBUTING.md, SECURITY.md. CODEOFCONDUCT.md. They live in the .github repo and what GitHub calls community health files, they will propagate automatically into all of the repos of the org if there are not files of the same name, but there are no issue templates in the .github repository. So any issue templates are in their respective repositories.

MF: Okay. They should be in this repository, we’re mostly seeing this abuse as GitHub issues, pull requests, and ES Discourse posts.

CDA: Okay. Sounds good to me. Any other parting thoughts before we adjourn for the day?

AKI: Yes.

CDA: Okay. Yes, go ahead.

AKI: Just a reminder, everyone, to, sorry my washing machine is going. A reminder everyone to please double check your summaries and conclusions. Make sure that they make sense. Make sure that everything you said today and yesterday made sense. If you gave a verbal summary conclusion. Go and make sure it is readable. Ideally in bullet points, I don’t think It is mandatory, as long as it is short enough to be readable. Just that. Thank you.

CDA: Thank you, AKI. All right. With that, we will give everybody some time back and see everyone tomorrow. Thanks, everyone.
