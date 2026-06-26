---
layout: page
title: Functional Programming Haskell Game AI
description: a two-player strategy game and ai agent built in haskell
img: /assets/img/comp1100-2021-haskell-assignment3-teaser.png
importance: 21
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this coursework for COMP1100 (Introduction to Programming and Algorithms,
taught with Haskell) at ANU in Semester 1, 2021. The unit teaches functional programming
as the primary paradigm, which was a significant shift from the imperative style I had
used up to that point.

This particular assignment was the third and final one for the unit, built around
implementing a board-based, two-player strategy game (in the same family as games like
Ataxx, where players capture territory by converting adjacent pieces) entirely in
Haskell, along with an AI agent that could play it against a human or another AI.

{% include figure.liquid path="/assets/img/comp1100-2021-haskell-assignment3-teaser.png" alt="The starting board layout for the two-player strategy game implemented in this assignment" caption="The starting layout of the board game implemented for this assignment, illustrating the piece-capturing mechanic the AI had to reason about." %}

The code for this is kept private (it's still an active ANU assignment), but here's
what it involved: representing game state and rules using Haskell's algebraic data
types, implementing the game logic as a set of pure functions, and writing a
search-based AI agent that evaluated future game states to choose moves under a time
constraint.

The hardest part was unlearning mutable, step-by-step thinking. Functional programming
forces you to express logic as transformations between immutable values rather than as
a sequence of state changes, and that was a genuinely difficult mental shift at the
time. Once it clicked, though, the game logic became easier to reason about and test in
isolation, since each function's behaviour depended only on its inputs. That shift in
thinking has stayed useful well beyond Haskell, especially when reasoning about state
and side effects in any language.
