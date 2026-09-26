import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Users, BarChart2, CheckSquare, TrendingUp } from 'lucide-react'
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

const tabs = ['Leads', 'Pipeline', 'Customers', 'Tasks', 'Analytics']

function LeadsTab() {
  const leads = [
    { name: 'TechBridge Ltd', contact: 'Mark Collins', value: 'Â£24,000', stage: 'Qualified', hot: true },
    { name: 'Meridian Group', contact: 'Nina Sharma', value: 'Â£8,500', stage: 'Contacted', hot: false },
    { name: 'Apex Consultancy', contact: 'James R.', value: 'Â£15,000', stage: 'Proposal', hot: true },
    { name: 'Retail Direct', contact: 'Sam T.', value: 'Â£6,200', stage: 'New', hot: false },
  ]
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>Leads</h3>
        <div className="flex gap-2">
          <div className="text-xs px-2 py-1 rounded" style={{ background: 'rgba(22,141,255,0.12)', color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>All leads (12)</div>
        </div>
      </div>
      <div className="space-y-2">
        {leads.map((l) => (
          <div key={l.name} className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-center gap-3">
              {l.hot && <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0"></span>}
              {!l.hot && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.15)' }}></span>}
              <div>
                <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{l.name}</p>
                <p className="text-[10px]" style={{ color: '#6B7A8D', fontFamily: 'Manrope, sans-serif' }}>{l.contact}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold" style={{ color: '#0EAFD4', fontFamily: 'Manrope, sans-serif' }}>{l.value}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)', color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>{l.stage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PipelineTab() {
  const stages = [
    { name: 'New', count: 4, value: 'Â£32K', color: '#6B7A8D' },
    { name: 'Contacted', count: 3, value: 'Â£18K', color: '#1860D4' },
    { name: 'Proposal', count: 2, value: 'Â£45K', color: '#f59e0b' },
    { name: 'Negotiation', count: 1, value: 'Â£28K', color: '#8b5cf6' },
    { name: 'Won', count: 5, value: 'Â£92K', color: '#22c55e' },
  ]
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Sales Pipeline</h3>
      <div className="grid grid-cols-5 gap-2 h-40">
        {stages.map((s) => (
          <div key={s.name} className="flex flex-col">
            <div className="flex-1 rounded-lg relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="absolute bottom-0 left-0 right-0 rounded-b-lg" style={{ height: `${(s.count / 5) * 100}%`, background: `${s.color}30`, borderTop: `2px solid ${s.color}` }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{s.count}</span>
                <span className="text-[10px]" style={{ color: s.color, fontFamily: 'Manrope, sans-serif' }}>{s.value}</span>
              </div>
            </div>
            <p className="text-[9px] text-center mt-1" style={{ color: '#6B7A8D', fontFamily: 'Manrope, sans-serif' }}>{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomersTab() {
  const customers = [
    { name: 'Alpha Corp', since: 'Jan 2024', value: 'Â£82K', status: 'Active' },
    { name: 'Meridian Group', since: 'Mar 2024', value: 'Â£44K', status: 'Active' },
    { name: 'RetailBase', since: 'Jun 2024', value: 'Â£18K', status: 'Onboarding' },
  ]
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Customers</h3>
      {customers.map((c) => (
        <div key={c.name} className="flex items-center justify-between p-3 mb-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ background: '#1860D4' }}>{c.name[0]}</div>
            <div>
              <p className="text-xs font-semibold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>{c.name}</p>
              <p className="text-[10px]" style={{ color: '#6B7A8D', fontFamily: 'Manrope, sans-serif' }}>Since {c.since}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold" style={{ color: '#0EAFD4', fontFamily: 'Manrope, sans-serif' }}>{c.value}</p>
            <span className="text-[9px]" style={{ color: '#22c55e', fontFamily: 'Manrope, sans-serif' }}>{c.status}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function TasksTab() {
  const tasks = [
    { label: 'Send proposal to TechBridge', due: 'Today', done: false },
    { label: 'Follow up: Apex Consultancy call', due: 'Tomorrow', done: false },
    { label: 'Review contract: Meridian renewal', due: 'Oct 2', done: true },
    { label: 'Onboarding call: RetailBase', due: 'Oct 5', done: false },
  ]
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Tasks</h3>
      {tasks.map((t) => (
        <div key={t.label} className="flex items-center gap-3 p-2.5 mb-1.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="w-3.5 h-3.5 rounded border flex-shrink-0" style={{ background: t.done ? '#1860D4' : 'transparent', borderColor: t.done ? '#1860D4' : 'rgba(255,255,255,0.2)' }} />
          <p className="text-xs flex-1" style={{ color: t.done ? '#3A4A5C' : '#7A8FA3', textDecoration: t.done ? 'line-through' : 'none', fontFamily: 'Manrope, sans-serif' }}>{t.label}</p>
          <span className="text-[10px]" style={{ color: t.due === 'Today' ? '#ef4444' : '#6B7A8D', fontFamily: 'Manrope, sans-serif' }}>{t.due}</span>
        </div>
      ))}
    </div>
  )
}

function AnalyticsTab() {
  return (
    <div>
      <h3 className="text-sm font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Analytics</h3>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { label: 'Conversion rate', value: '24%', positive: true },
          { label: 'Avg deal size', value: 'Â£18K', positive: true },
          { label: 'Pipeline value', value: 'Â£215K', positive: true },
          { label: 'Avg close time', value: '32 days', positive: false },
        ].map((m) => (
          <div key={m.label} className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[10px] mb-1" style={{ color: '#6B7A8D', fontFamily: 'Manrope, sans-serif' }}>{m.label}</p>
            <p className="text-base font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{m.value}</p>
          </div>
        ))}
      </div>
      <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-[10px] mb-2" style={{ color: '#6B7A8D', fontFamily: 'Manrope, sans-serif' }}>Monthly revenue</p>
        <div className="flex items-end gap-1 h-12">
          {[30, 45, 38, 60, 52, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i >= 10 ? '#1860D4' : 'rgba(22,141,255,0.2)' }} />
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

const features = [
  'Lead capture and management',
  'Visual sales pipeline',
  'Customer relationship timeline',
  'Task and activity management',
  'Role-based access control',
  'Reports and analytics',
  'Email and notification automation',
  'Third-party integrations',
  'Custom fields and workflows',
  'Mobile-accessible interface',
]

export default function CRMDevelopment() {
  const [activeTab, setActiveTab] = useState('Leads')

  return (
    <PageTransition title="CRM Development | SwasTek Solutions" description="Build a CRM around your sales process instead of changing your process to fit someone else's software.">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <p className="section-label">CRM Development</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Your workflow.<br />Your CRM.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                Build a CRM around your sales process instead of changing your process to fit someone else's software. Custom-built to match exactly how your team sells.
              </p>
              <Link to="/contact" data-cta className="btn-primary">
                Build My CRM <ArrowUpRight size={14} />
              </Link>
            </FadeUp>

            {/* CRM Mockup */}
            <FadeUp delay={0.15}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.08)' }}>
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70"></span>
                  <span className="ml-3 text-xs" style={{ color: '#6B7A8D', fontFamily: 'Manrope, sans-serif' }}>CRM Platform</span>
                </div>
                {/* Tabs */}
                <div className="flex border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0A1118' }}>
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className="px-4 py-2.5 text-xs transition-all duration-200"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        color: activeTab === tab ? '#1860D4' : '#6B7A8D',
                        fontWeight: activeTab === tab ? '600' : '400',
                        borderBottom: activeTab === tab ? '2px solid #1860D4' : '2px solid transparent',
                      }}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                {/* Tab content */}
                <div className="p-5 min-h-[320px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tabComponents[activeTab]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <p className="section-label">Features</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Everything your team needs. Nothing they don't.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                We build CRM features around your actual sales workflow. Every field, every stage, every report â€” designed around the way your team works.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#1860D4' }} />
                    {f}
                  </div>
                ))}
              </div>
            </FadeUp>
            <div className="space-y-4">
              {[
                { icon: <Users size={20} />, title: 'Built for your team', desc: 'Role-based access means sales reps, managers and directors each see what they need.' },
                { icon: <TrendingUp size={20} />, title: 'Your sales stages', desc: 'Pipeline stages configured around your actual sales process, not a generic template.' },
                { icon: <BarChart2 size={20} />, title: 'Reporting that matters', desc: 'Reports built around the metrics your management team actually tracks.' },
                { icon: <CheckSquare size={20} />, title: 'Automated follow-ups', desc: 'Trigger tasks, emails and notifications based on the actions your team takes.' },
              ].map((item, i) => (
                <FadeUp key={item.title} delay={i * 0.08}>
                  <div className="flex gap-4 p-5 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#EBF4FF', color: '#1860D4' }}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Software that fits the way you sell.
          </h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
            Tell us about your sales process and we'll design a CRM around it.
          </p>
          <Link to="/contact" data-cta className="btn-primary-white">
            Build My CRM <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

