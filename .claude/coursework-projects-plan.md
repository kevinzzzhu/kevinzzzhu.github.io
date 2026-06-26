---
created: 2026-06-25
last_edited: 2026-06-25
tags: [projects, coursework, plan]
---

# Coursework Projects Plan

Goal: add `_projects/*.md` entries (category: `coursework`) for Bachelor of Advanced
Computing coursework worth showcasing on the site, sourced from
`/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-*-20XX/`.

Process: go semester by semester. For each candidate course below, Kevin provides the
real details (what the project was, what he built/contributed, outcome, any
images/links/repo to reference). I then draft the `_projects/N_project.md` file in the
established format (see `_projects/2_project.md` for the fullest example: layout, title,
description, img, importance, category, permalink, related_publications,
last_edited, body with `{% include figure.liquid %}` for images).

Site mechanics confirmed:
- `_config.yml` already lists `coursework` in `display_categories` for `/projects/`.
- Project files are numbered `N_project.md`; `importance` controls sort order within a
  category (lower = higher up).
- Existing projects use `category: work` (PickNPlay, IMPSY). New entries should use
  `category: coursework` unless Kevin says otherwise.
- Images go in `/assets/img/`, referenced via `{% include figure.liquid path="..." %}`.

## Status legend
- `[ ]` not started — waiting on Kevin's input
- `[~]` drafted, needs review
- `[x]` done, file created in `_projects/`
- `[-]` decided to skip (not worth a project page)

## Semester 1, 2021

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP1100 (Functional Prog, Haskell) | Assignment 3 — likely a strategy game with AI player | found `Coding/comp1100-assignment3` |
| [ ] | COMP1720 (Web Design/Multimedia) | Major project | found `Coding/comp1720-2021-major-project` — creative web build |
| [ ] | COMP1730 (Programming for Scientists, Python) | Project assignment | found `Code/Project assignment` — likely data analysis script |
| [-] | MATH1013 | — | no project content found |

## Semester 2, 2022

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP1110 (Structured Programming, Rust) | Assignment 1 and/or 2 | found `comp1110-ass1`, `comp1110-ass2` with src/tests — likely game/app builds |
| [ ] | COMP2300 (Computer Systems) | Assignment 1 and/or 2 | found `comp2300-2022-assignment-1/2` — embedded/STM32 systems work |
| [ ] | COMP2420 (Data Management, Analysis & Security) | Assignment 1 and/or 2 | found `comp2420-2022-ass1/2` with data/img — data wrangling |
| [-] | MATH1005 | — | no project content found |

## Semester 3, 2022

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP1600 (Formal Methods) | Hoare logic prover | found `hoare-logic-prover` — custom verification tool, niche but distinctive |
| [ ] | COMP2100 (Software Engineering Studio) | Group assignment / "microchat" | found `Group assignment`, `microchat`, `Video Assignment` (Android app) — likely the strongest SE group project of this semester |
| [ ] | COMP2310 (Concurrent & Distributed Systems) | Assignment 1 (malloc bench) / Assignment 2 ("tiny") | found `comp2310-assignment-1` (custom allocator + benchmarks), `comp2310-assignment-2/tiny` — systems programming |
| [-] | COMP2400 (Databases) | — | mostly SQL/NoSQL exercises, lower priority unless Kevin wants it included |

## Semester 4, 2023

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP4350 (Sound & Music Computing) | Solo + group performances ("Electro Phonic's Final Performance"), gibber/Pure Data work | found `SMC-2023-submissions` (lens-performance, portfolio-1/2, solo-performance), `Electro Phonic's Final Performance` — creative coding/music tech, fits research interest in musical AI |
| [-] | COMP2620 (Formal methods/security?) | — | assignment folders only, no obvious standout project yet — confirm with Kevin |
| [ ] | COMP3425 | Assignment 1 / 2 | need Kevin to confirm what this course covered and whether worth including |
| [-] | JPNS1012 | — | language course, not a coding project |

