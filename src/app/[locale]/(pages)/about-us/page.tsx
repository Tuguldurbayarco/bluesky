import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import CertificatesSection from "@/components/UI/CertificatesSection";
import ScrollDownHint from "@/components/UI/ScrollDownHint";
import styles from "./about-us.module.css";

const CERTIFICATE_IMAGES = [
  { src: "/certificates/cert1.jpg", alt: "Certificate of membership - Mongolia-Korea Tourism Association" },
  { src: "/certificates/cert3.jpg", alt: "Mongolia Tourism Organization certificate - front" },
  { src: "/certificates/cert2.png", alt: "Registration extension - back" },
];

const AboutUs = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div className={styles.about_us_hero_container} aria-hidden="true">
        <ScrollDownHint lightBackground />
      </div>
      <div className='visibility_area'>
        <div style={{justifyContent: "center", textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '5rem', fontWeight: 'bold'}}>
            <span className={styles.section_title_red}>{t("AboutUs.sectionTitleEternal")}</span>
            <span className={styles.section_title_blue}>{t("AboutUs.sectionTitleSkyTour")}</span>
            <span className={styles.section_title_black}>{t("AboutUs.sectionTitleLLC")}</span>
          </h2>
          <div className={styles.about_us_content}>
            <p className="pageDescription">{t("AboutUs.paragraph1")}</p>
            <p className="pageDescription">{t("AboutUs.paragraph2")}</p>
            <p className="pageDescription">{t("AboutUs.paragraph3")}</p>
            <p className="pageDescription">{t("AboutUs.paragraph4")}</p>
            <p className="pageDescription">{t("AboutUs.paragraph5")}</p>
          </div>
        </div>
      </div>
      <section className={styles.certificates_section} aria-label={t("AboutUs.certificatesAriaLabel")}>
        <h2 className={styles.certificates_title}>
          <span className={styles.certificates_title_red}>{t("AboutUs.certificateTitleRed")}</span>
          <span className={styles.certificates_title_blue}>{t("AboutUs.certificateTitleBlue")}</span>
          <span className={styles.certificates_title_gray}>{t("AboutUs.certificateTitleGray")}</span>
        </h2>
        <CertificatesSection images={CERTIFICATE_IMAGES} />
      </section>
    </div>
  );
}

export default AboutUs;
