---
layout: page
title: Simulating Inextensible Hair and Fur
description: comparing FTL, PBD, IPBD, SBD, and XPBD for real-time strand dynamics
img: /assets/img/comp4610-hair-fur-teaser.png
importance: 4
category: coursework
related_publications: false
last_edited: 2026-06-25
---

This was my group's final research project for **COMP4610 (Advanced Computer Graphics), Semester 6, 2024** at ANU. My team and I picked real-time hair and fur simulation, a problem that sits at the intersection of physics, performance, and visual realism in games, AR, and VR.

## The problem

A human head has roughly 100,000 strands, and each one needs to bend, twist, and resist stretching believably while responding to gravity and motion in real time. Hair is also inextensible: strands keep a near-constant length between vertices, which makes it a constrained dynamics problem rather than a free-form one. Naive simulation either explodes under stiff constraints or runs too slowly to be interactive, so the real challenge is finding a numerical method that is accurate, stable, and fast enough at once.

{% include figure.liquid path="/assets/img/comp4610-hair-fur-teaser.png" alt="Strand-based hair simulation showing FTL-constrained strands falling under gravity" caption="Strand-based hair simulation built on top of the FTL/PBD framework my team extended for this project." %}

## Methods compared

Baseline: Follow-The-Leader (FTL) and Position-Based Dynamics (PBD), the standard pair
for inextensible strand simulation. Three extensions compared against that baseline:

| Method   | What it changes                               | Where it won                                      | Where it lost                               |
| -------- | --------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| IPBD     | adaptive relaxation, local stiffness          | fastest of the three                              | stretched unrealistically under high strain |
| SBD      | caps strand strain directly                   | best visual quality                               | more compute, occasionally felt stiff       |
| **XPBD** | compliance parameter for graceful constraints | best stability/efficiency/realism balance overall | —                                           |

This was a three-person group project. The simulation code (FTL, PBD, IPBD, SBD, XPBD
in C++, built on an open-source rendering scaffold) and the experimental comparison
above were primarily my teammates' contribution, documented as such in our contribution
report — I want to be upfront about that rather than imply otherwise. My own work was
the introduction and problem framing, the related-work survey across strand-based and
volume-based hair simulation literature, connecting the five methods back to their
source papers, and the final presentation.

Doing that literature survey is what actually taught me something concrete: "hair
simulation" research is mostly a trade-off between strand-level physical accuracy and
the brute-force cost of simulating tens of thousands of strands at interactive frame
rates, and the whole PBD family exists because exact constraint solving is too slow —
trading exactness for the kind of iterative stability that's usable in real time. That
trade-off pattern shows up in plenty of places outside hair.

**Code:** [github.com/kevinzzzhu/comp4610-2024-hair-fur-simulation](https://github.com/kevinzzzhu/comp4610-2024-hair-fur-simulation)
