import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  )
}

const articles: Record<string, {
  category: string;
  title: string;
  date: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string }[];
}> = {
  'why-custom-crm-beats-off-the-shelf': {
    category: 'CRM',
    title: 'Why a custom CRM outperforms off-the-shelf software for most growing businesses.',
    date: 'September 2026',
    readTime: '6 min read',
    intro: 'Generic CRM tools make assumptions about how businesses sell. They\'re built for the average company, which means they fit almost nobody perfectly. Custom CRM is built around your actual process â€” and that difference has a real impact on adoption and performance.',
    sections: [
      {
        heading: 'The problem with generic software',
        body: 'Off-the-shelf CRM tools are designed to be flexible enough for any business. That sounds like a benefit, but it creates a real cost: your team has to adapt their workflow to fit the software, rather than the software adapting to fit how they work.\n\nThis matters more than it sounds. When a tool doesn\'t map to how your team actually thinks about their work, it gets worked around. Spreadsheets appear. Notes get kept in email. The CRM becomes a reporting tool that nobody trusts because it\'s not where the real work happens.',
      },
      {
        heading: 'What a custom CRM actually means',
        body: 'A custom CRM isn\'t necessarily a more complex CRM. It\'s a CRM with the right stages for your sales cycle, the right fields for your team\'s context, and the right reports for how your management tracks performance.\n\nThat could be simpler than the generic alternative â€” because it doesn\'t carry the weight of features built for companies with completely different workflows.',
      },
      {
        heading: 'When custom CRM makes sense',
        body: 'Custom CRM makes the most sense when your sales process has genuine complexity that generic tools struggle with â€” multiple divisions, product-specific pipelines, unusual qualification criteria, or reporting requirements that don\'t map to standard metrics.\n\nIt also makes sense when team adoption of existing tools has been poor. If your team is working around the software rather than in it, the software is wrong for the job.',
      },
      {
        heading: 'The build vs buy decision',
        body: 'The question isn\'t always "custom vs off-the-shelf". Sometimes the right answer is to configure an existing platform more deliberately. But configuration has limits, and when those limits create real friction, custom development pays for itself.',
      },
    ],
  },
  'what-to-build-first-mvp-vs-full-product': {
    category: 'Software',
    title: 'MVP or full product? How to decide what to build first.',
    date: 'August 2026',
    readTime: '5 min read',
    intro: 'One of the most expensive mistakes in software development is building too much before you\'ve validated the core idea. The concept of the Minimum Viable Product (MVP) is well understood in theory but poorly applied in practice.',
    sections: [
      {
        heading: 'What MVP actually means',
        body: 'An MVP is not a half-finished product. It\'s the smallest version of the product that lets you learn something real from real users. The emphasis is on learning â€” not on shipping something cheap.\n\nA well-designed MVP looks and works like a real product. It just does fewer things. It does those fewer things well enough that you can observe how people actually use them.',
      },
      {
        heading: 'The most common MVP mistake',
        body: 'Teams build MVPs that are too broad. They include too many features "just in case" and end up with a product that doesn\'t do any one thing well enough to generate clear signal.\n\nA better approach: identify the single most important thing the product needs to do and build that excellently. Everything else is noise until you\'ve validated that core thing.',
      },
      {
        heading: 'When to build the full product',
        body: 'You build the full product when you have genuine evidence â€” from real users using real software â€” that the core is working and that additional features will drive meaningful improvement.\n\nYou don\'t build the full product because you think you know what people want. You build it because you\'ve proven it.',
      },
    ],
  },
  'business-automation-where-to-start': {
    category: 'Automation',
    title: 'Business automation: where to start when everything feels like it could be automated.',
    date: 'August 2026',
    readTime: '7 min read',
    intro: 'Not every manual process is worth automating. Some are too infrequent to justify the development cost. Some are too variable to automate reliably. Here\'s a practical framework for identifying which workflows to tackle first.',
    sections: [
      {
        heading: 'The automation prioritisation matrix',
        body: 'Start by mapping every manual process your team regularly performs. For each one, estimate two things: frequency (how often it happens) and time cost (how long it takes per occurrence).\n\nMultiply them. The processes with the highest combined score are your highest-value automation targets, assuming they\'re also predictable enough to automate.',
      },
      {
        heading: 'Predictability is underrated',
        body: 'A process is automatable when its inputs, logic and outputs are consistent enough to encode. Many business processes are more variable than they appear â€” which is why automation often requires designing a cleaner underlying process before automating it.\n\nDon\'t automate chaos. Design a better process, then automate it.',
      },
      {
        heading: 'Start with notifications and data sync',
        body: 'The easiest wins are usually in notifications and data synchronisation. These are processes that happen frequently, involve predictable triggers and clear outputs, and are low-risk if they occasionally fail.\n\nNotification automation â€” alerting the right person at the right time â€” often has an outsized impact on team responsiveness without complex logic.',
      },
    ],
  },
}


export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const data = slug ? articles[slug] : null

  if (!data) {
    return (
      <PageTransition title="Article Not Found | SwasTek Solutions">
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Article not found</h1>
          <Link to="/insights" className="btn-primary mt-6 inline-flex">Back to Insights <ArrowUpRight size={14} /></Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition title={`${data.title} | SwasTek Solutions`} description={data.intro}>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-tight">
          <FadeUp>
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-blue-600" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
              <ArrowLeft size={14} /> Insights
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#EBF4FF', color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>{data.category}</span>
              <span className="text-xs" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>{data.date}</span>
              <span className="text-xs" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>{data.readTime}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              {data.title}
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="page-section bg-white">
        <div className="container-tight">
          <div className="max-w-2xl">
            <FadeUp>
              <p className="text-lg leading-relaxed mb-12" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                {data.intro}
              </p>
            </FadeUp>
            {data.sections.map((section, i) => (
              <FadeUp key={section.heading} delay={i * 0.06}>
                <div className="mb-10">
                  <h2 className="font-heading text-2xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{section.heading}</h2>
                  {section.body.split('\n\n').map((para, j) => (
                    <p key={j} className="text-base leading-relaxed mb-4" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>{para}</p>
                  ))}
                </div>
              </FadeUp>
            ))}
            <FadeUp>
              <div className="mt-14 p-8 rounded-2xl" style={{ background: '#EFF4FA', border: '1px solid #E4EDF7' }}>
                <p className="font-heading font-bold text-lg mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Have a question about this topic?</p>
                <p className="text-sm mb-4" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>We're happy to talk through how this applies to your specific business or project.</p>
                <Link to="/contact" data-cta className="btn-primary text-sm inline-flex">
                  Get in touch <ArrowUpRight size={13} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