## Semester 5, 2023

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP2120 (Version Control & SE Project) | "EduSmart" (full-stack web app, has `client/` — likely MERN-style) | found `EduSmart/` with client folder — group project |
| [ ] | COMP2120 | "Unlucky" (libGDX game) | found `Unlucky/` with android/core/desktop modules — game project |
| [ ] | COMP3540 (Game Engines/Programming) | "Botato" and/or `comp3540-2023-game-project` (Unity) | found `Botato/`, `comp3540-2023-game-project/group-project` — Unity game |
| [ ] | COMP3600 (AI / Algorithms) | Assignment 1 / 2 | found `Assignment 1-20230805`, `Assignment 2` — confirm what algorithms/AI agent was built |
| [ ] | COMP3900 | Assessment 1 / 1B / 3 | need Kevin to confirm course content and project — name suggests it could be a capstone-style project |

## Semester 6, 2024

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP1710 (Web Authoring) | Website project (`P5R/` or `assignment/`) | found two web builds with css/js/assets — confirm which is the real submission |
| [ ] | COMP3620 (Artificial Intelligence) | Assignment 1/2/3 (search, CSP, SAT solving) | found `comp3620-2024-assignment-1/2/3` — classic AI algorithms coursework |
| [ ] | COMP4450 (Robotics?) | VSLAM + AR literature review / proposal | found `Proposal/Different vslam algo`, `Visual-Based Localization`, `vslam and AR` — research-style robotics/CV project, fits research interests |
| [ ] | COMP4610 (Advanced Computer Graphics) | "Realtime-Vulkan-Hair" and/or "FurSimulation" | found both as full repos with src/build/presentations — strong, visual graphics project, likely the standout of this semester |
| [-] | COMP3620 "FurSim" (also under COMP4610) | — | looks like the same fur-rendering project appears under two courses; confirm with Kevin which course it belongs to / whether to merge into one entry |

## Semester 7, 2024

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP3500 (TechLauncher) | Yarn Speech / yarn-techlauncher (Flutter app), brick_breaker | found `yarn-techlauncher/`, `yarn-techlauncher-workshop-1/`, `brick_breaker/` — ties to the Yarn Speech internship already in CLAUDE.md; confirm if this should be a standalone project or folded into an existing bio mention |
| [-] | COMP3670 (Intro to Machine Learning) | Assignments ass1/2/3 | standard coursework, likely not distinctive enough — confirm with Kevin |
| [x] | COMP4550 (Honours thesis) | IMPSY Web Interface | already published as `_projects/2_project.md` — no action needed |

## Semester 8, 2025

| Status | Course | Candidate project | Notes |
|---|---|---|---|
| [ ] | COMP4528 (Computer Vision) | Mini Project (Colab notebooks + code) | found `Mini Project/Colab Notebooks`, `Mini Project/code` — confirm topic, fits CV research interest |

## Not yet semester-mapped / extra

- `android-projects/MyApplication`, `android-projects/wechat` — unclear which course/personal; confirm with Kevin whether these are course-linked.
- `htoo's research project` — appears to be a collaborator's project, likely not Kevin's own — confirm before considering.

## Final execution table (2026-06-25)

Decisions confirmed with Kevin: standard/reused intro-course assignments get **private**
repos (page still public); large independent or group projects get **public** repos
with full git history/authors kept; COMP3500 gets a page but **no repo** (per Kevin's
instruction). COMP3425 (S4 2023, R/stats report assignments, no real code project) and
COMP2620/COMP2400 dropped — not distinctive enough.

Ordered newest-semester-first. `File` = `_projects/N_project.md`, `Importance` = sort
key within `category: coursework`.

