---
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - assets
  - inventory
---

# IMPSY Visual Asset Inventory

This is an inventory pass only. No assets were copied.

## Recommended Assets To Copy

Keep the first implementation pass small: one teaser, one performance visual, one
workflow screenshot, one architecture diagram, and one transparency/log visual. Add
the optional controller photo only if the page needs a physical setup image.

| Priority | Source path                                                                                                                              | Proposed destination filename                      | Dimensions / size | Intended use                            | Notes                                                                                                                                                       |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/zhu-web-interface-1000.jpg`                       | `assets/img/impsy-web-interface-teaser.jpg`        | 1000x750, 291 KB  | Main project thumbnail / opening visual | Strong public-safe setup image from the camera-ready paper assets. Shows the web interface in context with MIDI hardware.                                   |
| 2        | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/new-impsy-improvisation.jpg`                      | `assets/img/impsy-improvisation-visualisation.jpg` | 1600x901, 279 KB  | Main page walkthrough / gallery         | Best visual for the live call-and-response / model-output idea. Prefer this over older improvisation screenshots.                                           |
| 3        | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/configuration.jpg`                                | `assets/img/impsy-configuration.jpg`               | 1600x1200, 191 KB | System/process page                     | Useful for explaining setup and configuration without exposing private study data.                                                                          |
| 4        | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/dataflow.png`                                     | `assets/img/impsy-dataflow.png`                    | 4480x2560, 1.6 MB | System walkthrough / architecture       | Public-safe camera-ready architecture figure. Consider downscaling or WebP conversion during the copy pass.                                                 |
| 5        | `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/imgs/new-impsy/new-impsy-logvis-combined.png` | `assets/img/impsy-log-visualisation.png`           | 2000x1124, 1.6 MB | Transparency / model-behaviour section  | Good thesis-derived screenshot for explaining why visual feedback matters. Public-safe if used as an interface screenshot only. Optimize before committing. |
| Optional | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/minilab3.jpg`                                     | `assets/img/impsy-minilab-controller.jpg`          | 894x561, 37 KB    | Resources/gallery supporting image      | Small and safe, but less important than the interface images. Use only if a compact hardware/setup detail helps the page.                                   |

## Public PDF And Video Candidates

| Source path                                                                                 | Proposed destination filename                     | Size / metadata                     | Recommendation                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026.pdf`        | `assets/pdf/impsy-nime-2026-paper.pdf`            | 3.9 MB, 8 pages                     | Good local-copy candidate if the official proceedings PDF is final and public. Local copy improves long-term stability, but the page should still link the official NIME proceedings page.                      |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026_Poster.pdf` | `assets/pdf/impsy-nime-2026-poster.pdf`           | 3.9 MB, 1 page                      | Good resources-page candidate if Kevin wants the poster hosted locally.                                                                                                                                         |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/196_lightning_talk.mp4`                   | `assets/video/impsy-nime-2026-lightning-talk.mp4` | 7.1 MB, 5120x2880, about 88 seconds | Prefer linking to the official NIME-hosted video if available. Local hosting is acceptable only if the official link is missing or unstable. If copied locally, copy `196_lightning_talk.srt` too for captions. |

## Assets To Avoid

