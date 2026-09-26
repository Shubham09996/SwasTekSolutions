import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>
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
    desc: 'Generic CRM tools make assumptions about how businesses sell. Custom CRM is built around your actual process â€” which means your team uses it.',
    date: 'September 2026',
    readTime: '6 min read',
  },
  {
    slug: 'what-to-build-first-mvp-vs-full-product',
    category: 'Software',
    title: 'MVP or full product? How to decide what to build first.',
    desc: 'One of the most expensive mistakes in software development is building too much before you\'ve validated the core idea. Here\'s how to think about it.',
    date: 'August 2026',
    readTime: '5 min read',
  },
  {
    slug: 'business-automation-where-to-start',
    category: 'Automation',
    title: 'Business automation: where to start when everything feels like it could be automated.',
    desc: 'Not every manual process is worth automating. Here\'s a practical framework for identifying which workflows to tackle first.',
    date: 'August 2026',
    readTime: '7 min read',
  },
  {
    slug: 'website-vs-web-application-whats-the-difference',
    category: 'Web Development',
    title: 'Website vs web application: what\'s the actual difference and why it matters.',
    desc: 'The distinction affects your technology choices, development approach and long-term maintenance. Getting it right saves budget and time.',
    date: 'July 2026',
    readTime: '4 min read',
  },
  {
    slug: 'ai-integration-practical-guide',
    category: 'AI',
    title: 'A practical guide to AI integration in business software.',
    desc: 'AI integration is most useful when it solves a specific, bounded problem. Here\'s how to identify where AI genuinely adds value in your operations.',
    date: 'July 2026',
    readTime: '8 min read',
  },
  {
    slug: 'saas-architecture-decisions-that-matter',
    category: 'Technology',
    title: 'The SaaS architecture decisions you need to get right from the start.',
    desc: 'Multi-tenancy, billing, authentication and data architecture â€” these choices are expensive to undo. Here\'s what to consider before you build.',
    date: 'June 2026',
    readTime: '9 min read',
  },
  {
    slug: 'ui-ux-design-for-business-software',
    category: 'UI/UX',
    title: 'Why business software deserves the same design attention as consumer apps.',
    desc: 'Internal tools and operations platforms affect productivity every day. Poorly designed software has a real cost. Here\'s how to approach it differently.',
    date: 'June 2026',
    readTime: '6 min read',
  },
  {
    slug: 'api-integration-strategy',
    category: 'Technology',
    title: 'Building an integration strategy: how to connect your business tools without creating chaos.',
    desc: 'Point-to-point integrations become unmanageable fast. Here\'s how to think about integrations architecturally, not just tactically.',
    date: 'May 2026',
    readTime: '7 min read',
  },
]

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter((a) => a.category === activeCategory)

  return (
    <PageTransition title="Insights | SwasTek Solutions" description="Articles on software development, CRM, automation, AI and digital technology for business.">
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: 'linear-gradient(160deg, #EFF4FA 0%, #ffffff 60%)' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Insights</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Thinking on software,<br />business and technology.
            </h1>
            <p className="text-lg max-w-xl leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              Practical articles on software development, CRM, automation and digital technology for businesses.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={{
                  background: activeCategory === cat ? '#1860D4' : '#EFF4FA',
                  color: activeCategory === cat ? '#ffffff' : '#3D5168',
                  fontFamily: 'Manrope, sans-serif',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#1860D4' : '#E4EDF7',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <FadeUp key={article.slug} delay={i * 0.06}>
                <Link to={`/insights/${article.slug}`} className="block group h-full">
                  <article className="h-full flex flex-col p-7 rounded-2xl border transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-sm" style={{ borderColor: '#E4EDF7' }}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#EBF4FF', color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
                        {article.category}
                      </span>
                      <span className="text-xs" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>{article.readTime}</span>
                    </div>
                    <h2 className="font-heading font-bold text-lg leading-snug mb-3 flex-1 group-hover:text-blue-600 transition-colors" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      {article.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                      {article.desc}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: '#E4EDF7' }}>
                      <span className="text-xs" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>{article.date}</span>
                      <ArrowUpRight size={15} className="transition-all duration-200 opacity-20 group-hover:opacity-100" style={{ color: '#1860D4' }} />
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

