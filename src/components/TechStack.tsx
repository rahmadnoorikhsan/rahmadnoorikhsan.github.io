"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Server, Users } from "lucide-react";
import { profileData } from "@/lib/data";

const categoryIcons = {
  mobile: Smartphone,
  backend_infra: Server,
  mentorship: Users,
};

const categoryLabels = {
  mobile: "Mobile Development",
  backend_infra: "Backend & Infrastructure",
  mentorship: "Mentorship & Leadership",
};

const categoryColors = {
  mobile: "from-green-500 to-emerald-500",
  backend_infra: "from-techBlue-500 to-cyan-500",
  mentorship: "from-kotlinPurple-500 to-pink-500",
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills } = profileData;

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-techBlue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((category, categoryIndex) => {
            const Icon = categoryIcons[category];
            const label = categoryLabels[category];
            const colorGradient = categoryColors[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 group hover:border-techBlue-500/30 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorGradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                    {label}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {skills[category].map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="skill-badge cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee of all skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10" />

            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...Object.values(skills).flat(), ...Object.values(skills).flat()].map(
                (skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="text-2xl font-medium text-gray-300 dark:text-gray-600"
                  >
                    {skill}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
