// Process page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const steps = [
  {
    num: '01',
    title: 'Understand',
    emoji: '🎯',
    summary: 'We learn your business before we write a line of code.',
    color: '#1558D4',
    gradient: 'linear-gradient(135deg, #1558D4 0%, #2570E8 100%)',
    details: [
      'Discovery call with your team',
      'Business process mapping',
      'Stakeholder interviews',
      'Requirement documentation',
      'Problem definition and priorities',
    ],
    note: 'Most software projects fail because someone started building before they understood the problem. We start by listening.',
  },
  {
    num: '02',
    title: 'Plan',
    emoji: '📐',
    summary: 'A clear scope, technical plan and timeline.',
    color: '#2570E8',
    gradient: 'linear-gradient(135deg, #2570E8 0%, #4A8FF5 100%)',
    details: [
      'Technical architecture planning',
      'Feature scope definition',
      'Technology stack selection',
      'Project timeline and milestones',
      'Resourcing and communication plan',
    ],
    note: "You will know exactly what we're building, how long it will take and what it costs before we start.",
  },
  {
    num: '03',
    title: 'Design',
    emoji: '✦',
    summary: 'Interfaces built for your users, not just for aesthetics.',
    color: '#5B3CF5',
    gradient: 'linear-gradient(135deg, #5B3CF5 0%, #7C5FF7 100%)',
    details: [
      'UX wireframing and flow design',
      'UI design system and components',
      'Prototype review with your team',
      'Design iteration and sign-off',
      'Responsive design for all devices',
    ],
    note: "Design is a conversation. We design, you review, we refine. Nothing moves to development until you're satisfied.",
  },
  {
    num: '04',
    title: 'Build',
    emoji: '⚡',
    summary: 'Clean, maintainable code with regular check-ins.',
    color: '#0BC4E3',
    gradient: 'linear-gradient(135deg, #0BC4E3 0%, #38D9F0 100%)',
    details: [
      'Structured development sprints',
      'Regular builds for your review',
      'Continuous integration and testing',
      'Code review and quality standards',
      'Regular progress communication',
    ],
    note: 'We build in stages so you can see working software — not just status reports.',
  },
  {
    num: '05',
    title: 'Test',
    emoji: '🔍',
    summary: 'Rigorous QA before anything reaches your users.',
    color: '#1558D4',
    gradient: 'linear-gradient(135deg, #1558D4 0%, #0BC4E3 100%)',
    details: [
      'Functional testing across all features',
      'Cross-device and browser testing',
      'Performance testing',
      'User acceptance testing with your team',
      'Bug fixing and QA resolution',
    ],
    note: 'Nothing goes live until it has passed testing. We test the entire system, not just the new parts.',
  },
  {
    num: '06',
    title: 'Launch',
    emoji: '🚀',
    summary: 'Coordinated, planned deployment with no surprises.',
    color: '#2570E8',
    gradient: 'linear-gradient(135deg, #2570E8 0%, #4A8FF5 100%)',
    details: [
      'Production environment setup',
      'Data migration if required',
      'Launch coordination and timing',
      'Team training and onboarding',
      'Go-live monitoring',
    ],
    note: 'We plan launches carefully. The first time your team and users interact with the live system should be smooth.',
  },
  {
    num: '07',
    title: 'Support',
    emoji: '♾️',
    summary: 'We stay involved after launch. Your software evolves.',
    color: '#5B3CF5',
    gradient: 'linear-gradient(135deg, #5B3CF5 0%, #0BC4E3 100%)',
    details: [
      'Ongoing maintenance and updates',
      'Bug fixes and performance monitoring',
      'Feature additions as requirements change',
      'Security updates and dependency management',
      'Access to technical support',
    ],
    note: "Software doesn't stop when it launches. Your business changes, your users have feedback — your software should evolve with it.",
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function Process() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <PageTransition
      title="Our Process | SwasTek Solutions"
      description="From first conversation to final product — how we design, build and support software at SwasTek."
    >
      {/* ═══════════════════════════════════════════════════════
          DARK HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
        <div className="absolute inset-0 hero-grid opacity-100" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.18) 0%, transparent 68%)', top: '-15%', left: '50%', transform: 'translateX(-50%)', filter: 'blur(80px)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

        <div className="container-wide relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-10"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                How We Work
              </span>
            </div>
          </motion.div>

          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="leading-none text-white"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', letterSpacing: '-0.04em' }}
            >
              From first conversation
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 4.5rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
            >
              <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                to final product.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            A clear process is what separates a well-run project from a frustrating one. Here's exactly how we work — from the first call to ongoing support.
          </motion.p>

          {/* Step count strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex justify-center gap-2 mt-12"
          >
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 hover:scale-110"
                style={{
                  background: activeStep === i ? s.gradient : 'rgba(255,255,255,0.06)',
                  color: activeStep === i ? '#fff' : '#536880',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  border: '1px solid',
                  borderColor: activeStep === i ? 'transparent' : 'rgba(255,255,255,0.08)',
                }}
              >
                {s.num}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PROCESS TIMELINE — full dark design
      ═══════════════════════════════════════════════════════ */}
      <section className="py-0" style={{ background: '#03080F' }}>
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.06}>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                >
                  <div
                    className="border-b py-10 transition-all duration-500 group"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                  >
                    <div className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_auto] items-start gap-6">
                      {/* Step indicator */}
                      <div className="flex flex-col items-center gap-3">
                        <motion.div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xs font-bold shadow-lg flex-shrink-0 transition-all duration-400"
                          animate={{
                            background: activeStep === i ? step.gradient : 'rgba(255,255,255,0.06)',
                            scale: activeStep === i ? 1.1 : 1,
                          }}
                          style={{ fontFamily: 'Sora, sans-serif', border: activeStep === i ? 'none' : '1px solid rgba(255,255,255,0.08)' }}
                        >
                          <span className="text-base">{step.emoji}</span>
                        </motion.div>
                        <span
                          className="text-[10px] font-bold tracking-wider"
                          style={{ color: activeStep === i ? step.color : '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {step.num}
                        </span>
                      </div>

                      {/* Content */}
                      <div>
                        <h2
                          className="font-bold mb-2 transition-colors duration-300"
                          style={{
                            fontFamily: 'Sora, sans-serif',
                            fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                            letterSpacing: '-0.035em',
                            color: activeStep === i ? '#ffffff' : 'rgba(255,255,255,0.85)',
                          }}
                        >
                          {step.title}
                        </h2>
                        <p className="text-sm mb-0" style={{ color: '#CBD5E1', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          {step.summary}
                        </p>

                        <AnimatePresence>
                          {activeStep === i && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6">
                                <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                                  {step.details.map((d) => (
                                    <div key={d} className="flex items-start gap-3 text-sm" style={{ color: '#E2EBF5', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: `${step.color}18` }}>
                                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                                      </span>
                                      {d}
                                    </div>
                                  ))}
                                </div>
                                <div
                                  className="p-5 rounded-2xl text-sm leading-relaxed italic"
                                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: '#E2EBF5', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                >
                                  "{step.note}"
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Chevron */}
                      <motion.div
                        animate={{ rotate: activeStep === i ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: activeStep === i ? step.color : '#94A3B8' }}
                      >
                        <ArrowUpRight size={20} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-tight">
          <FadeUp>
            <div
              className="relative rounded-3xl p-12 md:p-20 overflow-hidden text-center"
              style={{ background: 'linear-gradient(145deg, #03080F 0%, #071424 60%, #0D1E34 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(21,88,212,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              </div>
              <div className="relative z-10">
                <p className="section-label mb-4">Ready to start?</p>
                <h2 className="font-bold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.04em', lineHeight: 1.08 }}>
                  Ready to start the process?
                </h2>
                <p className="text-base mb-10" style={{ color: 'rgba(160,175,194,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  The first step is a conversation. Tell us about what you're trying to build.
                </p>
                <Link to="/contact" data-cta className="btn-primary-white">
                  <Zap size={14} />
                  Start a Project <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
