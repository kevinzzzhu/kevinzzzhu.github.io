---
created: 2026-06-23
last_edited: 2026-06-25
tags:
  - impsy
  - personal-website
  - honours-thesis
  - agent-handoff
  - harness
---

# IMPSY Project Page Redo Harness

This is the manager handoff for redoing Kevin's IMPSY personal website pages.

The current site content leans too heavily on the accepted NIME 2026 paper. The redo
should treat the COMP4550 honours thesis as the main story source and use the NIME
paper as a public publication milestone, not as the whole project.

Use this document as the shared harness. Each agent must update only the rows in its
scope so the next agent can see what is current, stale, blocked, or waiting for
Kevin's decision.

## Manager Direction

The project page should feel like a personal project record:

- what Kevin built
- why the old IMPSY workflow needed a better interface
- how the design moved from requirements, personas, sketches, and prototypes into a
  working React/Flask/D3 system
- what the system looks like and how someone would use it
- what the honours study suggested in plain terms
- how the NIME paper fits as a later public outcome

The pages should not read like a compressed paper abstract, a thesis chapter, or a
single long academic page.

## Harness Method

Run the work as a controlled harness:

1. **Orient**: read repo instructions and current IMPSY pages.
2. **Re-audit**: inspect the thesis files and public NIME sources.
3. **Select**: choose thesis material that can become public-facing pages.
4. **Draft**: write readable page plans and copy before implementation.
5. **Curate**: select public-safe visuals from thesis and NIME sources.
6. **Implement**: update the hub and linked pages.
7. **Validate**: build, browse-check, link-check, and scan for private files.
8. **Handoff**: update this tracker and list unresolved Kevin decisions.

Do not skip the tracker. It is the continuity layer for the next agent.

## Source Priority For This Redo

Use this order:

1. **COMP4550 honours thesis source** for the project story, design process, system
   walkthrough, study framing, screenshots, and reflection.
2. **Final NIME proceedings page and official PDF** for public publication facts.
3. **Local NIME camera-ready source and assets** for title, final paper figures, and
   public-safe images.
4. **Older drafts and planning notes** only as history. Do not use them for public
   facts unless a manager explicitly approves the item.

The NIME paper is still important, but it must not dominate the page structure.

## Authoritative Source Paths

Website repo:

```text
/Users/kevinzhu/Documents/personal-website/kevinzzzhu.github.io
```

Honours thesis source:

```text
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550_Kevin_Zhu.pdf
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/
```

Key thesis files to inspect:

```text
COMP4550-Kevin Zhu/1-introduction.tex
COMP4550-Kevin Zhu/2-background.tex
COMP4550-Kevin Zhu/3-requirementAnalysis.tex
COMP4550-Kevin Zhu/4-systemDesign.tex
COMP4550-Kevin Zhu/5-caseStudy.tex
COMP4550-Kevin Zhu/6-concludingRemarks.tex
COMP4550-Kevin Zhu/z-appendix-1.tex
```

NIME/publication source:

```text
/Users/kevinzhu/Documents/Publications/NIME-2026/
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/nime-paper.tex
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026.pdf
https://nime2026.org/proceedings/196.html
https://nime.org/proceedings/2026/nime2026_102.pdf
```

## Known Public Facts

- Official title:
  `A Web Interface for Real-Time Interaction with Machine Learning in Musical Performance`
- Authors: Hongzhe Zhu and Charles Martin.
- Venue: NIME 2026 / New Interfaces for Musical Expression 2026.
- Conference: June 23-26, 2026, London, UK and online.
- Official proceedings page: `https://nime2026.org/proceedings/196.html`.
- Official paper PDF: `https://nime.org/proceedings/2026/nime2026_102.pdf`.
- Upstream IMPSY repo: `https://github.com/cpmpercussion/impsy`.

Do not use older titles such as
`IMPSY: A Web Interface for Democratizing Human-AI Musical Collaboration`.

## Thesis-To-Web Content Strategy

Build a hub-and-spoke page set. The hub should be concise enough to browse, while
subpages hold the deeper story.

