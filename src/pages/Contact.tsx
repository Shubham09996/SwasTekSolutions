import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const projectTypes = [
  'Website',
  'Custom Software',
  'CRM',
  'SaaS Product',
  'E-commerce',
  'Automation',
  'AI Integration',
  'API / Integration',
  'Other',
]

const budgetRanges = [
  'Under Â£10K',
  'Â£10K â€“ Â£25K',
  'Â£25K â€“ Â£50K',
  'Â£50K â€“ Â£100K',
  'Â£100K+',
  'Not sure yet',
]

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [step, setStep] = useState(1)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [projectDesc, setProjectDesc] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <PageTransition title="Contact | SwasTek Solutions">
        <div className="min-h-screen flex items-center justify-center" style={{ background: '#EFF4FA' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-md p-12"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: '#EBF4FF' }}>
              <CheckCircle size={32} style={{ color: '#1860D4' }} />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
              Thanks â€” we've received your project details.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
              Someone from the SwasTek team will be in touch within one business day to arrange a conversation.
            </p>
          </motion.div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition title="Contact | SwasTek Solutions" description="Tell us what you're trying to build. We'll help you figure out the technology behind it.">
      <div className="min-h-screen" style={{ background: '#EFF4FA' }}>
        <div className="container-wide pt-32 pb-20">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            {/* Left â€” info */}
            <div className="lg:sticky lg:top-32">
              <FadeUp>
                <p className="section-label">Contact</p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                  Have something in mind?
                </h1>
                <p className="text-base leading-relaxed mb-8" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}>
                  Tell us what you're trying to build. We'll help you figure out the technology behind it.
                </p>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>Email</p>
                    <a href="mailto:hello@swastek.com" className="text-sm font-semibold transition-colors hover:text-blue-600" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>
                      hello@swastek.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>Response time</p>
                    <p className="text-sm" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>Within one business day</p>
                  </div>
                </div>
              </FadeUp>

              {/* Step indicators */}
              <FadeUp delay={0.15}>
                <div className="flex items-center gap-3 mt-12">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2"
                    >
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
                        style={{
                          background: step >= s ? '#1860D4' : '#E4EDF7',
                          color: step >= s ? '#ffffff' : '#7A8FA3',
                          fontFamily: 'Manrope, sans-serif',
                        }}
                      >
                        {s}
                      </div>
                      {s < 3 && <div className="w-8 h-px" style={{ background: step > s ? '#1860D4' : '#E4EDF7' }} />}
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-xs" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                    {step === 1 && 'What are you looking to build?'}
                    {step === 2 && 'Tell us about it'}
                    {step === 3 && 'How can we reach you?'}
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Right â€” form */}
            <div>
              <AnimatePresence mode="wait">
                {/* Step 1 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border"
                    style={{ borderColor: '#E4EDF7' }}
                  >
                    <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      What are you looking to build?
                    </h2>
                    <p className="text-sm mb-8" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>Select all that apply</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(selectedType === type ? null : type)}
                          className="px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-200"
                          style={{
                            background: selectedType === type ? '#1860D4' : '#EFF4FA',
                            color: selectedType === type ? '#ffffff' : '#0B1A2E',
                            border: '1px solid',
                            borderColor: selectedType === type ? '#1860D4' : '#E4EDF7',
                            fontFamily: 'Manrope, sans-serif',
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(2)}
                      disabled={!selectedType}
                      className="flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 disabled:opacity-40"
                      style={{ background: '#1860D4', color: '#ffffff', fontFamily: 'Manrope, sans-serif' }}
                    >
                      Continue <ArrowRight size={14} />
                    </button>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border"
                    style={{ borderColor: '#E4EDF7' }}
                  >
                    <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      Tell us a little about it.
                    </h2>
                    <p className="text-sm mb-6" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                      What's the problem you're trying to solve? What does success look like?
                    </p>
                    <textarea
                      value={projectDesc}
                      onChange={(e) => setProjectDesc(e.target.value)}
                      placeholder="Describe your project, the business context, what you've tried before (if anything), and what you're hoping to achieve..."
                      rows={8}
                      className="w-full rounded-xl p-4 text-sm resize-none outline-none transition-all focus:ring-2"
                      style={{
                        border: '1px solid #E4EDF7',
                        fontFamily: 'Manrope, sans-serif',
                        color: '#0B1A2E',
                        background: '#EFF4FA',
                        '--tw-ring-color': '#1860D4',
                      } as React.CSSProperties}
                    />
                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3 rounded-full text-sm font-semibold border transition-colors"
                        style={{ borderColor: '#E4EDF7', color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={projectDesc.trim().length < 10}
                        className="flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 disabled:opacity-40"
                        style={{ background: '#1860D4', color: '#ffffff', fontFamily: 'Manrope, sans-serif' }}
                      >
                        Continue <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border"
                    style={{ borderColor: '#E4EDF7' }}
                  >
                    <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                      How can we reach you?
                    </h2>
                    <p className="text-sm mb-8" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                      We'll be in touch within one business day.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>Your name *</label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{ border: '1px solid #E4EDF7', fontFamily: 'Manrope, sans-serif', color: '#0B1A2E', background: '#EFF4FA' }}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>Work email *</label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{ border: '1px solid #E4EDF7', fontFamily: 'Manrope, sans-serif', color: '#0B1A2E', background: '#EFF4FA' }}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-company" className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>Company</label>
                          <input
                            id="contact-company"
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{ border: '1px solid #E4EDF7', fontFamily: 'Manrope, sans-serif', color: '#0B1A2E', background: '#EFF4FA' }}
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-country" className="block text-xs font-semibold mb-1.5" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>Country</label>
                          <input
                            id="contact-country"
                            type="text"
                            value={form.country}
                            onChange={(e) => setForm({ ...form, country: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                            style={{ border: '1px solid #E4EDF7', fontFamily: 'Manrope, sans-serif', color: '#0B1A2E', background: '#EFF4FA' }}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-2" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>Budget range (optional)</label>
                        <div className="flex flex-wrap gap-2">
                          {budgetRanges.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setForm({ ...form, budget: form.budget === b ? '' : b })}
                              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                              style={{
                                background: form.budget === b ? '#1860D4' : '#EFF4FA',
                                color: form.budget === b ? '#ffffff' : '#3D5168',
                                border: '1px solid',
                                borderColor: form.budget === b ? '#1860D4' : '#E4EDF7',
                                fontFamily: 'Manrope, sans-serif',
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3 rounded-full text-sm font-semibold border transition-colors"
                          style={{ borderColor: '#E4EDF7', color: '#3D5168', fontFamily: 'Manrope, sans-serif' }}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex items-center gap-2 font-semibold text-sm px-8 py-3 rounded-full transition-all duration-200"
                          style={{ background: '#1860D4', color: '#ffffff', fontFamily: 'Manrope, sans-serif' }}
                          data-cta
                        >
                          Send Project Details <ArrowRight size={14} />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

