#!/usr/bin/env python3
"""
Remove background from public/favicon.ico (make transparent) and overwrite it.
Treats white and corner pixels as background.
"""
from pathlib import Path

from PIL import Image

ROOT_DIR = Path(__file__).resolve().parent.parent
ICO_PATH = ROOT_DIR / "public" / "favicon.ico"


def remove_background(img: Image.Image, tolerance: int = 40) -> Image.Image:
    """Make white/near-white pixels transparent."""
    img = img.convert("RGBA")
    pixels = img.load()
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            if r > 255 - tolerance and g > 255 - tolerance and b > 255 - tolerance:
                pixels[x, y] = (255, 255, 255, 0)
    return img


def main() -> None:
    img = Image.open(ICO_PATH)
    frames = []
    if hasattr(img, "ico") and hasattr(img.ico, "entry"):
        for idx in range(len(img.ico.entry)):
            frame = img.ico.frame(idx)
            frame = remove_background(frame)
            frames.append(frame)
    else:
        frames = [remove_background(img.convert("RGBA"))]

    sizes = [(f.size[0], f.size[1]) for f in frames]
    frames[0].save(
        ICO_PATH,
        format="ICO",
        sizes=sizes,
        append_images=frames[1:] if len(frames) > 1 else [],
    )
    print("Favicon background removed; saved to public/favicon.ico")


if __name__ == "__main__":
    main()
