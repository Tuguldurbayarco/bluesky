"use client";

import Link from "next/link";
import { isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./GroupToursHome.module.css";

interface GroupTourItem {
  tourKey: string;
  href: string;
  imageSrc: string;
  title: string;
}

interface GroupToursHomeProps {
  locale?: string;
  sectionTitle: string;
  tours: GroupTourItem[];
}

const GroupToursHome = ({ locale, sectionTitle, tours }: GroupToursHomeProps) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;

  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  return (
    <section className={styles.group_tours_section}>
      <div className={styles.group_tours_inner}>
        <Link href={`/${validLocale}/tours`} className={styles.group_tours_title_link}>
          <h2 className={styles.group_tours_title}>{sectionTitle}</h2>
        </Link>
        <div className={styles.group_tours_grid}>
        {tours.map((tour) => (
          <Link
            key={tour.tourKey}
            href={addLocaleToHref(tour.href)}
            className={styles.group_tour_square}
          >
            <div
              className={styles.group_tour_image}
              style={{ backgroundImage: `url(${tour.imageSrc})` }}
            >
              <div className={styles.group_tour_overlay}>
                <span className={styles.group_tour_text}>{tour.title}</span>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </section>
  );
};

export default GroupToursHome;
