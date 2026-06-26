---
layout: page
title: INTERLINK — A CSS Student Hub Concept
description: a physical-and-digital student hub designed for a real ANU client
img: /assets/img/comp8280-digital-hub-teaser.png
importance: 0.2
category: coursework
related_publications: false
last_edited: 2026-06-25
---

COMP8280/ENGN8280 (Responsible Practice, Innovation and Leadership), Semester 1, 2026.
The client was real: ANU's College of Systems and Society (CSS) wanted a Student Hub —
a physical space, due to be operational by December 2026 — that could make six
academically unrelated schools feel like one community instead of six parallel degree
tracks. Our team of four worked the brief as "Responsible Innovation, Inc.," under the
project name INTERLINK.

## Approach

Rather than starting from a feature list, we mapped the Hub as a four-layer system —
Student Experience, Institutional and Infrastructure, External Engagement, and
Reputation — and traced how each layer affected the others. I led the Institutional and
Infrastructure layer: governance, physical space planning, and digital systems
supporting the Hub, plus the cross-layer synthesis that pulled all four research
streams into one shared concept.

That synthesis turned out to be the hard part. By week 9 the team had a clear _problem_
but not yet a shared _solution_ — we knew the Hub needed to support belonging and
external visibility, but kept circling without converging on what to actually design.
What broke the stall was switching from abstract debate to a shared storyboard:
walking through a single hypothetical visitor's path through the Hub forced
disagreements about scope into specific, arguable decisions.

## Prototypes

We built the physical and digital tracks in parallel and deliberately kept them
synchronised: the physical Hub defines named zones (a quiet focus zone, a partner
table for industry guests, a showcase wall for student work, a help desk staffed by
student ambassadors), and the digital prototype mirrors that same floor plan as a live,
radial "you are here" map rather than a generic dashboard.

{% include figure.liquid path="/assets/img/comp8280-digital-hub-teaser.png" alt="CSS StudentHub digital prototype showing a radial floor-plan view" caption="The digital prototype I built — a live radial map of the physical Hub's zones, each showing real-time occupancy and activity." %}

I built this digital side myself: static HTML/CSS/JS, no framework, no build step. The
zone map links straight through to an events view and a help-desk flow, so the
prototype reads as one connected system rather than a set of disconnected mockups —
which mattered, because the brief was explicitly about _connection_ between
disconnected parts of the College.

{% include figure.liquid path="/assets/img/comp8280-interlink-teaser.png" alt="Four-layer system diagram for the Student Hub" caption="The system-layer map the team used to scope the project — Institutional and Infrastructure was my layer." %}

## Working with the client

The harder lesson was process, not design. Our client contact was available for the
first three meetings, then harder to reach through the weeks that mattered most for
finalising the concept. We made a deliberate call not to chase new feedback that late —
incorporating something we couldn't properly respond to before the deadline was a worse
risk than finishing on the brief we already had. Treating the _earlier_ feedback as the
fixed design constraint, rather than waiting for feedback that might not arrive in time,
is a small project-management decision that I think generalises well beyond this one
assignment.

**Code (digital prototype):** [github.com/kevinzzzhu/digital-hub](https://github.com/kevinzzzhu/digital-hub)
