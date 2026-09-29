// Work page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
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

const projects = [
  {
    id: 'alpha-crm',
    title: 'Enterprise CRM Platform',
    industry: 'Professional Services',
    services: ['CRM Development', 'API Integrations', 'Business Automation'],
    challenge: 'A multi-division professional services firm was managing client relationships across three disconnected systems, creating duplicate data, missed follow-ups and reporting blind spots.',
    approach: 'We mapped their entire sales workflow across divisions before writing a line of code. The design process involved their management, sales and ops teams separately before being unified.',
    bg: '#060D18',
    accent: '#1558D4',
    accentSoft: 'rgba(21,88,212,0.12)',
    isLight: false,
    metric: { value: '3→1', label: 'Systems unified' },
  },
  {
    id: 'retail-platform',
    title: 'Retail Operations Platform',
    industry: 'Retail & E-commerce',
    services: ['Web Application', 'Custom Software', 'API Integrations'],
    challenge: 'A growing retailer needed a single operational view across their warehouse, stores and online channels. Their team was working from separate spreadsheets and isolated systems.',
    approach: 'We designed a unified operations dashboard that pulled data from their existing systems — no full migration required — giving each team role the exact view they needed.',
    bg: '#EEF3FA',
    accent: '#1558D4',
    accentSoft: 'rgba(21,88,212,0.06)',
    isLight: true,
    metric: { value: '100%', label: 'Real-time visibility' },
  },
  {
    id: 'property-saas',
    title: 'Property Management SaaS',
    industry: 'Real Estate',
    services: ['SaaS Development', 'UI/UX Design', 'API Integrations'],
    challenge: "An estate agency group needed a multi-tenant property management platform that could be licensed to independent agencies — without each agency seeing another's data.",
    approach: 'We built a multi-tenant SaaS architecture from the start, with isolated data spaces, agency-specific configuration and a shared infrastructure that kept costs manageable.',
    bg: '#050E1A',
    accent: '#0BC4E3',
    accentSoft: 'rgba(11,196,227,0.12)',
    isLight: false,
    metric: { value: 'Multi-tenant', label: 'Architecture' },
  },
  {
    id: 'logistics-dashboard',
    title: 'Logistics Operations Dashboard',
    industry: 'Logistics',
    services: ['Web Application', 'API Integrations', 'Business Automation'],
    challenge: 'A logistics company had no real-time visibility of their fleet or delivery status. Customers called daily for updates. Management had no reliable way to spot problems.',
    approach: 'We built an operations dashboard connected to their GPS fleet system, carrier APIs and warehouse software — giving the ops team live visibility and automating customer notifications.',
    bg: '#EEF3FA',
    accent: '#1558D4',
    accentSoft: 'rgba(21,88,212,0.06)',
    isLight: true,
    metric: { value: 'Live', label: 'Fleet tracking' },
  },
]

