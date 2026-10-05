// Services page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Globe, Settings2, Zap, ShoppingBag, Palette, Compass, Target, Smartphone, BarChart3 } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const services = [
  { num: '01', title: 'Web Design', href: '/services/web-design', desc: 'Modern, high-converting visual web layouts, bespoke typography, and distinct digital brand identity.', tag: 'Design', icon: Palette, color: '#1558D4' },
  { num: '02', title: 'UX/UI Design', href: '/services/ui-ux-design', desc: 'Human-centered user research, intuitive wireframing, interactive Figma prototypes, and scalable design systems.', tag: 'UI/UX', icon: Compass, color: '#0BC4E3' },
  { num: '03', title: 'IT Strategy Consulting', href: '/services/it-strategy-consulting', desc: 'Strategic technology advisory, system architecture roadmaps, legacy modernization, and IT audits.', tag: 'Strategy', icon: Target, color: '#5B3CF5' },
  { num: '04', title: 'Custom Software Development', href: '/services/custom-software', desc: 'Purpose-built enterprise platforms, internal team tools, and operational workflows tailored to your business.', tag: 'Software', icon: Settings2, color: '#1558D4' },
  { num: '05', title: 'CRM Development', href: '/services/crm-development', desc: 'Custom CRM systems tailored to your sales pipeline, client onboarding, and lead management.', tag: 'CRM', icon: BarChart3, color: '#0BC4E3' },
  { num: '06', title: 'Web Development', href: '/services/web-development', desc: 'High-performance, secure web applications and portals engineered with modern fullstack technologies.', tag: 'Web Dev', icon: Globe, color: '#1558D4' },
  { num: '07', title: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Cross-platform iOS and Android apps with 60fps native performance, offline sync, and biometric security.', tag: 'Mobile', icon: Smartphone, color: '#5B3CF5' },
  { num: '08', title: 'E-Commerce Development', href: '/services/ecommerce', desc: 'Custom digital storefronts, friction-free checkout funnels, inventory sync, and payment integrations.', tag: 'E-Commerce', icon: ShoppingBag, color: '#1558D4' },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null)

  return (
    <PageTransition
      title="Services | SwasTek Solutions"
      description="From business websites to custom software and CRM platforms, we build digital products around the way your business works."
    >
      {/* ═══════════════════════════════════════════════════════
          DARK HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
        <div className="absolute inset-0 hero-grid opacity-100" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.20) 0%, transparent 68%)', top: '-15%', left: '-5%', filter: 'blur(80px)' }} />
          <div className="orb-2 absolute" style={{ width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,196,227,0.12) 0%, transparent 70%)', bottom: '0%', right: '15%', filter: 'blur(100px)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 mb-10"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                What We Build
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-end">
            <div>
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-none text-white"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', letterSpacing: '-0.04em' }}
                >
                  What can we
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
                >
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    build for you?
                  </span>
                </motion.h1>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col justify-end"
            >
              <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                From business websites to custom software and CRM platforms, we build digital products around the way your business works.
              </p>
              <Link to="/contact" data-cta className="btn-primary text-sm self-start">
                <Zap size={14} />
                Start a Project
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES — editorial large-number list
      ═══════════════════════════════════════════════════════ */}
      <section className="py-0 border-t" style={{ background: 'var(--void)', borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="container-wide">
          <div>
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                >
                  <Link
                    to={s.href}
                    className="group block border-b relative overflow-hidden"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    onMouseEnter={() => setActiveService(i)}
                    onMouseLeave={() => setActiveService(null)}
                  >
                    {/* Hover fill */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeService === i ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      style={{ background: 'rgba(21,88,212,0.12)', transformOrigin: 'left' }}
                    />

                    <div className="relative z-10 grid grid-cols-[40px_1fr_auto] sm:grid-cols-[70px_1fr_auto] md:grid-cols-[100px_auto_1fr_260px_auto] items-center gap-3 sm:gap-6 py-5 sm:py-7 px-1 sm:px-2">
                      {/* Number */}
                      <span
                        className="font-bold leading-none transition-colors duration-350"
                        style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.1rem, 2.5vw, 2.2rem)', color: activeService === i ? '#38D9F0' : 'rgba(255,255,255,0.2)', letterSpacing: '-0.04em' }}
                      >
                        {s.num}
                      </span>

                      {/* Icon */}
                      <div
                        className="hidden md:flex w-10 h-10 rounded-xl items-center justify-center transition-all duration-300"
                        style={{ background: activeService === i ? `${s.color}25` : 'rgba(255,255,255,0.04)', border: `1px solid ${activeService === i ? `${s.color}45` : 'rgba(255,255,255,0.08)'}` }}
                      >
                        <Icon size={18} style={{ color: activeService === i ? s.color : '#8DA3B8' }} className="transition-colors duration-300" />
                      </div>

                      {/* Title */}
                      <h3
                        className="font-bold text-base sm:text-xl md:text-2xl transition-colors duration-300"
                        style={{ color: activeService === i ? '#ffffff' : 'rgba(240,244,248,0.95)', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
                      >
                        {s.title}
                      </h3>

                      {/* Description (desktop) */}
                      <AnimatePresence>
                        {activeService === i && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="hidden md:block text-sm leading-relaxed"
                            style={{ color: 'rgba(160,175,194,0.85)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {s.desc}
                          </motion.p>
                        )}
                        {activeService !== i && (
                          <span
                            key="tag"
                            className="hidden md:inline-flex text-xs px-3 py-1 rounded-full border"
                            style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)', color: '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.04em' }}
                          >
                            {s.tag}
                          </span>
                        )}
                      </AnimatePresence>

                      {/* Arrow */}
                      <motion.div
                        animate={{ x: activeService === i ? 3 : 0, y: activeService === i ? -3 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ArrowUpRight
                          size={20}
                          className="flex-shrink-0 transition-colors duration-300"
                          style={{ color: activeService === i ? '#0BC4E3' : 'rgba(255,255,255,0.3)' }}
                        />
                      </motion.div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden border-t" style={{ background: 'var(--void)', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(80px)' }} />
        </div>

        <div className="container-tight relative z-10">
          <FadeUp>
            <div
              className="relative rounded-3xl p-10 sm:p-14 md:p-20 overflow-hidden text-center shadow-2xl border"
              style={{
                background: 'linear-gradient(145deg, rgba(7, 19, 34, 0.85) 0%, rgba(3, 8, 15, 0.95) 100%)',
                borderColor: 'rgba(11, 196, 227, 0.3)',
                boxShadow: '0 24px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(11, 196, 227, 0.12)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(21,88,212,0.35) 0%, transparent 70%)', filter: 'blur(50px)' }} />
              </div>
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase mb-4 text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Not sure what you need?
                </span>
                <h2
                  className="font-bold text-white mb-5"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.04em', lineHeight: 1.08 }}
                >
                  Tell us about your business.<br />We'll figure out the right approach.
                </h2>
                <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Every engagement starts with understanding your business — not picking a technology.
                </p>
                <Link to="/contact" data-cta className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25">
                  <Zap size={15} />
                  Have a conversation <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
