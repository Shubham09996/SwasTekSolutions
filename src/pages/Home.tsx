// Home page — SwasTek Solutions (ULTRA-PREMIUM NEXT LEVEL)
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView, useScroll, useTransform, useSpring } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowRight,
  Zap,
  Palette,
  Layout,
  Compass,
  Code2,
  Database,
  Globe,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Layers,
  Workflow,
  FileCode,
  Cpu,
  ShieldCheck,
  Rocket,
  Repeat,
  CheckCircle2,
  Clock,
  Users,
  ChevronRight,
  ChevronLeft,
  HardHat,
  ExternalLink,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { Lottie } from 'lottie-react'
import heroAnimationData from '../assets/hero-animation.json'

/* ─────────────────────────────────────────────────────────── */
/*  DATA                                                        */
/* ─────────────────────────────────────────────────────────── */
const servicesList = [
  {
    num: '01',
    title: 'Web Design',
    href: '/services/web-design',
    desc: 'Bespoke, conversion-engineered digital layouts, dynamic motion design, and high-impact visual brand experiences.',
    tags: ['Motion UI', 'Design Systems', 'Responsive'],
    icon: Palette,
    category: 'Design',
    accent: '#1558D4',
    metric: '99.8% Performance UI',
    colorDot: 'bg-blue-500',
  },
  {
    num: '02',
    title: 'UX/UI Design',
    href: '/services/ui-ux-design',
    desc: 'Human-centered user architecture, rapid clickable wireframes, intuitive interfaces, and scalable design tokens.',
    tags: ['UX Research', 'User Journey', 'Prototypes'],
    icon: Layout,
    category: 'Design',
    accent: '#0BC4E3',
    metric: 'Design Systems & Tokens',
    colorDot: 'bg-cyan-500',
  },
  {
    num: '03',
    title: 'IT Strategy Consulting',
    href: '/services/it-strategy-consulting',
    desc: 'Strategic technology roadmaps, cloud architecture audits, infrastructure modernisation, and scaling advisory.',
    tags: ['Cloud Strategy', 'Tech Audits', 'Architecture'],
    icon: Compass,
    category: 'Strategy',
    accent: '#5B3CF5',
    metric: '99.99% SLA Architecture',
    colorDot: 'bg-indigo-500',
  },
  {
    num: '04',
    title: 'Custom Software Development',
    href: '/services/custom-software',
    desc: 'Purpose-built business platforms, internal operational tools, and automation systems tailored for how your team works.',
    tags: ['Internal Tools', 'Enterprise Systems', 'Workflows'],
    icon: Code2,
    category: 'Development',
    accent: '#1558D4',
    metric: '10x Faster Workflows',
    colorDot: 'bg-blue-600',
  },
  {
    num: '05',
    title: 'CRM Development',
    href: '/services/crm-development',
    desc: 'Custom sales pipelines, automated client onboarding, multi-tier lead tracking, and central communications portals.',
    tags: ['Sales Pipeline', 'Lead Automation', 'Client Portal'],
    icon: Database,
    category: 'Enterprise',
    accent: '#0BC4E3',
    metric: '+340% Lead Velocity',
    colorDot: 'bg-cyan-600',
  },
  {
    num: '06',
    title: 'Web Development',
    href: '/services/web-development',
    desc: 'Ultra-fast, secure, and scalable web applications engineered with modern fullstack architectures and edge SSR.',
    tags: ['Fullstack Web', 'API Engineering', 'Edge SSR'],
    icon: Globe,
    category: 'Development',
    accent: '#2570E8',
    metric: '< 45ms Global Latency',
    colorDot: 'bg-blue-500',
  },
  {
    num: '07',
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    desc: 'Cross-platform iOS and Android apps with 60FPS fluid animations, native hardware integrations, and offline capabilities.',
    tags: ['iOS & Android', 'Cross-Platform', 'Native APIs'],
    icon: Smartphone,
    category: 'Development',
    accent: '#5B3CF5',
    metric: '60 FPS Native Motion',
    colorDot: 'bg-indigo-500',
  },
  {
    num: '08',
    title: 'E-Commerce Development',
    href: '/services/ecommerce',
    desc: 'High-conversion online storefronts, frictionless 1-click checkouts, inventory synchronization, and custom payment engines.',
    tags: ['Custom Checkout', 'Payment Gateways', 'Inventory'],
    icon: ShoppingBag,
    category: 'Enterprise',
    accent: '#0BC4E3',
    metric: 'Frictionless 1-Click Buy',
    colorDot: 'bg-cyan-500',
  },
]

