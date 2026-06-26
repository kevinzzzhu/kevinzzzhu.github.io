---
layout: page
title: INSULAiRE Official Website
description: a brand e-commerce site built for a web authoring course
img: /assets/img/comp1710-web-project-teaser.png
importance: 7
category: coursework
related_publications: false
last_edited: 2026-06-25
---

COMP1710, Semester 6, 2024, ANU. The brief: pick a personal "passion topic" and build
a full multi-page site around it from scratch — HTML, CSS, vanilla JavaScript only, no
frameworks. I picked INSULAiRE, a small costume/clothing brand I was already doing
front-end work for, and built out a fictionalised "official" brand presence around it
rather than a generic template site: home, culture, craftsmanship, collection, and shop
pages, a product detail view, cart, feedback form, and sitemap.

{% include figure.liquid path="/assets/img/comp1710-web-project-teaser.png" alt="The INSULAiRE Official homepage showing the navigation menu and an image grid moodboard" caption="The homepage moodboard mixes brand photography with an SS24 lookbook tease and a bilingual (English/Chinese) brand statement." %}

Structurally, the site is a set of static pages sharing two components — `menu.html`
and `footer.html` — injected into every page through a small JavaScript loader
(`load-menu-footer.js`) instead of being copy-pasted seven times. Each section gets its
own page and its own stylesheet rather than one global CSS file, which is what let the
shop, culture, and craftsmanship pages develop distinct visual identities without
fighting a shared set of rules. On top of that: a light/dark theme toggle, a feedback
form, and a sitemap, since the brief wanted evidence of site structure beyond a single
landing page.

The one place the build actually went sideways: the homepage's image-grid moodboard was
built desktop-first, and broke under narrow viewports in a way that wasn't a quick fix
— rebuilding it in Flexbox after the fact cost more time than starting mobile-first
would have. That ordering mistake (layout logic before breakpoints, not the other way
round) is the one piece of this project I'd actually do differently if I started over;
the component-loader pattern for menu and footer, on the other hand, is something I'd
happily reuse as-is.

**Code:** [github.com/kevinzzzhu/comp1710-2024-insulaire](https://github.com/kevinzzzhu/comp1710-2024-insulaire)
