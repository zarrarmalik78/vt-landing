import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VapeTrax - Professional Vape Store Management Software',
  description: 'Complete vape store management solution with inventory tracking, sales analytics, and refill bottle management. Download VapeTrax today!',
  keywords: 'vape store, inventory management, sales tracking, vape business, retail software',
  authors: [{ name: 'Zyntra' }],
  openGraph: {
    title: 'VapeTrax - Professional Vape Store Management Software',
    description: 'Complete vape store management solution with inventory tracking, sales analytics, and refill bottle management.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VapeTrax - Professional Vape Store Management Software',
    description: 'Complete vape store management solution with inventory tracking, sales analytics, and refill bottle management.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
