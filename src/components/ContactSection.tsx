'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('BH15GPgBg-Uu5JOEf');

      // Send email using EmailJS
      const result = await emailjs.send(
        'portfolio_website',
        'template_4qbdbc9',
        {
          to_email: 'pandhijash@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        }
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'pandhijash@gmail.com',
      link: 'mailto:pandhijash@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9638930589',
      link: 'tel:+919638930589',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ahmedabad, Gujarat',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/pandhijash-21',
      color: 'hover:neon-blue'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jash-pandhi-1032b3291',
      color: 'hover:neon-purple'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:pandhijash@gmail.com',
      color: 'hover:neon-cyan'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                    suppressHydrationWarning
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300"
                  placeholder="What's this about?"
                  suppressHydrationWarning
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800/50 p-4 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  suppressHydrationWarning
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                className={`w-full bg-blue-600 p-4 rounded-xl text-lg font-semibold text-white border-2 transition-all duration-300 flex items-center justify-center gap-3 ${
                  isSubmitting 
                    ? 'border-gray-500 bg-gray-600 cursor-not-allowed' 
                    : 'border-blue-500 hover:border-blue-400 hover:bg-blue-700'
                }`}
                suppressHydrationWarning
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-300 text-center"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-300 text-center"
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-600 hover:border-gray-500"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} group-hover:neon-blue transition-all duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{info.title}</div>
                      <div className="text-gray-400">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/pandhijash-21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-4 rounded-xl hover:bg-blue-500/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-blue-400"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/jash-pandhi-1032b3291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 p-4 rounded-xl hover:bg-purple-500/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-purple-400"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                
                <a
                  href="mailto:pandhijash@gmail.com"
                  className="bg-gray-800/50 p-4 rounded-xl hover:bg-cyan-500/30 hover:scale-110 transition-all duration-300 cursor-pointer border border-gray-600 hover:border-cyan-400"
                >
                  <Mail className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-8 rounded-2xl text-center border border-gray-700"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full pulse-glow"></div>
                <span className="text-white font-semibold">Available for Work</span>
              </div>
              <p className="text-gray-300 text-sm">
                I'm currently available for freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
