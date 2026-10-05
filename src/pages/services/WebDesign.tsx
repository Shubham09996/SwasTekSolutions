import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Palette,
  Layout,
  Sparkles,
  Smartphone,
  Eye,
  CheckCircle2,
  Layers,
  Monitor,
  Tablet,
  ArrowRight
} from 'lucide-react'
import PageTransition from '../../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const designCapabilities = [
  {
    icon: Palette,
    title: 'Visual Brand Identity & Systems',
    desc: 'Bespoke color palettes, typography hierarchies, and distinctive visual motifs that command instant brand authority and recall.',
  },
  {
    icon: Layout,
    title: 'High-Conversion Web Interfaces',
    desc: 'Engineered information architecture designed to direct visitor focus, articulate clear value propositions, and maximize qualified lead velocity.',
  },
  {
    icon: Smartphone,
    title: 'Fluid Multi-Device Responsiveness',
    desc: 'Pixel-perfect responsiveness across desktop ultrawides, laptops, tablets, and modern mobile viewports with zero layout breakage.',
  },
  {
    icon: Eye,
    title: 'Interactive Figma Prototypes',
    desc: 'High-fidelity, clickable prototypes with realistic micro-interactions and page transitions, enabling full team sign-off before writing code.',
  },
  {
    icon: Sparkles,
    title: 'Micro-Interactions & Motion',
    desc: 'Purposeful 60fps micro-animations, magnetic hovers, and scroll-linked state progressions that create an elite, unforgettable user feeling.',
  },
  {
    icon: CheckCircle2,
    title: 'Production Design Tokens & Handover',
    desc: 'Atomic design tokens, Tailwind theme variables, and strict developer guidelines ensuring zero translation discrepancy in production.',
  },
]

const viewportOptions = [
  { id: 'desktop', icon: Monitor, label: 'Desktop 1440px' },
  { id: 'tablet', icon: Tablet, label: 'Tablet 768px' },
  { id: 'mobile', icon: Smartphone, label: 'Mobile 390px' },
]

