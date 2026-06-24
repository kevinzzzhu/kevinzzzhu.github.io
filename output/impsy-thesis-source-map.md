---
created: 2026-06-25
last_edited: 2026-06-25
tags:
  - impsy
  - thesis-source-map
  - personal-website
  - honours-thesis
---

# IMPSY Thesis Source Map

This map treats the COMP4550 honours thesis as the main source for the IMPSY website
redo. The NIME paper should stay as the public publication milestone, not the spine of
the project story.

Thesis source root:
`/Users/kevinzhu/Documents/ANU/ANU-Bachelor-of-Advanced-Computing/Semester-7-2024/COMP4550/COMP4550-Kevin Zhu`

Website root:
`/Users/kevinzhu/Documents/personal-website/kevinzzzhu.github.io`

## High-Level Direction

Lead with the honours project:

- Kevin built a web interface around IMPSY because the existing workflow was powerful
  but hard to read during creative use.
- The project was a design and engineering bridge between HCI, musical AI, and live
  performance workflow.
- The best public story is the loop: understand the old workflow, design around user
  needs, build the React/Python interface, evaluate what became clearer, and explain
  what still needs work.
- The NIME paper belongs near the end of the hub and on resources as the later public
  research outcome.

## Page Source Map

| Proposed page      | Thesis-first role                                                                                                                                                         | Primary thesis sources                                                                                                                                                                      | Public page angle                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Hub                | Give a personal overview of what Kevin built, why the old IMPSY workflow needed a web interface, and what the project taught him.                                         | `1-introduction.tex:5-18`, `2-background.tex:104-122`, `4-systemDesign.tex:86-89`, `6-concludingRemarks.tex:23-32`                                                                          | Start from the interface problem and contribution. Mention NIME after the project is understood.                             |
| Design process     | Show how the interface moved from old workflow pain points into user stories, sketches, Figma, and final design goals.                                                    | `3-requirementAnalysis.tex:10-18`, `3-requirementAnalysis.tex:26-67`, `3-requirementAnalysis.tex:83-138`, `3-requirementAnalysis.tex:145-172`, `z-appendix-1.tex:3-10`                      | Tell it as a design process, not a methodology chapter. Personas/user stories are design tools, not participant evidence.    |
| System walkthrough | Explain the actual tool in use: play, log, inspect, train/select a model, configure, and perform again.                                                                   | `4-systemDesign.tex:10-34`, `4-systemDesign.tex:35-54`, `4-systemDesign.tex:56-75`, `4-systemDesign.tex:149-178`, `4-systemDesign.tex:179-199`                                              | Keep the user-facing loop first. Put React, D3.js, WebSockets, MIDI, Python, and MDRNN detail in a short technical snapshot. |
| Study takeaways    | Summarise what the honours evaluation suggested without exposing participant material.                                                                                    | `5-caseStudy.tex:11-23`, `5-caseStudy.tex:88-143`, `5-caseStudy.tex:144-208`, `5-caseStudy.tex:251-320`, `5-caseStudy.tex:336-343`, `6-concludingRemarks.tex:34-67`                         | Present it as "what I learned", not "the study proved". Avoid raw quotes and private instruments.                            |
| Gallery            | Add visuals that make the thesis story inspectable: old workflow, design process, system architecture, interaction flow, selected interface screens, study setup if safe. | Figure refs in `2-background.tex:124-170`, `3-requirementAnalysis.tex:19-80`, `4-systemDesign.tex:79-147`, `4-systemDesign.tex:182-186`, `5-caseStudy.tex:15-20`, `5-caseStudy.tex:105-110` | Curate a small set. Captions should explain the project workflow, not repeat figure labels.                                  |
| Resources          | Collect stable public outputs and pending decisions.                                                                                                                      | `z-appendix-1.tex:66-67`, thesis PDF path, NIME public facts from harness                                                                                                                   | Keep NIME page/PDF and upstream IMPSY. Do not link the thesis PDF or private repo unless Kevin approves.                     |

## Public-Safe Story Beats And Claims

Use these as source-backed content atoms. Paraphrase them for the site.

