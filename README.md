# BoldTutor

Website for [BoldTutor](https://boldtutor.com.au) — private tutoring for HSC and secondary school students in Sydney. Built with [Astro 6](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages.

---

## Services

| Subject | Face-to-face | Online |
|---|---|---|
| English (HSC & Yr 7–11) | from $65/hr | from $55/hr |
| Society & Culture | from $80/hr | from $75/hr |
| Modern History | from $70/hr | from $60/hr |

---

## Dev setup

```bash
# Install dependencies (pnpm only — do not use npm or yarn)
pnpm install

# Start dev server
pnpm run dev
# → http://localhost:4321

# Type-check all .astro files
pnpm run astro check

# Build for production
pnpm run build

# Preview production build locally
pnpm run preview
```

---

## Project structure

```
boldtutor-site/
├── public/                     # Static files (favicon, og-image.png)
├── src/
│   ├── components/             # Reusable UI sections
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── TrustBar.astro      # Pricing/trust signals strip
│   │   ├── Services.astro      # Subject cards grid
│   │   ├── About.astro
│   │   ├── Reviews.astro       # Student testimonials
│   │   ├── StudentResults.astro
│   │   ├── SubjectsGrid.astro
│   │   ├── CTA.astro
│   │   └── Banner.astro        # Inner-page hero with breadcrumbs
│   ├── config/
│   │   └── brand.ts            # Colors, fonts, tagline, site URL
│   ├── content/
│   │   └── blog/               # Markdown blog posts
│   ├── data/
│   │   └── client.ts           # Contact info, socials, location
│   ├── layouts/
│   │   ├── BaseLayout.astro    # HTML shell — SEO, GA, fonts, transitions
│   │   └── PostLayout.astro    # Blog post layout
│   ├── pages/
│   │   ├── index.astro         # Homepage
│   │   ├── about.astro
│   │   ├── reviews.astro
│   │   ├── faqs.astro
│   │   ├── make-an-offer.astro
│   │   ├── english-services.astro
│   │   ├── subjects/
│   │   │   ├── index.astro
│   │   │   └── society-and-culture.astro
│   │   ├── prices/
│   │   │   ├── index.astro
│   │   │   ├── hsc-english.astro
│   │   │   └── english-yr7-11.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       ├── global.css
│       └── theme.css           # Tailwind v4 @theme design tokens
├── astro.config.mjs
└── package.json
```

---

## Blog posts

Add `.md` files to `src/content/blog/`. Required frontmatter:

```md
---
title: "How to Nail Your HSC English Essay"
description: "A short summary shown on the blog listing and in search results."
author: "BoldTutor"
date: 2026-04-01
tags: ["hsc", "english"]
draft: false
---
```

The filename becomes the URL slug. Set `draft: true` to write without publishing.

---

## Tech stack

| Tool | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build) | 6 | Framework & static site generator |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first styling |
| [GitHub Pages](https://pages.github.com) | — | Hosting |
| [pnpm](https://pnpm.io) | 9+ | Package manager |
| [Playwright](https://playwright.dev) | 1.58 | End-to-end tests |

---

## Commands reference

| Command | What it does |
|---|---|
| `pnpm install` | Install all dependencies |
| `pnpm run dev` | Start dev server at `localhost:4321` |
| `pnpm run build` | Build to `./dist/` |
| `pnpm run preview` | Preview production build locally |
| `pnpm run astro check` | Type-check all `.astro` files |
