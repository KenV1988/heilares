import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { formatCapacity, type Project } from "@/data/projects";
import { getSupportedLang } from "@/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  return (
    <Link
      to="/tehtud-tood/$slug"
      params={{ slug: project.slug }}
      className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] transition hover:border-[var(--ring)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-card)]">
        <img
          src={project.coverImage}
          alt={project.coverAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand)] backdrop-blur">
          {t(`projectsSection.filter.${project.category}`)}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-xs text-white/55">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </div>
        <h3 className="mt-2 text-lg font-bold text-white">{project.title[lang]}</h3>
        <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
          <div>
            {project.capacityKw ? (
              <div className="text-lg font-bold text-[var(--brand)]">
                {formatCapacity(project.capacityKw, lang)}
              </div>
            ) : (
              <div className="text-lg font-bold text-[var(--brand)]">
                {t(`projectsSection.filter.${project.category}`)}
              </div>
            )}
            <div className="text-xs text-white/50">{project.yearCompleted}</div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]" />
        </div>
      </div>
    </Link>
  );
}
