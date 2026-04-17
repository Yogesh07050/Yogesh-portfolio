'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Moodys – AI Workflow System',
    description: 'AI-powered system using RAG and LangGraph to handle context-aware queries through multi-step workflows. Implemented MCP-based orchestration for structured task execution and efficient data retrieval.',
    tags: ['RAG', 'LangGraph', 'MCP', 'FastAPI', 'Python'],
  },
  {
    title: 'Donor Portal Chatbot',
    description: 'Chatbot that converts natural language queries into SQL to retrieve data from structured databases. Designed query pipelines to process user input and return accurate responses.',
    tags: ['NL-to-SQL', 'LangChain', 'FastAPI', 'Python', 'SQL'],
  },
  {
    title: 'AI-Generated Image Detection',
    description: 'Classification model to detect AI-generated versus real images. Performed end-to-end ML workflow: data cleaning, preprocessing, feature engineering, model training and evaluation.',
    tags: ['Computer Vision', 'PyTorch', 'Scikit-learn', 'Python'],
  },
  {
    title: 'MLOps Pipeline for Model Deployment',
    description: 'End-to-end ML pipelines for model deployment and monitoring. Automated workflows including inference, threshold-based routing, fallback models, and retraining pipelines.',
    tags: ['MLOps', 'FastAPI', 'Docker', 'Python', 'Automation'],
  },
]

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg">
            Real-world AI solutions built end-to-end
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
