---
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - personal-website
  - nime-2026
  - agent-handoff
  - harness
---

# IMPSY Project Page Update Harness

This document is the handoff harness for updating Kevin's personal website project
page for the IMPSY Web Interface / NIME 2026 paper.

Use this as the single working brief for the implementation agent. Update the tracker
sections as you verify sources, copy public assets, edit pages, and run checks.

## Harness Method

The work should run as a controlled harness:

1. **Orient**: read project instructions and confirm the current repo state.
2. **Verify**: check public facts and source material before writing claims.
3. **Select**: choose only public-safe content and assets.
4. **Implement**: update the project page and linked pages.
5. **Validate**: format, build, browse-check, and confirm no private files were copied.
6. **Handoff**: update this tracker with what is current, what changed, and what still
   needs Kevin's decision.

Do not skip the tracker. It is the continuity layer for the next agent.

## Multi-Agent Work Plan

Do not assign the whole website refresh to one agent. Split the work into small,
reviewable passes. Each agent must update the tracker rows that belong to its scope.

Recommended sequence:

1. **Source Audit Agent**: verify public facts, identify private/sensitive material, and
   update the source/link tracker.
2. **Thesis-to-Web Content Agent**: turn selected thesis chapters into readable page
   outlines and draft copy, without copying thesis prose wholesale.
3. **Asset Curation Agent**: select and copy only public-safe screenshots/PDF/video
   assets, then update the asset ledger.
4. **Page Implementation Agent**: implement the main project page and agreed subpages
   using the audited content and assets.
5. **QA / Release Agent**: run formatting, build, browser checks, link checks, and
   sensitive-file scans before final commit.

If Kevin wants to approve content before implementation, stop after Agent 2 and return
the proposed page map plus draft copy.

## Thesis-To-Web Page Strategy

The honours thesis should be used as source material for readable public pages, not as
a long PDF dump and not as copied thesis prose.

Convert the thesis into web-friendly pages:

- Short paragraphs, not chapter-style sections.
- Concrete captions around screenshots.
- Small takeaway blocks.
- Plain terms before technical terms.
- Personal framing where appropriate: "what I was trying to solve", "what changed",
  "what I learned".
- Links to deeper resources for people who want the academic version.

Recommended public page set:

| Page               | Purpose                              | Thesis material to translate                                  | Keep out                                                |
| ------------------ | ------------------------------------ | ------------------------------------------------------------- | ------------------------------------------------------- |
| Main project hub   | Fast overview and links              | Abstract, intro, final reflection, NIME paper                 | Long literature review, raw methods detail              |
| Design Process     | Explain how the project took shape   | Requirements, personas, sketches, Figma/prototype process     | Full thesis prose, excessive theory                     |
| System Walkthrough | Explain the tool in plain language   | System design, architecture, workflow, screenshots            | Code dumps, implementation minutiae                     |
| User Study         | Explain what was learned             | Study procedure, SUS overview, thematic findings              | Raw participant data, full quotes, consent/ethics files |
| Gallery            | Let visitors inspect visuals quickly | Public-safe screenshots and diagrams                          | Duplicate or low-quality screenshots                    |
| Resources          | Collect public outputs               | NIME page, paper/poster/video links, maybe thesis if approved | Private review, CMT, ethics, raw data                   |

Use the thesis PDF or LaTeX source to understand the story, but write new website
copy. The website should feel like a personal project record that a musician, HCI
student, or potential supervisor could understand without reading the thesis.

## Implementation Prompt

You are a Jekyll/al-folio content implementation agent working in:

```text
/Users/kevinzhu/Documents/personal-website/kevinzzzhu.github.io
```

Goal: refresh the "IMPSY Web Interface" research project page into a public,
personal project hub after the NIME 2026 paper acceptance.

Do not make it a compressed academic single page. Keep the main project page
readable and personal, then create linked subpages for deeper material where useful.

### Required Instructions

Before editing:

1. Read `AGENTS.md`.
2. If `CLAUDE.md` exists at repo root, read it and treat it as shared project
   instructions.
3. Read relevant al-folio instructions:
   - `.github/copilot-instructions.md`
   - `.github/agents/customize.agent.md`
   - `.github/instructions/markdown-content.instructions.md`

Follow the repo rules:

