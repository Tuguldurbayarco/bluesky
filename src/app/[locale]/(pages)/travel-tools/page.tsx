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
    {
      title: "Best time to Visit Mongolia",
      href: "/information/visit",
      image: "/travel-tools/autumn.jpg"
    },
    {
      title: "SIM card",
      href: "/information/phone",
      image: "/travel-tools/sim-card.webp"
    },
    {
      title: "Weather / Climate",
      href: "/information/weather",
      image: "/travel-tools/weather.jpg"
    },
    {
      title: "What to bring",
      href: "/travel-tools/what-to-bring",
      image: "/travel-tools/header-img.webp"
    },
    {
      title: "Travel Insurance",
      href: "/information/insurance",
      image: "/travel-tools/travelInsurance.jpg"
    },
    {
      title: "Plug In/Out",
      href: "/travel-tools/plug-inout",
      image: "/travel-tools/pluginout.jpeg"
    },
    {
      title: "Currency",
      href: "/travel-tools/currency",
      image: "/travel-tools/currency.png"
    },
    {
      title: "Visa",
      href: "/information/visa",
      image: "/travel-tools/visa.webp"
    },
    {
      title: "List of Embassies",
      href: "https://www.embassypages.com/mongolia",
      image: "/travel-tools/embassies.jpg",
      external: true
    }
  ];
  
  return (
    <div>
      <div className={styles.travel_tools_hero_container}>
        <h1 className='header_on_picture' style={{margin: 0, padding: 0}}>Travel Tools</h1>
      </div>
      <div className='visibility_area'>
        <div className={styles.travel_tools_header} style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem'}}>Essential Travel Information</h2>
          <p className="pageDescription" style={{marginBottom: '5rem'}}>
            Find everything you need to know before your journey to Mongolia, from visa requirements and currency exchange to weather information and travel essentials.
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
