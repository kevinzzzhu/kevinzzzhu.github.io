---
layout: page
title: Quantile-Initialised Ordinal Collaborative Filtering
description: a MovieLens recommender that treats ratings as ordinal, not regression targets
img: /assets/img/comp8535-movielens-teaser.png
importance: 0.1
category: coursework
related_publications: false
last_edited: 2026-06-25
---

COMP8535 (Engineering Data Analytics), Semester 1, 2026, group research project. Most
collaborative-filtering coursework stops at "predict the rating with matrix
factorisation, report RMSE." This one didn't — it argues that treating a 1-5 star
rating as a continuous regression target throws away the fact that the categories are
ordered but not evenly spaced, and tests whether modelling that ordinality actually
buys anything on MovieLens-100K.

{% include figure.liquid path="/assets/img/comp8535-movielens-teaser.png" alt="Manifold projections of learned user and item embeddings" caption="PCA, metric MDS, and IsoMap projections of the post-fusion embeddings, coloured by user occupation and item genre." %}

## The method

The model is a matrix-factorisation backbone with two additions: a **gated auxiliary
fusion** layer that blends learned user/item embeddings with side features (age,
gender, occupation for users; genre one-hots for items) through a learned gate rather
than naive concatenation, and a **cumulative-link ordinal head** in place of the usual
sigmoid/regression output, with thresholds initialised from the empirical rating
quantiles rather than left at zero.

## Results

Run as a full ablation matrix — 3 fusion modes × 2 heads × 5 canonical splits × 3
seeds, 90 runs total, not a single lucky split:

| Fusion    | Head        | RMSE                | NLL                 |
| --------- | ----------- | ------------------- | ------------------- |
| none      | sigmoid     | 0.9160 ± 0.0061     | —                   |
| additive  | ordinal     | 0.9174 ± 0.0040     | 1.2654 ± 0.0017     |
| **gated** | **ordinal** | **0.9124 ± 0.0036** | **1.2584 ± 0.0043** |

Gated fusion + ordinal head wins on every metric simultaneously, but the more
interesting finding is in the interaction: the ordinal head only helps once there's a
fusion mechanism to feed it — added to the no-fusion baseline alone, it makes RMSE
slightly _worse_ (+0.0010). A calibration-only model without representational capacity
to use the extra structure has nothing to calibrate against.

We also caught our own mistake mid-project: an earlier protocol used test-set-driven
early stopping, which is leakage. Re-running with a proper held-out validation slice
shifted RMSE on the worst split from 0.9108 to 0.9179 — worse, but methodologically
correct, and worth reporting as a correction rather than quietly fixing it and moving
on.

**Code and paper:** [github.com/kevinzzzhu/comp8535-movielens-cf](https://github.com/kevinzzzhu/comp8535-movielens-cf)
