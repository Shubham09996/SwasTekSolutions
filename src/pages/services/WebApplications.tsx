import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Layout,
  Database,
  ShieldCheck,
  BarChart3,
  Users,
  Zap,
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

const applicationTypes = [
  {
    title: 'Executive Dashboards & BI',
    desc: 'Real-time visibility over critical revenue metrics, operational KPIs, active pipelines, and team performance analytics.',
    icon: BarChart3,
    color: '#0BC4E3',
  },
  {
    title: 'Authenticated Client Portals',
    desc: 'Bespoke client areas where enterprise customers securely view project milestones, submit tickets, review deliverables, and approve contracts.',
    icon: Users,
    color: '#1558D4',
  },
  {
    title: 'Internal Operations Systems',
    desc: 'Tailored administrative backends that eliminate disconnected spreadsheets, manual reconciliation, and duplicate staff effort.',
    icon: Layout,
    color: '#5B3CF5',
  },
  {
    title: 'Automated Booking & Dispatch',
    desc: 'End-to-end scheduling platforms with automated calendar synchronization, technician dispatching, SMS alerts, and payment deposits.',
    icon: Zap,
    color: '#0BC4E3',
  },
  {
    title: 'Role-Based Resource Management',
    desc: 'Enterprise workflow management tools engineered for multi-tier departments with granular permissions and audit logging.',
    icon: ShieldCheck,
    color: '#1558D4',
  },
  {
    title: 'Real-Time Data Pipelines',
    desc: 'Event-driven web applications connected via WebSockets and webhooks for live multi-user collaboration and instant synchronization.',
    icon: Database,
    color: '#5B3CF5',
  },
]

export default function WebApplications() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'revenue' | 'operations'>('revenue')

  return (
    <PageTransition
      title="Web Applications & Dashboards | SwasTek Solutions"
      description="Custom dashboards, enterprise web applications, and customer portals built for high operational velocity and effortless user adoption."
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
                      Dashboards & Enterprise Portals · SwasTek
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
                  Complex enterprise tools.<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Effortless interfaces.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Authenticated client portals, real-time operations dashboards, and custom browser-based tools built to handle mission-critical complexity without user confusion.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Build My Web Application <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Live Applications
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>Live</p>
                    <p className="text-xs text-slate-400">WebSocket Real-Time Data</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>RBAC</p>
                    <p className="text-xs text-slate-400">Multi-Tier Role Security</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>100%</p>
                    <p className="text-xs text-slate-400">Client Code Ownership</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Live Executive Operations Dashboard Preview */}
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
                  {/* Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'Sora, sans-serif' }}>
                        Operations Control Hub · Live BI
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs">
                      {(['revenue', 'operations'] as const).map((mode) => (
                        <button
                          key={mode}
                          onClick={() => setActiveFilter(mode)}
                          className={`px-2.5 py-1 rounded-md capitalize font-semibold transition-colors ${
                            activeFilter === mode ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dashboard Body */}
                  <div className="p-6 space-y-4">
                    {/* Top KPI Cards */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="text-[10px] text-slate-400 mb-0.5">Active ARR</p>
                        <p className="text-base font-extrabold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>$482.5K</p>
                        <span className="text-[9px] text-emerald-400 font-bold">+18.4% YoY</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="text-[10px] text-slate-400 mb-0.5">Active Users</p>
                        <p className="text-base font-extrabold text-cyan-400" style={{ fontFamily: 'Sora, sans-serif' }}>1,840</p>
                        <span className="text-[9px] text-slate-400">99.8% Online</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <p className="text-[10px] text-slate-400 mb-0.5">Tasks Done</p>
                        <p className="text-base font-extrabold text-indigo-400" style={{ fontFamily: 'Sora, sans-serif' }}>94.2%</p>
                        <span className="text-[9px] text-indigo-300">Within SLA</span>
                      </div>
                    </div>

                    {/* Live Chart Container */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-semibold">Weekly Operational Velocity</span>
                        <span className="text-cyan-400 font-mono font-bold">142 Requests/Sec</span>
                      </div>

                      {/* Bar chart representation */}
                      <div className="flex items-end gap-2 h-16 pt-2">
                        {[40, 65, 55, 80, 70, 95, 85, 100, 90, 110, 105, 120].map((v, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm transition-all duration-300 hover:brightness-125"
                            style={{
                              height: `${(v / 120) * 100}%`,
                              background:
                                i >= 9
                                  ? 'linear-gradient(180deg, #0BC4E3 0%, #1558D4 100%)'
                                  : 'rgba(21, 136, 255, 0.25)',
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Operational Stream */}
                    <div className="space-y-1.5 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-slate-300 font-medium">PostgreSQL Cluster Auto-Scaled</span>
                        </div>
                        <span className="text-[10px] text-slate-400">Just now</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span className="text-slate-300 font-medium">Enterprise Portal RBAC Audit Passed</span>
                        </div>
                        <span className="text-[10px] text-slate-400">4m ago</span>
                      </div>
                    </div>
                  </div>

                  {/* Window Bottom Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Zero Per-User Licensing Fees
                    </span>
                    <span>100% Dedicated Database</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            APPLICATIONS SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  Application Architecture
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  What we engineer for enterprise teams.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  Browser-based systems that eliminate manual data chaos, secure confidential customer interactions, and give leadership real-time clarity.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applicationTypes.map((item, i) => {
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
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border group-hover:scale-110 transition-transform"
                        style={{
                          background: `${item.color}15`,
                          borderColor: `${item.color}30`,
                          color: item.color,
                        }}
                      >
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
                Have an enterprise web application to build?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Connect with our senior software architects. We'll map out database entities, user authorization levels, and an executable development roadmap.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Engineer My Web Application <ArrowRight size={15} />
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
