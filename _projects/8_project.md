---
layout: page
title: Artificial Intelligence Search and Reasoning Assignments
description: classical search, constraint satisfaction, and planning under uncertainty
importance: 6
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this coursework for COMP3620 (Artificial Intelligence) at ANU in Semester
1, 2024. The unit covers the classical AI toolkit: search algorithms, constraint
satisfaction, adversarial game-playing, and automated planning, the kind of material
that sits underneath a lot of modern decision-making systems even though it predates
deep learning.

There were three assignments across the semester, each built around a different
problem family. The first centred on a Pacman-style game engine, where I extended the
agent's reasoning using uninformed and informed search strategies, plus an adversarial
minimax-style agent for two-player game states. The second moved into constraint
satisfaction, working with n-ary CSPs and a Wumpus-world style encoding, including
backtracking search with added inference. The third covered planning, including
encoding planning problems as satisfiability instances and working with solvers built
for that representation.

The code for this is kept private (it's still an active ANU assignment), but here's
what it involved: implementing and tuning search strategies and heuristics for
correctness and efficiency, designing CSP encodings and inference rules that actually
cut down the search space, and translating planning problems into a form a generic
solver could handle.

The hardest part was heuristic design. Getting a search algorithm to terminate
correctly is one problem; getting it to terminate quickly on harder problem instances
is a different one, and it required actually understanding the structure of each
problem rather than reusing a generic heuristic. That distinction between "correct" and
"efficient" stuck with me as a recurring theme in algorithmic work generally.
