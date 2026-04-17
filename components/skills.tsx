'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Machine Learning',
    skills: ['TensorFlow', 'PyTorch'],
  },
  {
    category: 'Deep Learning',
    skills: ['CNNs', 'RNNs', 'Transformers', 'LSTM'],
  },
  {
    category: 'Data Science',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
  },
  {
    category: 'NLP',
    skills: ['Hugging Face', 'BERT', 'GPT'],
  },
  {
    category: 'MLOps',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Model Serving', 'Monitoring'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'SQL'],
  },
]

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-white/60 text-lg">
            Expertise across machine learning, deep learning, and modern software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass p-6"
            >
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-3">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-white/70 text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
