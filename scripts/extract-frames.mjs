#!/usr/bin/env node
// WASM fallback for extract-frames.sh — use when ffmpeg is not installed.
//
// Setup (in the project root):
//   npm i -D @ffmpeg/ffmpeg @ffmpeg/util
//
// Run:
//   node ../scripts/extract-frames.mjs 30 jpg
//
// Output: public/frames/frame_0001.<ext> … frame_NNNN.<ext>

import { mkdir, readFile, writeFile, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";

const FPS = Number(process.argv[2] ?? 30);
const EXT = (process.argv[3] ?? "jpg").toLowerCase();
const SRC = process.env.SRC ?? "input/source.mp4";
const OUT = "public/frames";

if (!existsSync(SRC)) {
  console.error(`Source video not found at ${SRC}. Drop your video at input/source.mp4.`);
  process.exit(1);
}

let FFmpeg, fetchFile;
try {
  ({ FFmpeg } = await import("@ffmpeg/ffmpeg"));
  ({ fetchFile } = await import("@ffmpeg/util"));
} catch {
  console.error("Missing dependency. Install with:");
  console.error("  npm i -D @ffmpeg/ffmpeg @ffmpeg/util");
  process.exit(1);
}

await mkdir(OUT, { recursive: true });

const existing = await readdir(OUT).catch(() => []);
await Promise.all(
  existing
    .filter((f) => /^frame_\d{4}\.(jpg|webp)$/.test(f))
    .map((f) => rm(resolve(OUT, f)))
);

const ff = new FFmpeg();
ff.on("log", ({ message }) => {
  if (message.includes("frame=")) process.stdout.write(`\r${message.trim()}`);
});

console.log("Loading ffmpeg.wasm…");
await ff.load();

console.log(`Extracting ${FPS}fps frames from ${SRC} → ${OUT}/*.${EXT}`);
const input = await fetchFile(resolve(SRC));
await ff.writeFile("input.mp4", input);
await ff.exec([
  "-i", "input.mp4",
  "-vf", `fps=${FPS},scale='min(1920,iw)':'-2':flags=lanczos`,
  "-q:v", "3",
  `frame_%04d.${EXT}`,
]);

const outFiles = (await ff.listDir("/"))
  .filter((e) => /^frame_\d{4}\.(jpg|webp)$/.test(e.name))
  .map((e) => e.name)
  .sort();

for (const name of outFiles) {
  const data = await ff.readFile(name);
  const path = resolve(OUT, name);
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, data);
}

console.log(`\n\nDone. Frames: ${outFiles.length}`);
console.log(`→ Open src/lib/constants.ts and set FRAME_COUNT = ${outFiles.length}`);
