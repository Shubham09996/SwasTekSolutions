// Work page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Zap,
  Globe,
  HardHat,
  ExternalLink,
} from 'lucide-react'
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
    id: 'quantaxs-estimation',
    title: 'Quantax Estimation Platform',
    industry: 'Construction Estimating & Material Takeoffs',
    liveUrl: 'https://quantaxsestimation.com/',
    services: ['Website Development', 'Blueprint Ingestion', 'Regional SEO Architecture', 'Mobile Responsive UI'],
    challenge: 'Quantax Estimation, a US provider of construction material takeoffs and lumber estimation, needed a fast, conversion-oriented website to showcase their trade estimation services and handle quote requests from contractors across New Jersey, California, and Texas.',
    approach: 'We designed and engineered a custom Astro and React web platform with dedicated trade portals (Lumber, Drywall, Concrete, Roofing, MEP), blueprint drawing upload request forms, and localized SEO optimization.',
    bg: '#060D18',
    accent: '#0BC4E3',
    accentSoft: 'rgba(11,196,227,0.14)',
    isLight: false,
    metric: { value: '24–48h', label: 'Turnaround SLA' },
  },
]

/* ─────────────────────────────────────────────────────────── */
/*  INTERACTIVE PROJECT SHOWCASE MOCKUPS                       */
/* ─────────────────────────────────────────────────────────── */

