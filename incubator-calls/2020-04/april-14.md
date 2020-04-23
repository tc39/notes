# April 14, 2020 Incubator Call Notes

**Attendees:** Bradley Farias (BFS), Myles Borins (MBS), Mark S. Miller (MM), Jordan Harband (JHD), Shu-yu Guo (SYG), Caridy Patiño (CP), Yulia Startsev (YSV), Daniel Ehrenberg (DE), Mark Cohen (MPC), Sven Sauleau (SSA), Kris Kowal (KKL), Kevin Gibbons (KG), Dan Clark (DDC), John-David Dalton (JDD), Justin Ridgewell(JRL), Erik Marks (EM), Richard Gibson (RGN), Whymarrh Whitby (WWW)

## Module Attributes Update

MBS: A couple people to introduce for the champion group for modules. We have DE, DDC, SSA. The four of us have been working on module attributes.

DE: I think it’s good for us to go through the explainer, and then once we’re through that summarize the open issues.

MBS: I’ll start with a high-level explanation of what we’ve started with and what we’re going through. One of the big motivations here was trying to create standards-tracked JSON ES modules. Ryosuke Niwa (Apple) and Anne van Kesteren (Mozilla) noted there were security concerns with the proposed text, one of them being that there could be a mismatch between the file extension and the filetype that comes from the server, which could lead to privilege escalation attacks. We wanted to come up with a more general solution that will solve this and address other motivations.

DE: We didn’t even have to come up with a new syntax proposal, because this idea has been bouncing around for years, and it’s present in the tools ecosystem in various ways (e.g. typescript, webpack), so [inaudible]

MBS: It’s worth mentioning that in the past, some of the attributes that have been discussed as metadata were not sufficient to deeply explore this; it wasn’t my understanding that historically we’ve not wanted to do this, but that we never had sufficient motivation until now.

