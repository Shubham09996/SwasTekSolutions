import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, Compass, Users, Layers, Wand2, TestTube2, Sliders } from 'lucide-react'
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

const uxDeliverables = [
  { icon: Compass, title: 'User Research & Personas', desc: 'In-depth user interviews, demographic analysis, and workflow mapping to identify core pain points and behavior patterns.' },
  { icon: Layers, title: 'Information Architecture', desc: 'Intuitive site structures, navigation trees, and content hierarchies that make complex software simple to navigate.' },
  { icon: Sliders, title: 'Low-to-High Wireframing', desc: 'Step-by-step wireframe progression from structural blueprints to pixel-perfect interactive interface mockups.' },
  { icon: Wand2, title: 'Scalable Design Systems', desc: 'Atomic design components, typography tokens, unified states, and style guidelines built for long-term consistency.' },
  { icon: TestTube2, title: 'Usability Testing & QA', desc: 'Real user task execution sessions, heuristic evaluations, and friction-reduction audits to guarantee effortless interaction.' },
  { icon: Users, title: 'SaaS & Enterprise Product UX', desc: 'Streamlined complex dashboards, multi-step onboarding workflows, and mission-critical enterprise operational tools.' },
]

export default function UiUxDesign() {
  return (
    <PageTransition
      title="UX/UI Design Services | SwasTek Solutions"
      description="Human-centered UX research, wireframing, intuitive UI design, and scalable design systems."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label">UX/UI Design</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                User experiences engineered for effortless adoption.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                We combine deep user empathy with data-backed design principles to build interfaces that reduce friction, boost productivity, and delight your users.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Book UX Consultation <ArrowUpRight size={14} />
                </Link>
                <Link to="/work" className="btn-secondary">
                  Explore Case Studies
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, #06152B 0%, #082142 100%)', border: '1px solid rgba(11, 196, 227, 0.3)', boxShadow: '0 20px 50px rgba(6, 21, 43, 0.4)' }}>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="text-sm font-semibold text-white">UX Workflow Studio</span>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono">Figma · Tokens</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">User Journey</p>
                    <p className="text-sm font-bold text-white">4 Step Checkout</p>
                    <div className="mt-3 flex gap-1">
                      <div className="h-1.5 flex-1 bg-cyan-400 rounded-full" />
                      <div className="h-1.5 flex-1 bg-cyan-400 rounded-full" />
                      <div className="h-1.5 flex-1 bg-cyan-400 rounded-full" />
                      <div className="h-1.5 flex-1 bg-cyan-400/30 rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 mb-1">Task Completion</p>
                    <p className="text-sm font-bold text-emerald-400">98.4% Rate</p>
                    <div className="mt-3 h-1.5 w-full bg-emerald-500/30 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 rounded-full" style={{ width: '98%' }} />
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                  <p className="text-xs font-mono text-blue-300">Design System: 120+ Components, 48 Token Variables</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24" style={{ background: '#F8FAFC' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Design Methodology</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              How We Transform Complex Ideas Into Intuitive Interfaces
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uxDeliverables.map((item, i) => {
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
              Build products your users will love using.
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Schedule a UX review session to discover opportunities for simplifying your product workflow.
            </p>
            <Link to="/contact" data-cta className="btn-primary-white">
              Request a UX Audit <ArrowUpRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
