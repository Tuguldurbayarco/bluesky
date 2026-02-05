import Link from "next/link";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./travel-tools.module.css";

const TravelTools = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  const travelTools = [
    { title: t("TravelTools.tool1Name"), href: "/information/visit", image: "/travel-tools/autumn.jpg" },
    { title: t("TravelTools.tool2Name"), href: "/information/phone", image: "/travel-tools/sim-card.webp" },
    { title: t("TravelTools.tool3Name"), href: "/information/weather", image: "/travel-tools/weather.jpg" },
    { title: t("TravelTools.tool4Name"), href: "/travel-tools/what-to-bring", image: "/travel-tools/header-img.webp" },
    { title: t("TravelTools.tool5Name"), href: "/information/insurance", image: "/travel-tools/travelInsurance.jpg" },
    { title: t("TravelTools.tool6Name"), href: "/travel-tools/plug-inout", image: "/travel-tools/pluginout.jpeg" },
    { title: t("TravelTools.tool7Name"), href: "/travel-tools/currency", image: "/travel-tools/currency.png" },
    { title: t("TravelTools.tool8Name"), href: "/information/visa", image: "/travel-tools/visa.webp" },
    { title: t("TravelTools.tool9Name"), href: "https://www.embassypages.com/mongolia", image: "/travel-tools/embassies.jpg", external: true }
  ];
  
  return (
    <div>
      <div className={styles.travel_tools_hero_container}>
        <h1 className='header_on_picture' style={{margin: 0, padding: 0}}>{t("TravelTools.pageTitle")}</h1>
      </div>
      <div className='visibility_area'>
        <div className={styles.travel_tools_header} style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem'}}>{t("TravelTools.pageSubtitle")}</h2>
          <p className="pageDescription" style={{marginBottom: '5rem'}}>
            {t("TravelTools.pageDescription")}
          </p>
        </div>
        <div className={styles.travel_tools_grid} style={{marginBottom: '5rem'}}>
          {travelTools.map((tool, index) => {
            const content = (
              <div className={styles.travel_tool_card}>
                <div className={styles.tool_image_container}>
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className={styles.tool_image}
                  />
                  <div className={styles.tool_title}>{tool.title}</div>
                </div>
              </div>
            );

            if (tool.external) {
              return (
                <a
                  key={index}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={index} href={addLocaleToHref(tool.href)}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TravelTools;
