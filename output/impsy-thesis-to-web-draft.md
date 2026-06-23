---
created: 2026-06-23
last_edited: 2026-06-23
tags:
  - impsy
  - thesis-to-web
  - content-draft
---

# IMPSY Thesis-To-Web Content Draft

This draft translates the COMP4550 thesis material and the NIME 2026 paper source into
public-facing website copy. It is not an implementation plan for Jekyll files and does
not assume the thesis PDF should be published.

Source basis checked for this draft:

- `output/impsy-project-page-harness.md`
- `.../COMP4550/COMP4550-Kevin Zhu/1-introduction.tex`
- `.../COMP4550/COMP4550-Kevin Zhu/3-requirementAnalysis.tex`
- `.../COMP4550/COMP4550-Kevin Zhu/4-systemDesign.tex`
- `.../COMP4550/COMP4550-Kevin Zhu/5-caseStudy.tex`
- `.../COMP4550/COMP4550-Kevin Zhu/6-concludingRemarks.tex`
- `.../NIME-2026/IMPSY_Web_Interface_NIME_2026/nime-paper.tex`

## Recommended Page Map

| Page               | Purpose                                                                                                            | Main source material                                                                                   | Public note                                                                               |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Main project hub   | Give a fast, personal overview of the project, current NIME 2026 status, and links to deeper pages.                | Thesis introduction, NIME abstract/introduction, final reflection.                                     | Keep it readable for musicians, HCI students, and potential supervisors.                  |
| Design process     | Show how the interface took shape from old workflow problems, personas, sketches, Figma prototypes, and iteration. | Thesis requirement analysis, Double Diamond process, old interface feedback, user stories, prototypes. | Avoid turning personas into private participant claims. Treat them as design tools.       |
| System walkthrough | Explain what the system does and how the frontend, backend, logs, models, and live visualisation fit together.     | Thesis system architecture, NIME system design, dataflow figures.                                      | Keep code-level detail shallow unless it explains user experience.                        |
| User study         | Explain what was tested, what participants did, and what was learned without publishing raw data.                  | Thesis case study, NIME evaluation, conclusion.                                                        | No raw quotes, participant-identifying details, consent material, or interview artifacts. |
| Gallery            | Let visitors inspect a small set of interface and study visuals quickly.                                           | NIME images, thesis screenshots, selected public-safe figures.                                         | Use a curated set, not every screenshot.                                                  |
| Resources          | Collect public outputs and project links.                                                                          | NIME paper source, proceedings link, poster/video candidates, upstream IMPSY repo.                     | Thesis link only if Kevin explicitly approves public release.                             |

## Page 1: Main Project Hub

### Purpose

The hub should answer: what is IMPSY, why did I build a web interface for it, and
where should a reader go next?

### Draft Copy

# IMPSY Web Interface

IMPSY is a musical AI system for real-time call-and-response performance. My honours
project focused on a web interface for making that interaction easier to see,
understand, and shape.

The problem I kept coming back to was simple: musical AI can be powerful, but it can
also feel like a black box. If a performer cannot tell what the system heard, what it
recorded, what data shaped the model, or when the AI is responding, it is hard to
build trust in the instrument.

This project explored how interface design and real-time visualisation could make the
IMPSY workflow more transparent. The interface brings together performance logging,
dataset curation, model training or selection, configuration, and live improvisation
inside a browser-based workflow.

In performance, the system shows both sides of the exchange. The performer input is
visualised as it happens, and the AI output is shown separately so the user can tell
when the system is listening and when it is replying. The goal is not to make the AI
perfect. The goal is to make the interaction more understandable, so the musician can
make better creative decisions.

The work continued into a NIME 2026 paper with Charles Patrick Martin:
**A Web Interface for Real-Time Interaction with Machine Learning in Musical
Performance**.

### What The System Does

IMPSY supports a loop that is common in interactive machine learning for music:

- play with a controller and record performance data
- inspect the recorded logs
- choose data for training
- train or select an MDRNN-based model
- return to live performance and hear how the model responds
- use visual feedback to understand what is happening during the exchange

