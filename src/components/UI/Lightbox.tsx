"use client";

import { useEffect, useRef, useMemo } from "react";
import styles from "./Lightbox.module.css";
import type { GalleryMediaItem } from "@/app/[locale]/(pages)/gallery/page";

export type LightboxImage = { src: string; alt: string };

interface LightboxProps {
  media?: GalleryMediaItem[];
  images?: LightboxImage[];
  selectedIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ media: mediaProp, images, selectedIndex, onClose, onPrev, onNext }: LightboxProps) => {
  const media = useMemo(
    () =>
      mediaProp ??
      (images?.map((img) => ({ type: "image" as const, src: img.src, alt: img.alt })) ?? []),
    [mediaProp, images]
  );
  const hasPrev = selectedIndex > 0;
  const hasNext = selectedIndex < media.length - 1;
  const item = media[selectedIndex];
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && hasPrev) {
        onPrev();
      } else if (e.key === "ArrowRight" && hasNext) {
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, hasPrev, hasNext, onClose, onPrev, onNext]);

  // Auto-play video when it becomes the selected item (open or switch)
  useEffect(() => {
    const video = videoRef.current;
    if (item?.type === "video" && video) {
      video.play().catch(() => {});
    }
  }, [selectedIndex, item?.type, item?.src]);

  if (!item) return null;

  return (
    <div className={styles.lightbox} onClick={onClose}>
      <button
        type="button"
        className={styles.lightbox_close}
        onClick={onClose}
        aria-label="Close"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      {hasPrev && (
        <button
          type="button"
          className={styles.lightbox_prev}
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      {hasNext && (
        <button
          type="button"
          className={styles.lightbox_next}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
      <div
        className={styles.lightbox_content}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            ref={videoRef}
            src={item.src}
            controls
            autoPlay
            playsInline
            className={styles.lightbox_video}
            onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className={styles.lightbox_image}
          />
        )}
        <div className={styles.lightbox_counter}>
          {selectedIndex + 1} / {media.length}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
