---
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - ui-testing
  - qa-plan
---

# IMPSY UI Test Plan

This is a readiness plan for the future IMPSY project page refresh. It does not
verify the final implementation yet, because the refreshed pages and copied assets may
not exist.

Use this after the page implementation agent finishes, before release or commit.

## Test Scope

Expected routes after implementation:

| Route                                  | Source / owner                        | Expected result                                                                                                                      |
| -------------------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `/projects/`                           | `_pages/projects.md`                  | Project listing renders, the IMPSY card appears under `work`, and the card links to the implemented IMPSY hub.                       |
| `/projects/2_project/`                 | `_projects/2_project.md`              | Main IMPSY project hub renders if no custom permalink is added. This is the current al-folio collection route for the existing file. |
| `/projects/impsy-interface/process/`   | `_pages/impsy-interface-process.md`   | Design process page renders if created and linked from the hub.                                                                      |
| `/projects/impsy-interface/system/`    | `_pages/impsy-interface-system.md`    | System walkthrough page renders if created and linked from the hub.                                                                  |
| `/projects/impsy-interface/study/`     | `_pages/impsy-interface-study.md`     | User study page renders if created and linked from the hub.                                                                          |
| `/projects/impsy-interface/gallery/`   | `_pages/impsy-interface-gallery.md`   | Gallery page renders if created and linked from the hub.                                                                             |
| `/projects/impsy-interface/resources/` | `_pages/impsy-interface-resources.md` | Resources page renders if created and linked from the hub.                                                                           |

Route contract notes:

- If the implementation adds a custom permalink such as `/projects/impsy-interface/`
  for the main hub, update the harness and QA rows before testing. The release should
  block if the project card, hub links, and expected route disagree.
- If a proposed subpage is not created, no published navigation, quick link, or card
  should point to it.
- Local PDF/video asset routes should be tested only if those files are copied and
  approved in the harness, for example:
  - `/assets/pdf/impsy-nime-2026-paper.pdf`
  - `/assets/pdf/impsy-nime-2026-poster.pdf`
  - `/assets/video/impsy-nime-2026-lightning-talk.mp4`

## Browser Checklist

Run these checks on desktop and mobile widths:

- Desktop: 1440 x 900 or similar.
- Mobile: 390 x 844 or similar.
- Optional tablet: 768 x 1024 if the gallery or resource grid is dense.

Checklist:

- Project listing:
  - `/projects/` loads without build or console errors.
  - IMPSY card title, description, category, thumbnail, and click target are correct.
  - Card text does not overflow or clip on mobile.
- Main hub:
  - Page loads at the route recorded in the harness.
  - The stale line `(AI generated content may be wrong)` is gone.
  - Opening section is personal and readable, not a pasted thesis abstract.
  - NIME status, quick links, deeper page links, and visual preview are visible.
  - Long paper title wraps cleanly on mobile.
- Linked pages:
  - Every linked subpage opens from the hub.
  - Each subpage has clear page title, readable spacing, and no orphaned or broken
    navigation links.
  - Browser back/forward and project cycle navigation do not trap the user.
- Dark mode:
  - Current `_config.yml` has `enable_darkmode: false`; if it remains disabled, record
    that no theme toggle is expected.
  - If dark mode is enabled later, verify hub, gallery, captions, tables, link blocks,
    PDF/video links, and project cards remain readable.
- Navigation:
  - Header navigation works from every IMPSY page.
  - `/projects/` remains reachable from the hub and subpages.
  - No link points to an unimplemented route.
- Images:
  - All selected images load without broken icons.
  - Images preserve aspect ratio and do not stretch.
  - Captions match the displayed image.
  - Large images do not dominate the first viewport or cause horizontal scroll.
  - Mobile view keeps image, caption, and following text separated.
- PDF and video links:
  - Official NIME proceedings link opens in a new tab or navigates cleanly.
  - Official PDF link works.
  - Local paper/poster PDFs work only if approved and copied.
  - Local video, if copied, loads controls and captions where available.
  - No link exposes CMT reviews, ethics files, consent forms, participant data, raw
    interviews, or private planning notes.
- Long text wrapping:
  - Paper title wraps without overflow in headings, link blocks, buttons, cards, and
    tables.
  - External URLs in the resources page do not create horizontal scrolling.
  - Tables degrade acceptably on mobile or have been replaced with mobile-friendly
    layout.

## Commands To Run

Start with repo state:

```bash
git status --short
```

Format before final QA:

```bash
npx prettier . --write
```

Build and serve with Docker:

```bash
docker compose down
docker compose up --build
```

The site should be available at:

```text
http://localhost:8080
```

Sensitive-file scan:

```bash
find assets -type f | rg -i "review|cmt|ethic|consent|participant|interview|meta-review|transcript|quote"
```

Expected result: no output. Any match must be inspected before release.

Optional link checks after the site is running:

```bash
npx --yes linkinator http://localhost:8080/projects/ --recurse --skip "mailto:"
```

