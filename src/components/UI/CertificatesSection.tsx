"use client";

import { useState } from "react";
import Lightbox, { type LightboxImage } from "./Lightbox";
import styles from "./CertificatesSection.module.css";

interface CertificatesSectionProps {
  images: LightboxImage[];
}

const CertificatesSection = ({ images }: CertificatesSectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className={styles.certificates_grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.certificate_item}
            onClick={() => setSelectedIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedIndex(index);
              }
            }}
            aria-label={`View certificate ${index + 1}`}
          >
            <div className={styles.image_wrapper}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={styles.certificate_image}
              />
              <div className={styles.image_overlay} aria-hidden />
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i ?? 0))
          }
          onNext={() =>
            setSelectedIndex((i) =>
              i !== null && i < images.length - 1 ? i + 1 : i ?? 0
            )
          }
        />
      )}
    </>
  );
};

export default CertificatesSection;
