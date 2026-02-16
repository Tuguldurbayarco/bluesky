#!/usr/bin/env python3
"""
Make favicon circular: logo fits inside circle (no crop), circle filled with
background color, outside circle transparent.
"""
from pathlib import Path

from PIL import Image, ImageDraw

ROOT_DIR = Path(__file__).resolve().parent.parent
APP_ICON_PATH = ROOT_DIR / "src" / "app" / "icon.ico"
PUBLIC_FAVICON_PATH = ROOT_DIR / "public" / "favicon.ico"

# Background color inside the circle (R, G, B)
BG_COLOR = (255, 255, 255)


def make_circular_favicon_frame(frame: Image.Image, bg_color: tuple) -> Image.Image:
    """Place logo inside a circle with filled background; no crop of logo."""
    w, h = frame.size
    size = min(w, h)
    frame = frame.convert("RGBA")

    # Create canvas: filled circle with bg color, rest transparent
    out = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(out)
    cx, cy = w / 2, h / 2
    r = size / 2
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=bg_color + (255,))

    # Scale logo to fit inside circle (no crop) - use most of the circle
    scale = (size * 0.9) / max(frame.width, frame.height)
    new_w = max(1, int(round(frame.width * scale)))
    new_h = max(1, int(round(frame.height * scale)))
    logo_scaled = frame.resize((new_w, new_h), Image.Resampling.LANCZOS)
    paste_x = int(cx - new_w / 2)
    paste_y = int(cy - new_h / 2)
    out.paste(logo_scaled, (paste_x, paste_y), logo_scaled)

    # Circular mask: outside circle -> transparent
    mask = Image.new("L", (w, h), 0)
    draw_mask = ImageDraw.Draw(mask)
    draw_mask.ellipse((cx - r, cy - r, cx + r, cy + r), fill=255)
    out.putalpha(Image.composite(out.split()[3], Image.new("L", (w, h), 0), mask))
    return out


def main() -> None:
    img = Image.open(APP_ICON_PATH)
    frames = []
    if hasattr(img, "ico") and hasattr(img.ico, "entry"):
        for idx in range(len(img.ico.entry)):
            frame = img.ico.frame(idx)
            frames.append(make_circular_favicon_frame(frame, BG_COLOR))
    else:
        frames = [make_circular_favicon_frame(img, BG_COLOR)]

    sizes = [(f.size[0], f.size[1]) for f in frames]
    for path in (APP_ICON_PATH, PUBLIC_FAVICON_PATH):
        path.parent.mkdir(parents=True, exist_ok=True)
        frames[0].save(
            path,
            format="ICO",
            sizes=sizes,
            append_images=frames[1:] if len(frames) > 1 else [],
        )
    print("Favicon saved to src/app/icon.ico and public/favicon.ico")


if __name__ == "__main__":
    main()
