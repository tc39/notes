# 112th TC39 Meeting

Day Two—21 January 2026

**Attendees:**

| Name              | Abbreviation | Organization       |
|-------------------|--------------|--------------------|
| Waldemar Horwat   | WH           | Invited Expert     |
| Duncan MacGregor  | DMM          | ServiceNow Inc     |
| Keith Miller      | KM           | Apple Inc          |
| Philip Chimento   | PFC          | Igalia             |
| Ben Allen         | BAN          | Igalia             |
| Nicolò Ribaudo    | NRO          | Igalia             |
| Richard Gibson    | RGN          | Agoric             |
| Caio Lima         | CLA          | Igalia             |
| Ron Buckton       | RBN          | F5                 |
| Peter Klecha      | PKA          | Bloomberg          |
| Steve Hicks       | SHS          | Google             |
| Istvan Sebestyen  | IS           | Ecma               |
| Jack Works        | JWK          | Sujitech           |
| Dmitry Makhnev    | DJM          | JetBrains          |
| Josh Goldberg     | JKG          | Invited Expert     |
| Olivier Flückiger | OFR          | Google             |
| Jonas Haukenes    | JHS          | Uni. of Bergen     |
| Lea Verou         | LVU          | OpenJS             |
| Aki Braun         | AKI          | Ecma International |
| Chris de Almeida  | CDA          | IBM                |
| Chip Morningstar  | CM           | Consensys          |
| Dan Minor         | DLM          | Mozilla            |
| Jordan Harband    | JHD          | Socket             |
| John Hax          | JHX          | Invited Expert     |
| Justin Ridgewell  | JRL          | Google             |
| Michael Ficarra   | MF           | F5                 |
| Mark S. Miller    | MM           | Agoric             |
| Ruben Bridgewater | RBR          | Invited Expert     |
| Ujjwal Sharma     | USA          | Igalia             |

## Composable value-backed accessors for Stage 1

Presenter: Lea Verou (LVU)

