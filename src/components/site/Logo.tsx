import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/brand/heilares-horizontal.svg";

export function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const cls =
    size === "footer"
      ? "h-[88px] w-auto md:h-[120px]"
      : "h-12 w-auto md:h-16";
  return (
    <Link
      to="/"
      className="inline-flex items-center py-1"
      aria-label="HeilAres — avaleht"
    >
      <img
        src={logoSrc}
        alt="HeilAres"
        width={213}
        height={64}
        className={`${cls} [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.55))_drop-shadow(0_0_1px_rgba(0,0,0,0.4))]`}
        draggable={false}
      />
    </Link>
  );
}
