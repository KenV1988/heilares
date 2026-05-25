import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SectionBadge } from "./Section";
import { QuoteModal } from "./QuoteModal";

export function Hero() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-base)]/70 via-[var(--bg-base)]/85 to-[var(--bg-base)]" />
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-x-0 top-0 h-[600px] radial-glow" />
      </div>

      <div className="container-x relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionBadge>{t("hero.badge")}</SectionBadge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-balance text-[40px] font-bold leading-[1.02] tracking-tight text-white md:text-[72px] lg:text-[80px]"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 md:text-lg"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 text-sm font-semibold text-[#0a0f0d] transition hover:bg-[var(--brand-hover)]"
          >
            {t("hero.primaryCta")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
          >
            {t("hero.secondaryCta")}
          </a>
        </motion.div>
      </div>

      <QuoteModal open={open} onOpenChange={setOpen} />
    </section>
  );
}
