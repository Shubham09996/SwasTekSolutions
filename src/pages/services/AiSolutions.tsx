import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  Bot,
  FileSearch,
  Cpu,
  Database,
  ShieldCheck,
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

const aiCapabilities = [
  {
    title: 'Automated Document & Invoice Parsing',
    desc: 'Extract structured JSON entities from PDFs, invoices, contracts, and scanned forms with over 99% accuracy—eliminating manual re-typing.',
    icon: FileSearch,
  },
  {
    title: 'Enterprise Vector & Semantic Search',
    desc: 'Retrieve contextual knowledge across proprietary company knowledge bases using embeddings (pgvector, Pinecone), not just rigid keywords.',
    icon: Database,
  },
  {
    title: 'Private LLM Workflows & Agents',
    desc: 'Deploy custom LLM agents that draft customer replies, summarize deal threads, triage support tickets, and execute background tasks safely.',
    icon: Bot,
  },
  {
    title: 'Data Classification & Smart Tagging',
    desc: 'Automatically classify inbound emails, customer sentiment, lead quality tiers, and urgent support escalation requests in milliseconds.',
    icon: Cpu,
  },
  {
    title: 'Strict Data Privacy & Zero-Retention',
    desc: 'Architect enterprise AI solutions where proprietary company data is never used to train public foundation models or leaked to competitors.',
    icon: ShieldCheck,
  },
  {
    title: 'Human-in-the-Loop Approval Queues',
    desc: 'Smart interfaces where AI assists staff by preparing draft outputs while requiring human approval before sending or updating live records.',
    icon: Sparkles,
  },
]

