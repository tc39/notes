# 9 March, 2021 Meeting Notes

-----

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Ross Kirsling        | RKG            | Sony (PlayStation) |
| Philip Chimento      | PFC            | Igalia             |
| Cam Tenny            | CJT            | Igalia             |
| Caio Lima            | CLA            | Igalia             |
| Jordan Harband       | JHD            | Coinbase           |
| Waldemar Horwat      | WH             | Google             |
| Bradford C Smith     | BSH            | Google             |
| Robin Ricard         | RRD            | Bloomberg          |
| Jason Williams       | JWS            | Bloomberg          |
| Ujjwal Sharma        | USA            | Igalia             |
| Yulia Startsev       | YSV            | Mozilla            |
| Shu-yu Guo           | SYG            | Google             |
| Guy Bedford          | GB             | OpenJSF            |
| Mark Miller          | MM             | Agoric             |
| Chip Morningstar     | CM             | Agoric             |
| Leo Balter           | LEO            | Salesforce         |
| Hemanth HM           | HHM            | PayPal             |
| Philipp Dunkel       | PDL            | Bloomberg          |
| Jack Works           | JWK            | Sujitech           |
| Devin Rousso         | DRO            | Apple              |
| Michael Saboff       | MLS            | Apple              |
| Istvan Sebestyen     | DRO            | Ecma International |
| Sam Tobin-Hochstadt  | STH            | Indiana University |
| Rick Button          | RBU            | Bloomberg          |
| Dave Poole           | DMP            | Apple              |
| Justin Grant         | JGT            | Temporal (Invited) |
| Kevin Gibbons        | KG             | F5                 |
| Daniel Ehrenberg     | DE             | Igalia             |
| Ron Buckton          | RBN            | Microsoft          |
| John Hax             | JHX            | 360                |
| Aki Rose Braun       | AKI            | PayPal             |

## Editors Update

Presenter: Kevin Gibbons (KG)

- [slides](https://docs.google.com/presentation/d/1AI-r8JDTIGD4Sg-DvazQcfchGJQ3Q21XOW9HnddsXRk/)

KG: There have been no major changes to the specification since our last meeting less than two months ago. We have landed a few normative things. These are all things we had consensus for.

KG: #2216, the relevant change is that a derived class that uses a default super constructor will no longer use the current value of array.prototype symbol.iterator. It will do the iteration in a way which is not over-writable. It will invoke its super constructor without relying on whatever the current value of Array.prototype symbol.iterator.

KG: #2221: explicit methods for typed arrays. This is just an under specification which is now fixed. Because it wasn't fully specified there was divergence in engines.

KG: #2256: this is a grammar issue Waldemar raised ages ago, which we have finally merged. The grammar allowed both a for-of loop with a variable named async and a regular for loop, so like a c-style for loop, that had an async arrow with a binding identifier named "of" as the parameter. So `for ( async of`, that sequence of four tokens could start both kinds of loops. You wouldn't know which production you were parsing at that time. And this is an ambiguity that we try to avoid. So the solution was to just ban for-of loops with a variable named async because it's just not a thing that you would particularly want to do. `async` is an odd choice for a variable name.

KG: #1585: this is a from Matthias and others making array.prototype sort more specific. Again, one of those things has been open for a long time. But we finally got - we were waiting for more data to make sure everyone could implement it and they could so it's landed.

KG: #2116: the order of the "length" and "name" properties on functions is observable. It did not previously have a defined order. Now it does. That's mostly a prerequisite for other changes, other editorial changes we would like to make.

KG: OK, and we have a very similar list of upcoming work. I'm not going to recap this since we're tight on time this meeting. I do want to point out that multi-page builds are not yet available, but the PR to implement them is available. So if you go to recent pull requests on ecma262, there's one about multi-page builds and the preview for that has multi-page builds. So this is just an option; the specification will continue to be available in its current form, but if you are on a device which has difficulty loading or in particular laying out the entire specification you might find it more convenient to be able to only use the part of the specification which you actually care about. So, please go comment there if you have any thoughts before we land it.

KG: A reminder–there's a project board where we track the major stuff that we're planning on doing or have started doing.

KG: And the most important thing in this presentation is: there is a candidate for the ES2021 spec ready. It's just cut from the main branch as of, I believe, Sunday evening or Monday morning. This is something that needs to be presented to begin the formal two-month period where everyone can have their company's lawyers review the candidate to make sure there's no IP that they care about or any other things that they care about that would prevent this from being released as a standard. So we would like to start the opt-out period now. I would like to ask for unanimous consent for the 2021 candidate, which will begin the IPR out that period towards putting this as a formal standard.

MM: Sounds good to me.

DE: I support this as well.

YSV: I also support this.

IS: So it will take maybe one or two days or until it is officially published, you know on the Ecma documents Etc. So we can take it as it is practically today but publication of this takes one or two days. (IS Note outside the meeting: It has been done already on March 10, 2021. End: May 10, 2021)

JHD: It's on the reflector and it's also a public release on the GitHub repo.

IS: We have two channels, for the official Ecma Channel, you know with the Ecma documentation and etc. And then we have our own in TC39. So I will immediately write to Patrick Ch. that he should put it out and then later it will be put out tomorrow, so it's almost the same.

### Conclusion/Resolution

- Unanimous consent for 2021 Candidate
- Opt out period until May 10th, 2021.

## ECMA 402

Presenter: Leo Balter (LEO)

LEO: For ECMA 402 There is a very interesting part here. In the repo for the wiki pages we have a reasonably maintain proposal in PR progress tracking and it's a good one for everyone to make sure like, what are the merged PRs and also to keep track of what is already in the 2020 Edition, but what is coming for the 2021 Edition. This is a good way to see and keep track of what we have for the 2021, including Intl.list format. intl.display names, the date-time format from a date-style and time-style, and also format range. We have intl.Segmentor for possibly for stage 4 in this meeting, but this is not part of that 2021 edition.

LEO: I would just like to highlight right before our release candidate cut and André Bargull did at the pretty impressive review of the specs and I think this has been really /interesting. There is a lot of things here to take a look at it if you're interested. That's mostly it. As a quick highlight as well, I think I fixed the GitHub actions workflows. We recently migrated from Travis to GitHub. But now we've got a good working deploy process as well using GitHub actions and it's really faster and it runs very smoothly.

LEO: We also have the release candidate. So if you jump to https://tc39.es/ecma402/2021/. You should be able to see it, but there is also a pdf version with numbered pages in the same reflector thread that JHD posted for. yes, 2021 and I think for formalities I should be asking for the same consensus for this release candidate itself and therefore other reviews. I'm pretty sure @anba has captured most of the corner cases around the Ecma 402 specs and I’m really thankful.

IS: So also the same two-month period for opt out. It starts that we say from tomorrow, so it would be May 10 that it finishes. Is that correct?

AKI: I believe so.

IS: Okay go. Thank you. So both for boot specification ECMA-262 ECMA-402 and it also means that both are now frozen. Frozen means that obviously we will find editorial changes and mistakes and whatever, so those are possible, but substantive changes etc are not. So this is what “Frozen” means which is not from the editorial point of view. It is still so that we still can make “editorial” changes (but not substantive ones). Okay, thank you. So, I think I understood.

AKI: All right. Excellent. Congratulations to 2021 us.

### Conclusion/Resolution

- Unanimous consent for 2021 Candidate
- Opt out period until May 10th.

## Introducing: Make B.1.{1,2} (octal literals & escapes) normative for sloppy code

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/1867)

KG: So this is a project that we began quite a long time ago. We got consensus on basically getting rid of annex B in the sense of merging it into the main specification with similar requirements around when it is normative and when it is not. However since then there has been some pushback around parts of it, so we are doing it in a more piecemeal way. You may remember at a meeting or two ago, we talked about moving the `__proto__` syntax and accessor into the main specification. This is another part of that.

KG: So annex b.1.1 B.1.2 are octal escapes, legacy octal integer literals. This is like 034, or whatever. We would be moving them into the main specification, still only legal in sloppy mode code. So the only change as far as normativeness is that this would no longer be optional for non web browsers. Every implementation would be required to have it as in practice -- like if you want to run code that's out there, you probably need to have this anyway, whether or not you are a web browser. Yeah, so that's the change that: upstreaming b.1.1 and b.1.2 into the main specification with the same strictness requirements as is there currently, but without the optionality implied by Annex B. I would like to ask for consensus.

MM: Yes.

DE: Yes.

AKI: All right, that sounds consensus-y to me. Great.

### Conclusion/Resolution

- Consensus

## Normative: specify creation order for capturing group properties

Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/ecma262/pull/2329)

KG: All right, so you may recall that the order in which non-numeric properties are created on an object is normative because it is observable using object.keys. So for example, if you use named capturing groups in regular expressions, as you should, you get this `groups` object that has capturing groups on it. Those are created by this loop that just iterates over all of the capturing groups and then says, if this is a named group then create a named property. And it did not say - it said for each of these integers that is a capturing group you should create a property, but it did not say to do it in any particular order. You have one two, three, four, five six, seven, eight nine ten, but it didn't have to do them in that order. So the change is just to say do it in ascending order. Again this is observable via object.keys. As far as I am aware everyone does this anyway, I can't imagine doing it any other way. Well, I can imagine it, but there are also test262 tests which expect this - which was slightly wrong because this didn't actually define an order so would like to add a consensus to add "in ascending order" to this step.

DE: Makes sense to me.

??: Yes, please.

MM: Yes good.

DE: Tangent–Since we are discussing things about capture groups. There's this prohibition against named capture groups that are duplicates, but sometimes that's very useful in a disjunction or even a repetition. So if anybody thinks this should be relaxed, as many people do, and wants to champion a proposal: Please get in touch with me. I'd be happy to work with you on that. Thank you so much Kevin for fixing up the loose ends loose ends for capture groups.

AKI: Thank you, Daniel.

### Conclusion/Resolution

- Consensus

## Backup incumbent tracking for FinalizationRegistry jobs

Presenter: Shu-yu Guo (SYG)

- [slides](https://docs.google.com/presentation/d/1w8b_kPc5UccV4Y_k3WEsSnQLMoHWDqMdkhQ2MIJ-OBk/edit#slide=id.p)
- [proposal](https://github.com/tc39/ecma262/pull/2316)

SYG: Alright, so basically I'm not going to recap what back up the incumbent settings object tracking thing is. It's like HTML Arcana, but remember I did explain this a couple of meetings ago for promises specifically to to add these hosts defined host hooks called make host make job callback and host called job call back for these callbacks that You pass on to the host to run like promise-like promise handers the idea is that then the host like HTML can add whatever state they need to it and pull it back out when they call it in this case. They would track the backup and convent object thing. So we did this for promises and this should be uniformly done for all callbacks that go to the host and we forgot to do this for finalization registry callbacks when we merge finalization registering the main spec. So, this PR is basically to add those two callbacks to the finalization registry. So those two host defined abstract operations that these supposed to host hook calls to the finalization registry machinery and this behavior is we're doing this to consistency with promise callback behavior. It will unblock the HTML integration PR for finalization registry and weak refs get the HTML integration stuff merge, which is good because it's already stage 4. Firefox is the only one who implements this incumbent tracking behavior per spec for both promises and finalization registry is my understanding, please correct me if I'm wrong Yulia.

YSV: (silent confirmation)

SYG: And chrome is interested in aligning here, but here, but it's like - threading through the incumbent object correctly everywhere in blink and V8 is I think going to be some work and we're not prioritizing it very highly currently, but if the eventually to plan is to eventually align on this behavior, and if you look at the HTML spec, in fact, there be a little side icon saying this behavior is currently only implemented Firefox. So that's it. Any issues with getting consensus for this? Is there anything on the Queue?

MM: My question is, for the incumbent thing, when we introduced that for promises, did we make some big qualification, at least with a non normative note, hopefully something more normative, that this is only for web browsers rather than a general host hook that should get that hosts should feel free to use.

SYG: We certainly did. Let me okay. I think you don't mean incumbents. I think you actually mean the host hooks host called job callback and host make job callback. And the normative - it's not even a non normative, if you look up those AOs on the spec actually, maybe I can just share. But Basically if you look up those AOs on the spec, there's a default implementation, which is basically for host job call back. Just does the plain call and for the HostMakeJob call back just make a wrapper that does nothing, the notes that says ecmascript hosts that are not web browsers must use the default implementation,

MM: Is there a similar issue with this one?

SYG: No, because they use the exact same host hooks.

MM: Ah, great. Okay. Thank you. All right. All right.

SYG: I still don't see anything on the Queue. So do I have consensus?

MM: It's fine with me.

YSV: You have consensus from my side Shu, and what you said was correct for Firefox.

SYG: Okay great. Thanks for confirming.

### Conclusion/Resolution

- Consensus

## Class Static Initialization Blocks

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-class-static-block)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-TkfhG_gVnKlNwMT-MyA?e=owLLRf)