* [proposal](https://github.com/LeaVerou/proposal-composable-accessors)
* [slides](https://projects.verou.me/proposal-composable-value-accessors/slides/)

USA: With that, let’s move to the first topic that we have today, which is composable value backed accessors. LVU is here on the call. Are you pretty to present?

LVU: Sure, let me just share my screen.

USA: Awesome.

LVU: Mm-hmm. Can you see my slides?

USA: We do now.

LVU: All right. Should I start or are people still getting ready to take notes and stuff?

USA: I think it should be okay.

LVU: All right. So let’s first talk about the problem space of what this is trying to solve. As a recap, in the November 2025 plenary, I brought this Stage 0 proposal of class fields introspection, I’m sure many of you might remember it. It was about exposing public class fields through a data structure so that classes could be introspected. The idea being that you could already introspect accessors and methods, but not fields. Even though they are actually often part 206 public API.

LVU: There was not consensus for Stage 1 for that because it was argued that fields are internal implementation details of the constructor, which makes sense. That is how they’re implemented. And also that they—that would violate abstraction, because even though in name, they are public class fields and often used for things that are less public, such as implementing work-arounds because JavaScript doesn’t have protected and things like that. But however, in the last bit of that discussion, there was general consensus in the room that we do need a way for classes to declare the actual public data properties explicitly in a way that can be introspected. The lack of consensus was just about whether this needs to be explicit by the class author or whether any class field could be introspected. So this is trying to address that problem.

LVU: And I’ve been working with MF and JHD on fleshing out the first class protocols proposal, which I’m now convinced is a much better solution for class composition than either mixins or most other things. However, we—we do have consensus that class fields should not be able to satisfy protocol requirements since that would expose class fields to the outside world, which based on the previous plenary we don’t want to do. And also for different reasons that protocols should not be able to provide class fields, because if they could, you need to have initializers and if it’s—and if it’s the implementing class, that leaks when instances are being created. We don’t want that. If it’s anything else, that’s a serious inconsistency—we shouldn’t have the same syntax mean different things. So we decided that they cannot satisfy or be provided by first class protocols. However, that means right now protocols can only be satisfied through accessors and methods and can only provide accessors and methods, which with the current status quo, that can be cumbersome.

LVU: And there’s the question: what is the right primitive? If we allow classes to hear my data property that are actually part of my public API, what should that be? I don’t think we need a primitive for that. Accessors are the perfect fit and often—that is what host environments often use for their public data property, accessors that set and read a private slot. They’re—accessors already part of the class shape, they’ve already introspectable and they’re often 2/4 of a lot of public data properties anyway. Often you start with something that just reads and writes data, and then eventually needs change. Maybe you need to validate, maybe you need to transform the values before you store them, maybe you need some side effect when the values are changed. There’s all sorts of use cases where you start with a data property and you eventually end up with an accessor. All we need is to basically make—all we need is to basically make in—can you actually see my pointer? You can’t, right?

CDA: Yes.

LVU: Oh, you can see my pointer?

CDA: Yes, you’re doing an imaginary circle with your pointer.

LVU: Okay, so we basically need to make something like this have similar DX as public class field, and I know what many of you are thinking right now. Have you heard about the group the node accessors proposal? Yes, you have. I’ll get to it soon. Please bear with me. So once we start talking about how can we improve the DX of finding certain cases for common accessors, the natural expression is what else can we fix around accessors, can we fix other common use cases of accessors? And a little bit of background, like from a human factors perspective. We all know good APIs make simple things easy and complex things possible. If you put this in a chart, 2D plane of use case and complexity, you basically want a dot somewhere in the lower left, because simple things should be easy, and you want something—and you also want to point somewhere on the far right because complex things should be possible, and the lower the bet, but it could also be higher. However, there’s also a lot of use cases between these two points and how we make complex things possible matters a lot. And I would argue that most complex things are actually additive. They’re basically the simple thing plus a little bit extra something. And there’s two core paths to make complex things possible. There is a very common way that you see in APIs is there’s an API path for making simple things easy that just lets you accomplish the simplest of cases very easily, and if you want to go beyond that, you have to entirely recreate the simple things as well. You have to rebuild the entire simple thing before you can add anything to it, which introduces a usability cliff, because now a small increase in use-case complexity gets you a disproportionate increase in effort. If you use the HTML video element, you’re familiar with one element of this. There’s the control that gives a nice mobile friendly tool bar that works very well for what that tool bar includes. If to you go beyond that, let’s say add a button to it, now you have to build your own tool bar from scratch. And then there’s also the way of providing simple thing that are also extensible through progressive defaults, for example that allows functionality to be layered on top of the simple things. So incremental—adding incremental value requires only proportional effort and not recreating anything. I would say one example of that is the `Intl.DateTimeFormat` and related APIs. You can get a locale aware date very easily, and also provide a lot of with additional options to customize the output and customize it very deeply.

LVU: So accessors use the first model right now. Even though most use cases are actually backed by a real data property one way or another, sometimes it’s a private property, sometimes it’s some other property, sometimes two properties nested in some deep object somewhere, but usually there is actually a real data property behind them. I’m struggling to think of many use cases I’ve seen that don’t have any real data property at all. However, the current accessors syntax requires all the plumbing to be rebuilt from scratch before additional functionality can be layered over it. And you could argue it’s not a lot of plumbing, but in certain domains, you have a lot of properties, like in the DOM, for example, in observe components where you’re making elements that subclass native elements, it’s not unheard of to have like 30 data properties. I can give you examples. So it adds up without conveniences.

LVU: So one example is data validation. Suppose you have a property and you want to throw when it’s not a positive number, right? Very common thing. You go from this, that is very simple and easy and readable, to this entire thing. What you started with was all signal. Every single part of the class syntax was meaningful, there’s the class name and assignor and value. Everything is meaningful. And now you get something that is about 50% boilerplate and you have to help town for the actual meaningful—hunt down for the actual meaningful bits. A second problem statement is can we improve signal to phase ratio of these common use cases?

LVU: And let’s get back to the grouped and auto accessors proposal. Because this is quite relevant. And in some ways it is also complementary. So the grouped and auto accessors proposal lets you turn this simple case into something like this. Which at first glance, this looks great. It’s all signal. And this is—it’s not exactly like this because the private property is not hash N, and it sugars to something like this. And let’s go back to the data validation case where we wanted to add a little bit more logic, and now the main help question get is we can use grouped access force not repeat the property name and then we can decorate the accessors as a whole, which is is very useful don’t get me wrong. But it does not address the issue of incremental values should require incremental effort. It still has that cliff.

LVU: I would also question whether—this might be a little bikesheddy, but I would question whether accessor is the right framing as a concept. So for the simple case, when you don’t have any logic and you’re just effectively declaring a data property that actually becomes part of the class shape, I would argue that in—from the point of view of the mental model of the author writing the language, the accessors are essentially implementation details. The user intent at the moment is not I want an accessor. Accessors are a means to an end. Accessors are something that gets us our data property to become part of the class shape. But they’re not the actual intent, and usually it’s a better practice to design UIs and APIs around the intent. I also, from what I observed interfacing with authors, it seems that a big chunk of JavaScript authors are not even familiar with accessor as a term. And as—just for illustrative purposes—I asked a few days ago, I said without searching, would you be able to explain what an accessor is in JS? And about 7 out of 10 of JavaScript authors replied no. And you could argue there’s a lot of snowball sampling bias, but this also validates my own experience 	talking to JavaScript developers, that this is kind of an obscure term them and completely anecdotally and maybe don’t include that part in the minutes, but \[omitted]. So I think we get—we might be—our per expense might be a little skewed because of how common the term is because everybody in this group knows what an accessor is. And even for JavaScript authors who do know, the current mental model is does it run logic on reads and writes? Then I need an accessor. Does it not? I need a data property. So this kind of merges that mental model. And yes, I am also suggesting we generate an accessor behind the scenes. I’m not suggesting we introduce a new primitive. Don’t get me wrong. There’s a difference between whether in is up front and center in the syntax and whether it’s implementation question tail. For example, we did not design class syntax around functions, even though it is actually based on functions and prototypes behind the scenes. And I would suggest that in is—this should also be the case here, the syntax should be around what user is actually trying to accomplish.

LVU: So there are two problem statements here, which I know is unusual. The first problem statement that actually motivated this was need a higher signal to noise ratio way to queen these data property that are part of the class’ public API that become part of the class shape. And JHD gave a really nice example in the thread yesterday that, for example, regular—RegExp objects have a flags property, and even though it’s a data property, essentially, you can actually introspect it on the class shape. And it does run silent validation logic as well. And the second problem statement is that additive accessor use case are so common they do deserve better DX than the general accessor syntax.

LVU: And you might ask why should we solve them together? Why not just have two proposals, each of them solving each of these problems? I think there are good reasons to solve these problems together. First, as I mentioned, public data properties often evolve in into accessors. In version 1, you’re defining a data property, in version 2, often this becomes an accessor. So you’re going to hit this very quickly anyway. And I think that solving them together does cob constrain the solution space, which at first seems like a drawback, let’s explore both problems separately and come up with solution that are not possible if we solve them together. And I think it’s a productive constraining of the solution space, because if we do solve them separately and introduce separate pill activities that could add more clarity to the language. Also for something like this to work for the meta programming use cases I discussed in the previous meeting, it needs to be universal in the ecosystem. There is more value for the ecosystem as a whole than the incremental value from the each individual author defining their data properties that way instead of the current practice of using class fields. Like, we need to motivate them to stop using class fields for these things. How can we motivate them enough? Especially when people are defining APIs they’re often not thinking of the meta programming use cases. And I think something that lets them more easily add value down the line might be a good additional value add and it might increase motivation. This is a hypothesis, I could be wrong.

LVU: And this problem statement is basically the core of this proposal since this is for Stage 1. So it’s all about the problem statement. There is a syntax exploration. It is important to note that any syntax at this point is meant to be illustrative. How could something like this possibly look like? It could end up being completely different. But just to see the discussion. So by looking at use cases, it basically seems that there are two core components of these use cases if you break them down conceptually. There’s a base, like, what is the actual data property that is storing the value? And in a lot of these cases, the actual data properties are irrelevant. It’s only created because you have to create today, and it doesn’t actually matter. You never access it outside the accessor. And the only reason you need an accessor today is, well, either making the property part of the class shape, in which case you could stop there, or layering a little bit of additional functionality on top, data validation, for example. Should the write even happen, and some of them—in some APIs, it—in some APIs, the rights are rejected silently. Even in JavaScript APIs, if you set RegExp flags to some silent value, it gets silently rejected. In DOM APIs this is also common. Or it could also fail loudly. There’s data normalization, transforming the value before it needs to be stored, like, for example, accepting both strings with numbers and numbers, but actually storing a number. Side effects, before, after it is—the write happens. And then there’s also another class of use cases that may or may not be out of scope. Whether the actual value is stored in an existing property, whether that’s a private property, whether that’s a property of some other object, whether it’s another public data property, and we just want to layer stuff on top of it. Like, we may want to layer data transformation on top of it, access control, have a property that can only be read but not written from the outside, for example. And if you know—and the most discerning of you may notice that these have a different shape, because I don’t think these make much sense when you have an internal property as the base. What’s the point of transforming it on reads if you can’t access the underlying data property separately? And not all of these need to be in scope. Especially the layers presented as examples of what types of common functionality we might want to be able to layer on top of it. The main thing is this separation of—we have the base that is interfacing with an actual data property and then you have these layers of functionality on top of them. And I’m sure there’s a better way to call them than layers and I’m going to call them layers for now.

LVU: And the good thing about this type of approach is that these components are composable. They can ship independently, and every single bit of these can shape and be developed independently, possible eleven as a separate proposal. The base can sugar the regular accessor. If we were starting over, we could say that this is a case where you can have a value property that is also an accessor. That ship has sailed. So probably the most reasonable something would be for the base to desugar a regular accessor. And the layers there’s many ways to implement that, they could be descriptors and built in decorators. I think it’s common enough that it should be something built other than user-land so other code can depend on it.

LVU: Some other interesting prior art is—this is not a terribly common concept across languages, but there is some prior art. Swift has property observers. They’re called will set and did set. Which let you run side effects before/after a property is set. And they essentially let you accomplish some of these use cases by overwriting a value, which I think is a little inelegant. But there’s some prior art.

LVU: And then providing some syntax for the internal property, for base case of having an internal property with the data property itself doesn’t actually matter, it seems that the more—that one way to do it might be a keyword like maybe data or maybe property, and for most—for a lot of the issues with—for the first problem statement, this alone could suffice at first, for the first class protocol use cases, for class introspection use cases. And the value add is not just the elimination of the boilerplate, but also the cognitive overhead of having to name another property, picking the right convention, do we use a private property, do we use an underscore property because maybe subclasses need access to it too, do we use a symbol. Like, it just eliminates all of this cognitive overhead. And I do think, though, that whatever the actual line values stored in the case should probably be some internal slot that is not accessible or observable in any way outside the accessor. It should not matter whether it is implemented with private property or not or maybe it’s implemented with a data structure and an internal slot, or maybe it’s implemented with WeakMap somewhere. Like, that should not be observable. It should be possible to even change this down the line. Right now we don’t have private properties for objects, so the auto accessor proposal doesn’t support objects. If this becomes an implementation detail, we could support objects from the get-go. Which I think is important because often objects are used to hold future class members. There are helpers for class composition that depend on objects reading object descriptors. And it would not be great to break this.

LVU: And we could have a similar base syntax for when the existing property is some other property, essentially a binding, it could be a property chain. And this unlocks a lot of use cases that are object delegation. Again, if any of you have written web components with element internals, there’s a lot of—like, dozens of properties that you often need to expose to the outside world that are basically just literally taking the internal element's properties and just exposing them for form associated elements, for example. Or even first class protocols. Even though we’re discussing adding sugar for this in their current form, if you want to expose the provide members of the first class protocol, you need to write glue code to say I’m going to expose this symbol as this public string property in my class and something like that could make it easier. And then for the layered functionality, again, there’s so many options of how that could be done. But a big bifurcation, a big fork seems to be do we introduce new syntax or do we have built in decorators. And yes, so far decorators have been mainly discussed as a user land thing, and it might be good to have a design principle on whether we want to host environments to provide built-in decorators, and I believe the consensus is we do. We just don’t have any yet.

LVU: So built-in decorators could be an option. And I do anticipate that a lot of the—a lot of pushback would be but we can just use decorators for this. And indeed, that would make the scope a lot smaller. We—all we need to do is provide function, a decorator, and that’s it. Whereas any syntax change is more substantial, it slows down adoption because you need a lot more adoption, can’t polyfill it as easily, you need to transpile it. I do think there is value in a dedicated syntax. Even little things like if you use decorators for this, you have to pass the entire function in the decorator, which kind of puts the actual important bits of the property name, the property initial value, you have to put that after all of the decorators. Which is fine if the decorators are one liners. But if it’s like some more complex logic, and yes, you can abstract the complex logic away, but we know how people write code. And also one reason I like the approach of keeping them separate is that it is lossless. It means we can actually maintain the distinction of this is my setter and this is the code for, say, validation or transformation or whatever layers we decide that we actually—that are actually important enough. They could even be decorated separately in the same way get and set can be decorated separately. Whereas the only way to do it with a decorator is just wrapping the existing setter. Now you've lost a reference to your setter function. You can’t compare it with anything. Also, there is no immediately obvious imperative API, which I believe for the decorators by design. If it’s a new method definition Ko word and new scripter keys, then you just have object define property and it just works. Similarly, object literal (?) comes out of the boxes and it could compose with any member. Whereas if it’s decorated it needs to be applied to accessors and not be applied to data properties. Although, that needs some explanation, which will come in the next few slides.

LVU: So one other potential direction is that regular data properties could be auto upgraded the first time you use one of these. And I’ve used validating in these examples. This is just an example. There a lot of—there could be a different one for side effects like finally or whatever. There could be another one for normalization. It depends on what we decide is important enough. Like, for many of these, we could decide actually this is our scope. Do it with classic accessors. And for example, we could define it so that we don’t—if you don’t have to specify that this is a property at all. If you have something like this, it is automatically upgrade, which also allows you to not define it at all if you don’t care about the initial value.

LVU: And like I said earlier, I think the group accessors proposal is nicely complementary with an approach like this, which is again only one approach. Remember, any syntax is just illustrative. If we do go with something like this, then the group accessors proposal is fantastic for making it a single conceptual unit, eliminating repetition of the property name. Basically the same reason group accessors are valuable today when we just have get and set. So to recap the problem statement, we need classes to explicitly define what properties are part of their public API even if they don’t run logic. And I think additive accessor use cases are so common they do deserve better DX. And I think there are reasons to solve these problems together if you disagree, I guess this could be split into two proposals. And I think there are reasons to solve these problems together. So with that, can I have Stage 1? I have not looked at the queue.

CDA: Yeah, we do have some stuff on the queue. Let’s go to RBN.

RBN: So earlier on this in slides, you were showing—talking about using this proposal to handle validation, normalization, the slide that had all of the puzzle pieces, essentially. If you could go back to that. The composable accessor components. Yeah.

LVU: Yes.

RBN: So pretty much all of these are intended to be solved by decorators. One important bit is when we were first going through the decorators proposal, as it went through the various iterations and various stages, we had a lot of feedback from implementers about an earlier approach to decorators which would reify the initializer and allow you to wrap the initializer with and we’ve had feedback from pitchers about the experimental decorators an TypeScript people were causing to over write fields with a getter setter using object define property, and that these were all foot guns we wanted to avoid. So implementers had a specific requirement that there be some type of marker on a data property that would imply a syntactic transformation to an accessor so that decorators that could intercept for things like data validation, normalization, side effects for observation, notification, access control, all of these things, would go through an accessor because an accessor, what would be a normal getter/setter implies that there is logic that occurs. So one of the reasons we introduce the accessor keyword, and brought it over from the grouped and auto accessors proposal, is it explicitly defined this syntactic transformation from a normal data property, which should not have any logic associated with it at all, to something that has some type of logic associated with it. So accessor property name in a class on its own has some, but very limited, use. It just basically affects what you see when you do a define property or a getOwnPropertyDescriptors and allows you to do some things with inheritance. But on its own, it’s not entirely usable without decorators, and it was such a necessary part of decorators per implementer requirements, which was why it was oved from the group proposal to the decorators proposal. And all of the things that were described, even the swift will set, did set are achievable with decorators—and the implementation of decorators can hide the fact that it’s wrapping the set or make those things happen. So I think that accessors and decorators really do solve 90% of the use cases in this proposal. The one thing they don’t have from the description and the thing you show a little later in the slides is the use case around property forwarding, which I think is a completely separate discussion that we should have about whether or not that’s something we want to consider including.

LVU: Could I reply?

RBN: Yes.

LVU: Okay. So first off, I’m not arguing for no syntactic switch, and late all potential syntaxes, there was a syntactic switch. The syntactic switch does not have to be called accessor, but it was. There even if you upgrade data properties, the syntactic switch then becomes validate, transform, whatever—whatever you have. Like, in the same way that you can create an accessor just by including the get without having to include a set, like, if these become method definition keywords, they’re essentially treated the same as get and set for that purpose. Also, I’m not quite sure, you’re saying that decorators suffice for this, but decorators are also an option for this. Like, one potential solution does involve decorators that are just provided by the host environment. It does not have to be a syntactic switch. I do personally believe there are certain advantages to having a syntactic switch, which I listed here \[shows slide 27/32]. But it is totally fair game to just provide built-in decorators as a solution.

LVU: So—but, yeah, I think decorators are an excellent escape hatch. They do make very complex things possible, they give a lot of power to JavaScript authors that was previously only available to implementations. But they also do have drawbacks, like the fact that you have to wrap functions and you lose the initial references, for example. And all basically—basically all the points here. But it may end up that the solution to this is that we need to provide a bunch of decorators.

RBN: I do have a separate issue on this, but I also don’t really agree with a lot of the bullet points you have here. I think that they are incorrect.

LVU: Okay.

RBN: I can come to that later, because there are other items on the queue.

LVU: Okay.

CDA: RGN.

RGN: The point I was about to make is that compared with decorators, it seems to add too much syntax for a much narrower use. But if I’m understanding correctly, you just said that one possible trajectory of this is becoming just built-in decorators?

LVU: Yes.

RGN: Okay. Well, to the extent that it is about introducing syntax, I would be opposed. It’s exhausting a whole lot of budget for something that is solvable with decorators that comparatively provides more flexibility with a smaller footprint. But if this takes the trajectory of defining built in decorators, then that point is addressed.

CDA: DLM.

DLM: I just want to agree with RGN. I think we should be cautious about introducing new syntax, and when we do consider new syntax, I’m of the opinion that we should also be unlocking new capabilities and language rather than providing syntactic sugar.

LVU: Can I reply to that quickly?

CDA: Yeah.

LVU: If we do go with the syntax path, that was an explicit goal of, that it is not just sugar. It would remain separate, as a separate descriptor, that other library, for example, could inspect what is the validation logic of this descriptor and that would be separate than its setter. I completely agree that if we do go with the syntax path, it’s completely pointless to have it just be syntax sugar. It’s basically the bifurcation of either we go with syntax and then the distinction is maintained, or we go with built-in decorators.

RGN: I’m opposed to the syntax path. And I don’t want to increase the complexity of property descriptors.

LVU: Okay.

CDA: RGN, you’re next on the queue.

RGN: To the next point, it also seems to me like an anti-goal to obscure the fact that user code runs during property gets and sets. Focusing on the syntax-oriented path, a `property` keyword seems to be misleading because what actually happens during property accesses, when user code runs, is actually rather different from what happens when it’s just a data property, and that’s important in a lot of cases, particularly for security relevant ones. And misleading authors is not something that I want to do. Accessors should be explicit in a way that highlights the fact that something different is going on.

LVU: Can I reply?

RGN: Please.

LVU: So two things. That works if authors actually understand what an accessor is, which it seems that many don’t. Second, the imperative API we have to define accessors is also named around property. We don’t call it define accessor. And the third point, that that was mainly around the case where you don’t run logic. I think it confuses the mental model when you don’t have logic and you still have to go to the—go to declare the accessor.

RGN: You broke up for me. I didn’t catch the response.

LVU: The point I was making around accessor was in the very simple case where you don’t run additional code and you’re literally just getting and setting a data property.

RGN: With something like the property keyword we’re looking at here?

LVU: Yes.

RGN: That seems like an analog. Actually, it seems identical to `accessor` proposal.

LVU: For the very simple case yes, there’s a very small overlap that is basically that simple case. The rest of it is—the rest of it is quite different. But also as I explained, I don’t think accessor is a good—I think accessor is confusing syntax for that simple case but that could just be addressed by changing the keyword, right? And there is also other implementation details such as right now, the auto accessors proposal is implemented with a private field, which limits it to anything that can have a private field. I don’t think it should be observable from the outside what that private slot is. Like, whether it’s implemented through a private field or an internal slot, like, that should not be observable to authors. If they don’t want to access it as separate property, it should not matter how it’s implemented, and then the underlying implementation could even change down the line as new capabilities emerge. But I think it’s important to support objects from the get-go, and right now, we can’t do that if it depends on private fields.

RGN: Do you think that supporting objects from the get-go applies more to this proposal than it does to decorators?

LVU: Sorry, could you say that again.

RGN: The position that it’s important to support objects that are not associated with a class, does that apply more so to this proposal than it does to decorators?

LVU: I think ideally, objects should also support decorators, but this is not a proposal around decorators. But I think it is confusing that you can have two types of accessors: one of them works everywhere and the other one only works for classes. But, again, that can be fixed in the auto accessors proposal.

RGN: Right. That’s my position also. Okay, as for the other points, I see there are topics for them in TCQ and I will yield to replies.

CDA: KM has a reply.

KM: Yes, all in the same kind of point, accessors are definitely slower outside of 2 optimizing gist and for most web pages, it’s not 2 to 3X slower, I want to say than the data property, and the optimizer, because you have to actually make a function call, and if you’re not depending optimizations is you’re not going to inline it. And I think from speedometer, I know for Safari, I don’t know if this is true for other engines and I assume it’s probably roughly the same. By lines of code, almost no code makes it to the optimizing compilers, and by time, it’s about 50/50. So, like, because, you know, I would expect this to be spread all over your code base, almost none of the code base will benefit from that optimization, the optimizations to inline the accessor, and it’s sort of like—it’s a syntax that hides the cost from the user, which is in general, I’m not usually in favor of unless there’s a strong extenuating circumstance. Like, a benefit which is unclear to me that this provides.

LVU: I had a conversation with an implementer in the previous meeting. I forget who it was. If they are here, please speak. About whether the cost of use an accessor that just proxies a data property is significant. And they said that for at least their implementation—and I'm not sure which it was—once it’s JIT compiled, it’s basically the same. But also, once there’s a declarative primitive for this, then engines can optimize even further. And that is actually yet another reason to have a declarative primitive when you’re underlying data property is another existing property. And also accessors are used any way today if you want this. It’s just that it’s a lot more hassle. Although, you could argue that a hassle is a good thing.

KM: I guess that's kind of what I’m arguing. The hassle makes you recognize you are doing a thing that is slower. I also talk about JIT means different things in different engines, right? So JIT in—for JavaScriptCore, I’ll give an example, there’s four tiers, there’s an interpreter, a non-optimizing JIT, an optimizing JIT, and the fully optimizing JIT. And, like, only the optimizing JITs will do any inlining, right, because that’s a speculative thing you have to guess because every call in JavaScript is a virtual call, and you have to guess, am I actually calling this thing. And you’re not going to see that at the JIT that is not optimizing, which is what I mean by, like, to be precise.

LVU: So if—if something like that goes through, I wonder if a potential optimization might be that basically treats it as a data property. And I don’t know, we’re going in the weeds. But I’m not sure it’s the right call to compare the performance of completely ad hoc accessors today with what optimized thing we could have once we know that this is not just any accessor. It is an accessor that just writes and reads to this private thing. That enables a lot more optimization.

KM: I think it’s easy—it’s very often in this committee that people say, well, you know, in some abstract, you can create an optimization that solves this problem and makes any and all costs go away. But it shows—you know, those optimizations, like, have complexity that is multiplicative with other complexity in your engine, and you get exponential growth in your complexity. And one of the hardest parts of working on a JavaScript compiler is this intense complexity between many different dynamic optimizations that you have to apply in order to get the best possible performance. But that cost is all hidden from the end users of JavaScript. I’m not in favor of necessarily creating lots of idioms that require lots of complexity to be performant without sufficient benefit to compensate for it, right?

LVU: Sorry, I’m aware, but also it seems that we did have consensus that classes need to have some way to define these. And it seems that some way to define accessors might be the best path forward. So it seems to me that we’re going to have that either way, and the question is, like, we’re going to have to do some optimization around whatever we end up having anyway, right?

KM: I’m not sure I follow. I mean, I don’t recall—I mean maybe I’m misremembering the conversation, but I don’t recall this consensus. But perhaps I’m just misremembering from the Tokyo meeting.

LVU: Do we have consensus that classes should be able to declare properties that are actually public? I think we should probably start from that. But there is also a queue.

CDA: So DLM was on the queue to agree with KM, end of message. But that was a little bit ago. DLM, do you want to just briefly say what specifically you were agreeing with.

DLM: Yes, no, thank you. Yes, I think my agreement is, yes, we share the performance concerns that accessor is going to be slower than a property except at the very highest JIT tiers, and it seems unlikely that much code that’s actually using this will hit those JIT tiers. Most likely we’ll have a performance imbalance.

CDA: There’s a reply from RBN.

RBN: This goes to something you were saying a few minutes ago about the keyword indicator to opt into this type of syntax. We did have some discussion about keywords back when we were looking for a solution for the decorators proposal. Even though you showed that poll about the accessor keyword today, I would say that a lot of the folks who use JavaScript may not necessarily be using decorators, they may not have encountered this keyword. They may not know the internals of the specification that describe what accessors are, which was the thing before the accessor keyword. But we kind of made the decision on using accessor as the keyword because it was an accurate description that didn’t use ambiguous terms. Some of the things you showed in some of the other slides and here is something like property. Property was something we discussed with both grouped auto accessors and with the decorators proposal, but the problem with property is it’s ambiguous, especially when you look at the specification, because you have data properties and have these getter and setter accessor properties, which are both called properties. Pretty much everything that’s on an object is a property. So property is a poor term because it’s not clear. And data is in many cases unnecessary because a normal class field or a normal object literal assignment is a data property, and data properties have no logic associated with them for reasons that have already been discussed, performance costs, hidden costs of dynamic evaluation, all these things being something you don’t want with data properties. You want those to be fast and have no unnecessary indirection when they exist. We haven’t used any of those key words, and accessor is kind of the clear thing here. And also I think we’re so far along with decorators that I’d be kind of apprehensive about trying to change the accessor keyword to something else. Not that we couldn’t, but I think there’s a significant amount of—it would have to overcome a significant hurdle at this point to say it’s worth changing to show sufficient reason for changing it that I wouldn’t say it’s necessarily worth things at this particular moment.

LVU: Can I reply? So discussing whether the word should be property or data or accessor is exactly the type of bikeshedding that I said we should try to avoid. I do have my opinions, and I shared them because I think it might be useful. It is not the right point, I think, to be discussing what the keyword should be.

RBN: I only bring it up because you are the one introducing the discussion about whether or not the keyword should change. My point is we already have a keyword that does these things.

LVU: But also no implementations have shipped, as far as I know, outside of TypeScript and transpilers. It has not shipped in browsers. Has it shipped in runtimes?

RBN: I don’t believe it’s shipped.

LVU: I don’t believe it’s shipped in Node, at least, I don’t know about other run times.

RBN: I do know there’s active implementations that are currently ongoing, and I’m not clear on whether the accessor keyword itself has been implemented anywhere. I just know that decorators have not been fully implemented.

CDA: Okay. So just a quick point of order, because this was asked in the Matrix chat about the time box. I mean, technically this time box has about ten minutes left, but we have the entire afternoon session open, so we can move the other—the last topics of the day down, so we’re happy to continue discussion on this topic as long as it remains productive, which so far it has been. We will go next to RBN.

RBN: So if we could go back to that bulleted list of the comparisons between decorators and the syntax you’re proposing. One of the things mentioned here is object literal support out of the box and speculative future extension. There are two places you might consider this to be speculative future extension, and essentially, they are no more speculative than what is being proposed. One is that decorators themselves can decorate public fields. There are public field decorators. That is part of the current Stage 3 proposal for decorators. They cannot provide mutations to turn a field into a getter/setter. And that is by design. That was very explicit. Earlier designs allow you to switch this and implementers said do not do this. The second part is the accessor keyword itself, while not specified as part of the decorators proposal, because decorators focus only on class, the accessor keyword in the grouped and auto accessors proposal does support object literals, that is actually in the example in the—as soon as you open the read-me and is part of that proposal. I wouldn’t call this a speculative future extension. This is already proposed.

LVU: Just first off, you said the syntax you’re proposing. I’m not proposing any syntax, and using decorate source is a totally valid option.

RBN: On the right, you say it's a bad thing because it’s speculative. On the left supported out of the box. And I would say the feature you’re talking about would be supported out of the box on either side.

LVU: If decorators ship out of browsers, they would also support, like—if auto accessors and decorators ship many in browsers, they would support out of the box my understanding that would come later because it’s less specified.

RBN: The auto accessors proposal, separate from decorators, is intended to support object decoration. And we have a Stage 1 proposal for functions and object literals that would allow it to work. They are as relevant as out of the blocks support and feature on either side of this discussion.

LVU: Okay. But, again, you’re basically—you’re saying this option is better than this option. Neither option—like—

RBN: I’m stating you’re trying to illustrate it’s a negative, that it’s not supported. But I would say it is supported on both sides.

LVU: Okay.

CDA: There’s a reply from OFR that says agreed, this most probably has the same cost as a normal accessor. Nicolo?

NRO: Yeah, just as a user, I would expect this to have the same costs as getters and setters, because I look at the syntax and it looks much more like a getter/setter syntax, so I wouldn’t find it surprising if it’s slower than plain properties.

CDA: RBN, you’re on the queue next.

RBN: So this goes to some of the other bullet points you have here. You list here readability that having auxiliary bits first is bad. I wouldn’t necessarily say it’s a pro or a con. The reason I say this is that the decorators proposal has, as part of its design, this—an implementation that is—decorators are evaluated top to bottom, so it supports function composition: composing F and G is F of G of your thing. So it is reading outside in. In that case, it is actually intentional and by design that the auxiliary bits, the things you’re going to do to augment the thing that you’re decorating do come first. So, again, I don’t necessarily think this is a negative. I think this is actually a by design feature. Especially if you were to try to marry together decorators and this feature, you would have some thing that are described above the declaration and some things below the declaration and that could cause some really messy confusion when it comes to order evaluation, which is my next thing I want to discuss.

RBN: It's lossy, yes, I mean if they are part of the descriptor, you can access them. The fact they might seem problematic, but there’s a lot of folks in the committee that don’t want anything on this on a descriptive, just like initializers on the descriptor. If you use some type—reflection to look like an object did it get on property descriptor to get and validate that which will apply against the object, you don’t want to lose the things around it, to completely overwrite your validation logic and transformation logic. I want things to continue to go through that outside-in replacement approach so that if someone directly advocates the setter against your object, that it goes through the volume days ago logic to get to the inner point. If having them as separate things is not necessarily an improvement.

CDA: RBN, you are also next.

RBN: That was the last thing I wanted to mention. One of my concerns is—with something like having this be done through syntax and these be on a descriptor or additional properties on a descriptor for validation and whatnot, the problem that I would have here is that you would have to have a well defined order that says validation comes before transformation, which comes before this thing and that logic has to be very specific. The decorators because they have a well defined evaluation order which is top to bottom, if you want to have validation occur on the outside, before transformation occurs because these are the allowed inputs you can do that by specifying the order the decorators apply. With a defined syntax in that order can’t be really changed. The order has to be well defined if they will will be descriptors and then that could possibly be confusing for users that might say, using the example on the left, property N0 validate N transform N, but if somebody says writes it, transform N validate N, if they are keys on a descriptor that order is going to not matter. Whatever order, it might not matter and it could be possibly confusing for orders

CDA: Point of order that DMM needs to step down from the notes, which means we need another volunteer for next 57 minutes. Can we get one person to help with the notes, please?

RBR: I can help.

CDA: RBR. Thank you so much, RBR. We’re good. Please continue

LVU: Okay. So first off, if we do actually go with both validation convenience and a transformation convenience, which is TBD, I don’t think anybody would possibly argue that transformation would happen first. Like, you—it’s normal to say this is: do I want the value or not? I accept, what do I store now? But also, decorators have an explicit evaluation order because they basically push that—a lot of that into the user. Right? Which is both a good thing and a bad thing, depending on the case. But also, it seems a lot of the discussion and a lot of the arguments from RBN are basically around this table. And it makes me wish I—maybe I should not have included the table because like I said, I think both of them are valid options. I did include the table because I had opinions, but it doesn’t mean that built-in decorators aren't an acceptable solution to the problem statement. I would somewhat lean towards syntax because I also see the argument that syntax is a much bigger scope. And I think that is a big drawback. Even though that is the problem with pros and cons tables. You have the one line here, that makes it look like you have one downside and five upsides. You could argue these are not upsides but even if we did accept that they are upsides, however, I think this is a fairly substantial downside. As was already argued. Even though to me personally I would—I would lean towards that despite the tradeoff, it’s not that providing decorators is not an acceptable solution and it makes me wish that maybe the slide should have been like this. We have these two options. And which one we go with is TBD. Because that is essentially the point we are at right now. We are not discussing the—should we do this or that or what the keywords should be. It’s basically do we want to solve these problems? Do we think the problems are worth solving and any gap in the language related to the problems or all resolved by existing proposes?

CDA: NRO?

NRO: Yeah. So there is—there is a separate proposal called decorator Metadata, also Stage 3 and the goal is to allow decorators to add Metadata to the individual properties of the class that you can clear from the outside. So the—

LVU: The descriptors? Sorry.

NRO: No. There is like an array of an object to contain Metadata. I don’t remember exactly the shape. But you can clear the meta data from the user. The solution could also work for problem 1, other than problem 2 because we have the decorators that define the Metadata and the property access for this is just the data property access, but there’s this separate place. It’s a well known symbol in the class that tells the metadata that the class has.

CDA: PFC?

PFC: I would like to express a lot of sympathy about the first problem statement here. This is something that I’ve run into repeatedly in one of my side projects trying to get JavaScript objects to play well with other object oriented paradigms. It’s quite surprising for people who are used to prototype inheritance that the class fields are instance only properties. I support problem statement 1 very enthusiastically. And in that capacity, I would support Stage 1 for this proposal. I am less convinced by problem statement 2, or that it’s necessary to solve them together. But, you know, good developer experience is a worthy goal. I have to say, I would prefer that these problems are solved with the tools that we have, including proposals on the table such as accessors and decorators. With supporting Stage I don’t want to endorse any syntax solution or even any particular solution because Stage 1 is just not the time for that. But I would support Stage 1.

CDA: RBN?

RBN: So in general, I don’t support Stage 1. Mostly because most of the things that are being discussed in the problem statement and throughout the slides in the proposal repo are covered by existing proposals. That said, I do think there are two parts of the proposal that might be worth further discussion. First is the—it was very briefly discussed or shown which was this concept of property forwarding. While I do think that’s an interesting take, I am not sure that that is something we would actually want. There’s a lot of complexity that makes it almost impossible to be realistic around things like defining how we are accessing these things, how does evaluation work? Are we trying to reify a reference? Like, for example, and I don’t think that—I am not 100% certain I support that for Stage 1. But that said, I think we might want to have some further discussion about that. The second thing that I think is interesting is this concept of built-in decorators. We have had discussions about many, many times in plenary, we have folks that looked at, for a while, decorators as the way to say, and if we have decorators and the more we expand decorators,the less new keywords to introduce in JavaScript because we can take some of the new things as \[ne] key word capabilities for a class, , ObjectLiteral or FunctionExpressions and say we might be able to do this as a decorator, even if his a built-in decorator rather than as a key word, perfect example was early discussions we introduced decorates around `AsyncFunction` that we could have had an at async decorator that turned a generator into async function which is has of early transformations worked. There’s a lot of potential for built-in decorators. We didn’t put them into the main proposal. Because they are such a large capability that we wanted to get that in first. There’s already a lot of user-land decorators that do things we think cover a lot of use cases. But there’s some things we know they can’t. User-land decorators based on the current Stage 3 proposal can’t do things like modify enumerable, writable, configurable. And you still couldn’t do that with the Stage 1 and experimental decorators used in other languages. This is something we could have built-in that can be valuable. There is a discussion about built-in decorators that should come. So whether it’s taking that bit of this proposal and that is the bit that advances to Stage 1 or breaking this up into two proposals. One for the potential for forwarding which I don’t think is something that we might advance in discussions with others. There’s been a lot of concern that this is not something that will be viable going forward. But having—a discussion in built-in decorators that definitely would be for Stage 1. Although what that is, is up for debate.

LVU: Can I reply?

CDA: Yeah.

RBN: Please do.

LVU: My understanding is that it’s not totally normal to either broaden or narrow the problem statement once it’s—once something is Stage 1. I am not sure how the problem statement would even change. If we were to scope down to aliases and built in decorators because those are—the explicit solution is not part of the problem statement. But it does seem pretty reasonable to go with the decorator path. It seems there is strong consensus that we want to solve this with decorators rather than syntax. I think that is totally in scope. And as I mentioned at the beginning, this is an initial exploration. It is totally expected that it might be broken down into separate proposals down the line. So it, I mean I am new to the process of this committee. But it seems to me that that is totally within scope for Stage 1. Although, another thing, though, unrelated a bit orthogonal, you mentioned decorators cannot change numerable and configurable. I wonder if they should. Like rather than introducing new things, like I wonder there should be—if that has been discussed. Is that a bug in decorators? Or is it intentional they don’t do that?

RBN: It’s an effect of earlier requirements from implementers, they are not working with descriptors.

LVU: Yeah. And so it seems to me that based on the discussion I have heard so far, a path forward might be we explore what improvements might make sense for the auto accessors proposal for simple cases and then this could become an exploration for aliases and built-in decorators to cover the use cases which is a good thing because if you are not introducing new syntax ask it’s basically built-in decorators it means you can make more liberal decisions about what is covered. Like, I had this slide here with all of these. I did not expect that all of these would result in new syntax. But if we are providing built-in decorators, they totally could. So that’s another advantage of going with the decorator route. It can be more fluid, more rich. It could have more capabilities.

RBN: Let me restate my concern. My statement is that I don’t support Stage 1 as is. I think there’s too much in this proposal that will not advance. I do think if you wanted to bring some of the discussion you had around value backed accessors to the grouped and auto accessors proposal, that is reasonable. Alias accessors deserve more discussion. But not Stage 1. We don’t know what that means based on the limit bit in the slides. So I would not currently support to advancing it to Stage 1 is the only thing I consider worth advancing to Stage 1 is a discussion of what the types—what these things you are looking at composable setters as potential built-in decorates if that’s something that might be reasonable and what it the scope that have might be, I think that might be reasonable to discuss for Stage 1. But I don’t think the rest of the proposal is something that I would support advancing at this time.

CDA: There’s a reply. There was a reply. It’s gone now. So I guess there’s not a reply. SHS is next

SHS: I guess I would support the particular second problem statement for Stage 1. This is because it goes a different direction from the existing decorators and accessors proposal. It doesn’t deal with the question of any builtin accessors. There is value, particularly because—decorators because that would be quite useful for tooling. TypeScript would handle it in a known way and the way if it was user land decorators they wouldn’t handle. That’s probably where I would see this going as Stage 1, again the problem statement of having the additive well known additive ways to modify accessors has value. And I support Stage 1 for it.

CDA: CM?

CM: Yeah. So I am kind of uncomfortable raising this because I was the one who blocked forward motion last time. When you put up your slide about no bikeshedding, I think that was exactly right. And the whole discussion people got into about accessors versus decorators, the whole discussion about the runtime cost of accessors—those are legitimate things to be concerned about later down the road. But at this stage, I think focussing on the problem statement is in fact the correct thing to do. Number 3 in the problem statement, I think, looking at the stuff you are considering here holistically, I think is right. But I just don’t buy the proposition in statement number 1. This looks like something that unpacks into a tremendous amount of complexity, and I don’t really buy the problem that it’s trying to solve. I am open to being persuaded, but this feels like a marginal problem for which a big solution is proposed. And I need to be sold the problem statement first and, at this point, I am unconvinced.

CDA: WH?

WH: From a Stage 1 perspective, I’m unclear as to what the problem statement here is that we’re not already exploring. It seems to me, this is asking to explore a problem area which we are already exploring. So I am not sure what to do here.

CDA: KM?

KM: Yeah. I guess I somewhat second what other people have said a little bit. The second use case I am not totally convinced of. The first one, I mean, I am open to exploring that. There are other things exploring this as well. It would be good to work with those. I am not—I am neutral on the topic, but I guess I am maybe—mildly negative neutral. Like I don’t—but certainly not enough to block any kind of proposal on it. And yeah. But mostly seconding unconvinced on the second problem.

CDA: RBR?

RBR: Yeah. So with the proposal, I believe it is going to be quite a complex implementation to achieve all that, maybe. I may not say that actually. I am not an implementor. I don’t see that we are solving a problem or a wide range of developers that—where they really need something like that. Where we have a huge gain for adding this to the language. They are capable of achieving the same thing with different notation at the moment. And when they need something like that, I believe it’s good. It’s an explicit way of doing it. And if there would be a huge need for it, then we have a huge crowd who asked for improvements in that area and I don’t see that at all. So I don’t believe the second part is as such correct. And the first one, I don’t see a justification for that either, like the downsides of having to have that in the language, where we already need to have other parts fast, et cetera, and the work that would have to be involved in maintaining it, I don’t believe that is a good justification for adding this or doing this.

CDA: Reply from SHS.

SHS: Yeah. I think I mean we have already seen built-in decorators can basically solve these problems. And I guess I disagree with RBR’s assertion that there’s a lot of complexity here. That is a low complexity solution to this. It’s still worth exploring the problem space.

CDA: Philip?

PFC: I disagree with the assertion that a huge crowd needs to be clamoring for this solution. We make changes to the language all the time that satisfy niche cases, but they have good reasons. And I am also not entirely convinced that you can do everything now in the language as it is, that this proposal would cover. I need to look into it, but I may be able to help provide some examples of things that you just can’t do with introspection and the real world case with the GNOME stuff I was talking about earlier. I can’t provide it on the spot now, but I may be able to help in the run up to another plenary.

CDA: All right. MF with +1 to SHS's comments about complexity and PFC's about demand

LVU: I was surprised to hear the—I agree that we do solve the problems all the time. But I was surprised to hear it being a niche problem because like it’s the—is the question—is this push back basically what percentage of accessor use cases that are additive ? Accessors as a whole are niche? Class data properties… What classes having public data properties is niche? I was wondering what part is not—where you don’t see the high demand? Like, where—which part of it is niched if that makes sense. I didn’t express it very well.

PFC: Are you asking me or RBR?

LVU: No. RBR. Sorry.

RBR: So in this case, I don’t believe that, like, we can express anything really new, and as long as you—like, the way I can write the code is totally sufficient in this case, to achieve the goal. Where do we need—like, I don’t understand where we need to write it differently? Where do we write a different program when we have that in the future? Where—like, I don’t see that.

LVU: Is this an argument about—like, capabilities versus the X improvements because we add the X improvements all the time. And—not every new feature is new syntax

RBR: I sometimes question syntax. I question \[inaudible] a lot.

LVU: And the point about complexity was already addressed, yes?

RBR: About the complexity: the decorates are in fact not shipped.

CDA: SHS?

SHS: Yeah. To RBR’s point, I think where I see an actual real benefit here is that tooling benefits from having a well known solution. I think this was—first point about the problem statements anyway in terms of if there’s a well known way to declare the fields and that could be a benefit from here, the fact of, you know, you have a well known way to modify an accessor to make it a validator or whatever else, the tooling types could handle this so change the types to treat to appropriately for transformers, all of that benefit inside a way you don’t see if you just use the existing syntax. So I think that is why I think this is not a niche thing. It was actually quite useful to have a well known solution that everyone will use and be on board with.

CDA: KM?

KM: Whenever we talk about how tooling would benefit, there was a proposal that—this committee didn’t like but it. Didn’t particularly—you know, endorse which was proposed, the JS0 sugar. Engines don’t spore that tooling can all agree upon and transpile down to the JS0 execution layer of JavaScript. And that seems like it would solve the tooling problem without necessarily impacting the execution complexity.

CDA: Sorry. Did you mean to go on? Did we lose KM?

KM: Sorry. That was the end of my…

CDA: Okay. Sorry. It sounded like you might have had another thought. Reply from SHS.

SHS: Yeah. I think you're supposing the problem statement guarantees or requires that the solution complexity is impacted. There are solutions that don’t, you know, significantly change the complexity if we stay away from key words and stick with decorators, I think it’s quite reasonable. And so I still saying this is a problem space worth exploring.

KM: Sure. I think the—maybe I misunderstood what you are saying before. I don’t think that just because something benefits tooling, is a great argument for—obviously, if the solution does not involve execution impact, that’s different in some sense. There’s plenty of proposals that come in and tooling could benefit from a standardized solution and the standardized solutions have implementation complexity that—implementers are concerned about. I guess I would ask the committee, if that were the case, to reconsider a JSSugar, JS0 world.

LVU: My understanding—sorry.

SHS: So JS0, JSSugar are worth continuing to discuss in my opinion. My point about the tooling was more just in response to RBR kind of saying this is a niche thing. I am saying that the tooling benefit is I think a good supporting argument, maybe not an only argument.

LVU: Yeah. The main value add was DX and having a standard solution to reach for without having to implement it in every project. My understanding was that tooling has a standard solution and also generally benefits tooling. Because you know what you are dealing with. It wasn’t the only value was tooling.

CDA: All right. I am next on the queue. Just want to reply to some of the comments about there’s already proposals that are Stage 1 or beyond that are exploring this problem space. Different proposals can explore the same problem space and overlap, some overlap very much. In some cases I've seen three different proposals for the same thing. Others may overlap less. I think it’s good feedback. There are existing proposals. And we saw a recent example with first class protocols with LVU getting involved in that. Just because we are exploring the problem space already elsewhere doesn’t mean we should block advancement to Stage 1. I don’t think that’s a good justification.

CDA: That is it for the queue.

CDA: So I guess the question is, LVU, given all of the feedback you have received would you still like to ask for Stage 1 formally?

LVU: I think that—in some ways, that depends on what exactly the process allows, and what it doesn’t. It seems very clear to me that the committee generally does not see the rationale for changing accessors. So it seems that is probably better solved in the auto accessor proposal. There’s some interest in exploring maybe aliases or what built-in decorators could be additive use cases. And I think that is totally fine. Like you said, that was my understanding as well, it’s totally normal to be in the same place. Some get splits and parts joined with others. It’s normal for Stage 1, I thought. But again, I am new to the process. Like other committees are very different. But as long as it’s okay to narrow down some of the solutions space, and, like, move part of it maybe—part of the work to collaborating on another proposal, like as long as this kind of flexibility is acceptable, yes, I would. And it seems to me that there is—there was—a few people said they would support Stage 1. And some people say they couldn’t support Stage 1, but they would not actively object to it.

CDA: Right. Yeah. I agree. And we should be very clear about what the committee is signalling when they say things. And make sure we are sure unambiguity in this MF is on the queue, please just clearly state a revised problem statement before asking for Stage 1.

LVU: So it seems to me that the main opposition was not about the problem statement itself. Some people said they were unconvinced about parts of it. Some people were unconvinced by 1 and 2 and not 1. Most of the push back was about whether we should introduce new syntax for Stage 2. Which is totally fine. And that a lot of 1 can be handled by the auto accessors proposal, which is also totally fine. So MF, if you have any—are there any particular changes you would like to see to the problem statement so it resonates with you? I am totally open to revising it. I am just not sure how any of the opposition is actually about anything in the problem statement. It seems to me it was mainly about the potential solutions

MF: I have no issue with the problem statement. I am not asking for a revision. I am saying, if there is revision, before we ask for Stage 1, that it’s clearly stated. If it’s anything different from what's shown on the screen.

CDA: If you want, we do have another topic. If you want to, you know, maybe give it some time and think about it, we have the lunch break and come back. And we come back to it and we can either, the problem statement could be as it is right now or thought of something to make a slight revision or whatever, that could be a problem statement and we could call for consensus at that point. But it’s totally up to you. We could do it now as well, based on what you have here.

LVU: Would revising the proposed solutions count as revising the problem statement. That is the mainThing that needs revising—

JHD: The process doesn’t give consensus for solutions at this point. If the solutions need revising, that is a pre-Stage 2 thing. Not a pre-Stage 1 thing.

LVU: That’s what I thought. I mean, I was planning to not include any solutions in the slides. But I looked at the process checklist again and it seemed like a general shape or something. It had something about the general shape of the solution. Okay. I have to include something. And then we ended up focusing on that for the discussion.

CDA: I will jump back to the queue. First is KM.

KM: I think having—maybe I am misunderstanding the process. But I think having these two problem statements as part of the same proposal sort of presupposes that you are solving both problem statements in the same proposal. And I think that is in some sense some of the hookup because that ties the solution space down. If they were separate proposals we decided to—I guess I don’t know the right process for this. But, like, if they were separate statements of separate proposals at some point we decided to combine into one, it might be different. Because the problem statements part of the statement, the solution—the solution space we will look through includes solutions to both problems at the same time

LVU: It doesn’t mean with the same solution. It just means solving them—being aware of what solutions would be introduced for each of them and basically saying, and seeing it holistically. Solving both at one of the results might be, maybe we introduce a primitive that addresses one and a primitive that addresses 2 and another primitive that addresses 1 and 2. We don’t need to find the primitive that addresses 1 and 2 together. I mean, they kind of do, and they kind of don’t. Like, they do through human factors effectively. Not through technology. In the way that the more you improve accessors, the more likely people use them and the more likely to use them to define the class properties that way. It’s a human factors argument. It doesn’t mean it has to be the same solution for both. I think they need to be solved—we need to solve them closely together and have awareness of both. Does that make sense?

CDA: Yeah. You are saying, to think of this holistic at least when exploring the area which I think is fair. I was on the queue just—I wanted to say that we have plenty of precedent for proposals that are larger, getting split off into multiple or sometimes proposals being consolidated together. So there’s plenty of precedent for that. SHS’s comment in the queue is also to the same effect. And then there is a reply from RBN.

RBN: Yeah. I'd also like to agree, it feels like we’re talking about discrete concerns. Yes. While it makes sense to solve it together, it is kind of built into the process that we should be considering cross-cutting concerns between proposals. How they work together. We have a number of proposals where we have done this type of split. And for example the extractor proposal was split off from the pattern matching proposal since it applies to more than just pattern matching. That said, as I said when I was speaking earlier, I think it feels like in one case,—one of the things you are wanting to address is the ability to compose setters. And it feels like when you look at value backed accessors, you can make the composable setters work in certain scenarios that for a case like value backed accessors—. And I don’t think that if you had one proposal that was, say alias, I would advance that because I am not convinced of that. You can break this down into composable setters and having to simplify that saying that you want to have some simplified ways of doing some of these mechanics is for composition of capabilities for setters as an independent proposal, I can see at that for Stage 1. And figuring out what that problem space looks like, and what solution space makes sense independently. I am not convinced about alias accessors. We don’t have enough to say for Stage 1. There’s not enough in the slides to really be comfortable advancing that I could see value accessor not advance. it’s 100% advanced by the auto accessors. Alias should be split off and possibly discussed as a separate Stage 1 proposal. With more focus on what that does, to see whether that should advance. I would not support all three advancing. The combination of these three things advancing as a problem statement, but just that specific compositional piece as a problem statement for a Stage 1 proposal, I think I would be perfectly fine with that advancing.

LVU: Is part of the process that can resolve the proposal goes to Stage 1, as long as splitting the two components into separate proposals? Or is it about splitting it and then we discuss whether it goes to Stage 1? I am totally fine to split it into these two proposals. And move the value backed part into auto accessors. Possibly even before the afternoon session. But at some point there was someone in the queue saying, let’s see if there’s any objection first. I would be wary of splitting only to find it’s still—they still want to go to Stage 1.

RBN: If I can interject. The easy way would be to ask for Stage 1 for specific things. Like discreet things. And whatever advances to Stage 1 we can—

LVU: That makes sense

RBN: Taking this proposal, repo and trimming it down or splitting off separate proposals just for that makes sense

CDA: Let me jump in here. Yes, the answer to the question is, yes. There is precedent for this. We have had proposals come in, I think of one recently from JSH that was here are all the things in here. And people liked some and didn’t like others. But it was very clear—the most important thing is to be clear. You brought this proposal here. Folks don’t like some of the things in it but are willing to advance to Stage 1 these particular things. As long as that was clear and quickly updated and created repositories for that, we have advanced on that basis. But it needs to be unambiguous.

LVU: As long as we resolve, this part goes to Stage 1 and this part doesn’t. These need to be split. Like, then it doesn’t get moved. Right?

CDA: Yes. Yeah. Exactly. All about being clear and unambiguous about what we are doing. There is a—chip is on the queue

CM: Yeah. I mean, I wanted to say, I am not sure that this is a thing by rephrasing the problem statement. My issue was that I am not convinced that the problem is real enough to warrant our spending time on and that’s really what Stage 1 says. It says the committee has decided that we—the committee—wants to spend resources exploring this problem. And I haven’t been convinced of that. And it is possible that reframing the statement itself will help make it more convincing. But my problem is more than just—I am not buying into the problem, whether it’s part 1 or part 2 or together, or separate? I am less concerned about that. I am more concerned about the fact that I just don't see the problem. And I am open to persuasion. But I don’t see it yet

LVU: Would you object to it?

CM: Yes. I feel like we spent an hour and 45 minutes of a one hour timebox and I think we already spent too much time on this. If the arguments are reframed in a different way, the arguments in favour were stronger, and I think other people have different perceptions about the need here, and so I find that help. . But I am—as I say, I don’t see it yet. And until there’s a there, there, I feel like—this feels like a—it has a flavor of the solution looking for a problem and I am not seeing the problem. As I say, I am open to being convinced, but I am not convinced yet.

LVU: So if I understand it right, your argument is that the current status quo of accessors and their DX is totally fine?

CM: Pretty much. I mean, I hate accessors anyway. And that may be a bias that I am bringing to the table. But then we get into the whole discussion about philosophy of software engineering and I don’t think that’s helpful. But I am just not seeing the problem. And maybe you just need to make the problem more visible in some way. But it all feels very abstract and theoretical to me and adding a bunch of complexity—and I am not talking about implementation complexity. I am talking about the burden on the user’s mental model. And I don’t see a pay off here. Sorry. That’s just how I am reacting to this.

LVU: I mean, if you generally dislike accessors, that does sound like a bias

CM: Yeah. But as I say, you can make an argument for this, but I don’t feel like I have heard it yet.

LVU: Do you think this adds too much additional complexity even if it is solved through decorators?

CM: I think the decorator approach has the virtue of being something that if you are not interested in it, you can just ignore it. I think the idea of a standard set of decorators that are built-in itself, completely divorced from the accessor question, is a really interesting idea. But as I say, you are trying to avoid getting into the—you know, the decorators or not decorators question. But I like that direction better. But mostly, it’s because it gives you a place to stand to screen out the complexity that is not relevant to one’s own world. And I am concerned about the user model that gets more complicated. I think decorators have enough complexity that they already have some issues in that regard, but they do a nice job of separating the complexity on the inside from the complexity on the outside area. The idea is to hide the complexity on the inside and I like that direction of things. But I don’t want to argue for design here.

LVU: So you said this complicates the user’s mental model. If this is using decorators, how does it complicate the user’s mental model? It is piggybacking on the model

CM: That’s why I like the decorator model better.

LVU: How do you feel about the auto accessor and grouped accessor proposal? If you don’t think there’s something to solve in the DX of accessors, wouldn’t that apply to that as well? Or any other accessor proposal

CM: Perhaps. Perhaps. But those already have a big community of people who are well down the road of trying to figure stuff out. And it might have been at the beginning if I had been—you know, a part of that conversation, you know, I might well have had raised an objection. But I don’t—you know, I don’t—I don’t see—as I say, I keep coming back to the same question. I don’t buy the problem statement yet. I am just saying, sell me the problem. And I don’t think we are going to do it in the 10 minutes we have left today.

CDA: So I put myself and remove myself from the queue about this. Others have expressed interest in the problem statement and do think that the committee should spend time on it. So because of that, I find it a little bit awkward, I don’t mean to put you on the spot, CM, but I apologize, to say those people doesn’t spend time it because you are unconvinced

CM: Okay. That is a fair point. And I guess the fact that we have extended this conversation beyond the timebox is evidence that there is interest. But there is the time of the particular committee members who are interested in the problem, which is with most proposals it’s the champion group, the champions and whoever else is interested in engaging with whatever the proposal is, and then there is the time of the committee as a whole in the plenary; and it’s the latter that I am concerned about. If people are interested in a specific subproblem, and we have many such subgroups in our community of folks working on this, you know, they are certainly more than welcome to dig however deeply they feel motivated to dig into whatever the particular problem is that they are interested in solving. I am concerned about the attention and time of the committee as a whole. In the plenary. And if this was, you know—

CDA: I get it, but, like, very few people are really interested in every single thing that comes up on the agenda—

CM: That is true.

CDA: So you know, we could make that argument about anything. But that doesn’t mean we should not advance a proposal to Stage 1 because I don’t think we should spend time on it. I don’t want to cite an example because I don’t want to make people feel like they can’t bring a topic to plenary, but that argument is difficult to defend.

CM: I am just very nervous about piling on complexity and so, I would like to see things be well-motivated and I am just not there on this yet.

CDA: I understand. All right. JHD?

JHD: Yeah. So I was going to say, historically, it’s near impossible to block Stage 1 because it’ got—this is something we will never be interested in talking about again. It’s perfectly fine to say, this will never advance beyond Stage 1 until I am convinced of the problem statement. Or until a solution that doesn’t involve X or Y or Z is found or whatever. We have many Stage 1 proposals that are effectively jailed there. But the Stage 1 signal is that if the committee is willing to continue talking about it, if new things are manifested to talk about, so I think that the—like, the precedent for our process is that this should, I think, it should get to Stage 1. And the feedback should be taken and recorded that there are multiple delegates that, A, don’t want syntax. B, unconvinced of some or all of the problem statements. And all of those need to be addressed for any potential advancement to Stage 2. And it’s also worth noting chip’s feedback that it would not be a good use of committee time until some of those things have been resolved outside of plenary. I think that’s perfectly, reasonable and we have done that many times

CDA: I agree with JHD’s comments

CDA: There’s nothing else on the queue. We only have a couple of minutes left before the lunch break. I suggest that we pause for now and take the break. People can have lunch and my suggestion to LVU is maybe if you want to, make some clarifications in your problem statement, or not, or potentially what—splitting things up would look like. Whatever the shape of this direction looks fruitful to you, and then folks can have a little soak time and think about this during the break. Then we can come back and we can ask for consensus and see how it goes.

LVU: Sounds good. Should we do that immediately after lunch or should we go to the Stage 3 proposal review issue since it is already an hour past its time slot and I feel bad pushing it further. Maybe we can do that after lunch and come back to composable accessors

CDA: I think that’s fine. Is PKA right here now? Peter, does that sound good to you

PKA: Yeah. Either one is fine with me.

CDA: Okay. Sure. That sounds like we will do that. All right. We will see everybody back here in about an hour and 2 minutes. Thank you

LVU: Thank you.

### Speaker's Summary of Key Points

* Followup to class fields introspection from the Nov 2025 meeting: if arbitrary fields should not be introspectable, how can classes opt-in to declaratively expressing their public data properties in a way that is?
* Related problem statement: Improve DX for common “additive” accessor patterns (validation, normalization, etc.).
* Many delegates argued that grouped and auto-accessors cover the first problem statement and did not see the issue with the current `accessor` framing of basic auto-accessors.
* Strong resistance to new syntax; preference for exploring built-in decorators instead.
* Some concerns about performance, mental model clarity (don’t hide user code on get/set), and descriptor complexity.
* Broad agreement that scope may need to be split or narrowed before advancement.

### Conclusion

Conversation continued later in the day, see below for conclusion.

## Stage 3 Proposal Review (Stage 2/2.7 time permitting)

Presenter: Peter Klecha (PKA)

* [proposal](https://github.com/tc39/proposals#stage-3)

PKA: Thank you, MF and JHS for taking notes. So I’m PKA, from Bloomberg, this is TC39 Stage 3, and there’s only one eligible 2.7 proposal, so we’ll do 2.7 for sure review, and if time permits, we’ll also do Stage 2 review. So the goals here are to hear some updates about each proposal every so often. Ideally, for proposals that, you know, where we need to identify next steps proposals, we can do that, like encouraging implementation work, identifying issues to fix in the proposal, adding champions. This is totally committee driven. I don’t have anything to present about these proposals. I’m going to talk about proposals and I would like to hear champions, if they’re present or other interested parties if they’re not, to give updates if they can about the proposal. If the update is, you know, “this proposal is active, work is ongoing”, that’s totally fine. One sentence is great. We can move right on. In the past, though, we have unblocked proposals, we have identified new champions for proposals. Sometimes people get a little nervous about this. We do sometimes—this process sometimes does result in proposals being withdrawn, but this is not an adversarial process. Nobody’s proposal is going to get withdrawn without their enthusiastic consent. So please don’t worry about that if you are a proposal champion.

PKA: Okay, so some Stage 3 proposals we have heard from recently and, therefore, don’t need to discuss, because the committee has heard from these recently, Temporal, Intl Era/Month Code, Decorators, Explicit Resource Management, import defer, non-accessible applies to private, joint iteration, immutable `ArrayBuffers`, as well as those that already advanced to Stage 4.

PKA: And also Stage 2.7 proposals we have heard from recently, Include ShadowRealm, iterator chunking, import bytes, await dictionary, and iterator join. So let’s just dive in.

### Legacy RegExp features in JavaScript

PKA: Our first proposal is an old, legacy RegExp features in JavaScript, champions listed are Mark Miller and Claude Pache. This proposal has not been presented since the last time it was discussed in one of these reviews in July of ‘23 and last actually presented, I think in May 12017, although that information might be out of date. What was said at the time was:

“Implementors have lost interest in implementing this proposal, and possibly the champion group has as well. CM was asked to reach out to champions' group.”

So if we have CM, I’m wondering if—

CM: This was in July of 2023. So I certainly don’t remember any of this. I suspect that at the time, what that was is I’ve been working regularly with MM, and I was just—he wasn’t present, and so I was to call this to his attention. I probably did, but I don’t remember. I think MM might be here. And you can ask him.

PKA: MM, do we have MM?

CDA: MM is here.

MM: I’m here. Can you hear me?

(multiple): Yes.

MM: Okay, yeah, so I thought I saw something from one of the browser makers, maybe Firefox, about trying to phase out these legacy—these are the weird static things that get updated every time you do a RegExp match. They are certainly—it’s always recommended against using these, and simply—and whether you use them or not, the fact that they’re there means that every RegExp match is slower in engines than it could be because every RegExp match has to record the results of the match in such a way that you can fetch the results of the latest match from the static properties. If—so what stage did this get to?

PKA: Stage 3.

MM: Stage 3. Yeah, I don’t want to withdraw this. I would like to see what can be done to phase these things out. But I mean, frankly, it’s not a priority for me either since, you know, the hardened JavaScript shim, the SES shim is already able to do this by replacing the constructor. But I imagine that the speed improvement available if this is phased out would be of interest to implementers of high speed engines.

PKA: So I know having reviewed the notes from the previous review before, that there was pretty strong signal from the implementers that they were not interested in going forward with this. I wonder if any implementers are currently present who can either recall those sentiments or maybe just have a new take on this that they’d like to offer

DLM: I’m on the queue with that. So, yes, we weren’t that interested in this originally, but we had a volunteer contribute and implement for this as part of the AVI coding program, so that is something that has not landed on, and we haven’t shipped it yet, but I imagine we will ship it eventually.

MM: Oh, so that’s great. And what you’re—what you implemented and might ship eventually corresponds to this proposal?

DLM: Yes, yeah. Yeah, I didn’t review it, so I don’t know if we’re able to do 100% of what was in the proposal or not. I expect we were, but—

MM: Okay. And I imagine the main reason for resistance was compat risk. If Firefox succeeds at shipping this, that establishes that the cross-browser web does not depend on this to the degree that we should consider ourselves stuck. So, yeah, given that news from Firefox, I’m definitely keeping this on the table.

PKA: Okay, great news.

CDA: MM, you’re on the queue again. Did you have another question

MM: No, no, that was it.

CDA: Okay, OFR.

OFR: Yeah, so I think I added a counter for this just recently, but now I can’t find it. But so we might have data about whether this is still used. Still looking for it.

MM: So in the absence of seeing a counter, do you have any memory of what your impression was?

OFR: No, I don’t at all.

MM: Okay. Presumably if the counter is high, that would cause Firefox not to ship it as well.

CDA: All right. That’s it for the queue.

PKA: Thank you, guys. I think that suffices for an update. Thanks a lot, Mark, and others.

### Dynamic Code Brand Checks (pt. 1)

PKA: So moving on, we have dynamic code brand checks, we haven’t heard of this since April ‘24. Champions include NRO, MSL and KOT. Any updates from the champions?

MM: Could one of the champions remind us of what this is, just a brief summary.

CDA: So Nicolo was here, and I’m not sure if NRO's here right now or available.

MM: Okay, could somebody who knows—

CDA: NRO is on mute. But he might be AWOL—AFK, not AWOL.

MM: Does anybody know enough to give a brief summary?

CDA: I’m quickly pulling it up.

PKA: NRO says he can speak in 30 seconds.

CDA: The TLDR is allow host to create code-like objects and ensure host can compile strings to host ensure compile strings. That’s another overload, I guess.

MM: I got it. Right, right. Right.

CDA: Motivation is: “eval is evil”.

MM: Yeah, this one has interesting security properties, and it actually does enable some new security patterns. I’ll wait to hear from NRO.

MM: Should we go ahead with DLM while we wait for NRO?

DLM: And we shipped this in Firefox 135 as part of our trusted types implementation, and I thought all browsers had now enabled trusted types, so I think this might actually be ready for stage 4. I’m interested to hear from the champions.

PKA: We can circle back to this. Nicolo needs a little more time. But that’s a nice update from DLM.

### Atomics.pause

PKA: The champion of this most recently was SYG. I’m not actually sure of SYG's status in the committee. It was last presented in October 2024. Does anybody know about the status of this?

CDA: Do we have anyone from the Google delegation here right now?

MM: OFR is here.

SHS: As am I.

OFR: I don’t have—I don’t know what the status is.

KM: I don’t know if we—it could also be that Apple, we have taken over championship of this. Let me run by with SYG. But I don’t think this is dead.

KM: It’s shipped everywhere and basically needs to be brought back for Stage 4, which sounds like something we could do.

DLM: Yeah. It’s everywhere except in some of the server run times, but, yeah, all the major browsers have it.

PKA: Great. So I look forward to seeing Stage 4 advancement on the agenda for next meeting for this. That’s awesome.

### Source Phase Imports & ESM Phase Imports

PKA: Next we have Stage 3 source phase imports and also Stage 2.7 ESM phase imports. Both of these are championed by guy Bedford and Luca. I imagine that the status of these is that they are very much active and a part of the sort of bottleneck of import and module related proposals, but if Guy or Luca has a comment they’d like to add.

CDA: Neither are here.

PKA: Or if anybody from the committee would like to comment.

MM: Is KKL here?

CDA: No.

MM: I’ll—so there is, as PKA mentioned, this larger Module Harmony effort, and this—these were definitely consistent perks of that, all of the issues with regard to the larger Module Harmony effort had been worked out and looked good. So, yeah, I would keep both of these.

PKA: Yeah, definitely. Just, again, to reiterate, there’s no world in which we’re withdrawing proposals that are at this stage without input from champions, unless they’re really old.

DLM: Quick update, so we’ve started work on source phase imports. And we’re planning an ESM phase imports for later this year, source-based imports is important for us, and we’re also looking at WASM integration.

PKA: Awesome. Great to hear. Okay, so that’s—those are all of our Stage 3 and 2.7 proposals that we haven’t heard from recently. It sounds like they’re largely all hurtling forward at excellent speed, even though we just haven’t seen that in the committee. Seems like we have plenty of time to talk about Stage 2 proposals, which might not quite have the same status. It’s good for us to talk about them.

PKA: Proposals that we have heard from recently, we heard about deferred re-exports. We heard about

### function.sent

PKA: I’m wondering if we needed to circle back to that at this meeting, because I think it received a conditional—and the conditions weren’t met explicitly, were unmet.

MM: We just need to ask JHX.

CDA: I can provide the update there, because this happened in the delegates Matrix channel, where JHX has been chatting today and yet quite a bit. JHX does not want to withdraw the proposal. I don’t recall the other comments made about it. Oh, and also that the information about when it was last discussed was out of date. It had been discussed at some point in plenary before I think whatever JHD had said. But—so, yeah, the TLDR is it’s not being withdrawn, and I think you can reset the days since we’ve heard from the proposal back to zero on that one.

PKA: Okay. I do see—I think I see JHX in the meeting.

CDA: Oh, JHX here today? Yeah. JHX, if you want to chime in, feel free to, if you are there. Unmute yourself, but otherwise…

JHX: (in chat) I don't have a mic.

CDA: Yeah. Okay, well, feel free to—if you have any comments about `function.sent` that you didn’t already make in the delegates channel yesterday, feel free to add them here or there.

PKA: So then, yeah, then we’ve got a number of other proposals we have heard from. This—I should say last year, 2025. So let’s now see some proposals that we have heard from less recently in 2024. So first there’s

### Iterator.range

PKA: This is a proposal to add a range helper method to the standard library. Is JWK here to comment on it?

CDA: No.

PKA: I thought I saw him earlier. That’s too bad. Does anybody from the committee want to make a comment? Okay.

MF: There has been some recent discussion in the issue tracker. I think JWK plans to continue with this pretty soon.

PKA: Okay, that’s great.

DLM: Just to chime in quickly on `Iterator.range`. We had an intern looking at this last year, so we have a, you know, semi-complete implementation in SpiderMonkey just waiting for pike issues to be ironed out. So that will be something that we would be interested in seeing advance soon, if JWK has the time to work on it.

PKA: Awesome. That’s great.

### Discard (void) binding & Extractors & Structs & throw expressions

PKA: We have discard (void) binding; so this is like if you want to—I think it’s most useful in a using case where you want to using something, but you don’t actually want to make a binding, so you can put “void” instead of another binding name. Can also be generalized to other case like function parameters. RBN, you are able to give a comment?

RBN: Yeah, so this and the other proposals of mine that are on this list, I just haven’t had time to look at last year with the job change. I still plan to work on and advance discard bindings and I can also speak to structs. I know SYG hasn’t had time to be involved in with that proposal. I haven’t in the last few months. There were a number of discussion going on for structs last year, and the work for things like atomics pause and the work for—that MM was pushing for the ability to prevent mutation—sorry, preventing installing private fields on using the super constructor return hack that—all those things were actually very strongly related to the structs proposal, and with SYG not being part of it, I have not had time to get back to it. And I plan to get back to it this year, and I need someone from implementors to be involved. And a lot of the forward momentum was strongly the result of SYG’s direct involvement as a member of the V8 development team, so we would need someone there to help on that side as well to continue that. And then extractors, I still plan to work and advance that. We’re having some discussions in the header matching champions group that still needs to—we need to reschedule our meeting, because we now have some meeting conflicts and get everybody back up on that, because proposals are very strongly tied together. Throw expressions is something I need to get back to. The last time it left off was a discussion about whether it could be an `error.throw` method, and I have concerns and I haven’t had the time in the last year to write down my concerns and come back to it.

PKA: Okay, great. Thank you for all those updates.

CDA: There’s a question from MM.

MM: Yeah, I have a question for RBN. So as the structs discussion proceeded, the idea of shared structs versus non-shared structs, and the non-shared structs have a much easier—would have a much easier time of advancing, are they separate proposals or is structs still one proposal?

RBN: Structs is still one proposal. We might need to talk offline, because I’m not 100% clear on what you meant by non-shared having an easier time advancing. Only because from my perspective, the shared version is the more important version of the proposals. But this is—I think we should have this discussion more offline as well to figure out where that’s at.

MM: Okay.

CDA: That’s it for the queue.

PKA: Great. Thanks. RBN, is it fair to say that you are a champion of structs?

RBN: I was I believe considered a co-champion for the structs proposal for the majority of it, so I’m most likely currently the sole champion and looking for a co-champion.

PKA: Are any implementers ready to just throw their hat right in the ring right now? Probably not, but just thought I’d ask. Okay, we’ll let implementers, especially maybe the V8 team, meditate on that. We also have—I should also say, are there any questions from the committee for RBN about any of his proposals?

CDA: You’re including extractors and throw expressions?

PKA: Yes.

CDA: I do have questions from RBN about the RegExp.

PKA: I think we’re going to make it to there.

CDA: Okay. All right, I’ll wait. I’ll be patient.

PKA: Yeah, okay. So then I’ll turn to

### Propagate active ScriptOrModule with JobCallback Record

PKA: from CZW. I don’t see him at his desk behind me. Okay, so that’s a proposal relating to web compatibility with something about promises. I’m forgetting off the top of my head how that works. Does anybody on the committee have a thought about in proposal?

CDA: I’m struggling to recall what that proposal is.

PKA: I can—I think I have it here somewhere. Yeah, here it is. \[reading from proposal repo] “avoid revealing internal slot `[[PromiseState]]` with `Promise.then` … to the promise handlers by host hook requirement.”

NRO: Yes, I do have opinions here.

PKA: Oh, yeah.

NRO: The proposal \[INAUDIBLE] currently and we say something and then HTML violates what we say, so we should still keep that discussion open.

PKA: Got it. Excellent. Thank you, NRO.

NRO: And I mean, it’s low priority for everybody, but it would be great for our spec at some point to solve it.

PKA: Great. Our last proposal on this page is the

### isTemplateObject

PKA: I think JHD is the sole remaining champion. JHD, are you able to comment?

CDA: JHD, we can’t hear you. You are muted.

JHD: Sorry about that. Contraction I couldn’t unmute on the other device. So I was going—I joined this proposal to help DE with it. DE is apparently no longer—or not currently involved with TC39. The—I’m still—if there’s interest in this proposal, I’d really like a co-champion to help me with it. I don’t particularly care about trusted types, which I understand is the motivation for it, but I am interested in doing—doing things in the language so that web browsers don’t have to do terrible things on the web in order to achieve their goals. And I want them to be able to achieve their goals without doing terrible things. So that’s sort of where I’m at, is like I’m happy to help, but I don’t want to drive this myself. Is there anyone who is interested in seeing this advance?

CDA: I’m interested in seeing it advance. I don’t know that I’m interested in co-championing.

JHD: Fair. It’s good to have that on the record, too, if there’s folks seeing it advance, but, you know, don’t want to be volun-told to be a champion.

CDA: Nothing on the queue, so we’re going to take that as not yet. Maybe somebody who’s not present today would be interested.

### Dynamic Code Brand Checks (pt. 2)

PKA: I notice now that we do have NRO. I’m wondering if we can cycle back to—

CDA: Nicolo added a comment in delegate chat.

NRO: I can say it out loud to get it on the notes. This proposal is trusted types. It’s the changes we need to enable trusted types on the web. Trusted types are, I think, almost implemented in all browsers. But I—and I believe it’s working, and he said that it’s not ready for Stage 4 yet. Probably it’s not unflagged in all browsers yet or something like that.

PKA: Great. And then I think we also—was that the only one? Okay, maybe that was the only one. Okay, great. Okay, so now moving to some further Stage 2 proposes presented a little longer ago. We have

### Module Declarations & Module Expressions

PKA: which again I think I can say are, like, fully active and just in the module space bottlenecking a little bit. I don’t know, NRO, if you want to add an additional comment there?

NRO: Yes, still interested in those, but they are kind of on pause for me as to when the current module proposals I’m working on are at a later stage.

PKA: Any questions or comments from the committee about those two proposals?

CDA: Nothing in the queue.

PKA: Next we have

### `JSON.parse` immutable.

PKA: I think I can summarize this one as well. This is sort of a sister proposal to records and tuples, which was withdrawn, but has been replaced by composites, that ACE is working on, so I imagine this proposal is just kind of in a holding pattern waiting on composites as well. I don’t think ACE’s here. NRO, do you have an additional comment on this?

NRO: No. To be honest, I forgot working on this proposal. Maybe ACE has more, as he is the one working on composites.

PKA: Cool. Any questions—I mean, I’m not sure we have anybody to answer questions, but any comments from the committee?

MF: I actually think this shouldn’t be blocked on composites. The goal of Composites is different. Records and tuples was an immutable data structure for holding data that you want to get at later. And composites is about creating a structure that can be compared to another similar structure, which, you know, that’s—like, unlikely to be coming from JSON data. So at this point, I don’t think that those proposals are related, even though composites superseded records and tuples.

PKA: I’ll ask ACE to weigh in on this again. Next we have

### Symbol predicates

PKA: JHD, I believe the last proposal review mentioned needing to think through the sort of—the argument or the—come up with a convincing use case. JHD, do you have a new comment on this?

JHD: Sorry, I just stepped out. What was the question?

PKA: Symbol predicates.

JHD: Oh, I’m highly interested in advancing—continuing to advance this proposal. The main sticking point was that there’s—if I recall, because I had to page it back in, there’s two predicates in the proposal, and one of them nobody has a problem with, and the other one, SYG, who at the time was representing V8, expressed that there was—and I think he wasn’t the only implementer, just the voice of this concern, but expressed, like, a desire for more compelling motivations and use cases for the other one of the predicates, and while I could certainly split them up, it felt like it would be a better package if I could come back with a better argument and move the two together. So that’s—as soon as I can, I’m going to try and come back with either better arguments or splitting up the proposals. But I would still like both predicates to proceed.

PKA: Great. Any questions or comments for JHD?

CDA: Nothing on the queue.

PKA: Great. And last in this section is

### String.dedent

PKA: This is a proposal to—for standard library method to dedent text to sort of remove the common tab content from a string that has—that presumably consists of code for the purpose of being able to better—better DX, represent code in string form in JavaScript. This was discussed at the last proposal review:

JRL: About String.dedent: It was championed by PayPal, who is is no longer a member. There are no current blockers, I just have not written the test 262 test to get this 2.7.

DE: You don't need test 262 tests for stage 2.7, you need that for stage 3. So let’s propose that for 2.7.

JRL: I can do that for next meeting.

PKA: That didn’t happen. I’m just wondering, basically, I don’t think I’ve heard JRL say he’s no longer a champion of this proposal, and I’m just wondering if anybody is interested maybe in—since we don’t have Justin here, I don’t think. Is anybody interested in maybe joining Justin as a champion on this proposal? It sounds like it’s a sort of advanceable?

CDA: There a reply from LVU. Oh, LVU says, excuse me, strong support. This is also super useful for syntax highlighters, and then there is Nicolo on the queue.

NRO: In discussions much more recent than 2024, I think summary we talked about a blocker being how TypeScript transpiles template literals. That has some performance effect on this proposal. It’s not dropping, and we’re supporting the output, and maybe that blocker doesn’t exist and that can advance. And maybe somebody else can come from this, and just with discussion with other people a few months ago.

CDA: That’s it for the queue.

PKA: Thanks for the update, NRO. Is anybody interested in helping out with this proposal? If so, reach out to JRL.

PKA: Moving on, we have our eldest proposals in Stage 2. The first one here is

### Dynamic Import Host Adjustment

PKA: whose champion is KOT. And NRO, I think you had an update on this one.

NRO: Yeah, this was the precursor of dynamic branch checks proposal, I believe. I think this was inactive for ten years at this point, or you say 2022. But the people working this proposal were the same people working on the checks proposal that’s now implemented everywhere, so we can probably withdraw this one.

PKA: Great. KOT isn’t here, and I’m sure we don’t have—we can’t withdraw proposal without the champion present. Do you know, NRO, if that’s his view as well?

NRO: I do not even know who this person is.

SHS: I can reach out to him. He’s at Google.

PKA: Okay, great. Thank you. So thank you, SHS. So, yeah, so hopefully if we can get KOT's confirmation on that, then we can withdraw this proposal. Next we have

### RegExp buffer boundaries

RBN: Yeah, I plan to come back to this one as well, as some of my other RegExp features. But I spent more time trying to get the modifiers proposal through to Stage 4, and then a bunch of priorities changed, but this and a few of my other RegExp proposals I’m still interested in spending some time on. Hopefully I’ll have some time to do that this year.

PKA: Great. Glad to hear it. Any questions or comments for RBN from the committee?

CDA: Yeah, I’m on the queue. Please land this as soon as possible. I know, you know, you do so many things and everything, but, like, we really need this. The JavaScript ecosystem continues to be plagued by crappy regular expressions that cause security issues, and this is a security feature that would really help us out, like, big time. So, you know, I obviously can’t tell you what to do, but, yes, this would be really great to land sooner rather than later. And also, if you are welcoming any help with advancing it, you know, we can also ask the committee if there’s any folks interested in helping out as well, because I know that you went to have time do all the things.

RBN: I am curious when you talk about worrying about security vulnerabilities, I’m assuming all the various RegExp CVEs, if buffer boundaries is a higher priority than something like atomic operators, which tends to be a better solution for a fairly large chunk of CVEs that I’ve seen.

CDA: Yeah. I mean—

RBN: I mean, I can see both.

CDA: I haven’t put any thought into that, but I don’t assume they’re mutually exclusive. I guess what—sorry, what—you said atomic operators. This is related to what proposal?

RBN: It’s a Stage 1 proposal right now. The RegExp atomic operators proposal, it’s something that is supported in most other RegExp engines. It allows you to put a trailing—I believe it’s a trailing question mark—not trailing question mark. I’ll have to go back to look at the proposal. It’s a syntax that allows you to specify an operator is atomic, which means it either matches or fails, but don’t backtrack. And it’s—

CDA: Okay.

RBN: Many—sorry, many regular expressions CVEs are related to a RegExp that spends significant chunk of time scanning something and then scanning end number of—N number of spaces and hitting the end and failing to match the end trigger and then it goes back and it advances and tries again and atomic operators allow you to prevent that. It’s—the proposal repo has an example of the CVE, I believe, the last time it was presented. So, yeah, I plan to look at both of those as well as X mode and some other things.

CDA: Yeah, right. No, definitely, you know, the catastrophic backtracking, the non-linear regular expressions are the category. I will take a look at this proposal. I think this might be a good subject for us to talk about in TG3 as well. And if there’s a clear, you know, let’s land this one before that one, if that’s helpful feedback to get, we can try and answer that question. But I haven’t given that much thought because I have not really looked at this other proposal. But I will do so. That’s it for the queue.

PKA: Great. Next we have

### Destructure Private Fields

PKA: At the last proposal review, JRL indicated he is no longer championing this proposal. It was kind of blocked on DE had a concern about this proposal potentially infringing on the syntax for a possible object literal private field proposal. And DE was interested in bringing that to committee in order to show that they are not incompatible. Of course, DE is no longer on the committee. So I would just say if anybody’s interested in stepping forward to championing this, certainly it’s not requirement that you abide by, you know, DE’s interests there. Is anybody interested in stepping forward for—championing this proposal? \[long pause]

PKA: Is anybody kind of—does anybody kind of like this proposal, even if they’re not interested in championing it? \[long pause]

PKA: Should we withdraw this proposal?

CDA: There is nobody on the queue.

MM: I would prefer to see this withdrawn. This is Mark Miller.

PKA: We have—and also on the queue, JWK.

CDA: Pardon?

PKA: I saw on the queue JWK saying “I like it” and then it disappeared. JWK maybe with doesn’t have audio.

CDA: Got you. Disappeared from the queue. I’ve not looked at this proposal in a while. Oh, you said it’s without champion.

PKA: That’s correct.

CDA: But the proposal has JRL's name on it.

PKA: It does. Proposal repos are often out of date, unfortunately. At the last proposal review, JRL said he is not working on it.

CDA: I see. Okay, well—

PKA: This is an open question for the committee.

CDA: If Mark wants to put it on the agenda for next plenary to withdraw, that could be next step there.

MM: I don’t care that much. And given that JWK likes it, I’m not going to push.

CDA: Oh, okay.

PKA: Okay. Hopefully we’ll find a way to move forward with this proposal in some way or another. Next up we have

### Pipeline Operator (pt. 1)

PKA: I have some champions listed here. I don’t have high faith in being the correct list of names. On the repo itself it says list incomplete. So I’m not sure what to do with that information. Is anybody here able to speak to this proposal? RBN maybe?

RBN: So yes and no. As far as where the proposal stands right now, I’d have to get more discussion from TAB. I haven’t been directly involved with the proposal in a bit, and the last place I believe that we left off or what’s been causing the longest delay has been around dealing with a topic token. The reason I don’t really want to speak to the states of the proposal is since it got to Stage 2 with the current design, I’ve been more of a conscientious objector because I still don’t agree with the use of Hack style pipes. And I’m—and mostly I’m involved as a co-champion right now to talk about my concerns and continue to make sure that we’re at least going something on the right path. So I can’t really speak to much more on the proposal beyond that. We’d have to get TAB or JSC or someone involved to also speak to their side of things.

JHD: I can add some color, if that helps. Essentially, there’s a few people that don’t like what RBN talked about, the pipe style. There’s a few people that have been historically unconvinced that this use case is worth syntax. And that is a battle that would have to be fought to advance farther. Additionally, the specific choice not of the operator token necessarily, but of the placeholder token, is a bikeshed that has yet to be painted. And there’s a lot of folks who also want the ability to name it, and there’s other folks who oppose the ability to name it and so on. So it’s—it’s still, I think, for me, it’s a very important use case. I really hope it advances. I actually even Although I prefer the current style, I don’t care which style. But, like, there’s a lot of obstacles, I think, before it could advance.

PKA: JHD, when you mentioned those disagreements, are you saying within the champion’s group?

RBN: Possibly, but with—certainly within the committee.

PKA: Okay, plume practice agreement in the committee opportunity prevent it from being presented in the committee, and a disagreement in the champion’s group doesn’t—

JHD: Technically that’s true, but strategically it’s unwise to bring a presentation and propose something when you already in plenary heard it’s not acceptable, until you side channeled with all those people and come to some sort of detente that makes it worth spending more plenary time. If they came back and did an update, it would probably be rehashing the same arguments from last time, and there’s not really much value in that.

PKA: I guess what I'm saying is if there’s a disagreement in the champion group about how to proceed, wouldn’t it be useful to come get feedback from the committee and maybe if there’s an option that’s not acceptable to the committee.

JHD: Certainly, and from my outside understanding, I think there are no—I’m not aware of any disagreements within the champion group that do not also exist in the wider plenary group.

RBN: Yes, that is—that would be a correct statement. One of the main concerns right now in the proposal as it stands, as I mentioned, the use of the topic token or place holder token. That’s something that’s also been discussed in plenary. There has not been a solution to this. My secondary concern is that I still believe that the F# style pipes are better than Hack style as they do not have things we’re discussing being issued. Never a whole different set of issues. And we haven’t been able to make much forward progress on the hack style version of this proposal due to the topic token being a major concern and due to just there really hasn’t been much discussion between champions in quite a while on this. A lot of it’s been discussions in the issue tracker on what topic to use, and no consensus yet. And there’s no advancement because there hasn’t been consensus within the group moving forward.

PKA: Do you know who the champions are?

RBN: As far as I know, myself, TAB, and JSC. Tab commented in the Matrix chat back in October something, but we don’t have a final solution yet.

PKA: Got it. Okay.

CDA: Question from the queue. Is the champion group even meeting lately?

RBN: No, we have not had a meeting in quite a while.

CDA: All right. That’s it for the queue.

PKA: Okay. I think it would be worth thinking about what the committee should do in this situation, where proposal seems kind of irrevocably stuck, and I’m not saying it should be withdrawn. And there’s a lot of people interested in proposal who really want it, and it seems unfortunate that it seems quite, quite stuck.

JHD: There’s also not much of a cost in just letting it sit there. Like, unless—if there’s still people—in other words, if the signal that we want to send to the wider world is that this is—this is still something that people are interested in that has champions, then I think sitting at whatever stage it’s at is the correct signal. If the champions—if the issue is that no one wants to give up the ghost and no one wants to do anything to advance it, then that would be a different story. I’m not sure if that applies here or not.

CDA: Just a quick—RBN’s on the queue with a point of order that he needs to step away for a few minutes. RBN, would you prefer we pause on this topic and come back to it when you return?

RBN: Yeah. Hopefully I won’t be too long. I apologize.

CDA: Let me capture the queue as it stands and move on to the next, and we will return when Ron is back.

PKA: Next up we have

### Function implementation hiding

PKA: the last update we heard about this from MF was that it was blocked on TG3. MF, you are able to comment?

MF: Yeah. So I was not—I did not prepare anything on this, but my recollection is that this was stalled for kind of two reasons. One is that in order to actually specify something like this, we need the spec to actually have a representation of the stack frames that are to be elided, which was being done as infrastructure as part of the error prototype stack getter proposal. So it was kind of waiting for that. But there was also somewhat of a pushback from the committee when it was last presented as well, and I don’t recall the exact nature of that feedback, but I do remember it wasn’t 100% of everyone was on board and this was only waiting for that infrastructure. So it may also need some convincing from, you know, for some people who had issues with it. But that’s my best recollection, off the top of my head.

JHD: And I put myself on the queue for talking about stacks. So just I’ve already telegraphed this, I think, but just to be clear again, as soon as I finish these email integration for the stack accessors, then I can bring it back and ask for the next—first stage advancement. I’m hoping to do that at the next meeting. I have to find time between now and then. Assuming that it does advance, then the next thing I plan to do is some back with the broader track proposal which specifies structure, but not contents. Which will not require any browser to do anything to change their track traces. That’s by design. And see if the current makeup of the committee is willing to advance that without me having to boil the ocean of specifying the contents. I suspect that that proposal will unblock that aspect of Function implementation hiding and potentially a number of other error related proposal. As before, if anyone, for the broader proposal, if anyone plans on blocking, that please tell me in advance so I can talk to you and figure out if it’s even worth the time bringing it back. Thank you.

CDA: Yes, MM, go ahead.

MM: Yeah, so RBR’s proposals with limit and, I forget what the other one was called.

JDH: Frames above.

MM: Thank you. Have the same elision problems with what are they aligning and not specifying anything about the content. to consider it for RBR, and I think we should be willing to apply the same philosophy when we’re considering it here, and I also agree with JHD that once the stack accessor proceeds, then it’s a natural time to try to create more spec machinery in order for both RBR’s proposal and this one to proceed.

CDA: TG3 would welcome continued discussion on it.

CDA: MF

MF: Yeah. This was actually something I was thinking about earlier in this meeting. You know, we had the proposals from RBR that were affecting which frames show up, and I was assuming it would be similarly blocked, as this proposal is, that it couldn’t actually describe which frames to omit without that infrastructure being there. I use the term blocked as this cannot make progress, not blocked as somebody is opposed to it.

CDA: That’s it for the queue

PKA: Great. The last proposal for the day besides Pipeline is

### collection normalization

PKA: this was championed by BFS, who is not in the committee anymore as I understand it. This is a championless proposal.

MM: Can somebody give a brief summary? I don’t remember this at all.

PKA: Here, I can try to bring up the…

JHD: I can. I am in the car so I hope it comes through. Essentially, it’s the like hooks that let you alter the way that values are checked for presence. And even though it’s currently championless and I am not at the moment stepping up, I would very much like to not withdraw this proposal and I would like to—it’s something I am considering championing in the near future because I very much want to see it happen.

MM: Okay. Good. Thank you. And yes, I have positive feelings for this as well.

PKA: Okay. Great. Hopefully—

SHS: Created by composites?

PKA: We don’t have ACE here, so—I do remember there being—this mentioned in the context of that

JHD: There’s conceptual overlap, but the strength, the composites, it’s unlikely to subsume it and both can coexist.

MM: I would rather one proceed than both. They are too close to each other

JHD: That’s also fine, if that’s how it plays out

MM: Yeah. I don’t have a strong opinion about which one should win, but I don’t want two mechanisms.

PKA: Thanks for that feedback. Hopefully, we will gain clarity as composites moves forward or we get a champion for collection normalization.

CDA: Let’s return to the

### Pipeline Operator (pt. 2)

CDA: The queue was SHS, was on the queue. Is there anything you can do it help kick-start this discussion again

PKA: I wanted to respond to JHD. I don’t know if I'm supposed to put myself on the queue as the presenter.

CDA: No. That’s fine. Sorry.

PKA: Okay. Yeah. So I just wanted to say JHD said, something to the effect of there’s no cost to letting this sit at Stage 2 and I wanted to say the cost would be that people really want to see this feature and the question is, like, is the current situation causing us to not get a feature that we might otherwise get? Maybe that’s—

JHD: If a proposal is stuck, then—then that proposal is withdrawn, people are likely to dry to bring a new proposal and then we have to rehash the same discussions and reasons why it is stuck and it won’t make progress either. So I am not sure—like, it seems better to me to, like, conceptually keep the issue open rather than close and deal with 50 duplicates

PKA: I am not suggesting closing it. I think your comment was in response to me sort of musing if there is something the committee can do?

JHD: No. No. I’m sorry. That comment was about there’s not a cost to leaving it active. I am in no way—I am very much on board with bringing things up for review like you are doing right now. That’s always great.

PKA: Sure. Sure.

CDA: So yeah. Then we have SHS asking about anything we can do to kick starlet discussions. That’s directed to RBN.

RBN: Right now, I think the big thing will be trying to get a new meeting scheduled and try to get whoever is still planning to be involved as the champion on board. We have been having similar issues with the pattern matching proposal where we need to start rescheduling meetings because a lot of folks have—haven’t been able to make and have conflicts now, so we need to work that out. But just getting people together to try to figure out where things stand would be helpful. It’s getting the folks in the room. I still have some issues with the direction of the proposal. Those are more, I guess, for discussion off-line. So we will have to see where that can go.

SHS: Is there any interest in any new people joining the discussion, any champions or just participants? We certainly have some interest in seeing this go forward as well.

RBN: I certainly think it would be useful to have more participants and help start to kick-start things. It’s also a matter of—you know when this went to Stage 2, JSC was a member of TC39 and then he left—he was no longer a member for quite a while. He recently became a member again. But during that period, there just wasn’t much motion or traction. So I think we are again trying to get people back in the room to have that discussion. And I know I haven’t also been very—haven’t been as focused on this because of changing roles and organizations within the last year. So a lot of this has been back and forth trying to spend more time on this.

CDA: All right. Then we have DLM on the queue.

DLM: I wanted to say that past—this is unlikely to be something we would support in the future. I mean, obviously it depends on what is presented to the committee when it’s coming back. I am cautious about spending time on this. I am not confident this would go for advanced

RBN: Would you be open to an off-line discussion about what those are. We have talked about some of them in the past but it’s been a few years. Maybe they align with some of my concerns and there might be a way forward

DLM: I think Jonas was not part of TC39 and SpiderMonkey the last time it was discussed. We are skeptical about adding syntax in the terms of decreasing the capability. So I think that is the main concern that is heard. Also, the fact there’s a bit of a split in the champion group itself is an indication to us that no one is going to be completely happy with this, no matter which way it goes

RBN: Yeah, open. But I would have to dig into the context a bit. This was not—I was not part of the discussions if the previous time this came up.

SHS: Yeah. I think I can speak to some of that. So please loop me in

RBN: If you haven’t, there is a pipeline champion’s room on matrix in the TC39 group order, whatever it’s called. Matrix, that we can cut in as well.

CDA: Yeah. It is the space, the TC39 space.

RBN: Space. Yeah. I don’t use matrix often enough to use the vernacular

CDA: And that is time for this topic. Thank you. I think this was very productive. Got some good updates on stuff. And yeah. Appreciate your time.

### Speaker's Summary of Key Points

Stage 3/2.7:

Proposals The Committee Has Heard From Recently:

* **3** Temporal
* **3** Intl Era/Month Code
* **3** Decorators
* **3** Explicit Resource Management
* **3** Import defer
* **3** Non-extensible applies to private
* **3** Joint Iteration
* **3** Immutable `ArrayBuffers`
* **2.7** `ShadowRealm`
* **2.7** iterator chunking
* **2.7** import bytes
* **2.7** await dictionary
* **2.7** iterator join

Proposals that were determined may be ready to go to Stage 4 Soon:

* **3** Legacy RegExp Features in JavaScript (implemented in SM, possibly pending data from V8 counters)
* **3** Dynamic Code Brand Checks (widely implemented)
* **3** `Atomics.pause` (widely implemented)

Proposals whose champions were not present, but are presumptively very active:

* **3** Source Phase Imports (SM implementation has begun, SM very interested in shipping)
* **2.7** ESM Phase Imports (SM work to begin soon)

Stage 2:

Proposals The Committee Has Heard From Recently:

* Deferred re-exports
* Function.sent
* Async iterator helpers
* Error stack accessor
* Async context
* Seeded PRNG
* Math.clamp
* Native Promise predicate
* Error.captureStackTrace
* Import text
* Object.keysLength

Proposals we expect to hear from soon:

* Symbol Predicates (JHD will present new motivation or split the proposal soon)

Proposals whose champions confirmed they are backlogged but active:

* Discard bindings
* Extractors (RBN needs to confer with pattern matching champions)
* Throw expressions
* Module declarations
* Module expressions
* RegExp Buffer Boundaries

Proposals possibly in need of champions:

* Structs (RBN is a champion but needs an implementor co-champion)
* isTemplateObject (JHD would like a co-champion)
* `String.dedent` (possibly, Hemanth HM and JRL are listed)
* Destructure private fields (no current champion)
* Collection normalization (no current champion)
* Pipeline Operator (proposal is somewhat stuck, additional champions may help move the proposal forward)

Proposals we were not able to hear an update on, but are presumptively active:

* Iterator.range
* Propagate active ScriptOrModule with JobCallback Record (CZW confirms async that this is related to AsyncContext and will likely advance alongside it)

Other proposals discussed:

* Dynamic import host adjustment has been superseded by dynamic code brand checks (stage 3), and should likely be withdrawn.
* `JSON.parseImmutable` may or may not be blocked on the progress of Composites (stage 1)
* Function implementation hiding may or may not be blocked on committee concerns and may be related to other ongoing proposals in the Error space

### Conclusion

Action items:

* PKA will check with ACE on the status of JSON.parseImmutable.
* RBN will take a new look at RegExp Buffer Boundaries in light of CDA’s belief that it may be a very important security feature.
* SHS will reach out to KOT about the withdrawability of dynamic import host adjustment.
* KM will check with SYG about `Atomics.pause`, and possibly bring it for Stage 4 next meeting.

## Composable value-backed accessors for Stage 1 (cont.)

Presenter: Lea Verou (LVU)

* [proposal](https://github.com/LeaVerou/proposal-composable-accessors)
* [slides](https://projects.verou.me/proposal-composable-value-accessors/slides/)

CDA: That brings us to our continuation of composable value-backed accessors for Stage 1. LVU, are you—

LVU: Yeah. I am here. Can you all hear me well?

CDA: Yes.

LVU: Okay. Let me share my screen. Okay. Can you see my slides?

CDA: Yes

LVU: All right. So… I was thinking of the—sorry. I was thinking about the changes I could make to this proposal, these were the original problems statements. And to recap the previous discussion, correct me if I am capturing anything wrong here. It seems there is strong consensus against solving composable accessors via syntax. And consensus that auto accessors are largely sufficient for public class DataProperties which was the first staple. There was consensus that solving composable accessors through built-in decorators is worth exploring. Tooling was brought up as an additional benefit of having standardized functionality for this. And there was some mild interest in the exploring alias accessor for delegation or forwarding use cases. Let me know if any of this is incorrect.

LVU: Okay. So I thought about it some more. And even though originally when I presented this, I was of the opinion that syntax would be a better solution, I actually now think that built-in decorators would be a better solution. So I revised this table of pros of cons that I presented early. Mainly around yes, the issue with reliability can be mitigated through don’t use super long functions in there. Just use references. One of my main issues is that it’s lossy, it wraps the original setter and you lose it. That is separately. Perhaps the original setter can be preserved somewhere. Perhaps we can have—some kind of method to preserve original references when wrapping functions. That would be independently useful. There are solutions. I don’t think it’s a blocker. And even the imperative API, it’s planned to have decorators in object literals and that also mitigates it.

LVU: Additionally there are advantages of using the builtin decorators in addition to the small amount of syntax—it is easier to implement and. It does introduce a very low-fi way to test the waters. We can add more of them because it’s cheaper. And if we find out that it is actually used all over the place, nothing prevents us from exploring syntax later. It’s a much better first step to start with decorators than is ship syntax up front. And there are plans to extend the decorators to other syntactic constructs. Imagine, I think I saw somewhere about having decorators or function arguments like imagine that? There’s so much possibilities. And it adds more motivation for implementers to support decorators which is a nice side effect. I like the idea of doing it with decorators.

LVU: One important—interesting comment in TC39 delegate that NRO posted during the break was, he said I am looking at my accessory usage analysis, and they are numbers and not measured. 75% “property forwarding”. 15% lazy initial computation. 10% validation. 5% other. And scale that down because it actually adds up to 105, which assuming this is representative, because it’s one data point, it does validate that property forwarding is indeed a very, very common use case, more common than all the others it seems. And lazy initial computation is a big one I missed earlier. Yeah. So I think that was quite useful.

LVU: So I am thinking, assuming that we have consensus for at least a part of it to go to Stage 1, before moving to TC39 or Github, remove value-backed accessors. It seems we have consensus that auto accessors cover this. Perhaps RBN and I will work together. But that’s a separate thing. And then focus the proposal on the composable accessors and split it into two proposals. One composable accessors via built-in decorators. We have consensus, we can just scope it down up front. And then alias accessors. Which is separate. And I will discuss why.

LVU: First, composable accessors through built-in decorators, the previous problem statement. There are large classes of accessor use cases with strong commonalities and deserve better D and tooling support. And the property would explore which of them could impart over impact/efforts to expose the built-in decorators. It’s not about specific decorators. Not to very well date the lazy decorates. Part of the exploration is which ones do we need to add. And also, what namespace they live in or the signatures would be that would be TBD. I am not actually sure if the decorators proposal does allow multiple arguments. But any ways… in the weeds. That is one component of it. I guess I can ask, do we have consensus for Stage 1 for that part? That would be separate.

CDA: Yeah. So do we have support for Stage 1 for composable accessor via built-in decorators? SHS, did you want to speak?

SHS: Yeah. I support Stage 1 for this.

CDA: RBN?

RBN: I also support Stage 1 for this.

CDA: And there is support from PFC as well. Also from MF. All right. Do we have any objections to Stage 1? Seeing nothing, hearing nothing, all right. Congratulations. I believe you have Stage 1.

LVU: Whoo. Well, thank you. All right.

LVU: So now, for part 2, that would be about alias accessors. The name is also TBD. I am not—I don’t like it tremendously. So it does seem that even among those large classes of use cases, accessors that forward in other properties, often deeply nested within subobjects are particularly large classes of accessor use cases. I knew it was big but I was also surprised by NRO’s percent of 75%. That was even bigger than I expected. It makes sense in retrospect. But it was bigger than I expected. It does seem to be particularly prominent. And therefore, it seems to be worth exploring separately, especially since it would be difficult to do this part with decorators with reasonable DX. First off, you need some way to specify a reference to a property. And that—if you want—it’s very clear that it should be able to support private members. So it does seem like you might need some kind of syntactic level thing. And I mean, in theory, you could do it with decorators but it would be very awkward. Like you could have—actually, the private thing I am not sure you could do with decorators in the current stage. Yeah, that seems to—that seems possible to need syntax. It seems like it could also benefit by composing well with the group of accessors proposal. For example, for many of these you want to expose a getter but keep the setter private. Do things like that. So who knows. Maybe it will eventually be merged into there. That is an open issue in the auto accessors and grouped accessors proposal, but essentially what this is. The concerns about generator functions based on reference tokens, that it seemed like not blocking for Stage 1, if we don’t resolve them, they might cause issues down the line, but it seems premature to decide we can’t move forward because of that at this stage. So this could be an exploration of different syntax. How it could integrate with the auto accessors group, the accessor proposal, that sort of thing. So and yeah. And I guess this is also—this is a proposal, does this have support for Stage 1? And again Stage 1 is the exploration.

CDA: Yes. We have—NRO is on the queue.

NRO: Yeah. So I am fine with exploring these. However, I am not convinced yet that it’s needed. I am saying this because most of the time we have this like proxy property, I only have the getter, not the setter. We save 10 characters in the getter. Removing the return in the keywords which can condense it, compared to the cost of the new syntax

LVU: If you only have the getter it's less value. When you have the setter you have to repeat it twice. And repeating it—avoiding repetition of the property name is part of the motivation of the group accessors. People do seem to see a value in avoiding the repetition. Even in cases where you only have the getter. Make it explicit, this is an alias accessor, could be—is a more declarative and tooling could take advantage of it. There could be certain optimization for regular accessors. But there’s definitely less benefit if you don’t have a getter.

LVU: And there could also be syntax—part of the exploration for syntax could be—could we have sort of an aggregation to expose multiple of them? Or maybe if you are exposing multiproperties from the same object, with the same names, there could also be a shorthand syntax around that. Something similar to the structuring. There’s a lot of these. You want to expose many of them. From protocols, for example, you want to expose multiple at once. For things like Element internals, and that sort of thing, you want to expose a lot of them. The current code can get quite repetitive even if you do read only.

CDA: KM?

KM: Yeah. I am not going to go to Stage 1 on this. I do think that I would need more motivation, stronger motivation for anything beyond that. I don’t know. I mean, from the—onlines of code we are talking about the first example. If that’s a large codebase, 105% isn’t that many. Like it’s—like, for the total number of accessors at all, so like—I don’t know when I have—I have written benchmarks for JavaScript, I don’t think I used accessors that often. Having custom syntax for it—there are cases where you want them. But like knowing they are there and having them be explicit is kind of my default assumption for this personally. I could believe that maybe this is, you know, a taste thing. But I would like to see definitely—I don’t know motivation would—what data would convince me, but I think beyond exploration, I would have a lot of concerns about adding this kind of syntax for just like aliasing.

CDA: Nothing else on the queue.

CDA: If there’s no other comments, LVU, or you didn’t have anything more you wanted to say, do you want to ask for consensus now

LVU: Sure. I suppose.

CDA: Okay. Do we have support for Stage 1 for Alias accessors? Not seeing anything on the queue. We do not operate on—we have + 1 from JHX for Stage 1. RBR, go ahead.

RBR: So I am pretty much what we said earlier in committee, I believe this is something where the benefit is so, so small from a realistic standpoint of what we get and actually also the overhead for developers to know different syntax, they have to learn more, and one the great benefits of JavaScript was that the language is not super big from all the different possibilities. So adding more and more aliases, I can’t say do things, it’s burdening the users more than benefitting. And I personally don’t think we should discuss this. So, therefore, for me, like if someone wants to continue discussing that, outside of the committee, of course. But I personally would rather not have that here.

CDA: I am on the queue with a reply. You know, I see the benefit is small when you talk about, you know, burdening developers. I mean I think it’s maybe we are getting a little bit ahead of things. Right now we are seeing the potential shape of something and not what it is. Until we see a concrete solution being proposed, which is a Stage 2 concern, I kind of don’t understand jumping the gun and blocking based on what is, perhaps, a misrepresentation in terms of what the actual result would look like.

RBR: So one thing and I know this is about rules for Stage 1, they are very much on—well, we can discuss something. But I would definitely have very strong concerns about Stage 2 for anything that I can imagine in this case for it. Now, of course, maybe there are some ways of dealing with it in a way, this is so intuitive, we need this. I don’t believe this is the case. Getters and setters are super rare and I don’t want to introduce more of them. And like—and there are different code bases and that’s obviously the case. Some might use them more and then they are also paying the overhead of that. And like in this case, why can we not explore it further in a way that we believe it is even going to get to Stage 2? Do we have to discuss it in this round at the time, in this case? I might have a single perspective on that. I don’t know.

LVU: RBR, would you object to an extension of the auto accessors proposal that allows customizing the back field or do you object to it being a separate proposal?

RBR: Say that again, please

LVU: So one of the open discussions in the auto accessors proposal, I have linked in in slides is customizing the backing field, which is essentially what this does. Whether the syntax is based on accessors like the accessor keyword or has a different key word, that is just syntax bike shedding. One potential direction is to expand the auto accessors group, accessor proposal to include that kind of support. Would you oppose that? Is it specifically around having a separate feature that you can object to. Or having the clarification for this something you are proposing

RBR: I don’t believe we need the functionality.

LVU: Do you not think it’s common enough for or do you think the boilerplate is too small to matter?

RBR: Both.

LVU: So do you think that NRO, for example, who said 75% of his accessors are alias accessors, do you think that is an outlier?

RBR: I would say not all code looks like that. Like, I can—I am happy to look through codebases that I am working in and there, getters and setters are not as common. Ideally, they are not used that strongly in the first place and about using them as an alias and no codebase where this is the case, I believe it’s a mistake in this case. That’s my personal perspective. And yeah, there can be different views on how to write code. But that is just my personal take on it. And, therefore, that’s pretty much how a developer writes code. But like I don’t see that we should have this. I do like the explicit way of how a getter has to be defined currently.

LVU: So I mean there are codebases that don’t use accessors at all. We recently heard that many people don’t like accessors at all. But if there was data, to convince you that the pattern is common enough, like would that—still oppose the clarity of solution to it?

RBR: Even then, I don’t believe the benefit is huge. Because what benefit is there for? You can do it at the moment. We don’t gain anything from this really.

LVU: I mean, the benefit is basically a product of how often does it happen and how big the benefit is per case. It’s not just about the size of the benefit per case.

RBR: So we—save a few characters. Or what else is there?

LVU: When you have 30 accessors in a class, it kind of adds up.

RBR: I don’t believe that is justifying it. In this case, I would write a helper method

CDA: I would like to go to the queue. NRO case, FYI, my data is about relative user, getters and setters usage. Not how much I have used getters and setters. Next on the queue is PFC.

PFC: I don't think the view that the use of accessors in modern code is a mistake, has any consensus within the committee. I certainly don’t think it’s a mistake to use accessors. I think it’s debatable what the process is here, but I don’t personally think it’s appropriate to block something from Stage 1 because it uses a language feature that you prefer not to use in your code.

RBR: Yeah. It’s a fundamental mistake in all cases.

CDA: Okay. I agree with PFC’s comment. And I also wanted to state, as a reply to RBR, that talking about that it’s only saving this or that, there’s plenty of precedent in this committee for DX that looks like this. Or is similar. And so, you know, I don’t think that choosing now to be the time that, like, this is beyond the pale is prudent. There is a reply from CM.

CM: Yeah. As the person who spoke up who doesn’t like accessors. This is—this should not be part of the discussion. The people who like them, like them. And you know, we could have that argument in some other context. But I don’t think this is the context to have that argument. To the extent that people really want to use accessors, the question is what form should they take? And that’s what this proposal is about. Just in general, the narrowing of the scope here, you know, satisfies most of my concerns about the problem statement. You know, to the point where I am no longer inclined to want to, you know, stand up, as the angry guy blocking things. I am not wild about it, but you know, it seems like at this stage, it’s fine and it’s pretty clear that people are interested in it.

RBR: All right. I will pull back my objection as such. I am definitely not fond of it. It’s not a good idea to add—in my perspective, just words for something like that. But that’s my perspective.

CDA: Yeah. Your comments are fair. Don’t get me wrong. I was typing something in the queue. But I wanted to reiterate, we all know this, but if we don’t like the proposed solution at Stage 2, then it doesn’t get Stage 2. Simple as. So there’s nothing else on the queue at this point. Before that, additional discussion, we did call for consensus. We did have support from JHX, I believe. Were there any other voices of explicit support for this? I know some folks are skeptical.

CDA: I support this for Stage 1. PFC also supports this for Stage 1. Do we have any objections? Hearing nothing, seeing nothing. Looks like you have Stage 1.

LVU: Thank you.

CDA: Congratulations.

### Speaker's Summary of Key Points

* There was clear consensus against solving composable accessors via new syntax, and agreement that auto accessors sufficiently address value-backed public data properties.
* There is strong support for exploring composable accessors through built-in decorators, including potential tooling and DX benefits.
* Meanwhile, I also revised my position and now believe decorators are the better first step: they are cheaper to implement, lower risk, allow experimentation, and preserve the option to introduce syntax later if warranted.
* Usage data shared during discussion suggests property forwarding is a dominant accessor pattern, reinforcing the value of addressing composability and aliasing use cases.
* To reflect consensus and reduce scope, I proposed splitting the work:
  1. Composable accessors via built-in decorators (now Stage 1).
  2. Alias accessors as a separate exploratory proposal, especially for forwarding use cases that may require syntactic support and interaction with auto/grouped accessors.

### Conclusion

* Stage 1 for composable accessors via built-in decorators
* Stage 1 for alias accessors
* The alias-accessor track will proceed as exploration, allowing us to validate motivation, evaluate design space, and determine whether the ergonomics gains justify further advancement.
