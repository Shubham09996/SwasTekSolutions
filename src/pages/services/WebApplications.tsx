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

export default function WebApplications() {
  return (
    <PageTransition title="Web Application Development | SwasTek Solutions" description="Customer portals, booking systems, admin platforms and browser-based tools built for real operational use.">
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Web Applications</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Complex tools. Simple interfaces.
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Customer portals, admin systems, booking platforms and operations tools â€” browser-based applications that handle real operational complexity.
            </p>
            <Link to="/contact" data-cta className="btn-primary">Build My Application <ArrowUpRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Application types</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>What we build.</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Customer Portals', desc: 'Authenticated spaces where your clients access their projects, invoices and communications.' },
              { title: 'Admin Systems', desc: 'Internal tools for operations, data management and staff workflows.' },
              { title: 'Booking Platforms', desc: 'End-to-end booking systems with availability, confirmation and management.' },
              { title: 'Management Platforms', desc: 'Multi-role systems for managing people, processes and resources.' },
              { title: 'Internal Tools', desc: 'Browser-based tools your team uses to run daily operations.' },
              { title: 'Operations Dashboards', desc: 'Real-time visibility over the metrics and processes your business depends on.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="p-6 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Have an application to build?</h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tell us what you're trying to build and we'll work through the right approach with you.</p>
          <Link to="/contact" data-cta className="btn-primary-white">Start the Conversation <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </PageTransition>
  )
}

