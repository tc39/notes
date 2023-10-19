# 14 December, 2021 Meeting Notes

**Remote attendees:**
| Name                 | Abbreviation   | Organization       |
| -------------------- | -------------- | ------------------ |
| Robin Ricard         | RRD            | Bloomberg          |
| Waldemar Horwat      | WH             | Google             |
| Richard Gibson       | RGN            | OpenJS Foundation  |
| Nicolò Ribaudo       | NRO            | Invited Expert - Babel |
| Michael Saboff       | MLS            | Apple              |
| Frank Yung-Fong Tang | FYT            | Google             |
| Sergey Rubanov       | SRV            | Invited Expert     |
| Chip Morningstar     | CM             | Agoric             |
| Josh Blaney          | JPB            | Apple              |
| Devin Rousso         | DRO            | Apple              |
| Mathias Bynens       | MB             | Google             |
| Philip Chimento      | PFC            | Igalia S.L.        |
| Yulia Startsev       | YSV            | Mozilla            |
| Luca Casonato        | LCA            | Deno               |
| Jack Works           | JWK            | Sujitech           |
| Istvan Sebestyen     | IS             | Ecma International |
| Zibi Braniecki       | ZB             | Mozilla            |

## Opening & Welcome

Presenter: Aki Braun (AKI)

AKI: This is my last meeting! Good morning, welcome to Los Angeles. It's raining. It's cold. I want to crawl back into bed. I hope everybody is feeling awake wherever you are, and I hope for everyone who isn't in LA that it's not raining and cold and miserable. My name is Aki Rose Braun and I am co-chair of TC39 for one final meeting and I'm a delegate of PayPal.

AKI: These are your 2021 chairs from the left. There's Brian Terlson from Microsoft and Rob Palmer from Bloomberg and then me from PayPal. And then we have our two former chairs who are now considered facilitators. There's YSV from Mozilla and Myles from GitHub, though. Myles has moved on to do other things and we wish him the best and we miss him. And since this is my last meeting as chair, I'll try to maybe show up for facilitating a little bit. It's really hard to quit you all. I want to thank everyone for the last three years as chair and four years, more than four years delegate. It's been a wonderful experience. I am going to miss it.

AKI: It is a requirement for ECMA bylaws that we keep attendance for all of our meetings. And so I'm going to assume that all of you, by virtue of your presence on this call, have signed in using the Google form distributed on the reflector. If you somehow joined without filling out the form, please do. So as soon as possible. We need that information.

AKI: First things first. I'll address our code of conduct. It's available from the link in the footer of our website, which is TC39.es. Anyone participating in TC39 activities is expected to be familiar with the expectations outlined in the code of conduct, and is expected to behave in a manner that reflects a respectful understanding of it. If you have a concern relating to a possible violation, please reach out to the code of conduct committee., if you have any questions about the code of conduct, please reach out to the CoC committe. And there is no obligation to file a formal complaint. If you do reach out, all reports are confidential with the exception of extenuating circumstances in which case that'll be communicated to you as as possible.

AKI: Onto our comms tools. To start with, we have TCQ. This is where we track our agenda and more importantly the queue for speaking up. Log in, with GitHub at TCQ. Once you are logged in, you should see the agenda View and that will indicate which topic we are discussing. Pushing to the cube, you will give you an opportunity to see what's being discussed in greater detail and to contribute your own voice. Clicking on new topic, allows you to start a conversation on a new question or statement. This is the primary button to use in dcq discuss current topic allows you to reply to an active conversation, should only be used when directly relevant to the topic at hand. Clarifying, question will jump you to the top of the queue and you should only ever use it. If you are otherwise unable to follow the conversation, it will interrupt conversation. Abuse of this button will not make you friends but using it responsibly we will. And the point of order is like the nuclear option, it interrupts all conversation to be acknowledged. An example of it of using it is when the note takers are unable to hear something or need some additional help with note taking. When that is your turn to speak you'll have an I'm done speaking button added to your view. Please remember to click it once you are done speaking. We have several Matrix channels and a matrix space. That's kind of like a Discord server or Slack. They all have their purpose, these channels, but the two in particular that tend to be very active during meetings. are TC39 delegates for technical conversations, especially for the current agenda items, but not exclusively these conversations can wander and that's not a huge faux pas. The conversation is public to spectate but only registered delegates can participate. It is logged. And temporal dead zone is the off topic back Channel director, brain thoughts there, and make sure to keep any technical topics in the TC39 channels. second channel is technically public. So don't say anything there you wouldn't say elsewhere.

AKI: Before, after and between Meeting hours, we have our hallway track on Mozilla Hubs. The hubs link can be found the reflector, if you find your computer is struggling with rendering, try tinkering with your settings. Force Hubs to render at 800x600. It doesn't look nearly as bad as that sounds. And it runs away way better.

AKI: IPR, i.e. intellectual property rights - in order to participate in the TC39 plenary OR Champion proposal, You must represent an ECMA member organization as delegate. Main exception there invited who may attend and participate with the permission of both the chair group and the Ecma Secretariat any participant who is not active Delegate for member org, must register by signing the RFP G agreements post and letter stands for Royalty, free task group. I'm not a lawyer. I'm pretty sure. It means your licensing. The rights of your IP to Ecma so that we can publish a standard every year. There are other exceptions to can participate such as Ecma fellows, but that's kind of in the weeds. Mostly you have to either be a delegate or an invited expert. Make sure that your company's legal team has reviewed all of this because you are indeed by virtue of your participation signing over. A certain legal, right?

AKI: Okay, notes. We are blessed to have Kevin's bakkot-bot transcribing, I believe. Is that accurate?

KG: Yes it is!

AKI: This will still need note takers to edit and clarify what's being discussed, including marking who is speaking. As a bonus, you get to share the amazing typos and homophones. We should probably have a Twitter account for this. There's some real comedic gems.

AKI: Finally, our next meeting, your next meeting is a traditional three-day meeting. How many days when's the next meeting?

RPR: Four days.

AKI: Correction, the next meeting is four days in Seattle, except not actually, because someday someday travel will be a normal thing that normal people just do normally again, but not today. Be there or be mad your opinion wasn't heard.

AKI: Okay, onto some housekeeping. Has everybody had an opportunity to review last meeting's minutes? I'm going to take your silence as an implicit. Yes.

AKI: Do we have approval of the minutes? Okay, same assumption.

AKI: Can we formally adopt this meeting's agenda? I see thumbs, great. Wonderful.

## Chairs update

Presenter: Robert Palmer (RPR)

