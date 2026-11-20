import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getSupportedLang } from "@/i18n";
import { bessProjects, bessProjectLabels, formatStorage } from "@/data/bess-projects";
import { LocalizedLink } from "./LocalizedLink";

const copy = {
  title: { et: "Akupankade projektide võrdlus", en: "Energy storage project comparison", fi: "Akkuvarastoprojektien vertailu", de: "Vergleich der Batteriespeicherprojekte" },
  project: { et: "Projekt", en: "Project", fi: "Projekti", de: "Projekt" },
  batteries: { et: "Akusüsteemid", en: "Battery systems", fi: "Akkujärjestelmät", de: "Batteriesysteme" },
  inverters: { et: "Inverterid", en: "Inverters", fi: "Invertterit", de: "Wechselrichter" },
};

export function BessProjectComparison() {
  const { i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  return (
    <div className="mt-12">
      <h3 id="bess-comparison-title" className="font-display text-2xl font-bold text-foreground md:text-3xl">
        {copy.title[lang]}
      </h3>
      <div className="mt-6 divide-y divide-border border-y border-border lg:hidden" data-testid="bess-mobile-comparison">
        {bessProjects.map((project) => (
          <article key={project.slug} className="py-7">
            <LocalizedLink to={`/tehtud-tood/${project.slug}`} className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 text-foreground transition hover:text-brand-glow focus-visible:outline-2 focus-visible:outline-ring">
              <h4 className="font-display min-w-0 break-words text-lg font-bold leading-snug">{project.title[lang]}</h4>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0" aria-hidden />
            </LocalizedLink>
            <dl className="my-5 grid grid-cols-2 gap-4 bg-bg-elevated p-4">
              <div className="min-w-0">
                <dt className="min-h-10 break-words text-sm leading-5 text-foreground/65">{bessProjectLabels.capacity[lang]}</dt>
                <dd className="font-display mt-1 text-xl font-bold text-brand-glow">{formatStorage(project.storageKwh, lang)}</dd>
                <dd className="mt-2 text-sm text-foreground/65">{project.batteryCount} × {formatStorage(project.batteryUnitKwh, lang)}</dd>
              </div>
              <div className="min-w-0 border-l border-border pl-4">
                <dt className="min-h-10 break-words text-sm leading-5 text-foreground/65">{bessProjectLabels.power[lang]}</dt>
                <dd className="font-display mt-1 text-xl font-bold text-gold">{project.inverterPowerKw} kW</dd>
                <dd className="mt-2 text-sm text-foreground/65">{project.inverterCount} × {project.inverterUnitKw} kW</dd>
              </div>
            </dl>
            <h5 className="text-sm font-semibold text-brand">{bessProjectLabels.work[lang]}</h5>
            <ul className="mt-3 list-disc space-y-3 pl-5 text-sm leading-relaxed text-foreground/75">
              {project.work.map((work, index) => <li key={index} className="break-words">{work[lang]}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div role="region" aria-labelledby="bess-comparison-title" tabIndex={0} className="mt-6 hidden overflow-x-auto border-y border-border focus-visible:outline-2 focus-visible:outline-ring lg:block">
        <table className="w-full min-w-[1000px] table-fixed text-left text-sm text-foreground">
          <caption className="sr-only">{copy.title[lang]}</caption>
          <thead className="bg-bg-elevated">
            <tr>
              <th scope="col" className="w-[20%] p-5 font-semibold text-brand">{copy.project[lang]}</th>
              <th scope="col" className="w-[18%] p-5 font-semibold text-brand">{copy.batteries[lang]}</th>
              <th scope="col" className="w-[25%] p-5 font-semibold text-brand">{copy.inverters[lang]}</th>
              <th scope="col" className="w-[37%] p-5 font-semibold text-brand">{bessProjectLabels.work[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {bessProjects.map((project) => (
              <tr key={project.slug} className="border-t border-border align-top">
                <th scope="row" className="p-5 font-medium">
                  <LocalizedLink to={`/tehtud-tood/${project.slug}`} className="inline-flex items-start gap-2 text-foreground transition hover:text-brand-glow focus-visible:outline-2 focus-visible:outline-ring">
                    <span>{project.title[lang]}</span><ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                  </LocalizedLink>
                </th>
                <td className="p-5">
                  <p className="font-display text-xl font-bold text-brand-glow">{formatStorage(project.storageKwh, lang)}</p>
                  <p className="mt-2 text-foreground/65">{project.batteryCount} × {formatStorage(project.batteryUnitKwh, lang)}</p>
                </td>
                <td className="p-5">
                  <p className="font-display text-xl font-bold text-gold">{project.inverterPowerKw} kW</p>
                  <p className="mt-2 text-foreground/65">{project.inverterCount} × {project.inverterUnitKw} kW</p>
                </td>
                <td className="p-5">
                  <ul className="list-disc space-y-2 pl-4 leading-relaxed text-foreground/75">
                    {project.work.map((work, index) => <li key={index}>{work[lang]}</li>)}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}