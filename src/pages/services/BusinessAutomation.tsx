import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Zap,
  ArrowRight,
  Database,
  Send
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

const automatedWorkflows = [
  {
    trigger: 'Inbound Web Lead or WhatsApp Query',
    action: 'Deduplicate in CRM, enrich contact data, assign sales rep, and send instant WhatsApp confirmation.',
    impact: '< 2 min response time',
    category: 'Sales & Intake',
  },
  {
    trigger: 'Contract Signed via DocuSign / SignNow',
    action: 'Auto-generate customer account, notify operations on Slack, provision staging portal, and trigger invoice.',
    impact: '100% Zero manual delay',
    category: 'Onboarding',
  },
  {
    trigger: 'Overdue Invoice or Payment Failure',
    action: 'Send friendly payment reminder sequences, create task for finance team, and pause non-essential services.',
    impact: '-62% Late payments',
    category: 'Finance & Billing',
  },
  {
    trigger: 'Inventory Stock Drops Below Threshold',
    action: 'Calculate re-order quantity, generate supplier purchase order PDF, and request manager approval.',
    impact: 'Zero stock-out events',
    category: 'Supply Chain',
  },
  {
    trigger: 'Weekly Executive Reporting Schedule',
    action: 'Aggregate metrics from PostgreSQL, Stripe, and Google Ads into an automated PDF executive brief.',
    impact: '6 hrs saved weekly',
    category: 'BI & Executive',
  },
]

export default function BusinessAutomation() {

  return (
    <PageTransition
      title="Business Process Automation Services | SwasTek Solutions"
      description="Eliminate repetitive manual tasks. Connect webhooks, CRM pipelines, accounting tools, and automated customer notifications."
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
                  className="flex items-center gap-2 mb-6"
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
                      Intelligent Workflow Automation · SwasTek
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
                  Remove repetitive steps from<br />
                  <span style={{ background: 'linear-gradient(135deg, #0BC4E3 0%, #2570E8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    your daily workflow.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Automate the manual data transfers, approval steps, customer messages, and spreadsheet updates your team suffers through today. Connect your software systems and free your staff for high-value strategic work.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Automate My Workflows <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Automation Case Studies
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
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>&lt; 500ms</p>
                    <p className="text-xs text-slate-400">Trigger Execution Speed</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>100%</p>
                    <p className="text-xs text-slate-400">Zero Manual Data Entry</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>24/7</p>
                    <p className="text-xs text-slate-400">Continuous Event Engine</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Visual Interactive Workflow Node Engine Mockup */}
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
                        SwasTek Event Engine · Live Pipeline
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Running
                    </span>
                  </div>

                  {/* Visual Node Flow */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Interactive Event Pipeline:
                    </p>

                    {/* Node 1: Trigger */}
                    <div
                      className="p-3.5 rounded-xl border flex items-center justify-between transition-colors hover:bg-white/[0.04]"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(11,196,227,0.3)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                          <Zap size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white font-heading">Event Trigger: Webhook Intake</p>
                          <p className="text-[10px] text-slate-400">Payload: Inbound Lead from Contact Form</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-mono font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        0.04s
                      </span>
                    </div>

                    {/* Connecting Line */}
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-400 to-blue-500" />
                    </div>

                    {/* Node 2: Transform & Deduplicate */}
                    <div
                      className="p-3.5 rounded-xl border flex items-center justify-between transition-colors hover:bg-white/[0.04]"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(21,136,255,0.3)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center border border-blue-500/30">
                          <Database size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white font-heading">Action: PostgreSQL Sync & Deduplication</p>
                          <p className="text-[10px] text-slate-400">Match phone/email, assign deal score</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Cleaned
                      </span>
                    </div>

                    {/* Connecting Line */}
                    <div className="flex justify-center -my-2">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-indigo-500" />
                    </div>

                    {/* Node 3: Fan-Out Dispatch */}
                    <div
                      className="p-3.5 rounded-xl border flex items-center justify-between transition-colors hover:bg-white/[0.04]"
                      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(91,60,245,0.3)' }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                          <Send size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white font-heading">Fan-Out: Multi-Channel Dispatch</p>
                          <p className="text-[10px] text-slate-400">WhatsApp message + Slack lead alert sent</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-indigo-300 font-mono font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                        Dispatched
                      </span>
                    </div>

                    {/* Bottom Log */}
                    <div className="p-3 rounded-xl bg-black/40 border border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                      <span className="text-emerald-400">SUCCESS: Pipeline run completed in 184ms</span>
                      <span>Zero Errors</span>
                    </div>
                  </div>

                  {/* Window Bottom Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      100% Reliable Delivery Engine
                    </span>
                    <span>Automated Error Fallbacks</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            WORKFLOWS SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  Proven Playbooks
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Workflows we routinely automate.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  Every business loses hundreds of hours to manual coordination. Here is how we engineer instant, error-free operational velocity.
                </p>
              </div>
            </FadeUp>

            <div className="space-y-4">
              {automatedWorkflows.map((item, i) => (
                <FadeUp key={item.trigger} delay={i * 0.07}>
                  <div
                    className="p-6 rounded-2xl transition-all duration-300 hover:border-cyan-500/40 group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.7) 0%, rgba(10, 25, 48, 0.4) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div className="grid md:grid-cols-[1.2fr_auto_1.8fr_auto] gap-4 items-center">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 inline-block mb-1.5">
                          {item.category} Trigger
                        </span>
                        <p className="text-sm font-bold text-white font-heading">{item.trigger}</p>
                      </div>

                      <div className="hidden md:flex items-center justify-center text-cyan-400">
                        <ArrowRight size={18} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-semibold">Automated Sequence</p>
                        <p className="text-sm text-slate-300 leading-relaxed">{item.action}</p>
                      </div>

                      <div className="text-left md:text-right">
                        <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 whitespace-nowrap">
                          {item.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
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
                What manual steps can we automate for you?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Walk us through the repetitive tasks stealing your team's time. We will design automated triggers, database syncs, and notifications to run 24/7.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Automate My Operations <ArrowRight size={15} />
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
