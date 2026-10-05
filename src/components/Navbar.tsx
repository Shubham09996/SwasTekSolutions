import { useState, useEffect, useRef } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import {
  ArrowUpRight,
  ChevronDown,
  X,
  Menu,
  Zap,
  Palette,
  Layout,
  Compass,
  Code2,
  Database,
  Globe,
  Smartphone,
  ShoppingBag,
  Rocket,
  Workflow,
  Sparkles,
} from "lucide-react"

const servicesData = [
  {
    label: "Web Design",
    href: "/services/web-design",
    desc: "Modern layouts and bespoke brand experiences",
    icon: Palette,
    category: "Design",
    color: "#1558D4",
    bgSoft: "rgba(21, 88, 212, 0.08)",
  },
  {
    label: "UX/UI Design",
    href: "/services/ui-ux-design",
    desc: "Wireframes, clickable prototypes & design systems",
    icon: Layout,
    category: "Design",
    color: "#0BC4E3",
    bgSoft: "rgba(11, 196, 227, 0.08)",
  },
  {
    label: "IT Strategy Consulting",
    href: "/services/it-strategy-consulting",
    desc: "Technology roadmaps & architectural advisory",
    icon: Compass,
    category: "Strategy",
    color: "#5B3CF5",
    bgSoft: "rgba(91, 60, 245, 0.08)",
  },
  {
    label: "Custom Software Development",
    href: "/services/custom-software",
    desc: "Enterprise operational tools & internal systems",
    icon: Code2,
    category: "Engineering",
    color: "#1558D4",
    bgSoft: "rgba(21, 88, 212, 0.08)",
  },
  {
    label: "CRM Development",
    href: "/services/crm-development",
    desc: "Sales pipelines, client portals & lead automation",
    icon: Database,
    category: "Enterprise",
    color: "#0BC4E3",
    bgSoft: "rgba(11, 196, 227, 0.08)",
  },
  {
    label: "Web Development",
    href: "/services/web-development",
    desc: "Ultra-fast, fullstack web applications & edge APIs",
    icon: Globe,
    category: "Engineering",
    color: "#2570E8",
    bgSoft: "rgba(37, 112, 232, 0.08)",
  },
  {
    label: "Mobile App Development",
    href: "/services/mobile-app-development",
    desc: "Fluid cross-platform iOS & Android mobile apps",
    icon: Smartphone,
    category: "Engineering",
    color: "#5B3CF5",
    bgSoft: "rgba(91, 60, 245, 0.08)",
  },
  {
    label: "E-Commerce Development",
    href: "/services/ecommerce",
    desc: "High-conversion storefronts, checkouts & catalogs",
    icon: ShoppingBag,
    category: "Enterprise",
    color: "#0BC4E3",
    bgSoft: "rgba(11, 196, 227, 0.08)",
  },
]

const solutionsData = [
  {
    label: "CRM & Sales Pipelines",
    href: "/services/crm-development",
    desc: "Unified customer databases, automated lead intake & deal tracking",
    icon: Database,
    category: "Enterprise CRM",
    color: "#0BC4E3",
    bgSoft: "rgba(11, 196, 227, 0.08)",
  },
  {
    label: "Dashboards & Web Applications",
    href: "/services/web-applications",
    desc: "Real-time operations management, data visualization & reporting",
    icon: Layout,
    category: "Analytics & Admin",
    color: "#1558D4",
    bgSoft: "rgba(21, 88, 212, 0.08)",
  },
  {
    label: "Custom Internal Software",
    href: "/services/custom-software",
    desc: "Purpose-built operational platforms designed around how you work",
    icon: Code2,
    category: "Internal Tools",
    color: "#5B3CF5",
    bgSoft: "rgba(91, 60, 245, 0.08)",
  },
  {
    label: "SaaS & Digital Platforms",
    href: "/services/saas-development",
    desc: "Scalable multi-tenant infrastructure, auth systems & billing engines",
    icon: Rocket,
    category: "Product MVP",
    color: "#2570E8",
    bgSoft: "rgba(37, 112, 232, 0.08)",
  },
  {
    label: "Business Process Automation",
    href: "/services/business-automation",
    desc: "Eliminate manual data entry, webhook triggers & scheduled jobs",
    icon: Workflow,
    category: "Automation",
    color: "#0BC4E3",
    bgSoft: "rgba(11, 196, 227, 0.08)",
  },
  {
    label: "AI Solutions & Integrations",
    href: "/services/ai-solutions",
    desc: "Document extraction, conversational workflows & smart predictive logic",
    icon: Sparkles,
    category: "AI & Data",
    color: "#5B3CF5",
    bgSoft: "rgba(91, 60, 245, 0.08)",
  },
]

