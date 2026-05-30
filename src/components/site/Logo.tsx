import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-3 font-display font-bold tracking-tight text-white"
      aria-label="HeilAres — avaleht"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]">
        <span
          className="block h-3 w-3 rounded-full bg-gradient-to-br from-[var(--brand-glow)] to-[var(--brand)] shadow-[0_0_12px_rgba(127,224,106,0.55)] transition group-hover:scale-110"
        />
      </span>
      <span className="text-[14px] font-bold tracking-[0.22em] md:text-[15px]">HEILARES</span>
    </Link>
  );
}