| Story beat or claim                                                                                                                                                        | Source references                                                                             | Recommended wording direction                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| The project started from a gap between IMPSY's ML capability and the interface needed for everyday creative use.                                                           | `1-introduction.tex:5-8`, `2-background.tex:118-122`                                          | "IMPSY could already listen, log, train, and respond, but the workflow did not make those steps easy to see while performing."             |
| The interface was built around real-time interaction, visual feedback, logs, datasets, models, and configuration.                                                          | `1-introduction.tex:12-18`, `4-systemDesign.tex:10-34`, `4-systemDesign.tex:189-199`          | "The web interface wraps the whole creative ML loop, not only the final performance screen."                                               |
| Old IMPSY had useful pages for logs, datasets, models, and config, but it lacked immediate visual and interactive feedback.                                                | `2-background.tex:104-122`, old screenshots in `figures/old-impsy/`                           | "The old workflow exposed the machinery, but not enough of the relationship between action, data, and AI response."                        |
| The design process used Double Diamond, personas, user stories, sketches, Figma, and in-lab feedback to shape the system.                                                  | `3-requirementAnalysis.tex:10-18`, `3-requirementAnalysis.tex:26-84`, `z-appendix-1.tex:3-10` | "The thesis gives the missing process story: understand the workflow, prototype the loop, and refine the interface before implementation." |
| The user needs converged on clarity, feedback, expertise accommodation, engagement, and comfort.                                                                           | `3-requirementAnalysis.tex:145-154`                                                           | "The interface had to make ML operations approachable without removing advanced control."                                                  |
| The system requirements were real-time performance, visual feedback, ease of use, and model management.                                                                    | `3-requirementAnalysis.tex:156-172`                                                           | "Those needs became concrete system goals: low-latency interaction, clear visual state, guided basic use, and model/log management."       |
| The frontend is React-based and the backend is Python-based around the IMPSY core.                                                                                         | `4-systemDesign.tex:10-33`                                                                    | "React handles the browser workflow; Python handles the musical AI backend and timing-sensitive interaction."                              |
| The interface visualises live input/output, logs, and model/training information.                                                                                          | `4-systemDesign.tex:15-23`, `4-systemDesign.tex:161-178`                                      | "Visualisation appears in three places: live performance, retrospective log inspection, and model/training views."                         |
| The system supports modes such as call-and-response, polyphony, battle, and user-only operation.                                                                           | `4-systemDesign.tex:42-50`                                                                    | Mention only if useful for system walkthrough; avoid overloading the hub.                                                                  |
| Logs and models are connected through traceable training data.                                                                                                             | `4-systemDesign.tex:54`, `4-systemDesign.tex:71-73`                                           | "The interface helps users connect what they played with the data used to train a later model."                                            |
| The exploratory study used five participants in a 40-minute structured session with tutorial, improvisation, training, and post-session feedback.                          | `5-caseStudy.tex:22-23`, `5-caseStudy.tex:67-100`                                             | Safe to summarise at a high level. Do not publish table rows as identity detail.                                                           |
| The study's clearest public takeaway is that real-time feedback and visualisation helped users understand system state, but confidence and learnability still needed work. | `5-caseStudy.tex:174-208`, `6-concludingRemarks.tex:11-18`, `6-concludingRemarks.tex:23-32`   | "Visual feedback helped, but it did not remove the learning curve."                                                                        |
| The overall SUS mean was 62.50, but it should be framed as a signal for iteration, not a headline result.                                                                  | `5-caseStudy.tex:144-180`                                                                     | Use sparingly or move to a small note. Personal website copy should not feel like a results table.                                         |
| Users' perception of the interface was tied to the AI's musical output, especially when short sessions produced sparse or chaotic training data.                           | `5-caseStudy.tex:336-343`, `6-concludingRemarks.tex:51-67`                                    | "A clearer interface cannot make weak training data musically satisfying by itself."                                                       |
| Future work points toward clearer MIDI mapping, richer visualisation, better onboarding, preset/pretrained support, and more transparent AI behaviour.                     | `6-concludingRemarks.tex:37-67`                                                               | Good for a short "what I would improve next" block.                                                                                        |

## Gallery And Asset Leads

These are source leads, not final asset approvals. The asset curator still needs to
copy only public-safe files and inspect each image at full resolution.

| Candidate visual                 | Source path                                   | Page fit                           | Safety note                                                                                                                                  |
| -------------------------------- | --------------------------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Double Diamond diagram           | `figures/double-diamond.png`                  | Design process                     | Public-safe as a generic process diagram, but may be too generic alone.                                                                      |
| Hand-drawn wireframe             | `figures/prototype/draw-wireframe.jpg`        | Design process, gallery            | Strong thesis-first visual. Looks like process work rather than paper output. Check for no private annotations before copying.               |
| Figma prototype board            | `figures/prototype/figma-prototype.jpg`       | Design process, gallery            | Strong candidate. Use if the text is not too small and no private links are visible.                                                         |
| Old IMPSY screenshots            | `figures/old-impsy/*.jpg`                     | Design process                     | Good for "before" context, but several show log/model filenames and local-looking links. Use only cropped/redacted versions if needed.       |
| New IMPSY screen set             | `figures/new-impsy/*.jpg`                     | Hub, system, gallery               | Existing NIME-derived images are already useful. Re-check `new-impsy-logvis-combined.jpg` because it exposes raw log filenames/numeric data. |
| System dataflow diagram          | `figures/system-design.jpg`                   | System walkthrough                 | Strong system visual. It is thesis-first and explains MIDI/backend/frontend flow.                                                            |
| Interaction flow diagram         | `figures/interaction-flow.jpg`                | System walkthrough, design process | Strong source for navigation/story. Use if readable after resizing.                                                                          |
| Study setup photo                | `figures/study-preparation/configuration.jpg` | Study, gallery                     | Likely usable if it does not identify people or private room details. Asset curator should inspect closely.                                  |
| Improvisation study photo        | `figures/study-preparation/improvisation.jpg` | Study                              | Exclude unless Kevin explicitly approves and identity/privacy is clear. It may show a participant.                                           |
| SUS/quantitative charts          | `figures/data-collection/quantitative/*.png`  | Study                              | Optional. Demote unless Kevin wants a more academic study page. Better to summarise in prose.                                                |
| Qualitative analysis screenshots | `figures/data-collection/qualitative/*.png`   | Exclude                            | These show quotes/codes/analysis artifacts from participant data. Do not publish.                                                            |

