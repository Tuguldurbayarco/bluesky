"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/UI/Lightbox";
import type { LightboxImage } from "@/components/UI/Lightbox";
import styles from "./guest-house.module.css";

interface GuestHouseRoomTypesProps {
  title: string;
  rooms: { name: string; bed: string; bunk: boolean }[];
  locale?: string;
}

const ROOM_IMAGES: LightboxImage[] = [
  { src: "/guest-house/room1.jpg", alt: "Room 1" },
  { src: "/guest-house/room2.jpg", alt: "Room 2" },
  { src: "/guest-house/room3.jpg", alt: "Room 3" },
  { src: "/guest-house/room4.jpg", alt: "Room 4" },
  { src: "/guest-house/room5.jpg", alt: "Room 5" },
];

export default function GuestHouseRoomTypes({ title }: GuestHouseRoomTypesProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <section className={styles.room_types_section} aria-labelledby="guest-house-room-types">
        <h2 id="guest-house-room-types" className={styles.room_types_header}>
          {title}
        </h2>
        <div className={styles.room_images_row}>
          {ROOM_IMAGES.map((room, i) => (
            <button
              key={i}
              type="button"
              className={styles.room_image_container}
              onClick={() => setSelectedIndex(i)}
              aria-label={`View ${room.alt}`}
            >
              <div className={styles.room_image_wrapper}>
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className={styles.room_image}
                />
                <div className={styles.room_label}>{room.alt}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <Lightbox
          images={ROOM_IMAGES}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev))
          }
          onNext={() =>
            setSelectedIndex((prev) =>
              prev !== null && prev < ROOM_IMAGES.length - 1 ? prev + 1 : prev
            )
          }
        />
      )}
    </>
  );
}

