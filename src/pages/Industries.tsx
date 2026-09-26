import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  )
}

const industries = [
  { name: 'Real Estate', slug: 'real-estate', desc: 'Property portals, CRM platforms and client management systems for agencies and developers.' },
  { name: 'Construction', slug: 'construction', desc: 'Project tracking, compliance tools and operations platforms for construction and engineering firms.' },
  { name: 'Finance', slug: 'finance', desc: 'Secure client portals, compliance systems and reporting dashboards for financial services.' },
  { name: 'Healthcare', slug: 'healthcare', desc: 'Patient management, scheduling and operations tools for healthcare providers and clinics.' },
  { name: 'Logistics', slug: 'logistics', desc: 'Fleet tracking, shipment management and operations dashboards for logistics businesses.' },
  { name: 'Retail', slug: 'retail', desc: 'E-commerce platforms, inventory management and retail CRM for physical and online retailers.' },
  { name: 'Education', slug: 'education', desc: 'Learning platforms, student management and administrative tools for education providers.' },
  { name: 'Professional Services', slug: 'professional-services', desc: 'CRM, project management and billing systems for consultancies and professional practices.' },
  { name: 'E-commerce', slug: 'ecommerce', desc: 'Custom storefronts, operations infrastructure and integrations for online businesses.' },
  { name: 'Startups', slug: 'startups', desc: 'MVPs, SaaS products and scalable platforms for early-stage and growth-stage companies.' },
]

export default function Industries() {
  return (
    <PageTransition title="Industries | SwasTek Solutions" description="Software for the specific challenges and workflows of your industry â€” not generic off-the-shelf assumptions.">
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: 'linear-gradient(160deg, #EFF4FA 0%, #ffffff 60%)' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Industries</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Software for how<br />your industry works.
            </h1>
            <p className="text-lg max-w-2xl leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              Different industries have different workflows, compliance requirements and operational rhythms. We build software around the specific needs of your sector â€” not a generic template.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Industry grid */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-4">
            {industries.map((ind, i) => (
              <FadeUp key={ind.slug} delay={i * 0.05}>
                <Link
                  to={`/industries/${ind.slug}`}
                  className="group flex items-start justify-between gap-6 p-7 rounded-2xl border transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
                  style={{ borderColor: '#E4EDF7' }}
                >
                  <div>
                    <h2 className="font-heading font-bold text-xl mb-2 transition-colors group-hover:text-blue-600" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      {ind.name}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                      {ind.desc}
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="flex-shrink-0 mt-1 transition-all duration-200 opacity-20 group-hover:opacity-100" style={{ color: '#1860D4' }} />
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
            Don't see your industry?
          </h2>
          <p className="text-base mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
            We've built software for a wide range of sectors. Tell us about your business and what you need.
          </p>
          <Link to="/contact" data-cta className="btn-primary">
            Have a conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

