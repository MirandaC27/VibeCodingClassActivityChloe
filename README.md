# Class Activity: Vibe Coding

Vibe Coding class activity for the CS482 Software Engineer course at Loyola University Maryland.


## Recommended Language: JavaScript

Students are encouraged to use JavaScript (frontend only), but they may choose any language they prefer.

JavaScript is suggested because:

* Fast to prototype
* Minimal setup
* Easy to run in a browser
* Great for quick game loops and objects

---

## Learning Objectives

Students will:

1. Experience emergent design through vibe coding.
2. Observe how planning decisions generate better code.
3. Practice making the LLM justify its solution.
4. See how structured SE practices can make vibe coding more effective.

---

## Team Structure

Same team as your Software Engineering Team Project, but only 1 computer. One person can code, rotate the coder at each iteration.

---

## Activity Overview

* **Duration:** 60–80 minutes
* **Teams:** 4 students
* **Format:** Plan → Code → Reflect → Discuss

---

## 1. Introduction (5 minutes)

Vibe coding is a new concept for writing code mainly by interacting with LLM.  Vibe coding does not eliminate the need for programming expertise (or know-how), but it allows developers to greatly increase their productivity (if done properly) [[Sarkar & Drosos, 2025](https://arxiv.org/html/2506.23253v2)].

The following are great tips to keep in mind when doing vibe coding [[Yang, 2025](https://creatoreconomy.so/p/12-rules-to-vibe-code-without-frustration)]:
* Start with some Project Management 
* Keep your tech stack simple
* Give LLM the right context (rules and docs)
* Ask for a solution without coding, and select or direct the LLM to the simplest one.
* Ask to break the solution into smaller tasks.
* Ask to code the tasks.
* Test ruthlessly at every change

For this activity, we will build a web app card game prototype. I recommend using simple JavaScript, but you are free to choose any programming language. 

> In this activity, I will give prompt examples like this. You are free to modify or create your own prompts.

---

## 2. Iterative Development of the Card Game (Structured Vibe Coding)

To align with software engineering practices, the card game will be developed in **four iterations**. Each iteration contains we will follow the tips above and ask for a solution without coding, break that solution into smaller tasks, code those tasks, and write tests.

---

### 2.1 Setup (5 mins) 

Before we begin coding, it is important to give the LLM the context for this activity. Quickly discuss with your team which programming language and LLM you are going to use. Your first prompt to the LLM should tell you are doing a software engineering classroom code activity (duration about 60 min) to create a card game in your chosen language. You may ask LLM to suggest possible simple card games to complete in about 60 min. 

> I am a senior college student doing a vibe coding class activity in a software engineering course. We are going to develop a simple card game in JavaScript (browser) using a team of 4 people, but only 1 computer. This activity will be about 60 minutes long. Therefore, the game should be simple enough to complete within that period. More instructions will follow, but I accept suggestions for simple card games to implement.

Now, your Team decides:
* What kind of deck (standard 52, custom fantasy deck, etc.)?
* Number of players and basic turn flow (I recommend single-player for now)
* What the game’s win condition *might* be.

Give LLM prompts about your team's decisions to further setup the context for this coding activity.

<!--  > We will be using a regular deck, for a single player card game of blackjack against a computer dealer. More instructions will follow. -->

**Important:** GitHub is your friend here. I recommend setting up a repo for your code activity. If anything breaks (and LLM will break your code more often than you expect), you can revert to a previous commit.

#### **Project Management (5 min)**

The LLM can help more than just coding in our development process. Let's make it do the project management work as well.

Give prompts to your LLM to generate text files (or MD files) for the following:
* Requirements (at a high level) for this software
* Divide the work into 4 iterations of 15 minutes.

> Create the requirements (in high-level) for this app. Divide it into four iterations of 15 minutes.

Read and double-check the requirements, and if the proposed iterations make sense (ask to change if not).
Save it in a file (or files) and use it as your guide for implementing this software.

Ask the LLM to create a minimal starter template without any features (very important to not jump the gun), but with a nice looking interface for the main page.

> Generate a minimal starter template with no features, just a skeleton for the initial page. But make the web page look nice and pretty. Please use the current version of Bootstrap.

### 2.2 Iteration 1 (15 min)

* Ask for a solution without coding, and select or direct the LLM to the simplest one.
<!-- > What would be your solution or choices to implement iteration 1? I do not want code now, just your reasoning. -->
* Ask to break the solution into smaller tasks.
<!-- > Can you break this solution for iteration 1 into smaller tasks? -->
* Ask to code the tasks (asking for each task will give you a more step-by-step and better understanding of the code, asking for the entire iteration may be overwhelming if you dont have much practice with the programming language).
  - Tip for JavaScript: In your prompt to code, say that all JavaScript code should be in a separate file to make it easier to test later. 
<!-- > Without breaking the initial template you created for me earlier, code tasks #1 and #2 for me (please add comments to the code for each task). -->
* Test ruthlessly at every change (yes, you must prompt your LLM to generate tests)
  - Sometimes an LLM may write tests for code it did not write yet (Test-Driven Dev?).
  - Some LLMs are a bit clueless about JavaScript testing configuration. For example, to use Jest it is necessary to use `npm`, and export the JavaScript functions in a certain way. TLDR: You may need to fix the tests the LLM created.
<!-- > Create test cases for the code you created in the previous tasks. -->

Even by asking not to break anything, it is still very likely that the LLM broke something. Double-check the code. If you can fix yourself, do it. If not, change the prompt to say it does not work and keep doing it until you finish iteration 1. You can check the Iteration Planning earlier to see if it complies with the proposed features for it.

### 2.3 Iterations 2-4 (15 min each)

Repeat the same steps for iteration 1, but you can experiment here by changing a few things, like:
* If you generated code for the entire iteration at once, now try to generate task by task or a few tasks at a time (or vice-versa).
* If you generated tests one at a time, now try to generate tests only after all tasks for the iteration are done (or vice-versa).


### 2.4 Polishing (Optional)

If you finished earlier, do some polishing on your code. Here are some ideas (if not done before):
* Better Cards Graphics
* Score of Wins/Losses
* Multiplayer
* Betting

## 3. Team Reflection & Class Discussion (10 minutes)

1. Did the Project Management and Setup at the beginning help guide the project?
2. How did the planning → LLM-assisted high-level solution → task breakdown → coding → testing cycle influence your development?
3. How accurate or useful were the LLM-generated high-level solutions? Did they require major adjustments?
4. How effectively did your team break large ideas into smaller, implementable tasks?
5. During the iterations, did you code task by task or all of them at once (or both)?  
6. How did writing tests after each iteration affect code quality or confidence?
7. Which iteration improved the game the most, and why?

(Optional) Teams may demo their final games and highlight how features evolved across iterations.





