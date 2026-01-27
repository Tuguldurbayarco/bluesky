import TourCards from "@/components/UI/TourCards";
import TravelTools from "@/components/UI/TravelTools";
import { isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./(pages)/main.module.css";

export default function Index({params: {locale}}: {params: {locale: string}}) {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  
  return (
    <main>
      <div style={{position: "relative"}}>
        <img
          className="d-block w-100"
          src="/3.jpg"
          alt="Header image"
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>Travel to Mongolia</h1>
        </div>
      </div>
      <div className={styles.welcomeSection}>
        <h1 className="pageTitle">Welcome to Eternal Sky Tour</h1>
        <p className="pageDescription">
          Discover the breathtaking beauty of Mongolia with unforgettable adventures and authentic experiences.
        </p>
      </div>
      <TourCards locale={validLocale} />
      <TravelTools locale={validLocale} />
    </main>
  );
}
