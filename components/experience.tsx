'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    role: 'Senior ML Engineer',
    company: 'Tech Company X',
    period: '2023 - Present',
    description: 'Leading machine learning initiatives, designing scalable ML systems, and mentoring junior engineers. Improved model performance by 40% and reduced inference latency.',
  },
  {
    role: 'ML Engineer',
    company: 'Data Solutions Inc',
    period: '2021 - 2023',
    description: 'Developed and deployed production ML models, implemented MLOps best practices, and collaborated with data science team. Shipped 15+ models to production.',
  },
  {
    role: 'Data Scientist',
    company: 'Analytics Startup',
    period: '2019 - 2021',
    description: 'Built predictive models, performed data analysis, and created data visualizations. Increased prediction accuracy from 78% to 92%.',
  },
  {
    role: 'Junior Data Analyst',
    company: 'Finance Corp',
    period: '2018 - 2019',
    description: 'Analyzed financial data, created dashboards, and supported reporting initiatives. Automated 20+ manual processes.',
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
            5+ years of professional experience in AI and machine learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <span className="text-white/60 text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-white/70 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
