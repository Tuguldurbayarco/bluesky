import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./guest-house.module.css";
import GuestHouseGallery from "./GuestHouseGallery";
import GuestHouseFacilities from "./GuestHouseFacilities";
import GuestHouseRoomTypes from "./GuestHouseRoomTypes";

const GuestHouse = ({ params: { locale } }: { params: { locale: string } }) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);

  return (
    <div>
      <div className="visibility_area">
        <header className={styles.guest_house_welcome}>
          <h1 className={styles.guest_house_title}>{t("GuestHouse.welcomeTitle")}</h1>
          <p className={styles.guest_house_description}>
            {t("GuestHouse.welcomeDescription")}
          </p>
        </header>
        <GuestHouseGallery />
        <section className={styles.about_section} aria-labelledby="guest-house-about">
          <h2 id="guest-house-about" className={styles.about_title}>
            {t("GuestHouse.aboutTitle")}
          </h2>
          <div className={styles.about_content}>
            <p className={styles.about_item}>
              <strong>{t("GuestHouse.comfortableTitle")}</strong>{" "}
              {t("GuestHouse.comfortableText")}
            </p>
            <p className={styles.about_item}>
              <strong>{t("GuestHouse.facilitiesTitle")}</strong>{" "}
              {t("GuestHouse.facilitiesText")}
            </p>
            <p className={styles.about_item}>
              <strong>{t("GuestHouse.locationTitle")}</strong>{" "}
              {t("GuestHouse.locationText")}
            </p>
            <p className={styles.about_item}>
              <strong>{t("GuestHouse.satisfactionTitle")}</strong>{" "}
              {t("GuestHouse.satisfactionText")}
            </p>
          </div>
        </section>
        <GuestHouseFacilities
          title={t("GuestHouse.facilitiesSectionTitle")}
          labels={[
            t("GuestHouse.facilityFreeWifi"),
            t("GuestHouse.facilityAirportShuttle"),
            t("GuestHouse.facilityFreeParking"),
            t("GuestHouse.facilityFamilyRooms"),
            t("GuestHouse.facilityNonSmoking"),
          ]}
        />
        <GuestHouseRoomTypes
          title={t("GuestHouse.roomTypeSectionTitle")}
          rooms={[
            { name: t("GuestHouse.room1Name"), bed: t("GuestHouse.room1Bed"), bunk: true },
            { name: t("GuestHouse.room2Name"), bed: t("GuestHouse.room2Bed"), bunk: true },
            { name: t("GuestHouse.room3Name"), bed: t("GuestHouse.room3Bed"), bunk: true },
            { name: t("GuestHouse.room4Name"), bed: t("GuestHouse.room4Bed"), bunk: false },
            { name: t("GuestHouse.room5Name"), bed: t("GuestHouse.room5Bed"), bunk: true },
          ]}
        />
        <section id="booking" className={styles.booking_section}>
          <div className={styles.booking_links}>
            <a
              href="https://www.booking.com/hotel/mn/nomuun-town.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.booking_link}
              aria-label={t("GuestHouse.bookingLinkAria")}
            >
              {t("GuestHouse.bookingLinkText")}
            </a>
            <a
              href="https://www.trip.com/hotels/detail/?cityEnName=Ulaanbaatar&cityId=483&hotelId=130786269&checkIn=2026-02-09&checkOut=2026-02-10&adult=2&children=0&crn=1&ages=&cu="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.booking_link_trip}
              aria-label={t("GuestHouse.tripLinkAria")}
            >
              {t("GuestHouse.tripLinkText")}
            </a>
          </div>
          <div className={styles.map_container}>
            <iframe
              src="https://www.google.com/maps?q=Eternal+Sky+Tour+%26+Guesthouse,+Ulaanbaatar&hl=en&z=17&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eternal Sky Tour & Guesthouse Location"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuestHouse;
