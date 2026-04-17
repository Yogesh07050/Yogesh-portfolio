'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './project-card'

const projects = [
  {
    title: 'Advanced ML Pipeline',
    description: 'End-to-end machine learning pipeline with automated feature engineering, model training, and deployment on cloud infrastructure.',
    tags: ['Python', 'TensorFlow', 'MLOps', 'Docker', 'Kubernetes'],
    github: 'https://github.com',
  },
  {
    title: 'Deep Learning Model',
    description: 'Custom CNN architecture for image classification achieving 97% accuracy on benchmark datasets with optimized inference.',
    tags: ['PyTorch', 'Computer Vision', 'CUDA', 'Optimization'],
    github: 'https://github.com',
  },
  {
    title: 'NLP Text Analysis',
    description: 'Transformer-based NLP system for sentiment analysis and text classification with multi-language support.',
    tags: ['Hugging Face', 'BERT', 'NLP', 'FastAPI'],
    github: 'https://github.com',
  },
  {
    title: 'Real-time Data Processing',
    description: 'Streaming data pipeline processing millions of events per day with Apache Kafka and Apache Spark.',
    tags: ['Kafka', 'Spark', 'Scala', 'AWS'],
    github: 'https://github.com',
  },
  {
    title: 'Recommendation System',
    description: 'Collaborative filtering system using matrix factorization techniques serving personalized recommendations at scale.',
    tags: ['Collaborative Filtering', 'Python', 'Redis', 'PostgreSQL'],
    github: 'https://github.com',
  },
  {
    title: 'Time Series Forecasting',
    description: 'ARIMA and LSTM-based forecasting models for stock market prediction with backtesting framework.',
    tags: ['Time Series', 'LSTM', 'Statsmodels', 'Plotly'],
    github: 'https://github.com',
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
            A selection of my recent work in machine learning and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