- Do not push.
- Commit after completion.
- Commit message format: `docs: refresh IMPSY project page`.
- Do not modify `CLAUDE.md`.
- Do not copy private or sensitive files into the website.
- Work on the current branch by default.
- Leave unrelated existing changes untouched.

### Main File to Update

Current project page:

```text
_projects/2_project.md
```

Remove this line if still present:

```text
(AI generated content may be wrong)
```

### Authoritative Public Reference

Use the official NIME page as the public source of truth:

```text
https://nime2026.org/proceedings/196.html
```

Expected public facts to verify before writing:

- Title: `A Web Interface for Real-Time Interaction with Machine Learning in Musical Performance`
- Authors: Hongzhe Zhu and Charles Martin
- Venue: NIME 2026
- Conference: June 23-26, 2026, London, UK
- Format/session/presentation details: verify from the official page before writing.

Also check:

```text
https://nime2026.org/
```

The NIME homepage currently identifies NIME 2026 as a hybrid conference in London,
UK and online, with the conference dates June 23-26, 2026. Recheck if this document
is used later.

### Paper / NIME Source Material

Use these as source material:

```text
/Users/kevinzhu/Documents/Publications/NIME-2026/
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/nime-paper.tex
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026.pdf
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026_Poster.pdf
/Users/kevinzhu/Documents/Publications/NIME-2026/196_lightning_talk.mp4
```

Use the camera-ready paper source, not the older markdown draft, when there are
conflicts.

Known conflict to avoid:

- Older title: `IMPSY: A Web Interface for Democratizing Human-AI Musical Collaboration`
- Camera-ready title: `A Web Interface for Real-Time Interaction with Machine Learning in Musical Performance`

Use the camera-ready title.

### Thesis / Honours Source Material

Treat this as a first-class source, not background only:

```text
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550
```

Important thesis files:

```text
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550_Kevin_Zhu.pdf
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/
```

Use the thesis material to recover:

- fuller design story
- requirements and design process
- screenshots
- system architecture
- user study framing
- what changed between honours thesis and NIME paper

Translate this material into easy-to-understand pages. Do not paste thesis paragraphs
directly unless a short phrase is clearly suitable for public-facing copy.

Do not publish the thesis PDF unless Kevin explicitly confirms it should be public.
If uncertain, mention it as an internal source only.

### Useful Visual Assets

Inspect and copy selected public-safe assets into the website repo under `assets/img/`.
Use only a few strong images. Do not make a dump of every screenshot.

Recommended candidates:

```text
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/zhu-web-interface-1000.jpg
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/new-impsy-improvisation.jpg
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/configuration.jpg
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/dataflow.png
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/minilab3.jpg
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/imgs/new-impsy/new-impsy-logvis-combined.png
```

### Content Direction

Tone:

- personal website
- clear, direct, not too academic
- first-person is fine
- avoid generic research prose
- avoid overclaiming

The main page should include:

1. **Short personal opening**
   Explain that this started as an honours project about making musical AI less
   opaque and more usable for musicians.

2. **NIME status block**
   Mention the accepted NIME 2026 paper and link to the official proceedings page.

3. **Quick links**
   Add a compact link block:
   - Official NIME paper page
   - Paper PDF if hosted
   - Poster PDF if hosted
   - Lightning talk video if suitable
   - IMPSY upstream repo: `https://github.com/cpmpercussion/impsy`
   - Thesis only if Kevin confirms public release

4. **What the system does**
   Explain in plain language:
   - collects and logs performance data
   - helps users curate datasets
   - trains or selects models
   - supports live call-and-response interaction
   - visualises user input, AI output, and model behaviour

5. **Visual walkthrough preview**
   Use selected images with short captions.

6. **What I learned**
   Keep it human:
   - visual feedback helped people understand what the AI was doing
   - configuration and training still had a learning curve
   - transparency helped trust and creative agency
   - good interface design cannot fix weak training data, but it can help users
     understand what is happening

7. **Links to deeper pages**
   Link to process, gallery, and resources pages if created.

### Suggested Linked Pages

Create these if they fit cleanly with the existing al-folio structure.

The pages below should be readable public translations of selected thesis material,
not mini thesis chapters.

#### Process Page

Suggested URL:

```text
/projects/impsy-interface/process/
```

Suggested file:

```text
_pages/impsy-interface-process.md
```

Include:

- how the honours project began
- design process
- the problem with the old workflow
- user needs/personas in plain language
- design goals and tradeoffs
- thesis-to-paper transition
- what changed for NIME

