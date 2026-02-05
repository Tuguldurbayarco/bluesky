"use client";

import { useState } from "react";
import Link from "next/link";
import { isValidLocale, defaultLocale, createTranslator } from "@/lib/i18n";
import styles from "./TravelTools.module.css";

interface TravelTool {
  name: string;
  image: string;
  description: string;
  href: string;
  external?: boolean;
}

interface TravelToolsProps {
  locale?: string;
}

const TravelTools = ({ locale }: TravelToolsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);

  const tools: TravelTool[] = [
    { name: t("TravelTools.tool1Name"), image: "/travel-tools/autumn.jpg", description: t("TravelTools.tool1Desc"), href: "/information/visit" },
    { name: t("TravelTools.tool2Name"), image: "/travel-tools/sim-card.webp", description: t("TravelTools.tool2Desc"), href: "/information/phone" },
    { name: t("TravelTools.tool3Name"), image: "/travel-tools/weather.jpg", description: t("TravelTools.tool3Desc"), href: "/information/weather" },
    { name: t("TravelTools.tool4Name"), image: "/travel-tools/header-img.webp", description: t("TravelTools.tool4Desc"), href: "/travel-tools/what-to-bring" },
    { name: t("TravelTools.tool5Name"), image: "/travel-tools/travelInsurance.jpg", description: t("TravelTools.tool5Desc"), href: "/information/insurance" },
    { name: t("TravelTools.tool6Name"), image: "/travel-tools/pluginout.jpeg", description: t("TravelTools.tool6Desc"), href: "/travel-tools/plug-inout" },
    { name: t("TravelTools.tool7Name"), image: "/travel-tools/currency.png", description: t("TravelTools.tool7Desc"), href: "/travel-tools/currency" },
    { name: t("TravelTools.tool8Name"), image: "/travel-tools/visa.webp", description: t("TravelTools.tool8Desc"), href: "/information/visa" },
    { name: t("TravelTools.tool9Name"), image: "/travel-tools/embassies.jpg", description: t("TravelTools.tool9Desc"), href: "https://www.embassypages.com/mongolia", external: true },
  ];

  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  return (
    <div className={styles.travel_tools_container}>
      <Link href={addLocaleToHref("/travel-tools")} className={styles.travel_tools_title_link}>
        <h2 className={styles.travel_tools_title}>{t("TravelTools.title")}</h2>
      </Link>
      <div className={styles.travel_tools_wrapper}>
        <div 
          className={styles.travel_tools_scroll}
          style={{ animationPlayState: hoveredIndex !== null ? 'paused' : 'running' }}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Duplicate items for seamless loop */}
          {[...tools, ...tools, ...tools].map((tool, index) => {
            const cardContent = (
              <div
                className={styles.travel_tool_card}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div 
                  className={styles.travel_tool_image}
                  style={{ backgroundImage: `url(${tool.image})` }}
                />
                <div className={styles.travel_tool_content}>
                  <h3 className={styles.travel_tool_name}>{tool.name}</h3>
                  <p className={styles.travel_tool_description}>{tool.description}</p>
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
                  className={styles.travel_tool_link}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <Link
                key={index}
                href={addLocaleToHref(tool.href)}
                className={styles.travel_tool_link}
              >
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TravelTools;
