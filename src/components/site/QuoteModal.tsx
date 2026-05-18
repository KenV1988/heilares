import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ContactForm } from "./ContactForm";

interface Props {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  defaultType?: string;
}

export function QuoteModal({ open, onOpenChange, defaultType }: Props) {
  const { t } = useTranslation();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl border-[var(--border)] bg-[var(--bg-elevated)] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{t("quote.title")}</DialogTitle>
          <DialogDescription className="text-white/65">{t("quote.subtitle")}</DialogDescription>
        </DialogHeader>
        <ContactForm compact defaultType={defaultType} onSubmitted={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}

// re-export the zod schema in case other forms need it
export const contactSchemaFactory = (t: ReturnType<typeof useTranslation>["t"]) =>
  z.object({
    name: z.string().min(1, t("contact.errors.nameRequired")),
    email: z.string().min(1, t("contact.errors.emailRequired")).email(t("contact.errors.emailInvalid")),
    phone: z.string().optional(),
    company: z.string().optional(),
    projectType: z.string().optional(),
    message: z.string().min(1, t("contact.errors.messageRequired")),
  });

export type ContactValues = z.infer<ReturnType<typeof contactSchemaFactory>>;

export const useContactForm = (defaultType?: string) => {
  const { t } = useTranslation();
  return useForm<ContactValues>({
    resolver: zodResolver(contactSchemaFactory(t)),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: defaultType ?? "",
      message: "",
    },
  });
};
