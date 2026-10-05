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

export default function ApiIntegrations() {
  return (
    <PageTransition title="API & Integrations | SwasTek Solutions" description="Connect your platforms, integrate third-party services and build reliable data flows between systems.">
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">API & Integrations</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Connect your systems. Simplify your operations.
            </h1>
            <p className="text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Most businesses run on multiple tools that don't talk to each other. We build the integrations and APIs that connect them â€” reliably, securely and without manual copying.
            </p>
            <Link to="/contact" data-cta className="btn-primary">Discuss Integrations <ArrowUpRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20">
            <FadeUp>
              <p className="section-label">What we connect</p>
              <h2 className="font-heading text-3xl font-bold mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Integration types we build.</h2>
              <div className="space-y-4">
                {[
                  { title: 'REST API Development', desc: 'Clean, documented APIs for your internal systems and external partners.' },
                  { title: 'Payment Gateways', desc: 'Stripe, PayPal, GoCardless and other payment services integrated securely.' },
                  { title: 'CRM Integrations', desc: 'Sync leads, contacts and deals with your CRM or marketing platforms.' },
                  { title: 'Communication APIs', desc: 'Email, SMS and messaging integrations built into your workflows.' },
                  { title: 'Webhooks', desc: 'Real-time event triggers between your systems when things happen.' },
                  { title: 'Data Sync', desc: 'Keep data consistent across multiple systems without manual input.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                    <span className="w-1 flex-shrink-0 rounded-full" style={{ background: '#1860D4' }}></span>
                    <div>
                      <h3 className="font-heading font-bold text-sm mb-1" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                      <p className="text-sm" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="section-label">Common integrations</p>
              <h2 className="font-heading text-3xl font-bold mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Platforms we integrate with.</h2>
              <div className="grid grid-cols-3 gap-3">
                {['Stripe', 'Xero', 'QuickBooks', 'Salesforce', 'HubSpot', 'Mailchimp', 'Twilio', 'SendGrid', 'Slack', 'Google APIs', 'Microsoft 365', 'Shopify'].map((p) => (
                  <div key={p} className="p-3 bg-white rounded-xl border text-center text-sm font-semibold" style={{ borderColor: '#E4EDF7', color: '#0B1A2E', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {p}
                  </div>
                ))}
              </div>
              <p className="text-sm mt-4" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>And any system with a documented API or webhook capability.</p>
            </FadeUp>
          </div>
        </div>
      </section>
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Need to connect your systems?</h2>
          <p className="text-base sm:text-lg mb-8 text-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tell us about the tools you're using and what data needs to move between them.</p>
          <Link to="/contact" data-cta className="btn-primary-white shadow-lg shadow-white/10">Start the Conversation <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </PageTransition>
  )
}

