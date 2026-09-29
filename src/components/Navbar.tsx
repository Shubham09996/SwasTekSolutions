import { useState, useEffect, useRef } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { ArrowUpRight, ChevronDown, X, Menu, Zap } from "lucide-react"

const services = [
  { label: "Web Design",                 href: "/services/web-design",                desc: "Modern layouts and brand experiences" },
  { label: "UX/UI Design",               href: "/services/ui-ux-design",              desc: "Wireframes, prototypes & design systems" },
  { label: "IT Strategy Consulting",     href: "/services/it-strategy-consulting",    desc: "Technology roadmaps & tech advisory" },
  { label: "Custom Software Development", href: "/services/custom-software",          desc: "Enterprise tools & workflow systems" },
  { label: "CRM Development",            href: "/services/crm-development",           desc: "Sales pipelines & customer management" },
  { label: "Web Development",            href: "/services/web-development",           desc: "Fast, fullstack web applications" },
  { label: "Mobile App Development",     href: "/services/mobile-app-development",    desc: "Cross-platform iOS & Android apps" },
  { label: "E-Commerce Development",     href: "/services/ecommerce",                 desc: "Storefronts, checkout & catalogs" },
]

const solutions = [
  { label: "CRM & Business Systems",    href: "/services/crm-development",     desc: "Manage leads, sales and customers" },
  { label: "Dashboards & Admin Tools",  href: "/services/web-applications",    desc: "Operations and reporting platforms" },
  { label: "Internal Tools",            href: "/services/custom-software",     desc: "Built for your team, not the market" },
  { label: "Digital Platforms",         href: "/services/saas-development",    desc: "End-to-end product infrastructure" },
  { label: "Business Automation",       href: "/services/business-automation", desc: "Workflow and process automation" },
]

