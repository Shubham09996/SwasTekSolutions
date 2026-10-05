import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Smartphone,
  Tablet,
  BellRing,
  WifiOff,
  ShieldCheck,
  Sparkles,
  Lock,
  Layers,
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

const mobileFeatures = [
  {
    icon: Smartphone,
    title: 'iOS & Android Native Performance',
    desc: 'Engineered with React Native and modern native bridging for silky-smooth 60fps frame rates, immediate touch response, and minimal battery drain.',
  },
  {
    icon: WifiOff,
    title: 'Offline-First Engine & Local Sync',
    desc: 'Resilient local SQLite caching that enables full application functionality without internet, auto-syncing with server conflict resolution upon reconnection.',
  },
  {
    icon: ShieldCheck,
    title: 'Biometric Security & Encrypted Keychain',
    desc: 'Hardware-level FaceID and fingerprint authentication with AES-256 encrypted local storage for mission-critical enterprise compliance.',
  },
  {
    icon: BellRing,
    title: 'Targeted Smart Push Notifications',
    desc: 'Automated push notification sequences triggered by user milestones, order state transitions, and background geofencing with deep-linking.',
  },
  {
    icon: Layers,
    title: 'Cross-Platform Codebase Efficiency',
    desc: 'A unified single codebase powering both Apple App Store and Google Play Store builds, reducing ongoing maintenance costs by up to 50%.',
  },
  {
    icon: Sparkles,
    title: 'Complete Store Submission & CI/CD',
    desc: 'End-to-end publishing lifecycle management including Apple developer account provisioning, TestFlight staging, and automated OTA updates.',
  },
]

export default function MobileAppDevelopment() {

  return (
    <PageTransition
      title="Mobile App Development Services | SwasTek Solutions"
      description="High-performance iOS and Android mobile applications built with React Native and native performance. Built for scale and adoption."
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
                background: 'radial-gradient(circle, rgba(91,60,245,0.2) 0%, transparent 68%)',
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
                background: 'radial-gradient(circle, rgba(11,196,227,0.18) 0%, transparent 70%)',
                bottom: '-5%',
                right: '5%',
                filter: 'blur(100px)',
              }}
            />
          </div>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(91,60,245,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

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
                    style={{ background: 'rgba(91,60,245,0.14)', border: '1px solid rgba(91,60,245,0.28)' }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                    </span>
                    <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-indigo-300">
                      iOS & Android Engineering · SwasTek
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
                  Mobile apps that users love<br />
                  <span style={{ background: 'linear-gradient(135deg, #5B3CF5 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    opening every day.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  From consumer apps to high-velocity field workforce platforms, we build intuitive mobile experiences for iOS and Android with 60fps performance and reliable offline synchronization.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Build My Mobile App <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/work" className="btn-secondary">
                    View Live Mobile Work
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>60fps</p>
                    <p className="text-xs text-slate-400">Native UI Performance</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-indigo-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>99.9%</p>
                    <p className="text-xs text-slate-400">Crash-Free Sessions</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>Offline</p>
                    <p className="text-xs text-slate-400">Background Data Sync</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Live Mobile Smartphone App Frame Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex justify-center"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 blur-xl opacity-70 pointer-events-none" />

                {/* Smartphone Device Shell */}
                <div
                  className="relative w-full max-w-[340px] rounded-[36px] p-3 shadow-2xl border"
                  style={{
                    background: 'linear-gradient(180deg, #0A1424 0%, #030810 100%)',
                    borderColor: 'rgba(91,60,245,0.3)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.9), 0 0 40px rgba(91,60,245,0.2)',
                  }}
                >
                  {/* Dynamic Island / Speaker notch */}
                  <div className="flex justify-center mb-3">
                    <div className="w-24 h-4 bg-black/90 rounded-full flex items-center justify-end px-2 border border-white/10">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  {/* App Screen Container */}
                  <div className="bg-[#050D1A] rounded-[26px] p-4 border border-white/5 space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-400">Good morning</p>
                        <p className="text-xs font-bold text-white font-heading">Operations Portal</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2 py-0.5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] text-slate-300 font-mono">60 FPS</span>
                      </div>
                    </div>

                    {/* App Hero Metric Card */}
                    <div
                      className="p-3.5 rounded-2xl border"
                      style={{
                        background: 'linear-gradient(135deg, rgba(91,60,245,0.2) 0%, rgba(11,196,227,0.15) 100%)',
                        borderColor: 'rgba(11,196,227,0.25)',
                      }}
                    >
                      <p className="text-[10px] text-cyan-300 font-semibold mb-0.5">Real-Time Sync</p>
                      <p className="text-base font-extrabold text-white font-heading">Field Service Sync</p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 text-[10px] text-slate-300">
                        <span>Offline Queue: 0 items</span>
                        <span className="text-emerald-400 font-bold">Encrypted AES</span>
                      </div>
                    </div>

                    {/* Action Items List */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quick Actions</p>
                      {[
                        { title: 'Biometric FaceID Login', sub: 'Instant enterprise auth', icon: Lock, color: '#0BC4E3' },
                        { title: 'Offline Order Intake', sub: 'Sync when network connects', icon: WifiOff, color: '#5B3CF5' },
                        { title: 'Real-Time Push Alerts', sub: 'Targeted transactional trigger', icon: BellRing, color: '#10B981' },
                      ].map((item) => {
                        const ItemIcon = item.icon
                        return (
                          <div
                            key={item.title}
                            className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5"
                          >
                            <div
                              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ background: `${item.color}20`, color: item.color }}
                            >
                              <ItemIcon size={13} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-bold text-white truncate font-heading">{item.title}</p>
                              <p className="text-[9px] text-slate-400 truncate">{item.sub}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    {/* App Bottom Navigation Bar */}
                    <div className="pt-2 border-t border-white/10 flex items-center justify-around text-slate-400">
                      <Smartphone size={15} className="text-cyan-400" />
                      <Tablet size={15} />
                      <ShieldCheck size={15} />
                    </div>

                  </div>

                  {/* Home Bar */}
                  <div className="flex justify-center mt-3">
                    <div className="w-28 h-1 bg-white/30 rounded-full" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            FEATURES SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-8 sm:mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-2 sm:mb-3">
                  Mobile Capabilities
                </p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Built for performance, security, and scale.
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We build cross-platform mobile apps that don't cut corners on native performance, offline resilience, or store approval speed.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {mobileFeatures.map((item, i) => {
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
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
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
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-12 sm:py-16 md:py-20 relative border-t border-white/10 bg-gradient-to-b from-[#030914] to-[#02050B]">
          <div className="container-tight text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
                Ready to bring your mobile app to market?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                From technical architecture and interactive prototypes to App Store & Google Play approval, we build mobile apps ready for commercial scale.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Start Mobile App Project <ArrowRight size={15} />
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
