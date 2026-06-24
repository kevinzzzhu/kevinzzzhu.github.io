---
created: 2026-06-25
last_edited: 2026-06-25
tags:
  - impsy
  - thesis-first
  - content-plan
  - personal-website
  - agent-handoff
---

# IMPSY Thesis-First Content Plan

Scope: content plan and draft copy only. This pass does not edit website pages,
copy assets, or update the harness.

The next rewrite should make the COMP4550 honours thesis the main project story.
The NIME 2026 paper should stay visible, but as a later public milestone and
resource after the visitor understands what Kevin built, why the interface was
needed, how the design developed, and what the study suggested.

## Proposed Page Hierarchy And Navigation Labels

Use the existing hub-and-spoke route structure. Keep the route stable so any
existing links keep working, but change page emphasis and navigation order.

| Route                                  | Navigation label   | Page role                                                                       | Primary source                                            |
| -------------------------------------- | ------------------ | ------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `/projects/impsy-interface/`           | Overview           | Main project hub. Start with Kevin's honours project and the interface problem. | Thesis intro, background, system design, conclusion       |
| `/projects/impsy-interface/process/`   | Design process     | How the old workflow became requirements, sketches, Figma, and design goals.    | Thesis requirement analysis and appendix process material |
| `/projects/impsy-interface/system/`    | System walkthrough | A plain-language journey through using the tool.                                | Thesis system design and public-safe NIME figures         |
| `/projects/impsy-interface/study/`     | Study takeaways    | Public-safe reflection on the exploratory evaluation.                           | Thesis case study and conclusion                          |
| `/projects/impsy-interface/gallery/`   | Gallery            | Visual inspection page grouped by process, system, and study/context.           | Curated assets from thesis and NIME                       |
| `/projects/impsy-interface/resources/` | Resources          | Public links, code status, and pending release decisions.                       | Public NIME sources, upstream IMPSY repo, Kevin decisions |

Recommended hub link order:

1. Design process
2. System walkthrough
3. Study takeaways
4. Gallery
5. Resources

Put NIME proceedings/PDF and code links inside the resources page and a compact
"Later public outcome" block on the hub. Do not lead the hub with publication links.

## Page-By-Page Draft Copy

The copy below is written as implementation-ready draft material, but Agent 4
should still adapt it to the final page layout and available assets.

### Hub: Overview

Suggested frontmatter changes:

- Keep title: `IMPSY Web Interface`
- Keep route: `/projects/impsy-interface/`
- Keep thumbnail: `/assets/img/impsy-web-interface-teaser.jpg`
- Suggested description: `an honours project on making musical AI easier to see, shape, and perform with`

Opening draft:

```markdown
I built the IMPSY web interface for my COMP4550 honours project at ANU. IMPSY was
already a powerful musical AI system: it could listen to performance data, train
models, and generate responses. The problem was that too much of that workflow was
hard to see while using it creatively.

For a performer, that matters. If you cannot tell what the system heard, what data
is being used, which model is active, or when the AI is replying, the interaction
can feel like a black box instead of an instrument.

My project was to wrap that machine-learning music loop in a browser interface. The
interface connects performance, logs, training data, model selection, configuration,
and real-time visual feedback so the user can move through the whole workflow
without losing the thread.
```

Hero/teaser image:

```liquid
{% include figure.liquid path="/assets/img/impsy-web-interface-teaser.jpg" alt="The IMPSY web interface running beside a MIDI controller" caption="The project began as my honours interface for making IMPSY's performance, training, model, and configuration workflow easier to follow." %}
```

Section: `What I built`

```markdown
IMPSY is used for call-and-response musical interaction. A performer plays with a
MIDI controller, the system records the interaction, and a model can respond using
patterns learned from performance data.

The web interface sits around that loop. It gives the user places to perform, inspect
logs, select training material, train or choose a model, adjust configuration, and
return to improvisation. The important shift is that the data and model steps are no
longer hidden background work. They become part of the creative workflow.
```

Section: `Why I cared about this`

```markdown
This project sat in the part of HCI I enjoy most: making a technical system legible
enough that people can work with it creatively. I was not trying to pretend musical
machine learning is simple. I wanted the interface to show enough of the system state
that a user could make better choices while still staying close to the musical task.

That meant balancing two needs: a beginner should be able to start playing without
understanding every backend detail, while an experienced user should still be able to
inspect data, configure the system, and shape the model.
```

