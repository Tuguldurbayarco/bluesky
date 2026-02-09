import Image from "next/image";
import Link from "next/link";
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import ScrollDownHint from "@/components/UI/ScrollDownHint";
import TourCard from "@/components/UI/TourCard";
import "../../../../../../components/UI/button.css";
import styles from "../../tours.module.css";

const WinterTours = ({ params: { locale } }: { params: { locale: string } }) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);

  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  const winterTours = [
    {
      id: 1,
      tourKey: "centralWinter",
      src: "/tours/tour-central-winter/day1.jpg",
      href: "/tours/winter/central"
    },
    {
      id: 2,
      tourKey: "gobiWinter",
      src: "/tours/tour-gobi-winter/day1.jpg",
      href: "/tours/winter/gobi"
    },
    {
      id: 3,
      tourKey: "khuvsgulWinter",
      src: "/tours/tour-khuvsgul-winter/day5.jpg",
      href: "/tours/winter/khuvsgul"
    },
    {
      id: 4,
      tourKey: "khuvsgulTaiga6Days",
      src: "/tours/tour-khuvsgul-taiga-6days/day1.jpg",
      href: "/tours/winter/khuvsgul-taiga-6days"
    },
    {
      id: 5,
      tourKey: "khuvsgulTaiga5Days",
      src: "/tours/tour-khuvsgul-taiga-5days/day1.jpg",
      href: "/tours/winter/khuvsgul-taiga-5days"
    }
  ];

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "1492 / 721.5",
          marginTop: 100,
        }}
      >
        <Image
          src="/travel-tools/winter.webp"
          alt="Winter Tours"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          priority
        />
        <ScrollDownHint lightBackground />
      </div>
      <div className={styles.tours_and_events_margin_top}>
        <div className="visibility_area" style={{ padding: "2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h2 className="pageTitle" style={{ textAlign: "center", marginBottom: "1rem" }}>
              {t("WinterTours.title")}
            </h2>
            <p className="pageDescription" style={{ textAlign: "center" }}>
              {t("WinterTours.description")}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
            {winterTours.map((tour) => (
              <TourCard
                key={tour.id}
                locale={validLocale as Locale}
                tourKey={tour.tourKey}
                imageSrc={tour.src}
                tourHref={tour.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterTours;
