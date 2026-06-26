---
layout: page
title: Sound and Music Computing Portfolio
description: live coding, pure data patches, and a tetris-driven group performance
img: /assets/img/comp4350-smc-teaser.jpg
importance: 12
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this work for COMP4350 (Sound and Music Computing), Semester 4, 2023, at
ANU. The course is a laptop-ensemble elective: each week we learned a new tool for
generating sound or music with code (Pure Data, Gibber, live coding patterns) through
workshop diaries, then used those tools in solo and group performances.

{% include figure.liquid path="/assets/img/comp4350-smc-teaser.jpg" alt="Live coding screens from the LENS group performance, showing Gibber code, a Tetris game feed, and a step sequencer grid" caption="Backend view from our LENS performance: Gibber live-coding panes, the Tetris game feed, and a step-sequencer grid running side by side." %}

## What I built

The early weeks were spent in Pure Data, building small patches for delay, drum
synthesis, and frequency control, and writing up what I learned in two portfolio
diaries. Later in the semester the course moved to Gibber, a browser-based live coding
environment, which let our group connect code directly to performance.

The main deliverable was a LENS (laptop ensemble) group performance called **Tetris
Illuminated: A Journey from Darkness**, which I wrote and structured for our group,
"Electro Phonic." Four of us ran Gibber and Pure Data live: one driving visuals, two
handling drums and lead/chord/bass synthesis, and one playing pre-composed Pure Data
patches in the background, while a fifth member played a custom Tetris-style game
controlled by a Micro:bit. A Python WebSocket bridge linked the Micro:bit's serial
output to Gibber, so in-game events (clearing a line, levelling up) triggered changes
in tempo, instrumentation, and visuals in real time. The structure mapped onto a loose
narrative about glimpses of light breaking through darkness, with the music building
from near silence to full layered texture as the game progressed, then collapsing back
toward silence as the game neared failure.

## Connection to later work

This was my first real experience with sound as something shaped live, in response to
another system's state, rather than composed offline and played back. Looking back, the
Tetris piece is an early, hardcoded version of a question I kept returning to in my
honours work on IMPSY years later: how do you build an interface where a human and a
partly autonomous system can respond to each other's state in real time, without either
side losing track of what's happening? Here the answer was fixed mappings between game
events and sound parameters; IMPSY's answer is a trained model. Different mechanisms,
same underlying design problem.

**Code:** [github.com/kevinzzzhu/comp4350-2023-smc-portfolio](https://github.com/kevinzzzhu/comp4350-2023-smc-portfolio)
