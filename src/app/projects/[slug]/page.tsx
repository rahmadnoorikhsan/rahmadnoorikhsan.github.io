import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Rahmad Noor Ikhsan`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Rahmad Noor Ikhsan`,
      description: project.description,
      ...(project.image && { images: [{ url: project.image }] }),
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
