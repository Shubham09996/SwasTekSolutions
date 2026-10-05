import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Smartphone, Tablet, BellRing, WifiOff, ShieldCheck, Sparkles } from 'lucide-react'
import PageTransition from '../../components/PageTransition'

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

const mobileFeatures = [
  { icon: Smartphone, title: 'iOS & Android Native Performance', desc: 'Crafted with modern cross-platform frameworks (React Native, Flutter) for blazing fast 60fps native feel.' },
  { icon: Tablet, title: 'Adaptive Multi-Device UX', desc: 'Optimized experiences across smartphones, foldables, and tablets with tailored interaction paradigms.' },
  { icon: BellRing, title: 'Intelligent Push Notifications', desc: 'Segmented, actionable push messaging systems that drive active daily engagement and user retention.' },
  { icon: WifiOff, title: 'Offline Mode & Local Sync', desc: 'Resilient offline data caching with automated conflict resolution when connectivity is restored.' },
  { icon: ShieldCheck, title: 'Biometric & Secure Storage', desc: 'Enterprise security standards including FaceID, fingerprint authentication, and encrypted local storage.' },
  { icon: Sparkles, title: 'App Store & Play Store Publishing', desc: 'Complete release management from app signing and testing to review approval and analytics setup.' },
]

export default function MobileAppDevelopment() {
  return (
    <PageTransition
      title="Mobile App Development | SwasTek Solutions"
      description="High-performance iOS and Android mobile applications built for smooth user adoption and scale."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label">Mobile App Development</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Mobile apps that people love to use every day.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                From consumer applications to enterprise field worker tools, we build reliable, intuitive mobile apps for iOS and Android that deliver smooth performance and real business value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Build My App <ArrowUpRight size={14} />
                </Link>
                <Link to="/work" className="btn-secondary">
                  View App Projects
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, #07172C 0%, #0D2C54 100%)', border: '1px solid rgba(11, 196, 227, 0.35)', boxShadow: '0 20px 50px rgba(7, 23, 44, 0.4)' }}>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} className="text-cyan-400" />
                    <span className="text-sm font-semibold text-white">Cross-Platform App Suite</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">iOS & Android</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">Architecture</p>
                    <p className="text-sm font-bold text-white">React Native / Flutter</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">Crash-free Rate</p>
                    <p className="text-sm font-bold text-cyan-400">99.9% Target</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">Data Sync</p>
                    <p className="text-sm font-bold text-white">Offline-First Engine</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">Auth & Security</p>
                    <p className="text-sm font-bold text-white">Biometric FaceID</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24" style={{ background: '#F8FAFC' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Mobile Capabilities</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Built for Scale, Security, and Seamless Performance
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mobileFeatures.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeUp key={item.title} delay={i * 0.08}>
                  <div className="p-8 bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderColor: '#E2EBF5' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(11,196,227,0.1)', color: '#0BC4E3' }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#536880', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {item.desc}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #07111F 0%, #0A1E38 100%)' }}>
        <div className="container-tight text-center">
          <FadeUp>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Ready to bring your mobile app idea to life?
            </h2>
            <p className="text-base sm:text-lg mb-8 max-w-xl mx-auto text-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              From initial wireframes to production deployment in the App Store and Google Play, we handle the entire process.
            </p>
            <Link to="/contact" data-cta className="btn-primary-white shadow-lg shadow-white/10">
              Start Mobile App Project <ArrowUpRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
