import type { ReactNode } from "react";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
      <span className="hairline" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <SectionBadge>{eyebrow}</SectionBadge>
        </div>
      )}
      <h2 className="font-display mt-5 text-balance text-[36px] font-bold leading-[1.1] tracking-tight text-white md:text-[56px] lg:text-[64px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-balance text-[16px] leading-[1.6] text-white/70 md:text-[18px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** Wraps a section with the signature left hairline accent. */
export function SectionRail({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span
        className="pointer-events-none absolute left-0 top-2 hidden h-px w-14 bg-[var(--brand)]/45 md:block"
        aria-hidden
      />
      {children}
    </div>
  );
}
