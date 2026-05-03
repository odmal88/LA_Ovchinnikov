"use client";

import { useState } from "react";
import { Send } from "lucide-react";
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // На первом этапе — имитация отправки
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 bg-section rounded-sm border border-soft text-center">
        <h3 className="font-serif text-xl text-foreground mb-2">
          Сообщение отправлено
        </h3>
        <p className="text-muted-foreground">
          Спасибо за обращение. Администратор архива рассмотрит ваше сообщение.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Ваше имя</FieldLabel>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Как к вам обращаться"
            required
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="contact">Email или телефон</FieldLabel>
          <Input
            id="contact"
            name="contact"
            type="text"
            placeholder="Контактные данные для связи"
            required
          />
        </Field>
      </FieldGroup>

      <Field>
        <FieldLabel htmlFor="materialType">Тип материала</FieldLabel>
        <Select name="materialType" required>
          <SelectTrigger id="materialType">
            <SelectValue placeholder="Выберите тип материала" />
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
        <FieldLabel htmlFor="message">Сообщение</FieldLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="Опишите материал, который хотите передать в архив"
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
          Я согласен на обработку персональных данных для целей работы архива
        </label>
      </div>

      {/* Примечание */}
      <p className="text-xs text-muted-foreground bg-section p-3 rounded-sm">
        {contactsContent.formNote}
      </p>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto bg-olive hover:bg-olive/90"
        disabled={!consent}
      >
        Отправить
        <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
}
