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

export default function SaaSDevelopment() {
  return (
    <PageTransition title="SaaS Development | SwasTek Solutions" description="From product idea to scalable SaaS â€” architecture, authentication, subscriptions, dashboards and deployment.">
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">SaaS Development</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              From product idea<br />to scalable SaaS.
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              We build SaaS products from the ground up â€” from MVP validation through to production-ready platforms with billing, authentication and multi-tenant architecture.
            </p>
            <Link to="/contact" data-cta className="btn-primary">Build My SaaS <ArrowUpRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">What we cover</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Every layer of your SaaS product.</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'MVP', desc: 'Start with the features that validate your product idea fast.' },
              { title: 'Authentication', desc: 'Secure user login, roles, permissions and session management.' },
              { title: 'Subscriptions', desc: 'Billing, pricing tiers, free trials and payment gateway integration.' },
              { title: 'Multi-tenancy', desc: 'Isolated workspaces and data segregation for each customer.' },
              { title: 'Dashboards', desc: 'Analytics, usage tracking and self-service for your users.' },
              { title: 'APIs', desc: 'Internal APIs and external integrations built for scale.' },
              { title: 'Database', desc: 'Architecture designed for growth without future rewrites.' },
              { title: 'Deployment', desc: 'Cloud deployment, CI/CD pipelines and ongoing maintenance.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="p-5 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Have a product idea?</h2>
          <p className="text-base sm:text-lg mb-8 text-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Let's talk through your product vision and plan the right architecture from the start.</p>
          <Link to="/contact" data-cta className="btn-primary-white shadow-lg shadow-white/10">Start the Conversation <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </PageTransition>
  )
}

