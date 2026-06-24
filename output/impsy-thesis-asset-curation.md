---
created: 2026-06-25
last_edited: 2026-06-25
tags:
  - impsy
  - personal-website
  - asset-curation
  - honours-thesis
---

# IMPSY Thesis Asset Curation

Scope: selection only. No assets were copied, no website pages were edited, and
the harness was not edited in this pass.

## Summary Recommendation

Use the existing NIME/site assets for the polished system and performance story,
then add a small number of thesis visuals for the missing thesis-first story:
old workflow, design process, prototype, and navigation flow. Avoid raw study,
feedback, logs, datasets, models, and participant-facing materials.

Best later copy set:

- Old workflow: one old home screen, preferably cropped/redacted before use.
- Design process: wireframe sketch, Figma prototype flow, optional user story map.
- System walkthrough: existing dataflow asset plus NIME interaction flow.
- Performance/configuration/study setup: reuse existing assets already in
  `assets/img/`; do not duplicate the same study setup photo.

## Existing Assets To Keep Or Reuse

| Existing asset                                     | Original source                                                                                                     | Keep/reuse        | Notes                                                                                                                                                |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/img/impsy-web-interface-teaser.jpg`        | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/zhu-web-interface-1000.jpg`  | Keep              | Good hub/thumbnail image. Shows the real desk setup and interface. Use as a broad project teaser, not the only visual.                               |
| `assets/img/impsy-improvisation-visualisation.jpg` | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/new-impsy-improvisation.jpg` | Keep              | Strong performance/system visual; supports the real-time visualisation story.                                                                        |
| `assets/img/impsy-configuration.jpg`               | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/configuration.jpg`           | Keep with caution | Useful for configuration/study setup. It is the same visual as the thesis `figures/study-preparation/configuration.jpg`, so do not copy a duplicate. |
| `assets/img/impsy-dataflow.png`                    | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/dataflow.png`                | Keep              | Best current architecture/system walkthrough image; cleaner than the older thesis `system-design.jpg`.                                               |
| `assets/img/impsy-minilab-controller.jpg`          | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/minilab3.jpg`                | Keep optional     | Useful in a gallery or hardware/context section, but less important than workflow and prototype visuals.                                             |

## Approved Thesis/NIME Candidates To Copy Later

These candidates were selected because they support the thesis-first story and
did not appear to expose private participant content in the visual inspection.
The later implementation agent should still run the sensitive-file scan and do a
final zoom-level check before publishing.

| Story role               | Exact source path                                                                                                                                      | Recommended destination filename             | Status                | Notes                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Old workflow contrast    | `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/old-impsy/old-impsy-home.jpg`    | `assets/img/impsy-old-workflow-home.jpg`     | Approved with caution | Useful for showing the older menu-first interface. Consider cropping/redacting the lower project metadata area if the final page does not need it. |
| Design process framework | `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/double-diamond.png`              | `assets/img/impsy-design-double-diamond.png` | Optional              | Safe, but generic. Use only if the design-process page needs a simple process anchor.                                                              |
| User-story process       | `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/user-stories/user1-storymap.png` | `assets/img/impsy-user-story-beginner.png`   | Optional              | Public-safe as a fictional persona/story map, but text-heavy. Prefer one representative image rather than all three story maps.                    |
| Early wireframe          | `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/prototype/draw-wireframe.jpg`    | `assets/img/impsy-wireframe-sketch.jpg`      | Approved              | Strong process visual; clearly shows early interface thinking without private data.                                                                |
| Figma prototype          | `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/prototype/figma-prototype.jpg`   | `assets/img/impsy-figma-prototype-flow.jpg`  | Approved              | Strong thesis-first asset; shows how the rough concept became a navigable prototype.                                                               |
| System navigation        | `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/interaction-flow.jpg`                                           | `assets/img/impsy-interaction-flow.jpg`      | Approved with caution | Good system walkthrough visual. It contains many embedded screenshots, so final QA should zoom-check for readable private filenames or raw logs.   |

## Assets To Reject Or Exclude