Keep it understandable to non-specialists. Use screenshots or diagrams where they
clarify the story.

#### System Walkthrough Page

Suggested URL:

```text
/projects/impsy-interface/system/
```

Suggested file:

```text
_pages/impsy-interface-system.md
```

Include:

- frontend/backend overview
- logging/data/model/performance workflow
- what users can control
- how visual feedback makes the AI less opaque
- architecture diagram and screenshots with plain captions

Do not include long code explanations unless they affect public understanding of the
project.

#### User Study Page

Suggested URL:

```text
/projects/impsy-interface/study/
```

Suggested file:

```text
_pages/impsy-interface-study.md
```

Include:

- what the study asked
- what participants did
- main takeaways in plain language
- what was hard for users
- what this taught Kevin about transparent musical AI tools

Do not include raw participant quotes, identifying details, consent/ethics forms, or
full participant tables unless Kevin explicitly approves a specific excerpt.

#### Gallery Page

Suggested URL:

```text
/projects/impsy-interface/gallery/
```

Suggested file:

```text
_pages/impsy-interface-gallery.md
```

Include:

- selected screenshots
- short captions
- no long academic explanation

#### Resources Page

Suggested URL:

```text
/projects/impsy-interface/resources/
```

Suggested file:

```text
_pages/impsy-interface-resources.md
```

Include:

- official NIME proceedings link
- paper PDF if copied
- poster PDF if copied
- lightning talk video if copied or linked
- thesis link only if approved
- relevant code/project links

### Do Not Include

Do not copy or publish:

- CMT reviews
- meta-review PDFs
- ethics approval forms
- consent forms
- participant information sheets
- raw interviews
- private supervisor notes
- private planning documents
- old anonymous submission material
- anything participant-identifying

Do not claim the system "proved" anything. Use softer wording: "suggests",
"helped", "supported", "pointed to".

### Implementation Notes

- Follow existing al-folio project/page conventions.
- Use markdown frontmatter correctly.
- Use `assets/img/`, `assets/pdf/`, and `assets/video/` as appropriate.
- Keep copied asset filenames clean and lowercase.
- Prefer local copied assets for long-term site stability.
- Avoid heavy custom CSS unless necessary.
- Match the style of the existing personal website rather than the default
  al-folio demo tone.

### Verification

Before committing:

1. Run formatting:

   ```bash
   npx prettier . --write
   ```

2. Run the site using Docker:

   ```bash
   docker compose down
   docker compose up --build
   ```

3. Verify in browser:
   - `/projects/`
   - IMPSY project page
   - any new linked pages
   - images load
   - PDF/video links work
   - dark mode remains readable
   - no private files are exposed

4. Check copied assets:

   ```bash
   find assets -type f | rg -i "review|cmt|ethic|consent|participant|interview|meta-review"
   ```

   There should be no sensitive copied files.

### Output Required

After implementation, report:

1. Files changed
2. Assets copied
3. Links added
4. Verification commands run and results
5. Any public-release decisions still needed from Kevin

Then commit with:

```bash
git add .
git commit -m "docs: refresh IMPSY project page"
```

## Agent Prompt Pack

Use these prompts as separate handoffs. Do not merge them into one giant task unless
Kevin explicitly asks for a single-agent pass.

### Agent 1: Source Audit And Public-Safety Pass

```markdown
# Agent Brief: IMPSY Source Audit

<role>
You are a source-audit and publication-safety agent. Your job is to verify public facts
and decide which local materials are safe to use for Kevin's personal website.
</role>

<mission>
Audit the IMPSY/NIME/thesis sources listed in
`output/impsy-project-page-harness.md`, then update the tracker, link ledger, and
decision list. Do not rewrite or implement website pages.
</mission>

<context>
Workspace:
/Users/kevinzhu/Documents/personal-website/kevinzzzhu.github.io

Harness:
output/impsy-project-page-harness.md

Public source of truth:
https://nime2026.org/proceedings/196.html
https://nime2026.org/
</context>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, and the harness.
2. Verify the official NIME page facts: title, authors, session/type, abstract, links.
3. Inspect the NIME publication folder and COMP4550 thesis folder at a high level.
4. Identify which materials are public-safe, private, or need Kevin's decision.
5. Update only the harness tracker, link ledger, and decisions table.
</workflow>

<constraints>
- Do not modify website content pages.
- Do not copy assets.
- Do not publish or quote raw participant material.
- Treat CMT reviews, ethics files, consent forms, and raw interviews as private.
</constraints>

<output_contract>
Return:

1. Public facts verified
2. Materials marked safe/unsafe/needs decision
3. Harness sections updated
4. Remaining blockers
   </output_contract>
```

