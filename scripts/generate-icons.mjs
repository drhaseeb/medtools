import sharp from "sharp";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(dir, "../public/icons");
mkdirSync(outDir, { recursive: true });

const jobs = [
  { src: "icon-source.svg", out: "icon-192.png", size: 192 },
  { src: "icon-source.svg", out: "icon-512.png", size: 512 },
  { src: "icon-maskable-source.svg", out: "icon-maskable-512.png", size: 512 },
  { src: "icon-source.svg", out: "apple-touch-icon.png", size: 180 },
];

for (const job of jobs) {
  await sharp(path.resolve(dir, job.src))
    .resize(job.size, job.size)
    .png()
    .toFile(path.resolve(outDir, job.out));
  console.log(`wrote ${job.out}`);
}
