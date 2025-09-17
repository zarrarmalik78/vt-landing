'use client'

import { motion } from 'framer-motion'
import { Download, Check, Shield, Clock, Zap, Star } from 'lucide-react'
import Image from 'next/image'

const DownloadSection = () => {
  const features = [
    { icon: Check, text: 'No monthly fees' },
    { icon: Shield, text: 'Works offline' },
    { icon: Zap, text: 'Easy setup' },
    { icon: Star, text: 'Windows compatible' }
  ]

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold leading-tight"
            >
              Ready to Transform Your{' '}
              <span className="text-yellow-300">Vape Store?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl opacity-90 leading-relaxed"
            >
              Download VapeTrax v1.6.11 and start managing your vape business like a pro. 
              It's completely free and takes just minutes to set up.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <feature.icon size={16} className="text-white" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/downloads/VapeTrax_Setup_1.6.11.exe"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-4 bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Download size={28} />
                <div className="text-left">
                  <div>Download VapeTrax v1.6.11</div>
                  <div className="text-sm opacity-70">Free - 200MB</div>
                </div>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="flex items-center space-x-2">
                <Shield size={20} className="text-green-400" />
                <span className="text-sm">Virus Free</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-green-400" />
                <span className="text-sm">Quick Install</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star size={20} className="text-yellow-400" />
                <span className="text-sm">5-Star Rated</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/laptop-mockup.png"
                alt="VapeTrax on Professional Laptop"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-yellow-300/10 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DownloadSection