Section: `Later public outcome`

```markdown
The honours project later became a NIME 2026 paper with Charles Martin: **A Web
Interface for Real-Time Interaction with Machine Learning in Musical Performance**.
I treat the paper as the public research milestone for this work. The fuller website
story starts earlier, with the thesis design process and the system I built.
```

Section: `Explore the project`

```markdown
- [Design process](/projects/impsy-interface/process/) - how the project moved from
  workflow problems to sketches, prototype screens, and design goals.
- [System walkthrough](/projects/impsy-interface/system/) - a plain-language tour of
  the play, inspect, train, configure, and perform loop.
- [Study takeaways](/projects/impsy-interface/study/) - what the honours evaluation
  suggested, without raw participant material.
- [Gallery](/projects/impsy-interface/gallery/) - process and system visuals from the
  thesis and public paper materials.
- [Resources](/projects/impsy-interface/resources/) - NIME links, code links, and
  public-release decisions.
```

Hub notes for Agent 4:

- Keep the current strong first two paragraphs from `_projects/2_project.md:13-21`,
  but add the explicit COMP4550 honours framing earlier.
- Move `_projects/2_project.md:23-27` into the "Later public outcome" section.
- Replace the current `Project links` block at `_projects/2_project.md:31-41` with
  internal project pages first. Put NIME links on resources.

### Design Process

Suggested title: `IMPSY design process`

Suggested description: `How the honours project moved from workflow problems to sketches, prototypes, and design goals`

Opening draft:

```markdown
The interface did not start as a visual polish layer. It started from a workflow
problem. The original IMPSY system could record performances, train models, and
generate responses, but the user had to understand several separate technical steps
to keep the interaction moving.

For the honours project, I treated that as an HCI problem. The main question was:
how can a musician understand and shape a musical AI system while still staying in a
creative flow?
```

Section: `Understanding the old workflow`

```markdown
The old interface exposed useful parts of IMPSY, including logs, datasets, models,
and configuration. The issue was not that these pieces were missing. The issue was
that the relationship between them was not easy to read during use.

That gave me the first design direction: keep the whole loop visible. A user should
be able to see how performance becomes data, how data becomes a model, and how that
model returns to live interaction.
```

Suggested image after this section, if copied later:

```liquid
{% include figure.liquid path="/assets/img/impsy-old-workflow-home.jpg" alt="The older IMPSY home workflow" caption="The previous workflow exposed the system's parts, but the redesign needed to make the relationship between performance, data, models, and response easier to follow." %}
```

Section: `Design tools, not claims about users`

```markdown
I used personas and user stories as design tools. They helped me avoid designing only
for someone who already knew the backend. The useful spread was simple: a beginner
who wants to try sound quickly, a musician who wants to shape the system through
their own playing, and a technical creator who wants deeper control.

That led to progressive disclosure. The first interaction should be playable and
readable. Deeper controls for training, MIDI setup, and model configuration should
still be there, but they should not block the first musical interaction.
```

Optional image:

```liquid
{% include figure.liquid path="/assets/img/impsy-user-story-beginner.png" alt="A user story map for a beginner IMPSY user" caption="The user-story maps were design tools for thinking through different entry points, not evidence about real participant groups." %}
```

Section: `Sketching the loop`

```markdown
The paper sketch and Figma prototype were where the project became more concrete. I
was testing how a user could move between project setup, improvisation, log
inspection, training, model selection, and configuration without losing track of the
creative loop.

The key question was not only where the buttons should go. It was how the interface
could show the relationship between performance data, model behaviour, and musical
response.
```

Suggested images:

```liquid
{% include figure.liquid path="/assets/img/impsy-wireframe-sketch.jpg" alt="Early hand-drawn wireframe for the IMPSY interface" caption="The hand sketch explored how the main workflow areas could sit together before the interface became a polished prototype." %}

{% include figure.liquid path="/assets/img/impsy-figma-prototype-flow.jpg" alt="Figma prototype flow for the IMPSY web interface" caption="The Figma prototype turned the rough workflow into connected screens for performance, logs, training, models, and configuration." %}
```

Section: `Design goals`

