// NotFound page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Home, ArrowLeft } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <PageTransition title="Page Not Found | SwasTek Solutions">
      <div
        className="min-h-screen flex items-center justify-center grain-overlay relative overflow-hidden"
        style={{ background: 'var(--void)' }}
      >
        {/* Background */}
        <div className="absolute inset-0 hero-grid opacity-80" />

        {/* Mouse-following orb */}
        <div
          className="absolute pointer-events-none transition-all duration-1000 ease-out"
          style={{
            width: 800,
            height: 800,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(21,88,212,0.14) 0%, transparent 65%)`,
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute pointer-events-none transition-all duration-2000 ease-out"
          style={{
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(11,196,227,0.08) 0%, transparent 65%)`,
            left: `${100 - mousePos.x}%`,
            top: `${100 - mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="relative z-10 text-center max-w-2xl px-6">
          {/* 404 number — massive editorial style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6 select-none pointer-events-none"
          >
            {/* Deep glow behind number */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 0 }}>
              <div style={{
                width: '70%',
                height: '70%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(21,88,212,0.25) 0%, rgba(11,196,227,0.12) 50%, transparent 70%)',
                filter: 'blur(40px)',
              }} />
            </div>
            <span
              className="block leading-none relative z-10"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(6rem, 16vw, 14rem)',
                letterSpacing: '-0.06em',
                WebkitTextStroke: '1px rgba(255,255,255,0.07)',
                WebkitTextFillColor: 'transparent',
                lineHeight: 0.85,
              }}
            >
              404
            </span>
            {/* Gradient overlay version */}
            <span
              className="absolute inset-0 block leading-none z-10"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(6rem, 16vw, 14rem)',
                letterSpacing: '-0.06em',
                background: 'linear-gradient(135deg, rgba(21,88,212,0.45) 0%, rgba(11,196,227,0.45) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 0.85,
                filter: 'blur(0.5px)',
              }}
            >
              404
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'DM Mono, monospace' }}>
                  Page Not Found
                </span>
              </div>
            </div>

            <h1
              className="font-bold text-white mb-5"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', letterSpacing: '-0.04em', lineHeight: 1.1 }}
            >
              Looks like this page took<br />a wrong turn.
            </h1>
            <p className="text-base leading-relaxed mb-12 max-w-md mx-auto" style={{ color: 'rgba(160,175,194,0.65)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            {/* Quick links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {quickLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.href}
                    className="group block p-3.5 rounded-2xl text-sm font-semibold text-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.6)',
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                    }}
                  >
                    <span className="group-hover:text-white transition-colors">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-wrap justify-center gap-3">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/" className="btn-primary text-sm">
                  <Home size={14} />
                  Back to Home
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2.5 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  style={{ border: '1.5px solid rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.65)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <ArrowLeft size={14} />
                  Go Back
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
