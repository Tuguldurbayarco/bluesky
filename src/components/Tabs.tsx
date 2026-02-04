"use client";
import React, { useState, Children } from 'react';
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import styles from "./tabs.module.css";

interface TabsProps {
  locale?: Locale;
  children: React.ReactNode;
  tabLabels: string[];
}

const Tabs: React.FC<TabsProps> = ({ locale, children, tabLabels }) => {
  const [activeTab, setActiveTab] = useState(0);
  const childrenArray = Children.toArray(children);

  return (
    <div className={styles.tabs_container}>
      <div className={styles.tabs_header}>
        {tabLabels.map((label, index) => (
          <button
            key={index}
            className={`${styles.tab_button} ${activeTab === index ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.tabs_content}>
        {childrenArray[activeTab]}
      </div>
    </div>
  );
};

export default Tabs;
