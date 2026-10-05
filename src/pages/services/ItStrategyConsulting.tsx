import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Target,
  Network,
  ShieldAlert,
  Cpu,
  LineChart,
  CheckSquare,
  ShieldCheck,
  TrendingUp,
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

const consultingPillars = [
  {
    icon: Target,
    title: 'Digital Transformation Roadmaps',
    desc: 'Multi-year technological execution blueprints that directly align software modernizations with EBITDA growth and market defensibility.',
  },
  {
    icon: Network,
    title: 'Enterprise Cloud & Serverless Architecture',
    desc: 'Designing fault-tolerant, elastic cloud infrastructure across AWS, GCP, and Cloudflare Edge for 99.99% uptime and zero-downtime releases.',
  },
  {
    icon: Cpu,
    title: 'Tech Stack & Vendor Evaluation',
    desc: 'Unbiased code audits and architectural assessments that eliminate vendor lock-in, recurring software waste, and bloated licensing fees.',
  },
  {
    icon: ShieldAlert,
    title: 'Security, Privacy & SOC2 Readiness',
    desc: 'Infrastructure hardening, automated vulnerability scans, GDPR/HIPAA compliance frameworks, and role-based data encryption protocols.',
  },
  {
    icon: LineChart,
    title: 'Legacy System Modernization',
    desc: 'Phased strangler-pattern transitions from monolithic, slow legacy databases to high-velocity microservices with zero business disruption.',
  },
  {
    icon: CheckSquare,
    title: 'Fractional CTO & Executive Advisory',
    desc: 'Hands-on senior engineering leadership to mentor in-house engineers, evaluate high-stake architectural trade-offs, and conduct due diligence.',
  },
]

export default function ItStrategyConsulting() {

  return (
    <PageTransition
      title="IT Strategy Consulting & Advisory | SwasTek Solutions"
      description="Strategic technology roadmaps, cloud architecture advisory, legacy modernization, and fractional CTO consulting."
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
                background: 'radial-gradient(circle, rgba(91,60,245,0.2) 0%, transparent 68%)',
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
                background: 'radial-gradient(circle, rgba(21,136,255,0.18) 0%, transparent 70%)',
                bottom: '-5%',
                right: '5%',
                filter: 'blur(100px)',
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(91,60,245,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

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
                    style={{ background: 'rgba(91,60,245,0.14)', border: '1px solid rgba(91,60,245,0.28)' }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-indigo-300">
                      Enterprise Strategy & Advisory · SwasTek
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
                  Strategic technology decisions that drive<br />
                  <span style={{ background: 'linear-gradient(135deg, #5B3CF5 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    measurable growth.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Technology should never be a cost center—it should be your most formidable market leverage. We guide leadership teams to eliminate technical debt, cut cloud expenses, and build defensible software moats.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Book Strategy Session <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/about" className="btn-secondary">
                    Our Advisory Methodology
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>-42%</p>
                    <p className="text-xs text-slate-400">Cloud Cost Reduction</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-indigo-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>99.99%</p>
                    <p className="text-xs text-slate-400">System Availability</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>Zero</p>
                    <p className="text-xs text-slate-400">Migration Downtime</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Architectural Framework Console Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-600/30 to-blue-500/20 blur-xl opacity-70 pointer-events-none" />

                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background: 'linear-gradient(180deg, #07111F 0%, #03080F 100%)',
                    borderColor: 'rgba(91,60,245,0.28)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(91,60,245,0.15)',
                  }}
                >
                  {/* Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'Sora, sans-serif' }}>
                        Enterprise Architecture Console · Roadmap v2.1
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                      Advisory Mode
                    </span>
                  </div>

                  {/* Framework View */}
                  <div className="p-6 space-y-3.5">
                    <div
                      className="p-4 rounded-xl border flex items-center justify-between transition-colors hover:bg-white/[0.04]"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                          <Network size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            Cloud Migration & Microservices
                          </p>
                          <p className="text-[11px] text-slate-400">AWS ECS / PostgreSQL Migration</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        Validated
                      </span>
                    </div>

                    <div
                      className="p-4 rounded-xl border flex items-center justify-between transition-colors hover:bg-white/[0.04]"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                          <TrendingUp size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            Infrastructure Cost Optimization
                          </p>
                          <p className="text-[11px] text-slate-400">-42% Monthly Cloud Overhead</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-cyan-300 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                        Optimized
                      </span>
                    </div>

                    <div
                      className="p-4 rounded-xl border flex items-center justify-between transition-colors hover:bg-white/[0.04]"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                          <ShieldCheck size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            Security & SOC2 Audit Roadmap
                          </p>
                          <p className="text-[11px] text-slate-400">Zero-Trust Network Access & RBAC</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-300 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                        In Progress
                      </span>
                    </div>

                    {/* Bottom Specs Pill */}
                    <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between text-xs">
                      <span className="text-indigo-200 font-semibold">Legacy Modernization: 0 Business Downtime</span>
                      <span className="text-slate-400">Phase 2 Delivery</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Senior Principal Advisory
                    </span>
                    <span>Direct Architect Access</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PILLARS SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  Consulting Focus
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Where we deliver high-impact advisory.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  We bridge the divide between commercial objectives and software architecture, ensuring your IT investments yield long-term ROI.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {consultingPillars.map((item, i) => {
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
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
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
                Make high-conviction technology choices.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Connect with our principal architects for a technical strategy session and discover how to de-risk your digital roadmap.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Schedule IT Consultation <ArrowRight size={15} />
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
