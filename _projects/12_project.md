---
layout: page
title: Rogue Wizard Survival
description: a brotato-inspired top-down survival shooter built with a five-person team
img: /assets/img/comp3540-game-project-teaser.png
importance: 10
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I built this game for COMP3540, Semester 5, 2023, at ANU, as a five-person group project
in a one-semester Unity game development course. The brief was simple on paper:
publish a single-player computer game that strangers could pick up and enjoy in 15
minutes. The harder part was agreeing, as a team, on what that game should even be.

{% include figure.liquid path="/assets/img/comp3540-game-project-teaser.png" alt="Top-down survival arena with the player wizard, scavenger enemies, gold, and a chest" caption="A scene assembled from the game's actual sprites: the player wizard, scavenger enemies, gold pickups, and a loot chest in the survival arena." %}

We landed on a top-down survival shooter modelled closely on _Brotato_, with some
inspiration from _Hades_. The player controls a wizard who auto-attacks waves of
enemies that spawn in increasing numbers each round, with a boss appearing every five
rounds. Between rounds, the player drops into a shop screen and spends gold on
randomly drawn item and weapon cards, each with a rarity tier, to build out their
build for the next wave. It is a loop of survive, shop, get stronger, survive again.

**Code:** [github.com/kevinzzzhu/comp3540-2023-game-project](https://github.com/kevinzzzhu/comp3540-2023-game-project)

## My role

My main contribution was the shop system end to end: the backend logic for refreshing
card offers, charging gold for refreshes and purchases, applying and reversing item
and weapon stat changes on buy and sell, and the inventory state that ties it all
together. I also built the UI animations for card flips and highlighted selections,
added the boss health bar and round-progress indicator, and spent a good chunk of the
last week hunting a bug that was blocking the whole team from publishing a build.

## Working as a team

The technical side was the easy part. The harder lesson was about coordination: five
people with five different mental pictures of "the game" trying to converge on one
build, while working concurrently on interdependent systems that constantly broke each
other on merge. Uneven contribution from a couple of teammates meant the rest of my
team absorbed extra scope late in the project, and undocumented code became a real tax
whenever someone had to debug a system they did not write. If I did this again, I would
push harder for a locked-down core loop and basic code documentation standards in week
one, before anyone touched a feature branch.
