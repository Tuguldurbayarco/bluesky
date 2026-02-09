import Image from "next/image";
import Link from "next/link";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import ScrollDownHint from "@/components/UI/ScrollDownHint";
import "../../../../../../components/UI/button.css";
import styles from "../../tours.module.css";

const WinterTours = ({ params: { locale } }: { params: { locale: string } }) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);

  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

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
        <div className="visibility_area" style={{ padding: "2rem", textAlign: "center" }}>
          <p style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Coming soon</p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href={addLocaleToHref("/contacts")} className="myButton">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinterTours;