### Agent 2: Thesis-To-Web Content Extraction

```markdown
# Agent Brief: IMPSY Thesis-To-Web Content

<role>
You are a research-to-web writing agent. You translate thesis material into clear,
personal website content without making it sound like a thesis chapter.
</role>

<mission>
Use the COMP4550 thesis materials to produce readable page outlines and draft copy for
the IMPSY project pages. Do not implement site files unless Kevin explicitly asks.
</mission>

<context>
Workspace:
/Users/kevinzhu/Documents/personal-website/kevinzzzhu.github.io

Harness:
output/impsy-project-page-harness.md

Thesis source:
/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550

NIME source:
/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/nime-paper.tex
</context>

<workflow>
1. Read the harness and check the public-safety decisions from Agent 1.
2. Inspect thesis intro, requirements/design, system design, and evaluation sections.
3. Draft page maps for:
   - main project hub
   - design process
   - system walkthrough
   - user study
   - gallery captions
   - resources
4. Rewrite in web-friendly prose: short paragraphs, clear captions, personal tone.
5. Update the harness with proposed page scope and any source rows checked.
</workflow>

<constraints>
- Do not copy thesis paragraphs wholesale.
- Do not include raw participant quotes or identifying details.
- Do not publish the thesis PDF unless Kevin has approved it.
- Avoid overclaiming; use "suggests", "helped", "supported", and similar wording.
</constraints>

<output_contract>
Return:

1. Recommended page map
2. Draft copy for each page
3. Screenshot/caption suggestions
4. Claims that need source verification
5. Harness rows updated
   </output_contract>
```

### Agent 3: Public Asset Curation

```markdown
# Agent Brief: IMPSY Public Asset Curation

<role>
You are a visual asset and publication-safety agent. You select a small set of public
assets for the website and copy them with clean names.
</role>

<mission>
From the approved source folders in `output/impsy-project-page-harness.md`, select only
the strongest public-safe images/PDF/video assets for the IMPSY project pages.
</mission>

<workflow>
1. Read the harness, especially the public-safe asset ledger and decisions table.
2. Inspect candidate images and public PDFs/video.
3. Select a small set: main teaser, performance, configuration/training, architecture,
   log visualisation, and optional study setup.
4. Copy selected files into `assets/img/`, `assets/pdf/`, or `assets/video/` using clean,
   lowercase filenames.
5. Update the asset ledger with source, destination, safety status, and intended use.
6. Run the sensitive-file scan from the harness.
</workflow>

<constraints>
- Do not copy CMT/review/ethics/consent/participant/raw interview materials.
- Do not copy the thesis PDF unless Kevin has approved it.
- Do not dump every screenshot.
- Avoid bloating the repo with unnecessary video if linking is better.
</constraints>

<output_contract>
Return:

1. Assets copied
2. Assets rejected and why
3. Sensitive-file scan result
4. Harness asset ledger updates
   </output_contract>
```

### Agent 4: Page Implementation

```markdown
# Agent Brief: IMPSY Page Implementation

<role>
You are a Jekyll/al-folio implementation agent. You turn approved copy and assets into
site pages that match the existing personal website.
</role>

<mission>
Implement the IMPSY project hub and approved linked pages using the audited source
facts, drafted copy, and curated assets recorded in `output/impsy-project-page-harness.md`.
</mission>

<workflow>
1. Read `AGENTS.md`, `CLAUDE.md`, al-folio content instructions, and the harness.
2. Confirm Agent 1-3 tracker rows are complete enough to implement.
3. Update `_projects/2_project.md`.
4. Create approved subpages, likely:
   - `_pages/impsy-interface-process.md`
   - `_pages/impsy-interface-system.md`
   - `_pages/impsy-interface-study.md`
   - `_pages/impsy-interface-gallery.md`
   - `_pages/impsy-interface-resources.md`
5. Use existing al-folio markdown conventions and local assets.
6. Update the tracker rows for implemented pages.
</workflow>

<constraints>
- Keep the tone personal, clear, and not too academic.
- Do not add unsupported claims.
- Do not include private materials.
- Do not publish thesis/video/code links unless the harness says they are approved.
- Avoid heavy custom CSS unless unavoidable.
</constraints>

<output_contract>
Return:

1. Files changed
2. Pages created/updated
3. Links and assets used
4. Harness tracker updates
5. Any unresolved Kevin decisions
   </output_contract>
```

