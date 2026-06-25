---
layout: page
title: IMPSY study takeaways
permalink: /projects/impsy-interface/study/
description: Public-safe takeaways from the exploratory IMPSY web interface study
nav: false
created: 2026-06-23
last_edited: 2026-06-25
tags:
  - impsy
  - study
  - hci
---

I evaluated the interface through a small exploratory honours study. The goal was to
understand how people made sense of the workflow, where visual feedback helped, and
where the learning curve stayed visible.

Five people used the system in a structured session. They were introduced to the
interface and controller, explored the system through improvisation, worked with a
model, and then completed post-session responses.

I keep this page to public-safe takeaways, leaving out source quotes, identifying
details, private forms, and study documents.

## What the study asked

The study focused on a practical question: does visual feedback help people understand
what a musical AI system is doing while they use it?

That question mattered because the interface was designed around visibility. It showed
performance input, AI output, logs, model state, and configuration instead of leaving
those details buried in files or terminal output.

## What seemed to help

The clearest strength was real-time feedback. Visualisation helped users see when the
system was receiving input and when the AI was responding.

The browser interface also made the prototype feel less intimidating than a purely
technical machine-learning tool. Users could work through familiar views for
performance, logs, models, and configuration, even though the system underneath was
still complex.

The study suggested that transparency can support creative agency. When users can see
more of the system state, they have more information for deciding what to try next.

{% include figure.liquid path="/assets/img/impsy-study-session-setup.jpg" alt="IMPSY study session setup with browser interface, MIDI controller, and audio software" caption="The study setup put the browser interface, MIDI controller, and audio environment together so participants could move between playing and inspecting the system." %}

## What was still hard

Training a musical AI model is still conceptually demanding. The interface made the
workflow clearer while keeping the data-to-model relationship visible: model behaviour
is shaped by the data it sees.

There was also a mismatch between some expectations and what a small, quickly trained
model could produce. In a short session, users may create too little structured data
for satisfying musical responses. That can make the AI feel unpredictable even when
the interface is accurately showing what is happening.

The thesis and NIME paper report a System Usability Scale mean of 62.50. I treat that
as a design signal rather than a headline result. It says the interface had useful
direction, but still needed stronger onboarding and learnability.

{% include figure.liquid path="/assets/img/impsy-study-sus-average.png" alt="Average adjusted System Usability Scale contribution score per question" caption="The SUS responses were useful as a design signal: some parts of the workflow worked, while learnability and confidence still needed attention." %}

## What I took from it

The useful lesson is that transparency matters, but it has limits.

Visual feedback can help users understand what the system is doing. Log views can
connect performance data to later model behaviour. Clearer configuration can reduce
friction.

Interface design also has limits around sparse or unclear training data. A better
interface should help users learn that relationship rather than hide it.

Future versions could support beginners with clearer onboarding, preset models,
better MIDI mapping, and more explicit explanations of how data choices affect the
AI's response.
