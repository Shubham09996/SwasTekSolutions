import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Users,
  BarChart3,
  CheckSquare,
  Database,
  Workflow,
  ShieldCheck,
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

const tabs = ['Leads', 'Pipeline', 'Customers', 'Tasks', 'Analytics']

function LeadsTab() {
  const leads = [
    { name: 'TechBridge Ltd', contact: 'Mark Collins', value: '$24,000', stage: 'Qualified', hot: true },
    { name: 'Meridian Group', contact: 'Nina Sharma', value: '$8,500', stage: 'Contacted', hot: false },
    { name: 'Apex Consultancy', contact: 'James R.', value: '$15,000', stage: 'Proposal', hot: true },
    { name: 'Retail Direct', contact: 'Sam T.', value: '$6,200', stage: 'New', hot: false },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
          Active Deal Intake
        </h3>
        <div className="flex gap-2">
          <div className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            All leads (12 active)
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {leads.map((l) => (
          <div
            key={l.name}
            className="flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:bg-white/[0.08]"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-3">
              {l.hot ? (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              ) : (
                <span className="w-2 h-2 rounded-full bg-slate-600 flex-shrink-0" />
              )}
              <div>
                <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {l.name}
                </p>
                <p className="text-[10px] text-slate-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {l.contact}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-cyan-400" style={{ fontFamily: 'Sora, sans-serif' }}>
                {l.value}
              </span>
              <span
                className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-white/10"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#94A3B8' }}
              >
                {l.stage}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PipelineTab() {
  const stages = [
    { name: 'New Intake', count: 4, value: '$32K', color: '#64748B' },
    { name: 'Contacted', count: 3, value: '$18K', color: '#0EA5E9' },
    { name: 'Proposal', count: 2, value: '$45K', color: '#F59E0B' },
    { name: 'Negotiation', count: 1, value: '$28K', color: '#8B5CF6' },
    { name: 'Closed Won', count: 5, value: '$92K', color: '#10B981' },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
          Visual Deal Pipeline
        </h3>
        <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Total: $215,000
        </span>
      </div>
      <div className="grid grid-cols-5 gap-2 h-44">
        {stages.map((s) => (
          <div key={s.name} className="flex flex-col">
            <div
              className="flex-1 rounded-xl relative overflow-hidden flex flex-col justify-end p-2 transition-transform hover:scale-[1.02]"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div
                className="absolute bottom-0 left-0 right-0 rounded-b-xl transition-all duration-500"
                style={{
                  height: `${(s.count / 5) * 100}%`,
                  background: `linear-gradient(180deg, ${s.color}35 0%, ${s.color}15 100%)`,
                  borderTop: `2px solid ${s.color}`,
                }}
              />
              <div className="relative z-10 text-center">
                <span className="text-base font-extrabold text-white block" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {s.count}
                </span>
                <span className="text-[10px] font-bold block" style={{ color: s.color }}>
                  {s.value}
                </span>
              </div>
            </div>
            <p className="text-[10px] text-center mt-1.5 text-slate-400 truncate font-medium">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomersTab() {
  const customers = [
    { name: 'Alpha Corp Ltd', since: 'Jan 2024', value: '$82K LTV', status: 'Active Retainer' },
    { name: 'Meridian Global', since: 'Mar 2024', value: '$44K LTV', status: 'Active Retainer' },
    { name: 'RetailBase Systems', since: 'Jun 2024', value: '$18K LTV', status: 'Onboarding' },
  ]
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
        Client 360 & Lifetime Value
      </h3>
      {customers.map((c) => (
        <div
          key={c.name}
          className="flex items-center justify-between p-3 mb-2 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white bg-gradient-to-br from-blue-600 to-cyan-500">
              {c.name[0]}
            </div>
            <div>
              <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {c.name}
              </p>
              <p className="text-[10px] text-slate-400">Partner since {c.since}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-cyan-400" style={{ fontFamily: 'Sora, sans-serif' }}>
              {c.value}
            </p>
            <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              {c.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function TasksTab() {
  const tasks = [
    { label: 'Auto-follow up email: TechBridge proposal', due: 'Today · 4:00 PM', done: false, trigger: 'Webhook' },
    { label: 'Manager review: Apex deal structure', due: 'Tomorrow', done: false, trigger: 'Escalation' },
    { label: 'Contract renewal notification: Meridian', due: 'Completed', done: true, trigger: 'Scheduled' },
    { label: 'Onboarding sequence: RetailBase account setup', due: 'In Progress', done: false, trigger: 'CRM Flow' },
  ]
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
        Automated Task & Activity Stream
      </h3>
      {tasks.map((t) => (
        <div
          key={t.label}
          className="flex items-center gap-3 p-2.5 mb-2 rounded-xl transition-colors hover:bg-white/[0.04]"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div
            className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
              t.done ? 'bg-cyan-500 text-slate-950 font-bold' : 'border border-slate-600'
            }`}
          >
            {t.done && <CheckSquare size={12} />}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className={`text-xs truncate ${
                t.done ? 'text-slate-500 line-through' : 'text-slate-200'
              }`}
            >
              {t.label}
            </p>
            <span className="text-[10px] text-slate-400">{t.due}</span>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 flex-shrink-0">
            {t.trigger}
          </span>
        </div>
      ))}
    </div>
  )
}

function AnalyticsTab() {
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
        Live Pipeline Analytics
      </h3>
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: 'Win Conversion Rate', value: '34.8%', sub: '+8.2% vs last month', pos: true },
          { label: 'Avg Deal Size', value: '$18,400', sub: 'High value focus', pos: true },
          { label: 'Active Pipeline', value: '$215,000', sub: '12 active deals', pos: true },
          { label: 'Sales Velocity', value: '18 Days', sub: '-6 days cycle', pos: true },
        ].map((m) => (
          <div
            key={m.label}
            className="p-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <p className="text-[10px] text-slate-400 mb-0.5">{m.label}</p>
            <p className="text-base font-extrabold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
              {m.value}
            </p>
            <span className="text-[9px] text-emerald-400 font-medium">{m.sub}</span>
          </div>
        ))}
      </div>
      <div
        className="p-3 rounded-xl"
        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] text-slate-400 font-medium">Monthly Revenue Run-Rate</p>
          <span className="text-[10px] text-cyan-400 font-bold">$92,400 this month</span>
        </div>
        <div className="flex items-end gap-1.5 h-12 pt-1">
          {[35, 45, 40, 60, 55, 75, 70, 85, 80, 95, 90, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm transition-all duration-300 hover:brightness-125"
              style={{
                height: `${h}%`,
                background:
                  i >= 10
                    ? 'linear-gradient(180deg, #0BC4E3 0%, #1558D4 100%)'
                    : 'rgba(21, 136, 255, 0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const tabComponents: Record<string, React.ReactNode> = {
  Leads: <LeadsTab />,
  Pipeline: <PipelineTab />,
  Customers: <CustomersTab />,
  Tasks: <TasksTab />,
  Analytics: <AnalyticsTab />,
}

const coreFeatures = [
  {
    icon: Database,
    title: 'Custom Lead Intake & Attribution',
    desc: 'Capture leads directly from your marketing landing pages, ad webhooks, WhatsApp, and email with zero data loss or double entry.',
  },
  {
    icon: Workflow,
    title: 'Visual Drag-and-Drop Pipeline',
    desc: 'Configure stages around your actual qualification milestones rather than adapting your sales process to rigid third-party software.',
  },
  {
    icon: Users,
    title: 'Client 360 & Timeline History',
    desc: 'Unify communication notes, proposal PDFs, signed contracts, invoice status, and activity logs under one centralized client file.',
  },
  {
    icon: Zap,
    title: 'Automated Follow-ups & Reminders',
    desc: 'Automate WhatsApp reminders, personalized email drips, and manager notifications when deals remain idle past target SLA thresholds.',
  },
  {
    icon: ShieldCheck,
    title: 'Granular Role-Based Access Control',
    desc: 'Restrict confidential customer data, deal margins, and export capabilities by sales rep, account manager, and executive tier.',
  },
  {
    icon: BarChart3,
    title: 'Executive Revenue Dashboards',
    desc: 'Track sales rep conversion rates, close velocity, forecasted ARR, and deal leakage with custom real-time executive reports.',
  },
]

const comparisonPoints = [
  { feature: 'Software Licensing Fees', offShelf: 'Expensive $75–$150/user/month forever', swastek: 'Zero per-seat licensing. 100% Client Owned.' },
  { feature: 'Source Code Ownership', offShelf: '0% — Locked in third-party proprietary cloud', swastek: '100% full source code, database & IP handover' },
  { feature: 'Custom Workflow Fit', offShelf: 'Generic templates requiring costly workarounds', swastek: 'Architected precisely around how your team sells' },
  { feature: 'Data Privacy & Hosting', offShelf: 'Shared multi-tenant database outside your control', swastek: 'Private database on your dedicated cloud (AWS/GCP)' },
  { feature: 'System Speed & Bloat', offShelf: 'Slow loading, overloaded with unnecessary tabs', swastek: 'Ultra-fast, stripped of bloatware, built for velocity' },
]

export default function CRMDevelopment() {
  const [activeTab, setActiveTab] = useState('Leads')

  return (
    <PageTransition
      title="Custom CRM Development Services | SwasTek Solutions"
      description="Build a high-performance custom CRM engineered around your unique sales process. Zero per-user fees, 100% client code ownership."
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
                      Custom CRM & Sales Pipelines · SwasTek
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
                  Your workflow.<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Your custom CRM.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Build a CRM engineered precisely around your team's sales stages instead of conforming your sales operations to rigid off-the-shelf software. Permanent 100% IP ownership with zero monthly per-seat licensing fees.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Build My Custom CRM <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Enterprise Case Studies
                  </Link>
                </motion.div>

                {/* Micro trust stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10"
                >
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>0</p>
                    <p className="text-xs text-slate-400">Monthly User Fees</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>100%</p>
                    <p className="text-xs text-slate-400">Code & Data Ownership</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>3.2x</p>
                    <p className="text-xs text-slate-400">Sales Velocity Gain</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Live Interactive CRM Window Mockup */}
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
                  {/* Window Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'Sora, sans-serif' }}>
                        SwasTek CRM Engine · v3.4
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] text-slate-400 font-mono">Live PostgreSQL</span>
                    </div>
                  </div>

                  {/* Navigation Tabs */}
                  <div className="flex border-b border-white/10 bg-[#020710] px-2 overflow-x-auto scrollbar-none">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-3 text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                          activeTab === tab ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-200'
                        }`}
                        style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        {tab}
                        {activeTab === tab && (
                          <motion.div
                            layoutId="crmActiveTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-sm shadow-cyan-400"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Tab Body View */}
                  <div className="p-5 min-h-[340px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tabComponents[activeTab]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Window Bottom Status Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[10px] text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">●</span> 4 Webhooks Active
                    </div>
                    <span>Zero monthly per-seat licensing</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CAPABILITIES SECTION — 6 ARCHITECTURAL PILLARS
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  Enterprise Capabilities
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Engineered around your sales velocity.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  Every field, pipeline stage, and automated trigger is designed specifically around how your team generates revenue.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreFeatures.map((f, i) => {
                const Icon = f.icon
                return (
                  <FadeUp key={f.title} delay={i * 0.07}>
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
                        {f.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            COMPARISON: BESPOKE VS OFF-THE-SHELF
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 relative border-t border-white/10" style={{ background: 'var(--void)' }}>
          <div className="container-wide">
            <FadeUp>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  ROI & Architecture Comparison
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Bespoke SwasTek CRM vs Off-the-Shelf
                </h2>
                <p className="text-sm sm:text-base text-slate-300">
                  Why fast-scaling businesses replace Salesforce and HubSpot with a dedicated proprietary sales platform.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div
                className="rounded-2xl overflow-hidden border border-white/10 max-w-4xl mx-auto"
                style={{ background: 'rgba(7, 17, 31, 0.8)' }}
              >
                <div className="grid grid-cols-3 p-4 sm:p-5 bg-white/5 border-b border-white/10 text-xs sm:text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  <div>Metric / Architecture</div>
                  <div className="text-slate-400">Generic Off-the-Shelf</div>
                  <div className="text-cyan-400">Custom SwasTek CRM</div>
                </div>
                <div className="divide-y divide-white/5">
                  {comparisonPoints.map((row) => (
                    <div key={row.feature} className="grid grid-cols-3 p-4 sm:p-5 text-xs sm:text-sm items-center gap-2">
                      <div className="font-semibold text-white">{row.feature}</div>
                      <div className="text-slate-400 text-xs sm:text-sm leading-snug">{row.offShelf}</div>
                      <div className="text-cyan-300 font-semibold text-xs sm:text-sm leading-snug flex items-center gap-1.5">
                        <CheckSquare size={14} className="text-cyan-400 flex-shrink-0 hidden sm:inline" />
                        {row.swastek}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-20 relative border-t border-white/10 bg-gradient-to-b from-[#030914] to-[#02050B]">
          <div className="container-tight text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready for a CRM built around how you sell?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Schedule an exploratory architectural call. We will review your sales pipeline and design a bespoke CRM blueprint with fixed-milestone pricing.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Discuss My CRM Project <ArrowRight size={15} />
                </Link>
                <Link to="/services" className="btn-secondary">
                  Explore All Services
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
