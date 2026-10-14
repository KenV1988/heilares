import { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";
import { QuoteModal } from "./QuoteModal";

export function Hero() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.pause();
      return;
    }
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    return () => v.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden md:min-h-[720px]">
      {/* background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* gradient overlay bottom→top: opaque base to 35% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,15,13,1) 0%, rgba(10,15,13,0.85) 30%, rgba(10,15,13,0.55) 65%, rgba(10,15,13,0.35) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-x-0 top-0 h-[600px] radial-glow opacity-70" />
      </div>

      <div className="container-x relative z-10 flex flex-1 flex-col items-center justify-center pt-28 pb-16 md:pt-40 md:pb-24">
        <h1 className="font-display mx-auto max-w-5xl text-center text-[44px] font-bold leading-[1.05] tracking-[-0.025em] text-white sm:text-[56px] md:text-[88px] lg:text-[104px]">
          <Trans
            i18nKey="hero.title"
            components={{ accent: <span className="text-gradient" /> }}
            defaults={t("hero.title")}
          />
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-center text-[16px] leading-[1.6] text-white/70 md:text-[18px]">
          {t("hero.subtitle")}
        </p>

        <div className="mt-10 flex min-h-14 flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-[var(--brand)] px-8 text-[15px] font-semibold text-[#06120A] transition hover:bg-[var(--brand-hover)]"
          >
            {t("hero.primaryCta")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <a
            href="#services"
            className="inline-flex h-14 items-center gap-2 text-[15px] font-semibold text-white/90 underline-offset-[6px] transition hover:text-[var(--brand-glow)] hover:underline"
          >
            {t("hero.secondaryCta")}
          </a>
        </div>
      </div>

      <QuoteModal open={open} onOpenChange={setOpen} />
    </section>
  );
}
