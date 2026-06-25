---
layout: page
title: IMPSY design process
permalink: /projects/impsy-interface/process/
description: How the honours project moved from workflow problems to sketches, prototypes, and design goals
nav: false
created: 2026-06-23
last_edited: 2026-06-25
tags:
  - impsy
  - design-process
  - hci
---

{% include impsy_project_nav.liquid active="process" %}

The interface started from a workflow problem rather than a visual polish task. The
original IMPSY system could record performances, train models, and generate responses,
but the user had to understand several separate technical steps to keep the interaction
moving.

For the honours project, I treated that as an HCI problem. The main question was: how
can a musician understand and shape a musical AI system while still staying in a
creative flow?

The thesis used the Double Diamond framework to keep that work structured: first
discovering and defining the usability problem, then developing and narrowing the
interface response. That gave the project a practical design path from old workflow
pain points to user stories, wireframes, a Figma prototype, and the implemented
React/Flask interface.

## Understanding the old workflow

The old interface exposed useful parts of IMPSY, including logs, datasets, models, and
configuration. What needed work was the relationship between them: during use, the full
loop was hard to read.

That gave me the first design direction: keep the whole loop visible. A user should be
able to see how performance becomes data, how data becomes a model, and how that model
returns to live interaction.

The old interface was useful because it exposed the main technical objects. It had
pages for logs, datasets, models, and configuration. The problem was that those objects
were presented as separate file-oriented pages. A user could see the parts, but had to
infer the creative workflow: record a performance, choose useful logs, train or choose
a model, configure how it responds, and return to improvisation.

The design process therefore focused on relationships rather than decoration. The new
interface needed to make the user's action, the stored data, the active model, and the
AI response feel like stages of one system.

{% include figure.liquid path="/assets/img/impsy-old-workflow-home.jpg" alt="The older IMPSY home workflow" caption="The previous workflow exposed the system's parts, but the redesign needed to make the relationship between performance, data, models, and response easier to follow." %}

## Personas as design tools

I treated the honours project as both an interface design problem and an engineering
task. The early work asked what different users might need from the same system: a
beginner who wants to try sound quickly, a musician who wants to shape a model around
their own playing, and a technical creator who wants more control over configuration
and data.

Those user types helped me avoid designing only for an expert user who already
understands the backend. I used them to keep the interface grounded in different
levels of musical and technical confidence.

The design direction became progressive disclosure. A new user should be able to start
playing and see useful feedback quickly. Deeper settings, model choices, and MIDI
configuration should still be available, but they should not block the first musical
interaction.

The user stories were not meant to become public-facing personas on the site; they were
working tools for design decisions. They helped separate three needs:

- immediate creative entry for people who want to try sound without reading backend
  details
- project and model continuity for performers who want to shape an AI around their
  own material
- advanced configuration and data access for users who want technical control

Those needs became the basis for interface requirements: clearer entry points, visible
input/output feedback, log and model management, and advanced controls that stay
available without dominating the first screen.

## Sketching the loop

The old workflow made it too easy to lose the connection between action and result.
Recording data, choosing training material, configuring the system, and performing
with the model could feel like separate activities.

The redesign tried to keep those steps connected. Paper sketches and Figma prototypes
explored how a user might move between project setup, improvisation, log inspection,
training, and configuration without losing track of the loop.

The key question went beyond where to put buttons. I wanted the interface to show the
relationship between performance data, model behaviour, and the musical response.

The prototype work tested information architecture before implementation. In the hand
sketch, the core question was whether the important objects could sit in one workflow:
recordings, training, model behaviour, and live response. In the Figma prototype, the
same question became navigational: how does a user move from starting a project to
improvisation, log inspection, model training, and configuration without losing their
place?

{% include figure.liquid path="/assets/img/impsy-wireframe-sketch.jpg" alt="Early paper wireframe for the IMPSY interface" caption="The early sketch explored how performance, logs, training, models, and configuration could become one connected workflow." %}

{% include figure.liquid path="/assets/img/impsy-figma-prototype-flow.jpg" alt="Figma prototype flow for the IMPSY web interface" caption="The Figma prototype turned the rough workflow into connected screens before implementation." %}

The fuller image archive is on the [IMPSY gallery](/projects/impsy-interface/gallery/).
That page keeps the old screens, story maps, prototype flow, and redesigned interface
screens together so this process page can stay readable.

## Design goals

The final design settled around four practical goals:

- make the system approachable without hiding important complexity
- show immediate feedback during live interaction
- make recorded logs and training material inspectable
- keep advanced controls available for users who need them

This led to separate but connected areas for performance, logs, training, models, and
configuration. Each area had a different job, but all of them supported the same
creative loop: play, inspect, train, return to performance, and refine.

The thesis translated those goals into interface specifications. The dashboard needed
to support recent projects and session continuity. The visualisation tools needed to
show both user input and AI output in real time. Configuration and model-management
areas needed to support experienced users without forcing beginners through every
detail. Those specifications are what made the implemented interface more than a
mock-up: each screen had a job in the musical AI loop.

## What changed through the process

The biggest shift was from a file browser model to a workflow model. The old interface
asked users to understand folders, logs, datasets, model files, and configuration
directly. The redesign kept those concepts, but rearranged them around actions that
make sense in use:

- start or resume a project
- improvise and see the live exchange
- inspect what was recorded
- choose material for training
- train or select a model
- return to performance with clearer expectations

That is why the project page now separates the [system walkthrough](/projects/impsy-interface/system/)
from this design process. The process page explains why the interface moved in this
direction; the system page explains how the implemented loop works.

## From thesis to NIME

The honours thesis gave me room to document the whole process: requirements, early
interface structures, implementation, and the exploratory study.

The NIME paper sharpened the public framing. It focused on real-time interaction with
machine learning in musical performance, and on how interface transparency can support
creative work without claiming to solve every modelling problem.

For the website, I treat the thesis as the design-story source and the NIME paper as
the public research milestone. The result is a project that is both a working system
and a record of what I learned about making musical AI easier to understand.

{% include impsy_project_nav.liquid active="process" %}
