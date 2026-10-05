// About page — SwasTek Solutions (MINIMAL & NEXT-LEVEL DESIGN)
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Code2,
  Layers,
  Globe,
  Workflow,
  Lock,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const stats = [
  { value: '100%', label: 'Bespoke Builds', sublabel: 'Tailored to your workflow' },
  { value: '3x', label: 'Faster Time-to-Market', sublabel: 'Rapid milestone delivery' },
  { value: '0%', label: 'Vendor Lock-In', sublabel: '100% Client-owned code & IP' },
  { value: 'Delhi, IN', label: 'Global Delivery', sublabel: 'US, UK, EU & APAC overlap' },
]

const pillars = [
  {
    num: '01',
    icon: TrendingUp,
    title: 'Business ROI First',
    desc: 'Every system, interface, and automated pipeline is engineered to eliminate costly manual overhead, accelerate sales cycles, and generate measurable business returns.',
  },
  {
    num: '02',
    icon: Lock,
    title: '100% Client Ownership',
    desc: 'Your business permanently owns all custom source code, Figma design assets, databases, and deployment keys. No proprietary lock-in, no recurring licensing fees.',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Direct Senior Engineering',
    desc: 'Work directly with principal architects and fullstack engineers. Zero account manager delays, weekly live staging builds, and guaranteed < 24h SLA communication.',
  },
]

const coreCapabilities = [
  {
    icon: Code2,
    title: 'Custom Software & SaaS Platforms',
    desc: 'Purpose-built web platforms engineered around your exact operations — eliminating off-the-shelf software compromises and scaling cleanly as your business grows.',
    tags: ['Fullstack Web Apps', 'PostgreSQL & APIs', 'Multi-Tenant SaaS'],
  },
  {
    icon: Workflow,
    title: 'CRM & Operational Workflow Automation',
    desc: 'Replace chaotic spreadsheets with automated lead intake, WhatsApp & email notifications, multi-tier deal pipelines, and real-time executive reporting dashboards.',
    tags: ['Automated Lead Intake', 'Custom Deal Pipelines', 'WhatsApp & Email Webhooks'],
  },
  {
    icon: Layers,
    title: 'High-Conversion UI/UX Systems',
    desc: 'Bespoke digital interfaces and design systems engineered for instant market authority, higher customer conversion velocity, and effortless user adoption.',
    tags: ['Interactive Figma Systems', 'CRO User Journeys', 'Mobile-First Responsive'],
  },
  {
    icon: Globe,
    title: 'Cloud Infrastructure & Scaling',
    desc: 'High-performance cloud architectures, database optimization, and legacy modernization engineered for 99.99% uptime and zero-downtime deployments.',
    tags: ['AWS / Cloudflare Edge', 'Zero-Downtime Migration', 'API Performance Tuning'],
  },
]

const deliverySteps = [
  {
    num: '01',
    title: 'Discovery & Audit',
    desc: 'We analyze your operational bottlenecks, customer touchpoints, and revenue targets to define a clear technical roadmap.',
  },
  {
    num: '02',
    title: 'Architecture & UX',
    desc: 'We engineer clickable Figma prototypes and database schemas before writing code, validating the solution with your team.',
  },
  {
    num: '03',
    title: 'Sprint Development',
    desc: 'Bi-weekly development sprints with live staging builds, giving you complete visibility into engineering progress.',
  },
  {
    num: '04',
    title: 'Launch & Evolution',
    desc: 'Zero-downtime production deployment, complete source code handover, and ongoing dedicated architectural support.',
  },
]

