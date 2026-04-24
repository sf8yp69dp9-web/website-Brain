# Website Brain — finale Struktur (Stand 2026)

Der Werkzeugkoffer ist in zwei **klare Einstiege** geteilt: **Default = Video-Hero + Google**, optional **Cinematic Scrub** (Canvas-Frames) per Doku + `prompt.md`.

Die **Vite-App** (`package.json`, `src/`, `public/`, `index.html`, …) liegt im **Repository-Root**, damit Hosting (z. B. **Vercel**) und CI das Projekt ohne Unterordner-Root erkennen.

```
Website Brain ultra/
├── AGENTS.md                      # Cursor / Agent — Plane + Google → content.ts
├── README.md                      # Überblick + Workflow
├── package.json, vite.config.ts, tsconfig*.json, index.html, postcss.config.js, components.json
├── vercel.json
├── prompt.md                      # Mega-Prompt: Frame-Scrub-Spezifikation (Legacy-Hero-Pfad)
├── finale struktur.md             # diese Datei
├── inputs/
│   ├── README.md
│   ├── WEBSITE-PLANE.template.md  # → optional: WEBSITE-PLANE.md ins Root
│   └── GOOGLE.url.example.txt     # → GOOGLE.url.txt (eine Zeile URL)
├── docs/
│   ├── FAST-TRACK.md
│   ├── GOOGLE-INGEST.md
│   ├── MODE-CINEMATIC-SCRUB.md
│   ├── USAGE.md
│   ├── CHECKLIST.md
│   ├── SITE-README.md
│   └── SITE-AGENTS.md
├── scripts/
│   ├── extract-frames.sh
│   ├── extract-frames.mjs
│   └── encode-hero.ps1            # WebM + MP4 + Poster (Windows / ffmpeg)
├── .cursor/rules/
│   └── website-brain.mdc          # optional ins Kundenprojekt kopieren
├── public/
│   ├── logo.svg
│   ├── hero.webm, hero.mp4, …
│   └── frames/                    # nur für Scrub-Modus nötig
└── src/
    ├── App.tsx, main.tsx, index.css
    ├── lib/content.ts, icons.ts, utils.ts
    └── components/
        ├── Hero.tsx               # Default: <video>
        ├── GoogleRating.tsx, FindUsMap.tsx
        ├── ScrubSequence.tsx      # optionaler Modus
        └── … (Navbar, Bento, FAQ, …)
```

## Workflow dieses Repo (Default)

1. **`npm install`** im Root.
2. Optional: `WEBSITE-PLANE.md` + `GOOGLE.url.txt` anlegen (Vorlagen unter `inputs/`).
3. `docs/GOOGLE-INGEST.md` befolgen → `content.ts` + `index.html`.
4. Hero encoden (`scripts/encode-hero.ps1` o. Ä.) → `public/`.
5. `npm run dev` → `docs/CHECKLIST.md` (Default-Abschnitt).

## Workflow Scrub-Modus

Siehe `docs/MODE-CINEMATIC-SCRUB.md` + Frame-Scripts + Anpassung von `Hero.tsx`.
