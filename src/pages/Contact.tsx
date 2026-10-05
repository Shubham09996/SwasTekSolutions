// Contact page — SwasTek Solutions (ULTRA-PREMIUM NEXT LEVEL)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Clock,
  MapPin,
  Zap,
  ShieldCheck,
  Sparkles,
  Globe,
  Code2,
  Database,
  Smartphone,
  ShoppingBag,
  Layout,
  PenTool,
  Brain,
  ChevronDown,
  Check,
  Copy,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'

const projectScopes = [
  {
    id: 'web-design',
    label: 'Web Design',
    desc: 'Bespoke UI layouts, visual branding & high-conversion landing pages',
    icon: Layout,
  },
  {
    id: 'ui-ux-design',
    label: 'UX/UI Design',
    desc: 'User journey mapping, wireframing, Figma prototypes & design systems',
    icon: PenTool,
  },
  {
    id: 'it-strategy-consulting',
    label: 'IT Strategy Consulting',
    desc: 'Technology roadmaps, architecture review & digital transformation',
    icon: Brain,
  },
  {
    id: 'custom-software',
    label: 'Custom Software Development',
    desc: 'Tailored internal tools, scalable business engines & databases',
    icon: Code2,
  },
  {
    id: 'crm-development',
    label: 'CRM Development',
    desc: 'Custom pipeline management, client portals & automated intake',
    icon: Database,
  },
  {
    id: 'web-development',
    label: 'Web Development',
    desc: 'Fast, secure & scalable fullstack web applications & portals',
    icon: Globe,
  },
  {
    id: 'mobile-app-development',
    label: 'Mobile App Development',
    desc: 'High-performance iOS & Android cross-platform mobile apps',
    icon: Smartphone,
  },
  {
    id: 'ecommerce',
    label: 'E-Commerce Development',
    desc: 'Custom storefronts, payment gateways & checkout funnels',
    icon: ShoppingBag,
  },
]

const promptChips = [
  'Building a new MVP from scratch',
  'Modernizing legacy software',
  'Automating manual team workflows',
  'High-performance API integration',
  'Dedicated contractor portal',
]