MBS: We’ve moved back to the `with type:` syntax. (presents syntax on repo https://github.com/tc39/proposal-module-attributes/tree/06270a0ada6e9a76dfe7f1b10b828384951ca063#proposed-syntax)

MF: The attributes list that you said could possibly be extended with comma and possibly other attributes later? For this proposal are you planning on adding that to the grammar?

DE: For this proposal I wanted to have spec text during the week before the last meeting, but didn’t have time for that. The host hook that we have right now to import a module would get an extra argument which is the key-value space of this, and it would support arbitrary keys and arbitrary values. There would be more constrained text on resolving the imported module that says, for example, if the value is json then it has to [...?] - but other modules can support the module cache key, and other types can accept whatever attributes that they want. The web would initially reject any attributes that are not type, but other hosts can accept whatever they want.

MBS, DE: (continue presenting repo README)

MM: Does that mean that one host might cache on an attribute and another might not?

DE: We would encourage the hosts to communicate and eventually push for more attributes to be included in 262, but we cannot prevent all such mismatches. Many environments are working on some sort of interoperability. But some might not choose to.

MM: So with regard to [...?]

DE: My understanding of the compartment API is that it’s the user of the compartment API who provides those hooks - it’s their responsibility to do caching.

MM: It’s actually not the host hook that does the caching, it’s the compartment API.

DE: Oh. So I think what we could do is have a set of module attributes that are provided to the host hook as part of cache initialization.

KKL: We might have a constructor that [...?]

DE: So point is it seems like we can work this out with compartments.

MM: Yeah, I believe that.

DE: So what do people think about these core decisions we’ve made? Namely using syntax, using keys/values instead of a string with multiple values. The essential stage 2 concern is the data model and how caching would work, how cross-environment coordination would work.

KKL: My impression is that this is good. For dynamic import(), the first argument is a container object with a list property - is there an expectation that there are other properties on that object than the with-introducer?

DE: I think that’ something we can discuss after stage 2, whether we want to have this level of indirection. If you go down to the worker section, that’s not part of the JS spec, but it would be nice to be in parallel with that. I’m not sure if we want other things in the options bag for dynamic import(), but it seems like we would want to leave that open.

MBS: One option there - another thing for between stages 2 and 3 - is having a [...?] in which case you could drop the with as an extra dimension, but I’m not sure about that.

DE: I think there are arguments for and against that. First, once you have an options bag, that should be your last argument. One thing I like is that the with keyword expresses a [...?], and that would be nice for the mental model.

MBS: I think the key decision is do we want the consistency there, but yeah I think that’s a 2-to-3 concern.

DE: I don’t want to leave everything for between 2 and 3, but I think the core discussions here are around the data model, how we work if options aren’t understood, and cross-environment coordination.

SYG: I think if you don’t allow passing arbitrary values, people will make their own arbitrary DSLs in the strings to pass information to hosts. If that’s the fear, I think it would be worth thinking that through.

MM: There’s an intermediary expressiveness, which is JSON. Where we currently allow strings, we could allow JSON values.

DE: We’ve thought about that - it becomes a little more complicated, it becomes debatable which things are static enough, because then people would want symbols, etc. So I think strings with a key-value syntax is already that middle point of expressiveness. If some environment wants to use something more complex that would require JSON, I think it would be good to relegate that to a follow-on proposal because that introduces a significant amount of grammar complexity, and that work would be better justified if there’s a compelling use case.

KKL: I think the reason that decision needs to be made now is that there’s the HTML equivalent. Currently, any attribute on a script tag that has the prefix `with` gets implicitly translated into the corresponding key value pairs of the attributes bag.

RG: I have concerns with rejecting unknown attributes as a forward compat issue. If you have a situation where all existing hosts accept an attribute, and a new host comes, you want to forward maintain compat and not split your shipped code depending on hosts.

DE: It’d be nice if all the other attributes we’d are ignorable. If we do that that precludes other use cases. For example, MF would like attributes that change the interpretation of the model.

MF: I don’t fully understand the forward compatibility problem yet.

DE: RG is proposing that unknown attributes should just be ignored, but then someone can use an unknown attribute, and if it later gets defined it’ll just break the problem.

MF: Depends on the module, right?

DE: No, I’m just saying e.g. if an attribute gets used in a transform and gets defined later.

RG: Similar to adding new arguments to new functions problem.

DE: Yeah and the web has a convention to not do that, like W3C says this.

RG: I kinda don’t know how to respond to that. If you take a bunch of dummy arguments to homestead a claim, I expect things to break in that case. [???]

BFS: A concrete example of where providing an unknown attribute would break things? My example is JSON reviver: if it’s ignored, we don’t have the reviver behavior so no expected imported types on the JSON module. If that’s the case, we wouldn’t want to ship the ignored attribute at all, which would avoid RG’s problem.

RG: I’d do the reviver inline.

DE: I think these inline module fallbacks are interesting to study. Worth looking into other kinds of fallbacks. I don’t think things that were claimed in that thread were concrete [??]

RG: I don’t think they were concrete.

DE: I’m saying the fallbacks are orthogonal. There are other examples, script tags have version fallbacks. There’d be all kinds of feature testing (e.g. are async generators there) that’d be good to do but they would be separate things. That case is like different module attributes.

RG: That’s the hazard. If the graph itself fails, then you have to ship different source.

JHD: If I have an unknown tag in an image tag, does the HTML page break?

DE: This is something we do in JS syntax vs HTML, where we are more strict and it does break.

MM: For the “use strict” directive, we purposely chose a syntax that’s ignored in older browsers to ease into the transition. Crockford at the time suggested two different directive syntaxes. One with “use”, both with quotes and without quotes. With quotes would be designed to be ignored. Without quotes designed to cause errors without support. Not concretely suggesting anything --  We could adopt a naming rule that says for a given pattern of attribute name, that pattern means if it is not recognized it should be ignored. Otherwise it should be rejected. It is a bit ugly but there is no other place to put the encoding.

DE: That’s an interesting idea. I had a different idea that’d be complementary. We can say hosts have to reject unknown things. Or we can leave to hosts to decide if they reject unknown things. They all have to support type: json, but aside from that they could get the freedom.

MM: the thing about the naming convention is it comes up every time you use the options bag, what should you do if there is an option in an option bag that it doesn’t recognize. If we can establish a convention then everyone using option bags could coordinate on that convention

SYG: In favor of giving hosts more freedom. Dan, if I reject one unknown do I have to reject all unknowns?

DE: We could say that “hosts can do whatever they want” -- but that might be too open. One piece of feedback from the committee is that at least JSON is specified. From there the rest of the interpretation could be totally open, or we could give some more guidelines.

MM: To give a concrete strawperson. If we adopt a universal convention, option names that have for example `opt` in the beginning could be optional, while everything else is required.

DE: You don’t generally read the options that the spec doesn’t talk about. I don’t really know how we would do this, would we have an option.key search for keys that don’t have opt?

JHD: That would be the way to do it.

MM: This is how we plan to do it in compartments. Options bag as a term already presumes a certain solution that I am not proposing.

<switch topic>

JHD: one of the arguments to support inline was webpack. The larger community thinks it is a terrible idea to put information inline in the specifier. There is also a linter option that bans this. I don’t think module graphs should work if the type is wrong but it isn’t consistent with how HTML works. Not convinced this should be inline.

DE: That analogy seems confused to me. In general JS is stricter about this than HTML. Do you think we shouldn’t go forward with this and block this because you have these fundamental disagreements. Do you plan to block this? We can’t solve these issues within the proposal.

JHD: I don’t want to be a lone objector but yeah my opinion is the only person who decides how the module should be consumed is the author. It’s not up to the consumer. I recognize that on the web out of band seems to be the way.

MBS: I couldn’t really think of another way to solve this problem that is teachable. I don’t entirely agree with the assessment that the consumer has no say in how to consume a module. In band or OOB seems tangential to that problem. I’d be willing to spend some time with you. Hard to think of another way that satisfies security concerns and scales up to developer productivity.

JHD: Web decided with OOB.

MBS: Import maps designed differently and scales differently.

BFS: In node we have it per path not per specifier/referrer. We should be careful about claims.

YSV: I think in-band processing is more ergonomic.

(Meta discussion about the call and expectation for preparation. How to have a more focused discussion for feedback for both champions and stakeholders who aren’t super paged into a proposal.)

P.S., (KKL) I think it would be interesting to see another base usecase, using import to obtain file fixtures, e.g., `import data from “./data.csv” with type: “file”;`
