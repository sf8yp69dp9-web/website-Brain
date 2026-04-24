# Website Brain — Werkzeugkoffer

Langfristiges Toolkit, um aus einem 1-Shot-Prompt (`prompt.md`) eine komplette cinematische Landing-Page zu bauen.

## Struktur

```
website Brain/
├── prompt.md              # DER Mega-Prompt (HEILIG, nicht verändern)
├── template/              # fertiges Vite+React+TS Boilerplate
├── scripts/               # ffmpeg Frame-Extraktion (Bash + Node WASM)
└── docs/                  # Usage, Placeholder-Beispiele, Checklisten
```

## Workflow (neues Projekt starten)

1. `template/` in den neuen Projektordner kopieren.
2. Source-Video nach `input/source.mp4` legen.
3. Frames extrahieren:
   ```bash
   bash ../scripts/extract-frames.sh 30 jpg
   ```
   (Parameter = FPS und Extension)
4. `src/lib/constants.ts` – `FRAME_COUNT` eintragen (Output aus Schritt 3).
5. `src/lib/content.ts` – Copy, Services, Testimonials, FAQ etc. befüllen.
6. `npm install && npm run dev`.

## Werkzeugkasten (Tech-Stack)

Laut `prompt.md` (non-negotiable):
- Vite + React 18 + TypeScript
- Tailwind CSS v4 (mit `@theme`)
- shadcn/ui (Button, Accordion)
- Framer Motion (`motion/react`)
- lucide-react
- `@fontsource/*`

Hero-Interaktion: Scroll-gescrubbte Canvas-Frame-Sequence (Apple AirPods Pro Pattern).

## Docs

- [docs/USAGE.md](docs/USAGE.md) — Schritt-für-Schritt-Anleitung.
- [docs/PLACEHOLDER_EXAMPLES.md](docs/PLACEHOLDER_EXAMPLES.md) — Beispiele pro Placeholder.
- [docs/CHECKLIST.md](docs/CHECKLIST.md) — Pre-Ship-Verification.
