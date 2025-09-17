'use client'

import { motion } from 'framer-motion'
import { Download, Play, Users, Clock, Star, Zap } from 'lucide-react'
import Image from 'next/image'
import SimpleImageModal from './SimpleImageModal'

interface Stat {
  number: string
  label: string
  icon: any
}

interface HeroProps {
  stats: Stat[]
}

const Hero = ({ stats }: HeroProps) => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Professional{' '}
              <span className="gradient-text">Vape Store</span>
              <br />
              Management Software
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Streamline your vape business with VapeTrax - the complete solution for 
              inventory management, sales tracking, and customer analytics. 
              Built specifically for vape stores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4"
              >
                <Download size={24} />
                Download Free
              </motion.a>
              <motion.a
                href="#screenshots"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4"
              >
                <Play size={24} />
                View Demo
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <stat.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <SimpleImageModal
              src="/images/vapetrax-pc-mockup.png"
              alt="VapeTrax Dashboard on Professional PC Setup"
              title="VapeTrax Professional Dashboard"
              description="Complete vape store management solution with real-time analytics and business insights"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              >
                <Image
                  src="/images/vapetrax-pc-mockup.png"
                  alt="VapeTrax Dashboard on Professional PC Setup"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Live</span>
                  </div>
                </motion.div>
              </motion.div>
            </SimpleImageModal>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
