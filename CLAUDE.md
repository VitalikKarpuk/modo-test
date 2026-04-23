@AGENTS.md

# Modo — Site Design System

## Product context
Building a product-showcase site for **Modo** — enterprise blockchain data platform (Canton-native, multichain-positioned). Primary audience: enterprises (banks, fintechs, validator operators). Primary CTA: demo / contact sales. Reference site: https://dev.modo.link/

Existing product surfaces (link from the new site):
- https://cc.modo.link/mainnet/home — public explorer
- https://app.modo.link/ — super-app
- https://private-demo.modo.link/ — private explorer demo
- https://docs.modo.link/ — docs

---

## Colors

Brand anchor `#F48656` (coral, from logo). Logo wordmark color `#1B2021`. Use these as the two fixed points — everything else derives.

### Coral scale (primary / accent)
```
--coral-50:  #FEF1EA
--coral-100: #FDE0D0
--coral-200: #FBC0A1
--coral-300: #F9A17B
--coral-400: #F78E64
--coral-500: #F48656   /* brand */
--coral-600: #DC6A3A   /* hover */
--coral-700: #B2522C
--coral-800: #7F3B20
--coral-900: #4D2314
```

### Ink scale (neutrals, cool-black with a blue hint)
```
--ink-0:   #FFFFFF
--ink-50:  #F7F8F8
--ink-100: #EEEFEF
--ink-200: #DADDDE
--ink-300: #B4B8BA
--ink-400: #858B8E
--ink-500: #5A6063   /* secondary text */
--ink-600: #3D4345
--ink-700: #2A2F31
--ink-800: #1B2021   /* logo black, primary text on light */
--ink-900: #0A0D12
--ink-950: #020309   /* deep bg for dark hero */
```

### Semantic
```
--success: #2BB673
--warning: #E8B14A
--danger:  #E5484D
--info:    #4A90E2
```

### Surface tokens

**Dark mode (default on landing / hero / enterprise sections):**
```
--bg:           #020309
--bg-elevated:  #0F1316
--bg-card:      #171B1E
--border:       #232829
--border-hover: #2E3537
--text:         #F7F8F8
--text-muted:   #B4B8BA
--text-dim:     #858B8E
--accent:       #F48656
--accent-hover: #F9A17B
--accent-glow:  rgba(244, 134, 86, 0.14)
```

**Light mode:**
```
--bg:           #FFFFFF
--bg-elevated:  #F7F8F8
--bg-card:      #FFFFFF
--border:       #EEEFEF
--border-hover: #DADDDE
--text:         #1B2021
--text-muted:   #5A6063
--text-dim:     #858B8E
--accent:       #F48656
--accent-hover: #DC6A3A
--accent-glow:  rgba(244, 134, 86, 0.10)
```

### Usage rules
- Coral is accent, NOT body color. Use for: primary CTA, active nav, key numbers/metrics, logo marks, focus rings, link hovers. Never for long text runs.
- Dark mode is the default. Light mode is for docs-style pages and optional toggle.
- Maintain AA contrast: coral-500 on ink-950 = ok for large text, use coral-300 for body-size links on dark bg.
- Never use pure `#000` or pure `#FFF` on dark surfaces — use `ink-950` and `ink-50`.

---

## Typography

### Families
- **Whyte** (ABC Dinamo — commercial licence required) — display: H1–H3, hero, large callouts. Load via `next/font/local` from `public/fonts/`. Weights used: 400, 500, 700. Variant **Whyte Inktrap** reserved for hero H1 only.
- **Inter** (Google Fonts, OFL) — body, UI, nav, buttons, labels. Load via `next/font/google`. Weights used: 400, 500, 600.
- **JetBrains Mono** (Google Fonts, OFL) — code, tx hashes, API endpoints, raw numeric data (latency, block numbers). Weight 400, 500.

### Next.js setup
Load in `app/layout.tsx` using `next/font/google` + `next/font/local`, expose via CSS variables `--font-display`, `--font-sans`, `--font-mono`. Wire them in Tailwind v4 `@theme` block.

### Scale (1.25 modular)
```
--text-xs:  12px / 16
--text-sm:  14px / 20
--text-base:16px / 24   /* body default */
--text-lg:  18px / 28
--text-xl:  20px / 28
--text-2xl: 24px / 32
--text-3xl: 32px / 40
--text-4xl: 40px / 48
--text-5xl: 56px / 64
--text-6xl: 72px / 80
--text-7xl: 96px / 100  /* hero only */
```

### Roles
- Hero H1: Whyte Inktrap 400–500, 72–96px, tracking -0.025em
- Section H2: Whyte 500, 40–56px, tracking -0.02em
- Sub H3: Whyte 500, 24–32px, tracking -0.015em
- Eyebrow / all-caps label: Inter 500, 12–14px, tracking +0.08em, uppercase
- Body: Inter 400, 16–18px, tracking 0, line-height 1.55
- UI / nav / buttons: Inter 500, 14–16px, tracking 0
- Mono (hashes, endpoints, metrics): JetBrains Mono 400–500

### Rules
- No font-family mixing inside a single headline.
- Numbers in "proof" positions (42ms, 99.99%, $X indexed) use JetBrains Mono 500 — gives the data a credible, technical feel.
- Never use Whyte below 20px.

---

## Assets
- Full logo: `public/logo.svg` (1190×205, coral + ink-800)
- Icon only: `public/logoIcon.svg`
- Wordmark only: `public/logoText.svg`
- PNG fallback: `public/logo.png`