Optional external link spot checks:

```bash
curl -I -L https://nime2026.org/proceedings/196.html
curl -I -L https://nime.org/proceedings/2026/nime2026_102.pdf
curl -I -L https://github.com/cpmpercussion/impsy
```

Optional accessibility smoke test, matching the repo CI style:

```bash
npx --yes @axe-core/cli http://localhost:8080/projects/ --load-delay=1500
```

## Screenshot Checklist

Capture or visually inspect:

| Page                 | Desktop                  | Mobile                   | Notes                                                                             |
| -------------------- | ------------------------ | ------------------------ | --------------------------------------------------------------------------------- |
| `/projects/`         | Required                 | Required                 | Confirm IMPSY card, category grouping, thumbnail, and card wrapping.              |
| Main IMPSY hub route | Required                 | Required                 | Confirm opening section, quick links, images, and long title wrapping.            |
| Process page         | Required if created      | Required if created      | Confirm design-process images and captions do not crowd the text.                 |
| System page          | Required if created      | Required if created      | Confirm architecture/dataflow image remains legible or links to a larger version. |
| Study page           | Required if created      | Required if created      | Confirm no participant-identifying material appears.                              |
| Gallery page         | Required if created      | Required if created      | Confirm grid spacing, image aspect ratios, and captions.                          |
| Resources page       | Required if created      | Required if created      | Confirm link list, PDF/video links, and long URLs wrap cleanly.                   |
| Dark mode            | Required only if enabled | Required only if enabled | Confirm contrast for captions, tables, cards, and links.                          |

For each screenshot, record:

- viewport size
- route
- light or dark mode
- whether any image, link block, heading, or table overflowed

## Failure Conditions

Block release if any of these occur:

- Jekyll/Docker build fails.
- `/projects/` does not load.
- The IMPSY project card points to a missing route.
- Main hub route is ambiguous or inconsistent with the harness.
- Any linked subpage returns 404.
- Any approved local image, PDF, or video asset is missing or broken.
- A copied file or public link exposes review, CMT, ethics, consent, participant,
  interview, transcript, quote, raw data, private planning, or thesis material that was
  not explicitly approved.
- The page still includes `(AI generated content may be wrong)`.
- The page uses an outdated title instead of `A Web Interface for Real-Time
Interaction with Machine Learning in Musical Performance`.
- Public claims overstate the study, for example saying the system "proved" trust,
  agency, or effectiveness.
- Mobile layout has horizontal scroll caused by tables, long URLs, titles, images, or
  link blocks.
- Dark mode is enabled but captions, links, tables, cards, or code/link blocks are not
  readable.
- External official NIME paper/proceedings links are broken and no current replacement
  is recorded in the harness.

Non-blocking but should be logged:

- Optional poster or lightning talk is omitted because Kevin has not approved hosting.
- Thesis PDF is omitted because public release has not been approved.
- Official external video is not available yet.

## Suggested Harness QA Rows

Do not add these rows until final QA is actually run. Suggested rows to add or update
in `output/impsy-project-page-harness.md`:

| Tracker area           | Suggested update                                                                           | Status after QA                           |
| ---------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------- |
| UI test plan           | `output/impsy-ui-test-plan.md` read before final QA.                                       | Checked                                   |
| Route map              | Record final main hub route and all implemented subpage routes.                            | Checked or Blocked                        |
| Project listing        | `/projects/` checked on desktop and mobile; IMPSY card links to final hub.                 | Checked or Blocked                        |
| Main hub browser check | Main IMPSY route checked on desktop and mobile.                                            | Checked or Blocked                        |
| Subpage browser check  | Process, system, study, gallery, and resources routes checked if implemented.              | Checked or Blocked                        |
| Image rendering        | All copied IMPSY images load, preserve aspect ratio, and match captions.                   | Checked or Blocked                        |
| PDF/video links        | Official NIME links and any copied local PDF/video routes checked.                         | Checked, Needs Kevin decision, or Blocked |
| Dark mode              | If enabled, hub and subpages checked in dark mode; if disabled, record no toggle expected. | Checked                                   |
| Mobile wrapping        | Long title, URLs, cards, tables, captions, and quick links checked for overflow.           | Checked or Blocked                        |
| Sensitive-file scan    | `find assets ... rg ...` returned no sensitive filenames, or each match was resolved.      | Checked or Blocked                        |
| Formatting             | `npx prettier . --write` completed.                                                        | Checked or Blocked                        |
| Docker build           | `docker compose up --build` completed and served the site on port 8080.                    | Checked or Blocked                        |
| Link check             | Optional link checker or manual link pass completed for IMPSY routes and official links.   | Checked or Skipped                        |
| QA screenshots         | Desktop/mobile screenshots captured or visually inspected for each implemented route.      | Checked                                   |
| Release blockers       | Any remaining blockers listed with exact route, file, and reproduction step.               | Checked or Blocked                        |
