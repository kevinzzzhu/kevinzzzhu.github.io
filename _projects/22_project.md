---
layout: page
title: Timeless Attraction
description: an interactive p5.js narrative on endangered species
img: /assets/img/comp1720-major-project-teaser.png
importance: 20
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I built this for COMP1720 (Web Design and Multimedia), Semester 1, 2021, at ANU. It
was the unit's major project: an independent, fully creative multimedia web piece
rather than a structured assignment, built with p5.js and its sound library.

The brief was to respond to the theme "timeless attraction." I split that phrase into
two readings and tried to express both at once. The overt reading is attraction as a
constant pull, like a black hole. The covert reading is attraction as something
psychological, a pursuit that exists in the mind. I tied both readings together
through the topic of endangered species.

{% include figure.liquid path="/assets/img/comp1720-major-project-teaser.png" alt="A screenshot of the Timeless Attraction p5.js sketch, showing a clownfish swimming near seaweed and palm trees" caption="The clownfish stage, one of five creature experiences in the piece." %}

The piece opens with a black hole intro: endangered species' names fly across the
screen and vanish as they touch the hole, while a news report about extinction speeds
up as the hole grows, until everything stops at once. From there, the user plays
through five creature stages in sequence, plankton, clownfish, eagle, monkey, and
finally elephant, each controlled differently (arrow keys, cursor-drag, and so on) and
each ending in that creature's death, sometimes by predation, sometimes by human
hands. Transition scenes between stages use colour and a simple lock-and-key puzzle to
mark how long each species survived, loosely mapped onto Maslow's hierarchy of needs.
The final stage puts the user behind the gun, hunting the elephant for its ivory, and
closes by asking whether humans might be next.

Technically, the whole thing runs as one large `sketch.js` file using p5.js for
canvas drawing, sprite animation, and state management across stages, with the p5
sound library driving the news audio, ambient effects, and stage-specific sound cues
that respond to user interaction.

Looking back, this was my first real exposure to building an interactive, time-based
experience rather than a static page, and it taught me how much narrative pacing
depends on giving the user just enough control to feel implicated, then taking it
away at the right moment. That tension between agency and inevitability is something
I still think about whenever I design interaction now.

**Code:** [github.com/kevinzzzhu/comp1720-2021-timeless-attraction](https://github.com/kevinzzzhu/comp1720-2021-timeless-attraction)
