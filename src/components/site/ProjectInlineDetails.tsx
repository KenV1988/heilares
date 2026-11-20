import { ArrowRight, Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { getSupportedLang } from '@/i18n';
import { formatCapacity, formatHeilAresShare, formatProjectDuration, getAdditionalProjectImages, type Project } from '@/data/projects';
import { bessProjectLabels as labels, formatStorage, formatStorageMwh, type BessProject } from '@/data/bess-projects';
import { ProjectGallery } from './ProjectGallery';
import { expansionCopy } from './project-expansion';
import { ContentLink } from './ContentLink';
import { linkCopy } from '@/lib/content-links';

export function ProjectInlineDetails({ project, onClose }: { project: Project | BessProject; onClose: () => void }) {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const solar = 'parkCapacityKw' in project ? project : undefined;
  const bess = 'storageKwh' in project ? project : undefined;
  const photos = solar ? [{ src: solar.coverImage, alt: solar.coverAlt }, ...getAdditionalProjectImages(solar)] : bess?.photos ?? [];
  const facts = solar ? [
    [t('projectsSection.share'), solar.shareBreakdown ? `${formatCapacity(solar.shareBreakdown.mechanicalKw, lang)} — ${t('projectsSection.shareMechanical')}; ${formatCapacity(solar.shareBreakdown.electricalKw, lang)} — ${t('projectsSection.shareElectrical')}` : formatHeilAresShare(solar, lang)],
    [t('projectsSection.capacity'), formatCapacity(solar.parkCapacityKw, lang)],
    [t('projectsSection.location'), solar.location[lang]],
    [t('projectsSection.duration'), formatProjectDuration(solar, lang)],
    ...(solar.technology ? [[t('projectsSection.details.technology'), solar.technology[lang]]] : []),
    ...(solar.developer ? [[t('projectsSection.details.developer'), solar.developer]] : []),
    ...(solar.mainContractor ? [[t(solar.contractorRole === 'epc' ? 'projectsSection.details.epcContractor' : 'projectsSection.details.contractor'), solar.mainContractor]] : []),
    ...(solar.client ? [[t('projectsSection.details.client'), solar.client]] : []),
  ] : bess ? [[labels.capacity[lang], `${formatStorage(bess.storageKwh, lang)} / ${formatStorageMwh(bess.storageKwh, lang)}`], [labels.power[lang], `${bess.inverterPowerKw} kW`], [labels.location[lang], bess.location[lang]]] : [];
  return <article className="min-w-0 border-y border-brand/40 bg-bg-elevated px-5 py-7 md:p-8">
    <div className="mb-7 flex items-start justify-between gap-4">
      <div className="min-w-0"><h3 className="font-display break-words text-2xl font-bold leading-tight text-foreground md:text-3xl">{project.title[lang]}</h3><p className="mt-3 max-w-3xl text-base leading-relaxed text-foreground/75">{project.description[lang]}</p></div>
      <Button variant="outline" size="icon" className="h-11 w-11 shrink-0" onClick={onClose} aria-label={expansionCopy.close[lang]} title={expansionCopy.close[lang]}><X /></Button>
    </div>
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <div className="min-w-0">
        <dl className="grid gap-x-6 sm:grid-cols-2">{facts.map(([label, value]) => <div key={label} className="min-w-0 border-b border-border py-4"><dt className="text-sm text-foreground/55">{label}</dt><dd className="mt-2 break-words text-base font-medium leading-relaxed text-foreground">{value}</dd></div>)}</dl>
        {solar?.shareBreakdown && <p className="mt-4 text-sm text-foreground/60">{t('projectsSection.shareBreakdown')}</p>}
        {bess && <><h4 className="mt-7 text-lg font-semibold text-brand">{labels.work[lang]}</h4><ul className="mt-3 divide-y divide-border">{bess.work.map((work, index) => <li key={index} className="flex items-start gap-3 py-3"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /><span className="min-w-0 break-words text-sm leading-relaxed text-foreground/80">{work[lang]}</span></li>)}</ul></>}
      </div>
      {photos.length > 0 && <div className="min-w-0"><ProjectGallery photos={photos} title={project.title[lang]} /></div>}
    </div>
    <div className="mt-7 flex flex-wrap items-center gap-3">
      <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal text-left"><ContentLink kind="project" slug={project.slug}>{linkCopy.fullProject[lang]}<ArrowRight /></ContentLink></Button>
      <Button variant="ghost" className="h-11 text-foreground/70" onClick={onClose}><X />{expansionCopy.close[lang]}</Button>
    </div>
  </article>;
}
