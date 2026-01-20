"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Calendar, GraduationCap, Users, Heart } from "lucide-react";
import { profileData } from "@/lib/data";

const typeConfig = {
  professional: {
    icon: Briefcase,
    label: "Professional",
    color: "from-techBlue-500 to-cyan-500",
    badge: "bg-techBlue-500/20 text-techBlue-400 border-techBlue-500/30",
  },
  education: {
    icon: GraduationCap,
    label: "Education",
    color: "from-green-500 to-emerald-500",
    badge: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  mentorship: {
    icon: Users,
    label: "Mentorship",
    color: "from-kotlinPurple-500 to-pink-500",
    badge: "bg-kotlinPurple-500/20 text-kotlinPurple-400 border-kotlinPurple-500/30",
  },
  volunteering: {
    icon: Heart,
    label: "Volunteering",
    color: "from-orange-500 to-red-500",
    badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
};

type ExperienceType = keyof typeof typeConfig;

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = profileData;
  const [activeFilter, setActiveFilter] = useState<ExperienceType | "all">("all");

  const filteredExperience = activeFilter === "all"
    ? experience
    : experience.filter(exp => exp.type === activeFilter);

  const filters: (ExperienceType | "all")[] = ["all", "professional", "education", "mentorship", "volunteering"];

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in technology
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-techBlue-500 to-kotlinPurple-500 text-white border-transparent"
                  : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 dark:border-dark-border hover:border-techBlue-500/50"
              }`}
            >
              {filter === "all" ? "All" : typeConfig[filter].label}
            </motion.button>
          ))}
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-techBlue-500 via-kotlinPurple-500 to-techBlue-500 transform md:-translate-x-1/2" />

          {filteredExperience.map((exp, index) => {
            const config = typeConfig[exp.type as ExperienceType];
            const Icon = config.icon;

            return (
              <motion.div
                key={`${exp.role}-${exp.period}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r ${config.color} transform -translate-x-1/2 z-10 shadow-lg`}
                />

                {/* Content card */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 pl-8 md:pl-0" : "md:pl-12 pl-8 md:pl-0"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 group hover:border-kotlinPurple-500/30 transition-all"
                  >
                    {/* Type badge & Period */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.badge}`}>
                        {config.label}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Role */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${config.color} bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 dark:text-gray-100 leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-techBlue-400 truncate">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Status indicator for current job */}
                    {exp.period.includes("Present") && (
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-green-500 font-medium">Currently Active</span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: experience.filter(e => e.type === "professional").length, label: "Professional Roles" },
            { value: experience.filter(e => e.type === "mentorship").length, label: "Mentorship Roles" },
            { value: experience.filter(e => e.type === "education").length, label: "Learning Programs" },
            { value: "100+", label: "Mentees Guided" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="text-center p-4 glass-card"
            >
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
