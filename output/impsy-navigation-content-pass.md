---
created: 2026-06-25
last_edited: 2026-06-26
tags:
  - impsy
  - navigation
  - content-pass
  - agent-handoff
---

# IMPSY Navigation and Content Pass

## What Changed

The IMPSY section now uses the site's side-arrow navigation instead of an in-page
button strip. The overview page stays in the project layer, so its side arrows move
between projects. The IMPSY subpages use custom side-arrow targets in
`_layouts/default.liquid`:

- `/projects/impsy-interface/`
- `/projects/impsy-interface/process/`
- `/projects/impsy-interface/system/`
- `/projects/impsy-interface/study/`
- `/projects/impsy-interface/gallery/`
- `/projects/impsy-interface/resources/`

The old `_includes/impsy_project_nav.liquid` button include was removed.

## Content Expansion

Expanded the narrative pages using public-safe thesis content:

- Overview: added the HCI + systems framing, implemented screen areas, user
  perspectives, and contribution framing.
- Design process: added Double Diamond framing, old-interface baseline, user-story
  role, interface specifications, and the shift from file pages to workflow.
- System walkthrough: added frontend/backend/protocol architecture, interaction modes,
  log-to-model relationship, training feedback, and model traceability.
- Study takeaways: added methodology structure, SUS interpretation, qualitative themes,
  limitations, and future-work directions.
- Resources: clarified thesis-vs-NIME layers and what is intentionally not public.

## Rule For Future Agents

Keep the pages connected. Do not create a new IMPSY subpage without updating the
IMPSY side-arrow branch in `_layouts/default.liquid`. Keep expansion professional and
source-backed, but avoid copying thesis paragraphs verbatim or exposing private
participant materials.
