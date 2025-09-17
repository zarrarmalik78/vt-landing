'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Feature {
  icon: any
  title: string
  description: string
  color: string
}

interface FeaturesProps {
  features: Feature[]
}

const Features = ({ features }: FeaturesProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Powerful Features for Your{' '}
            <span className="gradient-text">Vape Business</span>
          </h2>
          <p className="section-description">
            Everything you need to manage and grow your vape store efficiently
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="card p-8 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`feature-icon bg-gradient-to-br ${feature.color} group-hover:shadow-lg`}
              >
                <feature.icon size={32} />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 origin-left"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose VapeTrax?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">Professional</div>
                <div className="text-gray-600">Business Grade</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">Offline</div>
                <div className="text-gray-600">Works Without Internet</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5 Min</div>
                <div className="text-gray-600">Quick Setup</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
