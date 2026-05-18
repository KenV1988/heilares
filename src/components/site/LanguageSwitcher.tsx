import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGS = [
  { code: "et", label: "EST", name: "Eesti" },
  { code: "en", label: "ENG", name: "English" },
  { code: "fi", label: "FIN", name: "Suomi" },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = LANGS.find((l) => l.code === i18n.language.slice(0, 2)) ?? LANGS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)]/60 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white/85 transition hover:border-[var(--ring)] hover:text-white"
        aria-label="Switch language"
      >
        <Globe className="h-3.5 w-3.5 text-[var(--brand)]" />
        <span>{current.label}</span>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px] border-[var(--border)] bg-[var(--bg-elevated)] text-white"
      >
        {LANGS.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className={`cursor-pointer text-sm ${
              l.code === current.code ? "text-[var(--brand)]" : "text-white/85"
            }`}
          >
            <span className="mr-2 font-semibold">{l.label}</span>
            <span className="text-white/60">{l.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
