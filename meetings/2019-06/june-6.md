# June 6, 2019 Meeting Notes
-----
István Sebestyén (IS), Valerie Young (VYG), Pieter Ouwerkerk (POK), Noah Tye (NTE), Till Schneidereit (TST), Logan Smyth (LSH), Yulia Startsev (YSV), Ben Coe (BCE), Guy Bedford (GB), Myles Borins (MBS), Domenic Denicola (DD), Jack Steinberg (JBS), Sven Sauleau (SSA), Clark Sampson (CSN), Pedram Emrouznejad (PED), Sergey Rubanov (SRV), Henry Zhu (HZU), Alan Schmitt (AS), Justin Ridgewell (JRL), Patrick Soquet (PST), Peter Hoddie (PHE), Caio Lima (CLA), Daniel Ehrenberg (DE), Anne van Kesteren (AVK), Shu-yu Guo (SYG), Ross Kirsling (RKG), Keith Miller (KM), Mattijs Hoitink (MHK), Michael Saboff (MLS), Guilherme Hermeto (GHO), Rob Palmer (RPR), Philipp Dunkel (PDL), Szabolcs Szabolcsi-Toth (SZT), Nicolò Ribaudo (NRO), Joyee Cheung (JCG), Kevin Gibbons (KG), Aki Rose (AKI), Tierney Cyren (TCN), Amal Hussein (AHN), Julien Gilli (JGI), Sean Larkin (SLN), Sathya Gunasekaran (SGN), Daniel Rosenwasser (DRR), Randy Luecke (RLE), Kat Marchán (KZM), Andrew Paprocki (API), Dr. Felienne Hermans (FHS), Mark Miller (MM), Joe Sepi (JSI)

Remote:
Brian Terlson (BT), Ron Buckton (RBN), Jordan Harband (JHD), Leo Balter (LEO), Frank Yung-Fong Tang (FYT), Mike Samuel (MSL), Shane Carr (SFC), Jordan Gensler (JGR), Robert Pamely (RPY)
-----

# Agenda

