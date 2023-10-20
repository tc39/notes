NOTICE: These meeting notes are to be kept private until after the review grace period, at which time they will be submitted to Ecma and published on https://github.com/tc39/notes. 
DO NOT PUBLICIZE LINKS TO THIS DOCUMENT
Short URL: https://mths.be/tc39day3 
DO NOT APPEND TO THE END OF THIS DOCUMENT - THAT IS A RED ZONE RESERVED FOR THE AUTOMATED DICTATION SERVICE TO ADD TO
This meeting has an accompanying comment-by-comment written record prepared by IR Broadcast Captioning and TC39 participants. The intention is to capture the various points of view of the committee members, which helps all members evolve proposals based on feedback received and understand the rationale of decisions taken. TC39 participants are encouraged to edit this transcript for accuracy (where the goal is to accurately reflect the intention of the point being made, rather than word-for-word transcription), and to delete comments of theirs which they do not want to be recorded (e.g., due to risk of misunderstanding, inclusion of personal information, or any other reason). Edits may be made during the meeting by editing the Google Doc as it is composed, or afterwards for a period of at least two weeks until the notes are published. If a participant makes a comment in the committee meeting and does not remove it from the notes, they are consenting for it to be published. Participants may ask in the future that their personal data be removed from the published notes.

Cursor Park (feel free to add an animal):


 🦊                    🐄         🦥                 🦆    👣       🦉🐁  
                               🐾      🦒                 👣                    
     🦅     🦆      🦒              🦔                    👣        ৵( °͜  °৵)      
              🦠         🐣                    🐪              👣    🦖           
                  🐍            🦄         🐷              🐜       👣            



=== BEGIN AGENDA ITEM TEMPLATE ===

## Topic
Presenter: Firstname Lastname (FLE)

- [proposal]()
- [slides]()

### Speaker's Summary of Key Points
* List
* of 
* things

### Conclusion
* List
* of 
* things

=== END AGENDA ITEM TEMPLATE ===


98th TC39 Meeting
Thursday 28th September 2023
Delegates: re-use your existing abbreviations! If you’re a new delegate and don’t already have an abbreviation, choose any three-letter combination that is not already in use, and send a PR to add it upstream.

You can find Abbreviations in delegates.txt

**Attendees:**
| Name                 | Abbreviation | Organization      |
| -------------------- | ------------ | ----------------- |
| Pablo Gorostiaga     | PGO          | Bloomberg         |
| Waldemar Horwat      | WH           | Google            |
| Bradford C. Smith    | BSH          | Google            |
| Michael Saboff       | MLS          | Apple             |
| Daniel Minor         | DLM          | Mozilla           |
| Eemeli Aro           | EAO          | Mozilla           |
| Kevin Gibbons        | KG           | F5                |
| Chengzhong Wu        | CZW          | Alibaba           |
| Chris de Almeida     | CDA          | IBM               |
| Jesse Alama          | JMN          | Igalia            |
| Luca Casonato        | LCA          | Deno              |
| Jack Works           | JWK          | Sujitech          |
| Richard Gibson       | RGN          | Agoric            |
| Samina Husain        | SHN          | Ecma              |
| Riki Khorana         | RKA          | Sony              |
| Ross Kirsling        | RKG          | Sony              |
| Guy Bedford          | GB           | OpenJS Foundation |
| Devin Rousso         | DRO          | Invited Expert    |
| Shane F. Carr        | SFC          | Google            |
| Daniel Rosenwasser   | DRR          | Microsoft         |
| Christian Ulbrich    | CHU          | Zalari            |
| Ron Buckton          | RBN          | Microsoft         |
| Willian Martins      | WMS          | Netflix           |
| Istvan Sebestyen     | IS           | Ecma              |
| Daniel Ehrenberg     | DE           | Bloomberg         |
| Philip Chimento      | PFC          | Igalia            |
| your name here
## Uint8Array-Base64:
Presenter: Kevin Gibbons (KG)