const navLinks = [
  { label: "Services",   href: "/services",    hasMega: "services" },
  { label: "Solutions",  href: "/services",    hasMega: "solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Work",       href: "/work" },
  { label: "Process",    href: "/process" },
  { label: "About",      href: "/about" },
  { label: "Insights",   href: "/insights" },
]

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false)
  const [hidden, setHidden]               = useState(false)
  const [megaOpen, setMegaOpen]           = useState<string | null>(null)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const location   = useLocation()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const lastY      = useRef(0)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastY.current
    setScrolled(y > 32)
    // Hide navbar on scroll down > 80px from top, show on scroll up
    if (y > 120) {
      setHidden(diff > 0 && Math.abs(diff) > 2)
    } else {
      setHidden(false)
    }
    lastY.current = y
  })

  useEffect(() => { setMobileOpen(false); setMegaOpen(null) }, [location.pathname])

  const isHome = location.pathname === "/"
  const openMega = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(key) }
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(null), 180) }
  const keepMega  = () => { if (closeTimer.current) clearTimeout(closeTimer.current) }

  const transparent = isHome && !scrolled
  const linkBase = transparent ? "text-white/65 hover:text-white" : "text-[#3D5168] hover:text-[#0A1828]"

  return (
    <>
      <motion.nav
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-glass" : isHome ? "bg-transparent" : "bg-white border-b border-[#E2EBF5]"
        }`}
        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        aria-label="Main navigation"
      >
        {/* Top gradient line (home only) */}
        {transparent && (
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.6) 30%, rgba(11,196,227,0.6) 70%, transparent 100%)" }}
          />
        )}

        <div className="container-wide">
          <div className="flex items-center justify-between h-[68px] lg:h-[72px]">

            {/* Logo */}
            <Link to="/" className="relative flex items-center h-10 transition-all duration-300 group">
              <div className="transition-transform duration-200 hover:scale-[1.03]">
                <img
                  src="/logo-white.png"
                  alt="SwasTek Solutions"
                  className={`h-9 lg:h-10 w-auto object-contain transition-opacity duration-300 ${transparent ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}
                  style={{ maxWidth: 180 }}
                />
                <img
                  src="/logo.png"
                  alt="SwasTek Solutions"
                  className={`h-9 lg:h-10 w-auto object-contain transition-opacity duration-300 ${!transparent ? "opacity-100" : "opacity-0 absolute pointer-events-none"}`}
                  style={{ maxWidth: 180 }}
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.hasMega ? openMega(link.hasMega) : setMegaOpen(null)}
                  onMouseLeave={closeMega}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        isActive
                          ? transparent ? "text-white" : "text-[#1558D4]"
                          : linkBase
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {link.hasMega && (
                          <ChevronDown
                            size={11}
                            className={`transition-transform duration-200 ${megaOpen === link.hasMega ? "rotate-180" : ""}`}
                            style={{ opacity: 0.6 }}
                          />
                        )}
                        {isActive && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-xl -z-10"
                            style={{ background: transparent ? "rgba(255,255,255,0.08)" : "rgba(21,88,212,0.07)" }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                          />
                        )}
                        {isActive && (
                          <motion.span
                            layoutId="nav-dot"
                            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                            style={{ background: transparent ? "rgba(255,255,255,0.7)" : "var(--blue-600)" }}
                            transition={{ type: "spring", bounce: 0.3, duration: 0.4 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" data-cta className="btn-primary text-sm">
                  <Zap size={13} />
                  Start a Project
                  <ArrowUpRight size={13} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile toggle */}
            <motion.button
              className={`lg:hidden p-2 rounded-xl transition-colors ${transparent ? "text-white/80 hover:bg-white/10" : "text-[#3D5168] hover:bg-[#EEF3FA]"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
              whileTap={{ scale: 0.92 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={  { rotate:  90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileOpen ? <X size={21} /> : <Menu size={21} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scaleY: 0.97 }}
              animate={{ opacity: 1,  y: 0,  scaleY: 1 }}
              exit={  { opacity: 0, y: -8,  scaleY: 0.97 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute left-0 right-0 mega-glass"
              onMouseEnter={keepMega}
              onMouseLeave={closeMega}
            >
              <div className="container-wide py-10">
                <div className="grid grid-cols-[1.6fr_1fr] gap-14">
                  <div>
                    <p className="section-label mb-6">{megaOpen === "services" ? "Services" : "Solutions"}</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {(megaOpen === "services" ? services : solutions).map((item) => (
                        <Link
                          key={item.href + item.label}
                          to={item.href}
                          className="group flex items-start gap-3 p-3.5 rounded-2xl transition-all duration-200 hover:bg-[#EEF3FA]"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-[7px] flex-shrink-0 transition-all duration-200 group-hover:scale-150"
                            style={{ background: "#CBD5E1" }}
                          />
                          <div>
                            <p className="font-semibold text-sm transition-colors duration-200 flex items-center gap-1.5 group-hover:text-[#1558D4]" style={{ color: "#07111F" }}>
                              {item.label}
                              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </p>
                            <p className="text-xs mt-0.5 leading-snug" style={{ color: "#6B7E94" }}>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="pl-12 border-l" style={{ borderColor: "#E2EBF5" }}>
                    <p className="section-label mb-6">Quick Links</p>
                    <div className="space-y-5">
                      {[
                        { label: "All Services", href: "/services", desc: "Browse our complete offering" },
                        { label: "Our Work",      href: "/work",     desc: "Case studies and projects" },
                        { label: "How We Work",   href: "/process",  desc: "From brief to launch" },
                      ].map((q) => (
                        <Link key={q.href} to={q.href} className="group block">
                          <p className="font-semibold text-sm flex items-center gap-1.5 transition-colors group-hover:text-[#1558D4]" style={{ color: "#07111F" }}>
                            {q.label} <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: "#6B7E94" }}>{q.desc}</p>
                        </Link>
                      ))}
                      <div className="pt-4 border-t" style={{ borderColor: "#E2EBF5" }}>
                        <Link to="/contact" data-cta className="btn-primary text-sm inline-flex">
                          <Zap size={12} />
                          Start a Project
                          <ArrowUpRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#03080F]/60 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] z-50 lg:hidden overflow-y-auto"
              style={{ background: "#ffffff", boxShadow: "-20px 0 60px rgba(7,17,31,0.15)" }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#E2EBF5" }}>
                <Link to="/" className="flex items-center">
                  <img src="/logo.png" alt="SwasTek Solutions" className="h-9 w-auto object-contain" style={{ maxWidth: 160 }} />
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-xl hover:bg-[#EEF3FA] transition-colors" style={{ color: "#6B7E94" }}>
                  <X size={20} />
                </button>
              </div>
              <div className="px-4 py-5 space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {link.hasMega ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between py-3 px-4 text-sm font-semibold rounded-2xl transition-colors hover:bg-[#EEF3FA]"
                          style={{ color: "#07111F", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                          onClick={() => setMobileSubmenu(mobileSubmenu === link.hasMega ? null : (link.hasMega || null))}
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${mobileSubmenu === link.hasMega ? "rotate-180" : ""}`}
                            style={{ color: "#6B7E94" }}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === link.hasMega && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pl-5 space-y-0.5 pb-2 pt-1">
                                {(link.hasMega === "services" ? services : solutions).map((s) => (
                                  <Link
                                    key={s.href + s.label}
                                    to={s.href}
                                    className="flex items-center gap-2.5 py-2.5 px-3 text-sm rounded-xl transition-colors hover:bg-[#EEF3FA] hover:text-[#1558D4]"
                                    style={{ color: "#3D5168", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                                  >
                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#CBD5E1" }} />
                                    {s.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={link.href}
                        className={({ isActive }) =>
                          `flex py-3 px-4 text-sm font-semibold rounded-2xl transition-colors ${isActive ? "text-[#1558D4] bg-[#EEF3FA]" : "text-[#07111F] hover:bg-[#EEF3FA]"}`
                        }
                        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  className="pt-5 mt-2 border-t"
                  style={{ borderColor: "#E2EBF5" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link to="/contact" data-cta className="btn-primary w-full justify-center">
                    <Zap size={14} />
                    Start a Project
                    <ArrowUpRight size={14} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
