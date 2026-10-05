import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Code2,
  Database,
  Layers,
  ShieldCheck,
  Server,
  Zap,
  Cpu,
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

const enterpriseCapabilities = [
  {
    icon: Code2,
    title: 'Custom Business Logic & Workflows',
    desc: 'Proprietary calculation engines, multi-tiered approvals, and tailored automation that perfectly match how your operations team functions.',
  },
  {
    icon: Layers,
    title: 'Internal Operations & ERP Systems',
    desc: 'Centralized platforms unifying inventory, client orders, field operations, employee dispatch, and financial reconciliation in real time.',
  },
  {
    icon: ShieldCheck,
    title: 'Granular Role-Based User Access (RBAC)',
    desc: 'Strict permission hierarchies, tenant isolation, and detailed activity audit logs ensuring data governance and full regulatory compliance.',
  },
  {
    icon: Database,
    title: 'PostgreSQL & Real-Time Data Pipelines',
    desc: 'Scalable relational database architecture, automated backups, encrypted storage, and microsecond query indexing for mission-critical reliability.',
  },
  {
    icon: Zap,
    title: 'Bi-Directional Third-Party API Integration',
    desc: 'Seamless real-time synchronization with banking APIs, payment gateways (Stripe/Razorpay), accounting tools, ERPs, and custom webhooks.',
  },
  {
    icon: Server,
    title: 'High-Availability Dedicated Cloud Hosting',
    desc: 'Containerized Docker/Kubernetes deployment on dedicated private AWS or GCP infrastructure with 99.99% uptime and zero vendor lock-in.',
  },
]

export default function CustomSoftware() {
  const [activeConsoleTab, setActiveConsoleTab] = useState<'architecture' | 'schema' | 'api'>('architecture')

  return (
    <PageTransition
      title="Custom Software Development | SwasTek Solutions"
      description="Bespoke enterprise software, internal operations platforms, and custom business tools engineered around how you actually work."
    >
      <div className="min-h-screen text-slate-100 overflow-hidden" style={{ background: 'var(--void)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>

        {/* ═══════════════════════════════════════════════════════
            HERO SECTION — ULTRA-PREMIUM DARK
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-[74px] pb-8 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 overflow-hidden grain-overlay">
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
                  className="flex items-center gap-2 mb-4"
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
                      Bespoke Enterprise Engineering · SwasTek
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
                  Software that fits the way<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    your business works.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Off-the-shelf software forces your operations to conform to generic templates. We architect bespoke internal systems, workflow platforms, and operational dashboards engineered around your actual team.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Build Custom Software <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Architecture Case Studies
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
                    <p className="text-xs text-slate-400">Proprietary IP Handover</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>0</p>
                    <p className="text-xs text-slate-400">Per-Seat License Fees</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>99.99%</p>
                    <p className="text-xs text-slate-400">Cloud SLA Uptime</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Live Enterprise Software Architecture Console */}
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
                        Enterprise System Kernel · v4.1
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs">
                      {(['architecture', 'schema', 'api'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveConsoleTab(tab)}
                          className={`px-2.5 py-1 rounded-md capitalize font-semibold transition-colors ${
                            activeConsoleTab === tab ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Console Body */}
                  <div className="p-6 min-h-[350px]">
                    {activeConsoleTab === 'architecture' && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                              <Cpu size={16} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white font-heading">Core Business Logic Layer</p>
                              <p className="text-[10px] text-slate-400">Node / TypeScript Enterprise Microservice</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            Active · 4ms
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                              <Database size={16} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white font-heading">PostgreSQL Enterprise Cluster</p>
                              <p className="text-[10px] text-slate-400">Encrypted at rest · Automated hourly snapshots</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                            Replica Synced
                          </span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                              <ShieldCheck size={16} />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-white font-heading">Zero-Trust Role Access (RBAC)</p>
                              <p className="text-[10px] text-slate-400">JWT Authentication · MFA · Tenant Isolation</p>
                            </div>
                          </div>
                          <span className="text-[10px] text-indigo-300 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                            Enforced
                          </span>
                        </div>
                      </div>
                    )}

                    {activeConsoleTab === 'schema' && (
                      <div className="bg-[#020710] p-4 rounded-xl border border-white/10 font-mono text-[11px] text-slate-300 leading-relaxed overflow-x-auto">
                        <p className="text-cyan-400">// PostgreSQL Domain Model</p>
                        <p className="text-slate-400">CREATE TABLE operational_workflows &#123;</p>
                        <p className="pl-4 text-emerald-300">id UUID PRIMARY KEY DEFAULT gen_random_uuid(),</p>
                        <p className="pl-4 text-blue-300">tenant_id VARCHAR(64) NOT NULL INDEX,</p>
                        <p className="pl-4 text-indigo-300">pipeline_stage VARCHAR(32) NOT NULL,</p>
                        <p className="pl-4 text-slate-300">metadata JSONB NOT NULL DEFAULT '&#123;&#125;',</p>
                        <p className="pl-4 text-amber-300">sla_threshold_hours INT DEFAULT 24,</p>
                        <p className="pl-4 text-cyan-300">created_at TIMESTAMPTZ DEFAULT NOW()</p>
                        <p className="text-slate-400">&#125;;</p>
                      </div>
                    )}

                    {activeConsoleTab === 'api' && (
                      <div className="bg-[#020710] p-4 rounded-xl border border-white/10 font-mono text-[11px] text-slate-300 leading-relaxed">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
                          <span className="text-emerald-400 font-bold">POST /api/v2/dispatch-job</span>
                          <span className="text-[10px] text-slate-400">200 OK · 18ms</span>
                        </div>
                        <p className="text-slate-400">&#123;</p>
                        <p className="pl-4 text-cyan-300">"status": "dispatched",</p>
                        <p className="pl-4 text-cyan-300">"job_id": "job_9482_enterprise",</p>
                        <p className="pl-4 text-cyan-300">"webhook_triggers": ["slack", "email", "database_log"],</p>
                        <p className="pl-4 text-emerald-400">"sla_guarantee": "active_monitoring"</p>
                        <p className="text-slate-400">&#125;</p>
                      </div>
                    )}
                  </div>

                  {/* Window Bottom Bar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      100% Client-Owned Source Code
                    </span>
                    <span>Zero Vendor Lock-in</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CAPABILITIES SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2 sm:mb-3">
                  System Architecture
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Built for the complexity of real business.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Real operations have edge cases, compliance mandates, external APIs, and internal logic that off-the-shelf software ignores. We engineer platforms that master every requirement.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {enterpriseCapabilities.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div
                      className="p-5 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.7) 0%, rgba(10, 25, 48, 0.4) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
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
        <section className="py-12 sm:py-16 md:py-20 relative border-t border-white/10 bg-gradient-to-b from-[#030914] to-[#02050B]">
          <div className="container-tight text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
                Stop working around software compromises.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Tell us about your team's workflow and bottlenecks. We will engineer a custom operational platform that scales your business cleanly.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Engineer Custom Software <ArrowRight size={15} />
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
