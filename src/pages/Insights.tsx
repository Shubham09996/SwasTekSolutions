// Insights page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Clock, Tag } from 'lucide-react'
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

const categories = ['All', 'Web Development', 'Software', 'CRM', 'Automation', 'AI', 'UI/UX', 'Technology']

const articles = [
  {
    slug: 'why-custom-crm-beats-off-the-shelf',
    category: 'CRM',
    title: 'Why a custom CRM outperforms off-the-shelf software for most growing businesses.',
    desc: 'Generic CRM tools make assumptions about how businesses sell. Custom CRM is built around your actual process — which means your team uses it.',
    date: 'September 2026',
    readTime: '6 min',
    featured: true,
  },
  {
    slug: 'what-to-build-first-mvp-vs-full-product',
    category: 'Software',
    title: 'MVP or full product? How to decide what to build first.',
    desc: "One of the most expensive mistakes in software development is building too much before you've validated the core idea. Here's how to think about it.",
    date: 'August 2026',
    readTime: '5 min',
    featured: true,
  },
  {
    slug: 'business-automation-where-to-start',
    category: 'Automation',
    title: 'Business automation: where to start when everything feels like it could be automated.',
    desc: "Not every manual process is worth automating. Here's a practical framework for identifying which workflows to tackle first.",
    date: 'August 2026',
    readTime: '7 min',
    featured: false,
  },
  {
    slug: 'website-vs-web-application-whats-the-difference',
    category: 'Web Development',
    title: "Website vs web application: what's the actual difference and why it matters.",
    desc: 'The distinction affects your technology choices, development approach and long-term maintenance. Getting it right saves budget and time.',
    date: 'July 2026',
    readTime: '4 min',
    featured: false,
  },
  {
    slug: 'ai-integration-practical-guide',
    category: 'AI',
    title: 'A practical guide to AI integration in business software.',
    desc: "AI integration is most useful when it solves a specific, bounded problem. Here's how to identify where AI genuinely adds value in your operations.",
    date: 'July 2026',
    readTime: '8 min',
    featured: false,
  },
  {
    slug: 'saas-architecture-decisions-that-matter',
    category: 'Technology',
    title: 'The SaaS architecture decisions you need to get right from the start.',
    desc: 'Multi-tenancy, billing, authentication and data architecture — these choices are expensive to undo. Here\'s what to consider before you build.',
    date: 'June 2026',
    readTime: '9 min',
    featured: false,
  },
  {
    slug: 'ui-ux-design-for-business-software',
    category: 'UI/UX',
    title: 'Why business software deserves the same design attention as consumer apps.',
    desc: 'Internal tools and operations platforms affect productivity every day. Poorly designed software has a real cost.',
    date: 'June 2026',
    readTime: '6 min',
    featured: false,
  },
  {
    slug: 'api-integration-strategy',
    category: 'Technology',
    title: 'Building an integration strategy: how to connect your business tools without creating chaos.',
    desc: "Point-to-point integrations become unmanageable fast. Here's how to think about integrations architecturally, not just tactically.",
    date: 'May 2026',
    readTime: '7 min',
    featured: false,
  },
]

