// Custom Cursor — SwasTek Solutions
import { useEffect, useState } from 'react'
import { useSpring, useMotionValue, motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useSpring(cursorX, { stiffness: 100, damping: 18, mass: 0.5 })
  const ringY = useSpring(cursorY, { stiffness: 100, damping: 18, mass: 0.5 })

  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [hidden, setHidden]   = useState(true)

  useEffect(() => {
    // Hide native cursor
    document.body.style.cursor = 'none'

    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const onMove = (e: MouseEvent) => {
      setHidden(false)
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    const onDown  = () => setClicked(true)
    const onUp    = () => setClicked(false)
    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    const attachHover = () => {
      document.querySelectorAll<Element>('a, button, [data-cursor-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => setHovered(true))
        el.addEventListener('mouseleave', () => setHovered(false))
      })
    }
    attachHover()

    const observer = new MutationObserver(() => setTimeout(attachHover, 100))
    observer.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.body.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
          zIndex: 99999,
          pointerEvents: 'none',
          borderRadius: '50%',
          background: hovered
            ? 'linear-gradient(135deg, #1558D4, #0BC4E3)'
            : '#ffffff',
          mixBlendMode: 'difference',
        }}
        animate={{
          width:   hovered ? 12 : 7,
          height:  hovered ? 12 : 7,
          opacity: hidden ? 0 : 1,
          scale:   clicked ? 0.65 : 1,
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: ringX,
          top: ringY,
          x: '-50%',
          y: '-50%',
          zIndex: 99998,
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
        animate={{
          width:   hovered ? 48 : 30,
          height:  hovered ? 48 : 30,
          opacity: hidden ? 0 : hovered ? 0.9 : 0.45,
          scale:   clicked ? 0.8 : 1,
          borderColor: hovered
            ? 'rgba(21,136,255,0.65)'
            : 'rgba(255,255,255,0.35)',
          borderWidth: hovered ? '1.5px' : '1px',
          borderStyle: 'solid',
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </>
  )
}

