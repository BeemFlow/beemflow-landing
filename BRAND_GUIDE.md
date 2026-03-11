# BeemFlow Brand Guide

Framework-agnostic design system reference. Copy this file and `global.css` into any project and use them as the source of truth for all visual decisions.

Source of truth for token values: `global.css` (the `:root` block).

---

## 1) Brand Direction

- **Tone:** senior, editorial, trustworthy, high-signal.
- **Visual metaphor:** warm parchment canvas + technical mono labels + amber action accents.
- **Product posture:** premium and grounded, never flashy.
- **Texture:** a subtle fractal-noise grain overlay sits on top of the entire viewport (`body::before`, `mix-blend-mode: multiply`). This is a signature detail — reproduce it if possible, skip it if the framework makes it awkward.

## 2) Design Tokens

All tokens are CSS custom properties defined on `:root` in `global.css`. When working in a system that uses its own token format (e.g. Tailwind `theme.extend`, shadcn CSS variables, Swift asset catalogs), map the values below into that system rather than fighting it. The names and values here are canonical.

### Color Palette

| Token | Value | Usage |
| --- | --- | --- |
| `--color-bg` | `#F8F5F0` | Default page background |
| `--color-bg-elevated` | `#FFFFFF` | Elevated cards, alternating sections |
| `--color-bg-subtle` | `rgba(26, 23, 20, 0.018)` | Subtle fills |
| `--color-bg-invert` | `#1A1714` | Dark sections (footer, contact areas) |
| `--color-bg-invert-elevated` | `#252119` | Inputs on dark backgrounds |
| `--color-text` | `#1A1714` | Primary text |
| `--color-text-muted` | `#6B6560` | Secondary / supporting text |
| `--color-text-faint` | `#918B84` | Decorative / de-emphasized text |
| `--color-text-on-dark` | `#EDE9E3` | Primary text on dark surfaces |
| `--color-text-on-accent` | `#FFFFFF` | Text on accent-colored buttons |
| `--color-text-muted-on-dark` | `#948E86` | Secondary text on dark surfaces |
| `--color-accent` | `#B45309` | Primary accent / CTA color (amber-700) |
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

`::selection` uses `rgba(180, 83, 9, 0.14)` (accent at 14% opacity).

When a context cannot read CSS custom properties (meta tags, third-party JS widgets, native mobile), hardcode the raw hex value and leave a comment noting which token it maps to.

### Typography

| Role | Font Stack | Usage |
| --- | --- | --- |
| Display | `'Newsreader', Georgia, 'Times New Roman', serif` | Hero headings, section headings, pull quotes |
| Sans (body) | `'Outfit', system-ui, -apple-system, sans-serif` | Body text, default font |
| Mono | `'IBM Plex Mono', 'Menlo', monospace` | Labels, badges, buttons, metadata |

**Font loading — load these from Google Fonts or self-host:**
- Newsreader: italic + weight 300–700, optical size 6–72
- Outfit: weight 300–700
- IBM Plex Mono: 400, 500, 600 (regular + italic for each)

### Type Scale

| Token | Size | Usage |
| --- | --- | --- |
| `--fs-micro` | `9px` | Micro labels (decorative pseudo-labels) |
| `--fs-label-sm` | `10px` | Category labels |
| `--fs-label` | `11px` | Mono labels, badges, credentials |
| `--fs-mono` | `12px` | Buttons, small mono text, attribution |
| `--fs-sm` | `14px` | Secondary / supporting text |
| `--fs-body-sm` | `15px` | Descriptions, list items |
| `--fs-body` | `16px` | Default body copy |
| `--fs-body-lg` | `17px` | Lead paragraphs |
| `--fs-body-xl` | `18px` | Hero body, service titles |
| `--fs-title-faq` | `19px` | FAQ question text |
| `--fs-title-sm` | `20px` | Card headlines, block titles |
| `--fs-title` | `22px` | Section subtitles, testimonial quotes |
| `--fs-title-lg` | `24px` | Step/card titles |
| `--fs-display-number` | `64px` | Decorative large numbers |

Base typographic rules:
- `h1`–`h4` use the display font with `-0.02em` tracking. `h3`/`h4` are weight 500.
- `p` and `li` default to `--color-text-muted`.

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
| `--ease-emphasized` | `cubic-bezier(0.16, 1, 0.3, 1)` | Fade-in entrance animations |
| `--ease-standard` | `ease-out` | Hover/press transitions |