```markdown
The design settled around four practical goals:

- make the system approachable without hiding important complexity
- show immediate feedback during live interaction
- make recorded logs and training material inspectable
- keep advanced controls available when users need them

Those goals shaped the final interface more than the publication framing did. The
NIME paper came later, after the thesis had already worked through the design story.
```

Design process notes for Agent 4:

- Reuse the current framing at `_pages/impsy-interface-process.md:15-39`.
- Replace the current single configuration figure at `_pages/impsy-interface-process.md:55`
  with process visuals after they are copied.
- Rename or rewrite the frontmatter description at
  `_pages/impsy-interface-process.md:5`; it currently points toward the NIME paper.
- Keep the "From thesis to NIME" idea from `_pages/impsy-interface-process.md:70-81`,
  but shorten it and move it after the thesis process material.

### System Walkthrough

Suggested title: `IMPSY system walkthrough`

Suggested description: `A plain-language tour of the performance, data, model, and configuration loop`

Opening draft:

```markdown
The system is easiest to understand as a loop: play, inspect, train, configure, and
return to performance.

The browser interface handles the visible workflow. The Python backend handles IMPSY's
musical AI logic, MIDI communication, logging, and timing-sensitive response. The page
does not need to explain every backend detail first. It should start with what a user
does.
```

Section: `1. Connect and play`

```markdown
A performer starts with a MIDI controller and the browser interface. The first job of
the interface is to make the system state visible: is the controller connected, is the
system receiving input, and is the performance being recorded?

This matters because the user's playing is not only sound. It is also data that can be
reviewed, selected, and used for later model training.
```

Suggested image:

```liquid
{% include figure.liquid path="/assets/img/impsy-minilab-controller.jpg" alt="A compact MIDI controller used with the IMPSY interface" caption="The project used a compact controller-and-browser setup so the workflow stayed close to a small-studio performance context." %}
```

Section: `2. See the AI respond`

```markdown
IMPSY supports call-and-response interaction. The performer plays, the system listens,
and the model can generate a musical response.

The live view separates human input and AI output so the exchange is easier to read.
The visualisation is not meant to replace listening. It gives the performer a second
way to understand when the system is receiving input and when the model is acting.
```

Suggested image:

```liquid
{% include figure.liquid path="/assets/img/impsy-improvisation-visualisation.jpg" alt="IMPSY improvisation view with human input and AI output visualisation" caption="The live view separates performer input from AI output so the call-and-response interaction is visible while it happens." %}
```

Section: `3. Inspect recorded data`

```markdown
After playing, the user can inspect logs. This is where the interface connects
performance with machine-learning material.

Instead of treating recordings as hidden files, the interface makes them part of the
workflow. A user can review what was recorded and make a more informed decision about
what should become training data.
```

Do not use raw log screenshots unless redacted. The approved current plan does not
include a log screenshot because several candidates expose filenames or numeric data.

Section: `4. Train or choose a model`

```markdown
The user can train from selected material or choose an existing model. Training is
still conceptually difficult, especially in a short creative session, but the interface
can make the step more visible by keeping data, model state, and progress close to the
rest of the workflow.

The project is not claiming that interface design makes model training easy. It shows
where the user's performance data goes and how that data connects to later AI
responses.
```

Section: `5. Configure and return to performance`

```markdown
Configuration stays in the browser workflow so setup is not detached from performance.
Once the user has selected settings and a model, they return to improvisation and the
loop starts again.

That repeated loop is the heart of the project. The interface lets the user move
between musical action and machine-learning state without treating the model as a
separate technical object.
```

Suggested images:

```liquid
{% include figure.liquid path="/assets/img/impsy-configuration.jpg" alt="IMPSY configuration interface" caption="Configuration stays visible in the browser workflow so setup decisions remain connected to performance." %}

{% include figure.liquid path="/assets/img/impsy-dataflow.png" alt="IMPSY dataflow diagram" caption="The system links MIDI hardware, the Python backend, logs, models, browser visualisation, and real-time communication." %}

{% include figure.liquid path="/assets/img/impsy-interaction-flow.jpg" alt="IMPSY interaction flow diagram" caption="The interaction flow shows how the interface connects project setup, performance, logs, training, models, and configuration." %}
```

Section: `Technical snapshot`