The web interface sits on top of a Python IMPSY backend. React handles the interaction
views, D3.js supports log and model visualisation, and real-time communication keeps
the frontend connected to the musical system.

### What I Was Trying To Learn

I wanted to know whether visualising the learning and performance process could help
musicians work with the AI as a more intelligible partner.

The study results suggest that visual feedback helped people understand the system's
state and follow the human-AI exchange. They also pointed to a real limitation: model
training still has a learning curve, especially when users have little experience with
machine learning or when their training data is sparse.

That tension became the useful lesson from the project. Interface transparency cannot
fix weak training data by itself, but it can help users see what the system is doing,
why the output may feel unexpected, and how their own data choices shape the musical
response.

### Suggested Hub Links

- Design process: how the interface moved from old workflow pain points to prototypes
  and implementation.
- System walkthrough: what happens across the frontend, backend, logs, models, and
  live performance view.
- User study: what the exploratory study suggested about visual feedback, trust, and
  learnability.
- Gallery: selected screenshots and diagrams.
- Resources: paper, poster, talk, and code links after public-safety checks.

## Page 2: Design Process

### Purpose

This page should make the design story readable. It should show that the interface was
not just a skin over a model; it was a response to concrete user-experience problems
in musical AI workflows.

### Draft Copy

# Designing A More Understandable Musical AI Interface

The interface started from a practical gap in the original IMPSY workflow. The machine
learning system could record performances, train models, and generate musical
responses, but the work of moving between those steps was still technical and
fragmented.

For a researcher, that might be manageable. For a musician trying to stay in a
creative flow, it creates friction. You have to understand what is running, what data
has been recorded, which model is active, and whether the AI is reacting to you or
doing something unexpected.

I used a human-centred design process to turn those problems into interface goals. The
early design work followed a Double Diamond structure: understand the problem, define
the key needs, explore possible interface structures, and then narrow the design into a
working system.

## Starting From Different Users

The thesis design work used personas and user stories to keep different kinds of users
in view:

- a beginner who wants a low-pressure way to start making sound with AI
- a musician who wants to practise, save sessions, and shape the AI toward their style
- a technical creator who wants deeper control over models, configuration, and data

These were not final user categories. They were design tools. They helped keep the
interface from serving only one imagined expert user.

The resulting design direction was progressive disclosure. Basic jamming and clear
feedback should be available quickly. Deeper controls, such as model settings and MIDI
configuration, should still exist, but they should not block a new user from starting.

## From Old Workflow To Prototype

The old workflow exposed a recurring issue: users could struggle to connect their
actions with the AI's output. Running the server, selecting data, training a model, and
understanding the response could feel like separate activities.

The redesign tried to make those connections visible. Early paper sketches explored
the main screens and navigation. Figma prototypes then tested how a user might move
from project setup to improvisation, log review, model training, and configuration.

The design question was not only "what buttons should exist?" It was "how can the
interface show the relationship between data, model, and musical response?"

## Design Goals

The design settled around four goals:

- make the system approachable without hiding important complexity
- show immediate feedback during live interaction
- make logs and training data inspectable after performance
- keep advanced controls available for people who need them

This led to separate but connected views: a home/project area, a performance view, a
log visualisation area, a training flow, model views, and configuration panels.

## Thesis To Paper Transition

The honours thesis gives the fuller design process: early requirements, personas,
wireframes, prototype feedback, and implementation details.

The later NIME paper sharpens the public research framing. It focuses more directly on
real-time interaction, transparency, and the role of visualisation in musical
performance with machine learning.

For the website, the best approach is to combine both: use the thesis to tell the
process story, and use the NIME paper to keep the public claims current and careful.

## Page 3: System Walkthrough

### Purpose

This page should explain the tool in plain language before introducing technical
terms. Readers should come away understanding the workflow and why each part matters.

### Draft Copy

# How The IMPSY Web Interface Works

