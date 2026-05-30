import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { SectionBadge } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/data/company";
import i18n from "@/i18n";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: i18n.t("seo.contact.title") },
      { name: "description", content: i18n.t("seo.contact.description") },
      { property: "og:title", content: i18n.t("seo.contact.title") },
      { property: "og:description", content: i18n.t("seo.contact.description") },
    ],
    links: [
      { rel: "canonical", href: "https://heilares.ainiki.ee/kontakt" },
    ],
  }),
});

function ContactPage() {
  const { t } = useTranslation();

  const meta = [
    { Icon: Mail, label: t("contact.info.email"), value: company.email, href: `mailto:${company.email}` },
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

      <section className="container-x pt-4 pb-2">
        <div className="grid gap-5 md:grid-cols-2">
          {company.contacts.map((c) => (
            <a
              key={c.phoneHref}
              href={c.phoneHref}
              className="group flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--ring)]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-lg font-semibold text-white">{c.name}</div>
                <div className="mt-0.5 text-xs uppercase tracking-wider text-[var(--brand)]">
                  {c.area}
                </div>
                <div className="mt-2 font-mono text-base text-white/85 group-hover:text-[var(--brand)]">
                  {c.phone}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container-x py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-14">
          <div className="space-y-3">
            {meta.map(({ Icon, label, value, href }) => {
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
