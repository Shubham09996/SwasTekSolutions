// Process page — SwasTek Solutions (NEXT-LEVEL & MINIMAL SPRINT DELIVERY)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  Layers,
  Code2,
  ShieldCheck,
  Rocket,
  Search,
  Clock,
  Sparkles,
  Lock,
  Compass,
  Repeat,
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

const processStages = [
  {
    id: 'understand',
    num: '01',
    phase: 'Stage 01',
    timeline: 'Week 1',
    title: 'Understand & Workflow Audit',
    tagline: 'Understand the business bottleneck before writing code',
    icon: Search,
    desc: 'We map your operational workflows, user roles, data touchpoints, and revenue targets. We define the exact problem and scope so there is zero ambiguity.',
    deliverables: [
      'Operational Workflow Map & System Architecture',
      'Stakeholder Interviews & Pain-Point Definition',
      'Problem Definition & High-Priority Objectives',
      'Initial Feasibility & Technology Direction',
    ],
    clientRole: 'Share existing processes, team pain points, and business goals during a 45-min kickoff call.',
    highlight: 'Zero guesswork. We listen and understand your business model before proposing architecture.',
  },
  {
    id: 'plan',
    num: '02',
    phase: 'Stage 02',
    timeline: 'Week 2',
    title: 'Plan & Architecture Blueprint',
    tagline: 'Crystal-clear scope, tech stack and milestones',
    icon: Compass,
    desc: 'We architect the entire technical roadmap, database schema, and fixed sprint schedule. Every milestone is locked with transparent commercials.',
    deliverables: [
      'Detailed Feature Scope & Acceptance Criteria',
      'Fixed Timeline & Milestone Commercials',
      'PostgreSQL Database Schema & Data Relationships',
      'Technology Stack & Security Strategy Selection',
    ],
    clientRole: 'Review and approve the milestone roadmap and technical architecture plan.',
    highlight: 'You will know exactly what we are building, how long it takes, and the exact deliverables before engineering starts.',
  },
  {
    id: 'design',
    num: '03',
    phase: 'Stage 03',
    timeline: 'Weeks 2–3',
    title: 'Design & Interactive UX Systems',
    tagline: 'Clickable Figma prototypes & UI component tokens',
    icon: Layers,
    desc: 'We craft human-centered wireframes and interactive Figma prototypes. Your stakeholders click through and validate the exact interface and user flows.',
    deliverables: [
      'Interactive Clickable Figma Prototype (Desktop & Mobile)',
      'Design Tokens & UI Component Design System',
      'UX Journey Maps & Conversion Optimization Flows',
      'Design Review Sprints & Milestone Sign-Off',
    ],
    clientRole: 'Click through and test the interactive prototype with your team, providing feedback for refinements.',
    highlight: 'Design is a conversation. Nothing moves to code development until you are 100% satisfied.',
  },
  {
    id: 'build',
    num: '04',
    phase: 'Stage 04',
    timeline: 'Weeks 4–7',
    title: 'Build & Agile Sprint Engineering',
    tagline: 'Bi-weekly builds deployed on private staging URLs',
    icon: Code2,
    desc: 'Engineering happens in structured 2-week agile sprints. You receive private staging environment links with each sprint to see working software in real time.',
    deliverables: [
      'Live Staging Deployments with Real-Time Access',
      'Bi-Weekly Milestone Progress Demonstrations',
      'Clean, Type-Safe Modular Codebase (TypeScript/Node)',
      'Automated API Pipelines & Webhook Integrations',
    ],
    clientRole: 'Access live staging builds, test new features, and provide bi-weekly sprint feedback.',
    highlight: 'We build in stages so you can test real working software — not just status reports.',
  },
  {
    id: 'test',
    num: '05',
    phase: 'Stage 05',
    timeline: 'Week 8',
    title: 'Test & Quality Assurance',
    tagline: 'Rigorous functional, security & speed audits',
    icon: ShieldCheck,
    desc: 'End-to-end functionality testing, edge-case validation, cross-device compatibility, and load testing to ensure rock-solid stability under heavy traffic.',
    deliverables: [
      'Full End-to-End Regression & Edge Case Testing',
      'Core Web Vitals & API Latency Optimizations (<100ms)',
      'Security Hardening & Role-Based Access Validation',
      'User Acceptance Testing (UAT) Sign-Off Report',
    ],
    clientRole: 'Perform internal user acceptance testing with your key team members.',
    highlight: 'Nothing goes live until every critical workflow passes automated and manual stress tests.',
  },
  {
    id: 'launch',
    num: '06',
    phase: 'Stage 06',
    timeline: 'Week 9',
    title: 'Launch & 100% IP Handover',
    tagline: 'Zero-downtime production deployment with no surprises',
    icon: Rocket,
    desc: 'Coordinated production rollout with DNS/SSL automation, database migrations, full source code handover, and team onboarding training.',
    deliverables: [
      'Zero-Downtime Production Cloud Deployment',
      '100% Source Code & Figma Asset IP Handover',
      'Complete Deployment Runbooks & Technical Docs',
      'Team Training & Admin Onboarding Session',
    ],
    clientRole: 'Go live and celebrate your product launch with your customers.',
    highlight: 'You receive 100% unencumbered ownership of your code, database, and infrastructure keys.',
  },
  {
    id: 'support',
    num: '07',
    phase: 'Stage 07',
    timeline: 'Ongoing',
    title: 'Support & Continuous Scale',
    tagline: 'Guaranteed SLA response and continuous feature evolution',
    icon: Repeat,
    desc: 'We remain your dedicated engineering partner after launch — providing guaranteed SLAs, continuous performance audits, and ongoing feature sprints.',
    deliverables: [
      'Guaranteed < 24h SLA Technical Support',
      'Monthly Security Updates & Dependency Maintenance',
      'Continuous Feature Sprints as Requirements Grow',
      'Dedicated Architect Communication Channel',
    ],
    clientRole: 'Shape the ongoing product roadmap as your business scales and users provide feedback.',
    highlight: 'Software does not stop at launch. We ensure your system evolves seamlessly alongside your business growth.',
  },
]

