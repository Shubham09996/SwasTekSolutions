// Home page â€” SwasTek Solutions
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

// Services list
const servicesList = [
  {
    num: '01',
    title: 'Websites',
    href: '/services/web-development',
    desc: 'Fast, responsive and carefully designed websites built around your brand. From marketing sites to web portals and corporate presences.',
    tags: ['Business websites', 'Landing pages', 'Web portals', 'Corporate sites'],
  },
  {
    num: '02',
    title: 'Custom Software',
    href: '/services/custom-software',
    desc: 'Internal tools, operations platforms and workflow systems built around how your team actually works â€” not off-the-shelf assumptions.',
    tags: ['Internal tools', 'Operations platforms', 'Workflow automation'],
  },
  {
    num: '03',
    title: 'CRM & Business Systems',
    href: '/services/crm-development',
    desc: 'Build a CRM around your sales process instead of adapting your process to fit someone else\'s software.',
    tags: ['Lead management', 'Sales pipeline', 'Customer management'],
  },
  {
    num: '04',
    title: 'SaaS Products',
    href: '/services/saas-development',
    desc: 'From MVP to scalable product â€” we build the full architecture behind your SaaS idea, including auth, subscriptions, dashboards and APIs.',
    tags: ['MVP', 'Product architecture', 'Multi-tenant platforms'],
  },
  {
    num: '05',
    title: 'Web Applications',
    href: '/services/web-applications',
    desc: 'Customer portals, booking systems, admin platforms and complex browser-based tools built for real operational use.',
    tags: ['Portals', 'Admin systems', 'Booking platforms'],
  },
  {
    num: '06',
    title: 'Automation & Integrations',
    href: '/services/business-automation',
    desc: 'Remove the manual steps from your workflow. Connect your systems, automate approvals, sync data and trigger the right actions automatically.',
    tags: ['Workflow automation', 'API integrations', 'Data sync'],
  },
  {
    num: '07',
    title: 'E-commerce',
    href: '/services/ecommerce',
    desc: 'Custom storefronts, product catalogs, checkout flows and order management systems built to your exact commercial model.',
    tags: ['Custom storefronts', 'Checkout', 'Order management'],
  },
  {
    num: '08',
    title: 'AI Solutions',
    href: '/services/ai-solutions',
    desc: 'AI where it actually helps. Document processing, intelligent search, AI-assisted workflows and chat interfaces integrated into your operations.',
    tags: ['AI integrations', 'Document processing', 'Intelligent search'],
  },
]

// Work projects
const projects = [
  {
    id: 'alpha-crm',
    title: 'Enterprise CRM Platform',
    industry: 'Professional Services',
    services: 'Custom CRM, API Integrations',
    desc: 'A full CRM built from the ground up for a multi-division professional services firm, replacing three disconnected legacy tools.',
    bg: '#0B1A2E',
    accent: '#1860D4',
    isLight: false,
  },
  {
    id: 'retail-platform',
    title: 'Retail Operations Platform',
    industry: 'Retail & E-commerce',
    services: 'Web Application, Admin Dashboard',
    desc: 'A centralised operations dashboard giving store managers, buyers and logistics teams a single view of inventory, orders and performance.',
    bg: '#EFF4FA',
    accent: '#1860D4',
    isLight: true,
  },
  {
    id: 'property-saas',
    title: 'Property Management SaaS',
    industry: 'Real Estate',
    services: 'SaaS Development, UI/UX Design',
    desc: 'A multi-tenant property management platform built for estate agencies to manage properties, tenants, maintenance and financials.',
    bg: '#060E1C',
    accent: '#0EAFD4',
    isLight: false,
  },
]

// Industries
const industries = [
  'Real Estate',
  'Construction',
  'Finance',
  'Healthcare',
  'Logistics',
  'Retail',
  'Education',
  'Professional Services',
  'E-commerce',
  'Startups',
]

