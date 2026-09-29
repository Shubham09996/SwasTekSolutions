import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Target, Network, ShieldAlert, Cpu, LineChart, CheckSquare } from 'lucide-react'
import PageTransition from '../../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

const consultingPillars = [
  { icon: Target, title: 'Digital Transformation Roadmap', desc: 'Step-by-step technological roadmaps that align software modernization directly with business revenue and operational objectives.' },
  { icon: Network, title: 'Enterprise Architecture & Cloud', desc: 'Designing resilient, secure, and cost-effective cloud architectures (AWS, Azure, GCP) that scale seamlessly with growth.' },
  { icon: Cpu, title: 'Tech Stack & Vendor Selection', desc: 'Unbiased technical audits and evaluation to choose the right tools, frameworks, and SaaS providers without expensive lock-ins.' },
  { icon: ShieldAlert, title: 'Security & Compliance Audits', desc: 'Vulnerability assessments, data privacy compliance (GDPR, SOC2, HIPAA), and risk mitigation frameworks.' },
  { icon: LineChart, title: 'Legacy System Modernization', desc: 'Migrating outdated legacy platforms into high-performing, modular microservices without operational downtime.' },
  { icon: CheckSquare, title: 'CTO-as-a-Service & Advisory', desc: 'Senior technical leadership to guide executive teams, evaluate engineering hires, and run high-stake architecture reviews.' },
]

export default function ItStrategyConsulting() {
  return (
    <PageTransition
      title="IT Strategy Consulting | SwasTek Solutions"
      description="Strategic technology consulting, architecture planning, digital transformation roadmaps, and IT advisory."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label">IT Strategy Consulting</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Strategic technology decisions that drive measurable growth.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Technology shouldn't just be an expense — it should be your strongest competitive advantage. We help businesses architect future-ready systems, cut technical debt, and make smart IT investments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Book Strategy Session <ArrowUpRight size={14} />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Our Advisory Approach
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, #091322 0%, #112644 100%)', border: '1px solid rgba(21, 88, 212, 0.35)', boxShadow: '0 20px 50px rgba(9, 19, 34, 0.4)' }}>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Target size={18} className="text-blue-400" />
                    <span className="text-sm font-semibold text-white">Strategic IT Framework</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 font-mono">Q3 Roadmap</span>
                </div>
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Architecture Review</p>
                      <p className="text-sm font-bold text-white">Cloud Migration & Security</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">Validated</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Infrastructure Optimization</p>
                      <p className="text-sm font-bold text-white">42% Cost Reduction</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">Optimized</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400">Legacy Transition</p>
                      <p className="text-sm font-bold text-white">Zero Downtime Strategy</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Phase 2</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24" style={{ background: '#F8FAFC' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Consulting Focus</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Where We Deliver High-Impact Advisory
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingPillars.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeUp key={item.title} delay={i * 0.08}>
                  <div className="p-8 bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderColor: '#E2EBF5' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(21,88,212,0.08)', color: '#1558D4' }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#536880', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #07111F 0%, #0A1E38 100%)' }}>
        <div className="container-tight text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Make informed technology decisions today.
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Speak with our senior technology consultants to align your IT strategy with business goals.
            </p>
            <Link to="/contact" data-cta className="btn-primary-white">
              Schedule IT Consultation <ArrowUpRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
