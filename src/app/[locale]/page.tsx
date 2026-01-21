import TourCards from "@/components/UI/TourCards";
import { isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./(pages)/main.module.css";

export default function Index({params: {locale}}: {params: {locale: string}}) {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  
  return (
    <main>
      <div>
        <div>
          <img
            className="d-block w-100"
            src="/3.jpg"
            alt="Header image"
          />
        </div>
      </div>
      <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Welcome to Eternal Sky Tour</h1>
        <p className={styles.welcomeDescription}>
          Discover the breathtaking beauty of Mongolia with unforgettable adventures and authentic experiences.
        </p>
      </div>
      <TourCards locale={validLocale} />
    </main>
  );
}
