"use client";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { usePathname } from 'next/navigation';
import { isValidLocale, defaultLocale } from '@/lib/i18n';

type Language = {
  code: string;
  name: string;
  flag: string;
  nativeName: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '/g-britain.png', nativeName: 'En' },
  { code: 'ko', name: 'Korean', flag: '/s-korea.png', nativeName: 'Ko' },
];

export default function LocalSwitcher() {
   const pathname = usePathname();
   const locale = (pathname ?? "").split("/")[1];
  const localActive = isValidLocale(locale) ? locale : defaultLocale;
  const currentLanguage = languages.find(lang => lang.code === localActive) || languages[0];

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    if (selectedLang !== localActive) {
      // Replace the locale in the current path
      const newPath = (pathname ?? "").replace(`/${localActive}`, `/${selectedLang}`);
      location.href = newPath;
    }
  };

  return (
    <div className="language-switcher d-flex align-items-center">
      {/* Current language flag */}
      <img 
        src={currentLanguage.flag}
        alt={`${currentLanguage.name} flag`}
        style={{
          width: '24px',
          height: 'auto',
          borderRadius: '2px',
        }}
      />
      
      {/* React Bootstrap Form.Select */}
      <Form.Select
        id="language-selector"
        name="language"
        value={localActive}
        onChange={handleLanguageChange}
        size="sm"
        style={{
          width: 'auto',
          border: 'none',
          backgroundColor: 'transparent',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          paddingLeft: '8px',
          boxShadow: 'none'
        }}
        aria-label="Language selector"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.nativeName}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}