### Agent 5: QA And Release Check

```markdown
# Agent Brief: IMPSY Website QA

<role>
You are a website QA and release-readiness agent for a Jekyll/al-folio site.
</role>

<mission>
Verify the IMPSY project page refresh before commit. Focus on build correctness,
visual rendering, links, dark mode, and absence of private copied materials.
</mission>

<workflow>
1. Read the harness and inspect the implementation diff.
2. Run `npx prettier . --write`.
3. Run `docker compose down && docker compose up --build`.
4. Browser-check `/projects/`, the main IMPSY page, and all new linked pages.
5. Verify images, PDFs/video links, dark mode readability, and navigation.
6. Run:
   `find assets -type f | rg -i "review|cmt|ethic|consent|participant|interview|meta-review"`
7. Fix small issues if clearly in scope; otherwise report blockers.
8. Update the harness QA rows and commit with `docs: refresh IMPSY project page`.
</workflow>

<constraints>
- Do not push.
- Do not alter content direction unless fixing factual or rendering problems.
- Do not remove unrelated user changes.
</constraints>

<output_contract>
Return:

1. Verification commands and results
2. Browser pages checked
3. Issues fixed
4. Residual risks or blockers
5. Commit hash
   </output_contract>
```

## Up-To-Date Tracker

Update this table during implementation. Keep `Last checked` as an ISO date.

| Item                          | Source / Path                                           | Status               | Last checked | Notes                                                      |
| ----------------------------- | ------------------------------------------------------- | -------------------- | ------------ | ---------------------------------------------------------- |
| Project instructions          | `AGENTS.md`, `CLAUDE.md`                                | Not started          |              | Read before edits.                                         |
| al-folio coding instructions  | `.github/copilot-instructions.md`                       | Not started          |              | Required for build and repo conventions.                   |
| al-folio content instructions | `.github/instructions/markdown-content.instructions.md` | Not started          |              | Required for frontmatter and content files.                |
| Current IMPSY project page    | `_projects/2_project.md`                                | Not started          |              | Remove AI warning line if present.                         |
| Official NIME paper page      | `https://nime2026.org/proceedings/196.html`             | Not started          |              | Verify title, authors, format, session, abstract.          |
| NIME homepage                 | `https://nime2026.org/`                                 | Checked              | 2026-06-23   | Confirms NIME 2026 dates and hybrid London/online format.  |
| Camera-ready paper source     | `.../IMPSY_Web_Interface_NIME_2026/nime-paper.tex`      | Not started          |              | Use for paper title and claims.                            |
| Paper PDF                     | `.../IMPSY_Web_Interface_NIME_2026.pdf`                 | Not started          |              | Copy only if public-safe.                                  |
| Poster PDF                    | `.../IMPSY_Web_Interface_NIME_2026_Poster.pdf`          | Not started          |              | Copy only if public-safe.                                  |
| Lightning talk video          | `.../196_lightning_talk.mp4`                            | Not started          |              | Check size/rendering before hosting locally.               |
| Thesis folder                 | `.../Semester-7-2024/COMP4550`                          | Not started          |              | First-class source for process and design story.           |
| Thesis PDF                    | `.../COMP4550_Kevin_Zhu.pdf`                            | Needs Kevin decision |              | Do not publish without explicit approval.                  |
| Thesis-to-web page map        | Harness `Thesis-To-Web Page Strategy`                   | Proposed             | 2026-06-23   | Translate thesis into readable pages, not copied chapters. |
| Source Audit Agent            | Harness `Agent Prompt Pack`                             | Proposed             | 2026-06-23   | Run first; no content implementation.                      |
| Thesis-To-Web Agent           | Harness `Agent Prompt Pack`                             | Proposed             | 2026-06-23   | Draft page copy and captions; no site implementation.      |
| Asset Curation Agent          | Harness `Agent Prompt Pack`                             | Proposed             | 2026-06-23   | Copy only selected public-safe assets.                     |
| Page Implementation Agent     | Harness `Agent Prompt Pack`                             | Proposed             | 2026-06-23   | Implement only after audit/copy decisions are clear.       |
| QA / Release Agent            | Harness `Agent Prompt Pack`                             | Proposed             | 2026-06-23   | Final formatting, build, browser, and sensitive scan.      |
| Teaser image                  | `zhu-web-interface-1000.jpg`                            | Not started          |              | Candidate main project image.                              |
| Improvisation screenshot      | `new-impsy-improvisation.jpg`                           | Not started          |              | Candidate gallery/performance image.                       |
| Configuration screenshot      | `configuration.jpg`                                     | Not started          |              | Candidate process/system image.                            |
| Dataflow diagram              | `dataflow.png`                                          | Not started          |              | Candidate architecture image.                              |
| Study setup image             | `minilab3.jpg`                                          | Not started          |              | Candidate evaluation/setup image.                          |
| Log visualisation image       | `new-impsy-logvis-combined.png`                         | Not started          |              | Candidate transparency/log image.                          |
| Main page rewrite             | `_projects/2_project.md`                                | Not started          |              | Keep personal, not overly academic.                        |
| Process subpage               | `_pages/impsy-interface-process.md`                     | Proposed             |              | Create if scope remains useful.                            |
| System walkthrough subpage    | `_pages/impsy-interface-system.md`                      | Proposed             |              | Translate thesis system design into plain language.        |
| User study subpage            | `_pages/impsy-interface-study.md`                       | Proposed             |              | Translate thesis evaluation into public-safe takeaways.    |
| Gallery subpage               | `_pages/impsy-interface-gallery.md`                     | Proposed             |              | Create if selected images support it.                      |
| Resources subpage             | `_pages/impsy-interface-resources.md`                   | Proposed             |              | Include official links and hosted assets.                  |
| Sensitive file scan           | `find assets ... rg ...`                                | Not started          |              | Must pass before commit.                                   |
| Formatting                    | `npx prettier . --write`                                | Not started          |              | Must run before commit.                                    |
| Docker build/browser check    | `docker compose up --build`                             | Not started          |              | Verify project pages and dark mode.                        |
| Commit                        | `docs: refresh IMPSY project page`                      | Not started          |              | Do not push.                                               |

