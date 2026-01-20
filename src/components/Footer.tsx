"use client";

import { motion } from "framer-motion";
import { Terminal, Heart, Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "@/lib/data";

export default function Footer() {
  const { profile } = profileData;
  const currentYear = new Date().getFullYear();

  const terminalLines = [
    { prompt: "~$", command: "echo 'Thanks for visiting!'" },
    { prompt: "~$", command: "exit", output: "Goodbye! Have a great day." },
  ];

  return (
    <footer className="py-12 relative border-t border-dark-border">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-techBlue-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal style footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="terminal-window max-w-2xl mx-auto mb-12"
        >
          <div className="terminal-header">
            <span className="terminal-dot bg-red-500" />
            <span className="terminal-dot bg-yellow-500" />
            <span className="terminal-dot bg-green-500" />
            <span className="ml-4 text-sm text-gray-400">rahmad@portfolio:~</span>
          </div>
          <div className="terminal-body">
            {terminalLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="mb-2"
              >
                <span className="terminal-prompt">{line.prompt}</span>
                <span className="text-gray-300 ml-2">{line.command}</span>
                {line.output && (
                  <div className="text-techBlue-400 ml-4 mt-1">{line.output}</div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Terminal className="w-6 h-6 text-kotlinPurple-500" />
            <span className="text-xl font-bold gradient-text">RNI</span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: profile.links.github, label: "GitHub" },
              { icon: Linkedin, href: profile.links.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.links.email}`, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg text-gray-400 hover:text-techBlue-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-sm flex items-center gap-1"
          >
            © {currentYear} {profile.name}. Made with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
