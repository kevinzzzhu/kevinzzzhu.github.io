---
layout: page
title: Brain-Aware Adaptive Guidance for fMRI-to-Image Reconstruction
description: a training-free fix for a guidance schedule that diffusion-based brain decoders all share
img: /assets/img/comp8539-fmri-reconstruction-teaser.png
importance: 1.5
category: coursework
related_publications: false
last_edited: 2026-06-25
---

COMP8539 (Advanced Topics in Computer Vision), Semester 2, 2025 — solo research
project. The course's central assignment wasn't a problem set, it was a semester:
pick a recent direction in vision research, reproduce a baseline properly, then find
and test a real extension. I picked fMRI-to-image reconstruction — recovering what
someone saw from their brain activity, decoded through a diffusion model — because the
existing pipelines all shared a flaw I thought I could actually fix without retraining
anything.

{% include figure.liquid path="/assets/img/comp8539-fmri-reconstruction-teaser.png" alt="Comparison of fMRI-to-image reconstructions against prior methods" caption="Reconstructions from brain activity (bottom row) against the images actually viewed (top row), compared across prior methods." %}

## Motivation

Methods like MindEye and NeuralDiffuser map fMRI signal into CLIP embedding space and
use it to condition a diffusion model via classifier-free guidance — same mechanism
text-to-image models use, with brain activity standing in for the prompt. Every one of
them applies a **fixed guidance weight across the entire denoising process**. That's a
reasonable default for text, which is a stable, trustworthy signal throughout
generation. fMRI isn't: it's noisy, and how noisy it is varies by subject and even by
trial.

## Method

**Brain-Aware Adaptive Guidance (BAAG)** — training-free, drops into an existing
encoder (MindEye, NeuralDiffuser) with no retraining. Two pieces:

1. **Phase-based scheduling.** I measured cosine similarity between conditional and
   unconditional predictions across the diffusion trajectory and found it climbs from
   ~0.80 early (high noise, coarse structure forming) to ~0.95 late (fine detail only).
   When predictions already agree that closely, guidance has almost nothing left to
   correct — so I scaled guidance down through three phases (semantic formation →
   structure refinement → detail enhancement) instead of holding it constant.
2. **Per-sample signal-quality modulation.** Text prompts are trusted uniformly; fMRI
   shouldn't be. I used the standard deviation of each sample's CLIP-mapped embedding as
   a cheap, model-agnostic proxy for how reliable that particular brain signal is, and
   scaled guidance strength to match — stronger guidance for cleaner signal, weaker for
   noisier signal, rather than treating every trial as equally trustworthy.

## Results and limitations

7-8% SSIM improvement over fixed guidance at standard guidance scales (30,000-100,000),
holding stable across that range where fixed-guidance baselines degrade. But the phase
boundaries (τ > 0.7, τ < 0.3) are hand-set on four NSD subjects, not learned, and the
standard-deviation complexity measure is a heuristic, not a validated reliability
metric — there's a real chance a more sophisticated per-sample quality estimate would
move the result further. I'd treat this as a working proof that _phase- and
signal-aware_ guidance beats _fixed_ guidance, not as the final word on how to schedule
it.

Earlier in the semester, the warm-up assignment was training a Vision Transformer on
CIFAR-10 from scratch on top of an existing open-source training scaffold — useful for
building intuition on patch embeddings and attention-map behaviour before the research
project, but a much smaller piece of work than the reconstruction project above.

**Code (ViT assignment):** [github.com/kevinzzzhu/comp8539-2025-vit-cifar10](https://github.com/kevinzzzhu/comp8539-2025-vit-cifar10)
