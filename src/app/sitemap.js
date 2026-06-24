
import { SITE, SERVICE_PAGES, INDUSTRIES, CASE_STUDIES, BLOG_POSTS } from '@/lib/config';

export default function sitemap() {
  const now = new Date();
  const base = ['', '/about', '/services', '/work', '/pricing', '/process', '/faq', '/contact', '/solutions', '/blog'];
  const serviceUrls = SERVICE_PAGES.map((s) => `/services/${s.slug}`);
  const industryUrls = INDUSTRIES.map((i) => `/solutions/${i.slug}`);
  const caseUrls = CASE_STUDIES.map((c) => `/work/${c.slug}`);
  const blogUrls = BLOG_POSTS.map((b) => `/blog/${b.slug}`);

  return [...base, ...serviceUrls, ...industryUrls, ...caseUrls, ...blogUrls].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.includes('/services') || path.includes('/solutions') ? 0.85 : 0.7,
  }));
}