| Page               | Purpose                                                         | Main thesis material                                                                                                 | Paper/publication role                               |
| ------------------ | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Main project hub   | Personal overview, what was built, why it matters, links onward | Intro, problem statement, conclusion, selected screenshots                                                           | Short NIME status block and resource link            |
| Design process     | How the interface took shape                                    | Double Diamond, personas, user stories, old workflow feedback, sketches, Figma prototype                             | Mention how thesis story later became paper framing  |
| System walkthrough | What the tool does in use                                       | Architecture, frontend/backend workflow, logging, model training/selection, configuration, performance visualisation | Use final paper images if clearer                    |
| Study takeaways    | What Kevin learned from the honours evaluation                  | Case study procedure, SUS summary, thematic findings, limitations                                                    | Use NIME numbers only if consistent with final paper |
| Gallery            | Let visitors inspect visuals quickly                            | Public-safe thesis and NIME screenshots, diagrams, prototypes                                                        | Curated images only                                  |
| Resources          | Public outputs and project links                                | Thesis is internal unless approved                                                                                   | NIME page/PDF, upstream repo, optional poster/video  |

Writing rules:

- Use short paragraphs and concrete captions.
- Explain terms before naming them.
- First-person is allowed where it makes the page more personal.
- Do not paste thesis paragraphs wholesale.
- Do not publish raw participant quotes, consent/ethics material, feedback PDFs, or
  private logs.
- Avoid claims like "proved", "solved", "validated", or broad "democratizing AI".
- Prefer language like "helped", "suggested", "made visible", "pointed to", and
  "made it easier to understand".

## What Must Change From Current Site

The current IMPSY pages are useful scaffolding but are not the final target.

- The hub must start from the honours project and the interface problem, not the paper.
- The design page must become a real process story from thesis material, not a generic
  publication companion.
- The system page must explain the built tool in a way a musician/HCI student can
  follow.
- The study page must explain what was done and learned without exposing private
  material.
- The resources page must make the NIME paper one resource among the project outputs.
- The gallery must be checked for thesis visuals that add the missing process/system
  story.

## Public-Safety Rules

Do not copy, publish, quote, or link:

- CMT reviews or meta-reviews
- ethics approval files
- consent forms
- participant information sheets
- recruitment forms
- raw interviews, videos, feedback PDFs, or participant folders
- raw logs, datasets, models, private project directories, or private supervisor notes
- screenshots that reveal raw participant data, private filenames, or identifying data

Do not publish the thesis PDF unless Kevin explicitly approves it.

## Multi-Agent Redo Plan

Do not assign the whole redo to one agent. Use bounded agents with separate write
scopes.

Recommended sequence:

1. **Thesis Source Mapper**: inspect the thesis and produce a source map for the
   website story.
2. **Content Architect**: convert the source map into page outlines and draft copy.
3. **Asset Curator**: select and copy public-safe thesis/NIME visuals.
4. **Implementation Agent**: update the Jekyll pages from the approved plan.
5. **Style Manager**: review voice, consistency, and personal-site tone.
6. **UI Tester**: run browser checks, mobile checks, link checks, and private-file
   scans.
7. **Manager Integrator**: reconcile agent outputs, update this harness, and prepare
   the final commit.

Agents 1-3 can run in parallel after they read this harness. Agents 4-7 should run
after the content and asset decisions are recorded.

## Agent Prompt Pack

Use these prompts as separate handoffs. Do not merge them into one agent.

### Agent 1: Thesis Source Mapper

```markdown
# Agent Brief: IMPSY Thesis Source Mapper

<role>
You are a thesis-source mapping agent. You specialize in turning a thesis repository
into a concise, traceable content map for public website work.
</role>

<mission>
Inspect the COMP4550 honours thesis source and identify the thesis material that should
drive Kevin's IMPSY personal website redo. Update only
`output/impsy-project-page-harness.md` tracker rows and write your mapping report to
`output/impsy-thesis-source-map.md`.
</mission>

<context>
Website repo:
/Users/kevinzhu/Documents/personal-website/kevinzzzhu.github.io

Harness:
output/impsy-project-page-harness.md

Thesis source:
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550

Current problem:
The current pages refer too much to the NIME paper. The redo must use the honours
thesis as the main source for the project story.
</context>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, and the harness.
2. Inspect the thesis files listed under "Authoritative Source Paths".
3. Map thesis sections to public page purposes: hub, design process, system
   walkthrough, study takeaways, gallery, resources.
4. Identify source-backed claims that are suitable for public website copy.
5. Identify material that must remain private or needs Kevin approval.
6. Update only the relevant tracker rows in the harness.
</workflow>

<constraints>
- Do not edit website pages.
- Do not copy assets.
- Do not quote raw participant material.
- Do not publish or recommend publishing the thesis PDF.
- Keep the report practical and non-academic.
</constraints>

<output_contract>
Return:

1. `output/impsy-thesis-source-map.md` created or updated.
2. Thesis sections mapped to each proposed page.
3. Public-safe claims and story beats.
4. Private or excluded material.
5. Harness tracker rows updated.
   </output_contract>
```

