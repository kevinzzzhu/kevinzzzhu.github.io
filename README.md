# Kevin Zhu Personal Website

This repository contains the source for [kevinzzzhu.github.io](https://kevinzzzhu.github.io), my personal website and public portfolio.

It started from the `al-folio` Jekyll theme, but this repo is not maintained as a reusable template. It is the working source for my own site: a place to present research, teaching, selected projects, and writing in a way that is easier to navigate than a CV alone.

## What lives here

The site currently focuses on four kinds of public-facing material:

- research and project pages, especially work around HCI, interactive machine learning, and creative or musical AI
- teaching and tutoring context for ANU courses
- publications and CV material
- occasional blog-style notes and curated links

Featured project areas already represented in the site include:

- **IMPSY Web Interface**: a public-facing write-up of the honours/NIME project, with linked subpages for process, system walkthrough, study takeaways, gallery material, and public resources
- **PickNPlay**: a project page plus linked interactive wireframe material
- **coursework archive**: selected assignment collections that are worth keeping visible as portfolio evidence rather than leaving buried in course folders

## Site structure

The repo still uses the standard Jekyll + al-folio layout, but the important content paths for this site are:

- `_pages/` for top-level routes such as `about`, `projects`, `publications`, `teaching`, `cv`, and the IMPSY/PickNPlay linked pages
- `_projects/` for project cards and long-form project entries
- `_news/` for short updates
- `_bibliography/` for publication data
- `_data/` for structured content and configuration-backed lists
- `assets/` for images and other public static files

The main site configuration lives in `_config.yml`.

## Local development

This repo follows the same build flow as al-folio, with Docker as the safest default:

```bash
docker compose pull
docker compose up
```

The local site is served at [http://localhost:8080](http://localhost:8080).

If Docker is noisy or unavailable on this machine, the practical fallback in this repo has been Bundler-based verification:

```bash
bundle install
bundle exec jekyll build
```

## Editing workflow for this repo

When updating the site, optimise for repo-specific clarity rather than theme completeness.

1. Update content first, especially `_pages/`, `_projects/`, `_news/`, and `_bibliography/`.
2. Keep project pages personal and concrete. This site should read like a person documenting real work, not like a lab template or paper appendix.
3. Only publish assets that are safe to expose publicly.
4. Run targeted formatting on changed files when repo-wide formatting is noisy.
5. Verify the site with a local build before committing.

Useful commands:

```bash
npx prettier README.md --write
bundle exec jekyll build
```

## Notes for future maintenance

- Treat this repository as the canonical source for the public website, not as a distribution of the theme.
- Prefer concise, project-specific copy over stock academic homepage language.
- When adding new project pages, link them into a small hub of related pages if the work has process notes, visuals, or public resources worth separating.
- Keep README-level documentation focused on maintaining this site. Theme-wide guidance belongs in upstream al-folio docs, not here.

## Upstream foundation

The site is built on top of [al-folio](https://github.com/alshedivat/al-folio), a Jekyll theme for academic and portfolio sites. Upstream docs such as `INSTALL.md`, `CUSTOMIZE.md`, and `TROUBLESHOOTING.md` are still useful when working on theme-level behavior, but this `README.md` is intentionally scoped to this repository as Kevin Zhu's site.