```markdown
The interface uses React for the browser views and D3.js for visualisation. The
backend is Python-based and builds on IMPSY's musical AI system, including recurrent
neural network model behaviour. MIDI carries musical control messages, WebSockets
support real-time updates, and HTTP endpoints handle slower configuration and training
tasks.

The stack matters because it supports the user-facing loop: record, inspect, train,
configure, perform, and understand.
```

System notes for Agent 4:

- Reuse most of `_pages/impsy-interface-system.md:15-84`; the structure is already
  close to the intended walkthrough.
- Add a clearer configuration step. Current system page jumps from model building to
  return-to-performance at `_pages/impsy-interface-system.md:55-72`.
- Add the new interaction-flow asset if it passes final zoom-level safety review.
- Avoid adding training-log screenshots unless redacted.

### Study Takeaways

Suggested title: `IMPSY study takeaways`

Suggested description: `What the honours evaluation suggested about visibility, learning curve, and creative control`

Opening draft:

```markdown
I evaluated the interface through a small exploratory honours study. The goal was not
to prove that the system solved musical AI interaction. It was to understand how
people made sense of the workflow, where visual feedback helped, and where the
learning curve stayed visible.

This page only summarises public-safe takeaways. It does not include raw participant
quotes, identifying details, consent material, interview material, or study documents.
```

Section: `What the session involved`

```markdown
Five participants used the system in a structured session. They were introduced to the
interface and controller, explored the system through improvisation, worked with model
behaviour, and then completed post-session feedback.

For the website, the important detail is the shape of the task: people had to move
through both musical interaction and machine-learning workflow steps. That is exactly
where interface visibility matters.
```

Section: `What seemed to help`

```markdown
The clearest strength was real-time feedback. Visualisation helped people see when the
system was receiving input and when the AI was responding.

The browser workflow also made the prototype less intimidating than a purely technical
machine-learning tool. Views for performance, logs, models, and configuration gave the
system a more understandable shape, even though the underlying model behaviour was
still complex.
```

Section: `What was still hard`

```markdown
Training and expectation-setting remained difficult. A model trained quickly from a
small amount of performance data may not produce the response a user imagines. That
can make the AI feel unpredictable even when the interface is accurately showing what
is happening.

This was one of the most useful lessons from the project: transparency helps, but it
does not remove the learning curve. A better interface should help users understand
the relationship between their data and the AI's response instead of hiding it.
```

Optional small metric note:

```markdown
The thesis and NIME paper report a System Usability Scale mean of 62.50. I would use
that as a design signal, not as a headline. It says the interface had useful
direction, but still needed stronger onboarding and learnability.
```

Section: `What I would improve next`

```markdown
The next version should make onboarding clearer, explain the data-to-model
relationship more directly, support useful presets or pretrained starting points, and
make MIDI mapping easier to understand. I would also make the visual feedback more
explicit about what the model knows, what it is doing, and why a response may sound
the way it does.
```

Study notes for Agent 4:

- Reuse the public-safety disclaimer at `_pages/impsy-interface-study.md:20-25`.
- Keep the qualitative takeaway structure from `_pages/impsy-interface-study.md:36-78`.
- Demote the SUS metric at `_pages/impsy-interface-study.md:55-58` to an optional
  note, or remove it if Kevin wants a less academic study page.
- Do not add participant photos, raw quotes, qualitative coding screenshots, consent
  forms, recruitment material, or raw study files.

### Gallery

Suggested title: `IMPSY gallery`

Suggested description: `Selected process and system visuals from the IMPSY honours project`

Opening draft:

```markdown
This gallery collects public-safe visuals from the IMPSY honours project and later
NIME materials. I want it to show more than the polished final interface: the old
workflow, early design thinking, prototype structure, system architecture, and final
performance setup.
```

Recommended grouping:

#### Process

1. `assets/img/impsy-old-workflow-home.jpg`
   - Caption: `The previous IMPSY workflow exposed important system pieces, but the redesign needed to make the creative loop easier to follow.`
   - Use only after final crop/redaction check.
2. `assets/img/impsy-wireframe-sketch.jpg`
   - Caption: `The early sketch explored how performance, logs, training, models, and configuration could become one connected workflow.`
3. `assets/img/impsy-figma-prototype-flow.jpg`
   - Caption: `The Figma prototype turned the rough workflow into connected screens before implementation.`
