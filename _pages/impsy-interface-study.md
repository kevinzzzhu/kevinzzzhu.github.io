---
layout: page
title: IMPSY study takeaways
permalink: /projects/impsy-interface/study/
description: Public-safe takeaways from the exploratory IMPSY web interface study
nav: false
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - study
  - hci
---

I evaluated the interface through a small exploratory study. The goal was not to prove
that the system solved musical AI interaction. It was to understand how people made
sense of the interface, where the workflow helped, and where the learning curve
remained.

Five participants used the system in a structured session. They were introduced to the
interface and controller, explored the system through improvisation, worked with a
model, and then completed a usability survey and interview.

No raw participant quotes, identifying details, consent material, or study documents
are included here. This page only summarises public-safe takeaways.

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

## What was still hard

Training a musical AI model is still conceptually demanding. The interface made the
workflow clearer, but it did not remove the need to understand that model behaviour is
shaped by the data it sees.

The NIME paper reports a System Usability Scale mean of 62.50 with a standard
deviation of 11.9. I treat that as a signal for further design work, not as a final
judgement on the system. The interface helped people read the interaction, but the
whole workflow still had a learning curve.

There was also a mismatch between some expectations and what a small, quickly trained
model could produce. In a short session, users may not create enough structured data
for satisfying musical responses. That can make the AI feel unpredictable even when
the interface is accurately showing what is happening.

## What I took from it

The useful lesson is that transparency matters, but it has limits.

Visual feedback can help users understand what the system is doing. Log views can
connect performance data to later model behaviour. Clearer configuration can reduce
friction.

But interface design cannot fully compensate for sparse or unclear training data. A
better interface should help users learn that relationship rather than hide it.

Future versions could support beginners with clearer onboarding, preset models,
better MIDI mapping, and more explicit explanations of how data choices affect the
AI's response.
