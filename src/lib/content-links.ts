import { projects, type Project } from '@/data/projects';
import { bessProjects, type BessProject } from '@/data/bess-projects';
import { blogPosts, type BlogCategory } from '@/data/blog';

export type ServicePath = '/paikesepargid' | '/akupangad' | '/elektritood' | '/toojou-rent';
export const serviceLabels = {
  '/paikesepargid': { et: 'Päikeseparkide ehitus ja hooldus', en: 'Solar park construction and maintenance', fi: 'Aurinkopuistojen rakentaminen ja huolto', de: 'Solarparkbau und Wartung' },
  '/akupangad': { et: 'BESS-akupangad ja energiasalvestus', en: 'BESS battery systems and energy storage', fi: 'BESS-akustot ja energian varastointi', de: 'BESS-Batteriesysteme und Energiespeicherung' },
  '/elektritood': { et: 'Elektritööd päikeseparkides ja tööstuses', en: 'Electrical works for solar parks and industry', fi: 'Aurinkopuistojen ja teollisuuden sähkötyöt', de: 'Elektroarbeiten für Solarparks und Industrie' },
  '/toojou-rent': { et: 'Tööjõu rent laevaehitusele ja tööstusele', en: 'Workforce rental for shipbuilding and industry', fi: 'Henkilöstövuokraus laivanrakennukseen ja teollisuuteen', de: 'Personalüberlassung für Schiffbau und Industrie' },
} as const;
export const linkCopy = {
  projects: { et: 'Seotud projektid', en: 'Related projects', fi: 'Liittyvät projektit', de: 'Ähnliche Projekte' },
  articles: { et: 'Seotud artiklid', en: 'Related articles', fi: 'Aiheeseen liittyvät artikkelit', de: 'Verwandte Artikel' },
  services: { et: 'Seotud teenused', en: 'Related services', fi: 'Liittyvät palvelut', de: 'Passende Leistungen' },
  fullProject: { et: 'Vaata täielikku projekti', en: 'View full project', fi: 'Katso koko projekti', de: 'Vollständiges Projekt ansehen' },
  fullArticle: { et: 'Loe kogu artiklit', en: 'Read full article', fi: 'Lue koko artikkeli', de: 'Vollständigen Artikel lesen' },
  home: { et: 'Avaleht', en: 'Home', fi: 'Etusivu', de: 'Startseite' },
  overview: { et: 'Tehtud tööd', en: 'Completed projects', fi: 'Toteutetut projektit', de: 'Referenzen' },
  blog: { et: 'Blogi', en: 'Blog', fi: 'Blogi', de: 'Blog' },
} as const;

const categoryServices: Record<BlogCategory, ServicePath[]> = {
  epc: ['/paikesepargid', '/elektritood'], park_types: ['/paikesepargid'],
  components: ['/paikesepargid'], maintenance: ['/paikesepargid', '/elektritood'],
  electrical: ['/elektritood', '/akupangad'], storage: ['/akupangad', '/elektritood'], workforce: ['/toojou-rent'],
};
export function articleServices(category: BlogCategory) { return categoryServices[category]; }
const articleRelations: Record<string, string[]> = {
  'kuidas-valida-paikesepargi-epc-partnerit': ['votmed-katte-paikesepargi-ehitus', 'kui-kaua-votab-paikesepargi-ehitus'],
  'maapark-katusepark-tracker-vordlus': ['votmed-katte-paikesepargi-ehitus', 'mis-on-tier-1-paikesepaneel'],
  'votmed-katte-paikesepargi-ehitus': ['kuidas-valida-paikesepargi-epc-partnerit', 'elektritood-paikeseparkides-ja-toostuses'],
  'kui-kaua-votab-paikesepargi-ehitus': ['kuidas-valida-paikesepargi-epc-partnerit', 'votmed-katte-paikesepargi-ehitus'],
  'mis-on-tier-1-paikesepaneel': ['maapark-katusepark-tracker-vordlus', 'paikesepargi-hooldus'],
  'paikesepargi-hooldus': ['elektritood-paikeseparkides-ja-toostuses', 'talvised-elektritood-ja-2027-projektide-ettevalmistus'],
  'elektritood-paikeseparkides-ja-toostuses': ['talvised-elektritood-ja-2027-projektide-ettevalmistus', 'mis-on-bess-ja-miks-ettevotted-vajavad-energiasalvestust'],
  'toojou-rent-laevaehituses': ['toojou-rent-tehastes-ja-toostuses'],
  'toojou-rent-tehastes-ja-toostuses': ['toojou-rent-laevaehituses'],
  'mis-on-bess-ja-miks-ettevotted-vajavad-energiasalvestust': ['akupank-talvel-mida-ettevote-peab-planeerima', 'elektritood-paikeseparkides-ja-toostuses'],
  'akupank-talvel-mida-ettevote-peab-planeerima': ['mis-on-bess-ja-miks-ettevotted-vajavad-energiasalvestust', 'talvised-elektritood-ja-2027-projektide-ettevalmistus'],
  'talvised-elektritood-ja-2027-projektide-ettevalmistus': ['elektritood-paikeseparkides-ja-toostuses', 'paikesepargi-hooldus', 'akupank-talvel-mida-ettevote-peab-planeerima'],
};
export function relatedArticles(slug: string) { return (articleRelations[slug] ?? []).flatMap(s => blogPosts.filter(p => p.slug === s)); }
export function relatedProjects(project: Project | BessProject): (Project | BessProject)[] {
  if ('storageKwh' in project) return bessProjects.filter(p => p.slug !== project.slug).sort((a, b) => {
    const score = (p: BessProject) => (p.location.et === project.location.et ? 10 : 0) + 1 / (1 + Math.abs(p.storageKwh - project.storageKwh));
    return score(b) - score(a);
  }).slice(0, 2);
  return projects.filter(p => p.slug !== project.slug && p.category === project.category).slice(0, 2);
}
export function projectServices(project: Project | BessProject): ServicePath[] {
  if ('storageKwh' in project) return ['/akupangad', '/elektritood'];
  return project.slug === 'lielvarde-latvia' || project.slug === 'bls-eesti' ? ['/paikesepargid'] : ['/paikesepargid', '/elektritood'];
}
export function serviceArticles(service: ServicePath) { return blogPosts.filter(p => articleServices(p.category).includes(service)); }
export function serviceProjects(service: ServicePath): (Project | BessProject)[] {
  return [...projects, ...bessProjects].filter(p => projectServices(p).includes(service));
}