const projects = [
  {
    id: 'quantaxs-estimation',
    title: 'Quantax Estimation Platform',
    industry: 'Construction Estimating & Material Takeoffs',
    liveUrl: 'https://quantaxsestimation.com/',
    tagline: 'Live Client Website',
    services: 'Website Development · Blueprint Ingestion · SEO Architecture',
    desc: 'Official website and digital presence designed and developed for Quantax Estimation — a US construction material takeoff firm. Features dedicated service pages for 15+ trade divisions, blueprint upload request forms, and localized SEO across New Jersey, California, and Texas.',
    bg: '#040913',
    accent: '#0BC4E3',
    accentSoft: 'rgba(11,196,227,0.12)',
    isLight: false,
    stats: [
      { value: '24–48h', label: 'Turnaround Time' },
      { value: '15+', label: 'CSI Trade Portals' },
      { value: 'NJ · CA · TX', label: 'Regional Focus' },
    ],
    highlights: ['Lumber Framing & Material Takeoff Pages', 'Blueprint & Drawing Upload Forms', 'Regional SEO (New Jersey, California, Texas)', 'High-Speed Astro & React Web App'],
  },
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
  {
    num: '01',
    phase: 'Discovery',
    title: 'Understand',
    tagline: 'Deep Business & Domain Immersion',
    desc: 'We learn your business model, target audience, competitive edge, and operational workflows before writing any code.',
    icon: Compass,
    color: '#1558D4',
    bgSoft: 'rgba(21, 88, 212, 0.08)',
    timeline: 'Week 1',
    deliverables: ['Stakeholder Discovery Interviews', 'User Journey Mapping', 'Technical Feasibility Analysis', 'Security & Risk Audit'],
    clientRole: 'Share business context, pain points & success metrics',
    tools: ['Miro', 'Notion', 'Domain Audits'],
    metric: '100% Problem Clarity',
  },
  {
    num: '02',
    phase: 'Strategy',
    title: 'Plan & Blueprint',
    tagline: 'Technical Architecture & Scope',
    desc: 'A crystal-clear scope, scalable tech stack selection, milestone roadmap, and transparent cost breakdown with zero surprises.',
    icon: FileCode,
    color: '#0BC4E3',
    bgSoft: 'rgba(11, 196, 227, 0.08)',
    timeline: 'Week 2',
    deliverables: ['System Architecture Blueprint', 'Sprint Milestone Roadmap', 'API Contract Specifications', 'Database Schema Design'],
    clientRole: 'Review and approve technical roadmap & milestones',
    tools: ['TypeScript', 'GraphQL/REST', 'AWS Architecture'],
    metric: 'Zero Scope Creep',
  },
  {
    num: '03',
    phase: 'Interface',
    title: 'Design & Prototype',
    tagline: 'Conversion-Engineered UI/UX',
    desc: 'Modern, high-converting interfaces and clickable prototypes built for real users — engineered for maximum usability and aesthetic wow.',
    icon: Palette,
    color: '#5B3CF5',
    bgSoft: 'rgba(91, 60, 245, 0.08)',
    timeline: 'Weeks 3–4',
    deliverables: ['Clickable Figma Prototypes', 'Scalable Design System & Tokens', 'Micro-Interactions & Motion Specs', 'Mobile-Responsive Layouts'],
    clientRole: 'Interact with clickable Figma prototype & give feedback',
    tools: ['Figma', 'Framer', 'Tailwind CSS Tokens'],
    metric: 'Pixel-Perfect UI',
  },
  {
    num: '04',
    phase: 'Engineering',
    title: 'Agile Build',
    tagline: 'Clean, Modern Codebase',
    desc: 'Type-safe fullstack engineering, modular component architecture, weekly live sprint demos, and continuous staging updates.',
    icon: Cpu,
    color: '#1558D4',
    bgSoft: 'rgba(21, 88, 212, 0.08)',
    timeline: 'Weeks 5–8',
    deliverables: ['Clean Type-Safe Codebase', 'Weekly Live Sprint Demos', 'Automated CI/CD Pipelines', 'Private Staging Environments'],
    clientRole: 'Test live staging builds and attend weekly sprint demos',
    tools: ['React / Vite', 'Node / Python', 'PostgreSQL / Prisma'],
    metric: 'Bi-Weekly Demos',
  },
  {
    num: '05',
    phase: 'Validation',
    title: 'Test & Secure',
    tagline: 'Rigorous QA & Security Audits',
    desc: 'Automated end-to-end testing, OWASP vulnerability audits, stress & load testing, and cross-browser quality assurance.',
    icon: ShieldCheck,
    color: '#0BC4E3',
    bgSoft: 'rgba(11, 196, 227, 0.08)',
    timeline: 'Week 9',
    deliverables: ['Automated E2E Test Suite', 'OWASP Security Penetration Audit', 'Lighthouse 95+ Score', 'Cross-Device & Browser QA'],
    clientRole: 'User Acceptance Testing (UAT) sign-off',
    tools: ['Playwright', 'Jest', 'Lighthouse', 'SonarQube'],
    metric: '99.9% Bug-Free QA',
  },
  {
    num: '06',
    phase: 'Deployment',
    title: 'Launch',
    tagline: 'Zero-Downtime Production Cutover',
    desc: 'Coordinated production rollout, DNS & SSL automation, global edge CDN caching, and 24/7 telemetry monitoring setup.',
    icon: Rocket,
    color: '#10B981',
    bgSoft: 'rgba(16, 185, 129, 0.08)',
    timeline: 'Week 10',
    deliverables: ['Production Cloud Cutover', 'Edge CDN & SSL Hardening', 'Live Error Telemetry & Logs', 'User Analytics & Funnel Tracking'],
    clientRole: 'Go live and celebrate your product launch',
    tools: ['Docker', 'Vercel / AWS', 'Cloudflare', 'Sentry'],
    metric: 'Zero Downtime',
  },
  {
    num: '07',
    phase: 'Evolution',
    title: 'Support & Scale',
    tagline: 'Continuous SLA & Feature Growth',
    desc: 'We stay involved as your dedicated engineering partner with guaranteed SLAs, ongoing feature sprints, and performance audits.',
    icon: Repeat,
    color: '#8B5CF5',
    bgSoft: 'rgba(139, 92, 246, 0.08)',
    timeline: 'Ongoing',
    deliverables: ['Guaranteed < 2hr SLA Support', 'Monthly Performance Audits', 'Continuous Feature Iterations', 'Dedicated Engineering Slack Channel'],
    clientRole: 'Shape ongoing feature roadmap & business scaling',
    tools: ['Datadog', 'GitHub Enterprise', 'Direct Slack Access'],
    metric: '< 2hr Response SLA',
  },
]

