import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Compass,
  Users,
  Layers,
  Wand2,
  TestTube2,
  Sliders,
  CheckCircle2,
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

const uxDeliverables = [
  {
    icon: Compass,
    title: 'User Research & Journey Mapping',
    desc: 'Deep customer discovery interviews, behavioral persona synthesis, and friction mapping that pinpoint exactly where drop-offs happen.',
  },
  {
    icon: Layers,
    title: 'Intuitive Information Architecture',
    desc: 'Cognitive load reduction, clean hierarchical taxonomy, and streamlined navigation structures that make complex B2B systems feel natural.',
  },
  {
    icon: Sliders,
    title: 'Wireframing & Low-Fidelity Testing',
    desc: 'Rapid interactive wireframing allowing leadership and end-users to validate structural logic and data density before high-fidelity visual design.',
  },
  {
    icon: Wand2,
    title: 'Comprehensive Figma Design Systems',
    desc: 'Scalable atomic components, variant properties, dynamic auto-layouts, and tokenized variables ready for high-velocity engineering handoff.',
  },
  {
    icon: TestTube2,
    title: 'Usability Testing & QA Audits',
    desc: 'Qualitative task-completion benchmarking, accessibility (WCAG 2.1 AA) compliance verification, and micro-copy optimization.',
  },
  {
    icon: Users,
    title: 'SaaS & Enterprise Product UX',
    desc: 'Complex data tables, multi-step customer onboarding funnels, filter matrices, and dense operational workflows engineered for daily speed.',
  },
]

export default function UiUxDesign() {
  const [activeStep, setActiveStep] = useState(2)

  return (
    <PageTransition
      title="UX/UI Design Services | SwasTek Solutions"
      description="Human-centered user research, wireframing, intuitive UI design, and scalable design systems engineered for effortless adoption."
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
                background: 'radial-gradient(circle, rgba(11,196,227,0.2) 0%, transparent 68%)',
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
                background: 'radial-gradient(circle, rgba(21,88,212,0.18) 0%, transparent 70%)',
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
                    style={{ background: 'rgba(11,196,227,0.12)', border: '1px solid rgba(11,196,227,0.25)' }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300">
                      Human-Centered UX/UI Engineering · SwasTek
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
                  User experiences engineered for<br />
                  <span style={{ background: 'linear-gradient(135deg, #0BC4E3 0%, #2570E8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    effortless adoption.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  We merge deep behavioral user empathy with structured design systems to build digital interfaces that eliminate onboarding friction, supercharge team productivity, and maximize client retention.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Book UX Consultation <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Interactive Case Studies
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
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>98.4%</p>
                    <p className="text-xs text-slate-400">Task Completion Rate</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>-45%</p>
                    <p className="text-xs text-slate-400">Onboarding Friction</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>AA+</p>
                    <p className="text-xs text-slate-400">WCAG Accessibility</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Interactive UX Workflow Lab Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/25 to-blue-600/25 blur-xl opacity-70 pointer-events-none" />

                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background: 'linear-gradient(180deg, #07111F 0%, #03080F 100%)',
                    borderColor: 'rgba(11,196,227,0.25)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(11,196,227,0.15)',
                  }}
                >
                  {/* Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'Sora, sans-serif' }}>
                        UX Workflow Lab · Research & Prototype
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      Figma System
                    </span>
                  </div>

                  {/* Interactive Steps */}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      User Journey Progression
                    </p>
                    <div className="grid grid-cols-4 gap-2 mb-6">
                      {['1. Discovery', '2. Wireframe', '3. Hi-Fi UI', '4. Validation'].map((label, idx) => (
                        <button
                          key={label}
                          onClick={() => setActiveStep(idx)}
                          className={`p-2 rounded-xl text-left border transition-all text-xs font-semibold ${
                            activeStep === idx
                              ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                              : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {label}
                        </button>
                      ))}
                    </div>

                    {/* Step Card View */}
                    <div
                      className="p-5 rounded-xl border mb-5"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-white flex items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                          <CheckCircle2 size={14} className="text-emerald-400" />
                          Validated Benchmark
                        </span>
                        <span className="text-[11px] font-bold text-cyan-400">98.4% Task Success</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
                          style={{ width: `${(activeStep + 1) * 25}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {activeStep === 0 && 'Target stakeholder interviews and qualitative pain point mapping across existing tools.'}
                        {activeStep === 1 && 'Low-fidelity architectural layouts and wireflow click-through testing without visual bias.'}
                        {activeStep === 2 && 'Bespoke design system integration with tokens, color contrast checks, and motion guides.'}
                        {activeStep === 3 && 'Task-completion sessions with representative users to eliminate friction points.'}
                      </p>
                    </div>

                    {/* Bottom Specs Pill */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <p className="text-slate-400 text-[10px]">Component Library</p>
                        <p className="text-white font-bold font-heading">160+ Atomic Tokens</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <p className="text-slate-400 text-[10px]">Developer Handover</p>
                        <p className="text-cyan-400 font-bold font-heading">100% Zero-Discrepancy</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Figma Auto-Layout Tokens
                    </span>
                    <span>Human-Centered Engineering</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            DELIVERABLES SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2 sm:mb-3">
                  UX Methodology
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  How we transform complex workflows.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We dismantle confusing workflows and re-engineer them into clean, human-centered journeys that accelerate daily execution.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {uxDeliverables.map((item, i) => {
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
                Build software your users will love using.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Schedule a UX architectural audit. We will review your current product friction points and map out a high-impact redesign strategy.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Request a UX Audit <ArrowRight size={15} />
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
