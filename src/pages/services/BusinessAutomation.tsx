import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  )
}

const automations = [
  { trigger: 'New lead form submission', action: 'Create contact, notify sales rep, add to CRM pipeline' },
  { trigger: 'Contract approved', action: 'Send confirmation, trigger onboarding, assign project manager' },
  { trigger: 'Invoice overdue', action: 'Send reminder, create task, flag in management dashboard' },
  { trigger: 'New customer registered', action: 'Send welcome email, create account, set up access' },
  { trigger: 'Report due', action: 'Generate automatically, send to stakeholders, archive' },
]

export default function BusinessAutomation() {
  return (
    <PageTransition title="Business Automation | SwasTek Solutions" description="Remove repetitive manual steps from your workflow. Automate approvals, data sync and operational processes.">
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Business Automation</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Remove repetitive work from your workflow.
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Automate the steps your team does manually today. Connect your systems, trigger the right actions automatically and free your team for the work that actually requires human thinking.
            </p>
            <Link to="/contact" data-cta className="btn-primary">Talk about automation <ArrowUpRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>

      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Examples</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Workflows we automate.
            </h2>
          </FadeUp>
          <div className="space-y-3">
            {automations.map((a, i) => (
              <FadeUp key={a.trigger} delay={i * 0.07}>
                <div className="bg-white rounded-xl border p-5" style={{ borderColor: '#E4EDF7' }}>
                  <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Trigger</p>
                      <p className="text-sm font-semibold" style={{ color: '#0B1A2E', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{a.trigger}</p>
                    </div>
                    <div className="hidden md:flex items-center justify-center">
                      <div className="flex items-center gap-1">
                        <div className="w-8 h-px" style={{ background: '#E4EDF7' }} />
                        <ArrowUpRight size={14} style={{ color: '#1860D4' }} />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Action</p>
                      <p className="text-sm" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{a.action}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            What are you automating away?
          </h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tell us about the manual processes costing your team time and we'll build the automation.</p>
          <Link to="/contact" data-cta className="btn-primary-white">Start the Conversation <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </PageTransition>
  )
}

