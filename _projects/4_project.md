---
layout: page
title: Introduction to Machine Learning Assignments
description: theory and implementation exercises across the core ML pipeline
importance: 2
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this coursework for COMP3670 (Introduction to Machine Learning) at ANU in
Semester 2, 2024. The course covers the standard foundations of ML: linear algebra and
optimisation underpinnings, supervised learning, and the core model families used as
building blocks for everything else in the field.

The unit ran three assignments across the semester, mixing written theory questions
with Jupyter notebook programming exercises. Each one paired a mathematical derivation
(working through the underlying optimisation or probability argument) with an
implementation task where I had to translate that theory into working code and verify
it against test cases.

The code for this is kept private (it's still an active ANU assignment), but here's
what it involved: implementing core ML algorithms from close to first principles using
NumPy, working through gradient-based optimisation by hand before coding it, and
reasoning about model behaviour analytically rather than just calling a library
function. The later assignments added timed online theory components, which meant
being able to derive results under time pressure, not just implement them.

The hardest part was holding both halves at once. It's one thing to get a model
training and producing reasonable output, but a different and harder thing to prove on
paper why the underlying method works, what assumptions it depends on, and where it
breaks down. Doing both forced me to actually understand the mechanics rather than
treat ML libraries as a black box. That foundation has been directly useful in later
research work, where I need to reason about model behaviour rather than just tune
hyperparameters until something works.
