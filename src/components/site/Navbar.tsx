import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NAV_LINKS } from "@/lib/nav";
import { company } from "@/data/company";

export function Navbar() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-[240ms] ease-out ${
          scrolled
            ? "border-b border-[var(--border)] bg-[rgba(10,15,13,0.78)] [backdrop-filter:blur(14px)] [-webkit-backdrop-filter:blur(14px)]"
            : "bg-[rgba(10,15,13,0.35)] [backdrop-filter:blur(8px)] [-webkit-backdrop-filter:blur(8px)]"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between md:h-[104px]">
          <div className="flex-1 md:flex-none md:pr-6">
            <Logo />
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex md:pl-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-3 py-2 text-[14px] font-medium tracking-[0.02em] transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] ${
                    active ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {t(link.key)}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[var(--brand)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <LanguageSwitcher />
            <Link
              to="/toojou-rent"
              className="group inline-flex h-10 items-center gap-1.5 rounded-full bg-[var(--brand)] px-4 text-[13px] font-semibold text-[#06120A] transition hover:bg-[var(--brand-hover)]"
            >
              {t("nav.workforce")}
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-12 w-12 place-items-center rounded-full border border-[var(--border)] text-white md:hidden"
            aria-label="Menüü"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-[#0A0F0D] pt-20 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <nav className="container-x flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link.to);
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={`flex items-baseline gap-4 border-b border-white/5 py-4 ${
                        active ? "text-[var(--brand-glow)]" : "text-white"
                      }`}
                    >
                      <span className="font-display w-9 text-[12px] font-semibold tracking-[0.18em] text-[var(--brand)]">
                        0{i + 1}
                      </span>
                      <span className="font-display text-[32px] font-semibold leading-none tracking-tight">
                        {t(link.key)}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="container-x border-t border-white/10 bg-[#0A0F0D] py-6">
            <Link
              to="/toojou-rent"
              onClick={() => setOpen(false)}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-[15px] font-semibold text-[#06120A]"
            >
              {t("nav.workforce")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-5 flex items-center justify-between text-[13px]">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 text-white/75"
              >
                <Mail className="h-4 w-4 text-[var(--brand)]" />
                {company.email}
              </a>
              <LanguageSwitcher />
            </div>
            <div className="mt-3 flex flex-col gap-2 text-[13px] text-white/75">
              {company.contacts.map((c) => (
                <a
                  key={c.phone}
                  href={c.phoneHref}
                  className="inline-flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-[var(--brand)]" />
                  <span className="font-medium text-white">{c.phone}</span>
                  <span className="text-white/50">· {c.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
