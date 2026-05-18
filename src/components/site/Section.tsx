import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
      <Sparkles className="h-3 w-3" />
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
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left mx-0"}`}>
      {eyebrow && <SectionBadge>{eyebrow}</SectionBadge>}
      <h2 className="mt-4 text-balance text-[32px] font-bold leading-[1.05] tracking-tight text-white md:text-[48px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-balance text-base leading-relaxed text-white/65 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
