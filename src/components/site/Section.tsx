import type { ReactNode } from "react";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="block text-pretty text-[18px] font-medium normal-case leading-snug tracking-normal text-brand md:text-[20px]">
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
      <h2 className="font-display mt-5 text-balance text-[36px] font-bold leading-[1.1] tracking-normal text-foreground md:text-[56px] lg:text-[64px]">
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