export default function WebDesign() {
  const [activeViewport, setActiveViewport] = useState('desktop')
  const [activeThemeColor, setActiveThemeColor] = useState('#0BC4E3')

  return (
    <PageTransition
      title="Bespoke Web Design Services | SwasTek Solutions"
      description="Modern, conversion-focused visual web design, interactive design systems, and bespoke digital experiences tailored to your business."
    >
      <div className="min-h-screen text-slate-100 overflow-hidden" style={{ background: 'var(--void)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>

        {/* ═══════════════════════════════════════════════════════
            HERO SECTION — ULTRA-PREMIUM DARK
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden grain-overlay">
          {/* Ambient Glows & Grid */}
          <div className="absolute inset-0 hero-grid opacity-100 pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="orb-1 absolute"
              style={{
                width: 750,
                height: 750,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(21,88,212,0.22) 0%, transparent 68%)',
                top: '-15%',
                left: '-10%',
                filter: 'blur(90px)',
              }}
            />
            <div
              className="orb-2 absolute"
              style={{
                width: 600,
                height: 600,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(11,196,227,0.16) 0%, transparent 70%)',
                bottom: '-5%',
                right: '5%',
                filter: 'blur(100px)',
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Headline & Value Prop */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <div
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                    style={{ background: 'rgba(21,88,212,0.14)', border: '1px solid rgba(21,88,212,0.25)' }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300">
                      Bespoke Web Design & Systems · SwasTek
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-white font-extrabold mb-6 leading-[1.08] tracking-tight"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: 'clamp(2.3rem, 4.2vw, 4rem)',
                  }}
                >
                  Designs that captivate,<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    communicate & convert.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  We craft tailored digital interfaces that articulate your company's prestige and market authority. Every typography scale, grid ratio, and motion curve is engineered with commercial intent.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Start Design Project <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    Explore Design Portfolio
                  </Link>
                </motion.div>

                {/* Trust Metrics */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10"
                >
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>100%</p>
                    <p className="text-xs text-slate-400">Custom UI Systems</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>60fps</p>
                    <p className="text-xs text-slate-400">Silky Micro-Motion</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>Figma</p>
                    <p className="text-xs text-slate-400">Full Design Asset Delivery</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Interactive Design Studio Canvas */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Glow backlight behind window */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 to-cyan-500/20 blur-xl opacity-70 pointer-events-none" />

                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background: 'linear-gradient(180deg, #07111F 0%, #03080F 100%)',
                    borderColor: 'rgba(21,136,255,0.25)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(21,88,212,0.15)',
                  }}
                >
                  {/* Chrome Toolbar */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'Sora, sans-serif' }}>
                        SwasTek Design Studio · Canvas Preview
                      </span>
                    </div>

                    {/* Viewport switch */}
                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10">
                      {viewportOptions.map((opt) => {
                        const VIcon = opt.icon
                        return (
                          <button
                            key={opt.id}
                            onClick={() => setActiveViewport(opt.id)}
                            title={opt.label}
                            className={`p-1.5 rounded-md transition-colors ${
                              activeViewport === opt.id ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                            }`}
                          >
                            <VIcon size={13} />
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Canvas Area */}
                  <div className="p-6 min-h-[350px] flex flex-col justify-between">
                    <div>
                      {/* Brand Tag & Accent switcher */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className="text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                          style={{
                            background: `${activeThemeColor}20`,
                            color: activeThemeColor,
                            border: `1px solid ${activeThemeColor}40`,
                          }}
                        >
                          Design System Token
                        </span>

                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400">Palette:</span>
                          {['#0BC4E3', '#1558D4', '#5B3CF5', '#10B981'].map((c) => (
                            <button
                              key={c}
                              onClick={() => setActiveThemeColor(c)}
                              className={`w-4 h-4 rounded-full transition-transform ${
                                activeThemeColor === c ? 'scale-125 ring-2 ring-white/50' : 'hover:scale-110'
                              }`}
                              style={{ background: c }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Mockup Content Box */}
                      <div
                        className={`rounded-xl p-5 border transition-all duration-300 ${
                          activeViewport === 'mobile' ? 'max-w-[280px] mx-auto' : activeViewport === 'tablet' ? 'max-w-[420px] mx-auto' : 'w-full'
                        }`}
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          borderColor: 'rgba(255,255,255,0.08)',
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                            style={{ background: activeThemeColor }}
                          >
                            <Sparkles size={14} />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                              Enterprise UI Blueprint
                            </p>
                            <p className="text-[10px] text-slate-400">High-Fidelity Interaction Layer</p>
                          </div>
                        </div>

                        <div className="space-y-2 mb-4">
                          <div className="h-4 rounded bg-white/10 w-3/4" />
                          <div className="h-3 rounded bg-white/5 w-full" />
                          <div className="h-3 rounded bg-white/5 w-5/6" />
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-center">
                            <Palette size={16} className="mx-auto mb-1 text-cyan-400" />
                            <span className="text-[10px] text-slate-300 font-medium block">Color Tokens</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-center">
                            <Layout size={16} className="mx-auto mb-1 text-blue-400" />
                            <span className="text-[10px] text-slate-300 font-medium block">Fluid Grid</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/5 text-center">
                            <Layers size={16} className="mx-auto mb-1 text-purple-400" />
                            <span className="text-[10px] text-slate-300 font-medium block">Components</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Window Bottom Status */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Active Layout: {activeViewport.toUpperCase()}
                      </span>
                      <span>Pixel-Perfect Design Handoff</span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CAPABILITIES SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  Design Capabilities
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Complete visual design engineering.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  From brand tokens and typography scales to interactive responsive prototypes, we build design systems ready for flawless development.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designCapabilities.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div
                      className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.7) 0%, rgba(10, 25, 48, 0.4) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-20 relative border-t border-white/10 bg-gradient-to-b from-[#030914] to-[#02050B]">
          <div className="container-tight text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to elevate your digital presence?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Let's architect an unforgettable, high-converting web design that sets you apart from competitors.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Start Your Design Project <ArrowRight size={15} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  View All Services
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
