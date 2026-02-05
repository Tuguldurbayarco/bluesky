import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./what-to-bring.module.css";

const WhatToBring = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  const clothingItems = t("WhatToBring.clothingItems", { returnObjects: true }) as string[];
  const essentialsItems = t("WhatToBring.essentialsItems", { returnObjects: true }) as string[];
  const electronicsItems = t("WhatToBring.electronicsItems", { returnObjects: true }) as string[];
  const personalItems = t("WhatToBring.personalItems", { returnObjects: true }) as string[];

  return (
    <div>
      <div className={styles.what_to_bring_hero_container}>
        <h1 className='header_on_picture' style={{margin: 0, padding: 0}}>{t("WhatToBring.pageTitle")}</h1>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem'}}>{t("WhatToBring.sectionTitle")}</h2>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p>{t("WhatToBring.intro")}</p>
            <br/>
            <p><strong>{t("WhatToBring.clothingTitle")}</strong></p>
            <ul className='visa_points'>
              {Array.isArray(clothingItems) && clothingItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <br/>
            <p><strong>{t("WhatToBring.essentialsTitle")}</strong></p>
            <ul className='visa_points'>
              {Array.isArray(essentialsItems) && essentialsItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <br/>
            <p><strong>{t("WhatToBring.electronicsTitle")}</strong></p>
            <ul className='visa_points'>
              {Array.isArray(electronicsItems) && electronicsItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <br/>
            <p><strong>{t("WhatToBring.personalTitle")}</strong></p>
            <ul className='visa_points'>
              {Array.isArray(personalItems) && personalItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <br/>
            <p>{t("WhatToBring.outro")}</p>
            <br/>
            <p><strong>{t("WhatToBring.additionalTitle")}</strong></p>
            <p>{t("WhatToBring.additionalText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatToBring;
