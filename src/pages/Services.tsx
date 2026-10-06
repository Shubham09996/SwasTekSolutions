// Services page — SwasTek Solutions (Minimal & Next-Level Redesign)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Palette,
  Compass,
  Target,
  Settings2,
  BarChart3,
  Globe,
  Smartphone,
  ShoppingBag,
  Sparkles,
  Layers,
  Workflow,
  Network,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  ChevronRight,
  Sparkle
} from 'lucide-react'
import PageTransition from '../components/PageTransition'

type CategoryType = 'All' | 'Design & Experience' | 'Engineering & Platforms' | 'Enterprise Systems' | 'AI & Automation'

interface ServiceItem {
  num: string
  title: string
  href: string
  desc: string
  category: CategoryType
  tags: string[]
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>
  color: string
  badgeText: string
}

const services: ServiceItem[] = [
  {
    num: '01',
    title: 'Web Design',
    href: '/services/web-design',
    desc: 'Bespoke digital brand identities, high-converting visual layouts, and responsive interfaces that command authority and captivate audiences.',
    category: 'Design & Experience',
    tags: ['Brand Identity', 'Visual Design', 'Design Systems', 'Responsive Web'],
    icon: Palette,
    color: '#1558D4',
    badgeText: 'Design'
  },
  {
    num: '02',
    title: 'UX/UI Design',
    href: '/services/ui-ux-design',
    desc: 'Human-centered user research, intuitive wireframing, interactive Figma prototypes, and scalable design systems engineered for conversion.',
    category: 'Design & Experience',
    tags: ['User Research', 'Wireframing', 'Figma Prototypes', 'Design Systems'],
    icon: Compass,
    color: '#0BC4E3',
    badgeText: 'UI/UX'
  },
  {
    num: '03',
    title: 'IT Strategy Consulting',
    href: '/services/it-strategy-consulting',
    desc: 'Strategic technology advisory, comprehensive system architecture roadmaps, legacy software modernization, and full IT infrastructure audits.',
    category: 'Enterprise Systems',
    tags: ['Tech Roadmaps', 'System Architecture', 'Legacy Modernization', 'IT Audits'],
    icon: Target,
    color: '#5B3CF5',
    badgeText: 'Strategy'
  },
  {
    num: '04',
    title: 'Custom Software Development',
    href: '/services/custom-software',
    desc: 'Purpose-built enterprise platforms, internal workflow automation engines, and operational toolsets engineered around your exact business mechanics.',
    category: 'Engineering & Platforms',
    tags: ['Enterprise Software', 'Workflow Automation', 'Microservices', 'Custom APIs'],
    icon: Settings2,
    color: '#1558D4',
    badgeText: 'Software'
  },
  {
    num: '05',
    title: 'CRM Development & Portals',
    href: '/services/crm-development',
    desc: 'Custom CRM systems, client onboarding portals, and automated sales pipeline tracking built to streamline team productivity and client retention.',
    category: 'Enterprise Systems',
    tags: ['Sales Pipelines', 'Client Portals', 'Role-Based Access', 'Automation'],
    icon: BarChart3,
    color: '#0BC4E3',
    badgeText: 'CRM'
  },
  {
    num: '06',
    title: 'Web Application Development',
    href: '/services/web-development',
    desc: 'High-performance, secure web applications and portals engineered with modern React, Next.js, Node.js, and edge-native architectures.',
    category: 'Engineering & Platforms',
    tags: ['React & Next.js', 'Cloud APIs', 'Real-Time Data', 'Edge Speed'],
    icon: Globe,
    color: '#1558D4',
    badgeText: 'Web Apps'
  },
  {
    num: '07',
    title: 'Mobile App Development',
    href: '/services/mobile-app-development',
    desc: 'Cross-platform iOS and Android apps engineered with 60fps native performance, biometric authentication, offline synchronization, and push messaging.',
    category: 'Engineering & Platforms',
    tags: ['iOS & Android', 'React Native', 'Offline Sync', 'Biometrics'],
    icon: Smartphone,
    color: '#5B3CF5',
    badgeText: 'Mobile'
  },
  {
    num: '08',
    title: 'E-Commerce Solutions',
    href: '/services/ecommerce',
    desc: 'Custom digital storefronts, friction-free multi-step checkout funnels, automated inventory management, and multi-gateway payment integrations.',
    category: 'Enterprise Systems',
    tags: ['Custom Storefronts', 'Payment Gateways', 'Inventory Sync', 'Checkout UX'],
    icon: ShoppingBag,
    color: '#1558D4',
    badgeText: 'E-Commerce'
  },
  {
    num: '09',
    title: 'AI Solutions & Integrations',
    href: '/services/ai-solutions',
    desc: 'Predictive intelligence, automated document processing, conversational workflows, and custom LLM-powered autonomous agents.',
    category: 'AI & Automation',
    tags: ['LLM Workflows', 'Document AI', 'Autonomous Agents', 'Predictive Logic'],
    icon: Sparkles,
    color: '#0BC4E3',
    badgeText: 'AI & Data'
  },
  {
    num: '10',
    title: 'SaaS Platform Engineering',
    href: '/services/saas-development',
    desc: 'Multi-tenant cloud SaaS architectures with automated subscription billing, granular team permissions, and global high-availability hosting.',
    category: 'Engineering & Platforms',
    tags: ['Multi-Tenancy', 'Stripe Billing', 'RBAC Auth', 'Global Scale'],
    icon: Layers,
    color: '#5B3CF5',
    badgeText: 'SaaS'
  },
  {
    num: '11',
    title: 'Business Workflow Automation',
    href: '/services/business-automation',
    desc: 'Eliminate repetitive manual overhead with custom data pipelines, webhook connectors, error-resistant batch jobs, and system triggers.',
    category: 'AI & Automation',
    tags: ['Data Pipelines', 'Process Automation', 'Webhooks', 'Batch Jobs'],
    icon: Workflow,
    color: '#1558D4',
    badgeText: 'Automation'
  },
  {
    num: '12',
    title: 'API & Cloud Integrations',
    href: '/services/api-integrations',
    desc: 'Seamless data synchronization across third-party ERPs, payment gateways, legacy databases, and distributed microservices with zero downtime.',
    category: 'Engineering & Platforms',
    tags: ['REST & GraphQL', 'ERP Connectors', 'Data Sync', 'Zero Downtime'],
    icon: Network,
    color: '#0BC4E3',
    badgeText: 'Integrations'
  }
]

