# Agent-Hinweise (Kundenkopie dieses Templates)

## Schnellpfad

1. **`WEBSITE-PLANE.md`** und **`GOOGLE.url.txt`** (eine Zeile URL) ins **Repository-Root** legen — Vorlagen unter **`../inputs/`**.
2. Daten aus Google Maps in **`src/lib/content.ts`** (`GOOGLE_PLACE`, `BRAND`, `HERO`, …) und **`index.html`** übernehmen. Schritt-für-Schritt: **[GOOGLE-INGEST.md](GOOGLE-INGEST.md)** (liegt in `docs/`).

## Hero

- **`public/hero.mp4`** (H.264) + **`public/hero.webm`** + **`hero-poster.webp`** — siehe **`../scripts/encode-hero.ps1`**.

## Optional

- Cursor-Regel: **`../.cursor/rules/website-brain.mdc`** bei Bedarf ins Kundenprojekt nach `.cursor/rules/` kopieren.
