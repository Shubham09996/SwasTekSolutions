import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Zap,
  Gauge,
  ShieldCheck,
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

const webSolutions = [
  {
    title: 'High-Converting Business Platforms',
    desc: 'Prestige corporate websites engineered to convert enterprise prospects, articulate market leadership, and rank high on organic search.',
    tag: 'Corporate & B2B',
  },
  {
    title: 'Fullstack Web Applications',
    desc: 'Dynamic, database-backed web applications with authentication, customer portals, custom dashboards, and real-time state synchronization.',
    tag: 'Web Apps & Portals',
  },
  {
    title: 'Edge-Rendered Next.js Architectures',
    desc: 'Sub-second page transitions, automated server-side rendering (SSR), and worldwide CDN caching for uncompromising speed.',
    tag: 'Speed & Edge',
  },
  {
    title: 'Custom API Integrations & Webhooks',
    desc: 'Flawless communication between your frontend web platform and internal ERPs, CRMs, Stripe/Razorpay payments, and transactional email.',
    tag: 'Integrations',
  },
  {
    title: 'Technical SEO & Core Web Vitals',
    desc: 'Semantic HTML5 structure, automated JSON-LD schema markup, dynamic sitemaps, and green 95+ Google Lighthouse scores out of the box.',
    tag: 'SEO & Performance',
  },
  {
    title: 'Client Portals & Member Gateways',
    desc: 'Secure, authenticated client zones where customers can manage files, review invoices, track project progress, and submit requests.',
    tag: 'Portals & Auth',
  },
]

export default function WebDevelopment() {
  return (
    <PageTransition
      title="Web Development Services | SwasTek Solutions"
      description="High-performance, secure web applications, corporate web portals, and fullstack platforms built for speed and conversion."
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
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300">
                      Fullstack Engineering · SwasTek
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
                  Websites that do more than<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    look beautiful.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Ultra-fast, responsive, and secure fullstack web platforms engineered around your brand identity, business workflows, and aggressive revenue targets.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Build My Web Platform <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Live Production Work
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>99/100</p>
                    <p className="text-xs text-slate-400">Google Lighthouse Score</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>&lt; 0.6s</p>
                    <p className="text-xs text-slate-400">First Contentful Paint</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>100%</p>
                    <p className="text-xs text-slate-400">Responsive Across Devices</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Interactive Browser & Edge Metrics Console */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 to-cyan-500/20 blur-xl opacity-70 pointer-events-none" />

                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background: 'linear-gradient(180deg, #07111F 0%, #03080F 100%)',
                    borderColor: 'rgba(21,136,255,0.25)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(21,88,212,0.15)',
                  }}
                >
                  {/* Browser Chrome Bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    <div className="flex-1 mx-3">
                      <div className="bg-white/5 border border-white/10 rounded-md px-3 py-1 text-xs flex items-center justify-between text-slate-300 font-mono">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          https://swastek.solutions/platform
                        </span>
                        <span className="text-[10px] text-cyan-400">SSL 256-bit</span>
                      </div>
                    </div>
                  </div>

                  {/* Browser Body / Performance Radar */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <p className="text-xs text-slate-400">Architecture Performance</p>
                        <p className="text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                          Edge-Optimized Fullstack Web App
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                        <Gauge size={13} /> 99 Grade
                      </div>
                    </div>

                    {/* Metric Bars */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="text-[10px] text-slate-400 mb-0.5">Performance</p>
                        <p className="text-base font-extrabold text-emerald-400">99</p>
                        <span className="text-[9px] text-slate-400">Core Web Vitals</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="text-[10px] text-slate-400 mb-0.5">Accessibility</p>
                        <p className="text-base font-extrabold text-cyan-400">100</p>
                        <span className="text-[9px] text-slate-400">WCAG Compliant</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="text-[10px] text-slate-400 mb-0.5">Best Practices</p>
                        <p className="text-base font-extrabold text-blue-400">100</p>
                        <span className="text-[9px] text-slate-400">Security Ready</span>
                      </div>
                    </div>

                    {/* Edge deployment node preview */}
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">Server Response Time (TTFB)</span>
                        <span className="text-emerald-400 font-mono font-bold">42ms</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full w-[94%]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                        <ShieldCheck size={14} className="text-cyan-400" />
                        <span className="text-slate-300 text-[11px]">CSRF & XSS Hardened</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                        <Zap size={14} className="text-emerald-400" />
                        <span className="text-slate-300 text-[11px]">Global CDN Caching</span>
                      </div>
                    </div>
                  </div>

                  {/* Window Bottom */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      React / Next.js / Tailwind Stack
                    </span>
                    <span>100% Responsive</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SOLUTIONS SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  Web Architecture
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Every layer of your web platform.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  From high-converting corporate portals to dynamic web apps with complex backends, we build production software that scales.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webSolutions.map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.07}>
                  <div
                    className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.7) 0%, rgba(10, 25, 48, 0.4) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 inline-block mb-4">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2.5 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              ))}
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
                Ready to build an exceptional web platform?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Tell us about your business goals, target audience, and feature roadmap. We'll architect and build a web platform that outpaces your market.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Build My Web Platform <ArrowRight size={15} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore All Capabilities
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
