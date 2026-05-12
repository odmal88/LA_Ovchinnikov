import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/shared/contact-form";
import { contactsContent, seoKeywords, siteConfig, siteUrl } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: contactsContent.title,
  description: contactsContent.metadataDescription,
  keywords: [...seoKeywords.contacts],
  alternates: {
    canonical: "/contacts",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: `${siteUrl}/contacts`,
    siteName: siteConfig.siteTitle,
    title: contactsContent.title,
    description: contactsContent.metadataDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: contactsContent.title,
    description: contactsContent.metadataDescription,
  },
};

const contactsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${siteUrl}/contacts#contact`,
  url: `${siteUrl}/contacts`,
  name: contactsContent.title,
  description: contactsContent.metadataDescription,
  inLanguage: "ru-RU",
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteConfig.siteTitle,
  },
  about: {
    "@type": "Person",
    "@id": `${siteUrl}/#lev-ovchinnikov`,
    name: siteConfig.artistName,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Контакты",
        item: `${siteUrl}/contacts`,
      },
    ],
  },
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
        <JsonLd data={contactsJsonLd} />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                {contactsContent.title}
              </h1>

              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                {contactsContent.intro.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-section p-6 rounded-sm border border-soft">
                <h2 className="font-medium text-foreground mb-4">
                  {contactsContent.materialsHelpTitle}
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {contactsContent.materialsHelpItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-card p-6 md:p-8 rounded-sm border border-soft">
                <h2 className="font-serif text-xl text-foreground mb-6">
                  {contactsContent.form.title}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
