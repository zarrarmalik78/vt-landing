'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Package, 
  Recycle, 
  ShoppingCart, 
  TrendingUp, 
  Truck,
  Download,
  Play,
  Check,
  Mail,
  Clock,
  Shield,
  Star,
  Users,
  Zap
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SimpleGallery from '@/components/SimpleGallery'
import GalleryCTA from '@/components/GalleryCTA'
import DownloadSection from '@/components/DownloadSection'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    description: 'Get instant insights into your business performance with comprehensive analytics and key metrics.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Track stock levels, manage suppliers, and maintain detailed inventory logs with automatic alerts.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Recycle,
    title: 'Refill Bottle Tracking',
    description: 'Smart bottle management system to track refills, monitor usage, and optimize your refill services.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: ShoppingCart,
    title: 'Sales Management',
    description: 'Complete sales tracking with detailed transaction history and customer purchase patterns.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: TrendingUp,
    title: 'Advanced Reports',
    description: 'Generate detailed business reports with customizable analytics and export capabilities.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Truck,
    title: 'Supplier Management',
    description: 'Manage vendor relationships, track orders, and maintain supplier contact information.',
    color: 'from-indigo-500 to-indigo-600'
  }
]

const screenshots = [
  {
    src: '/images/dashboard.png',
    title: 'Dashboard Overview',
    description: 'Real-time business metrics and key performance indicators'
  },
  {
    src: '/images/sales.png',
    title: 'Sales Tracking',
    description: 'Comprehensive sales management and transaction history'
  },
  {
    src: '/images/advanced-analytics.png',
    title: 'Advanced Analytics',
    description: 'Comprehensive business insights and data visualization'
  },
  {
    src: '/images/refill-bottle-tracking.png',
    title: 'Bottle Tracking',
    description: 'Smart refill bottle management system'
  },
  {
    src: '/images/reports.png',
    title: 'Business Reports',
    description: 'Advanced analytics and reporting capabilities'
  },
  {
    src: '/images/suppliers.png',
    title: 'Supplier Management',
    description: 'Vendor and supplier relationship management'
  }
]

const stats = [
  { number: '100+', label: 'Vape Stores', icon: Users },
  { number: '24/7', label: 'Support', icon: Clock },
  { number: 'Free', label: 'Trial', icon: Star },
  { number: 'Fast', label: 'Setup', icon: Zap }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero stats={stats} />
      <Features features={features} />
      <SimpleGallery screenshots={screenshots} />
      <GalleryCTA />
      <DownloadSection />
      <Contact />
      <Footer />
    </main>
  )
}