- [Agenda](https://github.com/tc39/agendas/blob/master/2019/06.md)

## Top-level await for Stage 3

Myles Borins (MBS)

- [proposal](https://github.com/tc39/proposal-top-level-await)
- [slides](https://docs.google.com/presentation/d/1K0u9QImMPK24pLVhAZHDjxI7ZVagymVU6bYWIhYQTYU/)

MBS: (outline slide) Alternative proposal discussed during the last meeting in March. Spent more time talking to people, will spend more time discussing. Implementor interest: we'll get community feedback.

MBS: (Current status slide) Current status is Stage 2.

MBS: Reviews from TC39'ers and one from outside. Detailed review from Rob Palmer & Ms2ger (non-TC39), Editor Review from Jordan Harband & Kevin Smith, Grammar Review from Waldemar Horwat, In-progress review from Georg Neis and W3C TAG review.

MBS: (Relationship to module spec slide) Important behavior: if no top-level await, same behavior at execution. If top-level await, does defer in a way that has the least amount of observable diff.

MBS: (Interaction with other specs slide). PR opened against HTML spec and WASM integration in progress.

MBS: People are concerned with cycles and interested in. If only static imports, cycles resolved. Only in case of dyn imports that cycle resolve differently. (Slide 10 with Execute C and Execute D). Can see parts that are async in the graph,. If there were dynamic cycles, not doing anything special to manage them. Could be cases of deadlock, talked about that at length during last meeting.

MBS: Proposed from webpack team. (Slide #12 - Concerns raised slide). This slide came from another gist written by sokra from webpack team. Don't necessarily agree with all this. But solutions in this space. PRs against top-level-await repo available.

MBS: (Slide #15 - Current Spec) Important that this came up. What I really want to make clear is that this came up. After criticism from import await, thing that encouraged us to have no microtask to keep graph synchronous. My belief and other people that changes we made at stage 2 alleviate large number of concerns. But there are concerns with import await too. Syntax viral. Introducing any async module becomes semver major. Personal opinion: issue with wasm module. Intro of any wasm module into graph not only semver major but also requires import await.

MBS: (Slide #16 - Concerns with import await) Import await may have some interesting use cases outside this, don't think it solves. Import Await removes ability for engine to optimize async execution. import await would force graph up to root to execute asynchronously. Running import async modules synchronously would break developer contract

MBS: (Slide #17 - Summary) Not personally pursuing import await, but not saying other folks shouldn't do that. After convos with webpack, babel, etc. PR changed to include top-level-await. Webpack team don't love top-level-await as solution, but believe it can be implemented.

MBS: Took advantage of having implementers in room this week. (Slide #20 - Implementor Interest). Got interests from all browsers and XS. Chose word interest carefully. Don't want to lean on how quickly it'll happen. Learn from yes it's important, did not hear not something they would implement. Pretty positive about this outcome.

MBS: Would be good to ask the room for feedback, clarification, questions.

DE: clarification for webpack, if you want to try webpack, import async would work. Would encourage folks new to give feedback on this proposal. Chatted with people in openjs summit about that, would love to hear from some folks.

MBS: people excited about this feature.

MBS: Can we get consensus for stage 3?

AKI: sounds like consensus, no objection.

#### Conclusion/Resolution

- Stage 3 acceptance

## Empirical Evidence for Programming Language Design
(Dr. Felienne Hermans)

FHS: How do we know if a programming language is any good? Making decisions about programming languages is much about what people like. You can also measure things. People trying to understand what and how to measure.

FHS: Many people when say science mean physics. First stage is observation. Second stage is theory. Predictive element in theory. Leads to hypothesis.

FHS: Third stage is hypothesis. You come up with an idea that you'd like to test.

FHS: 4th stage is experiment. Might be able to confirm theory is predictive enough. e.g. This is an apple and if I drop it it will fall. I can do this 1000's of time and see that it is true.
One counter example and entire theory might be gone.

FHS: How does this work for PLs? People who do research on PLs without messing with the languages. Observing what people do and forming theories.

FHS: Lutz Prechett theory: do people influence how they solve problems? Implement a mapping from numbers to strings (remember old flip phones). Input: string of numbers and words list, output: what words could that person have written?

FHS: Programming puzzle he gave to group of students. Ask to solve in their preferred PL. How to store this mapping?

Asking audience: What possible solutions to store map of numbers to strings?

Audience: array of list.

FHS: Any solution that doesn't contain an array? One thing you can use is a tree. Nodes contain letters, numbers are edges. 50% of Java students picked the tree solution. 0% of Python students picked it.

FHS: No reason for not using tree structure with Python. Has to do with culture that those PLs project.

FHS: No one picked map-like structure from Java programmers, all Python programmers used that. Illustrates how PLs are bigger than syntax, shape how people program.

FHS: Good example of observation-like study. Observation: people use diff PL languages. Theory: PL influences solution.

 1 Observation - People in different PL communities program differently
 2 Theory - PL influences solution.
 3 Hypothesis - Java programmers will solve phone book puzzle differently from Python programmers
 4 Experiment - Indeed

FHS: We don't know what the cause and effect relation is, it is likely if see lots of example code from given culture/community, influence how you solve problems. Goes deeper than syntax.

FHS: Programming languages are not natural! We design/create them.

FHS: We might need a "new" kind of science.

FHS: Wilhelm von Hoven, 1835. Contemporary doctors said: for any illness, drink salty water and you'd feel better. Von Hoven sent letter that salt is not medicine.

FHS: Johann Jacob Reuter said that yes, salted water is medicine. Von Hoven replied he tried it, didn't feel any better. Sounds a lot like programmers today!

FHS: Von Hoven's insight was that we need more people, so he put up a classified ad to get people to show up at a pub to try it out. This is know as the Nürnberg salt test of 1835. 50 participants. 8/50 had experienced anything unusual.

FHS: They had a protocol. Reported everything. Large enough sample size. Randomized vials. Control group and placebo. This was the invention of the double blind test. Had statistics.

FHS: Set the bar for how we do studies in medicine today. There intuitions lead to what is now mandatory for medicine studies.

FHS: Many doctors were against randomized controls, seemed immoral to give sick people placebo. Back to comp-sci. Controlled experiments in CS.

FHS: We could apply those methods to CS? Create artificial conditions with placebo, etc. Type systems: Stefan Hanenberg. First person to do randomized control for PL design. Held the opposite opinion of what he'd later would find.

FHS: Is dynamically typed language better than statically typed language in terms of dev productivity? Published paper: "Doubts about the positive effects of static typing" (2010).

FHS: Most studies done with students, easy access to them. Diff than pure randomized control. Two groups. One with one PL, other group with other PLs. 1st group Java -> Groovy, 2nd group Groovy -> Java. Counter imbalance in students' skills. (Methodology difference from medical RCTs works because we're measuring productivity, rather than wellness vs illness — in the medical case, once you're cured, additional treatments do not attain new knowledge.)

FHS: Learning effect: second time you solve problem may be easier. Results: Students quicker using Java than Groovy. Static types helps solve problems faster. Often, where compiler give error message would be where students using dynamic language would be stuck.

FHS: Strong effect in groovy first group. Strong effect for type errors, not for semantic errors. Students could use what they'd learn using static types in first stage and apply it to using dynamically typed language in second stage.

FHS: Other study in 2012. TS then JS, other group JS then TS. Results similar. Students using TS solve problems more quickly than with JS. Other thing: not just randomized on TS or JS. With and without code completion.. For TS code completion helps a lot, for JS doesn't really matter. Helps just a little bit. Don't know if because type system strengthen code completion. Seems code completion helps more in PL that has static type system.

FHS:  A study about Syntax: Andreas Stefik. Programming exercises in 3 PLs: Perl, Quorum (designed by author of study, similar to Pascal), Randomo (structurally equiv to C-ish languages, but syntax characters are randomly chosen from ASCII set).

FHS: Sees Randomo as a placebo language. Would expect no effect. Would not expect students to get "healthier" in using PLs by using that language. Quorum did way better in most of those studies, designed for readability, so no surprise.

FHS: Perl doesn't do great. But Perl doesn't do much better than Randomo. Sort of weird. Would think some Perl's syntax would help. Did similar study including more languages Ruby, Python, Java, Quorum, Perl, ???).. Ruby did pretty well, Python too. Perl and Java not better than Randomo.

FHS: We think of syntax as meaning. Andreas Stefik 2011. Interested how novices program, scoped specifically to novice programmers.

FHS: Research that we are doing. Around syntax and if you agreed on how your PL looks like, how do you understand your PL and how to work with it? Reading aloud: lots of studies shows that how you read something helps how you understand it.

FHS: Experiment with audience. Read silently in your brain and when done raise your hand. Two parts sentence. Read first past, then after a while the second part (on new lines).

  Sentence 1: The turtle swims ... in the lake.
  Sentence 2: I have a tear ... in my pants.

FHS: Didn't time it. Reading the second sentence should have taken longer.

FHS: Process called subvocalization, reading silently in your brain, really hard to suppress. Can conclude when words sound ambiguous comprehension suffers.

FHS: What about keywords? If code sounds ambiguous in your head, does it impact understanding?

FHS: How do you say "x = 5"? "X is 5", "x equals 5", etc. No good mental model of what it means, how you say it. Asked to novices,: Dutch children. In dutch, letter "i" is pronounced "ee".

FHS: Some read "for i range(3) print (i)" as "for ie in range print ee". Lots of cognitive load. When teacher says "you should use i here", then students speak between themselves in dutch and use "ee".

FHS: Need experiment: one group forced to read aloud code in a specific way (english), other group is free to do whatever.

FHS: Group made to read code aloud memorized and understood syntax a lot better than the other. People said the paper should be rejected because "programming is not about syntax". Agree it's not about syntax, but you also need to understand syntax.

FHS: Elementary school teachers think it's so obvious.

FHS: Math, maybe a bit like programming, totally ok to say multiplication tables out loud. Empirical evidence could help shape how PLs look like. How we tell learners about it.

(Summary slide)

Ready to take questions...

Aki: Did you get paper accepted to conf? Did people come around about reading out loud?

FHS: Can read paper now, established work.

VYG: Wondering what working on next? Can you study our questions?

FHS: education space, forcing learners not just to say code out loud, but read code in a systematic way. Most focused on producing code, not on reading code. Experts flow through call graph/stack, makes sense for them. Not found in teaching. Good ones pick it up. Students don't know efficient strategies. Something you could practice. Has lots of impact. 2) why I'm here, running experiments in more realistic setting with JS programmers instead of beginner students. Different for novices vs. experts. Features could have diff impact on novices vs. experts.

SGY: Paper presented there mostly for students 2nd year, sometimes 4th year. Is there existing research just focusing on experts. When we debated some text, maybe we choose something that is more verbose for the learner, but could be annoying for experts. Don't know if basis on reality.

FHS: Quite some research on professional programmers. Biometric sensors (heart rate, stress level, etc.). Correlate with code that is error prone. Lots of research on productivity. Interesting but hard to do something in PL that deviates from what they're used to. E.g. Randomo effects on programmers would be hard to counter. Why we're here: how could we run this? It would be so much more valuable to get results from professionals rather than students.

MLS: Dutch students experiment: related to native language vs non-native. Most PLs english centric, how much impact on non-English speakers.

FHS: Huge impediment.Python made by dutch guy, still English feeling. Keyword "for" is bad chosen word. If I could choose one thing to change. People think about number 4. Why not "repeat"? Especially where people are struggling. Definitely think that it's aspect that is overlooked. Who knows "crash"? Can localize keywords to other languages. Useful but still issues: left to right language, indentation, etc. Should think about those aspects more. Personal opinion is: more words is better than more symbols.

LEO: Native vs non-native: English as a 2nd language, people who don't know english at all. When first learned PLs. All words were symbols for me. Had no idea what if, for, while meant. Remember learning basic. "LOAD", "CAS", "PRINT" were symbols to me. When writing tests, bdd vs other styles. Bdd more natural language. My mental model and preference, get confused by bdd style. Much simpler to interpret other style (which one, didn't get it?). Random language would probably be easier for me. Like these points of views. Really appreciate that.

FHS: Do think valid distinction between people english as 2nd language and people who don't understand any english.

NTE: My understanding, might be wrong: reading code aloud helps with syntactic understanding. When teaching kids, used Scratch. Did you try reading code aloud with Scratch?

FHS: No, didn't try it. Makes so much sense with Scratch. If they're stuck strategy is often for students to read code aloud.

CLA: Simple question: I'm not native english speaker. Learned programming before English. Did you study children that don't know English at all?

FHS: No, really hard because hard to find students who don't know any English at all. Maybe effect is different on kids not exposed to any English culture (tv, etc.) at all. If had a wish list, would be nice to be able to localize keywords. Understand it'd be super hard though.

VYG: Study on Perl and Randomo, where was it?

FHS: Was in the US.

FHS: Until I went to university didn't know what "array" meant.

YSV: Some localization happening as part of tooling efforts in Go. Localization of keywords.

FHS: Would transpile to JS?

YSV: Yes, people can use their native language and produce valid code.

MM: How better can we understand what intuitive theories people form as they're using a PL? Got a sense of why they kept writing patterns of incorrect programming. Kept asking questions/probing: found they had a diff theory than theory we used when designing the language. In some way their theory was better. Their theory would happen to work on some examples, and they would learn through that feedback. What are the theories that kids form about the world, central to our design process?

FHS: What you call theory, we call a mental model. Done some research on mental models. Did study about variables. Some kids think of it as box that holds value. Issue with this model: works with one assignment, doesn't work with more than one assignment: both values can fit in a single box. Then used the analogy of a sticker. You could run experiments to evaluate which mental model fits best. Notation on machine is what is the mental model as PL designer we want people to have.

MM: One thing that occurs a lot, somebody has clean theory of a feature. Then Counter argument: once feature present, it'll be used and understood in other way.

FHS: Could do an experiment, not randomized, but asking what people think when presenting diff alternatives. Could still inform design.

NTE: There were a bunch of studies you talked about readability and syntax. Have there been studies on programming styles, like imperative or functional?

FHS: No, if study goes beyond syntax, needs to run a lot longer. On syntax runs for 6 weeks. Interesting question: "What programming language should you teach first?". Could take 20 years. Gets increasingly harder to keep experiment study groups apart. Would be very interesting.

NTE: Also making someone programming in Lisp for 20 years would be immoral.

## JavaScript and Syntax Research Methods

Yulia Startsev (YSK)

- [slides (missing)]()

YSV: Been interested in Q: can we use empirical methods in committee in our process. How long does it take? How would I do? What kind of mistakes am I making?

YSV: Can we do language experimentation?

YSV: Started in Feb. It's been 4 mo. Do we get useful/interesting results? Does it help with our process?

YSV: Outline (outline slide):
Start with lit review: current research, what kind of research can we run, inspiration/ideas.
Current experiment
Concerns I had while doing this, some reflection
Next steps

YSV: Buse, Weimer 2010: Learning a Metric for Code Readability
Can we train model that can tell how readable piece of code is? (What they did slide).

YSV: (Features table slide) Taking inspiration from natural language. Inspired by readability analysis of natural language text.

YSV: (Outcome slide) Outcome was not intuitive. Max identifier length scored worse than shorter identifier length. Single letter var with comment scored well.

YSV: Part of hypothesis: Readability is orthogonal to cyclomatic complexity. Comparison of cyclomatic complexity and readability are interacting: found no correlation.

YSV: How bugs related to readability? JUnit: amount of bugs introduced went up as readability metric went down according to their model. Really interesting.

MM: You are overestimating the readability of the graph. Can you talk through the graph?

YSV: Releases as they rank for their model for readability. Interesting feature of this graph: JUnit going down in terms of readability, interesting correlation with more bugs being introduced. Thought that this was an interesting result.

YSV: Ew could use this as a framework to design new PLs features. (reading Conclusions slide).

YSV: Problem was: generate 100 snippets with new piece of JS is difficult, because not real thing in the wild. People not using it.

YSV: University of Israel: did a gamified version. Timer to solve problem. 10 lines piece of code, need to determine output. (Showing example snippet slide - Shallow versus deeply nested conditional expressions involving || and &&).

YSV: Talked about determining how hard something was.Determining how snippets/participants performed. Broke down the math they used to do this. "i" is subject, "j" is problem. Theta of "i" is the ability of a participant. Beta of "j" represents the difficulty of problem. Found interesting you could do that. Equation on right is comparison between difficulties.

??: What are Phi and Beta?

YSV: Theta and Beta. Theta is the ability of participant, Beta is the difficulty of the problem. Interesting these things exist as stats tools.

MM: Does the paper explains how they came up with that formula?

YSV: They explained which models they used.

YSV: (showing Table III slide). Tested a lot of stuff there. Looking promising.

YSV: Read another paper: [The Effect of Poor Source Code Lexicon and Readability on Developers Cognitive Load](http://veneraarnaoudova.ca/wp-content/uploads/2018/03/2018-ICPC-Effect-lexicon-cognitive-load.pdf)

YSV: Uses FMRI, how closely does the FMRI correlates with what programmer say is difficult to read? Lot smaller in scope: 7 participants. 4 snippets of code. Cut down to 3 because too exhausting. (Experiment setup slide). Changed code to German to see what impact that'd have. 3 clear interventions: control and several different modifications on that.

YSV: (Talking about workflow at bottom of experiment setup slide).

AKI: Can you give one sentence definition of poor source code lexicon in this context?

YSV: No.

YSV: Interested in code snippet number 4. Didn't want to study stuff they were looking into. Wanted to look into how proposal interacts with that kind of stuff. Proposal was the thing I was trying to test. Said ok I want to borrow from how they test this.

YSV: Was worried needing to use a lot of devices. But can actually ask people, cheaper, better for privacy, etc.

YSV: What did I do? What are we getting into? (What is going on? slide)

YSV: I wanted to know "what are we getting into"? Looked at current proposals Pipeline Operator, do Notation, and Partial Application. I talked to all the champions, they were all willing. I settled on Pipeline Operator.

YSV: Injecting small bugs, single bugs per snippet to understand how people performed in finding those bugs. Needed a clear question that proposal needed to figure out about syntax. Needed to have clear examples, why I settled for pipeline operator.

YSV: Smart pipelines and abstract pipelines had very detailed examples. Gave me a great starting point. Showing example "with smart pipelines" on left, "status quo" on right.

YSV: Did a pilot with 10 participants. There were 2 primary versions. No one who did the test knew what the pipeline operator was. Used snippets that you would likely find in code and the other was against a known domain "pickles" style.

YSV: We aren't testing if these people can do the math or the logic, I wanted to test their ability to understand the logic.

YSV: Don't have solid evidence that using pickles better than using real code, but went with that.

YSV: (Showing "task order" slide. Talking about workflow diagram)

YSV: Clarify what pickles refer to?

YSV: Examples themselves: "we're making pickles, here is the recipe".

YSV: Mistake right off the bat: testing too many things.

YSV: (showing "Branches" slide)

YSV: Two versions of control code: nested version and the other a sequential version. We can already do this in JS. Tested against each other to see how they perform. Asked to do a free refactoring of the code.

YSV: Then, tested each group alone vs proposed syntax. Nested versus proposal 1, nested verses proposal 2.

YSV: Snippets functionally identical. Looked a lot alike. (showing "Snippet generation slide").

(Next slide with four snippets highlights where errors are in red rectangles.)

YSV: Preliminary results: look at the slides later if you want to get a general overview. For nested snippet: What I asked initially: how often do you see this in given codebase? For sequential snippet: same question, very different results.

YSV: Two of them performed about the same in the bug hunt exercise.Average time between them very similar.

MM: None of us can read labels on pie charts. On left two colors that together make up. Can you explain one region on right and two regions on left?

YSV: Left: one region is line 10 other is line 11. Could solve problem two different ways.

DE: Are we talking about the pipeline operator?

YSV: These are the controls.

YSV: Results with proposals, with pipeline operators being compared to control code.

DE: Can you clarify what is variant 1 versus variant 2?

YSV: Variant 1 is the f# pipelines and variant 2 is smart(?) proposal

YSV: One proposal being compared two one of the control variants. Always preferred proposal over control code. After survey they actual preferred the proposal more.

YSV: I also asked them to read ugly code and asked them to identify which parts were difficult to read. Interesting breakdown of what people found hard.

YSV: Did same thing with other proposal. Very different spread. Density of operators stood out with proposal #2 and ugly code.

YSV: Third branch was comparing three things, control versus two of the pipelines.

YSV: Overwhelming response: pipeline with hash is preferable for people.

YSV: Problems with design: became aware of them as experiment ran. (showing "Problems with the design" slide).

YSV: Found that snippets actually privileged abstract pipeline operator. Could tell because people solved bugs significantly faster.

YSV: But the example for the smart pipeline was a bit contrived as I was trying to get it to match the F# example.

YSV: Ended up privileging one proposal over the other. Found very easy to introduce odd little bugs to smart pipeline operator. Had syntax suff different from JS syntax. Don't know if those were valid interventions, because didn't sit down with people. I think this could be done better. As first time doing this, getting feedback on what I did wrong is interesting.

YSV: The last thing is that the proposal introduced two new syntaxes, but we didn't test the new functionality with the syntax.

(Showing "Reflections" slide)

YSV: Asked people if they considered themselves experts or advanced. More useful to look at result of the first test. People who were experts got all the questions right, others were not in bucket of experts. More useful than the label.

YSV: I wasn't able to gather demographics beyond whether they consider themselves experts or not. I was constrained due to privacy concerns of more detailed demographics.

YSV: Solution to this: didn't know how to solve it and didn't have enough consultation.

YSV: Too many branches, would recommend to narrow the scope. Lots of places where people could write whatever they wanted. Long form feedback sections are super interesting. Recommend we always have post-survey feedback thing because people provide feedback on things we didn't think about.

YSV: The survey tool that I used was insufficient. If you want to do something like this, don't use SurveyView.

YSV: 60% people dropping out of the survey because lots of people complaining about no mobile view.

YSV: Advanced vs beginners: same tendencies towards preferences (which proposal they preferred). Data not as strong, but interesting. Shouldn't draw any conclusion about this work, just interesting to see what we could do.

MM: What do the numbers (experts versus beginners) on the last line mean?

YSV: The probability that they got the question right.

YSV: Shouldn't be a requirement for any proposal at this time. Should continue to build expertise on how to do this. Going to take some time, there is a lot to learn. Could develop template that we could use. Experiments should be added information, should not be criteria.

(Showing future experiments slide).

YSV: If useful, might continue to work on it. If not, we don't have to.

YSV: One thing that was really interesting to me was designing the experiment.

YSV: Is it useful?

NTE: THis is really cool. One thing that I noticed is something that MM said is that programmers don't learn by reading the manual, they discover how through empirically.

The results of this experiment might be dominated by the efficacy of the education around the new feature, rather than the efficacy of the new feature. That is, we are measuring the education of the feature rather than the feature itself.

YSV: Good point. Would be interesting to have something like interactive. Don't think lots of programmers work in that way.

JRL: 2 questions: 1) do we want to use this data for pipeline operator?

YSV: No.

DE: What do you recommend as the next step? Is there meaningful data?

There is interesting info there, don't want us to draw conclusions, but e.g. Long form answers are really useful, but there are 800 of them. We could rework survey to have corrected examples and do thing with timing again. Not sure about validity of it.

DE: I suspect that you are being a bit conservative. You got a lot of data, I think we can use the results. I would not throw the results away. I really like to see this work continue.

YSV: Super happy to share the data. Have multiple exports of data. You can take a look directly yourself.

DE: Alright thanks, that will be great.

YSV: Feeling a bit down about this, so I was like "totally understand if this is flawed". But if people want to work on it to improve, totally happy to work with you.

AKI: It is flawed solely because we don't have the space and time to make something perfect. That doesn't mean it's not incredibly valuable information. I'm with you regarding avoiding using this information rigidly or as an absolute rule. I agree with DE. You're being overly conservative about the value of this info. Even if it's not black and white, it gives us lots of insights about what JS devs are doing.

YSV: Yep, okay. I think that is a very valid point.

Appreciate that you listed out caveats and had conservative stance. We have done similar things where we talk to users where we try to get evidence based results., Sometimes they're inconclusive. Sometimes we have a gut feeling that something is not right. Will echo that we should look into results, even if you think there were problems: a) still some good results in there and b) good foundation that we can continue to refine. Basically my vote of support for this to continue.

YSV: So is there generally an interest in trying this again?

(Lots of thumbs up)

YSV: other questions?

DE: listing caveats very good and should remember current caveats of our current methodology.

VYG: Sometimes feel that it's hard for me to tell if proposals are useful or if pet project of a group of devs. I think this is a great way to try to solve this problem. Result most interesting to me: heavily nested function calls and people saying "never saw anything like this". Interesting that we are sometimes distracted by niche use cases. Fact that this was brought up is cool. Not asking about solution but what are the problems? Are the problems we're trying to solve actual problems?

YSV: Yep. I was also thinking of this when I saw the results. Especially when I looked at the example. I made it look like something I have seen. We might want to validate other proposals in the same way to see if there are real issues.

RKG: One of your last slides, you mentioned something to the effect that experiments could be conducted at different stages. Would be interesting for evaluating both how important a problem space is as well as which solution (or neither) is best.

MM: With regards specifically to syntax I don't think that we should specifically say that this is required. But we should say that the "evidence" bar should be high. There is no one form of evidence, but this is one type. There is the overall comprehensibility of the language. The goes down with more syntax. The fewer ways that are to do something, say a function call, the less ambiguity there is. The more ways there are to make a function call, the more difficult it is to understand. People learn through examples. Where something was an error, we tend to add syntax there. Adding new accepted syntax there, we make things more difficult.

YSV: I agree that we should be deliberate and careful about adding new syntax. Experimentation like this and further understanding how to do this would get us a long way there.

DE: we talked a lot about cost of adding syntrax. Wondering what sort of data. We did decide several times that it's worth the tradeoff. Wondering what sort of data would be persuasive about making this tradeoff?

YSV: I don't want to draw conclusions from this, Did find interesting feature: still preferred having the syntax even though ???. Maybe people see this useful somewhere else. Overwhelmingly people do prefer having that syntax. Not sure if it's a good reason for having new syntax. Not sure they know the impact. Not sure what they're actually saying. Doing the work gets us to ask more questions. Might not have more numbers, but instead night have something like :"that's interesting" and after a few times we have good numbers.

DE: I'm also wonder, MM has always said this. That adding syntax increases complexity. I think that adding syntax make it more understandable. I really want us to determine which of our intuitions is right. The committee struggles with determining who is right. We need to answer this meta question and maybe studies like this would help to answer these questions.

YSV: To answer that Q, we need to do more of this work,. Let's do more work and find out how to answer that Q.

MM: I agree that cost vs benefit is not something that I have objective evidence to point to. Sufficiently broad question phrased that way. What would it mean to get better evidence for one hypothesis vs other. Kind of studies we're talking about here are evidence. Would want to continue to raise the issue I was raising about other costs that studies are not highlighting. Also sensitive about other benefits. Issue about what users say I don't take it as ??? Issue about what theories do they form, in particular the degree to which it makes programming more or less reliable. Central issue to me is to make programmers program more meaningfully. That's the ultimate test, but not possible to probe and that's what we should be probing.

KG: So one kind of data that I think is useful is asking what fraction of people would adopt this syntax for 100% or 90% of the time to solve this problem. Async await is an example where if I had it, I would use it all the time. There are other times when I look at a proposal I think that I would use it some of the time or maybe not.

YSV: Excellent comment. Something we can try.

TST: I agree with KG. Only makes sense...Should only answer in pair with what does using the feature compared to control impacts what errors people make.

YSV: Did have interesting evidence about that in survey. When error was in smart popeline,m people more likely to not see the error. Also about how I did it, which is why I was worried about showing it. Needs to get better insights. Know a lot more now about what that should look like, I think we can do better next time.

## Lookup constructor.resolve only once in PerformPromise{All, Race}

Sathya Gunasekaran (SGN)

- [proposal](https://github.com/tc39/ecma262/pull/1506)
- [slides](https://docs.google.com/presentation/d/1yH7JhJbINGdhNu6ptuPNpoeJthsICmDdpXfLK6vEUys/edit)

SGN: (Background slide)

SGN: (Problem slide) Problematic because invoke operation does 2 things: 1) get and 2) call. Engine to optimize away lookup and call has to check on every iteration if constructor modified or not. Instead better to hoist the get to happen once outside the loop.

SGN: Matches what you would expect. Unreasonable to change while iterating over the elements. Think it'd be ok to ship that change semantically.

SGN: (Slide spec change) In loop, just do the call. If someone monkeypatches the resolve method, still work. Only not work if someone monkey patches while iterating, which is weird.

SGN: (Current status slide) Implemented in V8 to get web compat data. Should know soon if web compatible.

SGN: Do we have consensus? Sounds like we do.

#### Conclusion/Resolution

- Consensus achieved;
- Merging #1506.

## WeakRefs

(Sathya Gunasekaran)

- [proposal](https://github.com/tc39/proposal-weakrefs)
- [slides](https://docs.google.com/presentation/d/13I2S0B4noZpkNqUKOmMS4fEqEwXoANYjju8feWL8kcs/edit)

SGN: (Slide 2 - Background) Stage 2 proposal. Two new APIs. WeakRef and FinalizationGroup.

SGN: Don't want to go too much in details in the proposal. Talked about it at the last meeting. Want to talk about changes we've done since then. Want to give background on what read consistency means. (Showing Read Consistency slide). Second deref cannot fail if first deref succeeds.

SGN: Need a way to keep object alive until end of task. Don't always have to keep checking if null or undefined. Two diff mechanisms in spec: 1) KeepDuringJob. (KeepDuringJob slide) and 2) ClearKeptObjects (Slide 5 - ClearKeptObjects).

MM:: Sathya was saying embedders call this. This thing needs to be called only between turns, not during turns.

SGN: Spec clearly states that this shouldn't be called during a synchronous turn.

DE: We're following these invariants in HTML when logically the JS execution stack is empty after running through all promises tasks. Can iterate on wording in spec.

SGN: We do have the same goal.

MM: as long it's the es spec that says it cannot happen during sync execution.

SGN: For finalization part, we have HostCleanupFinalizationGroup operation. (Slide 6 - HostCleanupFinalizationGroup)

SGN: Layering changes. Thank you everyone for all the help. (Slide 7 - Layering Changes).

SGN: Other minor changes. For cleanup callback we need a realm because running arbitrary user code. Why there's a native context in V8.

SGN: (Slide 10 - What happens when next() is called ...) Other one is what happens if you leak the iterator. Decided to throw if you iterate outside of finalization group.

TST: Leaked iterator Q: called by the host, if you call next on iterator that leaked?

SGN: Yes

SGN: (Slide 11 - Liveness of an Object) Those were the issues that we fixed in the spec. So here is an example where we create an object and then we create a weak ref. We want some guarantee that this will never fail. Where we create a weak ref and then await. That would mean that the weak ref would become null and the assert would fail. We want WeakRef.p mean "this" pointer.

SGN: Something along the lines of side effect. "Liveness of an object" slide. Never used the object itself, and call the log method. Here compiler could inline log method. Not preventing optimizations here. Follows from previous example, not contradictory.

SGN: Summary: (showing invariants and memory model for garbage collection slide). Should not block us, this is why we have stage 3.

(Current status slide) Thanks for the help on the readme. Implementation work in progress in V8.

MM: First, I'm in favor for stage 3, really like we arrived on example. Want to state explicitly requirements that we need to satisfy for stage 3. For the motivating use case like JS WASM, basic collections abstractions, enumerable weak key maps, etc. guarantees about where I'm not collected must be so that we can write correct code. Might be adequate to add that as investigation. Have to find the sweet spot between allowing optims and still allowing us to write programs we can reason about.

SGN: Yes, I think that is fair enough.

How people feel about

AVK: feel good about stage 3. Wondering for html I think we end up doing at the end of draining microtasks queue. Wondering if other host envs do that differently if there is a risk to write non portable code. If you do Promise.resolve it might not work there.

SGN: Is it different problem ? It's the same problem with promise microtask queues.

DE: During stage 3, have good semantics in HTML. Might want to refine invariants we document in ecma spec to guide more envs towards that pattern. Would be happy to discuss html semantics further to clarify requirements.

MM: I'd like to hear that

AVK: Yeah, I don't want to block this.

DD: want to second what Sathya was saying. Timing issues aren't worse than promises and probably significantly better. Not reliable whether stuff is GCed anyway.

DE: We had important reasons why we settled on semantics we did.

TST: For await of, is an example where optimizing implementations will turn multiple awaiting resolved promises will turn this into a loop. If we allow finalization interspersed with promises, we disallow that optimization.

DD: Allowing finalization doesn't mandate it.

DE: What spec does we disallow finalization interspersed.

DD: If you say you can finalize all the time would still be performant. You never know when finalize happens.

DE: Well motivated to be more restrictive as it is today.

MM: I want to raise an issue we have. For..of is a great example of hazard we should be aware of. Might be things that are already, resolved promises that are awaited that you don't have to yield to event loop. When writing for..of, you should write it assuming that at every micro turn there might be a collection, unless you have specific knowledge that promise you're awaiting is already resolved. If depending on this knowledge, depending on something that's not clear from the code. Even if finalization actions happen between micro tasks, programmer might find that experimentation with language might support more naive theories.

DE: Fortunately we see a really strong attention to detail. In the web platform there is detail ensuring a level of consistency putting what thing into what state. For example in the Wasm model, we create a queuing task for compilation, even if we don't need it.

SGN: quick point: when you talk about jobs, don't want to get into the weeds of what jobs queue is right now. Can we go for stage 3?

LEO: Quick point of order. What does pending one editor mean? Would like some clarification.

TST: if that reviewer doesn't provide feedback that requires more than editorial changes, then stage 3. If more than editorial, then not stage 3.

DE: Sounds great to me.

LEO: Thanks for the clarification.

#### Conclusion/Resolution

- Stage 3 acceptance (pending one editor (KS).)

## Continuation of Layering Job Queue

(Daniel Ehrenberg)

Same as previous presentation re: Layering Job Queue
No slides

DE: MM and DE followed up earlier, agreed that this will be correct & semantics-preserving, and DE will submit a patch for the version with individual host hooks per operation. There's some improvements to make wrt the weakRefs spec.

DE: Anyone have any recommendations re: earlier JobQueue topic?

DE: From here, we can work with the editors and MM and land this without further review from the committee.

#### Conclusion/Resolution

- Concluded that the multiple host hook approach (e.g., HostEnqueuePromiseJob) preserves the current semantics, and that we agree to make this change.
- DE to work with the editors and MM and land this; no additional review from the committee as MM had the only concerns

## Note taking

VYG: talking about to make notes taking easier. We have a few questions for the committee. Think that it's going to be ongoing convo. We're going to open an issue on reflector to talk about that.

VYG: Ideas: make sure there are 3 note takers before a topic starts. Seems like 3 is a good number. Will ask for general advice on the issue on GH.

VYG: Other question: open question, whether to take notes during presentation section. We feel we might never read those notes. Do people feel like we should take notes during presentations? Don't know if necessary.

MM: Extra variable: sometimes when I presented, I asked permission to record presentation. Then put it up on youtube. Generally an option that people should know that they have. Separate question of whether recording should continue through the discussion.

TCN: Any other feedback on that?

Specifically transcribing vs recording presentation.

On topic whether take notes during preso, most time there's an element of when I present it'll be more obvious. Without any context you're lost in trying to regain context. I think transcribing would be helpful.

GHO: Why not always record presentations?

TCN: Been looking at TC queue, thinking I can build automatic transcription. Mostly want to get feedback if folks willing to have automatic transcription. Would like to provide toggle to stop transcription. Transcription not perfect, especially for technical terms. Would like to have ability for people to edit, for accuracy and representing intent.
The intent there is to make sure that every word that is being said is transcribed. We expect this to be relatively simple to line by line say who said this.

TT: I support this. I think it's important to not store the recording itself, but the transcript only. Same as now, only publish things after review. In case you are interested, talk to Yulia who has been looking into this.

YSV: I did a prototype with Google Transcription. Basically same idea, think it'd be awesome.

TCN: Any objections/concerns with doing that?

VYG: Makes sense to bring as issue on reflector.

MLS: Don't so much have a problem with transcription, but with recording, there might be issues with privacy.

TCN: Would not record presentation, would record straight to text.

AKI: Going to mention that in the [how we work repo](https://github.com/tc39/how-we-work/blob/master/how-to-take-notes.md) we do have a doc entitled "how to take notes". It needs updating—mostly things haven't changed, but we no longer use EtherPad so that needs to be updated. Can't imagine we're going to have transcription tomorrow, so if anybody wants to update How We Work that'd be awesome.

VYG: going to open issue on reflector for human transcription. Draft of what process is now, and people can comment with suggestions. Then will move it to how we work document. Tierney will post about automatic transcription. Still confused about taking notes during presentations, but can open an issue on that.

YSV: Maybe policy we ask presenters whether they want notes to be taken before presentation?

LEO: We've discussed a lot in meetings and reflector a lot about automatic transcription. Reached out conclusion several times it's bad for several reasons. Being verbose is more work for who is taking notes. More work for people who read notes. Aki asked to be less verbose about taking notes, and it's in notes. Transcription is ok, but what I want to see is technical context, don't want to see typos, etc.

TCN: Are you talking about manually taken notes or notes with automated transcription?

LEO: People working hard to note everything, people shouldn't do all that work. Instead capturing context of what being said. Should be easier for note takers and for readers.

TCN: I took notes my first two meetings and it was a lot. The purpose of automated transcription is to reduce the burden, not increase.

Lots of people reading notes. Way for us to reach out to the community. 3 days of people talking, too much.
We've discussed this before, we've had several discussions of this. I understand people couldn't participate in the previous discussions, but, it's bad. We can't bring the burden to whomever is consuming it. Lots of maintenance being done.

TST:  Could make things easier to navigate. Could move conclusion up. Disagree this would shift work on readers. Huge issue that only taking summary version of what was discussed: what you get is not what was discussed, but what note taker understood. It turns out there are often very subtle things where the note-taker might misunderstand subtle things. Very verbose note-taking attempts to mitigate this problem.

YSV: Something that can be addressed with editing. We'd have people who would edit. Removing repetition, fix any issue with misspelling, bugs. And add names. Would contribute to accessibility for remote folks. If someone doesn't hear or checks out, they'd be able to know what happened

LEO: Once again, as someone who reads whole minutes, lots of things we need to format for markdown. Even with automatic transcription, would make my best to make notes more contextual. Community deserves better notes, needs to understand context without too much work. Make sure meeting notes are true to actual context.

TCN: Not clear if docs are contextual, do we take notes during presentations? Seems to be 2 groups who feel diff. Tangential to the subject we're discussing. Decision as a group, but separate issue from technical impl of taking notes.

DE: I want to say I appreciate all the work going into taking notes. From the notetakers here, to the work done by RW and LEO. Also summary and TOCs. Especially useful to know who made particular argument. Recent discussions: history of optional chain you can see many things that were said and really helped those who needed to figure out what changes to make. Really helps to understand where folks are coming from.

Still want summary of technical points. Not going to be able to ???

DE: Maintaining status of proposals not necessarily related to what's presented during particular meeting. If we want to keep community updated on proposals status, would be interesting to pair people who document things with champions Something we're trying to do with the outreach effort.

POK: I think this is a great idea; I take a lot of notes & appreciate any infra improvements. In order to really make this work, if we have an audio feed that's being transcribed, there has to be some sort of collaborative editing on top of that. That seems like a very difficult problem—

Aki: That's a stage 2 concern!

POK: I personally wish I had time to work on this, I appreciate that you're taking time to do this.

TCN: Collaborative editing and attributing is something that I'd like to do, it's a requirement.

YSV: Doing reading notes for 2 reasons: annotations for Rationale project, and doing my own summary for people I need to update. Prefer higher granularity. Sometimes unclear why we came up with decision. Sometimes manual transcription leads to inaccurate notes. Don't think we need notes at the level we have right now, think we could have an editor that could make those adjustments at that time.

TCN: Would love to chat with you to address your comments

## How we work

(Yulia Startsev)

- https://github.com/tc39/how-we-work

YSV: We're considering making How We Work repo public. I think we have a lot to be gained by making it public.

POK: What's the URL?

YSV: github.com/tc39/how-we-work

AKI: Can we make it a wiki?

DE: No, I really like having reviews and PRs. You can see other big wikis like MDN moving to a PR-based model.

AKI: don't know if you know this, but GH wikis are Git repos.

DE: I'd rather keep it a GitHub repo.

YSV: Getting back to topic of publishing this. Don't have anything secret in that repo. Have people gone in content of that repo?

YSV: Had a few yes. How do people feel?

(lots of yes)

YSV: Anything from remote?

YSV: Let's move forward on making how-we-work public.

AKI: I mentioned how-we-work in newcomers meeting, want to reiterate it's a good way to find out about something you don't understand about tc39: create a doc, do the research and document it.
