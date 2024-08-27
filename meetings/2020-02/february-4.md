# February 4, 2020 Meeting Notes

-----

**In-person attendees:** Aki Braun (AKI), Andrew Paprocki (API), Rob Palmer (RPR), Waldemar Horwat (WH), Chip Morningstar (CM), Shane F Carr (SFC), Shu-yu Guo (SYG), Jordan Harband (JHD), Michael Saboff (MLS), Keith Miller (KM), Michael Ficarra (MF), Jonathan Keslin (JKN), Kevin Gibbons (KG), Andrew Paprocki (API), Richard Gibson (RGN), Justin Ridgewell (JRL), Zibi Braniecki (ZB), Myles Borins (MBS), Bradley Farias (BFS), Bradford C. Smith (BCS) Rick Button (RBU)

**Remote attendees:** Dan Ehrenberg (DE), Brian Terlson (BT), David Rudin (DRN), Jason Nutter (JAN), Ron Buckton (RBN), Pieter Ouwerkerk (POK), István Sebestyén (IS), Min Qi Wu(WMQ), Leo Balter (LEO), Valerie Young (VYG), Jack Works (JWK), Mathieu Hofman (MAH), John Hax (JHX), Caridy Patino (CP), Sergey Rubanov (SRV), Rajiv Batra (!!!), Yulia Startsev (YSV), Caio Lima (CLA)

## Housekeeping

### Adoption of the agenda

Adopted by consensus.

### Approval of minutes

Adopted by consensus.

### Next meeting

Cupertino, CA hosted by Apple. Will be at the Infinite Loop campus. Host requests that folks register via Doodle ASAP so Apple Security can review.

## Process changes to accommodate US members and US delegates

Presenter: Michael Ficarra (MF), Myles Borins (MBS)

