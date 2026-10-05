import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  )
}

export default function AiSolutions() {
  return (
    <PageTransition title="AI Solutions | SwasTek Solutions" description="Practical AI integrations for document processing, intelligent search, AI-assisted workflows and business automation.">
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">AI Solutions</p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              AI where it actually helps.
            </h1>
            <p className="text-lg leading-relaxed mb-6 max-w-2xl" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              AI is one tool in a larger toolkit. We integrate AI capabilities into your software where they genuinely improve the experience or reduce real work â€” not for the sake of it.
            </p>
            <p className="text-sm leading-relaxed mb-8 max-w-xl p-4 rounded-xl border" style={{ color: '#3D5168', borderColor: '#E4EDF7', background: '#EFF4FA', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              We're a software development company first. AI is one capability we add where it's the right fit â€” not the centrepiece of everything we build.
            </p>
            <Link to="/contact" data-cta className="btn-primary">Discuss AI Integration <ArrowUpRight size={14} /></Link>
          </FadeUp>
        </div>
      </section>
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Where AI helps</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Practical AI for real operations.</h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Document Processing', desc: 'Extract structured data from PDFs, invoices, contracts and forms automatically.' },
              { title: 'Intelligent Search', desc: 'Search that understands meaning and context â€” not just keyword matching.' },
              { title: 'AI-Assisted Workflows', desc: 'AI that helps your team draft content, categorise inputs and suggest actions.' },
              { title: 'Chat Interfaces', desc: 'Conversational interfaces that answer questions from your own content and data.' },
              { title: 'Data Extraction', desc: 'Structured extraction from unstructured sources â€” emails, documents, forms.' },
              { title: 'Business Automation', desc: 'AI-triggered actions based on content analysis and classification.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.07}>
                <div className="flex gap-5 p-6 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: '#1860D4' }}></div>
                  <div>
                    <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Is AI the right tool for your problem?</h2>
          <p className="text-base sm:text-lg mb-8 text-slate-200" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Tell us what you're trying to achieve and we'll tell you honestly whether AI is the right answer.</p>
          <Link to="/contact" data-cta className="btn-primary-white shadow-lg shadow-white/10">Have an honest conversation <ArrowUpRight size={14} /></Link>
        </div>
      </section>
    </PageTransition>
  )
}

