'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Screenshots', href: '#screenshots' },
      { name: 'Download', href: '#download' },
      { name: 'System Requirements', href: '#' }
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Documentation', href: '#' },
      { name: 'Video Tutorials', href: '#' }
    ],
    Company: [
      { name: 'About Zyntra', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'License', href: '#' }
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <span className="text-2xl font-bold">VapeTrax</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional vape store management software designed to streamline your business operations, 
                track inventory, and boost sales. Built by Zyntra for vape store owners worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={18} />
                  <span>zyntratec@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={18} />
                  <span>+92 3259914121</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={18} />
                  <span>Made with ❤️ by Zyntra</span>
                </div>
              </div>
            </motion.div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zyntra. All rights reserved. VapeTrax is a trademark of Zyntra.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>for vape store owners</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