### Agent 2: Content Architect

```markdown
# Agent Brief: IMPSY Thesis-First Content Architect

<role>
You are a personal-website content architect. You turn source maps into readable page
plans and draft copy for non-specialist visitors.
</role>

<mission>
Using `output/impsy-thesis-source-map.md` and this harness, produce a thesis-first page
plan and draft copy for the IMPSY hub and linked pages. Write your output to
`output/impsy-thesis-first-content-plan.md` and update the harness tracker.
</mission>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, the harness, and the thesis source map.
2. Review the current implemented IMPSY pages only to see what must be replaced or
   reused.
3. Draft a page plan for hub, design process, system walkthrough, study takeaways,
   gallery, and resources.
4. Write sample copy in a personal-site tone: clear, direct, lightly first-person, and
   not too academic.
5. Mark which current copy should be removed because it is paper-first.
6. Update the harness tracker and decisions list.
</workflow>

<constraints>
- Do not implement Jekyll pages.
- Do not copy thesis prose wholesale.
- Do not include raw participant quotes or private study details.
- Treat the NIME paper as a status/resource block, not the main narrative.
- Keep headings understandable to musicians, HCI students, and potential supervisors.
</constraints>

<output_contract>
Return:

1. `output/impsy-thesis-first-content-plan.md` created or updated.
2. Proposed page hierarchy and navigation labels.
3. Draft copy or detailed bullet copy for each page.
4. Current content to remove or rewrite.
5. Open decisions for Kevin.
   </output_contract>
```

### Agent 3: Thesis/Public Asset Curator

```markdown
# Agent Brief: IMPSY Thesis/Public Asset Curator

<role>
You are a visual asset and publication-safety agent. You select a small set of images
that make the thesis-first project story easier to understand.
</role>

<mission>
Inspect thesis and NIME visual assets, choose public-safe images for the page set, copy
approved assets into the website repo with clean filenames, and update the asset ledger
in the harness.
</mission>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, and the harness.
2. Inspect existing copied IMPSY assets under `assets/img/` and the thesis/NIME
   candidate folders.
3. Select only images that support the thesis-first story: old workflow, design
   process, prototype, system architecture, performance, configuration, study setup.
4. Visually inspect every selected asset before copying.
5. Copy public-safe assets into `assets/img/` with lowercase `impsy-...` names.
6. Run the sensitive-file scan from the harness and update the asset ledger.
</workflow>

<constraints>
- Do not copy participant folders, consent/ethics material, feedback PDFs, raw logs,
  raw models, or anything identifying.
- Do not copy the thesis PDF.
- Do not dump every screenshot.
- If an image contains private filenames, raw data, or participant material, reject it.
</constraints>

<output_contract>
Return:

1. Assets copied with source and destination paths.
2. Assets rejected and why.
3. Sensitive-file scan command and result.
4. Harness asset ledger updated.
   </output_contract>
```

### Agent 4: Jekyll Page Implementation

```markdown
# Agent Brief: IMPSY Thesis-First Page Implementation

<role>
You are a Jekyll/al-folio content implementation agent. You implement approved website
copy and assets while matching the existing personal site style.
</role>

<mission>
Redo the IMPSY project hub and linked pages so they tell the honours thesis project
story first, with the NIME paper as a public milestone/resource. Use the content plan,
asset ledger, and harness tracker as the source of truth.
</mission>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`,
   `.github/agents/customize.agent.md`, `.github/instructions/markdown-content.instructions.md`,
   the harness, `output/impsy-thesis-source-map.md`, and
   `output/impsy-thesis-first-content-plan.md`.
2. Confirm the source-map, content-plan, and asset-curation rows are ready.
3. Rewrite `_projects/2_project.md` as the thesis-first hub.
4. Rewrite or create:
   - `_pages/impsy-interface-process.md`
   - `_pages/impsy-interface-system.md`
   - `_pages/impsy-interface-study.md`
   - `_pages/impsy-interface-gallery.md`
   - `_pages/impsy-interface-resources.md`
