import { ArrowUpRight, ChevronDown, Battery, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getSupportedLang } from "@/i18n";
import {
  bessProjectLabels as labels,
  formatStorage,
  formatStorageMwh,
  type BessProject,
} from "@/data/bess-projects";
import { ContentLink } from "./ContentLink";
import { ProjectCardFrame, type ProjectExpansionProps } from "./ProjectCardFrame";

export function BessProjectCard({ project, expanded, onToggle }: { project: BessProject } & ProjectExpansionProps) {
  const { i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const cover = project.photos[0];
  return (
    <ProjectCardFrame
      slug={project.slug}
      expanded={expanded}
      onToggle={onToggle}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elevated"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-card">
        {cover ? (
          <img
            src={cover.src}
            alt={cover.alt[lang]}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-5 bg-bg-accent text-brand">
            <Battery className="h-16 w-16" strokeWidth={1} aria-hidden />
            <span className="font-display text-3xl font-bold text-gold">
              {formatStorage(project.storageKwh, lang)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-1.5 text-xs text-foreground/55">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {project.location[lang]}
        </div>
        <h3 id={`project-title-${project.slug}`} className="font-display mt-2 text-xl font-bold leading-tight text-foreground">
          {onToggle ? <ContentLink kind="project" slug={project.slug} className="pointer-events-auto relative z-10 hover:text-brand">{project.title[lang]}</ContentLink> : project.title[lang]}
        </h3>
        <div className="mt-auto pt-5">
          <div className="border-t border-border pt-5">
            <p className="text-xs font-medium text-foreground/55">{labels.capacity[lang]}</p>
            <p className="font-display mt-2 text-[22px] font-bold leading-none text-brand-glow">
              {formatStorage(project.storageKwh, lang)}
            </p>
            <p className="mt-2 text-xs text-foreground/55">
              {formatStorageMwh(project.storageKwh, lang)}
            </p>
          </div>
          <div className="mt-4 flex items-end justify-between gap-3">
            <div className="text-xs leading-snug text-foreground/55">
              <span className="block">{labels.power[lang]}</span>
              <span className="mt-0.5 block font-medium text-foreground/75">
                {project.inverterPowerKw} kW
              </span>
            </div>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-foreground/60 transition group-hover:border-brand group-hover:text-brand-glow">
              <>{onToggle ? <ChevronDown aria-hidden className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} /> : <ArrowUpRight className="h-4 w-4" />}</>
            </span>
          </div>
        </div>
      </div>
    </ProjectCardFrame>
  );
}
