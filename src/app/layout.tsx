import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./[locale]/globals.css";
import NavBarServer from "@/components/NavBarServer";
import SocialIcons from "@/components/UI/SocialIcons";

const inter = Roboto({
  subsets: ["latin"],
  weight: "100"
});

export const metadata: Metadata = {
  title: "Eternal Sky Tours",
  description: "Eternal Sky Tours is a tour operator in Mongolia that offers tours to the most popular destinations in the country.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NavBarServer/>
        <SocialIcons/>
        {children}
      </body>
    </html>
  );
}

