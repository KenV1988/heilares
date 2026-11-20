import type { Lang } from '@/i18n';
import type { ServicePath } from '@/lib/content-links';
import { LocalizedLink } from './LocalizedLink';

const terms: Record<ServicePath, Record<Lang, RegExp>> = {
  '/paikesepargid': { et: /päikesepar(?:gi|kide|gid|k)/i, en: /solar parks?/i, fi: /aurinkopuisto(?:jen|t|n)?/i, de: /Solarparks?/i },
  '/akupangad': { et: /energiasalvestus|akupangad|BESS/i, en: /energy storage|BESS/i, fi: /energian varastointi|BESS/i, de: /Energiespeicherung|BESS/i },
  '/elektritood': { et: /elektritöö(?:de|d)/i, en: /electrical works?/i, fi: /sähkötyö(?:t|töiden)?/i, de: /Elektroarbeiten/i },
  '/toojou-rent': { et: /tööjõu rent|tööjõurent/i, en: /workforce rental/i, fi: /henkilöstövuokraus/i, de: /Personalüberlassung/i },
};

/** Link the first natural service mention in an article, without rewriting its text. */
export function contextualText(text: string, lang: Lang, services: ServicePath[], linked: Set<ServicePath>) {
  for (const service of services) {
    if (linked.has(service)) continue;
    const match = terms[service][lang].exec(text);
    if (!match) continue;
    linked.add(service);
    return <>{text.slice(0, match.index)}<LocalizedLink to={service} className="text-brand underline decoration-brand/40 underline-offset-4 hover:text-brand-glow">{match[0]}</LocalizedLink>{text.slice(match.index + match[0].length)}</>;
  }
  return text;
}