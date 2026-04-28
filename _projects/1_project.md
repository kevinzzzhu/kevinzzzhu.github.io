---
layout: page
title: PickNPlay
description: from social choice theory to real board game decisions
importance: 1
category: work
related_publications: false
---

I started this project from a very practical frustration: choosing a board game with a group sounds simple, but in reality it is often slow, messy, and sometimes unfair. People have different preferences, different energy levels, and different constraints (time, player count, complexity), and a lot of decisions are made by whoever speaks first or loudest.

At the same time, I have been working in HCI and computational social choice, so I keep asking the same question: can we make group decisions feel fairer and easier without removing human control?

## Why this project

Board game selection is a good micro world for collective decision-making. It is social, fast, and full of trade-offs. Existing tools usually focus on filtering and recommendation, while algorithm-focused systems often optimise outcomes but do not help people understand the process.

I want something in the middle: a system that is computationally strong, but still human-centred, transparent, and socially comfortable to use.

## What I am building

This project has two connected systems with different interaction styles:

- **PickNPlay (active interaction):** a web interface where participants can explore preferences and outcomes directly, and see how small input changes affect group decisions in real time.
- **Boardot (passive interaction):** an AI-host style facilitator that helps pace the session, summarise options, and reduce coordination burden when people do not want to micromanage every step.

Together, they form a framework for structured information flow between people and algorithms.

<a class="pnp-teaser" href="{{ '/projects/picknplay-wireframe/' | relative_url }}">
  <span class="pnp-teaser-icon">🗺️</span>
  <span class="pnp-teaser-body">
    <strong>Explore the interactive wireframe</strong>
    <span>Full mobile app flow — four phases, ~36 screens, click to zoom in</span>
  </span>
  <span class="pnp-teaser-arrow">&rarr;</span>
</a>

## Research direction

My goal is to improve usability and accessibility of social choice in casual group settings, with a focus on:

- understanding of mechanism logic,
- trust in outcomes,
- perceived procedural fairness,
- and social cohesion while deciding as a group.

Current research questions include:

1. How can interactive visualisation improve engagement and understanding in social-choice-supported group decisions?
2. How do active and passive interaction modes change trust, fairness perception, and social experience?
3. How should social choice results be communicated so people feel informed rather than controlled?
4. How far can AI facilitation go while still preserving participants' sense of control?

## Project structure

The work is currently organised as:

1. Background and related work (social choice, fair allocation, visualisation, human-centred AI)
2. Requirement analysis and overall system concept
3. System design and architecture (PickNPlay + Boardot)
4. User study and evaluation (usability, fairness, trust, cohesion)
5. Conclusions, limitations, and future directions

## Current status

This is an ongoing thesis project. The core idea and framework are stable, and the next big milestone is tightening the prototype and running deeper evaluation with users in realistic group scenarios.