5. Preserve existing working routes unless the harness explicitly changes them.
6. Update the harness tracker rows for implemented pages.
</workflow>

<constraints>
- Keep the tone personal and readable.
- Do not add unsupported claims.
- Do not make the page a paper summary.
- Do not publish the thesis PDF, local video, or extra code links unless the harness
  says Kevin approved them.
- Leave unrelated files and untracked `.claude/` content alone.
</constraints>

<output_contract>
Return:

1. Files changed.
2. Pages rewritten or created.
3. Assets and links used.
4. Harness tracker rows updated.
5. Open decisions or blockers.
   </output_contract>
```

### Agent 5: Style Manager

```markdown
# Agent Brief: IMPSY Style Manager

<role>
You are a style consistency reviewer for Kevin's personal website. You focus on voice,
structure, and whether the page feels like a personal project record rather than an
academic paper.
</role>

<mission>
Review the implemented IMPSY pages and write a style report to
`output/impsy-thesis-first-style-review.md`. Make small markdown edits only if they are
clearly style fixes and do not change facts.
</mission>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, the harness, and the implementation diff.
2. Review the hub and all linked IMPSY pages.
3. Check for paper-first framing, academic density, unsupported claims, awkward
   headings, and inconsistent navigation labels.
4. Make small style-only edits if obvious; otherwise record required fixes.
5. Update the harness style rows.
</workflow>

<constraints>
- Do not restructure pages heavily.
- Do not introduce new facts.
- Do not make the copy sound like a thesis abstract.
- Keep criticism specific with file paths and suggested fixes.
</constraints>

<output_contract>
Return:

1. `output/impsy-thesis-first-style-review.md` created or updated.
2. Style issues found, grouped by page.
3. Small edits made, if any.
4. Remaining fixes for the implementation agent.
5. Harness tracker updated.
   </output_contract>
```

### Agent 6: UI Tester

```markdown
# Agent Brief: IMPSY UI Tester

<role>
You are a UI QA agent for a Jekyll/al-folio site. You verify that the thesis-first
IMPSY pages render correctly and do not expose private material.
</role>

<mission>
Run release checks for the IMPSY redo. Verify build, routes, links, images, mobile
layout, dark mode, and sensitive-file safety. Write findings to
`output/impsy-thesis-first-ui-test.md` and update the harness tracker.
</mission>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, the harness, and the implementation diff.
2. Run targeted formatting for changed IMPSY markdown files. Use repo-wide Prettier
   only if it does not traverse unrelated `.claude/` worktrees.
3. Run `bundle exec jekyll build`. Use Docker only if available.
4. Serve the site locally and browser-check:
   - `/projects/`
   - `/projects/impsy-interface/`
   - `/projects/impsy-interface/process/`
   - `/projects/impsy-interface/system/`
   - `/projects/impsy-interface/study/`
   - `/projects/impsy-interface/gallery/`
   - `/projects/impsy-interface/resources/`
5. Check desktop and mobile widths, dark mode, image loading, PDF links, and long URL
   wrapping.
6. Run:
   `find assets -type f | rg -i "review|cmt|ethic|consent|participant|interview|meta-review"`
7. Update the harness QA rows.
</workflow>

<constraints>
- Do not change content direction.
- Do not remove unrelated files.
- Do not push.
- If a check is blocked by the environment, report the exact blocker and use the
  closest reliable fallback.
</constraints>

<output_contract>
Return:

1. `output/impsy-thesis-first-ui-test.md` created or updated.
2. Commands run and results.
3. Browser routes checked.
4. Issues fixed or blockers found.
5. Harness tracker updated.
   </output_contract>
```

### Agent 7: Manager Integrator

```markdown
# Agent Brief: IMPSY Manager Integrator

<role>
You are the manager/integration agent. You reconcile completed subagent outputs and
decide whether the redo is ready for final review or needs another targeted pass.
</role>

<mission>
Read all thesis-first subagent outputs, inspect the final page state, update this
harness as the single source of current status, and prepare the final commit only when
the redo matches Kevin's thesis-first direction.
</mission>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, the harness, and all `output/impsy-thesis-first-*`
   or `output/impsy-thesis-source-map.md` reports.
2. Compare implemented pages against the manager direction and tracker.
3. Verify every unresolved decision is either handled conservatively or left clearly
   marked for Kevin.