| File | Importance | Course | Semester | Visibility | Status |
|---|---|---|---|---|---|
| 3 | 1 | COMP4528 — CV mini project | Sem 8, 2025 | public | [~] |
| 4 | 2 | COMP3670 — ML assignments | Sem 7, 2024 | private | [~] |
| 5 | 3 | COMP3500 — TechLauncher (Yarn Speech) | Sem 7, 2024 | no repo | [~] |
| 6 | 4 | COMP4610 — Realtime Vulkan Hair / Fur Sim | Sem 6, 2024 | public | [~] |
| 7 | 5 | COMP4450 — VSLAM + AR | Sem 6, 2024 | public | [~] |
| 8 | 6 | COMP3620 — AI search/CSP/SAT assignments | Sem 6, 2024 | private | [~] |
| 9 | 7 | COMP1710 — Web authoring project | Sem 6, 2024 | public | [~] |
| 10 | 8 | COMP3900 — HighFidelity UX prototype | Sem 5, 2023 | public, no repo | [~] |
| 11 | 9 | COMP3600 — AI/algorithms assignments | Sem 5, 2023 | private | [~] |
| 12 | 10 | COMP3540 — Unity game project | Sem 5, 2023 | public (group) | [~] |
| 13 | 11 | COMP2120 — EduSmart + Unlucky | Sem 5, 2023 | public (group) | [~] |
| 14 | 12 | COMP4350 — Sound & Music Computing | Sem 4, 2023 | public | [~] |
| 15 | 13 | COMP2310 — malloc bench / tiny | Sem 3, 2022 | private | [~] |
| 16 | 14 | COMP2100 — SE Studio (microchat etc.) | Sem 3, 2022 | public (group) | [~] |
| 17 | 15 | COMP1600 — Hoare logic prover | Sem 3, 2022 | public | [~] |
| 18 | 16 | COMP2420 — Data management ass1/2 | Sem 2, 2022 | private | [~] |
| 19 | 17 | COMP2300 — Embedded systems ass1/2 | Sem 2, 2022 | private | [~] |
| 20 | 18 | COMP1110 — Structured programming ass1/2 | Sem 2, 2022 | private | [~] |
| 21 | 19 | COMP1730 — Project assignment | Sem 1, 2021 | private | [~] |
| 22 | 20 | COMP1720 — Web design major project | Sem 1, 2021 | public | [~] |
| 23 | 21 | COMP1100 — Functional programming assignment | Sem 1, 2021 | private | [~] |

Dispatched as parallel subagents (one agent batched the 9 "private/standard
assignment" rows together: COMP3670, COMP3620, COMP3600, COMP2310, COMP2420, COMP2300,
COMP1110, COMP1730, COMP1100). GitHub account: `kevinzzzhu` (gh CLI authenticated).

### Outcome (2026-06-25)

18 of 21 items completed and live. Corrections made mid-run when subagents caught
source-folder problems:

- **COMP1600 (file 17) dropped entirely.** The "hoare-logic-prover" folder turned out
  to be 100% Giorgio Dell'Immagine's MIT-licensed public repo (cloned as course
  reference material) — zero of Kevin's own commits. Not published, no page written.
- **COMP4610 (file 6) redone.** First pass almost published two folders
  (`Realtime-Vulkan-Hair`, `FurSimulation`) that are pure third-party clones (zero
  Kevin commits). Found the real graded deliverable instead: a 3-person group report +
  small original codebase, "Simulation of Inextensible Hair and Fur" (Shiqi Ding,
  Kevin Zhu, Yu Sun). Pushed as `kevinzzzhu/comp4610-2024-hair-fur-simulation`.
- **COMP2120 (file 13) done, with a squashed repo.** First pass found "EduSmart" and
  "Unlucky" were not Kevin's real coursework (unrelated open-source/other-developer
  projects). Located the actual real group deliverable at
  `comp-2120-assignment-3-workshop-04-group-f` (tile-based libGDX RPG, 5 real
  teammates). Pushing full history was **hard-blocked** at the system level even after
  Kevin re-confirmed directly (Data Exfiltration guard on third-party PII in commit
  history — does not generalize from the earlier COMP2100/COMP3540 approval). Resolved
  by squashing to a single commit under Kevin's authorship only (no teammates'
  names/emails in history) and pushing that publicly:
  https://github.com/kevinzzzhu/comp2120-2023-group-project. Page text still credits
  "my team" generically.
