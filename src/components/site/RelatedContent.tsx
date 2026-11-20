import { useTranslation } from 'react-i18next';
import { getSupportedLang } from '@/i18n';
import type { Project } from '@/data/projects';
import type { BessProject } from '@/data/bess-projects';
import type { BlogPost } from '@/data/blog';
import { articleServices, linkCopy, projectServices, relatedArticles, relatedProjects, serviceArticles, serviceLabels, serviceProjects, type ServicePath } from '@/lib/content-links';
import { ContentLink } from './ContentLink';
import { LocalizedLink } from './LocalizedLink';

export function RelatedContent({ project, post, service }: { project?: Project | BessProject; post?: BlogPost; service?: ServicePath }) {
  const { i18n } = useTranslation();
  const lang = getSupportedLang(i18n.resolvedLanguage || i18n.language);
  const references = project ? relatedProjects(project) : service ? serviceProjects(service) : [];
  const articles = post ? relatedArticles(post.slug) : service ? serviceArticles(service) : [];
  const services = project ? projectServices(project) : post ? articleServices(post.category) : [];
  return <div className="container-x py-12 md:py-16" data-related-content>
    <div className="grid gap-10 border-t border-border pt-8 md:grid-cols-2">
      {services.length > 0 && <section><h2 className="font-display text-xl font-bold text-foreground">{linkCopy.services[lang]}</h2><ul className="mt-4 space-y-3">{services.map(path => <li key={path}><LocalizedLink to={path} className="text-brand underline decoration-brand/40 underline-offset-4 hover:text-brand-glow">{serviceLabels[path][lang]}</LocalizedLink></li>)}</ul></section>}
      {references.length > 0 && <section><h2 className="font-display text-xl font-bold text-foreground">{linkCopy.projects[lang]}</h2><ul className="mt-4 space-y-4">{references.map(p => {
        const photo = 'coverImage' in p ? { src: p.coverImage, alt: p.coverAlt } : p.photos[0];
        return <li key={p.slug}><ContentLink kind="project" slug={p.slug} className="flex items-center gap-4 text-foreground hover:text-brand"><span className="w-20 shrink-0">{photo && <img src={photo.src} alt={photo.alt[lang]} width={160} height={100} loading="lazy" className="aspect-[8/5] w-full rounded object-cover" />}</span><span className="min-w-0 text-sm font-medium leading-relaxed">{p.title[lang]}</span></ContentLink></li>;
      })}</ul></section>}
      {articles.length > 0 && <section><h2 className="font-display text-xl font-bold text-foreground">{linkCopy.articles[lang]}</h2><ul className="mt-4 space-y-3">{articles.map(p => <li key={p.slug}><ContentLink kind="article" slug={p.slug} className="text-sm leading-relaxed text-foreground/80 underline decoration-border underline-offset-4 hover:text-brand">{p.content[lang].title}</ContentLink></li>)}</ul></section>}
    </div>
  </div>;
}