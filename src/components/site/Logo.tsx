import { Link, useLocation } from "@tanstack/react-router";
import logoSrc from "@/assets/brand/heilares-horizontal.svg";
import { localizePath, type Lang } from "@/i18n";

export function Logo({ size = "header" }: { size?: "header" | "footer" }) {
  const { pathname } = useLocation();
  const currentLang = (pathname.split("/").filter(Boolean)[0] || "et") as Lang;
  const cls = size === "footer" ? "h-[88px] w-auto md:h-[120px]" : "h-12 w-auto md:h-16";
  return (
    <Link
      to={localizePath("/", currentLang)}
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
