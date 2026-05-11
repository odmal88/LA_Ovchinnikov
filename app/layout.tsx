import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { YandexMetrika } from "@/components/analytics/yandex-metrika";
import { seoKeywords, siteConfig, siteUrl } from "@/lib/data/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.artistNameShort}`,
  },
  description: siteConfig.siteDescription,
  keywords: [...seoKeywords.default],
  authors: [{ name: "Архив Л.А. Овчинникова" }],
  creator: "Архив Л.А. Овчинникова",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: siteConfig.siteTitle,
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f2eef8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="font-serif antialiased bg-background text-foreground">
        {children}
        <YandexMetrika />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
