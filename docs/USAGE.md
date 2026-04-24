# Usage — vom Werkzeugkoffer zur fertigen Website

## 1. Neues Projekt starten

```bash
# Template in neuen Projektordner kopieren
cp -r "website Brain/template" "Projekte/kunde-xy"
cd "Projekte/kunde-xy"
```

## 2. Dependencies installieren

```bash
npm install
```

## 3. Source-Video hinterlegen

```bash
mkdir -p input
cp ~/Desktop/hero-shot.mp4 input/source.mp4
```

Ideale Specs:
- 5–15 Sekunden
- ≥ 1080p (1920×1080 oder höher)
- Langsame, cinematische Kamerabewegung (kein Schnitt, keine harten Cuts)
- Matching Aspect Ratio: 16:9 oder 21:9

## 4. Frames extrahieren

```bash
bash ../../website\ Brain/scripts/extract-frames.sh 30 jpg
```

Output wird in `public/frames/` geschrieben. Script gibt am Ende den Frame-Count aus.

## 5. Frame-Count eintragen

`src/lib/constants.ts`:

```ts
export const FRAME_COUNT = 312; // exakt die Zahl aus Schritt 4
```

## 6. Content befüllen

`src/lib/content.ts` — alle Arrays durchgehen:

- `LANG` → `"fr-CH"` oder `"en-US"` (steuert IS_FR)
- `BRAND.name` / `BRAND.tagline`
- `NAV_ITEMS` — 4–5 Einträge
- `HERO.headline` — 2–5 Wörter (die Caps-Typographie ist dafür designed)
- `SERVICES` — **exakt 6** Einträge (Bento braucht 6 Zellen)
- `REASONS` — **exakt 4** Einträge
- `PROCESS_STEPS` — 3–4 Einträge
- `STATS` — **exakt 4** Einträge
- `TESTIMONIALS` — **mindestens 6** (sonst loopt die Marquee sichtbar)
- `FAQ_ITEMS` — 5–8 Einträge

## 7. Palette anpassen

`src/index.css` — die vier HSL-Triplets oben:

```css
--ink:    20 15% 9%;    /* Dark background */
--cream:  40 30% 90%;   /* Foreground text */
--ochre:  32 55% 65%;   /* Primary accent */
--terra:  14 55% 31%;   /* Secondary accent */
```

HSL-Triplets ohne `hsl()`-Wrapper, damit Tailwind `/alpha` unterstützt.

## 8. Fonts wechseln (optional)

`src/index.css` oben:

```css
@import "@fontsource/oswald/400.css"; /* → dein Display-Font */
@import "@fontsource/inter/400.css";  /* → dein Body-Font */
```

Plus in `:root` und `@theme`:
```css
--font-display: "Oswald", ...;
--font-body:    "Inter", ...;
```

Dann `npm i @fontsource/<new-font>` für jeden neuen Font.

## 9. Dev-Server starten

```bash
npm run dev
```

## 10. Checkliste vor Release

Siehe [CHECKLIST.md](CHECKLIST.md).
