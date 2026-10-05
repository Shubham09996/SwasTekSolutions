// Industries page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'

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

const industries = [
  {
    name: 'Real Estate',
    slug: 'real-estate',
    emoji: '🏢',
    desc: 'Property portals, CRM platforms and client management systems for agencies and developers.',
    accent: '#1558D4',
  },
  {
    name: 'Construction',
    slug: 'construction',
    emoji: '🏗️',
    desc: 'Project tracking, compliance tools and operations platforms for construction and engineering firms.',
    accent: '#0BC4E3',
  },
  {
    name: 'Finance',
    slug: 'finance',
    emoji: '📈',
    desc: 'Secure client portals, compliance systems and reporting dashboards for financial services.',
    accent: '#5B3CF5',
  },
  {
    name: 'Healthcare',
    slug: 'healthcare',
    emoji: '🏥',
    desc: 'Patient management, scheduling and operations tools for healthcare providers and clinics.',
    accent: '#1558D4',
  },
  {
    name: 'Logistics',
    slug: 'logistics',
    emoji: '🚛',
    desc: 'Fleet tracking, shipment management and operations dashboards for logistics businesses.',
    accent: '#0BC4E3',
  },
  {
    name: 'Retail',
    slug: 'retail',
    emoji: '🛍️',
    desc: 'E-commerce platforms, inventory management and retail CRM for physical and online retailers.',
    accent: '#5B3CF5',
  },
  {
    name: 'Education',
    slug: 'education',
    emoji: '🎓',
    desc: 'Learning platforms, student management and administrative tools for education providers.',
    accent: '#1558D4',
  },
  {
    name: 'Professional Services',
    slug: 'professional-services',
    emoji: '💼',
    desc: 'CRM, project management and billing systems for consultancies and professional practices.',
    accent: '#0BC4E3',
  },
  {
    name: 'E-commerce',
    slug: 'ecommerce',
    emoji: '🛒',
    desc: 'Custom storefronts, operations infrastructure and integrations for online businesses.',
    accent: '#5B3CF5',
  },
  {
    name: 'Startups',
    slug: 'startups',
    emoji: '🚀',
    desc: 'MVPs, SaaS products and scalable platforms for early-stage and growth-stage companies.',
    accent: '#1558D4',
  },
]

export default function Industries() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <PageTransition
      title="Industries | SwasTek Solutions"
      description="Software for the specific challenges and workflows of your industry — not generic off-the-shelf assumptions."
    >
      {/* ═══════════════════════════════════════════════════════
          DARK HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
        <div className="absolute inset-0 hero-grid opacity-100" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.18) 0%, transparent 68%)', top: '-15%', left: '-5%', filter: 'blur(80px)' }} />
          <div className="orb-2 absolute" style={{ width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,196,227,0.10) 0%, transparent 70%)', bottom: '0%', right: '10%', filter: 'blur(100px)' }} />
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
                Industries
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-end">
            <div>
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-none text-white"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', letterSpacing: '-0.04em' }}
                >
                  Software for how
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
                    your industry works.
                  </span>
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg leading-relaxed self-end"
              style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Different industries have different workflows, compliance requirements and operational rhythms. We build software around the specific needs of your sector — not a generic template.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INDUSTRIES GRID
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-4">
            {industries.map((ind, i) => (
              <FadeUp key={ind.slug} delay={i * 0.05}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group flex items-start gap-5 p-7 rounded-3xl border relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  style={{ borderColor: '#E2EBF5', boxShadow: '0 2px 16px rgba(7,17,31,0.03)' }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 20% 50%, ${ind.accent}06, transparent 65%)`, opacity: hovered === i ? 1 : 0 }}
                  />
                  {/* Left accent line */}
                  <motion.div
                    className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full"
                    animate={{ opacity: hovered === i ? 1 : 0, scaleY: hovered === i ? 1 : 0 }}
                    style={{ background: ind.accent, transformOrigin: 'top' }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Emoji icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${ind.accent}12 0%, ${ind.accent}06 100%)`,
                      border: `1px solid ${ind.accent}18`,
                    }}
                  >
                    {ind.emoji}
                  </div>

                  <div className="flex-1 min-w-0 relative z-10">
                    <h2
                      className="font-bold text-xl mb-2 transition-colors duration-300"
                      style={{ color: hovered === i ? ind.accent : '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
                    >
                      {ind.name}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {ind.desc}
                    </p>
                  </div>

                  <motion.div
                    animate={{ x: hovered === i ? 2 : 0, y: hovered === i ? -2 : 0, opacity: hovered === i ? 1 : 0.3 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0"
                    style={{ color: ind.accent }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: '#F7FAFD' }}>
        <div className="container-tight">
          <FadeUp>
            <div
              className="relative rounded-3xl p-12 md:p-20 overflow-hidden text-center"
              style={{ background: 'linear-gradient(145deg, #03080F 0%, #071424 60%, #0D1E34 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(21,88,212,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              </div>
              <div className="relative z-10">
                <p className="section-label mb-4">Don't see your industry?</p>
                <h2 className="font-bold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.04em', lineHeight: 1.08 }}>
                  We've built for many more sectors.
                </h2>
                <p className="text-base mb-10" style={{ color: 'rgba(160,175,194,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Tell us about your business and what you need. We build software for how your business actually works.
                </p>
                <Link to="/contact" data-cta className="btn-primary-white">
                  <Zap size={14} />
                  Have a conversation <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
