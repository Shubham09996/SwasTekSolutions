import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
  title?: string
  description?: string
}

export default function PageTransition({ children, title, description }: PageTransitionProps) {
  return (
    <>
      {title && (
        <head>
          <title>{title}</title>
          {description && <meta name="description" content={description} />}
        </head>
      )}


      {/* Page enter animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
