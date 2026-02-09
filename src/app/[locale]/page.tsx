import TourCards from "@/components/UI/TourCards";
import GroupToursHome from "@/components/UI/GroupToursHome";
import TravelTools from "@/components/UI/TravelTools";
import GallerySection from "@/components/UI/GallerySection";
import WelcomeTitleWithLottie from "@/components/UI/WelcomeTitleWithLottie";
import ScrollDownHint from "@/components/UI/ScrollDownHint";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import { getGalleryPreviewImages } from "@/lib/gallery";
import styles from "./(pages)/main.module.css";

export default async function Index({ params: { locale } }: { params: { locale: string } }) {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  const galleryPreviewImages = await getGalleryPreviewImages();

  const groupTours = [
    { tourKey: "southNorthTour", href: "/tours/south-north", imageSrc: "/tours/3.jpg", title: t("Tours.southNorthTour.title") },
    { tourKey: "eightLakesTrekking", href: "/tours/eight-lakes-trekking", imageSrc: "/tours/2.jpg", title: t("Tours.eightLakesTrekking.title") },
    { tourKey: "eightLakesEquestrian", href: "/tours/eight-lakes-equestrian", imageSrc: "/tours/1.jpg", title: t("Tours.eightLakesEquestrian.title") },
    { tourKey: "altaiExpedition", href: "/tours/altai-expedition", imageSrc: "/tours/4.jpg", title: t("Tours.altaiExpedition.title") },
  ];

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
        <div className={`${styles.heroTitleWrapper} header_container_for_picture`} style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className={`header_on_picture ${styles.heroTitleOnPicture}`}>{t('Index.heroTitle')}</h1>
        </div>
        <ScrollDownHint lightBackground />
      </div>
      <div className={styles.welcomeSection}>
        <WelcomeTitleWithLottie
          prefix={t("Index.welcomeTitlePrefix")}
          red={t("Index.welcomeTitleRed")}
          suffix={t("Index.welcomeTitleSuffix")}
          titleClassName={styles.welcomeSectionTitle}
          prefixClassName={styles.welcomeSectionTitle_blue}
          redClassName={styles.welcomeSectionTitle_red}
          suffixClassName={styles.welcomeSectionTitle_blue}
        />
        <p className={styles.welcomeSectionDescription} style={{ whiteSpace: 'pre-line' }}>
          {t('Index.pageDescription')}
        </p>
      </div>
      <TourCards locale={validLocale} />
      <GroupToursHome locale={validLocale} sectionTitle={t("Tours.group_tours")} tours={groupTours} />
      <GallerySection locale={validLocale} images={galleryPreviewImages} />
      <TravelTools locale={validLocale} />
    </main>
  );
}
