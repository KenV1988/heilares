import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { projects } from '@/data/projects';
import { bessProjects } from '@/data/bess-projects';
import { blogPosts } from '@/data/blog';
import { articleServices, relatedArticles, relatedProjects, serviceArticles, serviceProjects } from './content-links';
import { blogDetailHead } from './blog-head';
import { referenceProjectHead } from './reference-projects';

const langs = ['et', 'en', 'de', 'fi'] as const;
describe('SEO detail URLs and relevant internal linking', () => {
  it('keeps all 10 projects and 12 articles in the sitemap in four languages', () => {
    const sitemap = readFileSync('public/sitemap.xml', 'utf8');
    expect(projects.length + bessProjects.length).toBe(10);
    expect(blogPosts).toHaveLength(12);
    for (const lang of langs) {
      const prefix = lang === 'et' ? '' : `/${lang}`;
      for (const p of [...projects, ...bessProjects]) expect(sitemap).toContain(`<loc>https://heilares.ee${prefix}/tehtud-tood/${p.slug}</loc>`);
      for (const p of blogPosts) expect(sitemap).toContain(`<loc>https://heilares.ee${prefix}/blogi/${p.slug}</loc>`);
    }
  });
  it('gives all 88 detail URLs self canonicals and reciprocal language alternatives', () => {
    for (const lang of langs) {
      for (const [kind, entries, headFn] of [['tehtud-tood', [...projects, ...bessProjects], referenceProjectHead], ['blogi', blogPosts, blogDetailHead]] as const) {
        for (const entry of entries) {
          const head = headFn(lang, entry.slug);
          const expected = `https://heilares.ee${lang === 'et' ? '' : `/${lang}`}/${kind}/${entry.slug}`;
          expect('links' in head && head.links?.find(l => l.rel === 'canonical')?.href).toBe(expected);
          expect('links' in head && head.links?.filter(l => l.rel === 'alternate')).toHaveLength(5);
          expect(head.meta).toContainEqual({ name: 'robots', content: 'index, follow' });
        }
      }
    }
  });
  it('keeps detail titles and descriptions unique within every language', () => {
    for (const lang of langs) {
      const heads = [...projects, ...bessProjects].map(p => referenceProjectHead(lang, p.slug)).concat(blogPosts.map(p => blogDetailHead(lang, p.slug)));
      const titles = heads.map(h => h.meta.find(m => 'title' in m)?.title);
      const descriptions = heads.map(h => h.meta.find(m => 'name' in m && m.name === 'description'));
      expect(new Set(titles).size).toBe(22);
      expect(new Set(descriptions.map(m => JSON.stringify(m))).size).toBe(22);
    }
  });
  it('relates solar projects only by type and BESS projects only to BESS', () => {
    for (const p of projects) for (const related of relatedProjects(p)) {
      expect('parkCapacityKw' in related && related.category).toBe(p.category);
      expect(related.slug).not.toBe(p.slug);
    }
    for (const p of bessProjects) for (const related of relatedProjects(p)) expect('storageKwh' in related).toBe(true);
  });
  it('links every article to existing relevant articles and reciprocal services', () => {
    for (const post of blogPosts) {
      expect(relatedArticles(post.slug).length).toBeGreaterThan(0);
      expect(relatedArticles(post.slug).every(p => p.slug !== post.slug)).toBe(true);
      for (const service of articleServices(post.category)) expect(serviceArticles(service).map(p => p.slug)).toContain(post.slug);
    }
    expect(serviceProjects('/toojou-rent')).toHaveLength(0);
    expect(serviceProjects('/akupangad')).toHaveLength(5);
  });
});