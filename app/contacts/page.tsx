import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { ContactForm } from "@/components/shared/contact-form";
import { contactsContent } from "@/lib/data/site-config";

export const metadata: Metadata = {
  title: "Контакты",
  description: contactsContent.metadataDescription,
};

export default function ContactsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16 md:pb-24">
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
