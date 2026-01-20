// Static i18n solution for static export
import enMessages from '../../messages/en.json';
import koMessages from '../../messages/ko.json';
import hbMessages from '../../messages/hb.json';
import deMessages from '../../messages/de.json';

export type Locale = 'en' | 'ko' | 'hb' | 'de';

export const locales: Locale[] = ['en', 'ko', 'hb', 'de'];
export const defaultLocale: Locale = 'en';

const messages = {
  en: enMessages,
  ko: koMessages,
  hb: hbMessages,
  de: deMessages,
};

export function getMessages(locale: Locale) {
  return messages[locale] || messages[defaultLocale];
}

// Simple translation function
export function createTranslator(locale: Locale) {
  const msgs = getMessages(locale);
  const enMsgs = getMessages('en'); // Fallback to English
  
  return function t(key: string, options?: { returnObjects?: boolean }): string | string[] | any {
    const keys = key.split('.');
    let value: any = msgs;
    let found = true;
    
    // Try to find the key in the current locale
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        found = false;
        break;
      }
    }
    
    // If not found in current locale, try English as fallback
    if (!found && locale !== 'en') {
      value = enMsgs;
      found = true;
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          found = false;
          break;
        }
      }
    }
    
    // If still not found, return the key
    if (!found) {
      console.warn(`Translation missing for key: ${key} (${locale})`);
      return options?.returnObjects ? [] : key;
    }
    
    if (options?.returnObjects && (Array.isArray(value) || typeof value === 'object')) {
      return value;
    }
    
    return typeof value === 'string' ? value : key;
  };
}

// Check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
