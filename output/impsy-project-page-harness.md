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
- thesis-to-paper transition
- user study summary
- what changed for NIME

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

## Up-To-Date Tracker

Update this table during implementation. Keep `Last checked` as an ISO date.

| Item                          | Source / Path                                           | Status               | Last checked | Notes                                                     |
| ----------------------------- | ------------------------------------------------------- | -------------------- | ------------ | --------------------------------------------------------- |
| Project instructions          | `AGENTS.md`, `CLAUDE.md`                                | Not started          |              | Read before edits.                                        |
| al-folio coding instructions  | `.github/copilot-instructions.md`                       | Not started          |              | Required for build and repo conventions.                  |
| al-folio content instructions | `.github/instructions/markdown-content.instructions.md` | Not started          |              | Required for frontmatter and content files.               |
| Current IMPSY project page    | `_projects/2_project.md`                                | Not started          |              | Remove AI warning line if present.                        |
| Official NIME paper page      | `https://nime2026.org/proceedings/196.html`             | Not started          |              | Verify title, authors, format, session, abstract.         |
| NIME homepage                 | `https://nime2026.org/`                                 | Checked              | 2026-06-23   | Confirms NIME 2026 dates and hybrid London/online format. |
| Camera-ready paper source     | `.../IMPSY_Web_Interface_NIME_2026/nime-paper.tex`      | Not started          |              | Use for paper title and claims.                           |
| Paper PDF                     | `.../IMPSY_Web_Interface_NIME_2026.pdf`                 | Not started          |              | Copy only if public-safe.                                 |
| Poster PDF                    | `.../IMPSY_Web_Interface_NIME_2026_Poster.pdf`          | Not started          |              | Copy only if public-safe.                                 |
| Lightning talk video          | `.../196_lightning_talk.mp4`                            | Not started          |              | Check size/rendering before hosting locally.              |
| Thesis folder                 | `.../Semester-7-2024/COMP4550`                          | Not started          |              | First-class source for process and design story.          |
| Thesis PDF                    | `.../COMP4550_Kevin_Zhu.pdf`                            | Needs Kevin decision |              | Do not publish without explicit approval.                 |
| Teaser image                  | `zhu-web-interface-1000.jpg`                            | Not started          |              | Candidate main project image.                             |
| Improvisation screenshot      | `new-impsy-improvisation.jpg`                           | Not started          |              | Candidate gallery/performance image.                      |
| Configuration screenshot      | `configuration.jpg`                                     | Not started          |              | Candidate process/system image.                           |
| Dataflow diagram              | `dataflow.png`                                          | Not started          |              | Candidate architecture image.                             |
| Study setup image             | `minilab3.jpg`                                          | Not started          |              | Candidate evaluation/setup image.                         |
| Log visualisation image       | `new-impsy-logvis-combined.png`                         | Not started          |              | Candidate transparency/log image.                         |
| Main page rewrite             | `_projects/2_project.md`                                | Not started          |              | Keep personal, not overly academic.                       |
| Process subpage               | `_pages/impsy-interface-process.md`                     | Proposed             |              | Create if scope remains useful.                           |
| Gallery subpage               | `_pages/impsy-interface-gallery.md`                     | Proposed             |              | Create if selected images support it.                     |
| Resources subpage             | `_pages/impsy-interface-resources.md`                   | Proposed             |              | Include official links and hosted assets.                 |
| Sensitive file scan           | `find assets ... rg ...`                                | Not started          |              | Must pass before commit.                                  |
| Formatting                    | `npx prettier . --write`                                | Not started          |              | Must run before commit.                                   |
| Docker build/browser check    | `docker compose up --build`                             | Not started          |              | Verify project pages and dark mode.                       |
| Commit                        | `docs: refresh IMPSY project page`                      | Not started          |              | Do not push.                                              |

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
