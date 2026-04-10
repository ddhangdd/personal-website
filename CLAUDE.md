# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev      # Local dev server at localhost:3000 (no basePath)
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

Single-page static portfolio built with Next.js 14 (App Router) + Tailwind CSS 3. Deploys to Vercel on push to `main`.

`src/app/page.tsx` composes all sections: Nav → Hero → About → Projects → Experience → Contact. All section data (projects, skills, timeline) is hardcoded in each component — no CMS.

`src/components/FadeIn.tsx` is the only `"use client"` wrapper — uses IntersectionObserver for scroll-triggered animations. All other components are client components that wrap content with FadeIn for staggered entrance animations (delay prop in ms).

## Design System

DESIGN.md (Vercel-inspired) is the source of truth for all visual decisions. Key rules:

- **No CSS borders on cards.** Use shadow-as-border: `box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08)`. Predefined classes: `.card-shadow`, `.card-shadow-hover`, `.shadow-border`.
- **Typography uses Geist fonts** via `geist` package. CSS variables `--font-geist-sans` and `--font-geist-mono` set in layout.tsx. Hierarchy classes in globals.css: `.text-display`, `.text-section-heading`, `.text-card-title`, `.text-body-large`, `.text-body`, `.text-body-small`, `.text-mono-label`.
- **Three font weights only**: 400 (body), 500 (UI/interactive), 600 (headings). Never use 700.
- **Negative letter-spacing** at display sizes (-0.06em), progressively relaxes at smaller sizes.
- **Geist Mono uppercase** for section labels and technical tags (`.text-mono-label`).
- **Color palette**: `#171717` text (not pure black), `#ffffff` background. Accent colors are semantic — blue (`#0a72ef`) for AI/Engineering, pink (`#de1d8d`) for Healthcare, red (`#ff5b4f`) for Developer Tooling. Defined in `tailwind.config.js` as `accent-blue`, `accent-pink`, `accent-red`.
- **OpenType ligatures** (`"liga" 1`) enabled globally on all text.

## Dark Mode

- Class-based (`darkMode: "class"` in tailwind.config.js). Toggle in `ThemeToggle.tsx`, state in localStorage.
- Inline script in layout.tsx prevents flash of wrong theme on load.
- Dark surfaces: `#0a0a0a` page background, `#111111` cards. Shadow system inverts to `rgba(255,255,255,0.1)` borders.
- All typography classes in globals.css have `.dark` variants. Components use `dark:` Tailwind utilities.
- Favicons swap via `media="(prefers-color-scheme: ...)"` on `<link>` tags. Two sets in `public/favicon-dark/` and `public/favicon-light/`.

## Deployment

- Hosted on **Vercel** at `desmondfung.dev`. Auto-deploys on push to `main`.
- No `basePath`, no `output: "export"`, no `images.unoptimized` — Vercel handles SSR and image optimization natively.
- GitHub Actions workflow (`.github/workflows/deploy.yml`) is commented out — was for GitHub Pages.
- Work on feature branches, merge to `main` to deploy.