| Source or folder                                                                                                                                                           | Decision                        | Reason                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550_Kevin_Zhu.pdf`                                                         | Reject for this pass            | Harness says do not publish the thesis PDF without explicit approval.                                                                   |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/old-impsy/old-impsy-log.jpg`                         | Reject                          | Shows raw log filenames.                                                                                                                |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/old-impsy/old-impsy-dataset.jpg`                     | Reject                          | Shows dataset filenames.                                                                                                                |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/old-impsy/old-impsy-model.jpg`                       | Reject                          | Shows raw model filenames and downloadable model artifacts.                                                                             |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/old-impsy/old-impsy-config.jpg`                      | Reject unless redrawn/cropped   | Shows concrete configuration content, named owner metadata, and model path.                                                             |
| `/Users/kevinzhu/Documents/Publications/NIME-2026/IMPSY_Web_Interface_NIME_2026/images/new-impsy-finish-training.png`                                                      | Reject                          | Shows dataset/model filenames and detailed training logs.                                                                               |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/system-design.jpg`                                   | Skip                            | Superseded by the cleaner existing `assets/img/impsy-dataflow.png`.                                                                     |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/study-preparation/improvisation.jpg`                 | Exclude without opening further | Caption/path indicate participant interaction material. Do not publish without explicit approval and consent review.                    |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/study-preparation/poster1.jpg` through `poster4.jpg` | Exclude                         | Recruitment/poster material belongs to participant-facing study material; keep out unless Kevin explicitly approves.                    |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu/figures/appendix/`                                           | Exclude                         | Contains consent, participant information, recruitment, SUS, and sample question material.                                              |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/Ethic Approve/`                                                                 | Exclude                         | Ethics and participant-facing approval materials. Do not open or publish.                                                               |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/Qiance ethical approval rems/`                                                  | Exclude                         | Ethics approval material, unrelated to public website asset story.                                                                      |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/study/001` through `study/005`                                                  | Exclude without opening         | Participant-specific folders.                                                                                                           |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/study/Thematic analysis/`                                                       | Exclude                         | Contains feedback PDFs and qualitative analysis images derived from participant material.                                               |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/backup-logs/`                                                                   | Exclude                         | Raw logs/models and timestamped training artifacts.                                                                                     |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/imps/logs`, `/imps/models`, `/imps/datasets`                                    | Exclude                         | Raw logs, models, and datasets.                                                                                                         |
| `/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/impsy-charles/impsy/logs`, `/models`, `/datasets`                               | Exclude                         | Raw logs, models, and datasets.                                                                                                         |
| `figures/data-collection/qualitative/*`                                                                                                                                    | Exclude                         | Participant-derived qualitative material, including quotes/codes/themes.                                                                |
| `figures/data-collection/quantitative/*`                                                                                                                                   | Exclude by default              | SUS/participant evaluation data. Use summarized copy only, not raw plots, unless Kevin approves the exact level of public study detail. |
| `figures/related-works/*`                                                                                                                                                  | Reject for this page set        | Third-party/reference visuals; not needed for Kevin's project story and may carry external copyright/context issues.                    |
| `figures/ANU-logos/*`, `thesis-poster/logo-images/*`                                                                                                                       | Reject for this page set        | Branding assets do not explain the project.                                                                                             |
| `thesis-poster/*`                                                                                                                                                          | Needs Kevin decision            | Could be public later, but poster publishing is separately listed as a Kevin decision in the harness.                                   |

## Public-Safety Risks

- Private filenames: old log, dataset, model, training, and some embedded
  screenshot assets show concrete `.log`, `.npz`, `.keras`, `.tflite`, or
  timestamped model/file names. Avoid publishing these unless redacted.
- Raw data and artifacts: `backup-logs`, `imps/logs`, `imps/models`,
  `imps/datasets`, and equivalent IMPSY source folders must stay out of the
  website repo.
- Participant material: numbered study folders, participant-interaction photos,
  interview/feedback PDFs, qualitative coding images, and extracted quote images
  must remain excluded.
- Consent/ethics material: ethics approvals, consent forms, participant
  information sheets, sample interview questions, recruitment forms/posters, SUS
  forms, and training certificates must not be published.
- Feedback PDFs: do not open, quote, copy, summarize, or screenshot raw feedback
  PDFs for the public site.
- Raw logs/models: do not copy actual log, dataset, or model files into
  `assets/`; do not publish screenshots where these are readable.
- Study setup photos: the setup photo is safe enough as an already-used public
  asset, but avoid adding participant-interaction photos unless Kevin confirms
  consent/public-use status.

## Recommended Destination Filenames

Use lowercase `impsy-...` names and copy only the approved subset after final
review:

- `assets/img/impsy-old-workflow-home.jpg`
- `assets/img/impsy-wireframe-sketch.jpg`
- `assets/img/impsy-figma-prototype-flow.jpg`
- `assets/img/impsy-interaction-flow.jpg`
- Optional: `assets/img/impsy-design-double-diamond.png`
- Optional: `assets/img/impsy-user-story-beginner.png`

Do not add duplicate copies of assets already present under `assets/img/`.

## Sensitive-File Scan For Later QA

Run this after implementation and asset copying:

```bash
find assets -type f | rg -i "review|cmt|meta-review|ethic|consent|participant|interview|feedback|sus|question|recruit|poster|raw|log|dataset|model|transcript|quote|theme|code|\\.npz|\\.keras|\\.tflite|\\.h5|\\.log"
```

Also run a text-level scan over changed website files to catch accidentally
published private paths or source references:

```bash
rg -n -i "review|cmt|meta-review|ethic|consent|participant|interview|feedback|sus|recruit|raw|backup-logs|study/[0-9]{3}|\\.npz|\\.keras|\\.tflite|\\.h5|\\.log|COMP4550_Kevin_Zhu\\.pdf" _projects _pages assets output
```

Expected result: no hits in public website pages/assets, except intentional hits
inside this curation report or other private-facing `output/` audit files.
