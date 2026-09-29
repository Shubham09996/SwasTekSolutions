// About page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Zap, Shield, Users, Code2, Layers, Brain } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const principles = [
  {
    num: '01',
    icon: Brain,
    title: 'Understand the business, then the technology.',
    desc: "The best solution isn't always the most technically impressive one. It's the one that solves the actual business problem clearly and reliably.",
  },
  {
    num: '02',
    icon: Layers,
    title: 'Design is problem-solving, not decoration.',
    desc: 'We design interfaces that make complex operations simple — for the specific people who will use them every day.',
  },
  {
    num: '03',
    icon: Shield,
    title: "Good software doesn't surprise you.",
    desc: "It does what it's supposed to do, reliably, every time. That's what we build toward.",
  },
  {
    num: '04',
    icon: Users,
    title: 'Long-term partnerships over one-off projects.',
    desc: 'Your software needs to evolve as your business does. We work best with clients who see us as a long-term technology partner.',
  },
]

const capabilities = [
  {
    title: 'Design',
    icon: Layers,
    items: ['UX Research', 'UI Design', 'Interaction Design', 'Design Systems', 'Prototyping'],
  },
  {
    title: 'Engineering',
    icon: Code2,
    items: ['Frontend Development', 'Backend Development', 'API Development', 'Database Architecture', 'Cloud Deployment'],
  },
  {
    title: 'Strategy',
    icon: Brain,
    items: ['Technical Planning', 'Product Strategy', 'Architecture Review', 'Integration Planning', 'Digital Transformation'],
  },
]

