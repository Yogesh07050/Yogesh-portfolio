'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    role: 'AI/ML Engineer',
    company: 'Justo Global',
    period: 'Aug 2025 – Present',
    location: 'Coimbatore, Tamil Nadu, India',
    bullets: [
      'Developed an AI-powered system for client project Moodys using RAG, LangGraph, and MCP, enabling context-aware responses through structured multi-step workflows',
      'Built a chatbot for a donor portal using NL-to-SQL (NLSQL), allowing users to query and retrieve data directly from databases using natural language',
      'Designed and trained an AI-generated image detection model, covering end-to-end ML workflow including data cleaning, preprocessing, model training, and evaluation',
      'Implemented MLOps pipelines for model deployment and monitoring, including FastAPI-based APIs, automated workflows, and integration with external services',
    ],
  },
  {
    role: 'Data Science Intern',
    company: 'Justo Global',
    period: 'Feb 2025 – Jul 2025',
    location: 'Coimbatore, Tamil Nadu, India',
    bullets: [
      'Performed data cleaning and preprocessing on structured datasets, handling missing values and improving data quality for analysis',
      'Conducted exploratory data analysis (EDA) and created visualizations to extract insights and support decision-making',
      'Assisted in building and evaluating machine learning models using Python libraries such as Pandas, NumPy, and Scikit-learn',
    ],
  },
]

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-white/60 text-lg">
            Building real-world AI solutions from internship to full-time engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-indigo-500/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.period}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="md:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-blue-500 border-2 border-blue-300 hidden md:block shadow-lg shadow-blue-500/40" />

                <div className="glass p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                      <p className="text-white/40 text-sm mt-1">{exp.location}</p>
                    </div>
                    <span className="text-white/50 text-sm mt-2 md:mt-0 md:text-right whitespace-nowrap bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 self-start">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-white/70 leading-relaxed flex items-start gap-3">
                        <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-2xl">🎓</span> Education
          </h3>
          <div className="glass p-6 hover:bg-white/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">B.Sc. Computer Science (AI/ML)</h4>
                <p className="text-blue-400 font-semibold">Karunya Institute of Technology and Science</p>
                <p className="text-white/40 text-sm mt-1">Coimbatore, Tamil Nadu, India</p>
              </div>
              <span className="text-white/50 text-sm mt-2 md:mt-0 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 self-start">
                Jun 2021 – May 2025
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-2xl">🏅</span> Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Certified Data Analyst – Google',
              'Programming in Python',
              'Software Engineering – Infosys',
            ].map((cert) => (
              <div key={cert} className="glass p-4 flex items-center gap-3 hover:bg-white/10 transition-all duration-300">
                <span className="text-yellow-400 text-lg">★</span>
                <p className="text-white/80 text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