The IMPSY web interface connects a browser-based control surface to a Python musical AI
backend. The browser gives the performer a place to manage projects, inspect data,
train or select models, and perform with the AI. The backend handles the model, MIDI
communication, logging, and timing-sensitive musical response.

The important idea is that the interface follows the whole machine-learning music
loop, not just the final performance moment.

## 1. Play And Record

A performer plays using a MIDI controller. The system records the interaction as a log
so it can be inspected later or reused as training data.

During performance, the interface shows live input values. This gives the performer a
basic check that the system is receiving what they are doing.

## 2. See The AI Respond

IMPSY can run in interaction modes such as call-and-response. In that mode, the system
listens while the performer plays, then generates a response when the performer pauses.

The interface separates the human and AI sides visually. Input and output can be shown
as direct value displays, while the background visualisation gives a more ambient view
of the exchange. Cooler colours can represent user input, while warmer colours can
represent AI output.

This matters because it makes agency visible. The performer can tell when they are
driving the sound and when the model is contributing.

## 3. Inspect Logs

After playing, the user can inspect recorded logs. This is where the interface starts
to connect performance with data.

Instead of treating a log as a hidden file, the interface can show performance data
over time and across multiple control dimensions. These views help users decide which
recordings are useful for training a model.

## 4. Build A Dataset And Train

The user can select logs and use them as training material. Training is still a
technical step, but the interface can make it more visible by showing progress and
metrics rather than leaving it as a terminal-only process.

This is one of the key public points of the project: the system does not just show the
AI's final output. It also shows the path from the user's data to the model that later
responds in performance.

## 5. Return To Performance

Once a model is selected or trained, the performer can return to the improvisation
view. The loop starts again: play, listen, inspect, train, and refine.

That loop is where the interface becomes part of the instrument. It gives users a way
to understand and shape the AI through repeated creative use.

## Technical Snapshot

The interface uses React for the browser views and D3.js for data visualisation. The
backend is Python-based and uses the IMPSY core with mixture density recurrent neural
network models. MIDI handles musical control messages, WebSockets support real-time
interface updates, and REST-style endpoints support configuration and non-real-time
tasks.

For public copy, keep that technical description short. The core reader-facing story is
the workflow: record, inspect, train, perform, and understand.

## Page 4: User Study

### Purpose

This page should explain the study without exposing participant material. It should
show what the evaluation asked, what participants did, and what the main takeaways
were.

### Draft Copy

# What The User Study Suggested

I evaluated the interface through a small exploratory user study. The goal was not to
prove that the system solved musical AI interaction. It was to understand how people
made sense of the interface, where the workflow helped, and where the learning curve
remained.

Five participants used the system in a short structured session. They were introduced
to the interface and controller, explored the system through self-driven
improvisation, trained or used a personalised model, and then completed a usability
survey and interview.

The setup used a laptop running the IMPSY web interface and an Arturia MiniLab 3
keyboard controller. This kept the hardware close to a small home-studio setup rather
than a large lab installation.

## What Worked

The clearest strength was real-time feedback. Participants generally found the visual
feedback useful for understanding when the system was receiving input and when the AI
was responding.

The visual design also helped make the prototype feel less intimidating than a purely
technical machine-learning tool. A clean web interface gave users familiar entry points
for a system that still had complex behaviour underneath.

The study suggests that transparency can support creative agency. When people can see
more of the system state, they have more material for deciding what to try next.

## What Was Still Hard

Training a musical AI model is still conceptually demanding. The interface can make the
workflow clearer, but it does not remove the need to understand that the model is
shaped by the data it sees.

The System Usability Scale result in the NIME paper was a mean of 62.50 with a
standard deviation of 11.9. That sits in a marginal-to-OK range and should be read as a
signal for further design work, not as a final judgement on the system.

The study also suggested a mismatch between some users' expectations and what a small,
quickly trained model could produce. In a short session, users may not create enough
structured data for the model to generate satisfying musical responses. This can make
the AI feel unpredictable even when the interface itself is doing its job.

## What I Took From It

