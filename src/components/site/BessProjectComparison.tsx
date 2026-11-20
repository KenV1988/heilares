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
      <div role="region" aria-labelledby="bess-comparison-title" tabIndex={0} className="mt-6 overflow-x-auto border-y border-border focus-visible:outline-2 focus-visible:outline-ring">
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