'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

interface Screenshot {
  src: string
  title: string
  description: string
}

interface SimpleGalleryProps {
  screenshots: Screenshot[]
}

const SimpleGallery = ({ screenshots }: SimpleGalleryProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null)

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

  const openModal = (screenshot: Screenshot) => {
    console.log('Opening modal for:', screenshot.title)
    setSelectedImage(screenshot)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See <span className="text-yellow-300">VapeTrax</span> in Action
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
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
              {/* Clickable Image */}
              <div 
                onClick={() => openModal(screenshot)}
                className="relative aspect-video overflow-hidden cursor-pointer"
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

                {/* Click indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-gray-700 font-bold">+</span>
                </div>
              </div>

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

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{selectedImage.title}</h3>
                  <p className="text-gray-600 mt-1">{selectedImage.description}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[70vh] object-contain"
                  priority
                />
              </div>

              {/* Footer */}
              <div className="p-6 bg-gray-50">
                <p className="text-sm text-gray-600 text-center">
                  Click outside or press ESC to close
                </p>
              </div>
            </div>
          </div>
        )}


        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full -z-10"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-yellow-300/10 rounded-full -z-10"></div>
      </div>
    </section>
  )
}

export default SimpleGallery
