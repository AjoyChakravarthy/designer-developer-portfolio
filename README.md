# Designer & Developer Portfolio

A dark, editorial portfolio for frontend developers and designers. Built with **Next.js 15** (App Router), **TypeScript**, **GSAP** animations, and **Tailwind CSS**. Fully component-based and content-driven — update your data files, not your components.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** GSAP + ScrollTrigger
- **Fonts:** Archivo (display) + JetBrains Mono (monospace) via `next/font`

## Features

- Scroll-driven animations with reduced-motion support
- Content-driven architecture — all copy lives in `data/` and `content/`
- Sections: Hero, Designs, Work, About, Skills, Experience, Contact
- AI chat widget (scripted replies, ready to wire to an LLM)
- Admin page at `/admin` for managing projects and designs via JSON
- Case study pages at `/work/[slug]`
- Dark theme with acid-lime and hot-pink accents

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm typecheck  # Run TypeScript type checking
```

## Project Structure

```
app/
├── page.tsx                # Main page — assembles all sections
├── layout.tsx              # Root layout with fonts and metadata
├── work/[slug]/page.tsx    # Dynamic case study pages
├── admin/page.tsx          # Content admin panel
├── api/                    # API routes for projects & designs
└── globals.css

components/
├── sections/               # Hero, Work, Designs, About, Skills, Experience, Contact
├── layout/                 # Navbar, Footer
├── chat/                   # AI chat widget
└── ui/                     # Reveal, Marquee, OutlinedText, ProjectCard, etc.

data/                       # All site content — edit these to customize
├── site.ts                 # Name, role, nav, socials, hero copy
├── projects.ts             # Work project definitions
├── designs.ts              # Design work definitions
├── about.ts                # Bio, stats, experience, contact copy
├── skills.ts               # Skill groups
└── chat.ts                 # Chat greeting, suggestions, canned replies

content/                    # JSON data files (editable via /admin)
├── projects.json
└── designs.json
```

## Customization

All content lives in the `data/` folder. No component edits needed to personalize the site.

| File | Controls |
|---|---|
| `data/site.ts` | Name, role, email, nav items, socials, hero copy |
| `data/about.ts` | About blurb, stats, experience roles, contact copy |
| `data/skills.ts` | Six skill categories rendered as a grid |
| `data/chat.ts` | Chat greeting, suggested questions, canned replies |
| `content/projects.json` | Work project cards (also editable via `/admin`) |
| `content/designs.json` | Design work cards (also editable via `/admin`) |

### Images

Drop files in `public/images/` and reference them in data files (e.g. `"/images/portrait.jpg"`). Empty image paths render a gradient placeholder.

## Design Tokens

Defined in `tailwind.config.ts`:

- **Primary accent:** Lime `#c4f82a`
- **Secondary accent:** Flush pink `#ff2e7e`
- **Surfaces:** Ink (near-black with faint green cast)
- **Text tiers:** Chalk (off-white) → Ash (muted) → Smoke (dimmest)

## Animation

GSAP is registered once in `lib/gsap.ts`. Reusable animation components:

- `Reveal` — scroll-triggered fade/slide-up wrapper with optional stagger
- `OutlinedText` — display text with scroll-scrubbed fill
- `Marquee` — infinite horizontal ribbon

All animations respect `prefers-reduced-motion` via `gsap.matchMedia()`.

## License

MIT