RBN: I will keep this short. I put 15 minutes on the agenda. I just want to provide a brief update on the class static initialization block proposal that we discussed in the last meeting. We've already gone over the motivations, so I'm not going to spend too much time talking about that. What I do want to point out is where we ended up with proposed semantics. What we discussed is the proposed semantics for stage 3, which was that we would allow for multiple static initialization blocks per class. Which was a change from only 120 more as of PR 38, which was what we discussed as part of the conditional consensus for stage 3. We would evaluate these static initialization blocks interleaved with static field initializers as part of the layering of this proposal on top of the static Fields proposal. That has been addressed.

RBN: We still currently don't support decorators on static blocks, which is we don't know what that exactly would mean yet, but if that's something we eventually do want to do that will probably happen or be discussed as part of the decorators proposal or later. There was another issue that we were concerned about which was whether or not or how to handle new.target inside of a static block. At the time was not did not feel very clearly specified in static fields, that was because I was looking at an older version of the proposal spec text rather than the version that is the one is the diff from the actual ecma262 spec. So this has been updated and is now consistent in that new.target will return undefined just like it does in methods and in static fields.

RBN: The semantics we also discussed, these have not changed, is a static initialization block is essentially like an IIFE, an immediately invoked function expression inside the class definition evaluation giving you access to the lexically scoped members, with a number of restrictions. Return is forbidden. This is similar to Java semantics for stack blocks that don't allow return. or early return to ensure that the all static members have a chance to be fully dressed. There are workarounds in thatthe you can still use a labelledlegal statement and break out of it if you do need to skip past a section of code and await are currently forbidden it because of the fact that it's there's some there can be confusion between whether or not code is evaluating in the outer scope that the class is contained in. We have reserved `await` so that cannot be used as an identifier as well in the event that we decide to relax the restriction for yield or await so that we don't end up in the case where we can't relax it, because await is still considered to be a permitted identifier in "use strict" contexts. So this reserves it within these static blocksblock so that we have some room to possibly change this in the future without a breaking change. Break and continue are forbidden when not nested in labeled statement iteration or switch. Super call is forbidden. There is nothing to invoke. Super super property is permitted so you can call Base Class members are super class members. A ?? superclass properties from within the initializers arguments is forbidden. This is so that a bit just like an arrow function that doesn't have its own arguments. But also since you're not referencing the outer block or the outer container, you're not able to reference the arguments there plus a static initializer doesn't receive arguments. So there's nothing to be used in `this` context. The `this` receiver is the constructor function of the lexical class. That's so that you can use this.something to to reference the class for initialization and avoids possible naming conflicts do that might arise as decorators are added, because of class binding of the class name is available within the block and because of the fact that it's a variable environment. So if you say `var x`, that is local to the static initialization block, it does not carry over to other static initialization blocks or anywhere else inside of the class.

RBN: So in the last meeting in January, we conditionally advanced to stage three pending the changes that were that we just discussed. Those were approved and merged. So assuming no other concerns that theoretically means that we are now at stage 3 with this proposal since that was the only blocking issue for stage 3. That's pretty much all I have for this if anyone has any comments that they'd like to add.

DE: Great job on this proposal. I'm very happy about how responsive you were to all the concerns and patient with my review. And so, thanks. I support this being considered stage 3, which I agree it kind of already is.

RBN: All right since this since we have the conditional approval, I'm not specifically asking for stage advancements since this is essentially now stage 3. I am interested in getting some feedback from implementers that would be interested in investigating this feature for what we need as our requirements for stage 4 and I'll probably be filing issues on various issue trackers and in the near future starting to work on the stage for process.

YSV: It's already tracked on Firefox.

RBN: Wonderful if there are publicly available issue links for these if you could add either contact me directly just add something to the issue tracker so I can track those issues. I would be helpful.

SYG: V8 has implemented as a flagged feature and I plan to send the intent to ship soon. Probably Friday.

RBN: And we have a community contributor that's already working on putting together a down level implementation for typescript right now. And that's all I have. So, thank you.

### Conclusion/Resolution

- Still stage 3

## Records and Tuples update

Presenter: Robin Ricard (RRD)

