---
layout: page
permalink: /projects/picknplay-wireframe/
title: PickNPlay · Interactive Wireframe
description: Full flow of the PickNPlay mobile app — click any phase to zoom in.
nav: false
hide_cycle_nav: true
hide_header: true
fullscreen_layout: true
---

{% assign data = site.data.picknplay_wireframe %}

{% assign total = 0 %}
{% for phase in data.phases %}
{% for child in phase.children %}
{% if child.type == "screen" %}{% assign total = total | plus: 1 %}{% endif %}
{% if child.type == "folder" %}
{% for gc in child.children %}
{% if gc.type == "screen" %}{% assign total = total | plus: 1 %}{% endif %}
{% if gc.type == "folder" %}
{% for ggc in gc.children %}
{% if ggc.type == "screen" %}{% assign total = total | plus: 1 %}{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endif %}
{% endfor %}
{% endfor %}

<div class="pnp-wireframe" id="pnp-root">

  <header class="pnp-header">
    <div>
      <div class="pnp-eyebrow">{{ data.subtitle }}</div>
      <h1>{{ data.title }}</h1>
    </div>
    <div class="pnp-stats">
      <strong>{{ data.phases.size }} phases</strong> · <strong>{{ total }} screens</strong>
      <span class="pnp-hint">Click any phase to zoom in</span>
    </div>
  </header>

  <div class="pnp-stage">

    <!-- World view (2x2 phase grid) -->
    {% assign grid_slots = "tl,tr,br,bl" | split: "," %}
    <div class="pnp-view is-active" data-view-path="">
      <div class="pnp-world">
        {% for phase in data.phases %}
          {% assign phase_count = 0 %}
          {% assign folder_count = 0 %}
          {% for child in phase.children %}
            {% if child.type == "screen" %}{% assign phase_count = phase_count | plus: 1 %}{% endif %}
            {% if child.type == "folder" %}
              {% assign folder_count = folder_count | plus: 1 %}
              {% for gc in child.children %}
                {% if gc.type == "screen" %}{% assign phase_count = phase_count | plus: 1 %}{% endif %}
                {% if gc.type == "folder" %}
                  {% for ggc in gc.children %}
                    {% if ggc.type == "screen" %}{% assign phase_count = phase_count | plus: 1 %}{% endif %}
                  {% endfor %}
                {% endif %}
              {% endfor %}
            {% endif %}
          {% endfor %}
          <button type="button" class="pnp-phase-card"
                  data-grid="{{ grid_slots[forloop.index0] }}"
                  data-nav="{{ phase.id }}"
                  data-phase="{{ phase.id }}"
                  style="--pnp-phase-color: {{ phase.color }};">
            <span class="pnp-phase-tag">Phase 0{{ forloop.index }}</span>
            <span class="pnp-phase-count">
              {% if folder_count > 0 %}{{ folder_count }} folders · {% endif %}{{ phase_count }} screens
            </span>

            {% if phase_count > 0 %}
              {% include pnp_phase_preview.liquid phase=phase asset_base=data.asset_base %}
            {% endif %}
            <div class="pnp-phase-footer">
              <div class="pnp-phase-icon">{{ phase.icon }}</div>
              <h2 class="pnp-phase-name">{{ phase.name }}</h2>
              <p class="pnp-phase-desc">{{ phase.description }}</p>
            </div>
          </button>
        {% endfor %}

        <div class="pnp-arrow" data-dir="right">&rarr;</div>
        <div class="pnp-arrow" data-dir="down">&darr;</div>
        <div class="pnp-arrow" data-dir="left">&larr;</div>
        <div class="pnp-arrow" data-dir="up">&uarr;</div>
        <div class="pnp-loop-cta">
          <span class="pnp-loop-pointer">Try it</span>
          <a
            class="pnp-loop-badge"
            href="https://pick-nplay.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the PickNPlay website"
          >
            PickNPlay
          </a>
        </div>
      </div>
    </div>

    <!-- Phase + folder views (recursive include) -->
    {% for phase in data.phases %}
      {% include pnp_view.liquid
          node=phase
          path=phase.id
          phase=phase
          crumbs_ids=""
          crumbs_names=""
          is_phase_root=true %}
    {% endfor %}

  </div><!-- /.pnp-stage -->

  <!-- Portrait phone gate -->
  <div class="pnp-rotate-gate" role="status" aria-live="polite">
    <div class="pnp-rotate-icon" aria-hidden="true">↻</div>
    <div>
      <h2>Rotate your phone</h2>
      <p>Turn your phone sideways to view the interactive flow map.</p>
    </div>
  </div>

  <!-- Screen detail modal -->
  <div class="pnp-modal" id="pnp-modal" role="dialog" aria-modal="true" aria-hidden="true">
    <div class="pnp-modal-inner">
      <button type="button" class="pnp-modal-close" aria-label="Close">×</button>
      <img src="" alt="" id="pnp-modal-img">
      <p class="pnp-modal-caption" id="pnp-modal-caption"></p>
    </div>
  </div>

</div>

<script src="{{ '/assets/js/picknplay-wireframe.js' | relative_url }}" defer></script>
