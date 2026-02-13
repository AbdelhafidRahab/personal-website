import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abdelhafidrahab.net';
  const routes = ['', '/projects', '/contact', '/products', '/academy'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    routing.locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}/en${route}`,
            ar: `${baseUrl}/ar${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
