# BeemFlow Brand Guide

Portable reference for porting the BeemFlow design system to other products.
Source of truth: `src/styles/global.css`.

## 1) Brand Direction

- **Tone:** senior, editorial, trustworthy, high-signal.
- **Visual metaphor:** warm parchment canvas + technical mono labels + amber action accents.
- **Product posture:** premium and grounded, never flashy.
- **Texture:** a subtle fractal-noise grain overlay sits on top of the entire page (`body::before`, `mix-blend-mode: multiply`). This is a signature detail worth preserving.

## 2) Design Tokens

All tokens live in `:root` in `src/styles/global.css`.

### Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| `--color-bg` | `#F8F5F0` | Default page background |
| `--color-bg-elevated` | `#FFFFFF` | Elevated cards, alternating sections |
| `--color-bg-subtle` | `rgba(26, 23, 20, 0.018)` | Subtle fills |
| `--color-bg-invert` | `#1A1714` | Dark sections (contact, footer) |
| `--color-bg-invert-elevated` | `#252119` | Inputs on dark backgrounds |
| `--color-text` | `#1A1714` | Primary text |
| `--color-text-muted` | `#6B6560` | Secondary / supporting text |
| `--color-text-faint` | `#918B84` | Decorative / de-emphasized text |
| `--color-text-on-dark` | `#EDE9E3` | Primary text on dark surfaces |
| `--color-text-on-accent` | `#FFFFFF` | Text on accent-colored buttons |
| `--color-text-muted-on-dark` | `#948E86` | Secondary text on dark surfaces |
| `--color-accent` | `#B45309` | Primary accent / CTA color (amber) |
| `--color-accent-dark` | `#9A4408` | Darker accent variant |
| `--color-accent-on-dark` | `#D97706` | Accent on dark backgrounds |
| `--color-accent-hover` | `#92400E` | Accent hover state |
| `--color-accent-soft` | `rgba(180, 83, 9, 0.06)` | Soft accent background fills |
| `--color-accent-hover-subtle` | `rgba(180, 83, 9, 0.10)` | Subtle hover fills |
| `--color-border-accent` | `rgba(180, 83, 9, 0.2)` | Accent-tinted borders |
| `--color-border` | `rgba(26, 23, 20, 0.10)` | Default borders |
| `--color-border-subtle` | `rgba(26, 23, 20, 0.06)` | Very subtle dividers |
| `--color-border-on-dark` | `rgba(255, 255, 255, 0.08)` | Borders on dark surfaces |
| `--color-input-bg` | `rgba(26, 23, 20, 0.03)` | Form input backgrounds |
| `--color-input-border` | `rgba(26, 23, 20, 0.12)` | Form input borders |
| `--color-input-focus` | `rgba(180, 83, 9, 0.3)` | Form input focus ring |

