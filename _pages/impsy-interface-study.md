---
layout: page
title: IMPSY study takeaways
permalink: /projects/impsy-interface/study/
description: Public-safe takeaways from the exploratory IMPSY web interface study
nav: false
created: 2026-06-23
last_edited: 2026-06-26
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

The study combined three kinds of evidence: observation during the session, a
post-session SUS-style questionnaire, and a semi-structured interview. That combination
was useful because a participant's rating alone did not explain why they felt confident
or uncertain. The interview and observations helped connect those scores to moments in
the actual workflow.

## What the study asked

The study focused on a practical question: does visual feedback help people understand
what a musical AI system is doing while they use it?

That question mattered because the interface was designed around visibility. It showed
performance input, AI output, logs, model state, and configuration instead of leaving
those details buried in files or terminal output.

The session was designed to move from introduction to use rather than asking
participants to judge screenshots. After a short briefing and tutorial, participants
explored improvisation, trained or worked with a model, and then reflected on the
experience. This exposed both the fast part of the system, where visual feedback
matters immediately, and the slower machine-learning part, where data quality,
training, and expectation-setting become more important.

## What seemed to help

The clearest strength was real-time feedback. Visualisation helped users see when the
system was receiving input and when the AI was responding.

The browser interface also made the prototype feel less intimidating than a purely
technical machine-learning tool. Users could work through familiar views for
performance, logs, models, and configuration, even though the system underneath was
still complex.

The study suggested that transparency can support creative agency. When users can see
more of the system state, they have more information for deciding what to try next.

The strongest usability signal was real-time feedback clarity. Participants generally
understood the value of seeing the system receive input and produce output, especially
when the visuals and sound felt synchronised. The clean browser interface also helped
make the system feel less like a backend research prototype.

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

The detailed SUS pattern was more useful than the average alone. Real-time feedback
clarity scored highest, while confidence using the system was weaker. That is exactly
the kind of result I would expect from a prototype that makes behaviour more visible
but still asks users to understand an unfamiliar musical AI workflow. Ease of use and
visualisation usefulness were promising, but the system still needed better guidance
around training, model behaviour, and what a user should expect from a small amount of
input data.

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

## Main themes from the thesis

The qualitative analysis grouped the feedback into a few themes that are useful for
future design:

- flexibility and personalisation helped the system feel like a creative tool rather
  than a fixed demo
- clean visual design and clear labels made the prototype easier to approach
- real-time feedback helped build trust because the AI's role became more visible
- the system had performance potential, but the AI output needed to feel musically
  meaningful for users to stay confident

The most important design implication is that trust in a musical AI interface is not
only about explaining the model. It also depends on timing, feedback, data quality,
and whether the user can hear a relationship between what they played and what the AI
returns.

## Limits of the study

The study was small and exploratory, with five participants and short sessions. That
was enough to reveal useful usability signals, but not enough to claim long-term
creative adoption. IMPSY also has features that need repeated use, such as managing
multiple projects, building better training data, and learning how different models
respond.

The AI output also shaped people's perception of the interface. When a participant
trained a model with sparse or unstructured input, the generated response could feel
less satisfying. That does not make the interface irrelevant; it shows why the
interface needs to teach the relationship between training data and model behaviour
more explicitly.

For a future version, the thesis pointed to several practical directions: preset or
pretrained models for beginners, a clearer MIDI mapping page, richer explanations of
interaction modes, more musical data representations such as pitch or gesture, and
more guidance during the training process.
