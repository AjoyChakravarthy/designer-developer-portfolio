# Portfolio Content Checklist

Everything that needs replacing before this goes live. Work through each section top to bottom.

---

## 1. Identity & Site Meta
**File:** `data/site.ts`

| Field | Current (mock) | What to put |
|---|---|---|
| `name` | Ajoy Chakravarthy | Your full name |
| `role` | Frontend Developer / Designer | Your job title |
| `location` | Brooklyn, NY | Your city |
| `email` | hello@ajoychakravarthy.design | Your real email address |
| `timezone` | America/New_York | Your IANA timezone (e.g. `Asia/Kolkata`) |
| `timezoneLabel` | EST | Short label (e.g. `IST`) |
| `status` | Available '26 | Your current availability |

**Socials** (also in `data/site.ts`):

| Field | Current (mock) |
|---|---|
| GitHub URL | https://github.com |
| LinkedIn URL | https://linkedin.com |
| Twitter URL | https://twitter.com |
| Dribbble URL | https://dribbble.com |

---

## 2. Hero Section
**File:** `data/site.ts` → `hero` object

| Field | Current (mock) | What to put |
|---|---|---|
| `titleTop` | Design | First word of your big headline |
| `titleBottom` | Engineer | Second word (renders as outlined text) |
| `intro` | "I'm Ajoy Chakravarthy, a frontend developer..." | Your one-line bio sentence |

---

## 3. About Section
**File:** `data/about.ts` → `about` object

| Field | Current (mock) | What to put |
|---|---|---|
| `marquee` | Design Systems, Framer Motion, Three.js, TypeScript | 4–6 words/phrases that describe your work |
| `marqueeHighlight` | Framer Motion | Which marquee word renders in lime |
| `headline` | "I build interfaces that move with intent." | Your personal headline |
| `headlineHighlight` | interfaces | Which word in the headline renders in lime |
| `portrait` | _(empty)_ | Path to your photo, e.g. `/images/portrait.jpg` |
| `paragraphs[0]` | "I'm a frontend developer and designer with eight years..." | First about paragraph |
| `paragraphs[1]` | "Currently a Senior Design Engineer building tools..." | Second about paragraph |

**Stats** (4 boxes shown under the text):

| Label | Current value | What to put |
|---|---|---|
| Years | 8+ | Your years of experience |
| Delivered | 40+ | Number of projects shipped |
| Design Awards | 12 | Your award count (or swap label entirely) |
| Pixel Obsessions | ∞ | Keep or replace with a real stat |

**Portrait image:**
Drop your photo at `public/images/portrait.jpg` (or any path), then set `portrait: "/images/portrait.jpg"` in `data/about.ts`.

---

## 4. Experience Section
**File:** `data/about.ts` → `experience` array + `experienceIntro`

| Field | Current (mock) |
|---|---|
| `experienceIntro` | "A career built at the seams..." |
| Role 1 period | 2022 — Now |
| Role 1 title | Senior Design Engineer |
| Role 1 org | Plane (creative tools) · Remote / NYC |
| Role 1 description | "Leading the design-engineering function..." |
| Role 2 period | 2019 — 2022 |
| Role 2 title | Design Engineer |
| Role 2 org | Ledger.fi · New York, NY |
| Role 2 description | "Built the data-dense investing dashboard..." |
| Role 3 period | 2016 — 2019 |
| Role 3 title | Freelance Designer + Developer |
| Role 3 org | Independent · Worldwide |
| Role 3 description | "Editorial sites, brand identities..." |

Add or remove role objects as needed — the section renders however many you provide.

---

## 5. Skills Section
**File:** `data/skills.ts`

| Field | Current (mock) | What to put |
|---|---|---|
| `skillsHeading.intro` | "End-to-end from blank Figma to shipped production..." | Your skills intro sentence |
| Group 1 — Engineering | React, TypeScript, Node.js, REST/GraphQL, Vite | Your actual tech stack |
| Group 2 — Design | Figma, Design Systems, Type & Color Theory... | Your design tools |
| Group 3 — Motion & 3D | Framer Motion, GSAP, Three.js, WebGL, Lottie | Keep/remove/replace |
| Group 4 — Systems | Tailwind, Radix, Tokens, Storybook, Monorepos | Keep/remove/replace |
| Group 5 — Performance | Core Web Vitals, Edge Rendering, Lighthouse... | Keep/remove/replace |
| Group 6 — Accessibility | WCAG 2.2, Semantic HTML, Screen Reader QA... | Keep/remove/replace |

