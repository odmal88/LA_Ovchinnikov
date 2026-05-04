"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { contactsContent } from "@/lib/data/site-config";

const FORM_ENDPOINT = "https://formsubmit.co/od03@yandex.ru";

export function ContactForm() {
  const [showNotice, setShowNotice] = useState(false);
  const [consent, setConsent] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const formText = contactsContent.form;

  useEffect(() => {
    const currentUrl = window.location.href.split("?")[0];
    const params = new URLSearchParams(window.location.search);

    setNextUrl(`${currentUrl}?sent=1`);
    setPageUrl(window.location.href);
    setShowNotice(params.get("sent") === "1");
  }, []);

  return (
    <form action={FORM_ENDPOINT} method="POST" className="space-y-6">
      {showNotice && (
        <div className="p-5 bg-section rounded-sm border border-soft border-l-4 border-l-brick">
          <h3 className="font-serif text-xl text-foreground mb-2">
            {formText.sentTitle}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {formText.sentText}
          </p>
        </div>
      )}

      <input type="hidden" name="_subject" value="Новое обращение с сайта Льва Овчинникова" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={nextUrl} />
      <input type="hidden" name="Страница отправки" value={pageUrl} />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" />

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">{formText.nameLabel}</FieldLabel>
          <Input
            id="name"
            name="Имя"
            type="text"
            placeholder={formText.namePlaceholder}
            required
            maxLength={120}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact">{formText.contactLabel}</FieldLabel>
          <Input
            id="contact"
            name="Контакт для связи"
            type="text"
            placeholder={formText.contactPlaceholder}
            required
            maxLength={160}
          />
        </Field>
      </FieldGroup>

      <Field>
        <FieldLabel htmlFor="materialType">
          {formText.materialTypeLabel}
        </FieldLabel>
        <Select name="Тип материала" required>
          <SelectTrigger id="materialType">
            <SelectValue placeholder={formText.materialTypePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {contactsContent.materialTypes.map((type) => (
              <SelectItem key={type.value} value={type.label}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field>
        <FieldLabel htmlFor="message">{formText.messageLabel}</FieldLabel>
        <Textarea
          id="message"
          name="Сообщение"
          placeholder={formText.messagePlaceholder}
          rows={5}
          required
          minLength={10}
          maxLength={3000}
        />
      </Field>

      <div className="flex items-start gap-3">
        <Checkbox
          id="consent"
          checked={consent}
          onCheckedChange={(checked) => setConsent(checked === true)}
          required
        />
        <label
          htmlFor="consent"
          className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
        >
          {formText.consentLabel}
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto bg-brick text-background hover:bg-brick/90 disabled:cursor-not-allowed disabled:bg-brick/70 disabled:text-background disabled:opacity-100"
        disabled={!consent}
      >
        {formText.submitLabel}
        <FileText className="ml-2 h-4 w-4" />
      </Button>

      {!consent && (
        <p className="text-xs text-muted-foreground">
          Чтобы отправить обращение, отметьте согласие на обработку персональных данных.
        </p>
      )}

      <p className="text-xs text-muted-foreground bg-section p-3 rounded-sm">
        {contactsContent.formNote}
      </p>
    </form>
  );
}