**Note:** `::selection` uses `rgba(180, 83, 9, 0.14)` (accent at 14% opacity). The `<meta name="theme-color">` in `BaseLayout.astro` is hardcoded to `#F8F5F0` to match `--color-bg` (meta tags can't read CSS vars). Third-party JS integrations (Cal.com) also hardcode `#B45309` for the same reason.

### Typography

| Token | Full Value | Usage |
| --- | --- | --- |
| `--font-display` | `'Newsreader', Georgia, 'Times New Roman', serif` | Hero headings, section headings, testimonial quotes |
| `--font-sans` | `'Outfit', system-ui, -apple-system, sans-serif` | Body text, default font |
| `--font-mono` | `'IBM Plex Mono', 'Menlo', monospace` | Labels, badges, buttons, metadata, attribution |

Fonts are loaded via Google Fonts in `BaseLayout.astro`:
- Newsreader: ital + weight 300-700, optical size 6-72
- Outfit: weight 300-700
- IBM Plex Mono: regular + medium + semibold, with italics

### Type Scale

| Token | Size | Usage |
| --- | --- | --- |
| `--fs-micro` | `9px` | `::before` pseudo-labels (`[data-label]`) |
| `--fs-label-sm` | `10px` | Service category labels |
| `--fs-label` | `11px` | Mono labels, badges, credentials |
| `--fs-mono` | `12px` | Buttons, small mono text, attribution |
| `--fs-sm` | `14px` | Secondary / supporting text |
| `--fs-body-sm` | `15px` | Deliverables, descriptions, list items |
| `--fs-body` | `16px` | Default body copy |
| `--fs-body-lg` | `17px` | Lead paragraphs |
| `--fs-body-xl` | `18px` | Hero body, service titles |
| `--fs-title-faq` | `19px` | FAQ question text |
| `--fs-title-sm` | `20px` | Block titles, card headlines |
| `--fs-title` | `22px` | Section subtitles, testimonial quotes |
| `--fs-title-lg` | `24px` | Step card titles |
| `--fs-display-number` | `64px` | Decorative step numbers |

Base element rules: all `h1-h4` use `--font-display` with `-0.02em` tracking. `h3`/`h4` are weight 500. All `p`/`li` default to `--color-text-muted`.

### Layout

| Token | Value | Usage |
| --- | --- | --- |
| `--max-width` | `960px` | Primary content container |
| `--max-width-narrow` | `650px` | Text-heavy sections |
| `--max-width-form` | `600px` | Form containers |
| `--content-measure` | `640px` | Max-width for body text blocks |
| `--section-padding` | `140px 32px` | Standard section padding (mobile: `100px 20px`) |

### Spacing

| Token | Value |
| --- | --- |
| `--space-xs` | `8px` |
| `--space-sm` | `16px` |
| `--space-md` | `20px` |
| `--space-lg` | `48px` |
| `--space-xl` | `80px` |

### Motion

| Token | Value | Usage |
| --- | --- | --- |
| `--motion-fade` | `0.8s` | Scroll-triggered fade-in |
| `--motion-hover` | `120ms` | Hover transitions |
| `--motion-press` | `120ms` | Active/press transitions |
| `--ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Fade-in animations |
| `--ease-standard` | `ease-out` | Hover/press transitions |

`prefers-reduced-motion: reduce` disables all fade-in transitions and smooth scrolling.

## 3) Reusable CSS Classes

These exist in `global.css`. Use them before creating one-off styles.

### Layout
- `.container` -- max-width `960px`, centered
- `.container--narrow` -- max-width `650px`, centered
- `.container--form` -- max-width `600px`, centered
- `.section` -- applies `--section-padding`

### Typography
- `.label-mono` -- mono, `11px`, `0.1em` tracking, uppercase, weight 500
- `.text-mono-sm` -- mono, `12px`
- `.text-body-sm` -- `15px`, line-height 1.6
- `.text-body` -- `16px`, line-height 1.7
- `.text-body-lg` -- `17px`, line-height 1.8
- `.text-title-sm` -- display font, `22px`, weight 500, `-0.02em` tracking
- `.text-accent` -- accent color

### Section Headers
- `.section-label` -- accent-colored label above headings
- `.section-heading` -- responsive heading (`clamp(30px, 4.5vw, 48px)`), weight 400, with a `32px` amber underline rule via `::after`
- `.section-heading--compact` -- tighter bottom margin variant
- These are composed together in `SectionHeader.astro`

### Buttons
- `.btn-primary` -- mono font, `12px`, uppercase, amber background, white text, `2px` border-radius, scale-down on `:active`

### Lists
- `.list-dash` -- no bullets, each `li` gets an em-dash prefix in accent color via `::before`

### Pseudo-labels
- `[data-label]` -- any element with a `data-label` attribute gets a micro mono label rendered via `::before` (`9px`, accent color, uppercase)

### Step Cards
- `.step-cards` -- flex column container
- `.step-card` -- horizontal layout with number + content, separated by top borders
- `.step-card__number`, `__content`, `__header`, `__title`, `__subtitle`, `__meta`, `__price`, `__timeline`, `__desc`, `__callout`
- Responsive: stacks vertically below `640px`

### Animation
- `.fade-in` -- scroll-triggered entrance animation (translate-up + opacity), driven by `IntersectionObserver` in `BaseLayout.astro`. Supports `--fade-delay` custom property for staggering.

## 4) Shared Astro Components

| Component | Purpose |
| --- | --- |
| `FadeIn.astro` | Wraps content in a `.fade-in` div with configurable delay |
| `SectionHeader.astro` | Renders a `.label-mono` + `.section-heading` with optional compact mode |
| `OfferSteps.astro` | Renders an array of step objects as numbered `.step-card` cards |
| `ClientsBar.astro` | Horizontal logo/name bar with a label |
| `BrandMark.astro` | The "beemflow." wordmark (mono font, accent dot) |
| `ProcessSteps.astro` | Simpler numbered step list (no pricing, used on ops page) |
| `CrossOfferBanner.astro` | Accent-tinted banner linking between the two site verticals |

## 5) Composition Rules

- Section-specific styling stays scoped in each `.astro` component's `<style>` block.
- Tokens and cross-section primitives live in `global.css`.
- Prefer the text utility classes (`.text-body`, `.label-mono`, etc.) over writing one-off font declarations.
- Use `SectionHeader.astro` for section headings instead of manually composing `.section-label` + `.section-heading`.
- Content/copy lives in `src/data/content.ts`, not hardcoded in components.

## 6) Porting Checklist

1. Copy `src/styles/global.css` -- this is the entire token + utility layer.
2. Load fonts: Newsreader, Outfit, IBM Plex Mono (see the Google Fonts `<link>` in `BaseLayout.astro` for the exact weight/style config).
3. Reproduce the grain overlay (`body::before`) if you want the texture.
4. Port shared components: `FadeIn.astro`, `SectionHeader.astro`, `BrandMark.astro` are the most reusable.
5. Match the page frame: nav at top, hero as first section, alternating `--color-bg` / `--color-bg-elevated` section backgrounds, dark `--color-bg-invert` contact section, dark footer.
6. For third-party JS that needs color values (Cal.com, etc.), hardcode `#B45309` with a comment referencing `--color-accent`.
7. Keep accent usage intentional: CTAs, section labels, dividers, callout borders, key highlights. Don't over-apply it.

## 7) Guardrails

- Do not introduce ad-hoc hex values -- use existing tokens.
- Keep border-radius minimal: `2px` for buttons/inputs, `4px` max for containers.
- Preserve the typographic hierarchy: display serif for statements, sans for body, mono for metadata/labels.
- Section headings always get the amber underline rule (via `.section-heading::after`).
- The accent color (`#B45309`, amber-700) is used sparingly and intentionally. It should feel earned, not decorative.