- [Slides](https://docs.google.com/presentation/d/1Om59leOYIgGBbQtVRKpC4dnhljhGUD5cTSI1Q876PDQ/edit)

MBS: There has been a lot of discussion around export controls in ECMA. We’ve discussed with a number of councils and our suggestions are based on that, and this is not legal advice. One other thing is that while we are making a number of suggestions, these suggestions were made by enumerating over the spaces in which we collaborate. It does not mean that these need to land in the way we present them. But as we go through each of the items, we have clear reasons for why we are making these decisions.

MF: None of this is legal advice.

MF: We have a 2-part proposal. First, the goal of this proposal is to publish…

CM: What is the problem we're trying to solve?

MF: We are trying to make US delegates feel more comfortable.

MBS: The export control guidance as they were put out by the BIS (Bureau of Industry and Security, part of the US Department of Commerce) are ambiguous about how to collaborate. A member of ECMA is on the export control list. Counsel who have reviewed the guidelines have a variety of risk tolerance. The purpose of these proposals is for risk reductions for US delegates.

CM: No, I feel like there is some fundamental context I am missing or not understanding.

MBS: Have you seen the export control guidance against Huawei?

CM: So the issue is that a non-US ECMA member is sanctioned by the US government?

MBS: Yes.

MBS: One thing I would add to that, in conversation we’ve had as ECMA is a European organization, they are not subject to these guidelines in the same way that an American organization will be. It’s not talking about this company specifically, but this in general, so that it is not directed at any particular organization within ECMA.

MF: (presents slide "Proposal 1") Yeah, so the first proposal is to issue a communication on the committee's existing property of "being open".

MBS: ECMA itself is not concerned with TC39 operating openly. What we are trying to do is find cases where we can improve our existing properties of being open.

MF: We want to clarify what is an existing channel for communication in TC39. We’ve identified some private channels, the TC39 IRC channels, have logs published. All of the channels that are currently private, (#tc39-delegates), those should be changed to moderated, which would allow anyone to join, but only delegates can contribute. We would still log those channels. The discourse has a delegates forum, which we will need to make publicly visible. And the chairs will need to move technical discussions from the Reflector to a public repo.

MBS: This is specifically related to technical discussion. Things in the reflector, for example “where is the room”, there is no concern about that. Issues that are primarily administrative or non-technical do not need to be published. Any communications that are non technical can remain non-disclosed.

MF: The next step is to live-stream meetings? We should take detailed notes on whether we decide to do that or not.

MBS: Where all of this is coming from, is specifically the word public in the export control guidance. The word public is really ambiguous. It is really unclear what constitutes as public and what constitutes as private. This intends to minimize the amount of things that fall into that ambiguous territory.

MF: (presents slide "Proposal 2") For cases when it's not possible to make technical discussion public, we should have a plan in place. I know there are some discussions we've had that are sensitive, like embargoed or export-controlled topics. Sometimes these are time-sensitive. The proposal we have is to create a limited-membership TG. We can define what is in the scope of that TG for handling those scenarios.

MBS: One of the really good examples here is disclosure of security vulnerabilities. Enumerating these spaces can improve our process, independent of the situation we find ourselves in. Currently there is no way for someone to report a security vulnerability to the committee.In the NodeJS project, we have a lot of collaborators, but there are only 10 people that receive security vulnerability reports.

MF: (presents slide "Appendix: terms") We have some official guidance from the government on the terms, and we also have a working definition of "private".

BT: Invited our attorney that has been working on this issue, DRN.

DRN: Hi, I can help answer questions.

AKI: I’d like this to be more like the TC39 discourse forum where chairs/editors move content out of the private space to the public as needed.

MF: I think it serves the space for delegates to have technical contribution, that doesn’t need to be private, but doesn’t receive feedback from the public. Is there another place for this?

AKI: That's a really good point.

MF: That's the only reason I can see to have the delegates channel currently.

AKI: Yeah, to discuss things that don't really have a comments thread. I'm convinced.

MLS: You talked about taking reflector issues, and at some point the chair group will publish them in a public forum. Does publishing after the fact preclude discussion on them as part of what we are doing, or do we need to move all technical discussion into a public forum?

MBS: Not legal advice, but as long as we can make the assumption that we can keep having meetings in this structure, where we publish notes later, is probably good.

MLS: You are talking about live streaming meetings, which would be a significant change.

MBS: Perhaps that would be a good one to start discussion.

MLS: I would agree live streaming issues would subsume the issue I have.

API: Is ECMA even OK with proposal 2? It seems like it was put up there with “we are gonna ask them”.

MF: That has to be worked out, we have not discussed it with them yet.

IS: The limited membership task group would mean, I don’t think that is easily possible. ECMA has accepted members and currently there is no way to exclude them from technical work in the TC they are allowed to participate (Note: Not said in the meeting, but SPC and NFP members can per definition only participate in one TC. But if they selected e.g. TC39, then you can not say in a special TG of TC39 you can not participate). Some accepted members not being able to participate is not compatible with the current Ecma Bylaws and Rules. This is only my personal view. You should discuss it with the current management of ECMA.

MBS: If the limitation of the TG is that there was a limited number of participants, if it was just a subset of the group, maybe that would be okay. If no Huawei members participated in that TG, then it is okay, and if we accept the Huawei delegate by their own merits into the TG, then US delegates can choose not to participate.

IS: Limited membership task group is, a group of 5 people and no more? Is it something like that?

MBS: Yeah something like that.

IS: ??? (Note: I am not sure what I said under ???, but certainly I missed some supporting concrete explanation and contribution to understand what the real rational for proposal 2 was)

MBS: I think we are trying to be extra careful.

IS: The import control and export control belongs to certain government policies. It is not international. It is critical for an international organization to not put these policies into our charter. I'm okay with having the size of TGs be limited, where only the best experts would participate. But it should not have restrictions on membership from embargoed organizations. I have seen one concrete example of this type in my long standardization work, the solled “Okubo Group” in the ITU that defined in 1988-1992 the first modern video codec that became ITU-T H261. In order to have effective and speedy standardization each participating ITU State Member was allowed to send max. 2 experts in the group. So e.g. in Germany my company Siemens had no room among the two from our national Administration. But no Administration that wanted to participate in the work was refused.

MBS: If we removed export control, and clarified that security embargo means not disclosed publicly yet, that would alleviate your concerns correct?

IS: For me, this entire first bullet point (the first sub-bullet of item 1 on Proposal 2) does not make me comfortable.

AKI: Would you feel better if we came up with a specific framework for what this TG is responsible for and why? It seems you are concerned with the import/export control.

MBS: I think we gathered the correct feedback to adjust Proposal 2. I don't think more time to discuss Proposal 2 is a good use of time.

MF: The acceptance I’m looking for is not of any specific detail of this proposal, but instead that we should have a solution prepared for these scenarios.

IS: About the private IRC channels, I cannot say anything, you know much better than I know. We are, in TC39, rather open. ECMA as an organization is membership based, so anyone can be a member who qualifies for it. If they qualify, then they can become members. Depending on the topic, we are opening up our communication to the external world. TC39 is an excellent example of collaborating with the open source community, web standards, etc. My feeling is that in principle we do this. For public live-streaming the meeting, I don't know if that level of openness is necessary. Member organizations can join ECMA and get access to internal documents and the de-facto internal live-streaming of TC39 if they have registered in the TC39 RFTC.

AKI: Now that we’ve discussed the ECMA stance on proposal 2, why don’t we move on to the next item in the queue.

IS: If someone has undesired features, I won't keep my mouth shut. (Note: I am not sure if I said this and if so in what context?)

WH: I’m very uncomfortable with the idea of live streaming meetings. We can satisfy the requirements of export controls by publishing notes. But live-streaming is just an invitation for harassment, considering past events such as "smooshgate". I would not want people setting up Twitter mobs because of something someone said at the meeting 20 minutes ago. I think live-streaming is going overboard.

MBS: I think that is really reasonable. As someone who has been a host, adding that requirement to the host is not a good requirement to put on people. Is there anyone here that wants live streaming, or do we have consensus that we don’t want it.

AKI: I agree with WH's concern. The two details being harassment, and the host burden. I am affected by both of those things and agree with them.

KM: It seems like in order for US trade law, these meetings are already public, as we don’t expose ourselves to ant-trust law because we publish notes. So I would assume that by the same logic, and maybe it's a different law, that would also apply to export-control-related things.

WH: Export control is specific.

AKI: Let’s let the lawyer answer that one.

DRN: I think it's fair to say that we're trying to interpret vague language. We (Microsoft) would consider a process to create publicly available material to be a public meeting under the regulations. But some companies don't share that view. We think we're currently in the clear for what we're doing here, but other companies might not share that interpretation.

API: I do think that it creates a host burden, not only from the video conferencing side, if its open to anyone in the world, or if there is some limit. There might need waivers to be involved if there are employees walking by or other tenants. It makes it very difficult to pull off in a safe way.

DE: I'm really happy about the work that was put into this presentation. On Proposal 1, it looks great to me. I think it's good to build on our property of being open. On point 2, I'm really strongly in favor of that. On point 3, livestreaming meetings, that seems good to me, too. I understand the harassment concern, but if people were able to see our meetings, they would understand better how we work, and that might address some of those concerns. (something about people watching meetings causing those people to not want to attend meetings) (audible laughter.)

WH: Regarding livestreaming meetings, I’m not worried about the people who sit through the entire meeting. But what would happen is that someone posts 10-second soundbites where someone says something awkward, and those would go viral — most people would see them out of context.

AKI: I don’t feel this as absolute as Waldemar but I feel this will happen sometimes.

JHD: I think it's critical not just for meetings but also on IRC and reflector that we have private spaces where we can all speak freely. Just like in the notes, where they can be edited later, where we can make sure they convey the intended message, as far as I know, every discussion that happens in other fora started out or ends up public. Similarly, all of the things that happen in the meetings end up summarized anyway because it ends up in the spec. A world in which we make sure all technical discussions are open. There might be a chilling effect if everything we say is viewable by the entire internet. I hope we can come up in a world where we have summarization and publishing of technical discussion, rather than recording every word.

MBS: Thinking to that, I agree with the point you are raising with having a, I’m not sure if these need to be officially sanctioned TC39 spaces or not. We should be able to have discussions in official TC39 spaces. With this proposal and 2, are there specific spaces you have in mind. This probably comes up to the TC39 IRC channel. Could you clarify?

JHD: I'm primarily interested in meetings and the delegates IRC channel. That's where we don't censor ourselves as much as when we make a GitHub post. But I think we should also have the reflector as a place to have technical discussions before we bring them public. If we don’t have a sanctioned place, this will result in an unsanctioned space, which can be exclusionary.

MBS: If we wanted to keep the delegates channel closed, we could (1) have someone go through the logs, turns them into notes, and publish those, which seems like a ton of labor, or (2) maintain logs of the private channel, and maintain them on ECMA servers. Part of the guidance is that anyone can join ECMA, and anyone can join and access that data. It's also keeping a record of propriety so that we can go back and make sure that nothing went wrong.

JHD: I would be fine with logs of these spaces that are not intended to be public, and are auditable. If we wanted to record meetings, that should be fine, as ECMA members are available to view them. I'm concerned about widely publishing off-the-cuff comments that delegates might not have self-censored properly.

MF: I would prefer to be in a place where we didn’t have to worry about that for technical discussion ,and could only limit that to non technical discussion.

AKI: The distinction between whether we are conversing in public or what we produce is public is exactly what the counsels disagree on.

**Rajiv Batra**: I just wanted to emphasize the standard I would love US companies to meet. Less about being open, but instead being public. Everything is public by default in proposal 1, and if there needs to be a space where not every word is published, then that becomes the subject of proposal 2, a second subgroup with limited participation is created. That is what helps meet the standard.

MBS: One thing I want to throw out there. Just a thought. We could always choose to take a more conservative approach, which is applying these restrictions for two months. Then we can understand whether these rules would limit participation by other members. And none of these changes need to be permanent. And then we can re-evaluate in a few months whether these changes work. I would rather we err on the side of allowing all members to participate.

MLS: We are talking about being public, but ECMA is a membership organization. You can’t participate in discussion or other forums without being a member. Is the result being public, or the discussion itself?

DRN: I think, if we're talking about the language of the regulations, (indecipherable). It's not clear what "public" is. Companies differ. From our perspective, a standards organization that is open to any companies is public, and meetings are public, even if those meetings are not open to non-members.

MBS: The one thing that would distinguish this meeting from the public IRC channel, is that this meeting has notes that are published, where the IRC channel is a black box. The problem that we run into is a disagreement about how to interpret that guidance.

SYG: To clarify, what are you asking here? These changes are not motivated by making our work more efficient. They're motivated by our desire to reduce legal risk. And that's not something that we can answer. Is this what your company counsel is recommending?

MF: Proposal 1 without the live streaming meetings is OK with us. Proposal 2 is a measure that we would really like to be in place so that we don’t have to scramble if the situation arises. It also lowers the risk for this process to be used. Proposal 2 is a like to have, Proposal 1 except for point 3 is a must have.

IS: In Proposal 1, "publish all technical discussion", organizations like ISO, ITU, etc. DO NOT publish everything. There is no formal SDO that does that, to my knowledge. (Note: Did not say in the meeting but we have a conflict here: TC39 has a RF patent policy which includes creating a “walled garden” and members have to register to be inside of that “garden” committing themselves to RF policies. We opened the garden to the public already as much as possible, where also parties - maybe only in a listening mode - are sitting with no patent licensing commitments at all, which can be a danger for a RF project). In TC39, we've had an excellent practice. So we can change it a little, but why do we have to change it completely? Did we get signals from US authorities that we have to change? Or is it only an internal interpretation?

MBS: I think it’s less about the authorities and more about that the counsels will not allow delegates to continue participating without these changes.

IS: 40 years ago, I was in Austria involved in a much more sensitive process. That was when we had East and West. We did set up the first computer network connections between East and West. What we did was we talked with the involved governments, security guys, technical guys on both sides to have a common understanding what you can do in sucha project. I have the feeling we are talking only to ourselves. ECMAScript is a web scripting language specification. It's not a security product, just a tool for many purposes.

MBS: There are council on this call that have done a ton of research. Would anyone like to share their opinion?

DRN: What this comes down to is that each company needs to arrive at their own decision. We came up with an interpretation that allows our delegates to continue participating in TC39 as it currently stands. I can't point to past precedents because this hasn't happened before in this way.

*Rajiv*: To clarify, are we interpreting this in a vacuum. Always, but also we are responding to specific published guidance from a US regulator that sets standards. They are probably thinking of certain more sensitive technology. The regular published this. There is a question about how risk averse the council is. Some people would not be able to participate because of this. The history is useful but this is real.

DRN: I don't think there's specific guidance on what standards bodies can and cannot do. There's no official guidance.

*Rajiv*: There is always ambiguity.

DRN: I think the issue is that many companies are having good minds that can differ. So the goal is how we can find the lowest common denominator where all organizations can participate.

MF: Our goal here is not to give advice to companies. I was very open about what my company is comfortable with. I want to see if those changes are OK and to see if there are other changes that will make companies more comfortable.

AKI: Is this something where we can ask people to speak with their counsel, and figure out what specific questions we want to present to the committee?

MF??

AKI: I think the only remaining concern is about the delegates IRC channel. When you spoke to your counsel, did you talk to them about publishing your logs a day/month/year later?

MF: We didn’t talk specifically about that, but we did discuss what timeframes would be reasonable, and it doesn’t have to be immediate.

MF: Can I put together a concrete proposal?

AKI: That sounds great. I don’t mean to cut off the conversation, but we have a lot of items on the agenda.

API: If everyone in the room does not agree, they would not be able to participate.

WH: This is an existential problem with the meeting. It’s not appropriate to cut off the conversation to move on to other things. We cannot proceed without figuring this out. We also haven’t heard from others here who wanted to speak.

AKI: A lot of these things are regarding ECMA, which we can’t speak for. I don’t want us to be speaking in circles about things we can’t answer.

API: One thing that came up, individual members asked the BIS for guidance, that would not necessarily be acceptable to other members. If the end result is that the notes and logs are published and they came back with guidance, the only risk is that you might not like the answer they give. Why are we not just asking ECMA to ask BIS.

DRN: (indecipherable) People are asking not for point-by-point guidance but more general guidance. They may release additional guidance.

MBS: With ECMA being a European org, is it appropriate for them to ask BIS for guidance?

DRN: It won’t result in anything.

MM: What is BIS?

MBS: It is the organization that published these regulations.

AKI: It’s the part of the US government that handles …. Regarding exports.

KM: Could we in order to move forward, by applying this for this meeting, or instead not use private channels for the duration of this meeting, that way the problem is sidestepped for the next three days.

MF: We don't want any of the changes we're requesting to rely on delegates acting in good faith. If you're asking delegates not to use private channels, you're relying on them not to do that.

KM: We could just close the IRC channel for the duration of the meeting.

MBS: We could agree on these more conservative approaches today, and move forward with discussing these other topics.

KM: We say that from this moment to the end of the meeting, we publish the IRC logs. That would enable us to have a productive meeting.

API: Wouldn’t that only be a concern if they (Huawei) are actually here?

MBS: Independent of that, people have particular guidance that they have been given by their counsel. I don’t know that there is wiggle room there.

MF: My feeling from our lawyers is that if there is a technical control in place such that Huawei can't have access to it, that would be fine.

API: Is that the current situation? They asked to add a delegate but haven’t been added yet.

AKI: They aren't added. They are in limbo right now.

MBS: How many more questions are in the queue?

AKI: 4 topics

MBS: We should get through this, lunch is in 8 minutes.

API: We have a pass for this meeting because they haven’t been added yet.

DRR: I think there's a meta-question here. Even if we say, let's shut down the channel for the duration of the meeting, there are more questions we can ask. If someone makes a new channel, if we have conversations in the hallway, are those things we need to publish as well? There's a weird inability to make a distinction between a TC39 channel and "Daniel's BFF" channel.

MBS: Not a lawyer. But that we clearly enumerate the sanctioned channels. Members can communicate in other channels, but they are not official. This is about an enumeration of these channels.

DRR: You could imagine that there was discussion on a non-official channel as well.

MBS: JHD brought that up, having the undesired effect of creating many back-channels, which is exactly the kind of thing we want to avoid. I think for the sake of this particular conversation, we should scope it to the list of channels here.

MBS: What’s next on the queue?

AKI: Queue is empty.

MF: Is it OK if we look for consensus on individual points?

MLS: Is this permanent or this meeting?

AKI: We could call it going forward.

MLS: Permanent, until we change it.

MBS: In our next meeting and the following meeting, we will discuss in a timebox the effects of these changes. Can we reserve a timebox in both of the next two meetings to discuss this again?

(No objections)

AKI: Sounds good.

MF: Is there opposition to TC39 creating a communication about these public channels?

AKI: Yeah, we can do that. I hear no opposition, so we’re good.

BT: Sounds like consensus to write documentation. We'll do that.

MF: For the IRC channels.

AKI: #tc39 prefix is owned by us.

MF: All freenode channels starting with #tc39. With the officially sanctioned channels, except for tc39-codeofconduct.

AKI: There are also the chairs channel, etc., which are not technical.

MF: Do you have a way to state that for the notes?

MBS: To start, for all currently public and accessible IRC channels, that we make logs available channel.

WH: #tc39-delegates is not public.

MBS: First I would like to propose that we maintain public logs for all currently public channels.

JHD: We already do that. The logs are in the subject line of #tc39.

MBS: We should commit to it going forward.

DE: Not all the things that should be logged are logged.

MF: Our commitment is to make logs available as soon as possible.

MBS: At the earliest we can do it.

MF: As soon as possible following this agenda topic. Any opposition?

(No objections)

AKI: Alright.

MF: For the #tc39-delegates IRC channel we're looking for it to become moderated.

AKI: Does everyone know what “become moderated” means in the context of IRC?

WH: No

AKI: anyone that is a delegate is permitted to speak. Anyone can join, but only delegates can speak. They would have to come back to the main #tc39 channel for that.

MBS: In #tc39, anyone can participate, and #tc39-delegates, only delegates can talk but everyone can view.

JHD: What’s the point of having a delegate channel in that case? If we’re going to make this publicly viewable, why not just use #tc39.

MBS: This was vetted by counsel. I think we should iterate.

SYG: There is stuff in the topic that we historically make open after time, like the link to the notes doc.

MBS: We’d remove from the IRC topic and put into the Reflector instead

MF: This will happen as soon as possible following this agenda item. Any opposition to that point?

(No objections)

JHD: It just needs to be clear in the notes that I do not agree to this long-term, but only for the duration of this meeting.

LEO: +1 what JHD said

MBS: With that in mind, I will personally volunteer to work with counsel to come up with proposals.

MF: This is all we could come up with in the two months we’ve been working with counsel.

MF: The next topic is making the delegates forum on discourse public.

BT: It doesn’t get used that much

MF: It does fill a hole that nothing else fills.

AKI: Being able to have technical discussions that don’t have a comments thread associated with them

MBS: I think it is also reasonable to revisit this in the future.

MF: Any opposition to this?

(No objections)

AKI: I think we have consensus there

MF: Anyone have objection to 2d, from this point forward, the chairs moving technical discussion on the Reflector and other private channels to public fora?

DE: Should this apply also if someone starts technical discussion on the tc39 email list that ECMA maintains?

IS: No way.

DE: If someone does start a technical discussion?

MBS: Since that was not a space that was audited and thought of, that we make note of that channel and for the next meeting, make a proposal for how we would handle that channel?

AKI: For (2d) [in the slides], we have consensus?

MLS: I have some concerns about names being used.

AKI: This is only for going forward. When have we actually had a technical discussion on the Reflector?

MBS: Can I make a suggestion that can allow us to move forward. Would you be comfortable with this for at least this meeting, and we can come back with a proposal for publishing summaries, and see if that is acceptable.

MLS: If we say that we stop this at the next meeting.

MBS: Augmenting, we limit the discussion on the reflector for now until the following meeting. And consider a proposal that would publish summaries.

MF: This worries me a little bit.

MLS: I don’t want to constrain you, we are talking about the least common denominator of risk.

MBS: I have a couple of different ideas. Having two months between now and then, I am confident that we can vet a specific proposal that alleviates your specific concerns. I am aware of the “work mode” that you are talking about.

AKI: Any further concerns?

MF: Do we have consensus?

(consensus on item 2d)

MF: Consensus on 3?

(audible "no" from room)

(consensus not reached)

AKI: Number 4?

MF: It is not required to have consensus for the chairs to clarify this.

DE: We’ve arrived at a really good structure at the ECMA level. We don’t have one at the TC level. The question is how do you talk with the chair group to get this started. Documenting this at the TC level seems very appropriate. I’m happy to be involved in this because I worked on the invited expert policy last time.

AKI: Do we have consensus to write down what we do, so that it is clear?

IS: ???

AKI: We are not talking about anything other than writing down what we already do.

DE: There are some possible improvements we can make, automation you can make. I totally agree with Istavan’s wording.

MBS: Do we have any objection to TC39 documenting the invited expert policy as currently created by ECMA?

(silence)

(consensus reached)

MF: Is there any opposition to the creation of a limited membership TG that is used for discussions.

WH: What is a *limited membership* TG?

MBS: I can give some examples, our code of conduct committee, the editor group. Some of the groups will have publication guidelines posted. The one group that I would like to explore is one for security disclosure. We don’t currently have a way to disclose something without disclosing it to the entire committee. Generally, the qualifications are technical, sometimes employment. What we can use as qualifiers would need to be discussed, and submitted to ECMA to ensure that they are acceptable. We are talking about Stage 1 here, not the exact solution to the problem, but that there is perhaps a need for this kind of limited technical discussion.

AKI: I have a request that we more narrowly define security related, embargoed topics.

MF: I don’t think we need to describe the specific topics.

IS: My suggestion is to write down exactly what you really want. All we have is the slides. (Note: I also said in the discussion somewhere that the contribution came to the TC39 meeting in the last day or so, so very late).

AKI: That's what we're coming to consensus on right now, do we want to spend the time to do that.

AKI: Do we have consensus?

(silence)
(consensus reached)

AKI: We will discuss this in detail at this meeting and at the next meeting.

API: I don’t know what everyone’s feeling is, but this was added to the agenda at the last minute. We do have a cutoff for stage advancement. I would like to see consensus that process changes need to follow these same guidelines. If you are proposing changes, the slides need to be posted.

MBS: One caveat, if things come up after the deadline that is important;

API: The chairs can address this.

JHD: Not meeting the deadline does not preclude advancement, but does provide a reason for blocking advancement.

(consensus reached)

API: We can submit a PR that includes this as well.

DE: We can also discuss this.

## Conclusion

- "TC39 issues a public communication on its existing property of being open" is approved
- Enumeration of all official channels of communication
  - #tc39 and any IRC channel that is prefixed with "#tc39-" is now official
  - Everything on github under tc39/ org
  - Discourse is official
- Logs of public IRC channels will be made public
- #tc39-delegates channel will be made voiced (+v) and moderated (+m)
- Discourse Delegates category will be made public, moderated and voiced
- No consensus on live-streaming meeting
- Chairs will document TC39's implementation of Ecma's invited expert policy, as it's put in practice in TC39.
- We will work on a proposal for limited participation technical groups for discussion of technical topics that cannot be disclosed publicly in a reasonable timeframe.

## Test262 Report

Presenter: Leo Balter (LEO)

- [Test-262 repo](https://github.com/tc39/test262)
- [Slides](https://docs.google.com/presentation/d/1mtGzLk8hyoo74N22n4SsFKcneZk1bBZ2DLU-svJF1ZI/edit?ts=5e39de01#slide=id.p)

LEO: (presents slides)

LEO: Any questions?

(silence)

AKI: I'm impressed by the number of contributions you're responsible for.

## Elections at TC39: Introducing a process

Presenter: Yulia Startsev (YSV)

[Slides](https://docs.google.com/presentation/d/1u435-e43kQNWfYONE89CdzpPitCKLItXLObeuvdhRr4/edit#slide=id.p)

YSV: (presents slides)

AKI: It’s a simple majority, from ECMA.

YSV: There's still some discussion going on. I just wanted to bring this to the room to discuss it.

IS: We would need a bylaws change if voting were not a simple majority. It could be done but for now it's not done, so we would only be able to do a simple majority. But there are bylaws changes relatively often. The overriding Swiss law is quite specific that it is a simple majority, which is currently what we use.

YSV: I think that’s a good information position to have.

JHD: In 2018, at one point, KS and I told the committee that we wanted to be co-editors and skip the hassle of an election. Then we were sent out of the room for an hour and a half. Two months ago, deciding that we all had enough time and commitment from our organizations, we wanted to run as a slate, but unannounced to us, the committee decided to vote on us individually. I find it bad that process decisions are made while delegates are out of the room. It’s disturbing to me that multiple years in a row, the preferences of the candidates has been disregarded for the editor elections. I’m really glad that Yulia has put this together. I would expect that delegates, even if they are running for a position, get a say in how that election is conducted.

YSV: Your second topic is addressed by the presentation. On the first topic, it would be helpful for the candidates to give a presentation on what they intend to be doing. It wasn't clear that there was a plan of work that would be happening over the year. Another issue is that we could get into a situation where someone nominates themselves to the chair group, and then all the chairs should feel they should go all-in or nothing, and someone could be brought into that role by social pressure rather than qualifications. I want to impose specific goals about how to discuss candidates. If it happens that we have an unsuccessful election, I think we could work through it in this way.

KG: I wanted to confirm, you showed a picture of a ballot. For both editor and chair group, we've previously said that we are looking for a specific number. But this would mean that everyone who reaches a majority would be able to be added to the group?

YSV: Yes that is correct.

CM: I somewhat concur with JHD’s reservations, particularly the editorship. If you have a group of more than 1 person who has a concept that they're going to divvy up responsibilities in some way and present themselves as a slate, we should allow for that. And requiring that we vote individually seems unjustified. I think that if people want to run a group, they should be able to run as a group.

YSV: I agree it could be disturbing if you want to make plans. I think it could help for the candidates to give a presentation on their plans if elected together.

AKI: Where does that leave us on this proposal?

YSV: I would propose that we do this iteratively. If it comes to the point that this process creates problems, then we can fix it later. For now, maybe we can adopt what I’ve suggested and use that for the chair elections in this meeting.

JHD: Feedback is great. In my job, the way I get feedback is not people talking in a room, instead by my manager collecting private feedback from colleagues, and then organizing it, and then providing it to me. I would feel this way even if I wasn’t someone this applied to. It really sucks to have to leave the room for an hour, and have people potentially talk negatively about me. I would really prefer a process where this feedback is delivered in a more polite setting than discussed openly in this room. I don’t think that someone leaving a room and having people talk about them is fair.

KG: I share some of your feelings about the social dynamics of the thing, but especially for chairs, I think it is important that if someone has something they are concerned about, that might interfere with someone's ability to serve as an effective chair that they bring that up with the rest of the group before the rest of the group votes. That affects the entire committee. It is certainly something I would want to know about before voting. For editors, less so, because the editor role is more technical. Editors have to coordinate with members of the public and committee in a somewhat similar way. So I don't think performance reviews are the right analogy to draw here.

JHD: I agree with you that if there is something that impacts the ability to do the job, that should be brought up. It seems like it is “alright, they are out of the room, what can we say about them”.

KG: If those discussions are happening, they should be restricted to things that are absolutely relevant to the candidacy. I think we are pretty good about that without being explicit.

YSV: This is what I intended with the process. We highlight the good points. If they needed to improve on something, what would it be in a purely professional context.

KG: Specifically for the context of the role that they are a candidate for, not arbitrary stuff.

JHD: Like, if there's something that is about being a delegate, that's not something that belongs in that discussion. It should be specifically about the role up for election.

YSV: I will add that to the slides for the presentation.

SFC: Yulia’s proposal touches on most of the concerns, for example, notes delivery to candidates for the live discussions as well as candidates being able to give a presentation on why they wish to run as a slate. From my perspective, the amount of collective time as a committee spent talking about elections is quite high. I think we should adopt this and not spend any more time on election processes.

AKI: The queue is empty. Never mind -- MLS?

MLS: So, I’d like to resolve this issue, we also have elections for meeting locations. I know that we have a waiting process.

YSV: Let’s close this discussion off. Should we accept this proposal? The changes are restricting the wording that the feedback given in the discussion to what is relevant to the role.

### Conclusion

- Adopted as amended above

## Meeting Location Elections

MLS: I don’t know what the exact process is.

AKI: In the past we’ve used Google forms. When it comes to concerns about scheduling meetings. We don’t get a lot of volunteers, so we have to go with what we can. If we have multiple options, a Google Form is a low friction way to get feedback. I can’t imagine how we can do that better.

MLS: What is the result of the last poll that was taken?

AKI: I think Budapest was winning, but only by a slim margin.

MLS: Who is the host?

AKI: IBM in Budapest in November

DE: There was a plurality of IBM at Budapest, there were comments on the reflector about a 3rd place for a runoff, but it would be hard to get everyone to fill out the form again. Ultimately it seemed like the best option with advanced notice. There's an issue, which is that we want to preserve the confidentiality of the vote. I hope this can be a way to gather feedback from the committee. I agree with AKI that, I mean, I want to learn more about MLS's concerns here so if we do this again, we know what the problems were.

MLS: This is the first time that I heard that the official meeting was in Budapest.

AKI: It was posted in the reflector. I think we never had a formal announcement.

DE: I didn’t post percentages. We had an email thread among the potential hosting organizations. Do you want me to follow up with percentages?

MLS: No

DE: Ok

AKI: Back to Yulia

YSV: Do we go to elections, or do we want time to think?

AKI: I don’t know the answer to that question.

YSV: If we follow the process I suggested, we're a bit behind. We have a presentation for the chair group. Should we follow up with that?

AKI: I certainly would like to get that out of the way. The schedule is in a hilarious mess.

## Chair Group Election

-[Slides](https://docs.google.com/presentation/d/1P5DdJBQrr5hj_x-SqQxk8HOTaipJUaxbH0icp1g9iMk/edit#slide=id.p)

YSV: (Presents Slides)

YSV: Any questions?

SYG: Can you go back to the coordinating with standards slide?

SYV: Is this something that you are saying that the next chair group is going to commit to doing, because we haven’t

YSV: We’ve been doing it in a limited capacity.

SYG: What does this mean exactly?

YSV: This is a modified version of the last slide deck. The exact way that the upcoming chair group will do this has yet to be determined

SYG: Usually, this thing requires in-depth understanding of the space of a particular proposal. I am skeptical that the chair group can do this effectively.

YSV: This is a good comment, my work is mostly facilitating conversation between the standards bodies.

SYG: Thanks

DE: There are org and technical aspects in coordination with other standards bodies. For example, the liaison relationship for other standards bodies to attend TC39, the chair group can help with. Championing proposals that cross over as well.

IS: It very much depends on the concrete subject. Like the JSON stuff. There we have had intensive liaison with IETF for that particular project.

DE: There is a lot of: this group doesn’t listen to another group. This will help people get in contact.

SYG: Thanks for that Dan. I am just reconfirming that the next chair group wants to spend time on this. There is some maybe limited capacity. I haven't really seen this work done in the past.

IS: Actually it was done in the past. As I said, its intensity really depends on the concrete questions, programs. A similar situation we had about the too frequent fast tracks to ISO/IEC JTC1 on the ECMAScript Standards ECMA-262 and ECMA-402 - that we have solved with the creation of the ECMAScript Suite (ECMA-414) standard..

YSV: I think that covers the stuff that I had prepared for chairs. Do we want to have any other discussion before we move to doing the election?

(silence).

IS: Last year we had 3 members in the chair members, it worked extremely well. Thank you. Now we have 4 candidates, can we go up from 3 to 4? Previously I have heard some voices that we have a lot of work for the chair team, can we take it now that we have a team of 4, and not 3?

MBS: Just to add, as someone on the queue to be a chair, my participation is contingent on that number of people as chairs, as I am spread thin. We also had a separate group of people to help facilitate meetings. Not saying that we should add more chairs, on top of 4 chairs, we should have people who can help facilitate meetings. I don’t think we are nearing numbers that hurt our productivity.

RPR: As someone else who has volunteered. I won’t say it was contingent, but I would be a lot more comfortable if there were 4. That was basically my expectation. Thank you to JHD for bringing up this point about expressing wishes.

CM: So, I have a question. I’m not sure if this is a point of order or a place to insert question, we are talking about this slate of folks, the question that is going to be on the table in a minute, these people yes or no. When is it appropriate to talk about what the chair group would be doing?

YSV: Ideally this presentation would be done two months ago. Now is as good a time as any.

CM: It’s sort of a meta question. It feels like just in recent years, the fraction of the plenary’s time taken up by governance has expanded enormously. I wonder if there is anything that the chair group can do to alleviate this? I’m concerned with the amount of overhead in recent years.

MBS: There are some other proposals that are process related that will be brought up this meeting that will speak directly to that.

CM: Ok very good.

MBS: We are feeling a lot of pain for this being the first meeting of the new year.

YSV: At the last two meetings, we had a lot of discussion spent on these things. I consider these two meetings to be quite special.

CM: It feels like overall the trend of overhead as a percentage of committee time is upward.

YSV: That is a fair comment, I agree that we spend a lot of time on process.

MBS: Every meeting we do have, the first half of the first day is eaten up by updates from ECMA, from the TGs. We end up losing about sixth of each meeting. We can consider another way to handle these updates separate from the process time that has been eaten up in this specific meeting.

YSV: Any further comments?

MBS: We are good.

YSV: May I ask the camera operator to give me a good view of the room.

MBS: We don’t have control of the cameras.

MF: I will narrate the room

YSV: Everyone who is volunteering to take on this role please leave the room.

(candidates leave the room)

### Conclusion

KG: Ya’ll are chairs. (Note: the Chair Team 2020 (all four in a “package”) has been elected by consensus by TC39.)

## Editor’s Report (ECMA262)

Presenter: Jordan Harband (JHD)

- [Slides](https://j.mp/262editor202002)

JHD: (Presents Slides)

MM: For-in enumeration order being specified, it still is not fully specified?

JHD: In more cases, if an object being enumerated doesn’t match all the criteria then it is in host defined land, otherwise it is specified.

JHD: (continues to present slides)

DE: What is the implementation status of the proxy internal method PR?

JHD: If implementers have any comment about it, that would be helpful. The tests have been there since May 2019, and test262.report links imply most engines already implement it.

DE: We can follow up offline. I mentioned earlier that I prefer if we got implementation feedback. We don’t have a process requirement for implementations.

## ECMA Secretariat Report

Presenter: Istvan Sebestyen (IS)

- [Slides](https://github.com/tc39/agendas/blob/master/2020/02.GA-2020-12_R1.pdf)

IS: (presents slides) will focus on new / value add items. Many points in the slides were already discussed in the earlier discussions, so he is only bringing those topics which are additional.

IS: Questions?

MBS: Regarding note taking, I’m saying that we have to move forward long term, when Rick Walton was doing this, it was an in-kind donation of the JS Foundation.

IS: This is new to me. I thought he was doing it voluntarily :-).

MBS: The way in which I frame it may not be totally accurate.

IS: Indeed it was for the JS foundation, not yet during the Bocoup membership..He did a brilliant job.

MBS: So one thing that I think we can look at, and I don't think it fills all the gaps, I think support from ECMA would be good here so we have consistency, but that we are floating at OpenJSF, about trying to see if there are people from our foundation that we could sponsor to come. For what it's worth, I don't think that would be sufficient to call this "solved", but I think it would be a good way to bring in new community members. But I still think we need to follow up with ECMA and Istvan.

IS: That would be great. I always accept any sort of help and appreciate anybody that did work.

MBS: The big thing to me is that we have something identifiable and scalable. I think it would be good to set it up in such a way that there isn't a single point of failure.

IS: I could also imagine that it is not one person, but it really should be someone in the meeting room, or remotely participating. Aki has asked if we can publish the last ECMA TC39 minutes, but in these minutes we have the technical notes and it starts with “you cannot publish” this..., So we cannot publish it publicly with that notice. Obviously Ecma internally it is published as a TC39 and GA document. But TC39 wants full public transparency.

AKI: Because I was prepping the schedule, I wanted to add to the agenda a link to the minutes, so that when we approve the minutes we can approve them. It’s not a big deal, we still get them emailed.

IS: We normally put them on the ECMA file server, and also on GitHub under “Reflector”.

MBS: Thank you Istvan, anything else?

JHD: The 2020 spec is basically ready to be finalized. My intention is to branch it for the two month opt-out period. I will make a reflector post, look out for that.

IS: Exactly, In the past it was just announced TC39 internally by Brian. I also need to make a GA announcement about this. There are several Ecma members (not active in TC39) who are not following the information flow of TC39, and want to get informed via the Ecma GA channel.

JHD: Since the next meeting is in March, and the meeting after in June, do we have to wait for the opt-out period?

IS: No, you can start both independently whenever you feel it is ready.

JHD: The part where we ask for consensus, do we have to wait for the opt-out period?

IS: You can not do that, there is not enough time a) wait for two months until the “opt-out” is over and b) to publish the specification 2 moths before the GA. That would be four months in total....

JHD: My plan is to make a reflector post that points to the final intended version, to begin the opt-out period, and then reach consensus that barring exception on the post, we agree.

(silence)

IS: This is for the opt-out and the GA together?

MLS: JHD is suggesting that we vote now for the GA, and do the opt-out period after that. In the past, have we announced that we are going to vote. Unlike the other decisions, the GA is one vote per member.

JHD: I want to make sure that next year we don’t say that we did this year incorrectly. I’m not familiar with what I’m supposed to do.

WH: The vote is always in March.

JHD: We will vote in March.

MLS: The opt-out period, does it occur before or after?

WH: Begin the opt-out period before the vote. We’ve done them concurrently; if the vote happens before the end of the opt-out period, it becomes a conditional vote based on no one opting out.

MBS: Does anyone have objections to delaying the coffee break?

(silence)
(consensus reached)

MBS: Thank you IS

## ECMA-402 Update

Presenter: Valerie Young (VYG)

- [Slides](https://docs.google.com/presentation/d/19w-MiEmxsrGEp8F4LR6DfLWadimt8fW1wgwSE33FCK8/edit?usp=sharing)

VYG: (presents slides)

SFC: Note that the MessageFormat Working Group is formalized under the Unicode Consortium, not TC39, so it's governed by the Unicode Consortium rules.

VYG: (continues presenting slides)

VYG: Questions?

MBS: Nothing on the queue. Thank you Valerie!

## Update from the COC Committee

MBS: Excellent conduct!

AKI: Everything is running smoothly. We haven’t had the opportunity to jump into action and I’m fine with that.

MBS: My understanding regarding public vs private, there are no plans or need for the COC committee to change the way it operates. People expect things to remain anonymous. I want to reassure folks that things will continue to operate the same way that they have.

(scheduled break)

## ToInteger normalizes -0 to +0

Presenter: Jordan Harband (JHD)

- [PR](https://github.com/tc39/ecma262/pull/1827)

JHD: (Presents PR)

JHD: Are we ok with this largely-editorial change?

KG: I want to make sure everyone is really clear with what the change is. The actual change is `Atomics.store`, which is used for values in shared array buffers. It normalizes it’s argument and returns its argument. So, you can’t store negative zero in an integer array buffer, so it’s not actually affecting what it stores, it affects what it returns. Previously it would store 0 and return -0, now it will store 0 and return 0.

JHD: and you could argue that was a spec bug, since it returned something other than what was stored

(some disagreement that it was a bug)

MM: I'm not going to concede that that was not a bug, even if it was intentional.

JHD: Do we have consensus to make the change?

ZB: We are about to merge the relative time format which is the only place we care about -0. Want to point out that we care about this there.

JHD: This will need tests anyway, but I can check the HTML spec to confirm and can address as needed.

RGN: Do we consider the concept of integer to include -0?

KG: No I would consider -0 to not be an integer

JHD: Mathematical concept does not allow a signed zero; BigInt does not have negative zero

WH: I see this as a clear bug fix. Atomics normalize non-integral values; they should normalize -0 as well. The existing ToInteger just happens to be the way we wrote the spec long ago, but the new form is more succinct.

KG: HTML does not call ToInteger

### Conclusion

Consensus reached

## Remove steps 2 and 4 from ProxyCreate

Presenter: Jordan Harband

- [PR](https://github.com/tc39/ecma262/pull/1814)

JHD: (introduces PR summary)

JHD: Are there any objections for proceeding with this change? This also needs tests before it can proceed.

(silence)

MM: This is great!

### Conclusion

consensus reached

## Async initialization for stage 1

Presenter: Bradley Farias (BFS)

- [Slides](https://docs.google.com/presentation/d/1DsjZAzBjn2gCrr4l0uZzCymPIWZTKM8KzcnMBF31HAg/edit?usp=sharing)

BFS: (presents slides)

JHD: `new Promise` *does* catch exceptions.

MM: It causes the promise to become a rejected promise.

JHD: If you throw in the callback it rejects the promise.

BFS: There was an error somewhere when I was testing this

BFS: (continues to present slides)

WH: Which field do you consider to be missing?

BFS: If you use `new Y()`, even though the class `Y` has a field `b`, the instance `y` which is `instanceof Y` does not have field `b`.

WH: `new Y()` includes a field `b` but not `a`. If you await it, you get `a` but not `b`. This is what I’d expect.

BFS: Generally the people trying to use async init data structures, they want to put the field on the wrapped value, not the promise.

WH: Is the goal to make this kind of thing work, or some other way?

BFS: Some other way, as this current behavior is strange to everyone I show it to.

WH: Anything other than the current behavior would be surprising to me.

BFS: I want to be able to manipulate the wrapped value and not the promise.

BFS: (continues to present slides)

BFS: That’s it -- questions/comments/concerns?

MM: My first one, I tried the code `new Promise(_ => { throw 'x' })` , the throw does not propagate.

BFS: Sure. Would still not fix these fields issues.

MM: I was just clarifying the previous conversation.

JHD: I understand why returning a promise in the super-class constructor would be tricky, but could super just have a then method?

BFS: It will still not install the fields on anything but the promise.

JHD: The super class would define a then method on the prototype. You can’t wait in a constructor, your subclass can have a then method that calls super.then. What can you not do with those sorts of patterns that you need async constructor for?

BFS: You can’t really coordinate in a way that prevents people from touching your class before it’s initialized. You would be trusting your subclasses to not do anything to your fields before it’s initialized

JHD: And when you say fields, you mean setters in particular?

BFS: No, anything. If a subclass were to change the length property, and then it gets initialized later in the superclass async initialization it would be bad. The problem is just a coordination problem.

KG: Usually with classes, you don't want to expose your class in a partially constructed state. The way you normally do that is hide data until you are initialized yet. With this proposal, you get an instance, it just isn't "ready yet".

JHD:I can understand why you don’t want a partially-constructed instance out there. But in the async constructor approach, how are you preventing someone from synchronously receiving something that’s not ready?

BFS: An async constructor will always return promise.

JHD: I can stick data properties on the promise but it wouldn’t make a difference.

BFS: Uh, yes.

JHD: So, to paraphrase, with just async constructor alone, you're saying that this installs the fields on the instance, but the result of construction is a promise for that instance?

BFS: Correct, that is the idea

MM: In the baseline design here, and you do an await.super call instead of a super call, so that you have what is effectively a normal construction process that is simply spread out over multiple turns, where you are always coordinating with awaits and asyncs, I would argue that the consistency of that design extends into that you need `await.new` not `await new`; with the space, it is not adequate. By the time you continue, you need to have the instance. Just like you can't do a normal super chain, you shouldn't be able to do a promise chain.

BFS: I am neutral. I’m just trying to make this easy. That seems fine to discuss at stage 1 or 2

MM: I agree

KG: I disagree with Mark’s position, but we can discuss it later.

SFC: I’d like to say that from the Intl perspective, this is the kind of thing we’ve wanted for a little while. When you create certain Intl objects, there’s a desire to load certain information when that instance is constructed, and this mechanism would make that easier. See [tc39/ecma402#210](https://github.com/tc39/ecma402/issues/210) So I’m definitely +1 on this.

BCS: I’m not really clear on what this enables, I don’t understand why you don’t just not call the constructor until you have all the data. I would expect it to look like an async function that gathers the data with awaits, and calls new Constructor().

BFS: You could write it that way, but that wouldn't fix the subclassing part.

BCS: Why wouldn’t it fix the subclassing part?

BFS: If we were trying to make a subclass X of Y, there is no way to coordinate a good place to put it’s fields on, you would have to use super override to try and do it.

BCS: I’m proposing that it just be a normal class. You wouldn’t have the constructor return anything.

BFS: I don't understand how it would work. Let's discuss offline.

JKN: I would argue that this makes APIs less consistent. It seems like if we can have a language feature that makes this more straightforward, we can say, sometimes this returns a promise, sometimes a value, but at least it's a more consistent and familiar interface.

BCS: So, you're saying the idea is for building apis, to be consistent. But then you would need the entire API to be built using async classes otherwise it wouldn’t be consistent.

JKN: You already have classes where some methods are async and others are sync

BCS: You could say that you just always call methods to create objects. Don't worry about the constructor.

JKN: With precedence for some classes that have async and sync methods on it. Look at Node `fs`, for example, which has some Promise methods. Sometimes when I’m writing code some data is sync and some is async.

BCS: We are talking about methods, not constructors.

BFS: Just to clarify, this proposal is about developers having a better experience in JavaScript. I'm not arguing that you can't make async stuff work. I'm saying that it's hard to do it properly and we should make it easier.

KG: I’m in favor of this, not any particular solution, but that is a post stage 1 concern. I am strongly in favor of stage 1. This is not a stage 1 concern, but I want to mention it. An advantage of putting the async keyword on the class instead of the constructor, would allow you to use await in initializers for fields.

MM: Yeah.

JHX: At first it seems useful, but I don't know how it would work. I really hope we can see what other languages do, especially languages like C# that have had async for a while.

BFS: C# does not, but for other languages we can certainly investigate.

DRR: This is probably a later-stage concern, but there are some questions about the axes of whether asynchronous classes can extend a non-async class and vice-versa. My assumption is that you can have both types of classes extend the opposite type. But I think there will be some confusion around that. How do you have a sync side of an async class extend another type? Because of similar considerations, like where to the prototype methods get installed and the like, would be hard to think about as well. I have teams at Microsoft who ask me about async initializers (?), but I’m not sure how deep a person gets before this gets confusing. I’m concerned that while we may fix some problems, we may make some things harder as well.

BFS: My inkling is on how this is going to go, is that we make this somewhat a limited feature. I would not expect that you are able to mix these kinds of classes.

BFS: Can we reach consensus for stage 1?

JWK: I'm wondering if this kind of async class works with high-level class (clz => class A extends clz {}) that the subclass doesn't know who the parent class is. Does it throw when a normal class extends a async class, if not, how to call the super in the subclass?

BFS: I would look at this in a later stage. I don’t have concrete semantics. My inkling is that it would throw. I don't expect mixing an abstract subclass or superclass to work if it does not understand the initialization timing.

RPR: No objections?

(silence)

### Conclusion

Consensus reached for stage 1

## BigDecimal for Stage 1

Presenter: Daniel Ehrenberg (DE)

- [proposal](https://github.com/littledan/proposal-decimal)
- [slides](https://docs.google.com/presentation/d/1qceGOynkiypIgvv0Ju8uPqXP4GsWHoY2IVYSWE8SA4Y/edit#slide=id.p)

DE: (presents slides)

DE: On global settings - no settings, are you happy with that Mark?

MM: Yes

DE: (continues to present slides)

DE: Questions?

WH: The trouble with tribbles and precision, is that they multiply. I've had a number of conversations with DE about this. I'm strongly in the `Decimal128` camp for a few reasons. (1) `BigDecimal` is hard to use. The precision can get away from you if you are not careful, getting into the hundreds of thousands of digits. You will be forced to have functions which do arithmetic on decimals also take a precision parameter. Unfortunately that doesn't work well either, except in simple cases. For example, if you have a function that computes the harmonic mean of N numbers (take the reciprocal of every number, take the mean, and take the reciprocal again) and just take a precision parameter for the intermediate divisions, you’ll get the correct value `1.6m` if you take the harmonic mean of `1m` and `4m` with a precision of two digits after the decimal point, but this will blow up if you take the harmonic mean of `1000000m` and `4000000m`. You end up with nonsensical results with only a single precision argument.

DE: I don’t know if you saw, the rounding parameter had two modes for significant digits as well as maximum decimal places.

WH: Yes. It’s used like that in financial calculations, which brings us to the next topic. I don’t think it’s ok to say that we’ll never support things like sqrt, exp and so on on decimals. I don’t think it’s ok to say that you need to implement those as a user library.

DE: I didn't say never. I said as a follow-on proposal, but I want to hear more feedback about if it should be included in this one.

WH: You said as a follow on proposal but there is an enormous gap between the complexity of supporting those in BigDecimal vs. Decimal 128. If we’re doing Decimal128, we can just get those from the standard library and be done. If we go with BigDecimal, we’d need to compute those to arbitrary precision, and I don't want to include Mathematica in every copy of the language (audible chuckles). Just the complexity difference is large if you want to get the value pi. In Decimal128 it’s just a constant — we know the value of pi to 34 decimal digits. In BigDecimal, pi would take a precision argument, and you know that people will ask for the first million decimal places of pi. This puts me firmly in the position of supporting `Decimal128`. Doing math will be much harder to implement if we choose `BigDecimal`. Furthermore, `BigDecimal` is much harder to *use* because of the proliferation of precision arguments.

WH: The next question is, what happens when you convert a Number to a Decimal, regardless of the variant of Decimal we pick. If it is an exact number, OK, but what happens if you do 1/10 using regular Numbers, and then ask to convert to Decimal. “You can’t do that” is a fine answer. Another answer is that you get whatever mathematical value you had but in a Decimal format, which happens to be `0.1000000000000000055511151231257827m` for Decimal128 or `0.1000000000000000055511151231257827021181583404541015625m` for BigDecimal.

DE: We have an open issue about this question. The QuickJS author implemented BigDecimal, and he raised this particular question. You're right: there are multiple possible answers, and I'm not sure what the best possible answer is.

WH: Either you don’t do that, or you give an exact value. Are you including a precision/rounding parameter in the conversion? What I would not be OK with is, if you do this then you convert a Number to a String, and then to a Decimal.

DE: There are some people on the issue tracker that have supported that specific option, but it is good to hear your point of view.

WH: ok

SFC: Regarding conversion from numbers to decimals, the other way that I understand is well-defined is basically to take the number with the fewest significant digits that round-trips when converting back and forth to the double. See [double-conversion ToShortest](https://github.com/google/double-conversion/blob/master/double-conversion/double-to-string.h#L142). That’s the conversion that ICU and V8 uses. But again, this is not a stage 1 blocker, so I am in favor of stage 1 for the proposal.

API: I posted a link in IRC for the C++ implementation of this stuff. We use a parameter or a standard conversion.

WH: To clarify, the standard conversion does what?

SFC: We can talk offline.

KM: I want to understand why this is a primitive instead of just an object? It seems like adding a primitive seems unnecessary, I don’t know of any other language that has decimal as a primitive.

DE: Many other languages have Decimal in a way that supports operator overloading. Going back to `BigInt`, I was initially going for `Int64` and using functions (not operators). But Brendan was the impetus for making sure that it was based on operator overloading for good ergonomics. People like doing math with operators, and in practice this means that you may convert different types. So it’s important that we give this proposal a good happy path so that it’ll work well in practice.

KM: I’m concerned with a slippery slope, if we add another primitive every time we want a new thing. That is my main concern with making something a primitive. Primitive spread everywhere. They have to be handled by all parts of the language.

DE: I understand that there is much higher implementation burden for this path. Decimal is something that comes up a lot. If as Mark is saying below, and trails operator overloading, then it is not much more difficult.

KM: Then the question is what’s the limiting factor on primitives? When do we stop? We haven’t established a bar of when primitives should start and when they should stop. I’m worried about a world when folks want to add many more primitives like Rational, Complex, etc. And every library that wants any operator overload is just going to say that I want to be a primitive so I get those. That’s going to add thousands of primitives to the language. I would really like to see a concrete stance from the committee as to the “bar” to be a primitive. I agree that the operator overloading is great, and you would get it for free with a value types proposal that allowed operator overloading. I don’t think making everything a primitive is a sustainable answer.

DE: Well one thing that make primitives for numerical types especially attractive is enabling compiler optimizations like value numbering. Maybe that’s more important for BigInt than BigDecimal.

KM: I think it would be really hard to do that for BigDecimal. You already have many bits of information. I would be surprised if any engine did that in the next 10 years.

DE: That’s a long time.

MM: So, my comment and Keith’s comment fit together. The operator overloading proposal is extremely well thought out. If this were to go forward, it would have to trail operator overloading so that it exactly expresses something that can be expressed with operator overloading. Why should this be a primitive, the main justification so far has been operator overloading. If value classes don’t happen, these things coming in as objects rather than values without operator overloading makes things harder.

DE: The current operator overloading proposal does permit operator overloading on objects. I mentioned other mismatches, are you concerned about those?

MM: I am. I put the extended literal syntax in the same category as operator overloading. I would really like to see the prelude for the existing numeric types as well as Decimal. My inclination would be that once we have operator overloading and extended literals. After that we don’t need new values types.

DE: The cross-realm registry was the part I couldn't piece out. Is that what you were thinking about, too?

MM: Yeah, that is the main one. I actually do have something in mind, but it is not the kind of thing I would take to the committee for stage advancement.

DE: Please get in touch if you have further feedback.

(thumbs up/silence)

### Conclusion

Stage 1 reached

## Preserve Host Virtualizability

Presenter: Mark Miller

- [slides](https://github.com/tc39/agendas/blob/master/2020/02_talk_preserve-virtualizability.pdf)

MM: (presents slides)

MF: I would like to see this research done. I want to know what your bounds are for what you are looking to virtualize. In the language we have syntax that does things that are predictable. The more we make virtualizable, the less syntax/code is predictable.

MM: Could you give me an example of the kind of thing you're worried about?

MF: I’m not worried about a particular thing. Can I get an idea of where you would like to draw this line on how much virtualizability you would like?

MM: What I would like to see is that the criterion is host-virtualizability, and the syntactic issues are the user-provided machine instruction set, that the virtualizability does not change the instruction set. But I would want it ideally to be flawless. Through this research we will discover what we can't virtualize, and enumerate/grandfather them. The ideal is that when JS runs on any host, JS can act as any other host.

KM: Can you go back to your slide on peek/poke? You don’t require enumerability. How do you find them if they are not enumerable?

MM: We introduced in ES5 exactly for this purpose `Object.getOwnPropertyNames`. This is the reason we introduced that. In ES3, the primordial objects had a dangerous amount of crap on them. We consulted with the browser vendors and were able to determine that that method and `Object.getPrototypeOf` make it safe to walk the prototype chain and not miss any dangerous properties.

SYG: If the threat to virutalizability is not in theory but in practice. If we tighten the spec language, that the host shouldn’t do this, what teeth do we have? It might not be malicious. If I want to provide peek/poke for my users or my runtime.

MM: That the decision by the host is to provide peek/poke and be virtualizable? The committee would take the stance that any implementation, unless it gets an exception, would be a non-conformant implementation.

SYG: If you point out that the threat is in practice, not in theory...

MM: Right now, we're safe in practice because we've succeeded at getting rid of all this dangerous crap. But the spec does not state that these things should be deletable.

MM: For example, on Firefox, the legacy RegExp statics are not deletable. Was that decided because users wanted it to be non-deletable, or was it an accident? I want to make it clear that there is a way for JS to provide a host for JS.

SYG: In general, I am for this research. In general, I am wary of restricting the host that we don’t know…. What changes are you asking for?

MM: That's what I'm going to do the research on. I will try to determine which invariants I'm asking for. Before, there was a lot of crazy stuff hosts did. There was a re-write of WebIDL so that it could only specify behaviors that obey the object invariants, and which can be faithfully emulated by proxies. With two exceptions, document.all and the browser WindowProxy (which, btw, is not a proxy). And WindowProxy is now very close.

MBS: We're at time for the day, so we'll continue tomorrow.
