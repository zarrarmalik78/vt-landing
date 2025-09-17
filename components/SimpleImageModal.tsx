'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface SimpleImageModalProps {
  src: string
  alt: string
  title: string
  description: string
  children: React.ReactNode
}

const SimpleImageModal = ({ src, alt, title, description, children }: SimpleImageModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClick = () => {
    console.log('Image clicked, opening modal for:', title)
    setIsOpen(true)
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="cursor-pointer group relative"
      >
        {children}
        {/* Zoom overlay */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/50 flex items-center justify-center rounded-2xl transition-all duration-300 pointer-events-none">
          <div className="bg-white/0 hover:bg-white/90 rounded-full p-3 transition-all duration-300">
            <ZoomIn size={24} className="text-transparent hover:text-gray-700 transition-all duration-300" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-600 mt-1">{description}</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Image */}
              <div className="relative">
                <Image
                  src={src}
                  alt={alt}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SimpleImageModal