4. Run final build/link/sensitive-file checks or confirm the UI tester's evidence is
   current.
5. Update this harness.
6. Commit with `docs: redo IMPSY project pages from thesis` if the repo rules require
   the manager to commit.
</workflow>

<constraints>
- Do not push.
- Do not mark the redo complete if the pages still read primarily as a NIME paper
  summary.
- Do not publish thesis/video/poster assets without explicit approval.
- Leave unrelated changes untouched.
</constraints>

<output_contract>
Return:

1. Integration verdict: ready, needs targeted pass, or blocked.
2. Evidence checked.
3. Files changed since the previous manager pass.
4. Remaining Kevin decisions.
5. Commit hash if committed.
   </output_contract>
```

## Up-To-Date Tracker

Keep `Last checked` as an ISO date. The current implemented pages are marked as stale
because Kevin requested a thesis-first redo.

| Item                     | Source / Path                                        | Status               | Last checked | Notes                                                                                                                    |
| ------------------------ | ---------------------------------------------------- | -------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Project instructions     | `AGENTS.md`, `CLAUDE.md`                             | Checked              | 2026-06-25   | `CLAUDE.md` points to `AGENTS.md`.                                                                                       |
| Current IMPSY hub        | `_projects/2_project.md`                             | Implemented          | 2026-06-25   | Rewritten to lead with COMP4550 honours project, interface problem, contribution, and internal pages.                    |
| Process page             | `_pages/impsy-interface-process.md`                  | Implemented          | 2026-06-25   | Reworked around old workflow, design tools, wireframe, Figma prototype, and design goals.                                |
| System page              | `_pages/impsy-interface-system.md`                   | Implemented          | 2026-06-25   | Reworked as connect/play, AI response, inspect data, train/choose model, configure, and return loop.                     |
| Study page               | `_pages/impsy-interface-study.md`                    | Implemented          | 2026-06-25   | Public-safe reflective study page; SUS demoted to a design signal.                                                       |
| Gallery page             | `_pages/impsy-interface-gallery.md`                  | Implemented          | 2026-06-25   | Rebuilt as the main design archive: process diagrams, story maps, original workflow, redesigned screens, system/context. |
| Resources page           | `_pages/impsy-interface-resources.md`                | Implemented          | 2026-06-25   | Reordered as project context, publication, code, website assets, and pending decisions.                                  |
| Thesis Source Mapper     | `output/impsy-thesis-source-map.md`                  | Checked              | 2026-06-25   | Agent 1 produced thesis-first page/source map; use before content implementation.                                        |
| Content Architect        | `output/impsy-thesis-first-content-plan.md`          | Checked              | 2026-06-25   | Agent 2 produced thesis-first hierarchy, draft copy, asset placement, and implementation checklist.                      |
| Asset Curator            | `output/impsy-thesis-asset-curation.md`              | Checked              | 2026-06-25   | Earlier subset expanded on Kevin's request to include the original design image archive.                                 |
| Page Implementation      | IMPSY Jekyll pages                                   | Implemented          | 2026-06-25   | Agent 4 updated the hub, five linked pages, copied selected assets, and left commit/push untouched.                      |
| Style Manager            | `output/impsy-thesis-first-style-review.md`          | Checked              | 2026-06-25   | Agent 5 reviewed voice/consistency and made small style-only wording edits.                                              |
| UI Tester                | `output/impsy-thesis-first-ui-test.md`               | Checked              | 2026-06-25   | Agent 6 verified build, routes, desktop/mobile layout, images, PDF links, public scans, and caveats.                     |
| Manager Integrator       | This harness                                         | Not started          |              | Assign Agent 7 last.                                                                                                     |
| Official NIME paper page | `https://nime2026.org/proceedings/196.html`          | Checked              | 2026-06-23   | Recheck if publication facts are edited.                                                                                 |
| Official NIME PDF        | `https://nime.org/proceedings/2026/nime2026_102.pdf` | Checked              | 2026-06-23   | Keep as public source of truth for paper.                                                                                |
| Thesis PDF               | `COMP4550_Kevin_Zhu.pdf`                             | Needs Kevin decision | 2026-06-25   | Do not publish by default.                                                                                               |
| Upstream IMPSY repo      | `https://github.com/cpmpercussion/impsy`             | Checked              | 2026-06-23   | Keep unless a public web-interface repo is verified.                                                                     |
| Paper PDF local copy     | `assets/pdf/impsy-nime-2026-paper.pdf`               | Existing             | 2026-06-25   | Safe to keep, but should not dominate resources.                                                                         |
| Sensitive file scan      | `find assets ... rg ...`                             | Checked              | 2026-06-25   | Agent 6 repeated broad/scoped scans; no IMPSY private-material leaks found.                                              |
| Local Jekyll build       | `bundle exec jekyll build`                           | Checked              | 2026-06-25   | Passed during Agent 6 UI testing.                                                                                        |
| Commit                   | `docs: redo IMPSY project pages from thesis`         | Not started          |              | Do not push.                                                                                                             |

