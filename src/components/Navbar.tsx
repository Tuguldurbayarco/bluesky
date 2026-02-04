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
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setSubmenuOpen(false);
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
      if (!isSubmenuOpen) return;
      
      const target = e.target as HTMLElement;
      // Check if click is inside the submenu or the "Why WE?" link
      const submenu = target.closest(`.${styles.submenu}`);
      const whyWeLink = target.closest(`.${styles.has_submenu}`);
      
      // Close submenu if click is NOT inside the submenu or the "Why WE?" link
      if (!submenu && !whyWeLink) {
        setSubmenuOpen(false);
      }
    };

    if (isSubmenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSubmenuOpen, styles]);

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
        return "Gallery";
      case "contact":
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
    if (link.key === 'why-we') {
      return pathnameStr.startsWith(`${base}/about`) || pathnameStr.startsWith(`${base}/about-us`) ||
        pathnameStr.startsWith(`${base}/travel-tools`);
    }
    return pathnameStr.startsWith(`${base}${link.href}`);
  }

  function NavbarLink({ link }: { link: { href: string, key: string, title: string } }) {
    const isWhyWe = link.key === 'why-we';
    const isActive = isLinkActive(link);
    
    const submenuItems = isWhyWe ? [
      { href: '/about-us', label: 'About Us' },
      { href: '/travel-tools', label: 'Travel Tools' }
    ] : [];

    const handleWhyWeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // const disabledLinks = [''];
      // if (disabledLinks.includes(link.key)) {
      //   e.preventDefault();
      //   return;
      // }
      
      if (isWhyWe) {
        // Toggle submenu on click for "Why WE?" link
        e.preventDefault();
        setSubmenuOpen(!isSubmenuOpen);
      } else {
        // Close submenu when clicking other menu items
        setSubmenuOpen(false);
        // Close menu when clicking other links on mobile
        if (isMenuOpen) {
          setMenuOpen(false);
        }
      }
    };

    return (
      <li 
        className={styles.navbar_menu_item}
      >
        <Link 
          href={addLocaleToHref(link.href)} 
          key={link.key} 
          className={`${styles.navbar_menu_buttons} ${isWhyWe ? styles.has_submenu : ''} ${isActive ? styles.navbar_menu_buttons_active : ''}`}
          onClick={handleWhyWeClick}
        >
          {menuLabel(link)}
          {isWhyWe && (
            <span className={`${styles.submenu_icon} ${isSubmenuOpen ? styles.submenu_icon_open : ''}`}>
              ▼
            </span>
          )}
        </Link>
        {isWhyWe && submenuItems.length > 0 && (
          <ul 
            className={`${styles.submenu} ${isSubmenuOpen ? styles.submenu_open : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {submenuItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={addLocaleToHref(item.href)}
                  className={styles.submenu_item}
                  onClick={() => {
                    setMenuOpen(false);
                    setSubmenuOpen(false);
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
              <img src="/logo.png" alt="logo" height='auto'/>
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