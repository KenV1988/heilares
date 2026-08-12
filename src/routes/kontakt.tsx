import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Plus, Minus } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Seo } from "@/components/site/Seo";
import { PageHero } from "@/components/site/PageHero";
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

const PANEL =
  "rounded-2xl bg-[rgba(16,22,15,0.6)] p-5 md:p-6 border";
const PANEL_STYLE = { borderColor: "rgba(214,178,106,0.12)" } as const;

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border text-[var(--brand-glow)]"
      style={{
        background: "rgba(16,22,15,0.6)",
        borderColor: "rgba(214,178,106,0.12)",
      }}
    >
      {children}
    </div>
  );
}

const CONTACT_EMAILS: Record<string, string> = {
  "Kristjan Lepik": "kristjan@heilares.ee",
  "Lauri Sal-al-Saller": "lauri@heilares.ee",
};

const HEILARES_LAT = "59.3142143";
const HEILARES_LNG = "24.5706397";
const MIN_ZOOM = 4;
const MAX_ZOOM = 17;

function ContactPage() {
  const { t } = useTranslation();
  const [zoom, setZoom] = useState(6);

  return (
    <SiteLayout>
      <Seo titleKey="seo.contact.title" descriptionKey="seo.contact.description" />

      <PageHero
        badge={t("hero.badge")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
        compact
        decorative="diamonds"
      />

      {/* Contact cards — Kristjan + Lauri */}
      <section className="container-x pt-4 pb-2">
        <div className="grid gap-5 md:grid-cols-2">
          {company.contacts.map((c) => {
            const email = CONTACT_EMAILS[c.name];
            return (
              <div key={c.phoneHref} className={PANEL} style={PANEL_STYLE}>
                <div className="flex items-start gap-4">
                  <IconBox>
                    <Phone className="h-5 w-5" />
                  </IconBox>
                  <div className="min-w-0">
                    <div className="text-lg font-semibold text-white">{c.name}</div>
                    <div className="mt-0.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                      {c.area}
                    </div>
                    <a
                      href={c.phoneHref}
                      className="mt-3 flex items-center gap-2 text-[15px] text-white/85 hover:text-[var(--brand-glow)]"
                    >
                      <Phone className="h-4 w-4 text-[var(--brand-glow)]" />
                      <span className="font-medium">{c.phone}</span>
                    </a>
                    {email && (
                      <a
                        href={`mailto:${email}`}
                        className="mt-1.5 flex items-center gap-2 text-[15px] text-white/85 hover:text-[var(--brand-glow)]"
                      >
                        <Mail className="h-4 w-4 text-[var(--brand-glow)]" />
                        <span className="font-medium">{email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Info row — Email / Location / Hours */}
      <section className="container-x pt-5 pb-2">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { Icon: Mail, label: t("contact.info.email"), value: company.email, href: `mailto:${company.email}` },
            { Icon: MapPin, label: t("contact.info.location"), value: t("contact.info.locationValue") },
            { Icon: Clock, label: t("contact.info.hours"), value: t("contact.info.hoursValue") },
          ].map(({ Icon, label, value, href }) => {
            const body = (
              <div className={`${PANEL} flex items-start gap-4`} style={PANEL_STYLE}>
                <IconBox>
                  <Icon className="h-5 w-5" />
                </IconBox>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    {label}
                  </div>
                  <div className="mt-1 text-base font-medium text-white">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">{body}</a>
            ) : (
              <div key={label}>{body}</div>
            );
          })}
        </div>
      </section>

      {/* Location map */}
      <section className="container-x py-12 md:py-16">
        <div className="mb-6 flex items-center gap-3">
          <MapPin className="h-5 w-5 text-[var(--brand-glow)]" />
          <h2 className="text-2xl font-semibold text-white">{t("contact.info.location")}</h2>
        </div>
        <div
          className="relative overflow-hidden rounded-2xl border"
          style={{ borderColor: "rgba(214,178,106,0.18)" }}
        >
          <iframe
            title="HeilAres asukoht Google Mapsil"
            src="https://maps.google.com/maps?q=59.3142143,24.5706397&t=&z=6&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="420"
            style={{ border: 0, display: "block", pointerEvents: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={-1}
          />
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=59.3142143%2C24.5706397"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[#06120C] shadow-lg transition hover:brightness-110"
            style={{ background: "var(--brand-glow)" }}
          >
            <MapPin className="h-4 w-4" />
            Juhised HeilAresesse
          </a>
        </div>

      </section>

      <section className="container-x pb-12 md:pb-16">
        <div className={`${PANEL} p-7 md:p-10`} style={PANEL_STYLE}>
          <ContactForm />
        </div>
      </section>
    </SiteLayout>
  );
}
