# Site Map

**Figma File Key**: `S5gmHfd896rwkeo8DkN0PU`
**Source URL**: `https://www.figma.com/design/S5gmHfd896rwkeo8DkN0PU/INclusive-%7C-Web-Design?node-id=1722-7256`
**Container Max-Width**: `1440px` (content 1248px, padding 96px)

## Pages

### Page: Home (single landing page)
Node ID: `1722:7256` (frame "Landing page", 1440 × 6350)

#### Sections (top → bottom)

| # | Section | Node ID | Component | Background | Notes |
|---|---------|---------|-----------|------------|-------|
| 1 | Navbar | `1722:7257` | Navbar | dark / transparent | Logo + 3 links + outline CTA; 0.5px gold bottom border |
| 2 | Hero | `1847:750` | Hero | dark `#21232B` | Heading, eyebrow, body, solid CTA, info bar (date/time/place/duration), speaker photo w/ gold angular frame + countdown chips |
| 3 | Benefits | `1847:814` | Benefits | dark (gradient strip) | 4 benefit items with icons |
| 4 | Who is it for | `1722:7360` | WhoIsItFor | dark | Image left + 8 bullet rows right |
| 5 | CTA | `1722:7462` | CtaBanner | accent/gold band | First call-to-action banner |
| 6 | What you will learn | `1722:7470` | WhatYouWillLearn | dark | Header + 6 icon cards (3×2 grid) |
| 7 | Speaker | `1847:841` | Speaker | dark | Speaker info left (Евелин) + portrait right |
| 8 | Metrics | `1722:7585` | Metrics | dark | Logo + image + 3 metric rows |
| 9 | CTA | `1847:868` | CtaBanner | accent/gold band | Second call-to-action banner |
| 10 | Footer | `1722:7696` | Footer | dark | Links, address, contact, copyright, large faint wordmark |

## Shared Components

| Component | Source Node | Description |
|-----------|-------------|-------------|
| Button | `1722:7290` (outline), `1847:765` (solid) | `variant: solid \| outline`; padding 13×48px, gold |
| Eyebrow label | `1847:755` | Diamond marker + uppercase 16px text, optional gold border box |
| Section divider | `1847:763` | 25×2px gold mark above section headings |

## Layout notes

- Every section: full-width outer wrapper + `.container` inner (max-width 1248px, centered, 6em inline padding).
- Decorative background rectangles/gradients span full viewport width and sit behind content.
- Background wordmark "INCLUSIVE" is large, faint, behind hero/learn sections.
