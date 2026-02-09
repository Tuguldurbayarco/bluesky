"use client";

import Link from "next/link";
import Image from "next/image";
import { isValidLocale, defaultLocale, createTranslator, type Locale } from "@/lib/i18n";
import styles from "./GallerySection.module.css";

export interface GallerySectionImage {
  src: string;
  alt: string;
}

interface GallerySectionProps {
  locale?: string;
  images: GallerySectionImage[];
}

const GallerySection = ({ locale, images }: GallerySectionProps) => {
  const validLocale = (isValidLocale(locale ?? "en") ? (locale ?? "en") : defaultLocale) as Locale;
  const t = createTranslator(validLocale);

  const galleryHref = `/${validLocale}/gallery`;

  return (
    <section className={styles.gallery_section} aria-labelledby="gallery-section-title">
      <Link href={galleryHref} id="gallery-section-title" className={styles.gallery_title_link}>
        <h2 className={styles.gallery_title}>{t("Gallery.sectionTitle")}</h2>
      </Link>
      <div className={styles.gallery_grid}>
        {images.map((img, index) => (
          <Link key={`${img.src}-${index}`} href={galleryHref} className={styles.gallery_image_link}>
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className={styles.gallery_image}
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
