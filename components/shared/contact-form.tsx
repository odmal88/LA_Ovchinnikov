"use client";

import { useState } from "react";
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

export function ContactForm() {
  const [showNotice, setShowNotice] = useState(false);
  const [consent, setConsent] = useState(false);
  const formText = contactsContent.form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowNotice(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showNotice && (
        <div className="p-5 bg-section rounded-sm border border-soft border-l-4 border-l-brick">
          <h3 className="font-serif text-xl text-foreground mb-2">
            {formText.notConnectedTitle}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {formText.notConnectedText}
          </p>
        </div>
      )}

      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">{formText.nameLabel}</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={formText.namePlaceholder}
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact">{formText.contactLabel}</FieldLabel>
          <Input
            id="contact"
            name="contact"
            type="text"
            placeholder={formText.contactPlaceholder}
            required
          />
        </Field>
      </FieldGroup>

      <Field>
        <FieldLabel htmlFor="materialType">
          {formText.materialTypeLabel}
        </FieldLabel>
        <Select name="materialType" required>
          <SelectTrigger id="materialType">
            <SelectValue placeholder={formText.materialTypePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {contactsContent.materialTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
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
          name="message"
          placeholder={formText.messagePlaceholder}
          rows={5}
          required
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

      <p className="text-xs text-muted-foreground bg-section p-3 rounded-sm">
        {contactsContent.formNote}
      </p>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto bg-brick hover:bg-brick/90"
        disabled={!consent}
      >
        {formText.submitLabel}
        <FileText className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
