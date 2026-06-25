---
layout: page
title: IMPSY Web Interface
description: making musical AI easier to see, shape, and perform with
img: /assets/img/impsy-web-interface-teaser.jpg
importance: 2
category: work
permalink: /projects/impsy-interface/
related_publications: false
last_edited: 2026-06-25
---

{% include impsy_project_nav.liquid active="overview" %}

I built the IMPSY web interface for my COMP4550 honours project at ANU. IMPSY was
already a powerful musical AI system: it could listen to performance data, train
models, and generate responses. The problem was that too much of that workflow was
hard to see while using it creatively.

The practical question went beyond "can the AI make sound?" A performer also needs to
see what the system heard, what data is being used, which model is active, and when the
AI is replying. If those parts are hidden, the system can feel like a black box instead
of an instrument.

My project was to wrap that machine-learning music loop in a browser interface. The
interface connects performance, logs, training data, model selection, configuration,
and real-time visual feedback so the user can move through the whole workflow without
losing the thread.

The thesis treated this as both an HCI project and a systems project. The HCI side
asked how musicians with different levels of technical confidence could understand a
musical AI system while using it. The systems side asked how a React browser
interface, Python backend, MIDI/OSC/WebSocket communication, logs, and MDRNN models
could work together in a real-time musical setting.

{% include figure.liquid path="/assets/img/impsy-web-interface-teaser.jpg" alt="The IMPSY web interface running beside a MIDI controller" caption="The project began as my honours interface for making IMPSY's performance, training, model, and configuration workflow easier to follow." %}

## What I built

IMPSY is used for call-and-response musical interaction. A performer plays with a MIDI
controller, the system records the interaction, and a model can respond using patterns
learned from performance data.

The web interface sits around that loop. It gives the user places to perform, inspect
logs, select training material, train or choose a model, adjust configuration, and
return to improvisation. The important shift is that the data and model steps are no
longer hidden background work. They become part of the creative workflow.

In the performance view, the interface separates the human and AI sides of the
exchange. The performer can see incoming control data and the generated response while
the interaction is happening. This visual layer supports listening by making the state
of the system easier to follow, especially when the model does something unexpected.

The implemented interface organised the work into a few connected areas:

- a project start point for recent projects and model selection
- an improvisation view for live human/AI interaction
- log views for inspecting recorded performance material
- dataset and training views for turning logs into model data
- model-detail views for reviewing trained behaviour
- configuration screens for MIDI mapping and backend settings

{% include figure.liquid path="/assets/img/impsy-improvisation-visualisation.jpg" alt="The IMPSY improvisation view showing performer input and AI output" caption="The live view separates performer input from AI output so the call-and-response interaction is visible while it happens." %}

## Why I cared about this

This project sat in the part of HCI I enjoy most: making a technical system legible
enough that people can work with it creatively. Musical machine learning is still
complex, so I wanted the interface to show enough of the system state that a user could
make better choices while staying close to the musical task.

That meant balancing two needs: a beginner should be able to start playing without
understanding every backend detail, while an experienced user should still be able to
inspect data, configure the system, and shape the model.

The design work used three user perspectives from the thesis: a beginner musician who
needs a low-pressure start, an experienced performer who wants to train and reuse
models around their own style, and a technical creator who wants control over
configuration, integration, and data. That mix kept the interface from becoming only a
technical dashboard or only a simplified demo.

## My contribution

The work went beyond a visual refresh. I designed the web workflow, built the React
interface, connected it to the Python IMPSY backend, and used D3.js to make logs and
live interaction easier to inspect. The interface had to support both performance and
machine-learning tasks, so the design had to make room for quick musical interaction
as well as slower steps like dataset selection and model configuration.

That combination is what made the project interesting to me. It sat between HCI,
creative coding, and music technology: close enough to the model to expose what it was
doing, but focused on what a performer could actually use while making sound.

The main engineering contribution was not a single screen. It was the connection
between screens and system state: live input/output visualisation, log inspection,
training flow, model selection, and configuration all had to refer to the same musical
loop. The thesis framed this as transparency: making the relationship between
performance data, model behaviour, and generated response visible enough for a user to
act on it.

## Explore the project

- [Design process](/projects/impsy-interface/process/) - how the project moved from
  workflow problems to sketches, prototype screens, and design goals.
- [System walkthrough](/projects/impsy-interface/system/) - a plain-language tour of
  the play, inspect, train, configure, and perform loop.
- [Study takeaways](/projects/impsy-interface/study/) - what the honours evaluation
  suggested in public-safe terms.
- [Gallery](/projects/impsy-interface/gallery/) - process and system visuals from the
  thesis and public paper materials.
- [Resources](/projects/impsy-interface/resources/) - NIME links, code links, and
  public-release decisions.

## What I learned

The exploratory study suggested that visual feedback helped people follow what the
system was doing. Users could more easily tell when the system was receiving input,
when the AI was responding, and how the interaction was unfolding over time.

The hard part was still training and expectation-setting. A quickly trained model can
fall short of the musical response a user imagines, especially if the training data is
sparse or inconsistent. The interface helped expose that relationship while the
learning curve remained.

That lesson is useful beyond this one system. For creative AI tools, transparency is
more than an explanatory feature. It is part of how people decide whether they can work
with the system, adjust their behaviour, and keep creative control.

## Later public outcome

The honours project later became a NIME 2026 paper with Charles Martin: **A Web
Interface for Real-Time Interaction with Machine Learning in Musical Performance**.
I treat the paper as the public research milestone for this work. The fuller website
story starts earlier, with the thesis design process and the system I built.

The publication links and code links are collected on the
[resources page](/projects/impsy-interface/resources/), after the project story.

{% include impsy_project_nav.liquid active="overview" %}
