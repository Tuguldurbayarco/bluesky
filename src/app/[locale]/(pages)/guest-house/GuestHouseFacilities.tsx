import styles from "./guest-house.module.css";

const iconColor = "#16a34a";
const iconSize = 24;

const icons = [
  /* Free Wifi */
  <svg key="wifi" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>,
  /* Airport shuttle */
  <svg key="shuttle" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M2 10h2" />
    <path d="M20 10h2" />
    <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <path d="M4 14v4" />
    <path d="M20 14v4" />
    <path d="M8 18h8" />
    <path d="M9 6V4" />
    <path d="M15 6V4" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>,
  /* Free parking - P in circle */
  <svg key="parking" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8h3a2 2 0 0 1 0 4h-3v5" />
  </svg>,
  /* Family rooms */
  <svg key="family" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  /* Non-smoking rooms */
  <svg key="nosmoke" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M12 12v4" />
    <path d="M17 12h.01" />
    <path d="M7 12h.01" />
    <path d="M7 8c0-1.5.5-2.5 1.5-3.5S10 3 12 3v5" />
    <path d="M17 8c0-1.5-.5-2.5-1.5-3.5S14 3 12 3v5" />
  </svg>,
  /* Bar - cocktail glass */
  <svg key="bar" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M8 3h8l-2 8h-4L8 3z" />
    <path d="M6 21h12" />
    <path d="M12 11v10" />
  </svg>,
];

interface GuestHouseFacilitiesProps {
  title: string;
  labels: string[];
}

export default function GuestHouseFacilities({ title, labels }: GuestHouseFacilitiesProps) {
  return (
    <section className={styles.facilities_section} aria-labelledby="guest-house-facilities">
      <h2 id="guest-house-facilities" className={styles.facilities_title}>
        {title}
      </h2>
      <ul className={styles.facilities_list}>
        {labels.map((label, i) => (
          <li key={i} className={styles.facilities_item}>
            <span className={styles.facilities_icon}>{icons[i]}</span>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