You can rename group titles, swap icons (`code` `palette` `sparkle` `layers` `bolt` `accessibility`), and add/remove items freely.

---

## 6. Contact Section
**File:** `data/about.ts` → `contact` object

| Field | Current (mock) | What to put |
|---|---|---|
| `titleTop` | Let's make | Customize or keep |
| `titleMid` | something | Customize or keep |
| `titleBottom` | Loud. | Customize or keep (renders with lime highlight) |
| `blurb` | "Looking for a senior frontend, design engineer..." | Your real availability blurb |
| `responseNote` | Responds within 48 hrs | Your actual response time |

---

## 7. Work Projects
**File:** `content/projects.json`

Four cards currently use fully fictional projects. Replace each entry with a real one.

Each project object:
```json
{
  "slug": "unique-url-slug",
  "title": "Project Name",
  "role": "Your role on it",
  "year": "2025",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "accent": "lime",
  "size": "lg",
  "href": "https://live-url.com",
  "image": "https://your-screenshot-url.jpg",
  "caseStudy": {
    "overview": "What the project is...",
    "challenge": "The problem you solved...",
    "solution": "How you solved it...",
    "outcome": "Result / impact..."
  }
}
```

- `accent`: `lime` | `pink` | `chalk`
- `size`: `lg` (big hero card) | `md` (small) | `wide` (full-width short)
- `caseStudy` is optional — only add it if you want a dedicated case study page at `/work/[slug]`
- You can manage this visually at `/admin` → Work Projects tab

---

## 8. Design Work
**File:** `content/designs.json`

Four cards currently use fictional design pieces. Replace with real work.

Each design object:
```json
{
  "slug": "unique-url-slug",
  "title": "Design Name",
  "category": "Brand Identity",
  "year": "2025",
  "tools": ["Figma", "Illustrator"],
  "accent": "lime",
  "size": "lg",
  "href": "https://figma-or-behance-link.com",
  "image": "https://your-mockup-url.jpg"
}
```

- `category`: freeform — Brand Identity, UI / UX, Typography, Print, Illustration, etc.
- `tools`: list of software used
- `href`: link to Figma, Behance, Dribbble, or any preview
- You can manage this visually at `/admin` → Design Work tab

---

## 9. AI Chat (Ask Ajoy.AI)
**File:** `data/chat.ts`

The chat widget has scripted answers. Update them to reflect your real work and personality.

| Field | What to update |
|---|---|
| `chatConfig.greeting` | Opening message the bot says |
| `suggestions[*].label` | The 4 quick-reply chips shown to visitors |
| `cannedByKey.specialise` | Answer to "what do you specialise in" |
| `cannedByKey.projects` | Answer listing your real best projects |
| `cannedByKey.available` | Your real availability + email address |
| `cannedByKey.philosophy` | Your real design/engineering philosophy |
| Email in `keywordMatch` (line ~45) | Change `hello@ajoychakravarthy.design` to your email |

---

## 10. SEO / Metadata
**File:** `app/layout.tsx`

| Field | Current (mock) | What to put |
|---|---|---|
| `metadataBase` | https://ajoychakravarthy.design | Your real domain |
| `metadata.description` | "Frontend developer & designer crafting..." | Your real SEO description |
| `openGraph.description` | "Portfolio of a frontend developer..." | Your real OG description |

The `title` field auto-pulls from `site.name` and `site.role` in `data/site.ts` — update those and this updates automatically.

---

## Quick-start order

If you want to do this in the fastest possible order:

1. `data/site.ts` — name, email, location, timezone, socials
2. `content/projects.json` — your real work (or use `/admin`)
3. `content/designs.json` — your real designs (or use `/admin`)
4. `data/about.ts` — bio paragraphs, stats, experience roles
5. `public/images/portrait.jpg` — add your photo
6. `data/skills.ts` — trim/update skill lists
7. `data/chat.ts` — update scripted chat answers
8. `app/layout.tsx` — real domain + SEO copy