Status values:

- `Not started`: no work done for the redo.
- `Checked`: source inspected and current enough for this redo.
- `Existing`: already present from previous pass.
- `Needs thesis-first redo`: implemented but misaligned with Kevin's updated direction.
- `Needs asset recheck`: implemented but needs a fresh visual/safety pass.
- `Selected`: approved for inclusion.
- `Selected with caution`: useful candidate, but must be cropped or visually checked
  before copying.
- `Copied`: copied into website assets.
- `Implemented`: page/content updated for the thesis-first redo.
- `Skipped`: deliberately not included; explain why.
- `Needs Kevin decision`: do not proceed without approval.
- `Blocked`: cannot continue; explain exact blocker.

## Asset Ledger

Record every copied source and destination. Existing assets may be reused if they serve
the thesis-first story, but the asset curator must actively re-evaluate thesis visuals.

| Source file                                                            | Destination file                                   | Status   | Intended use           | Notes                                                                 |
| ---------------------------------------------------------------------- | -------------------------------------------------- | -------- | ---------------------- | --------------------------------------------------------------------- |
| `.../IMPSY_Web_Interface_NIME_2026/images/zhu-web-interface-1000.jpg`  | `assets/img/impsy-web-interface-teaser.jpg`        | Existing | Hub / thumbnail        | Good NIME asset, but should not be the only project visual.           |
| `.../IMPSY_Web_Interface_NIME_2026/images/new-impsy-improvisation.jpg` | `assets/img/impsy-improvisation-visualisation.jpg` | Existing | Performance/system     | Reuse if still visually useful.                                       |
| `.../IMPSY_Web_Interface_NIME_2026/images/configuration.jpg`           | `assets/img/impsy-configuration.jpg`               | Existing | Configuration/system   | Reuse if still visually useful.                                       |
| `.../IMPSY_Web_Interface_NIME_2026/images/dataflow.png`                | `assets/img/impsy-dataflow.png`                    | Existing | System walkthrough     | Reuse if the page explains it clearly.                                |
| `.../IMPSY_Web_Interface_NIME_2026/images/minilab3.jpg`                | `assets/img/impsy-minilab-controller.jpg`          | Existing | Optional gallery       | Keep optional.                                                        |
| `.../figures/old-impsy/old-impsy-home.jpg`                             | `assets/img/impsy-old-workflow-home.jpg`           | Copied   | Design process/gallery | Cropped to top workflow menu to avoid lower machine/project metadata. |
| `.../figures/prototype/draw-wireframe.jpg`                             | `assets/img/impsy-wireframe-sketch.jpg`            | Copied   | Design process/gallery | Strong thesis-first process visual.                                   |
| `.../figures/prototype/figma-prototype.jpg`                            | `assets/img/impsy-figma-prototype-flow.jpg`        | Copied   | Design process/gallery | Strong thesis-first prototype visual.                                 |
| `.../IMPSY_Web_Interface_NIME_2026/images/interaction-flow.jpg`        | `assets/img/impsy-interaction-flow.jpg`            | Copied   | System walkthrough     | Visually checked before copying; used for navigation/workflow story.  |
| `.../figures/double-diamond.png`                                       | `assets/img/impsy-design-double-diamond.png`       | Optional | Design process         | Safe but generic; use only if it helps the story.                     |
| `.../figures/user-stories/user1-storymap.png`                          | `assets/img/impsy-design-user1-storymap.png`       | Copied   | Gallery / story maps   | Included in compact grid as part of the original design space.        |
| `.../figures/user-stories/user2-storymap.png`                          | `assets/img/impsy-design-user2-storymap.png`       | Copied   | Gallery / story maps   | Included in compact grid as part of the original design space.        |
| `.../figures/user-stories/user3-storymap.png`                          | `assets/img/impsy-design-user3-storymap.png`       | Copied   | Gallery / story maps   | Included in compact grid as part of the original design space.        |
| `.../figures/system-design.jpg`                                        | `assets/img/impsy-system-design.jpg`               | Copied   | Gallery / system       | Included beside dataflow and context images.                          |
| `.../figures/old-impsy/old-impsy-config.jpg`                           | `assets/img/impsy-old-config.jpg`                  | Copied   | Gallery / old workflow | Included as historical UI; avoid using as hero image.                 |
| `.../figures/old-impsy/old-impsy-dataset.jpg`                          | `assets/img/impsy-old-dataset.jpg`                 | Copied   | Gallery / old workflow | Included as historical UI; avoid using as hero image.                 |
| `.../figures/old-impsy/old-impsy-log.jpg`                              | `assets/img/impsy-old-log.jpg`                     | Copied   | Gallery / old workflow | Included as historical UI; avoid using as hero image.                 |
| `.../figures/old-impsy/old-impsy-model.jpg`                            | `assets/img/impsy-old-model.jpg`                   | Copied   | Gallery / old workflow | Included as historical UI; avoid using as hero image.                 |
| `.../figures/new-impsy/*.jpg`                                          | `assets/img/impsy-new-*.jpg`                       | Copied   | Gallery / screen set   | Full thesis design-screen set copied for compact responsive archive.  |

