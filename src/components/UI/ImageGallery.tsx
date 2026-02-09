"use client";

import { useState, useRef } from "react";
import Lightbox from "./Lightbox";
import type { GalleryMediaItem } from "@/lib/gallery";
import styles from "./ImageGallery.module.css";

interface ImageGalleryProps {
  media: GalleryMediaItem[];
}

const ImageGallery = ({ media }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  if (media.length === 0) {
    return (
      <div className={styles.empty_gallery}>
        <p>No images or videos available yet. Media will appear here once added to the gallery folder.</p>
      </div>
    );
  }

  const handleVideoRef = (el: HTMLVideoElement | null, index: number) => {
    videoRefs.current[index] = el;
  };

  const handleVideoMouseEnter = (index: number) => {
    const video = videoRefs.current[index];
    if (video) video.play().catch(() => {});
  };

  const handleVideoMouseLeave = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <>
      <div className={styles.gallery_grid}>
        {media.map((item, index) => (
          <div
            key={`${item.type}-${item.src}-${index}`}
            className={styles.gallery_item}
            onClick={() => setSelectedIndex(index)}
          >
            <div className={styles.image_wrapper}>
              {item.type === "video" ? (
                <>
                  <video
                    ref={(el) => handleVideoRef(el, index)}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className={styles.gallery_image}
                    onMouseEnter={() => handleVideoMouseEnter(index)}
                    onMouseLeave={() => handleVideoMouseLeave(index)}
                  />
                  <div
                    className={styles.video_overlay}
                    onMouseEnter={() => handleVideoMouseEnter(index)}
                    onMouseLeave={() => handleVideoMouseLeave(index)}
                  >
                    <div className={styles.play_icon} aria-hidden>
                      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="24" cy="24" r="22" />
                        <path d="M20 16v16l12-8-12-8z" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className={styles.gallery_image}
                  />
                  <div className={styles.image_overlay} />
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          media={media}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i ?? 0))
          }
          onNext={() =>
            setSelectedIndex((i) =>
              i !== null && i < media.length - 1 ? i + 1 : i ?? 0
            )
          }
        />
      )}
    </>
  );
};

export default ImageGallery;
