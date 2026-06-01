import type { ReactNode } from "react";
import { SectionBadge } from "./Section";

export interface HeroStat {
  value: string;
  label: string;
}

interface Props {
  badge?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  backgroundImage?: string;
  backgroundAlt?: string;
  stats?: HeroStat[];
  compact?: boolean;
  decorative?: "diamonds";
}

export function PageHero({
  badge,
  title,
  subtitle,
  backgroundImage,
  backgroundAlt,
  stats,
  compact = false,
  decorative,
}: Props) {
  return (
    <section
      className={`relative flex flex-col overflow-hidden ${
        compact ? "min-h-[280px] pt-36 pb-12" : "min-h-[420px] pt-36 pb-12 md:min-h-[520px] md:pt-44 md:pb-16"
      }`}
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt={backgroundAlt || ""}
            aria-hidden={!backgroundAlt}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.22]"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,15,13,0.5) 0%, rgba(10,15,13,0.85) 60%, rgba(10,15,13,1) 100%)",
            }}
          />
        </>
      )}
      {!backgroundImage && (
        <div className="absolute inset-x-0 top-0 h-[500px] radial-glow -z-10" />
      )}

      {decorative === "diamonds" && (
        <div className="pointer-events-none absolute inset-x-0 top-28 flex justify-center gap-3 opacity-25" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-2.5 w-2.5 rotate-45 border border-[var(--gold)]"
            />
          ))}
        </div>
      )}

      <div className="container-x relative z-10 flex flex-1 flex-col items-center justify-center">
        <div className="w-full text-center">
          {badge && <SectionBadge>{badge}</SectionBadge>}
          <h1 className="mx-auto mt-5 max-w-3xl text-[40px] font-bold leading-[1.05] tracking-tight text-white md:text-[64px] min-h-[2.1em]">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-3xl text-base text-white/70 md:text-lg min-h-[3.5rem] md:min-h-[4rem]">
              {subtitle}
            </p>
          )}
          {decorative === "diamonds" && (
            <div
              className="mx-auto mt-8 h-px w-40"
              style={{ background: "rgba(214,178,106,0.4)" }}
              aria-hidden
            />
          )}
        </div>

        {stats && stats.length > 0 && (
          <div
            className="mt-auto pt-12"
          >
            <div
              className="border-t pt-8"
              style={{ borderColor: "rgba(214,178,106,0.18)" }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats.map((s, i) => (
                  <div key={i}>
                    <div
                      className="font-display text-[28px] font-bold leading-none md:text-[40px]"
                      style={{ color: "#D6B26A" }}
                    >
                      {s.value}
                    </div>
                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 md:text-xs">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
