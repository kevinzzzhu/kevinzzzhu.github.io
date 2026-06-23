---
layout: page
title: IMPSY system walkthrough
permalink: /projects/impsy-interface/system/
description: A plain-language walkthrough of the IMPSY web interface workflow
nav: false
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - system
  - musical-ai
---

The IMPSY web interface connects a browser-based control surface to a Python musical
AI backend. The browser gives the user a place to manage projects, inspect data, train
or select models, configure the setup, and perform with the AI. The backend handles
model logic, MIDI communication, logging, and timing-sensitive musical response.

The important idea is that the interface follows the whole machine-learning music
loop, not just the final performance moment.

## 1. Play and record

A performer plays with a MIDI controller. The system records the interaction as a log
so it can be inspected later or reused as training material.

During performance, the interface shows live control data. This gives the performer a
basic check that the system is receiving input and that the musical action is entering
the AI workflow.

{% include figure.liquid path="/assets/img/impsy-minilab-controller.jpg" alt="A compact MIDI controller used with the IMPSY interface" caption="The public study setup used a compact controller and laptop-style workflow rather than a large installation." %}

## 2. See the AI respond

IMPSY supports call-and-response interaction. The system listens while the performer
plays, then generates a response when the interaction state calls for it.

The interface separates performer input from AI output so the exchange is visible. A
user can tell when they are driving the sound and when the model is contributing.
That visibility helped turn the model from a hidden process into something closer to a
responsive instrument.

{% include figure.liquid path="/assets/img/impsy-improvisation-visualisation.jpg" alt="IMPSY improvisation screen with input and output visualisation" caption="The live view separates human input and AI output so the performer can follow the exchange." %}

## 3. Inspect recorded data

After playing, the user can inspect logs. This is where the interface connects
performance with data.

Instead of treating recordings as hidden files, the system makes the recorded material
part of the browser workflow. That helps users decide which takes are useful for
training and which ones should be left out.

## 4. Build a model

The user can select logs and use them as training material. Training is still a
technical step, but the interface can make it easier to follow by showing progress and
keeping model choices close to the rest of the workflow.

This is one of the main public points of the project: the system does not only show
the AI's final output. It also shows the path from the user's performance data to the
model that later responds in performance.

## 5. Return to performance

Once a model is selected or trained, the performer can return to improvisation. The
loop starts again: play, listen, inspect, train, configure, and refine.

That repeated loop is where the interface becomes part of the instrument. It gives the
performer a way to understand and shape the AI through use, rather than treating the
model as a separate technical object.

{% include figure.liquid path="/assets/img/impsy-dataflow.png" alt="IMPSY system dataflow diagram" caption="The system links MIDI hardware, the Python IMPSY backend, browser views, logs, models, and real-time communication." %}

## Technical snapshot

The interface uses React for browser views and D3.js for visualisation. The backend is
Python-based and builds on the IMPSY system with mixture density recurrent neural
network models. MIDI handles musical control messages, WebSockets support real-time
updates, and HTTP endpoints support configuration and non-real-time tasks.

The technical stack matters because it supports the user-facing loop: record, inspect,
train, configure, perform, and understand.