The useful lesson is that transparency matters, but it has limits.

Visual feedback can help users understand what the system is doing. Log views can help
connect performance data to later model behaviour. Clearer configuration can reduce
friction.

But interface design cannot fully compensate for sparse or unclear training data. A
better interface should help users learn that relationship rather than pretend it does
not exist.

Future versions could support beginners with clearer onboarding, preset models, better
MIDI mapping, and more explicit explanations of how data choices affect the AI's
response.

## Page 5: Gallery

### Purpose

The gallery should be quick to scan. It should use selected visuals with captions that
explain what the reader is seeing and why it matters.

### Draft Copy

# Gallery

This gallery collects selected visuals from the IMPSY web interface and the NIME 2026
paper materials. The goal is to show the project workflow at a glance rather than
repeat the full thesis.

## Suggested Gallery Items

### Main Interface Overview

Show the main web interface as the first image.

Caption draft: "The IMPSY web interface brings performance, logs, models, training, and
configuration into a browser-based workflow."

### Live Improvisation View

Show the performance screen with input/output visualisation.

Caption draft: "During improvisation, the interface separates performer input from AI
output so the human-AI exchange is visible while it happens."

### Training View

Show the training screen or training-finished screen.

Caption draft: "Training is shown as part of the creative workflow, not hidden as a
background terminal process."

### Log Visualisation

Show the combined log visualisation from the thesis source.

Caption draft: "Recorded performance logs can be inspected visually before they are
used as model training material."

### System Dataflow

Show the dataflow diagram from the NIME paper or thesis.

Caption draft: "MIDI, backend model logic, WebSockets, and frontend visualisation work
together to keep performance and feedback connected."

### Study Setup

Show the keyboard/laptop setup only if the asset curation pass confirms it is
public-safe and non-identifying.

Caption draft: "The exploratory study used a compact controller-and-laptop setup,
close to a small home-studio environment."

## Page 6: Resources

### Purpose

This page should collect stable public links after verification. It should also make
clear which materials are not yet public.

### Draft Copy

# Resources

This page collects public materials for the IMPSY web interface project.

## Paper

**A Web Interface for Real-Time Interaction with Machine Learning in Musical
Performance**  
Hongzhe Kevin Zhu and Charles Patrick Martin, NIME 2026.

Add the official NIME proceedings link after live verification:

- Official NIME paper page: `https://nime2026.org/proceedings/196.html`

## Code

The web interface builds on IMPSY:

- Upstream IMPSY repository: `https://github.com/cpmpercussion/impsy`

Before publishing, verify whether there is a separate public repository for the web
interface itself. If not, link only the upstream IMPSY repository.

## Presentation Materials

Potential resources, pending public-safety and hosting decisions:

- paper PDF
- poster PDF
- lightning talk video

Do not host the video locally until file size, loading behaviour, and public-release
status are checked.

## Thesis

The honours thesis is an internal source for this website draft. Do not link or publish
the thesis PDF unless Kevin explicitly approves it for public release.

If approved later, add a short note like:

"This project began as my COMP4550 honours thesis at ANU and later developed into the
NIME 2026 paper."

## Suggested Image And Caption Pairings

