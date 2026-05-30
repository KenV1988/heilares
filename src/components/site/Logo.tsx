import { Link } from "@tanstack/react-router";
import { Sun } from "lucide-react";

export function Logo() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5 font-bold tracking-tight text-white"
      aria-label="HeilAres — avaleht"
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]">
        <Sun className="h-4.5 w-4.5 text-[var(--brand)] transition group-hover:rotate-45" strokeWidth={2.4} />
      </span>
      <span className="text-[15px] tracking-[0.18em]">HEILARES</span>
    </Link>
  );
}