Always respect `prefers-reduced-motion: reduce` — disable entrance animations and smooth scrolling.

## 3) UI Patterns

These are the recurring visual patterns in the design system. Implement them using whatever component/styling approach your framework provides. The descriptions below define the *visual spec* — not a specific CSS class you must use.

### Section Header
A section is introduced by an **accent-colored mono label** (uppercase, `11px`, `0.1em` tracking) followed by a **display-font heading** (`clamp(30px, 4.5vw, 48px)`, weight 400, `-0.025em` tracking). The heading has a short amber underline rule below it (`32px` wide, `1.5px` thick, `20px` gap).

### Primary Button
Mono font, `12px`, uppercase, `0.04em` tracking, weight 500. Amber background (`--color-accent`), white text, `15px 32px` padding, `2px` border-radius. Hover darkens to `--color-accent-hover`. Active scales to `0.98`. Transition: `120ms ease-out`.

### Dash List
An unordered list with no bullets. Each item is prefixed by an em-dash (`\2013`) in the accent color at 60% opacity, offset `20px` from the left.

### Data Label
Any element can display a decorative micro label above its content. The label is mono, `9px`, weight 600, `0.06em` tracking, uppercase, accent-colored. Implement via `::before` pseudo-element with a `data-label` attribute, or as a discrete label component — whatever fits the framework.

### Fade-in Entrance
Elements enter the viewport by translating up `20px` and fading from `opacity: 0` to `1` over `0.8s` using the emphasized easing curve. A configurable delay supports staggered sequences. Implementation typically uses an `IntersectionObserver`; use whatever scroll-animation primitive your framework provides (e.g. `framer-motion`, `useInView`, CSS `@starting-style`).

### Page Frame
The standard page structure is: nav at top, hero as first section, alternating background colors (`--color-bg` / `--color-bg-elevated`) for subsequent sections, a dark (`--color-bg-invert`) contact or CTA section near the bottom, and a dark footer.

## 4) Composition Rules

- **Tokens are the contract.** All color, spacing, type, and motion values come from tokens. Never introduce ad-hoc hex values, magic-number sizes, or one-off font stacks.
- **Typographic hierarchy is fixed:** display serif for headings/statements, sans for body, mono for metadata/labels/buttons. Do not mix these roles.
- **Accent is intentional.** Use `--color-accent` for CTAs, section labels, dividers, callout borders, and key highlights. It should feel earned, not decorative. Don't over-apply it.
- **Border-radius is minimal:** `2px` for buttons and inputs, `4px` max for cards/containers. No large radii or pill shapes.
- **Section headings always get the amber underline rule.**
- **Content/copy should be centralized** in a data file or CMS — not hardcoded in templates. This makes it possible to port the same design to a different product by swapping the content layer.

## 5) Adapting to a Component Library

When using an existing component library (shadcn/ui, Radix, MUI, etc.):

1. **Map tokens into the library's theme system.** For shadcn/Tailwind, this means extending `tailwind.config` with the brand colors, fonts, and spacing under semantic names, or mapping directly to shadcn's CSS variable conventions (e.g. `--primary` = `--color-accent`, `--background` = `--color-bg`).
2. **Override default radii.** Most libraries default to large radii. Set the base radius to `2px`.
3. **Override default fonts.** Set the sans font to Outfit, the serif/display font to Newsreader, and the mono font to IBM Plex Mono.
4. **Don't fight the library's component structure.** Use its Button, Card, Input, etc. components — but restyle them to match the tokens above. The goal is brand consistency, not pixel-perfect reproduction of a specific CSS class.
5. **Preserve the grain overlay** if feasible. It's a fixed `body::before` pseudo-element with a fractal-noise SVG background and `mix-blend-mode: multiply`. In frameworks with a root layout, this is straightforward. If it causes z-index issues with modals/overlays, reduce its `z-index` or skip it.
6. **`<meta name="theme-color">` should be `#F8F5F0`** (matches `--color-bg`). This cannot read CSS vars, so hardcode it.

## 6) Guardrails

- Do not introduce colors outside the palette. If a new shade is genuinely needed, derive it from an existing base and add it to the token set.
- Do not use rounded/pill button shapes or large border-radii. The system is deliberately squared-off.
- Do not use the display font for body text or the sans font for headings.
- Do not apply the accent color to large surface areas (full-width backgrounds, hero gradients). It is a highlight color, not a surface color.
- Respect reduced-motion preferences in all animation implementations.