const industryContent: Record<string, { desc: string; challenges: string[]; solutions: string[] }> = {
  'Real Estate': {
    desc: 'Property businesses need tools for managing listings, clients, viewings and transactions â€” all in one place, accessible from anywhere.',
    challenges: ['Managing large property databases', 'Tracking client relationships across long sales cycles', 'Coordinating viewings and team calendars'],
    solutions: ['Custom property management platforms', 'CRM built for real estate workflows', 'Client portals and document management'],
  },
  'Construction': {
    desc: 'Construction businesses deal with complex project hierarchies, subcontractors, compliance requirements and tight margins.',
    challenges: ['Project cost tracking across multiple sites', 'Subcontractor and compliance documentation', 'Job progress reporting for clients'],
    solutions: ['Project management systems', 'Compliance and documentation tools', 'Client-facing reporting dashboards'],
  },
  'Finance': {
    desc: 'Financial services require precise, secure and auditable systems for managing clients, transactions and compliance obligations.',
    challenges: ['Regulatory compliance and audit trails', 'Secure client data management', 'Reporting and portfolio visibility'],
    solutions: ['Secure client portals', 'Compliance management systems', 'Reporting and analytics dashboards'],
  },
  'Healthcare': {
    desc: 'Healthcare providers need reliable, secure software for patient management, scheduling and internal operations.',
    challenges: ['Secure patient record management', 'Appointment and resource scheduling', 'Cross-team communication'],
    solutions: ['Patient management systems', 'Booking and scheduling platforms', 'Secure staff communication tools'],
  },
  'Logistics': {
    desc: 'Logistics businesses rely on real-time visibility of shipments, vehicles, warehouses and delivery operations.',
    challenges: ['Real-time shipment tracking', 'Warehouse and fleet management', 'Customer delivery communication'],
    solutions: ['Operations dashboards', 'Shipment tracking platforms', 'Driver and customer apps'],
  },
  'Retail': {
    desc: 'Modern retail businesses need tools that connect their online and offline operations, inventory and customer relationships.',
    challenges: ['Inventory management across channels', 'Customer loyalty and CRM', 'Order management and fulfilment'],
    solutions: ['Custom e-commerce platforms', 'Inventory management systems', 'Retail CRM and loyalty tools'],
  },
  'Education': {
    desc: 'Education providers need platforms for course delivery, student management, assessments and administrative operations.',
    challenges: ['Student engagement and progress tracking', 'Course management and delivery', 'Administrative complexity'],
    solutions: ['Learning management systems', 'Student portals', 'Administrative automation tools'],
  },
  'Professional Services': {
    desc: 'Consultancies, agencies and professional practices need systems that manage clients, projects, billing and team output.',
    challenges: ['Project and time tracking', 'Client relationship management', 'Billing and reporting accuracy'],
    solutions: ['Custom CRM platforms', 'Project management systems', 'Client billing and reporting tools'],
  },
  'E-commerce': {
    desc: 'Online retailers need more than just a storefront â€” they need the operations infrastructure behind it.',
    challenges: ['Scalable storefront performance', 'Inventory and fulfilment integration', 'Customer account management'],
    solutions: ['Custom e-commerce platforms', 'Admin and operations dashboards', 'API integrations with logistics partners'],
  },
  'Startups': {
    desc: 'Startups need to build the right thing fast â€” MVPs that validate ideas and platforms that can scale with growth.',
    challenges: ['Building fast without wasting budget', 'Validating product assumptions', 'Scaling architecture as users grow'],
    solutions: ['MVP development', 'SaaS product development', 'Technical strategy and architecture'],
  },
}

// Process steps
const processSteps = [
  { num: '01', title: 'Understand', desc: 'We learn your business before we write a line of code.' },
  { num: '02', title: 'Plan', desc: 'A clear scope, timeline and technology plan.' },
  { num: '03', title: 'Design', desc: 'Interfaces built for your users, not for aesthetics alone.' },
  { num: '04', title: 'Build', desc: 'Clean, maintainable engineering with regular check-ins.' },
  { num: '05', title: 'Test', desc: 'Rigorous QA before anything goes near your users.' },
  { num: '06', title: 'Launch', desc: 'Smooth, coordinated deployment with zero surprises.' },
  { num: '07', title: 'Support', desc: 'We stay involved after launch. Your software evolves.' },
]