const stats = [
  { value: '8+', label: 'Service Areas' },
  { value: '10+', label: 'Industries Served' },
  { value: '100%', label: 'Custom Builds' },
  { value: '7-Step', label: 'Proven Process' },
]

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' })

  return (
    <PageTransition
      title="About | SwasTek Solutions"
      description="We're a software development and digital solutions company that understands business problems and builds practical digital solutions."
    >
      {/* ═══════════════════════════════════════════════════════
          DARK HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
        {/* Grid */}
        <div className="absolute inset-0 hero-grid opacity-100" />
        {/* Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.18) 0%, transparent 68%)', top: '-20%', left: '-8%', filter: 'blur(80px)' }} />
          <div className="orb-2 absolute" style={{ width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,196,227,0.12) 0%, transparent 70%)', bottom: '0%', right: '10%', filter: 'blur(100px)' }} />
        </div>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

        <div className="container-wide relative z-10 pt-36 pb-24">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 mb-10"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue-600)' }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue-500)' }} />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'DM Mono, monospace' }}>
                    About SwasTek
                  </span>
                </div>
              </motion.div>

              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-none text-white"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.04em' }}
                >
                  We're here to make
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
                >
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    technology useful.
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg leading-relaxed mb-10 max-w-lg"
                style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                SwasTek Solutions is a software development and digital solutions company. We help businesses design, build and improve their digital products and internal systems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/contact" data-cta className="btn-primary text-sm">
                  <Zap size={14} />
                  Start a Project
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2.5 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300"
                  style={{ border: '1.5px solid rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.65)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Our Work <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>

            {/* Right — animated stat grid */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl p-7 relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="text-4xl font-bold mb-2 num-display"
                    style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#536880', fontFamily: 'DM Mono, monospace' }}>
                    {s.label}
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #1558D4, transparent)' }} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          PHILOSOPHY
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40" style={{ background: '#F7FAFD' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-20 items-start">
            {/* Left sticky */}
            <div className="lg:sticky lg:top-28">
              <FadeUp>
                <p className="section-label">How we think</p>
                <h2
                  className="font-bold leading-tight mb-6"
                  style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.04em' }}
                >
                  Technology is only as useful as the problem it solves.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  A lot of software projects fail — not because the technology was wrong, but because nobody took the time to understand the problem properly before choosing the technology.
                </p>
              </FadeUp>
            </div>

            {/* Right — principle cards */}
            <div className="space-y-4">
              {principles.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.num} delay={i * 0.09}>
                    <div
                      className="group flex gap-6 p-7 rounded-2xl border transition-all duration-500 hover:-translate-y-1"
                      style={{ background: '#ffffff', borderColor: '#E2EBF5', boxShadow: '0 2px 16px rgba(7,17,31,0.04)' }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ background: 'linear-gradient(135deg, rgba(21,88,212,0.1) 0%, rgba(11,196,227,0.1) 100%)', border: '1px solid rgba(21,88,212,0.12)' }}
                      >
                        <Icon size={20} style={{ color: '#1558D4' }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] font-bold tracking-[0.2em]" style={{ color: '#1558D4', fontFamily: 'DM Mono, monospace' }}>{item.num}</span>
                          <h3 className="font-bold text-base leading-snug" style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>{item.title}</h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CAPABILITIES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-white border-t border-b" style={{ borderColor: '#E2EBF5' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label mb-3">What we do</p>
            <h2
              className="font-bold mb-16"
              style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 3.6rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}
            >
              Design and engineering<br />under one roof.
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon
              return (
                <FadeUp key={cap.title} delay={i * 0.1}>
                  <div
                    className="relative p-8 rounded-3xl overflow-hidden group transition-all duration-500 hover:-translate-y-2"
                    style={{ background: 'linear-gradient(145deg, #F7FAFD 0%, #EEF3FA 100%)', border: '1px solid #E2EBF5', boxShadow: '0 4px 24px rgba(7,17,31,0.04)' }}
                  >
                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at top right, rgba(21,88,212,0.08), transparent 70%)' }} />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, #1558D4 0%, #0BC4E3 100%)', boxShadow: '0 8px 24px rgba(21,88,212,0.25)' }}
                    >
                      <Icon size={24} className="text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-6 pb-4 border-b" style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em', borderColor: '#E2EBF5' }}>
                      {cap.title}
                    </h3>

                    <ul className="space-y-3">
                      {cap.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(21,88,212,0.08)' }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1558D4' }} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TEAM — dark section
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40 relative overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute" style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.12) 0%, transparent 68%)', top: '-10%', right: '0%', filter: 'blur(80px)' }} />
        </div>

        <div className="container-wide relative z-10">
          <FadeUp>
            <p className="section-label mb-3">Our team</p>
            <h2
              className="font-bold text-white mb-4 max-w-2xl"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}
            >
              A team that takes quality personally.
            </h2>
            <p className="text-base leading-relaxed mb-16 max-w-xl" style={{ color: 'rgba(160,175,194,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              SwasTek is built around engineers, designers and strategists who care about the quality of what they produce — not just getting it done.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {[
              { letter: 'A', gradient: 'linear-gradient(135deg, #1558D4 0%, #2570E8 100%)' },
              { letter: 'M', gradient: 'linear-gradient(135deg, #0BC4E3 0%, #38D9F0 100%)' },
              { letter: 'R', gradient: 'linear-gradient(135deg, #5B3CF5 0%, #7C5FF7 100%)' },
              { letter: 'S', gradient: 'linear-gradient(135deg, #1558D4 0%, #0BC4E3 100%)' },
            ].map((member, i) => (
              <FadeUp key={member.letter} delay={i * 0.08}>
                <div
                  className="p-6 rounded-2xl text-center group transition-all duration-500 hover:-translate-y-2"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white transition-all duration-300 group-hover:scale-110"
                    style={{ background: member.gradient, boxShadow: '0 8px 24px rgba(21,88,212,0.3)', fontFamily: 'Sora, sans-serif' }}
                  >
                    {member.letter}
                  </div>
                  <div className="h-3 rounded-full mx-auto mb-2" style={{ background: 'rgba(255,255,255,0.08)', width: '70%' }} />
                  <div className="h-2.5 rounded-full mx-auto" style={{ background: 'rgba(255,255,255,0.05)', width: '50%' }} />
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <p className="text-sm text-center" style={{ color: '#536880', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Team profiles coming soon.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-tight">
          <FadeUp>
            <div
              className="relative rounded-3xl p-12 md:p-20 overflow-hidden text-center"
              style={{ background: 'linear-gradient(145deg, #03080F 0%, #071424 60%, #0D1E34 100%)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div style={{ width: 600, height: 300, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(21,88,212,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
              </div>

              <div className="relative z-10">
                <p className="section-label mb-4">Let's build something</p>
                <h2
                  className="font-bold text-white mb-5"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.04em', lineHeight: 1.08 }}
                >
                  Work with a team that understands your business.
                </h2>
                <p className="text-base mb-10" style={{ color: 'rgba(160,175,194,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Start with a conversation about what you're trying to build.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" data-cta className="btn-primary-white">
                    Start a Project <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/work" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>
                    View Our Work <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
