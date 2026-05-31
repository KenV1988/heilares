import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/nav";
import { company } from "@/data/company";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socials = [
    { Icon: Facebook, href: company.social.facebook, label: "Facebook" },
    { Icon: Instagram, href: company.social.instagram, label: "Instagram" },
    { Icon: Linkedin, href: company.social.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-[var(--gold)]/20 bg-[var(--bg-elevated)]">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">{t("footer.tagline")}</p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border)] text-white/70 transition hover:border-[var(--ring)] hover:text-[var(--brand)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              {t("footer.nav")}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/75 transition hover:text-[var(--brand)]">
                    {t(l.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              {t("footer.contactCol")}
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 text-[var(--brand)]" />
                <a href={`mailto:${company.email}`} className="hover:text-[var(--brand)]">
                  {company.email}
                </a>
              </li>
              {company.contacts.map((c) => (
                <li key={c.phoneHref} className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand)]" />
                  <div>
                    <div className="font-medium text-white">{c.name}</div>
                    <div className="text-xs text-white/55">{c.area}</div>
                    <a href={c.phoneHref} className="mt-0.5 inline-block hover:text-[var(--brand)]">
                      {c.phone}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brand)]" />
                <span>{t("contact.info.locationValue")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 text-[var(--brand)]" />
                <span>{t("contact.info.hoursValue")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--gold)]/20 pt-6 text-xs text-white/45 md:flex-row md:items-center">
          <p>
            © {year} {company.name}. {t("footer.rights")}.
          </p>
          <p className="font-mono tracking-wider">{company.email}</p>
        </div>
      </div>
    </footer>
  );
}
