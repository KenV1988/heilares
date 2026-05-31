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
        className="h-9 w-auto md:h-11"
        draggable={false}
      />
    </Link>
  );
}
