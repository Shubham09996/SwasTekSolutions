import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ShoppingBag,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  Package,
  Layers,
  Zap,
  CheckCircle2,
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

const ecommerceLayers = [
  {
    title: 'Custom Brand Storefronts',
    desc: 'Uniquely designed conversion layouts tailored to your brand identity—never limited by cookie-cutter Shopify templates.',
    icon: ShoppingBag,
  },
  {
    title: 'Frictionless 1-Click Checkout',
    desc: 'Ultra-fast checkout flows with Stripe, Razorpay, Apple Pay, Google Pay, and localized multi-currency support.',
    icon: CreditCard,
  },
  {
    title: 'Dynamic Product Catalog & Search',
    desc: 'Instant facet filtering, variant matrices, multi-tiered pricing, and sub-second instant search with Algolia / Meilisearch.',
    icon: Layers,
  },
  {
    title: 'Automated Order & Inventory Sync',
    desc: 'Bi-directional inventory synchronisation across multiple warehouses, automated fulfillment notifications, and supplier webhooks.',
    icon: Package,
  },
  {
    title: 'Wholesale B2B & Customer Accounts',
    desc: 'Tiered wholesale pricing, tax-exempt orders, automated PO invoicing, re-order history, and dedicated account management.',
    icon: ShieldCheck,
  },
  {
    title: 'Conversion Rate Optimization (CRO)',
    desc: 'Built-in abandoned cart recovery sequences, dynamic upsells, slide-out cart drawers, and real-time checkout analytics.',
    icon: TrendingUp,
  },
]

export default function Ecommerce() {
  const [cartCount] = useState(2)

  return (
    <PageTransition
      title="E-Commerce Development Services | SwasTek Solutions"
      description="Custom e-commerce platforms, friction-free checkout flows, and high-conversion storefronts built to scale your revenue."
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
                  className="flex items-center gap-2 mb-6"
                >
                  <div
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                    style={{ background: 'rgba(21,88,212,0.14)', border: '1px solid rgba(21,88,212,0.25)' }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-cyan-300">
                      High-Conversion Storefronts · SwasTek
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
                  Storefronts built around the way<br />
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    your customers buy.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  Custom digital storefronts, friction-free checkout flows, and intelligent order management systems architected to match your exact commercial model without template limitations.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Build My Custom Store <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Live Storefronts
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>+38%</p>
                    <p className="text-xs text-slate-400">Checkout Conversion Lift</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>&lt; 1.2s</p>
                    <p className="text-xs text-slate-400">Sub-Second Catalog Load</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>0%</p>
                    <p className="text-xs text-slate-400">Shopify App Monthly Bloat</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Live High-Conversion Cart & Checkout Preview */}
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
                        SwasTek Commerce Engine · Live Cart Drawer
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 size={11} /> 1-Click Ready
                    </span>
                  </div>

                  {/* Cart Body */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <div>
                        <p className="text-xs text-slate-400">Order Summary</p>
                        <p className="text-sm font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                          Bespoke Digital Storefront Cart
                        </p>
                      </div>
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                        {cartCount} Items
                      </span>
                    </div>

                    {/* Cart Items */}
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-cyan-300 font-bold text-xs border border-blue-500/30">
                            PRO
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white font-heading">Enterprise Hardware Suite</p>
                            <p className="text-[10px] text-slate-400">Custom SKU · Qty: 1</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white font-mono">$1,850.00</span>
                      </div>

                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold text-xs border border-cyan-500/30">
                            SVC
                          </div>
                          <div>
                            <p className="text-xs font-bold text-white font-heading">Dedicated Cloud Setup</p>
                            <p className="text-[10px] text-slate-400">Priority SLA · Qty: 1</p>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-white font-mono">$450.00</span>
                      </div>
                    </div>

                    {/* Total & Checkout Bar */}
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>Subtotal</span>
                        <span className="font-mono text-white font-bold">$2,300.00</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>Estimated Shipping</span>
                        <span className="text-emerald-400 font-bold">Free Next-Day</span>
                      </div>
                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-sm font-bold text-white font-heading">
                        <span>Total Due</span>
                        <span className="text-cyan-400 font-mono text-base">$2,300.00</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                        <ShieldCheck size={13} className="text-cyan-400" />
                        <span>Stripe / Apple Pay</span>
                      </div>
                      <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                        <Zap size={13} className="text-emerald-400" />
                        <span>Instant Order Intake</span>
                      </div>
                    </div>
                  </div>

                  {/* Window Bottom */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      PCI-DSS Level 1 Encrypted
                    </span>
                    <span>Multi-Currency Gateway</span>
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
                  Commerce Architecture
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Every layer of your digital store.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  We engineer modern e-commerce architectures that load instantly, streamline customer purchasing, and scale seamlessly during peak traffic spikes.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecommerceLayers.map((item, i) => {
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
                Ready to build a high-conversion storefront?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Tell us about your products, commercial channels, and revenue goals. We will architect a bespoke e-commerce store that maximizes sales.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Build My Custom Store <ArrowRight size={15} />
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