Status values:

- `Not started`: no work done yet.
- `Checked`: source inspected and still current enough for this update.
- `Selected`: approved for inclusion.
- `Copied`: copied into website assets.
- `Implemented`: page/content updated.
- `Skipped`: deliberately not included; explain why in Notes.
- `Needs Kevin decision`: do not proceed without approval.
- `Blocked`: cannot continue; explain exact blocker in Notes.

## Public-Safe Asset Ledger

When copying files, record every copied source and destination.

| Source file | Destination file | Public-safe? | Used on page | Notes |
| ----------- | ---------------- | ------------ | ------------ | ----- |
|             |                  |              |              |       |

## Link Ledger

Record every external or local link added to the website.

| Link text                | URL / path                                  | Verified?       | Where used                     | Notes                            |
| ------------------------ | ------------------------------------------- | --------------- | ------------------------------ | -------------------------------- |
| Official NIME paper page | `https://nime2026.org/proceedings/196.html` | No              | Proposed quick links/resources | Verify live before publishing.   |
| NIME 2026 homepage       | `https://nime2026.org/`                     | Yes, 2026-06-23 | Context/resources              | Confirms conference dates/theme. |
| IMPSY upstream repo      | `https://github.com/cpmpercussion/impsy`    | No              | Proposed quick links/resources | Verify before publishing.        |

## Decisions Needed From Kevin

Keep this section short and current.

| Decision                                                              | Default if no answer                                       | Why it matters                                               |
| --------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| Should the honours thesis PDF be public on the website?               | Do not publish.                                            | Thesis may contain material not intended for public release. |
| Should the lightning talk MP4 be hosted locally or linked externally? | Do not host until checked.                                 | Local video affects repo size and page loading.              |
| Should code for the web interface itself be linked publicly?          | Link only upstream IMPSY unless a public repo is verified. | Avoid exposing private or stale code.                        |

## Handoff Notes

- Current repo had an untracked `.claude/` directory before this harness was
  created. Leave unrelated untracked files untouched unless Kevin asks.
- This harness is a planning artifact. It does not implement the website refresh.
- Update `last_edited` in the frontmatter whenever this file is changed.
