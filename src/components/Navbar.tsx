import { useState, useEffect, useRef } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, ChevronDown, X, Menu } from "lucide-react"

const services = [
  { label: "Website Development",  href: "/services/web-development",   desc: "Fast, responsive business websites" },
  { label: "Custom Software",       href: "/services/custom-software",   desc: "Purpose-built internal systems" },
  { label: "CRM Development",       href: "/services/crm-development",   desc: "Sales and customer management" },
  { label: "SaaS Development",      href: "/services/saas-development",  desc: "Scalable product platforms" },
  { label: "Web Applications",      href: "/services/web-applications",  desc: "Portals, tools and platforms" },
  { label: "Business Automation",   href: "/services/business-automation", desc: "Remove repetitive workflows" },
  { label: "API & Integrations",    href: "/services/api-integrations",  desc: "Connect your tools and systems" },
  { label: "E-commerce",            href: "/services/ecommerce",         desc: "Custom storefronts and checkout" },
  { label: "AI Solutions",          href: "/services/ai-solutions",      desc: "Practical AI for real operations" },
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
  const [megaOpen, setMegaOpen]           = useState<string | null>(null)
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const location   = useLocation()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setMegaOpen(null) }, [location.pathname])

  const isHome = location.pathname === "/"
  const openMega = (key: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(key) }
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(null), 160) }
  const keepMega  = () => { if (closeTimer.current) clearTimeout(closeTimer.current) }

  const transparent = isHome && !scrolled
  const navBg = scrolled
    ? "bg-white/[0.97] backdrop-blur-[18px] shadow-[0_1px_0_rgba(11,26,46,0.08)]"
    : isHome
    ? "bg-transparent"
    : "bg-white border-b border-[#E4EDF7]"

  const linkBase = transparent ? "text-white/70 hover:text-white" : "text-[#3D5168] hover:text-[#0B1A2E]"

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`} style={{ fontFamily: "Manrope, sans-serif" }} aria-label="Main navigation">
        <div className="container-wide">
          <div className="flex items-center justify-between h-[66px] lg:h-[70px]">

            <Link to="/" className="relative flex items-center h-10 transition-all duration-300">
              <img
                src="/logo-white.png"
                alt="SwasTek Solutions"
                className={`h-9 lg:h-10 w-auto object-contain transition-opacity duration-300 ${
                  transparent ? "opacity-100" : "opacity-0 absolute pointer-events-none"
                }`}
                style={{ maxWidth: 180 }}
              />
              <img
                src="/logo.png"
                alt="SwasTek Solutions"
                className={`h-9 lg:h-10 w-auto object-contain transition-opacity duration-300 ${
                  !transparent ? "opacity-100" : "opacity-0 absolute pointer-events-none"
                }`}
                style={{ maxWidth: 180 }}
              />
            </Link>

            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div key={link.label} className="relative" onMouseEnter={() => link.hasMega ? openMega(link.hasMega) : setMegaOpen(null)} onMouseLeave={closeMega}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `relative flex items-center gap-1 px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${isActive ? (transparent ? "text-white" : "text-[#1860D4]") : linkBase}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {link.hasMega && <ChevronDown size={12} className={`transition-transform duration-200 ${megaOpen === link.hasMega ? "rotate-180" : ""}`} />}
                        {isActive && (
                          <motion.span layoutId="nav-active" className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full"
                            style={{ background: transparent ? "rgba(255,255,255,0.65)" : "linear-gradient(90deg,#1860D4,#0EAFD4)" }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <Link to="/contact" data-cta className="btn-primary text-sm">
                Start a Project <ArrowUpRight size={13} />
              </Link>
            </div>

            <button className={`lg:hidden p-2 rounded-lg transition-colors ${transparent ? "text-white/80" : "text-[#3D5168]"}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="absolute left-0 right-0 bg-white/[0.98] backdrop-blur-[20px] border-b"
              style={{ borderColor: "#E4EDF7", boxShadow: "0 12px 40px rgba(11,26,46,0.09)" }}
              onMouseEnter={keepMega} onMouseLeave={closeMega}
            >
              <div className="container-wide py-10">
                <div className="grid grid-cols-[1.6fr_1fr] gap-12">
                  <div>
                    <p className="section-label mb-5">{megaOpen === "services" ? "Services" : "Solutions"}</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {(megaOpen === "services" ? services : solutions).map((item) => (
                        <Link key={item.href + item.label} to={item.href}
                          className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-150 hover:bg-[#EFF4FA]"
                        >
                          <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-colors duration-150 group-hover:bg-[#1860D4]" style={{ background: "#D3DCE8" }} />
                          <div>
                            <p className="font-semibold text-sm transition-colors duration-150 flex items-center gap-1.5 group-hover:text-[#1860D4]" style={{ color: "#0B1A2E" }}>
                              {item.label}
                              <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </p>
                            <p className="text-xs mt-0.5 leading-snug" style={{ color: "#6B7E94" }}>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="pl-10 border-l" style={{ borderColor: "#E4EDF7" }}>
                    <p className="section-label mb-5">Quick Links</p>
                    <div className="space-y-5">
                      {[
                        { label: "All Services", href: "/services", desc: "Browse our complete offering" },
                        { label: "Our Work", href: "/work", desc: "Case studies and projects" },
                        { label: "How We Work", href: "/process", desc: "From brief to launch" },
                      ].map((q) => (
                        <Link key={q.href} to={q.href} className="group block">
                          <p className="font-semibold text-sm flex items-center gap-1.5 transition-colors group-hover:text-[#1860D4]" style={{ color: "#0B1A2E" }}>{q.label} <ArrowUpRight size={12} /></p>
                          <p className="text-xs mt-0.5" style={{ color: "#6B7E94" }}>{q.desc}</p>
                        </Link>
                      ))}
                      <div className="pt-4 border-t" style={{ borderColor: "#E4EDF7" }}>
                        <Link to="/contact" data-cta className="btn-primary text-sm inline-flex">Start a Project <ArrowUpRight size={13} /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#050C17]/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[316px] z-50 lg:hidden overflow-y-auto"
              style={{ background: "#ffffff", boxShadow: "-12px 0 40px rgba(11,26,46,0.11)" }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "#E4EDF7" }}>
                <Link to="/" className="flex items-center">
                  <img src="/logo.png" alt="SwasTek Solutions" className="h-9 w-auto object-contain" style={{ maxWidth: 160 }} />
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg" style={{ color: "#6B7E94" }}><X size={20} /></button>
              </div>
              <div className="px-4 py-5 space-y-0.5">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.hasMega ? (
                      <>
                        <button className="w-full flex items-center justify-between py-2.5 px-3 text-sm font-semibold rounded-xl transition-colors hover:bg-[#EFF4FA]"
                          style={{ color: "#0B1A2E", fontFamily: "Manrope, sans-serif" }}
                          onClick={() => setMobileSubmenu(mobileSubmenu === link.hasMega ? null : (link.hasMega || null))}
                        >
                          {link.label}
                          <ChevronDown size={14} className={`transition-transform duration-200 ${mobileSubmenu === link.hasMega ? "rotate-180" : ""}`} style={{ color: "#6B7E94" }} />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenu === link.hasMega && (
                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                              <div className="pl-4 space-y-0.5 pb-2 pt-1">
                                {(link.hasMega === "services" ? services : solutions).map((s) => (
                                  <Link key={s.href + s.label} to={s.href}
                                    className="flex items-center gap-2 py-2 px-3 text-sm rounded-xl transition-colors hover:bg-[#EFF4FA] hover:text-[#1860D4]"
                                    style={{ color: "#3D5168", fontFamily: "Manrope, sans-serif" }}
                                  >
                                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#D3DCE8" }} />
                                    {s.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink to={link.href}
                        className={({ isActive }) =>
                          `flex py-2.5 px-3 text-sm font-semibold rounded-xl transition-colors ${isActive ? "text-[#1860D4] bg-[#EFF4FA]" : "text-[#0B1A2E] hover:bg-[#EFF4FA]"}`
                        }
                        style={{ fontFamily: "Manrope, sans-serif" }}
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-2 border-t" style={{ borderColor: "#E4EDF7" }}>
                  <Link to="/contact" data-cta className="btn-primary w-full justify-center">Start a Project <ArrowUpRight size={14} /></Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