## Private Or Excluded Material

Do not publish, link, copy, or quote these without explicit approval.

| Material                                                                                   | Source references                                                                                                 | Why exclude                                                                                                                                                        |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Honours thesis PDF                                                                         | `COMP4550_Kevin_Zhu.pdf`; harness public-safety rule                                                              | The thesis may contain participant material, ethics documents, raw scores, and internal project history. Use it as a source, not a public asset.                   |
| Ethics approval, consent, participant information, recruitment forms, and sample questions | `z-appendix-1.tex:69-129`; `figures/appendix/*`; `Ethic Approve/`; `Qiance ethical approval rems/`                | These are study governance materials, not website content.                                                                                                         |
| Interview transcripts and raw participant-linked scores                                    | `z-appendix-1.tex:133-145`                                                                                        | Direct participant data. Public page should only paraphrase high-level findings.                                                                                   |
| Raw participant quotes from the thesis                                                     | `5-caseStudy.tex:324-334`; `z-appendix-1.tex:11-64`                                                               | Even anonymised quotes can expose study material and make the page feel like an evaluation report.                                                                 |
| Qualitative analysis screenshots                                                           | `figures/data-collection/qualitative/*`                                                                           | They show extracted quotes, codes, and analysis artifacts.                                                                                                         |
| Backup logs, model files, TensorBoard files, and selected-log data files                   | `backup-logs/`                                                                                                    | They expose raw filenames, timestamps, model artifacts, and potentially private experiment data.                                                                   |
| Old/new UI screenshots with raw filenames or numeric logs                                  | `figures/old-impsy/old-impsy-log.jpg`, `figures/new-impsy/new-impsy-logvis-combined.jpg`, similar log/model views | Useful visually but must be cropped/redacted before public use.                                                                                                    |
| Local videos and large demo files                                                          | `Kevin-4K 20Mbps HEVC SDR.mov`, `demo-NIME2026.mov`                                                               | Hosting and public-release status are unclear.                                                                                                                     |
| Thesis `0-abstract.tex` as a factual summary                                               | `0-abstract.tex:1-3`                                                                                              | It appears stale or mismatched, including psychological/clinical wording that does not fit IMPSY. Do not use it for website copy.                                  |
| Public web-interface repository link                                                       | `z-appendix-1.tex:66-67`                                                                                          | The appendix points to `https://github.com/kevinzzzhu/impsy`, but the current harness treats only upstream IMPSY as confirmed. Kevin should decide before linking. |

## Material To Remove Or Demote From The Current Paper-First Site

The current pages already contain useful thesis-first scaffolding, but the next rewrite
should adjust weight and ordering so the thesis project carries the story.

| Current material                                                                                             | Recommendation                                                                          | Why                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Hub NIME paragraph near the top (`_projects/2_project.md:23-27`)                                             | Demote to a compact "later outcome" block after the contribution/story setup.           | The hub should first answer what Kevin built and why.                                    |
| Hub "Project links" list leading with NIME paper links (`_projects/2_project.md:31-41`)                      | Put internal story pages first, then publication/resource links.                        | The current order makes the paper feel like the main object.                             |
| Resources page opening with `## Paper` (`_pages/impsy-interface-resources.md:17-25`)                         | Add a short "Project source" or "Public outputs" structure; keep paper as one resource. | The resources page currently frames the paper as the first and largest item.             |
| Process page description mentioning "public NIME paper" (`_pages/impsy-interface-process.md:3-5`)            | Rename around the thesis design process.                                                | The process page should feel like an honours design story, not a publication companion.  |
| Process page "From thesis to NIME" section (`_pages/impsy-interface-process.md:70-81`)                       | Keep but shorten; move after process evidence.                                          | Useful context, but not the page's main payoff.                                          |
| Study page SUS sentence (`_pages/impsy-interface-study.md:55-58`)                                            | Demote or keep as a footnote-style detail.                                              | A personal site should not over-index on one metric; the thesis takeaway is richer.      |
| Repeated local paper PDF links (`_projects/2_project.md:33-35`, `_pages/impsy-interface-resources.md:23-25`) | Keep official links, but avoid repeated prominent local PDF calls.                      | The NIME PDF is useful, but repeated paper links reinforce paper-first browsing.         |
| Broad phrases like "validated", "demonstrated", "proved", "democratizing" if present in later drafts         | Remove or soften.                                                                       | The thesis supports exploratory findings and design lessons, not final universal claims. |

