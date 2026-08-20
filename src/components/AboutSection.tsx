'use client';

import { motion } from 'framer-motion';
import { Database, Globe, Smartphone } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    icon: Globe,
    tools: ['React', 'TypeScript', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend Development',
    icon: Database,
    tools: ['Node.js', 'Express.js', 'SQL', 'PHP', 'PostgreSQL'],
  },
  {
    name: 'Mobile Development',
    icon: Smartphone,
    tools: ['Flutter', 'React Native'],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="section-kicker mb-2">{'// 01. profile'}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="tech-panel p-6 md:p-7 pl-7 md:pl-8"
          >
            <h3 className="font-mono text-xs text-cyan-400 mb-4">background.md</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-[15px]">
              <p>
                Full-stack developer with 2+ years of experience building scalable web and mobile
                applications. I work across React, Node.js, Flutter, and SQL to ship systems that
                hold up in production.
              </p>
              <p>
                My focus is on practical architecture: clear APIs, reliable data flows, and
                interfaces that stay usable as products grow. I care as much about maintainability
                as I do about shipping quickly.
              </p>
              <p>
                Recently I have been building enterprise modules — CRM, HRMS, and ERP — while
                continuing to deliver client-facing platforms with payments, dashboards, and
                role-based access.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-mono text-xs text-cyan-400 mb-3">skills.json</h3>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="tech-panel p-4 pl-5 hover:border-cyan-400/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                    <skill.icon className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span key={tool} className="tech-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
