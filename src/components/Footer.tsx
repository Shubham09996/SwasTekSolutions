import { Link } from "react-router-dom"
import { ArrowUpRight, Mail, Globe, ExternalLink } from "lucide-react"

const footerServices = [
  { label: "Website Development",  href: "/services/web-development" },
  { label: "Custom Software",      href: "/services/custom-software" },
  { label: "CRM Development",      href: "/services/crm-development" },
  { label: "SaaS Development",     href: "/services/saas-development" },
  { label: "Business Automation",  href: "/services/business-automation" },
  { label: "API & Integrations",   href: "/services/api-integrations" },
  { label: "E-commerce",           href: "/services/ecommerce" },
  { label: "AI Solutions",         href: "/services/ai-solutions" },
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
    <footer style={{ background: "#060E1C", fontFamily: "Manrope, sans-serif" }}>

      {/* Pre-footer CTA band */}
      <div className="relative overflow-hidden border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        {/* Glow */}
        <div className="absolute" style={{ width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(24,96,212,0.14) 0%, transparent 70%)", top: "-50%", left: "40%", filter: "blur(60px)", pointerEvents: "none" }} />
        <div className="container-wide py-20 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold tracking-[0.24em] uppercase mb-4" style={{ color: "#0EAFD4" }}>
                Ready to start?
              </p>
              <h2 className="font-bold leading-[1.08] tracking-tight text-white" style={{ fontFamily: "Sora, sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.035em" }}>
                Tell us what you&rsquo;re<br />trying to build.
              </h2>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <Link to="/contact" data-cta className="btn-primary">
                Start a Project <ArrowUpRight size={14} />
              </Link>
              <Link to="/work" className="text-sm font-semibold flex items-center gap-1.5 transition-all hover:gap-2.5" style={{ color: "#7A8FA3" }}>
                View our work <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 lg:gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="block mb-5">
              <img
                src="/logo-white.png"
                alt="SwasTek Solutions"
                className="h-10 lg:h-11 w-auto object-contain"
                style={{ maxWidth: 200 }}
              />
            </Link>
            <p className="text-sm font-semibold mb-3" style={{ color: "#C8D6E5" }}>
              Technology. People. Progress.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#3E5168" }}>
              We design and build software, websites, CRM platforms and digital systems for businesses that need technology shaped around how they actually work.
            </p>
            <div className="flex gap-2.5">
              {[
                { icon: <ExternalLink size={14} />, label: "LinkedIn" },
                { icon: <Mail size={14} />, label: "Email" },
                { icon: <Globe size={14} />, label: "Website" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-[#1860D4]/20"
                  style={{ background: "rgba(255,255,255,0.05)", color: "#7A8FA3", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#0EAFD4" }}>Services</p>
            <ul className="space-y-2.5">
              {footerServices.map((s) => (
                <li key={s.href}>
                  <Link to={s.href} className="text-sm transition-colors duration-150 hover:text-white" style={{ color: "#3E5168" }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#0EAFD4" }}>Company</p>
            <ul className="space-y-2.5">
              {footerNav.map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="text-sm transition-colors duration-150 hover:text-white" style={{ color: "#3E5168" }}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-5" style={{ color: "#0EAFD4" }}>Get in Touch</p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3E5168" }}>
              Have a project in mind? We&rsquo;d like to hear about it.
            </p>
            <Link to="/contact" className="text-sm font-semibold flex items-center gap-1.5 transition-all hover:gap-2.5 mb-8" style={{ color: "#1860D4" }}>
              Start the conversation <ArrowUpRight size={13} />
            </Link>
            <div className="p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <p className="text-[10px] font-semibold uppercase tracking-wider mb-1.5" style={{ color: "#3E5168" }}>Email us</p>
              <a href="mailto:hello@swastek.com" className="text-sm font-medium transition-colors hover:text-white" style={{ color: "#C8D6E5" }}>
                hello@swastek.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
        <div className="container-wide py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "#2A3A4D" }}>
            &copy; 2026 SwasTek Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="text-xs transition-colors hover:text-white" style={{ color: "#2A3A4D" }}>Privacy Policy</Link>
            <Link to="/terms" className="text-xs transition-colors hover:text-white" style={{ color: "#2A3A4D" }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
