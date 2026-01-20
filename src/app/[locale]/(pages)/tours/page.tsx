import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import { TOURS_LINK, INDIVIDUAL_TOURS } from '@/constants';
import Tabs from '@/components/UI/Tabs';
import SouthNorthTour from "@/components/UI/SouthNorthTour";
import tabStyles from "@/components/UI/tabs.module.css";
import tourStyles from "./tours.module.css";
import groupTourStyles from "@/components/UI/group-tour.module.css";

const Tours = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  // Group Tours Content
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
        imageSrc="/group-south-north/south-north-display.webp"
        tourHref="/tours/south-north"
        reverse={false}
      />
      <SouthNorthTour 
        locale={validLocale as Locale} 
        dateRanges={["07/11 – 07/22", "08/04 – 08/15"]}
        tourKey="eightLakesTrekking"
        imageSrc="/group-eight-lake-trekk/eight-lake-trekk-display.png"
        tourHref="/tours/eight-lakes-trekking"
        reverse={true}
      />
      <SouthNorthTour 
        locale={validLocale as Locale} 
        dateRanges={["07/11 – 07/20", "08/06 – 08/15"]}
        tourKey="eightLakesEquestrian"
        imageSrc="/group-eight-lake-equestrian/eight-lake-eq-display.png"
        tourHref="/tours/eight-lakes-equestrian"
        reverse={false}
      />
      <SouthNorthTour 
        locale={validLocale as Locale} 
        dateRanges={["07/11 – 07/26", "08/08 – 08/23"]}
        tourKey="altaiExpedition"
        imageSrc="/group-altai/group-altai-display.jpg"
        tourHref="/tours/altai-expedition"
        reverse={true}
      />
      </div>
    </div>
  );

  // Classic Tours Content - Moved from Group Tours
  const ClassicToursContent = (
    <div>
      <div className={tabStyles.tab_intro}>
        <p className={tabStyles.tab_intro_title}>{t('Tours.classic_tours_title')}</p>
        <p className={tabStyles.tab_intro_body}>{t('Tours.classic_tours_description')}</p>
      </div>
      <div style={{position: 'relative', marginBottom: "4%"}}>
        <a href={addLocaleToHref('/tours/khangai')} style={{display: 'block'}}>
          <img
            src='/tmkhangai.jpg'
            width="100%"
            height="auto"
            style={{borderRadius: "10px"}}
          />
        </a>
        <div className={groupTourStyles.tours_image_container}>
          <p className={tourStyles.tour_container_header_desc}>{t('Tours.main_tour')}</p>
          <p className={tourStyles.tour_container_desc}>
          {t('Tours.main_tour_desc')} <a href={addLocaleToHref('/tours/khangai')} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a>
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {TOURS_LINK.map((element, index ) => (
          <div style={{position: 'relative', marginBottom: "4%"}} key={element.id} className={tourStyles.tours_page_image_container}>
            <a href={addLocaleToHref(element.href)}>
              <img 
                key={element.id} 
                src={element.src}
                alt='tours images'
                width='100%'
                height='auto'
                style={{borderRadius: "10px"}}
              /> 
            </a>
            <div className={groupTourStyles.tours_image_container}>
              <p className={tourStyles.tour_container_header_desc_mini}>{t(`Tours.tourList.${index}.title`)} - {t(`Tours.tourDays.${index}.days`)}</p>
              <p className={tourStyles.tour_container_desc_mini}>{t(`Tours.tourList.${index}.description`)} <a href={addLocaleToHref(element.href)} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Destinations Content - Moved from Classic Tours
  const DestinationsContent = (
    <div>
      <div className={tabStyles.tab_intro}>
        <p className={tabStyles.tab_intro_title}>{t('Tours.destinations_title')}</p>
        <p className={tabStyles.tab_intro_body}>{t('Tours.destinations_description')}</p>
      </div>
      <div style={{position: 'relative', marginBottom: "4%"}}>
        <a href={addLocaleToHref('/tours/altai')} style={{ display: 'block' }}>
          <img
            src='/altai.jpg'
            width="100%"
            height="auto"
            style={{borderRadius: "10px"}}
          />
        </a>
        <div className={groupTourStyles.tours_image_container}>
          <p className={tourStyles.tour_container_header_desc}>{t('Tours.altai')}</p>
          <p className={tourStyles.tour_container_desc}>{t('Tours.altai_desc')}<a href={addLocaleToHref('/tours/altai')} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a></p>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {INDIVIDUAL_TOURS.map((element, index ) => (
          <div style={{position: 'relative', marginBottom: "4%"}} key={element.id} className={tourStyles.tours_page_image_container}>
            <a href={addLocaleToHref(element.href)}>
              <img 
                key={element.id} 
                src={element.src}
                alt='individual tours images'
                width='100%'
                height='auto'
                style={{borderRadius: "10px"}}
              /> 
            </a>
            <div className={groupTourStyles.tours_image_container}>
              <p className={tourStyles.tour_container_header_desc_mini}>{t(`Tours.individualList.${index}.title`)}</p>
              <p className={tourStyles.tour_container_desc_mini}>{t(`Tours.individualList.${index}.description`)} <a href={addLocaleToHref(element.href)} style={{color: "#ebc934"}}> {t('Tours.read_more')}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tabLabels = [
    t('Tours.group_tours'),
    t('Tours.classic_tours'),
    t('Tours.destinations')
  ];
  
  return (
    <div>
      <div className={tourStyles.tours_hero_container}>
        <h1 className='header_on_picture'>{t('Tours.title_on_picture')}</h1>
      </div>
      <div className='visibility_area'>
        <Tabs locale={validLocale as Locale} tabLabels={tabLabels}>
          {GroupToursContent}
          {ClassicToursContent}
          {DestinationsContent}
        </Tabs>
      </div>
    </div>
  )
}

export default Tours