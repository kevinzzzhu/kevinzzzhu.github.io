---
layout: page
title: Enhancing ConSinGAN with Self-Attention
description: fine-tuning a single-image GAN to trade off diversity and fidelity
img: /assets/img/comp4528-cv-mini-project-teaser.png
importance: 1
category: coursework
related_publications: false
last_edited: 2026-06-25
---

This was my mini project for **COMP4528 (Computer Vision), Semester 8, 2025** at ANU. The brief was open: pick a computer vision problem, implement something non-trivial, and evaluate it properly. I chose single-image generative modelling, where a model learns to generate diverse, realistic images from just one training photo.

## The problem

SinGAN and its successor ConSinGAN showed that a multi-scale GAN trained on a single natural image can still produce varied, plausible samples. But these models are built from stacked convolutional stages, so they mostly capture local texture and struggle with long-range structure, like keeping a building's far-left and far-right edges consistent with each other. Diffusion-based alternatives such as SinDiffusion fix this but are much slower to sample from. I wanted to see how far a lightweight change to ConSinGAN could close that gap without giving up its speed.

## What I built

I fine-tuned the final stage of ConSinGAN's generator on a single photo of the John Curtin School of Medical Research, with three changes: a SAGAN-style self-attention layer before the last convolution so every spatial location can attend to every other one, spectral normalisation on the tail layers to constrain the Lipschitz constant, and a switch to AdamW (with much lower learning rates on the earlier, untouched stages) so fine-tuning wouldn't destroy the pretrained coarse-to-fine structure.

{% include figure.liquid path="/assets/img/comp4528-cv-mini-project-teaser.png" alt="Sample output from the fine-tuned ConSinGAN model without spectral normalisation" caption="A generated sample from my fine-tuned ConSinGAN, the self-attention variant trained without spectral normalisation." %}

I evaluated three configurations, original ConSinGAN, fine-tuned with spectral normalisation, and fine-tuned without it, using SIFID and LPIPS over multiple samples.

## What I found

The fine-tuned variants improved sample diversity (lower LPIPS), with the no-spectral-normalisation version doing best, but both cost a little realism (higher FID) against the untouched baseline. Spectral normalisation on the attention module didn't help; AdamW's weight decay seemed to be regularisation enough on its own. Getting the per-stage learning rates right mattered more than expected, the wrong balance pushed training straight into mode collapse.

**Honestly:** I trained everything on an Apple M1 Pro without a real GPU, capping my batch sizes and how much hyperparameter search I could afford. The result is a believable, well-evaluated trade-off between diversity and fidelity, not a clear win, and I think that is the more accurate finding to report.

**Code:** [github.com/kevinzzzhu/comp4528-2025-cv-mini-project](https://github.com/kevinzzzhu/comp4528-2025-cv-mini-project)
