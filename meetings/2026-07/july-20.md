# 115th TC39 Meeting

Day One—20 July 2026

**Attendees:**

| Name                | Abbreviation | Organization         |
|---------------------|--------------|----------------------|
| Dmitry Makhnev      | DJM          | JetBrains            |
| Waldemar Horwat     | WH           | Invited Expert       |
| Bradford C. Smith   | BSH          | Google               |
| Lea Verou           | LVU          | OpenJS               |
| Keith Miller        | KM           | Apple Inc            |
| Ashley Claymore     | ACE          | Bloomberg            |
| Aki Rose Braun      | AKI          | Ecma International   |
| Linus Groh          | LGH          | Bloomberg            |
| Istvan Sebestyen    | IS           | Ecma International   |
| Nicolò Ribaudo      | NRO          | Igalia               |
| Philip Chimento     | PFC          | Igalia               |
| Chip Morningstar    | CM           | Consensys            |
| Ujjwal Sharma       | USA          | Igalia               |
| Eemeli Aro          | EAO          | Mozilla              |
| Caio Lima           | CLA          | Igalia               |
| Olivier Flückiger   | OFR          | Google               |
| Nikolaos Papaspyrou | NPU          | Google               |
| Chris de Almeida    | CDA          | IBM                  |
| Richard Gibson      | RGN          | Agoric               |
| James Snell         | JSL          | Cloudflare           |
| Guy Bedford         | GB           | Cloudflare           |
| Devin Rousso        | DRO          | Invited Expert       |
| Samina Husain       | SHN          | Ecma International   |
| Luna Pfeiffer       | LPR          | Invited Expert       |
| Chip Morningstar    | CM           | Consensys (MetaMask) |
| Dan Minor           | DLM          | Mozilla Foundation   |
| Justin Ridgewell    | JRL          | Google               |
| Kevin Gibbons       | KG           | Invited Expert       |
| Keith Miller        | KM           | Apple                |
| Michael Ficarra     | MF           | F5                   |
| Mark S. Miller      | MM           | Agoric               |
| Nicolò Ribaudo      | NRO          | Igalia               |
| Peter Klecha        | PKA          | Bloomberg LP         |
| Stephen Hicks       | SHS          | Google               |
| Ujjwal Sharma       | USA          | Igalia               |

## Opening & Welcome

Presenter: Chris de Almeida (CDA)

CDA: Excellent. All right, welcome to the 115th meeting of TC39. This is your chair group, Rob, Ujwal, Chris (myself), and Justin, Daniel Minor, and Daniel Rosenwasser as facilitators. Rob is on PTO, so he will not be joining us on this occasion, but I think the rest of us are mostly here, myself, Ujwal, and whoever else is currently in the meeting. You— this says make sure to sign in, but, almost surely you must have if you got the meeting link. But if you got the meeting link, via some other means, please do complete the sign-in form that helps us track who was actually here. And that is available on the reflector issue for the meeting. Just a reminder, we follow our code of conduct, which TL;DR of which is be excellent to each other. Our schedule is as follows. For the next 4 days, meeting starts at 10:00 local time, then we break for lunch at noon, and, for an hour, and then we return for 2 additional hours. Communication tools: hopefully folks are familiar already with TCQ, and we have got the screenshots updated to reflect the new, fancy TCQ, courtesy of Michael Ficarra and other contributors. This is the— oh, this is an old screenshot, but it's more or less the same. So this is the participant view of TCQ. You have your buttons there to, state what sort of, reply you have to things, whether it's a new topic or reply to the current topic. A clarifying question or a point of order. A gentle reminder on point of order, feel free to kind of abruptly interrupt without waiting for, someone to bring attention to your point of order. Those tend to be things that we need attention on immediately. We use matrix for chat. The primary channel during plenary meetings will be the second one you see there, TC39 delegates. That top link is for the TC39 space itself. If you join the space, you will see all of the different TC39 channels without having to find them, cherry-picking. The Temporal dead zone channel is used for off-topic things, so please keep, off-topic and banter, in that channel. And so the TC39 delegates channel is for, real business. Just a reminder on the IPR policy, which applies for the member delegates. Invited experts, any invited experts that, I believe everybody's got, signed the RFTG form as that's now a condition of becoming an invited expert. And yeah, details are in the contributing MD. Make sure you have reviewed this. I believe we may have some observers attending in this meeting, and a reminder that observers are welcome to observe, but do not have voice. The dialogue is being transcribed live. We always ask for note helpers to assist in making corrections and attributions. And, as Aki, I'm sure will remind us, many times during the meeting, to please add your summaries and conclusions. And those are different things. Which, Aki will, will, will be happy to reiterate, later. And just a reminder that the transcript that's being prepared will eventually be posted on GitHub. You may edit this at any time during the meeting, in Google Docs for accuracy, including deleting comments which you do not wish to appear. You may also request corrections or deletions after the fact by editing the Google Doc in the first 2 weeks after the meeting or subsequently by making a PR in the notes repository or by contacting the chairs. Please help with notes. We really rely on our note helpers, to make these smaller corrections and attributions. And for those helping with the notes, it always helps to have the text file with all of the delegates' 3-letter acronyms, available in a browser tab for quick reference.

KG: Before we move on, one note there is that we are using a even newer transcription model than we were at the last meeting. And I do think it is, performing perhaps marginally better. So hopefully the experience of being a note, taker/corrector, will be even easier at this meeting than it previous ones. Although please feel free to ping me if it is not. But, yeah.

CDA: Yep. Thank you, Kevin. Yeah, definitely, it also would be helpful feedback for anyone who has taken notes, you know, for example, at the last meeting, if you do notice, any differences, good or bad, that would be, helpful information as well. All right. Our next meeting will be an in-person/hybrid meeting, once again in Tokyo. We are returning to the Sony Interactive Entertainment office, in Shinagawa, in late September to early October. We did complete the interest survey for that, and deemed there was enough interest to proceed with the in-person meeting, keep an eye out. There should be a, a, for folks that completed the in-person, survey, you will still need to complete the new form that's coming, very soon, for actual in-person registration. So keep an eye out for that. And we will go through our regular, agenda, first, of course, asking for note-takers and then some other items here. Let me just take a quick look at TCQ, make sure I'm not missing anything. Because I think I do not have on here the approval of the previous minutes. So let's do that now. Actually, let's do that once we have, note-takers. So let's do that. Do we have any volunteers to help with the notes? We are looking for 2. Two individuals.

ACE: I'll help you out.

CDA: With the notes for this session. Who was that?

ACE: Ashley.

CDA: Ashley, thank you so much. Can we get one additional person to help with the notes? We can proceed with the meeting once we have one additional volunteer. Still looking for one person to help out with notes. Which entails making small corrections, and attributions. As KG noted, the new model should make the number of corrections you need to make, even less than before. Which was already a small amount. Maybe we could get somebody to volunteer for the first hour.

NRO: I can volunteer. At least for the first hour. I have another meeting in 1 hour, though, so I need to step out for 20 minutes.

CDA: Okay. Thank you so much, NRO. All right.

CDA: So, first order of business: approval of the previous meeting minutes. Are there any objections to approving? I believe we already merged those. Yep. The PR has been merged. In the notes repo. All right. No objections. We have approved the previous minutes. Next up, adoption of the current agenda. Is there any objection to the agenda as it stands? Okay. The agenda is approved. I will cease to share my screen at this point. NRO mentions there's a 3-weeks-long meeting in Tokyo. Did we have a bad-? It should be the first 29 September through the 1st, not the 21st. I as much as people like the Tokyo meetings, probably that would be, too much plenary for anybody. Noting here that, typically we would start with the Secretary's report, Samina has a conflict and so that will be coming later in the meeting. So the first topic is editors' reports. Michael, are you there?

## Editors Report

Presenter: Michael Ficarra (MF)

