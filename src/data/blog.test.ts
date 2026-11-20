import { describe, expect, it } from 'vitest';
import { blogPosts } from './blog';

describe('blog language parity and technical content', () => {
  it('keeps all 12 posts and complete FAQ answers in every language', () => {
    expect(blogPosts).toHaveLength(12);
    for (const post of blogPosts) {
      for (const lang of ['et', 'en', 'fi', 'de'] as const) {
        expect(post.content[lang].sections.length).toBeGreaterThan(0);
        for (const faq of post.content[lang].faqs) expect(faq.answer.trim().length).toBeGreaterThan(0);
      }
    }
  });
  it('preserves the verified Risti total and HeilAres work share', () => {
    const post = blogPosts.find(p => p.slug === 'talvised-elektritood-ja-2027-projektide-ettevalmistus');
    expect(post).toBeDefined();
    for (const lang of ['et', 'en', 'fi', 'de'] as const) {
      const text = JSON.stringify(post?.content[lang]);
      expect(text).toContain('244 MW');
      expect(text).toContain('80 MW');
      expect(text).toContain('TEL005181');
    }
  });
});