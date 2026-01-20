"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Code2, Server } from "lucide-react";
import { profileData } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { about } = profileData;

  const highlights = [
    {
      icon: Code2,
      title: "Mobile Developer",
      description: "Building native Android apps with Kotlin & Jetpack Compose",
    },
    {
      icon: Server,
      title: "Tech Support Lead",
      description: "Managing infrastructure and leading support teams",
    },
    {
      icon: GraduationCap,
      title: "Fresh Graduate",
      description: "Computer Science graduate with ML background",
    },
    {
      icon: Target,
      title: "Future Goals",
      description: "Pursuing Master's in Business Tech or Applied AI",
    },
  ];

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {about.summary}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              <span className="text-kotlinPurple-400 font-medium">Future Goals:</span>{" "}
              {about.goals}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "2+", label: "Years Learning" },
                { value: "10+", label: "Projects" },
                { value: "4", label: "Tech Stacks" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 glass-card"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 glass-card group cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-techBlue-500/20 to-kotlinPurple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-techBlue-400" />
                </div>
                <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
