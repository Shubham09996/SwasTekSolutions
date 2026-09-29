// Contact page — SwasTek Solutions (ULTRA-PREMIUM REDESIGN)
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, Clock, MapPin, Zap } from 'lucide-react'
import PageTransition from '../components/PageTransition'

const projectTypes = [
  { label: 'Website', icon: '🌐' },
  { label: 'Custom Software', icon: '⚙️' },
  { label: 'CRM', icon: '📊' },
  { label: 'SaaS Product', icon: '📦' },
  { label: 'E-commerce', icon: '🛍️' },
  { label: 'Automation', icon: '⚡' },
  { label: 'AI Integration', icon: '🧠' },
  { label: 'API / Integration', icon: '🔗' },
  { label: 'Other', icon: '✦' },
]

const budgetRanges = ['Under £10K', '£10K – £25K', '£25K – £50K', '£50K – £100K', '£100K+', 'Not sure yet']

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@swastek.com', href: 'mailto:hello@swastek.com' },
  { icon: Clock, label: 'Response time', value: 'Within one business day', href: null },
  { icon: MapPin, label: 'Based in', value: 'United Kingdom', href: null },
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [projectDesc, setProjectDesc] = useState('')
  const [form, setForm] = useState({ name: '', email: '', company: '', country: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)

  const toggleType = (type: string) => {
    setSelectedTypes(prev => prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <PageTransition title="Contact | SwasTek Solutions">
        <div className="min-h-screen flex items-center justify-center grain-overlay" style={{ background: 'var(--void)' }}>
          <div className="absolute inset-0 hero-grid opacity-60" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.15) 0%, transparent 68%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', filter: 'blur(80px)' }} />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-lg px-8 relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
              style={{ background: 'linear-gradient(135deg, rgba(21,88,212,0.2) 0%, rgba(11,196,227,0.2) 100%)', border: '1px solid rgba(21,88,212,0.3)' }}
            >
              <CheckCircle2 size={36} style={{ color: '#4A8FF5' }} />
            </motion.div>
            <h2
              className="font-bold text-white mb-4"
              style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.04em' }}
            >
              We've received your details.
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(160,175,194,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Someone from the SwasTek team will be in touch within one business day to arrange a conversation.
            </p>
          </motion.div>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition
      title="Contact | SwasTek Solutions"
      description="Tell us what you're trying to build. We'll help you figure out the technology behind it."
    >
      <div className="min-h-screen" style={{ background: 'var(--void)' }}>
        {/* Background */}
        <div className="fixed inset-0 hero-grid opacity-60 pointer-events-none" />
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute" style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,88,212,0.15) 0%, transparent 68%)', top: '-10%', right: '-5%', filter: 'blur(80px)' }} />
          <div className="orb-2 absolute" style={{ width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(11,196,227,0.08) 0%, transparent 70%)', bottom: '10%', left: '5%', filter: 'blur(100px)' }} />
        </div>
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.7) 70%, transparent 100%)' }} />

        <div className="container-wide pt-36 pb-24 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-20 items-start">

            {/* ── LEFT — sticky info ── */}
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-2 mb-10"
              >
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(21,88,212,0.12)', border: '1px solid rgba(21,88,212,0.22)' }}>
                  <span className="relative flex h-2 w-2">
                    <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'var(--blue-600)' }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'var(--blue-500)' }} />
                  </span>
                  <span className="text-[11px] font-bold tracking-[0.22em] uppercase" style={{ color: 'rgba(74,143,245,0.9)', fontFamily: 'DM Mono, monospace' }}>
                    Get in Touch
                  </span>
                </div>
              </motion.div>

              <div className="overflow-hidden mb-1">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-none text-white"
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.04em' }}
                >
                  Have something
                </motion.h1>
              </div>
              <div className="overflow-hidden mb-8">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.04em', lineHeight: 1.05 }}
                >
                  <span style={{ background: 'linear-gradient(135deg, #2570E8 0%, #0BC4E3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    in mind?
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base leading-relaxed mb-12"
                style={{ color: 'rgba(160,175,194,0.7)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Tell us what you're trying to build. We'll help you figure out the technology behind it.
              </motion.p>

              {/* Contact details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4 mb-12"
              >
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-xl"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(21,88,212,0.15)', border: '1px solid rgba(21,88,212,0.2)' }}>
                        <Icon size={15} style={{ color: '#4A8FF5' }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-wider uppercase mb-0.5" style={{ color: '#536880', fontFamily: 'DM Mono, monospace' }}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm font-semibold transition-colors hover:text-blue-400" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </motion.div>

              {/* Step indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-400"
                        style={{
                          background: step > s ? 'linear-gradient(135deg, #1558D4, #0BC4E3)' : step === s ? 'rgba(21,88,212,0.3)' : 'rgba(255,255,255,0.05)',
                          color: step >= s ? '#ffffff' : '#536880',
                          fontFamily: 'DM Mono, monospace',
                          border: `1px solid ${step >= s ? 'rgba(21,88,212,0.5)' : 'rgba(255,255,255,0.08)'}`,
                        }}
                      >
                        {step > s ? '✓' : s}
                      </div>
                      {s < 3 && (
                        <div
                          className="w-10 h-px transition-all duration-400"
                          style={{ background: step > s ? 'linear-gradient(90deg, #1558D4, #0BC4E3)' : 'rgba(255,255,255,0.08)' }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs" style={{ color: '#536880', fontFamily: 'DM Mono, monospace' }}>
                  Step {step} of 3 —{' '}
                  {step === 1 && 'What are you looking to build?'}
                  {step === 2 && 'Tell us about it'}
                  {step === 3 && 'How can we reach you?'}
                </p>
              </motion.div>
            </div>

            {/* ── RIGHT — form ── */}
            <div>
              <AnimatePresence mode="wait">

                {/* Step 1 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl p-8 md:p-10"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}
                  >
                    <h2 className="font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.03em' }}>
                      What are you looking to build?
                    </h2>
                    <p className="text-sm mb-8" style={{ color: '#536880', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Select all that apply</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                      {projectTypes.map((type) => {
                        const selected = selectedTypes.includes(type.label)
                        return (
                          <motion.button
                            key={type.label}
                            onClick={() => toggleType(type.label)}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="flex items-center gap-2.5 px-4 py-3.5 rounded-2xl text-sm font-semibold text-left transition-all duration-300"
                            style={{
                              background: selected ? 'linear-gradient(135deg, rgba(21,88,212,0.25) 0%, rgba(11,196,227,0.15) 100%)' : 'rgba(255,255,255,0.03)',
                              color: selected ? '#4A8FF5' : 'rgba(255,255,255,0.5)',
                              border: '1px solid',
                              borderColor: selected ? 'rgba(21,88,212,0.5)' : 'rgba(255,255,255,0.07)',
                              fontFamily: 'Plus Jakarta Sans, sans-serif',
                            }}
                          >
                            <span className="text-base">{type.icon}</span>
                            {type.label}
                          </motion.button>
                        )
                      })}
                    </div>
                    <motion.button
                      onClick={() => setStep(2)}
                      disabled={selectedTypes.length === 0}
                      whileHover={selectedTypes.length > 0 ? { scale: 1.02 } : {}}
                      whileTap={selectedTypes.length > 0 ? { scale: 0.98 } : {}}
                      className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Zap size={14} />
                      Continue
                      <ArrowRight size={14} />
                    </motion.button>
                  </motion.div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl p-8 md:p-10"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}
                  >
                    {/* Selected types summary */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedTypes.map(t => (
                        <span key={t} className="text-xs px-3 py-1 rounded-full font-semibold" style={{ background: 'rgba(21,88,212,0.2)', color: '#4A8FF5', border: '1px solid rgba(21,88,212,0.3)', fontFamily: 'DM Mono, monospace' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <h2 className="font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.03em' }}>
                      Tell us a little about it.
                    </h2>
                    <p className="text-sm mb-6" style={{ color: '#536880', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      What's the problem you're trying to solve? What does success look like?
                    </p>
                    <textarea
                      value={projectDesc}
                      onChange={(e) => setProjectDesc(e.target.value)}
                      placeholder="Describe your project, the business context, what you've tried before (if anything), and what you're hoping to achieve..."
                      rows={8}
                      className="w-full rounded-2xl p-5 text-sm resize-none outline-none transition-all mb-6"
                      style={{
                        border: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        color: 'rgba(255,255,255,0.8)',
                        background: 'rgba(255,255,255,0.04)',
                        lineHeight: '1.7',
                      }}
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-white/5"
                        style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                      >
                        Back
                      </button>
                      <motion.button
                        onClick={() => setStep(3)}
                        disabled={projectDesc.trim().length < 10}
                        whileHover={projectDesc.trim().length >= 10 ? { scale: 1.02 } : {}}
                        whileTap={projectDesc.trim().length >= 10 ? { scale: 0.98 } : {}}
                        className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Continue <ArrowRight size={14} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="rounded-3xl p-8 md:p-10"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}
                  >
                    <h2 className="font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif', fontSize: 'clamp(1.4rem, 3vw, 2rem)', letterSpacing: '-0.03em' }}>
                      How can we reach you?
                    </h2>
                    <p className="text-sm mb-8" style={{ color: '#536880', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      We'll be in touch within one business day.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { id: 'contact-name', label: 'Your name', field: 'name', type: 'text', required: true },
                          { id: 'contact-email', label: 'Work email', field: 'email', type: 'email', required: true },
                          { id: 'contact-company', label: 'Company', field: 'company', type: 'text', required: false },
                          { id: 'contact-country', label: 'Country', field: 'country', type: 'text', required: false },
                        ].map((f) => (
                          <div key={f.id}>
                            <label htmlFor={f.id} className="block text-xs font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em' }}>
                              {f.label}{f.required ? ' *' : ''}
                            </label>
                            <input
                              id={f.id}
                              type={f.type}
                              required={f.required}
                              value={form[f.field as keyof typeof form]}
                              onChange={(e) => setForm({ ...form, [f.field]: e.target.value })}
                              className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                              style={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                color: 'rgba(255,255,255,0.8)',
                                background: 'rgba(255,255,255,0.05)',
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'DM Mono, monospace', letterSpacing: '0.08em' }}>
                          Budget range (optional)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {budgetRanges.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setForm({ ...form, budget: form.budget === b ? '' : b })}
                              className="px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200"
                              style={{
                                background: form.budget === b ? 'rgba(21,88,212,0.25)' : 'rgba(255,255,255,0.04)',
                                color: form.budget === b ? '#4A8FF5' : 'rgba(255,255,255,0.4)',
                                border: '1px solid',
                                borderColor: form.budget === b ? 'rgba(21,88,212,0.5)' : 'rgba(255,255,255,0.07)',
                                fontFamily: 'DM Mono, monospace',
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-3.5 rounded-full text-sm font-semibold transition-all hover:bg-white/5"
                          style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                        >
                          Back
                        </button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="btn-primary text-sm"
                          data-cta
                        >
                          <Zap size={14} />
                          Send Project Details
                          <ArrowRight size={14} />
                        </motion.button>
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
