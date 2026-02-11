import "./globals.css";
import Footer from "@/components/Footer";
import QuickChat from "@/components/QuickChat";
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n";

// Generate static params for all supported locales
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ko' }
  ];
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const validLocale = isValidLocale(locale) ? (locale as Locale) : defaultLocale;

  return (
    <>
      {children}
      <Footer locale={validLocale} />
      <QuickChat />
    </>
  );
}
