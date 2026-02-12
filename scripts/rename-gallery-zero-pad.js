/**
 * Rename single-digit gallery images to two-digit (1.jpg -> 01.jpg, etc.)
 * so cPanel and other lexicographic sorts show numeric order.
 * Run from project root: node scripts/rename-gallery-zero-pad.js
 */

const fs = require("fs");
const path = require("path");

const galleryDir = path.join(process.cwd(), "public", "gallery");

// Rename in reverse order (9 down to 1) to avoid overwriting
for (let n = 9; n >= 1; n--) {
  const extList = [".jpg", ".jpeg", ".png", ".webp"];
  for (const ext of extList) {
    const oldName = `${n}${ext}`;
    const newName = `${String(n).padStart(2, "0")}${ext}`;
    const oldPath = path.join(galleryDir, oldName);
    const newPath = path.join(galleryDir, newName);
    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      console.log(`${oldName} -> ${newName}`);
    }
  }
}

console.log("Done.");
