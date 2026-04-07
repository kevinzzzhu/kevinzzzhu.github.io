---
layout: page
title: IMPSY Web Interface
description: making musical AI more legible, expressive, and usable
importance: 2
category: work
---

(AI generated content may be wrong)

This project started from a gap I kept noticing when working with musical AI systems:
the models were powerful, but the experience of using them still felt fragmented,
technical, and a bit opaque. A lot of the interesting intelligence was happening in the
background, while the performer only saw small parts of the process. That makes it
hard to trust the system, hard to learn from it, and honestly hard to feel like it is a
creative partner rather than a black box.

So this project became an attempt to redesign that relationship. Instead of treating the
interface as a thin control panel for machine learning, I approached it as part of the
instrument itself.

## Project map

- [Overview](#overview)
- [Background](#background)
- [Requirements and design process](#requirements-and-design-process)
- [System design and architecture](#system-design-and-architecture)
- [User study and evaluation](#user-study-and-evaluation)
- [What came out of it](#what-came-out-of-it)
- [Where it goes next](#where-it-goes-next)

## Overview

The IMPSY Web Interface is a web-based system for creating and performing with
interactive musical machine learning models. It builds around IMPSY, an existing
predictive music system using mixture density recurrent neural networks (MDRNNs),
and rethinks how musicians interact with that system in real time.

The main idea is simple: if a performer is going to work with an intelligent instrument,
they should be able to see what is happening, understand how their data matters, and
feel that the system is responding with them rather than just at them.

This work eventually produced both a full honours thesis and a shorter NIME paper
version. The thesis let me go deeper into the HCI framing, the design process, and the
evaluation. The paper distilled the core contribution into a more focused argument:
transparency is not just a nice visual feature, it is part of how creative agency is built in
human-AI performance.

## Background

This project sits between HCI, music technology, and interactive machine learning.
From the HCI side, I was interested in usability, feedback, trust, and how interfaces can
support both beginners and expert users. From the music side, I was looking at how
visualisation can support expressive performance without replacing listening. And from
the machine learning side, I was working with a system that predicts continuous musical
control data in real time.

A lot of existing tools do one thing well. Some are good at browser-based control
widgets. Some are good at mapping. Some are good at AI-assisted generation. But many
of them still break the workflow into disconnected steps or make the learning process
feel hidden. That gap became the motivation for this project.

## Requirements and design process

Because this was a large project, I structured it in a way that felt closer to design work
than pure implementation work. The thesis design process followed the Double Diamond
framework, moving through discovery, definition, development, and delivery.

The early stages focused on user stories and personas. I was trying to imagine how very
different people might approach the same system:

- a hobbyist who just wants to make something quickly,
- an intermediate musician who wants more control and personalisation,
- and a more technical creator who wants deep system access and experimentation.

That led to wireframes, paper sketches, Figma prototypes, and in-lab feedback sessions.
What mattered most here was not just where buttons should go, but how much complexity
should be visible at each moment. I kept coming back to the same tension: how do you
show enough of the machine learning process to make it legible, without overwhelming
people who just want to play?

## System design and architecture

The final system brings together a React-based frontend and a Python backend, with
WebSockets, HTTP endpoints, and MIDI communication working together. Under the
hood, the backend handles the generative logic, interaction state, training workflows, and
prediction loop. On the surface, the frontend turns that into something musicians can
actually work with.

One of the most important shifts in this project was treating the full machine learning
lifecycle as part of the interface:

- logging and collecting data,
- curating datasets,
- training and selecting models,
- configuring interaction behaviour,
- and performing with live feedback.

The NIME paper version sharpened this into three main interface views:

1. **Project and data management** for provenance and organisation
2. **Training configuration** for making model behaviour more understandable
3. **Performance and real-time visualisation** for live interaction and co-creation

The visual layer was especially important. I used a dual strategy:

- bar-style visualisations for immediate input/output inspection,
- and a more immersive particle-based background visualisation to show the relationship
  between performer gestures and AI responses over time.

That combination was meant to support both analytical reading and felt experience. One
helps you verify what the system is doing. The other helps you sense it as part of the
performance.

## User study and evaluation

The evaluation side of the project was just as important as the build itself. I wanted to
know whether making the system more visible and more interactive actually changed how
people experienced it.

The study involved participants with different levels of musical and technical background.
Sessions combined:

- a short tutorial and familiarisation period,
- live improvisation with the system,
- and survey/interview follow-up.

Quantitatively, the usability score landed in a moderate range rather than an excellent
one. That was not entirely surprising. Machine learning workflows are still conceptually
heavy, especially for first-time users. But the more interesting part was the qualitative
side. Participants repeatedly pointed to transparency and feedback as the most valuable
parts of the system.

The strongest themes were:

- empowerment through flexibility and co-creation,
- trust-building through transparent feedback,
- positive experience through clean visual design,
- and emotional engagement during performance.

That contrast was interesting to me. The system was not necessarily effortless, but it
was engaging. For creative tools, that difference matters a lot.

## What came out of it

This project produced two connected outputs:

### 1. Honours thesis

The thesis gave me space to document the entire arc of the project, from background and
motivation through to design process, implementation, evaluation, and future work. It is
the fuller story of the project, including the HCI rationale and the user study framing.

### 2. NIME paper

The NIME paper took the same project and focused it into a sharper research claim:
that exposing the internal behaviour and data provenance of an interactive ML music
system can improve trust, agency, and creative dialogue in performance.

Writing the paper made me realise that a lot of what I cared about was not just "making
an interface for AI", but making the AI legible enough that musicians could actually form
a relationship with it.

## Where it goes next

The project still feels open in a good way. The main limitation is that transparent
interfaces do not magically solve everything. If a model is under-trained or the data is
too sparse, visual clarity alone cannot fix the musical result. But it can help people
understand why things are happening, which already changes the experience.

If I continue this work, the next steps would be:

- better onboarding for non-technical users,
- longer-term studies with richer training data,
- stronger support for iterative personalisation,
- and further exploration of how visual feedback can become part of performance rather
  than just explanation.

In a way, this project was less about building a polished final tool and more about asking
what kind of relationship we want between musicians and intelligent systems. That is
still the question I care about most.