* [slides](https://docs.google.com/presentation/d/1uCpu8x8Fj0cZ41eQpygsS5uuX-xjiFKW0mxq6z2hTZQ)

MF: This is the editors' update. We've had 3 major normative changes since the last meeting. We landed joint iteration, which includes `Iterator.zip` and `Iterator.zipKeyed`. We landed `Atomics.pause`. And also explicit resource management, which includes `using`, `await using`, that kind of stuff. Also, we had a small follow-up because something got dropped in a rebase, so explicit resource management is split across those 2 PRs.

MF: Notable editorial changes. We did a lot of work on the aliases used in the spec. We are now consistently either abbreviating or not abbreviating certain terms. So you won't see, like, `attr` and `attribute`, they’ll be, just one of those. We also made sure that we use the same alias for the same concept used in many different places, so you won't have, like, `s` and `sym` and `symbol`, all talking about a Symbol. So yeah, yeah, just small consistency things that I think are going to improve the quality of the spec little by little. You can look at the editorial conventions document to see what our policy is there now for naming. If you maintain a proposal, it'd be nice if you, you know, update accordingly. Otherwise, we'll just have to do it during review, when it's trying to land after stage 4. We also notably renamed these internal slots on private elements and property descriptors to `[[Getter]]` or `[[Setter]]`, from `[[Get]` and `[[Set]]`, because that overlapped with a concrete method name, and now you can just Ctrl+F on the spec for getter and setter, and it brings you to all the occurrences of exactly that thing, which is working toward our goal of improving the spec navigation when it comes to, like, concrete methods and internal methods and stuff. And here, in this case, internal slots.

MF: We also added a feature to ecmarkup for preserving your multipage preference, which means, like, whether you view the spec as single-page or multipage. By default, it will just have no preference, which means you can just use the `m` keyboard shortcut to toggle between single-page and multipage viewing. If you do have a preference, you can go into the keyboard shortcut help dialog with `?` and select one of those preferences. So if you select always single-page, if you receive a link to the multipage document, it will navigate you to the single-page immediately. You know, and the other way around for always multipage. Most people probably want to leave it on no preference, and you won't notice a difference.

MF: We've updated the upcoming and planned editorial work. I think 3912 is just about to land, so maybe we'll be removing that one shortly. You can, as always, track what we are working on the GitHub project. Link's at the bottom. That's probably the best way to know, in more fine-grained issue level stuff, what we're going to be working on next. And that's it. Any questions?

CDA: Nothing on the queue.

### Speaker’s summary of Key Points

* ECMA-262 editors landed 3 normative changes, some editorial changes, and an ecmarkup feature for a sticky multipage preference

## ECMA402 Update

Presenter: Ujjwal Sharma (USA)

* slides presented. link TODO

USA: Hi, everyone. And likewise, I'll do a quick status update for ECMA 402. Do let you all know how we're doing on the editorial side of things, and make sure that you're not disoriented for the upcoming, normative, stuff. So, first, let's go over the things that we've merged since the last 2 months.

USA: An unintentional normative change that was reverted. GetCalendars specifically.

USA: There was another PR by RGN. Basically, making editorial changes and improving the specification of this algorithm. Specifically to break it into steps. And then there's simple changes like this that just fixed issues. So the most serious one of these is clearly the one that is normative, but it was discussed in TG2, and we agreed that this doesn't need consensus. Since it's an unintentional normative change, that's being reverted. And yeah, this one is just renaming. Then we have a FormatDateTimePattern, mathematical comparison, changes. These are all, essentially tiny changes and small editorial things, such as in this case where we use a different comparison operator, so yeah, that changes that that shows you the kind of changes that we've been making, like sync alias names, and other editorial fixes. This I suppose is too tiny.

USA: Switching from RangeError to TypeError, for matching conventions that we have elsewhere. As well as, yeah, meta or editorial meta changes like this.

USA: This is the issue that was discussed in the last meeting as well. I briefly mentioned it as having just opened up and now it's merged. Actually, it was merged right during the last meeting.

USA: And there's a few open issues as well. In a similar vein, simple editorial things. And yeah, thanks, RGN, for always keeping up with these. This one is a bit more involved. Some of these could actually really use somebody reviewing them, so help us out if you can. And that's it for 402.

## ECMA404 Update

Presenter: Chip Morningstar (CM)

* No slides

CM: Where I am in California, it is summer, and as you all know, JSON does not change during the summer. Of course, it also doesn't change during the winter or the spring or the autumn, so don't think that you can get away with any shenanigans just by going to the Southern Hemisphere.

CDA: Excellent. Don't forget to include your summary and conclusions.

## Test262 Update

Presenter: Philip Chimento (PFC)

* No slides

PFC: We did not previously have a presenter for this, but I can volunteer to present it. The main thing I'd like to share is that KG is now a maintainer. Big thanks to KG. And, in our last meeting, we noted that there are several PRs for stage 3 features that are close to landing, iterator chunking, iterator includes, regex buffer boundaries, iterator join, and immutable ArrayBuffer. Just need some last review to get these over the line. I had hoped to review immutable ArrayBuffer and `Iterator.join` myself before the meeting started, but I will probably get to it this week. And I believe that is all for our update. I will paste the summary and conclusion into the notes.

CDA: Great. Thank you.

### Speaker's Summary of Key Points

* KG volunteered as a maintainer, big thanks!
* Pull requests for stage 3 features are close to landing: Iterator chunking, Iterator includes, RegExp buffer boundaries, `Iterator.join`, immutable ArrayBuffer

## TG3 (Security) Update

Presenter: Chris de Almeida (CDA)

* No slides

CDA: You know what I always say. We have been meeting regularly, although attendance has been rather low lately. I think just because of the summer and people on PTO, etc. But we continue to discuss the security implications of proposals at various stages. Please join us weekly on Wednesdays if you are interested.

## TG4 (Source Maps) update

Presenter: Nicolò Ribaudo (NRO)

* [slides](https://docs.google.com/presentation/d/1xIKd9vSR01B3Nx2pSfR2XegZbAxVbKE-m4Pro0tji2s)

NRO: Okay. Teach for a part. As always, we're working on two main proposals. The first of them range mappings. It just reached stage 3 in our TG4 process, just a reminder, TG4 process is very similar to main TG1 process. We also already have one merge implementation WebKit dev tool, so have in progress implementation in source map generators. So tools that generate just code and source maps. One big difference between our two processes is that we need four implementations for stage 4. So to consumers, like, to debugging tools and to generators. And the other proposal we're working on, scopes, it has already been stage 3 for a while, but there's been some recent involvement from people working on Dart compiler, with multiple suggestions on how to optimize the format. So that it's faster to the code and leads to lower memory usage. So even though this stage 3, there are multiple implementations ongoing, especially in consumer tools. It has been a little bit more in flux recently. So if any of you is, like, looking into implementations, please just be a little more careful.

NRO: That's it. As always, work keeps going well in TG4, and you're all welcome to join our monthly calls.

Great. Thank you.

## TG5 Update

Presenter: Michal Ficarra (MF)

* [slides](https://docs.google.com/presentation/d/1gJ-bB4C5UdXmssiEsK2gnMdm1janUYfqelY_stdMD04)

MF: Okay. Yeah, this is the TG5 status update. Usually MBH gives this, but he is on holiday now, so I'll be giving it. We are both conveners though. You should come to our monthly meetings. The most recent one was from DJM on a tool that he built for internal use at JetBrains, tracking proposals and sharing updates internally, within the company. Remember that because this will come up later today in one of my later topics. Also some upcoming stuff. We have a formalization of Temporal this month, and next month we have a compiler from TypeScript to Lean, so check those out. Our meetings are every month on the last Wednesday of the month. We also have an in-person workshop, again, at the next in-person meeting in Tokyo. This one is at Shibaura Institute of Technology in Tokyo. So we'll have the agenda for that up soon, as soon as we get things finalized. Remember, we like to present a couple of topics from TC39 delegates and a couple of topics from local PL researchers at a local university, so we'll have some topics from them as well.

MF: Also, we want to remind you there's a workshop—that MBH, YSV, and I are organizing a workshop at SPLASH this year. SPLASH is in Oakland, right after the TC39 meeting in Tokyo. So a lot of you are literally taking that flight. Please, please come to our workshop on programming language standardization and specification. We have some great submissions. Submissions are still open until August 1st, so feel free to also submit stuff yourself if you care about programming language standards or programming language specification. We're really excited about our 2026 program.

### Speaker’s summary of Key Points

* TG5 meetings and workshops are great, you should go
* PLSS is going to be great, you should go

## Needs-consensus PR: Support BigInt coercion of integers expressed as exponential-notation strings

Presenter: Richard Gibson (RGN)

* [PR](https://github.com/tc39/ecma262/pull/3857)
* [slides](https://docs.google.com/presentation/d/1kPYmR8LkoV4AZpSM_ezHCyR2givdk9OiQlwiXHdah4M/edit?usp=drive_link)

RGN: All right. So this is our second time discussing this PR. The first time, I think, was at the last meeting. And we got into a little bit of a discussion, but basically just didn't have enough time to cover it. So hopefully this meeting will have some kind of conclusion one way or the other. What we're looking at is coercion of exponential notation strings, with `BigInt` called as a function. Which right now is invalid.

RGN: So structuring this as if it were a staged proposal, the problem statement we're dealing with is that exponential notation is useful for dealing with big integers of arbitrary size, but is unavailable for direct use in defining a bigint. It can be done manually, by accepting strings and breaking them into pieces for integer part, fractional part, exponential part. But that is cumbersome and tedious and even though this particular issue was discovered in amount, which wants to store string values in exponential notation as a canonical form, it also comes up elsewhere, the most obvious place, is in parsing JSON with source text access, because exponential notation is a valid way to represent numbers in JSON. This table shows the landscape of numeric parsing currently in ECMA-262, and we’re talking about the lower right cell, an example of what's currently invalid that this PR is trying to make valid. Which is `BigInt` called as a function with a string argument where that string is itself in exponential notation.

RGN: But to go back now and describe the rest of the table, this is how we deal with the parts of input that are not theirselves decimal digits, for number literal, bigint literal, Number(string), and BigInt(string). Leading and trailing whitespace is allowed everywhere although it's not really applicable in the literal columns because it doesn't show up as part of the token. Radix prefixes like `0x`, `0b`, or `0o` to indicate hexadecimal/binary/octal are valid in all of these places, and changes interpretation to use the appropriate base. Underscore separators are valid in literals, whether number or bigint, and are not valid in strings passed to either function. And then the relevant concern here, decimals and exponents are valid for number, whether literal or a string parsing function, are not valid for bigint in either case. And the convenience that we're lacking proposes to introduce alignment between BigInt(string) and Number(string) for such input, rather than BigInt(string) with bigint literals. So we’d still have inconsistency in this space, but aligning the functions rather than the literals.

RGN: One of the points raised in the discussion on this pull request is what do other languages look like? And it turns out that there's not a lot of consistency across them, but just to share what's going on, we basically have a range of behaviors. Python actually is the most liberal; they're the only one that basically treats the input for parsing big integers the same way as they do their literals. So you can have wrapping whitespace if you want, radix prefixes, and separators (which are a bit unusual), but you do not get the parsing of exponents. On the other end of the spectrum, you have some very restrictive languages. Go, for instance, doesn't support whitespace, nor does Java for that matter. Some of them parameterize the base to be used for parsing. .NET is particularly interesting in that they're the only one that does support parsing of exponents. But everything with .NET manifests as an option. So they're also the only language where you can prohibit the leading plus or minus sign indicator. And not presented in the table here, but it turns out that ECMA-262 is unique; all of these other languages truncate when coercing a non-integer number into an integer, but we throw an exception in that case.

RGN: Regardless, focusing on the pull request itself

_switch from slides to specification_

RGN: So the change to our specification is essentially that in StringToBigInt, this internal operation that is used by BigInt(string), rather than parsing a new grammar dedicated to that operation, we use the existing StringNumericLiteral and constrain after the fact to integer MV results \[… <bot stopped> …] If we decide to commit to this pull request, and make that normative change. It can be rejected; hopefully not. Or we could alternatively promote it into a staged proposal in which case I would probably seek stage 1 at this meeting and then prepare some things for the future to go on to later advancement. But with that, I am ready for TCQ.

MF: Okay. I'm not in love with this proposal. I think—so the main thing that this is adding is the exponential notation being accepted by a `BigInt` constructor. And I really don't see why people would want to express bigints in exponential notation. I think that that's a really awkward way to do that, especially because exponential notation is a format that allows for expressing many things that are non-integral. And it just—we accept many different forms that end up being integral. So we have like a `1.5`, but it's `e2`, that ends up being integral. So why are we expressing it with a decimal on the left anyway? And then we have like `1000e-1`, and that is still integral. So it's like, it's still accepted even with like a negative exponent there. That's just like, I don't think that that's something we should add to this API at least. And I saw it in your table, like no other languages even support that. There was an option in .NET for doing so. I think that's probably just because they're being incredibly generic about it. Yeah, so that's it.

RGN: So one of the bits of text you had in your topic was the possibility of a `BigInt.parse`. This is a thing that I didn't add to the slide, but I've also considered it. And probably we should keep that in mind for later parts of the discussion as well. Did you want to comment specifically on it before we move on?

MF: That's my next topic, actually.

KM: So I guess one thing that's kind of odd to me is that if we're expecting the output to always be in integer anyway, why allow the decimal point in the like string literal? It seems like if it's going to be an integer either way, you can always express it without the decimal point and just change the exponential. So it seems like I would find it confusing to express it that way. I don't necessarily have a problem with it existing that you can write a decimal, but it does seem like it adds to the confusion potential for people without adding any value.

RGN: The short answer there is that essentially the canonical form is to have a single digit to the left of the decimal point. And everything else to the right of the decimal point with the exponent scaled appropriately—and the reason for that is that it indicates exactly which digits are significant. So `1.000e3` is not the same as `1e3`, and `1000` is ambiguous between the two.

KM: But we don't have any way to handle significant digits in—like we don't retain the significant digits anywhere. So that information lost the second passage.

RGN: But Amount has precisely that need. Which is what called this to our attention in the first place.

KM: It seems like—I mean, I guess I could see the idea for the parity—I don't know, like overly concerned about it. But it doesn't seem like it's a strict necessity. I mean, I could see why maybe it would be slightly convenient, potentially, to pass the same value into both places. It doesn't seem strictly necessary, though. If we're worried about confusion,

RGN: To put a fine point on it, if we didn't allow the decimal point in this notation, then the change would not satisfy the issue that was discovered by Amount. And Amount would have to go a different way in order to address it, which means that essentially this would probably not be worth pursuing on its own merits given that the motivating problem still remains open.

KM: But wouldn't amount still have to like figure out how to extract the number of significant digits? Like it's still going to have to do some calculation for like trailing zeros and other things from the string. So it's not like you can just pass the string in and magically you have the.

RGN: Oh, the inner machinery of Amount is fine. It's that the API surface exposed to user code includes the canonical form, which can no longer convert to `BigInt` because it includes the decimal point. So it would be a source of user friction.

KM: I see. So you can't just take the—the building blocks don't connect. But you can't—you can't take the pieces and connect them together.

RGN: Right.

KM: Okay. I see.

MF: I feel like the utility of the `BigInt` constructor is in the transitional period when browsers weren't known to support BigInt literal notation, and it could be a way to write a bigint without depending on that support. And, adding more accepted notation without accepting that also in the syntax seems like not a great direction to go. I don't necessarily support adding exponential notation BigInt literals, but if we were to add the support in the BigInt constructor, you know, that inconsistency would be undesirable. I would prefer to see a path where if we really do find value in this, we pursue a proposal for a separate method on BigInt, something like `parse`. We have `Number.parseInt`, `Number.parseFloat`. We can have `BigInt.parse` or `parseInt`, whatever you want to call it. And that can support all the notation we want. We could even include the separators, whatever we want. I think I'd rather just have the constructor stay kind of as it is supporting the absolute minimum.

RGN: Yeah. This is a position that resonates with me, as well. It's kind of strange that we already have separators valid in the literals, but not in dynamic parsing. But we've lived with it. That hasn't been a significant source of friction in BigInt, or in Number for that matter. I am explicitly not proposing that we change the syntax of BigInt literals here. That would actually be, as far as I can tell, a completely novel behavior for ECMA 262 if we were to pursue it. I couldn't find any language that allowed for exponential notation in arbitrary precision integer literals. And I don't particularly want that for our language. But a parse function makes a lot of sense to me. You know, as I said, it's not in the slides but is something that I considered as well. And if we do feel good about it, probably the way to pursue that is as a staged proposal. And I would feel good about it.

KM: Is there a reason that we are returning undefined rather than just like throwing an error? It feels like if there's not an integer, it might make more sense to throw all those ones says that it does. So I'm confused. But.

RGN: The diff showed only this StringToBigInt operation. But the consumer of it does throw.

KG: Oh, I see. Okay. Sorry. I misunderstood them.

RGN: It doesn't back map to a syntax error.

KM: Yeah. Cool. Cool. Okay. I retract my comment.

PFC: I just wanted to note that working on dates and times, I have had many uses for this. I've often wished that you could just put in, 1e6 or 1e9 or whatever, whether that's in a BigInt literal syntax or as a string in the BigInt constructor, because it's tedious to type out all those zeros. I support at least solving that problem for JavaScript programmers.

RGN: It also comes up in dealing with really small atomic units for currency. Like if this existed I think it would see use.

EAO: Given that we already have `BigInt` as a function accepting a string argument and then parsing a numerical integer value from that string, I would find it very surprising if we introduced a `BigInt.parse` function that also accepted a string as its numerical argument and then would actually perform a different parsing on that string compared to just using `BigInt` as a function.

WH: +1 to EAO.

JRL: RGN, do you want to respond?

RGN: No. I think we can move on.

MF: Yeah. I think that this needs-consensus PR seems to be a little bit less straightforward and obvious than it seems RGN had hoped. And because of that, I feel like this is probably worth doing as—following the stage process.

RGN: Yeah. The shape of this discussion has me agreeing with that as well.

OFR: Yeah. Just wanted to make a quick observation. It seems like we have now two use cases that were mentioned so far. So one is for Amount where basically the argument is a runtime value and then the second use case would be more like a literal and it seems that we need to look at these differently probably because if it's a literal then probably the literal notations should support it if that's the intended use case. And if Amount is the intended use case, there I would just add one thing that maybe we should wait for the proposal to reach the final shape before we add things to the language to support like potential future uses. If we don't know yet how exactly the proposal will end up looking.

RGN: Okay. So if I understand correctly, you're drawing a distinction between essentially the static versus dynamic use cases for getting at a BigInt from something that starts as exponential.

OFR: Yeah. I think like especially for the literal case, I think it would be an antipattern to not write the literal and instead write a string and then have it parse so that would be an antipattern. So that would be a bad use case, I think.

RGN: But you would be comfortable with introducing new literal syntax to support that in place of big in call this function?

OFR: Oh, I don't know if I would be comfortable with that. I'm just noting that if we want like if this is an intended use case, then I don't think that this PR is a good match for this use case. So I would say we have currently heard two use cases. One is big int literals for that. I don't think that the PR is a good solution. And the second use case is a proposal that is still in flight where I would say let's wait until the proposal has the final shape. So that's my point.

RGN: That's okay, I hear that. But if the literal use case is not achieved by calling a function, then the only other option is a syntax change.

OFR: Yeah. Exactly. And but that might be a problem of this pull request that it basically encourages you to write to convert something which was a literal into a string that is then parsed in I don't know where it would be parsed. Maybe it can be optimized, maybe not. Who knows? But what I'm saying is like you basically you convert. A static literal into a string that needs to be parsed. And that's not like I would not say that this is a good conversion to encourage people to do.

RGN: Okay. I'm just noting that the possibility space is very small then. Like either that use case is not supported or it's supported by something like this. Either BigInt constructor or `BigInt.parse`, whatever. Or it's syntax and so it's very relevant whether a syntax change is considered acceptable or not when we get into this. I'm not proposing to resolve that today, but just making an observation.

OFR: Yeah. I guess I agree.

RGN: Okay. Seeing an empty queue and taking into consideration the way this discussion went, I would like to request stage one for Bigint from exponential notation with the problem statement in front of everyone right now \[“Exponential notation is useful for dealing with big integers, but unavailable for direct use in defining a bigint.”].

JRL: So we're getting explicit support from WH, from MF, from JSL now.

CDA: Oh, I did not realize I was on mute. Yes. I was reading the problem statement for the record, which is that exponential notation is useful for dealing with big integers but unavailable for direct use in defining a BigInt.

CDA: And on the queue, as. I will repeat their support from WH, from MF, and from JSL now. Any objections to stage 1 for this problem statement? All right. Looks like you have stage one. Thank you, RGN. Do not forget to follow up with your key points summary conclusions.

### Speaker's Summary of Key Points

* There was discussion about something like `BigInt.parse(string)`, and alignment between it and `BigInt(string)`.
* There was also discussion about exponential bigint literals like `1e6n`, and some discomfort about supporting the parsing without such literals (which would incentivize dynamic patterns over static ones).

### Conclusion

* The PR was converted into proposal-bigint-from-exponential, which reached Stage 1.
* String parsing and bigint literal syntax expansion are both in scope for consideration.

## Needs-consensus PR: require hosts that provide a custom global object to allow initializing ECMA-262 built-ins on it

Presenter: Nicolò Ribaudo (NRO)

* [PR](https://github.com/tc39/ecma262/pull/3728)
* No slides

NRO: Okay. Yeah. I have no slides. The only thing I have is this description here. So a bit of context. This is a layering request to clean up some interfacing between HTML and 262 in some place where now it's very messy. There is one unintended normative change to this request. We talked about it among editors. We believe it's like perfectly fine. But we need to ask for consensus for it. And specifically the normative change is that, so right now the global object of a given Realm is created by the host and not by 262. This request does not change that. And after the host creates this global object, ecma262 defines its own built-ins on it. So for example it defines the Array global or the Map global and all of those. Right now the global object provided by the host is allowed to throw on that definition. And that will just then make the Realm creation throw. But with this change it will be invalid for the host to provide a global object that rejects the 262 built-ins.

NRO: So this does not impact the web. It does not impact any implementation we know of. In practice, a hypothetical implementation that would be impacted is an implementation that allows users to create Realms with arbitrary objects. So they could for example provide a Proxy as a global object or like a frozen object that does not have these built-ins and so will throw on definition. Given this is mostly a theoretical thing we expect it to be non-controversial. But does anybody have concerns with this?

CDA: KG is on the queue with support.

NRO: Perfect. I see no concerns. So I assume we have consensus for this change.

CDA: Yep. Seeing nothing else.

NRO: Okay. Thank you all.

### Conclusion

* Approval for pr 3728

## Machine-readable source of truth for proposal info, delegate info, and maybe more

Presenter: Michael Ficarra (MF)

* [repo](https://github.com/michaelficarra/tc39-data)
* [demo](https://michaelficarra.github.io/tc39-data/)
* [slides](https://docs.google.com/presentation/d/1aP1LDkspsVlvjYRDN63bTIjzP6rz1m6eHbZooGNu9QA)

MF: This topic is about the source of truth for our various pieces of data. So I have noticed some problems. I am not the only one who wants to build all kinds of tooling on top of our data. We talked about earlier DJM wanted to build some tooling for internal use at JetBrains for tracking their positions on proposals and also for sharing information internally about discussions at recent TC39 meetings. We've also heard from researchers previously about wanting to do different kinds of analyses on our data like with how our proposals advance and like what kinds of proposals they are. And that kind of stuff. Right now our canonical data sources are really primitive. They're just like kind of unstructured data in Markdown files and text files and stuff. And all dispersed over like many different places. There's also a lot of missing data. So I recently went through and added all of the missing meeting notes to proposals. I have an open PR right now. It should be merged soon hopefully. But it adds 600 meeting notes links to the proposal README. Which if you look at the proposals README afterwards it's not the best interface for that kind of data. And I also want to track more kinds of data that we don't currently track. We've heard proposals from like MBH previously about wanting to tag proposals with different kinds of topics. That kind of stuff. We don't have that right now. And that would just bloat our README files even more. So yeah. This is what the current state-of-the-art looks like. We have a bunch of different READMEs. The proposals are kind of split across different files. We have these lists of meeting note links. Which are just linking to the year and month of the meeting that they were presented at—and are at the moment really incomplete. So I want to do something like this. I want to have a JSON file that describes all these kinds of things. The same kind of thing but available in a structured format. And we could do cool things like this.

MF: So I have a [demo](https://michaelficarra.github.io/tc39-data/) of just—I AI-generated a little static web page from this data. So you have a repo that has this JSON file in it. And every time I push to it, it just automatically builds a GitHub Pages page and publishes this web interface for searching and filtering the different proposals. And now you can see like AsyncContext has the full list of presentations there. And it's much more reasonable. And you could do anything you want with it. Really, people can build these kinds of tools. We can obviously have a canonical proposal list web page that is in the GitHub Pages for the proposals repo or something. But I think this would be a much improved experience as well as now having access to structured data so people can do whatever they want with our data. There we go.

MF: Similarly delegates.txt I think is an awful way to be managing this stuff. It has worked decently enough for like when I'm note-taking. I can Control+F somebody's name and then find their abbreviation. But it doesn't have their GitHub handle in it for instance. So I have to go to the TC39 organization on GitHub and search for their name and hope that they have their name listed on the GitHub profile and I can find from that the GitHub handle and I can also find their affiliation. It's just really really clunky. So we can do the same thing. I can just make a JSON file and we can have delegates. It will use the structure to enforce the fact that we can't have duplicate delegate abbreviations and we can have all sorts of tooling on this. And we can do something similar. This is also on the demo page if you follow the demo link in the agenda. Then we can do the same thing just like searching for delegates. We can filter by active. We can get… you know it's all in one place now right.

MF: And again this is just an example. I'm not just trying to get to this point. I'm just trying to make the data available so people can build more tools like this. You know better things than this. And we have other sources of data too. These are just the first two. I also started working on making the TC39 process available. We have our normative conventions, that would be nice. We have all this information in how-we-work. The agenda documents themselves are also structured data that's in an unstructured format that lots of tools process and operate on. TCQ that you're using right now parses these agenda tables. We just merged a pull request to do agenda ordering enforcement in CI, and that's re-parsing this unstructured data and it has to account for all these edge cases with people doing things slightly differently from each other. So it would be better as structured data somehow. And the structured data doesn't mean manually editing JSON files or anything like that. For all of these things you can also have graphical interfaces to them, so that it's a better experience all around. Similarly we have upcoming meeting dates and locations like that could be pulled in for calendars or for whatever. I also think that technically—I'm presenting this to committee hoping that we get sign-off to go ahead and do this. I think technically this is within secretarial discretion. I think JHD could just go do this if he wanted to. But I think it's the right thing to do to run it by everyone.

MF: So yeah. Go ahead and take a look at this repo I have. That's where the demo page is being generated from. That's an example of where I want to get to. I'm not looking to make these—they are just the example right. I'm just trying to say like we should have structured access to our data. Or a structured representation of our data. However, how we do that is—I'm totally open to it.

MF: I wanted to acknowledge that we also had a previous somewhat-along-this-line effort called dataset. This was kind of not exactly what I was trying to do. What I'm trying to do is make the official canonical source this repo. The dataset repo was the other way around. It was trying to parse notes documents and stuff and make them available structurally but not be the canonical source. Which is not the thing I'm trying to do. And I've talked to them—so this was maintained by JWS and I got a message today in support of my new effort.

MF: I also wanted to show that W3C has this kind of thing. They use these REST APIs for accessing everything about their organization. So you can look up people and their affiliations and if you scroll through this web page you can… they have tons and tons of data that's available through this API which is really useful. I think we should kind of follow that example. And that's it. I wanted to open it up to discussion.

LGH: Yes. So even though MF and I talked to each other at least once a week on the editor call I was not aware he's building this. And I built the exact same thing by accident a few weeks ago (<https://proposals.fyi/>). I sort of got it in a half working state, put it online and then moved on and never really told anyone about it. So this is not to blame or anything. It's just a happy little accident. But yeah. Definitely a big fan of this. My initial motivation was sort of wanting a visualization when proposals progress and sort of when they get tests and how big the gap is between stage 2.7 and tests and stage 3 and all of that. And I sort of turned it into a generic thing. Over time. So I would definitely be interested in unifying this. Obviously I don't want to maintain my own thing. If there's a bigger project that other people could be involved in as well. So yeah. Feel free to have a look if there's anything—mine is more like a timeline. And I also have when proposals split from each other, when they merge into each other. I do find all of that very interesting. So yeah. Definitely open to sort of providing my dataset, merging it into this and then having a collaborative thing. That's all.

DLM: So yeah. This looks great. I maintain some internal tooling using existing datasets which are functional for that. But as you pointed out there are things that are missing. So I think yeah. This is good and would be an improvement. Thank you.

OFR (on queue): ❤️ (also would tie into internal tooling) /eom

SHS: is on the queue with plus one. I never know how to find affiliation and delegates list. Would love to have an easier way.

LVU: +1. Sorely needed. For proposals I hope we can keep metadata in the proposals repo and have an automated process that aggregates rather than having proposal data scattered across multiple places. Perhaps that's already the case. I missed that part.

EAO: Having a way to see a list of proposals I'm championing is great.

CDA: So yes. I do like the idea of having these datasets particularly if they are regularly updated. I had also mentioned to MF earlier that I think it'd be great to be able to track delegate history. So for example many delegates have represented different Ecma members at different times. Some have been invited experts at different times. That's useful information at least historically. I'll note that we do have you know I do have code that exports we the committee basically considers the source of truth for delegates and invited experts, the GitHub team membership because that's the thing that we curate the closest. And so we have an export that spits out all of the delegates and the IEs and their affiliations and we send this to Ecma on occasion to make sure that our data is as consistent as possible. So perhaps that could be leveraged. But again that only includes the current state of things. That doesn't really help with historical things unless people are sitting in the emeritus team of a former ECMA member.

CDA: It's a good segue into my next topic which is you know I'm concerned about what's going to be the source of truth and issues with data consistency and things being updated one place and not another place. You know we're not going to solve for that here. That's just something we'll have to wrestle with. And then finally I did mention this to MF. I have some concerns about the delegate list with their affiliation and GitHub handle and everything being extremely public. MF correctly pointed out that the information is basically public already. (omitted). But (omitted) is a different thing than having a very public delegate directory searchable and filterable etc. So I really like that. I echo some of the comments made that it'd be great to be able to find people's affiliation more easily because I also wrestle with that at various times. Every meeting and between meetings. So I would really like that. I would just hope that we could find a way to make that not completely public to the entire internet. So I don't know. We could talk about ways to do that or if folks how folks feel about that. But I am slightly concerned.

CLA: Support.

DJM: Plus one. Thank you so much for starting this activity.

LGH: So a while ago someone made something similar for WHATWG (<https://zcorpan.github.io/whatwg-contrib-report/>). Which has the big flaw that it attributes all the commits someone made to where they currently work. Which I am strongly not in favor of. So we should definitely avoid—like, if we do want attribution to the current delegate affiliation it needs to have past history. That's all.

MF: Yeah. I think I agree with—I think CDA was the one who mentioned this: having the delegate affiliation history rather than a single affiliation would be a great improvement to the data schema here.

CDA: Great. That is it for the queue.

MF: Okay. Well I mean that sounded like basically entirely positive feedback. I'm really glad to hear that. I will work with JHD to first start with the proposals data. Get that available as structured data. I think one thing I didn't—I do want to also—like, I think you can see here on this repo, I want to publish it as a library that you can depend on. So something like publishing to npm as `@tc39/data`. Something like that. We will include all of our different datasets. If you have opinions on that let me know. Yeah. So I'll work on getting our proposals list READMEs. I'll convert it to a structured form and have a great UI replacement for that before we do so. And then I'll move on from there. If you have any opinions on what to tackle next, like the delegates list or anything else, feel free to get involved. Message me on Matrix I guess.

MF: And for CDA's concern about privacy I will start a discussion on the Reflector—I guess is the best way to handle that. And I think yeah because of CDA's point about the relative availability of this data even though it is public I'll probably scrub the mention of (omitted) from the notes and that way we're not exacerbating the issue that CDA is concerned about. Is that cool?

CDA: Yeah. Sounds good to me.

MF: Okay.

CDA: Yeah. A quick note to expand on my concern about that being searchable and public is at IBM we used to have that. We used to have a completely public employee directory and that was a problem for reasons that you can probably imagine. So I've kind of got a little bit of you know PTSD from that I guess. All right. Nothing else on the queue.

### Speaker's Summary of Key Points

* centralised, structured data is better than disorganised, unstructured data, so we should convert our data and make it more available
* we can have better ways to navigate the data
* people can build tools

### Conclusion

* MF will work with JHD to start making our datasets available as structured data
* will start with proposals repo, including a UI
* MF will meet with chairs to privately discuss privacy concerns related to delegate info

## Needs-consensus PR: make `Promise.try` use PromiseResolve in non-error case

Presenter: Kevin Gibbons (KG)

* [PR](https://github.com/tc39/ecma262/pull/3883)
* [slides](https://docs.google.com/presentation/d/1x7FdF7RdGBCI6TVHrbtBMAw5tvXI2mMDthqcd5n8rc4/edit?slide=id.g106f4536d9_0_109#slide=id.g106f4536d9_0_109)

KG: Hello everyone. I am here with a proposal to change a proposal that landed not too long ago. Which is `Promise.try`. Which has an interesting history because it was something that existed in user land libraries for a long time. Before shipping on the web about a year ago. But the user land libraries are still using their user land thing. So changes that I am proposing here would of course only affect the native one. And I'm hoping we can get away with this normative tweak to something which has technically shipped. There's a pull request and tests.

KG: Okay. So what is my proposed change? Well if we look at the MDN description of `Promise.try` it suggests that you are using it for cases when you want to call a possibly synchronous possibly asynchronous function and ensure that you get a `Promise` out. The natural way to do this would be `Promise.resolve` of the function. But if it's synchronously throws that doesn't catch the error. So `Promise.try` according to this description and also my own intuition is basically supposed to be for when you want to write `Promise.resolve` of a function but also want to catch synchronous errors. So something like this. Is what I imagine when I read that description or think about what this function is for. But it's not actually that. It is something else. This is subtly different. Mostly in that the version that we actually have will wrap any return value. You may recall that `Promise.resolve` has this fast path special case for when the argument to `Promise.resolve` is already a native Promise. Or to be more precise it is when it is a native Promise whose dot constructor property is the built-in `Promise`. And that also works for subclasses of Promise if you have a subclass of Promise, resolve will check the dot constructor and that ensures it is a subclass of Promise.

KG: Anyway basically `Promise.resolve` isn't supposed to wrap things which are already Promises. It lifts anything that's not a Promise. And just acts as the identity function on Promises. So this difference is only relevant on the happy path. The case where you don't get a synchronous error and you are returning a Promise from your function. So basically in the case when you're calling an asynchronous function and I think if this is that the path where you expect the least change from `Promise.try` because the whole point of calling `Promise.try` is when you want to handle someone giving you a potentially synchronous function in a place that you accept asynchronous functions. So more concretely this snippet of code I am proposing to change so that the second line would become true. If you give it something which is already a native Promise or sorry you give it a function which returns something which is already a native Promise then it just gives you that Promise back.

KG: So again this is just it better matches my intuition. The other reason and the reason I was actually motivated to bring this is that it saves two micro task ticks. The Promise constructor giving you a new Promise means that excuse me means that you have another entry in your chain of Promise then functions when you're trying to use the result. So this came up for me in the context of async iterator helpers where I was calling lots of potentially asynchronous potentially synchronous functions and I wanted to do this lifting but I noticed if I was using the native `Promise.try` my ordering was getting messed up because I was adding these additional micro task ticks. There is a proposal where doing this Promise wrapping might someday only add one tick but it will always add at least one tick. And for cases like the one that I was using that makes it unsuitable. And even for user land like microtask tick isn't totally free. So it's nice to be able to get rid of those. But the primary motivation that I want to present is just that it better matches intuition.

KG: Okay. So this is changing something that already shipped. Is it web compat? It is a little bit hard to tell because almost all uses of `Promise.try` are using user land stuff. I was unable to find any native uses but that's just because it is swamped by the ones that were using user land libraries that look exactly the same as the native one. That said you have to be doing something pretty weird for this to break you. You have to be depending on the exact microtask ordering or the identity of the returned Promise. And both of those are quite unusual things to do when working with Promises. Microtask ordering is also like somewhat inconsistent across engines in some functions anyway. So it's unusual to depend on that. Sorry, not to say it varies for `Promise.try`, just that there are other functions in other parts of the web platform where the microtask ordering will change. So people usually don't depend on the exact microtask ordering. That's a weird thing to depend on.

KG: Anyway here's the proposed change. It's pretty simple. It just says instead of always doing `new Promise()` you do `new Promise()` in the error case and `Promise.resolve` in the non-error case. Here's the full spec text rendered. Like I said, there are tests in test262. No one's reviewed them. But yeah I'd like to ask for consensus for this change. Let's see the queue.

WH: I'm curious what the rationale was for picking the current behavior.

KG: So JHD was the champion and can maybe speak if he has a better answer but my understanding is that we were just copying the way it was implemented in userland functions and userland functions implemented this before `Promise.resolve` existed with its fast path. I did ask at the time I was bringing this up originally and JHD said that when he was championing this proposal he had not thought about doing it this way.

CDA: Just noting that JHD is not currently in the meeting.

KG: Yeah okay.

CDA: We will not have the benefit of his perspective beyond what you've provided. There is nothing else on the queue right now.

KG: Okay. Does anyone have opinions about this?

CDA: There's a plus one from MF. Support.

CM: Plus one, feels like a straightforward hygiene improvement

ACE: Plus one, 'down with the ticks'.

CDA: You have support also from DLM and WH. Sounds like you have consensus.

KG: Okay. All right. Thanks very much. I'll take that as consensus and I'll try to get I guess the order here is I will get try to get the Test262 tests merged which will then flow into implementation issues. And for normative changes like this I don't know what the current editor group stance is but when I was an editor we tried to not land normative changes even these PRs until there were shipping implementations. So probably what will happen is I will land the Test262 tests and implementations can then fix to match the proposed spec text and then we will land the pull request someday in the distant future.

CDA Great. Thank you.

### Speaker's Summary of Key Points

`Promise.try` always wraps its result in a new Promise, even when the callback already returned a Promise. This makes it unlike the `Promise.resolve(func())` intuition in the identity of the returned Promise and in additional microtask ticks. As far as I can tell this is just because we copied userland implementations which predate the `Promise.resolve` behavior. I suspect it would be web compatible to change.

### Conclusion

* Committee supports this change.

## Await Dictionary for Stage 3

Presenter: Ashley Claymore (ACE)

* [proposal](https://github.com/tc39/proposal-await-dictionary)
* [slides](https://docs.google.com/presentation/d/1pH5SCZRJaN-HFeOn0WZ9KD64vvunPZdxhyYuMMHZLC8)

ACE: My name is ACE. I'm a delegate from Bloomberg. So the proposal, Await Dictionary. I'm hoping this proposal isn't a big surprise to anyone that's been around for a while. It went to stage 1 back in 2023. But for people that are new to it, here is just a summary. So we're currently in stage 2.7. We got to stage 2.7 in November last year. The problem is centered around code where they're creating an object, they've got multiple, async things. This is bad because we're doing a waterfall. We're not going to start getting that really expensive color or mass until the previous ones are finished. You— people then typically go, "Okay, I'll— I'll avoid the waterfall. We've `Promise.all`. `Promise.all` is not great as a, pass in more and more arguments." Because you now might mix up the order. So here, we're accidentally assigning color to shape and shape to color. So people then might try and extract things out. They'll first just go await all the Promises, in parallel, and then await them. This is also bad, because of meant one— I don't know. I don't love the code, but on a more technical reason, if, if shape request throws— or rejects, sorry— then like this will throw, and then maybe you've got a higher level like this. You're probably— well, you're in an async function if you're using await. So that Promise will reject, and it'll bubble up, and you might have like a try catch somewhere. But, this Promise is just kind of left angling, and so is this mass request one. Like, no, handlers have been attached to them yet. So if these reject, they'll be treated as an unhandled Promise rejection. So what we do in this proposal is we give you a named version of `Promise.all`. So we say `Promise.allKeyed`. You pass in a kind of your dictionary of Promises, and then you get back out an object. So you can destructure with the names. So now we can't mess up the order. And also, handlers are all being attached equally. So if you won't have a non-handled Promise rejection. Unless the outer Promise you're creating, is unhandled. So the name comes from matching with the already advanced, `iterator.zipKeyed`. So that's where we have the keyed name from, because it's basically the exact same thing, but for Promises. And then we also include the same thing for `allSettled`. You have `allSettledKeyed`.

ACE: So we have spec text already, because we're stage 2.7. The only changes since going to stage 2.7 is LGH has very graciously been sending us PRs as to keep us up to date with editorial conventions and also just, some tidy-ups, but no actual, normative changes. The big change is we now have tests merged thanks to, a colleague of mine at Bloomberg, [Daniel Asaria](https://github.com/danialasaria). He has kindly worked over a series of PRs and got these merged. So we've got tests for allKeyed and allSettledKeyed. Then we have, 44 or 45 tests for both. And we're already at 100% test passing for both Boa and SpiderMonkey, which is really exciting to see. And I think the test coverage is really good. I won't try to say that it's impossible to write an implementation that is wrong, yet the tests don't catch it, but I think it would be very, very hard. We've really tried to think about, not just the typical boilerplate tests, but also about the bits of the proposal that are more interesting and you might easily miss if you adjust trying to implement the spec based on what you think it might be, or you're trying to optimize something out. The main complexities with the spec are around the fact that, like other Promise thenable, they are designed such that they handle thenables. And so there's nothing stopping someone creating their own version of a thenable that doesn't behave like a Promise, it calls the resolve function multiple times. Or it calls it synchronously. And the spec is written in a way so that we define exactly what should happen. In those cases, and the tests do that as well. If there's also complexity around the objects you might pass in, if it's a Proxy, there's a whole bunch of weird things that might happen when we're, getting the keys and checking if they're enumerable. So we have cases that handle— you know, if get own keys throws or get property description throws or something like that.

ACE: So yeah, asking for stage 3.

USA: Great. Let's look at the queue. You have two upcoming topics. First, we have JHD.

JHD: I was going to say I support stage 3, and I've already built polyfills that pass the test 262 tests, and, yeah.

ACE: Excellent. It's great to hear, JHD.

USA: Great. Thanks. Next is LGH

LGH: Support for stage 3.

LVU: Support stage 3 as well

DLM: I'm just going to say support for stage 3 as well.

DRO: I support this one too

USA: As well as CDA. Who also says, I support this. Oh, and he's spamming, I support this now.

CDA: That's my subtle, reminder to people that to the right of the buttons, there's a little dropdown there where you have a default canned support message that you can select if that's what you were typing. And you can also edit it and add other saved topics or, edit the support response to whatever you would like.

ACE: Thanks for the support, everyone. It's really exciting. I'll, do a summary and conclusion for the notes. Async.

### Speaker's Summary of Key Points

* A reminder of the motivation for the proposal was given
* Spec changes since November have been purely editorial
* Since November we now have 89 tests merged to test262
* Boa and SpiderMonkey are passing 100% of tests
* There are also polyfills that pass 100% of the tests too

### Conclusion

* Consensus to advance to Stage 3

## Import Defer Stage 3 updates

Presenter: Caio Lima (CLA), Nicolò Ribaudo (NRO)

* [proposal](https://tc39.es/proposal-defer-import-eval/)
* [slides](https://docs.google.com/presentation/d/1pH5SCZRJaN-HFeOn0WZ9KD64vvunPZdxhyYuMMHZLC8)

CLA: Okay. Let me move on. See, if I— if I start to break now, please interrupt me. So yeah, hi everyone. For some of you that don't know me, I'm Caio Lima. And I'm part of the champion group of Importifer, together with Nicolo. And, I mean, I think that is more people in the champion group as well, but the presentation today is— I'm representing mostly me and Nicolo here, and as a delegate of Igalia. And this work is a working partnership with Bloomberg as well. So the presentation is about Importifer, stage 3. Updates. Let's just start, with this part of the status of implementations that we have so far. So the good news is that Importifer is being implemented in advance in the implementation. In at least all the major browsers, VMs so far. So for v8, the status that we have is that it's implemented behind a flag, behind a runtime flag. It's now being fuzzed. So as soon as we get, a period of stability, not getting security issues or issues coming up in bugs and etc., at some point, the team is going to feel more comfortable to unflag and ship. And this is the same for Chrome. I mean, the whole process is actually shared between Chrome and part of v8. But if we look to Deno, Deno already is shipping a version that is enabling Importifer by default. And that is work being done on Node.js to import, mainly the part of dynamic imports. For Importifer as well, from people from coworkers that we have here at Igalia. And the JavaScript core situation is that it's also implemented behind a flag. I saw that the implementation includes some integration already with Web Core. But I'm not sure— and I don't have, any information that the status of Safari, if it's possible to enable-by-default in any tech preview or anything like that. But the thing is that Bun is already implementing— or is already enabling the feature by default. And that is work, already work in progress for SpiderMonkey as well. Okay, so for the last, I think, two months, since we last talked about Importifer, there were three new issues open into the repository. And one of them is actually a bug found by the fuzzing from v8. That is a bug in this spec. And also in the implementation. And the other two are actually topics that opening discussions about the design of some parts of the proposal as well.

CLA: I will start with the bug because I think it's one of the most critical ones. But the other two, they are also important as well. So this is the issue number 85. The title of the issue is properly check if a strong connected component state when looking for a syncing appendices. I think the title is going to make a little bit more sense whenever I give the example here. But just before giving the example, let me give you some context. Whenever we try to check if the status of a module is evaluated or not, throughout the spec right now, we actually do that looking up for the cycle root instead of the module itself. And the thing is that, the way we have the specification right now for Importifer, main two points. So one of the obstacle operations called gather asynchronous transitive dependencies in order ready for a sync execution. Both of them actually check the status using the module itself and not the cycle root. And this is actually problematic. So let me show you the example where this comes up to become more clear what's going on. So imagine that we have this cycle here. It's a very simple cycle. We have A that does— that has a dependency on B. And it has top level await and also B that has a dependency on A. So whenever we actually do import of A, what is going to happen throughout the execution of the algorithm here for the module is that, both of the module is going to move their status to evaluating. But since A depends on B, and the way the entry point A is here, whenever we look up for the dependencies of A, we arrive in B. And then, B goes back and cycles back to A. And then, what happens is that, since B doesn't depend on anything else, and can't evaluate already, they move its evaluation and finish its evaluation. Moving to evaluated. But how— since A has top level await, what happens here is actually whenever the statement of await is reached while A is being evaluated, it's going to move the status of the evaluation to evaluating, I think. So we will end up with— after, the import A, we will get, the output of import A is going to be a Promise. That is going to settle whenever, we finish the evaluations of A. But the graph is going to end up into this situation. So before A be fulfilled, if we have a situation where we do a dynamic import of C, and the C has an Import defer on D, and D does— has a dependency on B here, so we will have, the situation where actually C and D, they kind of transitively depend on A as well. But what happens is, at the beginning of the evaluation of C, by the spec and the semantics of Importifer, we first need to get all the asynchronous transitive dependencies of C, because the design of the proposal that we intend right now is that, make C evaluate— wait for all the asynchronous dependencies of C finish its evaluation. So we can, synchronously evaluate C in this point here. So the way we do that is through this abstract operation. And the expectation from this graph here is that whenever we call gather a synchronous transitive dependency, we should actually get a list with A. However, if we look to the spec so far, I'm not going to step by step here, but basically, like, whenever we recurse at this point, we see that on step 6, we check for the `module.status`, if it's either evaluating or evaluated, we return an empty list. We create the empty list in the step 2, and we return this as an empty list. So if we go through, what happens is that, we gather asynchronous dependencies of C, that we will actually call recursively to D. And then we eventually reach B. And B is the status evaluated. So we never actually have the chance to go through A and check the status of A here. So what is going to happen is basically, it's going to return an empty list. And skip A. So given this happens, C starts its evaluation and finishes evaluation. But what happens is that if eventually we call n as full here, and n as he presents namespace object, that has a deferred module for D. So the expectation here is that the evaluation of D should be triggered. And at this point, we also do a check to see if it's able to evaluate D asynchronous in this case. So ReadyForSyncExecution, this is a very similar algorithm from gather asynchronous transitive dependencies as well. And they also have the same idea of, recursing through the modules, looking up to the status of the module, and we do have this short circuit here whenever the status is evaluated, we return true. So what happens is, again, we call ReadyForSyncExecution transitive— ReadyForSyncExecution of D, that we'll call ReadyForSyncExecution of B. You will see, evaluated and, short-circuiting never, seeing the status of A. So this is going to return true. But the problem is that this will make actually `D.evaluate` return a Promise that is actually pending on A. And because of course, A is still not settled yet. And that actually breaks an assertion that we have in the spec right now. So what happens is that, whenever we are able to call `module.evaluating` to a module that was deferred, it should actually execute synchronously. So the state that we are allowed for the Promises here is either fulfilled or rejected. And yeah, so that's essentially the bug.

CLA: So the fix that we are proposing here is actually to change the spec to instead of look up into the status of the module itself, check for the cycle root of the module. So the idea is to introduce this— the proposal is to introduce this new abstract operation called `isModulelSccEvaluated`. So basically checking if the whole component, the strongly connected component, is evaluated. And if it's evaluated, we return true. Otherwise, we return false. And there is a little bit of boilerplate here because there are some situations where the cycle root might be empty. But the thing is that, if there is a cycle root into another module, we get the status of the cycle root. Otherwise, we fall back to the status of the module itself. And of course, go over, asynchronous transitive dependencies and also ready for sync execution and change either step 6 here to instead of look up to the module, we use this new abstract operation. And, also instead of looking up into the module itself, we look to the cycle root instead. And use the abstract operation as well. So with this change, so the behavior that we will have in this case is like that. So whenever we call import C again, gather asynchronous transitive dependencies is going to return A. With essentially make C not start its evaluation, then what's going to happen is, C is going to wait until A is fulfilled. It's going to register itself as a dependency of an asynchronous dependency of A. And whenever, A finishes evaluation, C is going to start its evaluation of the awards and, instead of moving to evaluate, it's going to move it to status to evaluate this thing as well. And at this point here, whenever we call `ns.full`, we will be able also to return for ready for sync execution of D. We will be able to return false as well.

CLA: So I think that's the part that I— before moving forward, I would like to check how the queue is. And ask for consensus, like, on the change that we are proposing so far.

USA: The queue is empty at the moment.

CLA: Yeah, I cannot see the queue for now. But let's wait a little bit to see if anyone has any concern. Should we consider that I have a consensus, though, for this then?

JHD: Yeah, sorry. Consensus for what? This was an update section. Oh, yeah. So this is the bug. And that is a fix being. I'm also not seeing a presentation. Are you supposed to be showing something?

CDA: There is a presentation.

JHD: Oh. It's not showing on my end. Okay. Maybe it's just me.

CLA: So the consensus that I'm asking here is, to the fix for the bug that we found. So do we have a consensus?

CDA: There are items on the queue. USA, are you there?

USA: Yeah. Sure. First, we have KM.

KM: I'm for fixing this. I just kind of wonder if there's, a way we can— it seems like we've had these kinds of issues multiple times in the past, if I remember correctly. And I wonder if there's a way we can do a better job at avoiding these types of things. I mean, I worry— like, this particular one isn't likely to be a security bug or anything— but in any engine or anything. But it would be nice to have more assurance that our module loading semantics don't create a bunch of issues. I mean, I think you have other subsequent ones you're getting into. Is it, I don't know, would it be— is it even remotely possible to have some kind of, machine verified proof of, the characteristics that we want of our module loader in general? Just because I don't think anybody has in their brain the entire functioning or maybe it's not even capable of maintaining all of the things / invariants that we care about in the module loader. Not necessarily an action item for right now, but just a thing I thought about.

CLA: Yeah. I think maybe NRO has more details than that, but I know that that is, a project right now trying to do, validation—a proof validation—mechanical proof validation of the module systems. But so far, they are still in the leaking part— linking part instead of, the evaluation part yet.

NRO: If I can give some details there, MBH and I are working together with a PhD student of his to formalize this part of the spec. As you'll know, it's unfortunately a very complex part of the spec. So it is taking a while. We do not know how— what type of results we'll get from there. But hopefully something useful for the committee.

CLA: Yeah. Another thing that actually is useful— I don't know, how JSC does in this case, KM. But, V8 implemented— I think two months ago, fuzzing support for modules as well. And, like, the module— the whole module systems is being fuzzed right now. I think we found this bug from motherboard fuzzing parts. But I've been seeing, other issues that were more related with v8 itself. But at some point, looks like if you see the coverage for test 62 and potentially the coverage of all the implementations, we don't have, a lot of conversion ESM in general, you know? So maybe this fuzzing support on Fuzzilli actually will help also have more conversion in general.

KM: That makes sense. I mean, I guess if we do that, it would be good to make sure we're very thorough about putting— I mean, I haven't been on the implementation layer also, but in the spec, all the invariants that we actually expect the module loader to have. And implementations can add the same assertions. And then fuzzing will hopefully bind to those assertions if they are wrong. Or, I guess, in theory, AI modules can try to construct ones that hit those assertions.

CLA: So yeah, that is really a reply on the queue from Kevin regarding fuzzing, right?

KG: Yeah. Yeah, I was just going to say, formal verification, it's great. Fuzzing also great. And a little bit independent. And you don't necessarily need a real implementation. It seems like the sort of thing where you could write down, a small part of the module loader and fuzz that more directly. Which might be an easier task than formal verification. Especially with, yeah, just because formal verification requires you to do all of this theory building as opposed to just sort of blind implementation.

KM: Yeah, totally. I agree. And I think Kevin— like, that's where having the authors of these proposals put their assertions— their invariants— assertions.

KG: Strongly agree. Invariants in the spec, A+. There are a good number already.

CLA: So we're moving on the queue, I think. It's OFR?

OFR: I just wanted to plus one this that I think the module system is like a part of the spec that is very easy, it seems, to get wrong. It's very easy to invalidate invariants and that could use more scrutiny. I think to the question before, whether this was now a security issue or not, I mean, we don't track it because it's not shipped yet. I think it's safe to say that many of these issues could be turned into a— into some sort of a security problem. So this is quite important. And when it comes to fuzzing, I think there is an extra complication here that is that mostly— like, a big part of the module loading system is kind of at this boundary between HTTP fetch, render, and JavaScript engine, which makes it really hard to fuzz. So yeah, it's also not a great tool to rely on in the case of modules.

KG: Well, that makes it very hard to fuzz a real implementation. But when you are just concerned about correctness of the spec, you could just have a toy implementation just of the module machinery. You don't even need to do that in an engine. In order to do this sort of thing.

OFR: Yeah, that will give you some of the bugs, I guess. Yes. Like, that will give you the spec bugs. Yeah. True.

KM: It's also probably possible to have— when you have a lot of these invariants in here, have passed to an AI model— asked an AI model to try to construct counterexamples that would cause problems or break them. It's generally decent at that. Even if you don't actually have code.

CLA: Yeah. Maybe probably you need— I mean, I try to do that sometimes with Claude Code and I get blocked. Because they think I'm actually trying to find a security issue. But yeah, if you have the ability to kind of work around all those bug radios, it would be awesome as well. I mean, I was trying to find security issues, but not, to exploit those.

USA: All right. For the queue, we have support now from DLM, JSL, now, and PKA. And that's it for the queue. Maybe let's give folks a minute. Although nobody's adding anything to the queue. CLA would you like to conclude?

CLA: Yeah, so given, the status of the queue so far, I think I consider, the proposed solution for us to change the spec and fix the assertion is consensus. And we now need to essentially, update the implementations that are broken, though.

USA: All right. I don't hear any dissent to that either. Would you like to— sorry, I meant— would you like to speak out a summary or a conclusion?

CLA: Oh, yeah, sure. So the conclusion here is that—

NRO: Sorry, slides are not there yet. Sorry, CLA, let's finish presenting.

CLA: Oh, yeah, okay. Okay. Okay. Okay. Okay. Yeah, there are, two other issues as well. Sorry. I will stop, the queue. Also, again, and after, two times before, the conclusion.

CLA: So the second issue that we got in the repository is the issue number 83. So the title is, should gather asynchronous dependencies stop traversal when a module is evaluated, I think. So this issue was opened by Yoshi from, I think, it's from Mozilla implementation, looks like. I don't know, if it's a Mozilla employee person anyway. But the thing is, the person is involved in implementing Polyver or SpiderMonkey in Firefox. And then, we had this issue where whenever we have this situation, when there is a cycle between a module that is importing, has a dependency of using static deferred imports, and another module has a dynamic import, we can have this situation of that block. So it's too abstract. What I'm trying to say, this situation here in this screen. So if you have a module A and A does import defer from B, and there is, a B that doesn't have any dependency, but there is a dependency from the dynamic import through A. We can have a deadlock in this situation because of the following steps. So if we start, the execution calling `import.defer` A, what is going to happen per spec right now is that if you need to gather the asynchronous transitive dependencies of A and, in this case here, we have a B as one of the dependencies, because it has top-level weight, we then, will start the evaluation of B. And we skip the evaluation of A itself. So in this case here, we have gathered asynchronous transitive dependencies of A returning B. And what's going to happen is that B is going to start this evaluation because there is no dependency at all. So whenever it reaches the status— the statement of a weight, we will basically stop the execution of A and skip— move the status to evaluate async. So in this case here, the operation that is being done by B is actually doing a dynamic import of A. So what's going to happen right now is that, A is going to start its evaluation. So what happens is that, given the import defer on top of A, before it starts its evaluation, we gather the asynchronous dependencies of A in this case. Sorry, the slide is wrong here. It should be gathered asynchronous transitive dependencies of A. And then, actually, of B itself. Sorry, it's correct. And then, it's going to return B. So what's going to happen here is that A is going to wait for the evaluation of B, register itself as asynchronous dependency of B, and not start its evaluation. But we have the situation where, B is waiting for A and A is waiting for B. So this is essentially, a deadlock.

CLA: So what's actually suggested into the issue is that whenever we have this situation, we should actually allow A, for example, starts its evaluation and not wait for B in this case. So basically, means that whenever, gather asynchronous transitive dependencies finds a module that is in the status of evaluated, I think, we just, keep, like, the stop the traversal and keep, processing the other dependencies. So, yeah, the thing is that this suggestion comes from a WPT test that actually is verifying this behavior itself. Oh, yeah, there's another thing that is important here. So in this case of A here, whenever we have an access for the namespace, what's going to happen is that, this access is going to throw an exception. Because since NS is not ready to be— since the deferred module of NS, which is B, is not able to evaluate synchronously here, we're going to throw an exception, because it's not ready for sync execution. So the WPT test was testing exactly this behavior. And this was actually mostly overlooked. So I was one of the persons who implemented the test. And it was an overlook on the spec. And it was not, by intention in the end. So we discussed, this meeting in the champion group here and the thing that we— the two points that we want to bring here is that, it's possible to have the situation if you just use eager imports. So it's possible to deadlock a very similar case here if you don't use import defer at all. And the whole thing is that if we apply the suggestion on the issue, what is going to happen is that some valid case is going to stop working. And this design principle that we have for import defer where we would like to make the execution of a module that has import defer tries to execute asynchronously as possible, of course, depending on the graph that you have. And whenever you have a case, for example, where you have an import defer of a module that was started its evaluation because of another dependency outside the cycle, and it's still, evaluated, I think, but eventually it will settle, we will start to throw exceptions not ready for sync execution for those cases. And, yeah, those cases could be valid cases, for example. So, yeah, given, like, those two points, the suggestion that we have here, the champion group suggests to not change the spec. And actually change the expectation of the test itself. And, yeah, based on this discussion as well. So before moving forward, I would like to go over the key to see. If you have any concerns on this direction.

USA: Cool. There's nothing on the queue yet. Let's maybe give it a minute for ourselves. DLM is on the queue saying, "Support changing test end of message." OFR?

OFR: Yeah, sorry. I think I missed the point. So it's the proposal to keep deadlocking, or? I'm—

CLA: Yeah, supposed to not change the spec. So the spec is written, this way. Mostly looking for the direction of whenever we have asynchronous dependency of something that is being imported deferred, we want to eager evaluate those, right? And if we change the spec this way, there are some cases where we would be able to eager evaluate them, wait until, like, they finish to start the evaluation of the module. And if we change the spec, there are some cases where we will never going to be able to do that anymore. So the module is going to start evaluate while, the dependencies are still evaluating, I think,? Did I clarify your question?

OFR: I guess. And NRO is also on the queue saying that the same thing happens without defer, which I guess I wasn't aware.

NRO: It is already not difficult because of deadlock if you have a cycle mixing top-level awaited dynamic imports. In this specific case, in this specific example, it will be possible to avoid it for import defer by making some trade-offs. But, we suggest to keep it similar to how it works without defer. And so keeping the deadlock.

OFR: Okay, got it. Thanks.

USA: That was the entire queue.

CLA: Okay, so can I move forward to the next topic, though?

USA: Yeah. Given that, well, yeah, you didn't need to ask consensus or anything, right?

CLA: Yeah, yeah, that is no consensus here.

CLA: So the last issue is issue number 82 here. So the title of the issue is, "Should we disallow import defer of synthetic modules?" So let me give, like, a little bit of context here. So the synthetic modules are used by hosts, mostly, to implement things that will interact with the ESM. So if you take an as an example, we do have, JSON, CSS, and byte texts byte and text modules that are created on top of synthetic modules. They're kind of concrete classes of them. But also, if you see outside browser scenarios, CommonJS, for example, interacts makes, the common JS modules interact with ESM throughout the synthetic modules as well. And there are some implementations, it's not the case of the spec and also not the spec of some browsers as well. But there, some implementations that are exposed was modules using synthetic modules as well. Some point. So given that, what happens is that import defer is considered, they already work in some situations where basically, they work in everything that can be imported. So you can do import defer on any kind of module. And the thing is, the defer here, as a design principle, we kind of do try to do the best effort saying that we will defer the evaluation of the things. But not necessarily, this is going to happen all the time. So, for example, if you already do import defer into a module that has top-level await, the effect of this is actually pretty much nothing because the top-level await module is going to be eager the evaluator, so nothing is going to be deferred as well. And if you think, in another scenario, more drastically as well, if you have a module that just has declarations in general. That's going to have declarations, an import defer on those modules also going to be, quote-unquote, "useless." Because this whole declaration really doesn't evaluate to anything in the end. I mean, there are some evaluation that might happen, but the thing is that, it's not very heavy loaded to skip the evaluation of those things as well. So, yeah, given, we have this, if we think, the case of JSON modules, whenever we try to import the JSON module, it's not possible actually, it's possible to skip the evaluation, but it's evaluation is pretty simple. It's basically creates the default binding. The parsing of that JSON module needs to happen to load in time. Because we do throw syntax errors if we try to parse the JSON module eagerly in this case of situation. So we wouldn't be able to, for example, skip the parsing of a JSON module. So v8 throughout, some internal discussions, while we were working into some of the module proposals, actually raised these questions that if you're trying to do import defer in such kind of modules like JSON modules or text modules, and et cetera, it's probably, an error because you don't really mean it. It's going to be useless at some point. It's like a mistake. And if it's a mistake, it would be a good idea to try to treat this as an error. So we in the champion group, balanced this kind of things, and we created, these pros and cons of such of taking such a direction. And one of the pros that we have here is, if you use import defer in some situations that they are useless, it's better to not fight the user as soon as possible. In this case here, before the application is running on production, that it's an error and nothing is going to really happen into the application. So they are not going to get their expectations of improving the boot time of their startup time at some point. But when we look into the cons here, is this kind of reasoning of throwing an error for such cases is kind of confusing. Because if it is useless, for some of those modules, it's also useless for the top-level await. And we are not, really considering, skip and throwing in cases where we try to do import defer for a top-level await module directly. And this will also, bring some complexity to the users to understand, which kind of modules they can use defer and which kind of modules they cannot use defer as well. And it's really not possible to, I mean, the expectation of the proposal is that we would like to keep supporting common JS and, deferring the evaluation of common JS. And we cannot ban, import defer throwing in every single synthetic modules. So we would need to create, this way of some modules some synthetic modules they kind of throw eagerly when they are using import defer and others, they are allowed. And this will introduce, some overhead and some complexity, not a big complexity in the spec. But I would like to keep avoiding introducing, new complexity at this point as well. So given those two reasons and, when waiting the pros and cons here, the champion group also suggests the direction of not changing the spec. Keep you allowing import defer behind, this idea that import defer is the best effort. So it can actually pretty much have the effect of the import without defer. There is likely some difference when you do import defer than a common import. But we still think that it's still reasonable, to keep the current scenario that we have right now. I would like to go over the queue. Based on this direction that we are suggesting as well.

USA: First one on the queue is JSL.

JSL: Yeah, it definitely recognizes the difficulties here with synthetic modules. But I think what I would prefer is that this is an implementation choice and that the runtime would get to say, okay, for this particular module, I'm going to ignore the defer. Because I can't do it or don't want to do it. But still leave that option open. You know, part of this is, you know, some runtimes, like, workers, we have additional types of synthetic modules that we might be able to actually implement this on. We don't necessarily want to have a blanket loss. Of this. So I'd very much like to leave it up to implementation choice.

USA: Sorry, NRO, we have a reply by OFR.

OFR: Yeah, so the reason that this came this even came up is that it's actually not possible to ignore the import defer because the way the spec is written, you can actually observe if a module was imported deferred or not deferred. Because in the spec, the deferred and the not deferred namespace have a different identity. So if you have, for example, ambiguous module resolution, then you will get a different result depending on whether the object the module was imported deferred or not deferred. And that's the reason it came up. That said, I think from our point of view, throwing an error is not a great idea either. So I'm actually not, this was presented as came up in v8 discussion. But I don't think it's a good idea to treat deferred and not deferred differently, to be honest. But what we certainly cannot do is ignore it.

CLA: So when you mean, ignore it, just to clarify here, are you meaning, changing anything that we have in spec right now? Or, not changing anything?

OFR: So correct me if I'm wrong, James, but I understood your proposal that basically the engine would just do as if you would have written import without defer. And that's the thing.

JSL: Yeah, essentially, what I'm suggesting is, import defer yes, if you can defer it, if inside the runtime you don't actually defer it, then that would be an implementation choice.

OFR: Oh, okay. Yeah, that's totally possible. Yes.

JSL: But the observable behavior would be the same, either way.

CLA: Yeah. So the suggestion that I'm making here is that, whenever you do import defer, you still, like, keep creating the deferred namespace. All those things still hold and the thing is that what happens basically, if the implementation, for a synthetic model, would like to eagerly evaluate, they do. If they want to actually defer, they do as well I mean, we already have that for top-level await models, right? So if you do import defer in a model that has top-level await, it's going to start its evaluation anyway.

USA: Is that satisfying? Should we NRO, do you want to add to this?

NRO: Yes, I have an answer to JSL. So there is two cases here. One, where the evaluation is observable, and one, where it's not. When it's not observable, you can do whatever you want, right? Because users cannot observe it anyway. Like, for example, not JS built-in modules. Sure, you could decide to, eagerly evaluate that, even if it's important to import defer, as long as, v8 can still build the deferred namespace object. Because, well, there is no way for JavaScript to tell anyway other than maybe measuring performance of them accessing for the first time a property unit. For modules where there is a set effect, we actually talked about this very early on in the proposal with Guy, who was concerned about, I think at the time was the Fastly implementation maybe, where if you have import defer of, JavaScript module. And for some reason, you would want to make sure that the deferral does not actually happen. What you can do is just say, oh, well, actually, my implementation has an entry point that preloaded that module before everything else. So when then you import that module, that's already evaluated. It's still not evaluated, in line with the graph, as if it was without import defer. But it gives hosts a way to, like, well, ensure that the module was already there, already evaluated. It's similar to how, on the web, you might have a script tag that imports a module that has an import defer. But maybe there was before a separate script tag that pre-imported that module that was with deferred and so caused it to be already evaluated beforehand. So I don't know exactly which was the two cases you were considering, but I hope that this can help you for your implementation.

JSL: No, I definitely think that makes sense. I just put a reply there on the queue that I think as long as it's not mandated to be a throw, I should be fine.

USA: Next, we have JHD. Just a heads up that we have, three minutes if yeah.

JHD: Okay. I'll try and make it quick. So, yeah, I don't see any reason why synthetic modules should be special for users. It's I from what I can tell, there's reasons why they're special for implementations. But that's those are separate things. I think that we shouldn't, we should not do this, that we should allow everything to be deferrable. And then separately, defer isn't a guarantee as you talk you just mentioned, right? Like, there's no guarantee that like, it's just it's just an indication that you don't have to load a module right away for this for the current module to work. You don't have to load a dependency right away. So it is always completely fine if you put defer on something and then it doesn't actually get deferred. That's, always an option. So it doesn't really matter if it if an engine chooses not to defer it. Like, that's the deferral is a it's like letting go when I defer a dependency, I'm letting go of it from my module. I'm not forcing it to happen later. Yeah.

CLA: Yeah, I vouch for that as well.

USA: OFR is on the queue saying plus one. And then we have a reply by NRO.

NRO: So I agree. We should not throw and let users do import defer of these modules. I think probably linters should complain. Because, if I do import defer of a JSON module, like, import defer and then put with type JSON in the attributes, that is indeed, a mistake. So I'll agree that the language should not enforce it. I would hope a linter gives me a nice quick line editor telling me look, probably you're not doing what you expect to do here.

USA: And that's it for both the time box and the queue.

CLA: That's the end of the presentation as well.

USA: Okay. Would you like to make any conclusion or dictate a summary?

### Speaker's Summary of Key Points

* All major browsers started their implementation, with JSC and V8 being available behind a flag.
* An assertion failure (issue #85) was found by V8’s fuzzer and a proposed fix on spec was presented
* Discussion on issue #83: Should GatherAsyncDepends stop traversal when a module is evaluating-async?
  * The proposal from the champion group is to not change the spec. This would break other valid cases.
* Discussion on issue #82: Should we disallow import defer of synthetic modules?
  * The proposal from the champion group is to not change the spec, given con points overweight pro points for doing that.

### Conclusion

* Regarding the issue #85, we got consensus of applying the fix that was proposed by champion group, which changes the check the status of the `[[CycleRoot]]` instead of the module itself.
* Issue number #83 and #82, we are following the champion group direction to not change the spec and change tests that are asserting the wrong behavior.

## Thenable Curtailment for 2.7

Presenter: Matthew Gaudet (MAG)

* [proposal](https://github.com/tc39/proposal-thenable-curtailment)
* [slides](https://docs.google.com/presentation/d/1kHq_UqMHGGT8ena8yMlJKgHmohDVqxJvV4hiCB12HtU/view?)

MAG: All right. So this is an advancement request for the thenable curtailment to go to stage 2.7. To update where we're at. So if you don't recall, the goal of this proposal is to provide an abstract operation whereby code can resolve a Promise without running user code. The way it does this is it defers by one tick if and only if the value being resolved is an object where something could run user code. So the new abstract operation here is going to be called SafePromiseResolve. And the criteria that get checked is approximately the object is a Proxy. Or something on its prototype chain is a Proxy. Or something has a "then" property. Which is in turn a getter. The actual specification is up. And there's a couple of little nits on this one of which I do actually want to talk a little bit about. One thing I will say, though, before I get there, is previously a version of this had an opportunity for users to opt into this. I have removed that temporarily. I pursue that under a separate proposal. But for now, I'm focused on getting this one done. And then we can come back.

MAG: The editorial question really is, how do you name the set of internal operations which could potentially actually cause user code to run? So during the 2.7 review, NRO points out that there's no safety against anybody creating an internal slot or an internal operation of `[[GetPrototypeOf]]` or `[[GetOwnProperty]]`, which actually could have code user code run. His original proposal was to name the set where we know it's safe, which I just don't like because it's naming a finite set which could go out of date. What I wrote down as a mitigation here in the current spec text in the repo is if an object uses different steps than the ordinary object for the get prototype of or get own property of operations return true, this basically says that once you see an object that has these different steps, we assume that maybe it could run user code. It does broaden the set of things that are classified as could run user code. And I don't love how much more broad it does. Technically, it actually goes all the way to TypedArray, which otherwise should be fine. So I'm open to further feedback on how to write this. It is kind of an editorial thing. Just that I couldn't quite get to a solution of by today. But I wanted to mention it because it would be a totally fair thing for somebody to be like, no, like, let's block until this gets decided. And I would understand on that front. The other thing I wanted to update on is that I have been having conversations about getting this adopted by WebIDL, which was my original goal for this is that safe Promise resolve should power the WebIDL Promise resolve steps. And this is what is going to ultimately make the web platform a lot safer. Is because it means that web browser developers who are writing code will no longer suffer the indignities of having a thenable come in and mess with everything while their C++ code is on the stack. So I think I've managed to convince some people in some hallway track discussions at Web Engine Hackfest that this is going to be a good idea. And that we probably will be able to make progress on it. But I kind of need to get it through TC39 first before I can start doing the WebIDL PR.

MAG: Another thing to mention there is an existing prototype. So there's this config preference in about:config. You can go down Promise experimental safe resolve equals true. That'll then use in all of the WebIDL resolve spec steps. It will go through the safe resolve path as prototyped by me. I can't say that this means anything for web compat, but I've had this turned on by default for a month now. I have never once noticed anything break. So hopefully it will all just work when it all when it comes time. And now we can talk about the queue. Which I can't see. Sorry.

USA: I can. No worries. First, we have NRO.

NRO: Yeah. So actually, this is a normative question because this affects for some objects what happens when you put them in a thenable position. So regardless of what the conclusion here will be, unless we come to a conclusion now that I don't think we will because I think it's important to have spec text in front of our eyes for this. During 2.7, you should come back saying, “look, this is the conclusion there. Does everybody agree?” The second part of my topic is actually wrong. So I'm going to skip it because KG explains why it's wrong.

USA: Great. That's cheating. KG, you're next.

KG: Yeah. You are saying that the problem with trying to enumerate the bad cases, like, Proxy is that, someone could have their own a host could have its own exotic object that runs user code. The solution to this, it seems to me, is to just be able to ask hosts if something runs user code. Like, we can have a host. Like, just take this operation and stick the word host in front of it. And so the default implementation is to return false. And then if anyone ever writes an exotic object that this is not—this property does not hold. They can put it in there. But in practice, no one is ever going to have such an object. So everyone can continue just returning false. And we can go about our lives. But not, accidentally roll out type arrays, for example, which the second part of my comment is resolving a Promise with a type array is, a totally reasonable thing to want to do. And I think it would be a shame to exclude type arrays from this operation.

MAG: Yeah. Making this a host hook had not occurred to me, but actually, that's not a bad idea. The kind of fits the right shape of this where the problem is that what happens when you do get an object from outside that is got internal slots that you don't really know how they work. So making this a host hook and saying, you know, ask the host, the host gets to say, yeah or nay, mostly it will say nay. I think that that's a perfectly good answer that I didn't come to by the time I'm here.

KG: Yeah. And I would be a little more hesitant if I thought this was actually going to come up very much. But pretty sure in practice, it just doesn't. Like, I'm not aware of any host objects in any platform where the answer would not be "it doesn't run user code".

USA: Moving on, we have JRL next.

JRL: So a host look seems fine to me, but do we really trust that browsers are going to know what good or not good to evaluate? Because they couldn't predict that then is going to evaluate user code. Second, type array in this case, actually doesn't matter. The only thing that would be penalized if I had a typed array that had a `.then` method on it. So I make the typed array a thenable. Then it becomes penalized. And then it only becomes penalized if it's used in a WebRTL spec. It doesn't actually matter for the grand scheme of things. The security vulnerability that we're actually trying to fix here are C++ objects or host objects that are not expected to ever be thenable that then have a dot then method attached to them or their prototype we need to make sure that that then code does not run. So I don't care that typed array, if you do it with a WebIDL, you make it a thenable and then you've tried to resolve it with that thenable becomes slow. The point is that we're trying to solve a larger class of security vulnerabilities.

KG: That's just not descriptively accurate for what the thing does currently.

JRL: How it is being used right now in the spec is only for Promise resolve for this one special case. The fact that is it an abstract operation that says can run user code and is only being used by Promise means we should probably rename it to something that is specific to Promise denable. We just made it a generic algorithm. The thing that actually matters for this proposal,

(transcription error)

KG: I'm pretty sure this guards whether you can read `.then` in the first place. So it doesn't only affect objects which do have a `.then` property; it affects objects all objects which you are resolving a Promise with in a WebIDL spec, which does include TypedArrays.

MAG: Yes. So if you— as the spec is written, as the text is written right now, where you restrict it only to the ordinary object operation set. If you were to have a WebIDL Promise, or a WebIDL project— WebIDL resolve— of a TypedArray, you would in fact get penalized right now because it would return true for property read could— I can't even remember what we called it after. It's gone through some editing recently. Has a user running— a user code running Promise property access. So yes, the— there would actually be impact, and I think would it— is it impactful enough to worry about? I don't think so, but this was some last-minute feedback that I didn't get a chance to resolve, and so I'm okay with saying let's come back and take another stab at this. It is not so impactful in the sense that, there are not a huge number of proposals— or there's not a huge number of things that return Promises that resolve with a TypedArray. So I—

KG: You mean the fetch spec? Like— There's a `.bytes` method on there in response body. I put it there. I know it's there.

MAG: Yeah, no, that one— that one would be impacted, yes. So I think we should find a way to not have TypedArrays be just it being a TypedArray if it is sufficient for it to have a extra tick injected. I think the host hook answer is a good one. I haven't written the text to actually do that, so I would say probably not stage 2.7 today. I need to write that text. I might try to get it done for tomorrow and see if there's a continuation slot. Because it's like a little tiny bit of text.

JRL: I would like to respond directly to that. This is a security vulnerability. It's been present now for months that we know about. I don't think we should delay on this specific case. Also, TypedArray is not observably different. It doesn't matter that this could affect TypedArray. The only way you could ever observe it is if you actually made the TypedArray thenable. So please, let's not wait another 2 months in order to get this to 2.7 and then get this fixed into actual browsers. This is a security vulnerability. We've discussed it enough. Please let's advance this.

USA: MAG, would you like to respond or should we move on with the queue?

MAG: I mean, I'm happy to— the thing is, stage 2.7 is going to be long for this. Not the least of which, because I have to figure out how I'm actually going to write these tests. So I would love to get started on this and not block on this specific small test until we've gotten that. I do think I've got time to get it into a continuation if people want that path, but, you know, I would be willing to ask for advancement right now.

USA: KG's on the queue with an offer.

KG: Yeah, I was just going to say, I can write the spec text for you by tomorrow. That said, JRL says this is not an observable difference, so that makes it an editorial question, which we could resolve at some future time. I would be happier if we just wrote down the host hook; it's easy to do. And we can do that by tomorrow, I'm sure. But I don't think it necessarily does need to block if it's genuinely not observable.

USA: There are replies incoming. Well, NRO.

NRO: It is observable if you really try, if you put a `.then` accessor on TypedArray, it's just not observable in the hopefully normal way that people write code. So it is normative, but it has very minor effects.

JRL: I mean, it's only observable if you do the thing that this proposal is explicitly trying to change. So if you make a `.then` on a TypedArray, and you make it a getter, then you can observe the fact that it's changing. But it doesn't matter that it was a TypedArray because that same behavior is being applied to any thenable getter.

KG: Okay, yeah, I'm just— I am broadly uncomfortable with saying that, TypedArrays are not like ordinary objects for the purposes of this operation. And I think it is, pretty easy to ensure that they are treated the same, and we should do so.

JRL: Okay. Can we go for stage 2 advancement contingent on us writing this host hook? I just don't want to delay this part of the proposal.

KG: Sure, I guess. I don't think this is a delay in practice.

MAG: So NRO's got a comment, and then also I wanted to get to OFR's, which I managed to finally open the TCQ. I want to see his comment.

NRO: Oh, yeah, yeah, I was also in the queue saying I really think you should ask for stage 2.7 now, and this is something we can solve during stage 2.7. It seems like nobody is against KG's opinion. It's actually the same suggestion I gave at the beginning, to have a list and let the host interject in that list. It was just that you were worried about the complexity of maintaining that. But it seems like we have somewhat of an agreement anyway, and you should go to 2.7 and then come back for consensus during 2.7 with the actual fix.

MAG: Yes, and I commit that we're going to get this done by the end of the week, for sure.

USA: Next, we have— OFR?

OFR: Oh, okay. Yeah, this may be a bit off-topic, so maybe pick others first if there's something more on topic, but I was just like, I caught on to this idea of, we— now we have a problem that the spec doesn't tell us what is executable or where can we reach user executable code, and I think this is, like, a thing that comes up and comes up again and again. I would actually be nice to have a solution to this that we could actually have an annotation in the spec that says, "Here, user code will run," and it would actually be even nicer if this was enforced. Like, I was immediately remembered— reminded of a, basically in v8 we have a "does not execute JavaScript" scope, and if you open that scope and then JavaScript runs, then that is a— an assertion failure, basically. And I don't think that would be a good fit for the spec, but basically the opposite would be nice, basically "Here, you are allowed to run." Right?

MAG: Unfortunately, this does exist. Yeah, okay. If you open the spec and hit U, little red dots show up, or little red— I think they're exclamation points— show up being, "This operation can call user code."

KG: It's a box that says UC, which stands for user code.

OFR: Okay, and why can we use that here? Then? Like, then it's broken, or?

KG: So, it assumes that when you are calling, for example, `[[GetPrototypeOf]]` on an arbitrary object, that this can run user code, because it can if you give it a genuinely arbitrary object. This is a case where we are sort of switching on the type of the object, and, like, we need to know how to do that. The spec doesn't know how to do that.

OFR: Okay, I see what you mean, but basically we could have, like— like, basically the thing would be, okay, if you put— yeah, okay, I see what you mean. Okay.

KG: Yeah, the annotation does require a small amount of manual work, specifically basically for these internal methods, where, if you are doing a `[[GetPrototypeOf]]` on something that you know is, either an ordinary object or a typeDeray, then that doesn't call user code, and otherwise it does, and, this— there's a small amount of manual work for maintaining it. So it doesn't— it doesn't save us here.

USA: Next, we have JSL who says plus 1 to advancing to stage 2.7, but would like to see draft spec text for the host hook this week if possible. And next, we have CDA.

CDA: I just want to be clear, about what the expectation is here for the editorial/kind of sort of normative, not really spec change in that: are we proposing to advance to 2.7 full stop, and then, the spec text stuff is nice to have, or is that, conditional for advancing, which, would therefore include sign-off of reviewers as well as editors group? That is a question for JSL and maybe some others, KG?

JHD: I think it requires spec sign-off. It can be conditional on that spec sign-off, but you can't just, leave it— have a nebulous spec change pre-approved.

CDA: Well, I'm not suggesting that the nebulous spec change needs to be pre-approved, I'm just wondering, is it— are we wanting to make sure that that change gets approved before advancing to 2.7?

MAG: So, maybe the actual answer here is that can we schedule a continuation for this for either tomorrow or the day after, for, three and a half minutes, and then I'll make sure that we have new spec text for that day, and we'll just go for there, and then that will be the actual advancement?

CDA: Yeah, we'll schedule a continuation just gentle reminder that you need to make sure that you've got the editors group and the reviewers, I think is JRL and JHD, signed off on the spec change.

MAG: Yep, I'll look at it.

USA: Okay, then next we have MF who says share with editors ASAP so we can review. And that's it for the queue.

MAG: All right. Thank you, everyone.

### Speaker's Summary of Key Points

* User access was removed
* Spec text is written and reviewed.
* Some question of how handle internal methods being overridden; want to avoid being too tight to covering cases which are safe (e.g. TypedArray) but still handling the possibility of arbitrary host overrides
* Host Hook proposed and taken up.
* Encouragement to get this to 2.7 this week.

### Conclusion

* Stage advancement deferred to continuation on Wednesday after Host hook is written

## Secretary's Report

Presenter: Samina Husain (SHN)

* [slides](https://github.com/tc39/agendas/blob/main/2026/tc39-2026-029.pdf)

SHN: Thank you. Thank you for adjusting the agenda so I could present at the latter part of the presentation. I would like to give us, per usual, a report from the secretariat and some additional information based on some activities that are taking place this year.

SHN: I'll do just an overview, give you some update on what has happened at the general assembly, also some recognitions that we have received and are giving, and some outreach, and then the usual annex information, which may be of interest. I haven't shared stats with you all in some time, so I just got two slides. As you may remember, I had mentioned earlier—in my presentation— the last plenary, or even before this year, ECMA celebrated 65 years, and I was looking back at a number of the work items that's been going on. So I did some stats for the last 10 years. Now, these are stats based on what we get from Google Analytics. They're not very elaborate, but they're just one variable that indicates some of the— some of the relevance, or some of the use of the work that goes on with different TCs. And so the top five ECMA standards downloaded over the last 10 years, are just highlighted there, and interestingly, of course, and nicely to be seen that you see ECMA 262 and ECMA 402 quite prominent. Not 100% sure why 2017 has such a peak, but the others seem quite reasonable and that is also quite consistent with numbers across other standards. So I think that's just a good reflection, it's one good reflection of the work being done in this technical committee. I also always do a top 10 downloads of just the year, so I did it for this first two quarters of 2026, and of course, interestingly, the same five standards that have been the top in the top five for the last 10 years continue to be in the top also in the recent years, and you see the certain performance there of ECMA-262 and ECMA-404 in the first two quarters of 2026.

SHN: I also share these slides with the general assembly, also to give the broader community and members an indication of the work being done in different committees. For approval, so on June 20— I'm sorry, on the 30th of June, we had our general assembly, where we approved five standards. I have highlighted the two TC39 standards, in orange, so congratulations to the committee for the work that continues so that 17th edition of 262 and 13th edition of 402 were both approved unanimously by the general assembly, thank you as well for giving the presentation by the chair's report, and also to recognize the work that's being done throughout the committee. We also had a few other standards that were approved and they're listed there, 7th edition of the ECO declaration, 4th edition of 419, which comes from TC53, and last but not least, the 1st edition of the technical report coming from the newly formed TC55, and many few on TC55 are also part of TC39, so I wanted to recognize that, so congratulations also, to TC 55 for the work done for the first technical report.

SHN: Also approved at the general assembly were some new members, I wanted to bring to your attention that AMD has joined ECMA, NVIDIA has joined ECMA, very large organizations, also very good, they're working predominantly for both of them in TC 57, which is the high-level shading language, that's going quite well, so a newly started, so it's great to see these members here, and hopefully we will attract a few other members from the same community to work on 57 and more. The other two members are not-for-profit, Erlang Ecosystem Foundation, they're in TC 54, and I have just made an error, University of Illinois, is not TC 54, it's TC 56 on the AI topic, so I will have that corrected. Okay, that was just to give you a general view of what has been going on with work in ECMA, and also the work, the approvals that took place at the general assembly.

SHN: Next, I would like to just take a moment and I want to recognize a member of TC39 who has been very active; their leadership, dedication has really strengthened ECMA TC39, in many ways, and they were, of course, by TC 39 promoted for an ECMA recognition award, and I want to recognize KG for his work over the many years. KG— this is your citation by TC39, to recognize you for the work you have done over the many years. I'm going to say it's almost 10, I could be wrong, but I know you've been active for many years, and so first I want to congratulate you for your exceptional dedication, your work that you have been doing, and I know now you are an invited expert for TC 39, and I will pause here to give the committee a few moments if any member of the committee would like to also make a few comments, to recognize Kevin for his work, but maybe you can just open your mic and say a few words.

KG: Thank you, I appreciate all that applause emojis, thank you very much.

CDA: Yeah, I'll be really brief, I'll try to kind of echo what I said about this at the GA when this came up, which is that this— what you see on the screen here is a pretty understated way to describe all of KG’s contributions to the committee, that I think most everyone here are probably already familiar with, so you know, really thank KG for all his work on the committee in the past, and in the editor's group, of course, and for all the other things that he does, the bot, the transcription bot he's responsible for, the archiving of chats, and that's to say nothing of all of his work on proposals, and all of that, so yeah, thank you KG, and looking forward to your continued participation and contributions in the future.

SHN: Thank you, Chris, that was very well said, and thank you for bringing that up, and you also did share that at the general assembly, and it was very much recognized.

CDA: We do still have some folks on the queue, there is support for KG from EAO, and MF, and then AKI is on the queue.

AKI: I wanted to take a second, I also said this, or some form of this at the GA, I assume I didn't record myself, but I wanted to mention that KG, you have a patience and grace that is impossible for some people, and that's no shade on some people, I am some people. Kevin, your ability to hear somebody out, even when they're saying something that's completely bonkers, and then help them get to where they're trying to get is really something special, and it's something I have always really appreciated about you.

KG: That's very kind, I can recommend to anyone, spending a couple of years being a teacher's assistant for intro classes at college, because it sure does teach you patience.

SHN: Well said.

MM: So, so first of all, just enthusiastically agreeing with everything said so far. The additional things I want to really focus on is that you have extraordinarily good taste when it comes to design decisions about programming language, and it especially makes a difference for JavaScript, because you know, for over decades now, we've been evolving from a starting point, which is incredibly messy, and trying to guide this incredibly messy language towards becoming a language shaped by better tastes while not breaking the web is an amazing challenge, and it has been wonderful to have your design tastes be a guide on that, and that combined with your rigorous detailed orientation the two of those things together are just a very, very powerful combination, and the result is that language is much better than it would have been without your contributions.

KG: Thank you, MM, that means a lot, especially coming from you.

USA: I think that's all.

SHN: thank you very much. From my side, to share all that for Kevin, because as Chris said, this slide does not state enough, absolutely not, so again, congratulations Kevin for all. We look forward to your continued contribution, and I do look forward to meeting you personally soon, so we can share the award with you personally at a plenary. KG, would you like to say a few words before I go to our next slide?

KG: I look forward to continuing to contribute. Yeah, I, well, you know, pending my continued ability to participate in the committee, I guess, because I'm enjoying retirement currently, so, we'll see what happens.

SHN: You're far too young, far too young, but it's great, stay active. Okay, thank you very much, and thank you to everybody for bringing this contribution, for bringing this citation so we could award this to KG.

SHN: We have a few other recognitions in a different way, that I also want to bring up for everybody here. This year ECMA celebrated its 65th anniversary, and doing so we had a meeting here in Geneva and a small celebration amongst the different contributing organizations and members and some local activities. In this, we received a recognition, ECMA received a recognition, I've taken a picture of it there, from ISO IEC JTC 1, as you have heard many times, we talk about ECMA's relationship with JTC 1, its long-lasting relationship as a category A liaison, which is the highest level of relationship you can have with this JTC 1, where we have been publishing a number of standards, 220+ to be exact, on the fast track, so work done at ECMA has been published at JTC 1, it comes into an international channel, it gives it very high visibility, but not only that, JTC1. On the 65th anniversary they gave us this beautiful glass award, and wrote a citation to which I have summarized here a few bullets in which they acknowledge—of course—our very longstanding work that we've been doing for 6 decades at ECMA. The relationship we have at JTC1 for nearly 40 years, and how they appreciate the contributions from the ECMA Technical Experts into the work of JTC1, but also very importantly, last but not least, is the commitment to continue the collaboration. So this is something that we will want to continue to build from ECMA and JTC1 for also all new standards, new technical committees, and, we foresee that this will be a strong bond with work coming in for more programming languages, perhaps other software, IT work, cyber resilience act has many different aspects and one of the ones that we'll be bringing here is TC54, CycloneDX, so very strong relationship and a very special recognition that we received from JTC1, so I wanted to share that with everybody.

SHN: So we've also got still more recognition coming up, and I don't know if everybody's aware, but I'm guessing you all are aware about the next one, which is that it will be 30 years that ECMAScript has been published. It'll be 30 years next year, that ECMA Script has been published. The last 10-plus years has been the cadence of the annual release. Prior to that, it had different years of release, and you have a great community that works. You saw in my initial slides some of the statistics that really showed the strong prevalence of this of your work and how well it's used in industry. So we would like to do some celebrations next year, and I would love the support and input from the committee so if you have an idea, if you want to come together with a few with a small ad hoc or a small committee or just a few people who may like to create a new logo or a logo that commemorates the 30 year, for TC39, which we can then use and also have it on our website on GitHub and many other items on the maybe the front cover of the standards page if I can get it there. I would also like to celebrate this event as we have the different hybrid meetings coming up in 2027. I do not have an official date and location as of yet, but maybe that's all been identified. It'd be great if you would share that with me, the chairs and then we can do some planning.

SHN: I'd also like to do some swag and so of course if you all have ideas throw them in my direction or in Aki's direction and we'll see what we can do and USA I want to first thank you for your blog that you have on that you do and you've recognized ECMA and the work that ECMA does and how relevant it is for the work. Perhaps your blog we can share we're going to do some new things on the ECMA website or we can create a new blog to really recognize the many years of successful work of ECMAScript. So this is to recognize next year's 30 years for ECMAScript. It may also be 10 years for our royalty-free alternative copy alternative option which is very relevant in the industry very relevant in standards organizations so we may have a reason also to recognize that but I have to double-check that but I want to share this with you and I look forward I really would appreciate some feedback which you may share with me on today's call or at a later time.

SHN: Another thing that we are doing in the secretariat together with not only just the immediate secretariat here who is based in Geneva but we do have a number of different colleagues that are supporting us. Aki is one of them. We have Brian McAuliffe, who used to be previously with HP. He's now joined ECMA for a period of time to really help support some strategic plans. And we have other colleagues who are involved in work that's going on in the European Commission so all of that brings a lot of strength into ECMA but we also want to hear from the members, the participants on how we can collaborate better. I've written some things out here on the benefits to consider which are very much interested by a couple of other TCs, predominantly TC26. I do not know if it is of interest for TC39 it may not at all be, but maybe there's something else but I've written it down there that if there is a thought on that I would appreciate it. Then of course we want to add more visibility. I've mentioned the blog we need to improve on how we work on social media and which social media links, that is not only LinkedIn. And then of course to really have some more initiatives that we can engage and so we can continue to build on the interest of the work we're doing. So just some feedback requests based on the things that we're doing you have these slides you can easily get them and think about these questions. I would appreciate feedback. I would like to start to make differences for each of the TCs. We're already doing it for TC26 and TC20. We do many things for TC39. I'd like to do more. Please think about some of these questions, give me some feedback, and we'll see what we can do to also generate more visibility and more participation.

SHN: The rest of my slides are the annexes that I always present. I will leave you to go through them. I will just of course list here the dates of the next general assembly and executive committee meetings, which are both relevant. One, the executive committee meetings coming up next on October 7th, 8th, it would be important to have a chair's report at that time. It would be nice if the chair's report provided some more details, maybe some technical one-line bullets on some of the work that the TGs are doing. I think the executive committee appreciates that and so does the GA. Just keep those dates in mind for the future presentations by the chairs. Those are your meeting dates which you all know and then there's a list of documents that are listed here. Reach out if you need to see them. I would like to see them just based on the titles. And of course the code of conduct which you probably already discussed at the start of the meeting. And then of course the rules of the invited experts and we have a number of them that are very relevant to TC39.

SHN: Okay, thank you very much. That is the end of my presentation. I will stop sharing and if there are any comments or questions I am happy to hear them.

USA: Thanks a lot. There's MM on the queue with an insightful comment. He says 2017 probably had a big peak or well the peak that it had because 2016 like ES2016 or ES6 or was it ES6? Well, anyway, it was a huge transition and everything's been incremental since then.

MM: Yeah, ES ES2016 was also ES6. Yes.

SHN: Yes, it was. Thank you for that reminder. Thank you. That brings it into perspective. Thank you, MM.

DRO: But if people would like to go early, that's also totally fine. I'm in no rush.

USA: I think let's try and let's try and sneak it in.

### Speaker's Summary of Key Points

An update on Ecma’s recent work, including highlights from the General Assembly, recognitions awarded, outreach efforts and statistical usage of Ecma standards was provided. 30 June General Assembly approved standards and members, including:

* ECMA‑262, 17th edition
* ECMA‑402, 13th edition
* AMD, NVIDIA, Erlang Ecosystem Foundation and University of Illinois (members)

Recognition of Kevin Gibbons (KG). Ecma appreciated KG with an Ecma Recognition Award for exceptional service. Delegates praised his leadership, collaborative spirit and contributions.

Ecma’s recognition and commemorative glass award from ISO/IEC JTC 1 was shared.

2027 marks 30 years since ECMAScript was first published, and celebrations are planned.

## Map take for stage 1, 2, or 2.7

Presenter: Devin Rousso (DRO)

* [proposal](https://github.com/dcrousso/proposal-Map-take)

DRO: Yeah, I don't. I put all the slides basically of things that I was going to talk about in the proposal. Basically, hi, my name is DRO. I'm an invited expert. I this is a common operation that I do very, very frequently writing JavaScript code for things that are pending. You know, you have a map of callbacks for an identifier, a map of in-flight requests for an identifier, more often than not, I'm not using a map as a long-term storage. I'm using it as a short-term storage where it is a way of relating some data to an identifier for a temporary purpose. And I'd love it if there was a way to be able to more efficiently get and remove the value from that map because more often than not, rather than trying to just get the value and modify it, I'm using that temporary nature of the storage to just have it be there temporarily and once I need it, I'm going to remove it from the map. So rather than doing two hashes, I'd like to sort of see if there's a way where we can just do a hash once, save the value, and then remove it from the map. That's sort of the basic gist of it. The name I took `take` because that's what I've called it in the past and what I've seen it be called elsewhere. I also just realized maybe about 15 minutes ago that we already have iterator `take`. So there's a little bit of benefit there, but I'm also totally fine with things like get or remove or get or delete, get and delete to match, get and initialize or get or initialize. Those kinds of naming things. Currently, I'm only proposing it on map and weak map given that those are really the only ones that actually have a key value relationship, but I also would be open to the idea of putting it in set if that's something that we feel would be valuable. I don't think of it that way, but in the same way that we have values and keys and entries on set to sort of match map, I maybe this would be something that would be valuable to keep the signatures relatively interchangeable.

DRO: So there's a bunch of examples in the code here. I'm realizing that we only have 10 minutes, so I'm just trying to, sort of run through this. The only sort of weird thing about this as opposed to the previous get and then delete is that in the case of this take method, it's really not easy to distinguish whether or not the key existed if the value for that key is undefined. So that would be the second row in this table, for example. I think in the case that a developer really needs that kind of behavior, they can always fall back to using has first to determine if the key exists and then delete it after the fact or look at the return value of delete to know whether or not something ex or excuse me, get and then delete the old path and then look at the return value of delete to know whether or not the key existed or not. If this is something that we feel we want to address, I'm also fine to change the return value of take to be an object that has like present and then value as a way of giving you both pieces of information, but I personally have never found a use for that. So I thought I would just keep this sort of simple and not have it do an object with a present key and a value key and those kinds of things. There's a lot of prior art with this in other languages and things like Rust, Python, a lot of libraries that I've seen in C++ for maps, including somewhat the standard library have equivalents of something like this. We even have something similar in JavaScript array prototype pop. And again, iterator take. So there's a lot of prior art for this. Many languages use take. Some use remove. Some, unlike JavaScript, have .`delete()` and `.remove()` actually return the removed value as opposed to just a true or false. So this is not an unfamiliar concept. And it's used somewhat frequently from some of the basic counts that I was able to find as well. It's a pretty common thing, not unbelievably so, but it has quite a lot of usages. And here's a couple random examples just of sort of what I'm describing earlier. You have a list of pending responses when the response finishes, you have the request data waiting for the response data. As soon as you have the response data, you remove it from the pending list. You have information for when, some sort of worker or job is active when it terminates or is merged. You get rid of it from the map or you have extra resources that you're trying to clean up. All sorts of very common operations that I've seen across a number of different code bases. And it's pretty similar simple to polyfill because ultimately this is really more of an optimization for a common operation, let alone some new semantics. So the polyfill is basically you just call get and then you call delete and then you return the value from get. It's not anything super complicated, but the hope is that similar to things like get or initialize, it provides a optimization for common operations that, I see and do frequently. So with that being said, I know I've used 5 minutes. Hopefully, we only have five minutes worth of discussion. I'm hoping for stage one, stage two, stage 2.7, anything of the above. And I have written some spec text for this as well that I'm happy to show very quickly. So there is some basic spec text in these describing what it how it operates as well.

KG: I guess I'm first on the queue. I support this advancing under some name other than take. There's an open issue about this, but the fact that iterator take exists and is so different means that I think take is just not a viable name. I the readme says get or delete, which I'd be fine with, or someone suggested extract, which I'd also be fine with. Basically just not take.

USA: Should we go through the queue real quick or should we just go through it and.

CDA: I think we should take our time with this. I actually regret asking if DRO could go because once he flashed up the proposal, I was like, I remembered which one it was and I felt like the time box was probably undersized already from the amount of conversation that I was expecting. And I think the queue reflects that. So we could maybe just go to the top of the hour and then do a continuation and because we shortchanged Devon, we'll put this as the kind of next available barring any constraints.

CDA: Okay. Maybe we can get to MM's topic.

MM: Yeah. So you said you were you indicated openness to having it on sets too, but said you don't think of it that way. So that surprised me because I don't know of a way to think about it that would not include sets. And in any case, I want to express a preference that either it's on both or neither. That having it on maps and not on sets seems very surprising to me.

DRO: If I said that it's not the way that I think about that, that was a misspeak on my part. What I meant to say is I don't ever use it for that purpose. Like I don't think I've ever needed to take something from a set as opposed to just deleting it. But I see no reason why it couldn't be on both. So I would lean like you said towards having it on both.

MM: Okay. Okay. That's all.

DRO: So my apologies if that was unclear. I misspoke.

CDA: Okay. I think we should just call it here, I think, 15 seconds left. Let's stop on time. I will copy the queue. And we will resume tomorrow. Thanks everyone.

USA: Yeah. And special thanks to our note takers.
