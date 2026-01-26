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
  // Extract locale from pathname
  const locale = pathname.split('/')[1];
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  const [scrolled, setScrolled] = useState(false);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setSubmenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isSubmenuOpen && !target.closest(`.${styles.navbar_menu_item}`)) {
        setSubmenuOpen(false);
      }
    };

    if (isSubmenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSubmenuOpen]);

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
      case "contact":
        return t("Index.menu.4.label");
      default:
        return "";
    }
  }

  function NavbarLink({ link }: { link: { href: string, key: string, title: string } }) {
    const isWhyWe = link.key === 'why-we';
    
    const submenuItems = isWhyWe ? [
      { href: '/about-us', label: 'About Us' },
      { href: '/gallery', label: 'Gallery' },
      { href: '/travel-tools', label: 'Travel Tools' }
    ] : [];

    const handleWhyWeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Temporarily disable navigation for tours, events, and contact
      const disabledLinks = ['tours', 'events'];
      if (disabledLinks.includes(link.key)) {
        e.preventDefault();
        return;
      }
      
      if (isWhyWe) {
        // Toggle submenu on click for "Why WE?" link
        e.preventDefault();
        setSubmenuOpen(!isSubmenuOpen);
      } else {
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
          className={`${styles.navbar_menu_buttons} ${isWhyWe ? styles.has_submenu : ''}`}
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
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : styles.non_scrolled}`} 
          style={{position: 'fixed', top: 0, width: '100%'}} 
        >
          <div className={styles.navbar_content}>
            <Link href={`/${validLocale}/`} className={`${styles.logo} ${scrolled ? styles.scrolled : ''}`}>
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