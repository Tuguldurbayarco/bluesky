"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/UI/Lightbox";
import type { LightboxImage } from "@/components/UI/Lightbox";
import styles from "./guest-house.module.css";

const GUEST_HOUSE_IMAGES: LightboxImage[] = [
  { src: "/guest-house/1.jpg", alt: "Guest house 1" },
  { src: "/guest-house/2.jpg", alt: "Guest house 2" },
  { src: "/guest-house/3.jpg", alt: "Guest house 3" },
  { src: "/guest-house/4.jpg", alt: "Guest house 4" },
  { src: "/guest-house/5.jpg", alt: "Guest house 5" },
  { src: "/guest-house/6.jpg", alt: "Guest house 6" },
  { src: "/guest-house/7.jpg", alt: "Guest house 7" },
  { src: "/guest-house/8.jpg", alt: "Guest house 8" },
];

export default function GuestHouseGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className={styles.gallery_layout}>
        <button
          type="button"
          className={styles.gallery_big}
          onClick={() => setSelectedIndex(0)}
          aria-label="View image 1"
        >
          <Image
            src={GUEST_HOUSE_IMAGES[0].src}
            alt={GUEST_HOUSE_IMAGES[0].alt}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className={styles.gallery_img}
          />
        </button>
        <button
          type="button"
          className={styles.gallery_medium_top}
          onClick={() => setSelectedIndex(1)}
          aria-label="View image 2"
        >
          <Image
            src={GUEST_HOUSE_IMAGES[1].src}
            alt={GUEST_HOUSE_IMAGES[1].alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.gallery_img}
          />
        </button>
        <button
          type="button"
          className={styles.gallery_medium_bottom}
          onClick={() => setSelectedIndex(2)}
          aria-label="View image 3"
        >
          <Image
            src={GUEST_HOUSE_IMAGES[2].src}
            alt={GUEST_HOUSE_IMAGES[2].alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={styles.gallery_img}
          />
        </button>
        {[3, 4, 5, 6, 7].map((i) => (
          <button
            key={i}
            type="button"
            className={styles.gallery_small}
            onClick={() => setSelectedIndex(i)}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={GUEST_HOUSE_IMAGES[i].src}
              alt={GUEST_HOUSE_IMAGES[i].alt}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className={styles.gallery_img}
            />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={GUEST_HOUSE_IMAGES}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
          }
          onNext={() =>
            setSelectedIndex((prev) =>
              prev !== null && prev < GUEST_HOUSE_IMAGES.length - 1 ? prev + 1 : prev
            )
          }
        />
      )}
    </>
  );
}
