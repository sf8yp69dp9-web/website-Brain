Ich werde den Werkzeugkasten als vollständiges Template aufbauen. Plan:

- `template/` – komplettes Vite+React+TS Boilerplate mit allen 9 Sektionen
- `scripts/` – ffmpeg Frame-Extraktion (bash + node)
- `docs/` – Anleitungen

Werkzeugkoffer ist komplett aufgebaut. Hier die finale Struktur:

```
website Brain/
├── README.md                              # Toolkit-Übersicht
├── prompt.md                              # (unverändert) Master-Prompt
├── docs/
│   ├── USAGE.md                           # Schritt-für-Schritt-Anleitung
│   ├── PLACEHOLDER_EXAMPLES.md            # Gut/Schlecht Beispiele je Placeholder
│   └── CHECKLIST.md                       # Pre-Ship Anti-Slop Checkliste
├── scripts/
│   ├── extract-frames.sh                  # ffmpeg Frame-Extraktion
│   └── extract-frames.mjs                 # WASM Fallback (kein ffmpeg nötig)
└── template/                              # Komplettes Vite+React+TS Boilerplate
    ├── package.json, vite.config.ts, tsconfig.json, index.html, .gitignore
    ├── components.json, postcss.config.js
    ├── public/{logo.svg, frames/.gitkeep}
    └── src/
        ├── App.tsx, main.tsx, index.css, vite-env.d.ts
        ├── lib/{utils, constants, content, icons}.ts
        └── components/
            ├── ui/{button, accordion}.tsx   # shadcn
            ├── ScrubSequence.tsx            # Canvas Frame-Scrub
            ├── BlurText.tsx                 # Word-stagger Animation
            └── {Navbar,Hero,ServicesBento,Pourquoi,Process,Stats,Testimonials,Faq,CtaFooter}.tsx
```

**Alle 9 Sektionen aus prompt.md sind implementiert**, mit allen Anti-Slop-Regeln, liquid-glass Utilities, Tailwind v4 `@theme`, Palette + Fonts, Motion-Patterns (BlurText, fade-up-on-view, Marquee, Scroll-Scrub).

**Workflow für neues Kundenprojekt:**

1. `template/` kopieren → `npm install`
2. Video nach `input/source.mp4` → `bash scripts/extract-frames.sh 30 jpg`
3. `FRAME_COUNT` in [constants.ts](template/src/lib/constants.ts) eintragen
4. Copy in [content.ts](template/src/lib/content.ts) befüllen
5. Palette in [index.css](template/src/index.css) tunen → `npm run dev`

