// Scroll Progress + Back-to-Top — SwasTek Solutions
import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const unsub = scrollYProgress.on('change', v => {
      const isTop = v > 0.12
      setShowTop(prev => (prev !== isTop ? isTop : prev))
    })
    return unsub
  }, [scrollYProgress])

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          transformOrigin: '0%',
          background: 'linear-gradient(90deg, #1558D4, #0BC4E3)',
          zIndex: 99997,
          pointerEvents: 'none',
        }}
      />

      {/* Back-to-top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{    opacity: 0, scale: 0.7, y: 20  }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{  scale: 0.9  }}
            style={{
              position: 'fixed',
              bottom: 32,
              right: 32,
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1558D4, #0BC4E3)',
              boxShadow: '0 4px 24px rgba(21,88,212,0.45), 0 0 0 1px rgba(21,88,212,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 99990,
              cursor: 'pointer',
              border: 'none',
              color: '#fff',
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

