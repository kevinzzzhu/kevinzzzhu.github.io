---
layout: page
title: Computer Systems Embedded Assignments
description: bare-metal microcontroller programming on STM32 hardware
importance: 17
category: coursework
related_publications: false
last_edited: 2026-06-25
---

I completed this coursework for COMP2300 (Computer Systems) at ANU in Semester 1, 2022. The unit teaches computer systems from the bottom up, ending with bare-metal
programming on STM32 microcontroller hardware: no operating system, no standard
library safety net, just direct control of registers, memory, and peripherals.

There were two assignments, each centred on building a small embedded application
directly on the board. The work involved writing a design document and proposal before
implementation, then building the program in a low-level language with direct access to
hardware peripherals such as LEDs, audio output, and other onboard components, and
producing a final compiled binary that ran on the actual microcontroller.

The code for this is kept private (it's still an active ANU assignment), but here's
what it involved: writing startup and hardware-interfacing code without an operating
system underneath it, planning the design on paper first, and getting code running
correctly on real hardware where the usual debugging tools are far more limited than on
a desktop environment.

The hardest part was the lack of a safety net. On a normal application, a crash gives
you a stack trace; on bare metal, a mistake can just produce silence, a frozen board, or
behaviour that only manifests intermittently, and the only way to debug it is to reason
carefully about what the hardware should be doing at each step. That experience gave me
a much more concrete sense of what is actually happening underneath the higher-level
languages and frameworks I use day to day.
