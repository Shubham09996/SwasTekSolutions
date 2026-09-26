import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const steps = [
  {
    num: '01',
    title: 'Understand',
    color: '#1860D4',
    summary: 'We learn your business before we write a line of code.',
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
    color: '#1860D4',
    summary: 'A clear scope, technical plan and timeline.',
    details: [
      'Technical architecture planning',
      'Feature scope definition',
      'Technology stack selection',
      'Project timeline and milestones',
      'Resourcing and communication plan',
    ],
    note: 'You will know exactly what we\'re building, how long it will take and what it costs before we start.',
  },
  {
    num: '03',
    title: 'Design',
    color: '#1860D4',
    summary: 'Interfaces built for your users, not just for aesthetics.',
    details: [
      'UX wireframing and flow design',
      'UI design system and components',
      'Prototype review with your team',
      'Design iteration and sign-off',
      'Responsive design for all devices',
    ],
    note: 'Design is a conversation. We design, you review, we refine. Nothing moves to development until you\'re satisfied.',
  },
  {
    num: '04',
    title: 'Build',
    color: '#1860D4',
    summary: 'Clean, maintainable code with regular check-ins.',
    details: [
      'Structured development sprints',
      'Regular builds for your review',
      'Continuous integration and testing',
      'Code review and quality standards',
      'Regular progress communication',
    ],
    note: 'We build in stages so you can see working software â€” not just status reports.',
  },
  {
    num: '05',
    title: 'Test',
    color: '#0EAFD4',
    summary: 'Rigorous QA before anything reaches your users.',
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
    color: '#0EAFD4',
    summary: 'Coordinated, planned deployment with no surprises.',
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
    color: '#0E2040',
    summary: 'We stay involved after launch. Your software evolves.',
    details: [
      'Ongoing maintenance and updates',
      'Bug fixes and performance monitoring',
      'Feature additions as requirements change',
      'Security updates and dependency management',
      'Access to technical support',
    ],
    note: 'Software doesn\'t stop when it launches. Your business changes, your users have feedback â€” your software should evolve with it.',
  },
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  )
}

export default function Process() {
  return (
    <PageTransition title="Our Process | SwasTek Solutions" description="From first conversation to final product â€” how we design, build and support software at SwasTek.">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">How we work</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              From first conversation<br />to final product.
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              A clear process is what separates a well-run project from a frustrating one. Here's exactly how we work â€” from the first call to ongoing support.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Process timeline */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <div className="max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[27px] top-8 bottom-8 w-px" style={{ background: 'linear-gradient(to bottom, #1860D4, #0EAFD4, #0E2040)' }} />

              <div className="space-y-0">
                {steps.map((step, i) => (
                  <FadeUp key={step.num} delay={i * 0.07}>
                    <motion.div
                      whileInView={{ scale: 1 }}
                      initial={{ scale: 0.98 }}
                      viewport={{ once: true }}
                      className="relative pl-16 pb-14"
                    >
                      {/* Step circle */}
                      <div
                        className="absolute left-0 top-0 w-14 h-14 rounded-full flex items-center justify-center text-white text-xs font-bold border-4 border-white shadow-md"
                        style={{ background: step.color, fontFamily: 'Sora, sans-serif', zIndex: 10 }}
                      >
                        {step.num}
                      </div>

                      <div className="pt-1">
                        <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                          {step.title}
                        </h2>
                        <p className="text-base font-semibold mb-4" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                          {step.summary}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2 mb-5">
                          {step.details.map((d) => (
                            <div key={d} className="flex items-start gap-2 text-sm" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: step.color }} />
                              {d}
                            </div>
                          ))}
                        </div>
                        <p className="text-sm italic leading-relaxed p-4 rounded-xl" style={{ color: '#3D5168', background: '#EFF4FA', fontFamily: 'Manrope, sans-serif' }}>
                          "{step.note}"
                        </p>
                      </div>
                    </motion.div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Ready to start the process?
          </h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
            The first step is a conversation. Tell us about what you're trying to build.
          </p>
          <Link to="/contact" data-cta className="btn-primary-white">
            Start a Project <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