export default function Work() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <PageTransition
      title="Our Work | SwasTek Solutions"
      description="Case studies and project examples — digital products, business systems and software we've built for real businesses."
    >
      {/* ═══════════════════════════════════════════════════════
          DARK HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
        <div className="absolute inset-0 hero-grid opacity-100" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.18) 0%, transparent 68%)', top: '-15%', right: '-5%', filter: 'blur(80px)' }} />
          <div className="orb-2 absolute" style={{ width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,196,227,0.10) 0%, transparent 70%)', bottom: '0%', left: '15%', filter: 'blur(100px)' }} />
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
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue-600)' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue-500)' }} />
              </span>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'DM Mono, monospace' }}>
                Selected Work
              </span>
            </div>
          </motion.div>

          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="leading-none text-white"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.04em' }}
            >
              Projects we're
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 5rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
            >
              <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                proud of.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg leading-relaxed max-w-xl"
            style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            A selection of digital products and business systems we've designed and built. Every project starts with understanding the business, not the technology.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROJECTS — full-bleed cards
      ═══════════════════════════════════════════════════════ */}
      <section className="py-0 bg-white border-t-2" style={{ borderColor: '#07111F' }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={`/work/${p.id}`}
              data-case
              className="block group relative border-b"
              style={{ borderColor: p.isLight ? '#E2EBF5' : 'rgba(255,255,255,0.05)' }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="min-h-[60vh] flex flex-col md:flex-row items-stretch relative overflow-hidden"
                style={{ background: p.bg }}
              >
                {/* Content */}
                <div className={`flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-between ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-7">
                      <span
                        className="text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full"
                        style={{ color: p.accent, background: `${p.accent}18`, border: `1px solid ${p.accent}25`, fontFamily: 'DM Mono, monospace' }}
                      >
                        {p.industry}
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase" style={{ color: p.isLight ? '#475569' : '#94A3B8', fontFamily: 'DM Mono, monospace' }}>
                        0{i + 1} / 0{projects.length}
                      </span>
                    </div>
                    <h2
                      className="font-bold mb-5 leading-tight"
                      style={{ color: p.isLight ? '#07111F' : '#ffffff', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.035em' }}
                    >
                      {p.title}
                    </h2>
                    <p className="text-base leading-relaxed max-w-lg mb-6" style={{ color: p.isLight ? '#334155' : '#CBD5E1', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {p.challenge}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.services.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1.5 rounded-full font-semibold"
                          style={{ background: p.isLight ? '#E2EBF5' : 'rgba(255,255,255,0.08)', color: p.isLight ? '#334155' : '#CBD5E1', fontFamily: 'DM Mono, monospace', letterSpacing: '0.04em' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-12 pt-6 border-t" style={{ borderColor: p.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.12)' }}>
                    <motion.div
                      className="flex items-center gap-2 text-sm font-semibold"
                      animate={{ x: hoveredProject === i ? 6 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ color: p.isLight ? p.accent : '#0BC4E3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      View case study <ArrowUpRight size={14} />
                    </motion.div>
                    <div className="flex-1 h-px" style={{ background: p.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.08)' }} />
                    <div className="text-right">
                      <div className="text-lg font-bold num-display" style={{ color: p.accent, letterSpacing: '-0.04em' }}>{p.metric.value}</div>
                      <div className="text-[10px] font-bold tracking-wider uppercase" style={{ color: p.isLight ? '#475569' : '#94A3B8', fontFamily: 'DM Mono, monospace' }}>{p.metric.label}</div>
                    </div>
                  </div>
                </div>

                {/* Visual panel */}
                <div className="hidden md:flex flex-1 items-center justify-center relative" style={{ background: p.accentSoft, minHeight: 360 }}>
                  {/* Animated geometric art */}
                  <div className="relative w-72 h-72">
                    <motion.div
                      className="absolute inset-0 rounded-3xl border"
                      style={{ borderColor: `${p.accent}25` }}
                      animate={{ rotate: hoveredProject === i ? -2 : -6, scale: hoveredProject === i ? 1.08 : 1 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.div
                      className="absolute inset-6 rounded-2xl border"
                      style={{ borderColor: `${p.accent}18` }}
                      animate={{ rotate: hoveredProject === i ? 1 : 3, scale: hoveredProject === i ? 1.04 : 1 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.div
                      className="absolute inset-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${p.accent}18` }}
                      animate={{ scale: hoveredProject === i ? 1.08 : 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-1 num-display" style={{ color: p.accent, letterSpacing: '-0.05em' }}>
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: `${p.accent}80`, fontFamily: 'DM Mono, monospace' }}>
                          Case Study
                        </div>
                      </div>
                    </motion.div>
                    {/* Corner dots */}
                    {[[-1,-1],[1,-1],[-1,1],[1,1]].map(([dx,dy], idx) => (
                      <div
                        key={idx}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: `${p.accent}60`,
                          top: dy < 0 ? '8px' : 'auto',
                          bottom: dy > 0 ? '8px' : 'auto',
                          left: dx < 0 ? '8px' : 'auto',
                          right: dx > 0 ? '8px' : 'auto',
                        }}
                      />
                    ))}
                  </div>
                  {/* Industry label */}
                  <div className="absolute bottom-8 right-8">
                    <p className="text-xs font-bold tracking-wider uppercase" style={{ color: `${p.accent}60`, fontFamily: 'DM Mono, monospace' }}>{p.industry}</p>
                  </div>
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: hoveredProject === i ? 0.05 : 0 }}
                    style={{ background: p.accent }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
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
                <p className="section-label mb-4">Next project</p>
                <h2
                  className="font-bold text-white mb-5"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.04em', lineHeight: 1.08 }}
                >
                  Have a project in mind?
                </h2>
                <p className="text-base mb-10" style={{ color: 'rgba(160,175,194,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Tell us what you're trying to build and we'll help you figure out the approach.
                </p>
                <Link to="/contact" data-cta className="btn-primary-white">
                  <Zap size={14} />
                  Start a Project <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
