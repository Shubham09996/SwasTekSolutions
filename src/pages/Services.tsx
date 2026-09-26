import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const services = [
  { title: 'Website Development', href: '/services/web-development', desc: 'Fast, responsive and thoughtfully designed websites built around your brand, audience and business goals.', tag: 'Web' },
  { title: 'Custom Software', href: '/services/custom-software', desc: 'Purpose-built business software for operations, workflows and internal tools â€” designed for the way you work.', tag: 'Software' },
  { title: 'CRM Development', href: '/services/crm-development', desc: 'A CRM built around your sales process, not the other way around. Lead management, pipelines, tasks and analytics.', tag: 'CRM' },
  { title: 'SaaS Development', href: '/services/saas-development', desc: 'From product idea to scalable SaaS â€” architecture, authentication, subscriptions, dashboards and deployment.', tag: 'SaaS' },
  { title: 'Web Applications', href: '/services/web-applications', desc: 'Customer portals, booking systems, admin platforms and browser-based tools for real operational use.', tag: 'Apps' },
  { title: 'ERP / Business Systems', href: '/services/custom-software', desc: 'Business management systems that bring your finance, operations, HR and logistics into a single platform.', tag: 'ERP' },
  { title: 'Admin Dashboards', href: '/services/web-applications', desc: 'Operational dashboards with the data, reports and controls your team actually needs.', tag: 'Dashboards' },
  { title: 'Business Automation', href: '/services/business-automation', desc: 'Remove repetitive manual steps. Automate approvals, notifications, data sync and operational workflows.', tag: 'Automation' },
  { title: 'API & Integrations', href: '/services/api-integrations', desc: 'Connect your platforms, integrate third-party services and build reliable data flows between systems.', tag: 'API' },
  { title: 'E-commerce', href: '/services/ecommerce', desc: 'Custom storefronts, checkout experiences, product management and order operations for online retail.', tag: 'E-commerce' },
  { title: 'AI Integrations', href: '/services/ai-solutions', desc: 'Practical AI features integrated into your operations â€” document processing, search, chat and automation.', tag: 'AI' },
  { title: 'UI/UX Design', href: '/services/web-development', desc: 'User interface and experience design that serves real users, not just looks good in a mockup.', tag: 'Design' },
  { title: 'Maintenance & Support', href: '/contact', desc: 'Ongoing technical support, updates and improvements for software already in production.', tag: 'Support' },
]

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

export default function Services() {
  return (
    <PageTransition title="Services | SwasTek Solutions" description="From business websites to custom software and CRM platforms, we build digital products around the way your business works.">
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: 'linear-gradient(160deg, #EFF4FA 0%, #ffffff 60%)' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Services</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              What can we<br />build for you?
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              From business websites to custom software and CRM platforms, we build digital products around the way your business works.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services grid */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <div className="border-t" style={{ borderColor: '#E4EDF7' }}>
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.04}>
                <Link
                  to={s.href}
                  className="group grid md:grid-cols-[80px_1fr_auto] gap-6 items-center py-8 border-b transition-colors duration-200 hover:bg-gray-50 px-3 -mx-3 rounded-lg"
                  style={{ borderColor: '#E4EDF7' }}
                >
                  <div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: '#EBF4FF', color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
                      {s.tag}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl mb-1.5 transition-colors group-hover:text-blue-600" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      {s.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>{s.desc}</p>
                  </div>
                  <div>
                    <ArrowUpRight size={20} className="transition-all duration-200 opacity-30 group-hover:opacity-100" style={{ color: '#1860D4' }} />
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
            Not sure what you need?
          </h2>
          <p className="text-base mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
            Tell us about your business and what you're trying to achieve. We'll help you figure out the right approach.
          </p>
          <Link to="/contact" data-cta className="btn-primary">
            Have a conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