| Image candidate                      | Proposed use                                      | Caption                                                                                                                |
| ------------------------------------ | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `zhu-web-interface-1000.jpg`         | Main project hub teaser.                          | "Overview of the IMPSY web interface for live interaction with a musical AI model."                                    |
| `new-impsy-improvisation.jpg`        | Hub preview, system walkthrough, gallery.         | "The improvisation view shows performer input and AI output during real-time call-and-response interaction."           |
| `new-impsy-finish-training.png`      | System walkthrough or gallery.                    | "Training feedback makes the model-building step visible inside the web workflow."                                     |
| `configuration.jpg`                  | User study page, if confirmed non-identifying.    | "The study setup used a laptop and compact MIDI controller to approximate a small studio workflow."                    |
| `minilab3.jpg`                       | User study/gallery, if confirmed non-identifying. | "A compact MIDI controller provided a simple input setup for testing the interface."                                   |
| `dataflow.png`                       | System walkthrough.                               | "The system links MIDI hardware, the Python IMPSY backend, and browser visualisation through real-time communication." |
| `interaction-flow.jpg`               | Design process or system walkthrough.             | "The interface flow connects improvisation, logs, model training, project configuration, and help pages."              |
| `new-impsy-logvis-combined.png`      | Design process, system walkthrough, gallery.      | "Log visualisation helps users inspect recorded performance data before selecting it for training."                    |
| `new-impsy-project-config-impro.png` | System walkthrough.                               | "Configuration remains available from the project view so users can adjust the performance setup."                     |
| `draw-wireframe.jpg`                 | Design process.                                   | "Early sketches explored the screen structure before the interface moved into Figma and implementation."               |
| `figma-prototype.jpg`                | Design process.                                   | "The Figma prototype tested the navigation and interaction flow before the working React interface."                   |

Asset curation should reject or avoid:

- consent form images
- participant recruitment posters unless Kevin explicitly approves them
- participant-facing documents
- raw interview/thematic-analysis screenshots containing quotes
- images that reveal participant identity or private study details

## Claims That Need Source Verification Before Implementation

- Official NIME proceedings page details: final URL, title, author names as displayed,
  session type, presentation format, and any hosted PDF links.
- Whether the paper PDF and poster PDF are public and safe to host locally.
- Whether the lightning talk MP4 should be hosted locally, linked externally, or kept
  private.
- Whether there is a public web-interface repository separate from the upstream IMPSY
  repository.
- Whether the honours thesis PDF can be linked or hosted publicly.
- Whether study setup images contain no identifying details and are approved for public
  website use.
- Whether the exact conference phrasing should be "NIME 2026, London, UK" or "hybrid
  London/online" on the final website.
- Whether to mention the ethics protocol publicly. Default recommendation: omit it
  unless needed for a formal research page.
- Whether the SUS mean should appear on the public page. Default recommendation:
  mention it only on the user-study page, with context and soft interpretation.
- Whether the interface currently supports every interaction mode described in the
  thesis/NIME paper in the public build. Avoid listing modes as live features until
  checked against the actual current code.
- Whether colour mappings in the final visuals match the described user/AI colour
  scheme. Check the selected screenshots before writing precise colour claims.

## Material To Keep Out Of Public Pages

- Raw participant quotes.
- Participant IDs linked to backgrounds, scores, or study details.
- Interview recordings, transcripts, extracted quote sheets, coding tables, and
  thematic-analysis screenshots that expose participant wording.
- Consent forms, participant information sheets, ethics applications, recruitment
  forms, and internal study administration files.
- The thesis PDF unless Kevin approves public release.
- CMT reviews, meta-reviews, anonymous submission files, reviewer correspondence, and
  private publication process notes.
- Private supervisor notes, planning notes, or local working files.
- Full participant tables unless rewritten into a high-level, non-identifying summary.
- Over-precise claims that the study "proved" transparency, trust, or creative agency.
  Use "suggests", "helped", "supported", or "pointed to".
- Code dumps or detailed implementation minutiae that do not help a public reader
  understand the project.
- Large video files unless hosting has been checked for repo size and page performance.

## Implementation Tone Notes

Use first person sparingly but naturally on the hub and process pages. The site should
sound like Kevin explaining a project he built, not like a compressed thesis abstract.

Prefer:

- "I built this interface to make the AI workflow easier to see."
- "The study suggested that visual feedback helped users follow the exchange."
- "The hard part was not just showing the model output, but helping users understand
  how their data shaped it."

Avoid:

- "This research proves that transparent AI enables musical agency."
- "The system democratizes human-AI collaboration."
- "Participants universally trusted the AI."
- "The interface solves the black-box problem."

The strongest public story is practical and specific: IMPSY already had powerful
musical AI behaviour, and this project explored how a web interface could make the
performance, data, model, and feedback loop easier to understand.