4. Optional `assets/img/impsy-user-story-beginner.png`
   - Caption: `The story maps were design tools for checking how different users might enter the system.`

#### System

1. `assets/img/impsy-dataflow.png`
   - Caption: `The dataflow diagram shows how MIDI hardware, the Python backend, logs, models, browser visualisation, and real-time communication fit together.`
2. `assets/img/impsy-interaction-flow.jpg`
   - Caption: `The interaction flow shows how setup, performance, logs, training, models, and configuration connect in use.`
3. `assets/img/impsy-improvisation-visualisation.jpg`
   - Caption: `The improvisation view separates performer input from AI output so the call-and-response exchange is visible.`
4. `assets/img/impsy-configuration.jpg`
   - Caption: `Configuration remains in the browser workflow so setup decisions stay close to performance.`

#### Context

1. `assets/img/impsy-web-interface-teaser.jpg`
   - Caption: `The final interface running beside MIDI hardware, showing the project as both a design and performance system.`
2. `assets/img/impsy-minilab-controller.jpg`
   - Caption: `The compact controller setup reflects the small-studio context used for testing and demonstration.`

Gallery notes for Agent 4:

- Replace the current gallery's final-only emphasis at `_pages/impsy-interface-gallery.md:15-27`.
- Add headings or short sections so visitors can scan process, system, and context.
- Keep the existing NIME/site assets, but add the thesis process visuals once copied.
- Do not include raw participant material, study posters, quote/coding images, or log/model screenshots with readable filenames.

### Resources

Suggested title: `IMPSY resources`

Suggested description: `Public links and release decisions for the IMPSY honours project and NIME paper`

Opening draft:

```markdown
This page collects the public materials for the IMPSY web interface project. The
project began as my COMP4550 honours work at ANU and later became a NIME 2026 paper.
Some thesis-era materials are not linked here because they include private study
context or still need a public-release decision.
```

Section: `Project context`

```markdown
- Project: IMPSY Web Interface
- Original context: COMP4550 honours project at ANU
- Focus: a browser interface for making musical AI performance, logs, training,
  models, and configuration easier to understand

The honours thesis is used as the source for the website story, but the thesis PDF is
not linked unless Kevin approves a public release.
```

Section: `Publication`

```markdown
**A Web Interface for Real-Time Interaction with Machine Learning in Musical
Performance**  
Hongzhe Zhu and Charles Martin, NIME 2026, June 23-26, 2026, London and online.

- [Official NIME proceedings page](https://nime2026.org/proceedings/196.html)
- [Official NIME PDF](https://nime.org/proceedings/2026/nime2026_102.pdf)
- [Local final paper PDF](/assets/pdf/impsy-nime-2026-paper.pdf)
```

Section: `Code`

```markdown
- [Upstream IMPSY repository](https://github.com/cpmpercussion/impsy)

I am linking the upstream IMPSY repository because it is the confirmed public code
source. A separate thesis/web-interface repository should only be linked after Kevin
verifies that it is public-safe and is the right repository to show.
```

Section: `Website assets`

List assets actually used after implementation. Do not list planned assets until they
have been copied.

Section: `Pending public decisions`

```markdown
- Whether to publish or link the honours thesis PDF.
- Whether to link Kevin's thesis/web-interface repository.
- Whether to host a poster, talk video, or demo video.
- Whether to show the SUS mean on the public study page.
```

Resources notes for Agent 4:

- Replace the `## Paper`-first structure at `_pages/impsy-interface-resources.md:17-25`.
- Keep official NIME links and local PDF link, but place them after project context.
- Keep the upstream repo note at `_pages/impsy-interface-resources.md:27-33`.
- Keep the pending-public-materials structure at `_pages/impsy-interface-resources.md:47-55`.

## Current Content To Remove, Reuse, Or Demote

