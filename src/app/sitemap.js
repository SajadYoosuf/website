import { courses } from "@/data/courses";

export default function sitemap() {
  const baseUrl = 'https://novoxedtech.com';

  // Course routes
  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Static routes
  const staticRoutes = [
    '',
    '/courses',
    '/about',
    '/mentors',
    '/placements',
    '/contact',
    '/blog',
    '/careers',
    '/gallery',
    '/privacy'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1.0,
  }));

  return [...staticRoutes, ...courseRoutes];
}
