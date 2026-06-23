---
layout: page
title: IMPSY Web Interface
description: making musical AI easier to see, shape, and perform with
img: /assets/img/impsy-web-interface-teaser.jpg
importance: 2
category: work
permalink: /projects/impsy-interface/
related_publications: false
last_edited: 2026-06-23
---

I built the IMPSY web interface because the musical AI system was powerful, but the
workflow was hard to read while performing. The model could listen, learn from
performance data, and generate responses, yet much of that activity stayed behind the
scenes. For a musician, that makes the system harder to trust and harder to shape.

The practical problem was not just "can the AI make sound?" It was: can a performer
see what the system heard, what data is being used, which model is active, and when the
AI is replying? If those parts are hidden, the system can feel like a black box instead
of an instrument.

This project became my honours research project at ANU and later developed into a
NIME 2026 paper with Charles Martin:
**A Web Interface for Real-Time Interaction with Machine Learning in Musical
Performance**. The paper appears at NIME 2026, held June 23-26, 2026 in London and
online.

{% include figure.liquid path="/assets/img/impsy-web-interface-teaser.jpg" alt="The IMPSY web interface running beside a MIDI controller" caption="The IMPSY web interface brings project management, performance, training, and configuration into a browser workflow." %}

## Project links

- [Official NIME proceedings page](https://nime2026.org/proceedings/196.html)
- [Official NIME PDF](https://nime.org/proceedings/2026/nime2026_102.pdf)
- [Local final paper PDF](/assets/pdf/impsy-nime-2026-paper.pdf)
- [Upstream IMPSY repository](https://github.com/cpmpercussion/impsy)
- [Design process](/projects/impsy-interface/process/)
- [System walkthrough](/projects/impsy-interface/system/)
- [Study takeaways](/projects/impsy-interface/study/)
- [Gallery](/projects/impsy-interface/gallery/)
- [Resources](/projects/impsy-interface/resources/)

## What the interface does

IMPSY is a real-time musical AI system for call-and-response performance. A performer
plays with a MIDI controller, the system records the interaction, and a machine
learning model can generate musical responses from that performance data.

My interface sits around that loop. It helps users collect and inspect logs, choose
data for training, train or select models, configure the performance setup, and return
to live improvisation with visual feedback. The important shift is that the data and
model steps are not treated as invisible background tasks. They become part of the
creative workflow.

In the performance view, the interface separates the human and AI sides of the
exchange. The performer can see incoming control data and the generated response while
the interaction is happening. This visual layer is not meant to replace listening. It
is there to make the state of the system easier to follow, especially when the model
does something unexpected.

{% include figure.liquid path="/assets/img/impsy-improvisation-visualisation.jpg" alt="The IMPSY improvisation view showing performer input and AI output" caption="The improvisation view makes the live human-AI exchange visible while it happens." %}

## My contribution

The work was not only a visual refresh. I designed the web workflow, built the React
interface, connected it to the Python IMPSY backend, and used D3.js to make logs and
live interaction easier to inspect. The interface had to support both performance and
machine-learning tasks, so the design had to make room for quick musical interaction
as well as slower steps like dataset selection and model configuration.

That combination is what made the project interesting to me. It sat between HCI,
creative coding, and music technology: close enough to the model to expose what it was
doing, but focused on what a performer could actually use while making sound.

## Why it mattered

Musical machine learning tools often ask users to move between separate technical
steps: recording data, finding files, configuring training, starting the model, and
then returning to performance. That can be workable for researchers, but it breaks the
flow for a performer who is trying to listen, respond, and stay creative.

I wanted the interface to make the loop easier to understand without pretending that
machine learning is simple. A clearer interface cannot fix sparse training data or make
every model response musically satisfying. It can, however, show how the user's data
connects to the model and how the model is behaving in performance.

That became the main design direction: make the system approachable, keep advanced
controls available, and show enough feedback for users to make informed choices.

## What I learned

The exploratory study suggested that visual feedback helped people follow what the
system was doing. Users could more easily tell when the system was receiving input,
when the AI was responding, and how the interaction was unfolding over time.

The hard part was still training and expectation-setting. A quickly trained model may
not produce the kind of musical response a user imagines, especially if the training
data is sparse or inconsistent. The interface helped expose that relationship, but it
did not remove the learning curve.

That lesson is useful beyond this one system. For creative AI tools, transparency is
not only an explanatory feature. It is part of how people decide whether they can work
with the system, adjust their behaviour, and keep creative control.

## Read more

The deeper pages split the project into smaller parts:

- [Design process](/projects/impsy-interface/process/) explains how the honours
  project moved from workflow problems to sketches, prototypes, and implementation.
- [System walkthrough](/projects/impsy-interface/system/) follows the record, inspect,
  train, configure, and perform loop.
- [Study takeaways](/projects/impsy-interface/study/) summarises the public-safe
  findings without raw participant material.
- [Gallery](/projects/impsy-interface/gallery/) collects the selected public images.
- [Resources](/projects/impsy-interface/resources/) keeps the paper, code, and pending
  material decisions in one place.
