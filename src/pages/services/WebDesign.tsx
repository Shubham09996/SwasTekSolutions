import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Palette, Layout, Sparkles, Smartphone, Eye, CheckCircle2 } from 'lucide-react'
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

const designCapabilities = [
  { icon: Palette, title: 'Visual Brand Identity', desc: 'Distinct color palettes, bespoke typography systems, and modern digital aesthetics that make your brand memorable.' },
  { icon: Layout, title: 'High-Converting Landing Pages', desc: 'Purpose-driven page structures engineered to capture attention, communicate value, and maximize conversion rates.' },
  { icon: Smartphone, title: 'Responsive Multi-Device Layouts', desc: 'Flawless visual hierarchy across desktop, tablet, and mobile with fluid grids and precision spacing.' },
  { icon: Eye, title: 'Interactive Prototypes', desc: 'High-fidelity Figma prototypes with realistic micro-interactions and transitions to validate before development.' },
  { icon: Sparkles, title: 'Micro-Animations & Motion', desc: 'Subtle motion graphics and interactive feedback that elevate user perception and create delightful experiences.' },
  { icon: CheckCircle2, title: 'Design System Guidelines', desc: 'Comprehensive component libraries, style tokens, and documentation ready for pixel-perfect developer handoff.' },
]

export default function WebDesign() {
  return (
    <PageTransition
      title="Web Design Services | SwasTek Solutions"
      description="Modern, conversion-focused web design and visual brand experiences tailored to your business."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label">Web Design</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Designs that captivate, communicate, and convert.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                We create striking, modern visual web designs that communicate your unique value proposition clearly. Every layout, typography choice, and color accent is crafted with purpose.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Start Design Project <ArrowUpRight size={14} />
                </Link>
                <Link to="/work" className="btn-secondary">
                  View Our Portfolio
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, #07111F 0%, #0A1E38 100%)', border: '1px solid rgba(21, 136, 255, 0.25)', boxShadow: '0 20px 50px rgba(7, 17, 31, 0.4)' }}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="text-xs font-mono ml-2 text-slate-400">swastek.design/preview</span>
                </div>
                <div className="space-y-4">
                  <div className="h-6 w-1/3 rounded-md bg-blue-500/20 border border-blue-400/30" />
                  <div className="h-10 w-4/5 rounded-lg bg-white/10" />
                  <div className="h-4 w-full rounded bg-slate-700/40" />
                  <div className="h-4 w-3/4 rounded bg-slate-700/40" />
                  <div className="grid grid-cols-3 gap-3 pt-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <Palette size={20} className="mx-auto mb-2 text-cyan-400" />
                      <span className="text-xs text-slate-300 font-medium">Bespoke UI</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <Layout size={20} className="mx-auto mb-2 text-blue-400" />
                      <span className="text-xs text-slate-300 font-medium">Fluid Grids</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                      <Sparkles size={20} className="mx-auto mb-2 text-indigo-400" />
                      <span className="text-xs text-slate-300 font-medium">Micro-Motion</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24" style={{ background: '#F8FAFC' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">What We Deliver</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Comprehensive Web Design Capabilities
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designCapabilities.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeUp key={item.title} delay={i * 0.08}>
                  <div className="p-8 bg-white rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1" style={{ borderColor: '#E2EBF5' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(21,88,212,0.08)', color: '#1558D4' }}>
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
              Ready to elevate your online presence?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Let's create a tailored web design that reflects your excellence and drives real business growth.
            </p>
            <Link to="/contact" data-cta className="btn-primary-white">
              Start Your Design Project <ArrowUpRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
