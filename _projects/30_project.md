---
layout: page
title: Data Wrangling — Record Linkage and Blocking
description: deduplication, blocking, and record linkage across four assignments
importance: 1.6
category: coursework
related_publications: false
last_edited: 2026-06-25
---

COMP8430/3430 (Data Wrangling), Semester 2, 2025, ANU — four assignments across one
semester, each building on the last: data profiling and cleaning, deduplication and
cross-dataset consistency, blocking and record linkage, then a final assignment
applying the pipeline to messy medical and birth-record datasets.

The throughline across all four is that "messy data" isn't one problem — missingness,
duplication, inconsistent formatting, and ambiguous matches across datasets each need a
different technique, and a pipeline that only handles one of them quietly breaks on
the others. Blocking in particular forces a real trade-off: too coarse and you miss
true matches, too fine and record linkage becomes computationally infeasible at scale —
that tension was the most interesting part of the later assignments, more so than the
linkage methods themselves.

Since these are standard ANU assignments that get reused across cohorts, the repository
is kept private rather than public — current students could otherwise pull working
implementations straight off it. Happy to walk through the actual approach directly if
useful.
