import { ArrowUpRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { formatCapacity, formatHeilAresShare, type Project } from "@/data/projects";
import { getSupportedLang } from "@/i18n";
import { LocalizedLink } from "@/components/site/LocalizedLink";

export function ProjectCard({ project }: { project: Project }) {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);

  return (
    <LocalizedLink
      to={`/tehtud-tood/${project.slug}`}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-card)]">
        <img
          src={project.coverImage}
          alt={project.coverAlt[lang]}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-3 py-1 text-[12px] font-semibold tracking-[0.02em] text-[var(--brand-glow)] backdrop-blur">
          {t(`projectsSection.filter.${project.category}`)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-[12px] text-white/55">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {project.location[lang]}
        </div>
        <h3 className="font-display mt-2 text-[20px] font-bold leading-tight text-white">
          {project.title[lang]}
        </h3>

        <div className="mt-auto pt-5">
          <div className="border-t border-[var(--border)] pt-5">
            <div className="text-[10px] font-semibold uppercase leading-tight tracking-[0.12em] text-white/50">
              {t("projectsSection.share")}
            </div>
            {project.shareBreakdown ? (
              <dl className="mt-2 space-y-2">
                {[
                  [project.shareBreakdown.mechanicalKw, t("projectsSection.shareMechanical")],
                  [project.shareBreakdown.electricalKw, t("projectsSection.shareElectrical")],
                ].map(([kw, label]) => (
                  <div key={label as string} className="flex items-baseline gap-3">
                    <dt className="font-display min-w-[4.5rem] text-[22px] font-bold leading-none text-[var(--brand-glow)]">
                      {formatCapacity(kw as number, lang)}
                    </dt>
                    <dd className="text-[12px] leading-snug text-white/65">{label as string}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <div className="font-display mt-2 text-[22px] font-bold leading-none text-[var(--brand-glow)]">
                {formatHeilAresShare(project, lang)}
              </div>
            )}
          </div>

          <div className="mt-4 flex items-end justify-between gap-3">
            <div className="text-[12px] leading-snug text-white/55">
              <span className="block text-white/40">{t("projectsSection.capacity")}</span>
              <span className="mt-0.5 block font-medium text-white/75">
                {formatCapacity(project.parkCapacityKw, lang)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-white/50">{project.period}</span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border)] text-white/60 transition group-hover:border-[var(--brand)] group-hover:text-[var(--brand-glow)]">
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </LocalizedLink>
  );
}
