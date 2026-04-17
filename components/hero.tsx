'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl text-center z-10"
      >
        <motion.p
          variants={itemVariants}
          className="text-blue-400 font-semibold text-lg mb-4 tracking-widest uppercase"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Yogesh M
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-white/80 mb-6"
        >
          AI/ML Developer
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-xl text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Building intelligent systems and data-driven solutions. Specializing in RAG pipelines,
          NL-to-SQL, model deployment, and MLOps — turning complex data into real-world impact.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400">1+</div>
            <div className="text-white/60 mt-2 text-sm">Year Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-400">4+</div>
            <div className="text-white/60 mt-2 text-sm">Projects Shipped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400">10+</div>
            <div className="text-white/60 mt-2 text-sm">Technologies</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
