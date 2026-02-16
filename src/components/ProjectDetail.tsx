"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";
import { profileData, type FeaturedProject } from "@/lib/data";

export default function ProjectDetail({ project }: { project: FeaturedProject }) {
  const otherProjects = profileData.featuredProjects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-techBlue-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">{project.title}</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-techBlue-500/10 to-kotlinPurple-500/10 text-techBlue-400 border border-techBlue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-techBlue-500/25 transition-shadow"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </motion.a>
            )}
            {project.homepage && (
              <motion.a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            )}
          </div>

          {/* Hero Image */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card overflow-hidden flex items-center justify-center py-12 bg-gradient-to-br from-techBlue-500/5 to-kotlinPurple-500/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-40 sm:h-52 sm:w-52 object-contain rounded-3xl"
                loading="eager"
              />
            </motion.div>
          )}
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            About <span className="gradient-text">{project.title}</span>
          </h2>
          <div className="glass-card p-6 sm:p-8">
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Features List */}
            {project.features.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-border">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Key Features
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="w-5 h-5 text-techBlue-400 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>

        {/* Screenshot Gallery */}
        {project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="gradient-text">Screenshots</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card overflow-hidden group"
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="p-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      {screenshot.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Other <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((otherProject, index) => (
              <motion.div
                key={otherProject.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/projects/${otherProject.slug}`} className="block group">
                  <div className="glass-card overflow-hidden h-full flex flex-col">
                    <div className="relative h-40 bg-gradient-to-br from-techBlue-500/10 to-kotlinPurple-500/10 overflow-hidden flex items-center justify-center">
                      {otherProject.image && (
                        <img
                          src={otherProject.image}
                          alt={otherProject.title}
                          className="h-24 w-24 object-contain group-hover:scale-110 transition-transform duration-500 rounded-xl"
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-techBlue-400 transition-colors mb-2">
                        {otherProject.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 line-clamp-2">
                        {otherProject.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {otherProject.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-techBlue-500/10 to-kotlinPurple-500/10 text-techBlue-400 border border-techBlue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