[Slides](https://docs.google.com/presentation/d/10F9pUoOGQZQWMS9tGT5292GzuWfIk3MaOf6uAGQywqc/edit#slide=id.p)

RPR: So this is an update from the chair group. We have elections upon us for the TC39 chair group. So, the current situation with the chair group as AKI has already has already shown us, Is that AKI will be stepping down: very sad but she will continue to be a facilitator. Just like YSV, that's a slightly privileged position, helping the chairs out. Brian and myself are happy to continue. If you'll have us. And Myles was also a facilitator. He will be retiring as a facilitator, becoming a normal TC39 member.

RPR: As of the moment, we have not received any nominations for TC39 chairing. I will remind everyone that the nominations remain open for another four days and we made a reflector post about this a couple of months ago. So that's still up there and we're planning for the election in January 2022. This follows the process that YSV has published before, which is that there's a link here. I'll make sure you get, you get this and, but it's a fairly efficient process.

RPR: Yes. So that's it for our elections.

RPR: Moving on to thanking some of our contributors. So in the Ecma GA happened last week, we were really pleased that two of our nominees that you may remember from the previous meeting have been recognized with the top Ecma Recognition award. So Andre Bargul, aka @anba, from Mozilla has received an award for his exceptional contributions to the quality of the language. So this is in the form of contributions to multiple specifications, including the core language, as well as all the work that he did. I think when introducing ES6 he was perhaps the lead person building up test262 and reinvigorating it at that point. So for many years, I think he's been called out as being amazingly accurate and he finds issues No one else does. So we had some really good recommendation letters and also a little bit of acknowledgement that maybe most of the web developers don't know it's even happening. But in terms of the impact, this is huge. So please join me in congratulating Andre Bargul. [applause] A number of people asked to speak and I'm going to assume that you're all clapping unless you say otherwise in the chat as a lot of applause is going on. Thank you, Andre.

RPR: Next, we have another very special Ecma Recognition award for AKI, our host today and seemingly opening for as many meetings as I can remember. So, Aki has been with us serving as chair for three years, I think everyone knows her outstanding contributions. You may not know that she's introduced a lot of the process that we enjoy today for efficiently, onboarding and off-boarding changing status of delegates. So, managing the information including recent like full automation of that, we various scripts,

AKI: Yeah, I totally wrote a CLI.

RPR: Exactly. This is, this is what we want. This really helps us be efficient and a massive all-round improvement to Communications. So some of these systems like setting up discourse. Also, our whole agenda management is done by Aki. The fact that your time constraints get respected that we're able to do last-minute dynamic scheduling is all down to AKI’s efforts including making it so that the hack MD was all that down thanks to Aki and I think that we can all agree that that's probably the most efficient thing for getting through the meeting. She was just an all-around role model and lastly I have to mention the energy that Aki brings to this meeting. Sometimes in her time zone, This is 3 a.m, And you wouldn't know it. Fully positive. So, I'm really I'm really sad that that she's not going to be continuing as chair, but hopefully continuing on as a facilitator. So I hope she continues for as long as possible. And we're definitely indebted to her. So thank you, Aki. (clapping) similarly, we've got a lot of claps in the chat. Aki, did you want to say anything at this point?

AKI: I'm gonna miss you all. I'm not going away entirely, but I'm not going to be nearly as active as I was because - well, I don't know if you've noticed in the last couple months, but my job has changed in a way that has made paying attention to anything other than the 60,000 additional things I need to do is hard. But hopefully in the new year I will have a little more. I'm gonna miss it. I'm going to miss this a lot. And who knows? Maybe I'll be back in a few years. You never know what happens next. If I get bored of management, back to being an IC just like everyone does. Well, thank you everyone very much. Thank you.

RPR: I think Brian says that the Clapping has crashed his computer. So he's rejoining now. He's due to present the next item.

RPR: So Brian's back to present a proposal from the chairs.

BT: All right, one second. Sorry in the exuberant clapping was little bit too much for my browser to handle.

BT: All right, so, the chairs would like to create a new official position within TC39 that we're calling the ***TC39 Administrator***. The administrator is a person that's selected by the chairs to manage TC39 spaces including GitHub, Matrix, and dicourse. It turns out that there's actually quite a bit of work to do here, a lot of a lot of GitHub issue grooming a lot of keeping track of different Matrix discussions and a lot of different channels. And it's a lot of work that it would be nice to share with others and in a lightweight way that the chair is can just delegate Authority as an as-needed basis.

BT: So what does that look like? On Github. There's a lot of stuff. It's just a ton of stuff in the TC39 org that has to happen like onboarding delegates. This is not approving any immediate invited experts or anything like that. But once a delegate has been sort of approved, there's a bunch of activities that need to happen and getting help with that would be great. The agendas notes and proposals repos are just constantly. in a state of needing, you know, grooming and upkeep and like proposals when they change stages they need their metadata updated and Stage 4 proposals generally need to be archived. So it's like, you know, a lot of lot of work there.

BT: Likewise, you know, when there's an ongoing sort of shall say activity driven by the community on certain issues. It would be nice to have someone help respond to that kind of thing. So that means, I think, you know, taking some executive action on a temporary basis to respond to spam and and other clear violations of the code of conduct or that kind of thing. and otherwise carry out tasks as delegated by the code of conduct, we need.

BT: Similarly, in Matrix, you know, we need some folks to be channel administrator to again carry out some of the moderation activities and help in assigning user roles for new delegates and that kind of thing. And discourse has similar needs for you know, know, grooming spam, removing spam,monitoring discussions and getting delegates into places they need to be.

BT: So, we want to make Jordan (JHD) our first TC39 administrator, and this should not be particularly controversial since Jordan has already been doing this work. Thank you, Jordan. He's been very instrumental in keeping our GitHub like pristine and productive. (clapping) So we really want to bless this work that he's already been doing with an official role. And also that will let us establish a process for in the future if Jordan decides he wants to spend less time on GitHub. We can onboard someone else to help with the slack. So, we'll finalize this position and sort of clarify what all of the roles and permissions and stuff that they'll have for the January meeting. So we'll post on the reflector. But in the meantime, if you have any feedback or any thoughts or ideas or like other activities that you need help with like as a champion that you think the TC39 administrator could help with Definitely reach out. Let me know where I'll make the reflector post and put it there. So look for that in January. That's it for me.

## ECMA-262 Editor's Update

Presenter: Kevin Gibbons (KG)

KG: Okay, so we have had a few major editorial changes. Starting with 2531, which was a major refactoring of the structure of the semantics for regular Expressions. If you had a PR or proposal in process that changes these, I apologize for the conflict which this will inevitably cause and I'm happy to rebase for you. But basically instead of having quote unquote evaluation rules for regular expressions, they now have syntax directed operations that are named and that produce values, like most of the rest of the spec machinery. Because these aren't evaluated in the sense that the rest of the language is. Second 2566 in the module machinery we had a few strings that we were using for like, basically, enum values and that conflicted with a long-standing normative PR that had been open for more than a year which I'll talk about on the next slide. So that was just a slight tweak to unblock that PR. And then lastly 2484 is another tweak to regular expressions. There was a lookup table for doing substitutions that was kind of hard to follow. So now it's been re-written as a more traditional algorithm and hopefully that will be easier to tell what's going on there. It's also more precise because the look-up tables are always sort of wishy-washy.

KG: So next normative changes. First, the error cause proposal landed! And then second this is the PR I mentioned on the previous slide which we landed which we have had consensus on for, I think about a year. It allows the use of arbitrary strings or I should say arbitrary well-formed Unicode strings as names in the exports from modules. This is like `export {x as y}`, it would be the `y` part. This was necessary for interop with for example wasm, which has no restrictions except that it's valid unicode. So previously you could only export actual identifier names and now we allow strings in that position.

KG: And the next just a bit of meta business. I wrote an auto formatter for spec text. You can invoke it by running `npm run format` in 262 or if you are using ecmarkup in another project. You can look at what 262 is doing there. It's just a bin distributed with ecmarkup that will canonicalize everything. It's enforced in CI in 262. So if the build job says you need to run `npm run format`, then you need to run `npm run format`. And of course there is a way to opt out if for some specific section, the format produced by the formatter is subpar.

KG: And next, the upcoming work, this is very similar to previous meetings. I do want to mention these two highlighted ones. The first one, Michael has been working on, the second Shu. And we are making great progress on both of them. 2283 in particular, the can-call-user-code annotation, that pull request is open and very nearly ready to land. So this is a mode particularly for implementers where you press `u` and it will mark every site in an algorithm step that can invoke user code, including transitively, through abstract operations. Turns out there's a lot of ways this can happen. So hopefully this will help with implementers understanding which things are observable and which are not. I'm not going to go through the rest of these again because we've talked about them several times at this point, but please look at these issues if you have any interest.

KG: Finally, last meeting we mentioned we were going to rename the default branch to "main". Now it has been done: if you are going to run into any problems with this, you will have run into them by now, but just as a reminder, this set of commands on the screen will update your local repository to track the new default branch, and that's it. Thanks very much for your time.

RPR: Yeah, there's a queue item from Mark Miller. Yeah.

MM: I just want to react to the can-call-user-code, specifically the comment that it is primarily for implementers. That is tremendously useful for anybody writing defensive code, because the "can call user code" is an opportunity for re-entrancy attacks: it marks interleavings by other code that might be trying to attack you. And as we've seen starting with most famously with the DAO bug, re-entrancy attacks are a big deal. So, this is tremendously more useful than just for implementers.

KG: Yes, that's an excellent point.

## ECMA-402 Status

Presenter: Ujjwal Sharma (USA)

USA: In the interest of time, I'd really quickly make the statement that there is no update and so there's no new normative pull request that we need consensus on, which means that we're free for ecma 402. Thank you.

## ECMA-404 Status

RPR: Anything on Ecma 404, Chip?

CM: It's exactly what you expect. All is well, all is stable. Nothing changes. That's the way it's supposed to be.

## Test262 Status

Presenter: Rick Waldron (RW)

RW: Regular additions and updates. Frequency of contribution. It's all exactly as I would expect it to be for a large-scale repository full of conformance tests. Stage 3 stuff is doing great. If anybody has any questions, hit me up.

## Updates from the CoC committee

JHD: I don't think there's really any updates right now.

## Add import.meta[Symbol.toStringTag]

Presenter: Jordan Harband (JHD)

- [PR](https://github.com/tc39/ecma262/pull/2106)

JHD: So, the committee has previously decided essentially that namespace objects like Reflect, JSON, and Atomics should have a `@@toStringTag` for debuggability.

Only really, what is the proposed content of the two string tag? Oh, in this pull request. It is the string import meta in Pascal case.

MM: In what case Pascal-like capital?

JHD: Yes, capital I.

MM: Got it. it. Thank you.

JHD: Yeah, and it could be anything the exact content of the string is I think pretty bikesheddable. The thing that we need consensus on most importantly here is, should we add the property or not? The arguments "for" would be debuggability. It's a built-in object that holds stuff like Reflect, Math, Atomics, and so on. The arguments "against" would be that, it's not like a globally available one where the same instance is always everywhere, each module gets their own. Bradley commented on that PR a year and a half ago with some reasons why we maybe shouldn't do it - there's three bullet points. The fourth bullet point here to me, is sort of contradicted by the fact that module namespace objects already have own `Symbol.toStringTag` properties. So even though every module can be imported as its own module namespace object, that will have a `Symbol.toStringTag` property. So for me, that and `import.meta` are conceptually similar. There's not one per module.

JHD: Okay, so to MM's question about enumerable writable configurable the `__proto__`, currently it is configurable and writable but not enumerable. I don't think there's a strong reason to do it that way. That's just what happens to be this pull request.

MM: I think there is a strong reason to do it that way and you got it is exactly right.

JHD: Oh, okay. Well, then, there we go. Yeah, I mean I think my thinking around it was just that it was mainly unlike a module namespace object. This is only available to the module. And so there's not really any hazard for the module storing things there, it would just be weird. But yeah. Anyway as it is now it won't show up in enumeration, but it can be modified as any other property. So yeah, and then to (BFS) Bradley's bullet points here, the third one I think is still somewhat compelling, which is that this is generated from host data and TC39 has kind of largely intended not to add stuff to import.meta. I imagine that it would take a really strong interoperability evidence for us to want to add a property, and thus prevent a host from using that property name. I don't think any host would ever add Symbol.toStringTag as something other than to identify for debugging that it's an import.meta object. So it can kind of goes either way here? So are there any thoughts? I see some things on the queue.

MF: Yeah, I guess you kind of just mentioned this point, but I kind of find Bradley's third bullet point there pretty compelling. I'm not completely opposed to adding something to import.meta. I just think that we should have a pretty good reason to do so, and I don't think that this is compelling enough at least for me. I'd like to just stay away from touching import meta if we can.

SYG: +1

YSV: Yeah, I just want to quickly also mention while I find Bradley’s arguments compelling. I think that if we do end up with a reason to add this, then we should spec it and not leave it up to the host. But in absence of such reason, I don't know if we have a good enough argument for adding this. I believe the argument for adding this was consistency with other built-ins that are to have this symbol to string tag

JHD: There are two, and that's one of them.

YSV: What was the other?

JHD: Debuggability. It helps you identify where they're like the provenance of the object as you encounter it somewhere.

YSV: Yeah, I would find this more okay if this is really a problem then I would support it, but the other argument I don't think is quite strong. So that's why I'm leaning more towards what Bradley was saying

JHD: I will point out. This one is something that I think has gotten very minimal usage so far, and it will take a lot of time for hosts to begin to add useful properties in such a way that practitioners can rely on them being there and utilize them. So it is also totally reasonable to say no for now and maybe we'll revisit In the future if it becomes an issue. But yeah, I would want to push back against "no forever" for the reasons I just mentioned. But I don't have a strong opinion that we have to add this for consistency.

JSC: (in TCQ) Do hosts already added @@toString tag?

JHD: I don't believe they do. I haven't done extensive testing. But I mean, yeah, I would be surprised if any did.

BT: All right. Queue is drained.

JHD: Okay, so, it sounds like - the question is, do we have consensus to add it?

BT: Sounds like not.

JHD: Okay, so then is everyone comfortable with me closing this pull request with the message, "with a more compelling use case in the future it can be revisited"?

MM: I'm happy with that.

YSV/SYG: Yeah, that's fine.

JHD: Thanks everyone.

### Conclusion/Resolution

PR to be closed and revisited later

## RegExp set notation + Unicode properties of strings ready for Stage 3 reviews

Presenter: Markus W. Scherer (MWS) & ​​Mathias Bynens (MB)

- [proposal](https://github.com/tc39/proposal-regexp-set-notation)
- [slides](https://docs.google.com/presentation/d/14AWHZvUeaKNHh_b_1xyqVlnDlYW8fWC4Lfgr0lHf2W4/edit)
- [pr](https://github.com/tc39/ecma262/pull/2418)

MB: We're just giving an update about the regex set notation proposal aka the v flag. We don't know what this flag does. Is it adds such notation and the lambics for difference intersection in character classes. And it also enables the use of properties of strings.

MB: So what I want to focus on today is really the changes since last time we brought this to committee because we've done it possible fates already. I'm not going to tell you things, you already know, but so here's something that changed last time in terms of the only proposal changes that aren't purely spec fixes because we've had a few of those as well. So here's the quick overview. We have a dedicated slide for each of these, so we'll go in more detailed in a second.

MB: with the first one has to do with IgnoreCase, which we presented a proposal to change the ignore case, semantics and our proposal, compared to how it works, in the u flag which already exists. And since then we should go and with proposal. The string literal syntax changed again and also there is one point which isn't really a change, but something that we got comprehensive last time we presented some proposal to change the meaning of \d \w and \b, and we got strong pushback during this meeting. So we're not looking to revisit that but we're hoping to clarify what this consensus of last time means exactly at request of some delegates. So let's go over these one by one.

MB: The first is about the IgnoreCase.

MWS: We presented pretty much this slide in August as well. And we pointed out that the current spec has an inconsistency in what looks like it should be the same, but it doesn't behave the same and it actually behaves in some kind of interesting way and we propose to do a deep case closure and have the simple complement just to what it kind of looks like it should be doing. And as a result we sort of pre-compute what the existing spec is doing in a matching algorithm. And with that, we basically go into the matching algorithm itself with the invert flag being false so that we don't go into conflict there as well. We have a complete spec now that we have discussed with people like WH and Richard and some others and we are pretty happy with the outcome. It's consistent between expressions that look like they should be behaving the same. And it doesn't have the kind of quirks that the current spec has. In some cases it will change behavior between the /u flag and the /v flag, but that's also why we have a flag for the new behavior. If you are looking for more details, we have the link there to issue 30. And that also includes examples and includes a fair bit of discussion of how we arrived at this new version.

MB: And I suppose this shouldn't really be a big surprise because we already presented this proposal, the change is that now we have been implementing it since August.

MB: All right, so I also mentioned that the string literal syntax changed. In fact, it's reverted back to what we had earlier, which is back, \q{}. There was a lot of discussion on this topic, and I'm not looking to revisit all of that. We presented some of this in the last meeting in August as well. But so for details, see issues 33 and 46. But in summary, we believe that this syntax signals to practitioners that if they don't know what this \q. Thing is that they need to look it up which wasn't really the case with parentheses which we were using before this also leaves the door open for string range abbreviation syntax using either parentheses, or a different backslash with some new letter combination in the future. So after all this discussion we're really happy to go back to \q{} case and we feel it's the right solution.

MWS: Yeah. I want to point out that this is also the syntax that the Unicode spec recommends for string literals.

MB: It’s in UTS #18 = Unicode regular expressions spec

MB: And then the next thing is, well, it's not really an updated something we discussed last time. So, last time, we proposed aligning \d \w \b with Unicode in this new v mode with the v flag set, and we received pushback on that. So we're again we're not looking to revisit that we're no longer pursuing this as part of this proposal, but we have since heard some concerns from delegates that it would like to clarify what this consensus from the last meeting. Means exactly. So concretely, the question is, should it be possible to change the meaning of \d \w \b in the future as part of some other proposal. We believe that the answer is, yes. That's the consensus was just not to do that as part of this proposal and we just want to get an answer as to whether that understanding is correct or not.

MB: I think WH, you were one of the people who pushed back pretty strongly against this in the meeting in August. Do you have an opinion on this clarifying question?

WH: Yes. I have an opinion on this. I don't want to tie the set syntax to other miscellaneous changes like this. So I have nothing against some other way of getting the `\d`, `\w`, etc to do more, but if somebody just updates the syntax for set notation, it shouldn't affect unrelated things in the regular expression.

MB: I see, that answers our question.

WH: So, the short answer is that I have nothing against a separate proposal to modernize `\d`, `\w`, etc.

MWS: I think this came up last August from Bradley who kind of lobbied for the change, but also was afraid I believe that by basically having an update to the spec that doesn't update these things that we would sort of set a precedent for never ever changing these in the future. And I think he was looking for some sort of a statement somewhere like, in an informative piece of text or possibly in an HTML comment or something that doesn't render to basically give a heads up to people that some future proposal under some conditions might change the behavior of these shortcuts.

WH: The issue is that this is not a uniformly positive change. There remain plenty of use cases for `\d`, `\w`, `\b` as they are today. So changing them to Unicode semantics is not an upgrade, it’s a sidegrade.

MWS: Yeah, I understand. The question is whether the committee would entertain any kind of non-normative note that might say something like the behavior of these might change in the future under some conditions or something. I don't know.

MB: I think I got an answer to the question like on the record like we've been captured in the meeting notes if that's okay, WH response seems To cover this. And we could even include this in the FAQ of this proposal as a side note, but I don't think we need to go as far as necessarily including it as a comment in the spec text itself or anything like that.

WH: I agree this has nothing to do with this proposal.

MB: So I think having an answer on the record is good enough, like it's okay to use as a proposal.

MM: Yeah, sorry if I missed it, but what is v mode?

MB: v is the new regular expression for regex that enables the new features that we're talking about. Did that answer your question? So it's both the set notation syntax and semantics, and the properties of strings are gated behind the v flag.

MM: okay. Better to my question. Thank you.

MED: Yeah, I had one remark. If these might change meaning in the future, you know, if it's possible for these to change meaning in the future, it would be really nice to have that recorded in the spec, instead of just in some committee notes someplace. Because then people would know that if they really want to check for just ASCII characters that they need to do that explicitly.

WH: No, that would be backwards incompatible.

MED: Yeah. Well if that's the case then, then that's different from what I was hearing MB saying so if these will never change in a way to incorporate more than ASCII then I think that needs to be clearly documented.

WH: They can't, unless you introduce a new mode or change the syntax, like we discussed.

MED: I mean, if you read the spec, it's `[...?]` and other regular expression engines have done that. They've changed the meaning. I think it's a service to your users, if we say what could or couldn't happen with these things because otherwise people can make wrong assumptions either way.

MB: To clarify, \w \b \d are not going to change for any of the existing flags including the new v flag that we're adding. The only way they could potentially change, I believe is with the introduction of a new flag and Mark. Are you saying that *this* would be useful to add to the spec just as a note?

MED: Well, I'm just thinking as a user if I see that.. The first thing if I'm coming from another environment where \w does actually align with the properties that are expected of words and not just ASCII then I can have a certain confusion. If I want to make my code future-proof, then I also want to know. Can this change under any flag? So that chunks that I write in regular expression might be wrong if some other flag is turned on. That's all I'm saying. And I don't want to rabbit hole on this. I just wanted to raise that concern.

WH: A flag is not the only thing we were considering. Another thing we were considering was a slightly different syntax for these. So no, I do not want to put speculative things in the spec text saying that we might introduce a flag in the future.

MED: But you would be willing or would not be willing to say that these things only apply to ASCII.

WH: What is the question?

MWS: I think that's what the spec does say.

MED: Well, this fact is that they do currently apply to ascii, but somebody could have - as I said there has the regular expression engines which have changed meaning of these to line up with Unicode character properties, and it would be a useful service to users to say that will not happen or that could happen.

WH: You cannot break the web.

MED: Yeah. Well in that case, I'd say it's pretty clear that it would be useful to tell people that these will never be changed to only to do anything other than look at ASCII. As again, I don't know that. So this is one of this

WH: This is not a useful line of thought — these are not the only choices. We cannot change the meaning of these things in existing regular expressions because that would break the web. Whether we add a future mode or syntax in which they do something else, that's up to future proposals. Putting speculative things in the standard about possible future proposals is not something we should entertain in this case.

MB: Okay. Thanks. I guess that answers our question.

IID: So, it seems like we were sort of talking about two separate issues. Once because we have the flag and we have the set notation and there are a bunch of things that we might want to change if we had a new flag, but also we've decided that the set notation may require a new flag. And I think it would be good to get to like a sort of normative consensus that adding lots of flags willy-nilly is generally a not a thing. We want to do like we would prefer to add fewer Flags, especially mode then adding more like we added, I still get confused a lot about forgetting to add the U flag and then if we have a v flag to enable new features and then later we need to add a w flag because we have some tweaks that we want to make to things that seems like we've ended up in a situation. That's a very difficult for non-experts to remember. What is what the learning curve is very Steep and Once I think it's good, if we can minimize the number of new flags that we add. So it seems like it would be good if we could separate these in some way - I kind of want to ask this question later, but it seemed like a good time now. Is there a possibility that we could re-examine exactly why we believe that the set notation proposal requires a new flag and consider whether it's possible to do that in the u mode and then separate any changes that we want to make for a future. Let's do improvements mode into a separate proposal, because I think we're kind of if we're going to add a v flag we should take the time to make sure that all of the little warts like the ignore case are getting fixed. Not just the ones we happen to be thinking of, as we add this and yeah. One last thing I'll say, in the issue on backwards compatible syntax several months ago I asked a question about whether it would be possible specifically to use to extend the \p notation that already exists to handle set notation. So, instead of using square brackets around the expression that we want. You would write like back `/p { name of a property - - name of another property }` for example, and I and I think that Fulfills. Our goal of being an exception in the current Unicode mode being parsable under the same constraints in the non-current non Unicode mode. while not requiring a new flag, and the response that I got was just, we decided to go ahead with a flag. We're not talking about this anymore, which if there are problems with my proposal, that's totally fair, but it would be nice to sort of get a concrete explanation of why we can't find any other way without adding a new v flag.

MB: To your point that we don't want to add too many flags: I absolutely agree with this, and I think that for this even applies to ECMAScript features and proposals in general, not just to regular expression flags. As for your question, specifically about, do we really need the flag. There's [an item in our FAQ in the readme of the proposal](https://github.com/tc39/proposal-regexp-set-notation#is-the-new-syntax-backwards-compatible-do-we-need-another-regular-expression-flag) that answers this. The different options we consider 2. And in fact, when this proposal first started, we were trying very hard to avoid the need for a new flag. So the four options we considered were 1) a new flag outside of the regular expression itself 2) a modifier inside of the expression like some other regular expression engines support, 3) a prefix, like `\UnicodeSet{…}` — something that would not be valid under the current `u` flag 4) and then we also considered a prefix like parens, question mark square, brackets — something that is not valid in existing patterns *regardless of flags*. We found that a new flag is the simplest, most user-friendly, and syntactically and semantically cleanest way to indicate the new character class syntax.

IID: Yeah, so the, the explanation that I see for why not use backslash p or something like a prefix like backslash u that is not valid under the current flag is essentially we would have to use. It could be confusing if you forget to add the u, when you are using this feature, but I think that's already true for all new syntax, and I don't find that compelling and more of that and that we would have to enclose it in curly braces to be consistent, instead of Square braces, and that looks weird for character classes. And I think these are valid concerns. My question is once we realise that we would have to add a new flag. To avoid those. Did we reconsider whether those are actually? as bad as adding a new flag and splitting up the modes even more because it seems that adding a flag is worse to my mind than having slightly less square bracket notation. So, if it didn't have a new flag, we would have introduce a whole new synta that looks very alien for doing character classes with set notation. And set operators and stuff like that. And because we want something that looks reasonably familiar and largely works like before we settled a year ago in this meeting on basically going forward with a new flag.

MWS: It also lets us do some other things. And the one major thing that we're doing is to fix a problem with the IgnoreCase handling, which we had to address anyway, because with nested character classes you have to say something about how the complement works because you no longer have just a top-level complement with the top level circumflex. We then also in August proposed further things to basically say, OK, we have this new flag, that comes at some cost and now let's see what other things make sense to sort of fix at same time and that included things like changing the \d and \w. And those additional things that we presented in August were basically voted down in the meeting. And we have then dropped proposing them. So we did think over the summer, what else might make sense where we have the opportunity of the new flag? We didn't end up getting approval for those, but it's still fairly significant in how the character classes change, are parsed and lexed, and how they behave. And I think it would be very awkward if we wanted to achieve the same things with totally different syntax in the u mode.

WH: Yeah, we spent the last year on this, the `v` flag is the flag to turn on the new set notation syntax. It's needed because otherwise you couldn't use this kind of syntax without breaking the web. And it's also needed to fix the problem with the case insensitive matching which would not work with this proposal without the fix.

IID: To be clear. I'm aware of the need. Yes. I understand all of the things that you just said. My concern is - and I'm getting the sense that we have a consensus other than me, so I will stop after this. I just want to make sure that we do not a v flag too quickly and wish that we've added other things to it afterwards. And so anything that we could do to separate the syntax of set notation from the syntax of a new Unicode mode would help us from ending up in the same situation later where we notice additional warts and would like to fix them, but cannot do that backwards compatible without adding additional flight complexity. It sounds like we've looked at this so and I don't have any concrete examples of what those warts would be. So I'm going to drop the issue.

WH: I hold the position quite strongly that this flag just changes the syntax of character and string sets. This is not a general “Let's fix everything about Unicode” flag. Having the flag produce additional consequences other than changing the syntax and fixing the case insensitive behavior which is needed for the syntax would be counterproductive.

RPR: Three minutes left on the time box.

MB: Yeah, thanks for this discussion. I would like to move on to our last slide, which was supposed to be the most important — because what we were hoping to communicate is that we believe the proposal is now ready for the official stage 3 reviews. We already had designated stage three reviewers: MS, RGN, WH, we know you've already been working with us on reviewing earlier drafts of our spec text. But at this point, we believe It is ready for a proper stage three review. So we look forward to hearing your feedback so that we can address it and hopefully get some LGTM. So we can in a future meeting, maybe the next meeting, ask for stage 3. We're not asking for Stage 3 today, but we hope to do in the near future, with your help.

WH: I've been reviewing this, I'm happy with it. I have some minor nits but nothing which can’t be readily fixed.

MB: Thank you.

MWS: Thank you.

MED: So. So if we hear from Richard and Michael as well, then we're set to go. Yeah, I mean the girl from the end of your Revenue, There's a riddle are steps that outstanding when comments.

MB: Yeah, we will have some work to do on addressing the feedback. But yeah, once we go through all that and you get the official sign-off in the end, we can ask for Stage 3 at a future TC39 meeting. And that's it.

MS: What's your time frame for having reviews done?

MB: Before the next meeting if possible at all would be really nice. The sooner the better as always. If any of the reviewers have time constraints, please let us know so we can plan accordingly.

MS: Okay.

YSV: yeah, so I wanted to mention our position (Mozilla) which is we won't formally block, but we aren't entirely convinced with the solution to add a new flag specifically. We are convinced by like generally, what's being done with the feature and all the work that you folks have done with this. I've been watching this for a while and it has been difficult. But with regards to the flag, we have our reservations and we hope that those won't be borne out. So, not blocking, just raising our concerns.

MB: I think that's it. Happy to move on. Thanks everyone.

### Conclusion/Resolution

- proposal is ready for stage 3 reviewers
- stated non-blocking concerns about the necessity of a new flag from Mozilla

## Array Grouping for Stage 3

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-array-grouping)
- [criteria](https://github.com/tc39/proposal-array-grouping/issues/19)

JRL: This is super easy because there are essentially no changes. We reached the stage 3 criteria since the last meeting for Array `groupBy` and `groupByMap`. We have spec text. That's been pushed out, reviewers have all approved and editors have all approved - except one change that's currently in flight, but it's an editorial change to the methods.

JRL: The only discussion point which needs to be brought up is, JHD brought up a groupByMap naming issue. Essentially. He's equating flatMap meaning `map` followed by `flat` and if that would be confusing for people who see groupByMap as map followed by groupBy, or groupBy into a map output. I'm not super sold on it. I think it's okay to have groupByMap return a map. But that's the only discussion point we have - and then I can ask for stage 3.

JHD: Yeah, I just want to make sure we discussed this. So yeah, I mean it's a relatively minor issue. The polyfill that I already made would have to be renamed so this will cause friction for me to rename it anyway, but I still wanted to bring it up. The other thing is - it's kind of unfortunate, right? We have this naming conflict between mapping and a Map and it seems - I don't really have a better suggestion for the name, but it seems like not a great name for the groups, where the groups are Maps instead of Objects. Before stage 3 is the time to discuss it. So I wanted to bring it up before the advancement.

YSV: So, I do see you're saying, Jordan. So actually, when I initially read groupByMap, I thought we were grouping by a mapped key. So, I do, see what you're saying there. The suggestion I can make is that we can also take this to an issue and give conditional acceptance to this. We could rename both of these because groupBy and groupByMap work. Well together we can have `groupToMap`, which indicates the direction. What kind of object it might return: it's not very pretty, but it could also be grouped to objects and group to map. That's not very pretty, but those are two suggestions.

KG: Yeah, this is partially a response to Yulia. I am very strongly in favour of keeping the groupBy naming because this is not something we are inventing. It's something which is present in many languages and libraries for Javascript and it is always without exception called `groupBy`. I would like to ensure we keep the main thing called groupBy. That said, if we are looking for other names for the Map version, `groupByToMap` is only a tiny bit longer and is more explicit. So I'd like to throw that out there.

JRL: Yeah, I'd like to second that having groupBy be the name of the base thing that returns an object matches the ecosystem precedent, which I think is a valuable thing to keep. If we modify just the Map variant to have a more clear name, I'm happy with whatever suggestions we want to discuss.

MM: Yeah, so I just want to mention that the thing that's well known as map/reduce is actually doing a map in the sense of .map and then a groupBy and then a reduce. Which is part of why we know that groupBy is such an awesome primitive. So that is a source of confusion that makes groupByMap especially prone to being confused. I also agree that groupBy is a phrase that needs to stay together as a phrase `groupByToMap` or `groupByAsMap`, I think `asMap` is clearer than `toMap`. But other than that, I don't have a killer suggestion. And I'm in favor of this advancing under some name that I hope we can settle right now.

KG: +1 to advancing

PFC: Another +1 in support of advancing.

JRL: So I think there is a desire to rename `groupByMap`. Personally, just from the ones we've discussed so far, I like `groupByIntoMap`. It may be too much preposition so `groupByToMap` or `groupByAsMaps` are also Okay. Can we just do a temperature check, and then I will change the spec?

RPR: Do you want me to enable temperature checking in tcq? You have to designate emojis for what they mean.

JRL: Okay, so we can have ❤️ = groupByIntoMap, 👀 = `groupByToMap`, ❓= groupByAsMap.

RPR: Okay, please please vote as you wish. I'll say we've only got two more minutes on the time box. So we're close to timing out at least on resolving that, you know, the particular choice named

JRL: Kevin is saying `"toX"` precedent from `"toString"`, `"toNumber"`. so, if we think of `groupByToMap` as being a conversion from a groupings array into a map.

[results: ❤️ = `groupByIntoMap` = 3, 👀 = `groupByToMap` = 16, ❓= `groupByAsMap` = 3 ]

JRL: Okay, just reading the temperature check. It looks like there's a strong favoring for a `groupByToMap`.

JPB: Yeah, I was just responding to KG saying `toMap` that it's not necessarily going from an object to a Map. It’s using a Map, which gives you more properties.

KG: Well, sorry, I didn't mean to imply it's going from an object to a Map. It's going from an array to a Map via groupBy.

RBP: We've got one more minute. You could ask for stage 3 now with resolving this afterwards.

JRL: I think there's a good amount of people saying `groupByToMap` is a good choice here. So I think tentatively we could say that we're going to change it to `groupByToMap`. I can make the spec change and then ask really quickly as a follow up later today. If I can go to stage 3 with that change.

KG: I'm not sure you need to even ask again; we know what the change is. I would be in support of saying, stage 3 for this proposal now with `groupByToMap` being the only change.

JRL: That works for me as well. So I'm going to change to `groupByToMap` and then I'm asking formally for stage 3.

MM: I support.

YSV: I support.

RPR: So, are there any objections?

RBN: So this is Ron, I do have one question on the queue before we consider advancement to stage 3, if that's fine. I'm not opposed to advancement. I'm just curious if you considered having `.group()` return some type of intermediate result. That might be iterable but then has its `toObject()` and `toMap()`.

JRL: That would be a large change from the ecosystem. I'm not sure I would want to pursue that.

RBN: All right, then, that's fine.

JRL: especially because some if groupBy worked by not return an object or a map directly, the key exposed in the iterable here would have to be the most generic thing, which would be the Map keys. So the key, if you were to toObject suddenly you that would go from the key into a property key in the return value. It seems a little strange to do.

RBN: Okay, Thank you.

RPR: Okay, so with that we have heard support from at least three people and we've not heard any objections. So just last call for any objections. Okay, then congratulations. You have stage 3.

JRL: Awesome. Thank you.

### Conclusion/Resolution

- Stage 3
- `groupByMap` renamed to `groupByToMap`

## ShadowRealms updates and potential normative changes

Presenter: Rick Waldron (RW)

- [proposal](https://github.com/tc39/proposal-shadowrealm)
- [slides](https://docs.google.com/presentation/d/12PM5c4_yUnqXHjvACh8HEN5oJwgei-0T0hX_hlqjfDU)

RW: Hello everybody. Shadow Realm stage 3 update. There's going to be one question to get consensus on. And another one is just an idea that we are working on, which we just share. That's it. Here we go.

RW: Current status: Salesforce is working in a partnership with Igalia to implement ShadowRealms in JSC. It's very cool, we use it for testing. The HTML integration work is in progress, which is an integral piece of this proposal’s work to gain Stage 4. Chengzhong Wu (@legendecas) is working on the V8 implementation and producing a bunch of new tests, which is also great. Test262 coverage started good and just got better. So I would say everything is in order there.

RW: So here is the question of the day that we do need an answer about: How should wrapped functions use target function’s name and length. Note that this is definitely a normative change, in that it is a spec fix where there is no spec now. What we propose is that the length gets set similarly to bound functions and that the name is copied from the target function, but not with any prefix, and is restricted to string values only. This is similar to bound functions, but without a prefix. The pull request #338 has the change in it. Hopefully folks have had a chance to take a peek at that. If you haven't I would love it if you did.

RW: Can we get consensus on the way we’d like to solve this? Are there any questions the I can answer?

RPR: No one is on the queue at the moment.

- [normative change](https://github.com/tc39/proposal-shadowrealm/pulls?q=is%3Aopen+is%3Apr+label%3A%22needs+consensus%22)

RW: neat. So I'll ask for consensus

MAH: +1

YSV: Yeah, I support this also.

RW: Great. Thanks folks. Getting it done.

RW: All right. So here's the other thing we're playing with. You know, SharedArrayBuffers are interesting in that when you share them with another agent you're not sharing any object identity, you're effectively sharing a memory pointer saying “start here, and it's going to be this long, and it's expected to be the same place that the original agent (the main agent or the main thread or whatever) started at”. So we got to thinking "well, values in there are in fact primitive values, which is what our shadow realms are limited to". And we began exploring sharing SABs across the shadow realm boundary, as it fits with the expectation of being limited to primitive values (as in: only primitive values can be passed through the SAB). It would require some special handling but no more radical than the special casing that we have for TypedArrays that differentiate between the ArrayBuffer and SharedArrayBuffer. To be clear, this is just sharing, because again, it's important that this actually does hold up to the "is not an object with an identity across the boundary". It's just a place of memory. So we've been exploring this and decided to move forward with a proposal after we shopped it around to a couple of different implementers. But I remind you: this is not being proposed as a change for the current Stage 3 spec. This is a thing we think that we want to pursue as a follow up and believe that it's fairly straightforward. We've talked about it at our SES strategy meetings and there are a few different proposed approaches. But there's no real crunch to get approval on this. Basically what we're looking for today is whether or not there's hard opposition to exploring this (though I don't think I've ever actually experienced anything in this group akin to hard opposition to exploration). So I'd be surprised if somebody stood up and said “I absolutely outright reject this”. And like I said, I'm not asking for anything that would have to have any impact on the current stage three spec. This would be something you could imagine for the future, maybe we target 2023-4.

MM: This is more just clarification rather than comparing the passing of a SharedArrayBuffer to the passing of a primitive. I don't think that's a good comparison because a SharedArrayBuffer creates a communications channel for communicating primitives.

RW: That's actually what I thought I was explaining, Mark. Thank you for clarifying that, and I apologise for not communicating that more clearly. So in that sense passing the SAB is like passing a function, where you're creating a conduit. It's just another conduit for piping primitive values back and forth. Thank you, Mark.

RPR: You have more queue if you'd like.

RW: Yeah of course.

SYG: I think one of your slides answered my questions here. So one is the use case: you think this might be more performant than calling a function.

RW: Yes, because being able to do Atomic operations into the shared buffer, or just to be able to write to the buffer on either side and have it immediately available on our side without a function call, we assume will be much faster, but that is speculative.

SYG: And this is even though this use case that you're currently thinking of for shared array buffers is all synchronous, you are still planning to tie it to the existing restrictions like COOP and COEP that makes SABs available? Say the, the tied to the restrictions that you got real quiet, the web platform added these restrictions on when you can use shared array buffers, correct?

RW: Yes, we expect alignment with those restrictions. Think of it this way: wherever you would be allowed to use a shared array buffer on the web based on whatever restrictions are in place for the web, would still be applied here as well.

MM: Please say what COOP / COEP is.

SYG: I forget what they exactly stand for. It's like cross-origin opener policy and cross-origin, something policy and better policy there. These server headers that the server must be explicitly set as a signal signal content that I am, you know, I'm opting into this high-resolution timer and shared memory stuff.

RW: ANd that's for the purpose of security.

SYG: Exactly, for Spectre. So this gives Shadow Realms a new capability - unless I mean, I guess pending HTML integration being worked out. There's really no way for ShadowRealm to be intertwined with another worker thread, which this would allow you to: you can share a shared array buffer with the shadow realm, then share the same shared array buffer with the worker. Is that a use case that you want? That would be something that's enabled. But that seems to require more careful thinking, through.

RW: Yeah. We just assume that that would be available.

SYG: that sounds fine. I just wanted some very high-level clarification. That was actually a use case that you were interested. Okay. Thanks.

RBP: Rick. We're at the time box. All right, see if we could eat, you can either do another 2 minutes? Now, you can ask for a more time afterwards given that you've already started with.

RW: I can't see the queue. But I could answer whoever's on the Queue if it's pressing or if the folks on the think that whatever their questions are could be handled off, I would be open to doing that, to you just to keep you all schedule.

RBP: Okay, let's assume that we're going to wrap up now and Mathieu is on the Queue saying we want to explore the problem space of transmitting objects between Shadow Realms, not convinced an implicit approach as currently formulated is the right way.

MAH:I just wanted to say that I'm completely in favor of exploring that problem space. I'm not convinced with the current approach, but I'm in favor of further exploration.

RW: Cool. Thank you. Plot twist. I actually already knew that was his position. Now you all know that too.

RW: Everything is on track as far as we’re concerned, in a positive direction towards Stage 4. And I don't want to take another moment of time if I don't need to. That's it. We did get that consensus on that change. That's really what we came for and I appreciate your time and the audience. Thanks everybody.

### Conclusion/Resolution

- wrapped functions to use the target function's name/length as in <https://github.com/tc39/proposal-shadowrealm/pull/339>
- future exploration of sharing SABs to continue

## Unblocking tc39/ecma262#2515 and other RegExp Unicode update PRs

Presenter: Michael Ficarra (MF)

- [PR](https://github.com/tc39/ecma262/pull/2515)
- [slides](https://docs.google.com/presentation/d/1oSusFTu_VJtB-nKc7eF7HDlWeeUVgyi-K7BfB8NVRb0/edit)

MF: As background, we have some tables in the spec that contain Unicode data. We have tables 60 and 69, which are Unicode property names And then we have tables 70 and 71 which are values that can be used for the properties in table 68. Table 69 properties are all boolean valued. And why do we have these tables? Why don't we just normatively refer to Unicode for tables 68 and 69? We may want to exclude some of the property names. We may not want to have them for some reason, so it's reasonable to include those tables because it's possibly a subset of the available properties.

MF: okay, so we understand why 68 and 69 are there because we might want them to be a subset of the available property names. Why are 70 and 71 there? We do want to automatically pull in new property values and aliases. There's no reason anybody would object to having those. The reason why they're there is that Unicode does not provide canonical spelling for these values. Instead, they recommended doing loose matching of both the names and the values. Loose matching is where you ignore casing, whitespace, hyphens, and underscores, but TC39 previously decided not to do loose matching. So we require canonical spelling. So these tables are there just to give the canonical spelling for these property values.

MF: So we have a pull request #2515, which updates tables 70 and 71 with data from the new Unicode version and editors weren't 100% sure how to proceed here. Do we require consensus on this kind of thing? What choices do we make in spelling if that's the case? So I have a few options for ways forward. I think these are all the options for ways forward. So I'm going to go through them. Feel free to ask questions and then I'd like to choose from one of these. I don't think there are any other options, but if you have other ideas, I'm also open to hear that.

MF: These are not in preference order or anything like that. Option 1 is to approve this PR via consensus and continue to require that all PRs that modify these tables also get consensus. Option 2 is to allow loose matching of Unicode property values and possibly also, the property names to be consistent. This would go against a previous decision from the committee. I'm not sure what the rationale was in that previous decision, but that would then allow us to remove tables 70 and 71 and normatively reference Unicode. Option 3: defer the spelling of property values to the spelling that's used in the Unicode spec even though the unicode spec explicitly says it's non-canonical and it's actually not entirely consistent within the Unicode spec. Sometimes when there are many references to the same value, some of them are spelled differently. Probably not a great option here. We'd have to have some way to canonicalize those values, anyway, but this would allow us to remove table 70 and 71. Option 4: ask the Unicode Consortium to canonicalize spellings for property values and also possibly property names. This would also allow us to remove tables 70 and 71. I think that this is my preferred option. Option 5: the editors can make changes to these tables as the unicode spec is updated using spelling, derived from unicode. We have to find some way to canonicalize but then we don't require consensus for these PRs. And that's all the slides I have. So any feedback here?

KG: So is MB here? Because I know he has opinions.

YSV: So we don't have a strong opinion here at all. 5 seems pretty safe. If we can get 4, that would be cool. But keeping the tables around and continuing, as we have been doing, without requiring consensus is probably fine as long as it's following the set convention. So that's our position

MF: Yeah, I don't believe that there is an established, or at least not a written convention for our spellings. I think it's just been whatever MB has used when he has sent PRs to update these tables for us. It would be nice if we did go with an option like number five, we will have to, at least for ourselves and our own process, define the convention we use.

YSV: I think that would probably be a good requirement to have for number five, if we go that route.

KG: MB has stated that the way he has picked spellings was that it was the first spelling that's used in the Unicode data files. It wasn't just arbitrary.

MF: Is there any desire to revisit the loose matching discussion? Or is there any strong opposition to that? So we can just write that option off completely right now?

KG: I am opposed to revisiting.

MS: Same with me.

JHD: +1

JSC: Looking at the footnote for property names and values not being spelled consistently in the Unicode standard upstream. Is the plan to submit errata to the Consortium about this asking for them to tighten spellings in the UCD or whatever?

MF: I don't think that that particular route would be so successful. Option 4 would be for asking the names to be specified by Unicode.

JSC: Oh, I totally missed option 4. Okay.

FYT: I tried to locate MED since he is the president of the Unicode Consortium and just was with us before the lunch. I cannot find him now.

JSC: What JHD is bringing up, is a good point. Option 4 isn't mutually exclusive with any of the other options, either. It can be pursued in parallel.

MS: So, in the agenda, both Mathias and Markus said that they will be available through 1:00 p.m. Today they would like to be present for this discussion, but no worries if not. So that's why they're not here. They're not available. It's 10 pm in Germany, where I think they are. Okay.

KG: Well, let me try to repeat MB’s position from discussions that we have had. He believes that option 5 is what we already have consensus on. Even though that is not accurately recorded anywhere. He wanted to say that he would like to continue with that option. I believe I am representing him correctly.

JSC: Just real quickly, and Jordan mentioned this too. Is option 4 mutually exclusive with option 5 or the other options? It can be pursued in parallel, submitting errata or engaging with the Consortium and with Mark Davis.

MF: That's right. We could strive for option 4 and take option 5 in the meantime.

JHD: Why don't we do that? Because then that wastes the least plenary time, does what our resident Unicode expert already thinks we agreed to and still also pursues the thing where we can delete a bunch of unnecessary data from the spec eventually. So, 5 and 4 at the same time is essentially what I'm endorsing.

MF: Do we have any volunteers for representing this at the Unicode Consortium? My organization is not a member. I know that we have some people here who do attend Unicode meetings. If we don't have a volunteer for that, I don't think I would be able to pursue number 4, so we would just end up going with number 5 until somebody would take up the torch

JSC: Could be worth opening an issue about that on the standard repo.

SFC: I sometimes attend the Unicode standard meetings. I need to spend a little bit more time to get myself up to speed again on what you're presenting here, but I can follow up offline to see if option 4 is feasible.

MF: Thank you SFC. Yes, feel free to get in contact with me and I'll help walk you through the issue.

MF: Okay, so any objections for option 5 for now, pursuing option 4 in parallel?

YSV: The only concern I have is that we write down how we choose the name. It can be what MB has been doing, just so that we understand where those decisions are coming from then we can pursue number 4 in parallel. I think that would be a good solution

MF: Agreed. And I've been trying to figure out where we want to document these kinds of things for kind of editorial process or editorial decisions, which don't directly go into spec. I think I may try to use the wiki on the ecma262 repo for that for now. We'll see how that goes. Unless the chairs have other opinions.

YSV: I do have a thought about this, but how about I sync up with you offline about places where we can record this kind of stuff, because it sounds like something that could go into rationale which has been on ice for a long time. So, the wiki makes sense. But yeah.

MF: Happy to do that. And we have some other related topics that would benefit from that too.

RGN: My preference actually would be to include it in the spec, to assist anyone who happens to be reading that section.

MF: I'd be open to it. I think we should probably bring that up at an editor call too.

MF: Okay. Well, it sounds like there's no opposition. So, we'll go with option 5 for now, and with SFC's help we'll pursue option 4. Thank you everyone.

### Conclusion/Resolution

- Consensus that we will document the strategy by which we name them, and pursue options 5 and 4 in parallel.

## Extend timeZoneName option for stage 4

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-extend-timezonename)
- [slides](https://docs.google.com/presentation/d/1VGz9AlDRqITk3MiKmacgibMSBCo8qN3LZs4BeqNDQsI)

FYT: Thank you for coming. My name is Frank can and today I will talk about several proposal and the first one, go over a helpful Kim. Get through quickly. And this is extend time zone name an option proposal was stage 4. So the proposal is M to enhance the Intl.DateFormat object which increases for think since the One of electing for through 2012 and to provide a little bit more, formatting options and And it is basically adding four new values for the timeZoneName option. And here's a sample code of what they will change the back and adding a little bit more option and allow the implementation to have different kind of return. I will not go over all the motivation or so on. So forth. which we already discussed. You can look at some precedents set back in the previous stage about that.

FYT: So history, we proposed this in stage 1 in January, and the stage 2 in the April and stage 3 in May which is pretty quick, because this is a very small proposal. The Firefox browser already shipped it in 91. Chromium launched it in the V8 in 95 and Safari which are available. Have a little bit of a problem to understand how to track the version, but their technical preview version 132 already have that in September 2021. JSC has it and the test 262 also have a feature flag. have some test there. So that's a little bit of history of that.

FYT: So, when we look at what need to be done for stage 4 it says the purpose is the feature is ready for inclusion in the formal ecmascript standard. And in the very important aspect qualities have to be final and quite (?) is that we need to have test262. And as I mentioned repeating town with a feature flag there and then also have two compatible implementation which pass conformance tests. So we actually have three. Also important things that we should have a PR ready for ecma402. USA gave a clear sign off there, but I haven't heard from RGN. He said he was looking at it, maybe there's no feedback, but it's, we believe this is already being down. And I think I've talked to that in the TG to meeting in December 2nd, and I don't see we received no opposition over that. So I'm here to ask for stage 4; but before that, any questions or feedback

BT: Looks like the queue is empty.

FYT: Okay, if so, then I'd like to request the committee to approval for advancement to stage 4, so we can merge that into the 2022 version of ecma402.

BT: If you have stage four concerns, please raise them now.

BT: All right. I'm not hearing any concerns. We have any explicit approvals? It's always good to share those as well.

YSV: We support this moving forward.

BT: Thumbs up and pretty as well, +1s. All right. Thank you. Got your stage 4: congratulations.

### Conclusion/Resolution

- Consensus for stage 4

## Intl.DisplayNames v2 option for stage 4

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/intl-displaynames-v2)
- [slides](https://docs.google.com/presentation/d/1bvfdKBVNRUH7J18WGnxR02CKZJ_z3QThp3fLWdMqmzE)

FYT: So, in this particular proposal, we will try to extend the Intl displayName proposal which pre-exists and we try to get the human translation for the common display name to the developer so they can reduce their payload, whenever they don't need to.

FYT: So their proposal, they actually have several changes on the course, from stage 2, they will remove some of the original proposed icon(?) after we listen to the feedback. Namely I think time zone got removed, but currently what survived in this proposal and go to safety before reaching stage 3 is to have a language display option to have a "dialect" or "standard" mode for what kind of Think about prior for the languor display. and it will also add two new type of `calendar` and `dateTimeField` to display name. So here are some examples of what may be returned depending on the Locale data. You have the dialect mode. If you have `en-gb` it will return British English and but you be understandable or return English. Primacy United Kingdom and in usage They prefer the right hand side way because they will make sorting or in a man who was on you. I look a little bit prettier or not aligned easier to find so and so far. So this is one of the most requested features we added. The other ones returned the (?) and for the name of the calendar with type `calendar`. So for example, here are some examples showing English and simplified Chinese. I believed on the right hand side the name of the calendar. Also `dateTimeField` which returned the field of the calendar of the encounter, the date-time (?), right? Like the Nano, what kind of string should be represented of the era or us that year? Not talking about a particular year, but the label for that particular term.

FYT: So that is the proposal. Again, here's the history. It was moved from Stage 0 to 1 in September last year, so it's about 16 months ago and advanced to stay 2 early this year and inMay advanced to State 3. So after stage 3, Firefox launched in 91 and Chrome launched in October in 95. And again, the same thing, Safari technical preview launched in 132, so have three. Will have three different browser implementation shipping in some form. We also have test262 features, and the tests are there and MDN has documentation publicly available to the web developer to use.

FYT: So, again, by looking at the state 4 acceptance criteria, we would like to pass to move it to stage 4 so we can incorporate it into the next version of 402. And looking at the checklist, we also have the pr and all the different things there. And there are some minor tweaks. I think I forgot whether it's this one or the last one, and we treat those things whenever we try to merge with the current. Because I think there's some minor syntax population changes. I think we did that and maybe there's still some editorial minor stuff that the basic (?) work there. Same thing on. Asking for stage 4 advancement. Or any question I can answer or issue or concern?

BT: All right, any explicit approval or concerns? Now it's time to raise it.

PFC: I support this one, but I'd also like to encourage a future revision of this that does have time zone names in it. You mentioned that they were removed during the course of this proposal, but people asking for time zone display names is something that we hear fairly often from people trying out Temporal, and I was responding to another comment on GitHub that asked for that just yesterday. So that reminded me of that.

FYT: So I can comment about that thing. The issue is the whenever you need to get timezone names, you have to have additional information. In particular, whether is in daylight saving time or not, or you are using eyes on them regardless, whether you're using DST or not, right. And I think that time, that was the reason we removed it. The other thing is I think it would depend on how that interacts with Temporal. I think. So that time we actually were sad to have to remove it, but it is probably the right thing to do at that moment because it's more complicated. So we're kind of waiting - one of the reasons that we're waiting for Temporal to resolve some of the issues before we can actually tackle that thing.

BT: Queue looks empty.

FYT: So I like to formally ask for stage 4 consensus.

BT: We've heard some support. Haven't heard any objections. [no objections raised] All right, sounds like stage 4 again.

### Conclusion/Resolution

- Consensus for stage 4

## Intl Enumeration API Update in Stage 3

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-enumeration)
- [slides](https://docs.google.com/presentation/d/1wR8Yg3JVwa1RAPgQGqUPsRtP0EeMXy_Q8zqgRIKRiQI)

FYT: This is a proposal that is already in stage 3, but I'm not asking for stage 4 now. I just want to give you an update and hopefully I can go through it quickly. This one is the intl enumeration API. So basically, we're trying to allow the developer to see by calling API to figure out what kind of thing is supported in the implementation. So it's easier for them to do the feature checking in whether the feature is available or not. And therefore they can get that information to load additional polyfill or install and so forth. All right, so they have made a decision by that.

FYT: So it currently allows tolist six different kind of information, what calendars available collation available. currency remained. Available number system, available time zone and unit. Two of them actually already existed in the standard, but the other four is we need to have a way to discover that, by doing this.

FYT: so, basically provide one method we think of when I first proposed they're much more complicated and later on figured out we can just using one method to reduce the API service is a local Intl supported values of. with key to currently have six different kind of keys and they return an array.

FYT: And history. So that is advanced to stage 1 in June 2020, and advanced to stage 2 in September last year. We gave update last year in November, and in July we advanced to stage 3, and you can see the slides and notes Here. So what kind of thing are we doing currently in stage three, and there's some changes and there's an open issue of giving discuss. So the first thing is coming from one of the greatest (?) person, is Andre from Mozilla, and we just honor him, and he's really good. One thing is asking us to make sure the calendar and the collation of a number of your system. The return values are automatically and originally when I write the text, it kind of assumes there will be always returned up. I think he's right. We should make it explicit to add it up. It's just adding the word canonical in three different places and not a very big change to spec text, but it's actually a normative, right? Because you didn't require that before. So it's a normative PR but the change in terms of the amount of size of spec text is very small. We still have a couple of open issues. We tried to figure it out, not all of them are really normative right. What issues say, well in the ecma 402 should we, you know, partially it's actually part of that. I could relate to this particular spec but, you know, predated this proposal. There are mentioned currency and calendars. I think one of the issues of whether we should we rewrite it a way that probably either through an editorial PR that centralizes all section, and also #35, is that when we try to make sure that whatever return voluntarily nomination is consistent with the data supported in the Intl object. That is the, how to say that that is the end. That is the goal. but how to express it in a way that in the standard that to ensure that does happen. I think that still have some discussion how should we phrase it in a way to mandate that although that was the intention, right? And seems like obvious thing, but how can we ensure that really in a way that we can check that the other issue? I think it also is mentioned by dries. Is that true little tricky thing. What does Really mean about whether a currency is supported because the spec the previous you can say, "well, if you request for currency code regardless, you know that currency code you have to format it". If you don't know that thing. You just using that code. So, in that sense it’s always supported. So regardless. The three characters, right? So, but our current way is that we've tried to return if we have not just the code, but they are some maybe some name associated with that when a using a long form or other form for what (?). So, there's issue. How can we phrase it in a way? That it really means what our original intent. So it may need some bbetter wording on that part. So there are still open issues or not controversial in your way, but they are. We have a way to resolve it. There is also the editorial PR #42. I forget what it is. You can look take a look at, it was an editorial PR.

FYT: so activity, V8 Stager in 95, which means behind a flag. You can see the flag there. I just got approval for shipping in 1999, which will be in public General available in March on the upon these two. I repeat here. Okay. Anyway, Mozilla is in the branch and 93. I'm not quite sure they're a bit or not. And again, I'm Safari technical preview 132 and we have test 262 task? It will be better if we have more testing, there may be is added and really hope people can help all the fields to. So, that is the update and any question and answer about this?

YSV: With regards to #35. That was something I raised a few meetings ago when you say "how do we test it?" Do you mean how do we test it within something like test262 or, how do we enforce it within the specification? Which one did you mean?

FYT: I think both.

YSV: Okay. Yeah, I think so. Probably the test262 folks would be able to answer the second question better, but for the question of how do we specified in the spec? What I was thinking just now is, I think we should - so we have this project which is "documenting invariants". It's been quiet for a little while. I'd like to get it moving again, the idea in documenting invariants is to write down the rationale for specific invariants. I would this issue number #35 as an invariant and write its rationale within the spec. That's my current thinking. I don't know what other people are thinking. And this is also a non controversial issue that would help prove out the invariants project.

FYT: It will be nice if you can comment that adding that reference that their face so I can follow up. They'll be really nice because I'm not that familiar with whatever you just mentioned. So you can give a pointer in issue #35. I will try to follow up with you.

YSV: Sure I can do that. I would be curious to hear from other folks who have been looking at the invariance project if this is an appropriate way to do it.

RGN: I believe it is.

MM: Yes, and I'm in favor of anything that starts the invariant effort going and this seems like a fine place to start.

YSV: Okay, great. Then I think that's one way we can resolve #35, and that'll get us started on the bigger task of recording our invariants.

SFC: So I just wanted to draw a comparison between this issue, 35, and the topic that MF was presenting a few topics ago about the Unicode specification updates, we have, where we have a specification, table and you know, I think that there's that basically like I think one solution here is to basically… if the Intl numeratio API or any other enumeration type API returns the list of tokens that the implementation supports, then that can give us flexibility to basically make a minimal table in the specification of like, what are the minimal keys are allowed to support and then the enumeration API return. All keys are supported and, you know, that's I think actually one of the motivating cases of the insulin numeration API is, is to be able to express that set. Because that said it is not always possible to be written in the specification documents. So, I just wanted to raise that parallel.

BT: All right. Thank you. And Yulia wants to clarify that she came in at number 34, not 35.
YSV:Yeah, sorry about the mistake.

BT: All right. Sounds like that's the end of the discussion. Okay, so I mean, only thing I ask is that please contribute to the field.

## Intl Locale Info Stage 3 Update

Presenter: Frank Yung-Fong Tang (FYT)

- [proposal](https://github.com/tc39/proposal-intl-locale-info)
- [slides](https://docs.google.com/presentation/d/1PZ0_WiE9PNInY2bgyHGJH0DbKd0PKL9RApXxVPKJjUY/edit#slide=id.g98718d9573_0_26)

FYT: So this is an update to the Intl locale info API, which is also already in stage 3. And again, I'm not asking for CH advancement here. Just try to give you an update. So, the motivation for this API is try to expose when you already have a Locale, right? You have a locale and we'll try to expose more data associated with that Locale and such as a week data, you know, which day is the first day in the weeks to come on the calendar, the general always runs thing. And when is the weekend, interestingly that actually is pretty thing. I learned so much from that, and what kind of hour cycle is used in that Locale? I think one thin Is that the measurement system is after (?). So we was thinking about that, but we decide to drop that far because there are some more work to be done with that. So this proposal was a proposal stage 1, September last year and advanced to stage 2 in January and stage 3 in April and I gave to update already here.

FYT: So, there are some changes after the October meeting. So first thing we discussed during the October meeting, whether there is some place we need to return information about the order. Should we specify a clear order in the spec or just let a be unordered or should we follow a certain order or so on and so forth. So I think SFC thinks, which I also agree, this is a meta issued for other proposals. He actually asking in October have a separate slot, talking about that as well, violence Violence, and the feedback we received 35, 36, 35 is whenever you could you should specify order, right? And so, we take that feedback coming back to this particular proposed. I think. So, our proposal will probably do similar thing, but for this proposal will make some changes based on that. Particular tea bag. So, one is that, when we specify that we can, I think we already mentioned that Last time we can is used to have `weekendStart`, `weekendEnd` and we changed it because in some places, particularly Burma, the weekend is Friday and Sunday, not Saturday, right? right? So now return an array with integer denoting 1-7. But which one you return, first write the return 7 or 6 first, so we take that feedback. We specify the order in, I think, PR 60 so that will return the array in the ascending order.

FYT: And also I think another issue is, there are times, you may specify a Locale and the Locale may not have any time zone info, right? So for example a Locale is "English" without a specified region, right? There are no Locale is English could be anywhere, anywhere, right? So what do you do with it? So, we return - in past. I think we make a mistake. We say one or more time zone, but with the tags, that could be empty time zone or something. Region that we (?). Alright, so some of the region are specified. I forgot what it is. I'm supposed by region or something like that. So there's no time zone at all before I go because there is not that again for a particular physical location. So because of that. So for those cases now is what we're returning an empty array, right? if there are no way we can that thing.

FYT: So, there are some open issue. We still are discussing that. And which is in the past, all the Unicode all the Intl object. They have keyword the extension, And we explicitly listed for the Constructor, when we constructed the relative. Highs only a relative, a keyword have to be exposed listed. But in the past were all enlisted when in the Constructor, right? So when I were listed in a Constructor later on, all the (?) construct a table during the later on different operation, it is based on whatever God resolve all those extensions should perform. So in those now functions, we don't actually explicitly mention which keywords there. So in here at Andrea's mentions that we should explicitly mention the keyword, but it's little bit weird because the proposal here [crosstalk]

FYT: so then is, is that still require I think with discussed one point of time, say well, we shouldn't really need it. But there I think there's some more discussion after that so might need to revisit that issue. I think previously won't discuss that. I think I have some misunderstanding so we may need to discuss a little more about that.

FYT: Okay, so stage three activity, is staged in M92 in Chrome. But remember that is without the changes to the weekend stuff changes. There's a whatever the original security proposal. People change the weekend so late. I forgot exactly one later on. I modified that and to after we hit TC39 gave us consensus to That we can start end to the weekend. It was implemented, I'm not quite sure. I think that m97 or 98 got but we are going to ship it. And I with the latest back. Mozilla have the branch and I3, and Safari have been technical preview 132 and JSC also has that. So we have a test262 feature. Those tests are synchronized to our latest specs already. So there are things but definitely there are more tests to test. It probably was better. We have some coverage but it will be better if I have more coverage that MDN has documented it, but I'm not 100% sure that reflected to the weekend change.

FYT: So, like to thank all the people involved before I think and just helped us a lot And also SFC and ZB and USA helped a lot on this proposal. So this is just an update for that. So, request for TC39. Is to request approval of our change to number 60 and 61 both are a normative PR after state. So what are they? You can click it and see it. 60 is literally just Changing the text to say "in ascending order" for the weekend. So, specifying order that's a direct response to the feedback received last time. and 61 is defined the return value when there are no time zones are available and also adding canonical to make sure it is canonical. So the so the Above are intact about this generated. It doesn't really matter. That's the thing. Is your changes. Here is the timezone Locale that used to say one or more unique time zone. Now. It's a list of unique canonical time zone, management canonical, but also have to take out the link name before Linked In. I think the link now won't exist. You will now canonicalize it. And we also mentioned if no time zone is commonly used in region. on that list, be a new empty list.

FYT: So the changes adding order and also adding canonical and mentioning it could be an empty array. Any questions regarding this or any other comment?

BT: Queue is empty.

FYT: So can I formally ask for approval for this?

BT: Are there any concerns with merging 60 and 61? Speak now. Enter the queue. [silence] All right. I don't think there's any concern. I think you can go ahead and do that.

SFC: Hi Frank. I just wanted to make the committee aware of the issue regarding text direction that we brought up where the API only returns a very simplistic model of text direction. And I saw that we had closed that issue after some discussion. I support the conclusion of that issue, but I just wanted to make sure the committee is aware of this limitation in the proposal where text direction uses a simplistic model, consistent with what w3c is using. But I hope to see future extensions of this proposal that gives a more expressive model of text direction.

### Conclusion/Resolution

- #60 and #61 approved

## Array.fromAsync for Stage 2

Presenter: Joshua S. Choi (JSC)

- [proposal](https://github.com/tc39/proposal-array-from-async/)
- [slides](https://docs.google.com/presentation/d/1nEvxVJNya_-p2P0tCC8bofQ7-_eYef-b3FM9Dwd8Evw/)

JSC: This is a formal ask for stage 2 for a proposal. It's for `Array.fromAsync`. Syntax and semantics for this have been formally specified. If we reach consensus for stage 2, then I'd also like to designate stage 3 reviewers and a Target stage 3 meeting during this meeting.

JSC: You're all familiar with Array.from, it's a static method that you can dump an iterable into to make an array. fromAsync is an async version of this. You can dump async iterables like streams into arrays to flattening them, and I've run into this quite a bit when I just want to turn async iterable Into some flat data structure, or synchronous data structure. So I can actually examine it so I can debug it or so. I can test it. Especially during unit tests. It's fairly popular asked, multiple stack Overflow questions. There's a popular npm library where where people used it. The explainer has real-world examples from like ipfs from Adobe Etc. Usually it's either unit testing, or it's also for command-line interfaces or they want to print out or somehow separately process an async iterable.

JSC: So a couple specific things, it works. It's a generic Factory method. It's exactly like array.from in as many ways as possible except it returns a promise that results to a new array. You can you can feed an async iterable like here. Here, but it also, you can also feed it sync iterables too, and it will work As usual, It works like for right now, has its specified, It works like for/await. for await of accept not only async iterables, but also sync iterables that yield promises, and it works just like for-await like that. Values that are not promises are still awaited for one microtick. Consistently always awaiting yielded items and we're always returning promises. It also matches array.from in in one more somewhat uncommon, but still used edge case and that is non-iterable array-like objects. These are objects that have a length property as well as index elements. The return value is still a promise that will resolve to an array. And like for-await-of, each item from the array like object is awaited too. One representative expressed the opinion is that array likes are very much not Obsolete and it's very nice, that things are enforced to implement, the iterator protocol to be transformable to an array. So, from does this, I think will be quite surprising if array.fromAsync doesn't do this. Since it's ostensibly a superset of the functionality.

JSC: Array.async just like a radar from is a generic Factory method. It does not use symbol that species. What it does. Is it uses its this receiver to has a Constructor feeding it a zero argument and then it assigns elements to numeric properties. On that constructed object. So again, no symbol.species. We all want to kill species and Cetera.

JSC: optional parameters, just like array.from, there is a map function and there is this argument that gets fed to the map function. It matches array.from, it's consistent with it, it would be quite surprising it didn't have it like that too and there. And I think that they still may useful. Errors are always promised rejections. This just goes through all the cases that can happen. Basically it's always a promise that gets rejected.

JSC: Relationship with iterator helpers. So this was a little little thing from before where, because the iterator helpers has a toArray method. But at least one Champion seems to agree that we should have either both or that should prefer array.fromAsync. We already have array.from, in the language. That's a fait accompli. We should, I feel that we should match precedent set by the language and added to array itself and we can still have toArray and that's okay to, they can co-exist. But if we had to choose one, I would rather continue the precedent set by The language.

JSC: There was a question of whether to do stuff with other objects, too. I think there is room to talk about stuff like set.fromAsync or or object.fromEntries. We can talk about later in another proposal. Lastly, with the name. We chose.from me sync, rather than .sync from in order to match precedent set by other racing versions of Of methods into language and also in web platform APIs, this includes atomics and with GPU, the spec is Tiny, it fits on one slide. I am formally asking for stage 2 consensus after I drain the queue. First, Mark Miller is giving support for it. Thank you. Thank you. Dr. Miller. And next up is Yulia examples. Those are async from. Is that a library? If I used async, got a sync from, that's wrong. It should be from async. I messed up.Does that satisfy your topic?

YSV: Yep. I just wondering if the message halfway through but you clarified it after I posted the question.

SYG: Precedent question to committee about async versions: I think you covered that. That's my recollection as well that we decided to punt on other async versions. Are we? This is not a concern. I just want to raise the question that are we all comfortable with the pattern of “Let the ecosystem determine and let it trickle down to us which methods need async versions most badly” and then that. Or should we have a more uniform approach into just getting async versions of methods for new methods that we proposed.

JSC: I'm fine with now. My personal preference is async versions for all of these. I think Jordan said something to the effect that we should have added added like from.async in the first place when we add it a sync iterators. I feel the same way. I think that I mean, typed array. I don't know, but like setup ejected map. I do feel that they deserve async versions of but Did not want to bug down. This particular lightweight, tiny Proposal with that, but I do appreciate the wants for to at least discussing a holistic approach. So we could take up to we can take up time to right now during the plenary and we can also make an incubator meeting devoted to that too. From what I'm understanding from your question though. This would not block stage to from your perspective?

SYG: Correct. This is not, this is not even a concern. It's just a question to other members of the committee.

JSC: so I can ask people to Charter intubate or meaning about this about this one topic for the future. and we can talk about it, then.

SYG: Sounds good me.

YSV: Yeah, I wanted to say that this is also been on my mind. I'm wondering if this is - because like I would like to think about this with future methods in mind because this will set a precedent and we will likely follow that pattern if it is the pattern that we want to use especially if it's widespread, but I also think that we don't want to eagerly apply this pattern unless we have a use case. It's a little hard to tell the future, but I think we can discuss this in an incubator call and I would very much support that.

JSC: All right. right. Sounds good.

KG: Yeah, just I don't think we need to try to add async versions of everything. We generally try to just provide the primitives necessary to build programs and I would regard array.fromAsync as being primitive, but not most of the rest of the possible fromAsync methods. It's usually enough to have a version which is synchronous and then have other methods of composition like iterator helpers.

JSC: So what I think that Shu and Yulia had asked for is to, at least consider it holistically. And if we are going to reject eagerly adding async versions to all of these which I believe Yulia also supports then we can clearly. Specify that during that incubator call as a, as a as a path forward.

SYG: So I think clarify my position. It's not that I want to consider them holistically. I'm mostly interested in other's thoughts here. My personal opinion here is is it's fine to consider them separately and it's so long as we don't get into a pattern of many, many small proposals for each of these async versions, but I don't really have a strong opinion that we ought to consider these supposed to do. Yeah, so like, for instance, if gets to stage 4, I might consider set.fromAsync, Although I would not, I probably would not pursue map or object or typed array, but, we couldn't talk about that in the incubator call. I think that I think that there's room to talk about this and I think there's a general overall temperature that none of us want to add async versions eagerly to all of these and that we should consider it on a case-by-case basis, but perhaps, we should at least put that out there, at least for a little bit. It does that satisfy your topic?

KG: Yeah, I mean I was just responding to, Shu was asking for thoughts and those are my thoughts.

JSC: Sounds good.

MAH: Yeah. Similarly. I would want to not include anything entries related in this proposal has, it's not less clear. What should happen in those cases because you have both the key and value to deal with. So I'd like to keep the proposal simple and And not bog it down with a entries related things.

JSC: Yeah, so this proposal definitely is staying minimal with /, a only I guess whether to even think about entries in the future at all, ever will be a question for that entry plenary call, I guess as say it's more complicated than then something like that from async or a doctor. I'm async for to build up from the sync.

MM: So MAH already dealt with some of the differences of the entries from the non ventricles other than the issue than the clarification. Matthew offer are all four of these, like, array Dot from with regard to all of the issues that you went through. In the talk, your talk did a great job of going through all of the ways that the existing He viewer of a read.from in detail, sets a precedent from for the semantics of from async, do all of these other follow that precedent detail, aside from the fact that the the entries themselves have both keys and values. So that's a great question. Thank you.

JSC: One thing I want to mention right off the bat is that this slide actually has an error from what I recall there is no set up from a static method.

KG: There's also no Map fromEntries.

JSC: Yes. Yes, so that actually I forgot to update that. The question would be for this how to approach these things like dumping into async letter to always do it as narrate, first, or whatever.

KG: So, object fromEntries consumes an iterable. It does not accept an array like. Typed array from, I believe does consume an array like, though I'm not actually 100% certain there. And it's also relevant to consider the set and map Constructors because those are pretty similar,

MM: right problem with the constructors is you can't have multiple Constructors where the constructors differ a Constructor naming pattern,

KG: Anyway fromEntries certainly does not take an array-like I would think that only specifically, these two methods, the array from and array.fromAsync should take array-likes. The general precedent in the language is to work with the iterable protocol.

MM: Also Constructors cannot return a promise. So with all of these things raised, I'm completely on board with this proposal should only deal with the ray from but and I'm Glad we're thinking about the others. I think that it's something we could actually consider as part of that overall future consideration. Whether there should a set.from and set.fromAsync and a map, got from entries and mapped from entries eyesight. Not saying I'm in favor of that, but I think

JHD: There is a proposal for Set.from: <https://github.com/tc39/proposal-setmap-offrom>

JSC: Yes, there is a proposal for that.

JSC: I'm asking for Stage 2 consensus. Any blockers?

BT: We have a few explicit approvals and thumbs up.

JSC: I would like to request for a formal reviewer for Stage 3.

JHD: I'd be happy to be a reviewer.

NRO: I can review too.

### Conclusion/Resolution

- Stage 2!
- Stage 3 Reviewers: JHD, NRO

## Temporal Update

Presenter: Philip Chimento (PFC)

- [proposal](https://tc39.es/proposal-temporal/)
- [slides](http://ptomato.name/talks/tc39-2021-12/)

PFC: I'm going to give an update on Temporal as you've probably come to expect every time. My name is Phillip Chimento. I'm from Igalia. I'm doing this work in partnership with Bloomberg. This update will be similar to the update that JGT and I gave last time. We're going to ask for consensus on several minor normative changes. As usual I'm going to divide those into changes that actually affect the way that the proposal works, that were suggested by implementers, and I'll call those "adjustments." Then there's the second category "bugs": things that were always intended to work a certain way, but for whatever reason were not written that way in the proposal text. We had a pretty active discussion last time, but we don't actually have anything that we need input from the plenary to make a decision on this time, so it'll just be these fixes. The proposal is in stage 3, and for the time being we, as champions of the proposal, intend to continue gathering feedback from implementers and updating things that need to be changed as a result of that, and making presentations like this at each plenary as bandwidth allows. It seems like in the last three presentations I've given the number of normative PRs that I'm asking for a consensus on seems to be decreasing. So we would hope that means the proposal is converging on bug-free! Ha ha ha.

PFC: All right. I'll get down to the adjustments. The first adjustment that we made is a change to the representation of ISO 8601 strings that represent only time. So, it actually happened that on rereading ISO 8601, it turned out that strings that represent only a time may be prefixed with a “T” and we had not supported that yet. So this optional T prefix needs to be added in any case in order to conform to that standard. Another thing: the standard says is that the T is required where ambiguity with date representations is possible. On the next slide, I'll have a couple of examples of where that might happen. This, we originally did not support because the only place where you could pass one of these strings into a JavaScript API would have been Temporal.PlainTime.from, which given that you were passing it to a function that clearly expected a time, it wouldn't have been ambiguous. But since then we moved towards accepting strings in other places in the API, it made this a bit more ambiguous. So we are also making the T required in a couple of cases. Here are some examples of those cases. For example, the string consisting of `2021-12`, that could be the year 2021 and the month of December, or it could be a time with a UTC offset `20:21:00-12:00`, which is allowed by ISO 8601.

PFC: There's a couple more of these strings that can be confused with year-month representations or month-day representations. And so the idea is that now if you are doing a time that could be confused with those, then it requires a T in front. A lot of these ambiguities arise because ISO allows omitting the colon in a time representation, which they call the basic format, and the format with the colon is called extended format. My personal estimation is that we are going to see people using extended format much more often than will see them using basic format. So usually, this won't come up: because if you have colons in your time, then it's never ambiguous because dates don't have colons; they have dashes. The other thing is a date-only string being accepted in a time-only context. That is another instance where we thought that it would be ambiguous because you could say "Okay, a date only has a time component, defaulting to midnight", but we in the champions group figured that that was more likely to be a bug than somebody passing a date string to a time string because they wanted it to equal midnight. So that's also something that we are considering ambiguous and rejecting from APIs that take a time string.

PFC: Okay. On to a change, suggested by FYT, validating our time zones and calendar annotations in a more conformant way. We want a clear distinction between what is valid ISO syntax, and what is not. So, you can see this first string here `2021-13-32T99:99:99` is a syntactically invalid string. The string below it, `2021-12-14T10:00[Mars/Olympus_Mons]` is a valid string but with a time zone that is not currently defined by the the timezone database. That's a syntactically valid string, the name of the time zone is well-formed, it just doesn't exist. The time zone isn't known to Ecma 402, it could be because you're doing this in a browser that doesn't have that version of the time zone database yet, or it could be because there's a typo in the time zone name. But what we're concretely changing is that the second string is not going to be considered syntactically invalid. If you pass that to an API it will only throw if that API was expecting something with a valid time zone. So, this would be this would throw in a ZonedDateTime context and not throw in an Instant context because Temporal.Instant does not have a time zone.

PFC: All right. Those were the two adjustments. I'm going to move on to the bugs. The first bug I'm going to present, that we fixed, is a change to brand checks in TimeZone methods. There's a link to the pull request there. There were a few methods that were missing brand checks. This was not a simple case of 'oh, we just forgot'; this actually was intended to work this way at some point in the history of the proposal but way back in stage 2 we moved away from that but forgot to add these brand checks accordingly. Here's a little code sample of how this would be observable and therefore requires a normative change to the proposal. But this is an edge case. It only affects objects that are used as time zones that don't have the internal slots of a TimeZone object. So if you use this how we expect that most people will, by inheriting Temporal.TimeZone, if they're making a custom time zone, there won't be any change.

PFC: There was incorrect rounding in fractional Duration strings. The spec text said to floor where it should have said to trunc. There's a little code example here of what exactly changes: if you create a Duration from a string that has a non-integer number of hours or minutes, then you may see a different result.

PFC: Our grammar of ISO 8601 strings that we included in the proposal did not allow calendar annotations in some cases where it should have allowed calendar annotations: in PlainTime strings, PlainYearMonth strings, and PlainMonthDay strings. We now allow these.

PFC: Next bug we fixed is making the handling of `largestUnit` more consistent in PlainDate's difference methods. So, if you do date arithmetic and you pass a `smallestUnit` to round the value and you omit the `largestUnit` option, the default `largestUnit` should adapt to `smallestUnit`. That's how all of the other Temporal types work except for PlainDate, and that was an accident. So we made that consistent.

PFC: Another consistency bug that we fixed was to make `fractionalSecondDigits` in the `Temporal.Duration.prototype.toString()` method consistent with how `fractionalSecondDigits` works in Intl. In other Intl APIs it always displays no more and no less than that number of digits. That's not what Temporal.Duration previously did, but it's what we want it to do now.

PFC: Here's another fix to the grammar for ISO 8601 strings that we included in the proposal. There was an ambiguous production that we have now made not ambiguous.

PFC: You must be tired of seeing slides about the difference between modulo and remainder. I thought for sure that we'd eliminated all of these bugs that that confused these, but embarrassingly this is actually a revert of one of the bug fixes that I did earlier, where it was originally written correctly with modulo, I changed it to remainder, but I shouldn't have done that. It should have remained modulo. This changes it back to modulo. This affects creating Temporal.Instant and Temporal.ZonedDateTime from a negative number of nanoseconds since the Unix epoch.

PFC: The last one is a list of links to PRs that fix typos in the proposal that unfortunately happen to be normative. There are three of those this time.

PFC: That's the end of the pull requests that I'm presenting today. Happy to answer questions about any of them individually, or about the process that we're using to present these to the committee. And when that's done, I would like to ask for consensus on merging these normative PRs.

(queue is empty)

PFC: Could we move to officially asking for consensus on this?

BT: Any objections, these normative changes now would be a good time to raise them?

(silence)

BT: All right.

PFC: All right. Thanks very much everybody, and I guess I got my item in under the time.

### Conclusion/Resolution

- Got Consensus on normative changes

## Destructuring Private Fields

Presenter: Justin Ridgewell (JRL)

- [proposal](https://github.com/tc39/proposal-destructuring-private)
- [slides](https://docs.google.com/presentation/d/1GMAvGx5i8TikGqJZcZMnHeoPclD_ubCeNSCx5M1DTaI/edit?usp=sharing)

JRL: So when I initially presented this last meeting, I was asking for this to be a "needs consensus" PR. Thankfully, we decided not to do that because simple things can be super complicated in our specification.

JRL: First off, we have to talk about destructuring. Destructuring actually exists as two separate grammars in the specification. There's an assignment pattern, which is the left hand side of an assignment expression. So there's no concept of var binding here. It's just like `({ … } = obj)`. There's also a binding pattern: it is when you have a variable declaration. So Binding something new in the lexical scope and we're not assigning to an already created value. These are two separate grammars and they have two separate runtime and early error semantics. And, as a weird little side effect of our grammar, both of these need to conform to the object literal parsing grammar, which is also used for object expressions.
Object expression, assignment pattern, and binding pattern all parse as object literal initially. And then they are specialized into a particular grammar depending on the context. And it's a little strange. ObjectLiteral essentially has to be able to handle everything. It's a super loose grammar that accepts all forms of objects. And then once we figure out what the context we're parsing it into we add in special early error rules to forbid certain patterns. I've highlighted here demonstrate that certain things that are valid as destructures are not valid as object expressions and certain things that are valid as object expressions are not valid as destructuring. Depending on whether you're on the right hand or left hand side of the equal sign you have different early errors that need to apply. So first off, we have to expand the object literal syntax so that we can parse all forms of objects. Whether they're in a lhs, or if they're in an object expression. We also have to add in the binding pattern because I forgot about that and I only considered the assignment pattern, and we also have to extend the PropName syntax operation. All of these things have been added to the proposal specification text. I do have an open question that I don't know if I need to pass in the private environment into binding initialization, which is a sub-operation of the BindingPattern runtime semantics, but this I think can be hashed out in issues. Doesn't have to be discussed in here. It's just these are all the things that had to be added to what was initially a super simple proposal. At least, I thought it was simple. We currently have a slate of six reviewers, and because I incorrectly thought this was going to be simple, I told everyone that this would be a simple change and it would be easy for beginners to do. Because of all the new changes, I don't think it's a great first PR for someone to go through. So if we want to change reviewers for people who aren't comfortable yet. I don't feel offended or anything. So, I think we need to ask again, for who wants to review stage 2 so that I can bring this up for 2 stage advancement next meeting.

KG: I'm still happy to review.

JHD: Okay. Yeah,

SHG: Likewise even though I'm new, I think with a full group of reviewers. It's a really great place to work next to people and learn stuff. So I'm happy to keep working on it.

SRV: likewise (writing in the meeting chat)

JRL: Perfect. I have a sneaking suspicion Waldemar will continue to want to do this. Robin actually already reviewed it, but may need to re review it with new changes.

JRL: Okay, so I think everyone is good then we can keep the same slate reviewers. and so we can move into any open questions that might be in tcq.

MM: ahead. Yeah, this question is directed to anyone who can answer. I have Waldemar in particular in mind. So we adopted a cover-grammar approach in general, for specifying the grammar. But since what the spec does if you give the grammar for specification purposes, rather than a guide to implement the parser, I don't actually understand why we're doing the cover grammars, rather than grammars with unbounded lookahead that are still unambiguous. I think that the only thing the cover grammars save us from is having to do an unbounded look ahead before making a decision, and a specification grammar has no such constraint.

SYG: Is Waldemar here? Maybe he's already left for the evening.

MM: Okay, in any case it certainly does not need to block anything with regard to what you're raising. But if we could use this approach rather than using cover grammars. I think would in particular help simplify the issues that you're running into.

JRL: Okay, I think that would need to be made as a follow-on or a separate change, because it would affect a pretty large section of the specification in order to change.

KG: Can I just speak to this briefly? So with my editor hat on I agree cover grammars are kind of gross, but unbounded lookahead is also kind of gross.

MM: Why is unbound lookahead gross in specification?

KG: It's that it's hard to understand because you don't know what you're looking at. Like, if I'm trying to use a specification grammar and match it against some source text, and understand how the source text matches the grammar in the specification, it's just hard to do that.

MM: Okay, you and I should look at it more offline because I think exactly the opposite is true.

KG: OK, I should also say that I'm just reluctant to make changes unless they really are like radical simplifications just on the basis that this is already a pretty confusing part of specification and some people have managed to wrap their heads around the current form. And if we have a new and also confusing thing, people will have to learn that anew and that's a substantial cost.

MM: I agree that we should be very cautious about that and we should err on the side of conservatism.

YSV: I also have a question about this, but it's really a question to MM because I don't fully understand cover grammars. if it's all right.

MM: Sure.

YSV: So we have a project which automatically generates a parser from the existing grammar, if we change to something else with an infinite look ahead, but would that still be possible?

MM: No. Rather, there are parser generators that deal with unbounded lookahead. In particular packrat parsers do it while remaining linear which is quite a feat, but I would as a guide to implementers in general I would certainly not start with the grammar with unbounded lookahead, but I think If the grammar with unbounded lookahead is much easier to read as a specification. Then what I would want to know separately. Is that the cover grammar? I'm using to guide the implementation equivalent to the unbounded lookahead grammar.

YSV: Okay, because we do have this project which currently translates the specification grammar into a parser with the goal that this would help. First of all, speed up the generation like the writing of specifications into an implementation. They do not imagine that one could automatically derive a cover grammar from an unbound lookahead grammar.

MM: Okay. Yeah, we've been given both suspect one can prove that they're equivalent.

YSV: Okay. Okay, that's probably a conversation for later because this isn't a critical issue, but it is a nice feature of the current grammar that we have. That we can do this, and I don't think it's possible with the other one. So, that would be a drawback.

MM: agreed

SYG: I can respond quickly as well. I would be pretty reluctant to get rid of cover grammars until there is I a general agreement among folks who ship production parsers on, which correctness and interoperability depend, that there will be some effort that we can staff an effort to actually update those parsers to no longer refer either in comments or in actual architecture of how it's written to cover grammars. I would not want to state where the spec is arbitrary look ahead and all the production part series are still talking about cover grammars, and we just can't review stuff.

MM: So I agree with this point as well. Any kind of shift like this, the simplification would have to be quite significant in order to outweigh these objections, and I am not at all claiming at this point that it is, that would be I would need to read need to actually look at it and I don't don't have that now.

JRL: So, I think we can defer the cover grammar, discussion to another time. For as it relates to this proposal though I think we'll need to keep the cover grammar just because that's how it's currently written. I don't want to do a full-scale rewrite. That would be - it's a little too much for me to bite off for this. I think the only clarification that I need at the moment are the passing of the PrivateEnvironment to the BindingInitialization runtime semantics. I'm not asking for stage 3 here. Next meeting I'll ask for stage 3 formally. I'll ping everyone for reviews offline and then clarify this lingering spec question.

### Conclusion/Resolution

- Update Given

## RegExp \R Escape for Stage 2

Presenter: Ron Buckton (RBN)

- [proposal](https://github.com/tc39/proposal-regexp-r-escape)
- [slides](https://1drv.ms/p/s!AjgWTO11Fk-Tkfs10JNwTwfl2NrRqA?e=ij5ls6)

RBN: So, I brought this proposal to committee in the last meeting to add an escape sequence \R. It's a fairly common regular expression syntax. that's used across Perl and a number of other languages have been more in a moment. And the purpose of this is to match line terminator sequences. more, simply than the More expanded regular expression and catch possible mistakes that people will often make. The syntax specifically is a /R escape sequence. It's only valid in Unicode or the new unit code sets mode. It's not supported inside of a character class, but outside of the character class. It is represented by the regular expression. That's presented here. Essentially it matches carriage return line feed a combination of crlf or a number of other Line Terminator characters within the specification. This is designed to match the behavior for this pattern across the engines that are referenced in prior art. There are also a number of additional engines. They're not listed here that also support this. It also matches a recommendation for \R that is in one of the Unicode technical reports, and that essentially matches those characters. It covers slightly more than a the . in single-line mode or the ^/$ in multiline mode: those primarily look a least for the anchors. They look for specifically for any new line character at the beginning or end of a length of text, but do not the entire character. So, in the case of dollar, it might be looking for character LF, but it won't consume both CR and LF. Whereas this consumes both CR and LF. Currently, there is a specification text fully written for this. That's up on the proposal site. There is one open issue around whether or not a Unicode sequence property could be used that discussion, don't have a specific solution to that your answer for that yet. would say that there isn't currently a sequence property that represents this. It was mentioned on the Explorer on that issue. That the Unicode technical report that references this recommends, the use of a select our sequence to match this as opposed to a separate unicode property. So unless there is a specific preference from the committee to not use this in to try to push for a new Unicode property to match this within the unit code specification. I would propose that we stick with the \R escape.

RBN: so I put 15 minutes on here, but unless there's comments for the queue, it might actually take a much less. So I will open this up for comments, that give folks a minute to respond on the Queue if they have anything.

MF: So, I've stated my opinion on this in issue number three, I think that there is still room to explore this space. My preference would be that we reuse the -- I don't know if it's stage 3 or not -- the sequence properties feature that we're introducing with either an existing or a new property for line terminators. I don't think we're at a point yet where we can confidently move forward with \R knowing that this is another possible route.

RBN: I have a slight concern on that approach in that one of the values of \R is that there are a large number implementations across other engines in languages that support that character that may or may not support a additional sequence property or support sequence properties in general. So specifying a sequence property while it would achieve the primary goal of simplifying this Behavior. Well, simplifying in that you have to know what the that sequence property is to be able to use it successfully, which may possibly be as complex as remembering what all of the characters are that make up that sequence property. The second concern I had is given the number of implementation that support \R, it reduces the possible portability of this feature if you are specifying regular expressions that are used in sources that are not specifically JS. So if you are bringing in a regex that's part of, for example, a JSON configuration file or some other formats that needs to be portable across. Say a regexp that works in the browser as Validation pattern, assuming that, that is some at some point supported and supporting some type of server side rendering that produces regular expressions or uses the same source. So again, using a sequence property might be less portable than something like \R, which does have a fair amount of common support across multiple engines.

KG: Yeah, I don't think that is a good goal. I do not share the goal of making regular expressions portable across languages, like literally the source being usable in different contexts. I think there's going to be lots and lots of subtle differences. Not just in the set of syntax supported, but in the actual semantics, and I think it is bad to encourage developers to re use regexps across languages, especially those that have more subtle features like the more obscure \... sequences like this one, but also, you know, \d works differently or whatever, and, you know, does it parse by code points or code units? There's lots and lots of these subtle differences. So I very much do not think that it is a good idea to try to make regexps portable across languages and absent that motivation I don't see much reason not to pursue this as a property instead.

RBN: Well, I wouldn't necessarily say that I would target it as a goal. I do think that it is valuable to consider as well as not just for the portability of a regular expression, but also the portability of the knowledge of someone using regular expressions. You mentioned that there can be subtle inconsistencies. And one of the goals that I've had is, I've been doing research on these regular special features across engines is looking for things that Are consistent and presenting or attempting to present features that are valuable that are also consistent and commonly used and I'm somewhat reticent to if we were to try to propose something that has the same syntax, but wildly different, Semantics than another engine, especially one, that's commonly used. I would be wary that. I'm also a bit wary when we talk about avoid if you talk about avoiding portability, the fact that we specifically call out that At regular expressions are based on Perl 5 within the specification itself, a lot of these features are based on features that are currently in Pro regular Expressions as and supported across a number of people. a number of engines and languages. So being able to take that knowledge that you have from using with these common features and bring it to JavaScript and have it have the correct or having the expected interpretation, I think is Is this the cognitive burden of trying to use these features as opposed to us having to come up with a completely different mechanism for doing the same thing? Everyone else does it purely because we assume that our solution is better. And if I am perfectly fine with trying to find alternative syntax for cases, where we can't make the syntax work where there is no specific option, but I'm a bit wary from deviating from prior in cases, where there's I don't feel that there is a clear reason to deviate from prior art doing this adds requiring, this via Secrets property, adds more dependencies. Sequence properties reaching stage for it also has more dependencies and on getting something like this approved for. With in Unicode. It might be feasible to have that for that to occur. But the question is, do we want to take on all this additional burden to implement something with wildly different syntax when the the consensus within engines that have support for this the same essentially, essentially, the same implementation. And, and using the same syntax.

KG: The question of cognitive burden, I think, is the crucial one. I agree that for people who already know from other languages that \R in a regular expression means this particular set of strings that if they encounter it in JavaScript, they will know what it means, and if they need to write it, they can reach for that and not have to discover that they need to write another thing. On the other hand, if the same person read \p{Line_Terminator_sequence}, it would be fairly obvious what that matched. And for anyone who is not coming from another language, who is just familiar with JavaScript, having to learn \R as yet another special case is significantly more cognitive burden than just having to learn \p matches properties of strings and Terminator_Sequence is a property of strings. For someone not already familiar with this relatively obscure sequence from other languages it will be much clearer what \p{Line_Terminator_Sequence} means than \R.

RBN: I will also point out that there is a bit of a benefit that we would gain from / are not necessarily in searchability, but existing documentation from existing sites that already explained some of these features that already talked about how this Escape Works in other languages. What? Essentially then also apply to JavaScript. Meaning that a lot of the documentation for how this works is already out there, but good time.

MF: I think it's okay to be dependent on sequence properties. It's a very promising proposal with a lot of support. Also I don't think we're necessarily dependent on having Unicode change for this sequence property. We could have a special form that mimics a property name. But I'm also pretty confident that Unicode would add a sequence property for this anyway.

RBN: OK, since there appears to be some interest in considering the sequence property route I'll start looking into that. Okay.

### Conclusion/Resolution

- Not advancing at this time
- RBN to look into a sequence property instead
