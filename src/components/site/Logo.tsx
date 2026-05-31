import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/brand/heilares-horizontal.svg";

export function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center py-1"
      aria-label="HeilAres — avaleht"
    >
      <img
        src={logoSrc}
        alt="HeilAres"
        width={147}
        height={44}
        className="h-9 w-auto md:h-11 [filter:drop-shadow(0_1px_2px_rgba(0,0,0,0.55))_drop-shadow(0_0_1px_rgba(0,0,0,0.4))]"
        draggable={false}
      />
    </Link>
  );
}
