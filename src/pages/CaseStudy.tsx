import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import PageTransition from '../components/PageTransition'

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  )
}

const caseStudies: Record<string, {
  title: string;
  industry: string;
  services: string[];
  challenge: string;
  approach: string;
  solution: string;
  features: string[];
  tech: string[];
  outcome: string;
  accent: string;
  bg: string;
  isLight: boolean;
  nextSlug: string;
  nextTitle: string;
}> = {
  'alpha-crm': {
    title: 'Enterprise CRM Platform',
    industry: 'Professional Services',
    services: ['CRM Development', 'API Integrations', 'Business Automation'],
    challenge: 'A multi-division professional services firm was managing client relationships across three disconnected legacy systems, creating duplicate contact records, missed follow-ups and reporting that required manual consolidation across tools.',
    approach: 'We spent the first two weeks mapping their sales and account management workflow across each division before proposing any solution. We interviewed sales reps, account managers and the management team separately to understand each perspective.',
    solution: 'A custom CRM platform with division-specific pipeline stages and views, a unified client record that spans divisions, automated task creation on pipeline movement, management dashboards for cross-division reporting and an integration with their existing invoicing tool.',
    features: [
      'Division-aware sales pipeline management',
      'Unified client and contact records',
      'Automated task creation on stage change',
      'Cross-division management reporting',
      'Email and activity logging',
      'Role-based access by division and seniority',
      'Invoice integration with existing billing tool',
      'Mobile-accessible interface',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'AWS'],
    outcome: 'The three legacy tools were replaced. Duplicate records were eliminated. Management now have a single accurate view of pipeline and client health across all divisions. The sales team adopted the platform within two weeks.',
    accent: '#1860D4',
    bg: '#0B1A2E',
    isLight: false,
    nextSlug: 'retail-platform',
    nextTitle: 'Retail Operations Platform',
  },
  'retail-platform': {
    title: 'Retail Operations Platform',
    industry: 'Retail & E-commerce',
    services: ['Web Application', 'Custom Software', 'API Integrations'],
    challenge: 'A growing retailer with physical stores and an online channel was operating from disconnected systems â€” store managers in spreadsheets, buyers in one platform, logistics in another. There was no unified view of inventory, orders or performance.',
    approach: 'Rather than replacing all their existing systems, we focused on building a unified operations layer that pulled data from each source. This reduced risk and meant the team could adopt the new dashboard without changing every tool at once.',
    solution: 'An operations platform with real-time inventory visibility across channels, order management across online and store, buyer-facing purchasing and stock forecasting tools, and a management dashboard with consolidated performance reporting.',
    features: [
      'Real-time inventory across all channels',
      'Unified order management (online + in-store)',
      'Buyer tools: purchase orders, supplier management',
      'Low-stock alerts and forecasting',
      'Management performance dashboard',
      'Integration with existing POS and e-commerce systems',
      'Role-based views for store managers, buyers and operations',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST API integrations'],
    outcome: 'The team reduced their daily manual reporting by approximately 4 hours. Buyers had visibility for the first time into real-time stock across all channels. The management dashboard replaced five separate weekly reports.',
    accent: '#1860D4',
    bg: '#EFF4FA',
    isLight: true,
    nextSlug: 'property-saas',
    nextTitle: 'Property Management SaaS',
  },
  'property-saas': {
    title: 'Property Management SaaS',
    industry: 'Real Estate',
    services: ['SaaS Development', 'UI/UX Design', 'API Integrations'],
    challenge: 'An estate agency group wanted to turn their internal property management system into a licensable SaaS product for independent agencies. The existing system was a single-tenant tool that could not be shared between customers.',
    approach: 'We designed a multi-tenant architecture from the ground up â€” with isolated data spaces for each agency, shared infrastructure to keep costs manageable, and an agency-specific configuration layer for branding and workflow customisation.',
    solution: 'A multi-tenant property management SaaS platform with agency-isolated data, subscription billing, agency-configurable workflows, a client portal for property vendors and landlords, and an admin interface for the platform operator.',
    features: [
      'Multi-tenant architecture with data isolation',
      'Agency-configurable pipeline stages and fields',
      'Subscription billing with Stripe integration',
      'Property listing and client management',
      'Vendor and landlord portals',
      'Automated document generation',
      'Viewing and appointment scheduling',
      'Platform operator admin interface',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'TypeScript'],
    outcome: 'The platform launched with the agency group\'s own branches as the first licensees. The multi-tenant architecture is designed to support independent agency sign-ups without infrastructure changes.',
    accent: '#0EAFD4',
    bg: '#060E1C',
    isLight: false,
    nextSlug: 'logistics-dashboard',
    nextTitle: 'Logistics Operations Dashboard',
  },
  'logistics-dashboard': {
    title: 'Logistics Operations Dashboard',
    industry: 'Logistics',
    services: ['Web Application', 'API Integrations', 'Business Automation'],
    challenge: 'A logistics company had no real-time visibility into their fleet or delivery status. Customers called daily for updates. Management had no reliable way to identify problems before they escalated.',
    approach: 'We connected their GPS fleet tracking system, their carrier APIs and their warehouse management software into a single operations view â€” without replacing any existing system.',
    solution: 'A real-time operations dashboard giving the ops team live fleet visibility, shipment status tracking and automated customer notification triggers when key delivery milestones are reached.',
    features: [
      'Live fleet tracking (connected to existing GPS system)',
      'Shipment status aggregation across carriers',
      'Customer notification automation (SMS and email)',
      'Exception and delay flagging for the ops team',
      'Driver dispatch and route notes',
      'Delivery performance reporting',
      'Customer self-service tracking portal',
    ],
    tech: ['React', 'Node.js', 'WebSockets', 'Twilio', 'Carrier APIs', 'PostgreSQL'],
    outcome: 'Customer inbound calls for delivery updates reduced significantly. The ops team could identify and act on delays before customers were aware. Management had daily and weekly performance reports generated automatically.',
    accent: '#1860D4',
    bg: '#EFF4FA',
    isLight: true,
    nextSlug: 'alpha-crm',
    nextTitle: 'Enterprise CRM Platform',
  },
}

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const data = caseStudies[slug || '']

  if (!data) {
    return (
      <PageTransition title="Project Not Found | SwasTek Solutions">
        <div className="pt-40 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>Project not found</h1>
          <Link to="/work" className="btn-primary mt-6 inline-flex">View all work <ArrowUpRight size={14} /></Link>
        </div>
      </PageTransition>
    )
  }

  return (
    <PageTransition title={`${data.title} | SwasTek Solutions`} description={data.challenge}>
      {/* Hero */}
      <section className="pt-32 pb-20 min-h-[50vh] flex items-end" style={{ background: data.isLight ? 'linear-gradient(160deg, #EFF4FA 0%, #ffffff 60%)' : `linear-gradient(135deg, ${data.bg} 0%, #0E2040 100%)` }}>
        <div className="container-wide">
          <FadeUp>
            <Link to="/work" className="inline-flex items-center gap-2 text-sm mb-8 transition-colors" style={{ color: data.isLight ? '#7A8FA3' : 'rgba(255,255,255,0.4)', fontFamily: 'Manrope, sans-serif' }}>
              <ArrowLeft size={14} /> Our Work
            </Link>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: data.accent, fontFamily: 'Manrope, sans-serif' }}>
              {data.industry}
            </p>
            <h1 className="font-heading text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ color: data.isLight ? '#0B1A2E' : '#ffffff', fontFamily: 'Sora, sans-serif' }}>
              {data.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {data.services.map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: data.isLight ? '#EBF4FF' : 'rgba(255,255,255,0.08)', color: data.isLight ? '#1860D4' : '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>
                  {s}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="page-section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16">
            <div className="space-y-14">
              <FadeUp>
                <p className="section-label">The challenge</p>
                <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem' }}>
                  {data.challenge}
                </p>
              </FadeUp>
              <FadeUp delay={0.05}>
                <p className="section-label">Our approach</p>
                <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem' }}>
                  {data.approach}
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="section-label">The solution</p>
                <p className="text-base leading-relaxed" style={{ color: '#3D5168', fontFamily: 'Manrope, sans-serif', fontSize: '1.05rem' }}>
                  {data.solution}
                </p>
              </FadeUp>
              <FadeUp delay={0.12}>
                <div className="p-6 rounded-2xl border-l-4" style={{ background: '#EFF4FA', borderColor: data.accent }}>
                  <p className="section-label">Outcome</p>
                  <p className="text-base leading-relaxed" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>
                    {data.outcome}
                  </p>
                </div>
              </FadeUp>
            </div>

            <div className="space-y-8">
              <FadeUp delay={0.08}>
                <div className="p-6 rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <p className="section-label mb-4">Key features</p>
                  <ul className="space-y-2">
                    {data.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: '#0B1A2E', fontFamily: 'Manrope, sans-serif' }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: data.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <div className="p-6 rounded-xl border" style={{ borderColor: '#E4EDF7' }}>
                  <p className="section-label mb-4">Technology</p>
                  <div className="flex flex-wrap gap-2">
                    {data.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full" style={{ background: '#EBF4FF', color: '#1860D4', fontFamily: 'Manrope, sans-serif' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
              <FadeUp delay={0.12}>
                <Link to="/contact" data-cta className="btn-primary w-full justify-center">
                  Start a similar project <ArrowUpRight size={14} />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="page-section-sm" style={{ background: '#EFF4FA' }}>
        <div className="container-wide">
          <div className="flex items-center justify-between">
            <p className="text-sm" style={{ color: '#7A8FA3', fontFamily: 'Manrope, sans-serif' }}>Next project</p>
            <Link to={`/work/${data.nextSlug}`} className="flex items-center gap-3 group">
              <span className="font-heading font-bold text-xl transition-colors group-hover:text-blue-600" style={{ color: '#0B1A2E', fontFamily: 'Sora, sans-serif' }}>
                {data.nextTitle}
              </span>
              <ArrowRight size={20} className="transition-all group-hover:translate-x-1" style={{ color: '#1860D4' }} />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

