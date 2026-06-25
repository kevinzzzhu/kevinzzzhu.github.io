---
created: 2026-06-25
last_edited: 2026-06-25
tags:
  - impsy
  - image-audit
  - thesis-assets
  - agent-handoff
---

# IMPSY Image Allocation Audit

## Goal

Avoid using the same few IMPSY images on every subpage. The project pages should use
page-specific visuals, while the gallery can remain the fuller archive.

## Thesis Image Review

Reviewed thesis image groups under:

```text
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures
```

Useful public-facing groups:

- `old-impsy/`: historical baseline workflow screens.
- `prototype/`: paper sketch and Figma prototype.
- `user-stories/`: design-process story maps.
- `new-impsy/`: redesigned interface screens for system walkthrough and gallery.
- `study-preparation/configuration.jpg`: public-safe study setup image.
- `data-collection/quantitative/sus_avg_scores_bar.png`: public-safe study summary
  chart.

Avoid by default:

- `appendix/`: consent, participant information, SUS form, sample questions, and
  recruitment documents.
- `data-collection/qualitative/`: quotes/codes/themes can expose study material and
  make the personal site feel too close to raw analysis.
- `study-preparation/poster*.jpg`: recruitment/noticeboard photos are less useful and
  may expose QR codes or unrelated public-board material.
- `related-works/`: useful in the thesis, but not part of Kevin's own project story.
- ANU logos and generic stock/source images.

## Current Page Allocation

| Page               | Image role                           | Current images                                                                                                                               |
| ------------------ | ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Hub                | public project overview              | `impsy-web-interface-teaser.jpg`, `impsy-improvisation-visualisation.jpg`                                                                    |
| Design process     | origin and design work               | `impsy-old-workflow-home.jpg`, `impsy-wireframe-sketch.jpg`, `impsy-figma-prototype-flow.jpg`                                                |
| System walkthrough | interface workflow screens           | `impsy-new-home.jpg`, `impsy-new-improvisation.jpg`, `impsy-new-logvis-combined.jpg`, `impsy-new-training.jpg`, `impsy-new-model-detail.jpg` |
| Study takeaways    | evaluation context and result signal | `impsy-study-session-setup.jpg`, `impsy-study-sus-average.png`                                                                               |
| Gallery            | archive                              | all public-safe process, old workflow, redesigned interface, and system/context images                                                       |
| Resources          | asset inventory only                 | no figure embeds                                                                                                                             |

## Rule For Future Agents

Do not add the same figure to multiple narrative subpages unless it serves a clearly
different role. Prefer linking to the gallery for extra screenshots instead of
repeating images across hub, process, system, and study pages.
