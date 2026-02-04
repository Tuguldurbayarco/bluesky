"use client";

import { useState } from "react";
import Lightbox, { type LightboxImage } from "./Lightbox";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: LightboxImage[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <div className={styles.empty_gallery}>
        <p>No images available yet. Images will appear here once added to the gallery folder.</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.gallery_grid}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.gallery_item}
            onClick={() => setSelectedIndex(index)}
          >
            <div className={styles.image_wrapper}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={styles.gallery_image}
              />
              <div className={styles.image_overlay} />
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

export default ImageGallery;
