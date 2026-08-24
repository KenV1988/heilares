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

  const goldBorder = { borderColor: "rgba(214,178,106,0.30)" };
  const goldDivider = { borderColor: "rgba(214,178,106,0.18)" };

  const directions = [
    { label: t("footer.dirGreen"), to: "/paikesepargid" as const, accent: false },
    { label: t("footer.dirWorkforce"), to: "/toojou-rent" as const, accent: false },
    { label: t("footer.dirWorks"), to: "/tehtud-tood" as const, accent: false },
    { label: t("footer.dirQuote"), to: "/kontakt" as const, accent: true },
  ];


  const Diamond = () => (
    <span
      aria-hidden
      className="mt-6 inline-block h-2 w-2 rotate-45"
      style={{ background: "rgba(214,178,106,0.25)" }}
    />
  );

  return (
    <footer className="bg-[var(--bg-elevated)]" style={{ borderTop: "1px solid rgba(214,178,106,0.2)" }}>
      <div className="container-x pt-16 pb-6 md:pt-20 md:pb-6">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1.2fr_1fr]">
          {/* Brand column */}
          <div className="flex flex-col">
            <Logo size="footer" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/65">
              {t("footer.tagline")}
            </p>
            <Diamond />
          </div>

          {/* Nav */}
          <div className="md:pt-[24px]">
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

          {/* Contact */}
          <div className="md:pt-[24px]">
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
                    <div className="text-xs text-white/55">{t(c.areaKey)}</div>
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

          {/* Suunad */}
          <div className="md:pt-[24px]">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Suunad
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {directions.map((d) => (
                <li key={d.to + d.label}>
                  <Link
                    to={d.to}
                    className={
                      d.accent
                        ? "font-semibold text-[#D6B26A] transition hover:text-[var(--gold-light)]"
                        : "text-white/75 transition hover:text-[var(--brand)]"
                    }
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Diamond />
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-1 items-center gap-3 border-t pt-5 text-xs text-white/45 md:grid-cols-3"
          style={goldDivider}
        >
          <div className="flex gap-2.5 md:justify-start justify-center">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group grid h-8 w-8 place-items-center rounded-full border bg-transparent transition hover:[border-color:rgba(214,178,106,0.6)]"
                style={goldBorder}
              >
                <Icon className="h-4 w-4 text-[var(--gold)] transition group-hover:text-[var(--gold-light)]" />
              </a>
            ))}
          </div>
          <p className="text-center">
            © {year} {company.name}. {t("footer.rights")}.
          </p>
          <div className="md:text-right text-center">
            <a
              href="/"
              className="transition hover:opacity-100"
              style={{ color: "rgba(214,178,106,0.6)" }}
            >
              heilares.ee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
