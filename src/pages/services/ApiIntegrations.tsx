import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Workflow,
  Network,
  CreditCard,
  Database,
  Send,
  Zap,
  ArrowRight
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

const integrationTypes = [
  {
    title: 'High-Throughput REST & GraphQL APIs',
    desc: 'Bespoke, strictly typed endpoints engineered with OpenAPI documentation, rate limiting, and millisecond response times.',
    icon: Network,
  },
  {
    title: 'Banking & Payment Gateway Connectors',
    desc: 'Secure integrations with Stripe, Razorpay, PayPal, and Open Banking APIs with webhook validation and signature verification.',
    icon: CreditCard,
  },
  {
    title: 'Enterprise CRM & ERP Bi-Directional Sync',
    desc: 'Real-time synchronization between Salesforce, HubSpot, Zoho, SAP, and custom PostgreSQL databases with zero duplicate records.',
    icon: Workflow,
  },
  {
    title: 'Communication & SMS/WhatsApp Pipelines',
    desc: 'Automated transactional messaging pipelines powered by Twilio, WhatsApp Cloud API, SendGrid, and AWS SES.',
    icon: Send,
  },
  {
    title: 'Fault-Tolerant Webhook Consumers',
    desc: 'Event-driven message queues (RabbitMQ, Redis Streams) that guarantee idempotency, retry mechanisms, and dead-letter queues.',
    icon: Zap,
  },
  {
    title: 'Legacy Database ETL & Bridges',
    desc: 'Secure data extraction and scheduled synchronization bridging legacy on-premise SQL servers with modern cloud web platforms.',
    icon: Database,
  },
]

const platforms = [
  'Stripe', 'Razorpay', 'Salesforce', 'HubSpot', 'Zoho CRM', 'Shopify',
  'Twilio', 'WhatsApp API', 'Slack', 'PostgreSQL', 'QuickBooks', 'AWS Cloud'
]

export default function ApiIntegrations() {
  const [activeMethod, setActiveMethod] = useState<'POST' | 'GET'>('POST')

  return (
    <PageTransition
      title="API Development & System Integrations | SwasTek Solutions"
      description="Connect your platforms, integrate payment gateways, and build fault-tolerant real-time data flows between software systems."
    >
      <div className="min-h-screen text-slate-100 overflow-hidden" style={{ background: 'var(--void)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>

        {/* ═══════════════════════════════════════════════════════
            HERO SECTION — ULTRA-PREMIUM DARK
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-[74px] pb-8 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 overflow-hidden grain-overlay">
          {/* Ambient Glows & Grid */}
          <div className="absolute inset-0 hero-grid opacity-100 pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="orb-1 absolute"
              style={{
                width: 750,
                height: 750,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(21,88,212,0.22) 0%, transparent 68%)',
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
                background: 'radial-gradient(circle, rgba(11,196,227,0.16) 0%, transparent 70%)',
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
                  className="flex items-center gap-2 mb-4"
                >
                  <div
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                    style={{ background: 'rgba(21,88,212,0.14)', border: '1px solid rgba(21,88,212,0.25)' }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300">
                      API Engineering & Integrations · SwasTek
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
                  Connect your systems.<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Unify your operations.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Most companies run on isolated software tools that don't communicate. We engineer custom APIs and resilient webhook pipelines that synchronize your databases, payments, and CRMs automatically.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Connect My Software Systems <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    View All Services
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>&lt; 30ms</p>
                    <p className="text-xs text-slate-400">Average Endpoint Latency</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>100%</p>
                    <p className="text-xs text-slate-400">Idempotent Webhook Delivery</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>256-bit</p>
                    <p className="text-xs text-slate-400">mTLS & Signature Security</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Live API Gateway Inspector Terminal Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 to-cyan-500/20 blur-xl opacity-70 pointer-events-none" />

                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background: 'linear-gradient(180deg, #07111F 0%, #03080F 100%)',
                    borderColor: 'rgba(21,136,255,0.25)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(21,88,212,0.15)',
                  }}
                >
                  {/* Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'Sora, sans-serif' }}>
                        API Gateway Inspector · Live Gateway
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs font-mono">
                      {(['POST', 'GET'] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setActiveMethod(m)}
                          className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors ${
                            activeMethod === m ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-6 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-slate-400">
                      <span className="text-emerald-400 font-bold">200 OK · 18ms latency</span>
                      <span>Signature: HMAC-SHA256 Validated</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#020710] border border-white/10 space-y-1 text-slate-300 leading-relaxed overflow-x-auto">
                      <p className="text-slate-500">// Request: https://api.swastek.io/v1/sync/order</p>
                      <p className="text-cyan-400">Headers: &#123; "Authorization": "Bearer sk_live_••••••", "X-Webhook-Id": "wh_4921" &#125;</p>
                      <p className="text-slate-400">Payload: &#123;</p>
                      <p className="pl-4 text-emerald-300">"event": "customer.subscription.renewed",</p>
                      <p className="pl-4 text-blue-300">"customer_id": "cust_8249",</p>
                      <p className="pl-4 text-amber-300">"reconciled_in_accounting": true,</p>
                      <p className="pl-4 text-cyan-300">"synced_services": ["crm", "billing", "whatsapp_notify"]</p>
                      <p className="text-slate-400">&#125;</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-slate-400">Retry Mechanism:</span>
                        <span className="text-emerald-400 font-bold">Exponential Backoff</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-slate-400">Data Loss:</span>
                        <span className="text-cyan-400 font-bold">Zero Tolerance</span>
                      </div>
                    </div>
                  </div>

                  {/* Window Bottom Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      OpenAPI 3.1 & Swagger Documented
                    </span>
                    <span>99.99% Availability</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            INTEGRATIONS SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2 sm:mb-3">
                  Integration Engineering
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Integration architectures we engineer.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Whether linking modern SaaS APIs or extracting data from legacy on-premise SQL databases, we build reliable, secure pipelines.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-16">
              {integrationTypes.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div
                      className="p-5 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.7) 0%, rgba(10, 25, 48, 0.4) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </FadeUp>
                )
              })}
            </div>

            {/* Platforms Grid */}
            <FadeUp delay={0.2}>
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10" style={{ background: 'rgba(7, 17, 31, 0.6)' }}>
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 sm:mb-5 text-center">
                  Common Enterprise Platforms & Protocols We Integrate
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                  {platforms.map((p) => (
                    <div
                      key={p}
                      className="p-2.5 sm:p-3.5 rounded-xl text-center text-xs font-semibold text-slate-200 border border-white/5 bg-white/[0.02] transition-colors hover:border-cyan-500/30 hover:text-white"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 md:py-20 relative border-t border-white/10 bg-gradient-to-b from-[#030914] to-[#02050B]">
          <div className="container-tight text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
                Need to bridge your software platforms?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Tell us about the tools your team relies on and what data needs to flow seamlessly between them. We will design a secure, automated integration.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Connect My Systems <ArrowRight size={15} />
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
