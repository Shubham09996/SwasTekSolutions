// Home page — SwasTek Solutions (ULTRA-PREMIUM NEXT LEVEL)
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

/* ─────────────────────────────────────────────────────────── */
/*  DATA                                                        */
/* ─────────────────────────────────────────────────────────── */
const servicesList = [
  { num: '01', title: 'Web Design', href: '/services/web-design', desc: 'Modern, high-converting visual layouts and brand experiences crafted for digital impact.', tags: ['Visual Design', 'Brand Identity', 'Responsive UI'] },
  { num: '02', title: 'UX/UI Design', href: '/services/ui-ux-design', desc: 'Human-centered user experience, wireframes, intuitive interfaces, and scalable design systems.', tags: ['UX Research', 'Wireframing', 'Design Systems'] },
  { num: '03', title: 'IT Strategy Consulting', href: '/services/it-strategy-consulting', desc: 'Strategic technology advisory, system architecture planning, cloud migration, and tech audits.', tags: ['Digital Strategy', 'Architecture', 'Tech Audits'] },
  { num: '04', title: 'Custom Software Development', href: '/services/custom-software', desc: 'Purpose-built business platforms, internal tools, and operations systems designed for how you work.', tags: ['Internal Tools', 'Enterprise Software', 'Workflow Automation'] },
  { num: '05', title: 'CRM Development', href: '/services/crm-development', desc: 'Custom CRM systems tailored to your sales pipeline, client onboarding, and lead management.', tags: ['Sales Pipeline', 'Lead Management', 'Client Portals'] },
  { num: '06', title: 'Web Development', href: '/services/web-development', desc: 'Fast, secure, and scalable web platforms built with cutting-edge fullstack engineering.', tags: ['Fullstack Web', 'Web Portals', 'Performance & SEO'] },
  { num: '07', title: 'Mobile App Development', href: '/services/mobile-app-development', desc: 'Cross-platform iOS and Android apps with smooth native performance and high user retention.', tags: ['iOS & Android', 'Cross-Platform', 'Native APIs'] },
  { num: '08', title: 'E-Commerce Development', href: '/services/ecommerce', desc: 'High-conversion online storefronts, checkout systems, inventory management, and custom catalogs.', tags: ['Custom Storefronts', 'Payment Gateways', 'Order Systems'] },
]

const projects = [
  { id: 'alpha-crm', title: 'Enterprise CRM Platform', industry: 'Professional Services', services: 'Custom CRM, API Integrations', desc: 'A full CRM built from the ground up for a multi-division professional services firm, replacing three disconnected legacy tools.', bg: '#0A1828', accent: '#1558D4', accentSoft: 'rgba(21,88,212,0.15)', isLight: false },
  { id: 'retail-platform', title: 'Retail Operations Platform', industry: 'Retail & E-commerce', services: 'Web Application, Admin Dashboard', desc: 'A centralised operations dashboard giving store managers, buyers and logistics teams a single view of inventory, orders and performance.', bg: '#EEF3FA', accent: '#1558D4', accentSoft: 'rgba(21,88,212,0.08)', isLight: true },
  { id: 'property-saas', title: 'Property Management SaaS', industry: 'Real Estate', services: 'SaaS Development, UI/UX Design', desc: 'A multi-tenant property management platform for estate agencies to manage properties, tenants, maintenance and financials.', bg: '#050E1A', accent: '#0BC4E3', accentSoft: 'rgba(11,196,227,0.15)', isLight: false },
]

const industries = ['Real Estate', 'Construction', 'Finance', 'Healthcare', 'Logistics', 'Retail', 'Education', 'Professional Services', 'E-commerce', 'Startups']