| Current file reference                      | Action                          | Reason                                                                                                                                   |
| ------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `_projects/2_project.md:13-21`              | Reuse with small expansion      | Strong thesis-first problem framing. Add explicit "COMP4550 honours project" earlier.                                                    |
| `_projects/2_project.md:23-27`              | Demote                          | Correct public fact, but it currently appears before the project has fully established the thesis story. Move to "Later public outcome". |
| `_projects/2_project.md:31-41`              | Replace                         | Current order leads with NIME links. Internal project pages should come first; publication links should live mainly on resources.        |
| `_projects/2_project.md:43-61`              | Reuse                           | Good plain-language explanation of what the interface does and why visual feedback matters.                                              |
| `_projects/2_project.md:63-73`              | Reuse                           | Good personal contribution framing. Keep close to hub.                                                                                   |
| `_projects/2_project.md:75-88`              | Reuse                           | Good "why it mattered" framing. It supports the thesis-first story.                                                                      |
| `_projects/2_project.md:90-103`             | Reuse and shorten               | Useful learning reflection, but avoid making the hub too long once study page carries detail.                                            |
| `_projects/2_project.md:105-117`            | Reuse after reordering          | Keep as "Explore the project", with resources last.                                                                                      |
| `_pages/impsy-interface-process.md:5`       | Replace                         | Description frames the page as moving toward a public NIME paper. It should frame the honours design process.                            |
| `_pages/impsy-interface-process.md:15-39`   | Reuse                           | Good practical workflow and progressive-disclosure framing.                                                                              |
| `_pages/impsy-interface-process.md:41-55`   | Reuse and expand                | Good prototype framing, but needs sketch/Figma/process visuals rather than only configuration.                                           |
| `_pages/impsy-interface-process.md:57-68`   | Reuse                           | Clear design goals. Keep and maybe make them the page's anchor.                                                                          |
| `_pages/impsy-interface-process.md:70-81`   | Demote                          | Keep a short version after process material. Do not make NIME the destination of the page.                                               |
| `_pages/impsy-interface-system.md:15-84`    | Reuse with additions            | Walkthrough is already close. Add clearer configuration and interaction-flow asset placement.                                            |
| `_pages/impsy-interface-study.md:15-25`     | Reuse                           | Good public-safe framing and disclaimer.                                                                                                 |
| `_pages/impsy-interface-study.md:27-48`     | Reuse                           | Good study question and "what helped" framing.                                                                                           |
| `_pages/impsy-interface-study.md:55-58`     | Demote or remove                | SUS metric is source-backed but too paper-like as a main paragraph. Use as an optional note.                                             |
| `_pages/impsy-interface-study.md:65-78`     | Reuse                           | Good personal reflection and future-work direction.                                                                                      |
| `_pages/impsy-interface-gallery.md:15-27`   | Replace structure, reuse assets | Existing assets are useful, but the page needs process/system/context grouping and thesis process visuals.                               |
| `_pages/impsy-interface-resources.md:15-25` | Replace order                   | Resources should start with project context, not paper. Keep publication details below.                                                  |
| `_pages/impsy-interface-resources.md:27-33` | Reuse                           | Clear and cautious code-link policy.                                                                                                     |
| `_pages/impsy-interface-resources.md:35-45` | Update after implementation     | Asset list must match copied/used assets.                                                                                                |
| `_pages/impsy-interface-resources.md:47-55` | Reuse and expand                | Pending decisions are useful and should stay visible.                                                                                    |

## Asset Placement And Captions

| Asset                                                 | Page placement                                        | Caption                                                                                                                                   |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `assets/img/impsy-web-interface-teaser.jpg`           | Hub hero; gallery context                             | `The project began as my honours interface for making IMPSY's performance, training, model, and configuration workflow easier to follow.` |
| `assets/img/impsy-improvisation-visualisation.jpg`    | Hub "What I built"; system step 2; gallery system     | `The live view separates performer input from AI output so the call-and-response interaction is visible while it happens.`                |
| `assets/img/impsy-configuration.jpg`                  | System configuration step; gallery system             | `Configuration stays visible in the browser workflow so setup decisions remain connected to performance.`                                 |
| `assets/img/impsy-dataflow.png`                       | System walkthrough; gallery system                    | `The system links MIDI hardware, the Python backend, logs, models, browser visualisation, and real-time communication.`                   |
| `assets/img/impsy-minilab-controller.jpg`             | System connect/play step; gallery context             | `The compact controller setup reflects the small-studio context used for testing and demonstration.`                                      |
| `assets/img/impsy-old-workflow-home.jpg`              | Design process "old workflow"; gallery process        | `The previous IMPSY workflow exposed important system pieces, but the redesign needed to make the creative loop easier to follow.`        |
| `assets/img/impsy-wireframe-sketch.jpg`               | Design process sketch section; gallery process        | `The early sketch explored how performance, logs, training, models, and configuration could become one connected workflow.`               |
| `assets/img/impsy-figma-prototype-flow.jpg`           | Design process prototype section; gallery process     | `The Figma prototype turned the rough workflow into connected screens before implementation.`                                             |
| `assets/img/impsy-interaction-flow.jpg`               | System walkthrough after dataflow; gallery system     | `The interaction flow shows how setup, performance, logs, training, models, and configuration connect in use.`                            |
| Optional `assets/img/impsy-user-story-beginner.png`   | Design process, after personas/user stories           | `The story maps were design tools for checking how different users might enter the system.`                                               |
| Optional `assets/img/impsy-design-double-diamond.png` | Design process intro if layout needs a process anchor | `The thesis used a design-process structure to move from workflow research into prototyping and implementation.`                          |

