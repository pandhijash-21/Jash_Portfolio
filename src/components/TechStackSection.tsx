'use client';

import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Python', 'PHP', 'SQL', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'Mobile',
    technologies: ['Flutter', 'React Native'],
  },
  {
    title: 'DevOps & Tools',
    technologies: ['Git', 'GitHub', 'Docker', 'REST APIs', 'GraphQL'],
  },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-14 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="section-kicker mb-2">{'// 05. stack'}</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">
            Technologies
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm">
            Tools I use to design, build, and ship production software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: categoryIndex * 0.06 }}
              viewport={{ once: true }}
              className="tech-panel p-6 pl-7"
            >
              <h3 className="font-mono text-xs text-cyan-400 mb-4">
                {category.title.toLowerCase().replace(/ & /g, '_')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
