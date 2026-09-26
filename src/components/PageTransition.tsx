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
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
      >
        {children}
      </motion.div>
    </>
  )
}