## Recommended Page Emphasis

### Hub

Use the hub to say:

- "This began as my COMP4550 honours project at ANU."
- "I built a web interface around IMPSY so the musical AI workflow was easier to see
  and shape."
- "The core contribution was connecting performance, logs, training, models,
  configuration, and live visual feedback in one browser workflow."
- "The project later became a NIME 2026 paper."

Do not start with the paper title or publication links.

### Design Process

Use the thesis as the backbone:

- old IMPSY workflow problem
- Double Diamond structure
- personas/user stories as design tools
- hand sketch and Figma prototype
- early feedback themes: clarity, less jargon, visible progress, guided use
- final design goals: approachable defaults, visible feedback, inspectable logs,
  advanced controls

Avoid raw in-lab quotes. Paraphrase the pattern.

### System Walkthrough

Structure this as a user journey:

1. Start a project and connect a controller.
2. Perform and see input/output.
3. Inspect logs.
4. Select data and train or choose a model.
5. Configure performance behaviour.
6. Return to live improvisation.

Then add a short technical note with React, Python, D3.js, MIDI, WebSockets, and MDRNN.

### Study Takeaways

Use the thesis study as a reflective project lesson:

- five-person exploratory session
- compact controller-and-laptop setup
- structured flow: tutorial, improvisation, training, survey/interview
- real-time feedback was the clearest strength
- confidence and learnability remained uneven
- AI output quality affected people's feeling about the interface
- future work: onboarding, presets/pretrained models, MIDI mapping, clearer data-to-AI
  explanations

Avoid turning the page into a results table.

### Gallery

The current gallery needs more thesis-process visuals, not only NIME/publication
figures. Add a small "process" group if assets pass safety:

- sketch or Figma prototype
- system dataflow
- interaction flow
- selected old-vs-new UI comparison, redacted if needed

### Resources

Recommended order:

1. "Project context" - honours project note, no thesis PDF link unless approved.
2. "Publication" - NIME proceedings and official PDF.
3. "Code" - upstream IMPSY, plus Kevin's web-interface repo only if approved.
4. "Pending public materials" - thesis PDF, poster, video, web-interface repo.

## Open Decisions For Kevin

| Decision                                                                                     | Default recommendation                                               | Why it matters                                                                       |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Should the honours thesis PDF be public?                                                     | No, not for this pass.                                               | It contains or points to material that needs a privacy and quality check.            |
| Should `https://github.com/kevinzzzhu/impsy` be linked as Kevin's thesis/web-interface repo? | Verify and approve before linking.                                   | The appendix lists it, but the harness only confirms upstream IMPSY.                 |
| Can thesis process images be copied into the site?                                           | Yes for sketch/Figma/system diagrams after asset-curator inspection. | These are the strongest missing thesis-first visuals.                                |
| Should any old IMPSY screenshots be used?                                                    | Use only cropped/redacted examples.                                  | They help the before/after story but show filenames and technical details.           |
| How much study detail should be public?                                                      | Keep the study page mostly qualitative and reflective.               | It fits a personal site and avoids exposing participant material.                    |
| Should SUS 62.50 stay visible?                                                               | Keep only if it is contextualised as "room to improve".              | Otherwise it pulls the page toward paper-style evaluation.                           |
| Should local videos/poster be hosted?                                                        | Wait for explicit release and hosting approval.                      | They may expose private or not-yet-public material and are large assets.             |
| Should the page use first person?                                                            | Yes, selectively.                                                    | The story is stronger as Kevin's project record than as a compressed paper abstract. |

## Notes For Next Agent

- Build the content plan from thesis chapters 1, 3, 4, 5, and 6 first.
- Use chapter 2 mainly for old IMPSY context and why visual feedback mattered.
- Use the NIME paper only to confirm final public title, publication status, and any
  final public assets that are cleaner than thesis figures.
- Do not paste thesis prose directly. Turn it into short personal-site paragraphs and
  captions.
- Do not update the harness from this pass; the current instruction limited write scope
  to this file.
