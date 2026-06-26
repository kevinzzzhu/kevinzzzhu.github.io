---
layout: page
title: Structured Programming Rust Assignments
description: type-driven program design and a strategy game AI in rust
importance: 18
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this coursework for COMP1110 (Structured Programming) at ANU in Semester
1, 2022. The unit introduces structured, type-driven program design through Rust,
moving students from basic procedural thinking toward designing programs around
well-defined data types and clear module boundaries.

There were two assignments. The first was a smaller structured-design exercise focused
on representing a board game's state and rules cleanly in Rust's type system. The
second was a larger game-playing assignment: implementing a full two-player strategy
game, including the rules engine and an AI agent capable of choosing reasonable moves
against another player.

The code for this is kept private (it's still an active ANU assignment), but here's
what it involved: designing data structures that made illegal game states hard to
represent in the first place, implementing move generation and game rules cleanly, and
writing an AI agent that searched over possible moves to choose a good one within a
time budget.

The hardest part was learning to think in Rust's terms rather than fighting them.
Rust's ownership and type system pushes you toward designing data carefully up front, and
early on I kept trying to route around that instead of working with it. Once I started
designing the types first and letting the compiler catch structural mistakes early,
the actual game logic and AI became much easier to get right. That shift, designing
data before behaviour, is something I still apply outside of Rust specifically.
