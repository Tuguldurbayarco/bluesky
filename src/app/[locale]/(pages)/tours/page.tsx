import { Suspense } from "react";
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import { TOURS_LINK } from '@/constants';
import TourCard from "@/components/UI/TourCard";
import Tabs from "@/components/Tabs";
import SouthNorthTour from "@/components/UI/SouthNorthTour";
import ScrollDownHint from "@/components/UI/ScrollDownHint";
import tourStyles from "./tours.module.css";
import tabStyles from "@/components/tabs.module.css";

const Tours = ({ params: { locale } }: { params: { locale: string } }) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);

  const tabLabels = [
    t('Tours.group_tours'),
    t('Tours.classic_tours')
  ];

  // Group Tours tab: 4 SouthNorthTour blocks
  const GroupToursContent = (
    <div>
      <div className={tabStyles.tab_intro}>
        <p className={tabStyles.tab_intro_title}>{t('Tours.group_tours_title')}</p>
        <p className={tabStyles.tab_intro_body}>{t('Tours.group_tours_description')}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '2rem' }}>
        <SouthNorthTour
          locale={validLocale as Locale}
          dateRanges={["07/11 – 07/23", "08/02 – 08/14"]}
          tourKey="southNorthTour"
          imageSrc="/tours/3.jpg"
          tourHref="/tours/south-north"
        />
        <SouthNorthTour
          locale={validLocale as Locale}
          dateRanges={["07/11 – 07/22", "08/04 – 08/15"]}
          tourKey="eightLakesTrekking"
          imageSrc="/tours/2.jpg"
          tourHref="/tours/eight-lakes-trekking"
        />
        <SouthNorthTour
          locale={validLocale as Locale}
          dateRanges={["07/11 – 07/20", "08/06 – 08/15"]}
          tourKey="eightLakesEquestrian"
          imageSrc="/tours/1.jpg"
          tourHref="/tours/eight-lakes-equestrian"
        />
        <SouthNorthTour
          locale={validLocale as Locale}
          dateRanges={["07/11 – 07/26", "08/08 – 08/23"]}
          tourKey="altaiExpedition"
          imageSrc="/tours/4.jpg"
          tourHref="/tours/altai-expedition"
        />
      </div>
    </div>
  );

  // Classic Tours tab
  const ClassicToursContent = (
    <div>
      <div className={tabStyles.tab_intro}>
        <p className={tabStyles.tab_intro_title}>{t('Tours.classic_tours_title')}</p>
        <p className={tabStyles.tab_intro_body}>{t('Tours.classic_tours_description')}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
        {TOURS_LINK.map((tour) => (
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
  );

  return (
    <div>
      <div className={tourStyles.tours_hero_container} aria-hidden="true">
        <ScrollDownHint lightBackground />
      </div>
      <div className='visibility_area' style={{ marginTop: "5%" }}>
        <Suspense fallback={<div className={tabStyles.tabs_container} />}>
          <Tabs
            locale={validLocale as Locale}
            tabLabels={tabLabels}
            syncWithUrl
            tabSlugs={["group", "classic"]}
          >
            {GroupToursContent}
            {ClassicToursContent}
          </Tabs>
        </Suspense>
      </div>
    </div>
  );
};

export default Tours;
