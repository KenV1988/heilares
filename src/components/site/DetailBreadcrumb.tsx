import { useTranslation } from 'react-i18next';
import { getSupportedLang } from '@/i18n';
import { linkCopy } from '@/lib/content-links';
import { LocalizedLink } from './LocalizedLink';

export function DetailBreadcrumb({ kind, title }: { kind: 'project' | 'article'; title: string }) {
  const { i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  return <nav aria-label={{ et: 'Asukoharada', en: 'Breadcrumb', fi: 'Murupolku', de: 'Brotkrumennavigation' }[lang]} className="mb-5 text-xs leading-relaxed text-foreground/55"><ol className="flex flex-wrap items-center gap-x-2 gap-y-1"><li><LocalizedLink to="/" className="hover:text-brand">{linkCopy.home[lang]}</LocalizedLink></li><li aria-hidden>/</li><li><LocalizedLink to={kind === 'project' ? '/tehtud-tood' : '/blogi'} className="hover:text-brand">{kind === 'project' ? linkCopy.overview[lang] : linkCopy.blog[lang]}</LocalizedLink></li><li aria-hidden>/</li><li aria-current="page">{title}</li></ol></nav>;
}