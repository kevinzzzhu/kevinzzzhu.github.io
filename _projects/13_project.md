---
layout: page
title: Tile-Based Maze RPG
description: a libGDX RPG built around branching battle dialogue and version control discipline
img: /assets/img/comp2120-group-project-teaser.png
importance: 11
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I built this with a team of five for COMP2120 (Version Control and Software Engineering
Project), Semester 5, 2023, at ANU. The brief was as much about practising real
team-development process as it was about shipping a game: user stories, sprint-style
meeting minutes, CI, and a statement of originality were graded alongside the code
itself.

{% include figure.liquid path="/assets/img/comp2120-group-project-teaser.png" alt="Battle screen from the tile-based RPG" caption="A battle encounter screen from the libGDX RPG built for COMP2120." %}

## What we built

The game is a top-down, tile-based maze RPG made with libGDX. The player explores a
static maze level, moves between intersections, opens chests for loot, and manages an
on-person inventory. Enemies spawn within range as you move through the map and trigger
battle encounters where NPC dialogue branches into different text options, changing how
the fight plays out rather than just resolving on stats alone.

We prioritised features as a team before building anything: maze navigation and NPC
encounters were "highly prioritised," while extras like timed spike obstacles and
external storage chests were stretch goals. That prioritisation, plus weekly meeting
minutes and a CI pipeline running our JUnit tests on every push, was the actual point of
the course — version control as a discipline, not just a tool.

I worked across the inventory system and battle dialogue logic myself, and helped keep
our GitLab pipeline green as the codebase grew — coordinating five people's branches
around a shared tile-rendering core turned out to be the harder problem than any single
feature, and merge conflicts in the map-loading code cost more time than the gameplay
logic ever did. It was the first project where "good code" and "good process" felt
equally graded: writing clear user stories before touching the editor mattered for the
mark, not just for tidiness.

**Code:** [github.com/kevinzzzhu/comp2120-2023-group-project](https://github.com/kevinzzzhu/comp2120-2023-group-project)
