import type { MarkdownInstance } from 'astro';

export interface ArticleMeta {
  title: string;
  description: string;
  category: 'Kitchen Planning' | 'Bathroom Planning' | 'Getting Started';
  order: number;
  image: 'kitchen' | 'bathroom';
  takeaway: string;
}
const modules = import.meta.glob<MarkdownInstance<ArticleMeta>>('../content/journal/*.md', { eager: true });
export const articles = Object.entries(modules).map(([path, document]) => ({
  ...document,
  slug: path.split('/').pop()!.replace(/\.md$/, ''),
  minutes: Math.max(1, Math.ceil(document.rawContent().split(/\s+/).length / 200)),
})).sort((a, b) => a.frontmatter.order - b.frontmatter.order);
