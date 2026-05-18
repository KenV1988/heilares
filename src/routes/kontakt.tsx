import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { SectionBadge } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/data/company";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();

  const info = [
    { Icon: Mail, label: t("contact.info.email"), value: company.email, href: `mailto:${company.email}` },
    { Icon: Phone, label: t("contact.info.phone"), value: company.phone, href: company.phoneHref },
    { Icon: MapPin, label: t("contact.info.location"), value: t("contact.info.locationValue") },
    { Icon: Clock, label: t("contact.info.hours"), value: t("contact.info.hoursValue") },
  ];

  return (
    <SiteLayout>
      <Seo titleKey="seo.contact.title" descriptionKey="seo.contact.description" />

      <section className="relative pt-36 pb-8 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-[500px] radial-glow -z-10" />
        <div className="container-x text-center">
          <SectionBadge>{t("hero.badge")}</SectionBadge>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px]">
            {t("contact.title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      <section className="container-x py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
          <div className="space-y-3">
            {info.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition hover:border-[var(--ring)]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55">{label}</div>
                    <div className="mt-1 font-medium text-white">{value}</div>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
