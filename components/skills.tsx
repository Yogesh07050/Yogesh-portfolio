'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Python', 'SQL'],
  },
  {
    category: 'ML & AI',
    icon: '🤖',
    skills: ['Machine Learning', 'Data Handling', 'RAG', 'MCP'],
  },
  {
    category: 'Frameworks',
    icon: '⚙️',
    skills: ['FastAPI', 'LangChain', 'LangGraph', 'CrewAI'],
  },
  {
    category: 'Libraries',
    icon: '📚',
    skills: ['Pandas', 'NumPy', 'TensorFlow', 'PyTorch'],
  },
  {
    category: 'Tools & Platforms',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'VS Code', 'Excel', 'Tableau'],
  },
  {
    category: 'Data',
    icon: '📊',
    skills: ['Data Cleaning', 'Data Visualization', 'Data Analysis', 'EDA'],
  },
  {
    category: 'MLOps',
    icon: '🚀',
    skills: ['Model Deployment', 'API Integration', 'Pipeline Development'],
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
            Tools and technologies I use to build intelligent systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                <span className="text-xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-white/70 text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
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
