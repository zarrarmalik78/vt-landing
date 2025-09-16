'use client'

import { motion } from 'framer-motion'

const GalleryCTA = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
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

export default GalleryCTA