const ticker1 = ['Website Development', 'Custom Software', 'CRM Platforms', 'SaaS Products', 'Web Applications', 'Business Automation', 'API Integrations', 'E-commerce']
const ticker2 = ['Real Estate', 'Construction', 'Finance', 'Healthcare', 'Logistics', 'Retail', 'Education', 'Professional Services', 'Startups']

/* ─────────────────────────────────────────────────────────── */
/*  HELPERS                                                     */
/* ─────────────────────────────────────────────────────────── */

// Stat counter
function StatCounter({
  value,
  suffix,
  label,
  sublabel,
  icon: Icon,
  delay = 0,
}: {
  value: number
  suffix: string
  label: string
  sublabel?: string
  icon: any
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)
  const triggered = useRef(false)

  useEffect(() => {
    if (inView && !triggered.current) {
      triggered.current = true
      const timeout = setTimeout(() => {
        const duration = 1600
        const steps = duration / 16
        const step = value / steps
        let current = 0
        const timer = setInterval(() => {
          current += step
          if (current >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(current))
          }
        }, 16)
      }, delay)
      return () => clearTimeout(timeout)
    }
  }, [inView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      transition={{ duration: 0.6, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-7 rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl hover:border-blue-300 group overflow-hidden"
      style={{ borderColor: '#E2EBF5', boxShadow: '0 2px 16px rgba(7,17,31,0.04)' }}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-bl-full pointer-events-none transition-transform duration-500 group-hover:scale-125" />
      <div className="flex items-center justify-between mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
          style={{ background: 'rgba(21,88,212,0.08)', color: '#1558D4' }}
        >
          <Icon size={22} />
        </div>
        <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          verified
        </span>
      </div>
      <div className="num-display text-4xl lg:text-5xl font-extrabold mb-1.5 tabular-nums text-blue-600 tracking-tight">
        {count}{suffix}
      </div>
      <p className="text-base font-bold text-slate-900 mb-1" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{label}</p>
      {sublabel && <p className="text-xs text-slate-500 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{sublabel}</p>}
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
              style={{ color: dimmed ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.85)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
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
/*  INTERACTIVE PROJECT SHOWCASE MOCKUPS                       */
/* ─────────────────────────────────────────────────────────── */

function QuantaxsShowcaseMockup() {
  const [tab, setTab] = useState<'preview' | 'trades' | 'quote'>('preview')
  const [selectedTrade, setSelectedTrade] = useState<'lumber' | 'drywall' | 'concrete' | 'roofing'>('lumber')

  return (
    <div
      className="w-full max-w-xl rounded-2xl overflow-hidden border shadow-2xl relative z-10 transition-all duration-300"
      style={{
        background: 'linear-gradient(145deg, #071322 0%, #03080F 100%)',
        borderColor: 'rgba(11, 196, 227, 0.35)',
        boxShadow: '0 30px 60px -15px rgba(3, 8, 15, 0.8), 0 0 35px rgba(11, 196, 227, 0.16)',
      }}
    >
      {/* Top Browser Bar */}
      <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#03080F' }}>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <a
          href="https://quantaxsestimation.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 rounded-md text-[11px] font-semibold text-cyan-300 flex items-center gap-1.5 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-900/50 transition-colors"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          quantaxsestimation.com <ExternalLink size={10} className="text-cyan-400" />
        </a>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          ● Live US Website
        </span>
      </div>

      {/* Interactive Tabs Header */}
      <div className="px-4 py-2 border-b flex items-center gap-1.5 overflow-x-auto" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('preview') }}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            tab === 'preview'
              ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
          }`}
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <Globe size={12} /> Homepage Preview
        </button>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('trades') }}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            tab === 'trades'
              ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
          }`}
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <HardHat size={12} /> Core Trade Services
        </button>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setTab('quote') }}
          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
            tab === 'quote'
              ? 'bg-cyan-500/25 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent'
          }`}
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          <Zap size={12} /> Plan Upload / Quote
        </button>
      </div>

      {/* Body Viewport */}
      <div className="p-5 sm:p-6 space-y-4 text-white min-h-[330px] flex flex-col justify-between">
        {tab === 'preview' && (
          <div className="space-y-3.5">
            {/* Real Header on Site */}
            <div className="flex items-center justify-between pb-2.5 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Quantax<span className="text-cyan-400">Estimation</span>
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                <span>Services</span>
                <span>Industries</span>
                <span>Process</span>
                <span>Contact</span>
              </div>
              <a
                href="https://quantaxsestimation.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-bold text-[10px] hover:bg-cyan-400 transition-colors"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Get a Quote
              </a>
            </div>

            {/* Hero Banner from actual website */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <span className="inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                🇺🇸 New Jersey · California · Texas
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                Precision Lumber Estimation & Construction Material Takeoffs
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Professional material quantification, lumber takeoff packages, and bid-ready Excel spreadsheets for contractors across the USA.
              </p>
            </div>

            {/* Real Deliverables strip */}
            <div className="grid grid-cols-2 gap-2 text-[11px]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">📊</span> Excel Spreadsheets with Formulas
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">🖍️</span> Color-Coded Plan Markups
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                <span className="text-cyan-400 font-bold">📋</span> CSI MasterFormat 16/50
              </div>
              <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-slate-300 flex items-center gap-1.5">
                <span className="text-emerald-400 font-bold">⚡</span> 24 to 48 Hour Turnaround
              </div>
            </div>
          </div>
        )}

        {tab === 'trades' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Real Service Offerings
              </span>
              <span className="text-[10px] text-slate-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                CSI Divisions
              </span>
            </div>

            {/* Trade Selector Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'lumber', label: '🪵 Lumber' },
                { id: 'drywall', label: '🧱 Drywall' },
                { id: 'concrete', label: '🏗️ Concrete' },
                { id: 'roofing', label: '🏠 Roofing' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedTrade(t.id as any) }}
                  className={`p-1.5 rounded-lg text-xs font-semibold text-center border transition-all ${
                    selectedTrade === t.id
                      ? 'bg-cyan-500/25 text-cyan-300 border-cyan-400/60 font-bold'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Selected Trade Real Details */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              {selectedTrade === 'lumber' && (
                <>
                  <p className="font-bold text-white text-sm">Lumber & Wood Framing Takeoffs</p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Complete board-foot accurate takeoff for studs, wall plates, floor joists, roof trusses, shear walls, plywood sheathing, and Simpson hardware connectors.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Board-Foot Summaries</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Cut-Lists</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Simpson Hardware</span>
                  </div>
                </>
              )}

              {selectedTrade === 'drywall' && (
                <>
                  <p className="font-bold text-white text-sm">Drywall & Metal Stud Framing</p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Comprehensive quantification of drywall sheets (GWB), metal framing tracks and studs, insulation, acoustical ceiling tiles (ACT), corner beads, and joint compound.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Sheet Counts</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Metal Stud LF</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">ACT Ceilings</span>
                  </div>
                </>
              )}

              {selectedTrade === 'concrete' && (
                <>
                  <p className="font-bold text-white text-sm">Concrete, Masonry & Steel</p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Detailed takeoff of foundation footings, grade beams, slab-on-grade (CY), rebar tonnage, wire mesh, CMU block walls, and structural steel members.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Cubic Yards (CY)</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Rebar Weight</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">CMU Block Count</span>
                  </div>
                </>
              )}

              {selectedTrade === 'roofing' && (
                <>
                  <p className="font-bold text-white text-sm">Roofing & Siding Takeoffs</p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    Accurate roofing squares calculation for asphalt shingles, metal roofing, membrane flat roofs, siding panels, soffits, fascia, and underlayment rolls.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Roofing Squares</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Siding Area</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-cyan-300">Underlayment Rolls</span>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {tab === 'quote' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Quotation Request Flow
              </span>
              <span className="text-[10px] font-bold text-emerald-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                ● 24–48h Turnaround
              </span>
            </div>

            {/* Realistic Form Preview */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2.5 text-xs" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <div className="p-3 rounded-lg bg-cyan-950/40 border border-dashed border-cyan-500/40 text-center">
                <FileCode size={18} className="mx-auto text-cyan-300 mb-1" />
                <p className="font-bold text-white text-xs">Upload Architectural Plans (PDF / DWG / TIFF)</p>
                <p className="text-[10px] text-slate-300 mt-0.5">Drop full drawing sets or single-sheet specifications</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-slate-400 block">Deliverable Format:</span>
                  <span className="text-white font-bold">Excel + PlanSwift Markup</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-slate-400 block">Pricing Model:</span>
                  <span className="text-cyan-300 font-bold">Fixed Project Fee</span>
                </div>
              </div>
            </div>

            <a
              href="https://quantaxsestimation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-bold text-center block transition-all shadow-md"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Visit Live Site to Request a Free Quote ↗
            </a>
          </div>
        )}
      </div>

      {/* Footer info strip */}
      <div className="px-5 py-2.5 border-t flex items-center justify-between text-[11px] text-slate-400" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(0,0,0,0.4)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <span className="flex items-center gap-1.5">
          <Globe size={13} className="text-cyan-400" /> Serving Contractors in NJ, CA, TX & Nationwide
        </span>
        <span className="text-cyan-300 font-semibold">24–48h Turnaround</span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────────── */
/*  MAIN COMPONENT                                             */
/* ─────────────────────────────────────────────────────────── */
export default function Home() {
  const [serviceCategory, setServiceCategory] = useState('All')
  const [activeIndustry, setActiveIndustry] = useState('Real Estate')
  const [activeProcessStep, setActiveProcessStep] = useState(0)
  const [processViewMode, setProcessViewMode] = useState<'stepper' | 'grid'>('stepper')

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
      <section ref={heroRef} className="relative overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>

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
          className="container-wide relative z-10 pt-8 md:pt-10 lg:pt-12 pb-6 md:pb-8"
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
                className="flex items-center gap-3 mb-2"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue-600)' }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue-500)' }} />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
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
                      className="leading-none text-white"
                      style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4.5vw, 5rem)', letterSpacing: '-0.045em', lineHeight: 1 }}
                    >
                      around{' '}
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
                    <div className="text-xs font-semibold" style={{ color: '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif', letterSpacing: '0.04em' }}>{s.l}</div>
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
              className="flex items-center justify-center relative"
            >
              <Lottie
                src={heroAnimationData}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: 'clamp(240px, 55vw, 720px)' }}
              />
            </motion.div>

          </div>
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 scroll-indicator z-10 hidden xl:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Scroll</span>
            <div className="w-px h-6" style={{ background: 'linear-gradient(to bottom, rgba(21,136,255,0.8), transparent)' }} />
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
          STAT COUNTERS (CLEAN CRISP LIGHT)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-14 border-b overflow-hidden" style={{ background: '#F8FAFC', borderColor: '#E2EBF5' }}>
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter value={8} suffix="+" label="Core service areas" sublabel="Web, mobile, software & cloud systems" icon={Layers} delay={0} />
            <StatCounter value={10} suffix="+" label="Industries served" sublabel="Real estate, finance, retail & logistics" icon={Globe} delay={80} />
            <StatCounter value={7} suffix="-step" label="Proven build process" sublabel="Discovery, scoping, engineering & support" icon={Workflow} delay={160} />
            <StatCounter value={100} suffix="%" label="Custom-built solutions" sublabel="Bespoke engineering with zero templates" icon={Sparkles} delay={240} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT WE BUILD — interactive bento capability cards (CLEAN EDITORIAL WHITE)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden border-b" style={{ background: '#FFFFFF', borderColor: '#E2EBF5' }}>
        {/* Subtle decorative background ambient lighting */}
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-wide relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3.5 bg-blue-50 border border-blue-200/70 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[11px] font-bold tracking-[0.16em] uppercase text-blue-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Fullstack Capabilities
                </span>
              </div>
              <h2 style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)', letterSpacing: '-0.04em', lineHeight: 1.08 }}>
                Digital products engineered for{' '}
                <span className="text-gradient">real business impact.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="max-w-md"
            >
              <p className="text-base leading-relaxed text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Not generic templates or off-the-shelf assumptions. Every product we build is designed around the specific way your business operates.
              </p>
            </motion.div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-1">
            {[
              { id: 'All', label: 'All Capabilities', count: 8 },
              { id: 'Development', label: 'Development', count: 3 },
              { id: 'Design', label: 'Design', count: 2 },
              { id: 'Enterprise', label: 'Enterprise', count: 2 },
              { id: 'Strategy', label: 'Strategy', count: 1 },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setServiceCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                  serviceCategory === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    serviceCategory === cat.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList
              .filter((s) => serviceCategory === 'All' || s.category === serviceCategory)
              .map((s, i) => {
                const Icon = s.icon
                return (
                  <motion.div
                    key={s.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    whileHover={{ y: -6 }}
                  >
                    <Link
                      to={s.href}
                      className="group flex flex-col justify-between h-full p-7 rounded-2xl bg-white border transition-all duration-300 hover:shadow-2xl hover:border-blue-400 relative overflow-hidden"
                      style={{ borderColor: '#E2EBF5', boxShadow: '0 4px 20px rgba(7, 17, 31, 0.04)' }}
                    >
                      {/* Top Accent Gradient Line on Hover */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Header in Card: Sora Number + Category Pill + Icon */}
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-sm px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 tracking-tight group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                              {s.num}
                            </span>
                            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              <span className={`w-1.5 h-1.5 rounded-full ${s.colorDot}`} />
                              {s.category}
                            </span>
                          </div>

                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm"
                            style={{ background: 'rgba(21,88,212,0.08)', color: '#1558D4' }}
                          >
                            <Icon size={20} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className="font-bold text-xl mb-2.5 text-slate-900 group-hover:text-blue-600 transition-colors duration-200"
                          style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.03em' }}
                        >
                          {s.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed mb-5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          {s.desc}
                        </p>

                        {/* Metric Micro-Widget */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50/70 border border-blue-100/80 mb-6 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                          <Zap size={12} className="text-blue-600" />
                          <span className="text-[11px] font-bold text-blue-700 tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {s.metric}
                          </span>
                        </div>
                      </div>

                      {/* Footer: Tags & Animated Arrow Button */}
                      <div>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {s.tags.map((t) => (
                            <span
                              key={t}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-100"
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                          <span className="underline-reveal">Learn capability</span>
                          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300">
                            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
          </div>

          {/* Bottom Callout Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 p-8 lg:p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
            style={{ background: 'linear-gradient(135deg, #07111F 0%, #0A1E38 100%)' }}
          >
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 bg-blue-500/10 border border-blue-400/20">
                <Sparkles size={12} className="text-cyan-400" />
                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Custom Engineering Available
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                Need a bespoke platform or specialized architecture?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                We build purpose-engineered software, automated workflows, and complex integrations designed for your exact business requirements.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center gap-4 flex-shrink-0">
              <Link to="/contact" data-cta className="btn-primary-white text-sm">
                Talk to Our Team <ArrowUpRight size={14} />
              </Link>
              <Link to="/services" className="text-sm font-semibold text-white/80 hover:text-white inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-white/30 transition-all">
                All 8 Services <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED WORK
      ══════════════════════════════════════════════════════════ */}
      <section className="py-0 border-t" style={{ background: 'var(--void)', borderColor: 'rgba(255,255,255,0.08)' }}>
        {/* Section header */}
        <div className="container-wide py-16">
          <div className="flex items-end justify-between">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <p className="section-label">Selected work</p>
              <h2 style={{ color: '#ffffff', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}>
                Projects we're<br />proud of.
              </h2>
            </motion.div>
            <Link to="/work" className="hidden md:flex items-center gap-2 text-sm font-semibold group link-lift" style={{ color: '#0BC4E3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
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
            <div
              className="block group relative border-t"
              style={{ borderColor: p.isLight ? '#E2EBF5' : 'rgba(255,255,255,0.06)' }}
            >
              <div
                className="min-h-[58vh] lg:min-h-[64vh] flex flex-col lg:flex-row items-stretch relative overflow-hidden"
                style={{ background: p.bg }}
              >
                {/* Content Side */}
                <div className={`flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-between ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <div>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-6">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                        style={{
                          background: `${p.accent}18`,
                          color: p.accent,
                          border: `1px solid ${p.accent}30`,
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {p.industry}
                      </span>
                      {p.liveUrl && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold transition-all hover:scale-105"
                          style={{
                            background: 'rgba(11, 196, 227, 0.12)',
                            color: '#38D9F0',
                            border: '1px solid rgba(11, 196, 227, 0.35)',
                            fontFamily: 'Plus Jakarta Sans, sans-serif',
                          }}
                        >
                          <Globe size={11} /> quantaxsestimation.com <ArrowUpRight size={11} />
                        </a>
                      )}
                      <span className="text-[10px] font-bold tracking-widest uppercase ml-auto text-cyan-400" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        Flagship Case Study
                      </span>
                    </div>

                    {/* Title */}
                    <Link to={`/work/${p.id}`}>
                      <h3
                        className="font-bold mb-4 leading-tight transition-colors duration-300 hover:text-cyan-400"
                        style={{
                          color: p.isLight ? '#07111F' : '#ffffff',
                          fontFamily: 'Sora, sans-serif',
                          fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                          letterSpacing: '-0.035em',
                        }}
                      >
                        {p.title}
                      </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: p.isLight ? '#334155' : '#CBD5E1', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {p.desc}
                    </p>

                    {/* Real Client Summary Box */}
                    {p.id === 'quantaxs-estimation' && (
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600" />
                        <p className="text-xs text-slate-300 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          Built for US general contractors, wood framing sub-contractors, and material suppliers looking for fast, board-foot accurate construction material takeoffs and bid-ready spreadsheets.
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            🌐 Live Production Client · quantaxsestimation.com
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Highlights Pills */}
                    {p.highlights && (
                      <div className="flex flex-wrap gap-2 mb-8">
                        {p.highlights.map((h) => (
                          <span
                            key={h}
                            className="text-xs px-3 py-1 rounded-lg font-medium"
                            style={{
                              background: p.isLight ? '#E2EBF5' : 'rgba(255,255,255,0.06)',
                              color: p.isLight ? '#334155' : '#E2EBF5',
                              border: p.isLight ? '1px solid #CBD5E1' : '1px solid rgba(255,255,255,0.08)',
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                            }}
                          >
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Metrics Stats Row */}
                    {p.stats && (
                      <div className="grid grid-cols-3 gap-3 pt-6 border-t" style={{ borderColor: p.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.1)' }}>
                        {p.stats.map((st) => (
                          <div key={st.label}>
                            <div className="text-xl sm:text-2xl font-bold num-display" style={{ color: p.accent, letterSpacing: '-0.03em' }}>
                              {st.value}
                            </div>
                            <div className="text-[10px] font-bold tracking-wider uppercase mt-0.5" style={{ color: p.isLight ? '#475569' : '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="flex flex-wrap items-center gap-4 mt-8 pt-6 border-t" style={{ borderColor: p.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.08)' }}>
                    <Link
                      to={`/work/${p.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:translate-x-1"
                      style={{ color: p.accent, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      Read full case study <ArrowUpRight size={15} />
                    </Link>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
                        style={{
                          background: 'linear-gradient(135deg, #0BC4E3 0%, #2570E8 100%)',
                          color: '#ffffff',
                          fontFamily: 'Plus Jakarta Sans, sans-serif',
                        }}
                      >
                        <Globe size={13} /> Visit Live Website <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Showcase Panel */}
                <div className="flex-1 p-6 sm:p-10 lg:p-14 flex items-center justify-center relative overflow-hidden" style={{ background: p.accentSoft }}>
                  {/* Background ambient glow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="w-96 h-96 rounded-full opacity-40 blur-3xl"
                      style={{ background: `radial-gradient(circle, ${p.accent}40 0%, transparent 70%)` }}
                    />
                  </div>

                  {/* Interactive Showcase Mockup Component */}
                  <QuantaxsShowcaseMockup />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ══════════════════════════════════════════════════════════
          INDUSTRIES — dark spotlight grid
      ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32" style={{ background: 'var(--void)' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-start">
            {/* Left header */}
            <div>
              <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <p className="section-label mb-4">Industries</p>
                <h2
                  className="font-bold leading-[1.06] tracking-tight text-white mb-6 text-glow-blue"
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', letterSpacing: '-0.04em' }}
                >
                  Software for how your industry works.
                </h2>
                <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(160, 175, 194, 0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
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
                      fontFamily: 'Plus Jakarta Sans, sans-serif',
                      letterSpacing: '0.04em',
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
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#4A90F5', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Challenges</p>
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
                      <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: '#0BC4E3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>What we build</p>
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
          PROCESS — INTERACTIVE AGILE METHODOLOGY (CLEAN EDITORIAL SOLID WHITE)
      ══════════════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative overflow-hidden border-t" style={{ background: '#FFFFFF', borderColor: '#E2EBF5' }}>
        {/* Subtle decorative background ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/80 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container-wide relative z-10">
          {/* Header & Interactive View Toggle */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3 bg-blue-50 border border-blue-200/70 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  7-Stage Delivery Methodology
                </span>
              </div>
              <h2 style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.04em', lineHeight: 1.06 }}>
                A process built for<br />real-world delivery.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Every sprint is structured for crystal-clear accountability, weekly live demonstrations, and continuous production readiness.
              </p>
            </motion.div>

            {/* View Mode Switcher + Full Process Link */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80">
                <button
                  onClick={() => setProcessViewMode('stepper')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    processViewMode === 'stepper'
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <Sparkles size={14} className={processViewMode === 'stepper' ? 'text-cyan-400' : 'text-slate-500'} />
                  <span>Interactive Explorer</span>
                </button>
                <button
                  onClick={() => setProcessViewMode('grid')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    processViewMode === 'grid'
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <Layers size={14} className={processViewMode === 'grid' ? 'text-cyan-400' : 'text-slate-500'} />
                  <span>8-Stage Bento Grid</span>
                </button>
              </div>

              <Link
                to="/process"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-100/60 text-sm font-semibold text-blue-700 transition-all hover:gap-3 group"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span>Full Process Page</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* VIEW MODE 1: INTERACTIVE STEPPER EXPLORER */}
          {processViewMode === 'stepper' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Stepper Navigation Track */}
              <div className="relative">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pb-2 no-scrollbar">
                  {processSteps.map((step, idx) => {
                    const StepIcon = step.icon
                    const isActive = activeProcessStep === idx
                    return (
                      <button
                        key={step.num}
                        onClick={() => setActiveProcessStep(idx)}
                        className={`p-3.5 rounded-2xl border text-left transition-all duration-300 relative group flex flex-col justify-between ${
                          isActive
                            ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                              isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-blue-600 group-hover:bg-blue-100/70'
                            }`}
                            style={{ fontFamily: 'Sora, sans-serif' }}
                          >
                            {step.num}
                          </span>
                          <StepIcon
                            size={16}
                            className={`transition-transform duration-300 group-hover:scale-110 ${
                              isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-blue-600'
                            }`}
                          />
                        </div>
                        <div>
                          <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-800 group-hover:text-blue-600'}`} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {step.title}
                          </div>
                          <div className={`text-[11px] font-semibold tracking-tight ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {step.timeline}
                          </div>
                        </div>
                        {isActive && (
                          <motion.div
                            layoutId="activeProcessDot"
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-slate-900 rotate-45 rounded-sm z-10"
                          />
                        )}
                      </button>
                    )
                  })}
                </div>

                {/* Single Sleek Progress bar line */}
                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-2">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600"
                    animate={{ width: `${((activeProcessStep + 1) / processSteps.length) * 100}%` }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  />
                </div>
              </div>

              {/* Spotlight Active Stage Display (High contrast cockpit) */}
              <AnimatePresence mode="wait">
                {(() => {
                  const current = processSteps[activeProcessStep]
                  const StepIcon = current.icon
                  return (
                    <motion.div
                      key={current.num}
                      initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="p-8 lg:p-12 rounded-3xl text-white relative overflow-hidden border shadow-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(7, 19, 34, 0.98) 0%, rgba(3, 8, 15, 0.99) 100%)',
                        borderColor: 'rgba(11, 196, 227, 0.35)',
                        boxShadow: '0 25px 60px -15px rgba(2, 6, 23, 0.35), 0 10px 30px rgba(7, 17, 31, 0.08)',
                      }}
                    >
                      {/* Ambient background glow */}
                      <div
                        className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none opacity-20"
                        style={{ background: current.color }}
                      />

                      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start relative z-10">
                        {/* Left Side: Overview */}
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span
                              className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                              style={{ background: `${current.color}25`, color: '#38BDF8', border: `1px solid ${current.color}45`, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              Phase {current.num} // {current.phase}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/10" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              <Clock size={12} className="text-cyan-400" />
                              {current.timeline}
                            </span>
                            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              <Zap size={12} />
                              {current.metric}
                            </span>
                          </div>

                          <div className="flex items-start gap-4 mb-4">
                            <div
                              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                              style={{ background: `${current.color}20`, border: `1px solid ${current.color}40`, color: '#38BDF8' }}
                            >
                              <StepIcon size={28} />
                            </div>
                            <div>
                              <h3 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                                {current.title}
                              </h3>
                              <p className="text-cyan-400 text-xs tracking-wider uppercase mt-1 font-bold" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                {current.tagline}
                              </p>
                            </div>
                          </div>

                          <p className="text-slate-300 text-base lg:text-lg leading-relaxed mt-6 mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {current.desc}
                          </p>

                          {/* Navigation Controls */}
                          <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                            <button
                              onClick={() => setActiveProcessStep(Math.max(0, activeProcessStep - 1))}
                              disabled={activeProcessStep === 0}
                              className={`px-4 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 transition-all ${
                                activeProcessStep === 0
                                  ? 'opacity-40 cursor-not-allowed bg-white/5 text-slate-400'
                                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                              }`}
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              <ChevronLeft size={16} /> Previous Stage
                            </button>
                            <button
                              onClick={() => setActiveProcessStep(Math.min(processSteps.length - 1, activeProcessStep + 1))}
                              disabled={activeProcessStep === processSteps.length - 1}
                              className={`px-5 py-2.5 rounded-xl text-xs font-bold inline-flex items-center gap-2 transition-all ${
                                activeProcessStep === processSteps.length - 1
                                  ? 'opacity-40 cursor-not-allowed bg-white/5 text-slate-400'
                                  : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/25'
                              }`}
                              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                            >
                              Next Stage <ChevronRight size={16} />
                            </button>
                            <span className="text-xs text-slate-400 font-semibold ml-auto" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              {activeProcessStep + 1} of {processSteps.length}
                            </span>
                          </div>
                        </div>

                        {/* Right Side: Deliverables & Client Role Hub */}
                        <div className="p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
                          <div>
                            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-cyan-300 uppercase mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              <CheckCircle2 size={14} /> Key Deliverables Handed Over
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {current.deliverables.map((item) => (
                                <div
                                  key={item}
                                  className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200"
                                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
                                  <span className="font-semibold">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/20">
                            <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-1 flex items-center gap-1.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              <Users size={12} /> Your Role & Collaboration
                            </p>
                            <p className="text-xs text-slate-300 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              {current.clientRole}
                            </p>
                          </div>

                          <div>
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              Tooling & Engineering Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {current.tools.map((t) => (
                                <span
                                  key={t}
                                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-300"
                                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })()}
              </AnimatePresence>

              {/* Bottom Quick Action Strip */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
                      Ready to kick off Stage 01 Discovery for your product?
                    </h4>
                    <p className="text-xs text-slate-600" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Zero obligation. We map your requirements and return a crystal-clear technical blueprint.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Link to="/contact" className="btn-primary text-xs whitespace-nowrap shadow-md">
                    Start Discovery Sprint <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* VIEW MODE 2: COMPLETE 8-STAGE BENTO GRID */}
          {processViewMode === 'grid' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {processSteps.map((step, i) => {
                const StepIcon = step.icon
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="p-7 rounded-2xl border transition-all duration-300 hover:border-blue-400 hover:shadow-xl group relative overflow-hidden flex flex-col justify-between bg-white"
                    style={{
                      borderColor: '#E2EBF5',
                      boxShadow: '0 4px 20px rgba(7, 17, 31, 0.04)',
                    }}
                  >
                    {/* Top gradient glow line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(90deg, #1558D4, #0BC4E3)` }}
                    />

                    <div>
                      {/* Step Number & Phase Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {step.num}
                        </span>
                        <span
                          className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          {step.phase}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm bg-blue-50 text-blue-600 border border-blue-100"
                      >
                        <StepIcon size={22} />
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-[11px] font-bold text-blue-600 mb-3 uppercase tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {step.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Deliverables tags & Timeline Footer */}
                    <div className="pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {step.deliverables.slice(0, 2).map((d) => (
                          <span
                            key={d}
                            className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-100"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            ✓ {d}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        <span>Timeline:</span>
                        <span className="font-bold text-slate-900">{step.timeline}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* CARD 08: SPRINT KICKOFF HUB (INTERACTIVE ACTION CARD) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 7 * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-7 rounded-2xl border relative overflow-hidden flex flex-col justify-between text-white shadow-xl group"
                style={{
                  background: 'linear-gradient(135deg, #07111F 0%, #0A1E38 100%)',
                  borderColor: 'rgba(56, 189, 248, 0.4)',
                  boxShadow: '0 20px 40px -15px rgba(2, 6, 23, 0.4)',
                }}
              >
                {/* Background glow orb */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-400" style={{ fontFamily: 'Sora, sans-serif' }}>08</span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Slots Open
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-sm group-hover:scale-110 transition-transform">
                    <Rocket size={22} />
                  </div>

                  <h3 className="font-bold text-lg text-white mb-1.5" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Your Project Kickoff
                  </h3>
                  <p className="text-[11px] font-bold text-cyan-300 uppercase tracking-tight mb-3" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Fast-Track Sprint Launch
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    Turn your specification or idea into an active agile sprint. Full architecture, Figma wireframes, and production builds.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="text-[11px] text-slate-300 mb-3 flex items-center justify-between" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    <span>Average MVP:</span>
                    <span className="font-bold text-cyan-300">{`4–6 Weeks`}</span>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold text-center inline-flex items-center justify-center gap-2 transition-all shadow-md group/btn"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    <span>Start Discovery Call</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