| Asset / category                                                                                                                                          | Reason                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/Conference Management Toolkit - View review.pdf` and `... View meta-review.pdf`                         | CMT review/meta-review material. Do not publish.                                                                                                              |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026_Conditional.pdf`                                                          | Conditional/older review-stage paper. Use the final camera-ready PDF instead.                                                                                 |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/reviews/` and `revision-plans/`                                           | Review and response/planning materials are process-private.                                                                                                   |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/Ethic Approve/`                                                | Ethics, consent, participant information, sample questions, and recruitment materials. Do not copy.                                                           |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/study/` participant folders and interview/improvisation videos | Raw participant/session material. Do not publish or derive stills from it without explicit approval and redaction.                                            |
| `study/Thematic analysis/`, `data-processing/quotes.txt`, `imps/thesis-related/*interview*`, and other quote/coding files                                 | Contains raw qualitative material or analysis work products. Keep private.                                                                                    |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550_Kevin_Zhu.pdf`                                        | Thesis PDF is 12 MB / 105 pages and needs Kevin's explicit public-release decision before linking or copying. Use it as an internal source only.              |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/demo-NIME2026.mov`                                             | 43 MB local demo video. Too large for the repo; prefer official video/link or a later compressed derivative if approved.                                      |
| Old IMPSY screenshots under `figures/old-impsy/`                                                                                                          | Useful for internal before/after understanding, but not a strong first-pass public gallery set. Use only if a process page explicitly explains the redesign.  |
| Related-work screenshots such as Ableton, NexusUI, WebMapper, Logic Pro, and other third-party images                                                     | Likely unnecessary and may add copyright/licensing ambiguity. Link to sources instead of copying.                                                             |
| User story maps and persona boards                                                                                                                        | May be useful as internal design evidence, but too text-heavy and potentially sensitive for a public personal page. Translate the idea into new copy instead. |

## Public-Safety Notes

- Treat camera-ready NIME assets as the safest public visual source.
- Treat thesis interface screenshots as usable only when they show the software UI,
  not participant data, interview material, raw quotes, consent records, or private
  study artefacts.
- Do not publish the thesis PDF, participant/session videos, consent sheets, ethics
  documents, recruitment materials, reviews, or response drafts without explicit
  approval.
- Keep page claims soft: the visuals can support "helped users inspect model
  behaviour" or "made interaction more visible", not stronger proof claims.
- During the later copy pass, run the sensitive-name scan from the harness after
  assets are copied.

## Hosting Recommendation

- Images: copy the five recommended images locally into `assets/img/`, then optimize
  the larger PNGs before commit. The total raw recommended image set is roughly
  4 MB, which is reasonable after optimization.
- Paper PDF: copy locally if the final camera-ready PDF is confirmed public. Also link
  the official NIME proceedings page as the source of truth.
- Poster PDF: copy locally if Kevin wants the poster on the resources page. It adds
  about 3.9 MB.
- Lightning talk video: prefer an official external link. A 7.1 MB local MP4 is not
  huge, but video files grow repo size quickly and should be copied only if the
  external host is unavailable or unstable. If copied, include the SRT captions.
- Thesis PDF and 43 MB MOV demo: do not copy in this refresh.

## Suggested Asset Ledger Rows For Harness

Do not paste these into the harness until the copy agent actually copies the files.

| Source file                                                                                                                              | Destination file                                   | Public-safe?                  | Used on page                         | Notes                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------- | ------------------------------------ | -------------------------------------------------------------------------- |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/zhu-web-interface-1000.jpg`                       | `assets/img/impsy-web-interface-teaser.jpg`        | Yes                           | Main project hub / project thumbnail | Camera-ready paper asset; 1000x750, 291 KB.                                |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/new-impsy-improvisation.jpg`                      | `assets/img/impsy-improvisation-visualisation.jpg` | Yes                           | Main walkthrough / gallery           | Camera-ready paper asset; 1600x901, 279 KB.                                |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/configuration.jpg`                                | `assets/img/impsy-configuration.jpg`               | Yes                           | Process / system page                | Camera-ready paper asset; 1600x1200, 191 KB.                               |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/dataflow.png`                                     | `assets/img/impsy-dataflow.png`                    | Yes                           | System walkthrough                   | Camera-ready architecture figure; downscale/optimize before commit.        |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/imgs/new-impsy/new-impsy-logvis-combined.png` | `assets/img/impsy-log-visualisation.png`           | Yes, with caution             | Transparency / gallery               | Thesis-derived UI screenshot; avoid pairing with raw participant material. |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/minilab3.jpg`                                     | `assets/img/impsy-minilab-controller.jpg`          | Yes                           | Optional gallery/resources image     | Optional hardware/supporting image; low priority.                          |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026.pdf`                                                     | `assets/pdf/impsy-nime-2026-paper.pdf`             | Yes, after final-public check | Resources                            | Copy only the final camera-ready PDF, not conditional/review-stage files.  |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026_Poster.pdf`                                              | `assets/pdf/impsy-nime-2026-poster.pdf`            | Yes, after Kevin/source check | Resources                            | Optional local poster PDF.                                                 |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/196_lightning_talk.mp4`                                                                | `assets/video/impsy-nime-2026-lightning-talk.mp4`  | Yes, if official/public       | Resources                            | Prefer official external link; copy locally only if needed.                |
