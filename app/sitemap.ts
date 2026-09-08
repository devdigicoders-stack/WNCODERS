import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.wncoders.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio/clients`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/portfolio/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/app-development`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/ui-ux-design`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/cloud-devops`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/digital-marketing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/database-api-integration`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
    },
  ];
}