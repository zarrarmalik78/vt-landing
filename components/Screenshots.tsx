'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import SimpleImageModal from './SimpleImageModal'

interface Screenshot {
  src: string
  title: string
  description: string
}

interface ScreenshotsProps {
  screenshots: Screenshot[]
}

const Screenshots = ({ screenshots }: ScreenshotsProps) => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="screenshots" className="py-20 bg-gray-50">
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
            See <span className="gradient-text">VapeTrax</span> in Action
          </h2>
          <p className="section-description">
            Explore the intuitive interface designed specifically for vape store owners
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <SimpleImageModal
                src={screenshot.src}
                alt={screenshot.title}
                title={screenshot.title}
                description={screenshot.description}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl cursor-pointer"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-semibold mb-2">{screenshot.title}</h4>
                      <p className="text-sm opacity-90">{screenshot.description}</p>
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={20} className="text-gray-700" />
                  </div>
                </motion.div>
              </SimpleImageModal>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Download VapeTrax and explore all features with your own data
            </p>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex"
            >
              Download Now
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Screenshots
