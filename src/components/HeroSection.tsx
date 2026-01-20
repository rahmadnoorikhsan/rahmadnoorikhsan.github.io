"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, MapPin, ChevronDown } from "lucide-react";
import { profileData } from "@/lib/data";

export default function HeroSection() {
  const { profile, about } = profileData;

  const terminalCommands = [
    { prompt: "~$", command: "whoami", output: profile.name },
    { prompt: "~$", command: "cat role.txt", output: profile.title },
    { prompt: "~$", command: "echo $LOCATION", output: profile.location },
    { prompt: "~$", command: "_", output: "", isTyping: true },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-techBlue-500/10 via-transparent to-kotlinPurple-500/10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-techBlue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kotlinPurple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-techBlue-500/10 border border-techBlue-500/20 mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{profile.name.split(" ")[0]}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4"
            >
              {profile.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 dark:text-gray-400 mb-6 max-w-lg mx-auto lg:mx-0 flex items-center justify-center lg:justify-start gap-2"
            >
              <MapPin className="w-4 h-4" />
              {profile.location}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              {profile.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 text-white font-medium rounded-lg shadow-lg shadow-techBlue-500/25 hover:shadow-kotlinPurple-500/25 transition-shadow"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download CV
              </motion.a>
              <motion.a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
              >
                <Github className="w-4 h-4 inline mr-2" />
                View GitHub
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-techBlue-500/20 dark:hover:bg-techBlue-500/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-techBlue-500" />
              </motion.a>
              <motion.a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-dark-border transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${profile.links.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-kotlinPurple-500/20 dark:hover:bg-kotlinPurple-500/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-kotlinPurple-500" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="terminal-window max-w-md mx-auto shadow-2xl shadow-kotlinPurple-500/10">
              <div className="terminal-header">
                <span className="terminal-dot bg-red-500" />
                <span className="terminal-dot bg-yellow-500" />
                <span className="terminal-dot bg-green-500" />
                <span className="ml-4 text-sm text-gray-400">rahmad@portfolio:~</span>
              </div>
              <div className="terminal-body">
                {terminalCommands.map((cmd, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.3 }}
                    className="mb-2"
                  >
                    <span className="terminal-prompt">{cmd.prompt}</span>
                    <span className="text-gray-300 ml-2">{cmd.command}</span>
                    {cmd.isTyping ? (
                      <span className="terminal-cursor" />
                    ) : (
                      cmd.output && (
                        <div className="text-techBlue-400 ml-4 mt-1">{cmd.output}</div>
                      )
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-techBlue-500 transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