// Ticker items
const ticker1 = [
  'Website Development', 'Custom Software', 'CRM Platforms', 'SaaS Products',
  'Web Applications', 'Business Automation', 'API Integrations', 'E-commerce',
]
const ticker2 = [
  'Real Estate', 'Construction', 'Finance', 'Healthcare',
  'Logistics', 'Retail', 'Education', 'Professional Services', 'Startups',
]

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = useState(0)

  // Trigger counter when element enters viewport
  const prevInView = useRef(false)
  if (inView && !prevInView.current) {
    prevInView.current = true
    const duration = 1600
    const totalSteps = duration / 16
    const step = value / totalSteps
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, 16)
  }

  return (
    <div ref={ref} className="text-center py-10 px-6">
      <div
        className="text-5xl md:text-6xl font-bold mb-2 tabular-nums"
        style={{
          fontFamily: 'Sora, sans-serif',
          background: 'linear-gradient(135deg, #1860D4 0%, #0EAFD4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {count}{suffix}
      </div>
      <p className="text-sm font-medium" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>{label}</p>
    </div>
  )
}


function MarqueeRow({ items, reverse = false, dimmed = false }: { items: string[]; reverse?: boolean; dimmed?: boolean }) {
  const doubled = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden py-3">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-6 flex-shrink-0"
          >
            <span
              className="text-sm font-semibold tracking-wide whitespace-nowrap"
              style={{ color: dimmed ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.7)', fontFamily: 'Manrope, sans-serif' }}
            >
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dimmed ? 'rgba(22,141,255,0.3)' : '#1860D4' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [activeIndustry, setActiveIndustry] = useState('Real Estate')
  const [hoveredWork, setHoveredWork] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.1])
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.98])

  // Word-by-word reveal for headline

  return (
    <PageTransition title="SwasTek Solutions | Technology. People. Progress." description="We design and build websites, custom software, CRM platforms and digital systems around the way your business works.">

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          HERO â€” Full-bleed dark with grain + parallax
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section
        ref={heroRef}
        className="relative overflow-hidden grain-overlay"
        style={{ background: '#050C17' }}
      >
        {/* Radial glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(7,89,209,0.18) 0%, transparent 70%)', top: '-10%', left: '-5%', filter: 'blur(60px)' }} />
          <div className="absolute" style={{ width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(22,185,243,0.12) 0%, transparent 70%)', bottom: '5%', right: '10%', filter: 'blur(80px)' }} />
          <div className="absolute" style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(18,59,115,0.2) 0%, transparent 70%)', top: '40%', right: '20%', filter: 'blur(50px)' }} />
        </div>

        {/* Fine grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }} />

        {/* Top indicator line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(22,141,255,0.5) 30%, rgba(22,185,243,0.5) 70%, transparent 100%)' }} />

        <motion.div
          className="container-wide relative z-10 pt-32 md:pt-40 pb-20 md:pb-24"
          style={{ opacity: heroOpacity, scale: heroScale }}
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <div className="w-8 h-px" style={{ background: '#1860D4' }} />
            <span className="text-xs font-semibold tracking-[0.28em] uppercase" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
              Technology Â· People Â· Progress
            </span>
          </motion.div>

          {/* Hero headline â€” editorial split */}
          <div className="mb-12">
            {/* Line 1 â€” large display */}
            <div className="overflow-hidden mb-1">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
              >
                <h1 className="leading-none tracking-tight text-white" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)', letterSpacing: '-0.04em' }}>
                  Technology built
                </h1>
              </motion.div>
            </div>
            {/* Line 2 â€” with colour break */}
            <div className="overflow-hidden mb-1">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.18, ease: [0.76, 0, 0.24, 1] }}
              >
                <h1 className="leading-none tracking-tight" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)', letterSpacing: '-0.04em' }}>
                  <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', WebkitTextFillColor: 'transparent' }}>around</span>
                  {' '}
                  <span style={{ background: 'linear-gradient(135deg, #1860D4 10%, #0EAFD4 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>your</span>
                </h1>
              </motion.div>
            </div>
            {/* Line 3 */}
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.26, ease: [0.76, 0, 0.24, 1] }}
              >
                <h1 className="leading-none tracking-tight text-white" style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(3.2rem, 8.5vw, 7.5rem)', letterSpacing: '-0.04em' }}>
                  business.
                </h1>
              </motion.div>
            </div>
          </div>

          {/* Sub-row â€” description + CTA on same line for desktop */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: 'rgba(167,177,194,0.85)', fontFamily: 'Manrope, sans-serif' }}
            >
              We design and build websites, custom software, CRM platforms and digital systems â€” shaped around the specific way your business operates.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/contact" data-cta
                className="group relative inline-flex items-center gap-2.5 text-sm font-semibold px-7 py-4 rounded-full overflow-hidden"
                style={{ background: '#1860D4', color: '#ffffff', fontFamily: 'Manrope, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Start a Project
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #0850C0, #1860D4)' }} />
              </Link>
              <Link to="/work"
                className="inline-flex items-center gap-2.5 text-sm font-semibold px-7 py-4 rounded-full transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.7)', fontFamily: 'Manrope, sans-serif' }}
              >
                View Our Work <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Proof row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-8 lg:gap-12 mt-16 pt-10 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
          >
            {[
              { n: '8+', l: 'Service areas' },
              { n: '10+', l: 'Industries served' },
              { n: '100%', l: 'Bespoke builds' },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1 tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>{s.n}</div>
                <div className="text-xs font-semibold" style={{ color: '#94A3B8', fontFamily: 'Manrope, sans-serif' }}>{s.l}</div>
              </div>
            ))}
            <div className="hidden sm:block h-8 w-px" style={{ background: 'rgba(255,255,255,0.12)' }} />
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['A', 'M', 'R', 'S'].map((l, i) => (
                  <div key={l} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-white shadow-sm" style={{ background: `hsl(${210 + i * 20}, 75%, 48%)`, borderColor: '#050C17' }}>
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-xs font-semibold" style={{ color: '#94A3B8', fontFamily: 'Manrope, sans-serif' }}>Trusted by growing businesses</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      {/* Double ticker strip: services and industries */}
      <section className="border-t border-b overflow-hidden" style={{ background: "#081220", borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <MarqueeRow items={ticker1} dimmed />
        </div>
        <div>
          <MarqueeRow items={ticker2} reverse />
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          STAT COUNTERS
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="bg-white border-b overflow-hidden" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ '--tw-divide-opacity': 1, borderColor: '#E4EDF7' } as React.CSSProperties}>
            <StatCounter value={8} suffix="+" label="Core service areas" />
            <StatCounter value={10} suffix="+" label="Industries served" />
            <StatCounter value={7} suffix="-step" label="Proven build process" />
            <StatCounter value={100} suffix="%" label="Custom-built solutions" />
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          WHAT WE BUILD â€” editorial large-number list
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 md:py-36 bg-white">
        <div className="container-wide">
          {/* Header */}
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <p className="section-label">What we build</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.03em' }}>
                Digital products for real requirements.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-lg leading-relaxed self-end"
              style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}
            >
              Not generic templates or off-the-shelf assumptions. Every product we build is designed around the specific way your business operates â€” from the first conversation to the final line of code.
            </motion.p>
          </div>

          {/* Service rows â€” editorial with large numbers */}
          <div className="border-t" style={{ borderColor: '#0B1A2E' }}>
            {servicesList.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  to={s.href}
                  className="group block border-b relative overflow-hidden"
                  style={{ borderColor: '#E4EDF7' }}
                  onMouseEnter={() => setActiveService(i)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  {/* Hover fill */}
                  <motion.div
                    className="absolute inset-0"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeService === i ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    style={{ background: '#050C17', transformOrigin: 'left' }}
                  />

                  <div className="relative z-10 grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_240px_auto] items-center gap-6 py-7 px-2">
                    {/* Number */}
                    <span
                      className="font-bold leading-none transition-colors duration-300"
                      style={{
                        fontFamily: 'Sora, sans-serif',
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        color: activeService === i ? 'rgba(22,141,255,0.35)' : '#E4EDF7',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {s.num}
                    </span>
                    {/* Title */}
                    <h3
                      className="font-heading font-bold text-xl md:text-2xl transition-colors duration-300"
                      style={{ color: activeService === i ? '#ffffff' : '#0B1A2E', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
                    >
                      {s.title}
                    </h3>
                    {/* Tags â€” desktop only */}
                    <div className="hidden md:flex flex-wrap gap-1.5">
                      {s.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full transition-all duration-300"
                          style={{
                            background: activeService === i ? 'rgba(24,96,212,0.12)' : '#EFF4FA',
                            color: activeService === i ? '#0EAFD4' : '#3D5168',
                            fontFamily: 'Manrope, sans-serif',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {/* Arrow */}
                    <ArrowUpRight
                      size={20}
                      className="transition-all duration-300 flex-shrink-0"
                      style={{
                        color: activeService === i ? '#1860D4' : '#D3DCE8',
                        transform: activeService === i ? 'translate(2px,-2px)' : 'none',
                      }}
                    />
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
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
              <span className="underline-reveal">View all services</span>
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          FEATURED WORK â€” full-width dramatic cards
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-0 bg-white border-t" style={{ borderColor: '#0B1A2E' }}>
        {/* Section header */}
        <div className="container-wide py-16">
          <div className="flex items-end justify-between">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="section-label">Selected work</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.03em' }}>
                Projects we're<br />proud of.
              </h2>
            </motion.div>
            <Link to="/work" className="hidden md:flex items-center gap-2 text-sm font-semibold group" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
              <span className="underline-reveal">All projects</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Full-width project cards */}
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/work/${p.id}`}
              data-case
              className="block group relative border-t"
              style={{ borderColor: p.isLight ? '#E4EDF7' : 'rgba(255,255,255,0.06)' }}
              onMouseEnter={() => setHoveredWork(i)}
              onMouseLeave={() => setHoveredWork(null)}
            >
              <div
                className="min-h-[50vh] md:min-h-[55vh] flex flex-col md:flex-row items-stretch relative overflow-hidden"
                style={{ background: p.bg }}
              >
                {/* Content */}
                <div className={`flex-1 p-10 md:p-16 lg:p-20 flex flex-col justify-between ${i % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: p.accent, fontFamily: 'Manrope, sans-serif' }}>{p.industry}</p>
                    <h3
                      className="font-heading font-bold mb-5 leading-tight"
                      style={{
                        color: p.isLight ? '#0B1A2E' : '#ffffff',
                        fontFamily: 'Sora, sans-serif',
                        fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                        letterSpacing: '-0.03em',
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-base leading-relaxed max-w-lg" style={{ color: p.isLight ? '#3D5168' : 'rgba(167,177,194,0.8)', fontFamily: 'Manrope, sans-serif' }}>
                      {p.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-10">
                    <p className="text-xs font-semibold" style={{ color: p.isLight ? '#7A8FA3' : '#3E5168', fontFamily: 'Manrope, sans-serif' }}>{p.services}</p>
                    <div className="flex-1 h-px" style={{ background: p.isLight ? '#E4EDF7' : 'rgba(255,255,255,0.07)' }} />
                    <div
                      className="flex items-center gap-2 text-sm font-semibold transition-all duration-300"
                      style={{ color: p.accent, fontFamily: 'Manrope, sans-serif', transform: hoveredWork === i ? 'translateX(4px)' : 'none' }}
                    >
                      View case study <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Visual panel */}
                <div className="hidden md:flex flex-1 items-center justify-center relative" style={{ background: p.isLight ? `${p.accent}06` : `${p.accent}08`, minHeight: 320 }}>
                  {/* Nested frame art */}
                  <div className="relative w-52 h-52">
                    <div className="absolute inset-0 rounded-3xl border transition-all duration-500" style={{ borderColor: `${p.accent}30`, transform: hoveredWork === i ? 'rotate(-4deg) scale(1.08)' : 'rotate(-6deg) scale(1)' }} />
                    <div className="absolute inset-4 rounded-2xl border transition-all duration-500" style={{ borderColor: `${p.accent}20`, transform: hoveredWork === i ? 'rotate(2deg) scale(1.04)' : 'rotate(3deg) scale(1)' }} />
                    <div className="absolute inset-8 rounded-xl flex items-center justify-center transition-all duration-500"
                      style={{ background: `${p.accent}15`, transform: hoveredWork === i ? 'rotate(0deg)' : 'rotate(0deg)' }}>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-1" style={{ color: p.accent, fontFamily: 'Sora, sans-serif', letterSpacing: '-0.04em' }}>{String(i + 1).padStart(2, '0')}</div>
                        <div className="text-[10px] font-semibold tracking-[0.16em] uppercase" style={{ color: p.accent, opacity: 0.7, fontFamily: 'Manrope, sans-serif' }}>Case Study</div>
                      </div>
                    </div>
                  </div>

                  {/* Corner label */}
                  <div className="absolute bottom-8 right-8">
                    <p className="text-xs font-semibold" style={{ color: `${p.accent}80`, fontFamily: 'Manrope, sans-serif' }}>{p.industry}</p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          INDUSTRIES â€” dark spotlight grid
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 md:py-36" style={{ background: '#050C17' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-24 items-start">
            {/* Left â€” sticky label */}
            <div className="lg:sticky lg:top-32">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-4" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>Industries</p>
                <h2
                  className="font-heading font-bold leading-[1.05] tracking-tight text-white mb-6"
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.04em' }}
                >
                  Software for how your industry works.
                </h2>
                <p className="text-base leading-relaxed mb-10" style={{ color: '#3E5168', fontFamily: 'Manrope, sans-serif' }}>
                  Different sectors have different workflows, compliance requirements and operational rhythms. We build software around yours â€” not a generic template.
                </p>
                <Link to="/industries" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
                  <span className="underline-reveal">View all industries</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </div>

            {/* Right â€” animated industry detail */}
            <div>
              {/* Industry tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setActiveIndustry(ind)}
                    className="text-xs font-semibold px-3.5 py-2 rounded-full transition-all duration-200"
                    style={{
                      background: activeIndustry === ind ? '#1860D4' : 'rgba(255,255,255,0.06)',
                      color: activeIndustry === ind ? '#ffffff' : '#3E5168',
                      fontFamily: 'Manrope, sans-serif',
                      border: '1px solid',
                      borderColor: activeIndustry === ind ? '#1860D4' : 'rgba(255,255,255,0.07)',
                    }}
                  >
                    {ind}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="rounded-2xl p-8"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <h3 className="font-heading text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}>{activeIndustry}</h3>
                  <p className="text-sm leading-relaxed mb-8" style={{ color: '#3E5168', fontFamily: 'Manrope, sans-serif' }}>
                    {industryContent[activeIndustry]?.desc}
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>Challenges</p>
                      <ul className="space-y-3">
                        {industryContent[activeIndustry]?.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#1860D4' }} />{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: '#0EAFD4', fontFamily: 'Manrope, sans-serif' }}>What we build</p>
                      <ul className="space-y-3">
                        {industryContent[activeIndustry]?.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-sm" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#0EAFD4' }} />{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <Link
                      to={`/industries/${activeIndustry.toLowerCase().replace(/\s+/g, '-').replace('&', '').replace('--', '-')}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                      style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}
                    >
                      Learn more about {activeIndustry} <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          PROCESS â€” horizontal numbered steps
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 md:py-36 bg-white border-t" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="flex items-end justify-between mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="section-label">How we work</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.03em' }}>
                From conversation<br />to working software.
              </h2>
            </motion.div>
            <Link to="/process" className="hidden md:flex items-center gap-2 text-sm font-semibold group" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
              <span className="underline-reveal">Full process</span> <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-0 border-l border-t" style={{ borderColor: '#E4EDF7' }}>
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="border-r border-b p-6 group hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#E4EDF7' }}
              >
                <div className="text-4xl font-bold mb-4 leading-none" style={{ color: '#F0F4FA', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.05em' }}>{step.num}</div>
                <div className="w-6 h-0.5 mb-4 transition-all duration-300 group-hover:w-10" style={{ background: '#1860D4' }} />
                <h3 className="font-heading font-bold text-sm mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{step.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          WHY SWASTEK â€” editorial split, stark
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="py-24 md:py-36" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <p className="section-label">Why SwasTek</p>
              <h2 className="font-heading font-bold leading-[1.05] tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.035em' }}>
                Good software starts with understanding the problem.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                A lot of software projects fail not because of the technology, but because the technology wasn't built around the actual business. We've made understanding your business the first thing we do â€” not an afterthought.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold group" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
                <span className="underline-reveal">About SwasTek</span> <ArrowUpRight size={14} />
              </Link>
            </motion.div>

            <div className="space-y-0 border-t border-l" style={{ borderColor: '#E4EDF7' }}>
              {[
                { num: '01', title: 'Understand first', desc: "Every project starts with a proper conversation about your business, your users and the real problem you're trying to solve.", color: '#1860D4' },
                { num: '02', title: 'Design with purpose', desc: 'We design interfaces that make sense for the people using them â€” not just for a portfolio screenshot.', color: '#1860D4' },
                { num: '03', title: 'Build to scale', desc: "The software we build can grow with your business. Architecture decisions that don't create problems later.", color: '#0EAFD4' },
                { num: '04', title: 'Stay involved', desc: "We don't disappear after go-live. Your business changes, your software should too.", color: '#0E2040' },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="grid grid-cols-[60px_1fr] border-b border-r group hover:bg-white transition-colors duration-200"
                  style={{ borderColor: '#E4EDF7' }}
                >
                  <div className="border-r p-4 flex items-start pt-5" style={{ borderColor: '#E4EDF7' }}>
                    <span className="text-xs font-bold" style={{ color: '#D3DCE8', fontFamily: 'Sora, sans-serif' }}>{item.num}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                      <h3 className="font-heading font-bold text-base" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
          CTA â€” full-bleed dark with giant text
      â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
      <section className="relative overflow-hidden grain-overlay" style={{ background: '#050C17' }}>
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute" style={{ width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(7,89,209,0.15) 0%, transparent 70%)', top: '-20%', left: '20%', filter: 'blur(80px)' }} />
        </div>

        {/* Giant editorial number */}
        <div className="absolute right-0 bottom-0 leading-none font-bold pointer-events-none select-none" style={{ fontSize: 'clamp(10rem, 30vw, 28rem)', color: 'rgba(255,255,255,0.02)', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.06em', lineHeight: 0.85 }}>
          ST
        </div>

        <div className="container-wide relative z-10 py-24 md:py-36">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase mb-8" style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>Start a project</p>
            <div className="max-w-4xl mb-12">
              <h2 className="font-heading font-bold text-white leading-[1.0] tracking-tight" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.045em' }}>
                Your business<br />
                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.22)', WebkitTextFillColor: 'transparent' }}>is unique.</span><br />
                <span style={{ background: 'linear-gradient(135deg, #1860D4, #0EAFD4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Your software</span>{' '}
                <span className="text-white">should be.</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <Link to="/contact" data-cta
                className="group relative inline-flex items-center gap-2.5 text-sm font-semibold px-8 py-4 rounded-full overflow-hidden"
                style={{ background: '#ffffff', color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Start a Project
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
              <Link to="/work"
                className="inline-flex items-center gap-2.5 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:border-white/30"
                style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.65)', fontFamily: 'Manrope, sans-serif' }}
              >
                View Our Work <ArrowRight size={14} />
              </Link>
            </div>

            <div className="mt-14 pt-12 border-t grid md:grid-cols-3 gap-8" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              {[
                { icon: 'â†’', title: 'Quick response', desc: 'We reply to every enquiry within one business day.' },
                { icon: 'â†’', title: 'No obligation', desc: 'First conversation is just a conversation â€” no commitment required.' },
                { icon: 'â†’', title: 'Plain english', desc: 'No jargon. We explain things the way you should hear them.' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="flex items-center gap-3 mb-2">
                    <span style={{ color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>{item.icon}</span>
                    <h4 className="font-heading font-bold text-sm text-white" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h4>
                  </div>
                  <p className="text-sm" style={{ color: '#3E5168', fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}


