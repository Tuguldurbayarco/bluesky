"use client";
import React, { useState, useEffect, Children } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import styles from "./tabs.module.css";

interface TabsProps {
  locale?: string;
  children: React.ReactNode;
  tabLabels: string[];
  /** When true, sync active tab with URL query ?tab=<slug>. Requires tabSlugs. */
  syncWithUrl?: boolean;
  /** URL slug for each tab (e.g. ['group', 'classic']). Used when syncWithUrl is true. */
  tabSlugs?: string[];
}

const Tabs: React.FC<TabsProps> = ({ children, tabLabels, syncWithUrl, tabSlugs }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const getInitialTab = () => {
    if (!syncWithUrl || !tabSlugs?.length || !searchParams) return 0;
    const tab = searchParams.get("tab");
    const index = tabSlugs.indexOf(tab ?? "");
    return index >= 0 ? index : 0;
  };

  // Stable slug list for effect deps
  const slugList = tabSlugs?.join(",") ?? "";

  const [activeTab, setActiveTab] = useState(getInitialTab);

  // Sync active tab when URL changes (e.g. browser back/forward)
  useEffect(() => {
    if (!syncWithUrl || !tabSlugs?.length || !searchParams) return;
    const tab = searchParams.get("tab");
    const index = tabSlugs.indexOf(tab ?? "");
    if (index >= 0 && index !== activeTab) {
      setActiveTab(index);
    }
  }, [searchParams, syncWithUrl, slugList]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    if (syncWithUrl && tabSlugs?.length && searchParams) {
      const params = new URLSearchParams(searchParams.toString());
      const base = pathname ?? "/";
      if (index === 0) {
        params.delete("tab");
        const qs = params.toString();
        router.replace(qs ? `${base}?${qs}` : base, { scroll: false });
      } else {
        params.set("tab", tabSlugs[index]);
        router.replace(`${base}?${params.toString()}`, { scroll: false });
      }
    }
  };

  const childrenArray = Children.toArray(children);

  return (
    <div className={styles.tabs_container}>
      <div className={styles.tabs_header}>
        {tabLabels.map((label, index) => (
          <button
            key={index}
            className={`${styles.tab_button} ${activeTab === index ? styles.active : ""}`}
            onClick={() => handleTabClick(index)}
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