## Link Ledger

| Link text                | URL / path                                           | Status               | Where used | Notes                                                                                   |
| ------------------------ | ---------------------------------------------------- | -------------------- | ---------- | --------------------------------------------------------------------------------------- |
| Official NIME paper page | `https://nime2026.org/proceedings/196.html`          | Existing             | Resources  | Keep as publication milestone.                                                          |
| Official NIME PDF        | `https://nime.org/proceedings/2026/nime2026_102.pdf` | Existing             | Resources  | Keep.                                                                                   |
| Local final paper PDF    | `/assets/pdf/impsy-nime-2026-paper.pdf`              | Existing             | Resources  | Keep if desired, but official PDF should remain source of truth.                        |
| IMPSY upstream repo      | `https://github.com/cpmpercussion/impsy`             | Existing             | Resources  | Keep unless better code links are verified.                                             |
| Honours thesis PDF       | TBD                                                  | Needs Kevin decision | Resources  | Do not add without approval.                                                            |
| Web interface repo       | TBD                                                  | Needs verification   | Resources  | User asked why thesis repo was missed earlier; verify exact public repo before linking. |

## Decisions Needed From Kevin

| Decision                                                                | Default if no answer       | Why it matters                                                 |
| ----------------------------------------------------------------------- | -------------------------- | -------------------------------------------------------------- |
| Should the honours thesis PDF be public on the website?                 | Do not publish.            | Thesis may contain material not intended for public release.   |
| Which repo should represent Kevin's thesis/web-interface work publicly? | Link only upstream IMPSY.  | Avoid exposing private or stale code.                          |
| Should the lightning talk MP4 be hosted locally or linked externally?   | Do not host until checked. | Local video affects repo size and page loading.                |
| Should the poster PDF be hosted locally?                                | Do not host until checked. | Poster may be public-safe, but approval is cleaner.            |
| How much SUS detail should the public study page include?               | Keep mostly qualitative.   | Avoid making the personal site feel like an evaluation report. |

## Handoff Notes

- This harness was rewritten on 2026-06-25 because Kevin said the current content
  refers too much to the paper and should include the thesis project more fully.
- Agent 1 produced `output/impsy-thesis-source-map.md`, which maps thesis chapters to
  the hub, process, system, study, gallery, and resources pages.
- Agent 3 produced `output/impsy-thesis-asset-curation.md`, which selects thesis-first
  visual candidates and rejects raw/private study, log, model, ethics, and feedback
  material.
- Agent 2 produced `output/impsy-thesis-first-content-plan.md`, which gives the
  implementation agent page hierarchy, draft copy, current-content demotions, asset
  captions, and an implementation checklist.
- The previous implementation can be reused as page structure, routes, and some assets,
  but the narrative should be rebuilt from the thesis.
- Leave unrelated untracked `.claude/` content untouched.
- Update `last_edited` whenever this file changes.
