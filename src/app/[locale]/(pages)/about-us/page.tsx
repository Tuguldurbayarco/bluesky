import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import CertificatesSection from "@/components/UI/CertificatesSection";
import styles from "./about-us.module.css";

const CERTIFICATE_IMAGES = [
  { src: "/certificates/cert1.jpg", alt: "Certificate of membership - Mongolia-Korea Tourism Association" },
  { src: "/certificates/cert3.jpg", alt: "Mongolia Tourism Organization certificate - front" },
  { src: "/certificates/cert2.jpg", alt: "Registration extension - back" },
];

const AboutUs = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div className={styles.about_us_hero_container}>
        <h1 className='header_on_picture' style={{margin: 0, padding: 0}}>About Us</h1>
      </div>
      <div className='visibility_area'>
        <div style={{justifyContent: "center", textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '5rem'}}>Eternal Sky Tour LLC</h2>
          <div className={styles.about_us_content}>
            <p className="pageDescription">
              Welcome to Eternal Sky Tour, your gateway to the enchanting landscapes and rich cultural tapestry of Mongolia. Nestled amidst the vast expanses of the Central Asian steppes, we are a premier travel agency dedicated to crafting unforgettable journeys through this land of eternal blue skies.
            </p>
            <p className="pageDescription">
              At Eternal Sky Tour, we believe that every traveler deserves an authentic and immersive experience. With our expert knowledge and passion for Mongolia, we curate bespoke itineraries that showcase the diverse wonders of this captivating country. From the rugged beauty of the Altai Mountains to the nomadic traditions of the Gobi Desert, our tours offer a glimpse into the heart and soul of Mongolia.
            </p>
            <p className="pageDescription">
              Whether you're seeking adventure in the great outdoors, cultural encounters with nomadic tribes, or a tranquil retreat amidst nature, we have the perfect itinerary for you. Our team of experienced guides and local experts are committed to ensuring that your journey is not only memorable but also deeply enriching.
            </p>
            <p className="pageDescription">
              At the core of our philosophy lies a deep respect for the land and its people. We are dedicated to sustainable tourism practices that preserve Mongolia's natural beauty and support local communities. By traveling with Eternal Sky Tour, you are not only embarking on a remarkable adventure but also contributing to the preservation of Mongolia's heritage for future generations.
            </p>
            <p className="pageDescription">
              Join us and discover the magic of Mongolia with Eternal Sky Tour. Let us be your companions as you embark on a journey of a lifetime amidst the timeless landscapes and boundless skies of this extraordinary land.
            </p>
          </div>
        </div>
      </div>
      <section className={styles.certificates_section} aria-label="Certificates">
        <h2 className={styles.certificates_title}>
          <span className={styles.certificates_title_blue}>ETERNAL SKY TOUR</span>
          <span className={styles.certificates_title_gray}>CERTIFICATE</span>
        </h2>
        <CertificatesSection images={CERTIFICATE_IMAGES} />
      </section>
    </div>
  );
}

export default AboutUs;
