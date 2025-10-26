'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Zap } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Globe, level: 95, color: 'from-blue-500 to-cyan-500' },
  { name: 'Backend Development', icon: Database, level: 90, color: 'from-purple-500 to-pink-500' },
  { name: 'Mobile Development', icon: Smartphone, level: 85, color: 'from-green-500 to-emerald-500' },
  { name: 'DevOps & Cloud', icon: Zap, level: 80, color: 'from-orange-500 to-red-500' },
  { name: 'System Architecture', icon: Code, level: 88, color: 'from-indigo-500 to-purple-500' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Full-stack developer with 2+ years of experience building scalable, user-centric web and mobile applications. My work blends modern JavaScript frameworks like React and Node.js with cloud-ready architectures to deliver performance, reliability, and clean execution.
              </p>
              <p>
                I enjoy understanding problems deeply — breaking them down, optimizing edge cases, and building solutions that are both elegant and practical. Whether it's crafting intuitive UI flows or shaping efficient backend systems, I focus on impact and long-term maintainability.
              </p>
              <p>
                Outside of development, I stay curious: exploring emerging technologies, contributing to open-source, and engaging with the developer community to grow and help others grow.
              </p>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <skill.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-gray-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { number: '5+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
            { number: '24/7', label: 'Available Support' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 text-center p-6 rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
