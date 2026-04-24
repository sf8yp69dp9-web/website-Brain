# Cinematic Landing — Project Template

Premium single-page marketing site with scroll-scrubbed frame-sequence hero.
Vite + React 18 + TS + Tailwind v4 + shadcn/ui + Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

## Hero frame-sequence (REQUIRED for the hero to render)

The hero renders a canvas that swaps frames per scroll position. You need to
extract those frames from a source video before the site will look right.

### 1. Drop your source video

```
input/source.mp4        # 5–15s, ≥1080p, ideally a slow cinematic shot
```

### 2. Extract frames (pick one)

**Option A — local ffmpeg (fastest):**
```bash
bash ../scripts/extract-frames.sh 30 jpg
# Output: public/frames/frame_0001.jpg … frame_NNNN.jpg
```

**Option B — no ffmpeg (WASM):**
```bash
npm i -D @ffmpeg/ffmpeg @ffmpeg/util
node ../scripts/extract-frames.mjs 30 jpg
```

### 3. Update the frame count

Open `src/lib/constants.ts` and paste the count the script printed:

```ts
export const FRAME_COUNT = 240; // ← replace with your count
```

### 4. Optional — convert to WebP

~40% smaller payload, same visual quality:

```bash
for f in public/frames/*.jpg; do
  cwebp -q 82 "$f" -o "${f%.jpg}.webp" && rm "$f"
done
```

Then in `constants.ts`: `export const FRAME_EXT = "webp" as const;`

### Size warning

Vercel Hobby tier: 25 MB per file, 100 MB per deployment. If `du -sh public/frames`
exceeds 20 MB, convert to WebP or lower the FPS.

## Content editing

**Every piece of copy lives in one file:** `src/lib/content.ts`.

Change:
- `LANG` — `"fr-CH"` or `"en-US"`; drives IS_FR flag used in headings.
- `BRAND` — name, tagline, logo path.
- `NAV_ITEMS`, `CTA` — nav links, primary CTA.
- `HERO` — badge, headline (2–5 words), sub, button labels.
- `PARTNERS` — 5–6 trusted-by logos (rendered as italic display type).
- `SERVICES` — exactly 6 entries (bento needs 6 cells).
- `REASONS` — exactly 4 entries.
- `PROCESS_STEPS` — 3–4 entries.
- `STATS` — exactly 4 entries, `value` string may include `+`, `%`, `yrs` etc.
- `TESTIMONIALS` — ≥6 entries.
- `FAQ_ITEMS` — 5–8 entries.
- `CTA_SECTION` — final beat headline, sub, pricing CTA label.
- `FOOTER_LINKS`, `COPYRIGHT`.

## Visual editing

**Palette:** `src/index.css` top — four HSL triplets (`--ink`, `--cream`, `--ochre`, `--terra`).

**Fonts:** `src/index.css` imports — swap the `@fontsource/*` packages and
update `--font-display` / `--font-body` in both `:root` and `@theme`.

**Liquid-glass:** lives in `src/index.css` `@layer components`. Do not replace
with regular borders — the `::before` mask is the visual signature.

## Background videos

`STATS_BG_VIDEO` and `CTA_SECTION.bgVideo` in `content.ts` are `.mp4` or
`.m3u8` URLs. For `.m3u8` you need `hls.js` — install and wire it if you use HLS.

## Verification checklist

See [../docs/CHECKLIST.md](../docs/CHECKLIST.md).

## Build

```bash
npm run build
npm run preview
```
