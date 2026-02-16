import { profileData, type FeaturedProject } from "./data";

export function getAllProjectSlugs(): string[] {
  return profileData.featuredProjects.map((project) => project.slug);
}

export function getProjectBySlug(slug: string): FeaturedProject | undefined {
  return profileData.featuredProjects.find((project) => project.slug === slug);
}
