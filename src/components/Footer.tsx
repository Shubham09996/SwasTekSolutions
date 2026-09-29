import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowUpRight, ArrowRight, Mail, Globe, ExternalLink, Zap, ShieldCheck, Clock3, MessageSquare } from "lucide-react"

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

const footerNav = [
  { label: "Industries", href: "/industries" },
  { label: "Work",       href: "/work" },
  { label: "Process",    href: "/process" },
  { label: "About",      href: "/about" },
  { label: "Insights",   href: "/insights" },
  { label: "Contact",    href: "/contact" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#020710", fontFamily: "Plus Jakarta Sans, sans-serif" }}>

      {/* ── Pre-footer CTA Floating Inset Card ── */}
      <div className="container-wide pt-16 md:pt-24 pb-8 md:pb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl md:rounded-[36px] overflow-hidden p-8 sm:p-12 md:p-14 lg:p-16"
          style={{
            background: "linear-gradient(135deg, rgba(16, 38, 76, 0.75) 0%, rgba(8, 20, 38, 0.90) 50%, rgba(4, 10, 20, 0.98) 100%)",
            border: "1px solid rgba(21, 136, 255, 0.28)",
            boxShadow: "0 24px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
          }}
        >
          {/* Ambient card glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="orb-1 absolute" style={{ width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(21,88,212,0.30) 0%, transparent 68%)", top: "-30%", left: "-10%", filter: "blur(60px)" }} />
            <div className="orb-2 absolute" style={{ width: 450, height: 450, borderRadius: "50%", background: "radial-gradient(circle, rgba(11,196,227,0.20) 0%, transparent 70%)", bottom: "-25%", right: "-5%", filter: "blur(70px)" }} />
            <div className="absolute inset-0 hero-grid opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.8) 30%, rgba(11,196,227,0.8) 70%, transparent 100%)" }} />
          </div>

          <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5"
                style={{ background: "rgba(21,88,212,0.2)", border: "1px solid rgba(21,136,255,0.35)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#0BC4E3" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#0BC4E3" }} />
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase font-mono-accent" style={{ color: "#0BC4E3" }}>
                  Ready to Start?
                </span>
              </div>

              <h2
                className="font-bold leading-[1.06] tracking-tight text-white mb-4"
                style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)", letterSpacing: "-0.04em" }}
              >
                Tell us what you're<br />
                <span style={{ background: "linear-gradient(135deg, #4A90F5 0%, #0BC4E3 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  trying to build.
                </span>
              </h2>

              <p className="text-sm md:text-base leading-relaxed max-w-lg mb-6" style={{ color: "#94A3B8" }}>
                Let's turn your business challenges into high-performance digital solutions. We reply to all enquiries within one business day.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs" style={{ color: "#64748B" }}>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={13} style={{ color: "#0BC4E3" }} /> Response in 24 hours
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} style={{ color: "#1558D4" }} /> NDA protected
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MessageSquare size={13} style={{ color: "#0BC4E3" }} /> Free initial consultation
                </span>
              </div>
            </div>

            {/* Right Action buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end justify-start">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/contact"
                  data-cta
                  className="ripple-btn group flex items-center justify-center gap-2.5 text-sm font-semibold px-8 py-4 rounded-full w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(135deg, #1558D4 0%, #0D47A1 100%)",
                    color: "#ffffff",
                    boxShadow: "0 10px 30px -5px rgba(21,88,212,0.6)",
                    border: "1px solid rgba(255,255,255,0.22)"
                  }}
                >
                  <Zap size={15} />
                  Start a Project
                  <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Link
                  to="/work"
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "#CBD5E1",
                  }}
                >
                  View Our Work
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Main Footer Navigation ── */}
      <div className="container-wide pt-8 md:pt-12 pb-16 md:pb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-12 lg:gap-10 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Link to="/" className="block mb-5">
              <img
                src="/logo-white.png"
                alt="SwasTek Solutions"
                className="h-9 lg:h-10 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
                style={{ maxWidth: 190 }}
              />
            </Link>
            <p className="text-xs font-bold tracking-[0.16em] uppercase mb-3" style={{ color: "#0BC4E3", fontFamily: "DM Mono, monospace" }}>
              From Ideas to Digital Solutions
            </p>
            <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: "#8FA3BF" }}>
              We design and build software, websites, CRM platforms and digital systems for businesses that need technology shaped around how they actually work.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: <ExternalLink size={14} />, label: "LinkedIn" },
                { icon: <Mail size={14} />, label: "Email" },
                { icon: <Globe size={14} />, label: "Website" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.94 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#94A3B8", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.07 }}
          >
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: "#E2EBF5", fontFamily: "DM Mono, monospace" }}>Services</p>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-sm transition-all duration-200 hover:text-white hover:translate-x-1 inline-flex"
                    style={{ color: "#8FA3BF" }}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.14 }}
          >
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: "#E2EBF5", fontFamily: "DM Mono, monospace" }}>Company</p>
            <ul className="space-y-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    className="text-sm transition-all duration-200 hover:text-white hover:translate-x-1 inline-flex"
                    style={{ color: "#8FA3BF" }}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.21 }}
          >
            <p className="text-[11px] font-bold tracking-[0.22em] uppercase mb-5" style={{ color: "#E2EBF5", fontFamily: "DM Mono, monospace" }}>Get in Touch</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#8FA3BF" }}>
              Have a project in mind? We'd like to hear about it.
            </p>
            <Link
              to="/contact"
              className="text-sm font-semibold flex items-center gap-1.5 transition-all hover:gap-2.5 mb-6 group"
              style={{ color: "#4A90F5" }}
            >
              <span>Start the conversation</span>
              <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <div className="p-4 rounded-xl transition-all duration-300 hover:border-[#1558D4]/40" style={{ background: "rgba(21,88,212,0.08)", border: "1px solid rgba(21,136,255,0.18)" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider mb-1 font-mono-accent" style={{ color: "#0BC4E3" }}>Email us</p>
              <a
                href="mailto:hello@swastek.com"
                className="text-sm font-semibold transition-colors hover:text-white block"
                style={{ color: "#FFFFFF" }}
              >
                hello@swastek.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t relative z-10" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(1, 4, 10, 0.6)" }}>
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <p className="text-xs font-mono-accent" style={{ color: "#64748B" }}>
              © 2026 SwasTek Solutions Ltd. All rights reserved.
            </p>
            {/* Live status badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: 'rgba(11,196,227,0.08)', border: '1px solid rgba(11,196,227,0.22)' }}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75 hero-ping" style={{ background: '#0BC4E3' }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: '#0BC4E3' }} />
              </span>
              <span className="text-[10px] font-bold tracking-wider uppercase font-mono-accent" style={{ color: '#0BC4E3' }}>Accepting projects</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs transition-colors hover:text-white" style={{ color: "#64748B" }}>Privacy Policy</Link>
            <Link to="/terms"          className="text-xs transition-colors hover:text-white" style={{ color: "#64748B" }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
