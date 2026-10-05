import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Rocket,
  CreditCard,
  Users,
  Layers,
  Key,
  Server,
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

const saasLayers = [
  {
    title: 'Rapid MVP Architecture & Launch',
    desc: 'Engineering high-conviction MVPs with focused core features to validate market demand, onboard beta users, and secure customer revenue quickly.',
    icon: Rocket,
  },
  {
    title: 'Enterprise Auth & Role Management',
    desc: 'Secure session handling, social and SAML/SSO logins, multi-factor authentication (MFA), and fine-grained permissions per team member.',
    icon: Key,
  },
  {
    title: 'Automated Subscriptions & Stripe Billing',
    desc: 'Self-serve billing portals, tiered recurring plans, usage-based metered billing, prorated upgrades, and automated tax calculations.',
    icon: CreditCard,
  },
  {
    title: 'True Multi-Tenant Isolation',
    desc: 'Guaranteed customer data segregation, custom subdomain provisioning (tenant.app.com), and custom branding per corporate customer.',
    icon: Users,
  },
  {
    title: 'Tenant Self-Service Admin Portals',
    desc: 'Customer onboarding checklists, user invitation flows, API key management, and downloadable usage analytics.',
    icon: Layers,
  },
  {
    title: 'High-Scale Cloud & Zero-Downtime CI/CD',
    desc: 'Automated testing and staging pipelines on AWS/GCP with containerized horizontal scaling and automated database backups.',
    icon: Server,
  },
]

export default function SaaSDevelopment() {
  const [activePlan, setActivePlan] = useState<'pro' | 'enterprise'>('pro')

  return (
    <PageTransition
      title="SaaS Product Engineering | SwasTek Solutions"
      description="From product vision to scalable multi-tenant SaaS — architecture, Stripe billing, authentication, and cloud deployment."
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
                background: 'radial-gradient(circle, rgba(37,112,232,0.22) 0%, transparent 68%)',
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
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(37,112,232,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

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
                    style={{ background: 'rgba(37,112,232,0.14)', border: '1px solid rgba(37,112,232,0.25)' }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300">
                      SaaS Architecture & Scale · SwasTek
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
                  From product vision to<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    scalable, multi-tenant SaaS.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  We engineer production-grade SaaS products from the ground up—from rapid MVP validation and customer onboarding funnels to automated Stripe recurring billing and enterprise multi-tenancy.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Build My SaaS Platform <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View SaaS Case Studies
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>6-8 Wks</p>
                    <p className="text-xs text-slate-400">Rapid MVP Launch</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>Stripe</p>
                    <p className="text-xs text-slate-400">Automated Billing Engine</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>100%</p>
                    <p className="text-xs text-slate-400">Proprietary IP Ownership</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Multi-Tenant SaaS Workspace Console Mockup */}
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
                        Multi-Tenant Tenant Manager · v2.4
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs">
                      {(['pro', 'enterprise'] as const).map((plan) => (
                        <button
                          key={plan}
                          onClick={() => setActivePlan(plan)}
                          className={`px-2.5 py-1 rounded-md uppercase font-bold text-[10px] transition-colors ${
                            activePlan === plan ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {plan}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Body Preview */}
                  <div className="p-6 space-y-4">
                    {/* Active Tenant Card */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-sm">
                          AC
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-xs font-bold text-white font-heading">Acme Global Logistics</p>
                            <span className="text-[9px] font-bold text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20 uppercase">
                              {activePlan}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-400">subdomain: acme.swastek-app.io</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        Active Sub
                      </span>
                    </div>

                    {/* Subscription & Multi-tenancy status */}
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                        <p className="text-slate-400 text-[10px]">Stripe Billing Mode</p>
                        <p className="text-white font-bold font-heading">
                          {activePlan === 'pro' ? '$299 / Month (Flat)' : '$1,250 / Month (Metered)'}
                        </p>
                        <p className="text-emerald-400 text-[10px]">Auto-renewal synced</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                        <p className="text-slate-400 text-[10px]">Database Isolation</p>
                        <p className="text-cyan-300 font-bold font-heading">Schema-Level Sharded</p>
                        <p className="text-slate-400 text-[10px]">99.99% Tenant SLA</p>
                      </div>
                    </div>

                    {/* Feature Matrix Checkmarks */}
                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-slate-300">SAML / Okta Single Sign-On (SSO)</span>
                        <span className="text-emerald-400 font-bold">Enabled</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between">
                        <span className="text-slate-300">Automated Webhooks & REST API Keys</span>
                        <span className="text-cyan-400 font-bold">Live v2</span>
                      </div>
                    </div>
                  </div>

                  {/* Window Bottom Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Scalable Multi-Tenant Architecture
                    </span>
                    <span>100% Client IP</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            LAYERS SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  SaaS Engineering
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Every layer of your SaaS platform.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  We build resilient software foundations designed for venture scale, investor due diligence, and frictionless subscriber onboarding.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saasLayers.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div
                      className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.7) 0%, rgba(10, 25, 48, 0.4) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </FadeUp>
                )
              })}
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
                Have a breakthrough SaaS product in mind?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Schedule a confidential architectural consultation. We'll plan your multi-tenant database model, authentication layers, and MVP sprint schedule.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Engineer My SaaS Platform <ArrowRight size={15} />
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