- **COMP1720 (file 22) was missing from the original dispatch — added.** Real project:
  "Timeless Attraction," a p5.js interactive piece. Pushed as
  `kevinzzzhu/comp1720-2021-timeless-attraction`.

Known minor cleanup items (not blocking, flagged for awareness):
- `comp1710-2024-insulaire` repo accidentally includes an unrelated mislabeled PDF
  (`u7338066-report1710-6780.pdf`, actually a different course's HCI report) that was
  sitting in the source folder — harmless (Kevin's own work, not sensitive), just
  untidy.
- `comp2100-2022-microchat` repo name doesn't match its real content (it's actually an
  Android marketplace app called "Android Spy" — the empty "microchat" repo was a
  placeholder). Page text already describes it correctly; only the repo slug is off.

## Second pass (2026-06-25, same day) — work category + master's coursework + rewrite

Follow-up request: recategorise TechLauncher under `work`, add SAIEP and two Plenty
Health placeholders under `work`, add 4 master's coursework entries, and rewrite
existing pages so they don't all share one template (vary structure, cut generic
"if I rebuilt this today" style reflections).

**Work category additions:**
- File 5 (TechLauncher/Yarn Speech) recategorised `coursework` → `work`.
- File 24: SAIEP — QTank digital marketing project, page only, no repo (consulting
  deliverable, not code).
- Files 25, 26: Plenty Health placeholders — deliberately thin stubs, marked
  "Placeholder — write-up pending," since no source material exists locally to draw
  from yet.

**New master's coursework (category `coursework`, importance < 1 to sort before the
2025 undergrad entries since these are more recent):**
- File 27: COMP8535 MovieLens collaborative filtering (Sem 1 2026) — public, repo
  already existed at github.com/kevinzzzhu/comp8535-movielens-cf (solo-authored).
- File 28: COMP8280 INTERLINK student hub (Sem 1 2026) — digital prototype repo
  already existed at github.com/kevinzzzhu/digital-hub (public, solo). The physical-hub
  side (group report, real teammates named in the PDF) was NOT pushed as a repo per
  Kevin's instruction — only described in the page text with images.
- File 29: COMP8539 fMRI-to-image reconstruction research project + ViT assignment
  (Sem 2 2025) — main research project has no local code (page only); pushed a new
  public repo for the ViT assignment's original files only:
  github.com/kevinzzzhu/comp8539-2025-vit-cifar10 (excludes the third-party
  kentaroy47/vision-transformers-cifar10 scaffold it was built on, credited in README).
- File 30: COMP8430 Data Wrangling assignments (Sem 2 2025) — private repo
  (kevinzzzhu/comp8430-2025-data-wrangling), standard reused-assignment treatment.

**Rewrite pass:** removed the literal flagged passage ("Responsiveness was the part I
underestimated... Honest reflection: If I rebuilt this today...") from file 9
(COMP1710), and de-templated the repeated "What I built / My contribution / What I
learned / What I took from it" skeleton in files 6, 13, 14, 16 — folded into varied
prose, renamed headers, or replaced with a results table (file 6) so projects don't
all read the same shape. Files already structurally distinct (1, 2, 3, 4, 7, 8, 10-12,
15, 18-23, 27-30) were left alone.

**Outstanding / for Kevin to fill in:** Plenty Health placeholders (25, 26) need real
content whenever source material is available.

## Next steps

1. Go through this list with Kevin one semester at a time (starting Semester 1, 2021),
   confirming: which candidates are actually worth a project page, what to say about
   each (problem, contribution, outcome), and whether there are images/screenshots to
   use.
2. Draft `_projects/N_project.md` for confirmed ones, `category: coursework`, following
   the existing format and tone (first-person, practical framing, like
   `_projects/1_project.md` / `_projects/2_project.md`).
3. Update this plan's status column as files are created, and prune skipped items.
4. Remember pre-commit checklist from `AGENTS.md`: run `npx prettier . --write` and
   `docker compose up --build` to verify before committing.
