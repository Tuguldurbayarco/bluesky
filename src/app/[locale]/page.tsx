import TourCards from "@/components/UI/TourCards";
import TravelTools from "@/components/UI/TravelTools";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./(pages)/main.module.css";

export default function Index({params: {locale}}: {params: {locale: string}}) {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);

  return (
    <main>
      <div style={{position: "relative", marginTop: 100}}>
        <video
          className={styles.heroVideo}
          src="/video-header/hero-web.mp4"
          poster="/3.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Header video"
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>Travel to Mongolia</h1>
        </div>
      </div>
      <div className={styles.welcomeSection}>
        <h1 className="pageTitle">{t('Index.welcomeTitle')}</h1>
        <p className="pageDescription" style={{ whiteSpace: 'pre-line' }}>
          {t('Index.pageDescription')}
        </p>
      </div>
      <TourCards locale={validLocale} />
      <TravelTools locale={validLocale} />
    </main>
  );
}
