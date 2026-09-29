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
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
        exit={  { opacity: 0, y: -12, filter: "blur(4px)" }}
        transition={{
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </>
  )
}
