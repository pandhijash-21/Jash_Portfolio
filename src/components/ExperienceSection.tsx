'use client';

import { motion } from 'framer-motion';

const experience = {
  company: 'NB Infra Projects Pvt. Ltd.',
  role: 'PropTech and Business Operations',
  period: '9 July – 9 September 2026',
  duration: '3 Months',
  bullets: [
    'Developing enterprise applications including CRM, HRMS, and ERP systems using Flutter, Node.js, Express.js, and SQL.',
    'Designing and integrating RESTful APIs to enable seamless communication between frontend, backend, and databases.',
    'Implementing and enhancing business modules such as employee management, lead management, attendance, and payroll.',
    'Collaborating with cross-functional teams to develop, test, debug, and deploy scalable, production-ready software solutions.',
  ],
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-14 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="section-kicker mb-2">{'// 02. experience'}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Experience
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          viewport={{ once: true }}
          className="tech-panel p-6 md:p-8 pl-7 md:pl-8"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {experience.company}
              </h3>
              <p className="font-mono text-sm text-cyan-300/90 mt-1">{experience.role}</p>
            </div>
            <p className="font-mono text-xs text-gray-400 whitespace-nowrap">
              {experience.period}
              <span className="text-gray-600"> · {experience.duration}</span>
            </p>
          </div>

          <ul className="space-y-3">
            {experience.bullets.map((item) => (
              <li key={item} className="flex gap-3 text-gray-300 leading-relaxed text-[15px]">
                <span className="font-mono text-cyan-400 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}
