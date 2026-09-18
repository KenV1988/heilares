import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { localizePath, type Lang } from "@/i18n";

/**
 * Sticky bottom CTA bar — mobile only. Appears after the user has scrolled
 * past 600px. Hides on scroll-up (down → show, up → hide).
 */
export function MobileStickyCTA() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const currentLang = (pathname.split("/").filter(Boolean)[0] || "et") as Lang;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let raf = 0;

    const update = () => {
      const y = window.scrollY;
      const past = y > 600;
      const goingDown = y > lastY + 4;
      const goingUp = y < lastY - 4;
      if (past && goingDown) setVisible(true);
      else if (goingUp || !past) setVisible(false);
      lastY = y;
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <div className="pointer-events-auto border-t border-white/10 bg-[rgba(10,15,13,0.95)] backdrop-blur-xl">
        <div className="flex h-16 items-center gap-2 px-4">
          <Link
            to={localizePath("/toojou-rent", currentLang)}
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[var(--brand)] text-[14px] font-semibold text-[#06120A]"
          >
            {t("nav.workforce")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