export default function AiSolutions() {
  const [activeTab, setActiveTab] = useState<'parser' | 'rag'>('parser')

  return (
    <PageTransition
      title="Practical AI Solutions & Integrations | SwasTek Solutions"
      description="Practical enterprise AI integrations: document extraction, semantic search, private LLM agents, and business automation."
    >
      <div className="min-h-screen text-slate-100 overflow-hidden" style={{ background: 'var(--void)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>

        {/* ═══════════════════════════════════════════════════════
            HERO SECTION — ULTRA-PREMIUM DARK
        ═══════════════════════════════════════════════════════ */}
        <section className="relative pt-36 pb-20 md:pt-40 md:pb-28 overflow-hidden grain-overlay">
          {/* Ambient Glows & Grid */}
          <div className="absolute inset-0 hero-grid opacity-100 pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="orb-1 absolute"
              style={{
                width: 750,
                height: 750,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(91,60,245,0.22) 0%, transparent 68%)',
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
                background: 'radial-gradient(circle, rgba(11,196,227,0.16) 0%, transparent 70%)',
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
                  className="flex items-center gap-2 mb-6"
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
                      Applied AI Engineering · SwasTek
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
                  AI where it actually solves<br />
                  <span style={{ background: 'linear-gradient(135deg, #5B3CF5 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    real business bottlenecks.
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl"
                >
                  We are software engineers first. We integrate practical AI capabilities into your applications where they measurably eliminate manual operational hours, accelerate data processing, and protect your privacy.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-wrap items-center gap-4"
                >
                  <Link to="/contact" data-cta className="btn-primary">
                    Discuss AI Integration <ArrowUpRight size={15} />
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    Explore All Capabilities
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
                    <p className="text-xl sm:text-2xl font-bold text-white font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>&gt; 99%</p>
                    <p className="text-xs text-slate-400">Document Parsing Accuracy</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-indigo-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>0%</p>
                    <p className="text-xs text-slate-400">Public Training Data Leakage</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>10x</p>
                    <p className="text-xs text-slate-400">Faster Knowledge Retrieval</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: AI Extraction & Vector Search Live Terminal Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 blur-xl opacity-70 pointer-events-none" />

                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border"
                  style={{
                    background: 'linear-gradient(180deg, #07111F 0%, #03080F 100%)',
                    borderColor: 'rgba(91,60,245,0.28)',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(91,60,245,0.15)',
                  }}
                >
                  {/* Chrome Header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#040C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-xs font-semibold text-slate-300 tracking-wide" style={{ fontFamily: 'Sora, sans-serif' }}>
                        SwasTek AI Runtime · Vector Pipeline
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5 border border-white/10 text-xs">
                      {(['parser', 'rag'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-2.5 py-1 rounded-md uppercase font-bold text-[10px] transition-colors ${
                            activeTab === tab ? 'bg-indigo-500/20 text-indigo-300' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {tab === 'parser' ? 'Doc Parser' : 'Vector RAG'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-6 min-h-[350px]">
                    {activeTab === 'parser' ? (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-white/10">
                          <span>INVOICE_OCR_EXTRACTOR.ts</span>
                          <span className="text-emerald-400">99.4% Confidence</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#020710] border border-white/10 text-slate-300 space-y-1.5 leading-relaxed">
                          <p className="text-slate-400">// Ingesting supplier_invoice_9821.pdf (3 pages)</p>
                          <p className="text-cyan-400">➜ Extracted Vendor: <span className="text-white font-bold">"Apex Logistics Ltd"</span></p>
                          <p className="text-cyan-400">➜ Tax ID / GSTIN: <span className="text-white">"07AABCS1429B1Z4"</span></p>
                          <p className="text-cyan-400">➜ Line Items: <span className="text-white">8 items validated</span></p>
                          <p className="text-cyan-400">➜ Net Total: <span className="text-emerald-400 font-bold">$14,850.00 USD</span></p>
                          <p className="text-emerald-400 mt-2">✔ Automatically reconciled against PO #4092</p>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] text-slate-300">
                          <span>Execution Latency: 320ms</span>
                          <span className="text-cyan-400">Zero Manual Keystrokes</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3 font-mono text-xs">
                        <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-white/10">
                          <span>SEMANTIC_KNOWLEDGE_ENGINE</span>
                          <span className="text-cyan-400">pgvector · 1536 dim</span>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#020710] border border-white/10 text-slate-300 space-y-2 leading-relaxed">
                          <p className="text-indigo-300">Query: "What is our enterprise refund SLA policy?"</p>
                          <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                            <p className="text-emerald-300 mb-1">✔ 3 Context Chunks Retrieved (Cosine Similarity 0.92)</p>
                            <p className="text-slate-300">
                              "Enterprise SLA specifies standard refunds processed within 3 business days with account manager sign-off."
                            </p>
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-[11px] text-slate-300">
                          <span>Hallucination Filter: Strict Grounding</span>
                          <span className="text-emerald-400">100% Verified Citations</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Window Bottom Bar */}
                  <div className="flex items-center justify-between px-4 py-2 bg-[#02060E] border-t border-white/10 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      SOC2 / HIPAA Data Isolation Compliant
                    </span>
                    <span>Zero Model Retraining</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CAPABILITIES SECTION
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 sm:py-28 relative border-t border-white/10 bg-[#030914]">
          <div className="container-wide">
            <FadeUp>
              <div className="max-w-2xl mb-14">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-400 mb-3">
                  Applied AI Architecture
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Practical AI for real enterprise operations.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed">
                  We don't build generic AI gimmicks. We engineer deterministic, secure AI integrations that eliminate tedious back-office operations and accelerate decision-making.
                </p>
              </div>
            </FadeUp>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiCapabilities.map((item, i) => {
                const Icon = item.icon
                return (
                  <FadeUp key={item.title} delay={i * 0.07}>
                    <div
                      className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                      style={{
                        background: 'linear-gradient(135deg, rgba(7, 17, 31, 0.7) 0%, rgba(10, 25, 48, 0.4) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:scale-110 transition-transform">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 font-heading" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
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
        <section className="py-20 relative border-t border-white/10 bg-gradient-to-b from-[#030914] to-[#02050B]">
          <div className="container-tight text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
                Is AI the right tool for your problem?
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl mx-auto leading-relaxed">
                Tell us what operational bottlenecks your team is facing. We will give you a transparent, candid architectural assessment of where AI adds real value.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" data-cta className="btn-primary">
                  Have an Honest AI Conversation <ArrowRight size={15} />
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
