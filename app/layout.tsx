import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/lib/data/site-config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.artistNameShort}`,
  },
  description: siteConfig.siteDescription,
  keywords: [
    "Лев Овчинников",
    "Лев Авксентьевич Овчинников",
    "художник",
    "живопись",
    "Ленинград",
    "Санкт-Петербург",
    "русское искусство",
    "цифровой архив",
  ],
  authors: [{ name: "Архив Л.А. Овчинникова" }],
  creator: "Архив Л.А. Овчинникова",
  openGraph: {
    type: "website",
    locale: "ru_RU",
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
  },
};

export const viewport: Viewport = {
  themeColor: "#ECE0CC",
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
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