- [slides](https://docs.google.com/presentation/d/15ggPmSVt-cI9asKaoolZkvjvV62Xh3I9LSD7R5nXQ8A/edit)

RRD: This is a really quick update so I don't want to take much everyone staying here because this need to questions that we intend to ask to the committee. This is not a decision where we're taking here. So no stage advancement or anything like this today on record and tuple.

RRD: So this is basically about coming back to what (we discussed?) in the stage 1 slides in October 2019, which is that code that you would write for record and tuple should also work with objects and arrays and execute mostly the same especially while accessing them. Right and we found out recently by triaging things and making sure that everything was coherent that Array.prototype doesn't have all of the methods that we added to record prototype and we quickly thought about it and we are thinking of potentially adding them to the array prototype. And so that include the `popped` which removes and elements and gives you basically a copy of the Tuple but with the element popped, `pushed`, `reversed`, `shifted`, `sorted`, `spliced`, `shifted`, and `with` which lets you change the value given an index and a new value that for replace it. And as it is not noted here, but if we were to add them to Array.prototype, we would add them in such a way that each returns an array nautical and we actually found out that this could be useful without recording Tuple that even if tuples can do exist.

WH: I couldn't hear you. You said it returned an array, not what?

RRD: Yes. It would return an array not a tuple. Because originally those come from the Tuple that prototype so we wouldn't be copying the exact same spec text word for word to array prototype and essentially this they would be similar but wouldn't be the same so they would return an array for Array.prototype, right? Is that clear?

WH: So they would always return an array even if you use them on a Tuple?

RRD: Right now we see that there are two so that we have additional methods to to tuple dot prototype come if you just compare them to array prototype and we plan to add them back to a Array.prototype, but if you were to run popped or reversed or shifted for example on an array, we would expect you to get back an array not a tuple. Because we're not copying the method from tuple dot prototype and bringing. To read a prototype which were creating new methods. That would behave similarly.

WH: Okay, so you get back with whatever the kind of object you called them.

RRD: Yes, so in the case of arrays you would get arrays.

RRD: And yes, we found out that we could see benefits without even considering the existence of tuples in JavaScript. For example, the possibility to reverse without having to make a copy or sort without having to make a copy beforehand is actually quite useful. So it over to us that it might be a good idea so we would like to get general, you know temperature in their room here and finally and I already start to see the queue and essentially led to as the committee whether we should pursue this as a separate proposal or as part of a bigger than tuples and that's all I have for that presentation.

KG: Yeah, this seems great. I support doing it as a separate proposal. We have done things before where, if we think that these things are only useful in the context of record and tuple, which I do not to be clear, I think they're independently useful, but even if we did think that, we have done these sort of linked proposals before where we say this only advances if this other thing advances. So I think there's no problem there even if we do want to gate this on record and tuple, although again, I think it is independently useful.

RRD: Okay noted.

MM: So first of all question, which is - is the fact that (lets say) `pushed` returns either and the pushed on a tuple returns a tuple and pushed on a real returns an array, is that because of the methods are different or is that because it's based on what kind of a thing the `this` is? so to put it another way if you set Array.prototype got pushed to do not call on a tuple or rice or vice versa. What would you get?

TAB: I can answer this they would be different methods so it would probably fail because the array prototype pushed would not. Oh, well if it's a rate up ??? pushed it would probably work because array dot prototype that push working at you re like, but if we did we'd give you an array back not to do cool.

MM: Ok, good. Just to verify the array methods would generic just like the original just like the existing array methods are but they would always return an array just like the existing array methods do.

RRD:I mean, yeah that this is like this is not defined at the moment.

DE: I see Waldemar has `species` on the queue, like where `map` will call the species Constructor and then it will read the elements in one by one. So such a definition will just not work on tuples. It will just fail right out of the gate and I think as we come down to writing out the details of how something like pushed works. We might find that - I mean, I think we're pretty likely to find that if we follow the way that the other array methods are defined, it just won't work if you try to apply it to tuple. If we're taking this as something that might move faster the built-in classing removal proposal YSV is we would call species Constructor for these kinds of methods, but it wouldn't just magically work for tuples. It would only work for things that you know, and the things worked out devils are not I really like in the sense that you can't write to individual elements as the array methods tend to assume.

MM: OK thank you. That's what was very clear. To answer your question. I would advocate a separate proposal and I'll just reveal the particular motivation is I've become skeptical about whether records and tuples can advance and even if they don't, or advanced slower, I would like to see these methods on Array anyway.

RRD: All right. I don't think we have time to discuss that specific last part, but we would like to talk with you, MM, as a later point about this last frame.

SYG: Wasn’t Waldemar in the queue before me?

WH: I had a question very similar to MM’s. It was addressed.

SYG: So before I go into my topic to quickly address what DE said, I would like us to be open to the possibility that new things don't have species even if we don't remove the old ones. But we don't need to go into that here. I would like to be us to be open to that possibility. I would like to urge the records and tuples champions - I wish you luck with the names. We have had tremendous difficulty historically to add new things to array dot prototype. This is adding a lot of things to read that prototype and I understand you would like to do it for consistency with Tuple dot prototype. So while I strongly agree that this should be a separate proposal that is not sequenced before or after records and tuples if you are you if you want to do this and you want the same names, you should probably come up with a plan because it's possible that you might not get the same names between the tuple dot prototype and array dot prototype.

RRD: Yeah, it does. That's essentially why we are taking this as early as as we can because we understand that or read a prototype is more difficult to change then the new thing we're proposing with tuples.

SYG: That's all right. All right.

YSV: Yeah, it was just a plus one to SYG on both points. The web compat issue that is likely going to come up with array prototype methods. Also important to try to avoid new things with species.

JHX: Small question. It seems splice will result in an array with Deleted items. They need to call slice() first so...

RRD: the idea is to get a new array that has the items. Right, so it's very similar. Yeah as DE is saying on TCQ. It is very similar to what you would expect with tuples. And essentially this is treating arrays as if you don't want to change them when you're going to use those methods you're going to keep the original one and you're going to get a copy of a new one that has to change that you want it.

DE: So to maybe elaborate on that - `spliced` is a kind of similar situation to `popped`. These may be simpler where you know Array.prototype.pop returns the last element and gets rid of the Array and gets rid of it from the Array. Tuple.prototype.popped just returns the Array and it doesn't give you the last element. `spliced` operates similarly you I think it makes sense because you already could access the last element through other methods and for splice you already could access these things through other ways. So You know, you can query it first and then call this method to do the mutation. So it makes sense that you only get the, you know, quote unquote mutated sequence and not the and not both things I'm waiting for a response. No response. Okay, Daniel. you're next.

DRR: Just wanted to say that I think when we solve this on our team, we probably got to prefer this or I mean we like this approach because you're you're basically giving a way for existing data structures to be to take that sort of, you know, immutable approach for mutable data structures, right? So you can leverage a lot of the same techniques that you can use anyway. You just don't have to go through indirect slices or indirect helper functions. They're just both in. We definitely like to see that also lets you avoid some of the confusion of like push on one creates a new copy push another action mutates. I will also say, you know, there's this thing about reverse versus reversed which might be a little bit strange.

RRD: Yeah, it's definitely complementary approach to what we got into bullies is putting in and if we manage to make those things go here and we think it's going to be a net benefits both arrays and regards tuples. All right, if we don't have any more questions, I'm happy to leave it there your time

### Conclusion/Resolution

- New proposal suggested
- Has independent value from R&T

## Async Do update towards stage 2

Presenter: Kevin Gibbons (KG)

- [proposal](https://tc39.es/proposal-do-expressions/)
-[slides](https://docs.google.com/presentation/d/1GXk1UwhaXijT0Rcn3_I4HmVGsdxM9cpYqcRvVjdzIoA/)

KG: Okay, right. Do Expressions have been presented before I'm not going to keep giving a full summary of them every time but briefly they are just a way to use a block of statements in expression position giving you the value the completion value as would be observed by for example `eval`, as the completion the value of the blocks. Okay this do expression assigns x to temp * temp, but temp does escape this expression. Completion values are already in the spec. I'm not proposing to make any changes to them at this point.

KG: There is spec text. This has changed very slightly since I presented it. Or, rather, the screenshot here has changed very slightly since I presented it last time. An overwhelming majority of the spec text is specifying restrictions on which things you can write in a do expression, which is not in the screenshot. Those restrictions have changed slightly since last time. The first thing is when last time I said that I didn't want to allow break continue or return to cross the boundary of the do and that was mostly a sort of a style thing, a question of what code ought to be legal rather than a question of what code is possible. However when I presented it, I got some strong pushback on that restriction from WH, in particular, and I did a sort of a survey of delegates, an informal - just I wanted to know what people thought through a Google form and of the 30 or so responses I got a pretty strong majority that was in favor of allowing break continue and return to cross the boundary of the do expression. So I have made that change to the proposal. I am now proposing to allow you to use `break`, `continue` and `return` in do expressions where you are in a context where it makes sense to use these operations. With the exception that you can't use `break` or `continue` in an expression in a loop head like even if you're in a nested loop, because there is this ambiguity about what those things do and also like please don't try to write that code.

KG: The second change, this is a much smaller change, is that if you have an if without an else as the last statement in the do expression I have also made that illegal because there's this uncertainty about whether you would get the previous line, the line that comes before the if, or undefined. So now this is disallowed you have to explicitly put an else block. If you want to get undefined it can just be empty and then it very clearly gives you undefined. Right.

KG: So those are the changes. I was going to ask for stage 2 at this meeting. But YSV raised (and a couple of other delegates also pointed out) that it is not necessarily going to be obvious to readers of do-expressions what all of these things do. So for example, someone might have an intuition that `return` within a do expression would return from the do expression somehow. We can never do things that everyone will understand a hundred percent of the time, but we should try to avoid doing things which everyone will think does something other than what it says. Or at least if we end up in a situation where everyone thinks it does one thing except perhaps for the programming language nerds who think about it in a different way that's bad. So in an effort to avoid this I'm going to try to do a small, very limited scope user study where I would have a brief introduction to do expressions and then a few snippets of code and have a multiple choice for each snippet: "do you think this does this, that, the other, or possibly something else." And if it comes back that in fact there is a very strong consensus view from users that some piece of code does something other than what I am proposing for it to do here then I will change or withdraw the proposal. If there is not a strong outcome, then I will go with what we usually do–using our best judgement.

KG: Yeah, so that's where do expressions are at. That's why I'm not asking for stage two, because we're hoping to get some more feedback. I'm also not going to ask for stage 2 for async do expressions, although async do expressions have a somewhat more limited design space: in particular, it is not possible to allow `break`, `continue`, and `return` for async do expressions. However, that said, that means that async do expressions are now less similar to do expressions because you can't use this syntax, these syntactic forms within an async do expression. So it's possible that it no longer makes sense to have async do look quite so similar to. I am quite neutral on that question but if anyone has concerns talk to me. Otherwise I will go with the currently presented syntax.

JHD: I just want to make sure it is on the record. I think this proposal is very useful even without break, continue and return. Linters will likely have rules against this.

MM: I very much appreciate the idea of the user study. I don’t think that you need to block on stage 2 for this.

KG: I am also excited about advancing the proposals. I think the questions about break, return or continue are allowed is a major semantic question. In particular since there was a blocking concern to having this proposal without break, return, or continue. I don't want that question to be unsettled when this goes to stage 2, I want us to have already made up our minds for it, and since part of the point of the user study is to see if users understand that semantics, I don't want to ask for stage two before the user study. So that's my thinking.

MM: Okay. Thank you. That's all reasonable.

PFC: I'm sad that this is not going to stage 2 yet, but I think a user study is a good way to resolve this question. I think making a decision based on what programmers in the JavaScript ecosystem think about the syntax is much better than speculating ourselves, so +1.

KG: I should say, I think a pretty likely outcome of the user study is that there just aren't overwhelmingly majority opinions on things and so we will still fall back to our usual design process where we just think about it real hard and try to do what we think is best. But yes, I definitely want to check with users first.

DE: I was a little skeptical when I first heard about this waiting on a user study before stage 2 idea. But I mean, I really like the design of this study and I think it he will get at the relevant questions. If this study were asking people for example, look you can do a return in a normal do expression shouldn't you be able to do it in an async do expression and ask people to say yes, or whether they had that intuition. I mean it's easy to trick people into saying that something that's different from the semantics we can provide but it sounds like this study will focus instead on more important qualities, like if people misinterpret the return statement with the new do expression to change the value of the do expression itself, which would be pretty serious if almost everybody interpreted it that way, so I'm happy about this design and thanks for the good work you're doing.

YSV: We will be working with Felienne to make sure that the questions are well formed from a scientific perspective before sending it into the wild so we'll make sure that we're not preparing people to answer in a specific way one way or the other. Like Kevin said we might not end up with a clear yes or no answer. That's pretty common when doing these kinds of studies, but I think what Kevin said is if 50% of people or more are getting it wrong consistently, then we might want to revisit our decisions here and talk about that. That's a pretty big number. But if it's less - I came to Kevin about this and I would also feel comfortable with our previous decision if most people are getting the right intuition from it. I would be comfortable with it going forward as it is. Otherwise, we may want to adjust and think about it again. I just want to make sure we're not undermining unintentionally how users understand the code that they write by introducing this ability to use - especially `return` might be problematic. But yeah, that's it.

JRL: So I wanted to offer the counterpoint to Jordan. I agree with Waldemar here if there is no control flow, I don't see the point of this over an IIFE besides saving the four characters to create the IIFE. It just doesn't seem like there's a whole lot of point.

YSV: Just a quick response to that. We're not discussing - the discussion we've been having hasn't been “we are going to change the semantics” and the goal of the user study is not to have an argument about whether or not we should change these semantics. I think what Kevin said earlier was if it turns out that this is confusing enough for users then we need to make a change. That change might be syntax - because we have three levels of slightly different yet similar syntaxes. We've got do-while, we've got the do expression, and we've got async do. For a user working with all three, and I raise this in particular the introduction of do Expressions may make do-while a more common pattern, the difference may become significant and confusing. Do-while is not something we see so often right now because often people prefer the while loop or a for loop, but it may become more common as a result of this proposal. If that happens, refactoring between do and do while, on top of it we will have refactoring do to async do and moving from do-while to async do will be additionally different. This is what we want to check and see what's the impact here. The result might be that we change, for example, async do to being something like async followed by a block statement, and have these syntaxes be distinct. Or, we may come with a completely different answer. It depends on what comes out of the survey. I think the 50% count is a good one. It's actually very lenient and I'm very curious about what we'll find out.

WH: A lot of discussion has been about the confusion about `return` statements. I think the behavior of `return` is pretty clear, but there's a much bigger source of confusion here, which is where iteration statements are allowed or not. Let me give some examples:

```js
a = do {
  lbl: {
 while (f()) g();
 break lbl;
 44;
  }
};

a = do {
  lbl: {
 while (f()) g();
 {break lbl;}
 44;
  }
};

a = do {
  lbl: {
 while (f()) g();
 if (x) break lbl;
 44;
  }
};

a = do {
  lbl: {
 while (f())
   break lbl;
 44;
  }
};
```

WH: Out of those four examples: Which of those `while` statements are in the tail position and which ones are not?

KG: So I can answer this question, but I have a --

WH: You wrote the proposal so I know you know, but I don't think anybody else in the committee knows.

KG: I have a response to this as well.

AKI: Are we waiting for over 50 people to answer though?

WH: I'd like to give folks a chance to at least read and think about it for a moment. Anybody willing to hazard a guess?

AKI: We have a PoO from PFC and I agree. I'm not really sure this is a productive use of our time.

KG: So the point I understand Waldemar to be making is that especially with labeled breaks the question of what counts as the last statement is super confusing. That if you label a block and then you have a while loop in that block and then you have a break of that label somewhere nearby the loop, it's not super obvious or in fact in many cases it's not even remotely obvious whether this is going to be disallowed. He has these examples that like, I can look at them and tell you what they do, I think it's pretty clear which ones are allowed and or not, but it's quite possible that you even as members of the committee would not be able to look at these and say what's allowed and what's not.

KG: My response to this is I don't think it matters. Labeled statements are very much a power user thing - not labeled loops, labeled loops are a thing which comes up a reasonable amount, but for labeled blocks, like I don't write that in my own code, even though I do know what they do, because I don't expect readers to know what they do. I use them as the output of code generators, but I don't care about making this work for code generators. I can make my code generator do whatever I want. So I agree with WH that this is a confusing case. I want to put forward the argument that I don't think it matters that much because I don't think this is a thing that users will get exposed to.

DE: Yep, I want to add I don't think it's essential that everyone be able to predict all the syntax errors, you know, if you try to run the code you'll get an early error really quickly. I think the more serious class of errors is where you interpret the code will do one thing, but it does another thing. So this was something that I was commenting positively on the study design that it was not focusing on this class of predictions that WH was talking about.

WH: There's a lot of spec text to forbid these weird cases, and I'm just wondering whether it's worth it to forbid those.

KG: I heard some pretty strong sentiment that it should be disallowed, that loops in particular should be disallowed. I also feel strongly that declarations should be disallowed as the final statement. And figuring out what "final statement" means for a declaration is only very slightly easier than figuring out what it means for a loop. So I think if we have agreement that declarations should be forbidden as the final statement, we already get almost all of that complexity. And that is a restriction I am unwilling to give up.

WH: Yeah, you want to prohibit those even in these weird cases?

KG: Yes.

WH: Because you're hoping to change the semantics of how declarations work, or some other reason?

KG: Mostly that, yes.

WH: OK. Yeah, that makes sense.

AKI: We're at time. You have 20 minutes later but we'll have to come back to it later.

KG: I personally don't think that we should spend more time on this topic at this meeting because I'm not trying to advance it at this meeting. If the people on the queue really want to get their points, then talk to the chairs and we can try to find more time at this meeting. But otherwise I yield my 20 minutes.

### Conclusion/Resolution

- Not asking for advancement; Kevin to proceed with study design

## Top-level await status update

Presenter: Yulia Startsev (YSV)

- [proposal](https://github.com/tc39/proposal-top-level-await)

Displaying PR https://github.com/tc39/proposal-top-level-await/pull/161

YSV: Hi everyone. This is an update for top-level await, which I'm hoping to get to stage 4 in the next meeting. We have been working pretty hard on getting through the remaining issues. In particular Guy Bedford has been a hero in responding to some of the bigger issues. The first one that I want to bring up is a bug fix which will describe very quickly. It was reported by Sokra (Tobias Koppers) who is working on webpack. They noticed that with the current spec of top-level the invariant that the children in a module graph complete before the parent completes has been broken. The behavior that they noticed it's detailed here (shows issue). What you would expect is to go through the children of the tree in the correct order. So you would first have `a` run which is importing a module which has an async node. The async node runs because it's the second in the order. It has a top level await, so it should wait and then the next resolving module should print C1 followed by X and the result is as follows. This isn't only in V8, but is due to a spec bug. Guy fixed it in the spec and the contents of the change have been merged. So you'll see this if you open the proposal now, we have a new field, which is the cycle-root. It holds a cyclic module record, and we've made a few changes. So instead of calling getAsyncCycleroot. We just access this root as a field. So there's that. I just want to check are there any concerns about this?

(silence)

YSV: Okay, so this has been merged, it is a normative change and a bug that needs to be fixed regardless of the next item. There is a second change which comes out of the same issue specifically and this was the issue first noticed by Sokra, which is that the existence of top level await results in a slightly surprising product in terms of the order of modules that complete at what time. Before the TLA spec, given a set of modules where you have a tree like this indexes (shows issue) importing it three children `a`, `b` and `x`. `A` is importing `async`, `b` is importing `async`, `X` is importing `a` which imports `async`. Our expectation is that an import `async` finishes first followed by an async followed by this line.

YSV: What happens instead is that we end up swapping `X` and `B` because `B` needs to evaluate - `X` has this set of children and it just evaluates first. That's a little bit surprising and in particular if this last module that is shared, this leaf module that's shared by all three of these, is not async, then the order will be like this. So it can be argued that this is an oversight. It doesn't change the behavior of module loading that we agreed to, which is the promise dot all semantics, but it is a much more significant change than the cycle-root update which was a bug fix that we saw earlier.

YSV: (showing spec change) Here is the change and I think the most significant of the best way to look at this is down in - async module fulfilled is a good place to start reading this. We've removed some of the work that's happening in the async module execution fulfilled and moved it into another function, namely it is called gather async parent completions. We also have an execution list. The execution list consists of which parents are ready to complete. The other important point here is we then sort the list of parents according to their post order. This is detailed in the spec text in particular: "Note the order in which modules transition to async evaluating is significant". Additionally, the other change here is that non async modules which have async children are now also included in the async evaluating set, so they also have their async evaluating Flag set to true. So that's another change. The bulk of the work that happens here happens in the gather async parents completion parent completion method. And yes, that is it. This is a much more substantial change to the spec than the other one, but it is an important one because it would adhere more closely to user expectations. That's all I've got to share.

YSV: I'm asking for the committee's feedback on this normative change because if we get consensus on this, I will merge.

SYG:The first fix that Yulia presented since it was As explained to me that it seemed like an obvious spec bug. I implemented it and shipped it in Chrome 89 along with TLA. So that is actually back merged into 89. So that is in the wild behavior now. This change you only asking for consensus on I would like to amend her request and request that we actually get consensus or lack of consensus not just feedback, because TLA has been stage 3 for a long time and it was shipped in Chrome 89 and which is stable now, so I think to change a significant timing like this - well, I don't know what to say significant, to change timing like this with a shipped implementation. I think we have at most one release cycle, which is six weeks. So I think we recently hastened that but maybe not yet. So because it is shipped. I want to be clear that I'm pretty neutral on the on the on the fix, like I completely agree that the proposed change does better aligned with user expectations, but I will be pretty conservative in that I'm willing to try to get this shipped for one release cycle if there's any bug reports then I would strongly push for sticking with the current behavior. So that's all. I would like to urge the committee, for those of you who care about top-level await, please read this and please come to, or not come to, consensus at this meeting. That's all for me. Okay. Thank you.

AKI: The queue is empty.

YSV: I don't don't want to use silence here. I want to make sure that we have an explicit yes or an explicit no to this proposal. Do people need more time to read this in depth in order to do that?

AKI: Hang on just one take we just have two more things. We added to the queue.

DE: I have to say, I've had a lot of trouble trying to understand. This is PR. I haven't managed to understand it yet. And so I can't I can't say whether I can't affirmatively give consensus to it, but I also don't want to block it. I want to respond also to SYG's comment about Chrome releases. I think this kind of change is pretty unlikely to be a compatibility issue if nothing else because very few people are using ES modules in production and very few of them are going to start using top-level awaitaway. So I think I hope that the theoretical compatibility issue doesn't doesn't block us from considering changes if we have good reasons to make these changes. I still don't understand those reasons. Unfortunately, I tried review this before the meeting and I just wasn't able to follow the presentation today. So, thanks.

SYG: I don't even really disagree that due to a relative lack of uptake of native esm deployment on the web. It's probably not a compat issue. I don't want this to drag on. Among other things, part of it is for the release thing, part of it is that I want us to very strongly adhere to the norm that we do not change semantics after stage 3 if we can help it, even if we think we made the wrong choice.

DE: So just respond to that. I think I see it as we need consensus on a change after stage 3. So I do want us to close on this issue promptly like this meeting or next meeting at the latest. I think we're always open to changes, like we make normative changes to things that are in the main specification such as your proposal to remove subclassing built-ins, and we could think of a change like this as such a normative change even though this proposal is stable in some sense.

KM: I think the thing I'm going to talk about is somewhat of a bug fix that is independent of the if we don't take this change because it doesn't work. We should probably figure out something to do with the bug fixes. I think incidentally happens here, but I could also misread the aspect. It's very hard to read, not necessarily the fault of the people right inspectors because it's complicated, just generally sure. Okay.

GB: Yeah, I just thought if I can help and try and clarify some of the intuition around the scenario. It's worth just reading Tobias's original comment if anyone wants to dig into this and that's the time the case is explained really nicely and it is quite clear going through it the intuition around how this execution changes adding one a Leaf to the graph and how then it differs from how modules execute without TLA and I think that's like a really important principle is that we maintain the existing invariants that we have and it does seem to me like process working that Tobias was able to spot this case and report it and we were able to come up with a solution. In terms of why it happens, effectively the async nodes on the graph run callbacks up to their parents when they're ready to execute and we only do this for the async nodes and the change is basically to, instead of actually calling those callbacks, which if you just call the callbacks in the order that they were registered you're in call back order or the order the callback were registered when you really want to be in the post order execution of the original graph execution order so that the change is just to read up through those whether it's callbacks would have been and then just sort the execution list in order. So you execute the next few nodes in the original execution order that was determined by the original algorithm. And I do feel quite strongly personally as well that this would be a great Improvement to intuition.

YSV: I also just quickly mention that if anyone has trouble like reading the spec text and it's easier for you to read C++. I have a sketch implementation which works. It's not complete, but you would see how it changes an existing code base to implement this feature. You can find that, if you're looking for that you can find it in the conversation just search for sketch implementation.

DE: Given Guy's explanation this makes a lot of sense and I think I will try to review the spec text during this meeting to give a more affirmative consensus and I expect this will be something that I'll support. I just want to do another review.

YSV: Okay, then can I ask the chairs for five minutes sometime tomorrow?

AKI: Absolutely, so everybody with a horse in this race. Please make sure to review this and be ready to either give you feedback before tomorrow or give consensus tomorrow.

SYG: So can I interject real quick? So there's 2 PRs here. There's the one that's already been merged which I think we should, if nothing more than a formality, we should retroactively get consensus on. Then there's the unmerged one which is the most controversial one. And then this one - do folks feel like they need additional time to review both to come back tomorrow, or can we get the bug fix one out of the way, right?

DE: I think the bug fix one deserves consensus. I affirmatively supported consensus. it's just if you look at it, there's no way that could have been what was meant.

YSV: Additionally. It was breaking an important invariant. Without this change we do not execute the spec fully so it's definitely a bug fix. Okay, so I think we can call consensus on that one. And then will further discuss the other one for five minutes tomorrow.

YSV: Please take a look if you have any questions. I'm very happy to clarify anything or you through the spec. It is hard to read. I did need to implement it to fully understand it myself. So please get in touch.

## ECMA Recognition Awards

### Conclusion/Resolution

Consensus on 3 nominations

## Module Fragments (For Stage 1)

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/littledan/proposal-module-fragments)

[Displaying Slides](https://docs.google.com/presentation/d/1ndOzG8VcwBIENxBeEfUkJFZLIBxix8RdxT8ReUuCPWE/edit#slide=id.p)

DE: So I want to propose module fragments or a notion of inline modules in JavaScript, which is a little different from module blocks. This is in partnership with eye/o, the makers of adblock plus, as part of a broader effort to ensure that bundling is friendly to content blocking. So my hope with these bundling efforts is to ensure that we can load es modules natively and efficiently. So when I say natively I mean it should be that the underlying JavaScript engine gets the ES module rather than having to transpile all ES modules down to code that doesn't use multiple modules. Many people ask, will module blocks solve this problem? It feels like module blocks should help because they have a module, you could have multiple of them in a file, but they don't work because module blocks can't import each other. The problem is that each one runs in - each one is just a JavaScript value and the JavaScript values run in a particular scope, but the module blocks don't necessarily share scopes.

DE: So you really want something that's more declarative. You want something where the module is declared in the module map and then it can be imported from a static import statement. You don't want to have to use dynamic import just because you're bundling. Otherwise the extra micro tasks turns promise calculations will just be this silly extra cost.

DE: So in November 2020, I gave a presentation on some more general notions of bundling. I think there's a strong case to be made that it's worth it to have in the web platform and in other platforms a general-purpose bundling system that can bundle together resources of different types, for example including webassembly, including JSON, including css or images or fonts, these are these are all useful to bundle. However, there's a bit of a difference in the order of magnitude involved. In a typical web application you may have hundreds of individual resources that are not JavaScript but tens of thousands that are JavaScript if you're talking about the source modules before any build steps run. So, you know, that's just too many JS modules. We could imagine making general resource loading faster enough that it scales to hundreds of chunks, but it's pretty hard to imagine reaching a hundred thousand resources. Based on discussions with different browser maintainers, I'm pretty skeptical. so I think we actually want to have this virtualization, this bundling, at two different levels. We want to have it on hand at the network level with resource bundles and on the other hand at the JavaScript-only level with multiple fragments to handle this lighter weight, general semantics but more explosion of the number of resources. This is a performance-based argument. I think it's important that we validate the such a performance argument in actual prototype implementations because it would be nice if we only had to have one level of bundling, but my current understanding is we probably want two.

DE: so I mentioned that this work is sponsored by eye/o from ad block plus. This is relevant for content blocking: one of the sources of overhead if you're trying to load ten thousand logical assets is invoking the content blocker. These days content blocking is generally based on URL filtering. There are lots of techniques involved, I'm not an expert in this area, but one of the critical technologies is filtering on urls. And there are many patterns to filter for - this isn't a trade secret or anything, there's a project called easy list that has many different filters that are maintained by the community and then different content blockers have their own changes they make on top of that, so if we had to apply these filters It's for each of 100,000 JS modules. That would just be too much. I mean other things that browsers do would also be too much but even if those could be optimized away, it's hard to imagine how it would work with content blocking. So this is another reason why it makes sense to batch things, why it makes sense to expect hundreds of network level resources while we have tens of thousands of JavaScript modules.

DE: So in terms of this chart that I showed in November. There's this particular yellow square of per resource overhead where resource bundles are yellow, you know, JS has multiple fragments can save more of this per resource overhead and more closely approximate what bundling today does, where as resource bundles will still maintain a lot of that overhead for the HD present for the network level processing such as running these content filters.

DE: a separate use case for module fragments besides bundling is for testing and this is an idea from James Kyle. I'm taking artistic liberty with his idea because he was proposing this for module blocks but in a way that would be dependent on a build system, doing something with a module block that you put a magic comment before. Anyway, I think this example makes a lot of sense with module fragments because you put module in line. In your source file, give it a fixed name that the test system knows about and then the test system can import that fragment. And run it when it or use the exports. And it could be tree shaken because tree shaker would be able to see that nobody's importing that in production.

DE: So I mentioned that module blocks don't work as module fragments. You could ask the converse question. Do module fragments assume multiple blocks? I think they don't. It's a little bit specific to deploy module fragments the way that I'm imagining they would be available as something that you could put in the top level of a JavaScript file. That's that in ecmascript module. So Sometimes you can deploy them, but sometimes it's a barrier. So it's important that module blocks can help web workers or things constructs like that possibly realms one day where we really have a lot of different contexts where you want to deploy workers. It could be in scripts. They could be in modules that are inline whereas module fragments only work with out line modules. It could be inside of eval or deeply nested functions. So I think this particular conception of module fragments would be too restrictive to work as module blocks, but nevertheless many many people have the intuition of a should be Unified. And I think we should keep thinking about this problem and if we can find a unified solution for both the motivation for module blocks and for module fragments. We've had some interesting ideas here that it is worth looking into more but there's still more things to think about.

DE: So why hash? Well, my goal is to make it to write hash everywhere when you're writing JavaScript. It's just my favorite key, and I think you should use it for private for records and tuples and for module fragments.

DE: No, that's a joke. I think it's just a natural thing to use because it's there in url fragments. It's part of the URL and it gives a very natural name, an absolute name for this module and source code so that can be used as a key in the module map. It can be used as an import meta URL. It can be used when you're importing that module fragment for a different file. I think if we didn't appeal to an element of URLs, in a world where module specifiers aside from module blocks, it's a bit difficult to imagine how this all fits together.

DE: For an example of importing a module fragment from another file, I think the readme right now has one construct for exported and non exported fragments. They all exploded. but the idea here is that people we've given feedback on this so far have said well, there should be a way that you can have module fragments that are not exported that are local to the file. And that makes sense to me. So we could imagine having an export keyword which is optional and only if something is exported then you're able to go and import it from a different file and import it using this absolute URL. Where as local Imports use this relative URL.

DE: So, you know people have raised concerns about hash it overlaps with both. You could use it on the web already and have import maps remap things in node.js they've built on that with these local hash-based Imports. I think these could fit together. Okay, because we could say well, you know if the module fragment doesn't exist, then it falls back to that other thing or if they conflict then it's an error, or something like that. But it's too messy to have multiple concepts. overloading on the same symptoms and again, Gus had an interesting idea and I think we should consider this all very early and very changeable.

DE: So a big part of this is about the semantics of modules. The semantics of modules are declared largely in hosts. So I care about HTML and a lot of some environments try to be analogous to HTML, some don't, but I don't know as much about the second category. So I think for HTML integration we would say that all of these module fragments are inserted into the module map. Surely when the modules first that doesn't mean that it will eagerly fix their dependencies. [tech issues]

DE: I think the import meta URL should be the URL of the enclosing module then hash from the fragment. That's the whole point of using fragments and it talked about the shadowing semantics would probably want it really are if you use a duplicate name that could be defined process environment or host-specific don't have a strong opinion. So this isn't a new idea. Inline modules have been discussed in the es6 cycle before even I joined the committee. I don't know if people talked about the idea of using fragments before but that might not be a good idea. Anyway, that's not really the core of it. The core is that we should have a concept of inline modules with really statically specified names that can have static Imports applied to them. And I think they're complimentary to Resource bundles that can virtualize Network level resources just because there's this two order of magnitude difference in the scale and there's a huge - you could think of it as a two order of magnitude difference in the breadth of the semantics, the network of the web platform is quite broad and module loading is quite narrow compared to that. So I think they're pretty complimentary. I want to ask the committee: should we add module fragments to JavaScript? I want to propose that when I'm asking for stage 1 I'm really asking about inline modules that are somehow in the module map and I'm not asking for committee buy in on the details of this. I also want to ask if anyone wants to work with me on the proposal, I would be very happy to have co-champions involved. So please get in touch with me offline. Questions?

MM: I want to verify first that module fragments only create initialized linked module instances. Unlike module blocks, of module fragments do not lead to any notion of a static unlinked uninitialized module record that can be multiple initialized in (?), is that correct?

DE: Well You know, there's no way to get it a first-class uninitialized unlinked module record. I want to be careful when you talk about these things are always linked. So when you parse a module that has several module fragments in it. I don't think we should eagerly import and link each one of those modules fragments that it contains. I think you may want to later dynamically import some of those which will then fetch those dependencies and lead them to be linked. So in HTML semantics, the module map can represent modules that are fetched and linked but not yet have their dependencies fetched and linked and I think that's the thing that makes sense across environments, at least for environments that dynamically fetch JavaScript modules, which is not all environments. I think that's what I think that's kind of the natural semantics for dynamic fetch these module environments.

MM: Can the module fragments occur (let's say) within a function and get evaluated and if so, do they result in multiple modules?

DE: In this, within a particular realm a particular syntactic module fragment only has one instance. However at a high level you can still use this for things like importing a module from the worker where you're sending it as a string that represents this absolute URL with the fragment and I imagine that would work within certain variants of the realm API that we've been discussing also. So at some high level since just like all modules they have this multiple instantiation quality.

MM: Okay. So for us I want to say I am tremendously supportive of this for stage 1 and certainly want to be involved and I'm willing to be co-champion.

DE: Thank you.

BFS: I think it's fine to move forward with this, but I'm very skeptical of using the exact same specifier spaces as out of band modules. I understand the nicety of using familiar syntax, but the fall through is not just a convenience thing: it could also mean you can't fall through if there's somebody depending upon a specific name and suddenly you need to rely on an outer name that's shadowed, stuff. Like that just makes me think using the same specifier space might not actually work out when you're in stage 2. That's all.

DE: Yeah, I was unaware of node's use of this space when I was designing the syntax and writing up this proposal. So I didn't think that there was non-trivial overlap. Now that I know that there is this non-trivial overlap. I definitely agree that that's worth reconsidering. That's why I've used so much weasel wording in the presentation. I want to mention that you know many other people have suggested -- why not just overlap on the whole module specifier space where you say. Well you could have a module but then in the string you put this path just a normal path and I think that would compound the problem that BFS is raising even more. You could have ordering dependent effects with loading where you haven't loaded something yet. You don't notice there's a conflict yet. But then later a dynamic import shows that a conflict comes up. It could really be (?) at this. So I'm quite sympathetic with Bradley's concern.

SYG: You had that one slide where you had the yellow square for the bundling. I don't really know much about the performance of that space and I think it would be an easier sell internally, at Chrome certainly, if you were able to present some kind of performance numbers for where exactly bundling falls short to solve this exact problem. Is that possible to get numbers?

DE: So, sure, we could collect these numbers today with the you know in the context of the origin trial that just launched of bundles implemented by the Chrome team. That's actually the same team that was expressing lots of skepticism when I had a call with them like a week ago week ago about how (?) could perform the web team is also raised this concern and I believe that in both cases these concerns were based on benchmarks that those engineers had done it was it was real scary a from the from the web caching who had looked into this previously, I feel pretty confident in the like yellowness of this circle.

SYG: To clarify the engineers were skeptical about how the bundling would perform?

DE: Yeah, they were skeptical about how much you could optimize way with bundling because there are just many different things that happen in each request. And we can optimize it somewhat, and we should optimize it somewhat, and that will give lots of real gains in connection with general-purpose resource bundles. But it's one thing to have that and it's another thing to scale up to every single JavaScript source module.

KM: This is kind of a similar thing to what SYG was just talking about here where I think part of the problem, at least on our end, is that just generally because resources are cached in a different process from the actual file, there's all kinds of overheads there. So they would have to be separated probably in the networking process rather than the web content process itself. Part of the concern that's going to be the kind of overhead there. I don't know like I think it's possible in like the super long term if would it would be doable but to make it like just as good with a resource bundle as an inline thing, but my understanding from talking to people on that side of webkit, that's something that will not happen anytime soon. And so like if didn't happen anytime soon, and people will potentially continue to what they do today because it ends up being better than that, until it actually works super well, so like this is a better - It's a good short-term solution. That has pretty reasonable semantics. I guess it makes sense.

SYG : Yeah, that's good data to know. I don't really know. Like I said the performance of the current space So if the Tokyo team from chrome and apple feels this way, there's certainly a lot of weight behind that.

DE: Yeah, the thing is like it's it's pretty hard to Benchmark against potential future optimizations. Like everything could be batched maybe eventually but each kind of thing that you're trying to batch away, the overhead internally is a whole bunch of work and to really make sure it's valid, because these things have security implications with the process architecture. So I mean and it comes up in Chrome just as much as in webkit, just kind of differently.

SYG: I don't want to hold up the queue if there's other questions, but I have some more questions in this space.

KM: You're the only person on the queue.

SYG: so then Is part of the hope here that the bundlers that are currently not omitting ES modules would emit module fragments. Is that a pretty is that like a cornerstone of The Proposal that we that this be able to slot in? So people ship ESMs to the web or to other locations natively via this?

DE: Right, that's exactly the kind of idea. The idea more broadly. Is that resource bundles and module fragments would be used together in a complementary way where you would use a resource bundle. It contains each of the kind of chunks that a bundler would output and then inside those chunks, they would have module fragments. An issue right now that the Chrome team has done some pretty extensive research into is that currently bundlers have to admit fewer chunks in order to avoid excessive networking costs. And so module fragments could make it so that a higher number of chunks could be used which would have more optimal caching behavior and more optimal, you know, not loading things that you don't need behavior and then within that module fragments would make it to the bundlers don't have to emulate ESM semantics, so there's some optimizations like hoisting that scope wasting that we're bundlers today tried to not create quite as many nested functions for all the different modules, but these optimizations become quite complicated and are difficult to combine with things like top-level await and difficult to combine with things like reducing the number of chunks to avoid too many networks fetches. So the idea is to kind incrementally untangle the different things that bundlers have to do. There are other things that these two proposals probably wouldn't solve but I think we could incrementally find practical things to layer in to make everyone's lives easier over time. And we've been talking about this in the tooling outreach call and also in some smaller calls with particular tools. If anyone wants to talk more about this one-on-one or in a small group, please let me know.

KM: I think I have a strong opinion than Dan which is if we don't think that bundlers are going to use this and we don't have like strong feedback from at least one, Preferably many,. I don't know if there's actually many, but that they're going to use this then we potentially just should we should make sure they're going to use it before we ship it because it feels like we should not repeat the mistakes that we did with modules.

DE: That's what I've been trying to do. Parcel has been extremely positive about this and others have been somewhat positive but not to the point where I feel comfortable name dropping them.

SYG: Yeah, that'll make sense to me. Thanks for the explanation. I do think that. Yeah, given all of that I think I'm completely in support of stage 1 I do share the same concerns as Bradley about reusing URL fragment in space here. But yeah, you can figure that out later. Just want to make sure everything works together in the ecosystem.

DE: Does anybody want to support stage 1 or or oppose it?

MM:I strongly support stage 1.

Others: I support.

DE: Please let me know offline if you want to be a co-champion.

MM: I would like to be a co-champion.

### Conclusion/Resolution

- Stage 1

## Collection normalization methods

Presenter: (BFS)

- [proposal](https://github.com/tc39/proposal-collection-normalization)

BFS: So we first presented this a few times. It's been a long while since we've presented it last. For those of you who might be unfamiliar with it. The idea basically for collection. that is map set WeakMap WeakSetweeks that in JavaScript the ability to intercept data as it's coming in to be stored, before it is stored and normalizing it or preventing it from being stored by throwing an error, etc. so there's some history. The last few times we've presented this. We basically got stuck on how sets need to work in the presence of map. There is a desire to have a reusable normalization system between map and set. We've had multiple presentations on it and I really haven't gotten any feedback even with some pings to people who are involved. It doesn't look like we can figure out a way to make sets work with maps trivially there's some argument there, but that's kind of the point of why we're having this talk right now. I would like to propose we actually split this proposal a third time. So it used to be a bigger proposal and got trimmed down to this. I think we need to take set out just so we can get some usable normalization feature at least in Map. You may agree or disagree with this as an individual, but you can use a map to get similar effects as using a Set. The whole problem with all of these things and probably what might fill the queue is arguments about what a map is, what a set is, why we can't have a map act like a set or why a set must be supported if a map is supported. And these are kind of the core reasons why it can't advance, because people can't agree on things here. Nobody in the past has really argued that we shouldn't support Set but everybody's argued about how we support Set if Map exists. Nobody's really arguing about how to support Map. So I think we could try to split this and at least support Map on its own, Map and WeakMap. and that's what I plan on doing as long as people think it's okay to do so, and doing that might lead to some other stuff around focusing on making sure a Map actually does behave more similar to a Set in some workflows, which might lead towards a clearer understanding of what Set should do. So a good example of this is I post polls on social media every so often about this proposal. One of the recent responses were that a Set is a Map where the key maps to the same value, which at least in this proposal's current form you can't do that, and then unfortunately, we also had an opinion, that a map is a set with an identity based upon the first entry of a pair of values. So there's no real clear thing here. Those were both by TC39 members. So I don't think we have a clear understanding of the relationship of Map and Set, but I think if we split this proposal we could at least try to better understand how to use a Map for the purposes of a Set. Like I said, one of the particular interpretations of how a Map should act like a Set and a Set should act like a Map is not possible with the current proposal and that's partially because of this clear split around reusability on these data points. Having Map clearly do something different than a Set in order to act like a Set could for example mean that they're not reusable. So I'm just looking for, like, if we do this, could we still move forward to stage 3? This is not the exact semantics that got us to Stage 2 and so are people okay with us, you know putting Set off to a future proposal? Please avoid bike shedding. We've put it on GitHub, responses on GitHub have been very difficult because people have not been going to GitHub. Please don't bike shed here.

MM: I heard your entire presentation and I don't get it. I don't get what the difficulty is of including Sets in the proposal. It's just Sets would have one coercer rather than two coercers. And the only issue that I can see that's causing the bike shedding confusion is what the coercer should be named. Is that problem?

BFS: It's not just that the coercer is named. It's also that if you do have some sort of naming to the coercer, it implies some it is being renamed for reusability purposes and doing so for reusability purposes is a little difficult. You have two data points in a map and one data point in a set. There was a demand that we not use value to identify the items contained within a set and also a demand that we do use values for the items contained in a Set. So those don't work together. There was a separate proposal that, what if we allow either/or but not both, but in that case the argument was that then you can't reuse the normalizer from a map which could contain both.

MM: so my overall reaction to this controversy is I would rather settle on a resolution of this naming issue that I might not think is ideal rather than split those set off of this proposal. I think this proposal really needs to go forward with both set and mapped together. I would be perfectly happy with regard to the particular issue. I would be perfectly happy with map being coercedKey and coerceValue and set being coerceElement.

BFS: we did have that a couple presentations back, but there was a demand that it be key at the time. We could revisit if coerceElement would be acceptable after this duration of trying to get another name.

MM: So like I said, I would rather have a resolution of the particular naming thing that I might not think is ideal rather than splitting set of this proposal.

BFS: Sure.

WH: I also don't see what's difficult about this. Both Set and Map have the notion of the address of the element you're accessing, and a Map additionally has the notion of a payload on the element you're accessing which a Set does not. So all I want is a consistent name for the address between Maps and Sets and I don't see what's so difficult about that.

BFS: We gave a presentation almost entirely auditing other languages about this and there is not a consistent -

WH: Don't bring other languages into this.

BFS: I do not agree with your assessment on the address thing even for JavaScript.

WH: You're adding constraints about other languages that make this an unsolvable problem.

BFS: that is not my intent, but I do believe that our constraints are mutually unable to resolve. Yes.

WH: Yeah, so if that's the case then this should not advance.

BFS: Mark suggested, perhaps we could use a different name, and you're saying they must be the same name.

WH: That is my only constraint. The name of the address should be the same across Set and Map. I don't care what it's called as long as it's the same.

BFS: Yes, then it is unresolvable, which is why I would like to split this.

WH: I find the notion that this is unresolvable to be unreasonable.

BFS: It's a demand more than a constraint. There's no there's no design space to work with them.

WH: Sure there is.

BFS: What is the design space? He must be used for Map and Set must use the same.

WH: I don't care what it is called, but you should be able to use the same name for the address part of a Map and a Set.

BFS: We don't agree upon them being an address which is why I'm saying there's no design space.

WH: It's not something one needs to agree on, it's just a fact.

BFS: it is not a fact to even the spec text uses, you know, essentially know, essentially a list.

WH: It’s a fact that the address is what you use to look up the slot you’re accessing, while the payload is what’s in the slot. The structure compares, hashes, or sorts (if it’s an ordered collection) elements’ addresses against other elements’ addresses, while payloads are arbitrary.

BFS: I mean we can continue to argue this but I do not think this is resolvable or agreed upon.

WH: I just find this position unreasonable.

BFS: I believe both of us, do.

BFS: Maybe we can continue the queue.

AKI: Yes. Let's YSV. You're up next.

YSV: So I'm trying to understand WH's objection a little bit better. Beyond the formal considerations, do you have a concrete use case in which the key of a map must be treated the same way as an element in the set and that you would want to apply the exact same coercion across the two of them rather than using the same transformation that you would apply to the element of a set to the value of a map?

WH: It's for writing generic code. If you're transforming the key or where something is stored you should be able to use the same generic code transparently across maps and sets. That's essentially the reason.

YSV: the reason that I'm asking is that this operating on the key of a map in the same way as an element in a set isn’t something I have seen commonly in JavaScript code. My understanding is that the convention in JavaScript is apply the same coercion to the element of the set and to the payload of a map rather than to the key of the map.

WH: It makes no sense to do the generic things across the values of the payload of the map and the key.

YSV: Right, but to look at this another way, what do JavaScript developers do?

WH: This a general programming question, not specifically JavaScript. The address is something you hash and compare against other elements to find the slot in a collection. In an ordered collection, the address is something unique and compared against other elements to sort them. The payload is something which is not compared against other elements. Maps have both an address and the payload. Sets only have an address.

YSV: I would say that I'm much more convinced by what programmers do rather than by the generics because JS may have specific patterns engrained. But I could be convinced if we could have some concrete examples from the JavaScript ecosystem where people are doing this kind of transformation. I think this is more important for when we're designing for JavaScript rather than what the generic would be.

WH: This feature does not exist in the language, so it is going to be hard to come up with examples.

BFS: So we do have some examples in other specifications like the DOM where they are normalizing and coercing both value and key for various things.

JHD: My next queue item is sort of about this. So in the same way that arrays are kind of stacks and kind of lists and the methods on them do not represent a single mental model, I feel like that's kind of what is happening here. In Waldemar's mental model, Set has keys but in my mental model a Set is a list of values. And we've had this debate the last time this presentation came up. You could look at the spec's wording, which says that they're values but that's an arbitrary editorial thing, so that doesn't have to dictate it. You could do what YSV is suggesting and look at what JavaScript developers commonly do. I think they generally do not write this kind of generic code. [...] I can see the usefulness of wanting to make an options bag object that has only a “key” coercer, or only a “value” coercer, and just throw it into a collection, whether it’s a Map or a Set, and have it work. I do not see any use cases for saying I want to use a combination of a key and a value coercer and throw it at multiple collection types. So after the last presentation, the compromise that I discussed with Waldemar was essentially that that Map would take value or key or both or neither, and Set would take key or value or neither, but would throw if you gave it both, and that would then satisfy and all of the key mental models and use cases and the only thing it would throw on for Sets is the nonsense combination of the key and the value coercer. I was going to ask Bradley for elaboration on why that’s not acceptable, which is my my other topic on the queue, so we can defer that since there’s some more questions on the queue. I feel like there is a path forward which is the compromise I just outlined.

SYG: First as a comment. This debate is wild to me. That aside, have you considered as champion sidestepping naming issue at all by providing a single coerce function that is variadic and just use positions. That is exactly aligned with the position of the parameter passed to the mutation function like whether it's cetera ad. so that you co are so if mapped out set is key value, then the first thing would be you know, you would coerce an array, you would return an array, where it would correspond to the position thing: hen it's no longer a question of what your mental model of the collection is, but more just look at the signature of the function, what number was the position to come in, and then do that. Was that considered and rejected?

BFS: So this proposal has been split a few. arms, I know we had that at some point on one of the branches of this split. I don't know if it's in this repo. We could go back to that. That was a long time ago before we got to this impasse.

SYG: Incidentally it would agree with what Waldemar is saying because for Set whose mutation function to like add a thing to the collection is a single takes a single parameter. I think to end to answer JHD’s question on IRC, if you passed it more parameters than the number of parameters that the collections mutation function takes it would ignore the rest. So for a set it would always just look at the first one, but this is not like there's no names right? It's just like just like you coerced the first argument.

BFS: Sure. That seems fairly agreeable.

KM: So if you only have one argument, you still have to return an array?

SYG: Yeah, that's true.

KM: That's going to be a common bug you feel like just get an exception or something. Are you like try to look up index zero on whatever you return?

SYG: I would imagine you'd looks up index 0 but yeah, that's not great.

KM: If we had the like tuples thing but in used to allocate for that, it's too bad. There's not like multiple return values in this and in your JavaScript now separate us. Iterators have the same problem.

KM: I'm OK taking Jordan's thing. Maybe we should allow both key and value if they're the same function or something else, but that's kind of weird so I don't really care about their okay.

DRO: Personally I kind of feel like the cat's out of the bag a little bit given that there is already a difference in the way that you add things to maps and sets but I don't really have a preference one way or the other this just something that comment.

BFS: Do we have any similar concerns with Jordan's proposal? of allowing exclusive or for sets. I'll give people a second to think about it.

WH: I’m OK with Jordan’s proposal.

YSV: I'm not against it and I'm a little worried about how it might be understood by novices, as this kind of error would be confusing. ie) “Why is it throwing in one case but not in another when, I have done the exact same thing” for a programmer learning a new, large, complex codebase this may be an issue, even for advanced developers. But I have some other questions about this proposal, which I'm going to clarify with BFS later. If this is a compromise where we don’t hurt learners of the language then I think it's a good one.

BFS: I think I'm the only one with serious reservations about it. So I should just skip my reservations and try to pursue that from the sounds of things. So we're going to try JHD’s proposal at a future meeting.

## Temporal for Stage 3

Presenter: Philip Chimento (PFC), Igalia

- [proposal](https://github.com/tc39/proposal-temporal/)
- [slides](https://ptomato.github.io/temporal-slides-in-progress/)

PFC: This agenda item is about Temporal. My name is Philip Chimento. I work at Igalia. This is work done in partnership with Bloomberg, and I'm also happy to present this on behalf of the group of, I think, now nine or ten Temporal champions. So let's get started.

PFC: Here's an overview of what I'll be talking about during this presentation. There will be a short recap for people who have not seen earlier presentations, about what Temporal is and what it does; a summary of the changes that we've made in response to delegate reviews; and a summary of what is still open. There will be time reserved for discussion, and then at the end we plan to ask for advancement to Stage 3.

PFC: But first just to address any questions about the time box and questions were raised about that. As I said, we are planning to ask for a stage advancement at the end of the presentation. During the last two weeks or so, we noticed delegates starting to get into more details of the proposal during the reviews. The editors recommended us to reserve plenty of time so that if people had concerns about details during this plenary, we wouldn't end up at the end of the plenary without having time to address all of the concerns and get to the stage advancement. I'm hoping that we won't have to use the whole time box.

PFC: So the recap: various Temporal champions have presented it at several of the meetings before this one, but I'm sure there must be some new delegates this time. So here's a short recap. The purpose of Temporal is to be a modern replacement for the much maligned Date object in JavaScript, while incorporating lessons learned from other popular date libraries such as Moment. In fact the proposal I believe was first championed by maintainers from Moment. This group of champions is one of the largest ones for any TC39 proposal certainly in the year that I've been a delegate, and it includes invited experts, delegates from Bloomberg, Google, Microsoft, Igalia where I work, and I think the large number of champions is probably fitting since the proposal is also one of the largest of proposals that I have been aware of in the year that I've been a delegate.

PFC: Since the proposal is so large, we're also including more supporting materials than most proposals have done. We've got programmer level documentation and in particular, the focus for most of the past year has been on that and on feedback from the community of JavaScript developers, and you can see that reflected in the materials that we have, that I've listed on this slide. There's API documentation in the style of MDN, there's a Temporal cookbook with recipes for "I want to do X. How do I do it with Temporal?” There's a polyfill and there's a playground where people can casually try out Temporal. The reason for this slide is to refresh your memory since last time and give an overview with quick links to where everything lives. You can click through these links if you go to the agenda and open up the web page where the slides are published.

PFC: If you were here at the last meeting, you might remember that we announced that the champions group is finished making decisions and we asked for reviews. So the next few slides will be a summary of changes and of the delegate reviews.

PFC: The major change that we made in response to delegate reviews was the removal of observable calls to `Temporal.Calendar.from()` and `Temporal.TimeZone.from()`. We had a meeting specifically about this where we invited a bunch of delegates. Thanks to everyone who participated in that discussion. The resolution of the discussion was that we removed this ability to monkeypatch these `from()` functions and have them affect deserialization throughout Temporal. So that means that some use cases that could previously have been achieved by patching one or two functions now require patching all of Temporal, because on the whole the resolution was that the ergonomics of that were less important than not ever encouraging people to patch global built-ins, and there was a concern about early running code being able to defend itself against later running code. So it's still possible to do these things that I've listed here, but you have to monkeypatch Temporal to do it or at least all of Temporal’s deserialization entry points. You can still monkeypatch `from()` if you like, but it doesn't affect anywhere else.

PFC: There are other ways to partially achieve the use cases listed here and if they are found to be backwards compatible, we may ask for consensus to add one in a future meeting.

PFC: Most of the other changes that we've made have been minor fixes of editorial things in the spec, and fixing bugs in the spec. Other things from delegate reviews: We've made some name changes to the abstract operations in the spec text. We've improved the precision of some of the language. We've mandated a particular observable property access order on options objects when calling into the parts of the spec that are implementation defined. We haven't considered this kind of change as being disruptive to delegates’ reviews, so we've continued to make these as they came up.

PFC: The next part of the presentation is what is still open here. I'll describe some things that might be forced to change during stage 3 as well as list out any editorial changes that we expect to make this point anything still open from delegate reviews. I want to say beforehand that we don't anticipate large changes here or we wouldn't be requesting stage advancement. This is to let everybody know things that might happen.

PFC: One of these things is extensions to the ISO 8601 string format. For serialization of Temporal objects, it's required that we extend the ISO string format. This second bullet here on this slide is an example of an ISO string with both the time zone and the calendar annotation. These annotations are not standardized. The bracketed time zone originated from Java's equivalent of what we are calling `Temporal.ZonedDateTime`. It's been adopted by various other pieces of software around the date/time ecosystem, but it has never officially been published as a standard. The bracketed calendar annotation is our own invention. As we discussed during the January plenary, both of these are on a standards track. They were presented by one of our TC39 delegates, Ujjwal (USA) at the IETF meeting yesterday where it seems to have been well received, and the IETF chartered a working group to make this draft into an RFC. It's not an RFC yet, and others may have opinions that lead to changes in the syntax before it becomes one: such as making it less general. A number of participants in the IETF meeting agreed with this design. We will keep TC39 in the loop about any changes if they are proposed in IETF, but we're hoping that the current status quo ends up being the results.

PFC: A similar item that's being standardized elsewhere in Intl and Temporal in parallel is the names of the rounding modes that we accept in Temporal options for methods where rounding seconds takes place. Here, we want to make sure that we use the same names as the Intl.NumberFormat v3 proposal does. We are currently using these same names but one thing to note is that Intl.NumberFormat adds a lot more modes than just these four. And so if that proposal advances with all of those modes then part of getting that consensus might include adding more modes to Temporal as well.

PFC: Again, similarly to the previous two items, we have a string format for month codes. That's currently shared between temporal and ICU4X. There are different codes for leap months such as this “M05L” example in the second bullet point and there are still different ones for combined months. These "special" months are not present in the ISO 8601 calendar and therefore nothing changes in the Temporal specification itself, because everything not in the ISO calendar is implementation defined. Nonetheless, this is something where we don't currently expect any changes, but since it is being discussed with external groups, we do want to make sure that we are using the same format as whatever is aligned on with these external groups. About these previous three items, just to sum up our expectations around parallel standardization processes: to be clear, we think these formats are far along enough in their respective processes that we don't expect further changes. However, should any of these other processes mandate a well-motivated change to the one of these formats, then we expect to ask for consensus to make the associated change to make Temporal match it.

PFC: Here I have a list of normative changes proposed by delegates during the review period that we need to investigate but didn't have time to complete before the plenary started. We believe that advancement to stage 3 can be conditional on these. There are links if you want to open the slide webpage and click through. Similarly, here is a list of editorial issues that we believe are okay to finish or iterate on during stage 3. Once again all these are clickable if you want to check out the details of each GitHub ticket.

PFC: And a note about implementer feedback in stage 3. As I'm sure most people know, part of the reason stage 3 exists is for implementers to be able to implement a stationary target, but still be able to give feedback if there are concerns that only become apparent during implementation. We expect that concerns might come up during stage 3 and we will address them. So by asking for stage 3 we're giving implementers the go ahead to start implementing and raising these concerns so that they can be addressed. If I can take off my Temporal champions hat for a moment and put on my Igalia hat: at Igalia, we do plan to work on an implementation now if this reaches stage 3, so we'll be helping to provide this feedback. Okay, Temporal hat back on. We do expect that not only implementers might find bugs in the date and time algorithms, but also get bug reports from people using Temporal in polyfill form. One of these was opened just a few days ago, and we haven't had a chance to address it yet. I'm assuming that the process is that this kind of fix should require consensus at a plenary as well, which we will be happy to ask for as it comes up. So that is my slide material. And as I said at the beginning I was advised that there would be a lot of discussion time necessary. So I think we have 45 minutes for the rest of today for discussion and then some more time from tomorrow.

MM: So the thing about monkeypatching narrowly to customize something, versus needing to monkeypatch a lot, went by very quickly and I didn't understand it. I do have a concern about it. So, could you briefly re-explain that again? What form of customization is either monkeypatched narrowly or widely?

PFC: I actually have some extra slides at the end around this.

MM: That would be great.

PFC: Okay, I know that throwing a bunch of code up on the slide is not the greatest, but this is how it previously worked. If you developed a custom calendar and you wanted your custom calendar— the main reason why this existed in the first place is that your custom calendar is an object and you can create a Temporal object such as a PlainDate object that uses that calendar. If you serialize that down to a string it'll look something like this. It'll have a calendar string identifier in it and so in order to be able to deserialize that string back to your PlainDate object, you need to be able to somehow look up the calendar string identifier and get an instance of that calendar back. So this is how it previously worked. You would monkeypatch `Temporal.Calendar.from()` and check if the given string identifier was your custom calendar identifier, return an instance of that if it was, and otherwise call the original. So there are some legitimate use cases for this, such as being able to react to geopolitical changes before environments are able to ship them. This goes for calendars and time zones, which are subject to all sorts of geopolitical processes, which may happen on short notice. It also has less desirable use cases like in this code example where the author of "my-custom-calendar" wants to clobber everything for everyone else. Does this answer your question, or should I keep going?

MM: You said, if instead you wanted to have the equivalent customization you would do it by monkeypatching widely. What does that wide monkeypatching look like?

PFC: What you would have to do is monkeypatch every method in Temporal that can take a string like this one, and deserialize it into a Temporal object. There are quite a lot of them.

MM: I see. Okay. Let me check that none of this changes the other narrow monkeypatching issue that was fundamental to Temporal going forward, which is that the ability to get dynamically changing information, in particular the current date or time, is well-quaratined, well separated from all of the rest of Temporal in a separate separate property of the root Temporal object, such that everything else reachable from the root Temporal object by itself does not give any access to dynamically changing information.

PFC: It's debatable whether you would consider the set of available built-in time zones and calendars dynamically changing. But as for the current date and time, that is all isolated on the Temporal.now object, so I don't believe that this affects that.

MM: And with regard to the time zone issue, does that vary dynamically after a program starts running?

PFC: We have something in the spec text that says that it must not.

MM: Okay.

PFC: I can go into details on that, if it's relevant

MM: Since you're asking for stage 3, I would say it is relevant.

PFC: According to the specification: The timezone data, once retrieved for a particular time zone, cannot change during the lifetime of the surrounding agent.

MM: Given that, is there anything in Temporal, other than Temporal.now, if you leave aside Temporal.now, or when you hypothetically removed it. Is there anything remaining in Temporal that might change dynamically during the running of a single program?

PFC: I don't believe so.

PDL: We made sure that there is not.

MM: Okay, excellent in that case. I support this proceeding to stage 3. Thank you.

SYG: I want to talk about subclassing, and I want to talk about what we talk about when we talk about subclassing. But first I have a question. With the observable `from()` change such that there is no longer this single monkeypatching point, it's still not clear to me that because this proposal has this whole menagerie of classes that are working together and all interact together, to what extent can you subclass just one class? Beyond overriding just one method, should I expect things to work if I subclass just one class? Or is it that I should subclass one class, then look at all the other classes that make instances of the class I subclass, and then subclass those to make sure that they also respect the custom class or something. What is the smallest unit of subclassing as it is currently in the specification?

PFC: I think that really depends on what you're subclassing and why. For example, it's fine if you're creating a custom calendar to subclass `Temporal.Calendar`, and nothing else would need to be subclassed. If I think it would be perfectly possible to subclass, say, `Temporal.PlainDate`, but it really depends on why you're doing it if you want to know whether you would have to subclass something else as well.

SYG: Let's take the calendar as a concrete example. Do you have, in the screen that you're currently sharing, an example of calling `.from()` that was changed from the explicit observable look up to always calling the built-in one?

PFC: Let's see. We'd have to look where this operation is called from. I'll show [ToTemporalCalendar](https://tc39.es/proposal-temporal/#sec-temporal-totemporalcalendar) which is called here.

SYG: So step three there, that one takes the built-in `Temporal.Calendar` and then calls `from()` on it. So if I subclass `Temporal.Calendar`, how do these other classes use my subclass?

PFC: You can pass the instance of your subclass into the constructor of these other classes. Let's see if I can show you an example of that. Let's look at the [PlainDate constructor](https://tc39.es/proposal-temporal/#sec-temporal.plaindate). You are passing the instance of your class here, as this calendarLike parameter that's passed here to [ToOptionalTemporalCalendar](https://tc39.es/proposal-temporal/#sec-temporal-tooptionaltemporalcalendar), which is passed to [ToTemporalCalendar](https://tc39.es/proposal-temporal/#sec-temporal-totemporalcalendar). And since it's an object, then it's returned as it is. And that's the calendar that this PlainDate instance will use. So what you can't do is patch `from()` so that you could pass in the string identifier of your calendar subclass here and end up with an instance of your subclass.

PDL: Most of the functions that exist, accept a calendar or a time zone or a date or time in multiple formats: as a Temporal object instance of that type, in this case an instance of your calendar subclass; it's also accepted as a property bag; as a plain object with the correct set of properties; or as a string. That's what we talk about in this case, when you pass in a “calendar-like.” That means that if you subclass, for example, a calendar, you can't use the other versions there. You can't use the string version of it and expect that automatic translation to happen, right? So if you pass in a PlainDate somewhere as a string, you can't expect it to then create an instance of your PlainDate subclass. However, so long as you restrict yourself to passing instances of your subclass as those parameters, then they will just get passed through to everywhere they're needed. So really, we've created a level of flexibility in the arguments to these functions, which was very much driven by user feedback from the JS community, that always explicitly creating a bunch of instances is not that ergonomic. So to allow that, we are allowing you to brace(?) it. We're allowing property bags. Which has the downside of that where your subclass isn’t used, and with overriding `Calendar.from()` or `TimeZone.from()`, or `PlainDate.from()` we previously allowed to have a central point to monkeypatch, to then also use your subclass. Now we’ve removed that for a whole bunch of good reasons, some of them being things that were previously pointed out from the user feedback. So long as you actively stick to passing an instance of your subclass to these parameters of these functions, all subclassing works and you don't have any issues.

SYG: Thanks for the explanation. My takeaway from this design is that I definitely agree with the flexibility, and this dynamically typed kind of usage, for ergonomics. My take away is not that it is important to support subclassing. That is perhaps unsurprising because I think there's many downsides to subclassing for the implementation and security of the language, so like what I see in this spec draft currently is a mix of of just normal plain string protocols where you look up a function, or call a method, by some string; and then call it a mix of that static species kind of subclassing. Where, not only is there a species constructor, there are also various asserts in places that if you do pass a custom instance of your own calendar that it be a proper— actually I don't know if this is true for Calendar, but I've seen where if you do pass a custom instance of one of these classes, that it be a proper subclass, in that it has all the correct internal slots as well. It's not just a duck type thing. Overall the design seems to be muddled as to how it treats subclassing. That is in no way the fault of the champions, because the design of subclassing in JS is muddled, and we do all of these things in different places, and I think the discussion on IRC that many people want to have now is that we should take this opportunity to to set a clear direction of how we expect built-ins to be extended. I don’t want to say "subclass," because I don't think subclassing is the right extension that you do. At the same time this has been waiting for stage 3 for a long time and I am not in favor of delaying this proposal until we can resolve that bigger design question. So I guess to that end, I want to ask how strongly do the Temporal champions feel about the species thing in particular. Could you recount the motivation for supporting species construction in the Temporal classes?

PFC: Sure, I might have to ask one of the other champions to do that because that's been in the proposal since long before I started participating in it, but my guess is that it's there because it's the way things are expected to work in JavaScript.

PDL: Yes, the intention is that everything else is as unsurprising with respect to the rest of the spec text as possible. The only reason we're doing anything with species because that is what of what all the other things do, right? So if according to the committee, we say, actually we don't like species, then let's remove that. Not a problem. I don't think we have anyone that is fervently one way or the other on this. It's more that we are trying to stay as standard as possible in how we do things regarding how everything else in the language does things.

PFC: I imagine if the remove-built-in-subclassing proposal is presented again, it could be part of advancing that to ask for consensus on a patch to Temporal to remove that stuff.

SYG: I would imagine so. Of course, I would very much like that to happen before stage 3, but like I said, I am actually on the side of not holding up Temporal for this undecided question. So if anything I would like this to be a catalyst for us to have that discussion and if we cannot remove species, that this be the last built-in that we add with species, or something like that.

JHD: The language doesn't have a consistent subclassing strategy. Even setting `species` completely aside, I made a quick list of the built-ins and it's a big mix. For example, Promise has `then` as its interoperability protocol or you can shadow it from a subclass, but it all falls back to slots like a proper subclass. Similarly, regular expressions - we all know it has a ton of interoperable protocols. But it also falls back to slots, raises and the same is true all the way through. Even in Maps and Sets, the constructor will call `set()` or `add()` which can be overridden by a subclass, but you still have to have a proper subclass with slots for all the base methods to work.

JHD: I agree that we shouldn't necessarily block any one proposal on resolving the question of what is the actual thing we want in the language for how to subclass stuff, or how extend stuff or whatever we want to call it. That said, the pattern that BFS’s proposals if we want to, but they were talking about about coerce key and coerce value separate from the actual controversy. We were discussing about that. I actually really like that pattern of passing hooks during construction time, because it means that new built-in methods could be added and they would still work. Similarly, there wouldn't need to be any observable calls to shadowed methods for all of those current cases. If that pattern had been followed in Map or Set, for example, you wouldn't need to look up the `set()` or the `add()` method because it would either have been constructed with a hook or not. So I'm kind of that and then species as well. (?) I wonder if there's some things that would make sense to remove from Temporal, like species, or the expectation of subclassing, and so on, temporarily, so that the bulk of the proposal could be unblocked in a way that would still allow us to answer that broader question, without locking us in. SYG, you said maybe this would be the last thing with species. Well if that's even a possibility, maybe this should be the first thing without it, right? Because we can always add it later.

SYG: It's "just" resourcing, right? I mean, somebody needs to put in the time to figure out the extent of the web compat, somebody needs to put in the time to figure out what extension points are needed for Temporal. Speaking personally as a delegate, I don't feel that it's fair for me to ask the Temporal delegates to do that at this time, which is why maybe I’m on the other side. But if they are open to it, I certainly would be happy about that situation.

JHD: The summary of it is that I think that it would be really critical for lots of proposals to this language that we answer that question of how do you subclass, or extend, or whatever, built-ins and what's the way we want to do that even if we're constrained by existing patterns on existing built-ins. So I hope that we can address that.

DE: I'm confused by JHD's characterization of how things work now. I mean, I tried to explain this at my presentation last meeting where I really think there's a consistent pattern of, you have some things which just call methods and then you have those— you could think of them as protocols, or maybe protocol's the wrong word, but then there's other things where you're just an implementation of it where we use internal slots. If Temporal sticks quite consistently to this pattern. It seems like there's quite a large set of people in TC39 who disagree quite strongly with the patterns that ES6 set in terms of the way that classes and subclassing work, and subclassing built-ins. I think it'd be worth it for us to get together and consider this in a side meeting, so that we can come up with a concrete design to propose that the committee adopt, because I really think there is quite a clear pattern that the language follows today. I think it's pretty unfair to put it on the proponents of the Temporal proposal that they navigate all this. The people who want to change the the object-oriented convention should come up with a proposal for that. I'm a bit concerned that the different subclassing things could have performance impacts in ways that are perhaps different in Temporal compared to the ones that we found already for other classes. I think that's something that, as PFC was saying, we could really examine better in the context of a particular implementation. So I think there are multiple things that would make sense to do after stage 3. We could advance proposals, like the remove subclassible built-ins proposal that retroactively removes the use of species both in arrays and in stage 3 proposals, if Temporal is in stage 3. And we could also try implementing the calendar and time zone APIs, see if they end up being too slow, and investigate changes and how optimizable they would be. Reconsidering conventions is very separate from Temporal and it's not that Temporal needs the conventions; it just tries to stick to the current conventions. So people who don't like the current conventions, it's up to them to really make a proposal to change them. Then the other thing is about the performance overhead of this and that's something that we can speculate about, but it's much better to investigate in the context of an actual implementation. So overall, I think these object-oriented concerns, while significant and we may want to propose changes, shouldn't hold back Temporal for stage 3.

KG: Not exactly contrary to DE's point, but sort of sidestepping it: I think there's a pretty good case to be made for Temporal not falling cleanly into the pre-existing conventions, and in particular... I should lay out my thesis first, which is I think that we should drop all subclassing or at least all explicit support for subclassing from Temporal. So all of the species stuff and all of the figuring out how to make a new instance that isn't just using the relevant intrinsic. The case for this is that, unlike, as far as I am aware, everything else in the language, this isn't just one class. This is a whole bunch of classes which interrelate in this particular way. That is, you can project from instances of one class onto instances of another. There's methods like `toPlainYearMonth()` on PlainDate or whatever, that gives you a new instance of PlainYearMonth from a PlainDate. And because you're making a related thing rather than making the same thing, there's no way to do the species song-and-dance where you figure out what class the user was hoping to get. You just can't, there's no protocol for that. So if you project, e.g., from your subclass of PlainDate to a subclass of a ZonedDate and then back to a PlainDate, you don't end up with an instance of the subclass, and there is no practical way for the language to help a subclass to do that. You really have to override all of these methods on all of the classes. And if you're going to do that anyway, it's just not that much additional advantage for the language holding your hand for the few cases where species is relevant. So, concretely there is something different about Temporal that makes it less suited for the language-assisted subclassing than the other things in the language, irrespective of the question of what we should do for things like Map and Set. I would like to suggest just dropping subclassing outright on the basis of that. No one has argued that they really want it for Temporal outside of consistency with the language, and I think that the argument from consistency is not that strong given that there is this unique group of classes that makes the subclassing support not as clean.

PFC: If I could respond quickly to that before we move on to the next queue item, I do buy this argument that there's no support for returning your custom subclass of PlainYearMonth when you call `toPlainYearMonth()`, but there is support for returning your custom subclass of PlainDate when you call `PlainDate.with()`. I agree that there's not really a reason why one should be assisted in the language and the other should not. What I suspect is that for a lot of the reasons why you might want to subclass a Temporal object, that species support is not necessary. It's not integral to that and that's precisely for that reason that you don't get it anyway when you're converting in between Temporal types, but that's just a guess.

YSV: I just want to quickly note something that JHD mentioned. I think we should be careful about adding hooks everywhere. One concern I didn't raise yet with BFS's proposal because I want some more time to look at it, is the introduction of hooks. They're not zero-cost for engines and that was something that we had flagged as we want to investigate that more. I do agree that we should get rid of @@species though.

SYG: Can I ask a question for YSV? KG proposed something stronger than removing species, which is not even doing for example the `.constructor` look up on the receiver, just always returning a new instance of the intrinsic. Are you in support of the more narrow thing of removing species and maybe using the `.constructor` instead which actually isn't compatible? or for KG's solution?

YSV: I haven't thought too much about it. I am interested in getting rid of species for now. I would need to think more about KG's proposal.

SYG: Okay. Thanks.

RPL: There is one more comment on subclassing: MM saying "support constructed look grams (?) for extensions; kill species."

JHD: I just wanted to add, if we decide to go with KG's suggestion, which I think I like, I would prefer to also have all the constructors throw when their `new.target` isn't the intrinsic. In other words, I'd prefer to actively block people from creating subclasses until we decide if that's something we want to support. I'm worried about if we go with what SYG was saying and have them always unconditionally create a base class instance, then that closes the design space for if we want them to eventually be able to produce subclass instances.

RGN: I was going to say, I'm not in favor of anything that would break `extends`. But if we go with JHD's suggestion just now of actually making it a syntax error, then that resolves the issue. I agree with him and I share his concern that we should not do something that still allows that syntax but prevents its functionality in a way analogous to everything else that's already part of the language.

???: Well, it wouldn't be a syntax error. It would be a runtime error. Yeah.

RGN: Yes, not a syntax error, but but a runtime error. [new topic] I'm interested in documenting what happens if Temporal does advance today, implementations ship, and then the syntax changes through the IETF process.

USA: I can answer this. The timeline that we have in mind for IETF puts the tentative date for putting this into an RFC around July, and I don't feel realistically that implementations can ship before that. Also, I think that this back pressure works both both directions, if Temporal goes to stage 3. That's more pressure for IETF to accept the syntax, as this just put in a good amount of design work into coming up with that format. But of course you know people could still have concerns with that. We mentioned it, but I don't feel that any any changes to that design would be groundbreaking in any way. But another thing that I wanted to offer is that in case IETF, by the time it's an RFC, goes to to change the format to something else, we could come back to the committee and talk about it. Because I think there's general consensus around using whatever the IETF standard ends up being.

RGN: My concern is that advancing to stage 3 is a signal for implementations to ship, and we're then putting ourselves in a race condition where if they do ship and developers start counting on syntax that ultimately looks different when an RFC is published, that we'll be stuck with it. You know, there will be the standard, and then there will be the stuff that was proposed as a standard by ECMAScript, and and I'm not clear on how to prevent that, but I think that preventing that is critical.

USA: As I mentioned, I don't believe personally that implementations could ship unflagged before July, but one thing we could do is ask implementations to keep it behind a flag before July. Would that work for you?

RGN: Perfect. Yes. Thank you.

???: Hopefully IETF won't change things to the point that it looks the same but behaves differently, so you should still be able to pass the old style format if you guys have a problem with the new command.

RGN: Yeah, I just don't want to have the old style plus the IETF style.

Bron Gondwana: One of the things that came up at IETF was the use of the name PlainDates and similar terminology, which is not the same as any of the names in any of the standards that exist, but I know that that's probably already locked in. That's going to be another place where confusion might grow over time.

RGN: Understood. I have a mild concern about that. But ultimately you could just say, here's a translation between ISO terms, IETF terms, and ECMAScript. I feel like that could be resolved in a way that in the actual on-the-wire syntax is much more difficult to address. The the person I was just talking to, please let us know who you are and update your name?

Bron Gondwana: My name is Bron Gondwana. I'm from Fast Mile. And from the IETF. I'm working group chair of the CalExt working group and other work groups, and I'm also involved in ??.

SYG: I wanted to ask— I'd like the context of the IETF process here and the specific risk. I shared your risk assessment about not wanting us to be stuck with something that IETF changes. What is the timeline for IETF doing something?

USA: The timeline that we have in the charter right now is July 2021 for submitting this to the ISG. By July by submitting, I mean at that point IETF would have a quick turnaround and decide, we will change it or we will not change it.

Bron Gondwana: I would probably say are we happy with the content of it. Our other problems are with the extensibility points and what it includes already, rather than the syntax, hopefully. But you can't guarantee anything with the IETF, it does not do deadlines.

RGN: The resolution that made sense to me is that there is an explicit instruction to to not ship unflagged, and then at some future point things will advance far enough in IETF, and maybe that point is an actual RFC, is reached where the restriction on shipping unflagged is removed because at that point the format is stable. I'm not saying specifically July, I'm saying specifically just that there's instructions not to ship unflagged that will only be removed once the once the external process matured sufficiently.

SYG: I'm happy with that. I like that you and the other champions are taking the stage 3 signal seriously. I assume of course, that all the places do you expect possible change due to upstream things like this are to be explicitly communicated.

KG: I do want to talk about some more of the in-the-weeds details. I should preface this with, I'm in general very supportive of the Temporal proposal and almost all of the decisions that were made for the Temporal proposal. I apologize for not raising these more detailed issues at an earlier stage. There's just been a lot of stuff happening with the Temporal proposal and I couldn't keep up with it. So I didn't get a chance to do this very detailed review until when it was settled this past meeting or recently. Anyway, with that said, there was another issue that I raised on the issue tracker that didn't didn't make it into the slides that I did want to discuss briefly, especially since JHD is here and I believe he took a different opinion in earlier discussions. The issue was that there is this `compare()` method on Temporal objects that is presumably intended to be used for sorting, as with `Array.prototype.sort()`. And the current specification says that if you have two dates which represent the same point in time, so for example they are both January 5th or whatever, but they have different associated calendars, this means that they are not equal in the sense that the `equals()` method will not return `true` for them because they have this additional data, but they also don't compare as equal by the `compare()` method that’s on the screen now, because the calendar is taken into account as the last thing once you've looked at all of the other fields. If all of the other fields agree, then the calendar is used for ordering these things, and I think that's wrong. I think that two dates which represent the same day should not be arbitrarily ordered by the lexicographic ID of their calendar. Since `Array.prototype.sort()` is now stable, if you had two of these things in an array, the sort should leave them in the order that they were, as a stable sort will, if and only if the calendar is not taken into account. I think leaving them in the same order is the right thing. So, I think that the calendar ought not be taken into account and in particular, I think it's okay for the `compare()` method to return zero for two objects, even if the objects have an `equals()` method that says they are not equal, because they do represent the same point as far as sort order is concerned. These are points on the timeline and they represent the same point in time, so they shouldn't be treated as unequal for sorting purposes. It's okay for them to be unequal according to `equals()` because `equals()` is not concerned just for the position on the timeline.

PFC: I can respond quickly and then we could pick up the discussion here tomorrow. My personal preference would have also been for what you're saying, but as with many of these things they are the way they are because we had extensive discussions about them the champions group, and that's what we were able to reach consensus on. So I'm kind of hesitant to overturn that. But maybe there's some new information that you could bring to the discussion, which is what happened in the monkeypatching discussion.

KG: The reason I think it merits revisiting is because, from reading those issues — and I was not present for the discussions outside of the issues — but from reading the issues it looked like the discussion was based around a false premise, which is that `compare()` returning zero for two things must mean those things are conceptually equal, and that's just not true. That's not a contract in, for example, Java, which has built-ins that violate it for its own `Comparable` type. It's not a thing which really makes sense as a requirement specifically because we have made `Array.prototype.sort()` stable, which is a thing that is only sensible to do when you have two things that are unequal but compare as zero. That's why I wanted to revisit it. It's because I think there was a false premise in the discussion.

PFC: Should we save the queue including this item and pick up here tomorrow?

**yes.**
