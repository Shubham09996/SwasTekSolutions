import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Globe,
  Zap,
  ShieldCheck,
  Clock3,
  MessageSquare,
  MapPin,
  ChevronRight,
  Copy,
  Check,
  Lock,
} from "lucide-react"

const footerServices = [
  { label: "Web Design",                 href: "/services/web-design" },
  { label: "UX/UI Design",               href: "/services/ui-ux-design" },
  { label: "IT Strategy Consulting",     href: "/services/it-strategy-consulting" },
  { label: "Custom Software Development", href: "/services/custom-software" },
  { label: "CRM Development",            href: "/services/crm-development" },
  { label: "Web Development",            href: "/services/web-development" },
  { label: "Mobile App Development",     href: "/services/mobile-app-development" },
  { label: "E-Commerce Development",     href: "/services/ecommerce" },
]

const footerCompany = [
  { label: "Work & Case Studies", href: "/work" },
  { label: "Industries Served",   href: "/industries" },
  { label: "7-Stage Process",     href: "/process" },
  { label: "About Us",            href: "/about" },
  { label: "Insights",            href: "/insights" },
  { label: "Contact Us",          href: "/contact" },
]

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  return (
    <footer className="relative overflow-hidden" style={{ background: "#020710", fontFamily: "Plus Jakarta Sans, sans-serif" }}>

      {/* ── Ambient Background Lighting & Mesh ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] opacity-25 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top, rgba(21, 88, 212, 0.4) 0%, rgba(11, 196, 227, 0.15) 50%, transparent 70%)" }}
        />
        <div className="absolute inset-0 hero-grid opacity-15" />
      </div>

      {/* Top Laser Accent Line */}
      <div className="relative w-full h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.7) 30%, rgba(11,196,227,0.9) 50%, rgba(91,60,245,0.7) 70%, transparent 100%)" }} />

      {/* ── Pre-footer Floating CTA Card ── */}
      <div className="container-wide pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl md:rounded-[36px] overflow-hidden p-6 sm:p-10 md:p-12 lg:p-14 border"
          style={{
            background: "linear-gradient(135deg, rgba(14, 38, 76, 0.9) 0%, rgba(7, 20, 42, 0.96) 50%, rgba(3, 10, 22, 0.99) 100%)",
            borderColor: "rgba(11, 196, 227, 0.35)",
            boxShadow: "0 24px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(11, 196, 227, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Card Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="orb-1 absolute" style={{ width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,88,212,0.35) 0%, transparent 68%)", top: "-30%", left: "-10%", filter: "blur(60px)" }} />
            <div className="orb-2 absolute" style={{ width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(11,196,227,0.25) 0%, transparent 70%)", bottom: "-25%", right: "-5%", filter: "blur(70px)" }} />
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.9) 30%, rgba(11,196,227,0.9) 70%, transparent 100%)" }} />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.35fr_1fr] gap-8 sm:gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full mb-3.5 sm:mb-4"
                style={{ background: "rgba(11,196,227,0.15)", border: "1px solid rgba(11,196,227,0.4)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.16em] uppercase text-cyan-300" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                  Start a Project
                </span>
              </div>

              <h2
                className="font-bold leading-[1.08] tracking-tight text-white mb-3"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(1.75rem, 4.2vw, 3.4rem)", letterSpacing: "-0.04em" }}
              >
                Tell us what you're<br />
                <span style={{ background: "linear-gradient(135deg, #38BDF8 0%, #0BC4E3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  trying to build.
                </span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed max-w-lg mb-6 text-slate-200" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Let's turn your business bottlenecks into clean, high-performance digital systems. We review requirements and outline a roadmap within 24 hours.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-medium" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-slate-100 backdrop-blur-sm shadow-sm">
                  <Clock3 size={13} className="text-cyan-400 flex-shrink-0" />
                  <span>24h Response Time</span>
                </span>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-slate-100 backdrop-blur-sm shadow-sm">
                  <ShieldCheck size={13} className="text-blue-400 flex-shrink-0" />
                  <span>100% Client Code Ownership</span>
                </span>
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-slate-100 backdrop-blur-sm shadow-sm">
                  <MessageSquare size={13} className="text-cyan-400 flex-shrink-0" />
                  <span>Free Initial Consultation</span>
                </span>
              </div>
            </div>

            {/* Right Action buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-3.5 lg:items-end justify-start w-full lg:w-auto">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  data-cta
                  className="ripple-btn group flex items-center justify-center gap-2.5 text-sm font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full w-full sm:w-auto shadow-xl shadow-cyan-500/25 transition-all text-center"
                  style={{
                    background: "linear-gradient(135deg, #1558D4 0%, #0BC4E3 100%)",
                    color: "#ffffff",
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                  }}
                >
                  <Zap size={16} className="text-white fill-white flex-shrink-0" />
                  <span>Start a Project</span>
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/work"
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 shadow-sm text-center"
                  style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                >
                  <span>View Our Work</span>
                  <ArrowRight size={15} className="text-slate-300 flex-shrink-0" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Main Footer Navigation (Polished & Refined) ── */}
      <div className="container-wide pt-10 md:pt-14 pb-14 md:pb-16 relative z-10">
        
        {/* Subtle Top Divider with Soft Center Glow */}
        <div className="h-px w-full mb-12" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 20%, rgba(11,196,227,0.25) 50%, rgba(255,255,255,0.1) 80%, transparent 100%)" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.1fr_1fr_1.35fr] gap-8 sm:gap-10 items-start">

          {/* ── Column 1: Brand & Identity ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-4 group">
              <img
                src="/logo-white.png"
                alt="SwasTek Solutions"
                className="h-9 lg:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                style={{ maxWidth: 195 }}
              />
            </Link>

            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase text-cyan-300 bg-cyan-950/60 border border-cyan-500/30" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                From Ideas to Digital Solutions
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 mb-5 max-w-sm" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              We design and engineer bespoke software platforms, high-performance web applications, and automated CRM pipelines shaped around how your business works.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
              <MapPin size={14} className="text-cyan-400 flex-shrink-0" />
              <span>Headquartered in Delhi, India · Global Delivery</span>
            </div>

            {/* Social Touchpoints */}
            <div className="flex items-center gap-2.5">
              {[
                { icon: <Mail size={15} />, label: "Email Us", href: "mailto:info@swasteksolutions.com" },
                { icon: <Globe size={15} />, label: "Case Studies", href: "/work" },
                { icon: <MessageSquare size={15} />, label: "Contact", href: "/contact" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-400/40 shadow-sm"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Column 2: Services ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                Services
              </p>
            </div>

            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 transition-all duration-200"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    <ChevronRight size={13} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{s.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 3: Company ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                Company
              </p>
            </div>

            <ul className="space-y-2.5">
              {footerCompany.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-300 transition-all duration-200"
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    <ChevronRight size={13} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    <span className="group-hover:translate-x-0.5 transition-transform">{n.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Column 4: Get in Touch (Interactive Touchpoint Hub) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-white" style={{ fontFamily: "Sora, sans-serif" }}>
                Get in Touch
              </p>
            </div>

            <p className="text-sm leading-relaxed text-slate-300 mb-4" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              Have a project in mind? We'd love to hear about it.
            </p>

            {/* Sleek Interactive Email Cards with 1-Click Copy */}
            <div className="space-y-2.5 mb-4">
              {[
                { email: "info@swasteksolutions.com", label: "Official Inquiry" },
                { email: "swasteksolutions@gmail.com", label: "Direct & Support" },
              ].map((item) => (
                <div
                  key={item.email}
                  className="p-3 rounded-2xl transition-all duration-300 relative overflow-hidden group border"
                  style={{
                    background: "linear-gradient(145deg, rgba(8, 26, 52, 0.75) 0%, rgba(4, 13, 28, 0.95) 100%)",
                    borderColor: "rgba(11, 196, 227, 0.35)",
                    boxShadow: "0 10px 25px -10px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {item.label}
                    </span>
                    <button
                      onClick={(e) => handleCopyEmail(e, item.email)}
                      className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/10 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors"
                      title="Copy email to clipboard"
                      type="button"
                    >
                      {copiedEmail === item.email ? (
                        <>
                          <Check size={11} className="text-emerald-400" />
                          <span className="text-emerald-300">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={11} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <a
                    href={`mailto:${item.email}`}
                    className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between gap-1 break-all"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    <span>{item.email}</span>
                    <ArrowUpRight size={15} className="text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
                  </a>
                </div>
              ))}
            </div>

            {/* Direct Consultation Link */}
            <Link
              to="/contact"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold text-center inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20 group/cta"
              style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
            >
              <span>Start Discovery Conversation</span>
              <ArrowRight size={14} className="group-hover/cta:translate-x-1 transition-transform flex-shrink-0" />
            </Link>

            <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
              <Lock size={12} className="text-cyan-400 flex-shrink-0" />
              <span>Strict NDA & 24h response guaranteed.</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Giant Bespoke Watermark (Subtle & Low Visibility) ── */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none pb-2 px-2 flex justify-center items-center">
        <h1
          className="text-center font-extrabold uppercase whitespace-nowrap"
          style={{
            fontFamily: "Sora, sans-serif",
            fontSize: "clamp(3.2rem, 14vw, 13.5rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.02em",
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.02) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
          }}
        >
          SWASTEK
        </h1>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t relative z-10" style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(2, 6, 15, 0.95)" }}>
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-center sm:text-left">
            <p>© 2026 SwasTek Solutions Pvt. Ltd. All rights reserved.</p>
            <span className="hidden sm:inline text-slate-600">|</span>
            {/* Live Accepting Status Capsule */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75 hero-ping bg-cyan-400" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-400" />
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase text-cyan-300" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                Accepting New Projects
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">Contact</Link>
          </div>

        </div>
      </div>

    </footer>
  )
}
