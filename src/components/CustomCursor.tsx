import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isCTA, setIsCTA] = useState(false)
  const [label, setLabel] = useState('')
  const pos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsMobile(true)
      return
    }

    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      const dx = pos.current.x - ringPos.current.x
      const dy = pos.current.y - ringPos.current.y
      ringPos.current.x += dx * 0.12
      ringPos.current.y += dy * 0.12

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      }
      rafId.current = requestAnimationFrame(animate)
    }

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, label')
      const isCTAEl = target.closest('[data-cta]')
      const isCase = target.closest('[data-case]')
      setIsHovering(!!isInteractive)
      setIsCTA(!!isCTAEl)
      setLabel(isCase ? 'View' : '')
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', onEnter)
    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', onEnter)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  if (isMobile) return null

  return (
    <div className="custom-cursor" aria-hidden="true">
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '52px' : '36px',
          height: isHovering ? '52px' : '36px',
          borderRadius: '50%',
          border: isCTA
            ? '1.5px solid rgba(22, 141, 255, 0.6)'
            : '1.5px solid rgba(7, 89, 209, 0.3)',
          background: isCTA ? 'rgba(22, 141, 255, 0.08)' : 'transparent',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '9px',
          fontFamily: 'Manrope, sans-serif',
          fontWeight: '700',
          color: '#168DFF',
          letterSpacing: '0.05em',
        }}
      >
        {label && <span style={{ pointerEvents: 'none', textTransform: 'uppercase', fontSize: '8px' }}>{label}</span>}
      </div>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '4px' : '7px',
          height: isHovering ? '4px' : '7px',
          background: isCTA ? '#168DFF' : '#0759D1',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.15s ease, height 0.15s ease, background 0.2s ease',
        }}
      />
    </div>
  )
}