const industryContent: Record<string, { desc: string; challenges: string[]; solutions: string[] }> = {
  'Real Estate': { desc: 'Property businesses need tools for managing listings, clients, viewings and transactions — all in one place, accessible from anywhere.', challenges: ['Managing large property databases', 'Tracking client relationships across long sales cycles', 'Coordinating viewings and team calendars'], solutions: ['Custom property management platforms', 'CRM built for real estate workflows', 'Client portals and document management'] },
  'Construction': { desc: 'Construction businesses deal with complex project hierarchies, subcontractors, compliance requirements and tight margins.', challenges: ['Project cost tracking across multiple sites', 'Subcontractor and compliance documentation', 'Job progress reporting for clients'], solutions: ['Project management systems', 'Compliance and documentation tools', 'Client-facing reporting dashboards'] },
  'Finance': { desc: 'Financial services require precise, secure and auditable systems for managing clients, transactions and compliance obligations.', challenges: ['Regulatory compliance and audit trails', 'Secure client data management', 'Reporting and portfolio visibility'], solutions: ['Secure client portals', 'Compliance management systems', 'Reporting and analytics dashboards'] },
  'Healthcare': { desc: 'Healthcare providers need reliable, secure software for patient management, scheduling and internal operations.', challenges: ['Secure patient record management', 'Appointment and resource scheduling', 'Cross-team communication'], solutions: ['Patient management systems', 'Booking and scheduling platforms', 'Secure staff communication tools'] },
  'Logistics': { desc: 'Logistics businesses rely on real-time visibility of shipments, vehicles, warehouses and delivery operations.', challenges: ['Real-time shipment tracking', 'Warehouse and fleet management', 'Customer delivery communication'], solutions: ['Operations dashboards', 'Shipment tracking platforms', 'Driver and customer apps'] },
  'Retail': { desc: 'Modern retail businesses need tools that connect their online and offline operations, inventory and customer relationships.', challenges: ['Inventory management across channels', 'Customer loyalty and CRM', 'Order management and fulfilment'], solutions: ['Custom e-commerce platforms', 'Inventory management systems', 'Retail CRM and loyalty tools'] },
  'Education': { desc: 'Education providers need platforms for course delivery, student management, assessments and administrative operations.', challenges: ['Student engagement and progress tracking', 'Course management and delivery', 'Administrative complexity'], solutions: ['Learning management systems', 'Student portals', 'Administrative automation tools'] },
  'Professional Services': { desc: 'Consultancies, agencies and professional practices need systems that manage clients, projects, billing and team output.', challenges: ['Project and time tracking', 'Client relationship management', 'Billing and reporting accuracy'], solutions: ['Custom CRM platforms', 'Project management systems', 'Client billing and reporting tools'] },
  'E-commerce': { desc: 'Online retailers need more than just a storefront — they need the operations infrastructure behind it.', challenges: ['Scalable storefront performance', 'Inventory and fulfilment integration', 'Customer account management'], solutions: ['Custom e-commerce platforms', 'Admin and operations dashboards', 'API integrations with logistics partners'] },
  'Startups': { desc: 'Startups need to build the right thing fast — MVPs that validate ideas and platforms that can scale with growth.', challenges: ['Building fast without wasting budget', 'Validating product assumptions', 'Scaling architecture as users grow'], solutions: ['MVP development', 'SaaS product development', 'Technical strategy and architecture'] },
}

const processSteps = [
  { num: '01', title: 'Understand', desc: 'We learn your business before we write a line of code.', icon: '🎯' },
  { num: '02', title: 'Plan', desc: 'A clear scope, timeline and technology plan.', icon: '📐' },
  { num: '03', title: 'Design', desc: 'Interfaces built for your users, not for aesthetics alone.', icon: '✦' },
  { num: '04', title: 'Build', desc: 'Clean, maintainable engineering with regular check-ins.', icon: '⚡' },
  { num: '05', title: 'Test', desc: 'Rigorous QA before anything goes near your users.', icon: '🔍' },
  { num: '06', title: 'Launch', desc: 'Smooth, coordinated deployment with zero surprises.', icon: '🚀' },
  { num: '07', title: 'Support', desc: 'We stay involved after launch. Your software evolves.', icon: '♾️' },
]

const ticker1 = ['Website Development', 'Custom Software', 'CRM Platforms', 'SaaS Products', 'Web Applications', 'Business Automation', 'API Integrations', 'E-commerce']
const ticker2 = ['Real Estate', 'Construction', 'Finance', 'Healthcare', 'Logistics', 'Retail', 'Education', 'Professional Services', 'Startups']

