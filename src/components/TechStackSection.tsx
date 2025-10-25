'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  FileCode, 
  Type, 
  Code, 
  FileText, 
  Palette, 
  GitBranch, 
  Github, 
  Container, 
  Cloud, 
  Database,
  Smartphone,
  Globe,
  Zap
} from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React', icon: Code2, level: 95 },
      { name: 'TypeScript', icon: Type, level: 90 },
      { name: 'JavaScript', icon: Code, level: 95 },
      { name: 'HTML5', icon: FileText, level: 98 },
      { name: 'CSS3', icon: Palette, level: 92 },
    ]
  },
  {
    title: 'Backend',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'Node.js', icon: Server, level: 90 },
      { name: 'Python', icon: FileCode, level: 85 },
      { name: 'Database', icon: Database, level: 88 },
    ]
  },
  {
    title: 'DevOps & Tools',
    color: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Git', icon: GitBranch, level: 92 },
      { name: 'GitHub', icon: Github, level: 90 },
      { name: 'Docker', icon: Container, level: 80 },
      { name: 'Cloud', icon: Cloud, level: 75 },
    ]
  },
  {
    title: 'Mobile',
    color: 'from-orange-500 to-red-500',
    technologies: [
      { name: 'React Native', icon: Smartphone, level: 85 },
      { name: 'Web Development', icon: Globe, level: 95 },
      { name: 'Performance', icon: Zap, level: 88 },
    ]
  }
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-800/50 p-4 rounded-xl text-center group cursor-pointer border border-gray-600 hover:border-gray-500 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:neon-blue transition-all duration-300`}>
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">{tech.name}</div>
                        <div className="text-gray-400 text-xs">{tech.level}%</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-32 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-8 opacity-30">
              {[
                { icon: Code2, color: 'text-blue-400' },
                { icon: Server, color: 'text-green-400' },
                { icon: FileCode, color: 'text-yellow-400' },
                { icon: Type, color: 'text-blue-500' },
                { icon: Container, color: 'text-cyan-400' },
                { icon: Cloud, color: 'text-orange-400' },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className={`${tech.color} float`}
                >
                  <tech.icon className="w-12 h-12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 p-8 rounded-2xl text-center border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
            tools, and methodologies to stay at the forefront of development.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Rust', 'Go', 'Kubernetes', 'GraphQL', 'WebAssembly', 'Machine Learning'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
