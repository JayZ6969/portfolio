import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
      { url: 'https://jayasheel.tech/', lastModified: new Date() },
      // Add more URLs as needed
    ];
}