- [proposal](https://github.com/tc39/proposal-arraybuffer-base64)
- [slides]()

KG: Okay, so the Base64 proposal is at Stage 2.  I’ve been working on it for a while.  Last time I 
presented this set of slides, I’m not going to go through the entire set of slides again, but 
just to recap briefly, there is a relatively uncontroversial single shot method for encoding to 
and from a Base64 string. A static method to give you a Uint8Array and a prototype method to give you a Base64 string and similarly for hex.  Then there are in addition these streaming methods, which I’m 
not going to go through in great detail, but the basic idea is that you have a fromPartialBase64 method and fromPartialHex methods that take this extra parameter and return a pair of 
{results, extra} and you are required as the user to shepherd the extra state around between 
calls to fromPartialBase64 until you have called all of your chunks.  And then finalize at 
the end, potentially.

KG: And per a request, there was also a couple of methods for writing Base64 into an existing 
buffer.  That gives you even more stuff.  It gives you written and read byte counts or character 
and -- sorry, byte and character counts respectively.  And this allows you to reuse existing 
memory instead of allocating new memory for every chunk.  Great, okay.  That’s the shape of the 
proposal as it stands.

KG: When I presented this last time, there was uncertainty about whether 
the streaming methods were worth it.  And the sentiment had discussion on GitHub between myself 
and LCA and PHE and others and and LCA has generously written, if I can find the link - https://github.com/lucacasonato/base64_streams - an implementation of streaming encoders and decoders using 
the single shot version.  So we have an encoder, for example, iterator or generator protocol 
based encoder in terms of the toBase64 method that exists in the 
proposal, the single-shot toBase64 method.  Now, of course, this does require more work to 
use than the streaming version that’s in the proposal, and in particular, it requires you to 
know the details of the three byte to four 
character mapping of Base64, but if you know those things or are just able to use a library that 
uses those things, this is reasonably effective.

KG: So given that there was disagreement about whether it was worth having the streaming methods in 
the proposal, I’m hoping we can hash that out now and either unblock the proposal or determine 
that it is not possible to unblock.  Does anyone have comments?

CDA: Yeah, on the queue there is JHD.

JHD: Yeah, so you may have just said this, but I basically -- I was just trying to get a 
reminder.  This seems feels like it should be a separate proposal, the multishot like the 
base -- the regular what are ones, and it just -- I’d love some understanding about why it has 
to go together. and if you just said that, and I wasn’t paying attention, I apologize.

KG: I would be ok with pulling it out, although I personally am unlikely to pursue the streaming 
part myself because the single shot is the use case that I care most about.  Perhaps, I don’t 
know, PHE might be able to say more.

PHE: Sure.  So I mean, it kind of comes down to the need for any of this from our perspective.  I 
mean, please recall that when this was a Stage 0 proposal, my recommendation was that the 
committee not adopt it, not move it to Stage 1.  I think the -- and I think the reasons for 
that still hold, which is it’s fairly low value.  This Base64 has been around for all eternity, 
JavaScript has been around for less of eternity, and somehow we’ve gotten this far.  Maybe it 
just doesn’t need to be in the language.  And further, Base64 is not as simple as I think the 
current draft of this proposal makes it look, when you dive through the RFCs and the different 
places where Base64 is used, it’s pretty complex.  So I mean, of course we can, as KG is 
doing, we can start with a subset of that and see how it evolves.  That’s perfectly reasonable.
.
PHE: But, you know, everyone has Base64 support somehow somewhere that they -- if they really need 
it they use, and in the embedded space, you know, in the Moddable universe, we do.  We in fact 
took the expedient approach.  It’s a non-streaming API and we needed a streaming API for some 
time, if we’re going to go through the work, to do standardization and bring this in, we think 
that the standard should support all, you know, runtimes, all use cases, and embedded where 
resources are limited, where we can’t -- we don’t have unlimited buffer sizes is very real, and 
so if we’re going to do this at all, then it’s our position, and it has been since the start, 
that we need to do it in a way that is generally valuable -- generally useful and valuable.  
And not just this kind of one very focused case.  And from there, it’s worth talking 
about the example code that KG cited from LCA.  That code, from our -- great that LCA did 
it.  I appreciate it.  It helps bring some things into focus, and one of the things that it 
brings into focus is that taking such an approach as he proposes doesn’t 
guarantee forward compatibility.  As the Base64 options increase in time, which is reasonable 
to expect, the way that things are set up, it’s likely that one won’t be able to 
continue to do what LCA has done.  We already saw one example where he had missed something in 
the handling of that requires some changes in the spec or code that are inefficient, and that’s 
all well and good, but it’s an example of the fact that it’s not -- that it doesn’t have good 
forward compatibility.

PHE: The usual way to get to a one shot API is to take a streaming a and I do that and use it.  So 
we’d like to see that.  The other thing I’m surprised at, and sorry I’m going long, but I seem 
to be a lonely voice here, you know, this API has morphed quite a few times, and the most 
recent change is something that is pretty bizarre, to me anyway, which is that it’s now 
attached to the Uint8Array object, which is I think it is the first time that this language will have 
different support on the different TypedArrays like that.  And I mean, it’s not -- I mean, I 
get that maybe Uint8Array is a convenient place to have it, but it’s not the only place, and I 
think it -- I think we would be better served to keep the Base64 support as its own thing and 
not a feature of Uint8Array, which just feels awkward and I mean -- and wrong, frankly.

PHE: So, sorry, that’s a long statement, and I appreciate your patience in hearing it.  But, I mean, 
to answer your question, Jordan, in short, if we don’t do streaming support, I don’t think this 
proposal brings much to the table, and if we pretend that streaming support can be provided 
with -- can be implemented as a wrap around the one shot, I think we’re doing naive in terms of 
how this is most likely to evolve.

JHG: Okay.  Thanks.  I -- the queue is down so I wasn’t able to add my response.  But I 
appreciate the explanation.  I think we have different perspectives on what is focused versus 
general.  To me, I find the streaming thing to be esoteric and niche and the one shot to be the 
thing that is actually quite common.  But it’s okay that we have different perspectives there.

KG: The change to Uint8Array was like three meetings ago.  I’m happy to discuss that elsewhere, 
but I want to keep the discussion as to whether we should do streaming as part of this proposal 
and whether we should do this proposal at all.  Conditional on the outcome of the first 
question,  I think the details of where exactly it lives are less important than those 
questions.  I agree with JHG, though, 100%.  Like, streaming is useful, I agree.  But I 
have needed the one shot version, like, 99 times in the last couple of years.  And I have 
needed streaming once, if I’m being generous.  I just don’t see why it needs to be part of this 
proposal.  Like, I get that there are different domains where the streaming is the important 
part, but the specific claim that I am making is that the one shot version is useful on its 
own.

DE: I wanted to understand PHE’s feedback better, but not the part about streaming: You mentioned evolution of base64, maybe this proposal lacks additional options, as well as error handling. Could you elaborate on that?

PHE: Base64 has been around since forever, 
right and, it’s used in many different places, and there are, as a result, a bunch of different -- a bunch of different variations in terms of padding, in terms of alphabet, in 
terms of white space handling, and this affects both encoding and decoding.  I spent some time 
earlier this week just scanning through the different RFCs related to this, and I won’t say I 
have a thorough understanding of it, but it’s fairly baffling.  And then you -- I mean, you 
have things -- you also have details like whether a decoder is permissive or strict and what it 
accepts and what the does with unrecognized characters.  And so all of those things, you know, 
eventually potentially come into the scope of this API.  You know, obviously not all initially, 
but over time.  It’s easy enough to imagine that.  So, you know, it’s very -- I mean, basically 
it’s impossible in the general case to achieve an efficient implementation of a streaming for 
all those features if you’re relying on the one-shot API.  And so I mean, that’s very -- yeah, 
and so that’s a concern.  Does that answer your question, Daniel, sorry?

DE: I just want to continue the thread of clarifying a little bit more.  Sometimes when there’s 
multiple RFCs, one of them is outdated and one of them is current, even in the absence of formal deprecation.  In your experience, in Moddable, have you needed to expose APIs or implement things for other options besides the ones implicitly 
adopted here?

PHE: I mean, we certainly have some Base64 behaviors which are different.  But there’s things we 
just haven’t done yet, which we need.  You know, I think in the RFC case, specifically to your 
point, I don’t think I’m looking at obsolete RFCs, I think what you’ll find if are to do the 
survey, if you have, I don’t mean to suggest otherwise, but what I found is that the variations 
were in different domains that use Base64.  So it’s not that it evolved over time.  It’s that, 
you know, the miming coding here thing uses it differently than this other thing over there, so 
it’s not that one is, you know, sadly out of date.  These things are co-existing today.

DE: Okay, thanks for explaining.  Did you give a concrete example of a use case that doesn’t 
match the semantics in this proposal?  Just because I’m new to this area, I don’t know which flags end up being important.

PHE: Right.  The problem is that -- I mean, you can -- as a one-shot, you could eventually 
support anything by having enough options in the options bag. That’s for sure 
the case.  But what is being put forward by KG and LCA is that one could implement 
streaming using the one shot, and that’s simply not the case, because --

DE: Peter, I’m asking a more basic question.  Given that this proposal doesn’t include all the options in the world, like, what’s an example of an option that’s missing?  Leaving aside streaming, just the one shot API, you said that there is more modes that get added over time, presumably there’s some missing feature that would just be useful now.  So I’d like an example of that, because I don’t understand the area thoroughly.

PHE: Yeah, I guess -- sorry, I didn’t come prepared to answer that precise a question.

KG: I can -- maybe I can give some illustration of the kinds of options.  The ones that I am 
aware of - one of the ways in which Base64 encoders and decoders differ is the choice of 
alphabet, specifically whether you’re using the web-safe variant or not.  Then there’s the handling 
of whitespace, as PHE mentioned, the mime base64 spec says things about white space has to 
be stripped.  Other things say white space has to be an error, and there’s handling of padding.  
There’s in fact two different axes on which handling the padding can vary.  There’s whether you 
require, allow, or forbid the presence of the trailing equal signs, and then there’s the 2-4 additional bits in the last character
for certain strings, which should, according to the RFC, be enforced to be zero, but no one 
actually enforces that there’s zero.  I’m not aware of any variations other than that, but it’s 
certainly conceivable that there’s some out there.  Those are the kinds of variations that 
exist, though.  Hopefully that’s illustrative.

DE: Yeah, thanks.  Could you briefly go over those which you make hookable and which additions you might expect?

KG: Because the proposal isn’t settled, I’m not completely settled on all of these, but the 
current plan is that you can pass in a choice of alphabet as either the web-safe or the base 
variant.  White space is unconditionally stripped and not generated in the output, and 
padding is unconditionally generated in the output, and much to my dismay, not enforced in the 
input.  But open to changing any of those that the proposal is still open for tweaks of that 
kind.

DE: Okay, are you aware of any future-proofing risk for these sort of options with 
respect to the stateless streaming API that you have?

KG: There is some complexity around handling of streaming and padding, but it’s, like, 
doable.  LCA has done it.  The white space, again, if you have very strict rules about where 
the white space must appear, then streaming is more complicated in handling those, although, I 
don’t think anyone actually enforces those.  Otherwise, no, not aware of any issues.

DE: Okay, are we aware of any brewing proposed extensions for base64 that could affect this in?

KG: I am not aware of any proposed extensions.

DE: Okay.  Yeah, I think, PHE, if at some point later in the process of the development of 
this, if you could assess whether your survey led to kind of differing results, that would be really useful in making sure that we’re not leaving any of these things out.

DE: Okay, my next queue item is just about streaming versus non-streaming.  I suspect that most usage of this will be non-streaming.  But the streaming API doesn’t seem too complicated.  And there’s a kind of logically reasonable case that in general, when we do a calculation of something that’s potentially big, that there should be a streaming version of it.  So I think that’s why it logically fits together in the same proposal potentially.  That said, I would be okay with the streaming version removed from this proposal.

WH: I am a bit negative on the streaming API because it’s so easy to use 
incorrectly.  In fact, the examples given in the proposal use it incorrectly where sometimes it 
will crash instead of doing the right thing.

KG: I agree that there’s definitely some difficulty in using the streaming API, although, I 
wasn’t aware that I had any bugs.

WH: The bug in the GitHub explanation of how to use the API: if the input length is zero, it doesn’t work.

KG: [scrolls to API usage example]

WH: Yeah — do you see the bug?

KG: Yes, because `extra` is undefined here.  Yeah.

KG: That’s true.  That’s a bug.  I fully agree that at least this design for streaming is a 
little bit error prone, although, my hope is that most people would copy/paste snippet that 
just does the right thing.

SYG: I want to better understand PHE’s argument against the utility of the single shot API.  So 
the arguments I’ve heard so far are there’s a lot of various choices, and actually, I don’t 
know what that argument is, I guess because there are a lot of various choices, we shouldn’t 
pick a particular thing because there’s not enough utility there.  I think I also heard an 
argument about specifically Moddable’s IoT environment making it difficult to implement or 
something.  Did I mishear that?  Is there -- I want to tease apart if there’s an 
implementability concern versus a utility concern.

PHE: I don’t -- sure.  The utility can certainly be achieved in time with enough options.  That’s 
not in question.  I don’t -- with all due respect, I don’t think we have yet a good 
understanding of what all the -- what all the options are.  And how complex that -- or not that 
gets.  But the -- I mean, the implementability, I mean, we can implement this.  The problem is 
the usefulness of it, which is, you know, there can be very big pieces of Base64 data, you 
know, arriving, for example, over the network.  And in our environments, we may 
not -- I mean, very realistically, may not be able to hold all of that -- all of that Base64 
source text, for example, in memory at one time to be able to accumulate it to then be able to 
call the one shot API, so we have to be able to break that up into pieces.  We have to be able 
to process that in pieces and sync the output as it’s processed.  So it has to be streamed to 
be able to be used on larger pieces of data.

SYG: Thanks, I understand the difficulty in leveraging the single shot -- the one-shot API in  
Moddable’s particular environment I don’t quite understand why it then follows that the single 
shot is not generally useful for most other environments.

PHE: I have no objection to the existence of the single shot API.  I’m sure it’s generally useful 
in other environments.  I object to only having a one shot API.

SYG: Right.  That’s the part I don’t follow.  Why object to only -- Moddable can just ignore it 
and use its own streaming?  Is it like you don’t want to ship it and that there’s some concerns 
there?

PHE: The benefits --

SYG: I don’t understand what the downside is.

PHE: If we’re going to go through the work of standardizing something, I think we should do it in 
a way that’s generally useful.  And streaming of Base64 is generally useful.  I understand it’s 
not -- it’s in the minority, but we’re designing a language to be generally useful, not kind of 
cherry picking the most prominent use cases.  And so --

SYG: Okay.  I mean, I think single shot is generally useful.  It may not be universally useful.  
I think it is -- I think we have pretty good intuition that it is generally useful in a way 
that is more so than streaming.  I haven’t heard arguments that it is not generally useful.  I 
don’t quite understand why bundling -- like, I don’t understand the negative implication that 
because streaming is -- because streaming is also claimed to be generally useful, it must be 
bundled into the same proposal for the whole -- for the one-shot to also be worth it.  Like, 
that’s -- I just don’t understand that argument.

PHE: I mean, I think I don’t like the framing of the argument, sorry, SYG.  I think the question 
is if this committee is going to do Base64 support, it should take on the scope of that, which 
is used throughout the language and not just picking the most prominent case of that.  I think 
kind of framing it as a -- you know, single shot is useful, so I mean, we could pick apart lots 
of proposals and break them into parts and stage them that way, but we don’t because we’re 
trying to deliver a set of functionality that’s useful.  And here one shot is convenient, but 
streaming -- so, great, we should have that, but streaming is the thing that lets you handle 
the broader set of cases.  So streaming is foundational.  You can always implement a one shot 
from streaming, but not the other way around.

SYG: I think we disagree on that, but we can leave that disagreement, I think.  But as a matter 
of process, this committee literally does pick apart things and advance them separately.  Like, 
that’s how we have operated.

LCA: Yeah, so I want to start with that ultimately, I would be okay with shipping in proposal 
with either streaming or not streaming.  I would prefer we do not ship it with streaming.  I 
think utility of single shot encoding is well understood.  And it has, like, implications in 
many runtimes.  I can also see the argument for why we should -- where there should be some way 
do streaming.  I think is a much smaller subset of people that would use this, be I agree that 
there are use cases.  What I am more concerned about is that on the web where the majority of 
streaming applications are going to happen and where, like, streaming is particularly useful 
because you’re on devices with little memory, you are -- you have network streams, slow 
networks, so streaming can be useful there, in those scenarios, you want to have a streaming 
API which is very efficient, and web -- and the web platform provides a streaming API for this, 
and web streams, which are highly optimizable by engines because they can by pass JavaScript 
while doing transforms for natively implemented streams.  And this API in 262 where we shuttle 
around the extra bytes manually does not fit into that.  It means that every project will have 
to write a wrapper transferring stream around -- yeah, around these extra bytes, and I have an 
example of that in the repo, I think.
.
LCA: But, yeah, it’s not great.  So really, for the web platform, what we need is a streaming API, 
which is based directly on public streams.  And yeah, we can ship in 262, but that makes the 
utility of the streaming API in 262 even smaller.  Like, now the use case is, like, anything 
that does not implement what wick streams and cannot use the single shot API, which 1% of 1% of 
1%.  And I don’t -- like, I just don’t see the value of shipping this in the language.  And, 
like, implementation complexity that comes with it for such a small subset of users.  I would 
prefer that those users can just import a helper that wraps around the single shot API.

PHE: Sure, thanks.  LCA, I mean, on one point, we agree strongly, which is I’m not wild about 
the way that the streaming API returns the state.  You know, in earlier discussion on this, we 
had explored briefly options where an instance would manage that state, and it could be quite a 
bit more efficient.  But that was -- that direction didn’t seem to have traction, so that led 
to what we have now.  But there I agree with you, we could do better.  I think we could have an 
API that was easier to use and more efficient if we could have gotten past some of those 
objections.

LCA: Okay.  Yeah, I just want to mention that even if we were to go with API, manually 
implementing web stream would incur at least two native JavaScript to native native to 
JavaScript copies that are involved.  

KG: So concretely, the only optimizable thing on the web 
platform is a web stream, so I think if the web platform decides that streaming is worth doing, 
even if we have the thing in JavaScript, I expect what would ship a streaming one, like, the 
only reason they haven’t because I told them I was going to do this proposal and they wanted to  
make sure that the design would line up.  But you need the WHATWG streaming one to be efficient 
on the web.

PHE: I mean, I think it’s great.  We should actually take into requirements the implementation 
limitations of the web and how it optimizes, just as we take into account other environments.  
I have no problem with that.

LCA: I guess I just want to clear up, like, there is no possible API we can design TC39 that will 
be as efficient as web streams.  It is -- any API we design in TC39 will require bytes to go 
through JavaScript that with the web stream implementation do not have to go through 
JavaScript, and that is inherently slower.  That’s end of my comment.

DLM: We discussed this internally in the SpiderMonkey team and we are 
completely convinced about the utility of the one shot variant.  We are definitely not as 
convinced about the streaming.  I feel like the number of iterations that we’ve seen on 
different streaming APIs sort of demonstrates that it’s not fully baked.  And so I think we 
would be very happy to see it this proposal advance with just the one-shot version.  And, yeah, 
I think that’s all I have to say.  Thanks.

NRO: This was more reply to -- the reply to original -- JHD’s comments.  It was mentioned that 
the reason we need the streaming API in this proposal, like, now is so that if in the future we 
have more options to the one shot API, this -- like, it might not be possible to polyfill the a 
user land.  It’s been done in the exam.  Could we add the streaming API once we add those 
options to Michael impossible to reproduce in user land?

PHE: But that would require people retrofitting.  Deployed code would then have to change to do 
that, right?  I mean, people have been -- would be shipping this effectively polyfill, as you 
describe it, and then it would have to go away.  But, I mean, how would anybody know to do 
that?  It would be -- it would break things, right?

NRO: I mean, the code would have to be updated to use the new options of the recent update to do 
anyway.

KG: It wouldn’t break anything.  It would only -- if you wanted to decode this, like, new kind 
of Base64, you would have to update your library to support the new kind of Base64 and use that 
in terms of the updated underlying primitive.  But, like --

PHE: I mean, that’s -- I mean, that’s slightly -- I mean, that’s -- I wouldn’t agree with that.  
Like, if what you believe as a user of code is that you’re using a streaming version of the 
Base64 API that’s the language, and then the language updates, you wouldn’t necessarily assume 
that the code you’ve been using to stream would be broken.

PHE: I mean, if you had implemented it, you might, but if were just using some code from 
somebody, you wouldn’t.

JHD: But it wouldn’t be broken.

PHE: And that’s true of any polyfill.

JHD: It would be true if you used any of the options, it would be broken.

KG: Yes, generally speaking, you can’t use new options with old things, but I don’t regard that 
as a serious problem.

PHE: Sorry, I feel like -- I feel like you’re talking past the problem.  If the user has a piece 
of code that they’re using that they didn’t write, they don’t fully understand it, they just 
know, hey, I can do streaming Base64 with this using the same options as the JavaScript 
language spec and then the JavaScript language spec upgrades, the -- why would they expect that 
the streaming thing would break?  There’s no good reason for that.  They don’t know.

KG: PHE, that happens all the time, and it’s just not a big deal.  Like, many people have 
shipped the APIs that are vaguely modeled after underlying JavaScript APIs and then the 
underlying JavaScript APIs update and the libraries shipped on top of them don’t and it just 
doesn’t matter.  You update the library eventually.  This is not a serious problem.

JHD: I’ll jump in. Peter, I’ve shipped hundreds of polyfills that have had new features added 
in the language and I have to update the polyfills and this is concretely and objectively and empirically not a problem in practice. This is how every polyfill works. That’s just how it works. That’s an unavoidable fact.

PHE: Yeah, I mean, we -- anyway, I -- I will take your word on it, JHD:.  I really don’t see it 
that way.  But thank you.

SFC: Yeah, all I have to say here is that use cases that I’ve encountered, especially when 
shepherding data around between different clients is that, like, JSON streaming API, JSON 
parsing streaming API would be quite useful and this seems like it would go very well with 
that.  I just, you know, wanted to throw that out there in case maybe there’s interest in sort 
of pursuing Base64 that’s own proposal and having another proposal that’s all streaming parsing 
including JSON and other things that might also be useful in the context of the web platform.  
That’s all.

KG: Okay, great.  So we’ve heard from several people, including browsers, that they don’t 
believe it’s worth doing these streaming API and we’ve heard from a number of people, myself 
included, that the single shot API would be incredibly useful.  And while there’s a 
philosophical disagreement about whether a proposal needs to expand to meet, like, the fully 
general form, several people, myself included, think that it doesn’t need to meet the fully 
general form to be useful, at least if the more restricted form is not, like, going to be only 
a subset of the bigger form.  If the single shot form would be worth doing even in 
a world with streaming, then we can just do the single shot version.  So I would really like to 
go forward with just the single shot version.
 so I guess I’d like to ask for that, ask for 
consensus to restrict the scope of this proposal to the single shot version.

[+1 from LCA, NRO, JHD, DLM, Christian, MF, DE]

CDA: Fantastic.  Where there any objections?

PHE: Yeah, I'm still not comfortable with this.

KG: Okay. I’ll go do this in WHATWG, I guess.  Thanks for the feedback.

PHE: I mean, KG, I think we should have a conversation about this and see if we can find some 
way forward.  I think.

KG: I’ve spent two years on this.  I don’t think there’s a way forward.  Like, did you 
hear the discussion that we just had? People in the room do not want a streaming 
version.  Some people are okay with it, some people are opposed.  We can’t have a streaming 
version that’s as efficient as a web stream anyway.  The single shot version is independently 
useful.  The single shot version, like, is 99.9% of my use case, I know that’s true for others.  
I just -- I don’t think there’s a path forward here.  And I would like to be able to do 
Base64 encoding in node and on the web, and I just don’t see a way to make that happen 
with this proposal anymore.

SYG: Can I make a comment?  So, like, for people many the room to observe what is happening, 
which is that the alternative is not that this doesn’t happen, the alternative is that this 
happens in a different standards body.  We’re not the gatekeeper of APIs.  We’re gate keeps of 
the syntax.  If there’s a new API that has sufficient demand, it probably finds a way, despite 
objections from people in the room, so keep that in mind.

DE: I want to agree, so we had the UUID proposal here and it ended up moving to a web platform 
API.  I would really like TC39 to be a good place where we can add standard library features.  
And in this case, we should maybe even reconsider our process with respect to, you know, the 
single lone objector being a determinant. I think it depends on the nature of the particular 
objection to whether it should be blocking.  In this case, we just haven’t heard an 
argument where others can understand the weight of it.  So I think if this goes 
to other standards bodies, we know that those other standards bodies are places where most of 
us have more trouble participating in a way that has the equal weight that we have in TC39.  So 
that would be, you know, potentially a worse result.  So we should consider whether our 
decision-making methods in TC39 are conducive to what our shared committee goals are of 
developing a standard library.

MLS: So I’d like to weigh in here.  TC39 does not have a consensus process.  We have a lone 
dissenter blocking process.  And I’ve been subject to that in the past.  We have one member of 
the committee that is making the point that the API -- the standalone API is not useful, but a 
streaming API is.  They are part of the larger JavaScript community, not a browser, not Node.  
I think -- I don’t see why we’re not willing to allow a streaming API, even though it’s not the 
most efficient, we’re not willing to allow this as a give and take in the deliberation process 
so that we can reach consensus.

KG: So I would feel better about that if in fact the claim had been that the single shot API 
wasn’t useful. But, as far as I can tell, everyone thinks the one shot API is useful.  
And if we can’t advance that, I just don’t see it being worth participating in the 
process here. Like, we have a thing that everyone likes. Everyone agrees it’s useful.

MLS: But you would agree that Base64, since it, the decoding of future letters in a sequence 
are based upon the context of prior letters, that a streaming API actually does make sense?

KG: I agree

CDA: Sorry, I’ve got to interrupt.  We are at-time for this item. I would ask that PHE, if you 
are withholding consensus on this item, can you please articulate your objection for the notes.

PHE: My objection is that this, to be useful in our environment, which is a standard 
JavaScript environment, that streaming is a necessary feature, and so we would like to see that 
advance in parallel with the one shot capability.

KG: That’s not an objection.

PHE: That is an objection.

KG: I personally would not use this in my environment, is not an objection to a thing being 
useful.

PHE: KG

KG: Am I going crazy?

PHE: KG, you know what, sorry, it’s a little, I mean seriously, I’m a little frustrated that 
you, in particular, but the committee in general, really doesn’t take or seem to take seriously 
that we have a different set of constraints.  We are very respectful of the constraints of web 
platform and do a huge amount of work to support those, and we do it happily so we can get 
interoperability for our users.  But there are some places where we have constraints that can’t 
magically evaporate, and one of them is that we do have an infinite buffer space. And if every 
time we raise that, you know, the committee’s response is well, but it doesn’t bug us, this big 
use case over here is fine, the language, little by little, erodes its usefulness in our 
environment, and that’s a real concern. So we would like to see this resolved, and I’d really 
appreciate a little bit more respect for the fact that have there is a real technical challenge 
here we have to address solely than solely focus on the 1% of the 1% of the 1%.  It’s 
not helpful to marginalize it in that way.

KG: I fully accept that moddable has additional constraints and I appreciate why you would want 
a streaming API. But what I have asked for is for the single-shot API, which is useful for 
many people, including Moddable. I very frequently to sufficiently small Base64 decoding that 
it would be useful on an embedded platform, and I have not heard an objection to advancing 
that. I genuinely do not understand what the objection to advancing that item is.

[break]

KG: There’s just an update to say, we have the GitHub comment from PHE that if in fact the one-shot APIs are sufficient to implement streaming with reasonable efficiency and without future compatibility concerns, he will withdraw his objection. So I am intending to work towards demonstrating that and flushing out the spec text and writing up with all the ROCs and labour and so on. I believe it is possible to do a streaming implementation that is fine. So conditional on that. I will come back later, if that is not going to satisfy anyone else in the room, please let me know before I do all of this work. Thanks very much.    
### Summary
    - KG raised the question, once again: Should the ArrayBuffer base64 proposal have built-in support for streaming?
    - The committee generally agreed that the single-shot API is quite useful and should become part of the JS standard
    - PHE raised additional concerns about other options or flags being relevant to base64, but neither he nor KG were aware of any missing details. They will research this before the next meeting.
    - DLM would prefer including only the single-shot API because the iteration of the streaming API shows it needs more time to bake
    - DE expects the streaming API to be significantly less useful than the single-shot one, but is OK with or without adding it, since it doesn’t add much complexity.
    - LCA opposed the streaming API because it lacks the optimize-ability of HTML streams by forcing all data to go through JS.
    - WH opposed the streaming API because it is currently designed in a confusing way
    - PHE argued that streaming was essential for embedded platforms, and this proposal should not advance without it.
    - SYG and KG remarked that, if this is blocked in TC39, it will be standardized in WHATWG instead.
### Conclusion
    - PHE blocked the proposal from advancing to Stage 3 because, in embedded platforms such as Moddable, some use cases require a streaming approach to base64 encoding, and this proposal does not provide that built-in
    - The appropriateness of this block was contested by multiple committee members.
    - Further discussion in a future meeting of TC39 is expected given the follow-on in https://github.com/tc39/proposal-arraybuffer-base64/issues/13

## Negated in and instanceof operators for Stage 1
Presenter: Pablo Gorostiaga Belio (PGO)

- [proposal](https://github.com/gorosgobe/proposal-negated-in-instanceof)
- slides

PGO: All right. My name is Pablo.  I’m a new delegate from Bloomberg and today I’m going to present my proposal, negated in and instanceof operators for Stage 1.  So 
currently, if you have an in or instanceof expression and you need to negate those, you 
need to wrap the whole expression in parentheses with the grouping operator and then you need 
to negate that with the logical operator, the exclamation mark.  Now, this has several issues.  
The first issue with negating in and instanceof expressions this way is you may forget to 
parenthesise the expression.  As a result, if you apply the not operator on the 
left-hand side operand of the expression, that expression, except for some niche cases, will 
evaluate to false.  So for the code on the screen there, the body of those if statements will not 
execute.  And the correct usage is obviously to parenthesise that properly.
.
PGO: There are tools that detect these, this scenario, so TypeScript does produce errors, as you 
can see there on the left-hand side. There’s also an ESlint rule that is called no-unsafe-negation that would detect this pattern statically. However, we wanted to find out whether that was enough and see if code in the wild had these sorts of problems. And in particular, we wanted to sort of answer two questions here. So are in and instanceof ever used in negated expressions in the first place, and if so, are there any bugs in these negated expressions. And we looked at open source code through Sourcegraph. We found for in and, we found 7 thousand negated expressions through Sourcegraph, 10,000 for instanceof. And we also looked at those expressions that had the bug where the left-hand side had the not operator as opposed to the entire expression. And for in, we found 2,000 hits. For instanceof, 19,000, so those queries are there on the right if you want to run them.

PGO: We also looked at some examples within those queries to see what sort of code was affected by 
these bugs. And the reality is that we found a lot of high traffic, well-known repositories had 
these bugs. So on the left-hand side, you see a list of 15 examples of repositories with bugs 
in negated in expressions and on the right-hand side, you see another 15 examples of bugs in 
negated instanceof expressions. Separately from the open source analysis, we also run our own 
internally at Bloomberg. We looked at the AST of a large set of internal projects and we found that around one in seven in expressions are negated.  For instanceof around one in eight. Out of those negated expressions, 1% of negated in had bugs of the form that I described earlier and 6% for instanceof had bugs. This is out of the total of negated expressions.

PGO: Another issue here is that there’s an inconsistency in the language. We have some operators that have a negated version. Example here is triple equals has not double equals. However, with in and instanceof, we don’t have such equivalent, the negated counterpart. And that makes it quite unintuitive and a bit confusing for developers. And here are two examples of stack overflow questions that have been asked relating to negated in and negated instanceof operators within the language. You’ll notice that these were asked 11 years ago and have been viewed hundreds of thousands of times, with the top one specifically modified very recently. So this is something that people are still searching for.

PGO: There are other issues with these negated expression, readability suffers when negating in and 
instanceof expressions in this way. If you read the examples there on the left, we have not A 
and B, not A instanceof C, which doesn’t flow in English. You’d expect something more like A not in 
B or A not instanceof C. And perhaps this is also a reason why these bugs occur, is that mental association between the not operator and the left-hand side operand that happens when you read expressions this way. Finally, developer experience is also impacted if you want to negate an expression, you can’t simply just negate the operator. You just have to wrap it with parentheses every time.

PGO: So the proposed solution is to introduce a negated in and a negated instanceof operators into the language. This is an example of what it could look like. You could use not the exclamation mark and 
in exclamation mark of the instance as the on rates raters. You can see at the bottom how that 
would simplify what we have in the language. There has been a separate proposal by JHD to 
use explicitly the keyword not, “not”, instead of the exclamation mark here. Those are 
definitely things that we can look into after Stage 1. I also looked at how all the languages, to see what sort of syntax other languages use for infix negation. And it looks like for the most part, languages use “not” or the exclamation mark, namely you have Python, C# as examples that use “not”, and Kotlin, for example, uses the bang, the exclamation mark token.

PGO: So that’s it.  Thank you, and I’d like to ask for Stage 1.

CDA: We have a lot of people in the queue.  First up, JHD.

JHD: I very much support the proposal. I have a strong preference for using the word “not”, as you mentioned. There’s a few other comments on the queue later that I think strengthen that. But either way, we should look into solving this problem, which would be Stage 1.

CDA:JWK.

JWK: I also plus one for this proposal.  But we cannot use the ! symbol because it will 
be interpreted as `A! in B`, which means the non-null assertion in TypeScript and the older 
version will not interpret it right. I also want this proposal can match with pattern matching, which is using `not` as the pattern.

PGO: Thank you for the feedback.

CDA: RBN?

RBN: Yeah, and I’ll first reiterate what JWK said. There is, there would be an issue with 
TypeScript in that post-fix exclamation is used for non-null assertion. So that would be a 
very complicated issue for us. I don’t think we would have another way of addressing that 
other than having to error on cases where that might exist without a space today. But the 
other thing, is and this isn’t an objection to this proposal, but just something to consider, one of the things that we’ve been considering as part of the pattern matching proposal is either immediately or as a future addon is the potential for what are frequently called relational patterns, which generally include things like greater than, less than, equals in a pattern, but also could include things like in. So with the concept, or with pattern matching having the ability to do negation, one of the things that we plan to present in the 
future is the use of an instanceof operator to do pattern matching there a Boolean expression, which 
would give you the ability to say X not in Y or not in instance of Y, because we might not need 
instance of, because the other thing we are considering with pattern matching is X is Y, and if 
Y is a class that would be using the instance of or instance functionality. anyway. So in 
pattern matching, you might be able to express as X is in the in Y in the negated case and X is 
not in Y for the negated instance case. There might be press tense for this or a capabilities 
to do this in pattern matching and as JWK saidings it would be useful to have consistency with 
the not keyword cases if both exist.

CDA: WH?

WH: I just wanted to correct one the slides in the presentation, which made the claim that all 
the comparison operators except `in` and `instanceof` have negated versions.  This is actually 
incorrect.  The only operators which have currently negated versions are the first two: `==` and `===`.
`!<` is not the same thing as `>=`.  And `!<=` is not the same thing as `>`.  There are actually 14 
possible non-trivial operators comparing two numbers, out of which we only have 6 in the 
language at the moment.

DE:  This is my fault. An earlier draft of these slides had another column that said it doesn't work with NaN.  And I asked Pablo to take it out because it was just a distraction. So I think this is all very well known by everybody here.  And it doesn’t really make sense to repeat that. Like, it’s negated in some higher logical sense. But we all understand the NaN caveat.  

WH: Okay. My point is, there is room for adding the negated versions if we want to.

DE: What does that mean for this proposal?  

WH: Stage 1 is exploring the problem space. The problem space of negating operators is bigger than just `in` and `instanceof`.  

DE: Ah OK, sounds good to me.

NRO: So I was surprised by these numbers, by like the amount of mistakes that people made according to data. I checked how they work, and none of them help make the mistake more obvious. I have not A and B. It remains as this. But like we, a bunch of repositories and maintainers had parenthesis, if you write not A and B that is parenthesis, not A instanceof B. That is the mistake is more obvious. Not everybody uses tools. But given how popular formatters are, this would probably help produce the mistake without necessarily needing to change the language.

DE: I was initially skeptical when I heard of the proposal. Adding syntax has a cost. Peter said about the other proposal, we have been living without this for a long time. The analysis of how people get this wrong, mostly in tests, but also mostly in projects that use TypeScript and linters, which do check for these things (and correct them, at least hopefully will correct them in the future), the fact this is so common seems to indicate not that this proposal will immediately solve all the problems that wouldn’t make sense. But it shows a mismatch in the mental model of people, causing them to not write the right syntax.  We don’t have a comparison for Python or the other languages that have this feature, but I suspect that it’s just easier to remember the `not in` form. So I think this proposal makes sense. The next step would be to work out this potential TypeScript grammar conflict issue.

DRO [on queue]: Huge +1 to other forms. Preference for “not”.

RKG [on queue]: +1, strongly prefer ! version as “not” is not a current keyword

EAO [on queue]: support, would prefer “not” as it is attached to words.

RGN: We support the proposal, with a preference for `!`-prefixing.

DRR: Yeah. I will be honest, I am skeptical of this. I don’t think that, I feel like you are adding a new way to do it, which is helpful for people who know about the new way. But this old form, if you introduce a new one, is going to stick around and people are going to do this. And so you have added two new solutions. So I am not going to block Stage 1. I try to keep an open mind. But I think that I don’t know. There may be better ways to tackle this.

DRR: And also, if we do in the end with a negation in pattern matching, I think I would be okay with something like this, where it falls out, and we just get it, we need it or get it for free in some sense out of grammar additions. On its own, I am a little skeptical.  

JRL: I made this mistake a week and a half ago, I forgot to put the parenthesis around the no and got the completely incorrect code. I debugged for an hour to figure out what went wrong. Some solution is needed and I would love to do it.

WH: Yeah. The numbers in the presentation were interesting, but I don’t see how this proposal will prevent people from writing `!` in front of the first argument.  

PGO: Sorry. You don’t see the proposal for what?

WH: How will this prevent people from writing bugs like on the screen right now?

PGO: Yeah. So it definitely does not prevent them from writing what is, you know, being the correct negated expression. The hope is that by providing a more ergonomic version of not in, and not instanceof.  Let’s go to the slide I want to show here. This one. 

PGO: People are looking for these types of operators. And I think the issue here is that they do not find them. 

PGO: And so they are led to believe that not applied to the left-hand side, because they make a mistake, would produce the correct output. So the hope is not obviously to prevent that from happening because we can’t prevent them. You can still write that. But the hope is that they would use the new way purely from, you know, from other languages where it is possible and natural and reach out for. If we make it available to them, these bugs will not appear.

WH: Okay. My other concern is, while `! in` works well with the ECMAScript grammar, `not in` would complicate parsing a fair bit. There may be cases where it’s confused with something else.  

PGO: Could you elaborate this?  

WH: You may run into issues with `not` similar to the `async of` confusion. It’s hard for me to come up with these in real time, but we’ve had troubles like this with the grammar in the past. We have not added any infix operators which use an identifier as the operator name. 

PGO: I think we can definitely explore other options there for the syntax.  Yeah.  

CDA: All right. On the queue we have – + 1 on these operators getting negated. Definitely natural in other languages. And JWK with support for Stage 1 of ergonomics. All right. Any other, that’s it for the queue. Are there any other thoughts? 

CDA: Okay. I believe, PGOis asking for Stage 1 for this proposal. There were many + 1s. Are there any objections? Whoever supported, are those easily scrapable so we can have folks who supported consensus in the summary and conclusion or alternatively, can we reaffirm your support for this proposal for Stage 1?

CDA: I am not hearing anything and I don’t see anything on the queue.

WH: I wanted to follow up with my comment of an example of what I am concerned about. For `let not in`.  

JHD: Can you even use the in operator in that position anyway?  

WH: Open (let not in) followed by something else. So that becomes ambiguous whether it’s a let, it’s a let binding of something called not or whether it’s a binding of let, not in some, I guess you could have used not in, in that case.

JHD: The in operator is not allowed in that position so there’s no ambiguity there. `not in` operator also wouldn’t be. It’s just a binding.

WH: Right. You can’t use not-in in that spot. Ignore my comment.

CDA: RBN?

RBN: To WH’s comment, not instance would be legal in a place where you could otherwise already have a binary expression and in the case of for `let not in`, any use of that side, wouldn’t that require to be an assignment investigation, which it wouldn’t pass? LeftHandSideExpresion

WH: My comment was incorrect.  

CDA: I am looking for people to explicitly support this for Stage 1 for consensus.  

Explicit support for stage 1 from:
JWK
JRL
CZW
Hax
JHD
DLM
DRO
RKG
DE
EAO

### Speaker's Summary of Key Points
    * Proposal was presented for Stage 1
    * This proposal adds `!in` and `!instanceof` operators to avoid the confusion of an extra set of parentheses in this common case
    * Split preference between `!` and `not`. 
    * Some committee members argued that the syntax should use `not` instead of `!`, for an analogy with pattern matching
    * It was pointed out that `!` could cause compatibility issues with TypeScript’s non-null assertion, and would be difficult to address from TypeScript’s side.
    * DRR expressed skepticism about the value of adding such an operator
### Conclusion
    * Proposal achieves Stage 1 with widespread committee support


## Locale Extensions for Stage 1

Presenter: Ben Allen (BAN)
- proposal: https://github.com/ben-allen/locale-extensions
- slides

BAN: All right. So this is a proposal where, how can I put it?  The appeal to it is fairly straightforward. But the thing that I will talk about are potential problems with it. Because mitigating those problems is the thing that is necessary to make the proposal work.

BAN: So the positive thing that we are looking for, the problems to solve are received to localization. Related to people wanting to be able to request content that differs from their default locale. Whichever localized version of browser, they prefer them to be localized differently. The three interrelated problems that we are considering are, oftentimes and I think this is the most important one, there are a number of regions with different competing number systems. And without a way to specify which numbering system you want, users could easily get content that’s actually just unintelligible to them because the numbering system is one they don’t read.

BAN: The second problem we are interested in, well, obvious users will have content tailoring desires that differ from the defaults used for the locale at the are viewing. Sort of like the easiest cases are things like, I would prefer this in celsius rather than Fahrenheit.

BAN: Also, some users have combinations of preferences that differ from the defaults of their browser's locale and also the defaults for the content they are viewing.

BAN: The next slide. You might have noticed there is an elephant in this room, which is all stuff that directly touches on users. And there’s, no concept of user here in TC39.

BAN: It is in fact actually more directly related to other standards organizations advancing through the W3C process. There is a possibility that the solutions might require touching Intel, adding support for extension tags. We discovered a couple days ago that 402 is a context where fingerprint is a real concern.  So this proposal could serve as a locus for discussing fringe printing red lighting in general. I don’t want to stress, we are only asking for Stage 1 to explore the problem space. We could decide not to advance to Stage 1 or other standard groups.

BAN: So here is problem number 1. And this is the corner of the problem that is most important to me. As I said at the start, there are locales where there are multiple competing numbering systems. And like the ones that are most curable, a lot of middle eastern regions where both Latin referred to and eastern aerobic numbers are in use. Also, this shows up in HI as well. Which defaults to Latin numbers even though people requesting that locale might prefer Deva. A word I typed out thousands of times.

BAN: The problem number 2. So this is the most important one. Problem number 2 is users will have content tailoring desires that differ from the defaults used in the locale the content they’re [vee]ing it in the a plurality of sites only offer content in English, and US is translated in the web and that’s a region with just highly idiosyncratic defaults of hours of the day, 12 hours cycle, instead of 24. Temperature measurement, Fahrenheit instead of Celsius, and the US uses Sunday as the first date of the week rather than Monday. And users might want to view these things in a Morley globally common way. This is an example of if you look up the temperature in San Jose, on the BBC’s website, if you don’t know, America can look at this and see that’s a cold day for San Jose. I am not sure it gets down to that cold there. American weather sites will often default to showing temperatures in Fahrenheit which is very, very confusing. And annoying for people who are expecting to see Celsius. So one of the things we want to do is provide a means for users to request a number system they want. Another thing we want to do is provide a way here, in sites where like wouldn’t necessarily want to make a log in for this. But where you would nevertheless prefer to see content localized in a way to understand.

BAN: And the third problem is, sometimes like for this one, this problem is solved by saying, okay. I want a way to specify that I would prefer this to be in celsius or Fahrenheit. Give these, is tailored for the UK or US, which is accomplished with the UR PTag. There’s a third problem which is that sometimes users might want something that differs from both the locale, the content is in, and their local locale as a specified weather browser.  It might be fairly common for people to request content in ENUS, with celsius is the temperature and nothing else changed because more or less, like, for example, the Mexico region, largely uses tailoring that resembles the US except for Celsius. It’s possible to have that, I have downloaded the ENUS on the browser. I would nevertheless, set the system to display temperatures in C and I would like that preference to be honoured on the web.

BAN: These are all things that would be useful to have. These are things that would make the ambient experience of the web better. There is a problem within the problem. This is a problem that is sort of pervasive across internationalization. If we were to directly expose, for example, the user’s operating system preferences directly as servers, this would make users with nondefault settings especially users with idiosyncratic settings identifiable. This is sort of like a particular problem in the the condition [T*EBS] of internationalization because when you’re asking for localization customization ace, you are saying deep about who you are.

BAN: So, for example, if you’re requesting, you could, by requesting, indicate you’re part of a politically disadvantaged minority or something like that. It’s a case where fingerprinting reduces the person’s anonymity to a small level that they are identifiable by servers is a serious problem.
So the goal is to let users express their consent fully as possible. It’s something we want to be tremendously careful with.  While prioritizing tailorings that might seriously impact the content of illegal if ignored. We want people to be able to get content that’s intelligible to them with little effort adds possible leaving a small fingerprinting surface as possible.

BAN: And the goal that I have set for this is, the fingerprinting surface established through whatever mechanism we choose, should be actually smaller than the surface offered by one entry and accept language. Also all fingerprinting that happens must be detectable. 

BAN:  Allowing users to express arbitrary preferences. We don't want to expose things to servers because, well, that immediately identifies that person. Not interested in making web applications that are flexible as native applications. You can expose things to your own computer that you don’t want to expose to the Internet as a whole.  And not finding information at all because you have to review information to reveal localization. I am like going to glance off of these now

BAN: One solution is, and this is the thing, most immediately impact it because it requires supporting a tag, supporting the UR did the tag. It allows users to surprise the concept that whatever the locale of the content they receive, they would match the first language and accept language. Even if you’re giving EN-US. Give me temperatures and Celsius on Monday of the first day of the week. This doesn’t reveal anything more than what is revealed by accept language. But current privacy best practices say that this is already revealed elsewhere in the stack is not a valid defense that adds features that provide fingerprinting vectors. How do we provide less of this, less fine grade information about the user than one entry in accept language?  

BAN: So this is again a proposed solution. This is exploring the problem phase rather than something that is necessarily what we want to end up with.

BAN: What we could do is separate out individual components of preferences that could be expressed by end individual components.

BAN: Which the advantage you get from this is, there are locales that specify temperatures. Celsius, 24 hour or H23 and Monday is the first days of the week. If we send URG, ten we are saying, okay. Give me in US as, that use the tailoring for Netherland. That would reveal specifically the one locale we want things tailored as, because there are many regions that have the preferences if we break them doubt, you could reveal you want the tailoring without revealing specification things about yourself. I am from one of those regions. One of the multitude of regions that formats this, please for not things like this.

BAN: Our goal is to allow people to hide in the crowd.

BAN: We want people to have a large number of other people with similar settings so it’s hard to individually identify them.

BAN: This is something that I will, where I start glossing over things.

BAN: In the interest of time, user research will be required to see, okay. What are the common sets of alternate preferences? That people can be expected to use. Sets of preferences that won’t flag our Kelvin example, produces someone’s to a size where they are immediately identifiable.

BAN: So one solution I have marked as the complicated one to determine via user research what default preferences other locales might be in common use. For example, give me Hindi, not Latin digits. What preferences for locales rather than saying. What preferences do people have? It’s less difficult to measure what other locales are, commonly, other locale tailorings are commonly requested in a particular locale.

BAN: Also, the ones common are simple ones that are common in some other locale. People don’t set their settings to something that doesn’t match a particular locale.

BAN: So if we support specific tailorings, number system is the highest one because it directly impacts content Intelability. We want content to be localized such that people can read the content they receive.

BAN: So, for example, we could, there are in regions, there are alternate number systems like native. We select that numbering system.

BAN: So during implementation, implementers determine what combination of references are likely safe in each locale. Safe is defined as something that won’t make you immediately and individually identifiable.

BAN: During use, the browser will read OS preferences from the system. Which is why the system is of interest. The browser determines by pick your favourite algorithm which these are preferences through the strings, the combinations of preferences logically safe in each locale. And only those preferences are revealed to the server. The ones in the version of the proposal that is currently up on GitHub, these are the ones we are considering.

BAN: Again, NU is important, it impacts the content intelligibility. Hour cycle and temperature measurement unit.  They don’t impact to the extent that NU does. Getting the wrong numbering system.  But I am sure people here are familiar with the frustration involved in verifying temperatures.  FirstDayOfWeek.  Common.  It’s this one selected because it seems there is a calendar or a ticket purchase site where you don’t necessarily want to log in.

BAN: But you would like to get things displayed in a way that is immediately comprehensible to you.  Calendar is a tricky one, because nearly every locale uses Gregorian calendar. For example, the Thai solar calendar might be something that you could do in certain locales without necessarily revealing who you are and immediately individually identifiable.

BAN: So we have got some mechanisms we are proposing. These mechanisms are dead simple.  So, for example, if we end up going with the 5 tags on the previous slide, there will be a client int header for each.  Servers using the Clint int architecture would request each one.

BAN: This is important because if these were just broadcast to servers, then that would be an opportunity for passive fingerprinting. Servers would get information without necessarily having to ask for it. And as a result, they would use more of the information to identify you without telling. Because the client hint headers require you to advertise the ones they are using, a server that tries to fingerprint, we want to stop it, but at least we know it’s going on.

BAN: The server is requesting more data than it needs to individually identify users, we can see it request more information.

BAN: And also to go along with that.  The server side sited is client hints architecture on the client side JavaScript API that can be used to discover sets for each tag. Key thing is like with the client who have API, which is kind of dead simple. Would require the settings being requested individually. So there is no way to say, okay. Give me all of the tailorings. A way of saying, okay. Give me your numbering system or give me your proposed measuring unit to address that something is going on in the chain. MU is the key in this case because essentially, MU as currently implemented, the only thing it does is temperature measurement system. It’s frustrating.

BAN: Okay. So that’s solution 1. Number 1, determine what sets of alternative settings are safe in each locale and allow those. A problem with this particular solution is that the smaller you are in your locale, the less information that you can reveal without making yourself potentially identifiable.

BAN: Also, it would require a fair amount of user research to determine what is safe in each locale. Another look that we are considering is one that is basically dead simple. Provide a small number of tags in this case, hour cycle measurement unit and numbering system. Provide a small number of settings. For example, for measurement unit, the only settings are auto, celsius and Fahrenheit. Number system, Latin and if there is a native numbering system, whatever that is. And then auto is whatever default is.

BAN: This would actually provide locales to identify 3 different numbering systems. Latin, some locales support native. And some have a default that is neither Latin or native. Here, we are providing a few tags.  And a limited number of settings for them, such that whatever information servers get out of this is fairly fine grained.

BAN: Again, to return to the elephant in the room here. This is something that we are advancing through other standard organizations. If it’s like a solution URG is the best, it would involve Intl. Also, we don’t necessarily anticipate advancing this past Stage 1 for this particular organization.

BAN: So what we are asking for is simply Stage 1 to explore this problem space to see what is possible.  And also, sort of maybe I am more interested in others, it might be a good sort of locus for discussing the approach within intl or within 402 with fingerprinting problems in general. Thank you.  

CDA: All right. We have Daniel Minor in the queue.  

DLM:  Yes. Thank you for the presentation. This is something we have discussed quite a bit internally with the SpiderMonkey team and the broader standard organizations in Mozilla.  So we acknowledge this is a real problem and worth investigating. We consider this to be a web platform wide problem. Not just TC39.  That’s something you acknowledged and we encourage you to investigate instead of imperative solutions.  What is done at the HTML and CSS rather than just JavaScript.  

DLM: We are concerned about increasing the fingerprinting surface. You have done a good job of addressing that in the presentation.

DLM: But another concern we have is that this could facilitate tracking and ethnic groups, but (??) of a group and that’s something we need to bear in mind. 

DLM: So to summarize, I would say we are neutral on Stage 1 for this. But unlikely to support Stage 2

BAN: Thank you. And I definitely hear the final concern there. For me, like I said, the most important one for this is making sure that people can get content in a number system they actually understand. But that’s specifically, the one that could allow people to be most quickly identified as a specific ethnic group. And essentially, what I would say with this is that people are already allowed to, for example, request specific scripts, which like a numbering system, reveals who you are.  

SFC: I have a reply to Dan and a separate agenda item. What is our timebox looking like?  

CDA: 10 more min?  

SFC: I will go ahead with my second agenda item. I don’t think the intelligibility is very clear. I think that it’s a very fuzzy line to draw and I am not necessarily excited about putting the numbering system in a separate class than the other items which are important for intelligibility and understandability. I think understandability is kind of more the right thing here in the sense that, a lot of users, for example, in places like India and many other places, have English as their user interface language and don’t necessarily speak English well, but understand enough to get by, and this is likely how users feel about the number systems.  When it comes to temperature unit, that’s also really important for the understandability of Web pages, if conversions and things are not necessarily clear to users. So I don’t necessarily agree with using Intelability as a metric here.

SFC: Because the line is fuzzy and it’s important to do what we said in the presentation, look at what are the axis where users differ from what their regional locale would otherwise focus on that and the unicode has specified for a very long time, are a really great place to start there.

SFC: What is the timebox?  

CDA: We have a few minutes left

SFC: Okay. I will reply to DE in the queue. Actually, the other DE has – has a question.  I will let the queue go forward

CDA: SYG?

SYG: So as an nonexpert, could you explain to a young child the actual additions for 402 to this proposal?  

BAN: So this may not involve fetching 402. If it does 402 it will involve support for additional locale extension tags. So URG or something roughly equivalent do it.  

SYG: What about 262?

BAN: No

SYG: So then the doing TC39 part is because of what again?  

BAN: Because whichever solution ends up being best or at lowest bad may involve at like simply supporting more tags in intl.  

SYG: Okay.

BAN: We are asking for Stage 1 to explore the problem space without any specific solution in mind.  

DE: I don’t know whether it makes sense to consider this as a topic for discussion or a Stage 1 proposal.  This problem space of exposing locale-related user preferences has been under investigation for years, and being or not being Stage 1 didn’t block that. And the biggest issue is the privacy issue that Daniel Minor raised. It is quite a serious privacy issue. DLM, could you elaborate on what you thought of the privacy mitigations that were included here? There was a declarative thing, Client Hints which Mozilla opposes. What other declarative solutions do you think should be examined?  

DLM: First the fingerprinting as a nonprivacy expert, I think the fingerprinting mitigations that BAN presented are quite reasonable. And I know he’s put a lot of work into this and partly in response to feedback from Mozilla and I believe the other implementers as well. So I think that looks good.

DLM: I do think even clumping things together like that does still have the risk of identifying someone’s a member of an ethnic group. Whether that’s worse than using font data like BAN said, I don’t feel confident to speak on that.

DLM: In terms of declarative solution, the feedback from the broader web platform group of Mozilla was to see if these things could be done through HTML or CSS rather than through an API. And I can’t comment  because that was my personal opinion, but feedback I received. We made a commitment to at least put together like straw person examples of what those could look like, which would would like to do and provide to the champions.

DE: That sounds excellent. I hope those people will be in touch with BAN.  

BAN: And I want to interject to say, without the client hints, architecture this is useful for the JavaScript API, which could still be useful for implementers who want to implement client hints.  

SFC: My first thing is, some things that I have discussed previously here and also that BAN has I think mentioned at some point are macro-region-based solutions. But these are based on mark row regions.  For example, western Europe or something like that. And we can create larger groups to not identify individual users or not even countries or script or languages. But macro relations. The second thing, we mentioned we are neutral. Can you clarify the concerns with Stage 2 that we have not addressed in the proposal presentation?  

DLM: It’s just the choice of venue.This is feedback from other parties at Mozilla. There was a strong opinion that the W3C.

DE: Sorry. That seems consistent with what BAN is saying. It might add tags here and other things would be in the W3C right?  

BAN: Yes. We are trying to advance to W3C

DLM: I am just stating. I wanted to clarify.   

BAN: We are asking for Stage 1 to explore the problem space here.

DE: I want to suggest that we consider this a discussion topic rather than a staged proposal. Once you have figured out which extension tags make sense to add to Intl locale, we will bring it to committee. Until then, investigation should take place mostly in the W3C where this privacy investigation could be done in a more detailed way or also in 402 meetings. It’s fine. I don’t think there’s more stuff to bring back to plenary until there’s a concrete set of tags that should be added.  

DE: I am not opposed to, if other people want to discuss it in committee further.

SFC: If I may, it’s good to get explicit comments on it from Apple or other implementers in the room. I have talked with DLM a lot about this. But like, I have heard a lot of crickets from other implementers like Apple, etc. One of the reasons we are bringing this to committee is to get the feedback from those other bodies.  

CDA: We are out of time. As for Ben, it’s your call, if you hear Dan’s comment do you want to ask for Stage 1?

BAN: I would like to ask for Stage 1.  

DE: Sorry. I know we are over time, but is MLS on the call? Can he give any comment on this proposal?

MLS: I am on the call but focussing on responding to an earlier issue. I think I am in line with others on this. I am not sure we are the right venue for it or not.  

DE: Do you have any recommendations for getting in touch with the appropriate people in Apple, in this other venue?  That’s been the challenge

MLS: Isn’t the 402 committee the right place to discuss this?  

DE: Have you gotten engagement with Apple there in 402?  

MLS: We have Apple attendees at every meeting, SFC, correct me if I am wrong.  

SFC: It has been raised there. Yes, but.

DE: SFC, Do you have Apple participation?

SFC: We have Apple up to 402.

DE: Did you not get a response on this issue?

SFC: It’s been that there’s more Apple people who come to this call, so I wanted to raise it here as well.

DLM: Just if I can quickly, there are a few meetings and I shared some of the fingerprinting concerns earlier on. I am not sure if he looked over BAN’s proposal.

MLS: Fingerprinting is important for us at Apple. Or blocking fingerprinting.  

CDA: Okay. Unless something is changed, BAN is asking for consensus for Stage 1. Do we have any explicit support for Stage 1?

SFC: I support this for Stage 1 on the grounds that there are, I do anticipate changes for example for supporting the additional subtags and others, and I think that it’s good to have a proposal at Stage 1 that we have a concrete venue to make those discussions.

DE: Okay. If this is a Stage 1, define the scope, with respect to the feedback from DLM and MLS about the venue. And the scope of the proposal here is, adding extension tags to Intl.Locale to support this broader effort in a privacy preserving way, giving more locale extensions, preferences from users. What is an agreeable scope for this?

BAN: It’s certainly agreeable to me.

DE: With the understanding that the privacy investigation is done outside of TC39 but the results could be fed back, if there is some positive path forward, could be fed back in the Stage 1 proposal. DLM or MLS?  Do you have thoughts on this?  

DLM: Yeah. We have no objections to this going to Stage 1.  

MLS: I don’t think I have any objection going to Stage 1.  

CDA: Okay. We have support from SFC.  Any other support for Stage 1?  

DE: +1

CDA: Support from SFC. And from DE and sounded like no objections but last call for any objections. Okay. You have Stage 1. Congratulations.  
### Summary
    - To 

### Conclusion

Stage 1 for the scope, “adding extension tags to Intl.Locale to support the broader effort of exposing user locale preferences in a privacy preserving way.”


## Withdrawing finalization registry cleanupSome
Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/tc39/proposal-cleanup-some)
- [slides](https://docs.google.com/presentation/d/18V56wPFL3TZ2hgvK3b9zQsvLaw4aGdy_asxJ_6at_hs/edit#slide=id.p)

DE: I would like to withdraw FinalizationRegistry prototype cleanups. This API gives you callbacks when something “dies”. When something is no longer referenced, except by a FinalizationRegistry entry or WeakRef, the engine may set the WeakRefs pointing to it to null and call the FinalizationRegistry callback, which was passed to its constructor.

DE: In general, FinalizationRegistry callbacks are invoked after JavaScript runs. You don’t interrupt JavaScript synchronously. That would violate our run-to-completion model. The contradiction in the universe would make everything collapse if we violated that [joking].

DE: So if you have a long task, if you have JavaScript or WebAssembly running for a long time, it’s a long time to get this callback running.

DE: And so the claim was that for WebAssembly, we should make synchronous APIs. They have trouble yielding to the browser’s event loop and yield control. The cleanupSome API solves this by polling for callbacks. This is explicitly called out JavaScript, so it doesn’t violate the run-to-completion model. cleanupSome gives everything a chance to run any cleanup callbacks and thereby enabling the use of long tasks.

DE: History of this proposal: Initially, Mozilla proposed this. There was initially a focus on Wasm games. Then, the Wasm CG considered coroutines as a way to generalize a solution. This became JavaScript promise integration (JSPI). It makes it so that you can call something which you can suspend and resume with JavaScript Promises. It should be possible to hook JSPI up with FinalizationRegistry to allow WebAssembly programs to call out to finalization callbacks during their execution.

DE: Apple raised legitimate concerns about whether we want to encourage long tasks, and the consensus is we don’t want to encourage long tasks. They are bad for performance.  I am glad that Apple raised this.  This API was split out and left at Stage 2. I have not heard any complaints about the lack of cleanupSome on the web. I don’t think any browser is shipping it either.

DE: So next steps?  Can we have consensus on withdrawing?  

DE: And then if somebody feels like contributing to Test262 to remove the apparent use of cleanupSome in garbage collection tests, because that was included despite the fact this was split out a long time ago into a separate proposal. This work would be good, but it is not a precondition to withdrawing this proposal. Any thoughts?  

DLM: SpiderMonkey strongly supports withdrawing this proposal, and thank you for bringing this to the committee.  

MM: So I strongly support withdrawing it, except that from the previous conversation about withdrawal, I don’t know what withdrawing means. So do we have a, if withdrawal simply means acknowledging that the champions don’t wish to advance this, and nobody else does, so we might as well remove it from the record, I am perfectly fine with that.

MM: If “withdrawal” means there’s some kind of consensus, this is from previous conversations, but withdrawal means there’s some kind of statement of consensus, that this must not come back or not want to come back or that, on this one, I am actually fine with that. But I want clarity on what it means. Some of the other withdrawals I would not be fine with.  And that stronger statement is unnecessary anyway

DE: In the process document, I don’t think there’s any particular need for withdrawal to signify something permanent. But I think it’s important it’s consensus-seeking. The position of the committee right now that we have agreed on not doing this proposal. I don’t think it’s something that the champion would just withdraw. A proposal can be downgraded to an early stage or withdrawn. Consensus of the committee is necessary for these transitions. The downgrade/withdrawal must be accompanied by reason.  

MM: So for this one, I think that the feature is in fact a misfeature and the language is improved by never having it. I am fine with the stronger implications. But for operator overloading, I would like to maintain the option to pick that back up and try to advance it at a later point. I am okay with it being demoted by zero, erased by the proposals. But with the stated reasons simply being that nobody is currently interested in advancing.

MM: Is that consistent with this document?  

DE: There are further reasons for operator overloading’s withdrawal, which we can discuss when that is scheduled. It is consistent with this document that we can withdraw a proposal for a reason, and we come to consensus on it, and then later we come to consensus on introducing that proposal again, for a reason.

DE: By default, we’re thinking this until we establish consensus that we are thinking another thing.  

MM: Okay. That means we might have consensus on withdrawal, but only be able to agree on a weaker reason for withdrawal, like the lack of energy of champions.  

DE: I don’t think lack of energy of champions might be the reason for some proposals, but not for operator overloading.  

MM: Okay. That clarifies. Thank you. We are into lunchtime.

CDA: JHD, can you be brief?  

JHD: Yeah. So this is not impeding this. Stage 2, we discussed, like, planning to not depend on it in those tests, and withdrawing, we will cement that further. Again, I think it’s reasonable to withdraw. But I wanted to make folks aware there will be Test262 changes because this does not advance, not that advancing was on the table.

KG: You can have a host or harness hook for cleaning up that can replace it, yes?

JHD: I believe that’s the intended direction. Yeah. I am not personally doing that work, but that sounds right to me.

DE: Yeah. Withdrawing this proposal doesn’t change particularly whether those tests need to be redone.  

SYG: It doesn’t change the implementations because clean up some calls to do the asynchronous cleanup.You still have to do clean up, but no longer callable from user code.

DE: It has not been callable from user code already

SYG: In terms of the code being there, we are not removing anything from implementations. It’s needed for internal implementation and now needed to be exposed by a harness hook for test 262.

DE: Sorry. Just a comment. I didn’t realize that’s how V8 is, but sure.  

CDA: All right.

DE: So it sounds like we have consensus on withdrawal?  Or do you want to call for that, Chris?  

CDA: Your call.

DE: I feel like we have consensus on withdrawing the proposal.

CDA: Okay, folks. Any objections to withdrawing cleanupSome? All right.  3, 2, 1.  Enjoy lunch.

### Summary
    - The FinalizationRegistry.prototype.cleanupSome API was created to enable long Wasm tasks to observe garbage collection without yielding to the web’s event loop. 
    - This need is now satisfied by Wasm JSPI, and browsers are not pushing to ship this API right now.
    - Given a shared goal in the committee on minimizing observability of garbage collection and avoiding long tasks, this proposal is withdrawn.
    - The committee was in complete agreement, and discussion was just around clarifications of what that means.
### Conclusion

    - cleanupSome is withdrawn
## Stop coercing things pt 2

Presenter: Kevin Gibbons (KG)
- Slides: https://docs.google.com/presentation/d/1VwHSzNOAjR6nZkO2DMOAkoyIwaVcjqhT7VOaNiWm8ho/edit#slide=id.g106f4536d9_0_109


KG: Hello. Welcome, thanks for coming to my TED talk. Okay, stop coercing 
things. So we talked about this previously. We got through some of the items. I want to get 
through more. So just to briefly recap what we’re talking about, passing something of the 
wrong type is almost always a bug and it is my opinion that bugs should generally be loud and 
not quiet. Which is to say it is almost always better to get an exception rather than silently 
having the wrong behavior. And, you know, concretely, we recently had added this new API that 
several people have observed you can request `arr.at('start')`, and this will in fact 
successfully give you the first item of the array through a series of mishaps and type 
coercion.

KG: We don’t have to keep doing this. Like, this is what we have been doing for the entire 
existence of the language, but we don’t have to. Precedent is good, but for sufficiently bad 
ideas, it’s worth breaking with precedent, and I think that this willingness to coerce 
arbitrary values to arbitrary other types is a precedent that it is worth breaking with. And, 
in fact, last time we talked about this, we got agreement on some of those, so concretely, we 
got agreement to not coerce NaN to zero and instead throw a RangeError and also when there is a 
required argument where undefined is not a valid value for that argument, do not coerce undefined to whatever type is expected here. So, you know, dot at `.at` with no arguments would throw an exception because the argument to `.at` is required.

KG: Also, I want to emphasize these are not hard and fast rules. If you want to come to the 
committee and say “in my proposal we are not following the rules that we’ve talked about in this 
[stop coercing things] presentation”, you should have a concrete reason to do so. That reason might be as simple as, "this API is basically a clone of an existing one and I want to make it work like the existing API".  
That’s fine. It just needs to be a reason.

KG: I have a pull request up with these two rules. Today I want to talk about three other things.  I’m going to go through these in order and unlike last time, I want to get to discussion of each of these in order, before moving on. So I have ordered these carefully and hopefully not controversial such that I consider 
important and then those I consider less important and maybe less controversial.

KG: So I want to start with this first one. I would like us to stop rounding non-integral 
numbers. If you expect an integer, then if someone gives you something that is not an integer, 
we should throw. Fun observation, the array constructor actually does this. It is the only 
place currently in the language that does this. When Temporal lands, it will have more.  
Temporal has very good reason, which is that, for example, if you are making a Duration and you 
say `seconds: 1.5`, that should certainly not give you a Duration of 1 second or 2 seconds.  So in 
Duration’s case, it was like really, really clearly necessary that you should throw a RangeError, but I think in almost all cases you should throw a range error.

KG: These are some examples of current silliness. Notably the TypedArray constructors, TypedArrays 
are usually more strict than arrays but they are less strict in this particular case, they will round arguments. You can ask for a length 1.5 Float64Array and it will not give you a Float64Array that is backed by 12 bytes. It will give you an array that is backed by 8 bytes. Why should we let you do this? We should not let you do this. Does anyone have thoughts on this?

CDA: There is Shane.

SFC: Yeah, so for example, when looking at indexes into arrays, it makes a lot of sense, because 
there is no possible situation where a non-integral number would make sense at that position. 
In the case of Temporal.Duration, Temporal made the choice that fractional digits and fractional second digits should instead be represented as integral numbers of milliseconds/microseconds/nanoseconds,  so the Temporal champions chose integral numbers. There could, however, be other cases, and I believe I raised some of these at the last time, that this was on the floor at one of previous meetings, where 
requiring integral numbers not necessarily because the context in which they are used necessarily always requires an integral number, but because there is still design space yet to be solved in accepting fractional digits. 
One example of this coming up is, for example, in the Intl.DurationFormat proposal, you know, there may be a desire to, for example, at some point support formatting of fractional hours and fractional minutes, which is not currently supported in the integral format duration proposal but is not necessarily because of some external variance or requirement that those be integral numbers. And I tried to make the argument last time that having that, you know, at least integral formatting we try to take the angle on all of these cases as being, as coming from the angle of doing a best effort and, you know, having a best effort, that we can in the future relax to make better is not necessarily a bad position to be in.  
So I’m fine with the idea of saying that, like, when the integral number is used in a situation where there is an external variant enforcing that this is always going to definitely be an integral number, that we can stop coercing and do what KG describes here. But I think it’s important to have that qualification instead of making a blanket everywhere.

KG: Okay.  I think two things. First, I think that that argument is a reasonable argument to make for why to make an exception to this rule for a particular API. Like I was saying, you should have a reason to make an exception, but if the reason is, like, you are concretely trying to make a best effort and we might change the behavior later, that’s fine.  
I guess I had three things. It sounds like duration format doesn’t require you to pass an integer. It’s a reasonable thing to do, to pass a non-integer value, so a rule I have written down about only taking integral numbers just wouldn’t apply if in fact you intentionally want to operate on non-integral numbers. But then also separately, like I think if you’re intending to change the behavior for non-integral numbers later, it is probably a better idea to throw. Like, I’m not going to tell you what to do, but usually we find that people start relying on behavior fairly quickly, and so if you want to leave space for treating certain inputs differently later, it’s generally best to reject them, not to make a best effort. But I guess that’s not always how 402 APIs work. I hear you and I think that does work with this. When you want to accept non-integral numbers, you should say why you’re doing so.

CDA: Okay, I think I’m next. And maybe you already covered this, but it’s probably worth 
pointing out for completion. I remember this from last time, and I’m not putting words in your mouth, so please feel free to clarify, but I recall that the goal of what you’re proposing here is just to change the default treatment for new APIs, and there can still be exceptions where you might want to not follow the guidance on what you’re proposing if there’s a good reason to do it. But it’s not to say that we can never do coercion in situations where it makes sense.

KG: Yeah, definitely.

CDA: SYG?

SYG: Yeah, I wanted to -- first I wanted to respond to Shane.  I want to better understand 
what -- because the gestures of what I understood was you would like to have the option to put 
accept non-integral stuff later.  If that is the case, we can go from throw to no throw, so 
what is the down I’d to throwing today and then change it to no throwing once you add 
non-integral support?

SFC: A few things here.  I’ll respond.  I’ll start by responding to Kevin can then respond to 
Shu.  So one thing I don’t completely -- I’m not completely clear on here is we already have 
mixed precedent in the standard for this as Kevin has pointed out.  That the array constructor 
has different behavior than certain other APIs.  So it’s not clear to me necessarily -- so 
necessarily that we’re changing precedent.  In fact, we’re actually creating a new rule that 
didn’t exist before.  It’s not necessarily clear why we’re creating that rule.  Then to respond 
to the question about, well, can we relax exceptions later, the -- there’s the different 
perspectives that can be taken on this question, and, you know, I’m not going to derail this 
discussion right now to have that discussion about, like, you know, situations where relaxing 
exceptions is better, but there’s also definitely cases where, you know, we can have best 
effort behavior now, and then another -- and then, you know, continue improving on that best 
effort behavior in the future.  That’s exactly how locales work.  That’s exactly how user 
preferences work.  When we have more information and we are able to accept more information, we 
can improve the behavior.
.
SFC: And it’s often easier for -- I don’t want to necessarily have a debate about this right here, 
but one advantage of having a behavior that continually improves, especially in the Intl space 
is that users can -- or developers can deploy code that runs on both older and newer systems 
and has, you know, the improved behavior on newer systems and has fallback behavior on older 
systems.  And that just works and solves their problems.  We can have a debate about is the 
case I described with formatting of fractional minutes, if that gets added in the future, is 
that a place we should -- you know, where which behavior is better or not.  We can have that 
discussion.  It could be the case that we want to inform users loudly in that particular case.  
But I think that as general rule, you know, we should leave open the option for proposals to 
take that other position of, you know, of having best effort behavior.
.
SFC: Yeah, and KG has another item on the queue.
.
SYG: I want to respond.  Well, I want to respond to that.  So I think perhaps locales -- not 
locales per se, but the internalization API space has a different like impolice contract from 
over aist, because I have the counts -- I have the opposite intuition that general rule should 
be that we do not have APIs whose behavior changes over time, because as Kevin said the pattern 
that we have seen very often is people depend on behavior today very quickly.  So perhaps the 
internationalization is a special enough space that there’s an expectation that behavior does 
vary over time and they’ll write their code today with that in mind, but that does not match my 
intuition for the rest of language APIs.  And I think the general rule ought to be for APIs 
that do not already have the understanding today that their behavior is likely to vary over 
time, that they do throw.  Like, that seems the right general thing to me, and if we need to 
carve out a different precedent for internationalization because the social contract around how 
people code internationalization stuff is just different, that seems warranted.  But that’s not 
my expertise.
.
KG: Yeah, so two things.  First, I do want to explicitly affirm that I’m intending to leave room 
for proposals to say that in some particular case, it makes sense to round non-integers.  So if you 
want to make that argument on any proposal, like, absolutely.  I explicitly want to leave room 
for that.  The second thing you said you weren’t clear on, why do we need a rule given there’s 
already precedent. Empirically it is the case that that the new APIs we have been adding round 
integers and I’m trying to change what we do in the future.  My proposal is: let’s do a 
different thing in the future.  It doesn’t need to be a rule per se, but, like, that seems like 
the way to go.  Guideline, not a rule.  Okay.
.
KG: I think we’re done with this queue item, then.  Let’s go through the rest of the queue.  Shu?
.
SYG: Just, yeah, sounds great.  The current exception that we just discussed notwithstanding, I 
strongly support this as a general thing for future APIs.

KG: Okay.  LCA?

LCA: I think this seems very reasonable and we should do it.

KG: Thanks.  TAB?

TAB: Yes, generally, strongly agree with all this, and as I said in my message, literally 
the duration constructor not allowing non-integers said me a bug two days ago, so let’s do more 
of that when reasonable.

KG: Okay.  And then we have strong agreement with this from RGN and thumbs up from RKG and 
a plus 1 from JHX and an observation that arr.at(x) behavior is already different from index array 
indexes where array indexes doesn’t round, which a good observation and a good reason that such 
an API in the future ought to throw.  Plus 1 from Philip.  Plus 1 from Daniel.  Plus  1 from 
Chris.  SFC asks what the language is for exceptions.  Yeah, that’s a good question.  Let me 
open up the pull request.  What I have written for the previous rules, new features generally 
should follow these rules, none of these rules are inviolable, but you should have a good reason 
for any particular feature to deviate.  So it’s very open.  You just need to have a good 
reason.  Does that answer your question, or do you want to also speak?

SFC: Thanks for pulling up that text.  Yeah, "good reason" is a little bit -- I mean, it’s vague on 
purpose. I’m more worried that, like, I don’t want to be spending a lot of time, you know, in having these types of debates about future Intl APIs, you know, do we throw or do we coerce.  You know, like, which is better for best-effort behavior.  I think it would make me a little bit more warm and fuzzy if we 
could list out that as an example in addition to the one about close cousin of an existing 
feature.  I would feel a little bit more warm and cozy if we said something along the lines of 
what I had been describing earlier, but, yeah.

KG: Sure, yeah, I’ll try to workshop something in there.  And, yes, intentionally vague.  WH?

WH: Things that currently do truncations include ToUint32 and to ToInt32. In addition to truncation to an integer, they do modulo 2**32. What is your recommendation regarding those?

KG: Yeah, that's a good question.  I kind of intentionally didn’t cover them because I wasn’t sure 
that I was going to be able to get agreement on them.  What I am currently proposing is that for an 
API that would do ToUint32, you would do toNumber, though see later about that, and throw if the result is not integral, and then do ToUint32.  I think there’s room to 
also make a rule that says these things should restrict the domain of their input and throw for 
anything that they would do a non-trivial modulus for.  Didn’t suggest that because 
you didn’t expect us to come to agreement on it and I thought the integer one we were more 
likely to agree to.
.
WH: Okay.
.
KG: Now that it’s been brought up, does anyone have opinions about whether things that currently do
ToUint32 ought to throw for things outside of their domain rather than performing modulo?
.
WH: My opinion is it depends on the context.  There are things which do ToUint32 or ToInt32 for 
which we’re interested in the mathematical value of the number and we should not be doing modulo.  On the other hand, there are things that do ToUint32 or ToInt32 that treat 
integers as bit maps for which the modular behavior is pretty much essential.
.
KG: Yeah.
.
WH: It depends on whether you’re interested in the number as a bit pattern or whether you’re 
interested in a number for its numeric value.
.
KG: So I think I’m not going to propose any new rules regarding ToUint32, but suggest to the 
committee that in the future, if you are designing an API which would in the current world do 
ToUint32, you should think hard about whether it makes sense to perform Modulo.  But I’m not 
going to propose a rule around that.  Okay, great.
.
KG: Before moving on, I would like to ask for explicit consensus for this thing up here with the 
caveat that it’s only intended to be a guideline, not actually a hard and fast rule and I’ll 
try to workshop some wording around SFC’s concrete case for when Intl APIs may want to go 
against this guideline.
.
CDA: Before we ask for consensus, there is one more question from Andreu.
.
API: You called out explicitly NaN to zero, but negative zero and undefined, I assume you would want 
those to three as well.
.
KG: Negative zero is an excellent question.  I think not negative zero.  I think most places 
that accept zero should accept negative zero.  You generally don’t want to regard those as 
different.  And undefined is a separate question that last time we got agreement not to coerce 
undefined to anything.
.
RPR: CDA?
.
CDA: Sorry, I just was seeking clarification on you were asking for consensus for your -- you 
referred to something, Peter.  I was confused, is there something different than.
.
KG: This is what you were plus-one-ing.  I have heard a great deal of support for it.  I’m 
formally calling for consensus on a new guideline, which I realize is a weird thing to call for 
consensus for.
.
KG: Okay, having heard a great deal of support and no objections, I will take this as consensus and 
update the pull request later.
.
RPR: And explicit support from EAO.
.
RPR: I explicitly support.
.
KG: Okay, moving on to an almost certainly more controversial one, I would like us to 
stop coercing objects to primitives.  If your API takes a string and someone gives an object or 
a function, you should throw.  They have given you the wrong thing.  You should not invoke 
user code in the middle of your execution of this function; that’s not the right thing to 
do.  If the user wants to do coercion, they can just do the coercion.  Also, I 
have to point out that this would remove one of the largest sources of side effects in the 
language and a ridiculously large class of engine bugs because user code can have side 
effects and the violate invariants, and it’s just generally bad. I think that usually,  
when you have passed a function to something that doesn’t expect a function, that’s a bug, or 
like an object to something that expects a string.  That’s a bug.  You know, you shouldn’t be 
able to join an array of an empty object.  Like, "a[object Object]b" is just not the outcome that 
you wanted here. If you are passing a date to Math.max, probably you were expecting to get a 
date out, not a number. If you are padding a string with number `'x'.padStart(4, Number)`, I don’t know what you were expecting, but you weren’t expecting the letters “fun”.  That’s not fun.

KG: We should stop doing this.  Now, I recognize 
there are significantly more reasonable reasons to want this.  But I do think that use cases 
for it would universally be better served by explicitly doing the coercion yourself.  Coercing 
to string is trivial.  Coercing to number is trivial.  It’s just 
`''+x` or just `+x`.  Boolean is `!!`, I’m less certain about coercing to 
Boolean, if someone wants to make an argument that this should only apply to things other than 
Boolean, I’m open to that argument, but, yeah, we should stop doing this.  Thoughts?
.
SYG: So I’m -- unsurprisingly, I like the idea and I support it.  But my intuition is that I 
think the economic cost is more than just engine bugs.  Even though that is certainly a large 
class.  Both performance bugs and, well, performance issues, I suppose, and security bugs.  
Security bugs are by far worse when unexpecting user code runs.  But even for performance 
stuff, this happens often because if, as part of argument coercion, it -- you change thing that 
invalidates a fast path that you’re currently on, you just now have fallen off the fast path.  
So that’s bad.  Also, I think everybody in this room spends a lot of collective time writing 
tests for these corners, like, an inordinate amount of time for these corners.  That does not 
seem like a good use of our time.  It would be good if we stopped doing that.  I think on every 
level of the JS ecosystem, I think there’s some economic cost attached to this.  It would be 
nice if we could stop doing this for new APIs.  Also, just going to my next topic, which is I’m 
wondering what TypeScript does as a non-typeScript writer.  If you pass objects to something 
that expects a primitive, does it warn by default, error by default?
.
KG: Yeah, TypeScript doesn’t have warnings.  That’s just a violation.
.
SYG: Okay, thanks.
.
MF: Can I get further clarification to that answer?  Is that because the TypeScript types 
for these APIs are more restrictive than reality?
.
KG: Yes.
.
MF: Okay, thank you.
.
KG: And I believe the TypeScript team has previously expressed that they tried to keep to the 
spirit of APIs and, like, get annoyed by bug reports about people passing the wrong thing.
.
RPR: We can hear more about the spirit from DRR himself.
.
KG: Excellent.
.
DRR: Yeah, it’s exactly this.  Like, for all intents and purposes, you really did want to say 
this should be a number, this should be a string, and then people say, oh, well, technically it 
hasn’t -- anything that has a `toString` and, really, I don’t think most people on this 
committee -- maybe I shouldn’t say that, but I mean, this is the points of the presentation, 
right?  Like, it was really never the intent, right?  And hopefully you’re not running into 
code that does that sort of thing either.  So if we have more cases where we can just say, no, 
this is is what the actual behavior is, that aligns better, I think, what most type checkers 
would want, including ourselves.
.
RPR: GCL has a plus one.  And message.  On to EAO.
.
EAO: Yeah, so I support this, but also the first thing I’m going to do is kind of look for an 
exception for it.  In that the Intl message format proposal I’m championing, there is, I think, 
a valid use case for wrapped primitive values in the compound -- to deal with compound values, 
but I think I would -- when championing this and explaining it, I think it is up to me to 
explain why do we need to allow for this weird thing rather than being able to assume by 
default this is okay.
.
KG: So I want to ask, would your use case be that, for example, this first thing on the screen 
ought to invoke the `toString` method on your message format objects or that you would have a 
new API which would accept things and then do coercion?
.
EAO: So it would be a new API where the new API -- for example, when formatting a number, would 
in most cases expect there to be just a number, but would be okay with, for instance, a `new 
Number(...)` instance with an options bag attached to that and for stuff to happen with this.  But 
specifically, I am expecting that in order to get that to pass, I need to explain myself and 
why this particular thing needs to be done.

KG: That sounds great.  And just as with the previous item, yes, I think that when there are 
exceptions, that’s fine.  We just need to have a good reason.

PFC: SYG already touched on this, but I can confirm that this object-to-primitive coercion behavior is a big source of lots of lines of code of tests in test262 that don’t actually test situations that occur in the real world.  There are loads of tests where, if you have a number argument to a function, it passes in an object with a `toString` method and a `valueOf` method.  And we don’t even test all of the code paths there usually.  We’ll test that, for example, if you’re coercing to a number, that will call `valueOf` over `toString` and vice versa when coercing to a string. I think normally we don’t test `Symbol.toPrimitive` in test262.  And we also don’t test the case where your `valueOf` method returns another object that itself has a `valueOf` method, for example, so that you can go around in circles indefinitely.  So who knows if implementations are even getting those right. So, I strongly support not doing this anymore.

DE: I’m +1 on this proposal in general. About the particular MessageFormat use case, I 
guess I would want to review that more.  But in general, I think we’ve been assuming that 
primitives that are wrapped get unwrapped when they’re in parameter positions in this kind of 
uniform way.  I’m okay with removing this because I’m not convinced that that’s especially 
useful behavior.  But I wanted to kind of be explicit that if we’re considering making that 
decision.

KG: Yes, that’s a good call-out.  I do intend this to be a typeof check, just like you would 
write in user code, and of course typeof a boxed primitive does not, like -- `typeof new 
Number` does not give you “number”.  It’s an object, so my intention is to reject those along with 
everything else.

DE: That sounds good to me. I kind of want to ask JHD because you expressed interest in coercion performing unwrapping of boxed primitives in the past.
.
JHD: I would say that I will be thinking about it as these cases come up.  But I still think that a general default of don’t coerce stuff is the right place to start. And so even though I didn’t put myself on the queue, but I support everything that Kevin is saying here. But I am -- I will -- you know, how can I say this without sounding antagonistic?  I reserve the right to brings up boxed primitives in the future, but I can’t at the moment conceive of when I would have a strong opinion about it.

DE: Okay, that’s great.  So boxed primitives, we might enable them for certain proposals, but 
you’d be okay with the blanket general rule being default be, we don’t support boxed primitives?

JHD: Yes, that’s right (we don’t support them as arguments).

DE: I’m happy to hear that.

JHD: I don’t have a concrete opinion at the moment.

DE: You mean by proposal by proposal basis, which we confirmed already, as opposed to leaving 
the option over to overturn the rule in general or something?

JHD: Correct. I think EAO expressed earlier as well that it’s the correct thing to do is be as strict as possible by default and explicitly agree for any exceptions, as long as we are open to reasonable exceptions.

DE: Perfect.  I’m really glad that we agree about that.

WH: I’m on board with this, except for boolean. I’m not ashamed to say that I write 
`if` statements using integers as the condition. I use `&&` or `||`
with arguments that are not booleans and sometimes rely on them actually 
carrying the uncoerced value through.  One of the things that can happen with booleans is that you’re interested in whether the argument is truthy or falsy, and, depending on which one it is, you’re actually interested in the uncoerced value of the argument.  That’s what `&&` does, for example.

KG: Yeah.  I agree that Booleans are both more useful and also significantly less problematic 
because coercing to Boolean does not invoke user code.  So, yeah, I’m happy to say that 
coercing to Boolean specifically continues to be fine.  I’ve done the same thing myself.

RPR: I think SFC is going to agree.

SFC: Plus one. (queue entry: "truthy/falsy has been fundamental for a long time")

RPR: And PFC.

PFC: KG already said what I was going to say.

RPR: Got it, yeah, does not call user code.  TAB?

KG: Sorry, I was reminded of one more thing on this front, which is that we have in the past run 
into cases where we had an API which took a boolean and we then wanted to expand it and we 
couldn’t, which leads to one of my favorite sentences in all of our specifications in ECMA 402, that is like 'for historical reasons, the string value “false” is treated as `true`', 
which, like… I gues we will continue to have issues with expanding APIs from 
Booleans to a larger domain of types.  But, yeah, it’s plausible worth it.

TAB [on the queue]: plus 1 to everything.  Maybe keep allow bools, but `!!obj` is fine.  

RKG [on the queue]: +1 modulo the Booleans.

RPR: You want to allow coercing to Booleans?

RKG: Yeah, I think I would -- I would favor allowing boolean coercion.

KG: Cool.

SFC: Yeah, I have the next two items.  I want to switch the order of them and do the second one 
first.  So GetOption is the -- is an abstract operation used very widely in Intl, in Temporal, 
in 262.  And like, this is -- seems like the biggest case that, like, this change would impact.  
And I think that the -- you know, the status quo of GetOption behavior is definitely, I think, 
something that developers are accustomed to, that spec authors like myself and others, are 
accustomed to.  And I don’t necessarily think we’re in a position right now to basically say, 
like, oh, we’re going to make GetOptionV2, which has a different type of behavior.  I think 
we have GetOption and GetOption works the way it works, and we should keep using GetOption.
.
KG: You can say more about why we can’t just make GetOption strict?  That’s the explicitly the 
thing I’m asking for.  I really don’t want to coerce values from options bags where you look up 
the value and it’s an object and you coerce that to a number.  That is explicitly what I want 
us to not do.  Why can’t we just stop doing that in new things?
.
SFC: I think that -- would you consider it to be an -- a reasonable exception that, like, all 
other options in this options bag do GetOption V1, we add a new option to the option bag and 
continue the use GetOption V1, is that a case of --
.
KG: Yes, I think when you already have an existing API that coerces, you know, five of its 
arguments and you’re adding a sixth, also coercing that one is fine.  That is a reasonable 
exception.
.
SFC: Okay.  Yeah, another thing here is like, GetOption and options bag is quite a different 
beast than, like, you know, coercing arguments or coercing the callee.  I think 
those are quite different things, because options bags are by their nature, like, something 
that, you know, has certain types of rules.  So I guess what I’m trying to argue -- what I’m 
trying to say is that the mental model that goes -- that is behind basically named arguments 
and options bags is fundamentally different than the mental model that goes into positional 
arguments.  For example, if you’re writing, like, a named argument, you have to name the 
argument in your call site.  And then, like, you know, it’s really -- it’s much easier when 
reading and reviewing code that, like, this thing is expected to be a string, I’m passing 
anything that’s not a string, it’s going to be coerced to a string.  That’s much more clear.  
Now, positional arguments, I think there’s definitely a very strong argument from the side of 
readability.
.
KG: I guess I just don’t share that intuition.  I think that if I end up constructing an options 
bag and, like I do, you know, measurement unit V and I have accidentally messed things up such 
that V is holding an object, I would prefer to get an exception rather than calling to ToString 
on that.  I just don’t have the intuition that, like, you want to do coercion for arguments and options bags.
.
SYG: Yeah, I think I’m next on the queue.  I agree with KG here.  I also don’t -- I think it 
is true that options bags have different rules.  Namely they have names.  But I think it would 
be harmful to explicitly say that name parameters ought to coerce by default but positional 
arguments do not.  I think the -- the engine costs and the test stuff, like, I think all of 
those arguments also directly apply to named arguments and options bags.  I don’t quite 
understand what the categorical difference is with respect to coercion, so I would strongly 
prefer that we do not coerce.
.
CDA: Shane?
.
SFC: I mean, I just wrote a little example code.  Like, that’s fine to coerce, string to number 
in that case.  Like --
.
KG: Yeah, the coercing string to number is the next item.  Right now we’re only talking about 
coercing object to number.
.
SFC: Okay.
.
SYG: Yes, specifically the cost around invoking user hook points like value of and ToString.
.
KG: There’s less value there, because GetOption does a property lookup, which is hookable.
.
SFC: Okay, so let’s go ahead to my other agenda item, then, which is the one that’s currently 
says it’s topic.  15 minutes remain.  So we have Symbol.toStringTag and Symbol.toPrimitive.  
Like, the -- I mean, we’ve referenced that user code earlier in this conversation, but isn’t 
the whole point of having that user code specifically so that, you know, library developers can 
design objects that coerce into a way that makes sense for those objects?  Like --

KG: Yeah.  Well, no, actually, as far as I am aware, the only reason that `Symbol.toStringTag` -- 
well, toStringTag is kind of irrelevant, because toStringTag is only used for Object.prototype.toString.  But `Symbol.toPrimitive`, yes.  The reason for that is it was thought to be 
good idea to let library code customize how they would coerce to primitives.  My understanding 
is this was part of a larger effort in ES6 to explain the behavior of existing things in the 
language in terms of user definable hook points and in particular, Date happens to have 
different toPrimitive behavior from everything else.  I don’t particularly share that 
rationale, and this is explicitly a rejection of the goal of allowing people to, like, make 
things that coerce to primitives in interesting ways.

JHD: I just want to clarify, this change wouldn’t affect that goal, this just says that if you 
want to make things coerced in interesting ways, the users will just have to do the coercion 
before they pass it into an API.

KG: There actually isn’t a way for a user to coerce to primitive in general.

JHD: Yeah, they can plus it or String it.

KG: There’s a way to coerce to a particular type of primitive.  But that’s also toString and 
valueOf.  The thing that toPrimitive adds on top of toString and valueOf is if you are 
just coercing to primitive without specifying either string or value.

JHD: It takes a hint. So it always is doing one of the two and there a default hint, but it’s -- 
those are the two mechanisms. You’re always either coercing to string or to number, so 
if you want to do that as a user.

KG: Yes.

JHD: Or Boolean or whatever.  But those are the two hints you’re providing, so you can still -- 
this change that you’re advocating for, KG’s will not affect the ability to define to custom behavior and when users do the coercion themselves instead of doing it inside API, that same customization will apply, so moving where the magic conversion happens.

KG: That’s exactly right.  If the user wants to coerce the values that a library gave them, they 
should coerce the values before passing them somewhere and expecting the language to do the 
coercion.

SFC: Yeah I guess as a general rule for objects, since objects are things that library authors 
can customize the coercion behavior of already, it’s just not clear to me that, you know -- and 
also the fact that these objects are already, you know -- can already have the custom coercion 
behavior in all other existing APIs.  It’s just not clear to me that it’s necessarily a wise 
choice to sort of make APIs that were defined before 2023 use the custom -- the library 
author’s custom coercion functions and APIs introduced after 2023 need the explicit coercion 
code at the call site.  And I’m just not convinced about that.

KG: So we heard from engine authors that this would help a lot with eliminating bugs and 
engines.  We heard from test authors that this would save a huge amount of efforts for tests.  
Is your belief that this is useful enough to outweigh that? I feel like eliminating a 
large source of bugs is very, very valuable, and even acknowledging that there is value in this 
for some cases, it just doesn’t seem remotely close to comparable in value.

SYG: I would find that counterargument more persuasive if we had empirical evidence today of 
library authors taking advantage of the power given how long it’s been around.  I haven’t seen 
much of it.  But happy to be persuaded otherwise.  I mainly see it abused as an attack vector.

RPR: Ten minutes remaining.  SFC?

SFC: In terms of, you know, order of constituencies, you know, my understanding is that we 
usually respect or users more than engines more than tests, so if this affects engines and tests but 
harms users that’s not really an argument that --

KG: Users then developers then implementation complexity then test.  Users is the users 
of websites and they are directly harmed when there’s an exploitable vector in an engine.  
Eliminating a source of engine bugs that leads to Chrome having a zero day is of direct 
benefit to users, who are a higher priority than the developers.

SFC: Sure.  To respond to SYG’s point, I’m not the person who proposed this and I haven’t 
actually gathered the data.

SYG: You’re making a counterargument that this is a power that library authors enjoy today and 
you don’t want to take that away.  I would like -- I’m not sure if it -- okay, I don’t want to 
get into this.  If anybody has data, I want to like to see.

KG: I think it’s worth talking about TypeScript, because if you’re shipping a library that relies 
on this, TypeScript will say your user value is not a string, so I think in practice, this is 
not a thing that it is easy to rely on right now.  Because doing so means cutting off a large 
fraction of your users.

WH: SFC’s point brings up the larger point that behavior of similarly-looking APIs
will depend on *when* they were standardized by TC39. I’m concerned about shipping our 
process which confuses users unfamiliar with our history.  Now, that’s a larger discussion, so I’d like to know if there’s a way to get users to stop doing coercions in existing APIs?  Maybe TypeScript or 
something?

KG: TypeScript, yes, TypeScript is the solution.  I agree, I actually have that concern and 
that’s why I have this parenthetical about close cousins of existing APIs.  For example when we added findLastIndex, that is close enough to findIndex that it 
makes sense to copy it exactly, "bug-for-bug compat" as we sometimes say.  But also, I think 
a thing we did in ES6 was add some new array methods that treat holes as undefined.  And 
this has occasionally been confusing but I think worthwhile.  So, yeah, it’s definitely a 
concern, but also I think separately, TypeScript makes it so that most of the time, you’re not 
doing this if you are using TypeScript.  TypeScript isn’t completely sound, so most of the 
time that you do end up doing this in TypeScript, it’s a bug, and I think users will be happier 
if we can catch that bug at runtime in at least some cases, even though we can’t in older APIs.

TAB: Yeah, I’ll be quick.  As a program author, in Python, which is real relatively strict about 
not allowing coercions, I usually find this a benefit to me, to I do have to be explicit about 
“turn this into a string for me, turn this into a number for me” because it avoids bugs in my own 
code, so plus 1 as an author helper for this.  As opposed to it being an occasional convenience 
that I’d be losing.  Then related to that, on the topic of the inflection points of shifting 
author behavior, in addition to TypeScript probably being useful there, just the fact that we 
have -- we will begin to have increasing numbers of APIs that don’t coerce will change author 
behavior all on its own and have them start leaning towards eagerly coercing when necessary, 
even in APIs that don’t require it.  So I think in general, this -- the amount of -- as 
strictness goes up, author behavior itself will shift to accommodating that strictness.  
That’s it for me.

SFC: So there’s been other comments just in this week’s meeting where talk about TypeScript, and 
what we often say in these situations, and I can name them if you want me to, “we’re not 
standardizing TypeScript, we’re standardizing ECMAScript” which has constraints that are 
different than TypeScript.  I do agree that TypeScript can really help with, you know, making 
it so that, like, library authors maybe don’t take advantage of ECMAScript language coercion.  
But there are ways to get it sorted in; it can be written in TypeScript 
definitions.  Like, you know, TypeScript has some flexibility in it. We don’t need to typically
belabor that point.  But I definitely take the points that 
TypeScript helps here; it's just that I don’t take the point that TypeScript is the panacea for the 
problem.

JHD: So I would be the last person to say that we should use TypeScript as evidence to do a thing 
in TC39, but what I would say is what it does do here is indicate that in fact users simply 
don’t use this feature. Period. Because there have been -- I am probably one of the few
people that have ever filed a TypeScript bug for the types not accepting coercible things.

KG: It happens more than it should.

JHD: Sorry, the -- people pass things and -- in that need -- that get implicitly coerced a lot.  
What I mean is when users are forced to do the coercion, they simply do the coercion because 
that’s how a type TypeScript user would solve things: “oh, I put in a string that isn’t a string, 
I’ll make it into a string”, problem solved. I think that serves as ample evidence it’s not 
going to hurt anyone to give them this warning in the language instead of just in TypeScript, 
and I think it’s much more valuable to provide this strictness in the language than to do it 
for the subset of language users that use TypeScript no matter how large or small that subset 
is.

LCA: Yeah, a comments on this, I thought of this because of the comment you made, JHD, based 
on the TypeScript issues.  A lot of web API -- web APIs generally do this object to 
primitive coercion, and whereas it is much more strict about things like accepting integers or 
clamping or sort of doing -- being more strict around those things, it is very loose about 
coercion of objects to primitives.  And this would sort of desync us from WebIDL, which 
maybe is okay, but I wanted to bring up that this is something that will definitely happen.

KG: Yeah, we don’t specify WebIDL but my intention is to follow up there and concretely my 
intention is to introduce a legacy web attribute and add it to every API and then change the 
behavior for things that lack that attribute so they don’t coerce.  Remains to be seen if 
that’s something that web and W3C will be on board with although I brought it up and have not 
gotten shut down out of hand.  So definitely agreed.  Plan is to do that.
.
LCA: Okay, happy to hear that.
.
SYG: It is not pre--- we didn’t coordinate this with KG, but if you need any help, I’d be 
happy to provide any assistance, organizational, that kind of thing, inside to try to make that 
happen.  Because I think it would be good for all browsers.  I was going to -- we can talk 
offline about user hook points, but I think in the interest of time, maybe you want to ask for 
consensus.
.
KG: I would like to ask for consensus for - not quite this thing up here.  It is specifically 
things which take primitives other than boolean, so bigint, symbol - I don’t think anything  
explicitly takes null - should throw a TypeError rather than 
invoking toPrimitive or toString or valueOf.  Same caveats as last time, if you want 
that in a new proposal, it’s perfectly reasonable to make a new case for it if you have a 
reason to.  I’ve heard several bits of support.  Any objections?
.
WH: What about coercion functions?
.
KG: I think coercion functions are a clear case where you want to do coercion.

RPR: SFC?

SFC: I raised several points and I think a lot of the points have been addressed, but I am uneasy about the named argument and thing as well as the, you know, library author bifurcation thing.  These are things that I believe the committee is undervaluing.

KG: So we talked about all of those and I recognize the library author's concern.  I felt the response was compelling.  The cost to users of the browsers from the bugs that happen is quite substanding and the existence of TypeScript demonstrates in fact library authors are not doing this because any library author doing that, it doesn’t work with TypeScript. We are not shipping TypeScript or standardizing it, but I think that the fact is that many people are using it and so the fact that TypeScript does do this is good evidence that library authors don’t rely on that.  I felt this was a compelling response to your point.  

SYG: Yeah.  I think there is actually – the counter-arguments given to your concerns are more hard than soft and I would like to understand why you have found them uncompelling.  

SFC: I would find it compelling if – one thing I heard SYG mention, for example, is that like, you know, users are harmed by security exploits.  That’s mentioned in words.  I know I sometimes read posts about things like that.  It’s good to sort of, you know, quantify that and make it more clear.  This is the problem we are solving.  I hear the developer ergonomics-type questions for like users of libraries.  I totally understand that.  And I also appreciate that as a developer.  I am talking about taking the angle of – I write a lot of ECMAScript libraries.  And as a library author, it’s the angle that I am taking this from.  This is basically what I do for a living.  And like you’re taking power away from me.  And I want to sort of understand more if – are users being harmed by this?  Taking that for granted?  I want to see that written down more clearly.  And yeah.  I mean, I don’t like taking the unpopular position on a committee, but I am – it’s likely that I can be compelled with time and evidence and discussions about this.  

SYG: Hard evidence, users are unequivocally harmed by this. We can work with Project Zero to pull up stuff that has come up in the past.  We have paid out thousands of hundreds of dollars to things like user code, detaching or ArrayBuffers in built-ins that did not expect argument coercion to Deattach an ArrayBuffer. Object hurts this because it offers a surprising attack vector; you can see implementers are forgetting to really check.  If you want hard-cash numbers, we can work to get that.  I feel confident saying, they are most harmed

KG: We are at time.  We can come back with this next meeting.  Deciding this now doesn’t affect anything.  I want to briefly mention, I didn’t get to the third thing, which is fine, which is that I do want to discuss maybe we stop coercing string to number and conversely.  Be prepared for that next time.
And I reduce the scope of this particular item to not encompass Booleans.  Not asking for consensus because Shane has objected.  And I would like more discussion, which I am happy to have.  Look for this item to come back.  Thanks, all

RPR: Thank you.  We have support from RGN and EAO.

### Summary
- KG explained the various problems caused by coercion, and raised several concrete questions to the committee about which aspects of coercion we should limit for future proposals.
- SYG supports this program, noting that Google Project Zero has found several security issues due to coercion.
- Most speakers were supportive of these changes.
- SFC defended certain kinds of coercion for various detailed reasons.
- The committee generally supported *maintaining* ToBoolean coercion, which is quite different from other kinds (e.g., it doesn’t have side effects, and is very well-known due to its use in if statements).
### Conclusion
- Unless there’s a particular reason for a particular API, future integer-taking APIs should throw if given non-integer inputs
- No consensus reached on whether objects should be coerced to primitives, or primitives between each other
## reducing wasted effort due to proposal churn (continued)
Presenter: Michael Ficarra (MF)

- [slides](​​https://docs.google.com/presentation/d/1HtcFY98qWy-LPJLawRIkYzhDEjuEeyArMiNXbCOFcrk/view)


MF: So we talked about this at Bergen, and we did not come to a conclusion but seemed to be getting close.  So I think we can continue this discussion and I will start just by briefly reminding everyone what I am asking for.

MF: So if you look at this graph, this is a very loosely drawn graph on the different things we do, and their relative effort. Designing a proposal is much less effort than the spec text, which is less effort than writing all the test262 tests, considering all the paths that must be covered, which is less effort than the implementation effort when you consider them in aggregate.

MF: So the thing that I think we should do is do these in this strict order.  We should do the design and only once the design is done, write the spec text and when that is fully written, write the test262 tests and only once the test262 tests are as complete as we can make them, start on implementation.

MF: So here is my proposal laid out.  You will see that stage 2, the meaning is completely unchanged as well as all of the things we do during Stage 2.

MF: The meaning of stage 3 is unchanged.  We add a new stage between stage 2 and stage 3, where we do some of the things that today we are doing during Stage 3: writing test262 tests.

MF: I have a note over here that the purpose of this stage is that once we reach this stage, the design of this proposal is as final as we can make it without any feedback from tests and implementations.

MF: So after this point, we wouldn’t make arbitrary preference changes that would affect the design.

MF: Okay.  So concretely, the problem that we have is that there’s a lot of proposal churn during stage 3, leading to repeated effort of some of the higher effort things: writing test262 tests and implementation.

MF: The proposed solution is adding this new stage as I have described, and having the entrance criteria for Stage 3 be just that we have sufficient experience and tests.

MF: It’s important to note that Stage 3 as it is today, will remain the readiness signal for the implementers and an important public signal as well.

MF: If we achieve this consensus, I will do the explicit changes to the process document and come back with a PR that we can approve, but I hope that that would be pro forma because I will as accurately capture our preferences as possible.  That’s where I want to stop with the presentation and open for discussion.  

DE: I support this proposal.  And in particular, I think there’s some subtlety around the strict ordering that you mentioned.  It’s good to develop tests and implementations and specs while in the design phase, and but those things can be pipelined.  It’s important to develop tests that are available for implementation and unreasonable to expect implementations to start doing too much before there are tests. Tests can often be developed against polyfills or transpiled versions or early implementation.  So there’s nothing blocking implementation from getting started before Stage 3.  It’s a question of when we wanted to declare, this is, you know, full steam ahead, ready for everybody to maybe start implementing.

DE: So I think separating out the testing from the engine implementation will be very productive thing in the stage process

MF: Thank you, DE.  That’s a good point.  I didn’t mean to imply we might be prohibiting getting started on implementation early.  Thank you.  

DE: But also, expect that there will be more wrangling over the wording of this when you make a PR.  We can do that async.  But writing the document unfortunately won’t be pro forma; everybody will have opinions.  

MF: Okay

JHD: I love this. This is great. We shouldn’t be sending the public signal of Stage 3 until we have a sufficient set of tests. This is awesome. A bunch of stuff we will bikeshed, like the wording of this, and the name of the new stage and so on, but that’s the fun part. I think that this is a very good change for our process.

EAO: There was EAO on that.  But the stage `e` is clearly the right choice, short for test.  

MLS: This will slow things down because as an implementer, I am not sure I am inclined to write the Test262 test and things like that.  So now there’s this waiting game of who will write the test before.  I also think that we have to be very careful that we – I don’t necessarily buy in that we are sending the – accepted sending to the community when we get to stage 3.  I don’t think that will revert back.  Often types, the things we find, we already have Test262, we already have implementations and find something out and that is what causes to revert.  I don’t think this will basically do what it’s intended to do.  

DE: So about the responsibility for the tests, many committee members have shared that the proposal author, champion should write the tests.  This doesn’t always happen.  Maybe half the time or so.  I don’t know the numbers.

DE: But engine authors are free to contribute.  And so I am not quite sure what you mean by a waiting game.  We should definitely not repeat the pattern of something being at this new stage and just sitting for listening time without tests.  We have done that with some Stage 3 proposal and the intention of this is to specifically incentivize that.  Reverting to lower stages, it’s established that this is an important and sometimes good process, to do.

DE: So this might decrease the frequency of reverting to lower stages sometimes.  Or the granularity of the stage decreases.  But it shouldn’t be role of eliminating those.  The goal is to derisk stage 3 somewhat.  But this will not derisk web compatibility issues completely.  So we should expect that there may be downgrades when these occur.

MLS: If we have downgrades, they will be double, from stage 3 not to stage 2.5, but back to stage 2 because now you have to probably change tests.  

DE: Yeah.  Probably.  Depending on the case.  We can do double downgrades.  We have done that with, stage 1, before: SIMD was downgraded from 3 to 1, before later being withdrawn.

DE: JHD gives the example, numeric literals went from stage 3 and then 1. But I don’t want to hold that example up, because that was an unfortunate case [where they were delayed without real benefit due to my error].

MF: I think DE covered the thing I wanted to say.  This is not meant to accomplish that goal at all.  So . . .  

WH: For some types of proposals, the hard part is figuring out a design which is web-compatible.  And applying this process to those may slow things down because you have to bounce between disparate stages to try to come up with possible options for web-compatible design and figuring out which ones don’t break anything.  

MF: I don’t think I understood what you were saying.  Can you rephrase?  

WH: The graph in this proposal assumes that coming up with a design is easy and then implementing it is harder and so on.  But that’s flipped for some proposals, where, to come up with the design, you need to know what is web-compatible, so you spend a lot of effort trying to figure out which alternatives are web-compatible.  

DE: I am having a little trouble as well understanding it.  I guess there are multiple classes of web compatibility.  One of the different strategies, the last resort is ship it and see if it breaks things.

DE: Browsers today have the policy that they won’t ship things unless tests.  They might be a staging quality rather than a Test262, main director quality.  But still, tests are writing complete tests is in the loop for this, for this – testing things again process.  So I think this proposal should be pretty neutral with respect to that

WH: Are you saying writing Test262 tests will tell you whether the proposal is web compatible? How?

DE: If you’re in a loop reshipping things to see if they are compatible, you have written tests as a precondition to shipping it.  This will not change the length of such a loop.

WH: You mentioned that test-shipping something is the last resort of figuring out web compatibility.  

DE: Shipping it and seeing whether that breaks the web is the last resort.  Testing is like a first thing and a best practice.  You can’t just conflate these.  

WH: So how does testing fit —

DE: You can’t write unit tests.  They’re unrelated things.  

WH: I don’t understand your response.  

DE: So what do you mean by web compatible?  

WH: We have seen many examples of proposals failing because they break some websites.  

DE: Right.  So when those breakages happen, it’s because, first, someone has written an implementation as well as tests because nobody will ship anything without a ship.  It ships, and then an error was discovered in bug reports filed by people.  These are just separate different flows.  

WH: So everybody uses the last-resort technique of shipping and figuring out if anything breaks?

DE: We do our best beforehand to not do things that are not web compatible.  

WH: That’s what I am trying to figure out.  Where does this “do our best beforehand” slot into the process?  

SYG: Can I interject here?  So I think you’re confusing a few things.  Test262 does not do anything about web compat.  It’s about ensuring interop among new features and when we say web incompatibility, it’s usually about incompatibility in code that has shipped without the feature. It didn’t react well with the new feature.  No Test262 test that checks for interop.  There are best effort things we can do, like chrome doing statistic analysis, if it’s a syntax related feature.  Otherwise zero we don’t know after like 3 decades how to can he being other than to [sthip] to stable populations and look for bugs.  That is a reality, I admit, but that’s how it is.  If you have on ideas how to do that, we don’t know

WH: That’s exactly what I thought the answer was.  Which is why I found DE’s claim about tests to be so confusing.

SYG: So to – I support this, first of all.  So to expand on the reality today is that different browser shipping policies differ, but for Chrome, having interoperable tests because Chrome would like some sensible of confidence that new feature we ship is interoperable out the gate.  So before we ship any feature, we require there exists some tests, that other engines run.  So for web tests that’s WPT.  For ecmascript that’s test262.  So even though stage 3 entrance today does not require Test262 test Chrome doesn’t not ship anything until 262 tests are landed.

SYG: I don’t think that is true for all browsers but it’s true for Chrome.  What happens is, things get to Stage 3 and we don’t ship because – there could be a waiting game today and if there’s independent interest to get that shipped sooner than later, there is now the stage in Test262 where implementers can directly upstream some tests.  For the to the left of spec coverage that 262 writers write.  But some interoperable is better than none.  We have that directory.  I think the Chrome shipping criteria is the right one.  I think we want some semblance of confidence that features we ship are interoperable out the gate.  And I think codifying that here would be net plus.  

WH: Yeah.  I agree with everything you just said.  

RPR: All right.  The queue is empty.

MF: Okay.  Given the queue is empty, it’s sounds like the only remaining negative feedback we received was the concern from MLS that this could possibly slow the process. I don’t believe that will be the case.  We can jump multiple stages, if somebody is willing to front load that work and take the risk that they will have wasted or duplicated work.  But that basically ends up making it like today.

MF: So I would like to – well, I guess it’s not strictly necessary that I do today ask for consensus because I will come back and formally ask for consensus as well for a PR, but trying to codify what I have on the slide and we discussed today.  

RPR: All right.  So Michael is asking for any objections with this in principle?  

RPR: And Dan has a point.

DE: I am not objecting, but I wanted to comment on the concern about how this proposal might slow things down. If it did slow proposals, that might not be a bad thing.  It reduces the wasted work of having to produce the test redundantly.  Implementers could produce Test262 tests if they want to.  Slowing down isn’t bad if it leads to increased quality.  And precision and a better outcome, it’s a good thing.  That’s why we don’t set goal dates for proposals.  We take our time until things are done.  So I would like to ask MLS, following all the discussion, how do you feel about this overall, MLS?  

MLS: Well, I think it’s the wrong approach.  But because I believe in consensus, I am not going to block it.  

DE: I want to propose that we ask for consensus on this particular program, as MF is saying.  We will work out the wording later and that will come back to committee.  But if we can have consensus on this goal, that would be, I think, helpful.

RPR: DE is pointing at the slide we are looking at.  

CDA: I think I know the answer to this question, but I want to be absolutely clear, this would formally change what is now Stage 3 to Stage 2.5.  Or whatever we are calling it.  And – 

MF: I am not – Stage 3 remaining as it is and some of the things we do during Stage 3 being added to a new stage, prestage 3.  It’s important to do it that way for reasons we will get to later.  

CDA: The slide says ‘this is the entrance criteria for the current Stage 3’.  

DE: So if you have more presentation Michael, that explains this, maybe that – 

MF: I think – 

RPR: Yeah.  The answer to CDA’s question is yes.  This will introduce a new stage in between.  

MF: This will introduce a new stage between what is today stage 2 and today stage 3.  

DE: That stage will have a name

MF: That is not a renaming of current stage 3 because they – the stages have both names and meanings.  And Stage 3’s meaning is unchanged.  That’s the important part.

MF: Stage 3 means "recommended for implementation".  That’s the signal for implementers, javascript engines and tooling, and other outside implementers.  That’s why that formulation is important.  

CDA: That’s fair. The idea is that a proposal could come for advancement for stage 2.5 and 2 months later (or more), come back for stage 3.  

MF: That’s correct.  Also, a proposal could advance directly from stage 2 to stage 3 by front loading the testing effort.  

CDA: Right.  Yeah.  That is what I expected.  I wanted to be super clear on that.  Thank you.  

RPR: EAO has a question.  

EAO: Yeah.  The particular slide you had as a criteria for getting to the – from the new stage to stage 3 to how sufficient tests/experience, could you expand a little bit on what sufficient experience would mean?  

MF: I cannot.  For good reason, that will be subjective per proposal and the committee will use their judgment to determine if a proposal is particularly risky, has a large impact, whether we need – how extensive that testing and experience might need to be.

MF: This might be that we would like polyfill experience or tooling or something.  We might want data based on code search or use counters, or try to test the waters with web compatibility.  Anything like that

EAO: So experience here would be relating to polyfill or tooling experience for examples, but not exactly to that.

MF: Yes.  

RPR: Shane?  

SFC: Yeah.  I was just wondering what the impact of this type of change would be on ShadowRealm which needs more tests.  We made it to stage 2.  With this – is that an example of the type of proposal that with this change would instead go to Stage 2 to have . . .  ?  

DE: ShadowRealm in particular is a subtle case.  One of the asks was for tests on the web platform side and an audit of which APIs are supported.  There was a design which APIs were supported, it didn’t have the appropriate validation.  In this case, it would be continuing at Stage 2.  

MF: We will also later get to a discussion of what to do about currently in-flight proposals.  Okay.  Now that that discussion has commenced, I would like to ask the same thing I asked earlier, for consensus on moving forward with this approach and coming back with a PR that formally encodes it.  

RPR: All right.  It looks like there are no objections.

MF: Okay. Great.  

RPR:We have consensus.  

MF:  We still have time in my – how much time do I have in the timebox?  

RPR: Half an hour.  

MF: Half an hour?  Okay. So there’s two things I want to – 

RPR: Longer actually.

MF: Great.  Thank you. So one of the things I want to cover now is what do we do about stage numbers or names. This is not a simple bikeshed process like I think this name is better.  Naming here is unfortunately important.  The stage names are not an entirely internal thing.  The names signal the meaning of the stage, so we have options depending on how to signal to the community.

MF: And something to note is at the top there, we cannot just renumber the stages.  We need some stability in that communication.  So if we ever say something is stage 3, at this point, that term already means something in the community.  We cannot ever change that or reuse it.  Right now, that means recommended for implementation.

MF: So here are the options that I see. Maybe there are others. One, we can choose some non-integral number between 2 and 3.  Some people used such a name during this discussion without prompting.

MF: Another option is that we could transition to descriptive names.  This has at least two distinct benefits.  One, it’s more resilient to future changes, if we want to make more process changes.  We will not run into the same issue again.  And 2, it’s even better communication to the community. For a long time the community didn’t always understand what we meant when we said something advanced to Stage 2 or 3.  If it has a self-descriptive name, that will help enforce that in the community.

MF: Option 3 is just the new stage could have a descriptive name.  But the others are still numbers.  It’s not great – a weird inconsistency.  It’s an option.  And option 4 is – since a lot of people have been conceptualizing this new stage as 2, but also you have tests, name it something that calls it Stage 2, but with tests or something.

MF: So that’s the paths I see.  I am willing to – open on this topic.  Let’s go the queue

JHD: The existing stage numbers – all the stages are named, in the process document. But the numbers are what – I think, all of the developer community that knows anything about the stages, is a small percentage, knows them by for example and we should preserve those numbers period.  I have a less – I don’t have a strong opinion on what the new stage will be called. But 2.5 or something similar.  But the new stage like the existing ones, need a descriptive name. It’s just that – I think it’s unlikely that based on the experience with the  existing stages will be how people refer to them

NRO: I agree with JHD.  Numbers are – known in the community, like, people don’t – you don’t have to follow how it works to be aware of the stages.  As I mentioned, whenever there are articles of proposals, we should keep the numbers and keep the numbers exactly the same meaning.  It’s okay with another description.  It makes things more easier for newcomers to understand what the numbers mean.  We should not  replace with words

JHD: It is not named on the process document, it seems. But the compatibility table, it has names for them and that’s what was stuck in my head. They are not currently named. Only numbered.  

MF: Is that a well-known resource in the community?

JHD: The kangax compatibility table, yes.  

MF:  Not just among nerds?

JHD: Anything around TC39, including the process is known by a subset of developers. So I think among the group that knows about it, I think that it is pretty well known.  

MF: Okay

NRO: It was well known in the past, with ES6. Now, with people mostly using data and the compatibility table gaining much less usage.  

RPR: And the people who knows the names from the document is even fewer

DE: JHD, I am looking at the kangax website. Where are the names?  

JHD: Um I think the names are – I have to look.  

JHD: At one point in the past there were names.  

CDA: It’s in the – sorry.  I am going to interrupt because somebody posted https://github.com/tc39/process-document/pull/31 in the delegates room in Matrix. The names were: strawperson, proposal, draft, candidate, and finished.

JHD?: Thank you. Yes, they were there and removed from the process document 2 or 3 years ago.  I stamped the PR, apparently. The names used to be there and we removed them because nobody uses them.  

>> It does seem like the names were not the kinds of names that I am listing here.  The names I am listing here are supposed to be self-descriptive, whereas the names you can’t really figure out, what this stages meant.  
>> Fair
>> Just from the name.  There’s the slight difference.  

JHD: I think either way my point stands. I am fine adding names, if we like. People will continue to refer by number, and it seems prudent to find a new number.

RPR: Dan.  

DE: When I added the queue numbers, I thought I was disagreeing.  I am agree.  Keep the current numbers.  Call this 2 and 7 8ths or something if we add a new stage.  But I really like the short names that you have up there.  They are more descriptive than what was previously in the process document.  I think if we refer to things as stage your idea, in parenthesis, Stage 1, (every time we refer to a stage) it gives people a clear idea.  There’s sometimes misconceptions that stage 2 proposals are more complete than they are.  Or across the whole stage process.  People overestimate what each stage means

MF: Maybe we should make a pull request to re-add names that are self descriptive

DE: It seems we are agreeing.  We should add good names.  

LCA: On the names, giving names is nice.  I think to your point that we will actually use those names, I am less sure of because saying stage 0 parenthesis idea, you wouldn’t say the parenthesis, but you get the point.  Like nobody will do that.  People will say, this is stage 0.  Stage 2.  This is not stage 2 solution chosen.  Idea stage?  Yeah.  Maybe that.  But the number is missing that the community knows.  I don’t know.  I think we should have names because having names is good.  But I don’t think anybody will use them.  At least in speech.  

SFC: Yeah.  I just – since we are bikeshedding, it feels like this is slightly more close to a Stage 3 than Stage 2.  Having something that is a modifier on 3 seems like it might relay the sentiment of the stage better.  So I said, call 3-staging for example.  Do we have consensus to stage 3 staging?  Like, it sounds okay.  Or 3 - - or something like that.  

WH: My comment is very similar to Shane’s.  I would like clarification: how are the entrance criteria for the new stage different from those of the existing Stage 3?

MF: They are not

WH: OK; they are the same as existing Stage 3.  So my suggestion would be to either call the new stage “Stage 3 minus minus” or bifurcate Stage 3 into Stage 3A and 3B.

RPR: Shu?  

SYG: I hear the argument on toed fiction of stage 3 instead of 2.  I have had the intuition for communities that are used to turning on stage 3 polyfills or whatever.  Having a modifier on Stage 3 can confuse those users.

JHD: It’s important that we don’t have 3 in the name. Because 3 sends a signal, and that is the signal we are trying not to send for this new stage - which is that it’s ready to implemented and used once you see it, and this new stage is very much not in that bucket. So I think since it’s closer to 3 than 2, it’s useful to have 2 in it because that avoids the 3 signal.

MF: Yes.  I 100% agree.  From the internal perspective, it is considered much closer to 3, but from the messaging we want to do, we want to stay far away from 3.  I don’t think we should have 3 in the name unfortunately.  

WH: I want to avoid having “2” in the name, just because the entrance criteria is so similar to what Stage 3 is now.  And —

MF: WH, can you explain why the entrance criteria matters?  

WH: Stage 2 has the connotation of a proposal still being fluid.  I want to make sure that is not misunderstood.  So anything with a 2 in the name has a connotation that there are some i’s to be dotted and t’s to be crossed.  

SYG: Can I not – Waldemar, how do you feel about the argument of yes, we agree with you.  Logically.  But given what Stage 3 means to the larger population of non-TC39 delegates, 60 people, given that Stage 3 means a thing that is decoupled from what it means to us, but something to the public, it behooves us to favor their perception over ours.  We are much more actively engaged.  

WH: I am not really sure what the argument there is in response to what I just stated.  Why would those people insist on having 2 in the name?  

SYG: No.  They do not insist of having 2 in the name.  3 means a thing and we want to not change the meaning of 3.  

DE: You’re saying that if 2 is in the name, it will make people feel like they – I’s needed to be dotted and T’s crossed.  That’s incorrect when they are tests.  That is part of doing that.  This is why we want to encourage people outside the committee to be a little skeptical of it.  While in this stage, 2 and 3/4s or whatever, we have achieved consensus on a stage internally as a committee.  We are not – we have that stability that can be used to incompetent the tests.  We are not ready to send a signal that this should be treated as such.  

NRO: Yes.  So like I was thinking we should call this stage as like almost 3.  Because from a delegate perspective or champion, the work to this stage is used to get to Stage 3.  But like as I said before we should keep numbers.  Numbers and are part of zero you are like public communication.  We should like put the meanings according to community in front of how we internally think of these numbers.  We can leave with something and say, almost 3.  But knowing that it’s what we – to get there, we need to do what we used to do to get to Stage 3.  

RPR: Dan?  

DE: Very minor comment, but I feel like 2.5 is sort of too low as a number.  Because we want to communicate that we are almost there.  2.5 is too unstable to me.  That’s just bikeshedding.  

RPR:  Which is what we are doing right now. MLS?  

MLS: Well, it seems since we are splitting Stage 3 into two pieces.  3A and B.  I line with Waldemar with this

MF: MLS, did you – were you there during the previous conversation? We said it fails to communicate to the community if we have 3 in the name?  

MLS: We have to teach the community there’s a new stage.  

MF: We cannot teach the community.  That’s not a thing we have the power to do.  

MLS: In my mind, stage 4 is when people should adopt this wholeheartedly.  They should play with it in stage 3 with whatever implementation they have.  If the people are unteachable or whatever, I don’t fully get that.  But it’s part of current Stage 3 we are talking about this new stage.  

MF: The reason I say that

MLS: Buying that, I actually like your 2A proposal, which is you have a short one or two-word name with a stage number and I would say old stage 0 zero, say, 1 and so forth in parenthesis.

MLS: But you are teaching them something new.  If we want do that, then why would you make that proposal of 2A?  

MF: Yeah.  I should – that’s fine.  I should clarify what I meant by we cannot teach the community.
We did not teach the community these stage numbers in the first place.  Our internal process naming leaked to the community and spread naturally.  We don't have the power to control it intentionally.  

MLS:  We can communicate in various venues including our staging document having – it has to be rewritten with this.  It seems to me that it will leak out, though we have new stage names or numbers whatever

JHD: The issue here is and this is something I know you personally differ with many on the committee about, you said stage 3 is not the time to use something. That is not what most of the community thinks. Most of the community thinks that stage 3 is the time to use something. Stage 4 is when it lands in the spec which is not what the community cares about.

JHD: It’s okay to disagree with that, you would like to believe they shouldn’t think that. That’s a discussion we don’t need to have today. But objectively, they do. They have already learned that. We will not teach them that something different is the case. And so if stage 3 is there in any way, my belief is that it will signal you can use this - because Stage 3 already signals that.

MLS: Less say we call it 3A.  There’s no limitation they can use.  So . . .  

JHD: 3A feels like a subset of 3. I can do the same thing as Stage 3, I can use it

MLS: You can’t because there’s no implementation

DE: You can through polyfills and transpilers and engines that ship things before Stage 4.  Such as – 

DE: [inaudible]

JHD: They will ship when stage 3, and 3A looks like 3.  They are a few implementations that wait to Stage 4 to ship anything.  

MLS: Okay.  The argument you making is counterintuitive to the proposal, which that implementers won’t start until the tests are written.  If we believe that during this let’s call it 2.5, so not 3.  During the 2.5, tests are underdevelopment, and implementation ship this proposal, why do we need this new stage?  

DE: Sorry.  So the strong expectation is that nobody will ship before Stage 3.  

MLS: Okay.  So then that opens up that we can call it 3A because someone can try to use it and they will not find an implementation that has it.  And so they will learn real quick.  

MF: MLS, there is tooling that exists that implements Stage 2, Stage 1 proposals.  Babel and like – 

MLS: Sure.  And people can try that.  But they are completely aware to do that with Stage 1 and 2 proposals, they are trying things out.  But not shipping the products with that.  

MF:  That’s Stage 3A things.  

MLS: So the community needs to learn what this new stage means.  

NRO: So we tend to ship all Stage 2 proposals.  We try to do Stage 1, but when there is like strongly marked.   – [inaudible] many have an opportunity to say, I want to use the proposal as it was on this meeting to make sure people don’t have break in changes.  But people use them.  People and specifically for Stage 3 proposals, people use them in production.  If we don’t implement . . .  and people that do this, like, do this because they know the Stage 3 is almost ready and expect to not change too much.  So adopt the small changing.  And like changing – having the previous stage of 3A, when things are still not as stable as in the current 3.  This makes the user start using them before

MLS: Let’s be clear. The current stage number 3 is where we are developing tests.  And so people will start using it even if there’s not – even if there’s one implementation.  We are not changing when people will start using it, if we call the new stage, Stage 3A.  At all.  It’s part of the old Stage 3.  There’s no change.  

DE: MLS the goal is to get people to be more conservative.  You share that goal, but I think people shouldn’t use it until Stage 4.  Working on getting people part of the way there.  It’s not what you are suggesting.  But there’s so much adoption in the ecosystem of this shipping Stage 3 things that it’s something this we say, it’s not Stage 3 yet, it’s ties into the existing policies and that’s a benefit to us.  We can teach people things.  It’s less work to tie into the existing expectations.  

MLS: I made my point.  I think I support what Waldemar is suggesting.  

RPR: Shu has a comment on teaching.  

SYG: Like okay.  Just leave logic at the door.  Think of this as implementation detail foroutlining the committee operating.  Parts of the committee process has leaked.  We can try to teach people that the stuff that leaked has changed.  But it seems just so much easier to teach ourselves.  So I don't understand the effort here.  Even if you are logically correct, and I agree you are logically correct, it’s easier to each ourselves because that’s a set of double digit set of people and we all engaged and like pretty good at learning things of how we ourselves operate.  So just like pure practically speaking, it seems we should just do that.  

RPR: JHD?  
JHD: Yes.  So MLS was talking about teaching the community.  Let’s just say something “surprising” happens and we are unable to teach people something, and they learn nothing. I would want them to not confuse 3 and 3A and unless they learn something, that they will in fact be confused by those things. I am hoping that my irony can conveyed that we _will_ fail to teach people things.  

RPR: Shane?  

SFC: Yeah.  So Stage 3 communicates multiple different things.  And we have been talking a lot about communicates "ready to use this thing."  But that’s not the only thing it communicates to developers.
I think something that has been valuable a lot with Stage 3, it gets the attention of more developers.  People take it seriously and submit more tutorials and polyfills of their own.  Those are things that are beneficial at the new stage.

SFC: Like, anything that gets the community to sort of take this more seriously and do the work with it, even not using in production is totally fine to retain.

RPR: EAO, I thought yours was a joke suggestion before.  You were serious with stage E

EAO: Given we have gone over with some objecting to any references ToNumber 2 and objected to the number 3, a reasonable mathematically reasonable surprise to with the E, 2 point 7 something, I don’t remember what.  And have a stage name with an explicit identity that is different from stage 2 or stage 3.  I asked specifically here, would anyone actually object to this?  And I would be Michael – interested in hearing exactly why this and whether the objection is specifically to the E as a letter to be used here or whether it’s generally to a letter being used

MF: First, Stage E sounds like Stage 3.  Sorry.  Second, if we are going to be using names, use a descriptive name.  Most people will not consider its numeric value.  They're going to consider it to be a letter and it may as well be a word which has self-descriptive properties.  It’s no better than the alternatives.  No, we should not do that.  

RPR: Shane?  We have got a few agreements with EAO from Michael Ficarra, from SFC, from William.  And then – 
>> To clarify there was no agreement with Michael Ficarra there, but from the others there.  
>> Sorry.  Sorry.
RPR: There was an yes to the objection.  Sorry.  Sorry.
CDA?

CDA: I think MLS captured the point.  I think without prior knowledge of what it represents, it’s not going to be clear to somebody where E is going to fit in, in the stage process, and ideally you can figure out, for example, currently Stage 0, 1, 2, 3, 4, besides the direction.  (We count up, but sometimes stage gates count down).  But throwing E in the mix, you don’t know intuitively where that fits without prior knowledge.

RPR: Shane?  

SFC: I think that the what we are kind of after here is, we want a new concept because the people who are in favor of Stage 3, it has the connotations that we don’t have.  Stage 2 has the connotations we don’t have.  Introducing a new concept seems to solve the problem.  We belaboured when bikeshedding the names in Temporal and Intl, the way that you sort of avoid people coming in with preassumptions is a completely new name and learn from scratch what the thing means.  And I think Stage E or something like that is – could do that for us.  

RPR: DLM agrees with Shane. Ross has a new suggestion.  

RKN: There’s traction on the chat, *e* had the advantage of being a constant that’s between 2 and 3, and I was thinking, well, if this stage is primarily for Test262 afterall, consider 2.62.  Anyway, I am saying that out loud.  

RPR: All right.  We have spent at least half an hour bikeshedding.  On to Eemeli.  

EAO: Just thought I was mention, I personally would be okay with renumbering 1, 2, 3, 4, 5, changing the meanings of the later stages.  I understand that others will object to this as well.  But I just wanted to voice that I at least support such a change.  

RPR: MLS supports that renumbering.  Back to MF?  

MF: Okay.  I don’t personally think that’s viable, but feedback is heard.  I wanted to change topics.  We don’t need to figure out the naming or numbering scheme by the end of this meeting.  This is all feedback used to inform when I come back in 2 months.  Reach out and I'll do the best with the feedback I receive
The other topic is should we apply it retroactively.  What about in-flight Stage 3 proposals?  Are we going to review and possibly demote them? 

MF: I don’t know if we advanced any proposals during this meeting but those would probably be the place to start and then going back basically in reverse chronological order from when we advanced 
them to do that review.  Is it worth doing the review?  Should we leave existing proposals where they are?  Does anyone have an opinion on that?

RPR: We have two agreements on the queue.  Three maybe.

JHD: Essentially as I said multiple times during this meeting and others, I think it should be very frictionless to move proposals up and down so that they accurately reflect where they are. That’s a mistake that I have made and I don’t want to see us repeat. And so if we have a new stage, we should put whatever belongs there, there.

SFC: Yes, I can think of one or two proposals that should be in the new middle stage and we should do that.

DE: Yeah, agree.  I think we have a current process which is not freely moving things up and down but rather seeking consensus on advancement and retraction.  I think we can apply that meeting with more preparation to get these things perfected.

RPR: Okay.  End of the queue.  More you want to talk about Michael?

MF: Okay, that was incredibly straightforward.  I wasn’t expecting that to be so easy.  If we had remaining time, we could use it for more discussion about the names.  I’m not sure how productive it would be at this point.  I would probably prefer to yield my time to any other overflow item or something we might have.  Please do talk to me, though, about naming. You know where to get in contact with me.

DE: KG put on the chat the idea of consensus on design.  The idea that this new stage is actually just an internal thing for us.  It’s just to keep us from revisiting the design too much when we’re trying to have stability for tests.  If we just say consensus on the design, and it’s not even quite a stage, we just add test use as a Stage 3 entrance requirement, that’s, you know, the notion of consensus on design being earlier.  Any way, no need to conclude now.  If anybody has feedback.

WH: “Consensus on design” has a very different meaning than working out every detail of the spec, not just the design.

DE: Could be consensus on details or something.
### Summary
- MF proposed that we add an additional stage between 2 and 3, where stage 3 entrance requires test262 tests. The new stage would have current stage 3 entrance requirements. Maintaining the name “stage 3” while requiring tests would give a clearer signal for when implementers and the community should see proposals at a certain maturity level justifying more intense implementation and experimentation.
- MLS expressed skepticism about the benefits, with concern that this would slow down the committee without accomplishing its goals. However, he did not want to block consensus on this proposal.
### Conclusion
- Consensus in principle with the idea of creating an additional stage
- Name of the new stage tbd! But it will be numbered, and existing stages will probably retain their current numbers.
- Once the new stage is set up, we’ll survey Stage 3 proposals, and propose demotion to the new stage (by consensus) for qualifying proposals.
- In a future meeting or perhaps async on GitHub, we’ll nail down the exact wording in the process document to describe the new stage.
## Throw expression (continued)

Presenter: Ron Buckton (RBN)
[proposal](https://github.com/tc39/proposal-throw-expressions)
[slides]() ??


RBN: So I’ll try to keep some of this brief because I want to get back to the discussion we were having in the queue on day 1.  I’ve added a couple slides to the slide deck just to provide some description about some – the comments that were raised to make sure we can address them properly.  So again these were added after day 1 but they are primarily to discuss those specific issues.  

RBN: One issue that was discussed or brought up was a request from Waldemar to pick a precedence.  The precedence for throw expressions is currently specified as unary expression.  That’s because it satisfies the majority of primary use cases and the champions preference remains unary expression and the next might be strong and my discussion of KG indicated if not a preference, at least an agreement that Unary expression is correct and the primary goal is to ban ambiguous cases.  I also described in the past that the ambiguous cases could be handled by a linter but preference within TC39 recently to be a bit more  prescriptive in the language such as requiring parentheses to disambiguate logical and knowledge coalesce.

RBN: The primary goal on day 1 is emphasize that we’re trying to avoid ambiguity but still believe the preference is correct.  So with that said, one of the things that WH brought up which was very helpful to recognize was that the approach that we were talking to perform this ban on these to avoid this confusion around precedence was unfortunately resulted in ASI hazard with plus, minus, less than and less than equals.  Notably that prefix plus minus on the following line becomes an issue.  The division and division 
assignment is also possibly the beginning token for regular expression.  Therefore, we would need to avoid that ASI hazard in some way.  We previously have handled in the specification that an ASI hazard in a similar case could be handled via a static semantics rule.  We do this currently for optional chain.  We use the specific rule that states that if this production exists, then it is a syntax error and it’s primarily to specifically avoid automatically semicolon assertion rules.  So some of the discretions we had in the chat and that I investigated over the past two days resulted in two alternatives.  

RBN: One alternative is that we 
maintain Urnary expression precedence disallow conceptual ambiguity for throw statement.  This is for punctuators, the ones you see here and expression with conditional expression just as discussed on day 1 and consignment operators aren’t necessary because existing grammar rules disallow them because assignment operators only have left hand side expression that is a higher precedence than Unary and so not allowed.  So instead, we can handle plus minus, I have times in here and that’s not incorrect.  And division in the grammar and restrict their use via static semantics to avoid A schism I like approach used optional chain template expression and special case with throw expression with the compound assignment and also ban using ASI and 
concern too complicated in the grammar to be worth it.  Turns out this is not complicated.  We only need to add three of these static semantic rules to additive expression of plus minus and multiplicative expression for division and special rule for assignment to handle the division assignment.  These would use a – could use a syntax directed operation called contains through on right that is relatively simple as well that is primarily motivated to find cases of the 
right associative exponential operator to find a throw expression nested within.  These are much less complicated than one of the other directions that Waldemar suggested to do this directly in the grammar.  

RBN: My investigation into that shows that would be extremely difficult to 
do without heavy changes to the grammatical rules that I think would break a lot of intuitions about what certain grammar parts do what and this is actually not only the simplest approach, it’s more consistent with what we already do within the specification.  The other alternative that I looked into and discussed with Kevin off line was that to maintain unary expression and precedence and disallow ambiguity throw in parentheses and allow unary express is the correct 
precedence and I believe if the proposed solution for alternative 1 is not considered viable, that I would still prefer that we leave it open to find other interpretations or other ways to 
address this within the specification that would not require changing the precedence of throw 
expressions to the point where we could not relax the restriction at some point.  I’m not 
particularly interested in changing throw expression to something like expression precedence 
next to comma because if we ever wanted to make the change to change precedence we would never 
be able to because it would suddenly become incompatible.  I would still prefer not having 
parentheses if possible.  Those are the statements I wanted to kind of get out there and start 
talking to folks on the queue to see A, if is this first alternative that I discussed a viable 
option and if so, I’d like to have some feedback please.

RPR: Michael is on the queue.

MF: Thank you for doing this work.  Looks like from what I understand of the alternatives, I prefer alternative 2.  But the presentation as you laid it out is very spec focused and didn’t have many examples of what a user experience would be and how the user experience would be different between these cases.  I would like to see those examples that show the differences between these cases and all of the boundary cases where they’re like similar precedence things.  So to better consider it that way.

RBN: So I showed this slide on the day 1 presentation which showed cases where we had differences in where the precedence is different versus what you expect the throw statement.  So in the first example, the throw expression here with no coalesce and A equals B question question throw C, this is legal because it’s in the unary expression condition and no ambiguous and second considered illegal and A equals in front of it a throw statement would throw B or C and whether B or C is null or undefined and people who are familiar with throw statements might have written code that has this would be possibly confused if they saw a throw expression and didn’t have the same capabilities.  

RBN: Therefore, the way to disambiguate this is to add parentheses.  If you wanted to have the throw be on the left side, you would parentheses throw B and throw B or C case you parentheses either B or C case.  The main difference in what I was describing in the second alternative is that you would essentially require parentheses in both cases where if you wanted to throw B or throw C or D or even if this just said A equals throw C or D you would 
have to parentheses all the time.  And I’m not a huge fan of this.  But I – it would be necessary if we do not have these rules to give us the ability to find a different way to restrict it in the future.

MF: Sorry.  I’ll get back on the queue.

RPR: Waldemar.

WH: None of the simple alternatives I had proposed was explored. The presented alternatives both are over-complicated and neither one offers a simple description of what the precedence of `throw` actually is.  Some possible simple ways of doing this without the complex grammar and rules that are currently in the proposal are to:
* have `throw` be a unary expression, just like `void` or `delete`
* have `throw` be a magic function with unary expression precedence which takes a parenthesized expression as a single parameter: `throw(expr)`
* the third option is similar to alternative 2 on the slide `(throw expr)` except that the throw could throw an arbitrary expression so you would not need to parenthesize line 4 on the current slide.

RBN: So the first thing that I will say is that all of the – all of the alternatives I presented are to maintain throw as unary expression.  The third suggestion that you provided which is to have throw just be throw expression would change its precedence to a precedence that I am not comfortable with.  It basically makes throw essentially at the same level as high as comma or 

RBN: if you had throw A comma B you would have to be able to consume that and not confused with throw comma A comma B and not enthusiastic about that direction.

WH:  Can I respond to that?

RBN: Yes, please.

WH: Okay.  So in the example that’s currently on the slide, as far as the other expression is concerned, throw is inside parentheses and a parenthesized expression binds 
very, very tightly.  As far as the inside of it is concerned, throw can just throw an expression 
and there’s no reason to require only unary expressions as an argument to throw.

RBN: Yes, I understand that.  This is specifically pointing out that if we were to do that, I could not ever make throw into a unary expression which is where I would prefer it to be.  The alternative to syntax is the most restrictive case that is neither at the expression level that you’re describing nor is it as simple as a unary express that doesn’t require parentheses specifically so that we have the option to continue to potentially as a future proposal investigate loosening that restriction so this is alternative to that is listed here is a more restricted syntax than normally unary expression or having it at the level where it can throw 
any expression intentionally so that we have more flexibility because I still would strongly prefer it remain unary.

RBN: I would like to go to the second suggestion you provided have it be a 
magic function.  I don’t think that is viable.  If it is a magic function that is still at the unary expression level all of those tokens that happen on the right could still happen and it would still have the same ambiguity with the throw statement and throw parentheses with the infix notation that follows it.  If you said magic function you can write code that looks the same.

WH: Okay.  I don’t understand the example.

RBN: See if I can – what you’re describing is –

NRO:  On the queue.

RBN: If you said throw A as a statement today, that has a meaning.  If you make throw into a magic function at a unary expression level that meaning is ambiguous conceptually and not ambiguous but conceptually and not pass the specific requirements that provided by Kevin as to what his concerns were.  A magic function would not solve that concern.

WH: `function` works the same way.  You cannot start an expression statement with a function expression 
because it turns into a function declaration.  It’s the same problem.

RBN: The difference is that the developer community has had a long time to get used to function and expression declaration.  Adding new throw expressions with different precedence is a new  thing and it does not have that same knowledge and perspective.  While I would – my personal preference is that throw is just unary expression and I don’t really – I’m not that concerned 
about the tokens, so again the token restrictions that I presented are to meet a specific requirement that this avoids the ambiguity in the few cases that will actually come up.

WH: We survived adding function expressions and I think we would – we could survive adding throw expressions with the same restriction as function expressions have that an expression statement cannot start with a function expression or a throw expression.

RBN: Yeah, this already has at the statement level – the grammar already forbids throw in the expression as function expression so it isn’t at odds with what we have been discussing.  
Specifically meet those requirements for the demand related to avoiding that ambiguity, again, the whole point of this is to essentially adopt what a linter might otherwise adopt to avoid those –

KG: The comma at the beginning of the last line -  I think that will just make it clearer.

RBN: Can you say it again.

KG: On the line you just typed, can you put a `0, ` at the beginning.  I want to make it clear we’re definitely talking about the expression case.  WH, this specific thing I really don’t want this to throw a – like, we shouldn’t do that.  We should not throw A in this case.

WH: I disagree.  I mean, this is a perfectly fine thing to do.  And throw has a precedence of 
unary operator —

KG: I appreciate —

WH: Especially since you could reverse the order and write `y || throw(a)`.

JHD: But if you wrote throw A or Y –

WH: You wouldn’t in this case.  You would write `y || throw(a)`.  Because that’s more useful.

JHD: The or Y will never be hit if the throw binds to the A.  So no one would ever want that semantic and that’s why no one would ever write that code.  If they write that code because they want to throw either A or Y.

WH: You’re assuming something that’s not true in this example.  If they want to throw either a or y, they’d write `throw(a || y)`.

RBN: WH, if I could, that’s part of the reason why Kevin is – has suggested this ban as an option is that if the idea is that no one should write that because you don’t really want that to happen, then this ban actually guides you towards the right direction.  It says you 
shouldn’t write throw A or Y because that’s going to not do what you expect it to do.  You 
should parentheses the A or Y to get right semantics or rebalance the operator so it’s Y or 
throw A.  That’s what this does.

WH: As I pointed out earlier, there exist other examples where it does make sense to follow 
the throw expression with `||`.

RBN:  I’m not sure where it makes sense to follow the throw expression with bar bar.

WH:  Anyway, this is way too complicated to explain to users what this thing is doing.  The rules are too complicated.  I want just a single – a simple precedence for throw and so I’m really concerned with the usability of the complex rules that are being proposed.

RBN: So I also personally want a single precedence for throw and I think it should be unary 
expression.  I think the other ones don’t make sense and they require – every place you’re 
going to want to use it directly is in the unary expression position.

WH: I agree.

RPR: To Kevin on the queue waiting for quite a while.

KG: So Waldemar, I agree that we should be concerned with the experience of developers.  
However, I really, really do not think that the experience of developers is solely determined by the simplicity of the rules.  I think simple rules can have unintuitive outcomes and in particular, `throw A ? B : C` throwing A is so unintuitive that even though it follows from simple rules it is worse to have that experience than to make the rules more complicated as an either alternative one or alternative two.  Sometimes simple rules are not the best developer experience and I think this case is very overwhelmingly such a case.

WH: Okay.  I already presented an example of simple rules which solve this case.  Let’s go to —

KG: The parentheses do not solve this case.  The throw A – the example that Ron has at the bottom of the screen does not – like, if that throws A, the case is not solved.

MM: I think my reply to WH helps clarify Kevin’s position.  I hope it helps clarify 
Kevin’s position.  You can let me know.  WH has made the analogy of function where function if it appears as the first token of a statement is a function declaration and not a function expression.  The reason why that analogy does not justify the last line on the current slide is that the meaning to the programmer of a function declaration and a function expression 
are much, much more similar.  That’s why, for example, you can evaluate any function declaration as an expression and get a function that has the same call behavior, that is essentially the same meaning.  The only difference is between the declaration and expression are the scope of the name and the hoisting in the block.  But for most purposes, if you take a function declaration as written and then you turn it into a function expression by putting something to its left, the function itself still means the same thing in terms of its call behavior.  I think that invariant between statement form and expression form that are 
otherwise identical is really important for programmer ergonomics.  And I think that the last line on RBN’s slide and what KG is saying about that follows the soul of this invariant.  It means that taking a throw statement and putting something to its left completely changes the meaning of what is on the right.

WH: I understand your point.  I agree with it.  Unfortunately neither alternative 1 nor 2 on the slides satisfies your invariant.  The alternative I proposed `(throw expr)` would satisfy this invariant.  But other people are rejecting it.

MM: I’m sorry.  I need – just wanted to – can you repeat the statement what would satisfy the objective.

WH: `(throw expr)`

MM: Okay.

KG: You’re correct that neither alternatives satisfy it as stated, but they satisfy a weaker property that is most important part of the property, which is that in legal programs, the meaning will be the same.  I think it’s okay if some additional cases are illegal in expression position because you will write that and then you will get an error and you will be a little bit annoyed that you now have to add some parentheses.  But you will get a nice error message that tells you you have to add some parentheses.  You will go on with your life.  All future 
readers of the code will not be confused.  That’s the most important property to preserve.  
Both of these alternatives preserve that property.

MM: I agree with Kevin on that with regard to the intent of having raised this property, yes.

WH: But it’s unnecessary to use divergent syntaxes for those since this would work if you kept them the same. It would work just fine and be simpler and less confusing.

KG: Other people have expressed they don’t like that for other reasons.  I think the   
semantics preserves the useful property and avoids ambiguity is the best option.

RPR: Can we move the queue on to Nicolo?

NRO: Yes.  Want to mention that even if alternative 1, I still have my preference for not having commata due to the difference of parentheses and all parameters except for the last one.  I prefer one without the comma.  I find alternative 2 better than alternative 1 with the comma there.

EAO: I’ve been on this queue from Tuesday.  Hi.  So question briefly are do expressions still potentially a thing because from where I’m looking at this, they would provide a relatively ergonomic general purpose solution for the same thing.  If do expressions are completely dead, this becomes a much more interesting thing to consider.

KG: As I said in chat, they are not dead.  But they are generally not considered an alternative by most of the people in the committee.

RBN: That was discussed in the July meeting which is the reason why this was brought forward.  Do expressions for five years having considered to be the main blocking reason that this hadn’t advanced, the syntax concern is something that we could have addressed.  But now it was considered in the July meeting that do expressions were no longer considered to be the main 
blocker for this proposal’s advancement and the syntax concern is something that we were attempting to address.

MF: The question I put on the queue was answered by KG in chat.  But I just wanted to voice my support for alternative 2 as long as it is – it permits us to move forward with something more permissive in the future and seems taking the first step is the best idea.

RBN: The specific reason this is proposed as an alternative is it gives us the flexibility to go either direction.  We can either weaken the unary expression requirement for the argument – for the upper end to throw or we could strengthen the unary requirement for the throw expression itself and remove the parentheses and it givers us the flexibility to go either direction.  I’m not the happiest with this approach because it requires in places where I don’t 
think they should be required.  The majority use case 95% and I apologize for being a bit – there’s no data to back this up and other things from other languages sharp with the flexibility the places you use this is unary at the end of nullish coalesce in conditional operators and potentially initializers.  That’s the main cases where you see these, those are the cases that – at least everything but the argument case or the cases that don’t require parentheses if it is unary expression even with this ban.  

RBN: With this ban the parameter case 
becomes more complicated because of comma that Nicolo also brought up.  And requiring parentheses around throw I feel to be unfortunate for the 95%ish use case where it is normally and regularly and legally used within the language.  So my main reason for suggesting alternative 2 is that it will eventually give us the flexibility to remove the parentheses around throw if we find the different acceptability solution for the syntax but at the very least would allow this proposal to move forward because it’s valuable on its own.

RPR: Mark is on the queue with one person on the queue and couple minutes left.  Go ahead mark.

MM: Okay.  Just a weird idea, might be completely bogus.  The juxtaposition of Waldemar’s position of putting the parentheses around the throw and Nicolo raising the do expression makes me wonder if most statements begin with the keyword that can only be at the beginning of a statement.  So what if the do expression proposal spelled instead of do expression open curly it was open 
parenthesis with the corresponding closed being closed parenthesis and the open parenthesis before the throw is generalized to do the open parenthesis before if or switch or all things.

RBN: If I could interject.  It’s not a good idea, it’s a suggestion that I expressed on the throw expression issue tracker five years ago.

MM: Great.

RBN: It did not seem to gain traction.

KG: The specific problem with that proposal is that many of the use cases of do expressions are introducing a scope. Introducing a scope requires having a block.  But braces inside of parentheses is already –

MM: Got it.

KG: And so since we already would have to have some syntax to introduce a block, that gives us do expressions already.

MM: Got it.  Thanks.

RPR: In the last remaining minute, Ron, do you want to propose anything?

RBN: First I would like to see – I think WH’s biggest concern around the complexity of this or I shouldn’t say the biggest concern but one concern that Waldemar raised is how much this adds to the specification.  This does not add that much to the specification aside from the editor’s note around what it’s intending to represent, it requires only three static semantic rules in the same vein of what we already do for optional chain to handle ASI and the rest is 
still handled by the look ahead ban.  This isn’t that complicated.  It essentially does what a linter would do and in the past it’s been my preference that this was just handled by a linter if you were concerned about these ambiguities and again this ban is specifically to address in my opinion intended to be compromised to address the concern about this in the same vain that 
we also address the parentheses around – or parentheses necessary to disambiguate between double bar and double question for those tokens.  I also opposed needing parentheses for those because it can be enforced by a linter.  

RBN: That was the direction for the – that the plenary went through.  Again, this is specifically to enforce a ban that a linter might otherwise also enforce.  Otherwise, I don’t feel this adds that much complexity to the specification to 
support.  I am not – my preference is still not to make this the throw keyword followed by expression because it forces parentheses in cases that it shouldn’t.  Alternative 2 is the worst of all worlds because it requires parentheses in both cases but the only thing it provides is flexibility.  I would like to try to see if I could gain consensus on alternative 1 first.  I know that Waldemar has concerns.  I would hope that those concerns are possibly remediated by the discussion or possibly lifted somewhat by the interest and discussion that we 
also had here.  So I would like to try to start with that.

RPR: Do we have consensus for alternative 1?

WH: I object to alternative 1.

RBN: All right. I will first make an attempt to make – get consensus on alternative 2.

RPR: Do we have consensus on alternative 2?

MF: I feel like this is a bit sudden.  I apologize but this wasn’t how the proposal was structured before this meeting and I would like more time to consider it.  I do feel it’s pretty safe.  But I don’t know if I can be confident enough in moving forward with it.

RPR: DLM is on the queue.

DLM: MF just said what I was going to say.  I think we need some more time to think about this.  It’s been a pretty contentious discussion so far.  And I guess I would like to see, you know, a final – you know spec text ready and time to review it and if it came back in the next plenary.

RPR: Okay.  Any other advice for RBN?

KG: Waldemar, I know that you don’t like the restriction on the right hand side presented here where it is only unary expression and you’re correct there’s no like reason for it in the sense of nothing in the spec as it is actually requires it and it could simply be relaxed but given various concerns around people have hopes of relaxing this in other directions later, would you 
be okay with this as a compromise position?

WH: Well, if the intent is to turn this into alternative 1 later, then I already stated I would object to alternative 1.

KG: The intent is not to turn it into alternative 1, just that there may be a path forward some day that we don’t yet know what it is.

WH: We should find out what it is.

KG: No one has such a path forward in mind right now.  But requiring the parentheses on the right hand side only restricts relatively few cases and preserves that optionality for the future.  So it seems like a reasonable compromise.  If that doesn’t seem like a reasonable compromise to you, it would be good to know.

RBN: There is also the potential that the restrictive case in alternative 2 if we find that if this does ship to the ecosystem, does ship and is adopted within the ecosystem and people do become used to throw expressions and used to the precedence of what goes in that argument list, that maybe there’s the potential that Kevin might choose to remove his restriction around that distinguishing character because people will have gotten used to it in an expression position.

WH: I don’t know if that would be ever be the case but I —

RPR: It sounds like, RBN, you have some direction on taking this away and to be brought back.  Do you want to, I don’t know, give a sentence summary of where we are.

RBN: Yeah.  At this point, it seems like the main concern that I saw from several has been to need more time to review these alternatives and what impact that would have on the syntax.  I do apologize for the rush nature of some of the recent updates in the last two days.  Most of this is trying to find ways to address the concerns that were raised on day 1.  So I will be happy to come back in the next plenary with updates and I would appreciate feedback on the repo as to any questions or concerns about the alternatives as presented and if other – if there are other suggestions about ways to move forward, I would appreciate those as well.

### Summary
- RBN proposed a few concrete alternatives for syntax details around throw expressions, for how to prohibit throw expressions from having visibly differing precedences between statement and expression position.
- KG and WH had strong, incompatible preferences for which alternative to choose.
### Conclusion
- The throw expressions proposal remains at Stage 2 with no conclusion on syntax questions.
- RBN will bring this back to committee at a future meeting
## Incubator Call

RPR: Okay.  Thank you RBN.  All right.  So final agenda item is incubation call chartering.  So Shu is no longer running these meetings.  If people want to volunteer their proposals for setting up their own calls, do folk have suggestions for calls that they would like to propose?  
EAO has one.  Intl messageformat.  And a second as well stable formatting.  Any other suggestions that champions would like to put forward?  If not, I’ll pause there.

SYG: Eemeli weren’t there two?

EAO: Yes, I have two requests.  Intl messageformat is one and stable formatting is the second one.  I don’t think there’s a third one.

DE: Sometime between this meeting and next meeting a group of people that I’m working with – we aim to have a signal proposal to share with the committee and so maybe that would be, you know, 
not sooner than a month from now.  If people want to be incubator call beforehand with that 
group, then I would organize that.

RPR: So DE is talking about an upcoming proposal about signals and please reach out to him if you would like to be involved in the early calls.  Shane is volunteering, locale extensions.

SFC: We understand from the discussion earlier today locale discussion is going to definitely involve other work on other bodies like the one that I’m most familiar with and BAN is most familiar with is this body.  I don’t know if there’s room for using the incubator call machinery we have in this body to also engage with other bodies that might be relevant.

SYG: As I presently used to organize these.  Nothing is stopping you from doing that.  The main intention of incubator call is to have some sanctioned time set aside for smaller proposals that didn’t already have a working session call that was regularly scheduled for it. I don’t know how big the scope of locale extensions is; maybe it’s somewhat larger. For larger proposals, it’s probably worth it to just schedule your own call. The incubation thing is to normalize the idea of setting some time aside between meetings to hurry up the feedback cycle.

RPR: So I think we have our full list.  We have a list of four.  So thank you for that.
## Future meeting planning

All right.  So just before we close I did see that Michael Ficarra was asking about the schedule for next year.  So far we only publicized the date for the first meeting.  We have most of them locked down.  There’s just a final European one that we need to get confirmation on.  And as I mentioned on Tuesday, we’re still looking for a host in APAC toward the end of 
the year.  If anyone is able to volunteer as a host for that, that would be very helpful.

WH: When is the date of the second meeting of 2024?

RPR: I would like to just hundred percent confirm that.  We have that effectively confirmed because that will be remote.  But I will get back to the notes and be able to send that out 
tomorrow.

WH: Okay.  Because I’m scheduling vacations and other timing.  Want to make sure it doesn’t conflict.

RPR: Yes.  I will make sure you get that tomorrow.

WH: Okay.

RPR: All right.  Then I think we have reached the end of the meeting.  So I think particularly for this meeting we’ve been supported by AV team and our local events manager.
That I think, that has been helpful and top quality throughout.  And they also supplied the J pop that’s been excellent.  So with that, I think we shall close up.  Thank you everyone for an excellent meeting in Tokyo.  Hopefully we will return here sometime in the future.  All right.  Bye for now.
