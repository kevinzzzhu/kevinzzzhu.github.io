---
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - style-review
  - content-management
---

# IMPSY Style Manager Review

Scope: style guidance only. Do not edit website pages, copy assets, or change the
implementation harness from this pass.

## Current Site Voice Summary

Kevin's personal website currently sounds personal, direct, and project-led.

- The strongest pages start from a concrete frustration or question, then move into
  the system and research direction.
- First person is normal and useful: "I started...", "I want...", "I kept asking...".
- The tone is informal but still research-aware. It does not read like a paper
  abstract.
- Sections are plain and functional: "Why this project", "What I am building",
  "Research direction", "Current status".
- Technical terms are allowed, but they usually come after the reader understands the
  practical problem.
- The blog voice is more casual and reflective; the project pages should keep the
  same personal quality while being cleaner and more structured.

Style target for IMPSY: Kevin explaining a research project he built, not a thesis
chapter summarising itself.

## Style Risks In The Thesis-To-Web Draft

The draft direction is broadly right, but the implementation agent should tighten it.

- **Too long for the hub:** the current page and draft risk becoming a full narrative
  essay. Keep the hub as an entry point and move depth into linked pages.
- **Too thesis-shaped:** page names like "User Study" and "System Walkthrough" are
  fine, but avoid chapter-style explanations of methodology, frameworks, and results.
- **Repeated abstraction:** "transparency", "trust", "agency", "legibility", and
  "human-AI exchange" are useful, but become generic if repeated without concrete
  interface examples.
- **Too defensive around evaluation:** explain limits plainly. Do not spend multiple
  paragraphs apologising for SUS, small sample size, or training difficulty.
- **Too much source bookkeeping:** the public page should link to NIME and resources,
  but it should not narrate source precedence, internal file history, or agent audit
  decisions.
- **Over-specific technical stack too early:** React, D3.js, Python, MDRNN,
  WebSockets, REST, and MIDI belong in a short technical snapshot, not the opening.
- **Academic claim inflation:** do not turn exploratory study findings into proof that
  transparency creates trust or agency.
- **Subpage sprawl:** create linked pages only where each page has enough useful
  content and visuals. Empty "resources" or "gallery" pages are worse than compact
  hub sections.

## Rewrite Rules For Implementation

- Start each page with the practical problem before the research framing.
- Use first person on the hub and process page; use lighter first person on system and
  study pages.
- Prefer short paragraphs: 2-4 sentences for prose blocks.
- Use concrete verbs: built, tested, showed, recorded, trained, visualised, linked.
- Introduce technical terms after the plain-language explanation.
- Keep claims cautious: "suggested", "helped", "made visible", "pointed to".
- Pair every abstract idea with an interface detail. Example: if saying
  "transparency", mention logs, input/output visualisation, training state, or model
  selection.
- Treat the NIME paper as a milestone block, not the whole identity of the page.
- Keep the thesis as source material for design story and screenshots, not as public
  prose.
- Use sentence-case headings unless the existing template or page title requires
  otherwise.
- Avoid long lists unless they help scanning. A project hub should feel navigable, not
  like a table of contents for a thesis.
- If SUS 62.50 is included, put it only on the study page with context. Do not put it
  in the hub.

## Recommended Page Hierarchy And Length Targets

Use a hub-and-spoke structure, but keep the first implementation pass lean.

| Page                                       | Role                                                                   | Target length               | Style notes                                                  |
| ------------------------------------------ | ---------------------------------------------------------------------- | --------------------------- | ------------------------------------------------------------ |
| Main project hub: `_projects/2_project.md` | Fast overview, personal motivation, NIME status, visual preview, links | 800-1,100 words             | Most personal page. Must be readable without subpages.       |
| Process page                               | How the project moved from old workflow problems to interface design   | 600-900 words               | Use thesis material, but skip framework-heavy explanation.   |
| System page                                | Plain-language walkthrough of record, inspect, train, perform          | 650-900 words               | Keep technical stack to one short snapshot.                  |
| Study page                                 | What was tested and what Kevin learned                                 | 500-800 words               | Cautious, human, non-defensive. No raw participant material. |
| Gallery page                               | Selected screenshots with captions                                     | 150-300 words plus captions | Only create if there are enough curated visuals.             |
| Resources page                             | NIME links, paper/poster/video/code decisions                          | 200-400 words               | Functional link collection. Avoid narrative padding.         |

If implementation time is tight, prioritise:

1. Main hub
2. System page
3. Process page
4. Study page
5. Gallery/resources only if assets and links are ready

## Preferred Phrasing Examples

Use these as style anchors, not mandatory copy.

1. **Opening:** "I built the IMPSY web interface because the musical AI system was
   powerful, but the workflow was hard to see while performing."
2. **Problem frame:** "If a performer cannot tell what the system heard, recorded, or
   used for training, it is hard to treat the AI as a responsive instrument."
3. **System summary:** "The interface brings recording, log inspection, model
   training, configuration, and live improvisation into one browser workflow."
4. **Visualisation claim:** "The goal was not to make the AI perfect, but to make the
   interaction easier to read while it was happening."
5. **NIME status:** "This honours project later became a NIME 2026 paper with Charles
   Patrick Martin."
6. **Study takeaway:** "The study suggested that visual feedback helped people follow
   the exchange, while training a useful model still remained a learning curve."
7. **Limitation:** "A clearer interface cannot fix sparse training data, but it can
   help users understand why the model behaves the way it does."
8. **Resources heading:** "Paper, code, and project materials"

Good heading patterns:

- Why this project
- What the interface does
- How the workflow fits together
- What the study suggested
- What I took from it
- Paper and resources

## Red Flags To Avoid

- Do not keep `(AI generated content may be wrong)`.
- Do not use the old title `IMPSY: A Web Interface for Democratizing Human-AI Musical
Collaboration`.
- Do not describe the project as "democratizing AI" unless Kevin explicitly asks for
  that framing.
- Do not claim the system "proved", "solved", "validated", or "guaranteed" trust,
  agency, usability, or creativity.
- Do not overuse "black box"; once is enough if paired with a concrete workflow
  problem.
- Do not publish raw participant quotes, participant details, ethics/consent material,
  CMT reviews, review responses, or private planning files.
- Do not turn the site into a copy of the NIME abstract or COMP4550 thesis.
- Do not list every implementation technology in the opening.
- Do not create a long generic related-work section.
- Do not include thesis PDF, poster, or video links unless the relevant approval is
  clear in the harness or Kevin confirms it.
- Do not make the hub depend on subpages for basic understanding.

## Implementation Manager Notes

The thesis-to-web draft is usable as source copy, but it needs compression and a more
Kevin-like rhythm. Keep the personal motivation and the practical interface loop. Cut
methodological scaffolding, repeated abstract nouns, and apologetic evaluation prose.

The final page should make a visitor understand three things quickly:

1. IMPSY is a musical AI performance system.
2. Kevin's contribution was a web interface that made the data/model/performance loop
   easier to see and shape.
3. The project became a NIME 2026 paper, with deeper process, system, study, gallery,
   and resource pages available only where they add real value.
