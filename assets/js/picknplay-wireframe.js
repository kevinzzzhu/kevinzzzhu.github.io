/**
 * PickNPlay interactive wireframe map.
 *
 * Views are pre-rendered server-side with data-view-path attributes.
 * This script only toggles which view is active, updates the URL hash,
 * wires click-to-zoom/back/home, and handles the exit auto-transition +
 * screen detail modal.
 */
(function () {
  "use strict";

  const root = document.getElementById("pnp-root");
  if (!root) return;

  const stage = root.querySelector(".pnp-stage");
  const views = stage.querySelectorAll(".pnp-view");
  const viewByPath = new Map();
  views.forEach((v) => viewByPath.set(v.dataset.viewPath || "", v));

  const modal = document.getElementById("pnp-modal");
  const modalImg = document.getElementById("pnp-modal-img");
  const modalCaption = document.getElementById("pnp-modal-caption");
  const modalClose = modal?.querySelector(".pnp-modal-close");

  let currentPath = "";
  let pathHistory = []; // for Back button

  // --- View switching ------------------------------------------------------

  function showView(path, { pushHistory = true } = {}) {
    path = path || "";
    const target = viewByPath.get(path);
    if (!target) {
      // Unknown path -- fall back to world
      path = "";
    }
    const nextView = viewByPath.get(path);
    if (!nextView) return;

    if (pushHistory && path !== currentPath) {
      pathHistory.push(currentPath);
    }

    views.forEach((v) => v.classList.remove("is-active"));
    nextView.classList.add("is-active");
    currentPath = path;

    // Sync URL hash (skip when the state matches)
    const hash = path ? "#" + path : "";
    if (hash !== window.location.hash) {
      history.replaceState(null, "", hash || window.location.pathname + window.location.search);
    }

    // Wait a frame so layout settles, then draw arrows for this view.
    requestAnimationFrame(() => drawFlow(nextView));
  }

  function goBack() {
    if (pathHistory.length > 0) {
      const prev = pathHistory.pop();
      showView(prev, { pushHistory: false });
    } else {
      // No history -- step up one level in the path
      const parts = currentPath.split("/");
      parts.pop();
      showView(parts.join("/"), { pushHistory: false });
    }
  }

  function goHome() {
    pathHistory = [];
    showView("", { pushHistory: false });
  }

  // --- Event delegation on stage ------------------------------------------

  stage.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav]");
    if (navBtn && stage.contains(navBtn)) {
      const path = navBtn.dataset.nav;
      showView(path);
      stage.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const back = e.target.closest(".pnp-back");
    if (back) {
      goBack();
      return;
    }

    const home = e.target.closest(".pnp-home");
    if (home) {
      goHome();
      return;
    }

    const exit = e.target.closest(".pnp-exit");
    if (exit) {
      handleExit(exit.dataset.exitTo);
      return;
    }

    const screenBtn = e.target.closest(".pnp-screen-card");
    if (screenBtn) {
      openModal(screenBtn.dataset.screenImage, screenBtn.dataset.screenName);
      return;
    }
  });

  // --- Exit -> next phase auto-transition ----------------------------------

  function handleExit(nextPhaseId) {
    if (!nextPhaseId) return;

    // Zoom out to world, pulse the next phase card, then zoom in.
    showView("");
    requestAnimationFrame(() => {
      const nextCard = stage.querySelector(`.pnp-world .pnp-phase-card[data-phase="${nextPhaseId}"]`);
      if (nextCard) {
        nextCard.classList.add("is-pulsing");
        setTimeout(() => nextCard.classList.remove("is-pulsing"), 1200);
      }
      setTimeout(() => {
        pathHistory = [];
        showView(nextPhaseId);
      }, 900);
    });
  }

  // --- Screen detail modal -------------------------------------------------

  function openModal(imgSrc, name) {
    if (!modal) return;
    modalImg.src = imgSrc;
    modalImg.alt = name;
    modalCaption.textContent = name;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImg.src = "";
  }

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // --- Keyboard ------------------------------------------------------------

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal?.classList.contains("is-open")) {
        closeModal();
      } else if (currentPath !== "") {
        goBack();
      }
      return;
    }

    if (e.key.toLowerCase() === "h" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      // Ignore when typing in an input
      const tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea") return;
      goHome();
    }
  });

  // --- Mobile tree expand/collapse ----------------------------------------

  root.querySelectorAll(".pnp-tree-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      const children = btn.nextElementSibling;
      if (children) children.classList.toggle("is-open", !expanded);
    });
  });

  root.querySelectorAll(".pnp-tree-leaf").forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal(btn.dataset.screenImage, btn.dataset.screenName);
    });
  });

  // --- Flow arrows (SVG overlay per view) ---------------------------------
  //
  // Each view has a `.pnp-flow-wrap` that wraps its cards + an empty
  // `<svg class="pnp-flow-svg">`. Edges live on the wrap as a JSON
  // attribute (`data-edges`). After the view is shown we measure each
  // card's bounding rect relative to the wrap, then draw curved paths.
  //
  // Routing strategy: we pick the closest pair of edges between the two
  // cards (right->left if the target is to the right, bottom->top if below,
  // diagonal otherwise) and draw a cubic Bezier between the anchor points.

  const SVG_NS = "http://www.w3.org/2000/svg";

  function rectInFlowRef(el, ref) {
    if (!el || !ref || !ref.contains(el)) return null;
    let left = 0;
    let top = 0;
    let n = el;
    while (n && n !== ref) {
      left += n.offsetLeft;
      top += n.offsetTop;
      n = n.offsetParent;
    }
    if (n === ref) {
      return {
        left,
        top,
        right: left + el.offsetWidth,
        bottom: top + el.offsetHeight,
        width: el.offsetWidth,
        height: el.offsetHeight,
      };
    }
    const rr = ref.getBoundingClientRect();
    const er = el.getBoundingClientRect();
    const iw = ref.offsetWidth;
    const ih = ref.offsetHeight;
    if (iw < 2 || ih < 2 || rr.width < 2 || rr.height < 2) return null;
    return {
      left: ((er.left - rr.left) / rr.width) * iw,
      top: ((er.top - rr.top) / rr.height) * ih,
      right: ((er.right - rr.left) / rr.width) * iw,
      bottom: ((er.bottom - rr.top) / rr.height) * ih,
      width: (er.width / rr.width) * iw,
      height: (er.height / rr.height) * ih,
    };
  }

  function fanT(index, count) {
    if (count <= 1) return 0.5;
    return (index + 1) / (count + 1);
  }

  /** `.pnp-flow-fit-inner` lives under `.pnp-flow-fit`, not as a direct child of `.pnp-flow-wrap`. */
  function flowFitInnerFromWrap(wrap) {
    const fit = wrap.querySelector(":scope > .pnp-flow-fit");
    if (fit) {
      const inner = fit.querySelector(":scope > .pnp-flow-fit-inner");
      if (inner) return inner;
    }
    return wrap.querySelector(":scope > .pnp-flow-fit-inner");
  }

  function isPhoneLandscape() {
    return window.matchMedia("(orientation: landscape) and (max-height: 520px) and (max-width: 932px)").matches;
  }

  /**
   * Scale the whole flow layer so grid + arrows fit inside `.pnp-flow-wrap`
   * (no user zoom; one uniform scale per layer from content to viewport).
   */
  function applyFlowFit(wrap) {
    const fitOuter = wrap.querySelector(":scope > .pnp-flow-fit");
    const inner = flowFitInnerFromWrap(wrap);
    if (!fitOuter || !inner) return;
    const isPreview = wrap.classList.contains("pnp-phase-preview-flow");
    const preserveReadableScale = !isPreview && isPhoneLandscape();

    inner.style.removeProperty("transform");
    inner.style.removeProperty("transform-origin");
    fitOuter.style.removeProperty("height");
    fitOuter.classList.remove("is-overflowing");

    const view = wrap.closest(".pnp-view");
    const nav = view?.querySelector(".pnp-nav");
    const pad = 24;

    let availW = Math.max(120, wrap.clientWidth - pad);
    let availH = Math.max(100, wrap.clientHeight - pad);

    if (availH < 120 && view) {
      const vr = view.getBoundingClientRect();
      if (nav) {
        const nr = nav.getBoundingClientRect();
        availH = Math.max(140, vr.bottom - nr.bottom - pad);
      } else {
        availH = Math.max(140, vr.height - pad);
      }
    }
    if (availH < 100) {
      availH = Math.max(100, window.innerHeight * 0.5);
    }
    if (availW < 160) {
      availW = Math.max(160, window.innerWidth * 0.85);
    }

    let w = inner.scrollWidth;
    let h = inner.scrollHeight;

    // In world-card previews, CSS can hide overflow while cards still extend
    // beyond the inner box. Measure real card bounds so fit-scale is computed
    // from actual content, not just scrollWidth/scrollHeight.
    if (isPreview) {
      let minLeft = Infinity;
      let minTop = Infinity;
      let maxRight = -Infinity;
      let maxBottom = -Infinity;
      const items = wrap.querySelectorAll(".pnp-flow-grid > [data-card-id], .pnp-flow-grid > .pnp-exit");
      items.forEach((el) => {
        const r = rectInFlowRef(el, inner);
        if (!r) return;
        minLeft = Math.min(minLeft, r.left);
        minTop = Math.min(minTop, r.top);
        maxRight = Math.max(maxRight, r.right);
        maxBottom = Math.max(maxBottom, r.bottom);
      });
      if (Number.isFinite(minLeft) && Number.isFinite(maxRight)) {
        const pad = 24;
        w = Math.max(w, maxRight - minLeft + pad);
        h = Math.max(h, maxBottom - Math.min(0, minTop) + 12);
      }
    }
    if (w < 2 || h < 2) return;

    const previewInset = isPreview ? 0.82 : 0.98;
    const fitScale = Math.min(1, (availW * previewInset) / w, (availH * 0.98) / h);
    const s = preserveReadableScale ? Math.min(1, Math.max(fitScale, 0.42)) : fitScale;
    fitOuter.classList.toggle("is-overflowing", preserveReadableScale && fitScale < s);
    if (s < 0.998) {
      inner.style.transformOrigin = "top center";
      inner.style.transform = `scale(${s})`;
      fitOuter.style.height = `${Math.ceil(h * s + 8)}px`;
    } else {
      inner.style.removeProperty("transform");
      inner.style.removeProperty("transform-origin");
    }
  }

  /**
   * Lay out `.pnp-flow-grid` as a left-to-right tree: each edge step moves
   * one column to the right; multiple outgoing edges from the same node
   * stack vertically in the next column (e.g. Menu -> Create / Find /
   * History). Falls back to a flat centred flex row when there are no
   * usable edges.
   */
  function layoutFlowGrid(wrap) {
    const inner = flowFitInnerFromWrap(wrap);
    const grid = inner?.querySelector(":scope > .pnp-flow-grid") || wrap.querySelector(":scope > .pnp-flow-grid");
    if (!grid) return;
    const isPreview = wrap.classList.contains("pnp-phase-preview-flow");

    const clearPlacement = (el) => {
      el.style.gridColumn = "";
      el.style.gridRow = "";
    };

    let edges;
    try {
      edges = JSON.parse(wrap.dataset.edges || "[]");
    } catch (_) {
      edges = [];
    }

    const cardEls = [...grid.querySelectorAll(":scope > [data-card-id]")];
    const exitEl = grid.querySelector(":scope > .pnp-exit");
    cardEls.forEach(clearPlacement);
    if (exitEl) clearPlacement(exitEl);

    const domOrder = new Map();
    cardEls.forEach((el, i) => domOrder.set(el.dataset.cardId, i));
    const ids = cardEls.map((el) => el.dataset.cardId);
    const idSet = new Set(ids);

    const directed = [];
    for (const e of edges) {
      if (!e || !e.from || !e.to) continue;
      if (!idSet.has(e.from) || !idSet.has(e.to)) continue;
      if (e.style === "bidir") {
        if (domOrder.get(e.from) < domOrder.get(e.to)) directed.push([e.from, e.to]);
        else directed.push([e.to, e.from]);
      } else {
        directed.push([e.from, e.to]);
      }
    }

    const useFlat = directed.length === 0 || ids.length === 0;

    grid.classList.toggle("pnp-flow-grid--flat", useFlat);
    grid.classList.toggle("pnp-flow-grid--tree", !useFlat);

    if (useFlat) {
      grid.style.display = "";
      grid.style.gridTemplateColumns = "";
      grid.style.gridTemplateRows = "";
      return;
    }

    const level = Object.fromEntries(ids.map((id) => [id, 0]));
    let changed = true;
    let guard = 0;
    while (changed && guard++ < ids.length + 4) {
      changed = false;
      for (const [u, v] of directed) {
        if (level[v] < level[u] + 1) {
          level[v] = level[u] + 1;
          changed = true;
        }
      }
    }

    const maxLevel = Math.max(0, ...ids.map((id) => level[id]));
    const children = new Map(ids.map((id) => [id, []]));
    for (const [u, v] of directed) {
      if (level[v] === level[u] + 1) children.get(u).push(v);
    }

    const byCol = new Map();
    for (const id of ids) {
      const L = level[id];
      if (!byCol.has(L)) byCol.set(L, []);
      byCol.get(L).push(id);
    }
    for (const [, list] of byCol) {
      list.sort((a, b) => domOrder.get(a) - domOrder.get(b));
    }

    const row = Object.fromEntries(ids.map((id) => [id, 0]));
    const out = new Map(ids.map((id) => [id, []]));
    for (const [u, v] of directed) {
      if (level[v] === level[u] + 1) out.get(u).push(v);
    }
    const outScore = (id) => (out.get(id) || []).length;

    // Build one left-to-right "spine" (parent line) and keep it on middle row.
    const spineByCol = new Map();
    const roots = [...(byCol.get(0) || [])];
    if (roots.length > 0) {
      roots.sort((a, b) => domOrder.get(a) - domOrder.get(b));
      let spine = roots[0];
      spineByCol.set(0, spine);
      for (let L = 1; L <= maxLevel; L++) {
        const colNodes = byCol.get(L) || [];
        let cand = [];
        if (spine) {
          cand = (out.get(spine) || []).filter((id) => level[id] === L);
        }
        if (cand.length === 0) {
          cand = [...colNodes];
        }
        cand.sort((a, b) => outScore(b) - outScore(a) || domOrder.get(a) - domOrder.get(b));
        spine = cand[0] || null;
        if (spine) spineByCol.set(L, spine);
      }
    }

    const baseRow = 0;
    const sideOffsets = (count) => {
      if (count <= 0) return [];
      if (count === 1) return [1]; // single side-child: put below parent
      if (count === 2) return [-1, 1];
      const out = [-1, 1];
      let step = 2;
      while (out.length < count) {
        out.push(step);
        if (out.length < count) out.push(-step);
        step += 1;
      }
      return out.slice(0, count);
    };
    const nearestFreeRow = (target, preferSign, used) => {
      if (!used.has(target)) return target;
      for (let d = 1; d < 64; d++) {
        const a = target + preferSign * d;
        if (!used.has(a)) return a;
        const b = target - preferSign * d;
        if (!used.has(b)) return b;
      }
      let r = target + 1;
      while (used.has(r)) r += 1;
      return r;
    };

    for (let L = 0; L <= maxLevel; L++) {
      const colNodes = [...(byCol.get(L) || [])].sort((a, b) => domOrder.get(a) - domOrder.get(b));
      const spine = spineByCol.get(L);
      if (spine) row[spine] = baseRow;
      const rest = colNodes.filter((id) => id !== spine);
      if (rest.length === 0) continue;

      const used = new Set();
      if (spine) used.add(baseRow);

      // Group side nodes by their primary parent in the previous column so they
      // stay visually attached to that parent (instead of column-level stacking).
      const groups = new Map();
      for (const id of rest) {
        const parents = directed.filter(([u, v]) => v === id && level[u] === L - 1).map(([u]) => u);
        const parent = parents.sort((a, b) => outScore(b) - outScore(a) || domOrder.get(a) - domOrder.get(b))[0] || "__orphan__";
        if (!groups.has(parent)) groups.set(parent, []);
        groups.get(parent).push(id);
      }

      const orderedParents = [...groups.keys()].sort((a, b) => {
        const ra = a === "__orphan__" ? baseRow : (row[a] ?? baseRow);
        const rb = b === "__orphan__" ? baseRow : (row[b] ?? baseRow);
        return ra - rb || (a === "__orphan__" ? 1 : -1) || domOrder.get(a) - domOrder.get(b);
      });

      for (const p of orderedParents) {
        const kids = groups.get(p).sort((a, b) => domOrder.get(a) - domOrder.get(b));
        const offsets = sideOffsets(kids.length);
        const anchor = p === "__orphan__" ? baseRow : (row[p] ?? baseRow);
        for (let i = 0; i < kids.length; i++) {
          const target = anchor + offsets[i];
          const prefer = offsets[i] >= 0 ? 1 : -1;
          const placed = nearestFreeRow(target, prefer, used);
          row[kids[i]] = placed;
          used.add(placed);
        }
      }
    }

    let minRow = Infinity;
    let maxRow = -Infinity;
    for (const id of ids) {
      minRow = Math.min(minRow, row[id]);
      maxRow = Math.max(maxRow, row[id]);
    }
    const shift = 1 - minRow;
    for (const id of ids) row[id] += shift;
    const spineRow = baseRow + shift;

    const nCols = maxLevel + 1 + (exitEl ? 1 : 0);
    const nRows = Math.max(1, maxRow + shift);

    grid.style.display = "grid";
    // Full views can stretch columns when there is spare width. Mini previews
    // should stay compact so first/last cards do not get pushed into clipping.
    grid.style.gridTemplateColumns = isPreview ? `repeat(${nCols}, max-content)` : `repeat(${nCols}, minmax(max-content, 1fr))`;
    grid.style.gridTemplateRows = `repeat(${nRows}, auto)`;

    for (const id of ids) {
      const el = grid.querySelector(`:scope > [data-card-id="${id}"]`);
      if (!el) continue;
      el.style.gridColumn = String(level[id] + 1);
      el.style.gridRow = String(row[id]);
    }

    if (exitEl) {
      exitEl.style.gridColumn = String(nCols);
      exitEl.style.gridRow = String(Math.max(1, spineRow));
    }
  }

  function padInset(rect) {
    return Math.min(10, Math.min(rect.width, rect.height) * 0.06);
  }

  function spanAlongY(rect, t) {
    const p = padInset(rect);
    const span = Math.max(rect.height - 2 * p, 1);
    return rect.top + p + t * span;
  }

  function spanAlongX(rect, t) {
    const p = padInset(rect);
    const span = Math.max(rect.width - 2 * p, 1);
    return rect.left + p + t * span;
  }

  function anchorPoints(aRect, bRect, fan = {}) {
    // Incoming edges still fan along the target face so several arrows do not
    // stack on one point. Outgoing anchors use the middle of the source edge
    // so multi-branch flows leave from the visual centre of the card.
    const inIndex = fan.inIndex ?? 0;
    const inCount = fan.inCount ?? 1;
    // For one or two incoming edges, the visual intent is usually clearer when
    // they land on the centre of the target. Keep fan-out only for denser
    // inbound sets.
    const tIn = inCount <= 2 ? 0.5 : fanT(inIndex, inCount);
    const tOutMid = 0.5;

    const ac = { x: aRect.left + aRect.width / 2, y: aRect.top + aRect.height / 2 };
    const bc = { x: bRect.left + bRect.width / 2, y: bRect.top + bRect.height / 2 };
    const dx = bc.x - ac.x;
    const dy = bc.y - ac.y;

    let from;
    let to;
    let mode;
    // Prefer left/right anchors whenever separation is mostly horizontal (e.g.
    // tree columns). The old "sameRow" branch used top edges and compared
    // |dy| to min(card heights), which made tall phones + short folders look
    // like one row and drew tall arcs from the tops.
    if (Math.abs(dx) >= Math.abs(dy) && Math.abs(dx) > 4) {
      from = { x: dx > 0 ? aRect.right : aRect.left, y: spanAlongY(aRect, tOutMid) };
      to = { x: dx > 0 ? bRect.left : bRect.right, y: spanAlongY(bRect, tIn) };
      mode = "horizontal";
    } else if (Math.abs(dy) > 4) {
      from = { x: spanAlongX(aRect, tOutMid), y: dy > 0 ? aRect.bottom : aRect.top };
      to = { x: spanAlongX(bRect, tIn), y: dy > 0 ? bRect.top : bRect.bottom };
      mode = "vertical";
    } else {
      from = { x: dx >= 0 ? aRect.right : aRect.left, y: spanAlongY(aRect, tOutMid) };
      to = { x: dx >= 0 ? bRect.left : bRect.right, y: spanAlongY(bRect, tIn) };
      mode = "horizontal";
    }
    return { from, to, mode };
  }

  function flowBezierPoints(from, to, mode) {
    if (mode === "horizontal") {
      const stretch = Math.max(24, Math.abs(to.x - from.x) * 0.45);
      const sg = Math.sign(to.x - from.x) || 1;
      const c1 = { x: from.x + sg * stretch, y: from.y };
      const c2 = { x: to.x - sg * stretch, y: to.y };
      return [from, c1, c2, to];
    }
    const stretch = Math.max(20, Math.abs(to.y - from.y) * 0.5);
    const sg = Math.sign(to.y - from.y) || 1;
    const c1 = { x: from.x, y: from.y + sg * stretch };
    const c2 = { x: to.x, y: to.y - sg * stretch };
    return [from, c1, c2, to];
  }

  function bezierPath(from, to, mode) {
    const [p0, c1, c2, p3] = flowBezierPoints(from, to, mode);
    return `M ${p0.x} ${p0.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p3.x} ${p3.y}`;
  }

  function cubicMidpoint(p0, p1, p2, p3) {
    const t = 0.5;
    const u = 1 - t;
    const u2 = u * u;
    const u3 = u2 * u;
    const t2 = t * t;
    const t3 = t2 * t;
    return {
      x: u3 * p0.x + 3 * u2 * t * p1.x + 3 * u * t2 * p2.x + t3 * p3.x,
      y: u3 * p0.y + 3 * u2 * t * p1.y + 3 * u * t2 * p2.y + t3 * p3.y,
    };
  }

  function maxContentBottom(wrap, ref) {
    const grid = wrap.querySelector(".pnp-flow-grid");
    if (!grid) return 0;
    let m = 0;
    for (const el of grid.querySelectorAll(":scope > [data-card-id], :scope > .pnp-exit")) {
      const r = rectInFlowRef(el, ref);
      if (r) m = Math.max(m, r.bottom);
    }
    return m;
  }

  function layoutEdgeLabelStrip(labeled, svgW, contentBottom) {
    if (labeled.length === 0) {
      return { placed: [], reserve: 0 };
    }
    const stripPadTop = 16;
    const lineHeight = 20;
    const baseY = contentBottom + stripPadTop + 11;
    const sorted = [...labeled].sort((a, b) => a.midCurve.x - b.midCurve.x);
    const placed = [];

    for (const it of sorted) {
      const lbl = it.edge.label || "";
      const half = Math.min(svgW * 0.46, Math.max(40, lbl.length * 3.5 + 14));
      let chosenRow = 0;
      let chosenX = Math.min(Math.max(it.midCurve.x, half + 8), svgW - half - 8);
      let found = false;
      for (let tryRow = 0; tryRow < 24 && !found; tryRow++) {
        const cx = Math.min(Math.max(it.midCurve.x, half + 8), svgW - half - 8);
        const clash = placed.some((p) => p.row === tryRow && Math.abs(p.x - cx) < p.half + half + 14);
        if (!clash) {
          chosenRow = tryRow;
          chosenX = cx;
          found = true;
        }
      }
      if (!found) {
        chosenRow = placed.length;
        chosenX = Math.min(Math.max(svgW / 2, half + 8), svgW - half - 8);
      }
      placed.push({
        x: chosenX,
        row: chosenRow,
        half,
        y: baseY + chosenRow * lineHeight,
        edge: it.edge,
        midCurve: it.midCurve,
      });
    }

    const maxRow = placed.reduce((acc, p) => Math.max(acc, p.row), 0);
    const reserve = stripPadTop + (maxRow + 1) * lineHeight + 22;
    return { placed, reserve };
  }

  function drawFlow(view) {
    view.querySelectorAll(".pnp-flow-wrap").forEach((wrap) => {
      const isPreview = wrap.classList.contains("pnp-phase-preview-flow");
      const inner = flowFitInnerFromWrap(wrap) || wrap;
      const svg = inner.querySelector(":scope > .pnp-flow-svg") || wrap.querySelector(":scope > .pnp-flow-svg");
      if (!svg) return;

      layoutFlowGrid(wrap);

      let edges;
      try {
        edges = JSON.parse(wrap.dataset.edges || "[]");
      } catch (_) {
        edges = [];
      }
      svg.innerHTML = "";

      const ref = inner;
      inner.style.paddingBottom = "";

      if (edges.length === 0) {
        const zw = Math.max(inner.scrollWidth, inner.offsetWidth, 1);
        const zh = Math.max(inner.scrollHeight, inner.offsetHeight, 1);
        svg.setAttribute("viewBox", `0 0 ${zw} ${zh}`);
        svg.setAttribute("width", zw);
        svg.setAttribute("height", zh);
        svg.style.width = `${zw}px`;
        svg.style.height = `${zh}px`;
        applyFlowFit(wrap);
        return;
      }

      const defs = document.createElementNS(SVG_NS, "defs");
      const phaseCard = wrap.closest(".pnp-phase-card");
      const markerId = isPreview ? `pnp-arrow-pv-${phaseCard?.dataset.phase || "x"}` : `pnp-arrow-${Math.random().toString(36).slice(2, 10)}`;
      const marker = document.createElementNS(SVG_NS, "marker");
      marker.setAttribute("id", markerId);
      marker.setAttribute("viewBox", "0 0 10 10");
      marker.setAttribute("refX", "9");
      marker.setAttribute("refY", "5");
      marker.setAttribute("markerWidth", "7");
      marker.setAttribute("markerHeight", "7");
      marker.setAttribute("orient", "auto-start-reverse");
      marker.innerHTML = `<path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>`;
      defs.appendChild(marker);
      svg.appendChild(defs);

      const rectFor = (el) => rectInFlowRef(el, ref);
      const validEdges = [];
      for (const edge of edges) {
        const a = wrap.querySelector(`[data-card-id="${edge.from}"]`);
        const b = wrap.querySelector(`[data-card-id="${edge.to}"]`);
        if (!a || !b) continue;
        validEdges.push(edge);
      }

      const outMap = new Map();
      const inMap = new Map();
      for (const edge of validEdges) {
        if (!outMap.has(edge.from)) outMap.set(edge.from, []);
        outMap.get(edge.from).push(edge);
        if (!inMap.has(edge.to)) inMap.set(edge.to, []);
        inMap.get(edge.to).push(edge);
      }
      for (const [, arr] of outMap) {
        arr.sort((e1, e2) => {
          const a = wrap.querySelector(`[data-card-id="${e1.to}"]`);
          const b = wrap.querySelector(`[data-card-id="${e2.to}"]`);
          const ra = rectFor(a);
          const rb = rectFor(b);
          if (!ra || !rb) return 0;
          return ra.top + ra.height / 2 - (rb.top + rb.height / 2);
        });
      }
      for (const [, arr] of inMap) {
        arr.sort((e1, e2) => {
          const a = wrap.querySelector(`[data-card-id="${e1.from}"]`);
          const b = wrap.querySelector(`[data-card-id="${e2.from}"]`);
          const ra = rectFor(a);
          const rb = rectFor(b);
          if (!ra || !rb) return 0;
          return ra.top + ra.height / 2 - (rb.top + rb.height / 2);
        });
      }

      const labeled = [];
      validEdges.forEach((edge) => {
        const a = wrap.querySelector(`[data-card-id="${edge.from}"]`);
        const b = wrap.querySelector(`[data-card-id="${edge.to}"]`);
        if (!a || !b) return;

        const aRect = rectFor(a);
        const bRect = rectFor(b);
        if (!aRect || !bRect) return;

        const outs = outMap.get(edge.from) || [edge];
        const ins = inMap.get(edge.to) || [edge];
        const outIndex = Math.max(0, outs.indexOf(edge));
        const outCount = outs.length;
        const inIndex = Math.max(0, ins.indexOf(edge));
        const inCount = ins.length;

        const { from, to, mode } = anchorPoints(aRect, bRect, {
          outIndex,
          outCount,
          inIndex,
          inCount,
        });
        const path = document.createElementNS(SVG_NS, "path");
        path.setAttribute("d", bezierPath(from, to, mode));
        path.setAttribute("class", "pnp-flow-edge");
        path.setAttribute("marker-end", `url(#${markerId})`);
        if (edge.style === "bidir") {
          path.setAttribute("marker-start", `url(#${markerId})`);
        }
        svg.appendChild(path);

        if (edge.label && !isPreview) {
          const [p0, p1, p2, p3] = flowBezierPoints(from, to, mode);
          labeled.push({
            edge,
            midCurve: cubicMidpoint(p0, p1, p2, p3),
          });
        }
      });

      const contentBottom = maxContentBottom(wrap, ref);
      const svgW0 = Math.max(inner.scrollWidth, inner.offsetWidth, 1);
      let labelPlacements = [];
      let legendReserve = 0;
      if (!isPreview && labeled.length > 0) {
        const laid = layoutEdgeLabelStrip(labeled, svgW0, contentBottom);
        labelPlacements = laid.placed;
        legendReserve = laid.reserve;
        inner.style.paddingBottom = `${legendReserve}px`;
      }

      const svgW = Math.max(inner.scrollWidth, inner.offsetWidth, 1);
      const svgH = Math.max(inner.scrollHeight, inner.offsetHeight, 1);
      svg.setAttribute("viewBox", `0 0 ${svgW} ${svgH}`);
      svg.setAttribute("width", svgW);
      svg.setAttribute("height", svgH);
      svg.style.width = `${svgW}px`;
      svg.style.height = `${svgH}px`;

      for (const p of labelPlacements) {
        const ln = document.createElementNS(SVG_NS, "line");
        ln.setAttribute("x1", String(p.midCurve.x));
        ln.setAttribute("y1", String(p.midCurve.y));
        ln.setAttribute("x2", String(p.x));
        ln.setAttribute("y2", String(p.y - 8));
        ln.setAttribute("class", "pnp-flow-label-leader");
        svg.appendChild(ln);
        const text = document.createElementNS(SVG_NS, "text");
        text.setAttribute("x", String(p.x));
        text.setAttribute("y", String(p.y));
        text.setAttribute("class", "pnp-flow-label");
        text.setAttribute("text-anchor", "middle");
        text.textContent = p.edge.label;
        svg.appendChild(text);
      }

      applyFlowFit(wrap);
    });
  }

  // Redraw on viewport resize + after images load (screenshots drive card size).
  let redrawTimer = null;
  function scheduleRedraw() {
    clearTimeout(redrawTimer);
    redrawTimer = setTimeout(() => {
      const active = stage.querySelector(".pnp-view.is-active");
      if (active) drawFlow(active);
    }, 80);
  }
  window.addEventListener("resize", scheduleRedraw);
  window.addEventListener("orientationchange", () => {
    scheduleRedraw();
    setTimeout(scheduleRedraw, 240);
  });
  window.screen?.orientation?.addEventListener?.("change", () => {
    scheduleRedraw();
    setTimeout(scheduleRedraw, 240);
  });
  // Images inside the active view may load after showView -- redraw then.
  stage.querySelectorAll("img").forEach((img) => {
    if (!img.complete) img.addEventListener("load", scheduleRedraw, { once: true });
  });

  // --- Deep link from URL hash --------------------------------------------

  function initFromHash() {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && viewByPath.has(hash)) {
      showView(hash, { pushHistory: false });
    }
  }

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace(/^#/, "");
    if (viewByPath.has(hash) && hash !== currentPath) {
      showView(hash, { pushHistory: false });
    }
  });

  initFromHash();

  requestAnimationFrame(() => {
    const active = stage.querySelector(".pnp-view.is-active");
    if (active) drawFlow(active);
  });
})();
