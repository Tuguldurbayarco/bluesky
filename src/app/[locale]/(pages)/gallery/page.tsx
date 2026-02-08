import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import ImageGallery from "@/components/UI/ImageGallery";
import styles from "./gallery.module.css";
import fs from "node:fs";
import path from "node:path";

export type GalleryMediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const videoExtensions = new Set([".mp4"]);

const getGalleryMedia = async (): Promise<GalleryMediaItem[]> => {
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
};

const Gallery = async ({ params: { locale } }: { params: { locale: string } }) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  const media = await getGalleryMedia();

  return (
    <div>
      <div style={{position: "relative"}}>
        <img
          src='/gallery/gallery.jpg'
          alt='Gallery'
          width='100%'
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>{t("Gallery.pageTitle")}</h1>
        </div>
      </div>
      <div className='visibility_area' style={{textAlign: "center"}}>
        <h2 className="pageTitle" style={{marginTop: '8rem'}}>{t("Gallery.sectionTitle")}</h2>
        <p className="pageDescription" style={{marginBottom: '5rem'}}>
          {t("Gallery.pageDescription")}
        </p>
        <ImageGallery media={media} />
      </div>
    </div>
  );
}

export default Gallery;
