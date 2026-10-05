import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Globe,
  ExternalLink,
} from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  )
}

const caseStudies: Record<string, {
  title: string;
  industry: string;
  services: string[];
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  tech: string[];
  outcome: string;
  stats?: { value: string; label: string }[];
  accent: string;
  bg: string;
  isLight: boolean;
  liveUrl?: string;
}> = {
  'quantaxs-estimation': {
    title: 'Quantax Estimation Platform',
    industry: 'Construction Estimating & Material Takeoffs',
    services: ['Web Platform Architecture', 'Blueprint Upload Funnel', 'Regional SEO Strategy', 'Responsive UI Engineering'],
    stats: [
      { value: '24–48h', label: 'Turnaround Time' },
      { value: '15+', label: 'Trade Divisions' },
      { value: 'Excel & Plans', label: 'Bid Deliverables' },
      { value: 'NJ · CA · TX', label: 'Target Markets' },
    ],
    challenge: 'Quantax Estimation provides professional construction cost estimating, lumber takeoff packages, and material quantification for contractors across the United States. They needed a dedicated, fast digital website to display their multi-trade estimation capabilities and capture blueprint upload quote requests from general contractors and trade subcontractors.',
    approach: 'We developed a high-speed web platform engineered around contractor user behavior: dedicated service breakdown pages for 15+ trade divisions, simple blueprint upload forms (PDF, DWG, TIFF), clear deliverable previews (Excel spreadsheets with formulas & color-coded plan markups), and targeted regional SEO for New Jersey, California, and Texas.',
    solution: 'A clean, modern website that positions Quantax Estimation as an authoritative US takeoff partner. The site features clear division breakdowns for Lumber & Wood Framing, Drywall, Concrete, Roofing, and MEP trades, alongside direct contact funnels and mobile-optimized project submission workflows.',
    features: [
      'Lumber & Wood Framing Takeoff Service Showcase',
      'Drywall, Concrete, Roofing & MEP Trade Pages',
      'Architectural Blueprint & Plan Upload Request Flow',
      'Itemized Excel Spreadsheets & Color-Coded Markups Preview',
      'Regional SEO Architecture for NJ, California & Texas',
      'Standardized 24–48 Hour Turnaround SLA Presentation',
      'Mobile-First Responsive Layout for On-Site Contractors',
      'Direct Phone & Email Quote Consultation Routing',
    ],
    tech: ['React / Vite', 'TypeScript', 'Tailwind CSS', 'Modern HTML5/CSS3', 'SEO Best Practices', 'Form & Asset Ingestion'],
    outcome: 'Quantax Estimation established a strong digital presence across the US construction market, allowing contractors in New Jersey, California, Texas, and nationwide to easily review services, upload project blueprints, and receive 24–48 hour turnaround takeoff proposals.',
    accent: '#0BC4E3',
    bg: '#060D18',
    isLight: false,
    liveUrl: 'https://quantaxsestimation.com/',
  },
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const data = caseStudies[slug || '']

  if (!data) {
    return (
      <PageTransition title="Project Not Found | SwasTek Solutions">
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Project not found</h1>
          <Link to="/work" className="btn-primary mt-6 inline-flex">View all work <ArrowUpRight size={14} /></Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition title={`${data.title} | SwasTek Solutions`} description={data.challenge}>
      {/* Hero */}
      <section className="pt-[74px] pb-8 sm:pt-24 sm:pb-14 md:pt-32 md:pb-20 min-h-[40vh] sm:min-h-[50vh] flex items-end relative overflow-hidden" style={{ background: data.isLight ? 'linear-gradient(160deg, #EFF4FA 0%, #ffffff 60%)' : `linear-gradient(135deg, ${data.bg} 0%, #0E2040 100%)` }}>
        <div className="container-wide relative z-10">
          <FadeUp>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-8">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase" style={{ color: data.accent, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {data.industry}
              </span>
              {data.liveUrl && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
                  style={{
                    background: 'linear-gradient(135deg, #0BC4E3 0%, #2570E8 100%)',
                    color: '#ffffff',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                  }}
                >
                  <Globe size={12} /> Visit Live Platform <ExternalLink size={12} />
                </a>
              )}
            </div>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6" style={{ color: data.isLight ? '#0B1A2E' : '#ffffff', fontFamily: 'Sora, sans-serif' }}>
              {data.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-10">
              {data.services.map((s) => (
                <span key={s} className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded-full font-semibold" style={{ background: data.isLight ? '#EBF4FF' : 'rgba(255,255,255,0.08)', color: data.isLight ? '#1860D4' : '#E2EBF5', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {s}
                </span>
              ))}
            </div>

            {/* KPI Stats Row in Hero */}
            {data.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-8 border-t" style={{ borderColor: data.isLight ? '#CBD5E1' : 'rgba(255,255,255,0.1)' }}>
                {data.stats.map((st) => (
                  <div key={st.label} className="p-3 sm:p-4 rounded-2xl" style={{ background: data.isLight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.04)', border: data.isLight ? '1px solid #E2EBF5' : '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="text-xl sm:text-3xl font-bold num-display" style={{ color: data.accent, letterSpacing: '-0.03em' }}>
                      {st.value}
                    </div>
                    <div className="text-[10px] font-bold tracking-wider uppercase mt-1" style={{ color: data.isLight ? '#64748B' : '#94A3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-16">
            <div className="space-y-8 sm:space-y-14">
              <FadeUp>
                <p className="section-label">The challenge</p>
                <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem' }}>
                  {data.challenge}
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <p className="section-label">Our approach</p>
                <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem' }}>
                  {data.approach}
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="section-label">The solution</p>
                <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem' }}>
                  {data.solution}
                </p>
              </FadeUp>
              <FadeUp delay={0.12}>
                <div className="p-6 rounded-2xl border-l-4" style={{ background: '#EFF4FA', borderColor: data.accent }}>
                  <p className="section-label">Outcome & Impact</p>
                  <p className="text-base leading-relaxed" style={{ color: '#0B1A2E', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                    {data.outcome}
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-8">
              {data.liveUrl && (
                <FadeUp delay={0.06}>
                  <div className="p-6 rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white shadow-xl" style={{ borderColor: 'rgba(11, 196, 227, 0.35)' }}>
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      <Globe size={14} /> Live Client Production
                    </div>
                    <p className="text-xs text-slate-300 mb-4 leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Experience the live web application and estimation platform actively running in production:
                    </p>
                    <a
                      href={data.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-lg shadow-cyan-500/20"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      Visit quantaxsestimation.com <ExternalLink size={13} />
                    </a>
                  </div>
                </FadeUp>
              )}

              <FadeUp delay={0.08}>
                <div className="p-6 rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <p className="section-label mb-4">Key features</p>
                  <ul className="space-y-2">
                    {data.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#0B1A2E', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: data.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="p-6 rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <p className="section-label mb-4">Technology</p>
                  <div className="flex flex-wrap gap-2">
                    {data.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full font-semibold" style={{ background: '#EBF4FF', color: '#1860D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.12}>
                <Link to="/contact" data-cta className="btn-primary w-full justify-center">
                  Start a similar project <ArrowUpRight size={14} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Back to all work & CTA Strip */}
      <section className="page-section-sm border-t" style={{ background: '#EFF4FA', borderColor: '#E2EBF5' }}>
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link to="/work" className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-blue-600" style={{ color: '#1860D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <ArrowLeft size={16} /> Explore All Capabilities
            </Link>
            <Link to="/contact" data-cta className="btn-primary text-sm inline-flex items-center gap-2">
              Start Your Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

