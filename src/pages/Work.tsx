import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  )
}

const projects = [
  {
    id: 'alpha-crm',
    title: 'Enterprise CRM Platform',
    industry: 'Professional Services',
    services: ['CRM Development', 'API Integrations', 'Business Automation'],
    challenge: 'A multi-division professional services firm was managing client relationships across three disconnected systems, creating duplicate data, missed follow-ups and reporting blind spots.',
    approach: 'We mapped their entire sales workflow across divisions before writing a line of code. The design process involved their management, sales and ops teams separately before being unified.',
    bg: '#0B1A2E',
    accent: '#1860D4',
    isLight: false,
  },
  {
    id: 'retail-platform',
    title: 'Retail Operations Platform',
    industry: 'Retail & E-commerce',
    services: ['Web Application', 'Custom Software', 'API Integrations'],
    challenge: 'A growing retailer needed a single operational view across their warehouse, stores and online channels. Their team was working from separate spreadsheets and isolated systems.',
    approach: 'We designed a unified operations dashboard that pulled data from their existing systems â€” no full migration required â€” giving each team role the exact view they needed.',
    bg: '#EFF4FA',
    accent: '#1860D4',
    isLight: true,
  },
  {
    id: 'property-saas',
    title: 'Property Management SaaS',
    industry: 'Real Estate',
    services: ['SaaS Development', 'UI/UX Design', 'API Integrations'],
    challenge: 'An estate agency group needed a multi-tenant property management platform that could be licensed to independent agencies â€” without each agency seeing another\'s data.',
    approach: 'We built a multi-tenant SaaS architecture from the start, with isolated data spaces, agency-specific configuration and a shared infrastructure that kept costs manageable.',
    bg: '#060E1C',
    accent: '#0EAFD4',
    isLight: false,
  },
  {
    id: 'logistics-dashboard',
    title: 'Logistics Operations Dashboard',
    industry: 'Logistics',
    services: ['Web Application', 'API Integrations', 'Business Automation'],
    challenge: 'A logistics company had no real-time visibility of their fleet or delivery status. Customers called daily for updates. Management had no reliable way to spot problems.',
    approach: 'We built an operations dashboard connected to their GPS fleet system, carrier APIs and warehouse software â€” giving the ops team live visibility and automating customer notifications.',
    bg: '#EFF4FA',
    accent: '#1860D4',
    isLight: true,
  },
]

export default function Work() {
  return (
    <PageTransition title="Our Work | SwasTek Solutions" description="Case studies and project examples â€” digital products, business systems and software we've built for real businesses.">
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: 'linear-gradient(160deg, #EFF4FA 0%, #ffffff 60%)' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Our work</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Projects we're proud of.
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              A selection of digital products and business systems we've designed and built. Every project starts with understanding the business, not the technology.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Projects */}
      <section className="py-4 pb-24 bg-white">
        <div className="container-wide">
          <div className="space-y-6">
            {projects.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.08}>
                <Link to={`/work/${p.id}`} data-case className="block group">
                  <div
                    className="rounded-2xl overflow-hidden transition-all duration-500 group-hover:-translate-y-0.5"
                    style={{
                      background: p.bg,
                      boxShadow: `0 2px 24px rgba(0,0,0,${p.isLight ? '0.05' : '0.2'})`,
                    }}
                  >
                    <div className={`grid lg:grid-cols-2 items-stretch`}>
                      {/* Text */}
                      <div className={`p-10 lg:p-14 flex flex-col justify-between ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                        <div>
                          <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: p.accent, fontFamily: 'Manrope, sans-serif' }}>
                            {p.industry}
                          </p>
                          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 leading-tight" style={{ color: p.isLight ? '#0B1A2E' : '#ffffff', fontFamily: 'Sora, sans-serif' }}>
                            {p.title}
                          </h2>
                          <p className="text-sm leading-relaxed mb-5" style={{ color: p.isLight ? '#3D5168' : '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                            {p.challenge}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {p.services.map((s) => (
                            <span key={s} className="text-xs px-2.5 py-1 rounded-full" style={{ background: p.isLight ? '#EBF4FF' : 'rgba(255,255,255,0.08)', color: p.isLight ? '#1860D4' : '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Visual placeholder */}
                      <div className="hidden lg:flex items-center justify-center min-h-[300px] relative overflow-hidden" style={{ background: p.isLight ? `${p.accent}06` : `${p.accent}08` }}>
                        <div className="absolute inset-10 rounded-2xl border opacity-10" style={{ borderColor: p.accent }} />
                        <div className="absolute inset-20 rounded-xl border opacity-06" style={{ borderColor: p.accent }} />
                        <div className="text-center z-10">
                          <div className="w-20 h-20 rounded-3xl mx-auto mb-4 flex items-center justify-center" style={{ background: `${p.accent}15` }}>
                            <div className="w-10 h-10 rounded-xl" style={{ background: p.accent, opacity: 0.6 }} />
                          </div>
                          <p className="text-xs font-semibold" style={{ color: p.accent, fontFamily: 'Manrope, sans-serif' }}>{p.title}</p>
                        </div>
                        <div className="absolute bottom-6 right-6 flex items-center gap-2 text-xs font-semibold transition-all duration-300 group-hover:gap-3" style={{ color: p.accent, fontFamily: 'Manrope, sans-serif' }}>
                          View case study <ArrowUpRight size={13} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section-sm" style={{ background: '#EFF4FA' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
            Have a project in mind?
          </h2>
          <p className="text-base mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
            Tell us what you're trying to build and we'll help you figure out the approach.
          </p>
          <Link to="/contact" data-cta className="btn-primary">
            Start a Project <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

