import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wncoders.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ===== HOME =====
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // ===== ABOUT =====
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },

    // ===== SERVICES (Main Page) =====
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },

    // ===== INDIVIDUAL SERVICES =====
    {
      url: `${BASE_URL}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/app-development`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/services/ui-ux-design`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/cloud-devops`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/database-api-integration`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },

    // ===== PORTFOLIO =====
    {
      url: `${BASE_URL}/portfolio/projects`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/portfolio/clients`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.75,
    },

    // ===== BLOG =====
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },

    // ===== TEAM =====
    {
      url: `${BASE_URL}/team`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },

    // ===== CONTACT =====
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },

    // ===== LEGAL PAGES =====
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.4,
    },
  ];
}
