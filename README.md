# Website Brain — Werkzeugkoffer

Wiederverwendbares Toolkit für **Premium-Landingpages** (Vite + React 18 + TypeScript + Tailwind v4). Die **Vite-App liegt im Repository-Root** (Referenzstand **Barist**): Video-Hero (WebM + **MP4 für Safari**), Google-Bewertung, Karten-Embed, Bento, FAQ — alles zentral in **`src/lib/content.ts`**.

**Deployment:** Root enthält `package.json` — [Vercel](https://vercel.com) erkennt das Projekt als **Vite** ohne Sonderkonfiguration (Root Directory leer lassen). Build: `npm run build`, Output: `dist/`.

## Ordnerstruktur

```
Website Brain ultra/
├── package.json, vite.config.ts, tsconfig*.json, index.html  # Vite-App (Root)
├── src/                         # React-App
├── public/                      # statische Assets (Hero, Logo, …)
├── AGENTS.md                    # Kurzbrief für Cursor / Coding-Agenten
├── README.md                    # diese Datei
├── vercel.json                  # Framework-Hinweis für Vercel
├── prompt.md                    # Mega-Prompt: Cinematic FRAME-SCRUB (Legacy)
├── inputs/                      # Vorlagen pro Kundenprojekt
│   ├── README.md
│   ├── WEBSITE-PLANE.template.md
│   └── GOOGLE.url.example.txt
├── docs/
│   ├── FAST-TRACK.md
│   ├── GOOGLE-INGEST.md
│   ├── MODE-CINEMATIC-SCRUB.md
│   ├── USAGE.md
│   ├── SITE-README.md           # technischer Site-Überblick (ehem. template/README)
│   ├── SITE-AGENTS.md           # Kundenkurzbrief (ehem. template/AGENTS)
│   └── …
├── scripts/
│   ├── extract-frames.sh / .mjs
│   └── encode-hero.ps1
└── .cursor/rules/
    └── website-brain.mdc
```

## Workflow — dieses Repo

1. **`npm install`** im Root → **`npm run dev`**.
2. **`inputs/WEBSITE-PLANE.template.md`** bei Bedarf als **`WEBSITE-PLANE.md`** ins Root kopieren und ausfüllen.
3. **`GOOGLE.url.txt`** im Root: **eine Zeile** Google-Maps-URL (siehe `inputs/GOOGLE.url.example.txt`).
4. Cursor mit **`AGENTS.md`** + **`docs/GOOGLE-INGEST.md`** füttern.
5. Hero-Assets: **`scripts/encode-hero.ps1`** oder eigene Pipeline → `public/hero.webm`, `public/hero.mp4`, Poster.
6. Checkliste: [docs/CHECKLIST.md](docs/CHECKLIST.md) (Abschnitt Default).

## Separates Kundenprojekt

Wenn du **nur** die Site ohne Brain-`docs/`/`inputs/` willst: Ordner **`src/`**, **`public/`** und alle Root-Konfigurationsdateien (`package.json`, Vite/TS/Tailwind/shadcn) in einen neuen Ordner kopieren und dort `npm install` ausführen. Vorlagen aus **`inputs/`** bei Bedarf mitnehmen.

## Zwei Modi

| Modus | Hero | Doku |
|--------|------|------|
| **Default** | `<video>` WebM + MP4, `HERO_VIDEO` in `content.ts` | [docs/FAST-TRACK.md](docs/FAST-TRACK.md) |
| **Cinematic Scrub** | Canvas + `public/frames/*` | [prompt.md](prompt.md), [docs/MODE-CINEMATIC-SCRUB.md](docs/MODE-CINEMATIC-SCRUB.md) |

## Tech

- Vite, React 18, TS, Tailwind v4 `@theme`, shadcn/ui (Button, Accordion), `motion`, lucide-react, `@fontsource/*`.