const categories: CategoryType[] = [
  'All',
  'Design & Experience',
  'Engineering & Platforms',
  'Enterprise Systems',
  'AI & Automation'
]

const pillars = [
  {
    icon: Cpu,
    title: 'Architecture-First Engineering',
    desc: 'Resilient, clean-code foundations built to scale from MVP to millions of concurrent users without structural rewrites.'
  },
  {
    icon: Palette,
    title: 'Pixel-Perfect Interaction Design',
    desc: 'Human-centered Figma design systems translated to code with 60fps micro-animations and cohesive brand authority.'
  },
  {
    icon: Zap,
    title: 'High-Velocity Agile Sprints',
    desc: 'Bi-weekly deployable milestones, real-time staging previews, and transparent direct communication with senior engineers.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security & Reliability',
    desc: 'SOC-2 aligned protocols, strict role-based access control, end-to-end data encryption, and 99.9% uptime architecture.'
  }
]

const techStack = [
  'React 19', 'Next.js 15', 'TypeScript', 'TailwindCSS', 'Node.js', 'Python',
  'PostgreSQL', 'Redis', 'AWS Cloud', 'Docker', 'GraphQL', 'Figma',
  'React Native', 'Supabase', 'Stripe', 'OpenAI API'
]

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(s => s.category === selectedCategory)

  return (
    <PageTransition
      title="Capabilities & Services | SwasTek Solutions"
      description="From bespoke web design and UX/UI to custom software, CRM platforms, and AI workflows, we engineer digital products built around how your business works."
    >
      <div className="relative min-h-screen bg-[#03080F] text-white selection:bg-blue-600 selection:text-white overflow-hidden">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-35"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(21, 88, 212, 0.28) 0%, rgba(11, 196, 227, 0.12) 45%, transparent 70%)',
              filter: 'blur(100px)'
            }}
          />
          <div
            className="absolute top-[40%] -right-[15%] w-[650px] h-[650px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(91, 60, 245, 0.22) 0%, transparent 70%)',
              filter: 'blur(120px)'
            }}
          />
          <div
            className="absolute bottom-[10%] -left-[10%] w-[700px] h-[700px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(11, 196, 227, 0.2) 0%, transparent 70%)',
              filter: 'blur(130px)'
            }}
          />
          {/* Subtle Grid Lines */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: '48px 48px'
            }}
          />
        </div>

        {/* Top Accent Gradient Border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(21, 136, 255, 0.6) 30%, rgba(11, 196, 227, 0.6) 70%, transparent 100%)'
          }}
        />

        {/* ═══════════════════════════════════════════════════════
            HERO SECTION — Spacious, Minimal & Pristine
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-32 sm:pt-40 md:pt-48 pb-14 sm:pb-20 md:pb-24 z-10">
          <div className="container-wide">
            
            {/* Header Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md shadow-sm shadow-cyan-500/5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-300"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Practices & Capabilities
                </span>
              </div>
            </motion.div>

            {/* Main Headline & Lead Content */}
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white font-extrabold tracking-tight"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontSize: 'clamp(2.35rem, 5.5vw, 4.75rem)',
                    lineHeight: 1.06,
                    letterSpacing: '-0.04em'
                  }}
                >
                  What can we <br className="hidden sm:inline" />
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #38D9F0 0%, #2570E8 60%, #7AB2FA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    build for you?
                  </span>
                </motion.h1>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex flex-col justify-end"
              >
                <p
                  className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 font-normal"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  From mission-critical software platforms to high-converting web applications and AI workflows, we engineer digital products around the exact mechanics of your business.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Zap size={15} className="text-cyan-200" />
                    <span>Start a Project</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  <a
                    href="#directory"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all duration-200"
                  >
                    <span>Explore All ({services.length})</span>
                    <ChevronRight size={14} className="text-slate-400" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-14 sm:mt-18 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  100%
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Bespoke Architecture</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  60fps
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Fluid UX & Micro-interactions</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  SOC-2
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Security & Compliance</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  24hr
                </div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">Discovery Consultation</div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CATEGORY FILTER TABS
        ═══════════════════════════════════════════════════════ */}
        <section id="directory" className="relative z-10 pt-4 pb-8 border-t border-white/[0.06] bg-white/[0.01]">
          <div className="container-wide">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Showing {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'}
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat
                  const count = cat === 'All' ? services.length : services.filter(s => s.category === cat).length
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                      }`}
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeCategoryPill"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-md shadow-cyan-500/20"
                          transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                      <span className={`relative z-10 text-[11px] px-1.5 py-0.2 rounded-md ${isActive ? 'bg-white/20 text-white' : 'bg-white/[0.06] text-slate-400'}`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            EDITORIAL SERVICE DIRECTORY — Flawless, Minimal & Fluid
        ═══════════════════════════════════════════════════════ */}
        <section className="relative z-10 pb-20 sm:pb-28">
          <div className="container-wide">
            <div className="border-t border-white/[0.08]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  {filteredServices.map((service, index) => {
                    const Icon = service.icon
                    const isHovered = hoveredIndex === index

                    return (
                      <motion.div
                        key={service.num}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.45, delay: index * 0.04 }}
                      >
                        <Link
                          to={service.href}
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          className="group relative block border-b border-white/[0.08] transition-colors duration-300 overflow-hidden"
                        >
                          {/* Ambient Row Hover Fill */}
                          <div
                            className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
                              isHovered ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                              background: 'linear-gradient(90deg, rgba(21, 88, 212, 0.09) 0%, rgba(11, 196, 227, 0.04) 50%, transparent 100%)'
                            }}
                          />

                          {/* Left Cyan Highlight Bar */}
                          <div
                            className={`absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 transition-all duration-300 ${
                              isHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                            }`}
                          />

                          <div className="relative z-10 py-6 sm:py-8 lg:py-9 px-3 sm:px-6">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                              
                              {/* Left: Number, Icon & Title */}
                              <div className="lg:col-span-5 flex items-center gap-4 sm:gap-6">
                                {/* Number */}
                                <span
                                  className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight transition-colors duration-300 shrink-0 w-10 sm:w-14 ${
                                    isHovered ? 'text-cyan-400' : 'text-slate-600'
                                  }`}
                                  style={{ fontFamily: 'Sora, sans-serif' }}
                                >
                                  {service.num}
                                </span>

                                {/* Icon Box */}
                                <div
                                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300"
                                  style={{
                                    background: isHovered ? `${service.color}25` : 'rgba(255, 255, 255, 0.03)',
                                    border: `1px solid ${isHovered ? `${service.color}60` : 'rgba(255, 255, 255, 0.08)'}`,
                                    boxShadow: isHovered ? `0 0 20px ${service.color}30` : 'none'
                                  }}
                                >
                                  <Icon
                                    size={20}
                                    style={{ color: isHovered ? '#38D9F0' : '#94A3B8' }}
                                    className="transition-colors duration-300"
                                  />
                                </div>

                                {/* Title */}
                                <div>
                                  <h3
                                    className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-300"
                                    style={{ fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
                                  >
                                    {service.title}
                                  </h3>
                                  <span className="lg:hidden text-xs text-slate-400 mt-1 inline-block">
                                    {service.badgeText}
                                  </span>
                                </div>
                              </div>

                              {/* Center: Description & Deliverables Tags */}
                              <div className="lg:col-span-5">
                                <p
                                  className="text-sm sm:text-base text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed font-normal mb-3"
                                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                >
                                  {service.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                  {service.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] group-hover:bg-white/[0.07] text-slate-300 border border-white/[0.06] transition-colors"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Right: Category Badge & Interactive Arrow Button */}
                              <div className="lg:col-span-2 flex items-center justify-between lg:justify-end gap-4 mt-2 lg:mt-0">
                                <span
                                  className="hidden lg:inline-flex text-xs font-semibold px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 group-hover:text-slate-200 transition-colors"
                                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                                >
                                  {service.badgeText}
                                </span>

                                <div
                                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border border-white/[0.12] bg-white/[0.03] group-hover:bg-cyan-500 group-hover:border-cyan-400 text-slate-400 group-hover:text-black transition-all duration-300 shadow-sm group-hover:shadow-cyan-500/40 group-hover:scale-105"
                                >
                                  <ArrowUpRight
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                  />
                                </div>
                              </div>

                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            ENGINEERING PILLARS & HOW WE DELIVER (BENTO GRID)
        ═══════════════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-28 border-t border-white/[0.08] bg-black/40">
          <div className="container-wide">
            <div className="max-w-3xl mb-14 sm:mb-18">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-cyan-300 tracking-wider uppercase mb-3">
                <Sparkle size={12} className="text-cyan-400" />
                The SwasTek Standard
              </div>
              <h2
                className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Engineered with precision.<br className="hidden sm:inline" />
                Delivered with uncompromising velocity.
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mt-3">
                We bridge high-craft user experience with battle-tested distributed engineering.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="group relative p-6 sm:p-7 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            TECHNOLOGY STACK STRIP
        ═══════════════════════════════════════════════════════ */}
        <section className="py-12 border-t border-white/[0.06] bg-white/[0.01]">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="shrink-0">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                  Modern Core Stack:
                </span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            NEXT-LEVEL BENTO CALL-TO-ACTION (CTA)
        ═══════════════════════════════════════════════════════ */}
        <section className="relative py-20 sm:py-28 md:py-36 border-t border-white/[0.08] overflow-hidden">
          {/* Ambient CTA glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] rounded-full opacity-30 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(21, 88, 212, 0.4) 0%, rgba(11, 196, 227, 0.2) 50%, transparent 75%)',
              filter: 'blur(90px)'
            }}
          />

          <div className="container-tight relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-3xl p-8 sm:p-14 md:p-18 overflow-hidden text-center border border-white/[0.12] shadow-2xl backdrop-blur-xl"
              style={{
                background: 'linear-gradient(145deg, rgba(8, 20, 36, 0.85) 0%, rgba(4, 10, 18, 0.95) 100%)',
                boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.9), 0 0 50px rgba(11, 196, 227, 0.12)'
              }}
            >
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 mb-6">
                  <Sparkle size={13} className="text-cyan-400" />
                  Start Your Transformation
                </span>

                <h2
                  className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  Have a vision? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                    Let's engineer it together.
                  </span>
                </h2>

                <p
                  className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 font-normal"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Whether you need end-to-end product development, architecture modernization, or dedicated engineering squads, we're ready to make it happen.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <Zap size={16} className="text-cyan-200" />
                    <span>Start a Project</span>
                    <ArrowUpRight size={16} />
                  </Link>

                  <Link
                    to="/work"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-medium text-sm sm:text-base text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all duration-200"
                  >
                    <span>View Client Work</span>
                  </Link>
                </div>

                {/* Trust Points */}
                <div className="mt-10 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-cyan-400" /> 24hr Consultation Turnaround
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-cyan-400" /> Mutual NDA Protected
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-cyan-400" /> Senior Engineers Only
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  )
}
