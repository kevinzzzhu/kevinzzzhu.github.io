---
layout: page
title: VSLAM-Driven Geospatial Mapping for Mobile AR
description: a research proposal on using visual slam to keep 3d maps current
importance: 5
category: coursework
related_publications: false
last_edited: 2026-06-25
---

This was my research proposal and literature review for COMP4450, Semester 6, 2024, at
ANU. The course had no implementation or exam component: it was graded on a research
proposal (35%), a literature review (55%), and a short presentation (10%), so the
deliverable here is written research, not software.

## What I looked at

My proposal, "Enhancing Networked Geospatial Models: Leveraging VSLAM for Advanced
Virtual Mapping Assistance Through Mobile AR," started from a concrete limitation in
current 3D mapping. Services like Google Earth rely on infrequent, vehicle-based 3D
scans, so they cannot reflect fast-changing urban environments such as construction
detours or temporary road closures. I proposed a framework (which I called NGMEF) that
would let mobile AR devices contribute real-time visual updates back into a shared
geospatial model, using Visual Simultaneous Localization and Mapping (VSLAM) to align
those contributions accurately with the existing map.

The literature review that followed surveyed the building blocks this idea depends on:
different VSLAM algorithm families and their trade-offs under resource constraints,
image-based and multi-camera visual localization methods, and existing networked
architectures for multi-user AR. I was trying to establish whether the pieces needed for
crowd-sourced, real-time 3D map updates already existed in the literature, or where the
open problems were.

## My angle

I came at this less as a robotics specialist and more from an interaction and systems
angle: the question I kept returning to was not just "can VSLAM localize accurately
enough," but "what would make ordinary users want to contribute this data at all,"
since a system that depends on AR users opportunistically capturing updates only works
if the capture experience is fast and unobtrusive. That framing connects back to my
broader interest in human-centred computing: even an infrastructure-level proposal like
this one has a usability question sitting underneath the technical one.

No implementation exists for this project; it stayed at the proposal and literature
review stage, as the course required.