function QuantaxsShowcaseMockup() {
  const screenshots = [
    {
      id: 'hero',
      label: 'Hero & Overview',
      tag: '01 · Main Landing',
      title: 'Accurate Construction Estimation & Takeoffs',
      desc: 'High-converting dark aesthetic hero engineered with live estimation software visuals and dual CTAs.',
      img: '/assets/projects/quantax/hero.png',
      fallback: '/image.png',
      badge: '🇺🇸 Worldwide & US Nationwide',
    },
    {
      id: 'features',
      label: 'Why Choose Quantax',
      tag: '02 · Value Proposition',
      title: 'The Estimation Partner Contractors Trust',
      desc: 'Key value pillars, 100% double-checked review metrics, and material savings breakdown.',
      img: '/assets/projects/quantax/features.png',
      fallback: '/image copy.png',
      badge: '✓ 100% Double-Checked Quality',
    },
    {
      id: 'quote',
      label: 'Blueprint & Quote Form',
      tag: '03 · Lead Intake',
      title: 'Interactive Multi-Trade Project Intake',
      desc: 'Intuitive plan upload interface (PDF/DWG), trade selector checkboxes, and direct quote routing.',
      img: '/assets/projects/quantax/quote.png',
      fallback: '/image copy 2.png',
      badge: '⚡ 24–48h Rapid Turnaround',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const current = screenshots[activeIndex]

  return (
    <div
      className="w-full max-w-lg rounded-2xl overflow-hidden border shadow-2xl relative z-10 transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, #071322 0%, #03080F 100%)',
        borderColor: 'rgba(11, 196, 227, 0.35)',
        boxShadow: '0 30px 60px -15px rgba(3, 8, 15, 0.8), 0 0 35px rgba(11, 196, 227, 0.16)',
      }}
    >
      {/* Top Browser Bar */}
      <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#03080F' }}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <a
          href="https://quantaxsestimation.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-md text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 transition-colors"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          quantaxsestimation.com <ExternalLink size={10} className="text-cyan-400" />
        </a>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          ● Live US Website
        </span>
      </div>

      {/* Interactive Tabs Header */}
      <div className="px-3 sm:px-4 py-2 border-b flex items-center gap-1.5 overflow-x-auto scrollbar-none" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        {screenshots.map((s, idx) => (
          <button
            key={s.id}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(idx) }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
              activeIndex === idx
                ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
            }`}
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {idx === 0 && <Globe size={12} />}
            {idx === 1 && <HardHat size={12} />}
            {idx === 2 && <Zap size={12} />}
            {s.label}
          </button>
        ))}
      </div>

      {/* Main Image Showcase Viewport */}
      <div className="p-3 sm:p-4 space-y-3">
        <div className="relative rounded-xl overflow-hidden border border-white/10 group bg-slate-950/80 aspect-[16/9.5] sm:aspect-[16/9]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full relative flex items-center justify-center overflow-hidden"
            >
              <img
                src={current.img}
                alt={current.title}
                onError={(e) => {
                  const target = e.currentTarget
                  if (target.src.indexOf(current.fallback) === -1) {
                    target.src = current.fallback
                  }
                }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />

              {/* Floating Badge on Image */}
              <div className="absolute top-2.5 left-2.5 pointer-events-none">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-900/85 backdrop-blur-md text-cyan-300 border border-cyan-500/40 shadow-md flex items-center gap-1">
                  {current.badge}
                </span>
              </div>

              {/* Live Overlay Link */}
              <a
                href="https://quantaxsestimation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white leading-tight">{current.title}</p>
                    <p className="text-[10px] text-cyan-300 mt-0.5">{current.desc}</p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-[11px] flex items-center gap-1 shadow-lg flex-shrink-0">
                    Open Site <ExternalLink size={11} />
                  </span>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-3 gap-2 pt-0.5">
          {screenshots.map((s, idx) => (
            <button
              key={s.id}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(idx) }}
              className={`relative rounded-lg overflow-hidden border p-0.5 transition-all text-left ${
                activeIndex === idx
                  ? 'border-cyan-400 ring-2 ring-cyan-500/30 bg-cyan-500/10'
                  : 'border-white/10 hover:border-white/30 bg-white/5 opacity-60 hover:opacity-100'
              }`}
            >
              <div className="aspect-[16/9] rounded overflow-hidden bg-slate-900">
                <img
                  src={s.img}
                  alt={s.label}
                  onError={(e) => {
                    const target = e.currentTarget
                    if (target.src.indexOf(s.fallback) === -1) {
                      target.src = s.fallback
                    }
                  }}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <p className="text-[10px] font-semibold text-slate-300 truncate px-1 pt-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {s.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Footer info strip */}
      <div className="px-4 py-2 border-t flex items-center justify-between text-[10px] text-slate-400" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <span className="flex items-center gap-1">
          <Globe size={12} className="text-cyan-400" /> Serving Contractors in NJ, CA & TX
        </span>
        <span className="text-cyan-300 font-semibold">24–48h Turnaround</span>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <PageTransition
      title="Our Work | SwasTek Solutions"
      description="Case studies and project examples — digital products, business systems and software we've built for real businesses."
    >
      {/* ═══════════════════════════════════════════════════════
          DARK HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-[74px] pb-8 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
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
            className="flex items-center gap-2 mb-4 sm:mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue-600)' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue-500)' }} />
              </span>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
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
          <div className="overflow-hidden mb-5 sm:mb-8">
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
            className="text-sm sm:text-lg leading-relaxed max-w-xl"
            style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            A selection of digital products and business systems we've designed and built. Every project starts with understanding the business, not the technology.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROJECTS — full-bleed cards
      ═══════════════════════════════════════════════════════ */}
      <section className="py-0 border-t" style={{ background: 'var(--void)', borderColor: 'rgba(255,255,255,0.08)' }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="block group relative border-b"
              style={{ borderColor: p.isLight ? '#E2EBF5' : 'rgba(255,255,255,0.08)' }}
            >
              <div
                className="min-h-[60vh] flex flex-col md:flex-row items-stretch relative overflow-hidden"
                style={{ background: p.bg }}
              >
                {/* Content */}
                <div className={`flex-1 p-5 sm:p-10 lg:p-16 flex flex-col justify-between ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                      <span
                        className="text-[10px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-full"
                        style={{ color: p.accent, background: `${p.accent}18`, border: `1px solid ${p.accent}25`, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {p.industry}
                      </span>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all hover:scale-105"
                          style={{
                            background: 'rgba(11, 196, 227, 0.12)',
                            color: '#38D9F0',
                            border: '1px solid rgba(11, 196, 227, 0.35)',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          <Globe size={11} /> quantaxsestimation.com <ArrowUpRight size={11} />
                        </a>
                      )}
                      <span className="text-[10px] font-bold tracking-[0.16em] uppercase ml-auto text-cyan-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Flagship Case Study
                      </span>
                    </div>

                    <Link to={`/work/${p.id}`}>
                      <h2
                        className="font-bold mb-3 sm:mb-4 leading-tight transition-colors hover:text-cyan-400"
                        style={{ color: p.isLight ? '#07111F' : '#ffffff', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.5rem, 3.5vw, 3rem)', letterSpacing: '-0.035em' }}
                      >
                        {p.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-base leading-relaxed max-w-lg mb-4 sm:mb-6" style={{ color: p.isLight ? '#334155' : '#CBD5E1', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {p.challenge}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {p.services.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold"
                          style={{ background: p.isLight ? '#E2EBF5' : 'rgba(255,255,255,0.08)', color: p.isLight ? '#334155' : '#CBD5E1', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.04em' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t" style={{ borderColor: p.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.12)' }}>
                    <Link
                      to={`/work/${p.id}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all hover:translate-x-1"
                      style={{ color: p.isLight ? p.accent : '#0BC4E3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      View case study <ArrowUpRight size={14} />
                    </Link>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 shadow-md"
                        style={{
                          background: 'linear-gradient(135deg, #0BC4E3 0%, #2570E8 100%)',
                          color: '#ffffff',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        <Globe size={12} /> Visit Live Site <ExternalLink size={12} />
                      </a>
                    )}
                    <div className="flex-1 min-w-[20px] h-px hidden sm:block" style={{ background: p.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.08)' }} />
                    <div className="text-right ml-auto">
                      <div className="text-base sm:text-lg font-bold num-display" style={{ color: p.accent, letterSpacing: '-0.04em' }}>{p.metric.value}</div>
                      <div className="text-[10px] font-bold tracking-wider uppercase" style={{ color: p.isLight ? '#475569' : '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{p.metric.label}</div>
                    </div>
                  </div>
                </div>

                {/* Visual panel */}
                <div className="flex flex-1 items-center justify-center p-4 sm:p-8 lg:p-14 relative" style={{ background: p.accentSoft, minHeight: 320 }}>
                  <QuantaxsShowcaseMockup />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="relative py-10 sm:py-16 md:py-24 overflow-hidden border-t" style={{ background: 'var(--void)', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', filter: 'blur(80px)' }} />
        </div>

        <div className="container-tight relative z-10">
          <FadeUp>
            <div
              className="relative rounded-3xl p-6 sm:p-12 md:p-16 overflow-hidden text-center shadow-2xl border"
              style={{
                background: 'linear-gradient(145deg, rgba(7, 19, 34, 0.85) 0%, rgba(3, 8, 15, 0.95) 100%)',
                borderColor: 'rgba(11, 196, 227, 0.3)',
                boxShadow: '0 24px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(11, 196, 227, 0.12)'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: 500, height: 260, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(21,88,212,0.3) 0%, transparent 70%)', filter: 'blur(50px)' }} />
              </div>
              <div className="relative z-10">
                <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase mb-3 sm:mb-4 text-cyan-400 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Next project
                </span>
                <h2
                  className="font-bold text-white mb-3 sm:mb-5"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.04em', lineHeight: 1.12 }}
                >
                  Have a project in mind?
                </h2>
                <p className="text-xs sm:text-base md:text-lg mb-6 sm:mb-10 max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Tell us what you're trying to build and we'll help you figure out the approach.
                </p>
                <Link to="/contact" data-cta className="btn-primary text-xs sm:text-sm inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25">
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