/* ─────────────────────────────────────────────────────────── */
/*  HELPERS                                                     */
/* ─────────────────────────────────────────────────────────── */

// Stat counter
function StatCounter({ value, suffix, label, delay = 0 }: { value: number; suffix: string; label: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)
  const triggered = useRef(false)

  useEffect(() => {
    if (inView && !triggered.current) {
      triggered.current = true
      const timeout = setTimeout(() => {
        const duration = 1800
        const steps = duration / 16
        const step = value / steps
        let current = 0
        const timer = setInterval(() => {
          current += step
          if (current >= value) { setCount(value); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, 16)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [inView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center py-12 px-6 group relative overflow-hidden"
    >
      <div
        className="num-display text-5xl md:text-6xl mb-2 tabular-nums num-gradient"
      >
        {count}{suffix}
      </div>
      <p className="text-sm font-semibold" style={{ color: '#334155', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{label}</p>
    </motion.div>
  )
}

// Marquee row
function MarqueeRow({ items, reverse = false, dimmed = false }: { items: string[]; reverse?: boolean; dimmed?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden py-3">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-7 px-7 flex-shrink-0">
            <span
              className="text-xs font-bold tracking-[0.12em] uppercase whitespace-nowrap"
              style={{ color: dimmed ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.85)', fontFamily: 'DM Mono, monospace' }}
            >
              {item}
            </span>
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: dimmed ? 'rgba(21,88,212,0.45)' : 'rgba(21,88,212,0.9)' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Star field canvas
function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.006 + 0.002,
      phase: Math.random() * Math.PI * 2,
    }))

    let frame = 0
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const t = frame * 0.015
      stars.forEach(s => {
        const a = 0.1 + 0.55 * Math.abs(Math.sin(t * s.speed * 60 + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,210,255,${a})`
        ctx.fill()
      })
      frame++
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, opacity: 0.65 }}
    />
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN COMPONENT                                             */
/* ─────────────────────────────────────────────────────────── */
export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [activeIndustry, setActiveIndustry] = useState('Real Estate')
  const [hoveredWork, setHoveredWork] = useState<number | null>(null)

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.97])
  const smoothY = useSpring(heroY, { stiffness: 60, damping: 20 })

  return (
    <PageTransition title="SwasTek Solutions | From Ideas to Digital Solutions" description="We design and build websites, custom software, CRM platforms and digital systems around the way your business works.">

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative overflow-hidden grain-overlay min-h-screen flex flex-col" style={{ background: 'var(--void)' }}>

        {/* ── Background layers ── */}
        {/* Grid */}
        <div className="absolute inset-0 hero-grid opacity-100" />

        {/* Star field */}
        <StarField />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Primary blue orb */}
          <div className="orb-1 absolute" style={{ width: 900, height: 900, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.20) 0%, transparent 68%)', top: '-20%', left: '-12%', filter: 'blur(80px)' }} />
          {/* Cyan orb */}
          <div className="orb-2 absolute" style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,196,227,0.14) 0%, transparent 70%)', bottom: '-5%', right: '5%', filter: 'blur(100px)' }} />
          {/* Purple depth */}
          <div className="orb-3 absolute" style={{ width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,60,245,0.10) 0%, transparent 70%)', top: '30%', right: '20%', filter: 'blur(80px)' }} />
          {/* Subtle mid orb */}
          <div className="orb-4 absolute" style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.12) 0%, transparent 70%)', top: '60%', left: '40%', filter: 'blur(60px)' }} />
        </div>

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

        {/* Scanline depth overlay */}
        <div className="absolute inset-0 hero-scanlines opacity-100 pointer-events-none" style={{ zIndex: 2 }} />

        {/* Content — two column: left text, right lottie */}
        <motion.div
          className="container-wide relative z-10 pt-24 md:pt-28 pb-10 md:pb-14 flex-1 flex flex-col justify-center"
          style={{ opacity: heroOpacity, scale: heroScale, y: smoothY }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_440px] lg:grid-cols-[1fr_560px] xl:grid-cols-[1fr_620px] gap-6 xl:gap-10 items-center">

            {/* ── LEFT: Text content ── */}
            <div>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue-600)' }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue-500)' }} />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'DM Mono, monospace' }}>
                    From Ideas to Digital Solutions
                  </span>
                </div>
              </motion.div>

              {/* Headline (staggered word reveal) */}
              <div className="mb-4">
                <div className="overflow-hidden mb-2">
                  <motion.div
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h1
                      className="leading-none text-white text-glow-blue"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 5rem)', letterSpacing: '-0.045em' }}
                    >
                      Technology built
                    </h1>
                  </motion.div>
                </div>
                <div className="overflow-hidden mb-2">
                  <motion.div
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h1
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 5rem)', letterSpacing: '-0.045em', lineHeight: 1 }}
                    >
                      <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.22)', WebkitTextFillColor: 'transparent' }}>around</span>
                      {' '}
                      <span
                        className="shimmer-text"
                        style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 5rem)', letterSpacing: '-0.045em' }}
                      >
                        your
                      </span>
                    </h1>
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: '105%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.27, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h1
                      className="leading-none text-white"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 5rem)', letterSpacing: '-0.045em' }}
                    >
                      business.
                    </h1>
                  </motion.div>
                </div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.44 }}
                className="text-base leading-relaxed mb-5 max-w-lg"
                style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                We design and build websites, custom software, CRM platforms and digital systems — shaped around the specific way your business operates.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-3 mb-6"
              >
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" data-cta className="btn-primary ripple-btn text-sm">
                    <Zap size={14} />
                    Start a Project
                    <ArrowUpRight size={14} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2.5 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300"
                    style={{ border: '1.5px solid rgba(255,255,255,0.13)', color: 'rgba(255,255,255,0.65)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    View Our Work <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Proof row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.68 }}
                className="flex flex-wrap items-center gap-8 pt-8 border-t"
                style={{ borderColor: 'rgba(255,255,255,0.09)' }}
              >
                {[
                  { n: '8+', l: 'Service areas' },
                  { n: '10+', l: 'Industries served' },
                  { n: '100%', l: 'Bespoke builds' },
                ].map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.08 }}
                  >
                    <div className="text-2xl font-bold text-white mb-0.5 tracking-tight" style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.04em' }}>{s.n}</div>
                    <div className="text-xs font-semibold" style={{ color: '#94A3B8', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em' }}>{s.l}</div>
                  </motion.div>
                ))}
                <div className="hidden sm:block h-8 w-px" style={{ background: 'rgba(255,255,255,0.09)' }} />
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.92 }}
                >
                  <div className="flex -space-x-2">
                    {['A', 'M', 'R', 'S'].map((l, i) => (
                      <div key={l} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white" style={{ background: `hsl(${210 + i * 22}, 78%, 46%)`, borderColor: 'var(--void)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {l}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-semibold" style={{ color: '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Trusted by growing businesses</p>
                </motion.div>
              </motion.div>
            </div>

            {/* ── RIGHT: Lottie animation ── */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center relative overflow-hidden"
            >
              {/* Glow ring behind animation */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(21,88,212,0.18) 0%, rgba(11,196,227,0.08) 50%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.15)',
                }}
              />
              <DotLottieReact
                src="https://lottie.host/11089e25-ba16-45bc-9fbb-2a87a616230f/jzW9fPFMl4.lottie"
                loop
                autoplay
                style={{ width: '100%', height: 'clamp(240px, 55vw, 720px)' }}
              />
            </motion.div>

          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Mono, monospace' }}>Scroll</span>
            <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(21,136,255,0.8), transparent)' }} />
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TICKER STRIP
      ══════════════════════════════════════════════════════════ */}
      <section className="border-t border-b overflow-hidden" style={{ background: '#060D18', borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          <MarqueeRow items={ticker1} dimmed />
        </div>
        <div>
          <MarqueeRow items={ticker2} reverse />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          STAT COUNTERS
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b overflow-hidden" style={{ borderColor: '#E2EBF5' }}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
            <StatCounter value={8} suffix="+" label="Core service areas" delay={0} />
            <StatCounter value={10} suffix="+" label="Industries served" delay={80} />
            <StatCounter value={7} suffix="-step" label="Proven build process" delay={160} />
            <StatCounter value={100} suffix="%" label="Custom-built solutions" delay={240} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT WE BUILD — editorial large-number list
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-white">
        <div className="container-wide">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1.7fr] gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="section-label">What we build</p>
              <h2 style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}>
                Digital products for real requirements.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-lg leading-relaxed self-end"
              style={{ color: '#334155', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Not generic templates or off-the-shelf assumptions. Every product we build is designed around the specific way your business operates — from the first conversation to the final line of code.
            </motion.p>
          </div>

          {/* Service rows */}
          <div className="border-t-2" style={{ borderColor: '#07111F' }}>
            {servicesList.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <Link
                  to={s.href}
                  className="group block border-b relative overflow-hidden"
                  style={{ borderColor: '#E2EBF5' }}
                  onMouseEnter={() => setActiveService(i)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Hover fill (slide from left) */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeService === i ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ background: 'var(--void)', transformOrigin: 'left' }}
                  />

                  <div className="relative z-10 grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_260px_auto] items-center gap-6 py-7 px-2">
                    {/* Number */}
                    <span
                      className="font-bold leading-none transition-colors duration-350"
                      style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', color: activeService === i ? 'rgba(21,136,255,0.3)' : '#E2EBF5', letterSpacing: '-0.04em' }}
                    >
                      {s.num}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-bold text-xl md:text-2xl transition-colors duration-300"
                      style={{ color: activeService === i ? '#ffffff' : '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
                    >
                      {s.title}
                    </h3>

                    {/* Tags (desktop) */}
                    <div className="hidden md:flex flex-wrap gap-2">
                      {s.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full transition-all duration-300 font-medium"
                          style={{
                            background: activeService === i ? 'rgba(21,88,212,0.18)' : '#E2EBF5',
                            color: activeService === i ? '#4A8FF5' : '#334155',
                            fontFamily: 'DM Mono, monospace',
                            letterSpacing: '0.04em',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Arrow */}
                    <motion.div
                      animate={{ x: activeService === i ? 3 : 0, y: activeService === i ? -3 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ArrowUpRight
                        size={20}
                        className="flex-shrink-0 transition-colors duration-300"
                        style={{ color: activeService === i ? '#1558D4' : '#94A3B8' }}
                      />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10"
          >
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: '#1558D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <span className="underline-reveal">View all services</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED WORK
      ══════════════════════════════════════════════════════════ */}
      <section className="py-0 bg-white border-t-2" style={{ borderColor: '#07111F' }}>
        {/* Section header */}
        <div className="container-wide py-16">
          <div className="flex items-end justify-between">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <p className="section-label">Selected work</p>
              <h2 style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}>
                Projects we're<br />proud of.
              </h2>
            </motion.div>
            <Link to="/work" className="hidden md:flex items-center gap-2 text-sm font-semibold group link-lift" style={{ color: '#1558D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <span className="underline-reveal">All projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Project cards */}
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to={`/work/${p.id}`}
              className="block group relative border-t"
              style={{ borderColor: p.isLight ? '#E2EBF5' : 'rgba(255,255,255,0.05)' }}
              onMouseEnter={() => setHoveredWork(i)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <div
                className="min-h-[52vh] md:min-h-[56vh] flex flex-col md:flex-row items-stretch relative overflow-hidden"
                style={{ background: p.bg }}
              >
                {/* Content */}
                <div className={`flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-between ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="chip-dark text-[10px]" style={{ color: p.accent, background: `${p.accent}18`, borderColor: `${p.accent}25`, fontFamily: 'DM Mono, monospace' }}>
                        {p.industry}
                      </span>
                    </div>
                    <h3
                      className="font-bold mb-5 leading-tight"
                      style={{ color: p.isLight ? '#07111F' : '#ffffff', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.035em' }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-base leading-relaxed max-w-lg" style={{ color: p.isLight ? '#334155' : '#CBD5E1', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-10">
                    <p className="text-xs font-semibold" style={{ color: p.isLight ? '#475569' : '#94A3B8', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em' }}>{p.services}</p>
                    <div className="flex-1 h-px" style={{ background: p.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.12)' }} />
                    <motion.div
                      className="flex items-center gap-2 text-sm font-semibold"
                      animate={{ x: hoveredWork === i ? 6 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ color: p.isLight ? p.accent : '#0BC4E3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      View case study <ArrowUpRight size={14} />
                    </motion.div>
                  </div>
                </div>

                {/* Visual panel */}
                <div className="hidden md:flex flex-1 items-center justify-center relative" style={{ background: p.accentSoft, minHeight: 320 }}>
                  {/* Animated geometric art */}
                  <div className="relative w-56 h-56">
                    <motion.div
                      className="absolute inset-0 rounded-3xl border"
                      style={{ borderColor: `${p.accent}35` }}
                      animate={{ rotate: hoveredWork === i ? -2 : -6, scale: hoveredWork === i ? 1.1 : 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.div
                      className="absolute inset-5 rounded-2xl border"
                      style={{ borderColor: `${p.accent}22` }}
                      animate={{ rotate: hoveredWork === i ? 1 : 3, scale: hoveredWork === i ? 1.05 : 1 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <motion.div
                      className="absolute inset-10 rounded-2xl flex items-center justify-center"
                      style={{ background: `${p.accent}18` }}
                      animate={{ scale: hoveredWork === i ? 1.08 : 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-1 num-display" style={{ color: p.accent, letterSpacing: '-0.05em' }}>
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: `${p.accent}99`, fontFamily: 'DM Mono, monospace' }}>Case Study</div>
                      </div>
                    </motion.div>
                  </div>
                  {/* Corner label */}
                  <div className="absolute bottom-8 right-8">
                    <p className="text-xs font-bold tracking-wider uppercase" style={{ color: `${p.accent}70`, fontFamily: 'DM Mono, monospace' }}>{p.industry}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* ══════════════════════════════════════════════════════════
          INDUSTRIES — dark spotlight grid
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40" style={{ background: 'var(--void)' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-start">
            {/* Left sticky */}
            <div className="lg:sticky lg:top-32">
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="section-label mb-4">Industries</p>
                <h2
                  className="font-bold leading-[1.06] tracking-tight text-white mb-6 text-glow-blue"
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', letterSpacing: '-0.04em' }}
                >
                  Software for how your industry works.
                </h2>
                <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(160, 175, 194, 0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Different sectors have different workflows, compliance requirements and operational rhythms. We build software around yours — not a generic template.
                </p>
                <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold group link-lift" style={{ color: '#0BC4E3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  <span className="underline-reveal">View all industries</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>

            {/* Right: animated industry detail */}
            <div>
              {/* Industry tabs */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {industries.map((ind) => (
                  <motion.button
                    key={ind}
                    onClick={() => setActiveIndustry(ind)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="text-xs font-bold px-4 py-2 rounded-full transition-all duration-200"
                    style={{
                      background: activeIndustry === ind ? 'linear-gradient(135deg, #1558D4, #0BC4E3)' : 'rgba(255,255,255,0.08)',
                      color: activeIndustry === ind ? '#ffffff' : '#CBD5E1',
                      fontFamily: 'DM Mono, monospace',
                      letterSpacing: '0.06em',
                      border: '1px solid',
                      borderColor: activeIndustry === ind ? 'rgba(11,196,227,0.5)' : 'rgba(255,255,255,0.14)',
                      boxShadow: activeIndustry === ind ? '0 0 20px rgba(21, 88, 212, 0.45)' : 'none',
                    }}
                  >
                    {ind}
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl p-8 md:p-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(14, 34, 68, 0.75) 0%, rgba(7, 18, 36, 0.92) 100%)',
                    border: '1px solid rgba(21, 136, 255, 0.28)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(16px)',
                  }}
                >
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}>{activeIndustry}</h3>
                  <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: '#CBD5E1', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {industryContent[activeIndustry]?.desc}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 font-mono-accent" style={{ color: '#4A90F5' }}>Challenges</p>
                      <ul className="space-y-3">
                        {industryContent[activeIndustry]?.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm" style={{ color: '#E2EBF5', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#1558D4', boxShadow: '0 0 8px rgba(21,88,212,0.8)' }} />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 font-mono-accent" style={{ color: '#0BC4E3' }}>What we build</p>
                      <ul className="space-y-3">
                        {industryContent[activeIndustry]?.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-sm" style={{ color: '#E2EBF5', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            <span className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0BC4E3', boxShadow: '0 0 8px rgba(11,196,227,0.8)' }} />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                    <Link
                      to={`/industries/${activeIndustry.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace('--', '-')}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 group"
                      style={{ color: '#0BC4E3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      <span>Learn more about {activeIndustry}</span>
                      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROCESS — horizontal numbered steps
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40 bg-white border-t" style={{ borderColor: '#E2EBF5' }}>
        <div className="container-wide">
          <div className="flex items-end justify-between mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <p className="section-label">How we work</p>
              <h2 style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}>
                A process built for<br />real-world delivery.
              </h2>
            </motion.div>
            <Link to="/process" className="hidden md:flex items-center gap-2 text-sm font-semibold group link-lift" style={{ color: '#1558D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <span className="underline-reveal">Full process</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Steps grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#CBD5E1]" style={{ border: '1px solid #CBD5E1' }}>
            {processSteps.slice(0, 4).map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-8 group hover:bg-[#EEF3FA] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1558D4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-mono-accent text-xs font-bold mb-4 block" style={{ color: '#64748B' }}>{step.num}</span>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-bold mb-2 text-lg" style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#334155', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{step.desc}</p>
              </motion.div>
            ))}
            {processSteps.slice(4).map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 4) * 0.07 }}
                className="bg-white p-8 group hover:bg-[#EEF3FA] transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0BC4E3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-mono-accent text-xs font-bold mb-4 block" style={{ color: '#64748B' }}>{step.num}</span>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-bold mb-2 text-lg" style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#334155', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY SWASTEK
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-40" style={{ background: '#F4F8FD' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label">Why SwasTek</p>
              <h2
                className="font-bold leading-[1.06] tracking-tight mb-6"
                style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.04em' }}
              >
                Good software starts with understanding the problem.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#334155', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                A lot of software projects fail not because of the technology, but because the technology wasn't built around the actual business. We've made understanding your business the first thing we do — not an afterthought.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold group link-lift" style={{ color: '#1558D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                <span className="underline-reveal">About SwasTek</span> <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            <div className="space-y-0 border-t border-l rounded-none" style={{ borderColor: '#E2EBF5' }}>
              {[
                { num: '01', title: 'Understand first', desc: "Every project starts with a proper conversation about your business, your users and the real problem you're trying to solve.", color: '#1558D4' },
                { num: '02', title: 'Design with purpose', desc: 'We design interfaces that make sense for the people using them — not just for a portfolio screenshot.', color: '#1558D4' },
                { num: '03', title: 'Build to scale', desc: "The software we build can grow with your business. Architecture decisions that don't create problems later.", color: '#0BC4E3' },
                { num: '04', title: 'Stay involved', desc: "We don't disappear after go-live. Your business changes, your software should too.", color: '#07111F' },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="grid grid-cols-[56px_1fr] border-b border-r group hover:bg-white transition-all duration-300"
                  style={{ borderColor: '#E2EBF5' }}
                >
                  <div className="border-r p-4 flex items-start pt-5" style={{ borderColor: '#E2EBF5' }}>
                    <span className="text-xs font-bold font-mono-accent" style={{ color: '#64748B' }}>{item.num}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-150" style={{ background: item.color }} />
                      <h3 className="font-bold text-base" style={{ color: '#07111F', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#334155', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY SWASTEK section above */}
    </PageTransition>
  )
}
