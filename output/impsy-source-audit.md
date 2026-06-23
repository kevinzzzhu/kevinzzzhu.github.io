---
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - source-audit
  - public-safety
---

# IMPSY Source Audit

Scope: source audit only. No website files, assets, or harness rows were edited.

## Public Facts Verified

| Fact                      | Verified value                                                                                                                                                                                                                                             | Source                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Title                     | A Web Interface for Real-Time Interaction with Machine Learning in Musical Performance                                                                                                                                                                     | Official NIME proceedings page; local camera-ready `nime-paper.tex` |
| Authors                   | Hongzhe Zhu; Charles Martin                                                                                                                                                                                                                                | Official NIME proceedings page                                      |
| Venue                     | New Interfaces for Musical Expression 2026 / NIME 2026                                                                                                                                                                                                     | Official NIME proceedings page and homepage                         |
| Conference dates/location | 23-26 June 2026, London, UK and online                                                                                                                                                                                                                     | Official NIME homepage                                              |
| Presentation format       | poster                                                                                                                                                                                                                                                     | Official NIME proceedings page                                      |
| Presence                  | remote                                                                                                                                                                                                                                                     | Official NIME proceedings page                                      |
| Type                      | medium                                                                                                                                                                                                                                                     | Official NIME proceedings page                                      |
| Session                   | Poster Session 3                                                                                                                                                                                                                                           | Official NIME proceedings page and session page                     |
| Session time/location     | Friday 2026-06-26, 12:30-14:30 BST; Fourth Floor                                                                                                                                                                                                           | Official Poster Session 3 page                                      |
| Official abstract         | Public abstract is available on the proceedings page. It frames the work as a transparent web interface for real-time MDRNN-based musical interaction, with an exploratory user study and cautious claims about trust, agency, and expressive co-creation. | Official NIME proceedings page                                      |
| Official proceedings page | https://nime2026.org/proceedings/196.html                                                                                                                                                                                                                  | Official NIME proceedings page                                      |
| Official paper PDF        | https://nime.org/proceedings/2026/nime2026_102.pdf                                                                                                                                                                                                         | Linked from official proceedings HTML; HTTP 200 verified            |
| Official submission image | `https://nime2026.org/assets/submissions/196.webp`                                                                                                                                                                                                         | Linked from official proceedings HTML                               |
| IMPSY upstream repo       | https://github.com/cpmpercussion/impsy                                                                                                                                                                                                                     | Local camera-ready paper footnote                                   |

Important conflict resolved: older local drafts use titles such as `IMPSY: A Web Interface for Democratizing Human-AI Musical Collaboration` or `IMPSY: Human-Centered Interface Design for Real-Time Interaction with Ensemble Machine Learning in Musical Performance`, and older drafts mention SUS around 78.4. Use the camera-ready / official title and SUS mean 62.50, SD 11.9, if mentioning study results at all.

## Source Precedence

Use this order when sources conflict:

1. Official NIME proceedings page and linked official PDF.
2. Local camera-ready paper source: `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/nime-paper.tex`.
3. Local camera-ready artifacts: final paper PDF, poster PDF, lightning talk video/SRT, and final paper images in `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/`.
4. COMP4550 thesis PDF and LaTeX source as internal design-story sources only.
5. Older drafts, package guides, review responses, and planning notes only as historical context; do not use them for public facts.

## Public-Safe Materials

Likely safe to link or use, subject to normal asset-quality checks:

- Official proceedings page: `https://nime2026.org/proceedings/196.html`.
- Official paper PDF: `https://nime.org/proceedings/2026/nime2026_102.pdf`.
- Local final paper PDF: `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026.pdf`.
- Local poster PDF: `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026_Poster.pdf`, if Kevin confirms it should be hosted.
- Local lightning talk: `/Users/kevinzhu/Documents/Publications/NIME-2026/196_lightning_talk.mp4` and `.srt`, if Kevin confirms it should be hosted.
- Final NIME paper images:
  - `IMPSY_Web_Interface_NIME_2026/images/zhu-web-interface-1000.jpg`
  - `IMPSY_Web_Interface_NIME_2026/images/new-impsy-improvisation.jpg`
  - `IMPSY_Web_Interface_NIME_2026/images/configuration.jpg`
  - `IMPSY_Web_Interface_NIME_2026/images/dataflow.png`
  - `IMPSY_Web_Interface_NIME_2026/images/minilab3.jpg`
