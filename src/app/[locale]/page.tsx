import Slider from "@/components/UI/Slider";
import Festivals from "@/components/UI/Festivals";
import Trips from "@/components/UI/Trips";
import Link from "next/link";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import IndividualTours from "@/components/UI/IndividualTours";
import Accommodation from "@/components/UI/Accomodation";
import styles from "./(pages)/main.module.css";
import tourStyles from "./(pages)/tours/tours.module.css";

export default function Index({params: {locale}}: {params: {locale: string}}) {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  return (
    <main>
      <div>
        <div>
          <Slider />
        </div>
        <div className="header_container_for_picture">
          <p className={styles.mainpage_header_on_pictute}>{t('Index.title')} <br />{t('Index.subtitle')}</p>
          <Link href={`/${validLocale}/contacts/#targetBlock`} className={styles.mainpage_link_on_pictute}>
            {t('Index.link')}
          </Link>
        </div>
      </div>
      <div className="visibility_area" >
        <h2 className={`${tourStyles.tour_items_header} trocchi-regular`}>{t('Index.header')}</h2>
        <div>
          <Festivals locale={validLocale}/>
        </div>
        <div>
          <Trips locale={validLocale}/>
        </div>
        <div>
          <IndividualTours locale={validLocale}/>
        </div>
        <div>
          <Accommodation locale={validLocale}/>
        </div>
      </div>
    </main>
  );
}
