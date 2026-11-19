import { ArrowLeft, Battery, Check, Gauge, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getSupportedLang } from "@/i18n";
import {
  bessProjectLabels as labels,
  formatStorage,
  formatStorageMwh,
  type BessProject,
} from "@/data/bess-projects";
import { SiteLayout } from "./Layout";
import { SectionBadge } from "./Section";
import { LocalizedLink } from "./LocalizedLink";
import { CTA } from "./CTA";

export function BessProjectDetail({ project }: { project: BessProject }) {
  const { i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const cover = project.photos[0];
  const gallery = project.photos.slice(1);
  return (
    <SiteLayout>
      <article className="pt-32 md:pt-40">
        <div className="container-x">
          <LocalizedLink
            to="/tehtud-tood"
            className="inline-flex items-center gap-2 text-sm text-foreground/65 transition hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            {labels.back[lang]}
          </LocalizedLink>
          <div className="mt-8 max-w-4xl">
            <SectionBadge>{labels.category[lang]}</SectionBadge>
            <h1 className="mt-5 text-balance text-[36px] font-bold leading-[1.1] tracking-normal text-foreground md:text-[64px]">
              {project.title[lang]}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/70 md:text-lg">
              {project.description[lang]}
            </p>
          </div>
          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                Icon: Battery,
                label: labels.capacity[lang],
                value: formatStorage(project.storageKwh, lang),
                extra: formatStorageMwh(project.storageKwh, lang),
              },
              { Icon: Gauge, label: labels.power[lang], value: `${project.inverterPowerKw} kW` },
              { Icon: MapPin, label: labels.location[lang], value: project.location[lang] },
            ].map(({ Icon, label, value, extra }) => (
              <div key={label} className="rounded-2xl border border-border bg-bg-elevated p-5">
                <dt className="flex items-center gap-2 text-xs leading-snug text-foreground/55">
                  <Icon className="h-4 w-4 shrink-0" />
                  {label}
                </dt>
                <dd className="mt-2 text-xl font-bold text-foreground">{value}</dd>
                {extra && <dd className="mt-1 text-sm text-foreground/60">{extra}</dd>}
              </div>
            ))}
          </dl>
        </div>
        {cover && (
          <div className="container-x mt-12 md:mt-16">
            <div className="overflow-hidden rounded-3xl border border-border bg-bg-card">
              <img
                src={cover.src}
                alt={cover.alt[lang]}
                loading="eager"
                fetchPriority="high"
                width={1316}
                height={987}
                className="aspect-[4/3] w-full object-cover md:aspect-[16/10]"
              />
            </div>
          </div>
        )}
        <section className="container-x py-16 md:py-24">
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            {labels.work[lang]}
          </h2>
          <ul className="mt-8 max-w-4xl divide-y divide-border">
            {project.work.map((item, index) => (
              <li key={index} className="flex items-start gap-4 py-5">
                <Check className="mt-1 h-5 w-5 shrink-0 text-brand" />
                <span className="text-base leading-relaxed text-foreground/80 md:text-lg">
                  {item[lang]}
                </span>
              </li>
            ))}
          </ul>
          {gallery.length > 0 && (
            <div className="mt-12 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((photo) => (
                <img
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt[lang]}
                  loading="lazy"
                  width={987}
                  height={1316}
                  className="aspect-[3/4] w-full rounded-2xl border border-border object-cover"
                />
              ))}
            </div>
          )}
        </section>
      </article>
      <CTA />
    </SiteLayout>
  );
}
