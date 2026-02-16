"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import Link from "next/link";
import { profileData, type FeaturedProject } from "@/lib/data";

function ProjectCardItem({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="glass-card overflow-hidden h-full flex flex-col">
          {/* Project Image */}
          <div className="relative h-48 bg-gradient-to-br from-techBlue-500/10 to-kotlinPurple-500/10 overflow-hidden flex items-center justify-center">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-32 w-32 object-contain group-hover:scale-110 transition-transform duration-500 rounded-2xl"
              />
            ) : (
              <Folder className="w-16 h-16 text-gray-300 dark:text-gray-600 group-hover:scale-110 transition-transform" />
            )}

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
              <div className="flex gap-4">
                {project.github && (
                  <motion.button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, "_blank", "noopener,noreferrer"); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-techBlue-500/50 transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.button>
                )}
                {project.homepage && (
                  <motion.button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.homepage, "_blank", "noopener,noreferrer"); }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-kotlinPurple-500/50 transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 group-hover:text-techBlue-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                {project.github && (
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, "_blank", "noopener,noreferrer"); }}
                    className="text-gray-400 hover:text-techBlue-400 transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </button>
                )}
                {project.homepage && (
                  <button
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.homepage, "_blank", "noopener,noreferrer"); }}
                    className="text-gray-400 hover:text-kotlinPurple-400 transition-colors"
                    aria-label={`${project.title} Live Demo`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-techBlue-500/10 to-kotlinPurple-500/10 text-techBlue-400 border border-techBlue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View Details */}
            <div className="flex items-center gap-1 text-sm text-gray-400 group-hover:text-techBlue-400 transition-colors opacity-0 group-hover:opacity-100">
              <span>View Details</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>

      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
    </motion.div>
  );
}

export default function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { featuredProjects } = profileData;

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-kotlinPurple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCardItem key={project.title} project={project as FeaturedProject} index={index} />
          ))}
        </div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/rahmadnoorikhsan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
          >
            <Github className="w-5 h-5" />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
