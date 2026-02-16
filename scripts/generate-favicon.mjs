/**
 * Generates a circular favicon from public/brand/since.jpg.
 * Center-crops to square (no stretch), applies circular mask, outputs favicon.ico.
 */
import sharp from "sharp";
import toIco from "to-ico";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const srcPath = path.join(rootDir, "public/brand/since.jpg");
const outPath = path.join(rootDir, "public/favicon.ico");

// Create a circular alpha mask as RGBA buffer (white circle on transparent).
function createCircleMaskBuffer(size) {
  const center = (size - 1) / 2;
  const radius = size / 2;
  const buf = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = x - center;
      const dy = y - center;
      const inside = dx * dx + dy * dy <= radius * radius;
      const i = (y * size + x) * 4;
      buf[i] = 255;
      buf[i + 1] = 255;
      buf[i + 2] = 255;
      buf[i + 3] = inside ? 255 : 0;
    }
  }
  return buf;
}

async function main() {
  const image = sharp(srcPath);
  const meta = await image.metadata();
  const { width = 0, height = 0 } = meta;
  const size = Math.min(width, height);
  const left = Math.floor((width - size) / 2);
  const top = Math.floor((height - size) / 2);

  // Center-crop to square (no stretch).
  const square = await image
    .extract({ left, top, width: size, height: size })
    .ensureAlpha()
    .toBuffer();

  const sizes = [16, 32];
  const pngBuffers = [];

  for (const s of sizes) {
    const maskBuf = createCircleMaskBuffer(s);
    const maskPng = await sharp(maskBuf, {
      raw: { width: s, height: s, channels: 4 },
    })
      .png()
      .toBuffer();

    const circular = await sharp(square)
      .resize(s, s)
      .ensureAlpha()
      .composite([{ input: maskPng, blend: "dest-in" }])
      .png()
      .toBuffer();

    pngBuffers.push(circular);
  }

  const icoBuffer = await toIco(pngBuffers);
  fs.writeFileSync(outPath, icoBuffer);
  console.log("Favicon written to public/favicon.ico (circular, from since.jpg)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