const categoryColors: Record<string, string> = {
  'CRM': '#1558D4',
  'Software': '#0BC4E3',
  'Automation': '#5B3CF5',
  'Web Development': '#1558D4',
  'AI': '#0BC4E3',
  'Technology': '#5B3CF5',
  'UI/UX': '#1558D4',
}

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  const featured = filtered.filter(a => a.featured)
  const rest = filtered.filter(a => !a.featured)

  return (
    <PageTransition
      title="Insights | SwasTek Solutions"
      description="Articles on software development, CRM, automation, AI and digital technology for business."
    >
      {/* ═══════════════════════════════════════════════════════
          DARK HERO
      ═══════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden grain-overlay" style={{ background: 'var(--void)' }}>
        <div className="absolute inset-0 hero-grid opacity-100" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.18) 0%, transparent 68%)', top: '-15%', right: '0%', filter: 'blur(80px)' }} />
          <div className="orb-2 absolute" style={{ width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,196,227,0.10) 0%, transparent 70%)', bottom: '5%', left: '10%', filter: 'blur(80px)' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-2 mb-10"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
              <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Insights
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-14 items-end">
            <div>
              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-none text-white"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.9rem, 4vw, 4rem)', letterSpacing: '-0.04em' }}
                >
                  Thinking on software,
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.9rem, 4vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
                >
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    business and technology.
                  </span>
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg leading-relaxed self-end"
              style={{ color: 'rgba(160,175,194,0.88)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Practical articles on software development, CRM, automation and digital technology for businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FILTER TABS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-b sticky top-16 z-30" style={{ borderColor: '#E2EBF5', backdropFilter: 'blur(20px)', background: 'rgba(255,255,255,0.95)' }}>
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden"
                style={{
                  background: activeCategory === cat ? '#1558D4' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : '#536880',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '0.04em',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#1558D4' : '#E2EBF5',
                  fontSize: '11px',
                }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ARTICLES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Featured (2-column large cards) */}
              {featured.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {featured.map((article, i) => {
                    const color = categoryColors[article.category] || '#1558D4'
                    return (
                      <FadeUp key={article.slug} delay={i * 0.08}>
                        <Link to={`/insights/${article.slug}`} className="block group h-full">
                          <article
                            className="h-full flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                            style={{ borderColor: '#E2EBF5', background: 'linear-gradient(145deg, #F7FAFD 0%, #EEF3FA 100%)', boxShadow: '0 4px 24px rgba(7,17,31,0.04)' }}
                          >
                            {/* Corner glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at top right, ${color}12, transparent 70%)` }} />

                            <div className="flex items-center justify-between mb-6">
                              <span
                                className="text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider uppercase"
                                style={{ background: `${color}14`, color, fontFamily: 'Plus Jakarta Sans, sans-serif', border: `1px solid ${color}20` }}
                              >
                                {article.category}
                              </span>
                              <div className="flex items-center gap-1.5 text-xs" style={{ color: '#8DA3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                                <Clock size={11} />
                                {article.readTime} read
                              </div>
                            </div>

                            <h2
                              className="font-bold text-xl leading-snug mb-4 flex-1 transition-colors group-hover:text-[#1558D4]"
                              style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.025em' }}
                            >
                              {article.title}
                            </h2>
                            <p className="text-sm leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              {article.desc}
                            </p>

                            <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: '#E2EBF5' }}>
                              <span className="text-xs" style={{ color: '#8DA3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{article.date}</span>
                              <motion.div
                                className="flex items-center gap-1.5 text-xs font-semibold"
                                animate={{ x: 0 }}
                                whileHover={{ x: 3 }}
                                style={{ color: '#1558D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                              >
                                Read article <ArrowUpRight size={13} />
                              </motion.div>
                            </div>
                          </article>
                        </Link>
                      </FadeUp>
                    )
                  })}
                </div>
              )}

              {/* Rest — 3-column grid */}
              {rest.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {rest.map((article, i) => {
                    const color = categoryColors[article.category] || '#1558D4'
                    return (
                      <FadeUp key={article.slug} delay={i * 0.06}>
                        <Link to={`/insights/${article.slug}`} className="block group h-full">
                          <article
                            className="h-full flex flex-col p-7 rounded-2xl border transition-all duration-400 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                            style={{ borderColor: '#E2EBF5', boxShadow: '0 2px 12px rgba(7,17,31,0.03)' }}
                          >
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: `radial-gradient(circle at top right, ${color}08, transparent 70%)` }} />

                            <div className="flex items-center gap-2 mb-5">
                              <Tag size={11} style={{ color }} />
                              <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{article.category}</span>
                              <div className="flex-1" />
                              <span className="text-[10px]" style={{ color: '#8DA3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{article.readTime}</span>
                            </div>

                            <h2
                              className="font-bold text-base leading-snug mb-3 flex-1 transition-colors group-hover:text-[#1558D4]"
                              style={{ color: '#07111F', fontFamily: 'Sora, sans-serif', letterSpacing: '-0.02em' }}
                            >
                              {article.title}
                            </h2>
                            <p className="text-sm leading-relaxed mb-5" style={{ color: '#536880', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                              {article.desc}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: '#E2EBF5' }}>
                              <span className="text-xs" style={{ color: '#8DA3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{article.date}</span>
                              <ArrowUpRight size={14} className="transition-all duration-200 opacity-25 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: '#1558D4' }} />
                            </div>
                          </article>
                        </Link>
                      </FadeUp>
                    )
                  })}
                </div>
              )}

              {filtered.length === 0 && (
                <div className="text-center py-20">
                  <p style={{ color: '#8DA3B8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>No articles in this category yet.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  )
}