const faqs = [
  {
    q: 'How quickly will I receive a proposal after submitting?',
    a: 'We review all project submissions within 24 business hours. A Senior Solutions Architect will schedule a 30-minute discovery call and return a transparent, fixed-milestone technical blueprint with zero hidden fees.',
  },
  {
    q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    a: 'Yes, absolutely. We treat your intellectual property and business specifications with total confidentiality. Check the NDA request box on Step 3 or request one via email, and we will execute a mutual NDA before our deep-dive call.',
  },
  {
    q: 'How does your project pricing work?',
    a: 'We believe in fixed-fee, milestone-based pricing with crystal-clear deliverables. You never receive surprise invoices or vague hourly billing. Every sprint has clear acceptance criteria and live staging demos.',
  },
  {
    q: 'Who owns the intellectual property and source code?',
    a: 'You do. 100% of all code, design tokens, Figma assets, and database schemas developed by SwasTek Solutions are completely owned by your company upon milestone completion.',
  },
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [selectedScopes, setSelectedScopes] = useState<string[]>([])
  const [customScopeText, setCustomScopeText] = useState('')
  const [projectDesc, setProjectDesc] = useState('')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const toggleScope = (scopeId: string) => {
    setSelectedScopes((prev) =>
      prev.includes(scopeId) ? prev.filter((id) => id !== scopeId) : [...prev, scopeId]
    )
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@swastek.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <PageTransition
      title="Contact Us | SwasTek Solutions"
      description="Tell us what you're trying to build. We'll engineer the technology, architecture, and UI/UX behind it."
    >
      <div className="min-h-screen relative text-slate-100 overflow-hidden" style={{ background: '#020712', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Ambient Grid and Glow Orbs */}
        <div className="fixed inset-0 hero-grid opacity-35 pointer-events-none" />
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute"
            style={{
              width: 800,
              height: 800,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(21,88,212,0.22) 0%, transparent 68%)',
              top: '-15%',
              right: '-10%',
              filter: 'blur(90px)',
            }}
          />
          <div
            className="absolute"
            style={{
              width: 600,
              height: 600,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(11,196,227,0.15) 0%, transparent 70%)',
              bottom: '5%',
              left: '-5%',
              filter: 'blur(100px)',
            }}
          />
        </div>

        {/* Top Accent Gradient Border */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.9) 30%, rgba(11,196,227,0.9) 70%, transparent 100%)' }}
        />

        <div className="container-wide pt-32 sm:pt-36 pb-20 relative z-10">
          {/* Header Banner */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-4 bg-cyan-500/10 border border-cyan-500/30">
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-xs font-bold tracking-[0.16em] uppercase text-cyan-300">
                Online & Accepting New Projects
              </span>
            </div>

            <h1
              className="font-bold text-white leading-tight tracking-tight mb-4"
              style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', letterSpacing: '-0.035em' }}
            >
              Let's engineer your{' '}
              <span style={{ background: 'linear-gradient(135deg, #38BDF8 0%, #2570E8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                next breakthrough.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Tell us about your business goals and technical requirements. You speak directly with senior software architects — no pushy sales scripts.
            </p>

            {/* Quick Guarantees Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 text-xs text-slate-200">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <Clock size={13} className="text-cyan-400" /> &lt; 24h Response SLA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <ShieldCheck size={13} className="text-blue-400" /> Mutual NDA Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                <Zap size={13} className="text-cyan-400" /> Free Architecture Blueprint
              </span>
            </div>
          </div>

          {/* Main Grid: Left Trust Column + Right Interactive Project Builder */}
          <div className="grid lg:grid-cols-[1.1fr_1.9fr] gap-10 lg:gap-14 items-start">
            
            {/* ── LEFT PILLAR: Contact Info & Proof Cards ── */}
            <div className="space-y-6 lg:sticky lg:top-28">
              
              {/* Direct Channels Card */}
              <div
                className="p-6 sm:p-7 rounded-3xl border relative overflow-hidden backdrop-blur-xl shadow-xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(15, 30, 60, 0.7) 0%, rgba(6, 15, 30, 0.9) 100%)',
                  borderColor: 'rgba(56, 189, 248, 0.25)',
                }}
              >
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <span className="text-xs font-bold tracking-wider uppercase text-cyan-300">
                    Direct Channels
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Fast Reply
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 group hover:border-cyan-400/40 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</p>
                        <a href="mailto:hello@swastek.com" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">
                          hello@swastek.com
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
                    >
                      {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      <span className="text-[11px] hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Consultation SLA */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Response Commitment</p>
                      <p className="text-sm font-bold text-white">Within 24 business hours</p>
                    </div>
                  </div>

                  {/* Location & Global Delivery */}
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Delivery Model</p>
                      <p className="text-sm font-bold text-white">Delhi, India · Global Delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Engineer Promise Box */}
              <div
                className="p-6 rounded-3xl border relative overflow-hidden text-slate-200"
                style={{
                  background: 'linear-gradient(135deg, rgba(21, 88, 212, 0.15) 0%, rgba(6, 15, 30, 0.6) 100%)',
                  borderColor: 'rgba(21, 88, 212, 0.3)',
                }}
              >
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <ShieldCheck size={16} /> Direct Architect Collaboration
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  You collaborate directly with principal fullstack engineers and UX designers who actually build your software. No commission-driven account managers or third-party outsourcing.
                </p>
                <div className="flex items-center gap-2 text-[11px] font-bold text-cyan-300">
                  <Zap size={12} /> 100% Type-Safe & Scalable Codebase
                </div>
              </div>

              {/* Process Clarity Box */}
              <div
                className="p-5 sm:p-6 rounded-3xl border relative overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, rgba(15, 30, 60, 0.4) 0%, rgba(6, 15, 30, 0.7) 100%)',
                  borderColor: 'rgba(56, 189, 248, 0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-3.5 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <Sparkles size={15} /> What Happens Next?
                </div>
                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5 border border-cyan-500/30">1</span>
                    <p><strong className="text-white">Technical Review:</strong> We analyze your chosen scope & architectural needs.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5 border border-cyan-500/30">2</span>
                    <p><strong className="text-white">Direct Connect:</strong> 30-min discovery session with our Lead Architect.</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5 border border-cyan-500/30">3</span>
                    <p><strong className="text-white">Fixed Blueprint:</strong> Milestone roadmap & transparent estimate within 24h.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT PILLAR: Interactive Multi-Step Project Discovery Form ── */}
            <div>
              {submitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-8 sm:p-12 rounded-3xl border text-center shadow-2xl relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg, rgba(16, 42, 85, 0.95) 0%, rgba(9, 24, 48, 0.98) 100%)',
                    borderColor: 'rgba(11, 196, 227, 0.45)',
                    boxShadow: '0 30px 70px -15px rgba(0,0,0,0.8), 0 0 50px rgba(11, 196, 227, 0.18)',
                  }}
                >
                  <div className="w-20 h-20 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/20">
                    <CheckCircle2 size={40} className="text-cyan-300 animate-pulse" />
                  </div>

                  <h3 className="font-bold text-2xl sm:text-3xl text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Project Blueprint Request Received!
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <strong className="text-white">{form.name || 'there'}</strong>. Our Senior Technical Architect is reviewing your scope requirements now.
                  </p>

                  {/* Next steps roadmap */}
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-left max-w-md mx-auto space-y-3 mb-8 text-xs text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/30 text-cyan-300 flex items-center justify-center font-bold text-[10px] mt-0.5">1</div>
                      <p><strong className="text-white">Review:</strong> We analyze your chosen scope & timeline.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/30 text-cyan-300 flex items-center justify-center font-bold text-[10px] mt-0.5">2</div>
                      <p><strong className="text-white">Direct Connect:</strong> You'll receive an email & call booking invite within 24h.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/30 text-cyan-300 flex items-center justify-center font-bold text-[10px] mt-0.5">3</div>
                      <p><strong className="text-white">Blueprint Delivery:</strong> Milestone roadmap, tech stack selection & transparent fixed pricing.</p>
                    </div>
                  </div>

                  <Link to="/" className="btn-primary-white inline-flex items-center gap-2">
                    Return to Homepage <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ) : (
                /* Multi-Step Wizard Container */
                <div
                  className="rounded-3xl border p-6 sm:p-10 shadow-2xl relative backdrop-blur-2xl"
                  style={{
                    background: 'linear-gradient(145deg, rgba(16, 38, 76, 0.85) 0%, rgba(8, 20, 38, 0.95) 50%, rgba(4, 10, 20, 0.99) 100%)',
                    borderColor: 'rgba(56, 189, 248, 0.3)',
                    boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                  }}
                >
                  {/* Stepper Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold tracking-wider uppercase text-cyan-300">
                        Step {step} of 3
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {step === 1 && '1. Project Scope & Architecture'}
                        {step === 2 && '2. Project Vision & Requirements'}
                        {step === 3 && '3. Direct Consultation Details'}
                      </span>
                    </div>

                    {/* Glowing Progress Track */}
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500"
                        initial={{ width: '33.33%' }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {/* ──── STEP 1: SCOPE SELECTION ──── */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-bold text-xl sm:text-2xl text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                          What are you looking to build or improve?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mb-6">
                          Select all architectural capabilities relevant to your upcoming project.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                          {projectScopes.map((item) => {
                            const Icon = item.icon
                            const isSelected = selectedScopes.includes(item.id)
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => toggleScope(item.id)}
                                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-start gap-3.5 group relative ${
                                  isSelected
                                    ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                                }`}
                              >
                                <div
                                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                                    isSelected ? 'bg-cyan-500 text-slate-950 scale-105' : 'bg-white/10 text-cyan-300 group-hover:scale-105'
                                  }`}
                                >
                                  <Icon size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-1 mb-0.5">
                                    <p className="font-bold text-xs sm:text-sm text-white truncate" style={{ fontFamily: 'Sora, sans-serif' }}>
                                      {item.label}
                                    </p>
                                    <div
                                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                                        isSelected ? 'bg-cyan-400 border-cyan-400 text-slate-950' : 'border-white/20'
                                      }`}
                                    >
                                      {isSelected && <Check size={10} strokeWidth={3} />}
                                    </div>
                                  </div>
                                  <p className="text-[11px] text-slate-300 leading-snug line-clamp-2">
                                    {item.desc}
                                  </p>
                                </div>
                              </button>
                            )
                          })}
                        </div>

                        {/* Custom / Other Specification Input */}
                        <div
                          className={`p-4 rounded-2xl border transition-all duration-300 mb-6 ${
                            customScopeText.trim().length > 0
                              ? 'bg-cyan-500/10 border-cyan-400/80 shadow-lg shadow-cyan-500/10'
                              : 'bg-white/5 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2.5">
                              <div
                                className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                                  customScopeText.trim().length > 0 ? 'bg-cyan-400 text-slate-950 font-bold' : 'bg-white/10 text-cyan-300'
                                }`}
                              >
                                <Sparkles size={16} />
                              </div>
                              <div>
                                <label htmlFor="custom-service-input" className="text-xs sm:text-sm font-bold text-white block cursor-pointer">
                                  Need something different or custom?
                                </label>
                                <span className="text-[11px] text-slate-400">Type your specific service, framework or custom build requirement.</span>
                              </div>
                            </div>
                            {customScopeText.trim().length > 0 && (
                              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex-shrink-0">
                                Custom Added
                              </span>
                            )}
                          </div>
                          <div className="relative mt-2">
                            <input
                              id="custom-service-input"
                              type="text"
                              value={customScopeText}
                              onChange={(e) => setCustomScopeText(e.target.value)}
                              placeholder="e.g. AI Workflow Bots, Cloud DevOps, Custom Payment APIs, Legacy Migration..."
                              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                            />
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <span className="text-xs text-slate-400">
                            {selectedScopes.length + (customScopeText.trim() ? 1 : 0)}{' '}
                            {selectedScopes.length + (customScopeText.trim() ? 1 : 0) === 1 ? 'scope' : 'scopes'} selected
                          </span>
                          <button
                            type="button"
                            onClick={() => setStep(2)}
                            disabled={selectedScopes.length === 0 && customScopeText.trim().length === 0}
                            className="btn-primary text-xs sm:text-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <span>Continue to Project Details</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ──── STEP 2: PROJECT VISION & TIMELINE ──── */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-bold text-xl sm:text-2xl text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                          Tell us about your project vision.
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mb-6">
                          Describe the business problem, expected user workflows, or what success looks like.
                        </p>

                        {/* Quick Prompt Chips */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {promptChips.map((chip) => (
                            <button
                              key={chip}
                              type="button"
                              onClick={() => setProjectDesc((prev) => (prev ? `${prev} ${chip}.` : `${chip}.`))}
                              className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-cyan-300 transition-colors"
                            >
                              + {chip}
                            </button>
                          ))}
                        </div>

                        {/* Description Textarea */}
                        <div className="relative mb-8">
                          <textarea
                            rows={7}
                            value={projectDesc}
                            onChange={(e) => setProjectDesc(e.target.value)}
                            placeholder="e.g. We are building a custom CRM with automated contractor quote submissions, integrated with WhatsApp & PlanSwift. Describe key workflows, features, or business goals..."
                            className="w-full p-4 rounded-2xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none leading-relaxed"
                          />
                          <span className="absolute bottom-3 right-3 text-[10px] text-slate-400 font-mono">
                            {projectDesc.length} chars
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={() => setStep(3)}
                            disabled={projectDesc.trim().length < 8}
                            className="btn-primary text-xs sm:text-sm shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            <span>Continue to Contact Info</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* ──── STEP 3: CONTACT INFO & BUDGET ──── */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-bold text-xl sm:text-2xl text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                          How can our engineering team reach you?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 mb-6">
                          We will send our review, architecture suggestions, and calendar invite within 24 hours.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            <div>
                              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                Your Full Name <span className="text-cyan-400">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                placeholder="e.g. Alex Henderson"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                Work Email <span className="text-cyan-400">*</span>
                              </label>
                              <input
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                placeholder="alex@company.com"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                Company / Business Name
                              </label>
                              <input
                                type="text"
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                placeholder="e.g. Acme Tech Ltd"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                Phone / WhatsApp (Optional)
                              </label>
                              <input
                                type="tel"
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                placeholder="+1 (555) 019-2834"
                                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none transition-all"
                              />
                            </div>
                          </div>

                          {/* Problem-Solving First Commitment */}
                          <div
                            className="p-4 sm:p-5 rounded-2xl border relative overflow-hidden"
                            style={{
                              background: 'linear-gradient(135deg, rgba(21, 88, 212, 0.12) 0%, rgba(6, 15, 30, 0.6) 100%)',
                              borderColor: 'rgba(56, 189, 248, 0.25)',
                            }}
                          >
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                              <ShieldCheck size={16} /> Solution-First Approach · Zero Commercial Pressure
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed mb-3">
                              Our primary goal is to deeply understand your business workflows and solve your exact technical challenges. We outline all architecture, timelines, and tailored milestone pricing together in our discovery call — with zero upfront pressure or hidden costs.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-slate-300">
                              <span className="inline-flex items-center gap-1.5 text-cyan-300">
                                <Check size={13} className="text-cyan-400" /> Free Technical Architecture Session
                              </span>
                              <span className="inline-flex items-center gap-1.5 text-cyan-300">
                                <Check size={13} className="text-cyan-400" /> Fixed-Milestone Roadmap
                              </span>
                              <span className="inline-flex items-center gap-1.5 text-cyan-300">
                                <Check size={13} className="text-cyan-400" /> 100% Confidential
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-6 border-t border-white/10">
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all"
                            >
                              Back
                            </button>
                            <button
                              type="submit"
                              data-cta
                              className="btn-primary text-xs sm:text-sm shadow-xl hover:scale-105 transition-all"
                            >
                              <Zap size={14} />
                              <span>Submit Project Discovery Request</span>
                              <ArrowRight size={14} />
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </div>

          {/* ── FAQ SECTION ACCORDION ── */}
          <div className="mt-24 pt-16 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 block">
                  Transparency & Collaboration
                </span>
                <h2 className="font-bold text-2xl sm:text-3xl text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-400">
                  Everything you need to know before initiating a project sprint with SwasTek Solutions.
                </p>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div
                      key={faq.q}
                      className="rounded-2xl border transition-all overflow-hidden"
                      style={{
                        background: isOpen ? 'rgba(21, 88, 212, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        borderColor: isOpen ? 'rgba(56, 189, 248, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 transition-colors"
                      >
                        <span className="font-bold text-sm sm:text-base text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-cyan-400 transition-transform duration-300 flex-shrink-0 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
