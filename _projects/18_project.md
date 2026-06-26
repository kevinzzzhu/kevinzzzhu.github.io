---
layout: page
title: Data Management, Analysis and Security Assignments
description: relational databases, data analysis, and applied data security
img: /assets/img/comp2420-2022-data-assignments-teaser.png
importance: 16
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this coursework for COMP2420 (Data Management, Analysis and Security) at
ANU in Semester 1, 2022. The unit spans the practical data pipeline end to end:
designing and querying relational databases, analysing data with pandas and NumPy, and
applying basic data security and privacy concepts.

There were two assignments, both built around real data. The first focused on data
analysis and exploration: cleaning a dataset, computing statistics, and drawing
defensible conclusions from it, with attention to where data quality issues could
mislead an analysis. The second moved into database design and modelling, including
entity-relationship modelling and working with structured query data, along with
applied notions of how data should be handled securely.

The code for this is kept private (it's still an active ANU assignment), but here's
what it involved: building decision-tree style models over a dataset and inspecting
their structure, designing relational schemas from an entity-relationship model, and
writing queries and analysis code in Jupyter notebooks.

{% include figure.liquid path="/assets/img/comp2420-2022-data-assignments-teaser.png" alt="A decision tree visualisation generated from one of the assignment notebooks" caption="A decision tree generated while exploring model structure for the second assignment." %}

The hardest part was staying honest about what the data could actually support. It is
easy to compute a statistic or fit a model and present it confidently; it is harder to
notice when a dataset is too noisy, too small, or too biased for the conclusion you
want to draw. That scepticism toward your own analysis is the main thing I took from
this unit, and it has carried over directly into how I treat results in later research
work.
