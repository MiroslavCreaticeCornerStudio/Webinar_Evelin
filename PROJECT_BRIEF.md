# Project Brief — INclusive Webinar Landing Page

**Auto-generated from Figma (Phase 0).**

- **Project**: INclusive — "Психология на големите резултати" (free live online training / webinar)
- **Type**: Single-page marketing landing page (dark theme), Bulgarian (Cyrillic) content
- **Framework**: Astro (static)
- **Figma file key**: `S5gmHfd896rwkeo8DkN0PU`
- **Source node**: `1722:7256` (frame "Landing page")
- **Design frame width**: 1440px → `--size-container-ideal: 1440`, content width 1248px → `--container-padding: 6em` (96px)
- **Language**: `lang="bg"`

## Brand Colors (Figma variables)

| Token | Hex | Usage |
|-------|-----|-------|
| 100 Gray | `#21232B` | Page background (dark) |
| 80 Gray | `#393C46` | Raised surfaces / metric chips |
| 40 Gray | `#D8DBDE` | Muted light text |
| 20 Gray | `#EDEFF1` | Light text variant |
| 10 Gray | `#F5F4EC` | Primary light text (cream) |
| 80 Gold | `#DBBD6B` | Primary accent (buttons, headings, borders) |
| 100 Gold | `#C4952D` | Deep gold (gradient end) |
| Gold Gradient | `#C4952D → #DBBD6B` | Decorative gradient |

## Typography

- **Display / headings**: **Le Havre** Regular (400), uppercase. Fallback: Montserrat.
  - H1 (hero): 56px, line-height 1.2
  - Hero subtitle: 36px, line-height 1.2
  - H2 section headings: 48px, line-height 1.2
  - H5: 24px, line-height 1.2
- **Body / UI**: **Futura PT** (Book = 400, Light = 300). Fallback: Montserrat.
  - Body: 20px, normal line-height
  - Nav / buttons: 18–20px
  - Eyebrow labels: 16px uppercase

> **⚠ Font licensing**: Le Havre and Futura PT are commercial fonts and are NOT bundled.
> The site currently renders with **Montserrat** (Google Fonts, full Cyrillic) as a
> stand-in. For pixel-exact type, drop licensed `Le Havre` / `Futura PT` web-font files
> into `src/styles/` and add `@font-face` rules — they are already first in the CSS font stack.

## Spacing & Layout

- Section horizontal padding: 96px (6em) — matches 1440/1248 frame
- Eyebrow → heading gap: 16px; heading block gaps: 32px / 60px
- Buttons: padding 13px 48px, square corners (radius 0), 1px gold border
  - Primary (solid): gold bg `#DBBD6B`, dark text `#21232B`
  - Secondary (outline): transparent bg, gold border, cream text

## Border radius

- Buttons & most containers: 0 (square)
- Speaker / content photos: rounded per section (verify per node)

## Special elements

- Hero: countdown chips (06 дни / 04 часа / 43 минути / 12 секунди) — **static numbers from Figma**, no live timer unless requested. Decorative gold angular frame behind speaker photo. Backdrop-blur info bar.
- Icons: Phosphor-style line icons (CalendarDots, Clock, MapPin, HourglassLow, UsersFour, ChatText, ListNumbers, ChartLine, TelevisionSimple, TrendUp).
- Decorative: thin gold divider marks (25×2px), diamond eyebrow markers, large faint background wordmark "INCLUSIVE".

## Components

- `BaseLayout` — head, fonts, global styles
- `Button` — `variant: "solid" | "outline"`
- Sections: Navbar, Hero, Benefits, WhoIsItFor, CtaBanner (×2), WhatYouWillLearn, Speaker, Metrics, Footer

## Animations

None in the static design → **no animations/transitions added** (per pipeline rule), aside from minimal button hover affordance.
