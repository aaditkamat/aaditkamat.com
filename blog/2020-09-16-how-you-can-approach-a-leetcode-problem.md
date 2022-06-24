---
slug: how-you-can-approach-a-leetcode-problem
title: How You Can Approach a LeetCode Problem
author: Aadit Kamat
author_title: Software Engineer @ Visa Singapore. Opinions are my own and not the views of my employer.
author_url: https://github.com/aaditkamat
author_image_url: https://avatars.githubusercontent.com/u/30969577?s=400&u=9558fc3557d79c88a7080034fe8c22654aca2e4d&v=4
tags: [coding, interviews]
---

I’m by no means an expert at Leetcoding. Dynamic Programming problems in particular trip me up a lot. Nevertheless, I thought that I’d give it a try and share the way I go about solving a problem on LeetCode, especially if I’m not on a time crunch.

Truth be told, I’m not a big fan of the [LeetCode grind](https://leetcode.com/discuss/general-discussion/366193/losing-motivation/688434). This kind of an approach seems very similar to that required for solving Competitive Programming problems, where you are given the constraints on the inputs and outputs and you try to go for the most optimal solution that is not only efficient in terms of the order of time and space complexity i.e. the complexity of the solution expressed in the Big-O notation, but in terms of the limits imposed by the platform.

<figure>
<img src="https://miro.medium.com/max/1400/1*iXpPNZ0mu44gyJtomvg0lA.png" alt="Problem statement with examples for a sample LeetCode problem" />
<figcaption align="center"> Problem statement with examples for a sample LeetCode problem </figcaption>
</figure>

Instead, I like to think of a LeetCode problem as it would more or less appear in an interview. Yes, you don’t have an interviewer with you to help clarify your doubts, but you can take note of them before you go ahead with designing a solution. It’s even better if you use LeetCode problems as you conduct mock interviews with your friends, since your friend can play the role of an interviewer. Start by looking through the problem statement and examples, then <b>write down your assumptions.</b>

<figure>
<img src="https://miro.medium.com/max/1400/1*S2BtsRUSVK1b7ZQsEuAjXw.png" alt="Problem constraints" />
<figcaption align="center"> Problem constraints </figcaption>
</figure>

You should ideally do this even <b>before you look at the problem constraints</b>. This is because interviewers tend to pose the interview problem with slight ambiguity in order to give candidates the opportunity to ask for additional clarification. As a result, they would not generally start by specifying the problem constraints.

Once you have written down your assumptions about the problem, go ahead and check with the constraints of the problems to see if those assumptions are met. If they do, then that’s great. Otherwise, you may get additional insight about the kind of edge cases that you may have missed out on.

Once you have clarified your doubts and checked your assumptions, <b>try to come up with a brute force solution and not search for the most optimal solution at first</b>. For easy problems, this will usually work. However, even for the harder problems, coming up with something that at least works is better than nothing. Also, this brute force solution gives you an opportunity to discuss why this solution is inefficient and may serve as a guide to a better solution.

<figure>
<img src="https://miro.medium.com/max/1400/1*P0Nhu_AfJ8fbeSSUDbIU2g.png" alt="Related Topics, Similar Questions and Hints" />
<figcaption align="center"> Related Topics, Similar Questions and Hints </figcaption>
</figure>

The next step now is to optimize your brute force solution. This is often done with the help of some data structures or algorithmic patterns. If you are stuck at this stage, you can look at the Related Topics and Hints (if available) sections of the problem. This is sort of the equivalent of asking an interviewer for a hint. From what I know, most interviewers are ok with giving hints as long as you have explained your approach thus far and where you are stuck. If your interviewers are nice enough, they may be willing to help you out but don’t go about solving a problem with that assumption.

Hopefully, looking at those sections has given you a fair idea for an optimized solution. Once you have done that, take out your whiteboard (or if you are like me and don’t have a whiteboard, use pen and paper instead) and go about writing your solution over there. Trust me, the experience of “whiteboard coding” is much different from using an editor, not only because you miss out on the syntax highlighting and code completion, but also the core editing features such as copy and paste.

Once you have done that, run your solution through a couple of cases, which should be a mix of the given examples (for sanity check) and some other cases, including edge cases, that you have identified when you came up with the assumptions. Make sure you do this manually and not using the LeetCode console at first. This allows you to spot the bugs in your code and address the problems in your solution. This also saves you from having to edit your solution multiple times.

<figure>
<img src="https://miro.medium.com/max/1400/1*Rf4ufh6V7-3MQ0ozLH1NaA.png" alt="A solution with time and space complexity specified" />
<figcaption align="center"> A solution with time and space complexity specified </figcaption>
</figure>


Once you are confident that your code works and is efficient to the best of your knowledge, write down the time and space complexity for your proposed solution. This way, you have a clear metric to demonstrate how the current solution is better than your previous solution and also discuss the tradeoffs should you have any alternate approaches.

Now that you have tried everything you possibly could to get to the best solution, it’s time to test your code with the cases that you have come up with. LeetCode premium users can make use of the debugger, but in my opinion, it’s best to stick to the console. This is because it is unlikely that you would be allowed to use a debugger for a real interview question. If you get an error for a particular case then try to go through solution again manually. If that still does not help you, you have no choice but to use logging techniques to debug your solution.

<figure>
<img src="https://miro.medium.com/max/1400/1*6LHBCNE3sHtv1RSfF3ICMw.png" alt="Discussion section for the sample problem" />
<figcaption align="center"> Discussion section for the sample problem </figcaption>
</figure>


<figure>
<img src="https://miro.medium.com/max/1400/1*6LHBCNE3sHtv1RSfF3ICMw.png" alt="Official solution for another problem" />
<figcaption align="center">Official solution for another problem</figcaption>
</figure>

Finally, after all this hard work, if all your test cases have passed, just go ahead and submit your solution! If the solution has been accepted, well done. You can go ahead and post your solution in the Discuss section. You can also check out what others have posted or even have a look at the official solutions if they have been provided. Otherwise, you can see what test case has failed and address the problem(s) in your solution.

Don’t be afraid to work on the problem again from scratch. Chances are that you would have a fresh approach to look at the problem and that might do the trick! It’s important to remember that you learn from incorrect solutions as much (if not more) as you learn from the correct solutions.