- Thesis/source screenshots that show only interface state, not participants or private data, especially:
  - `COMP4550/imgs/new-impsy/new-impsy-logvis-combined.png`
  - `COMP4550/imgs/new-impsy/*.png`
  - `COMP4550/COMP4550-Kevin Zhu/figures/new-impsy/*.jpg`
- Public code link: `https://github.com/cpmpercussion/impsy`.

Use thesis figures only after a visual pass by the asset agent. Avoid screenshots that expose logs, user data, private project names, or participant material.

## Private Or Excluded Materials

Do not publish, quote, copy, or link these without explicit approval:

- CMT/review material:
  - `Conference Management Toolkit - View review.pdf`
  - `Conference Management Toolkit - View meta-review.pdf`
  - `IMPSY_Web_Interface_NIME_2026/reviews/nime2026-reviews.md`
- Revision and private planning files:
  - `IMPSY_Web_Interface_NIME_2026/revision-plans/*.md`
  - `NIME_Timeline_Actions.md`, `Package_Index.md`, `Supervisor_Discussion_Guide.md`, and similar prep notes.
- Ethics and consent material:
  - `COMP4550/Ethic Approve/`
  - `COMP4550/COMP4550-Kevin Zhu/figures/appendix/Consent_Form.jpg`
  - `COMP4550/COMP4550-Kevin Zhu/figures/appendix/Participant_Information_Sheet.pdf`
  - `COMP4550/COMP4550-Kevin Zhu/figures/appendix/Project_Description.pdf`
  - `COMP4550/COMP4550-Kevin Zhu/figures/appendix/SUS.jpg`
  - `COMP4550/COMP4550-Kevin Zhu/figures/appendix/Sample_Questions.jpg`
  - `COMP4550/Qiance ethical approval rems/`
- Raw study data and participant material:
  - `COMP4550/study/001` through `study/005`
  - participant videos, interviews, consent photos, SUS photos, feedback PDFs, thematic-analysis quote images, and recruitment forms.
- Raw logs, models, and datasets:
  - `COMP4550/backup-logs/`
  - `COMP4550/imps/logs/`, `imps/models/`, `imps/datasets/`, `imps/projects/`
  - `COMP4550/creative-prediction/datasets/`
- Large personal/raw media such as `Kevin-4K 20Mbps HEVC SDR.mov`.
- The thesis PDF itself, unless Kevin explicitly approves public release.

## Decisions Needed From Kevin

1. Should the website link only to the official NIME PDF, or also host a local copy of the final paper PDF?
2. Is the poster PDF approved for public hosting on the personal website?
3. Is the lightning talk MP4/SRT approved for public hosting, or should it stay local until NIME publishes a video page?
4. Should the COMP4550 thesis PDF be public, linked only privately, or kept as an internal source?
5. Which code links should be shown: only `cpmpercussion/impsy`, or also a public repo for Kevin's web-interface work if one exists?
6. Are interface screenshots from the thesis folder approved after the asset agent screens them for private data?
7. Should the public page mention SUS 62.50 at all, or keep the user-study summary qualitative and plain-language?

## Suggested Tracker Updates

Do not edit the harness in this pass. Suggested rows for the next harness update:

| Tracker area      | Suggested update                                                                                                                                        | Status         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Public facts      | Title, authors, venue, conference dates/location, presence, type, format, session, session time/location verified from official NIME pages.             | Verified       |
| Link ledger       | Add official proceedings page, official PDF `https://nime.org/proceedings/2026/nime2026_102.pdf`, official session page, and NIME homepage.             | Verified       |
| Source precedence | Official NIME page/PDF first; camera-ready local source second; thesis internal only; older drafts non-authoritative.                                   | Verified       |
| Conflict notes    | Older title and SUS 78.4 material found in old drafts; use final title and SUS 62.50/SD 11.9 only if needed.                                            | Verified       |
| Public assets     | Paper PDF is public; poster PDF, lightning MP4/SRT, and selected final images are likely usable but need Kevin/asset-agent approval before copying.     | Needs decision |
| Thesis source     | Treat thesis PDF/source as internal design-story material; do not publish thesis PDF unless Kevin approves.                                             | Needs decision |
| Sensitive files   | CMT/reviews, ethics/consent, participant study recordings/forms/feedback, raw logs/models/datasets, and private planning notes must be excluded.        | Verified       |
| Copy constraints  | Asset agent should visually inspect chosen screenshots before copying and scan copied assets for review/ethics/consent/participant/interview filenames. | Pending        |
| Content risk      | Avoid claims that the system proved effectiveness; use cautious language such as suggests, helped, supported, and pointed to.                           | Verified       |
