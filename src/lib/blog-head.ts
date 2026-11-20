import { getBlogPost } from '@/data/blog';
import { getSupportedLang } from '@/i18n';
import { localizedContentHead, localeUrl } from './locale-seo';

export function blogDetailHead(language: string, slug: string) {
  const lang = getSupportedLang(language);
  const post = getBlogPost(slug);
  if (!post) return { meta: [{ title: 'Unavailable | HeilAres' }, { name: 'robots', content: 'noindex' }] };
  const content = post.content[lang];
  const head = localizedContentHead(lang, `/blogi/${slug}`, content.title, content.summary, 'article');
  return { ...head, meta: [...head.meta, { name: 'robots', content: 'index, follow' }], scripts: [{ type: 'application/ld+json', children: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: content.title, description: content.summary, inLanguage: lang, datePublished: post.date, mainEntityOfPage: localeUrl(lang, `/blogi/${slug}`), author: { '@type': 'Organization', name: 'HeilAres OÜ' } }) }] };
}