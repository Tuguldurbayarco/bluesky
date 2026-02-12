"use client";
import Link from "next/link";
import {useState, useEffect} from "react";
import LocalSwitcher from "./UI/Switcher";
import { NAV_LINKS } from "@/constants";
import { createTranslator, defaultLocale, isValidLocale } from "@/lib/i18n";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  const pathnameStr = pathname ?? "";
  // Extract locale from pathname
  const locale = pathnameStr.split("/")[1];
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openSubmenuKey, setOpenSubmenuKey] = useState<'tours' | 'why-we' | null>(null);

  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setOpenSubmenuKey(null);
    }
  };

  useEffect(() => {
    const handleBodyScroll = (e: { preventDefault: () => void; }) => {
      if (isMenuOpen) {
        e.preventDefault();
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('scroll', handleBodyScroll, { passive: false });
    } else {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleBodyScroll);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('scroll', handleBodyScroll);
    };
  }, [isMenuOpen]);

  // Close submenu when clicking outside or on other menu items
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (openSubmenuKey === null) return;

      const target = e.target as HTMLElement;
      const submenu = target.closest(`.${styles.submenu}`);
      const parentWithSubmenu = target.closest(`.${styles.has_submenu}`);

      if (!submenu && !parentWithSubmenu) {
        setOpenSubmenuKey(null);
      }
    };

    if (openSubmenuKey !== null) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSubmenuKey, styles]);

  function menuLabel(link: { href: string, key: string, title: string }){
    switch (link.key){
      case "home":
        return t("Index.menu.0.label");
      case "tours":
        return t("Index.menu.1.label");
      case "events":
        return t("Index.menu.2.label");
      case "why-we":
        return t("Index.menu.3.label");
      case "gallery":
        return t("Index.galleryLabel");
      case "guest-house":
        return t("Index.menu.4.label");
      default:
        return "";
    }
  }

  function isLinkActive(link: { href: string, key: string }) {
    const base = `/${validLocale}`;
    if (link.key === 'home') {
      return pathnameStr === base || pathnameStr === `${base}/`;
    }
    if (link.key === "why-we") {
      return pathnameStr.startsWith(`${base}/about`) || pathnameStr.startsWith(`${base}/about-us`) ||
        pathnameStr.startsWith(`${base}/travel-tools`) || pathnameStr.startsWith(`${base}/contacts`);
    }
    if (link.key === "tours") {
      return pathnameStr.startsWith(`${base}/tours`);
    }
    return pathnameStr.startsWith(`${base}${link.href}`);
  }

  function NavbarLink({ link }: { link: { href: string, key: string, title: string } }) {
    const isTours = link.key === "tours";
    const isWhyWe = link.key === "why-we";
    const hasSubmenu = isTours || isWhyWe;
    const isActive = isLinkActive(link);
    const isSubmenuOpen = (isTours && openSubmenuKey === "tours") || (isWhyWe && openSubmenuKey === "why-we");

    const submenuItems = isWhyWe
      ? [
          { href: "/about-us", label: t("Index.submenuAboutUs") },
          { href: "/travel-tools", label: t("Index.submenuTravelTools") },
          { href: "/contacts", label: t("Index.submenuContacts") },
        ]
      : isTours
        ? [
            { href: "/tours", label: t("Index.submenuSummerTours") },
            { href: "/tours/winter", label: t("Index.submenuWinterTours") },
          ]
        : [];

    const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (hasSubmenu) {
        e.preventDefault();
        setOpenSubmenuKey(isSubmenuOpen ? null : (isTours ? "tours" : "why-we"));
      } else {
        setOpenSubmenuKey(null);
        if (isMenuOpen) {
          setMenuOpen(false);
        }
      }
    };

    return (
      <li className={styles.navbar_menu_item}>
        <Link
          href={addLocaleToHref(link.href)}
          key={link.key}
          className={`${styles.navbar_menu_buttons} ${hasSubmenu ? styles.has_submenu : ""} ${isActive ? styles.navbar_menu_buttons_active : ""}`}
          onClick={handleMenuClick}
        >
          {menuLabel(link)}
          {hasSubmenu && (
            <span className={`${styles.submenu_icon} ${isSubmenuOpen ? styles.submenu_icon_open : ""}`}>
              ▼
            </span>
          )}
        </Link>
        {hasSubmenu && submenuItems.length > 0 && (
          <ul
            className={`${styles.submenu} ${isSubmenuOpen ? styles.submenu_open : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            {submenuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={addLocaleToHref(item.href)}
                  className={styles.submenu_item}
                  onClick={() => {
                    setMenuOpen(false);
                    setOpenSubmenuKey(null);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
  
  return (
    <div >
      <div >
        <nav className={styles.navbar} style={{position: 'fixed', top: 0, width: '100%'}}>
          <div className={styles.navbar_content}>
            <Link href={`/${validLocale}/`} className={styles.logo}>
              <img
                src="/brand/since.jpg"
                alt="logo"
                height="auto"
                onError={(e) => {
                  // Fallback to the previous logo if the new asset fails to load.
                  e.currentTarget.src = "/logo.png";
                }}
              />
            </Link>
            <div className={`${styles.header_menu} ${isMenuOpen ? styles.open : ''}`}>
              <ul className={styles.navbar_menu_container}>
                {NAV_LINKS.map((link) => (
                  <NavbarLink key={link.key} link={link}/>
                ))} 
              </ul>
            </div>
            <div className={`${styles.header_burger} ${isMenuOpen ? styles.open : ''}`} onClick={handleBurgerClick}>
              <span></span>
            </div>
            <div className={styles.switcher}>
              <LocalSwitcher/>
            </div>
          </div>
          <div className={`${styles.overlay} ${isMenuOpen ? styles.open : ''}`}></div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar