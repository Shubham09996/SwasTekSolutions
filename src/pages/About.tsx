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

export default function About() {
  return (
    <PageTransition title="About | SwasTek Solutions" description="We're a software development and digital solutions company that understands business problems and builds practical digital solutions.">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b" style={{ borderColor: '#E4EDF7' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-end">
            <FadeUp>
              <p className="section-label">About SwasTek</p>
              <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                We're here to make technology useful.
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                SwasTek Solutions is a software development and digital solutions company. We help businesses design, build and improve their digital products and internal systems.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                We work with businesses that need technology that actually fits the way they operate â€” not generic software that forces them to change their processes.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeUp>
              <p className="section-label">How we think</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                Technology is only as useful as the problem it solves.
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                <p>
                  A lot of software projects fail â€” not because the technology was wrong, but because nobody took the time to understand the problem properly before choosing the technology.
                </p>
                <p>
                  We start every engagement by understanding your business. How it operates. Where the friction is. What the actual goal is. Then we design a solution.
                </p>
                <p>
                  That approach takes a little longer at the start. It saves a lot of time later.
                </p>
              </div>
            </FadeUp>
            <div className="space-y-5">
              {[
                {
                  num: '01',
                  title: 'Understand the business, then the technology.',
                  desc: 'The best solution isn\'t always the most technically impressive one. It\'s the one that solves the actual business problem clearly and reliably.',
                },
                {
                  num: '02',
                  title: 'Design is problem-solving, not decoration.',
                  desc: 'We design interfaces that make complex operations simple â€” for the specific people who will use them every day.',
                },
                {
                  num: '03',
                  title: 'Good software doesn\'t surprise you.',
                  desc: 'It does what it\'s supposed to do, reliably, every time. That\'s what we build toward.',
                },
                {
                  num: '04',
                  title: 'Long-term partnerships over one-off projects.',
                  desc: 'Your software needs to evolve as your business does. We work best with clients who see us as a long-term technology partner.',
                },
              ].map((item, i) => (
                <FadeUp key={item.num} delay={i * 0.08}>
                  <div className="flex gap-5 p-5 bg-white rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                    <span className="text-xs font-bold pt-0.5 flex-shrink-0" style={{ color: '#7A8FA3', fontFamily: 'Sora, sans-serif' }}>{item.num}</span>
                    <div>
                      <h3 className="font-heading font-bold text-base mb-1.5" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">What we do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Design and engineering under one roof.
            </h2>
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-8">
            <FadeUp>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4 pb-4 border-b" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif', borderColor: '#E4EDF7' }}>Design</h3>
                <ul className="space-y-2">
                  {['UX Research', 'UI Design', 'Interaction Design', 'Design Systems', 'Prototyping'].map((s) => (
                    <li key={s} className="text-sm flex items-center gap-2.5" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                      <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4 pb-4 border-b" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif', borderColor: '#E4EDF7' }}>Engineering</h3>
                <ul className="space-y-2">
                  {['Frontend Development', 'Backend Development', 'API Development', 'Database Architecture', 'Cloud Deployment'].map((s) => (
                    <li key={s} className="text-sm flex items-center gap-2.5" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                      <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <h3 className="font-heading font-bold text-lg mb-4 pb-4 border-b" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif', borderColor: '#E4EDF7' }}>Strategy</h3>
                <ul className="space-y-2">
                  {['Technical Planning', 'Product Strategy', 'Architecture Review', 'Integration Planning', 'Digital Transformation'].map((s) => (
                    <li key={s} className="text-sm flex items-center gap-2.5" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                      <span className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="page-section" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <FadeUp>
            <p className="section-label">Our team</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              A team that takes quality personally.
            </h2>
            <p className="text-base leading-relaxed max-w-2xl mb-12" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              SwasTek is built around engineers, designers and strategists who care about the quality of what they produce â€” not just getting it done.
            </p>
          </FadeUp>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="p-6 bg-white rounded-2xl border text-center" style={{ borderColor: '#E4EDF7' }}>
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #1860D4, #1860D4)', fontFamily: 'Sora, sans-serif' }}>
                    {String.fromCharCode(64 + i)}
                  </div>
                  <div className="h-3 rounded w-24 mx-auto mb-2" style={{ background: '#E4EDF7' }} />
                  <div className="h-2.5 rounded w-16 mx-auto" style={{ background: '#EFF4FA' }} />
                </div>
              </FadeUp>
            ))}
          </div>
          <p className="text-sm mt-8 text-center" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>Team profiles coming soon.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section-sm" style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1A2E 100%)' }}>
        <div className="container-tight text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Work with a team that understands your business.
          </h2>
          <p className="text-base mb-8" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
            Start with a conversation about what you're trying to build.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" data-cta className="btn-primary-white">
              Start a Project <ArrowUpRight size={14} />
            </Link>
            <Link to="/work" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}>
              View Our Work <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

