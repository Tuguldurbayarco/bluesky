"use client";

import { useState } from "react";
import Link from "next/link";
import { isValidLocale, defaultLocale } from "@/lib/i18n";
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

  const tools: TravelTool[] = [
    { name: "Best time to Visit Mongolia", image: "/travel-tools/autumn.jpg", description: "Plan your perfect trip", href: "/information/visit" },
    { name: "SIM card", image: "/travel-tools/sim-card.webp", description: "Stay connected", href: "/information/phone" },
    { name: "Weather / Climate", image: "/travel-tools/weather.jpg", description: "Check conditions", href: "/information/weather" },
    { name: "What to bring", image: "/travel-tools/header-img.webp", description: "Travel essentials", href: "/travel-tools/what-to-bring" },
    { name: "Travel Insurance", image: "/travel-tools/travelInsurance.jpg", description: "Protect your journey", href: "/information/insurance" },
    { name: "Plug In/Out", image: "/travel-tools/pluginout.jpeg", description: "Power adapters", href: "/travel-tools/plug-inout" },
    { name: "Currency", image: "/travel-tools/currency.png", description: "Exchange rates", href: "/travel-tools/currency" },
    { name: "Visa", image: "/travel-tools/visa.webp", description: "Visa requirements", href: "/information/visa" },
    { name: "List of Embassies", image: "/travel-tools/embassies.jpg", description: "Embassy contacts", href: "https://www.embassypages.com/mongolia", external: true },
  ];

  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  return (
    <div className={styles.travel_tools_container}>
      <Link href={addLocaleToHref("/travel-tools")} className={styles.travel_tools_title_link}>
        <h2 className={styles.travel_tools_title}>Travel Tools</h2>
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
