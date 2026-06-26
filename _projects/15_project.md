---
layout: page
title: Concurrent and Distributed Systems Assignments
description: low-level memory management and concurrent network programming in C
importance: 13
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this coursework for COMP2310 (Concurrent and Distributed Systems) at ANU in
Semester 2, 2022. The unit covers systems-level programming in C: memory management,
concurrency, and networked programs, all of it close to the operating system rather
than behind a higher-level language's abstractions.

There were two assignments. The first asked for a custom dynamic memory allocator: a
drop-in replacement for the standard library's `malloc`/`free` interface, evaluated
against benchmark workloads for correctness and performance. The second was a
concurrent network programming assignment, building a proxy-style server that handled
multiple simultaneous client connections.

The code for this is kept private (it's still an active ANU assignment), but here's
what it involved: implementing manual memory management without relying on the
standard library's allocator, reasoning carefully about heap layout and fragmentation,
and building a multi-threaded networked program with shared state that had to stay
correct under concurrent access.

The hardest part was debugging at this level. Memory corruption bugs and race
conditions do not announce themselves the way a typed exception does; they show up as
intermittent crashes or subtly wrong output, often far from their actual cause. Working
through that taught me to be much more deliberate about invariants (what has to remain
true about memory layout or shared state at every point in the program) rather than
just writing code and hoping it behaves. That mindset has stuck with me well beyond
systems programming specifically.
