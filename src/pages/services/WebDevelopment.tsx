import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import PageTransition from '../../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

// Browser mockup component
function BrowserMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border" style={{ borderColor: '#E4EDF7' }}>
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#EFF4FA', borderBottom: '1px solid #E4EDF7' }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/60"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/60"></span>
        <div className="flex-1 mx-4">
          <div className="bg-white rounded-md px-3 py-1 text-xs flex items-center gap-2" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            <span className="w-2 h-2 rounded-full" style={{ background: '#22c55e' }}></span>
            swastek.com/client-preview
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

const websiteTypes = [
  { name: 'Business Websites', desc: 'Your main online presence â€” fast, credible and built for conversion.' },
  { name: 'Corporate Websites', desc: 'Multi-page corporate sites for investors, partners and enterprise audiences.' },
  { name: 'Landing Pages', desc: 'Focused pages designed to convert a specific audience or campaign.' },
  { name: 'E-commerce', desc: 'Storefronts with checkout, product management and order systems.' },
  { name: 'Web Portals', desc: 'Client portals, member areas and authenticated user experiences.' },
  { name: 'Marketing Websites', desc: 'Campaign-driven sites with CMS, analytics and conversion tracking.' },
]

export default function WebDevelopment() {
  return (
    <PageTransition title="Website Development | SwasTek Solutions" description="Fast, responsive and thoughtfully designed websites built around your brand, audience and business goals.">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <p className="section-label">Website Development</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Websites that do more than look good.
              </h1>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Fast, responsive and thoughtfully designed websites built around your brand, audience and business goals.
              </p>
              <Link to="/contact" data-cta className="btn-primary">
                Build My Website <ArrowUpRight size={14} />
              </Link>
            </FadeUp>
            <FadeUp delay={0.15}>
              <BrowserMockup>
                <div className="p-6" style={{ background: '#ffffff', minHeight: '300px' }}>
                  {/* Nav */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ borderColor: '#E4EDF7' }}>
                    <div className="font-bold text-sm" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>ClientCo</div>
                    <div className="flex gap-6">
                      {['About', 'Services', 'Work', 'Contact'].map(n => (
                        <span key={n} className="text-xs" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{n}</span>
                      ))}
                    </div>
                  </div>
                  {/* Hero */}
                  <div className="text-center py-8">
                    <div className="text-2xl font-bold mb-3" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      The simplest way to <span style={{ color: '#1860D4' }}>grow.</span>
                    </div>
                    <p className="text-xs mb-5 max-w-xs mx-auto" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      A clear, focused website for a growing business.
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="px-4 py-2 rounded-full text-xs font-semibold text-white" style={{ background: '#1860D4', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Get Started</div>
                      <div className="px-4 py-2 rounded-full text-xs font-semibold border" style={{ borderColor: '#E4EDF7', color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Learn more</div>
                    </div>
                  </div>
                </div>
              </BrowserMockup>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Website types */}
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Website types</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              We build every type of business website.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {websiteTypes.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.07}>
                <div className="p-6 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <h3 className="font-heading font-bold text-base mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{t.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{t.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Design process */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Our process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              From brand to live website.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'UX Research', desc: 'We understand your users and what actions they need to take on your website.' },
              { step: '02', title: 'UI Design', desc: 'Clean, on-brand interface design that communicates trust and clarity.' },
              { step: '03', title: 'Development', desc: 'Built with modern frameworks for speed, maintainability and scalability.' },
              { step: '04', title: 'Performance', desc: 'Optimised for fast load times, Core Web Vitals and mobile devices.' },
              { step: '05', title: 'SEO Readiness', desc: 'Semantic markup, meta data and technical SEO foundations from day one.' },
              { step: '06', title: 'Responsive Design', desc: 'Works perfectly across all screen sizes â€” from 320px to widescreen.' },
            ].map((item, i) => (
              <FadeUp key={item.step} delay={i * 0.07}>
                <div className="border-l-2 pl-5 py-2" style={{ borderColor: '#1860D4' }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.step}</p>
                  <h3 className="font-heading font-bold text-base mb-1.5" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Ready to build your website?
          </h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Tell us about your business, your audience and your goals. We'll design and build a website that works.
          </p>
          <Link to="/contact" data-cta className="btn-primary-white">
            Build My Website <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}

