import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
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

const sections = [
  {
    title: 'Software that fits the way you work.',
    desc: 'Off-the-shelf software makes assumptions about how businesses operate. Custom software is built around the specific way your business actually runs.',
    visual: 'dashboard',
  },
  {
    title: 'Internal tools your team will actually use.',
    desc: 'Generic software gets avoided or worked around. Software built for your team gets adopted â€” because it matches how they think about their work.',
    visual: 'users',
  },
  {
    title: 'Operations you can see and control.',
    desc: 'Reports, dashboards and controls that give you real visibility into your business operations â€” not just raw data tables.',
    visual: 'reports',
  },
]

function DashboardPreview() {
  return (
    <div className="rounded-xl overflow-hidden border shadow-xl" style={{ background: '#0F1923', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <span className="w-2 h-2 rounded-full bg-red-500/60"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500/60"></span>
        <span className="w-2 h-2 rounded-full bg-green-500/60"></span>
        <span className="ml-2 text-xs" style={{ color: '#6B7A8D', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Operations Platform</span>
      </div>
      <div className="flex h-64">
        <div className="w-36 border-r p-3" style={{ background: '#0A1118', borderColor: 'rgba(255,255,255,0.06)' }}>
          {['Dashboard', 'Operations', 'Team', 'Reports', 'Settings'].map((item, i) => (
            <div key={item} className="flex items-center gap-2 px-2.5 py-2 rounded-md mb-0.5 text-xs" style={{ background: i === 0 ? '#1860D4' : 'transparent', color: i === 0 ? '#fff' : '#4B5A6B', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: i === 0 ? '#fff' : '#3A4A5C' }}></span>
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 p-4">
          <p className="text-xs font-bold text-white mb-3" style={{ fontFamily: 'Sora' }}>Dashboard</p>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[{ l: 'Tasks today', v: '14' }, { l: 'Pending', v: '8' }, { l: 'Done', v: '32' }].map((s) => (
              <div key={s.l} className="p-2 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-[10px] mb-1" style={{ color: '#6B7A8D', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.l}</p>
                <p className="text-sm font-bold text-white" style={{ fontFamily: 'Sora' }}>{s.v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="flex items-end gap-0.5 h-8">
              {[40, 60, 45, 70, 55, 80, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, background: i === 6 ? '#1860D4' : 'rgba(22,141,255,0.2)' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const capabilities = [
  'Custom business logic and workflows',
  'Internal operations tools',
  'Role-based user access',
  'Reporting and analytics',
  'Third-party API integrations',
  'Automated notifications',
  'Document management',
  'Audit trails and compliance logging',
]

export default function CustomSoftware() {
  return (
    <PageTransition title="Custom Software Development | SwasTek Solutions" description="Purpose-built business software, internal tools and operations platforms designed around how your business actually works.">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label">Custom Software Development</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Software that fits the way you work.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Internal tools, operations platforms and workflow systems built around how your team actually works â€” not around off-the-shelf assumptions.
              </p>
              <Link to="/contact" data-cta className="btn-primary">
                Build Custom Software <ArrowUpRight size={14} />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15}>
              <DashboardPreview />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Sticky scroll sections */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <div className="space-y-24">
            {sections.map((s, i) => (
              <FadeUp key={s.title} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-last' : ''}`}>
                  <div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      {s.title}
                    </h2>
                    <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {s.desc}
                    </p>
                  </div>
                  <div className="rounded-xl h-48" style={{ background: 'linear-gradient(135deg, #EBF4FF, #EFF4FA)', border: '1px solid #E4EDF7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p className="text-sm font-semibold" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>[ {s.visual} preview ]</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <p className="section-label">Capabilities</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Built to handle the complexity of real business.
              </h2>
              <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Real businesses have edge cases, compliance requirements, integrations and internal logic that generic software never accounts for. We build software that handles them all.
              </p>
            </FadeUp>
            <div className="grid grid-cols-2 gap-3">
              {capabilities.map((c, i) => (
                <FadeUp key={c} delay={i * 0.06}>
                  <div className="flex items-start gap-2.5 p-4 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                    <span className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0" style={{ background: '#1860D4' }} />
                    <span className="text-sm" style={{ color: '#0B1A2E', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{c}</span>
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
            Your business is unique. Your software should be too.
          </h2>
          <p className="text-base sm:text-lg mb-8 text-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Tell us about your operations and what you need to improve. We'll build the software around it.
          </p>
          <Link to="/contact" data-cta className="btn-primary-white shadow-lg shadow-white/10">
            Start the Conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

