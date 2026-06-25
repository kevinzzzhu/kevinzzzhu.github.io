---
layout: page
title: IMPSY system walkthrough
permalink: /projects/impsy-interface/system/
description: A plain-language walkthrough of the IMPSY web interface workflow
nav: false
created: 2026-06-23
last_edited: 2026-06-26
tags:
  - impsy
  - system
  - musical-ai
---

The system is easiest to understand as a loop: play, inspect, train, configure, and
return to performance.

The browser interface handles the visible workflow. The Python backend handles IMPSY's
musical AI logic, MIDI communication, logging, and timing-sensitive response. I start
with what a user does first, then leave the backend details for the technical snapshot.

The thesis describes the implementation as a three-layer system: a React frontend for
the visible workflow, a Python backend containing the IMPSY engine, and communication
channels that connect hardware, browser views, and musical software. MIDI handles
controller input and output, WebSockets carry real-time updates to the browser, OSC can
support external musical setups, and REST endpoints handle slower tasks such as
configuration changes.

## 1. Connect and play

A performer starts with a MIDI controller and the browser interface. The first job of
the interface is to make the system state visible: is the controller connected, is the
system receiving input, and is the performance being recorded?

This matters because the user's playing is sound and also data that can be reviewed,
selected, and used for later model training.

The start screen matters because IMPSY is not only a performance interface. It is also
a project-management surface for a creative machine-learning process. Users need to
know whether they are starting from an existing model, a recent project, or a new
configuration before they enter the performance view.

{% include figure.liquid path="/assets/img/impsy-new-home.jpg" alt="Redesigned IMPSY home screen" caption="The home screen gives the user a clear start point before they choose an existing model or begin a new project." %}

## 2. See the AI respond

IMPSY supports call-and-response interaction. The system listens while the performer
plays, then generates a response when the interaction state calls for it.

The interface separates performer input from AI output so the exchange is visible. A
user can tell when they are driving the sound and when the model is contributing.
That visibility helped turn the model from a hidden process into something closer to a
responsive instrument.

The backend supports several interaction modes. In call-and-response, the system
alternates between listening and replying. In polyphony, the performer and AI can
sound together. Other modes can let the AI run more autonomously or record only the
user. Those modes are technical, but the interface problem is practical: the user needs
to understand what role the AI is currently playing.

{% include figure.liquid path="/assets/img/impsy-new-improvisation.jpg" alt="IMPSY improvisation screen from the thesis interface" caption="The improvisation screen keeps musical interaction at the centre while the browser tracks the system state." %}

## 3. Inspect recorded data

After playing, the user can inspect logs. This is where the interface connects
performance with data.

Instead of treating recordings as hidden files, the system makes the recorded material
part of the browser workflow. That helps users decide which takes are useful for
training and which ones should be left out.

The thesis emphasised this log-to-model relationship. Logs are not just evidence that
something happened; they are future training material. The interface therefore needs
retrospective visualisation, not just a list of files. Time-series and parallel
coordinate views let users inspect musical control data before it is reused by a
model.

{% include figure.liquid path="/assets/img/impsy-new-logvis-combined.jpg" alt="Combined IMPSY log visualisation screen" caption="The combined log visualisation keeps recorded performance material visible before it becomes training data." %}

## 4. Train or choose a model

The user can train from selected material or choose an existing model. Training is
still conceptually difficult, especially in a short creative session, but the interface
can make the step more visible by keeping data, model state, and progress close to the
rest of the workflow.

This is the relationship I wanted the interface to make clearer: the system shows the
AI's final output alongside the path from the user's performance data to the model that
later responds in performance.

Training progress is a slower part of the workflow, so it needed a different kind of
feedback from the live improvisation view. Instead of only showing input/output
activity, the interface has to communicate that the backend is processing selected log
data, building a new model, and saving it for later performance. The goal was to keep
that waiting period legible rather than pushing it into a terminal.

{% include figure.liquid path="/assets/img/impsy-new-training.jpg" alt="IMPSY model training screen" caption="The training view makes model creation feel like part of the same workflow rather than a separate backend task." %}

## 5. Configure and return to performance

Configuration stays in the browser workflow so setup remains connected to performance.
Once the user has selected settings and a model, they return to improvisation and the
loop starts again.

That repeated loop is the heart of the project. The interface lets the user move
between musical action and machine-learning state without treating the model as a
separate technical object.

{% include figure.liquid path="/assets/img/impsy-new-model-detail.jpg" alt="IMPSY model detail screen" caption="The model detail view keeps trained model behaviour inspectable before the user returns to performance." %}

## Data and model traceability

One important thesis detail was traceability. The backend records which logs belong to
a project, and trained models keep a record of the data used to create them. That
matters for creative work because a model is not neutral or mysterious: its behaviour
comes from particular recorded material and particular configuration choices.

The web interface turns that backend structure into a usable workflow. A user can
inspect logs, select material, train a model, review model details, and then return to
performance with a clearer sense of what the AI has learned from.

## Technical snapshot

The interface uses React for browser views and D3.js for visualisation. Components such
as the live input/output visualisers, log graphs, parallel-coordinate views, training
visualiser, and model views turn arrays of musical control data into something a user
can inspect. The backend is Python-based and builds on the IMPSY system with mixture
density recurrent neural network models. MIDI handles musical control messages,
WebSockets support real-time updates, OSC supports musical-software integration, and
HTTP endpoints support configuration and non-real-time tasks.

The technical stack matters because it supports the user-facing loop: record, inspect,
train, configure, perform, and understand.
