# Alex Carter — Portfolio

A dark, editorial **frontend-developer + designer** portfolio. Built with
**Next.js (App Router) + TypeScript**, animated with **GSAP + ScrollTrigger**,
styled with **Tailwind CSS**. Fully component-based and content-driven.

> All copy/data is placeholder — swap it in the `data/` folder. No component
> edits needed to change your name, projects, skills, experience, or socials.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

## Where to edit your content

| File                | Controls                                                |
| ------------------- | ------------------------------------------------------- |
| `data/site.ts`      | Name, role, email, nav, socials, hero copy, status bar  |
| `data/projects.ts`  | Work cards (title, role, year, tags, accent, image)     |
| `data/about.ts`     | About blurb, stats, marquee, **experience**, contact    |
| `data/skills.ts`    | The six skill groups                                    |
| `data/chat.ts`      | Concierge greeting, suggested questions, canned replies |

### Adding project / portrait images

Drop files in `public/images/` and set the path in the data file, e.g.
`image: "/images/verve.jpg"`. If left empty, a gradient placeholder renders
so nothing ever looks broken.

## Design tokens

Colors, fonts, and animations live in `tailwind.config.ts`:

- `lime` `#c4f82a` — primary accent · `flush` `#ff2e7e` — secondary
- `ink` — near-black surfaces · `chalk` / `ash` / `smoke` — text tiers
- Display font: **Archivo** · Mono font: **JetBrains Mono** (loaded via `next/font`)

## Animation

GSAP is registered once in `lib/gsap.ts`. Reusable pieces:

- `components/ui/Reveal.tsx` — scroll fade/slide-up wrapper (`stagger` optional)
- `components/ui/OutlinedText.tsx` — outlined display text with scroll-scrubbed fill
- `components/ui/Marquee.tsx` — infinite ribbon

All animations are gated behind `prefers-reduced-motion` via `gsap.matchMedia()`.

## Wiring the AI concierge to a real LLM (later)

The chat is currently a UI shell with scripted replies. To make it live:

1. Add `app/api/chat/route.ts` that calls your model with a system prompt
   describing Alex.
2. In `data/chat.ts`, replace the body of `getReply()` with the `fetch("/api/chat")`
   call shown in the TODO comment there.

The chat UI already awaits `getReply()` and handles loading, so **no component
changes are required.**

## Notes

- `app/page.tsx` assembles the sections — reorder or remove freely.
- Section `id`s (`#work`, `#about`, …) match `navItems` hrefs in `data/site.ts`.
- The contact form is a UI shell; wire a real endpoint in `Contact.tsx`
  (`handleSubmit`).
```
