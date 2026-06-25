---
layout: page
title: IMPSY gallery
permalink: /projects/impsy-interface/gallery/
description: Process, old workflow, and new interface visuals from the IMPSY honours project
nav: false
created: 2026-06-23
last_edited: 2026-06-25
tags:
  - impsy
  - gallery
  - images
---

<style>
  .impsy-gallery-lede {
    margin-bottom: 1.75rem;
  }

  .impsy-gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
    gap: 1.25rem;
    margin: 1rem 0 2.25rem;
  }

  .impsy-gallery-grid figure {
    margin: 0;
  }

  .impsy-gallery-grid img {
    aspect-ratio: 16 / 10;
    background: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    object-fit: contain;
  }

  .impsy-gallery-grid .caption {
    margin-top: 0.4rem;
    line-height: 1.45;
  }

  .impsy-gallery-grid--wide {
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 360px), 1fr));
  }
</style>

<p class="impsy-gallery-lede">
  This gallery is the visual archive for the IMPSY honours project. It keeps the
  original design space visible: early process diagrams, user story maps, the older
  workflow that motivated the redesign, and the later interface screens that turned the
  project into a connected musical AI tool.
</p>

## Design process

<div class="impsy-gallery-grid impsy-gallery-grid--wide">
  {% include figure.liquid path="/assets/img/impsy-design-double-diamond.png" alt="Double Diamond design process diagram used for the IMPSY honours project" caption="The project used the Double Diamond as a lightweight way to separate exploration from delivery." sizes="(min-width: 768px) 45vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-wireframe-sketch.jpg" alt="Early paper wireframe for the IMPSY interface" caption="A paper sketch tested whether logs, training, models, and response could be read as one loop." sizes="(min-width: 768px) 45vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-figma-prototype-flow.jpg" alt="Figma prototype flow for the IMPSY interface" caption="The Figma prototype connected the rough workflow into screens before implementation." sizes="(min-width: 768px) 45vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-interaction-flow.jpg" alt="IMPSY interaction flow diagram" caption="The interaction flow shows how setup, performance, logs, training, models, and configuration connect in use." sizes="(min-width: 768px) 45vw, 95vw" %}

</div>

## User story maps

<div class="impsy-gallery-grid">
  {% include figure.liquid path="/assets/img/impsy-design-user1-storymap.png" alt="User story map for a beginner musician using IMPSY" caption="Beginner-oriented story map: start quickly, understand the system, and avoid being blocked by setup." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-design-user2-storymap.png" alt="User story map for an experienced musician using IMPSY" caption="Performer-oriented story map: shape the interaction around musical material and feedback." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-design-user3-storymap.png" alt="User story map for a technical creator using IMPSY" caption="Technical-creator story map: keep configuration, data, and model control reachable." sizes="(min-width: 768px) 30vw, 95vw" %}

</div>

## Original workflow

<div class="impsy-gallery-grid">
  {% include figure.liquid path="/assets/img/impsy-old-workflow-home.jpg" alt="Older IMPSY workflow home screen" caption="Older home screen: the project exposed useful parts, but the creative loop was not yet easy to read." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-old-log.jpg" alt="Older IMPSY log files screen" caption="Log files were available as a separate technical page." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-old-dataset.jpg" alt="Older IMPSY dataset files screen" caption="Dataset files were listed directly, which made the system state visible but not very guided." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-old-model.jpg" alt="Older IMPSY model files screen" caption="Model files were inspectable, but model choice still felt detached from live interaction." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-old-config.jpg" alt="Older IMPSY configuration editor screen" caption="Configuration was editable, but the old workflow made setup feel separate from performance." sizes="(min-width: 768px) 30vw, 95vw" %}

</div>

## Redesigned interface screens

<div class="impsy-gallery-grid">
  {% include figure.liquid path="/assets/img/impsy-new-home.jpg" alt="Redesigned IMPSY home screen" caption="Home screen with a clearer start point for the project workflow." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-menu.jpg" alt="Redesigned IMPSY menu screen" caption="Menu view showing the main areas of the redesigned interface." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-recent.jpg" alt="Recent IMPSY projects screen" caption="Recent projects make returning to work less dependent on file-system knowledge." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-project-config.jpg" alt="IMPSY project configuration screen" caption="Project configuration brings setup into the same browser workflow." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-project-config-impro.jpg" alt="IMPSY project configuration and improvisation screen" caption="Configuration and improvisation stay visually connected instead of becoming separate tasks." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-improvisation.jpg" alt="IMPSY improvisation screen" caption="The improvisation view keeps musical interaction at the centre of the interface." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-log.jpg" alt="IMPSY log screen" caption="The log screen makes recorded material visible for later inspection and training." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-logvis-combined.jpg" alt="Combined IMPSY log visualisation screen" caption="Combined log visualisation compares recorded material in one view." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-logvis-individual.jpg" alt="Individual IMPSY log visualisation screen" caption="Individual log visualisation gives a closer view of a single recording." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-logvis-parallel.jpg" alt="Parallel IMPSY log visualisation screen" caption="Parallel coordinates helped explore high-dimensional musical data more directly." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-dataset.jpg" alt="IMPSY dataset screen" caption="The dataset screen connects recorded material to model training choices." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-training.jpg" alt="IMPSY training screen" caption="Training feedback keeps model creation visible while the system is working." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-finish-training.jpg" alt="IMPSY training completion screen" caption="Training completion confirms that the model can return to the performance workflow." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-model.jpg" alt="IMPSY model selection screen" caption="The model screen makes generated and saved models part of the same project path." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-model-detail.jpg" alt="IMPSY model detail screen" caption="Model details expose behaviour without forcing the user back into backend tooling." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-model-detail2.jpg" alt="Second IMPSY model detail screen" caption="Additional model detail view from the thesis design archive." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-model-distillation.jpg" alt="IMPSY model distillation visualisation screen" caption="Model visualisation was part of the attempt to make behaviour inspectable." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-about.jpg" alt="IMPSY about screen" caption="The about screen gives lightweight project context inside the interface." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-faq.jpg" alt="IMPSY FAQ screen" caption="FAQ content supports first-time use without crowding the performance screens." sizes="(min-width: 768px) 30vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-new-feedback.jpg" alt="IMPSY feedback form screen" caption="The feedback screen was part of the study-facing version of the interface." sizes="(min-width: 768px) 30vw, 95vw" %}

</div>

## System and context

<div class="impsy-gallery-grid impsy-gallery-grid--wide">
  {% include figure.liquid path="/assets/img/impsy-system-design.jpg" alt="IMPSY system design diagram" caption="The system design connects the browser interface, Flask backend, OSC messaging, MIDI hardware, logs, and models." sizes="(min-width: 768px) 45vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-dataflow.png" alt="IMPSY dataflow diagram" caption="The dataflow diagram shows how MIDI hardware, the Python backend, logs, models, browser visualisation, and real-time communication fit together." sizes="(min-width: 768px) 45vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-web-interface-teaser.jpg" alt="Overview of the IMPSY web interface beside MIDI hardware" caption="Overview of the IMPSY web interface for live interaction with a musical AI model." sizes="(min-width: 768px) 45vw, 95vw" %}

{% include figure.liquid path="/assets/img/impsy-minilab-controller.jpg" alt="MiniLab controller used with IMPSY" caption="The compact controller setup reflects the small-studio context used for testing the interface." sizes="(min-width: 768px) 45vw, 95vw" %}

</div>
