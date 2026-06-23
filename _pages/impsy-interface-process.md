---
layout: page
title: IMPSY design process
permalink: /projects/impsy-interface/process/
description: How the IMPSY web interface moved from workflow problems to a public NIME paper
nav: false
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - design-process
  - hci
---

The interface started from a practical gap in the original IMPSY workflow. The AI
system could record performances, train models, and generate responses, but moving
between those steps was still fragmented. A performer had to understand what was
running, where the data was stored, which model was active, and whether the AI was
listening or replying.

For a researcher, that kind of workflow can be manageable. For a musician trying to
stay in a creative flow, it adds friction at exactly the wrong moment.

## Starting from use

I treated the honours project as an interface design problem, not only an engineering
task. The early work asked what different users might need from the same system: a
beginner who wants to try sound quickly, a musician who wants to shape a model around
their own playing, and a technical creator who wants more control over configuration
and data.

Those user types were design tools, not claims about real participant groups. They
helped keep the interface from serving only an expert user who already understands the
backend.

The design direction became progressive disclosure. A new user should be able to start
playing and see useful feedback quickly. Deeper settings, model choices, and MIDI
configuration should still be available, but they should not block the first musical
interaction.

## From workflow problem to prototype

The old workflow made it too easy to lose the connection between action and result.
Recording data, choosing training material, configuring the system, and performing
with the model could feel like separate activities.

The redesign tried to keep those steps connected. Paper sketches and Figma prototypes
explored how a user might move between project setup, improvisation, log inspection,
training, and configuration without losing track of the loop.

The key question was not just where to put buttons. It was how the interface could
show the relationship between performance data, model behaviour, and the musical
response.

{% include figure.liquid path="/assets/img/impsy-configuration.jpg" alt="IMPSY configuration interface" caption="Configuration stayed part of the visible workflow so setup decisions did not feel detached from performance." %}

## Design goals

The final design settled around four practical goals:

- make the system approachable without hiding important complexity
- show immediate feedback during live interaction
- make recorded logs and training material inspectable
- keep advanced controls available for users who need them

This led to separate but connected areas for performance, logs, training, models, and
configuration. Each area had a different job, but all of them supported the same
creative loop: play, inspect, train, return to performance, and refine.

## From thesis to NIME

The honours thesis gave me room to document the whole design process: requirements,
early interface structures, implementation, and the exploratory study.

The NIME paper sharpened the public framing. It focused on real-time interaction with
machine learning in musical performance, and on how interface transparency can support
creative work without claiming to solve every modelling problem.

For the website, I treat the thesis as the design-story source and the NIME paper as
the public research milestone. The result is a project that is both a working system
and a record of what I learned about making musical AI easier to understand.
