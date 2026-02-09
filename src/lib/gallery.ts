import fs from "node:fs";
import path from "node:path";

export type GalleryMediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const videoExtensions = new Set([".mp4"]);

export async function getGalleryMedia(): Promise<GalleryMediaItem[]> {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const files = await fs.promises.readdir(galleryDir);

  const videos = files
    .filter((file) => videoExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => ({
      type: "video" as const,
      src: `/gallery/${file}`,
      alt: `Gallery video ${index + 1}`,
    }));

  const images = files
    .filter((file) => imageExtensions.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, index) => ({
      type: "image" as const,
      src: `/gallery/${file}`,
      alt: `Gallery image ${index + 1}`,
    }));

  return [...videos, ...images];
}

/** First 8 images only (excluding header image), for home page preview. */
export async function getGalleryPreviewImages(): Promise<{ src: string; alt: string }[]> {
  const media = await getGalleryMedia();
  const images = media.filter(
    (m): m is { type: "image"; src: string; alt: string } =>
      m.type === "image" && !m.src.toLowerCase().endsWith("gallery.jpg")
  );
  return images.slice(0, 8).map(({ src, alt }) => ({ src, alt }));
}
