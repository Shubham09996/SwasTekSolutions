import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

export default function NotFound() {
  return (
    <PageTransition title="Page Not Found | SwasTek Solutions">
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#EFF4FA' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md px-6"
        >
          <p className="text-6xl font-bold mb-4" style={{ color: '#E4EDF7', fontFamily: 'Sora, sans-serif' }}>404</p>
          <h1 className="font-heading text-3xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
            Page not found.
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
    </PageTransition>
  )
}