Asset cautions:

- Do not copy new assets in this pass.
- Final implementation should copy only the asset-curator-approved subset.
- `impsy-old-workflow-home.jpg` and `impsy-interaction-flow.jpg` need a final
  zoom-level privacy/readability check.
- Do not publish screenshots showing raw `.log`, `.npz`, `.keras`, `.tflite`, `.h5`,
  or timestamped filenames.
- Do not publish study participant photos, consent material, recruitment material,
  qualitative coding images, feedback PDFs, or raw quotes.

## Open Decisions For Kevin

| Decision                                                  | Recommended default                                | Why it matters                                                                                   |
| --------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Should the honours thesis PDF be linked publicly?         | No for this implementation pass.                   | It may include or point to study material that needs a separate privacy review.                  |
| Should Kevin's thesis/web-interface repository be linked? | Wait until Kevin verifies the exact public repo.   | The source map notes a possible repo, but the harness only confirms upstream IMPSY.              |
| Should the study page show the SUS mean?                  | Optional, but demoted.                             | It is valid, but it can make the page feel more like a paper than a personal project record.     |
| Should the old IMPSY home screenshot be cropped/redacted? | Yes, final crop/redaction check before publishing. | It helps the before/after story, but older UI screenshots can expose project metadata.           |
| Should the user-story map be included?                    | Optional.                                          | It supports process, but may be text-heavy and less immediately useful than sketch/Figma assets. |
| Should the Double Diamond diagram be included?            | Optional.                                          | It is safe, but generic. Use only if the process page needs a simple visual anchor.              |
| Should a poster or video be hosted?                       | Not yet.                                           | Release status, size, and public-safety status need explicit approval.                           |
| Should the resources page keep a local NIME PDF link?     | Yes, but below official links and project context. | Useful backup, but it should not make the paper feel like the whole project.                     |

## Implementation Checklist For Agent 4

1. Update only the IMPSY website pages and approved assets; do not modify output
   reports unless the manager asks.
2. Preserve existing routes:
   - `/projects/impsy-interface/`
   - `/projects/impsy-interface/process/`
   - `/projects/impsy-interface/system/`
   - `/projects/impsy-interface/study/`
   - `/projects/impsy-interface/gallery/`
   - `/projects/impsy-interface/resources/`
3. Copy only approved assets from `output/impsy-thesis-asset-curation.md` after final
   visual safety checks.
4. Rewrite the hub so it starts with the COMP4550 honours project and interface
   problem, not NIME.
5. Reorder hub links so internal story pages come before publication/resource links.
6. Expand the design process page with old workflow, user story, sketch, and Figma
   prototype material.
7. Keep the system page as a user journey: connect/play, AI response, inspect logs,
   train/select model, configure, return to performance.
8. Keep the study page public-safe and reflective. Do not include raw participant
   quotes or private study details.
9. Rebuild the gallery around process, system, and context groups.
10. Rework resources so it starts with project context, then publication, code,
    website assets, and pending decisions.
11. Run the asset/text private-material scans listed in
    `output/impsy-thesis-asset-curation.md`.
12. Run targeted Prettier on changed IMPSY pages/assets only if repo-wide formatting is
    noisy.
13. Run `bundle exec jekyll build` as the fallback build check if Docker is not
    available.
14. Browser-check the six IMPSY routes on desktop and mobile widths.
15. Confirm that the NIME paper is visible but no longer the main narrative.