const navLinks = [
  { label: "Services",   href: "/services",    hasMega: "services" },
  { label: "Solutions",  href: "/services",    hasMega: "solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Work",       href: "/work" },
  { label: "Process",    href: "/process" },
  { label: "About",      href: "/about" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false)
  const [megaOpen, setMegaOpen]           = useState<string | null>(null)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const location   = useLocation()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    const isScrolled = y > 20
    setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev))
  })

  useEffect(() => { setMobileOpen(false); setMegaOpen(null) }, [location.pathname])

  const openMega = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(key) }
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(null), 180) }
  const keepMega  = () => { if (closeTimer.current) clearTimeout(closeTimer.current) }

  const transparent = !scrolled
  const linkBase = transparent ? "text-white/80 hover:text-white" : "text-[#3D5168] hover:text-[#0A1828]"

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "nav-glass border-b border-[#E2EBF5]"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
        aria-label="Main navigation"
      >
        {/* Top gradient line (only when at top) */}
        {transparent && (
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent 0%, rgba(21,136,255,0.6) 30%, rgba(11,196,227,0.6) 70%, transparent 100%)" }}
          />
        )}

        <div className="container-wide">
          <div className="flex items-center justify-between h-[68px] lg:h-[72px]">

            {/* Logo (White at top, Dark when scrolled) */}
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
                      `relative flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
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
                            size={12}
                            className={`transition-transform duration-200 ${megaOpen === link.hasMega ? "rotate-180 text-blue-500" : ""}`}
                            style={{ opacity: 0.7 }}
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
                <Link to="/contact" data-cta className="btn-primary text-sm shadow-md">
                  <Zap size={14} />
                  Start a Project
                  <ArrowUpRight size={14} />
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

        {/* Next-Level Mega Menu Dropdown */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.99 }}
              animate={{ opacity: 1,  y: 0,  scale: 1 }}
              exit={{ opacity: 0, y: -6,  scale: 0.99 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transformOrigin: "top",
                borderColor: "#E2EBF5",
                boxShadow: "0 25px 50px -12px rgba(11, 26, 46, 0.15)",
              }}
              className="absolute left-0 right-0 bg-white/95 backdrop-blur-2xl border-b shadow-2xl"
              onMouseEnter={keepMega}
              onMouseLeave={closeMega}
            >
              <div className="container-wide max-w-5xl mx-auto py-7 px-4 sm:px-6">
                <div className="flex items-center justify-between mb-4 pb-2.5 border-b" style={{ borderColor: "#E2EBF5" }}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-xs font-bold tracking-[0.16em] uppercase text-blue-600" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                      {megaOpen === "services" ? "Full-Cycle Services" : "Custom Industry Solutions"}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                    {megaOpen === "services" ? "8 Core Engineering Divisions" : "6 Purpose-Built Architectures"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(megaOpen === "services" ? servicesData : solutionsData).map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href + item.label}
                        to={item.href}
                        className="group flex items-start gap-3.5 p-3.5 rounded-2xl transition-all duration-200 hover:bg-[#F0F6FF] border border-transparent hover:border-blue-100 hover:shadow-sm"
                      >
                        {/* Icon Container with hover effect */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 group-hover:rotate-2 shadow-xs"
                          style={{ background: item.bgSoft, color: item.color }}
                        >
                          <Icon size={18} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <p
                              className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors duration-200 truncate"
                              style={{ fontFamily: "Sora, sans-serif" }}
                            >
                              {item.label}
                            </p>
                            <ArrowUpRight
                              size={13}
                              className="opacity-0 group-hover:opacity-100 text-blue-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                            />
                          </div>
                          <p className="text-xs text-slate-500 leading-snug line-clamp-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>
                            {item.desc}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
              className="fixed top-0 right-0 bottom-0 w-[min(320px,88vw)] z-50 lg:hidden overflow-y-auto"
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
                              <div className="pl-3 space-y-1 pb-2 pt-1">
                                {(link.hasMega === "services" ? servicesData : solutionsData).map((s) => {
                                  const Icon = s.icon
                                  return (
                                    <Link
                                      key={s.href + s.label}
                                      to={s.href}
                                      className="flex items-center gap-3 py-2 px-3 text-sm rounded-xl transition-colors hover:bg-[#EEF3FA] group"
                                      style={{ color: "#1E293B", fontFamily: "Plus Jakarta Sans, sans-serif" }}
                                    >
                                      <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                                        style={{ background: s.bgSoft, color: s.color }}
                                      >
                                        <Icon size={14} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-xs text-slate-800 group-hover:text-blue-600 transition-colors truncate">
                                          {s.label}
                                        </p>
                                      </div>
                                    </Link>
                                  )
                                })}
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
