#!/usr/bin/env python3
"""
Generate a circular favicon from public/brand/since.jpg.
Center-crops to square (no stretch), applies circular mask, outputs favicon.ico.
"""
from pathlib import Path

from PIL import Image

SCRIPT_DIR = Path(__file__).resolve().parent
ROOT_DIR = SCRIPT_DIR.parent
SRC_PATH = ROOT_DIR / "public" / "brand" / "since.jpg"
OUT_PATH = ROOT_DIR / "public" / "favicon.ico"


def center_crop_to_square(img: Image.Image) -> Image.Image:
    """Crop image to center square (no stretch)."""
    w, h = img.size
    size = min(w, h)
    left = (w - size) // 2
    top = (h - size) // 2
    return img.crop((left, top, left + size, top + size))


def apply_circular_mask(img: Image.Image) -> Image.Image:
    """Apply circular mask: transparent outside circle, no stretch."""
    size = img.size[0]
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    pixels = img.load()
    center = (size - 1) / 2
    radius_sq = (size / 2) ** 2
    for y in range(size):
        for x in range(size):
            dx = x - center
            dy = y - center
            if dx * dx + dy * dy > radius_sq:
                pixels[x, y] = (0, 0, 0, 0)
    return img


def main() -> None:
    img = Image.open(SRC_PATH)
    square = center_crop_to_square(img)
    square = square.convert("RGBA")

    sizes = [16, 32]
    icons = []
    for s in sizes:
        resized = square.resize((s, s), Image.Resampling.LANCZOS)
        circular = apply_circular_mask(resized)
        icons.append(circular)

    # Save as ICO: primary image (largest), then append other sizes
    ico_sizes = [(s, s) for s in sizes]
    icons[1].save(  # 32x32 as primary
        OUT_PATH,
        format="ICO",
        sizes=ico_sizes,
        append_images=[icons[0]],  # 16x16
    )
    print("Favicon written to public/favicon.ico (circular, from since.jpg)")


if __name__ == "__main__":
    main()
