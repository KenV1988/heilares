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
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-card)]">
        <img
          src={project.coverImage}
          alt={project.coverAlt}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-glow)] backdrop-blur">
          {t(`projectsSection.filter.${project.category}`)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-[12px] text-white/55">
          <MapPin className="h-3.5 w-3.5" />
          {project.location}
        </div>
        <h3 className="font-display mt-2 text-[20px] font-bold leading-tight text-white">
          {project.title[lang]}
        </h3>
        <div className="mt-auto flex items-end justify-between border-t border-[var(--border)] pt-5">
          <div>
            {project.capacityKw ? (
              <div className="font-display text-[20px] font-bold leading-none text-[var(--brand-glow)]">
                {formatCapacity(project.capacityKw, lang)}
              </div>
            ) : (
              <div className="font-display text-[18px] font-bold leading-none text-[var(--brand-glow)]">
                {t(`projectsSection.filter.${project.category}`)}
              </div>
            )}
            <div className="mt-1.5 text-[12px] text-white/50">{project.yearCompleted}</div>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] text-white/60 transition group-hover:border-[var(--brand)] group-hover:text-[var(--brand-glow)]">
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
