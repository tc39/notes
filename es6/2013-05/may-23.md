# May 23, 2013 Meeting Notes
-----

John Neumann (JN), Allen Wirfs-Brock (AWB), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Luke Hoban (LH), Doug Crockford (DC), Yehuda Katz (YK), Sam Tobin-Hochstadt (STH), Alex Russell (AR), Dave Herman (DH), Bernd Mathiske (BM), Andreas Rossberg (ARB), Mark S. Miller (MM), Tom Van-Cutsem (TVC), István Sebestyén (IS)

-----

## Promises vs Monads

MM: ...Continuing from yesterday

AR: https://github.com/slightlyoff/Futures/blob/master/Promise.idl

STH: Don't like resolve but not willing to die on this hill.

AR: DOM has a bunch of ad hoc APIs to do promise like things.

YK: Mozilla is also actively working on APIs using promises.

AR: A lot of methods today return void so we can change these to return a promise. This is forward compatible.

AR: then does recursive unwrapping...

## ES6, ES7, ES8... Mark's Strawman Roadmap

LH: The important part is not the features but the process.

AWB: Can things be decoupled?

LH: These kind of structural questions are the important part

MM: Suggests "concurrency" to be the main theme.

AWB: Thought about the event loop. All we need is a processing queue... put things in the front and the back.

DH: Only need to add to the back.

AWB: OK.

STH: The callback is called at some later point.

AR: Don't think we need to specify the order.

STH: If we are going to specify promises etc we need to be able to specify things in detail. We can be loose in ES6 and then come back in ES7 and provide a more tight spec.

DH: We could specify the pending events as a set or something. Not sure if there is a consensus that we want a fast small ES7. Not opposed to a modularized approach.

AR: Are there any browsers that are not shipping stable ES6 features today.

YK: Yes. V8.

AWB: Where we have problem today is that there is a lot of interdependency.

MM: These ("concurrency") are coupled together to the event loop

AWB: We can do it as a separate non 262 spec

DH: Opposed to a separate spec. Introduces versioning confusion.

AWB: Roll up

DH: Think of all the extra overhead.

STH: Big difference with 402 since it was run by different people.

LH: Lack of confidence in new features has been an issue for implementers. Good exceptions were `Object.observe` and `Proxies` where the wiki contained a mostly complete spec.

AWB: We need to have wiki proposals be deltas to the spec.

TVC: We could have "stable" wiki pages. These would have complete spec deltas.

DH: Very concerned about over modularizing.

AWB: We need to find a way to work faster and be less monolithic.

DH: Agree. ES6 process has blocked implementation work.

LH: We are not committed to our designs.

STH: We are not resolving issues until we start to spec. We are not getting feedback until engines starts to implement.

EA: The problem is that we didn't start to spec things until very late. We had agreements on features long before there was any spec drafts for them.

YK: More from our champions before we get to concensus.

ARB: Lots of the proposals were very vague.

AWB: The more complete spec you bring to tc39 the better chance you have to reach consensus.

ARB: Lack of early spec leads to lack of early implementations...

AWB: ...which leads to lack of feedback.

LH: Not more work, just doing the work earlier before things pile up too much.

DH: Need to look at the dependency graph. Hold of the work of later feature.

ARB: We need to higher bar before we accept proposals.

MM: What we agreed to 2 years ago was that the features are the one we want to spend work on speccing.

LH: Less features to bite of.

DH: A lot of us have a hard time not getting too engage in too many features.

YK: if we focused more effort on managing the overall complexity instead of getting stuck on a lot of technical discussions (and nit picking).

DH: `Object.observe` and `Proxy` moved fast but are fairly isolated features

TVC: Didn't involve syntax.

AWB: With ES6 we had a long backlog.

DH: A language will have smaller and smaller complexity budgets as it grows.

AR: ES future needs events

DH: Since this is Mark's wishlist people will throw in their pet features.

MM: This is the direction I am going to work.

LH: There is a page on the wiki outlining the goals.

LH: Looking for 2 things: Something that would allow earlier implementations. Have not brought proposals (over the last 2 years) because we have been blocked by ES6.

LH: When is the appropriate time to bring new proposals to TC39?

AWB: We are free to do what we want. We can issue 6.1, 6.2 etc or technical reports which would serve as a recommendation.

DH: We cannot exclusively work on ES6.

YK: Time at f2f is the most important. Champions can go off and do what they want.

DH: Suggests adding non ES6 items to the agenda. We will prioritize the non ES6 stuff we can get to given our limited time.

YK: We should reinstate the rule that agenda items needs links to wiki pages.

YK: Spec language is good but examples at the top are a must.

ARB: Add step after proposal. For example "stable" or "spec" which a proposal gets promoted to once there is a spec draft, good enough to start implementing.

DH: Strawman: Anything goes.

YK: Proposals used to mean approved.

DH: 3 sections: strawman, proposal, spec/candidate. Keep strawman. Work on improving as a proposal, and when mature enough promoted to next level.
