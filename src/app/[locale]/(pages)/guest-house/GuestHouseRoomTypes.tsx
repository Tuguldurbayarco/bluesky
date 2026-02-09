import styles from "./guest-house.module.css";


const BunkBedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 128 128" fill="currentColor" aria-hidden>
    <path d="M104 87v5H24v-5a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8zm0-40a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v5h80zm16-19v88a4 4 0 0 1-8 0v-12H16v12a4 4 0 0 1-8 0V12a4 4 0 0 1 8 0v44h96V28a4 4 0 0 1 8 0zM16 96h96V64H16z" />
  </svg>
);

const FullBedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 128 128" fill="currentColor" aria-hidden>
    <path d="M120 88v8a4 4 0 0 1-8 0v-8H16v8a4 4 0 0 1-8 0v-8a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8zM20 52a4 4 0 0 1 4-4h80a4 4 0 0 1 4 4v8h8v-8a12 12 0 0 0-12-12H24a12 12 0 0 0-12 12v8h8zm40 20a8 8 0 0 0-8-8H20a8 8 0 0 0-8 8v4h48zm16-8a8 8 0 0 0-8 8v4h48v-4a8 8 0 0 0-8-8z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
  </svg>
);

interface GuestHouseRoomTypesProps {
  title: string;
  rooms: { name: string; bed: string; bunk: boolean }[];
  locale?: string;
}

const BOOKING_ANCHOR = "#booking";

export default function GuestHouseRoomTypes({ title, rooms }: GuestHouseRoomTypesProps) {
  return (
    <section className={styles.room_types_section} aria-labelledby="guest-house-room-types">
      <h2 id="guest-house-room-types" className={styles.room_types_header}>
        {title}
      </h2>
      <ul className={styles.room_types_list}>
        {rooms.map((room, i) => (
          <li key={i} className={styles.room_types_item}>
            <span className={styles.room_types_arrow} aria-hidden>
              <ArrowIcon />
            </span>
            <div className={styles.room_types_content}>
              <a href={BOOKING_ANCHOR} className={styles.room_types_link}>
                {room.name}
              </a>
              <div className={styles.room_types_bed_row}>
                <span className={styles.room_types_bed_text}>{room.bed}</span>
                <span className={styles.room_types_bed_icon}>
                  {room.bunk ? <BunkBedIcon /> : <FullBedIcon />}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

