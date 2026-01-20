import "./globals.css";

// Generate static params for all supported locales
export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'ko' }
  ];
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return children; 
}
