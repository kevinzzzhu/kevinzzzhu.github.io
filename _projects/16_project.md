---
layout: page
title: Android marketplace app (COMP2100 group project)
description: a studio-style team build of a secondhand apple goods marketplace
img: /assets/img/comp2100-microchat-teaser.jpg
importance: 14
category: coursework
related_publications: false
last_edited: 2026-06-25
---

This was my group project for **COMP2100 (Software Engineering Studio), Semester 3,
2022** at ANU. A team of four of us built an Android app for buying and selling
secondhand Apple products: iPhones, iPads, and MacBooks. Users could browse and search
listings, filter by condition or specs, add items to a wishlist, check out with a
mocked payment flow, and view past orders from a profile screen. The catalogue and
order data sat on simple data-structure stores (a binary search tree and an AVL tree)
rather than a real backend, since the unit cared about process as much as the app.

{% include figure.liquid path="/assets/img/comp2100-microchat-teaser.jpg" alt="Team UML class diagram for the marketplace app" caption="The team's UML class diagram, sketching out the model, data-access, and UI layers before implementation." %}

## How we worked

COMP2100 ran as a studio: rather than a single hand-in, we worked in a shared GitLab
repository across the semester with regular stand-up-style team meetings, a rotating
scribe, and short task breakdowns after each session. We kept meeting minutes for every
session, tracked a checklist of requirements (statement of originality, conflict
resolution protocol, working APK, report), and reviewed each other's branches before
merging. It was a small taste of agile practice rather than a full sprint framework,
but the discipline of recording decisions and splitting work by feature was the same
idea.

My own piece was the UI and interaction layer: the home, cart, and wishlist fragments,
the recycler view adapters feeding listings and purchase history into the screens, and
the login/item-detail/checkout activities. The technical side of that was
straightforward — recycler views and fragments are well-trodden ground. Coordinating
four people's assumptions about what "done" meant for a shared feature was not: most of
our friction traced back to not agreeing on data models early enough, so late changes
rippled through several fragments at once, surfacing as merge conflicts well after the
fact rather than as a clean disagreement up front.

A separate COMP2100/6442 deliverable existed too: a short solo Android demo app built
to record a walkthrough video for an earlier assignment, too minor to list separately.

**Code:** [github.com/kevinzzzhu/comp2100-2022-microchat](https://github.com/kevinzzzhu/comp2100-2022-microchat)
