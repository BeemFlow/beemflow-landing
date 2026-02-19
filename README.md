# BeemFlow Marketing Site

Astro-based marketing site for BeemFlow.

## Quick start

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` - Start local dev server.
- `npm run build` - Build production assets in `dist/`.
- `npm run preview` - Preview the production build locally.
- `npm run astro` - Run Astro CLI commands.

## Project structure

```text
src/
  components/   Reusable section and UI components
  data/         Typed content objects used by sections
  layouts/      Shared page layout and metadata
  pages/        Route entry points
  styles/       Global design tokens and utilities
```

## Editing guidelines

- Prefer updating copy in `src/data/content.ts` over hardcoding text in components.
- Keep shared UI patterns in `src/styles/global.css` (tokens, utilities).
- Use component-level styles for section-specific rules.
