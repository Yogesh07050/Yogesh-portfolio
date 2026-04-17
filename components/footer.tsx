'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'GH', title: 'GitHub', href: 'https://github.com/Yogesh07050' },
    { label: 'LI', title: 'LinkedIn', href: 'https://linkedin.com/in/yogesh-m' },
    { label: 'GM', title: 'Email', href: 'mailto:yogeshyogi7504@gmail.com' },
  ]

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Yogesh M</h3>
            <p className="text-white/60 text-sm">
              AI/ML Developer focused on building intelligent systems — RAG pipelines, NL-to-SQL chatbots, and MLOps automation.
            </p>
            <p className="text-white/40 text-sm mt-2">📍 Madurai, Tamil Nadu, India</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/60 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-white/60 hover:text-blue-400 hover:border-blue-400/50 transition-all duration-300 text-xs font-bold"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.title}
                >
                  {social.label}
                </motion.a>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-4">
              ✉️ yogeshyogi7504@gmail.com
            </p>
            <p className="text-white/40 text-sm mt-1">
              📞 +91 7904795700
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © {currentYear} Yogesh M. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-4 md:mt-0">
              Built with Next.js, Framer Motion & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
