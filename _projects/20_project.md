---
layout: page
title: Arboretum — Java Group Board Game
description: implementing a two-to-four-player card game in java and javafx as a group project
img: /assets/img/comp1110-arboretum-card-teaser.png
importance: 18
category: coursework
related_publications: false
last_edited: 2026-07-16
---

I completed this coursework for COMP1110 (Structured Programming) at ANU in Semester 2,
2022. The unit teaches structured software design in Java, covering object-oriented
design, group collaboration, version control, and building graphical applications with
JavaFX.

There were two assignments. The first was an individual exercise: a series of small
Java tasks testing basic programming and data-handling concepts. The second, which was
the bulk of the course, was a group project: implement the published board game
[Arboretum](https://renegadegamestudios.com/arboretum/) in Java with a playable JavaFX
UI.

**Arboretum** is a two-to-four-player card-drafting game. Players take turns drawing
from a shared deck or discard piles, placing one card in their arboretum (a personal
tableau) and discarding another. At game end, players score paths through their
arboretum — the longest connected paths between trees of the same species, with rules
governing which cards you can even score based on what's in your hand versus
opponents'. It sounds simple; the scoring rules are not.

{% include figure.liquid path="/assets/img/comp1110-arboretum-card-teaser.png" alt="A Cassia tree card from the Arboretum card game — the Cassia 1 card, showing a yellow-green stylised tree" caption="One of the 49 tree cards in Arboretum, the board game implemented for this assignment. Players draft these into hand and place them to form scoring paths in their arboretum tableau." %}

The code is kept private (still an active ANU assignment), but the scope involved:
designing the game state and rules in Java's type system, implementing a working
multi-player game loop, building a complete JavaFX UI with card placement and drag
interactions, and writing an AI opponent that played reasonable moves.

## Group dynamics

Assignment 2 was explicitly a group project, and the mark was split between individual
contributions (tracked through Git commits) and group outcomes. Working through GitLab,
we divided the implementation across stages: game logic first, then UI, then AI. The
challenge was that the game rules had enough edge cases that agreeing on a shared
interpretation of the scoring rules early was critical — the times we skipped that
alignment cost us debugging time later.

The biggest technical shift from first-year programming was thinking in terms of
designed software rather than written scripts: defining interfaces before implementation,
making the AI a pluggable component rather than baked into the game loop, and using
Git deliberately rather than just as a backup. JavaFX was new to all of us and required
more scaffolding to get anything visual on screen than either of us expected.