export default function About() {
  return (
    <PageTransition
      title="About Us | SwasTek Solutions — Business Software & Digital Engineering"
      description="We design and build bespoke software, CRM platforms, and digital systems around the way your business works. Headquartered in Delhi, India."
    >
      <div className="min-h-screen text-slate-100 overflow-hidden" style={{ background: 'var(--void)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        
        {/* ═══════════════════════════════════════════════════════
            HERO SECTION — MINIMAL, CLEAN & EXECUTIVE
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-[74px] pb-8 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 overflow-hidden grain-overlay">
          {/* Ambient Glows & Grid */}
          <div className="absolute inset-0 hero-grid opacity-100 pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="orb-1 absolute"
              style={{
                width: 800,
                height: 800,
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
                background: 'radial-gradient(circle, rgba(11,196,227,0.14) 0%, transparent 70%)',
                bottom: '-5%',
                right: '5%',
                filter: 'blur(100px)',
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

          <div className="container-wide relative z-10">
            <div className="max-w-3xl">
              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-3 sm:mb-4"
              >
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue-600)' }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue-500)' }} />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-400">
                    About SwasTek Solutions · Delhi, India
                  </span>
                </div>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white font-extrabold mb-6 leading-[1.08] tracking-tight"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                Digital systems built around{' '}
                <span
                  className="shimmer-text"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                >
                  your
                </span>{' '}
                business.
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
              >
                Based in <strong>Delhi, India</strong>, SwasTek Solutions designs and builds custom web software, automated CRM platforms, and digital products shaped specifically around how your business operates and grows.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link to="/contact" data-cta className="btn-primary text-sm shadow-xl shadow-blue-600/30">
                  <Zap size={15} />
                  <span>Start a Project</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-white/10 text-slate-200 border border-white/15"
                >
                  <span>View Our Work</span>
                  <ArrowUpRight size={15} className="text-cyan-400" />
                </Link>
              </motion.div>
            </div>

            {/* 4 Clean Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 sm:mt-16 pt-6 sm:pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {s.value}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-200 mt-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.label}</p>
                  <p className="text-xs text-slate-400 mt-0.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2 — OUR 3 CORE BUSINESS PILLARS (CLEAN CRISP LIGHT)
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t" style={{ background: '#F8FAFC', borderColor: '#E2EBF5' }}>
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3 block" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Our Engineering Philosophy
                </span>
                <h2
                  className="font-bold leading-tight"
                  style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                  Built for measurable business outcomes.
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {pillars.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.num} delay={i * 0.1}>
                    <div
                      className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 bg-white hover:border-blue-400 hover:shadow-xl h-full flex flex-col justify-between"
                      style={{
                        borderColor: '#E2EBF5',
                        boxShadow: '0 4px 20px rgba(7, 17, 31, 0.04)',
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5 sm:mb-6">
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                            <Icon size={20} />
                          </div>
                          <span className="text-xs font-bold text-blue-600" style={{ fontFamily: 'Sora, sans-serif' }}>{item.num}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — WHAT WE BUILD (4 CORE SPECIALIZATIONS — SOLID WHITE)
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t" style={{ background: '#FFFFFF', borderColor: '#E2EBF5' }}>
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3 block">
                  Core Specializations
                </span>
                <h2
                  className="font-bold leading-tight"
                  style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                  Software tailored around how your company works.
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              {coreCapabilities.map((cap, i) => {
                const Icon = cap.icon
                return (
                  <FadeUp key={cap.title} delay={i * 0.1}>
                    <div
                      className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden group transition-all duration-300 hover:border-blue-400 hover:shadow-xl bg-white h-full flex flex-col justify-between"
                      style={{
                        borderColor: '#E2EBF5',
                        boxShadow: '0 4px 20px rgba(7, 17, 31, 0.04)',
                      }}
                    >
                      <div>
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {cap.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
                          {cap.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                        {cap.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 4 — 4-STEP PREDICTABLE DELIVERY
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t border-white/10" style={{ background: '#050D1C' }}>
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-400 mb-3 block">
                  Execution Process
                </span>
                <h2
                  className="font-bold text-white leading-tight"
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                  From requirements to production scale.
                </h2>
              </div>
            </FadeUp>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {deliverySteps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.08}>
                  <div className="p-6 sm:p-7 rounded-3xl border bg-white/5 border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xl sm:text-2xl font-bold text-cyan-400 mb-3 sm:mb-4 block" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {step.num}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Global Reach Bar */}
            <FadeUp delay={0.2}>
              <div className="mt-8 sm:mt-10 p-5 sm:p-8 rounded-3xl border border-white/10 bg-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                    <Globe size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white mb-0.5" style={{ fontFamily: 'Sora, sans-serif' }}>
                      Headquartered in Delhi, India · Global Delivery
                    </h4>
                    <p className="text-xs text-slate-400">
                      Seamless live communication across North American, European, UK, and APAC business hours.
                    </p>
                  </div>
                </div>
                <Link to="/contact" className="btn-primary text-xs px-5 sm:px-6 py-2.5 sm:py-3 shadow-lg whitespace-nowrap self-stretch sm:self-auto text-center justify-center">
                  <span>Contact Our Team</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 5 — MINIMAL BOTTOM CTA BANNER
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t border-white/10" style={{ background: 'var(--void)' }}>
          <div className="container-tight">
            <FadeUp>
              <div
                className="relative rounded-3xl p-6 sm:p-12 md:p-16 overflow-hidden text-center shadow-2xl border"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 42, 85, 0.7) 0%, rgba(5, 13, 26, 0.95) 100%)',
                  borderColor: 'rgba(21, 88, 212, 0.3)',
                }}
              >
                <div className="relative z-10">
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-400 mb-2 sm:mb-3 block">
                    Ready to build?
                  </span>
                  <h2
                    className="font-bold text-white mb-3 sm:mb-4 leading-tight"
                    style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
                  >
                    Let's engineer software around your business goals.
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                    Tell us what operational challenges you want to solve. We will review your requirements and outline a technical roadmap within 24 hours.
                  </p>

                  <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                    <Link to="/contact" data-cta className="btn-primary text-xs sm:text-sm shadow-xl shadow-blue-600/30">
                      <Zap size={14} />
                      <span>Start a Project</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      to="/work"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all bg-white/5 hover:bg-white/10 text-white border border-white/15"
                    >
                      <span>Explore Case Studies</span>
                      <ArrowUpRight size={14} className="text-cyan-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
