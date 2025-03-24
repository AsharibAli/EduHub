import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Banner from "@/components/banner/Banner";
import { BannerProvider } from "@/components/banner/BannerContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduHub | Community & Developer Tooling for EduChain",
  description:
    "EduHub provides developer tools and community resources for the EDU Chain ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6H2T0YGD4E"
      ></Script>
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6H2T0YGD4E');
  `}
      </Script>
      <body className={inter.className}>
        <BannerProvider>
          <Banner />
          {children}
        </BannerProvider>
      </body>
    </html>
  );
}
