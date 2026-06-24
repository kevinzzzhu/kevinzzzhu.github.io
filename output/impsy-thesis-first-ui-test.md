---
created: 2026-06-25
last_edited: 2026-06-25
tags:
  - impsy
  - personal-website
  - ui-test
  - public-safety
---

# IMPSY Thesis-First UI Test

## Verdict

The thesis-first IMPSY pages build and render correctly on the checked desktop and
mobile viewports. I found no IMPSY private-material leaks in the changed page copy,
new IMPSY asset filenames, or linked public resources.

Two caveats are outside the IMPSY markdown changes:

- The site-wide footer is `position: fixed` and overlays page content in full-page and
  mobile screenshots.
- `_config.yml` has `enable_darkmode: false`, so there is no exposed theme toggle. A
  forced `data-theme="dark"` CSS check on the resources page rendered without an
  IMPSY-specific layout issue.

## Commands Run

```bash
npx prettier --check _projects/2_project.md _pages/impsy-interface-process.md _pages/impsy-interface-system.md _pages/impsy-interface-study.md _pages/impsy-interface-gallery.md _pages/impsy-interface-resources.md output/impsy-project-page-harness.md
```

Result: passed; no formatting changes made.

```bash
bundle exec jekyll build
```

Result: passed; IMPSY responsive image variants were generated in `_site/assets/img/`.

```bash
python3 -m http.server 4000 --directory _site
```

Result: served built site at `http://localhost:4000/`.

```bash
find assets -type f | rg -i "review|cmt|meta-review|ethic|consent|participant|interview|feedback|sus|question|recruit|poster|raw|log|dataset|model|transcript|quote|theme|code|\.npz|\.keras|\.tflite|\.h5|\.log"
```

Result: no IMPSY asset hits. Pre-existing unrelated hits:

```text
assets/css/jekyll-pygments-themes-github.css
assets/css/jekyll-pygments-themes-native.css
assets/js/theme.js
assets/js/copy_code.js
assets/js/pseudocode-setup.js
assets/img/publication_preview/brownian-motion.gif
assets/img/publication_preview/wave-mechanics.gif
assets/img/picknplay-wireframe/Voting/gameinforeview.png
assets/img/picknplay-wireframe/Lobby/private-pool/add-individuals/scanbarcode.png
assets/img/picknplay-wireframe/Lobby/private-pool/barcodemanagement.png
assets/jupyter/blog.ipynb
```

```bash
rg -n -i "review|cmt|meta-review|ethic|consent|participant|interview|feedback|recruit|raw|backup-logs|study/[0-9]{3}|\.npz|\.keras|\.tflite|\.h5|\.log|COMP4550_Kevin_Zhu\.pdf" _projects _pages assets
```

Result: the required broad scan was noisy because it includes minified/search assets
and binary/static assets. The IMPSY markdown subset contained only public-safe terms:

```text
_pages/impsy-interface-system.md:29:reviewed, selected, and used for later model training.
_pages/impsy-interface-study.md:17:people made sense of the workflow, where visual feedback helped, and where the
_pages/impsy-interface-study.md:29:The study focused on a practical question: does visual feedback help people understand
_pages/impsy-interface-study.md:38:The clearest strength was real-time feedback. Visualisation helped users see when the
_pages/impsy-interface-study.md:70:Visual feedback can help users understand what the system is doing. Log views can
_projects/2_project.md:25:and real-time visual feedback so the user can move through the whole workflow without
_projects/2_project.md:87:The exploratory study suggested that visual feedback helped people follow what the
_pages/impsy-interface-process.md:49:playing and see useful feedback quickly. Deeper settings, model choices, and MIDI
_pages/impsy-interface-process.md:76:- show immediate feedback during live interaction
```

No `COMP4550_Kevin_Zhu.pdf`, private study path, model file, dataset file, CMT/review,
ethics, consent, recruitment, raw log, or raw participant/interview material was found
in the IMPSY page subset.

## Routes Checked

Local HTTP checks:

```text
/projects/ 200 text/html
/projects/impsy-interface/ 200 text/html
/projects/impsy-interface/process/ 200 text/html
/projects/impsy-interface/system/ 200 text/html
/projects/impsy-interface/study/ 200 text/html
/projects/impsy-interface/gallery/ 200 text/html
/projects/impsy-interface/resources/ 200 text/html
/assets/pdf/impsy-nime-2026-paper.pdf 200 application/pdf
```

External resource checks:

```text
https://nime2026.org/proceedings/196.html 200 text/html
https://nime.org/proceedings/2026/nime2026_102.pdf 200 application/pdf
https://github.com/cpmpercussion/impsy 200 text/html
```

IMPSY image checks:

```text
/assets/img/impsy-web-interface-teaser.jpg 200 image/jpeg
/assets/img/impsy-improvisation-visualisation.jpg 200 image/jpeg
/assets/img/impsy-configuration.jpg 200 image/jpeg
/assets/img/impsy-dataflow.png 200 image/png
/assets/img/impsy-minilab-controller.jpg 200 image/jpeg
/assets/img/impsy-old-workflow-home.jpg 200 image/jpeg
/assets/img/impsy-wireframe-sketch.jpg 200 image/jpeg
/assets/img/impsy-figma-prototype-flow.jpg 200 image/jpeg
/assets/img/impsy-interaction-flow.jpg 200 image/jpeg
```

## Browser Checks

Checked with Playwright at:

- Desktop: `1440x1000`
- Mobile: `390x844`

Findings:

- All requested routes loaded with the expected page titles and headings.
- No broken images on the requested routes.
- IMPSY images rendered at responsive sizes on desktop and mobile.
- No document/body horizontal overflow on desktop or mobile.
- Resource links and long asset paths wrapped within the mobile viewport.
- The resources page local PDF link returned `200 application/pdf`.
- The official NIME page/PDF and upstream GitHub link returned `200`.
- The four new thesis-first images do not show obvious private participant, ethics,
  CMT, raw log filename, dataset/model file, or thesis-PDF exposure.

Screenshots:

```text
output/playwright/impsy-hub-desktop-light.png
output/playwright/impsy-resources-mobile-light.png
output/playwright/impsy-resources-mobile-forced-dark.png
```

## Issues Fixed

None. No markdown link or image-reference fix was needed.

## Blockers / Caveats

- The global browser console shows `determineComputedTheme is not defined`. This was
  also noted in prior IMPSY QA memory and is not specific to the new IMPSY markdown.
- Dark mode is disabled in `_config.yml`, so I did not test a real user-facing theme
  toggle.
- The fixed global footer can cover content while scrolling or in full-page
  screenshots, especially on mobile. I left it unchanged because it is outside this
  tester write scope.
