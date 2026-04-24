#!/usr/bin/env bash
# Extract scroll-scrub frames from a source video.
#
# Usage (from the project root that contains /input/source.mp4):
#   bash scripts/extract-frames.sh [FPS] [EXT]
#
# Examples:
#   bash scripts/extract-frames.sh              # 30fps jpg
#   bash scripts/extract-frames.sh 24 webp      # 24fps webp
#
# Output: public/frames/frame_0001.<ext> … frame_NNNN.<ext>
# Finishes by printing the frame count — paste it into src/lib/constants.ts (FRAME_COUNT).

set -euo pipefail

FPS="${1:-30}"
EXT="${2:-jpg}"
SRC="${SRC:-input/source.mp4}"
OUT_DIR="public/frames"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg not found. Install it or use scripts/extract-frames.mjs (WASM fallback)." >&2
  exit 1
fi

if [[ ! -f "$SRC" ]]; then
  echo "Source video not found at $SRC" >&2
  echo "Drop your video at input/source.mp4 (or set SRC=path/to/video.mp4)." >&2
  exit 1
fi

mkdir -p "$OUT_DIR"
rm -f "$OUT_DIR"/frame_*.jpg "$OUT_DIR"/frame_*.webp

echo "Extracting frames from $SRC at ${FPS}fps → $OUT_DIR/*.$EXT"

ffmpeg -loglevel warning -stats -i "$SRC" \
  -vf "fps=${FPS},scale='min(1920,iw)':'-2':flags=lanczos" \
  -q:v 3 \
  "$OUT_DIR/frame_%04d.${EXT}"

COUNT=$(ls "$OUT_DIR" | grep -E "frame_[0-9]{4}\.${EXT}$" | wc -l | tr -d ' ')
SIZE=$(du -sh "$OUT_DIR" | cut -f1)

echo ""
echo "Done."
echo "Frames: $COUNT"
echo "Size:   $SIZE"
echo ""
echo "→ Open src/lib/constants.ts and set FRAME_COUNT = $COUNT"

if [[ "$EXT" != "webp" ]]; then
  echo ""
  echo "Tip: convert to WebP for ~40% smaller payload:"
  echo "  for f in $OUT_DIR/*.jpg; do cwebp -q 82 \"\$f\" -o \"\${f%.jpg}.webp\" && rm \"\$f\"; done"
  echo "  Then change FRAME_EXT to \"webp\" in constants.ts."
fi
