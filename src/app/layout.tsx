import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./[locale]/globals.css";
import NavBarServer from "@/components/NavBarServer";
import SocialIcons from "@/components/UI/SocialIcons";
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n";

const inter = Roboto({
  subsets: ["latin"],
  weight: "100"
});

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "Eternal Sky Tours",
  description: "Eternal Sky Tours is a tour operator in Mongolia that offers tours to the most popular destinations in the country.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  // Validate locale and fallback to default if invalid
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;

  return (
    <html lang={validLocale}>
      <body>
        <NavBarServer/>
        <SocialIcons/>
        {children}
        <Footer locale={validLocale}/>
      </body>
    </html>
  );
}