const deliveryGuarantees = [
  {
    icon: Clock,
    title: 'Bi-Weekly Live Staging',
    desc: 'Never wait months to see progress. We deploy working builds to private staging environments every 14 days.',
  },
  {
    icon: ShieldCheck,
    title: 'Fixed Milestones & Zero Scope Creep',
    desc: 'Every sprint is defined by clear acceptance criteria and fixed commercials. No surprise invoices.',
  },
  {
    icon: Lock,
    title: '100% Client Code & IP Ownership',
    desc: 'Your company permanently owns all source code, Figma design assets, databases, and deployment keys.',
  },
]

export default function Process() {
  const [activeStageId, setActiveStageId] = useState(processStages[0].id)
  const activeStage = processStages.find((s) => s.id === activeStageId) || processStages[0]

  return (
    <PageTransition
      title="Our Process | SwasTek Solutions — 7-Stage Sprint Engineering"
      description="From initial business audit to production scale and continuous support — our 7-stage sprint execution framework guarantees transparent delivery and zero guesswork."
    >
      <div className="min-h-screen text-slate-100 overflow-hidden" style={{ background: 'var(--void)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        
        {/* ═══════════════════════════════════════════════════════
            HERO SECTION — MINIMAL, CLEAN & CONFIDENT
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
                className="flex items-center gap-2 mb-3 sm:mb-6"
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
                    7-Stage Sprint Framework · Zero Guesswork
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-white font-extrabold mb-6 leading-[1.08] tracking-tight"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)',
                  letterSpacing: '-0.04em',
                }}
              >
                How we engineer software{' '}
                <span
                  className="shimmer-text"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800 }}
                >
                  step by step.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl"
              >
                A clear engineering process is what separates a smooth software build from a frustrating one. Here is our 7-stage framework — from kickoff audit to live production scale and continuous support.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 2 — INTERACTIVE 7-STAGE PROCESS SPOTLIGHT
        ═══════════════════════════════════════════════════════ */}
        <section className="py-8 sm:py-14 md:py-20 relative border-t border-white/10" style={{ background: '#050D1C' }}>
          <div className="container-wide">
            
            <div className="grid lg:grid-cols-[360px_1fr] xl:grid-cols-[380px_1fr] gap-6 sm:gap-8 lg:gap-10 items-start">
              
              {/* Left Column: 7 Stage Navigation List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between pb-2 mb-1 px-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    7 Delivery Stages
                  </span>
                  <span className="text-[11px] text-cyan-400 font-semibold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Click to inspect</span>
                </div>

                {processStages.map((stage) => {
                  const isActive = stage.id === activeStageId
                  const StageIcon = stage.icon
                  return (
                    <button
                      key={stage.id}
                      onClick={() => setActiveStageId(stage.id)}
                      className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-3 group ${
                        isActive
                          ? 'bg-blue-600/25 border-blue-400 shadow-lg shadow-blue-600/20 scale-[1.01]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 transition-all ${
                            isActive
                              ? 'bg-blue-500 text-white shadow-md'
                              : 'bg-white/10 text-slate-400 group-hover:text-white'
                          }`}
                        >
                          <StageIcon size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              {stage.phase}
                            </span>
                            <span className="text-[10px] text-slate-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>· {stage.timeline}</span>
                          </div>
                          <p className="font-bold text-xs sm:text-sm text-white truncate" style={{ fontFamily: 'Sora, sans-serif' }}>
                            {stage.title}
                          </p>
                        </div>
                      </div>
                      <span className={`text-xs flex-shrink-0 transition-transform ${isActive ? 'text-cyan-400 translate-x-1 font-bold' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        →
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Right Column: Stage Detail Spotlight Card (Sticky on desktop) */}
              <div className="lg:sticky lg:top-28">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 sm:p-9 rounded-3xl border relative overflow-hidden backdrop-blur-xl shadow-2xl"
                    style={{
                      background: 'linear-gradient(145deg, rgba(16, 38, 76, 0.7) 0%, rgba(6, 15, 30, 0.95) 100%)',
                      borderColor: 'rgba(56, 189, 248, 0.3)',
                      boxShadow: '0 24px 60px -15px rgba(0,0,0,0.8)',
                    }}
                  >
                    {/* Eyebrow Status Row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        <span>{activeStage.phase}</span>
                        <span className="text-slate-500">•</span>
                        <span>{activeStage.timeline}</span>
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Predictable Milestone
                      </span>
                    </div>

                    {/* Title Row with Number Badge */}
                    <div className="flex items-center gap-4 pb-6 border-b border-white/10 mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 flex items-center justify-center text-lg sm:text-xl font-extrabold flex-shrink-0" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {activeStage.num}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {activeStage.title}
                        </h3>
                        <p className="text-xs text-slate-300 mt-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          {activeStage.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {activeStage.desc}
                    </p>

                    {/* Deliverables Grid */}
                    <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3.5 flex items-center gap-1.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        <Sparkles size={13} className="text-cyan-400" /> Tangible Outputs & Deliverables
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {activeStage.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2.5 text-xs text-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Client Role & Standard Highlight (Matching heights) */}
                    <div className="grid sm:grid-cols-2 gap-4 items-stretch">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            Your Team's Role
                          </span>
                          <p className="text-xs text-slate-300 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {activeStage.clientRole}
                          </p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            The SwasTek Standard
                          </span>
                          <p className="text-xs text-slate-200 leading-relaxed italic" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            "{activeStage.highlight}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SECTION 3 — CLIENT PEACE OF MIND GUARANTEES (CLEAN SOLID WHITE)
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t" style={{ background: '#FFFFFF', borderColor: '#E2EBF5' }}>
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-blue-600 mb-3 block" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Delivery Guarantees
                </span>
                <h2
                  className="font-bold leading-tight"
                  style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
                >
                  Built for confidence at every step.
                </h2>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {deliveryGuarantees.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.title} delay={i * 0.1}>
                    <div
                      className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden group transition-all duration-300 hover:border-blue-400 hover:shadow-xl bg-white h-full flex flex-col justify-between"
                      style={{
                        borderColor: '#E2EBF5',
                        boxShadow: '0 4px 20px rgba(7, 17, 31, 0.04)',
                      }}
                    >
                      <div>
                        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 sm:mb-6 group-hover:scale-110 transition-transform">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
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
            SECTION 4 — NEXT-LEVEL MINIMAL BOTTOM CTA
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t border-white/10" style={{ background: '#050D1C' }}>
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
                    Ready to begin?
                  </span>
                  <h2
                    className="font-bold text-white mb-3 sm:mb-4 leading-tight"
                    style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.03em' }}
                  >
                    The first step is a 30-minute discovery conversation.
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                    Tell us what you are trying to build. We'll outline a clear technical scope, architecture blueprint, and milestone timeline within 24 hours.
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
                      <span>View Proven Work</span>
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
